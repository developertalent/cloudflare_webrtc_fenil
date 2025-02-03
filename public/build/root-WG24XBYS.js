import {
  QueryClient,
  QueryClientProvider
} from "/build/_shared/chunk-AOZMQ3IW.js";
import {
  useFullscreen_default,
  useToggle_default
} from "/build/_shared/chunk-YOFVMIGC.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-XYQU32HT.js";
import {
  cn
} from "/build/_shared/chunk-S7OQG6MD.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-Y3MLNSQL.js";
import {
  createHotContext
} from "/build/_shared/chunk-WTR6QT5M.js";
import "/build/_shared/chunk-54QWHKFZ.js";
import "/build/_shared/chunk-RDDE2DQC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-W7N3FPCL.js";
import {
  require_react
} from "/build/_shared/chunk-COCUQS5L.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// empty-module:./utils/getUsername.server
var require_getUsername = __commonJS({
  "empty-module:./utils/getUsername.server"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// app/root.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_cookie = __toESM(require_cookie());
var import_react2 = __toESM(require_react());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GPOQJPXA.css";

// app/utils/elementNotContainedByClickTarget.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/elementNotContainedByClickTarget.ts"
  );
  import.meta.hot.lastModified = "1738073419122.397";
}
function elementNotContainedByClickTarget(element) {
  let current = element;
  while (current) {
    if ([
      "a",
      "button",
      "details",
      "input",
      "select",
      "textarea",
      "area",
      "audio",
      "iframe",
      "img",
      "label",
      "link",
      "object",
      "summary",
      "video"
    ].includes(element.tagName?.toLowerCase()) || element.isContentEditable || element.hasAttribute("tabindex")) {
      return true;
    }
    current = current.parentElement;
  }
  return false;
}

// app/root.tsx
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => [{
  title: "Dating App"
}];
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/apple-touch-icon.png?v=orange-emoji"
}, {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicon-32x32.png?v=orange-emoji"
}, {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicon-16x16.png?v=orange-emoji"
}, {
  rel: "manifest",
  href: "/site.webmanifest",
  crossOrigin: "use-credentials"
}, {
  rel: "mask-icon",
  href: "/safari-pinned-tab.svg?v=orange-emoji",
  color: "#faa339"
}, {
  rel: "shortcut icon",
  href: "/favicon.ico?v=orange"
}];
var Document = ({
  children
}) => {
  _s();
  const fullscreenRef = (0, import_react2.useRef)(null);
  const [fullscreenEnabled, toggleFullscreen] = useToggle_default(false);
  useFullscreen_default(fullscreenRef, fullscreenEnabled, {
    onClose: () => toggleFullscreen(false)
  });
  return (
    // some extensions add data attributes to the html
    // element that React complains about.
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { className: "h-full", lang: "en", suppressHydrationWarning: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 123,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 124,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "apple-mobile-web-app-title", content: "Dating app" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 125,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "application-name", content: "Dating apps" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 126,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "msapplication-TileColor", content: "#ffffff" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 127,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 128,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "theme-color", content: "#232325", media: "(prefers-color-scheme: dark)" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 130,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 132,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 133,
          columnNumber: 5
        })
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 4
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: cn("h-full", "bg-white", "text-zinc-800", "dark:bg-zinc-800", "dark:text-zinc-200"), ref: fullscreenRef, onDoubleClick: (e) => {
        if (e.target instanceof HTMLElement && !elementNotContainedByClickTarget(e.target)) toggleFullscreen();
      }, children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 140,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden", suppressHydrationWarning: true, children: "__CLIENT_ENV__" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 141,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 145,
          columnNumber: 5
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 146,
          columnNumber: 5
        })
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 4
      })
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 121,
      columnNumber: 5
    })
  );
};
_s(Document, "EnJpkk45ATvxzMOYfjCE43rzFUc=", false, function() {
  return [useToggle_default, useFullscreen_default];
});
_c = Document;
var ErrorBoundary = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid h-full place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "It looks like there was an error, but don't worry it has been reported. Sorry about that!" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 158,
    columnNumber: 5
  }) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 157,
    columnNumber: 4
  }) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 156,
    columnNumber: 10
  });
};
_c2 = ErrorBoundary;
var queryClient = new QueryClient();
function App() {
  _s2();
  const {
    userDirectoryUrl
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "root", className: "h-full bg-inherit isolate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
    userDirectoryUrl
  } }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 175,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 173,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 172,
    columnNumber: 10
  }, this);
}
_s2(App, "ScEDMKWYUH35cEpdvC10ICUnZpg=", false, function() {
  return [useLoaderData];
});
_c3 = App;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Document");
$RefreshReg$(_c2, "ErrorBoundary");
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=/build/root-WG24XBYS.js.map
