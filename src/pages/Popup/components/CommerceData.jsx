import React from 'react';
import { useSelector } from 'react-redux';
import CommerceId from './commerceData/CommerceId';
import Environment from './commerceData/Environment';
import Type from './commerceData/Type';
import TemplateVersion from './commerceData/TemplateVersion';
import TemplateType from './commerceData/TemplateType';
import FluidCache from './commerceData/FluidCache';

const CommerceData = () => {
  const commerceData = useSelector((state) => state.commerceData),
    showTemplate =
      commerceData.template.type !== null ||
      commerceData.template.version !== null,
    showAll =
      commerceData.commerceId !== null ||
      commerceData.environment !== null ||
      commerceData.type !== null ||
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
