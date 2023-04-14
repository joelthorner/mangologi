import React from 'react';
import actions from '../../../../data/popupActionsData';
import Ripple from '../../../../components/Ripple/Ripple';
import { useSelector } from 'react-redux';

const sendMessageDirective = (directive) => {
  if (Array.isArray(directive)) {
    directive = directive.join(',');
  }
  // Send directive to background.js
  chrome.runtime.sendMessage({
    directive: directive,
  });
};

const createTabDirective = (directive) => {
  chrome.tabs.create({
    url: directive,
  });
};

/**
 * Execute popup action
 * @param {string|string[]} directive
 */
const executeDirective = (directive) => {
  if (directive.includes('http')) {
    createTabDirective(directive);
  } else {
    sendMessageDirective(directive);
  }
};

const NavTabContent = ({ keyData }) => {
  const data = actions[keyData];
  const commerceData = useSelector((state) => state.commerceData);

  return (
    <div className="grid">
      {data.map((item, index) => (
        <button
          type="button"
          disabled={item.disabled ? item.disabled(commerceData) : false}
          key={`action-${keyData}-${index}`}
          onClick={() => executeDirective(item.directive)}
          className={`btn btn-action ${item.activedByCookie ? ' actived' : ''}`}
        >
          {item.icon}
          <span className="name">{item.text}</span>
          <Ripple color={'var(--bs-primary)'} duration={500} />
        </button>
      ))}
    </div>
  );
};

export default NavTabContent;
