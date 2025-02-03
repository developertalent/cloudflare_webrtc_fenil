import {
  cn
} from "/build/_shared/chunk-S7OQG6MD.js";
import {
  createHotContext
} from "/build/_shared/chunk-WTR6QT5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-W7N3FPCL.js";
import {
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// app/components/Disclaimer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Disclaimer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Disclaimer.tsx"
  );
  import.meta.hot.lastModified = "1738604129562.7253";
}
var Disclaimer = ({
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: cn("text-xs text-zinc-400 dark:text-zinc-500 max-w-prose", className) }, void 0, false, {
    fileName: "app/components/Disclaimer.tsx",
    lineNumber: 25,
    columnNumber: 10
  });
};
_c = Disclaimer;
var _c;
$RefreshReg$(_c, "Disclaimer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Disclaimer
};
//# sourceMappingURL=/build/_shared/chunk-Q6C7JXPY.js.map
