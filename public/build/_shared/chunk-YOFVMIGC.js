import {
  require_react
} from "/build/_shared/chunk-COCUQS5L.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// node_modules/screenfull/dist/screenfull.js
var require_screenfull = __commonJS({
  "node_modules/screenfull/dist/screenfull.js"(exports, module) {
    "use strict";
    (function() {
      "use strict";
      var document = typeof window !== "undefined" && typeof window.document !== "undefined" ? window.document : {};
      var isCommonjs = typeof module !== "undefined" && module.exports;
      var fn = function() {
        var val;
        var fnMap = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror"
          ],
          // New WebKit
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          // Old WebKit
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror"
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError"
          ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for (; i < l; i++) {
          val = fnMap[i];
          if (val && val[1] in document) {
            for (i = 0; i < val.length; i++) {
              ret[fnMap[0][i]] = val[i];
            }
            return ret;
          }
        }
        return false;
      }();
      var eventNameMap = {
        change: fn.fullscreenchange,
        error: fn.fullscreenerror
      };
      var screenfull2 = {
        request: function(element, options) {
          return new Promise(function(resolve, reject) {
            var onFullScreenEntered = function() {
              this.off("change", onFullScreenEntered);
              resolve();
            }.bind(this);
            this.on("change", onFullScreenEntered);
            element = element || document.documentElement;
            var returnPromise = element[fn.requestFullscreen](options);
            if (returnPromise instanceof Promise) {
              returnPromise.then(onFullScreenEntered).catch(reject);
            }
          }.bind(this));
        },
        exit: function() {
          return new Promise(function(resolve, reject) {
            if (!this.isFullscreen) {
              resolve();
              return;
            }
            var onFullScreenExit = function() {
              this.off("change", onFullScreenExit);
              resolve();
            }.bind(this);
            this.on("change", onFullScreenExit);
            var returnPromise = document[fn.exitFullscreen]();
            if (returnPromise instanceof Promise) {
              returnPromise.then(onFullScreenExit).catch(reject);
            }
          }.bind(this));
        },
        toggle: function(element, options) {
          return this.isFullscreen ? this.exit() : this.request(element, options);
        },
        onchange: function(callback) {
          this.on("change", callback);
        },
        onerror: function(callback) {
          this.on("error", callback);
        },
        on: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document.addEventListener(eventName, callback, false);
          }
        },
        off: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document.removeEventListener(eventName, callback, false);
          }
        },
        raw: fn
      };
      if (!fn) {
        if (isCommonjs) {
          module.exports = { isEnabled: false };
        } else {
          window.screenfull = { isEnabled: false };
        }
        return;
      }
      Object.defineProperties(screenfull2, {
        isFullscreen: {
          get: function() {
            return Boolean(document[fn.fullscreenElement]);
          }
        },
        element: {
          enumerable: true,
          get: function() {
            return document[fn.fullscreenElement];
          }
        },
        isEnabled: {
          enumerable: true,
          get: function() {
            return Boolean(document[fn.fullscreenEnabled]);
          }
        }
      });
      if (isCommonjs) {
        module.exports = screenfull2;
      } else {
        window.screenfull = screenfull2;
      }
    })();
  }
});

// node_modules/react-use/esm/useToggle.js
var import_react = __toESM(require_react());
var toggleReducer = function(state, nextValue) {
  return typeof nextValue === "boolean" ? nextValue : !state;
};
var useToggle = function(initialValue) {
  return (0, import_react.useReducer)(toggleReducer, initialValue);
};
var useToggle_default = useToggle;

// node_modules/react-use/esm/useFullscreen.js
var import_react3 = __toESM(require_react());
var import_screenfull = __toESM(require_screenfull());

// node_modules/react-use/esm/useIsomorphicLayoutEffect.js
var import_react2 = __toESM(require_react());

// node_modules/react-use/esm/misc/util.js
var noop = function() {
};
function on(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.addEventListener) {
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (obj && obj.removeEventListener) {
    obj.removeEventListener.apply(obj, args);
  }
}
var isBrowser = typeof window !== "undefined";

