import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OptionContentHeader from './common/OptionContentHeader';
import Content from '../components/Content';
import ExtraChromeSyncData from '../../../data/extraChromeSyncData.json';
import { modifyProp } from '../../../slices/chromeSyncSlice';
import ActiveSwitch from './common/ActiveSwitch';
import Form from 'react-bootstrap/Form';
import { Badge } from 'react-bootstrap';

const KEY = 'lcRichPages';

const LcRichPages = () => {
  const extraData = ExtraChromeSyncData.lcRichPages;
  const chromeSync = useSelector((state) => state.chromeSync);
  const data = chromeSync.storage.lcRichPages;
  const dispatch = useDispatch();

  return (
    <>
      <OptionContentHeader keyData={KEY} extraData={extraData} />
      <Content>
        <div className="default-option-content lc-developer-bar">
          <ActiveSwitch keyData={KEY} data={data} />
          <hr />
          <div className="checks-grid">
            {['gridView', 'betterGroupHeaders', 'betterTreeLevels'].map(
              (propKey) => (
                <Form.Check
                  type="switch"
                  id={`active-switch-${propKey}`}
                  checked={data.props[propKey]}
                  onChange={() => {
                    dispatch(modifyProp([KEY, propKey, !data.props[propKey]]));
                  }}
                  label={
                    <>
                      {chrome.i18n.getMessage(`lcRichPages_props_${propKey}`)}
                      <span>
                        {propKey === 'betterGroupHeaders' ? (
                          <>
                            {chrome.i18n.getMessage(
                              `lcRichPages_props_${propKey}_desc_1`
                            )}
                            <br />
                            {chrome.i18n.getMessage(
                              `lcRichPages_props_${propKey}_desc_2`
                            )}
                            <br />
                            {chrome.i18n.getMessage(
                              `lcRichPages_props_${propKey}_desc_3`
                            )}
                            <span className="badges">
                              <Badge bg="Header">Header</Badge>
                              <Badge bg="Menu">Menu</Badge>
                              <Badge bg="Footer">Footer</Badge>
                              <Badge bg="Home">Home</Badge>
                            </span>
                          </>
                        ) : (
                          <>
                            {chrome.i18n.getMessage(
                              `lcRichPages_props_${propKey}_desc`
                            )}
                          </>
                        )}
                      </span>
                    </>
                  }
                />
              )
            )}
          </div>
        </div>
      </Content>
    </>
  );
};

export default LcRichPages;
