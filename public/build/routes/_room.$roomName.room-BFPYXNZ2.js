import {
  useUserMetadata
} from "/build/_shared/chunk-SV26IYKJ.js";
import "/build/_shared/chunk-AOZMQ3IW.js";
import {
  Anchor,
  Arrow,
  AudioIndicator,
  CameraButton,
  Close,
  Combination_default,
  Content,
  Content2,
  CopyButton,
  Description,
  Description2,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DismissableLayer,
  FocusScope,
  MicButton,
  Overlay,
  Portal,
  Portal2,
  Portal3,
  Presence,
  Root,
  Root2,
  Root3,
  SettingsDialog,
  Title,
  Toast_default,
  Tooltip,
  Trigger,
  Trigger2,
  VideoSrcObject,
  VisuallyHidden,
  WarningProvider,
  composeEventHandlers,
  createCollection,
  createContextScope,
  createDialogScope,
  createPopperScope,
  hideOthers,
  useAudioLevel,
  useCallbackRef,
  useControllableState,
  useDirection,
  useDispatchToast,
  useFocusGuards,
  useId,
  useIsSpeaking,
  useRoomContext,
  useRoomUrl
} from "/build/_shared/chunk-YBXREEQB.js";
import {
  Label,
  Primitive,
  Slot,
  Slottable,
  composeRefs,
  dispatchDiscreteCustomEvent,
  useComposedRefs
} from "/build/_shared/chunk-GW24SHAT.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-FI7D5ZGC.js";
import {
  require_getUsername
} from "/build/_shared/chunk-LBBEMG5S.js";
import {
  Icon,
  Observable,
  combineLatest,
  fromEvent,
  init_tslib_es6,
  interval,
  map,
  of,
  pairwise,
  switchMap,
  tslib_es6_exports,
  useObservableAsValue,
  useValueAsObservable
} from "/build/_shared/chunk-D4GPKVMH.js";
import {
  useMount_default,
  usePrevious,
  useUnmount_default,
  useWindowSize_default
} from "/build/_shared/chunk-YOFVMIGC.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-XYQU32HT.js";
import {
  Button,
  invariant
} from "/build/_shared/chunk-KALH3MK7.js";
import {
  cn
} from "/build/_shared/chunk-S7OQG6MD.js";
import {
  useFetcher,
  useLoaderData,
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
  __commonJS,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-CT75GCCP.js";

// node_modules/react-use/lib/misc/util.js
var require_util = __commonJS({
  "node_modules/react-use/lib/misc/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
    var noop = function() {
    };
    exports.noop = noop;
    function on(obj) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
      }
    }
    exports.on = on;
    function off(obj) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
      }
    }
    exports.off = off;
    exports.isBrowser = typeof window !== "undefined";
    exports.isNavigator = typeof navigator !== "undefined";
  }
});

// node_modules/react-use/lib/useIsomorphicLayoutEffect.js
var require_useIsomorphicLayoutEffect = __commonJS({
  "node_modules/react-use/lib/useIsomorphicLayoutEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var util_1 = require_util();
    var useIsomorphicLayoutEffect = util_1.isBrowser ? react_1.useLayoutEffect : react_1.useEffect;
    exports.default = useIsomorphicLayoutEffect;
  }
});

// node_modules/react-use/lib/useMeasure.js
var require_useMeasure = __commonJS({
  "node_modules/react-use/lib/useMeasure.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var react_1 = require_react();
    var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(require_useIsomorphicLayoutEffect());
    var util_1 = require_util();
    var defaultState = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
    function useMeasure2() {
      var _a = react_1.useState(null), element = _a[0], ref = _a[1];
      var _b = react_1.useState(defaultState), rect = _b[0], setRect = _b[1];
      var observer = react_1.useMemo(function() {
        return new window.ResizeObserver(function(entries) {
          if (entries[0]) {
            var _a2 = entries[0].contentRect, x2 = _a2.x, y3 = _a2.y, width = _a2.width, height = _a2.height, top_1 = _a2.top, left = _a2.left, bottom = _a2.bottom, right = _a2.right;
            setRect({ x: x2, y: y3, width, height, top: top_1, left, bottom, right });
          }
        });
      }, []);
      useIsomorphicLayoutEffect_1.default(function() {
        if (!element)
          return;
        observer.observe(element);
        return function() {
          observer.disconnect();
        };
      }, [element]);
      return [ref, rect];
    }
    exports.default = util_1.isBrowser && typeof window.ResizeObserver !== "undefined" ? useMeasure2 : function() {
      return [util_1.noop, defaultState];
    };
  }
});

// app/routes/_room.$roomName.room.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_react37 = __toESM(require_react());

// app/components/AiPushToTalkButton.tsx
var import_react2 = __toESM(require_react());

// app/utils/playSound/sounds/AIReady.mp3
var AIReady_default = "/build/_assets/AIReady-R4GFFAQY.mp3";

// app/utils/playSound/sounds/Join.mp3
var Join_default = "/build/_assets/Join-5QBI6SQX.mp3";

// app/utils/playSound/sounds/Leave.mp3
var Leave_default = "/build/_assets/Leave-W3LFEYQC.mp3";

// app/utils/playSound/sounds/RaiseHand.mp3
var RaiseHand_default = "/build/_assets/RaiseHand-42IIBYRT.mp3";

// app/utils/playSound/playSound.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/playSound/playSound.ts"
  );
  import.meta.hot.lastModified = "1738073419123.7341";
}
var fetchOnce = async (...args) => {
  invariant(
    !args.some((a3) => a3 instanceof Request),
    "fetchOnce cannot cache with Request parameters"
  );
  const cache = /* @__PURE__ */ new Map();
  const key = JSON.stringify(args);
  let result = cache.get(key);
  if (result) {
    return result.clone();
  } else {
    result = await fetch(...args);
    cache.set(key, result);
    return result.clone();
  }
};
var sounds = {
  leave: Leave_default,
  join: Join_default,
  raiseHand: RaiseHand_default,
  aiReady: AIReady_default
};
var volumeMap = {
  join: 0.2,
  leave: 0.2,
  raiseHand: 0.1,
  aiReady: 0.1
};
async function playSound(sound) {
  const arrayBuffer = await fetchOnce(sounds[sound]).then(
    (res) => res.arrayBuffer()
  );
  const context = new AudioContext();
  const audioBuffer = await context.decodeAudioData(arrayBuffer);
  const source = context.createBufferSource();
  const gainNode = context.createGain();
  source.buffer = audioBuffer;
  source.connect(gainNode);
  gainNode.connect(context.destination);
  gainNode.gain.setValueAtTime(volumeMap[sound], context.currentTime);
  source.start();
}

// app/utils/playSound/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/playSound/index.ts"
  );
  import.meta.hot.lastModified = "1738073419123.661";
}

// app/utils/rxjs/inaudibleAudioTrack$.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/rxjs/inaudibleAudioTrack$.ts"
  );
  import.meta.hot.lastModified = "1738073419126.5032";
}
var inaudibleAudioTrack$ = new Observable(
  (subscriber) => {
    const audioContext = new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(20, audioContext.currentTime);
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
    oscillator.connect(gainNode);
    const destination = audioContext.createMediaStreamDestination();
    gainNode.connect(destination);
    oscillator.start();
    const track = destination.stream.getAudioTracks()[0];
    subscriber.next(track);
    return () => {
      track.stop();
      audioContext.close();
    };
  }
);

