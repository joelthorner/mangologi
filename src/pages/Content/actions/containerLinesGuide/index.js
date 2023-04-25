/**
 * @file Define containerLinesGuide
 * @author joelthorner
 * @version 1.0.1
 */
'use strict';

var containerLinesGuide = {

  /**
   * Cookie Name
   * @type {String}
   */
  cookieName: 'containerLinesGuideCookie',

  /**
   * Initialize containerLinesGuide
   * @param {Boolean} load - Indicate if call is in load or by click directive from popup
   */
  init(load) {
    if (load === true && this._getCookie(this.cookieName) === '1')
      this.create();

    else if (load === false && this._getCookie(this.cookieName) === '1')
      this.destroy();

    else if (load === false && this._getCookie(this.cookieName) !== '1')
      this.create();
  },

  /**
   * Create containerLinesGuide, add elements and cookie
   */
  create() {
    this._setCookie(this.cookieName, '1', { path: '/' });

    var containers = document.querySelectorAll('.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl');
    if (containers) {
      containers.forEach(el => {
        var classContainer = el.className.match(/container(-(fluid|lg|md|sm|xl|xxl))?/);
        if (classContainer.length) {
          var paddingLeft = window.getComputedStyle(el, null).getPropertyValue('padding-left');
          var paddingRight = window.getComputedStyle(el, null).getPropertyValue('padding-right');

          var paddingLeftText = paddingLeft;
          var paddingRightText = paddingRight;

          var paddingUnitLeft = ''; // default px
          var paddingUnitRight = ''; // default px

          var remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);

          if (remValue >= 12 && (parseFloat(paddingLeft) / remValue) % 0.25 === 0) {
            paddingUnitLeft = 'rem';
            paddingLeftText = parseFloat(paddingLeft) / remValue;
          }
          if (remValue >= 12 && (parseFloat(paddingRight) / remValue) % 0.25 === 0) {
            paddingUnitRight = 'rem';
            paddingRightText = parseFloat(paddingRight) / remValue;
          }

          el.classList.add('containerLinesGuide_rel');

          var str = `
            <div class="containerLinesGuide containerLinesGuide_left"></div>
            <div class="containerLinesGuide containerLinesGuide_left2" style="left: ${paddingLeft}">
              <span class="containerLinesGuide containerLinesGuide_paddings_val" title="Container padding left">${paddingLeftText + paddingUnitLeft}</span>
            </div>
            <div class="containerLinesGuide containerLinesGuide_middle" title="Container middle"></div>
            <div class="containerLinesGuide containerLinesGuide_right"></div>
            <div class="containerLinesGuide containerLinesGuide_right2" style="right: ${paddingRight}">
              <span class="containerLinesGuide containerLinesGuide_paddings_val" title="Container padding right">${paddingRightText + paddingUnitRight}</span>
            </div>`;
          el.insertAdjacentHTML('beforeend', str);
        }
      })
    }
    document.body.insertAdjacentHTML('beforeend', `<div class="containerLinesGuide containerLinesGuide_middle_general" title="Web middle"></div>`);
  },

  /**
   * Destroy containerLinesGuide, remove elements and cookie
   */
  destroy() {
    this._deleteCookie(this.cookieName, '/');
    var containers = document.querySelectorAll('.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl');
    if (containers) {
      containers.forEach(el => {
        el.classList.remove('containerLinesGuide_rel');
        var toRemove = el.querySelectorAll('.containerLinesGuide');
        if (toRemove) {
          toRemove.forEach(el => el.remove())
        }
      })
    }
    var middle = document.querySelector('.containerLinesGuide_middle_general');
    if (middle) {
      middle.remove();
    }
  },

  /**
   * Returns a cookie value if a name is specified. Otherwise returns the entire cookies as an object
   * @param {String} [name] - The name of the cookie to fetch the value for. Returns the entire map of cookies if not specified
   * @returns {String|Object} - The value of the cookie specified by `name` if specified. Otherwise returns a name value map of the available cookies
   */
  _getCookie(name) {
    const cookies = document.cookie.split(';')
      .reduce((acc, cookieString) => {
        const [key, value] = cookieString.split('=').map(s => s.trim());
        if (key && value) {
          acc[key] = decodeURIComponent(value);
        }
        return acc;
      }, {});
    return name ? cookies[name] || '' : cookies;
  },

  /**
   * Set a cookie
   * @param {String} name - The name of the cookie to be set
   * @param {String|Number} value - The value of the cookie
   * @param {Object} [options] - supports any cookie option like path, expires, maxAge and domain. [MDN Cookie Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
   */
  _setCookie(name, value, options = {}) {
    document.cookie = `${name}=${encodeURIComponent(value)}${Object.keys(options)
      .reduce((acc, key) => {
        return acc + `;${key.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase())}=${options[key]}`;
      }, '')
      }`;
  },

  /**
   * Delete a cookie by name
   * @param {String} name - The name of the cookie to be deleted
   * @param {String} [path] - The value of the path
   * @param {String} [domain] - The domain value
   */
  _deleteCookie(name, path, domain) {
    if (this._getCookie(name).length) {
      document.cookie = name + "=" +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }
};
