// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _catApi = require("./cat-api");
var _slimSelect = require("slim-select");
var _slimSelectDefault = parcelHelpers.interopDefault(_slimSelect);
var _slimselectCss = require("slim-select/dist/slimselect.css");
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
const select = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const catCard = document.querySelector(".cat-info");
select.addEventListener("change", onSelectChange);
updateSelect();
function updateSelect() {
    loader.classList.toggle("is-hidden");
    (0, _catApi.fetchBreeds)().then((cats)=>{
        loader.classList.toggle("is-hidden");
        const catArr = cats.map(({ id , name  })=>`<option value=${id}>${name}</option>`);
        const selectMarkup = [
            '<option class="option-text" value=cat>Choose a cat breed</option>',
            ...catArr
        ];
        select.insertAdjacentHTML("beforeend", selectMarkup);
        new (0, _slimSelectDefault.default)({
            select: select
        });
    }).catch((error)=>onError());
}
function onSelectChange(event) {
    loader.classList.toggle("is-hidden");
    catCard.classList.toggle("is-hidden");
    const breedId = event.currentTarget.value;
    (0, _catApi.fetchCatByBreed)(breedId).then((cat)=>{
        loader.classList.toggle("is-hidden");
        catCard.classList.toggle("is-hidden");
        const { url , breeds  } = cat[0];
        catCard.innerHTML = `<img src=${url} alt=${breeds[0].name} width="400"><div class="cat-desc"><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><strong>Temperament: </strong>${breeds[0].temperament}</p></div>`;
    }).catch((error)=>onError());
}
function onError() {
    (0, _notiflixNotifyAio.Notify).failure("Oops! Something went wrong! Try reloading the page!");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./cat-api":"d7YdZ","slim-select":"lzHUr","slim-select/dist/slimselect.css":"6O4cs","notiflix/build/notiflix-notify-aio":"eXQLZ"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d7YdZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchBreeds", ()=>fetchBreeds);
