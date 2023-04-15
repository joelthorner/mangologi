import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Ripple from '../../../../components/Ripple/Ripple';

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
  const windows = chrome.extension.getViews({ type: 'popup' });
  if (windows.length) {
    windows[0].close();
  }
};

const ButtonAction = ({ item }) => {
  const [disabled, setDisabled] = useState(false);
  const [activedByCookie, setActivedByCookie] = useState(false);
  const commerceData = useSelector((state) => state.commerceData);

  useEffect(() => {
    // Set disabled
    setDisabled(item.disabled(commerceData));

    // Set activedByCookie
    if (item.activedByCookie) {
      item.activedByCookie(commerceData).then((result) => {
        console.log(result);
        setActivedByCookie(result);
      });
    }
  }, [item, commerceData]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => executeDirective(item.directive)}
      className={`btn btn-action ${activedByCookie ? ' actived' : ''}`}
    >
      {item.icon}
      <span className="name">{item.text}</span>
      <Ripple color="#FFF" duration={500} />
    </button>
  );
};

export default ButtonAction;
