import {
  Spinner
} from "/build/_shared/chunk-3BSMTK45.js";
import {
  Icon,
  PartyTracks,
  from,
  of,
  setLogLevel,
  switchMap,
  useObservableAsValue,
  useUserMedia,
  useValueAsObservable
} from "/build/_shared/chunk-D4GPKVMH.js";
import "/build/_shared/chunk-YOFVMIGC.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-XYQU32HT.js";
import {
  Button,
  invariant
} from "/build/_shared/chunk-KALH3MK7.js";
import "/build/_shared/chunk-S7OQG6MD.js";
import {
  Outlet,
  useLoaderData,
  useParams
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

// empty-module:~/utils/getIceServers.server
var require_getIceServers = __commonJS({
  "empty-module:~/utils/getIceServers.server"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// app/routes/_room.tsx
var import_cloudflare = __toESM(require_cloudflare());
var import_react13 = __toESM(require_react());

// app/hooks/useIsOnline.ts
var import_react = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useIsOnline.ts"
  );
  import.meta.hot.lastModified = "1738073419116.435";
}
function getSnapshot() {
  return navigator.onLine;
}
function getServerSnapshot() {
  return true;
}
function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
function useIsOnline() {
  return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}

// app/components/EnsureOnline.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/EnsureOnline.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/EnsureOnline.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.4631";
}
function EnsureOnline(props) {
  _s();
  const isOnline = useIsOnline();
  if (!isOnline) {
    return props.fallback;
  }
  return props.children;
}
_s(EnsureOnline, "bAGQ+ieZRXkDkGis+biw2/pOcrw=", false, function() {
  return [useIsOnline];
});
_c = EnsureOnline;
var _c;
$RefreshReg$(_c, "EnsureOnline");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/EnsurePermissions.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/EnsurePermissions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/EnsurePermissions.tsx"
  );
  import.meta.hot.lastModified = "1738073419111.5378";
}
async function getExistingPermissionState() {
  try {
    const query = await navigator.permissions.query({
      name: "microphone"
    });
    return query.state;
  } catch (error) {
    return "unable-to-determine";
  }
}
function EnsurePermissions(props) {
  _s2();
  const [permissionState, setPermissionState] = (0, import_react2.useState)(null);
  const mountedRef = (0, import_react2.useRef)(true);
  (0, import_react2.useEffect)(() => {
    getExistingPermissionState().then((result) => {
      if (mountedRef.current) setPermissionState(result);
    });
    return () => {
      mountedRef.current = false;
    };
  }, []);
  if (permissionState === null) return null;
  if (permissionState === "denied") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-center h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto space-y-2 max-w-80", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Permission denied" }, void 0, false, {
        fileName: "app/components/EnsurePermissions.tsx",
        lineNumber: 50,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You will need to go into your browser settings and manually re-enable permission." }, void 0, false, {
        fileName: "app/components/EnsurePermissions.tsx",
        lineNumber: 51,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EnsurePermissions.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/EnsurePermissions.tsx",
      lineNumber: 48,
      columnNumber: 12
    }, this);
  }
  if (permissionState === "prompt") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid items-center h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-80", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-8", children: "In order to use Orange Meets, you will need to grant permission to your camera and microphone. You will be prompted for access." }, void 0, false, {
        fileName: "app/components/EnsurePermissions.tsx",
        lineNumber: 61,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then((ms) => {
          if (mountedRef.current) setPermissionState("granted");
          ms.getTracks().forEach((t) => t.stop());
        }).catch(() => {
          if (mountedRef.current) setPermissionState("denied");
        });
      }, children: "Allow access" }, void 0, false, {
        fileName: "app/components/EnsurePermissions.tsx",
        lineNumber: 65,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EnsurePermissions.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/EnsurePermissions.tsx",
      lineNumber: 59,
      columnNumber: 12
    }, this);
  }
  return props.children;
}
_s2(EnsurePermissions, "k9dg19vmuJ1QBTaBM+2GEzRUIdw=");
_c2 = EnsurePermissions;
var _c2;
$RefreshReg$(_c2, "EnsurePermissions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/usePeerConnection.tsx
var import_react5 = __toESM(require_react());

// app/hooks/useStablePojo.ts
var import_react3 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useStablePojo.ts"
  );
  import.meta.hot.lastModified = "1738073419117.6304";
}
function useStablePojo(value) {
  const jsonString = JSON.stringify(value);
  return (0, import_react3.useMemo)(() => JSON.parse(jsonString), [jsonString]);
}

