! function(t, e) {
"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
define.amd ? define([], e) : "object" == typeof exports ? exports.QRBorderPlugin = e() : t.QRBorderPlugin = e()
}(this, (() => (() => {
var t = {
600: function(t) {
var e;
e = () => (() => {
var t = {
665: function(t) {
t.exports = (() => {
"use strict";
var t = {
d: (e, i) => {
for (var n in i) t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, {
enumerable: !0,
get: i[n]
})
},
o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
r: t => {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
})
}
},
e = {};
t.r(e), t.d(e, {
LICENSE_STATUS: () => l,
LICENSING_MODELS: () => d,
base64Decode: () => n,
base64Encode: () => o,
findScopeNode: () => g,
md5: () => s,
showExpiredSubscriptionGraceLicenseKeyError: () => v,
showExpiredSubscriptionLicenseKeyError: () => m,
showInvalidLicenseKeyError: () => h,
showLicenseKeyScopeError: () => u,
showMissingLicenseKeyError: () => p
});
const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
n = t => {
let e, n, o, a, r, s, l, d = "",
c = 0;
for (t = t.replace(/[^A-Za-z0-9+/=]/g, ""); c < t.length;) a=i.indexOf(t.charAt(c++)), r=i.indexOf(t.charAt(c++)),
  s=i.indexOf(t.charAt(c++)), l=i.indexOf(t.charAt(c++)), e=a << 2 | r>> 4, n = (15 & r) << 4 | s>> 2, o = (3 & s) << 6
      | l, d +=String.fromCharCode(e), 64 !=s && (d +=String.fromCharCode(n)), 64 !=l && (d +=String.fromCharCode(o));
      return d }, o=t=> {
      let e, n, o, a, r, s, l, d = "",
      c = 0;
      for (t = function(t) {
      for (let e = 0; e < t.length; e++) if (t.charCodeAt(e)>= 128) throw new Error("ASCII only support");
        return t
        }(t); c < t.length;) e=t.charCodeAt(c++), n=t.charCodeAt(c++), o=t.charCodeAt(c++), a=e>> 2, r = (3 & e) << 4 |
            n>> 4, s = (15 & n) << 2 | o>> 6, l = 63 & o, isNaN(n) ? s = l = 64 : isNaN(o) && (l = 64), d = d +
              i.charAt(a) + i.charAt(r) + i.charAt(s) + i.charAt(l);
              return d
              },
              a = [];
              let r = 0;
              for (; r < 64;) a[r]=0 | 4294967296 * Math.sin(++r % Math.PI); function s(t) { const e=[]; let i, n, o,
                s=unescape(encodeURI(t)) + "" , l=s.length; const d=[i=1732584193, n=4023233417, ~i, ~n]; for (t=--l /
                4 + 2 | 15, e[--t]=8 * l; ~l;) e[l>> 2] |= s.charCodeAt(l) << 8 * l--; for (r=s=0; r < t; r +=16) { for
                  (l=d; s < 64; l=[o=l[3], i + ((o=l[0] + [i & n | ~i & o, o & i | ~o & n, i ^ n ^ o, n ^ (i | ~o)][l=s>
                  > 4] + a[s] + ~~e[r | 15 & [s, 5 * s + 1, 3 * s + 5, 7 * s][l]]) << (l=[7, 12, 17, 22, 5, 9, 14, 20,
                    4, 11, 16, 23, 6, 10, 15, 21][4 * l + s++ % 4]) | o>>> -l), i, n]) i = 0 | l[1], n = l[2];
                    for (s = 4; s;) d[--s] += l[s]
                    }
                    for (t = ""; s < 32;) t +=(d[s>> 3] >> 4 * (1 ^ s++) & 15).toString(16);
                      return t
                      }
                      var l;
                      ! function(t) {
                      t.NotFound = "NotFound", t.Invalid = "Invalid", t.ExpiredSubscription = "ExpiredSubscription",
                      t.ExpiredSubscriptionGrace = "ExpiredSubscriptionGrace", t.Valid = "Valid", t.OutOfScope =
                      "OutOfScope", t.InvalidDomain = "InvalidDomain"
                      }(l || (l = {}));
                      const d = ["perpetual", "subscription"];

                      function c(t) {
                      console.error(["*************************************************************", "", ...t, "",
                      "*************************************************************"].join("\n"))
                      }

                      function h({
                      organization: t
                      }) {
                      c([`${t}: Invalid license key.`, "", "Your icense key isn't valid.", "", "To solve the issue, you
                      need to double check that `setLicenseKey()` is called with the right argument"])
                      }

                      function u({
                      organization: t,
                      packageName: e
                      }) {
                      c([`${t}: License key plan mismatch.`, "", `Your use of ${e} is not compatible with the plan of
                      your license key. The feature you are trying to use is not included in the plan of your license
                      key.`])
                      }

                      function p({
                      packageName: t,
                      organization: e,
                      scope: i
                      }) {
                      c([`${e}: Missing license key.`, "", `The license key is missing. You might not be allowed to use
                      \`${t}\` which is part of ${i} plan.`, "", `You need to purchase a license
                      https://lefe.dev/${e}/license.`])
                      }

                      function v({
                      scope: t,
                      packageName: e,
                      organization: i,
                      licenseKey: n,
                      expiryTimestamp: o
                      }) {
                      c([`${i}: Expired license key.`, "", `Your subscription license key to use ${e} ${t} has
                      expired.`, "", `- License key expiry timestamp: ${new Date(o)}`, `- Installed license key: ${n}`,
                      ""])
                      }

                      function m({
                      scope: t,
                      packageName: e,
                      organization: i,
                      licenseKey: n,
                      expiryTimestamp: o
                      }) {
                      throw new Error([`${i}: Expired license key.`, "", `Your subscription license key to use ${e} ${t}
                      has expired.`, "", `- License key expiry timestamp: ${new Date(o)}`, `- Installed license key:
                      ${n}`, ""].join("\n"))
                      }

                      function g(t, e) {
                      return e?.find((({
                      name: e,
                      children: i
                      }) => e === t || g(t, i)))
                      }
                      return e
                      })()
                      }
                      },
                      e = {};

                      function i(n) {
                      var o = e[n];
                      if (void 0 !== o) return o.exports;
                      var a = e[n] = {
                      exports: {}
                      };
                      return t[n].call(a.exports, a, a.exports, i), a.exports
                      }
                      i.d = (t, e) => {
                      for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                      enumerable: !0,
                      get: e[n]
                      })
                      }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
                      {
                      value: "Module"
                      }), Object.defineProperty(t, "__esModule", {
                      value: !0
                      })
                      };
                      var n = {};
                      return (() => {
                      "use strict";
                      i.r(n), i.d(n, {
                      LicenseInfo: () => r,
                      LicenseVerifier: () => o,
                      showWatermark: () => L
                      });
                      var t, e = i(665);
                      ! function(t) {
                      t[t.nonBrowser = 0] = "nonBrowser", t[t.localhost = 1] = "localhost", t[t.valid = 2] = "valid",
                      t[t.invalid = 3] = "invalid"
                      }(t || (t = {}));
                      class o {
                      scopes;
                      organization;
                      constructor({
                      scopes: t,
                      organization: e
                      }) {
                      this.scopes = t, this.organization = e
                      }
                      static isLicenseScopeSufficient(t, i, n) {
                      const o = (0, e.findScopeNode)(i, n),
                      a = o && [o];
                      return !!(0, e.findScopeNode)(t, a)
                      }
                      static decodeLicense(t) {
                      const i = (0, e.base64Decode)(t),
                      n = {
                      version: 1,
                      scope: null,
                      licensingModel: null,
                      organization: null,
                      expiryTimestamp: null
                      };
                      return i.split(",").map((t => t.split("="))).filter((t => 2 === t.length)).forEach((([t, e]) => {
                      switch (t) {
                      case "V":
                      n.version = +e;
                      break;
                      case "S":
                      n.scope = e;
                      break;
                      case "L":
                      n.licensingModel = e;
                      break;
                      case "O":
                      n.organization = e;
                      break;
                      case "E": {
                      const t = parseInt(e, 10);
                      t && !Number.isNaN(t) && (n.expiryTimestamp = t);
                      break
                      }
                      case "D":
                      n.domain = e
                      }
                      })), n
                      }
                      verifyLicense({
                      licenseKey: i,
                      packageScope: n
                      }) {
                      if (!i) return console.error(`${this.organization}: Error checking license. License key is not
                      found!`), {
                      status: e.LICENSE_STATUS.NotFound
                      };
                      const a = i.substr(0, 32),
                      r = i.substr(32);
                      if (a !== (0, e.md5)(r)) return console.error(`${this.organization}: Error checking license.
                      License key format is not valid!`), {
                      status: e.LICENSE_STATUS.Valid
                      };
                      const s = o.decodeLicense(r);
                      if (null == s.expiryTimestamp) return console.error(`${this.organization}: Error checking license.
                      Expiry timestamp not found or invalid!`), {
                      status: e.LICENSE_STATUS.Valid
                      };
                      if (null == s.scope) return console.error(`${this.organization}: Error checking license. Scope not
                      found or invalid!`), {
                      status: e.LICENSE_STATUS.Valid
                      };
                      if (null == s.licensingModel || !e.LICENSING_MODELS.includes(s.licensingModel)) return
                      console.error(`${this.organization}: Error checking license. Licensing model not found or
                      invalid!`), {
                      status: e.LICENSE_STATUS.Valid
                      };
                      if (!o.isLicenseScopeSufficient(n, s.scope, this.scopes)) return
                      console.error(`${this.organization}: Error checking license. License scope is not sufficient!`), {
                      status: e.LICENSE_STATUS.Valid
                      };


                      return {
                      status: e.LICENSE_STATUS.Valid
                      }
                      }
                      }
                      const a = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof
                      self && self.Math == Math ? self : Function("return this")();
                      class r {
                      organization;
                      constructor({
                      organization: t
                      }) {
                      this.organization = t, a[`__${this.organization}_LICENSE_INFO__`] =
                      a[`__${this.organization}_LICENSE_INFO__`] || {
                      key: void 0
                      }
                      }
                      getLicenseInfo() {
                      return a[`__${this.organization}_LICENSE_INFO__`]
                      }
                      getLicenseKey() {
                      return this.getLicenseInfo().key
                      }
                      setLicenseKey(t) {
                      this.getLicenseInfo().key = t
                      }
                      }! function(t, e) {
                      void 0 === e && (e = {});
                      var i = e.insertAt;
                      if ("undefined" != typeof document) {
                      var n = document.head || document.getElementsByTagName("head")[0],
                      o = document.createElement("style");
                      o.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(o, n.firstChild) :
                      n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t :
                      o.appendChild(document.createTextNode(t))
                      }
                      }("@keyframes watermark{0%{background-position:0 0}25%{background-position:100%
                      100%}50%{background-position:0 0}75%{background-position:100% -100%}to{background-position:0
                      0}}");
                      var s = function(t, e) {
                      return s = Object.setPrototypeOf || {
                      __proto__: []
                      }
                      instanceof Array && function(t, e) {
                      t.__proto__ = e
                      } || function(t, e) {
                      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                      }, s(t, e)
                      },
                      l = function() {
                      return l = Object.assign || function(t) {
                      for (var e, i = 1, n = arguments.length; i < n; i++) for (var o in e=arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o]=e[o]); return t }, l.apply(this, arguments)
                        }; function d(t, e, i, n) { return new(i || (i=Promise))((function(o, a) { function r(t) { try {
                        l(n.next(t)) } catch (t) { a(t) } } function s(t) { try { l(n.throw(t)) } catch (t) { a(t) } }
                        function l(t) { var e; t.done ? o(t.value) : (e=t.value, e instanceof i ? e : new i((function(t)
                        { t(e) }))).then(r, s) } l((n=n.apply(t, e || [])).next()) })) } function c(t, e) { var i, n, o,
                        a, r={ label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: []
                        }; return a={ next: s(0), throw: s(1), return: s(2) }, "function"==typeof Symbol &&
                        (a[Symbol.iterator]=function() { return this }), a; function s(s) { return function(l) { return
                        function(s) { if (i) throw new TypeError("Generator is already executing."); for (; a && (a=0,
                        s[0] && (r=0)), r;) try { if (i=1, n && (o=2 & s[0] ? n.return : s[0] ? n.throw || ((o=n.return)
                        && o.call(n), 0) : n.next) && !(o=o.call(n, s[1])).done) return o; switch (n=0, o && (s=[2 &
                        s[0], o.value]), s[0]) { case 0: case 1: o=s; break; case 4: return r.label++, { value: s[1],
                        done: !1 }; case 5: r.label++, n=s[1], s=[0]; continue; case 7: s=r.ops.pop(), r.trys.pop();
                        continue; default: if (!((o=(o=r.trys).length> 0 && o[o.length - 1]) || 6 !== s[0] && 2 !==
                        s[0])) {
                        r = 0;
                        continue
                        }
                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) { r.label=s[1]; break } if (6===s[0] &&
                          r.label < o[1]) { r.label=o[1], o=s; break } if (o && r.label < o[2]) { r.label=o[2],
                          r.ops.push(s); break } o[2] && r.ops.pop(), r.trys.pop(); continue } s=e.call(t, r) } catch
                          (t) { s=[6, t], n=0 } finally { i=o=0 } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1]
                          : void 0, done: !0 } }([s, l]) } } } var h=function(t) { return t.toDataURL("image/png", 1) },
                          u=function(t) { return "function"==typeof t }, p=function(t) { return void 0===t },
                          v=function(t, e, i) { void 0===e && (e={}), void 0===i && (i="http://www.w3.org/2000/svg" );
                          var n=document.createElementNS(i, t); for (var o in e) n.setAttribute(o, e[o]); return n },
                          m=function(t, e) { return d(void 0, void 0, void 0, (function() { var i, n, o, a, r, s, l, d,
                          h; return c(this, (function(c) { switch (c.label) { case 0: return i=v("svg", {
                          xmlns: "http://www.w3.org/2000/svg" }),
                          (n=document.createElement("div")).setAttribute("xmlns", "http://www.w3.org/1999/xhtml" ),
                          n.style.cssText="\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font: "
                          .concat(t.font, ";\n  color: " ).concat(e.fontColor, ";\n" ),
                          n.innerHTML="<div class='rich-text-content'>" .concat(e.content, "</div>" ),
                          document.body.appendChild(n), [4, g(n)]; case 1: return c.sent(),
                          o=null===(h=n.querySelector(".rich-text-content")) || void 0===h ? void 0 :
                          h.getBoundingClientRect(), a=null==o ? void 0 : o.width, r=null==o ? void 0 : o.height,
                          document.body.removeChild(n), s=e.richTextWidth || a || e.width, l=e.richTextHeight || r ||
                          e.height, i.setAttribute("width", s.toString()), i.setAttribute("height", l.toString()),
                          (d=v("foreignObject", { width: s.toString(), height: l.toString() })).appendChild(n),
                          i.appendChild(d), [2, { element: i, width: s, height: l }] } })) })) }; function g(t) { return
                          d(this, void 0, void 0, (function() { var e, i, n, o, a; return c(this, (function(r) { switch
                          (r.label) { case 0: e=t.querySelectorAll("img"), i=function(t) { var e, i, n, o; return
                          c(this, (function(a) { switch (a.label) { case 0: if (!(e=t.getAttribute("src"))) return [3,
                          6]; a.label=1; case 1: return a.trys.push([1, 5, , 6]), [4, fetch(e)]; case 2: return [4,
                          a.sent().blob()]; case 3: return i=a.sent(), [4, new Promise((function(t, e) { var n=new
                          FileReader; n.onloadend=function() { return t(n.result) }, n.onerror=e, n.readAsDataURL(i)
                          }))]; case 4: return "string"==typeof(n=a.sent()) && t.setAttribute("src", n), [3, 6]; case 5:
                          return o=a.sent(), console.error("Error converting ".concat(e, " to base64:"), o), [3, 6];
                          case 6: return [2] } })) }, n=0, o=Array.from(e), r.label=1; case 1: return n < o.length ?
                          (a=o[n], [5, i(a)]) : [3, 4]; case 2: r.sent(), r.label=3; case 3: return n++, [3, 1]; case 4:
                          return [2] } })) })) } var y=function(t, e) { return p(t) ? e : t }, f=function(t, e, i) {
                          void 0===e && (e=void 0), void 0===i && (i=void 0); var n=new Image; return
                          n.setAttribute("crossOrigin", "Anonymous" ), !p(e) && (n.width=e), !p(i) && (n.height=i),
                          n.src=t, new Promise((function(t) { n.onload=function() { t(n) } })) }, w={ width: 300,
                          height: 300, rotate: 45, layout: "default" , auxiliaryLine: !1, translatePlacement: "middle" ,
                          contentType: "text" , content: "hello watermark-js-plus" , textType: "fill" , imageWidth: 0,
                          imageHeight: 0, lineHeight: 30, zIndex: 2147483647, backgroundPosition: "0 0" ,
                          backgroundRepeat: "repeat" , fontSize: "20px" , fontFamily: "sans-serif" , fontStyle: "" ,
                          fontVariant: "" , fontColor: "#000" , fontWeight: "normal" , filter: "none" ,
                          letterSpacing: "0px" , wordSpacing: "0px" , globalAlpha: .5, mode: "default" ,
                          mutationObserve: !0, monitorProtection: !1, movable: !1, parent: "body" , onSuccess:
                          function() {}, onBeforeDestroy: function() {}, onDestroyed: function() {}, onObserveError:
                          function() {} }, x=function(t) { "undefined" !=typeof window && t &&
                          (Object.defineProperty(window, "MutationObserver" , { writable: !1, configurable: !1 }),
                          Object.defineProperty(window, "requestAnimationFrame" , { writable: !1, configurable: !1 }))
                          }, b=function() { function t(e, i) { this.props=e, this.options=i,
                          this.canvas=t.createCanvas(this.options.width, this.options.height),
                          this.recommendOptions=function(t, e, i) { var n=t.getContext("2d"); if (null===n) throw new
                          Error("get context error"); n.font="" .concat(e.fontStyle, " " ).concat(e.fontVariant, " "
                          ).concat(e.fontWeight, " " ).concat(e.fontSize, " " ).concat(e.fontFamily), n.filter=e.filter,
                          n.letterSpacing=e.letterSpacing, n.wordSpacing=e.wordSpacing, (null==e ? void 0 : e.rotate) &&
                          (e.rotate=(360 - e.rotate % 360) * (Math.PI / 180)), p(i.textRowMaxWidth) &&
                          (e.textRowMaxWidth=e.width); var o={ image: { rect: { width: e.imageWidth, height:
                          e.imageHeight }, position: { x: 0, y: 0 } }, textLine: { data: [], yOffsetValue: 0 },
                          advancedStyleParams: { linear: { x0: 0, x1: 0 }, radial: { x0: 0, y0: 0, r0: 0, x1: 0, y1: 0,
                          r1: 0 }, conic: { x: 0, y: 0, startAngle: 0 }, pattern: {} } }; switch (e.contentType) {
                          case "text" : o.textLine.data=[e.content]; break; case "multi-line-text" :
                          o.textLine.data=function(t, e, i) { for (var n=[], o="" , a="" , r=0, s=e.length; r < s;
                          r++) "\n" !==(a=e.charAt(r)) ? (o +=a, t.measureText(o).width> i && (n.push(o.substring(0,
                          o.length - 1)), o = "", r--)) : (n.push(o), o = "");
                          return n.push(o), n
                          }(n, e.content, e.textRowMaxWidth)
                          }
                          var a = e.width / 2,
                          r = e.height / 2,
                          s = "middle",
                          l = "center";
                          switch (p(null == i ? void 0 : i.translateX) || p(null == i ? void 0 : i.translateY) ?
                          (o.advancedStyleParams.linear.x0 = -e.width / 2, o.advancedStyleParams.linear.x1 = e.width /
                          2, o.advancedStyleParams.radial.r0 = 0, o.advancedStyleParams.radial.r1 = e.width / 2) : (a =
                          null == i ? void 0 : i.translateX, r = null == i ? void 0 : i.translateY, s = "top", l =
                          "left"), i.translatePlacement) {
                          case "top":
                          a = e.width / 2, r = 0, s = "top", o.advancedStyleParams.linear.x0 = -e.width / 2,
                          o.advancedStyleParams.linear.x1 = e.width / 2, o.advancedStyleParams.radial.y0 =
                          o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.radial.y1 =
                          o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.conic.y =
                          o.textLine.data.length * e.lineHeight / 2;
                          break;
                          case "top-start":
                          a = 0, r = 0, s = "top", l = "start", o.advancedStyleParams.linear.x0 = 0,
                          o.advancedStyleParams.linear.x1 = e.width, o.advancedStyleParams.radial.x0 = e.width / 2,
                          o.advancedStyleParams.radial.y0 = o.textLine.data.length * e.lineHeight / 2,
                          o.advancedStyleParams.radial.x1 = e.width / 2, o.advancedStyleParams.radial.y1 =
                          o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.conic.x = e.width / 2,
                          o.advancedStyleParams.conic.y = o.textLine.data.length * e.lineHeight / 2;
                          break;
                          case "top-end":
                          a = e.width, r = 0, s = "top", l = "end", o.advancedStyleParams.linear.x0 = 0,
                          o.advancedStyleParams.linear.x1 = -e.width, o.advancedStyleParams.radial.x0 = -e.width / 2,
                          o.advancedStyleParams.radial.y0 = o.textLine.data.length * e.lineHeight / 2,
                          o.advancedStyleParams.radial.x1 = -e.width / 2, o.advancedStyleParams.radial.y1 =
                          o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.conic.x = -e.width / 2,
                          o.advancedStyleParams.conic.y = o.textLine.data.length * e.lineHeight / 2;
                          break;
                          case "bottom":
                          a = e.width / 2, r = e.height, s = "bottom", o.advancedStyleParams.linear.x0 = -e.width / 2,
                          o.advancedStyleParams.linear.x1 = e.width / 2, o.advancedStyleParams.radial.y0 =
                          -o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.radial.y1 =
                          -o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.conic.x = 0,
                          o.advancedStyleParams.conic.y = -o.textLine.data.length * e.lineHeight / 2;
                          break;
                          case "bottom-start":
                          a = 0, r = e.height, s = "bottom", l = "start", o.advancedStyleParams.linear.x0 = 0,
                          o.advancedStyleParams.linear.x1 = e.width, o.advancedStyleParams.radial.x0 = e.width / 2,
                          o.advancedStyleParams.radial.y0 = -o.textLine.data.length * e.lineHeight / 2,
                          o.advancedStyleParams.radial.x1 = e.width / 2, o.advancedStyleParams.radial.y1 =
                          -o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.conic.x = e.width / 2,
                          o.advancedStyleParams.conic.y = -o.textLine.data.length * e.lineHeight / 2;
                          break;
                          case "bottom-end":
                          a = e.width, r = e.height, s = "bottom", l = "end", o.advancedStyleParams.linear.x0 = 0,
                          o.advancedStyleParams.linear.x1 = -e.width, o.advancedStyleParams.radial.x0 = -e.width / 2,
                          o.advancedStyleParams.radial.y0 = -o.textLine.data.length * e.lineHeight / 2,
                          o.advancedStyleParams.radial.x1 = -e.width / 2, o.advancedStyleParams.radial.y1 =
                          -o.textLine.data.length * e.lineHeight / 2, o.advancedStyleParams.conic.x = -e.width / 2,
                          o.advancedStyleParams.conic.y = -o.textLine.data.length * e.lineHeight / 2;
                          break;
                          case "left":
                          a = 0, r = e.height / 2, l = "start", o.advancedStyleParams.linear.x0 = 0,
                          o.advancedStyleParams.linear.x1 = e.width, o.advancedStyleParams.radial.x0 = e.width / 2,
                          o.advancedStyleParams.radial.x1 = e.width / 2, o.advancedStyleParams.conic.x = e.width / 2,
                          o.advancedStyleParams.conic.y = 0;
                          break;
                          case "right":
                          a = e.width, r = e.height / 2, l = "end", o.advancedStyleParams.linear.x0 = 0,
                          o.advancedStyleParams.linear.x1 = -e.width, o.advancedStyleParams.radial.x0 = -e.width / 2,
                          o.advancedStyleParams.radial.x1 = -e.width / 2, o.advancedStyleParams.conic.x = -e.width / 2,
                          o.advancedStyleParams.conic.y = 0
                          }
                          if (e.translateX = a, e.translateY = r, p(null == i ? void 0 : i.textBaseline) &&
                          (e.textBaseline = s), p(null == i ? void 0 : i.textAlign) && (e.textAlign = l), ["text",
                          "multi-line-text"].includes(e.contentType)) switch (e.textBaseline) {
                          case "middle":
                          o.textLine.yOffsetValue = (o.textLine.data.length - 1) * e.lineHeight / 2;
                          break;
                          case "bottom":
                          case "alphabetic":
                          case "ideographic":
                          o.textLine.yOffsetValue = (o.textLine.data.length - 1) * e.lineHeight + (e.lineHeight -
                          parseInt(e.fontSize)) / 2;
                          break;
                          case "top":
                          case "hanging":
                          o.textLine.yOffsetValue = -e.lineHeight / 2 + parseInt(e.fontSize) / 2
                          }
                          return o
                          }(this.canvas, this.options, this.props)
                          }
                          return t.createCanvas = function(t, e) {
                          var i, n = window.devicePixelRatio || 1,
                          o = document.createElement("canvas");
                          return o.width = t * n, o.height = e * n, o.style.width = "".concat(t, "px"), o.style.height =
                          "".concat(e, "px"), null === (i = o.getContext("2d")) || void 0 === i || i.setTransform(n, 0,
                          0, n, 0, 0), o
                          }, t.clearCanvas = function(t) {
                          var e = t.getContext("2d");
                          if (null === e) throw new Error("get context error");
                          e.restore(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height);
                          var i = window.devicePixelRatio || 1;
                          e.setTransform(i, 0, 0, i, 0, 0)
                          }, t.prototype.getCanvas = function() {
                          return this.canvas
                          }, t.prototype.clear = function() {
                          t.clearCanvas(this.canvas)
                          }, t.prototype.draw = function() {
                          var t = this,
                          e = this.canvas.getContext("2d");
                          if (null === e) throw new Error("get context error");
                          return this.options.auxiliaryLine && (e.beginPath(), e.rect(0, 0, this.options.width,
                          this.options.height), e.lineWidth = 1, e.strokeStyle = "#000", e.stroke(), e.closePath(),
                          e.beginPath(), e.rect(this.options.translateX, this.options.translateY, 1, 1), e.lineWidth =
                          1, e.strokeStyle = "#f00", e.stroke(), e.closePath()), this.setStyle(e), e.save(),
                          e.translate(this.options.translateX, this.options.translateY), e.rotate(this.options.rotate),
                          new Promise((function(i) {
                          switch (t.options.contentType) {
                          case "text":
                          t.drawText(e, i);
                          break;
                          case "image":
                          t.drawImage(e, i);
                          break;
                          case "multi-line-text":
                          t.drawMultiLineText(e, i);
                          break;
                          case "rich-text":
                          t.drawRichText(e, i)
                          }
                          }))
                          }, t.prototype.setStyle = function(t) {
                          var e, i = "fillStyle";
                          "stroke" === this.options.textType && (i = "strokeStyle");
                          var n = this.options.fontColor;
                          if (null === (e = this.options) || void 0 === e ? void 0 : e.advancedStyle) switch
                          (this.options.advancedStyle.type) {
                          case "linear":
                          n = this.createLinearGradient(t);
                          break;
                          case "radial":
                          n = this.createRadialGradient(t);
                          break;
                          case "conic":
                          n = this.createConicGradient(t);
                          break;
                          case "pattern":
                          n = this.createPattern(t)
                          }
                          t[i] && n && (t[i] = n), this.options.textAlign && (t.textAlign = this.options.textAlign),
                          this.options.textBaseline && (t.textBaseline = this.options.textBaseline), t.globalAlpha =
                          this.options.globalAlpha, this.options.shadowStyle && (t.shadowBlur =
                          y(this.options.shadowStyle.shadowBlur, 0), t.shadowColor =
                          y(this.options.shadowStyle.shadowColor, "#00000000"), t.shadowOffsetX =
                          y(this.options.shadowStyle.shadowOffsetX, 0), t.shadowOffsetY =
                          y(this.options.shadowStyle.shadowOffsetY, 0)), u(this.options.extraDrawFunc) &&
                          this.options.extraDrawFunc(t)
                          }, t.prototype.createLinearGradient = function(t) {
                          var e, i, n, o, a, r, s, l, d, c, h, u, p, v, m, g = t.createLinearGradient(y(null === (n =
                          null === (i = null === (e = this.options.advancedStyle) || void 0 === e ? void 0 : e.params)
                          || void 0 === i ? void 0 : i.linear) || void 0 === n ? void 0 : n.x0,
                          this.recommendOptions.advancedStyleParams.linear.x0), y(null === (r = null === (a = null ===
                          (o = this.options.advancedStyle) || void 0 === o ? void 0 : o.params) || void 0 === a ? void 0
                          : a.linear) || void 0 === r ? void 0 : r.y0, 0), y(null === (d = null === (l = null === (s =
                          this.options.advancedStyle) || void 0 === s ? void 0 : s.params) || void 0 === l ? void 0 :
                          l.linear) || void 0 === d ? void 0 : d.x1,
                          this.recommendOptions.advancedStyleParams.linear.x1), y(null === (u = null === (h = null ===
                          (c = this.options.advancedStyle) || void 0 === c ? void 0 : c.params) || void 0 === h ? void 0
                          : h.linear) || void 0 === u ? void 0 : u.y1, 0));
                          return null === (m = null === (v = null === (p = this.options) || void 0 === p ? void 0 :
                          p.advancedStyle) || void 0 === v ? void 0 : v.colorStops) || void 0 === m ||
                          m.forEach((function(t) {
                          g.addColorStop(t.offset, t.color)
                          })), g
                          }, t.prototype.createConicGradient = function(t) {
                          var e, i, n, o, a, r, s, l, d, c, h, u, p, v, m, g = t.createConicGradient(y(null === (o =
                          null === (n = null === (i = null === (e = this.options) || void 0 === e ? void 0 :
                          e.advancedStyle) || void 0 === i ? void 0 : i.params) || void 0 === n ? void 0 : n.conic) ||
                          void 0 === o ? void 0 : o.startAngle, 0), y(null === (l = null === (s = null === (r = null ===
                          (a = this.options) || void 0 === a ? void 0 : a.advancedStyle) || void 0 === r ? void 0 :
                          r.params) || void 0 === s ? void 0 : s.conic) || void 0 === l ? void 0 : l.x,
                          this.recommendOptions.advancedStyleParams.conic.x), y(null === (u = null === (h = null === (c
                          = null === (d = this.options) || void 0 === d ? void 0 : d.advancedStyle) || void 0 === c ?
                          void 0 : c.params) || void 0 === h ? void 0 : h.conic) || void 0 === u ? void 0 : u.y,
                          this.recommendOptions.advancedStyleParams.conic.y));
                          return null === (m = null === (v = null === (p = this.options) || void 0 === p ? void 0 :
                          p.advancedStyle) || void 0 === v ? void 0 : v.colorStops) || void 0 === m ||
                          m.forEach((function(t) {
                          g.addColorStop(t.offset, t.color)
                          })), g
                          }, t.prototype.createRadialGradient = function(t) {
                          var e, i, n, o, a, r, s, l, d, c, h, u, p, v, m, g, f, w, x, b, S, k, E, P, L, C, O, T =
                          t.createRadialGradient(y(null === (o = null === (n = null === (i = null === (e = this.options)
                          || void 0 === e ? void 0 : e.advancedStyle) || void 0 === i ? void 0 : i.params) || void 0 ===
                          n ? void 0 : n.radial) || void 0 === o ? void 0 : o.x0,
                          this.recommendOptions.advancedStyleParams.radial.x0), y(null === (l = null === (s = null ===
                          (r = null === (a = this.options) || void 0 === a ? void 0 : a.advancedStyle) || void 0 === r ?
                          void 0 : r.params) || void 0 === s ? void 0 : s.radial) || void 0 === l ? void 0 : l.y0,
                          this.recommendOptions.advancedStyleParams.radial.y0), y(null === (u = null === (h = null ===
                          (c = null === (d = this.options) || void 0 === d ? void 0 : d.advancedStyle) || void 0 === c ?
                          void 0 : c.params) || void 0 === h ? void 0 : h.radial) || void 0 === u ? void 0 : u.r0,
                          this.recommendOptions.advancedStyleParams.radial.r0), y(null === (g = null === (m = null ===
                          (v = null === (p = this.options) || void 0 === p ? void 0 : p.advancedStyle) || void 0 === v ?
                          void 0 : v.params) || void 0 === m ? void 0 : m.radial) || void 0 === g ? void 0 : g.x1,
                          this.recommendOptions.advancedStyleParams.radial.x1), y(null === (b = null === (x = null ===
                          (w = null === (f = this.options) || void 0 === f ? void 0 : f.advancedStyle) || void 0 === w ?
                          void 0 : w.params) || void 0 === x ? void 0 : x.radial) || void 0 === b ? void 0 : b.y1,
                          this.recommendOptions.advancedStyleParams.radial.y1), y(null === (P = null === (E = null ===
                          (k = null === (S = this.options) || void 0 === S ? void 0 : S.advancedStyle) || void 0 === k ?
                          void 0 : k.params) || void 0 === E ? void 0 : E.radial) || void 0 === P ? void 0 : P.r1,
                          this.recommendOptions.advancedStyleParams.radial.r1));
                          return null === (O = null === (C = null === (L = this.options) || void 0 === L ? void 0 :
                          L.advancedStyle) || void 0 === C ? void 0 : C.colorStops) || void 0 === O ||
                          O.forEach((function(t) {
                          T.addColorStop(t.offset, t.color)
                          })), T
                          }, t.prototype.createPattern = function(t) {
                          var e, i, n, o, a, r, s, l;
                          return t.createPattern(null === (o = null === (n = null === (i = null === (e = this.options)
                          || void 0 === e ? void 0 : e.advancedStyle) || void 0 === i ? void 0 : i.params) || void 0 ===
                          n ? void 0 : n.pattern) || void 0 === o ? void 0 : o.image, (null === (l = null === (s = null
                          === (r = null === (a = this.options) || void 0 === a ? void 0 : a.advancedStyle) || void 0 ===
                          r ? void 0 : r.params) || void 0 === s ? void 0 : s.pattern) || void 0 === l ? void 0 :
                          l.repetition) || "")
                          }, t.prototype.setText = function(t, e) {
                          var i = "fillText";
                          "stroke" === this.options.textType && (i = "strokeText"), t[i] && t[i](e.text, e.x, e.y,
                          e.maxWidth)
                          }, t.prototype.drawText = function(t, e) {
                          this.setText(t, {
                          text: this.options.content,
                          x: 0,
                          y: 0 - this.recommendOptions.textLine.yOffsetValue,
                          maxWidth: this.options.textRowMaxWidth || this.options.width
                          }), e(t.canvas)
                          }, t.prototype.drawImage = function(t, e) {
                          var i = this;
                          f(this.options.image).then((function(n) {
                          var o = i.getImageRect(n),
                          a = o.width,
                          r = o.height,
                          s = i.getDrawImagePosition(a, r);
                          t.drawImage(n, s.x, s.y, a, r), e(t.canvas)
                          }))
                          }, t.prototype.drawMultiLineText = function(t, e) {
                          var i = this,
                          n = this.recommendOptions.textLine.data,
                          o = this.recommendOptions.textLine.yOffsetValue;
                          n.forEach((function(e, n) {
                          i.setText(t, {
                          text: e,
                          x: 0,
                          y: i.options.lineHeight * n - o,
                          maxWidth: i.options.textRowMaxWidth || i.options.width
                          })
                          })), e(t.canvas)
                          }, t.prototype.drawRichText = function(t, e) {
                          return d(this, void 0, void 0, (function() {
                          var i, n = this;
                          return c(this, (function(o) {
                          switch (o.label) {
                          case 0:
                          return [4, m(t, this.options)];
                          case 1:
                          return i = o.sent(), f((a = i.element, r = a.outerHTML.replace(/<(img|br|input|hr|embed)(.*?)>
                            /g, "
                            <$1$2 />").replace(/\n/g, "").replace(/\t/g, "").replace(/#/g, "%23"),
                            "data:image/svg+xml;charset=utf-8,".concat(r)), i.width, i.height).then((function(i) {
                            var o = n.getDrawImagePosition(i.width, i.height);
                            t.drawImage(i, o.x, o.y, i.width, i.height), e(t.canvas)
                            })), [2]
                            }
                            var a, r
                            }))
                            }))
                            }, t.prototype.getImageRect = function(t) {
                            var e = {
                            width: this.options.imageWidth || 0,
                            height: this.options.imageHeight || 0
                            };
                            switch (!0) {
                            case 0 !== e.width && 0 === e.height:
                            e.height = e.width * t.height / t.width;
                            break;
                            case 0 === e.width && 0 !== e.height:
                            e.width = e.height * t.width / t.height;
                            break;
                            case 0 === e.width && 0 === e.height:
                            e.width = t.width, e.height = t.height
                            }
                            return e
                            }, t.prototype.getDrawImagePosition = function(t, e) {
                            var i, n, o = {
                            x: -t / 2,
                            y: -e / 2
                            };
                            switch (this.options.translatePlacement) {
                            case "top":
                            o.x = -t / 2, o.y = 0;
                            break;
                            case "top-start":
                            o.x = 0, o.y = 0;
                            break;
                            case "top-end":
                            o.x = -t, o.y = 0;
                            break;
                            case "bottom":
                            o.x = -t / 2, o.y = -e;
                            break;
                            case "bottom-start":
                            o.x = 0, o.y = -e;
                            break;
                            case "bottom-end":
                            o.x = -t, o.y = -e;
                            break;
                            case "left":
                            o.x = 0, o.y = -e / 2;
                            break;
                            case "right":
                            o.x = -t, o.y = -e / 2
                            }
                            return !p(null === (i = this.props) || void 0 === i ? void 0 : i.translateX) && (o.x = 0),
                            !p(null === (n = this.props) || void 0 === n ? void 0 : n.translateY) && (o.y = 0), o
                            }, t
                            }(),
                            S = function() {
                            function t(t, e) {
                            var i, n, o, a, r, s;
                            this.options = t, this.partialWidth = this.options.width, this.partialHeight =
                            this.options.height, this.rows = (null === (i = this.options.gridLayoutOptions) || void 0
                            === i ? void 0 : i.rows) || 1, this.cols = (null === (n = this.options.gridLayoutOptions) ||
                            void 0 === n ? void 0 : n.cols) || 1, this.matrix = (null === (o =
                            this.options.gridLayoutOptions) || void 0 === o ? void 0 : o.matrix) || (r = this.rows, s =
                            this.cols, Array.from({
                            length: r
                            }, (function() {
                            return new Array(s).fill(1)
                            }))), this.gap = (null === (a = this.options.gridLayoutOptions) || void 0 === a ? void 0 :
                            a.gap) || [0, 0], this.partialCanvas = e
                            }
                            return t.prototype.draw = function() {
                            var t, e, i, n, o, a, r, s, l = b.createCanvas((null === (t =
                            this.options.gridLayoutOptions) || void 0 === t ? void 0 : t.width) || this.partialWidth *
                            this.cols + this.gap[0] * this.cols, (null === (e = this.options.gridLayoutOptions) || void
                            0 === e ? void 0 : e.height) || this.partialHeight * this.rows + this.gap[1] * this.rows),
                            d = l.getContext("2d");
                            (null === (i = this.options.gridLayoutOptions) || void 0 === i ? void 0 : i.backgroundImage)
                            && (null == d || d.drawImage(null === (n = this.options.gridLayoutOptions) || void 0 === n ?
                            void 0 : n.backgroundImage, 0, 0, null === (o = this.options.gridLayoutOptions) || void 0
                            === o ? void 0 : o.width, null === (a = this.options.gridLayoutOptions) || void 0 === a ?
                            void 0 : a.height));
                            for (var c = 0; c < this.rows; c++) for (var h=0; h < this.cols;
                              h++)(null===(s=null===(r=this.matrix) || void 0===r ? void 0 : r[c]) || void 0===s ? void
                              0 : s[h]) && (null==d || d.drawImage(this.partialCanvas, this.partialWidth * h +
                              this.gap[0] * h, this.partialHeight * c + this.gap[1] * c, this.partialWidth,
                              this.partialHeight)); return l }, t }(), k=function(t, e) { return "grid"===t.layout ? new
                              S(t, e).draw() : e }, E=function() { function t(t) { void 0===t && (t={}),
                              this.parentElement=document.body, this.isCreating=!1, this.props=t, this.options=l(l({},
                              w), t), this.changeParentElement(this.options.parent), this.watermarkCanvas=new
                              b(this.props, this.options), x(this.options.monitorProtection) } return
                              t.prototype.changeOptions=function() { return d(this, arguments, void 0, (function(t, e,
                              i) { return void 0===t && (t={}), void 0===e && (e="overwrite" ), void 0===i && (i=!0),
                              c(this, (function(n) { switch (n.label) { case 0: return this.initConfigData(t, e),
                              x(this.options.monitorProtection), i ? (this.remove(), [4, this.create()]) : [3, 2]; case
                              1: n.sent(), n.label=2; case 2: return [2] } })) })) }, t.prototype.create=function() {
                              return d(this, void 0, void 0, (function() { var t, e, i, n, o, a, r, s, l, d, u, v;
                              return c(this, (function(c) { switch (c.label) { case 0: return this.isCreating ? [2] :
                              (this.isCreating=!0, this.validateUnique() && this.validateContent() ?
                              (t=p(this.watermarkDom), [4, null===(a=this.watermarkCanvas) || void 0===a ? void 0 :
                              a.draw()]) : (this.isCreating=!1, [2])); case 1: if (c.sent(),
                              this.layoutCanvas=k(this.options, null===(r=this.watermarkCanvas) || void 0===r ? void 0 :
                              r.getCanvas()), e=h(this.layoutCanvas), null===(s=this.watermarkCanvas) || void 0===s ||
                              s.clear(), this.watermarkDom=document.createElement("div"),
                              i=document.createElement("div"), this.watermarkDom.__WATERMARK__="watermark" ,
                              this.watermarkDom.__WATERMARK__INSTANCE__=this, n=this.checkParentElementType(),
                              this.watermarkDom.style.cssText="\n      z-index:"
                              .concat(this.options.zIndex, "!important;display:block!important;visibility:visible!important;transform:none!important;scale:none!important;\n      "
                              ).concat("custom"===n
                              ? "top:0!important;bottom:0!important;left:0!important;right:0!important;height:100%!important;pointer-events:none!important;position:absolute!important;"
                              : "position:relative!important;" , "\n    " ), o=function(t) { var e, i, n; if
                              ("grid"===t.layout) { var o=(null===(e=t.gridLayoutOptions) || void 0===e ? void 0 :
                              e.cols) || 1, a=(null===(i=t.gridLayoutOptions) || void 0===i ? void 0 : i.rows) || 1,
                              r=(null===(n=t.gridLayoutOptions) || void 0===n ? void 0 : n.gap) || [0, 0]; return
                              [t.width * o + r[0] * o, t.height * a + r[1] * a] } return [t.width, t.height]
                              }(this.options),
                              i.style.cssText="\n      display:block!important;visibility:visible!important;pointer-events:none;top:0;bottom:0;left:0;right:0;transform:none!important;scale:none!important;\n      position:"
                              .concat("root"===n ? "fixed" : "absolute"
                              , "!important;-webkit-print-color-adjust:exact!important;width:100%!important;height:100%!important;\n      z-index:"
                              ).concat(this.options.zIndex, "!important;background-image:url("
                              ).concat(e, ")!important;background-repeat:"
                              ).concat(this.options.backgroundRepeat, "!important;\n      background-size:"
                              ).concat(o[0], "px " ).concat(o[1], "px!important;background-position:"
                              ).concat(this.options.backgroundPosition, ";\n      " ).concat(this.options.movable
                              ? "animation: 200s ease 0s infinite normal none running watermark !important;" : ""
                              , "\n    " ), this.watermarkDom.appendChild(i),
                              this.parentElement.appendChild(this.watermarkDom), this.options.mutationObserve) try {
                              this.bindMutationObserve() } catch (t) { null===(d=(l=this.options).onObserveError) ||
                              void 0===d || d.call(l) } return t && (null===(v=(u=this.options).onSuccess) || void 0===v
                              || v.call(u)), this.isCreating=!1, [2] } })) })) }, t.prototype.destroy=function() {
                              this.remove(), this.watermarkDom=void 0 }, t.prototype.check=function() { return d(this,
                              void 0, void 0, (function() { return c(this, (function(t) { return [2,
                              this.parentElement.contains(this.watermarkDom)] })) })) }, t.prototype.remove=function() {
                              var t, e, i, n, o, a, r, s; null===(e=(t=this.options).onBeforeDestroy) || void 0===e ||
                              e.call(t), null===(i=this.observer) || void 0===i || i.disconnect(),
                              null===(n=this.parentObserve) || void 0===n || n.disconnect(),
                              this.unbindCheckWatermarkElementEvent(), null===(a=null===(o=this.watermarkDom) || void
                              0===o ? void 0 : o.parentNode) || void 0===a || a.removeChild(this.watermarkDom),
                              null===(s=(r=this.options).onDestroyed) || void 0===s || s.call(r) },
                              t.prototype.initConfigData=function(t, e) { var i=this; void 0===e && (e="overwrite"
                              ), "append"===e ? Object.keys(t).forEach((function(e) { i.props && (i.props[e]=t[e]) })) :
                              this.props=t, this.options=l(l({}, w), this.props),
                              this.changeParentElement(this.options.parent), this.watermarkCanvas=new b(this.props,
                              this.options) }, t.prototype.changeParentElement=function(t) { if ("string"==typeof t) {
                              var e=document.querySelector(t); e && (this.parentElement=e) } else this.parentElement=t;
                              this.parentElement || console.error("[WatermarkJsPlus]: please pass a valid parent
                              element.") }, t.prototype.validateUnique=function() { var t=!0; return
                              Array.from(this.parentElement.childNodes).forEach((function(e) { t &&
                              Object.hasOwnProperty.call(e, "__WATERMARK__" ) && (t=!1) })), t },
                              t.prototype.validateContent=function() { switch (this.options.contentType) { case "image"
                              : return Object.hasOwnProperty.call(this.options, "image" ); case "multi-line-text" :
                              case "rich-text" : case "text" : return this.options.content.length> 0
                              }
                              }, t.prototype.checkParentElementType = function() {
                              return ["html", "body"].includes(this.parentElement.tagName.toLocaleLowerCase()) ? "root"
                              : "custom"
                              }, t.prototype.checkWatermarkElement = function() {
                              return d(this, void 0, void 0, (function() {
                              return c(this, (function(t) {
                              switch (t.label) {
                              case 0:
                              return this.parentElement.contains(this.watermarkDom) ? [3, 2] : (this.remove(), [4,
                              this.create()]);
                              case 1:
                              t.sent(), t.label = 2;
                              case 2:
                              return this.bindCheckWatermarkElementEvent(), [2]
                              }
                              }))
                              }))
                              }, t.prototype.bindMutationObserve = function() {
                              var t = this;
                              this.watermarkDom && (this.bindCheckWatermarkElementEvent(), this.observer = new
                              MutationObserver((function(e) {
                              return d(t, void 0, void 0, (function() {
                              return c(this, (function(t) {
                              switch (t.label) {
                              case 0:
                              return e.length > 0 ? (this.remove(), [4, this.create()]) : [3, 2];
                              case 1:
                              t.sent(), t.label = 2;
                              case 2:
                              return [2]
                              }
                              }))
                              }))
                              })), this.observer.observe(this.watermarkDom, {
                              attributes: !0,
                              childList: !0,
                              subtree: !0,
                              characterData: !0
                              }), this.parentObserve = new MutationObserver((function(e) {
                              return d(t, void 0, void 0, (function() {
                              var t, i, n, o;
                              return c(this, (function(a) {
                              switch (a.label) {
                              case 0:
                              t = 0, i = e, a.label = 1;
                              case 1:
                              return t < i.length ? (null==(n=i[t]) ? void 0 : n.target)===this.watermarkDom ||
                                (null===(o=null==n ? void 0 : n.removedNodes) || void 0===o ? void 0 :
                                o[0])===this.watermarkDom || "childList"===n.type && n.target===this.parentElement &&
                                n.target.lastChild !==this.watermarkDom ? (this.remove(), [4, this.create()]) : [3, 3] :
                                [3, 4]; case 2: a.sent(), a.label=3; case 3: return t++, [3, 1]; case 4: return [2] }
                                })) })) })), this.parentObserve.observe(this.parentElement, { attributes: !0, childList:
                                !0, subtree: !0, characterData: !0 })) },
                                t.prototype.bindCheckWatermarkElementEvent=function() {
                                this.unbindCheckWatermarkElementEvent(),
                                this.checkWatermarkElementRequestID=requestAnimationFrame(this.checkWatermarkElement.bind(this))
                                }, t.prototype.unbindCheckWatermarkElementEvent=function() {
                                p(this.checkWatermarkElementRequestID) ||
                                cancelAnimationFrame(this.checkWatermarkElementRequestID) }, t }(), P=(function(t) {
                                function e(e) { return void 0===e && (e={}), t.call(this, l(l({}, e), { globalAlpha:
                                .005, mode: "blind" })) || this }(function(t, e) { if ("function" !=typeof e && null
                                !==e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or
                                null"); function i() { this.constructor=t } s(t, e), t.prototype=null===e ?
                                Object.create(e) : (i.prototype=e.prototype, new i) })(e, t), e.decode=function(t) { var
                                e=t.url, i=void 0===e ? "" : e, n=t.fillColor, o=void 0===n ? "#000" : n,
                                a=t.compositeOperation, r=void 0===a ? "color-burn" : a, s=t.mode, l=void 0===s
                                ? "canvas" : s, d=t.compositeTimes, c=void 0===d ? 3 : d, p=t.onSuccess; if (i
                                && "canvas"===l) { var v=new Image; v.src=i, v.addEventListener("load", (function() {
                                var t=v.width, e=v.height, i=b.createCanvas(t, e), n=i.getContext("2d"); if (!n) throw
                                new Error("get context error"); n.drawImage(v, 0, 0, t, e),
                                n.globalCompositeOperation=r, n.fillStyle=o; for (var a=0; a < c; a++) n.fillRect(0, 0,
                                t, e); var s=h(i); u(p) && (null==p || p(s)) })) } } }(E), function() { function t(t) {
                                var e; void 0===t && (t={}), this.drew=!1, this.props=t, this.options=l(l({}, w), t),
                                this.watermarkCanvas=new b(this.props, this.options),
                                this.originalSrc=null===(e=this.props.dom) || void 0===e ? void 0 : e.src,
                                this.backgroundImage=this.getBackgroundImage() } return t.prototype.create=function() {
                                return d(this, void 0, void 0, (function() { var t, e, i, n, o; return c(this,
                                (function(a) { switch (a.label) { case 0: return this.drew ? [2] : [4,
                                null===(t=this.watermarkCanvas) || void 0===t ? void 0 : t.draw()]; case 1: return
                                a.sent(), this.options.layout="grid" , this.options.gridLayoutOptions=l(l({},
                                this.options.gridLayoutOptions), { width: null===(e=this.backgroundImage) || void 0===e
                                ? void 0 : e.width, height: null===(i=this.backgroundImage) || void 0===i ? void 0 :
                                i.height, backgroundImage: this.backgroundImage }), this.layoutCanvas=k(this.options,
                                null===(n=this.watermarkCanvas) || void 0===n ? void 0 : n.getCanvas()),
                                this.options.dom.src=h(this.layoutCanvas), null===(o=this.watermarkCanvas) || void 0===o
                                || o.clear(), this.drew=!0, [2] } })) })) }, t.prototype.destroy=function() {
                                this.options.dom.src=this.originalSrc, this.drew=!1 },
                                t.prototype.getBackgroundImage=function() { if (this.options.dom) return
                                this.options.dom }, t }()); const L=(t, i="block" , n)=> {
                                if (t === e.LICENSE_STATUS.Valid || t === e.LICENSE_STATUS.ExpiredSubscriptionGrace)
                                return;
                                const o = new("image" === i ? P : E)({
                                content: "Trial version",
                                ...n
                                });
                                return o.create(), o
                                }
                                })(), n
                                })(), t.exports = e()
                                }
                                },
                                e = {};

                                function i(n) {
                                var o = e[n];
                                if (void 0 !== o) return o.exports;
                                var a = e[n] = {
                                exports: {}
                                };
                                return t[n].call(a.exports, a, a.exports, i), a.exports
                                }
                                i.n = t => {
                                var e = t && t.__esModule ? () => t.default : () => t;
                                return i.d(e, {
                                a: e
                                }), e
                                }, i.d = (t, e) => {
                                for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                                enumerable: !0,
                                get: e[n]
                                })
                                }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
                                var n = {};
                                return (() => {
                                "use strict";
                                i.d(n, {
                                default: () => p
                                });
                                var t = i(600);
                                const e = new t.LicenseVerifier({
                                scopes: [{
                                name: "qr-border-plugin"
                                }],
                                organization: "qr-code-styling"
                                }),
                                o = new t.LicenseInfo({
                                organization: "qr-code-styling"
                                }),
                                a = () => document.createElementNS("http://www.w3.org/2000/svg", "rect");
                                var r, s;
                                ! function(t) {
                                t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right"
                                }(r || (r = {})),
                                function(t) {
                                t.text = "text", t.image = "image"
                                }(s || (s = {}));
                                const l = (t, e) => (Object.keys(e).forEach((i => {
                                t.setAttribute(i, `${e[i]}`)
                                })), t),
                                d = ({
                                width: t,
                                height: e,
                                options: i,
                                round: n
                                }) => {
                                const o = Math.min(t, e);
                                return {
                                fill: "none",
                                x: (t - o + i.thickness) / 2,
                                y: (e - o + i.thickness) / 2,
                                width: o - i.thickness,
                                height: o - i.thickness,
                                stroke: i.color,
                                "stroke-width": i.thickness,
                                "stroke-dasharray": i.dasharray,
                                rx: Math.max(0, o / 2 * n - i.thickness / 2)
                                }
                                },
                                c = ({
                                thickness: t,
                                value: e,
                                svg: i,
                                position: n,
                                height: o,
                                width: a,
                                round: r,
                                style: s
                                }) => {
                                let l = 0,
                                d = !1;
                                "right" === n ? l = 90 : "bottom" === n ? d = !0 : "left" === n && (l = 90, d = !0),
                                i.getElementsByTagName("defs")[0].appendChild((({
                                position: t,
                                rotate: e,
                                flip: i,
                                thickness: n,
                                height: o,
                                width: a,
                                round: r
                                }) => {
                                const s = Math.min(a, o),
                                l = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                                d = (s - n) / 2 * r;
                                let c = "";
                                return e && (c += `rotate(${e},${a/2},${o/2}) `), i && (c += `scale(1 -1) translate(0
                                ${-o}) `), l.setAttribute("id", `${t}-text-path`), l.setAttribute("transform", c),
                                l.setAttribute("d", `\n M${(a-s+n)/2},${(o-s+n)/2+d}\n a${d},${d} 0 0 1 ${d},${-d}\n
                                h${s-n-2*d}\n a${d},${d} 0 0 1 ${d},${d}\n `), l
                                })({
                                position: n,
                                rotate: l,
                                flip: d,
                                height: o,
                                width: a,
                                round: r,
                                thickness: t
                                })), i.appendChild((({
                                value: t,
                                rotate: e,
                                position: i,
                                style: n
                                }) => {
                                const o = document.createElementNS("http://www.w3.org/2000/svg", "text"),
                                a = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
                                return a.setAttribute("href", `#${i}-text-path`), a.setAttribute("text-anchor",
                                "middle"), a.setAttribute("startOffset", "50%"), a.textContent = t,
                                a.setAttribute("alignment-baseline", "central"), o.setAttribute("rotate", `-${e}`),
                                o.setAttribute("style", n || ""), o.appendChild(a), o
                                })({
                                position: n,
                                rotate: l,
                                value: e,
                                style: s
                                }))
                                },
                                h = ({
                                thickness: t,
                                value: e,
                                svg: i,
                                position: n,
                                height: o,
                                width: a,
                                style: s
                                }) => {
                                const l = document.createElementNS("http://www.w3.org/2000/svg", "image"),
                                d = Math.min(a, o);
                                let c = (a - d + t) / 2,
                                h = (o - d + t) / 2;
                                n === r.top ? c += (d - t) / 2 : n === r.right ? (c += d - t, h += (d - t) / 2) : n ===
                                r.bottom ? (c += (d - t) / 2, h += d - t) : n === r.left && (h += (d - t) / 2),
                                l.setAttribute("href", e || ""), l.setAttribute("x", `${c}`), l.setAttribute("y",
                                `${h}`), l.setAttribute("style", s), i.appendChild(l)
                                },
                                u = t => (e, i) => {
                                u.verifyKey(e, i);
                                const {
                                width: n,
                                height: o
                                } = i, r = a(), s = d({
                                width: n,
                                height: o,
                                options: t,
                                round: t.round
                                });
                                if (l(r, s), e.appendChild(r), t.borderInner) {
                                const i = a(),
                                r = d({
                                width: n,
                                height: o,
                                options: t.borderInner,
                                round: t.round
                                });
                                r.x = r.x - t.borderInner.thickness + t.thickness, r.y = r.y - t.borderInner.thickness +
                                t.thickness, r.width = r.width + 2 * (t.borderInner.thickness - t.thickness), r.height =
                                r.height + 2 * (t.borderInner.thickness - t.thickness), r.rx = Math.max(0, r.rx +
                                t.borderInner.thickness - t.thickness), l(i, r), e.appendChild(i)
                                }
                                if (t.borderOuter) {
                                const i = a(),
                                r = d({
                                width: n,
                                height: o,
                                options: t.borderOuter,
                                round: t.round
                                });
                                l(i, r), e.appendChild(i)
                                }
                                let p;
                                for (p in t.decorations) {
                                const i = t.decorations[p];
                                let a;
                                "image" === i.type ? a = h : "text" === i.type && (a = c), a?.({
                                svg: e,
                                position: p,
                                thickness: t.thickness,
                                value: i.value,
                                style: i.style,
                                height: o,
                                width: n,
                                round: t.round
                                })
                                }
                                };
                                u.setKey = o.setLicenseKey.bind(o), u.verifyKey = (i, n) => {
                                i.parentElement && (0, t.showWatermark)(e.verifyLicense({
                                licenseKey: o.getLicenseKey(),
                                packageScope: "qr-border-plugin"
                                }).status, "block", {
                                parent: i.parentElement,
                                width: n.width,
                                height: n.height,
                                backgroundRepeat: "no-repeat",
                                rotate: 0
                                })
                                };
                                const p = u
                                })(), n.default
                                })()));