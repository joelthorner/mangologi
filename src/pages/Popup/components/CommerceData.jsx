import { capitalize } from 'lodash';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CommerceId = ({ commerceId }) => {
  return commerceId !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Commerce id</Tooltip>}>
      <div className="item item-commerceId">
        <span className={`icon icon-commerceId icon-${commerceId}`}></span>
        {commerceId}
      </div>
    </OverlayTrigger>
  ) : null;
};

const Type = ({ type }) => {
  return type !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Commerce type</Tooltip>}>
      <div className="item item-type">
        <span className={`icon icon-type icon-${type}`}></span>
        {capitalize(type)}
      </div>
    </OverlayTrigger>
  ) : null;
};

const Environment = ({ environment }) => {
  return environment !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Environment</Tooltip>}>
      <div className="item item-environment">
        <span className={`icon icon-environment icon-${environment}`}></span>
        {environment}
      </div>
    </OverlayTrigger>
  ) : null;
};

const TemplateVersion = ({ template }) => {
  return template.version !== null ? (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>Template version</Tooltip>}
    >
      <div className="item item-template-version">
        <span
          className={`icon icon-template-version icon-${template.version}`}
        ></span>
        {template.version}
      </div>
    </OverlayTrigger>
  ) : null;
};

const TemplateType = ({ template }) => {
  return template.type !== null ? (
    <OverlayTrigger placement="top" overlay={<Tooltip>Template</Tooltip>}>
      <div className="item item-template-type">
        <span
          className={`icon icon-template-type icon-${template.type}`}
        ></span>
        {template.type}
      </div>
    </OverlayTrigger>
  ) : null;
};

const FluidCache = ({ type, fluidCache }) => {
  return type === 'fluid' && fluidCache !== null ? (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>Has fluid cache?</Tooltip>}
    >
      <div className="item item-fluidCache">
        <span className={`icon icon-fluidCache icon-${fluidCache}`}></span>
        {fluidCache ? 'Fluid cache' : 'No fluid cache'}
      </div>
    </OverlayTrigger>
  ) : null;
};

const CommerceData = () => {
  const commerceData = useSelector((state) => state.commerceData),
    showTemplate =
      commerceData.template.type !== null ||
      commerceData.template.version !== null,
    showAll =
      commerceData.commerceId !== null ||
      commerceData.environment !== null ||
      commerceData.type !== null ||
      commerceData.fluidCache !== null ||
      showTemplate;

  return showAll ? (
    <div className="commerce-data">
      <div className="title">Commerce info</div>
      <div className="info d-flex flex-wrap">
        <CommerceId commerceId={commerceData.commerceId} />
        <Type type={commerceData.type} />
        <Environment environment={commerceData.environment} />
        <FluidCache
          type={commerceData.type}
          fluidCache={commerceData.fluidCache}
        />
        {showTemplate ? (
          <div className="double-item">
            <TemplateType template={commerceData.template} />
            <TemplateVersion template={commerceData.template} />
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
};

export default CommerceData;