// node_modules/react-use/esm/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = isBrowser ? import_react2.useLayoutEffect : import_react2.useEffect;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// node_modules/react-use/esm/useFullscreen.js
var useFullscreen = function(ref, enabled, options) {
  if (options === void 0) {
    options = {};
  }
  var video = options.video, _a = options.onClose, onClose = _a === void 0 ? noop : _a;
  var _b = (0, import_react3.useState)(enabled), isFullscreen = _b[0], setIsFullscreen = _b[1];
  useIsomorphicLayoutEffect_default(function() {
    if (!enabled) {
      return;
    }
    if (!ref.current) {
      return;
    }
    var onWebkitEndFullscreen = function() {
      if (video === null || video === void 0 ? void 0 : video.current) {
        off(video.current, "webkitendfullscreen", onWebkitEndFullscreen);
      }
      onClose();
    };
    var onChange = function() {
      if (import_screenfull.default.isEnabled) {
        var isScreenfullFullscreen = import_screenfull.default.isFullscreen;
        setIsFullscreen(isScreenfullFullscreen);
        if (!isScreenfullFullscreen) {
          onClose();
        }
      }
    };
    if (import_screenfull.default.isEnabled) {
      try {
        import_screenfull.default.request(ref.current);
        setIsFullscreen(true);
      } catch (error) {
        onClose(error);
        setIsFullscreen(false);
      }
      import_screenfull.default.on("change", onChange);
    } else if (video && video.current && video.current.webkitEnterFullscreen) {
      video.current.webkitEnterFullscreen();
      on(video.current, "webkitendfullscreen", onWebkitEndFullscreen);
      setIsFullscreen(true);
    } else {
      onClose();
      setIsFullscreen(false);
    }
    return function() {
      setIsFullscreen(false);
      if (import_screenfull.default.isEnabled) {
        try {
          import_screenfull.default.off("change", onChange);
          import_screenfull.default.exit();
        } catch (_a2) {
        }
      } else if (video && video.current && video.current.webkitExitFullscreen) {
        off(video.current, "webkitendfullscreen", onWebkitEndFullscreen);
        video.current.webkitExitFullscreen();
      }
    };
  }, [enabled, video, ref]);
  return isFullscreen;
};
var useFullscreen_default = useFullscreen;

// node_modules/react-use/esm/useEffectOnce.js
var import_react4 = __toESM(require_react());
var useEffectOnce = function(effect) {
  (0, import_react4.useEffect)(effect, []);
};
var useEffectOnce_default = useEffectOnce;

// node_modules/react-use/esm/useMount.js
var useMount = function(fn) {
  useEffectOnce_default(function() {
    fn();
  });
};
var useMount_default = useMount;

// node_modules/react-use/esm/useWindowSize.js
var import_react7 = __toESM(require_react());

// node_modules/react-use/esm/useRafState.js
var import_react6 = __toESM(require_react());

// node_modules/react-use/esm/useUnmount.js
var import_react5 = __toESM(require_react());
var useUnmount = function(fn) {
  var fnRef = (0, import_react5.useRef)(fn);
  fnRef.current = fn;
  useEffectOnce_default(function() {
    return function() {
      return fnRef.current();
    };
  });
};
var useUnmount_default = useUnmount;

// node_modules/react-use/esm/useRafState.js
var useRafState = function(initialState) {
  var frame = (0, import_react6.useRef)(0);
  var _a = (0, import_react6.useState)(initialState), state = _a[0], setState = _a[1];
  var setRafState = (0, import_react6.useCallback)(function(value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function() {
      setState(value);
    });
  }, []);
  useUnmount_default(function() {
    cancelAnimationFrame(frame.current);
  });
  return [state, setRafState];
};
var useRafState_default = useRafState;

// node_modules/react-use/esm/useWindowSize.js
var useWindowSize = function(_a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.initialWidth, initialWidth = _c === void 0 ? Infinity : _c, _d = _b.initialHeight, initialHeight = _d === void 0 ? Infinity : _d, onChange = _b.onChange;
  var _e = useRafState_default({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight
  }), state = _e[0], setState = _e[1];
  (0, import_react7.useEffect)(function() {
    if (isBrowser) {
      var handler_1 = function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        setState({
          width,
          height
        });
        if (onChange)
          onChange(width, height);
      };
      on(window, "resize", handler_1);
      return function() {
        off(window, "resize", handler_1);
      };
    }
  }, []);
  return state;
};
var useWindowSize_default = useWindowSize;

// node_modules/react-use/esm/misc/hookState.js
function resolveHookState(nextState, currentState) {
  if (typeof nextState === "function") {
    return nextState.length ? nextState(currentState) : nextState();
  }
  return nextState;
}