// app/components/AiPushToTalkButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AiPushToTalkButton.tsx"' + id);
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
    "app/components/AiPushToTalkButton.tsx"
  );
  import.meta.hot.lastModified = "1738073419110.2612";
}
function useButtonIsHeldDown({
  key,
  disabled
}) {
  _s();
  const [keyIsHeldDown, setKeyIsHeldDown] = (0, import_react2.useState)(false);
  const buttonRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    const button = buttonRef.current;
    let timeout = -1;
    const setTrue = () => {
      if (!disabled) {
        setKeyIsHeldDown(true);
        clearTimeout(timeout);
      }
    };
    const setFalse = () => {
      timeout = window.setTimeout(() => {
        setKeyIsHeldDown(false);
      }, 200);
    };
    const onKeyDown = (e2) => {
      if (e2.key.toLowerCase() === key.toLowerCase()) {
        setTrue();
      }
    };
    const onKeyUp = (e2) => {
      if (e2.key.toLowerCase() === key.toLowerCase()) {
        setFalse();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("blur", setFalse);
    button?.addEventListener("pointerdown", setTrue);
    button?.addEventListener("pointerup", setFalse);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("blur", setFalse);
      button?.removeEventListener("pointerdown", setTrue);
      button?.removeEventListener("pointerup", setFalse);
    };
  }, [disabled, key]);
  return [keyIsHeldDown, buttonRef];
}
_s(useButtonIsHeldDown, "yzNJsAID1yA7qBR7ndHnsWu13C8=");
function AiPushToTalkButtion() {
  _s2();
  const {
    partyTracks,
    room: {
      websocket,
      roomState: {
        ai: {
          controllingUser
        }
      }
    },
    userMedia: {
      turnMicOn,
      publicAudioTrack$
    }
  } = useRoomContext();
  const hasControl = controllingUser === websocket.id;
  const disabled = !hasControl && controllingUser !== void 0;
  const [holdingTalkButton, talkButtonRef] = useButtonIsHeldDown({
    key: "a",
    disabled
  });
  const holdingTalkButton$ = useValueAsObservable(holdingTalkButton);
  const audioTrack$ = (0, import_react2.useMemo)(() => holdingTalkButton$.pipe(switchMap((talking) => talking ? publicAudioTrack$ : inaudibleAudioTrack$)), [holdingTalkButton$, publicAudioTrack$]);
  const pushedAiAudioTrack$ = (0, import_react2.useMemo)(() => partyTracks.push(audioTrack$), [audioTrack$, partyTracks]);
  const pushedAiAudioTrack = useObservableAsValue(pushedAiAudioTrack$);
  (0, import_react2.useEffect)(() => {
    if (holdingTalkButton && pushedAiAudioTrack) {
      turnMicOn();
      console.log("\u{1F916} Requesting ai control");
      websocket.send(JSON.stringify({
        type: "requestAiControl",
        track: pushedAiAudioTrack
      }));
    } else {
      console.log("\u{1F916} Relinquishing ai control!");
      websocket.send(JSON.stringify({
        type: "relenquishAiControl"
      }));
    }
  }, [holdingTalkButton, pushedAiAudioTrack, turnMicOn, websocket]);
  (0, import_react2.useEffect)(() => {
    if (controllingUser !== void 0) {
      playSound("aiReady");
    }
  }, [controllingUser]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "text-xs select-none", disabled, ref: talkButtonRef, children: hasControl ? "Speaking to Ai..." : "Hold to talk to AI" }, void 0, false, {
    fileName: "app/components/AiPushToTalkButton.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_s2(AiPushToTalkButtion, "E87wrAxwqzQdplyH5N7ues55Kgo=", false, function() {
  return [useRoomContext, useButtonIsHeldDown, useValueAsObservable, useObservableAsValue];
});
_c = AiPushToTalkButtion;
var _c;
$RefreshReg$(_c, "AiPushToTalkButtion");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/InviteAiDialog.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/InviteAiDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/InviteAiDialog.tsx"
  );
  import.meta.hot.lastModified = "1738601921684.8938";
}
var aiVoices = ["Alloy", "Ash", "Ballad", "Coral", "Echo", "Sage", "Shimmer", "Verse"];
function InviteAiDialog(props) {
  _s3();
  const [open, setOpen] = (0, import_react4.useState)(false);
  const {
    room: {
      websocket
    }
  } = useRoomContext();
  const [params] = useSearchParams();
  const instructions = params.get("instructions");
  const voice = params.get("voice");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { open, onOpenChange: setOpen, children: [
    props.children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Portal3, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogOverlay, {}, void 0, false, {
        fileName: "app/components/InviteAiDialog.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "flex flex-col gap-4 mt-8", onSubmit: (e2) => {
        e2.preventDefault();
        websocket.send(JSON.stringify({
          type: "enableAi",
          ...Object.fromEntries(new FormData(e2.currentTarget))
        }));
        setOpen(false);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-medium", htmlFor: "instructions", children: "Instructions" }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 53,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { className: "bg-gray-100 dark:bg-zinc-800 w-full", id: "instructions", name: "instructions", rows: 15, defaultValue: instructions ?? `You are a helpful and concise AI assistant for a video chat application called Dating app.` }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 59,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/InviteAiDialog.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-medium", htmlFor: "voice", children: "Voice" }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 64,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("select", { className: "bg-gray-100 dark:bg-zinc-800 w-full", id: "voice", name: "voice", defaultValue: voice ?? "ash", children: aiVoices.map((voice2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: voice2.toLowerCase(), children: voice2 }, voice2, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 72,
            columnNumber: 33
          }, this)) }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/components/InviteAiDialog.tsx",
            lineNumber: 70,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/InviteAiDialog.tsx",
          lineNumber: 63,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", className: "self-end text-xs", children: "Invite AI" }, void 0, false, {
          fileName: "app/components/InviteAiDialog.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/InviteAiDialog.tsx",
        lineNumber: 44,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/components/InviteAiDialog.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/InviteAiDialog.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/InviteAiDialog.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s3(InviteAiDialog, "ARShMDFk/NAmaNF57cDTH+Y8/jQ=", false, function() {
  return [useRoomContext, useSearchParams];
});
_c2 = InviteAiDialog;
var _c2;
$RefreshReg$(_c2, "InviteAiDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/RecordAiVoiceActivity.tsx
var import_react8 = __toESM(require_react());

// app/components/PullAudioTracks.tsx
var import_react7 = __toESM(require_react());

// app/components/AudioStream.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AudioStream.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AudioStream.tsx"
  );
  import.meta.hot.lastModified = "1738073419110.7515";
}
var AudioStream = ({
  tracksToPull,
  onTrackAdded,
  onTrackRemoved
}) => {
  _s4();
  const mediaStreamRef = (0, import_react6.useRef)(new MediaStream());
  const ref = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    const audio = ref.current;
    if (!audio) return;
    const mediaStream = mediaStreamRef.current;
    audio.srcObject = mediaStream;
  }, []);
  const resetSrcObject = () => {
    const audio = ref.current;
    const mediaStream = mediaStreamRef.current;
    if (!audio || !mediaStream) return;
    audio.addEventListener("canplay", () => audio.play(), {
      once: true
    });
    audio.srcObject = mediaStream;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("audio", { ref, autoPlay: true }, void 0, false, {
      fileName: "app/components/AudioStream.tsx",
      lineNumber: 54,
      columnNumber: 4
    }),
    tracksToPull.map((track) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AudioTrack, { track, mediaStream: mediaStreamRef.current, onTrackAdded: (metadata, track2) => {
      onTrackAdded(metadata, track2);
      resetSrcObject();
    }, onTrackRemoved: (metadata, track2) => {
      onTrackRemoved(metadata, track2);
      resetSrcObject();
    } }, track, false, {
      fileName: "app/components/AudioStream.tsx",
      lineNumber: 55,
      columnNumber: 31
    }))
  ] }, void 0, true, {
    fileName: "app/components/AudioStream.tsx",
    lineNumber: 53,
    columnNumber: 10
  });
};
_s4(AudioStream, "Ne4z92RtpRKFrqPd7hxdodzd5JM=");
_c3 = AudioStream;
function AudioTrack({
  mediaStream,
  track,
  onTrackAdded,
  onTrackRemoved
}) {
  _s22();
  const onTrackAddedRef = (0, import_react6.useRef)(onTrackAdded);
  onTrackAddedRef.current = onTrackAdded;
  const onTrackRemovedRef = (0, import_react6.useRef)(onTrackRemoved);
  onTrackRemovedRef.current = onTrackRemoved;
  const {
    partyTracks
  } = useRoomContext();
  const trackObject = (0, import_react6.useMemo)(() => {
    const [sessionId, trackName] = track.split("/");
    return {
      sessionId,
      trackName,
      location: "remote"
    };
  }, [track]);
  const pulledTrack$ = (0, import_react6.useMemo)(() => {
    return partyTracks.pull(of(trackObject));
  }, [partyTracks, trackObject]);
  const audioTrack = useObservableAsValue(pulledTrack$);
  (0, import_react6.useEffect)(() => {
    if (!audioTrack) return;
    mediaStream.addTrack(audioTrack);
    onTrackAddedRef.current(track, audioTrack);
    return () => {
      mediaStream.removeTrack(audioTrack);
      onTrackRemovedRef.current(track, audioTrack);
    };
  }, [audioTrack, mediaStream, track]);
  return null;
}
_s22(AudioTrack, "9V3rXbRf4ZUN1eWay+iFuxTjnts=", false, function() {
  return [useRoomContext, useObservableAsValue];
});
_c22 = AudioTrack;
var _c3;
var _c22;
$RefreshReg$(_c3, "AudioStream");
$RefreshReg$(_c22, "AudioTrack");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PullAudioTracks.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PullAudioTracks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
var _s23 = $RefreshSig$();
var _s32 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PullAudioTracks.tsx"
  );
  import.meta.hot.lastModified = "1738073419113.4536";
}
var AudioTrackContext = (0, import_react7.createContext)({});
var PullAudioTracks = ({
  audioTracks,
  children
}) => {
  _s5();
  const [audioTrackMap, setAudioTrackMap] = (0, import_react7.useState)({});
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AudioTrackContext.Provider, { value: audioTrackMap, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AudioStream, { tracksToPull: audioTracks, onTrackAdded: (id, track) => setAudioTrackMap((previous) => ({
      ...previous,
      [id]: track
    })), onTrackRemoved: (id) => {
      setAudioTrackMap((previous) => {
        const update = {
          ...previous
        };
        delete update[id];
        return update;
      });
    } }, void 0, false, {
      fileName: "app/components/PullAudioTracks.tsx",
      lineNumber: 34,
      columnNumber: 4
    }),
    children
  ] }, void 0, true, {
    fileName: "app/components/PullAudioTracks.tsx",
    lineNumber: 33,
    columnNumber: 10
  });
};
_s5(PullAudioTracks, "OC8vMVP8WCnSEf49H0joQrCB8VA=");
_c4 = PullAudioTracks;
function usePulledAudioTracks() {
  _s23();
  return (0, import_react7.useContext)(AudioTrackContext);
}
_s23(usePulledAudioTracks, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function usePulledAudioTrack(track) {
  _s32();
  const tracks = usePulledAudioTracks();
  return track ? tracks[track] : void 0;
}
_s32(usePulledAudioTrack, "rHylihL2cisJMF0dh+IUErkJ60Y=", false, function() {
  return [usePulledAudioTracks];
});
var _c4;
$RefreshReg$(_c4, "PullAudioTracks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/RecordAiVoiceActivity.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/RecordAiVoiceActivity.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/RecordAiVoiceActivity.tsx"
  );
  import.meta.hot.lastModified = "1738073419113.6238";
}
function RecordAiVoiceActivity(props) {
  _s6();
  const audioTrack = usePulledAudioTrack(props.user.tracks.audio);
  const isSpeaking = useIsSpeaking(audioTrack);
  (0, import_react8.useEffect)(() => {
    if (isSpeaking) {
      props.recordActivity(props.user);
    }
  }, [isSpeaking, props]);
  return null;
}
_s6(RecordAiVoiceActivity, "Tom4ZAMWp6z+v3C91MtwfXvJRFA=", false, function() {
  return [usePulledAudioTrack, useIsSpeaking];
});
_c5 = RecordAiVoiceActivity;
var _c5;
$RefreshReg$(_c5, "RecordAiVoiceActivity");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/AiButton.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AiButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
var _s24 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AiButton.tsx"
  );
  import.meta.hot.lastModified = "1738073419110.1704";
}
function RemoveAiButton() {
  _s7();
  const {
    room: {
      websocket
    }
  } = useRoomContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { onClick: () => websocket.send(JSON.stringify({
    type: "disableAi"
  })), className: "text-xs", displayType: "secondary", children: "Remove AI" }, void 0, false, {
    fileName: "app/components/AiButton.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s7(RemoveAiButton, "uuFen2xXhQpJ82C1ohyRBdS/748=", false, function() {
  return [useRoomContext];
});
_c6 = RemoveAiButton;
function AiButton(props) {
  _s24();
  const {
    room: {
      roomState: {
        ai: {
          connectionPending,
          error
        },
        users
      }
    }
  } = useRoomContext();
  const aiUser = users.find((u3) => u3.id === "ai");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-800 dark:text-red-500", children: error }, void 0, false, {
      fileName: "app/components/AiButton.tsx",
      lineNumber: 61,
      columnNumber: 14
    }, this),
    aiUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RemoveAiButton, {}, void 0, false, {
        fileName: "app/components/AiButton.tsx",
        lineNumber: 63,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AiPushToTalkButtion, {}, void 0, false, {
        fileName: "app/components/AiButton.tsx",
        lineNumber: 64,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(RecordAiVoiceActivity, { user: aiUser, recordActivity: props.recordActivity }, void 0, false, {
        fileName: "app/components/AiButton.tsx",
        lineNumber: 65,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AiButton.tsx",
      lineNumber: 62,
      columnNumber: 14
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InviteAiDialog, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Trigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { className: "text-xs flex items-center gap-2", disabled: connectionPending, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Invite AI" }, void 0, false, {
      fileName: "app/components/AiButton.tsx",
      lineNumber: 69,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/components/AiButton.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/AiButton.tsx",
      lineNumber: 67,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/AiButton.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AiButton.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s24(AiButton, "tKE3sUlPxTG+EILDDrwRSBIctI0=", false, function() {
  return [useRoomContext];
});
_c23 = AiButton;
var _c6;
var _c23;
$RefreshReg$(_c6, "RemoveAiButton");
$RefreshReg$(_c23, "AiButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/HighPacketLossWarningsToast.tsx
var import_react11 = __toESM(require_react());

// app/hooks/useConditionForAtLeast.ts
var import_react9 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useConditionForAtLeast.ts"
  );
  import.meta.hot.lastModified = "1738073419116.2222";
}
function useConditionForAtLeast(condition, time) {
  const [value, setValue] = (0, import_react9.useState)(condition);
  (0, import_react9.useEffect)(() => {
    let timeout = window.setTimeout(() => {
      setValue(condition);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [condition, time]);
  return value;
}

// app/utils/ewma.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/ewma.ts"
  );
  import.meta.hot.lastModified = "1738073419122.6118";
}
var Ewma = class {
  /**
   *
   */
  constructor(halfLifeMs, initialValue, clock) {
    invariant(typeof halfLifeMs === "number", "halfLifeMs is not a number");
    invariant(!isNaN(halfLifeMs), "halfLifeMs can not be NaN");
    invariant(typeof initialValue === "number", "initialValue is not a number");
    invariant(!isNaN(initialValue), "initialValue can not be NaN");
    if (clock !== void 0) {
      invariant(typeof clock.now === "function", "clock.now is not a function");
    }
    this._decay = halfLifeMs;
    this._ewma = initialValue || 0;
    this._clock = clock || Date;
    this._stamp = typeof initialValue === "number" ? this._clock.now() : 0;
  }
  insert(x2) {
    invariant(typeof x2 === "number", "x is not a number");
    invariant(!isNaN(x2), "x can not be NaN");
    var now = this._clock.now();
    var elapsed = now - this._stamp;
    this._stamp = now;
    var w2 = Math.pow(2, -elapsed / this._decay);
    this._ewma = w2 * this._ewma + (1 - w2) * x2;
  }
  reset(x2) {
    invariant(typeof x2 === "number", "x is not a number");
    invariant(!isNaN(x2), "x can not be NaN");
    this._stamp = this._clock.now();
    this._ewma = x2;
  }
  value() {
    return this._ewma;
  }
};

// app/utils/mode.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/mode.ts"
  );
  import.meta.hot.lastModified = "1738073419123.244";
}
var modes = ["production", "development", "test"];
var NODE_ENV = "development";
var foundMode = modes.find((m3) => m3 === NODE_ENV);
invariant(foundMode);
var mode = foundMode;

// app/utils/rxjs/getPacketLossStats$.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/rxjs/getPacketLossStats$.ts"
  );
  import.meta.hot.lastModified = "1738073419126.2637";
}
function getPacketLossStats$(peerConnection$) {
  const inboundPacketLossPercentageEwma = new Ewma(2e3, 0);
  const outboundPacketLossPercentageEwma = new Ewma(2e3, 0);
  let anycastWarned = false;
  return combineLatest([peerConnection$, interval(1e3)]).pipe(
    switchMap(([peerConnection]) => peerConnection.getStats()),
    pairwise(),
    map(([previousStatsReport, newStatsReport]) => {
      let inboundPacketsReceived = 0;
      let inboundPacketsLost = 0;
      let outboundPacketsSent = 0;
      let outboundPacketsLost = 0;
      let candidatePairID = void 0;
      let remoteCandidateID = void 0;
      let remoteAddress = void 0;
      newStatsReport.forEach((report) => {
        const previous = previousStatsReport.get(report.id);
        if (!previous) return;
        if (report.type === "transport") {
          candidatePairID = report.selectedCandidatePairId;
        }
        if (candidatePairID) {
          remoteCandidateID = newStatsReport.get(candidatePairID)?.remoteCandidateId;
        }
        if (remoteCandidateID) {
          remoteAddress = newStatsReport.get(remoteCandidateID).address;
        }
        if (remoteAddress !== void 0 && remoteAddress !== "141.101.90.0") {
          console.warn(
            "PeerConnection doesn't appear to be connected to anycast 141.101.90.0"
          );
          if (mode === "production" && !anycastWarned) {
            alert("You are not connected to CF anycast address");
            anycastWarned = true;
          }
        }
        if (report.type === "inbound-rtp") {
          inboundPacketsLost += report.packetsLost - previous.packetsLost;
          inboundPacketsReceived += report.packetsReceived - previous.packetsReceived;
        } else if (report.type === "outbound-rtp") {
          const packetsSent = report.packetsSent - previous.packetsSent;
          const remoteInboundReport = Array.from(newStatsReport.values()).find(
            (r2) => r2.type === "remote-inbound-rtp" && r2.ssrc === report.ssrc
          );
          const previousRemoteInboundReport = Array.from(
            previousStatsReport.values()
          ).find(
            (r2) => r2.type === "remote-inbound-rtp" && r2.ssrc === previous.ssrc
          );
          if (remoteInboundReport && previousRemoteInboundReport && packetsSent > 0) {
            outboundPacketsSent += report.packetsSent - previous.packetsSent;
            outboundPacketsLost += remoteInboundReport.packetsLost - previousRemoteInboundReport.packetsLost;
          }
        }
      });
      if (inboundPacketsReceived > 0) {
        const packetLossPercentage = inboundPacketsLost / (inboundPacketsReceived + inboundPacketsLost);
        inboundPacketLossPercentageEwma.insert(
          Math.max(0, packetLossPercentage)
        );
      }
      if (outboundPacketsSent > 0) {
        const packetLossPercentage = outboundPacketsLost / (outboundPacketsSent + outboundPacketsLost);
        outboundPacketLossPercentageEwma.insert(
          Math.max(0, packetLossPercentage)
        );
      }
      return {
        outboundPacketLossPercentage: outboundPacketLossPercentageEwma.value(),
        inboundPacketLossPercentage: inboundPacketLossPercentageEwma.value()
      };
    })
  );
}

// app/components/HighPacketLossWarningsToast.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HighPacketLossWarningsToast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
var _s25 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HighPacketLossWarningsToast.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.613";
}
function useStats() {
  _s8();
  const {
    partyTracks
  } = useRoomContext();
  const stats$ = (0, import_react11.useMemo)(() => getPacketLossStats$(partyTracks.peerConnection$), [partyTracks.peerConnection$]);
  const stats = useObservableAsValue(stats$, {
    inboundPacketLossPercentage: 0,
    outboundPacketLossPercentage: 0
  });
  return stats;
}
_s8(useStats, "ExWLM04WrOrB761Siv1HWRFXggU=", false, function() {
  return [useRoomContext, useObservableAsValue];
});
function HighPacketLossWarningsToast() {
  _s25();
  const {
    inboundPacketLossPercentage,
    outboundPacketLossPercentage
  } = useStats();
  const hasIssues = useConditionForAtLeast(inboundPacketLossPercentage !== void 0 && outboundPacketLossPercentage !== void 0 && (inboundPacketLossPercentage > 0.05 || outboundPacketLossPercentage > 0.05), 5e3);
  if (inboundPacketLossPercentage === void 0 || outboundPacketLossPercentage === void 0) {
    return null;
  }
  if (!hasIssues) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Root, { duration: Infinity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Toast_default.Title, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { type: "SignalSlashIcon" }, void 0, false, {
        fileName: "app/components/HighPacketLossWarningsToast.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      "Unstable connection"
    ] }, void 0, true, {
      fileName: "app/components/HighPacketLossWarningsToast.tsx",
      lineNumber: 61,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/HighPacketLossWarningsToast.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Toast_default.Description, { children: "Call quality may be affected." }, void 0, false, {
      fileName: "app/components/HighPacketLossWarningsToast.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HighPacketLossWarningsToast.tsx",
    lineNumber: 59,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/HighPacketLossWarningsToast.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s25(HighPacketLossWarningsToast, "8UqSjPUGS1+ZXU0J/wg+4JW/6dI=", false, function() {
  return [useStats, useConditionForAtLeast];
});
_c7 = HighPacketLossWarningsToast;
var _c7;
$RefreshReg$(_c7, "HighPacketLossWarningsToast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/IceDisconnectedToast.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/IceDisconnectedToast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/IceDisconnectedToast.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.7615";
}
function IceDisconnectedToast() {
  _s9();
  const {
    iceConnectionState
  } = useRoomContext();
  const disconnectedForAtLeastTwoSeconds = useConditionForAtLeast(iceConnectionState === "disconnected", 2e3);
  if (!disconnectedForAtLeastTwoSeconds) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Root, { duration: Infinity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-2 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Toast_default.Title, { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Icon, { type: "WifiIcon" }, void 0, false, {
      fileName: "app/components/IceDisconnectedToast.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    "ICE disconnected"
  ] }, void 0, true, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 38,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 36,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/IceDisconnectedToast.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s9(IceDisconnectedToast, "kw5YtL+bXi1/Z3X05DG2SGKTlOU=", false, function() {
  return [useRoomContext, useConditionForAtLeast];
});
_c8 = IceDisconnectedToast;
var _c8;
$RefreshReg$(_c8, "IceDisconnectedToast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LeaveRoomButton.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LeaveRoomButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LeaveRoomButton.tsx"
  );
  import.meta.hot.lastModified = "1738073419112.4019";
}
var LeaveRoomButton = ({
  navigateToFeedbackPage,
  meetingId
}) => {
  _s10();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Tooltip, { content: "Leave", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { displayType: "danger", onClick: () => {
    const params = new URLSearchParams();
    if (meetingId) params.set("meetingId", meetingId);
    navigate(navigateToFeedbackPage ? `/call-quality-feedback?${params}` : "/");
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VisuallyHidden, { children: "Leave" }, void 0, false, {
      fileName: "app/components/LeaveRoomButton.tsx",
      lineNumber: 39,
      columnNumber: 5
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Icon, { type: "phoneXMark" }, void 0, false, {
      fileName: "app/components/LeaveRoomButton.tsx",
      lineNumber: 40,
      columnNumber: 5
    })
  ] }, void 0, true, {
    fileName: "app/components/LeaveRoomButton.tsx",
    lineNumber: 34,
    columnNumber: 4
  }) }, void 0, false, {
    fileName: "app/components/LeaveRoomButton.tsx",
    lineNumber: 33,
    columnNumber: 10
  });
};
_s10(LeaveRoomButton, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c9 = LeaveRoomButton;
var _c9;
$RefreshReg$(_c9, "LeaveRoomButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/OverflowMenu.tsx
var import_react18 = __toESM(require_react());

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var dist_exports3 = {};
__export(dist_exports3, {
  Arrow: () => Arrow22,
  CheckboxItem: () => CheckboxItem2,
  Content: () => Content23,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuArrow: () => DropdownMenuArrow,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuItemIndicator: () => DropdownMenuItemIndicator,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Group: () => Group2,
  Item: () => Item22,
  ItemIndicator: () => ItemIndicator2,
  Label: () => Label22,
  Portal: () => Portal22,
  RadioGroup: () => RadioGroup2,
  RadioItem: () => RadioItem2,
  Root: () => Root22,
  Separator: () => Separator2,
  Sub: () => Sub2,
  SubContent: () => SubContent2,
  SubTrigger: () => SubTrigger2,
  Trigger: () => Trigger3,
  createDropdownMenuScope: () => createDropdownMenuScope
});
var React3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menu/dist/index.mjs
var React2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React.useState(0);
  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_2, index) => array[(startIndex + index) % array.length]);
}
var Root4 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

// node_modules/@radix-ui/react-menu/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope2,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React2.useState(null);
  const isUsingKeyboardRef = React2.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React2.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Root2, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React2.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
  forceMount: void 0
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME);
var MenuContent = React2.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }
);
var MenuRootContentModal = React2.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const ref = React2.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React2.useEffect(() => {
      const content = ref.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }
);
var MenuRootContentNonModal = React2.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
});
var MenuContentImpl = React2.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection2(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React2.useState(null);
    const contentRef = React2.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React2.useRef(0);
    const searchRef = React2.useRef("");
    const pointerGraceTimerRef = React2.useRef(0);
    const pointerGraceIntentRef = React2.useRef(null);
    const pointerDirRef = React2.useRef("right");
    const lastPointerXRef = React2.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React2.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = (key) => {
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    };
    React2.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React2.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React2.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React2.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React2.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React2.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  Root4,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      Content,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content) return;
                          if (!FIRST_LAST_KEYS.includes(event.key)) return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                          focusFirst2(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME2 = "MenuGroup";
var MenuGroup = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }
);
MenuGroup.displayName = GROUP_NAME2;
var LABEL_NAME = "MenuLabel";
var MenuLabel = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Primitive.div, { ...labelProps, ref: forwardedRef });
  }
);
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = React2.forwardRef(
  (props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React2.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME2, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME2, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React2.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (disabled || isTypingAhead && event.key === " ") return;
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }
);
MenuItem.displayName = ITEM_NAME2;
var MenuItemImpl = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME2, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = React2.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React2.useState(false);
    const [textContent, setTextContent] = React2.useState("");
    React2.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Collection2.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }
);
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = React2.forwardRef(
  (props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuItem,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME,
  { value: void 0, onValueChange: () => {
  } }
);
var MenuRadioGroup = React2.forwardRef(
  (props, forwardedRef) => {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef(onValueChange);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }
);
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = React2.forwardRef(
  (props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }
);
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow";
var MenuArrow = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = React2.useState(null);
  const [content, setContent] = React2.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React2.useEffect(() => {
    if (parentMenuContext.open === false) handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Root2, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        MenuSubProvider,
        {
          scope: __scopeMenu,
          contentId: useId(),
          triggerId: useId(),
          trigger,
          onTriggerChange: setTrigger,
          children
        }
      )
    }
  ) });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = React2.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = React2.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = React2.useCallback(() => {
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React2.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    React2.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context.open),
        ...props,
        ref: composeRefs(forwardedRef, subContext.onTriggerChange),
        onClick: (event) => {
          props.onClick?.(event);
          if (props.disabled || event.defaultPrevented) return;
          event.currentTarget.focus();
          if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            clearOpenTimer();
            const contentRect = context.content?.getBoundingClientRect();
            if (contentRect) {
              const side = context.content?.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (props.disabled || isTypingAhead && event.key === " ") return;
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            context.content?.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = React2.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = React2.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            subContext.trigger?.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }
);
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst2(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray2(array, startIndex) {
  return array.map((_2, index) => array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v3) => v3 !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
  const { x: x2, y: y3 } = point;
  let inside = false;
  for (let i3 = 0, j2 = polygon.length - 1; i3 < polygon.length; j2 = i3++) {
    const xi = polygon[i3].x;
    const yi = polygon[i3].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y3 !== yj > y3 && x2 < (xj - xi) * (y3 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root32 = Menu;
var Anchor2 = MenuAnchor;
var Portal4 = MenuPortal;
var Content22 = MenuContent;
var Group = MenuGroup;
var Label2 = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow2 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React3.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React3.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Root32, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open) event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled) return;
          if (["Enter", " "].includes(event.key)) context.onOpenToggle();
          if (event.key === "ArrowDown") context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key)) event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Portal4, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "DropdownMenuContent";
var DropdownMenuContent = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME2, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React3.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Content22,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent.displayName = CONTENT_NAME2;
var GROUP_NAME3 = "DropdownMenuGroup";
var DropdownMenuGroup = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME3;
var LABEL_NAME2 = "DropdownMenuLabel";
var DropdownMenuLabel = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Label2, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel.displayName = LABEL_NAME2;
var ITEM_NAME3 = "DropdownMenuItem";
var DropdownMenuItem = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem.displayName = ITEM_NAME3;
var CHECKBOX_ITEM_NAME2 = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME2 = "DropdownMenuSeparator";
var DropdownMenuSeparator = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME2 = "DropdownMenuArrow";
var DropdownMenuArrow = React3.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME2;
var DropdownMenuSub = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
var SUB_TRIGGER_NAME2 = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "DropdownMenuSubContent";
var DropdownMenuSubContent = React3.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME2;
var Root22 = DropdownMenu;
var Trigger3 = DropdownMenuTrigger;
var Portal22 = DropdownMenuPortal;
var Content23 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label22 = DropdownMenuLabel;
var Item22 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var Arrow22 = DropdownMenuArrow;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;

// app/components/DropdownMenu.tsx
var import_react13 = __toESM(require_react());
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DropdownMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DropdownMenu.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.3938";
}
var Arrow3 = (0, import_react13.forwardRef)(_c10 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Arrow22, { ref, className: cn("fill-white dark:fill-zinc-600", className), ...rest }, void 0, false, {
  fileName: "app/components/DropdownMenu.tsx",
  lineNumber: 27,
  columnNumber: 12
}));
_c24 = Arrow3;
Arrow3.displayName = "Arrow";
var Content3 = (0, import_react13.forwardRef)(_c32 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Content23, { ref, className: cn("bg-white", "dark:bg-zinc-600", "rounded-md", "p-1", "space-y-1", "shadow-lg", "dark:shadow-none", "will-change-[opacity,transform]", "data-[side=top]:animate-slideDownAndFade", "data-[side=right]:animate-slideLeftAndFade", "data-[side=bottom]:animate-slideUpAndFade", "data-[side=left]:animate-slideRightAndFade", className), ...rest }, void 0, false, {
  fileName: "app/components/DropdownMenu.tsx",
  lineNumber: 33,
  columnNumber: 12
}));
_c42 = Content3;
Content3.displayName = "Content";
var Item3 = (0, import_react13.forwardRef)(_c52 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Item22, { ref, className: cn("group", "text-base", "leading-none", "text-zinc-800", "dark:text-zinc-200", "rounded", "flex", "items-center", "h-6", "py-6 md:py-5", "relative", "px-4", "select-none", "outline-none", "data-[disabled]:text-zinc-600", "data-[disabled]:cursor-not-allowed", "dark:data-[disabled]:text-zinc-400", "data-[highlighted]:bg-orange-500", "data-[highlighted]:text-white", className), ...rest }, void 0, false, {
  fileName: "app/components/DropdownMenu.tsx",
  lineNumber: 39,
  columnNumber: 12
}));
_c62 = Item3;
Item3.displayName = "Item";
var DropdownMenu_default = {
  ...dist_exports3,
  Arrow: Arrow3,
  Content: Content3,
  Item: Item3
};
var _c10;
var _c24;
var _c32;
var _c42;
var _c52;
var _c62;
$RefreshReg$(_c10, "Arrow$forwardRef");
$RefreshReg$(_c24, "Arrow");
$RefreshReg$(_c32, "Content$forwardRef");
$RefreshReg$(_c42, "Content");
$RefreshReg$(_c52, "Item$forwardRef");
$RefreshReg$(_c62, "Item");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/populateTraceLink.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/populateTraceLink.ts"
  );
  import.meta.hot.lastModified = "1738073419125.5488";
}
function populateTraceLink(sessionID, traceLink) {
  if (!traceLink) return void 0;
  const url = new URL(traceLink);
  const end = +/* @__PURE__ */ new Date();
  const start = end - 36e5;
  url.searchParams.set("start", (start * 1e3).toString());
  url.searchParams.set("end", (end * 1e3).toString());
  url.searchParams.set("tags", JSON.stringify({ "peer.SessionID": sessionID }));
  return url.toString();
}

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var dist_exports5 = {};
__export(dist_exports5, {
  Action: () => Action,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Cancel: () => Cancel,
  Content: () => Content24,
  Description: () => Description22,
  Overlay: () => Overlay2,
  Portal: () => Portal23,
  Root: () => Root23,
  Title: () => Title2,
  Trigger: () => Trigger22,
  createAlertDialogScope: () => createAlertDialogScope
});
var React4 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Root3, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME2 = "AlertDialogTrigger";
var AlertDialogTrigger = React4.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME3 = "AlertDialogPortal";
var AlertDialogPortal = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Portal2, { ...dialogScope, ...portalProps });
};
AlertDialogPortal.displayName = PORTAL_NAME3;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay = React4.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay.displayName = OVERLAY_NAME;
var CONTENT_NAME3 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME3);
var AlertDialogContent = React4.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = React4.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React4.useRef(null);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      WarningProvider,
      {
        contentName: CONTENT_NAME3,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          Content2,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              event.preventDefault();
              cancelRef.current?.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Slottable, { children }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent.displayName = CONTENT_NAME3;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle = React4.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription = React4.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = React4.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = React4.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME3}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME3}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME3}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  React4.useEffect(() => {
    const hasDescription = document.getElementById(
      contentRef.current?.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root23 = AlertDialog;
var Trigger22 = AlertDialogTrigger;
var Portal23 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content24 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description22 = AlertDialogDescription;

// app/components/AlertDialog.tsx
var import_react14 = __toESM(require_react());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AlertDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AlertDialog.tsx"
  );
  import.meta.hot.lastModified = "1738073419110.3489";
}
var Overlay3 = (0, import_react14.forwardRef)(_c11 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Overlay2, { ref, className: cn("fixed inset-0 bg-black opacity-40", className), ...rest }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 27,
  columnNumber: 12
}));
_c25 = Overlay3;
Overlay3.displayName = "Overlay";
var Content4 = (0, import_react14.forwardRef)(_c33 = ({
  className: _className,
  children,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Content24, { ref, className: cn("fixed", "rounded-lg", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "min-w-[min(400px,95vw)]", "max-w-[95vw]", "max-h-[85vh]", "overflow-y-auto", "p-6", "bg-inherit", "shadow-xl", "dark:shadow-none"), ...rest, children }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 34,
  columnNumber: 12
}));
_c43 = Content4;
Content4.displayName = "Content";
var Title3 = (0, import_react14.forwardRef)(_c53 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title2, { ref, className: cn("text-zinc-800 dark:text-zinc-200 m-0 text-base font-medium", className), ...rest }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 42,
  columnNumber: 12
}));
_c63 = Title3;
Title3.displayName = "Title";
var Description3 = (0, import_react14.forwardRef)(_c72 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Description22, { ref, className: cn("text-zinc-500 dark:text-zinc-400 mt-4 mb-5 text-sm leading-normal", className), ...rest }, void 0, false, {
  fileName: "app/components/AlertDialog.tsx",
  lineNumber: 48,
  columnNumber: 12
}));
_c82 = Description3;
Description3.displayName = "Description";
var Actions = ({
  children,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: cn("flex justify-end gap-4", className), children }, void 0, false, {
    fileName: "app/components/AlertDialog.tsx",
    lineNumber: 55,
    columnNumber: 10
  });
};
_c92 = Actions;
var AlertDialog_default = {
  ...dist_exports5,
  Overlay: Overlay3,
  Content: Content4,
  Title: Title3,
  Description: Description3,
  Actions
};
var _c11;
var _c25;
var _c33;
var _c43;
var _c53;
var _c63;
var _c72;
var _c82;
var _c92;
$RefreshReg$(_c11, "Overlay$forwardRef");
$RefreshReg$(_c25, "Overlay");
$RefreshReg$(_c33, "Content$forwardRef");
$RefreshReg$(_c43, "Content");
$RefreshReg$(_c53, "Title$forwardRef");
$RefreshReg$(_c63, "Title");
$RefreshReg$(_c72, "Description$forwardRef");
$RefreshReg$(_c82, "Description");
$RefreshReg$(_c92, "Actions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/MuteUserButton.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/MuteUserButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/MuteUserButton.tsx"
  );
  import.meta.hot.lastModified = "1738073419112.736";
}
var MuteUserButton = ({
  user,
  displayType = "secondary",
  mutedDisplayType = "danger"
}) => {
  _s11();
  const {
    room
  } = useRoomContext();
  const {
    data
  } = useUserMetadata(user.name);
  if (user.tracks.audioUnavailable) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Tooltip, { content: "Mic is unavailable. User cannot unmute.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { disabled: true, displayType: "secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { type: "micOff", className: "text-red-700 dark:text-red-400" }, void 0, false, {
        fileName: "app/components/MuteUserButton.tsx",
        lineNumber: 44,
        columnNumber: 6
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(VisuallyHidden, { children: "User's mic is unavailable, cannot unmute." }, void 0, false, {
        fileName: "app/components/MuteUserButton.tsx",
        lineNumber: 45,
        columnNumber: 6
      })
    ] }, void 0, true, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 43,
      columnNumber: 5
    }) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 42,
      columnNumber: 12
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Root, { children: [
    user.tracks.audioEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Tooltip, { content: `Mute ${data?.displayName}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { displayType, disabled: !user.tracks.audioEnabled, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { type: "micOn" }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 55,
      columnNumber: 8
    }) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 54,
      columnNumber: 7
    }) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 53,
      columnNumber: 6
    }) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 52,
      columnNumber: 32
    }) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Tooltip, { content: "Cannot unmute", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { displayType: mutedDisplayType, disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { type: "micOff" }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 60,
      columnNumber: 7
    }) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 59,
      columnNumber: 6
    }) }, void 0, false, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 58,
      columnNumber: 18
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Portal, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Overlay, {}, void 0, false, {
        fileName: "app/components/MuteUserButton.tsx",
        lineNumber: 65,
        columnNumber: 5
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        AlertDialog_default.Content,
        {
          onCloseAutoFocus: (e2) => e2.preventDefault(),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Title, { children: [
              "Mute ",
              data?.displayName
            ] }, void 0, true, {
              fileName: "app/components/MuteUserButton.tsx",
              lineNumber: 70,
              columnNumber: 6
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Description, { children: "They will need to unmute themselves to be heard again." }, void 0, false, {
              fileName: "app/components/MuteUserButton.tsx",
              lineNumber: 71,
              columnNumber: 6
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Actions, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Cancel, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { className: "text-sm", displayType: "secondary", children: "Cancel" }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 76,
                columnNumber: 8
              }) }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 75,
                columnNumber: 7
              }),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AlertDialog_default.Action, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { onClick: () => {
                room.websocket.send(JSON.stringify({
                  type: "muteUser",
                  id: user.id
                }));
              }, className: "text-sm", displayType: "danger", children: "Mute" }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 81,
                columnNumber: 8
              }) }, void 0, false, {
                fileName: "app/components/MuteUserButton.tsx",
                lineNumber: 80,
                columnNumber: 7
              })
            ] }, void 0, true, {
              fileName: "app/components/MuteUserButton.tsx",
              lineNumber: 74,
              columnNumber: 6
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/MuteUserButton.tsx",
          lineNumber: 66,
          columnNumber: 5
        }
      )
    ] }, void 0, true, {
      fileName: "app/components/MuteUserButton.tsx",
      lineNumber: 64,
      columnNumber: 4
    })
  ] }, void 0, true, {
    fileName: "app/components/MuteUserButton.tsx",
    lineNumber: 51,
    columnNumber: 10
  });
};
_s11(MuteUserButton, "Huxc+ViWRWeyT/WEbdbWjG8TD7w=", false, function() {
  return [useRoomContext, useUserMetadata];
});
_c12 = MuteUserButton;
var _c12;
$RefreshReg$(_c12, "MuteUserButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/OptionalLink.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/OptionalLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/OptionalLink.tsx"
  );
  import.meta.hot.lastModified = "1738073419112.8145";
}
function OptionalLink({
  children,
  className,
  href,
  ...rest
}) {
  if (href === void 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className, children }, void 0, false, {
      fileName: "app/components/OptionalLink.tsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href, className: cn("no-underline hover:underline", className), ...rest, children }, void 0, false, {
    fileName: "app/components/OptionalLink.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c13 = OptionalLink;
var _c13;
$RefreshReg$(_c13, "OptionalLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ParticipantsMenu.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ParticipantsMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s12 = $RefreshSig$();
var _s26 = $RefreshSig$();
var _s33 = $RefreshSig$();
var _s42 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ParticipantsMenu.tsx"
  );
  import.meta.hot.lastModified = "1738073419113.3616";
}
var UserListItem = ({
  user,
  audioTrack
}) => {
  _s12();
  const {
    traceLink
  } = useRoomContext();
  const {
    data
  } = useUserMetadata(user.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { className: "flex items-center gap-4 text-base h-9", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mr-auto overflow-hidden whitespace-nowrap text-ellipsis", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(OptionalLink, { href: user.transceiverSessionId ? populateTraceLink(user.transceiverSessionId, traceLink) : void 0, target: "_blank", rel: "noopener noreferrer", children: data?.displayName }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 50,
      columnNumber: 5
    }) }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 49,
      columnNumber: 4
    }),
    audioTrack && user.tracks.audioEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AudioIndicator, { audioTrack }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 55,
      columnNumber: 6
    }) }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 54,
      columnNumber: 47
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(MuteUserButton, { user }, void 0, false, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 57,
      columnNumber: 4
    })
  ] }, void 0, true, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 48,
    columnNumber: 10
  });
};
_s12(UserListItem, "9Q/NPvAI5LaMd8Nz/PsChtpCCmc=", false, function() {
  return [useRoomContext, useUserMetadata];
});
_c14 = UserListItem;
var OtherUser = ({
  user
}) => {
  _s26();
  const audioTrack = usePulledAudioTrack(user.tracks.audio);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(UserListItem, { user, audioTrack }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 69,
    columnNumber: 10
  });
};
_s26(OtherUser, "/n3JAqIzuAb8VZjtuh9Jo33nezY=", false, function() {
  return [usePulledAudioTrack];
});
_c26 = OtherUser;
var participantCount = (count) => `${count} Participant${count > 1 ? "s" : ""}`;
var ParticipantsButton = ({
  className,
  ...rest
}) => {
  _s33();
  const {
    room: {
      otherUsers
    }
  } = useRoomContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ParticipantsDialog, { ...rest, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Tooltip, { content: participantCount(otherUsers.length + 1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Trigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Button, { className: cn("relative", className), displayType: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { type: "userGroup" }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 90,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 89,
    columnNumber: 6
  }) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 88,
    columnNumber: 5
  }) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 87,
    columnNumber: 4
  }) }, void 0, false, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 86,
    columnNumber: 10
  });
};
_s33(ParticipantsButton, "jXS23yfDln+RpYgvIFRILljo7nM=", false, function() {
  return [useRoomContext];
});
_c34 = ParticipantsButton;
var ParticipantsDialog = ({
  children,
  otherUsers,
  identity: identity2,
  open,
  onOpenChange
}) => {
  _s42();
  const {
    userMedia
  } = useRoomContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Dialog, { open, onOpenChange, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Portal3, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogOverlay, {}, void 0, false, {
        fileName: "app/components/ParticipantsMenu.tsx",
        lineNumber: 115,
        columnNumber: 5
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "text-xl font-bold", children: participantCount(otherUsers.length + 1) }, void 0, false, {
          fileName: "app/components/ParticipantsMenu.tsx",
          lineNumber: 118,
          columnNumber: 7
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { className: "space-y-2", children: [
          identity2 && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(UserListItem, { user: identity2, audioTrack: userMedia.audioStreamTrack, children: identity2.name }, void 0, false, {
            fileName: "app/components/ParticipantsMenu.tsx",
            lineNumber: 122,
            columnNumber: 21
          }),
          otherUsers.map((u3) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(OtherUser, { user: u3 }, u3.id, false, {
            fileName: "app/components/ParticipantsMenu.tsx",
            lineNumber: 125,
            columnNumber: 29
          }))
        ] }, void 0, true, {
          fileName: "app/components/ParticipantsMenu.tsx",
          lineNumber: 121,
          columnNumber: 7
        })
      ] }, void 0, true, {
        fileName: "app/components/ParticipantsMenu.tsx",
        lineNumber: 117,
        columnNumber: 6
      }) }, void 0, false, {
        fileName: "app/components/ParticipantsMenu.tsx",
        lineNumber: 116,
        columnNumber: 5
      })
    ] }, void 0, true, {
      fileName: "app/components/ParticipantsMenu.tsx",
      lineNumber: 114,
      columnNumber: 4
    })
  ] }, void 0, true, {
    fileName: "app/components/ParticipantsMenu.tsx",
    lineNumber: 111,
    columnNumber: 10
  });
};
_s42(ParticipantsDialog, "7lE0qpw/cqR15oBMizxgyG4BIvw=", false, function() {
  return [useRoomContext];
});
_c44 = ParticipantsDialog;
var _c14;
var _c26;
var _c34;
var _c44;
$RefreshReg$(_c14, "UserListItem");
$RefreshReg$(_c26, "OtherUser");
$RefreshReg$(_c34, "ParticipantsButton");
$RefreshReg$(_c44, "ParticipantsDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useCopyToClipboard.tsx
var import_react15 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useCopyToClipboard.tsx"
  );
  import.meta.hot.lastModified = "1738073419116.2925";
}
function useCopyToClipboard(delay = 2e3) {
  const [copied, setCopied] = (0, import_react15.useState)(false);
  const timeoutRef = (0, import_react15.useRef)(-1);
  const copy = (0, import_react15.useCallback)(
    (value) => {
      navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, delay);
    },
    [delay]
  );
  (0, import_react15.useEffect)(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return [copied, copy];
}

// app/components/TextArea.tsx
var import_react16 = __toESM(require_react());
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TextArea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TextArea.tsx"
  );
  import.meta.hot.lastModified = "1738073419115.0684";
}
var TextArea = (0, import_react16.forwardRef)(_c15 = ({
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("textarea", { ref, className: cn("bg-zinc-50 dark:bg-zinc-600 text-base border-2 border-zinc-500 w-full resize-none block p-2 rounded", className), ...rest }, void 0, false, {
  fileName: "app/components/TextArea.tsx",
  lineNumber: 26,
  columnNumber: 12
}));
_c27 = TextArea;
TextArea.displayName = "TextArea";
var _c15;
var _c27;
$RefreshReg$(_c15, "TextArea$forwardRef");
$RefreshReg$(_c27, "TextArea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ReportBugDialog.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ReportBugDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s13 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ReportBugDialog.tsx"
  );
  import.meta.hot.lastModified = "1738073419114.5461";
}
var ReportBugDialog = ({
  onOpenChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Dialog, { open: true, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Portal3, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogOverlay, {}, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 34,
      columnNumber: 5
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ReportBugForm, {}, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 36,
      columnNumber: 6
    }) }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 35,
      columnNumber: 5
    })
  ] }, void 0, true, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 33,
    columnNumber: 4
  }) }, void 0, false, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 32,
    columnNumber: 10
  });
};
_c16 = ReportBugDialog;
var ReportBugForm = () => {
  _s13();
  const {
    Form,
    data,
    state
  } = useFetcher();
  const {
    room,
    roomHistory
  } = useRoomContext();
  const {
    roomName
  } = useParams();
  const {
    identity: identity2
  } = room;
  const info = {
    roomName,
    identity: identity2,
    roomHistory,
    url: typeof location !== "undefined" ? location.href : void 0
  };
  const [copied, copy] = useCopyToClipboard();
  const infoString = JSON.stringify(info, null, 2);
  return data ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogTitle, { children: "Thank you!" }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 68,
      columnNumber: 4
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Description2, { children: "Your report has been submitted!" }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 69,
      columnNumber: 4
    })
  ] }, void 0, true, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 67,
    columnNumber: 17
  }) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DialogTitle, { children: "Report a bug" }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 71,
      columnNumber: 4
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Description2, { children: "The Calls team will be notified with tracing details." }, void 0, false, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 72,
      columnNumber: 4
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("details", { className: "cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("summary", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "Debug Info (included automatically)" }, void 0, false, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 76,
        columnNumber: 5
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 81,
          columnNumber: 6
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { className: "text-sm", onClick: () => {
          copy(infoString);
        }, children: copied ? "Copied!" : "Copy" }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 82,
          columnNumber: 6
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TextArea, { rows: 10, readOnly: true, defaultValue: infoString }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 87,
          columnNumber: 6
        })
      ] }, void 0, true, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 79,
        columnNumber: 5
      })
    ] }, void 0, true, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 75,
      columnNumber: 4
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Form, { method: "post", action: "/api/bugReport", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Label, { className: "font-bold", children: "Description" }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 93,
          columnNumber: 6
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TextArea, { name: "description", rows: 8 }, void 0, false, {
          fileName: "app/components/ReportBugDialog.tsx",
          lineNumber: 94,
          columnNumber: 6
        })
      ] }, void 0, true, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 92,
        columnNumber: 5
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { name: "info", type: "hidden", value: JSON.stringify(info) }, void 0, false, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 96,
        columnNumber: 5
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { className: "mt-4 text-sm", type: "submit", disabled: state === "submitting", children: state === "submitting" ? "Submitting..." : "Submit" }, void 0, false, {
        fileName: "app/components/ReportBugDialog.tsx",
        lineNumber: 97,
        columnNumber: 5
      })
    ] }, void 0, true, {
      fileName: "app/components/ReportBugDialog.tsx",
      lineNumber: 91,
      columnNumber: 4
    })
  ] }, void 0, true, {
    fileName: "app/components/ReportBugDialog.tsx",
    lineNumber: 70,
    columnNumber: 12
  });
};
_s13(ReportBugForm, "tuW1TGxmCThFK9HthDP9WMiSs3E=", false, function() {
  return [useFetcher, useRoomContext, useParams, useCopyToClipboard];
});
_c28 = ReportBugForm;
var _c16;
var _c28;
$RefreshReg$(_c16, "ReportBugDialog");
$RefreshReg$(_c28, "ReportBugForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/OverflowMenu.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/OverflowMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s14 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/OverflowMenu.tsx"
  );
  import.meta.hot.lastModified = "1738073419112.8928";
}
var OverflowMenu = ({
  bugReportsEnabled
}) => {
  _s14();
  const {
    room: {
      otherUsers,
      identity: identity2
    },
    dataSaverMode,
    setDataSaverMode
  } = useRoomContext();
  const [settingsMenuOpen, setSettingMenuOpen] = (0, import_react18.useState)(false);
  const [bugReportMenuOpen, setBugReportMenuOpen] = (0, import_react18.useState)(false);
  const [participantsMenuOpen, setParticipantsMenuOpen] = (0, import_react18.useState)(false);
  const roomUrl = useRoomUrl();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Root, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Button, { displayType: "secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(VisuallyHidden, { children: "More options" }, void 0, false, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 52,
          columnNumber: 7
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "EllipsisVerticalIcon" }, void 0, false, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 53,
          columnNumber: 7
        })
      ] }, void 0, true, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 51,
        columnNumber: 6
      }) }, void 0, false, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 50,
        columnNumber: 5
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Content, { sideOffset: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => setDataSaverMode(!dataSaverMode), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "WifiIcon", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 59,
            columnNumber: 8
          }),
          dataSaverMode ? "Disable Data Saver" : "Enable Data Saver"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 58,
          columnNumber: 7
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => navigator.clipboard.writeText(roomUrl), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "ClipboardDocumentIcon", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 63,
            columnNumber: 8
          }),
          "Copy URL"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 62,
          columnNumber: 7
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => {
          setSettingMenuOpen(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "cog", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 69,
            columnNumber: 8
          }),
          "Settings"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 66,
          columnNumber: 7
        }),
        bugReportsEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Item, { onSelect: () => {
          setBugReportMenuOpen(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "bug", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 75,
            columnNumber: 9
          }),
          "Report bug"
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 72,
          columnNumber: 29
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Item, { className: "md:hidden", onSelect: () => {
          setParticipantsMenuOpen(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Icon, { type: "userGroup", className: "mr-2" }, void 0, false, {
            fileName: "app/components/OverflowMenu.tsx",
            lineNumber: 81,
            columnNumber: 8
          }),
          participantCount(otherUsers.length + 1)
        ] }, void 0, true, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 78,
          columnNumber: 7
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DropdownMenu_default.Arrow, {}, void 0, false, {
          fileName: "app/components/OverflowMenu.tsx",
          lineNumber: 84,
          columnNumber: 7
        })
      ] }, void 0, true, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 57,
        columnNumber: 6
      }) }, void 0, false, {
        fileName: "app/components/OverflowMenu.tsx",
        lineNumber: 56,
        columnNumber: 5
      })
    ] }, void 0, true, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 49,
      columnNumber: 4
    }),
    settingsMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SettingsDialog, { open: true, onOpenChange: setSettingMenuOpen }, void 0, false, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 88,
      columnNumber: 25
    }),
    bugReportsEnabled && bugReportMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ReportBugDialog, { onOpenChange: setBugReportMenuOpen }, void 0, false, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 89,
      columnNumber: 47
    }),
    participantsMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ParticipantsDialog, { otherUsers, identity: identity2, open: true, onOpenChange: setParticipantsMenuOpen }, void 0, false, {
      fileName: "app/components/OverflowMenu.tsx",
      lineNumber: 90,
      columnNumber: 29
    })
  ] }, void 0, true, {
    fileName: "app/components/OverflowMenu.tsx",
    lineNumber: 48,
    columnNumber: 10
  });
};
_s14(OverflowMenu, "dLjyQlZrLQb4scNp3cpQ+SYwX9c=", false, function() {
  return [useRoomContext, useRoomUrl];
});
_c17 = OverflowMenu;
var _c17;
$RefreshReg$(_c17, "OverflowMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ParticipantLayout.tsx
var import_react29 = __toESM(require_react());

// node_modules/rematrix/dist/rematrix.es.js
function format(source) {
  if (source.constructor !== Array) {
    throw new TypeError("Expected array.");
  }
  if (source.length === 16) {
    return source;
  }
  if (source.length === 6) {
    var matrix = identity();
    matrix[0] = source[0];
    matrix[1] = source[1];
    matrix[4] = source[2];
    matrix[5] = source[3];
    matrix[12] = source[4];
    matrix[13] = source[5];
    return matrix;
  }
  throw new RangeError("Expected array with either 6 or 16 values.");
}
function identity() {
  var matrix = [];
  for (var i3 = 0; i3 < 16; i3++) {
    i3 % 5 == 0 ? matrix.push(1) : matrix.push(0);
  }
  return matrix;
}
function multiply(m3, x2) {
  var fm = format(m3);
  var fx = format(x2);
  var product = [];
  for (var i3 = 0; i3 < 4; i3++) {
    var row = [fm[i3], fm[i3 + 4], fm[i3 + 8], fm[i3 + 12]];
    for (var j2 = 0; j2 < 4; j2++) {
      var k2 = j2 * 4;
      var col = [fx[k2], fx[k2 + 1], fx[k2 + 2], fx[k2 + 3]];
      var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
      product[i3 + k2] = result;
    }
  }
  return product;
}
function parse(source) {
  if (typeof source === "string") {
    var match = source.match(/matrix(3d)?\(([^)]+)\)/);
    if (match) {
      var raw = match[2].split(", ").map(parseFloat);
      return format(raw);
    }
  }
  return identity();
}
function scaleX(scalar) {
  var matrix = identity();
  matrix[0] = scalar;
  return matrix;
}
function scaleY(scalar) {
  var matrix = identity();
  matrix[5] = scalar;
  return matrix;
}
function translateX(distance) {
  var matrix = identity();
  matrix[12] = distance;
  return matrix;
}
function translateY(distance) {
  var matrix = identity();
  matrix[13] = distance;
  return matrix;
}

// node_modules/flip-toolkit/lib/index.es.js
var e = function(t) {
  return "number" == typeof t;
};
var i = function(t) {
  return "function" == typeof t;
};
var n = function(t) {
  return "[object Object]" === Object.prototype.toString.call(t);
};
var r = function(t) {
  return Array.prototype.slice.apply(t);
};
var s = function(t) {
  var e2 = t.reduce(function(t2, e3) {
    return t2[e3] = (t2[e3] || 0) + 1, t2;
  }, {});
  return Object.keys(e2).filter(function(t2) {
    return e2[t2] > 1;
  });
};
function a(t) {
  return [].slice.call(arguments, 1).forEach(function(e2) {
    if (e2) for (var i3 in e2) Object.prototype.hasOwnProperty.call(e2, i3) && (t[i3] = e2[i3]);
  }), t;
}
var o;
var l = function(t, e2, i3) {
  return t + (e2 - t) * i3;
};
var p = { __proto__: null, isNumber: e, isFunction: i, isObject: n, toArray: r, getDuplicateValsAsStrings: s, assign: a, tweenProp: l };
var c = "data-flip-id";
var u = "data-inverse-flip-id";
var d = "data-portal-key";
var f = "data-exit-container";
var h = { __proto__: null, DATA_FLIP_ID: c, DATA_INVERSE_FLIP_ID: u, DATA_FLIP_COMPONENT_ID: "data-flip-component-id", DATA_FLIP_CONFIG: "data-flip-config", DATA_PORTAL_KEY: d, DATA_EXIT_CONTAINER: f };
var g = { noWobble: { stiffness: 200, damping: 26 }, gentle: { stiffness: 120, damping: 14 }, veryGentle: { stiffness: 130, damping: 17 }, wobbly: { stiffness: 180, damping: 12 }, stiff: { stiffness: 260, damping: 26 } };
var m = function(t) {
  return n(t) ? t : Object.keys(g).indexOf(t) > -1 ? g[t] : {};
};
"undefined" != typeof window && (o = window.requestAnimationFrame);
var v = o = o || function(t) {
  window.setTimeout(t, 1e3 / 60);
};
var y = Date.now();
var _ = "object" == typeof performance && "function" == typeof performance.now ? function() {
  return performance.now();
} : function() {
  return Date.now() - y;
};
function S(t, e2) {
  var i3 = t.indexOf(e2);
  -1 !== i3 && t.splice(i3, 1);
}
var E = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.run = function() {
    var t2 = this;
    v(function() {
      t2.springSystem.loop(_());
    });
  }, t;
}();
var A = function() {
  this.position = 0, this.velocity = 0;
};
var C = 0;
var b = 1e-3;
var I = /* @__PURE__ */ function() {
  function t(t2) {
    this._id = "s" + C++, this._springSystem = t2, this.listeners = [], this._startValue = 0, this._currentState = new A(), this._displacementFromRestThreshold = 1e-3, this._endValue = 0, this._overshootClampingEnabled = false, this._previousState = new A(), this._restSpeedThreshold = 1e-3, this._tempState = new A(), this._timeAccumulator = 0, this._wasAtRest = true, this._cachedSpringConfig = {};
  }
  var e2 = t.prototype;
  return e2.getId = function() {
    return this._id;
  }, e2.destroy = function() {
    this.listeners = [], this._springSystem.deregisterSpring(this);
  }, e2.setSpringConfig = function(t2) {
    return this._springConfig = t2, this;
  }, e2.getCurrentValue = function() {
    return this._currentState.position;
  }, e2.getDisplacementDistanceForState = function(t2) {
    return Math.abs(this._endValue - t2.position);
  }, e2.setEndValue = function(t2) {
    if (t2 === this._endValue) return this;
    if (this.prevEndValue = t2, this._endValue === t2 && this.isAtRest()) return this;
    this._startValue = this.getCurrentValue(), this._endValue = t2, this._springSystem.activateSpring(this.getId());
    for (var e3 = 0, i3 = this.listeners.length; e3 < i3; e3++) {
      var n2 = this.listeners[e3].onSpringEndStateChange;
      n2 && n2(this);
    }
    return this;
  }, e2.setVelocity = function(t2) {
    return t2 === this._currentState.velocity || (this._currentState.velocity = t2, this._springSystem.activateSpring(this.getId())), this;
  }, e2.setCurrentValue = function(t2) {
    this._startValue = t2, this._currentState.position = t2;
    for (var e3 = 0, i3 = this.listeners.length; e3 < i3; e3++) {
      var n2 = this.listeners[e3];
      n2.onSpringUpdate && n2.onSpringUpdate(this);
    }
    return this;
  }, e2.setAtRest = function() {
    return this._endValue = this._currentState.position, this._tempState.position = this._currentState.position, this._currentState.velocity = 0, this;
  }, e2.setOvershootClampingEnabled = function(t2) {
    return this._overshootClampingEnabled = t2, this;
  }, e2.isOvershooting = function() {
    var t2 = this._startValue, e3 = this._endValue;
    return this._springConfig.tension > 0 && (t2 < e3 && this.getCurrentValue() > e3 || t2 > e3 && this.getCurrentValue() < e3);
  }, e2.advance = function(t2, e3) {
    var i3 = this.isAtRest();
    if (!i3 || !this._wasAtRest) {
      var n2 = e3;
      e3 > 0.064 && (n2 = 0.064), this._timeAccumulator += n2;
      for (var r2, s3, a3, o3, l3, p3, c3 = this._springConfig.tension, u3 = this._springConfig.friction, d3 = this._currentState.position, f3 = this._currentState.velocity, h3 = this._tempState.position, g3 = this._tempState.velocity; this._timeAccumulator >= b; ) this._timeAccumulator -= b, this._timeAccumulator < b && (this._previousState.position = d3, this._previousState.velocity = f3), s3 = c3 * (this._endValue - h3) - u3 * f3, o3 = c3 * (this._endValue - (h3 = d3 + (r2 = f3) * b * 0.5)) - u3 * (g3 = f3 + s3 * b * 0.5), p3 = c3 * (this._endValue - (h3 = d3 + (a3 = g3) * b * 0.5)) - u3 * (g3 = f3 + o3 * b * 0.5), h3 = d3 + (l3 = g3) * b, d3 += 1 / 6 * (r2 + 2 * (a3 + l3) + (g3 = f3 + p3 * b)) * b, f3 += 1 / 6 * (s3 + 2 * (o3 + p3) + (c3 * (this._endValue - h3) - u3 * g3)) * b;
      this._tempState.position = h3, this._tempState.velocity = g3, this._currentState.position = d3, this._currentState.velocity = f3, this._timeAccumulator > 0 && this._interpolate(this._timeAccumulator / b), (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) && (this._springConfig.tension > 0 ? (this._startValue = this._endValue, this._currentState.position = this._endValue) : (this._endValue = this._currentState.position, this._startValue = this._endValue), this.setVelocity(0), i3 = true);
      var m3 = false;
      this._wasAtRest && (this._wasAtRest = false, m3 = true);
      var v3 = false;
      i3 && (this._wasAtRest = true, v3 = true), this.notifyPositionUpdated(m3, v3);
    }
  }, e2.notifyPositionUpdated = function(t2, e3) {
    var i3 = this;
    this.listeners.filter(Boolean).forEach(function(n2) {
      t2 && n2.onSpringActivate && !i3._onActivateCalled && (n2.onSpringActivate(i3), i3._onActivateCalled = true), n2.onSpringUpdate && n2.onSpringUpdate(i3), e3 && n2.onSpringAtRest && n2.onSpringAtRest(i3);
    });
  }, e2.systemShouldAdvance = function() {
    return !this.isAtRest() || !this.wasAtRest();
  }, e2.wasAtRest = function() {
    return this._wasAtRest;
  }, e2.isAtRest = function() {
    return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || 0 === this._springConfig.tension);
  }, e2._interpolate = function(t2) {
    this._currentState.position = this._currentState.position * t2 + this._previousState.position * (1 - t2), this._currentState.velocity = this._currentState.velocity * t2 + this._previousState.velocity * (1 - t2);
  }, e2.addListener = function(t2) {
    return this.listeners.push(t2), this;
  }, e2.addOneTimeListener = function(t2) {
    var e3 = this;
    return Object.keys(t2).forEach(function(i3) {
      var n2;
      t2[i3] = (n2 = t2[i3], function() {
        n2.apply(void 0, [].slice.call(arguments)), e3.removeListener(t2);
      });
    }), this.listeners.push(t2), this;
  }, e2.removeListener = function(t2) {
    return S(this.listeners, t2), this;
  }, t;
}();
var w = /* @__PURE__ */ function() {
  function t(t2) {
    this.looper = t2 || new E(), this.looper.springSystem = this, this.listeners = [], this._activeSprings = [], this._idleSpringIndices = [], this._isIdle = true, this._lastTimeMillis = -1, this._springRegistry = {};
  }
  var e2 = t.prototype;
  return e2.createSpring = function(t2, e3) {
    return this.createSpringWithConfig({ tension: t2, friction: e3 });
  }, e2.createSpringWithConfig = function(t2) {
    var e3 = new I(this);
    return this.registerSpring(e3), e3.setSpringConfig(t2), e3;
  }, e2.getIsIdle = function() {
    return this._isIdle;
  }, e2.registerSpring = function(t2) {
    this._springRegistry[t2.getId()] = t2;
  }, e2.deregisterSpring = function(t2) {
    S(this._activeSprings, t2), delete this._springRegistry[t2.getId()];
  }, e2.advance = function(t2, e3) {
    for (var i3 = this; this._idleSpringIndices.length > 0; ) this._idleSpringIndices.pop();
    for (this._activeSprings.filter(Boolean).forEach(function(n3) {
      n3.systemShouldAdvance() ? n3.advance(t2 / 1e3, e3 / 1e3) : i3._idleSpringIndices.push(i3._activeSprings.indexOf(n3));
    }); this._idleSpringIndices.length > 0; ) {
      var n2 = this._idleSpringIndices.pop();
      n2 >= 0 && this._activeSprings.splice(n2, 1);
    }
  }, e2.loop = function(t2) {
    var e3;
    -1 === this._lastTimeMillis && (this._lastTimeMillis = t2 - 1);
    var i3 = t2 - this._lastTimeMillis;
    this._lastTimeMillis = t2;
    var n2 = 0, r2 = this.listeners.length;
    for (n2 = 0; n2 < r2; n2++) (e3 = this.listeners[n2]).onBeforeIntegrate && e3.onBeforeIntegrate(this);
    for (this.advance(t2, i3), 0 === this._activeSprings.length && (this._isIdle = true, this._lastTimeMillis = -1), n2 = 0; n2 < r2; n2++) (e3 = this.listeners[n2]).onAfterIntegrate && e3.onAfterIntegrate(this);
    this._isIdle || this.looper.run();
  }, e2.activateSpring = function(t2) {
    var e3 = this._springRegistry[t2];
    -1 === this._activeSprings.indexOf(e3) && this._activeSprings.push(e3), this.getIsIdle() && (this._isIdle = false, this.looper.run());
  }, t;
}();
var O = new w();
var x = function(t) {
  var e2 = t.springConfig, i3 = e2.overshootClamping, n2 = t.getOnUpdateFunc, r2 = t.onAnimationEnd, s3 = t.onSpringActivate, a3 = O.createSpring(e2.stiffness, e2.damping);
  a3.setOvershootClampingEnabled(!!i3);
  var o3 = { onSpringActivate: s3, onSpringAtRest: function() {
    a3.destroy(), r2();
  }, onSpringUpdate: n2({ spring: a3, onAnimationEnd: r2 }) };
  return a3.addListener(o3), a3;
};
var U = function(t) {
  var e2 = x(t);
  return e2.setEndValue(1), e2;
};
var V = function(t, e2) {
  if (void 0 === e2 && (e2 = {}), t && t.length) {
    e2.reverse && t.reverse();
    var i3, n2 = "number" != typeof (i3 = e2.speed) ? 1.1 : 1 + Math.min(Math.max(5 * i3, 0), 5), r2 = 1 / Math.max(Math.min(t.length, 100), 10), s3 = t.map(function(t2, e3) {
      var i4 = t2.getOnUpdateFunc;
      return t2.getOnUpdateFunc = function(t3) {
        var a3 = i4(t3);
        return function(t4) {
          var i5 = t4.getCurrentValue();
          (i5 = i5 < 0.01 ? 0 : i5 > 0.99 ? 1 : i5) >= r2 && s3[e3 + 1] && s3[e3 + 1](Math.max(Math.min(i5 * n2, 1), 0)), a3(t4);
        };
      }, t2;
    }).map(function(t2) {
      var e3 = x(t2);
      if (e3) return e3.setEndValue.bind(e3);
    }).filter(Boolean);
    s3[0] && s3[0](1);
  }
};
var F = function(t) {
  return [0, 1, 4, 5, 12, 13].map(function(e2) {
    return t[e2];
  });
};
var P = function(t) {
  return t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0;
};
function D(t) {
  return JSON.parse(t.dataset.flipConfig || "{}");
}
var R = function(t, e2) {
  var i3;
  return a(t, ((i3 = {})[e2[0]] = e2[1], i3));
};
var T = function(t, e2) {
  return r(e2 ? document.querySelectorAll("[" + d + '="' + e2 + '"]') : t.querySelectorAll("[" + c + "]"));
};
var M = function(t) {
  return t.map(function(t2) {
    return [t2, t2.getBoundingClientRect()];
  });
};
var k = true;
var L = function(n2) {
  var o3 = n2.cachedOrderedFlipIds, p3 = void 0 === o3 ? [] : o3, f3 = n2.inProgressAnimations, h3 = void 0 === f3 ? {} : f3, v3 = n2.flippedElementPositionsBeforeUpdate, y3 = void 0 === v3 ? {} : v3, _2 = n2.flipCallbacks, S2 = void 0 === _2 ? {} : _2, E2 = n2.containerEl, A2 = n2.applyTransformOrigin, C2 = n2.spring, b2 = n2.debug, I2 = n2.portalKey, w2 = n2.staggerConfig, O2 = void 0 === w2 ? {} : w2, x2 = n2.decisionData, j2 = void 0 === x2 ? {} : x2, B2 = n2.handleEnterUpdateDelete, N2 = n2.onComplete, L2 = n2.onStart;
  if (k && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var q2, X = M(T((q2 = { element: E2, portalKey: I2 }).element, q2.portalKey)).map(function(t) {
      var e2 = t[0], i3 = t[1], n3 = window.getComputedStyle(e2);
      return [e2.dataset.flipId, { element: e2, rect: i3, opacity: parseFloat(n3.opacity), transform: n3.transform }];
    }).reduce(R, {}), Y2 = function(t) {
      var e2 = t.containerEl, i3 = t.portalKey;
      return i3 ? /* @__PURE__ */ function(t2) {
        return function(e3) {
          return r(document.querySelectorAll("[" + d + '="' + t2 + '"]' + e3));
        };
      }(i3) : e2 ? function(t2) {
        var e3 = Math.random().toFixed(5);
        return t2.dataset.flipperId = e3, function(i4) {
          return r(t2.querySelectorAll('[data-flipper-id="' + e3 + '"] ' + i4));
        };
      }(e2) : function() {
        return [];
      };
    }({ containerEl: E2, portalKey: I2 }), W2 = /* @__PURE__ */ function(t) {
      return function(e2) {
        return t("[" + c + '="' + e2 + '"]')[0];
      };
    }(Y2), K = function(t) {
      return y3[t] && X[t];
    }, H = Object.keys(y3).concat(Object.keys(X)).filter(function(t) {
      return !K(t);
    }), J = { flipCallbacks: S2, getElement: W2, flippedElementPositionsBeforeUpdate: y3, flippedElementPositionsAfterUpdate: X, inProgressAnimations: h3, decisionData: j2 }, z = function(t) {
      var e2, i3 = t.unflippedIds, n3 = t.flipCallbacks, r2 = t.getElement, s3 = t.flippedElementPositionsBeforeUpdate, a3 = t.flippedElementPositionsAfterUpdate, o4 = t.inProgressAnimations, l3 = t.decisionData, p4 = i3.filter(function(t2) {
        return a3[t2];
      }).filter(function(t2) {
        return n3[t2] && n3[t2].onAppear;
      }), c3 = i3.filter(function(t2) {
        return s3[t2] && n3[t2] && n3[t2].onExit;
      }), u3 = new Promise(function(t2) {
        e2 = t2;
      }), d3 = [], f4 = 0, h4 = c3.map(function(t2, i4) {
        var r3 = s3[t2].domDataForExitAnimations, a4 = r3.element, p5 = r3.parent, c4 = r3.childPosition, u4 = c4.top, h5 = c4.left, g3 = c4.width, m3 = c4.height;
        "static" === getComputedStyle(p5).position && (p5.style.position = "relative"), a4.style.transform = "matrix(1, 0, 0, 1, 0, 0)", a4.style.position = "absolute", a4.style.top = u4 + "px", a4.style.left = h5 + "px", a4.style.height = m3 + "px", a4.style.width = g3 + "px";
        var v4 = d3.filter(function(t3) {
          return t3[0] === p5;
        })[0];
        v4 || (v4 = [p5, document.createDocumentFragment()], d3.push(v4)), v4[1].appendChild(a4), f4 += 1;
        var y4 = function() {
          try {
            p5.removeChild(a4);
          } catch (t3) {
          } finally {
            0 == (f4 -= 1) && e2();
          }
        };
        return o4[t2] = { stop: y4 }, function() {
          return n3[t2].onExit(a4, i4, y4, l3);
        };
      });
      return d3.forEach(function(t2) {
        t2[0].appendChild(t2[1]);
      }), h4.length || e2(), { hideEnteringElements: function() {
        p4.forEach(function(t2) {
          var e3 = r2(t2);
          e3 && (e3.style.opacity = "0");
        });
      }, animateEnteringElements: function() {
        p4.forEach(function(t2, e3) {
          var i4 = r2(t2);
          i4 && n3[t2].onAppear(i4, e3, l3);
        });
      }, animateExitingElements: function() {
        return h4.forEach(function(t2) {
          return t2();
        }), u3;
      } };
    }(a({}, J, { unflippedIds: H })), G = z.hideEnteringElements, Q = z.animateEnteringElements, Z = z.animateExitingElements, $ = a({}, J, { containerEl: E2, flippedIds: p3.filter(K), applyTransformOrigin: A2, spring: C2, debug: b2, staggerConfig: O2, scopedSelector: Y2, onComplete: N2 });
    L2 && L2(E2, j2);
    var tt = function(n3) {
      var o4, p4 = n3.flippedIds, c3 = n3.flipCallbacks, d3 = n3.inProgressAnimations, f4 = n3.flippedElementPositionsBeforeUpdate, h4 = n3.flippedElementPositionsAfterUpdate, v4 = n3.applyTransformOrigin, y4 = n3.spring, _3 = n3.getElement, S3 = n3.debug, E3 = n3.staggerConfig, A3 = void 0 === E3 ? {} : E3, C3 = n3.decisionData, b3 = void 0 === C3 ? {} : C3, I3 = n3.onComplete, w3 = n3.containerEl, O3 = new Promise(function(t) {
        o4 = t;
      });
      if (I3 && O3.then(function() {
        return I3(w3, b3);
      }), !p4.length) return function() {
        return o4([]), O3;
      };
      var x3 = [], R2 = _3(p4[0]), T2 = R2 ? R2.ownerDocument.querySelector("body") : document.querySelector("body");
      s(p4);
      var M2 = p4.map(function(n4) {
        var s3 = f4[n4].rect, p5 = h4[n4].rect, _4 = f4[n4].opacity, S4 = h4[n4].opacity, E4 = p5.width < 1 || p5.height < 1, A4 = h4[n4].element;
        if (!P(s3) && !P(p5)) return false;
        if (!A4) return false;
        var C4, I4, w4, O4 = D(A4), U2 = (w4 = (I4 = void 0 === (C4 = { flipperSpring: y4, flippedSpring: O4.spring }) ? {} : C4).flippedSpring, a({}, g.noWobble, m(I4.flipperSpring), m(w4))), V2 = true === O4.stagger ? "default" : O4.stagger, R3 = { element: A4, id: n4, stagger: V2, springConfig: U2 };
        if (c3[n4] && c3[n4].shouldFlip && !c3[n4].shouldFlip(b3.previous, b3.current)) return false;
        var k3 = Math.abs(s3.left - p5.left) + Math.abs(s3.top - p5.top), j4 = Math.abs(s3.width - p5.width) + Math.abs(s3.height - p5.height), B4 = Math.abs(S4 - _4);
        if (0 === s3.height && 0 === p5.height || 0 === s3.width && 0 === p5.width || k3 < 0.5 && j4 < 0.5 && B4 < 0.01) return false;
        var N4 = parse(h4[n4].transform), L4 = { matrix: N4 }, q4 = { matrix: [] }, X2 = [N4];
        O4.translate && (X2.push(translateX(s3.left - p5.left)), X2.push(translateY(s3.top - p5.top))), O4.scale && (X2.push(scaleX(Math.max(s3.width, 1) / Math.max(p5.width, 1))), X2.push(scaleY(Math.max(s3.height, 1) / Math.max(p5.height, 1)))), O4.opacity && (q4.opacity = _4, L4.opacity = S4);
        var Y3 = [];
        if (!c3[n4] || !c3[n4].shouldInvert || c3[n4].shouldInvert(b3.previous, b3.current)) {
          var W3 = function(t, e2) {
            return r(t.querySelectorAll("[" + u + '="' + e2 + '"]'));
          }(A4, n4);
          Y3 = W3.map(function(t) {
            return [t, D(t)];
          });
        }
        q4.matrix = F(X2.reduce(multiply)), L4.matrix = F(L4.matrix);
        var K2, H2 = function(t) {
          var i3 = t.element, n5 = t.invertedChildren, r2 = t.body;
          return function(t2) {
            var s4 = t2.matrix, a3 = t2.opacity, o5 = t2.forceMinVals;
            if (e(a3) && (i3.style.opacity = a3 + ""), o5 && (i3.style.minHeight = "1px", i3.style.minWidth = "1px"), s4) {
              var l3 = function(t3) {
                return "matrix(" + t3.join(", ") + ")";
              }(s4);
              i3.style.transform = l3, n5 && function(t3) {
                var e2 = t3.matrix, i4 = t3.body;
                t3.invertedChildren.forEach(function(t4) {
                  var n6 = t4[0], r3 = t4[1];
                  if (i4.contains(n6)) {
                    var s5 = e2[0], a4 = e2[3], o6 = e2[5], l4 = { translateX: 0, translateY: 0, scaleX: 1, scaleY: 1 }, p6 = "";
                    r3.translate && (l4.translateX = -e2[4] / s5, l4.translateY = -o6 / a4, p6 += "translate(" + l4.translateX + "px, " + l4.translateY + "px)"), r3.scale && (l4.scaleX = 1 / s5, l4.scaleY = 1 / a4, p6 += " scale(" + l4.scaleX + ", " + l4.scaleY + ")"), n6.style.transform = p6;
                  }
                });
              }({ invertedChildren: n5, matrix: s4, body: r2 });
            }
          };
        }({ element: A4, invertedChildren: Y3, body: T2 });
        if (c3[n4] && c3[n4].onComplete) {
          var J2 = c3[n4].onComplete;
          K2 = function() {
            return J2(A4, b3);
          };
        }
        var z2 = e(q4.opacity) && e(L4.opacity) && q4.opacity !== L4.opacity, G2 = false;
        return a({}, R3, { stagger: V2, springConfig: U2, getOnUpdateFunc: function(t) {
          var e2 = t.spring, i3 = t.onAnimationEnd;
          return d3[n4] = { destroy: e2.destroy.bind(e2), onAnimationEnd: i3 }, function(t2) {
            c3[n4] && c3[n4].onSpringUpdate && c3[n4].onSpringUpdate(t2.getCurrentValue()), G2 || (G2 = true, c3[n4] && c3[n4].onStart && c3[n4].onStart(A4, b3));
            var e3 = t2.getCurrentValue();
            if (T2.contains(A4)) {
              var i4 = { matrix: [] };
              i4.matrix = q4.matrix.map(function(t3, i5) {
                return l(t3, L4.matrix[i5], e3);
              }), z2 && (i4.opacity = l(q4.opacity, L4.opacity, e3)), H2(i4);
            } else t2.destroy();
          };
        }, initializeFlip: function() {
          H2({ matrix: q4.matrix, opacity: z2 ? q4.opacity : void 0, forceMinVals: E4 }), c3[n4] && c3[n4].onStartImmediate && c3[n4].onStartImmediate(A4, b3), O4.transformOrigin ? A4.style.transformOrigin = O4.transformOrigin : v4 && (A4.style.transformOrigin = "0 0"), Y3.forEach(function(t) {
            var e2 = t[0], i3 = t[1];
            i3.transformOrigin ? e2.style.transformOrigin = i3.transformOrigin : v4 && (e2.style.transformOrigin = "0 0");
          });
        }, onAnimationEnd: function(t) {
          delete d3[n4], i(K2) && K2(), A4.style.transform = "", Y3.forEach(function(t2) {
            t2[0].style.transform = "";
          }), E4 && A4 && (A4.style.minHeight = "", A4.style.minWidth = ""), t || (x3.push(n4), x3.length >= M2.length && o4(x3));
        }, delayUntil: O4.delayUntil });
      }).filter(Boolean);
      if (M2.forEach(function(t) {
        return (0, t.initializeFlip)();
      }), S3) return function() {
      };
      var k2 = M2.filter(function(t) {
        return t.delayUntil && (e2 = t.delayUntil, M2.filter(function(t2) {
          return t2.id === e2;
        }).length);
        var e2;
      }), j3 = {}, B3 = {}, N3 = {};
      k2.forEach(function(t) {
        t.stagger ? (N3[t.stagger] = true, B3[t.delayUntil] ? B3[t.delayUntil].push(t.stagger) : B3[t.delayUntil] = [t.stagger]) : j3[t.delayUntil] ? j3[t.delayUntil].push(t) : j3[t.delayUntil] = [t];
      });
      var L3 = M2.filter(function(t) {
        return t.stagger;
      }).reduce(function(t, e2) {
        return t[e2.stagger] ? t[e2.stagger].push(e2) : t[e2.stagger] = [e2], t;
      }, {}), q3 = M2.filter(function(t) {
        return -1 === k2.indexOf(t);
      });
      return q3.forEach(function(t) {
        t.onSpringActivate = function() {
          j3[t.id] && j3[t.id].forEach(U), B3[t.id] && Object.keys(B3[t.id].reduce(function(t2, e2) {
            var i3;
            return a(t2, ((i3 = {})[e2] = true, i3));
          }, {})).forEach(function(t2) {
            V(L3[t2], A3[t2]);
          });
        };
      }), function() {
        return M2.length || o4([]), q3.filter(function(t) {
          return !t.stagger;
        }).forEach(U), Object.keys(L3).forEach(function(t) {
          N3[t] || V(L3[t], A3[t]);
        }), O3;
      };
    }($);
    B2 ? B2({ hideEnteringElements: G, animateEnteringElements: Q, animateExitingElements: Z, animateFlippedElements: tt }) : (G(), Z().then(Q), tt());
  }
};
var q = function(t) {
  var e2 = t.element, i3 = t.flipCallbacks, n2 = void 0 === i3 ? {} : i3, s3 = t.inProgressAnimations, o3 = void 0 === s3 ? {} : s3, l3 = T(e2, t.portalKey), p3 = r(e2.querySelectorAll("[" + u + "]")), c3 = {}, d3 = [], h3 = {};
  l3.filter(function(t2) {
    return n2 && n2[t2.dataset.flipId] && n2[t2.dataset.flipId].onExit;
  }).forEach(function(t2) {
    var e3 = t2.parentNode;
    if (t2.closest) {
      var i4 = t2.closest("[" + f + "]");
      i4 && (e3 = i4);
    }
    var n3 = d3.findIndex(function(t3) {
      return t3[0] === e3;
    });
    -1 === n3 && (d3.push([e3, e3.getBoundingClientRect()]), n3 = d3.length - 1), c3[t2.dataset.flipId] = d3[n3][1], h3[t2.dataset.flipId] = e3;
  });
  var g3 = M(l3), m3 = g3.map(function(t2) {
    var e3 = t2[0], i4 = t2[1], r2 = {};
    if (n2 && n2[e3.dataset.flipId] && n2[e3.dataset.flipId].onExit) {
      var s4 = c3[e3.dataset.flipId];
      a(r2, { element: e3, parent: h3[e3.dataset.flipId], childPosition: { top: i4.top - s4.top, left: i4.left - s4.left, width: i4.width, height: i4.height } });
    }
    return [e3.dataset.flipId, { rect: i4, opacity: parseFloat(window.getComputedStyle(e3).opacity || "1"), domDataForExitAnimations: r2 }];
  }).reduce(R, {});
  return function(t2, e3) {
    Object.keys(t2).forEach(function(e4) {
      t2[e4].destroy && t2[e4].destroy(), t2[e4].onAnimationEnd && t2[e4].onAnimationEnd(true), delete t2[e4];
    }), e3.forEach(function(t3) {
      t3.style.transform = "", t3.style.opacity = "";
    });
  }(o3, l3.concat(p3)), { flippedElementPositions: m3, cachedOrderedFlipIds: g3.map(function(t2) {
    return t2[0].dataset.flipId;
  }) };
};
var Y = new w();

// node_modules/react-flip-toolkit/lib/index.es.js
var import_react19 = __toESM(require_react());
function s2() {
  return s2 = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r2 = arguments[t];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
    }
    return e2;
  }, s2.apply(this, arguments);
}
function c2(e2, t) {
  return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t2) {
    return e3.__proto__ = t2, e3;
  }, c2(e2, t);
}
function d2(e2, t) {
  if (null == e2) return {};
  var r2, n2, i3 = {}, o3 = Object.keys(e2);
  for (n2 = 0; n2 < o3.length; n2++) t.indexOf(r2 = o3[n2]) >= 0 || (i3[r2] = e2[r2]);
  return i3;
}
var f2 = /* @__PURE__ */ (0, import_react19.createContext)({});
var u2 = /* @__PURE__ */ (0, import_react19.createContext)("portal");
var h2 = /* @__PURE__ */ function(r2) {
  var n2, o3;
  function p3() {
    for (var e2, t = arguments.length, n3 = new Array(t), i3 = 0; i3 < t; i3++) n3[i3] = arguments[i3];
    return (e2 = r2.call.apply(r2, [this].concat(n3)) || this).inProgressAnimations = {}, e2.flipCallbacks = {}, e2.el = void 0, e2;
  }
  o3 = r2, (n2 = p3).prototype = Object.create(o3.prototype), n2.prototype.constructor = n2, c2(n2, o3);
  var l3 = p3.prototype;
  return l3.getSnapshotBeforeUpdate = function(t) {
    return t.flipKey !== this.props.flipKey && this.el ? q({ element: this.el, flipCallbacks: this.flipCallbacks, inProgressAnimations: this.inProgressAnimations, portalKey: this.props.portalKey }) : null;
  }, l3.componentDidUpdate = function(e2, r3, n3) {
    this.props.flipKey !== e2.flipKey && this.el && L({ flippedElementPositionsBeforeUpdate: n3.flippedElementPositions, cachedOrderedFlipIds: n3.cachedOrderedFlipIds, containerEl: this.el, inProgressAnimations: this.inProgressAnimations, flipCallbacks: this.flipCallbacks, applyTransformOrigin: this.props.applyTransformOrigin, spring: this.props.spring, debug: this.props.debug, portalKey: this.props.portalKey, staggerConfig: this.props.staggerConfig, handleEnterUpdateDelete: this.props.handleEnterUpdateDelete, decisionData: { previous: e2.decisionData, current: this.props.decisionData }, onComplete: this.props.onComplete, onStart: this.props.onStart });
  }, l3.render = function() {
    var e2 = this, t = this.props, r3 = t.portalKey, n3 = /* @__PURE__ */ import_react19.default.createElement(f2.Provider, { value: this.flipCallbacks }, /* @__PURE__ */ import_react19.default.createElement(t.element, { className: t.className, ref: function(t2) {
      return e2.el = t2;
    } }, this.props.children));
    return r3 && (n3 = /* @__PURE__ */ import_react19.default.createElement(u2.Provider, { value: r3 }, n3)), n3;
  }, p3;
}(import_react19.Component);
h2.defaultProps = { applyTransformOrigin: true, element: "div" };
var m2 = ["children", "flipId", "inverseFlipId", "portalKey"];
var y2 = ["children", "flipId", "shouldFlip", "shouldInvert", "onAppear", "onStart", "onStartImmediate", "onComplete", "onExit", "onSpringUpdate"];
var g2 = function(e2) {
  var t, i3 = e2.children, o3 = e2.flipId, p3 = e2.inverseFlipId, s3 = e2.portalKey, c3 = d2(e2, m2), f3 = i3, u3 = /* @__PURE__ */ function(e3) {
    return "function" == typeof e3;
  }(f3);
  if (!u3) try {
    f3 = import_react19.Children.only(i3);
  } catch (e3) {
    throw new Error("Each Flipped component must wrap a single child");
  }
  c3.scale || c3.translate || c3.opacity || p.assign(c3, { translate: true, scale: true, opacity: true });
  var h3 = ((t = {})[h.DATA_FLIP_CONFIG] = JSON.stringify(c3), t);
  return void 0 !== o3 ? h3[h.DATA_FLIP_ID] = String(o3) : p3 && (h3[h.DATA_INVERSE_FLIP_ID] = String(p3)), void 0 !== s3 && (h3[h.DATA_PORTAL_KEY] = s3), u3 ? f3(h3) : /* @__PURE__ */ (0, import_react19.cloneElement)(f3, h3);
};
var v2 = function(e2) {
  var t = e2.children, n2 = e2.flipId, o3 = e2.shouldFlip, p3 = e2.shouldInvert, l3 = e2.onAppear, a3 = e2.onStart, c3 = e2.onStartImmediate, h3 = e2.onComplete, m3 = e2.onExit, v3 = e2.onSpringUpdate, I2 = d2(e2, y2);
  return t ? I2.inverseFlipId ? /* @__PURE__ */ import_react19.default.createElement(g2, s2({}, I2), t) : /* @__PURE__ */ import_react19.default.createElement(u2.Consumer, null, function(e3) {
    return import_react19.default.createElement(f2.Consumer, null, function(d3) {
      return p.isObject(d3) && n2 && (d3[n2] = { shouldFlip: o3, shouldInvert: p3, onAppear: l3, onStart: a3, onStartImmediate: c3, onComplete: h3, onExit: m3, onSpringUpdate: v3 }), /* @__PURE__ */ import_react19.default.createElement(g2, s2({ flipId: n2 }, I2, { portalKey: e3 }), t);
    });
  }) : null;
};
v2.displayName = "Flipped";

// app/components/ParticipantLayout.tsx
var import_useMeasure = __toESM(require_useMeasure());

// app/utils/calculateLayout.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/calculateLayout.ts"
  );
  import.meta.hot.lastModified = "1738073419122.016";
}
function possibleLayouts(count) {
  const max = Math.ceil(Math.sqrt(count));
  let layouts = [{ rows: max, cols: max }];
  for (let rows = 1; rows < max; rows++) {
    layouts.push({
      rows,
      cols: Math.ceil(count / rows)
    });
  }
  for (let cols = 1; cols < max; cols++) {
    layouts.push({
      cols,
      rows: Math.ceil(count / cols)
    });
  }
  return layouts;
}
function calculateLayout(config) {
  const { count, height, width } = config;
  if (height === 0 || width === 0) {
    return {
      cols: 0,
      rows: 0
    };
  }
  let idealLayout = null;
  let largestArea = 0;
  const targetTileAspectRatio = 4 / 3;
  for (const layout of possibleLayouts(count)) {
    const tileHeight = height / layout.rows;
    const tileWidth = width / layout.cols;
    const constrainingDimension = tileHeight > tileWidth ? "width" : "height";
    const area = constrainingDimension === "height" ? (
      // calculate tileWidth
      targetTileAspectRatio * tileHeight * // then multiply by tileHeight
      tileHeight
    ) : (
      // calculate tileHeight
      1 / targetTileAspectRatio * tileWidth * // then multiply by tileWidth
      tileWidth
    );
    if (area > largestArea) {
      largestArea = area;
      idealLayout = layout;
    }
  }
  invariant(idealLayout);
  return idealLayout;
}

// app/components/Participant.tsx
var import_react28 = __toESM(require_react());

// app/hooks/useDeadPulledTrackMonitor.tsx
var import_react21 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useDeadPulledTrackMonitor.tsx"
  );
  import.meta.hot.lastModified = "1738073419116.3677";
}
function useDeadPulledTrackMonitor(trackInfo, sessionId, enabled, track, name) {
  const [deadTrack, setDeadTrack] = (0, import_react21.useState)(false);
  const { partyTracks, traceLink, room, feedbackEnabled } = useRoomContext();
  const peerConnection = useObservableAsValue(partyTracks.peerConnection$);
  const timeoutRef = (0, import_react21.useRef)(-1);
  (0, import_react21.useEffect)(() => {
    if (!peerConnection || !track || !enabled || deadTrack || !feedbackEnabled)
      return;
    timeoutRef.current = window.setTimeout(() => {
      peerConnection.getStats(track).then((report) => {
        if (timeoutRef.current === -1) return;
        const stat = [...report.values()].find(
          (s3) => s3.trackIdentifier === track.id
        );
        if (stat?.bytesReceived === 0) {
          setDeadTrack(true);
        }
      });
    }, 1e4);
    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = -1;
    };
  }, [deadTrack, enabled, feedbackEnabled, partyTracks, peerConnection, track]);
  (0, import_react21.useEffect)(() => {
    if (!sessionId || !deadTrack || !feedbackEnabled) return;
    const pullSessionTrace = populateTraceLink(sessionId, traceLink);
    const [pushedSessionId, trackId] = trackInfo?.split("/") ?? [];
    const pushedSessionTrace = populateTraceLink(pushedSessionId, traceLink);
    if (pushedSessionTrace && pullSessionTrace) {
      const info = {
        pullSessionTrace,
        pushedSessionTrace,
        trackId,
        pullingUser: room.identity?.name,
        pushingUser: name
      };
      fetch("/api/deadTrack", {
        method: "POST",
        body: JSON.stringify(info)
      });
    }
  }, [
    deadTrack,
    peerConnection,
    feedbackEnabled,
    name,
    sessionId,
    room.identity?.name,
    traceLink,
    trackInfo
  ]);
}

// app/hooks/useStageManager.ts
var import_react22 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useStageManager.ts"
  );
  import.meta.hot.lastModified = "1738073419117.7947";
}
var resolveRoster = (currentRoster, newRoster) => {
  const newRosterMap = new Map(newRoster.map((item) => [item.id, item]));
  const currentRosterMap = new Map(currentRoster.map((item) => [item.id, item]));
  const remainingNewItems = newRoster.filter(
    ({ id }) => !currentRosterMap.has(id)
  );
  return currentRoster.reduce((acc, currentRosterItem) => {
    const item = newRosterMap.get(currentRosterItem.id);
    if (item === void 0) {
      const firstNewItem = remainingNewItems[0];
      if (!firstNewItem) return acc;
      acc.push(firstNewItem);
      remainingNewItems.splice(0, 1);
    } else {
      acc.push(item);
    }
    return acc;
  }, []).concat(remainingNewItems);
};
var screenshareSuffix = "_screenshare";
function useStageManager(users, limit, self) {
  const usersAndScreenshares = (0, import_react22.useMemo)(
    () => users.concat(self ? [self] : []).flatMap(
      (u3) => u3.tracks.screenshare ? [
        u3,
        {
          ...u3,
          id: u3.id + screenshareSuffix,
          tracks: {
            ...u3.tracks,
            video: u3.tracks.screenshare,
            videoEnabled: u3.tracks.screenShareEnabled
          }
        }
      ] : [u3]
    ),
    [self, users]
  );
  const [actorsOnStage, setActorsOnStage] = (0, import_react22.useState)(
    usersAndScreenshares.slice(0, limit)
  );
  const [activityRecord, setActivityRecord] = (0, import_react22.useState)(
    {}
  );
  const recordActivity = (0, import_react22.useCallback)((actor) => {
    setActivityRecord((ah) => ({ ...ah, [actor.id]: Date.now() }));
  }, []);
  const actorsThatShouldBeOnStage = (0, import_react22.useMemo)(
    () => [...usersAndScreenshares].sort((a3, b2) => {
      if (a3.id === self?.id) return -1;
      if (b2.id === self?.id) return 1;
      if (a3.id.includes(screenshareSuffix) && !b2.id.includes(screenshareSuffix))
        return -1;
      if (!a3.id.includes(screenshareSuffix) && b2.id.includes(screenshareSuffix))
        return 1;
      return (activityRecord[b2.id] ?? 0) - (activityRecord[a3.id] ?? 0);
    }).slice(0, limit),
    [activityRecord, limit, self?.id, usersAndScreenshares]
  );
  const newUsers = (0, import_react22.useMemo)(
    () => usersAndScreenshares.filter((a3) => activityRecord[a3.id] === void 0),
    [activityRecord, usersAndScreenshares]
  );
  (0, import_react22.useEffect)(() => {
    newUsers.forEach(recordActivity);
  }, [newUsers, recordActivity]);
  (0, import_react22.useEffect)(() => {
    setActorsOnStage(
      (actorsAlreadyOnStage) => resolveRoster(actorsAlreadyOnStage, actorsThatShouldBeOnStage)
    );
  }, [actorsThatShouldBeOnStage, limit]);
  return { actorsOnStage, recordActivity };
}

// app/utils/isNonNullable.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/isNonNullable.ts"
  );
  import.meta.hot.lastModified = "1738073419122.8958";
}
function isNonNullable(value) {
  return value !== null && value !== void 0;
}

// app/utils/rxjs/ewma.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/rxjs/ewma.ts"
  );
  import.meta.hot.lastModified = "1738073419125.9277";
}
var ewma = (halflifeTime, defaultValue = 0) => (observable) => new Observable((subscribe) => {
  const ewma2 = new Ewma(halflifeTime, defaultValue);
  observable.subscribe({
    ...subscribe,
    next: (value) => {
      ewma2.insert(value);
      subscribe.next(ewma2.value());
    }
  });
});

// app/utils/rxjs/getPacketLoss$.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/rxjs/getPacketLoss$.ts"
  );
  import.meta.hot.lastModified = "1738073419126.1663";
}
function statsReports$(peerConnection$, statReportInterval = 3e3) {
  return combineLatest([peerConnection$, interval(statReportInterval)]).pipe(
    switchMap(([peerConnection]) => peerConnection.getStats()),
    pairwise()
  );
}
function getPacketLoss$(peerConnection$, tracks$) {
  return combineLatest([
    tracks$,
    peerConnection$,
    statsReports$(peerConnection$)
  ]).pipe(
    map(([tracks, peerConnection, [previousStatsReport, newStatsReport]]) => {
      const trackToMidMap = peerConnection.getTransceivers().reduce((map2, t) => {
        const track = t.sender.track ?? t.receiver.track;
        if (track !== null && t.mid !== null) {
          map2.set(track, t.mid);
        }
        return map2;
      }, /* @__PURE__ */ new Map());
      const relevantMids = /* @__PURE__ */ new Set();
      for (const track of tracks) {
        const mid = trackToMidMap.get(track);
        if (mid) {
          relevantMids.add(mid);
        }
      }
      let inboundPacketsReceived = 0;
      let inboundPacketsLost = 0;
      let outboundPacketsSent = 0;
      let outboundPacketsLost = 0;
      newStatsReport.forEach((report) => {
        if (!relevantMids.has(report.mid)) return;
        const previous = previousStatsReport.get(report.id);
        if (!previous) return;
        if (report.type === "inbound-rtp") {
          inboundPacketsLost += report.packetsLost - previous.packetsLost;
          inboundPacketsReceived += report.packetsReceived - previous.packetsReceived;
        } else if (report.type === "outbound-rtp") {
          const packetsSent2 = report.packetsSent - previous.packetsSent;
          const remoteInboundReport = Array.from(newStatsReport.values()).find(
            (r2) => r2.type === "remote-inbound-rtp" && r2.ssrc === report.ssrc
          );
          const previousRemoteInboundReport = Array.from(
            previousStatsReport.values()
          ).find(
            (r2) => r2.type === "remote-inbound-rtp" && r2.ssrc === previous.ssrc
          );
          if (remoteInboundReport && previousRemoteInboundReport && packetsSent2 > 0) {
            outboundPacketsSent += report.packetsSent - previous.packetsSent;
            outboundPacketsLost += remoteInboundReport.packetsLost - previousRemoteInboundReport.packetsLost;
          }
        }
      });
      let packetsLost = inboundPacketsLost + outboundPacketsLost;
      let packetsSent = inboundPacketsReceived + outboundPacketsSent + packetsLost;
      let packetLossPercentage = 0;
      if (packetsSent > 0) {
        packetLossPercentage = Math.max(0, packetsLost / packetsSent);
      }
      return packetLossPercentage;
    })
  );
}

// app/hooks/usePulledVideoTrack.tsx
var import_react24 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/usePulledVideoTrack.tsx"
  );
  import.meta.hot.lastModified = "1738073419116.95";
}
function usePulledVideoTrack(video) {
  const { partyTracks } = useRoomContext();
  const [sessionId, trackName] = video?.split("/") ?? [];
  const trackObject = (0, import_react24.useMemo)(
    () => sessionId && trackName ? {
      trackName,
      sessionId,
      location: "remote"
    } : void 0,
    [sessionId, trackName]
  );
  const trackObject$ = useValueAsObservable(trackObject);
  const pulledTrack$ = (0, import_react24.useMemo)(
    () => trackObject$.pipe(
      switchMap(
        (track) => track ? partyTracks.pull(of(track)) : of(void 0)
      )
    ),
    [partyTracks, trackObject$]
  );
  return useObservableAsValue(pulledTrack$);
}

// app/components/AudioGlow.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AudioGlow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s15 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AudioGlow.tsx"
  );
  import.meta.hot.lastModified = "1738073419110.4277";
}
var AudioGlow = ({
  audioTrack,
  children,
  className,
  type
}) => {
  _s15();
  const audioLevel = useAudioLevel(audioTrack);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: cn(type === "text" ? "orange-glow-text" : "orange-glow-box", "opacity-[--opacity] transition-opacity", className), style: {
    "--opacity": Math.min(1, audioLevel * 4)
  }, "aria-hidden": true, children }, void 0, false, {
    fileName: "app/components/AudioGlow.tsx",
    lineNumber: 32,
    columnNumber: 10
  });
};
_s15(AudioGlow, "eP3P6R8HO7u6c8gBbP7H3MTn6kE=", false, function() {
  return [useAudioLevel];
});
_c18 = AudioGlow;
var _c18;
$RefreshReg$(_c18, "AudioGlow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ConnectionIndicator.tsx
var import_react25 = __toESM(require_react());
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ConnectionIndicator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s16 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ConnectionIndicator.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.0886";
}
function getConnectionQuality(packetLoss) {
  if (packetLoss > 0.05) return "bad";
  if (packetLoss > 0.03) return "unhealthy";
  if (packetLoss > 0.01) return "tolerable";
  return "healthy";
}
function ConnectionIndicator(props) {
  _s16();
  const [open, setOpen] = (0, import_react25.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Tooltip, { open, onOpenChange: setOpen, content: `Connection is ${props.quality}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Icon, { className: cn(props.quality === "healthy" && "text-green-400", props.quality === "tolerable" && "text-green-400", props.quality === "unhealthy" && "text-yellow-400", props.quality === "bad" && "text-red-400"), type: props.quality === "bad" || props.quality === "unhealthy" ? "SignalSlashIcon" : "SignalIcon" }, void 0, false, {
    fileName: "app/components/ConnectionIndicator.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/ConnectionIndicator.tsx",
    lineNumber: 36,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/ConnectionIndicator.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s16(ConnectionIndicator, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c19 = ConnectionIndicator;
var _c19;
$RefreshReg$(_c19, "ConnectionIndicator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/HoverFade.tsx
var import_react26 = __toESM(require_react());
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/HoverFade.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s17 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/HoverFade.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.6807";
}
var HoverFade = ({
  timeout = 2e3,
  children,
  className
}) => {
  _s17();
  const [activity, setActivity] = (0, import_react26.useState)(0);
  const [visible, setVisible] = (0, import_react26.useState)(false);
  (0, import_react26.useEffect)(() => {
    let mounted = true;
    if (visible) {
      const t = setTimeout(() => {
        if (mounted) setVisible(false);
      }, timeout);
      return () => {
        clearTimeout(t);
      };
    }
  }, [timeout, visible, activity]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "div",
    {
      className: cn("hover-fade", !visible && "inactive", className),
      onPointerLeave: () => {
        setVisible(false);
      },
      onPointerMove: () => {
        setVisible(true);
        setActivity(Date.now());
      },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/HoverFade.tsx",
      lineNumber: 44,
      columnNumber: 10
    }
  );
};
_s17(HoverFade, "hc+syEWKR/jT501urlU6YRxufBI=");
_c20 = HoverFade;
var _c20;
$RefreshReg$(_c20, "HoverFade");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Participant.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Participant.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s18 = $RefreshSig$();
var _s27 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Participant.tsx"
  );
  import.meta.hot.lastModified = "1738073419113.0427";
}
function useMid(track) {
  _s18();
  const {
    partyTracks
  } = useRoomContext();
  const transceivers$ = (0, import_react28.useMemo)(() => combineLatest([partyTracks.peerConnection$, partyTracks.peerConnection$.pipe(switchMap((peerConnection) => fromEvent(peerConnection, "track")))]).pipe(map(([pc]) => pc.getTransceivers())), [partyTracks.peerConnection$]);
  const transceivers = useObservableAsValue(transceivers$, []);
  if (!track) return null;
  return transceivers.find((t) => t.sender.track === track || t.receiver.track === track)?.mid;
}
_s18(useMid, "w1jS9Lyys9s+L3sQdjp4QtuOvcs=", false, function() {
  return [useRoomContext, useObservableAsValue];
});
var Participant = _s27((0, import_react28.forwardRef)(_c21 = _s27(({
  user
}, ref) => {
  _s27();
  const {
    data
  } = useUserMetadata(user.name);
  const {
    traceLink,
    partyTracks,
    dataSaverMode,
    pinnedTileIds,
    setPinnedTileIds,
    showDebugInfo,
    userMedia,
    room: {
      identity: identity2
    }
  } = useRoomContext();
  const peerConnection = useObservableAsValue(partyTracks.peerConnection$);
  const id = user.id;
  const isSelf = identity2 && id.startsWith(identity2.id);
  const isScreenShare = id.endsWith(screenshareSuffix);
  const isAi = user.id === "ai";
  const aiAudioTrack = usePulledAudioTrack(isAi ? user.tracks.audio : void 0);
  const isSpeaking = useIsSpeaking(user.id === "ai" ? aiAudioTrack : void 0) || user.speaking;
  const pulledAudioTrack = usePulledAudioTrack(isScreenShare ? void 0 : user.tracks.audio);
  const pulledVideoTrack = usePulledVideoTrack(isScreenShare || !isSelf && !dataSaverMode ? user.tracks.video : void 0);
  const audioTrack = isSelf ? userMedia.audioStreamTrack : pulledAudioTrack;
  const videoTrack = isSelf && !isScreenShare ? userMedia.videoStreamTrack : pulledVideoTrack;
  useDeadPulledTrackMonitor(user.tracks.video, user.transceiverSessionId, !!user.tracks.video, videoTrack, user.name);
  useDeadPulledTrackMonitor(user.tracks.audio, user.transceiverSessionId, !!user.tracks.audio, audioTrack, user.name);
  const pinned = pinnedTileIds.includes(id);
  (0, import_react28.useEffect)(() => {
    if (isScreenShare) {
      setPinnedTileIds((ids) => [...ids, id]);
    }
  }, [id, isScreenShare, setPinnedTileIds]);
  const packetLoss$ = (0, import_react28.useMemo)(() => getPacketLoss$(partyTracks.peerConnection$, of([audioTrack, videoTrack].filter(isNonNullable))).pipe(ewma(5e3)), [audioTrack, partyTracks.peerConnection$, videoTrack]);
  const packetLoss = useObservableAsValue(packetLoss$, 0);
  const audioMid = useMid(audioTrack);
  const videoMid = useMid(videoTrack);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "grow shrink text-base basis-[calc(var(--flex-container-width)_-_var(--gap)_*_3)]", ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(v2, { flipId: id + pinned, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: cn("h-full mx-auto overflow-hidden text-white opacity-0 animate-fadeIn", "relative max-w-[--participant-max-width] rounded-xl"), children: [
    !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: cn("absolute inset-0 h-full w-full grid place-items-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "h-[2em] w-[2em] grid place-items-center text-4xl md:text-6xl 2xl:text-8xl relative", children: data?.photob64 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AudioGlow, { className: "absolute inset-0 w-full h-full rounded-full", audioTrack, type: "box" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 110,
        columnNumber: 11
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { className: "rounded-full", src: `data:image/png;base64,${data.photob64}`, alt: data.displayName }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 111,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 109,
      columnNumber: 27
    }) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "relative grid w-full h-full uppercase rounded-full place-items-center bg-zinc-500", children: [
      isSpeaking && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AudioGlow, { type: "text", className: "absolute uppercase", audioTrack, children: user.name.charAt(0) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 113,
        columnNumber: 26
      }),
      user.name.charAt(0)
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 112,
      columnNumber: 19
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 108,
      columnNumber: 8
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 107,
      columnNumber: 25
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(VideoSrcObject, { className: cn("absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity", isSelf && !isScreenShare && "-scale-x-100", {
      "opacity-100": isScreenShare ? user.tracks.screenShareEnabled : user.tracks.videoEnabled && (!dataSaverMode || isSelf)
    }, isSelf && isScreenShare && "opacity-75"), videoTrack }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 120,
      columnNumber: 6
    }),
    !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(HoverFade, { className: "absolute inset-0 grid w-full h-full place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex gap-2 p-2 rounded bg-zinc-900/30", children: !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(MuteUserButton, { displayType: "ghost", mutedDisplayType: "ghost", user }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 137,
      columnNumber: 28
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 124,
      columnNumber: 8
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 123,
      columnNumber: 25
    }),
    audioTrack && !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "absolute left-4 top-4", children: [
      user.tracks.audioEnabled && user.tracks.videoEnabled && isSpeaking && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AudioIndicator, { audioTrack }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 141,
        columnNumber: 79
      }),
      !user.tracks.audioEnabled && !user.tracks.audioUnavailable && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Tooltip, { content: "Mic is turned off", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "indication-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Icon, { type: "micOff" }, void 0, false, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 145,
          columnNumber: 11
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(VisuallyHidden, { children: "Mic is muted" }, void 0, false, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 146,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 144,
        columnNumber: 10
      }) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 143,
        columnNumber: 71
      }),
      user.tracks.audioUnavailable && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Tooltip, { content: "Mic is unavailable. User cannot unmute.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "indication-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Icon, { type: "micOff", className: "text-red-400" }, void 0, false, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 151,
          columnNumber: 11
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(VisuallyHidden, { children: "Mic is muted" }, void 0, false, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 152,
          columnNumber: 11
        })
      ] }, void 0, true, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 150,
        columnNumber: 10
      }) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 149,
        columnNumber: 41
      })
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 140,
      columnNumber: 39
    }),
    data?.displayName && user.transceiverSessionId && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center gap-2 absolute m-2 text-shadow left-1 bottom-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ConnectionIndicator, { quality: getConnectionQuality(packetLoss) }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 157,
        columnNumber: 8
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(OptionalLink, { className: "leading-none", href: populateTraceLink(user.transceiverSessionId, traceLink), target: "_blank", rel: "noopener noreferrer", children: [
        data.displayName,
        showDebugInfo && peerConnection && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "opacity-50", children: [
          " ",
          [audioMid && `audio mid: ${audioMid}`, videoMid && `video mid: ${videoMid}`].filter(Boolean).join(" ")
        ] }, void 0, true, {
          fileName: "app/components/Participant.tsx",
          lineNumber: 160,
          columnNumber: 45
        })
      ] }, void 0, true, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 158,
        columnNumber: 8
      })
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 156,
      columnNumber: 57
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "absolute top-0 right-0 flex gap-4 p-4", children: user.raisedHand && !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Tooltip, { content: "Hand is raised", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Icon, { className: "indication-shadow", type: "handRaised" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 170,
        columnNumber: 11
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Icon, { className: "absolute top-0 left-0 text-orange-300 animate-ping", type: "handRaised" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 171,
        columnNumber: 11
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(VisuallyHidden, { children: "Hand is raised" }, void 0, false, {
        fileName: "app/components/Participant.tsx",
        lineNumber: 172,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 169,
      columnNumber: 10
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 168,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 167,
      columnNumber: 45
    }) }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 166,
      columnNumber: 6
    }),
    (isSpeaking || user.raisedHand) && !isScreenShare && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: cn("pointer-events-none absolute inset-0 h-full w-full border-4 border-orange-400", !pinned && "rounded-xl") }, void 0, false, {
      fileName: "app/components/Participant.tsx",
      lineNumber: 177,
      columnNumber: 60
    })
  ] }, void 0, true, {
    fileName: "app/components/Participant.tsx",
    lineNumber: 106,
    columnNumber: 5
  }) }, void 0, false, {
    fileName: "app/components/Participant.tsx",
    lineNumber: 105,
    columnNumber: 4
  }) }, void 0, false, {
    fileName: "app/components/Participant.tsx",
    lineNumber: 104,
    columnNumber: 10
  });
}, "GBqz/3yza3Y9Igw30s+aCreKbEg=", false, function() {
  return [useUserMetadata, useRoomContext, useObservableAsValue, usePulledAudioTrack, useIsSpeaking, usePulledAudioTrack, usePulledVideoTrack, useDeadPulledTrackMonitor, useDeadPulledTrackMonitor, useObservableAsValue, useMid, useMid];
})), "GBqz/3yza3Y9Igw30s+aCreKbEg=", false, function() {
  return [useUserMetadata, useRoomContext, useObservableAsValue, usePulledAudioTrack, useIsSpeaking, usePulledAudioTrack, usePulledVideoTrack, useDeadPulledTrackMonitor, useDeadPulledTrackMonitor, useObservableAsValue, useMid, useMid];
});
_c29 = Participant;
Participant.displayName = "Participant";
var _c21;
var _c29;
$RefreshReg$(_c21, "Participant$forwardRef");
$RefreshReg$(_c29, "Participant");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ParticipantLayout.tsx
var import_jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ParticipantLayout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s19 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ParticipantLayout.tsx"
  );
  import.meta.hot.lastModified = "1738073419113.1226";
}
function ParticipantLayout(props) {
  _s19();
  const [containerRef, {
    width: containerWidth,
    height: containerHeight
  }] = (0, import_useMeasure.default)();
  const [firstFlexChildRef, {
    width: firstFlexChildWidth
  }] = (0, import_useMeasure.default)();
  const flexContainerWidth = (0, import_react29.useMemo)(() => 100 / calculateLayout({
    count: props.users.length,
    height: containerHeight,
    width: containerWidth
  }).cols + "%", [containerHeight, containerWidth, props.users.length]);
  const id = (0, import_react29.useId)();
  if (props.users.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(h2, { flipKey: id + props.users.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute inset-0 h-full w-full isolate flex flex-wrap justify-around gap-[--gap]", style: {
    // the flex basis that is needed to achieve row layout
    "--flex-container-width": flexContainerWidth,
    // the size of the first user's flex container
    "--participant-max-width": firstFlexChildWidth + "px"
  }, ref: containerRef, children: props.users.map((user, i3) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Participant, { user, ref: i3 === 0 ? firstFlexChildRef : void 0 }, user.id, false, {
    fileName: "app/components/ParticipantLayout.tsx",
    lineNumber: 52,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/ParticipantLayout.tsx",
    lineNumber: 46,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/ParticipantLayout.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s19(ParticipantLayout, "xKuBpJwsfDPy762eNhd2UD0j75c=", false, function() {
  return [import_useMeasure.default, import_useMeasure.default, import_react29.useId];
});
_c30 = ParticipantLayout;
var _c30;
$RefreshReg$(_c30, "ParticipantLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/RaiseHandButton.tsx
var import_jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/RaiseHandButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/RaiseHandButton.tsx"
  );
  import.meta.hot.lastModified = "1738073419113.543";
}
var RaiseHandButton = ({
  raisedHand,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Tooltip, { content: raisedHand ? "Lower hand" : "Raise Hand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { displayType: raisedHand ? "primary" : "secondary", onClick: (_e) => {
  onClick && onClick();
  if (!raisedHand) playSound("raiseHand");
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Icon, { type: "handRaised" }, void 0, false, {
  fileName: "app/components/RaiseHandButton.tsx",
  lineNumber: 33,
  columnNumber: 4
}) }, void 0, false, {
  fileName: "app/components/RaiseHandButton.tsx",
  lineNumber: 29,
  columnNumber: 3
}) }, void 0, false, {
  fileName: "app/components/RaiseHandButton.tsx",
  lineNumber: 28,
  columnNumber: 7
});
_c31 = RaiseHandButton;
var _c31;
$RefreshReg$(_c31, "RaiseHandButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ScreenshareButton.tsx
var import_react30 = __toESM(require_react());
var import_jsx_dev_runtime23 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ScreenshareButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s20 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ScreenshareButton.tsx"
  );
  import.meta.hot.lastModified = "1738073419114.6582";
}
var ScreenshareButton = () => {
  _s20();
  const {
    userMedia: {
      screenShareVideoTrack,
      startScreenShare,
      endScreenShare
    },
    room: {
      otherUsers
    }
  } = useRoomContext();
  const otherUserIsSharing = otherUsers.some((u3) => u3.tracks.screenshare);
  const sharing = screenShareVideoTrack !== void 0;
  const [canShareScreen, setCanShareScreen] = (0, import_react30.useState)(true);
  (0, import_react30.useEffect)(() => {
    setCanShareScreen(typeof navigator.mediaDevices !== "undefined" && navigator.mediaDevices.getDisplayMedia !== void 0);
  }, []);
  if (!canShareScreen) return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Tooltip, { content: otherUserIsSharing ? "Someone else is sharing" : sharing ? "Stop sharing" : "Share screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Button, { displayType: sharing ? "danger" : "secondary", disabled: otherUserIsSharing, onClick: sharing ? endScreenShare : startScreenShare, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(VisuallyHidden, { children: "Share screen" }, void 0, false, {
      fileName: "app/components/ScreenshareButton.tsx",
      lineNumber: 54,
      columnNumber: 5
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { type: "screenshare" }, void 0, false, {
      fileName: "app/components/ScreenshareButton.tsx",
      lineNumber: 55,
      columnNumber: 5
    })
  ] }, void 0, true, {
    fileName: "app/components/ScreenshareButton.tsx",
    lineNumber: 53,
    columnNumber: 4
  }) }, void 0, false, {
    fileName: "app/components/ScreenshareButton.tsx",
    lineNumber: 52,
    columnNumber: 10
  });
};
_s20(ScreenshareButton, "IiN+g5X68IERIk+K7jxKiPHb++E=", false, function() {
  return [useRoomContext];
});
_c35 = ScreenshareButton;
var _c35;
$RefreshReg$(_c35, "ScreenshareButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useBroadcastStatus.ts
var import_react31 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useBroadcastStatus.ts"
  );
  import.meta.hot.lastModified = "1738073419116.157";
}
function useBroadcastStatus({
  userMedia,
  identity: identity2,
  websocket,
  partyTracks,
  pushedTracks,
  raisedHand,
  speaking
}) {
  const {
    audioEnabled,
    videoEnabled,
    screenShareEnabled,
    audioUnavailableReason
  } = userMedia;
  const { audio, video, screenshare } = pushedTracks;
  const { sessionId } = useObservableAsValue(partyTracks.session$) ?? {};
  const audioUnavailable = audioUnavailableReason !== void 0;
  const id = identity2?.id;
  const name = identity2?.name;
  (0, import_react31.useEffect)(() => {
    if (id && name) {
      let sendUserUpdate2 = function() {
        websocket.send(
          JSON.stringify({
            type: "userUpdate",
            user
          })
        );
      };
      var sendUserUpdate = sendUserUpdate2;
      const user = {
        id,
        name,
        joined: true,
        raisedHand,
        speaking,
        transceiverSessionId: sessionId,
        tracks: {
          audioEnabled,
          audioUnavailable,
          videoEnabled,
          screenShareEnabled,
          video,
          audio,
          screenshare
        }
      };
      sendUserUpdate2();
      websocket.addEventListener("open", sendUserUpdate2);
      return () => websocket.removeEventListener("open", sendUserUpdate2);
    }
  }, [
    id,
    name,
    websocket,
    sessionId,
    audio,
    video,
    screenshare,
    audioEnabled,
    videoEnabled,
    screenShareEnabled,
    raisedHand,
    speaking,
    audioUnavailableReason,
    audioUnavailable
  ]);
  useUnmount_default(() => {
    if (id && name) {
      websocket.send(
        JSON.stringify({
          type: "userUpdate",
          user: {
            id,
            name,
            joined: false,
            raisedHand,
            speaking,
            transceiverSessionId: sessionId,
            tracks: {
              audioUnavailable
            }
          }
        })
      );
    }
  });
}

