import {
  cn
} from "/build/_shared/chunk-S7OQG6MD.js";
import {
  Link
} from "/build/_shared/chunk-Y3MLNSQL.js";
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

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// app/components/Button.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button.tsx"
  );
  import.meta.hot.lastModified = "1738073419110.8547";
}
var displayTypeMap = {
  primary: ["text-white", "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 active:bg-orange-800", "border-orange-500 hover:border-orange-600 active:border-orange-700 active:border-orange-800"],
  secondary: ["text-zinc-900 dark:text-zinc-100", "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 active:bg-zinc-400 dark:active:bg-zinc-700", "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600"],
  ghost: ["text-white hover:text-zinc-900", "bg-transparent hover:bg-white", "border-transparent hover:border-white"],
  danger: ["text-white", "bg-red-600 hover:bg-red-700 active:bg-red-800", "border-red-600 hover:border-red-700 active:border-red-800"]
};
var Button = (0, import_react2.forwardRef)(_c = ({
  className,
  displayType = "primary",
  disabled,
  onClick,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: cn("border-4", "rounded", "uppercase", "font-bold", "tracking-widest", "py-[.5em] px-[1em]", disabled && "cursor-not-allowed opacity-60", displayTypeMap[displayType].join(" "), className), "aria-disabled": disabled, onClick: disabled ? (e) => e.preventDefault() : onClick, ...rest, ref }, void 0, false, {
  fileName: "app/components/Button.tsx",
  lineNumber: 36,
  columnNumber: 12
}));
_c2 = Button;
Button.displayName = "Button";
var ButtonLink = (0, import_react2.forwardRef)(_c3 = ({
  className,
  displayType = "primary",
  ...rest
}, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: cn("inline-block", "border-4", "rounded", "uppercase", "font-bold", "tracking-widest", "py-[.5em] px-[1em]", displayTypeMap[displayType].join(" "), className), ...rest, ref }, void 0, false, {
    fileName: "app/components/Button.tsx",
    lineNumber: 45,
    columnNumber: 1
  })
));
_c4 = ButtonLink;
ButtonLink.displayName = "Button";
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Button$forwardRef");
$RefreshReg$(_c2, "Button");
$RefreshReg$(_c3, "ButtonLink$forwardRef");
$RefreshReg$(_c4, "ButtonLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  invariant,
  Button,
  ButtonLink
};
//# sourceMappingURL=/build/_shared/chunk-KALH3MK7.js.map
