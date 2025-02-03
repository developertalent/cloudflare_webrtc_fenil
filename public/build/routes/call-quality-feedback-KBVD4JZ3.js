import {
  Button
} from "/build/_shared/chunk-KALH3MK7.js";
import "/build/_shared/chunk-S7OQG6MD.js";
import {
  Form,
  useSearchParams
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

// app/routes/call-quality-feedback.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/call-quality-feedback.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/call-quality-feedback.tsx"
  );
  import.meta.hot.lastModified = "1738073419120.0933";
}
var redirectToHome = new Response(null, {
  status: 302,
  headers: {
    Location: "/"
  }
});
function SetUsername() {
  _s();
  const [params] = useSearchParams();
  const meetingId = params.get("meetingId");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid h-full gap-4 place-content-center", children: meetingId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Experience any issues?" }, void 0, false, {
      fileName: "app/routes/call-quality-feedback.tsx",
      lineNumber: 56,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex items-end gap-4", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { displayType: "secondary", value: "true", name: "experiencedIssues", children: "Yes" }, void 0, false, {
        fileName: "app/routes/call-quality-feedback.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { displayType: "secondary", value: "false", name: "experiencedIssues", children: "No" }, void 0, false, {
        fileName: "app/routes/call-quality-feedback.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "meetingId", value: meetingId }, void 0, false, {
        fileName: "app/routes/call-quality-feedback.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/call-quality-feedback.tsx",
      lineNumber: 57,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/call-quality-feedback.tsx",
    lineNumber: 55,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Missing meetingId" }, void 0, false, {
    fileName: "app/routes/call-quality-feedback.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/call-quality-feedback.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(SetUsername, "KB+Sx1GyQK5Z7eQYQPoF2V7J20Y=", false, function() {
  return [useSearchParams];
});
_c = SetUsername;
var _c;
$RefreshReg$(_c, "SetUsername");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SetUsername as default
};
//# sourceMappingURL=/build/routes/call-quality-feedback-KBVD4JZ3.js.map
