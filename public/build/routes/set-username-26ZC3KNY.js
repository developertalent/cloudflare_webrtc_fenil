import {
  Input
} from "/build/_shared/chunk-XIJZL7U4.js";
import {
  require_getUsername
} from "/build/_shared/chunk-LBBEMG5S.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-XYQU32HT.js";
import {
  Button
} from "/build/_shared/chunk-KALH3MK7.js";
import "/build/_shared/chunk-S7OQG6MD.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-Y3MLNSQL.js";
import {
  createHotContext
} from "/build/_shared/chunk-WTR6QT5M.js";
import "/build/_shared/chunk-54QWHKFZ.js";
import "/build/_shared/chunk-RDDE2DQC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-W7N3FPCL.js";
import "/build/_shared/chunk-COCUQS5L.js";
import {
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// app/routes/set-username.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/set-username.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/set-username.tsx"
  );
  import.meta.hot.lastModified = "1738605406629.747";
}
function SetUsername() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid h-full gap-4 place-content-center w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Dating App" }, void 0, false, {
      fileName: "app/routes/set-username.tsx",
      lineNumber: 64,
      columnNumber: 4
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4", role: "alert", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold", children: "Error: " }, void 0, false, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 66,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block sm:inline", children: actionData.error }, void 0, false, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 67,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/set-username.tsx",
      lineNumber: 65,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex flex-col items-start gap-4 w-full", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", children: "Enter your display name" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 71,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { autoComplete: "off", autoFocus: true, required: true, type: "text", id: "username", name: "username" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 72,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 70,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 75,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { required: true, type: "email", id: "email", name: "email" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 76,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 74,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 79,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { required: true, type: "password", id: "password", name: "password" }, void 0, false, {
          fileName: "app/routes/set-username.tsx",
          lineNumber: 80,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "text-xs", type: "submit", children: "Submit" }, void 0, false, {
        fileName: "app/routes/set-username.tsx",
        lineNumber: 82,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/set-username.tsx",
      lineNumber: 69,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/set-username.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(SetUsername, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = SetUsername;
var _c;
$RefreshReg$(_c, "SetUsername");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SetUsername as default
};
//# sourceMappingURL=/build/routes/set-username-26ZC3KNY.js.map