// app/hooks/usePeerConnection.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/usePeerConnection.tsx"
  );
  import.meta.hot.lastModified = "1738073419116.8652";
}
setLogLevel("debug");
var usePeerConnection = (config) => {
  const stableConfig = useStablePojo(config);
  const partyTracks = (0, import_react5.useMemo)(
    () => new PartyTracks(stableConfig),
    [stableConfig]
  );
  const peerConnection = useObservableAsValue(partyTracks.peerConnection$);
  const [iceConnectionState, setIceConnectionState] = (0, import_react5.useState)("new");
  (0, import_react5.useEffect)(() => {
    if (!peerConnection) return;
    setIceConnectionState(peerConnection.iceConnectionState);
    const iceConnectionStateChangeHandler = () => {
      setIceConnectionState(peerConnection.iceConnectionState);
    };
    peerConnection.addEventListener(
      "iceconnectionstatechange",
      iceConnectionStateChangeHandler
    );
    return () => {
      peerConnection.removeEventListener(
        "connectionstatechange",
        iceConnectionStateChangeHandler
      );
    };
  }, [peerConnection]);
  return {
    partyTracks,
    iceConnectionState
  };
};

// app/hooks/useRoom.ts
var import_react8 = __toESM(require_react());

// app/utils/assertNever.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/assertNever.ts"
  );
  import.meta.hot.lastModified = "1738073419121.5674";
}
function assertNever(_value, message = "Unhandled type: assert never failed") {
  throw new Error(message);
}

