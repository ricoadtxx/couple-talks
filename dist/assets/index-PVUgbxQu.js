function Rm(e, t) {
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
				for (const s of o.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
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
function Am(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var Of = { exports: {} },
	Ro = {},
	Bf = { exports: {} },
	_ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for("react.element"),
	Vm = Symbol.for("react.portal"),
	Mm = Symbol.for("react.fragment"),
	jm = Symbol.for("react.strict_mode"),
	Dm = Symbol.for("react.profiler"),
	Nm = Symbol.for("react.provider"),
	Fm = Symbol.for("react.context"),
	_m = Symbol.for("react.forward_ref"),
	Om = Symbol.for("react.suspense"),
	Bm = Symbol.for("react.memo"),
	Im = Symbol.for("react.lazy"),
	gu = Symbol.iterator;
function zm(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (gu && e[gu]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var If = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	zf = Object.assign,
	Uf = {};
function tr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Uf),
		(this.updater = n || If);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $f() {}
$f.prototype = tr.prototype;
function Ja(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Uf),
		(this.updater = n || If);
}
var qa = (Ja.prototype = new $f());
qa.constructor = Ja;
zf(qa, tr.prototype);
qa.isPureReactComponent = !0;
var yu = Array.isArray,
	Wf = Object.prototype.hasOwnProperty,
	el = { current: null },
	Hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			Wf.call(t, r) && !Hf.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
		i.children = l;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: ti,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: el.current,
	};
}
function Um(e, t) {
	return {
		$$typeof: ti,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function tl(e) {
	return typeof e == "object" && e !== null && e.$$typeof === ti;
}
function $m(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var vu = /\/+/g;
function ts(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? $m("" + e.key)
		: t.toString(36);
}
function Di(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case ti:
					case Vm:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === "" ? "." + ts(s, 0) : r),
			yu(i)
				? ((n = ""),
				  e != null && (n = e.replace(vu, "$&/") + "/"),
				  Di(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (tl(i) &&
						(i = Um(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ""
									: ("" + i.key).replace(vu, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), yu(e)))
		for (var a = 0; a < e.length; a++) {
			o = e[a];
			var l = r + ts(o, a);
			s += Di(o, t, n, l, i);
		}
	else if (((l = zm(e)), typeof l == "function"))
		for (e = l.call(e), a = 0; !(o = e.next()).done; )
			(o = o.value), (l = r + ts(o, a++)), (s += Di(o, t, n, l, i));
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
	return s;
}
function di(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Di(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function Wm(e) {
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
var we = { current: null },
	Ni = { transition: null },
	Hm = {
		ReactCurrentDispatcher: we,
		ReactCurrentBatchConfig: Ni,
		ReactCurrentOwner: el,
	};
_.Children = {
	map: di,
	forEach: function (e, t, n) {
		di(
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
			di(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			di(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!tl(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
_.Component = tr;
_.Fragment = Mm;
_.Profiler = Dm;
_.PureComponent = Ja;
_.StrictMode = jm;
_.Suspense = Om;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
_.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = zf({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = el.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (l in t)
			Wf.call(t, l) &&
				!Hf.hasOwnProperty(l) &&
				(r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		a = Array(l);
		for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: ti, type: e.type, key: i, ref: o, props: r, _owner: s };
};
_.createContext = function (e) {
	return (
		(e = {
			$$typeof: Fm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Nm, _context: e }),
		(e.Consumer = e)
	);
};
_.createElement = Kf;
_.createFactory = function (e) {
	var t = Kf.bind(null, e);
	return (t.type = e), t;
};
_.createRef = function () {
	return { current: null };
};
_.forwardRef = function (e) {
	return { $$typeof: _m, render: e };
};
_.isValidElement = tl;
_.lazy = function (e) {
	return { $$typeof: Im, _payload: { _status: -1, _result: e }, _init: Wm };
};
_.memo = function (e, t) {
	return { $$typeof: Bm, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
	var t = Ni.transition;
	Ni.transition = {};
	try {
		e();
	} finally {
		Ni.transition = t;
	}
};
_.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
_.useCallback = function (e, t) {
	return we.current.useCallback(e, t);
};
_.useContext = function (e) {
	return we.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
	return we.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
	return we.current.useEffect(e, t);
};
_.useId = function () {
	return we.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
	return we.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
	return we.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
	return we.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
	return we.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
	return we.current.useReducer(e, t, n);
};
_.useRef = function (e) {
	return we.current.useRef(e);
};
_.useState = function (e) {
	return we.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
	return we.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
	return we.current.useTransition();
};
_.version = "18.2.0";
Bf.exports = _;
var S = Bf.exports;
const Ao = Am(S),
	Km = Rm({ __proto__: null, default: Ao }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gm = S,
	Qm = Symbol.for("react.element"),
	Ym = Symbol.for("react.fragment"),
	Xm = Object.prototype.hasOwnProperty,
	bm = Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) Xm.call(t, r) && !Zm.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Qm,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: bm.current,
	};
}
Ro.Fragment = Ym;
Ro.jsx = Gf;
Ro.jsxs = Gf;
Of.exports = Ro;
var A = Of.exports,
	Us = {},
	Qf = { exports: {} },
	Fe = {},
	Yf = { exports: {} },
	Xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(L, M) {
		var F = L.length;
		L.push(M);
		e: for (; 0 < F; ) {
			var D = (F - 1) >>> 1,
				W = L[D];
			if (0 < i(W, M)) (L[D] = M), (L[F] = W), (F = D);
			else break e;
		}
	}
	function n(L) {
		return L.length === 0 ? null : L[0];
	}
	function r(L) {
		if (L.length === 0) return null;
		var M = L[0],
			F = L.pop();
		if (F !== M) {
			L[0] = F;
			e: for (var D = 0, W = L.length, Xt = W >>> 1; D < Xt; ) {
				var qe = 2 * (D + 1) - 1,
					Sn = L[qe],
					Ae = qe + 1,
					bt = L[Ae];
				if (0 > i(Sn, F))
					Ae < W && 0 > i(bt, Sn)
						? ((L[D] = bt), (L[Ae] = F), (D = Ae))
						: ((L[D] = Sn), (L[qe] = F), (D = qe));
				else if (Ae < W && 0 > i(bt, F)) (L[D] = bt), (L[Ae] = F), (D = Ae);
				else break e;
			}
		}
		return M;
	}
	function i(L, M) {
		var F = L.sortIndex - M.sortIndex;
		return F !== 0 ? F : L.id - M.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			a = s.now();
		e.unstable_now = function () {
			return s.now() - a;
		};
	}
	var l = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		g = !1,
		y = !1,
		v = !1,
		x = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function h(L) {
		for (var M = n(u); M !== null; ) {
			if (M.callback === null) r(u);
			else if (M.startTime <= L)
				r(u), (M.sortIndex = M.expirationTime), t(l, M);
			else break;
			M = n(u);
		}
	}
	function k(L) {
		if (((v = !1), h(L), !y))
			if (n(l) !== null) (y = !0), b(w);
			else {
				var M = n(u);
				M !== null && Oe(k, M.startTime - L);
			}
	}
	function w(L, M) {
		(y = !1), v && ((v = !1), m(C), (C = -1)), (g = !0);
		var F = d;
		try {
			for (
				h(M), f = n(l);
				f !== null && (!(f.expirationTime > M) || (L && !ie()));

			) {
				var D = f.callback;
				if (typeof D == "function") {
					(f.callback = null), (d = f.priorityLevel);
					var W = D(f.expirationTime <= M);
					(M = e.unstable_now()),
						typeof W == "function" ? (f.callback = W) : f === n(l) && r(l),
						h(M);
				} else r(l);
				f = n(l);
			}
			if (f !== null) var Xt = !0;
			else {
				var qe = n(u);
				qe !== null && Oe(k, qe.startTime - M), (Xt = !1);
			}
			return Xt;
		} finally {
			(f = null), (d = F), (g = !1);
		}
	}
	var T = !1,
		E = null,
		C = -1,
		N = 5,
		j = -1;
	function ie() {
		return !(e.unstable_now() - j < N);
	}
	function le() {
		if (E !== null) {
			var L = e.unstable_now();
			j = L;
			var M = !0;
			try {
				M = E(!0, L);
			} finally {
				M ? ye() : ((T = !1), (E = null));
			}
		} else T = !1;
	}
	var ye;
	if (typeof p == "function")
		ye = function () {
			p(le);
		};
	else if (typeof MessageChannel < "u") {
		var oe = new MessageChannel(),
			xt = oe.port2;
		(oe.port1.onmessage = le),
			(ye = function () {
				xt.postMessage(null);
			});
	} else
		ye = function () {
			x(le, 0);
		};
	function b(L) {
		(E = L), T || ((T = !0), ye());
	}
	function Oe(L, M) {
		C = x(function () {
			L(e.unstable_now());
		}, M);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (L) {
			L.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			y || g || ((y = !0), b(w));
		}),
		(e.unstable_forceFrameRate = function (L) {
			0 > L || 125 < L
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (N = 0 < L ? Math.floor(1e3 / L) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return d;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(l);
		}),
		(e.unstable_next = function (L) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var M = 3;
					break;
				default:
					M = d;
			}
			var F = d;
			d = M;
			try {
				return L();
			} finally {
				d = F;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (L, M) {
			switch (L) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					L = 3;
			}
			var F = d;
			d = L;
			try {
				return M();
			} finally {
				d = F;
			}
		}),
		(e.unstable_scheduleCallback = function (L, M, F) {
			var D = e.unstable_now();
			switch (
				(typeof F == "object" && F !== null
					? ((F = F.delay), (F = typeof F == "number" && 0 < F ? D + F : D))
					: (F = D),
				L)
			) {
				case 1:
					var W = -1;
					break;
				case 2:
					W = 250;
					break;
				case 5:
					W = 1073741823;
					break;
				case 4:
					W = 1e4;
					break;
				default:
					W = 5e3;
			}
			return (
				(W = F + W),
				(L = {
					id: c++,
					callback: M,
					priorityLevel: L,
					startTime: F,
					expirationTime: W,
					sortIndex: -1,
				}),
				F > D
					? ((L.sortIndex = F),
					  t(u, L),
					  n(l) === null &&
							L === n(u) &&
							(v ? (m(C), (C = -1)) : (v = !0), Oe(k, F - D)))
					: ((L.sortIndex = W), t(l, L), y || g || ((y = !0), b(w))),
				L
			);
		}),
		(e.unstable_shouldYield = ie),
		(e.unstable_wrapCallback = function (L) {
			var M = d;
			return function () {
				var F = d;
				d = M;
				try {
					return L.apply(this, arguments);
				} finally {
					d = F;
				}
			};
		});
})(Xf);
Yf.exports = Xf;
var Jm = Yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bf = S,
	De = Jm;
function P(e) {
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
var Zf = new Set(),
	Dr = {};
function gn(e, t) {
	Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
	for (Dr[e] = t, e = 0; e < t.length; e++) Zf.add(t[e]);
}
var ht = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	$s = Object.prototype.hasOwnProperty,
	qm =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	ku = {},
	xu = {};
function eg(e) {
	return $s.call(xu, e)
		? !0
		: $s.call(ku, e)
		? !1
		: qm.test(e)
		? (xu[e] = !0)
		: ((ku[e] = !0), !1);
}
function tg(e, t, n, r) {
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
function ng(e, t, n, r) {
	if (t === null || typeof t > "u" || tg(e, t, n, r)) return !0;
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
function Se(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		fe[e] = new Se(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nl = /[\-:]([a-z])/g;
function rl(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(nl, rl);
		fe[t] = new Se(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(nl, rl);
		fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(nl, rl);
	fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function il(e, t, n, r) {
	var i = fe.hasOwnProperty(t) ? fe[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(ng(t, n, i, r) && (n = null),
		r || i === null
			? eg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var kt = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	pi = Symbol.for("react.element"),
	Cn = Symbol.for("react.portal"),
	En = Symbol.for("react.fragment"),
	ol = Symbol.for("react.strict_mode"),
	Ws = Symbol.for("react.profiler"),
	Jf = Symbol.for("react.provider"),
	qf = Symbol.for("react.context"),
	sl = Symbol.for("react.forward_ref"),
	Hs = Symbol.for("react.suspense"),
	Ks = Symbol.for("react.suspense_list"),
	al = Symbol.for("react.memo"),
	Pt = Symbol.for("react.lazy"),
	ed = Symbol.for("react.offscreen"),
	wu = Symbol.iterator;
function or(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (wu && e[wu]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Y = Object.assign,
	ns;
function mr(e) {
	if (ns === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ns = (t && t[1]) || "";
		}
	return (
		`
` +
		ns +
		e
	);
}
var rs = !1;
function is(e, t) {
	if (!e || rs) return "";
	rs = !0;
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
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					a = o.length - 1;
				1 <= s && 0 <= a && i[s] !== o[a];

			)
				a--;
			for (; 1 <= s && 0 <= a; s--, a--)
				if (i[s] !== o[a]) {
					if (s !== 1 || a !== 1)
						do
							if ((s--, a--, 0 > a || i[s] !== o[a])) {
								var l =
									`
` + i[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										l.includes("<anonymous>") &&
										(l = l.replace("<anonymous>", e.displayName)),
									l
								);
							}
						while (1 <= s && 0 <= a);
					break;
				}
		}
	} finally {
		(rs = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function rg(e) {
	switch (e.tag) {
		case 5:
			return mr(e.type);
		case 16:
			return mr("Lazy");
		case 13:
			return mr("Suspense");
		case 19:
			return mr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = is(e.type, !1)), e;
		case 11:
			return (e = is(e.type.render, !1)), e;
		case 1:
			return (e = is(e.type, !0)), e;
		default:
			return "";
	}
}
function Gs(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case En:
			return "Fragment";
		case Cn:
			return "Portal";
		case Ws:
			return "Profiler";
		case ol:
			return "StrictMode";
		case Hs:
			return "Suspense";
		case Ks:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case qf:
				return (e.displayName || "Context") + ".Consumer";
			case Jf:
				return (e._context.displayName || "Context") + ".Provider";
			case sl:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case al:
				return (
					(t = e.displayName || null), t !== null ? t : Gs(e.type) || "Memo"
				);
			case Pt:
				(t = e._payload), (e = e._init);
				try {
					return Gs(e(t));
				} catch {}
		}
	return null;
}
function ig(e) {
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
			return Gs(t);
		case 8:
			return t === ol ? "StrictMode" : "Mode";
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
function Ut(e) {
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
function td(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function og(e) {
	var t = td(e) ? "checked" : "value",
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
				set: function (s) {
					(r = "" + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function hi(e) {
	e._valueTracker || (e._valueTracker = og(e));
}
function nd(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = td(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Qi(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Qs(e, t) {
	var n = t.checked;
	return Y({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Su(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Ut(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function rd(e, t) {
	(t = t.checked), t != null && il(e, "checked", t, !1);
}
function Ys(e, t) {
	rd(e, t);
	var n = Ut(t.value),
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
		? Xs(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Xs(e, t.type, Ut(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Pu(e, t, n) {
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
function Xs(e, t, n) {
	(t !== "number" || Qi(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function zn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function bs(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
	return Y({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Cu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(P(92));
			if (gr(n)) {
				if (1 < n.length) throw Error(P(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Ut(n) };
}
function id(e, t) {
	var n = Ut(t.value),
		r = Ut(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Eu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function od(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Zs(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? od(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var mi,
	sd = (function (e) {
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
				mi = mi || document.createElement("div"),
					mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = mi.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Nr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var xr = {
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
	sg = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
	sg.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
	});
});
function ad(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
		? ("" + t).trim()
		: t + "px";
}
function ld(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = ad(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var ag = Y(
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
function Js(e, t) {
	if (t) {
		if (ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(P(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(P(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(P(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(P(62));
	}
}
function qs(e, t) {
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
var ea = null;
function ll(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var ta = null,
	Un = null,
	$n = null;
function Tu(e) {
	if ((e = ii(e))) {
		if (typeof ta != "function") throw Error(P(280));
		var t = e.stateNode;
		t && ((t = No(t)), ta(e.stateNode, e.type, t));
	}
}
function ud(e) {
	Un ? ($n ? $n.push(e) : ($n = [e])) : (Un = e);
}
function cd() {
	if (Un) {
		var e = Un,
			t = $n;
		if ((($n = Un = null), Tu(e), t)) for (e = 0; e < t.length; e++) Tu(t[e]);
	}
}
function fd(e, t) {
	return e(t);
}
function dd() {}
var os = !1;
function pd(e, t, n) {
	if (os) return e(t, n);
	os = !0;
	try {
		return fd(e, t, n);
	} finally {
		(os = !1), (Un !== null || $n !== null) && (dd(), cd());
	}
}
function Fr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = No(n);
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
	if (n && typeof n != "function") throw Error(P(231, t, typeof n));
	return n;
}
var na = !1;
if (ht)
	try {
		var sr = {};
		Object.defineProperty(sr, "passive", {
			get: function () {
				na = !0;
			},
		}),
			window.addEventListener("test", sr, sr),
			window.removeEventListener("test", sr, sr);
	} catch {
		na = !1;
	}
function lg(e, t, n, r, i, o, s, a, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var wr = !1,
	Yi = null,
	Xi = !1,
	ra = null,
	ug = {
		onError: function (e) {
			(wr = !0), (Yi = e);
		},
	};
function cg(e, t, n, r, i, o, s, a, l) {
	(wr = !1), (Yi = null), lg.apply(ug, arguments);
}
function fg(e, t, n, r, i, o, s, a, l) {
	if ((cg.apply(this, arguments), wr)) {
		if (wr) {
			var u = Yi;
			(wr = !1), (Yi = null);
		} else throw Error(P(198));
		Xi || ((Xi = !0), (ra = u));
	}
}
function yn(e) {
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
function hd(e) {
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
function Lu(e) {
	if (yn(e) !== e) throw Error(P(188));
}
function dg(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = yn(e)), t === null)) throw Error(P(188));
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
				if (o === n) return Lu(i), e;
				if (o === r) return Lu(i), t;
				o = o.sibling;
			}
			throw Error(P(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, a = i.child; a; ) {
				if (a === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (a === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				a = a.sibling;
			}
			if (!s) {
				for (a = o.child; a; ) {
					if (a === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (a === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!s) throw Error(P(189));
			}
		}
		if (n.alternate !== r) throw Error(P(190));
	}
	if (n.tag !== 3) throw Error(P(188));
	return n.stateNode.current === n ? e : t;
}
function md(e) {
	return (e = dg(e)), e !== null ? gd(e) : null;
}
function gd(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = gd(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var yd = De.unstable_scheduleCallback,
	Ru = De.unstable_cancelCallback,
	pg = De.unstable_shouldYield,
	hg = De.unstable_requestPaint,
	Z = De.unstable_now,
	mg = De.unstable_getCurrentPriorityLevel,
	ul = De.unstable_ImmediatePriority,
	vd = De.unstable_UserBlockingPriority,
	bi = De.unstable_NormalPriority,
	gg = De.unstable_LowPriority,
	kd = De.unstable_IdlePriority,
	Vo = null,
	rt = null;
function yg(e) {
	if (rt && typeof rt.onCommitFiberRoot == "function")
		try {
			rt.onCommitFiberRoot(Vo, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var be = Math.clz32 ? Math.clz32 : xg,
	vg = Math.log,
	kg = Math.LN2;
function xg(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((vg(e) / kg) | 0)) | 0;
}
var gi = 64,
	yi = 4194304;
function yr(e) {
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
function Zi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var a = s & ~i;
		a !== 0 ? (r = yr(a)) : ((o &= s), o !== 0 && (r = yr(o)));
	} else (s = n & ~i), s !== 0 ? (r = yr(s)) : o !== 0 && (r = yr(o));
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
			(n = 31 - be(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function wg(e, t) {
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
function Sg(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - be(o),
			a = 1 << s,
			l = i[s];
		l === -1
			? (!(a & n) || a & r) && (i[s] = wg(a, t))
			: l <= t && (e.expiredLanes |= a),
			(o &= ~a);
	}
}
function ia(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function xd() {
	var e = gi;
	return (gi <<= 1), !(gi & 4194240) && (gi = 64), e;
}
function ss(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function ni(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - be(t)),
		(e[t] = n);
}
function Pg(e, t) {
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
		var i = 31 - be(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function cl(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - be(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var B = 0;
function wd(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sd,
	fl,
	Pd,
	Cd,
	Ed,
	oa = !1,
	vi = [],
	Mt = null,
	jt = null,
	Dt = null,
	_r = new Map(),
	Or = new Map(),
	Tt = [],
	Cg =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Au(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Mt = null;
			break;
		case "dragenter":
		case "dragleave":
			jt = null;
			break;
		case "mouseover":
		case "mouseout":
			Dt = null;
			break;
		case "pointerover":
		case "pointerout":
			_r.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Or.delete(t.pointerId);
	}
}
function ar(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = ii(t)), t !== null && fl(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function Eg(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (Mt = ar(Mt, e, t, n, r, i)), !0;
		case "dragenter":
			return (jt = ar(jt, e, t, n, r, i)), !0;
		case "mouseover":
			return (Dt = ar(Dt, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return _r.set(o, ar(_r.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(o = i.pointerId), Or.set(o, ar(Or.get(o) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Td(e) {
	var t = rn(e.target);
	if (t !== null) {
		var n = yn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = hd(n)), t !== null)) {
					(e.blockedOn = t),
						Ed(e.priority, function () {
							Pd(n);
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
function Fi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ea = r), n.target.dispatchEvent(r), (ea = null);
		} else return (t = ii(n)), t !== null && fl(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Vu(e, t, n) {
	Fi(e) && n.delete(t);
}
function Tg() {
	(oa = !1),
		Mt !== null && Fi(Mt) && (Mt = null),
		jt !== null && Fi(jt) && (jt = null),
		Dt !== null && Fi(Dt) && (Dt = null),
		_r.forEach(Vu),
		Or.forEach(Vu);
}
function lr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		oa ||
			((oa = !0),
			De.unstable_scheduleCallback(De.unstable_NormalPriority, Tg)));
}
function Br(e) {
	function t(i) {
		return lr(i, e);
	}
	if (0 < vi.length) {
		lr(vi[0], e);
		for (var n = 1; n < vi.length; n++) {
			var r = vi[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Mt !== null && lr(Mt, e),
			jt !== null && lr(jt, e),
			Dt !== null && lr(Dt, e),
			_r.forEach(t),
			Or.forEach(t),
			n = 0;
		n < Tt.length;
		n++
	)
		(r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
		Td(n), n.blockedOn === null && Tt.shift();
}
var Wn = kt.ReactCurrentBatchConfig,
	Ji = !0;
function Lg(e, t, n, r) {
	var i = B,
		o = Wn.transition;
	Wn.transition = null;
	try {
		(B = 1), dl(e, t, n, r);
	} finally {
		(B = i), (Wn.transition = o);
	}
}
function Rg(e, t, n, r) {
	var i = B,
		o = Wn.transition;
	Wn.transition = null;
	try {
		(B = 4), dl(e, t, n, r);
	} finally {
		(B = i), (Wn.transition = o);
	}
}
function dl(e, t, n, r) {
	if (Ji) {
		var i = sa(e, t, n, r);
		if (i === null) gs(e, t, r, qi, n), Au(e, r);
		else if (Eg(i, e, t, n, r)) r.stopPropagation();
		else if ((Au(e, r), t & 4 && -1 < Cg.indexOf(e))) {
			for (; i !== null; ) {
				var o = ii(i);
				if (
					(o !== null && Sd(o),
					(o = sa(e, t, n, r)),
					o === null && gs(e, t, r, qi, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else gs(e, t, r, null, n);
	}
}
var qi = null;
function sa(e, t, n, r) {
	if (((qi = null), (e = ll(r)), (e = rn(e)), e !== null))
		if (((t = yn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = hd(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (qi = e), null;
}
function Ld(e) {
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
			switch (mg()) {
				case ul:
					return 1;
				case vd:
					return 4;
				case bi:
				case gg:
					return 16;
				case kd:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Rt = null,
	pl = null,
	_i = null;
function Rd() {
	if (_i) return _i;
	var e,
		t = pl,
		n = t.length,
		r,
		i = "value" in Rt ? Rt.value : Rt.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (_i = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oi(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function ki() {
	return !0;
}
function Mu() {
	return !1;
}
function _e(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? ki
				: Mu),
			(this.isPropagationStopped = Mu),
			this
		);
	}
	return (
		Y(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = ki));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = ki));
			},
			persist: function () {},
			isPersistent: ki,
		}),
		t
	);
}
var nr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	hl = _e(nr),
	ri = Y({}, nr, { view: 0, detail: 0 }),
	Ag = _e(ri),
	as,
	ls,
	ur,
	Mo = Y({}, ri, {
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
		getModifierState: ml,
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
				: (e !== ur &&
						(ur && e.type === "mousemove"
							? ((as = e.screenX - ur.screenX), (ls = e.screenY - ur.screenY))
							: (ls = as = 0),
						(ur = e)),
				  as);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : ls;
		},
	}),
	ju = _e(Mo),
	Vg = Y({}, Mo, { dataTransfer: 0 }),
	Mg = _e(Vg),
	jg = Y({}, ri, { relatedTarget: 0 }),
	us = _e(jg),
	Dg = Y({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Ng = _e(Dg),
	Fg = Y({}, nr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	_g = _e(Fg),
	Og = Y({}, nr, { data: 0 }),
	Du = _e(Og),
	Bg = {
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
	Ig = {
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
	zg = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Ug(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = zg[e]) ? !!t[e] : !1;
}
function ml() {
	return Ug;
}
var $g = Y({}, ri, {
		key: function (e) {
			if (e.key) {
				var t = Bg[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Ig[e.keyCode] || "Unidentified"
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
		getModifierState: ml,
		charCode: function (e) {
			return e.type === "keypress" ? Oi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Oi(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	Wg = _e($g),
	Hg = Y({}, Mo, {
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
	Nu = _e(Hg),
	Kg = Y({}, ri, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ml,
	}),
	Gg = _e(Kg),
	Qg = Y({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Yg = _e(Qg),
	Xg = Y({}, Mo, {
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
	bg = _e(Xg),
	Zg = [9, 13, 27, 32],
	gl = ht && "CompositionEvent" in window,
	Sr = null;
ht && "documentMode" in document && (Sr = document.documentMode);
var Jg = ht && "TextEvent" in window && !Sr,
	Ad = ht && (!gl || (Sr && 8 < Sr && 11 >= Sr)),
	Fu = " ",
	_u = !1;
function Vd(e, t) {
	switch (e) {
		case "keyup":
			return Zg.indexOf(t.keyCode) !== -1;
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
function Md(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function qg(e, t) {
	switch (e) {
		case "compositionend":
			return Md(t);
		case "keypress":
			return t.which !== 32 ? null : ((_u = !0), Fu);
		case "textInput":
			return (e = t.data), e === Fu && _u ? null : e;
		default:
			return null;
	}
}
function ey(e, t) {
	if (Tn)
		return e === "compositionend" || (!gl && Vd(e, t))
			? ((e = Rd()), (_i = pl = Rt = null), (Tn = !1), e)
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
			return Ad && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var ty = {
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
function Ou(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!ty[e.type] : t === "textarea";
}
function jd(e, t, n, r) {
	ud(r),
		(t = eo(t, "onChange")),
		0 < t.length &&
			((n = new hl("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Pr = null,
	Ir = null;
function ny(e) {
	Wd(e, 0);
}
function jo(e) {
	var t = An(e);
	if (nd(t)) return e;
}
function ry(e, t) {
	if (e === "change") return t;
}
var Dd = !1;
if (ht) {
	var cs;
	if (ht) {
		var fs = "oninput" in document;
		if (!fs) {
			var Bu = document.createElement("div");
			Bu.setAttribute("oninput", "return;"),
				(fs = typeof Bu.oninput == "function");
		}
		cs = fs;
	} else cs = !1;
	Dd = cs && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
	Pr && (Pr.detachEvent("onpropertychange", Nd), (Ir = Pr = null));
}
function Nd(e) {
	if (e.propertyName === "value" && jo(Ir)) {
		var t = [];
		jd(t, Ir, e, ll(e)), pd(ny, t);
	}
}
function iy(e, t, n) {
	e === "focusin"
		? (Iu(), (Pr = t), (Ir = n), Pr.attachEvent("onpropertychange", Nd))
		: e === "focusout" && Iu();
}
function oy(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return jo(Ir);
}
function sy(e, t) {
	if (e === "click") return jo(t);
}
function ay(e, t) {
	if (e === "input" || e === "change") return jo(t);
}
function ly(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : ly;
function zr(e, t) {
	if (Je(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!$s.call(t, i) || !Je(e[i], t[i])) return !1;
	}
	return !0;
}
function zu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Uu(e, t) {
	var n = zu(e);
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
		n = zu(n);
	}
}
function Fd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Fd(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function _d() {
	for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Qi(e.document);
	}
	return t;
}
function yl(e) {
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
function uy(e) {
	var t = _d(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Fd(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && yl(n)) {
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
					(i = Uu(n, o));
				var s = Uu(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var cy = ht && "documentMode" in document && 11 >= document.documentMode,
	Ln = null,
	aa = null,
	Cr = null,
	la = !1;
function $u(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	la ||
		Ln == null ||
		Ln !== Qi(r) ||
		((r = Ln),
		"selectionStart" in r && yl(r)
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
		(Cr && zr(Cr, r)) ||
			((Cr = r),
			(r = eo(aa, "onSelect")),
			0 < r.length &&
				((t = new hl("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Ln))));
}
function xi(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Rn = {
		animationend: xi("Animation", "AnimationEnd"),
		animationiteration: xi("Animation", "AnimationIteration"),
		animationstart: xi("Animation", "AnimationStart"),
		transitionend: xi("Transition", "TransitionEnd"),
	},
	ds = {},
	Od = {};
ht &&
	((Od = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Rn.animationend.animation,
		delete Rn.animationiteration.animation,
		delete Rn.animationstart.animation),
	"TransitionEvent" in window || delete Rn.transitionend.transition);
function Do(e) {
	if (ds[e]) return ds[e];
	if (!Rn[e]) return e;
	var t = Rn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Od) return (ds[e] = t[n]);
	return e;
}
var Bd = Do("animationend"),
	Id = Do("animationiteration"),
	zd = Do("animationstart"),
	Ud = Do("transitionend"),
	$d = new Map(),
	Wu =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Kt(e, t) {
	$d.set(e, t), gn(t, [e]);
}
for (var ps = 0; ps < Wu.length; ps++) {
	var hs = Wu[ps],
		fy = hs.toLowerCase(),
		dy = hs[0].toUpperCase() + hs.slice(1);
	Kt(fy, "on" + dy);
}
Kt(Bd, "onAnimationEnd");
Kt(Id, "onAnimationIteration");
Kt(zd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Ud, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(" ")
);
gn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
gn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
gn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	py = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function Hu(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), fg(r, t, void 0, e), (e.currentTarget = null);
}
function Wd(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var a = r[s],
						l = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
					Hu(i, a, u), (o = l);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((a = r[s]),
						(l = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						l !== o && i.isPropagationStopped())
					)
						break e;
					Hu(i, a, u), (o = l);
				}
		}
	}
	if (Xi) throw ((e = ra), (Xi = !1), (ra = null), e);
}
function z(e, t) {
	var n = t[pa];
	n === void 0 && (n = t[pa] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Hd(t, e, 2, !1), n.add(r));
}
function ms(e, t, n) {
	var r = 0;
	t && (r |= 4), Hd(n, e, r, t);
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
	if (!e[wi]) {
		(e[wi] = !0),
			Zf.forEach(function (n) {
				n !== "selectionchange" && (py.has(n) || ms(n, !1, e), ms(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[wi] || ((t[wi] = !0), ms("selectionchange", !1, t));
	}
}
function Hd(e, t, n, r) {
	switch (Ld(t)) {
		case 1:
			var i = Lg;
			break;
		case 4:
			i = Rg;
			break;
		default:
			i = dl;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!na ||
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
function gs(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var l = s.tag;
						if (
							(l === 3 || l === 4) &&
							((l = s.stateNode.containerInfo),
							l === i || (l.nodeType === 8 && l.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; a !== null; ) {
					if (((s = rn(a)), s === null)) return;
					if (((l = s.tag), l === 5 || l === 6)) {
						r = o = s;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	pd(function () {
		var u = o,
			c = ll(n),
			f = [];
		e: {
			var d = $d.get(e);
			if (d !== void 0) {
				var g = hl,
					y = e;
				switch (e) {
					case "keypress":
						if (Oi(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = Wg;
						break;
					case "focusin":
						(y = "focus"), (g = us);
						break;
					case "focusout":
						(y = "blur"), (g = us);
						break;
					case "beforeblur":
					case "afterblur":
						g = us;
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
						g = ju;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = Mg;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = Gg;
						break;
					case Bd:
					case Id:
					case zd:
						g = Ng;
						break;
					case Ud:
						g = Yg;
						break;
					case "scroll":
						g = Ag;
						break;
					case "wheel":
						g = bg;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = _g;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = Nu;
				}
				var v = (t & 4) !== 0,
					x = !v && e === "scroll",
					m = v ? (d !== null ? d + "Capture" : null) : d;
				v = [];
				for (var p = u, h; p !== null; ) {
					h = p;
					var k = h.stateNode;
					if (
						(h.tag === 5 &&
							k !== null &&
							((h = k),
							m !== null && ((k = Fr(p, m)), k != null && v.push($r(p, k, h)))),
						x)
					)
						break;
					p = p.return;
				}
				0 < v.length &&
					((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((d = e === "mouseover" || e === "pointerover"),
					(g = e === "mouseout" || e === "pointerout"),
					d &&
						n !== ea &&
						(y = n.relatedTarget || n.fromElement) &&
						(rn(y) || y[mt]))
				)
					break e;
				if (
					(g || d) &&
					((d =
						c.window === c
							? c
							: (d = c.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					g
						? ((y = n.relatedTarget || n.toElement),
						  (g = u),
						  (y = y ? rn(y) : null),
						  y !== null &&
								((x = yn(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((g = null), (y = u)),
					g !== y)
				) {
					if (
						((v = ju),
						(k = "onMouseLeave"),
						(m = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((v = Nu),
							(k = "onPointerLeave"),
							(m = "onPointerEnter"),
							(p = "pointer")),
						(x = g == null ? d : An(g)),
						(h = y == null ? d : An(y)),
						(d = new v(k, p + "leave", g, n, c)),
						(d.target = x),
						(d.relatedTarget = h),
						(k = null),
						rn(c) === u &&
							((v = new v(m, p + "enter", y, n, c)),
							(v.target = h),
							(v.relatedTarget = x),
							(k = v)),
						(x = k),
						g && y)
					)
						t: {
							for (v = g, m = y, p = 0, h = v; h; h = Pn(h)) p++;
							for (h = 0, k = m; k; k = Pn(k)) h++;
							for (; 0 < p - h; ) (v = Pn(v)), p--;
							for (; 0 < h - p; ) (m = Pn(m)), h--;
							for (; p--; ) {
								if (v === m || (m !== null && v === m.alternate)) break t;
								(v = Pn(v)), (m = Pn(m));
							}
							v = null;
						}
					else v = null;
					g !== null && Ku(f, d, g, v, !1),
						y !== null && x !== null && Ku(f, x, y, v, !0);
				}
			}
			e: {
				if (
					((d = u ? An(u) : window),
					(g = d.nodeName && d.nodeName.toLowerCase()),
					g === "select" || (g === "input" && d.type === "file"))
				)
					var w = ry;
				else if (Ou(d))
					if (Dd) w = ay;
					else {
						w = oy;
						var T = iy;
					}
				else
					(g = d.nodeName) &&
						g.toLowerCase() === "input" &&
						(d.type === "checkbox" || d.type === "radio") &&
						(w = sy);
				if (w && (w = w(e, u))) {
					jd(f, w, n, c);
					break e;
				}
				T && T(e, d, u),
					e === "focusout" &&
						(T = d._wrapperState) &&
						T.controlled &&
						d.type === "number" &&
						Xs(d, "number", d.value);
			}
			switch (((T = u ? An(u) : window), e)) {
				case "focusin":
					(Ou(T) || T.contentEditable === "true") &&
						((Ln = T), (aa = u), (Cr = null));
					break;
				case "focusout":
					Cr = aa = Ln = null;
					break;
				case "mousedown":
					la = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(la = !1), $u(f, n, c);
					break;
				case "selectionchange":
					if (cy) break;
				case "keydown":
				case "keyup":
					$u(f, n, c);
			}
			var E;
			if (gl)
				e: {
					switch (e) {
						case "compositionstart":
							var C = "onCompositionStart";
							break e;
						case "compositionend":
							C = "onCompositionEnd";
							break e;
						case "compositionupdate":
							C = "onCompositionUpdate";
							break e;
					}
					C = void 0;
				}
			else
				Tn
					? Vd(e, n) && (C = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
			C &&
				(Ad &&
					n.locale !== "ko" &&
					(Tn || C !== "onCompositionStart"
						? C === "onCompositionEnd" && Tn && (E = Rd())
						: ((Rt = c),
						  (pl = "value" in Rt ? Rt.value : Rt.textContent),
						  (Tn = !0))),
				(T = eo(u, C)),
				0 < T.length &&
					((C = new Du(C, e, null, n, c)),
					f.push({ event: C, listeners: T }),
					E ? (C.data = E) : ((E = Md(n)), E !== null && (C.data = E)))),
				(E = Jg ? qg(e, n) : ey(e, n)) &&
					((u = eo(u, "onBeforeInput")),
					0 < u.length &&
						((c = new Du("onBeforeInput", "beforeinput", null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = E)));
		}
		Wd(f, t);
	});
}
function $r(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function eo(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = Fr(e, n)),
			o != null && r.unshift($r(e, o, i)),
			(o = Fr(e, t)),
			o != null && r.push($r(e, o, i))),
			(e = e.return);
	}
	return r;
}
function Pn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Ku(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((l = Fr(n, o)), l != null && s.unshift($r(n, l, a)))
				: i || ((l = Fr(n, o)), l != null && s.push($r(n, l, a)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var hy = /\r\n?/g,
	my = /\u0000|\uFFFD/g;
function Gu(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			hy,
			`
`
		)
		.replace(my, "");
}
function Si(e, t, n) {
	if (((t = Gu(t)), Gu(e) !== t && n)) throw Error(P(425));
}
function to() {}
var ua = null,
	ca = null;
function fa(e, t) {
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
var da = typeof setTimeout == "function" ? setTimeout : void 0,
	gy = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Qu = typeof Promise == "function" ? Promise : void 0,
	yy =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof Qu < "u"
			? function (e) {
					return Qu.resolve(null).then(e).catch(vy);
			  }
			: da;
function vy(e) {
	setTimeout(function () {
		throw e;
	});
}
function ys(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Br(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	Br(t);
}
function Nt(e) {
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
function Yu(e) {
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
var rr = Math.random().toString(36).slice(2),
	nt = "__reactFiber$" + rr,
	Wr = "__reactProps$" + rr,
	mt = "__reactContainer$" + rr,
	pa = "__reactEvents$" + rr,
	ky = "__reactListeners$" + rr,
	xy = "__reactHandles$" + rr;
function rn(e) {
	var t = e[nt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[mt] || n[nt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Yu(e); e !== null; ) {
					if ((n = e[nt])) return n;
					e = Yu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ii(e) {
	return (
		(e = e[nt] || e[mt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function An(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(P(33));
}
function No(e) {
	return e[Wr] || null;
}
var ha = [],
	Vn = -1;
function Gt(e) {
	return { current: e };
}
function U(e) {
	0 > Vn || ((e.current = ha[Vn]), (ha[Vn] = null), Vn--);
}
function I(e, t) {
	Vn++, (ha[Vn] = e.current), (e.current = t);
}
var $t = {},
	ge = Gt($t),
	Ee = Gt(!1),
	fn = $t;
function Qn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return $t;
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
function Te(e) {
	return (e = e.childContextTypes), e != null;
}
function no() {
	U(Ee), U(ge);
}
function Xu(e, t, n) {
	if (ge.current !== $t) throw Error(P(168));
	I(ge, t), I(Ee, n);
}
function Kd(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(P(108, ig(e) || "Unknown", i));
	return Y({}, n, r);
}
function ro(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
		(fn = ge.current),
		I(ge, e),
		I(Ee, Ee.current),
		!0
	);
}
function bu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(P(169));
	n
		? ((e = Kd(e, t, fn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  U(Ee),
		  U(ge),
		  I(ge, e))
		: U(Ee),
		I(Ee, n);
}
var at = null,
	Fo = !1,
	vs = !1;
function Gd(e) {
	at === null ? (at = [e]) : at.push(e);
}
function wy(e) {
	(Fo = !0), Gd(e);
}
function Qt() {
	if (!vs && at !== null) {
		vs = !0;
		var e = 0,
			t = B;
		try {
			var n = at;
			for (B = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(at = null), (Fo = !1);
		} catch (i) {
			throw (at !== null && (at = at.slice(e + 1)), yd(ul, Qt), i);
		} finally {
			(B = t), (vs = !1);
		}
	}
	return null;
}
var Mn = [],
	jn = 0,
	io = null,
	oo = 0,
	ze = [],
	Ue = 0,
	dn = null,
	lt = 1,
	ut = "";
function qt(e, t) {
	(Mn[jn++] = oo), (Mn[jn++] = io), (io = e), (oo = t);
}
function Qd(e, t, n) {
	(ze[Ue++] = lt), (ze[Ue++] = ut), (ze[Ue++] = dn), (dn = e);
	var r = lt;
	e = ut;
	var i = 32 - be(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - be(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(lt = (1 << (32 - be(t) + i)) | (n << i) | r),
			(ut = o + e);
	} else (lt = (1 << o) | (n << i) | r), (ut = e);
}
function vl(e) {
	e.return !== null && (qt(e, 1), Qd(e, 1, 0));
}
function kl(e) {
	for (; e === io; )
		(io = Mn[--jn]), (Mn[jn] = null), (oo = Mn[--jn]), (Mn[jn] = null);
	for (; e === dn; )
		(dn = ze[--Ue]),
			(ze[Ue] = null),
			(ut = ze[--Ue]),
			(ze[Ue] = null),
			(lt = ze[--Ue]),
			(ze[Ue] = null);
}
var je = null,
	Me = null,
	H = !1,
	Xe = null;
function Yd(e, t) {
	var n = $e(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (je = e), (Me = Nt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (je = e), (Me = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = dn !== null ? { id: lt, overflow: ut } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = $e(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (je = e),
					  (Me = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function ma(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ga(e) {
	if (H) {
		var t = Me;
		if (t) {
			var n = t;
			if (!Zu(e, t)) {
				if (ma(e)) throw Error(P(418));
				t = Nt(n.nextSibling);
				var r = je;
				t && Zu(e, t)
					? Yd(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (H = !1), (je = e));
			}
		} else {
			if (ma(e)) throw Error(P(418));
			(e.flags = (e.flags & -4097) | 2), (H = !1), (je = e);
		}
	}
}
function Ju(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	je = e;
}
function Pi(e) {
	if (e !== je) return !1;
	if (!H) return Ju(e), (H = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !fa(e.type, e.memoizedProps))),
		t && (t = Me))
	) {
		if (ma(e)) throw (Xd(), Error(P(418)));
		for (; t; ) Yd(e, t), (t = Nt(t.nextSibling));
	}
	if ((Ju(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(P(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Me = Nt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Me = null;
		}
	} else Me = je ? Nt(e.stateNode.nextSibling) : null;
	return !0;
}
function Xd() {
	for (var e = Me; e; ) e = Nt(e.nextSibling);
}
function Yn() {
	(Me = je = null), (H = !1);
}
function xl(e) {
	Xe === null ? (Xe = [e]) : Xe.push(e);
}
var Sy = kt.ReactCurrentBatchConfig;
function Qe(e, t) {
	if (e && e.defaultProps) {
		(t = Y({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var so = Gt(null),
	ao = null,
	Dn = null,
	wl = null;
function Sl() {
	wl = Dn = ao = null;
}
function Pl(e) {
	var t = so.current;
	U(so), (e._currentValue = t);
}
function ya(e, t, n) {
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
function Hn(e, t) {
	(ao = e),
		(wl = Dn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function He(e) {
	var t = e._currentValue;
	if (wl !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
			if (ao === null) throw Error(P(308));
			(Dn = e), (ao.dependencies = { lanes: 0, firstContext: e });
		} else Dn = Dn.next = e;
	return t;
}
var on = null;
function Cl(e) {
	on === null ? (on = [e]) : on.push(e);
}
function bd(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Cl(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		gt(e, r)
	);
}
function gt(e, t) {
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
var Ct = !1;
function El(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Zd(e, t) {
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
function ft(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Ft(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), O & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			gt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Cl(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		gt(e, n)
	);
}
function Bi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), cl(e, n);
	}
}
function qu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
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
function lo(e, t, n, r) {
	var i = e.updateQueue;
	Ct = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var l = a,
			u = l.next;
		(l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(a = c.lastBaseUpdate),
			a !== s &&
				(a === null ? (c.firstBaseUpdate = u) : (a.next = u),
				(c.lastBaseUpdate = l)));
	}
	if (o !== null) {
		var f = i.baseState;
		(s = 0), (c = u = l = null), (a = o);
		do {
			var d = a.lane,
				g = a.eventTime;
			if ((r & d) === d) {
				c !== null &&
					(c = c.next =
						{
							eventTime: g,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var y = e,
						v = a;
					switch (((d = t), (g = n), v.tag)) {
						case 1:
							if (((y = v.payload), typeof y == "function")) {
								f = y.call(g, f, d);
								break e;
							}
							f = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = v.payload),
								(d = typeof y == "function" ? y.call(g, f, d) : y),
								d == null)
							)
								break e;
							f = Y({}, f, d);
							break e;
						case 2:
							Ct = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(d = i.effects),
					d === null ? (i.effects = [a]) : d.push(a));
			} else
				(g = {
					eventTime: g,
					lane: d,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
					(s |= d);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(d = a),
					(a = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (l = f),
			(i.baseState = l),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(hn |= s), (e.lanes = s), (e.memoizedState = f);
	}
}
function ec(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(P(191, i));
				i.call(r);
			}
		}
}
var Jd = new bf.Component().refs;
function va(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Y({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? yn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = xe(),
			i = Ot(e),
			o = ft(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Ft(e, o, i)),
			t !== null && (Ze(t, e, i, r), Bi(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = xe(),
			i = Ot(e),
			o = ft(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Ft(e, o, i)),
			t !== null && (Ze(t, e, i, r), Bi(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = xe(),
			r = Ot(e),
			i = ft(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = Ft(e, i, r)),
			t !== null && (Ze(t, e, r, n), Bi(t, e, r));
	},
};
function tc(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !zr(n, r) || !zr(i, o)
			: !0
	);
}
function qd(e, t, n) {
	var r = !1,
		i = $t,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = He(o))
			: ((i = Te(t) ? fn : ge.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? Qn(e, i) : $t)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = _o),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function nc(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function ka(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = Jd), El(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = He(o))
		: ((o = Te(t) ? fn : ge.current), (i.context = Qn(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (va(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && _o.enqueueReplaceState(i, i.state, null),
			lo(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(P(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(P(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var a = i.refs;
						a === Jd && (a = i.refs = {}),
							s === null ? delete a[o] : (a[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(P(284));
		if (!n._owner) throw Error(P(290, e));
	}
	return e;
}
function Ci(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			P(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function rc(e) {
	var t = e._init;
	return t(e._payload);
}
function ep(e) {
	function t(m, p) {
		if (e) {
			var h = m.deletions;
			h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
		}
	}
	function n(m, p) {
		if (!e) return null;
		for (; p !== null; ) t(m, p), (p = p.sibling);
		return null;
	}
	function r(m, p) {
		for (m = new Map(); p !== null; )
			p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
		return m;
	}
	function i(m, p) {
		return (m = Bt(m, p)), (m.index = 0), (m.sibling = null), m;
	}
	function o(m, p, h) {
		return (
			(m.index = h),
			e
				? ((h = m.alternate),
				  h !== null
						? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
						: ((m.flags |= 2), p))
				: ((m.flags |= 1048576), p)
		);
	}
	function s(m) {
		return e && m.alternate === null && (m.flags |= 2), m;
	}
	function a(m, p, h, k) {
		return p === null || p.tag !== 6
			? ((p = Es(h, m.mode, k)), (p.return = m), p)
			: ((p = i(p, h)), (p.return = m), p);
	}
	function l(m, p, h, k) {
		var w = h.type;
		return w === En
			? c(m, p, h.props.children, k, h.key)
			: p !== null &&
			  (p.elementType === w ||
					(typeof w == "object" &&
						w !== null &&
						w.$$typeof === Pt &&
						rc(w) === p.type))
			? ((k = i(p, h.props)), (k.ref = cr(m, p, h)), (k.return = m), k)
			: ((k = Hi(h.type, h.key, h.props, null, m.mode, k)),
			  (k.ref = cr(m, p, h)),
			  (k.return = m),
			  k);
	}
	function u(m, p, h, k) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== h.containerInfo ||
			p.stateNode.implementation !== h.implementation
			? ((p = Ts(h, m.mode, k)), (p.return = m), p)
			: ((p = i(p, h.children || [])), (p.return = m), p);
	}
	function c(m, p, h, k, w) {
		return p === null || p.tag !== 7
			? ((p = un(h, m.mode, k, w)), (p.return = m), p)
			: ((p = i(p, h)), (p.return = m), p);
	}
	function f(m, p, h) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = Es("" + p, m.mode, h)), (p.return = m), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case pi:
					return (
						(h = Hi(p.type, p.key, p.props, null, m.mode, h)),
						(h.ref = cr(m, null, p)),
						(h.return = m),
						h
					);
				case Cn:
					return (p = Ts(p, m.mode, h)), (p.return = m), p;
				case Pt:
					var k = p._init;
					return f(m, k(p._payload), h);
			}
			if (gr(p) || or(p))
				return (p = un(p, m.mode, h, null)), (p.return = m), p;
			Ci(m, p);
		}
		return null;
	}
	function d(m, p, h, k) {
		var w = p !== null ? p.key : null;
		if ((typeof h == "string" && h !== "") || typeof h == "number")
			return w !== null ? null : a(m, p, "" + h, k);
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case pi:
					return h.key === w ? l(m, p, h, k) : null;
				case Cn:
					return h.key === w ? u(m, p, h, k) : null;
				case Pt:
					return (w = h._init), d(m, p, w(h._payload), k);
			}
			if (gr(h) || or(h)) return w !== null ? null : c(m, p, h, k, null);
			Ci(m, h);
		}
		return null;
	}
	function g(m, p, h, k, w) {
		if ((typeof k == "string" && k !== "") || typeof k == "number")
			return (m = m.get(h) || null), a(p, m, "" + k, w);
		if (typeof k == "object" && k !== null) {
			switch (k.$$typeof) {
				case pi:
					return (m = m.get(k.key === null ? h : k.key) || null), l(p, m, k, w);
				case Cn:
					return (m = m.get(k.key === null ? h : k.key) || null), u(p, m, k, w);
				case Pt:
					var T = k._init;
					return g(m, p, h, T(k._payload), w);
			}
			if (gr(k) || or(k)) return (m = m.get(h) || null), c(p, m, k, w, null);
			Ci(p, k);
		}
		return null;
	}
	function y(m, p, h, k) {
		for (
			var w = null, T = null, E = p, C = (p = 0), N = null;
			E !== null && C < h.length;
			C++
		) {
			E.index > C ? ((N = E), (E = null)) : (N = E.sibling);
			var j = d(m, E, h[C], k);
			if (j === null) {
				E === null && (E = N);
				break;
			}
			e && E && j.alternate === null && t(m, E),
				(p = o(j, p, C)),
				T === null ? (w = j) : (T.sibling = j),
				(T = j),
				(E = N);
		}
		if (C === h.length) return n(m, E), H && qt(m, C), w;
		if (E === null) {
			for (; C < h.length; C++)
				(E = f(m, h[C], k)),
					E !== null &&
						((p = o(E, p, C)), T === null ? (w = E) : (T.sibling = E), (T = E));
			return H && qt(m, C), w;
		}
		for (E = r(m, E); C < h.length; C++)
			(N = g(E, m, C, h[C], k)),
				N !== null &&
					(e && N.alternate !== null && E.delete(N.key === null ? C : N.key),
					(p = o(N, p, C)),
					T === null ? (w = N) : (T.sibling = N),
					(T = N));
		return (
			e &&
				E.forEach(function (ie) {
					return t(m, ie);
				}),
			H && qt(m, C),
			w
		);
	}
	function v(m, p, h, k) {
		var w = or(h);
		if (typeof w != "function") throw Error(P(150));
		if (((h = w.call(h)), h == null)) throw Error(P(151));
		for (
			var T = (w = null), E = p, C = (p = 0), N = null, j = h.next();
			E !== null && !j.done;
			C++, j = h.next()
		) {
			E.index > C ? ((N = E), (E = null)) : (N = E.sibling);
			var ie = d(m, E, j.value, k);
			if (ie === null) {
				E === null && (E = N);
				break;
			}
			e && E && ie.alternate === null && t(m, E),
				(p = o(ie, p, C)),
				T === null ? (w = ie) : (T.sibling = ie),
				(T = ie),
				(E = N);
		}
		if (j.done) return n(m, E), H && qt(m, C), w;
		if (E === null) {
			for (; !j.done; C++, j = h.next())
				(j = f(m, j.value, k)),
					j !== null &&
						((p = o(j, p, C)), T === null ? (w = j) : (T.sibling = j), (T = j));
			return H && qt(m, C), w;
		}
		for (E = r(m, E); !j.done; C++, j = h.next())
			(j = g(E, m, C, j.value, k)),
				j !== null &&
					(e && j.alternate !== null && E.delete(j.key === null ? C : j.key),
					(p = o(j, p, C)),
					T === null ? (w = j) : (T.sibling = j),
					(T = j));
		return (
			e &&
				E.forEach(function (le) {
					return t(m, le);
				}),
			H && qt(m, C),
			w
		);
	}
	function x(m, p, h, k) {
		if (
			(typeof h == "object" &&
				h !== null &&
				h.type === En &&
				h.key === null &&
				(h = h.props.children),
			typeof h == "object" && h !== null)
		) {
			switch (h.$$typeof) {
				case pi:
					e: {
						for (var w = h.key, T = p; T !== null; ) {
							if (T.key === w) {
								if (((w = h.type), w === En)) {
									if (T.tag === 7) {
										n(m, T.sibling),
											(p = i(T, h.props.children)),
											(p.return = m),
											(m = p);
										break e;
									}
								} else if (
									T.elementType === w ||
									(typeof w == "object" &&
										w !== null &&
										w.$$typeof === Pt &&
										rc(w) === T.type)
								) {
									n(m, T.sibling),
										(p = i(T, h.props)),
										(p.ref = cr(m, T, h)),
										(p.return = m),
										(m = p);
									break e;
								}
								n(m, T);
								break;
							} else t(m, T);
							T = T.sibling;
						}
						h.type === En
							? ((p = un(h.props.children, m.mode, k, h.key)),
							  (p.return = m),
							  (m = p))
							: ((k = Hi(h.type, h.key, h.props, null, m.mode, k)),
							  (k.ref = cr(m, p, h)),
							  (k.return = m),
							  (m = k));
					}
					return s(m);
				case Cn:
					e: {
						for (T = h.key; p !== null; ) {
							if (p.key === T)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === h.containerInfo &&
									p.stateNode.implementation === h.implementation
								) {
									n(m, p.sibling),
										(p = i(p, h.children || [])),
										(p.return = m),
										(m = p);
									break e;
								} else {
									n(m, p);
									break;
								}
							else t(m, p);
							p = p.sibling;
						}
						(p = Ts(h, m.mode, k)), (p.return = m), (m = p);
					}
					return s(m);
				case Pt:
					return (T = h._init), x(m, p, T(h._payload), k);
			}
			if (gr(h)) return y(m, p, h, k);
			if (or(h)) return v(m, p, h, k);
			Ci(m, h);
		}
		return (typeof h == "string" && h !== "") || typeof h == "number"
			? ((h = "" + h),
			  p !== null && p.tag === 6
					? (n(m, p.sibling), (p = i(p, h)), (p.return = m), (m = p))
					: (n(m, p), (p = Es(h, m.mode, k)), (p.return = m), (m = p)),
			  s(m))
			: n(m, p);
	}
	return x;
}
var Xn = ep(!0),
	tp = ep(!1),
	oi = {},
	it = Gt(oi),
	Hr = Gt(oi),
	Kr = Gt(oi);
function sn(e) {
	if (e === oi) throw Error(P(174));
	return e;
}
function Tl(e, t) {
	switch ((I(Kr, t), I(Hr, e), I(it, oi), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Zs(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Zs(t, e));
	}
	U(it), I(it, t);
}
function bn() {
	U(it), U(Hr), U(Kr);
}
function np(e) {
	sn(Kr.current);
	var t = sn(it.current),
		n = Zs(t, e.type);
	t !== n && (I(Hr, e), I(it, n));
}
function Ll(e) {
	Hr.current === e && (U(it), U(Hr));
}
var K = Gt(0);
function uo(e) {
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
var ks = [];
function Rl() {
	for (var e = 0; e < ks.length; e++)
		ks[e]._workInProgressVersionPrimary = null;
	ks.length = 0;
}
var Ii = kt.ReactCurrentDispatcher,
	xs = kt.ReactCurrentBatchConfig,
	pn = 0,
	Q = null,
	ne = null,
	se = null,
	co = !1,
	Er = !1,
	Gr = 0,
	Py = 0;
function de() {
	throw Error(P(321));
}
function Al(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Je(e[n], t[n])) return !1;
	return !0;
}
function Vl(e, t, n, r, i, o) {
	if (
		((pn = o),
		(Q = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Ii.current = e === null || e.memoizedState === null ? Ly : Ry),
		(e = n(r, i)),
		Er)
	) {
		o = 0;
		do {
			if (((Er = !1), (Gr = 0), 25 <= o)) throw Error(P(301));
			(o += 1),
				(se = ne = null),
				(t.updateQueue = null),
				(Ii.current = Ay),
				(e = n(r, i));
		} while (Er);
	}
	if (
		((Ii.current = fo),
		(t = ne !== null && ne.next !== null),
		(pn = 0),
		(se = ne = Q = null),
		(co = !1),
		t)
	)
		throw Error(P(300));
	return e;
}
function Ml() {
	var e = Gr !== 0;
	return (Gr = 0), e;
}
function tt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return se === null ? (Q.memoizedState = se = e) : (se = se.next = e), se;
}
function Ke() {
	if (ne === null) {
		var e = Q.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ne.next;
	var t = se === null ? Q.memoizedState : se.next;
	if (t !== null) (se = t), (ne = e);
	else {
		if (e === null) throw Error(P(310));
		(ne = e),
			(e = {
				memoizedState: ne.memoizedState,
				baseState: ne.baseState,
				baseQueue: ne.baseQueue,
				queue: ne.queue,
				next: null,
			}),
			se === null ? (Q.memoizedState = se = e) : (se = se.next = e);
	}
	return se;
}
function Qr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ws(e) {
	var t = Ke(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = ne,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var a = (s = null),
			l = null,
			u = o;
		do {
			var c = u.lane;
			if ((pn & c) === c)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
					(Q.lanes |= c),
					(hn |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		l === null ? (s = r) : (l.next = a),
			Je(r, t.memoizedState) || (Ce = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = l),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (Q.lanes |= o), (hn |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Ss(e) {
	var t = Ke(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		Je(o, t.memoizedState) || (Ce = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function rp() {}
function ip(e, t) {
	var n = Q,
		r = Ke(),
		i = t(),
		o = !Je(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (Ce = !0)),
		(r = r.queue),
		jl(ap.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Yr(9, sp.bind(null, n, r, i, t), void 0, null),
			ae === null)
		)
			throw Error(P(349));
		pn & 30 || op(n, t, i);
	}
	return i;
}
function op(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Q.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sp(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), lp(t) && up(e);
}
function ap(e, t, n) {
	return n(function () {
		lp(t) && up(e);
	});
}
function lp(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Je(e, n);
	} catch {
		return !0;
	}
}
function up(e) {
	var t = gt(e, 1);
	t !== null && Ze(t, e, 1, -1);
}
function ic(e) {
	var t = tt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Qr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Ty.bind(null, Q, e)),
		[t.memoizedState, e]
	);
}
function Yr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Q.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function cp() {
	return Ke().memoizedState;
}
function zi(e, t, n, r) {
	var i = tt();
	(Q.flags |= e),
		(i.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
	var i = Ke();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (ne !== null) {
		var s = ne.memoizedState;
		if (((o = s.destroy), r !== null && Al(r, s.deps))) {
			i.memoizedState = Yr(t, n, o, r);
			return;
		}
	}
	(Q.flags |= e), (i.memoizedState = Yr(1 | t, n, o, r));
}
function oc(e, t) {
	return zi(8390656, 8, e, t);
}
function jl(e, t) {
	return Oo(2048, 8, e, t);
}
function fp(e, t) {
	return Oo(4, 2, e, t);
}
function dp(e, t) {
	return Oo(4, 4, e, t);
}
function pp(e, t) {
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
function hp(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Oo(4, 4, pp.bind(null, t, e), n)
	);
}
function Dl() {}
function mp(e, t) {
	var n = Ke();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Al(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function gp(e, t) {
	var n = Ke();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Al(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function yp(e, t, n) {
	return pn & 21
		? (Je(n, t) || ((n = xd()), (Q.lanes |= n), (hn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function Cy(e, t) {
	var n = B;
	(B = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = xs.transition;
	xs.transition = {};
	try {
		e(!1), t();
	} finally {
		(B = n), (xs.transition = r);
	}
}
function vp() {
	return Ke().memoizedState;
}
function Ey(e, t, n) {
	var r = Ot(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		kp(e))
	)
		xp(t, n);
	else if (((n = bd(e, t, n, r)), n !== null)) {
		var i = xe();
		Ze(n, e, r, i), wp(n, t, r);
	}
}
function Ty(e, t, n) {
	var r = Ot(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (kp(e)) xp(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					a = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), Je(a, s))) {
					var l = t.interleaved;
					l === null
						? ((i.next = i), Cl(t))
						: ((i.next = l.next), (l.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = bd(e, t, i, r)),
			n !== null && ((i = xe()), Ze(n, e, r, i), wp(n, t, r));
	}
}
function kp(e) {
	var t = e.alternate;
	return e === Q || (t !== null && t === Q);
}
function xp(e, t) {
	Er = co = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function wp(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), cl(e, n);
	}
}
var fo = {
		readContext: He,
		useCallback: de,
		useContext: de,
		useEffect: de,
		useImperativeHandle: de,
		useInsertionEffect: de,
		useLayoutEffect: de,
		useMemo: de,
		useReducer: de,
		useRef: de,
		useState: de,
		useDebugValue: de,
		useDeferredValue: de,
		useTransition: de,
		useMutableSource: de,
		useSyncExternalStore: de,
		useId: de,
		unstable_isNewReconciler: !1,
	},
	Ly = {
		readContext: He,
		useCallback: function (e, t) {
			return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: He,
		useEffect: oc,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				zi(4194308, 4, pp.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return zi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return zi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = tt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = tt();
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
				(e = e.dispatch = Ey.bind(null, Q, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = tt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: ic,
		useDebugValue: Dl,
		useDeferredValue: function (e) {
			return (tt().memoizedState = e);
		},
		useTransition: function () {
			var e = ic(!1),
				t = e[0];
			return (e = Cy.bind(null, e[1])), (tt().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Q,
				i = tt();
			if (H) {
				if (n === void 0) throw Error(P(407));
				n = n();
			} else {
				if (((n = t()), ae === null)) throw Error(P(349));
				pn & 30 || op(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				oc(ap.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Yr(9, sp.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = tt(),
				t = ae.identifierPrefix;
			if (H) {
				var n = ut,
					r = lt;
				(n = (r & ~(1 << (32 - be(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Gr++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = Py++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Ry = {
		readContext: He,
		useCallback: mp,
		useContext: He,
		useEffect: jl,
		useImperativeHandle: hp,
		useInsertionEffect: fp,
		useLayoutEffect: dp,
		useMemo: gp,
		useReducer: ws,
		useRef: cp,
		useState: function () {
			return ws(Qr);
		},
		useDebugValue: Dl,
		useDeferredValue: function (e) {
			var t = Ke();
			return yp(t, ne.memoizedState, e);
		},
		useTransition: function () {
			var e = ws(Qr)[0],
				t = Ke().memoizedState;
			return [e, t];
		},
		useMutableSource: rp,
		useSyncExternalStore: ip,
		useId: vp,
		unstable_isNewReconciler: !1,
	},
	Ay = {
		readContext: He,
		useCallback: mp,
		useContext: He,
		useEffect: jl,
		useImperativeHandle: hp,
		useInsertionEffect: fp,
		useLayoutEffect: dp,
		useMemo: gp,
		useReducer: Ss,
		useRef: cp,
		useState: function () {
			return Ss(Qr);
		},
		useDebugValue: Dl,
		useDeferredValue: function (e) {
			var t = Ke();
			return ne === null ? (t.memoizedState = e) : yp(t, ne.memoizedState, e);
		},
		useTransition: function () {
			var e = Ss(Qr)[0],
				t = Ke().memoizedState;
			return [e, t];
		},
		useMutableSource: rp,
		useSyncExternalStore: ip,
		useId: vp,
		unstable_isNewReconciler: !1,
	};
function Zn(e, t) {
	try {
		var n = "",
			r = t;
		do (n += rg(r)), (r = r.return);
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
function Ps(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Vy = typeof WeakMap == "function" ? WeakMap : Map;
function Sp(e, t, n) {
	(n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			ho || ((ho = !0), (Va = r)), xa(e, t);
		}),
		n
	);
}
function Pp(e, t, n) {
	(n = ft(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				xa(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				xa(e, t),
					typeof r != "function" &&
						(_t === null ? (_t = new Set([this])) : _t.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function sc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Vy();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = Hy.bind(null, e, t, n)), t.then(e, e));
}
function ac(e) {
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
function lc(e, t, n, r, i) {
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
							: ((t = ft(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var My = kt.ReactCurrentOwner,
	Ce = !1;
function ke(e, t, n, r) {
	t.child = e === null ? tp(t, null, n, r) : Xn(t, e.child, n, r);
}
function uc(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		Hn(t, i),
		(r = Vl(e, t, n, r, o, i)),
		(n = Ml()),
		e !== null && !Ce
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  yt(e, t, i))
			: (H && n && vl(t), (t.flags |= 1), ke(e, t, r, i), t.child)
	);
}
function cc(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Ul(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Cp(e, t, o, r, i))
			: ((e = Hi(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
		)
			return yt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = Bt(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Cp(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (zr(o, r) && e.ref === t.ref)
			if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (Ce = !0);
			else return (t.lanes = e.lanes), yt(e, t, i);
	}
	return wa(e, t, n, r, i);
}
function Ep(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				I(Fn, Ve),
				(Ve |= n);
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
					I(Fn, Ve),
					(Ve |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				I(Fn, Ve),
				(Ve |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			I(Fn, Ve),
			(Ve |= r);
	return ke(e, t, i, n), t.child;
}
function Tp(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function wa(e, t, n, r, i) {
	var o = Te(n) ? fn : ge.current;
	return (
		(o = Qn(t, o)),
		Hn(t, i),
		(n = Vl(e, t, n, r, o, i)),
		(r = Ml()),
		e !== null && !Ce
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  yt(e, t, i))
			: (H && r && vl(t), (t.flags |= 1), ke(e, t, n, i), t.child)
	);
}
function fc(e, t, n, r, i) {
	if (Te(n)) {
		var o = !0;
		ro(t);
	} else o = !1;
	if ((Hn(t, i), t.stateNode === null))
		Ui(e, t), qd(t, n, r), ka(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			a = t.memoizedProps;
		s.props = a;
		var l = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = He(u))
			: ((u = Te(n) ? fn : ge.current), (u = Qn(t, u)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== r || l !== u) && nc(t, s, r, u)),
			(Ct = !1);
		var d = t.memoizedState;
		(s.state = d),
			lo(t, r, s, i),
			(l = t.memoizedState),
			a !== r || d !== l || Ee.current || Ct
				? (typeof c == "function" && (va(t, n, c, r), (l = t.memoizedState)),
				  (a = Ct || tc(t, n, a, r, d, l, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount != "function" &&
									typeof s.componentWillMount != "function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == "function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = l)),
				  (s.props = r),
				  (s.state = l),
				  (s.context = u),
				  (r = a))
				: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			Zd(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Qe(t.type, a)),
			(s.props = u),
			(f = t.pendingProps),
			(d = s.context),
			(l = n.contextType),
			typeof l == "object" && l !== null
				? (l = He(l))
				: ((l = Te(n) ? fn : ge.current), (l = Qn(t, l)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== f || d !== l) && nc(t, s, r, l)),
			(Ct = !1),
			(d = t.memoizedState),
			(s.state = d),
			lo(t, r, s, i);
		var y = t.memoizedState;
		a !== f || d !== y || Ee.current || Ct
			? (typeof g == "function" && (va(t, n, g, r), (y = t.memoizedState)),
			  (u = Ct || tc(t, n, u, r, d, y, l) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != "function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, y, l),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, y, l)),
					  typeof s.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(a === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (s.props = r),
			  (s.state = y),
			  (s.context = l),
			  (r = u))
			: (typeof s.componentDidUpdate != "function" ||
					(a === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Sa(e, t, n, r, o, i);
}
function Sa(e, t, n, r, i, o) {
	Tp(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && bu(t, n, !1), yt(e, t, o);
	(r = t.stateNode), (My.current = t);
	var a =
		s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = Xn(t, e.child, null, o)), (t.child = Xn(t, null, a, o)))
			: ke(e, t, a, o),
		(t.memoizedState = r.state),
		i && bu(t, n, !0),
		t.child
	);
}
function Lp(e) {
	var t = e.stateNode;
	t.pendingContext
		? Xu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Xu(e, t.context, !1),
		Tl(e, t.containerInfo);
}
function dc(e, t, n, r, i) {
	return Yn(), xl(i), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var Pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ca(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Rp(e, t, n) {
	var r = t.pendingProps,
		i = K.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		a;
	if (
		((a = s) ||
			(a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		I(K, i & 1),
		e === null)
	)
		return (
			ga(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = zo(s, r, 0, null)),
						  (e = un(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Ca(n)),
						  (t.memoizedState = Pa),
						  e)
						: Nl(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return jy(e, t, s, r, a, i, n);
	if (o) {
		(o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
		var l = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = l),
				  (t.deletions = null))
				: ((r = Bt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (o = Bt(a, o)) : ((o = un(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? Ca(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Pa),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Bt(o, { mode: "visible", children: r.children })),
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
function Nl(e, t) {
	return (
		(t = zo({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Ei(e, t, n, r) {
	return (
		r !== null && xl(r),
		Xn(t, e.child, null, n),
		(e = Nl(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function jy(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Ps(Error(P(422)))), Ei(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = zo({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = un(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && Xn(t, e.child, null, s),
			  (t.child.memoizedState = Ca(s)),
			  (t.memoizedState = Pa),
			  o);
	if (!(t.mode & 1)) return Ei(e, t, s, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (o = Error(P(419))), (r = Ps(o, r, void 0)), Ei(e, t, s, r);
	}
	if (((a = (s & e.childLanes) !== 0), Ce || a)) {
		if (((r = ae), r !== null)) {
			switch (s & -s) {
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
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), gt(e, i), Ze(r, e, i, -1));
		}
		return zl(), (r = Ps(Error(P(421)))), Ei(e, t, s, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Ky.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Me = Nt(i.nextSibling)),
		  (je = t),
		  (H = !0),
		  (Xe = null),
		  e !== null &&
				((ze[Ue++] = lt),
				(ze[Ue++] = ut),
				(ze[Ue++] = dn),
				(lt = e.id),
				(ut = e.overflow),
				(dn = t)),
		  (t = Nl(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function pc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ya(e.return, t, n);
}
function Cs(e, t, n, r, i) {
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
function Ap(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((ke(e, t, r.children, n), (r = K.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
				else if (e.tag === 19) pc(e, n, t);
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
	if ((I(K, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && uo(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Cs(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && uo(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				Cs(t, !0, n, null, o);
				break;
			case "together":
				Cs(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ui(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(hn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(P(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Bt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Dy(e, t, n) {
	switch (t.tag) {
		case 3:
			Lp(t), Yn();
			break;
		case 5:
			np(t);
			break;
		case 1:
			Te(t.type) && ro(t);
			break;
		case 4:
			Tl(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			I(so, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (I(K, K.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Rp(e, t, n)
					: (I(K, K.current & 1),
					  (e = yt(e, t, n)),
					  e !== null ? e.sibling : null);
			I(K, K.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Ap(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				I(K, K.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Ep(e, t, n);
	}
	return yt(e, t, n);
}
var Vp, Ea, Mp, jp;
Vp = function (e, t) {
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
Ea = function () {};
Mp = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), sn(it.current);
		var o = null;
		switch (n) {
			case "input":
				(i = Qs(e, i)), (r = Qs(e, r)), (o = []);
				break;
			case "select":
				(i = Y({}, i, { value: void 0 })),
					(r = Y({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = bs(e, i)), (r = bs(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = to);
		}
		Js(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var a = i[u];
					for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(Dr.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var l = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && l !== a && (l != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (s in a)
							!a.hasOwnProperty(s) ||
								(l && l.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in l)
							l.hasOwnProperty(s) &&
								a[s] !== l[s] &&
								(n || (n = {}), (n[s] = l[s]));
					} else n || (o || (o = []), o.push(u, n)), (n = l);
				else
					u === "dangerouslySetInnerHTML"
						? ((l = l ? l.__html : void 0),
						  (a = a ? a.__html : void 0),
						  l != null && a !== l && (o = o || []).push(u, l))
						: u === "children"
						? (typeof l != "string" && typeof l != "number") ||
						  (o = o || []).push(u, "" + l)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (Dr.hasOwnProperty(u)
								? (l != null && u === "onScroll" && z("scroll", e),
								  o || a === l || (o = []))
								: (o = o || []).push(u, l));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
jp = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function fr(e, t) {
	if (!H)
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
function pe(e) {
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
function Ny(e, t, n) {
	var r = t.pendingProps;
	switch ((kl(t), t.tag)) {
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
			return pe(t), null;
		case 1:
			return Te(t.type) && no(), pe(t), null;
		case 3:
			return (
				(r = t.stateNode),
				bn(),
				U(Ee),
				U(ge),
				Rl(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Pi(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Xe !== null && (Da(Xe), (Xe = null)))),
				Ea(e, t),
				pe(t),
				null
			);
		case 5:
			Ll(t);
			var i = sn(Kr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Mp(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(P(166));
					return pe(t), null;
				}
				if (((e = sn(it.current)), Pi(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[nt] = t), (r[Wr] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							z("cancel", r), z("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							z("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < vr.length; i++) z(vr[i], r);
							break;
						case "source":
							z("error", r);
							break;
						case "img":
						case "image":
						case "link":
							z("error", r), z("load", r);
							break;
						case "details":
							z("toggle", r);
							break;
						case "input":
							Su(r, o), z("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								z("invalid", r);
							break;
						case "textarea":
							Cu(r, o), z("invalid", r);
					}
					Js(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var a = o[s];
							s === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (o.suppressHydrationWarning !== !0 &&
											Si(r.textContent, a, e),
									  (i = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (o.suppressHydrationWarning !== !0 &&
											Si(r.textContent, a, e),
									  (i = ["children", "" + a]))
								: Dr.hasOwnProperty(s) &&
								  a != null &&
								  s === "onScroll" &&
								  z("scroll", r);
						}
					switch (n) {
						case "input":
							hi(r), Pu(r, o, !0);
							break;
						case "textarea":
							hi(r), Eu(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = to);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = od(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === "select" &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[nt] = t),
						(e[Wr] = r),
						Vp(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = qs(n, r)), n)) {
							case "dialog":
								z("cancel", e), z("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								z("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < vr.length; i++) z(vr[i], e);
								i = r;
								break;
							case "source":
								z("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								z("error", e), z("load", e), (i = r);
								break;
							case "details":
								z("toggle", e), (i = r);
								break;
							case "input":
								Su(e, r), (i = Qs(e, r)), z("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Y({}, r, { value: void 0 })),
									z("invalid", e);
								break;
							case "textarea":
								Cu(e, r), (i = bs(e, r)), z("invalid", e);
								break;
							default:
								i = r;
						}
						Js(n, i), (a = i);
						for (o in a)
							if (a.hasOwnProperty(o)) {
								var l = a[o];
								o === "style"
									? ld(e, l)
									: o === "dangerouslySetInnerHTML"
									? ((l = l ? l.__html : void 0), l != null && sd(e, l))
									: o === "children"
									? typeof l == "string"
										? (n !== "textarea" || l !== "") && Nr(e, l)
										: typeof l == "number" && Nr(e, "" + l)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (Dr.hasOwnProperty(o)
											? l != null && o === "onScroll" && z("scroll", e)
											: l != null && il(e, o, l, s));
							}
						switch (n) {
							case "input":
								hi(e), Pu(e, r, !1);
								break;
							case "textarea":
								hi(e), Eu(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Ut(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? zn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  zn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = to);
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
			return pe(t), null;
		case 6:
			if (e && t.stateNode != null) jp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
				if (((n = sn(Kr.current)), sn(it.current), Pi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[nt] = t),
						(o = r.nodeValue !== n) && ((e = je), e !== null))
					)
						switch (e.tag) {
							case 3:
								Si(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Si(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[nt] = t),
						(t.stateNode = r);
			}
			return pe(t), null;
		case 13:
			if (
				(U(K),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (H && Me !== null && t.mode & 1 && !(t.flags & 128))
					Xd(), Yn(), (t.flags |= 98560), (o = !1);
				else if (((o = Pi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(P(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(P(317));
						o[nt] = t;
					} else
						Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					pe(t), (o = !1);
				} else Xe !== null && (Da(Xe), (Xe = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || K.current & 1 ? re === 0 && (re = 3) : zl())),
				  t.updateQueue !== null && (t.flags |= 4),
				  pe(t),
				  null);
		case 4:
			return (
				bn(), Ea(e, t), e === null && Ur(t.stateNode.containerInfo), pe(t), null
			);
		case 10:
			return Pl(t.type._context), pe(t), null;
		case 17:
			return Te(t.type) && no(), pe(t), null;
		case 19:
			if ((U(K), (o = t.memoizedState), o === null)) return pe(t), null;
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) fr(o, !1);
				else {
					if (re !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = uo(e)), s !== null)) {
								for (
									t.flags |= 128,
										fr(o, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return I(K, (K.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						Z() > Jn &&
						((t.flags |= 128), (r = !0), fr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = uo(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							fr(o, !0),
							o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
						)
							return pe(t), null;
					} else
						2 * Z() - o.renderingStartTime > Jn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), fr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = Z()),
				  (t.sibling = null),
				  (n = K.current),
				  I(K, r ? (n & 1) | 2 : n & 1),
				  t)
				: (pe(t), null);
		case 22:
		case 23:
			return (
				Il(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ve & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: pe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(P(156, t.tag));
}
function Fy(e, t) {
	switch ((kl(t), t.tag)) {
		case 1:
			return (
				Te(t.type) && no(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				bn(),
				U(Ee),
				U(ge),
				Rl(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Ll(t), null;
		case 13:
			if ((U(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(P(340));
				Yn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return U(K), null;
		case 4:
			return bn(), null;
		case 10:
			return Pl(t.type._context), null;
		case 22:
		case 23:
			return Il(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ti = !1,
	me = !1,
	_y = typeof WeakSet == "function" ? WeakSet : Set,
	R = null;
function Nn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				X(e, t, r);
			}
		else n.current = null;
}
function Ta(e, t, n) {
	try {
		n();
	} catch (r) {
		X(e, t, r);
	}
}
var hc = !1;
function Oy(e, t) {
	if (((ua = Ji), (e = _d()), yl(e))) {
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
					var s = 0,
						a = -1,
						l = -1,
						u = 0,
						c = 0,
						f = e,
						d = null;
					t: for (;;) {
						for (
							var g;
							f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
								f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(g = f.firstChild) !== null;

						)
							(d = f), (f = g);
						for (;;) {
							if (f === e) break t;
							if (
								(d === n && ++u === i && (a = s),
								d === o && ++c === r && (l = s),
								(g = f.nextSibling) !== null)
							)
								break;
							(f = d), (d = f.parentNode);
						}
						f = g;
					}
					n = a === -1 || l === -1 ? null : { start: a, end: l };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (ca = { focusedElem: e, selectionRange: n }, Ji = !1, R = t; R !== null; )
		if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (R = e);
		else
			for (; R !== null; ) {
				t = R;
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
									var v = y.memoizedProps,
										x = y.memoizedState,
										m = t.stateNode,
										p = m.getSnapshotBeforeUpdate(
											t.elementType === t.type ? v : Qe(t.type, v),
											x
										);
									m.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var h = t.stateNode.containerInfo;
								h.nodeType === 1
									? (h.textContent = "")
									: h.nodeType === 9 &&
									  h.documentElement &&
									  h.removeChild(h.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(P(163));
						}
				} catch (k) {
					X(t, t.return, k);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (R = e);
					break;
				}
				R = t.return;
			}
	return (y = hc), (hc = !1), y;
}
function Tr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Ta(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Bo(e, t) {
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
function La(e) {
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
function Dp(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Dp(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[nt], delete t[Wr], delete t[pa], delete t[ky], delete t[xy])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Np(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Np(e.return)) return null;
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
function Ra(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = to));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ra(e, t, n), e = e.sibling; e !== null; ) Ra(e, t, n), (e = e.sibling);
}
function Aa(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
var ue = null,
	Ye = !1;
function wt(e, t, n) {
	for (n = n.child; n !== null; ) Fp(e, t, n), (n = n.sibling);
}
function Fp(e, t, n) {
	if (rt && typeof rt.onCommitFiberUnmount == "function")
		try {
			rt.onCommitFiberUnmount(Vo, n);
		} catch {}
	switch (n.tag) {
		case 5:
			me || Nn(n, t);
		case 6:
			var r = ue,
				i = Ye;
			(ue = null),
				wt(e, t, n),
				(ue = r),
				(Ye = i),
				ue !== null &&
					(Ye
						? ((e = ue),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ue.removeChild(n.stateNode));
			break;
		case 18:
			ue !== null &&
				(Ye
					? ((e = ue),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ys(e.parentNode, n)
							: e.nodeType === 1 && ys(e, n),
					  Br(e))
					: ys(ue, n.stateNode));
			break;
		case 4:
			(r = ue),
				(i = Ye),
				(ue = n.stateNode.containerInfo),
				(Ye = !0),
				wt(e, t, n),
				(ue = r),
				(Ye = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!me &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && Ta(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			wt(e, t, n);
			break;
		case 1:
			if (
				!me &&
				(Nn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					X(n, t, a);
				}
			wt(e, t, n);
			break;
		case 21:
			wt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((me = (r = me) || n.memoizedState !== null), wt(e, t, n), (me = r))
				: wt(e, t, n);
			break;
		default:
			wt(e, t, n);
	}
}
function gc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new _y()),
			t.forEach(function (r) {
				var i = Gy.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Ge(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					a = s;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(ue = a.stateNode), (Ye = !1);
							break e;
						case 3:
							(ue = a.stateNode.containerInfo), (Ye = !0);
							break e;
						case 4:
							(ue = a.stateNode.containerInfo), (Ye = !0);
							break e;
					}
					a = a.return;
				}
				if (ue === null) throw Error(P(160));
				Fp(o, s, i), (ue = null), (Ye = !1);
				var l = i.alternate;
				l !== null && (l.return = null), (i.return = null);
			} catch (u) {
				X(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) _p(t, e), (t = t.sibling);
}
function _p(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ge(t, e), et(e), r & 4)) {
				try {
					Tr(3, e, e.return), Bo(3, e);
				} catch (v) {
					X(e, e.return, v);
				}
				try {
					Tr(5, e, e.return);
				} catch (v) {
					X(e, e.return, v);
				}
			}
			break;
		case 1:
			Ge(t, e), et(e), r & 512 && n !== null && Nn(n, n.return);
			break;
		case 5:
			if (
				(Ge(t, e),
				et(e),
				r & 512 && n !== null && Nn(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					Nr(i, "");
				} catch (v) {
					X(e, e.return, v);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					a = e.type,
					l = e.updateQueue;
				if (((e.updateQueue = null), l !== null))
					try {
						a === "input" && o.type === "radio" && o.name != null && rd(i, o),
							qs(a, s);
						var u = qs(a, o);
						for (s = 0; s < l.length; s += 2) {
							var c = l[s],
								f = l[s + 1];
							c === "style"
								? ld(i, f)
								: c === "dangerouslySetInnerHTML"
								? sd(i, f)
								: c === "children"
								? Nr(i, f)
								: il(i, c, f, u);
						}
						switch (a) {
							case "input":
								Ys(i, o);
								break;
							case "textarea":
								id(i, o);
								break;
							case "select":
								var d = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? zn(i, !!o.multiple, g, !1)
									: d !== !!o.multiple &&
									  (o.defaultValue != null
											? zn(i, !!o.multiple, o.defaultValue, !0)
											: zn(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[Wr] = o;
					} catch (v) {
						X(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((Ge(t, e), et(e), r & 4)) {
				if (e.stateNode === null) throw Error(P(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (v) {
					X(e, e.return, v);
				}
			}
			break;
		case 3:
			if (
				(Ge(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Br(t.containerInfo);
				} catch (v) {
					X(e, e.return, v);
				}
			break;
		case 4:
			Ge(t, e), et(e);
			break;
		case 13:
			Ge(t, e),
				et(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Ol = Z())),
				r & 4 && gc(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((me = (u = me) || c), Ge(t, e), (me = u)) : Ge(t, e),
				et(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (R = e, c = e.child; c !== null; ) {
						for (f = R = c; R !== null; ) {
							switch (((d = R), (g = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Tr(4, d, d.return);
									break;
								case 1:
									Nn(d, d.return);
									var y = d.stateNode;
									if (typeof y.componentWillUnmount == "function") {
										(r = d), (n = d.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (v) {
											X(r, n, v);
										}
									}
									break;
								case 5:
									Nn(d, d.return);
									break;
								case 22:
									if (d.memoizedState !== null) {
										vc(f);
										continue;
									}
							}
							g !== null ? ((g.return = d), (R = g)) : vc(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(i = f.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((a = f.stateNode),
										  (l = f.memoizedProps.style),
										  (s =
												l != null && l.hasOwnProperty("display")
													? l.display
													: null),
										  (a.style.display = ad("display", s)));
							} catch (v) {
								X(e, e.return, v);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (v) {
								X(e, e.return, v);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			Ge(t, e), et(e), r & 4 && gc(e);
			break;
		case 21:
			break;
		default:
			Ge(t, e), et(e);
	}
}
function et(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Np(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(P(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
					var o = mc(e);
					Aa(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						a = mc(e);
					Ra(e, a, s);
					break;
				default:
					throw Error(P(161));
			}
		} catch (l) {
			X(e, e.return, l);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function By(e, t, n) {
	(R = e), Op(e);
}
function Op(e, t, n) {
	for (var r = (e.mode & 1) !== 0; R !== null; ) {
		var i = R,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Ti;
			if (!s) {
				var a = i.alternate,
					l = (a !== null && a.memoizedState !== null) || me;
				a = Ti;
				var u = me;
				if (((Ti = s), (me = l) && !u))
					for (R = i; R !== null; )
						(s = R),
							(l = s.child),
							s.tag === 22 && s.memoizedState !== null
								? kc(i)
								: l !== null
								? ((l.return = s), (R = l))
								: kc(i);
				for (; o !== null; ) (R = o), Op(o), (o = o.sibling);
				(R = i), (Ti = a), (me = u);
			}
			yc(e);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : yc(e);
	}
}
function yc(e) {
	for (; R !== null; ) {
		var t = R;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							me || Bo(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !me)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Qe(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && ec(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								ec(t, s, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img":
										l.src && (n.src = l.src);
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
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && Br(f);
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
							throw Error(P(163));
					}
				me || (t.flags & 512 && La(t));
			} catch (d) {
				X(t, t.return, d);
			}
		}
		if (t === e) {
			R = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (R = n);
			break;
		}
		R = t.return;
	}
}
function vc(e) {
	for (; R !== null; ) {
		var t = R;
		if (t === e) {
			R = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (R = n);
			break;
		}
		R = t.return;
	}
}
function kc(e) {
	for (; R !== null; ) {
		var t = R;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Bo(4, t);
					} catch (l) {
						X(t, n, l);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (l) {
							X(t, i, l);
						}
					}
					var o = t.return;
					try {
						La(t);
					} catch (l) {
						X(t, o, l);
					}
					break;
				case 5:
					var s = t.return;
					try {
						La(t);
					} catch (l) {
						X(t, s, l);
					}
			}
		} catch (l) {
			X(t, t.return, l);
		}
		if (t === e) {
			R = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (R = a);
			break;
		}
		R = t.return;
	}
}
var Iy = Math.ceil,
	po = kt.ReactCurrentDispatcher,
	Fl = kt.ReactCurrentOwner,
	We = kt.ReactCurrentBatchConfig,
	O = 0,
	ae = null,
	ee = null,
	ce = 0,
	Ve = 0,
	Fn = Gt(0),
	re = 0,
	Xr = null,
	hn = 0,
	Io = 0,
	_l = 0,
	Lr = null,
	Pe = null,
	Ol = 0,
	Jn = 1 / 0,
	st = null,
	ho = !1,
	Va = null,
	_t = null,
	Li = !1,
	At = null,
	mo = 0,
	Rr = 0,
	Ma = null,
	$i = -1,
	Wi = 0;
function xe() {
	return O & 6 ? Z() : $i !== -1 ? $i : ($i = Z());
}
function Ot(e) {
	return e.mode & 1
		? O & 2 && ce !== 0
			? ce & -ce
			: Sy.transition !== null
			? (Wi === 0 && (Wi = xd()), Wi)
			: ((e = B),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ld(e.type))),
			  e)
		: 1;
}
function Ze(e, t, n, r) {
	if (50 < Rr) throw ((Rr = 0), (Ma = null), Error(P(185)));
	ni(e, n, r),
		(!(O & 2) || e !== ae) &&
			(e === ae && (!(O & 2) && (Io |= n), re === 4 && Lt(e, ce)),
			Le(e, r),
			n === 1 && O === 0 && !(t.mode & 1) && ((Jn = Z() + 500), Fo && Qt()));
}
function Le(e, t) {
	var n = e.callbackNode;
	Sg(e, t);
	var r = Zi(e, e === ae ? ce : 0);
	if (r === 0)
		n !== null && Ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Ru(n), t === 1))
			e.tag === 0 ? wy(xc.bind(null, e)) : Gd(xc.bind(null, e)),
				yy(function () {
					!(O & 6) && Qt();
				}),
				(n = null);
		else {
			switch (wd(r)) {
				case 1:
					n = ul;
					break;
				case 4:
					n = vd;
					break;
				case 16:
					n = bi;
					break;
				case 536870912:
					n = kd;
					break;
				default:
					n = bi;
			}
			n = Kp(n, Bp.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Bp(e, t) {
	if ((($i = -1), (Wi = 0), O & 6)) throw Error(P(327));
	var n = e.callbackNode;
	if (Kn() && e.callbackNode !== n) return null;
	var r = Zi(e, e === ae ? ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = go(e, r);
	else {
		t = r;
		var i = O;
		O |= 2;
		var o = zp();
		(ae !== e || ce !== t) && ((st = null), (Jn = Z() + 500), ln(e, t));
		do
			try {
				$y();
				break;
			} catch (a) {
				Ip(e, a);
			}
		while (!0);
		Sl(),
			(po.current = o),
			(O = i),
			ee !== null ? (t = 0) : ((ae = null), (ce = 0), (t = re));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = ia(e)), i !== 0 && ((r = i), (t = ja(e, i)))), t === 1)
		)
			throw ((n = Xr), ln(e, 0), Lt(e, r), Le(e, Z()), n);
		if (t === 6) Lt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!zy(i) &&
					((t = go(e, r)),
					t === 2 && ((o = ia(e)), o !== 0 && ((r = o), (t = ja(e, o)))),
					t === 1))
			)
				throw ((n = Xr), ln(e, 0), Lt(e, r), Le(e, Z()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(P(345));
				case 2:
					en(e, Pe, st);
					break;
				case 3:
					if (
						(Lt(e, r), (r & 130023424) === r && ((t = Ol + 500 - Z()), 10 < t))
					) {
						if (Zi(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							xe(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = da(en.bind(null, e, Pe, st), t);
						break;
					}
					en(e, Pe, st);
					break;
				case 4:
					if ((Lt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - be(r);
						(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = Z() - r),
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
								: 1960 * Iy(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = da(en.bind(null, e, Pe, st), r);
						break;
					}
					en(e, Pe, st);
					break;
				case 5:
					en(e, Pe, st);
					break;
				default:
					throw Error(P(329));
			}
		}
	}
	return Le(e, Z()), e.callbackNode === n ? Bp.bind(null, e) : null;
}
function ja(e, t) {
	var n = Lr;
	return (
		e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
		(e = go(e, t)),
		e !== 2 && ((t = Pe), (Pe = n), t !== null && Da(t)),
		e
	);
}
function Da(e) {
	Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function zy(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Je(o(), i)) return !1;
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
function Lt(e, t) {
	for (
		t &= ~_l,
			t &= ~Io,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - be(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function xc(e) {
	if (O & 6) throw Error(P(327));
	Kn();
	var t = Zi(e, 0);
	if (!(t & 1)) return Le(e, Z()), null;
	var n = go(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ia(e);
		r !== 0 && ((t = r), (n = ja(e, r)));
	}
	if (n === 1) throw ((n = Xr), ln(e, 0), Lt(e, t), Le(e, Z()), n);
	if (n === 6) throw Error(P(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		en(e, Pe, st),
		Le(e, Z()),
		null
	);
}
function Bl(e, t) {
	var n = O;
	O |= 1;
	try {
		return e(t);
	} finally {
		(O = n), O === 0 && ((Jn = Z() + 500), Fo && Qt());
	}
}
function mn(e) {
	At !== null && At.tag === 0 && !(O & 6) && Kn();
	var t = O;
	O |= 1;
	var n = We.transition,
		r = B;
	try {
		if (((We.transition = null), (B = 1), e)) return e();
	} finally {
		(B = r), (We.transition = n), (O = t), !(O & 6) && Qt();
	}
}
function Il() {
	(Ve = Fn.current), U(Fn);
}
function ln(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), gy(n)), ee !== null))
		for (n = ee.return; n !== null; ) {
			var r = n;
			switch ((kl(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && no();
					break;
				case 3:
					bn(), U(Ee), U(ge), Rl();
					break;
				case 5:
					Ll(r);
					break;
				case 4:
					bn();
					break;
				case 13:
					U(K);
					break;
				case 19:
					U(K);
					break;
				case 10:
					Pl(r.type._context);
					break;
				case 22:
				case 23:
					Il();
			}
			n = n.return;
		}
	if (
		((ae = e),
		(ee = e = Bt(e.current, null)),
		(ce = Ve = t),
		(re = 0),
		(Xr = null),
		(_l = Io = hn = 0),
		(Pe = Lr = null),
		on !== null)
	) {
		for (t = 0; t < on.length; t++)
			if (((n = on[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		on = null;
	}
	return e;
}
function Ip(e, t) {
	do {
		var n = ee;
		try {
			if ((Sl(), (Ii.current = fo), co)) {
				for (var r = Q.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				co = !1;
			}
			if (
				((pn = 0),
				(se = ne = Q = null),
				(Er = !1),
				(Gr = 0),
				(Fl.current = null),
				n === null || n.return === null)
			) {
				(re = 1), (Xr = t), (ee = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					a = n,
					l = t;
				if (
					((t = ce),
					(a.flags |= 32768),
					l !== null && typeof l == "object" && typeof l.then == "function")
				) {
					var u = l,
						c = a,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate;
						d
							? ((c.updateQueue = d.updateQueue),
							  (c.memoizedState = d.memoizedState),
							  (c.lanes = d.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var g = ac(s);
					if (g !== null) {
						(g.flags &= -257),
							lc(g, s, a, o, t),
							g.mode & 1 && sc(o, u, t),
							(t = g),
							(l = u);
						var y = t.updateQueue;
						if (y === null) {
							var v = new Set();
							v.add(l), (t.updateQueue = v);
						} else y.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							sc(o, u, t), zl();
							break e;
						}
						l = Error(P(426));
					}
				} else if (H && a.mode & 1) {
					var x = ac(s);
					if (x !== null) {
						!(x.flags & 65536) && (x.flags |= 256),
							lc(x, s, a, o, t),
							xl(Zn(l, a));
						break e;
					}
				}
				(o = l = Zn(l, a)),
					re !== 4 && (re = 2),
					Lr === null ? (Lr = [o]) : Lr.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var m = Sp(o, l, t);
							qu(o, m);
							break e;
						case 1:
							a = l;
							var p = o.type,
								h = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof p.getDerivedStateFromError == "function" ||
									(h !== null &&
										typeof h.componentDidCatch == "function" &&
										(_t === null || !_t.has(h))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var k = Pp(o, a, t);
								qu(o, k);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			$p(n);
		} catch (w) {
			(t = w), ee === n && n !== null && (ee = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function zp() {
	var e = po.current;
	return (po.current = fo), e === null ? fo : e;
}
function zl() {
	(re === 0 || re === 3 || re === 2) && (re = 4),
		ae === null || (!(hn & 268435455) && !(Io & 268435455)) || Lt(ae, ce);
}
function go(e, t) {
	var n = O;
	O |= 2;
	var r = zp();
	(ae !== e || ce !== t) && ((st = null), ln(e, t));
	do
		try {
			Uy();
			break;
		} catch (i) {
			Ip(e, i);
		}
	while (!0);
	if ((Sl(), (O = n), (po.current = r), ee !== null)) throw Error(P(261));
	return (ae = null), (ce = 0), re;
}
function Uy() {
	for (; ee !== null; ) Up(ee);
}
function $y() {
	for (; ee !== null && !pg(); ) Up(ee);
}
function Up(e) {
	var t = Hp(e.alternate, e, Ve);
	(e.memoizedProps = e.pendingProps),
		t === null ? $p(e) : (ee = t),
		(Fl.current = null);
}
function $p(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Fy(n, t)), n !== null)) {
				(n.flags &= 32767), (ee = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(re = 6), (ee = null);
				return;
			}
		} else if (((n = Ny(n, t, Ve)), n !== null)) {
			ee = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			ee = t;
			return;
		}
		ee = t = e;
	} while (t !== null);
	re === 0 && (re = 5);
}
function en(e, t, n) {
	var r = B,
		i = We.transition;
	try {
		(We.transition = null), (B = 1), Wy(e, t, n, r);
	} finally {
		(We.transition = i), (B = r);
	}
	return null;
}
function Wy(e, t, n, r) {
	do Kn();
	while (At !== null);
	if (O & 6) throw Error(P(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(P(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(Pg(e, o),
		e === ae && ((ee = ae = null), (ce = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Li ||
			((Li = !0),
			Kp(bi, function () {
				return Kn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = We.transition), (We.transition = null);
		var s = B;
		B = 1;
		var a = O;
		(O |= 4),
			(Fl.current = null),
			Oy(e, n),
			_p(n, e),
			uy(ca),
			(Ji = !!ua),
			(ca = ua = null),
			(e.current = n),
			By(n),
			hg(),
			(O = a),
			(B = s),
			(We.transition = o);
	} else e.current = n;
	if (
		(Li && ((Li = !1), (At = e), (mo = i)),
		(o = e.pendingLanes),
		o === 0 && (_t = null),
		yg(n.stateNode),
		Le(e, Z()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (ho) throw ((ho = !1), (e = Va), (Va = null), e);
	return (
		mo & 1 && e.tag !== 0 && Kn(),
		(o = e.pendingLanes),
		o & 1 ? (e === Ma ? Rr++ : ((Rr = 0), (Ma = e))) : (Rr = 0),
		Qt(),
		null
	);
}
function Kn() {
	if (At !== null) {
		var e = wd(mo),
			t = We.transition,
			n = B;
		try {
			if (((We.transition = null), (B = 16 > e ? 16 : e), At === null))
				var r = !1;
			else {
				if (((e = At), (At = null), (mo = 0), O & 6)) throw Error(P(331));
				var i = O;
				for (O |= 4, R = e.current; R !== null; ) {
					var o = R,
						s = o.child;
					if (R.flags & 16) {
						var a = o.deletions;
						if (a !== null) {
							for (var l = 0; l < a.length; l++) {
								var u = a[l];
								for (R = u; R !== null; ) {
									var c = R;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Tr(8, c, o);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (R = f);
									else
										for (; R !== null; ) {
											c = R;
											var d = c.sibling,
												g = c.return;
											if ((Dp(c), c === u)) {
												R = null;
												break;
											}
											if (d !== null) {
												(d.return = g), (R = d);
												break;
											}
											R = g;
										}
								}
							}
							var y = o.alternate;
							if (y !== null) {
								var v = y.child;
								if (v !== null) {
									y.child = null;
									do {
										var x = v.sibling;
										(v.sibling = null), (v = x);
									} while (v !== null);
								}
							}
							R = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (R = s);
					else
						e: for (; R !== null; ) {
							if (((o = R), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Tr(9, o, o.return);
								}
							var m = o.sibling;
							if (m !== null) {
								(m.return = o.return), (R = m);
								break e;
							}
							R = o.return;
						}
				}
				var p = e.current;
				for (R = p; R !== null; ) {
					s = R;
					var h = s.child;
					if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (R = h);
					else
						e: for (s = p; R !== null; ) {
							if (((a = R), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											Bo(9, a);
									}
								} catch (w) {
									X(a, a.return, w);
								}
							if (a === s) {
								R = null;
								break e;
							}
							var k = a.sibling;
							if (k !== null) {
								(k.return = a.return), (R = k);
								break e;
							}
							R = a.return;
						}
				}
				if (
					((O = i), Qt(), rt && typeof rt.onPostCommitFiberRoot == "function")
				)
					try {
						rt.onPostCommitFiberRoot(Vo, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(B = n), (We.transition = t);
		}
	}
	return !1;
}
function wc(e, t, n) {
	(t = Zn(n, t)),
		(t = Sp(e, t, 1)),
		(e = Ft(e, t, 1)),
		(t = xe()),
		e !== null && (ni(e, 1, t), Le(e, t));
}
function X(e, t, n) {
	if (e.tag === 3) wc(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				wc(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(_t === null || !_t.has(r)))
				) {
					(e = Zn(n, e)),
						(e = Pp(t, e, 1)),
						(t = Ft(t, e, 1)),
						(e = xe()),
						t !== null && (ni(t, 1, e), Le(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Hy(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = xe()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ae === e &&
			(ce & n) === n &&
			(re === 4 || (re === 3 && (ce & 130023424) === ce && 500 > Z() - Ol)
				? ln(e, 0)
				: (_l |= n)),
		Le(e, t);
}
function Wp(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
			: (t = 1));
	var n = xe();
	(e = gt(e, t)), e !== null && (ni(e, t, n), Le(e, n));
}
function Ky(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Wp(e, n);
}
function Gy(e, t) {
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
			throw Error(P(314));
	}
	r !== null && r.delete(t), Wp(e, n);
}
var Hp;
Hp = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Dy(e, t, n);
			Ce = !!(e.flags & 131072);
		}
	else (Ce = !1), H && t.flags & 1048576 && Qd(t, oo, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Ui(e, t), (e = t.pendingProps);
			var i = Qn(t, ge.current);
			Hn(t, n), (i = Vl(null, t, r, e, i, n));
			var o = Ml();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Te(r) ? ((o = !0), ro(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  El(t),
					  (i.updater = _o),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  ka(t, r, e, n),
					  (t = Sa(null, t, r, !0, o, n)))
					: ((t.tag = 0), H && o && vl(t), ke(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ui(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Yy(r)),
					(e = Qe(r, e)),
					i)
				) {
					case 0:
						t = wa(null, t, r, e, n);
						break e;
					case 1:
						t = fc(null, t, r, e, n);
						break e;
					case 11:
						t = uc(null, t, r, e, n);
						break e;
					case 14:
						t = cc(null, t, r, Qe(r.type, e), n);
						break e;
				}
				throw Error(P(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				wa(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				fc(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Lp(t), e === null)) throw Error(P(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					Zd(e, t),
					lo(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = Zn(Error(P(423)), t)), (t = dc(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Zn(Error(P(424)), t)), (t = dc(e, t, r, n, i));
						break e;
					} else
						for (
							Me = Nt(t.stateNode.containerInfo.firstChild),
								je = t,
								H = !0,
								Xe = null,
								n = tp(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Yn(), r === i)) {
						t = yt(e, t, n);
						break e;
					}
					ke(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				np(t),
				e === null && ga(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				fa(r, i) ? (s = null) : o !== null && fa(r, o) && (t.flags |= 32),
				Tp(e, t),
				ke(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && ga(t), null;
		case 13:
			return Rp(e, t, n);
		case 4:
			return (
				Tl(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Xn(t, null, r, n)) : ke(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				uc(e, t, r, i, n)
			);
		case 7:
			return ke(e, t, t.pendingProps, n), t.child;
		case 8:
			return ke(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ke(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					I(so, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (Je(o.value, s)) {
						if (o.children === i.children && !Ee.current) {
							t = yt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var a = o.dependencies;
							if (a !== null) {
								s = o.child;
								for (var l = a.firstContext; l !== null; ) {
									if (l.context === r) {
										if (o.tag === 1) {
											(l = ft(-1, n & -n)), (l.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (l.next = l)
													: ((l.next = c.next), (c.next = l)),
													(u.pending = l);
											}
										}
										(o.lanes |= n),
											(l = o.alternate),
											l !== null && (l.lanes |= n),
											ya(o.return, n, t),
											(a.lanes |= n);
										break;
									}
									l = l.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(P(341));
								(s.lanes |= n),
									(a = s.alternate),
									a !== null && (a.lanes |= n),
									ya(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				ke(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				Hn(t, n),
				(i = He(i)),
				(r = r(i)),
				(t.flags |= 1),
				ke(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Qe(r, t.pendingProps)),
				(i = Qe(r.type, i)),
				cc(e, t, r, i, n)
			);
		case 15:
			return Cp(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				Ui(e, t),
				(t.tag = 1),
				Te(r) ? ((e = !0), ro(t)) : (e = !1),
				Hn(t, n),
				qd(t, r, i),
				ka(t, r, i, n),
				Sa(null, t, r, !0, e, n)
			);
		case 19:
			return Ap(e, t, n);
		case 22:
			return Ep(e, t, n);
	}
	throw Error(P(156, t.tag));
};
function Kp(e, t) {
	return yd(e, t);
}
function Qy(e, t, n, r) {
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
function $e(e, t, n, r) {
	return new Qy(e, t, n, r);
}
function Ul(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yy(e) {
	if (typeof e == "function") return Ul(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === sl)) return 11;
		if (e === al) return 14;
	}
	return 2;
}
function Bt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = $e(e.tag, t, e.key, e.mode)),
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
function Hi(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == "function")) Ul(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case En:
				return un(n.children, i, o, t);
			case ol:
				(s = 8), (i |= 8);
				break;
			case Ws:
				return (
					(e = $e(12, n, t, i | 2)), (e.elementType = Ws), (e.lanes = o), e
				);
			case Hs:
				return (e = $e(13, n, t, i)), (e.elementType = Hs), (e.lanes = o), e;
			case Ks:
				return (e = $e(19, n, t, i)), (e.elementType = Ks), (e.lanes = o), e;
			case ed:
				return zo(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Jf:
							s = 10;
							break e;
						case qf:
							s = 9;
							break e;
						case sl:
							s = 11;
							break e;
						case al:
							s = 14;
							break e;
						case Pt:
							(s = 16), (r = null);
							break e;
					}
				throw Error(P(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = $e(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function un(e, t, n, r) {
	return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function zo(e, t, n, r) {
	return (
		(e = $e(22, e, r, t)),
		(e.elementType = ed),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Es(e, t, n) {
	return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function Ts(e, t, n) {
	return (
		(t = $e(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Xy(e, t, n, r, i) {
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
		(this.eventTimes = ss(0)),
		(this.expirationTimes = ss(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = ss(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function $l(e, t, n, r, i, o, s, a, l) {
	return (
		(e = new Xy(e, t, n, a, l)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = $e(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		El(o),
		e
	);
}
function by(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Cn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Gp(e) {
	if (!e) return $t;
	e = e._reactInternals;
	e: {
		if (yn(e) !== e || e.tag !== 1) throw Error(P(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Te(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(P(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Te(n)) return Kd(e, n, t);
	}
	return t;
}
function Qp(e, t, n, r, i, o, s, a, l) {
	return (
		(e = $l(n, r, !0, e, i, o, s, a, l)),
		(e.context = Gp(null)),
		(n = e.current),
		(r = xe()),
		(i = Ot(n)),
		(o = ft(r, i)),
		(o.callback = t ?? null),
		Ft(n, o, i),
		(e.current.lanes = i),
		ni(e, i, r),
		Le(e, r),
		e
	);
}
function Uo(e, t, n, r) {
	var i = t.current,
		o = xe(),
		s = Ot(i);
	return (
		(n = Gp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = ft(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Ft(i, t, s)),
		e !== null && (Ze(e, i, s, o), Bi(e, i, s)),
		s
	);
}
function yo(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Sc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Wl(e, t) {
	Sc(e, t), (e = e.alternate) && Sc(e, t);
}
function Zy() {
	return null;
}
var Yp =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Hl(e) {
	this._internalRoot = e;
}
$o.prototype.render = Hl.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(P(409));
	Uo(e, t, null, null);
};
$o.prototype.unmount = Hl.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		mn(function () {
			Uo(null, e, null, null);
		}),
			(t[mt] = null);
	}
};
function $o(e) {
	this._internalRoot = e;
}
$o.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Cd();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
		Tt.splice(n, 0, e), n === 0 && Td(e);
	}
};
function Kl(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Pc() {}
function Jy(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var u = yo(s);
				o.call(u);
			};
		}
		var s = Qp(t, r, e, 0, null, !1, !1, "", Pc);
		return (
			(e._reactRootContainer = s),
			(e[mt] = s.current),
			Ur(e.nodeType === 8 ? e.parentNode : e),
			mn(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = yo(l);
			a.call(u);
		};
	}
	var l = $l(e, 0, !1, null, null, !1, !1, "", Pc);
	return (
		(e._reactRootContainer = l),
		(e[mt] = l.current),
		Ur(e.nodeType === 8 ? e.parentNode : e),
		mn(function () {
			Uo(t, l, n, r);
		}),
		l
	);
}
function Ho(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var a = i;
			i = function () {
				var l = yo(s);
				a.call(l);
			};
		}
		Uo(t, s, e, i);
	} else s = Jy(n, t, e, i, r);
	return yo(s);
}
Sd = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = yr(t.pendingLanes);
				n !== 0 &&
					(cl(t, n | 1), Le(t, Z()), !(O & 6) && ((Jn = Z() + 500), Qt()));
			}
			break;
		case 13:
			mn(function () {
				var r = gt(e, 1);
				if (r !== null) {
					var i = xe();
					Ze(r, e, 1, i);
				}
			}),
				Wl(e, 1);
	}
};
fl = function (e) {
	if (e.tag === 13) {
		var t = gt(e, 134217728);
		if (t !== null) {
			var n = xe();
			Ze(t, e, 134217728, n);
		}
		Wl(e, 134217728);
	}
};
Pd = function (e) {
	if (e.tag === 13) {
		var t = Ot(e),
			n = gt(e, t);
		if (n !== null) {
			var r = xe();
			Ze(n, e, t, r);
		}
		Wl(e, t);
	}
};
Cd = function () {
	return B;
};
Ed = function (e, t) {
	var n = B;
	try {
		return (B = e), t();
	} finally {
		B = n;
	}
};
ta = function (e, t, n) {
	switch (t) {
		case "input":
			if ((Ys(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
						var i = No(r);
						if (!i) throw Error(P(90));
						nd(r), Ys(r, i);
					}
				}
			}
			break;
		case "textarea":
			id(e, n);
			break;
		case "select":
			(t = n.value), t != null && zn(e, !!n.multiple, t, !1);
	}
};
fd = Bl;
dd = mn;
var qy = { usingClientEntryPoint: !1, Events: [ii, An, No, ud, cd, Bl] },
	dr = {
		findFiberByHostInstance: rn,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	ev = {
		bundleType: dr.bundleType,
		version: dr.version,
		rendererPackageName: dr.rendererPackageName,
		rendererConfig: dr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: kt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = md(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: dr.findFiberByHostInstance || Zy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ri.isDisabled && Ri.supportsFiber)
		try {
			(Vo = Ri.inject(ev)), (rt = Ri);
		} catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy;
Fe.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Kl(t)) throw Error(P(200));
	return by(e, t, null, n);
};
Fe.createRoot = function (e, t) {
	if (!Kl(e)) throw Error(P(299));
	var n = !1,
		r = "",
		i = Yp;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = $l(e, 1, !1, null, null, n, !1, r, i)),
		(e[mt] = t.current),
		Ur(e.nodeType === 8 ? e.parentNode : e),
		new Hl(t)
	);
};
Fe.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(P(188))
			: ((e = Object.keys(e).join(",")), Error(P(268, e)));
	return (e = md(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
	return mn(e);
};
Fe.hydrate = function (e, t, n) {
	if (!Wo(t)) throw Error(P(200));
	return Ho(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
	if (!Kl(e)) throw Error(P(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		s = Yp;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = Qp(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[mt] = t.current),
		Ur(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new $o(t);
};
Fe.render = function (e, t, n) {
	if (!Wo(t)) throw Error(P(200));
	return Ho(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
	if (!Wo(e)) throw Error(P(40));
	return e._reactRootContainer
		? (mn(function () {
				Ho(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[mt] = null);
				});
		  }),
		  !0)
		: !1;
};
Fe.unstable_batchedUpdates = Bl;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Wo(n)) throw Error(P(200));
	if (e == null || e._reactInternals === void 0) throw Error(P(38));
	return Ho(e, t, n, !1, r);
};
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function Xp() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xp);
		} catch (e) {
			console.error(e);
		}
}
Xp(), (Qf.exports = Fe);
var tv = Qf.exports,
	Cc = tv;
(Us.createRoot = Cc.createRoot), (Us.hydrateRoot = Cc.hydrateRoot);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function br() {
	return (
		(br = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		br.apply(this, arguments)
	);
}
var Vt;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Vt || (Vt = {}));
const Ec = "popstate";
function nv(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: s, hash: a } = r.location;
		return Na(
			"",
			{ pathname: o, search: s, hash: a },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : vo(i);
	}
	return iv(t, n, null, e);
}
function te(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Gl(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function rv() {
	return Math.random().toString(36).substr(2, 8);
}
function Tc(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Na(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		br(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? ir(t) : t,
			{ state: n, key: (t && t.key) || r || rv() }
		)
	);
}
function vo(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function ir(e) {
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
function iv(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		a = Vt.Pop,
		l = null,
		u = c();
	u == null && ((u = 0), s.replaceState(br({}, s.state, { idx: u }), ""));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function f() {
		a = Vt.Pop;
		let x = c(),
			m = x == null ? null : x - u;
		(u = x), l && l({ action: a, location: v.location, delta: m });
	}
	function d(x, m) {
		a = Vt.Push;
		let p = Na(v.location, x, m);
		n && n(p, x), (u = c() + 1);
		let h = Tc(p, u),
			k = v.createHref(p);
		try {
			s.pushState(h, "", k);
		} catch (w) {
			if (w instanceof DOMException && w.name === "DataCloneError") throw w;
			i.location.assign(k);
		}
		o && l && l({ action: a, location: v.location, delta: 1 });
	}
	function g(x, m) {
		a = Vt.Replace;
		let p = Na(v.location, x, m);
		n && n(p, x), (u = c());
		let h = Tc(p, u),
			k = v.createHref(p);
		s.replaceState(h, "", k),
			o && l && l({ action: a, location: v.location, delta: 0 });
	}
	function y(x) {
		let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
			p = typeof x == "string" ? x : vo(x);
		return (
			te(
				m,
				"No window.location.(origin|href) available to create URL for href: " +
					p
			),
			new URL(p, m)
		);
	}
	let v = {
		get action() {
			return a;
		},
		get location() {
			return e(i, s);
		},
		listen(x) {
			if (l) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Ec, f),
				(l = x),
				() => {
					i.removeEventListener(Ec, f), (l = null);
				}
			);
		},
		createHref(x) {
			return t(i, x);
		},
		createURL: y,
		encodeLocation(x) {
			let m = y(x);
			return { pathname: m.pathname, search: m.search, hash: m.hash };
		},
		push: d,
		replace: g,
		go(x) {
			return s.go(x);
		},
	};
	return v;
}
var Lc;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(Lc || (Lc = {}));
function ov(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? ir(t) : t,
		i = Ql(r.pathname || "/", n);
	if (i == null) return null;
	let o = bp(e);
	sv(o);
	let s = null;
	for (let a = 0; s == null && a < o.length; ++a) s = mv(o[a], vv(i));
	return s;
}
function bp(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (o, s, a) => {
		let l = {
			relativePath: a === void 0 ? o.path || "" : a,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		l.relativePath.startsWith("/") &&
			(te(
				l.relativePath.startsWith(r),
				'Absolute route path "' +
					l.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(l.relativePath = l.relativePath.slice(r.length)));
		let u = It([r, l.relativePath]),
			c = n.concat(l);
		o.children &&
			o.children.length > 0 &&
			(te(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			bp(o.children, t, c, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: pv(u, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, s) => {
			var a;
			if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
			else for (let l of Zp(o.path)) i(o, s, l);
		}),
		t
	);
}
function Zp(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let s = Zp(r.join("/")),
		a = [];
	return (
		a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
		i && a.push(...s),
		a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
	);
}
function sv(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: hv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const av = /^:[\w-]+$/,
	lv = 3,
	uv = 2,
	cv = 1,
	fv = 10,
	dv = -2,
	Rc = (e) => e === "*";
function pv(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Rc) && (r += dv),
		t && (r += uv),
		n
			.filter((i) => !Rc(i))
			.reduce((i, o) => i + (av.test(o) ? lv : o === "" ? cv : fv), r)
	);
}
function hv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function mv(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let s = 0; s < n.length; ++s) {
		let a = n[s],
			l = s === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			c = gv(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
				u
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let f = a.route;
		o.push({
			params: r,
			pathname: It([i, c.pathname]),
			pathnameBase: Pv(It([i, c.pathnameBase])),
			route: f,
		}),
			c.pathnameBase !== "/" && (i = It([i, c.pathnameBase]));
	}
	return o;
}
function gv(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = yv(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, "$1"),
		a = i.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			let { paramName: d, isOptional: g } = c;
			if (d === "*") {
				let v = a[f] || "";
				s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
			}
			const y = a[f];
			return g && !y ? (u[d] = void 0) : (u[d] = kv(y || "", d)), u;
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	};
}
function yv(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Gl(
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
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, a, l) => (
						r.push({ paramName: a, isOptional: l != null }),
						l ? "/?([^\\/]+)?" : "/([^\\/]+)"
					)
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function vv(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			Gl(
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
function kv(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			Gl(
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
function Ql(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function xv(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? ir(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : wv(n, t)) : t,
		search: Cv(r),
		hash: Ev(i),
	};
}
function wv(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Ls(e, t, n, r) {
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
function Sv(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function Jp(e, t) {
	let n = Sv(e);
	return t
		? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function qp(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = ir(e))
		: ((i = br({}, e)),
		  te(
				!i.pathname || !i.pathname.includes("?"),
				Ls("?", "pathname", "search", i)
		  ),
		  te(
				!i.pathname || !i.pathname.includes("#"),
				Ls("#", "pathname", "hash", i)
		  ),
		  te(!i.search || !i.search.includes("#"), Ls("#", "search", "hash", i)));
	let o = e === "" || i.pathname === "",
		s = o ? "/" : i.pathname,
		a;
	if (s == null) a = n;
	else {
		let f = t.length - 1;
		if (!r && s.startsWith("..")) {
			let d = s.split("/");
			for (; d[0] === ".."; ) d.shift(), (f -= 1);
			i.pathname = d.join("/");
		}
		a = f >= 0 ? t[f] : "/";
	}
	let l = xv(i, a),
		u = s && s !== "/" && s.endsWith("/"),
		c = (o || s === ".") && n.endsWith("/");
	return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
	Pv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Cv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	Ev = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Tv(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const eh = ["post", "put", "patch", "delete"];
new Set(eh);
const Lv = ["get", ...eh];
new Set(Lv);
/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
	return (
		(Zr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Zr.apply(this, arguments)
	);
}
const Yl = S.createContext(null),
	Rv = S.createContext(null),
	vn = S.createContext(null),
	Ko = S.createContext(null),
	kn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	th = S.createContext(null);
function Av(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	si() || te(!1);
	let { basename: r, navigator: i } = S.useContext(vn),
		{ hash: o, pathname: s, search: a } = rh(e, { relative: n }),
		l = s;
	return (
		r !== "/" && (l = s === "/" ? r : It([r, s])),
		i.createHref({ pathname: l, search: a, hash: o })
	);
}
function si() {
	return S.useContext(Ko) != null;
}
function Go() {
	return si() || te(!1), S.useContext(Ko).location;
}
function nh(e) {
	S.useContext(vn).static || S.useLayoutEffect(e);
}
function Vv() {
	let { isDataRoute: e } = S.useContext(kn);
	return e ? Wv() : Mv();
}
function Mv() {
	si() || te(!1);
	let e = S.useContext(Yl),
		{ basename: t, future: n, navigator: r } = S.useContext(vn),
		{ matches: i } = S.useContext(kn),
		{ pathname: o } = Go(),
		s = JSON.stringify(Jp(i, n.v7_relativeSplatPath)),
		a = S.useRef(!1);
	return (
		nh(() => {
			a.current = !0;
		}),
		S.useCallback(
			function (u, c) {
				if ((c === void 0 && (c = {}), !a.current)) return;
				if (typeof u == "number") {
					r.go(u);
					return;
				}
				let f = qp(u, JSON.parse(s), o, c.relative === "path");
				e == null &&
					t !== "/" &&
					(f.pathname = f.pathname === "/" ? t : It([t, f.pathname])),
					(c.replace ? r.replace : r.push)(f, c.state, c);
			},
			[t, r, s, o, e]
		)
	);
}
function rh(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = S.useContext(vn),
		{ matches: i } = S.useContext(kn),
		{ pathname: o } = Go(),
		s = JSON.stringify(Jp(i, r.v7_relativeSplatPath));
	return S.useMemo(() => qp(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function jv(e, t) {
	return Dv(e, t);
}
function Dv(e, t, n, r) {
	si() || te(!1);
	let { navigator: i } = S.useContext(vn),
		{ matches: o } = S.useContext(kn),
		s = o[o.length - 1],
		a = s ? s.params : {};
	s && s.pathname;
	let l = s ? s.pathnameBase : "/";
	s && s.route;
	let u = Go(),
		c;
	if (t) {
		var f;
		let x = typeof t == "string" ? ir(t) : t;
		l === "/" || ((f = x.pathname) != null && f.startsWith(l)) || te(!1),
			(c = x);
	} else c = u;
	let d = c.pathname || "/",
		g = l === "/" ? d : d.slice(l.length) || "/",
		y = ov(e, { pathname: g }),
		v = Bv(
			y &&
				y.map((x) =>
					Object.assign({}, x, {
						params: Object.assign({}, a, x.params),
						pathname: It([
							l,
							i.encodeLocation
								? i.encodeLocation(x.pathname).pathname
								: x.pathname,
						]),
						pathnameBase:
							x.pathnameBase === "/"
								? l
								: It([
										l,
										i.encodeLocation
											? i.encodeLocation(x.pathnameBase).pathname
											: x.pathnameBase,
								  ]),
					})
				),
			o,
			n,
			r
		);
	return t && v
		? S.createElement(
				Ko.Provider,
				{
					value: {
						location: Zr(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							c
						),
						navigationType: Vt.Pop,
					},
				},
				v
		  )
		: v;
}
function Nv() {
	let e = $v(),
		t = Tv(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return S.createElement(
		S.Fragment,
		null,
		S.createElement("h2", null, "Unexpected Application Error!"),
		S.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? S.createElement("pre", { style: i }, n) : null,
		null
	);
}
const Fv = S.createElement(Nv, null);
class _v extends S.Component {
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
					error: t.error !== void 0 ? t.error : n.error,
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
		return this.state.error !== void 0
			? S.createElement(
					kn.Provider,
					{ value: this.props.routeContext },
					S.createElement(th.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Ov(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = S.useContext(Yl);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		S.createElement(kn.Provider, { value: t }, r)
	);
}
function Bv(e, t, n, r) {
	var i;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var o;
		if ((o = n) != null && o.errors) e = n.matches;
		else return null;
	}
	let s = e,
		a = (i = n) == null ? void 0 : i.errors;
	if (a != null) {
		let c = s.findIndex(
			(f) => f.route.id && (a == null ? void 0 : a[f.route.id])
		);
		c >= 0 || te(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
	}
	let l = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < s.length; c++) {
			let f = s[c];
			if (
				((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
				f.route.id)
			) {
				let { loaderData: d, errors: g } = n,
					y =
						f.route.loader &&
						d[f.route.id] === void 0 &&
						(!g || g[f.route.id] === void 0);
				if (f.route.lazy || y) {
					(l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
					break;
				}
			}
		}
	return s.reduceRight((c, f, d) => {
		let g,
			y = !1,
			v = null,
			x = null;
		n &&
			((g = a && f.route.id ? a[f.route.id] : void 0),
			(v = f.route.errorElement || Fv),
			l &&
				(u < 0 && d === 0
					? (Hv("route-fallback", !1), (y = !0), (x = null))
					: u === d &&
					  ((y = !0), (x = f.route.hydrateFallbackElement || null))));
		let m = t.concat(s.slice(0, d + 1)),
			p = () => {
				let h;
				return (
					g
						? (h = v)
						: y
						? (h = x)
						: f.route.Component
						? (h = S.createElement(f.route.Component, null))
						: f.route.element
						? (h = f.route.element)
						: (h = c),
					S.createElement(Ov, {
						match: f,
						routeContext: { outlet: c, matches: m, isDataRoute: n != null },
						children: h,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
			? S.createElement(_v, {
					location: n.location,
					revalidation: n.revalidation,
					component: v,
					error: g,
					children: p(),
					routeContext: { outlet: null, matches: m, isDataRoute: !0 },
			  })
			: p();
	}, null);
}
var ih = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(ih || {}),
	ko = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(ko || {});
function Iv(e) {
	let t = S.useContext(Yl);
	return t || te(!1), t;
}
function zv(e) {
	let t = S.useContext(Rv);
	return t || te(!1), t;
}
function Uv(e) {
	let t = S.useContext(kn);
	return t || te(!1), t;
}
function oh(e) {
	let t = Uv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || te(!1), n.route.id;
}
function $v() {
	var e;
	let t = S.useContext(th),
		n = zv(ko.UseRouteError),
		r = oh(ko.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Wv() {
	let { router: e } = Iv(ih.UseNavigateStable),
		t = oh(ko.UseNavigateStable),
		n = S.useRef(!1);
	return (
		nh(() => {
			n.current = !0;
		}),
		S.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, Zr({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
const Ac = {};
function Hv(e, t, n) {
	!t && !Ac[e] && (Ac[e] = !0);
}
function Fa(e) {
	te(!1);
}
function Kv(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = Vt.Pop,
		navigator: o,
		static: s = !1,
		future: a,
	} = e;
	si() && te(!1);
	let l = t.replace(/^\/*/, "/"),
		u = S.useMemo(
			() => ({
				basename: l,
				navigator: o,
				static: s,
				future: Zr({ v7_relativeSplatPath: !1 }, a),
			}),
			[l, a, o, s]
		);
	typeof r == "string" && (r = ir(r));
	let {
			pathname: c = "/",
			search: f = "",
			hash: d = "",
			state: g = null,
			key: y = "default",
		} = r,
		v = S.useMemo(() => {
			let x = Ql(c, l);
			return x == null
				? null
				: {
						location: { pathname: x, search: f, hash: d, state: g, key: y },
						navigationType: i,
				  };
		}, [l, c, f, d, g, y, i]);
	return v == null
		? null
		: S.createElement(
				vn.Provider,
				{ value: u },
				S.createElement(Ko.Provider, { children: n, value: v })
		  );
}
function Gv(e) {
	let { children: t, location: n } = e;
	return jv(_a(t), n);
}
new Promise(() => {});
function _a(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		S.Children.forEach(e, (r, i) => {
			if (!S.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === S.Fragment) {
				n.push.apply(n, _a(r.props.children, o));
				return;
			}
			r.type !== Fa && te(!1), !r.props.index || !r.props.children || te(!1);
			let s = {
				id: r.props.id || o.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (s.children = _a(r.props.children, o)), n.push(s);
		}),
		n
	);
}
/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oa() {
	return (
		(Oa = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Oa.apply(this, arguments)
	);
}
function Qv(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Yv(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Xv(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Yv(e);
}
const bv = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"unstable_viewTransition",
	],
	Zv = "startTransition",
	Vc = Km[Zv];
function Jv(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		o = S.useRef();
	o.current == null && (o.current = nv({ window: i, v5Compat: !0 }));
	let s = o.current,
		[a, l] = S.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		c = S.useCallback(
			(f) => {
				u && Vc ? Vc(() => l(f)) : l(f);
			},
			[l, u]
		);
	return (
		S.useLayoutEffect(() => s.listen(c), [s, c]),
		S.createElement(Kv, {
			basename: t,
			children: n,
			location: a.location,
			navigationType: a.action,
			navigator: s,
			future: r,
		})
	);
}
const qv =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	e0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	t0 = S.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: s,
				state: a,
				target: l,
				to: u,
				preventScrollReset: c,
				unstable_viewTransition: f,
			} = t,
			d = Qv(t, bv),
			{ basename: g } = S.useContext(vn),
			y,
			v = !1;
		if (typeof u == "string" && e0.test(u) && ((y = u), qv))
			try {
				let h = new URL(window.location.href),
					k = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
					w = Ql(k.pathname, g);
				k.origin === h.origin && w != null
					? (u = w + k.search + k.hash)
					: (v = !0);
			} catch {}
		let x = Av(u, { relative: i }),
			m = n0(u, {
				replace: s,
				state: a,
				target: l,
				preventScrollReset: c,
				relative: i,
				unstable_viewTransition: f,
			});
		function p(h) {
			r && r(h), h.defaultPrevented || m(h);
		}
		return S.createElement(
			"a",
			Oa({}, d, { href: y || x, onClick: v || o ? r : p, ref: n, target: l })
		);
	});
var Mc;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(Mc || (Mc = {}));
var jc;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(jc || (jc = {}));
function n0(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: s,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		l = Vv(),
		u = Go(),
		c = rh(e, { relative: s });
	return S.useCallback(
		(f) => {
			if (Xv(f, n)) {
				f.preventDefault();
				let d = r !== void 0 ? r : vo(u) === vo(c);
				l(e, {
					replace: d,
					state: i,
					preventScrollReset: o,
					relative: s,
					unstable_viewTransition: a,
				});
			}
		},
		[u, l, c, r, i, n, e, o, s, a]
	);
}
function r0() {
	return A.jsx("div", {
		className:
			"w-fit mx-auto py-2 font-salsa font-bold text-lg mt-5 md:text-2xl text-primary",
		children: A.jsx("button", {
			className: "btn",
			children: A.jsxs(t0, {
				to: "/deeptalk",
				className: "wrapper",
				children: [
					A.jsxs("p", {
						className: "text",
						children: ["Let", "'", "s Deeptalk"],
					}),
					A.jsxs("div", {
						className: "flower flower1",
						children: [
							A.jsx("div", { className: "petal one" }),
							A.jsx("div", { className: "petal two" }),
							A.jsx("div", { className: "petal three" }),
							A.jsx("div", { className: "petal four" }),
						],
					}),
					A.jsxs("div", {
						className: "flower flower2",
						children: [
							A.jsx("div", { className: "petal one" }),
							A.jsx("div", { className: "petal two" }),
							A.jsx("div", { className: "petal three" }),
							A.jsx("div", { className: "petal four" }),
						],
					}),
					A.jsxs("div", {
						className: "flower flower3",
						children: [
							A.jsx("div", { className: "petal one" }),
							A.jsx("div", { className: "petal two" }),
							A.jsx("div", { className: "petal three" }),
							A.jsx("div", { className: "petal four" }),
						],
					}),
					A.jsxs("div", {
						className: "flower flower4",
						children: [
							A.jsx("div", { className: "petal one" }),
							A.jsx("div", { className: "petal two" }),
							A.jsx("div", { className: "petal three" }),
							A.jsx("div", { className: "petal four" }),
						],
					}),
					A.jsxs("div", {
						className: "flower flower5",
						children: [
							A.jsx("div", { className: "petal one" }),
							A.jsx("div", { className: "petal two" }),
							A.jsx("div", { className: "petal three" }),
							A.jsx("div", { className: "petal four" }),
						],
					}),
					A.jsxs("div", {
						className: "flower flower6",
						children: [
							A.jsx("div", { className: "petal one" }),
							A.jsx("div", { className: "petal two" }),
							A.jsx("div", { className: "petal three" }),
							A.jsx("div", { className: "petal four" }),
						],
					}),
				],
			}),
		}),
	});
}
const sh = S.createContext({
		transformPagePoint: (e) => e,
		isStatic: !1,
		reducedMotion: "never",
	}),
	Qo = S.createContext({}),
	Xl = S.createContext(null),
	Yo = typeof document < "u",
	i0 = Yo ? S.useLayoutEffect : S.useEffect,
	ah = S.createContext({ strict: !1 }),
	bl = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
	o0 = "framerAppearId",
	lh = "data-" + bl(o0);
function s0(e, t, n, r) {
	const { visualElement: i } = S.useContext(Qo),
		o = S.useContext(ah),
		s = S.useContext(Xl),
		a = S.useContext(sh).reducedMotion,
		l = S.useRef();
	(r = r || o.renderer),
		!l.current &&
			r &&
			(l.current = r(e, {
				visualState: t,
				parent: i,
				props: n,
				presenceContext: s,
				blockInitialAnimation: s ? s.initial === !1 : !1,
				reducedMotionConfig: a,
			}));
	const u = l.current;
	S.useInsertionEffect(() => {
		u && u.update(n, s);
	});
	const c = S.useRef(!!(n[lh] && !window.HandoffComplete));
	return (
		i0(() => {
			u &&
				(u.render(),
				c.current && u.animationState && u.animationState.animateChanges());
		}),
		S.useEffect(() => {
			u &&
				(u.updateFeatures(),
				!c.current && u.animationState && u.animationState.animateChanges(),
				c.current && ((c.current = !1), (window.HandoffComplete = !0)));
		}),
		u
	);
}
function _n(e) {
	return (
		e &&
		typeof e == "object" &&
		Object.prototype.hasOwnProperty.call(e, "current")
	);
}
function a0(e, t, n) {
	return S.useCallback(
		(r) => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == "function" ? n(r) : _n(n) && (n.current = r));
		},
		[t]
	);
}
function Jr(e) {
	return typeof e == "string" || Array.isArray(e);
}
function Xo(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Zl = [
		"animate",
		"whileInView",
		"whileFocus",
		"whileHover",
		"whileTap",
		"whileDrag",
		"exit",
	],
	Jl = ["initial", ...Zl];
function bo(e) {
	return Xo(e.animate) || Jl.some((t) => Jr(e[t]));
}
function uh(e) {
	return !!(bo(e) || e.variants);
}
function l0(e, t) {
	if (bo(e)) {
		const { initial: n, animate: r } = e;
		return {
			initial: n === !1 || Jr(n) ? n : void 0,
			animate: Jr(r) ? r : void 0,
		};
	}
	return e.inherit !== !1 ? t : {};
}
function u0(e) {
	const { initial: t, animate: n } = l0(e, S.useContext(Qo));
	return S.useMemo(() => ({ initial: t, animate: n }), [Dc(t), Dc(n)]);
}
function Dc(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
const Nc = {
		animation: [
			"animate",
			"variants",
			"whileHover",
			"whileTap",
			"exit",
			"whileInView",
			"whileFocus",
			"whileDrag",
		],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"],
	},
	qr = {};
for (const e in Nc) qr[e] = { isEnabled: (t) => Nc[e].some((n) => !!t[n]) };
function c0(e) {
	for (const t in e) qr[t] = { ...qr[t], ...e[t] };
}
const ch = S.createContext({}),
	fh = S.createContext({}),
	f0 = Symbol.for("motionComponentSymbol");
function d0({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i,
}) {
	e && c0(e);
	function o(a, l) {
		let u;
		const c = { ...S.useContext(sh), ...a, layoutId: p0(a) },
			{ isStatic: f } = c,
			d = u0(a),
			g = r(a, f);
		if (!f && Yo) {
			d.visualElement = s0(i, g, c, t);
			const y = S.useContext(fh),
				v = S.useContext(ah).strict;
			d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
		}
		return S.createElement(
			Qo.Provider,
			{ value: d },
			u && d.visualElement
				? S.createElement(u, { visualElement: d.visualElement, ...c })
				: null,
			n(i, a, a0(g, d.visualElement, l), g, f, d.visualElement)
		);
	}
	const s = S.forwardRef(o);
	return (s[f0] = i), s;
}
function p0({ layoutId: e }) {
	const t = S.useContext(ch).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function h0(e) {
	function t(r, i = {}) {
		return d0(e(r, i));
	}
	if (typeof Proxy > "u") return t;
	const n = new Map();
	return new Proxy(t, {
		get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
	});
}
const m0 = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view",
];
function ql(e) {
	return typeof e != "string" || e.includes("-")
		? !1
		: !!(m0.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const xo = {};
function g0(e) {
	Object.assign(xo, e);
}
const ai = [
		"transformPerspective",
		"x",
		"y",
		"z",
		"translateX",
		"translateY",
		"translateZ",
		"scale",
		"scaleX",
		"scaleY",
		"rotate",
		"rotateX",
		"rotateY",
		"rotateZ",
		"skew",
		"skewX",
		"skewY",
	],
	xn = new Set(ai);
function dh(e, { layout: t, layoutId: n }) {
	return (
		xn.has(e) ||
		e.startsWith("origin") ||
		((t || n !== void 0) && (!!xo[e] || e === "opacity"))
	);
}
const Re = (e) => !!(e && e.getVelocity),
	y0 = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective",
	},
	v0 = ai.length;
function k0(
	e,
	{ enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
	r,
	i
) {
	let o = "";
	for (let s = 0; s < v0; s++) {
		const a = ai[s];
		if (e[a] !== void 0) {
			const l = y0[a] || a;
			o += `${l}(${e[a]}) `;
		}
	}
	return (
		t && !e.z && (o += "translateZ(0)"),
		(o = o.trim()),
		i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
		o
	);
}
const ph = (e) => (t) => typeof t == "string" && t.startsWith(e),
	hh = ph("--"),
	Ba = ph("var(--"),
	x0 =
		/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
	w0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
	Wt = (e, t, n) => Math.min(Math.max(n, e), t),
	wn = {
		test: (e) => typeof e == "number",
		parse: parseFloat,
		transform: (e) => e,
	},
	Ar = { ...wn, transform: (e) => Wt(0, 1, e) },
	Ai = { ...wn, default: 1 },
	Vr = (e) => Math.round(e * 1e5) / 1e5,
	Zo = /(-)?([\d]*\.?[\d])+/g,
	mh =
		/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	S0 =
		/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function li(e) {
	return typeof e == "string";
}
const ui = (e) => ({
		test: (t) => li(t) && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`,
	}),
	St = ui("deg"),
	ot = ui("%"),
	V = ui("px"),
	P0 = ui("vh"),
	C0 = ui("vw"),
	Fc = {
		...ot,
		parse: (e) => ot.parse(e) / 100,
		transform: (e) => ot.transform(e * 100),
	},
	_c = { ...wn, transform: Math.round },
	gh = {
		borderWidth: V,
		borderTopWidth: V,
		borderRightWidth: V,
		borderBottomWidth: V,
		borderLeftWidth: V,
		borderRadius: V,
		radius: V,
		borderTopLeftRadius: V,
		borderTopRightRadius: V,
		borderBottomRightRadius: V,
		borderBottomLeftRadius: V,
		width: V,
		maxWidth: V,
		height: V,
		maxHeight: V,
		size: V,
		top: V,
		right: V,
		bottom: V,
		left: V,
		padding: V,
		paddingTop: V,
		paddingRight: V,
		paddingBottom: V,
		paddingLeft: V,
		margin: V,
		marginTop: V,
		marginRight: V,
		marginBottom: V,
		marginLeft: V,
		rotate: St,
		rotateX: St,
		rotateY: St,
		rotateZ: St,
		scale: Ai,
		scaleX: Ai,
		scaleY: Ai,
		scaleZ: Ai,
		skew: St,
		skewX: St,
		skewY: St,
		distance: V,
		translateX: V,
		translateY: V,
		translateZ: V,
		x: V,
		y: V,
		z: V,
		perspective: V,
		transformPerspective: V,
		opacity: Ar,
		originX: Fc,
		originY: Fc,
		originZ: V,
		zIndex: _c,
		fillOpacity: Ar,
		strokeOpacity: Ar,
		numOctaves: _c,
	};
function eu(e, t, n, r) {
	const { style: i, vars: o, transform: s, transformOrigin: a } = e;
	let l = !1,
		u = !1,
		c = !0;
	for (const f in t) {
		const d = t[f];
		if (hh(f)) {
			o[f] = d;
			continue;
		}
		const g = gh[f],
			y = w0(d, g);
		if (xn.has(f)) {
			if (((l = !0), (s[f] = y), !c)) continue;
			d !== (g.default || 0) && (c = !1);
		} else f.startsWith("origin") ? ((u = !0), (a[f] = y)) : (i[f] = y);
	}
	if (
		(t.transform ||
			(l || r
				? (i.transform = k0(e.transform, n, c, r))
				: i.transform && (i.transform = "none")),
		u)
	) {
		const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = a;
		i.transformOrigin = `${f} ${d} ${g}`;
	}
}
const tu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function yh(e, t, n) {
	for (const r in t) !Re(t[r]) && !dh(r, n) && (e[r] = t[r]);
}
function E0({ transformTemplate: e }, t, n) {
	return S.useMemo(() => {
		const r = tu();
		return (
			eu(r, t, { enableHardwareAcceleration: !n }, e),
			Object.assign({}, r.vars, r.style)
		);
	}, [t]);
}
function T0(e, t, n) {
	const r = e.style || {},
		i = {};
	return (
		yh(i, r, e),
		Object.assign(i, E0(e, t, n)),
		e.transformValues ? e.transformValues(i) : i
	);
}
function L0(e, t, n) {
	const r = {},
		i = T0(e, t, n);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((r.draggable = !1),
			(i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
			(i.touchAction =
				e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
		e.tabIndex === void 0 &&
			(e.onTap || e.onTapStart || e.whileTap) &&
			(r.tabIndex = 0),
		(r.style = i),
		r
	);
}
const R0 = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"transformValues",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"ignoreStrict",
	"viewport",
]);
function wo(e) {
	return (
		e.startsWith("while") ||
		(e.startsWith("drag") && e !== "draggable") ||
		e.startsWith("layout") ||
		e.startsWith("onTap") ||
		e.startsWith("onPan") ||
		e.startsWith("onLayout") ||
		R0.has(e)
	);
}
let vh = (e) => !wo(e);
function A0(e) {
	e && (vh = (t) => (t.startsWith("on") ? !wo(t) : e(t)));
}
try {
	A0(require("@emotion/is-prop-valid").default);
} catch {}
function V0(e, t, n) {
	const r = {};
	for (const i in e)
		(i === "values" && typeof e.values == "object") ||
			((vh(i) ||
				(n === !0 && wo(i)) ||
				(!t && !wo(i)) ||
				(e.draggable && i.startsWith("onDrag"))) &&
				(r[i] = e[i]));
	return r;
}
function Oc(e, t, n) {
	return typeof e == "string" ? e : V.transform(t + n * e);
}
function M0(e, t, n) {
	const r = Oc(t, e.x, e.width),
		i = Oc(n, e.y, e.height);
	return `${r} ${i}`;
}
const j0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
	D0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function N0(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const o = i ? j0 : D0;
	e[o.offset] = V.transform(-r);
	const s = V.transform(t),
		a = V.transform(n);
	e[o.array] = `${s} ${a}`;
}
function nu(
	e,
	{
		attrX: t,
		attrY: n,
		attrScale: r,
		originX: i,
		originY: o,
		pathLength: s,
		pathSpacing: a = 1,
		pathOffset: l = 0,
		...u
	},
	c,
	f,
	d
) {
	if ((eu(e, u, c, d), f)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: g, style: y, dimensions: v } = e;
	g.transform && (v && (y.transform = g.transform), delete g.transform),
		v &&
			(i !== void 0 || o !== void 0 || y.transform) &&
			(y.transformOrigin = M0(
				v,
				i !== void 0 ? i : 0.5,
				o !== void 0 ? o : 0.5
			)),
		t !== void 0 && (g.x = t),
		n !== void 0 && (g.y = n),
		r !== void 0 && (g.scale = r),
		s !== void 0 && N0(g, s, a, l, !1);
}
const kh = () => ({ ...tu(), attrs: {} }),
	ru = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function F0(e, t, n, r) {
	const i = S.useMemo(() => {
		const o = kh();
		return (
			nu(o, t, { enableHardwareAcceleration: !1 }, ru(r), e.transformTemplate),
			{ ...o.attrs, style: { ...o.style } }
		);
	}, [t]);
	if (e.style) {
		const o = {};
		yh(o, e.style, e), (i.style = { ...o, ...i.style });
	}
	return i;
}
function _0(e = !1) {
	return (n, r, i, { latestValues: o }, s) => {
		const l = (ql(n) ? F0 : L0)(r, o, s, n),
			c = { ...V0(r, typeof n == "string", e), ...l, ref: i },
			{ children: f } = r,
			d = S.useMemo(() => (Re(f) ? f.get() : f), [f]);
		return S.createElement(n, { ...c, children: d });
	};
}
function xh(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (const o in n) e.style.setProperty(o, n[o]);
}
const wh = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust",
]);
function Sh(e, t, n, r) {
	xh(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(wh.has(i) ? i : bl(i), t.attrs[i]);
}
function iu(e, t) {
	const { style: n } = e,
		r = {};
	for (const i in n)
		(Re(n[i]) || (t.style && Re(t.style[i])) || dh(i, e)) && (r[i] = n[i]);
	return r;
}
function Ph(e, t) {
	const n = iu(e, t);
	for (const r in e)
		if (Re(e[r]) || Re(t[r])) {
			const i =
				ai.indexOf(r) !== -1
					? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
					: r;
			n[i] = e[r];
		}
	return n;
}
function ou(e, t, n, r = {}, i = {}) {
	return (
		typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
		typeof t == "string" && (t = e.variants && e.variants[t]),
		typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
		t
	);
}
function O0(e) {
	const t = S.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const So = (e) => Array.isArray(e),
	B0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
	I0 = (e) => (So(e) ? e[e.length - 1] || 0 : e);
function Ki(e) {
	const t = Re(e) ? e.get() : e;
	return B0(t) ? t.toValue() : t;
}
function z0(
	{ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
	r,
	i,
	o
) {
	const s = { latestValues: U0(r, i, o, e), renderState: t() };
	return n && (s.mount = (a) => n(r, a, s)), s;
}
const Ch = (e) => (t, n) => {
	const r = S.useContext(Qo),
		i = S.useContext(Xl),
		o = () => z0(e, t, r, i);
	return n ? o() : O0(o);
};
function U0(e, t, n, r) {
	const i = {},
		o = r(e, {});
	for (const d in o) i[d] = Ki(o[d]);
	let { initial: s, animate: a } = e;
	const l = bo(e),
		u = uh(e);
	t &&
		u &&
		!l &&
		e.inherit !== !1 &&
		(s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || s === !1;
	const f = c ? a : s;
	return (
		f &&
			typeof f != "boolean" &&
			!Xo(f) &&
			(Array.isArray(f) ? f : [f]).forEach((g) => {
				const y = ou(e, g);
				if (!y) return;
				const { transitionEnd: v, transition: x, ...m } = y;
				for (const p in m) {
					let h = m[p];
					if (Array.isArray(h)) {
						const k = c ? h.length - 1 : 0;
						h = h[k];
					}
					h !== null && (i[p] = h);
				}
				for (const p in v) i[p] = v[p];
			}),
		i
	);
}
const J = (e) => e;
class Bc {
	constructor() {
		(this.order = []), (this.scheduled = new Set());
	}
	add(t) {
		if (!this.scheduled.has(t))
			return this.scheduled.add(t), this.order.push(t), !0;
	}
	remove(t) {
		const n = this.order.indexOf(t);
		n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
	}
	clear() {
		(this.order.length = 0), this.scheduled.clear();
	}
}
function $0(e) {
	let t = new Bc(),
		n = new Bc(),
		r = 0,
		i = !1,
		o = !1;
	const s = new WeakSet(),
		a = {
			schedule: (l, u = !1, c = !1) => {
				const f = c && i,
					d = f ? t : n;
				return u && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
			},
			cancel: (l) => {
				n.remove(l), s.delete(l);
			},
			process: (l) => {
				if (i) {
					o = !0;
					return;
				}
				if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
					for (let u = 0; u < r; u++) {
						const c = t.order[u];
						c(l), s.has(c) && (a.schedule(c), e());
					}
				(i = !1), o && ((o = !1), a.process(l));
			},
		};
	return a;
}
const Vi = ["prepare", "read", "update", "preRender", "render", "postRender"],
	W0 = 40;
function H0(e, t) {
	let n = !1,
		r = !0;
	const i = { delta: 0, timestamp: 0, isProcessing: !1 },
		o = Vi.reduce((f, d) => ((f[d] = $0(() => (n = !0))), f), {}),
		s = (f) => o[f].process(i),
		a = () => {
			const f = performance.now();
			(n = !1),
				(i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, W0), 1)),
				(i.timestamp = f),
				(i.isProcessing = !0),
				Vi.forEach(s),
				(i.isProcessing = !1),
				n && t && ((r = !1), e(a));
		},
		l = () => {
			(n = !0), (r = !0), i.isProcessing || e(a);
		};
	return {
		schedule: Vi.reduce((f, d) => {
			const g = o[d];
			return (f[d] = (y, v = !1, x = !1) => (n || l(), g.schedule(y, v, x))), f;
		}, {}),
		cancel: (f) => Vi.forEach((d) => o[d].cancel(f)),
		state: i,
		steps: o,
	};
}
const {
		schedule: $,
		cancel: vt,
		state: he,
		steps: Rs,
	} = H0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : J, !0),
	K0 = {
		useVisualState: Ch({
			scrapeMotionValuesFromProps: Ph,
			createRenderState: kh,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				$.read(() => {
					try {
						n.dimensions =
							typeof t.getBBox == "function"
								? t.getBBox()
								: t.getBoundingClientRect();
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					$.render(() => {
						nu(
							n,
							r,
							{ enableHardwareAcceleration: !1 },
							ru(t.tagName),
							e.transformTemplate
						),
							Sh(t, n);
					});
			},
		}),
	},
	G0 = {
		useVisualState: Ch({
			scrapeMotionValuesFromProps: iu,
			createRenderState: tu,
		}),
	};
function Q0(e, { forwardMotionProps: t = !1 }, n, r) {
	return {
		...(ql(e) ? K0 : G0),
		preloadedFeatures: n,
		useRender: _0(t),
		createVisualElement: r,
		Component: e,
	};
}
function ct(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Eh = (e) =>
	e.pointerType === "mouse"
		? typeof e.button != "number" || e.button <= 0
		: e.isPrimary !== !1;
function Jo(e, t = "page") {
	return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Y0 = (e) => (t) => Eh(t) && e(t, Jo(t));
function dt(e, t, n, r) {
	return ct(e, t, Y0(n), r);
}
const X0 = (e, t) => (n) => t(e(n)),
	zt = (...e) => e.reduce(X0);
function Th(e) {
	let t = null;
	return () => {
		const n = () => {
			t = null;
		};
		return t === null ? ((t = e), n) : !1;
	};
}
const Ic = Th("dragHorizontal"),
	zc = Th("dragVertical");
function Lh(e) {
	let t = !1;
	if (e === "y") t = zc();
	else if (e === "x") t = Ic();
	else {
		const n = Ic(),
			r = zc();
		n && r
			? (t = () => {
					n(), r();
			  })
			: (n && n(), r && r());
	}
	return t;
}
function Rh() {
	const e = Lh(!0);
	return e ? (e(), !1) : !0;
}
class Yt {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function Uc(e, t) {
	const n = "pointer" + (t ? "enter" : "leave"),
		r = "onHover" + (t ? "Start" : "End"),
		i = (o, s) => {
			if (o.pointerType === "touch" || Rh()) return;
			const a = e.getProps();
			e.animationState &&
				a.whileHover &&
				e.animationState.setActive("whileHover", t),
				a[r] && $.update(() => a[r](o, s));
		};
	return dt(e.current, n, i, { passive: !e.getProps()[r] });
}
class b0 extends Yt {
	mount() {
		this.unmount = zt(Uc(this.node, !0), Uc(this.node, !1));
	}
	unmount() {}
}
class Z0 extends Yt {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible");
		} catch {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !0),
			(this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !1),
			(this.isActive = !1));
	}
	mount() {
		this.unmount = zt(
			ct(this.node.current, "focus", () => this.onFocus()),
			ct(this.node.current, "blur", () => this.onBlur())
		);
	}
	unmount() {}
}
const Ah = (e, t) => (t ? (e === t ? !0 : Ah(e, t.parentElement)) : !1);
function As(e, t) {
	if (!t) return;
	const n = new PointerEvent("pointer" + e);
	t(n, Jo(n));
}
class J0 extends Yt {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = J),
			(this.removeEndListeners = J),
			(this.removeAccessibleListeners = J),
			(this.startPointerPress = (t, n) => {
				if (this.isPressing) return;
				this.removeEndListeners();
				const r = this.node.getProps(),
					o = dt(
						window,
						"pointerup",
						(a, l) => {
							if (!this.checkPressEnd()) return;
							const {
								onTap: u,
								onTapCancel: c,
								globalTapTarget: f,
							} = this.node.getProps();
							$.update(() => {
								!f && !Ah(this.node.current, a.target)
									? c && c(a, l)
									: u && u(a, l);
							});
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					s = dt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
						passive: !(r.onTapCancel || r.onPointerCancel),
					});
				(this.removeEndListeners = zt(o, s)), this.startPress(t, n);
			}),
			(this.startAccessiblePress = () => {
				const t = (o) => {
						if (o.key !== "Enter" || this.isPressing) return;
						const s = (a) => {
							a.key !== "Enter" ||
								!this.checkPressEnd() ||
								As("up", (l, u) => {
									const { onTap: c } = this.node.getProps();
									c && $.update(() => c(l, u));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = ct(this.node.current, "keyup", s)),
							As("down", (a, l) => {
								this.startPress(a, l);
							});
					},
					n = ct(this.node.current, "keydown", t),
					r = () => {
						this.isPressing && As("cancel", (o, s) => this.cancelPress(o, s));
					},
					i = ct(this.node.current, "blur", r);
				this.removeAccessibleListeners = zt(n, i);
			});
	}
	startPress(t, n) {
		this.isPressing = !0;
		const { onTapStart: r, whileTap: i } = this.node.getProps();
		i &&
			this.node.animationState &&
			this.node.animationState.setActive("whileTap", !0),
			r && $.update(() => r(t, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive("whileTap", !1),
			!Rh()
		);
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: r } = this.node.getProps();
		r && $.update(() => r(t, n));
	}
	mount() {
		const t = this.node.getProps(),
			n = dt(
				t.globalTapTarget ? window : this.node.current,
				"pointerdown",
				this.startPointerPress,
				{ passive: !(t.onTapStart || t.onPointerStart) }
			),
			r = ct(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = zt(n, r);
	}
	unmount() {
		this.removeStartListeners(),
			this.removeEndListeners(),
			this.removeAccessibleListeners();
	}
}
const Ia = new WeakMap(),
	Vs = new WeakMap(),
	q0 = (e) => {
		const t = Ia.get(e.target);
		t && t(e);
	},
	e1 = (e) => {
		e.forEach(q0);
	};
function t1({ root: e, ...t }) {
	const n = e || document;
	Vs.has(n) || Vs.set(n, {});
	const r = Vs.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(e1, { root: e, ...t })), r[i];
}
function n1(e, t, n) {
	const r = t1(t);
	return (
		Ia.set(e, n),
		r.observe(e),
		() => {
			Ia.delete(e), r.unobserve(e);
		}
	);
}
const r1 = { some: 0, all: 1 };
class i1 extends Yt {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: i = "some", once: o } = t,
			s = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof i == "number" ? i : r1[i],
			},
			a = (l) => {
				const { isIntersecting: u } = l;
				if (
					this.isInView === u ||
					((this.isInView = u), o && !u && this.hasEnteredView)
				)
					return;
				u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive("whileInView", u);
				const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
					d = u ? c : f;
				d && d(l);
			};
		return n1(this.node.current, s, a);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const { props: t, prevProps: n } = this.node;
		["amount", "margin", "root"].some(o1(t, n)) && this.startObserver();
	}
	unmount() {}
}
function o1({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
const s1 = {
	inView: { Feature: i1 },
	tap: { Feature: J0 },
	focus: { Feature: Z0 },
	hover: { Feature: b0 },
};
function Vh(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
function a1(e) {
	const t = {};
	return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function l1(e) {
	const t = {};
	return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function qo(e, t, n) {
	const r = e.getProps();
	return ou(r, t, n !== void 0 ? n : r.custom, a1(e), l1(e));
}
let su = J;
const cn = (e) => e * 1e3,
	pt = (e) => e / 1e3,
	u1 = { current: !1 },
	Mh = (e) => Array.isArray(e) && typeof e[0] == "number";
function jh(e) {
	return !!(
		!e ||
		(typeof e == "string" && Dh[e]) ||
		Mh(e) ||
		(Array.isArray(e) && e.every(jh))
	);
}
const kr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	Dh = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: kr([0, 0.65, 0.55, 1]),
		circOut: kr([0.55, 0, 1, 0.45]),
		backIn: kr([0.31, 0.01, 0.66, -0.59]),
		backOut: kr([0.33, 1.53, 0.69, 0.99]),
	};
function Nh(e) {
	if (e) return Mh(e) ? kr(e) : Array.isArray(e) ? e.map(Nh) : Dh[e];
}
function c1(
	e,
	t,
	n,
	{
		delay: r = 0,
		duration: i,
		repeat: o = 0,
		repeatType: s = "loop",
		ease: a,
		times: l,
	} = {}
) {
	const u = { [t]: n };
	l && (u.offset = l);
	const c = Nh(a);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: r,
			duration: i,
			easing: Array.isArray(c) ? "linear" : c,
			fill: "both",
			iterations: o + 1,
			direction: s === "reverse" ? "alternate" : "normal",
		})
	);
}
function f1(e, { repeat: t, repeatType: n = "loop" }) {
	const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
	return e[r];
}
const Fh = (e, t, n) =>
		(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	d1 = 1e-7,
	p1 = 12;
function h1(e, t, n, r, i) {
	let o,
		s,
		a = 0;
	do (s = t + (n - t) / 2), (o = Fh(s, r, i) - e), o > 0 ? (n = s) : (t = s);
	while (Math.abs(o) > d1 && ++a < p1);
	return s;
}
function ci(e, t, n, r) {
	if (e === t && n === r) return J;
	const i = (o) => h1(o, 0, 1, e, n);
	return (o) => (o === 0 || o === 1 ? o : Fh(i(o), t, r));
}
const m1 = ci(0.42, 0, 1, 1),
	g1 = ci(0, 0, 0.58, 1),
	_h = ci(0.42, 0, 0.58, 1),
	y1 = (e) => Array.isArray(e) && typeof e[0] != "number",
	Oh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	Bh = (e) => (t) => 1 - e(1 - t),
	au = (e) => 1 - Math.sin(Math.acos(e)),
	Ih = Bh(au),
	v1 = Oh(au),
	zh = ci(0.33, 1.53, 0.69, 0.99),
	lu = Bh(zh),
	k1 = Oh(lu),
	x1 = (e) =>
		(e *= 2) < 1 ? 0.5 * lu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	w1 = {
		linear: J,
		easeIn: m1,
		easeInOut: _h,
		easeOut: g1,
		circIn: au,
		circInOut: v1,
		circOut: Ih,
		backIn: lu,
		backInOut: k1,
		backOut: zh,
		anticipate: x1,
	},
	$c = (e) => {
		if (Array.isArray(e)) {
			su(e.length === 4);
			const [t, n, r, i] = e;
			return ci(t, n, r, i);
		} else if (typeof e == "string") return w1[e];
		return e;
	},
	uu = (e, t) => (n) =>
		!!(
			(li(n) && S0.test(n) && n.startsWith(e)) ||
			(t && Object.prototype.hasOwnProperty.call(n, t))
		),
	Uh = (e, t, n) => (r) => {
		if (!li(r)) return r;
		const [i, o, s, a] = r.match(Zo);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(o),
			[n]: parseFloat(s),
			alpha: a !== void 0 ? parseFloat(a) : 1,
		};
	},
	S1 = (e) => Wt(0, 255, e),
	Ms = { ...wn, transform: (e) => Math.round(S1(e)) },
	an = {
		test: uu("rgb", "red"),
		parse: Uh("red", "green", "blue"),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			"rgba(" +
			Ms.transform(e) +
			", " +
			Ms.transform(t) +
			", " +
			Ms.transform(n) +
			", " +
			Vr(Ar.transform(r)) +
			")",
	};
function P1(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (i = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (i = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (i += i)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	);
}
const za = { test: uu("#"), parse: P1, transform: an.transform },
	On = {
		test: uu("hsl", "hue"),
		parse: Uh("hue", "saturation", "lightness"),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			"hsla(" +
			Math.round(e) +
			", " +
			ot.transform(Vr(t)) +
			", " +
			ot.transform(Vr(n)) +
			", " +
			Vr(Ar.transform(r)) +
			")",
	},
	ve = {
		test: (e) => an.test(e) || za.test(e) || On.test(e),
		parse: (e) =>
			an.test(e) ? an.parse(e) : On.test(e) ? On.parse(e) : za.parse(e),
		transform: (e) =>
			li(e) ? e : e.hasOwnProperty("red") ? an.transform(e) : On.transform(e),
	},
	G = (e, t, n) => -n * e + n * t + e;
function js(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	);
}
function C1({ hue: e, saturation: t, lightness: n, alpha: r }) {
	(e /= 360), (t /= 100), (n /= 100);
	let i = 0,
		o = 0,
		s = 0;
	if (!t) i = o = s = n;
	else {
		const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
			l = 2 * n - a;
		(i = js(l, a, e + 1 / 3)), (o = js(l, a, e)), (s = js(l, a, e - 1 / 3));
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(o * 255),
		blue: Math.round(s * 255),
		alpha: r,
	};
}
const Ds = (e, t, n) => {
		const r = e * e;
		return Math.sqrt(Math.max(0, n * (t * t - r) + r));
	},
	E1 = [za, an, On],
	T1 = (e) => E1.find((t) => t.test(e));
function Wc(e) {
	const t = T1(e);
	let n = t.parse(e);
	return t === On && (n = C1(n)), n;
}
const $h = (e, t) => {
	const n = Wc(e),
		r = Wc(t),
		i = { ...n };
	return (o) => (
		(i.red = Ds(n.red, r.red, o)),
		(i.green = Ds(n.green, r.green, o)),
		(i.blue = Ds(n.blue, r.blue, o)),
		(i.alpha = G(n.alpha, r.alpha, o)),
		an.transform(i)
	);
};
function L1(e) {
	var t, n;
	return (
		isNaN(e) &&
		li(e) &&
		(((t = e.match(Zo)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((n = e.match(mh)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
const Wh = { regex: x0, countKey: "Vars", token: "${v}", parse: J },
	Hh = { regex: mh, countKey: "Colors", token: "${c}", parse: ve.parse },
	Kh = { regex: Zo, countKey: "Numbers", token: "${n}", parse: wn.parse };
function Ns(e, { regex: t, countKey: n, token: r, parse: i }) {
	const o = e.tokenised.match(t);
	o &&
		((e["num" + n] = o.length),
		(e.tokenised = e.tokenised.replace(t, r)),
		e.values.push(...o.map(i)));
}
function Po(e) {
	const t = e.toString(),
		n = {
			value: t,
			tokenised: t,
			values: [],
			numVars: 0,
			numColors: 0,
			numNumbers: 0,
		};
	return n.value.includes("var(--") && Ns(n, Wh), Ns(n, Hh), Ns(n, Kh), n;
}
function Gh(e) {
	return Po(e).values;
}
function Qh(e) {
	const { values: t, numColors: n, numVars: r, tokenised: i } = Po(e),
		o = t.length;
	return (s) => {
		let a = i;
		for (let l = 0; l < o; l++)
			l < r
				? (a = a.replace(Wh.token, s[l]))
				: l < r + n
				? (a = a.replace(Hh.token, ve.transform(s[l])))
				: (a = a.replace(Kh.token, Vr(s[l])));
		return a;
	};
}
const R1 = (e) => (typeof e == "number" ? 0 : e);
function A1(e) {
	const t = Gh(e);
	return Qh(e)(t.map(R1));
}
const Ht = {
		test: L1,
		parse: Gh,
		createTransformer: Qh,
		getAnimatableNone: A1,
	},
	Yh = (e, t) => (n) => `${n > 0 ? t : e}`;
function Xh(e, t) {
	return typeof e == "number"
		? (n) => G(e, t, n)
		: ve.test(e)
		? $h(e, t)
		: e.startsWith("var(")
		? Yh(e, t)
		: Zh(e, t);
}
const bh = (e, t) => {
		const n = [...e],
			r = n.length,
			i = e.map((o, s) => Xh(o, t[s]));
		return (o) => {
			for (let s = 0; s < r; s++) n[s] = i[s](o);
			return n;
		};
	},
	V1 = (e, t) => {
		const n = { ...e, ...t },
			r = {};
		for (const i in n)
			e[i] !== void 0 && t[i] !== void 0 && (r[i] = Xh(e[i], t[i]));
		return (i) => {
			for (const o in r) n[o] = r[o](i);
			return n;
		};
	},
	Zh = (e, t) => {
		const n = Ht.createTransformer(t),
			r = Po(e),
			i = Po(t);
		return r.numVars === i.numVars &&
			r.numColors === i.numColors &&
			r.numNumbers >= i.numNumbers
			? zt(bh(r.values, i.values), n)
			: Yh(e, t);
	},
	ei = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r;
	},
	Hc = (e, t) => (n) => G(e, t, n);
function M1(e) {
	return typeof e == "number"
		? Hc
		: typeof e == "string"
		? ve.test(e)
			? $h
			: Zh
		: Array.isArray(e)
		? bh
		: typeof e == "object"
		? V1
		: Hc;
}
function j1(e, t, n) {
	const r = [],
		i = n || M1(e[0]),
		o = e.length - 1;
	for (let s = 0; s < o; s++) {
		let a = i(e[s], e[s + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[s] || J : t;
			a = zt(l, a);
		}
		r.push(a);
	}
	return r;
}
function Jh(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	const o = e.length;
	if ((su(o === t.length), o === 1)) return () => t[0];
	e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const s = j1(t, r, i),
		a = s.length,
		l = (u) => {
			let c = 0;
			if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = ei(e[c], e[c + 1], u);
			return s[c](f);
		};
	return n ? (u) => l(Wt(e[0], e[o - 1], u)) : l;
}
function D1(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = ei(0, t, r);
		e.push(G(n, 1, i));
	}
}
function N1(e) {
	const t = [0];
	return D1(t, e.length - 1), t;
}
function F1(e, t) {
	return e.map((n) => n * t);
}
function _1(e, t) {
	return e.map(() => t || _h).splice(0, e.length - 1);
}
function Co({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = "easeInOut",
}) {
	const i = y1(r) ? r.map($c) : $c(r),
		o = { done: !1, value: t[0] },
		s = F1(n && n.length === t.length ? n : N1(t), e),
		a = Jh(s, t, { ease: Array.isArray(i) ? i : _1(t, i) });
	return {
		calculatedDuration: e,
		next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
	};
}
function qh(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const O1 = 5;
function em(e, t, n) {
	const r = Math.max(t - O1, 0);
	return qh(n - e(r), t - r);
}
const Fs = 0.001,
	B1 = 0.01,
	I1 = 10,
	z1 = 0.05,
	U1 = 1;
function $1({
	duration: e = 800,
	bounce: t = 0.25,
	velocity: n = 0,
	mass: r = 1,
}) {
	let i,
		o,
		s = 1 - t;
	(s = Wt(z1, U1, s)),
		(e = Wt(B1, I1, pt(e))),
		s < 1
			? ((i = (u) => {
					const c = u * s,
						f = c * e,
						d = c - n,
						g = Ua(u, s),
						y = Math.exp(-f);
					return Fs - (d / g) * y;
			  }),
			  (o = (u) => {
					const f = u * s * e,
						d = f * n + n,
						g = Math.pow(s, 2) * Math.pow(u, 2) * e,
						y = Math.exp(-f),
						v = Ua(Math.pow(u, 2), s);
					return ((-i(u) + Fs > 0 ? -1 : 1) * ((d - g) * y)) / v;
			  }))
			: ((i = (u) => {
					const c = Math.exp(-u * e),
						f = (u - n) * e + 1;
					return -Fs + c * f;
			  }),
			  (o = (u) => {
					const c = Math.exp(-u * e),
						f = (n - u) * (e * e);
					return c * f;
			  }));
	const a = 5 / e,
		l = H1(i, o, a);
	if (((e = cn(e)), isNaN(l)))
		return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(l, 2) * r;
		return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
	}
}
const W1 = 12;
function H1(e, t, n) {
	let r = n;
	for (let i = 1; i < W1; i++) r = r - e(r) / t(r);
	return r;
}
function Ua(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const K1 = ["duration", "bounce"],
	G1 = ["stiffness", "damping", "mass"];
function Kc(e, t) {
	return t.some((n) => e[n] !== void 0);
}
function Q1(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e,
	};
	if (!Kc(e, G1) && Kc(e, K1)) {
		const n = $1(e);
		(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function tm({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const i = e[0],
		o = e[e.length - 1],
		s = { done: !1, value: i },
		{
			stiffness: a,
			damping: l,
			mass: u,
			duration: c,
			velocity: f,
			isResolvedFromDuration: d,
		} = Q1({ ...r, velocity: -pt(r.velocity || 0) }),
		g = f || 0,
		y = l / (2 * Math.sqrt(a * u)),
		v = o - i,
		x = pt(Math.sqrt(a / u)),
		m = Math.abs(v) < 5;
	n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
	let p;
	if (y < 1) {
		const h = Ua(x, y);
		p = (k) => {
			const w = Math.exp(-y * x * k);
			return (
				o - w * (((g + y * x * v) / h) * Math.sin(h * k) + v * Math.cos(h * k))
			);
		};
	} else if (y === 1) p = (h) => o - Math.exp(-x * h) * (v + (g + x * v) * h);
	else {
		const h = x * Math.sqrt(y * y - 1);
		p = (k) => {
			const w = Math.exp(-y * x * k),
				T = Math.min(h * k, 300);
			return (
				o - (w * ((g + y * x * v) * Math.sinh(T) + h * v * Math.cosh(T))) / h
			);
		};
	}
	return {
		calculatedDuration: (d && c) || null,
		next: (h) => {
			const k = p(h);
			if (d) s.done = h >= c;
			else {
				let w = g;
				h !== 0 && (y < 1 ? (w = em(p, h, k)) : (w = 0));
				const T = Math.abs(w) <= n,
					E = Math.abs(o - k) <= t;
				s.done = T && E;
			}
			return (s.value = s.done ? o : k), s;
		},
	};
}
function Gc({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: o = 500,
	modifyTarget: s,
	min: a,
	max: l,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const f = e[0],
		d = { done: !1, value: f },
		g = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
		y = (C) =>
			a === void 0
				? l
				: l === void 0 || Math.abs(a - C) < Math.abs(l - C)
				? a
				: l;
	let v = n * t;
	const x = f + v,
		m = s === void 0 ? x : s(x);
	m !== x && (v = m - f);
	const p = (C) => -v * Math.exp(-C / r),
		h = (C) => m + p(C),
		k = (C) => {
			const N = p(C),
				j = h(C);
			(d.done = Math.abs(N) <= u), (d.value = d.done ? m : j);
		};
	let w, T;
	const E = (C) => {
		g(d.value) &&
			((w = C),
			(T = tm({
				keyframes: [d.value, y(d.value)],
				velocity: em(h, C, d.value),
				damping: i,
				stiffness: o,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		E(0),
		{
			calculatedDuration: null,
			next: (C) => {
				let N = !1;
				return (
					!T && w === void 0 && ((N = !0), k(C), E(C)),
					w !== void 0 && C > w ? T.next(C - w) : (!N && k(C), d)
				);
			},
		}
	);
}
const Y1 = (e) => {
		const t = ({ timestamp: n }) => e(n);
		return {
			start: () => $.update(t, !0),
			stop: () => vt(t),
			now: () => (he.isProcessing ? he.timestamp : performance.now()),
		};
	},
	Qc = 2e4;
function Yc(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < Qc; ) (t += n), (r = e.next(t));
	return t >= Qc ? 1 / 0 : t;
}
const X1 = { decay: Gc, inertia: Gc, tween: Co, keyframes: Co, spring: tm };
function Eo({
	autoplay: e = !0,
	delay: t = 0,
	driver: n = Y1,
	keyframes: r,
	type: i = "keyframes",
	repeat: o = 0,
	repeatDelay: s = 0,
	repeatType: a = "loop",
	onPlay: l,
	onStop: u,
	onComplete: c,
	onUpdate: f,
	...d
}) {
	let g = 1,
		y = !1,
		v,
		x;
	const m = () => {
		x = new Promise((D) => {
			v = D;
		});
	};
	m();
	let p;
	const h = X1[i] || Co;
	let k;
	h !== Co &&
		typeof r[0] != "number" &&
		((k = Jh([0, 100], r, { clamp: !1 })), (r = [0, 100]));
	const w = h({ ...d, keyframes: r });
	let T;
	a === "mirror" &&
		(T = h({
			...d,
			keyframes: [...r].reverse(),
			velocity: -(d.velocity || 0),
		}));
	let E = "idle",
		C = null,
		N = null,
		j = null;
	w.calculatedDuration === null && o && (w.calculatedDuration = Yc(w));
	const { calculatedDuration: ie } = w;
	let le = 1 / 0,
		ye = 1 / 0;
	ie !== null && ((le = ie + s), (ye = le * (o + 1) - s));
	let oe = 0;
	const xt = (D) => {
			if (N === null) return;
			g > 0 && (N = Math.min(N, D)),
				g < 0 && (N = Math.min(D - ye / g, N)),
				C !== null ? (oe = C) : (oe = Math.round(D - N) * g);
			const W = oe - t * (g >= 0 ? 1 : -1),
				Xt = g >= 0 ? W < 0 : W > ye;
			(oe = Math.max(W, 0)), E === "finished" && C === null && (oe = ye);
			let qe = oe,
				Sn = w;
			if (o) {
				const es = Math.min(oe, ye) / le;
				let fi = Math.floor(es),
					Zt = es % 1;
				!Zt && es >= 1 && (Zt = 1),
					Zt === 1 && fi--,
					(fi = Math.min(fi, o + 1)),
					!!(fi % 2) &&
						(a === "reverse"
							? ((Zt = 1 - Zt), s && (Zt -= s / le))
							: a === "mirror" && (Sn = T)),
					(qe = Wt(0, 1, Zt) * le);
			}
			const Ae = Xt ? { done: !1, value: r[0] } : Sn.next(qe);
			k && (Ae.value = k(Ae.value));
			let { done: bt } = Ae;
			!Xt && ie !== null && (bt = g >= 0 ? oe >= ye : oe <= 0);
			const Lm = C === null && (E === "finished" || (E === "running" && bt));
			return f && f(Ae.value), Lm && L(), Ae;
		},
		b = () => {
			p && p.stop(), (p = void 0);
		},
		Oe = () => {
			(E = "idle"), b(), v(), m(), (N = j = null);
		},
		L = () => {
			(E = "finished"), c && c(), b(), v();
		},
		M = () => {
			if (y) return;
			p || (p = n(xt));
			const D = p.now();
			l && l(),
				C !== null ? (N = D - C) : (!N || E === "finished") && (N = D),
				E === "finished" && m(),
				(j = N),
				(C = null),
				(E = "running"),
				p.start();
		};
	e && M();
	const F = {
		then(D, W) {
			return x.then(D, W);
		},
		get time() {
			return pt(oe);
		},
		set time(D) {
			(D = cn(D)),
				(oe = D),
				C !== null || !p || g === 0 ? (C = D) : (N = p.now() - D / g);
		},
		get duration() {
			const D = w.calculatedDuration === null ? Yc(w) : w.calculatedDuration;
			return pt(D);
		},
		get speed() {
			return g;
		},
		set speed(D) {
			D === g || !p || ((g = D), (F.time = pt(oe)));
		},
		get state() {
			return E;
		},
		play: M,
		pause: () => {
			(E = "paused"), (C = oe);
		},
		stop: () => {
			(y = !0), E !== "idle" && ((E = "idle"), u && u(), Oe());
		},
		cancel: () => {
			j !== null && xt(j), Oe();
		},
		complete: () => {
			E = "finished";
		},
		sample: (D) => ((N = 0), xt(D)),
	};
	return F;
}
function b1(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const Z1 = b1(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
	J1 = new Set([
		"opacity",
		"clipPath",
		"filter",
		"transform",
		"backgroundColor",
	]),
	Mi = 10,
	q1 = 2e4,
	ek = (e, t) => t.type === "spring" || e === "backgroundColor" || !jh(t.ease);
function tk(e, t, { onUpdate: n, onComplete: r, ...i }) {
	if (
		!(
			Z1() &&
			J1.has(t) &&
			!i.repeatDelay &&
			i.repeatType !== "mirror" &&
			i.damping !== 0 &&
			i.type !== "inertia"
		)
	)
		return !1;
	let s = !1,
		a,
		l,
		u = !1;
	const c = () => {
		l = new Promise((h) => {
			a = h;
		});
	};
	c();
	let { keyframes: f, duration: d = 300, ease: g, times: y } = i;
	if (ek(t, i)) {
		const h = Eo({ ...i, repeat: 0, delay: 0 });
		let k = { done: !1, value: f[0] };
		const w = [];
		let T = 0;
		for (; !k.done && T < q1; ) (k = h.sample(T)), w.push(k.value), (T += Mi);
		(y = void 0), (f = w), (d = T - Mi), (g = "linear");
	}
	const v = c1(e.owner.current, t, f, { ...i, duration: d, ease: g, times: y }),
		x = () => {
			(u = !1), v.cancel();
		},
		m = () => {
			(u = !0), $.update(x), a(), c();
		};
	return (
		(v.onfinish = () => {
			u || (e.set(f1(f, i)), r && r(), m());
		}),
		{
			then(h, k) {
				return l.then(h, k);
			},
			attachTimeline(h) {
				return (v.timeline = h), (v.onfinish = null), J;
			},
			get time() {
				return pt(v.currentTime || 0);
			},
			set time(h) {
				v.currentTime = cn(h);
			},
			get speed() {
				return v.playbackRate;
			},
			set speed(h) {
				v.playbackRate = h;
			},
			get duration() {
				return pt(d);
			},
			play: () => {
				s || (v.play(), vt(x));
			},
			pause: () => v.pause(),
			stop: () => {
				if (((s = !0), v.playState === "idle")) return;
				const { currentTime: h } = v;
				if (h) {
					const k = Eo({ ...i, autoplay: !1 });
					e.setWithVelocity(k.sample(h - Mi).value, k.sample(h).value, Mi);
				}
				m();
			},
			complete: () => {
				u || v.finish();
			},
			cancel: m,
		}
	);
}
function nk({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
	const i = () => (
		n && n(e[e.length - 1]),
		r && r(),
		{
			time: 0,
			speed: 1,
			duration: 0,
			play: J,
			pause: J,
			stop: J,
			then: (o) => (o(), Promise.resolve()),
			cancel: J,
			complete: J,
		}
	);
	return t
		? Eo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
		: i();
}
const rk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
	ik = (e) => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	ok = { type: "keyframes", duration: 0.8 },
	sk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	ak = (e, { keyframes: t }) =>
		t.length > 2
			? ok
			: xn.has(e)
			? e.startsWith("scale")
				? ik(t[1])
				: rk
			: sk,
	$a = (e, t) =>
		e === "zIndex"
			? !1
			: !!(
					typeof t == "number" ||
					Array.isArray(t) ||
					(typeof t == "string" &&
						(Ht.test(t) || t === "0") &&
						!t.startsWith("url("))
			  ),
	lk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function uk(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(Zo) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let o = lk.has(t) ? 1 : 0;
	return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const ck = /([a-z-]*)\(.*?\)/g,
	Wa = {
		...Ht,
		getAnimatableNone: (e) => {
			const t = e.match(ck);
			return t ? t.map(uk).join(" ") : e;
		},
	},
	fk = {
		...gh,
		color: ve,
		backgroundColor: ve,
		outlineColor: ve,
		fill: ve,
		stroke: ve,
		borderColor: ve,
		borderTopColor: ve,
		borderRightColor: ve,
		borderBottomColor: ve,
		borderLeftColor: ve,
		filter: Wa,
		WebkitFilter: Wa,
	},
	cu = (e) => fk[e];
function nm(e, t) {
	let n = cu(e);
	return (
		n !== Wa && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
	);
}
const rm = (e) => /^0[^.\s]+$/.test(e);
function dk(e) {
	if (typeof e == "number") return e === 0;
	if (e !== null) return e === "none" || e === "0" || rm(e);
}
function pk(e, t, n, r) {
	const i = $a(t, n);
	let o;
	Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
	const s = r.from !== void 0 ? r.from : e.get();
	let a;
	const l = [];
	for (let u = 0; u < o.length; u++)
		o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
			dk(o[u]) && l.push(u),
			typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
	if (i && l.length && a)
		for (let u = 0; u < l.length; u++) {
			const c = l[u];
			o[c] = nm(t, a);
		}
	return o;
}
function hk({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: o,
	repeatType: s,
	repeatDelay: a,
	from: l,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
function fu(e, t) {
	return e[t] || e.default || e;
}
const mk = { skipAnimations: !1 },
	du =
		(e, t, n, r = {}) =>
		(i) => {
			const o = fu(r, e) || {},
				s = o.delay || r.delay || 0;
			let { elapsed: a = 0 } = r;
			a = a - cn(s);
			const l = pk(t, e, n, o),
				u = l[0],
				c = l[l.length - 1],
				f = $a(e, u),
				d = $a(e, c);
			let g = {
				keyframes: l,
				velocity: t.getVelocity(),
				ease: "easeOut",
				...o,
				delay: -a,
				onUpdate: (y) => {
					t.set(y), o.onUpdate && o.onUpdate(y);
				},
				onComplete: () => {
					i(), o.onComplete && o.onComplete();
				},
			};
			if (
				(hk(o) || (g = { ...g, ...ak(e, g) }),
				g.duration && (g.duration = cn(g.duration)),
				g.repeatDelay && (g.repeatDelay = cn(g.repeatDelay)),
				!f || !d || u1.current || o.type === !1 || mk.skipAnimations)
			)
				return nk(g);
			if (
				!r.isHandoff &&
				t.owner &&
				t.owner.current instanceof HTMLElement &&
				!t.owner.getProps().onUpdate
			) {
				const y = tk(t, e, g);
				if (y) return y;
			}
			return Eo(g);
		};
function To(e) {
	return !!(Re(e) && e.add);
}
const im = (e) => /^\-?\d*\.?\d+$/.test(e);
function pu(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function hu(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
class mu {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return pu(this.subscriptions, t), () => hu(this.subscriptions, t);
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let o = 0; o < i; o++) {
					const s = this.subscriptions[o];
					s && s(t, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const gk = (e) => !isNaN(parseFloat(e));
class yk {
	constructor(t, n = {}) {
		(this.version = "10.18.0"),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (r, i = !0) => {
				(this.prev = this.current), (this.current = r);
				const { delta: o, timestamp: s } = he;
				this.lastUpdated !== s &&
					((this.timeDelta = o),
					(this.lastUpdated = s),
					$.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange &&
						this.events.velocityChange.notify(this.getVelocity()),
					i &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => $.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: r }) => {
				r !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange &&
						this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = t),
			(this.canTrackVelocity = gk(this.current)),
			(this.owner = n.owner);
	}
	onChange(t) {
		return this.on("change", t);
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new mu());
		const r = this.events[t].add(n);
		return t === "change"
			? () => {
					r(),
						$.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, n) {
		(this.passiveEffect = t), (this.stopPassiveEffect = n);
	}
	set(t, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(t, n)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, n, r) {
		this.set(n), (this.prev = t), (this.timeDelta = r);
	}
	jump(t) {
		this.updateAndNotify(t),
			(this.prev = t),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity
			? qh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
			: 0;
	}
	start(t) {
		return (
			this.stop(),
			new Promise((n) => {
				(this.hasAnimated = !0),
					(this.animation = t(n)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function qn(e, t) {
	return new yk(e, t);
}
const om = (e) => (t) => t.test(e),
	vk = { test: (e) => e === "auto", parse: (e) => e },
	sm = [wn, V, ot, St, C0, P0, vk],
	pr = (e) => sm.find(om(e)),
	kk = [...sm, ve, Ht],
	xk = (e) => kk.find(om(e));
function wk(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qn(n));
}
function Sk(e, t) {
	const n = qo(e, t);
	let {
		transitionEnd: r = {},
		transition: i = {},
		...o
	} = n ? e.makeTargetAnimatable(n, !1) : {};
	o = { ...o, ...r };
	for (const s in o) {
		const a = I0(o[s]);
		wk(e, s, a);
	}
}
function Pk(e, t, n) {
	var r, i;
	const o = Object.keys(t).filter((a) => !e.hasValue(a)),
		s = o.length;
	if (s)
		for (let a = 0; a < s; a++) {
			const l = o[a],
				u = t[l];
			let c = null;
			Array.isArray(u) && (c = u[0]),
				c === null &&
					(c =
						(i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
							null && i !== void 0
							? i
							: t[l]),
				c != null &&
					(typeof c == "string" && (im(c) || rm(c))
						? (c = parseFloat(c))
						: !xk(c) && Ht.test(u) && (c = nm(l, u)),
					e.addValue(l, qn(c, { owner: e })),
					n[l] === void 0 && (n[l] = c),
					c !== null && e.setBaseTarget(l, c));
		}
}
function Ck(e, t) {
	return t ? (t[e] || t.default || t).from : void 0;
}
function Ek(e, t, n) {
	const r = {};
	for (const i in e) {
		const o = Ck(i, t);
		if (o !== void 0) r[i] = o;
		else {
			const s = n.getValue(i);
			s && (r[i] = s.get());
		}
	}
	return r;
}
function Tk({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return (t[n] = !1), r;
}
function Lk(e, t) {
	const n = e.get();
	if (Array.isArray(t)) {
		for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
	} else return n !== t;
}
function am(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let {
		transition: o = e.getDefaultTransition(),
		transitionEnd: s,
		...a
	} = e.makeTargetAnimatable(t);
	const l = e.getValue("willChange");
	r && (o = r);
	const u = [],
		c = i && e.animationState && e.animationState.getState()[i];
	for (const f in a) {
		const d = e.getValue(f),
			g = a[f];
		if (!d || g === void 0 || (c && Tk(c, f))) continue;
		const y = { delay: n, elapsed: 0, ...fu(o || {}, f) };
		if (window.HandoffAppearAnimations) {
			const m = e.getProps()[lh];
			if (m) {
				const p = window.HandoffAppearAnimations(m, f, d, $);
				p !== null && ((y.elapsed = p), (y.isHandoff = !0));
			}
		}
		let v = !y.isHandoff && !Lk(d, g);
		if (
			(y.type === "spring" && (d.getVelocity() || y.velocity) && (v = !1),
			d.animation && (v = !1),
			v)
		)
			continue;
		d.start(du(f, d, g, e.shouldReduceMotion && xn.has(f) ? { type: !1 } : y));
		const x = d.animation;
		To(l) && (l.add(f), x.then(() => l.remove(f))), u.push(x);
	}
	return (
		s &&
			Promise.all(u).then(() => {
				s && Sk(e, s);
			}),
		u
	);
}
function Ha(e, t, n = {}) {
	const r = qo(e, t, n.custom);
	let { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	const o = r ? () => Promise.all(am(e, r, n)) : () => Promise.resolve(),
		s =
			e.variantChildren && e.variantChildren.size
				? (l = 0) => {
						const {
							delayChildren: u = 0,
							staggerChildren: c,
							staggerDirection: f,
						} = i;
						return Rk(e, t, u + l, c, f, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = i;
	if (a) {
		const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
		return l().then(() => u());
	} else return Promise.all([o(), s(n.delay)]);
}
function Rk(e, t, n = 0, r = 0, i = 1, o) {
	const s = [],
		a = (e.variantChildren.size - 1) * r,
		l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
	return (
		Array.from(e.variantChildren)
			.sort(Ak)
			.forEach((u, c) => {
				u.notify("AnimationStart", t),
					s.push(
						Ha(u, t, { ...o, delay: n + l(c) }).then(() =>
							u.notify("AnimationComplete", t)
						)
					);
			}),
		Promise.all(s)
	);
}
function Ak(e, t) {
	return e.sortNodePosition(t);
}
function Vk(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map((o) => Ha(e, o, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Ha(e, t, n);
	else {
		const i = typeof t == "function" ? qo(e, t, n.custom) : t;
		r = Promise.all(am(e, i, n));
	}
	return r.then(() => e.notify("AnimationComplete", t));
}
const Mk = [...Zl].reverse(),
	jk = Zl.length;
function Dk(e) {
	return (t) =>
		Promise.all(t.map(({ animation: n, options: r }) => Vk(e, n, r)));
}
function Nk(e) {
	let t = Dk(e);
	const n = _k();
	let r = !0;
	const i = (l, u) => {
		const c = qo(e, u);
		if (c) {
			const { transition: f, transitionEnd: d, ...g } = c;
			l = { ...l, ...g, ...d };
		}
		return l;
	};
	function o(l) {
		t = l(e);
	}
	function s(l, u) {
		const c = e.getProps(),
			f = e.getVariantContext(!0) || {},
			d = [],
			g = new Set();
		let y = {},
			v = 1 / 0;
		for (let m = 0; m < jk; m++) {
			const p = Mk[m],
				h = n[p],
				k = c[p] !== void 0 ? c[p] : f[p],
				w = Jr(k),
				T = p === u ? h.isActive : null;
			T === !1 && (v = m);
			let E = k === f[p] && k !== c[p] && w;
			if (
				(E && r && e.manuallyAnimateOnMount && (E = !1),
				(h.protectedKeys = { ...y }),
				(!h.isActive && T === null) ||
					(!k && !h.prevProp) ||
					Xo(k) ||
					typeof k == "boolean")
			)
				continue;
			let N =
					Fk(h.prevProp, k) ||
					(p === u && h.isActive && !E && w) ||
					(m > v && w),
				j = !1;
			const ie = Array.isArray(k) ? k : [k];
			let le = ie.reduce(i, {});
			T === !1 && (le = {});
			const { prevResolvedValues: ye = {} } = h,
				oe = { ...ye, ...le },
				xt = (b) => {
					(N = !0),
						g.has(b) && ((j = !0), g.delete(b)),
						(h.needsAnimating[b] = !0);
				};
			for (const b in oe) {
				const Oe = le[b],
					L = ye[b];
				if (y.hasOwnProperty(b)) continue;
				let M = !1;
				So(Oe) && So(L) ? (M = !Vh(Oe, L)) : (M = Oe !== L),
					M
						? Oe !== void 0
							? xt(b)
							: g.add(b)
						: Oe !== void 0 && g.has(b)
						? xt(b)
						: (h.protectedKeys[b] = !0);
			}
			(h.prevProp = k),
				(h.prevResolvedValues = le),
				h.isActive && (y = { ...y, ...le }),
				r && e.blockInitialAnimation && (N = !1),
				N &&
					(!E || j) &&
					d.push(
						...ie.map((b) => ({ animation: b, options: { type: p, ...l } }))
					);
		}
		if (g.size) {
			const m = {};
			g.forEach((p) => {
				const h = e.getBaseTarget(p);
				h !== void 0 && (m[p] = h);
			}),
				d.push({ animation: m });
		}
		let x = !!d.length;
		return (
			r &&
				(c.initial === !1 || c.initial === c.animate) &&
				!e.manuallyAnimateOnMount &&
				(x = !1),
			(r = !1),
			x ? t(d) : Promise.resolve()
		);
	}
	function a(l, u, c) {
		var f;
		if (n[l].isActive === u) return Promise.resolve();
		(f = e.variantChildren) === null ||
			f === void 0 ||
			f.forEach((g) => {
				var y;
				return (y = g.animationState) === null || y === void 0
					? void 0
					: y.setActive(l, u);
			}),
			(n[l].isActive = u);
		const d = s(c, l);
		for (const g in n) n[g].protectedKeys = {};
		return d;
	}
	return {
		animateChanges: s,
		setActive: a,
		setAnimateFunction: o,
		getState: () => n,
	};
}
function Fk(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vh(t, e) : !1;
}
function Jt(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
	};
}
function _k() {
	return {
		animate: Jt(!0),
		whileInView: Jt(),
		whileHover: Jt(),
		whileTap: Jt(),
		whileDrag: Jt(),
		whileFocus: Jt(),
		exit: Jt(),
	};
}
class Ok extends Yt {
	constructor(t) {
		super(t), t.animationState || (t.animationState = Nk(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		this.unmount(), Xo(t) && (this.unmount = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let Bk = 0;
class Ik extends Yt {
	constructor() {
		super(...arguments), (this.id = Bk++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const {
				isPresent: t,
				onExitComplete: n,
				custom: r,
			} = this.node.presenceContext,
			{ isPresent: i } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === i) return;
		const o = this.node.animationState.setActive("exit", !t, {
			custom: r ?? this.node.getProps().custom,
		});
		n && !t && o.then(() => n(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const zk = { animation: { Feature: Ok }, exit: { Feature: Ik } },
	Xc = (e, t) => Math.abs(e - t);
function Uk(e, t) {
	const n = Xc(e.x, t.x),
		r = Xc(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
class lm {
	constructor(
		t,
		n,
		{ transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const f = Os(this.lastMoveEventInfo, this.history),
					d = this.startEvent !== null,
					g = Uk(f.offset, { x: 0, y: 0 }) >= 3;
				if (!d && !g) return;
				const { point: y } = f,
					{ timestamp: v } = he;
				this.history.push({ ...y, timestamp: v });
				const { onStart: x, onMove: m } = this.handlers;
				d ||
					(x && x(this.lastMoveEvent, f),
					(this.startEvent = this.lastMoveEvent)),
					m && m(this.lastMoveEvent, f);
			}),
			(this.handlePointerMove = (f, d) => {
				(this.lastMoveEvent = f),
					(this.lastMoveEventInfo = _s(d, this.transformPagePoint)),
					$.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (f, d) => {
				this.end();
				const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
				if (
					(this.dragSnapToOrigin && v && v(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return;
				const x = Os(
					f.type === "pointercancel"
						? this.lastMoveEventInfo
						: _s(d, this.transformPagePoint),
					this.history
				);
				this.startEvent && g && g(f, x), y && y(f, x);
			}),
			!Eh(t))
		)
			return;
		(this.dragSnapToOrigin = o),
			(this.handlers = n),
			(this.transformPagePoint = r),
			(this.contextWindow = i || window);
		const s = Jo(t),
			a = _s(s, this.transformPagePoint),
			{ point: l } = a,
			{ timestamp: u } = he;
		this.history = [{ ...l, timestamp: u }];
		const { onSessionStart: c } = n;
		c && c(t, Os(a, this.history)),
			(this.removeListeners = zt(
				dt(this.contextWindow, "pointermove", this.handlePointerMove),
				dt(this.contextWindow, "pointerup", this.handlePointerUp),
				dt(this.contextWindow, "pointercancel", this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), vt(this.updatePoint);
	}
}
function _s(e, t) {
	return t ? { point: t(e.point) } : e;
}
function bc(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function Os({ point: e }, t) {
	return {
		point: e,
		delta: bc(e, um(t)),
		offset: bc(e, $k(t)),
		velocity: Wk(t, 0.1),
	};
}
function $k(e) {
	return e[0];
}
function um(e) {
	return e[e.length - 1];
}
function Wk(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let n = e.length - 1,
		r = null;
	const i = um(e);
	for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > cn(t))); ) n--;
	if (!r) return { x: 0, y: 0 };
	const o = pt(i.timestamp - r.timestamp);
	if (o === 0) return { x: 0, y: 0 };
	const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
	return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ne(e) {
	return e.max - e.min;
}
function Ka(e, t = 0, n = 0.01) {
	return Math.abs(e - t) <= n;
}
function Zc(e, t, n, r = 0.5) {
	(e.origin = r),
		(e.originPoint = G(t.min, t.max, e.origin)),
		(e.scale = Ne(n) / Ne(t)),
		(Ka(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = G(n.min, n.max, e.origin) - e.originPoint),
		(Ka(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Mr(e, t, n, r) {
	Zc(e.x, t.x, n.x, r ? r.originX : void 0),
		Zc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Jc(e, t, n) {
	(e.min = n.min + t.min), (e.max = e.min + Ne(t));
}
function Hk(e, t, n) {
	Jc(e.x, t.x, n.x), Jc(e.y, t.y, n.y);
}
function qc(e, t, n) {
	(e.min = t.min - n.min), (e.max = e.min + Ne(t));
}
function jr(e, t, n) {
	qc(e.x, t.x, n.x), qc(e.y, t.y, n.y);
}
function Kk(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? G(t, e, r.min) : Math.max(e, t))
			: n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
		e
	);
}
function ef(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	};
}
function Gk(e, { top: t, left: n, bottom: r, right: i }) {
	return { x: ef(e.x, n, i), y: ef(e.y, t, r) };
}
function tf(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Qk(e, t) {
	return { x: tf(e.x, t.x), y: tf(e.y, t.y) };
}
function Yk(e, t) {
	let n = 0.5;
	const r = Ne(e),
		i = Ne(t);
	return (
		i > r
			? (n = ei(t.min, t.max - r, e.min))
			: r > i && (n = ei(e.min, e.max - i, t.min)),
		Wt(0, 1, n)
	);
}
function Xk(e, t) {
	const n = {};
	return (
		t.min !== void 0 && (n.min = t.min - e.min),
		t.max !== void 0 && (n.max = t.max - e.min),
		n
	);
}
const Ga = 0.35;
function bk(e = Ga) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = Ga),
		{ x: nf(e, "left", "right"), y: nf(e, "top", "bottom") }
	);
}
function nf(e, t, n) {
	return { min: rf(e, t), max: rf(e, n) };
}
function rf(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
const of = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Bn = () => ({ x: of(), y: of() }),
	sf = () => ({ min: 0, max: 0 }),
	q = () => ({ x: sf(), y: sf() });
function Ie(e) {
	return [e("x"), e("y")];
}
function cm({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Zk({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Jk(e, t) {
	if (!t) return e;
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Bs(e) {
	return e === void 0 || e === 1;
}
function Qa({ scale: e, scaleX: t, scaleY: n }) {
	return !Bs(e) || !Bs(t) || !Bs(n);
}
function tn(e) {
	return Qa(e) || fm(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function fm(e) {
	return af(e.x) || af(e.y);
}
function af(e) {
	return e && e !== "0%";
}
function Lo(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i;
}
function lf(e, t, n, r, i) {
	return i !== void 0 && (e = Lo(e, i, r)), Lo(e, n, r) + t;
}
function Ya(e, t = 0, n = 1, r, i) {
	(e.min = lf(e.min, t, n, r, i)), (e.max = lf(e.max, t, n, r, i));
}
function dm(e, { x: t, y: n }) {
	Ya(e.x, t.translate, t.scale, t.originPoint),
		Ya(e.y, n.translate, n.scale, n.originPoint);
}
function qk(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let o, s;
	for (let a = 0; a < i; a++) {
		(o = n[a]), (s = o.projectionDelta);
		const l = o.instance;
		(l && l.style && l.style.display === "contents") ||
			(r &&
				o.options.layoutScroll &&
				o.scroll &&
				o !== o.root &&
				In(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
			s && ((t.x *= s.x.scale), (t.y *= s.y.scale), dm(e, s)),
			r && tn(o.latestValues) && In(e, o.latestValues));
	}
	(t.x = uf(t.x)), (t.y = uf(t.y));
}
function uf(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
		? e
		: 1;
}
function Et(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function cf(e, t, [n, r, i]) {
	const o = t[i] !== void 0 ? t[i] : 0.5,
		s = G(e.min, e.max, o);
	Ya(e, t[n], t[r], s, t.scale);
}
const ex = ["x", "scaleX", "originX"],
	tx = ["y", "scaleY", "originY"];
function In(e, t) {
	cf(e.x, t, ex), cf(e.y, t, tx);
}
function pm(e, t) {
	return cm(Jk(e.getBoundingClientRect(), t));
}
function nx(e, t, n) {
	const r = pm(e, n),
		{ scroll: i } = t;
	return i && (Et(r.x, i.offset.x), Et(r.y, i.offset.y)), r;
}
const hm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	rx = new WeakMap();
class ix {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = q()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		const i = (c) => {
				const { dragSnapToOrigin: f } = this.getProps();
				f ? this.pauseAnimation() : this.stopAnimation(),
					n && this.snapToCursor(Jo(c, "page").point);
			},
			o = (c, f) => {
				const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
				if (
					d &&
					!g &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = Lh(d)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					Ie((x) => {
						let m = this.getAxisMotionValue(x).get() || 0;
						if (ot.test(m)) {
							const { projection: p } = this.visualElement;
							if (p && p.layout) {
								const h = p.layout.layoutBox[x];
								h && (m = Ne(h) * (parseFloat(m) / 100));
							}
						}
						this.originPoint[x] = m;
					}),
					y && $.update(() => y(c, f), !1, !0);
				const { animationState: v } = this.visualElement;
				v && v.setActive("whileDrag", !0);
			},
			s = (c, f) => {
				const {
					dragPropagation: d,
					dragDirectionLock: g,
					onDirectionLock: y,
					onDrag: v,
				} = this.getProps();
				if (!d && !this.openGlobalLock) return;
				const { offset: x } = f;
				if (g && this.currentDirection === null) {
					(this.currentDirection = ox(x)),
						this.currentDirection !== null && y && y(this.currentDirection);
					return;
				}
				this.updateAxis("x", f.point, x),
					this.updateAxis("y", f.point, x),
					this.visualElement.render(),
					v && v(c, f);
			},
			a = (c, f) => this.stop(c, f),
			l = () =>
				Ie((c) => {
					var f;
					return (
						this.getAnimationState(c) === "paused" &&
						((f = this.getAxisMotionValue(c).animation) === null || f === void 0
							? void 0
							: f.play())
					);
				}),
			{ dragSnapToOrigin: u } = this.getProps();
		this.panSession = new lm(
			t,
			{
				onSessionStart: i,
				onStart: o,
				onMove: s,
				onSessionEnd: a,
				resumeAnimation: l,
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: u,
				contextWindow: hm(this.visualElement),
			}
		);
	}
	stop(t, n) {
		const r = this.isDragging;
		if ((this.cancel(), !r)) return;
		const { velocity: i } = n;
		this.startAnimation(i);
		const { onDragEnd: o } = this.getProps();
		o && $.update(() => o(t, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: n } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: r } = this.getProps();
		!r &&
			this.openGlobalLock &&
			(this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive("whileDrag", !1);
	}
	updateAxis(t, n, r) {
		const { drag: i } = this.getProps();
		if (!r || !ji(t, i, this.currentDirection)) return;
		const o = this.getAxisMotionValue(t);
		let s = this.originPoint[t] + r[t];
		this.constraints &&
			this.constraints[t] &&
			(s = Kk(s, this.constraints[t], this.elastic[t])),
			o.set(s);
	}
	resolveConstraints() {
		var t;
		const { dragConstraints: n, dragElastic: r } = this.getProps(),
			i =
				this.visualElement.projection && !this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (t = this.visualElement.projection) === null || t === void 0
					? void 0
					: t.layout,
			o = this.constraints;
		n && _n(n)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: n && i
			? (this.constraints = Gk(i.layoutBox, n))
			: (this.constraints = !1),
			(this.elastic = bk(r)),
			o !== this.constraints &&
				i &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Ie((s) => {
					this.getAxisMotionValue(s) &&
						(this.constraints[s] = Xk(i.layoutBox[s], this.constraints[s]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
		if (!t || !_n(t)) return !1;
		const r = t.current,
			{ projection: i } = this.visualElement;
		if (!i || !i.layout) return !1;
		const o = nx(r, i.root, this.visualElement.getTransformPagePoint());
		let s = Qk(i.layout.layoutBox, o);
		if (n) {
			const a = n(Zk(s));
			(this.hasMutatedConstraints = !!a), a && (s = cm(a));
		}
		return s;
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: i,
				dragTransition: o,
				dragSnapToOrigin: s,
				onDragTransitionEnd: a,
			} = this.getProps(),
			l = this.constraints || {},
			u = Ie((c) => {
				if (!ji(c, n, this.currentDirection)) return;
				let f = (l && l[c]) || {};
				s && (f = { min: 0, max: 0 });
				const d = i ? 200 : 1e6,
					g = i ? 40 : 1e7,
					y = {
						type: "inertia",
						velocity: r ? t[c] : 0,
						bounceStiffness: d,
						bounceDamping: g,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...o,
						...f,
					};
				return this.startAxisValueAnimation(c, y);
			});
		return Promise.all(u).then(a);
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return r.start(du(t, r, 0, n));
	}
	stopAnimation() {
		Ie((t) => this.getAxisMotionValue(t).stop());
	}
	pauseAnimation() {
		Ie((t) => {
			var n;
			return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
				? void 0
				: n.pause();
		});
	}
	getAnimationState(t) {
		var n;
		return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
			? void 0
			: n.state;
	}
	getAxisMotionValue(t) {
		const n = "_drag" + t.toUpperCase(),
			r = this.visualElement.getProps(),
			i = r[n];
		return (
			i ||
			this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
		);
	}
	snapToCursor(t) {
		Ie((n) => {
			const { drag: r } = this.getProps();
			if (!ji(n, r, this.currentDirection)) return;
			const { projection: i } = this.visualElement,
				o = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const { min: s, max: a } = i.layout.layoutBox[n];
				o.set(t[n] - G(s, a, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!_n(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		Ie((s) => {
			const a = this.getAxisMotionValue(s);
			if (a) {
				const l = a.get();
				i[s] = Yk({ min: l, max: l }, this.constraints[s]);
			}
		});
		const { transformTemplate: o } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = o ? o({}, "") : "none"),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			Ie((s) => {
				if (!ji(s, t, null)) return;
				const a = this.getAxisMotionValue(s),
					{ min: l, max: u } = this.constraints[s];
				a.set(G(l, u, i[s]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		rx.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = dt(t, "pointerdown", (l) => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(l);
			}),
			r = () => {
				const { dragConstraints: l } = this.getProps();
				_n(l) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: i } = this.visualElement,
			o = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
		const s = ct(window, "resize", () => this.scalePositionWithinConstraints()),
			a = i.addEventListener(
				"didUpdate",
				({ delta: l, hasLayoutChanged: u }) => {
					this.isDragging &&
						u &&
						(Ie((c) => {
							const f = this.getAxisMotionValue(c);
							f &&
								((this.originPoint[c] += l[c].translate),
								f.set(f.get() + l[c].translate));
						}),
						this.visualElement.render());
				}
			);
		return () => {
			s(), n(), o(), a && a();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: o = !1,
				dragElastic: s = Ga,
				dragMomentum: a = !0,
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: o,
			dragElastic: s,
			dragMomentum: a,
		};
	}
}
function ji(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function ox(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class sx extends Yt {
	constructor(t) {
		super(t),
			(this.removeGroupControls = J),
			(this.removeListeners = J),
			(this.controls = new ix(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || J);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const ff = (e) => (t, n) => {
	e && $.update(() => e(t, n));
};
class ax extends Yt {
	constructor() {
		super(...arguments), (this.removePointerDownListener = J);
	}
	onPointerDown(t) {
		this.session = new lm(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: hm(this.node),
		});
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i,
		} = this.node.getProps();
		return {
			onSessionStart: ff(t),
			onStart: ff(n),
			onMove: r,
			onEnd: (o, s) => {
				delete this.session, i && $.update(() => i(o, s));
			},
		};
	}
	mount() {
		this.removePointerDownListener = dt(this.node.current, "pointerdown", (t) =>
			this.onPointerDown(t)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
function lx() {
	const e = S.useContext(Xl);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: n, register: r } = e,
		i = S.useId();
	return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Gi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function df(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (V.test(e)) e = parseFloat(e);
				else return e;
			const n = df(e, t.target.x),
				r = df(e, t.target.y);
			return `${n}% ${r}%`;
		},
	},
	ux = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				i = Ht.parse(e);
			if (i.length > 5) return r;
			const o = Ht.createTransformer(e),
				s = typeof i[0] != "number" ? 1 : 0,
				a = n.x.scale * t.x,
				l = n.y.scale * t.y;
			(i[0 + s] /= a), (i[1 + s] /= l);
			const u = G(a, l, 0.5);
			return (
				typeof i[2 + s] == "number" && (i[2 + s] /= u),
				typeof i[3 + s] == "number" && (i[3 + s] /= u),
				o(i)
			);
		},
	};
class cx extends Ao.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
				layoutId: i,
			} = this.props,
			{ projection: o } = t;
		g0(fx),
			o &&
				(n.group && n.group.add(o),
				r && r.register && i && r.register(o),
				o.root.didUpdate(),
				o.addEventListener("animationComplete", () => {
					this.safeToRemove();
				}),
				o.setOptions({
					...o.options,
					onExitComplete: () => this.safeToRemove(),
				})),
			(Gi.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: n,
				visualElement: r,
				drag: i,
				isPresent: o,
			} = this.props,
			s = r.projection;
		return (
			s &&
				((s.isPresent = o),
				i || t.layoutDependency !== n || n === void 0
					? s.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== o &&
					(o
						? s.promote()
						: s.relegate() ||
						  $.postRender(() => {
								const a = s.getStack();
								(!a || !a.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t &&
			(t.root.didUpdate(),
			queueMicrotask(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
			} = this.props,
			{ projection: i } = t;
		i &&
			(i.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(i),
			r && r.deregister && r.deregister(i));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function mm(e) {
	const [t, n] = lx(),
		r = S.useContext(ch);
	return Ao.createElement(cx, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: S.useContext(fh),
		isPresent: t,
		safeToRemove: n,
	});
}
const fx = {
		borderRadius: {
			...hr,
			applyTo: [
				"borderTopLeftRadius",
				"borderTopRightRadius",
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
			],
		},
		borderTopLeftRadius: hr,
		borderTopRightRadius: hr,
		borderBottomLeftRadius: hr,
		borderBottomRightRadius: hr,
		boxShadow: ux,
	},
	gm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	dx = gm.length,
	pf = (e) => (typeof e == "string" ? parseFloat(e) : e),
	hf = (e) => typeof e == "number" || V.test(e);
function px(e, t, n, r, i, o) {
	i
		? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, hx(r))),
		  (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, mx(r))))
		: o &&
		  (e.opacity = G(
				t.opacity !== void 0 ? t.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ));
	for (let s = 0; s < dx; s++) {
		const a = `border${gm[s]}Radius`;
		let l = mf(t, a),
			u = mf(n, a);
		if (l === void 0 && u === void 0) continue;
		l || (l = 0),
			u || (u = 0),
			l === 0 || u === 0 || hf(l) === hf(u)
				? ((e[a] = Math.max(G(pf(l), pf(u), r), 0)),
				  (ot.test(u) || ot.test(l)) && (e[a] += "%"))
				: (e[a] = u);
	}
	(t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function mf(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const hx = ym(0, 0.5, Ih),
	mx = ym(0.5, 0.95, J);
function ym(e, t, n) {
	return (r) => (r < e ? 0 : r > t ? 1 : n(ei(e, t, r)));
}
function gf(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function Be(e, t) {
	gf(e.x, t.x), gf(e.y, t.y);
}
function yf(e, t, n, r, i) {
	return (
		(e -= t), (e = Lo(e, 1 / n, r)), i !== void 0 && (e = Lo(e, 1 / i, r)), e
	);
}
function gx(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
	if (
		(ot.test(t) &&
			((t = parseFloat(t)), (t = G(s.min, s.max, t / 100) - s.min)),
		typeof t != "number")
	)
		return;
	let a = G(o.min, o.max, r);
	e === o && (a -= t),
		(e.min = yf(e.min, t, n, a, i)),
		(e.max = yf(e.max, t, n, a, i));
}
function vf(e, t, [n, r, i], o, s) {
	gx(e, t[n], t[r], t[i], t.scale, o, s);
}
const yx = ["x", "scaleX", "originX"],
	vx = ["y", "scaleY", "originY"];
function kf(e, t, n, r) {
	vf(e.x, t, yx, n ? n.x : void 0, r ? r.x : void 0),
		vf(e.y, t, vx, n ? n.y : void 0, r ? r.y : void 0);
}
function xf(e) {
	return e.translate === 0 && e.scale === 1;
}
function vm(e) {
	return xf(e.x) && xf(e.y);
}
function kx(e, t) {
	return (
		e.x.min === t.x.min &&
		e.x.max === t.x.max &&
		e.y.min === t.y.min &&
		e.y.max === t.y.max
	);
}
function km(e, t) {
	return (
		Math.round(e.x.min) === Math.round(t.x.min) &&
		Math.round(e.x.max) === Math.round(t.x.max) &&
		Math.round(e.y.min) === Math.round(t.y.min) &&
		Math.round(e.y.max) === Math.round(t.y.max)
	);
}
function wf(e) {
	return Ne(e.x) / Ne(e.y);
}
class xx {
	constructor() {
		this.members = [];
	}
	add(t) {
		pu(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if (
			(hu(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(t) {
		const n = this.members.findIndex((i) => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const o = this.members[i];
			if (o.isPresent !== !1) {
				r = o;
				break;
			}
		}
		return r ? (this.promote(r), !0) : !1;
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues = r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: i } = t.options;
			i === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			const { options: n, resumingFrom: r } = t;
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((t) => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function Sf(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		o = e.y.translate / t.y;
	if (
		((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const { rotate: l, rotateX: u, rotateY: c } = n;
		l && (r += `rotate(${l}deg) `),
			u && (r += `rotateX(${u}deg) `),
			c && (r += `rotateY(${c}deg) `);
	}
	const s = e.x.scale * t.x,
		a = e.y.scale * t.y;
	return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const wx = (e, t) => e.depth - t.depth;
class Sx {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		pu(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		hu(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(wx),
			(this.isDirty = !1),
			this.children.forEach(t);
	}
}
function Px(e, t) {
	const n = performance.now(),
		r = ({ timestamp: i }) => {
			const o = i - n;
			o >= t && (vt(r), e(o - t));
		};
	return $.read(r, !0), () => vt(r);
}
function Cx(e) {
	window.MotionDebug && window.MotionDebug.record(e);
}
function Ex(e) {
	return e instanceof SVGElement && e.tagName !== "svg";
}
function Tx(e, t, n) {
	const r = Re(e) ? e : qn(e);
	return r.start(du("", r, t, n)), r.animation;
}
const Pf = ["", "X", "Y", "Z"],
	Lx = { visibility: "hidden" },
	Cf = 1e3;
let Rx = 0;
const nn = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function xm({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i,
}) {
	return class {
		constructor(s = {}, a = t == null ? void 0 : t()) {
			(this.id = Rx++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(this.projectionUpdateScheduled = !1),
						(nn.totalNodes =
							nn.resolvedTargetDeltas =
							nn.recalculatedProjection =
								0),
						this.nodes.forEach(Mx),
						this.nodes.forEach(_x),
						this.nodes.forEach(Ox),
						this.nodes.forEach(jx),
						Cx(nn);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = s),
				(this.root = a ? a.root || a : this),
				(this.path = a ? [...a.path, a] : []),
				(this.parent = a),
				(this.depth = a ? a.depth + 1 : 0);
			for (let l = 0; l < this.path.length; l++)
				this.path[l].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Sx());
		}
		addEventListener(s, a) {
			return (
				this.eventHandlers.has(s) || this.eventHandlers.set(s, new mu()),
				this.eventHandlers.get(s).add(a)
			);
		}
		notifyListeners(s, ...a) {
			const l = this.eventHandlers.get(s);
			l && l.notify(...a);
		}
		hasListeners(s) {
			return this.eventHandlers.has(s);
		}
		mount(s, a = this.root.hasTreeAnimated) {
			if (this.instance) return;
			(this.isSVG = Ex(s)), (this.instance = s);
			const { layoutId: l, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(s),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				a && (u || l) && (this.isLayoutDirty = !0),
				e)
			) {
				let f;
				const d = () => (this.root.updateBlockedByResize = !1);
				e(s, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = Px(d, 250)),
						Gi.hasAnimatedSinceResize &&
							((Gi.hasAnimatedSinceResize = !1), this.nodes.forEach(Tf));
				});
			}
			l && this.root.registerSharedNode(l, this),
				this.options.animate !== !1 &&
					c &&
					(l || u) &&
					this.addEventListener(
						"didUpdate",
						({
							delta: f,
							hasLayoutChanged: d,
							hasRelativeTargetChanged: g,
							layout: y,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const v =
									this.options.transition || c.getDefaultTransition() || $x,
								{ onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
									c.getProps(),
								p = !this.targetLayout || !km(this.targetLayout, y) || g,
								h = !d && g;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								h ||
								(d && (p || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, h);
								const k = { ...fu(v, "layout"), onPlay: x, onComplete: m };
								(c.shouldReduceMotion || this.options.layoutRoot) &&
									((k.delay = 0), (k.type = !1)),
									this.startAnimation(k);
							} else
								d || Tf(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = y;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const s = this.getStack();
			s && s.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				vt(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(Bx),
				this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: s } = this.options;
			return s && s.getProps().transformTemplate;
		}
		willUpdate(s = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (
				(!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const f = this.path[c];
				(f.shouldResetTransform = !0),
					f.updateScroll("snapshot"),
					f.options.layoutRoot && f.willUpdate(!1);
			}
			const { layoutId: a, layout: l } = this.options;
			if (a === void 0 && !l) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
				this.updateSnapshot(),
				s && this.notifyListeners("willUpdate");
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ef);
				return;
			}
			this.isUpdating || this.nodes.forEach(Nx),
				(this.isUpdating = !1),
				this.nodes.forEach(Fx),
				this.nodes.forEach(Ax),
				this.nodes.forEach(Vx),
				this.clearAllSnapshots();
			const a = performance.now();
			(he.delta = Wt(0, 1e3 / 60, a - he.timestamp)),
				(he.timestamp = a),
				(he.isProcessing = !0),
				Rs.update.process(he),
				Rs.preRender.process(he),
				Rs.render.process(he),
				(he.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), queueMicrotask(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Dx), this.sharedNodes.forEach(Ix);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				$.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			$.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
			const s = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = q()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement: a } = this.options;
			a &&
				a.notify(
					"LayoutMeasure",
					this.layout.layoutBox,
					s ? s.layoutBox : void 0
				);
		}
		updateScroll(s = "measure") {
			let a = !!(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === s &&
				(a = !1),
				a &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: s,
						isRoot: r(this.instance),
						offset: n(this.instance),
					});
		}
		resetTransform() {
			if (!i) return;
			const s = this.isLayoutDirty || this.shouldResetTransform,
				a = this.projectionDelta && !vm(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			s &&
				(a || tn(this.latestValues) || c) &&
				(i(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender());
		}
		measure(s = !0) {
			const a = this.measurePageBox();
			let l = this.removeElementScroll(a);
			return (
				s && (l = this.removeTransform(l)),
				Wx(l),
				{
					animationId: this.root.animationId,
					measuredBox: a,
					layoutBox: l,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			const { visualElement: s } = this.options;
			if (!s) return q();
			const a = s.measureViewportBox(),
				{ scroll: l } = this.root;
			return l && (Et(a.x, l.offset.x), Et(a.y, l.offset.y)), a;
		}
		removeElementScroll(s) {
			const a = q();
			Be(a, s);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l],
					{ scroll: c, options: f } = u;
				if (u !== this.root && c && f.layoutScroll) {
					if (c.isRoot) {
						Be(a, s);
						const { scroll: d } = this.root;
						d && (Et(a.x, -d.offset.x), Et(a.y, -d.offset.y));
					}
					Et(a.x, c.offset.x), Et(a.y, c.offset.y);
				}
			}
			return a;
		}
		applyTransform(s, a = !1) {
			const l = q();
			Be(l, s);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!a &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					In(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					tn(c.latestValues) && In(l, c.latestValues);
			}
			return tn(this.latestValues) && In(l, this.latestValues), l;
		}
		removeTransform(s) {
			const a = q();
			Be(a, s);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l];
				if (!u.instance || !tn(u.latestValues)) continue;
				Qa(u.latestValues) && u.updateSnapshot();
				const c = q(),
					f = u.measurePageBox();
				Be(c, f),
					kf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return tn(this.latestValues) && kf(a, this.latestValues), a;
		}
		setTargetDelta(s) {
			(this.targetDelta = s),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0);
		}
		setOptions(s) {
			this.options = {
				...this.options,
				...s,
				crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== he.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(s = !1) {
			var a;
			const l = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = l.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== l;
			if (
				!(
					s ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((a = this.parent) === null || a === void 0) &&
						a.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: f, layoutId: d } = this.options;
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = he.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const g = this.getClosestProjectingParent();
					g && g.layout && this.animationProgress !== 1
						? ((this.relativeParent = g),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = q()),
						  (this.relativeTargetOrigin = q()),
						  jr(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								g.layout.layoutBox
						  ),
						  Be(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target ||
							((this.target = q()), (this.targetWithTransforms = q())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  Hk(
									this.target,
									this.relativeTarget,
									this.relativeParent.target
							  ))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: Be(this.target, this.layout.layoutBox),
							  dm(this.target, this.targetDelta))
							: Be(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const g = this.getClosestProjectingParent();
						g &&
						!!g.resumingFrom == !!this.resumingFrom &&
						!g.options.layoutScroll &&
						g.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = g),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = q()),
							  (this.relativeTargetOrigin = q()),
							  jr(this.relativeTargetOrigin, this.target, g.target),
							  Be(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					nn.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					Qa(this.parent.latestValues) ||
					fm(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var s;
			const a = this.getLead(),
				l = !!this.resumingFrom || this !== a;
			let u = !0;
			if (
				((this.isProjectionDirty ||
					(!((s = this.parent) === null || s === void 0) &&
						s.isProjectionDirty)) &&
					(u = !1),
				l &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(u = !1),
				this.resolvedRelativeTargetAt === he.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: f } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || f))
			)
				return;
			Be(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				g = this.treeScale.y;
			qk(this.layoutCorrected, this.treeScale, this.path, l),
				a.layout &&
					!a.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					(a.target = a.layout.layoutBox);
			const { target: y } = a;
			if (!y) {
				this.projectionTransform &&
					((this.projectionDelta = Bn()),
					(this.projectionTransform = "none"),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = Bn()),
				(this.projectionDeltaWithTransform = Bn()));
			const v = this.projectionTransform;
			Mr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
				(this.projectionTransform = Sf(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== v ||
					this.treeScale.x !== d ||
					this.treeScale.y !== g) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners("projectionUpdate", y)),
				nn.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(s = !0) {
			if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
				const a = this.getStack();
				a && a.scheduleRender();
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0);
		}
		setAnimationOrigin(s, a = !1) {
			const l = this.snapshot,
				u = l ? l.latestValues : {},
				c = { ...this.latestValues },
				f = Bn();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a);
			const d = q(),
				g = l ? l.source : void 0,
				y = this.layout ? this.layout.source : void 0,
				v = g !== y,
				x = this.getStack(),
				m = !x || x.members.length <= 1,
				p = !!(v && !m && this.options.crossfade === !0 && !this.path.some(Ux));
			this.animationProgress = 0;
			let h;
			(this.mixTargetDelta = (k) => {
				const w = k / 1e3;
				Lf(f.x, s.x, w),
					Lf(f.y, s.y, w),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(jr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						zx(this.relativeTarget, this.relativeTargetOrigin, d, w),
						h && kx(this.relativeTarget, h) && (this.isProjectionDirty = !1),
						h || (h = q()),
						Be(h, this.relativeTarget)),
					v &&
						((this.animationValues = c), px(c, u, this.latestValues, w, p, m)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = w);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(s) {
			this.notifyListeners("animationStart"),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation &&
					(vt(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = $.update(() => {
					(Gi.hasAnimatedSinceResize = !0),
						(this.currentAnimation = Tx(0, Cf, {
							...s,
							onUpdate: (a) => {
								this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
							},
							onComplete: () => {
								s.onComplete && s.onComplete(), this.completeAnimation();
							},
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const s = this.getStack();
			s && s.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(Cf),
				this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const s = this.getLead();
			let {
				targetWithTransforms: a,
				target: l,
				layout: u,
				latestValues: c,
			} = s;
			if (!(!a || !l || !u)) {
				if (
					this !== s &&
					this.layout &&
					u &&
					wm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					l = this.target || q();
					const f = Ne(this.layout.layoutBox.x);
					(l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
					const d = Ne(this.layout.layoutBox.y);
					(l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
				}
				Be(a, l),
					In(a, c),
					Mr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
			}
		}
		registerSharedNode(s, a) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new xx()),
				this.sharedNodes.get(s).add(a);
			const u = a.options.initialPromotionConfig;
			a.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(a)
						: void 0,
			});
		}
		isLead() {
			const s = this.getStack();
			return s ? s.lead === this : !0;
		}
		getLead() {
			var s;
			const { layoutId: a } = this.options;
			return a
				? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
						this
				: this;
		}
		getPrevLead() {
			var s;
			const { layoutId: a } = this.options;
			return a
				? (s = this.getStack()) === null || s === void 0
					? void 0
					: s.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: s } = this.options;
			if (s) return this.root.sharedNodes.get(s);
		}
		promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
			const u = this.getStack();
			u && u.promote(this, l),
				s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				a && this.setOptions({ transition: a });
		}
		relegate() {
			const s = this.getStack();
			return s ? s.relegate(this) : !1;
		}
		resetRotation() {
			const { visualElement: s } = this.options;
			if (!s) return;
			let a = !1;
			const { latestValues: l } = s;
			if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
				return;
			const u = {};
			for (let c = 0; c < Pf.length; c++) {
				const f = "rotate" + Pf[c];
				l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
			}
			s.render();
			for (const c in u) s.setStaticValue(c, u[c]);
			s.scheduleRender();
		}
		getProjectionStyles(s) {
			var a, l;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return Lx;
			const u = { visibility: "" },
				c = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ""),
					(u.pointerEvents = Ki(s == null ? void 0 : s.pointerEvents) || ""),
					(u.transform = c ? c(this.latestValues, "") : "none"),
					u
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const v = {};
				return (
					this.options.layoutId &&
						((v.opacity =
							this.latestValues.opacity !== void 0
								? this.latestValues.opacity
								: 1),
						(v.pointerEvents = Ki(s == null ? void 0 : s.pointerEvents) || "")),
					this.hasProjected &&
						!tn(this.latestValues) &&
						((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
					v
				);
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = Sf(
					this.projectionDeltaWithTransform,
					this.treeScale,
					d
				)),
				c && (u.transform = c(d, u.transform));
			const { x: g, y } = this.projectionDelta;
			(u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
				f.animationValues
					? (u.opacity =
							f === this
								? (l =
										(a = d.opacity) !== null && a !== void 0
											? a
											: this.latestValues.opacity) !== null && l !== void 0
									? l
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (u.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ""
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0);
			for (const v in xo) {
				if (d[v] === void 0) continue;
				const { correct: x, applyTo: m } = xo[v],
					p = u.transform === "none" ? d[v] : x(d[v], f);
				if (m) {
					const h = m.length;
					for (let k = 0; k < h; k++) u[m[k]] = p;
				} else u[v] = p;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents =
						f === this
							? Ki(s == null ? void 0 : s.pointerEvents) || ""
							: "none"),
				u
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((s) => {
				var a;
				return (a = s.currentAnimation) === null || a === void 0
					? void 0
					: a.stop();
			}),
				this.root.nodes.forEach(Ef),
				this.root.sharedNodes.clear();
		}
	};
}
function Ax(e) {
	e.updateLayout();
}
function Vx(e) {
	var t;
	const n =
		((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
		e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
		const { layoutBox: r, measuredBox: i } = e.layout,
			{ animationType: o } = e.options,
			s = n.source !== e.layout.source;
		o === "size"
			? Ie((f) => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						g = Ne(d);
					(d.min = r[f].min), (d.max = d.min + g);
			  })
			: wm(o, n.layoutBox, r) &&
			  Ie((f) => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						g = Ne(r[f]);
					(d.max = d.min + g),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[f].max = e.relativeTarget[f].min + g));
			  });
		const a = Bn();
		Mr(a, r, n.layoutBox);
		const l = Bn();
		s ? Mr(l, e.applyTransform(i, !0), n.measuredBox) : Mr(l, r, n.layoutBox);
		const u = !vm(a);
		let c = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: g } = f;
				if (d && g) {
					const y = q();
					jr(y, n.layoutBox, d.layoutBox);
					const v = q();
					jr(v, r, g.layoutBox),
						km(y, v) || (c = !0),
						f.options.layoutRoot &&
							((e.relativeTarget = v),
							(e.relativeTargetOrigin = y),
							(e.relativeParent = f));
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: n,
			delta: l,
			layoutDelta: a,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options;
		r && r();
	}
	e.options.transition = void 0;
}
function Mx(e) {
	nn.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function jx(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Dx(e) {
	e.clearSnapshot();
}
function Ef(e) {
	e.clearMeasurements();
}
function Nx(e) {
	e.isLayoutDirty = !1;
}
function Fx(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
		e.resetTransform();
}
function Tf(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function _x(e) {
	e.resolveTargetDelta();
}
function Ox(e) {
	e.calcProjection();
}
function Bx(e) {
	e.resetRotation();
}
function Ix(e) {
	e.removeLeadSnapshot();
}
function Lf(e, t, n) {
	(e.translate = G(t.translate, 0, n)),
		(e.scale = G(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function Rf(e, t, n, r) {
	(e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function zx(e, t, n, r) {
	Rf(e.x, t.x, n.x, r), Rf(e.y, t.y, n.y, r);
}
function Ux(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const $x = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Af = (e) =>
		typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
	Vf = Af("applewebkit/") && !Af("chrome/") ? Math.round : J;
function Mf(e) {
	(e.min = Vf(e.min)), (e.max = Vf(e.max));
}
function Wx(e) {
	Mf(e.x), Mf(e.y);
}
function wm(e, t, n) {
	return (
		e === "position" || (e === "preserve-aspect" && !Ka(wf(t), wf(n), 0.2))
	);
}
const Hx = xm({
		attachResizeListener: (e, t) => ct(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Is = { current: void 0 },
	Sm = xm({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Is.current) {
				const e = new Hx({});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Is.current = e);
			}
			return Is.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none";
		},
		checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
	}),
	Kx = {
		pan: { Feature: ax },
		drag: { Feature: sx, ProjectionNode: Sm, MeasureLayout: mm },
	},
	Gx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Qx(e) {
	const t = Gx.exec(e);
	if (!t) return [,];
	const [, n, r] = t;
	return [n, r];
}
function Xa(e, t, n = 1) {
	const [r, i] = Qx(e);
	if (!r) return;
	const o = window.getComputedStyle(t).getPropertyValue(r);
	if (o) {
		const s = o.trim();
		return im(s) ? parseFloat(s) : s;
	} else return Ba(i) ? Xa(i, t, n + 1) : i;
}
function Yx(e, { ...t }, n) {
	const r = e.current;
	if (!(r instanceof Element)) return { target: t, transitionEnd: n };
	n && (n = { ...n }),
		e.values.forEach((i) => {
			const o = i.get();
			if (!Ba(o)) return;
			const s = Xa(o, r);
			s && i.set(s);
		});
	for (const i in t) {
		const o = t[i];
		if (!Ba(o)) continue;
		const s = Xa(o, r);
		s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
	}
	return { target: t, transitionEnd: n };
}
const Xx = new Set([
		"width",
		"height",
		"top",
		"left",
		"right",
		"bottom",
		"x",
		"y",
		"translateX",
		"translateY",
	]),
	Pm = (e) => Xx.has(e),
	bx = (e) => Object.keys(e).some(Pm),
	jf = (e) => e === wn || e === V,
	Df = (e, t) => parseFloat(e.split(", ")[t]),
	Nf =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === "none" || !r) return 0;
			const i = r.match(/^matrix3d\((.+)\)$/);
			if (i) return Df(i[1], t);
			{
				const o = r.match(/^matrix\((.+)\)$/);
				return o ? Df(o[1], e) : 0;
			}
		},
	Zx = new Set(["x", "y", "z"]),
	Jx = ai.filter((e) => !Zx.has(e));
function qx(e) {
	const t = [];
	return (
		Jx.forEach((n) => {
			const r = e.getValue(n);
			r !== void 0 &&
				(t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
		}),
		t.length && e.render(),
		t
	);
}
const er = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: Nf(4, 13),
	y: Nf(5, 14),
};
er.translateX = er.x;
er.translateY = er.y;
const ew = (e, t, n) => {
		const r = t.measureViewportBox(),
			i = t.current,
			o = getComputedStyle(i),
			{ display: s } = o,
			a = {};
		s === "none" && t.setStaticValue("display", e.display || "block"),
			n.forEach((u) => {
				a[u] = er[u](r, o);
			}),
			t.render();
		const l = t.measureViewportBox();
		return (
			n.forEach((u) => {
				const c = t.getValue(u);
				c && c.jump(a[u]), (e[u] = er[u](l, o));
			}),
			e
		);
	},
	tw = (e, t, n = {}, r = {}) => {
		(t = { ...t }), (r = { ...r });
		const i = Object.keys(t).filter(Pm);
		let o = [],
			s = !1;
		const a = [];
		if (
			(i.forEach((l) => {
				const u = e.getValue(l);
				if (!e.hasValue(l)) return;
				let c = n[l],
					f = pr(c);
				const d = t[l];
				let g;
				if (So(d)) {
					const y = d.length,
						v = d[0] === null ? 1 : 0;
					(c = d[v]), (f = pr(c));
					for (let x = v; x < y && d[x] !== null; x++)
						g ? su(pr(d[x]) === g) : (g = pr(d[x]));
				} else g = pr(d);
				if (f !== g)
					if (jf(f) && jf(g)) {
						const y = u.get();
						typeof y == "string" && u.set(parseFloat(y)),
							typeof d == "string"
								? (t[l] = parseFloat(d))
								: Array.isArray(d) && g === V && (t[l] = d.map(parseFloat));
					} else
						f != null &&
						f.transform &&
						g != null &&
						g.transform &&
						(c === 0 || d === 0)
							? c === 0
								? u.set(g.transform(c))
								: (t[l] = f.transform(d))
							: (s || ((o = qx(e)), (s = !0)),
							  a.push(l),
							  (r[l] = r[l] !== void 0 ? r[l] : t[l]),
							  u.jump(d));
			}),
			a.length)
		) {
			const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
				u = ew(t, e, a);
			return (
				o.length &&
					o.forEach(([c, f]) => {
						e.getValue(c).set(f);
					}),
				e.render(),
				Yo && l !== null && window.scrollTo({ top: l }),
				{ target: u, transitionEnd: r }
			);
		} else return { target: t, transitionEnd: r };
	};
function nw(e, t, n, r) {
	return bx(t) ? tw(e, t, n, r) : { target: t, transitionEnd: r };
}
const rw = (e, t, n, r) => {
		const i = Yx(e, t, r);
		return (t = i.target), (r = i.transitionEnd), nw(e, t, n, r);
	},
	ba = { current: null },
	Cm = { current: !1 };
function iw() {
	if (((Cm.current = !0), !!Yo))
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => (ba.current = e.matches);
			e.addListener(t), t();
		} else ba.current = !1;
}
function ow(e, t, n) {
	const { willChange: r } = t;
	for (const i in t) {
		const o = t[i],
			s = n[i];
		if (Re(o)) e.addValue(i, o), To(r) && r.add(i);
		else if (Re(s)) e.addValue(i, qn(o, { owner: e })), To(r) && r.remove(i);
		else if (s !== o)
			if (e.hasValue(i)) {
				const a = e.getValue(i);
				!a.hasAnimated && a.set(o);
			} else {
				const a = e.getStaticValue(i);
				e.addValue(i, qn(a !== void 0 ? a : o, { owner: e }));
			}
	}
	for (const i in n) t[i] === void 0 && e.removeValue(i);
	return t;
}
const Ff = new WeakMap(),
	Em = Object.keys(qr),
	sw = Em.length,
	_f = [
		"AnimationStart",
		"AnimationComplete",
		"Update",
		"BeforeLayoutMeasure",
		"LayoutMeasure",
		"LayoutAnimationStart",
		"LayoutAnimationComplete",
	],
	aw = Jl.length;
class lw {
	constructor(
		{
			parent: t,
			props: n,
			presenceContext: r,
			reducedMotionConfig: i,
			visualState: o,
		},
		s = {}
	) {
		(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify("Update", this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					));
			}),
			(this.scheduleRender = () => $.render(this.render, !1, !0));
		const { latestValues: a, renderState: l } = o;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = l),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.options = s),
			(this.isControllingVariants = bo(n)),
			(this.isVariantNode = uh(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
		for (const f in c) {
			const d = c[f];
			a[f] !== void 0 && Re(d) && (d.set(a[f], !1), To(u) && u.add(f));
		}
	}
	scrapeMotionValuesFromProps(t, n) {
		return {};
	}
	mount(t) {
		(this.current = t),
			Ff.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			Cm.current || iw(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === "never"
					? !1
					: this.reducedMotionConfig === "always"
					? !0
					: ba.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		Ff.delete(this.current),
			this.projection && this.projection.unmount(),
			vt(this.notifyUpdate),
			vt(this.render),
			this.valueSubscriptions.forEach((t) => t()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) this.features[t].unmount();
		this.current = null;
	}
	bindToMotionValue(t, n) {
		const r = xn.has(t),
			i = n.on("change", (s) => {
				(this.latestValues[t] = s),
					this.props.onUpdate && $.update(this.notifyUpdate, !1, !0),
					r && this.projection && (this.projection.isTransformDirty = !0);
			}),
			o = n.on("renderRequest", this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			i(), o();
		});
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures({ children: t, ...n }, r, i, o) {
		let s, a;
		for (let l = 0; l < sw; l++) {
			const u = Em[l],
				{
					isEnabled: c,
					Feature: f,
					ProjectionNode: d,
					MeasureLayout: g,
				} = qr[u];
			d && (s = d),
				c(n) &&
					(!this.features[u] && f && (this.features[u] = new f(this)),
					g && (a = g));
		}
		if (
			(this.type === "html" || this.type === "svg") &&
			!this.projection &&
			s
		) {
			this.projection = new s(
				this.latestValues,
				this.parent && this.parent.projection
			);
			const {
				layoutId: l,
				layout: u,
				drag: c,
				dragConstraints: f,
				layoutScroll: d,
				layoutRoot: g,
			} = n;
			this.projection.setOptions({
				layoutId: l,
				layout: u,
				alwaysMeasureLayout: !!c || (f && _n(f)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof u == "string" ? u : "both",
				initialPromotionConfig: o,
				layoutScroll: d,
				layoutRoot: g,
			});
		}
		return a;
	}
	updateFeatures() {
		for (const t in this.features) {
			const n = this.features[t];
			n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: q();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n;
	}
	makeTargetAnimatable(t, n = !0) {
		return this.makeTargetAnimatableFromInstance(t, this.props, n);
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < _f.length; r++) {
			const i = _f[r];
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](),
				delete this.propEventSubscriptions[i]);
			const o = t["on" + i];
			o && (this.propEventSubscriptions[i] = this.on(i, o));
		}
		(this.prevMotionValues = ow(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0;
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {};
			return (
				this.props.initial !== void 0 && (r.initial = this.props.initial), r
			);
		}
		const n = {};
		for (let r = 0; r < aw; r++) {
			const i = Jl[r],
				o = this.props[i];
			(Jr(o) || o === !1) && (n[i] = o);
		}
		return n;
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n)
			return (
				n.variantChildren && n.variantChildren.add(t),
				() => n.variantChildren.delete(t)
			);
	}
	addValue(t, n) {
		n !== this.values.get(t) &&
			(this.removeValue(t), this.bindToMotionValue(t, n)),
			this.values.set(t, n),
			(this.latestValues[t] = n.get());
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return (
			r === void 0 &&
				n !== void 0 &&
				((r = qn(n, { owner: this })), this.addValue(t, r)),
			r
		);
	}
	readValue(t) {
		var n;
		return this.latestValues[t] !== void 0 || !this.current
			? this.latestValues[t]
			: (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
			  n !== void 0
			? n
			: this.readValueFromInstance(this.current, t, this.options);
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n;
	}
	getBaseTarget(t) {
		var n;
		const { initial: r } = this.props,
			i =
				typeof r == "string" || typeof r == "object"
					? (n = ou(this.props, r)) === null || n === void 0
						? void 0
						: n[t]
					: void 0;
		if (r && i !== void 0) return i;
		const o = this.getBaseTargetFromProps(this.props, t);
		return o !== void 0 && !Re(o)
			? o
			: this.initialValues[t] !== void 0 && i === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new mu()), this.events[t].add(n);
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n);
	}
}
class Tm extends lw {
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0;
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t];
	}
	makeTargetAnimatableFromInstance(
		{ transition: t, transitionEnd: n, ...r },
		{ transformValues: i },
		o
	) {
		let s = Ek(r, t || {}, this);
		if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
			Pk(this, r, s);
			const a = rw(this, r, s, n);
			(n = a.transitionEnd), (r = a.target);
		}
		return { transition: t, transitionEnd: n, ...r };
	}
}
function uw(e) {
	return window.getComputedStyle(e);
}
class cw extends Tm {
	constructor() {
		super(...arguments), (this.type = "html");
	}
	readValueFromInstance(t, n) {
		if (xn.has(n)) {
			const r = cu(n);
			return (r && r.default) || 0;
		} else {
			const r = uw(t),
				i = (hh(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof i == "string" ? i.trim() : i;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return pm(t, n);
	}
	build(t, n, r, i) {
		eu(t, n, r, i.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, n) {
		return iu(t, n);
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		Re(t) &&
			(this.childSubscription = t.on("change", (n) => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
	renderInstance(t, n, r, i) {
		xh(t, n, r, i);
	}
}
class fw extends Tm {
	constructor() {
		super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, n) {
		return t[n];
	}
	readValueFromInstance(t, n) {
		if (xn.has(n)) {
			const r = cu(n);
			return (r && r.default) || 0;
		}
		return (n = wh.has(n) ? n : bl(n)), t.getAttribute(n);
	}
	measureInstanceViewportBox() {
		return q();
	}
	scrapeMotionValuesFromProps(t, n) {
		return Ph(t, n);
	}
	build(t, n, r, i) {
		nu(t, n, r, this.isSVGTag, i.transformTemplate);
	}
	renderInstance(t, n, r, i) {
		Sh(t, n, r, i);
	}
	mount(t) {
		(this.isSVGTag = ru(t.tagName)), super.mount(t);
	}
}
const dw = (e, t) =>
		ql(e)
			? new fw(t, { enableHardwareAcceleration: !1 })
			: new cw(t, { enableHardwareAcceleration: !0 }),
	pw = { layout: { ProjectionNode: Sm, MeasureLayout: mm } },
	hw = { ...zk, ...s1, ...Kx, ...pw },
	Za = h0((e, t) => Q0(e, t, hw, dw));
function mw() {
	return A.jsxs("section", {
		className:
			"mx-auto w-3/4 lg:w-1/2 h-screen flex flex-col items-center justify-center",
		children: [
			A.jsx("img", {
				src: "../../../../src/assets/img/love.png",
				alt: "",
				className:
					"absolute h-screen lg:w-screen max-w-full object-top hidden md:block",
			}),
			A.jsx("img", {
				src: "../../../../src/assets/img/love_mobile.png",
				alt: "",
				className:
					"absolute h-screen lg:w-screen max-w-sm object-top md:hidden",
			}),
			A.jsxs("div", {
				className: "px-2 z-10 text-center overflow-hidden",
				children: [
					A.jsx(Za.h1, {
						className:
							"font-salsa font-bold tracking-widest text-4xl lg:text-5xl py-10",
						initial: { y: -50 },
						whileInView: { y: 0 },
						transition: { duration: 0.7 },
						children: "WELCOME TO COUPLE TALKS",
					}),
					A.jsx(Za.p, {
						className:
							"text-base font-roboto lg:text-xl lg:pr-4 text-justify text-tertiary font-bold",
						initial: { opacity: 0 },
						whileInView: { opacity: 1 },
						transition: { duration: 1, delay: 0.5 },
						children:
							"hai, website ini gue buat atas dasar rasa penyesalan gue pas dulu masih pacaran. Selama pacaran, gue selalu tidak bisa mengekspresikan perasaan yang tidak enak kepada pasangan gue. So gue buat website ini buat kalian yang merasa bingung untuk mengekspresikan perasaannya kepada pasangan. Disini kalian bisa dapet topik random yang udah gue siapin, have fun guys.",
					}),
					A.jsx(r0, {}),
				],
			}),
		],
	});
}
function gw() {
	return A.jsx("main", { className: "bg-red-600", children: A.jsx(mw, {}) });
}
const zs = [
	{
		id: 1,
		title: "Eksplorasi",
		description: "Apa tempat yang ingin kamu kunjungi bersamaku?",
	},
	{
		id: 2,
		title: "Eksplorasi",
		description:
			"Jika kita bisa mengunjungi satu negara, negara apa yang akan kamu pilih?",
	},
	{
		id: 3,
		title: "Eksplorasi",
		description: "Apa pengalaman perjalanan impianmu bersamaku?",
	},
	{
		id: 4,
		title: "Eksplorasi",
		description:
			"Bagaimana pendapatmu tentang menjelajahi tempat-tempat baru bersama?",
	},
	{ id: 5, title: "Emosi", description: "Apa hal yang membuatmu bahagia?" },
	{
		id: 6,
		title: "Emosi",
		description: "Bagaimana cara kita bisa saling mendukung dalam waktu sulit?",
	},
	{
		id: 7,
		title: "Emosi",
		description: "Apa cara terbaik bagimu untuk merayakan kebahagiaan?",
	},
	{
		id: 8,
		title: "Emosi",
		description: "Bagaimana kita bisa lebih baik dalam mengatasi konflik?",
	},
	{ id: 9, title: "Tujuan", description: "Apa impian terbesarmu dalam hidup?" },
	{
		id: 10,
		title: "Tujuan",
		description:
			"Bagaimana kita bisa saling mendukung dalam mencapai tujuan masing-masing?",
	},
	{
		id: 11,
		title: "Tujuan",
		description: "Jika kita bisa memiliki satu tujuan bersama, apa itu?",
	},
	{
		id: 12,
		title: "Tujuan",
		description:
			"Apa yang ingin kamu capai bersamaku dalam lima tahun ke depan?",
	},
	{
		id: 13,
		title: "Momen",
		description: "Apa momen kecil bersamaku yang paling kamu hargai?",
	},
	{
		id: 14,
		title: "Momen",
		description:
			"Bagaimana cara kita bisa menciptakan kenangan kecil yang berarti?",
	},
	{
		id: 15,
		title: "Momen",
		description: "Apa hal kecil yang bisa membuatmu tersenyum setiap hari?",
	},
	{
		id: 16,
		title: "Momen",
		description:
			"Bagaimana kita bisa merayakan kecil-kecilan dalam hubungan kita?",
	},
	{
		id: 17,
		title: "Komunikasi",
		description: "Apa cara terbaik menurutmu untuk berkomunikasi dengan baik?",
	},
	{
		id: 18,
		title: "Komunikasi",
		description: "Bagaimana cara kita bisa meningkatkan komunikasi kita?",
	},
	{
		id: 19,
		title: "Komunikasi",
		description: "Apa hal yang ingin kamu sampaikan kepadaku hari ini?",
	},
	{
		id: 20,
		title: "Komunikasi",
		description:
			"Bagaimana cara terbaik menurutmu untuk menyelesaikan perbedaan pendapat?",
	},
	{
		id: 21,
		title: "Pencapaian",
		description: "Apa pencapaian terbesarmu yang ingin kamu rayakan bersamaku?",
	},
	{
		id: 22,
		title: "Pencapaian",
		description: "Bagaimana kita bisa merayakan keberhasilan satu sama lain?",
	},
	{
		id: 23,
		title: "Pencapaian",
		description:
			"Apa hal yang paling membuatmu gembira dalam pencapaian pasanganmu?",
	},
	{
		id: 24,
		title: "Pencapaian",
		description:
			"Bagaimana kita bisa merayakan setiap keberhasilan, baik besar maupun kecil?",
	},
	{
		id: 25,
		title: "Kebersamaan",
		description:
			"Jika kita memiliki waktu luang sehari, apa yang ingin kamu lakukan bersamaku?",
	},
	{
		id: 26,
		title: "Kebersamaan",
		description: "Bagaimana kita bisa menciptakan lebih banyak waktu bersama?",
	},
	{
		id: 27,
		title: "Kebersamaan",
		description: "Apa aktivitas bersama yang ingin kamu lakukan secara rutin?",
	},
	{
		id: 28,
		title: "Kebersamaan",
		description: "Bagaimana kita bisa meningkatkan kebersamaan kita?",
	},
	{
		id: 29,
		title: "Kejutan",
		description: "Apa kejutan terbaik yang pernah kamu alami dari pasanganmu?",
	},
	{
		id: 30,
		title: "Kejutan",
		description:
			"Bagaimana kita bisa membuat hidup kita penuh dengan kejutan positif?",
	},
	{
		id: 31,
		title: "Kejutan",
		description: "Apa jenis kejutan yang ingin kamu alami dari pasanganmu?",
	},
	{
		id: 32,
		title: "Kejutan",
		description:
			"Bagaimana kita bisa lebih sering memberikan kejutan satu sama lain?",
	},
	{
		id: 33,
		title: "Future",
		description: "Apa harapanmu untuk hubungan kita dalam jangka panjang?",
	},
	{
		id: 34,
		title: "Future",
		description: "Bagaimana kita bisa merencanakan Future?",
	},
	{
		id: 35,
		title: "Future",
		description:
			"Apa hal yang ingin kamu capai bersamaku dalam 10 tahun ke depan?",
	},
	{
		id: 36,
		title: "Future",
		description: "Bagaimana kita bisa membangun visi bersama untuk masa depan?",
	},
	{
		id: 37,
		title: "Tradisi",
		description: "Apa tradisi perayaan khusus yang ingin kamu mulai bersamaku?",
	},
	{
		id: 38,
		title: "Tradisi",
		description:
			"Bagaimana kita bisa menciptakan tradisi yang berarti untuk kita berdua?",
	},
	{
		id: 39,
		title: "Tradisi",
		description: "Apa tradisi yang ingin kamu pertahankan dalam hubungan kita?",
	},
	{
		id: 40,
		title: "Tradisi",
		description:
			"Bagaimana kita bisa membuat perayaan tahunan menjadi lebih spesial?",
	},
	{
		id: 41,
		title: "Kesetiaan",
		description: "Bagaimana cara kamu mendefinisikan kesetiaan dalam hubungan?",
	},
	{
		id: 42,
		title: "Kesetiaan",
		description: "Apa yang menurutmu menjadi kunci kepercayaan dalam hubungan?",
	},
	{
		id: 43,
		title: "Kesetiaan",
		description: "Bagaimana kita bisa membangun kepercayaan yang lebih kuat?",
	},
	{
		id: 44,
		title: "Kesetiaan",
		description: "Apa yang bisa kita lakukan untuk memperkuat kesetiaan kita?",
	},
	{
		id: 45,
		title: "Liburan",
		description:
			"Jika kita bisa merayakan satu liburan mendadak, ke mana kamu ingin pergi?",
	},
	{
		id: 46,
		title: "Liburan",
		description: "Bagaimana kita bisa membuat liburan kita lebih spesial?",
	},
	{
		id: 47,
		title7: "Liburan",
		description: "Apa tema pesta yang ingin kamu coba bersamaku?",
	},
	{
		id: 48,
		title: "Liburan",
		description:
			"Bagaimana kita bisa membuat momen liburan menjadi lebih berkesan?",
	},
	{
		id: 49,
		title: "Kreativitas",
		description:
			"Jika kita bisa memiliki satu proyek bersama-sama, apa yang ingin kamu kerjakan?",
	},
	{
		id: 50,
		title: "Kreativitas",
		description: "Bagaimana kita bisa mengeksplorasi kreativitas bersama?",
	},
	{
		id: 51,
		title: "Kreativitas",
		description: "Apa yang ingin kamu pelajari atau ciptakan bersamaku?",
	},
	{
		id: 52,
		title: "Kreativitas",
		description:
			"Bagaimana kita bisa memberdayakan satu sama lain untuk mencapai potensi maksimal?",
	},
	{
		id: 53,
		title: "Pemberdayaan",
		description:
			"Bagaimana kita bisa saling memberdayakan untuk mencapai tujuan kita?",
	},
	{
		id: 54,
		title: "Pemberdayaan",
		description:
			"Apa yang menurutmu menjadi kunci pemberdayaan dalam hubungan?",
	},
	{
		id: 55,
		title: "Pemberdayaan",
		description:
			"Bagaimana kita bisa mendukung pertumbuhan dan perkembangan satu sama lain?",
	},
	{
		id: 56,
		title: "Pemberdayaan",
		description: "Apa hal yang ingin kamu pelajari dari pasanganmu?",
	},
	{
		id: 57,
		title: "Eksplorasi",
		description:
			"Jika kita bisa memiliki satu kebiasaan baik bersama-sama, apa yang ingin kamu praktikkan?",
	},
	{
		id: 58,
		title: "Eksplorasi",
		description: "Bagaimana cara kamu merayakan pencapaian pasanganmu?",
	},
	{
		id: 59,
		title: "Eksplorasi",
		description:
			"Jika kita bisa memiliki satu permainan atau aktivitas yang jadi favorit kita bersama-sama, apa yang ingin kamu pilih?",
	},
	{
		id: 60,
		title: "Eksplorasi",
		description:
			"Apa yang ingin kamu lakukan sebagai pasangan untuk membantu orang lain atau masyarakat?",
	},
];
function yw() {
	const [e, t] = S.useState(!1),
		[n, r] = S.useState(0),
		i = () => {
			const o = Math.floor(Math.random() * zs.length);
			r(o), t(!e);
		};
	return A.jsx(Za.div, {
		className: "bg-primary py-8 px-3",
		initial: { x: window.innerWidth > 768 ? -1e3 : -100 },
		whileInView: { x: 0 },
		transition: { duration: window.innerWidth > 768 ? 0.8 : 0.6 },
		children: A.jsxs("div", {
			className:
				"w-3/4 mx-auto flex flex-col md:my-16 lg:my-0 pb-10 justify-center items-center",
			children: [
				A.jsx("div", {
					className: "pt-16 lg:pt-1.5",
					children: A.jsx("h1", {
						className: "font-salsa font-bold text-5xl",
						children: "Pick A Topic",
					}),
				}),
				A.jsxs("div", {
					className: `card my-24 ${e ? "flipped" : ""}`,
					onClick: i,
					children: [
						A.jsxs("svg", {
							className: `img ${e ? "hidden transition ease-in-out" : ""}`,
							id: "Layer_1",
							xmlns: "http://www.w3.org/2000/svg",
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							x: "0px",
							y: "0px",
							viewBox: "0 0 30 30",
							style: { enableBackground: "new 0 0 30 30" },
							xmlSpace: "preserve",
							children: [
								A.jsx("style", {
									type: "text/css",
									children: `
	.st0{fill:none;stroke:#6C3DB7;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#1F992A;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st2{fill:none;stroke:#6A83BA;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st3{fill:#8A8AFF;stroke:#8A8AFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st4{fill:#6C3DB7;stroke:#6C3DB7;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st5{fill:#A576FF;stroke:#A576FF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st6{fill:#F2BB41;stroke:#F2BB41;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st7{fill:#E08838;stroke:#E08838;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st8{fill:#1F992A;stroke:#1F992A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st9{fill:#5EC11E;stroke:#5EC11E;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st10{fill:#E3FAFF;stroke:#E3FAFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st11{fill:#FF5093;stroke:#FF5093;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st12{fill:#B7257F;stroke:#B7257F;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st13{fill:#5189E5;stroke:#5189E5;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st14{fill:#6EBAFF;stroke:#6EBAFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st15{fill:#EDD977;stroke:#EDD977;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st16{fill:#8C43FF;stroke:#8C43FF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st17{fill:#5252BA;stroke:#5252BA;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st18{fill:none;stroke:#E3FAFF;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st19{fill:#354C75;stroke:#354C75;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
`,
								}),
								A.jsx("g", {
									children: A.jsx("path", {
										className: "st11",
										d: "M15,8.7l-1.6-1.7c-2.3-2.5-6.2-2.6-8.7-0.2l0,0c-2.2,2.2-2.3,5.7-0.2,8L7,17.3l8,8.7l8-8.7l1-1.1l-8.3-8.3 L15,8.7z",
									}),
								}),
								A.jsx("path", {
									className: "st12",
									d: "M25.3,6.7L25.3,6.7c-2.4-2.4-6.4-2.2-8.7,0.2l-0.9,1l8.3,8.3l1.4-1.5C27.6,12.4,27.5,8.9,25.3,6.7z",
								}),
							],
						}),
						A.jsxs("div", {
							children: [
								A.jsx("h1", {
									className: `text-content text-2xl font-bold text-secondary mb-2 px-2 pb-10 text-center font-roboto ${
										e ? "" : "hidden"
									}`,
									children: zs[n].title,
								}),
								A.jsx("p", {
									className: `text-content px-2 font-bold font-salsa text-primary text-xl text-center ${
										e ? "" : "hidden"
									}`,
									children: zs[n].description,
								}),
							],
						}),
					],
				}),
				A.jsx("div", {
					className:
						"w-[150px] h-[50px] mx-auto text-center mb-10 lg:mb-0 lg:mt-0",
					children: A.jsx("button", {
						onClick: i,
						className:
							"w-[140px] h-[40px] shadow-2xl bg-secondary outline outline-offset-2 outline-1 outline-white hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]",
						children: A.jsx("span", {
							className: "font-bold text-white",
							children: "Get Topic",
						}),
					}),
				}),
			],
		}),
	});
}
function vw() {
	return A.jsxs(Gv, {
		children: [
			A.jsx(Fa, { path: "/", Component: gw }),
			A.jsx(Fa, { path: "/deeptalk", Component: yw }),
		],
	});
}
Us.createRoot(document.getElementById("root")).render(
	A.jsx(Ao.StrictMode, { children: A.jsx(Jv, { children: A.jsx(vw, {}) }) })
);