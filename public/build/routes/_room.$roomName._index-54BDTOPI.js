import {
  Disclaimer
} from "/build/_shared/chunk-Q6C7JXPY.js";
import {
  Spinner
} from "/build/_shared/chunk-3BSMTK45.js";
import {
  AudioIndicator,
  CameraButton,
  CopyButton,
  MicButton,
  SettingsButton,
  Tooltip,
  VideoSrcObject,
  VisuallyHidden,
  useRoomContext,
  useRoomUrl
} from "/build/_shared/chunk-YBXREEQB.js";
import "/build/_shared/chunk-GW24SHAT.js";
import "/build/_shared/chunk-FI7D5ZGC.js";
import {
  require_getUsername
} from "/build/_shared/chunk-LBBEMG5S.js";
import {
  Icon,
  useObservableAsValue
} from "/build/_shared/chunk-D4GPKVMH.js";
import "/build/_shared/chunk-YOFVMIGC.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-XYQU32HT.js";
import {
  Button
} from "/build/_shared/chunk-KALH3MK7.js";
import {
  cn
} from "/build/_shared/chunk-S7OQG6MD.js";
import {
  useNavigate,
  useParams,
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
import {
  require_react
} from "/build/_shared/chunk-COCUQS5L.js";
import {
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// app/routes/_room.$roomName._index.tsx
var import_cloudflare = __toESM(require_cloudflare());

// app/components/SelfView.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SelfView.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SelfView.tsx"
  );
  import.meta.hot.lastModified = "1738073419114.8167";
}
var SelfView = (0, import_react.forwardRef)(_c = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VideoSrcObject, { className: cn("-scale-x-100", className), muted: true, ...rest, ref }, void 0, false, {
  fileName: "app/components/SelfView.tsx",
  lineNumber: 27,
  columnNumber: 12
}));
_c2 = SelfView;
SelfView.displayName = "SelfView";
var _c;
var _c2;
$RefreshReg$(_c, "SelfView$forwardRef");
$RefreshReg$(_c2, "SelfView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_room.$roomName._index.tsx
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_room.$roomName._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_room.$roomName._index.tsx"
  );
  import.meta.hot.lastModified = "1738073419119.2837";
}
var refreshCheckDone = false;
function trackRefreshes() {
  if (refreshCheckDone) return;
  if (typeof document === "undefined") return;
  const key = `previously loaded`;
  const initialValue = sessionStorage.getItem(key);
  const refreshed = initialValue !== null;
  sessionStorage.setItem(key, Date.now().toString());
  if (refreshed) {
    fetch(`/api/reportRefresh`, {
      method: "POST"
    });
  }
  refreshCheckDone = true;
}
function Lobby() {
  _s();
  const {
    roomName
  } = useParams();
  const navigate = useNavigate();
  const {
    setJoined,
    userMedia,
    room,
    partyTracks
  } = useRoomContext();
  const {
    videoStreamTrack,
    audioStreamTrack,
    audioEnabled
  } = userMedia;
  const session = useObservableAsValue(partyTracks.session$);
  const sessionError = useObservableAsValue(partyTracks.sessionError$);
  trackRefreshes();
  const joinedUsers = new Set(room.otherUsers.filter((u) => u.tracks.audio).map((u) => u.name)).size;
  const roomUrl = useRoomUrl();
  const [params] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-full p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1" }, void 0, false, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 91,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold", children: roomName }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 94,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
          `${joinedUsers} ${joinedUsers === 1 ? "user" : "users"} in the room.`,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 95,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 93,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelfView, { className: "aspect-[4/3] w-full", videoTrack: videoStreamTrack }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 100,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute left-3 top-3", children: !sessionError && !session?.sessionId ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner, { className: "text-zinc-100" }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 103,
          columnNumber: 47
        }, this) : audioStreamTrack && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: audioEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AudioIndicator, { audioTrack: audioStreamTrack }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 104,
          columnNumber: 26
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { content: "Mic is turned off", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-white indication-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { type: "micOff" }, void 0, false, {
            fileName: "app/routes/_room.$roomName._index.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VisuallyHidden, { children: "Mic is turned off" }, void 0, false, {
            fileName: "app/routes/_room.$roomName._index.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 105,
          columnNumber: 12
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 104,
          columnNumber: 77
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 103,
          columnNumber: 107
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 102,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 99,
        columnNumber: 5
      }, this),
      sessionError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-3 rounded-md text-sm text-zinc-800 bg-red-200 dark:text-zinc-200 dark:bg-red-700", children: sessionError }, void 0, false, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 113,
        columnNumber: 22
      }, this),
      (userMedia.audioUnavailableReason || userMedia.videoUnavailableReason) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-3 rounded-md text-sm text-zinc-800 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-700", children: [
        userMedia.audioUnavailableReason === "NotAllowedError" && userMedia.videoUnavailableReason === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Mic permission was denied." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 117,
          columnNumber: 116
        }, this),
        userMedia.videoUnavailableReason === "NotAllowedError" && userMedia.audioUnavailableReason === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Camera permission was denied." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 118,
          columnNumber: 116
        }, this),
        userMedia.audioUnavailableReason === "NotAllowedError" && userMedia.videoUnavailableReason === "NotAllowedError" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Mic and camera permissions were denied." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 119,
          columnNumber: 124
        }, this),
        userMedia.audioUnavailableReason === "NotAllowedError" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          "Enable permission",
          userMedia.audioUnavailableReason && userMedia.videoUnavailableReason ? "s" : "",
          " ",
          "and reload the page to join."
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 120,
          columnNumber: 66
        }, this),
        userMedia.audioUnavailableReason === "DevicesExhaustedError" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No working microphone found." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 125,
          columnNumber: 72
        }, this),
        userMedia.videoUnavailableReason === "DevicesExhaustedError" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No working webcam found." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 126,
          columnNumber: 72
        }, this),
        userMedia.audioUnavailableReason === "UnknownError" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Unknown microphone error." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 127,
          columnNumber: 63
        }, this),
        userMedia.videoUnavailableReason === "UnknownError" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Unknown webcam error." }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 128,
          columnNumber: 63
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 116,
        columnNumber: 80
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => {
          setJoined(true);
          navigate("room" + (params.size > 0 ? "?" + params.toString() : ""));
        }, disabled: !session?.sessionId, children: "Join" }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 131,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MicButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 140,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CameraButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 141,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SettingsButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 142,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { content: "Copy URL", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CopyButton, { contentValue: roomUrl }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 144,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/_room.$roomName._index.tsx",
          lineNumber: 143,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName._index.tsx",
        lineNumber: 130,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 92,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col justify-end flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Disclaimer, { className: "pt-6" }, void 0, false, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 149,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_room.$roomName._index.tsx",
      lineNumber: 148,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_room.$roomName._index.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s(Lobby, "6hdlJegDogLMft/figb6jpqhFAM=", false, function() {
  return [useParams, useNavigate, useRoomContext, useObservableAsValue, useObservableAsValue, useRoomUrl, useSearchParams];
});
_c3 = Lobby;
var _c3;
$RefreshReg$(_c3, "Lobby");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Lobby as default
};
//# sourceMappingURL=/build/routes/_room.$roomName._index-54BDTOPI.js.map
