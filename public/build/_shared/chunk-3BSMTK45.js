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
  require_react
} from "/build/_shared/chunk-COCUQS5L.js";
import {
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// app/components/Spinner.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Spinner.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Spinner.tsx"
  );
  import.meta.hot.lastModified = "1738073419114.9783";
}
var Spinner = (0, import_react.forwardRef)(_c = ({
  className,
  ...rest
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: cn("animate-spin h-5 w-5 text-white", className), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...rest, ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, false, {
      fileName: "app/components/Spinner.tsx",
      lineNumber: 28,
      columnNumber: 5
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, false, {
      fileName: "app/components/Spinner.tsx",
      lineNumber: 29,
      columnNumber: 5
    })
  ] }, void 0, true, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 27,
    columnNumber: 10
  });
});
_c2 = Spinner;
Spinner.displayName = "Spinner";
var _c;
var _c2;
$RefreshReg$(_c, "Spinner$forwardRef");
$RefreshReg$(_c2, "Spinner");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Spinner
};
//# sourceMappingURL=/build/_shared/chunk-3BSMTK45.js.map
