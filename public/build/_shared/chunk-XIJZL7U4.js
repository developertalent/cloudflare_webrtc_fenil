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

// app/components/Input.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Input.tsx"
  );
  import.meta.hot.lastModified = "1738073419112.0747";
}
var Input = (0, import_react.forwardRef)(_c = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: cn("w-full", "rounded", "border-2", "border-zinc-500", "text-zinc-900", "dark:text-zinc-50", "bg-zinc-50", "dark:bg-zinc-700", "px-2", "py-1", className), ...rest, ref }, void 0, false, {
  fileName: "app/components/Input.tsx",
  lineNumber: 26,
  columnNumber: 12
}));
_c2 = Input;
Input.displayName = "Input";
var _c;
var _c2;
$RefreshReg$(_c, "Input$forwardRef");
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Input
};
//# sourceMappingURL=/build/_shared/chunk-XIJZL7U4.js.map
