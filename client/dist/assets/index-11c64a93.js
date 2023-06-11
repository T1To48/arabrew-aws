var Xy = Object.defineProperty;
var Jy = (e, t, n) =>
  t in e
    ? Xy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ms = (e, t, n) => (Jy(e, typeof t != "symbol" ? t + "" : t, n), n);
function eS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function vv(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var gv = { exports: {} },
  cu = {},
  yv = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oa = Symbol.for("react.element"),
  tS = Symbol.for("react.portal"),
  nS = Symbol.for("react.fragment"),
  rS = Symbol.for("react.strict_mode"),
  iS = Symbol.for("react.profiler"),
  oS = Symbol.for("react.provider"),
  aS = Symbol.for("react.context"),
  lS = Symbol.for("react.forward_ref"),
  uS = Symbol.for("react.suspense"),
  sS = Symbol.for("react.memo"),
  cS = Symbol.for("react.lazy"),
  yp = Symbol.iterator;
function dS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yp && e[yp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wv = Object.assign,
  Ev = {};
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ev),
    (this.updater = n || Sv);
}
Ui.prototype.isReactComponent = {};
Ui.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ui.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bv() {}
bv.prototype = Ui.prototype;
function Ad(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ev),
    (this.updater = n || Sv);
}
var Ud = (Ad.prototype = new bv());
Ud.constructor = Ad;
wv(Ud, Ui.prototype);
Ud.isPureReactComponent = !0;
var Sp = Array.isArray,
  xv = Object.prototype.hasOwnProperty,
  Td = { current: null },
  Fv = { key: !0, ref: !0, __self: !0, __source: !0 };
function jv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      xv.call(t, r) && !Fv.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: oa,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Td.current,
  };
}
function fS(e, t) {
  return {
    $$typeof: oa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oa;
}
function pS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wp = /\/+/g;
function hs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pS("" + e.key)
    : t.toString(36);
}
function Ka(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oa:
          case tS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + hs(a, 0) : r),
      Sp(i)
        ? ((n = ""),
          e != null && (n = e.replace(wp, "$&/") + "/"),
          Ka(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (Dd(i) &&
            (i = fS(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Sp(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + hs(o, l);
      a += Ka(o, t, n, u, i);
    }
  else if (((u = dS(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + hs(o, l++)), (a += Ka(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function wa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ka(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function mS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var bt = { current: null },
  qa = { transition: null },
  hS = {
    ReactCurrentDispatcher: bt,
    ReactCurrentBatchConfig: qa,
    ReactCurrentOwner: Td,
  };
ve.Children = {
  map: wa,
  forEach: function (e, t, n) {
    wa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Dd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ve.Component = Ui;
ve.Fragment = nS;
ve.Profiler = iS;
ve.PureComponent = Ad;
ve.StrictMode = rS;
ve.Suspense = uS;
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hS;
ve.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = wv({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Td.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      xv.call(t, u) &&
        !Fv.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: oa, type: e.type, key: i, ref: o, props: r, _owner: a };
};
ve.createContext = function (e) {
  return (
    (e = {
      $$typeof: aS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: oS, _context: e }),
    (e.Consumer = e)
  );
};
ve.createElement = jv;
ve.createFactory = function (e) {
  var t = jv.bind(null, e);
  return (t.type = e), t;
};
ve.createRef = function () {
  return { current: null };
};
ve.forwardRef = function (e) {
  return { $$typeof: lS, render: e };
};
ve.isValidElement = Dd;
ve.lazy = function (e) {
  return { $$typeof: cS, _payload: { _status: -1, _result: e }, _init: mS };
};
ve.memo = function (e, t) {
  return { $$typeof: sS, type: e, compare: t === void 0 ? null : t };
};
ve.startTransition = function (e) {
  var t = qa.transition;
  qa.transition = {};
  try {
    e();
  } finally {
    qa.transition = t;
  }
};
ve.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ve.useCallback = function (e, t) {
  return bt.current.useCallback(e, t);
};
ve.useContext = function (e) {
  return bt.current.useContext(e);
};
ve.useDebugValue = function () {};
ve.useDeferredValue = function (e) {
  return bt.current.useDeferredValue(e);
};
ve.useEffect = function (e, t) {
  return bt.current.useEffect(e, t);
};
ve.useId = function () {
  return bt.current.useId();
};
ve.useImperativeHandle = function (e, t, n) {
  return bt.current.useImperativeHandle(e, t, n);
};
ve.useInsertionEffect = function (e, t) {
  return bt.current.useInsertionEffect(e, t);
};
ve.useLayoutEffect = function (e, t) {
  return bt.current.useLayoutEffect(e, t);
};
ve.useMemo = function (e, t) {
  return bt.current.useMemo(e, t);
};
ve.useReducer = function (e, t, n) {
  return bt.current.useReducer(e, t, n);
};
ve.useRef = function (e) {
  return bt.current.useRef(e);
};
ve.useState = function (e) {
  return bt.current.useState(e);
};
ve.useSyncExternalStore = function (e, t, n) {
  return bt.current.useSyncExternalStore(e, t, n);
};
ve.useTransition = function () {
  return bt.current.useTransition();
};
ve.version = "18.2.0";
yv.exports = ve;
var O = yv.exports;
const zn = Rd(O),
  Ep = eS({ __proto__: null, default: zn }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vS = O,
  gS = Symbol.for("react.element"),
  yS = Symbol.for("react.fragment"),
  SS = Object.prototype.hasOwnProperty,
  wS = vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ES = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) SS.call(t, r) && !ES.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: gS,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: wS.current,
  };
}
cu.Fragment = yS;
cu.jsx = Cv;
cu.jsxs = Cv;
gv.exports = cu;
var F = gv.exports,
  fc = {},
  Ov = { exports: {} },
  $t = {},
  Pv = { exports: {} },
  Iv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, V) {
    var B = k.length;
    k.push(V);
    e: for (; 0 < B; ) {
      var G = (B - 1) >>> 1,
        U = k[G];
      if (0 < i(U, V)) (k[G] = V), (k[B] = U), (B = G);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var V = k[0],
      B = k.pop();
    if (B !== V) {
      k[0] = B;
      e: for (var G = 0, U = k.length, L = U >>> 1; G < L; ) {
        var D = 2 * (G + 1) - 1,
          _ = k[D],
          I = D + 1,
          Z = k[I];
        if (0 > i(_, B))
          I < U && 0 > i(Z, _)
            ? ((k[G] = Z), (k[I] = B), (G = I))
            : ((k[G] = _), (k[D] = B), (G = D));
        else if (I < U && 0 > i(Z, B)) (k[G] = Z), (k[I] = B), (G = I);
        else break e;
      }
    }
    return V;
  }
  function i(k, V) {
    var B = k.sortIndex - V.sortIndex;
    return B !== 0 ? B : k.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var u = [],
    s = [],
    c = 1,
    d = null,
    p = 3,
    m = !1,
    y = !1,
    h = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(k) {
    for (var V = n(s); V !== null; ) {
      if (V.callback === null) r(s);
      else if (V.startTime <= k)
        r(s), (V.sortIndex = V.expirationTime), t(u, V);
      else break;
      V = n(s);
    }
  }
  function w(k) {
    if (((h = !1), g(k), !y))
      if (n(u) !== null) (y = !0), W(S);
      else {
        var V = n(s);
        V !== null && q(w, V.startTime - k);
      }
  }
  function S(k, V) {
    (y = !1), h && ((h = !1), f(j), (j = -1)), (m = !0);
    var B = p;
    try {
      for (
        g(V), d = n(u);
        d !== null && (!(d.expirationTime > V) || (k && !M()));

      ) {
        var G = d.callback;
        if (typeof G == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var U = G(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(u) && r(u),
            g(V);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var L = !0;
      else {
        var D = n(s);
        D !== null && q(w, D.startTime - V), (L = !1);
      }
      return L;
    } finally {
      (d = null), (p = B), (m = !1);
    }
  }
  var b = !1,
    x = null,
    j = -1,
    P = 5,
    C = -1;
  function M() {
    return !(e.unstable_now() - C < P);
  }
  function R() {
    if (x !== null) {
      var k = e.unstable_now();
      C = k;
      var V = !0;
      try {
        V = x(!0, k);
      } finally {
        V ? A() : ((b = !1), (x = null));
      }
    } else b = !1;
  }
  var A;
  if (typeof v == "function")
    A = function () {
      v(R);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      N = T.port2;
    (T.port1.onmessage = R),
      (A = function () {
        N.postMessage(null);
      });
  } else
    A = function () {
      E(R, 0);
    };
  function W(k) {
    (x = k), b || ((b = !0), A());
  }
  function q(k, V) {
    j = E(function () {
      k(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), W(S));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (k) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = p;
      }
      var B = p;
      p = V;
      try {
        return k();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, V) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var B = p;
      p = k;
      try {
        return V();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (k, V, B) {
      var G = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? G + B : G))
          : (B = G),
        k)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = B + U),
        (k = {
          id: c++,
          callback: V,
          priorityLevel: k,
          startTime: B,
          expirationTime: U,
          sortIndex: -1,
        }),
        B > G
          ? ((k.sortIndex = B),
            t(s, k),
            n(u) === null &&
              k === n(s) &&
              (h ? (f(j), (j = -1)) : (h = !0), q(w, B - G)))
          : ((k.sortIndex = U), t(u, k), y || m || ((y = !0), W(S))),
        k
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (k) {
      var V = p;
      return function () {
        var B = p;
        p = V;
        try {
          return k.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(Iv);
Pv.exports = Iv;
var bS = Pv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mv = O,
  Dt = bS;
function K(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var kv = new Set(),
  Io = {};
function zr(e, t) {
  bi(e, t), bi(e + "Capture", t);
}
function bi(e, t) {
  for (Io[e] = t, e = 0; e < t.length; e++) kv.add(t[e]);
}
var Dn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pc = Object.prototype.hasOwnProperty,
  xS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bp = {},
  xp = {};
function FS(e) {
  return pc.call(xp, e)
    ? !0
    : pc.call(bp, e)
    ? !1
    : xS.test(e)
    ? (xp[e] = !0)
    : ((bp[e] = !0), !1);
}
function jS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function CS(e, t, n, r) {
  if (t === null || typeof t > "u" || jS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function xt(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    dt[e] = new xt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  dt[t] = new xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  dt[e] = new xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  dt[e] = new xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    dt[e] = new xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  dt[e] = new xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  dt[e] = new xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  dt[e] = new xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  dt[e] = new xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ld = /[\-:]([a-z])/g;
function Nd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ld, Nd);
    dt[t] = new xt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ld, Nd);
    dt[t] = new xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ld, Nd);
  dt[t] = new xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  dt[e] = new xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
dt.xlinkHref = new xt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  dt[e] = new xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $d(e, t, n, r) {
  var i = dt.hasOwnProperty(t) ? dt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (CS(t, n, i, r) && (n = null),
    r || i === null
      ? FS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bn = Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ea = Symbol.for("react.element"),
  Yr = Symbol.for("react.portal"),
  Zr = Symbol.for("react.fragment"),
  _d = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  Rv = Symbol.for("react.provider"),
  Av = Symbol.for("react.context"),
  zd = Symbol.for("react.forward_ref"),
  hc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.suspense_list"),
  Bd = Symbol.for("react.memo"),
  Gn = Symbol.for("react.lazy"),
  Uv = Symbol.for("react.offscreen"),
  Fp = Symbol.iterator;
function Gi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fp && e[Fp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Be = Object.assign,
  vs;
function ao(e) {
  if (vs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vs = (t && t[1]) || "";
    }
  return (
    `
` +
    vs +
    e
  );
}
var gs = !1;
function ys(e, t) {
  if (!e || gs) return "";
  gs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var u =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (gs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ao(e) : "";
}
function OS(e) {
  switch (e.tag) {
    case 5:
      return ao(e.type);
    case 16:
      return ao("Lazy");
    case 13:
      return ao("Suspense");
    case 19:
      return ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ys(e.type, !1)), e;
    case 11:
      return (e = ys(e.type.render, !1)), e;
    case 1:
      return (e = ys(e.type, !0)), e;
    default:
      return "";
  }
}
function gc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zr:
      return "Fragment";
    case Yr:
      return "Portal";
    case mc:
      return "Profiler";
    case _d:
      return "StrictMode";
    case hc:
      return "Suspense";
    case vc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Av:
        return (e.displayName || "Context") + ".Consumer";
      case Rv:
        return (e._context.displayName || "Context") + ".Provider";
      case zd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bd:
        return (
          (t = e.displayName || null), t !== null ? t : gc(e.type) || "Memo"
        );
      case Gn:
        (t = e._payload), (e = e._init);
        try {
          return gc(e(t));
        } catch {}
    }
  return null;
}
function PS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gc(t);
    case 8:
      return t === _d ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Tv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function IS(e) {
  var t = Tv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ba(e) {
  e._valueTracker || (e._valueTracker = IS(e));
}
function Dv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Tv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yc(e, t) {
  var n = t.checked;
  return Be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lv(e, t) {
  (t = t.checked), t != null && $d(e, "checked", t, !1);
}
function Sc(e, t) {
  Lv(e, t);
  var n = dr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wc(e, t.type, dr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wc(e, t, n) {
  (t !== "number" || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lo = Array.isArray;
function fi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ec(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(K(91));
  return Be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Op(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(K(92));
      if (lo(n)) {
        if (1 < n.length) throw Error(K(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dr(n) };
}
function Nv(e, t) {
  var n = dr(t.value),
    r = dr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $v(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $v(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xa,
  _v = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xa = xa || document.createElement("div"),
          xa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  MS = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function (e) {
  MS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mo[t] = mo[e]);
  });
});
function zv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mo.hasOwnProperty(e) && mo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = zv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var kS = Be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xc(e, t) {
  if (t) {
    if (kS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(K(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(K(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(K(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(K(62));
  }
}
function Fc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jc = null;
function Vd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cc = null,
  pi = null,
  mi = null;
function Ip(e) {
  if ((e = ua(e))) {
    if (typeof Cc != "function") throw Error(K(280));
    var t = e.stateNode;
    t && ((t = hu(t)), Cc(e.stateNode, e.type, t));
  }
}
function Vv(e) {
  pi ? (mi ? mi.push(e) : (mi = [e])) : (pi = e);
}
function Hv() {
  if (pi) {
    var e = pi,
      t = mi;
    if (((mi = pi = null), Ip(e), t)) for (e = 0; e < t.length; e++) Ip(t[e]);
  }
}
function Wv(e, t) {
  return e(t);
}
function Qv() {}
var Ss = !1;
function Gv(e, t, n) {
  if (Ss) return e(t, n);
  Ss = !0;
  try {
    return Wv(e, t, n);
  } finally {
    (Ss = !1), (pi !== null || mi !== null) && (Qv(), Hv());
  }
}
function ko(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(K(231, t, typeof n));
  return n;
}
var Oc = !1;
if (Dn)
  try {
    var Ki = {};
    Object.defineProperty(Ki, "passive", {
      get: function () {
        Oc = !0;
      },
    }),
      window.addEventListener("test", Ki, Ki),
      window.removeEventListener("test", Ki, Ki);
  } catch {
    Oc = !1;
  }
function RS(e, t, n, r, i, o, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var ho = !1,
  vl = null,
  gl = !1,
  Pc = null,
  AS = {
    onError: function (e) {
      (ho = !0), (vl = e);
    },
  };
function US(e, t, n, r, i, o, a, l, u) {
  (ho = !1), (vl = null), RS.apply(AS, arguments);
}
function TS(e, t, n, r, i, o, a, l, u) {
  if ((US.apply(this, arguments), ho)) {
    if (ho) {
      var s = vl;
      (ho = !1), (vl = null);
    } else throw Error(K(198));
    gl || ((gl = !0), (Pc = s));
  }
}
function Br(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mp(e) {
  if (Br(e) !== e) throw Error(K(188));
}
function DS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Br(e)), t === null)) throw Error(K(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Mp(i), e;
        if (o === r) return Mp(i), t;
        o = o.sibling;
      }
      throw Error(K(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(K(189));
      }
    }
    if (n.alternate !== r) throw Error(K(190));
  }
  if (n.tag !== 3) throw Error(K(188));
  return n.stateNode.current === n ? e : t;
}
function qv(e) {
  return (e = DS(e)), e !== null ? Yv(e) : null;
}
function Yv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zv = Dt.unstable_scheduleCallback,
  kp = Dt.unstable_cancelCallback,
  LS = Dt.unstable_shouldYield,
  NS = Dt.unstable_requestPaint,
  Ge = Dt.unstable_now,
  $S = Dt.unstable_getCurrentPriorityLevel,
  Hd = Dt.unstable_ImmediatePriority,
  Xv = Dt.unstable_UserBlockingPriority,
  yl = Dt.unstable_NormalPriority,
  _S = Dt.unstable_LowPriority,
  Jv = Dt.unstable_IdlePriority,
  du = null,
  wn = null;
function zS(e) {
  if (wn && typeof wn.onCommitFiberRoot == "function")
    try {
      wn.onCommitFiberRoot(du, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ln = Math.clz32 ? Math.clz32 : HS,
  BS = Math.log,
  VS = Math.LN2;
function HS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((BS(e) / VS) | 0)) | 0;
}
var Fa = 64,
  ja = 4194304;
function uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (r = uo(l)) : ((o &= a), o !== 0 && (r = uo(o)));
  } else (a = n & ~i), a !== 0 ? (r = uo(a)) : o !== 0 && (r = uo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ln(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function WS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function QS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - ln(o),
      l = 1 << a,
      u = i[a];
    u === -1
      ? (!(l & n) || l & r) && (i[a] = WS(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ic(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function eg() {
  var e = Fa;
  return (Fa <<= 1), !(Fa & 4194240) && (Fa = 64), e;
}
function ws(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function aa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ln(t)),
    (e[t] = n);
}
function GS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ln(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Wd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ln(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Fe = 0;
function tg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ng,
  Qd,
  rg,
  ig,
  og,
  Mc = !1,
  Ca = [],
  er = null,
  tr = null,
  nr = null,
  Ro = new Map(),
  Ao = new Map(),
  qn = [],
  KS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      er = null;
      break;
    case "dragenter":
    case "dragleave":
      tr = null;
      break;
    case "mouseover":
    case "mouseout":
      nr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ro.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ao.delete(t.pointerId);
  }
}
function qi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ua(t)), t !== null && Qd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function qS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (er = qi(er, e, t, n, r, i)), !0;
    case "dragenter":
      return (tr = qi(tr, e, t, n, r, i)), !0;
    case "mouseover":
      return (nr = qi(nr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ro.set(o, qi(Ro.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ao.set(o, qi(Ao.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ag(e) {
  var t = jr(e.target);
  if (t !== null) {
    var n = Br(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kv(n)), t !== null)) {
          (e.blockedOn = t),
            og(e.priority, function () {
              rg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ya(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = kc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jc = r), n.target.dispatchEvent(r), (jc = null);
    } else return (t = ua(n)), t !== null && Qd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ap(e, t, n) {
  Ya(e) && n.delete(t);
}
function YS() {
  (Mc = !1),
    er !== null && Ya(er) && (er = null),
    tr !== null && Ya(tr) && (tr = null),
    nr !== null && Ya(nr) && (nr = null),
    Ro.forEach(Ap),
    Ao.forEach(Ap);
}
function Yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mc ||
      ((Mc = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, YS)));
}
function Uo(e) {
  function t(i) {
    return Yi(i, e);
  }
  if (0 < Ca.length) {
    Yi(Ca[0], e);
    for (var n = 1; n < Ca.length; n++) {
      var r = Ca[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    er !== null && Yi(er, e),
      tr !== null && Yi(tr, e),
      nr !== null && Yi(nr, e),
      Ro.forEach(t),
      Ao.forEach(t),
      n = 0;
    n < qn.length;
    n++
  )
    (r = qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qn.length && ((n = qn[0]), n.blockedOn === null); )
    ag(n), n.blockedOn === null && qn.shift();
}
var hi = Bn.ReactCurrentBatchConfig,
  wl = !0;
function ZS(e, t, n, r) {
  var i = Fe,
    o = hi.transition;
  hi.transition = null;
  try {
    (Fe = 1), Gd(e, t, n, r);
  } finally {
    (Fe = i), (hi.transition = o);
  }
}
function XS(e, t, n, r) {
  var i = Fe,
    o = hi.transition;
  hi.transition = null;
  try {
    (Fe = 4), Gd(e, t, n, r);
  } finally {
    (Fe = i), (hi.transition = o);
  }
}
function Gd(e, t, n, r) {
  if (wl) {
    var i = kc(e, t, n, r);
    if (i === null) Ms(e, t, r, El, n), Rp(e, r);
    else if (qS(i, e, t, n, r)) r.stopPropagation();
    else if ((Rp(e, r), t & 4 && -1 < KS.indexOf(e))) {
      for (; i !== null; ) {
        var o = ua(i);
        if (
          (o !== null && ng(o),
          (o = kc(e, t, n, r)),
          o === null && Ms(e, t, r, El, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ms(e, t, r, null, n);
  }
}
var El = null;
function kc(e, t, n, r) {
  if (((El = null), (e = Vd(r)), (e = jr(e)), e !== null))
    if (((t = Br(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kv(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (El = e), null;
}
function lg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($S()) {
        case Hd:
          return 1;
        case Xv:
          return 4;
        case yl:
        case _S:
          return 16;
        case Jv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xn = null,
  Kd = null,
  Za = null;
function ug() {
  if (Za) return Za;
  var e,
    t = Kd,
    n = t.length,
    r,
    i = "value" in Xn ? Xn.value : Xn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Za = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Xa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Oa() {
  return !0;
}
function Up() {
  return !1;
}
function _t(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Oa
        : Up),
      (this.isPropagationStopped = Up),
      this
    );
  }
  return (
    Be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Oa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Oa));
      },
      persist: function () {},
      isPersistent: Oa,
    }),
    t
  );
}
var Ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  qd = _t(Ti),
  la = Be({}, Ti, { view: 0, detail: 0 }),
  JS = _t(la),
  Es,
  bs,
  Zi,
  fu = Be({}, la, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zi &&
            (Zi && e.type === "mousemove"
              ? ((Es = e.screenX - Zi.screenX), (bs = e.screenY - Zi.screenY))
              : (bs = Es = 0),
            (Zi = e)),
          Es);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bs;
    },
  }),
  Tp = _t(fu),
  ew = Be({}, fu, { dataTransfer: 0 }),
  tw = _t(ew),
  nw = Be({}, la, { relatedTarget: 0 }),
  xs = _t(nw),
  rw = Be({}, Ti, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iw = _t(rw),
  ow = Be({}, Ti, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  aw = _t(ow),
  lw = Be({}, Ti, { data: 0 }),
  Dp = _t(lw),
  uw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cw[e]) ? !!t[e] : !1;
}
function Yd() {
  return dw;
}
var fw = Be({}, la, {
    key: function (e) {
      if (e.key) {
        var t = uw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yd,
    charCode: function (e) {
      return e.type === "keypress" ? Xa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pw = _t(fw),
  mw = Be({}, fu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lp = _t(mw),
  hw = Be({}, la, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yd,
  }),
  vw = _t(hw),
  gw = Be({}, Ti, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yw = _t(gw),
  Sw = Be({}, fu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ww = _t(Sw),
  Ew = [9, 13, 27, 32],
  Zd = Dn && "CompositionEvent" in window,
  vo = null;
Dn && "documentMode" in document && (vo = document.documentMode);
var bw = Dn && "TextEvent" in window && !vo,
  sg = Dn && (!Zd || (vo && 8 < vo && 11 >= vo)),
  Np = String.fromCharCode(32),
  $p = !1;
function cg(e, t) {
  switch (e) {
    case "keyup":
      return Ew.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xr = !1;
function xw(e, t) {
  switch (e) {
    case "compositionend":
      return dg(t);
    case "keypress":
      return t.which !== 32 ? null : (($p = !0), Np);
    case "textInput":
      return (e = t.data), e === Np && $p ? null : e;
    default:
      return null;
  }
}
function Fw(e, t) {
  if (Xr)
    return e === "compositionend" || (!Zd && cg(e, t))
      ? ((e = ug()), (Za = Kd = Xn = null), (Xr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _p(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jw[e.type] : t === "textarea";
}
function fg(e, t, n, r) {
  Vv(r),
    (t = bl(t, "onChange")),
    0 < t.length &&
      ((n = new qd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var go = null,
  To = null;
function Cw(e) {
  xg(e, 0);
}
function pu(e) {
  var t = ti(e);
  if (Dv(t)) return e;
}
function Ow(e, t) {
  if (e === "change") return t;
}
var pg = !1;
if (Dn) {
  var Fs;
  if (Dn) {
    var js = "oninput" in document;
    if (!js) {
      var zp = document.createElement("div");
      zp.setAttribute("oninput", "return;"),
        (js = typeof zp.oninput == "function");
    }
    Fs = js;
  } else Fs = !1;
  pg = Fs && (!document.documentMode || 9 < document.documentMode);
}
function Bp() {
  go && (go.detachEvent("onpropertychange", mg), (To = go = null));
}
function mg(e) {
  if (e.propertyName === "value" && pu(To)) {
    var t = [];
    fg(t, To, e, Vd(e)), Gv(Cw, t);
  }
}
function Pw(e, t, n) {
  e === "focusin"
    ? (Bp(), (go = t), (To = n), go.attachEvent("onpropertychange", mg))
    : e === "focusout" && Bp();
}
function Iw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pu(To);
}
function Mw(e, t) {
  if (e === "click") return pu(t);
}
function kw(e, t) {
  if (e === "input" || e === "change") return pu(t);
}
function Rw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sn = typeof Object.is == "function" ? Object.is : Rw;
function Do(e, t) {
  if (sn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!pc.call(t, i) || !sn(e[i], t[i])) return !1;
  }
  return !0;
}
function Vp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hp(e, t) {
  var n = Vp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vp(n);
  }
}
function hg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vg() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function Xd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Aw(e) {
  var t = vg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Hp(n, o));
        var a = Hp(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Uw = Dn && "documentMode" in document && 11 >= document.documentMode,
  Jr = null,
  Rc = null,
  yo = null,
  Ac = !1;
function Wp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ac ||
    Jr == null ||
    Jr !== hl(r) ||
    ((r = Jr),
    "selectionStart" in r && Xd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yo && Do(yo, r)) ||
      ((yo = r),
      (r = bl(Rc, "onSelect")),
      0 < r.length &&
        ((t = new qd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jr))));
}
function Pa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ei = {
    animationend: Pa("Animation", "AnimationEnd"),
    animationiteration: Pa("Animation", "AnimationIteration"),
    animationstart: Pa("Animation", "AnimationStart"),
    transitionend: Pa("Transition", "TransitionEnd"),
  },
  Cs = {},
  gg = {};
Dn &&
  ((gg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ei.animationend.animation,
    delete ei.animationiteration.animation,
    delete ei.animationstart.animation),
  "TransitionEvent" in window || delete ei.transitionend.transition);
function mu(e) {
  if (Cs[e]) return Cs[e];
  if (!ei[e]) return e;
  var t = ei[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gg) return (Cs[e] = t[n]);
  return e;
}
var yg = mu("animationend"),
  Sg = mu("animationiteration"),
  wg = mu("animationstart"),
  Eg = mu("transitionend"),
  bg = new Map(),
  Qp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gr(e, t) {
  bg.set(e, t), zr(t, [e]);
}
for (var Os = 0; Os < Qp.length; Os++) {
  var Ps = Qp[Os],
    Tw = Ps.toLowerCase(),
    Dw = Ps[0].toUpperCase() + Ps.slice(1);
  gr(Tw, "on" + Dw);
}
gr(yg, "onAnimationEnd");
gr(Sg, "onAnimationIteration");
gr(wg, "onAnimationStart");
gr("dblclick", "onDoubleClick");
gr("focusin", "onFocus");
gr("focusout", "onBlur");
gr(Eg, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
zr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var so =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Lw = new Set("cancel close invalid load scroll toggle".split(" ").concat(so));
function Gp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), TS(r, t, void 0, e), (e.currentTarget = null);
}
function xg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          Gp(i, l, s), (o = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Gp(i, l, s), (o = u);
        }
    }
  }
  if (gl) throw ((e = Pc), (gl = !1), (Pc = null), e);
}
function ke(e, t) {
  var n = t[Nc];
  n === void 0 && (n = t[Nc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fg(t, e, 2, !1), n.add(r));
}
function Is(e, t, n) {
  var r = 0;
  t && (r |= 4), Fg(n, e, r, t);
}
var Ia = "_reactListening" + Math.random().toString(36).slice(2);
function Lo(e) {
  if (!e[Ia]) {
    (e[Ia] = !0),
      kv.forEach(function (n) {
        n !== "selectionchange" && (Lw.has(n) || Is(n, !1, e), Is(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ia] || ((t[Ia] = !0), Is("selectionchange", !1, t));
  }
}
function Fg(e, t, n, r) {
  switch (lg(t)) {
    case 1:
      var i = ZS;
      break;
    case 4:
      i = XS;
      break;
    default:
      i = Gd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Oc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ms(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = jr(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Gv(function () {
    var s = o,
      c = Vd(n),
      d = [];
    e: {
      var p = bg.get(e);
      if (p !== void 0) {
        var m = qd,
          y = e;
        switch (e) {
          case "keypress":
            if (Xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = pw;
            break;
          case "focusin":
            (y = "focus"), (m = xs);
            break;
          case "focusout":
            (y = "blur"), (m = xs);
            break;
          case "beforeblur":
          case "afterblur":
            m = xs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Tp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = tw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = vw;
            break;
          case yg:
          case Sg:
          case wg:
            m = iw;
            break;
          case Eg:
            m = yw;
            break;
          case "scroll":
            m = JS;
            break;
          case "wheel":
            m = ww;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = aw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Lp;
        }
        var h = (t & 4) !== 0,
          E = !h && e === "scroll",
          f = h ? (p !== null ? p + "Capture" : null) : p;
        h = [];
        for (var v = s, g; v !== null; ) {
          g = v;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              f !== null && ((w = ko(v, f)), w != null && h.push(No(v, w, g)))),
            E)
          )
            break;
          v = v.return;
        }
        0 < h.length &&
          ((p = new m(p, y, null, n, c)), d.push({ event: p, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          p &&
            n !== jc &&
            (y = n.relatedTarget || n.fromElement) &&
            (jr(y) || y[Ln]))
        )
          break e;
        if (
          (m || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = s),
              (y = y ? jr(y) : null),
              y !== null &&
                ((E = Br(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = s)),
          m !== y)
        ) {
          if (
            ((h = Tp),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = Lp),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (v = "pointer")),
            (E = m == null ? p : ti(m)),
            (g = y == null ? p : ti(y)),
            (p = new h(w, v + "leave", m, n, c)),
            (p.target = E),
            (p.relatedTarget = g),
            (w = null),
            jr(c) === s &&
              ((h = new h(f, v + "enter", y, n, c)),
              (h.target = g),
              (h.relatedTarget = E),
              (w = h)),
            (E = w),
            m && y)
          )
            t: {
              for (h = m, f = y, v = 0, g = h; g; g = Gr(g)) v++;
              for (g = 0, w = f; w; w = Gr(w)) g++;
              for (; 0 < v - g; ) (h = Gr(h)), v--;
              for (; 0 < g - v; ) (f = Gr(f)), g--;
              for (; v--; ) {
                if (h === f || (f !== null && h === f.alternate)) break t;
                (h = Gr(h)), (f = Gr(f));
              }
              h = null;
            }
          else h = null;
          m !== null && Kp(d, p, m, h, !1),
            y !== null && E !== null && Kp(d, E, y, h, !0);
        }
      }
      e: {
        if (
          ((p = s ? ti(s) : window),
          (m = p.nodeName && p.nodeName.toLowerCase()),
          m === "select" || (m === "input" && p.type === "file"))
        )
          var S = Ow;
        else if (_p(p))
          if (pg) S = kw;
          else {
            S = Iw;
            var b = Pw;
          }
        else
          (m = p.nodeName) &&
            m.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = Mw);
        if (S && (S = S(e, s))) {
          fg(d, S, n, c);
          break e;
        }
        b && b(e, p, s),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            wc(p, "number", p.value);
      }
      switch (((b = s ? ti(s) : window), e)) {
        case "focusin":
          (_p(b) || b.contentEditable === "true") &&
            ((Jr = b), (Rc = s), (yo = null));
          break;
        case "focusout":
          yo = Rc = Jr = null;
          break;
        case "mousedown":
          Ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ac = !1), Wp(d, n, c);
          break;
        case "selectionchange":
          if (Uw) break;
        case "keydown":
        case "keyup":
          Wp(d, n, c);
      }
      var x;
      if (Zd)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Xr
          ? cg(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (sg &&
          n.locale !== "ko" &&
          (Xr || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Xr && (x = ug())
            : ((Xn = c),
              (Kd = "value" in Xn ? Xn.value : Xn.textContent),
              (Xr = !0))),
        (b = bl(s, j)),
        0 < b.length &&
          ((j = new Dp(j, e, null, n, c)),
          d.push({ event: j, listeners: b }),
          x ? (j.data = x) : ((x = dg(n)), x !== null && (j.data = x)))),
        (x = bw ? xw(e, n) : Fw(e, n)) &&
          ((s = bl(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Dp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = x)));
    }
    xg(d, t);
  });
}
function No(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ko(e, n)),
      o != null && r.unshift(No(e, o, i)),
      (o = ko(e, t)),
      o != null && r.push(No(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Gr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kp(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = ko(n, o)), u != null && a.unshift(No(n, u, l)))
        : i || ((u = ko(n, o)), u != null && a.push(No(n, u, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Nw = /\r\n?/g,
  $w = /\u0000|\uFFFD/g;
function qp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Nw,
      `
`
    )
    .replace($w, "");
}
function Ma(e, t, n) {
  if (((t = qp(t)), qp(e) !== t && n)) throw Error(K(425));
}
function xl() {}
var Uc = null,
  Tc = null;
function Dc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Lc = typeof setTimeout == "function" ? setTimeout : void 0,
  _w = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yp = typeof Promise == "function" ? Promise : void 0,
  zw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yp < "u"
      ? function (e) {
          return Yp.resolve(null).then(e).catch(Bw);
        }
      : Lc;
function Bw(e) {
  setTimeout(function () {
    throw e;
  });
}
function ks(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Uo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Uo(t);
}
function rr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Di = Math.random().toString(36).slice(2),
  vn = "__reactFiber$" + Di,
  $o = "__reactProps$" + Di,
  Ln = "__reactContainer$" + Di,
  Nc = "__reactEvents$" + Di,
  Vw = "__reactListeners$" + Di,
  Hw = "__reactHandles$" + Di;
function jr(e) {
  var t = e[vn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[vn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zp(e); e !== null; ) {
          if ((n = e[vn])) return n;
          e = Zp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ua(e) {
  return (
    (e = e[vn] || e[Ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(K(33));
}
function hu(e) {
  return e[$o] || null;
}
var $c = [],
  ni = -1;
function yr(e) {
  return { current: e };
}
function Ae(e) {
  0 > ni || ((e.current = $c[ni]), ($c[ni] = null), ni--);
}
function Ie(e, t) {
  ni++, ($c[ni] = e.current), (e.current = t);
}
var fr = {},
  St = yr(fr),
  Ct = yr(!1),
  Ar = fr;
function xi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ot(e) {
  return (e = e.childContextTypes), e != null;
}
function Fl() {
  Ae(Ct), Ae(St);
}
function Xp(e, t, n) {
  if (St.current !== fr) throw Error(K(168));
  Ie(St, t), Ie(Ct, n);
}
function jg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(K(108, PS(e) || "Unknown", i));
  return Be({}, n, r);
}
function jl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fr),
    (Ar = St.current),
    Ie(St, e),
    Ie(Ct, Ct.current),
    !0
  );
}
function Jp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(K(169));
  n
    ? ((e = jg(e, t, Ar)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ae(Ct),
      Ae(St),
      Ie(St, e))
    : Ae(Ct),
    Ie(Ct, n);
}
var In = null,
  vu = !1,
  Rs = !1;
function Cg(e) {
  In === null ? (In = [e]) : In.push(e);
}
function Ww(e) {
  (vu = !0), Cg(e);
}
function Sr() {
  if (!Rs && In !== null) {
    Rs = !0;
    var e = 0,
      t = Fe;
    try {
      var n = In;
      for (Fe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (In = null), (vu = !1);
    } catch (i) {
      throw (In !== null && (In = In.slice(e + 1)), Zv(Hd, Sr), i);
    } finally {
      (Fe = t), (Rs = !1);
    }
  }
  return null;
}
var ri = [],
  ii = 0,
  Cl = null,
  Ol = 0,
  Wt = [],
  Qt = 0,
  Ur = null,
  kn = 1,
  Rn = "";
function Er(e, t) {
  (ri[ii++] = Ol), (ri[ii++] = Cl), (Cl = e), (Ol = t);
}
function Og(e, t, n) {
  (Wt[Qt++] = kn), (Wt[Qt++] = Rn), (Wt[Qt++] = Ur), (Ur = e);
  var r = kn;
  e = Rn;
  var i = 32 - ln(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - ln(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (kn = (1 << (32 - ln(t) + i)) | (n << i) | r),
      (Rn = o + e);
  } else (kn = (1 << o) | (n << i) | r), (Rn = e);
}
function Jd(e) {
  e.return !== null && (Er(e, 1), Og(e, 1, 0));
}
function ef(e) {
  for (; e === Cl; )
    (Cl = ri[--ii]), (ri[ii] = null), (Ol = ri[--ii]), (ri[ii] = null);
  for (; e === Ur; )
    (Ur = Wt[--Qt]),
      (Wt[Qt] = null),
      (Rn = Wt[--Qt]),
      (Wt[Qt] = null),
      (kn = Wt[--Qt]),
      (Wt[Qt] = null);
}
var Ut = null,
  At = null,
  Le = !1,
  on = null;
function Pg(e, t) {
  var n = Gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function em(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ut = e), (At = rr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ut = e), (At = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ur !== null ? { id: kn, overflow: Rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ut = e),
            (At = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _c(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zc(e) {
  if (Le) {
    var t = At;
    if (t) {
      var n = t;
      if (!em(e, t)) {
        if (_c(e)) throw Error(K(418));
        t = rr(n.nextSibling);
        var r = Ut;
        t && em(e, t)
          ? Pg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (Ut = e));
      }
    } else {
      if (_c(e)) throw Error(K(418));
      (e.flags = (e.flags & -4097) | 2), (Le = !1), (Ut = e);
    }
  }
}
function tm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ut = e;
}
function ka(e) {
  if (e !== Ut) return !1;
  if (!Le) return tm(e), (Le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Dc(e.type, e.memoizedProps))),
    t && (t = At))
  ) {
    if (_c(e)) throw (Ig(), Error(K(418)));
    for (; t; ) Pg(e, t), (t = rr(t.nextSibling));
  }
  if ((tm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(K(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              At = rr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else At = Ut ? rr(e.stateNode.nextSibling) : null;
  return !0;
}
function Ig() {
  for (var e = At; e; ) e = rr(e.nextSibling);
}
function Fi() {
  (At = Ut = null), (Le = !1);
}
function tf(e) {
  on === null ? (on = [e]) : on.push(e);
}
var Qw = Bn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    (t = Be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Pl = yr(null),
  Il = null,
  oi = null,
  nf = null;
function rf() {
  nf = oi = Il = null;
}
function of(e) {
  var t = Pl.current;
  Ae(Pl), (e._currentValue = t);
}
function Bc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vi(e, t) {
  (Il = e),
    (nf = oi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (jt = !0), (e.firstContext = null));
}
function qt(e) {
  var t = e._currentValue;
  if (nf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oi === null)) {
      if (Il === null) throw Error(K(308));
      (oi = e), (Il.dependencies = { lanes: 0, firstContext: e });
    } else oi = oi.next = e;
  return t;
}
var Cr = null;
function af(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function Mg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), af(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Nn(e, r)
  );
}
function Nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Kn = !1;
function lf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function An(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ir(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ye & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Nn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), af(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Nn(e, n)
  );
}
function Ja(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wd(e, n);
  }
}
function nm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ml(e, t, n, r) {
  var i = e.updateQueue;
  Kn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), a === null ? (o = s) : (a.next = s), (a = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (a = 0), (c = s = u = null), (l = o);
    do {
      var p = l.lane,
        m = l.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            h = l;
          switch (((p = t), (m = n), h.tag)) {
            case 1:
              if (((y = h.payload), typeof y == "function")) {
                d = y.call(m, d, p);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = h.payload),
                (p = typeof y == "function" ? y.call(m, d, p) : y),
                p == null)
              )
                break e;
              d = Be({}, d, p);
              break e;
            case 2:
              Kn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (m = {
          eventTime: m,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = m), (u = d)) : (c = c.next = m),
          (a |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dr |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function rm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(K(191, i));
        i.call(r);
      }
    }
}
var Rg = new Mv.Component().refs;
function Vc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Br(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Et(),
      i = ar(e),
      o = An(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ir(e, o, i)),
      t !== null && (un(t, e, i, r), Ja(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Et(),
      i = ar(e),
      o = An(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ir(e, o, i)),
      t !== null && (un(t, e, i, r), Ja(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Et(),
      r = ar(e),
      i = An(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ir(e, i, r)),
      t !== null && (un(t, e, r, n), Ja(t, e, r));
  },
};
function im(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Do(n, r) || !Do(i, o)
      : !0
  );
}
function Ag(e, t, n) {
  var r = !1,
    i = fr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = qt(o))
      : ((i = Ot(t) ? Ar : St.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xi(e, i) : fr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function om(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gu.enqueueReplaceState(t, t.state, null);
}
function Hc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Rg), lf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = qt(o))
    : ((o = Ot(t) ? Ar : St.current), (i.context = xi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Vc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && gu.enqueueReplaceState(i, i.state, null),
      Ml(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(K(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(K(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            l === Rg && (l = i.refs = {}),
              a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(K(284));
    if (!n._owner) throw Error(K(290, e));
  }
  return e;
}
function Ra(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      K(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function am(e) {
  var t = e._init;
  return t(e._payload);
}
function Ug(e) {
  function t(f, v) {
    if (e) {
      var g = f.deletions;
      g === null ? ((f.deletions = [v]), (f.flags |= 16)) : g.push(v);
    }
  }
  function n(f, v) {
    if (!e) return null;
    for (; v !== null; ) t(f, v), (v = v.sibling);
    return null;
  }
  function r(f, v) {
    for (f = new Map(); v !== null; )
      v.key !== null ? f.set(v.key, v) : f.set(v.index, v), (v = v.sibling);
    return f;
  }
  function i(f, v) {
    return (f = lr(f, v)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, v, g) {
    return (
      (f.index = g),
      e
        ? ((g = f.alternate),
          g !== null
            ? ((g = g.index), g < v ? ((f.flags |= 2), v) : g)
            : ((f.flags |= 2), v))
        : ((f.flags |= 1048576), v)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function l(f, v, g, w) {
    return v === null || v.tag !== 6
      ? ((v = $s(g, f.mode, w)), (v.return = f), v)
      : ((v = i(v, g)), (v.return = f), v);
  }
  function u(f, v, g, w) {
    var S = g.type;
    return S === Zr
      ? c(f, v, g.props.children, w, g.key)
      : v !== null &&
        (v.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Gn &&
            am(S) === v.type))
      ? ((w = i(v, g.props)), (w.ref = Xi(f, v, g)), (w.return = f), w)
      : ((w = ol(g.type, g.key, g.props, null, f.mode, w)),
        (w.ref = Xi(f, v, g)),
        (w.return = f),
        w);
  }
  function s(f, v, g, w) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== g.containerInfo ||
      v.stateNode.implementation !== g.implementation
      ? ((v = _s(g, f.mode, w)), (v.return = f), v)
      : ((v = i(v, g.children || [])), (v.return = f), v);
  }
  function c(f, v, g, w, S) {
    return v === null || v.tag !== 7
      ? ((v = Rr(g, f.mode, w, S)), (v.return = f), v)
      : ((v = i(v, g)), (v.return = f), v);
  }
  function d(f, v, g) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = $s("" + v, f.mode, g)), (v.return = f), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ea:
          return (
            (g = ol(v.type, v.key, v.props, null, f.mode, g)),
            (g.ref = Xi(f, null, v)),
            (g.return = f),
            g
          );
        case Yr:
          return (v = _s(v, f.mode, g)), (v.return = f), v;
        case Gn:
          var w = v._init;
          return d(f, w(v._payload), g);
      }
      if (lo(v) || Gi(v))
        return (v = Rr(v, f.mode, g, null)), (v.return = f), v;
      Ra(f, v);
    }
    return null;
  }
  function p(f, v, g, w) {
    var S = v !== null ? v.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : l(f, v, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ea:
          return g.key === S ? u(f, v, g, w) : null;
        case Yr:
          return g.key === S ? s(f, v, g, w) : null;
        case Gn:
          return (S = g._init), p(f, v, S(g._payload), w);
      }
      if (lo(g) || Gi(g)) return S !== null ? null : c(f, v, g, w, null);
      Ra(f, g);
    }
    return null;
  }
  function m(f, v, g, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(g) || null), l(v, f, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ea:
          return (f = f.get(w.key === null ? g : w.key) || null), u(v, f, w, S);
        case Yr:
          return (f = f.get(w.key === null ? g : w.key) || null), s(v, f, w, S);
        case Gn:
          var b = w._init;
          return m(f, v, g, b(w._payload), S);
      }
      if (lo(w) || Gi(w)) return (f = f.get(g) || null), c(v, f, w, S, null);
      Ra(v, w);
    }
    return null;
  }
  function y(f, v, g, w) {
    for (
      var S = null, b = null, x = v, j = (v = 0), P = null;
      x !== null && j < g.length;
      j++
    ) {
      x.index > j ? ((P = x), (x = null)) : (P = x.sibling);
      var C = p(f, x, g[j], w);
      if (C === null) {
        x === null && (x = P);
        break;
      }
      e && x && C.alternate === null && t(f, x),
        (v = o(C, v, j)),
        b === null ? (S = C) : (b.sibling = C),
        (b = C),
        (x = P);
    }
    if (j === g.length) return n(f, x), Le && Er(f, j), S;
    if (x === null) {
      for (; j < g.length; j++)
        (x = d(f, g[j], w)),
          x !== null &&
            ((v = o(x, v, j)), b === null ? (S = x) : (b.sibling = x), (b = x));
      return Le && Er(f, j), S;
    }
    for (x = r(f, x); j < g.length; j++)
      (P = m(x, f, j, g[j], w)),
        P !== null &&
          (e && P.alternate !== null && x.delete(P.key === null ? j : P.key),
          (v = o(P, v, j)),
          b === null ? (S = P) : (b.sibling = P),
          (b = P));
    return (
      e &&
        x.forEach(function (M) {
          return t(f, M);
        }),
      Le && Er(f, j),
      S
    );
  }
  function h(f, v, g, w) {
    var S = Gi(g);
    if (typeof S != "function") throw Error(K(150));
    if (((g = S.call(g)), g == null)) throw Error(K(151));
    for (
      var b = (S = null), x = v, j = (v = 0), P = null, C = g.next();
      x !== null && !C.done;
      j++, C = g.next()
    ) {
      x.index > j ? ((P = x), (x = null)) : (P = x.sibling);
      var M = p(f, x, C.value, w);
      if (M === null) {
        x === null && (x = P);
        break;
      }
      e && x && M.alternate === null && t(f, x),
        (v = o(M, v, j)),
        b === null ? (S = M) : (b.sibling = M),
        (b = M),
        (x = P);
    }
    if (C.done) return n(f, x), Le && Er(f, j), S;
    if (x === null) {
      for (; !C.done; j++, C = g.next())
        (C = d(f, C.value, w)),
          C !== null &&
            ((v = o(C, v, j)), b === null ? (S = C) : (b.sibling = C), (b = C));
      return Le && Er(f, j), S;
    }
    for (x = r(f, x); !C.done; j++, C = g.next())
      (C = m(x, f, j, C.value, w)),
        C !== null &&
          (e && C.alternate !== null && x.delete(C.key === null ? j : C.key),
          (v = o(C, v, j)),
          b === null ? (S = C) : (b.sibling = C),
          (b = C));
    return (
      e &&
        x.forEach(function (R) {
          return t(f, R);
        }),
      Le && Er(f, j),
      S
    );
  }
  function E(f, v, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Zr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ea:
          e: {
            for (var S = g.key, b = v; b !== null; ) {
              if (b.key === S) {
                if (((S = g.type), S === Zr)) {
                  if (b.tag === 7) {
                    n(f, b.sibling),
                      (v = i(b, g.props.children)),
                      (v.return = f),
                      (f = v);
                    break e;
                  }
                } else if (
                  b.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Gn &&
                    am(S) === b.type)
                ) {
                  n(f, b.sibling),
                    (v = i(b, g.props)),
                    (v.ref = Xi(f, b, g)),
                    (v.return = f),
                    (f = v);
                  break e;
                }
                n(f, b);
                break;
              } else t(f, b);
              b = b.sibling;
            }
            g.type === Zr
              ? ((v = Rr(g.props.children, f.mode, w, g.key)),
                (v.return = f),
                (f = v))
              : ((w = ol(g.type, g.key, g.props, null, f.mode, w)),
                (w.ref = Xi(f, v, g)),
                (w.return = f),
                (f = w));
          }
          return a(f);
        case Yr:
          e: {
            for (b = g.key; v !== null; ) {
              if (v.key === b)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === g.containerInfo &&
                  v.stateNode.implementation === g.implementation
                ) {
                  n(f, v.sibling),
                    (v = i(v, g.children || [])),
                    (v.return = f),
                    (f = v);
                  break e;
                } else {
                  n(f, v);
                  break;
                }
              else t(f, v);
              v = v.sibling;
            }
            (v = _s(g, f.mode, w)), (v.return = f), (f = v);
          }
          return a(f);
        case Gn:
          return (b = g._init), E(f, v, b(g._payload), w);
      }
      if (lo(g)) return y(f, v, g, w);
      if (Gi(g)) return h(f, v, g, w);
      Ra(f, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        v !== null && v.tag === 6
          ? (n(f, v.sibling), (v = i(v, g)), (v.return = f), (f = v))
          : (n(f, v), (v = $s(g, f.mode, w)), (v.return = f), (f = v)),
        a(f))
      : n(f, v);
  }
  return E;
}
var ji = Ug(!0),
  Tg = Ug(!1),
  sa = {},
  En = yr(sa),
  _o = yr(sa),
  zo = yr(sa);
function Or(e) {
  if (e === sa) throw Error(K(174));
  return e;
}
function uf(e, t) {
  switch ((Ie(zo, t), Ie(_o, e), Ie(En, sa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = bc(t, e));
  }
  Ae(En), Ie(En, t);
}
function Ci() {
  Ae(En), Ae(_o), Ae(zo);
}
function Dg(e) {
  Or(zo.current);
  var t = Or(En.current),
    n = bc(t, e.type);
  t !== n && (Ie(_o, e), Ie(En, n));
}
function sf(e) {
  _o.current === e && (Ae(En), Ae(_o));
}
var _e = yr(0);
function kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var As = [];
function cf() {
  for (var e = 0; e < As.length; e++)
    As[e]._workInProgressVersionPrimary = null;
  As.length = 0;
}
var el = Bn.ReactCurrentDispatcher,
  Us = Bn.ReactCurrentBatchConfig,
  Tr = 0,
  ze = null,
  Xe = null,
  nt = null,
  Rl = !1,
  So = !1,
  Bo = 0,
  Gw = 0;
function mt() {
  throw Error(K(321));
}
function df(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!sn(e[n], t[n])) return !1;
  return !0;
}
function ff(e, t, n, r, i, o) {
  if (
    ((Tr = o),
    (ze = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (el.current = e === null || e.memoizedState === null ? Zw : Xw),
    (e = n(r, i)),
    So)
  ) {
    o = 0;
    do {
      if (((So = !1), (Bo = 0), 25 <= o)) throw Error(K(301));
      (o += 1),
        (nt = Xe = null),
        (t.updateQueue = null),
        (el.current = Jw),
        (e = n(r, i));
    } while (So);
  }
  if (
    ((el.current = Al),
    (t = Xe !== null && Xe.next !== null),
    (Tr = 0),
    (nt = Xe = ze = null),
    (Rl = !1),
    t)
  )
    throw Error(K(300));
  return e;
}
function pf() {
  var e = Bo !== 0;
  return (Bo = 0), e;
}
function pn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return nt === null ? (ze.memoizedState = nt = e) : (nt = nt.next = e), nt;
}
function Yt() {
  if (Xe === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Xe.next;
  var t = nt === null ? ze.memoizedState : nt.next;
  if (t !== null) (nt = t), (Xe = e);
  else {
    if (e === null) throw Error(K(310));
    (Xe = e),
      (e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      nt === null ? (ze.memoizedState = nt = e) : (nt = nt.next = e);
  }
  return nt;
}
function Vo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ts(e) {
  var t = Yt(),
    n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = Xe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (a = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((Tr & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (a = r)) : (u = u.next = d),
          (ze.lanes |= c),
          (Dr |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (a = r) : (u.next = l),
      sn(r, t.memoizedState) || (jt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ze.lanes |= o), (Dr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ds(e) {
  var t = Yt(),
    n = t.queue;
  if (n === null) throw Error(K(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    sn(o, t.memoizedState) || (jt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Lg() {}
function Ng(e, t) {
  var n = ze,
    r = Yt(),
    i = t(),
    o = !sn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (jt = !0)),
    (r = r.queue),
    mf(zg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (nt !== null && nt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ho(9, _g.bind(null, n, r, i, t), void 0, null),
      rt === null)
    )
      throw Error(K(349));
    Tr & 30 || $g(n, t, i);
  }
  return i;
}
function $g(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _g(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bg(t) && Vg(e);
}
function zg(e, t, n) {
  return n(function () {
    Bg(t) && Vg(e);
  });
}
function Bg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sn(e, n);
  } catch {
    return !0;
  }
}
function Vg(e) {
  var t = Nn(e, 1);
  t !== null && un(t, e, 1, -1);
}
function lm(e) {
  var t = pn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yw.bind(null, ze, e)),
    [t.memoizedState, e]
  );
}
function Ho(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hg() {
  return Yt().memoizedState;
}
function tl(e, t, n, r) {
  var i = pn();
  (ze.flags |= e),
    (i.memoizedState = Ho(1 | t, n, void 0, r === void 0 ? null : r));
}
function yu(e, t, n, r) {
  var i = Yt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Xe !== null) {
    var a = Xe.memoizedState;
    if (((o = a.destroy), r !== null && df(r, a.deps))) {
      i.memoizedState = Ho(t, n, o, r);
      return;
    }
  }
  (ze.flags |= e), (i.memoizedState = Ho(1 | t, n, o, r));
}
function um(e, t) {
  return tl(8390656, 8, e, t);
}
function mf(e, t) {
  return yu(2048, 8, e, t);
}
function Wg(e, t) {
  return yu(4, 2, e, t);
}
function Qg(e, t) {
  return yu(4, 4, e, t);
}
function Gg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yu(4, 4, Gg.bind(null, t, e), n)
  );
}
function hf() {}
function qg(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && df(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yg(e, t) {
  var n = Yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && df(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zg(e, t, n) {
  return Tr & 21
    ? (sn(n, t) || ((n = eg()), (ze.lanes |= n), (Dr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (jt = !0)), (e.memoizedState = n));
}
function Kw(e, t) {
  var n = Fe;
  (Fe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Us.transition;
  Us.transition = {};
  try {
    e(!1), t();
  } finally {
    (Fe = n), (Us.transition = r);
  }
}
function Xg() {
  return Yt().memoizedState;
}
function qw(e, t, n) {
  var r = ar(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jg(e))
  )
    e0(t, n);
  else if (((n = Mg(e, t, n, r)), n !== null)) {
    var i = Et();
    un(n, e, r, i), t0(n, t, r);
  }
}
function Yw(e, t, n) {
  var r = ar(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jg(e)) e0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), sn(l, a))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), af(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Mg(e, t, i, r)),
      n !== null && ((i = Et()), un(n, e, r, i), t0(n, t, r));
  }
}
function Jg(e) {
  var t = e.alternate;
  return e === ze || (t !== null && t === ze);
}
function e0(e, t) {
  So = Rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function t0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wd(e, n);
  }
}
var Al = {
    readContext: qt,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useMutableSource: mt,
    useSyncExternalStore: mt,
    useId: mt,
    unstable_isNewReconciler: !1,
  },
  Zw = {
    readContext: qt,
    useCallback: function (e, t) {
      return (pn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qt,
    useEffect: um,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        tl(4194308, 4, Gg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qw.bind(null, ze, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lm,
    useDebugValue: hf,
    useDeferredValue: function (e) {
      return (pn().memoizedState = e);
    },
    useTransition: function () {
      var e = lm(!1),
        t = e[0];
      return (e = Kw.bind(null, e[1])), (pn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ze,
        i = pn();
      if (Le) {
        if (n === void 0) throw Error(K(407));
        n = n();
      } else {
        if (((n = t()), rt === null)) throw Error(K(349));
        Tr & 30 || $g(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        um(zg.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ho(9, _g.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pn(),
        t = rt.identifierPrefix;
      if (Le) {
        var n = Rn,
          r = kn;
        (n = (r & ~(1 << (32 - ln(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xw = {
    readContext: qt,
    useCallback: qg,
    useContext: qt,
    useEffect: mf,
    useImperativeHandle: Kg,
    useInsertionEffect: Wg,
    useLayoutEffect: Qg,
    useMemo: Yg,
    useReducer: Ts,
    useRef: Hg,
    useState: function () {
      return Ts(Vo);
    },
    useDebugValue: hf,
    useDeferredValue: function (e) {
      var t = Yt();
      return Zg(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ts(Vo)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lg,
    useSyncExternalStore: Ng,
    useId: Xg,
    unstable_isNewReconciler: !1,
  },
  Jw = {
    readContext: qt,
    useCallback: qg,
    useContext: qt,
    useEffect: mf,
    useImperativeHandle: Kg,
    useInsertionEffect: Wg,
    useLayoutEffect: Qg,
    useMemo: Yg,
    useReducer: Ds,
    useRef: Hg,
    useState: function () {
      return Ds(Vo);
    },
    useDebugValue: hf,
    useDeferredValue: function (e) {
      var t = Yt();
      return Xe === null ? (t.memoizedState = e) : Zg(t, Xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ds(Vo)[0],
        t = Yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lg,
    useSyncExternalStore: Ng,
    useId: Xg,
    unstable_isNewReconciler: !1,
  };
function Oi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += OS(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ls(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var eE = typeof WeakMap == "function" ? WeakMap : Map;
function n0(e, t, n) {
  (n = An(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Tl || ((Tl = !0), (td = r)), Wc(e, t);
    }),
    n
  );
}
function r0(e, t, n) {
  (n = An(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wc(e, t),
          typeof r != "function" &&
            (or === null ? (or = new Set([this])) : or.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function sm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new eE();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = mE.bind(null, e, t, n)), t.then(e, e));
}
function cm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dm(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = An(-1, 1)), (t.tag = 2), ir(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tE = Bn.ReactCurrentOwner,
  jt = !1;
function wt(e, t, n, r) {
  t.child = e === null ? Tg(t, null, n, r) : ji(t, e.child, n, r);
}
function fm(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    vi(t, i),
    (r = ff(e, t, n, r, o, i)),
    (n = pf()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        $n(e, t, i))
      : (Le && n && Jd(t), (t.flags |= 1), wt(e, t, r, i), t.child)
  );
}
function pm(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !xf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), i0(e, t, o, r, i))
      : ((e = ol(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Do), n(a, r) && e.ref === t.ref)
    )
      return $n(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = lr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function i0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Do(o, r) && e.ref === t.ref)
      if (((jt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (jt = !0);
      else return (t.lanes = e.lanes), $n(e, t, i);
  }
  return Qc(e, t, n, r, i);
}
function o0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ie(li, Rt),
        (Rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ie(li, Rt),
          (Rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Ie(li, Rt),
        (Rt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ie(li, Rt),
      (Rt |= r);
  return wt(e, t, i, n), t.child;
}
function a0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qc(e, t, n, r, i) {
  var o = Ot(n) ? Ar : St.current;
  return (
    (o = xi(t, o)),
    vi(t, i),
    (n = ff(e, t, n, r, o, i)),
    (r = pf()),
    e !== null && !jt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        $n(e, t, i))
      : (Le && r && Jd(t), (t.flags |= 1), wt(e, t, n, i), t.child)
  );
}
function mm(e, t, n, r, i) {
  if (Ot(n)) {
    var o = !0;
    jl(t);
  } else o = !1;
  if ((vi(t, i), t.stateNode === null))
    nl(e, t), Ag(t, n, r), Hc(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var u = a.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = qt(s))
      : ((s = Ot(n) ? Ar : St.current), (s = xi(t, s)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || u !== s) && om(t, a, r, s)),
      (Kn = !1);
    var p = t.memoizedState;
    (a.state = p),
      Ml(t, r, a, i),
      (u = t.memoizedState),
      l !== r || p !== u || Ct.current || Kn
        ? (typeof c == "function" && (Vc(t, n, c, r), (u = t.memoizedState)),
          (l = Kn || im(t, n, l, r, p, u, s))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = s),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      kg(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : tn(t.type, l)),
      (a.props = s),
      (d = t.pendingProps),
      (p = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = qt(u))
        : ((u = Ot(n) ? Ar : St.current), (u = xi(t, u)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || p !== u) && om(t, a, r, u)),
      (Kn = !1),
      (p = t.memoizedState),
      (a.state = p),
      Ml(t, r, a, i);
    var y = t.memoizedState;
    l !== d || p !== y || Ct.current || Kn
      ? (typeof m == "function" && (Vc(t, n, m, r), (y = t.memoizedState)),
        (s = Kn || im(t, n, s, r, p, y, u) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = u),
        (r = s))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gc(e, t, n, r, o, i);
}
function Gc(e, t, n, r, i, o) {
  a0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Jp(t, n, !1), $n(e, t, o);
  (r = t.stateNode), (tE.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ji(t, e.child, null, o)), (t.child = ji(t, null, l, o)))
      : wt(e, t, l, o),
    (t.memoizedState = r.state),
    i && Jp(t, n, !0),
    t.child
  );
}
function l0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xp(e, t.context, !1),
    uf(e, t.containerInfo);
}
function hm(e, t, n, r, i) {
  return Fi(), tf(i), (t.flags |= 256), wt(e, t, n, r), t.child;
}
var Kc = { dehydrated: null, treeContext: null, retryLane: 0 };
function qc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function u0(e, t, n) {
  var r = t.pendingProps,
    i = _e.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Ie(_e, i & 1),
    e === null)
  )
    return (
      zc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = Eu(a, r, 0, null)),
              (e = Rr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = qc(n)),
              (t.memoizedState = Kc),
              e)
            : vf(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return nE(e, t, a, r, l, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = lr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = lr(l, o)) : ((o = Rr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? qc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Kc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = lr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vf(e, t) {
  return (
    (t = Eu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Aa(e, t, n, r) {
  return (
    r !== null && tf(r),
    ji(t, e.child, null, n),
    (e = vf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nE(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ls(Error(K(422)))), Aa(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Eu({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Rr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ji(t, e.child, null, a),
        (t.child.memoizedState = qc(a)),
        (t.memoizedState = Kc),
        o);
  if (!(t.mode & 1)) return Aa(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(K(419))), (r = Ls(o, r, void 0)), Aa(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), jt || l)) {
    if (((r = rt), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Nn(e, i), un(r, e, i, -1));
    }
    return bf(), (r = Ls(Error(K(421)))), Aa(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (At = rr(i.nextSibling)),
      (Ut = t),
      (Le = !0),
      (on = null),
      e !== null &&
        ((Wt[Qt++] = kn),
        (Wt[Qt++] = Rn),
        (Wt[Qt++] = Ur),
        (kn = e.id),
        (Rn = e.overflow),
        (Ur = t)),
      (t = vf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function vm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bc(e.return, t, n);
}
function Ns(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function s0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((wt(e, t, r.children, n), (r = _e.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vm(e, n, t);
        else if (e.tag === 19) vm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ie(_e, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && kl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ns(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && kl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ns(t, !0, n, null, o);
        break;
      case "together":
        Ns(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(K(153));
  if (t.child !== null) {
    for (
      e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = lr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rE(e, t, n) {
  switch (t.tag) {
    case 3:
      l0(t), Fi();
      break;
    case 5:
      Dg(t);
      break;
    case 1:
      Ot(t.type) && jl(t);
      break;
    case 4:
      uf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Ie(Pl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ie(_e, _e.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? u0(e, t, n)
          : (Ie(_e, _e.current & 1),
            (e = $n(e, t, n)),
            e !== null ? e.sibling : null);
      Ie(_e, _e.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return s0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ie(_e, _e.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), o0(e, t, n);
  }
  return $n(e, t, n);
}
var c0, Yc, d0, f0;
c0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yc = function () {};
d0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Or(En.current);
    var o = null;
    switch (n) {
      case "input":
        (i = yc(e, i)), (r = yc(e, r)), (o = []);
        break;
      case "select":
        (i = Be({}, i, { value: void 0 })),
          (r = Be({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ec(e, i)), (r = Ec(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xl);
    }
    xc(n, r);
    var a;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Io.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Io.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ke("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
f0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ji(e, t) {
  if (!Le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ht(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function iE(e, t, n) {
  var r = t.pendingProps;
  switch ((ef(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ht(t), null;
    case 1:
      return Ot(t.type) && Fl(), ht(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ci(),
        Ae(Ct),
        Ae(St),
        cf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ka(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), on !== null && (id(on), (on = null)))),
        Yc(e, t),
        ht(t),
        null
      );
    case 5:
      sf(t);
      var i = Or(zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        d0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(K(166));
          return ht(t), null;
        }
        if (((e = Or(En.current)), ka(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[vn] = t), (r[$o] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < so.length; i++) ke(so[i], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              jp(r, o), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              Op(r, o), ke("invalid", r);
          }
          xc(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ma(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ma(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Io.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              ba(r), Cp(r, o, !0);
              break;
            case "textarea":
              ba(r), Pp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = xl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $v(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[vn] = t),
            (e[$o] = r),
            c0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Fc(n, r)), n)) {
              case "dialog":
                ke("cancel", e), ke("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < so.length; i++) ke(so[i], e);
                i = r;
                break;
              case "source":
                ke("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", e), ke("load", e), (i = r);
                break;
              case "details":
                ke("toggle", e), (i = r);
                break;
              case "input":
                jp(e, r), (i = yc(e, r)), ke("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Be({}, r, { value: void 0 })),
                  ke("invalid", e);
                break;
              case "textarea":
                Op(e, r), (i = Ec(e, r)), ke("invalid", e);
                break;
              default:
                i = r;
            }
            xc(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? Bv(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && _v(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Mo(e, u)
                    : typeof u == "number" && Mo(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Io.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ke("scroll", e)
                      : u != null && $d(e, o, u, a));
              }
            switch (n) {
              case "input":
                ba(e), Cp(e, r, !1);
                break;
              case "textarea":
                ba(e), Pp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? fi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      fi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ht(t), null;
    case 6:
      if (e && t.stateNode != null) f0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(K(166));
        if (((n = Or(zo.current)), Or(En.current), ka(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vn] = t),
            (o = r.nodeValue !== n) && ((e = Ut), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ma(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ma(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vn] = t),
            (t.stateNode = r);
      }
      return ht(t), null;
    case 13:
      if (
        (Ae(_e),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Le && At !== null && t.mode & 1 && !(t.flags & 128))
          Ig(), Fi(), (t.flags |= 98560), (o = !1);
        else if (((o = ka(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(K(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(K(317));
            o[vn] = t;
          } else
            Fi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ht(t), (o = !1);
        } else on !== null && (id(on), (on = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || _e.current & 1 ? Je === 0 && (Je = 3) : bf())),
          t.updateQueue !== null && (t.flags |= 4),
          ht(t),
          null);
    case 4:
      return (
        Ci(), Yc(e, t), e === null && Lo(t.stateNode.containerInfo), ht(t), null
      );
    case 10:
      return of(t.type._context), ht(t), null;
    case 17:
      return Ot(t.type) && Fl(), ht(t), null;
    case 19:
      if ((Ae(_e), (o = t.memoizedState), o === null)) return ht(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Ji(o, !1);
        else {
          if (Je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = kl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ji(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ie(_e, (_e.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ge() > Pi &&
            ((t.flags |= 128), (r = !0), Ji(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = kl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ji(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !Le)
            )
              return ht(t), null;
          } else
            2 * Ge() - o.renderingStartTime > Pi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ji(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ge()),
          (t.sibling = null),
          (n = _e.current),
          Ie(_e, r ? (n & 1) | 2 : n & 1),
          t)
        : (ht(t), null);
    case 22:
    case 23:
      return (
        Ef(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Rt & 1073741824 && (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ht(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(K(156, t.tag));
}
function oE(e, t) {
  switch ((ef(t), t.tag)) {
    case 1:
      return (
        Ot(t.type) && Fl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ci(),
        Ae(Ct),
        Ae(St),
        cf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return sf(t), null;
    case 13:
      if (
        (Ae(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(K(340));
        Fi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ae(_e), null;
    case 4:
      return Ci(), null;
    case 10:
      return of(t.type._context), null;
    case 22:
    case 23:
      return Ef(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ua = !1,
  yt = !1,
  aE = typeof WeakSet == "function" ? WeakSet : Set,
  X = null;
function ai(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        He(e, t, r);
      }
    else n.current = null;
}
function Zc(e, t, n) {
  try {
    n();
  } catch (r) {
    He(e, t, r);
  }
}
var gm = !1;
function lE(e, t) {
  if (((Uc = wl), (e = vg()), Xd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            u = -1,
            s = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = a + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (p = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++s === i && (l = a),
                p === o && ++c === r && (u = a),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = m;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Tc = { focusedElem: e, selectionRange: n }, wl = !1, X = t; X !== null; )
    if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (X = e);
    else
      for (; X !== null; ) {
        t = X;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var h = y.memoizedProps,
                    E = y.memoizedState,
                    f = t.stateNode,
                    v = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : tn(t.type, h),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(K(163));
            }
        } catch (w) {
          He(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (X = e);
          break;
        }
        X = t.return;
      }
  return (y = gm), (gm = !1), y;
}
function wo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Zc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Su(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function p0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), p0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vn], delete t[$o], delete t[Nc], delete t[Vw], delete t[Hw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function m0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ym(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || m0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jc(e, t, n), e = e.sibling; e !== null; ) Jc(e, t, n), (e = e.sibling);
}
function ed(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ed(e, t, n), e = e.sibling; e !== null; ) ed(e, t, n), (e = e.sibling);
}
var at = null,
  rn = !1;
function Wn(e, t, n) {
  for (n = n.child; n !== null; ) h0(e, t, n), (n = n.sibling);
}
function h0(e, t, n) {
  if (wn && typeof wn.onCommitFiberUnmount == "function")
    try {
      wn.onCommitFiberUnmount(du, n);
    } catch {}
  switch (n.tag) {
    case 5:
      yt || ai(n, t);
    case 6:
      var r = at,
        i = rn;
      (at = null),
        Wn(e, t, n),
        (at = r),
        (rn = i),
        at !== null &&
          (rn
            ? ((e = at),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : at.removeChild(n.stateNode));
      break;
    case 18:
      at !== null &&
        (rn
          ? ((e = at),
            (n = n.stateNode),
            e.nodeType === 8
              ? ks(e.parentNode, n)
              : e.nodeType === 1 && ks(e, n),
            Uo(e))
          : ks(at, n.stateNode));
      break;
    case 4:
      (r = at),
        (i = rn),
        (at = n.stateNode.containerInfo),
        (rn = !0),
        Wn(e, t, n),
        (at = r),
        (rn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Zc(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Wn(e, t, n);
      break;
    case 1:
      if (
        !yt &&
        (ai(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          He(n, t, l);
        }
      Wn(e, t, n);
      break;
    case 21:
      Wn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((yt = (r = yt) || n.memoizedState !== null), Wn(e, t, n), (yt = r))
        : Wn(e, t, n);
      break;
    default:
      Wn(e, t, n);
  }
}
function Sm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new aE()),
      t.forEach(function (r) {
        var i = vE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Jt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (at = l.stateNode), (rn = !1);
              break e;
            case 3:
              (at = l.stateNode.containerInfo), (rn = !0);
              break e;
            case 4:
              (at = l.stateNode.containerInfo), (rn = !0);
              break e;
          }
          l = l.return;
        }
        if (at === null) throw Error(K(160));
        h0(o, a, i), (at = null), (rn = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        He(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) v0(t, e), (t = t.sibling);
}
function v0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Jt(t, e), fn(e), r & 4)) {
        try {
          wo(3, e, e.return), Su(3, e);
        } catch (h) {
          He(e, e.return, h);
        }
        try {
          wo(5, e, e.return);
        } catch (h) {
          He(e, e.return, h);
        }
      }
      break;
    case 1:
      Jt(t, e), fn(e), r & 512 && n !== null && ai(n, n.return);
      break;
    case 5:
      if (
        (Jt(t, e),
        fn(e),
        r & 512 && n !== null && ai(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Mo(i, "");
        } catch (h) {
          He(e, e.return, h);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Lv(i, o),
              Fc(l, a);
            var s = Fc(l, o);
            for (a = 0; a < u.length; a += 2) {
              var c = u[a],
                d = u[a + 1];
              c === "style"
                ? Bv(i, d)
                : c === "dangerouslySetInnerHTML"
                ? _v(i, d)
                : c === "children"
                ? Mo(i, d)
                : $d(i, c, d, s);
            }
            switch (l) {
              case "input":
                Sc(i, o);
                break;
              case "textarea":
                Nv(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? fi(i, !!o.multiple, m, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fi(i, !!o.multiple, o.defaultValue, !0)
                      : fi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[$o] = o;
          } catch (h) {
            He(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Jt(t, e), fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(K(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (h) {
          He(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Jt(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Uo(t.containerInfo);
        } catch (h) {
          He(e, e.return, h);
        }
      break;
    case 4:
      Jt(t, e), fn(e);
      break;
    case 13:
      Jt(t, e),
        fn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Sf = Ge())),
        r & 4 && Sm(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((yt = (s = yt) || c), Jt(t, e), (yt = s)) : Jt(t, e),
        fn(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (X = e, c = e.child; c !== null; ) {
            for (d = X = c; X !== null; ) {
              switch (((p = X), (m = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wo(4, p, p.return);
                  break;
                case 1:
                  ai(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (h) {
                      He(r, n, h);
                    }
                  }
                  break;
                case 5:
                  ai(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Em(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = p), (X = m)) : Em(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  s
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (u = d.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = zv("display", a)));
              } catch (h) {
                He(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (h) {
                He(e, e.return, h);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Jt(t, e), fn(e), r & 4 && Sm(e);
      break;
    case 21:
      break;
    default:
      Jt(t, e), fn(e);
  }
}
function fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (m0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(K(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Mo(i, ""), (r.flags &= -33));
          var o = ym(e);
          ed(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = ym(e);
          Jc(e, l, a);
          break;
        default:
          throw Error(K(161));
      }
    } catch (u) {
      He(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uE(e, t, n) {
  (X = e), g0(e);
}
function g0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var i = X,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Ua;
      if (!a) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || yt;
        l = Ua;
        var s = yt;
        if (((Ua = a), (yt = u) && !s))
          for (X = i; X !== null; )
            (a = X),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? bm(i)
                : u !== null
                ? ((u.return = a), (X = u))
                : bm(i);
        for (; o !== null; ) (X = o), g0(o), (o = o.sibling);
        (X = i), (Ua = l), (yt = s);
      }
      wm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (X = o)) : wm(e);
  }
}
function wm(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || Su(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && rm(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rm(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Uo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(K(163));
          }
        yt || (t.flags & 512 && Xc(t));
      } catch (p) {
        He(t, t.return, p);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function Em(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (X = n);
      break;
    }
    X = t.return;
  }
}
function bm(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Su(4, t);
          } catch (u) {
            He(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              He(t, i, u);
            }
          }
          var o = t.return;
          try {
            Xc(t);
          } catch (u) {
            He(t, o, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Xc(t);
          } catch (u) {
            He(t, a, u);
          }
      }
    } catch (u) {
      He(t, t.return, u);
    }
    if (t === e) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (X = l);
      break;
    }
    X = t.return;
  }
}
var sE = Math.ceil,
  Ul = Bn.ReactCurrentDispatcher,
  gf = Bn.ReactCurrentOwner,
  Kt = Bn.ReactCurrentBatchConfig,
  ye = 0,
  rt = null,
  Ye = null,
  st = 0,
  Rt = 0,
  li = yr(0),
  Je = 0,
  Wo = null,
  Dr = 0,
  wu = 0,
  yf = 0,
  Eo = null,
  Ft = null,
  Sf = 0,
  Pi = 1 / 0,
  On = null,
  Tl = !1,
  td = null,
  or = null,
  Ta = !1,
  Jn = null,
  Dl = 0,
  bo = 0,
  nd = null,
  rl = -1,
  il = 0;
function Et() {
  return ye & 6 ? Ge() : rl !== -1 ? rl : (rl = Ge());
}
function ar(e) {
  return e.mode & 1
    ? ye & 2 && st !== 0
      ? st & -st
      : Qw.transition !== null
      ? (il === 0 && (il = eg()), il)
      : ((e = Fe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lg(e.type))),
        e)
    : 1;
}
function un(e, t, n, r) {
  if (50 < bo) throw ((bo = 0), (nd = null), Error(K(185)));
  aa(e, n, r),
    (!(ye & 2) || e !== rt) &&
      (e === rt && (!(ye & 2) && (wu |= n), Je === 4 && Yn(e, st)),
      Pt(e, r),
      n === 1 && ye === 0 && !(t.mode & 1) && ((Pi = Ge() + 500), vu && Sr()));
}
function Pt(e, t) {
  var n = e.callbackNode;
  QS(e, t);
  var r = Sl(e, e === rt ? st : 0);
  if (r === 0)
    n !== null && kp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && kp(n), t === 1))
      e.tag === 0 ? Ww(xm.bind(null, e)) : Cg(xm.bind(null, e)),
        zw(function () {
          !(ye & 6) && Sr();
        }),
        (n = null);
    else {
      switch (tg(r)) {
        case 1:
          n = Hd;
          break;
        case 4:
          n = Xv;
          break;
        case 16:
          n = yl;
          break;
        case 536870912:
          n = Jv;
          break;
        default:
          n = yl;
      }
      n = j0(n, y0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function y0(e, t) {
  if (((rl = -1), (il = 0), ye & 6)) throw Error(K(327));
  var n = e.callbackNode;
  if (gi() && e.callbackNode !== n) return null;
  var r = Sl(e, e === rt ? st : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var i = ye;
    ye |= 2;
    var o = w0();
    (rt !== e || st !== t) && ((On = null), (Pi = Ge() + 500), kr(e, t));
    do
      try {
        fE();
        break;
      } catch (l) {
        S0(e, l);
      }
    while (1);
    rf(),
      (Ul.current = o),
      (ye = i),
      Ye !== null ? (t = 0) : ((rt = null), (st = 0), (t = Je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ic(e)), i !== 0 && ((r = i), (t = rd(e, i)))), t === 1)
    )
      throw ((n = Wo), kr(e, 0), Yn(e, r), Pt(e, Ge()), n);
    if (t === 6) Yn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !cE(i) &&
          ((t = Ll(e, r)),
          t === 2 && ((o = Ic(e)), o !== 0 && ((r = o), (t = rd(e, o)))),
          t === 1))
      )
        throw ((n = Wo), kr(e, 0), Yn(e, r), Pt(e, Ge()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(K(345));
        case 2:
          br(e, Ft, On);
          break;
        case 3:
          if (
            (Yn(e, r), (r & 130023424) === r && ((t = Sf + 500 - Ge()), 10 < t))
          ) {
            if (Sl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Lc(br.bind(null, e, Ft, On), t);
            break;
          }
          br(e, Ft, On);
          break;
        case 4:
          if ((Yn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - ln(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * sE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lc(br.bind(null, e, Ft, On), r);
            break;
          }
          br(e, Ft, On);
          break;
        case 5:
          br(e, Ft, On);
          break;
        default:
          throw Error(K(329));
      }
    }
  }
  return Pt(e, Ge()), e.callbackNode === n ? y0.bind(null, e) : null;
}
function rd(e, t) {
  var n = Eo;
  return (
    e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256),
    (e = Ll(e, t)),
    e !== 2 && ((t = Ft), (Ft = n), t !== null && id(t)),
    e
  );
}
function id(e) {
  Ft === null ? (Ft = e) : Ft.push.apply(Ft, e);
}
function cE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!sn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Yn(e, t) {
  for (
    t &= ~yf,
      t &= ~wu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xm(e) {
  if (ye & 6) throw Error(K(327));
  gi();
  var t = Sl(e, 0);
  if (!(t & 1)) return Pt(e, Ge()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ic(e);
    r !== 0 && ((t = r), (n = rd(e, r)));
  }
  if (n === 1) throw ((n = Wo), kr(e, 0), Yn(e, t), Pt(e, Ge()), n);
  if (n === 6) throw Error(K(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    br(e, Ft, On),
    Pt(e, Ge()),
    null
  );
}
function wf(e, t) {
  var n = ye;
  ye |= 1;
  try {
    return e(t);
  } finally {
    (ye = n), ye === 0 && ((Pi = Ge() + 500), vu && Sr());
  }
}
function Lr(e) {
  Jn !== null && Jn.tag === 0 && !(ye & 6) && gi();
  var t = ye;
  ye |= 1;
  var n = Kt.transition,
    r = Fe;
  try {
    if (((Kt.transition = null), (Fe = 1), e)) return e();
  } finally {
    (Fe = r), (Kt.transition = n), (ye = t), !(ye & 6) && Sr();
  }
}
function Ef() {
  (Rt = li.current), Ae(li);
}
function kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _w(n)), Ye !== null))
    for (n = Ye.return; n !== null; ) {
      var r = n;
      switch ((ef(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Fl();
          break;
        case 3:
          Ci(), Ae(Ct), Ae(St), cf();
          break;
        case 5:
          sf(r);
          break;
        case 4:
          Ci();
          break;
        case 13:
          Ae(_e);
          break;
        case 19:
          Ae(_e);
          break;
        case 10:
          of(r.type._context);
          break;
        case 22:
        case 23:
          Ef();
      }
      n = n.return;
    }
  if (
    ((rt = e),
    (Ye = e = lr(e.current, null)),
    (st = Rt = t),
    (Je = 0),
    (Wo = null),
    (yf = wu = Dr = 0),
    (Ft = Eo = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function S0(e, t) {
  do {
    var n = Ye;
    try {
      if ((rf(), (el.current = Al), Rl)) {
        for (var r = ze.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Rl = !1;
      }
      if (
        ((Tr = 0),
        (nt = Xe = ze = null),
        (So = !1),
        (Bo = 0),
        (gf.current = null),
        n === null || n.return === null)
      ) {
        (Je = 1), (Wo = t), (Ye = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          l = n,
          u = t;
        if (
          ((t = st),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = cm(a);
          if (m !== null) {
            (m.flags &= -257),
              dm(m, a, l, o, t),
              m.mode & 1 && sm(o, s, t),
              (t = m),
              (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var h = new Set();
              h.add(u), (t.updateQueue = h);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              sm(o, s, t), bf();
              break e;
            }
            u = Error(K(426));
          }
        } else if (Le && l.mode & 1) {
          var E = cm(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              dm(E, a, l, o, t),
              tf(Oi(u, l));
            break e;
          }
        }
        (o = u = Oi(u, l)),
          Je !== 4 && (Je = 2),
          Eo === null ? (Eo = [o]) : Eo.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = n0(o, u, t);
              nm(o, f);
              break e;
            case 1:
              l = u;
              var v = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (or === null || !or.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = r0(o, l, t);
                nm(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      b0(n);
    } catch (S) {
      (t = S), Ye === n && n !== null && (Ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function w0() {
  var e = Ul.current;
  return (Ul.current = Al), e === null ? Al : e;
}
function bf() {
  (Je === 0 || Je === 3 || Je === 2) && (Je = 4),
    rt === null || (!(Dr & 268435455) && !(wu & 268435455)) || Yn(rt, st);
}
function Ll(e, t) {
  var n = ye;
  ye |= 2;
  var r = w0();
  (rt !== e || st !== t) && ((On = null), kr(e, t));
  do
    try {
      dE();
      break;
    } catch (i) {
      S0(e, i);
    }
  while (1);
  if ((rf(), (ye = n), (Ul.current = r), Ye !== null)) throw Error(K(261));
  return (rt = null), (st = 0), Je;
}
function dE() {
  for (; Ye !== null; ) E0(Ye);
}
function fE() {
  for (; Ye !== null && !LS(); ) E0(Ye);
}
function E0(e) {
  var t = F0(e.alternate, e, Rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? b0(e) : (Ye = t),
    (gf.current = null);
}
function b0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = oE(n, t)), n !== null)) {
        (n.flags &= 32767), (Ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Je = 6), (Ye = null);
        return;
      }
    } else if (((n = iE(n, t, Rt)), n !== null)) {
      Ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ye = t;
      return;
    }
    Ye = t = e;
  } while (t !== null);
  Je === 0 && (Je = 5);
}
function br(e, t, n) {
  var r = Fe,
    i = Kt.transition;
  try {
    (Kt.transition = null), (Fe = 1), pE(e, t, n, r);
  } finally {
    (Kt.transition = i), (Fe = r);
  }
  return null;
}
function pE(e, t, n, r) {
  do gi();
  while (Jn !== null);
  if (ye & 6) throw Error(K(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(K(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (GS(e, o),
    e === rt && ((Ye = rt = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ta ||
      ((Ta = !0),
      j0(yl, function () {
        return gi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Kt.transition), (Kt.transition = null);
    var a = Fe;
    Fe = 1;
    var l = ye;
    (ye |= 4),
      (gf.current = null),
      lE(e, n),
      v0(n, e),
      Aw(Tc),
      (wl = !!Uc),
      (Tc = Uc = null),
      (e.current = n),
      uE(n),
      NS(),
      (ye = l),
      (Fe = a),
      (Kt.transition = o);
  } else e.current = n;
  if (
    (Ta && ((Ta = !1), (Jn = e), (Dl = i)),
    (o = e.pendingLanes),
    o === 0 && (or = null),
    zS(n.stateNode),
    Pt(e, Ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Tl) throw ((Tl = !1), (e = td), (td = null), e);
  return (
    Dl & 1 && e.tag !== 0 && gi(),
    (o = e.pendingLanes),
    o & 1 ? (e === nd ? bo++ : ((bo = 0), (nd = e))) : (bo = 0),
    Sr(),
    null
  );
}
function gi() {
  if (Jn !== null) {
    var e = tg(Dl),
      t = Kt.transition,
      n = Fe;
    try {
      if (((Kt.transition = null), (Fe = 16 > e ? 16 : e), Jn === null))
        var r = !1;
      else {
        if (((e = Jn), (Jn = null), (Dl = 0), ye & 6)) throw Error(K(331));
        var i = ye;
        for (ye |= 4, X = e.current; X !== null; ) {
          var o = X,
            a = o.child;
          if (X.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (X = s; X !== null; ) {
                  var c = X;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wo(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (X = d);
                  else
                    for (; X !== null; ) {
                      c = X;
                      var p = c.sibling,
                        m = c.return;
                      if ((p0(c), c === s)) {
                        X = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = m), (X = p);
                        break;
                      }
                      X = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var h = y.child;
                if (h !== null) {
                  y.child = null;
                  do {
                    var E = h.sibling;
                    (h.sibling = null), (h = E);
                  } while (h !== null);
                }
              }
              X = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (X = a);
          else
            e: for (; X !== null; ) {
              if (((o = X), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (X = f);
                break e;
              }
              X = o.return;
            }
        }
        var v = e.current;
        for (X = v; X !== null; ) {
          a = X;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (X = g);
          else
            e: for (a = v; X !== null; ) {
              if (((l = X), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Su(9, l);
                  }
                } catch (S) {
                  He(l, l.return, S);
                }
              if (l === a) {
                X = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (X = w);
                break e;
              }
              X = l.return;
            }
        }
        if (
          ((ye = i), Sr(), wn && typeof wn.onPostCommitFiberRoot == "function")
        )
          try {
            wn.onPostCommitFiberRoot(du, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Fe = n), (Kt.transition = t);
    }
  }
  return !1;
}
function Fm(e, t, n) {
  (t = Oi(n, t)),
    (t = n0(e, t, 1)),
    (e = ir(e, t, 1)),
    (t = Et()),
    e !== null && (aa(e, 1, t), Pt(e, t));
}
function He(e, t, n) {
  if (e.tag === 3) Fm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (or === null || !or.has(r)))
        ) {
          (e = Oi(n, e)),
            (e = r0(t, e, 1)),
            (t = ir(t, e, 1)),
            (e = Et()),
            t !== null && (aa(t, 1, e), Pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    rt === e &&
      (st & n) === n &&
      (Je === 4 || (Je === 3 && (st & 130023424) === st && 500 > Ge() - Sf)
        ? kr(e, 0)
        : (yf |= n)),
    Pt(e, t);
}
function x0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ja), (ja <<= 1), !(ja & 130023424) && (ja = 4194304))
      : (t = 1));
  var n = Et();
  (e = Nn(e, t)), e !== null && (aa(e, t, n), Pt(e, n));
}
function hE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), x0(e, n);
}
function vE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(K(314));
  }
  r !== null && r.delete(t), x0(e, n);
}
var F0;
F0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ct.current) jt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (jt = !1), rE(e, t, n);
      jt = !!(e.flags & 131072);
    }
  else (jt = !1), Le && t.flags & 1048576 && Og(t, Ol, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      nl(e, t), (e = t.pendingProps);
      var i = xi(t, St.current);
      vi(t, n), (i = ff(null, t, r, e, i, n));
      var o = pf();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ot(r) ? ((o = !0), jl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            lf(t),
            (i.updater = gu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Hc(t, r, e, n),
            (t = Gc(null, t, r, !0, o, n)))
          : ((t.tag = 0), Le && o && Jd(t), wt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (nl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = yE(r)),
          (e = tn(r, e)),
          i)
        ) {
          case 0:
            t = Qc(null, t, r, e, n);
            break e;
          case 1:
            t = mm(null, t, r, e, n);
            break e;
          case 11:
            t = fm(null, t, r, e, n);
            break e;
          case 14:
            t = pm(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(K(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        Qc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        mm(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((l0(t), e === null)) throw Error(K(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          kg(e, t),
          Ml(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Oi(Error(K(423)), t)), (t = hm(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Oi(Error(K(424)), t)), (t = hm(e, t, r, n, i));
            break e;
          } else
            for (
              At = rr(t.stateNode.containerInfo.firstChild),
                Ut = t,
                Le = !0,
                on = null,
                n = Tg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Fi(), r === i)) {
            t = $n(e, t, n);
            break e;
          }
          wt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dg(t),
        e === null && zc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Dc(r, i) ? (a = null) : o !== null && Dc(r, o) && (t.flags |= 32),
        a0(e, t),
        wt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && zc(t), null;
    case 13:
      return u0(e, t, n);
    case 4:
      return (
        uf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ji(t, null, r, n)) : wt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        fm(e, t, r, i, n)
      );
    case 7:
      return wt(e, t, t.pendingProps, n), t.child;
    case 8:
      return wt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return wt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          Ie(Pl, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (sn(o.value, a)) {
            if (o.children === i.children && !Ct.current) {
              t = $n(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = An(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Bc(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(K(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Bc(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        wt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        vi(t, n),
        (i = qt(i)),
        (r = r(i)),
        (t.flags |= 1),
        wt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = tn(r, t.pendingProps)),
        (i = tn(r.type, i)),
        pm(e, t, r, i, n)
      );
    case 15:
      return i0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tn(r, i)),
        nl(e, t),
        (t.tag = 1),
        Ot(r) ? ((e = !0), jl(t)) : (e = !1),
        vi(t, n),
        Ag(t, r, i),
        Hc(t, r, i, n),
        Gc(null, t, r, !0, e, n)
      );
    case 19:
      return s0(e, t, n);
    case 22:
      return o0(e, t, n);
  }
  throw Error(K(156, t.tag));
};
function j0(e, t) {
  return Zv(e, t);
}
function gE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Gt(e, t, n, r) {
  return new gE(e, t, n, r);
}
function xf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yE(e) {
  if (typeof e == "function") return xf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zd)) return 11;
    if (e === Bd) return 14;
  }
  return 2;
}
function lr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ol(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) xf(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Zr:
        return Rr(n.children, i, o, t);
      case _d:
        (a = 8), (i |= 8);
        break;
      case mc:
        return (
          (e = Gt(12, n, t, i | 2)), (e.elementType = mc), (e.lanes = o), e
        );
      case hc:
        return (e = Gt(13, n, t, i)), (e.elementType = hc), (e.lanes = o), e;
      case vc:
        return (e = Gt(19, n, t, i)), (e.elementType = vc), (e.lanes = o), e;
      case Uv:
        return Eu(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rv:
              a = 10;
              break e;
            case Av:
              a = 9;
              break e;
            case zd:
              a = 11;
              break e;
            case Bd:
              a = 14;
              break e;
            case Gn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(K(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Gt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rr(e, t, n, r) {
  return (e = Gt(7, e, r, t)), (e.lanes = n), e;
}
function Eu(e, t, n, r) {
  return (
    (e = Gt(22, e, r, t)),
    (e.elementType = Uv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $s(e, t, n) {
  return (e = Gt(6, e, null, t)), (e.lanes = n), e;
}
function _s(e, t, n) {
  return (
    (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function SE(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ws(0)),
    (this.expirationTimes = ws(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ws(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ff(e, t, n, r, i, o, a, l, u) {
  return (
    (e = new SE(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Gt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    lf(o),
    e
  );
}
function wE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function C0(e) {
  if (!e) return fr;
  e = e._reactInternals;
  e: {
    if (Br(e) !== e || e.tag !== 1) throw Error(K(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(K(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ot(n)) return jg(e, n, t);
  }
  return t;
}
function O0(e, t, n, r, i, o, a, l, u) {
  return (
    (e = Ff(n, r, !0, e, i, o, a, l, u)),
    (e.context = C0(null)),
    (n = e.current),
    (r = Et()),
    (i = ar(n)),
    (o = An(r, i)),
    (o.callback = t ?? null),
    ir(n, o, i),
    (e.current.lanes = i),
    aa(e, i, r),
    Pt(e, r),
    e
  );
}
function bu(e, t, n, r) {
  var i = t.current,
    o = Et(),
    a = ar(i);
  return (
    (n = C0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = An(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ir(i, t, a)),
    e !== null && (un(e, i, a, o), Ja(e, i, a)),
    a
  );
}
function Nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function jf(e, t) {
  jm(e, t), (e = e.alternate) && jm(e, t);
}
function EE() {
  return null;
}
var P0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Cf(e) {
  this._internalRoot = e;
}
xu.prototype.render = Cf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(K(409));
  bu(e, t, null, null);
};
xu.prototype.unmount = Cf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lr(function () {
      bu(null, e, null, null);
    }),
      (t[Ln] = null);
  }
};
function xu(e) {
  this._internalRoot = e;
}
xu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ig();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++);
    qn.splice(n, 0, e), n === 0 && ag(e);
  }
};
function Of(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cm() {}
function bE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Nl(a);
        o.call(s);
      };
    }
    var a = O0(t, r, e, 0, null, !1, !1, "", Cm);
    return (
      (e._reactRootContainer = a),
      (e[Ln] = a.current),
      Lo(e.nodeType === 8 ? e.parentNode : e),
      Lr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = Nl(u);
      l.call(s);
    };
  }
  var u = Ff(e, 0, !1, null, null, !1, !1, "", Cm);
  return (
    (e._reactRootContainer = u),
    (e[Ln] = u.current),
    Lo(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      bu(t, u, n, r);
    }),
    u
  );
}
function ju(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Nl(a);
        l.call(u);
      };
    }
    bu(t, a, e, i);
  } else a = bE(n, t, e, i, r);
  return Nl(a);
}
ng = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = uo(t.pendingLanes);
        n !== 0 &&
          (Wd(t, n | 1), Pt(t, Ge()), !(ye & 6) && ((Pi = Ge() + 500), Sr()));
      }
      break;
    case 13:
      Lr(function () {
        var r = Nn(e, 1);
        if (r !== null) {
          var i = Et();
          un(r, e, 1, i);
        }
      }),
        jf(e, 1);
  }
};
Qd = function (e) {
  if (e.tag === 13) {
    var t = Nn(e, 134217728);
    if (t !== null) {
      var n = Et();
      un(t, e, 134217728, n);
    }
    jf(e, 134217728);
  }
};
rg = function (e) {
  if (e.tag === 13) {
    var t = ar(e),
      n = Nn(e, t);
    if (n !== null) {
      var r = Et();
      un(n, e, t, r);
    }
    jf(e, t);
  }
};
ig = function () {
  return Fe;
};
og = function (e, t) {
  var n = Fe;
  try {
    return (Fe = e), t();
  } finally {
    Fe = n;
  }
};
Cc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = hu(r);
            if (!i) throw Error(K(90));
            Dv(r), Sc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nv(e, n);
      break;
    case "select":
      (t = n.value), t != null && fi(e, !!n.multiple, t, !1);
  }
};
Wv = wf;
Qv = Lr;
var xE = { usingClientEntryPoint: !1, Events: [ua, ti, hu, Vv, Hv, wf] },
  eo = {
    findFiberByHostInstance: jr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  FE = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || EE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Da.isDisabled && Da.supportsFiber)
    try {
      (du = Da.inject(FE)), (wn = Da);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xE;
$t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Of(t)) throw Error(K(200));
  return wE(e, t, null, n);
};
$t.createRoot = function (e, t) {
  if (!Of(e)) throw Error(K(299));
  var n = !1,
    r = "",
    i = P0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ff(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ln] = t.current),
    Lo(e.nodeType === 8 ? e.parentNode : e),
    new Cf(t)
  );
};
$t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(K(188))
      : ((e = Object.keys(e).join(",")), Error(K(268, e)));
  return (e = qv(t)), (e = e === null ? null : e.stateNode), e;
};
$t.flushSync = function (e) {
  return Lr(e);
};
$t.hydrate = function (e, t, n) {
  if (!Fu(t)) throw Error(K(200));
  return ju(null, e, t, !0, n);
};
$t.hydrateRoot = function (e, t, n) {
  if (!Of(e)) throw Error(K(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = P0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = O0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Ln] = t.current),
    Lo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new xu(t);
};
$t.render = function (e, t, n) {
  if (!Fu(t)) throw Error(K(200));
  return ju(null, e, t, !1, n);
};
$t.unmountComponentAtNode = function (e) {
  if (!Fu(e)) throw Error(K(40));
  return e._reactRootContainer
    ? (Lr(function () {
        ju(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ln] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = wf;
$t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fu(n)) throw Error(K(200));
  if (e == null || e._reactInternals === void 0) throw Error(K(38));
  return ju(e, t, n, !1, r);
};
$t.version = "18.2.0-next-9e3b772b8-20220608";
function I0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0);
    } catch (e) {
      console.error(e);
    }
}
I0(), (Ov.exports = $t);
var Cu = Ov.exports,
  Om = Cu;
(fc.createRoot = Om.createRoot), (fc.hydrateRoot = Om.hydrateRoot);
function Ou(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var jE = {};
Ou(jE, "ErrorBoundary", () => If);
var CE = {};
Ou(CE, "ErrorBoundaryContext", () => Pf);
const Pf = O.createContext(null),
  zs = { didCatch: !1, error: null };
class If extends O.Component {
  constructor() {
    super(...arguments);
    ms(this, "state", zs);
    ms(this, "resetErrorBoundary", (...n) => {
      var i, o;
      const { error: r } = this.state;
      r !== null &&
        ((o = (i = this.props).onReset) == null ||
          o.call(i, { args: n, reason: "imperative-api" }),
        this.setState(zs));
    });
  }
  static getDerivedStateFromError(n) {
    return { didCatch: !0, error: n };
  }
  componentDidCatch(n, r) {
    var i, o;
    (o = (i = this.props).onError) == null || o.call(i, n, r);
  }
  componentDidUpdate(n, r) {
    var a, l;
    const { didCatch: i } = this.state,
      { resetKeys: o } = this.props;
    i &&
      r.error !== null &&
      OE(n.resetKeys, o) &&
      ((l = (a = this.props).onReset) == null ||
        l.call(a, { next: o, prev: n.resetKeys, reason: "keys" }),
      this.setState(zs));
  }
  render() {
    const {
        children: n,
        fallbackRender: r,
        FallbackComponent: i,
        fallback: o,
      } = this.props,
      { didCatch: a, error: l } = this.state;
    let u = n;
    if (a) {
      const s = { error: l, resetErrorBoundary: this.resetErrorBoundary };
      if (O.isValidElement(o)) u = o;
      else if (typeof r == "function") u = r(s);
      else if (i) u = O.createElement(i, s);
      else
        throw new Error(
          "react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
        );
    }
    return O.createElement(
      Pf.Provider,
      {
        value: {
          didCatch: a,
          error: l,
          resetErrorBoundary: this.resetErrorBoundary,
        },
      },
      u
    );
  }
}
function OE(e = [], t = []) {
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
var PE = {};
Ou(PE, "useErrorBoundary", () => ME);
function IE(e) {
  if (
    e == null ||
    typeof e.didCatch != "boolean" ||
    typeof e.resetErrorBoundary != "function"
  )
    throw new Error("ErrorBoundaryContext not found");
  return !0;
}
function ME() {
  const e = O.useContext(Pf);
  IE(e);
  const [t, n] = O.useState({ error: null, hasError: !1 }),
    r = O.useMemo(
      () => ({
        resetBoundary: () => {
          e == null || e.resetErrorBoundary(), n({ error: null, hasError: !1 });
        },
        showBoundary: (i) => n({ error: i, hasError: !0 }),
      }),
      [e == null ? void 0 : e.resetErrorBoundary]
    );
  if (t.hasError) throw t.error;
  return r;
}
var kE = {};
Ou(kE, "withErrorBoundary", () => RE);
function RE(e, t) {
  const n = O.forwardRef((i, o) =>
      O.createElement(If, t, O.createElement(e, { ...i, ref: o }))
    ),
    r = e.displayName || e.name || "Unknown";
  return (n.displayName = `withErrorBoundary(${r})`), n;
}
function AE() {
  return F.jsx("svg", {
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: F.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 1.83358C0 1.0972 0.596954 0.500244 1.33333 0.500244H22.6667C23.403 0.500244 24 1.0972 24 1.83358C24 2.56996 23.403 3.16691 22.6667 3.16691H1.33333C0.596954 3.16691 0 2.56996 0 1.83358ZM0 9.83358C0 9.0972 0.596954 8.50024 1.33333 8.50024H22.6667C23.403 8.50024 24 9.0972 24 9.83358C24 10.57 23.403 11.1669 22.6667 11.1669H1.33333C0.596954 11.1669 0 10.57 0 9.83358ZM0 17.8336C0 17.0972 0.596954 16.5002 1.33333 16.5002H22.6667C23.403 16.5002 24 17.0972 24 17.8336C24 18.57 23.403 19.1669 22.6667 19.1669H1.33333C0.596954 19.1669 0 18.57 0 17.8336Z",
      fill: "white",
    }),
  });
}
function Li() {
  return F.jsx("svg", {
    width: "11",
    height: "20",
    viewBox: "0 0 11 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: F.jsx("path", {
      d: "M10.6095 1.05721C11.1302 1.57791 11.1302 2.42213 10.6095 2.94283L3.55228 10L10.6095 17.0572C11.1302 17.5779 11.1302 18.4221 10.6095 18.9428C10.0888 19.4635 9.24456 19.4635 8.72386 18.9428L0.723857 10.9428C0.203158 10.4221 0.203158 9.57791 0.723858 9.05721L8.72386 1.05721C9.24456 0.536512 10.0888 0.536512 10.6095 1.05721Z",
      fill: "white",
    }),
  });
}
function UE() {
  return F.jsxs("svg", {
    className: "feather feather-coffee",
    fill: "none",
    height: "125",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    width: "125",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      F.jsx("path", { d: "M18 8h1a4 4 0 0 1 0 8h-1" }),
      F.jsx("path", { d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }),
      F.jsx("line", { x1: "6", x2: "6", y1: "1", y2: "4" }),
      F.jsx("line", { x1: "10", x2: "10", y1: "1", y2: "4" }),
      F.jsx("line", { x1: "14", x2: "14", y1: "1", y2: "4" }),
    ],
  });
}
function od({ letter: e }) {
  return F.jsxs("svg", {
    width: "33",
    height: "33",
    viewBox: "0 0 33 33",
    fill: "",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      F.jsx("circle", { cx: "16.5", cy: "16.5", r: "16.5", fill: "#D9D9D9" }),
      F.jsx("text", {
        x: "50%",
        y: "50%",
        textAnchor: "middle",
        dominantBaseline: "middle",
        fontSize: "20",
        fill: "black",
        children: e,
      }),
    ],
  });
}
function TE() {
  return F.jsxs("svg", {
    className: "feather feather-coffee",
    fill: "none",
    height: "50",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    width: "50",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      F.jsx("path", { d: "M18 8h1a4 4 0 0 1 0 8h-1" }),
      F.jsx("path", { d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }),
      F.jsx("line", { x1: "6", x2: "6", y1: "1", y2: "4" }),
      F.jsx("line", { x1: "10", x2: "10", y1: "1", y2: "4" }),
      F.jsx("line", { x1: "14", x2: "14", y1: "1", y2: "4" }),
    ],
  });
}
function DE() {
  return F.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    width: "32",
    height: "32",
    children: [
      F.jsx("rect", { fill: "none", height: "128", width: "128" }),
      F.jsx("circle", {
        cx: "52",
        cy: "76",
        fill: "none",
        r: "36",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      F.jsx("line", {
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
        x1: "77",
        x2: "108",
        y1: "50",
        y2: "19",
      }),
      F.jsx("polyline", {
        fill: "none",
        points: "64 19 108 19 108 50",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
}
function LE() {
  return F.jsxs("svg", {
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    children: [
      F.jsx("rect", { fill: "none", height: "256", width: "256" }),
      F.jsx("path", {
        d: "M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.1,80.1,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.1,64.1,0,0,1,64,96Z",
      }),
    ],
  });
}
function NE() {
  return F.jsx("svg", {
    width: "18",
    height: "17",
    viewBox: "0 0 18 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: F.jsx("path", {
      d: "M9.00002 0.425049C4.31312 0.425049 0.500023 3.85678 0.500023 8.07505C0.500023 9.5498 0.966673 10.9781 1.85096 12.2128C1.68351 14.065 1.23471 15.44 0.583039 16.0914C0.496906 16.1775 0.475373 16.3093 0.529773 16.4181C0.578223 16.5153 0.677106 16.575 0.783356 16.575C0.796389 16.575 0.809706 16.5742 0.823023 16.5722C0.937773 16.5561 3.60337 16.1721 5.53117 15.0598C6.62625 15.5015 7.79245 15.725 9.00002 15.725C13.6869 15.725 17.5 12.2933 17.5 8.07505C17.5 3.85678 13.6869 0.425049 9.00002 0.425049Z",
      fill: "white",
    }),
  });
}
var M0 = { exports: {} },
  je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var it = typeof Symbol == "function" && Symbol.for,
  Mf = it ? Symbol.for("react.element") : 60103,
  kf = it ? Symbol.for("react.portal") : 60106,
  Pu = it ? Symbol.for("react.fragment") : 60107,
  Iu = it ? Symbol.for("react.strict_mode") : 60108,
  Mu = it ? Symbol.for("react.profiler") : 60114,
  ku = it ? Symbol.for("react.provider") : 60109,
  Ru = it ? Symbol.for("react.context") : 60110,
  Rf = it ? Symbol.for("react.async_mode") : 60111,
  Au = it ? Symbol.for("react.concurrent_mode") : 60111,
  Uu = it ? Symbol.for("react.forward_ref") : 60112,
  Tu = it ? Symbol.for("react.suspense") : 60113,
  $E = it ? Symbol.for("react.suspense_list") : 60120,
  Du = it ? Symbol.for("react.memo") : 60115,
  Lu = it ? Symbol.for("react.lazy") : 60116,
  _E = it ? Symbol.for("react.block") : 60121,
  zE = it ? Symbol.for("react.fundamental") : 60117,
  BE = it ? Symbol.for("react.responder") : 60118,
  VE = it ? Symbol.for("react.scope") : 60119;
function zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Mf:
        switch (((e = e.type), e)) {
          case Rf:
          case Au:
          case Pu:
          case Mu:
          case Iu:
          case Tu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ru:
              case Uu:
              case Lu:
              case Du:
              case ku:
                return e;
              default:
                return t;
            }
        }
      case kf:
        return t;
    }
  }
}
function k0(e) {
  return zt(e) === Au;
}
je.AsyncMode = Rf;
je.ConcurrentMode = Au;
je.ContextConsumer = Ru;
je.ContextProvider = ku;
je.Element = Mf;
je.ForwardRef = Uu;
je.Fragment = Pu;
je.Lazy = Lu;
je.Memo = Du;
je.Portal = kf;
je.Profiler = Mu;
je.StrictMode = Iu;
je.Suspense = Tu;
je.isAsyncMode = function (e) {
  return k0(e) || zt(e) === Rf;
};
je.isConcurrentMode = k0;
je.isContextConsumer = function (e) {
  return zt(e) === Ru;
};
je.isContextProvider = function (e) {
  return zt(e) === ku;
};
je.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mf;
};
je.isForwardRef = function (e) {
  return zt(e) === Uu;
};
je.isFragment = function (e) {
  return zt(e) === Pu;
};
je.isLazy = function (e) {
  return zt(e) === Lu;
};
je.isMemo = function (e) {
  return zt(e) === Du;
};
je.isPortal = function (e) {
  return zt(e) === kf;
};
je.isProfiler = function (e) {
  return zt(e) === Mu;
};
je.isStrictMode = function (e) {
  return zt(e) === Iu;
};
je.isSuspense = function (e) {
  return zt(e) === Tu;
};
je.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Pu ||
    e === Au ||
    e === Mu ||
    e === Iu ||
    e === Tu ||
    e === $E ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Lu ||
        e.$$typeof === Du ||
        e.$$typeof === ku ||
        e.$$typeof === Ru ||
        e.$$typeof === Uu ||
        e.$$typeof === zE ||
        e.$$typeof === BE ||
        e.$$typeof === VE ||
        e.$$typeof === _E))
  );
};
je.typeOf = zt;
M0.exports = je;
var Af = M0.exports;
function HE(e) {
  function t(U, L, D, _, I) {
    for (
      var Z = 0,
        H = 0,
        de = 0,
        re = 0,
        ae,
        Y,
        ge = 0,
        Pe = 0,
        pe,
        Ue = (pe = ae = 0),
        fe = 0,
        Te = 0,
        Bt = 0,
        Ne = 0,
        ot = D.length,
        Ve = ot - 1,
        ft,
        se = "",
        Me = "",
        Hi = "",
        Wi = "",
        Xt;
      fe < ot;

    ) {
      if (
        ((Y = D.charCodeAt(fe)),
        fe === Ve &&
          H + re + de + Z !== 0 &&
          (H !== 0 && (Y = H === 47 ? 10 : 47), (re = de = Z = 0), ot++, Ve++),
        H + re + de + Z === 0)
      ) {
        if (
          fe === Ve &&
          (0 < Te && (se = se.replace(p, "")), 0 < se.trim().length)
        ) {
          switch (Y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += D.charAt(fe);
          }
          Y = 59;
        }
        switch (Y) {
          case 123:
            for (
              se = se.trim(), ae = se.charCodeAt(0), pe = 1, Ne = ++fe;
              fe < ot;

            ) {
              switch ((Y = D.charCodeAt(fe))) {
                case 123:
                  pe++;
                  break;
                case 125:
                  pe--;
                  break;
                case 47:
                  switch ((Y = D.charCodeAt(fe + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Ue = fe + 1; Ue < Ve; ++Ue)
                          switch (D.charCodeAt(Ue)) {
                            case 47:
                              if (
                                Y === 42 &&
                                D.charCodeAt(Ue - 1) === 42 &&
                                fe + 2 !== Ue
                              ) {
                                fe = Ue + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Y === 47) {
                                fe = Ue + 1;
                                break e;
                              }
                          }
                        fe = Ue;
                      }
                  }
                  break;
                case 91:
                  Y++;
                case 40:
                  Y++;
                case 34:
                case 39:
                  for (; fe++ < Ve && D.charCodeAt(fe) !== Y; );
              }
              if (pe === 0) break;
              fe++;
            }
            switch (
              ((pe = D.substring(Ne, fe)),
              ae === 0 && (ae = (se = se.replace(d, "").trim()).charCodeAt(0)),
              ae)
            ) {
              case 64:
                switch (
                  (0 < Te && (se = se.replace(p, "")),
                  (Y = se.charCodeAt(1)),
                  Y)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Te = L;
                    break;
                  default:
                    Te = W;
                }
                if (
                  ((pe = t(L, Te, pe, Y, I + 1)),
                  (Ne = pe.length),
                  0 < k &&
                    ((Te = n(W, se, Bt)),
                    (Xt = l(3, pe, Te, L, A, R, Ne, Y, I, _)),
                    (se = Te.join("")),
                    Xt !== void 0 &&
                      (Ne = (pe = Xt.trim()).length) === 0 &&
                      ((Y = 0), (pe = ""))),
                  0 < Ne)
                )
                  switch (Y) {
                    case 115:
                      se = se.replace(b, a);
                    case 100:
                    case 109:
                    case 45:
                      pe = se + "{" + pe + "}";
                      break;
                    case 107:
                      (se = se.replace(v, "$1 $2")),
                        (pe = se + "{" + pe + "}"),
                        (pe =
                          N === 1 || (N === 2 && o("@" + pe, 3))
                            ? "@-webkit-" + pe + "@" + pe
                            : "@" + pe);
                      break;
                    default:
                      (pe = se + pe), _ === 112 && (pe = ((Me += pe), ""));
                  }
                else pe = "";
                break;
              default:
                pe = t(L, n(L, se, Bt), pe, _, I + 1);
            }
            (Hi += pe),
              (pe = Bt = Te = Ue = ae = 0),
              (se = ""),
              (Y = D.charCodeAt(++fe));
            break;
          case 125:
          case 59:
            if (
              ((se = (0 < Te ? se.replace(p, "") : se).trim()),
              1 < (Ne = se.length))
            )
              switch (
                (Ue === 0 &&
                  ((ae = se.charCodeAt(0)),
                  ae === 45 || (96 < ae && 123 > ae)) &&
                  (Ne = (se = se.replace(" ", ":")).length),
                0 < k &&
                  (Xt = l(1, se, L, U, A, R, Me.length, _, I, _)) !== void 0 &&
                  (Ne = (se = Xt.trim()).length) === 0 &&
                  (se = "\0\0"),
                (ae = se.charCodeAt(0)),
                (Y = se.charCodeAt(1)),
                ae)
              ) {
                case 0:
                  break;
                case 64:
                  if (Y === 105 || Y === 99) {
                    Wi += se + D.charAt(fe);
                    break;
                  }
                default:
                  se.charCodeAt(Ne - 1) !== 58 &&
                    (Me += i(se, ae, Y, se.charCodeAt(2)));
              }
            (Bt = Te = Ue = ae = 0), (se = ""), (Y = D.charCodeAt(++fe));
        }
      }
      switch (Y) {
        case 13:
        case 10:
          H === 47
            ? (H = 0)
            : 1 + ae === 0 &&
              _ !== 107 &&
              0 < se.length &&
              ((Te = 1), (se += "\0")),
            0 < k * B && l(0, se, L, U, A, R, Me.length, _, I, _),
            (R = 1),
            A++;
          break;
        case 59:
        case 125:
          if (H + re + de + Z === 0) {
            R++;
            break;
          }
        default:
          switch ((R++, (ft = D.charAt(fe)), Y)) {
            case 9:
            case 32:
              if (re + Z + H === 0)
                switch (ge) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ft = "";
                    break;
                  default:
                    Y !== 32 && (ft = " ");
                }
              break;
            case 0:
              ft = "\\0";
              break;
            case 12:
              ft = "\\f";
              break;
            case 11:
              ft = "\\v";
              break;
            case 38:
              re + H + Z === 0 && ((Te = Bt = 1), (ft = "\f" + ft));
              break;
            case 108:
              if (re + H + Z + T === 0 && 0 < Ue)
                switch (fe - Ue) {
                  case 2:
                    ge === 112 && D.charCodeAt(fe - 3) === 58 && (T = ge);
                  case 8:
                    Pe === 111 && (T = Pe);
                }
              break;
            case 58:
              re + H + Z === 0 && (Ue = fe);
              break;
            case 44:
              H + de + re + Z === 0 && ((Te = 1), (ft += "\r"));
              break;
            case 34:
            case 39:
              H === 0 && (re = re === Y ? 0 : re === 0 ? Y : re);
              break;
            case 91:
              re + H + de === 0 && Z++;
              break;
            case 93:
              re + H + de === 0 && Z--;
              break;
            case 41:
              re + H + Z === 0 && de--;
              break;
            case 40:
              if (re + H + Z === 0) {
                if (ae === 0)
                  switch (2 * ge + 3 * Pe) {
                    case 533:
                      break;
                    default:
                      ae = 1;
                  }
                de++;
              }
              break;
            case 64:
              H + de + re + Z + Ue + pe === 0 && (pe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + Z + de))
                switch (H) {
                  case 0:
                    switch (2 * Y + 3 * D.charCodeAt(fe + 1)) {
                      case 235:
                        H = 47;
                        break;
                      case 220:
                        (Ne = fe), (H = 42);
                    }
                    break;
                  case 42:
                    Y === 47 &&
                      ge === 42 &&
                      Ne + 2 !== fe &&
                      (D.charCodeAt(Ne + 2) === 33 &&
                        (Me += D.substring(Ne, fe + 1)),
                      (ft = ""),
                      (H = 0));
                }
          }
          H === 0 && (se += ft);
      }
      (Pe = ge), (ge = Y), fe++;
    }
    if (((Ne = Me.length), 0 < Ne)) {
      if (
        ((Te = L),
        0 < k &&
          ((Xt = l(2, Me, Te, U, A, R, Ne, _, I, _)),
          Xt !== void 0 && (Me = Xt).length === 0))
      )
        return Wi + Me + Hi;
      if (((Me = Te.join(",") + "{" + Me + "}"), N * T !== 0)) {
        switch ((N !== 2 || o(Me, 2) || (T = 0), T)) {
          case 111:
            Me = Me.replace(w, ":-moz-$1") + Me;
            break;
          case 112:
            Me =
              Me.replace(g, "::-webkit-input-$1") +
              Me.replace(g, "::-moz-$1") +
              Me.replace(g, ":-ms-input-$1") +
              Me;
        }
        T = 0;
      }
    }
    return Wi + Me + Hi;
  }
  function n(U, L, D) {
    var _ = L.trim().split(E);
    L = _;
    var I = _.length,
      Z = U.length;
    switch (Z) {
      case 0:
      case 1:
        var H = 0;
        for (U = Z === 0 ? "" : U[0] + " "; H < I; ++H)
          L[H] = r(U, L[H], D).trim();
        break;
      default:
        var de = (H = 0);
        for (L = []; H < I; ++H)
          for (var re = 0; re < Z; ++re)
            L[de++] = r(U[re] + " ", _[H], D).trim();
    }
    return L;
  }
  function r(U, L, D) {
    var _ = L.charCodeAt(0);
    switch ((33 > _ && (_ = (L = L.trim()).charCodeAt(0)), _)) {
      case 38:
        return L.replace(f, "$1" + U.trim());
      case 58:
        return U.trim() + L.replace(f, "$1" + U.trim());
      default:
        if (0 < 1 * D && 0 < L.indexOf("\f"))
          return L.replace(f, (U.charCodeAt(0) === 58 ? "" : "$1") + U.trim());
    }
    return U + L;
  }
  function i(U, L, D, _) {
    var I = U + ";",
      Z = 2 * L + 3 * D + 4 * _;
    if (Z === 944) {
      U = I.indexOf(":", 9) + 1;
      var H = I.substring(U, I.length - 1).trim();
      return (
        (H = I.substring(0, U).trim() + H + ";"),
        N === 1 || (N === 2 && o(H, 1)) ? "-webkit-" + H + H : H
      );
    }
    if (N === 0 || (N === 2 && !o(I, 1))) return I;
    switch (Z) {
      case 1015:
        return I.charCodeAt(10) === 97 ? "-webkit-" + I + I : I;
      case 951:
        return I.charCodeAt(3) === 116 ? "-webkit-" + I + I : I;
      case 963:
        return I.charCodeAt(5) === 110 ? "-webkit-" + I + I : I;
      case 1009:
        if (I.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + I + I;
      case 978:
        return "-webkit-" + I + "-moz-" + I + I;
      case 1019:
      case 983:
        return "-webkit-" + I + "-moz-" + I + "-ms-" + I + I;
      case 883:
        if (I.charCodeAt(8) === 45) return "-webkit-" + I + I;
        if (0 < I.indexOf("image-set(", 11))
          return I.replace(M, "$1-webkit-$2") + I;
        break;
      case 932:
        if (I.charCodeAt(4) === 45)
          switch (I.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                I.replace("-grow", "") +
                "-webkit-" +
                I +
                "-ms-" +
                I.replace("grow", "positive") +
                I
              );
            case 115:
              return (
                "-webkit-" + I + "-ms-" + I.replace("shrink", "negative") + I
              );
            case 98:
              return (
                "-webkit-" +
                I +
                "-ms-" +
                I.replace("basis", "preferred-size") +
                I
              );
          }
        return "-webkit-" + I + "-ms-" + I + I;
      case 964:
        return "-webkit-" + I + "-ms-flex-" + I + I;
      case 1023:
        if (I.charCodeAt(8) !== 99) break;
        return (
          (H = I.substring(I.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + H + "-webkit-" + I + "-ms-flex-pack" + H + I
        );
      case 1005:
        return y.test(I)
          ? I.replace(m, ":-webkit-") + I.replace(m, ":-moz-") + I
          : I;
      case 1e3:
        switch (
          ((H = I.substring(13).trim()),
          (L = H.indexOf("-") + 1),
          H.charCodeAt(0) + H.charCodeAt(L))
        ) {
          case 226:
            H = I.replace(S, "tb");
            break;
          case 232:
            H = I.replace(S, "tb-rl");
            break;
          case 220:
            H = I.replace(S, "lr");
            break;
          default:
            return I;
        }
        return "-webkit-" + I + "-ms-" + H + I;
      case 1017:
        if (I.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((L = (I = U).length - 10),
          (H = (I.charCodeAt(L) === 33 ? I.substring(0, L) : I)
            .substring(U.indexOf(":", 7) + 1)
            .trim()),
          (Z = H.charCodeAt(0) + (H.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > H.charCodeAt(8)) break;
          case 115:
            I = I.replace(H, "-webkit-" + H) + ";" + I;
            break;
          case 207:
          case 102:
            I =
              I.replace(H, "-webkit-" + (102 < Z ? "inline-" : "") + "box") +
              ";" +
              I.replace(H, "-webkit-" + H) +
              ";" +
              I.replace(H, "-ms-" + H + "box") +
              ";" +
              I;
        }
        return I + ";";
      case 938:
        if (I.charCodeAt(5) === 45)
          switch (I.charCodeAt(6)) {
            case 105:
              return (
                (H = I.replace("-items", "")),
                "-webkit-" + I + "-webkit-box-" + H + "-ms-flex-" + H + I
              );
            case 115:
              return "-webkit-" + I + "-ms-flex-item-" + I.replace(j, "") + I;
            default:
              return (
                "-webkit-" +
                I +
                "-ms-flex-line-pack" +
                I.replace("align-content", "").replace(j, "") +
                I
              );
          }
        break;
      case 973:
      case 989:
        if (I.charCodeAt(3) !== 45 || I.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (C.test(U) === !0)
          return (H = U.substring(U.indexOf(":") + 1)).charCodeAt(0) === 115
            ? i(U.replace("stretch", "fill-available"), L, D, _).replace(
                ":fill-available",
                ":stretch"
              )
            : I.replace(H, "-webkit-" + H) +
                I.replace(H, "-moz-" + H.replace("fill-", "")) +
                I;
        break;
      case 962:
        if (
          ((I =
            "-webkit-" + I + (I.charCodeAt(5) === 102 ? "-ms-" + I : "") + I),
          D + _ === 211 &&
            I.charCodeAt(13) === 105 &&
            0 < I.indexOf("transform", 10))
        )
          return (
            I.substring(0, I.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") +
            I
          );
    }
    return I;
  }
  function o(U, L) {
    var D = U.indexOf(L === 1 ? ":" : "{"),
      _ = U.substring(0, L !== 3 ? D : 10);
    return (
      (D = U.substring(D + 1, U.length - 1)),
      V(L !== 2 ? _ : _.replace(P, "$1"), D, L)
    );
  }
  function a(U, L) {
    var D = i(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return D !== L + ";"
      ? D.replace(x, " or ($1)").substring(4)
      : "(" + L + ")";
  }
  function l(U, L, D, _, I, Z, H, de, re, ae) {
    for (var Y = 0, ge = L, Pe; Y < k; ++Y)
      switch ((Pe = q[Y].call(c, U, ge, D, _, I, Z, H, de, re, ae))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ge = Pe;
      }
    if (ge !== L) return ge;
  }
  function u(U) {
    switch (U) {
      case void 0:
      case null:
        k = q.length = 0;
        break;
      default:
        if (typeof U == "function") q[k++] = U;
        else if (typeof U == "object")
          for (var L = 0, D = U.length; L < D; ++L) u(U[L]);
        else B = !!U | 0;
    }
    return u;
  }
  function s(U) {
    return (
      (U = U.prefix),
      U !== void 0 &&
        ((V = null),
        U ? (typeof U != "function" ? (N = 1) : ((N = 2), (V = U))) : (N = 0)),
      s
    );
  }
  function c(U, L) {
    var D = U;
    if ((33 > D.charCodeAt(0) && (D = D.trim()), (G = D), (D = [G]), 0 < k)) {
      var _ = l(-1, L, D, D, A, R, 0, 0, 0, 0);
      _ !== void 0 && typeof _ == "string" && (L = _);
    }
    var I = t(W, D, L, 0, 0);
    return (
      0 < k &&
        ((_ = l(-2, I, D, D, A, R, I.length, 0, 0, 0)),
        _ !== void 0 && (I = _)),
      (G = ""),
      (T = 0),
      (R = A = 1),
      I
    );
  }
  var d = /^\0+/g,
    p = /[\0\r\f]/g,
    m = /: */g,
    y = /zoo|gra/,
    h = /([,: ])(transform)/g,
    E = /,\r+?/g,
    f = /([\t\r\n ])*\f?&/g,
    v = /@(k\w+)\s*(\S*)\s*/,
    g = /::(place)/g,
    w = /:(read-only)/g,
    S = /[svh]\w+-[tblr]{2}/,
    b = /\(\s*(.*)\s*\)/g,
    x = /([\s\S]*?);/g,
    j = /-self|flex-/g,
    P = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    C = /stretch|:\s*\w+\-(?:conte|avail)/,
    M = /([^-])(image-set\()/,
    R = 1,
    A = 1,
    T = 0,
    N = 1,
    W = [],
    q = [],
    k = 0,
    V = null,
    B = 0,
    G = "";
  return (c.use = u), (c.set = s), e !== void 0 && s(e), c;
}
var WE = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function R0(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var QE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Pm = R0(function (e) {
    return (
      QE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Uf = Af,
  GE = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  KE = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  qE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  A0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Tf = {};
Tf[Uf.ForwardRef] = qE;
Tf[Uf.Memo] = A0;
function Im(e) {
  return Uf.isMemo(e) ? A0 : Tf[e.$$typeof] || GE;
}
var YE = Object.defineProperty,
  ZE = Object.getOwnPropertyNames,
  Mm = Object.getOwnPropertySymbols,
  XE = Object.getOwnPropertyDescriptor,
  JE = Object.getPrototypeOf,
  km = Object.prototype;
function U0(e, t, n) {
  if (typeof t != "string") {
    if (km) {
      var r = JE(t);
      r && r !== km && U0(e, r, n);
    }
    var i = ZE(t);
    Mm && (i = i.concat(Mm(t)));
    for (var o = Im(e), a = Im(t), l = 0; l < i.length; ++l) {
      var u = i[l];
      if (!KE[u] && !(n && n[u]) && !(a && a[u]) && !(o && o[u])) {
        var s = XE(t, u);
        try {
          YE(e, u, s);
        } catch {}
      }
    }
  }
  return e;
}
var eb = U0;
const tb = Rd(eb);
function gn() {
  return (gn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Rm = function (e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  ad = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !Af.typeOf(e)
    );
  },
  $l = Object.freeze([]),
  ur = Object.freeze({});
function Qo(e) {
  return typeof e == "function";
}
function Am(e) {
  return e.displayName || e.name || "Component";
}
function Df(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ii =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  Lf = typeof window < "u" && "HTMLElement" in window,
  nb = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 &&
          {}.SC_DISABLE_SPEEDY !== "" &&
          {}.SC_DISABLE_SPEEDY !== "false" &&
          {}.SC_DISABLE_SPEEDY)),
  rb = {};
function ca(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var ib = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var i = this.groupSizes, o = i.length, a = o; n >= a; )
            (a <<= 1) < 0 && ca(16, "" + n);
          (this.groupSizes = new Uint32Array(a)),
            this.groupSizes.set(i),
            (this.length = a);
          for (var l = o; l < a; l++) this.groupSizes[l] = 0;
        }
        for (var u = this.indexOfGroup(n + 1), s = 0, c = r.length; s < c; s++)
          this.tag.insertRule(u, r[s]) && (this.groupSizes[n]++, u++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            i = this.indexOfGroup(n),
            o = i + r;
          this.groupSizes[n] = 0;
          for (var a = i; a < o; a++) this.tag.deleteRule(i);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var i = this.groupSizes[n],
            o = this.indexOfGroup(n),
            a = o + i,
            l = o;
          l < a;
          l++
        )
          r +=
            this.tag.getRule(l) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  al = new Map(),
  _l = new Map(),
  xo = 1,
  La = function (e) {
    if (al.has(e)) return al.get(e);
    for (; _l.has(xo); ) xo++;
    var t = xo++;
    return al.set(e, t), _l.set(t, e), t;
  },
  ob = function (e) {
    return _l.get(e);
  },
  ab = function (e, t) {
    t >= xo && (xo = t + 1), al.set(e, t), _l.set(t, e);
  },
  lb = "style[" + Ii + '][data-styled-version="5.3.10"]',
  ub = new RegExp("^" + Ii + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  sb = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, a = i.length; o < a; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  cb = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        i = 0,
        o = n.length;
      i < o;
      i++
    ) {
      var a = n[i].trim();
      if (a) {
        var l = a.match(ub);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            s = l[2];
          u !== 0 && (ab(s, u), sb(e, s, l[3]), e.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  },
  db = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  T0 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (l) {
        for (var u = l.childNodes, s = u.length; s >= 0; s--) {
          var c = u[s];
          if (c && c.nodeType === 1 && c.hasAttribute(Ii)) return c;
        }
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Ii, "active"),
      r.setAttribute("data-styled-version", "5.3.10");
    var a = db();
    return a && r.setAttribute("nonce", a), n.insertBefore(r, o), r;
  },
  fb = (function () {
    function e(n) {
      var r = (this.element = T0(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (i) {
          if (i.sheet) return i.sheet;
          for (var o = document.styleSheets, a = 0, l = o.length; a < l; a++) {
            var u = o[a];
            if (u.ownerNode === i) return u;
          }
          ca(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  pb = (function () {
    function e(n) {
      var r = (this.element = T0(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var i = document.createTextNode(r),
            o = this.nodes[n];
          return this.element.insertBefore(i, o || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  mb = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  Um = Lf,
  hb = { isServer: !Lf, useCSSOMInjection: !nb },
  zl = (function () {
    function e(n, r, i) {
      n === void 0 && (n = ur),
        r === void 0 && (r = {}),
        (this.options = gn({}, hb, {}, n)),
        (this.gs = r),
        (this.names = new Map(i)),
        (this.server = !!n.isServer),
        !this.server &&
          Lf &&
          Um &&
          ((Um = !1),
          (function (o) {
            for (
              var a = document.querySelectorAll(lb), l = 0, u = a.length;
              l < u;
              l++
            ) {
              var s = a[l];
              s &&
                s.getAttribute(Ii) !== "active" &&
                (cb(o, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this));
    }
    e.registerId = function (n) {
      return La(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            gn({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((i = (r = this.options).isServer),
            (o = r.useCSSOMInjection),
            (a = r.target),
            (n = i ? new mb(a) : o ? new fb(a) : new pb(a)),
            new ib(n)))
        );
        var n, r, i, o, a;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((La(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var i = new Set();
          i.add(r), this.names.set(n, i);
        }
      }),
      (t.insertRules = function (n, r, i) {
        this.registerName(n, r), this.getTag().insertRules(La(n), i);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(La(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), i = r.length, o = "", a = 0; a < i; a++) {
            var l = ob(a);
            if (l !== void 0) {
              var u = n.names.get(l),
                s = r.getGroup(a);
              if (u && s && u.size) {
                var c = Ii + ".g" + a + '[id="' + l + '"]',
                  d = "";
                u !== void 0 &&
                  u.forEach(function (p) {
                    p.length > 0 && (d += p + ",");
                  }),
                  (o +=
                    "" +
                    s +
                    c +
                    '{content:"' +
                    d +
                    `"}/*!sc*/
`);
              }
            }
          }
          return o;
        })(this);
      }),
      e
    );
  })(),
  vb = /(a)(d)/gi,
  Tm = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function ld(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Tm(t % 52) + n;
  return (Tm(t % 52) + n).replace(vb, "$1-$2");
}
var ui = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  D0 = function (e) {
    return ui(5381, e);
  };
function L0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Qo(n) && !Df(n)) return !1;
  }
  return !0;
}
var gb = D0("5.3.10"),
  yb = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && L0(t)),
        (this.componentId = n),
        (this.baseHash = ui(gb, n)),
        (this.baseStyle = r),
        zl.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.componentId,
          o = [];
        if (
          (this.baseStyle &&
            o.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
            o.push(this.staticRulesId);
          else {
            var a = Nr(this.rules, t, n, r).join(""),
              l = ld(ui(this.baseHash, a) >>> 0);
            if (!n.hasNameForId(i, l)) {
              var u = r(a, "." + l, void 0, i);
              n.insertRules(i, l, u);
            }
            o.push(l), (this.staticRulesId = l);
          }
        else {
          for (
            var s = this.rules.length,
              c = ui(this.baseHash, r.hash),
              d = "",
              p = 0;
            p < s;
            p++
          ) {
            var m = this.rules[p];
            if (typeof m == "string") d += m;
            else if (m) {
              var y = Nr(m, t, n, r),
                h = Array.isArray(y) ? y.join("") : y;
              (c = ui(c, h + p)), (d += h);
            }
          }
          if (d) {
            var E = ld(c >>> 0);
            if (!n.hasNameForId(i, E)) {
              var f = r(d, "." + E, void 0, i);
              n.insertRules(i, E, f);
            }
            o.push(E);
          }
        }
        return o.join(" ");
      }),
      e
    );
  })(),
  Sb = /^\s*\/\/.*$/gm,
  wb = [":", "[", ".", "#"];
function Eb(e) {
  var t,
    n,
    r,
    i,
    o = e === void 0 ? ur : e,
    a = o.options,
    l = a === void 0 ? ur : a,
    u = o.plugins,
    s = u === void 0 ? $l : u,
    c = new HE(l),
    d = [],
    p = (function (h) {
      function E(f) {
        if (f)
          try {
            h(f + "}");
          } catch {}
      }
      return function (f, v, g, w, S, b, x, j, P, C) {
        switch (f) {
          case 1:
            if (P === 0 && v.charCodeAt(0) === 64) return h(v + ";"), "";
            break;
          case 2:
            if (j === 0) return v + "/*|*/";
            break;
          case 3:
            switch (j) {
              case 102:
              case 112:
                return h(g[0] + v), "";
              default:
                return v + (C === 0 ? "/*|*/" : "");
            }
          case -2:
            v.split("/*|*/}").forEach(E);
        }
      };
    })(function (h) {
      d.push(h);
    }),
    m = function (h, E, f) {
      return (E === 0 && wb.indexOf(f[n.length]) !== -1) || f.match(i)
        ? h
        : "." + t;
    };
  function y(h, E, f, v) {
    v === void 0 && (v = "&");
    var g = h.replace(Sb, ""),
      w = E && f ? f + " " + E + " { " + g + " }" : g;
    return (
      (t = v),
      (n = E),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (i = new RegExp("(\\" + n + "\\b){2,}")),
      c(f || !E ? "" : E, w)
    );
  }
  return (
    c.use(
      [].concat(s, [
        function (h, E, f) {
          h === 2 &&
            f.length &&
            f[0].lastIndexOf(n) > 0 &&
            (f[0] = f[0].replace(r, m));
        },
        p,
        function (h) {
          if (h === -2) {
            var E = d;
            return (d = []), E;
          }
        },
      ])
    ),
    (y.hash = s.length
      ? s
          .reduce(function (h, E) {
            return E.name || ca(15), ui(h, E.name);
          }, 5381)
          .toString()
      : ""),
    y
  );
}
var N0 = zn.createContext();
N0.Consumer;
var $0 = zn.createContext(),
  bb = ($0.Consumer, new zl()),
  ud = Eb();
function _0() {
  return O.useContext(N0) || bb;
}
function z0() {
  return O.useContext($0) || ud;
}
var xb = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = ud);
        var a = r.name + o.hash;
        i.hasNameForId(r.id, a) ||
          i.insertRules(r.id, a, o(r.rules, a, "@keyframes"));
      }),
        (this.toString = function () {
          return ca(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = ud), this.name + t.hash;
      }),
      e
    );
  })(),
  Fb = /([A-Z])/,
  jb = /([A-Z])/g,
  Cb = /^ms-/,
  Ob = function (e) {
    return "-" + e.toLowerCase();
  };
function Dm(e) {
  return Fb.test(e) ? e.replace(jb, Ob).replace(Cb, "-ms-") : e;
}
var Lm = function (e) {
  return e == null || e === !1 || e === "";
};
function Nr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, l = e.length; a < l; a += 1)
      (i = Nr(e[a], t, n, r)) !== "" &&
        (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Lm(e)) return "";
  if (Df(e)) return "." + e.styledComponentId;
  if (Qo(e)) {
    if (
      typeof (s = e) != "function" ||
      (s.prototype && s.prototype.isReactComponent) ||
      !t
    )
      return e;
    var u = e(t);
    return Nr(u, t, n, r);
  }
  var s;
  return e instanceof xb
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : ad(e)
    ? (function c(d, p) {
        var m,
          y,
          h = [];
        for (var E in d)
          d.hasOwnProperty(E) &&
            !Lm(d[E]) &&
            ((Array.isArray(d[E]) && d[E].isCss) || Qo(d[E])
              ? h.push(Dm(E) + ":", d[E], ";")
              : ad(d[E])
              ? h.push.apply(h, c(d[E], E))
              : h.push(
                  Dm(E) +
                    ": " +
                    ((m = E),
                    (y = d[E]) == null || typeof y == "boolean" || y === ""
                      ? ""
                      : typeof y != "number" ||
                        y === 0 ||
                        m in WE ||
                        m.startsWith("--")
                      ? String(y).trim()
                      : y + "px") +
                    ";"
                ));
        return p ? [p + " {"].concat(h, ["}"]) : h;
      })(e)
    : e.toString();
}
var Nm = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function B0(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Qo(e) || ad(e)
    ? Nm(Nr(Rm($l, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : Nm(Nr(Rm(e, n)));
}
var V0 = function (e, t, n) {
    return (
      n === void 0 && (n = ur), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  Pb = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Ib = /(^-|-$)/g;
function Bs(e) {
  return e.replace(Pb, "-").replace(Ib, "");
}
var H0 = function (e) {
  return ld(D0(e) >>> 0);
};
function Na(e) {
  return typeof e == "string" && !0;
}
var sd = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  Mb = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function kb(e, t, n) {
  var r = e[n];
  sd(t) && sd(r) ? W0(r, t) : (e[n] = t);
}
function W0(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var i = 0, o = n; i < o.length; i++) {
    var a = o[i];
    if (sd(a)) for (var l in a) Mb(l) && kb(e, a[l], l);
  }
  return e;
}
var Nf = zn.createContext();
Nf.Consumer;
var Vs = {};
function Q0(e, t, n) {
  var r = Df(e),
    i = !Na(e),
    o = t.attrs,
    a = o === void 0 ? $l : o,
    l = t.componentId,
    u =
      l === void 0
        ? (function (v, g) {
            var w = typeof v != "string" ? "sc" : Bs(v);
            Vs[w] = (Vs[w] || 0) + 1;
            var S = w + "-" + H0("5.3.10" + w + Vs[w]);
            return g ? g + "-" + S : S;
          })(t.displayName, t.parentComponentId)
        : l,
    s = t.displayName,
    c =
      s === void 0
        ? (function (v) {
            return Na(v) ? "styled." + v : "Styled(" + Am(v) + ")";
          })(e)
        : s,
    d =
      t.displayName && t.componentId
        ? Bs(t.displayName) + "-" + t.componentId
        : t.componentId || u,
    p = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
    m = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (m = t.shouldForwardProp
      ? function (v, g, w) {
          return e.shouldForwardProp(v, g, w) && t.shouldForwardProp(v, g, w);
        }
      : e.shouldForwardProp);
  var y,
    h = new yb(n, d, r ? e.componentStyle : void 0),
    E = h.isStatic && a.length === 0,
    f = function (v, g) {
      return (function (w, S, b, x) {
        var j = w.attrs,
          P = w.componentStyle,
          C = w.defaultProps,
          M = w.foldedComponentIds,
          R = w.shouldForwardProp,
          A = w.styledComponentId,
          T = w.target,
          N = (function (_, I, Z) {
            _ === void 0 && (_ = ur);
            var H = gn({}, I, { theme: _ }),
              de = {};
            return (
              Z.forEach(function (re) {
                var ae,
                  Y,
                  ge,
                  Pe = re;
                for (ae in (Qo(Pe) && (Pe = Pe(H)), Pe))
                  H[ae] = de[ae] =
                    ae === "className"
                      ? ((Y = de[ae]),
                        (ge = Pe[ae]),
                        Y && ge ? Y + " " + ge : Y || ge)
                      : Pe[ae];
              }),
              [H, de]
            );
          })(V0(S, O.useContext(Nf), C) || ur, S, j),
          W = N[0],
          q = N[1],
          k = (function (_, I, Z, H) {
            var de = _0(),
              re = z0(),
              ae = I
                ? _.generateAndInjectStyles(ur, de, re)
                : _.generateAndInjectStyles(Z, de, re);
            return ae;
          })(P, x, W),
          V = b,
          B = q.$as || S.$as || q.as || S.as || T,
          G = Na(B),
          U = q !== S ? gn({}, S, {}, q) : S,
          L = {};
        for (var D in U)
          D[0] !== "$" &&
            D !== "as" &&
            (D === "forwardedAs"
              ? (L.as = U[D])
              : (R ? R(D, Pm, B) : !G || Pm(D)) && (L[D] = U[D]));
        return (
          S.style &&
            q.style !== S.style &&
            (L.style = gn({}, S.style, {}, q.style)),
          (L.className = Array.prototype
            .concat(M, A, k !== A ? k : null, S.className, q.className)
            .filter(Boolean)
            .join(" ")),
          (L.ref = V),
          O.createElement(B, L)
        );
      })(y, v, g, E);
    };
  return (
    (f.displayName = c),
    ((y = zn.forwardRef(f)).attrs = p),
    (y.componentStyle = h),
    (y.displayName = c),
    (y.shouldForwardProp = m),
    (y.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : $l),
    (y.styledComponentId = d),
    (y.target = r ? e.target : e),
    (y.withComponent = function (v) {
      var g = t.componentId,
        w = (function (b, x) {
          if (b == null) return {};
          var j,
            P,
            C = {},
            M = Object.keys(b);
          for (P = 0; P < M.length; P++)
            (j = M[P]), x.indexOf(j) >= 0 || (C[j] = b[j]);
          return C;
        })(t, ["componentId"]),
        S = g && g + "-" + (Na(v) ? v : Bs(Am(v)));
      return Q0(v, gn({}, w, { attrs: p, componentId: S }), n);
    }),
    Object.defineProperty(y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = r ? W0({}, e.defaultProps, v) : v;
      },
    }),
    Object.defineProperty(y, "toString", {
      value: function () {
        return "." + y.styledComponentId;
      },
    }),
    i &&
      tb(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    y
  );
}
var cd = function (e) {
  return (function t(n, r, i) {
    if ((i === void 0 && (i = ur), !Af.isValidElementType(r)))
      return ca(1, String(r));
    var o = function () {
      return n(r, i, B0.apply(void 0, arguments));
    };
    return (
      (o.withConfig = function (a) {
        return t(n, r, gn({}, i, {}, a));
      }),
      (o.attrs = function (a) {
        return t(
          n,
          r,
          gn({}, i, {
            attrs: Array.prototype.concat(i.attrs, a).filter(Boolean),
          })
        );
      }),
      o
    );
  })(Q0, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  cd[e] = cd(e);
});
var Rb = (function () {
  function e(n, r) {
    (this.rules = n),
      (this.componentId = r),
      (this.isStatic = L0(n)),
      zl.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return (
    (t.createStyles = function (n, r, i, o) {
      var a = o(Nr(this.rules, r, i, o).join(""), ""),
        l = this.componentId + n;
      i.insertRules(l, l, a);
    }),
    (t.removeStyles = function (n, r) {
      r.clearRules(this.componentId + n);
    }),
    (t.renderStyles = function (n, r, i, o) {
      n > 2 && zl.registerId(this.componentId + n),
        this.removeStyles(n, i),
        this.createStyles(n, r, i, o);
    }),
    e
  );
})();
function Ab(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = B0.apply(void 0, [e].concat(n)),
    o = "sc-global-" + H0(JSON.stringify(i)),
    a = new Rb(i, o);
  function l(s) {
    var c = _0(),
      d = z0(),
      p = O.useContext(Nf),
      m = O.useRef(c.allocateGSInstance(o)).current;
    return (
      c.server && u(m, s, c, p, d),
      O.useLayoutEffect(
        function () {
          if (!c.server)
            return (
              u(m, s, c, p, d),
              function () {
                return a.removeStyles(m, c);
              }
            );
        },
        [m, s, c, p, d]
      ),
      null
    );
  }
  function u(s, c, d, p, m) {
    if (a.isStatic) a.renderStyles(s, rb, d, m);
    else {
      var y = gn({}, c, { theme: V0(c, p, l.defaultProps) });
      a.renderStyles(s, y, d, m);
    }
  }
  return zn.memo(l);
}
const J = cd,
  ct = J.div`
  flex-direction: ${({ direction: e }) => e};
  height: ${({ height: e }) => e};
  width: ${({ width: e }) => e};
  display: flex;
  justify-content: center;
  align-items: center;
`,
  Vr = J.div`
  height: ${({ height: e }) => e};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border-radius: 2.5rem 2.5rem 0 0;
  padding: 1rem;
  position: relative;
  top: 8rem;
  left: 0;
  z-index: 2;
  width: 100%;
  @media (min-width: 1000px) {
    padding: 3rem;
    width: 100vw;
    border-radius: 4rem 4rem 0 0;
    top: 9rem;
  }
`,
  Ub = J.span`
  display: flex;
  width: ${({ margin: e }) => (typeof e == "string" ? e : `${e}rem`)};
`,
  Tb = J.span`
  display: flex;
  height: ${({ margin: e }) => (typeof e == "string" ? e : `${e}rem`)};
`;
function xe(e) {
  const { direction: t } = e;
  return t === "horizontal" ? F.jsx(Ub, { ...e }) : F.jsx(Tb, { ...e });
}
xe.defaultProps = { direction: "horizontal" };
/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function be() {
  return (
    (be = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    be.apply(this, arguments)
  );
}
var Ke;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ke || (Ke = {}));
const $m = "popstate";
function Db(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location;
    return Go(
      "",
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : $r(i);
  }
  return Nb(t, n, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Mi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Lb() {
  return Math.random().toString(36).substr(2, 8);
}
function _m(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Go(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    be(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Vn(t) : t,
      { state: n, key: (t && t.key) || r || Lb() }
    )
  );
}
function $r(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Vn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Nb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = Ke.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), a.replaceState(be({}, a.state, { idx: s }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = Ke.Pop;
    let E = c(),
      f = E == null ? null : E - s;
    (s = E), u && u({ action: l, location: h.location, delta: f });
  }
  function p(E, f) {
    l = Ke.Push;
    let v = Go(h.location, E, f);
    n && n(v, E), (s = c() + 1);
    let g = _m(v, s),
      w = h.createHref(v);
    try {
      a.pushState(g, "", w);
    } catch {
      i.location.assign(w);
    }
    o && u && u({ action: l, location: h.location, delta: 1 });
  }
  function m(E, f) {
    l = Ke.Replace;
    let v = Go(h.location, E, f);
    n && n(v, E), (s = c());
    let g = _m(v, s),
      w = h.createHref(v);
    a.replaceState(g, "", w),
      o && u && u({ action: l, location: h.location, delta: 0 });
  }
  function y(E) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      v = typeof E == "string" ? E : $r(E);
    return (
      he(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, f)
    );
  }
  let h = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener($m, d),
        (u = E),
        () => {
          i.removeEventListener($m, d), (u = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let f = y(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: m,
    go(E) {
      return a.go(E);
    },
  };
  return h;
}
var Ze;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ze || (Ze = {}));
const $b = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function _b(e) {
  return e.index === !0;
}
function G0(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, o],
        l = typeof i.id == "string" ? i.id : a.join("-");
      if (
        (he(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        he(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        _b(i))
      ) {
        let u = be({}, i, t(i), { id: l });
        return (r[l] = u), u;
      } else {
        let u = be({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = u), i.children && (u.children = G0(i.children, t, a, r)), u
        );
      }
    })
  );
}
function si(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Vn(t) : t,
    i = Ni(r.pathname || "/", n);
  if (i == null) return null;
  let o = K0(e);
  zb(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) a = Yb(o[l], Jb(i));
  return a;
}
function K0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (he(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Un([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (he(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      K0(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Kb(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, a) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, a);
      else for (let u of q0(o.path)) i(o, a, u);
    }),
    t
  );
}
function q0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = q0(r.join("/")),
    l = [];
  return (
    l.push(...a.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && l.push(...a),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function zb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : qb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Bb = /^:\w+$/,
  Vb = 3,
  Hb = 2,
  Wb = 1,
  Qb = 10,
  Gb = -2,
  zm = (e) => e === "*";
function Kb(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(zm) && (r += Gb),
    t && (r += Hb),
    n
      .filter((i) => !zm(i))
      .reduce((i, o) => i + (Bb.test(o) ? Vb : o === "" ? Wb : Qb), r)
  );
}
function qb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Yb(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      s = i === "/" ? t : t.slice(i.length) || "/",
      c = Zb(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    o.push({
      params: r,
      pathname: Un([i, c.pathname]),
      pathnameBase: rx(Un([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Un([i, c.pathnameBase]));
  }
  return o;
}
function Zb(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xb(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((s, c, d) => {
      if (c === "*") {
        let p = l[d] || "";
        a = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (s[c] = ex(l[d] || "", c)), s;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function Xb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Jb(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Mi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ex(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Mi(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ni(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function tx(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Vn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : nx(n, t)) : t,
    search: ix(r),
    hash: ox(i),
  };
}
function nx(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Hs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Nu(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function $f(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Vn(e))
    : ((i = be({}, e)),
      he(
        !i.pathname || !i.pathname.includes("?"),
        Hs("?", "pathname", "search", i)
      ),
      he(
        !i.pathname || !i.pathname.includes("#"),
        Hs("#", "pathname", "hash", i)
      ),
      he(!i.search || !i.search.includes("#"), Hs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    l;
  if (r || a == null) l = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      i.pathname = p.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let u = tx(i, l),
    s = a && a !== "/" && a.endsWith("/"),
    c = (o || a === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const Un = (e) => e.join("/").replace(/\/\/+/g, "/"),
  rx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ix = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ox = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class _f {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Y0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Z0 = ["post", "put", "patch", "delete"],
  ax = new Set(Z0),
  lx = ["get", ...Z0],
  ux = new Set(lx),
  sx = new Set([301, 302, 303, 307, 308]),
  cx = new Set([307, 308]),
  Ws = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  dx = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Bm = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  X0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  J0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fx = !J0,
  px = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function mx(e) {
  he(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let $ = e.detectErrorBoundary;
    t = (z) => ({ hasErrorBoundary: $(z) });
  } else t = px;
  let n = {},
    r = G0(e.routes, t, void 0, n),
    i,
    o = e.basename || "/",
    a = be({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    l = null,
    u = new Set(),
    s = null,
    c = null,
    d = null,
    p = e.hydrationData != null,
    m = si(r, e.history.location, o),
    y = null;
  if (m == null) {
    let $ = nn(404, { pathname: e.history.location.pathname }),
      { matches: z, route: Q } = qm(r);
    (m = z), (y = { [Q.id]: $ });
  }
  let h =
      !m.some(($) => $.route.lazy) &&
      (!m.some(($) => $.route.loader) || e.hydrationData != null),
    E,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: m,
      initialized: h,
      navigation: Ws,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    v = Ke.Pop,
    g = !1,
    w,
    S = !1,
    b = !1,
    x = [],
    j = [],
    P = new Map(),
    C = 0,
    M = -1,
    R = new Map(),
    A = new Set(),
    T = new Map(),
    N = new Map(),
    W = new Map(),
    q = !1;
  function k() {
    return (
      (l = e.history.listen(($) => {
        let { action: z, location: Q, delta: ee } = $;
        if (q) {
          q = !1;
          return;
        }
        Mi(
          W.size === 0 || ee != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let te = se({
          currentLocation: f.location,
          nextLocation: Q,
          historyAction: z,
        });
        if (te && ee != null) {
          (q = !0),
            e.history.go(ee * -1),
            ft(te, {
              state: "blocked",
              location: Q,
              proceed() {
                ft(te, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: Q,
                }),
                  e.history.go(ee);
              },
              reset() {
                Ve(te), G({ blockers: new Map(E.state.blockers) });
              },
            });
          return;
        }
        return _(z, Q);
      })),
      f.initialized || _(Ke.Pop, f.location),
      E
    );
  }
  function V() {
    l && l(),
      u.clear(),
      w && w.abort(),
      f.fetchers.forEach(($, z) => Ue(z)),
      f.blockers.forEach(($, z) => Ve(z));
  }
  function B($) {
    return u.add($), () => u.delete($);
  }
  function G($) {
    (f = be({}, f, $)), u.forEach((z) => z(f));
  }
  function U($, z) {
    var Q, ee;
    let te =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        Pn(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((Q = $.state) == null ? void 0 : Q._isRedirect) !== !0,
      ce;
    z.actionData
      ? Object.keys(z.actionData).length > 0
        ? (ce = z.actionData)
        : (ce = null)
      : te
      ? (ce = f.actionData)
      : (ce = null);
    let me = z.loaderData
      ? Km(f.loaderData, z.loaderData, z.matches || [], z.errors)
      : f.loaderData;
    for (let [ne] of W) Ve(ne);
    let ue =
      g === !0 ||
      (f.navigation.formMethod != null &&
        Pn(f.navigation.formMethod) &&
        ((ee = $.state) == null ? void 0 : ee._isRedirect) !== !0);
    i && ((r = i), (i = void 0)),
      G(
        be({}, z, {
          actionData: ce,
          loaderData: me,
          historyAction: v,
          location: $,
          initialized: !0,
          navigation: Ws,
          revalidation: "idle",
          restoreScrollPosition: Xt($, z.matches || f.matches),
          preventScrollReset: ue,
          blockers: new Map(f.blockers),
        })
      ),
      S ||
        v === Ke.Pop ||
        (v === Ke.Push
          ? e.history.push($, $.state)
          : v === Ke.Replace && e.history.replace($, $.state)),
      (v = Ke.Pop),
      (g = !1),
      (S = !1),
      (b = !1),
      (x = []),
      (j = []);
  }
  async function L($, z) {
    if (typeof $ == "number") {
      e.history.go($);
      return;
    }
    let Q = dd(
        f.location,
        f.matches,
        o,
        a.v7_prependBasename,
        $,
        z == null ? void 0 : z.fromRouteId,
        z == null ? void 0 : z.relative
      ),
      {
        path: ee,
        submission: te,
        error: ce,
      } = Vm(a.v7_normalizeFormMethod, !1, Q, z),
      me = f.location,
      ue = Go(f.location, ee, z && z.state);
    ue = be({}, ue, e.history.encodeLocation(ue));
    let ne = z && z.replace != null ? z.replace : void 0,
      Se = Ke.Push;
    ne === !0
      ? (Se = Ke.Replace)
      : ne === !1 ||
        (te != null &&
          Pn(te.formMethod) &&
          te.formAction === f.location.pathname + f.location.search &&
          (Se = Ke.Replace));
    let Ce =
        z && "preventScrollReset" in z ? z.preventScrollReset === !0 : void 0,
      pt = se({ currentLocation: me, nextLocation: ue, historyAction: Se });
    if (pt) {
      ft(pt, {
        state: "blocked",
        location: ue,
        proceed() {
          ft(pt, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ue,
          }),
            L($, z);
        },
        reset() {
          Ve(pt), G({ blockers: new Map(f.blockers) });
        },
      });
      return;
    }
    return await _(Se, ue, {
      submission: te,
      pendingError: ce,
      preventScrollReset: Ce,
      replace: z && z.replace,
    });
  }
  function D() {
    if (
      (Pe(),
      G({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        _(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      _(v || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function _($, z, Q) {
    w && w.abort(),
      (w = null),
      (v = $),
      (S = (Q && Q.startUninterruptedRevalidation) === !0),
      Wi(f.location, f.matches),
      (g = (Q && Q.preventScrollReset) === !0);
    let ee = i || r,
      te = Q && Q.overrideNavigation,
      ce = si(ee, z, o);
    if (!ce) {
      let et = nn(404, { pathname: z.pathname }),
        { matches: tt, route: Vt } = qm(ee);
      Me(), U(z, { matches: tt, loaderData: {}, errors: { [Vt.id]: et } });
      return;
    }
    if (
      Sx(f.location, z) &&
      !(Q && Q.submission && Pn(Q.submission.formMethod))
    ) {
      U(z, { matches: ce });
      return;
    }
    w = new AbortController();
    let me = no(e.history, z, w.signal, Q && Q.submission),
      ue,
      ne;
    if (Q && Q.pendingError) ne = { [ci(ce).route.id]: Q.pendingError };
    else if (Q && Q.submission && Pn(Q.submission.formMethod)) {
      let et = await I(me, z, Q.submission, ce, { replace: Q.replace });
      if (et.shortCircuited) return;
      (ue = et.pendingActionData),
        (ne = et.pendingActionError),
        (te = be({ state: "loading", location: z }, Q.submission)),
        (me = new Request(me.url, { signal: me.signal }));
    }
    let {
      shortCircuited: Se,
      loaderData: Ce,
      errors: pt,
    } = await Z(
      me,
      z,
      ce,
      te,
      Q && Q.submission,
      Q && Q.fetcherSubmission,
      Q && Q.replace,
      ue,
      ne
    );
    Se ||
      ((w = null),
      U(
        z,
        be({ matches: ce }, ue ? { actionData: ue } : {}, {
          loaderData: Ce,
          errors: pt,
        })
      ));
  }
  async function I($, z, Q, ee, te) {
    Pe();
    let ce = be({ state: "submitting", location: z }, Q);
    G({ navigation: ce });
    let me,
      ue = fd(ee, z);
    if (!ue.route.action && !ue.route.lazy)
      me = {
        type: Ze.error,
        error: nn(405, {
          method: $.method,
          pathname: z.pathname,
          routeId: ue.route.id,
        }),
      };
    else if (((me = await to("action", $, ue, ee, n, t, o)), $.signal.aborted))
      return { shortCircuited: !0 };
    if (yi(me)) {
      let ne;
      return (
        te && te.replace != null
          ? (ne = te.replace)
          : (ne = me.location === f.location.pathname + f.location.search),
        await Y(f, me, { submission: Q, replace: ne }),
        { shortCircuited: !0 }
      );
    }
    if (Fo(me)) {
      let ne = ci(ee, ue.route.id);
      return (
        (te && te.replace) !== !0 && (v = Ke.Push),
        {
          pendingActionData: {},
          pendingActionError: { [ne.route.id]: me.error },
        }
      );
    }
    if (Pr(me)) throw nn(400, { type: "defer-action" });
    return { pendingActionData: { [ue.route.id]: me.data } };
  }
  async function Z($, z, Q, ee, te, ce, me, ue, ne) {
    let Se = ee;
    Se ||
      (Se = be(
        {
          state: "loading",
          location: z,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        te
      ));
    let Ce =
        te || ce
          ? te || ce
          : Se.formMethod && Se.formAction && Se.formData && Se.formEncType
          ? {
              formMethod: Se.formMethod,
              formAction: Se.formAction,
              formData: Se.formData,
              formEncType: Se.formEncType,
            }
          : void 0,
      pt = i || r,
      [et, tt] = Hm(e.history, f, Q, Ce, z, b, x, j, T, pt, o, ue, ne);
    if (
      (Me(
        ($e) =>
          !(Q && Q.some((Ht) => Ht.route.id === $e)) ||
          (et && et.some((Ht) => Ht.route.id === $e))
      ),
      et.length === 0 && tt.length === 0)
    ) {
      let $e = Bt();
      return (
        U(
          z,
          be(
            { matches: Q, loaderData: {}, errors: ne || null },
            ue ? { actionData: ue } : {},
            $e ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!S) {
      tt.forEach((Ht) => {
        let Qr = f.fetchers.get(Ht.key),
          fs = {
            state: "loading",
            data: Qr && Qr.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        f.fetchers.set(Ht.key, fs);
      });
      let $e = ue || f.actionData;
      G(
        be(
          { navigation: Se },
          $e
            ? Object.keys($e).length === 0
              ? { actionData: null }
              : { actionData: $e }
            : {},
          tt.length > 0 ? { fetchers: new Map(f.fetchers) } : {}
        )
      );
    }
    (M = ++C),
      tt.forEach(($e) => {
        $e.controller && P.set($e.key, $e.controller);
      });
    let Vt = () => tt.forEach(($e) => fe($e.key));
    w && w.signal.addEventListener("abort", Vt);
    let {
      results: Qi,
      loaderResults: us,
      fetcherResults: ga,
    } = await ge(f.matches, Q, et, tt, $);
    if ($.signal.aborted) return { shortCircuited: !0 };
    w && w.signal.removeEventListener("abort", Vt),
      tt.forEach(($e) => P.delete($e.key));
    let Hn = Ym(Qi);
    if (Hn) return await Y(f, Hn, { replace: me }), { shortCircuited: !0 };
    let { loaderData: ya, errors: ss } = Gm(f, Q, et, us, ne, tt, ga, N);
    N.forEach(($e, Ht) => {
      $e.subscribe((Qr) => {
        (Qr || $e.done) && N.delete(Ht);
      });
    });
    let cs = Bt(),
      ds = Ne(M),
      Sa = cs || ds || tt.length > 0;
    return be(
      { loaderData: ya, errors: ss },
      Sa ? { fetchers: new Map(f.fetchers) } : {}
    );
  }
  function H($) {
    return f.fetchers.get($) || dx;
  }
  function de($, z, Q, ee) {
    if (fx)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    P.has($) && fe($);
    let te = i || r,
      ce = dd(
        f.location,
        f.matches,
        o,
        a.v7_prependBasename,
        Q,
        z,
        ee == null ? void 0 : ee.relative
      ),
      me = si(te, ce, o);
    if (!me) {
      pe($, z, nn(404, { pathname: ce }));
      return;
    }
    let { path: ue, submission: ne } = Vm(a.v7_normalizeFormMethod, !0, ce, ee),
      Se = fd(me, ue);
    if (((g = (ee && ee.preventScrollReset) === !0), ne && Pn(ne.formMethod))) {
      re($, z, ue, Se, me, ne);
      return;
    }
    T.set($, { routeId: z, path: ue }), ae($, z, ue, Se, me, ne);
  }
  async function re($, z, Q, ee, te, ce) {
    if ((Pe(), T.delete($), !ee.route.action && !ee.route.lazy)) {
      let kt = nn(405, { method: ce.formMethod, pathname: Q, routeId: z });
      pe($, z, kt);
      return;
    }
    let me = f.fetchers.get($),
      ue = be({ state: "submitting" }, ce, {
        data: me && me.data,
        " _hasFetcherDoneAnything ": !0,
      });
    f.fetchers.set($, ue), G({ fetchers: new Map(f.fetchers) });
    let ne = new AbortController(),
      Se = no(e.history, Q, ne.signal, ce);
    P.set($, ne);
    let Ce = await to("action", Se, ee, te, n, t, o);
    if (Se.signal.aborted) {
      P.get($) === ne && P.delete($);
      return;
    }
    if (yi(Ce)) {
      P.delete($), A.add($);
      let kt = be({ state: "loading" }, ce, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        f.fetchers.set($, kt),
        G({ fetchers: new Map(f.fetchers) }),
        Y(f, Ce, { submission: ce, isFetchActionRedirect: !0 })
      );
    }
    if (Fo(Ce)) {
      pe($, z, Ce.error);
      return;
    }
    if (Pr(Ce)) throw nn(400, { type: "defer-action" });
    let pt = f.navigation.location || f.location,
      et = no(e.history, pt, ne.signal),
      tt = i || r,
      Vt =
        f.navigation.state !== "idle"
          ? si(tt, f.navigation.location, o)
          : f.matches;
    he(Vt, "Didn't find any matches after fetcher action");
    let Qi = ++C;
    R.set($, Qi);
    let us = be({ state: "loading", data: Ce.data }, ce, {
      " _hasFetcherDoneAnything ": !0,
    });
    f.fetchers.set($, us);
    let [ga, Hn] = Hm(
      e.history,
      f,
      Vt,
      ce,
      pt,
      b,
      x,
      j,
      T,
      tt,
      o,
      { [ee.route.id]: Ce.data },
      void 0
    );
    Hn.filter((kt) => kt.key !== $).forEach((kt) => {
      let ps = kt.key,
        gp = f.fetchers.get(ps),
        Zy = {
          state: "loading",
          data: gp && gp.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
      f.fetchers.set(ps, Zy), kt.controller && P.set(ps, kt.controller);
    }),
      G({ fetchers: new Map(f.fetchers) });
    let ya = () => Hn.forEach((kt) => fe(kt.key));
    ne.signal.addEventListener("abort", ya);
    let {
      results: ss,
      loaderResults: cs,
      fetcherResults: ds,
    } = await ge(f.matches, Vt, ga, Hn, et);
    if (ne.signal.aborted) return;
    ne.signal.removeEventListener("abort", ya),
      R.delete($),
      P.delete($),
      Hn.forEach((kt) => P.delete(kt.key));
    let Sa = Ym(ss);
    if (Sa) return Y(f, Sa);
    let { loaderData: $e, errors: Ht } = Gm(
        f,
        f.matches,
        ga,
        cs,
        void 0,
        Hn,
        ds,
        N
      ),
      Qr = {
        state: "idle",
        data: Ce.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    f.fetchers.set($, Qr);
    let fs = Ne(Qi);
    f.navigation.state === "loading" && Qi > M
      ? (he(v, "Expected pending action"),
        w && w.abort(),
        U(f.navigation.location, {
          matches: Vt,
          loaderData: $e,
          errors: Ht,
          fetchers: new Map(f.fetchers),
        }))
      : (G(
          be(
            { errors: Ht, loaderData: Km(f.loaderData, $e, Vt, Ht) },
            fs ? { fetchers: new Map(f.fetchers) } : {}
          )
        ),
        (b = !1));
  }
  async function ae($, z, Q, ee, te, ce) {
    let me = f.fetchers.get($),
      ue = be(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        ce,
        { data: me && me.data, " _hasFetcherDoneAnything ": !0 }
      );
    f.fetchers.set($, ue), G({ fetchers: new Map(f.fetchers) });
    let ne = new AbortController(),
      Se = no(e.history, Q, ne.signal);
    P.set($, ne);
    let Ce = await to("loader", Se, ee, te, n, t, o);
    if (
      (Pr(Ce) && (Ce = (await r1(Ce, Se.signal, !0)) || Ce),
      P.get($) === ne && P.delete($),
      Se.signal.aborted)
    )
      return;
    if (yi(Ce)) {
      A.add($), await Y(f, Ce);
      return;
    }
    if (Fo(Ce)) {
      let et = ci(f.matches, z);
      f.fetchers.delete($),
        G({
          fetchers: new Map(f.fetchers),
          errors: { [et.route.id]: Ce.error },
        });
      return;
    }
    he(!Pr(Ce), "Unhandled fetcher deferred data");
    let pt = {
      state: "idle",
      data: Ce.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    f.fetchers.set($, pt), G({ fetchers: new Map(f.fetchers) });
  }
  async function Y($, z, Q) {
    var ee;
    let {
      submission: te,
      replace: ce,
      isFetchActionRedirect: me,
    } = Q === void 0 ? {} : Q;
    z.revalidate && (b = !0);
    let ue = Go(
      $.location,
      z.location,
      be({ _isRedirect: !0 }, me ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (he(ue, "Expected a location on the redirect navigation"),
      X0.test(z.location) &&
        J0 &&
        typeof ((ee = window) == null ? void 0 : ee.location) < "u")
    ) {
      let tt = e.history.createURL(z.location),
        Vt = Ni(tt.pathname, o) == null;
      if (window.location.origin !== tt.origin || Vt) {
        ce
          ? window.location.replace(z.location)
          : window.location.assign(z.location);
        return;
      }
    }
    w = null;
    let ne = ce === !0 ? Ke.Replace : Ke.Push,
      {
        formMethod: Se,
        formAction: Ce,
        formEncType: pt,
        formData: et,
      } = $.navigation;
    !te &&
      Se &&
      Ce &&
      et &&
      pt &&
      (te = { formMethod: Se, formAction: Ce, formEncType: pt, formData: et }),
      cx.has(z.status) && te && Pn(te.formMethod)
        ? await _(ne, ue, {
            submission: be({}, te, { formAction: z.location }),
            preventScrollReset: g,
          })
        : me
        ? await _(ne, ue, {
            overrideNavigation: {
              state: "loading",
              location: ue,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: te,
            preventScrollReset: g,
          })
        : await _(ne, ue, {
            overrideNavigation: {
              state: "loading",
              location: ue,
              formMethod: te ? te.formMethod : void 0,
              formAction: te ? te.formAction : void 0,
              formEncType: te ? te.formEncType : void 0,
              formData: te ? te.formData : void 0,
            },
            preventScrollReset: g,
          });
  }
  async function ge($, z, Q, ee, te) {
    let ce = await Promise.all([
        ...Q.map((ne) => to("loader", te, ne, z, n, t, o)),
        ...ee.map((ne) =>
          ne.matches && ne.match && ne.controller
            ? to(
                "loader",
                no(e.history, ne.path, ne.controller.signal),
                ne.match,
                ne.matches,
                n,
                t,
                o
              )
            : { type: Ze.error, error: nn(404, { pathname: ne.path }) }
        ),
      ]),
      me = ce.slice(0, Q.length),
      ue = ce.slice(Q.length);
    return (
      await Promise.all([
        Zm(
          $,
          Q,
          me,
          me.map(() => te.signal),
          !1,
          f.loaderData
        ),
        Zm(
          $,
          ee.map((ne) => ne.match),
          ue,
          ee.map((ne) => (ne.controller ? ne.controller.signal : null)),
          !0
        ),
      ]),
      { results: ce, loaderResults: me, fetcherResults: ue }
    );
  }
  function Pe() {
    (b = !0),
      x.push(...Me()),
      T.forEach(($, z) => {
        P.has(z) && (j.push(z), fe(z));
      });
  }
  function pe($, z, Q) {
    let ee = ci(f.matches, z);
    Ue($), G({ errors: { [ee.route.id]: Q }, fetchers: new Map(f.fetchers) });
  }
  function Ue($) {
    P.has($) && fe($),
      T.delete($),
      R.delete($),
      A.delete($),
      f.fetchers.delete($);
  }
  function fe($) {
    let z = P.get($);
    he(z, "Expected fetch controller: " + $), z.abort(), P.delete($);
  }
  function Te($) {
    for (let z of $) {
      let ee = {
        state: "idle",
        data: H(z).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      f.fetchers.set(z, ee);
    }
  }
  function Bt() {
    let $ = [],
      z = !1;
    for (let Q of A) {
      let ee = f.fetchers.get(Q);
      he(ee, "Expected fetcher: " + Q),
        ee.state === "loading" && (A.delete(Q), $.push(Q), (z = !0));
    }
    return Te($), z;
  }
  function Ne($) {
    let z = [];
    for (let [Q, ee] of R)
      if (ee < $) {
        let te = f.fetchers.get(Q);
        he(te, "Expected fetcher: " + Q),
          te.state === "loading" && (fe(Q), R.delete(Q), z.push(Q));
      }
    return Te(z), z.length > 0;
  }
  function ot($, z) {
    let Q = f.blockers.get($) || Bm;
    return W.get($) !== z && W.set($, z), Q;
  }
  function Ve($) {
    f.blockers.delete($), W.delete($);
  }
  function ft($, z) {
    let Q = f.blockers.get($) || Bm;
    he(
      (Q.state === "unblocked" && z.state === "blocked") ||
        (Q.state === "blocked" && z.state === "blocked") ||
        (Q.state === "blocked" && z.state === "proceeding") ||
        (Q.state === "blocked" && z.state === "unblocked") ||
        (Q.state === "proceeding" && z.state === "unblocked"),
      "Invalid blocker state transition: " + Q.state + " -> " + z.state
    ),
      f.blockers.set($, z),
      G({ blockers: new Map(f.blockers) });
  }
  function se($) {
    let { currentLocation: z, nextLocation: Q, historyAction: ee } = $;
    if (W.size === 0) return;
    W.size > 1 && Mi(!1, "A router only supports one blocker at a time");
    let te = Array.from(W.entries()),
      [ce, me] = te[te.length - 1],
      ue = f.blockers.get(ce);
    if (
      !(ue && ue.state === "proceeding") &&
      me({ currentLocation: z, nextLocation: Q, historyAction: ee })
    )
      return ce;
  }
  function Me($) {
    let z = [];
    return (
      N.forEach((Q, ee) => {
        (!$ || $(ee)) && (Q.cancel(), z.push(ee), N.delete(ee));
      }),
      z
    );
  }
  function Hi($, z, Q) {
    if (
      ((s = $), (d = z), (c = Q || ((ee) => ee.key)), !p && f.navigation === Ws)
    ) {
      p = !0;
      let ee = Xt(f.location, f.matches);
      ee != null && G({ restoreScrollPosition: ee });
    }
    return () => {
      (s = null), (d = null), (c = null);
    };
  }
  function Wi($, z) {
    if (s && c && d) {
      let Q = z.map((te) => Xm(te, f.loaderData)),
        ee = c($, Q) || $.key;
      s[ee] = d();
    }
  }
  function Xt($, z) {
    if (s && c && d) {
      let Q = z.map((ce) => Xm(ce, f.loaderData)),
        ee = c($, Q) || $.key,
        te = s[ee];
      if (typeof te == "number") return te;
    }
    return null;
  }
  function Yy($) {
    i = $;
  }
  return (
    (E = {
      get basename() {
        return o;
      },
      get state() {
        return f;
      },
      get routes() {
        return r;
      },
      initialize: k,
      subscribe: B,
      enableScrollRestoration: Hi,
      navigate: L,
      fetch: de,
      revalidate: D,
      createHref: ($) => e.history.createHref($),
      encodeLocation: ($) => e.history.encodeLocation($),
      getFetcher: H,
      deleteFetcher: Ue,
      dispose: V,
      getBlocker: ot,
      deleteBlocker: Ve,
      _internalFetchControllers: P,
      _internalActiveDeferreds: N,
      _internalSetRoutes: Yy,
    }),
    E
  );
}
function hx(e) {
  return e != null && "formData" in e;
}
function dd(e, t, n, r, i, o, a) {
  let l, u;
  if (o != null && a !== "path") {
    l = [];
    for (let c of t)
      if ((l.push(c), c.route.id === o)) {
        u = c;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let s = $f(
    i || ".",
    Nu(l).map((c) => c.pathnameBase),
    Ni(e.pathname, n) || e.pathname,
    a === "path"
  );
  return (
    i == null && ((s.search = e.search), (s.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !zf(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Un([n, s.pathname])),
    $r(s)
  );
}
function Vm(e, t, n, r) {
  if (!r || !hx(r)) return { path: n };
  if (r.formMethod && !bx(r.formMethod))
    return { path: n, error: nn(405, { method: r.formMethod }) };
  let i;
  if (r.formData) {
    let l = r.formMethod || "get";
    if (
      ((i = {
        formMethod: e ? l.toUpperCase() : l.toLowerCase(),
        formAction: n1(n),
        formEncType:
          (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: r.formData,
      }),
      Pn(i.formMethod))
    )
      return { path: n, submission: i };
  }
  let o = Vn(n),
    a = t1(r.formData);
  return (
    t && o.search && zf(o.search) && a.append("index", ""),
    (o.search = "?" + a),
    { path: $r(o), submission: i }
  );
}
function vx(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Hm(e, t, n, r, i, o, a, l, u, s, c, d, p) {
  let m = p ? Object.values(p)[0] : d ? Object.values(d)[0] : void 0,
    y = e.createURL(t.location),
    h = e.createURL(i),
    E = p ? Object.keys(p)[0] : void 0,
    v = vx(n, E).filter((w, S) => {
      if (w.route.lazy) return !0;
      if (w.route.loader == null) return !1;
      if (gx(t.loaderData, t.matches[S], w) || a.some((j) => j === w.route.id))
        return !0;
      let b = t.matches[S],
        x = w;
      return Wm(
        w,
        be(
          {
            currentUrl: y,
            currentParams: b.params,
            nextUrl: h,
            nextParams: x.params,
          },
          r,
          {
            actionResult: m,
            defaultShouldRevalidate:
              o ||
              y.pathname + y.search === h.pathname + h.search ||
              y.search !== h.search ||
              e1(b, x),
          }
        )
      );
    }),
    g = [];
  return (
    u.forEach((w, S) => {
      if (!n.some((P) => P.route.id === w.routeId)) return;
      let b = si(s, w.path, c);
      if (!b) {
        g.push({
          key: S,
          routeId: w.routeId,
          path: w.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let x = fd(b, w.path);
      if (l.includes(S)) {
        g.push({
          key: S,
          routeId: w.routeId,
          path: w.path,
          matches: b,
          match: x,
          controller: new AbortController(),
        });
        return;
      }
      Wm(
        x,
        be(
          {
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: h,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: m, defaultShouldRevalidate: o }
        )
      ) &&
        g.push({
          key: S,
          routeId: w.routeId,
          path: w.path,
          matches: b,
          match: x,
          controller: new AbortController(),
        });
    }),
    [v, g]
  );
}
function gx(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function e1(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Wm(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Qm(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  he(i, "No route found in manifest");
  let o = {};
  for (let a in r) {
    let u = i[a] !== void 0 && a !== "hasErrorBoundary";
    Mi(
      !u,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !u && !$b.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, be({}, t(i), { lazy: void 0 }));
}
async function to(e, t, n, r, i, o, a, l, u, s) {
  l === void 0 && (l = !1), u === void 0 && (u = !1);
  let c,
    d,
    p,
    m = (E) => {
      let f,
        v = new Promise((g, w) => (f = w));
      return (
        (p = () => f()),
        t.signal.addEventListener("abort", p),
        Promise.race([E({ request: t, params: n.params, context: s }), v])
      );
    };
  try {
    let E = n.route[e];
    if (n.route.lazy)
      if (E) d = (await Promise.all([m(E), Qm(n.route, o, i)]))[0];
      else if ((await Qm(n.route, o, i), (E = n.route[e]), E)) d = await m(E);
      else if (e === "action") {
        let f = new URL(t.url),
          v = f.pathname + f.search;
        throw nn(405, { method: t.method, pathname: v, routeId: n.route.id });
      } else return { type: Ze.data, data: void 0 };
    else if (E) d = await m(E);
    else {
      let f = new URL(t.url),
        v = f.pathname + f.search;
      throw nn(404, { pathname: v });
    }
    he(
      d !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (E) {
    (c = Ze.error), (d = E);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (Ex(d)) {
    let E = d.status;
    if (sx.has(E)) {
      let g = d.headers.get("Location");
      if (
        (he(
          g,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !X0.test(g))
      )
        g = dd(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, g);
      else if (!l) {
        let w = new URL(t.url),
          S = g.startsWith("//") ? new URL(w.protocol + g) : new URL(g),
          b = Ni(S.pathname, a) != null;
        S.origin === w.origin && b && (g = S.pathname + S.search + S.hash);
      }
      if (l) throw (d.headers.set("Location", g), d);
      return {
        type: Ze.redirect,
        status: E,
        location: g,
        revalidate: d.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (u) throw { type: c || Ze.data, response: d };
    let f,
      v = d.headers.get("Content-Type");
    return (
      v && /\bapplication\/json\b/.test(v)
        ? (f = await d.json())
        : (f = await d.text()),
      c === Ze.error
        ? { type: c, error: new _f(E, d.statusText, f), headers: d.headers }
        : { type: Ze.data, data: f, statusCode: d.status, headers: d.headers }
    );
  }
  if (c === Ze.error) return { type: c, error: d };
  if (wx(d)) {
    var y, h;
    return {
      type: Ze.deferred,
      deferredData: d,
      statusCode: (y = d.init) == null ? void 0 : y.status,
      headers:
        ((h = d.init) == null ? void 0 : h.headers) &&
        new Headers(d.init.headers),
    };
  }
  return { type: Ze.data, data: d };
}
function no(e, t, n, r) {
  let i = e.createURL(n1(t)).toString(),
    o = { signal: n };
  if (r && Pn(r.formMethod)) {
    let { formMethod: a, formEncType: l, formData: u } = r;
    (o.method = a.toUpperCase()),
      (o.body = l === "application/x-www-form-urlencoded" ? t1(u) : u);
  }
  return new Request(i, o);
}
function t1(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function yx(e, t, n, r, i) {
  let o = {},
    a = null,
    l,
    u = !1,
    s = {};
  return (
    n.forEach((c, d) => {
      let p = t[d].route.id;
      if (
        (he(!yi(c), "Cannot handle redirect results in processLoaderData"),
        Fo(c))
      ) {
        let m = ci(e, p),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[m.route.id] == null && (a[m.route.id] = y),
          (o[p] = void 0),
          u || ((u = !0), (l = Y0(c.error) ? c.error.status : 500)),
          c.headers && (s[p] = c.headers);
      } else
        Pr(c)
          ? (i.set(p, c.deferredData), (o[p] = c.deferredData.data))
          : (o[p] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (l = c.statusCode),
          c.headers && (s[p] = c.headers);
    }),
    r && ((a = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: s }
  );
}
function Gm(e, t, n, r, i, o, a, l) {
  let { loaderData: u, errors: s } = yx(t, n, r, i, l);
  for (let c = 0; c < o.length; c++) {
    let { key: d, match: p, controller: m } = o[c];
    he(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = a[c];
    if (!(m && m.signal.aborted))
      if (Fo(y)) {
        let h = ci(e.matches, p == null ? void 0 : p.route.id);
        (s && s[h.route.id]) || (s = be({}, s, { [h.route.id]: y.error })),
          e.fetchers.delete(d);
      } else if (yi(y)) he(!1, "Unhandled fetcher revalidation redirect");
      else if (Pr(y)) he(!1, "Unhandled fetcher deferred data");
      else {
        let h = {
          state: "idle",
          data: y.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(d, h);
      }
  }
  return { loaderData: u, errors: s };
}
function Km(e, t, n, r) {
  let i = be({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function ci(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function qm(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function nn(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action" && (l = "defer() is not supported in actions"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new _f(e || 500, a, new Error(l), !0)
  );
}
function Ym(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (yi(n)) return n;
  }
}
function n1(e) {
  let t = typeof e == "string" ? Vn(e) : e;
  return $r(be({}, t, { hash: "" }));
}
function Sx(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Pr(e) {
  return e.type === Ze.deferred;
}
function Fo(e) {
  return e.type === Ze.error;
}
function yi(e) {
  return (e && e.type) === Ze.redirect;
}
function wx(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ex(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function bx(e) {
  return ux.has(e.toLowerCase());
}
function Pn(e) {
  return ax.has(e.toLowerCase());
}
async function Zm(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      u = t[a];
    if (!u) continue;
    let s = e.find((d) => d.route.id === u.route.id),
      c = s != null && !e1(s, u) && (o && o[u.route.id]) !== void 0;
    if (Pr(l) && (i || c)) {
      let d = r[a];
      he(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await r1(l, d, i).then((p) => {
          p && (n[a] = p || n[a]);
        });
    }
  }
}
async function r1(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ze.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ze.error, error: i };
      }
    return { type: Ze.data, data: e.deferredData.data };
  }
}
function zf(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Xm(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function fd(e, t) {
  let n = typeof t == "string" ? Vn(t).search : t.search;
  if (e[e.length - 1].route.index && zf(n || "")) return e[e.length - 1];
  let r = Nu(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bl() {
  return (
    (Bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bl.apply(this, arguments)
  );
}
const Bf = O.createContext(null),
  i1 = O.createContext(null),
  $i = O.createContext(null),
  $u = O.createContext(null),
  wr = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  o1 = O.createContext(null);
function xx(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  da() || he(!1);
  let { basename: r, navigator: i } = O.useContext($i),
    { hash: o, pathname: a, search: l } = l1(e, { relative: n }),
    u = a;
  return (
    r !== "/" && (u = a === "/" ? r : Un([r, a])),
    i.createHref({ pathname: u, search: l, hash: o })
  );
}
function da() {
  return O.useContext($u) != null;
}
function _u() {
  return da() || he(!1), O.useContext($u).location;
}
function a1(e) {
  O.useContext($i).static || O.useLayoutEffect(e);
}
function _i() {
  let { isDataRoute: e } = O.useContext(wr);
  return e ? Lx() : Fx();
}
function Fx() {
  da() || he(!1);
  let { basename: e, navigator: t } = O.useContext($i),
    { matches: n } = O.useContext(wr),
    { pathname: r } = _u(),
    i = JSON.stringify(Nu(n).map((l) => l.pathnameBase)),
    o = O.useRef(!1);
  return (
    a1(() => {
      o.current = !0;
    }),
    O.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let s = $f(l, JSON.parse(i), r, u.relative === "path");
        e !== "/" &&
          (s.pathname = s.pathname === "/" ? e : Un([e, s.pathname])),
          (u.replace ? t.replace : t.push)(s, u.state, u);
      },
      [e, t, i, r]
    )
  );
}
const jx = O.createContext(null);
function Cx(e) {
  let t = O.useContext(wr).outlet;
  return t && O.createElement(jx.Provider, { value: e }, t);
}
function l1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = O.useContext(wr),
    { pathname: i } = _u(),
    o = JSON.stringify(Nu(r).map((a) => a.pathnameBase));
  return O.useMemo(() => $f(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Ox(e, t, n) {
  da() || he(!1);
  let { navigator: r } = O.useContext($i),
    { matches: i } = O.useContext(wr),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = _u(),
    s;
  if (t) {
    var c;
    let h = typeof t == "string" ? Vn(t) : t;
    l === "/" || ((c = h.pathname) != null && c.startsWith(l)) || he(!1),
      (s = h);
  } else s = u;
  let d = s.pathname || "/",
    p = l === "/" ? d : d.slice(l.length) || "/",
    m = si(e, { pathname: p }),
    y = Rx(
      m &&
        m.map((h) =>
          Object.assign({}, h, {
            params: Object.assign({}, a, h.params),
            pathname: Un([
              l,
              r.encodeLocation
                ? r.encodeLocation(h.pathname).pathname
                : h.pathname,
            ]),
            pathnameBase:
              h.pathnameBase === "/"
                ? l
                : Un([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(h.pathnameBase).pathname
                      : h.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && y
    ? O.createElement(
        $u.Provider,
        {
          value: {
            location: Bl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: Ke.Pop,
          },
        },
        y
      )
    : y;
}
function Px() {
  let e = Dx(),
    t = Y0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return O.createElement(
    O.Fragment,
    null,
    O.createElement("h2", null, "Unexpected Application Error!"),
    O.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? O.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Ix = O.createElement(Px, null);
class Mx extends O.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? O.createElement(
          wr.Provider,
          { value: this.props.routeContext },
          O.createElement(o1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function kx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = O.useContext(Bf);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    O.createElement(wr.Provider, { value: t }, r)
  );
}
function Rx(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let l = o.findIndex(
      (u) => u.route.id && (a == null ? void 0 : a[u.route.id])
    );
    l >= 0 || he(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, u, s) => {
    let c = u.route.id ? (a == null ? void 0 : a[u.route.id]) : null,
      d = null;
    n && (d = u.route.errorElement || Ix);
    let p = t.concat(o.slice(0, s + 1)),
      m = () => {
        let y;
        return (
          c
            ? (y = d)
            : u.route.Component
            ? (y = O.createElement(u.route.Component, null))
            : u.route.element
            ? (y = u.route.element)
            : (y = l),
          O.createElement(kx, {
            match: u,
            routeContext: { outlet: l, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
      ? O.createElement(Mx, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var pd;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(pd || (pd = {}));
var Ko;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Ko || (Ko = {}));
function Ax(e) {
  let t = O.useContext(Bf);
  return t || he(!1), t;
}
function Ux(e) {
  let t = O.useContext(i1);
  return t || he(!1), t;
}
function Tx(e) {
  let t = O.useContext(wr);
  return t || he(!1), t;
}
function u1(e) {
  let t = Tx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function Dx() {
  var e;
  let t = O.useContext(o1),
    n = Ux(Ko.UseRouteError),
    r = u1(Ko.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Lx() {
  let { router: e } = Ax(pd.UseNavigateStable),
    t = u1(Ko.UseNavigateStable),
    n = O.useRef(!1);
  return (
    a1(() => {
      n.current = !0;
    }),
    O.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Bl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Nx(e) {
  let { fallbackElement: t, router: n } = e,
    [r, i] = O.useState(n.state);
  O.useLayoutEffect(() => n.subscribe(i), [n, i]);
  let o = O.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (u) => n.navigate(u),
        push: (u, s, c) =>
          n.navigate(u, {
            state: s,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
        replace: (u, s, c) =>
          n.navigate(u, {
            replace: !0,
            state: s,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
      }),
      [n]
    ),
    a = n.basename || "/",
    l = O.useMemo(
      () => ({ router: n, navigator: o, static: !1, basename: a }),
      [n, o, a]
    );
  return O.createElement(
    O.Fragment,
    null,
    O.createElement(
      Bf.Provider,
      { value: l },
      O.createElement(
        i1.Provider,
        { value: r },
        O.createElement(
          zx,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: o,
          },
          n.state.initialized
            ? O.createElement($x, { routes: n.routes, state: r })
            : t
        )
      )
    ),
    null
  );
}
function $x(e) {
  let { routes: t, state: n } = e;
  return Ox(t, void 0, n);
}
function _x(e) {
  return Cx(e.context);
}
function zx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ke.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  da() && he(!1);
  let l = t.replace(/^\/*/, "/"),
    u = O.useMemo(() => ({ basename: l, navigator: o, static: a }), [l, o, a]);
  typeof r == "string" && (r = Vn(r));
  let {
      pathname: s = "/",
      search: c = "",
      hash: d = "",
      state: p = null,
      key: m = "default",
    } = r,
    y = O.useMemo(() => {
      let h = Ni(s, l);
      return h == null
        ? null
        : {
            location: { pathname: h, search: c, hash: d, state: p, key: m },
            navigationType: i,
          };
    }, [l, s, c, d, p, m, i]);
  return y == null
    ? null
    : O.createElement(
        $i.Provider,
        { value: u },
        O.createElement($u.Provider, { children: n, value: y })
      );
}
var Jm;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Jm || (Jm = {}));
new Promise(() => {});
function Bx(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: O.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: O.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qo() {
  return (
    (qo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qo.apply(this, arguments)
  );
}
function Vx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Hx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Hx(e);
}
const Qx = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Gx(e, t) {
  return mx({
    basename: t == null ? void 0 : t.basename,
    future: qo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Db({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Kx(),
    routes: e,
    mapRouteProperties: Bx,
  }).initialize();
}
function Kx() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = qo({}, t, { errors: qx(t.errors) })), t;
}
function qx(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new _f(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      let o = new Error(i.message);
      (o.stack = ""), (n[r] = o);
    } else n[r] = i;
  return n;
}
const Yx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Zx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Lt = O.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: l,
        target: u,
        to: s,
        preventScrollReset: c,
      } = t,
      d = Vx(t, Qx),
      { basename: p } = O.useContext($i),
      m,
      y = !1;
    if (typeof s == "string" && Zx.test(s) && ((m = s), Yx))
      try {
        let v = new URL(window.location.href),
          g = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
          w = Ni(g.pathname, p);
        g.origin === v.origin && w != null
          ? (s = w + g.search + g.hash)
          : (y = !0);
      } catch {}
    let h = xx(s, { relative: i }),
      E = Xx(s, {
        replace: a,
        state: l,
        target: u,
        preventScrollReset: c,
        relative: i,
      });
    function f(v) {
      r && r(v), v.defaultPrevented || E(v);
    }
    return O.createElement(
      "a",
      qo({}, d, { href: m || h, onClick: y || o ? r : f, ref: n, target: u })
    );
  });
var eh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(eh || (eh = {}));
var th;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(th || (th = {}));
function Xx(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
    } = t === void 0 ? {} : t,
    l = _i(),
    u = _u(),
    s = l1(e, { relative: a });
  return O.useCallback(
    (c) => {
      if (Wx(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : $r(u) === $r(s);
        l(e, { replace: d, state: i, preventScrollReset: o, relative: a });
      }
    },
    [u, l, s, r, i, n, e, o, a]
  );
}
const Jx = J.button`
  border-radius: 0.6rem;
  border: none;
  width: 34rem;
  height: 5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
  background-color: ${({ bg: e }) => e || "#50924E"};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  color: #fff;
  font-style: italic;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ hoverBg: e }) => e || "#396d37"};
  }
`,
  fa = ({ to: e, text: t, ...n }) =>
    F.jsx(Lt, { to: e, children: F.jsx(Jx, { ...n, children: t }) }),
  jo = J.button`
  width: 17rem;
  height: 4.4rem;
  border: 0.1rem solid #50924e;
  border-radius: 0.8rem;
  padding: 1.2rem 1rem;
  cursor: pointer;
  background-color: ${({ bg: e }) => e || "#FFFFFF"};
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  text-align: left;
  color: ${({ color: e }) => e || "#000000"};
  transition: all 0.3s;
`,
  pa = J.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.5rem;
  text-align: center;
  color: #161616;
`,
  eF = J.div`
  font-family: "Poppins", sans-serif;
  /* border: 1px solid black; */
  width: 60%;
  height: 10%;
  text-align: center;
`,
  tF = J.p`
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 400;
  color: #161616;
`,
  s1 = J.span`
  text-align: center;
  font-size: ${({ fontSize: e }) => e || "16px"};
  color: ${({ color: e }) => e || "#000000"};
  align-self: ${({ alignSelf: e }) => e || "auto"};
`,
  nF = J.h1`
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  text-align: center;
  color: #161616;
`,
  rF = J.p`
  width: 30rem;
  height: 4rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
  color: #161616;
  margin-bottom: 2rem;
  flex: none;
  flex-grow: 0;
`,
  en = "/assets/photo-fe8730bd.webp";
let an = [
  { profile: en, name: "mika", lastCon: "hey" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
  { profile: en, name: "Yishai", lastCon: "Hello" },
];
const nh = J.div`
  width: 98vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${an.length === 0 && "center"};
  padding: ${an.length !== 0 && "2rem"};
  padding-bottom: ${an.length !== 0 && "10rem"};
  position: ${an.length !== 0 && "fixed"};
  top: ${an.length !== 0 && "8rem"};
  @media (min-width: 700px) {
    width: 100vw;
  }
`,
  iF = J.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,
  oF = J.img`
  border-radius: 5rem;
  width: 100%;
  height: 40%;
`,
  aF = J.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  border-bottom: 0.2rem solid lightgray;
  margin-bottom: 1rem;
`,
  lF = J.h1`
  width: 6.5rem;
  height: 2.5rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 100%;
  color: #161616;
`,
  uF = J.h1`
  width: 10rem;
  height: 1rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 100%;
  color: #161616;
`,
  sF = J.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.25rem 0.75rem;
  gap: 0.5rem;
  min-width: 9rem;
  height: 2.3rem;
  margin: 1rem 0.5rem 1rem 0;
  background: #edf2f7;
  border-radius: 1.5rem;
  color: #161616;
  font-size: 1.2rem;
`,
  cF = J.div`
  display: flex;
  width: 40rem;
  flex-wrap: wrap;
`,
  dF = J.button`
  border-radius: 3rem;
  border: 0.15rem solid #fff;
  width: 5.5rem;
  height: 2.5rem;
  position: relative;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 9%;
  padding-left: 7%;
`,
  fF = J.div`
  width: 100%;
  height: 4rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4rem;
`,
  pF = J.div`
  width: 5rem;
  height: 5rem;
  background: ${({ profile: e }) => `url(${e})`};
  border-radius: 630rem;
  margin: 0 1rem;
`,
  mF = J.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
`,
  hF = J.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3rem;
  overflow-y: scroll;
`,
  rh = J.button`
  border-radius: 0.6rem;
  border: none;
  width: 34rem;
  height: 5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
  background-color: ${({ bg: e }) => e || "#50924E"};
  color: #fff;
  font-style: italic;
  transition: background-color 0.3s;
  position: ${an.length !== 0 && "fixed"};
  left: ${an.length !== 0 && "50%"};
  transform: ${an.length !== 0 && "translateX(-50%)"};
  bottom: ${an.length !== 0 && "4rem"};
  z-index: ${an.length !== 0 && "2"};
  &:hover {
    background-color: ${({ hoverBg: e }) => e || "#396d37"};
  }
`,
  vF = J.button`
  background-color: #fff;
  width: 100%;
  height: 13rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 1;
  border: none;
`,
  c1 = J.input`
  display: block;
  width: 34rem;
  height: 5.4rem;
  padding: 0.75rem 0.625rem;
  border-radius: 0.8rem;
  border: 0.1rem solid;
  border-color: ${({ borderColor: e }) => e || "#E3E3E3"};
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(124, 124, 124, 0.5);
  }
`;
J(Lt)`
  display: block;
  text-decoration: none;
`;
const gF = J.h1`
  width: 22rem;
  height: 2.5rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #161616;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: none;
  order: 0;
  flex-grow: 0;
`;
J.button`
  border-radius: 0.6rem;
  border: none;
  width: 34rem;
  height: 5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
  background-color: ${({ bg: e }) => e || "#50924E"};
  color: #fff;
  font-style: italic;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ hoverBg: e }) => e || "#396d37"};
  }
`;
const yF = J.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.8;
  color: ${({ color: e }) => e || "#ffffff"};
  flex-grow: 1;
  flex-basis: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
J.button`
  font-size: 1.2rem;
  background: #edf2f7;
  padding: 0.6rem 1.2rem;
  margin: 0.3rem 0.3rem;
  border: ${({ border: e }) => e || "none"};
  border-radius: 2.4rem;
`;
J.div`
  width: 100%;
  font-size: 1rem;
  padding: 0.4rem;
  border: none;
  margin: 1rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 1.6;
  flex-wrap: wrap;
`;
J.button`
  background: #ffffff;
  width: 2rem;
  height: 1.7rem;
  border: 1px solid;
  border-radius: 2.4rem;
`;
J.img`
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
`;
J.div`
  width: 7.5rem;
  border: 0.1rem solid #7f8790;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SF = () =>
  F.jsxs(ct, {
    direction: "column",
    height: "100vh",
    children: [
      F.jsx(UE, {}),
      F.jsx(xe, { direction: "vertical", margin: "2rem" }),
      F.jsx(nF, { children: "AraBrew" }),
      F.jsx(xe, { direction: "vertical", margin: "2rem" }),
      F.jsx(s1, { children: "Hi!" }),
      F.jsx(eF, {
        children: F.jsx(tF, {
          children:
            "Please answer some quick question so we can find you relevant people to chat with",
        }),
      }),
      F.jsx(fa, { to: "/lang", text: "Lets Do It" }),
    ],
  });
var d1 = { exports: {} },
  f1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ki = O;
function wF(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var EF = typeof Object.is == "function" ? Object.is : wF,
  bF = ki.useState,
  xF = ki.useEffect,
  FF = ki.useLayoutEffect,
  jF = ki.useDebugValue;
function CF(e, t) {
  var n = t(),
    r = bF({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    FF(
      function () {
        (i.value = n), (i.getSnapshot = t), Qs(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    xF(
      function () {
        return (
          Qs(i) && o({ inst: i }),
          e(function () {
            Qs(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    jF(n),
    n
  );
}
function Qs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !EF(e, n);
  } catch {
    return !0;
  }
}
function OF(e, t) {
  return t();
}
var PF =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? OF
    : CF;
f1.useSyncExternalStore =
  ki.useSyncExternalStore !== void 0 ? ki.useSyncExternalStore : PF;
d1.exports = f1;
var IF = d1.exports,
  p1 = { exports: {} },
  m1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zu = O,
  MF = IF;
function kF(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var RF = typeof Object.is == "function" ? Object.is : kF,
  AF = MF.useSyncExternalStore,
  UF = zu.useRef,
  TF = zu.useEffect,
  DF = zu.useMemo,
  LF = zu.useDebugValue;
m1.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = UF(null);
  if (o.current === null) {
    var a = { hasValue: !1, value: null };
    o.current = a;
  } else a = o.current;
  o = DF(
    function () {
      function u(m) {
        if (!s) {
          if (((s = !0), (c = m), (m = r(m)), i !== void 0 && a.hasValue)) {
            var y = a.value;
            if (i(y, m)) return (d = y);
          }
          return (d = m);
        }
        if (((y = d), RF(c, m))) return y;
        var h = r(m);
        return i !== void 0 && i(y, h) ? y : ((c = m), (d = h));
      }
      var s = !1,
        c,
        d,
        p = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        p === null
          ? void 0
          : function () {
              return u(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = AF(e, o[0], o[1]);
  return (
    TF(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l]
    ),
    LF(l),
    l
  );
};
p1.exports = m1;
var NF = p1.exports;
function $F(e) {
  e();
}
let h1 = $F;
const _F = (e) => (h1 = e),
  zF = () => h1,
  pr = O.createContext(null);
function v1() {
  return O.useContext(pr);
}
const BF = () => {
  throw new Error("uSES not initialized!");
};
let g1 = BF;
const VF = (e) => {
    g1 = e;
  },
  HF = (e, t) => e === t;
function WF(e = pr) {
  const t = e === pr ? v1 : () => O.useContext(e);
  return function (r, i = HF) {
    const { store: o, subscription: a, getServerState: l } = t(),
      u = g1(a.addNestedSub, o.getState, l || o.getState, r, i);
    return O.useDebugValue(u), u;
  };
}
const Bu = WF();
function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
function md(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf = Symbol.for("react.element"),
  Hf = Symbol.for("react.portal"),
  Vu = Symbol.for("react.fragment"),
  Hu = Symbol.for("react.strict_mode"),
  Wu = Symbol.for("react.profiler"),
  Qu = Symbol.for("react.provider"),
  Gu = Symbol.for("react.context"),
  QF = Symbol.for("react.server_context"),
  Ku = Symbol.for("react.forward_ref"),
  qu = Symbol.for("react.suspense"),
  Yu = Symbol.for("react.suspense_list"),
  Zu = Symbol.for("react.memo"),
  Xu = Symbol.for("react.lazy"),
  GF = Symbol.for("react.offscreen"),
  y1;
y1 = Symbol.for("react.module.reference");
function Zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vf:
        switch (((e = e.type), e)) {
          case Vu:
          case Wu:
          case Hu:
          case qu:
          case Yu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case QF:
              case Gu:
              case Ku:
              case Xu:
              case Zu:
              case Qu:
                return e;
              default:
                return t;
            }
        }
      case Hf:
        return t;
    }
  }
}
Oe.ContextConsumer = Gu;
Oe.ContextProvider = Qu;
Oe.Element = Vf;
Oe.ForwardRef = Ku;
Oe.Fragment = Vu;
Oe.Lazy = Xu;
Oe.Memo = Zu;
Oe.Portal = Hf;
Oe.Profiler = Wu;
Oe.StrictMode = Hu;
Oe.Suspense = qu;
Oe.SuspenseList = Yu;
Oe.isAsyncMode = function () {
  return !1;
};
Oe.isConcurrentMode = function () {
  return !1;
};
Oe.isContextConsumer = function (e) {
  return Zt(e) === Gu;
};
Oe.isContextProvider = function (e) {
  return Zt(e) === Qu;
};
Oe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vf;
};
Oe.isForwardRef = function (e) {
  return Zt(e) === Ku;
};
Oe.isFragment = function (e) {
  return Zt(e) === Vu;
};
Oe.isLazy = function (e) {
  return Zt(e) === Xu;
};
Oe.isMemo = function (e) {
  return Zt(e) === Zu;
};
Oe.isPortal = function (e) {
  return Zt(e) === Hf;
};
Oe.isProfiler = function (e) {
  return Zt(e) === Wu;
};
Oe.isStrictMode = function (e) {
  return Zt(e) === Hu;
};
Oe.isSuspense = function (e) {
  return Zt(e) === qu;
};
Oe.isSuspenseList = function (e) {
  return Zt(e) === Yu;
};
Oe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vu ||
    e === Wu ||
    e === Hu ||
    e === qu ||
    e === Yu ||
    e === GF ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Xu ||
        e.$$typeof === Zu ||
        e.$$typeof === Qu ||
        e.$$typeof === Gu ||
        e.$$typeof === Ku ||
        e.$$typeof === y1 ||
        e.getModuleId !== void 0))
  );
};
Oe.typeOf = Zt;
function KF() {
  const e = zF();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const ih = { notify() {}, get: () => [] };
function qF(e, t) {
  let n,
    r = ih;
  function i(d) {
    return u(), r.subscribe(d);
  }
  function o() {
    r.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return !!n;
  }
  function u() {
    n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = KF()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = ih));
  }
  const c = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: u,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const YF =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ZF = YF ? O.useLayoutEffect : O.useEffect;
function oh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Vl(e, t) {
  if (oh(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !oh(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function XF({ store: e, context: t, children: n, serverState: r }) {
  const i = O.useMemo(() => {
      const l = qF(e);
      return {
        store: e,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    o = O.useMemo(() => e.getState(), [e]);
  ZF(() => {
    const { subscription: l } = i;
    return (
      (l.onStateChange = l.notifyNestedSubs),
      l.trySubscribe(),
      o !== e.getState() && l.notifyNestedSubs(),
      () => {
        l.tryUnsubscribe(), (l.onStateChange = void 0);
      }
    );
  }, [i, o]);
  const a = t || pr;
  return zn.createElement(a.Provider, { value: i }, n);
}
function S1(e = pr) {
  const t = e === pr ? v1 : () => O.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const w1 = S1();
function JF(e = pr) {
  const t = e === pr ? w1 : S1(e);
  return function () {
    return t().dispatch;
  };
}
const jn = JF();
VF(NF.useSyncExternalStoreWithSelector);
_F(Cu.unstable_batchedUpdates);
const E1 = J.div`
  margin-top: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1rem;
  background: #50924e;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.125rem;
  color: #ffffff;
  position: absolute;
  @media (min-width: 700px) {
    padding: 3rem;
    height: 12.5rem;
  }
`;
function Hr({ leftIcon: e, midIcon: t, rightIcon: n, title: r }) {
  return F.jsx("div", {
    children: F.jsxs(E1, {
      children: [
        F.jsx("div", { children: e }),
        F.jsx("div", { children: t || F.jsx(yF, { children: r }) }),
        F.jsx("div", { children: n }),
      ],
    }),
  });
}
function ut(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function cn(e) {
  return !!e && !!e[Re];
}
function dn(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === uj)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Co] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Co]) ||
      Ju(e) ||
      es(e))
  );
}
function ej(e) {
  return cn(e) || ut(23, e), e[Re].t;
}
function mr(e, t, n) {
  n === void 0 && (n = !1),
    hr(e) === 0
      ? (n ? Object.keys : Si)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function hr(e) {
  var t = e[Re];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Ju(e)
    ? 2
    : es(e)
    ? 3
    : 0;
}
function sr(e, t) {
  return hr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ll(e, t) {
  return hr(e) === 2 ? e.get(t) : e[t];
}
function b1(e, t, n) {
  var r = hr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function x1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Ju(e) {
  return aj && e instanceof Map;
}
function es(e) {
  return lj && e instanceof Set;
}
function xr(e) {
  return e.o || e.t;
}
function Wf(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = j1(e);
  delete t[Re];
  for (var n = Si(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Qf(e, t) {
  return (
    t === void 0 && (t = !1),
    Gf(e) ||
      cn(e) ||
      !dn(e) ||
      (hr(e) > 1 && (e.set = e.add = e.clear = e.delete = tj),
      Object.freeze(e),
      t &&
        mr(
          e,
          function (n, r) {
            return Qf(r, !0);
          },
          !0
        )),
    e
  );
}
function tj() {
  ut(2);
}
function Gf(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function bn(e) {
  var t = yd[e];
  return t || ut(18, e), t;
}
function F1(e, t) {
  yd[e] || (yd[e] = t);
}
function hd() {
  return Yo;
}
function Gs(e, t) {
  t && (bn("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Hl(e) {
  vd(e), e.p.forEach(nj), (e.p = null);
}
function vd(e) {
  e === Yo && (Yo = e.l);
}
function ah(e) {
  return (Yo = { p: [], l: Yo, h: e, m: !0, _: 0 });
}
function nj(e) {
  var t = e[Re];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function Ks(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || bn("ES5").S(t, e, r),
    r
      ? (n[Re].P && (Hl(t), ut(4)),
        dn(e) && ((e = Wl(t, e)), t.l || Ql(t, e)),
        t.u && bn("Patches").M(n[Re].t, e, t.u, t.s))
      : (e = Wl(t, n, [])),
    Hl(t),
    t.u && t.v(t.u, t.s),
    e !== qf ? e : void 0
  );
}
function Wl(e, t, n) {
  if (Gf(t)) return t;
  var r = t[Re];
  if (!r)
    return (
      mr(
        t,
        function (l, u) {
          return lh(e, r, t, l, u, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Ql(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Wf(r.k)) : r.o,
      o = i,
      a = !1;
    r.i === 3 && ((o = new Set(i)), i.clear(), (a = !0)),
      mr(o, function (l, u) {
        return lh(e, r, i, l, u, n, a);
      }),
      Ql(e, i, !1),
      n && e.u && bn("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function lh(e, t, n, r, i, o, a) {
  if (cn(i)) {
    var l = Wl(e, i, o && t && t.i !== 3 && !sr(t.R, r) ? o.concat(r) : void 0);
    if ((b1(n, r, l), !cn(l))) return;
    e.m = !1;
  } else a && n.add(i);
  if (dn(i) && !Gf(i)) {
    if (!e.h.D && e._ < 1) return;
    Wl(e, i), (t && t.A.l) || Ql(e, i);
  }
}
function Ql(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Qf(t, n);
}
function qs(e, t) {
  var n = e[Re];
  return (n ? xr(n) : e)[t];
}
function uh(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Zn(e) {
  e.P || ((e.P = !0), e.l && Zn(e.l));
}
function Ys(e) {
  e.o || (e.o = Wf(e.t));
}
function gd(e, t, n) {
  var r = Ju(t)
    ? bn("MapSet").F(t, n)
    : es(t)
    ? bn("MapSet").T(t, n)
    : e.O
    ? (function (i, o) {
        var a = Array.isArray(i),
          l = {
            i: a ? 1 : 0,
            A: o ? o.A : hd(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          u = l,
          s = Zo;
        a && ((u = [l]), (s = co));
        var c = Proxy.revocable(u, s),
          d = c.revoke,
          p = c.proxy;
        return (l.k = p), (l.j = d), p;
      })(t, n)
    : bn("ES5").J(t, n);
  return (n ? n.A : hd()).p.push(r), r;
}
function rj(e) {
  return (
    cn(e) || ut(22, e),
    (function t(n) {
      if (!dn(n)) return n;
      var r,
        i = n[Re],
        o = hr(n);
      if (i) {
        if (!i.P && (i.i < 4 || !bn("ES5").K(i))) return i.t;
        (i.I = !0), (r = sh(n, o)), (i.I = !1);
      } else r = sh(n, o);
      return (
        mr(r, function (a, l) {
          (i && ll(i.t, a) === l) || b1(r, a, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function sh(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Wf(e);
}
function ij() {
  function e(o, a) {
    var l = i[o];
    return (
      l
        ? (l.enumerable = a)
        : (i[o] = l =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var u = this[Re];
                return Zo.get(u, o);
              },
              set: function (u) {
                var s = this[Re];
                Zo.set(s, o, u);
              },
            }),
      l
    );
  }
  function t(o) {
    for (var a = o.length - 1; a >= 0; a--) {
      var l = o[a][Re];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && Zn(l);
            break;
          case 4:
            n(l) && Zn(l);
        }
    }
  }
  function n(o) {
    for (var a = o.t, l = o.k, u = Si(l), s = u.length - 1; s >= 0; s--) {
      var c = u[s];
      if (c !== Re) {
        var d = a[c];
        if (d === void 0 && !sr(a, c)) return !0;
        var p = l[c],
          m = p && p[Re];
        if (m ? m.t !== d : !x1(p, d)) return !0;
      }
    }
    var y = !!a[Re];
    return u.length !== Si(a).length + (y ? 0 : 1);
  }
  function r(o) {
    var a = o.k;
    if (a.length !== o.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (l && !l.get) return !0;
    for (var u = 0; u < a.length; u++) if (!a.hasOwnProperty(u)) return !0;
    return !1;
  }
  var i = {};
  F1("ES5", {
    J: function (o, a) {
      var l = Array.isArray(o),
        u = (function (c, d) {
          if (c) {
            for (var p = Array(d.length), m = 0; m < d.length; m++)
              Object.defineProperty(p, "" + m, e(m, !0));
            return p;
          }
          var y = j1(d);
          delete y[Re];
          for (var h = Si(y), E = 0; E < h.length; E++) {
            var f = h[E];
            y[f] = e(f, c || !!y[f].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), y);
        })(l, o),
        s = {
          i: l ? 5 : 4,
          A: a ? a.A : hd(),
          P: !1,
          I: !1,
          R: {},
          l: a,
          t: o,
          k: u,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(u, Re, { value: s, writable: !0 }), u;
    },
    S: function (o, a, l) {
      l
        ? cn(a) && a[Re].A === o && t(o.p)
        : (o.u &&
            (function u(s) {
              if (s && typeof s == "object") {
                var c = s[Re];
                if (c) {
                  var d = c.t,
                    p = c.k,
                    m = c.R,
                    y = c.i;
                  if (y === 4)
                    mr(p, function (g) {
                      g !== Re &&
                        (d[g] !== void 0 || sr(d, g)
                          ? m[g] || u(p[g])
                          : ((m[g] = !0), Zn(c)));
                    }),
                      mr(d, function (g) {
                        p[g] !== void 0 || sr(p, g) || ((m[g] = !1), Zn(c));
                      });
                  else if (y === 5) {
                    if ((r(c) && (Zn(c), (m.length = !0)), p.length < d.length))
                      for (var h = p.length; h < d.length; h++) m[h] = !1;
                    else for (var E = d.length; E < p.length; E++) m[E] = !0;
                    for (
                      var f = Math.min(p.length, d.length), v = 0;
                      v < f;
                      v++
                    )
                      p.hasOwnProperty(v) || (m[v] = !0),
                        m[v] === void 0 && u(p[v]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
function oj() {
  function e(r) {
    if (!dn(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (Ju(r))
      return new Map(
        Array.from(r.entries()).map(function (a) {
          return [a[0], e(a[1])];
        })
      );
    if (es(r)) return new Set(Array.from(r).map(e));
    var i = Object.create(Object.getPrototypeOf(r));
    for (var o in r) i[o] = e(r[o]);
    return sr(r, Co) && (i[Co] = r[Co]), i;
  }
  function t(r) {
    return cn(r) ? e(r) : r;
  }
  var n = "add";
  F1("Patches", {
    $: function (r, i) {
      return (
        i.forEach(function (o) {
          for (var a = o.path, l = o.op, u = r, s = 0; s < a.length - 1; s++) {
            var c = hr(u),
              d = a[s];
            typeof d != "string" && typeof d != "number" && (d = "" + d),
              (c !== 0 && c !== 1) ||
                (d !== "__proto__" && d !== "constructor") ||
                ut(24),
              typeof u == "function" && d === "prototype" && ut(24),
              typeof (u = ll(u, d)) != "object" && ut(15, a.join("/"));
          }
          var p = hr(u),
            m = e(o.value),
            y = a[a.length - 1];
          switch (l) {
            case "replace":
              switch (p) {
                case 2:
                  return u.set(y, m);
                case 3:
                  ut(16);
                default:
                  return (u[y] = m);
              }
            case n:
              switch (p) {
                case 1:
                  return y === "-" ? u.push(m) : u.splice(y, 0, m);
                case 2:
                  return u.set(y, m);
                case 3:
                  return u.add(m);
                default:
                  return (u[y] = m);
              }
            case "remove":
              switch (p) {
                case 1:
                  return u.splice(y, 1);
                case 2:
                  return u.delete(y);
                case 3:
                  return u.delete(o.value);
                default:
                  return delete u[y];
              }
            default:
              ut(17, l);
          }
        }),
        r
      );
    },
    N: function (r, i, o, a) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, u, s, c) {
            var d = l.t,
              p = l.o;
            mr(l.R, function (m, y) {
              var h = ll(d, m),
                E = ll(p, m),
                f = y ? (sr(d, m) ? "replace" : n) : "remove";
              if (h !== E || f !== "replace") {
                var v = u.concat(m);
                s.push(
                  f === "remove"
                    ? { op: f, path: v }
                    : { op: f, path: v, value: E }
                ),
                  c.push(
                    f === n
                      ? { op: "remove", path: v }
                      : f === "remove"
                      ? { op: n, path: v, value: t(h) }
                      : { op: "replace", path: v, value: t(h) }
                  );
              }
            });
          })(r, i, o, a);
        case 5:
        case 1:
          return (function (l, u, s, c) {
            var d = l.t,
              p = l.R,
              m = l.o;
            if (m.length < d.length) {
              var y = [m, d];
              (d = y[0]), (m = y[1]);
              var h = [c, s];
              (s = h[0]), (c = h[1]);
            }
            for (var E = 0; E < d.length; E++)
              if (p[E] && m[E] !== d[E]) {
                var f = u.concat([E]);
                s.push({ op: "replace", path: f, value: t(m[E]) }),
                  c.push({ op: "replace", path: f, value: t(d[E]) });
              }
            for (var v = d.length; v < m.length; v++) {
              var g = u.concat([v]);
              s.push({ op: n, path: g, value: t(m[v]) });
            }
            d.length < m.length &&
              c.push({
                op: "replace",
                path: u.concat(["length"]),
                value: d.length,
              });
          })(r, i, o, a);
        case 3:
          return (function (l, u, s, c) {
            var d = l.t,
              p = l.o,
              m = 0;
            d.forEach(function (y) {
              if (!p.has(y)) {
                var h = u.concat([m]);
                s.push({ op: "remove", path: h, value: y }),
                  c.unshift({ op: n, path: h, value: y });
              }
              m++;
            }),
              (m = 0),
              p.forEach(function (y) {
                if (!d.has(y)) {
                  var h = u.concat([m]);
                  s.push({ op: n, path: h, value: y }),
                    c.unshift({ op: "remove", path: h, value: y });
                }
                m++;
              });
          })(r, i, o, a);
      }
    },
    M: function (r, i, o, a) {
      o.push({ op: "replace", path: [], value: i === qf ? void 0 : i }),
        a.push({ op: "replace", path: [], value: r });
    },
  });
}
var ch,
  Yo,
  Kf = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  aj = typeof Map < "u",
  lj = typeof Set < "u",
  dh = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  qf = Kf
    ? Symbol.for("immer-nothing")
    : (((ch = {})["immer-nothing"] = !0), ch),
  Co = Kf ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Re = Kf ? Symbol.for("immer-state") : "__$immer_state",
  uj = "" + Object.prototype.constructor,
  Si =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  j1 =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Si(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  yd = {},
  Zo = {
    get: function (e, t) {
      if (t === Re) return e;
      var n = xr(e);
      if (!sr(n, t))
        return (function (i, o, a) {
          var l,
            u = uh(o, a);
          return u
            ? "value" in u
              ? u.value
              : (l = u.get) === null || l === void 0
              ? void 0
              : l.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !dn(r)
        ? r
        : r === qs(e.t, t)
        ? (Ys(e), (e.o[t] = gd(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in xr(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(xr(e));
    },
    set: function (e, t, n) {
      var r = uh(xr(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = qs(xr(e), t),
          o = i == null ? void 0 : i[Re];
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (x1(n, i) && (n !== void 0 || sr(e.t, t))) return !0;
        Ys(e), Zn(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        qs(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), Ys(e), Zn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = xr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      ut(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      ut(12);
    },
  },
  co = {};
mr(Zo, function (e, t) {
  co[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (co.deleteProperty = function (e, t) {
    return co.set.call(this, e, t, void 0);
  }),
  (co.set = function (e, t, n) {
    return Zo.set.call(this, e[0], t, n, e[0]);
  });
var sj = (function () {
    function e(n) {
      var r = this;
      (this.O = dh),
        (this.D = !0),
        (this.produce = function (i, o, a) {
          if (typeof i == "function" && typeof o != "function") {
            var l = o;
            o = i;
            var u = r;
            return function (h) {
              var E = this;
              h === void 0 && (h = l);
              for (
                var f = arguments.length, v = Array(f > 1 ? f - 1 : 0), g = 1;
                g < f;
                g++
              )
                v[g - 1] = arguments[g];
              return u.produce(h, function (w) {
                var S;
                return (S = o).call.apply(S, [E, w].concat(v));
              });
            };
          }
          var s;
          if (
            (typeof o != "function" && ut(6),
            a !== void 0 && typeof a != "function" && ut(7),
            dn(i))
          ) {
            var c = ah(r),
              d = gd(r, i, void 0),
              p = !0;
            try {
              (s = o(d)), (p = !1);
            } finally {
              p ? Hl(c) : vd(c);
            }
            return typeof Promise < "u" && s instanceof Promise
              ? s.then(
                  function (h) {
                    return Gs(c, a), Ks(h, c);
                  },
                  function (h) {
                    throw (Hl(c), h);
                  }
                )
              : (Gs(c, a), Ks(s, c));
          }
          if (!i || typeof i != "object") {
            if (
              ((s = o(i)) === void 0 && (s = i),
              s === qf && (s = void 0),
              r.D && Qf(s, !0),
              a)
            ) {
              var m = [],
                y = [];
              bn("Patches").M(i, s, m, y), a(m, y);
            }
            return s;
          }
          ut(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == "function")
            return function (s) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), p = 1;
                p < c;
                p++
              )
                d[p - 1] = arguments[p];
              return r.produceWithPatches(s, function (m) {
                return i.apply(void 0, [m].concat(d));
              });
            };
          var a,
            l,
            u = r.produce(i, o, function (s, c) {
              (a = s), (l = c);
            });
          return typeof Promise < "u" && u instanceof Promise
            ? u.then(function (s) {
                return [s, a, l];
              })
            : [u, a, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        dn(n) || ut(8), cn(n) && (n = rj(n));
        var r = ah(this),
          i = gd(this, n, void 0);
        return (i[Re].C = !0), vd(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[Re],
          o = i.A;
        return Gs(o, r), Ks(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !dh && ut(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var a = bn("Patches").$;
        return cn(n)
          ? a(n, r)
          : this.produce(n, function (l) {
              return a(l, r);
            });
      }),
      e
    );
  })(),
  Nt = new sj(),
  ma = Nt.produce,
  C1 = Nt.produceWithPatches.bind(Nt);
Nt.setAutoFreeze.bind(Nt);
Nt.setUseProxies.bind(Nt);
var fh = Nt.applyPatches.bind(Nt);
Nt.createDraft.bind(Nt);
Nt.finishDraft.bind(Nt);
function _r(e) {
  "@babel/helpers - typeof";
  return (
    (_r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _r(e)
  );
}
function cj(e, t) {
  if (_r(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (_r(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O1(e) {
  var t = cj(e, "string");
  return _r(t) === "symbol" ? t : String(t);
}
function fo(e, t, n) {
  return (
    (t = O1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ph(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ph(Object(n), !0).forEach(function (r) {
          fo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ph(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function gt(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var mh = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Zs = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Gl = {
    INIT: "@@redux/INIT" + Zs(),
    REPLACE: "@@redux/REPLACE" + Zs(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Zs();
    },
  };
function dj(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function P1(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(gt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(gt(1));
    return n(P1)(e, t);
  }
  if (typeof e != "function") throw new Error(gt(2));
  var i = e,
    o = t,
    a = [],
    l = a,
    u = !1;
  function s() {
    l === a && (l = a.slice());
  }
  function c() {
    if (u) throw new Error(gt(3));
    return o;
  }
  function d(h) {
    if (typeof h != "function") throw new Error(gt(4));
    if (u) throw new Error(gt(5));
    var E = !0;
    return (
      s(),
      l.push(h),
      function () {
        if (E) {
          if (u) throw new Error(gt(6));
          (E = !1), s();
          var v = l.indexOf(h);
          l.splice(v, 1), (a = null);
        }
      }
    );
  }
  function p(h) {
    if (!dj(h)) throw new Error(gt(7));
    if (typeof h.type > "u") throw new Error(gt(8));
    if (u) throw new Error(gt(9));
    try {
      (u = !0), (o = i(o, h));
    } finally {
      u = !1;
    }
    for (var E = (a = l), f = 0; f < E.length; f++) {
      var v = E[f];
      v();
    }
    return h;
  }
  function m(h) {
    if (typeof h != "function") throw new Error(gt(10));
    (i = h), p({ type: Gl.REPLACE });
  }
  function y() {
    var h,
      E = d;
    return (
      (h = {
        subscribe: function (v) {
          if (typeof v != "object" || v === null) throw new Error(gt(11));
          function g() {
            v.next && v.next(c());
          }
          g();
          var w = E(g);
          return { unsubscribe: w };
        },
      }),
      (h[mh] = function () {
        return this;
      }),
      h
    );
  }
  return (
    p({ type: Gl.INIT }),
    (r = { dispatch: p, subscribe: d, getState: c, replaceReducer: m }),
    (r[mh] = y),
    r
  );
}
function fj(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Gl.INIT });
    if (typeof r > "u") throw new Error(gt(12));
    if (typeof n(void 0, { type: Gl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(gt(13));
  });
}
function I1(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    a;
  try {
    fj(n);
  } catch (l) {
    a = l;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), a)) throw a;
    for (var c = !1, d = {}, p = 0; p < o.length; p++) {
      var m = o[p],
        y = n[m],
        h = u[m],
        E = y(h, s);
      if (typeof E > "u") throw (s && s.type, new Error(gt(14)));
      (d[m] = E), (c = c || E !== h);
    }
    return (c = c || o.length !== Object.keys(u).length), c ? d : u;
  };
}
function Kl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function pj() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(gt(15));
        },
        a = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = t.map(function (u) {
          return u(a);
        });
      return (
        (o = Kl.apply(void 0, l)(i.dispatch)),
        le(le({}, i), {}, { dispatch: o })
      );
    };
  };
}
var ql = "NOT_FOUND";
function mj(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : ql;
    },
    put: function (r, i) {
      t = { key: r, value: i };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function hj(e, t) {
  var n = [];
  function r(l) {
    var u = n.findIndex(function (c) {
      return t(l, c.key);
    });
    if (u > -1) {
      var s = n[u];
      return u > 0 && (n.splice(u, 1), n.unshift(s)), s.value;
    }
    return ql;
  }
  function i(l, u) {
    r(l) === ql && (n.unshift({ key: l, value: u }), n.length > e && n.pop());
  }
  function o() {
    return n;
  }
  function a() {
    n = [];
  }
  return { get: r, put: i, getEntries: o, clear: a };
}
var vj = function (t, n) {
  return t === n;
};
function gj(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var i = n.length, o = 0; o < i; o++) if (!e(n[o], r[o])) return !1;
    return !0;
  };
}
function Sd(e, t) {
  var n = typeof t == "object" ? t : { equalityCheck: t },
    r = n.equalityCheck,
    i = r === void 0 ? vj : r,
    o = n.maxSize,
    a = o === void 0 ? 1 : o,
    l = n.resultEqualityCheck,
    u = gj(i),
    s = a === 1 ? mj(u) : hj(a, u);
  function c() {
    var d = s.get(arguments);
    if (d === ql) {
      if (((d = e.apply(null, arguments)), l)) {
        var p = s.getEntries(),
          m = p.find(function (y) {
            return l(y.value, d);
          });
        m && (d = m.value);
      }
      s.put(arguments, d);
    }
    return d;
  }
  return (
    (c.clearCache = function () {
      return s.clear();
    }),
    c
  );
}
function yj(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == "function";
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == "function"
          ? "function " + (r.name || "unnamed") + "()"
          : typeof r;
      })
      .join(", ");
    throw new Error(
      "createSelector expects all input-selectors to be functions, but received the following types: [" +
        n +
        "]"
    );
  }
  return t;
}
function Sj(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = function () {
    for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++)
      l[u] = arguments[u];
    var s = 0,
      c,
      d = { memoizeOptions: void 0 },
      p = l.pop();
    if (
      (typeof p == "object" && ((d = p), (p = l.pop())), typeof p != "function")
    )
      throw new Error(
        "createSelector expects an output function after the inputs, but received: [" +
          typeof p +
          "]"
      );
    var m = d,
      y = m.memoizeOptions,
      h = y === void 0 ? n : y,
      E = Array.isArray(h) ? h : [h],
      f = yj(l),
      v = e.apply(
        void 0,
        [
          function () {
            return s++, p.apply(null, arguments);
          },
        ].concat(E)
      ),
      g = e(function () {
        for (var S = [], b = f.length, x = 0; x < b; x++)
          S.push(f[x].apply(null, arguments));
        return (c = v.apply(null, S)), c;
      });
    return (
      Object.assign(g, {
        resultFunc: p,
        memoizedResultFunc: v,
        dependencies: f,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return s;
        },
        resetRecomputations: function () {
          return (s = 0);
        },
      }),
      g
    );
  };
  return i;
}
var Oo = Sj(Sd);
function M1(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (a) {
      return function (l) {
        return typeof l == "function" ? l(i, o, e) : a(l);
      };
    };
  };
  return t;
}
var k1 = M1();
k1.withExtraArgument = M1;
const hh = k1;
var R1 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  wj =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        a;
      return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function l(s) {
        return function (c) {
          return u([s, c]);
        };
      }
      function u(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, s[1])).done)
            )
              return o;
            switch (((i = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Ri =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  Ej = Object.defineProperty,
  bj = Object.defineProperties,
  xj = Object.getOwnPropertyDescriptors,
  vh = Object.getOwnPropertySymbols,
  Fj = Object.prototype.hasOwnProperty,
  jj = Object.prototype.propertyIsEnumerable,
  gh = function (e, t, n) {
    return t in e
      ? Ej(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  cr = function (e, t) {
    for (var n in t || (t = {})) Fj.call(t, n) && gh(e, n, t[n]);
    if (vh)
      for (var r = 0, i = vh(t); r < i.length; r++) {
        var n = i[r];
        jj.call(t, n) && gh(e, n, t[n]);
      }
    return e;
  },
  Xs = function (e, t) {
    return bj(e, xj(t));
  },
  Cj = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (u) {
          try {
            l(n.next(u));
          } catch (s) {
            i(s);
          }
        },
        a = function (u) {
          try {
            l(n.throw(u));
          } catch (s) {
            i(s);
          }
        },
        l = function (u) {
          return u.done ? r(u.value) : Promise.resolve(u.value).then(o, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  Oj =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Kl
              : Kl.apply(null, arguments);
        };
function vr(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var Pj = (function (e) {
    R1(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Ri([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Ri([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  Ij = (function (e) {
    R1(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Ri([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Ri([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function wd(e) {
  return dn(e) ? ma(e, function () {}) : e;
}
function Mj(e) {
  return typeof e == "boolean";
}
function kj() {
  return function (t) {
    return Rj(t);
  };
}
function Rj(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new Pj();
  return (
    n && (Mj(n) ? r.push(hh) : r.push(hh.withExtraArgument(n.extraArgument))), r
  );
}
var Aj = !0;
function Uj(e) {
  var t = kj(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    a = o === void 0 ? t() : o,
    l = n.devTools,
    u = l === void 0 ? !0 : l,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    d = n.enhancers,
    p = d === void 0 ? void 0 : d,
    m;
  if (typeof i == "function") m = i;
  else if (vr(i)) m = I1(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var y = a;
  typeof y == "function" && (y = y(t));
  var h = pj.apply(void 0, y),
    E = Kl;
  u && (E = Oj(cr({ trace: !Aj }, typeof u == "object" && u)));
  var f = new Ij(h),
    v = f;
  Array.isArray(p) ? (v = Ri([h], p)) : typeof p == "function" && (v = p(f));
  var g = E.apply(void 0, v);
  return P1(m, c, g);
}
function It(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error("prepareAction did not return an object");
      return cr(
        cr({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function A1(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (o, a) {
        var l = typeof o == "string" ? o : o.type;
        if (l in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[l] = a), i;
      },
      addMatcher: function (o, a) {
        return n.push({ matcher: o, reducer: a }), i;
      },
      addDefaultCase: function (o) {
        return (r = o), i;
      },
    };
  return e(i), [t, n, r];
}
function Tj(e) {
  return typeof e == "function";
}
function Dj(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? A1(t) : [t, n, r],
    o = i[0],
    a = i[1],
    l = i[2],
    u;
  if (Tj(e))
    u = function () {
      return wd(e());
    };
  else {
    var s = wd(e);
    u = function () {
      return s;
    };
  }
  function c(d, p) {
    d === void 0 && (d = u());
    var m = Ri(
      [o[p.type]],
      a
        .filter(function (y) {
          var h = y.matcher;
          return h(p);
        })
        .map(function (y) {
          var h = y.reducer;
          return h;
        })
    );
    return (
      m.filter(function (y) {
        return !!y;
      }).length === 0 && (m = [l]),
      m.reduce(function (y, h) {
        if (h)
          if (cn(y)) {
            var E = y,
              f = h(E, p);
            return f === void 0 ? y : f;
          } else {
            if (dn(y))
              return ma(y, function (v) {
                return h(v, p);
              });
            var f = h(y, p);
            if (f === void 0) {
              if (y === null) return y;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return f;
          }
        return y;
      }, d)
    );
  }
  return (c.getInitialState = u), c;
}
function Lj(e, t) {
  return e + "/" + t;
}
function Fr(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : wd(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    o = {},
    a = {},
    l = {};
  i.forEach(function (c) {
    var d = r[c],
      p = Lj(t, c),
      m,
      y;
    "reducer" in d ? ((m = d.reducer), (y = d.prepare)) : (m = d),
      (o[c] = m),
      (a[p] = m),
      (l[c] = y ? It(p, y) : It(p));
  });
  function u() {
    var c =
        typeof e.extraReducers == "function"
          ? A1(e.extraReducers)
          : [e.extraReducers],
      d = c[0],
      p = d === void 0 ? {} : d,
      m = c[1],
      y = m === void 0 ? [] : m,
      h = c[2],
      E = h === void 0 ? void 0 : h,
      f = cr(cr({}, p), a);
    return Dj(n, function (v) {
      for (var g in f) v.addCase(g, f[g]);
      for (var w = 0, S = y; w < S.length; w++) {
        var b = S[w];
        v.addMatcher(b.matcher, b.reducer);
      }
      E && v.addDefaultCase(E);
    });
  }
  var s;
  return {
    name: t,
    reducer: function (c, d) {
      return s || (s = u()), s(c, d);
    },
    actions: l,
    caseReducers: o,
    getInitialState: function () {
      return s || (s = u()), s.getInitialState();
    },
  };
}
var Nj = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  U1 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += Nj[(Math.random() * 64) | 0];
    return t;
  },
  $j = ["name", "message", "stack", "code"],
  Js = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  yh = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  _j = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = $j; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Sh = (function () {
    function e(t, n, r) {
      var i = It(t + "/fulfilled", function (s, c, d, p) {
          return {
            payload: s,
            meta: Xs(cr({}, p || {}), {
              arg: d,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        o = It(t + "/pending", function (s, c, d) {
          return {
            payload: void 0,
            meta: Xs(cr({}, d || {}), {
              arg: c,
              requestId: s,
              requestStatus: "pending",
            }),
          };
        }),
        a = It(t + "/rejected", function (s, c, d, p, m) {
          return {
            payload: p,
            error: ((r && r.serializeError) || _j)(s || "Rejected"),
            meta: Xs(cr({}, m || {}), {
              arg: d,
              requestId: c,
              rejectedWithValue: !!p,
              requestStatus: "rejected",
              aborted: (s == null ? void 0 : s.name) === "AbortError",
              condition: (s == null ? void 0 : s.name) === "ConditionError",
            }),
          };
        }),
        l =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function s() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (s.prototype.abort = function () {}), s;
              })();
      function u(s) {
        return function (c, d, p) {
          var m = r != null && r.idGenerator ? r.idGenerator(s) : U1(),
            y = new l(),
            h;
          function E(v) {
            (h = v), y.abort();
          }
          var f = (function () {
            return Cj(this, null, function () {
              var v, g, w, S, b, x, j;
              return wj(this, function (P) {
                switch (P.label) {
                  case 0:
                    return (
                      P.trys.push([0, 4, , 5]),
                      (S =
                        (v = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : v.call(r, s, { getState: d, extra: p })),
                      Bj(S) ? [4, S] : [3, 2]
                    );
                  case 1:
                    (S = P.sent()), (P.label = 2);
                  case 2:
                    if (S === !1 || y.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (b = new Promise(function (C, M) {
                        return y.signal.addEventListener("abort", function () {
                          return M({
                            name: "AbortError",
                            message: h || "Aborted",
                          });
                        });
                      })),
                      c(
                        o(
                          m,
                          s,
                          (g = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : g.call(
                                r,
                                { requestId: m, arg: s },
                                { getState: d, extra: p }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          b,
                          Promise.resolve(
                            n(s, {
                              dispatch: c,
                              getState: d,
                              extra: p,
                              requestId: m,
                              signal: y.signal,
                              abort: E,
                              rejectWithValue: function (C, M) {
                                return new Js(C, M);
                              },
                              fulfillWithValue: function (C, M) {
                                return new yh(C, M);
                              },
                            })
                          ).then(function (C) {
                            if (C instanceof Js) throw C;
                            return C instanceof yh
                              ? i(C.payload, m, s, C.meta)
                              : i(C, m, s);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (w = P.sent()), [3, 5];
                  case 4:
                    return (
                      (x = P.sent()),
                      (w =
                        x instanceof Js
                          ? a(null, m, s, x.payload, x.meta)
                          : a(x, m, s)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (j =
                        r &&
                        !r.dispatchConditionRejection &&
                        a.match(w) &&
                        w.meta.condition),
                      j || c(w),
                      [2, w]
                    );
                }
              });
            });
          })();
          return Object.assign(f, {
            abort: E,
            requestId: m,
            arg: s,
            unwrap: function () {
              return f.then(zj);
            },
          });
        };
      }
      return Object.assign(u, {
        pending: o,
        rejected: a,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function zj(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Bj(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Vj = function (e) {
    return e && typeof e.match == "function";
  },
  T1 = function (e, t) {
    return Vj(e) ? e.match(t) : e(t);
  };
function zi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return T1(r, n);
    });
  };
}
function Po() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return T1(r, n);
    });
  };
}
function ts(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function ha(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function Yf() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ts(n, ["pending"]);
      }
    : ha(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.pending;
          }),
          i = zi.apply(void 0, r);
        return i(n);
      }
    : Yf()(e[0]);
}
function Xo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ts(n, ["rejected"]);
      }
    : ha(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.rejected;
          }),
          i = zi.apply(void 0, r);
        return i(n);
      }
    : Xo()(e[0]);
}
function ns() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var i = Po(Xo.apply(void 0, e), n);
        return i(r);
      }
    : ha(e)
    ? function (r) {
        var i = Po(Xo.apply(void 0, e), n);
        return i(r);
      }
    : ns()(e[0]);
}
function Wr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ts(n, ["fulfilled"]);
      }
    : ha(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.fulfilled;
          }),
          i = zi.apply(void 0, r);
        return i(n);
      }
    : Wr()(e[0]);
}
function Ed() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ts(n, ["pending", "fulfilled", "rejected"]);
      }
    : ha(e)
    ? function (n) {
        for (var r = [], i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          r.push(a.pending, a.rejected, a.fulfilled);
        }
        var l = zi.apply(void 0, r);
        return l(n);
      }
    : Ed()(e[0]);
}
var Zf = "listenerMiddleware";
It(Zf + "/add");
It(Zf + "/removeAll");
It(Zf + "/remove");
var po = "RTK_autoBatch",
  ec = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[po] = !0), t) };
    };
  },
  wh;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
ij();
const Hj = {
    name: "",
    avatar: "",
    subId: "",
    userDetails: {
      lang: "",
      interests: ["swimming"],
      birthYear: "",
      nationality: "",
      location: "",
      gender: "",
      occupation: "",
      bio: "",
    },
    connectedUser: {
      name: "",
      avatar: "",
      subId: "",
      lang: "",
      interests: [],
      birthYear: "",
      nationality: "",
      location: "",
      gender: "",
      occupation: "",
      bio: "",
    },
    selectedUserToChat: {
      name: "",
      avatar: "",
      subId: "",
      lang: "",
      interests: [],
      birthYear: "",
      nationality: "",
      location: "",
      gender: "",
      occupation: "",
      bio: "",
    },
  },
  Xf = Fr({
    name: "userRegister",
    initialState: Hj,
    reducers: {
      addDetail: (e, t) => {
        const { field: n, value: r } = t.payload;
        e.userDetails[n] = r;
      },
      addAllDetails: (e, t) => {
        const n = t.payload.isConnectedUser
          ? "connectedUser"
          : "selectedUserToChat";
        (e[n].name = t.payload.name),
          (e[n].avatar = t.payload.avatar),
          (e[n].subId = t.payload.subId),
          (e[n].lang = t.payload.userDetails.nativeLanguage),
          (e[n].interests = t.payload.userDetails.interests),
          (e[n].birthYear = t.payload.userDetails.yearOfBirth),
          (e[n].nationality = t.payload.userDetails.nationality),
          (e[n].location = t.payload.userDetails.address),
          (e[n].gender = t.payload.userDetails.gender),
          (e[n].occupation = t.payload.userDetails.occupation),
          (e[n].bio = t.payload.userDetails.bio),
          console.log("state", e);
      },
    },
  }),
  { addDetail: _n, addAllDetails: Wj } = Xf.actions,
  Qj = Xf.reducer,
  Gj = () => {
    const [e, t] = O.useState({ value: "", field: "nativeLanguage" }),
      n = jn();
    return F.jsxs("div", {
      children: [
        F.jsx(xe, {
          direction: "vertical",
          margin: "5%",
          children: F.jsx(Hr, {
            leftIcon: F.jsx(Lt, { to: "/intro", children: F.jsx(Li, {}) }),
            title: "Add Language",
          }),
        }),
        F.jsxs(Vr, {
          children: [
            F.jsx(xe, { direction: "vertical", margin: "1.75rem" }),
            F.jsx(xe, {
              direction: "horizontal",
              margin: "35rem",
              children: F.jsx(pa, { children: "Choose your Language" }),
            }),
            F.jsx(xe, { direction: "vertical", margin: "9.25rem" }),
            F.jsxs(ct, {
              children: [
                F.jsx(od, { letter: "ع" }),
                F.jsx(xe, { direction: "horizontal", margin: "0.9rem" }),
                F.jsx(jo, {
                  bg: e.value === "AR" ? "#50924E" : "#FFFFFF",
                  color: e.value === "AR" ? "#FFFFFF" : "#000000",
                  onClick: () => t({ ...e, value: "AR" }),
                  children: "Arabic",
                }),
              ],
            }),
            F.jsx(xe, { direction: "vertical", margin: "3rem" }),
            F.jsxs(ct, {
              children: [
                F.jsx(od, { letter: "ע" }),
                F.jsx(xe, { direction: "horizontal", margin: "0.9rem" }),
                F.jsx(jo, {
                  bg: e.value === "HE" ? "#50924E" : "#FFFFFF",
                  color: e.value === "HE" ? "#FFFFFF" : "#000000",
                  onClick: () => t({ ...e, value: "HE" }),
                  children: "Hebrew",
                }),
              ],
            }),
            F.jsx(fa, {
              to: e.value ? "/interests" : null,
              onClick: () => {
                e.value && (n(_n(e)), t({ ...e, value: "" }));
              },
              bg: e.value ? "#50924E" : "#d7ddd6",
              hoverBg: e.value ? "#396d37" : "#d7ddd6",
              text: "Save & Next",
            }),
          ],
        }),
      ],
    });
  },
  Kj = [
    "📖 Reading",
    "🌿 Gardening",
    "👩‍🍳 Cooking",
    "🎨 Painting",
    "📸 Photography",
    "🥾 Hiking",
    "🎸 instruments",
    "🎤 Singing",
    "💃 Dancing",
    "✍️ Writing",
    "🧶 Knitting",
    "🧘‍♀️ Yoga",
    "🚲 Cycling",
    "🏊‍♂️ Swimming",
    "♟️ Chess",
    "🎮 Gaming",
    "🎥 Movies",
    "🎧 Music",
    "🏃‍♂️ Running",
    "🚅 Traveling",
    "🐟 Fishing",
    "⚽️ Football",
    "🏀 Basketball",
    "🎨 Drawing",
    "🏺 Pottery",
    "🪵 DIY",
    "📮 Stamps",
    "🎲 Board games",
    "🦜 Bird-fan",
    "🧵 Sewing",
    "🫂 Volunteer",
  ];
J.div`
  width: 100vw;
  margin-top: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
J.div`
  font-family: "Poppins", sans-serif;

  color: #fff;
  font-size: 300%;

  margin-left: 10%;
`;
J.div`
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-size: 250%;
`;
J.div``;
const qj = J.div`
  width: 100vw;
  height: 90vh;
  margin-top: 5%;

  background-color: #fff;
  border-radius: 40px;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  color: #000;
`;
J.div`
  font-family: "Poppins", sans-serif;
  color: #161616;
  font-size: 250%;
`;
const Yj = J.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  Zj = J.button`
  font-family: "Poppins", sans-serif;

  padding: 3% 30%;
  border-radius: 10px;

  background-color: #50924e;
  color: #fff;

  font-size: 220%;
  font-style: italic;
  border: none;
`,
  Xj = {
    margin: 0,
    padding: 0,
    fontSize: "62.5%",
    backgroundColor: " #50924e",
    color: "#fff",
  },
  Jj = {
    color: "white",
    fontSize: "1.2rem",
    backgroundColor: "#50924e",
    borderRadius: "4rem",
    border: "none",
    padding: "0.7rem",
    margin: "0.2rem 0.3rem",
  },
  eC = {
    fontSize: "1.2rem",
    backgroundColor: "#EDF2F7",
    borderRadius: "4rem",
    border: "none",
    padding: "1rem",
    margin: "0.3rem 0.3rem",
  },
  tC = {
    fontSize: "1rem",
    padding: "0.4rem",
    border: "none",
    margin: "1rem",
    fontWeight: "500",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    lineHeight: "1.6rem",
    flexWrap: "wrap",
  },
  nC = () => {
    const e = _i(),
      t = jn(),
      [n, r] = O.useState(!1),
      [i, o] = O.useState(!0),
      { interests: a } = Bu((y) => y.userRegister.userDetails),
      [l, u] = O.useState({
        field: "interests",
        value: a.length > 0 ? a : [],
        interestsNumber: a.length > 0 ? a.length : 0,
      }),
      { value: s, interestsNumber: c } = l,
      d = (y) => {
        let h = s;
        const E = y.split(" ")[1];
        if (h.indexOf(E) !== -1) return;
        if (s.length === 5) return r(!0);
        const v = [...s, E];
        u({ ...l, value: v, interestsNumber: v.length });
      },
      p = (y) => {
        const h = s.filter((E) => E != y);
        u({ ...l, value: h, interestsNumber: h.length });
      },
      m = () => {
        t(_n(l)), e("/agePage");
      };
    return (
      O.useEffect(() => o(c !== 5), [c]),
      O.useEffect(() => {
        t(_n(l));
      }, [l]),
      F.jsxs("div", {
        style: Xj,
        children: [
          F.jsx(Hr, {
            leftIcon: F.jsx(Lt, { to: "/lang", children: F.jsx(Li, {}) }),
            title: "Add Interests",
          }),
          F.jsxs(Vr, {
            children: [
              F.jsx(xe, {
                direction: "horizontal",
                margin: "35rem",
                children: F.jsxs(pa, {
                  style: { marginTop: "2rem" },
                  children: [
                    "Choose five interests             ",
                    c,
                    " of 5",
                    " ",
                  ],
                }),
              }),
              F.jsxs(qj, {
                children: [
                  n &&
                    F.jsx("h1", {
                      style: { color: "red" },
                      children: "* max Interests Number, were selected",
                    }),
                  F.jsx("div", {
                    style: tC,
                    children: s.map((y) =>
                      F.jsxs(
                        "button",
                        {
                          style: Jj,
                          onClick: () => p(y),
                          children: [y, F.jsx("span", { children: " X" })],
                        },
                        y
                      )
                    ),
                  }),
                  F.jsx("div", {
                    children: Kj.map((y) =>
                      F.jsx(
                        "span",
                        {
                          children: F.jsx("button", {
                            style: eC,
                            onClick: () => d(y),
                            children: y,
                          }),
                        },
                        y
                      )
                    ),
                  }),
                  F.jsx(Yj, {
                    children: F.jsx(Zj, {
                      onClick: m,
                      disabled: i,
                      children: "Save & Next",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  rC = () => {
    const e = jn(),
      t = _i(),
      { occupation: n } = Bu((a) => a.userRegister.userDetails),
      [r, i] = O.useState({
        field: "occupation",
        value: n.length > 0 ? n : "",
      }),
      { value: o } = r;
    return F.jsxs("div", {
      children: [
        F.jsx(Hr, {
          leftIcon: F.jsx(Lt, { to: "/gender", children: F.jsx(Li, {}) }),
          title: "Add Occupation",
        }),
        F.jsxs(Vr, {
          children: [
            F.jsx(xe, { direction: "vertical", margin: "1.75rem" }),
            F.jsx(xe, {
              direction: "horizontal",
              margin: "35rem",
              children: F.jsx(pa, { children: "Add your Occupation" }),
            }),
            F.jsx(xe, { direction: "vertical", margin: "1.8rem" }),
            F.jsx(c1, {
              type: "text",
              value: o,
              maxLength: 30,
              onChange: (a) => i({ ...r, value: a.target.value }),
              placeholder: "Write Here... For example: Doctor",
            }),
            F.jsx(xe, { direction: "vertical", margin: "2.6rem" }),
            F.jsxs(ct, {
              children: [
                F.jsx(xe, { direction: "horizontal", margin: "25rem" }),
                F.jsx(s1, {
                  fontSize: "12px",
                  color: "#7F8790",
                  alignSelf: "flex-end",
                  children: "30 Character",
                }),
              ],
            }),
            F.jsx(fa, {
              to: "/bioPage",
              disabled: !o,
              onClick: () => {
                e(_n(r)), i({ ...r, value: "" }), t("/bioPage");
              },
              bg: o ? "#50924E" : "#d7ddd6",
              hoverBg: o ? "#396d37" : "#d7ddd6",
              text: "Save & Next",
            }),
          ],
        }),
      ],
    });
  },
  iC = ({ profile: e, nameCon: t, contentCon: n }) =>
    F.jsxs(fF, {
      children: [
        F.jsx(pF, { profile: e }),
        F.jsxs(mF, {
          children: [F.jsx("p", { children: t }), F.jsx("p", { children: n })],
        }),
      ],
    }),
  oC = ({ prevConversation: e }) =>
    F.jsxs("div", {
      children: [
        F.jsx(xe, {
          direction: "vertical",
          margin: "5%",
          children: F.jsx(Hr, {
            leftIcon: F.jsx(Lt, { to: "/", children: F.jsx(AE, {}) }),
            title: F.jsx(TE, {}),
          }),
        }),
        F.jsx(Vr, {
          children:
            e.length !== 0
              ? F.jsxs(nh, {
                  children: [
                    F.jsx("div", { children: "Conversation" }),
                    F.jsx(hF, {
                      children: e.map((t, n) =>
                        F.jsx(
                          iC,
                          {
                            nameCon: t.name,
                            contentCon: t.lastCon,
                            profile: t.profile,
                          },
                          n
                        )
                      ),
                    }),
                    F.jsx(vF, {}),
                    F.jsx(rh, { children: "Search for friends to chat" }),
                  ],
                })
              : F.jsxs(nh, {
                  children: [
                    F.jsx(gF, { children: "No Conversation" }),
                    F.jsx(rF, {
                      children:
                        "Add some friends and start chatting with them, Your conversations will show up here.",
                    }),
                    F.jsx(rh, { children: "Search for friends to chat" }),
                  ],
                }),
        }),
      ],
    }),
  Jf = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    background-color: #50924e;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`,
  ep = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem 1.2rem 1.5rem;
    margin: 1rem 0;
    box-sizing: border-box;
  }
`,
  tp = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 50%;
  }
`,
  np = J.label`
  @media (min-width: 350px) and (max-width: 700px) {
    font-weight: 1000;
    color: #ffffff;
    font-size: 2rem;
  }
`,
  rp = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    background-color: #fafafa;
    border-radius: 2.5rem 2.5rem 0 0;
    flex: 1 2 20%;
  }
`,
  ip = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    padding: 2rem 0 2rem 2rem;
    box-sizing: border-box;
    font-size: 2.06rem;
    font-weight: 1000;
  }
`,
  op = J.button`
  @media (min-width: 350px) and (max-width: 700px) {
    width: 90%;
    height: 5rem;
    margin: 0 auto 0.5rem auto;
    background-color: #50924e;
    border-radius: 0.6rem;
    border: none;
    color: #ffffff;
  }
`,
  ap = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    align-items: center;
    height: 70%;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0.5rem 0;
  }
`;
function aC(e) {
  if (Array.isArray(e)) return e;
}
function lC(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      o,
      a,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== t);
          u = !0
        );
    } catch (c) {
      (s = !0), (i = c);
    } finally {
      try {
        if (!u && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function D1(e, t) {
  if (e) {
    if (typeof e == "string") return bd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bd(e, t);
  }
}
function uC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tn(e, t) {
  return aC(e) || lC(e, t) || D1(e, t) || uC();
}
function Bi(e, t) {
  if (e == null) return {};
  var n = md(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
var sC = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function L1(e) {
  var t = e.defaultInputValue,
    n = t === void 0 ? "" : t,
    r = e.defaultMenuIsOpen,
    i = r === void 0 ? !1 : r,
    o = e.defaultValue,
    a = o === void 0 ? null : o,
    l = e.inputValue,
    u = e.menuIsOpen,
    s = e.onChange,
    c = e.onInputChange,
    d = e.onMenuClose,
    p = e.onMenuOpen,
    m = e.value,
    y = Bi(e, sC),
    h = O.useState(l !== void 0 ? l : n),
    E = Tn(h, 2),
    f = E[0],
    v = E[1],
    g = O.useState(u !== void 0 ? u : i),
    w = Tn(g, 2),
    S = w[0],
    b = w[1],
    x = O.useState(m !== void 0 ? m : a),
    j = Tn(x, 2),
    P = j[0],
    C = j[1],
    M = O.useCallback(
      function (k, V) {
        typeof s == "function" && s(k, V), C(k);
      },
      [s]
    ),
    R = O.useCallback(
      function (k, V) {
        var B;
        typeof c == "function" && (B = c(k, V)), v(B !== void 0 ? B : k);
      },
      [c]
    ),
    A = O.useCallback(
      function () {
        typeof p == "function" && p(), b(!0);
      },
      [p]
    ),
    T = O.useCallback(
      function () {
        typeof d == "function" && d(), b(!1);
      },
      [d]
    ),
    N = l !== void 0 ? l : f,
    W = u !== void 0 ? u : S,
    q = m !== void 0 ? m : P;
  return le(
    le({}, y),
    {},
    {
      inputValue: N,
      menuIsOpen: W,
      onChange: M,
      onInputChange: R,
      onMenuClose: T,
      onMenuOpen: A,
      value: q,
    }
  );
}
function cC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, O1(r.key), r);
  }
}
function dC(e, t, n) {
  return (
    t && Eh(e.prototype, t),
    n && Eh(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Yl(e, t) {
  return (
    (Yl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Yl(e, t)
  );
}
function fC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Yl(e, t);
}
function Zl(e) {
  return (
    (Zl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Zl(e)
  );
}
function pC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Jo(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function mC(e, t) {
  if (t && (_r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Jo(e);
}
function hC(e) {
  var t = pC();
  return function () {
    var r = Zl(e),
      i;
    if (t) {
      var o = Zl(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return mC(this, i);
  };
}
function vC(e) {
  if (Array.isArray(e)) return bd(e);
}
function gC(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function yC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N1(e) {
  return vC(e) || gC(e) || D1(e) || yC();
}
function SC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function wC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var EC = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(wC(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = SC(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  vt = "-ms-",
  Xl = "-moz-",
  we = "-webkit-",
  $1 = "comm",
  lp = "rule",
  up = "decl",
  bC = "@import",
  _1 = "@keyframes",
  xC = "@layer",
  FC = Math.abs,
  rs = String.fromCharCode,
  jC = Object.assign;
function CC(e, t) {
  return lt(e, 0) ^ 45
    ? (((((((t << 2) ^ lt(e, 0)) << 2) ^ lt(e, 1)) << 2) ^ lt(e, 2)) << 2) ^
        lt(e, 3)
    : 0;
}
function z1(e) {
  return e.trim();
}
function OC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ee(e, t, n) {
  return e.replace(t, n);
}
function xd(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ea(e, t, n) {
  return e.slice(t, n);
}
function mn(e) {
  return e.length;
}
function sp(e) {
  return e.length;
}
function $a(e, t) {
  return t.push(e), e;
}
function PC(e, t) {
  return e.map(t).join("");
}
var is = 1,
  Ai = 1,
  B1 = 0,
  Mt = 0,
  qe = 0,
  Vi = "";
function os(e, t, n, r, i, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: is,
    column: Ai,
    length: a,
    return: "",
  };
}
function ro(e, t) {
  return jC(os("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function IC() {
  return qe;
}
function MC() {
  return (
    (qe = Mt > 0 ? lt(Vi, --Mt) : 0), Ai--, qe === 10 && ((Ai = 1), is--), qe
  );
}
function Tt() {
  return (
    (qe = Mt < B1 ? lt(Vi, Mt++) : 0), Ai++, qe === 10 && ((Ai = 1), is++), qe
  );
}
function xn() {
  return lt(Vi, Mt);
}
function ul() {
  return Mt;
}
function va(e, t) {
  return ea(Vi, e, t);
}
function ta(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function V1(e) {
  return (is = Ai = 1), (B1 = mn((Vi = e))), (Mt = 0), [];
}
function H1(e) {
  return (Vi = ""), e;
}
function sl(e) {
  return z1(va(Mt - 1, Fd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kC(e) {
  for (; (qe = xn()) && qe < 33; ) Tt();
  return ta(e) > 2 || ta(qe) > 3 ? "" : " ";
}
function RC(e, t) {
  for (
    ;
    --t &&
    Tt() &&
    !(qe < 48 || qe > 102 || (qe > 57 && qe < 65) || (qe > 70 && qe < 97));

  );
  return va(e, ul() + (t < 6 && xn() == 32 && Tt() == 32));
}
function Fd(e) {
  for (; Tt(); )
    switch (qe) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fd(qe);
        break;
      case 40:
        e === 41 && Fd(e);
        break;
      case 92:
        Tt();
        break;
    }
  return Mt;
}
function AC(e, t) {
  for (; Tt() && e + qe !== 47 + 10; )
    if (e + qe === 42 + 42 && xn() === 47) break;
  return "/*" + va(t, Mt - 1) + "*" + rs(e === 47 ? e : Tt());
}
function UC(e) {
  for (; !ta(xn()); ) Tt();
  return va(e, Mt);
}
function TC(e) {
  return H1(cl("", null, null, null, [""], (e = V1(e)), 0, [0], e));
}
function cl(e, t, n, r, i, o, a, l, u) {
  for (
    var s = 0,
      c = 0,
      d = a,
      p = 0,
      m = 0,
      y = 0,
      h = 1,
      E = 1,
      f = 1,
      v = 0,
      g = "",
      w = i,
      S = o,
      b = r,
      x = g;
    E;

  )
    switch (((y = v), (v = Tt()))) {
      case 40:
        if (y != 108 && lt(x, d - 1) == 58) {
          xd((x += Ee(sl(v), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += sl(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += kC(y);
        break;
      case 92:
        x += RC(ul() - 1, 7);
        continue;
      case 47:
        switch (xn()) {
          case 42:
          case 47:
            $a(DC(AC(Tt(), ul()), t, n), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * h:
        l[s++] = mn(x) * f;
      case 125 * h:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            f == -1 && (x = Ee(x, /\f/g, "")),
              m > 0 &&
                mn(x) - d &&
                $a(
                  m > 32
                    ? xh(x + ";", r, n, d - 1)
                    : xh(Ee(x, " ", "") + ";", r, n, d - 2),
                  u
                );
            break;
          case 59:
            x += ";";
          default:
            if (
              ($a((b = bh(x, t, n, s, c, i, l, g, (w = []), (S = []), d)), o),
              v === 123)
            )
              if (c === 0) cl(x, t, b, b, w, o, d, l, S);
              else
                switch (p === 99 && lt(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cl(
                      e,
                      b,
                      b,
                      r && $a(bh(e, b, b, 0, 0, i, l, g, i, (w = []), d), S),
                      i,
                      S,
                      d,
                      l,
                      r ? w : S
                    );
                    break;
                  default:
                    cl(x, b, b, b, [""], S, 0, l, S);
                }
        }
        (s = c = m = 0), (h = f = 1), (g = x = ""), (d = a);
        break;
      case 58:
        (d = 1 + mn(x)), (m = y);
      default:
        if (h < 1) {
          if (v == 123) --h;
          else if (v == 125 && h++ == 0 && MC() == 125) continue;
        }
        switch (((x += rs(v)), v * h)) {
          case 38:
            f = c > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (l[s++] = (mn(x) - 1) * f), (f = 1);
            break;
          case 64:
            xn() === 45 && (x += sl(Tt())),
              (p = xn()),
              (c = d = mn((g = x += UC(ul())))),
              v++;
            break;
          case 45:
            y === 45 && mn(x) == 2 && (h = 0);
        }
    }
  return o;
}
function bh(e, t, n, r, i, o, a, l, u, s, c) {
  for (
    var d = i - 1, p = i === 0 ? o : [""], m = sp(p), y = 0, h = 0, E = 0;
    y < r;
    ++y
  )
    for (var f = 0, v = ea(e, d + 1, (d = FC((h = a[y])))), g = e; f < m; ++f)
      (g = z1(h > 0 ? p[f] + " " + v : Ee(v, /&\f/g, p[f]))) && (u[E++] = g);
  return os(e, t, n, i === 0 ? lp : l, u, s, c);
}
function DC(e, t, n) {
  return os(e, t, n, $1, rs(IC()), ea(e, 2, -2), 0);
}
function xh(e, t, n, r) {
  return os(e, t, n, up, ea(e, 0, r), ea(e, r + 1, -1), r);
}
function wi(e, t) {
  for (var n = "", r = sp(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function LC(e, t, n, r) {
  switch (e.type) {
    case xC:
      if (e.children.length) break;
    case bC:
    case up:
      return (e.return = e.return || e.value);
    case $1:
      return "";
    case _1:
      return (e.return = e.value + "{" + wi(e.children, r) + "}");
    case lp:
      e.value = e.props.join(",");
  }
  return mn((n = wi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function NC(e) {
  var t = sp(e);
  return function (n, r, i, o) {
    for (var a = "", l = 0; l < t; l++) a += e[l](n, r, i, o) || "";
    return a;
  };
}
function $C(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var _C = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = xn()), i === 38 && o === 12 && (n[r] = 1), !ta(o);

    )
      Tt();
    return va(t, Mt);
  },
  zC = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (ta(i)) {
        case 0:
          i === 38 && xn() === 12 && (n[r] = 1), (t[r] += _C(Mt - 1, n, r));
          break;
        case 2:
          t[r] += sl(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = xn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += rs(i);
      }
    while ((i = Tt()));
    return t;
  },
  BC = function (t, n) {
    return H1(zC(V1(t), n));
  },
  Fh = new WeakMap(),
  VC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Fh.get(r)) &&
        !i
      ) {
        Fh.set(t, !0);
        for (
          var o = [], a = BC(n, o), l = r.props, u = 0, s = 0;
          u < a.length;
          u++
        )
          for (var c = 0; c < l.length; c++, s++)
            t.props[s] = o[u] ? a[u].replace(/&\f/g, l[c]) : l[c] + " " + a[u];
      }
    }
  },
  HC = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function W1(e, t) {
  switch (CC(e, t)) {
    case 5103:
      return we + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return we + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + Xl + e + vt + e + e;
    case 6828:
    case 4268:
      return we + e + vt + e + e;
    case 6165:
      return we + e + vt + "flex-" + e + e;
    case 5187:
      return (
        we + e + Ee(e, /(\w+).+(:[^]+)/, we + "box-$1$2" + vt + "flex-$1$2") + e
      );
    case 5443:
      return we + e + vt + "flex-item-" + Ee(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        we +
        e +
        vt +
        "flex-line-pack" +
        Ee(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return we + e + vt + Ee(e, "shrink", "negative") + e;
    case 5292:
      return we + e + vt + Ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        we +
        "box-" +
        Ee(e, "-grow", "") +
        we +
        e +
        vt +
        Ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return we + Ee(e, /([^-])(transform)/g, "$1" + we + "$2") + e;
    case 6187:
      return (
        Ee(
          Ee(Ee(e, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Ee(e, /(image-set\([^]*)/, we + "$1$`$1");
    case 4968:
      return (
        Ee(
          Ee(e, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + vt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        we +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ee(e, /(.+)-inline(.+)/, we + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mn(e) - 1 - t > 6)
        switch (lt(e, t + 1)) {
          case 109:
            if (lt(e, t + 4) !== 45) break;
          case 102:
            return (
              Ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  we +
                  "$2-$3$1" +
                  Xl +
                  (lt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~xd(e, "stretch")
              ? W1(Ee(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (lt(e, t + 1) !== 115) break;
    case 6444:
      switch (lt(e, mn(e) - 3 - (~xd(e, "!important") && 10))) {
        case 107:
          return Ee(e, ":", ":" + we) + e;
        case 101:
          return (
            Ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                we +
                (lt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                we +
                "$2$3$1" +
                vt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (lt(e, t + 11)) {
        case 114:
          return we + e + vt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return we + e + vt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return we + e + vt + Ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return we + e + vt + e + e;
  }
  return e;
}
var WC = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case up:
          t.return = W1(t.value, t.length);
          break;
        case _1:
          return wi([ro(t, { value: Ee(t.value, "@", "@" + we) })], i);
        case lp:
          if (t.length)
            return PC(t.props, function (o) {
              switch (OC(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return wi(
                    [ro(t, { props: [Ee(o, /:(read-\w+)/, ":" + Xl + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return wi(
                    [
                      ro(t, {
                        props: [Ee(o, /:(plac\w+)/, ":" + we + "input-$1")],
                      }),
                      ro(t, { props: [Ee(o, /:(plac\w+)/, ":" + Xl + "$1")] }),
                      ro(t, { props: [Ee(o, /:(plac\w+)/, vt + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  QC = [WC],
  Q1 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (h) {
        var E = h.getAttribute("data-emotion");
        E.indexOf(" ") !== -1 &&
          (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || QC,
      o = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (h) {
          for (
            var E = h.getAttribute("data-emotion").split(" "), f = 1;
            f < E.length;
            f++
          )
            o[E[f]] = !0;
          l.push(h);
        }
      );
    var u,
      s = [VC, HC];
    {
      var c,
        d = [
          LC,
          $C(function (h) {
            c.insert(h);
          }),
        ],
        p = NC(s.concat(i, d)),
        m = function (E) {
          return wi(TC(E), p);
        };
      u = function (E, f, v, g) {
        (c = v),
          m(E ? E + "{" + f.styles + "}" : f.styles),
          g && (y.inserted[f.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new EC({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: u,
    };
    return y.sheet.hydrate(l), y;
  },
  GC = !0;
function KC(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var G1 = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || GC === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  qC = function (t, n, r) {
    G1(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function YC(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var ZC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  XC = /[A-Z]|^ms/g,
  JC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  K1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  jh = function (t) {
    return t != null && typeof t != "boolean";
  },
  tc = R0(function (e) {
    return K1(e) ? e : e.replace(XC, "-$&").toLowerCase();
  }),
  Ch = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(JC, function (r, i, o) {
            return (hn = { name: i, styles: o, next: hn }), i;
          });
    }
    return ZC[t] !== 1 && !K1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function na(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (hn = { name: n.name, styles: n.styles, next: hn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (hn = { name: r.name, styles: r.styles, next: hn }), (r = r.next);
        var i = n.styles + ";";
        return i;
      }
      return e2(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = hn,
          a = n(e);
        return (hn = o), na(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function e2(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += na(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var a = n[o];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += o + "{" + t[a] + "}")
          : jh(a) && (r += tc(o) + ":" + Ch(o, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          jh(a[l]) && (r += tc(o) + ":" + Ch(o, a[l]) + ";");
      else {
        var u = na(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            r += tc(o) + ":" + u + ";";
            break;
          }
          default:
            r += o + "{" + u + "}";
        }
      }
    }
  return r;
}
var Oh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  hn,
  q1 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    hn = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += na(r, n, a)))
      : (o += a[0]);
    for (var l = 1; l < t.length; l++) (o += na(r, n, t[l])), i && (o += a[l]);
    Oh.lastIndex = 0;
    for (var u = "", s; (s = Oh.exec(o)) !== null; ) u += "-" + s[1];
    var c = YC(o) + u;
    return { name: c, styles: o, next: hn };
  },
  t2 = function (t) {
    return t();
  },
  n2 = Ep["useInsertionEffect"] ? Ep["useInsertionEffect"] : !1,
  r2 = n2 || t2,
  cp = {}.hasOwnProperty,
  Y1 = O.createContext(typeof HTMLElement < "u" ? Q1({ key: "css" }) : null),
  i2 = Y1.Provider,
  o2 = function (t) {
    return O.forwardRef(function (n, r) {
      var i = O.useContext(Y1);
      return t(n, i, r);
    });
  },
  a2 = O.createContext({}),
  jd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  l2 = function (t, n) {
    var r = {};
    for (var i in n) cp.call(n, i) && (r[i] = n[i]);
    return (r[jd] = t), r;
  },
  u2 = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      G1(n, r, i),
      r2(function () {
        return qC(n, r, i);
      }),
      null
    );
  },
  s2 = o2(function (e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[jd],
      o = [r],
      a = "";
    typeof e.className == "string"
      ? (a = KC(t.registered, o, e.className))
      : e.className != null && (a = e.className + " ");
    var l = q1(o, void 0, O.useContext(a2));
    a += t.key + "-" + l.name;
    var u = {};
    for (var s in e) cp.call(e, s) && s !== "css" && s !== jd && (u[s] = e[s]);
    return (
      (u.ref = n),
      (u.className = a),
      O.createElement(
        O.Fragment,
        null,
        O.createElement(u2, {
          cache: t,
          serialized: l,
          isStringTag: typeof i == "string",
        }),
        O.createElement(i, u)
      )
    );
  }),
  c2 = s2,
  oe = function (t, n) {
    var r = arguments;
    if (n == null || !cp.call(n, "css"))
      return O.createElement.apply(void 0, r);
    var i = r.length,
      o = new Array(i);
    (o[0] = c2), (o[1] = l2(t, n));
    for (var a = 2; a < i; a++) o[a] = r[a];
    return O.createElement.apply(null, o);
  };
function dp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return q1(t);
}
var d2 = function () {
  var t = dp.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function f2(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
    )
  );
}
function p2(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
const m2 = ["top", "right", "bottom", "left"];
m2.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function yn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Z1(e) {
  return yn(e).getComputedStyle(e);
}
function X1(e) {
  return e instanceof yn(e).Node;
}
function J1(e) {
  return X1(e) ? (e.nodeName || "").toLowerCase() : "";
}
let _a;
function h2() {
  if (_a) return _a;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((_a = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), _a)
    : navigator.userAgent;
}
function fp(e) {
  return e instanceof yn(e).HTMLElement;
}
function Ir(e) {
  return e instanceof yn(e).Element;
}
function Ph(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof yn(e).ShadowRoot || e instanceof ShadowRoot;
}
function ey(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Z1(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(i)
  );
}
function v2() {
  return /^((?!chrome|android).)*safari/i.test(h2());
}
function g2(e) {
  return ["html", "body", "#document"].includes(J1(e));
}
const Jl = Math.round;
function y2(e) {
  const t = Z1(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = fp(e),
    o = i ? e.offsetWidth : n,
    a = i ? e.offsetHeight : r,
    l = Jl(n) !== o || Jl(r) !== a;
  return l && ((n = o), (r = a)), { width: n, height: r, fallback: l };
}
function ty(e) {
  return Ir(e) ? e : e.contextElement;
}
const ny = { x: 1, y: 1 };
function nc(e) {
  const t = ty(e);
  if (!fp(t)) return ny;
  const n = t.getBoundingClientRect(),
    { width: r, height: i, fallback: o } = y2(t);
  let a = (o ? Jl(n.width) : n.width) / r,
    l = (o ? Jl(n.height) : n.height) / i;
  return (
    (a && Number.isFinite(a)) || (a = 1),
    (l && Number.isFinite(l)) || (l = 1),
    { x: a, y: l }
  );
}
function Ih(e, t, n, r) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(),
    l = ty(e);
  let u = ny;
  t && (r ? Ir(r) && (u = nc(r)) : (u = nc(e)));
  const s = l ? yn(l) : window,
    c = v2() && n;
  let d =
      (a.left +
        ((c && ((i = s.visualViewport) == null ? void 0 : i.offsetLeft)) ||
          0)) /
      u.x,
    p =
      (a.top +
        ((c && ((o = s.visualViewport) == null ? void 0 : o.offsetTop)) || 0)) /
      u.y,
    m = a.width / u.x,
    y = a.height / u.y;
  if (l) {
    const h = yn(l),
      E = r && Ir(r) ? yn(r) : r;
    let f = h.frameElement;
    for (; f && r && E !== h; ) {
      const v = nc(f),
        g = f.getBoundingClientRect(),
        w = getComputedStyle(f);
      (g.x += (f.clientLeft + parseFloat(w.paddingLeft)) * v.x),
        (g.y += (f.clientTop + parseFloat(w.paddingTop)) * v.y),
        (d *= v.x),
        (p *= v.y),
        (m *= v.x),
        (y *= v.y),
        (d += g.x),
        (p += g.y),
        (f = yn(f).frameElement);
    }
  }
  return p2({ width: m, height: y, x: d, y: p });
}
function S2(e) {
  return ((X1(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function w2(e) {
  if (J1(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Ph(e) && e.host) || S2(e);
  return Ph(t) ? t.host : t;
}
function ry(e) {
  const t = w2(e);
  return g2(t) ? t.ownerDocument.body : fp(t) && ey(t) ? t : ry(t);
}
function dl(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = ry(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = yn(r);
  return i
    ? t.concat(o, o.visualViewport || [], ey(r) ? r : [])
    : t.concat(r, dl(r));
}
function E2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: a = !0,
      animationFrame: l = !1,
    } = r,
    u =
      i || o
        ? [
            ...(Ir(e) ? dl(e) : e.contextElement ? dl(e.contextElement) : []),
            ...dl(t),
          ]
        : [];
  u.forEach((p) => {
    const m = !Ir(p) && p.toString().includes("V");
    !i || (l && !m) || p.addEventListener("scroll", n, { passive: !0 }),
      o && p.addEventListener("resize", n);
  });
  let s,
    c = null;
  a &&
    ((c = new ResizeObserver(() => {
      n();
    })),
    Ir(e) && !l && c.observe(e),
    Ir(e) || !e.contextElement || l || c.observe(e.contextElement),
    c.observe(t));
  let d = l ? Ih(e) : null;
  return (
    l &&
      (function p() {
        const m = Ih(e);
        !d ||
          (m.x === d.x &&
            m.y === d.y &&
            m.width === d.width &&
            m.height === d.height) ||
          n(),
          (d = m),
          (s = requestAnimationFrame(p));
      })(),
    n(),
    () => {
      var p;
      u.forEach((m) => {
        i && m.removeEventListener("scroll", n),
          o && m.removeEventListener("resize", n);
      }),
        (p = c) == null || p.disconnect(),
        (c = null),
        l && cancelAnimationFrame(s);
    }
  );
}
var Cd = O.useLayoutEffect,
  b2 = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  eu = function () {};
function x2(e, t) {
  return t ? (t[0] === "-" ? e + t : e + "__" + t) : e;
}
function F2(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var o = [].concat(r);
  if (t && e)
    for (var a in t) t.hasOwnProperty(a) && t[a] && o.push("".concat(x2(e, a)));
  return o
    .filter(function (l) {
      return l;
    })
    .map(function (l) {
      return String(l).trim();
    })
    .join(" ");
}
var Mh = function (t) {
    return A2(t)
      ? t.filter(Boolean)
      : _r(t) === "object" && t !== null
      ? [t]
      : [];
  },
  iy = function (t) {
    t.className,
      t.clearValue,
      t.cx,
      t.getStyles,
      t.getClassNames,
      t.getValue,
      t.hasValue,
      t.isMulti,
      t.isRtl,
      t.options,
      t.selectOption,
      t.selectProps,
      t.setValue,
      t.theme;
    var n = Bi(t, b2);
    return le({}, n);
  },
  We = function (t, n, r) {
    var i = t.cx,
      o = t.getStyles,
      a = t.getClassNames,
      l = t.className;
    return { css: o(n, t), className: i(r ?? {}, a(n, t), l) };
  };
function as(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function j2(e) {
  return as(e) ? window.innerHeight : e.clientHeight;
}
function oy(e) {
  return as(e) ? window.pageYOffset : e.scrollTop;
}
function tu(e, t) {
  if (as(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function C2(e) {
  var t = getComputedStyle(e),
    n = t.position === "absolute",
    r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = e; (i = i.parentElement); )
    if (
      ((t = getComputedStyle(i)),
      !(n && t.position === "static") &&
        r.test(t.overflow + t.overflowY + t.overflowX))
    )
      return i;
  return document.documentElement;
}
function O2(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function za(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : eu,
    i = oy(e),
    o = t - i,
    a = 10,
    l = 0;
  function u() {
    l += a;
    var s = O2(l, i, o, n);
    tu(e, s), l < n ? window.requestAnimationFrame(u) : r(e);
  }
  u();
}
function kh(e, t) {
  var n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    i = t.offsetHeight / 3;
  r.bottom + i > n.bottom
    ? tu(
        e,
        Math.min(
          t.offsetTop + t.clientHeight - e.offsetHeight + i,
          e.scrollHeight
        )
      )
    : r.top - i < n.top && tu(e, Math.max(t.offsetTop - i, 0));
}
function P2(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function Rh() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function I2() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var ay = !1,
  M2 = {
    get passive() {
      return (ay = !0);
    },
  },
  Ba = typeof window < "u" ? window : {};
Ba.addEventListener &&
  Ba.removeEventListener &&
  (Ba.addEventListener("p", eu, M2), Ba.removeEventListener("p", eu, !1));
var k2 = ay;
function R2(e) {
  return e != null;
}
function A2(e) {
  return Array.isArray(e);
}
function Va(e, t, n) {
  return e ? t : n;
}
var U2 = function (t) {
  for (
    var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
    i < n;
    i++
  )
    r[i - 1] = arguments[i];
  var o = Object.entries(t).filter(function (a) {
    var l = Tn(a, 1),
      u = l[0];
    return !r.includes(u);
  });
  return o.reduce(function (a, l) {
    var u = Tn(l, 2),
      s = u[0],
      c = u[1];
    return (a[s] = c), a;
  }, {});
};
function T2(e) {
  var t = e.maxHeight,
    n = e.menuEl,
    r = e.minHeight,
    i = e.placement,
    o = e.shouldScroll,
    a = e.isFixedPosition,
    l = e.controlHeight,
    u = C2(n),
    s = { placement: "bottom", maxHeight: t };
  if (!n || !n.offsetParent) return s;
  var c = u.getBoundingClientRect(),
    d = c.height,
    p = n.getBoundingClientRect(),
    m = p.bottom,
    y = p.height,
    h = p.top,
    E = n.offsetParent.getBoundingClientRect(),
    f = E.top,
    v = a ? window.innerHeight : j2(u),
    g = oy(u),
    w = parseInt(getComputedStyle(n).marginBottom, 10),
    S = parseInt(getComputedStyle(n).marginTop, 10),
    b = f - S,
    x = v - h,
    j = b + g,
    P = d - g - h,
    C = m - v + g + w,
    M = g + h - S,
    R = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (x >= y) return { placement: "bottom", maxHeight: t };
      if (P >= y && !a)
        return o && za(u, C, R), { placement: "bottom", maxHeight: t };
      if ((!a && P >= r) || (a && x >= r)) {
        o && za(u, C, R);
        var A = a ? x - w : P - w;
        return { placement: "bottom", maxHeight: A };
      }
      if (i === "auto" || a) {
        var T = t,
          N = a ? b : j;
        return (
          N >= r && (T = Math.min(N - w - l, t)),
          { placement: "top", maxHeight: T }
        );
      }
      if (i === "bottom")
        return o && tu(u, C), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if (b >= y) return { placement: "top", maxHeight: t };
      if (j >= y && !a)
        return o && za(u, M, R), { placement: "top", maxHeight: t };
      if ((!a && j >= r) || (a && b >= r)) {
        var W = t;
        return (
          ((!a && j >= r) || (a && b >= r)) && (W = a ? b - S : j - S),
          o && za(u, M, R),
          { placement: "top", maxHeight: W }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return s;
}
function D2(e) {
  var t = { bottom: "top", top: "bottom" };
  return e ? t[e] : "bottom";
}
var ly = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  L2 = function (t, n) {
    var r,
      i = t.placement,
      o = t.theme,
      a = o.borderRadius,
      l = o.spacing,
      u = o.colors;
    return le(
      ((r = { label: "menu" }),
      fo(r, D2(i), "100%"),
      fo(r, "position", "absolute"),
      fo(r, "width", "100%"),
      fo(r, "zIndex", 1),
      r),
      n
        ? {}
        : {
            backgroundColor: u.neutral0,
            borderRadius: a,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: l.menuGutter,
            marginTop: l.menuGutter,
          }
    );
  },
  uy = O.createContext(null),
  N2 = function (t) {
    var n = t.children,
      r = t.minMenuHeight,
      i = t.maxMenuHeight,
      o = t.menuPlacement,
      a = t.menuPosition,
      l = t.menuShouldScrollIntoView,
      u = t.theme,
      s = O.useContext(uy) || {},
      c = s.setPortalPlacement,
      d = O.useRef(null),
      p = O.useState(i),
      m = Tn(p, 2),
      y = m[0],
      h = m[1],
      E = O.useState(null),
      f = Tn(E, 2),
      v = f[0],
      g = f[1],
      w = u.spacing.controlHeight;
    return (
      Cd(
        function () {
          var S = d.current;
          if (S) {
            var b = a === "fixed",
              x = l && !b,
              j = T2({
                maxHeight: i,
                menuEl: S,
                minHeight: r,
                placement: o,
                shouldScroll: x,
                isFixedPosition: b,
                controlHeight: w,
              });
            h(j.maxHeight), g(j.placement), c == null || c(j.placement);
          }
        },
        [i, o, a, l, r, c, w]
      ),
      n({
        ref: d,
        placerProps: le(le({}, t), {}, { placement: v || ly(o), maxHeight: y }),
      })
    );
  },
  $2 = function (t) {
    var n = t.children,
      r = t.innerRef,
      i = t.innerProps;
    return oe("div", ie({}, We(t, "menu", { menu: !0 }), { ref: r }, i), n);
  },
  _2 = $2,
  z2 = function (t, n) {
    var r = t.maxHeight,
      i = t.theme.spacing.baseUnit;
    return le(
      {
        maxHeight: r,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      n ? {} : { paddingBottom: i, paddingTop: i }
    );
  },
  B2 = function (t) {
    var n = t.children,
      r = t.innerProps,
      i = t.innerRef,
      o = t.isMulti;
    return oe(
      "div",
      ie(
        {},
        We(t, "menuList", { "menu-list": !0, "menu-list--is-multi": o }),
        { ref: i },
        r
      ),
      n
    );
  },
  sy = function (t, n) {
    var r = t.theme,
      i = r.spacing.baseUnit,
      o = r.colors;
    return le(
      { textAlign: "center" },
      n
        ? {}
        : {
            color: o.neutral40,
            padding: "".concat(i * 2, "px ").concat(i * 3, "px"),
          }
    );
  },
  V2 = sy,
  H2 = sy,
  cy = function (t) {
    var n = t.children,
      r = t.innerProps;
    return oe(
      "div",
      ie(
        {},
        We(t, "noOptionsMessage", {
          "menu-notice": !0,
          "menu-notice--no-options": !0,
        }),
        r
      ),
      n
    );
  };
cy.defaultProps = { children: "No options" };
var dy = function (t) {
  var n = t.children,
    r = t.innerProps;
  return oe(
    "div",
    ie(
      {},
      We(t, "loadingMessage", {
        "menu-notice": !0,
        "menu-notice--loading": !0,
      }),
      r
    ),
    n
  );
};
dy.defaultProps = { children: "Loading..." };
var W2 = function (t) {
    var n = t.rect,
      r = t.offset,
      i = t.position;
    return { left: n.left, position: i, top: r, width: n.width, zIndex: 1 };
  },
  Q2 = function (t) {
    var n = t.appendTo,
      r = t.children,
      i = t.controlElement,
      o = t.innerProps,
      a = t.menuPlacement,
      l = t.menuPosition,
      u = O.useRef(null),
      s = O.useRef(null),
      c = O.useState(ly(a)),
      d = Tn(c, 2),
      p = d[0],
      m = d[1],
      y = O.useMemo(function () {
        return { setPortalPlacement: m };
      }, []),
      h = O.useState(null),
      E = Tn(h, 2),
      f = E[0],
      v = E[1],
      g = O.useCallback(
        function () {
          if (i) {
            var x = P2(i),
              j = l === "fixed" ? 0 : window.pageYOffset,
              P = x[p] + j;
            (P !== (f == null ? void 0 : f.offset) ||
              x.left !== (f == null ? void 0 : f.rect.left) ||
              x.width !== (f == null ? void 0 : f.rect.width)) &&
              v({ offset: P, rect: x });
          }
        },
        [
          i,
          l,
          p,
          f == null ? void 0 : f.offset,
          f == null ? void 0 : f.rect.left,
          f == null ? void 0 : f.rect.width,
        ]
      );
    Cd(
      function () {
        g();
      },
      [g]
    );
    var w = O.useCallback(
      function () {
        typeof s.current == "function" && (s.current(), (s.current = null)),
          i &&
            u.current &&
            (s.current = E2(i, u.current, g, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [i, g]
    );
    Cd(
      function () {
        w();
      },
      [w]
    );
    var S = O.useCallback(
      function (x) {
        (u.current = x), w();
      },
      [w]
    );
    if ((!n && l !== "fixed") || !f) return null;
    var b = oe(
      "div",
      ie(
        { ref: S },
        We(
          le(le({}, t), {}, { offset: f.offset, position: l, rect: f.rect }),
          "menuPortal",
          { "menu-portal": !0 }
        ),
        o
      ),
      r
    );
    return oe(uy.Provider, { value: y }, n ? Cu.createPortal(b, n) : b);
  },
  G2 = function (t) {
    var n = t.isDisabled,
      r = t.isRtl;
    return {
      label: "container",
      direction: r ? "rtl" : void 0,
      pointerEvents: n ? "none" : void 0,
      position: "relative",
    };
  },
  K2 = function (t) {
    var n = t.children,
      r = t.innerProps,
      i = t.isDisabled,
      o = t.isRtl;
    return oe(
      "div",
      ie({}, We(t, "container", { "--is-disabled": i, "--is-rtl": o }), r),
      n
    );
  },
  q2 = function (t, n) {
    var r = t.theme.spacing,
      i = t.isMulti,
      o = t.hasValue,
      a = t.selectProps.controlShouldRenderValue;
    return le(
      {
        alignItems: "center",
        display: i && o && a ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      n
        ? {}
        : {
            padding: ""
              .concat(r.baseUnit / 2, "px ")
              .concat(r.baseUnit * 2, "px"),
          }
    );
  },
  Y2 = function (t) {
    var n = t.children,
      r = t.innerProps,
      i = t.isMulti,
      o = t.hasValue;
    return oe(
      "div",
      ie(
        {},
        We(t, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": i,
          "value-container--has-value": o,
        }),
        r
      ),
      n
    );
  },
  Z2 = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  X2 = function (t) {
    var n = t.children,
      r = t.innerProps;
    return oe(
      "div",
      ie({}, We(t, "indicatorsContainer", { indicators: !0 }), r),
      n
    );
  },
  Ah,
  J2 = ["size"],
  eO = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  fy = function (t) {
    var n = t.size,
      r = Bi(t, J2);
    return oe(
      "svg",
      ie(
        {
          height: n,
          width: n,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: eO,
        },
        r
      )
    );
  },
  pp = function (t) {
    return oe(
      fy,
      ie({ size: 20 }, t),
      oe("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  },
  py = function (t) {
    return oe(
      fy,
      ie({ size: 20 }, t),
      oe("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  },
  my = function (t, n) {
    var r = t.isFocused,
      i = t.theme,
      o = i.spacing.baseUnit,
      a = i.colors;
    return le(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      n
        ? {}
        : {
            color: r ? a.neutral60 : a.neutral20,
            padding: o * 2,
            ":hover": { color: r ? a.neutral80 : a.neutral40 },
          }
    );
  },
  tO = my,
  nO = function (t) {
    var n = t.children,
      r = t.innerProps;
    return oe(
      "div",
      ie(
        {},
        We(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        r
      ),
      n || oe(py, null)
    );
  },
  rO = my,
  iO = function (t) {
    var n = t.children,
      r = t.innerProps;
    return oe(
      "div",
      ie(
        {},
        We(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        r
      ),
      n || oe(pp, null)
    );
  },
  oO = function (t, n) {
    var r = t.isDisabled,
      i = t.theme,
      o = i.spacing.baseUnit,
      a = i.colors;
    return le(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      n
        ? {}
        : {
            backgroundColor: r ? a.neutral10 : a.neutral20,
            marginBottom: o * 2,
            marginTop: o * 2,
          }
    );
  },
  aO = function (t) {
    var n = t.innerProps;
    return oe(
      "span",
      ie({}, n, We(t, "indicatorSeparator", { "indicator-separator": !0 }))
    );
  },
  lO = d2(
    Ah ||
      (Ah = f2([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  uO = function (t, n) {
    var r = t.isFocused,
      i = t.size,
      o = t.theme,
      a = o.colors,
      l = o.spacing.baseUnit;
    return le(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: i,
        lineHeight: 1,
        marginRight: i,
        textAlign: "center",
        verticalAlign: "middle",
      },
      n ? {} : { color: r ? a.neutral60 : a.neutral20, padding: l * 2 }
    );
  },
  rc = function (t) {
    var n = t.delay,
      r = t.offset;
    return oe("span", {
      css: dp(
        {
          animation: ""
            .concat(lO, " 1s ease-in-out ")
            .concat(n, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: r ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        ""
      ),
    });
  },
  hy = function (t) {
    var n = t.innerProps,
      r = t.isRtl;
    return oe(
      "div",
      ie(
        {},
        We(t, "loadingIndicator", { indicator: !0, "loading-indicator": !0 }),
        n
      ),
      oe(rc, { delay: 0, offset: r }),
      oe(rc, { delay: 160, offset: !0 }),
      oe(rc, { delay: 320, offset: !r })
    );
  };
hy.defaultProps = { size: 4 };
var sO = function (t, n) {
    var r = t.isDisabled,
      i = t.isFocused,
      o = t.theme,
      a = o.colors,
      l = o.borderRadius,
      u = o.spacing;
    return le(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: u.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      n
        ? {}
        : {
            backgroundColor: r ? a.neutral5 : a.neutral0,
            borderColor: r ? a.neutral10 : i ? a.primary : a.neutral20,
            borderRadius: l,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: i ? "0 0 0 1px ".concat(a.primary) : void 0,
            "&:hover": { borderColor: i ? a.primary : a.neutral30 },
          }
    );
  },
  cO = function (t) {
    var n = t.children,
      r = t.isDisabled,
      i = t.isFocused,
      o = t.innerRef,
      a = t.innerProps,
      l = t.menuIsOpen;
    return oe(
      "div",
      ie(
        { ref: o },
        We(t, "control", {
          control: !0,
          "control--is-disabled": r,
          "control--is-focused": i,
          "control--menu-is-open": l,
        }),
        a
      ),
      n
    );
  },
  dO = cO,
  fO = ["data"],
  pO = function (t, n) {
    var r = t.theme.spacing;
    return n
      ? {}
      : { paddingBottom: r.baseUnit * 2, paddingTop: r.baseUnit * 2 };
  },
  mO = function (t) {
    var n = t.children,
      r = t.cx,
      i = t.getStyles,
      o = t.getClassNames,
      a = t.Heading,
      l = t.headingProps,
      u = t.innerProps,
      s = t.label,
      c = t.theme,
      d = t.selectProps;
    return oe(
      "div",
      ie({}, We(t, "group", { group: !0 }), u),
      oe(
        a,
        ie({}, l, {
          selectProps: d,
          theme: c,
          getStyles: i,
          getClassNames: o,
          cx: r,
        }),
        s
      ),
      oe("div", null, n)
    );
  },
  hO = function (t, n) {
    var r = t.theme,
      i = r.colors,
      o = r.spacing;
    return le(
      { label: "group", cursor: "default", display: "block" },
      n
        ? {}
        : {
            color: i.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: o.baseUnit * 3,
            paddingRight: o.baseUnit * 3,
            textTransform: "uppercase",
          }
    );
  },
  vO = function (t) {
    var n = iy(t);
    n.data;
    var r = Bi(n, fO);
    return oe("div", ie({}, We(t, "groupHeading", { "group-heading": !0 }), r));
  },
  gO = mO,
  yO = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  SO = function (t, n) {
    var r = t.isDisabled,
      i = t.value,
      o = t.theme,
      a = o.spacing,
      l = o.colors;
    return le(
      le(
        {
          visibility: r ? "hidden" : "visible",
          transform: i ? "translateZ(0)" : "",
        },
        wO
      ),
      n
        ? {}
        : {
            margin: a.baseUnit / 2,
            paddingBottom: a.baseUnit / 2,
            paddingTop: a.baseUnit / 2,
            color: l.neutral80,
          }
    );
  },
  vy = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  wO = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": le(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      vy
    ),
  },
  EO = function (t) {
    return le(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      vy
    );
  },
  bO = function (t) {
    var n = t.cx,
      r = t.value,
      i = iy(t),
      o = i.innerRef,
      a = i.isDisabled,
      l = i.isHidden,
      u = i.inputClassName,
      s = Bi(i, yO);
    return oe(
      "div",
      ie({}, We(t, "input", { "input-container": !0 }), {
        "data-value": r || "",
      }),
      oe(
        "input",
        ie(
          { className: n({ input: !0 }, u), ref: o, style: EO(l), disabled: a },
          s
        )
      )
    );
  },
  xO = bO,
  FO = function (t, n) {
    var r = t.theme,
      i = r.spacing,
      o = r.borderRadius,
      a = r.colors;
    return le(
      { label: "multiValue", display: "flex", minWidth: 0 },
      n
        ? {}
        : {
            backgroundColor: a.neutral10,
            borderRadius: o / 2,
            margin: i.baseUnit / 2,
          }
    );
  },
  jO = function (t, n) {
    var r = t.theme,
      i = r.borderRadius,
      o = r.colors,
      a = t.cropWithEllipsis;
    return le(
      {
        overflow: "hidden",
        textOverflow: a || a === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            borderRadius: i / 2,
            color: o.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          }
    );
  },
  CO = function (t, n) {
    var r = t.theme,
      i = r.spacing,
      o = r.borderRadius,
      a = r.colors,
      l = t.isFocused;
    return le(
      { alignItems: "center", display: "flex" },
      n
        ? {}
        : {
            borderRadius: o / 2,
            backgroundColor: l ? a.dangerLight : void 0,
            paddingLeft: i.baseUnit,
            paddingRight: i.baseUnit,
            ":hover": { backgroundColor: a.dangerLight, color: a.danger },
          }
    );
  },
  gy = function (t) {
    var n = t.children,
      r = t.innerProps;
    return oe("div", r, n);
  },
  OO = gy,
  PO = gy;
function IO(e) {
  var t = e.children,
    n = e.innerProps;
  return oe("div", ie({ role: "button" }, n), t || oe(pp, { size: 14 }));
}
var MO = function (t) {
    var n = t.children,
      r = t.components,
      i = t.data,
      o = t.innerProps,
      a = t.isDisabled,
      l = t.removeProps,
      u = t.selectProps,
      s = r.Container,
      c = r.Label,
      d = r.Remove;
    return oe(
      s,
      {
        data: i,
        innerProps: le(
          le(
            {},
            We(t, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": a,
            })
          ),
          o
        ),
        selectProps: u,
      },
      oe(
        c,
        {
          data: i,
          innerProps: le(
            {},
            We(t, "multiValueLabel", { "multi-value__label": !0 })
          ),
          selectProps: u,
        },
        n
      ),
      oe(d, {
        data: i,
        innerProps: le(
          le({}, We(t, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(n || "option") },
          l
        ),
        selectProps: u,
      })
    );
  },
  kO = MO,
  RO = function (t, n) {
    var r = t.isDisabled,
      i = t.isFocused,
      o = t.isSelected,
      a = t.theme,
      l = a.spacing,
      u = a.colors;
    return le(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      n
        ? {}
        : {
            backgroundColor: o ? u.primary : i ? u.primary25 : "transparent",
            color: r ? u.neutral20 : o ? u.neutral0 : "inherit",
            padding: ""
              .concat(l.baseUnit * 2, "px ")
              .concat(l.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: r ? void 0 : o ? u.primary : u.primary50,
            },
          }
    );
  },
  AO = function (t) {
    var n = t.children,
      r = t.isDisabled,
      i = t.isFocused,
      o = t.isSelected,
      a = t.innerRef,
      l = t.innerProps;
    return oe(
      "div",
      ie(
        {},
        We(t, "option", {
          option: !0,
          "option--is-disabled": r,
          "option--is-focused": i,
          "option--is-selected": o,
        }),
        { ref: a, "aria-disabled": r },
        l
      ),
      n
    );
  },
  UO = AO,
  TO = function (t, n) {
    var r = t.theme,
      i = r.spacing,
      o = r.colors;
    return le(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      n
        ? {}
        : {
            color: o.neutral50,
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
          }
    );
  },
  DO = function (t) {
    var n = t.children,
      r = t.innerProps;
    return oe("div", ie({}, We(t, "placeholder", { placeholder: !0 }), r), n);
  },
  LO = DO,
  NO = function (t, n) {
    var r = t.isDisabled,
      i = t.theme,
      o = i.spacing,
      a = i.colors;
    return le(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            color: r ? a.neutral40 : a.neutral80,
            marginLeft: o.baseUnit / 2,
            marginRight: o.baseUnit / 2,
          }
    );
  },
  $O = function (t) {
    var n = t.children,
      r = t.isDisabled,
      i = t.innerProps;
    return oe(
      "div",
      ie(
        {},
        We(t, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": r,
        }),
        i
      ),
      n
    );
  },
  _O = $O,
  mp = {
    ClearIndicator: iO,
    Control: dO,
    DropdownIndicator: nO,
    DownChevron: py,
    CrossIcon: pp,
    Group: gO,
    GroupHeading: vO,
    IndicatorsContainer: X2,
    IndicatorSeparator: aO,
    Input: xO,
    LoadingIndicator: hy,
    Menu: _2,
    MenuList: B2,
    MenuPortal: Q2,
    LoadingMessage: dy,
    NoOptionsMessage: cy,
    MultiValue: kO,
    MultiValueContainer: OO,
    MultiValueLabel: PO,
    MultiValueRemove: IO,
    Option: UO,
    Placeholder: LO,
    SelectContainer: K2,
    SingleValue: _O,
    ValueContainer: Y2,
  },
  zO = function (t) {
    return le(le({}, mp), t.components);
  },
  Uh =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function BO(e, t) {
  return !!(e === t || (Uh(e) && Uh(t)));
}
function VO(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!BO(e[n], t[n])) return !1;
  return !0;
}
function HO(e, t) {
  t === void 0 && (t = VO);
  var n = null;
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
    if (n && n.lastThis === this && t(i, n.lastArgs)) return n.lastResult;
    var a = e.apply(this, i);
    return (n = { lastResult: a, lastArgs: i, lastThis: this }), a;
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var WO = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  QO = function (t) {
    return oe("span", ie({ css: WO }, t));
  },
  Th = QO,
  GO = {
    guidance: function (t) {
      var n = t.isSearchable,
        r = t.isMulti,
        i = t.isDisabled,
        o = t.tabSelectsValue,
        a = t.context;
      switch (a) {
        case "menu":
          return "Use Up and Down to choose options"
            .concat(
              i ? "" : ", press Enter to select the currently focused option",
              ", press Escape to exit the menu"
            )
            .concat(
              o ? ", press Tab to select the option and exit the menu" : "",
              "."
            );
        case "input":
          return ""
            .concat(t["aria-label"] || "Select", " is focused ")
            .concat(
              n ? ",type to refine list" : "",
              ", press Down to open the menu, "
            )
            .concat(r ? " press left to focus selected values" : "");
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (t) {
      var n = t.action,
        r = t.label,
        i = r === void 0 ? "" : r,
        o = t.labels,
        a = t.isDisabled;
      switch (n) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(i, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(o.length > 1 ? "s" : "", " ")
            .concat(o.join(","), ", selected.");
        case "select-option":
          return a
            ? "option ".concat(i, " is disabled. Select another option.")
            : "option ".concat(i, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (t) {
      var n = t.context,
        r = t.focused,
        i = t.options,
        o = t.label,
        a = o === void 0 ? "" : o,
        l = t.selectValue,
        u = t.isDisabled,
        s = t.isSelected,
        c = function (y, h) {
          return y && y.length
            ? "".concat(y.indexOf(h) + 1, " of ").concat(y.length)
            : "";
        };
      if (n === "value" && l)
        return "value ".concat(a, " focused, ").concat(c(l, r), ".");
      if (n === "menu") {
        var d = u ? " disabled" : "",
          p = "".concat(s ? "selected" : "focused").concat(d);
        return "option ".concat(a, " ").concat(p, ", ").concat(c(i, r), ".");
      }
      return "";
    },
    onFilter: function (t) {
      var n = t.inputValue,
        r = t.resultsMessage;
      return "".concat(r).concat(n ? " for search term " + n : "", ".");
    },
  },
  KO = function (t) {
    var n = t.ariaSelection,
      r = t.focusedOption,
      i = t.focusedValue,
      o = t.focusableOptions,
      a = t.isFocused,
      l = t.selectValue,
      u = t.selectProps,
      s = t.id,
      c = u.ariaLiveMessages,
      d = u.getOptionLabel,
      p = u.inputValue,
      m = u.isMulti,
      y = u.isOptionDisabled,
      h = u.isSearchable,
      E = u.menuIsOpen,
      f = u.options,
      v = u.screenReaderStatus,
      g = u.tabSelectsValue,
      w = u["aria-label"],
      S = u["aria-live"],
      b = O.useMemo(
        function () {
          return le(le({}, GO), c || {});
        },
        [c]
      ),
      x = O.useMemo(
        function () {
          var T = "";
          if (n && b.onChange) {
            var N = n.option,
              W = n.options,
              q = n.removedValue,
              k = n.removedValues,
              V = n.value,
              B = function (Z) {
                return Array.isArray(Z) ? null : Z;
              },
              G = q || N || B(V),
              U = G ? d(G) : "",
              L = W || k || void 0,
              D = L ? L.map(d) : [],
              _ = le({ isDisabled: G && y(G, l), label: U, labels: D }, n);
            T = b.onChange(_);
          }
          return T;
        },
        [n, b, y, l, d]
      ),
      j = O.useMemo(
        function () {
          var T = "",
            N = r || i,
            W = !!(r && l && l.includes(r));
          if (N && b.onFocus) {
            var q = {
              focused: N,
              label: d(N),
              isDisabled: y(N, l),
              isSelected: W,
              options: o,
              context: N === r ? "menu" : "value",
              selectValue: l,
            };
            T = b.onFocus(q);
          }
          return T;
        },
        [r, i, d, y, b, o, l]
      ),
      P = O.useMemo(
        function () {
          var T = "";
          if (E && f.length && b.onFilter) {
            var N = v({ count: o.length });
            T = b.onFilter({ inputValue: p, resultsMessage: N });
          }
          return T;
        },
        [o, p, E, b, f, v]
      ),
      C = O.useMemo(
        function () {
          var T = "";
          if (b.guidance) {
            var N = i ? "value" : E ? "menu" : "input";
            T = b.guidance({
              "aria-label": w,
              context: N,
              isDisabled: r && y(r, l),
              isMulti: m,
              isSearchable: h,
              tabSelectsValue: g,
            });
          }
          return T;
        },
        [w, r, i, m, y, h, E, b, l, g]
      ),
      M = "".concat(j, " ").concat(P, " ").concat(C),
      R = oe(
        O.Fragment,
        null,
        oe("span", { id: "aria-selection" }, x),
        oe("span", { id: "aria-context" }, M)
      ),
      A = (n == null ? void 0 : n.action) === "initial-input-focus";
    return oe(
      O.Fragment,
      null,
      oe(Th, { id: s }, A && R),
      oe(
        Th,
        {
          "aria-live": S,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
        },
        a && !A && R
      )
    );
  },
  qO = KO,
  Od = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  YO = new RegExp(
    "[" +
      Od.map(function (e) {
        return e.letters;
      }).join("") +
      "]",
    "g"
  ),
  yy = {};
for (var ic = 0; ic < Od.length; ic++)
  for (var oc = Od[ic], ac = 0; ac < oc.letters.length; ac++)
    yy[oc.letters[ac]] = oc.base;
var Sy = function (t) {
    return t.replace(YO, function (n) {
      return yy[n];
    });
  },
  ZO = HO(Sy),
  Dh = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  XO = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  wy = function (t) {
    return function (n, r) {
      if (n.data.__isNew__) return !0;
      var i = le(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: XO,
            trim: !0,
            matchFrom: "any",
          },
          t
        ),
        o = i.ignoreCase,
        a = i.ignoreAccents,
        l = i.stringify,
        u = i.trim,
        s = i.matchFrom,
        c = u ? Dh(r) : r,
        d = u ? Dh(l(n)) : l(n);
      return (
        o && ((c = c.toLowerCase()), (d = d.toLowerCase())),
        a && ((c = ZO(c)), (d = Sy(d))),
        s === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1
      );
    };
  },
  JO = ["innerRef"];
function eP(e) {
  var t = e.innerRef,
    n = Bi(e, JO),
    r = U2(n, "onExited", "in", "enter", "exit", "appear");
  return oe(
    "input",
    ie({ ref: t }, r, {
      css: dp(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        ""
      ),
    })
  );
}
var tP = function (t) {
  t.preventDefault(), t.stopPropagation();
};
function nP(e) {
  var t = e.isEnabled,
    n = e.onBottomArrive,
    r = e.onBottomLeave,
    i = e.onTopArrive,
    o = e.onTopLeave,
    a = O.useRef(!1),
    l = O.useRef(!1),
    u = O.useRef(0),
    s = O.useRef(null),
    c = O.useCallback(
      function (E, f) {
        if (s.current !== null) {
          var v = s.current,
            g = v.scrollTop,
            w = v.scrollHeight,
            S = v.clientHeight,
            b = s.current,
            x = f > 0,
            j = w - S - g,
            P = !1;
          j > f && a.current && (r && r(E), (a.current = !1)),
            x && l.current && (o && o(E), (l.current = !1)),
            x && f > j
              ? (n && !a.current && n(E),
                (b.scrollTop = w),
                (P = !0),
                (a.current = !0))
              : !x &&
                -f > g &&
                (i && !l.current && i(E),
                (b.scrollTop = 0),
                (P = !0),
                (l.current = !0)),
            P && tP(E);
        }
      },
      [n, r, i, o]
    ),
    d = O.useCallback(
      function (E) {
        c(E, E.deltaY);
      },
      [c]
    ),
    p = O.useCallback(function (E) {
      u.current = E.changedTouches[0].clientY;
    }, []),
    m = O.useCallback(
      function (E) {
        var f = u.current - E.changedTouches[0].clientY;
        c(E, f);
      },
      [c]
    ),
    y = O.useCallback(
      function (E) {
        if (E) {
          var f = k2 ? { passive: !1 } : !1;
          E.addEventListener("wheel", d, f),
            E.addEventListener("touchstart", p, f),
            E.addEventListener("touchmove", m, f);
        }
      },
      [m, p, d]
    ),
    h = O.useCallback(
      function (E) {
        E &&
          (E.removeEventListener("wheel", d, !1),
          E.removeEventListener("touchstart", p, !1),
          E.removeEventListener("touchmove", m, !1));
      },
      [m, p, d]
    );
  return (
    O.useEffect(
      function () {
        if (t) {
          var E = s.current;
          return (
            y(E),
            function () {
              h(E);
            }
          );
        }
      },
      [t, y, h]
    ),
    function (E) {
      s.current = E;
    }
  );
}
var Lh = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  Nh = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function $h(e) {
  e.preventDefault();
}
function _h(e) {
  e.stopPropagation();
}
function zh() {
  var e = this.scrollTop,
    t = this.scrollHeight,
    n = e + this.offsetHeight;
  e === 0 ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
}
function Bh() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Vh = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  io = 0,
  Kr = { capture: !1, passive: !1 };
function rP(e) {
  var t = e.isEnabled,
    n = e.accountForScrollbars,
    r = n === void 0 ? !0 : n,
    i = O.useRef({}),
    o = O.useRef(null),
    a = O.useCallback(
      function (u) {
        if (Vh) {
          var s = document.body,
            c = s && s.style;
          if (
            (r &&
              Lh.forEach(function (y) {
                var h = c && c[y];
                i.current[y] = h;
              }),
            r && io < 1)
          ) {
            var d = parseInt(i.current.paddingRight, 10) || 0,
              p = document.body ? document.body.clientWidth : 0,
              m = window.innerWidth - p + d || 0;
            Object.keys(Nh).forEach(function (y) {
              var h = Nh[y];
              c && (c[y] = h);
            }),
              c && (c.paddingRight = "".concat(m, "px"));
          }
          s &&
            Bh() &&
            (s.addEventListener("touchmove", $h, Kr),
            u &&
              (u.addEventListener("touchstart", zh, Kr),
              u.addEventListener("touchmove", _h, Kr))),
            (io += 1);
        }
      },
      [r]
    ),
    l = O.useCallback(
      function (u) {
        if (Vh) {
          var s = document.body,
            c = s && s.style;
          (io = Math.max(io - 1, 0)),
            r &&
              io < 1 &&
              Lh.forEach(function (d) {
                var p = i.current[d];
                c && (c[d] = p);
              }),
            s &&
              Bh() &&
              (s.removeEventListener("touchmove", $h, Kr),
              u &&
                (u.removeEventListener("touchstart", zh, Kr),
                u.removeEventListener("touchmove", _h, Kr)));
        }
      },
      [r]
    );
  return (
    O.useEffect(
      function () {
        if (t) {
          var u = o.current;
          return (
            a(u),
            function () {
              l(u);
            }
          );
        }
      },
      [t, a, l]
    ),
    function (u) {
      o.current = u;
    }
  );
}
var iP = function () {
    return document.activeElement && document.activeElement.blur();
  },
  oP = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function aP(e) {
  var t = e.children,
    n = e.lockEnabled,
    r = e.captureEnabled,
    i = r === void 0 ? !0 : r,
    o = e.onBottomArrive,
    a = e.onBottomLeave,
    l = e.onTopArrive,
    u = e.onTopLeave,
    s = nP({
      isEnabled: i,
      onBottomArrive: o,
      onBottomLeave: a,
      onTopArrive: l,
      onTopLeave: u,
    }),
    c = rP({ isEnabled: n }),
    d = function (m) {
      s(m), c(m);
    };
  return oe(O.Fragment, null, n && oe("div", { onClick: iP, css: oP }), t(d));
}
var lP = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  uP = function (t) {
    var n = t.name,
      r = t.onFocus;
    return oe("input", {
      required: !0,
      name: n,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: r,
      css: lP,
      value: "",
      onChange: function () {},
    });
  },
  sP = uP,
  cP = function (t) {
    return t.label;
  },
  dP = function (t) {
    return t.label;
  },
  fP = function (t) {
    return t.value;
  },
  pP = function (t) {
    return !!t.isDisabled;
  },
  mP = {
    clearIndicator: rO,
    container: G2,
    control: sO,
    dropdownIndicator: tO,
    group: pO,
    groupHeading: hO,
    indicatorsContainer: Z2,
    indicatorSeparator: oO,
    input: SO,
    loadingIndicator: uO,
    loadingMessage: H2,
    menu: L2,
    menuList: z2,
    menuPortal: W2,
    multiValue: FO,
    multiValueLabel: jO,
    multiValueRemove: CO,
    noOptionsMessage: V2,
    option: RO,
    placeholder: TO,
    singleValue: NO,
    valueContainer: q2,
  };
function hP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = le({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      var i = r;
      e[i]
        ? (n[i] = function (o, a) {
            return t[i](e[i](o, a), a);
          })
        : (n[i] = t[i]);
    }),
    n
  );
}
var vP = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  gP = 4,
  Ey = 4,
  yP = 38,
  SP = Ey * 2,
  wP = { baseUnit: Ey, controlHeight: yP, menuGutter: SP },
  fl = { borderRadius: gP, colors: vP, spacing: wP },
  EP = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: Rh(),
    captureMenuScroll: !Rh(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: wy(),
    formatGroupLabel: cP,
    getOptionLabel: dP,
    getOptionValue: fP,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: pP,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !I2(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (t) {
      var n = t.count;
      return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function Hh(e, t, n, r) {
  var i = jy(e, t, n),
    o = Cy(e, t, n),
    a = Fy(e, t),
    l = nu(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: i,
    isSelected: o,
    label: a,
    value: l,
    index: r,
  };
}
function by(e, t) {
  return e.options
    .map(function (n, r) {
      if ("options" in n) {
        var i = n.options
          .map(function (a, l) {
            return Hh(e, a, t, l);
          })
          .filter(function (a) {
            return Wh(e, a);
          });
        return i.length > 0
          ? { type: "group", data: n, options: i, index: r }
          : void 0;
      }
      var o = Hh(e, n, t, r);
      return Wh(e, o) ? o : void 0;
    })
    .filter(R2);
}
function xy(e) {
  return e.reduce(function (t, n) {
    return (
      n.type === "group"
        ? t.push.apply(
            t,
            N1(
              n.options.map(function (r) {
                return r.data;
              })
            )
          )
        : t.push(n.data),
      t
    );
  }, []);
}
function bP(e, t) {
  return xy(by(e, t));
}
function Wh(e, t) {
  var n = e.inputValue,
    r = n === void 0 ? "" : n,
    i = t.data,
    o = t.isSelected,
    a = t.label,
    l = t.value;
  return (!Py(e) || !o) && Oy(e, { label: a, value: l, data: i }, r);
}
function xP(e, t) {
  var n = e.focusedValue,
    r = e.selectValue,
    i = r.indexOf(n);
  if (i > -1) {
    var o = t.indexOf(n);
    if (o > -1) return n;
    if (i < t.length) return t[i];
  }
  return null;
}
function FP(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var Fy = function (t, n) {
    return t.getOptionLabel(n);
  },
  nu = function (t, n) {
    return t.getOptionValue(n);
  };
function jy(e, t, n) {
  return typeof e.isOptionDisabled == "function"
    ? e.isOptionDisabled(t, n)
    : !1;
}
function Cy(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function") return e.isOptionSelected(t, n);
  var r = nu(e, t);
  return n.some(function (i) {
    return nu(e, i) === r;
  });
}
function Oy(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var Py = function (t) {
    var n = t.hideSelectedOptions,
      r = t.isMulti;
    return n === void 0 ? r : n;
  },
  jP = 1,
  Iy = (function (e) {
    fC(n, e);
    var t = hC(n);
    function n(r) {
      var i;
      if (
        (cC(this, n),
        (i = t.call(this, r)),
        (i.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
        }),
        (i.blockOptionHover = !1),
        (i.isComposing = !1),
        (i.commonProps = void 0),
        (i.initialTouchX = 0),
        (i.initialTouchY = 0),
        (i.instancePrefix = ""),
        (i.openAfterFocus = !1),
        (i.scrollToFocusedOptionOnUpdate = !1),
        (i.userIsDragging = void 0),
        (i.controlRef = null),
        (i.getControlRef = function (l) {
          i.controlRef = l;
        }),
        (i.focusedOptionRef = null),
        (i.getFocusedOptionRef = function (l) {
          i.focusedOptionRef = l;
        }),
        (i.menuListRef = null),
        (i.getMenuListRef = function (l) {
          i.menuListRef = l;
        }),
        (i.inputRef = null),
        (i.getInputRef = function (l) {
          i.inputRef = l;
        }),
        (i.focus = i.focusInput),
        (i.blur = i.blurInput),
        (i.onChange = function (l, u) {
          var s = i.props,
            c = s.onChange,
            d = s.name;
          (u.name = d), i.ariaOnChange(l, u), c(l, u);
        }),
        (i.setValue = function (l, u, s) {
          var c = i.props,
            d = c.closeMenuOnSelect,
            p = c.isMulti,
            m = c.inputValue;
          i.onInputChange("", { action: "set-value", prevInputValue: m }),
            d &&
              (i.setState({ inputIsHiddenAfterUpdate: !p }), i.onMenuClose()),
            i.setState({ clearFocusValueOnUpdate: !0 }),
            i.onChange(l, { action: u, option: s });
        }),
        (i.selectOption = function (l) {
          var u = i.props,
            s = u.blurInputOnSelect,
            c = u.isMulti,
            d = u.name,
            p = i.state.selectValue,
            m = c && i.isOptionSelected(l, p),
            y = i.isOptionDisabled(l, p);
          if (m) {
            var h = i.getOptionValue(l);
            i.setValue(
              p.filter(function (E) {
                return i.getOptionValue(E) !== h;
              }),
              "deselect-option",
              l
            );
          } else if (!y)
            c
              ? i.setValue([].concat(N1(p), [l]), "select-option", l)
              : i.setValue(l, "select-option");
          else {
            i.ariaOnChange(l, { action: "select-option", option: l, name: d });
            return;
          }
          s && i.blurInput();
        }),
        (i.removeValue = function (l) {
          var u = i.props.isMulti,
            s = i.state.selectValue,
            c = i.getOptionValue(l),
            d = s.filter(function (m) {
              return i.getOptionValue(m) !== c;
            }),
            p = Va(u, d, d[0] || null);
          i.onChange(p, { action: "remove-value", removedValue: l }),
            i.focusInput();
        }),
        (i.clearValue = function () {
          var l = i.state.selectValue;
          i.onChange(Va(i.props.isMulti, [], null), {
            action: "clear",
            removedValues: l,
          });
        }),
        (i.popValue = function () {
          var l = i.props.isMulti,
            u = i.state.selectValue,
            s = u[u.length - 1],
            c = u.slice(0, u.length - 1),
            d = Va(l, c, c[0] || null);
          i.onChange(d, { action: "pop-value", removedValue: s });
        }),
        (i.getValue = function () {
          return i.state.selectValue;
        }),
        (i.cx = function () {
          for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++)
            u[s] = arguments[s];
          return F2.apply(void 0, [i.props.classNamePrefix].concat(u));
        }),
        (i.getOptionLabel = function (l) {
          return Fy(i.props, l);
        }),
        (i.getOptionValue = function (l) {
          return nu(i.props, l);
        }),
        (i.getStyles = function (l, u) {
          var s = i.props.unstyled,
            c = mP[l](u, s);
          c.boxSizing = "border-box";
          var d = i.props.styles[l];
          return d ? d(c, u) : c;
        }),
        (i.getClassNames = function (l, u) {
          var s, c;
          return (s = (c = i.props.classNames)[l]) === null || s === void 0
            ? void 0
            : s.call(c, u);
        }),
        (i.getElementId = function (l) {
          return "".concat(i.instancePrefix, "-").concat(l);
        }),
        (i.getComponents = function () {
          return zO(i.props);
        }),
        (i.buildCategorizedOptions = function () {
          return by(i.props, i.state.selectValue);
        }),
        (i.getCategorizedOptions = function () {
          return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
        }),
        (i.buildFocusableOptions = function () {
          return xy(i.buildCategorizedOptions());
        }),
        (i.getFocusableOptions = function () {
          return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
        }),
        (i.ariaOnChange = function (l, u) {
          i.setState({ ariaSelection: le({ value: l }, u) });
        }),
        (i.onMenuMouseDown = function (l) {
          l.button === 0 &&
            (l.stopPropagation(), l.preventDefault(), i.focusInput());
        }),
        (i.onMenuMouseMove = function (l) {
          i.blockOptionHover = !1;
        }),
        (i.onControlMouseDown = function (l) {
          if (!l.defaultPrevented) {
            var u = i.props.openMenuOnClick;
            i.state.isFocused
              ? i.props.menuIsOpen
                ? l.target.tagName !== "INPUT" &&
                  l.target.tagName !== "TEXTAREA" &&
                  i.onMenuClose()
                : u && i.openMenu("first")
              : (u && (i.openAfterFocus = !0), i.focusInput()),
              l.target.tagName !== "INPUT" &&
                l.target.tagName !== "TEXTAREA" &&
                l.preventDefault();
          }
        }),
        (i.onDropdownIndicatorMouseDown = function (l) {
          if (
            !(l && l.type === "mousedown" && l.button !== 0) &&
            !i.props.isDisabled
          ) {
            var u = i.props,
              s = u.isMulti,
              c = u.menuIsOpen;
            i.focusInput(),
              c
                ? (i.setState({ inputIsHiddenAfterUpdate: !s }),
                  i.onMenuClose())
                : i.openMenu("first"),
              l.preventDefault();
          }
        }),
        (i.onClearIndicatorMouseDown = function (l) {
          (l && l.type === "mousedown" && l.button !== 0) ||
            (i.clearValue(),
            l.preventDefault(),
            (i.openAfterFocus = !1),
            l.type === "touchend"
              ? i.focusInput()
              : setTimeout(function () {
                  return i.focusInput();
                }));
        }),
        (i.onScroll = function (l) {
          typeof i.props.closeMenuOnScroll == "boolean"
            ? l.target instanceof HTMLElement &&
              as(l.target) &&
              i.props.onMenuClose()
            : typeof i.props.closeMenuOnScroll == "function" &&
              i.props.closeMenuOnScroll(l) &&
              i.props.onMenuClose();
        }),
        (i.onCompositionStart = function () {
          i.isComposing = !0;
        }),
        (i.onCompositionEnd = function () {
          i.isComposing = !1;
        }),
        (i.onTouchStart = function (l) {
          var u = l.touches,
            s = u && u.item(0);
          s &&
            ((i.initialTouchX = s.clientX),
            (i.initialTouchY = s.clientY),
            (i.userIsDragging = !1));
        }),
        (i.onTouchMove = function (l) {
          var u = l.touches,
            s = u && u.item(0);
          if (s) {
            var c = Math.abs(s.clientX - i.initialTouchX),
              d = Math.abs(s.clientY - i.initialTouchY),
              p = 5;
            i.userIsDragging = c > p || d > p;
          }
        }),
        (i.onTouchEnd = function (l) {
          i.userIsDragging ||
            (i.controlRef &&
              !i.controlRef.contains(l.target) &&
              i.menuListRef &&
              !i.menuListRef.contains(l.target) &&
              i.blurInput(),
            (i.initialTouchX = 0),
            (i.initialTouchY = 0));
        }),
        (i.onControlTouchEnd = function (l) {
          i.userIsDragging || i.onControlMouseDown(l);
        }),
        (i.onClearIndicatorTouchEnd = function (l) {
          i.userIsDragging || i.onClearIndicatorMouseDown(l);
        }),
        (i.onDropdownIndicatorTouchEnd = function (l) {
          i.userIsDragging || i.onDropdownIndicatorMouseDown(l);
        }),
        (i.handleInputChange = function (l) {
          var u = i.props.inputValue,
            s = l.currentTarget.value;
          i.setState({ inputIsHiddenAfterUpdate: !1 }),
            i.onInputChange(s, { action: "input-change", prevInputValue: u }),
            i.props.menuIsOpen || i.onMenuOpen();
        }),
        (i.onInputFocus = function (l) {
          i.props.onFocus && i.props.onFocus(l),
            i.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (i.openAfterFocus || i.props.openMenuOnFocus) &&
              i.openMenu("first"),
            (i.openAfterFocus = !1);
        }),
        (i.onInputBlur = function (l) {
          var u = i.props.inputValue;
          if (i.menuListRef && i.menuListRef.contains(document.activeElement)) {
            i.inputRef.focus();
            return;
          }
          i.props.onBlur && i.props.onBlur(l),
            i.onInputChange("", { action: "input-blur", prevInputValue: u }),
            i.onMenuClose(),
            i.setState({ focusedValue: null, isFocused: !1 });
        }),
        (i.onOptionHover = function (l) {
          i.blockOptionHover ||
            i.state.focusedOption === l ||
            i.setState({ focusedOption: l });
        }),
        (i.shouldHideSelectedOptions = function () {
          return Py(i.props);
        }),
        (i.onValueInputFocus = function (l) {
          l.preventDefault(), l.stopPropagation(), i.focus();
        }),
        (i.onKeyDown = function (l) {
          var u = i.props,
            s = u.isMulti,
            c = u.backspaceRemovesValue,
            d = u.escapeClearsValue,
            p = u.inputValue,
            m = u.isClearable,
            y = u.isDisabled,
            h = u.menuIsOpen,
            E = u.onKeyDown,
            f = u.tabSelectsValue,
            v = u.openMenuOnFocus,
            g = i.state,
            w = g.focusedOption,
            S = g.focusedValue,
            b = g.selectValue;
          if (!y && !(typeof E == "function" && (E(l), l.defaultPrevented))) {
            switch (((i.blockOptionHover = !0), l.key)) {
              case "ArrowLeft":
                if (!s || p) return;
                i.focusValue("previous");
                break;
              case "ArrowRight":
                if (!s || p) return;
                i.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (p) return;
                if (S) i.removeValue(S);
                else {
                  if (!c) return;
                  s ? i.popValue() : m && i.clearValue();
                }
                break;
              case "Tab":
                if (
                  i.isComposing ||
                  l.shiftKey ||
                  !h ||
                  !f ||
                  !w ||
                  (v && i.isOptionSelected(w, b))
                )
                  return;
                i.selectOption(w);
                break;
              case "Enter":
                if (l.keyCode === 229) break;
                if (h) {
                  if (!w || i.isComposing) return;
                  i.selectOption(w);
                  break;
                }
                return;
              case "Escape":
                h
                  ? (i.setState({ inputIsHiddenAfterUpdate: !1 }),
                    i.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: p,
                    }),
                    i.onMenuClose())
                  : m && d && i.clearValue();
                break;
              case " ":
                if (p) return;
                if (!h) {
                  i.openMenu("first");
                  break;
                }
                if (!w) return;
                i.selectOption(w);
                break;
              case "ArrowUp":
                h ? i.focusOption("up") : i.openMenu("last");
                break;
              case "ArrowDown":
                h ? i.focusOption("down") : i.openMenu("first");
                break;
              case "PageUp":
                if (!h) return;
                i.focusOption("pageup");
                break;
              case "PageDown":
                if (!h) return;
                i.focusOption("pagedown");
                break;
              case "Home":
                if (!h) return;
                i.focusOption("first");
                break;
              case "End":
                if (!h) return;
                i.focusOption("last");
                break;
              default:
                return;
            }
            l.preventDefault();
          }
        }),
        (i.instancePrefix = "react-select-" + (i.props.instanceId || ++jP)),
        (i.state.selectValue = Mh(r.value)),
        r.menuIsOpen && i.state.selectValue.length)
      ) {
        var o = i.buildFocusableOptions(),
          a = o.indexOf(i.state.selectValue[0]);
        i.state.focusedOption = o[a];
      }
      return i;
    }
    return (
      dC(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  kh(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (i) {
              var o = this.props,
                a = o.isDisabled,
                l = o.menuIsOpen,
                u = this.state.isFocused;
              ((u && !a && i.isDisabled) || (u && l && !i.menuIsOpen)) &&
                this.focusInput(),
                u && a && !i.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !u &&
                    !a &&
                    i.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (kh(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (i, o) {
              this.props.onInputChange(i, o);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (i) {
              var o = this,
                a = this.state,
                l = a.selectValue,
                u = a.isFocused,
                s = this.buildFocusableOptions(),
                c = i === "first" ? 0 : s.length - 1;
              if (!this.props.isMulti) {
                var d = s.indexOf(l[0]);
                d > -1 && (c = d);
              }
              (this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: s[c],
                  },
                  function () {
                    return o.onMenuOpen();
                  }
                );
            },
          },
          {
            key: "focusValue",
            value: function (i) {
              var o = this.state,
                a = o.selectValue,
                l = o.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var u = a.indexOf(l);
                l || (u = -1);
                var s = a.length - 1,
                  c = -1;
                if (a.length) {
                  switch (i) {
                    case "previous":
                      u === 0 ? (c = 0) : u === -1 ? (c = s) : (c = u - 1);
                      break;
                    case "next":
                      u > -1 && u < s && (c = u + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: c !== -1,
                    focusedValue: a[c],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var i =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                o = this.props.pageSize,
                a = this.state.focusedOption,
                l = this.getFocusableOptions();
              if (l.length) {
                var u = 0,
                  s = l.indexOf(a);
                a || (s = -1),
                  i === "up"
                    ? (u = s > 0 ? s - 1 : l.length - 1)
                    : i === "down"
                    ? (u = (s + 1) % l.length)
                    : i === "pageup"
                    ? ((u = s - o), u < 0 && (u = 0))
                    : i === "pagedown"
                    ? ((u = s + o), u > l.length - 1 && (u = l.length - 1))
                    : i === "last" && (u = l.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: l[u], focusedValue: null });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(fl)
                  : le(le({}, fl), this.props.theme)
                : fl;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var i = this.clearValue,
                o = this.cx,
                a = this.getStyles,
                l = this.getClassNames,
                u = this.getValue,
                s = this.selectOption,
                c = this.setValue,
                d = this.props,
                p = d.isMulti,
                m = d.isRtl,
                y = d.options,
                h = this.hasValue();
              return {
                clearValue: i,
                cx: o,
                getStyles: a,
                getClassNames: l,
                getValue: u,
                hasValue: h,
                isMulti: p,
                isRtl: m,
                options: y,
                selectOption: s,
                selectProps: d,
                setValue: c,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var i = this.state.selectValue;
              return i.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var i = this.props,
                o = i.isClearable,
                a = i.isMulti;
              return o === void 0 ? a : o;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (i, o) {
              return jy(this.props, i, o);
            },
          },
          {
            key: "isOptionSelected",
            value: function (i, o) {
              return Cy(this.props, i, o);
            },
          },
          {
            key: "filterOption",
            value: function (i, o) {
              return Oy(this.props, i, o);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (i, o) {
              if (typeof this.props.formatOptionLabel == "function") {
                var a = this.props.inputValue,
                  l = this.state.selectValue;
                return this.props.formatOptionLabel(i, {
                  context: o,
                  inputValue: a,
                  selectValue: l,
                });
              } else return this.getOptionLabel(i);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (i) {
              return this.props.formatGroupLabel(i);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var i = this.props,
                o = i.isDisabled,
                a = i.isSearchable,
                l = i.inputId,
                u = i.inputValue,
                s = i.tabIndex,
                c = i.form,
                d = i.menuIsOpen,
                p = i.required,
                m = this.getComponents(),
                y = m.Input,
                h = this.state,
                E = h.inputIsHidden,
                f = h.ariaSelection,
                v = this.commonProps,
                g = l || this.getElementId("input"),
                w = le(
                  le(
                    le(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": d,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": p,
                        role: "combobox",
                      },
                      d && {
                        "aria-controls": this.getElementId("listbox"),
                        "aria-owns": this.getElementId("listbox"),
                      }
                    ),
                    !a && { "aria-readonly": !0 }
                  ),
                  this.hasValue()
                    ? (f == null ? void 0 : f.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") }
                );
              return a
                ? O.createElement(
                    y,
                    ie(
                      {},
                      v,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: g,
                        innerRef: this.getInputRef,
                        isDisabled: o,
                        isHidden: E,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: s,
                        form: c,
                        type: "text",
                        value: u,
                      },
                      w
                    )
                  )
                : O.createElement(
                    eP,
                    ie(
                      {
                        id: g,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: eu,
                        onFocus: this.onInputFocus,
                        disabled: o,
                        tabIndex: s,
                        inputMode: "none",
                        form: c,
                        value: "",
                      },
                      w
                    )
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var i = this,
                o = this.getComponents(),
                a = o.MultiValue,
                l = o.MultiValueContainer,
                u = o.MultiValueLabel,
                s = o.MultiValueRemove,
                c = o.SingleValue,
                d = o.Placeholder,
                p = this.commonProps,
                m = this.props,
                y = m.controlShouldRenderValue,
                h = m.isDisabled,
                E = m.isMulti,
                f = m.inputValue,
                v = m.placeholder,
                g = this.state,
                w = g.selectValue,
                S = g.focusedValue,
                b = g.isFocused;
              if (!this.hasValue() || !y)
                return f
                  ? null
                  : O.createElement(
                      d,
                      ie({}, p, {
                        key: "placeholder",
                        isDisabled: h,
                        isFocused: b,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      v
                    );
              if (E)
                return w.map(function (j, P) {
                  var C = j === S,
                    M = ""
                      .concat(i.getOptionLabel(j), "-")
                      .concat(i.getOptionValue(j));
                  return O.createElement(
                    a,
                    ie({}, p, {
                      components: { Container: l, Label: u, Remove: s },
                      isFocused: C,
                      isDisabled: h,
                      key: M,
                      index: P,
                      removeProps: {
                        onClick: function () {
                          return i.removeValue(j);
                        },
                        onTouchEnd: function () {
                          return i.removeValue(j);
                        },
                        onMouseDown: function (A) {
                          A.preventDefault();
                        },
                      },
                      data: j,
                    }),
                    i.formatOptionLabel(j, "value")
                  );
                });
              if (f) return null;
              var x = w[0];
              return O.createElement(
                c,
                ie({}, p, { data: x, isDisabled: h }),
                this.formatOptionLabel(x, "value")
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var i = this.getComponents(),
                o = i.ClearIndicator,
                a = this.commonProps,
                l = this.props,
                u = l.isDisabled,
                s = l.isLoading,
                c = this.state.isFocused;
              if (!this.isClearable() || !o || u || !this.hasValue() || s)
                return null;
              var d = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return O.createElement(
                o,
                ie({}, a, { innerProps: d, isFocused: c })
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var i = this.getComponents(),
                o = i.LoadingIndicator,
                a = this.commonProps,
                l = this.props,
                u = l.isDisabled,
                s = l.isLoading,
                c = this.state.isFocused;
              if (!o || !s) return null;
              var d = { "aria-hidden": "true" };
              return O.createElement(
                o,
                ie({}, a, { innerProps: d, isDisabled: u, isFocused: c })
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var i = this.getComponents(),
                o = i.DropdownIndicator,
                a = i.IndicatorSeparator;
              if (!o || !a) return null;
              var l = this.commonProps,
                u = this.props.isDisabled,
                s = this.state.isFocused;
              return O.createElement(
                a,
                ie({}, l, { isDisabled: u, isFocused: s })
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var i = this.getComponents(),
                o = i.DropdownIndicator;
              if (!o) return null;
              var a = this.commonProps,
                l = this.props.isDisabled,
                u = this.state.isFocused,
                s = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return O.createElement(
                o,
                ie({}, a, { innerProps: s, isDisabled: l, isFocused: u })
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var i = this,
                o = this.getComponents(),
                a = o.Group,
                l = o.GroupHeading,
                u = o.Menu,
                s = o.MenuList,
                c = o.MenuPortal,
                d = o.LoadingMessage,
                p = o.NoOptionsMessage,
                m = o.Option,
                y = this.commonProps,
                h = this.state.focusedOption,
                E = this.props,
                f = E.captureMenuScroll,
                v = E.inputValue,
                g = E.isLoading,
                w = E.loadingMessage,
                S = E.minMenuHeight,
                b = E.maxMenuHeight,
                x = E.menuIsOpen,
                j = E.menuPlacement,
                P = E.menuPosition,
                C = E.menuPortalTarget,
                M = E.menuShouldBlockScroll,
                R = E.menuShouldScrollIntoView,
                A = E.noOptionsMessage,
                T = E.onMenuScrollToTop,
                N = E.onMenuScrollToBottom;
              if (!x) return null;
              var W = function (L, D) {
                  var _ = L.type,
                    I = L.data,
                    Z = L.isDisabled,
                    H = L.isSelected,
                    de = L.label,
                    re = L.value,
                    ae = h === I,
                    Y = Z
                      ? void 0
                      : function () {
                          return i.onOptionHover(I);
                        },
                    ge = Z
                      ? void 0
                      : function () {
                          return i.selectOption(I);
                        },
                    Pe = "".concat(i.getElementId("option"), "-").concat(D),
                    pe = {
                      id: Pe,
                      onClick: ge,
                      onMouseMove: Y,
                      onMouseOver: Y,
                      tabIndex: -1,
                    };
                  return O.createElement(
                    m,
                    ie({}, y, {
                      innerProps: pe,
                      data: I,
                      isDisabled: Z,
                      isSelected: H,
                      key: Pe,
                      label: de,
                      type: _,
                      value: re,
                      isFocused: ae,
                      innerRef: ae ? i.getFocusedOptionRef : void 0,
                    }),
                    i.formatOptionLabel(L.data, "menu")
                  );
                },
                q;
              if (this.hasOptions())
                q = this.getCategorizedOptions().map(function (U) {
                  if (U.type === "group") {
                    var L = U.data,
                      D = U.options,
                      _ = U.index,
                      I = "".concat(i.getElementId("group"), "-").concat(_),
                      Z = "".concat(I, "-heading");
                    return O.createElement(
                      a,
                      ie({}, y, {
                        key: I,
                        data: L,
                        options: D,
                        Heading: l,
                        headingProps: { id: Z, data: U.data },
                        label: i.formatGroupLabel(U.data),
                      }),
                      U.options.map(function (H) {
                        return W(H, "".concat(_, "-").concat(H.index));
                      })
                    );
                  } else if (U.type === "option")
                    return W(U, "".concat(U.index));
                });
              else if (g) {
                var k = w({ inputValue: v });
                if (k === null) return null;
                q = O.createElement(d, y, k);
              } else {
                var V = A({ inputValue: v });
                if (V === null) return null;
                q = O.createElement(p, y, V);
              }
              var B = {
                  minMenuHeight: S,
                  maxMenuHeight: b,
                  menuPlacement: j,
                  menuPosition: P,
                  menuShouldScrollIntoView: R,
                },
                G = O.createElement(N2, ie({}, y, B), function (U) {
                  var L = U.ref,
                    D = U.placerProps,
                    _ = D.placement,
                    I = D.maxHeight;
                  return O.createElement(
                    u,
                    ie({}, y, B, {
                      innerRef: L,
                      innerProps: {
                        onMouseDown: i.onMenuMouseDown,
                        onMouseMove: i.onMenuMouseMove,
                        id: i.getElementId("listbox"),
                      },
                      isLoading: g,
                      placement: _,
                    }),
                    O.createElement(
                      aP,
                      {
                        captureEnabled: f,
                        onTopArrive: T,
                        onBottomArrive: N,
                        lockEnabled: M,
                      },
                      function (Z) {
                        return O.createElement(
                          s,
                          ie({}, y, {
                            innerRef: function (de) {
                              i.getMenuListRef(de), Z(de);
                            },
                            isLoading: g,
                            maxHeight: I,
                            focusedOption: h,
                          }),
                          q
                        );
                      }
                    )
                  );
                });
              return C || P === "fixed"
                ? O.createElement(
                    c,
                    ie({}, y, {
                      appendTo: C,
                      controlElement: this.controlRef,
                      menuPlacement: j,
                      menuPosition: P,
                    }),
                    G
                  )
                : G;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var i = this,
                o = this.props,
                a = o.delimiter,
                l = o.isDisabled,
                u = o.isMulti,
                s = o.name,
                c = o.required,
                d = this.state.selectValue;
              if (c && !this.hasValue() && !l)
                return O.createElement(sP, {
                  name: s,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!s || l))
                if (u)
                  if (a) {
                    var p = d
                      .map(function (h) {
                        return i.getOptionValue(h);
                      })
                      .join(a);
                    return O.createElement("input", {
                      name: s,
                      type: "hidden",
                      value: p,
                    });
                  } else {
                    var m =
                      d.length > 0
                        ? d.map(function (h, E) {
                            return O.createElement("input", {
                              key: "i-".concat(E),
                              name: s,
                              type: "hidden",
                              value: i.getOptionValue(h),
                            });
                          })
                        : O.createElement("input", {
                            name: s,
                            type: "hidden",
                            value: "",
                          });
                    return O.createElement("div", null, m);
                  }
                else {
                  var y = d[0] ? this.getOptionValue(d[0]) : "";
                  return O.createElement("input", {
                    name: s,
                    type: "hidden",
                    value: y,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var i = this.commonProps,
                o = this.state,
                a = o.ariaSelection,
                l = o.focusedOption,
                u = o.focusedValue,
                s = o.isFocused,
                c = o.selectValue,
                d = this.getFocusableOptions();
              return O.createElement(
                qO,
                ie({}, i, {
                  id: this.getElementId("live-region"),
                  ariaSelection: a,
                  focusedOption: l,
                  focusedValue: u,
                  isFocused: s,
                  selectValue: c,
                  focusableOptions: d,
                })
              );
            },
          },
          {
            key: "render",
            value: function () {
              var i = this.getComponents(),
                o = i.Control,
                a = i.IndicatorsContainer,
                l = i.SelectContainer,
                u = i.ValueContainer,
                s = this.props,
                c = s.className,
                d = s.id,
                p = s.isDisabled,
                m = s.menuIsOpen,
                y = this.state.isFocused,
                h = (this.commonProps = this.getCommonProps());
              return O.createElement(
                l,
                ie({}, h, {
                  className: c,
                  innerProps: { id: d, onKeyDown: this.onKeyDown },
                  isDisabled: p,
                  isFocused: y,
                }),
                this.renderLiveRegion(),
                O.createElement(
                  o,
                  ie({}, h, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: p,
                    isFocused: y,
                    menuIsOpen: m,
                  }),
                  O.createElement(
                    u,
                    ie({}, h, { isDisabled: p }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  O.createElement(
                    a,
                    ie({}, h, { isDisabled: p }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, o) {
              var a = o.prevProps,
                l = o.clearFocusValueOnUpdate,
                u = o.inputIsHiddenAfterUpdate,
                s = o.ariaSelection,
                c = o.isFocused,
                d = o.prevWasFocused,
                p = i.options,
                m = i.value,
                y = i.menuIsOpen,
                h = i.inputValue,
                E = i.isMulti,
                f = Mh(m),
                v = {};
              if (
                a &&
                (m !== a.value ||
                  p !== a.options ||
                  y !== a.menuIsOpen ||
                  h !== a.inputValue)
              ) {
                var g = y ? bP(i, f) : [],
                  w = l ? xP(o, f) : null,
                  S = FP(o, g);
                v = {
                  selectValue: f,
                  focusedOption: S,
                  focusedValue: w,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var b =
                  u != null && i !== a
                    ? { inputIsHidden: u, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                x = s,
                j = c && d;
              return (
                c &&
                  !j &&
                  ((x = {
                    value: Va(E, f, f[0] || null),
                    options: f,
                    action: "initial-input-focus",
                  }),
                  (j = !d)),
                (s == null ? void 0 : s.action) === "initial-input-focus" &&
                  (x = null),
                le(
                  le(le({}, v), b),
                  {},
                  { prevProps: i, ariaSelection: x, prevWasFocused: j }
                )
              );
            },
          },
        ]
      ),
      n
    );
  })(O.Component);
Iy.defaultProps = EP;
var CP = O.forwardRef(function (e, t) {
    var n = L1(e);
    return O.createElement(Iy, ie({ ref: t }, n));
  }),
  OP = CP,
  PP = function (e) {
    var t = e.nonce,
      n = e.children,
      r = e.cacheKey,
      i = O.useMemo(
        function () {
          return Q1({ key: r, nonce: t });
        },
        [r, t]
      );
    return O.createElement(i2, { value: i }, n);
  };
const IP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        NonceProvider: PP,
        components: mp,
        createFilter: wy,
        default: OP,
        defaultTheme: fl,
        mergeStyles: hP,
        useStateManager: L1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  MP = vv(IP);
function My(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Yl(e, t);
}
var Qh =
  Number.isNaN ||
  function (t) {
    return typeof t == "number" && t !== t;
  };
function kP(e, t) {
  return !!(e === t || (Qh(e) && Qh(t)));
}
function RP(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!kP(e[n], t[n])) return !1;
  return !0;
}
function Ei(e, t) {
  t === void 0 && (t = RP);
  var n,
    r = [],
    i,
    o = !1;
  function a() {
    for (var l = [], u = 0; u < arguments.length; u++) l[u] = arguments[u];
    return (
      (o && n === this && t(l, r)) ||
        ((i = e.apply(this, l)), (o = !0), (n = this), (r = l)),
      i
    );
  }
  return a;
}
var AP = typeof performance == "object" && typeof performance.now == "function",
  Gh = AP
    ? function () {
        return performance.now();
      }
    : function () {
        return Date.now();
      };
function ru(e) {
  cancelAnimationFrame(e.id);
}
function ky(e, t) {
  var n = Gh();
  function r() {
    Gh() - n >= t ? e.call(null) : (i.id = requestAnimationFrame(r));
  }
  var i = { id: requestAnimationFrame(r) };
  return i;
}
var lc = -1;
function Pd(e) {
  if ((e === void 0 && (e = !1), lc === -1 || e)) {
    var t = document.createElement("div"),
      n = t.style;
    (n.width = "50px"),
      (n.height = "50px"),
      (n.overflow = "scroll"),
      document.body.appendChild(t),
      (lc = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return lc;
}
var qr = null;
function iu(e) {
  if ((e === void 0 && (e = !1), qr === null || e)) {
    var t = document.createElement("div"),
      n = t.style;
    (n.width = "50px"),
      (n.height = "50px"),
      (n.overflow = "scroll"),
      (n.direction = "rtl");
    var r = document.createElement("div"),
      i = r.style;
    return (
      (i.width = "100px"),
      (i.height = "100px"),
      t.appendChild(r),
      document.body.appendChild(t),
      t.scrollLeft > 0
        ? (qr = "positive-descending")
        : ((t.scrollLeft = 1),
          t.scrollLeft === 0 ? (qr = "negative") : (qr = "positive-ascending")),
      document.body.removeChild(t),
      qr
    );
  }
  return qr;
}
var UP = 150,
  TP = function (t) {
    var n = t.columnIndex;
    t.data;
    var r = t.rowIndex;
    return r + ":" + n;
  };
function Ry(e) {
  var t,
    n = e.getColumnOffset,
    r = e.getColumnStartIndexForOffset,
    i = e.getColumnStopIndexForStartIndex,
    o = e.getColumnWidth,
    a = e.getEstimatedTotalHeight,
    l = e.getEstimatedTotalWidth,
    u = e.getOffsetForColumnAndAlignment,
    s = e.getOffsetForRowAndAlignment,
    c = e.getRowHeight,
    d = e.getRowOffset,
    p = e.getRowStartIndexForOffset,
    m = e.getRowStopIndexForStartIndex,
    y = e.initInstanceProps,
    h = e.shouldResetStyleCacheOnItemSizeChange,
    E = e.validateProps;
  return (
    (t = (function (f) {
      My(v, f);
      function v(w) {
        var S;
        return (
          (S = f.call(this, w) || this),
          (S._instanceProps = y(S.props, Jo(S))),
          (S._resetIsScrollingTimeoutId = null),
          (S._outerRef = void 0),
          (S.state = {
            instance: Jo(S),
            isScrolling: !1,
            horizontalScrollDirection: "forward",
            scrollLeft:
              typeof S.props.initialScrollLeft == "number"
                ? S.props.initialScrollLeft
                : 0,
            scrollTop:
              typeof S.props.initialScrollTop == "number"
                ? S.props.initialScrollTop
                : 0,
            scrollUpdateWasRequested: !1,
            verticalScrollDirection: "forward",
          }),
          (S._callOnItemsRendered = void 0),
          (S._callOnItemsRendered = Ei(function (b, x, j, P, C, M, R, A) {
            return S.props.onItemsRendered({
              overscanColumnStartIndex: b,
              overscanColumnStopIndex: x,
              overscanRowStartIndex: j,
              overscanRowStopIndex: P,
              visibleColumnStartIndex: C,
              visibleColumnStopIndex: M,
              visibleRowStartIndex: R,
              visibleRowStopIndex: A,
            });
          })),
          (S._callOnScroll = void 0),
          (S._callOnScroll = Ei(function (b, x, j, P, C) {
            return S.props.onScroll({
              horizontalScrollDirection: j,
              scrollLeft: b,
              scrollTop: x,
              verticalScrollDirection: P,
              scrollUpdateWasRequested: C,
            });
          })),
          (S._getItemStyle = void 0),
          (S._getItemStyle = function (b, x) {
            var j = S.props,
              P = j.columnWidth,
              C = j.direction,
              M = j.rowHeight,
              R = S._getItemStyleCache(h && P, h && C, h && M),
              A = b + ":" + x,
              T;
            if (R.hasOwnProperty(A)) T = R[A];
            else {
              var N = n(S.props, x, S._instanceProps),
                W = C === "rtl";
              R[A] = T = {
                position: "absolute",
                left: W ? void 0 : N,
                right: W ? N : void 0,
                top: d(S.props, b, S._instanceProps),
                height: c(S.props, b, S._instanceProps),
                width: o(S.props, x, S._instanceProps),
              };
            }
            return T;
          }),
          (S._getItemStyleCache = void 0),
          (S._getItemStyleCache = Ei(function (b, x, j) {
            return {};
          })),
          (S._onScroll = function (b) {
            var x = b.currentTarget,
              j = x.clientHeight,
              P = x.clientWidth,
              C = x.scrollLeft,
              M = x.scrollTop,
              R = x.scrollHeight,
              A = x.scrollWidth;
            S.setState(function (T) {
              if (T.scrollLeft === C && T.scrollTop === M) return null;
              var N = S.props.direction,
                W = C;
              if (N === "rtl")
                switch (iu()) {
                  case "negative":
                    W = -C;
                    break;
                  case "positive-descending":
                    W = A - P - C;
                    break;
                }
              W = Math.max(0, Math.min(W, A - P));
              var q = Math.max(0, Math.min(M, R - j));
              return {
                isScrolling: !0,
                horizontalScrollDirection:
                  T.scrollLeft < C ? "forward" : "backward",
                scrollLeft: W,
                scrollTop: q,
                verticalScrollDirection:
                  T.scrollTop < M ? "forward" : "backward",
                scrollUpdateWasRequested: !1,
              };
            }, S._resetIsScrollingDebounced);
          }),
          (S._outerRefSetter = function (b) {
            var x = S.props.outerRef;
            (S._outerRef = b),
              typeof x == "function"
                ? x(b)
                : x != null &&
                  typeof x == "object" &&
                  x.hasOwnProperty("current") &&
                  (x.current = b);
          }),
          (S._resetIsScrollingDebounced = function () {
            S._resetIsScrollingTimeoutId !== null &&
              ru(S._resetIsScrollingTimeoutId),
              (S._resetIsScrollingTimeoutId = ky(S._resetIsScrolling, UP));
          }),
          (S._resetIsScrolling = function () {
            (S._resetIsScrollingTimeoutId = null),
              S.setState({ isScrolling: !1 }, function () {
                S._getItemStyleCache(-1);
              });
          }),
          S
        );
      }
      v.getDerivedStateFromProps = function (S, b) {
        return DP(S, b), E(S), null;
      };
      var g = v.prototype;
      return (
        (g.scrollTo = function (S) {
          var b = S.scrollLeft,
            x = S.scrollTop;
          b !== void 0 && (b = Math.max(0, b)),
            x !== void 0 && (x = Math.max(0, x)),
            this.setState(function (j) {
              return (
                b === void 0 && (b = j.scrollLeft),
                x === void 0 && (x = j.scrollTop),
                j.scrollLeft === b && j.scrollTop === x
                  ? null
                  : {
                      horizontalScrollDirection:
                        j.scrollLeft < b ? "forward" : "backward",
                      scrollLeft: b,
                      scrollTop: x,
                      scrollUpdateWasRequested: !0,
                      verticalScrollDirection:
                        j.scrollTop < x ? "forward" : "backward",
                    }
              );
            }, this._resetIsScrollingDebounced);
        }),
        (g.scrollToItem = function (S) {
          var b = S.align,
            x = b === void 0 ? "auto" : b,
            j = S.columnIndex,
            P = S.rowIndex,
            C = this.props,
            M = C.columnCount,
            R = C.height,
            A = C.rowCount,
            T = C.width,
            N = this.state,
            W = N.scrollLeft,
            q = N.scrollTop,
            k = Pd();
          j !== void 0 && (j = Math.max(0, Math.min(j, M - 1))),
            P !== void 0 && (P = Math.max(0, Math.min(P, A - 1)));
          var V = a(this.props, this._instanceProps),
            B = l(this.props, this._instanceProps),
            G = B > T ? k : 0,
            U = V > R ? k : 0;
          this.scrollTo({
            scrollLeft:
              j !== void 0 ? u(this.props, j, x, W, this._instanceProps, U) : W,
            scrollTop:
              P !== void 0 ? s(this.props, P, x, q, this._instanceProps, G) : q,
          });
        }),
        (g.componentDidMount = function () {
          var S = this.props,
            b = S.initialScrollLeft,
            x = S.initialScrollTop;
          if (this._outerRef != null) {
            var j = this._outerRef;
            typeof b == "number" && (j.scrollLeft = b),
              typeof x == "number" && (j.scrollTop = x);
          }
          this._callPropsCallbacks();
        }),
        (g.componentDidUpdate = function () {
          var S = this.props.direction,
            b = this.state,
            x = b.scrollLeft,
            j = b.scrollTop,
            P = b.scrollUpdateWasRequested;
          if (P && this._outerRef != null) {
            var C = this._outerRef;
            if (S === "rtl")
              switch (iu()) {
                case "negative":
                  C.scrollLeft = -x;
                  break;
                case "positive-ascending":
                  C.scrollLeft = x;
                  break;
                default:
                  var M = C.clientWidth,
                    R = C.scrollWidth;
                  C.scrollLeft = R - M - x;
                  break;
              }
            else C.scrollLeft = Math.max(0, x);
            C.scrollTop = Math.max(0, j);
          }
          this._callPropsCallbacks();
        }),
        (g.componentWillUnmount = function () {
          this._resetIsScrollingTimeoutId !== null &&
            ru(this._resetIsScrollingTimeoutId);
        }),
        (g.render = function () {
          var S = this.props,
            b = S.children,
            x = S.className,
            j = S.columnCount,
            P = S.direction,
            C = S.height,
            M = S.innerRef,
            R = S.innerElementType,
            A = S.innerTagName,
            T = S.itemData,
            N = S.itemKey,
            W = N === void 0 ? TP : N,
            q = S.outerElementType,
            k = S.outerTagName,
            V = S.rowCount,
            B = S.style,
            G = S.useIsScrolling,
            U = S.width,
            L = this.state.isScrolling,
            D = this._getHorizontalRangeToRender(),
            _ = D[0],
            I = D[1],
            Z = this._getVerticalRangeToRender(),
            H = Z[0],
            de = Z[1],
            re = [];
          if (j > 0 && V)
            for (var ae = H; ae <= de; ae++)
              for (var Y = _; Y <= I; Y++)
                re.push(
                  O.createElement(b, {
                    columnIndex: Y,
                    data: T,
                    isScrolling: G ? L : void 0,
                    key: W({ columnIndex: Y, data: T, rowIndex: ae }),
                    rowIndex: ae,
                    style: this._getItemStyle(ae, Y),
                  })
                );
          var ge = a(this.props, this._instanceProps),
            Pe = l(this.props, this._instanceProps);
          return O.createElement(
            q || k || "div",
            {
              className: x,
              onScroll: this._onScroll,
              ref: this._outerRefSetter,
              style: ie(
                {
                  position: "relative",
                  height: C,
                  width: U,
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  willChange: "transform",
                  direction: P,
                },
                B
              ),
            },
            O.createElement(R || A || "div", {
              children: re,
              ref: M,
              style: {
                height: ge,
                pointerEvents: L ? "none" : void 0,
                width: Pe,
              },
            })
          );
        }),
        (g._callPropsCallbacks = function () {
          var S = this.props,
            b = S.columnCount,
            x = S.onItemsRendered,
            j = S.onScroll,
            P = S.rowCount;
          if (typeof x == "function" && b > 0 && P > 0) {
            var C = this._getHorizontalRangeToRender(),
              M = C[0],
              R = C[1],
              A = C[2],
              T = C[3],
              N = this._getVerticalRangeToRender(),
              W = N[0],
              q = N[1],
              k = N[2],
              V = N[3];
            this._callOnItemsRendered(M, R, W, q, A, T, k, V);
          }
          if (typeof j == "function") {
            var B = this.state,
              G = B.horizontalScrollDirection,
              U = B.scrollLeft,
              L = B.scrollTop,
              D = B.scrollUpdateWasRequested,
              _ = B.verticalScrollDirection;
            this._callOnScroll(U, L, G, _, D);
          }
        }),
        (g._getHorizontalRangeToRender = function () {
          var S = this.props,
            b = S.columnCount,
            x = S.overscanColumnCount,
            j = S.overscanColumnsCount,
            P = S.overscanCount,
            C = S.rowCount,
            M = this.state,
            R = M.horizontalScrollDirection,
            A = M.isScrolling,
            T = M.scrollLeft,
            N = x || j || P || 1;
          if (b === 0 || C === 0) return [0, 0, 0, 0];
          var W = r(this.props, T, this._instanceProps),
            q = i(this.props, W, T, this._instanceProps),
            k = !A || R === "backward" ? Math.max(1, N) : 1,
            V = !A || R === "forward" ? Math.max(1, N) : 1;
          return [
            Math.max(0, W - k),
            Math.max(0, Math.min(b - 1, q + V)),
            W,
            q,
          ];
        }),
        (g._getVerticalRangeToRender = function () {
          var S = this.props,
            b = S.columnCount,
            x = S.overscanCount,
            j = S.overscanRowCount,
            P = S.overscanRowsCount,
            C = S.rowCount,
            M = this.state,
            R = M.isScrolling,
            A = M.verticalScrollDirection,
            T = M.scrollTop,
            N = j || P || x || 1;
          if (b === 0 || C === 0) return [0, 0, 0, 0];
          var W = p(this.props, T, this._instanceProps),
            q = m(this.props, W, T, this._instanceProps),
            k = !R || A === "backward" ? Math.max(1, N) : 1,
            V = !R || A === "forward" ? Math.max(1, N) : 1;
          return [
            Math.max(0, W - k),
            Math.max(0, Math.min(C - 1, q + V)),
            W,
            q,
          ];
        }),
        v
      );
    })(O.PureComponent)),
    (t.defaultProps = {
      direction: "ltr",
      itemData: void 0,
      useIsScrolling: !1,
    }),
    t
  );
}
var DP = function (t, n) {
    t.children,
      t.direction,
      t.height,
      t.innerTagName,
      t.outerTagName,
      t.overscanColumnsCount,
      t.overscanCount,
      t.overscanRowsCount,
      t.width,
      n.instance;
  },
  Kh = 50,
  Ay = function (t, n) {
    var r = t.rowCount,
      i = n.rowMetadataMap,
      o = n.estimatedRowHeight,
      a = n.lastMeasuredRowIndex,
      l = 0;
    if ((a >= r && (a = r - 1), a >= 0)) {
      var u = i[a];
      l = u.offset + u.size;
    }
    var s = r - a - 1,
      c = s * o;
    return l + c;
  },
  Uy = function (t, n) {
    var r = t.columnCount,
      i = n.columnMetadataMap,
      o = n.estimatedColumnWidth,
      a = n.lastMeasuredColumnIndex,
      l = 0;
    if ((a >= r && (a = r - 1), a >= 0)) {
      var u = i[a];
      l = u.offset + u.size;
    }
    var s = r - a - 1,
      c = s * o;
    return l + c;
  },
  Mn = function (t, n, r, i) {
    var o, a, l;
    if (
      (t === "column"
        ? ((o = i.columnMetadataMap),
          (a = n.columnWidth),
          (l = i.lastMeasuredColumnIndex))
        : ((o = i.rowMetadataMap),
          (a = n.rowHeight),
          (l = i.lastMeasuredRowIndex)),
      r > l)
    ) {
      var u = 0;
      if (l >= 0) {
        var s = o[l];
        u = s.offset + s.size;
      }
      for (var c = l + 1; c <= r; c++) {
        var d = a(c);
        (o[c] = { offset: u, size: d }), (u += d);
      }
      t === "column"
        ? (i.lastMeasuredColumnIndex = r)
        : (i.lastMeasuredRowIndex = r);
    }
    return o[r];
  },
  qh = function (t, n, r, i) {
    var o, a;
    t === "column"
      ? ((o = r.columnMetadataMap), (a = r.lastMeasuredColumnIndex))
      : ((o = r.rowMetadataMap), (a = r.lastMeasuredRowIndex));
    var l = a > 0 ? o[a].offset : 0;
    return l >= i ? Ty(t, n, r, a, 0, i) : LP(t, n, r, Math.max(0, a), i);
  },
  Ty = function (t, n, r, i, o, a) {
    for (; o <= i; ) {
      var l = o + Math.floor((i - o) / 2),
        u = Mn(t, n, l, r).offset;
      if (u === a) return l;
      u < a ? (o = l + 1) : u > a && (i = l - 1);
    }
    return o > 0 ? o - 1 : 0;
  },
  LP = function (t, n, r, i, o) {
    for (
      var a = t === "column" ? n.columnCount : n.rowCount, l = 1;
      i < a && Mn(t, n, i, r).offset < o;

    )
      (i += l), (l *= 2);
    return Ty(t, n, r, Math.min(i, a - 1), Math.floor(i / 2), o);
  },
  Yh = function (t, n, r, i, o, a, l) {
    var u = t === "column" ? n.width : n.height,
      s = Mn(t, n, r, a),
      c = t === "column" ? Uy(n, a) : Ay(n, a),
      d = Math.max(0, Math.min(c - u, s.offset)),
      p = Math.max(0, s.offset - u + l + s.size);
    switch (
      (i === "smart" &&
        (o >= p - u && o <= d + u ? (i = "auto") : (i = "center")),
      i)
    ) {
      case "start":
        return d;
      case "end":
        return p;
      case "center":
        return Math.round(p + (d - p) / 2);
      case "auto":
      default:
        return o >= p && o <= d ? o : p > d || o < p ? p : d;
    }
  },
  NP = Ry({
    getColumnOffset: function (t, n, r) {
      return Mn("column", t, n, r).offset;
    },
    getColumnStartIndexForOffset: function (t, n, r) {
      return qh("column", t, r, n);
    },
    getColumnStopIndexForStartIndex: function (t, n, r, i) {
      for (
        var o = t.columnCount,
          a = t.width,
          l = Mn("column", t, n, i),
          u = r + a,
          s = l.offset + l.size,
          c = n;
        c < o - 1 && s < u;

      )
        c++, (s += Mn("column", t, c, i).size);
      return c;
    },
    getColumnWidth: function (t, n, r) {
      return r.columnMetadataMap[n].size;
    },
    getEstimatedTotalHeight: Ay,
    getEstimatedTotalWidth: Uy,
    getOffsetForColumnAndAlignment: function (t, n, r, i, o, a) {
      return Yh("column", t, n, r, i, o, a);
    },
    getOffsetForRowAndAlignment: function (t, n, r, i, o, a) {
      return Yh("row", t, n, r, i, o, a);
    },
    getRowOffset: function (t, n, r) {
      return Mn("row", t, n, r).offset;
    },
    getRowHeight: function (t, n, r) {
      return r.rowMetadataMap[n].size;
    },
    getRowStartIndexForOffset: function (t, n, r) {
      return qh("row", t, r, n);
    },
    getRowStopIndexForStartIndex: function (t, n, r, i) {
      for (
        var o = t.rowCount,
          a = t.height,
          l = Mn("row", t, n, i),
          u = r + a,
          s = l.offset + l.size,
          c = n;
        c < o - 1 && s < u;

      )
        c++, (s += Mn("row", t, c, i).size);
      return c;
    },
    initInstanceProps: function (t, n) {
      var r = t,
        i = r.estimatedColumnWidth,
        o = r.estimatedRowHeight,
        a = {
          columnMetadataMap: {},
          estimatedColumnWidth: i || Kh,
          estimatedRowHeight: o || Kh,
          lastMeasuredColumnIndex: -1,
          lastMeasuredRowIndex: -1,
          rowMetadataMap: {},
        };
      return (
        (n.resetAfterColumnIndex = function (l, u) {
          u === void 0 && (u = !0),
            n.resetAfterIndices({ columnIndex: l, shouldForceUpdate: u });
        }),
        (n.resetAfterRowIndex = function (l, u) {
          u === void 0 && (u = !0),
            n.resetAfterIndices({ rowIndex: l, shouldForceUpdate: u });
        }),
        (n.resetAfterIndices = function (l) {
          var u = l.columnIndex,
            s = l.rowIndex,
            c = l.shouldForceUpdate,
            d = c === void 0 ? !0 : c;
          typeof u == "number" &&
            (a.lastMeasuredColumnIndex = Math.min(
              a.lastMeasuredColumnIndex,
              u - 1
            )),
            typeof s == "number" &&
              (a.lastMeasuredRowIndex = Math.min(
                a.lastMeasuredRowIndex,
                s - 1
              )),
            n._getItemStyleCache(-1),
            d && n.forceUpdate();
        }),
        a
      );
    },
    shouldResetStyleCacheOnItemSizeChange: !1,
    validateProps: function (t) {
      t.columnWidth, t.rowHeight;
    },
  }),
  $P = 150,
  _P = function (t, n) {
    return t;
  };
function Dy(e) {
  var t,
    n = e.getItemOffset,
    r = e.getEstimatedTotalSize,
    i = e.getItemSize,
    o = e.getOffsetForIndexAndAlignment,
    a = e.getStartIndexForOffset,
    l = e.getStopIndexForStartIndex,
    u = e.initInstanceProps,
    s = e.shouldResetStyleCacheOnItemSizeChange,
    c = e.validateProps;
  return (
    (t = (function (d) {
      My(p, d);
      function p(y) {
        var h;
        return (
          (h = d.call(this, y) || this),
          (h._instanceProps = u(h.props, Jo(h))),
          (h._outerRef = void 0),
          (h._resetIsScrollingTimeoutId = null),
          (h.state = {
            instance: Jo(h),
            isScrolling: !1,
            scrollDirection: "forward",
            scrollOffset:
              typeof h.props.initialScrollOffset == "number"
                ? h.props.initialScrollOffset
                : 0,
            scrollUpdateWasRequested: !1,
          }),
          (h._callOnItemsRendered = void 0),
          (h._callOnItemsRendered = Ei(function (E, f, v, g) {
            return h.props.onItemsRendered({
              overscanStartIndex: E,
              overscanStopIndex: f,
              visibleStartIndex: v,
              visibleStopIndex: g,
            });
          })),
          (h._callOnScroll = void 0),
          (h._callOnScroll = Ei(function (E, f, v) {
            return h.props.onScroll({
              scrollDirection: E,
              scrollOffset: f,
              scrollUpdateWasRequested: v,
            });
          })),
          (h._getItemStyle = void 0),
          (h._getItemStyle = function (E) {
            var f = h.props,
              v = f.direction,
              g = f.itemSize,
              w = f.layout,
              S = h._getItemStyleCache(s && g, s && w, s && v),
              b;
            if (S.hasOwnProperty(E)) b = S[E];
            else {
              var x = n(h.props, E, h._instanceProps),
                j = i(h.props, E, h._instanceProps),
                P = v === "horizontal" || w === "horizontal",
                C = v === "rtl",
                M = P ? x : 0;
              S[E] = b = {
                position: "absolute",
                left: C ? void 0 : M,
                right: C ? M : void 0,
                top: P ? 0 : x,
                height: P ? "100%" : j,
                width: P ? j : "100%",
              };
            }
            return b;
          }),
          (h._getItemStyleCache = void 0),
          (h._getItemStyleCache = Ei(function (E, f, v) {
            return {};
          })),
          (h._onScrollHorizontal = function (E) {
            var f = E.currentTarget,
              v = f.clientWidth,
              g = f.scrollLeft,
              w = f.scrollWidth;
            h.setState(function (S) {
              if (S.scrollOffset === g) return null;
              var b = h.props.direction,
                x = g;
              if (b === "rtl")
                switch (iu()) {
                  case "negative":
                    x = -g;
                    break;
                  case "positive-descending":
                    x = w - v - g;
                    break;
                }
              return (
                (x = Math.max(0, Math.min(x, w - v))),
                {
                  isScrolling: !0,
                  scrollDirection: S.scrollOffset < g ? "forward" : "backward",
                  scrollOffset: x,
                  scrollUpdateWasRequested: !1,
                }
              );
            }, h._resetIsScrollingDebounced);
          }),
          (h._onScrollVertical = function (E) {
            var f = E.currentTarget,
              v = f.clientHeight,
              g = f.scrollHeight,
              w = f.scrollTop;
            h.setState(function (S) {
              if (S.scrollOffset === w) return null;
              var b = Math.max(0, Math.min(w, g - v));
              return {
                isScrolling: !0,
                scrollDirection: S.scrollOffset < b ? "forward" : "backward",
                scrollOffset: b,
                scrollUpdateWasRequested: !1,
              };
            }, h._resetIsScrollingDebounced);
          }),
          (h._outerRefSetter = function (E) {
            var f = h.props.outerRef;
            (h._outerRef = E),
              typeof f == "function"
                ? f(E)
                : f != null &&
                  typeof f == "object" &&
                  f.hasOwnProperty("current") &&
                  (f.current = E);
          }),
          (h._resetIsScrollingDebounced = function () {
            h._resetIsScrollingTimeoutId !== null &&
              ru(h._resetIsScrollingTimeoutId),
              (h._resetIsScrollingTimeoutId = ky(h._resetIsScrolling, $P));
          }),
          (h._resetIsScrolling = function () {
            (h._resetIsScrollingTimeoutId = null),
              h.setState({ isScrolling: !1 }, function () {
                h._getItemStyleCache(-1, null);
              });
          }),
          h
        );
      }
      p.getDerivedStateFromProps = function (h, E) {
        return zP(h, E), c(h), null;
      };
      var m = p.prototype;
      return (
        (m.scrollTo = function (h) {
          (h = Math.max(0, h)),
            this.setState(function (E) {
              return E.scrollOffset === h
                ? null
                : {
                    scrollDirection:
                      E.scrollOffset < h ? "forward" : "backward",
                    scrollOffset: h,
                    scrollUpdateWasRequested: !0,
                  };
            }, this._resetIsScrollingDebounced);
        }),
        (m.scrollToItem = function (h, E) {
          E === void 0 && (E = "auto");
          var f = this.props,
            v = f.itemCount,
            g = f.layout,
            w = this.state.scrollOffset;
          h = Math.max(0, Math.min(h, v - 1));
          var S = 0;
          if (this._outerRef) {
            var b = this._outerRef;
            g === "vertical"
              ? (S = b.scrollWidth > b.clientWidth ? Pd() : 0)
              : (S = b.scrollHeight > b.clientHeight ? Pd() : 0);
          }
          this.scrollTo(o(this.props, h, E, w, this._instanceProps, S));
        }),
        (m.componentDidMount = function () {
          var h = this.props,
            E = h.direction,
            f = h.initialScrollOffset,
            v = h.layout;
          if (typeof f == "number" && this._outerRef != null) {
            var g = this._outerRef;
            E === "horizontal" || v === "horizontal"
              ? (g.scrollLeft = f)
              : (g.scrollTop = f);
          }
          this._callPropsCallbacks();
        }),
        (m.componentDidUpdate = function () {
          var h = this.props,
            E = h.direction,
            f = h.layout,
            v = this.state,
            g = v.scrollOffset,
            w = v.scrollUpdateWasRequested;
          if (w && this._outerRef != null) {
            var S = this._outerRef;
            if (E === "horizontal" || f === "horizontal")
              if (E === "rtl")
                switch (iu()) {
                  case "negative":
                    S.scrollLeft = -g;
                    break;
                  case "positive-ascending":
                    S.scrollLeft = g;
                    break;
                  default:
                    var b = S.clientWidth,
                      x = S.scrollWidth;
                    S.scrollLeft = x - b - g;
                    break;
                }
              else S.scrollLeft = g;
            else S.scrollTop = g;
          }
          this._callPropsCallbacks();
        }),
        (m.componentWillUnmount = function () {
          this._resetIsScrollingTimeoutId !== null &&
            ru(this._resetIsScrollingTimeoutId);
        }),
        (m.render = function () {
          var h = this.props,
            E = h.children,
            f = h.className,
            v = h.direction,
            g = h.height,
            w = h.innerRef,
            S = h.innerElementType,
            b = h.innerTagName,
            x = h.itemCount,
            j = h.itemData,
            P = h.itemKey,
            C = P === void 0 ? _P : P,
            M = h.layout,
            R = h.outerElementType,
            A = h.outerTagName,
            T = h.style,
            N = h.useIsScrolling,
            W = h.width,
            q = this.state.isScrolling,
            k = v === "horizontal" || M === "horizontal",
            V = k ? this._onScrollHorizontal : this._onScrollVertical,
            B = this._getRangeToRender(),
            G = B[0],
            U = B[1],
            L = [];
          if (x > 0)
            for (var D = G; D <= U; D++)
              L.push(
                O.createElement(E, {
                  data: j,
                  key: C(D, j),
                  index: D,
                  isScrolling: N ? q : void 0,
                  style: this._getItemStyle(D),
                })
              );
          var _ = r(this.props, this._instanceProps);
          return O.createElement(
            R || A || "div",
            {
              className: f,
              onScroll: V,
              ref: this._outerRefSetter,
              style: ie(
                {
                  position: "relative",
                  height: g,
                  width: W,
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  willChange: "transform",
                  direction: v,
                },
                T
              ),
            },
            O.createElement(S || b || "div", {
              children: L,
              ref: w,
              style: {
                height: k ? "100%" : _,
                pointerEvents: q ? "none" : void 0,
                width: k ? _ : "100%",
              },
            })
          );
        }),
        (m._callPropsCallbacks = function () {
          if (typeof this.props.onItemsRendered == "function") {
            var h = this.props.itemCount;
            if (h > 0) {
              var E = this._getRangeToRender(),
                f = E[0],
                v = E[1],
                g = E[2],
                w = E[3];
              this._callOnItemsRendered(f, v, g, w);
            }
          }
          if (typeof this.props.onScroll == "function") {
            var S = this.state,
              b = S.scrollDirection,
              x = S.scrollOffset,
              j = S.scrollUpdateWasRequested;
            this._callOnScroll(b, x, j);
          }
        }),
        (m._getRangeToRender = function () {
          var h = this.props,
            E = h.itemCount,
            f = h.overscanCount,
            v = this.state,
            g = v.isScrolling,
            w = v.scrollDirection,
            S = v.scrollOffset;
          if (E === 0) return [0, 0, 0, 0];
          var b = a(this.props, S, this._instanceProps),
            x = l(this.props, b, S, this._instanceProps),
            j = !g || w === "backward" ? Math.max(1, f) : 1,
            P = !g || w === "forward" ? Math.max(1, f) : 1;
          return [
            Math.max(0, b - j),
            Math.max(0, Math.min(E - 1, x + P)),
            b,
            x,
          ];
        }),
        p
      );
    })(O.PureComponent)),
    (t.defaultProps = {
      direction: "ltr",
      itemData: void 0,
      layout: "vertical",
      overscanCount: 2,
      useIsScrolling: !1,
    }),
    t
  );
}
var zP = function (t, n) {
    t.children,
      t.direction,
      t.height,
      t.layout,
      t.innerTagName,
      t.outerTagName,
      t.width,
      n.instance;
  },
  BP = 50,
  di = function (t, n, r) {
    var i = t,
      o = i.itemSize,
      a = r.itemMetadataMap,
      l = r.lastMeasuredIndex;
    if (n > l) {
      var u = 0;
      if (l >= 0) {
        var s = a[l];
        u = s.offset + s.size;
      }
      for (var c = l + 1; c <= n; c++) {
        var d = o(c);
        (a[c] = { offset: u, size: d }), (u += d);
      }
      r.lastMeasuredIndex = n;
    }
    return a[n];
  },
  VP = function (t, n, r) {
    var i = n.itemMetadataMap,
      o = n.lastMeasuredIndex,
      a = o > 0 ? i[o].offset : 0;
    return a >= r ? Ly(t, n, o, 0, r) : HP(t, n, Math.max(0, o), r);
  },
  Ly = function (t, n, r, i, o) {
    for (; i <= r; ) {
      var a = i + Math.floor((r - i) / 2),
        l = di(t, a, n).offset;
      if (l === o) return a;
      l < o ? (i = a + 1) : l > o && (r = a - 1);
    }
    return i > 0 ? i - 1 : 0;
  },
  HP = function (t, n, r, i) {
    for (var o = t.itemCount, a = 1; r < o && di(t, r, n).offset < i; )
      (r += a), (a *= 2);
    return Ly(t, n, Math.min(r, o - 1), Math.floor(r / 2), i);
  },
  Zh = function (t, n) {
    var r = t.itemCount,
      i = n.itemMetadataMap,
      o = n.estimatedItemSize,
      a = n.lastMeasuredIndex,
      l = 0;
    if ((a >= r && (a = r - 1), a >= 0)) {
      var u = i[a];
      l = u.offset + u.size;
    }
    var s = r - a - 1,
      c = s * o;
    return l + c;
  },
  WP = Dy({
    getItemOffset: function (t, n, r) {
      return di(t, n, r).offset;
    },
    getItemSize: function (t, n, r) {
      return r.itemMetadataMap[n].size;
    },
    getEstimatedTotalSize: Zh,
    getOffsetForIndexAndAlignment: function (t, n, r, i, o, a) {
      var l = t.direction,
        u = t.height,
        s = t.layout,
        c = t.width,
        d = l === "horizontal" || s === "horizontal",
        p = d ? c : u,
        m = di(t, n, o),
        y = Zh(t, o),
        h = Math.max(0, Math.min(y - p, m.offset)),
        E = Math.max(0, m.offset - p + m.size + a);
      switch (
        (r === "smart" &&
          (i >= E - p && i <= h + p ? (r = "auto") : (r = "center")),
        r)
      ) {
        case "start":
          return h;
        case "end":
          return E;
        case "center":
          return Math.round(E + (h - E) / 2);
        case "auto":
        default:
          return i >= E && i <= h ? i : i < E ? E : h;
      }
    },
    getStartIndexForOffset: function (t, n, r) {
      return VP(t, r, n);
    },
    getStopIndexForStartIndex: function (t, n, r, i) {
      for (
        var o = t.direction,
          a = t.height,
          l = t.itemCount,
          u = t.layout,
          s = t.width,
          c = o === "horizontal" || u === "horizontal",
          d = c ? s : a,
          p = di(t, n, i),
          m = r + d,
          y = p.offset + p.size,
          h = n;
        h < l - 1 && y < m;

      )
        h++, (y += di(t, h, i).size);
      return h;
    },
    initInstanceProps: function (t, n) {
      var r = t,
        i = r.estimatedItemSize,
        o = {
          itemMetadataMap: {},
          estimatedItemSize: i || BP,
          lastMeasuredIndex: -1,
        };
      return (
        (n.resetAfterIndex = function (a, l) {
          l === void 0 && (l = !0),
            (o.lastMeasuredIndex = Math.min(o.lastMeasuredIndex, a - 1)),
            n._getItemStyleCache(-1),
            l && n.forceUpdate();
        }),
        o
      );
    },
    shouldResetStyleCacheOnItemSizeChange: !1,
    validateProps: function (t) {
      t.itemSize;
    },
  }),
  QP = Ry({
    getColumnOffset: function (t, n) {
      var r = t.columnWidth;
      return n * r;
    },
    getColumnWidth: function (t, n) {
      var r = t.columnWidth;
      return r;
    },
    getRowOffset: function (t, n) {
      var r = t.rowHeight;
      return n * r;
    },
    getRowHeight: function (t, n) {
      var r = t.rowHeight;
      return r;
    },
    getEstimatedTotalHeight: function (t) {
      var n = t.rowCount,
        r = t.rowHeight;
      return r * n;
    },
    getEstimatedTotalWidth: function (t) {
      var n = t.columnCount,
        r = t.columnWidth;
      return r * n;
    },
    getOffsetForColumnAndAlignment: function (t, n, r, i, o, a) {
      var l = t.columnCount,
        u = t.columnWidth,
        s = t.width,
        c = Math.max(0, l * u - s),
        d = Math.min(c, n * u),
        p = Math.max(0, n * u - s + a + u);
      switch (
        (r === "smart" &&
          (i >= p - s && i <= d + s ? (r = "auto") : (r = "center")),
        r)
      ) {
        case "start":
          return d;
        case "end":
          return p;
        case "center":
          var m = Math.round(p + (d - p) / 2);
          return m < Math.ceil(s / 2) ? 0 : m > c + Math.floor(s / 2) ? c : m;
        case "auto":
        default:
          return i >= p && i <= d ? i : p > d || i < p ? p : d;
      }
    },
    getOffsetForRowAndAlignment: function (t, n, r, i, o, a) {
      var l = t.rowHeight,
        u = t.height,
        s = t.rowCount,
        c = Math.max(0, s * l - u),
        d = Math.min(c, n * l),
        p = Math.max(0, n * l - u + a + l);
      switch (
        (r === "smart" &&
          (i >= p - u && i <= d + u ? (r = "auto") : (r = "center")),
        r)
      ) {
        case "start":
          return d;
        case "end":
          return p;
        case "center":
          var m = Math.round(p + (d - p) / 2);
          return m < Math.ceil(u / 2) ? 0 : m > c + Math.floor(u / 2) ? c : m;
        case "auto":
        default:
          return i >= p && i <= d ? i : p > d || i < p ? p : d;
      }
    },
    getColumnStartIndexForOffset: function (t, n) {
      var r = t.columnWidth,
        i = t.columnCount;
      return Math.max(0, Math.min(i - 1, Math.floor(n / r)));
    },
    getColumnStopIndexForStartIndex: function (t, n, r) {
      var i = t.columnWidth,
        o = t.columnCount,
        a = t.width,
        l = n * i,
        u = Math.ceil((a + r - l) / i);
      return Math.max(0, Math.min(o - 1, n + u - 1));
    },
    getRowStartIndexForOffset: function (t, n) {
      var r = t.rowHeight,
        i = t.rowCount;
      return Math.max(0, Math.min(i - 1, Math.floor(n / r)));
    },
    getRowStopIndexForStartIndex: function (t, n, r) {
      var i = t.rowHeight,
        o = t.rowCount,
        a = t.height,
        l = n * i,
        u = Math.ceil((a + r - l) / i);
      return Math.max(0, Math.min(o - 1, n + u - 1));
    },
    initInstanceProps: function (t) {},
    shouldResetStyleCacheOnItemSizeChange: !0,
    validateProps: function (t) {
      t.columnWidth, t.rowHeight;
    },
  }),
  GP = Dy({
    getItemOffset: function (t, n) {
      var r = t.itemSize;
      return n * r;
    },
    getItemSize: function (t, n) {
      var r = t.itemSize;
      return r;
    },
    getEstimatedTotalSize: function (t) {
      var n = t.itemCount,
        r = t.itemSize;
      return r * n;
    },
    getOffsetForIndexAndAlignment: function (t, n, r, i, o, a) {
      var l = t.direction,
        u = t.height,
        s = t.itemCount,
        c = t.itemSize,
        d = t.layout,
        p = t.width,
        m = l === "horizontal" || d === "horizontal",
        y = m ? p : u,
        h = Math.max(0, s * c - y),
        E = Math.min(h, n * c),
        f = Math.max(0, n * c - y + c + a);
      switch (
        (r === "smart" &&
          (i >= f - y && i <= E + y ? (r = "auto") : (r = "center")),
        r)
      ) {
        case "start":
          return E;
        case "end":
          return f;
        case "center": {
          var v = Math.round(f + (E - f) / 2);
          return v < Math.ceil(y / 2) ? 0 : v > h + Math.floor(y / 2) ? h : v;
        }
        case "auto":
        default:
          return i >= f && i <= E ? i : i < f ? f : E;
      }
    },
    getStartIndexForOffset: function (t, n) {
      var r = t.itemCount,
        i = t.itemSize;
      return Math.max(0, Math.min(r - 1, Math.floor(n / i)));
    },
    getStopIndexForStartIndex: function (t, n, r) {
      var i = t.direction,
        o = t.height,
        a = t.itemCount,
        l = t.itemSize,
        u = t.layout,
        s = t.width,
        c = i === "horizontal" || u === "horizontal",
        d = n * l,
        p = c ? s : o,
        m = Math.ceil((p + r - d) / l);
      return Math.max(0, Math.min(a - 1, n + m - 1));
    },
    initInstanceProps: function (t) {},
    shouldResetStyleCacheOnItemSizeChange: !0,
    validateProps: function (t) {
      t.itemSize;
    },
  });
function Id(e, t) {
  for (var n in e) if (!(n in t)) return !0;
  for (var r in t) if (e[r] !== t[r]) return !0;
  return !1;
}
var KP = ["style"],
  qP = ["style"];
function Ny(e, t) {
  var n = e.style,
    r = md(e, KP),
    i = t.style,
    o = md(t, qP);
  return !Id(n, i) && !Id(r, o);
}
function YP(e, t) {
  return !Ny(this.props, e) || Id(this.state, t);
}
const ZP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        FixedSizeGrid: QP,
        FixedSizeList: GP,
        VariableSizeGrid: NP,
        VariableSizeList: WP,
        areEqual: Ny,
        shouldComponentUpdate: YP,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  XP = vv(ZP);
var $y = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (r, i, o) {
      n.o(r, i) || Object.defineProperty(r, i, { enumerable: !0, get: o });
    }),
    (n.r = function (r) {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(r, "__esModule", { value: !0 });
    }),
    (n.t = function (r, i) {
      if (
        (1 & i && (r = n(r)),
        8 & i || (4 & i && typeof r == "object" && r && r.__esModule))
      )
        return r;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: r }),
        2 & i && typeof r != "string")
      )
        for (var a in r)
          n.d(
            o,
            a,
            function (l) {
              return r[l];
            }.bind(null, a)
          );
      return o;
    }),
    (n.n = function (r) {
      var i =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return n.d(i, "a", i), i;
    }),
    (n.o = function (r, i) {
      return Object.prototype.hasOwnProperty.call(r, i);
    }),
    (n.p = ""),
    n((n.s = 6))
  );
})([
  function (e, t) {
    e.exports = O;
  },
  function (e, t, n) {
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return s;
      });
    var r = n(0),
      i = function (c, d) {
        for (var p = 0, m = d.length, y = c.length; p < m; p++, y++)
          c[y] = d[p];
        return c;
      };
    function o(c) {
      return ((c = c || [])[0] || {}).options !== void 0
        ? c.reduce(function (d, p) {
            return d + p.options.length;
          }, 0)
        : c.length;
    }
    function a(c) {
      return c.reduce(function (d, p) {
        var m = p.props.children,
          y = m === void 0 ? [] : m;
        return i(i(i([], d), [r.cloneElement(p, { type: "group" }, [])]), y);
      }, []);
    }
    function l(c) {
      return c.props.isFocused === !0;
    }
    function u(c) {
      return Math.max(c.findIndex(l), 0);
    }
    function s(c) {
      var d = c.groupHeadingStyles,
        p = c.noOptionsMsgStyles,
        m = c.optionStyles,
        y = c.loadingMsgStyles;
      return function (h) {
        var E = h.props,
          f = E.type,
          v = E.children,
          g = E.inputValue,
          w = E.selectProps,
          S = w.noOptionsMessage,
          b = w.loadingMessage;
        if (f === "group") {
          var x = d.height;
          return x === void 0 ? 25 : x;
        }
        if (f === "option") {
          var j = m.height;
          return j === void 0 ? 35 : j;
        }
        if (typeof S == "function" && v === S({ inputValue: g })) {
          var P = p.height;
          return P === void 0 ? 35 : P;
        }
        if (typeof b == "function" && v === b({ inputValue: g })) {
          var C = y.height;
          return C === void 0 ? 35 : C;
        }
        return 35;
      };
    }
  },
  function (e, t, n) {
    var r = n(1),
      i = n(0),
      o = n(5),
      a = function () {
        return (a =
          Object.assign ||
          function (s) {
            for (var c, d = 1, p = arguments.length; d < p; d++)
              for (var m in (c = arguments[d]))
                Object.prototype.hasOwnProperty.call(c, m) && (s[m] = c[m]);
            return s;
          }).apply(this, arguments);
      },
      l = function (s, c) {
        var d = {};
        for (var p in s)
          Object.prototype.hasOwnProperty.call(s, p) &&
            c.indexOf(p) < 0 &&
            (d[p] = s[p]);
        if (s != null && typeof Object.getOwnPropertySymbols == "function") {
          var m = 0;
          for (p = Object.getOwnPropertySymbols(s); m < p.length; m++)
            c.indexOf(p[m]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[m]) &&
              (d[p[m]] = s[p[m]]);
        }
        return d;
      };
    function u(s) {
      var c = s.data,
        d = s.index,
        p = s.setMeasuredHeight,
        m = i.useRef(null);
      return (
        i.useLayoutEffect(
          function () {
            if (m.current) {
              var y = m.current.getBoundingClientRect().height;
              p({ index: d, measuredHeight: y });
            }
          },
          [m.current]
        ),
        i.createElement("div", { key: "option-" + d, ref: m }, c)
      );
    }
    t.a = function (s) {
      var c = i.useMemo(
          function () {
            var D = i.Children.toArray(s.children),
              _ = D[0] || {};
            if (i.isValidElement(_)) {
              var I = _.props,
                Z = (I === void 0 ? {} : I).data,
                H = (Z === void 0 ? {} : Z).options,
                de = (H === void 0 ? [] : H).length > 0,
                re = de && Object(r.c)(D);
              return de ? re : D;
            }
            return [];
          },
          [s.children]
        ),
        d = s.getStyles,
        p = d("groupHeading", s),
        m = d("loadingMessage", s),
        y = d("noOptionsMessage", s),
        h = d("option", s),
        E = Object(r.b)({
          groupHeadingStyles: p,
          noOptionsMsgStyles: y,
          optionStyles: h,
          loadingMsgStyles: m,
        }),
        f = i.useMemo(
          function () {
            return c.map(E);
          },
          [c]
        ),
        v = i.useMemo(
          function () {
            return Object(r.d)(c);
          },
          [c]
        ),
        g = c.length,
        w = i.useState({}),
        S = w[0],
        b = w[1],
        x = d("menuList", s),
        j = x.maxHeight,
        P = x.paddingBottom,
        C = P === void 0 ? 0 : P,
        M = x.paddingTop,
        R = M === void 0 ? 0 : M,
        A = l(x, ["maxHeight", "paddingBottom", "paddingTop"]),
        T = i.useMemo(
          function () {
            return f.reduce(function (D, _, I) {
              return S[I] ? D + S[I] : D + _;
            }, 0);
          },
          [f, S]
        ),
        N = T + C + R,
        W = Math.min(j, N),
        q = Math.floor(T / g),
        k = s.innerRef,
        V = s.selectProps || {},
        B = V.classNamePrefix,
        G = V.isMulti,
        U = i.useRef(null);
      i.useEffect(
        function () {
          b({});
        },
        [s.children]
      );
      var L = function (D) {
        var _ = D.index,
          I = D.measuredHeight;
        (S[_] !== void 0 && S[_] === I) ||
          (b(function (Z) {
            var H;
            return a(a({}, Z), (((H = {})[_] = I), H));
          }),
          U.current && U.current.resetAfterIndex(_));
      };
      return (
        i.useEffect(
          function () {
            v >= 0 && U.current !== null && U.current.scrollToItem(v);
          },
          [v, c, U]
        ),
        i.createElement(
          o.VariableSizeList,
          {
            className: B
              ? B + "__menu-list" + (G ? " " + B + "__menu-list--is-multi" : "")
              : "",
            style: A,
            ref: U,
            outerRef: k,
            estimatedItemSize: q,
            innerElementType: i.forwardRef(function (D, _) {
              var I = D.style,
                Z = l(D, ["style"]);
              return i.createElement(
                "div",
                a(
                  {
                    ref: _,
                    style: a(a({}, I), {
                      height: parseFloat(I.height) + C + R + "px",
                    }),
                  },
                  Z
                )
              );
            }),
            height: W,
            width: "100%",
            itemCount: g,
            itemData: c,
            itemSize: function (D) {
              return S[D] || f[D];
            },
          },
          function (D) {
            var _ = D.data,
              I = D.index,
              Z = D.style;
            return i.createElement(
              "div",
              {
                style: a(a({}, Z), {
                  top: parseFloat(Z.top.toString()) + R + "px",
                }),
              },
              i.createElement(u, { data: _[I], index: I, setMeasuredHeight: L })
            );
          }
        )
      );
    };
  },
  function (e, t) {
    e.exports = MP;
  },
  function (e, t, n) {
    var r = n(2),
      i = n(0),
      o = n(3),
      a = n.n(o),
      l = n(1),
      u = function () {
        return (u =
          Object.assign ||
          function (c) {
            for (var d, p = 1, m = arguments.length; p < m; p++)
              for (var y in (d = arguments[p]))
                Object.prototype.hasOwnProperty.call(d, y) && (c[y] = d[y]);
            return c;
          }).apply(this, arguments);
      },
      s = function (c, d) {
        var p = {};
        for (var m in c)
          Object.prototype.hasOwnProperty.call(c, m) &&
            d.indexOf(m) < 0 &&
            (p[m] = c[m]);
        if (c != null && typeof Object.getOwnPropertySymbols == "function") {
          var y = 0;
          for (m = Object.getOwnPropertySymbols(c); y < m.length; y++)
            d.indexOf(m[y]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(c, m[y]) &&
              (p[m[y]] = c[m[y]]);
        }
        return p;
      };
    t.a = i.forwardRef(function (c, d) {
      var p = c.windowThreshold,
        m = p === void 0 ? 100 : p,
        y = s(c, ["windowThreshold"]),
        h =
          i.useMemo(
            function () {
              return Object(l.a)(y.options);
            },
            [y.options]
          ) >= m;
      return i.createElement(
        a.a,
        u({}, y, {
          components: u(u({}, y.components), h ? { MenuList: r.a } : {}),
          ref: d,
        })
      );
    });
  },
  function (e, t) {
    e.exports = XP;
  },
  function (e, t, n) {
    n.r(t);
    var r = n(4),
      i = n(3);
    for (var o in i)
      ["default", "WindowedMenuList"].indexOf(o) < 0 &&
        (function (l) {
          n.d(t, l, function () {
            return i[l];
          });
        })(o);
    var a = n(2);
    n.d(t, "WindowedMenuList", function () {
      return a.a;
    }),
      (t.default = r.a);
  },
]);
const JP = Rd($y),
  eI = {
    control: (e, t) => ({
      ...e,
      cursor: "pointer",
      boxShadow: "none",
      border: t.isFocused ? "0.063rem solid #1e75e5" : "0.063rem solid #ccc",
      borderRadius: "0.5rem",
      width: "18rem",
      background: "transparent",
      height: "5rem",
      fontSize: "1.8rem",
      lineHeight: "1.5",
      textAlign: "center",
      margin: "5rem 5rem 0 5rem",
      color: "#7c7c7c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),
    indicatorsContainer: (e) => ({ ...e, display: "none" }),
    option: (e, t) => ({
      ...e,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: t.isFocused
        ? "#f2f2f2"
        : t.isSelected
        ? "#EFF6FF"
        : "transparent",
      color: t.isSelected ? "#06110A" : "#7c7c7c",
      cursor: "pointer",
      textAlign: "center",
      width: "19rem",
      margin: "auto",
      borderRadius: "0.313rem",
    }),
    menu: (e) => ({
      ...e,
      width: "21rem",
      maxHeight: "22rem",
      overflowY: "auto",
      scrollbarWidth: "none",
      margin: "1rem 3.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&::-webkit-scrollbar": {
        width: "0",
        background: "transparent",
        display: "none",
      },
      "&::-webkit-scrollbar-thumb": {
        width: "0",
        background: "transparent",
        display: "none",
      },
    }),
    menuList: (e) => ({
      ...e,
      width: "21rem",
      height: "21rem",
      overflowY: "scroll",
      scrollbarWidth: "none",
      margin: "1rem 0rem 1rem 0",
      "&::WebkitScrollbar": {
        width: "0",
        background: "transparent",
        display: "none",
      },
    }),
  },
  tI = eI,
  _y = ({
    optionsArray: e,
    placeHolder: t,
    selected: n,
    setSelected: r,
    isSearchable: i,
    customOption: o,
  }) => {
    const [a, l] = O.useState(null),
      u = (c) => {
        const { label: d, value: p, data: m } = c;
        return F.jsx($y.components.Option, { ...c, children: d });
      },
      s = (c) => {
        l(c), r({ ...n, value: c.value });
      };
    return F.jsx(JP, {
      closeMenuOnSelect: !0,
      components: { Option: o || u },
      options: e,
      value: a,
      onChange: s,
      isSearchable: i,
      placeholder: t,
      styles: tI,
    });
  },
  ls = "/assets/arrow-ff8f83ac.svg";
function nI() {
  const [e, t] = O.useState(1980),
    [n, r] = O.useState([]),
    [i, o] = O.useState({ value: "", field: "yearOfBirth" }),
    a = _i();
  O.useEffect(() => {
    const u = new Date().getFullYear(),
      s = [];
    for (let c = e; c <= u - 4; c++) s.push({ label: c, value: c });
    r(s);
  }, [e]);
  const l = jn();
  return F.jsxs(Jf, {
    children: [
      F.jsxs(ep, {
        children: [
          F.jsx("div", {
            style: { width: "20%" },
            children: F.jsx(Lt, {
              to: "/interests",
              children: F.jsx("img", { src: ls }),
            }),
          }),
          F.jsx(tp, { children: F.jsx(np, { children: "Add Age" }) }),
          F.jsx("div", { style: { width: "20%" } }),
        ],
      }),
      F.jsx(rp, {
        children: F.jsxs(ct, {
          style: { flexDirection: "column", height: "100%" },
          children: [
            F.jsx(ct, {
              style: {
                height: "10%",
                width: "100%",
                justifyContent: "flex-start",
              },
              children: F.jsx(ip, { children: "Add your Year of Birth" }),
            }),
            F.jsx(ap, {
              children: F.jsx(_y, {
                optionsArray: n,
                placeHolder: "Year",
                selected: i,
                setSelected: o,
                isSearchable: !1,
              }),
            }),
            F.jsx(ct, {
              style: { height: "20%", width: "100%" },
              children: F.jsx(op, {
                onClick: () => {
                  i.value !== void 0 &&
                    i.value !== null &&
                    (l(_n({ field: i.field, value: i.value.toString() })),
                    a("/nationalityPage"));
                },
                children: F.jsx("i", { children: "Save & Next" }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function rI() {
  const e = [],
    n = ["User1", "User2"];
  for (let r = 0; r < 10; r++) {
    const i = Math.floor(Math.random() * n.length),
      a = {
        sender: n[i],
        message: `message number ${
          r + 1
        }. It is intended to simulate in the chat display area.`,
        timestamp: new Date().toISOString(),
      };
    e.push(a);
  }
  return e;
}
const iI = rI();
function oI({ message: e }) {
  return F.jsx("div", {
    style: {
      padding: "0.5rem",
      margin: "1rem",
      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
      width: "70%",
      alignSelf: e.sender === "User1" ? "flex-end" : "flex-start",
      borderRadius:
        e.sender === "User1"
          ? "0.9rem 0.9rem 0 0.9rem"
          : "0 0.9rem 0.9rem 0.9rem",
      backgroundColor: e.sender === "User1" ? "#50924E" : "#FFFFFF",
      color: e.sender === "User1" ? "white" : "#3D4260",
    },
    children: F.jsx("p", { children: `${e.message}` }),
  });
}
const aI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    overflow-y: scroll;
    background-color: #fafafa;
    border-radius: 2.5rem 2.5rem 0 0;
    display: flex;
    flex-direction: column;
    flex: 1 2 20%;
  }
`;
function lI() {
  return F.jsx(aI, {
    children: iI.map((e, t) => F.jsx(oI, { message: e }, t)),
  });
}
const uI = "/assets/prf-6be0f302.webp",
  sI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.2rem 2rem 1.2rem 1.5rem;
    margin: 1rem 0;
  }
`,
  cI = J.div`
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  @media (min-width: 350px) and (max-width: 700px) {
    width: 3rem;
    height: 3rem;
    border-radius: 6249.938rem;
    overflow: hidden;
    margin: 0 1.5rem 0 1rem;
    background-color: #ffffff;
  }
`;
function dI() {
  return F.jsxs(sI, {
    children: [
      F.jsx("img", { src: ls }),
      F.jsx(cI, {
        children: F.jsx("img", {
          src: uI,
          style: { width: "100%", height: "100%", objectFit: "cover" },
        }),
      }),
      F.jsx("label", {
        style: { color: "#FFFFFF", fontWeight: "1000" },
        children: "John Doe",
      }),
    ],
  });
}
const fI = "/assets/CoffeeMugWithGreenBG-f14c89ce.svg",
  pI = "/assets/PaperPlane-2a9be91d.svg",
  mI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
  }
`,
  hI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #50924e;
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 6249.938rem;
    /* flex: 0.4; */
  }
`,
  vI = J.input`
  border-radius: 43px;
  background-color: #ecf0f0;
  border: none;
  width: 1rem;
  height: 4rem;
  text-indent: 1rem;
  flex-grow: 1.5;
  margin: 0.3rem 1.5rem;
`,
  gI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    width: 100%;
    background-color: #ffffff;
    flex-grow: 0.1;
    display: flex;
    align-items: center;
  }
`,
  yI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`;
function SI() {
  return F.jsx(gI, {
    children: F.jsxs(mI, {
      children: [
        F.jsx(hI, { children: F.jsx("img", { src: fI }) }),
        F.jsx(vI, { placeholder: "Start typing..." }),
        F.jsx(yI, { children: F.jsx("img", { src: pI }) }),
      ],
    }),
  });
}
const wI = J.div`
  @media (min-width: 350px) and (max-width: 700px) {
    background-color: #50924e;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
function EI() {
  return F.jsxs(wI, {
    children: [F.jsx(dI, {}), F.jsx(lI, {}), F.jsx(SI, {})],
  });
}
const bI = zn.memo((e) => {
    const { label: t, value: n, data: r } = e;
    return F.jsx(mp.Option, {
      ...e,
      children: F.jsxs(ct, {
        style: { justifyContent: "flex-start", width: "100%" },
        children: [
          F.jsx("img", {
            loading: "lazy",
            src: r.image,
            alt: t,
            style: {
              marginRight: "0.5rem",
              width: "3.125rem",
              borderRadius: "2rem",
              margin: "0 1rem 0 0",
            },
          }),
          t,
        ],
      }),
    });
  }),
  xI = [
    {
      label: "Ascension Island",
      value: "AC",
      code: "AC",
      emoji: "🇦🇨",
      unicode: "U+1F1E6 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
    },
    {
      label: "Andorra",
      value: "AD",
      code: "AD",
      emoji: "🇦🇩",
      unicode: "U+1F1E6 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
    },
    {
      label: "United Arab Emirates",
      value: "AE",
      code: "AE",
      emoji: "🇦🇪",
      unicode: "U+1F1E6 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
    },
    {
      label: "Afghanistan",
      value: "AF",
      code: "AF",
      emoji: "🇦🇫",
      unicode: "U+1F1E6 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
    },
    {
      label: "Antigua & Barbuda",
      value: "AG",
      code: "AG",
      emoji: "🇦🇬",
      unicode: "U+1F1E6 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
    },
    {
      label: "Anguilla",
      value: "AI",
      code: "AI",
      emoji: "🇦🇮",
      unicode: "U+1F1E6 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
    },
    {
      label: "Albania",
      value: "AL",
      code: "AL",
      emoji: "🇦🇱",
      unicode: "U+1F1E6 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
    },
    {
      label: "Armenia",
      value: "AM",
      code: "AM",
      emoji: "🇦🇲",
      unicode: "U+1F1E6 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
    },
    {
      label: "Angola",
      value: "AO",
      code: "AO",
      emoji: "🇦🇴",
      unicode: "U+1F1E6 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
    },
    {
      label: "Antarctica",
      value: "AQ",
      code: "AQ",
      emoji: "🇦🇶",
      unicode: "U+1F1E6 U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
    },
    {
      label: "Argentina",
      value: "AR",
      code: "AR",
      emoji: "🇦🇷",
      unicode: "U+1F1E6 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
    },
    {
      label: "American Samoa",
      value: "AS",
      code: "AS",
      emoji: "🇦🇸",
      unicode: "U+1F1E6 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
    },
    {
      label: "Austria",
      value: "AT",
      code: "AT",
      emoji: "🇦🇹",
      unicode: "U+1F1E6 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
    },
    {
      label: "Australia",
      value: "AU",
      code: "AU",
      emoji: "🇦🇺",
      unicode: "U+1F1E6 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
    },
    {
      label: "Aruba",
      value: "AW",
      code: "AW",
      emoji: "🇦🇼",
      unicode: "U+1F1E6 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
    },
    {
      label: "Åland Islands",
      value: "AX",
      code: "AX",
      emoji: "🇦🇽",
      unicode: "U+1F1E6 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
    },
    {
      label: "Azerbaijan",
      value: "AZ",
      code: "AZ",
      emoji: "🇦🇿",
      unicode: "U+1F1E6 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
    },
    {
      label: "Bosnia & Herzegovina",
      value: "BA",
      code: "BA",
      emoji: "🇧🇦",
      unicode: "U+1F1E7 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
    },
    {
      label: "Barbados",
      value: "BB",
      code: "BB",
      emoji: "🇧🇧",
      unicode: "U+1F1E7 U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
    },
    {
      label: "Bangladesh",
      value: "BD",
      code: "BD",
      emoji: "🇧🇩",
      unicode: "U+1F1E7 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
    },
    {
      label: "Belgium",
      value: "BE",
      code: "BE",
      emoji: "🇧🇪",
      unicode: "U+1F1E7 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
    },
    {
      label: "Burkina Faso",
      value: "BF",
      code: "BF",
      emoji: "🇧🇫",
      unicode: "U+1F1E7 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
    },
    {
      label: "Bulgaria",
      value: "BG",
      code: "BG",
      emoji: "🇧🇬",
      unicode: "U+1F1E7 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
    },
    {
      label: "Bahrain",
      value: "BH",
      code: "BH",
      emoji: "🇧🇭",
      unicode: "U+1F1E7 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
    },
    {
      label: "Burundi",
      value: "BI",
      code: "BI",
      emoji: "🇧🇮",
      unicode: "U+1F1E7 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
    },
    {
      label: "Benin",
      value: "BJ",
      code: "BJ",
      emoji: "🇧🇯",
      unicode: "U+1F1E7 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
    },
    {
      label: "St. Barthélemy",
      value: "BL",
      code: "BL",
      emoji: "🇧🇱",
      unicode: "U+1F1E7 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
    },
    {
      label: "Bermuda",
      value: "BM",
      code: "BM",
      emoji: "🇧🇲",
      unicode: "U+1F1E7 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
    },
    {
      label: "Brunei",
      value: "BN",
      code: "BN",
      emoji: "🇧🇳",
      unicode: "U+1F1E7 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
    },
    {
      label: "Bolivia",
      value: "BO",
      code: "BO",
      emoji: "🇧🇴",
      unicode: "U+1F1E7 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
    },
    {
      label: "Caribbean Netherlands",
      value: "BQ",
      code: "BQ",
      emoji: "🇧🇶",
      unicode: "U+1F1E7 U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg",
    },
    {
      label: "Brazil",
      value: "BR",
      code: "BR",
      emoji: "🇧🇷",
      unicode: "U+1F1E7 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
    },
    {
      label: "Bahamas",
      value: "BS",
      code: "BS",
      emoji: "🇧🇸",
      unicode: "U+1F1E7 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
    },
    {
      label: "Bhutan",
      value: "BT",
      code: "BT",
      emoji: "🇧🇹",
      unicode: "U+1F1E7 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
    },
    {
      label: "Bouvet Island",
      value: "BV",
      code: "BV",
      emoji: "🇧🇻",
      unicode: "U+1F1E7 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
    },
    {
      label: "Botswana",
      value: "BW",
      code: "BW",
      emoji: "🇧🇼",
      unicode: "U+1F1E7 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
    },
    {
      label: "Belarus",
      value: "BY",
      code: "BY",
      emoji: "🇧🇾",
      unicode: "U+1F1E7 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
    },
    {
      label: "Belize",
      value: "BZ",
      code: "BZ",
      emoji: "🇧🇿",
      unicode: "U+1F1E7 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
    },
    {
      label: "Canada",
      value: "CA",
      code: "CA",
      emoji: "🇨🇦",
      unicode: "U+1F1E8 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
    },
    {
      label: "Cocos (Keeling) Islands",
      value: "CC",
      code: "CC",
      emoji: "🇨🇨",
      unicode: "U+1F1E8 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
    },
    {
      label: "Congo - Kinshasa",
      value: "CD",
      code: "CD",
      emoji: "🇨🇩",
      unicode: "U+1F1E8 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
    },
    {
      label: "Central African Republic",
      value: "CF",
      code: "CF",
      emoji: "🇨🇫",
      unicode: "U+1F1E8 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
    },
    {
      label: "Congo - Brazzaville",
      value: "CG",
      code: "CG",
      emoji: "🇨🇬",
      unicode: "U+1F1E8 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
    },
    {
      label: "Switzerland",
      value: "CH",
      code: "CH",
      emoji: "🇨🇭",
      unicode: "U+1F1E8 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
    },
    {
      label: "Côte d’Ivoire",
      value: "CI",
      code: "CI",
      emoji: "🇨🇮",
      unicode: "U+1F1E8 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
    },
    {
      label: "Cook Islands",
      value: "CK",
      code: "CK",
      emoji: "🇨🇰",
      unicode: "U+1F1E8 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
    },
    {
      label: "Chile",
      value: "CL",
      code: "CL",
      emoji: "🇨🇱",
      unicode: "U+1F1E8 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
    },
    {
      label: "Cameroon",
      value: "CM",
      code: "CM",
      emoji: "🇨🇲",
      unicode: "U+1F1E8 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
    },
    {
      label: "China",
      value: "CN",
      code: "CN",
      emoji: "🇨🇳",
      unicode: "U+1F1E8 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
    },
    {
      label: "Colombia",
      value: "CO",
      code: "CO",
      emoji: "🇨🇴",
      unicode: "U+1F1E8 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
    },
    {
      label: "Clipperton Island",
      value: "CP",
      code: "CP",
      emoji: "🇨🇵",
      unicode: "U+1F1E8 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg",
    },
    {
      label: "Costa Rica",
      value: "CR",
      code: "CR",
      emoji: "🇨🇷",
      unicode: "U+1F1E8 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
    },
    {
      label: "Cuba",
      value: "CU",
      code: "CU",
      emoji: "🇨🇺",
      unicode: "U+1F1E8 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
    },
    {
      label: "Cape Verde",
      value: "CV",
      code: "CV",
      emoji: "🇨🇻",
      unicode: "U+1F1E8 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
    },
    {
      label: "Curaçao",
      value: "CW",
      code: "CW",
      emoji: "🇨🇼",
      unicode: "U+1F1E8 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
    },
    {
      label: "Christmas Island",
      value: "CX",
      code: "CX",
      emoji: "🇨🇽",
      unicode: "U+1F1E8 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
    },
    {
      label: "Cyprus",
      value: "CY",
      code: "CY",
      emoji: "🇨🇾",
      unicode: "U+1F1E8 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
    },
    {
      label: "Czechia",
      value: "CZ",
      code: "CZ",
      emoji: "🇨🇿",
      unicode: "U+1F1E8 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
    },
    {
      label: "Germany",
      value: "DE",
      code: "DE",
      emoji: "🇩🇪",
      unicode: "U+1F1E9 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
    },
    {
      label: "Diego Garcia",
      value: "DG",
      code: "DG",
      emoji: "🇩🇬",
      unicode: "U+1F1E9 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg",
    },
    {
      label: "Djibouti",
      value: "DJ",
      code: "DJ",
      emoji: "🇩🇯",
      unicode: "U+1F1E9 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
    },
    {
      label: "Denmark",
      value: "DK",
      code: "DK",
      emoji: "🇩🇰",
      unicode: "U+1F1E9 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
    },
    {
      label: "Dominica",
      value: "DM",
      code: "DM",
      emoji: "🇩🇲",
      unicode: "U+1F1E9 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
    },
    {
      label: "Dominican Republic",
      value: "DO",
      code: "DO",
      emoji: "🇩🇴",
      unicode: "U+1F1E9 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
    },
    {
      label: "Algeria",
      value: "DZ",
      code: "DZ",
      emoji: "🇩🇿",
      unicode: "U+1F1E9 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
    },
    {
      label: "Ceuta & Melilla",
      value: "EA",
      code: "EA",
      emoji: "🇪🇦",
      unicode: "U+1F1EA U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg",
    },
    {
      label: "Ecuador",
      value: "EC",
      code: "EC",
      emoji: "🇪🇨",
      unicode: "U+1F1EA U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
    },
    {
      label: "Estonia",
      value: "EE",
      code: "EE",
      emoji: "🇪🇪",
      unicode: "U+1F1EA U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
    },
    {
      label: "Egypt",
      value: "EG",
      code: "EG",
      emoji: "🇪🇬",
      unicode: "U+1F1EA U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
    },
    {
      label: "Western Sahara",
      value: "EH",
      code: "EH",
      emoji: "🇪🇭",
      unicode: "U+1F1EA U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg",
    },
    {
      label: "Eritrea",
      value: "ER",
      code: "ER",
      emoji: "🇪🇷",
      unicode: "U+1F1EA U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
    },
    {
      label: "Spain",
      value: "ES",
      code: "ES",
      emoji: "🇪🇸",
      unicode: "U+1F1EA U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
    },
    {
      label: "Ethiopia",
      value: "ET",
      code: "ET",
      emoji: "🇪🇹",
      unicode: "U+1F1EA U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
    },
    {
      label: "European Union",
      value: "EU",
      code: "EU",
      emoji: "🇪🇺",
      unicode: "U+1F1EA U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg",
    },
    {
      label: "Finland",
      value: "FI",
      code: "FI",
      emoji: "🇫🇮",
      unicode: "U+1F1EB U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
    },
    {
      label: "Fiji",
      value: "FJ",
      code: "FJ",
      emoji: "🇫🇯",
      unicode: "U+1F1EB U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
    },
    {
      label: "Falkland Islands",
      value: "FK",
      code: "FK",
      emoji: "🇫🇰",
      unicode: "U+1F1EB U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg",
    },
    {
      label: "Micronesia",
      value: "FM",
      code: "FM",
      emoji: "🇫🇲",
      unicode: "U+1F1EB U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg",
    },
    {
      label: "Faroe Islands",
      value: "FO",
      code: "FO",
      emoji: "🇫🇴",
      unicode: "U+1F1EB U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
    },
    {
      label: "France",
      value: "FR",
      code: "FR",
      emoji: "🇫🇷",
      unicode: "U+1F1EB U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    },
    {
      label: "Gabon",
      value: "GA",
      code: "GA",
      emoji: "🇬🇦",
      unicode: "U+1F1EC U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
    },
    {
      label: "United Kingdom",
      value: "GB",
      code: "GB",
      emoji: "🇬🇧",
      unicode: "U+1F1EC U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
    },
    {
      label: "Grenada",
      value: "GD",
      code: "GD",
      emoji: "🇬🇩",
      unicode: "U+1F1EC U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
    },
    {
      label: "Georgia",
      value: "GE",
      code: "GE",
      emoji: "🇬🇪",
      unicode: "U+1F1EC U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
    },
    {
      label: "French Guiana",
      value: "GF",
      code: "GF",
      emoji: "🇬🇫",
      unicode: "U+1F1EC U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
    },
    {
      label: "Guernsey",
      value: "GG",
      code: "GG",
      emoji: "🇬🇬",
      unicode: "U+1F1EC U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
    },
    {
      label: "Ghana",
      value: "GH",
      code: "GH",
      emoji: "🇬🇭",
      unicode: "U+1F1EC U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
    },
    {
      label: "Gibraltar",
      value: "GI",
      code: "GI",
      emoji: "🇬🇮",
      unicode: "U+1F1EC U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
    },
    {
      label: "Greenland",
      value: "GL",
      code: "GL",
      emoji: "🇬🇱",
      unicode: "U+1F1EC U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
    },
    {
      label: "Gambia",
      value: "GM",
      code: "GM",
      emoji: "🇬🇲",
      unicode: "U+1F1EC U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
    },
    {
      label: "Guinea",
      value: "GN",
      code: "GN",
      emoji: "🇬🇳",
      unicode: "U+1F1EC U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
    },
    {
      label: "Guadeloupe",
      value: "GP",
      code: "GP",
      emoji: "🇬🇵",
      unicode: "U+1F1EC U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
    },
    {
      label: "Equatorial Guinea",
      value: "GQ",
      code: "GQ",
      emoji: "🇬🇶",
      unicode: "U+1F1EC U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
    },
    {
      label: "Greece",
      value: "GR",
      code: "GR",
      emoji: "🇬🇷",
      unicode: "U+1F1EC U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
    },
    {
      label: "South Georgia & South Sandwich Islands",
      value: "GS",
      code: "GS",
      emoji: "🇬🇸",
      unicode: "U+1F1EC U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg",
    },
    {
      label: "Guatemala",
      value: "GT",
      code: "GT",
      emoji: "🇬🇹",
      unicode: "U+1F1EC U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
    },
    {
      label: "Guam",
      value: "GU",
      code: "GU",
      emoji: "🇬🇺",
      unicode: "U+1F1EC U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
    },
    {
      label: "Guinea-Bissau",
      value: "GW",
      code: "GW",
      emoji: "🇬🇼",
      unicode: "U+1F1EC U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
    },
    {
      label: "Guyana",
      value: "GY",
      code: "GY",
      emoji: "🇬🇾",
      unicode: "U+1F1EC U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
    },
    {
      label: "Hong Kong SAR China",
      value: "HK",
      code: "HK",
      emoji: "🇭🇰",
      unicode: "U+1F1ED U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg",
    },
    {
      label: "Heard & McDonald Islands",
      value: "HM",
      code: "HM",
      emoji: "🇭🇲",
      unicode: "U+1F1ED U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg",
    },
    {
      label: "Honduras",
      value: "HN",
      code: "HN",
      emoji: "🇭🇳",
      unicode: "U+1F1ED U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
    },
    {
      label: "Croatia",
      value: "HR",
      code: "HR",
      emoji: "🇭🇷",
      unicode: "U+1F1ED U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
    },
    {
      label: "Haiti",
      value: "HT",
      code: "HT",
      emoji: "🇭🇹",
      unicode: "U+1F1ED U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
    },
    {
      label: "Hungary",
      value: "HU",
      code: "HU",
      emoji: "🇭🇺",
      unicode: "U+1F1ED U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
    },
    {
      label: "Canary Islands",
      value: "IC",
      code: "IC",
      emoji: "🇮🇨",
      unicode: "U+1F1EE U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg",
    },
    {
      label: "Indonesia",
      value: "ID",
      code: "ID",
      emoji: "🇮🇩",
      unicode: "U+1F1EE U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
    },
    {
      label: "Ireland",
      value: "IE",
      code: "IE",
      emoji: "🇮🇪",
      unicode: "U+1F1EE U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
    },
    {
      label: "Israel",
      value: "IL",
      code: "IL",
      emoji: "🇮🇱",
      unicode: "U+1F1EE U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
    },
    {
      label: "Isle of Man",
      value: "IM",
      code: "IM",
      emoji: "🇮🇲",
      unicode: "U+1F1EE U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
    },
    {
      label: "India",
      value: "IN",
      code: "IN",
      emoji: "🇮🇳",
      unicode: "U+1F1EE U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    },
    {
      label: "British Indian Ocean Territory",
      value: "IO",
      code: "IO",
      emoji: "🇮🇴",
      unicode: "U+1F1EE U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
    },
    {
      label: "Iraq",
      value: "IQ",
      code: "IQ",
      emoji: "🇮🇶",
      unicode: "U+1F1EE U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
    },
    {
      label: "Iran",
      value: "IR",
      code: "IR",
      emoji: "🇮🇷",
      unicode: "U+1F1EE U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
    },
    {
      label: "Iceland",
      value: "IS",
      code: "IS",
      emoji: "🇮🇸",
      unicode: "U+1F1EE U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
    },
    {
      label: "Italy",
      value: "IT",
      code: "IT",
      emoji: "🇮🇹",
      unicode: "U+1F1EE U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
    },
    {
      label: "Jersey",
      value: "JE",
      code: "JE",
      emoji: "🇯🇪",
      unicode: "U+1F1EF U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
    },
    {
      label: "Jamaica",
      value: "JM",
      code: "JM",
      emoji: "🇯🇲",
      unicode: "U+1F1EF U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
    },
    {
      label: "Jordan",
      value: "JO",
      code: "JO",
      emoji: "🇯🇴",
      unicode: "U+1F1EF U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
    },
    {
      label: "Japan",
      value: "JP",
      code: "JP",
      emoji: "🇯🇵",
      unicode: "U+1F1EF U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
    },
    {
      label: "Kenya",
      value: "KE",
      code: "KE",
      emoji: "🇰🇪",
      unicode: "U+1F1F0 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
    },
    {
      label: "Kyrgyzstan",
      value: "KG",
      code: "KG",
      emoji: "🇰🇬",
      unicode: "U+1F1F0 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
    },
    {
      label: "Cambodia",
      value: "KH",
      code: "KH",
      emoji: "🇰🇭",
      unicode: "U+1F1F0 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
    },
    {
      label: "Kiribati",
      value: "KI",
      code: "KI",
      emoji: "🇰🇮",
      unicode: "U+1F1F0 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
    },
    {
      label: "Comoros",
      value: "KM",
      code: "KM",
      emoji: "🇰🇲",
      unicode: "U+1F1F0 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
    },
    {
      label: "St. Kitts & Nevis",
      value: "KN",
      code: "KN",
      emoji: "🇰🇳",
      unicode: "U+1F1F0 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
    },
    {
      label: "North Korea",
      value: "KP",
      code: "KP",
      emoji: "🇰🇵",
      unicode: "U+1F1F0 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg",
    },
    {
      label: "South Korea",
      value: "KR",
      code: "KR",
      emoji: "🇰🇷",
      unicode: "U+1F1F0 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
    },
    {
      label: "Kuwait",
      value: "KW",
      code: "KW",
      emoji: "🇰🇼",
      unicode: "U+1F1F0 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
    },
    {
      label: "Cayman Islands",
      value: "KY",
      code: "KY",
      emoji: "🇰🇾",
      unicode: "U+1F1F0 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
    },
    {
      label: "Kazakhstan",
      value: "KZ",
      code: "KZ",
      emoji: "🇰🇿",
      unicode: "U+1F1F0 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
    },
    {
      label: "Laos",
      value: "LA",
      code: "LA",
      emoji: "🇱🇦",
      unicode: "U+1F1F1 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
    },
    {
      label: "Lebanon",
      value: "LB",
      code: "LB",
      emoji: "🇱🇧",
      unicode: "U+1F1F1 U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
    },
    {
      label: "St. Lucia",
      value: "LC",
      code: "LC",
      emoji: "🇱🇨",
      unicode: "U+1F1F1 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
    },
    {
      label: "Liechtenstein",
      value: "LI",
      code: "LI",
      emoji: "🇱🇮",
      unicode: "U+1F1F1 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
    },
    {
      label: "Sri Lanka",
      value: "LK",
      code: "LK",
      emoji: "🇱🇰",
      unicode: "U+1F1F1 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
    },
    {
      label: "Liberia",
      value: "LR",
      code: "LR",
      emoji: "🇱🇷",
      unicode: "U+1F1F1 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
    },
    {
      label: "Lesotho",
      value: "LS",
      code: "LS",
      emoji: "🇱🇸",
      unicode: "U+1F1F1 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
    },
    {
      label: "Lithuania",
      value: "LT",
      code: "LT",
      emoji: "🇱🇹",
      unicode: "U+1F1F1 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
    },
    {
      label: "Luxembourg",
      value: "LU",
      code: "LU",
      emoji: "🇱🇺",
      unicode: "U+1F1F1 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
    },
    {
      label: "Latvia",
      value: "LV",
      code: "LV",
      emoji: "🇱🇻",
      unicode: "U+1F1F1 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
    },
    {
      label: "Libya",
      value: "LY",
      code: "LY",
      emoji: "🇱🇾",
      unicode: "U+1F1F1 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
    },
    {
      label: "Morocco",
      value: "MA",
      code: "MA",
      emoji: "🇲🇦",
      unicode: "U+1F1F2 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
    },
    {
      label: "Monaco",
      value: "MC",
      code: "MC",
      emoji: "🇲🇨",
      unicode: "U+1F1F2 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
    },
    {
      label: "Moldova",
      value: "MD",
      code: "MD",
      emoji: "🇲🇩",
      unicode: "U+1F1F2 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
    },
    {
      label: "Montenegro",
      value: "ME",
      code: "ME",
      emoji: "🇲🇪",
      unicode: "U+1F1F2 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
    },
    {
      label: "St. Martin",
      value: "MF",
      code: "MF",
      emoji: "🇲🇫",
      unicode: "U+1F1F2 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
    },
    {
      label: "Madagascar",
      value: "MG",
      code: "MG",
      emoji: "🇲🇬",
      unicode: "U+1F1F2 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
    },
    {
      label: "Marshall Islands",
      value: "MH",
      code: "MH",
      emoji: "🇲🇭",
      unicode: "U+1F1F2 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
    },
    {
      label: "North Macedonia",
      value: "MK",
      code: "MK",
      emoji: "🇲🇰",
      unicode: "U+1F1F2 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
    },
    {
      label: "Mali",
      value: "ML",
      code: "ML",
      emoji: "🇲🇱",
      unicode: "U+1F1F2 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
    },
    {
      label: "Myanmar (Burma)",
      value: "MM",
      code: "MM",
      emoji: "🇲🇲",
      unicode: "U+1F1F2 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
    },
    {
      label: "Mongolia",
      value: "MN",
      code: "MN",
      emoji: "🇲🇳",
      unicode: "U+1F1F2 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
    },
    {
      label: "Macao SAR China",
      value: "MO",
      code: "MO",
      emoji: "🇲🇴",
      unicode: "U+1F1F2 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
    },
    {
      label: "Northern Mariana Islands",
      value: "MP",
      code: "MP",
      emoji: "🇲🇵",
      unicode: "U+1F1F2 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
    },
    {
      label: "Martinique",
      value: "MQ",
      code: "MQ",
      emoji: "🇲🇶",
      unicode: "U+1F1F2 U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
    },
    {
      label: "Mauritania",
      value: "MR",
      code: "MR",
      emoji: "🇲🇷",
      unicode: "U+1F1F2 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
    },
    {
      label: "Montserrat",
      value: "MS",
      code: "MS",
      emoji: "🇲🇸",
      unicode: "U+1F1F2 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
    },
    {
      label: "Malta",
      value: "MT",
      code: "MT",
      emoji: "🇲🇹",
      unicode: "U+1F1F2 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
    },
    {
      label: "Mauritius",
      value: "MU",
      code: "MU",
      emoji: "🇲🇺",
      unicode: "U+1F1F2 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
    },
    {
      label: "Maldives",
      value: "MV",
      code: "MV",
      emoji: "🇲🇻",
      unicode: "U+1F1F2 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
    },
    {
      label: "Malawi",
      value: "MW",
      code: "MW",
      emoji: "🇲🇼",
      unicode: "U+1F1F2 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
    },
    {
      label: "Mexico",
      value: "MX",
      code: "MX",
      emoji: "🇲🇽",
      unicode: "U+1F1F2 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
    },
    {
      label: "Malaysia",
      value: "MY",
      code: "MY",
      emoji: "🇲🇾",
      unicode: "U+1F1F2 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
    },
    {
      label: "Mozambique",
      value: "MZ",
      code: "MZ",
      emoji: "🇲🇿",
      unicode: "U+1F1F2 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
    },
    {
      label: "Namibia",
      value: "NA",
      code: "NA",
      emoji: "🇳🇦",
      unicode: "U+1F1F3 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
    },
    {
      label: "New Caledonia",
      value: "NC",
      code: "NC",
      emoji: "🇳🇨",
      unicode: "U+1F1F3 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
    },
    {
      label: "Niger",
      value: "NE",
      code: "NE",
      emoji: "🇳🇪",
      unicode: "U+1F1F3 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
    },
    {
      label: "Norfolk Island",
      value: "NF",
      code: "NF",
      emoji: "🇳🇫",
      unicode: "U+1F1F3 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
    },
    {
      label: "Nigeria",
      value: "NG",
      code: "NG",
      emoji: "🇳🇬",
      unicode: "U+1F1F3 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
    },
    {
      label: "Nicaragua",
      value: "NI",
      code: "NI",
      emoji: "🇳🇮",
      unicode: "U+1F1F3 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
    },
    {
      label: "Netherlands",
      value: "NL",
      code: "NL",
      emoji: "🇳🇱",
      unicode: "U+1F1F3 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
    },
    {
      label: "Norway",
      value: "NO",
      code: "NO",
      emoji: "🇳🇴",
      unicode: "U+1F1F3 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
    },
    {
      label: "Nepal",
      value: "NP",
      code: "NP",
      emoji: "🇳🇵",
      unicode: "U+1F1F3 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
    },
    {
      label: "Nauru",
      value: "NR",
      code: "NR",
      emoji: "🇳🇷",
      unicode: "U+1F1F3 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
    },
    {
      label: "Niue",
      value: "NU",
      code: "NU",
      emoji: "🇳🇺",
      unicode: "U+1F1F3 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
    },
    {
      label: "New Zealand",
      value: "NZ",
      code: "NZ",
      emoji: "🇳🇿",
      unicode: "U+1F1F3 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
    },
    {
      label: "Oman",
      value: "OM",
      code: "OM",
      emoji: "🇴🇲",
      unicode: "U+1F1F4 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
    },
    {
      label: "Panama",
      value: "PA",
      code: "PA",
      emoji: "🇵🇦",
      unicode: "U+1F1F5 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
    },
    {
      label: "Peru",
      value: "PE",
      code: "PE",
      emoji: "🇵🇪",
      unicode: "U+1F1F5 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
    },
    {
      label: "French Polynesia",
      value: "PF",
      code: "PF",
      emoji: "🇵🇫",
      unicode: "U+1F1F5 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
    },
    {
      label: "Papua New Guinea",
      value: "PG",
      code: "PG",
      emoji: "🇵🇬",
      unicode: "U+1F1F5 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
    },
    {
      label: "Philippines",
      value: "PH",
      code: "PH",
      emoji: "🇵🇭",
      unicode: "U+1F1F5 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
    },
    {
      label: "Pakistan",
      value: "PK",
      code: "PK",
      emoji: "🇵🇰",
      unicode: "U+1F1F5 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
    },
    {
      label: "Poland",
      value: "PL",
      code: "PL",
      emoji: "🇵🇱",
      unicode: "U+1F1F5 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
    },
    {
      label: "St. Pierre & Miquelon",
      value: "PM",
      code: "PM",
      emoji: "🇵🇲",
      unicode: "U+1F1F5 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg",
    },
    {
      label: "Pitcairn Islands",
      value: "PN",
      code: "PN",
      emoji: "🇵🇳",
      unicode: "U+1F1F5 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg",
    },
    {
      label: "Puerto Rico",
      value: "PR",
      code: "PR",
      emoji: "🇵🇷",
      unicode: "U+1F1F5 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
    },
    {
      label: "Palestinian Territories",
      value: "PS",
      code: "PS",
      emoji: "🇵🇸",
      unicode: "U+1F1F5 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg",
    },
    {
      label: "Portugal",
      value: "PT",
      code: "PT",
      emoji: "🇵🇹",
      unicode: "U+1F1F5 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
    },
    {
      label: "Palau",
      value: "PW",
      code: "PW",
      emoji: "🇵🇼",
      unicode: "U+1F1F5 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
    },
    {
      label: "Paraguay",
      value: "PY",
      code: "PY",
      emoji: "🇵🇾",
      unicode: "U+1F1F5 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
    },
    {
      label: "Qatar",
      value: "QA",
      code: "QA",
      emoji: "🇶🇦",
      unicode: "U+1F1F6 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
    },
    {
      label: "Réunion",
      value: "RE",
      code: "RE",
      emoji: "🇷🇪",
      unicode: "U+1F1F7 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
    },
    {
      label: "Romania",
      value: "RO",
      code: "RO",
      emoji: "🇷🇴",
      unicode: "U+1F1F7 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
    },
    {
      label: "Serbia",
      value: "RS",
      code: "RS",
      emoji: "🇷🇸",
      unicode: "U+1F1F7 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
    },
    {
      label: "Russia",
      value: "RU",
      code: "RU",
      emoji: "🇷🇺",
      unicode: "U+1F1F7 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
    },
    {
      label: "Rwanda",
      value: "RW",
      code: "RW",
      emoji: "🇷🇼",
      unicode: "U+1F1F7 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
    },
    {
      label: "Saudi Arabia",
      value: "SA",
      code: "SA",
      emoji: "🇸🇦",
      unicode: "U+1F1F8 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
    },
    {
      label: "Solomon Islands",
      value: "SB",
      code: "SB",
      emoji: "🇸🇧",
      unicode: "U+1F1F8 U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
    },
    {
      label: "Seychelles",
      value: "SC",
      code: "SC",
      emoji: "🇸🇨",
      unicode: "U+1F1F8 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
    },
    {
      label: "Sudan",
      value: "SD",
      code: "SD",
      emoji: "🇸🇩",
      unicode: "U+1F1F8 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
    },
    {
      label: "Sweden",
      value: "SE",
      code: "SE",
      emoji: "🇸🇪",
      unicode: "U+1F1F8 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
    },
    {
      label: "Singapore",
      value: "SG",
      code: "SG",
      emoji: "🇸🇬",
      unicode: "U+1F1F8 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
    },
    {
      label: "St. Helena",
      value: "SH",
      code: "SH",
      emoji: "🇸🇭",
      unicode: "U+1F1F8 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg",
    },
    {
      label: "Slovenia",
      value: "SI",
      code: "SI",
      emoji: "🇸🇮",
      unicode: "U+1F1F8 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
    },
    {
      label: "Svalbard & Jan Mayen",
      value: "SJ",
      code: "SJ",
      emoji: "🇸🇯",
      unicode: "U+1F1F8 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg",
    },
    {
      label: "Slovakia",
      value: "SK",
      code: "SK",
      emoji: "🇸🇰",
      unicode: "U+1F1F8 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
    },
    {
      label: "Sierra Leone",
      value: "SL",
      code: "SL",
      emoji: "🇸🇱",
      unicode: "U+1F1F8 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
    },
    {
      label: "San Marino",
      value: "SM",
      code: "SM",
      emoji: "🇸🇲",
      unicode: "U+1F1F8 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
    },
    {
      label: "Senegal",
      value: "SN",
      code: "SN",
      emoji: "🇸🇳",
      unicode: "U+1F1F8 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
    },
    {
      label: "Somalia",
      value: "SO",
      code: "SO",
      emoji: "🇸🇴",
      unicode: "U+1F1F8 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
    },
    {
      label: "Surilabel",
      value: "SR",
      code: "SR",
      emoji: "🇸🇷",
      unicode: "U+1F1F8 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
    },
    {
      label: "South Sudan",
      value: "SS",
      code: "SS",
      emoji: "🇸🇸",
      unicode: "U+1F1F8 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
    },
    {
      label: "São Tomé & Príncipe",
      value: "ST",
      code: "ST",
      emoji: "🇸🇹",
      unicode: "U+1F1F8 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
    },
    {
      label: "El Salvador",
      value: "SV",
      code: "SV",
      emoji: "🇸🇻",
      unicode: "U+1F1F8 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
    },
    {
      label: "Sint Maarten",
      value: "SX",
      code: "SX",
      emoji: "🇸🇽",
      unicode: "U+1F1F8 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg",
    },
    {
      label: "Syria",
      value: "SY",
      code: "SY",
      emoji: "🇸🇾",
      unicode: "U+1F1F8 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
    },
    {
      label: "Eswatini",
      value: "SZ",
      code: "SZ",
      emoji: "🇸🇿",
      unicode: "U+1F1F8 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
    },
    {
      label: "Tristan da Cunha",
      value: "TA",
      code: "TA",
      emoji: "🇹🇦",
      unicode: "U+1F1F9 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg",
    },
    {
      label: "Turks & Caicos Islands",
      value: "TC",
      code: "TC",
      emoji: "🇹🇨",
      unicode: "U+1F1F9 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg",
    },
    {
      label: "Chad",
      value: "TD",
      code: "TD",
      emoji: "🇹🇩",
      unicode: "U+1F1F9 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
    },
    {
      label: "French Southern Territories",
      value: "TF",
      code: "TF",
      emoji: "🇹🇫",
      unicode: "U+1F1F9 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg",
    },
    {
      label: "Togo",
      value: "TG",
      code: "TG",
      emoji: "🇹🇬",
      unicode: "U+1F1F9 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
    },
    {
      label: "Thailand",
      value: "TH",
      code: "TH",
      emoji: "🇹🇭",
      unicode: "U+1F1F9 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
    },
    {
      label: "Tajikistan",
      value: "TJ",
      code: "TJ",
      emoji: "🇹🇯",
      unicode: "U+1F1F9 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
    },
    {
      label: "Tokelau",
      value: "TK",
      code: "TK",
      emoji: "🇹🇰",
      unicode: "U+1F1F9 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
    },
    {
      label: "Timor-Leste",
      value: "TL",
      code: "TL",
      emoji: "🇹🇱",
      unicode: "U+1F1F9 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
    },
    {
      label: "Turkmenistan",
      value: "TM",
      code: "TM",
      emoji: "🇹🇲",
      unicode: "U+1F1F9 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
    },
    {
      label: "Tunisia",
      value: "TN",
      code: "TN",
      emoji: "🇹🇳",
      unicode: "U+1F1F9 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
    },
    {
      label: "Tonga",
      value: "TO",
      code: "TO",
      emoji: "🇹🇴",
      unicode: "U+1F1F9 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
    },
    {
      label: "Turkey",
      value: "TR",
      code: "TR",
      emoji: "🇹🇷",
      unicode: "U+1F1F9 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
    },
    {
      label: "Trinidad & Tobago",
      value: "TT",
      code: "TT",
      emoji: "🇹🇹",
      unicode: "U+1F1F9 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
    },
    {
      label: "Tuvalu",
      value: "TV",
      code: "TV",
      emoji: "🇹🇻",
      unicode: "U+1F1F9 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
    },
    {
      label: "Taiwan",
      value: "TW",
      code: "TW",
      emoji: "🇹🇼",
      unicode: "U+1F1F9 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
    },
    {
      label: "Tanzania",
      value: "TZ",
      code: "TZ",
      emoji: "🇹🇿",
      unicode: "U+1F1F9 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
    },
    {
      label: "Ukraine",
      value: "UA",
      code: "UA",
      emoji: "🇺🇦",
      unicode: "U+1F1FA U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
    },
    {
      label: "Uganda",
      value: "UG",
      code: "UG",
      emoji: "🇺🇬",
      unicode: "U+1F1FA U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
    },
    {
      label: "U.S. Outlying Islands",
      value: "UM",
      code: "UM",
      emoji: "🇺🇲",
      unicode: "U+1F1FA U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg",
    },
    {
      label: "United Nations",
      value: "UN",
      code: "UN",
      emoji: "🇺🇳",
      unicode: "U+1F1FA U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg",
    },
    {
      label: "United States",
      value: "US",
      code: "US",
      emoji: "🇺🇸",
      unicode: "U+1F1FA U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    },
    {
      label: "Uruguay",
      value: "UY",
      code: "UY",
      emoji: "🇺🇾",
      unicode: "U+1F1FA U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
    },
    {
      label: "Uzbekistan",
      value: "UZ",
      code: "UZ",
      emoji: "🇺🇿",
      unicode: "U+1F1FA U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
    },
    {
      label: "Vatican City",
      value: "VA",
      code: "VA",
      emoji: "🇻🇦",
      unicode: "U+1F1FB U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
    },
    {
      label: "St. Vincent & Grenadines",
      value: "VC",
      code: "VC",
      emoji: "🇻🇨",
      unicode: "U+1F1FB U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
    },
    {
      label: "Venezuela",
      value: "VE",
      code: "VE",
      emoji: "🇻🇪",
      unicode: "U+1F1FB U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
    },
    {
      label: "British Virgin Islands",
      value: "VG",
      code: "VG",
      emoji: "🇻🇬",
      unicode: "U+1F1FB U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg",
    },
    {
      label: "U.S. Virgin Islands",
      value: "VI",
      code: "VI",
      emoji: "🇻🇮",
      unicode: "U+1F1FB U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg",
    },
    {
      label: "Vietnam",
      value: "VN",
      code: "VN",
      emoji: "🇻🇳",
      unicode: "U+1F1FB U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
    },
    {
      label: "Vanuatu",
      value: "VU",
      code: "VU",
      emoji: "🇻🇺",
      unicode: "U+1F1FB U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
    },
    {
      label: "Wallis & Futuna",
      value: "WF",
      code: "WF",
      emoji: "🇼🇫",
      unicode: "U+1F1FC U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg",
    },
    {
      label: "Samoa",
      value: "WS",
      code: "WS",
      emoji: "🇼🇸",
      unicode: "U+1F1FC U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
    },
    {
      label: "Kosovo",
      value: "XK",
      code: "XK",
      emoji: "🇽🇰",
      unicode: "U+1F1FD U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
    },
    {
      label: "Yemen",
      value: "YE",
      code: "YE",
      emoji: "🇾🇪",
      unicode: "U+1F1FE U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
    },
    {
      label: "Mayotte",
      value: "YT",
      code: "YT",
      emoji: "🇾🇹",
      unicode: "U+1F1FE U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
    },
    {
      label: "South Africa",
      value: "ZA",
      code: "ZA",
      emoji: "🇿🇦",
      unicode: "U+1F1FF U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
    },
    {
      label: "Zambia",
      value: "ZM",
      code: "ZM",
      emoji: "🇿🇲",
      unicode: "U+1F1FF U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
    },
    {
      label: "Zimbabwe",
      value: "ZW",
      code: "ZW",
      emoji: "🇿🇼",
      unicode: "U+1F1FF U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
    },
    {
      label: "England",
      value: "ENGLAND",
      code: "ENGLAND",
      emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      unicode: "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
    },
    {
      label: "Scotland",
      value: "SCOTLAND",
      code: "SCOTLAND",
      emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      unicode: "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
    },
    {
      label: "Wales",
      value: "WALES",
      code: "WALES",
      emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      unicode: "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
    },
  ];
function FI() {
  const [e, t] = O.useState({ value: "", field: "nationality" }),
    n = _i(),
    r = jn();
  return F.jsxs(Jf, {
    children: [
      F.jsxs(ep, {
        children: [
          F.jsx("div", {
            style: { width: "20%" },
            children: F.jsx(Lt, {
              to: "/agePage",
              children: F.jsx("img", { src: ls }),
            }),
          }),
          F.jsx(tp, { children: F.jsx(np, { children: "Add Nationality" }) }),
          F.jsx("div", { style: { width: "20%" } }),
        ],
      }),
      F.jsx(rp, {
        children: F.jsxs(ct, {
          style: { flexDirection: "column", height: "100%" },
          children: [
            F.jsx(ct, {
              style: {
                height: "10%",
                width: "100%",
                justifyContent: "flex-start",
              },
              children: F.jsx(ip, { children: "Add your Nationality" }),
            }),
            F.jsx(ap, {
              children: F.jsx(_y, {
                optionsArray: xI,
                placeHolder: "Select",
                selected: e,
                setSelected: t,
                isSearchable: !1,
                customOption: bI,
              }),
            }),
            F.jsx(ct, {
              style: { height: "20%", width: "100%" },
              children: F.jsx(op, {
                onClick: () => {
                  r(_n(e)), n("/location");
                },
                children: F.jsx("i", { children: "Save & Next" }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const jI = () => {
    const [e, t] = O.useState({ value: "", field: "gender" }),
      n = jn(),
      { value: r } = e;
    return F.jsxs("div", {
      children: [
        F.jsx(Hr, {
          leftIcon: F.jsx(Lt, { to: "/location", children: F.jsx(Li, {}) }),
          title: "Add Gender",
        }),
        F.jsxs(Vr, {
          children: [
            F.jsx(xe, { direction: "vertical", margin: "1.75rem" }),
            F.jsx(xe, {
              direction: "horizontal",
              margin: "35rem",
              children: F.jsx(pa, { children: "Add your Gender" }),
            }),
            F.jsx(xe, { direction: "vertical", margin: "9.25rem" }),
            F.jsxs(ct, {
              children: [
                F.jsx(DE, {}),
                F.jsx(xe, { direction: "horizontal", margin: "0.9rem" }),
                F.jsx(jo, {
                  bg: r === "Male" ? "#50924E" : "#FFFFFF",
                  color: r === "Male" ? "#FFFFFF" : "#000000",
                  onClick: () => t({ ...e, value: "Male" }),
                  children: "Male",
                }),
              ],
            }),
            F.jsx(xe, { direction: "vertical", margin: "3rem" }),
            F.jsxs(ct, {
              children: [
                F.jsx(LE, {}),
                F.jsx(xe, { direction: "horizontal", margin: "0.9rem" }),
                F.jsx(jo, {
                  bg: r === "Female" ? "#50924E" : "#FFFFFF",
                  color: r === "Female" ? "#FFFFFF" : "#000000",
                  onClick: () => t({ ...e, value: "Female" }),
                  children: "Female",
                }),
              ],
            }),
            F.jsx(xe, { direction: "vertical", margin: "3rem" }),
            F.jsxs(ct, {
              children: [
                F.jsx(xe, { direction: "horizontal", margin: "3rem" }),
                F.jsx(xe, { direction: "horizontal", margin: "0.9rem" }),
                F.jsx(jo, {
                  bg: r === "Other" ? "#50924E" : "#FFFFFF",
                  color: r === "Other" ? "#FFFFFF" : "#000000",
                  onClick: () => t({ ...e, value: "Other" }),
                  children: "Other",
                }),
              ],
            }),
            F.jsx(fa, {
              to: r ? "/occupation" : null,
              onClick: () => {
                r && (n(_n(e)), t({ ...e, value: "" }));
              },
              bg: r ? "#50924E" : "#d7ddd6",
              hoverBg: r ? "#396d37" : "#d7ddd6",
              text: "Save & Next",
            }),
          ],
        }),
      ],
    });
  },
  CI = J.textarea`
  @media (min-width: 350px) and (max-width: 700px) {
    font-family: "Poppins", sans-serif;
    width: 90%;
    height: 20rem;
    margin: 0 auto;
    border-radius: 0.6rem;
    padding: 1rem 0 0 1.5rem;
    font-size: 1.7rem;
    resize: none;
  }
`,
  OI = J.label`
  @media (min-width: 350px) and (max-width: 700px) {
    align-self: flex-end;
    margin: 2rem 2rem;
    box-sizing: border-box;
  }
`;
var ou =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        a;
      return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function l(s) {
        return function (c) {
          return u([s, c]);
        };
      }
      function u(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, s[1])).done)
            )
              return o;
            switch (((i = 0), o && (s = [s[0] & 2, o.value]), s[0])) {
              case 0:
              case 1:
                o = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = s);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(s);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  au =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  PI = Object.defineProperty,
  II = Object.defineProperties,
  MI = Object.getOwnPropertyDescriptors,
  lu = Object.getOwnPropertySymbols,
  zy = Object.prototype.hasOwnProperty,
  By = Object.prototype.propertyIsEnumerable,
  Xh = function (e, t, n) {
    return t in e
      ? PI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Qe = function (e, t) {
    for (var n in t || (t = {})) zy.call(t, n) && Xh(e, n, t[n]);
    if (lu)
      for (var r = 0, i = lu(t); r < i.length; r++) {
        var n = i[r];
        By.call(t, n) && Xh(e, n, t[n]);
      }
    return e;
  },
  Sn = function (e, t) {
    return II(e, MI(t));
  },
  Jh = function (e, t) {
    var n = {};
    for (var r in e) zy.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && lu)
      for (var i = 0, o = lu(e); i < o.length; i++) {
        var r = o[i];
        t.indexOf(r) < 0 && By.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  uu = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (u) {
          try {
            l(n.next(u));
          } catch (s) {
            i(s);
          }
        },
        a = function (u) {
          try {
            l(n.throw(u));
          } catch (s) {
            i(s);
          }
        },
        l = function (u) {
          return u.done ? r(u.value) : Promise.resolve(u.value).then(o, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  De;
(function (e) {
  (e.uninitialized = "uninitialized"),
    (e.pending = "pending"),
    (e.fulfilled = "fulfilled"),
    (e.rejected = "rejected");
})(De || (De = {}));
function kI(e) {
  return {
    status: e,
    isUninitialized: e === De.uninitialized,
    isLoading: e === De.pending,
    isSuccess: e === De.fulfilled,
    isError: e === De.rejected,
  };
}
function RI(e) {
  return new RegExp("(^|:)//").test(e);
}
var AI = function (e) {
    return e.replace(/\/$/, "");
  },
  UI = function (e) {
    return e.replace(/^\//, "");
  };
function TI(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (RI(t)) return t;
  var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = AI(e)), (t = UI(t)), "" + e + n + t;
}
var ev = function (e) {
  return [].concat.apply([], e);
};
function DI() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function LI() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var tv = vr;
function Vy(e, t) {
  if (e === t || !((tv(e) && tv(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      i = n.length === r.length,
      o = Array.isArray(t) ? [] : {},
      a = 0,
      l = n;
    a < l.length;
    a++
  ) {
    var u = l[a];
    (o[u] = Vy(e[u], t[u])), i && (i = e[u] === o[u]);
  }
  return i ? e : o;
}
var nv = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  NI = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  $I = function (e) {
    return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
  };
function rv(e) {
  if (!vr(e)) return e;
  for (var t = Qe({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var i = r[n],
      o = i[0],
      a = i[1];
    a === void 0 && delete t[o];
  }
  return t;
}
function _I(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    i = n.prepareHeaders,
    o =
      i === void 0
        ? function (g) {
            return g;
          }
        : i,
    a = n.fetchFn,
    l = a === void 0 ? nv : a,
    u = n.paramsSerializer,
    s = n.isJsonContentType,
    c = s === void 0 ? $I : s,
    d = n.jsonContentType,
    p = d === void 0 ? "application/json" : d,
    m = n.jsonReplacer,
    y = n.timeout,
    h = n.responseHandler,
    E = n.validateStatus,
    f = Jh(n, [
      "baseUrl",
      "prepareHeaders",
      "fetchFn",
      "paramsSerializer",
      "isJsonContentType",
      "jsonContentType",
      "jsonReplacer",
      "timeout",
      "responseHandler",
      "validateStatus",
    ]);
  return (
    typeof fetch > "u" &&
      l === nv &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."
      ),
    function (g, w) {
      return uu(t, null, function () {
        var S,
          b,
          x,
          j,
          P,
          C,
          M,
          R,
          A,
          T,
          N,
          W,
          q,
          k,
          V,
          B,
          G,
          U,
          L,
          D,
          _,
          I,
          Z,
          H,
          de,
          re,
          ae,
          Y,
          ge,
          Pe,
          pe,
          Ue,
          fe,
          Te,
          Bt,
          Ne;
        return ou(this, function (ot) {
          switch (ot.label) {
            case 0:
              return (
                (S = w.signal),
                (b = w.getState),
                (x = w.extra),
                (j = w.endpoint),
                (P = w.forced),
                (C = w.type),
                (R = typeof g == "string" ? { url: g } : g),
                (A = R.url),
                (T = R.headers),
                (N = T === void 0 ? new Headers(f.headers) : T),
                (W = R.params),
                (q = W === void 0 ? void 0 : W),
                (k = R.responseHandler),
                (V = k === void 0 ? h ?? "json" : k),
                (B = R.validateStatus),
                (G = B === void 0 ? E ?? NI : B),
                (U = R.timeout),
                (L = U === void 0 ? y : U),
                (D = Jh(R, [
                  "url",
                  "headers",
                  "params",
                  "responseHandler",
                  "validateStatus",
                  "timeout",
                ])),
                (_ = Qe(Sn(Qe({}, f), { signal: S }), D)),
                (N = new Headers(rv(N))),
                (I = _),
                [
                  4,
                  o(N, {
                    getState: b,
                    extra: x,
                    endpoint: j,
                    forced: P,
                    type: C,
                  }),
                ]
              );
            case 1:
              (I.headers = ot.sent() || N),
                (Z = function (Ve) {
                  return (
                    typeof Ve == "object" &&
                    (vr(Ve) ||
                      Array.isArray(Ve) ||
                      typeof Ve.toJSON == "function")
                  );
                }),
                !_.headers.has("content-type") &&
                  Z(_.body) &&
                  _.headers.set("content-type", p),
                Z(_.body) &&
                  c(_.headers) &&
                  (_.body = JSON.stringify(_.body, m)),
                q &&
                  ((H = ~A.indexOf("?") ? "&" : "?"),
                  (de = u ? u(q) : new URLSearchParams(rv(q))),
                  (A += H + de)),
                (A = TI(r, A)),
                (re = new Request(A, _)),
                (ae = re.clone()),
                (M = { request: ae }),
                (ge = !1),
                (Pe =
                  L &&
                  setTimeout(function () {
                    (ge = !0), w.abort();
                  }, L)),
                (ot.label = 2);
            case 2:
              return ot.trys.push([2, 4, 5, 6]), [4, l(re)];
            case 3:
              return (Y = ot.sent()), [3, 6];
            case 4:
              return (
                (pe = ot.sent()),
                [
                  2,
                  {
                    error: {
                      status: ge ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                      error: String(pe),
                    },
                    meta: M,
                  },
                ]
              );
            case 5:
              return Pe && clearTimeout(Pe), [7];
            case 6:
              (Ue = Y.clone()), (M.response = Ue), (Te = ""), (ot.label = 7);
            case 7:
              return (
                ot.trys.push([7, 9, , 10]),
                [
                  4,
                  Promise.all([
                    v(Y, V).then(
                      function (Ve) {
                        return (fe = Ve);
                      },
                      function (Ve) {
                        return (Bt = Ve);
                      }
                    ),
                    Ue.text().then(
                      function (Ve) {
                        return (Te = Ve);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 8:
              if ((ot.sent(), Bt)) throw Bt;
              return [3, 10];
            case 9:
              return (
                (Ne = ot.sent()),
                [
                  2,
                  {
                    error: {
                      status: "PARSING_ERROR",
                      originalStatus: Y.status,
                      data: Te,
                      error: String(Ne),
                    },
                    meta: M,
                  },
                ]
              );
            case 10:
              return [
                2,
                G(Y, fe)
                  ? { data: fe, meta: M }
                  : { error: { status: Y.status, data: fe }, meta: M },
              ];
          }
        });
      });
    }
  );
  function v(g, w) {
    return uu(this, null, function () {
      var S;
      return ou(this, function (b) {
        switch (b.label) {
          case 0:
            return typeof w == "function"
              ? [2, w(g)]
              : (w === "content-type" && (w = c(g.headers) ? "json" : "text"),
                w !== "json" ? [3, 2] : [4, g.text()]);
          case 1:
            return (S = b.sent()), [2, S.length ? JSON.parse(S) : null];
          case 2:
            return [2, g.text()];
        }
      });
    });
  }
}
var iv = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  hp = It("__rtkq/focused"),
  Hy = It("__rtkq/unfocused"),
  vp = It("__rtkq/online"),
  Wy = It("__rtkq/offline"),
  Fn;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(Fn || (Fn = {}));
function Qy(e) {
  return e.type === Fn.query;
}
function zI(e) {
  return e.type === Fn.mutation;
}
function Gy(e, t, n, r, i, o) {
  return BI(e)
    ? e(t, n, r, i).map(Md).map(o)
    : Array.isArray(e)
    ? e.map(Md).map(o)
    : [];
}
function BI(e) {
  return typeof e == "function";
}
function Md(e) {
  return typeof e == "string" ? { type: e } : e;
}
function uc(e) {
  return e != null;
}
var ra = Symbol("forceQueryFn"),
  kd = function (e) {
    return typeof e[ra] == "function";
  };
function VI(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.api,
    o = e.context,
    a = new Map(),
    l = new Map(),
    u = i.internalActions,
    s = u.unsubscribeQueryResult,
    c = u.removeMutationResult,
    d = u.updateSubscriptionOptions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: g,
    getRunningQueryThunk: y,
    getRunningMutationThunk: h,
    getRunningQueriesThunk: E,
    getRunningMutationsThunk: f,
    getRunningOperationPromises: m,
    removalWarning: p,
  };
  function p() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function m() {
    typeof process < "u";
    var w = function (S) {
      return Array.from(S.values()).flatMap(function (b) {
        return b ? Object.values(b) : [];
      });
    };
    return au(au([], w(a)), w(l)).filter(uc);
  }
  function y(w, S) {
    return function (b) {
      var x,
        j = o.endpointDefinitions[w],
        P = t({ queryArgs: S, endpointDefinition: j, endpointName: w });
      return (x = a.get(b)) == null ? void 0 : x[P];
    };
  }
  function h(w, S) {
    return function (b) {
      var x;
      return (x = l.get(b)) == null ? void 0 : x[S];
    };
  }
  function E() {
    return function (w) {
      return Object.values(a.get(w) || {}).filter(uc);
    };
  }
  function f() {
    return function (w) {
      return Object.values(l.get(w) || {}).filter(uc);
    };
  }
  function v(w, S) {
    var b = function (x, j) {
      var P = j === void 0 ? {} : j,
        C = P.subscribe,
        M = C === void 0 ? !0 : C,
        R = P.forceRefetch,
        A = P.subscriptionOptions,
        T = ra,
        N = P[T];
      return function (W, q) {
        var k,
          V,
          B = t({ queryArgs: x, endpointDefinition: S, endpointName: w }),
          G = n(
            ((k = {
              type: "query",
              subscribe: M,
              forceRefetch: R,
              subscriptionOptions: A,
              endpointName: w,
              originalArgs: x,
              queryCacheKey: B,
            }),
            (k[ra] = N),
            k)
          ),
          U = i.endpoints[w].select(x),
          L = W(G),
          D = U(q()),
          _ = L.requestId,
          I = L.abort,
          Z = D.requestId !== _,
          H = (V = a.get(W)) == null ? void 0 : V[B],
          de = function () {
            return U(q());
          },
          re = Object.assign(
            N
              ? L.then(de)
              : Z && !H
              ? Promise.resolve(D)
              : Promise.all([H, L]).then(de),
            {
              arg: x,
              requestId: _,
              subscriptionOptions: A,
              queryCacheKey: B,
              abort: I,
              unwrap: function () {
                return uu(this, null, function () {
                  var Y;
                  return ou(this, function (ge) {
                    switch (ge.label) {
                      case 0:
                        return [4, re];
                      case 1:
                        if (((Y = ge.sent()), Y.isError)) throw Y.error;
                        return [2, Y.data];
                    }
                  });
                });
              },
              refetch: function () {
                return W(b(x, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                M && W(s({ queryCacheKey: B, requestId: _ }));
              },
              updateSubscriptionOptions: function (Y) {
                (re.subscriptionOptions = Y),
                  W(
                    d({
                      endpointName: w,
                      requestId: _,
                      queryCacheKey: B,
                      options: Y,
                    })
                  );
              },
            }
          );
        if (!H && !Z && !N) {
          var ae = a.get(W) || {};
          (ae[B] = re),
            a.set(W, ae),
            re.then(function () {
              delete ae[B], Object.keys(ae).length || a.delete(W);
            });
        }
        return re;
      };
    };
    return b;
  }
  function g(w) {
    return function (S, b) {
      var x = b === void 0 ? {} : b,
        j = x.track,
        P = j === void 0 ? !0 : j,
        C = x.fixedCacheKey;
      return function (M, R) {
        var A = r({
            type: "mutation",
            endpointName: w,
            originalArgs: S,
            track: P,
            fixedCacheKey: C,
          }),
          T = M(A),
          N = T.requestId,
          W = T.abort,
          q = T.unwrap,
          k = T.unwrap()
            .then(function (U) {
              return { data: U };
            })
            .catch(function (U) {
              return { error: U };
            }),
          V = function () {
            M(c({ requestId: N, fixedCacheKey: C }));
          },
          B = Object.assign(k, {
            arg: T.arg,
            requestId: N,
            abort: W,
            unwrap: q,
            unsubscribe: V,
            reset: V,
          }),
          G = l.get(M) || {};
        return (
          l.set(M, G),
          (G[N] = B),
          B.then(function () {
            delete G[N], Object.keys(G).length || l.delete(M);
          }),
          C &&
            ((G[C] = B),
            B.then(function () {
              G[C] === B && (delete G[C], Object.keys(G).length || l.delete(M));
            })),
          B
        );
      };
    };
  }
}
function ov(e) {
  return e;
}
function HI(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    i = e.context.endpointDefinitions,
    o = e.serializeQueryArgs,
    a = e.api,
    l = function (g, w, S) {
      return function (b) {
        var x = i[g];
        b(
          a.internalActions.queryResultPatched({
            queryCacheKey: o({
              queryArgs: w,
              endpointDefinition: x,
              endpointName: g,
            }),
            patches: S,
          })
        );
      };
    },
    u = function (g, w, S) {
      return function (b, x) {
        var j,
          P,
          C = a.endpoints[g].select(w)(x()),
          M = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return b(a.util.patchQueryData(g, w, M.inversePatches));
            },
          };
        if (C.status === De.uninitialized) return M;
        if ("data" in C)
          if (dn(C.data)) {
            var R = C1(C.data, S),
              A = R[1],
              T = R[2];
            (j = M.patches).push.apply(j, A),
              (P = M.inversePatches).push.apply(P, T);
          } else {
            var N = S(C.data);
            M.patches.push({ op: "replace", path: [], value: N }),
              M.inversePatches.push({ op: "replace", path: [], value: C.data });
          }
        return b(a.util.patchQueryData(g, w, M.patches)), M;
      };
    },
    s = function (g, w, S) {
      return function (b) {
        var x;
        return b(
          a.endpoints[g].initiate(
            w,
            ((x = { subscribe: !1, forceRefetch: !0 }),
            (x[ra] = function () {
              return { data: S };
            }),
            x)
          )
        );
      };
    },
    c = function (g, w) {
      return uu(t, [g, w], function (S, b) {
        var x,
          j,
          P,
          C,
          M,
          R,
          A,
          T,
          N,
          W,
          q,
          k,
          V,
          B,
          G,
          U,
          L,
          D,
          _ = b.signal,
          I = b.abort,
          Z = b.rejectWithValue,
          H = b.fulfillWithValue,
          de = b.dispatch,
          re = b.getState,
          ae = b.extra;
        return ou(this, function (Y) {
          switch (Y.label) {
            case 0:
              (x = i[S.endpointName]), (Y.label = 1);
            case 1:
              return (
                Y.trys.push([1, 8, , 13]),
                (j = ov),
                (P = void 0),
                (C = {
                  signal: _,
                  abort: I,
                  dispatch: de,
                  getState: re,
                  extra: ae,
                  endpoint: S.endpointName,
                  type: S.type,
                  forced: S.type === "query" ? d(S, re()) : void 0,
                }),
                (M = S.type === "query" ? S[ra] : void 0),
                M ? ((P = M()), [3, 6]) : [3, 2]
              );
            case 2:
              return x.query
                ? [4, r(x.query(S.originalArgs), C, x.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (P = Y.sent()),
                x.transformResponse && (j = x.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                x.queryFn(S.originalArgs, C, x.extraOptions, function (ge) {
                  return r(ge, C, x.extraOptions);
                }),
              ];
            case 5:
              (P = Y.sent()), (Y.label = 6);
            case 6:
              if ((typeof process < "u", P.error))
                throw new iv(P.error, P.meta);
              return (q = H), [4, j(P.data, P.meta, S.originalArgs)];
            case 7:
              return [
                2,
                q.apply(void 0, [
                  Y.sent(),
                  ((L = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: P.meta,
                  }),
                  (L[po] = !0),
                  L),
                ]),
              ];
            case 8:
              if (((k = Y.sent()), (V = k), !(V instanceof iv))) return [3, 12];
              (B = ov),
                x.query &&
                  x.transformErrorResponse &&
                  (B = x.transformErrorResponse),
                (Y.label = 9);
            case 9:
              return (
                Y.trys.push([9, 11, , 12]),
                (G = Z),
                [4, B(V.value, V.meta, S.originalArgs)]
              );
            case 10:
              return [
                2,
                G.apply(void 0, [
                  Y.sent(),
                  ((D = { baseQueryMeta: V.meta }), (D[po] = !0), D),
                ]),
              ];
            case 11:
              return (U = Y.sent()), (V = U), [3, 12];
            case 12:
              throw (typeof process < "u", console.error(V), V);
            case 13:
              return [2];
          }
        });
      });
    };
  function d(g, w) {
    var S,
      b,
      x,
      j,
      P =
        (b = (S = w[n]) == null ? void 0 : S.queries) == null
          ? void 0
          : b[g.queryCacheKey],
      C = (x = w[n]) == null ? void 0 : x.config.refetchOnMountOrArgChange,
      M = P == null ? void 0 : P.fulfilledTimeStamp,
      R = (j = g.forceRefetch) != null ? j : g.subscribe && C;
    return R ? R === !0 || (Number(new Date()) - Number(M)) / 1e3 >= R : !1;
  }
  var p = Sh(n + "/executeQuery", c, {
      getPendingMeta: function () {
        var g;
        return (g = { startedTimeStamp: Date.now() }), (g[po] = !0), g;
      },
      condition: function (g, w) {
        var S = w.getState,
          b,
          x,
          j,
          P = S(),
          C =
            (x = (b = P[n]) == null ? void 0 : b.queries) == null
              ? void 0
              : x[g.queryCacheKey],
          M = C == null ? void 0 : C.fulfilledTimeStamp,
          R = g.originalArgs,
          A = C == null ? void 0 : C.originalArgs,
          T = i[g.endpointName];
        return kd(g)
          ? !0
          : (C == null ? void 0 : C.status) === "pending"
          ? !1
          : d(g, P) ||
            (Qy(T) &&
              (j = T == null ? void 0 : T.forceRefetch) != null &&
              j.call(T, {
                currentArg: R,
                previousArg: A,
                endpointState: C,
                state: P,
              }))
          ? !0
          : !M;
      },
      dispatchConditionRejection: !0,
    }),
    m = Sh(n + "/executeMutation", c, {
      getPendingMeta: function () {
        var g;
        return (g = { startedTimeStamp: Date.now() }), (g[po] = !0), g;
      },
    }),
    y = function (g) {
      return "force" in g;
    },
    h = function (g) {
      return "ifOlderThan" in g;
    },
    E = function (g, w, S) {
      return function (b, x) {
        var j = y(S) && S.force,
          P = h(S) && S.ifOlderThan,
          C = function (T) {
            return (
              T === void 0 && (T = !0),
              a.endpoints[g].initiate(w, { forceRefetch: T })
            );
          },
          M = a.endpoints[g].select(w)(x());
        if (j) b(C());
        else if (P) {
          var R = M == null ? void 0 : M.fulfilledTimeStamp;
          if (!R) {
            b(C());
            return;
          }
          var A = (Number(new Date()) - Number(new Date(R))) / 1e3 >= P;
          A && b(C());
        } else b(C(!1));
      };
    };
  function f(g) {
    return function (w) {
      var S, b;
      return (
        ((b = (S = w == null ? void 0 : w.meta) == null ? void 0 : S.arg) ==
        null
          ? void 0
          : b.endpointName) === g
      );
    };
  }
  function v(g, w) {
    return {
      matchPending: Po(Yf(g), f(w)),
      matchFulfilled: Po(Wr(g), f(w)),
      matchRejected: Po(Xo(g), f(w)),
    };
  }
  return {
    queryThunk: p,
    mutationThunk: m,
    prefetch: E,
    updateQueryData: u,
    upsertQueryData: s,
    patchQueryData: l,
    buildMatchThunkActions: v,
  };
}
function Ky(e, t, n, r) {
  return Gy(
    n[e.meta.arg.endpointName][t],
    Wr(e) ? e.payload : void 0,
    ns(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function Ha(e, t, n) {
  var r = e[t];
  r && n(r);
}
function ia(e) {
  var t;
  return (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function av(e, t, n) {
  var r = e[ia(t)];
  r && n(r);
}
var oo = {};
function WI(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.context,
    o = i.endpointDefinitions,
    a = i.apiUid,
    l = i.extractRehydrationInfo,
    u = i.hasRehydrationInfo,
    s = e.assertTagType,
    c = e.config,
    d = It(t + "/resetApiState"),
    p = Fr({
      name: t + "/queries",
      initialState: oo,
      reducers: {
        removeQueryResult: {
          reducer: function (S, b) {
            var x = b.payload.queryCacheKey;
            delete S[x];
          },
          prepare: ec(),
        },
        queryResultPatched: function (S, b) {
          var x = b.payload,
            j = x.queryCacheKey,
            P = x.patches;
          Ha(S, j, function (C) {
            C.data = fh(C.data, P.concat());
          });
        },
      },
      extraReducers: function (S) {
        S.addCase(n.pending, function (b, x) {
          var j = x.meta,
            P = x.meta.arg,
            C,
            M,
            R = kd(P);
          (P.subscribe || R) &&
            ((M = b[(C = P.queryCacheKey)]) != null ||
              (b[C] = {
                status: De.uninitialized,
                endpointName: P.endpointName,
              })),
            Ha(b, P.queryCacheKey, function (A) {
              (A.status = De.pending),
                (A.requestId = R && A.requestId ? A.requestId : j.requestId),
                P.originalArgs !== void 0 && (A.originalArgs = P.originalArgs),
                (A.startedTimeStamp = j.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (b, x) {
            var j = x.meta,
              P = x.payload;
            Ha(b, j.arg.queryCacheKey, function (C) {
              var M;
              if (!(C.requestId !== j.requestId && !kd(j.arg))) {
                var R = o[j.arg.endpointName].merge;
                if (((C.status = De.fulfilled), R))
                  if (C.data !== void 0) {
                    var A = j.fulfilledTimeStamp,
                      T = j.arg,
                      N = j.baseQueryMeta,
                      W = j.requestId,
                      q = ma(C.data, function (k) {
                        return R(k, P, {
                          arg: T.originalArgs,
                          baseQueryMeta: N,
                          fulfilledTimeStamp: A,
                          requestId: W,
                        });
                      });
                    C.data = q;
                  } else C.data = P;
                else
                  C.data =
                    (M = o[j.arg.endpointName].structuralSharing) == null || M
                      ? Vy(cn(C.data) ? ej(C.data) : C.data, P)
                      : P;
                delete C.error, (C.fulfilledTimeStamp = j.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (b, x) {
            var j = x.meta,
              P = j.condition,
              C = j.arg,
              M = j.requestId,
              R = x.error,
              A = x.payload;
            Ha(b, C.queryCacheKey, function (T) {
              if (!P) {
                if (T.requestId !== M) return;
                (T.status = De.rejected), (T.error = A ?? R);
              }
            });
          })
          .addMatcher(u, function (b, x) {
            for (
              var j = l(x).queries, P = 0, C = Object.entries(j);
              P < C.length;
              P++
            ) {
              var M = C[P],
                R = M[0],
                A = M[1];
              ((A == null ? void 0 : A.status) === De.fulfilled ||
                (A == null ? void 0 : A.status) === De.rejected) &&
                (b[R] = A);
            }
          });
      },
    }),
    m = Fr({
      name: t + "/mutations",
      initialState: oo,
      reducers: {
        removeMutationResult: {
          reducer: function (S, b) {
            var x = b.payload,
              j = ia(x);
            j in S && delete S[j];
          },
          prepare: ec(),
        },
      },
      extraReducers: function (S) {
        S.addCase(r.pending, function (b, x) {
          var j = x.meta,
            P = x.meta,
            C = P.requestId,
            M = P.arg,
            R = P.startedTimeStamp;
          M.track &&
            (b[ia(j)] = {
              requestId: C,
              status: De.pending,
              endpointName: M.endpointName,
              startedTimeStamp: R,
            });
        })
          .addCase(r.fulfilled, function (b, x) {
            var j = x.payload,
              P = x.meta;
            P.arg.track &&
              av(b, P, function (C) {
                C.requestId === P.requestId &&
                  ((C.status = De.fulfilled),
                  (C.data = j),
                  (C.fulfilledTimeStamp = P.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (b, x) {
            var j = x.payload,
              P = x.error,
              C = x.meta;
            C.arg.track &&
              av(b, C, function (M) {
                M.requestId === C.requestId &&
                  ((M.status = De.rejected), (M.error = j ?? P));
              });
          })
          .addMatcher(u, function (b, x) {
            for (
              var j = l(x).mutations, P = 0, C = Object.entries(j);
              P < C.length;
              P++
            ) {
              var M = C[P],
                R = M[0],
                A = M[1];
              ((A == null ? void 0 : A.status) === De.fulfilled ||
                (A == null ? void 0 : A.status) === De.rejected) &&
                R !== (A == null ? void 0 : A.requestId) &&
                (b[R] = A);
            }
          });
      },
    }),
    y = Fr({
      name: t + "/invalidation",
      initialState: oo,
      reducers: {},
      extraReducers: function (S) {
        S.addCase(p.actions.removeQueryResult, function (b, x) {
          for (
            var j = x.payload.queryCacheKey, P = 0, C = Object.values(b);
            P < C.length;
            P++
          )
            for (var M = C[P], R = 0, A = Object.values(M); R < A.length; R++) {
              var T = A[R],
                N = T.indexOf(j);
              N !== -1 && T.splice(N, 1);
            }
        })
          .addMatcher(u, function (b, x) {
            for (
              var j, P, C, M, R = l(x).provided, A = 0, T = Object.entries(R);
              A < T.length;
              A++
            )
              for (
                var N = T[A], W = N[0], q = N[1], k = 0, V = Object.entries(q);
                k < V.length;
                k++
              )
                for (
                  var B = V[k],
                    G = B[0],
                    U = B[1],
                    L =
                      (M = (P = (j = b[W]) != null ? j : (b[W] = {}))[
                        (C = G || "__internal_without_id")
                      ]) != null
                        ? M
                        : (P[C] = []),
                    D = 0,
                    _ = U;
                  D < _.length;
                  D++
                ) {
                  var I = _[D],
                    Z = L.includes(I);
                  Z || L.push(I);
                }
          })
          .addMatcher(zi(Wr(n), ns(n)), function (b, x) {
            for (
              var j,
                P,
                C,
                M,
                R = Ky(x, "providesTags", o, s),
                A = x.meta.arg.queryCacheKey,
                T = 0,
                N = Object.values(b);
              T < N.length;
              T++
            )
              for (
                var W = N[T], q = 0, k = Object.values(W);
                q < k.length;
                q++
              ) {
                var V = k[q],
                  B = V.indexOf(A);
                B !== -1 && V.splice(B, 1);
              }
            for (var G = 0, U = R; G < U.length; G++) {
              var L = U[G],
                D = L.type,
                _ = L.id,
                I =
                  (M = (P = (j = b[D]) != null ? j : (b[D] = {}))[
                    (C = _ || "__internal_without_id")
                  ]) != null
                    ? M
                    : (P[C] = []),
                Z = I.includes(A);
              Z || I.push(A);
            }
          });
      },
    }),
    h = Fr({
      name: t + "/subscriptions",
      initialState: oo,
      reducers: {
        updateSubscriptionOptions: function (S, b) {},
        unsubscribeQueryResult: function (S, b) {},
        internal_probeSubscription: function (S, b) {},
      },
    }),
    E = Fr({
      name: t + "/internalSubscriptions",
      initialState: oo,
      reducers: {
        subscriptionsUpdated: {
          reducer: function (S, b) {
            return fh(S, b.payload);
          },
          prepare: ec(),
        },
      },
    }),
    f = Fr({
      name: t + "/config",
      initialState: Qe(
        { online: DI(), focused: LI(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (S, b) {
          var x = b.payload;
          S.middlewareRegistered =
            S.middlewareRegistered === "conflict" || a !== x ? "conflict" : !0;
        },
      },
      extraReducers: function (S) {
        S.addCase(vp, function (b) {
          b.online = !0;
        })
          .addCase(Wy, function (b) {
            b.online = !1;
          })
          .addCase(hp, function (b) {
            b.focused = !0;
          })
          .addCase(Hy, function (b) {
            b.focused = !1;
          })
          .addMatcher(u, function (b) {
            return Qe({}, b);
          });
      },
    }),
    v = I1({
      queries: p.reducer,
      mutations: m.reducer,
      provided: y.reducer,
      subscriptions: E.reducer,
      config: f.reducer,
    }),
    g = function (S, b) {
      return v(d.match(b) ? void 0 : S, b);
    },
    w = Sn(
      Qe(
        Qe(Qe(Qe(Qe({}, f.actions), p.actions), h.actions), E.actions),
        m.actions
      ),
      {
        unsubscribeMutationResult: m.actions.removeMutationResult,
        resetApiState: d,
      }
    );
  return { reducer: g, actions: w };
}
var Mr = Symbol.for("RTKQ/skipToken"),
  qy = { status: De.uninitialized },
  lv = ma(qy, function () {}),
  uv = ma(qy, function () {});
function QI(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (c) {
      return lv;
    },
    i = function (c) {
      return uv;
    };
  return {
    buildQuerySelector: l,
    buildMutationSelector: u,
    selectInvalidatedBy: s,
  };
  function o(c) {
    return Qe(Qe({}, c), kI(c.status));
  }
  function a(c) {
    var d = c[n];
    return d;
  }
  function l(c, d) {
    return function (p) {
      var m = t({ queryArgs: p, endpointDefinition: d, endpointName: c }),
        y = function (E) {
          var f, v, g;
          return (g =
            (v = (f = a(E)) == null ? void 0 : f.queries) == null
              ? void 0
              : v[m]) != null
            ? g
            : lv;
        },
        h = p === Mr ? r : y;
      return Oo(h, o);
    };
  }
  function u() {
    return function (c) {
      var d, p;
      typeof c == "object" ? (p = (d = ia(c)) != null ? d : Mr) : (p = c);
      var m = function (h) {
          var E, f, v;
          return (v =
            (f = (E = a(h)) == null ? void 0 : E.mutations) == null
              ? void 0
              : f[p]) != null
            ? v
            : uv;
        },
        y = p === Mr ? i : m;
      return Oo(y, o);
    };
  }
  function s(c, d) {
    for (
      var p, m = c[n], y = new Set(), h = 0, E = d.map(Md);
      h < E.length;
      h++
    ) {
      var f = E[h],
        v = m.provided[f.type];
      if (v)
        for (
          var g =
              (p = f.id !== void 0 ? v[f.id] : ev(Object.values(v))) != null
                ? p
                : [],
            w = 0,
            S = g;
          w < S.length;
          w++
        ) {
          var b = S[w];
          y.add(b);
        }
    }
    return ev(
      Array.from(y.values()).map(function (x) {
        var j = m.queries[x];
        return j
          ? [
              {
                queryCacheKey: x,
                endpointName: j.endpointName,
                originalArgs: j.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var Wa = WeakMap ? new WeakMap() : void 0,
  sv = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      i = Wa == null ? void 0 : Wa.get(n);
    if (typeof i == "string") r = i;
    else {
      var o = JSON.stringify(n, function (a, l) {
        return vr(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (u, s) {
                return (u[s] = l[s]), u;
              }, {})
          : l;
      });
      vr(n) && (Wa == null || Wa.set(n, o)), (r = o);
    }
    return t + "(" + r + ")";
  };
function GI() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var i = Sd(function (c) {
        var d, p;
        return (p = r.extractRehydrationInfo) == null
          ? void 0
          : p.call(r, c, {
              reducerPath: (d = r.reducerPath) != null ? d : "api",
            });
      }),
      o = Sn(
        Qe(
          {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: i,
          serializeQueryArgs: function (c) {
            var d = sv;
            if ("serializeQueryArgs" in c.endpointDefinition) {
              var p = c.endpointDefinition.serializeQueryArgs;
              d = function (m) {
                var y = p(m);
                return typeof y == "string"
                  ? y
                  : sv(Sn(Qe({}, m), { queryArgs: y }));
              };
            } else r.serializeQueryArgs && (d = r.serializeQueryArgs);
            return d(c);
          },
          tagTypes: au([], r.tagTypes || []),
        }
      ),
      a = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: U1(),
        extractRehydrationInfo: i,
        hasRehydrationInfo: Sd(function (c) {
          return i(c) != null;
        }),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints: function (c) {
          var d = c.addTagTypes,
            p = c.endpoints;
          if (d)
            for (var m = 0, y = d; m < y.length; m++) {
              var h = y[m];
              o.tagTypes.includes(h) || o.tagTypes.push(h);
            }
          if (p)
            for (var E = 0, f = Object.entries(p); E < f.length; E++) {
              var v = f[E],
                g = v[0],
                w = v[1];
              typeof w == "function"
                ? w(a.endpointDefinitions[g])
                : Object.assign(a.endpointDefinitions[g] || {}, w);
            }
          return l;
        },
      },
      u = e.map(function (c) {
        return c.init(l, o, a);
      });
    function s(c) {
      for (
        var d = c.endpoints({
            query: function (w) {
              return Sn(Qe({}, w), { type: Fn.query });
            },
            mutation: function (w) {
              return Sn(Qe({}, w), { type: Fn.mutation });
            },
          }),
          p = 0,
          m = Object.entries(d);
        p < m.length;
        p++
      ) {
        var y = m[p],
          h = y[0],
          E = y[1];
        if (!c.overrideExisting && h in a.endpointDefinitions) {
          typeof process < "u";
          continue;
        }
        a.endpointDefinitions[h] = E;
        for (var f = 0, v = u; f < v.length; f++) {
          var g = v[f];
          g.injectEndpoint(h, E);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
function KI(e) {
  for (var t in e) return !1;
  return !0;
}
var qI = 2147483647 / 1e3 - 1,
  YI = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      i = e.internalState,
      o = n.internalActions,
      a = o.removeQueryResult,
      l = o.unsubscribeQueryResult;
    function u(p) {
      var m = i.currentSubscriptions[p];
      return !!m && !KI(m);
    }
    var s = {},
      c = function (p, m, y) {
        var h;
        if (l.match(p)) {
          var E = m.getState()[t],
            f = p.payload.queryCacheKey;
          d(
            f,
            (h = E.queries[f]) == null ? void 0 : h.endpointName,
            m,
            E.config
          );
        }
        if (n.util.resetApiState.match(p))
          for (var v = 0, g = Object.entries(s); v < g.length; v++) {
            var w = g[v],
              S = w[0],
              b = w[1];
            b && clearTimeout(b), delete s[S];
          }
        if (r.hasRehydrationInfo(p))
          for (
            var E = m.getState()[t],
              x = r.extractRehydrationInfo(p).queries,
              j = 0,
              P = Object.entries(x);
            j < P.length;
            j++
          ) {
            var C = P[j],
              f = C[0],
              M = C[1];
            d(f, M == null ? void 0 : M.endpointName, m, E.config);
          }
      };
    function d(p, m, y, h) {
      var E,
        f = r.endpointDefinitions[m],
        v =
          (E = f == null ? void 0 : f.keepUnusedDataFor) != null
            ? E
            : h.keepUnusedDataFor;
      if (v !== 1 / 0) {
        var g = Math.max(0, Math.min(v, qI));
        if (!u(p)) {
          var w = s[p];
          w && clearTimeout(w),
            (s[p] = setTimeout(function () {
              u(p) || y.dispatch(a({ queryCacheKey: p })), delete s[p];
            }, g * 1e3));
        }
      }
    }
    return c;
  },
  ZI = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      i = e.mutationThunk,
      o = e.api,
      a = e.assertTagType,
      l = e.refetchQuery,
      u = o.internalActions.removeQueryResult,
      s = zi(Wr(i), ns(i)),
      c = function (p, m) {
        s(p) && d(Ky(p, "invalidatesTags", r, a), m),
          o.util.invalidateTags.match(p) &&
            d(Gy(p.payload, void 0, void 0, void 0, void 0, a), m);
      };
    function d(p, m) {
      var y = m.getState(),
        h = y[t],
        E = o.util.selectInvalidatedBy(y, p);
      n.batch(function () {
        for (
          var f, v = Array.from(E.values()), g = 0, w = v;
          g < w.length;
          g++
        ) {
          var S = w[g].queryCacheKey,
            b = h.queries[S],
            x = (f = h.subscriptions[S]) != null ? f : {};
          b &&
            (Object.keys(x).length === 0
              ? m.dispatch(u({ queryCacheKey: S }))
              : b.status !== De.uninitialized && m.dispatch(l(b, S)));
        }
      });
    }
    return c;
  },
  XI = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      a = {},
      l = function (m, y) {
        (r.internalActions.updateSubscriptionOptions.match(m) ||
          r.internalActions.unsubscribeQueryResult.match(m)) &&
          s(m.payload, y),
          (n.pending.match(m) || (n.rejected.match(m) && m.meta.condition)) &&
            s(m.meta.arg, y),
          (n.fulfilled.match(m) ||
            (n.rejected.match(m) && !m.meta.condition)) &&
            u(m.meta.arg, y),
          r.util.resetApiState.match(m) && d();
      };
    function u(m, y) {
      var h = m.queryCacheKey,
        E = y.getState()[t],
        f = E.queries[h],
        v = o.currentSubscriptions[h];
      if (!(!f || f.status === De.uninitialized)) {
        var g = p(v);
        if (Number.isFinite(g)) {
          var w = a[h];
          w != null &&
            w.timeout &&
            (clearTimeout(w.timeout), (w.timeout = void 0));
          var S = Date.now() + g,
            b = (a[h] = {
              nextPollTimestamp: S,
              pollingInterval: g,
              timeout: setTimeout(function () {
                (b.timeout = void 0), y.dispatch(i(f, h));
              }, g),
            });
        }
      }
    }
    function s(m, y) {
      var h = m.queryCacheKey,
        E = y.getState()[t],
        f = E.queries[h],
        v = o.currentSubscriptions[h];
      if (!(!f || f.status === De.uninitialized)) {
        var g = p(v);
        if (!Number.isFinite(g)) {
          c(h);
          return;
        }
        var w = a[h],
          S = Date.now() + g;
        (!w || S < w.nextPollTimestamp) && u({ queryCacheKey: h }, y);
      }
    }
    function c(m) {
      var y = a[m];
      y != null && y.timeout && clearTimeout(y.timeout), delete a[m];
    }
    function d() {
      for (var m = 0, y = Object.keys(a); m < y.length; m++) {
        var h = y[m];
        c(h);
      }
    }
    function p(m) {
      m === void 0 && (m = {});
      var y = Number.POSITIVE_INFINITY;
      for (var h in m)
        m[h].pollingInterval && (y = Math.min(m[h].pollingInterval, y));
      return y;
    }
    return l;
  },
  JI = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      a = r.internalActions.removeQueryResult,
      l = function (s, c) {
        hp.match(s) && u(c, "refetchOnFocus"),
          vp.match(s) && u(c, "refetchOnReconnect");
      };
    function u(s, c) {
      var d = s.getState()[t],
        p = d.queries,
        m = o.currentSubscriptions;
      n.batch(function () {
        for (var y = 0, h = Object.keys(m); y < h.length; y++) {
          var E = h[y],
            f = p[E],
            v = m[E];
          if (!(!v || !f)) {
            var g =
              Object.values(v).some(function (w) {
                return w[c] === !0;
              }) ||
              (Object.values(v).every(function (w) {
                return w[c] === void 0;
              }) &&
                d.config[c]);
            g &&
              (Object.keys(v).length === 0
                ? s.dispatch(a({ queryCacheKey: E }))
                : f.status !== De.uninitialized && s.dispatch(i(f, E)));
          }
        }
      });
    }
    return l;
  },
  cv = new Error("Promise never resolved before cacheEntryRemoved."),
  eM = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      i = e.queryThunk,
      o = e.mutationThunk;
    e.internalState;
    var a = Ed(i),
      l = Ed(o),
      u = Wr(i, o),
      s = {},
      c = function (m, y, h) {
        var E = d(m);
        if (i.pending.match(m)) {
          var f = h[n].queries[E],
            v = y.getState()[n].queries[E];
          !f &&
            v &&
            p(
              m.meta.arg.endpointName,
              m.meta.arg.originalArgs,
              E,
              y,
              m.meta.requestId
            );
        } else if (o.pending.match(m)) {
          var v = y.getState()[n].mutations[E];
          v &&
            p(
              m.meta.arg.endpointName,
              m.meta.arg.originalArgs,
              E,
              y,
              m.meta.requestId
            );
        } else if (u(m)) {
          var g = s[E];
          g != null &&
            g.valueResolved &&
            (g.valueResolved({ data: m.payload, meta: m.meta.baseQueryMeta }),
            delete g.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(m) ||
          t.internalActions.removeMutationResult.match(m)
        ) {
          var g = s[E];
          g && (delete s[E], g.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(m))
          for (var w = 0, S = Object.entries(s); w < S.length; w++) {
            var b = S[w],
              x = b[0],
              g = b[1];
            delete s[x], g.cacheEntryRemoved();
          }
      };
    function d(m) {
      return a(m)
        ? m.meta.arg.queryCacheKey
        : l(m)
        ? m.meta.requestId
        : t.internalActions.removeQueryResult.match(m)
        ? m.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(m)
        ? ia(m.payload)
        : "";
    }
    function p(m, y, h, E, f) {
      var v = r.endpointDefinitions[m],
        g = v == null ? void 0 : v.onCacheEntryAdded;
      if (g) {
        var w = {},
          S = new Promise(function (M) {
            w.cacheEntryRemoved = M;
          }),
          b = Promise.race([
            new Promise(function (M) {
              w.valueResolved = M;
            }),
            S.then(function () {
              throw cv;
            }),
          ]);
        b.catch(function () {}), (s[h] = w);
        var x = t.endpoints[m].select(v.type === Fn.query ? y : h),
          j = E.dispatch(function (M, R, A) {
            return A;
          }),
          P = Sn(Qe({}, E), {
            getCacheEntry: function () {
              return x(E.getState());
            },
            requestId: f,
            extra: j,
            updateCachedData:
              v.type === Fn.query
                ? function (M) {
                    return E.dispatch(t.util.updateQueryData(m, y, M));
                  }
                : void 0,
            cacheDataLoaded: b,
            cacheEntryRemoved: S,
          }),
          C = g(y, P);
        Promise.resolve(C).catch(function (M) {
          if (M !== cv) throw M;
        });
      }
    }
    return c;
  },
  tM = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      i = e.mutationThunk,
      o = Yf(r, i),
      a = Xo(r, i),
      l = Wr(r, i),
      u = {},
      s = function (c, d) {
        var p, m, y;
        if (o(c)) {
          var h = c.meta,
            E = h.requestId,
            f = h.arg,
            v = f.endpointName,
            g = f.originalArgs,
            w = n.endpointDefinitions[v],
            S = w == null ? void 0 : w.onQueryStarted;
          if (S) {
            var b = {},
              x = new Promise(function (N, W) {
                (b.resolve = N), (b.reject = W);
              });
            x.catch(function () {}), (u[E] = b);
            var j = t.endpoints[v].select(w.type === Fn.query ? g : E),
              P = d.dispatch(function (N, W, q) {
                return q;
              }),
              C = Sn(Qe({}, d), {
                getCacheEntry: function () {
                  return j(d.getState());
                },
                requestId: E,
                extra: P,
                updateCachedData:
                  w.type === Fn.query
                    ? function (N) {
                        return d.dispatch(t.util.updateQueryData(v, g, N));
                      }
                    : void 0,
                queryFulfilled: x,
              });
            S(g, C);
          }
        } else if (l(c)) {
          var M = c.meta,
            E = M.requestId,
            R = M.baseQueryMeta;
          (p = u[E]) == null || p.resolve({ data: c.payload, meta: R }),
            delete u[E];
        } else if (a(c)) {
          var A = c.meta,
            E = A.requestId,
            T = A.rejectedWithValue,
            R = A.baseQueryMeta;
          (y = u[E]) == null ||
            y.reject({
              error: (m = c.payload) != null ? m : c.error,
              isUnhandledError: !T,
              meta: R,
            }),
            delete u[E];
        }
      };
    return s;
  },
  nM = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (i, o) {
      var a, l;
      t.util.resetApiState.match(i) &&
        o.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < "u";
    };
  },
  dv,
  rM =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (dv || (dv = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  iM = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      i = t.reducerPath + "/subscriptions",
      o = null,
      a = !1,
      l = t.internalActions,
      u = l.updateSubscriptionOptions,
      s = l.unsubscribeQueryResult,
      c = function (d, p) {
        var m, y, h, E, f, v, g, w, S;
        if (u.match(p)) {
          var b = p.payload,
            x = b.queryCacheKey,
            j = b.requestId,
            P = b.options;
          return (
            (m = d == null ? void 0 : d[x]) != null && m[j] && (d[x][j] = P), !0
          );
        }
        if (s.match(p)) {
          var C = p.payload,
            x = C.queryCacheKey,
            j = C.requestId;
          return d[x] && delete d[x][j], !0;
        }
        if (t.internalActions.removeQueryResult.match(p))
          return delete d[p.payload.queryCacheKey], !0;
        if (n.pending.match(p)) {
          var M = p.meta,
            R = M.arg,
            j = M.requestId;
          if (R.subscribe) {
            var A = (h = d[(y = R.queryCacheKey)]) != null ? h : (d[y] = {});
            return (
              (A[j] =
                (f = (E = R.subscriptionOptions) != null ? E : A[j]) != null
                  ? f
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(p)) {
          var T = p.meta,
            N = T.condition,
            R = T.arg,
            j = T.requestId;
          if (N && R.subscribe) {
            var A = (g = d[(v = R.queryCacheKey)]) != null ? g : (d[v] = {});
            return (
              (A[j] =
                (S = (w = R.subscriptionOptions) != null ? w : A[j]) != null
                  ? S
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (d, p) {
      var m, y;
      if (
        (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.util.resetApiState.match(d))
      )
        return (o = r.currentSubscriptions = {}), [!0, !1];
      if (t.internalActions.internal_probeSubscription.match(d)) {
        var h = d.payload,
          E = h.queryCacheKey,
          f = h.requestId,
          v = !!((m = r.currentSubscriptions[E]) != null && m[f]);
        return [!1, v];
      }
      var g = c(r.currentSubscriptions, d);
      if (g) {
        a ||
          (rM(function () {
            var x = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              j = C1(o, function () {
                return x;
              }),
              P = j[1];
            p.next(t.internalActions.subscriptionsUpdated(P)),
              (o = x),
              (a = !1);
          }),
          (a = !0));
        var w = !!((y = d.type) != null && y.startsWith(i)),
          S = n.rejected.match(d) && d.meta.condition && !!d.meta.arg.subscribe,
          b = !w && !S;
        return [b, !1];
      }
      return [!0, !1];
    };
  };
function oM(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    i = e.context,
    o = i.apiUid,
    a = { invalidateTags: It(t + "/invalidateTags") },
    l = function (d) {
      return !!d && typeof d.type == "string" && d.type.startsWith(t + "/");
    },
    u = [nM, YI, ZI, XI, eM, tM],
    s = function (d) {
      var p = !1,
        m = { currentSubscriptions: {} },
        y = Sn(Qe({}, e), { internalState: m, refetchQuery: c }),
        h = u.map(function (v) {
          return v(y);
        }),
        E = iM(y),
        f = JI(y);
      return function (v) {
        return function (g) {
          p ||
            ((p = !0), d.dispatch(r.internalActions.middlewareRegistered(o)));
          var w = Sn(Qe({}, d), { next: v }),
            S = d.getState(),
            b = E(g, w, S),
            x = b[0],
            j = b[1],
            P;
          if (
            (x ? (P = v(g)) : (P = j),
            d.getState()[t] && (f(g, w, S), l(g) || i.hasRehydrationInfo(g)))
          )
            for (var C = 0, M = h; C < M.length; C++) {
              var R = M[C];
              R(g, w, S);
            }
          return P;
        };
      };
    };
  return { middleware: s, actions: a };
  function c(d, p, m) {
    return (
      m === void 0 && (m = {}),
      n(
        Qe(
          {
            type: "query",
            endpointName: d.endpointName,
            originalArgs: d.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: p,
          },
          m
        )
      )
    );
  }
}
function Qn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, au([e], t));
}
var fv = Symbol(),
  aM = function () {
    return {
      name: fv,
      init: function (e, t, n) {
        var r = t.baseQuery,
          i = t.tagTypes,
          o = t.reducerPath,
          a = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          u = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        oj();
        var d = function (L) {
          return typeof process < "u", L;
        };
        Object.assign(e, {
          reducerPath: o,
          endpoints: {},
          internalActions: {
            onOnline: vp,
            onOffline: Wy,
            onFocus: hp,
            onFocusLost: Hy,
          },
          util: {},
        });
        var p = HI({
            baseQuery: r,
            reducerPath: o,
            context: n,
            api: e,
            serializeQueryArgs: a,
          }),
          m = p.queryThunk,
          y = p.mutationThunk,
          h = p.patchQueryData,
          E = p.updateQueryData,
          f = p.upsertQueryData,
          v = p.prefetch,
          g = p.buildMatchThunkActions,
          w = WI({
            context: n,
            queryThunk: m,
            mutationThunk: y,
            reducerPath: o,
            assertTagType: d,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: u,
              keepUnusedDataFor: l,
              reducerPath: o,
            },
          }),
          S = w.reducer,
          b = w.actions;
        Qn(e.util, {
          patchQueryData: h,
          updateQueryData: E,
          upsertQueryData: f,
          prefetch: v,
          resetApiState: b.resetApiState,
        }),
          Qn(e.internalActions, b);
        var x = oM({
            reducerPath: o,
            context: n,
            queryThunk: m,
            mutationThunk: y,
            api: e,
            assertTagType: d,
          }),
          j = x.middleware,
          P = x.actions;
        Qn(e.util, P), Qn(e, { reducer: S, middleware: j });
        var C = QI({ serializeQueryArgs: a, reducerPath: o }),
          M = C.buildQuerySelector,
          R = C.buildMutationSelector,
          A = C.selectInvalidatedBy;
        Qn(e.util, { selectInvalidatedBy: A });
        var T = VI({
            queryThunk: m,
            mutationThunk: y,
            api: e,
            serializeQueryArgs: a,
            context: n,
          }),
          N = T.buildInitiateQuery,
          W = T.buildInitiateMutation,
          q = T.getRunningMutationThunk,
          k = T.getRunningMutationsThunk,
          V = T.getRunningQueriesThunk,
          B = T.getRunningQueryThunk,
          G = T.getRunningOperationPromises,
          U = T.removalWarning;
        return (
          Qn(e.util, {
            getRunningOperationPromises: G,
            getRunningOperationPromise: U,
            getRunningMutationThunk: q,
            getRunningMutationsThunk: k,
            getRunningQueryThunk: B,
            getRunningQueriesThunk: V,
          }),
          {
            name: fv,
            injectEndpoint: function (L, D) {
              var _,
                I,
                Z = e;
              (I = (_ = Z.endpoints)[L]) != null || (_[L] = {}),
                Qy(D)
                  ? Qn(
                      Z.endpoints[L],
                      { name: L, select: M(L, D), initiate: N(L, D) },
                      g(m, L)
                    )
                  : zI(D) &&
                    Qn(
                      Z.endpoints[L],
                      { name: L, select: R(), initiate: W(L) },
                      g(y, L)
                    );
            },
          }
        );
      },
    };
  },
  lM =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  uM = Object.defineProperty,
  sM = Object.defineProperties,
  cM = Object.getOwnPropertyDescriptors,
  pv = Object.getOwnPropertySymbols,
  dM = Object.prototype.hasOwnProperty,
  fM = Object.prototype.propertyIsEnumerable,
  mv = function (e, t, n) {
    return t in e
      ? uM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Cn = function (e, t) {
    for (var n in t || (t = {})) dM.call(t, n) && mv(e, n, t[n]);
    if (pv)
      for (var r = 0, i = pv(t); r < i.length; r++) {
        var n = i[r];
        fM.call(t, n) && mv(e, n, t[n]);
      }
    return e;
  },
  pl = function (e, t) {
    return sM(e, cM(t));
  };
function hv(e, t, n, r) {
  var i = O.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == "object"
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    o = O.useRef(i);
  return (
    O.useEffect(
      function () {
        o.current.serialized !== i.serialized && (o.current = i);
      },
      [i]
    ),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  );
}
var sc = Symbol();
function cc(e) {
  var t = O.useRef(e);
  return (
    O.useEffect(
      function () {
        Vl(t.current, e) || (t.current = e);
      },
      [e]
    ),
    Vl(t.current, e) ? t.current : e
  );
}
var Qa = WeakMap ? new WeakMap() : void 0,
  pM = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      i = Qa == null ? void 0 : Qa.get(n);
    if (typeof i == "string") r = i;
    else {
      var o = JSON.stringify(n, function (a, l) {
        return vr(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (u, s) {
                return (u[s] = l[s]), u;
              }, {})
          : l;
      });
      vr(n) && (Qa == null || Qa.set(n, o)), (r = o);
    }
    return t + "(" + r + ")";
  },
  mM =
    typeof window < "u" && window.document && window.document.createElement
      ? O.useLayoutEffect
      : O.useEffect,
  hM = function (e) {
    return e;
  },
  vM = function (e) {
    return e.isUninitialized
      ? pl(Cn({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: De.pending,
        })
      : e;
  };
function gM(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    i = n.useDispatch,
    o = n.useSelector,
    a = n.useStore,
    l = n.unstable__sideEffectsInRender,
    u = e.serializeQueryArgs,
    s = e.context,
    c = l
      ? function (h) {
          return h();
        }
      : O.useEffect;
  return { buildQueryHooks: m, buildMutationHook: y, usePrefetch: p };
  function d(h, E, f) {
    if (E != null && E.endpointName && h.isUninitialized) {
      var v = E.endpointName,
        g = s.endpointDefinitions[v];
      u({
        queryArgs: E.originalArgs,
        endpointDefinition: g,
        endpointName: v,
      }) === u({ queryArgs: f, endpointDefinition: g, endpointName: v }) &&
        (E = void 0);
    }
    var w = h.isSuccess ? h.data : E == null ? void 0 : E.data;
    w === void 0 && (w = h.data);
    var S = w !== void 0,
      b = h.isLoading,
      x = !S && b,
      j = h.isSuccess || (b && S);
    return pl(Cn({}, h), {
      data: w,
      currentData: h.data,
      isFetching: b,
      isLoading: x,
      isSuccess: j,
    });
  }
  function p(h, E) {
    var f = i(),
      v = cc(E);
    return O.useCallback(
      function (g, w) {
        return f(t.util.prefetch(h, g, Cn(Cn({}, v), w)));
      },
      [h, f, v]
    );
  }
  function m(h) {
    var E = function (g, w) {
        var S = w === void 0 ? {} : w,
          b = S.refetchOnReconnect,
          x = S.refetchOnFocus,
          j = S.refetchOnMountOrArgChange,
          P = S.skip,
          C = P === void 0 ? !1 : P,
          M = S.pollingInterval,
          R = M === void 0 ? 0 : M,
          A = t.endpoints[h].initiate,
          T = i(),
          N = hv(C ? Mr : g, pM, s.endpointDefinitions[h], h),
          W = cc({
            refetchOnReconnect: b,
            refetchOnFocus: x,
            pollingInterval: R,
          }),
          q = O.useRef(!1),
          k = O.useRef(),
          V = k.current || {},
          B = V.queryCacheKey,
          G = V.requestId,
          U = !1;
        if (B && G) {
          var L = T(
            t.internalActions.internal_probeSubscription({
              queryCacheKey: B,
              requestId: G,
            })
          );
          U = !!L;
        }
        var D = !U && q.current;
        return (
          c(function () {
            q.current = U;
          }),
          c(
            function () {
              D && (k.current = void 0);
            },
            [D]
          ),
          c(
            function () {
              var _,
                I = k.current;
              if ((typeof process < "u", N === Mr)) {
                I == null || I.unsubscribe(), (k.current = void 0);
                return;
              }
              var Z = (_ = k.current) == null ? void 0 : _.subscriptionOptions;
              if (!I || I.arg !== N) {
                I == null || I.unsubscribe();
                var H = T(A(N, { subscriptionOptions: W, forceRefetch: j }));
                k.current = H;
              } else W !== Z && I.updateSubscriptionOptions(W);
            },
            [T, A, j, N, W, D]
          ),
          O.useEffect(function () {
            return function () {
              var _;
              (_ = k.current) == null || _.unsubscribe(), (k.current = void 0);
            };
          }, []),
          O.useMemo(function () {
            return {
              refetch: function () {
                var _;
                if (!k.current)
                  throw new Error(
                    "Cannot refetch a query that has not been started yet."
                  );
                return (_ = k.current) == null ? void 0 : _.refetch();
              },
            };
          }, [])
        );
      },
      f = function (g) {
        var w = g === void 0 ? {} : g,
          S = w.refetchOnReconnect,
          b = w.refetchOnFocus,
          x = w.pollingInterval,
          j = x === void 0 ? 0 : x,
          P = t.endpoints[h].initiate,
          C = i(),
          M = O.useState(sc),
          R = M[0],
          A = M[1],
          T = O.useRef(),
          N = cc({
            refetchOnReconnect: S,
            refetchOnFocus: b,
            pollingInterval: j,
          });
        c(
          function () {
            var k,
              V,
              B = (k = T.current) == null ? void 0 : k.subscriptionOptions;
            N !== B &&
              ((V = T.current) == null || V.updateSubscriptionOptions(N));
          },
          [N]
        );
        var W = O.useRef(N);
        c(
          function () {
            W.current = N;
          },
          [N]
        );
        var q = O.useCallback(
          function (k, V) {
            V === void 0 && (V = !1);
            var B;
            return (
              r(function () {
                var G;
                (G = T.current) == null || G.unsubscribe(),
                  (T.current = B =
                    C(
                      P(k, { subscriptionOptions: W.current, forceRefetch: !V })
                    )),
                  A(k);
              }),
              B
            );
          },
          [C, P]
        );
        return (
          O.useEffect(function () {
            return function () {
              var k;
              (k = T == null ? void 0 : T.current) == null || k.unsubscribe();
            };
          }, []),
          O.useEffect(
            function () {
              R !== sc && !T.current && q(R, !0);
            },
            [R, q]
          ),
          O.useMemo(
            function () {
              return [q, R];
            },
            [q, R]
          )
        );
      },
      v = function (g, w) {
        var S = w === void 0 ? {} : w,
          b = S.skip,
          x = b === void 0 ? !1 : b,
          j = S.selectFromResult,
          P = t.endpoints[h].select,
          C = hv(x ? Mr : g, u, s.endpointDefinitions[h], h),
          M = O.useRef(),
          R = O.useMemo(
            function () {
              return Oo(
                [
                  P(C),
                  function (q, k) {
                    return k;
                  },
                  function (q) {
                    return C;
                  },
                ],
                d
              );
            },
            [P, C]
          ),
          A = O.useMemo(
            function () {
              return j ? Oo([R], j) : R;
            },
            [R, j]
          ),
          T = o(function (q) {
            return A(q, M.current);
          }, Vl),
          N = a(),
          W = R(N.getState(), M.current);
        return (
          mM(
            function () {
              M.current = W;
            },
            [W]
          ),
          T
        );
      };
    return {
      useQueryState: v,
      useQuerySubscription: E,
      useLazyQuerySubscription: f,
      useLazyQuery: function (g) {
        var w = f(g),
          S = w[0],
          b = w[1],
          x = v(b, pl(Cn({}, g), { skip: b === sc })),
          j = O.useMemo(
            function () {
              return { lastArg: b };
            },
            [b]
          );
        return O.useMemo(
          function () {
            return [S, x, j];
          },
          [S, x, j]
        );
      },
      useQuery: function (g, w) {
        var S = E(g, w),
          b = v(
            g,
            Cn(
              {
                selectFromResult:
                  g === Mr || (w != null && w.skip) ? void 0 : vM,
              },
              w
            )
          ),
          x = b.data,
          j = b.status,
          P = b.isLoading,
          C = b.isSuccess,
          M = b.isError,
          R = b.error;
        return (
          O.useDebugValue({
            data: x,
            status: j,
            isLoading: P,
            isSuccess: C,
            isError: M,
            error: R,
          }),
          O.useMemo(
            function () {
              return Cn(Cn({}, b), S);
            },
            [b, S]
          )
        );
      },
    };
  }
  function y(h) {
    return function (E) {
      var f = E === void 0 ? {} : E,
        v = f.selectFromResult,
        g = v === void 0 ? hM : v,
        w = f.fixedCacheKey,
        S = t.endpoints[h],
        b = S.select,
        x = S.initiate,
        j = i(),
        P = O.useState(),
        C = P[0],
        M = P[1];
      O.useEffect(
        function () {
          return function () {
            (C != null && C.arg.fixedCacheKey) || C == null || C.reset();
          };
        },
        [C]
      );
      var R = O.useCallback(
          function (I) {
            var Z = j(x(I, { fixedCacheKey: w }));
            return M(Z), Z;
          },
          [j, x, w]
        ),
        A = (C || {}).requestId,
        T = O.useMemo(
          function () {
            return Oo(
              [
                b({
                  fixedCacheKey: w,
                  requestId: C == null ? void 0 : C.requestId,
                }),
              ],
              g
            );
          },
          [b, C, g, w]
        ),
        N = o(T, Vl),
        W = w == null ? (C == null ? void 0 : C.arg.originalArgs) : void 0,
        q = O.useCallback(
          function () {
            r(function () {
              C && M(void 0),
                w &&
                  j(
                    t.internalActions.removeMutationResult({
                      requestId: A,
                      fixedCacheKey: w,
                    })
                  );
            });
          },
          [j, w, C, A]
        ),
        k = N.endpointName,
        V = N.data,
        B = N.status,
        G = N.isLoading,
        U = N.isSuccess,
        L = N.isError,
        D = N.error;
      O.useDebugValue({
        endpointName: k,
        data: V,
        status: B,
        isLoading: G,
        isSuccess: U,
        isError: L,
        error: D,
      });
      var _ = O.useMemo(
        function () {
          return pl(Cn({}, N), { originalArgs: W, reset: q });
        },
        [N, W, q]
      );
      return O.useMemo(
        function () {
          return [R, _];
        },
        [R, _]
      );
    };
  }
}
var su;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(su || (su = {}));
function yM(e) {
  return e.type === su.query;
}
function SM(e) {
  return e.type === su.mutation;
}
function dc(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Ga(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, lM([e], t));
}
var wM = Symbol(),
  EM = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? Cu.unstable_batchedUpdates : n,
      i = t.useDispatch,
      o = i === void 0 ? jn : i,
      a = t.useSelector,
      l = a === void 0 ? Bu : a,
      u = t.useStore,
      s = u === void 0 ? w1 : u,
      c = t.unstable__sideEffectsInRender,
      d = c === void 0 ? !1 : c;
    return {
      name: wM,
      init: function (p, m, y) {
        var h = m.serializeQueryArgs,
          E = p,
          f = gM({
            api: p,
            moduleOptions: {
              batch: r,
              useDispatch: o,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: d,
            },
            serializeQueryArgs: h,
            context: y,
          }),
          v = f.buildQueryHooks,
          g = f.buildMutationHook,
          w = f.usePrefetch;
        return (
          Ga(E, { usePrefetch: w }),
          Ga(y, { batch: r }),
          {
            injectEndpoint: function (S, b) {
              if (yM(b)) {
                var x = v(S),
                  j = x.useQuery,
                  P = x.useLazyQuery,
                  C = x.useLazyQuerySubscription,
                  M = x.useQueryState,
                  R = x.useQuerySubscription;
                Ga(E.endpoints[S], {
                  useQuery: j,
                  useLazyQuery: P,
                  useLazyQuerySubscription: C,
                  useQueryState: M,
                  useQuerySubscription: R,
                }),
                  (p["use" + dc(S) + "Query"] = j),
                  (p["useLazy" + dc(S) + "Query"] = P);
              } else if (SM(b)) {
                var A = g(S);
                Ga(E.endpoints[S], { useMutation: A }),
                  (p["use" + dc(S) + "Mutation"] = A);
              }
            },
          }
        );
      },
    };
  },
  bM = GI(aM(), EM());
const ml = bM({
    baseQuery: _I({ baseUrl: "http://localhost:5575/api" }),
    endpoints: (e) => ({
      registerUser: e.mutation({
        query: (t) => ({
          url: "user/register",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(t),
        }),
      }),
      getLoggedUser: e.query({ query: (t) => `/user/${t}` }),
    }),
  }),
  { useRegisterUserDataMutation: xM, useGetLoggedUserQuery: FM } = ml;
function jM() {
  const [e, t] = O.useState({ value: "", field: "bio" }),
    [n, r] = O.useState(!1),
    i = Bu((p) => p.userRegister),
    [o, { isSuccess: a, data: l }] = xM(),
    u = (p) => {
      const m = p.target.value;
      t({ ...e, value: m });
    },
    s = e.value.length,
    c = jn(),
    d = _i();
  return (
    O.useEffect(() => {
      n && (o(i), d("/conversation"));
    }, [n]),
    F.jsxs(Jf, {
      children: [
        F.jsxs(ep, {
          children: [
            F.jsx("div", {
              style: { width: "20%" },
              children: F.jsx(Lt, {
                to: "/occupation",
                children: F.jsx("img", { src: ls }),
              }),
            }),
            F.jsx(tp, { children: F.jsx(np, { children: "Add Bio" }) }),
            F.jsx("div", { style: { width: "20%" } }),
          ],
        }),
        F.jsx(rp, {
          children: F.jsxs(ct, {
            style: { flexDirection: "column", height: "100%" },
            children: [
              F.jsx(ct, {
                style: {
                  height: "10%",
                  width: "100%",
                  justifyContent: "flex-start",
                },
                children: F.jsx(ip, { children: "Add your Bio Description" }),
              }),
              F.jsxs(ap, {
                children: [
                  F.jsx(CI, {
                    value: e.value,
                    onChange: u,
                    placeholder:
                      "Write here...For example: I'm John Doe and Cooking for me is a way of living.",
                    maxLength: 500,
                  }),
                  F.jsxs(OI, { children: [500 - s, " character"] }),
                ],
              }),
              F.jsx(ct, {
                style: { height: "20%", width: "100%" },
                children: F.jsx(op, {
                  onClick: () => {
                    c(_n(e)), r(!0);
                  },
                  children: F.jsx("i", { children: "Save & Finish" }),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const CM = () => {
    const [e, t] = O.useState({ value: "", field: "address" }),
      n = jn(),
      { value: r } = e;
    return F.jsxs("div", {
      children: [
        F.jsx(Hr, {
          leftIcon: F.jsx(Lt, {
            to: "/nationalityPage",
            children: F.jsx(Li, {}),
          }),
          title: "Add Location",
        }),
        F.jsxs(Vr, {
          children: [
            F.jsx(xe, { direction: "vertical", margin: "1.75rem" }),
            F.jsx(xe, {
              direction: "horizontal",
              margin: "35rem",
              children: F.jsx(pa, { children: "Add your Location" }),
            }),
            F.jsx(xe, { direction: "vertical", margin: "9.25rem" }),
            F.jsx(c1, {
              type: "text",
              value: r,
              onChange: (i) => t({ ...e, value: i.target.value }),
              placeholder: "Add Location",
              borderColor: "#1E75E5",
            }),
            F.jsx(fa, {
              to: r ? "/gender" : null,
              onClick: () => {
                r && (n(_n(e)), t({ ...e, value: "" }));
              },
              bg: r ? "#50924E" : "#d7ddd6",
              hoverBg: r ? "#396d37" : "#d7ddd6",
              text: "Save & Next",
            }),
          ],
        }),
      ],
    });
  },
  OM = ({ profileData: e }) =>
    F.jsxs("div", {
      children: [
        F.jsx(xe, {
          direction: "vertical",
          margin: "5%",
          children: F.jsx(Hr, {
            leftIcon: F.jsx(Lt, { to: "/", children: F.jsx(Li, {}) }),
            title: "Profile",
            rightIcon: F.jsx(F.Fragment, {
              children:
                Qj.name !== "userRegister" &&
                F.jsx(dF, {
                  children: F.jsx(Lt, { to: "/", children: F.jsx(NE, {}) }),
                }),
            }),
          }),
        }),
        F.jsx(Vr, {
          children: F.jsxs(iF, {
            children: [
              F.jsx(oF, { src: e.img, alt: "profile" }),
              F.jsxs(aF, {
                children: [
                  F.jsx(lF, { children: e.name }),
                  F.jsx(od, {
                    letter:
                      e.lang === "Arabic"
                        ? "ع"
                        : e.lang === "Hebrew"
                        ? "He"
                        : "En",
                  }),
                ],
              }),
              F.jsxs(uF, {
                children: [
                  "My Interest",
                  F.jsx(cF, {
                    children: e.hobbies.map((t, n) =>
                      F.jsxs(sF, { children: [" ", t] }, n)
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
function PM() {
  return F.jsxs("div", { children: [F.jsx(E1, {}), F.jsx(_x, {})] });
}
const IM = () => {
    const t = "201",
      { data: n, isLoading: r, isError: i, isSuccess: o } = FM(t),
      a = jn(),
      l = async () => {
        (await n) && a(Wj({ ...n.data, isConnectedUser: !0 }));
      };
    return (
      O.useEffect(() => {
        o && n && l();
      }, [n]),
      r
        ? F.jsx("div", { children: "Loading..." })
        : i
        ? F.jsx("div", { children: "Error occurred while fetching user data." })
        : F.jsx("div", {})
    );
  },
  MM = Gx([
    {
      path: "/",
      element: F.jsx(PM, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
      children: [
        { path: "/lang", element: F.jsx(Gj, {}) },
        { path: "/interests", element: F.jsx(nC, {}) },
        { path: "/location", element: F.jsx(CM, {}) },
        { path: "/gender", element: F.jsx(jI, {}) },
        { path: "/occupation", element: F.jsx(rC, {}) },
      ],
    },
    {
      path: "/intro",
      element: F.jsx(SF, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
    },
    { path: "/conversation", element: F.jsx(oC, { prevConversation: an }) },
    {
      path: "/test",
      element: F.jsx(IM, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
    },
    { path: "/profile", element: F.jsx(OM, {}) },
    {
      path: "/chatPage",
      element: F.jsx(EI, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
    },
    {
      path: "/agePage",
      element: F.jsx(nI, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
    },
    {
      path: "/bioPage",
      element: F.jsx(jM, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
    },
    {
      path: "/nationalityPage",
      element: F.jsx(FI, {}),
      errorElement: F.jsx(F.Fragment, { children: "Error..." }),
    },
  ]);
function kM() {
  return F.jsx(Nx, { router: MM });
}
const RM = Uj({
    reducer: { [ml.reducerPath]: ml.reducer, userRegister: Xf.reducer },
    middleware: (e) => e().concat(ml.middleware),
  }),
  AM = Ab`
@font-face {
    font-family: "Poppins";
    src: url("/src/assets/fonts/Poppins-Medium.ttf") format("truetype");
  }
@font-face {
    font-family: "Mulish";
    src: url("/src/assets/fonts/Mulish-Regular.ttf") format("truetype");
  }
@font-face {
    font-family: "ABeeZee";
    src: url("/src/assets/fonts/ABeeZee-Regular.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    
    font-size: 62.5%; 
    
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem; 
  }

  p{
    line-height: 1.5;
  }


  `;
fc.createRoot(document.getElementById("root")).render(
  F.jsxs(zn.StrictMode, {
    children: [
      F.jsx(AM, {}),
      F.jsx(If, {
        fallback: F.jsx(Error, { text: "Error in one of the components" }),
        children: F.jsx(XF, { store: RM, children: F.jsx(kM, {}) }),
      }),
    ],
  })
);
