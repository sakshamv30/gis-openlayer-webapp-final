// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ol/geom/GeometryType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/geom/GeometryType
 */

/**
 * The geometry type. One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, `'Circle'`.
 * @enum {string}
 */
var _default = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  LINEAR_RING: 'LinearRing',
  POLYGON: 'Polygon',
  MULTI_POINT: 'MultiPoint',
  MULTI_LINE_STRING: 'MultiLineString',
  MULTI_POLYGON: 'MultiPolygon',
  GEOMETRY_COLLECTION: 'GeometryCollection',
  CIRCLE: 'Circle'
};
exports.default = _default;
},{}],"ol/events/Event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.default = void 0;

/**
 * @module ol/events/Event
 */

/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */
var BaseEvent =
/** @class */
function () {
  /**
   * @param {string} type Type.
   */
  function BaseEvent(type) {
    /**
     * @type {boolean}
     */
    this.propagationStopped;
    /**
     * The event type.
     * @type {string}
     * @api
     */

    this.type = type;
    /**
     * The event target.
     * @type {Object}
     * @api
     */

    this.target = null;
  }
  /**
   * Stop event propagation.
   * @api
   */


  BaseEvent.prototype.preventDefault = function () {
    this.propagationStopped = true;
  };
  /**
   * Stop event propagation.
   * @api
   */


  BaseEvent.prototype.stopPropagation = function () {
    this.propagationStopped = true;
  };

  return BaseEvent;
}();
/**
 * @param {Event|import("./Event.js").default} evt Event
 */


function stopPropagation(evt) {
  evt.stopPropagation();
}
/**
 * @param {Event|import("./Event.js").default} evt Event
 */


function preventDefault(evt) {
  evt.preventDefault();
}

var _default = BaseEvent;
exports.default = _default;
},{}],"ol/ObjectEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/ObjectEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: 'propertychange'
};
exports.default = _default;
},{}],"ol/Disposable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/Disposable
 */

/**
 * @classdesc
 * Objects that need to clean up after themselves.
 */
var Disposable =
/** @class */
function () {
  function Disposable() {
    /**
     * The object has already been disposed.
     * @type {boolean}
     * @protected
     */
    this.disposed = false;
  }
  /**
   * Clean up.
   */


  Disposable.prototype.dispose = function () {
    if (!this.disposed) {
      this.disposed = true;
      this.disposeInternal();
    }
  };
  /**
   * Extension point for disposable objects.
   * @protected
   */


  Disposable.prototype.disposeInternal = function () {};

  return Disposable;
}();

var _default = Disposable;
exports.default = _default;
},{}],"ol/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = binarySearch;
exports.numberSafeCompareFunction = numberSafeCompareFunction;
exports.includes = includes;
exports.linearFindNearest = linearFindNearest;
exports.reverseSubArray = reverseSubArray;
exports.extend = extend;
exports.remove = remove;
exports.find = find;
exports.equals = equals;
exports.stableSort = stableSort;
exports.findIndex = findIndex;
exports.isSorted = isSorted;

/**
 * @module ol/array
 */

/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function=} opt_comparator Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
function binarySearch(haystack, needle, opt_comparator) {
  var mid, cmp;
  var comparator = opt_comparator || numberSafeCompareFunction;
  var low = 0;
  var high = haystack.length;
  var found = false;

  while (low < high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle);

    if (cmp < 0.0) {
      /* Too low. */
      low = mid + 1;
    } else {
      /* Key found or too high */
      high = mid;
      found = !cmp;
    }
  }
  /* Key not found. */


  return found ? low : ~low;
}
/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */


function numberSafeCompareFunction(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
/**
 * Whether the array contains the given object.
 * @param {Array<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */


function includes(arr, obj) {
  return arr.indexOf(obj) >= 0;
}
/**
 * @param {Array<number>} arr Array.
 * @param {number} target Target.
 * @param {number} direction 0 means return the nearest, > 0
 *    means return the largest nearest, < 0 means return the
 *    smallest nearest.
 * @return {number} Index.
 */


function linearFindNearest(arr, target, direction) {
  var n = arr.length;

  if (arr[0] <= target) {
    return 0;
  } else if (target <= arr[n - 1]) {
    return n - 1;
  } else {
    var i = void 0;

    if (direction > 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] < target) {
          return i - 1;
        }
      }
    } else if (direction < 0) {
      for (i = 1; i < n; ++i) {
        if (arr[i] <= target) {
          return i;
        }
      }
    } else {
      for (i = 1; i < n; ++i) {
        if (arr[i] == target) {
          return i;
        } else if (arr[i] < target) {
          if (arr[i - 1] - target < target - arr[i]) {
            return i - 1;
          } else {
            return i;
          }
        }
      }
    }

    return n - 1;
  }
}
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */


function reverseSubArray(arr, begin, end) {
  while (begin < end) {
    var tmp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = tmp;
    ++begin;
    --end;
  }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */


function extend(arr, data) {
  var extension = Array.isArray(data) ? data : [data];
  var length = extension.length;

  for (var i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */


function remove(arr, obj) {
  var i = arr.indexOf(obj);
  var found = i > -1;

  if (found) {
    arr.splice(i, 1);
  }

  return found;
}
/**
 * @param {Array<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE|null} The element found or null.
 */


function find(arr, func) {
  var length = arr.length >>> 0;
  var value;

  for (var i = 0; i < length; i++) {
    value = arr[i];

    if (func(value, i, arr)) {
      return value;
    }
  }

  return null;
}
/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */


function equals(arr1, arr2) {
  var len1 = arr1.length;

  if (len1 !== arr2.length) {
    return false;
  }

  for (var i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
/**
 * Sort the passed array such that the relative order of equal elements is preverved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */


function stableSort(arr, compareFnc) {
  var length = arr.length;
  var tmp = Array(arr.length);
  var i;

  for (i = 0; i < length; i++) {
    tmp[i] = {
      index: i,
      value: arr[i]
    };
  }

  tmp.sort(function (a, b) {
    return compareFnc(a.value, b.value) || a.index - b.index;
  });

  for (i = 0; i < arr.length; i++) {
    arr[i] = tmp[i].value;
  }
}
/**
 * @param {Array<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */


function findIndex(arr, func) {
  var index;
  var found = !arr.every(function (el, idx) {
    index = idx;
    return !func(el, idx, arr);
  });
  return found ? index : -1;
}
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function=} opt_func Comparison function.
 * @param {boolean=} opt_strict Strictly sorted (default false).
 * @return {boolean} Return index.
 */


function isSorted(arr, opt_func, opt_strict) {
  var compare = opt_func || numberSafeCompareFunction;
  return arr.every(function (currentVal, index) {
    if (index === 0) {
      return true;
    }

    var res = compare(arr[index - 1], currentVal);
    return !(res > 0 || opt_strict && res === 0);
  });
}
},{}],"ol/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRUE = TRUE;
exports.FALSE = FALSE;
exports.VOID = VOID;
exports.memoizeOne = memoizeOne;

var _array = require("./array.js");

/**
 * @module ol/functions
 */

/**
 * Always returns true.
 * @returns {boolean} true.
 */
function TRUE() {
  return true;
}
/**
 * Always returns false.
 * @returns {boolean} false.
 */


function FALSE() {
  return false;
}
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */


function VOID() {}
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */


function memoizeOne(fn) {
  var called = false;
  /** @type {ReturnType} */

  var lastResult;
  /** @type {Array<any>} */

  var lastArgs;
  var lastThis;
  return function () {
    var nextArgs = Array.prototype.slice.call(arguments);

    if (!called || this !== lastThis || !(0, _array.equals)(nextArgs, lastArgs)) {
      called = true;
      lastThis = this;
      lastArgs = nextArgs;
      lastResult = fn.apply(this, arguments);
    }

    return lastResult;
  };
}
},{"./array.js":"ol/array.js"}],"ol/obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.isEmpty = isEmpty;
exports.getValues = exports.assign = void 0;

/**
 * @module ol/obj
 */

/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 * See https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign.
 *
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
var assign = typeof Object.assign === 'function' ? Object.assign : function (target, var_sources) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);

  for (var i = 1, ii = arguments.length; i < ii; ++i) {
    var source = arguments[i];

    if (source !== undefined && source !== null) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          output[key] = source[key];
        }
      }
    }
  }

  return output;
};
/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */

exports.assign = assign;

function clear(object) {
  for (var property in object) {
    delete object[property];
  }
}
/**
 * Polyfill for Object.values().  Get an array of property values from an object.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 *
 * @param {!Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */


var getValues = typeof Object.values === 'function' ? Object.values : function (object) {
  var values = [];

  for (var property in object) {
    values.push(object[property]);
  }

  return values;
};
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */

exports.getValues = getValues;

function isEmpty(object) {
  var property;

  for (property in object) {
    return false;
  }

  return !property;
}
},{}],"ol/events/Target.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Disposable = _interopRequireDefault(require("../Disposable.js"));

var _Event = _interopRequireDefault(require("./Event.js"));

var _functions = require("../functions.js");

var _obj = require("../obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/events/Target
 */


/**
 * @typedef {EventTarget|Target} EventTargetLike
 */

/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */
var Target =
/** @class */
function (_super) {
  __extends(Target, _super);
  /**
   * @param {*=} opt_target Default event target for dispatched events.
   */


  function Target(opt_target) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {*}
     */


    _this.eventTarget_ = opt_target;
    /**
     * @private
     * @type {Object<string, number>}
     */

    _this.pendingRemovals_ = null;
    /**
     * @private
     * @type {Object<string, number>}
     */

    _this.dispatching_ = null;
    /**
     * @private
     * @type {Object<string, Array<import("../events.js").Listener>>}
     */

    _this.listeners_ = null;
    return _this;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */


  Target.prototype.addEventListener = function (type, listener) {
    if (!type || !listener) {
      return;
    }

    var listeners = this.listeners_ || (this.listeners_ = {});
    var listenersForType = listeners[type] || (listeners[type] = []);

    if (listenersForType.indexOf(listener) === -1) {
      listenersForType.push(listener);
    }
  };
  /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */


  Target.prototype.dispatchEvent = function (event) {
    /** @type {import("./Event.js").default|Event} */
    var evt = typeof event === 'string' ? new _Event.default(event) : event;
    var type = evt.type;

    if (!evt.target) {
      evt.target = this.eventTarget_ || this;
    }

    var listeners = this.listeners_ && this.listeners_[type];
    var propagate;

    if (listeners) {
      var dispatching = this.dispatching_ || (this.dispatching_ = {});
      var pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});

      if (!(type in dispatching)) {
        dispatching[type] = 0;
        pendingRemovals[type] = 0;
      }

      ++dispatching[type];

      for (var i = 0, ii = listeners.length; i < ii; ++i) {
        if ('handleEvent' in listeners[i]) {
          propagate =
          /** @type {import("../events.js").ListenerObject} */
          listeners[i].handleEvent(evt);
        } else {
          propagate =
          /** @type {import("../events.js").ListenerFunction} */
          listeners[i].call(this, evt);
        }

        if (propagate === false || evt.propagationStopped) {
          propagate = false;
          break;
        }
      }

      --dispatching[type];

      if (dispatching[type] === 0) {
        var pr = pendingRemovals[type];
        delete pendingRemovals[type];

        while (pr--) {
          this.removeEventListener(type, _functions.VOID);
        }

        delete dispatching[type];
      }

      return propagate;
    }
  };
  /**
   * Clean up.
   */


  Target.prototype.disposeInternal = function () {
    this.listeners_ && (0, _obj.clear)(this.listeners_);
  };
  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */


  Target.prototype.getListeners = function (type) {
    return this.listeners_ && this.listeners_[type] || undefined;
  };
  /**
   * @param {string=} opt_type Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */


  Target.prototype.hasListener = function (opt_type) {
    if (!this.listeners_) {
      return false;
    }

    return opt_type ? opt_type in this.listeners_ : Object.keys(this.listeners_).length > 0;
  };
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */


  Target.prototype.removeEventListener = function (type, listener) {
    var listeners = this.listeners_ && this.listeners_[type];

    if (listeners) {
      var index = listeners.indexOf(listener);

      if (index !== -1) {
        if (this.pendingRemovals_ && type in this.pendingRemovals_) {
          // make listener a no-op, and remove later in #dispatchEvent()
          listeners[index] = _functions.VOID;
          ++this.pendingRemovals_[type];
        } else {
          listeners.splice(index, 1);

          if (listeners.length === 0) {
            delete this.listeners_[type];
          }
        }
      }
    }
  };

  return Target;
}(_Disposable.default);

var _default = Target;
exports.default = _default;
},{"../Disposable.js":"ol/Disposable.js","./Event.js":"ol/events/Event.js","../functions.js":"ol/functions.js","../obj.js":"ol/obj.js"}],"ol/events/EventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/events/EventType
 */

/**
 * @enum {string}
 * @const
 */
var _default = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */
  CHANGE: 'change',

  /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */
  ERROR: 'error',
  BLUR: 'blur',
  CLEAR: 'clear',
  CONTEXTMENU: 'contextmenu',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGENTER: 'dragenter',
  DRAGOVER: 'dragover',
  DROP: 'drop',
  FOCUS: 'focus',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  RESIZE: 'resize',
  TOUCHMOVE: 'touchmove',
  WHEEL: 'wheel'
};
exports.default = _default;
},{}],"ol/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = listen;
exports.listenOnce = listenOnce;
exports.unlistenByKey = unlistenByKey;

var _obj = require("./obj.js");

/**
 * @module ol/events
 */

/**
 * Key to use with {@link module:ol/Observable~Observable#unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener
 * @property {import("./events/Target.js").EventTargetLike} target
 * @property {string} type
 * @api
 */

/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */

/**
 * @typedef {Object} ListenerObject
 * @property {ListenerFunction} handleEvent
 */

/**
 * @typedef {ListenerFunction|ListenerObject} Listener
 */

/**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events~unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean=} opt_once If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */
function listen(target, type, _listener, opt_this, opt_once) {
  if (opt_this && opt_this !== target) {
    _listener = _listener.bind(opt_this);
  }

  if (opt_once) {
    var originalListener_1 = _listener;

    _listener = function listener() {
      target.removeEventListener(type, _listener);
      originalListener_1.apply(this, arguments);
    };
  }

  var eventsKey = {
    target: target,
    type: type,
    listener: _listener
  };
  target.addEventListener(type, _listener);
  return eventsKey;
}
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events~unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events~listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object=} opt_this Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */


function listenOnce(target, type, listener, opt_this) {
  return listen(target, type, listener, opt_this, true);
}
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events~listen} or {@link module:ol/events~listenOnce}.
 *
 * @param {EventsKey} key The key.
 */


function unlistenByKey(key) {
  if (key && key.target) {
    key.target.removeEventListener(key.type, key.listener);
    (0, _obj.clear)(key);
  }
}
},{"./obj.js":"ol/obj.js"}],"ol/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unByKey = unByKey;
exports.default = void 0;

var _Target = _interopRequireDefault(require("./events/Target.js"));

var _EventType = _interopRequireDefault(require("./events/EventType.js"));

var _events = require("./events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/Observable
 */


/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */
var Observable =
/** @class */
function (_super) {
  __extends(Observable, _super);

  function Observable() {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {number}
     */


    _this.revision_ = 0;
    return _this;
  }
  /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */


  Observable.prototype.changed = function () {
    ++this.revision_;
    this.dispatchEvent(_EventType.default.CHANGE);
  };
  /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */


  Observable.prototype.getRevision = function () {
    return this.revision_;
  };
  /**
   * Listen for a certain type of event.
   * @param {string|Array<string>} type The event type or array of event types.
   * @param {function(?): ?} listener The listener function.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
   *     called with an array of event types as the first argument, the return
   *     will be an array of keys.
   * @api
   */


  Observable.prototype.on = function (type, listener) {
    if (Array.isArray(type)) {
      var len = type.length;
      var keys = new Array(len);

      for (var i = 0; i < len; ++i) {
        keys[i] = (0, _events.listen)(this, type[i], listener);
      }

      return keys;
    } else {
      return (0, _events.listen)(this,
      /** @type {string} */
      type, listener);
    }
  };
  /**
   * Listen once for a certain type of event.
   * @param {string|Array<string>} type The event type or array of event types.
   * @param {function(?): ?} listener The listener function.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
   *     called with an array of event types as the first argument, the return
   *     will be an array of keys.
   * @api
   */


  Observable.prototype.once = function (type, listener) {
    var key;

    if (Array.isArray(type)) {
      var len = type.length;
      key = new Array(len);

      for (var i = 0; i < len; ++i) {
        key[i] = (0, _events.listenOnce)(this, type[i], listener);
      }
    } else {
      key = (0, _events.listenOnce)(this,
      /** @type {string} */
      type, listener);
    }
    /** @type {Object} */


    listener.ol_key = key;
    return key;
  };
  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type The event type or array of event types.
   * @param {function(?): ?} listener The listener function.
   * @api
   */


  Observable.prototype.un = function (type, listener) {
    var key =
    /** @type {Object} */
    listener.ol_key;

    if (key) {
      unByKey(key);
    } else if (Array.isArray(type)) {
      for (var i = 0, ii = type.length; i < ii; ++i) {
        this.removeEventListener(type[i], listener);
      }
    } else {
      this.removeEventListener(type, listener);
    }
  };

  return Observable;
}(_Target.default);
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */


function unByKey(key) {
  if (Array.isArray(key)) {
    for (var i = 0, ii = key.length; i < ii; ++i) {
      (0, _events.unlistenByKey)(key[i]);
    }
  } else {
    (0, _events.unlistenByKey)(
    /** @type {import("./events.js").EventsKey} */
    key);
  }
}

var _default = Observable;
exports.default = _default;
},{"./events/Target.js":"ol/events/Target.js","./events/EventType.js":"ol/events/EventType.js","./events.js":"ol/events.js"}],"ol/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abstract = abstract;
exports.getUid = getUid;
exports.VERSION = void 0;

/**
 * @module ol/util
 */

/**
 * @return {?} Any return.
 */
function abstract() {
  return (
    /** @type {?} */
    function () {
      throw new Error('Unimplemented abstract method.');
    }()
  );
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */


var uidCounter_ = 0;
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */

function getUid(obj) {
  return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
/**
 * OpenLayers version.
 * @type {string}
 */


var VERSION = '6.4.1';
exports.VERSION = VERSION;
},{}],"ol/Object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChangeEventType = getChangeEventType;
exports.default = exports.ObjectEvent = void 0;

var _Event = _interopRequireDefault(require("./events/Event.js"));

var _ObjectEventType = _interopRequireDefault(require("./ObjectEventType.js"));

var _Observable = _interopRequireDefault(require("./Observable.js"));

var _obj = require("./obj.js");

var _util = require("./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/Object
 */


/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */
var ObjectEvent =
/** @class */
function (_super) {
  __extends(ObjectEvent, _super);
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */


  function ObjectEvent(type, key, oldValue) {
    var _this = _super.call(this, type) || this;
    /**
     * The name of the property whose value is changing.
     * @type {string}
     * @api
     */


    _this.key = key;
    /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @type {*}
     * @api
     */

    _this.oldValue = oldValue;
    return _this;
  }

  return ObjectEvent;
}(_Event.default);

exports.ObjectEvent = ObjectEvent;

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */
var BaseObject =
/** @class */
function (_super) {
  __extends(BaseObject, _super);
  /**
   * @param {Object<string, *>=} opt_values An object with key-value pairs.
   */


  function BaseObject(opt_values) {
    var _this = _super.call(this) || this; // Call {@link module:ol/util~getUid} to ensure that the order of objects' ids is
    // the same as the order in which they were created.  This also helps to
    // ensure that object properties are always added in the same order, which
    // helps many JavaScript engines generate faster code.


    (0, _util.getUid)(_this);
    /**
     * @private
     * @type {Object<string, *>}
     */

    _this.values_ = null;

    if (opt_values !== undefined) {
      _this.setProperties(opt_values);
    }

    return _this;
  }
  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */


  BaseObject.prototype.get = function (key) {
    var value;

    if (this.values_ && this.values_.hasOwnProperty(key)) {
      value = this.values_[key];
    }

    return value;
  };
  /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */


  BaseObject.prototype.getKeys = function () {
    return this.values_ && Object.keys(this.values_) || [];
  };
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */


  BaseObject.prototype.getProperties = function () {
    return this.values_ && (0, _obj.assign)({}, this.values_) || {};
  };
  /**
   * @return {boolean} The object has properties.
   */


  BaseObject.prototype.hasProperties = function () {
    return !!this.values_;
  };
  /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */


  BaseObject.prototype.notify = function (key, oldValue) {
    var eventType;
    eventType = getChangeEventType(key);
    this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    eventType = _ObjectEventType.default.PROPERTYCHANGE;
    this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
  };
  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean=} opt_silent Update without triggering an event.
   * @api
   */


  BaseObject.prototype.set = function (key, value, opt_silent) {
    var values = this.values_ || (this.values_ = {});

    if (opt_silent) {
      values[key] = value;
    } else {
      var oldValue = values[key];
      values[key] = value;

      if (oldValue !== value) {
        this.notify(key, oldValue);
      }
    }
  };
  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean=} opt_silent Update without triggering an event.
   * @api
   */


  BaseObject.prototype.setProperties = function (values, opt_silent) {
    for (var key in values) {
      this.set(key, values[key], opt_silent);
    }
  };
  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean=} opt_silent Unset without triggering an event.
   * @api
   */


  BaseObject.prototype.unset = function (key, opt_silent) {
    if (this.values_ && key in this.values_) {
      var oldValue = this.values_[key];
      delete this.values_[key];

      if ((0, _obj.isEmpty)(this.values_)) {
        this.values_ = null;
      }

      if (!opt_silent) {
        this.notify(key, oldValue);
      }
    }
  };

  return BaseObject;
}(_Observable.default);
/**
 * @type {Object<string, string>}
 */


var changeEventTypeCache = {};
/**
 * @param {string} key Key name.
 * @return {string} Change name.
 */

function getChangeEventType(key) {
  return changeEventTypeCache.hasOwnProperty(key) ? changeEventTypeCache[key] : changeEventTypeCache[key] = 'change:' + key;
}

var _default = BaseObject;
exports.default = _default;
},{"./events/Event.js":"ol/events/Event.js","./ObjectEventType.js":"ol/ObjectEventType.js","./Observable.js":"ol/Observable.js","./obj.js":"ol/obj.js","./util.js":"ol/util.js"}],"ol/proj/Units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.METERS_PER_UNIT = void 0;

/**
 * @module ol/proj/Units
 */

/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
var Units = {
  DEGREES: 'degrees',
  FEET: 'ft',
  METERS: 'm',
  PIXELS: 'pixels',
  TILE_PIXELS: 'tile-pixels',
  USFEET: 'us-ft'
};
/**
 * Meters per unit lookup table.
 * @const
 * @type {Object<Units, number>}
 * @api
 */

var METERS_PER_UNIT = {}; // use the radius of the Normal sphere

exports.METERS_PER_UNIT = METERS_PER_UNIT;
METERS_PER_UNIT[Units.DEGREES] = 2 * Math.PI * 6370997 / 360;
METERS_PER_UNIT[Units.FEET] = 0.3048;
METERS_PER_UNIT[Units.METERS] = 1;
METERS_PER_UNIT[Units.USFEET] = 1200 / 3937;
var _default = Units;
exports.default = _default;
},{}],"ol/AssertionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("./util.js");

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/AssertionError
 */


/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */
var AssertionError =
/** @class */
function (_super) {
  __extends(AssertionError, _super);
  /**
   * @param {number} code Error code.
   */


  function AssertionError(code) {
    var _this = this;

    var path = _util.VERSION === 'latest' ? _util.VERSION : 'v' + _util.VERSION.split('-')[0];
    var message = 'Assertion failed. See https://openlayers.org/en/' + path + '/doc/errors/#' + code + ' for details.';
    _this = _super.call(this, message) || this;
    /**
     * Error code. The meaning of the code can be found on
     * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
     * the version found in the OpenLayers script's header comment if a version
     * other than the latest is used).
     * @type {number}
     * @api
     */

    _this.code = code;
    /**
     * @type {string}
     */

    _this.name = 'AssertionError'; // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40

    _this.message = message;
    return _this;
  }

  return AssertionError;
}(Error);

var _default = AssertionError;
exports.default = _default;
},{"./util.js":"ol/util.js"}],"ol/asserts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = assert;

var _AssertionError = _interopRequireDefault(require("./AssertionError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/asserts
 */

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
function assert(assertion, errorCode) {
  if (!assertion) {
    throw new _AssertionError.default(errorCode);
  }
}
},{"./AssertionError.js":"ol/AssertionError.js"}],"ol/transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.reset = reset;
exports.multiply = multiply;
exports.set = set;
exports.setFromArray = setFromArray;
exports.apply = apply;
exports.rotate = rotate;
exports.scale = scale;
exports.makeScale = makeScale;
exports.translate = translate;
exports.compose = compose;
exports.composeCssTransform = composeCssTransform;
exports.invert = invert;
exports.makeInverse = makeInverse;
exports.determinant = determinant;
exports.toString = toString;

var _asserts = require("./asserts.js");

/**
 * @module ol/transform
 */

/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */

/**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */

/**
 * @private
 * @type {Transform}
 */
var tmp_ = new Array(6);
/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */

function create() {
  return [1, 0, 0, 1, 0, 0];
}
/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */


function reset(transform) {
  return set(transform, 1, 0, 0, 1, 0, 0);
}
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */


function multiply(transform1, transform2) {
  var a1 = transform1[0];
  var b1 = transform1[1];
  var c1 = transform1[2];
  var d1 = transform1[3];
  var e1 = transform1[4];
  var f1 = transform1[5];
  var a2 = transform2[0];
  var b2 = transform2[1];
  var c2 = transform2[2];
  var d2 = transform2[3];
  var e2 = transform2[4];
  var f2 = transform2[5];
  transform1[0] = a1 * a2 + c1 * b2;
  transform1[1] = b1 * a2 + d1 * b2;
  transform1[2] = a1 * c2 + c1 * d2;
  transform1[3] = b1 * c2 + d1 * d2;
  transform1[4] = a1 * e2 + c1 * f2 + e1;
  transform1[5] = b1 * e2 + d1 * f2 + f1;
  return transform1;
}
/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */


function set(transform, a, b, c, d, e, f) {
  transform[0] = a;
  transform[1] = b;
  transform[2] = c;
  transform[3] = d;
  transform[4] = e;
  transform[5] = f;
  return transform;
}
/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */


function setFromArray(transform1, transform2) {
  transform1[0] = transform2[0];
  transform1[1] = transform2[1];
  transform1[2] = transform2[2];
  transform1[3] = transform2[3];
  transform1[4] = transform2[4];
  transform1[5] = transform2[5];
  return transform1;
}
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */


function apply(transform, coordinate) {
  var x = coordinate[0];
  var y = coordinate[1];
  coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
  coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
  return coordinate;
}
/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */


function rotate(transform, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}
/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */


function scale(transform, x, y) {
  return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}
/**
 * Creates a scale transform.
 * @param {!Transform} target Transform to overwrite.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scale transform.
 */


function makeScale(target, x, y) {
  return set(target, x, 0, 0, y, 0, 0);
}
/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */


function translate(transform, dx, dy) {
  return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */


function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
  var sin = Math.sin(angle);
  var cos = Math.cos(angle);
  transform[0] = sx * cos;
  transform[1] = sy * sin;
  transform[2] = -sx * sin;
  transform[3] = sy * cos;
  transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
  transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
  return transform;
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as `transform` porperty of an HTMLElement's style.
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {string} The composite css transform.
 * @api
 */


function composeCssTransform(dx1, dy1, sx, sy, angle, dx2, dy2) {
  return toString(compose(create(), dx1, dy1, sx, sy, angle, dx2, dy2));
}
/**
 * Invert the given transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (source) transform.
 */


function invert(source) {
  return makeInverse(source, source);
}
/**
 * Invert the given transform.
 * @param {!Transform} target Transform to be set as the inverse of
 *     the source transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (target) transform.
 */


function makeInverse(target, source) {
  var det = determinant(source);
  (0, _asserts.assert)(det !== 0, 32); // Transformation matrix cannot be inverted

  var a = source[0];
  var b = source[1];
  var c = source[2];
  var d = source[3];
  var e = source[4];
  var f = source[5];
  target[0] = d / det;
  target[1] = -b / det;
  target[2] = -c / det;
  target[3] = a / det;
  target[4] = (c * f - d * e) / det;
  target[5] = -(a * f - b * e) / det;
  return target;
}
/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */


function determinant(mat) {
  return mat[0] * mat[3] - mat[1] * mat[2];
}
/**
 * A string version of the transform.  This can be used
 * for CSS transforms.
 * @param {!Transform} mat Matrix.
 * @return {string} The transform as a string.
 */


function toString(mat) {
  return 'matrix(' + mat.join(', ') + ')';
}
},{"./asserts.js":"ol/asserts.js"}],"ol/extent/Corner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/extent/Corner
 */

/**
 * Extent corner.
 * @enum {string}
 */
var _default = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
};
exports.default = _default;
},{}],"ol/extent/Relationship.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/extent/Relationship
 */

/**
 * Relationship to an extent.
 * @enum {number}
 */
var _default = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
exports.default = _default;
},{}],"ol/extent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundingExtent = boundingExtent;
exports.buffer = buffer;
exports.clone = clone;
exports.closestSquaredDistanceXY = closestSquaredDistanceXY;
exports.containsCoordinate = containsCoordinate;
exports.containsExtent = containsExtent;
exports.containsXY = containsXY;
exports.coordinateRelationship = coordinateRelationship;
exports.createEmpty = createEmpty;
exports.createOrUpdate = createOrUpdate;
exports.createOrUpdateEmpty = createOrUpdateEmpty;
exports.createOrUpdateFromCoordinate = createOrUpdateFromCoordinate;
exports.createOrUpdateFromCoordinates = createOrUpdateFromCoordinates;
exports.createOrUpdateFromFlatCoordinates = createOrUpdateFromFlatCoordinates;
exports.createOrUpdateFromRings = createOrUpdateFromRings;
exports.equals = equals;
exports.approximatelyEquals = approximatelyEquals;
exports.extend = extend;
exports.extendCoordinate = extendCoordinate;
exports.extendCoordinates = extendCoordinates;
exports.extendFlatCoordinates = extendFlatCoordinates;
exports.extendRings = extendRings;
exports.extendXY = extendXY;
exports.forEachCorner = forEachCorner;
exports.getArea = getArea;
exports.getBottomLeft = getBottomLeft;
exports.getBottomRight = getBottomRight;
exports.getCenter = getCenter;
exports.getCorner = getCorner;
exports.getEnlargedArea = getEnlargedArea;
exports.getForViewAndSize = getForViewAndSize;
exports.getHeight = getHeight;
exports.getIntersectionArea = getIntersectionArea;
exports.getIntersection = getIntersection;
exports.getMargin = getMargin;
exports.getSize = getSize;
exports.getTopLeft = getTopLeft;
exports.getTopRight = getTopRight;
exports.getWidth = getWidth;
exports.intersects = intersects;
exports.isEmpty = isEmpty;
exports.returnOrUpdate = returnOrUpdate;
exports.scaleFromCenter = scaleFromCenter;
exports.intersectsSegment = intersectsSegment;
exports.applyTransform = applyTransform;
exports.wrapX = wrapX;

var _Corner = _interopRequireDefault(require("./extent/Corner.js"));

var _Relationship = _interopRequireDefault(require("./extent/Relationship.js"));

var _asserts = require("./asserts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/extent
 */

/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */

/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */
function boundingExtent(coordinates) {
  var extent = createEmpty();

  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }

  return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent=} opt_extent Destination extent.
 * @private
 * @return {Extent} Extent.
 */


function _boundingExtentXYs(xs, ys, opt_extent) {
  var minX = Math.min.apply(null, xs);
  var minY = Math.min.apply(null, ys);
  var maxX = Math.max.apply(null, xs);
  var maxY = Math.max.apply(null, ys);
  return createOrUpdate(minX, minY, maxX, maxY, opt_extent);
}
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 * @api
 */


function buffer(extent, value, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0] - value;
    opt_extent[1] = extent[1] - value;
    opt_extent[2] = extent[2] + value;
    opt_extent[3] = extent[3] + value;
    return opt_extent;
  } else {
    return [extent[0] - value, extent[1] - value, extent[2] + value, extent[3] + value];
  }
}
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} The clone.
 */


function clone(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent.slice();
  }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */


function closestSquaredDistanceXY(extent, x, y) {
  var dx, dy;

  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }

  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }

  return dx * dx + dy * dy;
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */


function containsCoordinate(extent, coordinate) {
  return containsXY(extent, coordinate[0], coordinate[1]);
}
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */


function containsExtent(extent1, extent2) {
  return extent1[0] <= extent2[0] && extent2[2] <= extent1[2] && extent1[1] <= extent2[1] && extent2[3] <= extent1[3];
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */


function containsXY(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */


function coordinateRelationship(extent, coordinate) {
  var minX = extent[0];
  var minY = extent[1];
  var maxX = extent[2];
  var maxY = extent[3];
  var x = coordinate[0];
  var y = coordinate[1];
  var relationship = _Relationship.default.UNKNOWN;

  if (x < minX) {
    relationship = relationship | _Relationship.default.LEFT;
  } else if (x > maxX) {
    relationship = relationship | _Relationship.default.RIGHT;
  }

  if (y < minY) {
    relationship = relationship | _Relationship.default.BELOW;
  } else if (y > maxY) {
    relationship = relationship | _Relationship.default.ABOVE;
  }

  if (relationship === _Relationship.default.UNKNOWN) {
    relationship = _Relationship.default.INTERSECTING;
  }

  return relationship;
}
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */


function createEmpty() {
  return [Infinity, Infinity, -Infinity, -Infinity];
}
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 */


function createOrUpdate(minX, minY, maxX, maxY, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = minX;
    opt_extent[1] = minY;
    opt_extent[2] = maxX;
    opt_extent[3] = maxY;
    return opt_extent;
  } else {
    return [minX, minY, maxX, maxY];
  }
}
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateEmpty(opt_extent) {
  return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromCoordinate(coordinate, opt_extent) {
  var x = coordinate[0];
  var y = coordinate[1];
  return createOrUpdate(x, y, x, y, opt_extent);
}
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromCoordinates(coordinates, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendCoordinates(extent, coordinates);
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function createOrUpdateFromRings(rings, opt_extent) {
  var extent = createOrUpdateEmpty(opt_extent);
  return extendRings(extent, rings);
}
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */


function equals(extent1, extent2) {
  return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
}
/**
 * Determine if two extents are approximately equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {number} tolerance Tolerance in extent coordinate units.
 * @return {boolean} The two extents differ by less than the tolerance.
 */


function approximatelyEquals(extent1, extent2, tolerance) {
  return Math.abs(extent1[0] - extent2[0]) < tolerance && Math.abs(extent1[2] - extent2[2]) < tolerance && Math.abs(extent1[1] - extent2[1]) < tolerance && Math.abs(extent1[3] - extent2[3]) < tolerance;
}
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */


function extend(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }

  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }

  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }

  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }

  return extent1;
}
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */


function extendCoordinate(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }

  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }

  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }

  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */


function extendCoordinates(extent, coordinates) {
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }

  return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */


function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
  for (; offset < end; offset += stride) {
    extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }

  return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */


function extendRings(extent, rings) {
  for (var i = 0, ii = rings.length; i < ii; ++i) {
    extendCoordinates(extent, rings[i]);
  }

  return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */


function extendXY(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
}
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */


function forEachCorner(extent, callback) {
  var val;
  val = callback(getBottomLeft(extent));

  if (val) {
    return val;
  }

  val = callback(getBottomRight(extent));

  if (val) {
    return val;
  }

  val = callback(getTopRight(extent));

  if (val) {
    return val;
  }

  val = callback(getTopLeft(extent));

  if (val) {
    return val;
  }

  return false;
}
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */


function getArea(extent) {
  var area = 0;

  if (!isEmpty(extent)) {
    area = getWidth(extent) * getHeight(extent);
  }

  return area;
}
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */


function getBottomLeft(extent) {
  return [extent[0], extent[1]];
}
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */


function getBottomRight(extent) {
  return [extent[2], extent[1]];
}
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */


function getCenter(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {import("./extent/Corner.js").default} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */


function getCorner(extent, corner) {
  var coordinate;

  if (corner === _Corner.default.BOTTOM_LEFT) {
    coordinate = getBottomLeft(extent);
  } else if (corner === _Corner.default.BOTTOM_RIGHT) {
    coordinate = getBottomRight(extent);
  } else if (corner === _Corner.default.TOP_LEFT) {
    coordinate = getTopLeft(extent);
  } else if (corner === _Corner.default.TOP_RIGHT) {
    coordinate = getTopRight(extent);
  } else {
    (0, _asserts.assert)(false, 13); // Invalid corner
  }

  return coordinate;
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */


function getEnlargedArea(extent1, extent2) {
  var minX = Math.min(extent1[0], extent2[0]);
  var minY = Math.min(extent1[1], extent2[1]);
  var maxX = Math.max(extent1[2], extent2[2]);
  var maxY = Math.max(extent1[3], extent2[3]);
  return (maxX - minX) * (maxY - minY);
}
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent=} opt_extent Destination extent.
 * @return {Extent} Extent.
 */


function getForViewAndSize(center, resolution, rotation, size, opt_extent) {
  var dx = resolution * size[0] / 2;
  var dy = resolution * size[1] / 2;
  var cosRotation = Math.cos(rotation);
  var sinRotation = Math.sin(rotation);
  var xCos = dx * cosRotation;
  var xSin = dx * sinRotation;
  var yCos = dy * cosRotation;
  var ySin = dy * sinRotation;
  var x = center[0];
  var y = center[1];
  var x0 = x - xCos + ySin;
  var x1 = x - xCos - ySin;
  var x2 = x + xCos - ySin;
  var x3 = x + xCos + ySin;
  var y0 = y - xSin - yCos;
  var y1 = y - xSin + yCos;
  var y2 = y + xSin + yCos;
  var y3 = y + xSin - yCos;
  return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
}
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */


function getHeight(extent) {
  return extent[3] - extent[1];
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */


function getIntersectionArea(extent1, extent2) {
  var intersection = getIntersection(extent1, extent2);
  return getArea(intersection);
}
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent=} opt_extent Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */


function getIntersection(extent1, extent2, opt_extent) {
  var intersection = opt_extent ? opt_extent : createEmpty();

  if (intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }

    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }

    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }

    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  } else {
    createOrUpdateEmpty(intersection);
  }

  return intersection;
}
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */


function getMargin(extent) {
  return getWidth(extent) + getHeight(extent);
}
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */


function getSize(extent) {
  return [extent[2] - extent[0], extent[3] - extent[1]];
}
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */


function getTopLeft(extent) {
  return [extent[0], extent[3]];
}
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */


function getTopRight(extent) {
  return [extent[2], extent[3]];
}
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */


function getWidth(extent) {
  return extent[2] - extent[0];
}
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */


function intersects(extent1, extent2) {
  return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
}
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */


function isEmpty(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
}
/**
 * @param {Extent} extent Extent.
 * @param {Extent=} opt_extent Extent.
 * @return {Extent} Extent.
 */


function returnOrUpdate(extent, opt_extent) {
  if (opt_extent) {
    opt_extent[0] = extent[0];
    opt_extent[1] = extent[1];
    opt_extent[2] = extent[2];
    opt_extent[3] = extent[3];
    return opt_extent;
  } else {
    return extent;
  }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */


function scaleFromCenter(extent, value) {
  var deltaX = (extent[2] - extent[0]) / 2 * (value - 1);
  var deltaY = (extent[3] - extent[1]) / 2 * (value - 1);
  extent[0] -= deltaX;
  extent[2] += deltaX;
  extent[1] -= deltaY;
  extent[3] += deltaY;
}
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */


function intersectsSegment(extent, start, end) {
  var intersects = false;
  var startRel = coordinateRelationship(extent, start);
  var endRel = coordinateRelationship(extent, end);

  if (startRel === _Relationship.default.INTERSECTING || endRel === _Relationship.default.INTERSECTING) {
    intersects = true;
  } else {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var startX = start[0];
    var startY = start[1];
    var endX = end[0];
    var endY = end[1];
    var slope = (endY - startY) / (endX - startX);
    var x = void 0,
        y = void 0;

    if (!!(endRel & _Relationship.default.ABOVE) && !(startRel & _Relationship.default.ABOVE)) {
      // potentially intersects top
      x = endX - (endY - maxY) / slope;
      intersects = x >= minX && x <= maxX;
    }

    if (!intersects && !!(endRel & _Relationship.default.RIGHT) && !(startRel & _Relationship.default.RIGHT)) {
      // potentially intersects right
      y = endY - (endX - maxX) * slope;
      intersects = y >= minY && y <= maxY;
    }

    if (!intersects && !!(endRel & _Relationship.default.BELOW) && !(startRel & _Relationship.default.BELOW)) {
      // potentially intersects bottom
      x = endX - (endY - minY) / slope;
      intersects = x >= minX && x <= maxX;
    }

    if (!intersects && !!(endRel & _Relationship.default.LEFT) && !(startRel & _Relationship.default.LEFT)) {
      // potentially intersects left
      y = endY - (endX - minX) * slope;
      intersects = y >= minY && y <= maxY;
    }
  }

  return intersects;
}
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent=} opt_extent Destination extent.
 * @param {number=} opt_stops Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {Extent} Extent.
 * @api
 */


function applyTransform(extent, transformFn, opt_extent, opt_stops) {
  var coordinates = [];

  if (opt_stops > 1) {
    var width = extent[2] - extent[0];
    var height = extent[3] - extent[1];

    for (var i = 0; i < opt_stops; ++i) {
      coordinates.push(extent[0] + width * i / opt_stops, extent[1], extent[2], extent[1] + height * i / opt_stops, extent[2] - width * i / opt_stops, extent[3], extent[0], extent[3] - height * i / opt_stops);
    }
  } else {
    coordinates = [extent[0], extent[1], extent[2], extent[1], extent[2], extent[3], extent[0], extent[3]];
  }

  transformFn(coordinates, coordinates, 2);
  var xs = [];
  var ys = [];

  for (var i = 0, l = coordinates.length; i < l; i += 2) {
    xs.push(coordinates[i]);
    ys.push(coordinates[i + 1]);
  }

  return _boundingExtentXYs(xs, ys, opt_extent);
}
/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Extent} The extent within the real world extent.
 */


function wrapX(extent, projection) {
  var projectionExtent = projection.getExtent();
  var center = getCenter(extent);

  if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
    var worldWidth = getWidth(projectionExtent);
    var worldsAway = Math.floor((center[0] - projectionExtent[0]) / worldWidth);
    var offset = worldsAway * worldWidth;
    extent[0] -= offset;
    extent[2] -= offset;
  }

  return extent;
}
},{"./extent/Corner.js":"ol/extent/Corner.js","./extent/Relationship.js":"ol/extent/Relationship.js","./asserts.js":"ol/asserts.js"}],"ol/proj/Projection.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Units = require("./Units.js");

/**
 * @module ol/proj/Projection
 */

/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").default|string} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link module:ol/proj/Units~METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `{number}` view resolution and an `{import("../coordinate.js").Coordinate}` as arguments, and returns
 * the `{number}` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj#getPointResolution} function will be used.
 */

/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj~get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4~register} function.
 *
 * @api
 */
var Projection =
/** @class */
function () {
  /**
   * @param {Options} options Projection options.
   */
  function Projection(options) {
    /**
     * @private
     * @type {string}
     */
    this.code_ = options.code;
    /**
     * Units of projected coordinates. When set to `TILE_PIXELS`, a
     * `this.extent_` and `this.worldExtent_` must be configured properly for each
     * tile.
     * @private
     * @type {import("./Units.js").default}
     */

    this.units_ =
    /** @type {import("./Units.js").default} */
    options.units;
    /**
     * Validity extent of the projection in projected coordinates. For projections
     * with `TILE_PIXELS` units, this is the extent of the tile in
     * tile pixel space.
     * @private
     * @type {import("../extent.js").Extent}
     */

    this.extent_ = options.extent !== undefined ? options.extent : null;
    /**
     * Extent of the world in EPSG:4326. For projections with
     * `TILE_PIXELS` units, this is the extent of the tile in
     * projected coordinate space.
     * @private
     * @type {import("../extent.js").Extent}
     */

    this.worldExtent_ = options.worldExtent !== undefined ? options.worldExtent : null;
    /**
     * @private
     * @type {string}
     */

    this.axisOrientation_ = options.axisOrientation !== undefined ? options.axisOrientation : 'enu';
    /**
     * @private
     * @type {boolean}
     */

    this.global_ = options.global !== undefined ? options.global : false;
    /**
     * @private
     * @type {boolean}
     */

    this.canWrapX_ = !!(this.global_ && this.extent_);
    /**
     * @private
     * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
     */

    this.getPointResolutionFunc_ = options.getPointResolution;
    /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */

    this.defaultTileGrid_ = null;
    /**
     * @private
     * @type {number|undefined}
     */

    this.metersPerUnit_ = options.metersPerUnit;
  }
  /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */


  Projection.prototype.canWrapX = function () {
    return this.canWrapX_;
  };
  /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */


  Projection.prototype.getCode = function () {
    return this.code_;
  };
  /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */


  Projection.prototype.getExtent = function () {
    return this.extent_;
  };
  /**
   * Get the units of this projection.
   * @return {import("./Units.js").default} Units.
   * @api
   */


  Projection.prototype.getUnits = function () {
    return this.units_;
  };
  /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */


  Projection.prototype.getMetersPerUnit = function () {
    return this.metersPerUnit_ || _Units.METERS_PER_UNIT[this.units_];
  };
  /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */


  Projection.prototype.getWorldExtent = function () {
    return this.worldExtent_;
  };
  /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */


  Projection.prototype.getAxisOrientation = function () {
    return this.axisOrientation_;
  };
  /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */


  Projection.prototype.isGlobal = function () {
    return this.global_;
  };
  /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */


  Projection.prototype.setGlobal = function (global) {
    this.global_ = global;
    this.canWrapX_ = !!(global && this.extent_);
  };
  /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */


  Projection.prototype.getDefaultTileGrid = function () {
    return this.defaultTileGrid_;
  };
  /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */


  Projection.prototype.setDefaultTileGrid = function (tileGrid) {
    this.defaultTileGrid_ = tileGrid;
  };
  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */


  Projection.prototype.setExtent = function (extent) {
    this.extent_ = extent;
    this.canWrapX_ = !!(this.global_ && extent);
  };
  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */


  Projection.prototype.setWorldExtent = function (worldExtent) {
    this.worldExtent_ = worldExtent;
  };
  /**
   * Set the getPointResolution function (see {@link module:ol/proj~getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */


  Projection.prototype.setGetPointResolution = function (func) {
    this.getPointResolutionFunc_ = func;
  };
  /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */


  Projection.prototype.getPointResolutionFunc = function () {
    return this.getPointResolutionFunc_;
  };

  return Projection;
}();

var _default = Projection;
exports.default = _default;
},{"./Units.js":"ol/proj/Units.js"}],"ol/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.squaredSegmentDistance = squaredSegmentDistance;
exports.squaredDistance = squaredDistance;
exports.solveLinearSystem = solveLinearSystem;
exports.toDegrees = toDegrees;
exports.toRadians = toRadians;
exports.modulo = modulo;
exports.lerp = lerp;
exports.log2 = exports.cosh = void 0;

/**
 * @module ol/math
 */

/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */


var cosh = function () {
  // Wrapped in a iife, to save the overhead of checking for the native
  // implementation on every invocation.
  var cosh;

  if ('cosh' in Math) {
    // The environment supports the native Math.cosh function, use it…
    cosh = Math.cosh;
  } else {
    // … else, use the reference implementation of MDN:
    cosh = function cosh(x) {
      var y =
      /** @type {Math} */
      Math.exp(x);
      return (y + 1 / y) / 2;
    };
  }

  return cosh;
}();
/**
 * Return the base 2 logarithm of a given number. The method will use the
 * native `Math.log2` function if it is available, otherwise the base 2
 * logarithm will be calculated via the reference implementation of the
 * Mozilla developer network.
 *
 * @param {number} x X.
 * @return {number} Base 2 logarithm of x.
 */


exports.cosh = cosh;

var log2 = function () {
  // Wrapped in a iife, to save the overhead of checking for the native
  // implementation on every invocation.
  var log2;

  if ('log2' in Math) {
    // The environment supports the native Math.log2 function, use it…
    log2 = Math.log2;
  } else {
    // … else, use the reference implementation of MDN:
    log2 = function log2(x) {
      return Math.log(x) * Math.LOG2E;
    };
  }

  return log2;
}();
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */


exports.log2 = log2;

function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  if (dx !== 0 || dy !== 0) {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);

    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }

  return squaredDistance(x, y, x1, y1);
}
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */


function squaredDistance(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return dx * dx + dy * dy;
}
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>} The resulting vector.
 */


function solveLinearSystem(mat) {
  var n = mat.length;

  for (var i = 0; i < n; i++) {
    // Find max in the i-th column (ignoring i - 1 first rows)
    var maxRow = i;
    var maxEl = Math.abs(mat[i][i]);

    for (var r = i + 1; r < n; r++) {
      var absValue = Math.abs(mat[r][i]);

      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }

    if (maxEl === 0) {
      return null; // matrix is singular
    } // Swap max row with i-th (current) row


    var tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp; // Subtract the i-th row to make all the remaining rows 0 in the i-th column

    for (var j = i + 1; j < n; j++) {
      var coef = -mat[j][i] / mat[i][i];

      for (var k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  } // Solve Ax=b for upper triangular matrix A (mat)


  var x = new Array(n);

  for (var l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];

    for (var m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }

  return x;
}
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */


function toDegrees(angleInRadians) {
  return angleInRadians * 180 / Math.PI;
}
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */


function toRadians(angleInDegrees) {
  return angleInDegrees * Math.PI / 180;
}
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */


function modulo(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r;
}
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */


function lerp(a, b, x) {
  return a + x * (b - a);
}
},{}],"ol/proj/epsg3857.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEPSG4326 = fromEPSG4326;
exports.toEPSG4326 = toEPSG4326;
exports.PROJECTIONS = exports.WORLD_EXTENT = exports.EXTENT = exports.HALF_SIZE = exports.RADIUS = void 0;

var _Projection = _interopRequireDefault(require("./Projection.js"));

var _Units = _interopRequireDefault(require("./Units.js"));

var _math = require("../math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/proj/epsg3857
 */


/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
var RADIUS = 6378137;
/**
 * @const
 * @type {number}
 */

exports.RADIUS = RADIUS;
var HALF_SIZE = Math.PI * RADIUS;
/**
 * @const
 * @type {import("../extent.js").Extent}
 */

exports.HALF_SIZE = HALF_SIZE;
var EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];
/**
 * @const
 * @type {import("../extent.js").Extent}
 */

exports.EXTENT = EXTENT;
var WORLD_EXTENT = [-180, -85, 180, 85];
/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */

exports.WORLD_EXTENT = WORLD_EXTENT;

var EPSG3857Projection =
/** @class */
function (_super) {
  __extends(EPSG3857Projection, _super);
  /**
   * @param {string} code Code.
   */


  function EPSG3857Projection(code) {
    return _super.call(this, {
      code: code,
      units: _Units.default.METERS,
      extent: EXTENT,
      global: true,
      worldExtent: WORLD_EXTENT,
      getPointResolution: function getPointResolution(resolution, point) {
        return resolution / (0, _math.cosh)(point[1] / RADIUS);
      }
    }) || this;
  }

  return EPSG3857Projection;
}(_Projection.default);
/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */


var PROJECTIONS = [new EPSG3857Projection('EPSG:3857'), new EPSG3857Projection('EPSG:102100'), new EPSG3857Projection('EPSG:102113'), new EPSG3857Projection('EPSG:900913'), new EPSG3857Projection('urn:ogc:def:crs:EPSG:6.18:3:3857'), new EPSG3857Projection('urn:ogc:def:crs:EPSG::3857'), new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857')];
/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */

exports.PROJECTIONS = PROJECTIONS;

function fromEPSG4326(input, opt_output, opt_dimension) {
  var length = input.length;
  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var output = opt_output;

  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }

  var halfSize = HALF_SIZE;

  for (var i = 0; i < length; i += dimension) {
    output[i] = halfSize * input[i] / 180;
    var y = RADIUS * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));

    if (y > halfSize) {
      y = halfSize;
    } else if (y < -halfSize) {
      y = -halfSize;
    }

    output[i + 1] = y;
  }

  return output;
}
/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */


function toEPSG4326(input, opt_output, opt_dimension) {
  var length = input.length;
  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var output = opt_output;

  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }

  for (var i = 0; i < length; i += dimension) {
    output[i] = 180 * input[i] / HALF_SIZE;
    output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
  }

  return output;
}
},{"./Projection.js":"ol/proj/Projection.js","./Units.js":"ol/proj/Units.js","../math.js":"ol/math.js"}],"ol/proj/epsg4326.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROJECTIONS = exports.METERS_PER_UNIT = exports.EXTENT = exports.RADIUS = void 0;

var _Projection = _interopRequireDefault(require("./Projection.js"));

var _Units = _interopRequireDefault(require("./Units.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/proj/epsg4326
 */


/**
 * Semi-major radius of the WGS84 ellipsoid.
 *
 * @const
 * @type {number}
 */
var RADIUS = 6378137;
/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {import("../extent.js").Extent}
 */

exports.RADIUS = RADIUS;
var EXTENT = [-180, -90, 180, 90];
/**
 * @const
 * @type {number}
 */

exports.EXTENT = EXTENT;
var METERS_PER_UNIT = Math.PI * RADIUS / 180;
/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */

exports.METERS_PER_UNIT = METERS_PER_UNIT;

var EPSG4326Projection =
/** @class */
function (_super) {
  __extends(EPSG4326Projection, _super);
  /**
   * @param {string} code Code.
   * @param {string=} opt_axisOrientation Axis orientation.
   */


  function EPSG4326Projection(code, opt_axisOrientation) {
    return _super.call(this, {
      code: code,
      units: _Units.default.DEGREES,
      extent: EXTENT,
      axisOrientation: opt_axisOrientation,
      global: true,
      metersPerUnit: METERS_PER_UNIT,
      worldExtent: EXTENT
    }) || this;
  }

  return EPSG4326Projection;
}(_Projection.default);
/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */


var PROJECTIONS = [new EPSG4326Projection('CRS:84'), new EPSG4326Projection('EPSG:4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:EPSG::4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:EPSG:6.6:4326', 'neu'), new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'), new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'), new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'), new EPSG4326Projection('urn:x-ogc:def:crs:EPSG:4326', 'neu')];
exports.PROJECTIONS = PROJECTIONS;
},{"./Projection.js":"ol/proj/Projection.js","./Units.js":"ol/proj/Units.js"}],"ol/proj/projections.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.get = get;
exports.add = add;

/**
 * @module ol/proj/projections
 */

/**
 * @type {Object<string, import("./Projection.js").default>}
 */
var cache = {};
/**
 * Clear the projections cache.
 */

function clear() {
  cache = {};
}
/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {import("./Projection.js").default} The projection (if cached).
 */


function get(code) {
  return cache[code] || null;
}
/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */


function add(code, projection) {
  cache[code] = projection;
}
},{}],"ol/proj/transforms.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.add = add;
exports.remove = remove;
exports.get = get;

var _obj = require("../obj.js");

/**
 * @module ol/proj/transforms
 */

/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */
var transforms = {};
/**
 * Clear the transform cache.
 */

function clear() {
  transforms = {};
}
/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */


function add(source, destination, transformFn) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();

  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }

  transforms[sourceCode][destinationCode] = transformFn;
}
/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {import("./Projection.js").default} source Source projection.
 * @param {import("./Projection.js").default} destination Destination projection.
 * @return {import("../proj.js").TransformFunction} transformFn The unregistered transform.
 */


function remove(source, destination) {
  var sourceCode = source.getCode();
  var destinationCode = destination.getCode();
  var transform = transforms[sourceCode][destinationCode];
  delete transforms[sourceCode][destinationCode];

  if ((0, _obj.isEmpty)(transforms[sourceCode])) {
    delete transforms[sourceCode];
  }

  return transform;
}
/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
 */


function get(sourceCode, destinationCode) {
  var transform;

  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform = transforms[sourceCode][destinationCode];
  }

  return transform;
}
},{"../obj.js":"ol/obj.js"}],"ol/sphere.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistance = getDistance;
exports.getLength = getLength;
exports.getArea = getArea;
exports.offset = offset;
exports.DEFAULT_RADIUS = void 0;

var _GeometryType = _interopRequireDefault(require("./geom/GeometryType.js"));

var _math = require("./math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/sphere
 */

/**
 * Object literal with options for the {@link getLength} or {@link getArea}
 * functions.
 * @typedef {Object} SphereMetricOptions
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857']
 * Projection of the  geometry.  By default, the geometry is assumed to be in
 * Web Mercator.
 * @property {number} [radius=6371008.8] Sphere radius.  By default, the
 * [mean Earth radius](https://en.wikipedia.org/wiki/Earth_radius#Mean_radius)
 * for the WGS84 ellipsoid is used.
 */

/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
var DEFAULT_RADIUS = 6371008.8;
/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number=} opt_radius The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */

exports.DEFAULT_RADIUS = DEFAULT_RADIUS;

function getDistance(c1, c2, opt_radius) {
  var radius = opt_radius || DEFAULT_RADIUS;
  var lat1 = (0, _math.toRadians)(c1[1]);
  var lat2 = (0, _math.toRadians)(c2[1]);
  var deltaLatBy2 = (lat2 - lat1) / 2;
  var deltaLonBy2 = (0, _math.toRadians)(c2[0] - c1[0]) / 2;
  var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */


function getLengthInternal(coordinates, radius) {
  var length = 0;

  for (var i = 0, ii = coordinates.length; i < ii - 1; ++i) {
    length += getDistance(coordinates[i], coordinates[i + 1], radius);
  }

  return length;
}
/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions=} opt_options Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */


function getLength(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  var type = geometry.getType();

  if (type !== _GeometryType.default.GEOMETRY_COLLECTION) {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }

  var length = 0;
  var coordinates, coords, i, ii, j, jj;

  switch (type) {
    case _GeometryType.default.POINT:
    case _GeometryType.default.MULTI_POINT:
      {
        break;
      }

    case _GeometryType.default.LINE_STRING:
    case _GeometryType.default.LINEAR_RING:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();
        length = getLengthInternal(coordinates, radius);
        break;
      }

    case _GeometryType.default.MULTI_LINE_STRING:
    case _GeometryType.default.POLYGON:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();

        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          length += getLengthInternal(coordinates[i], radius);
        }

        break;
      }

    case _GeometryType.default.MULTI_POLYGON:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();

        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          coords = coordinates[i];

          for (j = 0, jj = coords.length; j < jj; ++j) {
            length += getLengthInternal(coords[j], radius);
          }
        }

        break;
      }

    case _GeometryType.default.GEOMETRY_COLLECTION:
      {
        var geometries =
        /** @type {import("./geom/GeometryCollection.js").default} */
        geometry.getGeometries();

        for (i = 0, ii = geometries.length; i < ii; ++i) {
          length += getLength(geometries[i], opt_options);
        }

        break;
      }

    default:
      {
        throw new Error('Unsupported geometry type: ' + type);
      }
  }

  return length;
}
/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs-new.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */


function getAreaInternal(coordinates, radius) {
  var area = 0;
  var len = coordinates.length;
  var x1 = coordinates[len - 1][0];
  var y1 = coordinates[len - 1][1];

  for (var i = 0; i < len; i++) {
    var x2 = coordinates[i][0];
    var y2 = coordinates[i][1];
    area += (0, _math.toRadians)(x2 - x1) * (2 + Math.sin((0, _math.toRadians)(y1)) + Math.sin((0, _math.toRadians)(y2)));
    x1 = x2;
    y1 = y2;
  }

  return area * radius * radius / 2.0;
}
/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions=} opt_options Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */


function getArea(geometry, opt_options) {
  var options = opt_options || {};
  var radius = options.radius || DEFAULT_RADIUS;
  var projection = options.projection || 'EPSG:3857';
  var type = geometry.getType();

  if (type !== _GeometryType.default.GEOMETRY_COLLECTION) {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }

  var area = 0;
  var coordinates, coords, i, ii, j, jj;

  switch (type) {
    case _GeometryType.default.POINT:
    case _GeometryType.default.MULTI_POINT:
    case _GeometryType.default.LINE_STRING:
    case _GeometryType.default.MULTI_LINE_STRING:
    case _GeometryType.default.LINEAR_RING:
      {
        break;
      }

    case _GeometryType.default.POLYGON:
      {
        coordinates =
        /** @type {import("./geom/Polygon.js").default} */
        geometry.getCoordinates();
        area = Math.abs(getAreaInternal(coordinates[0], radius));

        for (i = 1, ii = coordinates.length; i < ii; ++i) {
          area -= Math.abs(getAreaInternal(coordinates[i], radius));
        }

        break;
      }

    case _GeometryType.default.MULTI_POLYGON:
      {
        coordinates =
        /** @type {import("./geom/SimpleGeometry.js").default} */
        geometry.getCoordinates();

        for (i = 0, ii = coordinates.length; i < ii; ++i) {
          coords = coordinates[i];
          area += Math.abs(getAreaInternal(coords[0], radius));

          for (j = 1, jj = coords.length; j < jj; ++j) {
            area -= Math.abs(getAreaInternal(coords[j], radius));
          }
        }

        break;
      }

    case _GeometryType.default.GEOMETRY_COLLECTION:
      {
        var geometries =
        /** @type {import("./geom/GeometryCollection.js").default} */
        geometry.getGeometries();

        for (i = 0, ii = geometries.length; i < ii; ++i) {
          area += getArea(geometries[i], opt_options);
        }

        break;
      }

    default:
      {
        throw new Error('Unsupported geometry type: ' + type);
      }
  }

  return area;
}
/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {import("./coordinate.js").Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number=} opt_radius The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {import("./coordinate.js").Coordinate} The target point.
 */


function offset(c1, distance, bearing, opt_radius) {
  var radius = opt_radius || DEFAULT_RADIUS;
  var lat1 = (0, _math.toRadians)(c1[1]);
  var lon1 = (0, _math.toRadians)(c1[0]);
  var dByR = distance / radius;
  var lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
  var lon = lon1 + Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
  return [(0, _math.toDegrees)(lon), (0, _math.toDegrees)(lat)];
}
},{"./geom/GeometryType.js":"ol/geom/GeometryType.js","./math.js":"ol/math.js"}],"ol/string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padNumber = padNumber;
exports.compareVersions = compareVersions;

/**
 * @module ol/string
 */

/**
 * @param {number} number Number to be formatted
 * @param {number} width The desired width
 * @param {number=} opt_precision Precision of the output string (i.e. number of decimal places)
 * @returns {string} Formatted string
 */
function padNumber(number, width, opt_precision) {
  var numberString = opt_precision !== undefined ? number.toFixed(opt_precision) : '' + number;
  var decimal = numberString.indexOf('.');
  decimal = decimal === -1 ? numberString.length : decimal;
  return decimal > width ? numberString : new Array(1 + width - decimal).join('0') + numberString;
}
/**
 * Adapted from https://github.com/omichelsen/compare-versions/blob/master/index.js
 * @param {string|number} v1 First version
 * @param {string|number} v2 Second version
 * @returns {number} Value
 */


function compareVersions(v1, v2) {
  var s1 = ('' + v1).split('.');
  var s2 = ('' + v2).split('.');

  for (var i = 0; i < Math.max(s1.length, s2.length); i++) {
    var n1 = parseInt(s1[i] || '0', 10);
    var n2 = parseInt(s2[i] || '0', 10);

    if (n1 > n2) {
      return 1;
    }

    if (n2 > n1) {
      return -1;
    }
  }

  return 0;
}
},{}],"ol/coordinate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.closestOnCircle = closestOnCircle;
exports.closestOnSegment = closestOnSegment;
exports.createStringXY = createStringXY;
exports.degreesToStringHDMS = degreesToStringHDMS;
exports.format = format;
exports.equals = equals;
exports.rotate = rotate;
exports.scale = scale;
exports.squaredDistance = squaredDistance;
exports.distance = distance;
exports.squaredDistanceToSegment = squaredDistanceToSegment;
exports.toStringHDMS = toStringHDMS;
exports.toStringXY = toStringXY;
exports.wrapX = wrapX;
exports.getWorldsAway = getWorldsAway;

var _extent = require("./extent.js");

var _math = require("./math.js");

var _string = require("./string.js");

/**
 * @module ol/coordinate
 */

/**
 * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
 * @typedef {Array<number>} Coordinate
 * @api
 */

/**
 * A function that takes a {@link module:ol/coordinate~Coordinate} and
 * transforms it into a `{string}`.
 *
 * @typedef {function((Coordinate|undefined)): string} CoordinateFormat
 * @api
 */

/**
 * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {add} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     add(coord, [-2, 4]);
 *     // coord is now [5.85, 51.983333]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {Coordinate} delta Delta.
 * @return {Coordinate} The input coordinate adjusted by
 * the given delta.
 * @api
 */
function add(coordinate, delta) {
  coordinate[0] += +delta[0];
  coordinate[1] += +delta[1];
  return coordinate;
}
/**
 * Calculates the point closest to the passed coordinate on the passed circle.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {import("./geom/Circle.js").default} circle The circle.
 * @return {Coordinate} Closest point on the circumference.
 */


function closestOnCircle(coordinate, circle) {
  var r = circle.getRadius();
  var center = circle.getCenter();
  var x0 = center[0];
  var y0 = center[1];
  var x1 = coordinate[0];
  var y1 = coordinate[1];
  var dx = x1 - x0;
  var dy = y1 - y0;

  if (dx === 0 && dy === 0) {
    dx = 1;
  }

  var d = Math.sqrt(dx * dx + dy * dy);
  var x = x0 + r * dx / d;
  var y = y0 + r * dy / d;
  return [x, y];
}
/**
 * Calculates the point closest to the passed coordinate on the passed segment.
 * This is the foot of the perpendicular of the coordinate to the segment when
 * the foot is on the segment, or the closest segment coordinate when the foot
 * is outside the segment.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {Array<Coordinate>} segment The two coordinates
 * of the segment.
 * @return {Coordinate} The foot of the perpendicular of
 * the coordinate to the segment.
 */


function closestOnSegment(coordinate, segment) {
  var x0 = coordinate[0];
  var y0 = coordinate[1];
  var start = segment[0];
  var end = segment[1];
  var x1 = start[0];
  var y1 = start[1];
  var x2 = end[0];
  var y2 = end[1];
  var dx = x2 - x1;
  var dy = y2 - y1;
  var along = dx === 0 && dy === 0 ? 0 : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
  var x, y;

  if (along <= 0) {
    x = x1;
    y = y1;
  } else if (along >= 1) {
    x = x2;
    y = y2;
  } else {
    x = x1 + along * dx;
    y = y1 + along * dy;
  }

  return [x, y];
}
/**
 * Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be
 * used to format
 * a {Coordinate} to a string.
 *
 * Example without specifying the fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var stringifyFunc = createStringXY();
 *     var out = stringifyFunc(coord);
 *     // out is now '8, 48'
 *
 * Example with explicitly specifying 2 fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var stringifyFunc = createStringXY(2);
 *     var out = stringifyFunc(coord);
 *     // out is now '7.85, 47.98'
 *
 * @param {number=} opt_fractionDigits The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {CoordinateFormat} Coordinate format.
 * @api
 */


function createStringXY(opt_fractionDigits) {
  return (
    /**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */
    function (coordinate) {
      return toStringXY(coordinate, opt_fractionDigits);
    }
  );
}
/**
 * @param {string} hemispheres Hemispheres.
 * @param {number} degrees Degrees.
 * @param {number=} opt_fractionDigits The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} String.
 */


function degreesToStringHDMS(hemispheres, degrees, opt_fractionDigits) {
  var normalizedDegrees = (0, _math.modulo)(degrees + 180, 360) - 180;
  var x = Math.abs(3600 * normalizedDegrees);
  var dflPrecision = opt_fractionDigits || 0;
  var precision = Math.pow(10, dflPrecision);
  var deg = Math.floor(x / 3600);
  var min = Math.floor((x - deg * 3600) / 60);
  var sec = x - deg * 3600 - min * 60;
  sec = Math.ceil(sec * precision) / precision;

  if (sec >= 60) {
    sec = 0;
    min += 1;
  }

  if (min >= 60) {
    min = 0;
    deg += 1;
  }

  return deg + "\xB0 " + (0, _string.padNumber)(min, 2) + "\u2032 " + (0, _string.padNumber)(sec, 2, dflPrecision) + "\u2033" + (normalizedDegrees == 0 ? '' : ' ' + hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0));
}
/**
 * Transforms the given {@link module:ol/coordinate~Coordinate} to a string
 * using the given string template. The strings `{x}` and `{y}` in the template
 * will be replaced with the first and second coordinate values respectively.
 *
 * Example without specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var template = 'Coordinate is ({x}|{y}).';
 *     var out = format(coord, template);
 *     // out is now 'Coordinate is (8|48).'
 *
 * Example explicitly specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var template = 'Coordinate is ({x}|{y}).';
 *     var out = format(coord, template, 2);
 *     // out is now 'Coordinate is (7.85|47.98).'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {string} template A template string with `{x}` and `{y}` placeholders
 *     that will be replaced by first and second coordinate values.
 * @param {number=} opt_fractionDigits The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Formatted coordinate.
 * @api
 */


function format(coordinate, template, opt_fractionDigits) {
  if (coordinate) {
    return template.replace('{x}', coordinate[0].toFixed(opt_fractionDigits)).replace('{y}', coordinate[1].toFixed(opt_fractionDigits));
  } else {
    return '';
  }
}
/**
 * @param {Coordinate} coordinate1 First coordinate.
 * @param {Coordinate} coordinate2 Second coordinate.
 * @return {boolean} The two coordinates are equal.
 */


function equals(coordinate1, coordinate2) {
  var equals = true;

  for (var i = coordinate1.length - 1; i >= 0; --i) {
    if (coordinate1[i] != coordinate2[i]) {
      equals = false;
      break;
    }
  }

  return equals;
}
/**
 * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
 * returned by the function.
 *
 * Example:
 *
 *     import {rotate} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var rotateRadians = Math.PI / 2; // 90 degrees
 *     rotate(coord, rotateRadians);
 *     // coord is now [-47.983333, 7.85]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} angle Angle in radian.
 * @return {Coordinate} Coordinate.
 * @api
 */


function rotate(coordinate, angle) {
  var cosAngle = Math.cos(angle);
  var sinAngle = Math.sin(angle);
  var x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
  var y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
  coordinate[0] = x;
  coordinate[1] = y;
  return coordinate;
}
/**
 * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {scale as scaleCoordinate} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var scale = 1.2;
 *     scaleCoordinate(coord, scale);
 *     // coord is now [9.42, 57.5799996]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} scale Scale factor.
 * @return {Coordinate} Coordinate.
 */


function scale(coordinate, scale) {
  coordinate[0] *= scale;
  coordinate[1] *= scale;
  return coordinate;
}
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Squared distance between coord1 and coord2.
 */


function squaredDistance(coord1, coord2) {
  var dx = coord1[0] - coord2[0];
  var dy = coord1[1] - coord2[1];
  return dx * dx + dy * dy;
}
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Distance between coord1 and coord2.
 */


function distance(coord1, coord2) {
  return Math.sqrt(squaredDistance(coord1, coord2));
}
/**
 * Calculate the squared distance from a coordinate to a line segment.
 *
 * @param {Coordinate} coordinate Coordinate of the point.
 * @param {Array<Coordinate>} segment Line segment (2
 * coordinates).
 * @return {number} Squared distance from the point to the line segment.
 */


function squaredDistanceToSegment(coordinate, segment) {
  return squaredDistance(coordinate, closestOnSegment(coordinate, segment));
}
/**
 * Format a geographic coordinate with the hemisphere, degrees, minutes, and
 * seconds.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringHDMS} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringHDMS(coord);
 *     // out is now '47° 58′ 60″ N 7° 50′ 60″ E'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringHDMS} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringHDMS(coord, 1);
 *     // out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number=} opt_fractionDigits The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Hemisphere, degrees, minutes and seconds.
 * @api
 */


function toStringHDMS(coordinate, opt_fractionDigits) {
  if (coordinate) {
    return degreesToStringHDMS('NS', coordinate[1], opt_fractionDigits) + ' ' + degreesToStringHDMS('EW', coordinate[0], opt_fractionDigits);
  } else {
    return '';
  }
}
/**
 * Format a coordinate as a comma delimited string.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringXY(coord);
 *     // out is now '8, 48'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringXY(coord, 1);
 *     // out is now '7.8, 48.0'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number=} opt_fractionDigits The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} XY.
 * @api
 */


function toStringXY(coordinate, opt_fractionDigits) {
  return format(coordinate, '{x}, {y}', opt_fractionDigits);
}
/**
 * Modifies the provided coordinate in-place to be within the real world
 * extent. The lower projection extent boundary is inclusive, the upper one
 * exclusive.
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {Coordinate} The coordinate within the real world extent.
 */


function wrapX(coordinate, projection) {
  var worldWidth = (0, _extent.getWidth)(projection.getExtent());
  var worldsAway = getWorldsAway(coordinate, projection, worldWidth);

  if (worldsAway) {
    coordinate[0] -= worldsAway * worldWidth;
  }

  return coordinate;
}
/**
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @param {number=} opt_sourceExtentWidth Width of the source extent.
 * @return {number} Offset in world widths.
 */


function getWorldsAway(coordinate, projection, opt_sourceExtentWidth) {
  var projectionExtent = projection.getExtent();
  var worldsAway = 0;

  if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
    var sourceExtentWidth = opt_sourceExtentWidth || (0, _extent.getWidth)(projectionExtent);
    worldsAway = Math.floor((coordinate[0] - projectionExtent[0]) / sourceExtentWidth);
  }

  return worldsAway;
}
},{"./extent.js":"ol/extent.js","./math.js":"ol/math.js","./string.js":"ol/string.js"}],"ol/proj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneTransform = cloneTransform;
exports.identityTransform = identityTransform;
exports.addProjection = addProjection;
exports.addProjections = addProjections;
exports.get = get;
exports.getPointResolution = getPointResolution;
exports.addEquivalentProjections = addEquivalentProjections;
exports.addEquivalentTransforms = addEquivalentTransforms;
exports.clearAllProjections = clearAllProjections;
exports.createProjection = createProjection;
exports.createTransformFromCoordinateTransform = createTransformFromCoordinateTransform;
exports.addCoordinateTransforms = addCoordinateTransforms;
exports.fromLonLat = fromLonLat;
exports.toLonLat = toLonLat;
exports.equivalent = equivalent;
exports.getTransformFromProjections = getTransformFromProjections;
exports.getTransform = getTransform;
exports.transform = transform;
exports.transformExtent = transformExtent;
exports.transformWithProjections = transformWithProjections;
exports.setUserProjection = setUserProjection;
exports.clearUserProjection = clearUserProjection;
exports.getUserProjection = getUserProjection;
exports.useGeographic = useGeographic;
exports.toUserCoordinate = toUserCoordinate;
exports.fromUserCoordinate = fromUserCoordinate;
exports.toUserExtent = toUserExtent;
exports.fromUserExtent = fromUserExtent;
exports.createSafeCoordinateTransform = createSafeCoordinateTransform;
exports.addCommon = addCommon;
Object.defineProperty(exports, "Projection", {
  enumerable: true,
  get: function () {
    return _Projection.default;
  }
});
Object.defineProperty(exports, "METERS_PER_UNIT", {
  enumerable: true,
  get: function () {
    return _Units.METERS_PER_UNIT;
  }
});

var _Projection = _interopRequireDefault(require("./proj/Projection.js"));

var _Units = _interopRequireWildcard(require("./proj/Units.js"));

var _epsg = require("./proj/epsg3857.js");

var _epsg2 = require("./proj/epsg4326.js");

var _projections = require("./proj/projections.js");

var _transforms = require("./proj/transforms.js");

var _extent = require("./extent.js");

var _math = require("./math.js");

var _sphere = require("./sphere.js");

var _coordinate = require("./coordinate.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/proj
 */

/**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the http://proj4js.org/
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * https://epsg.io/, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj~addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection} object for the new projection and add it with
 * {@link module:ol/proj~addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj~addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection} with
 * {@link module:ol/proj~addProjection}. See examples/wms-no-proj for an example of
 * this.
 */

/**
 * A projection as {@link module:ol/proj/Projection}, SRS identifier
 * string or undefined.
 * @typedef {Projection|string|undefined} ProjectionLike
 * @api
 */

/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array<number>, Array<number>=, number=): Array<number>} TransformFunction
 * @api
 */

/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
function cloneTransform(input, opt_output, opt_dimension) {
  var output;

  if (opt_output !== undefined) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }

    output = opt_output;
  } else {
    output = input.slice();
  }

  return output;
}
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>=} opt_output Output array of coordinate values.
 * @param {number=} opt_dimension Dimension.
 * @return {Array<number>} Input coordinate array (same array as input).
 */


function identityTransform(input, opt_output, opt_dimension) {
  if (opt_output !== undefined && input !== opt_output) {
    for (var i = 0, ii = input.length; i < ii; ++i) {
      opt_output[i] = input[i];
    }

    input = opt_output;
  }

  return input;
}
/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */


function addProjection(projection) {
  (0, _projections.add)(projection.getCode(), projection);
  (0, _transforms.add)(projection, projection, cloneTransform);
}
/**
 * @param {Array<Projection>} projections Projections.
 */


function addProjections(projections) {
  projections.forEach(addProjection);
}
/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {Projection} Projection object, or null if not in list.
 * @api
 */


function get(projectionLike) {
  return typeof projectionLike === 'string' ? (0, _projections.get)(
  /** @type {string} */
  projectionLike) :
  /** @type {Projection} */
  projectionLike || null;
}
/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the 'point' pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {import("./coordinate.js").Coordinate} point Point to find adjusted resolution at.
 * @param {import("./proj/Units.js").default=} opt_units Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */


function getPointResolution(projection, resolution, point, opt_units) {
  projection = get(projection);
  var pointResolution;
  var getter = projection.getPointResolutionFunc();

  if (getter) {
    pointResolution = getter(resolution, point);

    if (opt_units && opt_units !== projection.getUnits()) {
      var metersPerUnit = projection.getMetersPerUnit();

      if (metersPerUnit) {
        pointResolution = pointResolution * metersPerUnit / _Units.METERS_PER_UNIT[opt_units];
      }
    }
  } else {
    var units = projection.getUnits();

    if (units == _Units.default.DEGREES && !opt_units || opt_units == _Units.default.DEGREES) {
      pointResolution = resolution;
    } else {
      // Estimate point resolution by transforming the center pixel to EPSG:4326,
      // measuring its width and height on the normal sphere, and taking the
      // average of the width and height.
      var toEPSG4326_1 = getTransformFromProjections(projection, get('EPSG:4326'));
      var vertices = [point[0] - resolution / 2, point[1], point[0] + resolution / 2, point[1], point[0], point[1] - resolution / 2, point[0], point[1] + resolution / 2];
      vertices = toEPSG4326_1(vertices, vertices, 2);
      var width = (0, _sphere.getDistance)(vertices.slice(0, 2), vertices.slice(2, 4));
      var height = (0, _sphere.getDistance)(vertices.slice(4, 6), vertices.slice(6, 8));
      pointResolution = (width + height) / 2;
      var metersPerUnit = opt_units ? _Units.METERS_PER_UNIT[opt_units] : projection.getMetersPerUnit();

      if (metersPerUnit !== undefined) {
        pointResolution /= metersPerUnit;
      }
    }
  }

  return pointResolution;
}
/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */


function addEquivalentProjections(projections) {
  addProjections(projections);
  projections.forEach(function (source) {
    projections.forEach(function (destination) {
      if (source !== destination) {
        (0, _transforms.add)(source, destination, cloneTransform);
      }
    });
  });
}
/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */


function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
  projections1.forEach(function (projection1) {
    projections2.forEach(function (projection2) {
      (0, _transforms.add)(projection1, projection2, forwardTransform);
      (0, _transforms.add)(projection2, projection1, inverseTransform);
    });
  });
}
/**
 * Clear all cached projections and transforms.
 */


function clearAllProjections() {
  (0, _projections.clear)();
  (0, _transforms.clear)();
}
/**
 * @param {Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {Projection} Projection.
 */


function createProjection(projection, defaultCode) {
  if (!projection) {
    return get(defaultCode);
  } else if (typeof projection === 'string') {
    return get(projection);
  } else {
    return (
      /** @type {Projection} */
      projection
    );
  }
}
/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} coordTransform Coordinate
 *     transform.
 * @return {TransformFunction} Transform function.
 */


function createTransformFromCoordinateTransform(coordTransform) {
  return (
    /**
     * @param {Array<number>} input Input.
     * @param {Array<number>=} opt_output Output.
     * @param {number=} opt_dimension Dimension.
     * @return {Array<number>} Output.
     */
    function (input, opt_output, opt_dimension) {
      var length = input.length;
      var dimension = opt_dimension !== undefined ? opt_dimension : 2;
      var output = opt_output !== undefined ? opt_output : new Array(length);

      for (var i = 0; i < length; i += dimension) {
        var point = coordTransform([input[i], input[i + 1]]);
        output[i] = point[0];
        output[i + 1] = point[1];

        for (var j = dimension - 1; j >= 2; --j) {
          output[i + j] = input[i + j];
        }
      }

      return output;
    }
  );
}
/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ProjectionLike} source Source projection.
 * @param {ProjectionLike} destination Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @api
 */


function addCoordinateTransforms(source, destination, forward, inverse) {
  var sourceProj = get(source);
  var destProj = get(destination);
  (0, _transforms.add)(sourceProj, destProj, createTransformFromCoordinateTransform(forward));
  (0, _transforms.add)(destProj, sourceProj, createTransformFromCoordinateTransform(inverse));
}
/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ProjectionLike=} opt_projection Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate projected to the target projection.
 * @api
 */


function fromLonLat(coordinate, opt_projection) {
  return transform(coordinate, 'EPSG:4326', opt_projection !== undefined ? opt_projection : 'EPSG:3857');
}
/**
 * Transforms a coordinate to longitude/latitude.
 * @param {import("./coordinate.js").Coordinate} coordinate Projected coordinate.
 * @param {ProjectionLike=} opt_projection Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */


function toLonLat(coordinate, opt_projection) {
  var lonLat = transform(coordinate, opt_projection !== undefined ? opt_projection : 'EPSG:3857', 'EPSG:4326');
  var lon = lonLat[0];

  if (lon < -180 || lon > 180) {
    lonLat[0] = (0, _math.modulo)(lon + 180, 360) - 180;
  }

  return lonLat;
}
/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {Projection} projection1 Projection 1.
 * @param {Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */


function equivalent(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }

  var equalUnits = projection1.getUnits() === projection2.getUnits();

  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  } else {
    var transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
  }
}
/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {Projection} sourceProjection Source Projection object.
 * @param {Projection} destinationProjection Destination Projection
 *     object.
 * @return {TransformFunction} Transform function.
 */


function getTransformFromProjections(sourceProjection, destinationProjection) {
  var sourceCode = sourceProjection.getCode();
  var destinationCode = destinationProjection.getCode();
  var transformFunc = (0, _transforms.get)(sourceCode, destinationCode);

  if (!transformFunc) {
    transformFunc = identityTransform;
  }

  return transformFunc;
}
/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ProjectionLike} source Source.
 * @param {ProjectionLike} destination Destination.
 * @return {TransformFunction} Transform function.
 * @api
 */


function getTransform(source, destination) {
  var sourceProjection = get(source);
  var destinationProjection = get(destination);
  return getTransformFromProjections(sourceProjection, destinationProjection);
}
/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj~transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./coordinate.js").Coordinate} Coordinate.
 * @api
 */


function transform(coordinate, source, destination) {
  var transformFunc = getTransform(source, destination);
  return transformFunc(coordinate, undefined, coordinate.length);
}
/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {import("./extent.js").Extent} extent The extent to transform.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @param {number=} opt_stops Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {import("./extent.js").Extent} The transformed extent.
 * @api
 */


function transformExtent(extent, source, destination, opt_stops) {
  var transformFunc = getTransform(source, destination);
  return (0, _extent.applyTransform)(extent, transformFunc, undefined, opt_stops);
}
/**
 * Transforms the given point to the destination projection.
 *
 * @param {import("./coordinate.js").Coordinate} point Point.
 * @param {Projection} sourceProjection Source projection.
 * @param {Projection} destinationProjection Destination projection.
 * @return {import("./coordinate.js").Coordinate} Point.
 */


function transformWithProjections(point, sourceProjection, destinationProjection) {
  var transformFunc = getTransformFromProjections(sourceProjection, destinationProjection);
  return transformFunc(point);
}
/**
 * @type {?Projection}
 */


var userProjection = null;
/**
 * Set the projection for coordinates supplied from and returned by API methods.
 * Note that this method is not yet a part of the stable API.  Support for user
 * projections is not yet complete and should be considered experimental.
 * @param {ProjectionLike} projection The user projection.
 */

function setUserProjection(projection) {
  userProjection = get(projection);
}
/**
 * Clear the user projection if set.  Note that this method is not yet a part of
 * the stable API.  Support for user projections is not yet complete and should
 * be considered experimental.
 */


function clearUserProjection() {
  userProjection = null;
}
/**
 * Get the projection for coordinates supplied from and returned by API methods.
 * Note that this method is not yet a part of the stable API.  Support for user
 * projections is not yet complete and should be considered experimental.
 * @returns {?Projection} The user projection (or null if not set).
 */


function getUserProjection() {
  return userProjection;
}
/**
 * Use geographic coordinates (WGS-84 datum) in API methods.  Note that this
 * method is not yet a part of the stable API.  Support for user projections is
 * not yet complete and should be considered experimental.
 */


function useGeographic() {
  setUserProjection('EPSG:4326');
}
/**
 * Return a coordinate transformed into the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} sourceProjection The input coordinate projection.
 * @returns {Array<number>} The input coordinate in the user projection.
 */


function toUserCoordinate(coordinate, sourceProjection) {
  if (!userProjection) {
    return coordinate;
  }

  return transform(coordinate, sourceProjection, userProjection);
}
/**
 * Return a coordinate transformed from the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} destProjection The destination projection.
 * @returns {Array<number>} The input coordinate transformed.
 */


function fromUserCoordinate(coordinate, destProjection) {
  if (!userProjection) {
    return coordinate;
  }

  return transform(coordinate, userProjection, destProjection);
}
/**
 * Return an extent transformed into the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} sourceProjection The input extent projection.
 * @returns {import("./extent.js").Extent} The input extent in the user projection.
 */


function toUserExtent(extent, sourceProjection) {
  if (!userProjection) {
    return extent;
  }

  return transformExtent(extent, sourceProjection, userProjection);
}
/**
 * Return an extent transformed from the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} destProjection The destination projection.
 * @returns {import("./extent.js").Extent} The input extent transformed.
 */


function fromUserExtent(extent, destProjection) {
  if (!userProjection) {
    return extent;
  }

  return transformExtent(extent, userProjection, destProjection);
}
/**
 * Creates a safe coordinate transform function from a coordinate transform function.
 * "Safe" means that it can handle wrapping of x-coordinates for global projections,
 * and that coordinates exceeding the source projection validity extent's range will be
 * clamped to the validity range.
 * @param {Projection} sourceProj Source projection.
 * @param {Projection} destProj Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} transform Transform function (source to destiation).
 * @return {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} Safe transform function (source to destiation).
 */


function createSafeCoordinateTransform(sourceProj, destProj, transform) {
  return function (coord) {
    var sourceX = coord[0];
    var sourceY = coord[1];
    var transformed, worldsAway;

    if (sourceProj.canWrapX()) {
      var sourceExtent = sourceProj.getExtent();
      var sourceExtentWidth = (0, _extent.getWidth)(sourceExtent);
      worldsAway = (0, _coordinate.getWorldsAway)(coord, sourceProj, sourceExtentWidth);

      if (worldsAway) {
        // Move x to the real world
        sourceX = sourceX - worldsAway * sourceExtentWidth;
      }

      sourceX = (0, _math.clamp)(sourceX, sourceExtent[0], sourceExtent[2]);
      sourceY = (0, _math.clamp)(sourceY, sourceExtent[1], sourceExtent[3]);
      transformed = transform([sourceX, sourceY]);
    } else {
      transformed = transform(coord);
    }

    if (worldsAway && destProj.canWrapX()) {
      // Move transformed coordinate back to the offset world
      transformed[0] += worldsAway * (0, _extent.getWidth)(destProj.getExtent());
    }

    return transformed;
  };
}
/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */


function addCommon() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  addEquivalentProjections(_epsg.PROJECTIONS);
  addEquivalentProjections(_epsg2.PROJECTIONS); // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.

  addEquivalentTransforms(_epsg2.PROJECTIONS, _epsg.PROJECTIONS, _epsg.fromEPSG4326, _epsg.toEPSG4326);
}

addCommon();
},{"./proj/Projection.js":"ol/proj/Projection.js","./proj/Units.js":"ol/proj/Units.js","./proj/epsg3857.js":"ol/proj/epsg3857.js","./proj/epsg4326.js":"ol/proj/epsg4326.js","./proj/projections.js":"ol/proj/projections.js","./proj/transforms.js":"ol/proj/transforms.js","./extent.js":"ol/extent.js","./math.js":"ol/math.js","./sphere.js":"ol/sphere.js","./coordinate.js":"ol/coordinate.js"}],"ol/geom/flat/transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform2D = transform2D;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;

/**
 * @module ol/geom/flat/transform
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../transform.js").Transform} transform Transform.
 * @param {Array<number>=} opt_dest Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function transform2D(flatCoordinates, offset, end, stride, transform, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var i = 0;

  for (var j = offset; j < end; j += stride) {
    var x = flatCoordinates[j];
    var y = flatCoordinates[j + 1];
    dest[i++] = transform[0] * x + transform[2] * y + transform[4];
    dest[i++] = transform[1] * x + transform[3] * y + transform[5];
  }

  if (opt_dest && dest.length != i) {
    dest.length = i;
  }

  return dest;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} angle Angle.
 * @param {Array<number>} anchor Rotation anchor point.
 * @param {Array<number>=} opt_dest Destination.
 * @return {Array<number>} Transformed coordinates.
 */


function rotate(flatCoordinates, offset, end, stride, angle, anchor, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var anchorX = anchor[0];
  var anchorY = anchor[1];
  var i = 0;

  for (var j = offset; j < end; j += stride) {
    var deltaX = flatCoordinates[j] - anchorX;
    var deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + deltaX * cos - deltaY * sin;
    dest[i++] = anchorY + deltaX * sin + deltaY * cos;

    for (var k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }

  if (opt_dest && dest.length != i) {
    dest.length = i;
  }

  return dest;
}
/**
 * Scale the coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} sx Scale factor in the x-direction.
 * @param {number} sy Scale factor in the y-direction.
 * @param {Array<number>} anchor Scale anchor point.
 * @param {Array<number>=} opt_dest Destination.
 * @return {Array<number>} Transformed coordinates.
 */


function scale(flatCoordinates, offset, end, stride, sx, sy, anchor, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var anchorX = anchor[0];
  var anchorY = anchor[1];
  var i = 0;

  for (var j = offset; j < end; j += stride) {
    var deltaX = flatCoordinates[j] - anchorX;
    var deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + sx * deltaX;
    dest[i++] = anchorY + sy * deltaY;

    for (var k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }

  if (opt_dest && dest.length != i) {
    dest.length = i;
  }

  return dest;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 * @param {Array<number>=} opt_dest Destination.
 * @return {Array<number>} Transformed coordinates.
 */


function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, opt_dest) {
  var dest = opt_dest ? opt_dest : [];
  var i = 0;

  for (var j = offset; j < end; j += stride) {
    dest[i++] = flatCoordinates[j] + deltaX;
    dest[i++] = flatCoordinates[j + 1] + deltaY;

    for (var k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }

  if (opt_dest && dest.length != i) {
    dest.length = i;
  }

  return dest;
}
},{}],"ol/geom/Geometry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Object = _interopRequireDefault(require("../Object.js"));

var _Units = _interopRequireDefault(require("../proj/Units.js"));

var _util = require("../util.js");

var _transform = require("../transform.js");

var _extent = require("../extent.js");

var _proj = require("../proj.js");

var _functions = require("../functions.js");

var _transform2 = require("./flat/transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/Geometry
 */


/**
 * @type {import("../transform.js").Transform}
 */
var tmpTransform = (0, _transform.create)();
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @abstract
 * @api
 */

var Geometry =
/** @class */
function (_super) {
  __extends(Geometry, _super);

  function Geometry() {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {import("../extent.js").Extent}
     */


    _this.extent_ = (0, _extent.createEmpty)();
    /**
     * @private
     * @type {number}
     */

    _this.extentRevision_ = -1;
    /**
     * @protected
     * @type {number}
     */

    _this.simplifiedGeometryMaxMinSquaredTolerance = 0;
    /**
     * @protected
     * @type {number}
     */

    _this.simplifiedGeometryRevision = 0;
    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} revision The geometry revision.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [opt_transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */

    _this.simplifyTransformedInternal = (0, _functions.memoizeOne)(function (revision, squaredTolerance, opt_transform) {
      if (!opt_transform) {
        return this.getSimplifiedGeometry(squaredTolerance);
      }

      var clone = this.clone();
      clone.applyTransform(opt_transform);
      return clone.getSimplifiedGeometry(squaredTolerance);
    });
    return _this;
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [opt_transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */


  Geometry.prototype.simplifyTransformed = function (squaredTolerance, opt_transform) {
    return this.simplifyTransformedInternal(this.getRevision(), squaredTolerance, opt_transform);
  };
  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */


  Geometry.prototype.clone = function () {
    return (0, _util.abstract)();
  };
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  Geometry.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    return (0, _util.abstract)();
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */


  Geometry.prototype.containsXY = function (x, y) {
    var coord = this.getClosestPoint([x, y]);
    return coord[0] === x && coord[1] === y;
  };
  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate=} opt_closestPoint Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */


  Geometry.prototype.getClosestPoint = function (point, opt_closestPoint) {
    var closestPoint = opt_closestPoint ? opt_closestPoint : [NaN, NaN];
    this.closestPointXY(point[0], point[1], closestPoint, Infinity);
    return closestPoint;
  };
  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */


  Geometry.prototype.intersectsCoordinate = function (coordinate) {
    return this.containsXY(coordinate[0], coordinate[1]);
  };
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */


  Geometry.prototype.computeExtent = function (extent) {
    return (0, _util.abstract)();
  };
  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent=} opt_extent Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */


  Geometry.prototype.getExtent = function (opt_extent) {
    if (this.extentRevision_ != this.getRevision()) {
      var extent = this.computeExtent(this.extent_);

      if (isNaN(extent[0]) || isNaN(extent[1])) {
        (0, _extent.createOrUpdateEmpty)(extent);
      }

      this.extentRevision_ = this.getRevision();
    }

    return (0, _extent.returnOrUpdate)(this.extent_, opt_extent);
  };
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */


  Geometry.prototype.rotate = function (angle, anchor) {
    (0, _util.abstract)();
  };
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number=} opt_sy The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate=} opt_anchor The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */


  Geometry.prototype.scale = function (sx, opt_sy, opt_anchor) {
    (0, _util.abstract)();
  };
  /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */


  Geometry.prototype.simplify = function (tolerance) {
    return this.getSimplifiedGeometry(tolerance * tolerance);
  };
  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */


  Geometry.prototype.getSimplifiedGeometry = function (squaredTolerance) {
    return (0, _util.abstract)();
  };
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {import("./GeometryType.js").default} Geometry type.
   */


  Geometry.prototype.getType = function () {
    return (0, _util.abstract)();
  };
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */


  Geometry.prototype.applyTransform = function (transformFn) {
    (0, _util.abstract)();
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */


  Geometry.prototype.intersectsExtent = function (extent) {
    return (0, _util.abstract)();
  };
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */


  Geometry.prototype.translate = function (deltaX, deltaY) {
    (0, _util.abstract)();
  };
  /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {Geometry} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */


  Geometry.prototype.transform = function (source, destination) {
    /** @type {import("../proj/Projection.js").default} */
    var sourceProj = (0, _proj.get)(source);
    var transformFn = sourceProj.getUnits() == _Units.default.TILE_PIXELS ? function (inCoordinates, outCoordinates, stride) {
      var pixelExtent = sourceProj.getExtent();
      var projectedExtent = sourceProj.getWorldExtent();
      var scale = (0, _extent.getHeight)(projectedExtent) / (0, _extent.getHeight)(pixelExtent);
      (0, _transform.compose)(tmpTransform, projectedExtent[0], projectedExtent[3], scale, -scale, 0, 0, 0);
      (0, _transform2.transform2D)(inCoordinates, 0, inCoordinates.length, stride, tmpTransform, outCoordinates);
      return (0, _proj.getTransform)(sourceProj, destination)(inCoordinates, outCoordinates, stride);
    } : (0, _proj.getTransform)(sourceProj, destination);
    this.applyTransform(transformFn);
    return this;
  };

  return Geometry;
}(_Object.default);

var _default = Geometry;
exports.default = _default;
},{"../Object.js":"ol/Object.js","../proj/Units.js":"ol/proj/Units.js","../util.js":"ol/util.js","../transform.js":"ol/transform.js","../extent.js":"ol/extent.js","../proj.js":"ol/proj.js","../functions.js":"ol/functions.js","./flat/transform.js":"ol/geom/flat/transform.js"}],"ol/geom/GeometryLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/geom/GeometryLayout
 */

/**
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available. Supported values are `'XY'`,
 * `'XYZ'`, `'XYM'`, `'XYZM'`.
 * @enum {string}
 */
var _default = {
  XY: 'XY',
  XYZ: 'XYZ',
  XYM: 'XYM',
  XYZM: 'XYZM'
};
exports.default = _default;
},{}],"ol/geom/SimpleGeometry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStrideForLayout = getStrideForLayout;
exports.transformGeom2D = transformGeom2D;
exports.default = void 0;

var _Geometry = _interopRequireDefault(require("./Geometry.js"));

var _GeometryLayout = _interopRequireDefault(require("./GeometryLayout.js"));

var _util = require("../util.js");

var _extent = require("../extent.js");

var _transform = require("./flat/transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/SimpleGeometry
 */


/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @abstract
 * @api
 */
var SimpleGeometry =
/** @class */
function (_super) {
  __extends(SimpleGeometry, _super);

  function SimpleGeometry() {
    var _this = _super.call(this) || this;
    /**
     * @protected
     * @type {import("./GeometryLayout.js").default}
     */


    _this.layout = _GeometryLayout.default.XY;
    /**
     * @protected
     * @type {number}
     */

    _this.stride = 2;
    /**
     * @protected
     * @type {Array<number>}
     */

    _this.flatCoordinates = null;
    return _this;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */


  SimpleGeometry.prototype.computeExtent = function (extent) {
    return (0, _extent.createOrUpdateFromFlatCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
  };
  /**
   * @abstract
   * @return {Array<*>} Coordinates.
   */


  SimpleGeometry.prototype.getCoordinates = function () {
    return (0, _util.abstract)();
  };
  /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */


  SimpleGeometry.prototype.getFirstCoordinate = function () {
    return this.flatCoordinates.slice(0, this.stride);
  };
  /**
   * @return {Array<number>} Flat coordinates.
   */


  SimpleGeometry.prototype.getFlatCoordinates = function () {
    return this.flatCoordinates;
  };
  /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */


  SimpleGeometry.prototype.getLastCoordinate = function () {
    return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
  };
  /**
   * Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.
   * @return {import("./GeometryLayout.js").default} Layout.
   * @api
   */


  SimpleGeometry.prototype.getLayout = function () {
    return this.layout;
  };
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */


  SimpleGeometry.prototype.getSimplifiedGeometry = function (squaredTolerance) {
    if (this.simplifiedGeometryRevision !== this.getRevision()) {
      this.simplifiedGeometryMaxMinSquaredTolerance = 0;
      this.simplifiedGeometryRevision = this.getRevision();
    } // If squaredTolerance is negative or if we know that simplification will not
    // have any effect then just return this.


    if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) {
      return this;
    }

    var simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
    var simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();

    if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
      return simplifiedGeometry;
    } else {
      // Simplification did not actually remove any coordinates.  We now know
      // that any calls to getSimplifiedGeometry with a squaredTolerance less
      // than or equal to the current squaredTolerance will also not have any
      // effect.  This allows us to short circuit simplification (saving CPU
      // cycles) and prevents the cache of simplified geometries from filling
      // up with useless identical copies of this geometry (saving memory).
      this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
      return this;
    }
  };
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */


  SimpleGeometry.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
    return this;
  };
  /**
   * @return {number} Stride.
   */


  SimpleGeometry.prototype.getStride = function () {
    return this.stride;
  };
  /**
   * @param {import("./GeometryLayout.js").default} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */


  SimpleGeometry.prototype.setFlatCoordinates = function (layout, flatCoordinates) {
    this.stride = getStrideForLayout(layout);
    this.layout = layout;
    this.flatCoordinates = flatCoordinates;
  };
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   */


  SimpleGeometry.prototype.setCoordinates = function (coordinates, opt_layout) {
    (0, _util.abstract)();
  };
  /**
   * @param {import("./GeometryLayout.js").default|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */


  SimpleGeometry.prototype.setLayout = function (layout, coordinates, nesting) {
    /** @type {number} */
    var stride;

    if (layout) {
      stride = getStrideForLayout(layout);
    } else {
      for (var i = 0; i < nesting; ++i) {
        if (coordinates.length === 0) {
          this.layout = _GeometryLayout.default.XY;
          this.stride = 2;
          return;
        } else {
          coordinates =
          /** @type {Array} */
          coordinates[0];
        }
      }

      stride = coordinates.length;
      layout = getLayoutForStride(stride);
    }

    this.layout = layout;
    this.stride = stride;
  };
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */


  SimpleGeometry.prototype.applyTransform = function (transformFn) {
    if (this.flatCoordinates) {
      transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
      this.changed();
    }
  };
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */


  SimpleGeometry.prototype.rotate = function (angle, anchor) {
    var flatCoordinates = this.getFlatCoordinates();

    if (flatCoordinates) {
      var stride = this.getStride();
      (0, _transform.rotate)(flatCoordinates, 0, flatCoordinates.length, stride, angle, anchor, flatCoordinates);
      this.changed();
    }
  };
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number=} opt_sy The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate=} opt_anchor The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */


  SimpleGeometry.prototype.scale = function (sx, opt_sy, opt_anchor) {
    var sy = opt_sy;

    if (sy === undefined) {
      sy = sx;
    }

    var anchor = opt_anchor;

    if (!anchor) {
      anchor = (0, _extent.getCenter)(this.getExtent());
    }

    var flatCoordinates = this.getFlatCoordinates();

    if (flatCoordinates) {
      var stride = this.getStride();
      (0, _transform.scale)(flatCoordinates, 0, flatCoordinates.length, stride, sx, sy, anchor, flatCoordinates);
      this.changed();
    }
  };
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */


  SimpleGeometry.prototype.translate = function (deltaX, deltaY) {
    var flatCoordinates = this.getFlatCoordinates();

    if (flatCoordinates) {
      var stride = this.getStride();
      (0, _transform.translate)(flatCoordinates, 0, flatCoordinates.length, stride, deltaX, deltaY, flatCoordinates);
      this.changed();
    }
  };

  return SimpleGeometry;
}(_Geometry.default);
/**
 * @param {number} stride Stride.
 * @return {import("./GeometryLayout.js").default} layout Layout.
 */


function getLayoutForStride(stride) {
  var layout;

  if (stride == 2) {
    layout = _GeometryLayout.default.XY;
  } else if (stride == 3) {
    layout = _GeometryLayout.default.XYZ;
  } else if (stride == 4) {
    layout = _GeometryLayout.default.XYZM;
  }

  return (
    /** @type {import("./GeometryLayout.js").default} */
    layout
  );
}
/**
 * @param {import("./GeometryLayout.js").default} layout Layout.
 * @return {number} Stride.
 */


function getStrideForLayout(layout) {
  var stride;

  if (layout == _GeometryLayout.default.XY) {
    stride = 2;
  } else if (layout == _GeometryLayout.default.XYZ || layout == _GeometryLayout.default.XYM) {
    stride = 3;
  } else if (layout == _GeometryLayout.default.XYZM) {
    stride = 4;
  }

  return (
    /** @type {number} */
    stride
  );
}
/**
 * @param {SimpleGeometry} simpleGeometry Simple geometry.
 * @param {import("../transform.js").Transform} transform Transform.
 * @param {Array<number>=} opt_dest Destination.
 * @return {Array<number>} Transformed flat coordinates.
 */


function transformGeom2D(simpleGeometry, transform, opt_dest) {
  var flatCoordinates = simpleGeometry.getFlatCoordinates();

  if (!flatCoordinates) {
    return null;
  } else {
    var stride = simpleGeometry.getStride();
    return (0, _transform.transform2D)(flatCoordinates, 0, flatCoordinates.length, stride, transform, opt_dest);
  }
}

var _default = SimpleGeometry;
exports.default = _default;
},{"./Geometry.js":"ol/geom/Geometry.js","./GeometryLayout.js":"ol/geom/GeometryLayout.js","../util.js":"ol/util.js","../extent.js":"ol/extent.js","./flat/transform.js":"ol/geom/flat/transform.js"}],"ol/geom/flat/deflate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deflateCoordinate = deflateCoordinate;
exports.deflateCoordinates = deflateCoordinates;
exports.deflateCoordinatesArray = deflateCoordinatesArray;
exports.deflateMultiCoordinatesArray = deflateMultiCoordinatesArray;

/**
 * @module ol/geom/flat/deflate
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
  for (var i = 0, ii = coordinate.length; i < ii; ++i) {
    flatCoordinates[offset++] = coordinate[i];
  }

  return offset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<import("../../coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */


function deflateCoordinates(flatCoordinates, offset, coordinates, stride) {
  for (var i = 0, ii = coordinates.length; i < ii; ++i) {
    var coordinate = coordinates[i];

    for (var j = 0; j < stride; ++j) {
      flatCoordinates[offset++] = coordinate[j];
    }
  }

  return offset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} coordinatess Coordinatess.
 * @param {number} stride Stride.
 * @param {Array<number>=} opt_ends Ends.
 * @return {Array<number>} Ends.
 */


function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, opt_ends) {
  var ends = opt_ends ? opt_ends : [];
  var i = 0;

  for (var j = 0, jj = coordinatess.length; j < jj; ++j) {
    var end = deflateCoordinates(flatCoordinates, offset, coordinatess[j], stride);
    ends[i++] = end;
    offset = end;
  }

  ends.length = i;
  return ends;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} coordinatesss Coordinatesss.
 * @param {number} stride Stride.
 * @param {Array<Array<number>>=} opt_endss Endss.
 * @return {Array<Array<number>>} Endss.
 */


function deflateMultiCoordinatesArray(flatCoordinates, offset, coordinatesss, stride, opt_endss) {
  var endss = opt_endss ? opt_endss : [];
  var i = 0;

  for (var j = 0, jj = coordinatesss.length; j < jj; ++j) {
    var ends = deflateCoordinatesArray(flatCoordinates, offset, coordinatesss[j], stride, endss[i]);
    endss[i++] = ends;
    offset = ends[ends.length - 1];
  }

  endss.length = i;
  return endss;
}
},{}],"ol/geom/Circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _transform = require("./flat/transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/Circle
 */


/**
 * @classdesc
 * Circle geometry.
 *
 * @api
 */
var Circle =
/** @class */
function (_super) {
  __extends(Circle, _super);
  /**
   * @param {!import("../coordinate.js").Coordinate} center Center.
   *     For internal use, flat coordinates in combination with `opt_layout` and no
   *     `opt_radius` are also accepted.
   * @param {number=} opt_radius Radius.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   */


  function Circle(center, opt_radius, opt_layout) {
    var _this = _super.call(this) || this;

    if (opt_layout !== undefined && opt_radius === undefined) {
      _this.setFlatCoordinates(opt_layout, center);
    } else {
      var radius = opt_radius ? opt_radius : 0;

      _this.setCenterAndRadius(center, radius, opt_layout);
    }

    return _this;
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Circle} Clone.
   * @api
   */


  Circle.prototype.clone = function () {
    return new Circle(this.flatCoordinates.slice(), undefined, this.layout);
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  Circle.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    var flatCoordinates = this.flatCoordinates;
    var dx = x - flatCoordinates[0];
    var dy = y - flatCoordinates[1];
    var squaredDistance = dx * dx + dy * dy;

    if (squaredDistance < minSquaredDistance) {
      if (squaredDistance === 0) {
        for (var i = 0; i < this.stride; ++i) {
          closestPoint[i] = flatCoordinates[i];
        }
      } else {
        var delta = this.getRadius() / Math.sqrt(squaredDistance);
        closestPoint[0] = flatCoordinates[0] + delta * dx;
        closestPoint[1] = flatCoordinates[1] + delta * dy;

        for (var i = 2; i < this.stride; ++i) {
          closestPoint[i] = flatCoordinates[i];
        }
      }

      closestPoint.length = this.stride;
      return squaredDistance;
    } else {
      return minSquaredDistance;
    }
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */


  Circle.prototype.containsXY = function (x, y) {
    var flatCoordinates = this.flatCoordinates;
    var dx = x - flatCoordinates[0];
    var dy = y - flatCoordinates[1];
    return dx * dx + dy * dy <= this.getRadiusSquared_();
  };
  /**
   * Return the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
   * @return {import("../coordinate.js").Coordinate} Center.
   * @api
   */


  Circle.prototype.getCenter = function () {
    return this.flatCoordinates.slice(0, this.stride);
  };
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */


  Circle.prototype.computeExtent = function (extent) {
    var flatCoordinates = this.flatCoordinates;
    var radius = flatCoordinates[this.stride] - flatCoordinates[0];
    return (0, _extent.createOrUpdate)(flatCoordinates[0] - radius, flatCoordinates[1] - radius, flatCoordinates[0] + radius, flatCoordinates[1] + radius, extent);
  };
  /**
   * Return the radius of the circle.
   * @return {number} Radius.
   * @api
   */


  Circle.prototype.getRadius = function () {
    return Math.sqrt(this.getRadiusSquared_());
  };
  /**
   * @private
   * @return {number} Radius squared.
   */


  Circle.prototype.getRadiusSquared_ = function () {
    var dx = this.flatCoordinates[this.stride] - this.flatCoordinates[0];
    var dy = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1];
    return dx * dx + dy * dy;
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  Circle.prototype.getType = function () {
    return _GeometryType.default.CIRCLE;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  Circle.prototype.intersectsExtent = function (extent) {
    var circleExtent = this.getExtent();

    if ((0, _extent.intersects)(extent, circleExtent)) {
      var center = this.getCenter();

      if (extent[0] <= center[0] && extent[2] >= center[0]) {
        return true;
      }

      if (extent[1] <= center[1] && extent[3] >= center[1]) {
        return true;
      }

      return (0, _extent.forEachCorner)(extent, this.intersectsCoordinate.bind(this));
    }

    return false;
  };
  /**
   * Set the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} center Center.
   * @api
   */


  Circle.prototype.setCenter = function (center) {
    var stride = this.stride;
    var radius = this.flatCoordinates[stride] - this.flatCoordinates[0];
    var flatCoordinates = center.slice();
    flatCoordinates[stride] = flatCoordinates[0] + radius;

    for (var i = 1; i < stride; ++i) {
      flatCoordinates[stride + i] = center[i];
    }

    this.setFlatCoordinates(this.layout, flatCoordinates);
    this.changed();
  };
  /**
   * Set the center (as {@link module:ol/coordinate~Coordinate coordinate}) and the radius (as
   * number) of the circle.
   * @param {!import("../coordinate.js").Coordinate} center Center.
   * @param {number} radius Radius.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  Circle.prototype.setCenterAndRadius = function (center, radius, opt_layout) {
    this.setLayout(opt_layout, center, 0);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    /** @type {Array<number>} */


    var flatCoordinates = this.flatCoordinates;
    var offset = (0, _deflate.deflateCoordinate)(flatCoordinates, 0, center, this.stride);
    flatCoordinates[offset++] = flatCoordinates[0] + radius;

    for (var i = 1, ii = this.stride; i < ii; ++i) {
      flatCoordinates[offset++] = flatCoordinates[i];
    }

    flatCoordinates.length = offset;
    this.changed();
  };

  Circle.prototype.getCoordinates = function () {
    return null;
  };

  Circle.prototype.setCoordinates = function (coordinates, opt_layout) {};
  /**
   * Set the radius of the circle. The radius is in the units of the projection.
   * @param {number} radius Radius.
   * @api
   */


  Circle.prototype.setRadius = function (radius) {
    this.flatCoordinates[this.stride] = this.flatCoordinates[0] + radius;
    this.changed();
  };
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */


  Circle.prototype.rotate = function (angle, anchor) {
    var center = this.getCenter();
    var stride = this.getStride();
    this.setCenter((0, _transform.rotate)(center, 0, center.length, stride, angle, anchor, center));
    this.changed();
  };
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */


  Circle.prototype.translate = function (deltaX, deltaY) {
    var center = this.getCenter();
    var stride = this.getStride();
    this.setCenter((0, _transform.translate)(center, 0, center.length, stride, deltaX, deltaY, center));
    this.changed();
  };

  return Circle;
}(_SimpleGeometry.default);
/**
 * Transform each coordinate of the circle from one coordinate reference system
 * to another. The geometry is modified in place.
 * If you do not want the geometry modified in place, first clone() it and
 * then use this function on the clone.
 *
 * Internally a circle is currently represented by two points: the center of
 * the circle `[cx, cy]`, and the point to the right of the circle
 * `[cx + r, cy]`. This `transform` function just transforms these two points.
 * So the resulting geometry is also a circle, and that circle does not
 * correspond to the shape that would be obtained by transforming every point
 * of the original circle.
 *
 * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
 *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
 * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
 *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
 * @return {Circle} This geometry.  Note that original geometry is
 *     modified in place.
 * @function
 * @api
 */


Circle.prototype.transform;
var _default = Circle;
exports.default = _default;
},{"./GeometryType.js":"ol/geom/GeometryType.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","./flat/transform.js":"ol/geom/flat/transform.js"}],"ol/Feature.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleFunction = createStyleFunction;
exports.default = void 0;

var _Object = _interopRequireWildcard(require("./Object.js"));

var _EventType = _interopRequireDefault(require("./events/EventType.js"));

var _asserts = require("./asserts.js");

var _events = require("./events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/Feature
 */


/**
 * @typedef {typeof Feature|typeof import("./render/Feature.js").default} FeatureClass
 */

/**
 * @typedef {Feature|import("./render/Feature.js").default} FeatureLike
 */

/**
 * @classdesc
 * A vector object for geographic features with a geometry and other
 * attribute properties, similar to the features in vector file formats like
 * GeoJSON.
 *
 * Features can be styled individually with `setStyle`; otherwise they use the
 * style of their vector layer.
 *
 * Note that attribute properties are set as {@link module:ol/Object} properties on
 * the feature object, so they are observable, and have get/set accessors.
 *
 * Typically, a feature has a single geometry property. You can set the
 * geometry using the `setGeometry` method and get it with `getGeometry`.
 * It is possible to store more than one geometry on a feature using attribute
 * properties. By default, the geometry used for rendering is identified by
 * the property name `geometry`. If you want to use another geometry property
 * for rendering, use the `setGeometryName` method to change the attribute
 * property associated with the geometry for the feature.  For example:
 *
 * ```js
 *
 * import Feature from 'ol/Feature';
 * import Polygon from 'ol/geom/Polygon';
 * import Point from 'ol/geom/Point';
 *
 * var feature = new Feature({
 *   geometry: new Polygon(polyCoords),
 *   labelPoint: new Point(labelCoords),
 *   name: 'My Polygon'
 * });
 *
 * // get the polygon geometry
 * var poly = feature.getGeometry();
 *
 * // Render the feature as a point using the coordinates from labelPoint
 * feature.setGeometryName('labelPoint');
 *
 * // get the point geometry
 * var point = feature.getGeometry();
 * ```
 *
 * @api
 * @template {import("./geom/Geometry.js").default} Geometry
 */
var Feature =
/** @class */
function (_super) {
  __extends(Feature, _super);
  /**
   * @param {Geometry|Object<string, *>=} opt_geometryOrProperties
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */


  function Feature(opt_geometryOrProperties) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {number|string|undefined}
     */


    _this.id_ = undefined;
    /**
     * @type {string}
     * @private
     */

    _this.geometryName_ = 'geometry';
    /**
     * User provided style.
     * @private
     * @type {import("./style/Style.js").StyleLike}
     */

    _this.style_ = null;
    /**
     * @private
     * @type {import("./style/Style.js").StyleFunction|undefined}
     */

    _this.styleFunction_ = undefined;
    /**
     * @private
     * @type {?import("./events.js").EventsKey}
     */

    _this.geometryChangeKey_ = null;

    _this.addEventListener((0, _Object.getChangeEventType)(_this.geometryName_), _this.handleGeometryChanged_);

    if (opt_geometryOrProperties) {
      if (typeof
      /** @type {?} */
      opt_geometryOrProperties.getSimplifiedGeometry === 'function') {
        var geometry =
        /** @type {Geometry} */
        opt_geometryOrProperties;

        _this.setGeometry(geometry);
      } else {
        /** @type {Object<string, *>} */
        var properties = opt_geometryOrProperties;

        _this.setProperties(properties);
      }
    }

    return _this;
  }
  /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature} The clone.
   * @api
   */


  Feature.prototype.clone = function () {
    var clone = new Feature(this.hasProperties() ? this.getProperties() : null);
    clone.setGeometryName(this.getGeometryName());
    var geometry = this.getGeometry();

    if (geometry) {
      clone.setGeometry(geometry.clone());
    }

    var style = this.getStyle();

    if (style) {
      clone.setStyle(style);
    }

    return clone;
  };
  /**
   * Get the feature's default geometry.  A feature may have any number of named
   * geometries.  The "default" geometry (the one that is rendered by default) is
   * set when calling {@link module:ol/Feature~Feature#setGeometry}.
   * @return {Geometry|undefined} The default geometry for the feature.
   * @api
   * @observable
   */


  Feature.prototype.getGeometry = function () {
    return (
      /** @type {Geometry|undefined} */
      this.get(this.geometryName_)
    );
  };
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is either set when reading data from a remote source or set explicitly by
   * calling {@link module:ol/Feature~Feature#setId}.
   * @return {number|string|undefined} Id.
   * @api
   */


  Feature.prototype.getId = function () {
    return this.id_;
  };
  /**
   * Get the name of the feature's default geometry.  By default, the default
   * geometry is named `geometry`.
   * @return {string} Get the property name associated with the default geometry
   *     for this feature.
   * @api
   */


  Feature.prototype.getGeometryName = function () {
    return this.geometryName_;
  };
  /**
   * Get the feature's style. Will return what was provided to the
   * {@link module:ol/Feature~Feature#setStyle} method.
   * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
   * @api
   */


  Feature.prototype.getStyle = function () {
    return this.style_;
  };
  /**
   * Get the feature's style function.
   * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
   * representing the current style of this feature.
   * @api
   */


  Feature.prototype.getStyleFunction = function () {
    return this.styleFunction_;
  };
  /**
   * @private
   */


  Feature.prototype.handleGeometryChange_ = function () {
    this.changed();
  };
  /**
   * @private
   */


  Feature.prototype.handleGeometryChanged_ = function () {
    if (this.geometryChangeKey_) {
      (0, _events.unlistenByKey)(this.geometryChangeKey_);
      this.geometryChangeKey_ = null;
    }

    var geometry = this.getGeometry();

    if (geometry) {
      this.geometryChangeKey_ = (0, _events.listen)(geometry, _EventType.default.CHANGE, this.handleGeometryChange_, this);
    }

    this.changed();
  };
  /**
   * Set the default geometry for the feature.  This will update the property
   * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
   * @param {Geometry|undefined} geometry The new geometry.
   * @api
   * @observable
   */


  Feature.prototype.setGeometry = function (geometry) {
    this.set(this.geometryName_, geometry);
  };
  /**
   * Set the style for the feature to override the layer style.  This can be a
   * single style object, an array of styles, or a function that takes a
   * resolution and returns an array of styles. To unset the feature style, call
   * `setStyle()` without arguments or a falsey value.
   * @param {import("./style/Style.js").StyleLike=} opt_style Style for this feature.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */


  Feature.prototype.setStyle = function (opt_style) {
    this.style_ = opt_style;
    this.styleFunction_ = !opt_style ? undefined : createStyleFunction(opt_style);
    this.changed();
  };
  /**
   * Set the feature id.  The feature id is considered stable and may be used when
   * requesting features or comparing identifiers returned from a remote source.
   * The feature id can be used with the
   * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
   * @param {number|string|undefined} id The feature id.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */


  Feature.prototype.setId = function (id) {
    this.id_ = id;
    this.changed();
  };
  /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */


  Feature.prototype.setGeometryName = function (name) {
    this.removeEventListener((0, _Object.getChangeEventType)(this.geometryName_), this.handleGeometryChanged_);
    this.geometryName_ = name;
    this.addEventListener((0, _Object.getChangeEventType)(this.geometryName_), this.handleGeometryChanged_);
    this.handleGeometryChanged_();
  };

  return Feature;
}(_Object.default);
/**
 * Convert the provided object into a feature style function.  Functions passed
 * through unchanged.  Arrays of Style or single style objects wrapped
 * in a new feature style function.
 * @param {!import("./style/Style.js").StyleFunction|!Array<import("./style/Style.js").default>|!import("./style/Style.js").default} obj
 *     A feature style function, a single style, or an array of styles.
 * @return {import("./style/Style.js").StyleFunction} A style function.
 */


function createStyleFunction(obj) {
  if (typeof obj === 'function') {
    return obj;
  } else {
    /**
     * @type {Array<import("./style/Style.js").default>}
     */
    var styles_1;

    if (Array.isArray(obj)) {
      styles_1 = obj;
    } else {
      (0, _asserts.assert)(typeof
      /** @type {?} */
      obj.getZIndex === 'function', 41); // Expected an `import("./style/Style.js").Style` or an array of `import("./style/Style.js").Style`

      var style =
      /** @type {import("./style/Style.js").default} */
      obj;
      styles_1 = [style];
    }

    return function () {
      return styles_1;
    };
  }
}

var _default = Feature;
exports.default = _default;
},{"./Object.js":"ol/Object.js","./events/EventType.js":"ol/events/EventType.js","./asserts.js":"ol/asserts.js","./events.js":"ol/events.js"}],"ol/interaction/Property.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/interaction/Property
 */

/**
 * @enum {string}
 */
var _default = {
  ACTIVE: 'active'
};
exports.default = _default;
},{}],"ol/geom/flat/closest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxSquaredDelta = maxSquaredDelta;
exports.arrayMaxSquaredDelta = arrayMaxSquaredDelta;
exports.multiArrayMaxSquaredDelta = multiArrayMaxSquaredDelta;
exports.assignClosestPoint = assignClosestPoint;
exports.assignClosestArrayPoint = assignClosestArrayPoint;
exports.assignClosestMultiArrayPoint = assignClosestMultiArrayPoint;

var _math = require("../../math.js");

/**
 * @module ol/geom/flat/closest
 */

/**
 * Returns the point on the 2D line segment flatCoordinates[offset1] to
 * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
 * dimensions are linearly interpolated.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset1 Offset 1.
 * @param {number} offset2 Offset 2.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 */
function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
  var x1 = flatCoordinates[offset1];
  var y1 = flatCoordinates[offset1 + 1];
  var dx = flatCoordinates[offset2] - x1;
  var dy = flatCoordinates[offset2 + 1] - y1;
  var offset;

  if (dx === 0 && dy === 0) {
    offset = offset1;
  } else {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);

    if (t > 1) {
      offset = offset2;
    } else if (t > 0) {
      for (var i = 0; i < stride; ++i) {
        closestPoint[i] = (0, _math.lerp)(flatCoordinates[offset1 + i], flatCoordinates[offset2 + i], t);
      }

      closestPoint.length = stride;
      return;
    } else {
      offset = offset1;
    }
  }

  for (var i = 0; i < stride; ++i) {
    closestPoint[i] = flatCoordinates[offset + i];
  }

  closestPoint.length = stride;
}
/**
 * Return the squared of the largest distance between any pair of consecutive
 * coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */


function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
  var x1 = flatCoordinates[offset];
  var y1 = flatCoordinates[offset + 1];

  for (offset += stride; offset < end; offset += stride) {
    var x2 = flatCoordinates[offset];
    var y2 = flatCoordinates[offset + 1];
    var squaredDelta = (0, _math.squaredDistance)(x1, y1, x2, y2);

    if (squaredDelta > max) {
      max = squaredDelta;
    }

    x1 = x2;
    y1 = y2;
  }

  return max;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */


function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
    offset = end;
  }

  return max;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */


function multiArrayMaxSquaredDelta(flatCoordinates, offset, endss, stride, max) {
  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    max = arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max);
    offset = ends[ends.length - 1];
  }

  return max;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>=} opt_tmpPoint Temporary point object.
 * @return {number} Minimum squared distance.
 */


function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, opt_tmpPoint) {
  if (offset == end) {
    return minSquaredDistance;
  }

  var i, squaredDistance;

  if (maxDelta === 0) {
    // All points are identical, so just test the first point.
    squaredDistance = (0, _math.squaredDistance)(x, y, flatCoordinates[offset], flatCoordinates[offset + 1]);

    if (squaredDistance < minSquaredDistance) {
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = flatCoordinates[offset + i];
      }

      closestPoint.length = stride;
      return squaredDistance;
    } else {
      return minSquaredDistance;
    }
  }

  var tmpPoint = opt_tmpPoint ? opt_tmpPoint : [NaN, NaN];
  var index = offset + stride;

  while (index < end) {
    assignClosest(flatCoordinates, index - stride, index, stride, x, y, tmpPoint);
    squaredDistance = (0, _math.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);

    if (squaredDistance < minSquaredDistance) {
      minSquaredDistance = squaredDistance;

      for (i = 0; i < stride; ++i) {
        closestPoint[i] = tmpPoint[i];
      }

      closestPoint.length = stride;
      index += stride;
    } else {
      // Skip ahead multiple points, because we know that all the skipped
      // points cannot be any closer than the closest point we have found so
      // far.  We know this because we know how close the current point is, how
      // close the closest point we have found so far is, and the maximum
      // distance between consecutive points.  For example, if we're currently
      // at distance 10, the best we've found so far is 3, and that the maximum
      // distance between consecutive points is 2, then we'll need to skip at
      // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
      // finding a closer point.  We use Math.max(..., 1) to ensure that we
      // always advance at least one point, to avoid an infinite loop.
      index += stride * Math.max((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) / maxDelta | 0, 1);
    }
  }

  if (isRing) {
    // Check the closing segment.
    assignClosest(flatCoordinates, end - stride, offset, stride, x, y, tmpPoint);
    squaredDistance = (0, _math.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);

    if (squaredDistance < minSquaredDistance) {
      minSquaredDistance = squaredDistance;

      for (i = 0; i < stride; ++i) {
        closestPoint[i] = tmpPoint[i];
      }

      closestPoint.length = stride;
    }
  }

  return minSquaredDistance;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>=} opt_tmpPoint Temporary point object.
 * @return {number} Minimum squared distance.
 */


function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, opt_tmpPoint) {
  var tmpPoint = opt_tmpPoint ? opt_tmpPoint : [NaN, NaN];

  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    minSquaredDistance = assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
    offset = end;
  }

  return minSquaredDistance;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>=} opt_tmpPoint Temporary point object.
 * @return {number} Minimum squared distance.
 */


function assignClosestMultiArrayPoint(flatCoordinates, offset, endss, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, opt_tmpPoint) {
  var tmpPoint = opt_tmpPoint ? opt_tmpPoint : [NaN, NaN];

  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    minSquaredDistance = assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
    offset = ends[ends.length - 1];
  }

  return minSquaredDistance;
}
},{"../../math.js":"ol/math.js"}],"ol/geom/flat/simplify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyLineString = simplifyLineString;
exports.douglasPeucker = douglasPeucker;
exports.douglasPeuckerArray = douglasPeuckerArray;
exports.douglasPeuckerMultiArray = douglasPeuckerMultiArray;
exports.radialDistance = radialDistance;
exports.snap = snap;
exports.quantize = quantize;
exports.quantizeArray = quantizeArray;
exports.quantizeMultiArray = quantizeMultiArray;

var _math = require("../../math.js");

/**
 * @module ol/geom/flat/simplify
 */
// Based on simplify-js https://github.com/mourner/simplify-js
// Copyright (c) 2012, Vladimir Agafonkin
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//    1. Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//
//    2. Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {boolean} highQuality Highest quality.
 * @param {Array<number>=} opt_simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @return {Array<number>} Simplified line string.
 */
function simplifyLineString(flatCoordinates, offset, end, stride, squaredTolerance, highQuality, opt_simplifiedFlatCoordinates) {
  var simplifiedFlatCoordinates = opt_simplifiedFlatCoordinates !== undefined ? opt_simplifiedFlatCoordinates : [];

  if (!highQuality) {
    end = radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    flatCoordinates = simplifiedFlatCoordinates;
    offset = 0;
    stride = 2;
  }

  simplifiedFlatCoordinates.length = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
  return simplifiedFlatCoordinates;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */


function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
  var n = (end - offset) / stride;

  if (n < 3) {
    for (; offset < end; offset += stride) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
    }

    return simplifiedOffset;
  }
  /** @type {Array<number>} */


  var markers = new Array(n);
  markers[0] = 1;
  markers[n - 1] = 1;
  /** @type {Array<number>} */

  var stack = [offset, end - stride];
  var index = 0;

  while (stack.length > 0) {
    var last = stack.pop();
    var first = stack.pop();
    var maxSquaredDistance = 0;
    var x1 = flatCoordinates[first];
    var y1 = flatCoordinates[first + 1];
    var x2 = flatCoordinates[last];
    var y2 = flatCoordinates[last + 1];

    for (var i = first + stride; i < last; i += stride) {
      var x = flatCoordinates[i];
      var y = flatCoordinates[i + 1];
      var squaredDistance_1 = (0, _math.squaredSegmentDistance)(x, y, x1, y1, x2, y2);

      if (squaredDistance_1 > maxSquaredDistance) {
        index = i;
        maxSquaredDistance = squaredDistance_1;
      }
    }

    if (maxSquaredDistance > squaredTolerance) {
      markers[(index - offset) / stride] = 1;

      if (first + stride < index) {
        stack.push(first, index);
      }

      if (index + stride < last) {
        stack.push(index, last);
      }
    }
  }

  for (var i = 0; i < n; ++i) {
    if (markers[i]) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride];
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride + 1];
    }
  }

  return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */


function douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    simplifiedOffset = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset);
    simplifiedEnds.push(simplifiedOffset);
    offset = end;
  }

  return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */


function douglasPeuckerMultiArray(flatCoordinates, offset, endss, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    var simplifiedEnds = [];
    simplifiedOffset = douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
    simplifiedEndss.push(simplifiedEnds);
    offset = ends[ends.length - 1];
  }

  return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */


function radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
  if (end <= offset + stride) {
    // zero or one point, no simplification possible, so copy and return
    for (; offset < end; offset += stride) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
    }

    return simplifiedOffset;
  }

  var x1 = flatCoordinates[offset];
  var y1 = flatCoordinates[offset + 1]; // copy first point

  simplifiedFlatCoordinates[simplifiedOffset++] = x1;
  simplifiedFlatCoordinates[simplifiedOffset++] = y1;
  var x2 = x1;
  var y2 = y1;

  for (offset += stride; offset < end; offset += stride) {
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];

    if ((0, _math.squaredDistance)(x1, y1, x2, y2) > squaredTolerance) {
      // copy point at offset
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      x1 = x2;
      y1 = y2;
    }
  }

  if (x2 != x1 || y2 != y1) {
    // copy last point
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
  }

  return simplifiedOffset;
}
/**
 * @param {number} value Value.
 * @param {number} tolerance Tolerance.
 * @return {number} Rounded value.
 */


function snap(value, tolerance) {
  return tolerance * Math.round(value / tolerance);
}
/**
 * Simplifies a line string using an algorithm designed by Tim Schaub.
 * Coordinates are snapped to the nearest value in a virtual grid and
 * consecutive duplicate coordinates are discarded.  This effectively preserves
 * topology as the simplification of any subsection of a line string is
 * independent of the rest of the line string.  This means that, for examples,
 * the common edge between two polygons will be simplified to the same line
 * string independently in both polygons.  This implementation uses a single
 * pass over the coordinates and eliminates intermediate collinear points.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */


function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
  // do nothing if the line is empty
  if (offset == end) {
    return simplifiedOffset;
  } // snap the first coordinate (P1)


  var x1 = snap(flatCoordinates[offset], tolerance);
  var y1 = snap(flatCoordinates[offset + 1], tolerance);
  offset += stride; // add the first coordinate to the output

  simplifiedFlatCoordinates[simplifiedOffset++] = x1;
  simplifiedFlatCoordinates[simplifiedOffset++] = y1; // find the next coordinate that does not snap to the same value as the first
  // coordinate (P2)

  var x2, y2;

  do {
    x2 = snap(flatCoordinates[offset], tolerance);
    y2 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;

    if (offset == end) {
      // all coordinates snap to the same value, the line collapses to a point
      // push the last snapped value anyway to ensure that the output contains
      // at least two points
      // FIXME should we really return at least two points anyway?
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      return simplifiedOffset;
    }
  } while (x2 == x1 && y2 == y1);

  while (offset < end) {
    // snap the next coordinate (P3)
    var x3 = snap(flatCoordinates[offset], tolerance);
    var y3 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride; // skip P3 if it is equal to P2

    if (x3 == x2 && y3 == y2) {
      continue;
    } // calculate the delta between P1 and P2


    var dx1 = x2 - x1;
    var dy1 = y2 - y1; // calculate the delta between P3 and P1

    var dx2 = x3 - x1;
    var dy2 = y3 - y1; // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
    // P1 in the same direction then P2 is on the straight line between P1 and
    // P3

    if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
      // discard P2 and set P2 = P3
      x2 = x3;
      y2 = y3;
      continue;
    } // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
    // between P3 and P1 or on the opposite half of the line to P2.  add P2,
    // and continue with P1 = P2 and P2 = P3


    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    x1 = x2;
    y1 = y2;
    x2 = x3;
    y2 = y3;
  } // add the last point (P2)


  simplifiedFlatCoordinates[simplifiedOffset++] = x2;
  simplifiedFlatCoordinates[simplifiedOffset++] = y2;
  return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */


function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    simplifiedOffset = quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset);
    simplifiedEnds.push(simplifiedOffset);
    offset = end;
  }

  return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */


function quantizeMultiArray(flatCoordinates, offset, endss, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    var simplifiedEnds = [];
    simplifiedOffset = quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
    simplifiedEndss.push(simplifiedEnds);
    offset = ends[ends.length - 1];
  }

  return simplifiedOffset;
}
},{"../../math.js":"ol/math.js"}],"ol/geom/flat/segments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;

/**
 * @module ol/geom/flat/segments
 */

/**
 * This function calls `callback` for each segment of the flat coordinates
 * array. If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns `false`.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {function(import("../../coordinate.js").Coordinate, import("../../coordinate.js").Coordinate): T} callback Function
 *     called for each segment.
 * @return {T|boolean} Value.
 * @template T
 */
function forEach(flatCoordinates, offset, end, stride, callback) {
  var point1 = [flatCoordinates[offset], flatCoordinates[offset + 1]];
  var point2 = [];
  var ret;

  for (; offset + stride < end; offset += stride) {
    point2[0] = flatCoordinates[offset + stride];
    point2[1] = flatCoordinates[offset + stride + 1];
    ret = callback(point1, point2);

    if (ret) {
      return ret;
    }

    point1[0] = point2[0];
    point1[1] = point2[1];
  }

  return false;
}
},{}],"ol/geom/flat/inflate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inflateCoordinates = inflateCoordinates;
exports.inflateCoordinatesArray = inflateCoordinatesArray;
exports.inflateMultiCoordinatesArray = inflateMultiCoordinatesArray;

/**
 * @module ol/geom/flat/inflate
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Array<import("../../coordinate.js").Coordinate>=} opt_coordinates Coordinates.
 * @return {Array<import("../../coordinate.js").Coordinate>} Coordinates.
 */
function inflateCoordinates(flatCoordinates, offset, end, stride, opt_coordinates) {
  var coordinates = opt_coordinates !== undefined ? opt_coordinates : [];
  var i = 0;

  for (var j = offset; j < end; j += stride) {
    coordinates[i++] = flatCoordinates.slice(j, j + stride);
  }

  coordinates.length = i;
  return coordinates;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>=} opt_coordinatess Coordinatess.
 * @return {Array<Array<import("../../coordinate.js").Coordinate>>} Coordinatess.
 */


function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, opt_coordinatess) {
  var coordinatess = opt_coordinatess !== undefined ? opt_coordinatess : [];
  var i = 0;

  for (var j = 0, jj = ends.length; j < jj; ++j) {
    var end = ends[j];
    coordinatess[i++] = inflateCoordinates(flatCoordinates, offset, end, stride, coordinatess[i]);
    offset = end;
  }

  coordinatess.length = i;
  return coordinatess;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>=} opt_coordinatesss
 *     Coordinatesss.
 * @return {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} Coordinatesss.
 */


function inflateMultiCoordinatesArray(flatCoordinates, offset, endss, stride, opt_coordinatesss) {
  var coordinatesss = opt_coordinatesss !== undefined ? opt_coordinatesss : [];
  var i = 0;

  for (var j = 0, jj = endss.length; j < jj; ++j) {
    var ends = endss[j];
    coordinatesss[i++] = inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatesss[i]);
    offset = ends[ends.length - 1];
  }

  coordinatesss.length = i;
  return coordinatesss;
}
},{}],"ol/geom/flat/interpolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolatePoint = interpolatePoint;
exports.lineStringCoordinateAtM = lineStringCoordinateAtM;
exports.lineStringsCoordinateAtM = lineStringsCoordinateAtM;

var _array = require("../../array.js");

var _math = require("../../math.js");

/**
 * @module ol/geom/flat/interpolate
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} fraction Fraction.
 * @param {Array<number>=} opt_dest Destination.
 * @param {number=} opt_dimension Destination dimension (default is `2`)
 * @return {Array<number>} Destination.
 */
function interpolatePoint(flatCoordinates, offset, end, stride, fraction, opt_dest, opt_dimension) {
  var o, t;
  var n = (end - offset) / stride;

  if (n === 1) {
    o = offset;
  } else if (n === 2) {
    o = offset;
    t = fraction;
  } else if (n !== 0) {
    var x1 = flatCoordinates[offset];
    var y1 = flatCoordinates[offset + 1];
    var length_1 = 0;
    var cumulativeLengths = [0];

    for (var i = offset + stride; i < end; i += stride) {
      var x2 = flatCoordinates[i];
      var y2 = flatCoordinates[i + 1];
      length_1 += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      cumulativeLengths.push(length_1);
      x1 = x2;
      y1 = y2;
    }

    var target = fraction * length_1;
    var index = (0, _array.binarySearch)(cumulativeLengths, target);

    if (index < 0) {
      t = (target - cumulativeLengths[-index - 2]) / (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
      o = offset + (-index - 2) * stride;
    } else {
      o = offset + index * stride;
    }
  }

  var dimension = opt_dimension > 1 ? opt_dimension : 2;
  var dest = opt_dest ? opt_dest : new Array(dimension);

  for (var i = 0; i < dimension; ++i) {
    dest[i] = o === undefined ? NaN : t === undefined ? flatCoordinates[o + i] : (0, _math.lerp)(flatCoordinates[o + i], flatCoordinates[o + stride + i], t);
  }

  return dest;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @return {import("../../coordinate.js").Coordinate} Coordinate.
 */


function lineStringCoordinateAtM(flatCoordinates, offset, end, stride, m, extrapolate) {
  if (end == offset) {
    return null;
  }

  var coordinate;

  if (m < flatCoordinates[offset + stride - 1]) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(offset, offset + stride);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  } else if (flatCoordinates[end - 1] < m) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(end - stride, end);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  } // FIXME use O(1) search


  if (m == flatCoordinates[offset + stride - 1]) {
    return flatCoordinates.slice(offset, offset + stride);
  }

  var lo = offset / stride;
  var hi = end / stride;

  while (lo < hi) {
    var mid = lo + hi >> 1;

    if (m < flatCoordinates[(mid + 1) * stride - 1]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  var m0 = flatCoordinates[lo * stride - 1];

  if (m == m0) {
    return flatCoordinates.slice((lo - 1) * stride, (lo - 1) * stride + stride);
  }

  var m1 = flatCoordinates[(lo + 1) * stride - 1];
  var t = (m - m0) / (m1 - m0);
  coordinate = [];

  for (var i = 0; i < stride - 1; ++i) {
    coordinate.push((0, _math.lerp)(flatCoordinates[(lo - 1) * stride + i], flatCoordinates[lo * stride + i], t));
  }

  coordinate.push(m);
  return coordinate;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @param {boolean} interpolate Interpolate.
 * @return {import("../../coordinate.js").Coordinate} Coordinate.
 */


function lineStringsCoordinateAtM(flatCoordinates, offset, ends, stride, m, extrapolate, interpolate) {
  if (interpolate) {
    return lineStringCoordinateAtM(flatCoordinates, offset, ends[ends.length - 1], stride, m, extrapolate);
  }

  var coordinate;

  if (m < flatCoordinates[stride - 1]) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(0, stride);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  }

  if (flatCoordinates[flatCoordinates.length - 1] < m) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(flatCoordinates.length - stride);
      coordinate[stride - 1] = m;
      return coordinate;
    } else {
      return null;
    }
  }

  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];

    if (offset == end) {
      continue;
    }

    if (m < flatCoordinates[offset + stride - 1]) {
      return null;
    } else if (m <= flatCoordinates[end - 1]) {
      return lineStringCoordinateAtM(flatCoordinates, offset, end, stride, m, false);
    }

    offset = end;
  }

  return null;
}
},{"../../array.js":"ol/array.js","../../math.js":"ol/math.js"}],"ol/geom/flat/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearRingContainsExtent = linearRingContainsExtent;
exports.linearRingContainsXY = linearRingContainsXY;
exports.linearRingsContainsXY = linearRingsContainsXY;
exports.linearRingssContainsXY = linearRingssContainsXY;

var _extent = require("../../extent.js");

/**
 * @module ol/geom/flat/contains
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} Contains extent.
 */
function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
  var outside = (0, _extent.forEachCorner)(extent,
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains (x, y).
   */
  function (coordinate) {
    return !linearRingContainsXY(flatCoordinates, offset, end, stride, coordinate[0], coordinate[1]);
  });
  return !outside;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */


function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
  // http://geomalgorithms.com/a03-_inclusion.html
  // Copyright 2000 softSurfer, 2012 Dan Sunday
  // This code may be freely used and modified for any purpose
  // providing that this copyright notice is included with it.
  // SoftSurfer makes no warranty for this code, and cannot be held
  // liable for any real or imagined damage resulting from its use.
  // Users of this code must verify correctness for their application.
  var wn = 0;
  var x1 = flatCoordinates[end - stride];
  var y1 = flatCoordinates[end - stride + 1];

  for (; offset < end; offset += stride) {
    var x2 = flatCoordinates[offset];
    var y2 = flatCoordinates[offset + 1];

    if (y1 <= y) {
      if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
        wn++;
      }
    } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
      wn--;
    }

    x1 = x2;
    y1 = y2;
  }

  return wn !== 0;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */


function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
  if (ends.length === 0) {
    return false;
  }

  if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
    return false;
  }

  for (var i = 1, ii = ends.length; i < ii; ++i) {
    if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) {
      return false;
    }
  }

  return true;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */


function linearRingssContainsXY(flatCoordinates, offset, endss, stride, x, y) {
  if (endss.length === 0) {
    return false;
  }

  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];

    if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
      return true;
    }

    offset = ends[ends.length - 1];
  }

  return false;
}
},{"../../extent.js":"ol/extent.js"}],"ol/geom/flat/intersectsextent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersectsLineString = intersectsLineString;
exports.intersectsLineStringArray = intersectsLineStringArray;
exports.intersectsLinearRing = intersectsLinearRing;
exports.intersectsLinearRingArray = intersectsLinearRingArray;
exports.intersectsLinearRingMultiArray = intersectsLinearRingMultiArray;

var _extent = require("../../extent.js");

var _segments = require("./segments.js");

var _contains = require("./contains.js");

/**
 * @module ol/geom/flat/intersectsextent
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLineString(flatCoordinates, offset, end, stride, extent) {
  var coordinatesExtent = (0, _extent.extendFlatCoordinates)((0, _extent.createEmpty)(), flatCoordinates, offset, end, stride);

  if (!(0, _extent.intersects)(extent, coordinatesExtent)) {
    return false;
  }

  if ((0, _extent.containsExtent)(extent, coordinatesExtent)) {
    return true;
  }

  if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) {
    return true;
  }

  if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) {
    return true;
  }

  return (0, _segments.forEach)(flatCoordinates, offset, end, stride,
  /**
   * @param {import("../../coordinate.js").Coordinate} point1 Start point.
   * @param {import("../../coordinate.js").Coordinate} point2 End point.
   * @return {boolean} `true` if the segment and the extent intersect,
   *     `false` otherwise.
   */
  function (point1, point2) {
    return (0, _extent.intersectsSegment)(extent, point1, point2);
  });
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */


function intersectsLineStringArray(flatCoordinates, offset, ends, stride, extent) {
  for (var i = 0, ii = ends.length; i < ii; ++i) {
    if (intersectsLineString(flatCoordinates, offset, ends[i], stride, extent)) {
      return true;
    }

    offset = ends[i];
  }

  return false;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */


function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
  if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
    return true;
  }

  if ((0, _contains.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[0], extent[1])) {
    return true;
  }

  if ((0, _contains.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[0], extent[3])) {
    return true;
  }

  if ((0, _contains.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[2], extent[1])) {
    return true;
  }

  if ((0, _contains.linearRingContainsXY)(flatCoordinates, offset, end, stride, extent[2], extent[3])) {
    return true;
  }

  return false;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */


function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
  if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
    return false;
  }

  if (ends.length === 1) {
    return true;
  }

  for (var i = 1, ii = ends.length; i < ii; ++i) {
    if ((0, _contains.linearRingContainsExtent)(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
      if (!intersectsLineString(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
        return false;
      }
    }
  }

  return true;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */


function intersectsLinearRingMultiArray(flatCoordinates, offset, endss, stride, extent) {
  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];

    if (intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent)) {
      return true;
    }

    offset = ends[ends.length - 1];
  }

  return false;
}
},{"../../extent.js":"ol/extent.js","./segments.js":"ol/geom/flat/segments.js","./contains.js":"ol/geom/flat/contains.js"}],"ol/geom/flat/length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineStringLength = lineStringLength;
exports.linearRingLength = linearRingLength;

/**
 * @module ol/geom/flat/length
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Length.
 */
function lineStringLength(flatCoordinates, offset, end, stride) {
  var x1 = flatCoordinates[offset];
  var y1 = flatCoordinates[offset + 1];
  var length = 0;

  for (var i = offset + stride; i < end; i += stride) {
    var x2 = flatCoordinates[i];
    var y2 = flatCoordinates[i + 1];
    length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    x1 = x2;
    y1 = y2;
  }

  return length;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Perimeter.
 */


function linearRingLength(flatCoordinates, offset, end, stride) {
  var perimeter = lineStringLength(flatCoordinates, offset, end, stride);
  var dx = flatCoordinates[end - stride] - flatCoordinates[offset];
  var dy = flatCoordinates[end - stride + 1] - flatCoordinates[offset + 1];
  perimeter += Math.sqrt(dx * dx + dy * dy);
  return perimeter;
}
},{}],"ol/geom/LineString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryLayout = _interopRequireDefault(require("./GeometryLayout.js"));

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _closest = require("./flat/closest.js");

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _simplify = require("./flat/simplify.js");

var _array = require("../array.js");

var _segments = require("./flat/segments.js");

var _inflate = require("./flat/inflate.js");

var _interpolate = require("./flat/interpolate.js");

var _intersectsextent = require("./flat/intersectsextent.js");

var _length = require("./flat/length.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/LineString
 */


/**
 * @classdesc
 * Linestring geometry.
 *
 * @api
 */
var LineString =
/** @class */
function (_super) {
  __extends(LineString, _super);
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `opt_layout` are also accepted.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   */


  function LineString(coordinates, opt_layout) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */


    _this.flatMidpoint_ = null;
    /**
     * @private
     * @type {number}
     */

    _this.flatMidpointRevision_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.maxDelta_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.maxDeltaRevision_ = -1;

    if (opt_layout !== undefined && !Array.isArray(coordinates[0])) {
      _this.setFlatCoordinates(opt_layout,
      /** @type {Array<number>} */
      coordinates);
    } else {
      _this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      coordinates, opt_layout);
    }

    return _this;
  }
  /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */


  LineString.prototype.appendCoordinate = function (coordinate) {
    if (!this.flatCoordinates) {
      this.flatCoordinates = coordinate.slice();
    } else {
      (0, _array.extend)(this.flatCoordinates, coordinate);
    }

    this.changed();
  };
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */


  LineString.prototype.clone = function () {
    return new LineString(this.flatCoordinates.slice(), this.layout);
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  LineString.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0, _extent.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }

    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt((0, _closest.maxSquaredDelta)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
      this.maxDeltaRevision_ = this.getRevision();
    }

    return (0, _closest.assignClosestPoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, false, x, y, closestPoint, minSquaredDistance);
  };
  /**
   * Iterate over each segment, calling the provided callback.
   * If the callback returns a truthy value the function returns that
   * value immediately. Otherwise the function returns `false`.
   *
   * @param {function(this: S, import("../coordinate.js").Coordinate, import("../coordinate.js").Coordinate): T} callback Function
   *     called for each segment. The function will receive two arguments, the start and end coordinates of the segment.
   * @return {T|boolean} Value.
   * @template T,S
   * @api
   */


  LineString.prototype.forEachSegment = function (callback) {
    return (0, _segments.forEach)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, callback);
  };
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * @param {number} m M.
   * @param {boolean=} opt_extrapolate Extrapolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate} Coordinate.
   * @api
   */


  LineString.prototype.getCoordinateAtM = function (m, opt_extrapolate) {
    if (this.layout != _GeometryLayout.default.XYM && this.layout != _GeometryLayout.default.XYZM) {
      return null;
    }

    var extrapolate = opt_extrapolate !== undefined ? opt_extrapolate : false;
    return (0, _interpolate.lineStringCoordinateAtM)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, m, extrapolate);
  };
  /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */


  LineString.prototype.getCoordinates = function () {
    return (0, _inflate.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  };
  /**
   * Return the coordinate at the provided fraction along the linestring.
   * The `fraction` is a number between 0 and 1, where 0 is the start of the
   * linestring and 1 is the end.
   * @param {number} fraction Fraction.
   * @param {import("../coordinate.js").Coordinate=} opt_dest Optional coordinate whose values will
   *     be modified. If not provided, a new coordinate will be returned.
   * @return {import("../coordinate.js").Coordinate} Coordinate of the interpolated point.
   * @api
   */


  LineString.prototype.getCoordinateAt = function (fraction, opt_dest) {
    return (0, _interpolate.interpolatePoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, fraction, opt_dest, this.stride);
  };
  /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */


  LineString.prototype.getLength = function () {
    return (0, _length.lineStringLength)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  };
  /**
   * @return {Array<number>} Flat midpoint.
   */


  LineString.prototype.getFlatMidpoint = function () {
    if (this.flatMidpointRevision_ != this.getRevision()) {
      this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_);
      this.flatMidpointRevision_ = this.getRevision();
    }

    return this.flatMidpoint_;
  };
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} Simplified LineString.
   * @protected
   */


  LineString.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
    var simplifiedFlatCoordinates = [];
    simplifiedFlatCoordinates.length = (0, _simplify.douglasPeucker)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    return new LineString(simplifiedFlatCoordinates, _GeometryLayout.default.XY);
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  LineString.prototype.getType = function () {
    return _GeometryType.default.LINE_STRING;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  LineString.prototype.intersectsExtent = function (extent) {
    return (0, _intersectsextent.intersectsLineString)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
  };
  /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  LineString.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 1);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    this.flatCoordinates.length = (0, _deflate.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  };

  return LineString;
}(_SimpleGeometry.default);

var _default = LineString;
exports.default = _default;
},{"./GeometryLayout.js":"ol/geom/GeometryLayout.js","./GeometryType.js":"ol/geom/GeometryType.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","./flat/closest.js":"ol/geom/flat/closest.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","./flat/simplify.js":"ol/geom/flat/simplify.js","../array.js":"ol/array.js","./flat/segments.js":"ol/geom/flat/segments.js","./flat/inflate.js":"ol/geom/flat/inflate.js","./flat/interpolate.js":"ol/geom/flat/interpolate.js","./flat/intersectsextent.js":"ol/geom/flat/intersectsextent.js","./flat/length.js":"ol/geom/flat/length.js"}],"ol/MapEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Event = _interopRequireDefault(require("./events/Event.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/MapEvent
 */


/**
 * @classdesc
 * Events emitted as map events are instances of this type.
 * See {@link module:ol/PluggableMap~PluggableMap} for which events trigger a map event.
 */
var MapEvent =
/** @class */
function (_super) {
  __extends(MapEvent, _super);
  /**
   * @param {string} type Event type.
   * @param {import("./PluggableMap.js").default} map Map.
   * @param {?import("./PluggableMap.js").FrameState=} opt_frameState Frame state.
   */


  function MapEvent(type, map, opt_frameState) {
    var _this = _super.call(this, type) || this;
    /**
     * The map where the event occurred.
     * @type {import("./PluggableMap.js").default}
     * @api
     */


    _this.map = map;
    /**
     * The frame state at the time of the event.
     * @type {?import("./PluggableMap.js").FrameState}
     * @api
     */

    _this.frameState = opt_frameState !== undefined ? opt_frameState : null;
    return _this;
  }

  return MapEvent;
}(_Event.default);

var _default = MapEvent;
exports.default = _default;
},{"./events/Event.js":"ol/events/Event.js"}],"ol/MapBrowserEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MapEvent = _interopRequireDefault(require("./MapEvent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/MapBrowserEvent
 */


/**
 * @classdesc
 * Events emitted as map browser events are instances of this type.
 * See {@link module:ol/PluggableMap~PluggableMap} for which events trigger a map browser event.
 * @template {UIEvent} EVENT
 */
var MapBrowserEvent =
/** @class */
function (_super) {
  __extends(MapBrowserEvent, _super);
  /**
   * @param {string} type Event type.
   * @param {import("./PluggableMap.js").default} map Map.
   * @param {EVENT} originalEvent Original event.
   * @param {boolean=} opt_dragging Is the map currently being dragged?
   * @param {?import("./PluggableMap.js").FrameState=} opt_frameState Frame state.
   */


  function MapBrowserEvent(type, map, originalEvent, opt_dragging, opt_frameState) {
    var _this = _super.call(this, type, map, opt_frameState) || this;
    /**
     * The original browser event.
     * @const
     * @type {EVENT}
     * @api
     */


    _this.originalEvent = originalEvent;
    /**
     * The map pixel relative to the viewport corresponding to the original browser event.
     * @type {?import("./pixel.js").Pixel}
     */

    _this.pixel_ = null;
    /**
     * The coordinate in the user projection corresponding to the original browser event.
     * @type {?import("./coordinate.js").Coordinate}
     */

    _this.coordinate_ = null;
    /**
     * Indicates if the map is currently being dragged. Only set for
     * `POINTERDRAG` and `POINTERMOVE` events. Default is `false`.
     *
     * @type {boolean}
     * @api
     */

    _this.dragging = opt_dragging !== undefined ? opt_dragging : false;
    return _this;
  }

  Object.defineProperty(MapBrowserEvent.prototype, "pixel", {
    /**
     * The map pixel relative to the viewport corresponding to the original event.
     * @type {import("./pixel.js").Pixel}
     * @api
     */
    get: function get() {
      if (!this.pixel_) {
        this.pixel_ = this.map.getEventPixel(this.originalEvent);
      }

      return this.pixel_;
    },
    set: function set(pixel) {
      this.pixel_ = pixel;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MapBrowserEvent.prototype, "coordinate", {
    /**
     * The coordinate corresponding to the original browser event.  This will be in the user
     * projection if one is set.  Otherwise it will be in the view projection.
     * @type {import("./coordinate.js").Coordinate}
     * @api
     */
    get: function get() {
      if (!this.coordinate_) {
        this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
      }

      return this.coordinate_;
    },
    set: function set(coordinate) {
      this.coordinate_ = coordinate;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Prevents the default browser action.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
   * @api
   */

  MapBrowserEvent.prototype.preventDefault = function () {
    _super.prototype.preventDefault.call(this);

    this.originalEvent.preventDefault();
  };
  /**
   * Prevents further propagation of the current event.
   * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
   * @api
   */


  MapBrowserEvent.prototype.stopPropagation = function () {
    _super.prototype.stopPropagation.call(this);

    this.originalEvent.stopPropagation();
  };

  return MapBrowserEvent;
}(_MapEvent.default);

var _default = MapBrowserEvent;
exports.default = _default;
},{"./MapEvent.js":"ol/MapEvent.js"}],"ol/MapBrowserEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EventType = _interopRequireDefault(require("./events/EventType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/MapBrowserEventType
 */

/**
 * Constants for event names.
 * @enum {string}
 */
var _default = {
  /**
   * A true single click with no dragging and no double click. Note that this
   * event is delayed by 250 ms to ensure that it is not a double click.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
   * @api
   */
  SINGLECLICK: 'singleclick',

  /**
   * A click with no dragging. A double click will fire two of this.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
   * @api
   */
  CLICK: _EventType.default.CLICK,

  /**
   * A true double click, with no dragging.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
   * @api
   */
  DBLCLICK: _EventType.default.DBLCLICK,

  /**
   * Triggered when a pointer is dragged.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
   * @api
   */
  POINTERDRAG: 'pointerdrag',

  /**
   * Triggered when a pointer is moved. Note that on touch devices this is
   * triggered when the map is panned, so is not the same as mousemove.
   * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
   * @api
   */
  POINTERMOVE: 'pointermove',
  POINTERDOWN: 'pointerdown',
  POINTERUP: 'pointerup',
  POINTEROVER: 'pointerover',
  POINTEROUT: 'pointerout',
  POINTERENTER: 'pointerenter',
  POINTERLEAVE: 'pointerleave',
  POINTERCANCEL: 'pointercancel'
};
exports.default = _default;
},{"./events/EventType.js":"ol/events/EventType.js"}],"ol/geom/MultiLineString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryLayout = _interopRequireDefault(require("./GeometryLayout.js"));

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _LineString = _interopRequireDefault(require("./LineString.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _closest = require("./flat/closest.js");

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _simplify = require("./flat/simplify.js");

var _array = require("../array.js");

var _inflate = require("./flat/inflate.js");

var _interpolate = require("./flat/interpolate.js");

var _intersectsextent = require("./flat/intersectsextent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/MultiLineString
 */


/**
 * @classdesc
 * Multi-linestring geometry.
 *
 * @api
 */
var MultiLineString =
/** @class */
function (_super) {
  __extends(MultiLineString, _super);
  /**
   * @param {Array<Array<import("../coordinate.js").Coordinate>|LineString>|Array<number>} coordinates
   *     Coordinates or LineString geometries. (For internal use, flat coordinates in
   *     combination with `opt_layout` and `opt_ends` are also accepted.)
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @param {Array<number>=} opt_ends Flat coordinate ends for internal use.
   */


  function MultiLineString(coordinates, opt_layout, opt_ends) {
    var _this = _super.call(this) || this;
    /**
     * @type {Array<number>}
     * @private
     */


    _this.ends_ = [];
    /**
     * @private
     * @type {number}
     */

    _this.maxDelta_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.maxDeltaRevision_ = -1;

    if (Array.isArray(coordinates[0])) {
      _this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      coordinates, opt_layout);
    } else if (opt_layout !== undefined && opt_ends) {
      _this.setFlatCoordinates(opt_layout,
      /** @type {Array<number>} */
      coordinates);

      _this.ends_ = opt_ends;
    } else {
      var layout = _this.getLayout();

      var lineStrings =
      /** @type {Array<LineString>} */
      coordinates;
      var flatCoordinates = [];
      var ends = [];

      for (var i = 0, ii = lineStrings.length; i < ii; ++i) {
        var lineString = lineStrings[i];

        if (i === 0) {
          layout = lineString.getLayout();
        }

        (0, _array.extend)(flatCoordinates, lineString.getFlatCoordinates());
        ends.push(flatCoordinates.length);
      }

      _this.setFlatCoordinates(layout, flatCoordinates);

      _this.ends_ = ends;
    }

    return _this;
  }
  /**
   * Append the passed linestring to the multilinestring.
   * @param {LineString} lineString LineString.
   * @api
   */


  MultiLineString.prototype.appendLineString = function (lineString) {
    if (!this.flatCoordinates) {
      this.flatCoordinates = lineString.getFlatCoordinates().slice();
    } else {
      (0, _array.extend)(this.flatCoordinates, lineString.getFlatCoordinates().slice());
    }

    this.ends_.push(this.flatCoordinates.length);
    this.changed();
  };
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   */


  MultiLineString.prototype.clone = function () {
    return new MultiLineString(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  MultiLineString.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0, _extent.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }

    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt((0, _closest.arrayMaxSquaredDelta)(this.flatCoordinates, 0, this.ends_, this.stride, 0));
      this.maxDeltaRevision_ = this.getRevision();
    }

    return (0, _closest.assignClosestArrayPoint)(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, false, x, y, closestPoint, minSquaredDistance);
  };
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `opt_extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `opt_extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * `opt_interpolate` controls interpolation between consecutive LineStrings
   * within the MultiLineString. If `opt_interpolate` is `true` the coordinates
   * will be linearly interpolated between the last coordinate of one LineString
   * and the first coordinate of the next LineString.  If `opt_interpolate` is
   * `false` then the function will return `null` for Ms falling between
   * LineStrings.
   *
   * @param {number} m M.
   * @param {boolean=} opt_extrapolate Extrapolate. Default is `false`.
   * @param {boolean=} opt_interpolate Interpolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate} Coordinate.
   * @api
   */


  MultiLineString.prototype.getCoordinateAtM = function (m, opt_extrapolate, opt_interpolate) {
    if (this.layout != _GeometryLayout.default.XYM && this.layout != _GeometryLayout.default.XYZM || this.flatCoordinates.length === 0) {
      return null;
    }

    var extrapolate = opt_extrapolate !== undefined ? opt_extrapolate : false;
    var interpolate = opt_interpolate !== undefined ? opt_interpolate : false;
    return (0, _interpolate.lineStringsCoordinateAtM)(this.flatCoordinates, 0, this.ends_, this.stride, m, extrapolate, interpolate);
  };
  /**
   * Return the coordinates of the multilinestring.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */


  MultiLineString.prototype.getCoordinates = function () {
    return (0, _inflate.inflateCoordinatesArray)(this.flatCoordinates, 0, this.ends_, this.stride);
  };
  /**
   * @return {Array<number>} Ends.
   */


  MultiLineString.prototype.getEnds = function () {
    return this.ends_;
  };
  /**
   * Return the linestring at the specified index.
   * @param {number} index Index.
   * @return {LineString} LineString.
   * @api
   */


  MultiLineString.prototype.getLineString = function (index) {
    if (index < 0 || this.ends_.length <= index) {
      return null;
    }

    return new _LineString.default(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
  };
  /**
   * Return the linestrings of this multilinestring.
   * @return {Array<LineString>} LineStrings.
   * @api
   */


  MultiLineString.prototype.getLineStrings = function () {
    var flatCoordinates = this.flatCoordinates;
    var ends = this.ends_;
    var layout = this.layout;
    /** @type {Array<LineString>} */

    var lineStrings = [];
    var offset = 0;

    for (var i = 0, ii = ends.length; i < ii; ++i) {
      var end = ends[i];
      var lineString = new _LineString.default(flatCoordinates.slice(offset, end), layout);
      lineStrings.push(lineString);
      offset = end;
    }

    return lineStrings;
  };
  /**
   * @return {Array<number>} Flat midpoints.
   */


  MultiLineString.prototype.getFlatMidpoints = function () {
    var midpoints = [];
    var flatCoordinates = this.flatCoordinates;
    var offset = 0;
    var ends = this.ends_;
    var stride = this.stride;

    for (var i = 0, ii = ends.length; i < ii; ++i) {
      var end = ends[i];
      var midpoint = (0, _interpolate.interpolatePoint)(flatCoordinates, offset, end, stride, 0.5);
      (0, _array.extend)(midpoints, midpoint);
      offset = end;
    }

    return midpoints;
  };
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiLineString} Simplified MultiLineString.
   * @protected
   */


  MultiLineString.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
    var simplifiedFlatCoordinates = [];
    var simplifiedEnds = [];
    simplifiedFlatCoordinates.length = (0, _simplify.douglasPeuckerArray)(this.flatCoordinates, 0, this.ends_, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0, simplifiedEnds);
    return new MultiLineString(simplifiedFlatCoordinates, _GeometryLayout.default.XY, simplifiedEnds);
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  MultiLineString.prototype.getType = function () {
    return _GeometryType.default.MULTI_LINE_STRING;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  MultiLineString.prototype.intersectsExtent = function (extent) {
    return (0, _intersectsextent.intersectsLineStringArray)(this.flatCoordinates, 0, this.ends_, this.stride, extent);
  };
  /**
   * Set the coordinates of the multilinestring.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {GeometryLayout=} opt_layout Layout.
   * @api
   */


  MultiLineString.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 2);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    var ends = (0, _deflate.deflateCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
    this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
    this.changed();
  };

  return MultiLineString;
}(_SimpleGeometry.default);

var _default = MultiLineString;
exports.default = _default;
},{"./GeometryLayout.js":"ol/geom/GeometryLayout.js","./GeometryType.js":"ol/geom/GeometryType.js","./LineString.js":"ol/geom/LineString.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","./flat/closest.js":"ol/geom/flat/closest.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","./flat/simplify.js":"ol/geom/flat/simplify.js","../array.js":"ol/array.js","./flat/inflate.js":"ol/geom/flat/inflate.js","./flat/interpolate.js":"ol/geom/flat/interpolate.js","./flat/intersectsextent.js":"ol/geom/flat/intersectsextent.js"}],"ol/geom/Point.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _math = require("../math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/Point
 */


/**
 * @classdesc
 * Point geometry.
 *
 * @api
 */
var Point =
/** @class */
function (_super) {
  __extends(Point, _super);
  /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   */


  function Point(coordinates, opt_layout) {
    var _this = _super.call(this) || this;

    _this.setCoordinates(coordinates, opt_layout);

    return _this;
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */


  Point.prototype.clone = function () {
    var point = new Point(this.flatCoordinates.slice(), this.layout);
    return point;
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  Point.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    var flatCoordinates = this.flatCoordinates;
    var squaredDistance = (0, _math.squaredDistance)(x, y, flatCoordinates[0], flatCoordinates[1]);

    if (squaredDistance < minSquaredDistance) {
      var stride = this.stride;

      for (var i = 0; i < stride; ++i) {
        closestPoint[i] = flatCoordinates[i];
      }

      closestPoint.length = stride;
      return squaredDistance;
    } else {
      return minSquaredDistance;
    }
  };
  /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   */


  Point.prototype.getCoordinates = function () {
    return !this.flatCoordinates ? [] : this.flatCoordinates.slice();
  };
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */


  Point.prototype.computeExtent = function (extent) {
    return (0, _extent.createOrUpdateFromCoordinate)(this.flatCoordinates, extent);
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  Point.prototype.getType = function () {
    return _GeometryType.default.POINT;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  Point.prototype.intersectsExtent = function (extent) {
    return (0, _extent.containsXY)(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
  };
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  Point.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 0);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    this.flatCoordinates.length = (0, _deflate.deflateCoordinate)(this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  };

  return Point;
}(_SimpleGeometry.default);

var _default = Point;
exports.default = _default;
},{"./GeometryType.js":"ol/geom/GeometryType.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","../math.js":"ol/math.js"}],"ol/geom/MultiPoint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _Point = _interopRequireDefault(require("./Point.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _array = require("../array.js");

var _inflate = require("./flat/inflate.js");

var _math = require("../math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/MultiPoint
 */


/**
 * @classdesc
 * Multi-point geometry.
 *
 * @api
 */
var MultiPoint =
/** @class */
function (_super) {
  __extends(MultiPoint, _super);
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `opt_layout` are also accepted.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   */


  function MultiPoint(coordinates, opt_layout) {
    var _this = _super.call(this) || this;

    if (opt_layout && !Array.isArray(coordinates[0])) {
      _this.setFlatCoordinates(opt_layout,
      /** @type {Array<number>} */
      coordinates);
    } else {
      _this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      coordinates, opt_layout);
    }

    return _this;
  }
  /**
   * Append the passed point to this multipoint.
   * @param {Point} point Point.
   * @api
   */


  MultiPoint.prototype.appendPoint = function (point) {
    if (!this.flatCoordinates) {
      this.flatCoordinates = point.getFlatCoordinates().slice();
    } else {
      (0, _array.extend)(this.flatCoordinates, point.getFlatCoordinates());
    }

    this.changed();
  };
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */


  MultiPoint.prototype.clone = function () {
    var multiPoint = new MultiPoint(this.flatCoordinates.slice(), this.layout);
    return multiPoint;
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  MultiPoint.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0, _extent.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }

    var flatCoordinates = this.flatCoordinates;
    var stride = this.stride;

    for (var i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      var squaredDistance = (0, _math.squaredDistance)(x, y, flatCoordinates[i], flatCoordinates[i + 1]);

      if (squaredDistance < minSquaredDistance) {
        minSquaredDistance = squaredDistance;

        for (var j = 0; j < stride; ++j) {
          closestPoint[j] = flatCoordinates[i + j];
        }

        closestPoint.length = stride;
      }
    }

    return minSquaredDistance;
  };
  /**
   * Return the coordinates of the multipoint.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */


  MultiPoint.prototype.getCoordinates = function () {
    return (0, _inflate.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  };
  /**
   * Return the point at the specified index.
   * @param {number} index Index.
   * @return {Point} Point.
   * @api
   */


  MultiPoint.prototype.getPoint = function (index) {
    var n = !this.flatCoordinates ? 0 : this.flatCoordinates.length / this.stride;

    if (index < 0 || n <= index) {
      return null;
    }

    return new _Point.default(this.flatCoordinates.slice(index * this.stride, (index + 1) * this.stride), this.layout);
  };
  /**
   * Return the points of this multipoint.
   * @return {Array<Point>} Points.
   * @api
   */


  MultiPoint.prototype.getPoints = function () {
    var flatCoordinates = this.flatCoordinates;
    var layout = this.layout;
    var stride = this.stride;
    /** @type {Array<Point>} */

    var points = [];

    for (var i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      var point = new _Point.default(flatCoordinates.slice(i, i + stride), layout);
      points.push(point);
    }

    return points;
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  MultiPoint.prototype.getType = function () {
    return _GeometryType.default.MULTI_POINT;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  MultiPoint.prototype.intersectsExtent = function (extent) {
    var flatCoordinates = this.flatCoordinates;
    var stride = this.stride;

    for (var i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      var x = flatCoordinates[i];
      var y = flatCoordinates[i + 1];

      if ((0, _extent.containsXY)(extent, x, y)) {
        return true;
      }
    }

    return false;
  };
  /**
   * Set the coordinates of the multipoint.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  MultiPoint.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 1);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    this.flatCoordinates.length = (0, _deflate.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  };

  return MultiPoint;
}(_SimpleGeometry.default);

var _default = MultiPoint;
exports.default = _default;
},{"./GeometryType.js":"ol/geom/GeometryType.js","./Point.js":"ol/geom/Point.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","../array.js":"ol/array.js","./flat/inflate.js":"ol/geom/flat/inflate.js","../math.js":"ol/math.js"}],"ol/geom/flat/area.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearRing = linearRing;
exports.linearRings = linearRings;
exports.linearRingss = linearRingss;

/**
 * @module ol/geom/flat/area
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Area.
 */
function linearRing(flatCoordinates, offset, end, stride) {
  var twiceArea = 0;
  var x1 = flatCoordinates[end - stride];
  var y1 = flatCoordinates[end - stride + 1];

  for (; offset < end; offset += stride) {
    var x2 = flatCoordinates[offset];
    var y2 = flatCoordinates[offset + 1];
    twiceArea += y1 * x2 - x1 * y2;
    x1 = x2;
    y1 = y2;
  }

  return twiceArea / 2;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @return {number} Area.
 */


function linearRings(flatCoordinates, offset, ends, stride) {
  var area = 0;

  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    area += linearRing(flatCoordinates, offset, end, stride);
    offset = end;
  }

  return area;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {number} Area.
 */


function linearRingss(flatCoordinates, offset, endss, stride) {
  var area = 0;

  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    area += linearRings(flatCoordinates, offset, ends, stride);
    offset = ends[ends.length - 1];
  }

  return area;
}
},{}],"ol/geom/LinearRing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryLayout = _interopRequireDefault(require("./GeometryLayout.js"));

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _closest = require("./flat/closest.js");

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _simplify = require("./flat/simplify.js");

var _inflate = require("./flat/inflate.js");

var _area = require("./flat/area.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/LinearRing
 */


/**
 * @classdesc
 * Linear ring geometry. Only used as part of polygon; cannot be rendered
 * on its own.
 *
 * @api
 */
var LinearRing =
/** @class */
function (_super) {
  __extends(LinearRing, _super);
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `opt_layout` are also accepted.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   */


  function LinearRing(coordinates, opt_layout) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {number}
     */


    _this.maxDelta_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.maxDeltaRevision_ = -1;

    if (opt_layout !== undefined && !Array.isArray(coordinates[0])) {
      _this.setFlatCoordinates(opt_layout,
      /** @type {Array<number>} */
      coordinates);
    } else {
      _this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      coordinates, opt_layout);
    }

    return _this;
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */


  LinearRing.prototype.clone = function () {
    return new LinearRing(this.flatCoordinates.slice(), this.layout);
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  LinearRing.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0, _extent.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }

    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt((0, _closest.maxSquaredDelta)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
      this.maxDeltaRevision_ = this.getRevision();
    }

    return (0, _closest.assignClosestPoint)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
  };
  /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */


  LinearRing.prototype.getArea = function () {
    return (0, _area.linearRing)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  };
  /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */


  LinearRing.prototype.getCoordinates = function () {
    return (0, _inflate.inflateCoordinates)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
  };
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   */


  LinearRing.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
    var simplifiedFlatCoordinates = [];
    simplifiedFlatCoordinates.length = (0, _simplify.douglasPeucker)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    return new LinearRing(simplifiedFlatCoordinates, _GeometryLayout.default.XY);
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  LinearRing.prototype.getType = function () {
    return _GeometryType.default.LINEAR_RING;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  LinearRing.prototype.intersectsExtent = function (extent) {
    return false;
  };
  /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  LinearRing.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 1);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    this.flatCoordinates.length = (0, _deflate.deflateCoordinates)(this.flatCoordinates, 0, coordinates, this.stride);
    this.changed();
  };

  return LinearRing;
}(_SimpleGeometry.default);

var _default = LinearRing;
exports.default = _default;
},{"./GeometryLayout.js":"ol/geom/GeometryLayout.js","./GeometryType.js":"ol/geom/GeometryType.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","./flat/closest.js":"ol/geom/flat/closest.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","./flat/simplify.js":"ol/geom/flat/simplify.js","./flat/inflate.js":"ol/geom/flat/inflate.js","./flat/area.js":"ol/geom/flat/area.js"}],"ol/geom/flat/interiorpoint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInteriorPointOfArray = getInteriorPointOfArray;
exports.getInteriorPointsOfMultiArray = getInteriorPointsOfMultiArray;

var _contains = require("./contains.js");

var _array = require("../../array.js");

/**
 * @module ol/geom/flat/interiorpoint
 */

/**
 * Calculates a point that is likely to lie in the interior of the linear rings.
 * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @param {number} flatCentersOffset Flat center offset.
 * @param {Array<number>=} opt_dest Destination.
 * @return {Array<number>} Destination point as XYM coordinate, where M is the
 * length of the horizontal intersection that the point belongs to.
 */
function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, opt_dest) {
  var i, ii, x, x1, x2, y1, y2;
  var y = flatCenters[flatCentersOffset + 1];
  /** @type {Array<number>} */

  var intersections = []; // Calculate intersections with the horizontal line

  for (var r = 0, rr = ends.length; r < rr; ++r) {
    var end = ends[r];
    x1 = flatCoordinates[end - stride];
    y1 = flatCoordinates[end - stride + 1];

    for (i = offset; i < end; i += stride) {
      x2 = flatCoordinates[i];
      y2 = flatCoordinates[i + 1];

      if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
        x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
        intersections.push(x);
      }

      x1 = x2;
      y1 = y2;
    }
  } // Find the longest segment of the horizontal line that has its center point
  // inside the linear ring.


  var pointX = NaN;
  var maxSegmentLength = -Infinity;
  intersections.sort(_array.numberSafeCompareFunction);
  x1 = intersections[0];

  for (i = 1, ii = intersections.length; i < ii; ++i) {
    x2 = intersections[i];
    var segmentLength = Math.abs(x2 - x1);

    if (segmentLength > maxSegmentLength) {
      x = (x1 + x2) / 2;

      if ((0, _contains.linearRingsContainsXY)(flatCoordinates, offset, ends, stride, x, y)) {
        pointX = x;
        maxSegmentLength = segmentLength;
      }
    }

    x1 = x2;
  }

  if (isNaN(pointX)) {
    // There is no horizontal line that has its center point inside the linear
    // ring.  Use the center of the the linear ring's extent.
    pointX = flatCenters[flatCentersOffset];
  }

  if (opt_dest) {
    opt_dest.push(pointX, y, maxSegmentLength);
    return opt_dest;
  } else {
    return [pointX, y, maxSegmentLength];
  }
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @return {Array<number>} Interior points as XYM coordinates, where M is the
 * length of the horizontal intersection that the point belongs to.
 */


function getInteriorPointsOfMultiArray(flatCoordinates, offset, endss, stride, flatCenters) {
  var interiorPoints = [];

  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    interiorPoints = getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, 2 * i, interiorPoints);
    offset = ends[ends.length - 1];
  }

  return interiorPoints;
}
},{"./contains.js":"ol/geom/flat/contains.js","../../array.js":"ol/array.js"}],"ol/geom/flat/reverse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordinates = coordinates;

/**
 * @module ol/geom/flat/reverse
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 */
function coordinates(flatCoordinates, offset, end, stride) {
  while (offset < end - stride) {
    for (var i = 0; i < stride; ++i) {
      var tmp = flatCoordinates[offset + i];
      flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
      flatCoordinates[end - stride + i] = tmp;
    }

    offset += stride;
    end -= stride;
  }
}
},{}],"ol/geom/flat/orient.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearRingIsClockwise = linearRingIsClockwise;
exports.linearRingsAreOriented = linearRingsAreOriented;
exports.linearRingssAreOriented = linearRingssAreOriented;
exports.orientLinearRings = orientLinearRings;
exports.orientLinearRingsArray = orientLinearRingsArray;

var _reverse = require("./reverse.js");

/**
 * @module ol/geom/flat/orient
 */

/**
 * Is the linear ring oriented clockwise in a coordinate system with a bottom-left
 * coordinate origin? For a coordinate system with a top-left coordinate origin,
 * the ring's orientation is clockwise when this function returns false.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {boolean} Is clockwise.
 */
function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
  // https://stackoverflow.com/a/1180256/2389327
  // https://en.wikipedia.org/wiki/Curve_orientation#Orientation_of_a_simple_polygon
  var firstVertexRepeated = true;

  for (var i = 0; i < stride; ++i) {
    if (flatCoordinates[offset + i] !== flatCoordinates[end - stride + i]) {
      firstVertexRepeated = false;
      break;
    }
  }

  if (firstVertexRepeated) {
    end -= stride;
  }

  var iMinVertex = findCornerVertex(flatCoordinates, offset, end, stride); // Orientation matrix:
  //     [ 1  xa  ya ]
  // O = | 1  xb  yb |
  //     [ 1  xc  yc ]

  var iPreviousVertex = iMinVertex - stride;

  if (iPreviousVertex < offset) {
    iPreviousVertex = end - stride;
  }

  var iNextVertex = iMinVertex + stride;

  if (iNextVertex >= end) {
    iNextVertex = offset;
  }

  var aX = flatCoordinates[iPreviousVertex];
  var aY = flatCoordinates[iPreviousVertex + 1];
  var bX = flatCoordinates[iMinVertex];
  var bY = flatCoordinates[iMinVertex + 1];
  var cX = flatCoordinates[iNextVertex];
  var cY = flatCoordinates[iNextVertex + 1];
  var determinant = bX * cY + aX * bY + aY * cX - (aY * bX + bY * cX + aX * cY);
  return determinant < 0;
} // Find vertex along one edge of bounding box.
// In this case, we find smallest y; in case of tie also smallest x.


function findCornerVertex(flatCoordinates, offset, end, stride) {
  var iMinVertex = -1;
  var minY = Infinity;
  var minXAtMinY = Infinity;

  for (var i = offset; i < end; i += stride) {
    var x = flatCoordinates[i];
    var y = flatCoordinates[i + 1];

    if (y > minY) {
      continue;
    }

    if (y == minY) {
      if (x >= minXAtMinY) {
        continue;
      }
    } // Minimum so far.


    iMinVertex = i;
    minY = y;
    minXAtMinY = x;
  }

  return iMinVertex;
}
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean=} opt_right Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */


function linearRingsAreOriented(flatCoordinates, offset, ends, stride, opt_right) {
  var right = opt_right !== undefined ? opt_right : false;

  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    var isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);

    if (i === 0) {
      if (right && isClockwise || !right && !isClockwise) {
        return false;
      }
    } else {
      if (right && !isClockwise || !right && isClockwise) {
        return false;
      }
    }

    offset = end;
  }

  return true;
}
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean=} opt_right Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */


function linearRingssAreOriented(flatCoordinates, offset, endss, stride, opt_right) {
  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];

    if (!linearRingsAreOriented(flatCoordinates, offset, ends, stride, opt_right)) {
      return false;
    }

    if (ends.length) {
      offset = ends[ends.length - 1];
    }
  }

  return true;
}
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {boolean=} opt_right Follow the right-hand rule for orientation.
 * @return {number} End.
 */


function orientLinearRings(flatCoordinates, offset, ends, stride, opt_right) {
  var right = opt_right !== undefined ? opt_right : false;

  for (var i = 0, ii = ends.length; i < ii; ++i) {
    var end = ends[i];
    var isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
    var reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;

    if (reverse) {
      (0, _reverse.coordinates)(flatCoordinates, offset, end, stride);
    }

    offset = end;
  }

  return offset;
}
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean=} opt_right Follow the right-hand rule for orientation.
 * @return {number} End.
 */


function orientLinearRingsArray(flatCoordinates, offset, endss, stride, opt_right) {
  for (var i = 0, ii = endss.length; i < ii; ++i) {
    offset = orientLinearRings(flatCoordinates, offset, endss[i], stride, opt_right);
  }

  return offset;
}
},{"./reverse.js":"ol/geom/flat/reverse.js"}],"ol/geom/Polygon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circular = circular;
exports.fromExtent = fromExtent;
exports.fromCircle = fromCircle;
exports.makeRegular = makeRegular;
exports.default = void 0;

var _GeometryLayout = _interopRequireDefault(require("./GeometryLayout.js"));

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _LinearRing = _interopRequireDefault(require("./LinearRing.js"));

var _Point = _interopRequireDefault(require("./Point.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _closest = require("./flat/closest.js");

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _array = require("../array.js");

var _interiorpoint = require("./flat/interiorpoint.js");

var _inflate = require("./flat/inflate.js");

var _intersectsextent = require("./flat/intersectsextent.js");

var _orient = require("./flat/orient.js");

var _area = require("./flat/area.js");

var _contains = require("./flat/contains.js");

var _math = require("../math.js");

var _simplify = require("./flat/simplify.js");

var _sphere = require("../sphere.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/Polygon
 */


/**
 * @classdesc
 * Polygon geometry.
 *
 * @api
 */
var Polygon =
/** @class */
function (_super) {
  __extends(Polygon, _super);
  /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `opt_layout` and `opt_ends` are also accepted.)
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @param {Array<number>=} opt_ends Ends (for internal use with flat coordinates).
   */


  function Polygon(coordinates, opt_layout, opt_ends) {
    var _this = _super.call(this) || this;
    /**
     * @type {Array<number>}
     * @private
     */


    _this.ends_ = [];
    /**
     * @private
     * @type {number}
     */

    _this.flatInteriorPointRevision_ = -1;
    /**
     * @private
     * @type {import("../coordinate.js").Coordinate}
     */

    _this.flatInteriorPoint_ = null;
    /**
     * @private
     * @type {number}
     */

    _this.maxDelta_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.maxDeltaRevision_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.orientedRevision_ = -1;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.orientedFlatCoordinates_ = null;

    if (opt_layout !== undefined && opt_ends) {
      _this.setFlatCoordinates(opt_layout,
      /** @type {Array<number>} */
      coordinates);

      _this.ends_ = opt_ends;
    } else {
      _this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      coordinates, opt_layout);
    }

    return _this;
  }
  /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */


  Polygon.prototype.appendLinearRing = function (linearRing) {
    if (!this.flatCoordinates) {
      this.flatCoordinates = linearRing.getFlatCoordinates().slice();
    } else {
      (0, _array.extend)(this.flatCoordinates, linearRing.getFlatCoordinates());
    }

    this.ends_.push(this.flatCoordinates.length);
    this.changed();
  };
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */


  Polygon.prototype.clone = function () {
    return new Polygon(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  Polygon.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0, _extent.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }

    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt((0, _closest.arrayMaxSquaredDelta)(this.flatCoordinates, 0, this.ends_, this.stride, 0));
      this.maxDeltaRevision_ = this.getRevision();
    }

    return (0, _closest.assignClosestArrayPoint)(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */


  Polygon.prototype.containsXY = function (x, y) {
    return (0, _contains.linearRingsContainsXY)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, x, y);
  };
  /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */


  Polygon.prototype.getArea = function () {
    return (0, _area.linearRings)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  };
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean=} opt_right Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */


  Polygon.prototype.getCoordinates = function (opt_right) {
    var flatCoordinates;

    if (opt_right !== undefined) {
      flatCoordinates = this.getOrientedFlatCoordinates().slice();
      (0, _orient.orientLinearRings)(flatCoordinates, 0, this.ends_, this.stride, opt_right);
    } else {
      flatCoordinates = this.flatCoordinates;
    }

    return (0, _inflate.inflateCoordinatesArray)(flatCoordinates, 0, this.ends_, this.stride);
  };
  /**
   * @return {Array<number>} Ends.
   */


  Polygon.prototype.getEnds = function () {
    return this.ends_;
  };
  /**
   * @return {Array<number>} Interior point.
   */


  Polygon.prototype.getFlatInteriorPoint = function () {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      var flatCenter = (0, _extent.getCenter)(this.getExtent());
      this.flatInteriorPoint_ = (0, _interiorpoint.getInteriorPointOfArray)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, flatCenter, 0);
      this.flatInteriorPointRevision_ = this.getRevision();
    }

    return this.flatInteriorPoint_;
  };
  /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */


  Polygon.prototype.getInteriorPoint = function () {
    return new _Point.default(this.getFlatInteriorPoint(), _GeometryLayout.default.XYM);
  };
  /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */


  Polygon.prototype.getLinearRingCount = function () {
    return this.ends_.length;
  };
  /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing} Linear ring.
   * @api
   */


  Polygon.prototype.getLinearRing = function (index) {
    if (index < 0 || this.ends_.length <= index) {
      return null;
    }

    return new _LinearRing.default(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
  };
  /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */


  Polygon.prototype.getLinearRings = function () {
    var layout = this.layout;
    var flatCoordinates = this.flatCoordinates;
    var ends = this.ends_;
    var linearRings = [];
    var offset = 0;

    for (var i = 0, ii = ends.length; i < ii; ++i) {
      var end = ends[i];
      var linearRing = new _LinearRing.default(flatCoordinates.slice(offset, end), layout);
      linearRings.push(linearRing);
      offset = end;
    }

    return linearRings;
  };
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */


  Polygon.prototype.getOrientedFlatCoordinates = function () {
    if (this.orientedRevision_ != this.getRevision()) {
      var flatCoordinates = this.flatCoordinates;

      if ((0, _orient.linearRingsAreOriented)(flatCoordinates, 0, this.ends_, this.stride)) {
        this.orientedFlatCoordinates_ = flatCoordinates;
      } else {
        this.orientedFlatCoordinates_ = flatCoordinates.slice();
        this.orientedFlatCoordinates_.length = (0, _orient.orientLinearRings)(this.orientedFlatCoordinates_, 0, this.ends_, this.stride);
      }

      this.orientedRevision_ = this.getRevision();
    }

    return this.orientedFlatCoordinates_;
  };
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   */


  Polygon.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
    var simplifiedFlatCoordinates = [];
    var simplifiedEnds = [];
    simplifiedFlatCoordinates.length = (0, _simplify.quantizeArray)(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEnds);
    return new Polygon(simplifiedFlatCoordinates, _GeometryLayout.default.XY, simplifiedEnds);
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  Polygon.prototype.getType = function () {
    return _GeometryType.default.POLYGON;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  Polygon.prototype.intersectsExtent = function (extent) {
    return (0, _intersectsextent.intersectsLinearRingArray)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, extent);
  };
  /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  Polygon.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 2);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    var ends = (0, _deflate.deflateCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
    this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
    this.changed();
  };

  return Polygon;
}(_SimpleGeometry.default);

var _default = Polygon;
/**
 * Create an approximation of a circle on the surface of a sphere.
 * @param {import("../coordinate.js").Coordinate} center Center (`[lon, lat]` in degrees).
 * @param {number} radius The great-circle distance from the center to
 *     the polygon vertices.
 * @param {number=} opt_n Optional number of vertices for the resulting
 *     polygon. Default is `32`.
 * @param {number=} opt_sphereRadius Optional radius for the sphere (defaults to
 *     the Earth's mean radius using the WGS84 ellipsoid).
 * @return {Polygon} The "circular" polygon.
 * @api
 */

exports.default = _default;

function circular(center, radius, opt_n, opt_sphereRadius) {
  var n = opt_n ? opt_n : 32;
  /** @type {Array<number>} */

  var flatCoordinates = [];

  for (var i = 0; i < n; ++i) {
    (0, _array.extend)(flatCoordinates, (0, _sphere.offset)(center, radius, 2 * Math.PI * i / n, opt_sphereRadius));
  }

  flatCoordinates.push(flatCoordinates[0], flatCoordinates[1]);
  return new Polygon(flatCoordinates, _GeometryLayout.default.XY, [flatCoordinates.length]);
}
/**
 * Create a polygon from an extent. The layout used is `XY`.
 * @param {import("../extent.js").Extent} extent The extent.
 * @return {Polygon} The polygon.
 * @api
 */


function fromExtent(extent) {
  var minX = extent[0];
  var minY = extent[1];
  var maxX = extent[2];
  var maxY = extent[3];
  var flatCoordinates = [minX, minY, minX, maxY, maxX, maxY, maxX, minY, minX, minY];
  return new Polygon(flatCoordinates, _GeometryLayout.default.XY, [flatCoordinates.length]);
}
/**
 * Create a regular polygon from a circle.
 * @param {import("./Circle.js").default} circle Circle geometry.
 * @param {number=} opt_sides Number of sides of the polygon. Default is 32.
 * @param {number=} opt_angle Start angle for the first vertex of the polygon in
 *     radians. Default is 0.
 * @return {Polygon} Polygon geometry.
 * @api
 */


function fromCircle(circle, opt_sides, opt_angle) {
  var sides = opt_sides ? opt_sides : 32;
  var stride = circle.getStride();
  var layout = circle.getLayout();
  var center = circle.getCenter();
  var arrayLength = stride * (sides + 1);
  var flatCoordinates = new Array(arrayLength);

  for (var i = 0; i < arrayLength; i += stride) {
    flatCoordinates[i] = 0;
    flatCoordinates[i + 1] = 0;

    for (var j = 2; j < stride; j++) {
      flatCoordinates[i + j] = center[j];
    }
  }

  var ends = [flatCoordinates.length];
  var polygon = new Polygon(flatCoordinates, layout, ends);
  makeRegular(polygon, center, circle.getRadius(), opt_angle);
  return polygon;
}
/**
 * Modify the coordinates of a polygon to make it a regular polygon.
 * @param {Polygon} polygon Polygon geometry.
 * @param {import("../coordinate.js").Coordinate} center Center of the regular polygon.
 * @param {number} radius Radius of the regular polygon.
 * @param {number=} opt_angle Start angle for the first vertex of the polygon in
 *     radians. Default is 0.
 */


function makeRegular(polygon, center, radius, opt_angle) {
  var flatCoordinates = polygon.getFlatCoordinates();
  var stride = polygon.getStride();
  var sides = flatCoordinates.length / stride - 1;
  var startAngle = opt_angle ? opt_angle : 0;

  for (var i = 0; i <= sides; ++i) {
    var offset = i * stride;
    var angle = startAngle + (0, _math.modulo)(i, sides) * 2 * Math.PI / sides;
    flatCoordinates[offset] = center[0] + radius * Math.cos(angle);
    flatCoordinates[offset + 1] = center[1] + radius * Math.sin(angle);
  }

  polygon.changed();
}
},{"./GeometryLayout.js":"ol/geom/GeometryLayout.js","./GeometryType.js":"ol/geom/GeometryType.js","./LinearRing.js":"ol/geom/LinearRing.js","./Point.js":"ol/geom/Point.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","./flat/closest.js":"ol/geom/flat/closest.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","../array.js":"ol/array.js","./flat/interiorpoint.js":"ol/geom/flat/interiorpoint.js","./flat/inflate.js":"ol/geom/flat/inflate.js","./flat/intersectsextent.js":"ol/geom/flat/intersectsextent.js","./flat/orient.js":"ol/geom/flat/orient.js","./flat/area.js":"ol/geom/flat/area.js","./flat/contains.js":"ol/geom/flat/contains.js","../math.js":"ol/math.js","./flat/simplify.js":"ol/geom/flat/simplify.js","../sphere.js":"ol/sphere.js"}],"ol/geom/flat/center.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearRingss = linearRingss;

var _extent = require("../../extent.js");

/**
 * @module ol/geom/flat/center
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {Array<number>} Flat centers.
 */
function linearRingss(flatCoordinates, offset, endss, stride) {
  var flatCenters = [];
  var extent = (0, _extent.createEmpty)();

  for (var i = 0, ii = endss.length; i < ii; ++i) {
    var ends = endss[i];
    extent = (0, _extent.createOrUpdateFromFlatCoordinates)(flatCoordinates, offset, ends[0], stride);
    flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
    offset = ends[ends.length - 1];
  }

  return flatCenters;
}
},{"../../extent.js":"ol/extent.js"}],"ol/geom/MultiPolygon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryLayout = _interopRequireDefault(require("./GeometryLayout.js"));

var _GeometryType = _interopRequireDefault(require("./GeometryType.js"));

var _MultiPoint = _interopRequireDefault(require("./MultiPoint.js"));

var _Polygon = _interopRequireDefault(require("./Polygon.js"));

var _SimpleGeometry = _interopRequireDefault(require("./SimpleGeometry.js"));

var _closest = require("./flat/closest.js");

var _extent = require("../extent.js");

var _deflate = require("./flat/deflate.js");

var _array = require("../array.js");

var _interiorpoint = require("./flat/interiorpoint.js");

var _inflate = require("./flat/inflate.js");

var _intersectsextent = require("./flat/intersectsextent.js");

var _orient = require("./flat/orient.js");

var _area = require("./flat/area.js");

var _center = require("./flat/center.js");

var _contains = require("./flat/contains.js");

var _simplify = require("./flat/simplify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/geom/MultiPolygon
 */


/**
 * @classdesc
 * Multi-polygon geometry.
 *
 * @api
 */
var MultiPolygon =
/** @class */
function (_super) {
  __extends(MultiPolygon, _super);
  /**
   * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `opt_layout` and `opt_endss` are also accepted.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @param {Array<Array<number>>=} opt_endss Array of ends for internal use with flat coordinates.
   */


  function MultiPolygon(coordinates, opt_layout, opt_endss) {
    var _this = _super.call(this) || this;
    /**
     * @type {Array<Array<number>>}
     * @private
     */


    _this.endss_ = [];
    /**
     * @private
     * @type {number}
     */

    _this.flatInteriorPointsRevision_ = -1;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.flatInteriorPoints_ = null;
    /**
     * @private
     * @type {number}
     */

    _this.maxDelta_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.maxDeltaRevision_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.orientedRevision_ = -1;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.orientedFlatCoordinates_ = null;

    if (!opt_endss && !Array.isArray(coordinates[0])) {
      var layout = _this.getLayout();

      var polygons =
      /** @type {Array<Polygon>} */
      coordinates;
      var flatCoordinates = [];
      var endss = [];

      for (var i = 0, ii = polygons.length; i < ii; ++i) {
        var polygon = polygons[i];

        if (i === 0) {
          layout = polygon.getLayout();
        }

        var offset = flatCoordinates.length;
        var ends = polygon.getEnds();

        for (var j = 0, jj = ends.length; j < jj; ++j) {
          ends[j] += offset;
        }

        (0, _array.extend)(flatCoordinates, polygon.getFlatCoordinates());
        endss.push(ends);
      }

      opt_layout = layout;
      coordinates = flatCoordinates;
      opt_endss = endss;
    }

    if (opt_layout !== undefined && opt_endss) {
      _this.setFlatCoordinates(opt_layout,
      /** @type {Array<number>} */
      coordinates);

      _this.endss_ = opt_endss;
    } else {
      _this.setCoordinates(
      /** @type {Array<Array<Array<import("../coordinate.js").Coordinate>>>} */
      coordinates, opt_layout);
    }

    return _this;
  }
  /**
   * Append the passed polygon to this multipolygon.
   * @param {Polygon} polygon Polygon.
   * @api
   */


  MultiPolygon.prototype.appendPolygon = function (polygon) {
    /** @type {Array<number>} */
    var ends;

    if (!this.flatCoordinates) {
      this.flatCoordinates = polygon.getFlatCoordinates().slice();
      ends = polygon.getEnds().slice();
      this.endss_.push();
    } else {
      var offset = this.flatCoordinates.length;
      (0, _array.extend)(this.flatCoordinates, polygon.getFlatCoordinates());
      ends = polygon.getEnds().slice();

      for (var i = 0, ii = ends.length; i < ii; ++i) {
        ends[i] += offset;
      }
    }

    this.endss_.push(ends);
    this.changed();
  };
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPolygon} Clone.
   * @api
   */


  MultiPolygon.prototype.clone = function () {
    var len = this.endss_.length;
    var newEndss = new Array(len);

    for (var i = 0; i < len; ++i) {
      newEndss[i] = this.endss_[i].slice();
    }

    return new MultiPolygon(this.flatCoordinates.slice(), this.layout, newEndss);
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */


  MultiPolygon.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0, _extent.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }

    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt((0, _closest.multiArrayMaxSquaredDelta)(this.flatCoordinates, 0, this.endss_, this.stride, 0));
      this.maxDeltaRevision_ = this.getRevision();
    }

    return (0, _closest.assignClosestMultiArrayPoint)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
  };
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */


  MultiPolygon.prototype.containsXY = function (x, y) {
    return (0, _contains.linearRingssContainsXY)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, x, y);
  };
  /**
   * Return the area of the multipolygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */


  MultiPolygon.prototype.getArea = function () {
    return (0, _area.linearRingss)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
  };
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for multi-polygons.
   *
   * @param {boolean=} opt_right Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<Array<import("../coordinate.js").Coordinate>>>} Coordinates.
   * @api
   */


  MultiPolygon.prototype.getCoordinates = function (opt_right) {
    var flatCoordinates;

    if (opt_right !== undefined) {
      flatCoordinates = this.getOrientedFlatCoordinates().slice();
      (0, _orient.orientLinearRingsArray)(flatCoordinates, 0, this.endss_, this.stride, opt_right);
    } else {
      flatCoordinates = this.flatCoordinates;
    }

    return (0, _inflate.inflateMultiCoordinatesArray)(flatCoordinates, 0, this.endss_, this.stride);
  };
  /**
   * @return {Array<Array<number>>} Endss.
   */


  MultiPolygon.prototype.getEndss = function () {
    return this.endss_;
  };
  /**
   * @return {Array<number>} Flat interior points.
   */


  MultiPolygon.prototype.getFlatInteriorPoints = function () {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      var flatCenters = (0, _center.linearRingss)(this.flatCoordinates, 0, this.endss_, this.stride);
      this.flatInteriorPoints_ = (0, _interiorpoint.getInteriorPointsOfMultiArray)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, flatCenters);
      this.flatInteriorPointsRevision_ = this.getRevision();
    }

    return this.flatInteriorPoints_;
  };
  /**
   * Return the interior points as {@link module:ol/geom/MultiPoint multipoint}.
   * @return {MultiPoint} Interior points as XYM coordinates, where M is
   * the length of the horizontal intersection that the point belongs to.
   * @api
   */


  MultiPolygon.prototype.getInteriorPoints = function () {
    return new _MultiPoint.default(this.getFlatInteriorPoints().slice(), _GeometryLayout.default.XYM);
  };
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */


  MultiPolygon.prototype.getOrientedFlatCoordinates = function () {
    if (this.orientedRevision_ != this.getRevision()) {
      var flatCoordinates = this.flatCoordinates;

      if ((0, _orient.linearRingssAreOriented)(flatCoordinates, 0, this.endss_, this.stride)) {
        this.orientedFlatCoordinates_ = flatCoordinates;
      } else {
        this.orientedFlatCoordinates_ = flatCoordinates.slice();
        this.orientedFlatCoordinates_.length = (0, _orient.orientLinearRingsArray)(this.orientedFlatCoordinates_, 0, this.endss_, this.stride);
      }

      this.orientedRevision_ = this.getRevision();
    }

    return this.orientedFlatCoordinates_;
  };
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiPolygon} Simplified MultiPolygon.
   * @protected
   */


  MultiPolygon.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
    var simplifiedFlatCoordinates = [];
    var simplifiedEndss = [];
    simplifiedFlatCoordinates.length = (0, _simplify.quantizeMultiArray)(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEndss);
    return new MultiPolygon(simplifiedFlatCoordinates, _GeometryLayout.default.XY, simplifiedEndss);
  };
  /**
   * Return the polygon at the specified index.
   * @param {number} index Index.
   * @return {Polygon} Polygon.
   * @api
   */


  MultiPolygon.prototype.getPolygon = function (index) {
    if (index < 0 || this.endss_.length <= index) {
      return null;
    }

    var offset;

    if (index === 0) {
      offset = 0;
    } else {
      var prevEnds = this.endss_[index - 1];
      offset = prevEnds[prevEnds.length - 1];
    }

    var ends = this.endss_[index].slice();
    var end = ends[ends.length - 1];

    if (offset !== 0) {
      for (var i = 0, ii = ends.length; i < ii; ++i) {
        ends[i] -= offset;
      }
    }

    return new _Polygon.default(this.flatCoordinates.slice(offset, end), this.layout, ends);
  };
  /**
   * Return the polygons of this multipolygon.
   * @return {Array<Polygon>} Polygons.
   * @api
   */


  MultiPolygon.prototype.getPolygons = function () {
    var layout = this.layout;
    var flatCoordinates = this.flatCoordinates;
    var endss = this.endss_;
    var polygons = [];
    var offset = 0;

    for (var i = 0, ii = endss.length; i < ii; ++i) {
      var ends = endss[i].slice();
      var end = ends[ends.length - 1];

      if (offset !== 0) {
        for (var j = 0, jj = ends.length; j < jj; ++j) {
          ends[j] -= offset;
        }
      }

      var polygon = new _Polygon.default(flatCoordinates.slice(offset, end), layout, ends);
      polygons.push(polygon);
      offset = end;
    }

    return polygons;
  };
  /**
   * Get the type of this geometry.
   * @return {import("./GeometryType.js").default} Geometry type.
   * @api
   */


  MultiPolygon.prototype.getType = function () {
    return _GeometryType.default.MULTI_POLYGON;
  };
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */


  MultiPolygon.prototype.intersectsExtent = function (extent) {
    return (0, _intersectsextent.intersectsLinearRingMultiArray)(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, extent);
  };
  /**
   * Set the coordinates of the multipolygon.
   * @param {!Array<Array<Array<import("../coordinate.js").Coordinate>>>} coordinates Coordinates.
   * @param {import("./GeometryLayout.js").default=} opt_layout Layout.
   * @api
   */


  MultiPolygon.prototype.setCoordinates = function (coordinates, opt_layout) {
    this.setLayout(opt_layout, coordinates, 3);

    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }

    var endss = (0, _deflate.deflateMultiCoordinatesArray)(this.flatCoordinates, 0, coordinates, this.stride, this.endss_);

    if (endss.length === 0) {
      this.flatCoordinates.length = 0;
    } else {
      var lastEnds = endss[endss.length - 1];
      this.flatCoordinates.length = lastEnds.length === 0 ? 0 : lastEnds[lastEnds.length - 1];
    }

    this.changed();
  };

  return MultiPolygon;
}(_SimpleGeometry.default);

var _default = MultiPolygon;
exports.default = _default;
},{"./GeometryLayout.js":"ol/geom/GeometryLayout.js","./GeometryType.js":"ol/geom/GeometryType.js","./MultiPoint.js":"ol/geom/MultiPoint.js","./Polygon.js":"ol/geom/Polygon.js","./SimpleGeometry.js":"ol/geom/SimpleGeometry.js","./flat/closest.js":"ol/geom/flat/closest.js","../extent.js":"ol/extent.js","./flat/deflate.js":"ol/geom/flat/deflate.js","../array.js":"ol/array.js","./flat/interiorpoint.js":"ol/geom/flat/interiorpoint.js","./flat/inflate.js":"ol/geom/flat/inflate.js","./flat/intersectsextent.js":"ol/geom/flat/intersectsextent.js","./flat/orient.js":"ol/geom/flat/orient.js","./flat/area.js":"ol/geom/flat/area.js","./flat/center.js":"ol/geom/flat/center.js","./flat/contains.js":"ol/geom/flat/contains.js","./flat/simplify.js":"ol/geom/flat/simplify.js"}],"ol/easing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeIn = easeIn;
exports.easeOut = easeOut;
exports.inAndOut = inAndOut;
exports.linear = linear;
exports.upAndDown = upAndDown;

/**
 * @module ol/easing
 */

/**
 * Start slow and speed up.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function easeIn(t) {
  return Math.pow(t, 3);
}
/**
 * Start fast and slow down.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */


function easeOut(t) {
  return 1 - easeIn(1 - t);
}
/**
 * Start slow, speed up, and then slow down again.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */


function inAndOut(t) {
  return 3 * t * t - 2 * t * t * t;
}
/**
 * Maintain a constant speed over time.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */


function linear(t) {
  return t;
}
/**
 * Start slow, speed up, and at the very end slow down again.  This has the
 * same general behavior as {@link module:ol/easing~inAndOut}, but the final
 * slowdown is delayed.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */


function upAndDown(t) {
  if (t < 0.5) {
    return inAndOut(2 * t);
  } else {
    return 1 - inAndOut(2 * (t - 0.5));
  }
}
},{}],"ol/interaction/Interaction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pan = pan;
exports.zoomByDelta = zoomByDelta;
exports.default = void 0;

var _Object = _interopRequireDefault(require("../Object.js"));

var _Property = _interopRequireDefault(require("./Property.js"));

var _easing = require("../easing.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/interaction/Interaction
 */


/**
 * Object literal with config options for interactions.
 * @typedef {Object} InteractionOptions
 * @property {function(import("../MapBrowserEvent.js").default):boolean} handleEvent
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. If the function returns a falsy value, propagation of
 * the event to other interactions in the map's interactions chain will be
 * prevented (this includes functions with no explicit return). The interactions
 * are traversed in reverse order of the interactions collection of the map.
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * User actions that change the state of the map. Some are similar to controls,
 * but are not associated with a DOM element.
 * For example, {@link module:ol/interaction/KeyboardZoom~KeyboardZoom} is
 * functionally the same as {@link module:ol/control/Zoom~Zoom}, but triggered
 * by a keyboard event not a button element event.
 * Although interactions do not have a DOM element, some of them do render
 * vectors and so are visible on the screen.
 * @api
 */
var Interaction =
/** @class */
function (_super) {
  __extends(Interaction, _super);
  /**
   * @param {InteractionOptions=} opt_options Options.
   */


  function Interaction(opt_options) {
    var _this = _super.call(this) || this;

    if (opt_options && opt_options.handleEvent) {
      _this.handleEvent = opt_options.handleEvent;
    }
    /**
     * @private
     * @type {import("../PluggableMap.js").default}
     */


    _this.map_ = null;

    _this.setActive(true);

    return _this;
  }
  /**
   * Return whether the interaction is currently active.
   * @return {boolean} `true` if the interaction is active, `false` otherwise.
   * @observable
   * @api
   */


  Interaction.prototype.getActive = function () {
    return (
      /** @type {boolean} */
      this.get(_Property.default.ACTIVE)
    );
  };
  /**
   * Get the map associated with this interaction.
   * @return {import("../PluggableMap.js").default} Map.
   * @api
   */


  Interaction.prototype.getMap = function () {
    return this.map_;
  };
  /**
   * Handles the {@link module:ol/MapBrowserEvent map browser event}.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */


  Interaction.prototype.handleEvent = function (mapBrowserEvent) {
    return true;
  };
  /**
   * Activate or deactivate the interaction.
   * @param {boolean} active Active.
   * @observable
   * @api
   */


  Interaction.prototype.setActive = function (active) {
    this.set(_Property.default.ACTIVE, active);
  };
  /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../PluggableMap.js").default} map Map.
   */


  Interaction.prototype.setMap = function (map) {
    this.map_ = map;
  };

  return Interaction;
}(_Object.default);
/**
 * @param {import("../View.js").default} view View.
 * @param {import("../coordinate.js").Coordinate} delta Delta.
 * @param {number=} opt_duration Duration.
 */


function pan(view, delta, opt_duration) {
  var currentCenter = view.getCenterInternal();

  if (currentCenter) {
    var center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
    view.animateInternal({
      duration: opt_duration !== undefined ? opt_duration : 250,
      easing: _easing.linear,
      center: view.getConstrainedCenter(center)
    });
  }
}
/**
 * @param {import("../View.js").default} view View.
 * @param {number} delta Delta from previous zoom level.
 * @param {import("../coordinate.js").Coordinate=} opt_anchor Anchor coordinate in the user projection.
 * @param {number=} opt_duration Duration.
 */


function zoomByDelta(view, delta, opt_anchor, opt_duration) {
  var currentZoom = view.getZoom();

  if (currentZoom === undefined) {
    return;
  }

  var newZoom = view.getConstrainedZoom(currentZoom + delta);
  var newResolution = view.getResolutionForZoom(newZoom);

  if (view.getAnimating()) {
    view.cancelAnimations();
  }

  view.animate({
    resolution: newResolution,
    anchor: opt_anchor,
    duration: opt_duration !== undefined ? opt_duration : 250,
    easing: _easing.easeOut
  });
}

var _default = Interaction;
exports.default = _default;
},{"../Object.js":"ol/Object.js","./Property.js":"ol/interaction/Property.js","../easing.js":"ol/easing.js"}],"ol/interaction/Pointer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.centroid = centroid;
exports.default = void 0;

var _Interaction = _interopRequireDefault(require("./Interaction.js"));

var _MapBrowserEventType = _interopRequireDefault(require("../MapBrowserEventType.js"));

var _obj = require("../obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/interaction/Pointer
 */


/**
 * @typedef {Object} Options
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleDownEvent]
 * Function handling "down" events. If the function returns `true` then a drag
 * sequence is started.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleDragEvent]
 * Function handling "drag" events. This function is called on "move" events
 * during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleEvent]
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. The function may return `false` to prevent the
 * propagation of the event to other interactions in the map's interactions
 * chain.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleMoveEvent]
 * Function handling "move" events. This function is called on "move" events.
 * This functions is also called during a drag sequence, so during a drag
 * sequence both the `handleDragEvent` function and this function are called.
 * If `handleDownEvent` is defined and it returns true this function will not
 * be called during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleUpEvent]
 *  Function handling "up" events. If the function returns `false` then the
 * current drag sequence is stopped.
 * @property {function(boolean):boolean} [stopDown]
 * Should the down event be propagated to other interactions, or should be
 * stopped?
 */

/**
 * @classdesc
 * Base class that calls user-defined functions on `down`, `move` and `up`
 * events. This class also manages "drag sequences".
 *
 * When the `handleDownEvent` user function returns `true` a drag sequence is
 * started. During a drag sequence the `handleDragEvent` user function is
 * called on `move` events. The drag sequence ends when the `handleUpEvent`
 * user function is called and returns `false`.
 * @api
 */
var PointerInteraction =
/** @class */
function (_super) {
  __extends(PointerInteraction, _super);
  /**
   * @param {Options=} opt_options Options.
   */


  function PointerInteraction(opt_options) {
    var _this = this;

    var options = opt_options ? opt_options : {};
    _this = _super.call(this,
    /** @type {import("./Interaction.js").InteractionOptions} */
    options) || this;

    if (options.handleDownEvent) {
      _this.handleDownEvent = options.handleDownEvent;
    }

    if (options.handleDragEvent) {
      _this.handleDragEvent = options.handleDragEvent;
    }

    if (options.handleMoveEvent) {
      _this.handleMoveEvent = options.handleMoveEvent;
    }

    if (options.handleUpEvent) {
      _this.handleUpEvent = options.handleUpEvent;
    }

    if (options.stopDown) {
      _this.stopDown = options.stopDown;
    }
    /**
     * @type {boolean}
     * @protected
     */


    _this.handlingDownUpSequence = false;
    /**
     * @type {!Object<string, PointerEvent>}
     * @private
     */

    _this.trackedPointers_ = {};
    /**
     * @type {Array<PointerEvent>}
     * @protected
     */

    _this.targetPointers = [];
    return _this;
  }
  /**
   * Returns the current number of pointers involved in the interaction,
   * e.g. `2` when two fingers are used.
   * @return {number} The number of pointers.
   * @api
   */


  PointerInteraction.prototype.getPointerCount = function () {
    return this.targetPointers.length;
  };
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */


  PointerInteraction.prototype.handleDownEvent = function (mapBrowserEvent) {
    return false;
  };
  /**
   * Handle pointer drag events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */


  PointerInteraction.prototype.handleDragEvent = function (mapBrowserEvent) {};
  /**
   * Handles the {@link module:ol/MapBrowserEvent map browser event} and may call into
   * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
   * detected.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */


  PointerInteraction.prototype.handleEvent = function (mapBrowserEvent) {
    if (!mapBrowserEvent.originalEvent) {
      return true;
    }

    var stopEvent = false;
    this.updateTrackedPointers_(mapBrowserEvent);

    if (this.handlingDownUpSequence) {
      if (mapBrowserEvent.type == _MapBrowserEventType.default.POINTERDRAG) {
        this.handleDragEvent(mapBrowserEvent); // prevent page scrolling during dragging

        mapBrowserEvent.preventDefault();
      } else if (mapBrowserEvent.type == _MapBrowserEventType.default.POINTERUP) {
        var handledUp = this.handleUpEvent(mapBrowserEvent);
        this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
      }
    } else {
      if (mapBrowserEvent.type == _MapBrowserEventType.default.POINTERDOWN) {
        var handled = this.handleDownEvent(mapBrowserEvent);
        this.handlingDownUpSequence = handled;
        stopEvent = this.stopDown(handled);
      } else if (mapBrowserEvent.type == _MapBrowserEventType.default.POINTERMOVE) {
        this.handleMoveEvent(mapBrowserEvent);
      }
    }

    return !stopEvent;
  };
  /**
   * Handle pointer move events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @protected
   */


  PointerInteraction.prototype.handleMoveEvent = function (mapBrowserEvent) {};
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @return {boolean} If the event was consumed.
   * @protected
   */


  PointerInteraction.prototype.handleUpEvent = function (mapBrowserEvent) {
    return false;
  };
  /**
   * This function is used to determine if "down" events should be propagated
   * to other interactions or should be stopped.
   * @param {boolean} handled Was the event handled by the interaction?
   * @return {boolean} Should the `down` event be stopped?
   */


  PointerInteraction.prototype.stopDown = function (handled) {
    return handled;
  };
  /**
   * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
   * @private
   */


  PointerInteraction.prototype.updateTrackedPointers_ = function (mapBrowserEvent) {
    if (isPointerDraggingEvent(mapBrowserEvent)) {
      var event_1 = mapBrowserEvent.originalEvent;
      var id = event_1.pointerId.toString();

      if (mapBrowserEvent.type == _MapBrowserEventType.default.POINTERUP) {
        delete this.trackedPointers_[id];
      } else if (mapBrowserEvent.type == _MapBrowserEventType.default.POINTERDOWN) {
        this.trackedPointers_[id] = event_1;
      } else if (id in this.trackedPointers_) {
        // update only when there was a pointerdown event for this pointer
        this.trackedPointers_[id] = event_1;
      }

      this.targetPointers = (0, _obj.getValues)(this.trackedPointers_);
    }
  };

  return PointerInteraction;
}(_Interaction.default);
/**
 * @param {Array<PointerEvent>} pointerEvents List of events.
 * @return {import("../pixel.js").Pixel} Centroid pixel.
 */


function centroid(pointerEvents) {
  var length = pointerEvents.length;
  var clientX = 0;
  var clientY = 0;

  for (var i = 0; i < length; i++) {
    clientX += pointerEvents[i].clientX;
    clientY += pointerEvents[i].clientY;
  }

  return [clientX / length, clientY / length];
}
/**
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
 * @return {boolean} Whether the event is a pointerdown, pointerdrag
 *     or pointerup event.
 */


function isPointerDraggingEvent(mapBrowserEvent) {
  var type = mapBrowserEvent.type;
  return type === _MapBrowserEventType.default.POINTERDOWN || type === _MapBrowserEventType.default.POINTERDRAG || type === _MapBrowserEventType.default.POINTERUP;
}

var _default = PointerInteraction;
exports.default = _default;
},{"./Interaction.js":"ol/interaction/Interaction.js","../MapBrowserEventType.js":"ol/MapBrowserEventType.js","../obj.js":"ol/obj.js"}],"ol/layer/Property.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/layer/Property
 */

/**
 * @enum {string}
 */
var _default = {
  OPACITY: 'opacity',
  VISIBLE: 'visible',
  EXTENT: 'extent',
  Z_INDEX: 'zIndex',
  MAX_RESOLUTION: 'maxResolution',
  MIN_RESOLUTION: 'minResolution',
  MAX_ZOOM: 'maxZoom',
  MIN_ZOOM: 'minZoom',
  SOURCE: 'source'
};
exports.default = _default;
},{}],"ol/layer/Base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Object = _interopRequireDefault(require("../Object.js"));

var _Property = _interopRequireDefault(require("./Property.js"));

var _util = require("../util.js");

var _asserts = require("../asserts.js");

var _obj = require("../obj.js");

var _math = require("../math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/layer/Base
 */


/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */
var BaseLayer =
/** @class */
function (_super) {
  __extends(BaseLayer, _super);
  /**
   * @param {Options} options Layer options.
   */


  function BaseLayer(options) {
    var _this = _super.call(this) || this;
    /**
     * @type {Object<string, *>}
     */


    var properties = (0, _obj.assign)({}, options);
    properties[_Property.default.OPACITY] = options.opacity !== undefined ? options.opacity : 1;
    (0, _asserts.assert)(typeof properties[_Property.default.OPACITY] === 'number', 64); // Layer opacity must be a number

    properties[_Property.default.VISIBLE] = options.visible !== undefined ? options.visible : true;
    properties[_Property.default.Z_INDEX] = options.zIndex;
    properties[_Property.default.MAX_RESOLUTION] = options.maxResolution !== undefined ? options.maxResolution : Infinity;
    properties[_Property.default.MIN_RESOLUTION] = options.minResolution !== undefined ? options.minResolution : 0;
    properties[_Property.default.MIN_ZOOM] = options.minZoom !== undefined ? options.minZoom : -Infinity;
    properties[_Property.default.MAX_ZOOM] = options.maxZoom !== undefined ? options.maxZoom : Infinity;
    /**
     * @type {string}
     * @private
     */

    _this.className_ = properties.className !== undefined ? options.className : 'ol-layer';
    delete properties.className;

    _this.setProperties(properties);
    /**
     * @type {import("./Layer.js").State}
     * @private
     */


    _this.state_ = null;
    return _this;
  }
  /**
   * @return {string} CSS class name.
   */


  BaseLayer.prototype.getClassName = function () {
    return this.className_;
  };
  /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean=} opt_managed Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */


  BaseLayer.prototype.getLayerState = function (opt_managed) {
    /** @type {import("./Layer.js").State} */
    var state = this.state_ ||
    /** @type {?} */
    {
      layer: this,
      managed: opt_managed === undefined ? true : opt_managed
    };
    var zIndex = this.getZIndex();
    state.opacity = (0, _math.clamp)(Math.round(this.getOpacity() * 100) / 100, 0, 1);
    state.sourceState = this.getSourceState();
    state.visible = this.getVisible();
    state.extent = this.getExtent();
    state.zIndex = zIndex !== undefined ? zIndex : state.managed === false ? Infinity : 0;
    state.maxResolution = this.getMaxResolution();
    state.minResolution = Math.max(this.getMinResolution(), 0);
    state.minZoom = this.getMinZoom();
    state.maxZoom = this.getMaxZoom();
    this.state_ = state;
    return state;
  };
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>=} opt_array Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */


  BaseLayer.prototype.getLayersArray = function (opt_array) {
    return (0, _util.abstract)();
  };
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>=} opt_states Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */


  BaseLayer.prototype.getLayerStatesArray = function (opt_states) {
    return (0, _util.abstract)();
  };
  /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */


  BaseLayer.prototype.getExtent = function () {
    return (
      /** @type {import("../extent.js").Extent|undefined} */
      this.get(_Property.default.EXTENT)
    );
  };
  /**
   * Return the maximum resolution of the layer.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getMaxResolution = function () {
    return (
      /** @type {number} */
      this.get(_Property.default.MAX_RESOLUTION)
    );
  };
  /**
   * Return the minimum resolution of the layer.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getMinResolution = function () {
    return (
      /** @type {number} */
      this.get(_Property.default.MIN_RESOLUTION)
    );
  };
  /**
   * Return the minimum zoom level of the layer.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getMinZoom = function () {
    return (
      /** @type {number} */
      this.get(_Property.default.MIN_ZOOM)
    );
  };
  /**
   * Return the maximum zoom level of the layer.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getMaxZoom = function () {
    return (
      /** @type {number} */
      this.get(_Property.default.MAX_ZOOM)
    );
  };
  /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getOpacity = function () {
    return (
      /** @type {number} */
      this.get(_Property.default.OPACITY)
    );
  };
  /**
   * @abstract
   * @return {import("../source/State.js").default} Source state.
   */


  BaseLayer.prototype.getSourceState = function () {
    return (0, _util.abstract)();
  };
  /**
   * Return the visibility of the layer (`true` or `false`).
   * @return {boolean} The visibility of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getVisible = function () {
    return (
      /** @type {boolean} */
      this.get(_Property.default.VISIBLE)
    );
  };
  /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. The default Z-index is 0.
   * @return {number} The Z-index of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.getZIndex = function () {
    return (
      /** @type {number} */
      this.get(_Property.default.Z_INDEX)
    );
  };
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setExtent = function (extent) {
    this.set(_Property.default.EXTENT, extent);
  };
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setMaxResolution = function (maxResolution) {
    this.set(_Property.default.MAX_RESOLUTION, maxResolution);
  };
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setMinResolution = function (minResolution) {
    this.set(_Property.default.MIN_RESOLUTION, minResolution);
  };
  /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setMaxZoom = function (maxZoom) {
    this.set(_Property.default.MAX_ZOOM, maxZoom);
  };
  /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setMinZoom = function (minZoom) {
    this.set(_Property.default.MIN_ZOOM, minZoom);
  };
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setOpacity = function (opacity) {
    (0, _asserts.assert)(typeof opacity === 'number', 64); // Layer opacity must be a number

    this.set(_Property.default.OPACITY, opacity);
  };
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setVisible = function (visible) {
    this.set(_Property.default.VISIBLE, visible);
  };
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */


  BaseLayer.prototype.setZIndex = function (zindex) {
    this.set(_Property.default.Z_INDEX, zindex);
  };
  /**
   * Clean up.
   */


  BaseLayer.prototype.disposeInternal = function () {
    if (this.state_) {
      this.state_.layer = null;
      this.state_ = null;
    }

    _super.prototype.disposeInternal.call(this);
  };

  return BaseLayer;
}(_Object.default);

var _default = BaseLayer;
exports.default = _default;
},{"../Object.js":"ol/Object.js","./Property.js":"ol/layer/Property.js","../util.js":"ol/util.js","../asserts.js":"ol/asserts.js","../obj.js":"ol/obj.js","../math.js":"ol/math.js"}],"ol/render/EventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/render/EventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */
  PRERENDER: 'prerender',

  /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */
  POSTRENDER: 'postrender',

  /**
   * Triggered before layers are rendered.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */
  PRECOMPOSE: 'precompose',

  /**
   * Triggered after all layers are rendered.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */
  POSTCOMPOSE: 'postcompose',

  /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */
  RENDERCOMPLETE: 'rendercomplete'
};
exports.default = _default;
},{}],"ol/source/State.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/source/State
 */

/**
 * @enum {string}
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */
var _default = {
  UNDEFINED: 'undefined',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error'
};
exports.default = _default;
},{}],"ol/layer/Layer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inView = inView;
exports.default = void 0;

var _Base = _interopRequireDefault(require("./Base.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _Property = _interopRequireDefault(require("./Property.js"));

var _EventType2 = _interopRequireDefault(require("../render/EventType.js"));

var _State = _interopRequireDefault(require("../source/State.js"));

var _asserts = require("../asserts.js");

var _obj = require("../obj.js");

var _Object = require("../Object.js");

var _events = require("../events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/layer/Layer
 */


/**
 * @typedef {function(import("../PluggableMap.js").FrameState):HTMLElement} RenderFunction
 */

/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {import("../source/Source.js").default} [source] Source for this layer.  If not provided to the constructor,
 * the source can be set by calling {@link module:ol/layer/Layer#setSource layer.setSource(source)} after
 * construction.
 * @property {import("../PluggableMap.js").default} [map] Map.
 * @property {RenderFunction} [render] Render function. Takes the frame state as input and is expected to return an
 * HTML element. Will overwrite the default rendering for the layer.
 */

/**
 * @typedef {Object} State
 * @property {import("./Layer.js").default} layer
 * @property {number} opacity Opacity, the value is rounded to two digits to appear after the decimal point.
 * @property {import("../source/State.js").default} sourceState
 * @property {boolean} visible
 * @property {boolean} managed
 * @property {import("../extent.js").Extent} [extent]
 * @property {number} zIndex
 * @property {number} maxResolution
 * @property {number} minResolution
 * @property {number} minZoom
 * @property {number} maxZoom
 */

/**
 * @classdesc
 * Base class from which all layer types are derived. This should only be instantiated
 * in the case where a custom layer is be added to the map with a custom `render` function.
 * Such a function can be specified in the `options` object, and is expected to return an HTML element.
 *
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with {@link module:ol/Map#addLayer}. Components
 * like {@link module:ol/interaction/Select~Select} use unmanaged layers
 * internally. These unmanaged layers are associated with the map using
 * {@link module:ol/layer/Layer~Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 *
 * Please note that for performance reasons several layers might get rendered to
 * the same HTML element, which will cause {@link module:ol/Map~Map#forEachLayerAtPixel} to
 * give false positives. To avoid this, apply different `className` properties to the
 * layers at creation time.
 *
 * @fires import("../render/Event.js").RenderEvent#prerender
 * @fires import("../render/Event.js").RenderEvent#postrender
 *
 * @template {import("../source/Source.js").default} SourceType
 * @api
 */
var Layer =
/** @class */
function (_super) {
  __extends(Layer, _super);
  /**
   * @param {Options} options Layer options.
   */


  function Layer(options) {
    var _this = this;

    var baseOptions = (0, _obj.assign)({}, options);
    delete baseOptions.source;
    _this = _super.call(this, baseOptions) || this;
    /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */

    _this.mapPrecomposeKey_ = null;
    /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */

    _this.mapRenderKey_ = null;
    /**
     * @private
     * @type {?import("../events.js").EventsKey}
     */

    _this.sourceChangeKey_ = null;
    /**
     * @private
     * @type {import("../renderer/Layer.js").default}
     */

    _this.renderer_ = null; // Overwrite default render method with a custom one

    if (options.render) {
      _this.render = options.render;
    }

    if (options.map) {
      _this.setMap(options.map);
    }

    _this.addEventListener((0, _Object.getChangeEventType)(_Property.default.SOURCE), _this.handleSourcePropertyChange_);

    var source = options.source ?
    /** @type {SourceType} */
    options.source : null;

    _this.setSource(source);

    return _this;
  }
  /**
   * @param {Array<import("./Layer.js").default>=} opt_array Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */


  Layer.prototype.getLayersArray = function (opt_array) {
    var array = opt_array ? opt_array : [];
    array.push(this);
    return array;
  };
  /**
   * @param {Array<import("./Layer.js").State>=} opt_states Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */


  Layer.prototype.getLayerStatesArray = function (opt_states) {
    var states = opt_states ? opt_states : [];
    states.push(this.getLayerState());
    return states;
  };
  /**
   * Get the layer source.
   * @return {SourceType} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */


  Layer.prototype.getSource = function () {
    return (
      /** @type {SourceType} */
      this.get(_Property.default.SOURCE) || null
    );
  };
  /**
   * @return {import("../source/State.js").default} Source state.
   */


  Layer.prototype.getSourceState = function () {
    var source = this.getSource();
    return !source ? _State.default.UNDEFINED : source.getState();
  };
  /**
   * @private
   */


  Layer.prototype.handleSourceChange_ = function () {
    this.changed();
  };
  /**
   * @private
   */


  Layer.prototype.handleSourcePropertyChange_ = function () {
    if (this.sourceChangeKey_) {
      (0, _events.unlistenByKey)(this.sourceChangeKey_);
      this.sourceChangeKey_ = null;
    }

    var source = this.getSource();

    if (source) {
      this.sourceChangeKey_ = (0, _events.listen)(source, _EventType.default.CHANGE, this.handleSourceChange_, this);
    }

    this.changed();
  };
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
   * an array of features.
   */


  Layer.prototype.getFeatures = function (pixel) {
    return this.renderer_.getFeatures(pixel);
  };
  /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../PluggableMap.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement} The rendered element.
   */


  Layer.prototype.render = function (frameState, target) {
    var layerRenderer = this.getRenderer();

    if (layerRenderer.prepareFrame(frameState)) {
      return layerRenderer.renderFrame(frameState, target);
    }
  };
  /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection, and the callback in
   * {@link module:ol/Map#forEachLayerAtPixel} will receive `null` as layer. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map#addLayer} instead.
   * @param {import("../PluggableMap.js").default} map Map.
   * @api
   */


  Layer.prototype.setMap = function (map) {
    if (this.mapPrecomposeKey_) {
      (0, _events.unlistenByKey)(this.mapPrecomposeKey_);
      this.mapPrecomposeKey_ = null;
    }

    if (!map) {
      this.changed();
    }

    if (this.mapRenderKey_) {
      (0, _events.unlistenByKey)(this.mapRenderKey_);
      this.mapRenderKey_ = null;
    }

    if (map) {
      this.mapPrecomposeKey_ = (0, _events.listen)(map, _EventType2.default.PRECOMPOSE, function (evt) {
        var renderEvent =
        /** @type {import("../render/Event.js").default} */
        evt;
        var layerStatesArray = renderEvent.frameState.layerStatesArray;
        var layerState = this.getLayerState(false); // A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.

        (0, _asserts.assert)(!layerStatesArray.some(function (arrayLayerState) {
          return arrayLayerState.layer === layerState.layer;
        }), 67);
        layerStatesArray.push(layerState);
      }, this);
      this.mapRenderKey_ = (0, _events.listen)(this, _EventType.default.CHANGE, map.render, map);
      this.changed();
    }
  };
  /**
   * Set the layer source.
   * @param {SourceType} source The layer source.
   * @observable
   * @api
   */


  Layer.prototype.setSource = function (source) {
    this.set(_Property.default.SOURCE, source);
  };
  /**
   * Get the renderer for this layer.
   * @return {import("../renderer/Layer.js").default} The layer renderer.
   */


  Layer.prototype.getRenderer = function () {
    if (!this.renderer_) {
      this.renderer_ = this.createRenderer();
    }

    return this.renderer_;
  };
  /**
   * @return {boolean} The layer has a renderer.
   */


  Layer.prototype.hasRenderer = function () {
    return !!this.renderer_;
  };
  /**
   * Create a renderer for this layer.
   * @return {import("../renderer/Layer.js").default} A layer renderer.
   * @protected
   */


  Layer.prototype.createRenderer = function () {
    return null;
  };
  /**
   * Clean up.
   */


  Layer.prototype.disposeInternal = function () {
    this.setSource(null);

    _super.prototype.disposeInternal.call(this);
  };

  return Layer;
}(_Base.default);
/**
 * Return `true` if the layer is visible and if the provided view state
 * has resolution and zoom levels that are in range of the layer's min/max.
 * @param {State} layerState Layer state.
 * @param {import("../View.js").State} viewState View state.
 * @return {boolean} The layer is visible at the given view state.
 */


function inView(layerState, viewState) {
  if (!layerState.visible) {
    return false;
  }

  var resolution = viewState.resolution;

  if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) {
    return false;
  }

  var zoom = viewState.zoom;
  return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}

var _default = Layer;
exports.default = _default;
},{"./Base.js":"ol/layer/Base.js","../events/EventType.js":"ol/events/EventType.js","./Property.js":"ol/layer/Property.js","../render/EventType.js":"ol/render/EventType.js","../source/State.js":"ol/source/State.js","../asserts.js":"ol/asserts.js","../obj.js":"ol/obj.js","../Object.js":"ol/Object.js","../events.js":"ol/events.js"}],"ol/ImageState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/ImageState
 */

/**
 * @enum {number}
 */
var _default = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
exports.default = _default;
},{}],"ol/size.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffer = buffer;
exports.hasArea = hasArea;
exports.scale = scale;
exports.toSize = toSize;

/**
 * @module ol/size
 */

/**
 * An array of numbers representing a size: `[width, height]`.
 * @typedef {Array<number>} Size
 * @api
 */

/**
 * Returns a buffered size.
 * @param {Size} size Size.
 * @param {number} num The amount by which to buffer.
 * @param {Size=} opt_size Optional reusable size array.
 * @return {Size} The buffered size.
 */
function buffer(size, num, opt_size) {
  if (opt_size === undefined) {
    opt_size = [0, 0];
  }

  opt_size[0] = size[0] + 2 * num;
  opt_size[1] = size[1] + 2 * num;
  return opt_size;
}
/**
 * Determines if a size has a positive area.
 * @param {Size} size The size to test.
 * @return {boolean} The size has a positive area.
 */


function hasArea(size) {
  return size[0] > 0 && size[1] > 0;
}
/**
 * Returns a size scaled by a ratio. The result will be an array of integers.
 * @param {Size} size Size.
 * @param {number} ratio Ratio.
 * @param {Size=} opt_size Optional reusable size array.
 * @return {Size} The scaled size.
 */


function scale(size, ratio, opt_size) {
  if (opt_size === undefined) {
    opt_size = [0, 0];
  }

  opt_size[0] = size[0] * ratio + 0.5 | 0;
  opt_size[1] = size[1] * ratio + 0.5 | 0;
  return opt_size;
}
/**
 * Returns an `Size` array for the passed in number (meaning: square) or
 * `Size` array.
 * (meaning: non-square),
 * @param {number|Size} size Width and height.
 * @param {Size=} opt_size Optional reusable size array.
 * @return {Size} Size.
 * @api
 */


function toSize(size, opt_size) {
  if (Array.isArray(size)) {
    return size;
  } else {
    if (opt_size === undefined) {
      opt_size = [size, size];
    } else {
      opt_size[0] = size;
      opt_size[1] = size;
    }

    return opt_size;
  }
}
},{}],"ol/style/Image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util.js");

var _size = require("../size.js");

/**
 * @module ol/style/Image
 */

/**
 * @typedef {Object} Options
 * @property {number} opacity
 * @property {boolean} rotateWithView
 * @property {number} rotation
 * @property {number|import("../size.js").Size} scale
 * @property {Array<number>} displacement
 */

/**
 * @classdesc
 * A base class used for creating subclasses and not instantiated in
 * apps. Base class for {@link module:ol/style/Icon~Icon}, {@link module:ol/style/Circle~CircleStyle} and
 * {@link module:ol/style/RegularShape~RegularShape}.
 * @abstract
 * @api
 */
var ImageStyle =
/** @class */
function () {
  /**
   * @param {Options} options Options.
   */
  function ImageStyle(options) {
    /**
     * @private
     * @type {number}
     */
    this.opacity_ = options.opacity;
    /**
     * @private
     * @type {boolean}
     */

    this.rotateWithView_ = options.rotateWithView;
    /**
     * @private
     * @type {number}
     */

    this.rotation_ = options.rotation;
    /**
     * @private
     * @type {number|import("../size.js").Size}
     */

    this.scale_ = options.scale;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.scaleArray_ = (0, _size.toSize)(options.scale);
    /**
     * @private
     * @type {Array<number>}
     */

    this.displacement_ = options.displacement;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */


  ImageStyle.prototype.clone = function () {
    var scale = this.getScale();
    return new ImageStyle({
      opacity: this.getOpacity(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice()
    });
  };
  /**
   * Get the symbolizer opacity.
   * @return {number} Opacity.
   * @api
   */


  ImageStyle.prototype.getOpacity = function () {
    return this.opacity_;
  };
  /**
   * Determine whether the symbolizer rotates with the map.
   * @return {boolean} Rotate with map.
   * @api
   */


  ImageStyle.prototype.getRotateWithView = function () {
    return this.rotateWithView_;
  };
  /**
   * Get the symoblizer rotation.
   * @return {number} Rotation.
   * @api
   */


  ImageStyle.prototype.getRotation = function () {
    return this.rotation_;
  };
  /**
   * Get the symbolizer scale.
   * @return {number|import("../size.js").Size} Scale.
   * @api
   */


  ImageStyle.prototype.getScale = function () {
    return this.scale_;
  };
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */


  ImageStyle.prototype.getScaleArray = function () {
    return this.scaleArray_;
  };
  /**
   * Get the displacement of the shape
   * @return {Array<number>} Shape's center displacement
   * @api
   */


  ImageStyle.prototype.getDisplacement = function () {
    return this.displacement_;
  };
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @abstract
   * @return {Array<number>} Anchor.
   */


  ImageStyle.prototype.getAnchor = function () {
    return (0, _util.abstract)();
  };
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */


  ImageStyle.prototype.getImage = function (pixelRatio) {
    return (0, _util.abstract)();
  };
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */


  ImageStyle.prototype.getHitDetectionImage = function () {
    return (0, _util.abstract)();
  };
  /*
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * */


  ImageStyle.prototype.getPixelRatio = function (pixelRatio) {
    return 1;
  };
  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */


  ImageStyle.prototype.getImageState = function () {
    return (0, _util.abstract)();
  };
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */


  ImageStyle.prototype.getImageSize = function () {
    return (0, _util.abstract)();
  };
  /**
   * @abstract
   * @return {import("../size.js").Size} Size of the hit-detection image.
   */


  ImageStyle.prototype.getHitDetectionImageSize = function () {
    return (0, _util.abstract)();
  };
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */


  ImageStyle.prototype.getOrigin = function () {
    return (0, _util.abstract)();
  };
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */


  ImageStyle.prototype.getSize = function () {
    return (0, _util.abstract)();
  };
  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */


  ImageStyle.prototype.setOpacity = function (opacity) {
    this.opacity_ = opacity;
  };
  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */


  ImageStyle.prototype.setRotateWithView = function (rotateWithView) {
    this.rotateWithView_ = rotateWithView;
  };
  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */


  ImageStyle.prototype.setRotation = function (rotation) {
    this.rotation_ = rotation;
  };
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */


  ImageStyle.prototype.setScale = function (scale) {
    this.scale_ = scale;
    this.scaleArray_ = (0, _size.toSize)(scale);
  };
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */


  ImageStyle.prototype.listenImageChange = function (listener) {
    (0, _util.abstract)();
  };
  /**
   * Load not yet loaded URI.
   * @abstract
   */


  ImageStyle.prototype.load = function () {
    (0, _util.abstract)();
  };
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */


  ImageStyle.prototype.unlistenImageChange = function (listener) {
    (0, _util.abstract)();
  };

  return ImageStyle;
}();

var _default = ImageStyle;
exports.default = _default;
},{"../util.js":"ol/util.js","../size.js":"ol/size.js"}],"ol/color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asString = asString;
exports.asArray = asArray;
exports.normalize = normalize;
exports.toString = toString;
exports.isStringColor = isStringColor;
exports.fromString = void 0;

var _asserts = require("./asserts.js");

var _math = require("./math.js");

/**
 * @module ol/color
 */

/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 * @typedef {Array<number>} Color
 * @api
 */

/**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */
var HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */

var NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
/**
 * Return the color as an rgba string.
 * @param {Color|string} color Color.
 * @return {string} Rgba string.
 * @api
 */

function asString(color) {
  if (typeof color === 'string') {
    return color;
  } else {
    return toString(color);
  }
}
/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */


function fromNamed(color) {
  var el = document.createElement('div');
  el.style.color = color;

  if (el.style.color !== '') {
    document.body.appendChild(el);
    var rgb = getComputedStyle(el).color;
    document.body.removeChild(el);
    return rgb;
  } else {
    return '';
  }
}
/**
 * @param {string} s String.
 * @return {Color} Color.
 */


var fromString = function () {
  // We maintain a small cache of parsed strings.  To provide cheap LRU-like
  // semantics, whenever the cache grows too large we simply delete an
  // arbitrary 25% of the entries.

  /**
   * @const
   * @type {number}
   */
  var MAX_CACHE_SIZE = 1024;
  /**
   * @type {Object<string, Color>}
   */

  var cache = {};
  /**
   * @type {number}
   */

  var cacheSize = 0;
  return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function (s) {
      var color;

      if (cache.hasOwnProperty(s)) {
        color = cache[s];
      } else {
        if (cacheSize >= MAX_CACHE_SIZE) {
          var i = 0;

          for (var key in cache) {
            if ((i++ & 3) === 0) {
              delete cache[key];
              --cacheSize;
            }
          }
        }

        color = fromStringInternal_(s);
        cache[s] = color;
        ++cacheSize;
      }

      return color;
    }
  );
}();
/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 * @param {Color|string} color Color.
 * @return {Color} Color.
 * @api
 */


exports.fromString = fromString;

function asArray(color) {
  if (Array.isArray(color)) {
    return color;
  } else {
    return fromString(color);
  }
}
/**
 * @param {string} s String.
 * @private
 * @return {Color} Color.
 */


function fromStringInternal_(s) {
  var r, g, b, a, color;

  if (NAMED_COLOR_RE_.exec(s)) {
    s = fromNamed(s);
  }

  if (HEX_COLOR_RE_.exec(s)) {
    // hex
    var n = s.length - 1; // number of hex digits

    var d = // number of digits per channel
    void 0; // number of digits per channel

    if (n <= 4) {
      d = 1;
    } else {
      d = 2;
    }

    var hasAlpha = n === 4 || n === 8;
    r = parseInt(s.substr(1 + 0 * d, d), 16);
    g = parseInt(s.substr(1 + 1 * d, d), 16);
    b = parseInt(s.substr(1 + 2 * d, d), 16);

    if (hasAlpha) {
      a = parseInt(s.substr(1 + 3 * d, d), 16);
    } else {
      a = 255;
    }

    if (d == 1) {
      r = (r << 4) + r;
      g = (g << 4) + g;
      b = (b << 4) + b;

      if (hasAlpha) {
        a = (a << 4) + a;
      }
    }

    color = [r, g, b, a / 255];
  } else if (s.indexOf('rgba(') == 0) {
    // rgba()
    color = s.slice(5, -1).split(',').map(Number);
    normalize(color);
  } else if (s.indexOf('rgb(') == 0) {
    // rgb()
    color = s.slice(4, -1).split(',').map(Number);
    color.push(1);
    normalize(color);
  } else {
    (0, _asserts.assert)(false, 14); // Invalid color
  }

  return color;
}
/**
 * TODO this function is only used in the test, we probably shouldn't export it
 * @param {Color} color Color.
 * @return {Color} Clamped color.
 */


function normalize(color) {
  color[0] = (0, _math.clamp)(color[0] + 0.5 | 0, 0, 255);
  color[1] = (0, _math.clamp)(color[1] + 0.5 | 0, 0, 255);
  color[2] = (0, _math.clamp)(color[2] + 0.5 | 0, 0, 255);
  color[3] = (0, _math.clamp)(color[3], 0, 1);
  return color;
}
/**
 * @param {Color} color Color.
 * @return {string} String.
 */


function toString(color) {
  var r = color[0];

  if (r != (r | 0)) {
    r = r + 0.5 | 0;
  }

  var g = color[1];

  if (g != (g | 0)) {
    g = g + 0.5 | 0;
  }

  var b = color[2];

  if (b != (b | 0)) {
    b = b + 0.5 | 0;
  }

  var a = color[3] === undefined ? 1 : color[3];
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
/**
 * @param {string} s String.
 * @return {boolean} Whether the string is actually a valid color
 */


function isStringColor(s) {
  if (NAMED_COLOR_RE_.test(s)) {
    s = fromNamed(s);
  }

  return HEX_COLOR_RE_.test(s) || s.indexOf('rgba(') === 0 || s.indexOf('rgb(') === 0;
}
},{"./asserts.js":"ol/asserts.js","./math.js":"ol/math.js"}],"ol/colorlike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asColorLike = asColorLike;

var _color = require("./color.js");

/**
 * @module ol/colorlike
 */

/**
 * A type accepted by CanvasRenderingContext2D.fillStyle
 * or CanvasRenderingContext2D.strokeStyle.
 * Represents a color, pattern, or gradient. The origin for patterns and
 * gradients as fill style is an increment of 512 css pixels from map coordinate
 * `[0, 0]`. For seamless repeat patterns, width and height of the pattern image
 * must be a factor of two (2, 4, 8, ..., 512).
 *
 * @typedef {string|CanvasPattern|CanvasGradient} ColorLike
 * @api
 */

/**
 * @param {import("./color.js").Color|ColorLike} color Color.
 * @return {ColorLike} The color as an {@link ol/colorlike~ColorLike}.
 * @api
 */
function asColorLike(color) {
  if (Array.isArray(color)) {
    return (0, _color.toString)(color);
  } else {
    return color;
  }
}
},{"./color.js":"ol/color.js"}],"ol/has.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PASSIVE_EVENT_LISTENERS = exports.IMAGE_DECODE = exports.WORKER_OFFSCREEN_CANVAS = exports.DEVICE_PIXEL_RATIO = exports.MAC = exports.WEBKIT = exports.SAFARI = exports.FIREFOX = void 0;

/**
 * @module ol/has
 */
var ua = typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
/**
 * User agent string says we are dealing with Firefox as browser.
 * @type {boolean}
 */

var FIREFOX = ua.indexOf('firefox') !== -1;
/**
 * User agent string says we are dealing with Safari as browser.
 * @type {boolean}
 */

exports.FIREFOX = FIREFOX;
var SAFARI = ua.indexOf('safari') !== -1 && ua.indexOf('chrom') == -1;
/**
 * User agent string says we are dealing with a WebKit engine.
 * @type {boolean}
 */

exports.SAFARI = SAFARI;
var WEBKIT = ua.indexOf('webkit') !== -1 && ua.indexOf('edge') == -1;
/**
 * User agent string says we are dealing with a Mac as platform.
 * @type {boolean}
 */

exports.WEBKIT = WEBKIT;
var MAC = ua.indexOf('macintosh') !== -1;
/**
 * The ratio between physical pixels and device-independent pixels
 * (dips) on the device (`window.devicePixelRatio`).
 * @const
 * @type {number}
 * @api
 */

exports.MAC = MAC;
var DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1;
/**
 * The execution context is a worker with OffscreenCanvas available.
 * @const
 * @type {boolean}
 */

exports.DEVICE_PIXEL_RATIO = DEVICE_PIXEL_RATIO;
var WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== 'undefined' && typeof OffscreenCanvas !== 'undefined' && self instanceof WorkerGlobalScope; //eslint-disable-line

/**
 * Image.prototype.decode() is supported.
 * @type {boolean}
 */

exports.WORKER_OFFSCREEN_CANVAS = WORKER_OFFSCREEN_CANVAS;
var IMAGE_DECODE = typeof Image !== 'undefined' && Image.prototype.decode;
/**
 * @type {boolean}
 */

exports.IMAGE_DECODE = IMAGE_DECODE;

var PASSIVE_EVENT_LISTENERS = function () {
  var passive = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passive = true;
      }
    });
    window.addEventListener('_', null, options);
    window.removeEventListener('_', null, options);
  } catch (error) {// passive not supported
  }

  return passive;
}();

exports.PASSIVE_EVENT_LISTENERS = PASSIVE_EVENT_LISTENERS;
},{}],"ol/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCanvasContext2D = createCanvasContext2D;
exports.outerWidth = outerWidth;
exports.outerHeight = outerHeight;
exports.replaceNode = replaceNode;
exports.removeNode = removeNode;
exports.removeChildren = removeChildren;
exports.replaceChildren = replaceChildren;

var _has = require("./has.js");

/**
 * @module ol/dom
 */
//FIXME Move this function to the canvas module

/**
 * Create an html canvas element and returns its 2d context.
 * @param {number=} opt_width Canvas width.
 * @param {number=} opt_height Canvas height.
 * @param {Array<HTMLCanvasElement>=} opt_canvasPool Canvas pool to take existing canvas from.
 * @return {CanvasRenderingContext2D} The context.
 */
function createCanvasContext2D(opt_width, opt_height, opt_canvasPool) {
  var canvas = opt_canvasPool && opt_canvasPool.length ? opt_canvasPool.shift() : _has.WORKER_OFFSCREEN_CANVAS ? new OffscreenCanvas(opt_width || 300, opt_height || 300) : document.createElement('canvas');

  if (opt_width) {
    canvas.width = opt_width;
  }

  if (opt_height) {
    canvas.height = opt_height;
  } //FIXME Allow OffscreenCanvasRenderingContext2D as return type


  return (
    /** @type {CanvasRenderingContext2D} */
    canvas.getContext('2d')
  );
}
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */


function outerWidth(element) {
  var width = element.offsetWidth;
  var style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
}
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */


function outerHeight(element) {
  var height = element.offsetHeight;
  var style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  return height;
}
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */


function replaceNode(newNode, oldNode) {
  var parent = oldNode.parentNode;

  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
}
/**
 * @param {Node} node The node to remove.
 * @returns {Node} The node that was removed or null.
 */


function removeNode(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
/**
 * @param {Node} node The node to remove the children from.
 */


function removeChildren(node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
}
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 * @param {Node} node The parent node whose children need reworking.
 * @param {Array<Node>} children The desired children.
 */


function replaceChildren(node, children) {
  var oldChildren = node.childNodes;

  for (var i = 0; true; ++i) {
    var oldChild = oldChildren[i];
    var newChild = children[i]; // check if our work is done

    if (!oldChild && !newChild) {
      break;
    } // check if children match


    if (oldChild === newChild) {
      continue;
    } // check if a new child needs to be added


    if (!oldChild) {
      node.appendChild(newChild);
      continue;
    } // check if an old child needs to be removed


    if (!newChild) {
      node.removeChild(oldChild);
      --i;
      continue;
    } // reorder


    node.insertBefore(newChild, oldChild);
  }
}
},{"./has.js":"ol/has.js"}],"ol/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFontParameters = exports.CLASS_COLLAPSED = exports.CLASS_CONTROL = exports.CLASS_UNSUPPORTED = exports.CLASS_UNSELECTABLE = exports.CLASS_SELECTABLE = exports.CLASS_HIDDEN = void 0;

/**
 * @module ol/css
 */

/**
 * @typedef {Object} FontParameters
 * @property {string} style
 * @property {string} variant
 * @property {string} weight
 * @property {string} size
 * @property {string} lineHeight
 * @property {string} family
 * @property {Array<string>} families
 */

/**
 * The CSS class for hidden feature.
 *
 * @const
 * @type {string}
 */
var CLASS_HIDDEN = 'ol-hidden';
/**
 * The CSS class that we'll give the DOM elements to have them selectable.
 *
 * @const
 * @type {string}
 */

exports.CLASS_HIDDEN = CLASS_HIDDEN;
var CLASS_SELECTABLE = 'ol-selectable';
/**
 * The CSS class that we'll give the DOM elements to have them unselectable.
 *
 * @const
 * @type {string}
 */

exports.CLASS_SELECTABLE = CLASS_SELECTABLE;
var CLASS_UNSELECTABLE = 'ol-unselectable';
/**
 * The CSS class for unsupported feature.
 *
 * @const
 * @type {string}
 */

exports.CLASS_UNSELECTABLE = CLASS_UNSELECTABLE;
var CLASS_UNSUPPORTED = 'ol-unsupported';
/**
 * The CSS class for controls.
 *
 * @const
 * @type {string}
 */

exports.CLASS_UNSUPPORTED = CLASS_UNSUPPORTED;
var CLASS_CONTROL = 'ol-control';
/**
 * The CSS class that we'll give the DOM elements that are collapsed, i.e.
 * to those elements which usually can be expanded.
 *
 * @const
 * @type {string}
 */

exports.CLASS_CONTROL = CLASS_CONTROL;
var CLASS_COLLAPSED = 'ol-collapsed';
/**
 * From http://stackoverflow.com/questions/10135697/regex-to-parse-any-css-font
 * @type {RegExp}
 */

exports.CLASS_COLLAPSED = CLASS_COLLAPSED;
var fontRegEx = new RegExp(['^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)', '(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)', '(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)', '(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?', '(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))', '(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))', '?\\s*([-,\\"\\\'\\sa-z]+?)\\s*$'].join(''), 'i');
var fontRegExMatchIndex = ['style', 'variant', 'weight', 'size', 'lineHeight', 'family'];
/**
 * Get the list of font families from a font spec.  Note that this doesn't work
 * for font families that have commas in them.
 * @param {string} fontSpec The CSS font property.
 * @return {FontParameters} The font parameters (or null if the input spec is invalid).
 */

var getFontParameters = function getFontParameters(fontSpec) {
  var match = fontSpec.match(fontRegEx);

  if (!match) {
    return null;
  }

  var style =
  /** @type {FontParameters} */
  {
    lineHeight: 'normal',
    size: '1.2em',
    style: 'normal',
    weight: 'normal',
    variant: 'normal'
  };

  for (var i = 0, ii = fontRegExMatchIndex.length; i < ii; ++i) {
    var value = match[i + 1];

    if (value !== undefined) {
      style[fontRegExMatchIndex[i]] = value;
    }
  }

  style.families = style.family.split(/,\s?/);
  return style;
};

exports.getFontParameters = getFontParameters;
},{}],"ol/render/canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureTextWidth = measureTextWidth;
exports.measureAndCacheTextWidth = measureAndCacheTextWidth;
exports.measureTextWidths = measureTextWidths;
exports.rotateAtOffset = rotateAtOffset;
exports.drawImageOrLabel = drawImageOrLabel;
exports.createTransformString = createTransformString;
exports.measureTextHeight = exports.registerFont = exports.textHeights = exports.labelCache = exports.checkedFonts = exports.defaultLineWidth = exports.defaultPadding = exports.defaultTextBaseline = exports.defaultTextAlign = exports.defaultStrokeStyle = exports.defaultMiterLimit = exports.defaultLineJoin = exports.defaultLineDashOffset = exports.defaultLineDash = exports.defaultLineCap = exports.defaultFillStyle = exports.defaultFont = void 0;

var _Object = _interopRequireDefault(require("../Object.js"));

var _Target = _interopRequireDefault(require("../events/Target.js"));

var _has = require("../has.js");

var _obj = require("../obj.js");

var _dom = require("../dom.js");

var _css = require("../css.js");

var _transform = require("../transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas
 */

/**
 * @typedef {Object} FillState
 * @property {import("../colorlike.js").ColorLike} fillStyle
 */

/**
 * @typedef Label
 * @property {number} width
 * @property {number} height
 * @property {Array<string|number>} contextInstructions
 */

/**
 * @typedef {Object} FillStrokeState
 * @property {import("../colorlike.js").ColorLike} [currentFillStyle]
 * @property {import("../colorlike.js").ColorLike} [currentStrokeStyle]
 * @property {CanvasLineCap} [currentLineCap]
 * @property {Array<number>} currentLineDash
 * @property {number} [currentLineDashOffset]
 * @property {CanvasLineJoin} [currentLineJoin]
 * @property {number} [currentLineWidth]
 * @property {number} [currentMiterLimit]
 * @property {number} [lastStroke]
 * @property {import("../colorlike.js").ColorLike} [fillStyle]
 * @property {import("../colorlike.js").ColorLike} [strokeStyle]
 * @property {CanvasLineCap} [lineCap]
 * @property {Array<number>} lineDash
 * @property {number} [lineDashOffset]
 * @property {CanvasLineJoin} [lineJoin]
 * @property {number} [lineWidth]
 * @property {number} [miterLimit]
 */

/**
 * @typedef {Object} StrokeState
 * @property {CanvasLineCap} lineCap
 * @property {Array<number>} lineDash
 * @property {number} lineDashOffset
 * @property {CanvasLineJoin} lineJoin
 * @property {number} lineWidth
 * @property {number} miterLimit
 * @property {import("../colorlike.js").ColorLike} strokeStyle
 */

/**
 * @typedef {Object} TextState
 * @property {string} font
 * @property {string} [textAlign]
 * @property {string} textBaseline
 * @property {string} [placement]
 * @property {number} [maxAngle]
 * @property {boolean} [overflow]
 * @property {import("../style/Fill.js").default} [backgroundFill]
 * @property {import("../style/Stroke.js").default} [backgroundStroke]
 * @property {import("../size.js").Size} [scale]
 * @property {Array<number>} [padding]
 */

/**
 * Container for decluttered replay instructions that need to be rendered or
 * omitted together, i.e. when styles render both an image and text, or for the
 * characters that form text along lines. The basic elements of this array are
 * `[minX, minY, maxX, maxY, count]`, where the first four entries are the
 * rendered extent of the group in pixel space. `count` is the number of styles
 * in the group, i.e. 2 when an image and a text are grouped, or 1 otherwise.
 * In addition to these four elements, declutter instruction arrays (i.e. the
 * arguments to {@link module:ol/render/canvas~drawImage} are appended to the array.
 * @typedef {Array<*>} DeclutterGroup
 */

/**
 * Declutter groups for support of multi geometries.
 * @typedef {Array<DeclutterGroup>} DeclutterGroups
 */

/**
 * @const
 * @type {string}
 */
var defaultFont = '10px sans-serif';
/**
 * @const
 * @type {import("../colorlike.js").ColorLike}
 */

exports.defaultFont = defaultFont;
var defaultFillStyle = '#000';
/**
 * @const
 * @type {CanvasLineCap}
 */

exports.defaultFillStyle = defaultFillStyle;
var defaultLineCap = 'round';
/**
 * @const
 * @type {Array<number>}
 */

exports.defaultLineCap = defaultLineCap;
var defaultLineDash = [];
/**
 * @const
 * @type {number}
 */

exports.defaultLineDash = defaultLineDash;
var defaultLineDashOffset = 0;
/**
 * @const
 * @type {CanvasLineJoin}
 */

exports.defaultLineDashOffset = defaultLineDashOffset;
var defaultLineJoin = 'round';
/**
 * @const
 * @type {number}
 */

exports.defaultLineJoin = defaultLineJoin;
var defaultMiterLimit = 10;
/**
 * @const
 * @type {import("../colorlike.js").ColorLike}
 */

exports.defaultMiterLimit = defaultMiterLimit;
var defaultStrokeStyle = '#000';
/**
 * @const
 * @type {string}
 */

exports.defaultStrokeStyle = defaultStrokeStyle;
var defaultTextAlign = 'center';
/**
 * @const
 * @type {string}
 */

exports.defaultTextAlign = defaultTextAlign;
var defaultTextBaseline = 'middle';
/**
 * @const
 * @type {Array<number>}
 */

exports.defaultTextBaseline = defaultTextBaseline;
var defaultPadding = [0, 0, 0, 0];
/**
 * @const
 * @type {number}
 */

exports.defaultPadding = defaultPadding;
var defaultLineWidth = 1;
/**
 * @type {BaseObject}
 */

exports.defaultLineWidth = defaultLineWidth;
var checkedFonts = new _Object.default();
/**
 * The label cache for text rendering. To change the default cache size of 2048
 * entries, use {@link module:ol/structs/LRUCache#setSize}.
 * Deprecated - there is no label cache any more.
 * @type {?}
 * @api
 * @deprecated
 */

exports.checkedFonts = checkedFonts;
var labelCache = new _Target.default();
exports.labelCache = labelCache;

labelCache.setSize = function () {
  console.warn('labelCache is deprecated.'); //eslint-disable-line
};
/**
 * @type {CanvasRenderingContext2D}
 */


var measureContext = null;
/**
 * @type {string}
 */

var measureFont;
/**
 * @type {!Object<string, number>}
 */

var textHeights = {};
/**
 * Clears the label cache when a font becomes available.
 * @param {string} fontSpec CSS font spec.
 */

exports.textHeights = textHeights;

var registerFont = function () {
  var retries = 100;
  var size = '32px ';
  var referenceFonts = ['monospace', 'serif'];
  var len = referenceFonts.length;
  var text = "wmytzilWMYTZIL@#/&?$%10\uF013";
  var interval, referenceWidth;
  /**
   * @param {string} fontStyle Css font-style
   * @param {string} fontWeight Css font-weight
   * @param {*} fontFamily Css font-family
   * @return {boolean} Font with style and weight is available
   */

  function isAvailable(fontStyle, fontWeight, fontFamily) {
    var available = true;

    for (var i = 0; i < len; ++i) {
      var referenceFont = referenceFonts[i];
      referenceWidth = measureTextWidth(fontStyle + ' ' + fontWeight + ' ' + size + referenceFont, text);

      if (fontFamily != referenceFont) {
        var width = measureTextWidth(fontStyle + ' ' + fontWeight + ' ' + size + fontFamily + ',' + referenceFont, text); // If width and referenceWidth are the same, then the fallback was used
        // instead of the font we wanted, so the font is not available.

        available = available && width != referenceWidth;
      }
    }

    if (available) {
      return true;
    }

    return false;
  }

  function check() {
    var done = true;
    var fonts = checkedFonts.getKeys();

    for (var i = 0, ii = fonts.length; i < ii; ++i) {
      var font = fonts[i];

      if (checkedFonts.get(font) < retries) {
        if (isAvailable.apply(this, font.split('\n'))) {
          (0, _obj.clear)(textHeights); // Make sure that loaded fonts are picked up by Safari

          measureContext = null;
          measureFont = undefined;
          checkedFonts.set(font, retries);
        } else {
          checkedFonts.set(font, checkedFonts.get(font) + 1, true);
          done = false;
        }
      }
    }

    if (done) {
      clearInterval(interval);
      interval = undefined;
    }
  }

  return function (fontSpec) {
    var font = (0, _css.getFontParameters)(fontSpec);

    if (!font) {
      return;
    }

    var families = font.families;

    for (var i = 0, ii = families.length; i < ii; ++i) {
      var family = families[i];
      var key = font.style + '\n' + font.weight + '\n' + family;

      if (checkedFonts.get(key) === undefined) {
        checkedFonts.set(key, retries, true);

        if (!isAvailable(font.style, font.weight, family)) {
          checkedFonts.set(key, 0, true);

          if (interval === undefined) {
            interval = setInterval(check, 32);
          }
        }
      }
    }
  };
}();
/**
 * @param {string} font Font to use for measuring.
 * @return {import("../size.js").Size} Measurement.
 */


exports.registerFont = registerFont;

var measureTextHeight = function () {
  /**
   * @type {HTMLDivElement}
   */
  var div;
  var heights = textHeights;
  return function (fontSpec) {
    var height = heights[fontSpec];

    if (height == undefined) {
      if (_has.WORKER_OFFSCREEN_CANVAS) {
        var font = (0, _css.getFontParameters)(fontSpec);
        var metrics = measureText(fontSpec, 'Žg');
        var lineHeight = isNaN(Number(font.lineHeight)) ? 1.2 : Number(font.lineHeight);
        textHeights[fontSpec] = lineHeight * (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
      } else {
        if (!div) {
          div = document.createElement('div');
          div.innerHTML = 'M';
          div.style.margin = '0 !important';
          div.style.padding = '0 !important';
          div.style.position = 'absolute !important';
          div.style.left = '-99999px !important';
        }

        div.style.font = fontSpec;
        document.body.appendChild(div);
        height = div.offsetHeight;
        heights[fontSpec] = height;
        document.body.removeChild(div);
      }
    }

    return height;
  };
}();
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {TextMetrics} Text metrics.
 */


exports.measureTextHeight = measureTextHeight;

function measureText(font, text) {
  if (!measureContext) {
    measureContext = (0, _dom.createCanvasContext2D)(1, 1);
  }

  if (font != measureFont) {
    measureContext.font = font;
    measureFont = measureContext.font;
  }

  return measureContext.measureText(text);
}
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {number} Width.
 */


function measureTextWidth(font, text) {
  return measureText(font, text).width;
}
/**
 * Measure text width using a cache.
 * @param {string} font The font.
 * @param {string} text The text to measure.
 * @param {Object<string, number>} cache A lookup of cached widths by text.
 * @returns {number} The text width.
 */


function measureAndCacheTextWidth(font, text, cache) {
  if (text in cache) {
    return cache[text];
  }

  var width = measureTextWidth(font, text);
  cache[text] = width;
  return width;
}
/**
 * @param {string} font Font to use for measuring.
 * @param {Array<string>} lines Lines to measure.
 * @param {Array<number>} widths Array will be populated with the widths of
 * each line.
 * @return {number} Width of the whole text.
 */


function measureTextWidths(font, lines, widths) {
  var numLines = lines.length;
  var width = 0;

  for (var i = 0; i < numLines; ++i) {
    var currentWidth = measureTextWidth(font, lines[i]);
    width = Math.max(width, currentWidth);
    widths.push(currentWidth);
  }

  return width;
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} offsetX X offset.
 * @param {number} offsetY Y offset.
 */


function rotateAtOffset(context, rotation, offsetX, offsetY) {
  if (rotation !== 0) {
    context.translate(offsetX, offsetY);
    context.rotate(rotation);
    context.translate(-offsetX, -offsetY);
  }
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {import("../transform.js").Transform|null} transform Transform.
 * @param {number} opacity Opacity.
 * @param {Label|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} labelOrImage Label.
 * @param {number} originX Origin X.
 * @param {number} originY Origin Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {import("../size.js").Size} scale Scale.
 */


function drawImageOrLabel(context, transform, opacity, labelOrImage, originX, originY, w, h, x, y, scale) {
  context.save();

  if (opacity !== 1) {
    context.globalAlpha *= opacity;
  }

  if (transform) {
    context.setTransform.apply(context, transform);
  }

  if (
  /** @type {*} */
  labelOrImage.contextInstructions) {
    // label
    context.translate(x, y);
    context.scale(scale[0], scale[1]);
    executeLabelInstructions(
    /** @type {Label} */
    labelOrImage, context);
  } else if (scale[0] < 0 || scale[1] < 0) {
    // flipped image
    context.translate(x, y);
    context.scale(scale[0], scale[1]);
    context.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    labelOrImage, originX, originY, w, h, 0, 0, w, h);
  } else {
    // if image not flipped translate and scale can be avoided
    context.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    labelOrImage, originX, originY, w, h, x, y, w * scale[0], h * scale[1]);
  }

  context.restore();
}
/**
 * @param {Label} label Label.
 * @param {CanvasRenderingContext2D} context Context.
 */


function executeLabelInstructions(label, context) {
  var contextInstructions = label.contextInstructions;

  for (var i = 0, ii = contextInstructions.length; i < ii; i += 2) {
    if (Array.isArray(contextInstructions[i + 1])) {
      context[contextInstructions[i]].apply(context, contextInstructions[i + 1]);
    } else {
      context[contextInstructions[i]] = contextInstructions[i + 1];
    }
  }
}
/**
 * @type {HTMLCanvasElement}
 * @private
 */


var createTransformStringCanvas = null;
/**
 * @param {import("../transform.js").Transform} transform Transform.
 * @return {string} CSS transform.
 */

function createTransformString(transform) {
  if (_has.WORKER_OFFSCREEN_CANVAS) {
    return (0, _transform.toString)(transform);
  } else {
    if (!createTransformStringCanvas) {
      createTransformStringCanvas = (0, _dom.createCanvasContext2D)(1, 1).canvas;
    }

    createTransformStringCanvas.style.transform = (0, _transform.toString)(transform);
    return createTransformStringCanvas.style.transform;
  }
}
},{"../Object.js":"ol/Object.js","../events/Target.js":"ol/events/Target.js","../has.js":"ol/has.js","../obj.js":"ol/obj.js","../dom.js":"ol/dom.js","../css.js":"ol/css.js","../transform.js":"ol/transform.js"}],"ol/style/RegularShape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _Image = _interopRequireDefault(require("./Image.js"));

var _color = require("../color.js");

var _colorlike = require("../colorlike.js");

var _dom = require("../dom.js");

var _canvas = require("../render/canvas.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/RegularShape
 */
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} points Number of points for stars and regular polygons. In case of a polygon, the number of points
 * is the number of sides.
 * @property {number} [radius] Radius of a regular polygon.
 * @property {number} [radius1] Outer radius of a star.
 * @property {number} [radius2] Inner radius of a star.
 * @property {number} [angle=0] Shape's angle in radians. A value of 0 will have one of the shape's point facing up.
 * @property {Array<number>} [displacement=[0,0]] Displacement of the shape
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {boolean} [rotateWithView=false] Whether to rotate the shape with the view.
 */

/**
 * @typedef {Object} RenderOptions
 * @property {import("../colorlike.js").ColorLike} [strokeStyle]
 * @property {number} strokeWidth
 * @property {number} size
 * @property {CanvasLineCap} lineCap
 * @property {Array<number>} lineDash
 * @property {number} lineDashOffset
 * @property {CanvasLineJoin} lineJoin
 * @property {number} miterLimit
 */

/**
 * @classdesc
 * Set regular shape style for vector features. The resulting shape will be
 * a regular polygon when `radius` is provided, or a star when `radius1` and
 * `radius2` are provided.
 * @api
 */
var RegularShape =
/** @class */
function (_super) {
  __extends(RegularShape, _super);
  /**
   * @param {Options} options Options.
   */


  function RegularShape(options) {
    var _this = this;
    /**
     * @type {boolean}
     */


    var rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
    _this = _super.call(this, {
      opacity: 1,
      rotateWithView: rotateWithView,
      rotation: options.rotation !== undefined ? options.rotation : 0,
      scale: 1,
      displacement: options.displacement !== undefined ? options.displacement : [0, 0]
    }) || this;
    /**
     * @private
     * @type {Object<number, HTMLCanvasElement>}
     */

    _this.canvas_ = {};
    /**
     * @private
     * @type {HTMLCanvasElement}
     */

    _this.hitDetectionCanvas_ = null;
    /**
     * @private
     * @type {import("./Fill.js").default}
     */

    _this.fill_ = options.fill !== undefined ? options.fill : null;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.origin_ = [0, 0];
    /**
     * @private
     * @type {number}
     */

    _this.points_ = options.points;
    /**
     * @protected
     * @type {number}
     */

    _this.radius_ = options.radius !== undefined ? options.radius : options.radius1;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.radius2_ = options.radius2;
    /**
     * @private
     * @type {number}
     */

    _this.angle_ = options.angle !== undefined ? options.angle : 0;
    /**
     * @private
     * @type {import("./Stroke.js").default}
     */

    _this.stroke_ = options.stroke !== undefined ? options.stroke : null;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.anchor_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    _this.size_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    _this.imageSize_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    _this.hitDetectionImageSize_ = null;

    _this.render();

    return _this;
  }
  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   */


  RegularShape.prototype.clone = function () {
    var style = new RegularShape({
      fill: this.getFill() ? this.getFill().clone() : undefined,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice()
    });
    style.setOpacity(this.getOpacity());
    style.setScale(this.getScale());
    return style;
  };
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */


  RegularShape.prototype.getAnchor = function () {
    return this.anchor_;
  };
  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */


  RegularShape.prototype.getAngle = function () {
    return this.angle_;
  };
  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */


  RegularShape.prototype.getFill = function () {
    return this.fill_;
  };
  /**
   * @return {HTMLCanvasElement} Image element.
   */


  RegularShape.prototype.getHitDetectionImage = function () {
    if (!this.hitDetectionCanvas_) {
      var renderOptions = this.createRenderOptions();
      this.createHitDetectionCanvas_(renderOptions);
    }

    return this.hitDetectionCanvas_;
  };
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement} Image or Canvas element.
   * @api
   */


  RegularShape.prototype.getImage = function (pixelRatio) {
    if (!this.canvas_[pixelRatio || 1]) {
      var renderOptions = this.createRenderOptions();
      var context = (0, _dom.createCanvasContext2D)(renderOptions.size * pixelRatio || 1, renderOptions.size * pixelRatio || 1);
      this.draw_(renderOptions, context, 0, 0, pixelRatio || 1);
      this.canvas_[pixelRatio || 1] = context.canvas;
    }

    return this.canvas_[pixelRatio || 1];
  };
  /*
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * */


  RegularShape.prototype.getPixelRatio = function (pixelRatio) {
    return pixelRatio;
  };
  /**
   * @return {import("../size.js").Size} Image size.
   */


  RegularShape.prototype.getImageSize = function () {
    return this.imageSize_;
  };
  /**
   * @return {import("../size.js").Size} Size of the hit-detection image.
   */


  RegularShape.prototype.getHitDetectionImageSize = function () {
    return this.hitDetectionImageSize_;
  };
  /**
   * @return {import("../ImageState.js").default} Image state.
   */


  RegularShape.prototype.getImageState = function () {
    return _ImageState.default.LOADED;
  };
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */


  RegularShape.prototype.getOrigin = function () {
    return this.origin_;
  };
  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */


  RegularShape.prototype.getPoints = function () {
    return this.points_;
  };
  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */


  RegularShape.prototype.getRadius = function () {
    return this.radius_;
  };
  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */


  RegularShape.prototype.getRadius2 = function () {
    return this.radius2_;
  };
  /**
   * Get the size of the symbolizer (in pixels).
   * @return {import("../size.js").Size} Size.
   * @api
   */


  RegularShape.prototype.getSize = function () {
    return this.size_;
  };
  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */


  RegularShape.prototype.getStroke = function () {
    return this.stroke_;
  };
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */


  RegularShape.prototype.listenImageChange = function (listener) {};
  /**
   * Load not yet loaded URI.
   */


  RegularShape.prototype.load = function () {};
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */


  RegularShape.prototype.unlistenImageChange = function (listener) {};
  /**
   * @returns {RenderOptions}  The render options
   * @protected
   */


  RegularShape.prototype.createRenderOptions = function () {
    var lineCap = _canvas.defaultLineCap;
    var lineJoin = _canvas.defaultLineJoin;
    var miterLimit = 0;
    var lineDash = null;
    var lineDashOffset = 0;
    var strokeStyle;
    var strokeWidth = 0;

    if (this.stroke_) {
      strokeStyle = this.stroke_.getColor();

      if (strokeStyle === null) {
        strokeStyle = _canvas.defaultStrokeStyle;
      }

      strokeStyle = (0, _colorlike.asColorLike)(strokeStyle);
      strokeWidth = this.stroke_.getWidth();

      if (strokeWidth === undefined) {
        strokeWidth = _canvas.defaultLineWidth;
      }

      lineDash = this.stroke_.getLineDash();
      lineDashOffset = this.stroke_.getLineDashOffset();
      lineJoin = this.stroke_.getLineJoin();

      if (lineJoin === undefined) {
        lineJoin = _canvas.defaultLineJoin;
      }

      lineCap = this.stroke_.getLineCap();

      if (lineCap === undefined) {
        lineCap = _canvas.defaultLineCap;
      }

      miterLimit = this.stroke_.getMiterLimit();

      if (miterLimit === undefined) {
        miterLimit = _canvas.defaultMiterLimit;
      }
    }

    var size = 2 * (this.radius_ + strokeWidth) + 1;
    return {
      strokeStyle: strokeStyle,
      strokeWidth: strokeWidth,
      size: size,
      lineCap: lineCap,
      lineDash: lineDash,
      lineDashOffset: lineDashOffset,
      lineJoin: lineJoin,
      miterLimit: miterLimit
    };
  };
  /**
   * @protected
   */


  RegularShape.prototype.render = function () {
    var renderOptions = this.createRenderOptions();
    var context = (0, _dom.createCanvasContext2D)(renderOptions.size, renderOptions.size);
    this.draw_(renderOptions, context, 0, 0, 1);
    this.canvas_[1] = context.canvas; // canvas.width and height are rounded to the closest integer

    var size = context.canvas.width;
    var imageSize = size;
    var displacement = this.getDisplacement();
    this.hitDetectionImageSize_ = [renderOptions.size, renderOptions.size];
    this.createHitDetectionCanvas_(renderOptions);
    this.anchor_ = [size / 2 - displacement[0], size / 2 + displacement[1]];
    this.size_ = [size, size];
    this.imageSize_ = [imageSize, imageSize];
  };
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} x The origin for the symbol (x).
   * @param {number} y The origin for the symbol (y).
   * @param {number} pixelRatio The pixel ratio.
   */


  RegularShape.prototype.draw_ = function (renderOptions, context, x, y, pixelRatio) {
    var i, angle0, radiusC; // reset transform

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0); // then move to (x, y)

    context.translate(x, y);
    context.beginPath();
    var points = this.points_;

    if (points === Infinity) {
      context.arc(renderOptions.size / 2, renderOptions.size / 2, this.radius_, 0, 2 * Math.PI, true);
    } else {
      var radius2 = this.radius2_ !== undefined ? this.radius2_ : this.radius_;

      if (radius2 !== this.radius_) {
        points = 2 * points;
      }

      for (i = 0; i <= points; i++) {
        angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
        radiusC = i % 2 === 0 ? this.radius_ : radius2;
        context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0), renderOptions.size / 2 + radiusC * Math.sin(angle0));
      }
    }

    if (this.fill_) {
      var color = this.fill_.getColor();

      if (color === null) {
        color = _canvas.defaultFillStyle;
      }

      context.fillStyle = (0, _colorlike.asColorLike)(color);
      context.fill();
    }

    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;

      if (context.setLineDash && renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }

      context.lineCap = renderOptions.lineCap;
      context.lineJoin = renderOptions.lineJoin;
      context.miterLimit = renderOptions.miterLimit;
      context.stroke();
    }

    context.closePath();
  };
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   */


  RegularShape.prototype.createHitDetectionCanvas_ = function (renderOptions) {
    this.hitDetectionCanvas_ = this.getImage(1);

    if (this.fill_) {
      var color = this.fill_.getColor(); // determine if fill is transparent (or pattern or gradient)

      var opacity = 0;

      if (typeof color === 'string') {
        color = (0, _color.asArray)(color);
      }

      if (color === null) {
        opacity = 1;
      } else if (Array.isArray(color)) {
        opacity = color.length === 4 ? color[3] : 1;
      }

      if (opacity === 0) {
        // if a transparent fill style is set, create an extra hit-detection image
        // with a default fill style
        var context = (0, _dom.createCanvasContext2D)(renderOptions.size, renderOptions.size);
        this.hitDetectionCanvas_ = context.canvas;
        this.drawHitDetectionCanvas_(renderOptions, context, 0, 0);
      }
    }
  };
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   * @param {number} x The origin for the symbol (x).
   * @param {number} y The origin for the symbol (y).
   */


  RegularShape.prototype.drawHitDetectionCanvas_ = function (renderOptions, context, x, y) {
    // move to (x, y)
    context.translate(x, y);
    context.beginPath();
    var points = this.points_;

    if (points === Infinity) {
      context.arc(renderOptions.size / 2, renderOptions.size / 2, this.radius_, 0, 2 * Math.PI, true);
    } else {
      var radius2 = this.radius2_ !== undefined ? this.radius2_ : this.radius_;

      if (radius2 !== this.radius_) {
        points = 2 * points;
      }

      var i = void 0,
          radiusC = void 0,
          angle0 = void 0;

      for (i = 0; i <= points; i++) {
        angle0 = i * 2 * Math.PI / points - Math.PI / 2 + this.angle_;
        radiusC = i % 2 === 0 ? this.radius_ : radius2;
        context.lineTo(renderOptions.size / 2 + radiusC * Math.cos(angle0), renderOptions.size / 2 + radiusC * Math.sin(angle0));
      }
    }

    context.fillStyle = _canvas.defaultFillStyle;
    context.fill();

    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;

      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }

      context.stroke();
    }

    context.closePath();
  };

  return RegularShape;
}(_Image.default);

var _default = RegularShape;
exports.default = _default;
},{"../ImageState.js":"ol/ImageState.js","./Image.js":"ol/style/Image.js","../color.js":"ol/color.js","../colorlike.js":"ol/colorlike.js","../dom.js":"ol/dom.js","../render/canvas.js":"ol/render/canvas.js"}],"ol/style/Circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RegularShape = _interopRequireDefault(require("./RegularShape.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/Circle
 */
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * @typedef {Object} Options
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {number} radius Circle radius.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {Array<number>} [displacement=[0,0]] displacement
 */

/**
 * @classdesc
 * Set circle style for vector features.
 * @api
 */
var CircleStyle =
/** @class */
function (_super) {
  __extends(CircleStyle, _super);
  /**
   * @param {Options=} opt_options Options.
   */


  function CircleStyle(opt_options) {
    var _this = this;

    var options = opt_options ? opt_options : {};
    _this = _super.call(this, {
      points: Infinity,
      fill: options.fill,
      radius: options.radius,
      stroke: options.stroke,
      displacement: options.displacement !== undefined ? options.displacement : [0, 0]
    }) || this;
    return _this;
  }
  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   */


  CircleStyle.prototype.clone = function () {
    var style = new CircleStyle({
      fill: this.getFill() ? this.getFill().clone() : undefined,
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      radius: this.getRadius(),
      displacement: this.getDisplacement().slice()
    });
    style.setOpacity(this.getOpacity());
    style.setScale(this.getScale());
    return style;
  };
  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */


  CircleStyle.prototype.setRadius = function (radius) {
    this.radius_ = radius;
    this.render();
  };

  return CircleStyle;
}(_RegularShape.default);

var _default = CircleStyle;
exports.default = _default;
},{"./RegularShape.js":"ol/style/RegularShape.js"}],"ol/style/Fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/Fill
 */

/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color=null] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 */

/**
 * @classdesc
 * Set fill style for vector features.
 * @api
 */
var Fill =
/** @class */
function () {
  /**
   * @param {Options=} opt_options Options.
   */
  function Fill(opt_options) {
    var options = opt_options || {};
    /**
     * @private
     * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
     */

    this.color_ = options.color !== undefined ? options.color : null;
  }
  /**
   * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */


  Fill.prototype.clone = function () {
    var color = this.getColor();
    return new Fill({
      color: Array.isArray(color) ? color.slice() : color || undefined
    });
  };
  /**
   * Get the fill color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */


  Fill.prototype.getColor = function () {
    return this.color_;
  };
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */


  Fill.prototype.setColor = function (color) {
    this.color_ = color;
  };

  return Fill;
}();

var _default = Fill;
exports.default = _default;
},{}],"ol/style/Stroke.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/Stroke
 */

/**
 * @typedef {Object} Options
 * @property {import("../color.js").Color|import("../colorlike.js").ColorLike} [color] A color, gradient or pattern.
 * See {@link module:ol/color~Color} and {@link module:ol/colorlike~ColorLike} for possible formats.
 * Default null; if null, the Canvas/renderer default black will be used.
 * @property {CanvasLineCap} [lineCap='round'] Line cap style: `butt`, `round`, or `square`.
 * @property {CanvasLineJoin} [lineJoin='round'] Line join style: `bevel`, `round`, or `miter`.
 * @property {Array<number>} [lineDash] Line dash pattern. Default is `null` (no dash).
 * Please note that Internet Explorer 10 and lower do not support the `setLineDash` method on
 * the `CanvasRenderingContext2D` and therefore this option will have no visual effect in these browsers.
 * @property {number} [lineDashOffset=0] Line dash offset.
 * @property {number} [miterLimit=10] Miter limit.
 * @property {number} [width] Width.
 */

/**
 * @classdesc
 * Set stroke style for vector features.
 * Note that the defaults given are the Canvas defaults, which will be used if
 * option is not defined. The `get` functions return whatever was entered in
 * the options; they will not return the default.
 * @api
 */
var Stroke =
/** @class */
function () {
  /**
   * @param {Options=} opt_options Options.
   */
  function Stroke(opt_options) {
    var options = opt_options || {};
    /**
     * @private
     * @type {import("../color.js").Color|import("../colorlike.js").ColorLike}
     */

    this.color_ = options.color !== undefined ? options.color : null;
    /**
     * @private
     * @type {CanvasLineCap|undefined}
     */

    this.lineCap_ = options.lineCap;
    /**
     * @private
     * @type {Array<number>}
     */

    this.lineDash_ = options.lineDash !== undefined ? options.lineDash : null;
    /**
     * @private
     * @type {number|undefined}
     */

    this.lineDashOffset_ = options.lineDashOffset;
    /**
     * @private
     * @type {CanvasLineJoin|undefined}
     */

    this.lineJoin_ = options.lineJoin;
    /**
     * @private
     * @type {number|undefined}
     */

    this.miterLimit_ = options.miterLimit;
    /**
     * @private
     * @type {number|undefined}
     */

    this.width_ = options.width;
  }
  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */


  Stroke.prototype.clone = function () {
    var color = this.getColor();
    return new Stroke({
      color: Array.isArray(color) ? color.slice() : color || undefined,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : undefined,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  };
  /**
   * Get the stroke color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */


  Stroke.prototype.getColor = function () {
    return this.color_;
  };
  /**
   * Get the line cap type for the stroke.
   * @return {CanvasLineCap|undefined} Line cap.
   * @api
   */


  Stroke.prototype.getLineCap = function () {
    return this.lineCap_;
  };
  /**
   * Get the line dash style for the stroke.
   * @return {Array<number>} Line dash.
   * @api
   */


  Stroke.prototype.getLineDash = function () {
    return this.lineDash_;
  };
  /**
   * Get the line dash offset for the stroke.
   * @return {number|undefined} Line dash offset.
   * @api
   */


  Stroke.prototype.getLineDashOffset = function () {
    return this.lineDashOffset_;
  };
  /**
   * Get the line join type for the stroke.
   * @return {CanvasLineJoin|undefined} Line join.
   * @api
   */


  Stroke.prototype.getLineJoin = function () {
    return this.lineJoin_;
  };
  /**
   * Get the miter limit for the stroke.
   * @return {number|undefined} Miter limit.
   * @api
   */


  Stroke.prototype.getMiterLimit = function () {
    return this.miterLimit_;
  };
  /**
   * Get the stroke width.
   * @return {number|undefined} Width.
   * @api
   */


  Stroke.prototype.getWidth = function () {
    return this.width_;
  };
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */


  Stroke.prototype.setColor = function (color) {
    this.color_ = color;
  };
  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */


  Stroke.prototype.setLineCap = function (lineCap) {
    this.lineCap_ = lineCap;
  };
  /**
   * Set the line dash.
   *
   * Please note that Internet Explorer 10 and lower [do not support][mdn] the
   * `setLineDash` method on the `CanvasRenderingContext2D` and therefore this
   * property will have no visual effect in these browsers.
   *
   * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
   *
   * @param {Array<number>} lineDash Line dash.
   * @api
   */


  Stroke.prototype.setLineDash = function (lineDash) {
    this.lineDash_ = lineDash;
  };
  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */


  Stroke.prototype.setLineDashOffset = function (lineDashOffset) {
    this.lineDashOffset_ = lineDashOffset;
  };
  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */


  Stroke.prototype.setLineJoin = function (lineJoin) {
    this.lineJoin_ = lineJoin;
  };
  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */


  Stroke.prototype.setMiterLimit = function (miterLimit) {
    this.miterLimit_ = miterLimit;
  };
  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */


  Stroke.prototype.setWidth = function (width) {
    this.width_ = width;
  };

  return Stroke;
}();

var _default = Stroke;
exports.default = _default;
},{}],"ol/style/Style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFunction = toFunction;
exports.createDefaultStyle = createDefaultStyle;
exports.createEditingStyle = createEditingStyle;
exports.default = void 0;

var _Circle = _interopRequireDefault(require("./Circle.js"));

var _Fill = _interopRequireDefault(require("./Fill.js"));

var _GeometryType = _interopRequireDefault(require("../geom/GeometryType.js"));

var _Stroke = _interopRequireDefault(require("./Stroke.js"));

var _asserts = require("../asserts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * A function that takes an {@link module:ol/Feature} and a `{number}`
 * representing the view's resolution. The function should return a
 * {@link module:ol/style/Style} or an array of them. This way e.g. a
 * vector layer can be styled. If the function returns `undefined`, the
 * feature will not be rendered.
 *
 * @typedef {function(import("../Feature.js").FeatureLike, number):(Style|Array<Style>|void)} StyleFunction
 */

/**
 * A {@link Style}, an array of {@link Style}, or a {@link StyleFunction}.
 * @typedef {Style|Array<Style>|StyleFunction} StyleLike
 */

/**
 * A function that takes an {@link module:ol/Feature} as argument and returns an
 * {@link module:ol/geom/Geometry} that will be rendered and styled for the feature.
 *
 * @typedef {function(import("../Feature.js").FeatureLike):
 *     (import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined)} GeometryFunction
 */

/**
 * Custom renderer function. Takes two arguments:
 *
 * 1. The pixel coordinates of the geometry in GeoJSON notation.
 * 2. The {@link module:ol/render~State} of the layer renderer.
 *
 * @typedef {function((import("../coordinate.js").Coordinate|Array<import("../coordinate.js").Coordinate>|Array<Array<import("../coordinate.js").Coordinate>>),import("../render.js").State): void}
 * RenderFunction
 */

/**
 * @typedef {Object} Options
 * @property {string|import("../geom/Geometry.js").default|GeometryFunction} [geometry] Feature property or geometry
 * or function returning a geometry to render for this style.
 * @property {import("./Fill.js").default} [fill] Fill style.
 * @property {import("./Image.js").default} [image] Image style.
 * @property {RenderFunction} [renderer] Custom renderer. When configured, `fill`, `stroke` and `image` will be
 * ignored, and the provided function will be called with each render frame for each geometry.
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Text.js").default} [text] Text style.
 * @property {number} [zIndex] Z index.
 */

/**
 * @classdesc
 * Container for vector feature rendering styles. Any changes made to the style
 * or its children through `set*()` methods will not take effect until the
 * feature or layer that uses the style is re-rendered.
 *
 * ## Feature styles
 *
 * If no style is defined, the following default style is used:
 * ```js
 *  import {Fill, Stroke, Circle, Style} from 'ol/style';
 *
 *  var fill = new Fill({
 *    color: 'rgba(255,255,255,0.4)'
 *  });
 *  var stroke = new Stroke({
 *    color: '#3399CC',
 *    width: 1.25
 *  });
 *  var styles = [
 *    new Style({
 *      image: new Circle({
 *        fill: fill,
 *        stroke: stroke,
 *        radius: 5
 *      }),
 *      fill: fill,
 *      stroke: stroke
 *    })
 *  ];
 * ```
 *
 * A separate editing style has the following defaults:
 * ```js
 *  import {Fill, Stroke, Circle, Style} from 'ol/style';
 *  import GeometryType from 'ol/geom/GeometryType';
 *
 *  var white = [255, 255, 255, 1];
 *  var blue = [0, 153, 255, 1];
 *  var width = 3;
 *  styles[GeometryType.POLYGON] = [
 *    new Style({
 *      fill: new Fill({
 *        color: [255, 255, 255, 0.5]
 *      })
 *    })
 *  ];
 *  styles[GeometryType.MULTI_POLYGON] =
 *      styles[GeometryType.POLYGON];
 *  styles[GeometryType.LINE_STRING] = [
 *    new Style({
 *      stroke: new Stroke({
 *        color: white,
 *        width: width + 2
 *      })
 *    }),
 *    new Style({
 *      stroke: new Stroke({
 *        color: blue,
 *        width: width
 *      })
 *    })
 *  ];
 *  styles[GeometryType.MULTI_LINE_STRING] =
 *      styles[GeometryType.LINE_STRING];
 *  styles[GeometryType.POINT] = [
 *    new Style({
 *      image: new Circle({
 *        radius: width * 2,
 *        fill: new Fill({
 *          color: blue
 *        }),
 *        stroke: new Stroke({
 *          color: white,
 *          width: width / 2
 *        })
 *      }),
 *      zIndex: Infinity
 *    })
 *  ];
 *  styles[GeometryType.MULTI_POINT] =
 *      styles[GeometryType.POINT];
 *  styles[GeometryType.GEOMETRY_COLLECTION] =
 *      styles[GeometryType.POLYGON].concat(
 *          styles[GeometryType.LINE_STRING],
 *          styles[GeometryType.POINT]
 *      );
 * ```
 *
 * @api
 */
var Style =
/** @class */
function () {
  /**
   * @param {Options=} opt_options Style options.
   */
  function Style(opt_options) {
    var options = opt_options || {};
    /**
     * @private
     * @type {string|import("../geom/Geometry.js").default|GeometryFunction}
     */

    this.geometry_ = null;
    /**
     * @private
     * @type {!GeometryFunction}
     */

    this.geometryFunction_ = defaultGeometryFunction;

    if (options.geometry !== undefined) {
      this.setGeometry(options.geometry);
    }
    /**
     * @private
     * @type {import("./Fill.js").default}
     */


    this.fill_ = options.fill !== undefined ? options.fill : null;
    /**
     * @private
     * @type {import("./Image.js").default}
     */

    this.image_ = options.image !== undefined ? options.image : null;
    /**
     * @private
     * @type {RenderFunction|null}
     */

    this.renderer_ = options.renderer !== undefined ? options.renderer : null;
    /**
     * @private
     * @type {import("./Stroke.js").default}
     */

    this.stroke_ = options.stroke !== undefined ? options.stroke : null;
    /**
     * @private
     * @type {import("./Text.js").default}
     */

    this.text_ = options.text !== undefined ? options.text : null;
    /**
     * @private
     * @type {number|undefined}
     */

    this.zIndex_ = options.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */


  Style.prototype.clone = function () {
    var geometry = this.getGeometry();

    if (geometry && _typeof(geometry) === 'object') {
      geometry =
      /** @type {import("../geom/Geometry.js").default} */
      geometry.clone();
    }

    return new Style({
      geometry: geometry,
      fill: this.getFill() ? this.getFill().clone() : undefined,
      image: this.getImage() ? this.getImage().clone() : undefined,
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      text: this.getText() ? this.getText().clone() : undefined,
      zIndex: this.getZIndex()
    });
  };
  /**
   * Get the custom renderer function that was configured with
   * {@link #setRenderer} or the `renderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */


  Style.prototype.getRenderer = function () {
    return this.renderer_;
  };
  /**
   * Sets a custom renderer function for this style. When set, `fill`, `stroke`
   * and `image` options of the style will be ignored.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */


  Style.prototype.setRenderer = function (renderer) {
    this.renderer_ = renderer;
  };
  /**
   * Get the geometry to be rendered.
   * @return {string|import("../geom/Geometry.js").default|GeometryFunction}
   * Feature property or geometry or function that returns the geometry that will
   * be rendered with this style.
   * @api
   */


  Style.prototype.getGeometry = function () {
    return this.geometry_;
  };
  /**
   * Get the function used to generate a geometry for rendering.
   * @return {!GeometryFunction} Function that is called with a feature
   * and returns the geometry to render instead of the feature's geometry.
   * @api
   */


  Style.prototype.getGeometryFunction = function () {
    return this.geometryFunction_;
  };
  /**
   * Get the fill style.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */


  Style.prototype.getFill = function () {
    return this.fill_;
  };
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */


  Style.prototype.setFill = function (fill) {
    this.fill_ = fill;
  };
  /**
   * Get the image style.
   * @return {import("./Image.js").default} Image style.
   * @api
   */


  Style.prototype.getImage = function () {
    return this.image_;
  };
  /**
   * Set the image style.
   * @param {import("./Image.js").default} image Image style.
   * @api
   */


  Style.prototype.setImage = function (image) {
    this.image_ = image;
  };
  /**
   * Get the stroke style.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */


  Style.prototype.getStroke = function () {
    return this.stroke_;
  };
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */


  Style.prototype.setStroke = function (stroke) {
    this.stroke_ = stroke;
  };
  /**
   * Get the text style.
   * @return {import("./Text.js").default} Text style.
   * @api
   */


  Style.prototype.getText = function () {
    return this.text_;
  };
  /**
   * Set the text style.
   * @param {import("./Text.js").default} text Text style.
   * @api
   */


  Style.prototype.setText = function (text) {
    this.text_ = text;
  };
  /**
   * Get the z-index for the style.
   * @return {number|undefined} ZIndex.
   * @api
   */


  Style.prototype.getZIndex = function () {
    return this.zIndex_;
  };
  /**
   * Set a geometry that is rendered instead of the feature's geometry.
   *
   * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
   *     Feature property or geometry or function returning a geometry to render
   *     for this style.
   * @api
   */


  Style.prototype.setGeometry = function (geometry) {
    if (typeof geometry === 'function') {
      this.geometryFunction_ = geometry;
    } else if (typeof geometry === 'string') {
      this.geometryFunction_ = function (feature) {
        return (
          /** @type {import("../geom/Geometry.js").default} */
          feature.get(geometry)
        );
      };
    } else if (!geometry) {
      this.geometryFunction_ = defaultGeometryFunction;
    } else if (geometry !== undefined) {
      this.geometryFunction_ = function () {
        return (
          /** @type {import("../geom/Geometry.js").default} */
          geometry
        );
      };
    }

    this.geometry_ = geometry;
  };
  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */


  Style.prototype.setZIndex = function (zIndex) {
    this.zIndex_ = zIndex;
  };

  return Style;
}();
/**
 * Convert the provided object into a style function.  Functions passed through
 * unchanged.  Arrays of Style or single style objects wrapped in a
 * new style function.
 * @param {StyleFunction|Array<Style>|Style} obj
 *     A style function, a single style, or an array of styles.
 * @return {StyleFunction} A style function.
 */


function toFunction(obj) {
  var styleFunction;

  if (typeof obj === 'function') {
    styleFunction = obj;
  } else {
    /**
     * @type {Array<Style>}
     */
    var styles_1;

    if (Array.isArray(obj)) {
      styles_1 = obj;
    } else {
      (0, _asserts.assert)(typeof
      /** @type {?} */
      obj.getZIndex === 'function', 41); // Expected an `Style` or an array of `Style`

      var style =
      /** @type {Style} */
      obj;
      styles_1 = [style];
    }

    styleFunction = function styleFunction() {
      return styles_1;
    };
  }

  return styleFunction;
}
/**
 * @type {Array<Style>}
 */


var defaultStyles = null;
/**
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {number} resolution Resolution.
 * @return {Array<Style>} Style.
 */

function createDefaultStyle(feature, resolution) {
  // We don't use an immediately-invoked function
  // and a closure so we don't get an error at script evaluation time in
  // browsers that do not support Canvas. (import("./Circle.js").CircleStyle does
  // canvas.getContext('2d') at construction time, which will cause an.error
  // in such browsers.)
  if (!defaultStyles) {
    var fill = new _Fill.default({
      color: 'rgba(255,255,255,0.4)'
    });
    var stroke = new _Stroke.default({
      color: '#3399CC',
      width: 1.25
    });
    defaultStyles = [new Style({
      image: new _Circle.default({
        fill: fill,
        stroke: stroke,
        radius: 5
      }),
      fill: fill,
      stroke: stroke
    })];
  }

  return defaultStyles;
}
/**
 * Default styles for editing features.
 * @return {Object<import("../geom/GeometryType.js").default, Array<Style>>} Styles
 */


function createEditingStyle() {
  /** @type {Object<import("../geom/GeometryType.js").default, Array<Style>>} */
  var styles = {};
  var white = [255, 255, 255, 1];
  var blue = [0, 153, 255, 1];
  var width = 3;
  styles[_GeometryType.default.POLYGON] = [new Style({
    fill: new _Fill.default({
      color: [255, 255, 255, 0.5]
    })
  })];
  styles[_GeometryType.default.MULTI_POLYGON] = styles[_GeometryType.default.POLYGON];
  styles[_GeometryType.default.LINE_STRING] = [new Style({
    stroke: new _Stroke.default({
      color: white,
      width: width + 2
    })
  }), new Style({
    stroke: new _Stroke.default({
      color: blue,
      width: width
    })
  })];
  styles[_GeometryType.default.MULTI_LINE_STRING] = styles[_GeometryType.default.LINE_STRING];
  styles[_GeometryType.default.CIRCLE] = styles[_GeometryType.default.POLYGON].concat(styles[_GeometryType.default.LINE_STRING]);
  styles[_GeometryType.default.POINT] = [new Style({
    image: new _Circle.default({
      radius: width * 2,
      fill: new _Fill.default({
        color: blue
      }),
      stroke: new _Stroke.default({
        color: white,
        width: width / 2
      })
    }),
    zIndex: Infinity
  })];
  styles[_GeometryType.default.MULTI_POINT] = styles[_GeometryType.default.POINT];
  styles[_GeometryType.default.GEOMETRY_COLLECTION] = styles[_GeometryType.default.POLYGON].concat(styles[_GeometryType.default.LINE_STRING], styles[_GeometryType.default.POINT]);
  return styles;
}
/**
 * Function that is called with a feature and returns its default geometry.
 * @param {import("../Feature.js").FeatureLike} feature Feature to get the geometry for.
 * @return {import("../geom/Geometry.js").default|import("../render/Feature.js").default|undefined} Geometry to render.
 */


function defaultGeometryFunction(feature) {
  return feature.getGeometry();
}

var _default = Style;
exports.default = _default;
},{"./Circle.js":"ol/style/Circle.js","./Fill.js":"ol/style/Fill.js","../geom/GeometryType.js":"ol/geom/GeometryType.js","./Stroke.js":"ol/style/Stroke.js","../asserts.js":"ol/asserts.js"}],"ol/layer/BaseVector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Layer = _interopRequireDefault(require("./Layer.js"));

var _obj = require("../obj.js");

var _Style = require("../style/Style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/layer/BaseVector
 */


/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {import("../render.js").OrderFunction} [renderOrder] Render order. Function to be used when sorting
 * features before rendering. By default features are drawn in the order that they are created. Use
 * `null` to avoid the sort, but get an undefined draw order.
 * @property {number} [renderBuffer=100] The buffer in pixels around the viewport extent used by the
 * renderer when getting features from the vector source for the rendering or hit-detection.
 * Recommended value: the size of the largest symbol, line width or label.
 * @property {import("../source/Vector.js").default} [source] Source.
 * @property {import("../PluggableMap.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link module:ol/Map#addLayer}.
 * @property {boolean} [declutter=false] Declutter images and text. Decluttering is applied to all
 * image and text styles of all Vector and VectorTile layers that have set this to `true`. The priority
 * is defined by the z-index of the layer, the `zIndex` of the style and the render order of features.
 * Higher z-index means higher priority. Within the same z-index, a feature rendered before another has
 * higher priority.
 * @property {import("../style/Style.js").StyleLike|null} [style] Layer style. When set to `null`, only
 * features that have their own style will be rendered. See {@link module:ol/style} for default style
 * which will be used if this is not set.
 * @property {boolean} [updateWhileAnimating=false] When set to `true`, feature batches will
 * be recreated during animations. This means that no vectors will be shown clipped, but the
 * setting will have a performance impact for large amounts of vector data. When set to `false`,
 * batches will be recreated when no animation is active.
 * @property {boolean} [updateWhileInteracting=false] When set to `true`, feature batches will
 * be recreated during interactions. See also `updateWhileAnimating`.
 */

/**
 * @enum {string}
 * @private
 */
var Property = {
  RENDER_ORDER: 'renderOrder'
};
/**
 * @classdesc
 * Vector data that is rendered client-side.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Vector.js").default|import("../source/VectorTile.js").default} VectorSourceType
 * @extends {Layer<VectorSourceType>}
 * @api
 */

var BaseVectorLayer =
/** @class */
function (_super) {
  __extends(BaseVectorLayer, _super);
  /**
   * @param {Options=} opt_options Options.
   */


  function BaseVectorLayer(opt_options) {
    var _this = this;

    var options = opt_options ? opt_options : {};
    var baseOptions = (0, _obj.assign)({}, options);
    delete baseOptions.style;
    delete baseOptions.renderBuffer;
    delete baseOptions.updateWhileAnimating;
    delete baseOptions.updateWhileInteracting;
    _this = _super.call(this, baseOptions) || this;
    /**
     * @private
     * @type {boolean}
     */

    _this.declutter_ = options.declutter !== undefined ? options.declutter : false;
    /**
     * @type {number}
     * @private
     */

    _this.renderBuffer_ = options.renderBuffer !== undefined ? options.renderBuffer : 100;
    /**
     * User provided style.
     * @type {import("../style/Style.js").StyleLike}
     * @private
     */

    _this.style_ = null;
    /**
     * Style function for use within the library.
     * @type {import("../style/Style.js").StyleFunction|undefined}
     * @private
     */

    _this.styleFunction_ = undefined;

    _this.setStyle(options.style);
    /**
     * @type {boolean}
     * @private
     */


    _this.updateWhileAnimating_ = options.updateWhileAnimating !== undefined ? options.updateWhileAnimating : false;
    /**
     * @type {boolean}
     * @private
     */

    _this.updateWhileInteracting_ = options.updateWhileInteracting !== undefined ? options.updateWhileInteracting : false;
    return _this;
  }
  /**
   * @return {boolean} Declutter.
   */


  BaseVectorLayer.prototype.getDeclutter = function () {
    return this.declutter_;
  };
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in {@link import("../PluggableMap.js").default#getFeaturesAtPixel}: Text
   * is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with an array of features.
   * @api
   */


  BaseVectorLayer.prototype.getFeatures = function (pixel) {
    return _super.prototype.getFeatures.call(this, pixel);
  };
  /**
   * @return {number|undefined} Render buffer.
   */


  BaseVectorLayer.prototype.getRenderBuffer = function () {
    return this.renderBuffer_;
  };
  /**
   * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
   *     order.
   */


  BaseVectorLayer.prototype.getRenderOrder = function () {
    return (
      /** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(Property.RENDER_ORDER)
    );
  };
  /**
   * Get the style for features.  This returns whatever was passed to the `style`
   * option at construction or to the `setStyle` method.
   * @return {import("../style/Style.js").StyleLike|null|undefined} Layer style.
   * @api
   */


  BaseVectorLayer.prototype.getStyle = function () {
    return this.style_;
  };
  /**
   * Get the style function.
   * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
   * @api
   */


  BaseVectorLayer.prototype.getStyleFunction = function () {
    return this.styleFunction_;
  };
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     animating.
   */


  BaseVectorLayer.prototype.getUpdateWhileAnimating = function () {
    return this.updateWhileAnimating_;
  };
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     interacting.
   */


  BaseVectorLayer.prototype.getUpdateWhileInteracting = function () {
    return this.updateWhileInteracting_;
  };
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */


  BaseVectorLayer.prototype.setRenderOrder = function (renderOrder) {
    this.set(Property.RENDER_ORDER, renderOrder);
  };
  /**
   * Set the style for features.  This can be a single style object, an array
   * of styles, or a function that takes a feature and resolution and returns
   * an array of styles. If set to `null`, the layer has no style (a `null` style),
   * so only features that have their own styles will be rendered in the layer. Call
   * `setStyle()` without arguments to reset to the default style. See
   * {@link module:ol/style} for information on the default style.
   * @param {(import("../style/Style.js").StyleLike|null)=} opt_style Layer style.
   * @api
   */


  BaseVectorLayer.prototype.setStyle = function (opt_style) {
    this.style_ = opt_style !== undefined ? opt_style : _Style.createDefaultStyle;
    this.styleFunction_ = opt_style === null ? undefined : (0, _Style.toFunction)(this.style_);
    this.changed();
  };

  return BaseVectorLayer;
}(_Layer.default);

var _default = BaseVectorLayer;
exports.default = _default;
},{"./Layer.js":"ol/layer/Layer.js","../obj.js":"ol/obj.js","../style/Style.js":"ol/style/Style.js"}],"ol/render/canvas/Instruction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.closePathInstruction = exports.beginPathInstruction = exports.strokeInstruction = exports.fillInstruction = void 0;

/**
 * @module ol/render/canvas/Instruction
 */

/**
 * @enum {number}
 */
var Instruction = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
};
/**
 * @type {Array<Instruction>}
 */

var fillInstruction = [Instruction.FILL];
/**
 * @type {Array<Instruction>}
 */

exports.fillInstruction = fillInstruction;
var strokeInstruction = [Instruction.STROKE];
/**
 * @type {Array<Instruction>}
 */

exports.strokeInstruction = strokeInstruction;
var beginPathInstruction = [Instruction.BEGIN_PATH];
/**
 * @type {Array<Instruction>}
 */

exports.beginPathInstruction = beginPathInstruction;
var closePathInstruction = [Instruction.CLOSE_PATH];
exports.closePathInstruction = closePathInstruction;
var _default = Instruction;
exports.default = _default;
},{}],"ol/render/VectorContext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/render/VectorContext
 */

/**
 * @classdesc
 * Context for drawing geometries.  A vector context is available on render
 * events and does not need to be constructed directly.
 * @api
 */
var VectorContext =
/** @class */
function () {
  function VectorContext() {}
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   */


  VectorContext.prototype.drawCustom = function (geometry, feature, renderer) {};
  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */


  VectorContext.prototype.drawGeometry = function (geometry) {};
  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */


  VectorContext.prototype.setStyle = function (style) {};
  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   */


  VectorContext.prototype.drawCircle = function (circleGeometry, feature) {};
  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   */


  VectorContext.prototype.drawFeature = function (feature, style) {};
  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   */


  VectorContext.prototype.drawGeometryCollection = function (geometryCollectionGeometry, feature) {};
  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawLineString = function (lineStringGeometry, feature) {};
  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawMultiLineString = function (multiLineStringGeometry, feature) {};
  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawMultiPoint = function (multiPointGeometry, feature) {};
  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawMultiPolygon = function (multiPolygonGeometry, feature) {};
  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawPoint = function (pointGeometry, feature) {};
  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawPolygon = function (polygonGeometry, feature) {};
  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */


  VectorContext.prototype.drawText = function (geometry, feature) {};
  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */


  VectorContext.prototype.setFillStrokeStyle = function (fillStyle, strokeStyle) {};
  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("./canvas.js").DeclutterGroup=} opt_declutterGroup Declutter.
   */


  VectorContext.prototype.setImageStyle = function (imageStyle, opt_declutterGroup) {};
  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("./canvas.js").DeclutterGroups=} opt_declutterGroups Declutter.
   */


  VectorContext.prototype.setTextStyle = function (textStyle, opt_declutterGroups) {};

  return VectorContext;
}();

var _default = VectorContext;
exports.default = _default;
},{}],"ol/render/canvas/Builder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Instruction = _interopRequireDefault(require("./Instruction.js"));

var _GeometryType = _interopRequireDefault(require("../../geom/GeometryType.js"));

var _Relationship = _interopRequireDefault(require("../../extent/Relationship.js"));

var _VectorContext = _interopRequireDefault(require("../VectorContext.js"));

var _colorlike = require("../../colorlike.js");

var _extent = require("../../extent.js");

var _canvas = require("../canvas.js");

var _array = require("../../array.js");

var _inflate = require("../../geom/flat/inflate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/render/canvas/Builder
 */


/**
 * @typedef {Object} SerializableInstructions
 * @property {Array<*>} instructions The rendering instructions.
 * @property {Array<*>} hitDetectionInstructions The rendering hit detection instructions.
 * @property {Array<number>} coordinates The array of all coordinates.
 * @property {!Object<string, import("../canvas.js").TextState>} [textStates] The text states (decluttering).
 * @property {!Object<string, import("../canvas.js").FillState>} [fillStates] The fill states (decluttering).
 * @property {!Object<string, import("../canvas.js").StrokeState>} [strokeStates] The stroke states (decluttering).
 */
var CanvasBuilder =
/** @class */
function (_super) {
  __extends(CanvasBuilder, _super);
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */


  function CanvasBuilder(tolerance, maxExtent, resolution, pixelRatio) {
    var _this = _super.call(this) || this;
    /**
     * @protected
     * @type {number}
     */


    _this.tolerance = tolerance;
    /**
     * @protected
     * @const
     * @type {import("../../extent.js").Extent}
     */

    _this.maxExtent = maxExtent;
    /**
     * @protected
     * @type {number}
     */

    _this.pixelRatio = pixelRatio;
    /**
     * @protected
     * @type {number}
     */

    _this.maxLineWidth = 0;
    /**
     * @protected
     * @const
     * @type {number}
     */

    _this.resolution = resolution;
    /**
     * @private
     * @type {Array<*>}
     */

    _this.beginGeometryInstruction1_ = null;
    /**
     * @private
     * @type {Array<*>}
     */

    _this.beginGeometryInstruction2_ = null;
    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */

    _this.bufferedMaxExtent_ = null;
    /**
     * @protected
     * @type {Array<*>}
     */

    _this.instructions = [];
    /**
     * @protected
     * @type {Array<number>}
     */

    _this.coordinates = [];
    /**
     * @private
     * @type {import("../../coordinate.js").Coordinate}
     */

    _this.tmpCoordinate_ = [];
    /**
     * @protected
     * @type {Array<*>}
     */

    _this.hitDetectionInstructions = [];
    /**
     * @protected
     * @type {import("../canvas.js").FillStrokeState}
     */

    _this.state =
    /** @type {import("../canvas.js").FillStrokeState} */
    {};
    return _this;
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */


  CanvasBuilder.prototype.applyPixelRatio = function (dashArray) {
    var pixelRatio = this.pixelRatio;
    return pixelRatio == 1 ? dashArray : dashArray.map(function (dash) {
      return dash * pixelRatio;
    });
  };
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */


  CanvasBuilder.prototype.appendFlatCoordinates = function (flatCoordinates, offset, end, stride, closed, skipFirst) {
    var myEnd = this.coordinates.length;
    var extent = this.getBufferedMaxExtent();

    if (skipFirst) {
      offset += stride;
    }

    var lastXCoord = flatCoordinates[offset];
    var lastYCoord = flatCoordinates[offset + 1];
    var nextCoord = this.tmpCoordinate_;
    var skipped = true;
    var i, lastRel, nextRel;

    for (i = offset + stride; i < end; i += stride) {
      nextCoord[0] = flatCoordinates[i];
      nextCoord[1] = flatCoordinates[i + 1];
      nextRel = (0, _extent.coordinateRelationship)(extent, nextCoord);

      if (nextRel !== lastRel) {
        if (skipped) {
          this.coordinates[myEnd++] = lastXCoord;
          this.coordinates[myEnd++] = lastYCoord;
        }

        this.coordinates[myEnd++] = nextCoord[0];
        this.coordinates[myEnd++] = nextCoord[1];
        skipped = false;
      } else if (nextRel === _Relationship.default.INTERSECTING) {
        this.coordinates[myEnd++] = nextCoord[0];
        this.coordinates[myEnd++] = nextCoord[1];
        skipped = false;
      } else {
        skipped = true;
      }

      lastXCoord = nextCoord[0];
      lastYCoord = nextCoord[1];
      lastRel = nextRel;
    } // Last coordinate equals first or only one point to append:


    if (closed && skipped || i === offset + stride) {
      this.coordinates[myEnd++] = lastXCoord;
      this.coordinates[myEnd++] = lastYCoord;
    }

    return myEnd;
  };
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */


  CanvasBuilder.prototype.drawCustomCoordinates_ = function (flatCoordinates, offset, ends, stride, builderEnds) {
    for (var i = 0, ii = ends.length; i < ii; ++i) {
      var end = ends[i];
      var builderEnd = this.appendFlatCoordinates(flatCoordinates, offset, end, stride, false, false);
      builderEnds.push(builderEnd);
      offset = end;
    }

    return offset;
  };
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   */


  CanvasBuilder.prototype.drawCustom = function (geometry, feature, renderer) {
    this.beginGeometry(geometry, feature);
    var type = geometry.getType();
    var stride = geometry.getStride();
    var builderBegin = this.coordinates.length;
    var flatCoordinates, builderEnd, builderEnds, builderEndss;
    var offset;

    if (type == _GeometryType.default.MULTI_POLYGON) {
      flatCoordinates =
      /** @type {import("../../geom/MultiPolygon.js").default} */
      geometry.getOrientedFlatCoordinates();
      builderEndss = [];
      var endss =
      /** @type {import("../../geom/MultiPolygon.js").default} */
      geometry.getEndss();
      offset = 0;

      for (var i = 0, ii = endss.length; i < ii; ++i) {
        var myEnds = [];
        offset = this.drawCustomCoordinates_(flatCoordinates, offset, endss[i], stride, myEnds);
        builderEndss.push(myEnds);
      }

      this.instructions.push([_Instruction.default.CUSTOM, builderBegin, builderEndss, geometry, renderer, _inflate.inflateMultiCoordinatesArray]);
    } else if (type == _GeometryType.default.POLYGON || type == _GeometryType.default.MULTI_LINE_STRING) {
      builderEnds = [];
      flatCoordinates = type == _GeometryType.default.POLYGON ?
      /** @type {import("../../geom/Polygon.js").default} */
      geometry.getOrientedFlatCoordinates() : geometry.getFlatCoordinates();
      offset = this.drawCustomCoordinates_(flatCoordinates, 0,
      /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
      geometry.getEnds(), stride, builderEnds);
      this.instructions.push([_Instruction.default.CUSTOM, builderBegin, builderEnds, geometry, renderer, _inflate.inflateCoordinatesArray]);
    } else if (type == _GeometryType.default.LINE_STRING || type == _GeometryType.default.MULTI_POINT) {
      flatCoordinates = geometry.getFlatCoordinates();
      builderEnd = this.appendFlatCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
      this.instructions.push([_Instruction.default.CUSTOM, builderBegin, builderEnd, geometry, renderer, _inflate.inflateCoordinates]);
    } else if (type == _GeometryType.default.POINT) {
      flatCoordinates = geometry.getFlatCoordinates();
      this.coordinates.push(flatCoordinates[0], flatCoordinates[1]);
      builderEnd = this.coordinates.length;
      this.instructions.push([_Instruction.default.CUSTOM, builderBegin, builderEnd, geometry, renderer]);
    }

    this.endGeometry(feature);
  };
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasBuilder.prototype.beginGeometry = function (geometry, feature) {
    var extent = geometry.getExtent();
    this.beginGeometryInstruction1_ = [_Instruction.default.BEGIN_GEOMETRY, feature, 0, extent];
    this.instructions.push(this.beginGeometryInstruction1_);
    this.beginGeometryInstruction2_ = [_Instruction.default.BEGIN_GEOMETRY, feature, 0, extent];
    this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  };
  /**
   * @return {SerializableInstructions} the serializable instructions.
   */


  CanvasBuilder.prototype.finish = function () {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  };
  /**
   * Reverse the hit detection instructions.
   */


  CanvasBuilder.prototype.reverseHitDetectionInstructions = function () {
    var hitDetectionInstructions = this.hitDetectionInstructions; // step 1 - reverse array

    hitDetectionInstructions.reverse(); // step 2 - reverse instructions within geometry blocks

    var i;
    var n = hitDetectionInstructions.length;
    var instruction;
    var type;
    var begin = -1;

    for (i = 0; i < n; ++i) {
      instruction = hitDetectionInstructions[i];
      type =
      /** @type {import("./Instruction.js").default} */
      instruction[0];

      if (type == _Instruction.default.END_GEOMETRY) {
        begin = i;
      } else if (type == _Instruction.default.BEGIN_GEOMETRY) {
        instruction[2] = i;
        (0, _array.reverseSubArray)(this.hitDetectionInstructions, begin, i);
        begin = -1;
      }
    }
  };
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */


  CanvasBuilder.prototype.setFillStrokeStyle = function (fillStyle, strokeStyle) {
    var state = this.state;

    if (fillStyle) {
      var fillStyleColor = fillStyle.getColor();
      state.fillStyle = (0, _colorlike.asColorLike)(fillStyleColor ? fillStyleColor : _canvas.defaultFillStyle);
    } else {
      state.fillStyle = undefined;
    }

    if (strokeStyle) {
      var strokeStyleColor = strokeStyle.getColor();
      state.strokeStyle = (0, _colorlike.asColorLike)(strokeStyleColor ? strokeStyleColor : _canvas.defaultStrokeStyle);
      var strokeStyleLineCap = strokeStyle.getLineCap();
      state.lineCap = strokeStyleLineCap !== undefined ? strokeStyleLineCap : _canvas.defaultLineCap;
      var strokeStyleLineDash = strokeStyle.getLineDash();
      state.lineDash = strokeStyleLineDash ? strokeStyleLineDash.slice() : _canvas.defaultLineDash;
      var strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      state.lineDashOffset = strokeStyleLineDashOffset ? strokeStyleLineDashOffset : _canvas.defaultLineDashOffset;
      var strokeStyleLineJoin = strokeStyle.getLineJoin();
      state.lineJoin = strokeStyleLineJoin !== undefined ? strokeStyleLineJoin : _canvas.defaultLineJoin;
      var strokeStyleWidth = strokeStyle.getWidth();
      state.lineWidth = strokeStyleWidth !== undefined ? strokeStyleWidth : _canvas.defaultLineWidth;
      var strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      state.miterLimit = strokeStyleMiterLimit !== undefined ? strokeStyleMiterLimit : _canvas.defaultMiterLimit;

      if (state.lineWidth > this.maxLineWidth) {
        this.maxLineWidth = state.lineWidth; // invalidate the buffered max extent cache

        this.bufferedMaxExtent_ = null;
      }
    } else {
      state.strokeStyle = undefined;
      state.lineCap = undefined;
      state.lineDash = null;
      state.lineDashOffset = undefined;
      state.lineJoin = undefined;
      state.lineWidth = undefined;
      state.miterLimit = undefined;
    }
  };
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */


  CanvasBuilder.prototype.createFill = function (state) {
    var fillStyle = state.fillStyle;
    /** @type {Array<*>} */

    var fillInstruction = [_Instruction.default.SET_FILL_STYLE, fillStyle];

    if (typeof fillStyle !== 'string') {
      // Fill is a pattern or gradient - align it!
      fillInstruction.push(true);
    }

    return fillInstruction;
  };
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */


  CanvasBuilder.prototype.applyStroke = function (state) {
    this.instructions.push(this.createStroke(state));
  };
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */


  CanvasBuilder.prototype.createStroke = function (state) {
    return [_Instruction.default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth * this.pixelRatio, state.lineCap, state.lineJoin, state.miterLimit, this.applyPixelRatio(state.lineDash), state.lineDashOffset * this.pixelRatio];
  };
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */


  CanvasBuilder.prototype.updateFillStyle = function (state, createFill) {
    var fillStyle = state.fillStyle;

    if (typeof fillStyle !== 'string' || state.currentFillStyle != fillStyle) {
      if (fillStyle !== undefined) {
        this.instructions.push(createFill.call(this, state));
      }

      state.currentFillStyle = fillStyle;
    }
  };
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */


  CanvasBuilder.prototype.updateStrokeStyle = function (state, applyStroke) {
    var strokeStyle = state.strokeStyle;
    var lineCap = state.lineCap;
    var lineDash = state.lineDash;
    var lineDashOffset = state.lineDashOffset;
    var lineJoin = state.lineJoin;
    var lineWidth = state.lineWidth;
    var miterLimit = state.miterLimit;

    if (state.currentStrokeStyle != strokeStyle || state.currentLineCap != lineCap || lineDash != state.currentLineDash && !(0, _array.equals)(state.currentLineDash, lineDash) || state.currentLineDashOffset != lineDashOffset || state.currentLineJoin != lineJoin || state.currentLineWidth != lineWidth || state.currentMiterLimit != miterLimit) {
      if (strokeStyle !== undefined) {
        applyStroke.call(this, state);
      }

      state.currentStrokeStyle = strokeStyle;
      state.currentLineCap = lineCap;
      state.currentLineDash = lineDash;
      state.currentLineDashOffset = lineDashOffset;
      state.currentLineJoin = lineJoin;
      state.currentLineWidth = lineWidth;
      state.currentMiterLimit = miterLimit;
    }
  };
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasBuilder.prototype.endGeometry = function (feature) {
    this.beginGeometryInstruction1_[2] = this.instructions.length;
    this.beginGeometryInstruction1_ = null;
    this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length;
    this.beginGeometryInstruction2_ = null;
    var endGeometryInstruction = [_Instruction.default.END_GEOMETRY, feature];
    this.instructions.push(endGeometryInstruction);
    this.hitDetectionInstructions.push(endGeometryInstruction);
  };
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */


  CanvasBuilder.prototype.getBufferedMaxExtent = function () {
    if (!this.bufferedMaxExtent_) {
      this.bufferedMaxExtent_ = (0, _extent.clone)(this.maxExtent);

      if (this.maxLineWidth > 0) {
        var width = this.resolution * (this.maxLineWidth + 1) / 2;
        (0, _extent.buffer)(this.bufferedMaxExtent_, width, this.bufferedMaxExtent_);
      }
    }

    return this.bufferedMaxExtent_;
  };

  return CanvasBuilder;
}(_VectorContext.default);

var _default = CanvasBuilder;
exports.default = _default;
},{"./Instruction.js":"ol/render/canvas/Instruction.js","../../geom/GeometryType.js":"ol/geom/GeometryType.js","../../extent/Relationship.js":"ol/extent/Relationship.js","../VectorContext.js":"ol/render/VectorContext.js","../../colorlike.js":"ol/colorlike.js","../../extent.js":"ol/extent.js","../canvas.js":"ol/render/canvas.js","../../array.js":"ol/array.js","../../geom/flat/inflate.js":"ol/geom/flat/inflate.js"}],"ol/render/canvas/ImageBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Builder = _interopRequireDefault(require("./Builder.js"));

var _Instruction = _interopRequireDefault(require("./Instruction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/render/canvas/ImageBuilder
 */


var CanvasImageBuilder =
/** @class */
function (_super) {
  __extends(CanvasImageBuilder, _super);
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */


  function CanvasImageBuilder(tolerance, maxExtent, resolution, pixelRatio) {
    var _this = _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
    /**
     * @private
     * @type {import("../canvas.js").DeclutterGroups}
     */


    _this.declutterGroups_ = null;
    /**
     * @private
     * @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement}
     */

    _this.hitDetectionImage_ = null;
    /**
     * @private
     * @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement}
     */

    _this.image_ = null;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.imagePixelRatio_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.anchorX_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.anchorY_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.height_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.opacity_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.originX_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.originY_ = undefined;
    /**
     * @private
     * @type {boolean|undefined}
     */

    _this.rotateWithView_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.rotation_ = undefined;
    /**
     * @private
     * @type {import("../../size.js").Size|undefined}
     */

    _this.scale_ = undefined;
    /**
     * @private
     * @type {number|undefined}
     */

    _this.width_ = undefined;
    return _this;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} My end.
   */


  CanvasImageBuilder.prototype.drawCoordinates_ = function (flatCoordinates, offset, end, stride) {
    return this.appendFlatCoordinates(flatCoordinates, offset, end, stride, false, false);
  };
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasImageBuilder.prototype.drawPoint = function (pointGeometry, feature) {
    if (!this.image_) {
      return;
    }

    this.beginGeometry(pointGeometry, feature);
    var flatCoordinates = pointGeometry.getFlatCoordinates();
    var stride = pointGeometry.getStride();
    var myBegin = this.coordinates.length;
    var myEnd = this.drawCoordinates_(flatCoordinates, 0, flatCoordinates.length, stride);
    this.instructions.push([_Instruction.default.DRAW_IMAGE, myBegin, myEnd, this.image_, // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, this.declutterGroups_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_)]);
    this.hitDetectionInstructions.push([_Instruction.default.DRAW_IMAGE, myBegin, myEnd, this.hitDetectionImage_, // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_, this.anchorY_, this.declutterGroups_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_]);
    this.endGeometry(feature);
  };
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasImageBuilder.prototype.drawMultiPoint = function (multiPointGeometry, feature) {
    if (!this.image_) {
      return;
    }

    this.beginGeometry(multiPointGeometry, feature);
    var flatCoordinates = multiPointGeometry.getFlatCoordinates();
    var stride = multiPointGeometry.getStride();
    var myBegin = this.coordinates.length;
    var myEnd = this.drawCoordinates_(flatCoordinates, 0, flatCoordinates.length, stride);
    this.instructions.push([_Instruction.default.DRAW_IMAGE, myBegin, myEnd, this.image_, // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, this.declutterGroups_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_)]);
    this.hitDetectionInstructions.push([_Instruction.default.DRAW_IMAGE, myBegin, myEnd, this.hitDetectionImage_, // Remaining arguments to DRAW_IMAGE are in alphabetical order
    this.anchorX_, this.anchorY_, this.declutterGroups_, this.height_, this.opacity_, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_]);
    this.endGeometry(feature);
  };
  /**
   * @return {import("./Builder.js").SerializableInstructions} the serializable instructions.
   */


  CanvasImageBuilder.prototype.finish = function () {
    this.reverseHitDetectionInstructions(); // FIXME this doesn't really protect us against further calls to draw*Geometry

    this.anchorX_ = undefined;
    this.anchorY_ = undefined;
    this.hitDetectionImage_ = null;
    this.image_ = null;
    this.imagePixelRatio_ = undefined;
    this.height_ = undefined;
    this.scale_ = undefined;
    this.opacity_ = undefined;
    this.originX_ = undefined;
    this.originY_ = undefined;
    this.rotateWithView_ = undefined;
    this.rotation_ = undefined;
    this.width_ = undefined;
    return _super.prototype.finish.call(this);
  };
  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {import("../canvas.js").DeclutterGroup} declutterGroups Declutter.
   */


  CanvasImageBuilder.prototype.setImageStyle = function (imageStyle, declutterGroups) {
    var anchor = imageStyle.getAnchor();
    var size = imageStyle.getSize();
    var hitDetectionImage = imageStyle.getHitDetectionImage();
    var image = imageStyle.getImage(this.pixelRatio);
    var origin = imageStyle.getOrigin();
    this.imagePixelRatio_ = imageStyle.getPixelRatio(this.pixelRatio);
    this.anchorX_ = anchor[0];
    this.anchorY_ = anchor[1];
    this.declutterGroups_ = declutterGroups;
    this.hitDetectionImage_ = hitDetectionImage;
    this.image_ = image;
    this.height_ = size[1];
    this.opacity_ = imageStyle.getOpacity();
    this.originX_ = origin[0];
    this.originY_ = origin[1];
    this.rotateWithView_ = imageStyle.getRotateWithView();
    this.rotation_ = imageStyle.getRotation();
    this.scale_ = imageStyle.getScaleArray();
    this.width_ = size[0];
  };

  return CanvasImageBuilder;
}(_Builder.default);

var _default = CanvasImageBuilder;
exports.default = _default;
},{"./Builder.js":"ol/render/canvas/Builder.js","./Instruction.js":"ol/render/canvas/Instruction.js"}],"ol/render/canvas/LineStringBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Builder = _interopRequireDefault(require("./Builder.js"));

var _Instruction = _interopRequireWildcard(require("./Instruction.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/render/canvas/LineStringBuilder
 */


var CanvasLineStringBuilder =
/** @class */
function (_super) {
  __extends(CanvasLineStringBuilder, _super);
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */


  function CanvasLineStringBuilder(tolerance, maxExtent, resolution, pixelRatio) {
    return _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */


  CanvasLineStringBuilder.prototype.drawFlatCoordinates_ = function (flatCoordinates, offset, end, stride) {
    var myBegin = this.coordinates.length;
    var myEnd = this.appendFlatCoordinates(flatCoordinates, offset, end, stride, false, false);
    var moveToLineToInstruction = [_Instruction.default.MOVE_TO_LINE_TO, myBegin, myEnd];
    this.instructions.push(moveToLineToInstruction);
    this.hitDetectionInstructions.push(moveToLineToInstruction);
    return end;
  };
  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasLineStringBuilder.prototype.drawLineString = function (lineStringGeometry, feature) {
    var state = this.state;
    var strokeStyle = state.strokeStyle;
    var lineWidth = state.lineWidth;

    if (strokeStyle === undefined || lineWidth === undefined) {
      return;
    }

    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(lineStringGeometry, feature);
    this.hitDetectionInstructions.push([_Instruction.default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, state.lineDash, state.lineDashOffset], _Instruction.beginPathInstruction);
    var flatCoordinates = lineStringGeometry.getFlatCoordinates();
    var stride = lineStringGeometry.getStride();
    this.drawFlatCoordinates_(flatCoordinates, 0, flatCoordinates.length, stride);
    this.hitDetectionInstructions.push(_Instruction.strokeInstruction);
    this.endGeometry(feature);
  };
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasLineStringBuilder.prototype.drawMultiLineString = function (multiLineStringGeometry, feature) {
    var state = this.state;
    var strokeStyle = state.strokeStyle;
    var lineWidth = state.lineWidth;

    if (strokeStyle === undefined || lineWidth === undefined) {
      return;
    }

    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(multiLineStringGeometry, feature);
    this.hitDetectionInstructions.push([_Instruction.default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, state.lineDash, state.lineDashOffset], _Instruction.beginPathInstruction);
    var ends = multiLineStringGeometry.getEnds();
    var flatCoordinates = multiLineStringGeometry.getFlatCoordinates();
    var stride = multiLineStringGeometry.getStride();
    var offset = 0;

    for (var i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.drawFlatCoordinates_(flatCoordinates, offset,
      /** @type {number} */
      ends[i], stride);
    }

    this.hitDetectionInstructions.push(_Instruction.strokeInstruction);
    this.endGeometry(feature);
  };
  /**
   * @return {import("./Builder.js").SerializableInstructions} the serializable instructions.
   */


  CanvasLineStringBuilder.prototype.finish = function () {
    var state = this.state;

    if (state.lastStroke != undefined && state.lastStroke != this.coordinates.length) {
      this.instructions.push(_Instruction.strokeInstruction);
    }

    this.reverseHitDetectionInstructions();
    this.state = null;
    return _super.prototype.finish.call(this);
  };
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */


  CanvasLineStringBuilder.prototype.applyStroke = function (state) {
    if (state.lastStroke != undefined && state.lastStroke != this.coordinates.length) {
      this.instructions.push(_Instruction.strokeInstruction);
      state.lastStroke = this.coordinates.length;
    }

    state.lastStroke = 0;

    _super.prototype.applyStroke.call(this, state);

    this.instructions.push(_Instruction.beginPathInstruction);
  };

  return CanvasLineStringBuilder;
}(_Builder.default);

var _default = CanvasLineStringBuilder;
exports.default = _default;
},{"./Builder.js":"ol/render/canvas/Builder.js","./Instruction.js":"ol/render/canvas/Instruction.js"}],"ol/render/canvas/PolygonBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Builder = _interopRequireDefault(require("./Builder.js"));

var _Instruction = _interopRequireWildcard(require("./Instruction.js"));

var _canvas = require("../canvas.js");

var _simplify = require("../../geom/flat/simplify.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/render/canvas/PolygonBuilder
 */


var CanvasPolygonBuilder =
/** @class */
function (_super) {
  __extends(CanvasPolygonBuilder, _super);
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */


  function CanvasPolygonBuilder(tolerance, maxExtent, resolution, pixelRatio) {
    return _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */


  CanvasPolygonBuilder.prototype.drawFlatCoordinatess_ = function (flatCoordinates, offset, ends, stride) {
    var state = this.state;
    var fill = state.fillStyle !== undefined;
    var stroke = state.strokeStyle !== undefined;
    var numEnds = ends.length;
    this.instructions.push(_Instruction.beginPathInstruction);
    this.hitDetectionInstructions.push(_Instruction.beginPathInstruction);

    for (var i = 0; i < numEnds; ++i) {
      var end = ends[i];
      var myBegin = this.coordinates.length;
      var myEnd = this.appendFlatCoordinates(flatCoordinates, offset, end, stride, true, !stroke);
      var moveToLineToInstruction = [_Instruction.default.MOVE_TO_LINE_TO, myBegin, myEnd];
      this.instructions.push(moveToLineToInstruction);
      this.hitDetectionInstructions.push(moveToLineToInstruction);

      if (stroke) {
        // Performance optimization: only call closePath() when we have a stroke.
        // Otherwise the ring is closed already (see appendFlatCoordinates above).
        this.instructions.push(_Instruction.closePathInstruction);
        this.hitDetectionInstructions.push(_Instruction.closePathInstruction);
      }

      offset = end;
    }

    if (fill) {
      this.instructions.push(_Instruction.fillInstruction);
      this.hitDetectionInstructions.push(_Instruction.fillInstruction);
    }

    if (stroke) {
      this.instructions.push(_Instruction.strokeInstruction);
      this.hitDetectionInstructions.push(_Instruction.strokeInstruction);
    }

    return offset;
  };
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   */


  CanvasPolygonBuilder.prototype.drawCircle = function (circleGeometry, feature) {
    var state = this.state;
    var fillStyle = state.fillStyle;
    var strokeStyle = state.strokeStyle;

    if (fillStyle === undefined && strokeStyle === undefined) {
      return;
    }

    this.setFillStrokeStyles_();
    this.beginGeometry(circleGeometry, feature);

    if (state.fillStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction.default.SET_FILL_STYLE, _canvas.defaultFillStyle]);
    }

    if (state.strokeStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction.default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, state.lineDash, state.lineDashOffset]);
    }

    var flatCoordinates = circleGeometry.getFlatCoordinates();
    var stride = circleGeometry.getStride();
    var myBegin = this.coordinates.length;
    this.appendFlatCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
    var circleInstruction = [_Instruction.default.CIRCLE, myBegin];
    this.instructions.push(_Instruction.beginPathInstruction, circleInstruction);
    this.hitDetectionInstructions.push(_Instruction.beginPathInstruction, circleInstruction);

    if (state.fillStyle !== undefined) {
      this.instructions.push(_Instruction.fillInstruction);
      this.hitDetectionInstructions.push(_Instruction.fillInstruction);
    }

    if (state.strokeStyle !== undefined) {
      this.instructions.push(_Instruction.strokeInstruction);
      this.hitDetectionInstructions.push(_Instruction.strokeInstruction);
    }

    this.endGeometry(feature);
  };
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasPolygonBuilder.prototype.drawPolygon = function (polygonGeometry, feature) {
    var state = this.state;
    var fillStyle = state.fillStyle;
    var strokeStyle = state.strokeStyle;

    if (fillStyle === undefined && strokeStyle === undefined) {
      return;
    }

    this.setFillStrokeStyles_();
    this.beginGeometry(polygonGeometry, feature);

    if (state.fillStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction.default.SET_FILL_STYLE, _canvas.defaultFillStyle]);
    }

    if (state.strokeStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction.default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, state.lineDash, state.lineDashOffset]);
    }

    var ends = polygonGeometry.getEnds();
    var flatCoordinates = polygonGeometry.getOrientedFlatCoordinates();
    var stride = polygonGeometry.getStride();
    this.drawFlatCoordinatess_(flatCoordinates, 0,
    /** @type {Array<number>} */
    ends, stride);
    this.endGeometry(feature);
  };
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasPolygonBuilder.prototype.drawMultiPolygon = function (multiPolygonGeometry, feature) {
    var state = this.state;
    var fillStyle = state.fillStyle;
    var strokeStyle = state.strokeStyle;

    if (fillStyle === undefined && strokeStyle === undefined) {
      return;
    }

    this.setFillStrokeStyles_();
    this.beginGeometry(multiPolygonGeometry, feature);

    if (state.fillStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction.default.SET_FILL_STYLE, _canvas.defaultFillStyle]);
    }

    if (state.strokeStyle !== undefined) {
      this.hitDetectionInstructions.push([_Instruction.default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, state.lineDash, state.lineDashOffset]);
    }

    var endss = multiPolygonGeometry.getEndss();
    var flatCoordinates = multiPolygonGeometry.getOrientedFlatCoordinates();
    var stride = multiPolygonGeometry.getStride();
    var offset = 0;

    for (var i = 0, ii = endss.length; i < ii; ++i) {
      offset = this.drawFlatCoordinatess_(flatCoordinates, offset, endss[i], stride);
    }

    this.endGeometry(feature);
  };
  /**
   * @return {import("./Builder.js").SerializableInstructions} the serializable instructions.
   */


  CanvasPolygonBuilder.prototype.finish = function () {
    this.reverseHitDetectionInstructions();
    this.state = null; // We want to preserve topology when drawing polygons.  Polygons are
    // simplified using quantization and point elimination. However, we might
    // have received a mix of quantized and non-quantized geometries, so ensure
    // that all are quantized by quantizing all coordinates in the batch.

    var tolerance = this.tolerance;

    if (tolerance !== 0) {
      var coordinates = this.coordinates;

      for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = (0, _simplify.snap)(coordinates[i], tolerance);
      }
    }

    return _super.prototype.finish.call(this);
  };
  /**
   * @private
   */


  CanvasPolygonBuilder.prototype.setFillStrokeStyles_ = function () {
    var state = this.state;
    var fillStyle = state.fillStyle;

    if (fillStyle !== undefined) {
      this.updateFillStyle(state, this.createFill);
    }

    if (state.strokeStyle !== undefined) {
      this.updateStrokeStyle(state, this.applyStroke);
    }
  };

  return CanvasPolygonBuilder;
}(_Builder.default);

var _default = CanvasPolygonBuilder;
exports.default = _default;
},{"./Builder.js":"ol/render/canvas/Builder.js","./Instruction.js":"ol/render/canvas/Instruction.js","../canvas.js":"ol/render/canvas.js","../../geom/flat/simplify.js":"ol/geom/flat/simplify.js"}],"ol/style/TextPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/TextPlacement
 */

/**
 * Text placement. One of `'point'`, `'line'`. Default is `'point'`. Note that
 * `'line'` requires the underlying geometry to be a {@link module:ol/geom/LineString~LineString},
 * {@link module:ol/geom/Polygon~Polygon}, {@link module:ol/geom/MultiLineString~MultiLineString} or
 * {@link module:ol/geom/MultiPolygon~MultiPolygon}.
 * @enum {string}
 */
var _default = {
  POINT: 'point',
  LINE: 'line'
};
exports.default = _default;
},{}],"ol/geom/flat/straightchunk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchingChunk = matchingChunk;

/**
 * @module ol/geom/flat/straightchunk
 */

/**
 * @param {number} maxAngle Maximum acceptable angle delta between segments.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Array<number>} Start and end of the first suitable chunk of the
 * given `flatCoordinates`.
 */
function matchingChunk(maxAngle, flatCoordinates, offset, end, stride) {
  var chunkStart = offset;
  var chunkEnd = offset;
  var chunkM = 0;
  var m = 0;
  var start = offset;
  var acos, i, m12, m23, x1, y1, x12, y12, x23, y23;

  for (i = offset; i < end; i += stride) {
    var x2 = flatCoordinates[i];
    var y2 = flatCoordinates[i + 1];

    if (x1 !== undefined) {
      x23 = x2 - x1;
      y23 = y2 - y1;
      m23 = Math.sqrt(x23 * x23 + y23 * y23);

      if (x12 !== undefined) {
        m += m12;
        acos = Math.acos((x12 * x23 + y12 * y23) / (m12 * m23));

        if (acos > maxAngle) {
          if (m > chunkM) {
            chunkM = m;
            chunkStart = start;
            chunkEnd = i;
          }

          m = 0;
          start = i - stride;
        }
      }

      m12 = m23;
      x12 = x23;
      y12 = y23;
    }

    x1 = x2;
    y1 = y2;
  }

  m += m23;
  return m > chunkM ? [start, i] : [chunkStart, chunkEnd];
}
},{}],"ol/render/canvas/TextBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TEXT_ALIGN = void 0;

var _Builder = _interopRequireDefault(require("./Builder.js"));

var _Instruction = _interopRequireDefault(require("./Instruction.js"));

var _GeometryType = _interopRequireDefault(require("../../geom/GeometryType.js"));

var _TextPlacement = _interopRequireDefault(require("../../style/TextPlacement.js"));

var _colorlike = require("../../colorlike.js");

var _canvas = require("../canvas.js");

var _util = require("../../util.js");

var _extent = require("../../extent.js");

var _straightchunk = require("../../geom/flat/straightchunk.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/render/canvas/TextBuilder
 */


/**
 * @const
 * @enum {number}
 */
var TEXT_ALIGN = {
  'left': 0,
  'end': 0,
  'center': 0.5,
  'right': 1,
  'start': 1,
  'top': 0,
  'middle': 0.5,
  'hanging': 0.2,
  'alphabetic': 0.8,
  'ideographic': 0.8,
  'bottom': 1
};
exports.TEXT_ALIGN = TEXT_ALIGN;

var CanvasTextBuilder =
/** @class */
function (_super) {
  __extends(CanvasTextBuilder, _super);
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */


  function CanvasTextBuilder(tolerance, maxExtent, resolution, pixelRatio) {
    var _this = _super.call(this, tolerance, maxExtent, resolution, pixelRatio) || this;
    /**
     * @private
     * @type {import("../canvas.js").DeclutterGroups}
     */


    _this.declutterGroups_;
    /**
     * @private
     * @type {Array<HTMLCanvasElement>}
     */

    _this.labels_ = null;
    /**
     * @private
     * @type {string}
     */

    _this.text_ = '';
    /**
     * @private
     * @type {number}
     */

    _this.textOffsetX_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.textOffsetY_ = 0;
    /**
     * @private
     * @type {boolean|undefined}
     */

    _this.textRotateWithView_ = undefined;
    /**
     * @private
     * @type {number}
     */

    _this.textRotation_ = 0;
    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */

    _this.textFillState_ = null;
    /**
     * @type {!Object<string, import("../canvas.js").FillState>}
     */

    _this.fillStates = {};
    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */

    _this.textStrokeState_ = null;
    /**
     * @type {!Object<string, import("../canvas.js").StrokeState>}
     */

    _this.strokeStates = {};
    /**
     * @private
     * @type {import("../canvas.js").TextState}
     */

    _this.textState_ =
    /** @type {import("../canvas.js").TextState} */
    {};
    /**
     * @type {!Object<string, import("../canvas.js").TextState>}
     */

    _this.textStates = {};
    /**
     * @private
     * @type {string}
     */

    _this.textKey_ = '';
    /**
     * @private
     * @type {string}
     */

    _this.fillKey_ = '';
    /**
     * @private
     * @type {string}
     */

    _this.strokeKey_ = '';
    return _this;
  }
  /**
   * @return {import("./Builder.js").SerializableInstructions} the serializable instructions.
   */


  CanvasTextBuilder.prototype.finish = function () {
    var instructions = _super.prototype.finish.call(this);

    instructions.textStates = this.textStates;
    instructions.fillStates = this.fillStates;
    instructions.strokeStates = this.strokeStates;
    return instructions;
  };
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */


  CanvasTextBuilder.prototype.drawText = function (geometry, feature) {
    var fillState = this.textFillState_;
    var strokeState = this.textStrokeState_;
    var textState = this.textState_;

    if (this.text_ === '' || !textState || !fillState && !strokeState) {
      return;
    }

    var begin = this.coordinates.length;
    var geometryType = geometry.getType();
    var flatCoordinates = null;
    var end = 2;
    var stride = geometry.getStride();
    var i, ii;

    if (textState.placement === _TextPlacement.default.LINE) {
      if (!(0, _extent.intersects)(this.getBufferedMaxExtent(), geometry.getExtent())) {
        return;
      }

      var ends = void 0;
      flatCoordinates = geometry.getFlatCoordinates();

      if (geometryType == _GeometryType.default.LINE_STRING) {
        ends = [flatCoordinates.length];
      } else if (geometryType == _GeometryType.default.MULTI_LINE_STRING) {
        ends =
        /** @type {import("../../geom/MultiLineString.js").default} */
        geometry.getEnds();
      } else if (geometryType == _GeometryType.default.POLYGON) {
        ends =
        /** @type {import("../../geom/Polygon.js").default} */
        geometry.getEnds().slice(0, 1);
      } else if (geometryType == _GeometryType.default.MULTI_POLYGON) {
        var endss =
        /** @type {import("../../geom/MultiPolygon.js").default} */
        geometry.getEndss();
        ends = [];

        for (i = 0, ii = endss.length; i < ii; ++i) {
          ends.push(endss[i][0]);
        }
      }

      this.beginGeometry(geometry, feature);
      var textAlign = textState.textAlign;
      var flatOffset = 0;
      var flatEnd = void 0;

      for (var o = 0, oo = ends.length; o < oo; ++o) {
        if (textAlign == undefined) {
          var range = (0, _straightchunk.matchingChunk)(textState.maxAngle, flatCoordinates, flatOffset, ends[o], stride);
          flatOffset = range[0];
          flatEnd = range[1];
        } else {
          flatEnd = ends[o];
        }

        for (i = flatOffset; i < flatEnd; i += stride) {
          this.coordinates.push(flatCoordinates[i], flatCoordinates[i + 1]);
        }

        end = this.coordinates.length;
        flatOffset = ends[o];
        var declutterGroup = this.declutterGroups_ ? o === 0 ? this.declutterGroups_[0] : [].concat(this.declutterGroups_[0]) : null;
        this.drawChars_(begin, end, declutterGroup);
        begin = end;
      }

      this.endGeometry(feature);
    } else {
      var geometryWidths = null;

      if (!textState.overflow) {
        geometryWidths = [];
      }

      switch (geometryType) {
        case _GeometryType.default.POINT:
        case _GeometryType.default.MULTI_POINT:
          flatCoordinates =
          /** @type {import("../../geom/MultiPoint.js").default} */
          geometry.getFlatCoordinates();
          end = flatCoordinates.length;
          break;

        case _GeometryType.default.LINE_STRING:
          flatCoordinates =
          /** @type {import("../../geom/LineString.js").default} */
          geometry.getFlatMidpoint();
          break;

        case _GeometryType.default.CIRCLE:
          flatCoordinates =
          /** @type {import("../../geom/Circle.js").default} */
          geometry.getCenter();
          break;

        case _GeometryType.default.MULTI_LINE_STRING:
          flatCoordinates =
          /** @type {import("../../geom/MultiLineString.js").default} */
          geometry.getFlatMidpoints();
          stride = 2;
          end = flatCoordinates.length;
          break;

        case _GeometryType.default.POLYGON:
          flatCoordinates =
          /** @type {import("../../geom/Polygon.js").default} */
          geometry.getFlatInteriorPoint();

          if (!textState.overflow) {
            geometryWidths.push(flatCoordinates[2] / this.resolution);
          }

          stride = 3;
          break;

        case _GeometryType.default.MULTI_POLYGON:
          var interiorPoints =
          /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry.getFlatInteriorPoints();
          flatCoordinates = [];

          for (i = 0, ii = interiorPoints.length; i < ii; i += 3) {
            if (!textState.overflow) {
              geometryWidths.push(interiorPoints[i + 2] / this.resolution);
            }

            flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
          }

          stride = 2;
          end = flatCoordinates.length;

          if (end == 0) {
            return;
          }

          break;

        default:
      }

      end = this.appendFlatCoordinates(flatCoordinates, 0, end, stride, false, false);
      this.saveTextStates_();

      if (textState.backgroundFill || textState.backgroundStroke) {
        this.setFillStrokeStyle(textState.backgroundFill, textState.backgroundStroke);

        if (textState.backgroundFill) {
          this.updateFillStyle(this.state, this.createFill);
          this.hitDetectionInstructions.push(this.createFill(this.state));
        }

        if (textState.backgroundStroke) {
          this.updateStrokeStyle(this.state, this.applyStroke);
          this.hitDetectionInstructions.push(this.createStroke(this.state));
        }
      }

      this.beginGeometry(geometry, feature); // adjust padding for negative scale

      var padding = textState.padding;

      if (padding != _canvas.defaultPadding && (textState.scale[0] < 0 || textState.scale[1] < 0)) {
        var p0 = textState.padding[0];
        var p1 = textState.padding[1];
        var p2 = textState.padding[2];
        var p3 = textState.padding[3];

        if (textState.scale[0] < 0) {
          p1 = -p1;
          p3 = -p3;
        }

        if (textState.scale[1] < 0) {
          p0 = -p0;
          p2 = -p2;
        }

        padding = [p0, p1, p2, p3];
      } // The image is unknown at this stage so we pass null; it will be computed at render time.
      // For clarity, we pass NaN for offsetX, offsetY, width and height, which will be computed at
      // render time.


      var pixelRatio_1 = this.pixelRatio;
      this.instructions.push([_Instruction.default.DRAW_IMAGE, begin, end, null, NaN, NaN, this.declutterGroups_, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, padding == _canvas.defaultPadding ? _canvas.defaultPadding : padding.map(function (p) {
        return p * pixelRatio_1;
      }), !!textState.backgroundFill, !!textState.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, geometryWidths]);
      var scale = 1 / pixelRatio_1;
      this.hitDetectionInstructions.push([_Instruction.default.DRAW_IMAGE, begin, end, null, NaN, NaN, this.declutterGroups_, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [scale, scale], NaN, padding, !!textState.backgroundFill, !!textState.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, geometryWidths]);
      this.endGeometry(feature);
    }
  };
  /**
   * @private
   */


  CanvasTextBuilder.prototype.saveTextStates_ = function () {
    var strokeState = this.textStrokeState_;
    var textState = this.textState_;
    var fillState = this.textFillState_;
    var strokeKey = this.strokeKey_;

    if (strokeState) {
      if (!(strokeKey in this.strokeStates)) {
        this.strokeStates[strokeKey] = {
          strokeStyle: strokeState.strokeStyle,
          lineCap: strokeState.lineCap,
          lineDashOffset: strokeState.lineDashOffset,
          lineWidth: strokeState.lineWidth,
          lineJoin: strokeState.lineJoin,
          miterLimit: strokeState.miterLimit,
          lineDash: strokeState.lineDash
        };
      }
    }

    var textKey = this.textKey_;

    if (!(textKey in this.textStates)) {
      this.textStates[textKey] = {
        font: textState.font,
        textAlign: textState.textAlign || _canvas.defaultTextAlign,
        textBaseline: textState.textBaseline || _canvas.defaultTextBaseline,
        scale: textState.scale
      };
    }

    var fillKey = this.fillKey_;

    if (fillState) {
      if (!(fillKey in this.fillStates)) {
        this.fillStates[fillKey] = {
          fillStyle: fillState.fillStyle
        };
      }
    }
  };
  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   * @param {import("../canvas.js").DeclutterGroup} declutterGroup Declutter group.
   */


  CanvasTextBuilder.prototype.drawChars_ = function (begin, end, declutterGroup) {
    var strokeState = this.textStrokeState_;
    var textState = this.textState_;
    var strokeKey = this.strokeKey_;
    var textKey = this.textKey_;
    var fillKey = this.fillKey_;
    this.saveTextStates_();
    var pixelRatio = this.pixelRatio;
    var baseline = TEXT_ALIGN[textState.textBaseline];
    var offsetY = this.textOffsetY_ * pixelRatio;
    var text = this.text_;
    var strokeWidth = strokeState ? strokeState.lineWidth * Math.abs(textState.scale[0]) / 2 : 0;
    this.instructions.push([_Instruction.default.DRAW_CHARS, begin, end, baseline, declutterGroup, textState.overflow, fillKey, textState.maxAngle, pixelRatio, offsetY, strokeKey, strokeWidth * pixelRatio, text, textKey, 1]);
    this.hitDetectionInstructions.push([_Instruction.default.DRAW_CHARS, begin, end, baseline, declutterGroup, textState.overflow, fillKey, textState.maxAngle, 1, offsetY, strokeKey, strokeWidth, text, textKey, 1 / pixelRatio]);
  };
  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {import("../canvas.js").DeclutterGroups} declutterGroups Declutter.
   */


  CanvasTextBuilder.prototype.setTextStyle = function (textStyle, declutterGroups) {
    var textState, fillState, strokeState;

    if (!textStyle) {
      this.text_ = '';
    } else {
      this.declutterGroups_ = declutterGroups;
      var textFillStyle = textStyle.getFill();

      if (!textFillStyle) {
        fillState = null;
        this.textFillState_ = fillState;
      } else {
        fillState = this.textFillState_;

        if (!fillState) {
          fillState =
          /** @type {import("../canvas.js").FillState} */
          {};
          this.textFillState_ = fillState;
        }

        fillState.fillStyle = (0, _colorlike.asColorLike)(textFillStyle.getColor() || _canvas.defaultFillStyle);
      }

      var textStrokeStyle = textStyle.getStroke();

      if (!textStrokeStyle) {
        strokeState = null;
        this.textStrokeState_ = strokeState;
      } else {
        strokeState = this.textStrokeState_;

        if (!strokeState) {
          strokeState =
          /** @type {import("../canvas.js").StrokeState} */
          {};
          this.textStrokeState_ = strokeState;
        }

        var lineDash = textStrokeStyle.getLineDash();
        var lineDashOffset = textStrokeStyle.getLineDashOffset();
        var lineWidth = textStrokeStyle.getWidth();
        var miterLimit = textStrokeStyle.getMiterLimit();
        strokeState.lineCap = textStrokeStyle.getLineCap() || _canvas.defaultLineCap;
        strokeState.lineDash = lineDash ? lineDash.slice() : _canvas.defaultLineDash;
        strokeState.lineDashOffset = lineDashOffset === undefined ? _canvas.defaultLineDashOffset : lineDashOffset;
        strokeState.lineJoin = textStrokeStyle.getLineJoin() || _canvas.defaultLineJoin;
        strokeState.lineWidth = lineWidth === undefined ? _canvas.defaultLineWidth : lineWidth;
        strokeState.miterLimit = miterLimit === undefined ? _canvas.defaultMiterLimit : miterLimit;
        strokeState.strokeStyle = (0, _colorlike.asColorLike)(textStrokeStyle.getColor() || _canvas.defaultStrokeStyle);
      }

      textState = this.textState_;

      var font = textStyle.getFont() || _canvas.defaultFont;

      (0, _canvas.registerFont)(font);
      var textScale = textStyle.getScaleArray();
      textState.overflow = textStyle.getOverflow();
      textState.font = font;
      textState.maxAngle = textStyle.getMaxAngle();
      textState.placement = textStyle.getPlacement();
      textState.textAlign = textStyle.getTextAlign();
      textState.textBaseline = textStyle.getTextBaseline() || _canvas.defaultTextBaseline;
      textState.backgroundFill = textStyle.getBackgroundFill();
      textState.backgroundStroke = textStyle.getBackgroundStroke();
      textState.padding = textStyle.getPadding() || _canvas.defaultPadding;
      textState.scale = textScale === undefined ? [1, 1] : textScale;
      var textOffsetX = textStyle.getOffsetX();
      var textOffsetY = textStyle.getOffsetY();
      var textRotateWithView = textStyle.getRotateWithView();
      var textRotation = textStyle.getRotation();
      this.text_ = textStyle.getText() || '';
      this.textOffsetX_ = textOffsetX === undefined ? 0 : textOffsetX;
      this.textOffsetY_ = textOffsetY === undefined ? 0 : textOffsetY;
      this.textRotateWithView_ = textRotateWithView === undefined ? false : textRotateWithView;
      this.textRotation_ = textRotation === undefined ? 0 : textRotation;
      this.strokeKey_ = strokeState ? (typeof strokeState.strokeStyle == 'string' ? strokeState.strokeStyle : (0, _util.getUid)(strokeState.strokeStyle)) + strokeState.lineCap + strokeState.lineDashOffset + '|' + strokeState.lineWidth + strokeState.lineJoin + strokeState.miterLimit + '[' + strokeState.lineDash.join() + ']' : '';
      this.textKey_ = textState.font + textState.scale + (textState.textAlign || '?') + (textState.textBaseline || '?');
      this.fillKey_ = fillState ? typeof fillState.fillStyle == 'string' ? fillState.fillStyle : '|' + (0, _util.getUid)(fillState.fillStyle) : '';
    }
  };

  return CanvasTextBuilder;
}(_Builder.default);

var _default = CanvasTextBuilder;
exports.default = _default;
},{"./Builder.js":"ol/render/canvas/Builder.js","./Instruction.js":"ol/render/canvas/Instruction.js","../../geom/GeometryType.js":"ol/geom/GeometryType.js","../../style/TextPlacement.js":"ol/style/TextPlacement.js","../../colorlike.js":"ol/colorlike.js","../canvas.js":"ol/render/canvas.js","../../util.js":"ol/util.js","../../extent.js":"ol/extent.js","../../geom/flat/straightchunk.js":"ol/geom/flat/straightchunk.js"}],"ol/render/canvas/BuilderGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Builder = _interopRequireDefault(require("./Builder.js"));

var _ImageBuilder = _interopRequireDefault(require("./ImageBuilder.js"));

var _LineStringBuilder = _interopRequireDefault(require("./LineStringBuilder.js"));

var _PolygonBuilder = _interopRequireDefault(require("./PolygonBuilder.js"));

var _TextBuilder = _interopRequireDefault(require("./TextBuilder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas/BuilderGroup
 */

/**
 * @type {Object<import("./BuilderType").default, typeof Builder>}
 */
var BATCH_CONSTRUCTORS = {
  'Circle': _PolygonBuilder.default,
  'Default': _Builder.default,
  'Image': _ImageBuilder.default,
  'LineString': _LineStringBuilder.default,
  'Polygon': _PolygonBuilder.default,
  'Text': _TextBuilder.default
};

var BuilderGroup =
/** @class */
function () {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} declutter Decluttering enabled.
   */
  function BuilderGroup(tolerance, maxExtent, resolution, pixelRatio, declutter) {
    /**
     * @type {boolean}
     * @private
     */
    this.declutter_ = declutter;
    /**
     * @type {import("../canvas.js").DeclutterGroups}
     * @private
     */

    this.declutterGroups_ = null;
    /**
     * @private
     * @type {number}
     */

    this.tolerance_ = tolerance;
    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */

    this.maxExtent_ = maxExtent;
    /**
     * @private
     * @type {number}
     */

    this.pixelRatio_ = pixelRatio;
    /**
     * @private
     * @type {number}
     */

    this.resolution_ = resolution;
    /**
     * @private
     * @type {!Object<string, !Object<import("./BuilderType").default, Builder>>}
     */

    this.buildersByZIndex_ = {};
  }
  /**
   * @param {boolean} group Group with previous builder.
   * @return {import("../canvas").DeclutterGroups} The resulting instruction groups.
   */


  BuilderGroup.prototype.addDeclutter = function (group) {
    /** @type {Array<*>} */
    var declutter = null;

    if (this.declutter_) {
      if (group) {
        declutter = this.declutterGroups_;
        /** @type {number} */

        declutter[0][0]++;
      } else {
        declutter = [[1]];
        this.declutterGroups_ = declutter;
      }
    }

    return declutter;
  };
  /**
   * @return {!Object<string, !Object<import("./BuilderType").default, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */


  BuilderGroup.prototype.finish = function () {
    var builderInstructions = {};

    for (var zKey in this.buildersByZIndex_) {
      builderInstructions[zKey] = builderInstructions[zKey] || {};
      var builders = this.buildersByZIndex_[zKey];

      for (var builderKey in builders) {
        var builderInstruction = builders[builderKey].finish();
        builderInstructions[zKey][builderKey] = builderInstruction;
      }
    }

    return builderInstructions;
  };
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("./BuilderType.js").default} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */


  BuilderGroup.prototype.getBuilder = function (zIndex, builderType) {
    var zIndexKey = zIndex !== undefined ? zIndex.toString() : '0';
    var replays = this.buildersByZIndex_[zIndexKey];

    if (replays === undefined) {
      replays = {};
      this.buildersByZIndex_[zIndexKey] = replays;
    }

    var replay = replays[builderType];

    if (replay === undefined) {
      var Constructor = BATCH_CONSTRUCTORS[builderType];
      replay = new Constructor(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_);
      replays[builderType] = replay;
    }

    return replay;
  };

  return BuilderGroup;
}();

var _default = BuilderGroup;
exports.default = _default;
},{"./Builder.js":"ol/render/canvas/Builder.js","./ImageBuilder.js":"ol/render/canvas/ImageBuilder.js","./LineStringBuilder.js":"ol/render/canvas/LineStringBuilder.js","./PolygonBuilder.js":"ol/render/canvas/PolygonBuilder.js","./TextBuilder.js":"ol/render/canvas/TextBuilder.js"}],"ol/renderer/Layer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _Observable = _interopRequireDefault(require("../Observable.js"));

var _State = _interopRequireDefault(require("../source/State.js"));

var _util = require("../util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/renderer/Layer
 */


/**
 * @template {import("../layer/Layer.js").default} LayerType
 */
var LayerRenderer =
/** @class */
function (_super) {
  __extends(LayerRenderer, _super);
  /**
   * @param {LayerType} layer Layer.
   */


  function LayerRenderer(layer) {
    var _this = _super.call(this) || this;
    /** @private */


    _this.boundHandleImageChange_ = _this.handleImageChange_.bind(_this);
    /**
     * @protected
     * @type {LayerType}
     */

    _this.layer_ = layer;
    return _this;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
   * an array of features.
   */


  LayerRenderer.prototype.getFeatures = function (pixel) {
    return (0, _util.abstract)();
  };
  /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */


  LayerRenderer.prototype.prepareFrame = function (frameState) {
    return (0, _util.abstract)();
  };
  /**
   * Render the layer.
   * @abstract
   * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */


  LayerRenderer.prototype.renderFrame = function (frameState, target) {
    return (0, _util.abstract)();
  };
  /**
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */


  LayerRenderer.prototype.loadedTileCallback = function (tiles, zoom, tile) {
    if (!tiles[zoom]) {
      tiles[zoom] = {};
    }

    tiles[zoom][tile.tileCoord.toString()] = tile;
    return undefined;
  };
  /**
   * Create a function that adds loaded tiles to the tile lookup.
   * @param {import("../source/Tile.js").default} source Tile source.
   * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
   *     called with a zoom level and a tile range to add loaded tiles to the lookup.
   * @protected
   */


  LayerRenderer.prototype.createLoadedTileFinder = function (source, projection, tiles) {
    return (
      /**
       * @param {number} zoom Zoom level.
       * @param {import("../TileRange.js").default} tileRange Tile range.
       * @return {boolean} The tile range is fully loaded.
       * @this {LayerRenderer}
       */
      function (zoom, tileRange) {
        var callback = this.loadedTileCallback.bind(this, tiles, zoom);
        return source.forEachLoadedTile(projection, zoom, tileRange, callback);
      }.bind(this)
    );
  };
  /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../Feature.js").FeatureLike, import("../layer/Layer.js").default): T} callback Feature callback.
   * @param {Array<import("../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|void} Callback result.
   * @template T
   */


  LayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, declutteredFeatures) {};
  /**
   * @abstract
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @return {Uint8ClampedArray|Uint8Array} The result.  If there is no data at the pixel
   *    location, null will be returned.  If there is data, but pixel values cannot be
   *    returned, and empty array will be returned.
   */


  LayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
    return (0, _util.abstract)();
  };
  /**
   * @return {LayerType} Layer.
   */


  LayerRenderer.prototype.getLayer = function () {
    return this.layer_;
  };
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */


  LayerRenderer.prototype.handleFontsChanged = function () {};
  /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */


  LayerRenderer.prototype.handleImageChange_ = function (event) {
    var image =
    /** @type {import("../Image.js").default} */
    event.target;

    if (image.getState() === _ImageState.default.LOADED) {
      this.renderIfReadyAndVisible();
    }
  };
  /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../ImageBase.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */


  LayerRenderer.prototype.loadImage = function (image) {
    var imageState = image.getState();

    if (imageState != _ImageState.default.LOADED && imageState != _ImageState.default.ERROR) {
      image.addEventListener(_EventType.default.CHANGE, this.boundHandleImageChange_);
    }

    if (imageState == _ImageState.default.IDLE) {
      image.load();
      imageState = image.getState();
    }

    return imageState == _ImageState.default.LOADED;
  };
  /**
   * @protected
   */


  LayerRenderer.prototype.renderIfReadyAndVisible = function () {
    var layer = this.getLayer();

    if (layer.getVisible() && layer.getSourceState() == _State.default.READY) {
      layer.changed();
    }
  };

  return LayerRenderer;
}(_Observable.default);

var _default = LayerRenderer;
exports.default = _default;
},{"../events/EventType.js":"ol/events/EventType.js","../ImageState.js":"ol/ImageState.js","../Observable.js":"ol/Observable.js","../source/State.js":"ol/source/State.js","../util.js":"ol/util.js"}],"ol/render/Event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Event = _interopRequireDefault(require("../events/Event.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/Event
 */
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var RenderEvent =
/** @class */
function (_super) {
  __extends(RenderEvent, _super);
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform=} opt_inversePixelTransform Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../PluggableMap.js").FrameState=} opt_frameState Frame state.
   * @param {?CanvasRenderingContext2D=} opt_context Context.
   */


  function RenderEvent(type, opt_inversePixelTransform, opt_frameState, opt_context) {
    var _this = _super.call(this, type) || this;
    /**
     * Transform from CSS pixels (relative to the top-left corner of the map viewport)
     * to rendered pixels on this event's `context`.
     * @type {import("../transform.js").Transform|undefined}
     * @api
     */


    _this.inversePixelTransform = opt_inversePixelTransform;
    /**
     * An object representing the current render frame state.
     * @type {import("../PluggableMap.js").FrameState|undefined}
     * @api
     */

    _this.frameState = opt_frameState;
    /**
     * Canvas context. Not available when the event is dispatched by the map. Only available
     * when a Canvas renderer is used, null otherwise.
     * @type {CanvasRenderingContext2D|null|undefined}
     * @api
     */

    _this.context = opt_context;
    return _this;
  }

  return RenderEvent;
}(_Event.default);

var _default = RenderEvent;
exports.default = _default;
},{"../events/Event.js":"ol/events/Event.js"}],"ol/renderer/canvas/Layer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Layer = _interopRequireDefault(require("../Layer.js"));

var _Event = _interopRequireDefault(require("../../render/Event.js"));

var _EventType = _interopRequireDefault(require("../../render/EventType.js"));

var _transform = require("../../transform.js");

var _dom = require("../../dom.js");

var _extent = require("../../extent.js");

var _canvas = require("../../render/canvas.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/renderer/canvas/Layer
 */


/**
 * @abstract
 * @template {import("../../layer/Layer.js").default} LayerType
 */
var CanvasLayerRenderer =
/** @class */
function (_super) {
  __extends(CanvasLayerRenderer, _super);
  /**
   * @param {LayerType} layer Layer.
   */


  function CanvasLayerRenderer(layer) {
    var _this = _super.call(this, layer) || this;
    /**
     * @protected
     * @type {HTMLElement}
     */


    _this.container = null;
    /**
     * @protected
     * @type {number}
     */

    _this.renderedResolution;
    /**
     * A temporary transform.  The values in this transform should only be used in a
     * function that sets the values.
     * @protected
     * @type {import("../../transform.js").Transform}
     */

    _this.tempTransform = (0, _transform.create)();
    /**
     * The transform for rendered pixels to viewport CSS pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     * @protected
     * @type {import("../../transform.js").Transform}
     */

    _this.pixelTransform = (0, _transform.create)();
    /**
     * The transform for viewport CSS pixels to rendered pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     * @protected
     * @type {import("../../transform.js").Transform}
     */

    _this.inversePixelTransform = (0, _transform.create)();
    /**
     * @type {CanvasRenderingContext2D}
     */

    _this.context = null;
    /**
     * @type {boolean}
     */

    _this.containerReused = false;
    return _this;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {number} opacity Opacity.
   */


  CanvasLayerRenderer.prototype.useContainer = function (target, transform, opacity) {
    var layerClassName = this.getLayer().getClassName();
    var container, context;

    if (target && target.style.opacity === '' && target.className === layerClassName) {
      var canvas = target.firstElementChild;

      if (canvas instanceof HTMLCanvasElement) {
        context = canvas.getContext('2d');
      }
    }

    if (context && (context.canvas.width === 0 || context.canvas.style.transform === transform)) {
      // Container of the previous layer renderer can be used.
      this.container = target;
      this.context = context;
      this.containerReused = true;
    } else if (this.containerReused) {
      // Previously reused container cannot be used any more.
      this.container = null;
      this.context = null;
      this.containerReused = false;
    }

    if (!this.container) {
      container = document.createElement('div');
      container.className = layerClassName;
      var style = container.style;
      style.position = 'absolute';
      style.width = '100%';
      style.height = '100%';
      context = (0, _dom.createCanvasContext2D)();
      var canvas = context.canvas;
      container.appendChild(canvas);
      style = canvas.style;
      style.position = 'absolute';
      style.left = '0';
      style.transformOrigin = 'top left';
      this.container = container;
      this.context = context;
    }
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */


  CanvasLayerRenderer.prototype.clip = function (context, frameState, extent) {
    var pixelRatio = frameState.pixelRatio;
    var halfWidth = frameState.size[0] * pixelRatio / 2;
    var halfHeight = frameState.size[1] * pixelRatio / 2;
    var rotation = frameState.viewState.rotation;
    var topLeft = (0, _extent.getTopLeft)(extent);
    var topRight = (0, _extent.getTopRight)(extent);
    var bottomRight = (0, _extent.getBottomRight)(extent);
    var bottomLeft = (0, _extent.getBottomLeft)(extent);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, topLeft);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, topRight);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, bottomRight);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, bottomLeft);
    context.save();
    (0, _canvas.rotateAtOffset)(context, -rotation, halfWidth, halfHeight);
    context.beginPath();
    context.moveTo(topLeft[0] * pixelRatio, topLeft[1] * pixelRatio);
    context.lineTo(topRight[0] * pixelRatio, topRight[1] * pixelRatio);
    context.lineTo(bottomRight[0] * pixelRatio, bottomRight[1] * pixelRatio);
    context.lineTo(bottomLeft[0] * pixelRatio, bottomLeft[1] * pixelRatio);
    context.clip();
    (0, _canvas.rotateAtOffset)(context, rotation, halfWidth, halfHeight);
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */


  CanvasLayerRenderer.prototype.clipUnrotated = function (context, frameState, extent) {
    var topLeft = (0, _extent.getTopLeft)(extent);
    var topRight = (0, _extent.getTopRight)(extent);
    var bottomRight = (0, _extent.getBottomRight)(extent);
    var bottomLeft = (0, _extent.getBottomLeft)(extent);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, topLeft);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, topRight);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, bottomRight);
    (0, _transform.apply)(frameState.coordinateToPixelTransform, bottomLeft);
    var inverted = this.inversePixelTransform;
    (0, _transform.apply)(inverted, topLeft);
    (0, _transform.apply)(inverted, topRight);
    (0, _transform.apply)(inverted, bottomRight);
    (0, _transform.apply)(inverted, bottomLeft);
    context.save();
    context.beginPath();
    context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
    context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
    context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
    context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
    context.clip();
  };
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @private
   */


  CanvasLayerRenderer.prototype.dispatchRenderEvent_ = function (type, context, frameState) {
    var layer = this.getLayer();

    if (layer.hasListener(type)) {
      var event_1 = new _Event.default(type, this.inversePixelTransform, frameState, context);
      layer.dispatchEvent(event_1);
    }
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @protected
   */


  CanvasLayerRenderer.prototype.preRender = function (context, frameState) {
    this.dispatchRenderEvent_(_EventType.default.PRERENDER, context, frameState);
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @protected
   */


  CanvasLayerRenderer.prototype.postRender = function (context, frameState) {
    this.dispatchRenderEvent_(_EventType.default.POSTRENDER, context, frameState);
  };
  /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */


  CanvasLayerRenderer.prototype.getRenderTransform = function (center, resolution, rotation, pixelRatio, width, height, offsetX) {
    var dx1 = width / 2;
    var dy1 = height / 2;
    var sx = pixelRatio / resolution;
    var sy = -sx;
    var dx2 = -center[0] + offsetX;
    var dy2 = -center[1];
    return (0, _transform.compose)(this.tempTransform, dx1, dy1, sx, sy, -rotation, dx2, dy2);
  };
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @param {import("../../PluggableMap.js").FrameState} frameState FrameState.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @return {Uint8ClampedArray|Uint8Array} The result.  If there is no data at the pixel
   *    location, null will be returned.  If there is data, but pixel values cannot be
   *    returned, and empty array will be returned.
   */


  CanvasLayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
    var renderPixel = (0, _transform.apply)(this.inversePixelTransform, pixel.slice());
    var context = this.context;
    var data;

    try {
      var x = Math.round(renderPixel[0]);
      var y = Math.round(renderPixel[1]);
      var newCanvas = document.createElement('canvas');
      var newContext = newCanvas.getContext('2d');
      newCanvas.width = 1;
      newCanvas.height = 1;
      newContext.clearRect(0, 0, 1, 1);
      newContext.drawImage(context.canvas, x, y, 1, 1, 0, 0, 1, 1);
      data = newContext.getImageData(0, 0, 1, 1).data;
    } catch (err) {
      if (err.name === 'SecurityError') {
        // tainted canvas, we assume there is data at the given pixel (although there might not be)
        return new Uint8Array();
      }

      return data;
    }

    if (data[3] === 0) {
      return null;
    }

    return data;
  };

  return CanvasLayerRenderer;
}(_Layer.default);

var _default = CanvasLayerRenderer;
exports.default = _default;
},{"../Layer.js":"ol/renderer/Layer.js","../../render/Event.js":"ol/render/Event.js","../../render/EventType.js":"ol/render/EventType.js","../../transform.js":"ol/transform.js","../../dom.js":"ol/dom.js","../../extent.js":"ol/extent.js","../../render/canvas.js":"ol/render/canvas.js"}],"ol/render/canvas/BuilderType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/render/canvas/BuilderType
 */

/**
 * @enum {string}
 */
var _default = {
  CIRCLE: 'Circle',
  DEFAULT: 'Default',
  IMAGE: 'Image',
  LINE_STRING: 'LineString',
  POLYGON: 'Polygon',
  TEXT: 'Text'
};
exports.default = _default;
},{}],"node_modules/rbush/rbush.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = global || self, global.RBush = factory());
}(this, function () { 'use strict';

function quickselect(arr, k, left, right, compare) {
    quickselectStep(arr, k, left || 0, right || (arr.length - 1), compare || defaultCompare);
}

function quickselectStep(arr, k, left, right, compare) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselectStep(arr, k, newLeft, newRight, compare);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, left, k);
        if (compare(arr[right], t) > 0) { swap(arr, left, right); }

        while (i < j) {
            swap(arr, i, j);
            i++;
            j--;
            while (compare(arr[i], t) < 0) { i++; }
            while (compare(arr[j], t) > 0) { j--; }
        }

        if (compare(arr[left], t) === 0) { swap(arr, left, j); }
        else {
            j++;
            swap(arr, j, right);
        }

        if (j <= k) { left = j + 1; }
        if (k <= j) { right = j - 1; }
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

var RBush = function RBush(maxEntries) {
    if ( maxEntries === void 0 ) maxEntries = 9;

    // max entries in a node is 9 by default; min node fill is 40% for best performance
    this._maxEntries = Math.max(4, maxEntries);
    this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));
    this.clear();
};

RBush.prototype.all = function all () {
    return this._all(this.data, []);
};

RBush.prototype.search = function search (bbox) {
    var node = this.data;
    var result = [];

    if (!intersects(bbox, node)) { return result; }

    var toBBox = this.toBBox;
    var nodesToSearch = [];

    while (node) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            var childBBox = node.leaf ? toBBox(child) : child;

            if (intersects(bbox, childBBox)) {
                if (node.leaf) { result.push(child); }
                else if (contains(bbox, childBBox)) { this._all(child, result); }
                else { nodesToSearch.push(child); }
            }
        }
        node = nodesToSearch.pop();
    }

    return result;
};

RBush.prototype.collides = function collides (bbox) {
    var node = this.data;

    if (!intersects(bbox, node)) { return false; }

    var nodesToSearch = [];
    while (node) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            var childBBox = node.leaf ? this.toBBox(child) : child;

            if (intersects(bbox, childBBox)) {
                if (node.leaf || contains(bbox, childBBox)) { return true; }
                nodesToSearch.push(child);
            }
        }
        node = nodesToSearch.pop();
    }

    return false;
};

RBush.prototype.load = function load (data) {
    if (!(data && data.length)) { return this; }

    if (data.length < this._minEntries) {
        for (var i = 0; i < data.length; i++) {
            this.insert(data[i]);
        }
        return this;
    }

    // recursively build the tree with the given data from scratch using OMT algorithm
    var node = this._build(data.slice(), 0, data.length - 1, 0);

    if (!this.data.children.length) {
        // save as is if tree is empty
        this.data = node;

    } else if (this.data.height === node.height) {
        // split root if trees have the same height
        this._splitRoot(this.data, node);

    } else {
        if (this.data.height < node.height) {
            // swap trees if inserted one is bigger
            var tmpNode = this.data;
            this.data = node;
            node = tmpNode;
        }

        // insert the small tree into the large tree at appropriate level
        this._insert(node, this.data.height - node.height - 1, true);
    }

    return this;
};

RBush.prototype.insert = function insert (item) {
    if (item) { this._insert(item, this.data.height - 1); }
    return this;
};

RBush.prototype.clear = function clear () {
    this.data = createNode([]);
    return this;
};

RBush.prototype.remove = function remove (item, equalsFn) {
    if (!item) { return this; }

    var node = this.data;
    var bbox = this.toBBox(item);
    var path = [];
    var indexes = [];
    var i, parent, goingUp;

    // depth-first iterative tree traversal
    while (node || path.length) {

        if (!node) { // go up
            node = path.pop();
            parent = path[path.length - 1];
            i = indexes.pop();
            goingUp = true;
        }

        if (node.leaf) { // check current node
            var index = findItem(item, node.children, equalsFn);

            if (index !== -1) {
                // item found, remove the item and condense tree upwards
                node.children.splice(index, 1);
                path.push(node);
                this._condense(path);
                return this;
            }
        }

        if (!goingUp && !node.leaf && contains(node, bbox)) { // go down
            path.push(node);
            indexes.push(i);
            i = 0;
            parent = node;
            node = node.children[0];

        } else if (parent) { // go right
            i++;
            node = parent.children[i];
            goingUp = false;

        } else { node = null; } // nothing found
    }

    return this;
};

RBush.prototype.toBBox = function toBBox (item) { return item; };

RBush.prototype.compareMinX = function compareMinX (a, b) { return a.minX - b.minX; };
RBush.prototype.compareMinY = function compareMinY (a, b) { return a.minY - b.minY; };

RBush.prototype.toJSON = function toJSON () { return this.data; };

RBush.prototype.fromJSON = function fromJSON (data) {
    this.data = data;
    return this;
};

RBush.prototype._all = function _all (node, result) {
    var nodesToSearch = [];
    while (node) {
        if (node.leaf) { result.push.apply(result, node.children); }
        else { nodesToSearch.push.apply(nodesToSearch, node.children); }

        node = nodesToSearch.pop();
    }
    return result;
};

RBush.prototype._build = function _build (items, left, right, height) {

    var N = right - left + 1;
    var M = this._maxEntries;
    var node;

    if (N <= M) {
        // reached leaf level; return leaf
        node = createNode(items.slice(left, right + 1));
        calcBBox(node, this.toBBox);
        return node;
    }

    if (!height) {
        // target height of the bulk-loaded tree
        height = Math.ceil(Math.log(N) / Math.log(M));

        // target number of root entries to maximize storage utilization
        M = Math.ceil(N / Math.pow(M, height - 1));
    }

    node = createNode([]);
    node.leaf = false;
    node.height = height;

    // split the items into M mostly square tiles

    var N2 = Math.ceil(N / M);
    var N1 = N2 * Math.ceil(Math.sqrt(M));

    multiSelect(items, left, right, N1, this.compareMinX);

    for (var i = left; i <= right; i += N1) {

        var right2 = Math.min(i + N1 - 1, right);

        multiSelect(items, i, right2, N2, this.compareMinY);

        for (var j = i; j <= right2; j += N2) {

            var right3 = Math.min(j + N2 - 1, right2);

            // pack each entry recursively
            node.children.push(this._build(items, j, right3, height - 1));
        }
    }

    calcBBox(node, this.toBBox);

    return node;
};

RBush.prototype._chooseSubtree = function _chooseSubtree (bbox, node, level, path) {
    while (true) {
        path.push(node);

        if (node.leaf || path.length - 1 === level) { break; }

        var minArea = Infinity;
        var minEnlargement = Infinity;
        var targetNode = (void 0);

        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            var area = bboxArea(child);
            var enlargement = enlargedArea(bbox, child) - area;

            // choose entry with the least area enlargement
            if (enlargement < minEnlargement) {
                minEnlargement = enlargement;
                minArea = area < minArea ? area : minArea;
                targetNode = child;

            } else if (enlargement === minEnlargement) {
                // otherwise choose one with the smallest area
                if (area < minArea) {
                    minArea = area;
                    targetNode = child;
                }
            }
        }

        node = targetNode || node.children[0];
    }

    return node;
};

RBush.prototype._insert = function _insert (item, level, isNode) {
    var bbox = isNode ? item : this.toBBox(item);
    var insertPath = [];

    // find the best node for accommodating the item, saving all nodes along the path too
    var node = this._chooseSubtree(bbox, this.data, level, insertPath);

    // put the item into the node
    node.children.push(item);
    extend(node, bbox);

    // split on node overflow; propagate upwards if necessary
    while (level >= 0) {
        if (insertPath[level].children.length > this._maxEntries) {
            this._split(insertPath, level);
            level--;
        } else { break; }
    }

    // adjust bboxes along the insertion path
    this._adjustParentBBoxes(bbox, insertPath, level);
};

// split overflowed node into two
RBush.prototype._split = function _split (insertPath, level) {
    var node = insertPath[level];
    var M = node.children.length;
    var m = this._minEntries;

    this._chooseSplitAxis(node, m, M);

    var splitIndex = this._chooseSplitIndex(node, m, M);

    var newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
    newNode.height = node.height;
    newNode.leaf = node.leaf;

    calcBBox(node, this.toBBox);
    calcBBox(newNode, this.toBBox);

    if (level) { insertPath[level - 1].children.push(newNode); }
    else { this._splitRoot(node, newNode); }
};

RBush.prototype._splitRoot = function _splitRoot (node, newNode) {
    // split root node
    this.data = createNode([node, newNode]);
    this.data.height = node.height + 1;
    this.data.leaf = false;
    calcBBox(this.data, this.toBBox);
};

RBush.prototype._chooseSplitIndex = function _chooseSplitIndex (node, m, M) {
    var index;
    var minOverlap = Infinity;
    var minArea = Infinity;

    for (var i = m; i <= M - m; i++) {
        var bbox1 = distBBox(node, 0, i, this.toBBox);
        var bbox2 = distBBox(node, i, M, this.toBBox);

        var overlap = intersectionArea(bbox1, bbox2);
        var area = bboxArea(bbox1) + bboxArea(bbox2);

        // choose distribution with minimum overlap
        if (overlap < minOverlap) {
            minOverlap = overlap;
            index = i;

            minArea = area < minArea ? area : minArea;

        } else if (overlap === minOverlap) {
            // otherwise choose distribution with minimum area
            if (area < minArea) {
                minArea = area;
                index = i;
            }
        }
    }

    return index || M - m;
};

// sorts node children by the best axis for split
RBush.prototype._chooseSplitAxis = function _chooseSplitAxis (node, m, M) {
    var compareMinX = node.leaf ? this.compareMinX : compareNodeMinX;
    var compareMinY = node.leaf ? this.compareMinY : compareNodeMinY;
    var xMargin = this._allDistMargin(node, m, M, compareMinX);
    var yMargin = this._allDistMargin(node, m, M, compareMinY);

    // if total distributions margin value is minimal for x, sort by minX,
    // otherwise it's already sorted by minY
    if (xMargin < yMargin) { node.children.sort(compareMinX); }
};

// total margin of all possible split distributions where each node is at least m full
RBush.prototype._allDistMargin = function _allDistMargin (node, m, M, compare) {
    node.children.sort(compare);

    var toBBox = this.toBBox;
    var leftBBox = distBBox(node, 0, m, toBBox);
    var rightBBox = distBBox(node, M - m, M, toBBox);
    var margin = bboxMargin(leftBBox) + bboxMargin(rightBBox);

    for (var i = m; i < M - m; i++) {
        var child = node.children[i];
        extend(leftBBox, node.leaf ? toBBox(child) : child);
        margin += bboxMargin(leftBBox);
    }

    for (var i$1 = M - m - 1; i$1 >= m; i$1--) {
        var child$1 = node.children[i$1];
        extend(rightBBox, node.leaf ? toBBox(child$1) : child$1);
        margin += bboxMargin(rightBBox);
    }

    return margin;
};

RBush.prototype._adjustParentBBoxes = function _adjustParentBBoxes (bbox, path, level) {
    // adjust bboxes along the given tree path
    for (var i = level; i >= 0; i--) {
        extend(path[i], bbox);
    }
};

RBush.prototype._condense = function _condense (path) {
    // go through the path, removing empty nodes and updating bboxes
    for (var i = path.length - 1, siblings = (void 0); i >= 0; i--) {
        if (path[i].children.length === 0) {
            if (i > 0) {
                siblings = path[i - 1].children;
                siblings.splice(siblings.indexOf(path[i]), 1);

            } else { this.clear(); }

        } else { calcBBox(path[i], this.toBBox); }
    }
};

function findItem(item, items, equalsFn) {
    if (!equalsFn) { return items.indexOf(item); }

    for (var i = 0; i < items.length; i++) {
        if (equalsFn(item, items[i])) { return i; }
    }
    return -1;
}

// calculate node's bbox from bboxes of its children
function calcBBox(node, toBBox) {
    distBBox(node, 0, node.children.length, toBBox, node);
}

// min bounding rectangle of node children from k to p-1
function distBBox(node, k, p, toBBox, destNode) {
    if (!destNode) { destNode = createNode(null); }
    destNode.minX = Infinity;
    destNode.minY = Infinity;
    destNode.maxX = -Infinity;
    destNode.maxY = -Infinity;

    for (var i = k; i < p; i++) {
        var child = node.children[i];
        extend(destNode, node.leaf ? toBBox(child) : child);
    }

    return destNode;
}

function extend(a, b) {
    a.minX = Math.min(a.minX, b.minX);
    a.minY = Math.min(a.minY, b.minY);
    a.maxX = Math.max(a.maxX, b.maxX);
    a.maxY = Math.max(a.maxY, b.maxY);
    return a;
}

function compareNodeMinX(a, b) { return a.minX - b.minX; }
function compareNodeMinY(a, b) { return a.minY - b.minY; }

function bboxArea(a)   { return (a.maxX - a.minX) * (a.maxY - a.minY); }
function bboxMargin(a) { return (a.maxX - a.minX) + (a.maxY - a.minY); }

function enlargedArea(a, b) {
    return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) *
           (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
}

function intersectionArea(a, b) {
    var minX = Math.max(a.minX, b.minX);
    var minY = Math.max(a.minY, b.minY);
    var maxX = Math.min(a.maxX, b.maxX);
    var maxY = Math.min(a.maxY, b.maxY);

    return Math.max(0, maxX - minX) *
           Math.max(0, maxY - minY);
}

function contains(a, b) {
    return a.minX <= b.minX &&
           a.minY <= b.minY &&
           b.maxX <= a.maxX &&
           b.maxY <= a.maxY;
}

function intersects(a, b) {
    return b.minX <= a.maxX &&
           b.minY <= a.maxY &&
           b.maxX >= a.minX &&
           b.maxY >= a.minY;
}

function createNode(children) {
    return {
        children: children,
        height: 1,
        leaf: true,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
}

// sort an array so that items come in groups of n unsorted items, with groups sorted between each other;
// combines selection algorithm with binary divide & conquer approach

function multiSelect(arr, left, right, n, compare) {
    var stack = [left, right];

    while (stack.length) {
        right = stack.pop();
        left = stack.pop();

        if (right - left <= n) { continue; }

        var mid = left + Math.ceil((right - left) / n / 2) * n;
        quickselect(arr, mid, left, right, compare);

        stack.push(left, mid, mid, right);
    }
}

return RBush;

}));

},{}],"ol/geom/flat/textpath.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawTextOnPath = drawTextOnPath;

var _math = require("../../math.js");

var _transform = require("./transform.js");

/**
 * @module ol/geom/flat/textpath
 */

/**
 * @param {Array<number>} flatCoordinates Path to put text on.
 * @param {number} offset Start offset of the `flatCoordinates`.
 * @param {number} end End offset of the `flatCoordinates`.
 * @param {number} stride Stride.
 * @param {string} text Text to place on the path.
 * @param {number} startM m along the path where the text starts.
 * @param {number} maxAngle Max angle between adjacent chars in radians.
 * @param {number} scale The product of the text scale and the device pixel ratio.
 * @param {function(string, string, Object<string, number>):number} measureAndCacheTextWidth Measure and cache text width.
 * @param {string} font The font.
 * @param {Object<string, number>} cache A cache of measured widths.
 * @param {number} rotation Rotation to apply to the flatCoordinates to determine whether text needs to be reversed.
 * @return {Array<Array<*>>} The result array (or null if `maxAngle` was
 * exceeded). Entries of the array are x, y, anchorX, angle, chunk.
 */
function drawTextOnPath(flatCoordinates, offset, end, stride, text, startM, maxAngle, scale, measureAndCacheTextWidth, font, cache, rotation) {
  var result = []; // Keep text upright

  var reverse;

  if (rotation) {
    var rotatedCoordinates = (0, _transform.rotate)(flatCoordinates, offset, end, stride, rotation, [flatCoordinates[offset], flatCoordinates[offset + 1]]);
    reverse = rotatedCoordinates[0] > rotatedCoordinates[rotatedCoordinates.length - stride];
  } else {
    reverse = flatCoordinates[offset] > flatCoordinates[end - stride];
  }

  var numChars = text.length;
  var x1 = flatCoordinates[offset];
  var y1 = flatCoordinates[offset + 1];
  offset += stride;
  var x2 = flatCoordinates[offset];
  var y2 = flatCoordinates[offset + 1];
  var segmentM = 0;
  var segmentLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  var angleChanged = false;
  var index, previousAngle;

  for (var i = 0; i < numChars; ++i) {
    index = reverse ? numChars - i - 1 : i;
    var char = text[index];
    var charLength = scale * measureAndCacheTextWidth(font, char, cache);
    var charM = startM + charLength / 2;

    while (offset < end - stride && segmentM + segmentLength < charM) {
      x1 = x2;
      y1 = y2;
      offset += stride;
      x2 = flatCoordinates[offset];
      y2 = flatCoordinates[offset + 1];
      segmentM += segmentLength;
      segmentLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    var segmentPos = charM - segmentM;
    var angle = Math.atan2(y2 - y1, x2 - x1);

    if (reverse) {
      angle += angle > 0 ? -Math.PI : Math.PI;
    }

    if (previousAngle !== undefined) {
      var delta = angle - previousAngle;
      angleChanged = angleChanged || delta !== 0;
      delta += delta > Math.PI ? -2 * Math.PI : delta < -Math.PI ? 2 * Math.PI : 0;

      if (Math.abs(delta) > maxAngle) {
        return null;
      }
    }

    previousAngle = angle;
    var interpolate = segmentPos / segmentLength;
    var x = (0, _math.lerp)(x1, x2, interpolate);
    var y = (0, _math.lerp)(y1, y2, interpolate);
    result[index] = [x, y, charLength / 2, angle, char];
    startM += charLength;
  }

  return angleChanged ? result : [[result[0][0], result[0][1], result[0][2], result[0][3], text]];
}
},{"../../math.js":"ol/math.js","./transform.js":"ol/geom/flat/transform.js"}],"ol/render/canvas/Executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Instruction = _interopRequireDefault(require("./Instruction.js"));

var _rbush = _interopRequireDefault(require("rbush/rbush.js"));

var _TextBuilder = require("./TextBuilder.js");

var _has = require("../../has.js");

var _transform = require("../../transform.js");

var _extent = require("../../extent.js");

var _canvas = require("../canvas.js");

var _textpath = require("../../geom/flat/textpath.js");

var _array = require("../../array.js");

var _length = require("../../geom/flat/length.js");

var _transform2 = require("../../geom/flat/transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas/Executor
 */

/**
 * @typedef {Object} SerializableInstructions
 * @property {Array<*>} instructions The rendering instructions.
 * @property {Array<*>} hitDetectionInstructions The rendering hit detection instructions.
 * @property {Array<number>} coordinates The array of all coordinates.
 * @property {!Object<string, import("../canvas.js").TextState>} textStates The text states (decluttering).
 * @property {!Object<string, import("../canvas.js").FillState>} fillStates The fill states (decluttering).
 * @property {!Object<string, import("../canvas.js").StrokeState>} strokeStates The stroke states (decluttering).
 */

/**
 * @type {import("../../extent.js").Extent}
 */
var tmpExtent = (0, _extent.createEmpty)();
/**
 * @type {!import("../../transform.js").Transform}
 */

var tmpTransform = (0, _transform.create)();
/** @type {import("../../coordinate.js").Coordinate} */

var p1 = [];
/** @type {import("../../coordinate.js").Coordinate} */

var p2 = [];
/** @type {import("../../coordinate.js").Coordinate} */

var p3 = [];
/** @type {import("../../coordinate.js").Coordinate} */

var p4 = [];

var Executor =
/** @class */
function () {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {SerializableInstructions} instructions The serializable instructions
   * @param {import("../../size.js").Size} renderBuffer Render buffer (width/height) in pixels.
   */
  function Executor(resolution, pixelRatio, overlaps, instructions, renderBuffer) {
    /**
     * @protected
     * @type {boolean}
     */
    this.overlaps = overlaps;
    /**
     * @protected
     * @type {number}
     */

    this.pixelRatio = pixelRatio;
    /**
     * @protected
     * @const
     * @type {number}
     */

    this.resolution = resolution;
    /**
     * @private
     * @type {boolean}
     */

    this.alignFill_;
    /**
     * @type {Array<*>}
     */

    this.declutterItems = [];
    /**
     * @protected
     * @type {Array<*>}
     */

    this.instructions = instructions.instructions;
    /**
     * @protected
     * @type {Array<number>}
     */

    this.coordinates = instructions.coordinates;
    /**
     * @private
     * @type {!Object<number,import("../../coordinate.js").Coordinate|Array<import("../../coordinate.js").Coordinate>|Array<Array<import("../../coordinate.js").Coordinate>>>}
     */

    this.coordinateCache_ = {};
    /**
     * @private
     * @type {import("../../size.js").Size}
     */

    this.renderBuffer_ = renderBuffer;
    /**
     * @private
     * @type {!import("../../transform.js").Transform}
     */

    this.renderedTransform_ = (0, _transform.create)();
    /**
     * @protected
     * @type {Array<*>}
     */

    this.hitDetectionInstructions = instructions.hitDetectionInstructions;
    /**
     * @private
     * @type {Array<number>}
     */

    this.pixelCoordinates_ = null;
    /**
     * @private
     * @type {number}
     */

    this.viewRotation_ = 0;
    /**
     * @type {!Object<string, import("../canvas.js").FillState>}
     */

    this.fillStates = instructions.fillStates || {};
    /**
     * @type {!Object<string, import("../canvas.js").StrokeState>}
     */

    this.strokeStates = instructions.strokeStates || {};
    /**
     * @type {!Object<string, import("../canvas.js").TextState>}
     */

    this.textStates = instructions.textStates || {};
    /**
     * @private
     * @type {Object<string, Object<string, number>>}
     */

    this.widths_ = {};
    /**
     * @private
     * @type {Object<string, import("../canvas.js").Label>}
     */

    this.labels_ = {};
  }
  /**
   * @param {string} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */


  Executor.prototype.createLabel = function (text, textKey, fillKey, strokeKey) {
    var key = text + textKey + fillKey + strokeKey;

    if (this.labels_[key]) {
      return this.labels_[key];
    }

    var strokeState = strokeKey ? this.strokeStates[strokeKey] : null;
    var fillState = fillKey ? this.fillStates[fillKey] : null;
    var textState = this.textStates[textKey];
    var pixelRatio = this.pixelRatio;
    var scale = [textState.scale[0] * pixelRatio, textState.scale[1] * pixelRatio];
    var align = _TextBuilder.TEXT_ALIGN[textState.textAlign || _canvas.defaultTextAlign];
    var strokeWidth = strokeKey && strokeState.lineWidth ? strokeState.lineWidth : 0;
    var lines = text.split('\n');
    var numLines = lines.length;
    var widths = [];
    var width = (0, _canvas.measureTextWidths)(textState.font, lines, widths);
    var lineHeight = (0, _canvas.measureTextHeight)(textState.font);
    var height = lineHeight * numLines;
    var renderWidth = width + strokeWidth;
    var contextInstructions = []; // make canvas 2 pixels wider to account for italic text width measurement errors

    var w = (renderWidth + 2) * scale[0];
    var h = (height + strokeWidth) * scale[1];
    /** @type {import("../canvas.js").Label} */

    var label = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: h < 0 ? Math.floor(h) : Math.ceil(h),
      contextInstructions: contextInstructions
    };

    if (scale[0] != 1 || scale[1] != 1) {
      contextInstructions.push('scale', scale);
    }

    contextInstructions.push('font', textState.font);

    if (strokeKey) {
      contextInstructions.push('strokeStyle', strokeState.strokeStyle);
      contextInstructions.push('lineWidth', strokeWidth);
      contextInstructions.push('lineCap', strokeState.lineCap);
      contextInstructions.push('lineJoin', strokeState.lineJoin);
      contextInstructions.push('miterLimit', strokeState.miterLimit); // eslint-disable-next-line

      var Context = _has.WORKER_OFFSCREEN_CANVAS ? OffscreenCanvasRenderingContext2D : CanvasRenderingContext2D;

      if (Context.prototype.setLineDash) {
        contextInstructions.push('setLineDash', [strokeState.lineDash]);
        contextInstructions.push('lineDashOffset', strokeState.lineDashOffset);
      }
    }

    if (fillKey) {
      contextInstructions.push('fillStyle', fillState.fillStyle);
    }

    contextInstructions.push('textBaseline', 'middle');
    contextInstructions.push('textAlign', 'center');
    var leftRight = 0.5 - align;
    var x = align * renderWidth + leftRight * strokeWidth;
    var i;

    if (strokeKey) {
      for (i = 0; i < numLines; ++i) {
        contextInstructions.push('strokeText', [lines[i], x + leftRight * widths[i], 0.5 * (strokeWidth + lineHeight) + i * lineHeight]);
      }
    }

    if (fillKey) {
      for (i = 0; i < numLines; ++i) {
        contextInstructions.push('fillText', [lines[i], x + leftRight * widths[i], 0.5 * (strokeWidth + lineHeight) + i * lineHeight]);
      }
    }

    this.labels_[key] = label;
    return label;
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @param {boolean} declutter Declutter.
   */


  Executor.prototype.replayTextBackground_ = function (context, p1, p2, p3, p4, fillInstruction, strokeInstruction, declutter) {
    context.beginPath();
    context.moveTo.apply(context, p1);
    context.lineTo.apply(context, p2);
    context.lineTo.apply(context, p3);
    context.lineTo.apply(context, p4);
    context.lineTo.apply(context, p1);

    if (fillInstruction) {
      this.alignFill_ =
      /** @type {boolean} */
      fillInstruction[2];

      if (declutter) {
        context.fillStyle =
        /** @type {import("../../colorlike.js").ColorLike} */
        fillInstruction[1];
      }

      this.fill_(context);
    }

    if (strokeInstruction) {
      this.setStrokeStyle_(context,
      /** @type {Array<*>} */
      strokeInstruction);
      context.stroke();
    }
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {import("../canvas.js").DeclutterGroup} declutterGroup Declutter group.
   * @param {number} height Height.
   * @param {number} opacity Opacity.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {number} width Width.
   * @param {Array<number>} padding Padding.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */


  Executor.prototype.replayImageOrLabel_ = function (context, contextScale, x, y, imageOrLabel, anchorX, anchorY, declutterGroup, height, opacity, originX, originY, rotation, scale, snapToPixel, width, padding, fillInstruction, strokeInstruction) {
    var fillStroke = fillInstruction || strokeInstruction;
    anchorX *= scale[0];
    anchorY *= scale[1];
    x -= anchorX;
    y -= anchorY;
    var w = width + originX > imageOrLabel.width ? imageOrLabel.width - originX : width;
    var h = height + originY > imageOrLabel.height ? imageOrLabel.height - originY : height;
    var boxW = padding[3] + w * scale[0] + padding[1];
    var boxH = padding[0] + h * scale[1] + padding[2];
    var boxX = x - padding[3];
    var boxY = y - padding[0];

    if (fillStroke || rotation !== 0) {
      p1[0] = boxX;
      p4[0] = boxX;
      p1[1] = boxY;
      p2[1] = boxY;
      p2[0] = boxX + boxW;
      p3[0] = p2[0];
      p3[1] = boxY + boxH;
      p4[1] = p3[1];
    }

    var transform = null;

    if (rotation !== 0) {
      var centerX = x + anchorX;
      var centerY = y + anchorY;
      transform = (0, _transform.compose)(tmpTransform, centerX, centerY, 1, 1, rotation, -centerX, -centerY);
      (0, _transform.apply)(tmpTransform, p1);
      (0, _transform.apply)(tmpTransform, p2);
      (0, _transform.apply)(tmpTransform, p3);
      (0, _transform.apply)(tmpTransform, p4);
      (0, _extent.createOrUpdate)(Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1]), tmpExtent);
    } else {
      (0, _extent.createOrUpdate)(boxX, boxY, boxX + boxW, boxY + boxH, tmpExtent);
    }

    this.renderBuffer_[0] = Math.max(this.renderBuffer_[0], (0, _extent.getWidth)(tmpExtent));
    this.renderBuffer_[1] = Math.max(this.renderBuffer_[1], (0, _extent.getHeight)(tmpExtent));
    var canvas = context.canvas;
    var strokePadding = strokeInstruction ? strokeInstruction[2] * scale[0] / 2 : 0;
    var renderBuffer = this.renderBuffer_;
    var intersects = tmpExtent[0] - strokePadding <= (canvas.width + renderBuffer[0]) / contextScale && tmpExtent[2] + strokePadding >= -renderBuffer[0] / contextScale && tmpExtent[1] - strokePadding <= (canvas.height + renderBuffer[1]) / contextScale && tmpExtent[3] + strokePadding >= -renderBuffer[1] / contextScale;

    if (snapToPixel) {
      x = Math.round(x);
      y = Math.round(y);
    }

    if (declutterGroup) {
      if (!intersects && declutterGroup[0] == 1) {
        return false;
      }

      var declutterArgs = intersects ? [context, transform ? transform.slice(0) : null, opacity, imageOrLabel, originX, originY, w, h, x, y, scale, tmpExtent.slice()] : null;

      if (declutterArgs) {
        if (fillStroke) {
          declutterArgs.push(fillInstruction, strokeInstruction, p1.slice(0), p2.slice(0), p3.slice(0), p4.slice(0));
        }

        declutterGroup.push(declutterArgs);
      }
    } else if (intersects) {
      if (fillStroke) {
        this.replayTextBackground_(context, p1, p2, p3, p4,
        /** @type {Array<*>} */
        fillInstruction,
        /** @type {Array<*>} */
        strokeInstruction, false);
      }

      (0, _canvas.drawImageOrLabel)(context, transform, opacity, imageOrLabel, originX, originY, w, h, x, y, scale);
    }

    return true;
  };
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */


  Executor.prototype.fill_ = function (context) {
    if (this.alignFill_) {
      var origin_1 = (0, _transform.apply)(this.renderedTransform_, [0, 0]);
      var repeatSize = 512 * this.pixelRatio;
      context.save();
      context.translate(origin_1[0] % repeatSize, origin_1[1] % repeatSize);
      context.rotate(this.viewRotation_);
    }

    context.fill();

    if (this.alignFill_) {
      context.restore();
    }
  };
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */


  Executor.prototype.setStrokeStyle_ = function (context, instruction) {
    context.strokeStyle =
    /** @type {import("../../colorlike.js").ColorLike} */
    instruction[1];
    context.lineWidth =
    /** @type {number} */
    instruction[2];
    context.lineCap =
    /** @type {CanvasLineCap} */
    instruction[3];
    context.lineJoin =
    /** @type {CanvasLineJoin} */
    instruction[4];
    context.miterLimit =
    /** @type {number} */
    instruction[5];

    if (context.setLineDash) {
      context.lineDashOffset =
      /** @type {number} */
      instruction[7];
      context.setLineDash(
      /** @type {Array<number>} */
      instruction[6]);
    }
  };
  /**
   * @param {import("../canvas.js").DeclutterGroup} declutterGroup Declutter group.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} opacity Layer opacity.
   * @param {?} declutterTree Declutter tree.
   * @return {?} Declutter tree.
   */


  Executor.prototype.renderDeclutter = function (declutterGroup, feature, opacity, declutterTree) {
    /** @type {Array<import("../../structs/RBush.js").Entry>} */
    var boxes = [];

    for (var i = 1, ii = declutterGroup.length; i < ii; ++i) {
      var declutterData = declutterGroup[i];
      var box = declutterData[11];
      boxes.push({
        minX: box[0],
        minY: box[1],
        maxX: box[2],
        maxY: box[3],
        value: feature
      });
    }

    if (!declutterTree) {
      declutterTree = new _rbush.default(9);
    }

    var collides = false;

    for (var i = 0, ii = boxes.length; i < ii; ++i) {
      if (declutterTree.collides(boxes[i])) {
        collides = true;
        break;
      }
    }

    if (!collides) {
      declutterTree.load(boxes);

      for (var j = 1, jj = declutterGroup.length; j < jj; ++j) {
        var declutterData =
        /** @type {Array} */
        declutterGroup[j];
        var context = declutterData[0];
        var currentAlpha = context.globalAlpha;

        if (currentAlpha !== opacity) {
          context.globalAlpha = opacity;
        }

        if (declutterData.length > 12) {
          this.replayTextBackground_(declutterData[0], declutterData[14], declutterData[15], declutterData[16], declutterData[17], declutterData[12], declutterData[13], true);
        }

        _canvas.drawImageOrLabel.apply(undefined, declutterData);

        if (currentAlpha !== opacity) {
          context.globalAlpha = currentAlpha;
        }
      }
    }

    declutterGroup.length = 1;
    return declutterTree;
  };
  /**
   * @private
   * @param {string} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */


  Executor.prototype.drawLabelWithPointPlacement_ = function (text, textKey, strokeKey, fillKey) {
    var textState = this.textStates[textKey];
    var label = this.createLabel(text, textKey, fillKey, strokeKey);
    var strokeState = this.strokeStates[strokeKey];
    var pixelRatio = this.pixelRatio;
    var align = _TextBuilder.TEXT_ALIGN[textState.textAlign || _canvas.defaultTextAlign];
    var baseline = _TextBuilder.TEXT_ALIGN[textState.textBaseline || _canvas.defaultTextBaseline];
    var strokeWidth = strokeState && strokeState.lineWidth ? strokeState.lineWidth : 0; // Remove the 2 pixels we added in createLabel() for the anchor

    var width = label.width / pixelRatio - 2 * textState.scale[0];
    var anchorX = align * width + 2 * (0.5 - align) * strokeWidth;
    var anchorY = baseline * label.height / pixelRatio + 2 * (0.5 - baseline) * strokeWidth;
    return {
      label: label,
      anchorX: anchorX,
      anchorY: anchorY
    };
  };
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {function(import("../../Feature.js").FeatureLike): T|undefined} featureCallback Feature callback.
   * @param {import("../../extent.js").Extent=} opt_hitExtent Only check features that intersect this
   *     extent.
   * @return {T|undefined} Callback result.
   * @template T
   */


  Executor.prototype.execute_ = function (context, contextScale, transform, instructions, snapToPixel, featureCallback, opt_hitExtent) {
    this.declutterItems.length = 0;
    /** @type {Array<number>} */

    var pixelCoordinates;

    if (this.pixelCoordinates_ && (0, _array.equals)(transform, this.renderedTransform_)) {
      pixelCoordinates = this.pixelCoordinates_;
    } else {
      if (!this.pixelCoordinates_) {
        this.pixelCoordinates_ = [];
      }

      pixelCoordinates = (0, _transform2.transform2D)(this.coordinates, 0, this.coordinates.length, 2, transform, this.pixelCoordinates_);
      (0, _transform.setFromArray)(this.renderedTransform_, transform);
    }

    var i = 0; // instruction index

    var ii = instructions.length; // end of instructions

    var d = 0; // data index

    var dd; // end of per-instruction data

    var anchorX, anchorY, prevX, prevY, roundX, roundY, declutterGroup, declutterGroups, image, text, textKey;
    var strokeKey, fillKey;
    var pendingFill = 0;
    var pendingStroke = 0;
    var lastFillInstruction = null;
    var lastStrokeInstruction = null;
    var coordinateCache = this.coordinateCache_;
    var viewRotation = this.viewRotation_;
    var viewRotationFromTransform = Math.round(Math.atan2(-transform[1], transform[0]) * 1e12) / 1e12;
    var state =
    /** @type {import("../../render.js").State} */
    {
      context: context,
      pixelRatio: this.pixelRatio,
      resolution: this.resolution,
      rotation: viewRotation
    }; // When the batch size gets too big, performance decreases. 200 is a good
    // balance between batch size and number of fill/stroke instructions.

    var batchSize = this.instructions != instructions || this.overlaps ? 0 : 200;
    var
    /** @type {import("../../Feature.js").FeatureLike} */
    feature;
    var x, y;

    while (i < ii) {
      var instruction = instructions[i];
      var type =
      /** @type {import("./Instruction.js").default} */
      instruction[0];

      switch (type) {
        case _Instruction.default.BEGIN_GEOMETRY:
          feature =
          /** @type {import("../../Feature.js").FeatureLike} */
          instruction[1];

          if (!feature.getGeometry()) {
            i =
            /** @type {number} */
            instruction[2];
          } else if (opt_hitExtent !== undefined && !(0, _extent.intersects)(opt_hitExtent, instruction[3])) {
            i =
            /** @type {number} */
            instruction[2] + 1;
          } else {
            ++i;
          }

          break;

        case _Instruction.default.BEGIN_PATH:
          if (pendingFill > batchSize) {
            this.fill_(context);
            pendingFill = 0;
          }

          if (pendingStroke > batchSize) {
            context.stroke();
            pendingStroke = 0;
          }

          if (!pendingFill && !pendingStroke) {
            context.beginPath();
            prevX = NaN;
            prevY = NaN;
          }

          ++i;
          break;

        case _Instruction.default.CIRCLE:
          d =
          /** @type {number} */
          instruction[1];
          var x1 = pixelCoordinates[d];
          var y1 = pixelCoordinates[d + 1];
          var x2 = pixelCoordinates[d + 2];
          var y2 = pixelCoordinates[d + 3];
          var dx = x2 - x1;
          var dy = y2 - y1;
          var r = Math.sqrt(dx * dx + dy * dy);
          context.moveTo(x1 + r, y1);
          context.arc(x1, y1, r, 0, 2 * Math.PI, true);
          ++i;
          break;

        case _Instruction.default.CLOSE_PATH:
          context.closePath();
          ++i;
          break;

        case _Instruction.default.CUSTOM:
          d =
          /** @type {number} */
          instruction[1];
          dd = instruction[2];
          var geometry =
          /** @type {import("../../geom/SimpleGeometry.js").default} */
          instruction[3];
          var renderer = instruction[4];
          var fn = instruction.length == 6 ? instruction[5] : undefined;
          state.geometry = geometry;
          state.feature = feature;

          if (!(i in coordinateCache)) {
            coordinateCache[i] = [];
          }

          var coords = coordinateCache[i];

          if (fn) {
            fn(pixelCoordinates, d, dd, 2, coords);
          } else {
            coords[0] = pixelCoordinates[d];
            coords[1] = pixelCoordinates[d + 1];
            coords.length = 2;
          }

          renderer(coords, state);
          ++i;
          break;

        case _Instruction.default.DRAW_IMAGE:
          d =
          /** @type {number} */
          instruction[1];
          dd =
          /** @type {number} */
          instruction[2];
          image =
          /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          instruction[3]; // Remaining arguments in DRAW_IMAGE are in alphabetical order

          anchorX =
          /** @type {number} */
          instruction[4];
          anchorY =
          /** @type {number} */
          instruction[5];
          declutterGroups = featureCallback ? null : instruction[6];
          var height =
          /** @type {number} */
          instruction[7];
          var opacity =
          /** @type {number} */
          instruction[8];
          var originX =
          /** @type {number} */
          instruction[9];
          var originY =
          /** @type {number} */
          instruction[10];
          var rotateWithView =
          /** @type {boolean} */
          instruction[11];
          var rotation =
          /** @type {number} */
          instruction[12];
          var scale =
          /** @type {import("../../size.js").Size} */
          instruction[13];
          var width =
          /** @type {number} */
          instruction[14];

          if (!image && instruction.length >= 19) {
            // create label images
            text =
            /** @type {string} */
            instruction[18];
            textKey =
            /** @type {string} */
            instruction[19];
            strokeKey =
            /** @type {string} */
            instruction[20];
            fillKey =
            /** @type {string} */
            instruction[21];
            var labelWithAnchor = this.drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey);
            image = labelWithAnchor.label;
            instruction[3] = image;
            var textOffsetX =
            /** @type {number} */
            instruction[22];
            anchorX = (labelWithAnchor.anchorX - textOffsetX) * this.pixelRatio;
            instruction[4] = anchorX;
            var textOffsetY =
            /** @type {number} */
            instruction[23];
            anchorY = (labelWithAnchor.anchorY - textOffsetY) * this.pixelRatio;
            instruction[5] = anchorY;
            height = image.height;
            instruction[7] = height;
            width = image.width;
            instruction[14] = width;
          }

          var geometryWidths = void 0;

          if (instruction.length > 24) {
            geometryWidths =
            /** @type {number} */
            instruction[24];
          }

          var padding = void 0,
              backgroundFill = void 0,
              backgroundStroke = void 0;

          if (instruction.length > 16) {
            padding =
            /** @type {Array<number>} */
            instruction[15];
            backgroundFill =
            /** @type {boolean} */
            instruction[16];
            backgroundStroke =
            /** @type {boolean} */
            instruction[17];
          } else {
            padding = _canvas.defaultPadding;
            backgroundFill = false;
            backgroundStroke = false;
          }

          if (rotateWithView && viewRotationFromTransform) {
            // Canvas is expected to be rotated to reverse view rotation.
            rotation += viewRotation;
          } else if (!rotateWithView && !viewRotationFromTransform) {
            // Canvas is not rotated, images need to be rotated back to be north-up.
            rotation -= viewRotation;
          }

          var widthIndex = 0;
          var declutterGroupIndex = 0;

          for (; d < dd; d += 2) {
            if (geometryWidths && geometryWidths[widthIndex++] < width / this.pixelRatio) {
              continue;
            }

            if (declutterGroups) {
              var index = Math.floor(declutterGroupIndex);
              declutterGroup = declutterGroups.length < index + 1 ? [declutterGroups[0][0]] : declutterGroups[index];
            }

            var rendered = this.replayImageOrLabel_(context, contextScale, pixelCoordinates[d], pixelCoordinates[d + 1], image, anchorX, anchorY, declutterGroup, height, opacity, originX, originY, rotation, scale, snapToPixel, width, padding, backgroundFill ?
            /** @type {Array<*>} */
            lastFillInstruction : null, backgroundStroke ?
            /** @type {Array<*>} */
            lastStrokeInstruction : null);

            if (rendered && declutterGroup && declutterGroups[declutterGroups.length - 1] !== declutterGroup) {
              declutterGroups.push(declutterGroup);
            }

            if (declutterGroup) {
              if (declutterGroup.length - 1 === declutterGroup[0]) {
                this.declutterItems.push(this, declutterGroup, feature);
              }

              declutterGroupIndex += 1 / declutterGroup[0];
            }
          }

          ++i;
          break;

        case _Instruction.default.DRAW_CHARS:
          var begin =
          /** @type {number} */
          instruction[1];
          var end =
          /** @type {number} */
          instruction[2];
          var baseline =
          /** @type {number} */
          instruction[3];
          declutterGroup = featureCallback ? null : instruction[4];
          var overflow =
          /** @type {number} */
          instruction[5];
          fillKey =
          /** @type {string} */
          instruction[6];
          var maxAngle =
          /** @type {number} */
          instruction[7];
          var measurePixelRatio =
          /** @type {number} */
          instruction[8];
          var offsetY =
          /** @type {number} */
          instruction[9];
          strokeKey =
          /** @type {string} */
          instruction[10];
          var strokeWidth =
          /** @type {number} */
          instruction[11];
          text =
          /** @type {string} */
          instruction[12];
          textKey =
          /** @type {string} */
          instruction[13];
          var pixelRatioScale = [
          /** @type {number} */
          instruction[14],
          /** @type {number} */
          instruction[14]];
          var textState = this.textStates[textKey];
          var font = textState.font;
          var textScale = [textState.scale[0] * measurePixelRatio, textState.scale[1] * measurePixelRatio];
          var cachedWidths = void 0;

          if (font in this.widths_) {
            cachedWidths = this.widths_[font];
          } else {
            cachedWidths = {};
            this.widths_[font] = cachedWidths;
          }

          var pathLength = (0, _length.lineStringLength)(pixelCoordinates, begin, end, 2);
          var textLength = Math.abs(textScale[0]) * (0, _canvas.measureAndCacheTextWidth)(font, text, cachedWidths);

          if (overflow || textLength <= pathLength) {
            var textAlign = this.textStates[textKey].textAlign;
            var startM = (pathLength - textLength) * _TextBuilder.TEXT_ALIGN[textAlign];
            var parts = (0, _textpath.drawTextOnPath)(pixelCoordinates, begin, end, 2, text, startM, maxAngle, Math.abs(textScale[0]), _canvas.measureAndCacheTextWidth, font, cachedWidths, viewRotationFromTransform ? 0 : this.viewRotation_);

            if (parts) {
              var rendered = false;
              var c = void 0,
                  cc = void 0,
                  chars = void 0,
                  label = void 0,
                  part = void 0;

              if (strokeKey) {
                for (c = 0, cc = parts.length; c < cc; ++c) {
                  part = parts[c]; // x, y, anchorX, rotation, chunk

                  chars =
                  /** @type {string} */
                  part[4];
                  label = this.createLabel(chars, textKey, '', strokeKey);
                  anchorX =
                  /** @type {number} */
                  part[2] + strokeWidth;
                  anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth * textScale[1] / textScale[0] - offsetY;
                  rendered = this.replayImageOrLabel_(context, contextScale,
                  /** @type {number} */
                  part[0],
                  /** @type {number} */
                  part[1], label, anchorX, anchorY, declutterGroup, label.height, 1, 0, 0,
                  /** @type {number} */
                  part[3], pixelRatioScale, false, label.width, _canvas.defaultPadding, null, null) || rendered;
                }
              }

              if (fillKey) {
                for (c = 0, cc = parts.length; c < cc; ++c) {
                  part = parts[c]; // x, y, anchorX, rotation, chunk

                  chars =
                  /** @type {string} */
                  part[4];
                  label = this.createLabel(chars, textKey, fillKey, '');
                  anchorX =
                  /** @type {number} */
                  part[2];
                  anchorY = baseline * label.height - offsetY;
                  rendered = this.replayImageOrLabel_(context, contextScale,
                  /** @type {number} */
                  part[0],
                  /** @type {number} */
                  part[1], label, anchorX, anchorY, declutterGroup, label.height, 1, 0, 0,
                  /** @type {number} */
                  part[3], pixelRatioScale, false, label.width, _canvas.defaultPadding, null, null) || rendered;
                }
              }

              if (rendered) {
                this.declutterItems.push(this, declutterGroup, feature);
              }
            }
          }

          ++i;
          break;

        case _Instruction.default.END_GEOMETRY:
          if (featureCallback !== undefined) {
            feature =
            /** @type {import("../../Feature.js").FeatureLike} */
            instruction[1];
            var result = featureCallback(feature);

            if (result) {
              return result;
            }
          }

          ++i;
          break;

        case _Instruction.default.FILL:
          if (batchSize) {
            pendingFill++;
          } else {
            this.fill_(context);
          }

          ++i;
          break;

        case _Instruction.default.MOVE_TO_LINE_TO:
          d =
          /** @type {number} */
          instruction[1];
          dd =
          /** @type {number} */
          instruction[2];
          x = pixelCoordinates[d];
          y = pixelCoordinates[d + 1];
          roundX = x + 0.5 | 0;
          roundY = y + 0.5 | 0;

          if (roundX !== prevX || roundY !== prevY) {
            context.moveTo(x, y);
            prevX = roundX;
            prevY = roundY;
          }

          for (d += 2; d < dd; d += 2) {
            x = pixelCoordinates[d];
            y = pixelCoordinates[d + 1];
            roundX = x + 0.5 | 0;
            roundY = y + 0.5 | 0;

            if (d == dd - 2 || roundX !== prevX || roundY !== prevY) {
              context.lineTo(x, y);
              prevX = roundX;
              prevY = roundY;
            }
          }

          ++i;
          break;

        case _Instruction.default.SET_FILL_STYLE:
          lastFillInstruction = instruction;
          this.alignFill_ = instruction[2];

          if (pendingFill) {
            this.fill_(context);
            pendingFill = 0;

            if (pendingStroke) {
              context.stroke();
              pendingStroke = 0;
            }
          }

          context.fillStyle =
          /** @type {import("../../colorlike.js").ColorLike} */
          instruction[1];
          ++i;
          break;

        case _Instruction.default.SET_STROKE_STYLE:
          lastStrokeInstruction = instruction;

          if (pendingStroke) {
            context.stroke();
            pendingStroke = 0;
          }

          this.setStrokeStyle_(context,
          /** @type {Array<*>} */
          instruction);
          ++i;
          break;

        case _Instruction.default.STROKE:
          if (batchSize) {
            pendingStroke++;
          } else {
            context.stroke();
          }

          ++i;
          break;

        default:
          ++i; // consume the instruction anyway, to avoid an infinite loop

          break;
      }
    }

    if (pendingFill) {
      this.fill_(context);
    }

    if (pendingStroke) {
      context.stroke();
    }

    return undefined;
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   */


  Executor.prototype.execute = function (context, contextScale, transform, viewRotation, snapToPixel) {
    this.viewRotation_ = viewRotation;
    this.execute_(context, contextScale, transform, this.instructions, snapToPixel, undefined, undefined);
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {function(import("../../Feature.js").FeatureLike): T=} opt_featureCallback
   *     Feature callback.
   * @param {import("../../extent.js").Extent=} opt_hitExtent Only check features that intersect this
   *     extent.
   * @return {T|undefined} Callback result.
   * @template T
   */


  Executor.prototype.executeHitDetection = function (context, transform, viewRotation, opt_featureCallback, opt_hitExtent) {
    this.viewRotation_ = viewRotation;
    return this.execute_(context, 1, transform, this.hitDetectionInstructions, true, opt_featureCallback, opt_hitExtent);
  };

  return Executor;
}();

var _default = Executor;
exports.default = _default;
},{"./Instruction.js":"ol/render/canvas/Instruction.js","rbush/rbush.js":"node_modules/rbush/rbush.js","./TextBuilder.js":"ol/render/canvas/TextBuilder.js","../../has.js":"ol/has.js","../../transform.js":"ol/transform.js","../../extent.js":"ol/extent.js","../canvas.js":"ol/render/canvas.js","../../geom/flat/textpath.js":"ol/geom/flat/textpath.js","../../array.js":"ol/array.js","../../geom/flat/length.js":"ol/geom/flat/length.js","../../geom/flat/transform.js":"ol/geom/flat/transform.js"}],"ol/render/canvas/ExecutorGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCircleArray = getCircleArray;
exports.replayDeclutter = replayDeclutter;
exports.default = void 0;

var _BuilderType = _interopRequireDefault(require("./BuilderType.js"));

var _Executor = _interopRequireDefault(require("./Executor.js"));

var _extent = require("../../extent.js");

var _transform = require("../../transform.js");

var _dom = require("../../dom.js");

var _obj = require("../../obj.js");

var _array = require("../../array.js");

var _transform2 = require("../../geom/flat/transform.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas/ExecutorGroup
 */

/**
 * @const
 * @type {Array<import("./BuilderType.js").default>}
 */
var ORDER = [_BuilderType.default.POLYGON, _BuilderType.default.CIRCLE, _BuilderType.default.LINE_STRING, _BuilderType.default.IMAGE, _BuilderType.default.TEXT, _BuilderType.default.DEFAULT];

var ExecutorGroup =
/** @class */
function () {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Buillder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceet that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("./BuilderType.js").default, import("./Builder.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number=} opt_renderBuffer Optional rendering buffer.
   */
  function ExecutorGroup(maxExtent, resolution, pixelRatio, overlaps, allInstructions, opt_renderBuffer) {
    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */
    this.maxExtent_ = maxExtent;
    /**
     * @private
     * @type {boolean}
     */

    this.overlaps_ = overlaps;
    /**
     * @private
     * @type {number}
     */

    this.pixelRatio_ = pixelRatio;
    /**
     * @private
     * @type {number}
     */

    this.resolution_ = resolution;
    /**
     * @private
     * @type {number|undefined}
     */

    this.renderBuffer_ = opt_renderBuffer;
    /**
     * @private
     * @type {!Object<string, !Object<import("./BuilderType.js").default, import("./Executor").default>>}
     */

    this.executorsByZIndex_ = {};
    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */

    this.hitDetectionContext_ = null;
    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */

    this.hitDetectionTransform_ = (0, _transform.create)();
    this.createExecutors_(allInstructions);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */


  ExecutorGroup.prototype.clip = function (context, transform) {
    var flatClipCoords = this.getClipCoords(transform);
    context.beginPath();
    context.moveTo(flatClipCoords[0], flatClipCoords[1]);
    context.lineTo(flatClipCoords[2], flatClipCoords[3]);
    context.lineTo(flatClipCoords[4], flatClipCoords[5]);
    context.lineTo(flatClipCoords[6], flatClipCoords[7]);
    context.clip();
  };
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<import("./BuilderType.js").default, import("./Builder.js").SerializableInstructions>>} allInstructions The serializable instructions
   */


  ExecutorGroup.prototype.createExecutors_ = function (allInstructions) {
    for (var zIndex in allInstructions) {
      var executors = this.executorsByZIndex_[zIndex];

      if (executors === undefined) {
        executors = {};
        this.executorsByZIndex_[zIndex] = executors;
      }

      var instructionByZindex = allInstructions[zIndex];
      var renderBuffer = [this.renderBuffer_ || 0, this.renderBuffer_ || 0];

      for (var builderType in instructionByZindex) {
        var instructions = instructionByZindex[builderType];
        executors[builderType] = new _Executor.default(this.resolution_, this.pixelRatio_, this.overlaps_, instructions, renderBuffer);
      }
    }
  };
  /**
   * @param {Array<import("./BuilderType.js").default>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */


  ExecutorGroup.prototype.hasExecutors = function (executors) {
    for (var zIndex in this.executorsByZIndex_) {
      var candidates = this.executorsByZIndex_[zIndex];

      for (var i = 0, ii = executors.length; i < ii; ++i) {
        if (executors[i] in candidates) {
          return true;
        }
      }
    }

    return false;
  };
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */


  ExecutorGroup.prototype.forEachFeatureAtCoordinate = function (coordinate, resolution, rotation, hitTolerance, callback, declutteredFeatures) {
    hitTolerance = Math.round(hitTolerance);
    var contextSize = hitTolerance * 2 + 1;
    var transform = (0, _transform.compose)(this.hitDetectionTransform_, hitTolerance + 0.5, hitTolerance + 0.5, 1 / resolution, -1 / resolution, -rotation, -coordinate[0], -coordinate[1]);

    if (!this.hitDetectionContext_) {
      this.hitDetectionContext_ = (0, _dom.createCanvasContext2D)(contextSize, contextSize);
    }

    var context = this.hitDetectionContext_;

    if (context.canvas.width !== contextSize || context.canvas.height !== contextSize) {
      context.canvas.width = contextSize;
      context.canvas.height = contextSize;
    } else {
      context.clearRect(0, 0, contextSize, contextSize);
    }
    /**
     * @type {import("../../extent.js").Extent}
     */


    var hitExtent;

    if (this.renderBuffer_ !== undefined) {
      hitExtent = (0, _extent.createEmpty)();
      (0, _extent.extendCoordinate)(hitExtent, coordinate);
      (0, _extent.buffer)(hitExtent, resolution * (this.renderBuffer_ + hitTolerance), hitExtent);
    }

    var mask = getCircleArray(hitTolerance);
    var builderType;
    /**
     * @param {import("../../Feature.js").FeatureLike} feature Feature.
     * @return {?} Callback result.
     */

    function featureCallback(feature) {
      var imageData = context.getImageData(0, 0, contextSize, contextSize).data;

      for (var i_1 = 0; i_1 < contextSize; i_1++) {
        for (var j_1 = 0; j_1 < contextSize; j_1++) {
          if (mask[i_1][j_1]) {
            if (imageData[(j_1 * contextSize + i_1) * 4 + 3] > 0) {
              var result_1 = void 0;

              if (!(declutteredFeatures && (builderType == _BuilderType.default.IMAGE || builderType == _BuilderType.default.TEXT)) || declutteredFeatures.indexOf(feature) !== -1) {
                result_1 = callback(feature);
              }

              if (result_1) {
                return result_1;
              } else {
                context.clearRect(0, 0, contextSize, contextSize);
                return undefined;
              }
            }
          }
        }
      }
    }
    /** @type {Array<number>} */


    var zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(_array.numberSafeCompareFunction);
    var i, j, executors, executor, result;

    for (i = zs.length - 1; i >= 0; --i) {
      var zIndexKey = zs[i].toString();
      executors = this.executorsByZIndex_[zIndexKey];

      for (j = ORDER.length - 1; j >= 0; --j) {
        builderType = ORDER[j];
        executor = executors[builderType];

        if (executor !== undefined) {
          result = executor.executeHitDetection(context, transform, rotation, featureCallback, hitExtent);

          if (result) {
            return result;
          }
        }
      }
    }

    return undefined;
  };
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>} Clip coordinates.
   */


  ExecutorGroup.prototype.getClipCoords = function (transform) {
    var maxExtent = this.maxExtent_;

    if (!maxExtent) {
      return null;
    }

    var minX = maxExtent[0];
    var minY = maxExtent[1];
    var maxX = maxExtent[2];
    var maxY = maxExtent[3];
    var flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
    (0, _transform2.transform2D)(flatClipCoords, 0, 8, 2, transform, flatClipCoords);
    return flatClipCoords;
  };
  /**
   * @return {boolean} Is empty.
   */


  ExecutorGroup.prototype.isEmpty = function () {
    return (0, _obj.isEmpty)(this.executorsByZIndex_);
  };
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("./BuilderType.js").default>=} opt_builderTypes Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ORDER}
   * @param {Object<string, import("../canvas.js").DeclutterGroup>=} opt_declutterReplays Declutter replays.
   */


  ExecutorGroup.prototype.execute = function (context, contextScale, transform, viewRotation, snapToPixel, opt_builderTypes, opt_declutterReplays) {
    /** @type {Array<number>} */
    var zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(_array.numberSafeCompareFunction); // setup clipping so that the parts of over-simplified geometries are not
    // visible outside the current extent when panning

    if (this.maxExtent_) {
      context.save();
      this.clip(context, transform);
    }

    var builderTypes = opt_builderTypes ? opt_builderTypes : ORDER;
    var i, ii, j, jj, replays, replay;

    for (i = 0, ii = zs.length; i < ii; ++i) {
      var zIndexKey = zs[i].toString();
      replays = this.executorsByZIndex_[zIndexKey];

      for (j = 0, jj = builderTypes.length; j < jj; ++j) {
        var builderType = builderTypes[j];
        replay = replays[builderType];

        if (replay !== undefined) {
          if (opt_declutterReplays && (builderType == _BuilderType.default.IMAGE || builderType == _BuilderType.default.TEXT)) {
            var declutter = opt_declutterReplays[zIndexKey];

            if (!declutter) {
              opt_declutterReplays[zIndexKey] = [replay, transform.slice(0)];
            } else {
              declutter.push(replay, transform.slice(0));
            }
          } else {
            replay.execute(context, contextScale, transform, viewRotation, snapToPixel);
          }
        }
      }
    }

    if (this.maxExtent_) {
      context.restore();
    }
  };

  return ExecutorGroup;
}();
/**
 * This cache is used for storing calculated pixel circles for increasing performance.
 * It is a static property to allow each Replaygroup to access it.
 * @type {Object<number, Array<Array<(boolean|undefined)>>>}
 */


var circleArrayCache = {
  0: [[true]]
};
/**
 * This method fills a row in the array from the given coordinate to the
 * middle with `true`.
 * @param {Array<Array<(boolean|undefined)>>} array The array that will be altered.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 */

function fillCircleArrayRowToMiddle(array, x, y) {
  var i;
  var radius = Math.floor(array.length / 2);

  if (x >= radius) {
    for (i = radius; i < x; i++) {
      array[i][y] = true;
    }
  } else if (x < radius) {
    for (i = x + 1; i < radius; i++) {
      array[i][y] = true;
    }
  }
}
/**
 * This methods creates a circle inside a fitting array. Points inside the
 * circle are marked by true, points on the outside are undefined.
 * It uses the midpoint circle algorithm.
 * A cache is used to increase performance.
 * @param {number} radius Radius.
 * @returns {Array<Array<(boolean|undefined)>>} An array with marked circle points.
 */


function getCircleArray(radius) {
  if (circleArrayCache[radius] !== undefined) {
    return circleArrayCache[radius];
  }

  var arraySize = radius * 2 + 1;
  var arr = new Array(arraySize);

  for (var i = 0; i < arraySize; i++) {
    arr[i] = new Array(arraySize);
  }

  var x = radius;
  var y = 0;
  var error = 0;

  while (x >= y) {
    fillCircleArrayRowToMiddle(arr, radius + x, radius + y);
    fillCircleArrayRowToMiddle(arr, radius + y, radius + x);
    fillCircleArrayRowToMiddle(arr, radius - y, radius + x);
    fillCircleArrayRowToMiddle(arr, radius - x, radius + y);
    fillCircleArrayRowToMiddle(arr, radius - x, radius - y);
    fillCircleArrayRowToMiddle(arr, radius - y, radius - x);
    fillCircleArrayRowToMiddle(arr, radius + y, radius - x);
    fillCircleArrayRowToMiddle(arr, radius + x, radius - y);
    y++;
    error += 1 + 2 * y;

    if (2 * (error - x) + 1 > 0) {
      x -= 1;
      error += 1 - 2 * x;
    }
  }

  circleArrayCache[radius] = arr;
  return arr;
}
/**
 * @param {!Object<string, Array<*>>} declutterReplays Declutter replays.
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} opacity Opacity.
 * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
 * @param {Array<import("../../PluggableMap.js").DeclutterItems>} declutterItems Declutter items.
 */


function replayDeclutter(declutterReplays, context, rotation, opacity, snapToPixel, declutterItems) {
  var zs = Object.keys(declutterReplays).map(Number).sort(_array.numberSafeCompareFunction);

  for (var z = 0, zz = zs.length; z < zz; ++z) {
    var executorData = declutterReplays[zs[z].toString()];
    var currentExecutor = void 0;

    for (var i = 0, ii = executorData.length; i < ii;) {
      var executor = executorData[i++];
      var transform = executorData[i++];
      executor.execute(context, 1, transform, rotation, snapToPixel);

      if (executor !== currentExecutor && executor.declutterItems.length > 0) {
        currentExecutor = executor;
        declutterItems.push({
          items: executor.declutterItems,
          opacity: opacity
        });
      }
    }
  }
}

var _default = ExecutorGroup;
exports.default = _default;
},{"./BuilderType.js":"ol/render/canvas/BuilderType.js","./Executor.js":"ol/render/canvas/Executor.js","../../extent.js":"ol/extent.js","../../transform.js":"ol/transform.js","../../dom.js":"ol/dom.js","../../obj.js":"ol/obj.js","../../array.js":"ol/array.js","../../geom/flat/transform.js":"ol/geom/flat/transform.js"}],"ol/ViewHint.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/ViewHint
 */

/**
 * @enum {number}
 */
var _default = {
  ANIMATING: 0,
  INTERACTING: 1
};
exports.default = _default;
},{}],"ol/render/canvas/Immediate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GeometryType = _interopRequireDefault(require("../../geom/GeometryType.js"));

var _VectorContext = _interopRequireDefault(require("../VectorContext.js"));

var _colorlike = require("../../colorlike.js");

var _transform = require("../../transform.js");

var _canvas = require("../canvas.js");

var _array = require("../../array.js");

var _extent = require("../../extent.js");

var _transform2 = require("../../geom/flat/transform.js");

var _SimpleGeometry = require("../../geom/SimpleGeometry.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas/Immediate
 */
// FIXME test, especially polygons with holes and multipolygons
// FIXME need to handle large thick features (where pixel size matters)
// FIXME add offset and end to ol/geom/flat/transform~transform2D?
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * @classdesc
 * A concrete subclass of {@link module:ol/render/VectorContext} that implements
 * direct rendering of features and geometries to an HTML5 Canvas context.
 * Instances of this class are created internally by the library and
 * provided to application code as vectorContext member of the
 * {@link module:ol/render/Event~RenderEvent} object associated with postcompose, precompose and
 * render events emitted by layers and maps.
 */
var CanvasImmediateRenderer =
/** @class */
function (_super) {
  __extends(CanvasImmediateRenderer, _super);
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number=} opt_squaredTolerance Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction=} opt_userTransform Transform from user to view projection.
   */


  function CanvasImmediateRenderer(context, pixelRatio, extent, transform, viewRotation, opt_squaredTolerance, opt_userTransform) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {CanvasRenderingContext2D}
     */


    _this.context_ = context;
    /**
     * @private
     * @type {number}
     */

    _this.pixelRatio_ = pixelRatio;
    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */

    _this.extent_ = extent;
    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */

    _this.transform_ = transform;
    /**
     * @private
     * @type {number}
     */

    _this.viewRotation_ = viewRotation;
    /**
     * @private
     * @type {number}
     */

    _this.squaredTolerance_ = opt_squaredTolerance;
    /**
     * @private
     * @type {import("../../proj.js").TransformFunction}
     */

    _this.userTransform_ = opt_userTransform;
    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */

    _this.contextFillState_ = null;
    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */

    _this.contextStrokeState_ = null;
    /**
     * @private
     * @type {?import("../canvas.js").TextState}
     */

    _this.contextTextState_ = null;
    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */

    _this.fillState_ = null;
    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */

    _this.strokeState_ = null;
    /**
     * @private
     * @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement}
     */

    _this.image_ = null;
    /**
     * @private
     * @type {number}
     */

    _this.imageAnchorX_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.imageAnchorY_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.imageHeight_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.imageOpacity_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.imageOriginX_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.imageOriginY_ = 0;
    /**
     * @private
     * @type {boolean}
     */

    _this.imageRotateWithView_ = false;
    /**
     * @private
     * @type {number}
     */

    _this.imageRotation_ = 0;
    /**
     * @private
     * @type {import("../../size.js").Size}
     */

    _this.imageScale_ = [0, 0];
    /**
     * @private
     * @type {number}
     */

    _this.imageWidth_ = 0;
    /**
     * @private
     * @type {string}
     */

    _this.text_ = '';
    /**
     * @private
     * @type {number}
     */

    _this.textOffsetX_ = 0;
    /**
     * @private
     * @type {number}
     */

    _this.textOffsetY_ = 0;
    /**
     * @private
     * @type {boolean}
     */

    _this.textRotateWithView_ = false;
    /**
     * @private
     * @type {number}
     */

    _this.textRotation_ = 0;
    /**
     * @private
     * @type {import("../../size.js").Size}
     */

    _this.textScale_ = [0, 0];
    /**
     * @private
     * @type {?import("../canvas.js").FillState}
     */

    _this.textFillState_ = null;
    /**
     * @private
     * @type {?import("../canvas.js").StrokeState}
     */

    _this.textStrokeState_ = null;
    /**
     * @private
     * @type {?import("../canvas.js").TextState}
     */

    _this.textState_ = null;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.pixelCoordinates_ = [];
    /**
     * @private
     * @type {import("../../transform.js").Transform}
     */

    _this.tmpLocalTransform_ = (0, _transform.create)();
    return _this;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */


  CanvasImmediateRenderer.prototype.drawImages_ = function (flatCoordinates, offset, end, stride) {
    if (!this.image_) {
      return;
    }

    var pixelCoordinates = (0, _transform2.transform2D)(flatCoordinates, offset, end, 2, this.transform_, this.pixelCoordinates_);
    var context = this.context_;
    var localTransform = this.tmpLocalTransform_;
    var alpha = context.globalAlpha;

    if (this.imageOpacity_ != 1) {
      context.globalAlpha = alpha * this.imageOpacity_;
    }

    var rotation = this.imageRotation_;

    if (this.imageRotateWithView_) {
      rotation += this.viewRotation_;
    }

    for (var i = 0, ii = pixelCoordinates.length; i < ii; i += 2) {
      var x = pixelCoordinates[i] - this.imageAnchorX_;
      var y = pixelCoordinates[i + 1] - this.imageAnchorY_;

      if (rotation !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        var centerX = x + this.imageAnchorX_;
        var centerY = y + this.imageAnchorY_;
        (0, _transform.compose)(localTransform, centerX, centerY, 1, 1, rotation, -centerX, -centerY);
        context.setTransform.apply(context, localTransform);
        context.translate(centerX, centerY);
        context.scale(this.imageScale_[0], this.imageScale_[1]);
        context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_);
        context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, x, y, this.imageWidth_, this.imageHeight_);
      }
    }

    if (this.imageOpacity_ != 1) {
      context.globalAlpha = alpha;
    }
  };
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */


  CanvasImmediateRenderer.prototype.drawText_ = function (flatCoordinates, offset, end, stride) {
    if (!this.textState_ || this.text_ === '') {
      return;
    }

    if (this.textFillState_) {
      this.setContextFillState_(this.textFillState_);
    }

    if (this.textStrokeState_) {
      this.setContextStrokeState_(this.textStrokeState_);
    }

    this.setContextTextState_(this.textState_);
    var pixelCoordinates = (0, _transform2.transform2D)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    var context = this.context_;
    var rotation = this.textRotation_;

    if (this.textRotateWithView_) {
      rotation += this.viewRotation_;
    }

    for (; offset < end; offset += stride) {
      var x = pixelCoordinates[offset] + this.textOffsetX_;
      var y = pixelCoordinates[offset + 1] + this.textOffsetY_;

      if (rotation !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1) {
        var localTransform = (0, _transform.compose)(this.tmpLocalTransform_, x, y, 1, 1, rotation, -x, -y);
        context.setTransform.apply(context, localTransform);
        context.translate(x, y);
        context.scale(this.textScale_[0], this.textScale_[1]);

        if (this.textStrokeState_) {
          context.strokeText(this.text_, 0, 0);
        }

        if (this.textFillState_) {
          context.fillText(this.text_, 0, 0);
        }

        context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        if (this.textStrokeState_) {
          context.strokeText(this.text_, x, y);
        }

        if (this.textFillState_) {
          context.fillText(this.text_, x, y);
        }
      }
    }
  };
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} close Close.
   * @private
   * @return {number} end End.
   */


  CanvasImmediateRenderer.prototype.moveToLineTo_ = function (flatCoordinates, offset, end, stride, close) {
    var context = this.context_;
    var pixelCoordinates = (0, _transform2.transform2D)(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    context.moveTo(pixelCoordinates[0], pixelCoordinates[1]);
    var length = pixelCoordinates.length;

    if (close) {
      length -= 2;
    }

    for (var i = 2; i < length; i += 2) {
      context.lineTo(pixelCoordinates[i], pixelCoordinates[i + 1]);
    }

    if (close) {
      context.closePath();
    }

    return end;
  };
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */


  CanvasImmediateRenderer.prototype.drawRings_ = function (flatCoordinates, offset, ends, stride) {
    for (var i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, true);
    }

    return offset;
  };
  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   */


  CanvasImmediateRenderer.prototype.drawCircle = function (geometry) {
    if (!(0, _extent.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }

    if (this.fillState_ || this.strokeState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }

      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }

      var pixelCoordinates = (0, _SimpleGeometry.transformGeom2D)(geometry, this.transform_, this.pixelCoordinates_);
      var dx = pixelCoordinates[2] - pixelCoordinates[0];
      var dy = pixelCoordinates[3] - pixelCoordinates[1];
      var radius = Math.sqrt(dx * dx + dy * dy);
      var context = this.context_;
      context.beginPath();
      context.arc(pixelCoordinates[0], pixelCoordinates[1], radius, 0, 2 * Math.PI);

      if (this.fillState_) {
        context.fill();
      }

      if (this.strokeState_) {
        context.stroke();
      }
    }

    if (this.text_ !== '') {
      this.drawText_(geometry.getCenter(), 0, 2, 2);
    }
  };
  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   */


  CanvasImmediateRenderer.prototype.setStyle = function (style) {
    this.setFillStrokeStyle(style.getFill(), style.getStroke());
    this.setImageStyle(style.getImage());
    this.setTextStyle(style.getText());
  };
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */


  CanvasImmediateRenderer.prototype.setTransform = function (transform) {
    this.transform_ = transform;
  };
  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate#setStyle} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   */


  CanvasImmediateRenderer.prototype.drawGeometry = function (geometry) {
    var type = geometry.getType();

    switch (type) {
      case _GeometryType.default.POINT:
        this.drawPoint(
        /** @type {import("../../geom/Point.js").default} */
        geometry);
        break;

      case _GeometryType.default.LINE_STRING:
        this.drawLineString(
        /** @type {import("../../geom/LineString.js").default} */
        geometry);
        break;

      case _GeometryType.default.POLYGON:
        this.drawPolygon(
        /** @type {import("../../geom/Polygon.js").default} */
        geometry);
        break;

      case _GeometryType.default.MULTI_POINT:
        this.drawMultiPoint(
        /** @type {import("../../geom/MultiPoint.js").default} */
        geometry);
        break;

      case _GeometryType.default.MULTI_LINE_STRING:
        this.drawMultiLineString(
        /** @type {import("../../geom/MultiLineString.js").default} */
        geometry);
        break;

      case _GeometryType.default.MULTI_POLYGON:
        this.drawMultiPolygon(
        /** @type {import("../../geom/MultiPolygon.js").default} */
        geometry);
        break;

      case _GeometryType.default.GEOMETRY_COLLECTION:
        this.drawGeometryCollection(
        /** @type {import("../../geom/GeometryCollection.js").default} */
        geometry);
        break;

      case _GeometryType.default.CIRCLE:
        this.drawCircle(
        /** @type {import("../../geom/Circle.js").default} */
        geometry);
        break;

      default:
    }
  };
  /**
   * Render a feature into the canvas.  Note that any `zIndex` on the provided
   * style will be ignored - features are rendered immediately in the order that
   * this method is called.  If you need `zIndex` support, you should be using an
   * {@link module:ol/layer/Vector~VectorLayer} instead.
   *
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {import("../../style/Style.js").default} style Style.
   * @api
   */


  CanvasImmediateRenderer.prototype.drawFeature = function (feature, style) {
    var geometry = style.getGeometryFunction()(feature);

    if (!geometry || !(0, _extent.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }

    this.setStyle(style);
    this.drawGeometry(geometry);
  };
  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   */


  CanvasImmediateRenderer.prototype.drawGeometryCollection = function (geometry) {
    var geometries = geometry.getGeometriesArray();

    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      this.drawGeometry(geometries[i]);
    }
  };
  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   */


  CanvasImmediateRenderer.prototype.drawPoint = function (geometry) {
    if (this.squaredTolerance_) {
      geometry =
      /** @type {import("../../geom/Point.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }

    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();

    if (this.image_) {
      this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
    }

    if (this.text_ !== '') {
      this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
  };
  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   */


  CanvasImmediateRenderer.prototype.drawMultiPoint = function (geometry) {
    if (this.squaredTolerance_) {
      geometry =
      /** @type {import("../../geom/MultiPoint.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }

    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();

    if (this.image_) {
      this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
    }

    if (this.text_ !== '') {
      this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
  };
  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   */


  CanvasImmediateRenderer.prototype.drawLineString = function (geometry) {
    if (this.squaredTolerance_) {
      geometry =
      /** @type {import("../../geom/LineString.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }

    if (!(0, _extent.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }

    if (this.strokeState_) {
      this.setContextStrokeState_(this.strokeState_);
      var context = this.context_;
      var flatCoordinates = geometry.getFlatCoordinates();
      context.beginPath();
      this.moveToLineTo_(flatCoordinates, 0, flatCoordinates.length, geometry.getStride(), false);
      context.stroke();
    }

    if (this.text_ !== '') {
      var flatMidpoint = geometry.getFlatMidpoint();
      this.drawText_(flatMidpoint, 0, 2, 2);
    }
  };
  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   */


  CanvasImmediateRenderer.prototype.drawMultiLineString = function (geometry) {
    if (this.squaredTolerance_) {
      geometry =
      /** @type {import("../../geom/MultiLineString.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }

    var geometryExtent = geometry.getExtent();

    if (!(0, _extent.intersects)(this.extent_, geometryExtent)) {
      return;
    }

    if (this.strokeState_) {
      this.setContextStrokeState_(this.strokeState_);
      var context = this.context_;
      var flatCoordinates = geometry.getFlatCoordinates();
      var offset = 0;
      var ends =
      /** @type {Array<number>} */
      geometry.getEnds();
      var stride = geometry.getStride();
      context.beginPath();

      for (var i = 0, ii = ends.length; i < ii; ++i) {
        offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, false);
      }

      context.stroke();
    }

    if (this.text_ !== '') {
      var flatMidpoints = geometry.getFlatMidpoints();
      this.drawText_(flatMidpoints, 0, flatMidpoints.length, 2);
    }
  };
  /**
   * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
   */


  CanvasImmediateRenderer.prototype.drawPolygon = function (geometry) {
    if (this.squaredTolerance_) {
      geometry =
      /** @type {import("../../geom/Polygon.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }

    if (!(0, _extent.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }

    if (this.strokeState_ || this.fillState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }

      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }

      var context = this.context_;
      context.beginPath();
      this.drawRings_(geometry.getOrientedFlatCoordinates(), 0,
      /** @type {Array<number>} */
      geometry.getEnds(), geometry.getStride());

      if (this.fillState_) {
        context.fill();
      }

      if (this.strokeState_) {
        context.stroke();
      }
    }

    if (this.text_ !== '') {
      var flatInteriorPoint = geometry.getFlatInteriorPoint();
      this.drawText_(flatInteriorPoint, 0, 2, 2);
    }
  };
  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   */


  CanvasImmediateRenderer.prototype.drawMultiPolygon = function (geometry) {
    if (this.squaredTolerance_) {
      geometry =
      /** @type {import("../../geom/MultiPolygon.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }

    if (!(0, _extent.intersects)(this.extent_, geometry.getExtent())) {
      return;
    }

    if (this.strokeState_ || this.fillState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }

      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }

      var context = this.context_;
      var flatCoordinates = geometry.getOrientedFlatCoordinates();
      var offset = 0;
      var endss = geometry.getEndss();
      var stride = geometry.getStride();
      context.beginPath();

      for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        offset = this.drawRings_(flatCoordinates, offset, ends, stride);
      }

      if (this.fillState_) {
        context.fill();
      }

      if (this.strokeState_) {
        context.stroke();
      }
    }

    if (this.text_ !== '') {
      var flatInteriorPoints = geometry.getFlatInteriorPoints();
      this.drawText_(flatInteriorPoints, 0, flatInteriorPoints.length, 2);
    }
  };
  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */


  CanvasImmediateRenderer.prototype.setContextFillState_ = function (fillState) {
    var context = this.context_;
    var contextFillState = this.contextFillState_;

    if (!contextFillState) {
      context.fillStyle = fillState.fillStyle;
      this.contextFillState_ = {
        fillStyle: fillState.fillStyle
      };
    } else {
      if (contextFillState.fillStyle != fillState.fillStyle) {
        contextFillState.fillStyle = fillState.fillStyle;
        context.fillStyle = fillState.fillStyle;
      }
    }
  };
  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */


  CanvasImmediateRenderer.prototype.setContextStrokeState_ = function (strokeState) {
    var context = this.context_;
    var contextStrokeState = this.contextStrokeState_;

    if (!contextStrokeState) {
      context.lineCap = strokeState.lineCap;

      if (context.setLineDash) {
        context.setLineDash(strokeState.lineDash);
        context.lineDashOffset = strokeState.lineDashOffset;
      }

      context.lineJoin = strokeState.lineJoin;
      context.lineWidth = strokeState.lineWidth;
      context.miterLimit = strokeState.miterLimit;
      context.strokeStyle = strokeState.strokeStyle;
      this.contextStrokeState_ = {
        lineCap: strokeState.lineCap,
        lineDash: strokeState.lineDash,
        lineDashOffset: strokeState.lineDashOffset,
        lineJoin: strokeState.lineJoin,
        lineWidth: strokeState.lineWidth,
        miterLimit: strokeState.miterLimit,
        strokeStyle: strokeState.strokeStyle
      };
    } else {
      if (contextStrokeState.lineCap != strokeState.lineCap) {
        contextStrokeState.lineCap = strokeState.lineCap;
        context.lineCap = strokeState.lineCap;
      }

      if (context.setLineDash) {
        if (!(0, _array.equals)(contextStrokeState.lineDash, strokeState.lineDash)) {
          context.setLineDash(contextStrokeState.lineDash = strokeState.lineDash);
        }

        if (contextStrokeState.lineDashOffset != strokeState.lineDashOffset) {
          contextStrokeState.lineDashOffset = strokeState.lineDashOffset;
          context.lineDashOffset = strokeState.lineDashOffset;
        }
      }

      if (contextStrokeState.lineJoin != strokeState.lineJoin) {
        contextStrokeState.lineJoin = strokeState.lineJoin;
        context.lineJoin = strokeState.lineJoin;
      }

      if (contextStrokeState.lineWidth != strokeState.lineWidth) {
        contextStrokeState.lineWidth = strokeState.lineWidth;
        context.lineWidth = strokeState.lineWidth;
      }

      if (contextStrokeState.miterLimit != strokeState.miterLimit) {
        contextStrokeState.miterLimit = strokeState.miterLimit;
        context.miterLimit = strokeState.miterLimit;
      }

      if (contextStrokeState.strokeStyle != strokeState.strokeStyle) {
        contextStrokeState.strokeStyle = strokeState.strokeStyle;
        context.strokeStyle = strokeState.strokeStyle;
      }
    }
  };
  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */


  CanvasImmediateRenderer.prototype.setContextTextState_ = function (textState) {
    var context = this.context_;
    var contextTextState = this.contextTextState_;
    var textAlign = textState.textAlign ? textState.textAlign : _canvas.defaultTextAlign;

    if (!contextTextState) {
      context.font = textState.font;
      context.textAlign =
      /** @type {CanvasTextAlign} */
      textAlign;
      context.textBaseline =
      /** @type {CanvasTextBaseline} */
      textState.textBaseline;
      this.contextTextState_ = {
        font: textState.font,
        textAlign: textAlign,
        textBaseline: textState.textBaseline
      };
    } else {
      if (contextTextState.font != textState.font) {
        contextTextState.font = textState.font;
        context.font = textState.font;
      }

      if (contextTextState.textAlign != textAlign) {
        contextTextState.textAlign =
        /** @type {CanvasTextAlign} */
        textAlign;
        context.textAlign =
        /** @type {CanvasTextAlign} */
        textAlign;
      }

      if (contextTextState.textBaseline != textState.textBaseline) {
        contextTextState.textBaseline =
        /** @type {CanvasTextBaseline} */
        textState.textBaseline;
        context.textBaseline =
        /** @type {CanvasTextBaseline} */
        textState.textBaseline;
      }
    }
  };
  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */


  CanvasImmediateRenderer.prototype.setFillStrokeStyle = function (fillStyle, strokeStyle) {
    if (!fillStyle) {
      this.fillState_ = null;
    } else {
      var fillStyleColor = fillStyle.getColor();
      this.fillState_ = {
        fillStyle: (0, _colorlike.asColorLike)(fillStyleColor ? fillStyleColor : _canvas.defaultFillStyle)
      };
    }

    if (!strokeStyle) {
      this.strokeState_ = null;
    } else {
      var strokeStyleColor = strokeStyle.getColor();
      var strokeStyleLineCap = strokeStyle.getLineCap();
      var strokeStyleLineDash = strokeStyle.getLineDash();
      var strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      var strokeStyleLineJoin = strokeStyle.getLineJoin();
      var strokeStyleWidth = strokeStyle.getWidth();
      var strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      this.strokeState_ = {
        lineCap: strokeStyleLineCap !== undefined ? strokeStyleLineCap : _canvas.defaultLineCap,
        lineDash: strokeStyleLineDash ? strokeStyleLineDash : _canvas.defaultLineDash,
        lineDashOffset: strokeStyleLineDashOffset ? strokeStyleLineDashOffset : _canvas.defaultLineDashOffset,
        lineJoin: strokeStyleLineJoin !== undefined ? strokeStyleLineJoin : _canvas.defaultLineJoin,
        lineWidth: this.pixelRatio_ * (strokeStyleWidth !== undefined ? strokeStyleWidth : _canvas.defaultLineWidth),
        miterLimit: strokeStyleMiterLimit !== undefined ? strokeStyleMiterLimit : _canvas.defaultMiterLimit,
        strokeStyle: (0, _colorlike.asColorLike)(strokeStyleColor ? strokeStyleColor : _canvas.defaultStrokeStyle)
      };
    }
  };
  /**
   * Set the image style for subsequent draw operations.  Pass null to remove
   * the image style.
   *
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   */


  CanvasImmediateRenderer.prototype.setImageStyle = function (imageStyle) {
    if (!imageStyle) {
      this.image_ = null;
    } else {
      var imageSize = imageStyle.getSize();

      if (!imageSize) {
        this.image_ = null;
      } else {
        var imageAnchor = imageStyle.getAnchor(); // FIXME pixel ratio

        var imageImage = imageStyle.getImage(1);
        var imageOrigin = imageStyle.getOrigin();
        var imageScale = imageStyle.getScaleArray();
        this.imageAnchorX_ = imageAnchor[0];
        this.imageAnchorY_ = imageAnchor[1];
        this.imageHeight_ = imageSize[1];
        this.image_ = imageImage;
        this.imageOpacity_ = imageStyle.getOpacity();
        this.imageOriginX_ = imageOrigin[0];
        this.imageOriginY_ = imageOrigin[1];
        this.imageRotateWithView_ = imageStyle.getRotateWithView();
        this.imageRotation_ = imageStyle.getRotation();
        this.imageScale_ = [this.pixelRatio_ * imageScale[0], this.pixelRatio_ * imageScale[1]];
        this.imageWidth_ = imageSize[0];
      }
    }
  };
  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   */


  CanvasImmediateRenderer.prototype.setTextStyle = function (textStyle) {
    if (!textStyle) {
      this.text_ = '';
    } else {
      var textFillStyle = textStyle.getFill();

      if (!textFillStyle) {
        this.textFillState_ = null;
      } else {
        var textFillStyleColor = textFillStyle.getColor();
        this.textFillState_ = {
          fillStyle: (0, _colorlike.asColorLike)(textFillStyleColor ? textFillStyleColor : _canvas.defaultFillStyle)
        };
      }

      var textStrokeStyle = textStyle.getStroke();

      if (!textStrokeStyle) {
        this.textStrokeState_ = null;
      } else {
        var textStrokeStyleColor = textStrokeStyle.getColor();
        var textStrokeStyleLineCap = textStrokeStyle.getLineCap();
        var textStrokeStyleLineDash = textStrokeStyle.getLineDash();
        var textStrokeStyleLineDashOffset = textStrokeStyle.getLineDashOffset();
        var textStrokeStyleLineJoin = textStrokeStyle.getLineJoin();
        var textStrokeStyleWidth = textStrokeStyle.getWidth();
        var textStrokeStyleMiterLimit = textStrokeStyle.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: textStrokeStyleLineCap !== undefined ? textStrokeStyleLineCap : _canvas.defaultLineCap,
          lineDash: textStrokeStyleLineDash ? textStrokeStyleLineDash : _canvas.defaultLineDash,
          lineDashOffset: textStrokeStyleLineDashOffset ? textStrokeStyleLineDashOffset : _canvas.defaultLineDashOffset,
          lineJoin: textStrokeStyleLineJoin !== undefined ? textStrokeStyleLineJoin : _canvas.defaultLineJoin,
          lineWidth: textStrokeStyleWidth !== undefined ? textStrokeStyleWidth : _canvas.defaultLineWidth,
          miterLimit: textStrokeStyleMiterLimit !== undefined ? textStrokeStyleMiterLimit : _canvas.defaultMiterLimit,
          strokeStyle: (0, _colorlike.asColorLike)(textStrokeStyleColor ? textStrokeStyleColor : _canvas.defaultStrokeStyle)
        };
      }

      var textFont = textStyle.getFont();
      var textOffsetX = textStyle.getOffsetX();
      var textOffsetY = textStyle.getOffsetY();
      var textRotateWithView = textStyle.getRotateWithView();
      var textRotation = textStyle.getRotation();
      var textScale = textStyle.getScaleArray();
      var textText = textStyle.getText();
      var textTextAlign = textStyle.getTextAlign();
      var textTextBaseline = textStyle.getTextBaseline();
      this.textState_ = {
        font: textFont !== undefined ? textFont : _canvas.defaultFont,
        textAlign: textTextAlign !== undefined ? textTextAlign : _canvas.defaultTextAlign,
        textBaseline: textTextBaseline !== undefined ? textTextBaseline : _canvas.defaultTextBaseline
      };
      this.text_ = textText !== undefined ? textText : '';
      this.textOffsetX_ = textOffsetX !== undefined ? this.pixelRatio_ * textOffsetX : 0;
      this.textOffsetY_ = textOffsetY !== undefined ? this.pixelRatio_ * textOffsetY : 0;
      this.textRotateWithView_ = textRotateWithView !== undefined ? textRotateWithView : false;
      this.textRotation_ = textRotation !== undefined ? textRotation : 0;
      this.textScale_ = [this.pixelRatio_ * textScale[0], this.pixelRatio_ * textScale[1]];
    }
  };

  return CanvasImmediateRenderer;
}(_VectorContext.default);

var _default = CanvasImmediateRenderer;
exports.default = _default;
},{"../../geom/GeometryType.js":"ol/geom/GeometryType.js","../VectorContext.js":"ol/render/VectorContext.js","../../colorlike.js":"ol/colorlike.js","../../transform.js":"ol/transform.js","../canvas.js":"ol/render/canvas.js","../../array.js":"ol/array.js","../../extent.js":"ol/extent.js","../../geom/flat/transform.js":"ol/geom/flat/transform.js","../../geom/SimpleGeometry.js":"ol/geom/SimpleGeometry.js"}],"ol/style/IconAnchorUnits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/IconAnchorUnits
 */

/**
 * Icon anchor units. One of 'fraction', 'pixels'.
 * @enum {string}
 */
var _default = {
  /**
   * Anchor is a fraction
   * @api
   */
  FRACTION: 'fraction',

  /**
   * Anchor is in pixels
   * @api
   */
  PIXELS: 'pixels'
};
exports.default = _default;
},{}],"ol/style/IconOrigin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/style/IconOrigin
 */

/**
 * Icon origin. One of 'bottom-left', 'bottom-right', 'top-left', 'top-right'.
 * @enum {string}
 */
var _default = {
  /**
   * Origin is at bottom left
   * @api
   */
  BOTTOM_LEFT: 'bottom-left',

  /**
   * Origin is at bottom right
   * @api
   */
  BOTTOM_RIGHT: 'bottom-right',

  /**
   * Origin is at top left
   * @api
   */
  TOP_LEFT: 'top-left',

  /**
   * Origin is at top right
   * @api
   */
  TOP_RIGHT: 'top-right'
};
exports.default = _default;
},{}],"ol/style/IconImageCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shared = exports.default = void 0;

var _color = require("../color.js");

/**
 * @module ol/style/IconImageCache
 */

/**
 * @classdesc
 * Singleton class. Available through {@link module:ol/style/IconImageCache~shared}.
 */
var IconImageCache =
/** @class */
function () {
  function IconImageCache() {
    /**
     * @type {!Object<string, import("./IconImage.js").default>}
     * @private
     */
    this.cache_ = {};
    /**
     * @type {number}
     * @private
     */

    this.cacheSize_ = 0;
    /**
     * @type {number}
     * @private
     */

    this.maxCacheSize_ = 32;
  }
  /**
   * FIXME empty description for jsdoc
   */


  IconImageCache.prototype.clear = function () {
    this.cache_ = {};
    this.cacheSize_ = 0;
  };
  /**
   * @return {boolean} Can expire cache.
   */


  IconImageCache.prototype.canExpireCache = function () {
    return this.cacheSize_ > this.maxCacheSize_;
  };
  /**
   * FIXME empty description for jsdoc
   */


  IconImageCache.prototype.expire = function () {
    if (this.canExpireCache()) {
      var i = 0;

      for (var key in this.cache_) {
        var iconImage = this.cache_[key];

        if ((i++ & 3) === 0 && !iconImage.hasListener()) {
          delete this.cache_[key];
          --this.cacheSize_;
        }
      }
    }
  };
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */


  IconImageCache.prototype.get = function (src, crossOrigin, color) {
    var key = getKey(src, crossOrigin, color);
    return key in this.cache_ ? this.cache_[key] : null;
  };
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */


  IconImageCache.prototype.set = function (src, crossOrigin, color, iconImage) {
    var key = getKey(src, crossOrigin, color);
    this.cache_[key] = iconImage;
    ++this.cacheSize_;
  };
  /**
   * Set the cache size of the icon cache. Default is `32`. Change this value when
   * your map uses more than 32 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */


  IconImageCache.prototype.setSize = function (maxCacheSize) {
    this.maxCacheSize_ = maxCacheSize;
    this.expire();
  };

  return IconImageCache;
}();
/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../color.js").Color} color Color.
 * @return {string} Cache key.
 */


function getKey(src, crossOrigin, color) {
  var colorString = color ? (0, _color.asString)(color) : 'null';
  return crossOrigin + ':' + src + ':' + colorString;
}

var _default = IconImageCache;
/**
 * The {@link module:ol/style/IconImageCache~IconImageCache} for
 * {@link module:ol/style/Icon~Icon} images.
 * @api
 */

exports.default = _default;
var shared = new IconImageCache();
exports.shared = shared;
},{"../color.js":"ol/color.js"}],"ol/ImageBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Target = _interopRequireDefault(require("./events/Target.js"));

var _EventType = _interopRequireDefault(require("./events/EventType.js"));

var _util = require("./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/ImageBase
 */


/**
 * @abstract
 */
var ImageBase =
/** @class */
function (_super) {
  __extends(ImageBase, _super);
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("./ImageState.js").default} state State.
   */


  function ImageBase(extent, resolution, pixelRatio, state) {
    var _this = _super.call(this) || this;
    /**
     * @protected
     * @type {import("./extent.js").Extent}
     */


    _this.extent = extent;
    /**
     * @private
     * @type {number}
     */

    _this.pixelRatio_ = pixelRatio;
    /**
     * @protected
     * @type {number|undefined}
     */

    _this.resolution = resolution;
    /**
     * @protected
     * @type {import("./ImageState.js").default}
     */

    _this.state = state;
    return _this;
  }
  /**
   * @protected
   */


  ImageBase.prototype.changed = function () {
    this.dispatchEvent(_EventType.default.CHANGE);
  };
  /**
   * @return {import("./extent.js").Extent} Extent.
   */


  ImageBase.prototype.getExtent = function () {
    return this.extent;
  };
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   */


  ImageBase.prototype.getImage = function () {
    return (0, _util.abstract)();
  };
  /**
   * @return {number} PixelRatio.
   */


  ImageBase.prototype.getPixelRatio = function () {
    return this.pixelRatio_;
  };
  /**
   * @return {number} Resolution.
   */


  ImageBase.prototype.getResolution = function () {
    return (
      /** @type {number} */
      this.resolution
    );
  };
  /**
   * @return {import("./ImageState.js").default} State.
   */


  ImageBase.prototype.getState = function () {
    return this.state;
  };
  /**
   * Load not yet loaded URI.
   * @abstract
   */


  ImageBase.prototype.load = function () {
    (0, _util.abstract)();
  };

  return ImageBase;
}(_Target.default);

var _default = ImageBase;
exports.default = _default;
},{"./events/Target.js":"ol/events/Target.js","./events/EventType.js":"ol/events/EventType.js","./util.js":"ol/util.js"}],"ol/Image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenImage = listenImage;
exports.default = void 0;

var _EventType = _interopRequireDefault(require("./events/EventType.js"));

var _ImageBase = _interopRequireDefault(require("./ImageBase.js"));

var _ImageState = _interopRequireDefault(require("./ImageState.js"));

var _has = require("./has.js");

var _extent = require("./extent.js");

var _events = require("./events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/Image
 */


/**
 * A function that takes an {@link module:ol/Image~Image} for the image and a
 * `{string}` for the src as arguments. It is supposed to make it so the
 * underlying image {@link module:ol/Image~Image#getImage} is assigned the
 * content specified by the src. If not specified, the default is
 *
 *     function(image, src) {
 *       image.getImage().src = src;
 *     }
 *
 * Providing a custom `imageLoadFunction` can be useful to load images with
 * post requests or - in general - through XHR requests, where the src of the
 * image element would be set to a data URI when the content is loaded.
 *
 * @typedef {function(ImageWrapper, string): void} LoadFunction
 * @api
 */
var ImageWrapper =
/** @class */
function (_super) {
  __extends(ImageWrapper, _super);
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {LoadFunction} imageLoadFunction Image load function.
   */


  function ImageWrapper(extent, resolution, pixelRatio, src, crossOrigin, imageLoadFunction) {
    var _this = _super.call(this, extent, resolution, pixelRatio, _ImageState.default.IDLE) || this;
    /**
     * @private
     * @type {string}
     */


    _this.src_ = src;
    /**
     * @private
     * @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement}
     */

    _this.image_ = new Image();

    if (crossOrigin !== null) {
      _this.image_.crossOrigin = crossOrigin;
    }
    /**
     * @private
     * @type {?function():void}
     */


    _this.unlisten_ = null;
    /**
     * @protected
     * @type {import("./ImageState.js").default}
     */

    _this.state = _ImageState.default.IDLE;
    /**
     * @private
     * @type {LoadFunction}
     */

    _this.imageLoadFunction_ = imageLoadFunction;
    return _this;
  }
  /**
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */


  ImageWrapper.prototype.getImage = function () {
    return this.image_;
  };
  /**
   * Tracks loading or read errors.
   *
   * @private
   */


  ImageWrapper.prototype.handleImageError_ = function () {
    this.state = _ImageState.default.ERROR;
    this.unlistenImage_();
    this.changed();
  };
  /**
   * Tracks successful image load.
   *
   * @private
   */


  ImageWrapper.prototype.handleImageLoad_ = function () {
    if (this.resolution === undefined) {
      this.resolution = (0, _extent.getHeight)(this.extent) / this.image_.height;
    }

    this.state = _ImageState.default.LOADED;
    this.unlistenImage_();
    this.changed();
  };
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @api
   */


  ImageWrapper.prototype.load = function () {
    if (this.state == _ImageState.default.IDLE || this.state == _ImageState.default.ERROR) {
      this.state = _ImageState.default.LOADING;
      this.changed();
      this.imageLoadFunction_(this, this.src_);
      this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
    }
  };
  /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   */


  ImageWrapper.prototype.setImage = function (image) {
    this.image_ = image;
  };
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */


  ImageWrapper.prototype.unlistenImage_ = function () {
    if (this.unlisten_) {
      this.unlisten_();
      this.unlisten_ = null;
    }
  };

  return ImageWrapper;
}(_ImageBase.default);
/**
 * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image element.
 * @param {function():any} loadHandler Load callback function.
 * @param {function():any} errorHandler Error callback function.
 * @return {function():void} Callback to stop listening.
 */


function listenImage(image, loadHandler, errorHandler) {
  var img =
  /** @type {HTMLImageElement} */
  image;

  if (img.src && _has.IMAGE_DECODE) {
    var promise = img.decode();
    var listening_1 = true;

    var unlisten = function unlisten() {
      listening_1 = false;
    };

    promise.then(function () {
      if (listening_1) {
        loadHandler();
      }
    }).catch(function (error) {
      if (listening_1) {
        // FIXME: Unconditionally call errorHandler() when this bug is fixed upstream:
        //        https://bugs.webkit.org/show_bug.cgi?id=198527
        if (error.name === 'EncodingError' && error.message === 'Invalid image type.') {
          loadHandler();
        } else {
          errorHandler();
        }
      }
    });
    return unlisten;
  }

  var listenerKeys = [(0, _events.listenOnce)(img, _EventType.default.LOAD, loadHandler), (0, _events.listenOnce)(img, _EventType.default.ERROR, errorHandler)];
  return function unlisten() {
    listenerKeys.forEach(_events.unlistenByKey);
  };
}

var _default = ImageWrapper;
exports.default = _default;
},{"./events/EventType.js":"ol/events/EventType.js","./ImageBase.js":"ol/ImageBase.js","./ImageState.js":"ol/ImageState.js","./has.js":"ol/has.js","./extent.js":"ol/extent.js","./events.js":"ol/events.js"}],"ol/style/IconImage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.default = void 0;

var _Target = _interopRequireDefault(require("../events/Target.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _dom = require("../dom.js");

var _IconImageCache = require("./IconImageCache.js");

var _Image = require("../Image.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/IconImage
 */
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * @type {CanvasRenderingContext2D}
 */
var taintedTestContext = null;

var IconImage =
/** @class */
function (_super) {
  __extends(IconImage, _super);
  /**
   * @param {HTMLImageElement|HTMLCanvasElement} image Image.
   * @param {string|undefined} src Src.
   * @param {import("../size.js").Size} size Size.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default} imageState Image state.
   * @param {import("../color.js").Color} color Color.
   */


  function IconImage(image, src, size, crossOrigin, imageState, color) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */


    _this.hitDetectionImage_ = null;
    /**
     * @private
     * @type {HTMLImageElement|HTMLCanvasElement}
     */

    _this.image_ = !image ? new Image() : image;

    if (crossOrigin !== null) {
      /** @type {HTMLImageElement} */
      _this.image_.crossOrigin = crossOrigin;
    }
    /**
     * @private
     * @type {Object<number, HTMLCanvasElement>}
     */


    _this.canvas_ = {};
    /**
     * @private
     * @type {import("../color.js").Color}
     */

    _this.color_ = color;
    /**
     * @private
     * @type {?function():void}
     */

    _this.unlisten_ = null;
    /**
     * @private
     * @type {import("../ImageState.js").default}
     */

    _this.imageState_ = imageState;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    _this.size_ = size;
    /**
     * @private
     * @type {string|undefined}
     */

    _this.src_ = src;
    /**
     * @private
     */

    _this.tainted_;
    return _this;
  }
  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */


  IconImage.prototype.isTainted_ = function () {
    if (this.tainted_ === undefined && this.imageState_ === _ImageState.default.LOADED) {
      if (!taintedTestContext) {
        taintedTestContext = (0, _dom.createCanvasContext2D)(1, 1);
      }

      taintedTestContext.drawImage(this.image_, 0, 0);

      try {
        taintedTestContext.getImageData(0, 0, 1, 1);
        this.tainted_ = false;
      } catch (e) {
        taintedTestContext = null;
        this.tainted_ = true;
      }
    }

    return this.tainted_ === true;
  };
  /**
   * @private
   */


  IconImage.prototype.dispatchChangeEvent_ = function () {
    this.dispatchEvent(_EventType.default.CHANGE);
  };
  /**
   * @private
   */


  IconImage.prototype.handleImageError_ = function () {
    this.imageState_ = _ImageState.default.ERROR;
    this.unlistenImage_();
    this.dispatchChangeEvent_();
  };
  /**
   * @private
   */


  IconImage.prototype.handleImageLoad_ = function () {
    this.imageState_ = _ImageState.default.LOADED;

    if (this.size_) {
      this.image_.width = this.size_[0];
      this.image_.height = this.size_[1];
    } else {
      this.size_ = [this.image_.width, this.image_.height];
    }

    this.unlistenImage_();
    this.dispatchChangeEvent_();
  };
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   */


  IconImage.prototype.getImage = function (pixelRatio) {
    this.replaceColor_(pixelRatio);
    return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
  };
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */


  IconImage.prototype.getPixelRatio = function (pixelRatio) {
    this.replaceColor_(pixelRatio);
    return this.canvas_[pixelRatio] ? pixelRatio : 1;
  };
  /**
   * @return {import("../ImageState.js").default} Image state.
   */


  IconImage.prototype.getImageState = function () {
    return this.imageState_;
  };
  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */


  IconImage.prototype.getHitDetectionImage = function () {
    if (!this.hitDetectionImage_) {
      if (this.isTainted_()) {
        var width = this.size_[0];
        var height = this.size_[1];
        var context = (0, _dom.createCanvasContext2D)(width, height);
        context.fillRect(0, 0, width, height);
        this.hitDetectionImage_ = context.canvas;
      } else {
        this.hitDetectionImage_ = this.image_;
      }
    }

    return this.hitDetectionImage_;
  };
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   */


  IconImage.prototype.getSize = function () {
    return this.size_;
  };
  /**
   * @return {string|undefined} Image src.
   */


  IconImage.prototype.getSrc = function () {
    return this.src_;
  };
  /**
   * Load not yet loaded URI.
   */


  IconImage.prototype.load = function () {
    if (this.imageState_ == _ImageState.default.IDLE) {
      this.imageState_ = _ImageState.default.LOADING;

      try {
        /** @type {HTMLImageElement} */
        this.image_.src = this.src_;
      } catch (e) {
        this.handleImageError_();
      }

      this.unlisten_ = (0, _Image.listenImage)(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
    }
  };
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */


  IconImage.prototype.replaceColor_ = function (pixelRatio) {
    if (!this.color_ || this.canvas_[pixelRatio]) {
      return;
    }

    var canvas = document.createElement('canvas');
    this.canvas_[pixelRatio] = canvas;
    canvas.width = Math.ceil(this.image_.width * pixelRatio);
    canvas.height = Math.ceil(this.image_.height * pixelRatio);
    var ctx = canvas.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.drawImage(this.image_, 0, 0);

    if (this.isTainted_()) {
      // If reading from the canvas throws a SecurityError the same effect can be
      // achieved with globalCompositeOperation.
      // This could be used as the default, but it is not fully supported by all
      // browsers. E. g. Internet Explorer 11 does not support the multiply
      // operation and the resulting image shape will be completelly filled with
      // the provided color.
      // So this is only used as a fallback. It is still better than having no icon
      // at all.
      var c = this.color_;
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(this.image_, 0, 0);
      return;
    }

    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    var r = this.color_[0] / 255.0;
    var g = this.color_[1] / 255.0;
    var b = this.color_[2] / 255.0;

    for (var i = 0, ii = data.length; i < ii; i += 4) {
      data[i] *= r;
      data[i + 1] *= g;
      data[i + 2] *= b;
    }

    ctx.putImageData(imgData, 0, 0);
  };
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */


  IconImage.prototype.unlistenImage_ = function () {
    if (this.unlisten_) {
      this.unlisten_();
      this.unlisten_ = null;
    }
  };

  return IconImage;
}(_Target.default);
/**
 * @param {HTMLImageElement|HTMLCanvasElement} image Image.
 * @param {string} src Src.
 * @param {import("../size.js").Size} size Size.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../ImageState.js").default} imageState Image state.
 * @param {import("../color.js").Color} color Color.
 * @return {IconImage} Icon image.
 */


function get(image, src, size, crossOrigin, imageState, color) {
  var iconImage = _IconImageCache.shared.get(src, crossOrigin, color);

  if (!iconImage) {
    iconImage = new IconImage(image, src, size, crossOrigin, imageState, color);

    _IconImageCache.shared.set(src, crossOrigin, color, iconImage);
  }

  return iconImage;
}

var _default = IconImage;
exports.default = _default;
},{"../events/Target.js":"ol/events/Target.js","../events/EventType.js":"ol/events/EventType.js","../ImageState.js":"ol/ImageState.js","../dom.js":"ol/dom.js","./IconImageCache.js":"ol/style/IconImageCache.js","../Image.js":"ol/Image.js"}],"ol/style/Icon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _IconAnchorUnits = _interopRequireDefault(require("./IconAnchorUnits.js"));

var _IconOrigin = _interopRequireDefault(require("./IconOrigin.js"));

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _Image = _interopRequireDefault(require("./Image.js"));

var _color = require("../color.js");

var _asserts = require("../asserts.js");

var _IconImage = require("./IconImage.js");

var _util = require("../util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/style/Icon
 */


/**
 * @typedef {Object} Options
 * @property {Array<number>} [anchor=[0.5, 0.5]] Anchor. Default value is the icon center.
 * @property {import("./IconOrigin.js").default} [anchorOrigin='top-left'] Origin of the anchor: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`.
 * @property {import("./IconAnchorUnits.js").default} [anchorXUnits='fraction'] Units in which the anchor x value is
 * specified. A value of `'fraction'` indicates the x value is a fraction of the icon. A value of `'pixels'` indicates
 * the x value in pixels.
 * @property {import("./IconAnchorUnits.js").default} [anchorYUnits='fraction'] Units in which the anchor y value is
 * specified. A value of `'fraction'` indicates the y value is a fraction of the icon. A value of `'pixels'` indicates
 * the y value in pixels.
 * @property {import("../color.js").Color|string} [color] Color to tint the icon. If not specified,
 * the icon will be left as is.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images. Note that you must provide a
 * `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {HTMLImageElement|HTMLCanvasElement} [img] Image object for the icon. If the `src` option is not provided then the
 * provided image must already be loaded. And in that case, it is required
 * to provide the size of the image, with the `imgSize` option.
 * @property {Array<number>} [offset=[0, 0]] Offset, which, together with the size and the offset origin, define the
 * sub-rectangle to use from the original icon image.
 * @property {Array<number>} [displacement=[0,0]] Displacement the icon
 * @property {import("./IconOrigin.js").default} [offsetOrigin='top-left'] Origin of the offset: `bottom-left`, `bottom-right`,
 * `top-left` or `top-right`.
 * @property {number} [opacity=1] Opacity of the icon.
 * @property {number|import("../size.js").Size} [scale=1] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the icon with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {import("../size.js").Size} [size] Icon size in pixel. Can be used together with `offset` to define the
 * sub-rectangle to use from the origin (sprite) icon image.
 * @property {import("../size.js").Size} [imgSize] Image size in pixels. Only required if `img` is set and `src` is not, and
 * for SVG images in Internet Explorer 11. The provided `imgSize` needs to match the actual size of the image.
 * @property {string} [src] Image source URI.
 */

/**
 * @classdesc
 * Set icon style for vector features.
 * @api
 */
var Icon =
/** @class */
function (_super) {
  __extends(Icon, _super);
  /**
   * @param {Options=} opt_options Options.
   */


  function Icon(opt_options) {
    var _this = this;

    var options = opt_options || {};
    /**
     * @type {number}
     */

    var opacity = options.opacity !== undefined ? options.opacity : 1;
    /**
     * @type {number}
     */

    var rotation = options.rotation !== undefined ? options.rotation : 0;
    /**
     * @type {number|import("../size.js").Size}
     */

    var scale = options.scale !== undefined ? options.scale : 1;
    /**
     * @type {boolean}
     */

    var rotateWithView = options.rotateWithView !== undefined ? options.rotateWithView : false;
    _this = _super.call(this, {
      opacity: opacity,
      rotation: rotation,
      scale: scale,
      displacement: options.displacement !== undefined ? options.displacement : [0, 0],
      rotateWithView: rotateWithView
    }) || this;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.anchor_ = options.anchor !== undefined ? options.anchor : [0.5, 0.5];
    /**
     * @private
     * @type {Array<number>}
     */

    _this.normalizedAnchor_ = null;
    /**
     * @private
     * @type {import("./IconOrigin.js").default}
     */

    _this.anchorOrigin_ = options.anchorOrigin !== undefined ? options.anchorOrigin : _IconOrigin.default.TOP_LEFT;
    /**
     * @private
     * @type {import("./IconAnchorUnits.js").default}
     */

    _this.anchorXUnits_ = options.anchorXUnits !== undefined ? options.anchorXUnits : _IconAnchorUnits.default.FRACTION;
    /**
     * @private
     * @type {import("./IconAnchorUnits.js").default}
     */

    _this.anchorYUnits_ = options.anchorYUnits !== undefined ? options.anchorYUnits : _IconAnchorUnits.default.FRACTION;
    /**
     * @private
     * @type {?string}
     */

    _this.crossOrigin_ = options.crossOrigin !== undefined ? options.crossOrigin : null;
    /**
     * @type {HTMLImageElement|HTMLCanvasElement}
     */

    var image = options.img !== undefined ? options.img : null;
    /**
     * @type {import("../size.js").Size}
     */

    var imgSize = options.imgSize !== undefined ? options.imgSize : null;
    /**
     * @type {string|undefined}
     */

    var src = options.src;
    (0, _asserts.assert)(!(src !== undefined && image), 4); // `image` and `src` cannot be provided at the same time

    (0, _asserts.assert)(!image || image && imgSize, 5); // `imgSize` must be set when `image` is provided

    if ((src === undefined || src.length === 0) && image) {
      src =
      /** @type {HTMLImageElement} */
      image.src || (0, _util.getUid)(image);
    }

    (0, _asserts.assert)(src !== undefined && src.length > 0, 6); // A defined and non-empty `src` or `image` must be provided

    /**
     * @type {import("../ImageState.js").default}
     */

    var imageState = options.src !== undefined ? _ImageState.default.IDLE : _ImageState.default.LOADED;
    /**
     * @private
     * @type {import("../color.js").Color}
     */

    _this.color_ = options.color !== undefined ? (0, _color.asArray)(options.color) : null;
    /**
     * @private
     * @type {import("./IconImage.js").default}
     */

    _this.iconImage_ = (0, _IconImage.get)(image,
    /** @type {string} */
    src, imgSize, _this.crossOrigin_, imageState, _this.color_);
    /**
     * @private
     * @type {Array<number>}
     */

    _this.offset_ = options.offset !== undefined ? options.offset : [0, 0];
    /**
     * @private
     * @type {import("./IconOrigin.js").default}
     */

    _this.offsetOrigin_ = options.offsetOrigin !== undefined ? options.offsetOrigin : _IconOrigin.default.TOP_LEFT;
    /**
     * @private
     * @type {Array<number>}
     */

    _this.origin_ = null;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    _this.size_ = options.size !== undefined ? options.size : null;
    return _this;
  }
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */


  Icon.prototype.clone = function () {
    var scale = this.getScale();
    return new Icon({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      crossOrigin: this.crossOrigin_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || undefined,
      src: this.getSrc(),
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      size: this.size_ !== null ? this.size_.slice() : undefined,
      opacity: this.getOpacity(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView()
    });
  };
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */


  Icon.prototype.getAnchor = function () {
    if (this.normalizedAnchor_) {
      return this.normalizedAnchor_;
    }

    var anchor = this.anchor_;
    var size = this.getSize();

    if (this.anchorXUnits_ == _IconAnchorUnits.default.FRACTION || this.anchorYUnits_ == _IconAnchorUnits.default.FRACTION) {
      if (!size) {
        return null;
      }

      anchor = this.anchor_.slice();

      if (this.anchorXUnits_ == _IconAnchorUnits.default.FRACTION) {
        anchor[0] *= size[0];
      }

      if (this.anchorYUnits_ == _IconAnchorUnits.default.FRACTION) {
        anchor[1] *= size[1];
      }
    }

    if (this.anchorOrigin_ != _IconOrigin.default.TOP_LEFT) {
      if (!size) {
        return null;
      }

      if (anchor === this.anchor_) {
        anchor = this.anchor_.slice();
      }

      if (this.anchorOrigin_ == _IconOrigin.default.TOP_RIGHT || this.anchorOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        anchor[0] = -anchor[0] + size[0];
      }

      if (this.anchorOrigin_ == _IconOrigin.default.BOTTOM_LEFT || this.anchorOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        anchor[1] = -anchor[1] + size[1];
      }
    }

    this.normalizedAnchor_ = anchor;
    return this.normalizedAnchor_;
  };
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */


  Icon.prototype.setAnchor = function (anchor) {
    this.anchor_ = anchor;
    this.normalizedAnchor_ = null;
  };
  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */


  Icon.prototype.getColor = function () {
    return this.color_;
  };
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   * @api
   */


  Icon.prototype.getImage = function (pixelRatio) {
    return this.iconImage_.getImage(pixelRatio);
  };
  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ration of the image.
   * @api
   */


  Icon.prototype.getPixelRatio = function (pixelRatio) {
    return this.iconImage_.getPixelRatio(pixelRatio);
  };
  /**
   * @return {import("../size.js").Size} Image size.
   */


  Icon.prototype.getImageSize = function () {
    return this.iconImage_.getSize();
  };
  /**
   * @return {import("../size.js").Size} Size of the hit-detection image.
   */


  Icon.prototype.getHitDetectionImageSize = function () {
    return this.getImageSize();
  };
  /**
   * @return {import("../ImageState.js").default} Image state.
   */


  Icon.prototype.getImageState = function () {
    return this.iconImage_.getImageState();
  };
  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */


  Icon.prototype.getHitDetectionImage = function () {
    return this.iconImage_.getHitDetectionImage();
  };
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */


  Icon.prototype.getOrigin = function () {
    if (this.origin_) {
      return this.origin_;
    }

    var offset = this.offset_;
    var displacement = this.getDisplacement();

    if (this.offsetOrigin_ != _IconOrigin.default.TOP_LEFT) {
      var size = this.getSize();
      var iconImageSize = this.iconImage_.getSize();

      if (!size || !iconImageSize) {
        return null;
      }

      offset = offset.slice();

      if (this.offsetOrigin_ == _IconOrigin.default.TOP_RIGHT || this.offsetOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        offset[0] = iconImageSize[0] - size[0] - offset[0];
      }

      if (this.offsetOrigin_ == _IconOrigin.default.BOTTOM_LEFT || this.offsetOrigin_ == _IconOrigin.default.BOTTOM_RIGHT) {
        offset[1] = iconImageSize[1] - size[1] - offset[1];
      }
    }

    offset[0] += displacement[0];
    offset[1] += displacement[1];
    this.origin_ = offset;
    return this.origin_;
  };
  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */


  Icon.prototype.getSrc = function () {
    return this.iconImage_.getSrc();
  };
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   * @api
   */


  Icon.prototype.getSize = function () {
    return !this.size_ ? this.iconImage_.getSize() : this.size_;
  };
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */


  Icon.prototype.listenImageChange = function (listener) {
    this.iconImage_.addEventListener(_EventType.default.CHANGE, listener);
  };
  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @api
   */


  Icon.prototype.load = function () {
    this.iconImage_.load();
  };
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */


  Icon.prototype.unlistenImageChange = function (listener) {
    this.iconImage_.removeEventListener(_EventType.default.CHANGE, listener);
  };

  return Icon;
}(_Image.default);

var _default = Icon;
exports.default = _default;
},{"../events/EventType.js":"ol/events/EventType.js","./IconAnchorUnits.js":"ol/style/IconAnchorUnits.js","./IconOrigin.js":"ol/style/IconOrigin.js","../ImageState.js":"ol/ImageState.js","./Image.js":"ol/style/Image.js","../color.js":"ol/color.js","../asserts.js":"ol/asserts.js","./IconImage.js":"ol/style/IconImage.js","../util.js":"ol/util.js"}],"ol/style/Text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Fill = _interopRequireDefault(require("./Fill.js"));

var _TextPlacement = _interopRequireDefault(require("./TextPlacement.js"));

var _size = require("../size.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/style/Text
 */

/**
 * The default fill color to use if no fill was set at construction time; a
 * blackish `#333`.
 *
 * @const {string}
 */
var DEFAULT_FILL_COLOR = '#333';
/**
 * @typedef {Object} Options
 * @property {string} [font] Font style as CSS 'font' value, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font. Default is '10px sans-serif'
 * @property {number} [maxAngle=Math.PI/4] When `placement` is set to `'line'`, allow a maximum angle between adjacent characters.
 * The expected value is in radians, and the default is 45° (`Math.PI / 4`).
 * @property {number} [offsetX=0] Horizontal text offset in pixels. A positive will shift the text right.
 * @property {number} [offsetY=0] Vertical text offset in pixels. A positive will shift the text down.
 * @property {boolean} [overflow=false] For polygon labels or when `placement` is set to `'line'`, allow text to exceed
 * the width of the polygon at the label position or the length of the path that it follows.
 * @property {import("./TextPlacement.js").default|string} [placement='point'] Text placement.
 * @property {number|import("../size.js").Size} [scale] Scale.
 * @property {boolean} [rotateWithView=false] Whether to rotate the text with the view.
 * @property {number} [rotation=0] Rotation in radians (positive rotation clockwise).
 * @property {string} [text] Text content.
 * @property {string} [textAlign] Text alignment. Possible values: 'left', 'right', 'center', 'end' or 'start'.
 * Default is 'center' for `placement: 'point'`. For `placement: 'line'`, the default is to let the renderer choose a
 * placement where `maxAngle` is not exceeded.
 * @property {string} [textBaseline='middle'] Text base line. Possible values: 'bottom', 'top', 'middle', 'alphabetic',
 * 'hanging', 'ideographic'.
 * @property {import("./Fill.js").default} [fill] Fill style. If none is provided, we'll use a dark fill-style (#333).
 * @property {import("./Stroke.js").default} [stroke] Stroke style.
 * @property {import("./Fill.js").default} [backgroundFill] Fill style for the text background when `placement` is
 * `'point'`. Default is no fill.
 * @property {import("./Stroke.js").default} [backgroundStroke] Stroke style for the text background  when `placement`
 * is `'point'`. Default is no stroke.
 * @property {Array<number>} [padding=[0, 0, 0, 0]] Padding in pixels around the text for decluttering and background. The order of
 * values in the array is `[top, right, bottom, left]`.
 */

/**
 * @classdesc
 * Set text style for vector features.
 * @api
 */

var Text =
/** @class */
function () {
  /**
   * @param {Options=} opt_options Options.
   */
  function Text(opt_options) {
    var options = opt_options || {};
    /**
     * @private
     * @type {string|undefined}
     */

    this.font_ = options.font;
    /**
     * @private
     * @type {number|undefined}
     */

    this.rotation_ = options.rotation;
    /**
     * @private
     * @type {boolean|undefined}
     */

    this.rotateWithView_ = options.rotateWithView;
    /**
     * @private
     * @type {number|import("../size.js").Size|undefined}
     */

    this.scale_ = options.scale;
    /**
     * @private
     * @type {import("../size.js").Size}
     */

    this.scaleArray_ = (0, _size.toSize)(options.scale !== undefined ? options.scale : 1);
    /**
     * @private
     * @type {string|undefined}
     */

    this.text_ = options.text;
    /**
     * @private
     * @type {string|undefined}
     */

    this.textAlign_ = options.textAlign;
    /**
     * @private
     * @type {string|undefined}
     */

    this.textBaseline_ = options.textBaseline;
    /**
     * @private
     * @type {import("./Fill.js").default}
     */

    this.fill_ = options.fill !== undefined ? options.fill : new _Fill.default({
      color: DEFAULT_FILL_COLOR
    });
    /**
     * @private
     * @type {number}
     */

    this.maxAngle_ = options.maxAngle !== undefined ? options.maxAngle : Math.PI / 4;
    /**
     * @private
     * @type {import("./TextPlacement.js").default|string}
     */

    this.placement_ = options.placement !== undefined ? options.placement : _TextPlacement.default.POINT;
    /**
     * @private
     * @type {boolean}
     */

    this.overflow_ = !!options.overflow;
    /**
     * @private
     * @type {import("./Stroke.js").default}
     */

    this.stroke_ = options.stroke !== undefined ? options.stroke : null;
    /**
     * @private
     * @type {number}
     */

    this.offsetX_ = options.offsetX !== undefined ? options.offsetX : 0;
    /**
     * @private
     * @type {number}
     */

    this.offsetY_ = options.offsetY !== undefined ? options.offsetY : 0;
    /**
     * @private
     * @type {import("./Fill.js").default}
     */

    this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
    /**
     * @private
     * @type {import("./Stroke.js").default}
     */

    this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
    /**
     * @private
     * @type {Array<number>}
     */

    this.padding_ = options.padding === undefined ? null : options.padding;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */


  Text.prototype.clone = function () {
    var scale = this.getScale();
    return new Text({
      font: this.getFont(),
      placement: this.getPlacement(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : undefined,
      stroke: this.getStroke() ? this.getStroke().clone() : undefined,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : undefined,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : undefined,
      padding: this.getPadding()
    });
  };
  /**
   * Get the `overflow` configuration.
   * @return {boolean} Let text overflow the length of the path they follow.
   * @api
   */


  Text.prototype.getOverflow = function () {
    return this.overflow_;
  };
  /**
   * Get the font name.
   * @return {string|undefined} Font.
   * @api
   */


  Text.prototype.getFont = function () {
    return this.font_;
  };
  /**
   * Get the maximum angle between adjacent characters.
   * @return {number} Angle in radians.
   * @api
   */


  Text.prototype.getMaxAngle = function () {
    return this.maxAngle_;
  };
  /**
   * Get the label placement.
   * @return {import("./TextPlacement.js").default|string} Text placement.
   * @api
   */


  Text.prototype.getPlacement = function () {
    return this.placement_;
  };
  /**
   * Get the x-offset for the text.
   * @return {number} Horizontal text offset.
   * @api
   */


  Text.prototype.getOffsetX = function () {
    return this.offsetX_;
  };
  /**
   * Get the y-offset for the text.
   * @return {number} Vertical text offset.
   * @api
   */


  Text.prototype.getOffsetY = function () {
    return this.offsetY_;
  };
  /**
   * Get the fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */


  Text.prototype.getFill = function () {
    return this.fill_;
  };
  /**
   * Determine whether the text rotates with the map.
   * @return {boolean|undefined} Rotate with map.
   * @api
   */


  Text.prototype.getRotateWithView = function () {
    return this.rotateWithView_;
  };
  /**
   * Get the text rotation.
   * @return {number|undefined} Rotation.
   * @api
   */


  Text.prototype.getRotation = function () {
    return this.rotation_;
  };
  /**
   * Get the text scale.
   * @return {number|import("../size.js").Size|undefined} Scale.
   * @api
   */


  Text.prototype.getScale = function () {
    return this.scale_;
  };
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */


  Text.prototype.getScaleArray = function () {
    return this.scaleArray_;
  };
  /**
   * Get the stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */


  Text.prototype.getStroke = function () {
    return this.stroke_;
  };
  /**
   * Get the text to be rendered.
   * @return {string|undefined} Text.
   * @api
   */


  Text.prototype.getText = function () {
    return this.text_;
  };
  /**
   * Get the text alignment.
   * @return {string|undefined} Text align.
   * @api
   */


  Text.prototype.getTextAlign = function () {
    return this.textAlign_;
  };
  /**
   * Get the text baseline.
   * @return {string|undefined} Text baseline.
   * @api
   */


  Text.prototype.getTextBaseline = function () {
    return this.textBaseline_;
  };
  /**
   * Get the background fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */


  Text.prototype.getBackgroundFill = function () {
    return this.backgroundFill_;
  };
  /**
   * Get the background stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */


  Text.prototype.getBackgroundStroke = function () {
    return this.backgroundStroke_;
  };
  /**
   * Get the padding for the text.
   * @return {Array<number>} Padding.
   * @api
   */


  Text.prototype.getPadding = function () {
    return this.padding_;
  };
  /**
   * Set the `overflow` property.
   *
   * @param {boolean} overflow Let text overflow the path that it follows.
   * @api
   */


  Text.prototype.setOverflow = function (overflow) {
    this.overflow_ = overflow;
  };
  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */


  Text.prototype.setFont = function (font) {
    this.font_ = font;
  };
  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */


  Text.prototype.setMaxAngle = function (maxAngle) {
    this.maxAngle_ = maxAngle;
  };
  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */


  Text.prototype.setOffsetX = function (offsetX) {
    this.offsetX_ = offsetX;
  };
  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */


  Text.prototype.setOffsetY = function (offsetY) {
    this.offsetY_ = offsetY;
  };
  /**
   * Set the text placement.
   *
   * @param {import("./TextPlacement.js").default|string} placement Placement.
   * @api
   */


  Text.prototype.setPlacement = function (placement) {
    this.placement_ = placement;
  };
  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */


  Text.prototype.setRotateWithView = function (rotateWithView) {
    this.rotateWithView_ = rotateWithView;
  };
  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */


  Text.prototype.setFill = function (fill) {
    this.fill_ = fill;
  };
  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */


  Text.prototype.setRotation = function (rotation) {
    this.rotation_ = rotation;
  };
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */


  Text.prototype.setScale = function (scale) {
    this.scale_ = scale;
    this.scaleArray_ = (0, _size.toSize)(scale !== undefined ? scale : 1);
  };
  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */


  Text.prototype.setStroke = function (stroke) {
    this.stroke_ = stroke;
  };
  /**
   * Set the text.
   *
   * @param {string|undefined} text Text.
   * @api
   */


  Text.prototype.setText = function (text) {
    this.text_ = text;
  };
  /**
   * Set the text alignment.
   *
   * @param {string|undefined} textAlign Text align.
   * @api
   */


  Text.prototype.setTextAlign = function (textAlign) {
    this.textAlign_ = textAlign;
  };
  /**
   * Set the text baseline.
   *
   * @param {string|undefined} textBaseline Text baseline.
   * @api
   */


  Text.prototype.setTextBaseline = function (textBaseline) {
    this.textBaseline_ = textBaseline;
  };
  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */


  Text.prototype.setBackgroundFill = function (fill) {
    this.backgroundFill_ = fill;
  };
  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */


  Text.prototype.setBackgroundStroke = function (stroke) {
    this.backgroundStroke_ = stroke;
  };
  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {!Array<number>} padding Padding.
   * @api
   */


  Text.prototype.setPadding = function (padding) {
    this.padding_ = padding;
  };

  return Text;
}();

var _default = Text;
exports.default = _default;
},{"./Fill.js":"ol/style/Fill.js","./TextPlacement.js":"ol/style/TextPlacement.js","../size.js":"ol/size.js"}],"ol/style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function () {
    return _Circle.default;
  }
});
Object.defineProperty(exports, "Fill", {
  enumerable: true,
  get: function () {
    return _Fill.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _Icon.default;
  }
});
Object.defineProperty(exports, "IconImage", {
  enumerable: true,
  get: function () {
    return _IconImage.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _Image.default;
  }
});
Object.defineProperty(exports, "RegularShape", {
  enumerable: true,
  get: function () {
    return _RegularShape.default;
  }
});
Object.defineProperty(exports, "Stroke", {
  enumerable: true,
  get: function () {
    return _Stroke.default;
  }
});
Object.defineProperty(exports, "Style", {
  enumerable: true,
  get: function () {
    return _Style.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _Text.default;
  }
});

var _Circle = _interopRequireDefault(require("./style/Circle.js"));

var _Fill = _interopRequireDefault(require("./style/Fill.js"));

var _Icon = _interopRequireDefault(require("./style/Icon.js"));

var _IconImage = _interopRequireDefault(require("./style/IconImage.js"));

var _Image = _interopRequireDefault(require("./style/Image.js"));

var _RegularShape = _interopRequireDefault(require("./style/RegularShape.js"));

var _Stroke = _interopRequireDefault(require("./style/Stroke.js"));

var _Style = _interopRequireDefault(require("./style/Style.js"));

var _Text = _interopRequireDefault(require("./style/Text.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./style/Circle.js":"ol/style/Circle.js","./style/Fill.js":"ol/style/Fill.js","./style/Icon.js":"ol/style/Icon.js","./style/IconImage.js":"ol/style/IconImage.js","./style/Image.js":"ol/style/Image.js","./style/RegularShape.js":"ol/style/RegularShape.js","./style/Stroke.js":"ol/style/Stroke.js","./style/Style.js":"ol/style/Style.js","./style/Text.js":"ol/style/Text.js"}],"ol/render/canvas/hitdetect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHitDetectionImageData = createHitDetectionImageData;
exports.hitDetect = hitDetect;

var _Immediate = _interopRequireDefault(require("./Immediate.js"));

var _GeometryType = _interopRequireDefault(require("../../geom/GeometryType.js"));

var _IconAnchorUnits = _interopRequireDefault(require("../../style/IconAnchorUnits.js"));

var _style = require("../../style.js");

var _dom = require("../../dom.js");

var _extent = require("../../extent.js");

var _array = require("../../array.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/render/canvas/hitdetet
 */

/**
 * @param {import("../../size.js").Size} size Canvas size in css pixels.
 * @param {Array<import("../../transform.js").Transform>} transforms Transforms
 * for rendering features to all worlds of the viewport, from coordinates to css
 * pixels.
 * @param {Array<import("../../Feature.js").FeatureLike>} features
 * Features to consider for hit detection.
 * @param {import("../../style/Style.js").StyleFunction|undefined} styleFunction
 * Layer style function.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @return {ImageData} Hit detection image data.
 */
function createHitDetectionImageData(size, transforms, features, styleFunction, extent, resolution, rotation) {
  var width = size[0] / 2;
  var height = size[1] / 2;
  var context = (0, _dom.createCanvasContext2D)(width, height);
  context.imageSmoothingEnabled = false;
  var canvas = context.canvas;
  var renderer = new _Immediate.default(context, 0.5, extent, null, rotation);
  var featureCount = features.length; // Stretch hit detection index to use the whole available color range

  var indexFactor = Math.floor((256 * 256 * 256 - 1) / featureCount);
  var featuresByZIndex = {};

  for (var i = 1; i <= featureCount; ++i) {
    var feature = features[i - 1];
    var featureStyleFunction = feature.getStyleFunction() || styleFunction;

    if (!styleFunction) {
      continue;
    }

    var styles = featureStyleFunction(feature, resolution);

    if (!styles) {
      continue;
    }

    if (!Array.isArray(styles)) {
      styles = [styles];
    }

    var index = i * indexFactor;
    var color = '#' + ('000000' + index.toString(16)).slice(-6);

    for (var j = 0, jj = styles.length; j < jj; ++j) {
      var originalStyle = styles[j];
      var style = originalStyle.clone();
      var fill = style.getFill();

      if (fill) {
        fill.setColor(color);
      }

      var stroke = style.getStroke();

      if (stroke) {
        stroke.setColor(color);
      }

      style.setText(undefined);
      var image = originalStyle.getImage();

      if (image) {
        var imgSize = image.getImageSize();

        if (!imgSize) {
          continue;
        }

        var canvas_1 = document.createElement('canvas');
        canvas_1.width = imgSize[0];
        canvas_1.height = imgSize[1];
        var imgContext = canvas_1.getContext('2d', {
          alpha: false
        });
        imgContext.fillStyle = color;
        var img = imgContext.canvas;
        imgContext.fillRect(0, 0, img.width, img.height);
        var width_1 = imgSize ? imgSize[0] : img.width;
        var height_1 = imgSize ? imgSize[1] : img.height;
        var iconContext = (0, _dom.createCanvasContext2D)(width_1, height_1);
        iconContext.drawImage(img, 0, 0);
        style.setImage(new _style.Icon({
          img: img,
          imgSize: imgSize,
          anchor: image.getAnchor(),
          anchorXUnits: _IconAnchorUnits.default.PIXELS,
          anchorYUnits: _IconAnchorUnits.default.PIXELS,
          offset: image.getOrigin(),
          size: image.getSize(),
          opacity: image.getOpacity(),
          scale: image.getScale(),
          rotation: image.getRotation(),
          rotateWithView: image.getRotateWithView()
        }));
      }

      var zIndex = Number(style.getZIndex());
      var byGeometryType = featuresByZIndex[zIndex];

      if (!byGeometryType) {
        byGeometryType = {};
        featuresByZIndex[zIndex] = byGeometryType;
        byGeometryType[_GeometryType.default.POLYGON] = [];
        byGeometryType[_GeometryType.default.CIRCLE] = [];
        byGeometryType[_GeometryType.default.LINE_STRING] = [];
        byGeometryType[_GeometryType.default.POINT] = [];
      }

      var geometry = style.getGeometryFunction()(feature);

      if (geometry && (0, _extent.intersects)(extent, geometry.getExtent())) {
        byGeometryType[geometry.getType().replace('Multi', '')].push(geometry, style);
      }
    }
  }

  var zIndexKeys = Object.keys(featuresByZIndex).map(Number).sort(_array.numberSafeCompareFunction);

  for (var i = 0, ii = zIndexKeys.length; i < ii; ++i) {
    var byGeometryType = featuresByZIndex[zIndexKeys[i]];

    for (var type in byGeometryType) {
      var geomAndStyle = byGeometryType[type];

      for (var j = 0, jj = geomAndStyle.length; j < jj; j += 2) {
        renderer.setStyle(geomAndStyle[j + 1]);

        for (var k = 0, kk = transforms.length; k < kk; ++k) {
          renderer.setTransform(transforms[k]);
          renderer.drawGeometry(geomAndStyle[j]);
        }
      }
    }
  }

  return context.getImageData(0, 0, canvas.width, canvas.height);
}
/**
 * @param {import("../../pixel").Pixel} pixel Pixel coordinate on the hit
 * detection canvas in css pixels.
 * @param {Array<import("../../Feature").FeatureLike>} features Features. Has to
 * match the `features` array that was passed to `createHitDetectionImageData()`.
 * @param {ImageData} imageData Hit detection image data generated by
 * `createHitDetectionImageData()`.
 * @return {Array<import("../../Feature").FeatureLike>} features Features.
 */


function hitDetect(pixel, features, imageData) {
  var resultFeatures = [];

  if (imageData) {
    var index = (Math.round(pixel[0] / 2) + Math.round(pixel[1] / 2) * imageData.width) * 4;
    var r = imageData.data[index];
    var g = imageData.data[index + 1];
    var b = imageData.data[index + 2];
    var i = b + 256 * (g + 256 * r);
    var indexFactor = Math.floor((256 * 256 * 256 - 1) / features.length);

    if (i && i % indexFactor === 0) {
      resultFeatures.push(features[i / indexFactor - 1]);
    }
  }

  return resultFeatures;
}
},{"./Immediate.js":"ol/render/canvas/Immediate.js","../../geom/GeometryType.js":"ol/geom/GeometryType.js","../../style/IconAnchorUnits.js":"ol/style/IconAnchorUnits.js","../../style.js":"ol/style.js","../../dom.js":"ol/dom.js","../../extent.js":"ol/extent.js","../../array.js":"ol/array.js"}],"ol/renderer/vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOrder = defaultOrder;
exports.getSquaredTolerance = getSquaredTolerance;
exports.getTolerance = getTolerance;
exports.renderFeature = renderFeature;

var _BuilderType = _interopRequireDefault(require("../render/canvas/BuilderType.js"));

var _GeometryType = _interopRequireDefault(require("../geom/GeometryType.js"));

var _ImageState = _interopRequireDefault(require("../ImageState.js"));

var _util = require("../util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/renderer/vector
 */

/**
 * Tolerance for geometry simplification in device pixels.
 * @type {number}
 */
var SIMPLIFY_TOLERANCE = 0.5;
/**
 * @const
 * @type {Object<import("../geom/GeometryType.js").default,
 *                function(import("../render/canvas/BuilderGroup.js").default, import("../geom/Geometry.js").default,
 *                         import("../style/Style.js").default, Object): void>}
 */

var GEOMETRY_RENDERERS = {
  'Point': renderPointGeometry,
  'LineString': renderLineStringGeometry,
  'Polygon': renderPolygonGeometry,
  'MultiPoint': renderMultiPointGeometry,
  'MultiLineString': renderMultiLineStringGeometry,
  'MultiPolygon': renderMultiPolygonGeometry,
  'GeometryCollection': renderGeometryCollectionGeometry,
  'Circle': renderCircleGeometry
};
/**
 * @param {import("../Feature.js").FeatureLike} feature1 Feature 1.
 * @param {import("../Feature.js").FeatureLike} feature2 Feature 2.
 * @return {number} Order.
 */

function defaultOrder(feature1, feature2) {
  return parseInt((0, _util.getUid)(feature1), 10) - parseInt((0, _util.getUid)(feature2), 10);
}
/**
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @return {number} Squared pixel tolerance.
 */


function getSquaredTolerance(resolution, pixelRatio) {
  var tolerance = getTolerance(resolution, pixelRatio);
  return tolerance * tolerance;
}
/**
 * @param {number} resolution Resolution.
 * @param {number} pixelRatio Pixel ratio.
 * @return {number} Pixel tolerance.
 */


function getTolerance(resolution, pixelRatio) {
  return SIMPLIFY_TOLERANCE * resolution / pixelRatio;
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
 * @param {import("../geom/Circle.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").default} feature Feature.
 */


function renderCircleGeometry(builderGroup, geometry, style, feature) {
  var fillStyle = style.getFill();
  var strokeStyle = style.getStroke();

  if (fillStyle || strokeStyle) {
    var circleReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.CIRCLE);
    circleReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    circleReplay.drawCircle(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(false));
    textReplay.drawText(geometry, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../style/Style.js").default} style Style.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {function(import("../events/Event.js").default): void} listener Listener function.
 * @param {import("../proj.js").TransformFunction} [opt_transform] Transform from user to view projection.
 * @return {boolean} `true` if style is loading.
 * @template T
 */


function renderFeature(replayGroup, feature, style, squaredTolerance, listener, opt_transform) {
  var loading = false;
  var imageStyle = style.getImage();

  if (imageStyle) {
    var imageState = imageStyle.getImageState();

    if (imageState == _ImageState.default.LOADED || imageState == _ImageState.default.ERROR) {
      imageStyle.unlistenImageChange(listener);
    } else {
      if (imageState == _ImageState.default.IDLE) {
        imageStyle.load();
      }

      imageState = imageStyle.getImageState();
      imageStyle.listenImageChange(listener);
      loading = true;
    }
  }

  renderFeatureInternal(replayGroup, feature, style, squaredTolerance, opt_transform);
  return loading;
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 * @param {import("../style/Style.js").default} style Style.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {import("../proj.js").TransformFunction} [opt_transform] Optional transform function.
 */


function renderFeatureInternal(replayGroup, feature, style, squaredTolerance, opt_transform) {
  var geometry = style.getGeometryFunction()(feature);

  if (!geometry) {
    return;
  }

  var simplifiedGeometry = geometry.simplifyTransformed(squaredTolerance, opt_transform);
  var renderer = style.getRenderer();

  if (renderer) {
    renderGeometry(replayGroup, simplifiedGeometry, style, feature);
  } else {
    var geometryRenderer = GEOMETRY_RENDERERS[simplifiedGeometry.getType()];
    geometryRenderer(replayGroup, simplifiedGeometry, style, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../geom/Geometry.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */


function renderGeometry(replayGroup, geometry, style, feature) {
  if (geometry.getType() == _GeometryType.default.GEOMETRY_COLLECTION) {
    var geometries =
    /** @type {import("../geom/GeometryCollection.js").default} */
    geometry.getGeometries();

    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      renderGeometry(replayGroup, geometries[i], style, feature);
    }

    return;
  }

  var replay = replayGroup.getBuilder(style.getZIndex(), _BuilderType.default.DEFAULT);
  replay.drawCustom(
  /** @type {import("../geom/SimpleGeometry.js").default} */
  geometry, feature, style.getRenderer());
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} replayGroup Replay group.
 * @param {import("../geom/GeometryCollection.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").default} feature Feature.
 */


function renderGeometryCollectionGeometry(replayGroup, geometry, style, feature) {
  var geometries = geometry.getGeometriesArray();
  var i, ii;

  for (i = 0, ii = geometries.length; i < ii; ++i) {
    var geometryRenderer = GEOMETRY_RENDERERS[geometries[i].getType()];
    geometryRenderer(replayGroup, geometries[i], style, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/LineString.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */


function renderLineStringGeometry(builderGroup, geometry, style, feature) {
  var strokeStyle = style.getStroke();

  if (strokeStyle) {
    var lineStringReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.LINE_STRING);
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawLineString(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(false));
    textReplay.drawText(geometry, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/MultiLineString.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */


function renderMultiLineStringGeometry(builderGroup, geometry, style, feature) {
  var strokeStyle = style.getStroke();

  if (strokeStyle) {
    var lineStringReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.LINE_STRING);
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawMultiLineString(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(false));
    textReplay.drawText(geometry, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/MultiPolygon.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").default} feature Feature.
 */


function renderMultiPolygonGeometry(builderGroup, geometry, style, feature) {
  var fillStyle = style.getFill();
  var strokeStyle = style.getStroke();

  if (strokeStyle || fillStyle) {
    var polygonReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.POLYGON);
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawMultiPolygon(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(false));
    textReplay.drawText(geometry, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/Point.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */


function renderPointGeometry(builderGroup, geometry, style, feature) {
  var imageStyle = style.getImage();

  if (imageStyle) {
    if (imageStyle.getImageState() != _ImageState.default.LOADED) {
      return;
    }

    var imageReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.IMAGE);
    imageReplay.setImageStyle(imageStyle, builderGroup.addDeclutter(false));
    imageReplay.drawPoint(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(!!imageStyle));
    textReplay.drawText(geometry, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/MultiPoint.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */


function renderMultiPointGeometry(builderGroup, geometry, style, feature) {
  var imageStyle = style.getImage();

  if (imageStyle) {
    if (imageStyle.getImageState() != _ImageState.default.LOADED) {
      return;
    }

    var imageReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.IMAGE);
    imageReplay.setImageStyle(imageStyle, builderGroup.addDeclutter(false));
    imageReplay.drawMultiPoint(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(!!imageStyle));
    textReplay.drawText(geometry, feature);
  }
}
/**
 * @param {import("../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
 * @param {import("../geom/Polygon.js").default|import("../render/Feature.js").default} geometry Geometry.
 * @param {import("../style/Style.js").default} style Style.
 * @param {import("../Feature.js").FeatureLike} feature Feature.
 */


function renderPolygonGeometry(builderGroup, geometry, style, feature) {
  var fillStyle = style.getFill();
  var strokeStyle = style.getStroke();

  if (fillStyle || strokeStyle) {
    var polygonReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.POLYGON);
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawPolygon(geometry, feature);
  }

  var textStyle = style.getText();

  if (textStyle) {
    var textReplay = builderGroup.getBuilder(style.getZIndex(), _BuilderType.default.TEXT);
    textReplay.setTextStyle(textStyle, builderGroup.addDeclutter(false));
    textReplay.drawText(geometry, feature);
  }
}
},{"../render/canvas/BuilderType.js":"ol/render/canvas/BuilderType.js","../geom/GeometryType.js":"ol/geom/GeometryType.js","../ImageState.js":"ol/ImageState.js","../util.js":"ol/util.js"}],"ol/renderer/canvas/VectorLayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BuilderGroup = _interopRequireDefault(require("../../render/canvas/BuilderGroup.js"));

var _Layer = _interopRequireDefault(require("./Layer.js"));

var _ExecutorGroup = _interopRequireWildcard(require("../../render/canvas/ExecutorGroup.js"));

var _ViewHint = _interopRequireDefault(require("../../ViewHint.js"));

var _transform = require("../../transform.js");

var _extent = require("../../extent.js");

var _hitdetect = require("../../render/canvas/hitdetect.js");

var _vector = require("../vector.js");

var _proj = require("../../proj.js");

var _util = require("../../util.js");

var _coordinate = require("../../coordinate.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/renderer/canvas/VectorLayer
 */


/**
 * @classdesc
 * Canvas renderer for vector layers.
 * @api
 */
var CanvasVectorLayerRenderer =
/** @class */
function (_super) {
  __extends(CanvasVectorLayerRenderer, _super);
  /**
   * @param {import("../../layer/Vector.js").default} vectorLayer Vector layer.
   */


  function CanvasVectorLayerRenderer(vectorLayer) {
    var _this = _super.call(this, vectorLayer) || this;
    /** @private */


    _this.boundHandleStyleImageChange_ = _this.handleStyleImageChange_.bind(_this);
    /**
     * @type {boolean}
     */

    _this.animatingOrInteracting_;
    /**
     * @private
     * @type {boolean}
     */

    _this.dirty_ = false;
    /**
     * @type {ImageData}
     */

    _this.hitDetectionImageData_ = null;
    /**
     * @type {Array<import("../../Feature.js").default>}
     */

    _this.renderedFeatures_ = null;
    /**
     * @private
     * @type {number}
     */

    _this.renderedRevision_ = -1;
    /**
     * @private
     * @type {number}
     */

    _this.renderedResolution_ = NaN;
    /**
     * @private
     * @type {import("../../extent.js").Extent}
     */

    _this.renderedExtent_ = (0, _extent.createEmpty)();
    /**
     * @private
     * @type {number}
     */

    _this.renderedRotation_;
    /**
     * @private
     * @type {import("../../coordinate").Coordinate}
     */

    _this.renderedCenter_ = null;
    /**
     * @private
     * @type {import("../../proj/Projection").default}
     */

    _this.renderedProjection_ = null;
    /**
     * @private
     * @type {function(import("../../Feature.js").default, import("../../Feature.js").default): number|null}
     */

    _this.renderedRenderOrder_ = null;
    /**
     * @private
     * @type {import("../../render/canvas/ExecutorGroup").default}
     */

    _this.replayGroup_ = null;
    /**
     * A new replay group had to be created by `prepareFrame()`
     * @type {boolean}
     */

    _this.replayGroupChanged = true;
    return _this;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {number} opacity Opacity.
   */


  CanvasVectorLayerRenderer.prototype.useContainer = function (target, transform, opacity) {
    if (opacity < 1) {
      target = null;
    }

    _super.prototype.useContainer.call(this, target, transform, opacity);
  };
  /**
   * Render the layer.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */


  CanvasVectorLayerRenderer.prototype.renderFrame = function (frameState, target) {
    var pixelRatio = frameState.pixelRatio;
    var layerState = frameState.layerStatesArray[frameState.layerIndex]; // set forward and inverse pixel transforms

    (0, _transform.makeScale)(this.pixelTransform, 1 / pixelRatio, 1 / pixelRatio);
    (0, _transform.makeInverse)(this.inversePixelTransform, this.pixelTransform);
    var canvasTransform = (0, _transform.toString)(this.pixelTransform);
    this.useContainer(target, canvasTransform, layerState.opacity);
    var context = this.context;
    var canvas = context.canvas;
    var replayGroup = this.replayGroup_;

    if (!replayGroup || replayGroup.isEmpty()) {
      if (!this.containerReused && canvas.width > 0) {
        canvas.width = 0;
      }

      return this.container;
    } // resize and clear


    var width = Math.round(frameState.size[0] * pixelRatio);
    var height = Math.round(frameState.size[1] * pixelRatio);

    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;

      if (canvas.style.transform !== canvasTransform) {
        canvas.style.transform = canvasTransform;
      }
    } else if (!this.containerReused) {
      context.clearRect(0, 0, width, height);
    }

    this.preRender(context, frameState);
    var extent = frameState.extent;
    var viewState = frameState.viewState;
    var center = viewState.center;
    var resolution = viewState.resolution;
    var projection = viewState.projection;
    var rotation = viewState.rotation;
    var projectionExtent = projection.getExtent();
    var vectorSource = this.getLayer().getSource(); // clipped rendering if layer extent is set

    var clipped = false;

    if (layerState.extent) {
      var layerExtent = (0, _proj.fromUserExtent)(layerState.extent, projection);
      clipped = !(0, _extent.containsExtent)(layerExtent, frameState.extent) && (0, _extent.intersects)(layerExtent, frameState.extent);

      if (clipped) {
        this.clipUnrotated(context, frameState, layerExtent);
      }
    }

    var viewHints = frameState.viewHints;
    var snapToPixel = !(viewHints[_ViewHint.default.ANIMATING] || viewHints[_ViewHint.default.INTERACTING]);
    var transform = this.getRenderTransform(center, resolution, rotation, pixelRatio, width, height, 0);
    var declutterReplays = this.getLayer().getDeclutter() ? {} : null;
    replayGroup.execute(context, 1, transform, rotation, snapToPixel, undefined, declutterReplays);

    if (vectorSource.getWrapX() && projection.canWrapX() && !(0, _extent.containsExtent)(projectionExtent, extent)) {
      var startX = extent[0];
      var worldWidth = (0, _extent.getWidth)(projectionExtent);
      var world = 0;
      var offsetX = void 0;

      while (startX < projectionExtent[0]) {
        --world;
        offsetX = worldWidth * world;
        var transform_1 = this.getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX);
        replayGroup.execute(context, 1, transform_1, rotation, snapToPixel, undefined, declutterReplays);
        startX += worldWidth;
      }

      world = 0;
      startX = extent[2];

      while (startX > projectionExtent[2]) {
        ++world;
        offsetX = worldWidth * world;
        var transform_2 = this.getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX);
        replayGroup.execute(context, 1, transform_2, rotation, snapToPixel, undefined, declutterReplays);
        startX -= worldWidth;
      }
    }

    if (declutterReplays) {
      var viewHints_1 = frameState.viewHints;
      var hifi = !(viewHints_1[_ViewHint.default.ANIMATING] || viewHints_1[_ViewHint.default.INTERACTING]);
      (0, _ExecutorGroup.replayDeclutter)(declutterReplays, context, rotation, 1, hifi, frameState.declutterItems);
    }

    if (clipped) {
      context.restore();
    }

    this.postRender(context, frameState);
    var opacity = layerState.opacity;
    var container = this.container;

    if (opacity !== parseFloat(container.style.opacity)) {
      container.style.opacity = opacity === 1 ? '' : String(opacity);
    }

    if (this.renderedRotation_ !== viewState.rotation) {
      this.renderedRotation_ = viewState.rotation;
      this.hitDetectionImageData_ = null;
    }

    return this.container;
  };
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise that resolves with an array of features.
   */


  CanvasVectorLayerRenderer.prototype.getFeatures = function (pixel) {
    return new Promise(function (resolve, reject) {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        var size = [this.context.canvas.width, this.context.canvas.height];
        (0, _transform.apply)(this.pixelTransform, size);
        var center = this.renderedCenter_;
        var resolution = this.renderedResolution_;
        var rotation = this.renderedRotation_;
        var projection = this.renderedProjection_;
        var extent = this.renderedExtent_;
        var layer = this.getLayer();
        var transforms = [];
        var width = size[0] / 2;
        var height = size[1] / 2;
        transforms.push(this.getRenderTransform(center, resolution, rotation, 0.5, width, height, 0).slice());
        var source = layer.getSource();
        var projectionExtent = projection.getExtent();

        if (source.getWrapX() && projection.canWrapX() && !(0, _extent.containsExtent)(projectionExtent, extent)) {
          var startX = extent[0];
          var worldWidth = (0, _extent.getWidth)(projectionExtent);
          var world = 0;
          var offsetX = void 0;

          while (startX < projectionExtent[0]) {
            --world;
            offsetX = worldWidth * world;
            transforms.push(this.getRenderTransform(center, resolution, rotation, 0.5, width, height, offsetX).slice());
            startX += worldWidth;
          }

          world = 0;
          startX = extent[2];

          while (startX > projectionExtent[2]) {
            ++world;
            offsetX = worldWidth * world;
            transforms.push(this.getRenderTransform(center, resolution, rotation, 0.5, width, height, offsetX).slice());
            startX -= worldWidth;
          }
        }

        this.hitDetectionImageData_ = (0, _hitdetect.createHitDetectionImageData)(size, transforms, this.renderedFeatures_, layer.getStyleFunction(), extent, resolution, rotation);
      }

      resolve((0, _hitdetect.hitDetect)(pixel, this.renderedFeatures_, this.hitDetectionImageData_));
    }.bind(this));
  };
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../layer/Layer.js").default): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|void} Callback result.
   * @template T
   */


  CanvasVectorLayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, declutteredFeatures) {
    if (!this.replayGroup_) {
      return undefined;
    } else {
      var resolution = frameState.viewState.resolution;
      var rotation = frameState.viewState.rotation;
      var layer_1 = this.getLayer();
      /** @type {!Object<string, boolean>} */

      var features_1 = {};
      var result = this.replayGroup_.forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance,
      /**
       * @param {import("../../Feature.js").FeatureLike} feature Feature.
       * @return {?} Callback result.
       */
      function (feature) {
        var key = (0, _util.getUid)(feature);

        if (!(key in features_1)) {
          features_1[key] = true;
          return callback(feature, layer_1);
        }
      }, layer_1.getDeclutter() ? declutteredFeatures : null);
      return result;
    }
  };
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */


  CanvasVectorLayerRenderer.prototype.handleFontsChanged = function () {
    var layer = this.getLayer();

    if (layer.getVisible() && this.replayGroup_) {
      layer.changed();
    }
  };
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */


  CanvasVectorLayerRenderer.prototype.handleStyleImageChange_ = function (event) {
    this.renderIfReadyAndVisible();
  };
  /**
   * Determine whether render should be called.
   * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */


  CanvasVectorLayerRenderer.prototype.prepareFrame = function (frameState) {
    var vectorLayer = this.getLayer();
    var vectorSource = vectorLayer.getSource();

    if (!vectorSource) {
      return false;
    }

    var animating = frameState.viewHints[_ViewHint.default.ANIMATING];
    var interacting = frameState.viewHints[_ViewHint.default.INTERACTING];
    var updateWhileAnimating = vectorLayer.getUpdateWhileAnimating();
    var updateWhileInteracting = vectorLayer.getUpdateWhileInteracting();

    if (!this.dirty_ && !updateWhileAnimating && animating || !updateWhileInteracting && interacting) {
      this.animatingOrInteracting_ = true;
      return true;
    }

    this.animatingOrInteracting_ = false;
    var frameStateExtent = frameState.extent;
    var viewState = frameState.viewState;
    var projection = viewState.projection;
    var resolution = viewState.resolution;
    var pixelRatio = frameState.pixelRatio;
    var vectorLayerRevision = vectorLayer.getRevision();
    var vectorLayerRenderBuffer = vectorLayer.getRenderBuffer();
    var vectorLayerRenderOrder = vectorLayer.getRenderOrder();

    if (vectorLayerRenderOrder === undefined) {
      vectorLayerRenderOrder = _vector.defaultOrder;
    }

    var center = viewState.center.slice();
    var extent = (0, _extent.buffer)(frameStateExtent, vectorLayerRenderBuffer * resolution);
    var loadExtents = [extent.slice()];
    var projectionExtent = projection.getExtent();

    if (vectorSource.getWrapX() && projection.canWrapX() && !(0, _extent.containsExtent)(projectionExtent, frameState.extent)) {
      // For the replay group, we need an extent that intersects the real world
      // (-180° to +180°). To support geometries in a coordinate range from -540°
      // to +540°, we add at least 1 world width on each side of the projection
      // extent. If the viewport is wider than the world, we need to add half of
      // the viewport width to make sure we cover the whole viewport.
      var worldWidth = (0, _extent.getWidth)(projectionExtent);
      var gutter = Math.max((0, _extent.getWidth)(extent) / 2, worldWidth);
      extent[0] = projectionExtent[0] - gutter;
      extent[2] = projectionExtent[2] + gutter;
      (0, _coordinate.wrapX)(center, projection);
      var loadExtent = (0, _extent.wrapX)(loadExtents[0], projection); // If the extent crosses the date line, we load data for both edges of the worlds

      if (loadExtent[0] < projectionExtent[0] && loadExtent[2] < projectionExtent[2]) {
        loadExtents.push([loadExtent[0] + worldWidth, loadExtent[1], loadExtent[2] + worldWidth, loadExtent[3]]);
      } else if (loadExtent[0] > projectionExtent[0] && loadExtent[2] > projectionExtent[2]) {
        loadExtents.push([loadExtent[0] - worldWidth, loadExtent[1], loadExtent[2] - worldWidth, loadExtent[3]]);
      }
    }

    if (!this.dirty_ && this.renderedResolution_ == resolution && this.renderedRevision_ == vectorLayerRevision && this.renderedRenderOrder_ == vectorLayerRenderOrder && (0, _extent.containsExtent)(this.renderedExtent_, extent)) {
      this.replayGroupChanged = false;
      return true;
    }

    this.replayGroup_ = null;
    this.dirty_ = false;
    var replayGroup = new _BuilderGroup.default((0, _vector.getTolerance)(resolution, pixelRatio), extent, resolution, pixelRatio, vectorLayer.getDeclutter());
    var userProjection = (0, _proj.getUserProjection)();
    var userTransform;

    if (userProjection) {
      for (var i = 0, ii = loadExtents.length; i < ii; ++i) {
        vectorSource.loadFeatures((0, _proj.toUserExtent)(loadExtents[i], projection), resolution, userProjection);
      }

      userTransform = (0, _proj.getTransformFromProjections)(userProjection, projection);
    } else {
      for (var i = 0, ii = loadExtents.length; i < ii; ++i) {
        vectorSource.loadFeatures(loadExtents[i], resolution, projection);
      }
    }

    var squaredTolerance = (0, _vector.getSquaredTolerance)(resolution, pixelRatio);
    /**
     * @param {import("../../Feature.js").default} feature Feature.
     * @this {CanvasVectorLayerRenderer}
     */

    var render = function (feature) {
      var styles;
      var styleFunction = feature.getStyleFunction() || vectorLayer.getStyleFunction();

      if (styleFunction) {
        styles = styleFunction(feature, resolution);
      }

      if (styles) {
        var dirty = this.renderFeature(feature, squaredTolerance, styles, replayGroup, userTransform);
        this.dirty_ = this.dirty_ || dirty;
      }
    }.bind(this);

    var userExtent = (0, _proj.toUserExtent)(extent, projection);
    /** @type {Array<import("../../Feature.js").default>} */

    var features = vectorSource.getFeaturesInExtent(userExtent);

    if (vectorLayerRenderOrder) {
      features.sort(vectorLayerRenderOrder);
    }

    for (var i = 0, ii = features.length; i < ii; ++i) {
      render(features[i]);
    }

    this.renderedFeatures_ = features;
    var replayGroupInstructions = replayGroup.finish();
    var executorGroup = new _ExecutorGroup.default(extent, resolution, pixelRatio, vectorSource.getOverlaps(), replayGroupInstructions, vectorLayer.getRenderBuffer());
    this.renderedResolution_ = resolution;
    this.renderedRevision_ = vectorLayerRevision;
    this.renderedRenderOrder_ = vectorLayerRenderOrder;
    this.renderedExtent_ = extent;
    this.renderedCenter_ = center;
    this.renderedProjection_ = projection;
    this.replayGroup_ = executorGroup;
    this.hitDetectionImageData_ = null;
    this.replayGroupChanged = true;
    return true;
  };
  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction=} opt_transform Transform from user to view projection.
   * @return {boolean} `true` if an image is loading.
   */


  CanvasVectorLayerRenderer.prototype.renderFeature = function (feature, squaredTolerance, styles, builderGroup, opt_transform) {
    if (!styles) {
      return false;
    }

    var loading = false;

    if (Array.isArray(styles)) {
      for (var i = 0, ii = styles.length; i < ii; ++i) {
        loading = (0, _vector.renderFeature)(builderGroup, feature, styles[i], squaredTolerance, this.boundHandleStyleImageChange_, opt_transform) || loading;
      }
    } else {
      loading = (0, _vector.renderFeature)(builderGroup, feature, styles, squaredTolerance, this.boundHandleStyleImageChange_, opt_transform);
    }

    return loading;
  };

  return CanvasVectorLayerRenderer;
}(_Layer.default);

var _default = CanvasVectorLayerRenderer;
exports.default = _default;
},{"../../render/canvas/BuilderGroup.js":"ol/render/canvas/BuilderGroup.js","./Layer.js":"ol/renderer/canvas/Layer.js","../../render/canvas/ExecutorGroup.js":"ol/render/canvas/ExecutorGroup.js","../../ViewHint.js":"ol/ViewHint.js","../../transform.js":"ol/transform.js","../../extent.js":"ol/extent.js","../../render/canvas/hitdetect.js":"ol/render/canvas/hitdetect.js","../vector.js":"ol/renderer/vector.js","../../proj.js":"ol/proj.js","../../util.js":"ol/util.js","../../coordinate.js":"ol/coordinate.js"}],"ol/layer/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseVector = _interopRequireDefault(require("./BaseVector.js"));

var _VectorLayer = _interopRequireDefault(require("../renderer/canvas/VectorLayer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/layer/Vector
 */


/**
 * @classdesc
 * Vector data that is rendered client-side.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @extends {BaseVectorLayer<import("../source/Vector.js").default>}
 * @api
 */
var VectorLayer =
/** @class */
function (_super) {
  __extends(VectorLayer, _super);
  /**
   * @param {import("./BaseVector.js").Options=} opt_options Options.
   */


  function VectorLayer(opt_options) {
    return _super.call(this, opt_options) || this;
  }
  /**
   * Create a renderer for this layer.
   * @return {import("../renderer/Layer.js").default} A layer renderer.
   */


  VectorLayer.prototype.createRenderer = function () {
    return new _VectorLayer.default(this);
  };

  return VectorLayer;
}(_BaseVector.default);

var _default = VectorLayer;
exports.default = _default;
},{"./BaseVector.js":"ol/layer/BaseVector.js","../renderer/canvas/VectorLayer.js":"ol/renderer/canvas/VectorLayer.js"}],"ol/CollectionEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/CollectionEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */
  ADD: 'add',

  /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */
  REMOVE: 'remove'
};
exports.default = _default;
},{}],"ol/Collection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CollectionEvent = void 0;

var _AssertionError = _interopRequireDefault(require("./AssertionError.js"));

var _Object = _interopRequireDefault(require("./Object.js"));

var _CollectionEventType = _interopRequireDefault(require("./CollectionEventType.js"));

var _Event = _interopRequireDefault(require("./events/Event.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/Collection
 */


/**
 * @enum {string}
 * @private
 */
var Property = {
  LENGTH: 'length'
};
/**
 * @classdesc
 * Events emitted by {@link module:ol/Collection~Collection} instances are instances of this
 * type.
 */

var CollectionEvent =
/** @class */
function (_super) {
  __extends(CollectionEvent, _super);
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {*=} opt_element Element.
   * @param {number=} opt_index The index of the added or removed element.
   */


  function CollectionEvent(type, opt_element, opt_index) {
    var _this = _super.call(this, type) || this;
    /**
     * The element that is added to or removed from the collection.
     * @type {*}
     * @api
     */


    _this.element = opt_element;
    /**
     * The index of the added or removed element.
     * @type {number}
     * @api
     */

    _this.index = opt_index;
    return _this;
  }

  return CollectionEvent;
}(_Event.default);

exports.CollectionEvent = CollectionEvent;

/**
 * @typedef {Object} Options
 * @property {boolean} [unique=false] Disallow the same item from being added to
 * the collection twice.
 */

/**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires CollectionEvent
 *
 * @template T
 * @api
 */
var Collection =
/** @class */
function (_super) {
  __extends(Collection, _super);
  /**
   * @param {Array<T>=} opt_array Array.
   * @param {Options=} opt_options Collection options.
   */


  function Collection(opt_array, opt_options) {
    var _this = _super.call(this) || this;

    var options = opt_options || {};
    /**
     * @private
     * @type {boolean}
     */

    _this.unique_ = !!options.unique;
    /**
     * @private
     * @type {!Array<T>}
     */

    _this.array_ = opt_array ? opt_array : [];

    if (_this.unique_) {
      for (var i = 0, ii = _this.array_.length; i < ii; ++i) {
        _this.assertUnique_(_this.array_[i], i);
      }
    }

    _this.updateLength_();

    return _this;
  }
  /**
   * Remove all elements from the collection.
   * @api
   */


  Collection.prototype.clear = function () {
    while (this.getLength() > 0) {
      this.pop();
    }
  };
  /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */


  Collection.prototype.extend = function (arr) {
    for (var i = 0, ii = arr.length; i < ii; ++i) {
      this.push(arr[i]);
    }

    return this;
  };
  /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */


  Collection.prototype.forEach = function (f) {
    var array = this.array_;

    for (var i = 0, ii = array.length; i < ii; ++i) {
      f(array[i], i, array);
    }
  };
  /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */


  Collection.prototype.getArray = function () {
    return this.array_;
  };
  /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */


  Collection.prototype.item = function (index) {
    return this.array_[index];
  };
  /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */


  Collection.prototype.getLength = function () {
    return this.get(Property.LENGTH);
  };
  /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */


  Collection.prototype.insertAt = function (index, elem) {
    if (this.unique_) {
      this.assertUnique_(elem);
    }

    this.array_.splice(index, 0, elem);
    this.updateLength_();
    this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.ADD, elem, index));
  };
  /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */


  Collection.prototype.pop = function () {
    return this.removeAt(this.getLength() - 1);
  };
  /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */


  Collection.prototype.push = function (elem) {
    if (this.unique_) {
      this.assertUnique_(elem);
    }

    var n = this.getLength();
    this.insertAt(n, elem);
    return this.getLength();
  };
  /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */


  Collection.prototype.remove = function (elem) {
    var arr = this.array_;

    for (var i = 0, ii = arr.length; i < ii; ++i) {
      if (arr[i] === elem) {
        return this.removeAt(i);
      }
    }

    return undefined;
  };
  /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */


  Collection.prototype.removeAt = function (index) {
    var prev = this.array_[index];
    this.array_.splice(index, 1);
    this.updateLength_();
    this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.REMOVE, prev, index));
    return prev;
  };
  /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */


  Collection.prototype.setAt = function (index, elem) {
    var n = this.getLength();

    if (index < n) {
      if (this.unique_) {
        this.assertUnique_(elem, index);
      }

      var prev = this.array_[index];
      this.array_[index] = elem;
      this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.REMOVE, prev, index));
      this.dispatchEvent(new CollectionEvent(_CollectionEventType.default.ADD, elem, index));
    } else {
      for (var j = n; j < index; ++j) {
        this.insertAt(j, undefined);
      }

      this.insertAt(index, elem);
    }
  };
  /**
   * @private
   */


  Collection.prototype.updateLength_ = function () {
    this.set(Property.LENGTH, this.array_.length);
  };
  /**
   * @private
   * @param {T} elem Element.
   * @param {number=} opt_except Optional index to ignore.
   */


  Collection.prototype.assertUnique_ = function (elem, opt_except) {
    for (var i = 0, ii = this.array_.length; i < ii; ++i) {
      if (this.array_[i] === elem && i !== opt_except) {
        throw new _AssertionError.default(58);
      }
    }
  };

  return Collection;
}(_Object.default);

var _default = Collection;
exports.default = _default;
},{"./AssertionError.js":"ol/AssertionError.js","./Object.js":"ol/Object.js","./CollectionEventType.js":"ol/CollectionEventType.js","./events/Event.js":"ol/events/Event.js"}],"ol/structs/RBush.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rbush = _interopRequireDefault(require("rbush/rbush.js"));

var _extent = require("../extent.js");

var _util = require("../util.js");

var _obj = require("../obj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/structs/RBush
 */

/**
 * @typedef {Object} Entry
 * @property {number} minX
 * @property {number} minY
 * @property {number} maxX
 * @property {number} maxY
 * @property {Object} [value]
 */

/**
 * @classdesc
 * Wrapper around the RBush by Vladimir Agafonkin.
 * See https://github.com/mourner/rbush.
 *
 * @template T
 */
var RBush =
/** @class */
function () {
  /**
   * @param {number=} opt_maxEntries Max entries.
   */
  function RBush(opt_maxEntries) {
    /**
     * @private
     */
    this.rbush_ = new _rbush.default(opt_maxEntries);
    /**
     * A mapping between the objects added to this rbush wrapper
     * and the objects that are actually added to the internal rbush.
     * @private
     * @type {Object<string, Entry>}
     */

    this.items_ = {};
  }
  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */


  RBush.prototype.insert = function (extent, value) {
    /** @type {Entry} */
    var item = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3],
      value: value
    };
    this.rbush_.insert(item);
    this.items_[(0, _util.getUid)(value)] = item;
  };
  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */


  RBush.prototype.load = function (extents, values) {
    var items = new Array(values.length);

    for (var i = 0, l = values.length; i < l; i++) {
      var extent = extents[i];
      var value = values[i];
      /** @type {Entry} */

      var item = {
        minX: extent[0],
        minY: extent[1],
        maxX: extent[2],
        maxY: extent[3],
        value: value
      };
      items[i] = item;
      this.items_[(0, _util.getUid)(value)] = item;
    }

    this.rbush_.load(items);
  };
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */


  RBush.prototype.remove = function (value) {
    var uid = (0, _util.getUid)(value); // get the object in which the value was wrapped when adding to the
    // internal rbush. then use that object to do the removal.

    var item = this.items_[uid];
    delete this.items_[uid];
    return this.rbush_.remove(item) !== null;
  };
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */


  RBush.prototype.update = function (extent, value) {
    var item = this.items_[(0, _util.getUid)(value)];
    var bbox = [item.minX, item.minY, item.maxX, item.maxY];

    if (!(0, _extent.equals)(bbox, extent)) {
      this.remove(value);
      this.insert(extent, value);
    }
  };
  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */


  RBush.prototype.getAll = function () {
    var items = this.rbush_.all();
    return items.map(function (item) {
      return item.value;
    });
  };
  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */


  RBush.prototype.getInExtent = function (extent) {
    /** @type {Entry} */
    var bbox = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3]
    };
    var items = this.rbush_.search(bbox);
    return items.map(function (item) {
      return item.value;
    });
  };
  /**
   * Calls a callback function with each value in the tree.
   * If the callback returns a truthy value, this value is returned without
   * checking the rest of the tree.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */


  RBush.prototype.forEach = function (callback) {
    return this.forEach_(this.getAll(), callback);
  };
  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */


  RBush.prototype.forEachInExtent = function (extent, callback) {
    return this.forEach_(this.getInExtent(extent), callback);
  };
  /**
   * @param {Array<T>} values Values.
   * @param {function(T): *} callback Callback.
   * @private
   * @return {*} Callback return value.
   */


  RBush.prototype.forEach_ = function (values, callback) {
    var result;

    for (var i = 0, l = values.length; i < l; i++) {
      result = callback(values[i]);

      if (result) {
        return result;
      }
    }

    return result;
  };
  /**
   * @return {boolean} Is empty.
   */


  RBush.prototype.isEmpty = function () {
    return (0, _obj.isEmpty)(this.items_);
  };
  /**
   * Remove all values from the RBush.
   */


  RBush.prototype.clear = function () {
    this.rbush_.clear();
    this.items_ = {};
  };
  /**
   * @param {import("../extent.js").Extent=} opt_extent Extent.
   * @return {import("../extent.js").Extent} Extent.
   */


  RBush.prototype.getExtent = function (opt_extent) {
    var data = this.rbush_.toJSON();
    return (0, _extent.createOrUpdate)(data.minX, data.minY, data.maxX, data.maxY, opt_extent);
  };
  /**
   * @param {RBush} rbush R-Tree.
   */


  RBush.prototype.concat = function (rbush) {
    this.rbush_.load(rbush.rbush_.all());

    for (var i in rbush.items_) {
      this.items_[i] = rbush.items_[i];
    }
  };

  return RBush;
}();

var _default = RBush;
exports.default = _default;
},{"rbush/rbush.js":"node_modules/rbush/rbush.js","../extent.js":"ol/extent.js","../util.js":"ol/util.js","../obj.js":"ol/obj.js"}],"ol/source/Source.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Object = _interopRequireDefault(require("../Object.js"));

var _State = _interopRequireDefault(require("./State.js"));

var _util = require("../util.js");

var _proj = require("../proj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/source/Source
 */


/**
 * A function that returns a string or an array of strings representing source
 * attributions.
 *
 * @typedef {function(import("../PluggableMap.js").FrameState): (string|Array<string>)} Attribution
 */

/**
 * A type that can be used to provide attribution information for data sources.
 *
 * It represents either
 * * a simple string (e.g. `'© Acme Inc.'`)
 * * an array of simple strings (e.g. `['© Acme Inc.', '© Bacme Inc.']`)
 * * a function that returns a string or array of strings ({@link module:ol/source/Source~Attribution})
 *
 * @typedef {string|Array<string>|Attribution} AttributionLike
 */

/**
 * @typedef {Object} Options
 * @property {AttributionLike} [attributions]
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {import("./State.js").default} [state='ready']
 * @property {boolean} [wrapX=false]
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link module:ol/layer/Layer~Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 * @abstract
 * @api
 */
var Source =
/** @class */
function (_super) {
  __extends(Source, _super);
  /**
   * @param {Options} options Source options.
   */


  function Source(options) {
    var _this = _super.call(this) || this;
    /**
     * @private
     * @type {import("../proj/Projection.js").default}
     */


    _this.projection_ = (0, _proj.get)(options.projection);
    /**
     * @private
     * @type {?Attribution}
     */

    _this.attributions_ = adaptAttributions(options.attributions);
    /**
     * @private
     * @type {boolean}
     */

    _this.attributionsCollapsible_ = options.attributionsCollapsible !== undefined ? options.attributionsCollapsible : true;
    /**
     * This source is currently loading data. Sources that defer loading to the
     * map's tile queue never set this to `true`.
     * @type {boolean}
     */

    _this.loading = false;
    /**
     * @private
     * @type {import("./State.js").default}
     */

    _this.state_ = options.state !== undefined ? options.state : _State.default.READY;
    /**
     * @private
     * @type {boolean}
     */

    _this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
    return _this;
  }
  /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   */


  Source.prototype.getAttributions = function () {
    return this.attributions_;
  };
  /**
   * @return {boolean} Attributions are collapsible.
   */


  Source.prototype.getAttributionsCollapsible = function () {
    return this.attributionsCollapsible_;
  };
  /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   */


  Source.prototype.getProjection = function () {
    return this.projection_;
  };
  /**
   * @abstract
   * @return {Array<number>|undefined} Resolutions.
   */


  Source.prototype.getResolutions = function () {
    return (0, _util.abstract)();
  };
  /**
   * Get the state of the source, see {@link module:ol/source/State~State} for possible states.
   * @return {import("./State.js").default} State.
   * @api
   */


  Source.prototype.getState = function () {
    return this.state_;
  };
  /**
   * @return {boolean|undefined} Wrap X.
   */


  Source.prototype.getWrapX = function () {
    return this.wrapX_;
  };
  /**
   * @return {Object|undefined} Context options.
   */


  Source.prototype.getContextOptions = function () {
    return undefined;
  };
  /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */


  Source.prototype.refresh = function () {
    this.changed();
  };
  /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */


  Source.prototype.setAttributions = function (attributions) {
    this.attributions_ = adaptAttributions(attributions);
    this.changed();
  };
  /**
   * Set the state of the source.
   * @param {import("./State.js").default} state State.
   */


  Source.prototype.setState = function (state) {
    this.state_ = state;
    this.changed();
  };

  return Source;
}(_Object.default);
/**
 * Turns the attributions option into an attributions function.
 * @param {AttributionLike|undefined} attributionLike The attribution option.
 * @return {?Attribution} An attribution function (or null).
 */


function adaptAttributions(attributionLike) {
  if (!attributionLike) {
    return null;
  }

  if (Array.isArray(attributionLike)) {
    return function (frameState) {
      return attributionLike;
    };
  }

  if (typeof attributionLike === 'function') {
    return attributionLike;
  }

  return function (frameState) {
    return [attributionLike];
  };
}

var _default = Source;
exports.default = _default;
},{"../Object.js":"ol/Object.js","./State.js":"ol/source/State.js","../util.js":"ol/util.js","../proj.js":"ol/proj.js"}],"ol/source/VectorEventType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/source/VectorEventType
 */

/**
 * @enum {string}
 */
var _default = {
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: 'addfeature',

  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: 'changefeature',

  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: 'clear',

  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: 'removefeature'
};
exports.default = _default;
},{}],"ol/loadingstrategy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.bbox = bbox;
exports.tile = tile;

/**
 * @module ol/loadingstrategy
 */

/**
 * Strategy function for loading all features with a single request.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {Array<import("./extent.js").Extent>} Extents.
 * @api
 */
function all(extent, resolution) {
  return [[-Infinity, -Infinity, Infinity, Infinity]];
}
/**
 * Strategy function for loading features based on the view's extent and
 * resolution.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} resolution Resolution.
 * @return {Array<import("./extent.js").Extent>} Extents.
 * @api
 */


function bbox(extent, resolution) {
  return [extent];
}
/**
 * Creates a strategy function for loading features based on a tile grid.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {function(import("./extent.js").Extent, number): Array<import("./extent.js").Extent>} Loading strategy.
 * @api
 */


function tile(tileGrid) {
  return (
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @return {Array<import("./extent.js").Extent>} Extents.
     */
    function (extent, resolution) {
      var z = tileGrid.getZForResolution(resolution);
      var tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
      /** @type {Array<import("./extent.js").Extent>} */

      var extents = [];
      /** @type {import("./tilecoord.js").TileCoord} */

      var tileCoord = [z, 0, 0];

      for (tileCoord[1] = tileRange.minX; tileCoord[1] <= tileRange.maxX; ++tileCoord[1]) {
        for (tileCoord[2] = tileRange.minY; tileCoord[2] <= tileRange.maxY; ++tileCoord[2]) {
          extents.push(tileGrid.getTileCoordExtent(tileCoord));
        }
      }

      return extents;
    }
  );
}
},{}],"ol/format/FormatType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @module ol/format/FormatType
 */

/**
 * @enum {string}
 */
var _default = {
  ARRAY_BUFFER: 'arraybuffer',
  JSON: 'json',
  TEXT: 'text',
  XML: 'xml'
};
exports.default = _default;
},{}],"ol/featureloader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFeaturesXhr = loadFeaturesXhr;
exports.xhr = xhr;
exports.setWithCredentials = setWithCredentials;

var _FormatType = _interopRequireDefault(require("./format/FormatType.js"));

var _functions = require("./functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/featureloader
 */

/**
 *
 * @type {boolean}
 * @private
 */
var withCredentials = false;
/**
 * {@link module:ol/source/Vector} sources use a function of this type to
 * load features.
 *
 * This function takes an {@link module:ol/extent~Extent} representing the area to be loaded,
 * a `{number}` representing the resolution (map units per pixel) and an
 * {@link module:ol/proj/Projection} for the projection  as
 * arguments. `this` within the function is bound to the
 * {@link module:ol/source/Vector} it's called from.
 *
 * The function is responsible for loading the features and adding them to the
 * source.
 * @typedef {function(this:(import("./source/Vector").default|import("./VectorTile.js").default), import("./extent.js").Extent, number,
 *                    import("./proj/Projection.js").default): void} FeatureLoader
 * @api
 */

/**
 * {@link module:ol/source/Vector} sources use a function of this type to
 * get the url to load features from.
 *
 * This function takes an {@link module:ol/extent~Extent} representing the area
 * to be loaded, a `{number}` representing the resolution (map units per pixel)
 * and an {@link module:ol/proj/Projection} for the projection  as
 * arguments and returns a `{string}` representing the URL.
 * @typedef {function(import("./extent.js").Extent, number, import("./proj/Projection.js").default): string} FeatureUrlFunction
 * @api
 */

/**
 * @param {string|FeatureUrlFunction} url Feature URL service.
 * @param {import("./format/Feature.js").default} format Feature format.
 * @param {function(this:import("./VectorTile.js").default, Array<import("./Feature.js").default>, import("./proj/Projection.js").default, import("./extent.js").Extent): void|function(this:import("./source/Vector").default, Array<import("./Feature.js").default>): void} success
 *     Function called with the loaded features and optionally with the data
 *     projection. Called with the vector tile or source as `this`.
 * @param {function(this:import("./VectorTile.js").default): void|function(this:import("./source/Vector").default): void} failure
 *     Function called when loading failed. Called with the vector tile or
 *     source as `this`.
 * @return {FeatureLoader} The feature loader.
 */

function loadFeaturesXhr(url, format, success, failure) {
  return (
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @this {import("./source/Vector").default|import("./VectorTile.js").default}
     */
    function (extent, resolution, projection) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', typeof url === 'function' ? url(extent, resolution, projection) : url, true);

      if (format.getType() == _FormatType.default.ARRAY_BUFFER) {
        xhr.responseType = 'arraybuffer';
      }

      xhr.withCredentials = withCredentials;
      /**
       * @param {Event} event Event.
       * @private
       */

      xhr.onload = function (event) {
        // status will be 0 for file:// urls
        if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
          var type = format.getType();
          /** @type {Document|Node|Object|string|undefined} */

          var source = void 0;

          if (type == _FormatType.default.JSON || type == _FormatType.default.TEXT) {
            source = xhr.responseText;
          } else if (type == _FormatType.default.XML) {
            source = xhr.responseXML;

            if (!source) {
              source = new DOMParser().parseFromString(xhr.responseText, 'application/xml');
            }
          } else if (type == _FormatType.default.ARRAY_BUFFER) {
            source =
            /** @type {ArrayBuffer} */
            xhr.response;
          }

          if (source) {
            success.call(this, format.readFeatures(source, {
              extent: extent,
              featureProjection: projection
            }), format.readProjection(source));
          } else {
            failure.call(this);
          }
        } else {
          failure.call(this);
        }
      }.bind(this);
      /**
       * @private
       */


      xhr.onerror = function () {
        failure.call(this);
      }.bind(this);

      xhr.send();
    }
  );
}
/**
 * Create an XHR feature loader for a `url` and `format`. The feature loader
 * loads features (with XHR), parses the features, and adds them to the
 * vector source.
 * @param {string|FeatureUrlFunction} url Feature URL service.
 * @param {import("./format/Feature.js").default} format Feature format.
 * @return {FeatureLoader} The feature loader.
 * @api
 */


function xhr(url, format) {
  return loadFeaturesXhr(url, format,
  /**
   * @param {Array<import("./Feature.js").default>} features The loaded features.
   * @param {import("./proj/Projection.js").default} dataProjection Data
   * projection.
   * @this {import("./source/Vector").default|import("./VectorTile.js").default}
   */
  function (features, dataProjection) {
    var sourceOrTile =
    /** @type {?} */
    this;

    if (typeof sourceOrTile.addFeatures === 'function') {
      /** @type {import("./source/Vector").default} */
      sourceOrTile.addFeatures(features);
    }
  },
  /* FIXME handle error */
  _functions.VOID);
}
/**
 * Setter for the withCredentials configuration for the XHR.
 *
 * @param {boolean} xhrWithCredentials The value of withCredentials to set.
 * Compare https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/
 * @api
 */


function setWithCredentials(xhrWithCredentials) {
  withCredentials = xhrWithCredentials;
}
},{"./format/FormatType.js":"ol/format/FormatType.js","./functions.js":"ol/functions.js"}],"ol/source/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VectorSourceEvent = void 0;

var _Collection = _interopRequireDefault(require("../Collection.js"));

var _CollectionEventType = _interopRequireDefault(require("../CollectionEventType.js"));

var _Event = _interopRequireDefault(require("../events/Event.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _ObjectEventType = _interopRequireDefault(require("../ObjectEventType.js"));

var _RBush = _interopRequireDefault(require("../structs/RBush.js"));

var _Source = _interopRequireDefault(require("./Source.js"));

var _State = _interopRequireDefault(require("./State.js"));

var _VectorEventType = _interopRequireDefault(require("./VectorEventType.js"));

var _functions = require("../functions.js");

var _loadingstrategy = require("../loadingstrategy.js");

var _asserts = require("../asserts.js");

var _extent = require("../extent.js");

var _array = require("../array.js");

var _util = require("../util.js");

var _obj = require("../obj.js");

var _events = require("../events.js");

var _featureloader = require("../featureloader.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/source/Vector
 */
var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * A function that takes an {@link module:ol/extent~Extent} and a resolution as arguments, and
 * returns an array of {@link module:ol/extent~Extent} with the extents to load. Usually this
 * is one of the standard {@link module:ol/loadingstrategy} strategies.
 *
 * @typedef {function(import("../extent.js").Extent, number): Array<import("../extent.js").Extent>} LoadingStrategy
 * @api
 */

/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Vector} instances are instances of this
 * type.
 * @template {import("../geom/Geometry.js").default} Geometry
 */
var VectorSourceEvent =
/** @class */
function (_super) {
  __extends(VectorSourceEvent, _super);
  /**
   * @param {string} type Type.
   * @param {import("../Feature.js").default<Geometry>=} opt_feature Feature.
   */


  function VectorSourceEvent(type, opt_feature) {
    var _this = _super.call(this, type) || this;
    /**
     * The feature being added or removed.
     * @type {import("../Feature.js").default<Geometry>|undefined}
     * @api
     */


    _this.feature = opt_feature;
    return _this;
  }

  return VectorSourceEvent;
}(_Event.default);

exports.VectorSourceEvent = VectorSourceEvent;

/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {Array<import("../Feature.js").default>|Collection<import("../Feature.js").default>} [features]
 * Features. If provided as {@link module:ol/Collection}, the features in the source
 * and the collection will stay in sync.
 * @property {import("../format/Feature.js").default} [format] The feature format used by the XHR
 * feature loader when `url` is set. Required if `url` is set, otherwise ignored.
 * @property {import("../featureloader.js").FeatureLoader} [loader]
 * The loader function used to load features, from a remote source for example.
 * If this is not set and `url` is set, the source will create and use an XHR
 * feature loader.
 *
 * Example:
 *
 * ```js
 * import {Vector} from 'ol/source';
 * import {GeoJSON} from 'ol/format';
 * import {bbox} from 'ol/loadingstrategy';
 *
 * var vectorSource = new Vector({
 *   format: new GeoJSON(),
 *   loader: function(extent, resolution, projection) {
 *      var proj = projection.getCode();
 *      var url = 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
 *          'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
 *          'outputFormat=application/json&srsname=' + proj + '&' +
 *          'bbox=' + extent.join(',') + ',' + proj;
 *      var xhr = new XMLHttpRequest();
 *      xhr.open('GET', url);
 *      var onError = function() {
 *        vectorSource.removeLoadedExtent(extent);
 *      }
 *      xhr.onerror = onError;
 *      xhr.onload = function() {
 *        if (xhr.status == 200) {
 *          vectorSource.addFeatures(
 *              vectorSource.getFormat().readFeatures(xhr.responseText));
 *        } else {
 *          onError();
 *        }
 *      }
 *      xhr.send();
 *    },
 *    strategy: bbox
 *  });
 * ```
 * @property {boolean} [overlaps=true] This source may have overlapping geometries.
 * Setting this to `false` (e.g. for sources with polygons that represent administrative
 * boundaries or TopoJSON sources) allows the renderer to optimise fill and
 * stroke operations.
 * @property {LoadingStrategy} [strategy] The loading strategy to use.
 * By default an {@link module:ol/loadingstrategy~all}
 * strategy is used, a one-off strategy which loads all features at once.
 * @property {string|import("../featureloader.js").FeatureUrlFunction} [url]
 * Setting this option instructs the source to load features using an XHR loader
 * (see {@link module:ol/featureloader~xhr}). Use a `string` and an
 * {@link module:ol/loadingstrategy~all} for a one-off download of all features from
 * the given URL. Use a {@link module:ol/featureloader~FeatureUrlFunction} to generate the url with
 * other loading strategies.
 * Requires `format` to be set as well.
 * When default XHR feature loader is provided, the features will
 * be transformed from the data projection to the view projection
 * during parsing. If your remote data source does not advertise its projection
 * properly, this transformation will be incorrect. For some formats, the
 * default projection (usually EPSG:4326) can be overridden by setting the
 * dataProjection constructor option on the format.
 * Note that if a source contains non-feature data, such as a GeoJSON geometry
 * or a KML NetworkLink, these will be ignored. Use a custom loader to load these.
 * @property {boolean} [useSpatialIndex=true]
 * By default, an RTree is used as spatial index. When features are removed and
 * added frequently, and the total number of features is low, setting this to
 * `false` may improve performance.
 *
 * Note that
 * {@link module:ol/source/Vector~VectorSource#getFeaturesInExtent},
 * {@link module:ol/source/Vector~VectorSource#getClosestFeatureToCoordinate} and
 * {@link module:ol/source/Vector~VectorSource#getExtent} cannot be used when `useSpatialIndex` is
 * set to `false`, and {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent} will loop
 * through all features.
 *
 * When set to `false`, the features will be maintained in an
 * {@link module:ol/Collection}, which can be retrieved through
 * {@link module:ol/source/Vector~VectorSource#getFeaturesCollection}.
 * @property {boolean} [wrapX=true] Wrap the world horizontally. For vector editing across the
 * -180° and 180° meridians to work properly, this should be set to `false`. The
 * resulting geometry coordinates will then exceed the world bounds.
 */

/**
 * @classdesc
 * Provides a source of features for vector layers. Vector features provided
 * by this source are suitable for editing. See {@link module:ol/source/VectorTile~VectorTile} for
 * vector data that is optimized for rendering.
 *
 * @fires VectorSourceEvent
 * @api
 * @template {import("../geom/Geometry.js").default} Geometry
 */
var VectorSource =
/** @class */
function (_super) {
  __extends(VectorSource, _super);
  /**
   * @param {Options=} opt_options Vector source options.
   */


  function VectorSource(opt_options) {
    var _this = this;

    var options = opt_options || {};
    _this = _super.call(this, {
      attributions: options.attributions,
      projection: undefined,
      state: _State.default.READY,
      wrapX: options.wrapX !== undefined ? options.wrapX : true
    }) || this;
    /**
     * @private
     * @type {import("../featureloader.js").FeatureLoader}
     */

    _this.loader_ = _functions.VOID;
    /**
     * @private
     * @type {import("../format/Feature.js").default|undefined}
     */

    _this.format_ = options.format;
    /**
     * @private
     * @type {boolean}
     */

    _this.overlaps_ = options.overlaps === undefined ? true : options.overlaps;
    /**
     * @private
     * @type {string|import("../featureloader.js").FeatureUrlFunction|undefined}
     */

    _this.url_ = options.url;

    if (options.loader !== undefined) {
      _this.loader_ = options.loader;
    } else if (_this.url_ !== undefined) {
      (0, _asserts.assert)(_this.format_, 7); // `format` must be set when `url` is set
      // create a XHR feature loader for "url" and "format"

      _this.loader_ = (0, _featureloader.xhr)(_this.url_,
      /** @type {import("../format/Feature.js").default} */
      _this.format_);
    }
    /**
     * @private
     * @type {LoadingStrategy}
     */


    _this.strategy_ = options.strategy !== undefined ? options.strategy : _loadingstrategy.all;
    var useSpatialIndex = options.useSpatialIndex !== undefined ? options.useSpatialIndex : true;
    /**
     * @private
     * @type {RBush<import("../Feature.js").default<Geometry>>}
     */

    _this.featuresRtree_ = useSpatialIndex ? new _RBush.default() : null;
    /**
     * @private
     * @type {RBush<{extent: import("../extent.js").Extent}>}
     */

    _this.loadedExtentsRtree_ = new _RBush.default();
    /**
     * @private
     * @type {!Object<string, import("../Feature.js").default<Geometry>>}
     */

    _this.nullGeometryFeatures_ = {};
    /**
     * A lookup of features by id (the return from feature.getId()).
     * @private
     * @type {!Object<string, import("../Feature.js").default<Geometry>>}
     */

    _this.idIndex_ = {};
    /**
     * A lookup of features by uid (using getUid(feature)).
     * @private
     * @type {!Object<string, import("../Feature.js").default<Geometry>>}
     */

    _this.uidIndex_ = {};
    /**
     * @private
     * @type {Object<string, Array<import("../events.js").EventsKey>>}
     */

    _this.featureChangeKeys_ = {};
    /**
     * @private
     * @type {Collection<import("../Feature.js").default<Geometry>>}
     */

    _this.featuresCollection_ = null;
    var collection, features;

    if (Array.isArray(options.features)) {
      features = options.features;
    } else if (options.features) {
      collection = options.features;
      features = collection.getArray();
    }

    if (!useSpatialIndex && collection === undefined) {
      collection = new _Collection.default(features);
    }

    if (features !== undefined) {
      _this.addFeaturesInternal(features);
    }

    if (collection !== undefined) {
      _this.bindFeaturesCollection_(collection);
    }

    return _this;
  }
  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * Note: this also applies if an {@link module:ol/Collection} is used for features,
   * meaning that if a feature with a duplicate id is added in the collection, it will
   * be removed from it right away.
   * @param {import("../Feature.js").default<Geometry>} feature Feature to add.
   * @api
   */


  VectorSource.prototype.addFeature = function (feature) {
    this.addFeatureInternal(feature);
    this.changed();
  };
  /**
   * Add a feature without firing a `change` event.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @protected
   */


  VectorSource.prototype.addFeatureInternal = function (feature) {
    var featureKey = (0, _util.getUid)(feature);

    if (!this.addToIndex_(featureKey, feature)) {
      if (this.featuresCollection_) {
        this.featuresCollection_.remove(feature);
      }

      return;
    }

    this.setupChangeEvents_(featureKey, feature);
    var geometry = feature.getGeometry();

    if (geometry) {
      var extent = geometry.getExtent();

      if (this.featuresRtree_) {
        this.featuresRtree_.insert(extent, feature);
      }
    } else {
      this.nullGeometryFeatures_[featureKey] = feature;
    }

    this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.ADDFEATURE, feature));
  };
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @private
   */


  VectorSource.prototype.setupChangeEvents_ = function (featureKey, feature) {
    this.featureChangeKeys_[featureKey] = [(0, _events.listen)(feature, _EventType.default.CHANGE, this.handleFeatureChange_, this), (0, _events.listen)(feature, _ObjectEventType.default.PROPERTYCHANGE, this.handleFeatureChange_, this)];
  };
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */


  VectorSource.prototype.addToIndex_ = function (featureKey, feature) {
    var valid = true;
    var id = feature.getId();

    if (id !== undefined) {
      if (!(id.toString() in this.idIndex_)) {
        this.idIndex_[id.toString()] = feature;
      } else {
        valid = false;
      }
    }

    if (valid) {
      (0, _asserts.assert)(!(featureKey in this.uidIndex_), 30); // The passed `feature` was already added to the source

      this.uidIndex_[featureKey] = feature;
    }

    return valid;
  };
  /**
   * Add a batch of features to the source.
   * @param {Array<import("../Feature.js").default<Geometry>>} features Features to add.
   * @api
   */


  VectorSource.prototype.addFeatures = function (features) {
    this.addFeaturesInternal(features);
    this.changed();
  };
  /**
   * Add features without firing a `change` event.
   * @param {Array<import("../Feature.js").default<Geometry>>} features Features.
   * @protected
   */


  VectorSource.prototype.addFeaturesInternal = function (features) {
    var extents = [];
    var newFeatures = [];
    var geometryFeatures = [];

    for (var i = 0, length_1 = features.length; i < length_1; i++) {
      var feature = features[i];
      var featureKey = (0, _util.getUid)(feature);

      if (this.addToIndex_(featureKey, feature)) {
        newFeatures.push(feature);
      }
    }

    for (var i = 0, length_2 = newFeatures.length; i < length_2; i++) {
      var feature = newFeatures[i];
      var featureKey = (0, _util.getUid)(feature);
      this.setupChangeEvents_(featureKey, feature);
      var geometry = feature.getGeometry();

      if (geometry) {
        var extent = geometry.getExtent();
        extents.push(extent);
        geometryFeatures.push(feature);
      } else {
        this.nullGeometryFeatures_[featureKey] = feature;
      }
    }

    if (this.featuresRtree_) {
      this.featuresRtree_.load(extents, geometryFeatures);
    }

    for (var i = 0, length_3 = newFeatures.length; i < length_3; i++) {
      this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.ADDFEATURE, newFeatures[i]));
    }
  };
  /**
   * @param {!Collection<import("../Feature.js").default<Geometry>>} collection Collection.
   * @private
   */


  VectorSource.prototype.bindFeaturesCollection_ = function (collection) {
    var modifyingCollection = false;
    this.addEventListener(_VectorEventType.default.ADDFEATURE,
    /**
     * @param {VectorSourceEvent<Geometry>} evt The vector source event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        collection.push(evt.feature);
        modifyingCollection = false;
      }
    });
    this.addEventListener(_VectorEventType.default.REMOVEFEATURE,
    /**
     * @param {VectorSourceEvent<Geometry>} evt The vector source event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        collection.remove(evt.feature);
        modifyingCollection = false;
      }
    });
    collection.addEventListener(_CollectionEventType.default.ADD,
    /**
     * @param {import("../Collection.js").CollectionEvent} evt The collection event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        this.addFeature(
        /** @type {import("../Feature.js").default<Geometry>} */
        evt.element);
        modifyingCollection = false;
      }
    }.bind(this));
    collection.addEventListener(_CollectionEventType.default.REMOVE,
    /**
     * @param {import("../Collection.js").CollectionEvent} evt The collection event
     */
    function (evt) {
      if (!modifyingCollection) {
        modifyingCollection = true;
        this.removeFeature(
        /** @type {import("../Feature.js").default<Geometry>} */
        evt.element);
        modifyingCollection = false;
      }
    }.bind(this));
    this.featuresCollection_ = collection;
  };
  /**
   * Remove all features from the source.
   * @param {boolean=} opt_fast Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#removefeature} events.
   * @api
   */


  VectorSource.prototype.clear = function (opt_fast) {
    if (opt_fast) {
      for (var featureId in this.featureChangeKeys_) {
        var keys = this.featureChangeKeys_[featureId];
        keys.forEach(_events.unlistenByKey);
      }

      if (!this.featuresCollection_) {
        this.featureChangeKeys_ = {};
        this.idIndex_ = {};
        this.uidIndex_ = {};
      }
    } else {
      if (this.featuresRtree_) {
        this.featuresRtree_.forEach(this.removeFeatureInternal.bind(this));

        for (var id in this.nullGeometryFeatures_) {
          this.removeFeatureInternal(this.nullGeometryFeatures_[id]);
        }
      }
    }

    if (this.featuresCollection_) {
      this.featuresCollection_.clear();
    }

    if (this.featuresRtree_) {
      this.featuresRtree_.clear();
    }

    this.nullGeometryFeatures_ = {};
    var clearEvent = new VectorSourceEvent(_VectorEventType.default.CLEAR);
    this.dispatchEvent(clearEvent);
    this.changed();
  };
  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */


  VectorSource.prototype.forEachFeature = function (callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEach(callback);
    } else if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  };
  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */


  VectorSource.prototype.forEachFeatureAtCoordinateDirect = function (coordinate, callback) {
    var extent = [coordinate[0], coordinate[1], coordinate[0], coordinate[1]];
    return this.forEachFeatureInExtent(extent, function (feature) {
      var geometry = feature.getGeometry();

      if (geometry.intersectsCoordinate(coordinate)) {
        return callback(feature);
      } else {
        return undefined;
      }
    });
  };
  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */


  VectorSource.prototype.forEachFeatureInExtent = function (extent, callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEachInExtent(extent, callback);
    } else if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  };
  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */


  VectorSource.prototype.forEachFeatureIntersectingExtent = function (extent, callback) {
    return this.forEachFeatureInExtent(extent,
    /**
     * @param {import("../Feature.js").default<Geometry>} feature Feature.
     * @return {T|undefined} The return value from the last call to the callback.
     */
    function (feature) {
      var geometry = feature.getGeometry();

      if (geometry.intersectsExtent(extent)) {
        var result = callback(feature);

        if (result) {
          return result;
        }
      }
    });
  };
  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with an {@link module:ol/Collection} as `features`.
   * @return {Collection<import("../Feature.js").default<Geometry>>} The collection of features.
   * @api
   */


  VectorSource.prototype.getFeaturesCollection = function () {
    return this.featuresCollection_;
  };
  /**
   * Get all features on the source in random order.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */


  VectorSource.prototype.getFeatures = function () {
    var features;

    if (this.featuresCollection_) {
      features = this.featuresCollection_.getArray();
    } else if (this.featuresRtree_) {
      features = this.featuresRtree_.getAll();

      if (!(0, _obj.isEmpty)(this.nullGeometryFeatures_)) {
        (0, _array.extend)(features, (0, _obj.getValues)(this.nullGeometryFeatures_));
      }
    }

    return (
      /** @type {Array<import("../Feature.js").default<Geometry>>} */
      features
    );
  };
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */


  VectorSource.prototype.getFeaturesAtCoordinate = function (coordinate) {
    var features = [];
    this.forEachFeatureAtCoordinateDirect(coordinate, function (feature) {
      features.push(feature);
    });
    return features;
  };
  /**
   * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * When `useSpatialIndex` is set to false, this method will return all
   * features.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */


  VectorSource.prototype.getFeaturesInExtent = function (extent) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.getInExtent(extent);
    } else if (this.featuresCollection_) {
      return this.featuresCollection_.getArray();
    } else {
      return [];
    }
  };
  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default<Geometry>):boolean=} opt_filter Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {import("../Feature.js").default<Geometry>} Closest feature.
   * @api
   */


  VectorSource.prototype.getClosestFeatureToCoordinate = function (coordinate, opt_filter) {
    // Find the closest feature using branch and bound.  We start searching an
    // infinite extent, and find the distance from the first feature found.  This
    // becomes the closest feature.  We then compute a smaller extent which any
    // closer feature must intersect.  We continue searching with this smaller
    // extent, trying to find a closer feature.  Every time we find a closer
    // feature, we update the extent being searched so that any even closer
    // feature must intersect it.  We continue until we run out of features.
    var x = coordinate[0];
    var y = coordinate[1];
    var closestFeature = null;
    var closestPoint = [NaN, NaN];
    var minSquaredDistance = Infinity;
    var extent = [-Infinity, -Infinity, Infinity, Infinity];
    var filter = opt_filter ? opt_filter : _functions.TRUE;
    this.featuresRtree_.forEachInExtent(extent,
    /**
     * @param {import("../Feature.js").default<Geometry>} feature Feature.
     */
    function (feature) {
      if (filter(feature)) {
        var geometry = feature.getGeometry();
        var previousMinSquaredDistance = minSquaredDistance;
        minSquaredDistance = geometry.closestPointXY(x, y, closestPoint, minSquaredDistance);

        if (minSquaredDistance < previousMinSquaredDistance) {
          closestFeature = feature; // This is sneaky.  Reduce the extent that it is currently being
          // searched while the R-Tree traversal using this same extent object
          // is still in progress.  This is safe because the new extent is
          // strictly contained by the old extent.

          var minDistance = Math.sqrt(minSquaredDistance);
          extent[0] = x - minDistance;
          extent[1] = y - minDistance;
          extent[2] = x + minDistance;
          extent[3] = y + minDistance;
        }
      }
    });
    return closestFeature;
  };
  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent=} opt_extent Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */


  VectorSource.prototype.getExtent = function (opt_extent) {
    return this.featuresRtree_.getExtent(opt_extent);
  };
  /**
   * Get a feature by its identifier (the value returned by feature.getId()).
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {import("../Feature.js").default<Geometry>} The feature (or `null` if not found).
   * @api
   */


  VectorSource.prototype.getFeatureById = function (id) {
    var feature = this.idIndex_[id.toString()];
    return feature !== undefined ? feature : null;
  };
  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {import("../Feature.js").default<Geometry>} The feature (or `null` if not found).
   */


  VectorSource.prototype.getFeatureByUid = function (uid) {
    var feature = this.uidIndex_[uid];
    return feature !== undefined ? feature : null;
  };
  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default|undefined} The feature format.
   * @api
   */


  VectorSource.prototype.getFormat = function () {
    return this.format_;
  };
  /**
   * @return {boolean} The source can have overlapping geometries.
   */


  VectorSource.prototype.getOverlaps = function () {
    return this.overlaps_;
  };
  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */


  VectorSource.prototype.getUrl = function () {
    return this.url_;
  };
  /**
   * @param {Event} event Event.
   * @private
   */


  VectorSource.prototype.handleFeatureChange_ = function (event) {
    var feature =
    /** @type {import("../Feature.js").default<Geometry>} */
    event.target;
    var featureKey = (0, _util.getUid)(feature);
    var geometry = feature.getGeometry();

    if (!geometry) {
      if (!(featureKey in this.nullGeometryFeatures_)) {
        if (this.featuresRtree_) {
          this.featuresRtree_.remove(feature);
        }

        this.nullGeometryFeatures_[featureKey] = feature;
      }
    } else {
      var extent = geometry.getExtent();

      if (featureKey in this.nullGeometryFeatures_) {
        delete this.nullGeometryFeatures_[featureKey];

        if (this.featuresRtree_) {
          this.featuresRtree_.insert(extent, feature);
        }
      } else {
        if (this.featuresRtree_) {
          this.featuresRtree_.update(extent, feature);
        }
      }
    }

    var id = feature.getId();

    if (id !== undefined) {
      var sid = id.toString();

      if (this.idIndex_[sid] !== feature) {
        this.removeFromIdIndex_(feature);
        this.idIndex_[sid] = feature;
      }
    } else {
      this.removeFromIdIndex_(feature);
      this.uidIndex_[featureKey] = feature;
    }

    this.changed();
    this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.CHANGEFEATURE, feature));
  };
  /**
   * Returns true if the feature is contained within the source.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */


  VectorSource.prototype.hasFeature = function (feature) {
    var id = feature.getId();

    if (id !== undefined) {
      return id in this.idIndex_;
    } else {
      return (0, _util.getUid)(feature) in this.uidIndex_;
    }
  };
  /**
   * @return {boolean} Is empty.
   */


  VectorSource.prototype.isEmpty = function () {
    return this.featuresRtree_.isEmpty() && (0, _obj.isEmpty)(this.nullGeometryFeatures_);
  };
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */


  VectorSource.prototype.loadFeatures = function (extent, resolution, projection) {
    var loadedExtentsRtree = this.loadedExtentsRtree_;
    var extentsToLoad = this.strategy_(extent, resolution);
    this.loading = false;

    var _loop_1 = function _loop_1(i, ii) {
      var extentToLoad = extentsToLoad[i];
      var alreadyLoaded = loadedExtentsRtree.forEachInExtent(extentToLoad,
      /**
       * @param {{extent: import("../extent.js").Extent}} object Object.
       * @return {boolean} Contains.
       */
      function (object) {
        return (0, _extent.containsExtent)(object.extent, extentToLoad);
      });

      if (!alreadyLoaded) {
        this_1.loader_.call(this_1, extentToLoad, resolution, projection);
        loadedExtentsRtree.insert(extentToLoad, {
          extent: extentToLoad.slice()
        });
        this_1.loading = this_1.loader_ !== _functions.VOID;
      }
    };

    var this_1 = this;

    for (var i = 0, ii = extentsToLoad.length; i < ii; ++i) {
      _loop_1(i, ii);
    }
  };

  VectorSource.prototype.refresh = function () {
    this.clear(true);
    this.loadedExtentsRtree_.clear();

    _super.prototype.refresh.call(this);
  };
  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */


  VectorSource.prototype.removeLoadedExtent = function (extent) {
    var loadedExtentsRtree = this.loadedExtentsRtree_;
    var obj;
    loadedExtentsRtree.forEachInExtent(extent, function (object) {
      if ((0, _extent.equals)(object.extent, extent)) {
        obj = object;
        return true;
      }
    });

    if (obj) {
      loadedExtentsRtree.remove(obj);
    }
  };
  /**
   * Remove a single feature from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {import("../Feature.js").default<Geometry>} feature Feature to remove.
   * @api
   */


  VectorSource.prototype.removeFeature = function (feature) {
    var featureKey = (0, _util.getUid)(feature);

    if (featureKey in this.nullGeometryFeatures_) {
      delete this.nullGeometryFeatures_[featureKey];
    } else {
      if (this.featuresRtree_) {
        this.featuresRtree_.remove(feature);
      }
    }

    this.removeFeatureInternal(feature);
    this.changed();
  };
  /**
   * Remove feature without firing a `change` event.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @protected
   */


  VectorSource.prototype.removeFeatureInternal = function (feature) {
    var featureKey = (0, _util.getUid)(feature);
    this.featureChangeKeys_[featureKey].forEach(_events.unlistenByKey);
    delete this.featureChangeKeys_[featureKey];
    var id = feature.getId();

    if (id !== undefined) {
      delete this.idIndex_[id.toString()];
    }

    delete this.uidIndex_[featureKey];
    this.dispatchEvent(new VectorSourceEvent(_VectorEventType.default.REMOVEFEATURE, feature));
  };
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @return {boolean} Removed the feature from the index.
   * @private
   */


  VectorSource.prototype.removeFromIdIndex_ = function (feature) {
    var removed = false;

    for (var id in this.idIndex_) {
      if (this.idIndex_[id] === feature) {
        delete this.idIndex_[id];
        removed = true;
        break;
      }
    }

    return removed;
  };
  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */


  VectorSource.prototype.setLoader = function (loader) {
    this.loader_ = loader;
  };
  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */


  VectorSource.prototype.setUrl = function (url) {
    (0, _asserts.assert)(this.format_, 7); // `format` must be set when `url` is set

    this.setLoader((0, _featureloader.xhr)(url, this.format_));
  };

  return VectorSource;
}(_Source.default);

var _default = VectorSource;
exports.default = _default;
},{"../Collection.js":"ol/Collection.js","../CollectionEventType.js":"ol/CollectionEventType.js","../events/Event.js":"ol/events/Event.js","../events/EventType.js":"ol/events/EventType.js","../ObjectEventType.js":"ol/ObjectEventType.js","../structs/RBush.js":"ol/structs/RBush.js","./Source.js":"ol/source/Source.js","./State.js":"ol/source/State.js","./VectorEventType.js":"ol/source/VectorEventType.js","../functions.js":"ol/functions.js","../loadingstrategy.js":"ol/loadingstrategy.js","../asserts.js":"ol/asserts.js","../extent.js":"ol/extent.js","../array.js":"ol/array.js","../util.js":"ol/util.js","../obj.js":"ol/obj.js","../events.js":"ol/events.js","../featureloader.js":"ol/featureloader.js"}],"ol/events/condition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.primaryAction = exports.penOnly = exports.touchOnly = exports.mouseOnly = exports.targetNotEditable = exports.shiftKeyOnly = exports.platformModifierKeyOnly = exports.noModifierKeys = exports.doubleClick = exports.singleClick = exports.pointerMove = exports.never = exports.mouseActionButton = exports.click = exports.always = exports.focusWithTabindex = exports.focus = exports.altShiftKeysOnly = exports.altKeyOnly = void 0;

var _MapBrowserEventType = _interopRequireDefault(require("../MapBrowserEventType.js"));

var _functions = require("../functions.js");

var _has = require("../has.js");

var _asserts = require("../asserts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module ol/events/condition
 */

/**
 * A function that takes an {@link module:ol/MapBrowserEvent} and returns a
 * `{boolean}`. If the condition is met, true should be returned.
 *
 * @typedef {function(this: ?, import("../MapBrowserEvent.js").default): boolean} Condition
 */

/**
 * Creates a condition function that passes when all provided conditions pass.
 * @param {...Condition} var_args Conditions to check.
 * @return {Condition} Condition function.
 */
function all(var_args) {
  var conditions = arguments;
  /**
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @return {boolean} All conditions passed.
   */

  return function (event) {
    var pass = true;

    for (var i = 0, ii = conditions.length; i < ii; ++i) {
      pass = pass && conditions[i](event);

      if (!pass) {
        break;
      }
    }

    return pass;
  };
}
/**
 * Return `true` if only the alt-key is pressed, `false` otherwise (e.g. when
 * additionally the shift-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the alt key is pressed.
 * @api
 */


var altKeyOnly = function altKeyOnly(mapBrowserEvent) {
  var originalEvent =
  /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
  mapBrowserEvent.originalEvent;
  return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
/**
 * Return `true` if only the alt-key and shift-key is pressed, `false` otherwise
 * (e.g. when additionally the platform-modifier-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the alt and shift keys are pressed.
 * @api
 */


exports.altKeyOnly = altKeyOnly;

var altShiftKeysOnly = function altShiftKeysOnly(mapBrowserEvent) {
  var originalEvent =
  /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
  mapBrowserEvent.originalEvent;
  return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
/**
 * Return `true` if the map has the focus. This condition requires a map target
 * element with a `tabindex` attribute, e.g. `<div id="map" tabindex="1">`.
 *
 * @param {import("../MapBrowserEvent.js").default} event Map browser event.
 * @return {boolean} The map has the focus.
 * @api
 */


exports.altShiftKeysOnly = altShiftKeysOnly;

var focus = function focus(event) {
  return event.target.getTargetElement().contains(document.activeElement);
};
/**
 * Return `true` if the map has the focus or no 'tabindex' attribute set.
 *
 * @param {import("../MapBrowserEvent.js").default} event Map browser event.
 * @return {boolean} The map container has the focus or no 'tabindex' attribute.
 */


exports.focus = focus;

var focusWithTabindex = function focusWithTabindex(event) {
  return event.map.getTargetElement().hasAttribute('tabindex') ? focus(event) : true;
};
/**
 * Return always true.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True.
 * @api
 */


exports.focusWithTabindex = focusWithTabindex;
var always = _functions.TRUE;
/**
 * Return `true` if the event is a `click` event, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `click` event.
 * @api
 */

exports.always = always;

var click = function click(mapBrowserEvent) {
  return mapBrowserEvent.type == _MapBrowserEventType.default.CLICK;
};
/**
 * Return `true` if the event has an "action"-producing mouse button.
 *
 * By definition, this includes left-click on windows/linux, and left-click
 * without the ctrl key on Macs.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} The result.
 */


exports.click = click;

var mouseActionButton = function mouseActionButton(mapBrowserEvent) {
  var originalEvent =
  /** @type {MouseEvent} */
  mapBrowserEvent.originalEvent;
  return originalEvent.button == 0 && !(_has.WEBKIT && _has.MAC && originalEvent.ctrlKey);
};
/**
 * Return always false.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} False.
 * @api
 */


exports.mouseActionButton = mouseActionButton;
var never = _functions.FALSE;
/**
 * Return `true` if the browser event is a `pointermove` event, `false`
 * otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the browser event is a `pointermove` event.
 * @api
 */

exports.never = never;

var pointerMove = function pointerMove(mapBrowserEvent) {
  return mapBrowserEvent.type == 'pointermove';
};
/**
 * Return `true` if the event is a map `singleclick` event, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `singleclick` event.
 * @api
 */


exports.pointerMove = pointerMove;

var singleClick = function singleClick(mapBrowserEvent) {
  return mapBrowserEvent.type == _MapBrowserEventType.default.SINGLECLICK;
};
/**
 * Return `true` if the event is a map `dblclick` event, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `dblclick` event.
 * @api
 */


exports.singleClick = singleClick;

var doubleClick = function doubleClick(mapBrowserEvent) {
  return mapBrowserEvent.type == _MapBrowserEventType.default.DBLCLICK;
};
/**
 * Return `true` if no modifier key (alt-, shift- or platform-modifier-key) is
 * pressed.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True only if there no modifier keys are pressed.
 * @api
 */


exports.doubleClick = doubleClick;

var noModifierKeys = function noModifierKeys(mapBrowserEvent) {
  var originalEvent =
  /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
  mapBrowserEvent.originalEvent;
  return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
/**
 * Return `true` if only the platform-modifier-key (the meta-key on Mac,
 * ctrl-key otherwise) is pressed, `false` otherwise (e.g. when additionally
 * the shift-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the platform modifier key is pressed.
 * @api
 */


exports.noModifierKeys = noModifierKeys;

var platformModifierKeyOnly = function platformModifierKeyOnly(mapBrowserEvent) {
  var originalEvent =
  /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
  mapBrowserEvent.originalEvent;
  return !originalEvent.altKey && (_has.MAC ? originalEvent.metaKey : originalEvent.ctrlKey) && !originalEvent.shiftKey;
};
/**
 * Return `true` if only the shift-key is pressed, `false` otherwise (e.g. when
 * additionally the alt-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the shift key is pressed.
 * @api
 */


exports.platformModifierKeyOnly = platformModifierKeyOnly;

var shiftKeyOnly = function shiftKeyOnly(mapBrowserEvent) {
  var originalEvent =
  /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
  mapBrowserEvent.originalEvent;
  return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
};
/**
 * Return `true` if the target element is not editable, i.e. not a `<input>`-,
 * `<select>`- or `<textarea>`-element, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True only if the target element is not editable.
 * @api
 */


exports.shiftKeyOnly = shiftKeyOnly;

var targetNotEditable = function targetNotEditable(mapBrowserEvent) {
  var originalEvent =
  /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
  mapBrowserEvent.originalEvent;
  var tagName =
  /** @type {Element} */
  originalEvent.target.tagName;
  return tagName !== 'INPUT' && tagName !== 'SELECT' && tagName !== 'TEXTAREA';
};
/**
 * Return `true` if the event originates from a mouse device.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a mouse device.
 * @api
 */


exports.targetNotEditable = targetNotEditable;

var mouseOnly = function mouseOnly(mapBrowserEvent) {
  var pointerEvent =
  /** @type {import("../MapBrowserEvent").default} */
  mapBrowserEvent.originalEvent;
  (0, _asserts.assert)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
  // see http://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType

  return pointerEvent.pointerType == 'mouse';
};
/**
 * Return `true` if the event originates from a touchable device.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a touchable device.
 * @api
 */


exports.mouseOnly = mouseOnly;

var touchOnly = function touchOnly(mapBrowserEvent) {
  var pointerEvt =
  /** @type {import("../MapBrowserEvent").default} */
  mapBrowserEvent.originalEvent;
  (0, _asserts.assert)(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
  // see http://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType

  return pointerEvt.pointerType === 'touch';
};
/**
 * Return `true` if the event originates from a digital pen.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a digital pen.
 * @api
 */


exports.touchOnly = touchOnly;

var penOnly = function penOnly(mapBrowserEvent) {
  var pointerEvt =
  /** @type {import("../MapBrowserEvent").default} */
  mapBrowserEvent.originalEvent;
  (0, _asserts.assert)(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
  // see http://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType

  return pointerEvt.pointerType === 'pen';
};
/**
 * Return `true` if the event originates from a primary pointer in
 * contact with the surface or if the left mouse button is pressed.
 * See http://www.w3.org/TR/pointerevents/#button-states.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a primary pointer.
 * @api
 */


exports.penOnly = penOnly;

var primaryAction = function primaryAction(mapBrowserEvent) {
  var pointerEvent =
  /** @type {import("../MapBrowserEvent").default} */
  mapBrowserEvent.originalEvent;
  (0, _asserts.assert)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event

  return pointerEvent.isPrimary && pointerEvent.button === 0;
};

exports.primaryAction = primaryAction;
},{"../MapBrowserEventType.js":"ol/MapBrowserEventType.js","../functions.js":"ol/functions.js","../has.js":"ol/has.js","../asserts.js":"ol/asserts.js"}],"ol/interaction/Draw.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegularPolygon = createRegularPolygon;
exports.createBox = createBox;
exports.default = void 0;

var _Circle = _interopRequireDefault(require("../geom/Circle.js"));

var _Event = _interopRequireDefault(require("../events/Event.js"));

var _EventType = _interopRequireDefault(require("../events/EventType.js"));

var _Feature = _interopRequireDefault(require("../Feature.js"));

var _GeometryType = _interopRequireDefault(require("../geom/GeometryType.js"));

var _Property = _interopRequireDefault(require("./Property.js"));

var _LineString = _interopRequireDefault(require("../geom/LineString.js"));

var _MapBrowserEvent = _interopRequireDefault(require("../MapBrowserEvent.js"));

var _MapBrowserEventType = _interopRequireDefault(require("../MapBrowserEventType.js"));

var _MultiLineString = _interopRequireDefault(require("../geom/MultiLineString.js"));

var _MultiPoint = _interopRequireDefault(require("../geom/MultiPoint.js"));

var _MultiPolygon = _interopRequireDefault(require("../geom/MultiPolygon.js"));

var _Point = _interopRequireDefault(require("../geom/Point.js"));

var _Pointer = _interopRequireDefault(require("./Pointer.js"));

var _Polygon = _interopRequireWildcard(require("../geom/Polygon.js"));

var _Vector = _interopRequireDefault(require("../layer/Vector.js"));

var _Vector2 = _interopRequireDefault(require("../source/Vector.js"));

var _functions = require("../functions.js");

var _condition = require("../events/condition.js");

var _extent = require("../extent.js");

var _Style = require("../style/Style.js");

var _proj = require("../proj.js");

var _Object = require("../Object.js");

var _coordinate = require("../coordinate.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @module ol/interaction/Draw
 */


/**
 * @typedef {Object} Options
 * @property {import("../geom/GeometryType.js").default} type Geometry type of
 * the geometries being drawn with this instance.
 * @property {number} [clickTolerance=6] The maximum distance in pixels between
 * "down" and "up" for a "up" event to be considered a "click" event and
 * actually add a point/vertex to the geometry being drawn.  The default of `6`
 * was chosen for the draw interaction to behave correctly on mouse as well as
 * on touch devices.
 * @property {import("../Collection.js").default<Feature>} [features]
 * Destination collection for the drawn features.
 * @property {VectorSource} [source] Destination source for
 * the drawn features.
 * @property {number} [dragVertexDelay=500] Delay in milliseconds after pointerdown
 * before the current vertex can be dragged to its exact position.
 * @property {number} [snapTolerance=12] Pixel distance for snapping to the
 * drawing finish.
 * @property {boolean} [stopClick=false] Stop click, singleclick, and
 * doubleclick events from firing during drawing.
 * @property {number} [maxPoints] The number of points that can be drawn before
 * a polygon ring or line string is finished. By default there is no
 * restriction.
 * @property {number} [minPoints] The number of points that must be drawn
 * before a polygon ring or line string can be finished. Default is `3` for
 * polygon rings and `2` for line strings.
 * @property {import("../events/condition.js").Condition} [finishCondition] A function
 * that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether the drawing can be finished.
 * @property {import("../style/Style.js").StyleLike} [style]
 * Style for sketch features.
 * @property {GeometryFunction} [geometryFunction]
 * Function that is called when a geometry's coordinates are updated.
 * @property {string} [geometryName] Geometry name to use for features created
 * by the draw interaction.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled.
 * By default {@link module:ol/events/condition~noModifierKeys}, i.e. a click,
 * adds a vertex or deactivates freehand drawing.
 * @property {boolean} [freehand=false] Operate in freehand mode for lines,
 * polygons, and circles.  This makes the interaction always operate in freehand
 * mode and takes precedence over any `freehandCondition` option.
 * @property {import("../events/condition.js").Condition} [freehandCondition]
 * Condition that activates freehand drawing for lines and polygons. This
 * function takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and
 * returns a boolean to indicate whether that event should be handled. The
 * default is {@link module:ol/events/condition~shiftKeyOnly}, meaning that the
 * Shift key activates freehand drawing.
 * @property {boolean} [wrapX=false] Wrap the world horizontally on the sketch
 * overlay.
 */

/**
 * Coordinate type when drawing points.
 * @typedef {import("../coordinate.js").Coordinate} PointCoordType
 */

/**
 * Coordinate type when drawing lines.
 * @typedef {Array<import("../coordinate.js").Coordinate>} LineCoordType
 */

/**
 * Coordinate type when drawing polygons.
 * @typedef {Array<Array<import("../coordinate.js").Coordinate>>} PolyCoordType
 */

/**
 * Types used for drawing coordinates.
 * @typedef {PointCoordType|LineCoordType|PolyCoordType} SketchCoordType
 */

/**
 * Function that takes an array of coordinates and an optional existing geometry
 * and a projection as arguments, and returns a geometry. The optional existing
 * geometry is the geometry that is returned when the function is called without
 * a second argument.
 * @typedef {function(!SketchCoordType, import("../geom/SimpleGeometry.js").default=,
 *     import("../proj/Projection.js").default=):
 *     import("../geom/SimpleGeometry.js").default} GeometryFunction
 */

/**
 * Draw mode.  This collapses multi-part geometry types with their single-part
 * cousins.
 * @enum {string}
 */
var Mode = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  POLYGON: 'Polygon',
  CIRCLE: 'Circle'
};
/**
 * @enum {string}
 */

var DrawEventType = {
  /**
   * Triggered upon feature draw start
   * @event DrawEvent#drawstart
   * @api
   */
  DRAWSTART: 'drawstart',

  /**
   * Triggered upon feature draw end
   * @event DrawEvent#drawend
   * @api
   */
  DRAWEND: 'drawend',

  /**
   * Triggered upon feature draw abortion
   * @event DrawEvent#drawabort
   * @api
   */
  DRAWABORT: 'drawabort'
};
/**
 * @classdesc
 * Events emitted by {@link module:ol/interaction/Draw~Draw} instances are
 * instances of this type.
 */

var DrawEvent =
/** @class */
function (_super) {
  __extends(DrawEvent, _super);
  /**
   * @param {DrawEventType} type Type.
   * @param {Feature} feature The feature drawn.
   */


  function DrawEvent(type, feature) {
    var _this = _super.call(this, type) || this;
    /**
     * The feature being drawn.
     * @type {Feature}
     * @api
     */


    _this.feature = feature;
    return _this;
  }

  return DrawEvent;
}(_Event.default);
/**
 * @classdesc
 * Interaction for drawing feature geometries.
 *
 * @fires DrawEvent
 * @api
 */


var Draw =
/** @class */
function (_super) {
  __extends(Draw, _super);
  /**
   * @param {Options} options Options.
   */


  function Draw(options) {
    var _this = this;

    var pointerOptions =
    /** @type {import("./Pointer.js").Options} */
    options;

    if (!pointerOptions.stopDown) {
      pointerOptions.stopDown = _functions.FALSE;
    }

    _this = _super.call(this, pointerOptions) || this;
    /**
     * @type {boolean}
     * @private
     */

    _this.shouldHandle_ = false;
    /**
     * @type {import("../pixel.js").Pixel}
     * @private
     */

    _this.downPx_ = null;
    /**
     * @type {?}
     * @private
     */

    _this.downTimeout_;
    /**
     * @type {number|undefined}
     * @private
     */

    _this.lastDragTime_;
    /**
     * @type {boolean}
     * @private
     */

    _this.freehand_ = false;
    /**
     * Target source for drawn features.
     * @type {VectorSource}
     * @private
     */

    _this.source_ = options.source ? options.source : null;
    /**
     * Target collection for drawn features.
     * @type {import("../Collection.js").default<Feature>}
     * @private
     */

    _this.features_ = options.features ? options.features : null;
    /**
     * Pixel distance for snapping.
     * @type {number}
     * @private
     */

    _this.snapTolerance_ = options.snapTolerance ? options.snapTolerance : 12;
    /**
     * Geometry type.
     * @type {import("../geom/GeometryType.js").default}
     * @private
     */

    _this.type_ =
    /** @type {import("../geom/GeometryType.js").default} */
    options.type;
    /**
     * Drawing mode (derived from geometry type.
     * @type {Mode}
     * @private
     */

    _this.mode_ = getMode(_this.type_);
    /**
     * Stop click, singleclick, and doubleclick events from firing during drawing.
     * Default is `false`.
     * @type {boolean}
     * @private
     */

    _this.stopClick_ = !!options.stopClick;
    /**
     * The number of points that must be drawn before a polygon ring or line
     * string can be finished.  The default is 3 for polygon rings and 2 for
     * line strings.
     * @type {number}
     * @private
     */

    _this.minPoints_ = options.minPoints ? options.minPoints : _this.mode_ === Mode.POLYGON ? 3 : 2;
    /**
     * The number of points that can be drawn before a polygon ring or line string
     * is finished. The default is no restriction.
     * @type {number}
     * @private
     */

    _this.maxPoints_ = options.maxPoints ? options.maxPoints : Infinity;
    /**
     * A function to decide if a potential finish coordinate is permissible
     * @private
     * @type {import("../events/condition.js").Condition}
     */

    _this.finishCondition_ = options.finishCondition ? options.finishCondition : _functions.TRUE;
    var geometryFunction = options.geometryFunction;

    if (!geometryFunction) {
      if (_this.type_ === _GeometryType.default.CIRCLE) {
        /**
         * @param {!LineCoordType} coordinates The coordinates.
         * @param {import("../geom/SimpleGeometry.js").default=} opt_geometry Optional geometry.
         * @param {import("../proj/Projection.js").default} projection The view projection.
         * @return {import("../geom/SimpleGeometry.js").default} A geometry.
         */
        geometryFunction = function geometryFunction(coordinates, opt_geometry, projection) {
          var circle = opt_geometry ?
          /** @type {Circle} */
          opt_geometry : new _Circle.default([NaN, NaN]);
          var center = (0, _proj.fromUserCoordinate)(coordinates[0], projection);
          var squaredLength = (0, _coordinate.squaredDistance)(center, (0, _proj.fromUserCoordinate)(coordinates[1], projection));
          circle.setCenterAndRadius(center, Math.sqrt(squaredLength));
          var userProjection = (0, _proj.getUserProjection)();

          if (userProjection) {
            circle.transform(projection, userProjection);
          }

          return circle;
        };
      } else {
        var Constructor_1;
        var mode_1 = _this.mode_;

        if (mode_1 === Mode.POINT) {
          Constructor_1 = _Point.default;
        } else if (mode_1 === Mode.LINE_STRING) {
          Constructor_1 = _LineString.default;
        } else if (mode_1 === Mode.POLYGON) {
          Constructor_1 = _Polygon.default;
        }
        /**
         * @param {!LineCoordType} coordinates The coordinates.
         * @param {import("../geom/SimpleGeometry.js").default=} opt_geometry Optional geometry.
         * @param {import("../proj/Projection.js").default} projection The view projection.
         * @return {import("../geom/SimpleGeometry.js").default} A geometry.
         */


        geometryFunction = function geometryFunction(coordinates, opt_geometry, projection) {
          var geometry = opt_geometry;

          if (geometry) {
            if (mode_1 === Mode.POLYGON) {
              if (coordinates[0].length) {
                // Add a closing coordinate to match the first
                geometry.setCoordinates([coordinates[0].concat([coordinates[0][0]])]);
              } else {
                geometry.setCoordinates([]);
              }
            } else {
              geometry.setCoordinates(coordinates);
            }
          } else {
            geometry = new Constructor_1(coordinates);
          }

          return geometry;
        };
      }
    }
    /**
     * @type {GeometryFunction}
     * @private
     */


    _this.geometryFunction_ = geometryFunction;
    /**
     * @type {number}
     * @private
     */

    _this.dragVertexDelay_ = options.dragVertexDelay !== undefined ? options.dragVertexDelay : 500;
    /**
     * Finish coordinate for the feature (first point for polygons, last point for
     * linestrings).
     * @type {import("../coordinate.js").Coordinate}
     * @private
     */

    _this.finishCoordinate_ = null;
    /**
     * Sketch feature.
     * @type {Feature}
     * @private
     */

    _this.sketchFeature_ = null;
    /**
     * Sketch point.
     * @type {Feature<Point>}
     * @private
     */

    _this.sketchPoint_ = null;
    /**
     * Sketch coordinates. Used when drawing a line or polygon.
     * @type {SketchCoordType}
     * @private
     */

    _this.sketchCoords_ = null;
    /**
     * Sketch line. Used when drawing polygon.
     * @type {Feature<LineString>}
     * @private
     */

    _this.sketchLine_ = null;
    /**
     * Sketch line coordinates. Used when drawing a polygon or circle.
     * @type {LineCoordType}
     * @private
     */

    _this.sketchLineCoords_ = null;
    /**
     * Squared tolerance for handling up events.  If the squared distance
     * between a down and up event is greater than this tolerance, up events
     * will not be handled.
     * @type {number}
     * @private
     */

    _this.squaredClickTolerance_ = options.clickTolerance ? options.clickTolerance * options.clickTolerance : 36;
    /**
     * Draw overlay where our sketch features are drawn.
     * @type {VectorLayer}
     * @private
     */

    _this.overlay_ = new _Vector.default({
      source: new _Vector2.default({
        useSpatialIndex: false,
        wrapX: options.wrapX ? options.wrapX : false
      }),
      style: options.style ? options.style : getDefaultStyleFunction(),
      updateWhileInteracting: true
    });
    /**
     * Name of the geometry attribute for newly created features.
     * @type {string|undefined}
     * @private
     */

    _this.geometryName_ = options.geometryName;
    /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */

    _this.condition_ = options.condition ? options.condition : _condition.noModifierKeys;
    /**
     * @private
     * @type {import("../events/condition.js").Condition}
     */

    _this.freehandCondition_;

    if (options.freehand) {
      _this.freehandCondition_ = _condition.always;
    } else {
      _this.freehandCondition_ = options.freehandCondition ? options.freehandCondition : _condition.shiftKeyOnly;
    }

    _this.addEventListener((0, _Object.getChangeEventType)(_Property.default.ACTIVE), _this.updateState_);

    return _this;
  }
  /**
   * Remove the interaction from its current map and attach it to the new map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../PluggableMap.js").default} map Map.
   */


  Draw.prototype.setMap = function (map) {
    _super.prototype.setMap.call(this, map);

    this.updateState_();
  };
  /**
   * Get the overlay layer that this interaction renders sketch features to.
   * @return {VectorLayer} Overlay layer.
   * @api
   */


  Draw.prototype.getOverlay = function () {
    return this.overlay_;
  };
  /**
   * Handles the {@link module:ol/MapBrowserEvent map browser event} and may actually draw or finish the drawing.
   * @param {import("../MapBrowserEvent.js").default} event Map browser event.
   * @return {boolean} `false` to stop event propagation.
   * @api
   */


  Draw.prototype.handleEvent = function (event) {
    if (event.originalEvent.type === _EventType.default.CONTEXTMENU) {
      // Avoid context menu for long taps when drawing on mobile
      event.preventDefault();
    }

    this.freehand_ = this.mode_ !== Mode.POINT && this.freehandCondition_(event);
    var move = event.type === _MapBrowserEventType.default.POINTERMOVE;
    var pass = true;

    if (!this.freehand_ && this.lastDragTime_ && event.type === _MapBrowserEventType.default.POINTERDRAG) {
      var now = Date.now();

      if (now - this.lastDragTime_ >= this.dragVertexDelay_) {
        this.downPx_ = event.pixel;
        this.shouldHandle_ = !this.freehand_;
        move = true;
      } else {
        this.lastDragTime_ = undefined;
      }

      if (this.shouldHandle_ && this.downTimeout_ !== undefined) {
        clearTimeout(this.downTimeout_);
        this.downTimeout_ = undefined;
      }
    }

    if (this.freehand_ && event.type === _MapBrowserEventType.default.POINTERDRAG && this.sketchFeature_ !== null) {
      this.addToDrawing_(event.coordinate);
      pass = false;
    } else if (this.freehand_ && event.type === _MapBrowserEventType.default.POINTERDOWN) {
      pass = false;
    } else if (move) {
      pass = event.type === _MapBrowserEventType.default.POINTERMOVE;

      if (pass && this.freehand_) {
        this.handlePointerMove_(event);

        if (this.shouldHandle_) {
          // Avoid page scrolling when freehand drawing on mobile
          event.preventDefault();
        }
      } else if (event.originalEvent.pointerType == 'mouse' || event.type === _MapBrowserEventType.default.POINTERDRAG && this.downTimeout_ === undefined) {
        this.handlePointerMove_(event);
      }
    } else if (event.type === _MapBrowserEventType.default.DBLCLICK) {
      pass = false;
    }

    return _super.prototype.handleEvent.call(this, event) && pass;
  };
  /**
   * Handle pointer down events.
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @return {boolean} If the event was consumed.
   */


  Draw.prototype.handleDownEvent = function (event) {
    this.shouldHandle_ = !this.freehand_;

    if (this.freehand_) {
      this.downPx_ = event.pixel;

      if (!this.finishCoordinate_) {
        this.startDrawing_(event);
      }

      return true;
    } else if (this.condition_(event)) {
      this.lastDragTime_ = Date.now();
      this.downTimeout_ = setTimeout(function () {
        this.handlePointerMove_(new _MapBrowserEvent.default(_MapBrowserEventType.default.POINTERMOVE, event.map, event.originalEvent, false, event.frameState));
      }.bind(this), this.dragVertexDelay_);
      this.downPx_ = event.pixel;
      return true;
    } else {
      this.lastDragTime_ = undefined;
      return false;
    }
  };
  /**
   * Handle pointer up events.
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @return {boolean} If the event was consumed.
   */


  Draw.prototype.handleUpEvent = function (event) {
    var pass = true;

    if (this.downTimeout_) {
      clearTimeout(this.downTimeout_);
      this.downTimeout_ = undefined;
    }

    this.handlePointerMove_(event);
    var circleMode = this.mode_ === Mode.CIRCLE;

    if (this.shouldHandle_) {
      if (!this.finishCoordinate_) {
        this.startDrawing_(event);

        if (this.mode_ === Mode.POINT) {
          this.finishDrawing();
        }
      } else if (this.freehand_ || circleMode) {
        this.finishDrawing();
      } else if (this.atFinish_(event)) {
        if (this.finishCondition_(event)) {
          this.finishDrawing();
        }
      } else {
        this.addToDrawing_(event.coordinate);
      }

      pass = false;
    } else if (this.freehand_) {
      this.abortDrawing();
    }

    if (!pass && this.stopClick_) {
      event.stopPropagation();
    }

    return pass;
  };
  /**
   * Handle move events.
   * @param {import("../MapBrowserEvent.js").default} event A move event.
   * @private
   */


  Draw.prototype.handlePointerMove_ = function (event) {
    if (this.downPx_ && (!this.freehand_ && this.shouldHandle_ || this.freehand_ && !this.shouldHandle_)) {
      var downPx = this.downPx_;
      var clickPx = event.pixel;
      var dx = downPx[0] - clickPx[0];
      var dy = downPx[1] - clickPx[1];
      var squaredDistance = dx * dx + dy * dy;
      this.shouldHandle_ = this.freehand_ ? squaredDistance > this.squaredClickTolerance_ : squaredDistance <= this.squaredClickTolerance_;

      if (!this.shouldHandle_) {
        return;
      }
    }

    if (this.finishCoordinate_) {
      this.modifyDrawing_(event);
    } else {
      this.createOrUpdateSketchPoint_(event);
    }
  };
  /**
   * Determine if an event is within the snapping tolerance of the start coord.
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @return {boolean} The event is within the snapping tolerance of the start.
   * @private
   */


  Draw.prototype.atFinish_ = function (event) {
    var at = false;

    if (this.sketchFeature_) {
      var potentiallyDone = false;
      var potentiallyFinishCoordinates = [this.finishCoordinate_];

      if (this.mode_ === Mode.LINE_STRING) {
        potentiallyDone = this.sketchCoords_.length > this.minPoints_;
      } else if (this.mode_ === Mode.POLYGON) {
        var sketchCoords =
        /** @type {PolyCoordType} */
        this.sketchCoords_;
        potentiallyDone = sketchCoords[0].length > this.minPoints_;
        potentiallyFinishCoordinates = [sketchCoords[0][0], sketchCoords[0][sketchCoords[0].length - 2]];
      }

      if (potentiallyDone) {
        var map = event.map;

        for (var i = 0, ii = potentiallyFinishCoordinates.length; i < ii; i++) {
          var finishCoordinate = potentiallyFinishCoordinates[i];
          var finishPixel = map.getPixelFromCoordinate(finishCoordinate);
          var pixel = event.pixel;
          var dx = pixel[0] - finishPixel[0];
          var dy = pixel[1] - finishPixel[1];
          var snapTolerance = this.freehand_ ? 1 : this.snapTolerance_;
          at = Math.sqrt(dx * dx + dy * dy) <= snapTolerance;

          if (at) {
            this.finishCoordinate_ = finishCoordinate;
            break;
          }
        }
      }
    }

    return at;
  };
  /**
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @private
   */


  Draw.prototype.createOrUpdateSketchPoint_ = function (event) {
    var coordinates = event.coordinate.slice();

    if (!this.sketchPoint_) {
      this.sketchPoint_ = new _Feature.default(new _Point.default(coordinates));
      this.updateSketchFeatures_();
    } else {
      var sketchPointGeom = this.sketchPoint_.getGeometry();
      sketchPointGeom.setCoordinates(coordinates);
    }
  };
  /**
   * Start the drawing.
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @private
   */


  Draw.prototype.startDrawing_ = function (event) {
    var start = event.coordinate;
    var projection = event.map.getView().getProjection();
    this.finishCoordinate_ = start;

    if (this.mode_ === Mode.POINT) {
      this.sketchCoords_ = start.slice();
    } else if (this.mode_ === Mode.POLYGON) {
      this.sketchCoords_ = [[start.slice(), start.slice()]];
      this.sketchLineCoords_ = this.sketchCoords_[0];
    } else {
      this.sketchCoords_ = [start.slice(), start.slice()];
    }

    if (this.sketchLineCoords_) {
      this.sketchLine_ = new _Feature.default(new _LineString.default(this.sketchLineCoords_));
    }

    var geometry = this.geometryFunction_(this.sketchCoords_, undefined, projection);
    this.sketchFeature_ = new _Feature.default();

    if (this.geometryName_) {
      this.sketchFeature_.setGeometryName(this.geometryName_);
    }

    this.sketchFeature_.setGeometry(geometry);
    this.updateSketchFeatures_();
    this.dispatchEvent(new DrawEvent(DrawEventType.DRAWSTART, this.sketchFeature_));
  };
  /**
   * Modify the drawing.
   * @param {import("../MapBrowserEvent.js").default} event Event.
   * @private
   */


  Draw.prototype.modifyDrawing_ = function (event) {
    var coordinate = event.coordinate;
    var geometry = this.sketchFeature_.getGeometry();
    var projection = event.map.getView().getProjection();
    var coordinates, last;

    if (this.mode_ === Mode.POINT) {
      last = this.sketchCoords_;
    } else if (this.mode_ === Mode.POLYGON) {
      coordinates =
      /** @type {PolyCoordType} */
      this.sketchCoords_[0];
      last = coordinates[coordinates.length - 1];

      if (this.atFinish_(event)) {
        // snap to finish
        coordinate = this.finishCoordinate_.slice();
      }
    } else {
      coordinates = this.sketchCoords_;
      last = coordinates[coordinates.length - 1];
    }

    last[0] = coordinate[0];
    last[1] = coordinate[1];
    this.geometryFunction_(
    /** @type {!LineCoordType} */
    this.sketchCoords_, geometry, projection);

    if (this.sketchPoint_) {
      var sketchPointGeom = this.sketchPoint_.getGeometry();
      sketchPointGeom.setCoordinates(coordinate);
    }
    /** @type {LineString} */


    var sketchLineGeom;

    if (geometry.getType() == _GeometryType.default.POLYGON && this.mode_ !== Mode.POLYGON) {
      if (!this.sketchLine_) {
        this.sketchLine_ = new _Feature.default();
      }

      var ring = geometry.getLinearRing(0);
      sketchLineGeom = this.sketchLine_.getGeometry();

      if (!sketchLineGeom) {
        sketchLineGeom = new _LineString.default(ring.getFlatCoordinates(), ring.getLayout());
        this.sketchLine_.setGeometry(sketchLineGeom);
      } else {
        sketchLineGeom.setFlatCoordinates(ring.getLayout(), ring.getFlatCoordinates());
        sketchLineGeom.changed();
      }
    } else if (this.sketchLineCoords_) {
      sketchLineGeom = this.sketchLine_.getGeometry();
      sketchLineGeom.setCoordinates(this.sketchLineCoords_);
    }

    this.updateSketchFeatures_();
  };
  /**
   * Add a new coordinate to the drawing.
   * @param {!PointCoordType} coordinate Coordinate
   * @private
   */


  Draw.prototype.addToDrawing_ = function (coordinate) {
    var geometry = this.sketchFeature_.getGeometry();
    var projection = this.getMap().getView().getProjection();
    var done;
    var coordinates;

    if (this.mode_ === Mode.LINE_STRING) {
      this.finishCoordinate_ = coordinate.slice();
      coordinates =
      /** @type {LineCoordType} */
      this.sketchCoords_;

      if (coordinates.length >= this.maxPoints_) {
        if (this.freehand_) {
          coordinates.pop();
        } else {
          done = true;
        }
      }

      coordinates.push(coordinate.slice());
      this.geometryFunction_(coordinates, geometry, projection);
    } else if (this.mode_ === Mode.POLYGON) {
      coordinates =
      /** @type {PolyCoordType} */
      this.sketchCoords_[0];

      if (coordinates.length >= this.maxPoints_) {
        if (this.freehand_) {
          coordinates.pop();
        } else {
          done = true;
        }
      }

      coordinates.push(coordinate.slice());

      if (done) {
        this.finishCoordinate_ = coordinates[0];
      }

      this.geometryFunction_(this.sketchCoords_, geometry, projection);
    }

    this.updateSketchFeatures_();

    if (done) {
      this.finishDrawing();
    }
  };
  /**
   * Remove last point of the feature currently being drawn.
   * @api
   */


  Draw.prototype.removeLastPoint = function () {
    if (!this.sketchFeature_) {
      return;
    }

    var geometry = this.sketchFeature_.getGeometry();
    var projection = this.getMap().getView().getProjection();
    var coordinates;
    /** @type {LineString} */

    var sketchLineGeom;

    if (this.mode_ === Mode.LINE_STRING) {
      coordinates =
      /** @type {LineCoordType} */
      this.sketchCoords_;
      coordinates.splice(-2, 1);
      this.geometryFunction_(coordinates, geometry, projection);

      if (coordinates.length >= 2) {
        this.finishCoordinate_ = coordinates[coordinates.length - 2].slice();
      }
    } else if (this.mode_ === Mode.POLYGON) {
      coordinates =
      /** @type {PolyCoordType} */
      this.sketchCoords_[0];
      coordinates.splice(-2, 1);
      sketchLineGeom = this.sketchLine_.getGeometry();
      sketchLineGeom.setCoordinates(coordinates);
      this.geometryFunction_(this.sketchCoords_, geometry, projection);
    }

    if (coordinates.length === 0) {
      this.abortDrawing();
    }

    this.updateSketchFeatures_();
  };
  /**
   * Stop drawing and add the sketch feature to the target layer.
   * The {@link module:ol/interaction/Draw~DrawEventType.DRAWEND} event is
   * dispatched before inserting the feature.
   * @api
   */


  Draw.prototype.finishDrawing = function () {
    var sketchFeature = this.abortDrawing_();

    if (!sketchFeature) {
      return;
    }

    var coordinates = this.sketchCoords_;
    var geometry = sketchFeature.getGeometry();
    var projection = this.getMap().getView().getProjection();

    if (this.mode_ === Mode.LINE_STRING) {
      // remove the redundant last point
      coordinates.pop();
      this.geometryFunction_(coordinates, geometry, projection);
    } else if (this.mode_ === Mode.POLYGON) {
      // remove the redundant last point in ring

      /** @type {PolyCoordType} */
      coordinates[0].pop();
      this.geometryFunction_(coordinates, geometry, projection);
      coordinates = geometry.getCoordinates();
    } // cast multi-part geometries


    if (this.type_ === _GeometryType.default.MULTI_POINT) {
      sketchFeature.setGeometry(new _MultiPoint.default([
      /** @type {PointCoordType} */
      coordinates]));
    } else if (this.type_ === _GeometryType.default.MULTI_LINE_STRING) {
      sketchFeature.setGeometry(new _MultiLineString.default([
      /** @type {LineCoordType} */
      coordinates]));
    } else if (this.type_ === _GeometryType.default.MULTI_POLYGON) {
      sketchFeature.setGeometry(new _MultiPolygon.default([
      /** @type {PolyCoordType} */
      coordinates]));
    } // First dispatch event to allow full set up of feature


    this.dispatchEvent(new DrawEvent(DrawEventType.DRAWEND, sketchFeature)); // Then insert feature

    if (this.features_) {
      this.features_.push(sketchFeature);
    }

    if (this.source_) {
      this.source_.addFeature(sketchFeature);
    }
  };
  /**
   * Stop drawing without adding the sketch feature to the target layer.
   * @return {Feature} The sketch feature (or null if none).
   * @private
   */


  Draw.prototype.abortDrawing_ = function () {
    this.finishCoordinate_ = null;
    var sketchFeature = this.sketchFeature_;
    this.sketchFeature_ = null;
    this.sketchPoint_ = null;
    this.sketchLine_ = null;
    this.overlay_.getSource().clear(true);
    return sketchFeature;
  };
  /**
   * Stop drawing without adding the sketch feature to the target layer.
   * @api
   */


  Draw.prototype.abortDrawing = function () {
    var sketchFeature = this.abortDrawing_();

    if (sketchFeature) {
      this.dispatchEvent(new DrawEvent(DrawEventType.DRAWABORT, sketchFeature));
    }
  };
  /**
   * Append coordinates to the end of the geometry that is currently being drawn.
   * This can be used when drawing LineStrings or Polygons. Coordinates will
   * either be appended to the current LineString or the outer ring of the current
   * Polygon.
   * @param {!LineCoordType} coordinates Linear coordinates to be appended into
   * the coordinate array.
   * @api
   */


  Draw.prototype.appendCoordinates = function (coordinates) {
    var mode = this.mode_;
    var sketchCoords = [];

    if (mode === Mode.LINE_STRING) {
      sketchCoords =
      /** @type {LineCoordType} */
      this.sketchCoords_;
    } else if (mode === Mode.POLYGON) {
      sketchCoords = this.sketchCoords_ && this.sketchCoords_.length ?
      /** @type {PolyCoordType} */
      this.sketchCoords_[0] : [];
    } // Remove last coordinate from sketch drawing (this coordinate follows cursor position)


    var ending = sketchCoords.pop(); // Append coordinate list

    for (var i = 0; i < coordinates.length; i++) {
      this.addToDrawing_(coordinates[i]);
    } // Duplicate last coordinate for sketch drawing


    this.addToDrawing_(ending);
  };
  /**
   * Initiate draw mode by starting from an existing geometry which will
   * receive new additional points. This only works on features with
   * `LineString` geometries, where the interaction will extend lines by adding
   * points to the end of the coordinates array.
   * This will change the original feature, instead of drawing a copy.
   *
   * The function will dispatch a `drawstart` event.
   *
   * @param {!Feature<LineString>} feature Feature to be extended.
   * @api
   */


  Draw.prototype.extend = function (feature) {
    var geometry = feature.getGeometry();
    var lineString = geometry;
    this.sketchFeature_ = feature;
    this.sketchCoords_ = lineString.getCoordinates();
    var last = this.sketchCoords_[this.sketchCoords_.length - 1];
    this.finishCoordinate_ = last.slice();
    this.sketchCoords_.push(last.slice());
    this.updateSketchFeatures_();
    this.dispatchEvent(new DrawEvent(DrawEventType.DRAWSTART, this.sketchFeature_));
  };
  /**
   * Redraw the sketch features.
   * @private
   */


  Draw.prototype.updateSketchFeatures_ = function () {
    var sketchFeatures = [];

    if (this.sketchFeature_) {
      sketchFeatures.push(this.sketchFeature_);
    }

    if (this.sketchLine_) {
      sketchFeatures.push(this.sketchLine_);
    }

    if (this.sketchPoint_) {
      sketchFeatures.push(this.sketchPoint_);
    }

    var overlaySource = this.overlay_.getSource();
    overlaySource.clear(true);
    overlaySource.addFeatures(sketchFeatures);
  };
  /**
   * @private
   */


  Draw.prototype.updateState_ = function () {
    var map = this.getMap();
    var active = this.getActive();

    if (!map || !active) {
      this.abortDrawing();
    }

    this.overlay_.setMap(active ? map : null);
  };

  return Draw;
}(_Pointer.default);
/**
 * @return {import("../style/Style.js").StyleFunction} Styles.
 */


function getDefaultStyleFunction() {
  var styles = (0, _Style.createEditingStyle)();
  return function (feature, resolution) {
    return styles[feature.getGeometry().getType()];
  };
}
/**
 * Create a `geometryFunction` for `type: 'Circle'` that will create a regular
 * polygon with a user specified number of sides and start angle instead of an
 * `import("../geom/Circle.js").Circle` geometry.
 * @param {number=} opt_sides Number of sides of the regular polygon. Default is
 *     32.
 * @param {number=} opt_angle Angle of the first point in radians. 0 means East.
 *     Default is the angle defined by the heading from the center of the
 *     regular polygon to the current pointer position.
 * @return {GeometryFunction} Function that draws a
 *     polygon.
 * @api
 */


function createRegularPolygon(opt_sides, opt_angle) {
  return function (coordinates, opt_geometry, projection) {
    var center = (0, _proj.fromUserCoordinate)(
    /** @type {LineCoordType} */
    coordinates[0], projection);
    var end = (0, _proj.fromUserCoordinate)(
    /** @type {LineCoordType} */
    coordinates[1], projection);
    var radius = Math.sqrt((0, _coordinate.squaredDistance)(center, end));
    var geometry = opt_geometry ?
    /** @type {Polygon} */
    opt_geometry : (0, _Polygon.fromCircle)(new _Circle.default(center), opt_sides);
    var angle = opt_angle;

    if (!opt_angle) {
      var x = end[0] - center[0];
      var y = end[1] - center[1];
      angle = Math.atan(y / x) - (x < 0 ? Math.PI : 0);
    }

    (0, _Polygon.makeRegular)(geometry, center, radius, angle);
    var userProjection = (0, _proj.getUserProjection)();

    if (userProjection) {
      geometry.transform(projection, userProjection);
    }

    return geometry;
  };
}
/**
 * Create a `geometryFunction` that will create a box-shaped polygon (aligned
 * with the coordinate system axes).  Use this with the draw interaction and
 * `type: 'Circle'` to return a box instead of a circle geometry.
 * @return {GeometryFunction} Function that draws a box-shaped polygon.
 * @api
 */


function createBox() {
  return function (coordinates, opt_geometry, projection) {
    var extent = (0, _extent.boundingExtent)(
    /** @type {LineCoordType} */
    coordinates.map(function (coordinate) {
      return (0, _proj.fromUserCoordinate)(coordinate, projection);
    }));
    var boxCoordinates = [[(0, _extent.getBottomLeft)(extent), (0, _extent.getBottomRight)(extent), (0, _extent.getTopRight)(extent), (0, _extent.getTopLeft)(extent), (0, _extent.getBottomLeft)(extent)]];
    var geometry = opt_geometry;

    if (geometry) {
      geometry.setCoordinates(boxCoordinates);
    } else {
      geometry = new _Polygon.default(boxCoordinates);
    }

    var userProjection = (0, _proj.getUserProjection)();

    if (userProjection) {
      geometry.transform(projection, userProjection);
    }

    return geometry;
  };
}
/**
 * Get the drawing mode.  The mode for mult-part geometries is the same as for
 * their single-part cousins.
 * @param {import("../geom/GeometryType.js").default} type Geometry type.
 * @return {Mode} Drawing mode.
 */


function getMode(type) {
  var mode;

  if (type === _GeometryType.default.POINT || type === _GeometryType.default.MULTI_POINT) {
    mode = Mode.POINT;
  } else if (type === _GeometryType.default.LINE_STRING || type === _GeometryType.default.MULTI_LINE_STRING) {
    mode = Mode.LINE_STRING;
  } else if (type === _GeometryType.default.POLYGON || type === _GeometryType.default.MULTI_POLYGON) {
    mode = Mode.POLYGON;
  } else if (type === _GeometryType.default.CIRCLE) {
    mode = Mode.CIRCLE;
  }

  return (
    /** @type {!Mode} */
    mode
  );
}

var _default = Draw;
exports.default = _default;
},{"../geom/Circle.js":"ol/geom/Circle.js","../events/Event.js":"ol/events/Event.js","../events/EventType.js":"ol/events/EventType.js","../Feature.js":"ol/Feature.js","../geom/GeometryType.js":"ol/geom/GeometryType.js","./Property.js":"ol/interaction/Property.js","../geom/LineString.js":"ol/geom/LineString.js","../MapBrowserEvent.js":"ol/MapBrowserEvent.js","../MapBrowserEventType.js":"ol/MapBrowserEventType.js","../geom/MultiLineString.js":"ol/geom/MultiLineString.js","../geom/MultiPoint.js":"ol/geom/MultiPoint.js","../geom/MultiPolygon.js":"ol/geom/MultiPolygon.js","../geom/Point.js":"ol/geom/Point.js","./Pointer.js":"ol/interaction/Pointer.js","../geom/Polygon.js":"ol/geom/Polygon.js","../layer/Vector.js":"ol/layer/Vector.js","../source/Vector.js":"ol/source/Vector.js","../functions.js":"ol/functions.js","../events/condition.js":"ol/events/condition.js","../extent.js":"ol/extent.js","../style/Style.js":"ol/style/Style.js","../proj.js":"ol/proj.js","../Object.js":"ol/Object.js","../coordinate.js":"ol/coordinate.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64226" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ol/interaction/Draw.js"], null)
//# sourceMappingURL=/Draw.a7e2ea96.js.map