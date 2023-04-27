import React from 'react';
import {
  IconChatSquare,
  IconEmojiHeartEyes,
  IconEnvelope,
  IconGrid1x2,
  IconImages,
  IconJournal,
  IconKey,
  IconPersonBadge,
  IconVr,
} from '../components/Icons';

const containerLinesGuide_activedByCookie = (commerceData) => {
  return new Promise((resolve, reject) => {
    if (commerceData.tabId === null || !commerceData.tabUrl.includes('http')) {
      resolve(false);
    }

    chrome.cookies.get(
      {
        url: commerceData.tabUrl,
        name: 'containerLinesGuideCookie',
      },
      (cookie) => {
        if (cookie && cookie.value === '1') {
          resolve(true);
        }
        resolve(false);
      }
    );
  });
};

const actions = {
  utils: [
    {
      activedByCookie: containerLinesGuide_activedByCookie,
      disabled: (commerceData) => false,
      key: 'containerLinesGuide',
      directive: [
        'contentScripts/actions/containerLinesGuide/index.js',
        'contentScripts/actions/containerLinesGuide/click.js',
      ],
      text: 'Container guides',
      icon: <IconVr />,
    },
    {
      activedByCookie: null,
      disabled: (commerceData) => false,
      key: 'GETRefreshImg',
      directive: 'GETRefreshImg',
      text: 'GET Refresh img',
      icon: <IconImages />,
    },
    {
      activedByCookie: null,
      disabled: (commerceData) => false,
      key: 'emilioGenerator',
      directive: 'https://joelthorner.github.io/emilio-generator/',
      text: 'Emilio Generator',
      icon: <IconEnvelope />,
    },
    {
      activedByCookie: null,
      disabled: (commerceData) =>
        commerceData.template.type === 'modular-2018' &&
        commerceData.template.type === 'template-base',
      key: 'showTemplateModules',
      directive: [
        'contentScripts/actions/showTemplateModules/index.js',
        'contentScripts/actions/showTemplateModules/index.css',
      ],
      text: 'Show template modules',
      icon: <IconJournal />,
    },
    {
      activedByCookie: null,
      disabled: (commerceData) => false,
      key: 'swiperCssGenerator',
      directive: 'https://joelthorner.github.io/swiper-css-generator/',
      text: 'Swiper css generator',
      icon: <IconGrid1x2 />,
    },
    {
      activedByCookie: null,
      disabled: (commerceData) => false,
      key: 'showSvgIcons',
      directive: [
        'contentScripts/log.js',
        'contentScripts/actions/showSvgIcons/index.js',
        'contentScripts/actions/showSvgIcons/index.css',
      ],
      text: 'Show svg icons',
      icon: <IconEmojiHeartEyes />,
    },
  ],

  testing: [
    {
      activedByCookie: null,
      disabled: (commerceData) =>
        commerceData.type !== 'fluid' && commerceData.type !== 'beyond',
      key: 'testingNotifies',
      directive: ['contentScripts/actions/testingNotifies/index.js'],
      text: 'Testing notifies',
      icon: <IconChatSquare />,
    },
    {
      activedByCookie: null,
      key: 'fluidAutoSignup',
      disabled: (commerceData) => commerceData.type !== 'fluid',
      directive: 'fluidAutoSignupInit',
      text: 'Fluid auto signup',
      icon: <IconPersonBadge />,
    },
  ],
  lcHacks: [
    {
      activedByCookie: null,
      disabled: (commerceData) => {
        const tabUrl = commerceData.tabUrl;
        return (
          !/(8x\.logicommerce\.net|admin\.igd\.production|admin\.igd\.pre\.production|8x-hk\.logicommerce\.net|8x-os\.logicommerce\.net)/.test(
            tabUrl
          ) || /login/.test(tabUrl)
        );
      },
      key: 'showLCFTPSettings',
      directive: ['contentScripts/actions/showLCFTPSettings/index.js'],
      text: '8x FTP password',
      icon: <IconKey />,
    },
  ],
};

export default actions;
