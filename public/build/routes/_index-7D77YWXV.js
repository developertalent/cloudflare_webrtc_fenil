import {
  Input
} from "/build/_shared/chunk-XIJZL7U4.js";
import {
  Disclaimer
} from "/build/_shared/chunk-Q6C7JXPY.js";
import {
  useUserMetadata
} from "/build/_shared/chunk-SV26IYKJ.js";
import "/build/_shared/chunk-AOZMQ3IW.js";
import {
  Label,
  nanoid
} from "/build/_shared/chunk-GW24SHAT.js";
import "/build/_shared/chunk-FI7D5ZGC.js";
import {
  require_getUsername
} from "/build/_shared/chunk-LBBEMG5S.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-XYQU32HT.js";
import {
  Button,
  ButtonLink
} from "/build/_shared/chunk-KALH3MK7.js";
import "/build/_shared/chunk-S7OQG6MD.js";
import {
  Form,
  useLoaderData,
  useNavigate
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

// app/routes/_index.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1738602207727.9878";
}
function Index() {
  _s();
  const {
    username,
    usedAccess
  } = useLoaderData();
  const navigate = useNavigate();
  const {
    data
  } = useUserMetadata(username);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-full p-4 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 sm:min-w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Dating app" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 68,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
            "Logged in as ",
            data?.displayName
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 70,
            columnNumber: 7
          }, this),
          !usedAccess && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "block text-sm underline text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200", href: "/set-username", children: "Change" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 73,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 69,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, { to: "/new", className: "text-sm", onClick: (e) => {
        e.preventDefault();
        navigate(`/${nanoid(8)}`);
      }, children: "New Room" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 79,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { className: "cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { className: "text-zinc-500 dark:text-zinc-400", children: "Or join a room" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "grid items-end gap-4 grid-cols-[1fr_auto] w-full pt-4", method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "room", children: "Room name" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 97,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "room", id: "room", required: true }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 98,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 96,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "text-xs", type: "submit", displayType: "secondary", children: "Join" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 100,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 95,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-end flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, { className: "pt-6" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 107,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 106,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Index, "K+eOInX4x6zLea2yoIzFtO8/Wjg=", false, function() {
  return [useLoaderData, useNavigate, useUserMetadata];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-7D77YWXV.js.map
