/**
 * @file Define the commerceData object and send to popup requester
 * @author joelthorner
 */

var TYPE_FLUID = 'fluid';
var TYPE_COLD_FUSION = 'cold-fusion';
var TYPE_BEYOND = 'beyond';
var TYPE_PRESTASHOP = 'prestashop';

var ENV_SANDBOX = 'sandbox';
var ENV_IGD = 'igd';
var ENV_IGD_PRE = 'igd.pre';
var ENV_STUDIO = 'studio';
var ENV_PROD = 'prod';

var TEMPLATE_MODULAR_2018 = 'modular-2018';
var TEMPLATE_BASE_BEYOND = 'base-beyond';

/**
 * @typedef commerceData
 * @type {Object}
 * @property {Number|null} commerceId
 * @property {String|null} type
 * @property {String|null} environment
 * @property {templateData} template
 * @property {Boolean} fluidCache
 */

/**
 * @typedef templateData
 * @type {Object}
 * @property {String|null} version
 * @property {String|null} type
 */

/**
 * @typedef mangologiCommentData
 * @type {Object}
 * @property {String} key
 * @property {String} value
 */

var CommerceData = {

  mangologiCommentData: null,

  /**
   * Returns commerce id
   * @returns {Number|null}
   */
  getCommerceId() {
    let commerceId = null;

    /**
     * Checks
     * - [x] fluid-cf dev sandbox
     * - [x] fluid-cf dev local
     * - [x] fluid-cf prod
     * - [x] beyond dev
     * - [x] beyond prod
     * - [x] cf dev
     * - [x] cf prod
     */

    // Test fluid-cf dev sandbox
    commerceId = this._extractShopId(location.href, /([0-9]+)\.sandbox\.logicommerce\.net/);
    if (commerceId !== null) return commerceId;

    // Test fluid-cf dev local
    commerceId = this._extractShopId(location.href, /([0-9]+)\.igd(\.pre)?\.production/);
    if (commerceId !== null) return commerceId;

    // Test beyond dev
    commerceId = this._extractShopId(location.href, /([0-9]+)\.studio\.logicommerce\.cloud/);
    if (commerceId !== null) return commerceId;

    // Test productions by cdn assets
    const cssAssetsNodes = document.querySelectorAll('link[type="text/css"][href]');
    if (cssAssetsNodes) {
      for (let i = 0; i < cssAssetsNodes.length; i++) {
        const item = cssAssetsNodes[i];

        // Test production fluid-cf
        let cloudfrontCommerceId = this._extractShopId(item.getAttribute('href'), /cloudfront.net\/([0-9]{1,5})/);
        if (cloudfrontCommerceId !== null) {
          commerceId = cloudfrontCommerceId;
          break;
        }
        // Test production beyond
        let beyondCommerceId = this._extractShopId(item.getAttribute('href'), /assets\.logicommerce\.cloud\/([0-9]{1,5})/);
        if (beyondCommerceId !== null) {
          commerceId = beyondCommerceId;
          break;
        }
      }
      if (commerceId !== null) return commerceId;
    }

    return commerceId;
  },

  /**
   * Returns type
   * @returns {String|null}
   */
  getType() {
    if (document.body && document.body.classList.value.includes('fluidContent'))
      return TYPE_FLUID;

    if (document && document.querySelector('[href*=".cfm"]'))
      return TYPE_COLD_FUSION;

    if (document.body && document.body.classList.value.includes('lcContent'))
      return TYPE_BEYOND;

    if (document && document.querySelector('link[href*="prestashop"]')) {
      return TYPE_PRESTASHOP;
    }

    return null;
  },

  /**
   * Return environment
   * @returns {String|null}
   */
  getEnvironment() {
    if ((/[0-9]+\.sandbox\.logicommerce\.net/).test(location)) {
      return ENV_SANDBOX;
    }

    if ((/[0-9]+\.igd\.production/).test(location)) {
      return ENV_IGD;
    }

    if ((/[0-9]+\.igd\.pre\.production/).test(location)) {
      return ENV_IGD_PRE;
    }

    if ((/[0-9]+\.studio\.logicommerce\.cloud/).test(location)) {
      return ENV_STUDIO;
    }

    if (
      (/[0-9]+\.logicommerce\.net/).test(location) ||
      (/[0-9]+\.site\.logicommerce\.cloud/).test(location) ||
      document.querySelector('meta[name="robots"][content="index, follow"]') != null
    ) {
      return ENV_PROD;
    }

    return null;
  },

  /**
   * Returns template data
   * @returns {templateData}
   */
  getTemplate() {
    let data = {
      version: null,
      type: null,
    }
    if (document.querySelector('[data-module]') && document.body.classList.value.includes('fluidContent') && document.getElementById('shop-data')) {
      data.type = TEMPLATE_MODULAR_2018;
    } else if (document.querySelector('[data-module]') && document.body.classList.value.includes('lcContent')) {
      data.type = TEMPLATE_BASE_BEYOND;
    }

    if (this.mangologiCommentData) {
      for (let i = 0; i < this.mangologiCommentData.length; i++) {
        const { key, value } = this.mangologiCommentData[i];
        if (key === 'templateVersion') {
          data.version = value;
        }
      }
    }

    return data;
  },

  /**
   * Return if web has fluid cache by html comments
   * @returns {Boolean}
   */
  getFluidCache() {
    const comments = this._getComments(document.body);
    const isCacheComment = (comment) => (/lcdb_[0-9]{1,5}_[a-zA-Z_0-9]*:/).test(comment.nodeValue);
    return comments.some(isCacheComment);
  },

  /**
   * Returns data from mangologi-data comment
   * @returns {mangologiCommentData[]}
   */
  _getMangologiCommentData() {
    const comments = this._getComments(document.body);
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i].nodeValue;
      if ((/mangologi-data/).test(comment)) {
        return comment.replace('mangologi-data/', '').split(',').map((item) => {
          const [key, value] = item.split(':')
          return {
            key,
            value,
          }
        });
      }
    }
  },

  /**
   * Extract commerce id from text by regexp
   * @param {String} text
   * @param {RegExp} regex
   * @returns {Number|null}
   */
  _extractShopId(text, regex) {
    var match = text.match(new RegExp(regex));

    if (match && match.length > 1) {
      return parseInt(match[1]);
    }

    return null;
  },

  /**
   * Get html comments texts
   * @returns {Array}
   */
  _getComments(context) {
    let foundComments = [], elementPath = [context];

    while (elementPath.length > 0) {
      let el = elementPath.pop();
      for (let i = 0; i < el.childNodes.length; i++) {
        let node = el.childNodes[i];
        if (node.nodeType === Node.COMMENT_NODE) {
          foundComments.push(node);
        } else {
          elementPath.push(node);
        }
      }
    }

    return foundComments;
  },

  /**
   * Return all data object
   * @returns {commerceData}
   */
  getData() {
    this.mangologiCommentData = this._getMangologiCommentData();

    return {
      commerceId: this.getCommerceId(),
      type: this.getType(),
      environment: this.getEnvironment(),
      template: this.getTemplate(),
      fluidCache: this.getFluidCache(),
    }
  },
};

var data = CommerceData.getData();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.directive === "getCommerceData") {
    sendResponse({ commerceData: data });
  }
});