// app/hooks/useShowDebugInfoShortcut.ts
var import_react33 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useShowDebugInfoShortcut.ts"
  );
  import.meta.hot.lastModified = "1738073419117.4788";
}
function useShowDebugInfoShortcut() {
  const { showDebugInfo, setShowDebugInfo } = useRoomContext();
  (0, import_react33.useEffect)(() => {
    const handler = (e2) => {
      if (e2.key.toLowerCase() === "d" && e2.ctrlKey) {
        e2.preventDefault();
        setShowDebugInfo(!showDebugInfo);
      }
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [setShowDebugInfo, showDebugInfo]);
}

// app/hooks/useSounds.ts
var import_react34 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useSounds.ts"
  );
  import.meta.hot.lastModified = "1738073419117.5522";
}
function useSounds(users) {
  const previousUserCount = usePrevious(users.length);
  (0, import_react34.useEffect)(() => {
    if (users.length > 5 || previousUserCount === void 0 || previousUserCount === users.length)
      return;
    if (users.length > previousUserCount) {
      playSound("join");
    } else {
      playSound("leave");
    }
  }, [previousUserCount, users.length]);
  const raisedHandCound = users.filter((u3) => u3.raisedHand).length;
  const previousHandRaisedCount = usePrevious(raisedHandCound);
  (0, import_react34.useEffect)(() => {
    if (previousHandRaisedCount === void 0 || raisedHandCound === previousHandRaisedCount) {
      return;
    }
    if (raisedHandCound > previousHandRaisedCount) {
      playSound("raiseHand");
    }
  }, [raisedHandCound, previousHandRaisedCount]);
  useMount_default(() => {
    playSound("join");
  });
  useUnmount_default(() => {
    playSound("leave");
  });
}