parcelHelpers.export(exports, "fetchCatByBreed", ()=>fetchCatByBreed);
const BASIC_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_Z0N4wcm0Lt5gOqM9GmlmIvTC9XVoa2E2U8memozNFRVSDdo0ehnxLDcly09dxDp6";
function fetchBreeds() {
    return fetch(`${BASIC_URL}/breeds?api_key=${API_KEY}`).then((response)=>{
        if (!response.ok) throw new Error(response.status);
        return response.json();
    });
}
function fetchCatByBreed(breedId) {
    return fetch(`${BASIC_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`).then((response)=>{
        if (!response.ok) throw new Error(response.status);
        return response.json();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzHUr":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function generateID() {
        return Math.random().toString(36).substring(2, 10);
    }
    function hasClassInTree(element, className) {
        function hasClass(e, c) {
            if (c && e && e.classList && e.classList.contains(c)) return e;
            if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) return e;
            return null;
        }
        function parentByClass(e, c) {
            if (!e || e === document) return null;
            else if (hasClass(e, c)) return e;
            else return parentByClass(e.parentNode, c);
        }
        return hasClass(element, className) || parentByClass(element, className);
    }
    function debounce(func, wait = 50, immediate = false) {
        let timeout;
        return function(...args) {
            const context = self;
            const later = ()=>{
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    function isEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function kebabCase(str) {
        const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match)=>"-" + match.toLowerCase());
        return str[0] === str[0].toUpperCase() ? result.substring(1) : result;
    }
    class Settings {
        constructor(settings){
            this.id = "";
            this.style = "";
            this.class = [];
            this.isMultiple = false;
            this.isOpen = false;
            this.isFullOpen = false;
            this.intervalMove = null;
            if (!settings) settings = {};
            this.id = "ss-" + generateID();
            this.style = settings.style || "";
            this.class = settings.class || [];
            this.disabled = settings.disabled !== undefined ? settings.disabled : false;
            this.alwaysOpen = settings.alwaysOpen !== undefined ? settings.alwaysOpen : false;
            this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true;
            this.ariaLabel = settings.ariaLabel || "Combobox";
            this.searchPlaceholder = settings.searchPlaceholder || "Search";
            this.searchText = settings.searchText || "No Results";
            this.searchingText = settings.searchingText || "Searching...";
            this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false;
            this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true;
            this.contentLocation = settings.contentLocation || document.body;
            this.contentPosition = settings.contentPosition || "absolute";
            this.openPosition = settings.openPosition || "auto";
            this.placeholderText = settings.placeholderText !== undefined ? settings.placeholderText : "Select Value";
            this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false;
            this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false;
            this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false;
            this.minSelected = settings.minSelected || 0;
            this.maxSelected = settings.maxSelected || 1000;
            this.timeoutDelay = settings.timeoutDelay || 200;
            this.maxValuesShown = settings.maxValuesShown || 20;
            this.maxValuesMessage = settings.maxValuesMessage || "{number} selected";
        }
    }
    class Optgroup {
        constructor(optgroup){
            this.id = !optgroup.id || optgroup.id === "" ? generateID() : optgroup.id;
            this.label = optgroup.label || "";
            this.selectAll = optgroup.selectAll === undefined ? false : optgroup.selectAll;
            this.selectAllText = optgroup.selectAllText || "Select All";
            this.closable = optgroup.closable || "off";
            this.options = [];
            if (optgroup.options) for (const o of optgroup.options)this.options.push(new Option(o));
        }
    }
    class Option {
        constructor(option){
            this.id = !option.id || option.id === "" ? generateID() : option.id;
            this.value = option.value === undefined ? option.text : option.value;
            this.text = option.text || "";
            this.html = option.html || "";
            this.selected = option.selected !== undefined ? option.selected : false;
            this.display = option.display !== undefined ? option.display : true;
            this.disabled = option.disabled !== undefined ? option.disabled : false;
            this.mandatory = option.mandatory !== undefined ? option.mandatory : false;
            this.placeholder = option.placeholder !== undefined ? option.placeholder : false;
            this.class = option.class || "";
            this.style = option.style || "";
            this.data = option.data || {};
        }
    }
    class Store {
        constructor(type, data){
            this.selectType = "single";
            this.data = [];
            this.selectType = type;
            this.setData(data);
        }
        validateDataArray(data) {
            if (!Array.isArray(data)) return new Error("Data must be an array");
            for (let dataObj of data){
                if (dataObj instanceof Optgroup || "label" in dataObj) {
                    if (!("label" in dataObj)) return new Error("Optgroup must have a label");
                    if ("options" in dataObj && dataObj.options) {
                        for (let option of dataObj.options)return this.validateOption(option);
                    }
                } else if (dataObj instanceof Option || "text" in dataObj) return this.validateOption(dataObj);
                else return new Error("Data object must be a valid optgroup or option");
            }
            return null;
        }
        validateOption(option) {
            if (!("text" in option)) return new Error("Option must have a text");
            return null;
        }
        partialToFullData(data) {
            let dataFinal = [];
            data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup || "label" in dataObj) {
                    let optOptions = [];
                    if ("options" in dataObj && dataObj.options) dataObj.options.forEach((option)=>{
                        optOptions.push(new Option(option));
                    });
                    if (optOptions.length > 0) dataFinal.push(new Optgroup(dataObj));
                }
                if (dataObj instanceof Option || "text" in dataObj) dataFinal.push(new Option(dataObj));
            });
            return dataFinal;
        }
        setData(data) {
            this.data = this.partialToFullData(data);
            if (this.selectType === "single") this.setSelectedBy("value", this.getSelected());
        }
        getData() {
            return this.filter(null, true);
        }
        getDataOptions() {
            return this.filter(null, false);
        }
        addOption(option) {
            this.setData(this.getData().concat(new Option(option)));
        }
        setSelectedBy(selectedType, selectedValues) {
            let firstOption = null;
            let hasSelected = false;
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup) for (let option of dataObj.options){
                    if (!firstOption) firstOption = option;
                    option.selected = hasSelected ? false : selectedValues.includes(option[selectedType]);
                    if (option.selected && this.selectType === "single") hasSelected = true;
                }
                if (dataObj instanceof Option) {
                    if (!firstOption) firstOption = dataObj;
                    dataObj.selected = hasSelected ? false : selectedValues.includes(dataObj[selectedType]);
                    if (dataObj.selected && this.selectType === "single") hasSelected = true;
                }
            }
            if (this.selectType === "single" && firstOption && !hasSelected) firstOption.selected = true;
        }
        getSelected() {
            let selectedOptions = this.getSelectedOptions();
            let selectedValues = [];
            selectedOptions.forEach((option)=>{
                selectedValues.push(option.value);
            });
            return selectedValues;
        }
        getSelectedOptions() {
            return this.filter((opt)=>{
                return opt.selected;
            }, false);
        }
        getSelectedIDs() {
            let selectedOptions = this.getSelectedOptions();
            let selectedIDs = [];
            selectedOptions.forEach((op)=>{
                selectedIDs.push(op.id);
            });
            return selectedIDs;
        }
        getOptgroupByID(id) {
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup && dataObj.id === id) return dataObj;
            }
            return null;
        }
        getOptionByID(id) {
            let options = this.filter((opt)=>{
                return opt.id === id;
            }, false);
            return options.length ? options[0] : null;
        }
        getSelectType() {
            return this.selectType;
        }
        getFirstOption() {
            let option = null;
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup) option = dataObj.options[0];
                else if (dataObj instanceof Option) option = dataObj;
                if (option) break;
            }
            return option;
        }
        search(search, searchFilter) {
            search = search.trim();
            if (search === "") return this.getData();
            return this.filter((opt)=>{
                return searchFilter(opt, search);
            }, true);
        }
        filter(filter, includeOptgroup) {
            const dataSearch = [];
            this.data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup) {
                    let optOptions = [];
                    dataObj.options.forEach((option)=>{
                        if (!filter || filter(option)) {
                            if (!includeOptgroup) dataSearch.push(new Option(option));
                            else optOptions.push(new Option(option));
                        }
                    });
                    if (optOptions.length > 0) {
                        let optgroup = new Optgroup(dataObj);
                        optgroup.options = optOptions;
                        dataSearch.push(optgroup);
                    }
                }
                if (dataObj instanceof Option) {
                    if (!filter || filter(dataObj)) dataSearch.push(new Option(dataObj));
                }
            });
            return dataSearch;
        }
    }
    class Render {
        constructor(settings, store, callbacks){
            this.classes = {
                main: "ss-main",
                placeholder: "ss-placeholder",
                values: "ss-values",
                single: "ss-single",
                max: "ss-max",
                value: "ss-value",
                valueText: "ss-value-text",
                valueDelete: "ss-value-delete",
                valueOut: "ss-value-out",
                deselect: "ss-deselect",
                deselectPath: "M10,10 L90,90 M10,90 L90,10",
                arrow: "ss-arrow",
                arrowClose: "M10,30 L50,70 L90,30",
                arrowOpen: "M10,70 L50,30 L90,70",
                content: "ss-content",
                openAbove: "ss-open-above",
                openBelow: "ss-open-below",
                search: "ss-search",
                searchHighlighter: "ss-search-highlight",
                searching: "ss-searching",
                addable: "ss-addable",
                addablePath: "M50,10 L50,90 M10,50 L90,50",
                list: "ss-list",
                optgroup: "ss-optgroup",
                optgroupLabel: "ss-optgroup-label",
                optgroupLabelText: "ss-optgroup-label-text",
                optgroupActions: "ss-optgroup-actions",
                optgroupSelectAll: "ss-selectall",
                optgroupSelectAllBox: "M60,10 L10,10 L10,90 L90,90 L90,50",
                optgroupSelectAllCheck: "M30,45 L50,70 L90,10",
                optgroupClosable: "ss-closable",
                option: "ss-option",
                optionDelete: "M10,10 L90,90 M10,90 L90,10",
                highlighted: "ss-highlighted",
                open: "ss-open",
                close: "ss-close",
                selected: "ss-selected",
                error: "ss-error",
                disabled: "ss-disabled",
                hide: "ss-hide"
            };
            this.store = store;
            this.settings = settings;
            this.callbacks = callbacks;
            this.main = this.mainDiv();
            this.content = this.contentDiv();
            this.updateClassStyles();
            this.updateAriaAttributes();
            this.settings.contentLocation.appendChild(this.content.main);
        }
        enable() {
            this.main.main.classList.remove(this.classes.disabled);
            this.content.search.input.disabled = false;
        }
        disable() {
            this.main.main.classList.add(this.classes.disabled);
            this.content.search.input.disabled = true;
        }
        open() {
            this.main.arrow.path.setAttribute("d", this.classes.arrowOpen);
            this.main.main.classList.add(this.settings.openPosition === "up" ? this.classes.openAbove : this.classes.openBelow);
            this.main.main.setAttribute("aria-expanded", "true");
            this.moveContent();
            const selectedOptions = this.store.getSelectedOptions();
            if (selectedOptions.length) {
                const selectedId = selectedOptions[selectedOptions.length - 1].id;
                const selectedOption = this.content.list.querySelector('[data-id="' + selectedId + '"]');
                if (selectedOption) this.ensureElementInView(this.content.list, selectedOption);
            }
        }
        close() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.setAttribute("aria-expanded", "false");
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.main.arrow.path.setAttribute("d", this.classes.arrowClose);
        }
        updateClassStyles() {
            this.main.main.className = "";
            this.main.main.removeAttribute("style");
            this.content.main.className = "";
            this.content.main.removeAttribute("style");
            this.main.main.classList.add(this.classes.main);
            this.content.main.classList.add(this.classes.content);
            if (this.settings.style !== "") {
                this.main.main.style.cssText = this.settings.style;
                this.content.main.style.cssText = this.settings.style;
            }
            if (this.settings.class.length) {
                for (const c of this.settings.class)if (c.trim() !== "") {
                    this.main.main.classList.add(c.trim());
                    this.content.main.classList.add(c.trim());
                }
            }
            if (this.settings.contentPosition === "relative") this.content.main.classList.add("ss-" + this.settings.contentPosition);
        }
        updateAriaAttributes() {
            this.main.main.role = "combobox";
            this.main.main.setAttribute("aria-haspopup", "listbox");
            this.main.main.setAttribute("aria-controls", this.content.main.id);
            this.main.main.setAttribute("aria-expanded", "false");
            this.content.main.setAttribute("role", "listbox");
        }
        mainDiv() {
            var _a;
            const main = document.createElement("div");
            main.dataset.id = this.settings.id;
            main.setAttribute("aria-label", this.settings.ariaLabel);
            main.tabIndex = 0;
            main.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        this.callbacks.open();
                        e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
                        return false;
                    case "Tab":
                        this.callbacks.close();
                        return true;
                    case "Enter":
                    case " ":
                        this.callbacks.open();
                        const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
                        if (highlighted) highlighted.click();
                        return false;
                    case "Escape":
                        this.callbacks.close();
                        return false;
                }
                return false;
            };
            main.onclick = (e)=>{
                if (this.settings.disabled) return;
                this.settings.isOpen ? this.callbacks.close() : this.callbacks.open();
            };
            const values = document.createElement("div");
            values.classList.add(this.classes.values);
            main.appendChild(values);
            const deselect = document.createElement("div");
            deselect.classList.add(this.classes.deselect);
            const selectedOptions = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
            if (!this.settings.allowDeselect || this.settings.isMultiple && selectedOptions && selectedOptions.length <= 0) deselect.classList.add(this.classes.hide);
            else deselect.classList.remove(this.classes.hide);
            deselect.onclick = (e)=>{
                e.stopPropagation();
                if (this.settings.disabled) return;
                let shouldDelete = true;
                const before = this.store.getSelectedOptions();
                const after = [];
                if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                if (shouldDelete) {
                    if (this.settings.isMultiple) {
                        this.callbacks.setSelected([], false);
                        this.updateDeselectAll();
                    } else {
                        const firstOption = this.store.getFirstOption();
                        const value = firstOption ? firstOption.value : "";
                        this.callbacks.setSelected(value, false);
                    }
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(this.store.getSelectedOptions());
                }
            };
            const deselectSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            deselectSvg.setAttribute("viewBox", "0 0 100 100");
            const deselectPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            deselectPath.setAttribute("d", this.classes.deselectPath);
            deselectSvg.appendChild(deselectPath);
            deselect.appendChild(deselectSvg);
            main.appendChild(deselect);
            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            arrow.classList.add(this.classes.arrow);
            arrow.setAttribute("viewBox", "0 0 100 100");
            const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            arrowPath.setAttribute("d", this.classes.arrowClose);
            if (this.settings.alwaysOpen) arrow.classList.add(this.classes.hide);
            arrow.appendChild(arrowPath);
            main.appendChild(arrow);
            return {
                main: main,
                values: values,
                deselect: {
                    main: deselect,
                    svg: deselectSvg,
                    path: deselectPath
                },
                arrow: {
                    main: arrow,
                    path: arrowPath
                }
            };
        }
        mainFocus(eventType) {
            if (eventType !== "click") this.main.main.focus({
                preventScroll: true
            });
        }
        placeholder() {
            const placeholderOption = this.store.filter((o)=>o.placeholder, false);
            let placeholderText = this.settings.placeholderText;
            if (placeholderOption.length) {
                if (placeholderOption[0].html !== "") placeholderText = placeholderOption[0].html;
                else if (placeholderOption[0].text !== "") placeholderText = placeholderOption[0].text;
            }
            const placeholder = document.createElement("div");
            placeholder.classList.add(this.classes.placeholder);
            placeholder.innerHTML = placeholderText;
            return placeholder;
        }
        renderValues() {
            if (!this.settings.isMultiple) {
                this.renderSingleValue();
                return;
            }
            this.renderMultipleValues();
        }
        renderSingleValue() {
            const selected = this.store.filter((o)=>{
                return o.selected && !o.placeholder;
            }, false);
            const selectedSingle = selected.length > 0 ? selected[0] : null;
            if (!selectedSingle) this.main.values.innerHTML = this.placeholder().outerHTML;
            else {
                const singleValue = document.createElement("div");
                singleValue.classList.add(this.classes.single);
                if (selectedSingle.html) singleValue.innerHTML = selectedSingle.html;
                else singleValue.innerText = selectedSingle.text;
                this.main.values.innerHTML = singleValue.outerHTML;
            }
            if (!this.settings.allowDeselect || !selected.length) this.main.deselect.main.classList.add(this.classes.hide);
            else this.main.deselect.main.classList.remove(this.classes.hide);
        }
        renderMultipleValues() {
            let currentNodes = this.main.values.childNodes;
            let selectedOptions = this.store.filter((opt)=>{
                return opt.selected && opt.display;
            }, false);
            if (selectedOptions.length === 0) {
                this.main.values.innerHTML = this.placeholder().outerHTML;
                return;
            } else {
                const placeholder = this.main.values.querySelector("." + this.classes.placeholder);
                if (placeholder) placeholder.remove();
            }
            if (selectedOptions.length > this.settings.maxValuesShown) {
                const singleValue = document.createElement("div");
                singleValue.classList.add(this.classes.max);
                singleValue.textContent = this.settings.maxValuesMessage.replace("{number}", selectedOptions.length.toString());
                this.main.values.innerHTML = singleValue.outerHTML;
                return;
            } else {
                const maxValuesMessage = this.main.values.querySelector("." + this.classes.max);
                if (maxValuesMessage) maxValuesMessage.remove();
            }
            let removeNodes = [];
            for(let i = 0; i < currentNodes.length; i++){
                const node = currentNodes[i];
                const id = node.getAttribute("data-id");
                if (id) {
                    const found = selectedOptions.filter((opt)=>{
                        return opt.id === id;
                    }, false);
                    if (!found.length) removeNodes.push(node);
                }
            }
            for (const n of removeNodes){
                n.classList.add(this.classes.valueOut);
                setTimeout(()=>{
                    if (this.main.values.hasChildNodes() && this.main.values.contains(n)) this.main.values.removeChild(n);
                }, 100);
            }
            currentNodes = this.main.values.childNodes;
            for(let d = 0; d < selectedOptions.length; d++){
                let shouldAdd = true;
                for(let i = 0; i < currentNodes.length; i++)if (selectedOptions[d].id === String(currentNodes[i].dataset.id)) shouldAdd = false;
                if (shouldAdd) {
                    if (currentNodes.length === 0) this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                    else if (d === 0) this.main.values.insertBefore(this.multipleValue(selectedOptions[d]), currentNodes[d]);
                    else currentNodes[d - 1].insertAdjacentElement("afterend", this.multipleValue(selectedOptions[d]));
                }
            }
            this.updateDeselectAll();
        }
        multipleValue(option) {
            const value = document.createElement("div");
            value.classList.add(this.classes.value);
            value.dataset.id = option.id;
            const text = document.createElement("div");
            text.classList.add(this.classes.valueText);
            text.innerText = option.text;
            value.appendChild(text);
            if (!option.mandatory) {
                const deleteDiv = document.createElement("div");
                deleteDiv.classList.add(this.classes.valueDelete);
                deleteDiv.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.settings.disabled) return;
                    let shouldDelete = true;
                    const before = this.store.getSelectedOptions();
                    const after = before.filter((o)=>{
                        return o.selected && o.id !== option.id;
                    }, true);
                    if (this.settings.minSelected && after.length < this.settings.minSelected) return;
                    if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                    if (shouldDelete) {
                        let selectedValues = [];
                        for (const o of after){
                            if (o instanceof Optgroup) for (const c of o.options)selectedValues.push(c.value);
                            if (o instanceof Option) selectedValues.push(o.value);
                        }
                        this.callbacks.setSelected(selectedValues, false);
                        if (this.settings.closeOnSelect) this.callbacks.close();
                        if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                        this.updateDeselectAll();
                    }
                };
                const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                deleteSvg.setAttribute("viewBox", "0 0 100 100");
                const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                deletePath.setAttribute("d", this.classes.optionDelete);
                deleteSvg.appendChild(deletePath);
                deleteDiv.appendChild(deleteSvg);
                value.appendChild(deleteDiv);
            }
            return value;
        }
        contentDiv() {
            const main = document.createElement("div");
            main.dataset.id = this.settings.id;
            const search = this.searchDiv();
            main.appendChild(search.main);
            const list = this.listDiv();
            main.appendChild(list);
            return {
                main: main,
                search: search,
                list: list
            };
        }
        moveContent() {
            if (this.settings.contentPosition === "relative") {
                this.moveContentBelow();
                return;
            }
            if (this.settings.openPosition === "down") {
                this.moveContentBelow();
                return;
            } else if (this.settings.openPosition === "up") {
                this.moveContentAbove();
                return;
            }
            if (this.putContent() === "up") this.moveContentAbove();
            else this.moveContentBelow();
        }
        searchDiv() {
            const main = document.createElement("div");
            const input = document.createElement("input");
            const addable = document.createElement("div");
            main.classList.add(this.classes.search);
            const searchReturn = {
                main,
                input
            };
            if (!this.settings.showSearch) {
                main.classList.add(this.classes.hide);
                input.readOnly = true;
            }
            input.type = "search";
            input.placeholder = this.settings.searchPlaceholder;
            input.tabIndex = -1;
            input.setAttribute("aria-label", this.settings.searchPlaceholder);
            input.setAttribute("autocapitalize", "off");
            input.setAttribute("autocomplete", "off");
            input.setAttribute("autocorrect", "off");
            input.oninput = debounce((e)=>{
                this.callbacks.search(e.target.value);
            }, 100);
            input.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
                        return false;
                    case "Tab":
                        this.callbacks.close();
                        return true;
                    case "Escape":
                        this.callbacks.close();
                        return false;
                    case "Enter":
                    case " ":
                        if (this.callbacks.addable && e.ctrlKey) {
                            addable.click();
                            return false;
                        } else {
                            const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
                            if (highlighted) {
                                highlighted.click();
                                return false;
                            }
                        }
                        return true;
                }
                return true;
            };
            main.appendChild(input);
            if (this.callbacks.addable) {
                addable.classList.add(this.classes.addable);
                const plus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                plus.setAttribute("viewBox", "0 0 100 100");
                const plusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                plusPath.setAttribute("d", this.classes.addablePath);
                plus.appendChild(plusPath);
                addable.appendChild(plus);
                addable.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (!this.callbacks.addable) return;
                    const inputValue = this.content.search.input.value.trim();
                    if (inputValue === "") {
                        this.content.search.input.focus();
                        return;
                    }
                    const runFinish = (oo)=>{
                        let newOption = new Option(oo);
                        this.callbacks.addOption(newOption);
                        if (this.settings.isMultiple) {
                            let values = this.store.getSelected();
                            values.push(newOption.value);
                            this.callbacks.setSelected(values, true);
                        } else this.callbacks.setSelected([
                            newOption.value
                        ], true);
                        this.callbacks.search("");
                        if (this.settings.closeOnSelect) setTimeout(()=>{
                            this.callbacks.close();
                        }, 100);
                    };
                    const addableValue = this.callbacks.addable(inputValue);
                    if (addableValue === false || addableValue === undefined || addableValue === null) return;
                    if (addableValue instanceof Promise) addableValue.then((value)=>{
                        if (typeof value === "string") runFinish({
                            text: value,
                            value: value
                        });
                        else runFinish(value);
                    });
                    else if (typeof addableValue === "string") runFinish({
                        text: addableValue,
                        value: addableValue
                    });
                    else runFinish(addableValue);
                    return;
                };
                main.appendChild(addable);
                searchReturn.addable = {
                    main: addable,
                    svg: plus,
                    path: plusPath
                };
            }
            return searchReturn;
        }
        searchFocus() {
            this.content.search.input.focus();
        }
        getOptions(notPlaceholder = false, notDisabled = false, notHidden = false) {
            let query = "." + this.classes.option;
            if (notPlaceholder) query += ":not(." + this.classes.placeholder + ")";
            if (notDisabled) query += ":not(." + this.classes.disabled + ")";
            if (notHidden) query += ":not(." + this.classes.hide + ")";
            return Array.from(this.content.list.querySelectorAll(query));
        }
        highlight(dir) {
            const options = this.getOptions(true, true, true);
            if (options.length === 0) return;
            if (options.length === 1) {
                if (!options[0].classList.contains(this.classes.highlighted)) {
                    options[0].classList.add(this.classes.highlighted);
                    return;
                }
            }
            let highlighted = false;
            for (const o of options)if (o.classList.contains(this.classes.highlighted)) highlighted = true;
            if (!highlighted) {
                for (const o of options)if (o.classList.contains(this.classes.selected)) {
                    o.classList.add(this.classes.highlighted);
                    break;
                }
            }
            for(let i = 0; i < options.length; i++)if (options[i].classList.contains(this.classes.highlighted)) {
                const prevOption = options[i];
                prevOption.classList.remove(this.classes.highlighted);
                const prevParent = prevOption.parentElement;
                if (prevParent && prevParent.classList.contains(this.classes.open)) {
                    const optgroupLabel = prevParent.querySelector("." + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                let selectOption = options[dir === "down" ? i + 1 < options.length ? i + 1 : 0 : i - 1 >= 0 ? i - 1 : options.length - 1];
                selectOption.classList.add(this.classes.highlighted);
                this.ensureElementInView(this.content.list, selectOption);
                const selectParent = selectOption.parentElement;
                if (selectParent && selectParent.classList.contains(this.classes.close)) {
                    const optgroupLabel = selectParent.querySelector("." + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                return;
            }
            options[dir === "down" ? 0 : options.length - 1].classList.add(this.classes.highlighted);
            this.ensureElementInView(this.content.list, options[dir === "down" ? 0 : options.length - 1]);
        }
        listDiv() {
            const options = document.createElement("div");
            options.classList.add(this.classes.list);
            return options;
        }
        renderError(error) {
            this.content.list.innerHTML = "";
            const errorDiv = document.createElement("div");
            errorDiv.classList.add(this.classes.error);
            errorDiv.textContent = error;
            this.content.list.appendChild(errorDiv);
        }
        renderSearching() {
            this.content.list.innerHTML = "";
            const searchingDiv = document.createElement("div");
            searchingDiv.classList.add(this.classes.searching);
            searchingDiv.textContent = this.settings.searchingText;
            this.content.list.appendChild(searchingDiv);
        }
        renderOptions(data) {
            this.content.list.innerHTML = "";
            if (data.length === 0) {
                const noResults = document.createElement("div");
                noResults.classList.add(this.classes.search);
                noResults.innerHTML = this.settings.searchText;
                this.content.list.appendChild(noResults);
                return;
            }
            for (const d of data){
                if (d instanceof Optgroup) {
                    const optgroupEl = document.createElement("div");
                    optgroupEl.classList.add(this.classes.optgroup);
                    const optgroupLabel = document.createElement("div");
                    optgroupLabel.classList.add(this.classes.optgroupLabel);
                    optgroupEl.appendChild(optgroupLabel);
                    const optgroupLabelText = document.createElement("div");
                    optgroupLabelText.classList.add(this.classes.optgroupLabelText);
                    optgroupLabelText.textContent = d.label;
                    optgroupLabel.appendChild(optgroupLabelText);
                    const optgroupActions = document.createElement("div");
                    optgroupActions.classList.add(this.classes.optgroupActions);
                    optgroupLabel.appendChild(optgroupActions);
                    if (this.settings.isMultiple && d.selectAll) {
                        const selectAll = document.createElement("div");
                        selectAll.classList.add(this.classes.optgroupSelectAll);
                        let allSelected = true;
                        for (const o1 of d.options)if (!o1.selected) {
                            allSelected = false;
                            break;
                        }
                        if (allSelected) selectAll.classList.add(this.classes.selected);
                        const selectAllText = document.createElement("span");
                        selectAllText.textContent = d.selectAllText;
                        selectAll.appendChild(selectAllText);
                        const selectAllSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        selectAllSvg.setAttribute("viewBox", "0 0 100 100");
                        selectAll.appendChild(selectAllSvg);
                        const selectAllBox = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        selectAllBox.setAttribute("d", this.classes.optgroupSelectAllBox);
                        selectAllSvg.appendChild(selectAllBox);
                        const selectAllCheck = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        selectAllCheck.setAttribute("d", this.classes.optgroupSelectAllCheck);
                        selectAllSvg.appendChild(selectAllCheck);
                        selectAll.addEventListener("click", (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            const currentSelected = this.store.getSelected();
                            if (allSelected) {
                                const newSelected = currentSelected.filter((s)=>{
                                    for (const o of d.options){
                                        if (s === o.value) return false;
                                    }
                                    return true;
                                });
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            } else {
                                const newSelected = currentSelected.concat(d.options.map((o)=>o.value));
                                for (const o5 of d.options)if (!this.store.getOptionByID(o5.id)) this.callbacks.addOption(o5);
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            }
                        });
                        optgroupActions.appendChild(selectAll);
                    }
                    if (d.closable !== "off") {
                        const optgroupClosable = document.createElement("div");
                        optgroupClosable.classList.add(this.classes.optgroupClosable);
                        const optgroupClosableSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        optgroupClosableSvg.setAttribute("viewBox", "0 0 100 100");
                        optgroupClosableSvg.classList.add(this.classes.arrow);
                        optgroupClosable.appendChild(optgroupClosableSvg);
                        const optgroupClosableArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        optgroupClosableSvg.appendChild(optgroupClosableArrow);
                        if (d.options.some((o)=>o.selected) || this.content.search.input.value.trim() !== "") {
                            optgroupClosable.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                        } else if (d.closable === "open") {
                            optgroupEl.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                        } else if (d.closable === "close") {
                            optgroupEl.classList.add(this.classes.close);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
                        }
                        optgroupLabel.addEventListener("click", (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            if (optgroupEl.classList.contains(this.classes.close)) {
                                optgroupEl.classList.remove(this.classes.close);
                                optgroupEl.classList.add(this.classes.open);
                                optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                            } else {
                                optgroupEl.classList.remove(this.classes.open);
                                optgroupEl.classList.add(this.classes.close);
                                optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
                            }
                        });
                        optgroupActions.appendChild(optgroupClosable);
                    }
                    optgroupEl.appendChild(optgroupLabel);
                    for (const o2 of d.options)optgroupEl.appendChild(this.option(o2));
                    this.content.list.appendChild(optgroupEl);
                }
                if (d instanceof Option) this.content.list.appendChild(this.option(d));
            }
        }
        option(option) {
            if (option.placeholder) {
                const placeholder = document.createElement("div");
                placeholder.classList.add(this.classes.option);
                placeholder.classList.add(this.classes.hide);
                return placeholder;
            }
            const optionEl = document.createElement("div");
            optionEl.dataset.id = option.id;
            optionEl.id = option.id;
            optionEl.classList.add(this.classes.option);
            optionEl.setAttribute("role", "option");
            if (option.class) option.class.split(" ").forEach((dataClass)=>{
                optionEl.classList.add(dataClass);
            });
            if (option.style) optionEl.style.cssText = option.style;
            if (this.settings.searchHighlight && this.content.search.input.value.trim() !== "") optionEl.innerHTML = this.highlightText(option.html !== "" ? option.html : option.text, this.content.search.input.value, this.classes.searchHighlighter);
            else if (option.html !== "") optionEl.innerHTML = option.html;
            else optionEl.textContent = option.text;
            if (this.settings.showOptionTooltips && optionEl.textContent) optionEl.setAttribute("title", optionEl.textContent);
            if (!option.display) optionEl.classList.add(this.classes.hide);
            if (option.disabled) optionEl.classList.add(this.classes.disabled);
            if (option.selected && this.settings.hideSelected) optionEl.classList.add(this.classes.hide);
            if (option.selected) {
                optionEl.classList.add(this.classes.selected);
                optionEl.setAttribute("aria-selected", "true");
                this.main.main.setAttribute("aria-activedescendant", optionEl.id);
            } else {
                optionEl.classList.remove(this.classes.selected);
                optionEl.setAttribute("aria-selected", "false");
            }
            optionEl.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const selectedOptions = this.store.getSelected();
                const element = e.currentTarget;
                const elementID = String(element.dataset.id);
                if (option.disabled || option.selected && !this.settings.allowDeselect) return;
                if (this.settings.isMultiple && this.settings.maxSelected <= selectedOptions.length && !option.selected || this.settings.isMultiple && this.settings.minSelected >= selectedOptions.length && option.selected) return;
                let shouldUpdate = false;
                const before = this.store.getSelectedOptions();
                let after = [];
                if (this.settings.isMultiple) {
                    if (option.selected) after = before.filter((o)=>o.id !== elementID);
                    else after = before.concat(option);
                }
                if (!this.settings.isMultiple) {
                    if (option.selected) after = [];
                    else after = [
                        option
                    ];
                }
                if (!this.callbacks.beforeChange) shouldUpdate = true;
                if (this.callbacks.beforeChange) {
                    if (this.callbacks.beforeChange(after, before) === false) shouldUpdate = false;
                    else shouldUpdate = true;
                }
                if (shouldUpdate) {
                    if (!this.store.getOptionByID(elementID)) this.callbacks.addOption(option);
                    this.callbacks.setSelected(after.map((o)=>o.value), false);
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                }
            });
            return optionEl;
        }
        destroy() {
            this.main.main.remove();
            this.content.main.remove();
        }
        highlightText(str, search, className) {
            let completedString = str;
            const regex = new RegExp("(" + search.trim() + ")(?![^<]*>[^<>]*</)", "i");
            if (!str.match(regex)) return str;
            const matchStartPosition = str.match(regex).index;
            const matchEndPosition = matchStartPosition + str.match(regex)[0].toString().length;
            const originalTextFoundByRegex = str.substring(matchStartPosition, matchEndPosition);
            completedString = completedString.replace(regex, `<mark class="${className}">${originalTextFoundByRegex}</mark>`);
            return completedString;
        }
        moveContentAbove() {
            const mainHeight = this.main.main.offsetHeight;
            const contentHeight = this.content.main.offsetHeight;
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.classList.add(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.content.main.classList.add(this.classes.openAbove);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-" + (mainHeight + contentHeight - 1) + "px 0px 0px 0px";
            this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";
            this.content.main.style.left = containerRect.left + window.scrollX + "px";
            this.content.main.style.width = containerRect.width + "px";
        }
        moveContentBelow() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.add(this.classes.openBelow);
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.add(this.classes.openBelow);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-1px 0px 0px 0px";
            if (this.settings.contentPosition !== "relative") {
                this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";
                this.content.main.style.left = containerRect.left + window.scrollX + "px";
                this.content.main.style.width = containerRect.width + "px";
            }
        }
        ensureElementInView(container, element) {
            const cTop = container.scrollTop + container.offsetTop;
            const cBottom = cTop + container.clientHeight;
            const eTop = element.offsetTop;
            const eBottom = eTop + element.clientHeight;
            if (eTop < cTop) container.scrollTop -= cTop - eTop;
            else if (eBottom > cBottom) container.scrollTop += eBottom - cBottom;
        }
        putContent() {
            const mainHeight = this.main.main.offsetHeight;
            const mainRect = this.main.main.getBoundingClientRect();
            const contentHeight = this.content.main.offsetHeight;
            const spaceBelow = window.innerHeight - (mainRect.top + mainHeight);
            if (spaceBelow <= contentHeight) {
                if (mainRect.top > contentHeight) return "up";
                else return "down";
            }
            return "down";
        }
        updateDeselectAll() {
            if (!this.store || !this.settings) return;
            const selected = this.store.getSelectedOptions();
            const hasSelectedItems = selected && selected.length > 0;
            const isMultiple = this.settings.isMultiple;
            const allowDeselect = this.settings.allowDeselect;
            const deselectButton = this.main.deselect.main;
            const hideClass = this.classes.hide;
            if (allowDeselect && !(isMultiple && !hasSelectedItems)) deselectButton.classList.remove(hideClass);
            else deselectButton.classList.add(hideClass);
        }
    }
    class Select {
        constructor(select){
            this.listen = false;
            this.observer = null;
            this.select = select;
            this.valueChange = this.valueChange.bind(this);
            this.select.addEventListener("change", this.valueChange, {
                passive: true
            });
            this.observer = new MutationObserver(this.observeCall.bind(this));
            this.changeListen(true);
        }
        enable() {
            this.select.disabled = false;
        }
        disable() {
            this.select.disabled = true;
        }
        hideUI() {
            this.select.tabIndex = -1;
            this.select.style.display = "none";
            this.select.setAttribute("aria-hidden", "true");
        }
        showUI() {
            this.select.removeAttribute("tabindex");
            this.select.style.display = "";
            this.select.removeAttribute("aria-hidden");
        }
        changeListen(listen) {
            this.listen = listen;
            if (listen) {
                if (this.observer) this.observer.observe(this.select, {
                    subtree: true,
                    childList: true,
                    attributes: true
                });
            }
            if (!listen) {
                if (this.observer) this.observer.disconnect();
            }
        }
        valueChange(ev) {
            if (this.listen && this.onValueChange) this.onValueChange(this.getSelectedValues());
            return true;
        }
        observeCall(mutations) {
            if (!this.listen) return;
            let classChanged = false;
            let disabledChanged = false;
            let optgroupOptionChanged = false;
            for (const m of mutations){
                if (m.target === this.select) {
                    if (m.attributeName === "disabled") disabledChanged = true;
                    if (m.attributeName === "class") classChanged = true;
                }
                if (m.target.nodeName === "OPTGROUP" || m.target.nodeName === "OPTION") optgroupOptionChanged = true;
            }
            if (classChanged && this.onClassChange) this.onClassChange(this.select.className.split(" "));
            if (disabledChanged && this.onDisabledChange) {
                this.changeListen(false);
                this.onDisabledChange(this.select.disabled);
                this.changeListen(true);
            }
            if (optgroupOptionChanged && this.onOptionsChange) {
                this.changeListen(false);
                this.onOptionsChange(this.getData());
                this.changeListen(true);
            }
        }
        getData() {
            let data = [];
            const nodes = this.select.childNodes;
            for (const n of nodes){
                if (n.nodeName === "OPTGROUP") data.push(this.getDataFromOptgroup(n));
                if (n.nodeName === "OPTION") data.push(this.getDataFromOption(n));
            }
            return data;
        }
        getDataFromOptgroup(optgroup) {
            let data = {
                id: optgroup.id,
                label: optgroup.label,
                selectAll: optgroup.dataset ? optgroup.dataset.selectall === "true" : false,
                selectAllText: optgroup.dataset ? optgroup.dataset.selectalltext : "Select all",
                closable: optgroup.dataset ? optgroup.dataset.closable : "off",
                options: []
            };
            const options = optgroup.childNodes;
            for (const o of options)if (o.nodeName === "OPTION") data.options.push(this.getDataFromOption(o));
            return data;
        }
        getDataFromOption(option) {
            return {
                id: option.id,
                value: option.value,
                text: option.text,
                html: option.dataset && option.dataset.html ? option.dataset.html : "",
                selected: option.selected,
                display: option.style.display === "none" ? false : true,
                disabled: option.disabled,
                mandatory: option.dataset ? option.dataset.mandatory === "true" : false,
                placeholder: option.dataset.placeholder === "true",
                class: option.className,
                style: option.style.cssText,
                data: option.dataset
            };
        }
        getSelectedValues() {
            let values = [];
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === "OPTGROUP") {
                    const optgroupOptions = o.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === "OPTION") {
                        const option = oo;
                        if (option.selected) values.push(option.value);
                    }
                }
                if (o.nodeName === "OPTION") {
                    const option = o;
                    if (option.selected) values.push(option.value);
                }
            }
            return values;
        }
        setSelected(value) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === "OPTGROUP") {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === "OPTION") {
                        const option = oo;
                        option.selected = value.includes(option.value);
                    }
                }
                if (o.nodeName === "OPTION") {
                    const option = o;
                    option.selected = value.includes(option.value);
                }
            }
            this.changeListen(true);
        }
        updateSelect(id, style, classes) {
            this.changeListen(false);
            if (id) this.select.dataset.id = id;
            if (style) this.select.style.cssText = style;
            if (classes) {
                this.select.className = "";
                classes.forEach((c)=>{
                    if (c.trim() !== "") this.select.classList.add(c.trim());
                });
            }
            this.changeListen(true);
        }
        updateOptions(data) {
            this.changeListen(false);
            this.select.innerHTML = "";
            for (const d of data){
                if (d instanceof Optgroup) this.select.appendChild(this.createOptgroup(d));
                if (d instanceof Option) this.select.appendChild(this.createOption(d));
            }
            this.select.dispatchEvent(new Event("change"));
            this.changeListen(true);
        }
        createOptgroup(optgroup) {
            const optgroupEl = document.createElement("optgroup");
            optgroupEl.id = optgroup.id;
            optgroupEl.label = optgroup.label;
            if (optgroup.selectAll) optgroupEl.dataset.selectAll = "true";
            if (optgroup.closable !== "off") optgroupEl.dataset.closable = optgroup.closable;
            if (optgroup.options) for (const o of optgroup.options)optgroupEl.appendChild(this.createOption(o));
            return optgroupEl;
        }
        createOption(info) {
            const optionEl = document.createElement("option");
            optionEl.id = info.id;
            optionEl.value = info.value;
            optionEl.innerHTML = info.text;
            if (info.html !== "") optionEl.setAttribute("data-html", info.html);
            if (info.selected) optionEl.selected = info.selected;
            if (info.disabled) optionEl.disabled = true;
            if (info.display === false) optionEl.style.display = "none";
            if (info.placeholder) optionEl.setAttribute("data-placeholder", "true");
            if (info.mandatory) optionEl.setAttribute("data-mandatory", "true");
            if (info.class) info.class.split(" ").forEach((optionClass)=>{
                optionEl.classList.add(optionClass);
            });
            if (info.data && typeof info.data === "object") Object.keys(info.data).forEach((key)=>{
                optionEl.setAttribute("data-" + kebabCase(key), info.data[key]);
            });
            return optionEl;
        }
        destroy() {
            this.changeListen(false);
            this.select.removeEventListener("change", this.valueChange);
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
            delete this.select.dataset.id;
            this.showUI();
        }
    }
    class SlimSelect {
        constructor(config){
            var _a;
            this.events = {
                search: undefined,
                searchFilter: (opt, search)=>{
                    return opt.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                },
                addable: undefined,
                beforeChange: undefined,
                afterChange: undefined,
                beforeOpen: undefined,
                afterOpen: undefined,
                beforeClose: undefined,
                afterClose: undefined
            };
            this.windowResize = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.windowScroll = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.documentClick = (e)=>{
                if (!this.settings.isOpen) return;
                if (e.target && !hasClassInTree(e.target, this.settings.id)) this.close(e.type);
            };
            this.windowVisibilityChange = ()=>{
                if (document.hidden) this.close();
            };
            this.selectEl = typeof config.select === "string" ? document.querySelector(config.select) : config.select;
            if (!this.selectEl) {
                if (config.events && config.events.error) config.events.error(new Error("Could not find select element"));
                return;
            }
            if (this.selectEl.tagName !== "SELECT") {
                if (config.events && config.events.error) config.events.error(new Error("Element isnt of type select"));
                return;
            }
            if (this.selectEl.dataset.ssid) this.destroy();
            this.settings = new Settings(config.settings);
            const debounceEvents = [
                "afterChange",
                "beforeOpen",
                "afterOpen",
                "beforeClose",
                "afterClose"
            ];
            for(const key in config.events){
                if (!config.events.hasOwnProperty(key)) continue;
                if (debounceEvents.indexOf(key) !== -1) this.events[key] = debounce(config.events[key], 100);
                else this.events[key] = config.events[key];
            }
            this.settings.disabled = ((_a = config.settings) === null || _a === void 0 ? void 0 : _a.disabled) ? config.settings.disabled : this.selectEl.disabled;
            this.settings.isMultiple = this.selectEl.multiple;
            this.settings.style = this.selectEl.style.cssText;
            this.settings.class = this.selectEl.className.split(" ");
            this.select = new Select(this.selectEl);
            this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class);
            this.select.hideUI();
            this.select.onValueChange = (values)=>{
                this.setSelected(values);
            };
            this.select.onClassChange = (classes)=>{
                this.settings.class = classes;
                this.render.updateClassStyles();
            };
            this.select.onDisabledChange = (disabled)=>{
                if (disabled) this.disable();
                else this.enable();
            };
            this.select.onOptionsChange = (data)=>{
                this.setData(data);
            };
            this.store = new Store(this.settings.isMultiple ? "multiple" : "single", config.data ? config.data : this.select.getData());
            if (config.data) this.select.updateOptions(this.store.getData());
            const callbacks = {
                open: this.open.bind(this),
                close: this.close.bind(this),
                addable: this.events.addable ? this.events.addable : undefined,
                setSelected: this.setSelected.bind(this),
                addOption: this.addOption.bind(this),
                search: this.search.bind(this),
                beforeChange: this.events.beforeChange,
                afterChange: this.events.afterChange
            };
            this.render = new Render(this.settings, this.store, callbacks);
            this.render.renderValues();
            this.render.renderOptions(this.store.getData());
            const selectAriaLabel = this.selectEl.getAttribute("aria-label");
            const selectAriaLabelledBy = this.selectEl.getAttribute("aria-labelledby");
            if (selectAriaLabel) this.render.main.main.setAttribute("aria-label", selectAriaLabel);
            else if (selectAriaLabelledBy) this.render.main.main.setAttribute("aria-labelledby", selectAriaLabelledBy);
            if (this.selectEl.parentNode) this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling);
            document.addEventListener("click", this.documentClick);
            window.addEventListener("resize", this.windowResize, false);
            if (this.settings.openPosition === "auto") window.addEventListener("scroll", this.windowScroll, false);
            document.addEventListener("visibilitychange", this.windowVisibilityChange);
            if (this.settings.disabled) this.disable();
            if (this.settings.alwaysOpen) this.open();
            this.selectEl.slim = this;
        }
        enable() {
            this.settings.disabled = false;
            this.select.enable();
            this.render.enable();
        }
        disable() {
            this.settings.disabled = true;
            this.select.disable();
            this.render.disable();
        }
        getData() {
            return this.store.getData();
        }
        setData(data) {
            const selected = this.store.getSelected();
            const err = this.store.validateDataArray(data);
            if (err) {
                if (this.events.error) this.events.error(err);
                return;
            }
            this.store.setData(data);
            const dataClean = this.store.getData();
            this.select.updateOptions(dataClean);
            this.render.renderValues();
            this.render.renderOptions(dataClean);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        getSelected() {
            return this.store.getSelected();
        }
        setSelected(value, runAfterChange = true) {
            const selected = this.store.getSelected();
            this.store.setSelectedBy("value", Array.isArray(value) ? value : [
                value
            ]);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            if (this.render.content.search.input.value !== "") this.search(this.render.content.search.input.value);
            else this.render.renderOptions(data);
            if (runAfterChange && this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        addOption(option) {
            const selected = this.store.getSelected();
            if (!this.store.getDataOptions().some((o)=>{
                var _a;
                return o.value === ((_a = option.value) !== null && _a !== void 0 ? _a : option.text);
            })) this.store.addOption(option);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            this.render.renderOptions(data);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        open() {
            if (this.settings.disabled || this.settings.isOpen) return;
            if (this.events.beforeOpen) this.events.beforeOpen();
            this.render.open();
            if (this.settings.showSearch) this.render.searchFocus();
            this.settings.isOpen = true;
            setTimeout(()=>{
                if (this.events.afterOpen) this.events.afterOpen();
                if (this.settings.isOpen) this.settings.isFullOpen = true;
            }, this.settings.timeoutDelay);
            if (this.settings.contentPosition === "absolute") {
                if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
                this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500);
            }
        }
        close(eventType = null) {
            if (!this.settings.isOpen || this.settings.alwaysOpen) return;
            if (this.events.beforeClose) this.events.beforeClose();
            this.render.close();
            if (this.render.content.search.input.value !== "") this.search("");
            this.render.mainFocus(eventType);
            this.settings.isOpen = false;
            this.settings.isFullOpen = false;
            setTimeout(()=>{
                if (this.events.afterClose) this.events.afterClose();
            }, this.settings.timeoutDelay);
            if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
        }
        search(value) {
            if (this.render.content.search.input.value !== value) this.render.content.search.input.value = value;
            if (!this.events.search) {
                this.render.renderOptions(value === "" ? this.store.getData() : this.store.search(value, this.events.searchFilter));
                return;
            }
            this.render.renderSearching();
            const searchResp = this.events.search(value, this.store.getSelectedOptions());
            if (searchResp instanceof Promise) {
                searchResp.then((data)=>{
                    this.render.renderOptions(this.store.partialToFullData(data));
                }).catch((err)=>{
                    this.render.renderError(typeof err === "string" ? err : err.message);
                });
                return;
            } else if (Array.isArray(searchResp)) this.render.renderOptions(this.store.partialToFullData(searchResp));
            else this.render.renderError("Search event must return a promise or an array of data");
        }
        destroy() {
            document.removeEventListener("click", this.documentClick);
            window.removeEventListener("resize", this.windowResize, false);
            if (this.settings.openPosition === "auto") window.removeEventListener("scroll", this.windowScroll, false);
            document.removeEventListener("visibilitychange", this.windowVisibilityChange);
            this.store.setData([]);
            this.render.destroy();
            this.select.destroy();
        }
    }
    return SlimSelect;
});

},{}],"6O4cs":[function() {},{}],"eXQLZ":[function(require,module,exports) {
var global = arguments[3];
/*
* Notiflix Notify AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.6
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/ /* global define */ (function(root, factory) {
    if (typeof define === "function" && define.amd) define([], function() {
        return factory(root);
    });
    else if (typeof module.exports === "object") module.exports = factory(root);
    else root.Notiflix = factory(root);
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this, function(window) {
    "use strict";
    // COMMON: SSR check: begin
    if (typeof window === "undefined" && typeof window.document === "undefined") return false;
    // COMMON: SSR check: end
    // COMMON: Variables: begin
    var notiflixNamespace = "Notiflix";
    var notiflixConsoleDocs = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation";
    var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    // COMMON: Variables: end
    // NOTIFY: Default Settings: begin
    var typesNotify = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    };
    var newNotifySettings;
    var notifySettings = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: false,
        timeout: 3000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: true,
        showOnlyTheLastOne: false,
        clickToClose: false,
        pauseOnHover: true,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: false,
        useIcon: true,
        useFontAwesome: false,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    };
    // NOTIFY: Default Settings: end
    // COMMON: Console Error: begin
    var commonConsoleError = function(message) {
        return console.error("%c " + notiflixNamespace + " Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + message + notiflixConsoleDocs);
    };
    // COMMON: Console Error: end
    // COMMON: Check Head or Body: begin
    var commonCheckHeadOrBody = function(element) {
        if (!element) element = "head";
        if (window.document[element] === null) {
            commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
            return false;
        }
        return true;
    };
    // COMMON: Check Head or Body: end
    // COMMON: Set Internal CSS Codes: begin
    var commonSetInternalCSSCodes = function(getInternalCSSCodes, styleElementId) {
        // check doc head
        if (!commonCheckHeadOrBody("head")) return false;
        // internal css
        if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
            var internalCSS = window.document.createElement("style");
            internalCSS.id = styleElementId;
            internalCSS.innerHTML = getInternalCSSCodes();
            window.document.head.appendChild(internalCSS);
        }
    };
    // COMMON: Set Internal CSS Codes: end
    // COMMON: Extend Options: begin
    var commonExtendOptions = function() {
        // variables
        var extended = {};
        var deep = false;
        var i = 0;
        // check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }
        // merge the object into the extended object
        var merge = function(obj) {
            for(var prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // if property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
                else extended[prop] = obj[prop];
            }
        };
        // loop through each object and conduct a merge
        for(; i < arguments.length; i++)merge(arguments[i]);
        return extended;
    };
    // COMMON: Extend Options: end
    // COMMON: Get Plaintext: begin
    var commonGetPlaintext = function(html) {
        var htmlPool = window.document.createElement("div");
        htmlPool.innerHTML = html;
        return htmlPool.textContent || htmlPool.innerText || "";
    };
    // COMMON: Get Plaintext: end
    // NOTIFY: Get Internal CSS Codes: begin
    var notifyGetInternalCSSCodes = function() {
        var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
        return notifyCSS || null;
    };
    // NOTIFY: Get Internal CSS Codes: end
    // NOTIFY: Create: begin
    var notifyCreateCounter = 0;
    var notifyCreate = function(notifyType, message, callbackOrOptions, options) {
        // check doc body
        if (!commonCheckHeadOrBody("body")) return false;
        // if not initialized pretend like init
        if (!newNotifySettings) Notiflix.Notify.init({});
        // create a backup for new settings
        var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});
        // check callbackOrOptions and options: begin
        if (typeof callbackOrOptions === "object" && !Array.isArray(callbackOrOptions) || typeof options === "object" && !Array.isArray(options)) {
            // new options
            var newOptions = {};
            if (typeof callbackOrOptions === "object") newOptions = callbackOrOptions;
            else if (typeof options === "object") newOptions = options;
            // extend new settings with the new options
            newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
        }
        // check callbackOrOptions and options: end
        // notify type
        var theType = newNotifySettings[notifyType.toLocaleLowerCase("en")];
        // notify counter
        notifyCreateCounter++;
        // check the message: begin
        if (typeof message !== "string") message = "Notiflix " + notifyType;
        // check the message: end
        // if plainText is true => HTML tags not allowed: begin
        if (newNotifySettings.plainText) message = commonGetPlaintext(message); // message plain text
        // if plainText is true => HTML tags not allowed: end
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
        if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
            // extend settings for error massege
            newNotifySettings = commonExtendOptions(true, newNotifySettings, {
                closeButton: true,
                messageMaxLength: 150
            });
            // error message
            message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
        }
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end
        // check message max length: begin
        if (message.length > newNotifySettings.messageMaxLength) message = message.substring(0, newNotifySettings.messageMaxLength) + "...";
        // check message max length: end
        // font awesome icon style: begin
        if (newNotifySettings.fontAwesomeIconStyle === "shadow") theType.fontAwesomeIconColor = theType.background;
        // font awesome icon style: end
        // if cssAnimaion is false => duration: begin
        if (!newNotifySettings.cssAnimation) newNotifySettings.cssAnimationDuration = 0;
        // if cssAnimaion is false => duration: end
        // notify wrap: begin
        var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement("div");
        ntflxNotifyWrap.id = notifySettings.wrapID;
        ntflxNotifyWrap.style.width = newNotifySettings.width;
        ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
        ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;
        // wrap position: begin
        if (newNotifySettings.position === "center-center") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.margin = "auto";
            ntflxNotifyWrap.classList.add("nx-flex-center-center");
            ntflxNotifyWrap.style.maxHeight = "calc((100vh - " + newNotifySettings.distance + ") - " + newNotifySettings.distance + ")";
            ntflxNotifyWrap.style.display = "flex";
            ntflxNotifyWrap.style.flexWrap = "wrap";
            ntflxNotifyWrap.style.flexDirection = "column";
            ntflxNotifyWrap.style.justifyContent = "center";
            ntflxNotifyWrap.style.alignItems = "center";
            ntflxNotifyWrap.style.pointerEvents = "none";
        } else if (newNotifySettings.position === "center-top") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = "auto";
            ntflxNotifyWrap.style.margin = "auto";
        } else if (newNotifySettings.position === "center-bottom") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.margin = "auto";
        } else if (newNotifySettings.position === "right-bottom") {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.left = "auto";
        } else if (newNotifySettings.position === "left-top") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = "auto";
            ntflxNotifyWrap.style.bottom = "auto";
        } else if (newNotifySettings.position === "left-bottom") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.right = "auto";
        } else {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.left = "auto";
            ntflxNotifyWrap.style.bottom = "auto";
        }
        // wrap position: end
        // if background overlay is true: begin
        if (newNotifySettings.backOverlay) {
            var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement("div");
            ntflxNotifyOverlay.id = notifySettings.overlayID;
            ntflxNotifyOverlay.style.width = "100%";
            ntflxNotifyOverlay.style.height = "100%";
            ntflxNotifyOverlay.style.position = "fixed";
            ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
            ntflxNotifyOverlay.style.left = 0;
            ntflxNotifyOverlay.style.top = 0;
            ntflxNotifyOverlay.style.right = 0;
            ntflxNotifyOverlay.style.bottom = 0;
            ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
            ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? "nx-with-animation" : "";
            ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + "ms" : "";
            if (!window.document.getElementById(notifySettings.overlayID)) window.document.body.appendChild(ntflxNotifyOverlay);
        }
        // if background overlay is true: end
        if (!window.document.getElementById(notifySettings.wrapID)) window.document.body.appendChild(ntflxNotifyWrap);
        // notify wrap: end
        // notify content: begin
        var ntflxNotify = window.document.createElement("div");
        ntflxNotify.id = newNotifySettings.ID + "-" + notifyCreateCounter;
        ntflxNotify.className = newNotifySettings.className + " " + theType.childClassName + " " + (newNotifySettings.cssAnimation ? "nx-with-animation" : "") + " " + (newNotifySettings.useIcon ? "nx-with-icon" : "") + " nx-" + newNotifySettings.cssAnimationStyle + " " + (newNotifySettings.closeButton && typeof callbackOrOptions !== "function" ? "nx-with-close-button" : "") + " " + (typeof callbackOrOptions === "function" ? "nx-with-callback" : "") + " " + (newNotifySettings.clickToClose ? "nx-notify-click-to-close" : "");
        ntflxNotify.style.fontSize = newNotifySettings.fontSize;
        ntflxNotify.style.color = theType.textColor;
        ntflxNotify.style.background = theType.background;
        ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
        ntflxNotify.style.pointerEvents = "all";
        // rtl: begin
        if (newNotifySettings.rtl) {
            ntflxNotify.setAttribute("dir", "rtl");
            ntflxNotify.classList.add("nx-rtl-on");
        }
        // rtl: end
        // font-family: begin
        ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
        // font-family: end
        // use css animation: begin
        if (newNotifySettings.cssAnimation) ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + "ms";
        // use css animation: end
        // close button element: begin
        var closeButtonHTML = "";
        if (newNotifySettings.closeButton && typeof callbackOrOptions !== "function") closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
        // close buttpon element: end
        // use icon: begin
        if (newNotifySettings.useIcon) {
            // use font awesome
            if (newNotifySettings.useFontAwesome) ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + "; font-size:" + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + " " + (newNotifySettings.fontAwesomeIconStyle === "shadow" ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
            else {
                var svgIcon = "";
                if (notifyType === typesNotify.Success) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
                else if (notifyType === typesNotify.Failure) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
                else if (notifyType === typesNotify.Warning) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
                else if (notifyType === typesNotify.Info) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
                ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
            }
        } else ntflxNotify.innerHTML = '<span class="nx-message">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
        // use icon: end
        // notify content: end
        // notify append or prepend: begin
        if (newNotifySettings.position === "left-bottom" || newNotifySettings.position === "right-bottom") {
            var notifyWrap = window.document.getElementById(notifySettings.wrapID);
            notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
        } else window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
        // notify append or prepend: end
        // remove by timeout or click: begin
        var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
        if (eachNotifyElement) {
            // timeout variables
            var timeoutHide;
            var timeoutRemove;
            // hide notify elm and hide overlay: begin
            var hideNotifyElementsAndOverlay = function() {
                eachNotifyElement.classList.add("nx-remove");
                var removeOverlay = window.document.getElementById(notifySettings.overlayID);
                if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) removeOverlay.classList.add("nx-remove");
                clearTimeout(timeoutHide);
            };
            // hide notify elm and hide overlay: end
            // remove notify elm and wrapper: begin
            var removeNotifyElmentsAndWrapper = function() {
                if (eachNotifyElement && eachNotifyElement.parentNode !== null) eachNotifyElement.parentNode.removeChild(eachNotifyElement);
                if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) {
                    ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
                    var removeOverlay = window.document.getElementById(notifySettings.overlayID);
                    if (removeOverlay && removeOverlay.parentNode !== null) removeOverlay.parentNode.removeChild(removeOverlay);
                }
                clearTimeout(timeoutRemove);
            };
            // remove notify elm and wrapper: end
            // if has close button and callbackOrOptions is not a function: begin
            if (newNotifySettings.closeButton && typeof callbackOrOptions !== "function") {
                var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector("span.nx-close-button");
                closeButtonElm.addEventListener("click", function() {
                    hideNotifyElementsAndOverlay();
                    var clickToCloseTimeout = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                        clearTimeout(clickToCloseTimeout);
                    }, newNotifySettings.cssAnimationDuration);
                });
            }
            // if has close button and callbackOrOptions is not a function: end
            // if callbackOrOptions or click to close: begin
            if (typeof callbackOrOptions === "function" || newNotifySettings.clickToClose) eachNotifyElement.addEventListener("click", function() {
                if (typeof callbackOrOptions === "function") callbackOrOptions();
                hideNotifyElementsAndOverlay();
                var callbackTimeout = setTimeout(function() {
                    removeNotifyElmentsAndWrapper();
                    clearTimeout(callbackTimeout);
                }, newNotifySettings.cssAnimationDuration);
            });
            // if callbackOrOptions or click to close: end
            // else auto remove: begin
            if (!newNotifySettings.closeButton && typeof callbackOrOptions !== "function") {
                // auto remove: begin
                var autoRemove = function() {
                    timeoutHide = setTimeout(function() {
                        hideNotifyElementsAndOverlay();
                    }, newNotifySettings.timeout);
                    timeoutRemove = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                    }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
                };
                autoRemove();
                // auto remove: end
                // pause auto remove: begin
                if (newNotifySettings.pauseOnHover) {
                    eachNotifyElement.addEventListener("mouseenter", function() {
                        eachNotifyElement.classList.add("nx-paused");
                        clearTimeout(timeoutHide);
                        clearTimeout(timeoutRemove);
                    });
                    eachNotifyElement.addEventListener("mouseleave", function() {
                        eachNotifyElement.classList.remove("nx-paused");
                        autoRemove();
                    });
                }
            // pause auto remove: end
            }
        // else auto remove: end
        }
        // remove by timeout or click: end
        // notify - show only the last one: begin
        if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
            var allNotifyElmNotTheLastOne = window.document.querySelectorAll("[id^=" + newNotifySettings.ID + "-]:not([id=" + newNotifySettings.ID + "-" + notifyCreateCounter + "])");
            for(var i = 0; i < allNotifyElmNotTheLastOne.length; i++){
                var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
                if (eachNotifyElmNotLastOne.parentNode !== null) eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
            }
        }
        // notify - show only the last one: end
        // extend new settings with the backup settings
        newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);
    };
    // NOTIFY: Create: end
    var Notiflix = {
        Notify: {
            // Init
            init: function(userNotifyOptions) {
                // extend options
                newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
                // internal css if exist
                commonSetInternalCSSCodes(notifyGetInternalCSSCodes, "NotiflixNotifyInternalCSS");
            },
            // Merge First Init
            merge: function(userNotifyExtendOptions) {
                // if initialized already
                if (newNotifySettings) newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
                else {
                    commonConsoleError("You have to initialize the Notify module before call Merge function.");
                    return false;
                }
            },
            // Success
            success: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
            },
            // Failure
            failure: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
            },
            // Warning
            warning: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
            },
            // Info
            info: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
            }
        }
    };
    if (typeof window.Notiflix === "object") return commonExtendOptions(true, window.Notiflix, {
        Notify: Notiflix.Notify
    });
    else return {
        Notify: Notiflix.Notify
    };
});

},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
