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

const actions = {
  utils: [
    {
      activedByCookie: () => false, // TODO
      disabled: false,
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
      disabled: false,
      key: 'GETRefreshImg',
      directive: ['contentScripts/actions/GETRefreshImg/index.js'],
      text: 'GET Refresh img',
      icon: <IconImages />,
    },
    {
      activedByCookie: null,
      disabled: false,
      key: 'emilioGenerator',
      directive: 'https://joelthorner.github.io/emilio-generator/',
      text: 'Emilio Generator',
      icon: <IconEnvelope />,
    },
    {
      activedByCookie: null,
      disabled: () => false, // TODO:
      // this.existsEcommerceData() &&
      // !this.isFluid() &&
      // !this.isModular2018(),
      key: 'showModulesTemplate2018',
      directive: [
        'contentScripts/actions/showModulesTemplate2018/index.js',
        'contentScripts/actions/showModulesTemplate2018/index.css',
      ],
      text: "Show '18 template modules",
      icon: <IconJournal />,
    },
    {
      activedByCookie: null,
      disabled: false,
      key: 'swiperCssGenerator',
      directive: 'https://joelthorner.github.io/swiper-css-generator/',
      text: 'Swiper css generator',
      icon: <IconGrid1x2 />,
    },
    {
      activedByCookie: null,
      disabled: false,
      key: 'showSvgIcons',
      directive: [
        'inject/log.js',
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
        commerceData.type === 'fluid' || commerceData.type === 'beyond',
      key: 'testingNotifies',
      directive: ['contentScripts/actions/testingNotifies/index.js'],
      text: 'Testing notifies',
      icon: <IconChatSquare />,
    },
    {
      activedByCookie: null,
      key: 'fluidAutoSignup',
      disabled: () => false, // TODO:
      // this.existsEcommerceData() && !this.isFluid(),
      directive: [
        'data/chromeSync.js', // TODO fixme
        'contentScripts/actions/fluidAutoSignup/index.js',
      ],
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