// app/hooks/useUserJoinLeaveToasts.tsx
var import_react35 = __toESM(require_react());
var import_jsx_dev_runtime24 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/hooks/useUserJoinLeaveToasts.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s21 = $RefreshSig$();
var _s28 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useUserJoinLeaveToasts.tsx"
  );
  import.meta.hot.lastModified = "1738073419117.8704";
}
function UserJoinedOrLeftToast(props) {
  _s21();
  const {
    traceLink
  } = useRoomContext();
  const {
    data
  } = useUserMetadata(props.user.name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center justify-center gap-2 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Toast_default.Title, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(OptionalLink, { href: props.user.transceiverSessionId ? populateTraceLink(props.user.transceiverSessionId, traceLink) : void 0, target: "_blank", rel: "noopener noreferrer", children: data?.displayName }, void 0, false, {
        fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      " ",
      props.type
    ] }, void 0, true, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Toast_default.Close, { className: "flex items-center justify-center w-5 h-5 px-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { "aria-hidden": true, children: "\xD7" }, void 0, false, {
        fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(VisuallyHidden, { children: "Dismiss" }, void 0, false, {
        fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 45,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s21(UserJoinedOrLeftToast, "9Q/NPvAI5LaMd8Nz/PsChtpCCmc=", false, function() {
  return [useRoomContext, useUserMetadata];
});
_c36 = UserJoinedOrLeftToast;
function useUserJoinLeaveToasts(users) {
  _s28();
  const [trackedUsers, setTrackedUsers] = (0, import_react35.useState)(users);
  const dispatchToast = useDispatchToast();
  (0, import_react35.useEffect)(() => {
    const newUsers = users.filter((u3) => !trackedUsers.some((tu) => tu.id === u3.id));
    const usersLeft = trackedUsers.filter((u3) => !users.some((tu) => tu.id === u3.id));
    newUsers.forEach((u3) => dispatchToast(/* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(UserJoinedOrLeftToast, { user: u3, type: "joined" }, void 0, false, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 62,
      columnNumber: 41
    }, this)));
    usersLeft.forEach((u3) => dispatchToast(/* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(UserJoinedOrLeftToast, { user: u3, type: "left" }, void 0, false, {
      fileName: "app/hooks/useUserJoinLeaveToasts.tsx",
      lineNumber: 63,
      columnNumber: 42
    }, this)));
  }, [dispatchToast, trackedUsers, users]);
  (0, import_react35.useEffect)(() => {
    setTrackedUsers(users);
  }, [users]);
}
_s28(useUserJoinLeaveToasts, "rC6VxHiuplQqrYYNF/bE3WoSunQ=", false, function() {
  return [useDispatchToast];
});
var _c36;
$RefreshReg$(_c36, "UserJoinedOrLeftToast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_room.$roomName.room.tsx
var import_getUsername = __toESM(require_getUsername());
var import_jsx_dev_runtime25 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_room.$roomName.room.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s29 = $RefreshSig$();
var _s210 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_room.$roomName.room.tsx"
  );
  import.meta.hot.lastModified = "1738073419119.485";
}
function Room() {
  _s29();
  const {
    joined
  } = useRoomContext();
  const navigate = useNavigate();
  const {
    roomName
  } = useParams();
  const {
    mode: mode2,
    bugReportsEnabled
  } = useLoaderData();
  const [search] = useSearchParams();
  (0, import_react37.useEffect)(() => {
    if (!joined && mode2 !== "development") navigate(`/${roomName}${search.size > 0 ? "?" + search.toString() : ""}`);
  }, [joined, mode2, navigate, roomName, search]);
  if (!joined && mode2 !== "development") return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Toast_default.Provider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(JoinedRoom, { bugReportsEnabled }, void 0, false, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 82,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s29(Room, "fRa3jWDB2KHbO3egBC82QidF6Sc=", false, function() {
  return [useRoomContext, useNavigate, useParams, useLoaderData, useSearchParams];
});
_c37 = Room;
function JoinedRoom({
  bugReportsEnabled
}) {
  _s210();
  const {
    hasDb,
    hasAiCredentials
  } = useLoaderData();
  const {
    userMedia,
    partyTracks,
    pushedTracks,
    showDebugInfo,
    pinnedTileIds,
    room: {
      otherUsers,
      websocket,
      identity: identity2,
      roomState: {
        meetingId
      }
    }
  } = useRoomContext();
  useShowDebugInfoShortcut();
  const [raisedHand, setRaisedHand] = (0, import_react37.useState)(false);
  const speaking = useIsSpeaking(userMedia.audioStreamTrack);
  useMount_default(() => {
    if (otherUsers.length > 5) {
      userMedia.turnMicOff();
    }
  });
  useBroadcastStatus({
    userMedia,
    partyTracks,
    websocket,
    identity: identity2,
    pushedTracks,
    raisedHand,
    speaking
  });
  useSounds(otherUsers);
  useUserJoinLeaveToasts(otherUsers);
  const {
    width
  } = useWindowSize_default();
  const someScreenshare = otherUsers.some((u3) => u3.tracks.screenshare) || Boolean(identity2?.tracks.screenshare);
  const stageLimit = width < 600 ? 2 : someScreenshare ? 5 : 8;
  const {
    recordActivity,
    actorsOnStage
  } = useStageManager(otherUsers, stageLimit, identity2);
  (0, import_react37.useEffect)(() => {
    otherUsers.forEach((u3) => {
      if (u3.speaking || u3.raisedHand) recordActivity(u3);
    });
  }, [otherUsers, recordActivity]);
  const pinnedActors = actorsOnStage.filter((u3) => pinnedTileIds.includes(u3.id));
  const unpinnedActors = actorsOnStage.filter((u3) => !pinnedTileIds.includes(u3.id));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(PullAudioTracks, { audioTracks: otherUsers.map((u3) => u3.tracks.audio).filter(isNonNullable), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col h-full bg-white dark:bg-zinc-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative flex-grow bg-black isolate", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "absolute inset-0 flex isolate gap-[var(--gap)] p-[var(--gap)]", style: {
          "--gap": "1rem"
        }, children: [
          pinnedActors.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex-grow-[5] overflow-hidden relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ParticipantLayout, { users: pinnedActors.filter(isNonNullable) }, void 0, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 154,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 153,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex-grow overflow-hidden relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ParticipantLayout, { users: unpinnedActors.filter(isNonNullable) }, void 0, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 157,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/_room.$roomName.room.tsx",
            lineNumber: 156,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 150,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Toast_default.Viewport, { className: "absolute bottom-0 right-0" }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 160,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName.room.tsx",
        lineNumber: 149,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-2 p-2 text-sm md:gap-4 md:p-5 md:text-base", children: [
        hasAiCredentials && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(AiButton, { recordActivity }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 163,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(MicButton, { warnWhenSpeakingWhileMuted: true }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 164,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CameraButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 165,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ScreenshareButton, {}, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 166,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(RaiseHandButton, { raisedHand, onClick: () => setRaisedHand(!raisedHand) }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 167,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ParticipantsButton, { identity: identity2, otherUsers, className: "hidden md:block" }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 168,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(OverflowMenu, { bugReportsEnabled }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 169,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(LeaveRoomButton, { navigateToFeedbackPage: hasDb, meetingId }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 170,
          columnNumber: 6
        }, this),
        showDebugInfo && meetingId && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(CopyButton, { contentValue: meetingId, children: "Meeting Id" }, void 0, false, {
          fileName: "app/routes/_room.$roomName.room.tsx",
          lineNumber: 171,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_room.$roomName.room.tsx",
        lineNumber: 162,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 148,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(HighPacketLossWarningsToast, {}, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 174,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(IceDisconnectedToast, {}, void 0, false, {
      fileName: "app/routes/_room.$roomName.room.tsx",
      lineNumber: 175,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_room.$roomName.room.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_s210(JoinedRoom, "/xUePkrgS4FrvRVOrbg4zCa4e/o=", false, function() {
  return [useLoaderData, useRoomContext, useShowDebugInfoShortcut, useIsSpeaking, useMount_default, useBroadcastStatus, useSounds, useUserJoinLeaveToasts, useWindowSize_default, useStageManager];
});
_c210 = JoinedRoom;
var _c37;
var _c210;
$RefreshReg$(_c37, "Room");
$RefreshReg$(_c210, "JoinedRoom");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Room as default
};
/*! Bundled license information:

rematrix/dist/rematrix.es.js:
  (*! @license Rematrix v0.2.2
  
  	Copyright 2018 Fisssion LLC.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in
  	all copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  	THE SOFTWARE.
  *)
*/
//# sourceMappingURL=/build/routes/_room.$roomName.room-BFPYXNZ2.js.map