// node_modules/partysocket/dist/chunk-KAXDW7R4.mjs
if (!globalThis.EventTarget || !globalThis.Event) {
  console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
}
var ErrorEvent = class extends Event {
  message;
  error;
  constructor(error, target) {
    super("error", target);
    this.message = error.message;
    this.error = error;
  }
};
var CloseEvent = class extends Event {
  code;
  reason;
  wasClean = true;
  constructor(code = 1e3, reason = "", target) {
    super("close", target);
    this.code = code;
    this.reason = reason;
  }
};
var Events = {
  Event,
  ErrorEvent,
  CloseEvent
};
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}
function cloneEventBrowser(e) {
  return new e.constructor(e.type, e);
}
function cloneEventNode(e) {
  if ("data" in e) {
    const evt2 = new MessageEvent(e.type, e);
    return evt2;
  }
  if ("code" in e || "reason" in e) {
    const evt2 = new CloseEvent(
      // @ts-expect-error we need to fix event/listener types
      e.code || 1999,
      // @ts-expect-error we need to fix event/listener types
      e.reason || "unknown reason",
      e
    );
    return evt2;
  }
  if ("error" in e) {
    const evt2 = new ErrorEvent(e.error, e);
    return evt2;
  }
  const evt = new Event(e.type, e);
  return evt;
}
var isNode = typeof process !== "undefined" && typeof process.versions?.node !== "undefined" && typeof document === "undefined";
var cloneEvent = isNode ? cloneEventNode : cloneEventBrowser;
var DEFAULT = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Infinity,
  maxEnqueuedMessages: Infinity,
  startClosed: false,
  debug: false
};
var didWarnAboutMissingWebSocket = false;
var ReconnectingWebSocket = class _ReconnectingWebSocket extends EventTarget {
  _ws;
  _retryCount = -1;
  _uptimeTimeout;
  _connectTimeout;
  _shouldReconnect = true;
  _connectLock = false;
  _binaryType = "blob";
  _closeCalled = false;
  _messageQueue = [];
  _debugLogger = console.log.bind(console);
  _url;
  _protocols;
  _options;
  constructor(url, protocols, options = {}) {
    super();
    this._url = url;
    this._protocols = protocols;
    this._options = options;
    if (this._options.startClosed) {
      this._shouldReconnect = false;
    }
    if (this._options.debugLogger) {
      this._debugLogger = this._options.debugLogger;
    }
    this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return _ReconnectingWebSocket.CONNECTING;
  }
  get OPEN() {
    return _ReconnectingWebSocket.OPEN;
  }
  get CLOSING() {
    return _ReconnectingWebSocket.CLOSING;
  }
  get CLOSED() {
    return _ReconnectingWebSocket.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(value) {
    this._binaryType = value;
    if (this._ws) {
      this._ws.binaryType = value;
    }
  }
  /**
   * Returns the number or connection retries
   */
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount() {
    const bytes = this._messageQueue.reduce((acc, message) => {
      if (typeof message === "string") {
        acc += message.length;
      } else if (message instanceof Blob) {
        acc += message.size;
      } else {
        acc += message.byteLength;
      }
      return acc;
    }, 0);
    return bytes + (this._ws ? this._ws.bufferedAmount : 0);
  }
  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState() {
    if (this._ws) {
      return this._ws.readyState;
    }
    return this._options.startClosed ? _ReconnectingWebSocket.CLOSED : _ReconnectingWebSocket.CONNECTING;
  }
  /**
   * The URL as resolved by the constructor
   */
  get url() {
    return this._ws ? this._ws.url : "";
  }
  /**
   * Whether the websocket object is now in reconnectable state
   */
  get shouldReconnect() {
    return this._shouldReconnect;
  }
  /**
   * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
   */
  onclose = null;
  /**
   * An event listener to be called when an error occurs
   */
  onerror = null;
  /**
   * An event listener to be called when a message is received from the server
   */
  onmessage = null;
  /**
   * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
   * this indicates that the connection is ready to send and receive data
   */
  onopen = null;
  /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */
  close(code = 1e3, reason) {
    this._closeCalled = true;
    this._shouldReconnect = false;
    this._clearTimeouts();
    if (!this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(code, reason);
  }
  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  reconnect(code, reason) {
    this._shouldReconnect = true;
    this._closeCalled = false;
    this._retryCount = -1;
    if (!this._ws || this._ws.readyState === this.CLOSED) {
      this._connect();
    } else {
      this._disconnect(code, reason);
      this._connect();
    }
  }
  /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */
  send(data) {
    if (this._ws && this._ws.readyState === this.OPEN) {
      this._debug("send", data);
      this._ws.send(data);
    } else {
      const { maxEnqueuedMessages = DEFAULT.maxEnqueuedMessages } = this._options;
      if (this._messageQueue.length < maxEnqueuedMessages) {
        this._debug("enqueue", data);
        this._messageQueue.push(data);
      }
    }
  }
  _debug(...args) {
    if (this._options.debug) {
      this._debugLogger("RWS>", ...args);
    }
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor = DEFAULT.reconnectionDelayGrowFactor,
      minReconnectionDelay = DEFAULT.minReconnectionDelay,
      maxReconnectionDelay = DEFAULT.maxReconnectionDelay
    } = this._options;
    let delay = 0;
    if (this._retryCount > 0) {
      delay = minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
      if (delay > maxReconnectionDelay) {
        delay = maxReconnectionDelay;
      }
    }
    this._debug("next delay", delay);
    return delay;
  }
  _wait() {
    return new Promise((resolve) => {
      setTimeout(resolve, this._getNextDelay());
    });
  }
  _getNextProtocols(protocolsProvider) {
    if (!protocolsProvider) return Promise.resolve(null);
    if (typeof protocolsProvider === "string" || Array.isArray(protocolsProvider)) {
      return Promise.resolve(protocolsProvider);
    }
    if (typeof protocolsProvider === "function") {
      const protocols = protocolsProvider();
      if (!protocols) return Promise.resolve(null);
      if (typeof protocols === "string" || Array.isArray(protocols)) {
        return Promise.resolve(protocols);
      }
      if (protocols.then) {
        return protocols;
      }
    }
    throw Error("Invalid protocols");
  }
  _getNextUrl(urlProvider) {
    if (typeof urlProvider === "string") {
      return Promise.resolve(urlProvider);
    }
    if (typeof urlProvider === "function") {
      const url = urlProvider();
      if (typeof url === "string") {
        return Promise.resolve(url);
      }
      if (url.then) {
        return url;
      }
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect) {
      return;
    }
    this._connectLock = true;
    const {
      maxRetries = DEFAULT.maxRetries,
      connectionTimeout = DEFAULT.connectionTimeout
    } = this._options;
    if (this._retryCount >= maxRetries) {
      this._debug("max retries reached", this._retryCount, ">=", maxRetries);
      return;
    }
    this._retryCount++;
    this._debug("connect", this._retryCount);
    this._removeListeners();
    this._wait().then(
      () => Promise.all([
        this._getNextUrl(this._url),
        this._getNextProtocols(this._protocols || null)
      ])
    ).then(([url, protocols]) => {
      if (this._closeCalled) {
        this._connectLock = false;
        return;
      }
      if (!this._options.WebSocket && typeof WebSocket === "undefined" && !didWarnAboutMissingWebSocket) {
        console.error(`\u203C\uFE0F No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`);
        didWarnAboutMissingWebSocket = true;
      }
      const WS = this._options.WebSocket || WebSocket;
      this._debug("connect", { url, protocols });
      this._ws = protocols ? new WS(url, protocols) : new WS(url);
      this._ws.binaryType = this._binaryType;
      this._connectLock = false;
      this._addListeners();
      this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        connectionTimeout
      );
    }).catch((err) => {
      this._connectLock = false;
      this._handleError(new Events.ErrorEvent(Error(err.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event");
    this._handleError(new Events.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(code = 1e3, reason) {
    this._clearTimeouts();
    if (!this._ws) {
      return;
    }
    this._removeListeners();
    try {
      if (this._ws.readyState === this.OPEN) {
        this._ws.close(code, reason);
      }
      this._handleClose(new Events.CloseEvent(code, reason, this));
    } catch (error) {
    }
  }
  _acceptOpen() {
    this._debug("accept open");
    this._retryCount = 0;
  }
  _handleOpen = (event) => {
    this._debug("open event");
    const { minUptime = DEFAULT.minUptime } = this._options;
    clearTimeout(this._connectTimeout);
    this._uptimeTimeout = setTimeout(() => this._acceptOpen(), minUptime);
    assert(this._ws, "WebSocket is not defined");
    this._ws.binaryType = this._binaryType;
    this._messageQueue.forEach((message) => this._ws?.send(message));
    this._messageQueue = [];
    if (this.onopen) {
      this.onopen(event);
    }
    this.dispatchEvent(cloneEvent(event));
  };
  _handleMessage = (event) => {
    this._debug("message event");
    if (this.onmessage) {
      this.onmessage(event);
    }
    this.dispatchEvent(cloneEvent(event));
  };
  _handleError = (event) => {
    this._debug("error event", event.message);
    this._disconnect(
      void 0,
      event.message === "TIMEOUT" ? "timeout" : void 0
    );
    if (this.onerror) {
      this.onerror(event);
    }
    this._debug("exec error listeners");
    this.dispatchEvent(cloneEvent(event));
    this._connect();
  };
  _handleClose = (event) => {
    this._debug("close event");
    this._clearTimeouts();
    if (this._shouldReconnect) {
      this._connect();
    }
    if (this.onclose) {
      this.onclose(event);
    }
    this.dispatchEvent(cloneEvent(event));
  };
  _removeListeners() {
    if (!this._ws) {
      return;
    }
    this._debug("removeListeners");
    this._ws.removeEventListener("open", this._handleOpen);
    this._ws.removeEventListener("close", this._handleClose);
    this._ws.removeEventListener("message", this._handleMessage);
    this._ws.removeEventListener("error", this._handleError);
  }
  _addListeners() {
    if (!this._ws) {
      return;
    }
    this._debug("addListeners");
    this._ws.addEventListener("open", this._handleOpen);
    this._ws.addEventListener("close", this._handleClose);
    this._ws.addEventListener("message", this._handleMessage);
    this._ws.addEventListener("error", this._handleError);
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout);
    clearTimeout(this._uptimeTimeout);
  }
};

// node_modules/partysocket/dist/chunk-QEVAA5MN.mjs
var valueIsNotNil = (keyValuePair) => keyValuePair[1] !== null && keyValuePair[1] !== void 0;
function generateUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  let d = (/* @__PURE__ */ new Date()).getTime();
  let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
function getPartyInfo(partySocketOptions, defaultProtocol, defaultParams = {}) {
  const {
    host: rawHost,
    path: rawPath,
    protocol: rawProtocol,
    room,
    party,
    prefix,
    query
  } = partySocketOptions;
  let host = rawHost.replace(/^(http|https|ws|wss):\/\//, "");
  if (host.endsWith("/")) {
    host = host.slice(0, -1);
  }
  if (rawPath && rawPath.startsWith("/")) {
    throw new Error("path must not start with a slash");
  }
  const name = party ?? "main";
  const path = rawPath ? `/${rawPath}` : "";
  const protocol = rawProtocol || (host.startsWith("localhost:") || host.startsWith("127.0.0.1:") || host.startsWith("192.168.") || host.startsWith("10.") || host.startsWith("172.") && host.split(".")[1] >= "16" && host.split(".")[1] <= "31" || host.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    defaultProtocol
  ) : (
    // https / wss
    defaultProtocol + "s"
  ));
  const baseUrl = `${protocol}://${host}/${prefix || `parties/${name}/${room}`}${path}`;
  const makeUrl = (query2 = {}) => `${baseUrl}?${new URLSearchParams([
    ...Object.entries(defaultParams),
    ...Object.entries(query2).filter(valueIsNotNil)
  ])}`;
  const urlProvider = typeof query === "function" ? async () => makeUrl(await query()) : makeUrl(query);
  return {
    host,
    path,
    room,
    name,
    protocol,
    partyUrl: baseUrl,
    urlProvider
  };
}
var PartySocket = class extends ReconnectingWebSocket {
  constructor(partySocketOptions) {
    const wsOptions = getWSOptions(partySocketOptions);
    super(wsOptions.urlProvider, wsOptions.protocols, wsOptions.socketOptions);
    this.partySocketOptions = partySocketOptions;
    this.setWSProperties(wsOptions);
  }
  _pk;
  _pkurl;
  name;
  room;
  host;
  path;
  updateProperties(partySocketOptions) {
    const wsOptions = getWSOptions({
      ...this.partySocketOptions,
      ...partySocketOptions,
      host: partySocketOptions.host ?? this.host,
      room: partySocketOptions.room ?? this.room,
      path: partySocketOptions.path ?? this.path
    });
    this._url = wsOptions.urlProvider;
    this._protocols = wsOptions.protocols;
    this._options = wsOptions.socketOptions;
    this.setWSProperties(wsOptions);
  }
  setWSProperties(wsOptions) {
    const { _pk, _pkurl, name, room, host, path } = wsOptions;
    this._pk = _pk;
    this._pkurl = _pkurl;
    this.name = name;
    this.room = room;
    this.host = host;
    this.path = path;
  }
  reconnect(code, reason) {
    if (!this.room || !this.host) {
      throw new Error(
        "The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor."
      );
    }
    super.reconnect(code, reason);
  }
  get id() {
    return this._pk;
  }
  /**
   * Exposes the static PartyKit room URL without applying query parameters.
   * To access the currently connected WebSocket url, use PartySocket#url.
   */
  get roomUrl() {
    return this._pkurl;
  }
  // a `fetch` method that uses (almost) the same options as `PartySocket`
  static async fetch(options, init) {
    const party = getPartyInfo(options, "http");
    const url = typeof party.urlProvider === "string" ? party.urlProvider : await party.urlProvider();
    const doFetch = options.fetch ?? fetch;
    return doFetch(url, init);
  }
};
function getWSOptions(partySocketOptions) {
  const {
    id,
    host: _host,
    path: _path,
    party: _party,
    room: _room,
    protocol: _protocol,
    query: _query,
    protocols,
    ...socketOptions
  } = partySocketOptions;
  const _pk = id || generateUUID();
  const party = getPartyInfo(partySocketOptions, "ws", { _pk });
  return {
    _pk,
    _pkurl: party.partyUrl,
    name: party.name,
    room: party.room,
    host: party.host,
    path: party.path,
    protocols,
    socketOptions,
    urlProvider: party.urlProvider
  };
}

// node_modules/partysocket/dist/chunk-BZZROSLB.mjs
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var useAttachWebSocketEventHandlers = (socket, options) => {
  const handlersRef = (0, import_react6.useRef)(options);
  handlersRef.current = options;
  (0, import_react6.useEffect)(() => {
    const onOpen = (event) => handlersRef.current?.onOpen?.(event);
    const onMessage = (event) => handlersRef.current?.onMessage?.(event);
    const onClose = (event) => handlersRef.current?.onClose?.(event);
    const onError = (event) => handlersRef.current?.onError?.(event);
    socket.addEventListener("open", onOpen);
    socket.addEventListener("close", onClose);
    socket.addEventListener("error", onError);
    socket.addEventListener("message", onMessage);
    return () => {
      socket.removeEventListener("open", onOpen);
      socket.removeEventListener("close", onClose);
      socket.removeEventListener("error", onError);
      socket.removeEventListener("message", onMessage);
    };
  }, [socket]);
};
var getOptionsThatShouldCauseRestartWhenChanged = (options) => [
  options.startClosed,
  options.minUptime,
  options.maxRetries,
  options.connectionTimeout,
  options.maxEnqueuedMessages,
  options.maxReconnectionDelay,
  options.minReconnectionDelay,
  options.reconnectionDelayGrowFactor,
  options.debug
];
function useStableSocket({
  options,
  createSocket,
  createSocketMemoKey: createOptionsMemoKey
}) {
  const shouldReconnect = createOptionsMemoKey(options);
  const socketOptions = (0, import_react7.useMemo)(() => {
    return options;
  }, [shouldReconnect]);
  const [socket, setSocket] = (0, import_react7.useState)(
    () => (
      // only connect on first mount
      createSocket({ ...socketOptions, startClosed: true })
    )
  );
  const socketInitializedRef = (0, import_react7.useRef)(null);
  const createSocketRef = (0, import_react7.useRef)(createSocket);
  createSocketRef.current = createSocket;
  (0, import_react7.useEffect)(() => {
    if (socketInitializedRef.current === socket) {
      const newSocket = createSocketRef.current({
        ...socketOptions,
        // when reconnecting because of options change, we always reconnect
        // (startClosed only applies to initial mount)
        startClosed: false
      });
      setSocket(newSocket);
    } else {
      if (!socketInitializedRef.current && socketOptions.startClosed !== true) {
        socket.reconnect();
      }
      socketInitializedRef.current = socket;
      return () => {
        socket.close();
      };
    }
  }, [socket, socketOptions]);
  return socket;
}

// node_modules/partysocket/dist/react.mjs
function usePartySocket(options) {
  const { host, ...otherOptions } = options;
  const socket = useStableSocket({
    options: {
      host: host || (typeof window !== "undefined" ? window.location.host : "dummy-domain.com"),
      ...otherOptions
    },
    createSocket: (options2) => new PartySocket(options2),
    createSocketMemoKey: (options2) => JSON.stringify([
      // NOTE: if query is defined as a function, the socket
      // won't reconnect when you change the function identity
      options2.query,
      options2.id,
      options2.host,
      options2.room,
      options2.party,
      options2.path,
      options2.protocol,
      options2.protocols,
      ...getOptionsThatShouldCauseRestartWhenChanged(options2)
    ])
  });
  useAttachWebSocketEventHandlers(socket, options);
  return socket;
}

// app/hooks/useRoom.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useRoom.ts"
  );
  import.meta.hot.lastModified = "1738073419117.1052";
}
function useRoom({
  roomName,
  userMedia
}) {
  const [roomState, setRoomState] = (0, import_react8.useState)({
    users: [],
    ai: { enabled: false }
  });
  const userLeftFunctionRef = (0, import_react8.useRef)(() => {
  });
  (0, import_react8.useEffect)(() => {
    return () => userLeftFunctionRef.current();
  }, []);
  const websocket = usePartySocket({
    party: "rooms",
    room: roomName,
    onMessage: (e) => {
      const message = JSON.parse(e.data);
      switch (message.type) {
        case "roomState":
          if (JSON.stringify(message.state) === JSON.stringify(roomState)) break;
          setRoomState(message.state);
          break;
        case "error":
          console.error("Received error message from WebSocket");
          console.error(message.error);
          break;
        case "directMessage":
          break;
        case "muteMic":
          userMedia.turnMicOff();
          break;
        case "partyserver-pong":
        case "aiSdp":
          break;
        default:
          assertNever(message);
          break;
      }
    }
  });
  userLeftFunctionRef.current = () => websocket.send(JSON.stringify({ type: "userLeft" }));
  (0, import_react8.useEffect)(() => {
    function onBeforeUnload() {
      userLeftFunctionRef.current();
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [websocket]);
  (0, import_react8.useEffect)(() => {
    const interval = setInterval(() => {
      websocket.send(
        JSON.stringify({ type: "heartbeat" })
      );
    }, 5e3);
    return () => clearInterval(interval);
  }, [websocket]);
  const identity = (0, import_react8.useMemo)(
    () => roomState.users.find((u) => u.id === websocket.id),
    [roomState.users, websocket.id]
  );
  const otherUsers = (0, import_react8.useMemo)(
    () => roomState.users.filter((u) => u.id !== websocket.id && u.joined),
    [roomState.users, websocket.id]
  );
  return { identity, otherUsers, websocket, roomState };
}

// app/hooks/useRoomHistory.ts
var import_react10 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useRoomHistory.ts"
  );
  import.meta.hot.lastModified = "1738073419117.3083";
}
function useRoomHistory(partyTracks, room) {
  const [apiHistory, setApiHistory] = (0, import_react10.useState)([]);
  const [userSessionsWithoutTraceLinks, setUserSessions] = (0, import_react10.useState)([]);
  const sessionIdsRef = (0, import_react10.useRef)(/* @__PURE__ */ new Set());
  (0, import_react10.useEffect)(() => {
    const handleHistory = () => {
      setApiHistory(partyTracks.history.entries);
    };
    partyTracks.history.addEventListener("logentry", handleHistory);
    return () => {
      partyTracks.history.removeEventListener("logentry", handleHistory);
    };
  }, [partyTracks]);
  (0, import_react10.useEffect)(() => {
    room.otherUsers.forEach((user) => {
      if (user.transceiverSessionId === void 0) return;
      if (sessionIdsRef.current.has(user.transceiverSessionId)) return;
      sessionIdsRef.current.add(user.transceiverSessionId);
      const userSession = {
        sessionId: user.transceiverSessionId,
        username: user.name
      };
      setUserSessions((s) => [...s, userSession]);
    });
  }, [room.otherUsers]);
  const userSessions = (0, import_react10.useMemo)(
    () => userSessionsWithoutTraceLinks.map((s) => ({
      ...s
    })),
    [userSessionsWithoutTraceLinks]
  );
  return {
    apiHistory,
    userSessions
  };
}

// app/routes/_room.tsx
var import_getIceServers = __toESM(require_getIceServers());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_room.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_room.tsx"
  );
  import.meta.hot.lastModified = "1738073419119.655";
}
function trackObjectToString(trackObject) {
  if (!trackObject) return void 0;
  return trackObject.sessionId + "/" + trackObject.trackName;
}
function RoomWithPermissions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EnsurePermissions, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EnsureOnline, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid h-full place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "flex items-center gap-3 text-3xl font-black", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { type: "SignalSlashIcon" }, void 0, false, {
      fileName: "app/routes/_room.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    "You are offline"
  ] }, void 0, true, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 76,
    columnNumber: 8
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 74,
    columnNumber: 28
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RoomPreparation, {}, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 74,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_c3 = RoomWithPermissions;
function RoomPreparation() {
  _s3();
  const {
    roomName
  } = useParams();
  invariant(roomName);
  const userMedia = useUserMedia();
  const room = useRoom({
    roomName,
    userMedia
  });
  return room.roomState.meetingId ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Room, { room, userMedia }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 98,
    columnNumber: 37
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid place-items-center h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner, { className: "text-gray-500" }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 99,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 98,
    columnNumber: 82
  }, this);
}
_s3(RoomPreparation, "a65XRBFuhh/7UGDv6tZNY4FdFj0=", false, function() {
  return [useParams, useUserMedia, useRoom];
});
_c22 = RoomPreparation;
function tryToGetDimensions(videoStreamTrack) {
  if (videoStreamTrack === void 0 || // TODO: Determine a better way to get dimensions in Firefox
  // where this isn't API isn't supported. For now, Firefox will
  // just not be constrained and scaled down by dimension scaling
  // but the bandwidth and framerate constraints will still apply
  // https://caniuse.com/?search=getCapabilities
  videoStreamTrack.getCapabilities === void 0) {
    return {
      height: 0,
      width: 0
    };
  }
  const height = videoStreamTrack?.getCapabilities().height?.max ?? 0;
  const width = videoStreamTrack?.getCapabilities().width?.max ?? 0;
  return {
    height,
    width
  };
}
function Room({
  room,
  userMedia
}) {
  _s22();
  const [joined, setJoined] = (0, import_react13.useState)(false);
  const [dataSaverMode, setDataSaverMode] = (0, import_react13.useState)(false);
  const {
    roomName
  } = useParams();
  invariant(roomName);
  const {
    userDirectoryUrl,
    traceLink,
    feedbackEnabled,
    apiExtraParams,
    iceServers,
    maxWebcamBitrate = 12e5,
    maxWebcamFramerate = 24,
    maxWebcamQualityLevel = 1080,
    maxApiHistory = 100
  } = useLoaderData();
  const params = new URLSearchParams(apiExtraParams);
  invariant(room.roomState.meetingId, "Meeting ID cannot be missing");
  params.set("correlationId", room.roomState.meetingId);
  const {
    partyTracks,
    iceConnectionState
  } = usePeerConnection({
    maxApiHistory,
    apiExtraParams: params.toString(),
    iceServers
  });
  const roomHistory = useRoomHistory(partyTracks, room);
  const scaleResolutionDownBy = (0, import_react13.useMemo)(() => {
    const videoStreamTrack = userMedia.videoStreamTrack;
    const {
      height,
      width
    } = tryToGetDimensions(videoStreamTrack);
    const smallestDimension = Math.min(height, width);
    return Math.max(smallestDimension / maxWebcamQualityLevel, 1);
  }, [maxWebcamQualityLevel, userMedia.videoStreamTrack]);
  const videoEncodingParams = useStablePojo([{
    maxFramerate: maxWebcamFramerate,
    maxBitrate: maxWebcamBitrate,
    scaleResolutionDownBy
  }]);
  const videoTrackEncodingParams$ = useValueAsObservable(videoEncodingParams);
  const pushedVideoTrack$ = (0, import_react13.useMemo)(() => partyTracks.push(userMedia.videoTrack$, videoTrackEncodingParams$), [partyTracks, userMedia.videoTrack$, videoTrackEncodingParams$]);
  const pushedVideoTrack = useObservableAsValue(pushedVideoTrack$);
  const pushedAudioTrack$ = (0, import_react13.useMemo)(() => partyTracks.push(userMedia.publicAudioTrack$, of([{
    networkPriority: "high"
  }])), [partyTracks, userMedia.publicAudioTrack$]);
  const pushedAudioTrack = useObservableAsValue(pushedAudioTrack$);
  const pushedScreenSharingTrack$ = (0, import_react13.useMemo)(() => {
    return userMedia.screenShareVideoTrack$.pipe(switchMap((track) => track ? from(partyTracks.push(of(track))) : of(void 0)));
  }, [partyTracks, userMedia.screenShareVideoTrack$]);
  const pushedScreenSharingTrack = useObservableAsValue(pushedScreenSharingTrack$);
  const [pinnedTileIds, setPinnedTileIds] = (0, import_react13.useState)([]);
  const [showDebugInfo, setShowDebugInfo] = (0, import_react13.useState)(false);
  const context = {
    joined,
    setJoined,
    pinnedTileIds,
    setPinnedTileIds,
    showDebugInfo,
    setShowDebugInfo,
    dataSaverMode,
    setDataSaverMode,
    traceLink,
    userMedia,
    userDirectoryUrl,
    feedbackEnabled,
    partyTracks,
    roomHistory,
    iceConnectionState,
    room,
    pushedTracks: {
      video: trackObjectToString(pushedVideoTrack),
      audio: trackObjectToString(pushedAudioTrack),
      screenshare: trackObjectToString(pushedScreenSharingTrack)
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, { context }, void 0, false, {
    fileName: "app/routes/_room.tsx",
    lineNumber: 211,
    columnNumber: 10
  }, this);
}
_s22(Room, "49OmEh0g4D/kAgI1lpX/8sERADM=", false, function() {
  return [useParams, useLoaderData, usePeerConnection, useRoomHistory, useStablePojo, useValueAsObservable, useObservableAsValue, useObservableAsValue, useObservableAsValue];
});
_c32 = Room;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "RoomWithPermissions");
$RefreshReg$(_c22, "RoomPreparation");
$RefreshReg$(_c32, "Room");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RoomWithPermissions as default
};
/*! Bundled license information:

partysocket/dist/chunk-KAXDW7R4.mjs:
  (*!
   * Reconnecting WebSocket
   * by Pedro Ladaria <pedro.ladaria@gmail.com>
   * https://github.com/pladaria/reconnecting-websocket
   * License MIT
   *)
*/
//# sourceMappingURL=/build/routes/_room-FFQZ4DCE.js.map
