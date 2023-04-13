/**
 * @file Define the ecommerceData object and send to popup requester
 * @author joelthorner
 */

var TYPE_FLUID = 'fluid';
var TYPE_COLD_FUSION = 'cold-fusion';
var TYPE_BEYOND = 'beyond';
var TYPE_PRESTASHOP = 'prestashop';

/**
 * @typedef ecommerceDataObject
 * @type {Object}
 * @property {Number} commerceId
 * @property {String} type
 * @property {String} environment
 * @property {String} template
 * @property {String} templateVersion
 * @property {String} bootstrap
 * @property {Boolean} fluidCache
 */

var ecommerceData = {
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
    const cssAssetsEls = document.querySelectorAll('link[type="text/css"][href]');
    if (cssAssetsEls) {
      cssAssetsEls.forEach((item) => {
        // Test production fluid-cf
        let cloudfrontCommerceId = this._extractShopId(item.getAttribute('href'), /cloudfront.net\/([0-9]{1,5})/);
        if (cloudfrontCommerceId !== null) {
          commerceId = cloudfrontCommerceId;
          return;
        }
        // Test production beyond
        let beyondCommerceId = this._extractShopId(item.getAttribute('href'), /assets\.logicommerce\.cloud\/([0-9]{1,5})/);
        if (beyondCommerceId !== null) {
          commerceId = beyondCommerceId;
          return;
        }
      });
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
    if ((/[0-9]+\.sandbox\.logicommerce\.net/).test(location))
      return 'sandbox';

    if ((/[0-9]+\.igd\.production/).test(location))
      return 'igd';

    if ((/[0-9]+\.igd\.pre\.production/).test(location))
      return 'igd.pre';

    if (
      (/[0-9]+\.logicommerce\.net/).test(location) ||
      (/[0-9]+\.site\.logicommerce\.cloud/).test(location) ||
      document.querySelector('meta[name="robots"][content="index, follow"]') != null
    )
      return 'prod';

    return null;
  },

  getTemplateVersion() {

  },

  /**
   * Return template
   * @returns {String|null}
   */
  getTemplate() {
    // if (document.querySelector('[data-module]') || this._isTemplateModular2018())
    //   return TEMPLATE_MODULAR_2018;

    // return null;
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
   * Return all data object
   * @returns {ecommerceDataObject}
   */
  getData() {
    return {
      commerceId: this.getCommerceId(),
      type: this.getType(),
      environment: this.getEnvironment(),
      templateVersion: this.getTemplateVersion(),
      // template: this.getTemplate(),
      // // $.fn.tooltip.Constructor.VERSION
      // bootstrap: this.getBootstrap(),
      // fluidCache: this.getFluidCache(),
    }
  },
};

var data = ecommerceData.getData();
console.log(data);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.directive === "getCommerceData") {
    sendResponse({ commerceData: data });
  }
});