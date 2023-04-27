/**
 * @file Define GETRefreshImg
 * @author joelthorner
 */
'use strict';

var GETRefreshImg = () => {

  /**
   * Refresh get param string
   * @type {string}
   */
  var refreshValue = 'refresh=' + new Date().getUTCMilliseconds();

  /**
   * Initialize GETRefreshImg
   */
  var init = () => {
    initCssBackgrounds();
    initImgs();
  };

  /**
   * Initialize refresh css image backgrounds
   */
  var initCssBackgrounds = () => {
    let backgrounds = _getBgImgs(document);

    if (backgrounds.length) {
      for (let i = 0; i < backgrounds.length; i++) {
        const background = backgrounds[i];
        _initCssBackground(background);
      }
    }
  };

  /**
   *  Initialize refresh css image background
   * @param {object} background 
   */
  var _initCssBackground = (background) => {
    let symbol = background.img.includes('?') ? '&' : '?';

    if (!background.img.includes('base64') && !background.img.includes('svg+xml')) {
      background.node.style.backgroundImage = `url('${background.img}${symbol}${refreshValue}')`;
    }
  };

  /**
   * Initialize refresh image and picture tags
   */
  var initImgs = () => {
    let imgs = document.querySelectorAll('img[src], img[srcset], source[srcset]');
    if (imgs) {
      for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        _initImg(img);
      }
    }
  };

  /**
   * Initialize refresh image and picture tag
   * @param {object} img 
   */
  var _initImg = (img) => {
    let attrName = _getElementAttrName(img),
      symbol = '?';

    if (attrName) {
      if (img.getAttribute(attrName).includes('?')) {
        symbol = '&';
      }

      let imageSrc = `${img.getAttribute(attrName)}${symbol}${refreshValue}`;
      img.setAttribute(attrName, imageSrc);
    }
  };

  /**
   * Of img or picture HTML node returns src attribute name to refresh
   * @param {object} element 
   * @returns {string|null}
   */
  var _getElementAttrName = (element) => {
    if (element.hasAttribute('src'))
      return 'src';
    if (element.hasAttribute('srcset'))
      return 'srcset';

    return null;
  };

  /**
   * Find all elements inside container and return array of objects
   * with background image src and node.
   * @param {object} container - HTML node
   * @returns {object[]}
   */
  var _getBgImgs = (container) => {
    const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i

    return Array.from(
      Array.from(container.querySelectorAll('*'))
        .reduce((collection, node) => {
          let styles = document.defaultView.getComputedStyle(node),
            prop = styles['background-image'];

          let match = srcChecker.exec(prop)
          if (match) {
            collection.add({ img: match[1], node: node })
          }
          return collection
        }, new Set())
    )
  };

  init();
};

export default GETRefreshImg;