// node_modules/react-use/esm/useTimeoutFn.js
var import_react8 = __toESM(require_react());
function useTimeoutFn(fn, ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var ready = (0, import_react8.useRef)(false);
  var timeout = (0, import_react8.useRef)();
  var callback = (0, import_react8.useRef)(fn);
  var isReady = (0, import_react8.useCallback)(function() {
    return ready.current;
  }, []);
  var set = (0, import_react8.useCallback)(function() {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(function() {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);
  var clear = (0, import_react8.useCallback)(function() {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);
  (0, import_react8.useEffect)(function() {
    callback.current = fn;
  }, [fn]);
  (0, import_react8.useEffect)(function() {
    set();
    return clear;
  }, [ms]);
  return [isReady, clear, set];
}

// node_modules/react-use/esm/useEvent.js
var import_react9 = __toESM(require_react());
var defaultTarget = isBrowser ? window : null;
var isListenerType1 = function(target) {
  return !!target.addEventListener;
};
var isListenerType2 = function(target) {
  return !!target.on;
};
var useEvent = function(name, handler, target, options) {
  if (target === void 0) {
    target = defaultTarget;
  }
  (0, import_react9.useEffect)(function() {
    if (!handler) {
      return;
    }
    if (!target) {
      return;
    }
    if (isListenerType1(target)) {
      on(target, name, handler, options);
    } else if (isListenerType2(target)) {
      target.on(name, handler, options);
    }
    return function() {
      if (isListenerType1(target)) {
        off(target, name, handler, options);
      } else if (isListenerType2(target)) {
        target.off(name, handler, options);
      }
    };
  }, [name, handler, target, JSON.stringify(options)]);
};
var useEvent_default = useEvent;

// node_modules/react-use/esm/useKey.js
var import_react10 = __toESM(require_react());
var createKeyPredicate = function(keyFilter) {
  return typeof keyFilter === "function" ? keyFilter : typeof keyFilter === "string" ? function(event) {
    return event.key === keyFilter;
  } : keyFilter ? function() {
    return true;
  } : function() {
    return false;
  };
};
var useKey = function(key, fn, opts, deps) {
  if (fn === void 0) {
    fn = noop;
  }
  if (opts === void 0) {
    opts = {};
  }
  if (deps === void 0) {
    deps = [key];
  }
  var _a = opts.event, event = _a === void 0 ? "keydown" : _a, target = opts.target, options = opts.options;
  var useMemoHandler = (0, import_react10.useMemo)(function() {
    var predicate = createKeyPredicate(key);
    var handler = function(handlerEvent) {
      if (predicate(handlerEvent)) {
        return fn(handlerEvent);
      }
    };
    return handler;
  }, deps);
  useEvent_default(event, useMemoHandler, target, options);
};
var useKey_default = useKey;

// node_modules/react-use/esm/useLocalStorage.js
var import_react11 = __toESM(require_react());
var useLocalStorage = function(key, initialValue, options) {
  if (!isBrowser) {
    return [initialValue, noop, noop];
  }
  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }
  var deserializer = options ? options.raw ? function(value) {
    return value;
  } : options.deserializer : JSON.parse;
  var initializer = (0, import_react11.useRef)(function(key2) {
    try {
      var serializer = options ? options.raw ? String : options.serializer : JSON.stringify;
      var localStorageValue = localStorage.getItem(key2);
      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      } else {
        initialValue && localStorage.setItem(key2, serializer(initialValue));
        return initialValue;
      }
    } catch (_a2) {
      return initialValue;
    }
  });
  var _a = (0, import_react11.useState)(function() {
    return initializer.current(key);
  }), state = _a[0], setState = _a[1];
  (0, import_react11.useLayoutEffect)(function() {
    return setState(initializer.current(key));
  }, [key]);
  var set = (0, import_react11.useCallback)(function(valOrFunc) {
    try {
      var newState = typeof valOrFunc === "function" ? valOrFunc(state) : valOrFunc;
      if (typeof newState === "undefined")
        return;
      var value = void 0;
      if (options)
        if (options.raw)
          if (typeof newState === "string")
            value = newState;
          else
            value = JSON.stringify(newState);
        else if (options.serializer)
          value = options.serializer(newState);
        else
          value = JSON.stringify(newState);
      else
        value = JSON.stringify(newState);
      localStorage.setItem(key, value);
      setState(deserializer(value));
    } catch (_a2) {
    }
  }, [key, setState]);
  var remove = (0, import_react11.useCallback)(function() {
    try {
      localStorage.removeItem(key);
      setState(void 0);
    } catch (_a2) {
    }
  }, [key, setState]);
  return [state, set, remove];
};
var useLocalStorage_default = useLocalStorage;

// node_modules/react-use/esm/usePrevious.js
var import_react12 = __toESM(require_react());
function usePrevious(state) {
  var ref = (0, import_react12.useRef)();
  (0, import_react12.useEffect)(function() {
    ref.current = state;
  });
  return ref.current;
}

// node_modules/react-use/esm/factory/createGlobalState.js
var import_react13 = __toESM(require_react());
function createGlobalState(initialState) {
  var store = {
    state: initialState instanceof Function ? initialState() : initialState,
    setState: function(nextState) {
      store.state = resolveHookState(nextState, store.state);
      store.setters.forEach(function(setter) {
        return setter(store.state);
      });
    },
    setters: []
  };
  return function() {
    var _a = (0, import_react13.useState)(store.state), globalState = _a[0], stateSetter = _a[1];
    useEffectOnce_default(function() {
      return function() {
        store.setters = store.setters.filter(function(setter) {
          return setter !== stateSetter;
        });
      };
    });
    useIsomorphicLayoutEffect_default(function() {
      if (!store.setters.includes(stateSetter)) {
        store.setters.push(stateSetter);
      }
    });
    return [globalState, store.setState];
  };
}

export {
  useToggle_default,
  useTimeoutFn,
  useFullscreen_default,
  useKey_default,
  useLocalStorage_default,
  useMount_default,
  useUnmount_default,
  usePrevious,
  useWindowSize_default,
  createGlobalState
};
/*! Bundled license information:

screenfull/dist/screenfull.js:
  (*!
  * screenfull
  * v5.2.0 - 2021-11-03
  * (c) Sindre Sorhus; MIT License
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-YOFVMIGC.js.map
