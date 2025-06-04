!function() {
    var n, t = function(n, t, r) {
        return Object.defineProperty(n, t, r)
    };
    try {
        t({}, "any", {
            value: 0
        })
    } catch (Sn) {
        n = function() {
            if ("undefined" != typeof document) {
                var n = document.documentMode;
                if ("number" == typeof n)
                    return "ie" + n
            }
            return "unknow"
        }(),
        t = function(t, r, i) {
            console.log(n, t, r, i)
        }
    }
    function r(n, r, i) {
        return t(n, r, {
            get: i,
            configurable: !0
        })
    }
    function i(n) {
        return t = function(n) {
            if ("undefined" != typeof atob)
                return atob(n);
            for (var t = [[65, 90], [97, 122], [48, 57]], r = "", i = 0; i < t.length; i++)
                for (var u = t[i], o = u[0]; o <= u[1]; o++)
                    r += String.fromCharCode(o);
            r += "+/=";
            var e = String(n).replace(/[=]+$/, "");
            if (e.length % 4 == 1)
                throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var f, c, s = 0, a = 0, h = ""; c = e.charAt(a++); ~c && (f = s % 4 ? 64 * f + c : c,
            s++ % 4) ? h += String.fromCharCode(255 & f >> (-2 * s & 6)) : 0)
                c = r.indexOf(c);
            return h
        }(n),
        "undefined" != typeof JSON ? JSON.parse(t, r) : new Function("return " + t)();
        var t, r
    }
    var u = "prototype";
    function o(n, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](n) : n instanceof t
    }
    var e = function(n, t) {
        return e = Object.setPrototypeOf || o({
            __proto__: []
        }, Array) && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
        }
        ,
        e(n, t)
    };
    function f(n, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function r() {
            this.constructor = n
        }
        e(n, t),
        n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
        new r)
    }
    var c = function() {
        return c = Object.assign || function(n) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var u in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, u) && (n[u] = t[u]);
            return n
        }
        ,
        c.apply(this, arguments)
    };
    function s(n, t) {
        var r = {};
        for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (r[i] = n[i]);
        if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
            var u = 0;
            for (i = Object.getOwnPropertySymbols(n); u < i.length; u++)
                t.indexOf(i[u]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[u]) && (r[i[u]] = n[i[u]])
        }
        return r
    }
    function a(n, t, r, i) {
        return new (r || (r = Promise))((function(u, e) {
            function f(n) {
                try {
                    s(i.next(n))
                } catch (t) {
                    e(t)
                }
            }
            function c(n) {
                try {
                    s(i["throw"](n))
                } catch (t) {
                    e(t)
                }
            }
            function s(n) {
                n.done ? u(n.value) : function(n) {
                    return o(n, r) ? n : new r((function(t) {
                        t(n)
                    }
                    ))
                }(n.value).then(f, c)
            }
            s((i = i.apply(n, t || [])).next())
        }
        ))
    }
    function h(n, t) {
        var r, i, u, o, e = {
            label: 0,
            sent: function() {
                if (1 & u[0])
                    throw u[1];
                return u[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: f(0),
            "throw": f(1),
            "return": f(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function f(o) {
            return function(f) {
                return function(o) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; e; )
                        try {
                            if (r = 1,
                            i && (u = 2 & o[0] ? i["return"] : o[0] ? i["throw"] || ((u = i["return"]) && u.call(i),
                            0) : i.next) && !(u = u.call(i, o[1])).done)
                                return u;
                            switch (i = 0,
                            u && (o = [2 & o[0], u.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                u = o;
                                break;
                            case 4:
                                return e.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                e.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = e.ops.pop(),
                                e.trys.pop();
                                continue;
                            default:
                                if (!((u = (u = e.trys).length > 0 && u[u.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    e = 0;
                                    continue
                                }
                                if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
                                    e.label = o[1];
                                    break
                                }
                                if (6 === o[0] && e.label < u[1]) {
                                    e.label = u[1],
                                    u = o;
                                    break
                                }
                                if (u && e.label < u[2]) {
                                    e.label = u[2],
                                    e.ops.push(o);
                                    break
                                }
                                u[2] && e.ops.pop(),
                                e.trys.pop();
                                continue
                            }
                            o = t.call(n, e)
                        } catch (f) {
                            o = [6, f],
                            i = 0
                        } finally {
                            r = u = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, f])
            }
        }
    }
    function v(n, t) {
        var r = "function" == typeof Symbol && n[Symbol.iterator];
        if (!r)
            return n;
        var i, u, o = r.call(n), e = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; )
                e.push(i.value)
        } catch (Sn) {
            u = {
                error: Sn
            }
        } finally {
            try {
                i && !i.done && (r = o["return"]) && r.call(o)
            } finally {
                if (u)
                    throw u.error
            }
        }
        return e
    }
    function l(n, t, r) {
        if (r || 2 === arguments.length)
            for (var i, u = 0, o = t.length; u < o; u++)
                !i && u in t || (i || (i = Array.prototype.slice.call(t, 0, u)),
                i[u] = t[u]);
        return n.concat(i || Array.prototype.slice.call(t))
    }
    function d(n, t) {
        for (var r = 0, i = n.length; r < i; r++)
            if (t(n[r], r, n))
                return r;
        return -1
    }
    function w(n, t, r) {
        return n.apply(t, r)
    }
    function m(n, t, r) {
        for (var i = [], u = 3; u < arguments.length; u++)
            i[u - 3] = arguments[u];
        return w(n || r, t, i)
    }
    function b(n, t, r) {
        for (var i, u = [], o = 3; o < arguments.length; o++)
            u[o - 3] = arguments[o];
        return n ? i = n : (i = r,
        u.unshift(t)),
        w(i, t, u)
    }
    function p(n, t) {
        return b(n.findIndex, n, d, t)
    }
    var y = "undefined";
    function g(n, t) {
        return function(n) {
            return typeof n
        }(n) === t
    }
    function k(n) {
        return g(n, "string")
    }
    function I(n) {
        return g(n, "object")
    }
    function O(n) {
        return g(n, "boolean")
    }
    function j(n) {
        return g(n, "number")
    }
    function S(n) {
        return g(n, "function")
    }
    function x(n, t, r) {
        return new n(t,r)
    }
    function M(n) {
        return x(TypeError, n)
    }
    function N(n) {
        if (!S(n))
            throw M(n + " is not a function")
    }
    function L(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return w(n, t, r)
    }
    function W(n, t) {
        return m(Object.hasOwn, Object, C, n, t)
    }
    function C(n, t) {
        return L(Object[u].hasOwnProperty, n, t)
    }
    function z(n, t) {
        N(t);
        for (var r = 0, i = n.length; r < i; r++)
            W(n, r) && t(n[r], r, n)
    }
    function Y(n, t) {
        return b(n.forEach, n, z, t)
    }
    function T(n) {
        return m(Number.isNaN, Number, F, n)
    }
    function F(n) {
        return j(n) && isNaN(n)
    }
    function Z(n) {
        return -0 === n && function(n) {
            return 1 / n == -Infinity
        }(n)
    }
    function A(n) {
        return 0 === n && function(n) {
            return 1 / n === Infinity
        }(n)
    }
    function J(n, t) {
        return n === t
    }
    function R(n) {
        return J(n, undefined)
    }
    function X(n, t, r) {
        for (var i = r || 0, u = n.length; i < u; i++)
            if (W(n, i) && n[i] === t)
                return i;
        return -1
    }
    function _(n, t, r) {
        return b(n.indexOf, n, X, t, r)
    }
    function E(n, t) {
        return T(t) || R(t) ? p(n, (function(n) {
            return J(r = t, i = n) || T(r) && T(i);
            var r, i
        }
        )) : _(n, t)
    }
    function P(n, t) {
        var r = E(n, t);
        return r > -1 ? function(n, t) {
            return n.splice(t, 1)[0]
        }(n, r) : undefined
    }
    function V(n, t) {
        return t > -1 && t < n.length
    }
    function D(n, t) {
        return V(n, t) ? n.splice(t, 1)[0] : undefined
    }
    function H(n) {
        return J(n, null) || R(n)
    }
    function G(n) {
        if (H(n))
            throw M("Cannot convert undefined or null to object")
    }
    function q(n) {
        return m(Object.keys, Object, Q, n)
    }
    function Q(n) {
        G(n);
        var t = [];
        for (var r in n)
            W(n, r) && t.push(r);
        if (!{
            toString: null
        }.propertyIsEnumerable("toString"))
            for (var i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], u = 0, o = i.length; u < o; u++)
                W(n, i[u]) && t.push(i[u]);
        return t
    }
    function B(n, t) {
        return m(Object.is, Object, U, n, t)
    }
    function U(n, t) {
        return n === t ? !(A(n) && Z(t) || Z(n) && A(t)) : T(n) && T(t)
    }
    function $(n, t) {
        return p(n, (function(n) {
            return B(n.callee, t)
        }
        ))
    }
    function K(n) {
        var t;
        Y(q(t = n), (function(n) {
            delete t[n]
        }
        ))
    }
    var nn = function(n) {
        function t() {
            var t, r = n.call(this) || this;
            return r.u = (t = r.o,
            function(n, r) {
                $(t, n) > -1 || function(n, t, r) {
                    var i, u = {
                        callee: t,
                        once: null !== (i = null == r ? void 0 : r.once) && void 0 !== i && i,
                        context: null == r ? void 0 : r.context,
                        when: null == r ? void 0 : r.when
                    };
                    n.push(u)
                }(t, n, r)
            }
            ),
            r.h = function(n) {
                return function(t) {
                    var r = $(n, t);
                    r > -1 && K(D(n, r))
                }
            }(r.o),
            r
        }
        return f(t, n),
        t[u].on = function(n, t) {
            this.u(n, t)
        }
        ,
        t[u].once = function(n, t) {
            this.u(n, c(c({}, t), {
                once: !0
            }))
        }
        ,
        t[u].off = function(n) {
            this.h(n)
        }
        ,
        t
    }((function() {
        this.o = []
    }
    ))
      , tn = function(n) {
        function t() {
            var t, r = n.call(this) || this;
            return r.v = (t = r.o,
            function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                for (var i = t.concat(), u = 0, o = i.length; u < o; u++) {
                    var e = i[u]
                      , f = e.callee;
                    if (f) {
                        var c = e.context
                          , s = e.when;
                        s && !w(s, c, n) || (e.once && K(P(t, e)),
                        w(f, c, n))
                    }
                }
            }
            ),
            r
        }
        return f(t, n),
        t
    }(nn)
      , rn = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].emit = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            this.v.apply(this, l([], v(n), !1))
        }
        ,
        t
    }(tn)
      , un = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].pipe = function(n) {
            var t = this
              , r = function() {
                for (var t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                return n.emit.apply(n, l([], v(t), !1))
            };
            return this.on(r),
            {
                revoke: function() {
                    return t.off(r)
                }
            }
        }
        ,
        t
    }(rn)
      , on = new un
      , en = !1
      , fn = "activated"
      , cn = "ad"
      , sn = "app"
      , an = "auto";
    function hn() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        var r = "";
        return w(r.concat, r, n)
    }
    var vn = hn
      , ln = "n".concat("am")
      , dn = "".concat(ln, "e")
      , wn = "call"
      , mn = "callbacks"
      , bn = "content"
      , pn = vn("cache", dn)
      , yn = "document"
      , gn = "div"
      , kn = vn(yn, "last", "modified")
      , In = "element"
      , On = "enable"
      , jn = vn(On, "d")
      , Sn = "error"
      , xn = "fetch"
      , Mn = vn(xn, "Priority")
      , Nn = "get"
      , Ln = "label"
      , Wn = "load"
      , Cn = "".concat(Wn, "ing")
      , zn = "message"
      , Yn = "meta"
      , Tn = "".concat(Yn, "s")
      , Fn = "midgame"
      , Zn = "moregames"
      , An = "on"
      , Jn = "process"
      , Rn = "progress"
      , Xn = "r".concat("am")
      , _n = "ready"
      , En = ("".concat("referrer", "Policy"),
    "reward")
      , Pn = "roll"
      , Vn = "rcsp"
      , Dn = "set"
      , Hn = "setting"
      , Gn = "size"
      , qn = "state"
      , Qn = "sw"
      , Bn = "trigger"
      , Un = vn(Bn, "s")
      , $n = "version"
      , Kn = "view"
      , nt = "_"
      , tt = vn(nt, "blank");
    function rt(n, t) {
        return n[t]
    }
    function it() {
        return window
    }
    function ut(n) {
        return n !== y
    }
    function ot() {
        return ut(typeof globalThis) ? globalThis : ut(typeof window) ? it() : ut(typeof global) ? global : ut(typeof self) ? self : function() {
            return this
        }()
    }
    function et() {
        return ut(typeof Promise)
    }
    var ft = "fulfilled"
      , ct = "pending"
      , st = "rejected";
    function at(n, t) {
        for (; n.length > 0; )
            t(n.shift())
    }
    function ht(n, t) {
        return t in n
    }
    function vt(n) {
        return I(n) && null !== n
    }
    function lt(n, t, r, i) {
        return function(n, t, r, i) {
            return t(n) ? r(n) : i(n)
        }(n, t, (function(n) {
            return r(n),
            !0
        }
        ), (function(n) {
            return null == i || i(n),
            !1
        }
        ))
    }
    function dt(n, t, r) {
        return lt(n, (function(n) {
            return !H(n)
        }
        ), t, r)
    }
    function wt(n, t, r) {
        if (null == n)
            throw M("Array.from requires an array-like object or iterator - not null or undefined");
        var i = function(n) {
            return S(n) || "[object Function]" === L(Object[u].toString, n)
        };
        if (t && !i(t))
            throw M("Array.from: when provided, the second argument must be a function");
        var o = function(n, i) {
            e[n] = t ? g(r, y) ? t(i, n) : L(t, r, i, n) : i
        }
          , e = [];
        if ("undefined" != typeof Symbol && i(n[Symbol.iterator]))
            for (var f = (s = n)[Symbol.iterator](), c = f.next(); !c.done; c = f.next())
                o(e.length, c.value);
        else
            for (var s, a = 0, h = function(n) {
                var t, r = Number(n);
                return isNaN(r) || r <= 0 ? 0 : Math.min(r, null !== (t = Number.MAX_SAFE_INTEGER) && void 0 !== t ? t : Math.pow(2, 53) - 1)
            }((s = n).length); a < h; a++)
                o(a, s[a]);
        return e
    }
    function mt(n, t) {
        return t < 0 && (t += n.length),
        n[t]
    }
    function bt(n, t) {
        return b(n.at, n, mt, t)
    }
    function pt(n) {
        return bt(n, -1)
    }
    function yt(n) {
        return !!function(n, t) {
            try {
                return n(t)
            } catch (r) {}
            return undefined
        }(gt, n)
    }
    function gt(n) {
        return n.apply
    }
    function kt(n) {
        return n.constructor
    }
    function It(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return Ct(b, n.bind, n, Ot, l([t], v(r), !1))
    }
    function Ot(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return function() {
            for (var i = [], u = 0; u < arguments.length; u++)
                i[u] = arguments[u];
            return w(n, t, l(l([], v(r), !1), v(i), !1))
        }
    }
    function jt(n, t) {
        return new (It.apply(void 0, l([n, void 0], v(t), !1)))
    }
    function St() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return jt(kt(jt), n)
    }
    function xt(n, t) {
        var r = [];
        return r.length = n.length,
        z(n, (function(i, u) {
            r[u] = t(i, u, n)
        }
        )),
        r
    }
    function Mt(n, t) {
        return b(n.map, n, xt, t)
    }
    function Nt(n) {
        return "return " + n
    }
    function Lt(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        var u = Mt(t, (function(n, t) {
            return "p" + t
        }
        ));
        return u.push(Nt(n + "(" + u.join(",") + ");")),
        u.unshift.apply(u, l([], v(r), !1)),
        u
    }
    function Wt(n, t) {
        switch (t.length) {
        case 0:
            return n();
        case 1:
            return n(t[0]);
        case 2:
            return n(t[0], t[1]);
        case 3:
            return n(t[0], t[1], t[2]);
        case 4:
            return n(t[0], t[1], t[2], t[3]);
        case 5:
            return n(t[0], t[1], t[2], t[3], t[4]);
        case 6:
            return n(t[0], t[1], t[2], t[3], t[4], t[5]);
        case 7:
            return n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
        case 8:
            return n(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]);
        default:
            return yt(n) ? w(n, undefined, t) : w(St.apply(void 0, l([], v(Lt("f", t)), !1)), undefined, t)
        }
    }
    function Ct(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Wt(n, t.length > 0 ? t.slice(0, -1).concat(bt(t, -1)) : [])
    }
    function zt() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Ct(m, Array.from, Array, wt, n)
    }
    function Yt(n, t) {
        return new n(t)
    }
    function Tt(n) {
        var t, r;
        null !== (t = n["catch"]) && void 0 !== t || (n["catch"] = function(n) {
            return this.then(null, n)
        }
        ),
        null !== (r = n["finally"]) && void 0 !== r || (n["finally"] = function(n) {
            var t = function() {
                S(n) && n()
            };
            return this.then(t, t)
        }
        ),
        ut(typeof Symbol) && dt(Symbol.toStringTag, (function(t) {
            var r;
            null !== (r = n[t]) && void 0 !== r || (n[t] = "Promise")
        }
        ))
    }
    function Ft(n) {
        var t, r, i, u, o, e, f;
        null !== (t = n.resolve) && void 0 !== t || (n.resolve = function(t) {
            return function(n, t) {
                return Yt(n, (function(n, r) {
                    return n(t)
                }
                ))
            }(n, t)
        }
        ),
        null !== (r = n.reject) && void 0 !== r || (n.reject = function(t) {
            return r = t,
            Yt(n, (function(n, t) {
                return t(r)
            }
            ));
            var r
        }
        ),
        null !== (i = n.race) && void 0 !== i || (n.race = function(t) {
            return function(n, t) {
                return Yt(n, (function(n, r) {
                    try {
                        Y(zt(t), (function(t) {
                            t.then(n, r)
                        }
                        ))
                    } catch (Sn) {
                        r(Sn)
                    }
                }
                ))
            }(n, t)
        }
        ),
        null !== (u = n.all) && void 0 !== u || (n.all = function(t) {
            return function(n, t) {
                return Yt(n, (function(n, r) {
                    try {
                        var i = zt(t)
                          , u = []
                          , o = 0;
                        Y(i, (function(t, e) {
                            t.then((function(t) {
                                u[e] = t,
                                ++o == i.length && n(u)
                            }
                            ), r)
                        }
                        ))
                    } catch (Sn) {
                        r(Sn)
                    }
                }
                ))
            }(n, t)
        }
        ),
        null !== (o = n.allSettled) && void 0 !== o || (n.allSettled = function(t) {
            return function(n, t) {
                return Yt(n, (function(n, r) {
                    try {
                        var i = zt(t)
                          , u = []
                          , o = 0
                          , e = function() {
                            ++o == i.length && n(u)
                        };
                        Y(i, (function(n, t) {
                            n.then((function(n) {
                                u[t] = {
                                    status: "fulfilled",
                                    value: n
                                },
                                e()
                            }
                            ), (function(n) {
                                u[t] = {
                                    status: "rejected",
                                    reason: n
                                },
                                e()
                            }
                            ))
                        }
                        ))
                    } catch (Sn) {
                        r(Sn)
                    }
                }
                ))
            }(n, t)
        }
        ),
        null !== (e = n.any) && void 0 !== e || (n.any = function(t) {
            return function(n, t) {
                return Yt(n, (function(n, r) {
                    try {
                        var i = zt(t)
                          , u = 0;
                        Y(i, (function(t, o) {
                            var e = [];
                            t.then((function(t) {
                                n(t)
                            }
                            ), (function(n) {
                                if (e[o] = n,
                                ++u == i.length) {
                                    var t = "All promises were rejected"
                                      , f = "undefined" != typeof AggregateError ? new AggregateError(e,t) : function() {
                                        var n = new Error(t);
                                        return n.name = "AggregateError",
                                        n.errors = e,
                                        n
                                    }();
                                    r(f)
                                }
                            }
                            ))
                        }
                        ))
                    } catch (Sn) {
                        r(Sn)
                    }
                }
                ))
            }(n, t)
        }
        ),
        null !== (f = n.withResolvers) && void 0 !== f || (n.withResolvers = function() {
            return function(n) {
                var t, r;
                return {
                    promise: Yt(n, (function(n, i) {
                        t = n,
                        r = i
                    }
                    )),
                    resolve: t,
                    reject: r
                }
            }(n)
        }
        )
    }
    function Zt(n) {
        return Tt(n[u]),
        Ft(n),
        n
    }
    function At(n) {
        setTimeout(n, 0)
    }
    var Jt, Rt = function() {
        function n(n) {
            var t = this;
            this.l = ct,
            this.m = [];
            var r = !1
              , i = function(n) {
                r || (vt(n) && ht(n, "then") && S(n.then) ? n.then(i, u) : (r = !0,
                At((function() {
                    t.l = ft,
                    t.p = n,
                    t.g()
                }
                ))))
            }
              , u = function(n) {
                r || (r = !0,
                At((function() {
                    t.l = st,
                    t.p = n,
                    t.g()
                }
                )))
            };
            try {
                n(i, u)
            } catch (Sn) {
                u(Sn)
            }
        }
        return n[u].g = function() {
            at(this.m, (function(n) {
                return n()
            }
            ))
        }
        ,
        n[u].then = function(t, r) {
            var i = this;
            return new n((function(n, u) {
                var o = function() {
                    switch (i.l) {
                    case ft:
                        At((function() {
                            S(t) ? n(t(i.p)) : n(i.p)
                        }
                        ));
                        break;
                    case st:
                        At((function() {
                            S(r) ? n(r(i.p)) : u(i.p)
                        }
                        ))
                    }
                };
                i.l == ct ? i.m.push(o) : o()
            }
            ))
        }
        ,
        n
    }();
    function Xt(n, t, r) {
        try {
            return n(t, r)
        } catch (i) {}
        return undefined
    }
    function _t(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Xt(Wt, n, t)
    }
    function Et(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        var u = n[t];
        if (yt(u))
            return w(u, n, r);
        var o = St.apply(void 0, l([], v(Lt("c[n]", r, "c", "n")), !1));
        return Ct(o, n, t, r)
    }
    function Pt(n) {
        return b(n.trim, n, Vt)
    }
    function Vt(n) {
        return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    function Dt(n, t) {
        var r = 100 * n;
        return "".concat("number" == typeof (null == t ? void 0 : t.fixed) ? r.toFixed(t.fixed) : r, "%")
    }
    function Ht(n, t) {
        return n.join(t)
    }
    function Gt(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return "".concat(n, "(").concat(Ht(t, ", "), ")")
    }
    function qt() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Ht(n, ".")
    }
    function Qt() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Ht(n, " ")
    }
    function Bt() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Ht(n, "-")
    }
    function Ut(n, t) {
        return n instanceof t
    }
    function $t() {
        return ut(typeof ServiceWorkerGlobalScope) && Ut(ot(), ServiceWorkerGlobalScope)
    }
    function Kt(n) {
        return n.defaultView || n.parentWindow
    }
    function nr(n) {
        var t = n.document;
        if (t) {
            var r = n.location;
            if (r && r.replace)
                return [n, t, r]
        }
        return null
    }
    function tr() {
        var n = _t(it);
        return n ? nr(n) : null
    }
    function rr(n) {
        return m(Object.entries, Object, ir, n)
    }
    function ir(n) {
        return Mt(q(n), (function(t) {
            return [t, n[t]]
        }
        ))
    }
    function ur(n, t) {
        Y(rr(n), (function(r) {
            return t(r[1], r[0], n)
        }
        ))
    }
    function or(n) {
        return Object(n)
    }
    function er() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return fr(n)
    }
    function fr(n) {
        return Ct(m, Object.assign, Object, cr, n)
    }
    function cr() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        var r = v(n)
          , i = r[0]
          , u = r.slice(1);
        G(i);
        var o = or(i);
        return Y(u, (function(n) {
            var t;
            H(n) || (ur(n, (function(n, t) {
                o[t] = n
            }
            )),
            null === (t = Object.getOwnPropertySymbols) || void 0 === t || t.call(Object, n).forEach((function(t) {
                o[t] = n[t]
            }
            )))
        }
        )),
        o
    }
    function sr(n, t, r) {
        n.setAttribute(t, r)
    }
    function ar(n, t) {
        for (var r in t)
            sr(n, r, t[r])
    }
    function hr(n, t) {
        return n.appendChild(t)
    }
    function vr(n) {
        return n.ownerDocument
    }
    function lr(n, t) {
        return n.createTextNode(t)
    }
    function dr(n, t) {
        return k(t) ? lr(n, t) : t
    }
    function wr(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Ct(b, n.append, n, mr, t)
    }
    function mr(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        Y(t, (function(t) {
            return hr(n, dr(vr(n), t))
        }
        ))
    }
    function br(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return function() {
            return n.apply(void 0, l([], v(t), !1))
        }
    }
    function pr() {}
    function yr(n, t, r) {
        n[t] = r
    }
    function gr(n) {
        return n.toUpperCase()
    }
    function kr(n) {
        return n.length > 0 ? gr(n.charAt(0)) + n.slice(1) : n
    }
    Zt(Rt),
    function(n) {
        n.DEFAULT = "yyyy-MM-dd HH:mm:ss.SSS",
        n.yyyyMMddHHmmss = "yyyy-MM-dd HH:mm:ss",
        n.yyyyMMdd = "yyyy-MM-dd",
        n.HHmmss = "HH:mm:ss"
    }(Jt || (Jt = {})),
    function() {
        function n(n) {
            this.k = n
        }
        n[u].toString = function() {
            return S(this.k) ? this.k() : this.k
        }
    }();
    var Ir = {};
    function Or(n, t, r) {
        var i = function(n) {
            return n.style
        }(n)
          , u = Ir[t];
        u || (Ir[t] = u = k(rt(i, t)) ? yr : function(n, t) {
            var r = kr(t)
              , i = Mt(["ms", "Moz", "webkit"], (function(n) {
                return hn(n, r)
            }
            ))
              , u = p(i, (function(t) {
                return k(rt(n, t))
            }
            ));
            if (u > -1) {
                var o = i[u];
                return function(n, t, r) {
                    return yr(n, o, r)
                }
            }
            return pr
        }(i, t)),
        u(i, t, r)
    }
    function jr(n, t) {
        for (var r in t)
            Or(n, r, t[r])
    }
    function Sr(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        Y(t, (function(t) {
            var r = t.attributes
              , i = t.style
              , u = t.children
              , o = s(t, ["attributes", "style", "children"]);
            r && ar(n, r),
            i && jr(n, i),
            u && wr.apply(void 0, l([n], v(u), !1)),
            er(n, o)
        }
        ))
    }
    function xr(n, t, r) {
        return n.createElement(t, r)
    }
    function Mr(n, t, r) {
        var i = xr(n, t);
        if (r) {
            var u = r.children
              , o = s(r, ["children"]);
            Sr(i, u ? c(c({}, o), {
                children: Mt(u, (function(t) {
                    if (S(t))
                        return t(i);
                    var r = t.tagName
                      , u = s(t, ["tagName"]);
                    return Mr(n, r, u)
                }
                ))
            }) : o)
        }
        return i
    }
    function Nr(n, t, r) {
        var i = Mr(vr(n), t, r);
        return wr(n, i),
        i
    }
    var Lr = vn("DOM", "Node")
      , Wr = "Inserted"
      , Cr = "Removed"
      , zr = "Document"
      , Yr = vn(Lr, Wr, "Into", zr)
      , Tr = vn(Lr, Cr, "From", zr)
      , Fr = vn(Lr, Wr)
      , Zr = vn(Lr, Cr)
      , Ar = vn("DOM", "SubtreeModified");
    function Jr(n, t, r, i) {
        return n.addEventListener(t, r, i),
        function() {
            return n.removeEventListener(t, r, i)
        }
    }
    function Rr() {
        return ut(typeof MutationObserver)
    }
    function Xr(n, t) {
        if (Rr()) {
            var r = new MutationObserver((function(n) {
                for (var r = 0, i = n.length; r < i; r++)
                    for (var u = 0, o = n[r].addedNodes, e = o.length; u < e; u++)
                        t(o[u])
            }
            ));
            return r.observe(n, {
                childList: !0,
                subtree: !0
            }),
            {
                revoke: function() {
                    return r.disconnect()
                }
            }
        }
        return {
            revoke: Jr(n, Fr, (function(n) {
                return t(n.target)
            }
            ), !0)
        }
    }
    var _r = "over"
      , Er = "mouse"
      , Pr = vn(Er, _r)
      , Vr = vn(Er, "out")
      , Dr = "pointer"
      , Hr = vn(Dr, _r)
      , Gr = vn(Dr, "out");
    function qr() {
        return ut(typeof PointerEvent)
    }
    function Qr() {
        return qr() ? Hr : Pr
    }
    function Br() {
        return qr() ? Gr : Vr
    }
    function Ur(n, t, r, i) {
        var u, o, e, f = null !== (e = null !== (u = n.head) && void 0 !== u ? u : null === (o = n.getElementsByTagName("head")) || void 0 === o ? void 0 : o[0]) && void 0 !== e ? e : n.documentElement, c = n.createElement("link");
        c.rel = "preload",
        c.as = r,
        c.href = t;
        var s = "high";
        if (c.importance = s,
        c.fetchPriority = s,
        i)
            for (var a in i)
                c[a] = i[a];
        return f.appendChild(c),
        c
    }
    function $r(n) {
        return b(n.remove, n, Kr)
    }
    function Kr(n) {
        var t;
        null === (t = n.parentNode) || void 0 === t || t.removeChild(n)
    }
    function ni(n) {
        _t($r, n.target)
    }
    function ti(n, t) {
        N(t);
        for (var r = 0, i = n.length; r < i; r++)
            if (W(n, r) && t(n[r], r, n))
                return !0;
        return !1
    }
    function ri(n, t) {
        return b(n.some, n, ti, t)
    }
    function ii(n, t) {
        var r = n.split(".")
          , i = t.split(".");
        if (r.length < i.length)
            return !1;
        for (var u = r.slice(r.length - i.length), o = i.length - 1; o >= 0; o--)
            if (u[o] !== i[o])
                return !1;
        return !0
    }
    function ui(n, t, r) {
        return !(!n || !ri(t, (function(t) {
            return !!(r && ht(r, t) && ri(r[t], (function(t) {
                return ii(n, t)
            }
            ))) || ii(n, t)
        }
        )))
    }
    var oi = function() {
        function n(n, t) {
            this.I = n,
            this.O = t
        }
        return r(n[u], "value", (function() {
            return this.I
        }
        )),
        n[u].is = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return ui(this.I, n, this.O)
        }
        ,
        n[u].isnot = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return !!this.I && !this.is.apply(this, l([], v(n), !1))
        }
        ,
        n
    }();
    function ei(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        var i, u = 0;
        t.length > 1 ? (i = t[1],
        u++) : i = n[0];
        for (var o = t[0], e = 0, f = n.length; e < f; e++)
            W(n, e) && u++ > 0 && (i = o(i, n[e], e, n));
        return i
    }
    function fi(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Ct(b, n.reduce, n, ei, t)
    }
    function ci(n) {
        return n.toLowerCase()
    }
    function si(n, t, r, i, u, o, e, f, c, s, a) {
        return {
            href: n,
            protocol: t,
            username: r,
            password: i,
            host: u,
            origin: o,
            hostname: e,
            port: f,
            pathname: c,
            search: s,
            hash: a
        }
    }
    function ai(n) {
        var t, r, i = n.match(/^(\w{2,}\:)([^\?\#]*)?(\?[^#]+)?(#.+)?$/);
        if (i)
            return si(i[0], ci(i[1]), "", "", "", "null", "", "", i[2] || "", null !== (t = i[3]) && void 0 !== t ? t : "", null !== (r = i[4]) && void 0 !== r ? r : "");
        throw new Error("".concat(n, " is not a uri"))
    }
    function hi(n) {
        switch (function(n) {
            var t = null == n ? void 0 : n.match(/(\w+\:)\S+/);
            return t ? ci(t[1]) : null
        }(n)) {
        case "https:":
        case "http:":
        case "ws:":
        case "wss:":
        case "ftp:":
        case "sftp:":
            return function(n, t) {
                var r, i, u, o, e, f, c, s, a = n.match(/^(\w{2,}\:)((\/*)((([\w\.]+)(\:([\w\.]+)?)?)@)?(([\w\.]+)(\:(\d+)?)?))?(\/[^\?\#]*)?(\?[^#]*)?(#.*)?$/);
                if (a) {
                    var h = ""
                      , v = ci(a[1]);
                    h += v;
                    var l = null !== (r = a[6]) && void 0 !== r ? r : ""
                      , d = null !== (i = a[8]) && void 0 !== i ? i : "";
                    if (h += "//",
                    null === (u = null == t ? void 0 : t.authentication) || void 0 === u || u) {
                        var w = "".concat(l).concat(d ? ":" + d : "");
                        h += w ? w + "@" : ""
                    }
                    var m = ci(null !== (o = a[10]) && void 0 !== o ? o : "")
                      , b = null !== (e = a[12]) && void 0 !== e ? e : ""
                      , p = m + ((null === (f = null == t ? void 0 : t.port) || void 0 === f || f) && b ? ":" + b : "")
                      , y = p ? v + "//" + p : "null";
                    h += "".concat(p);
                    var g = a[13] || "/"
                      , k = null !== (c = a[14]) && void 0 !== c ? c : ""
                      , I = null !== (s = a[15]) && void 0 !== s ? s : "";
                    return si(h += "".concat(g).concat(k).concat(I), v, l, d, p, y, m, b, g, "?" === k ? "" : k, "#" === I ? "" : I)
                }
                try {
                    var O = new URL(n);
                    return console.warn("url is not parsed: " + n),
                    O
                } catch (Sn) {
                    throw Sn
                }
            }(n);
        case "file:":
            return function(n) {
                var t, r, i, u = n.match(/^(\w{2,}\:)(\/*)([^\?\#]*)?(\?[^#]+)?(#.+)?$/);
                if (u) {
                    var o = u[0]
                      , e = ci(u[1]);
                    return si(o, e, "", "", "", e + "//", "", "", "/".concat(null !== (t = u[3]) && void 0 !== t ? t : ""), null !== (r = u[4]) && void 0 !== r ? r : "", null !== (i = u[5]) && void 0 !== i ? i : "")
                }
                throw new Error("".concat(n, " is not a file uri"))
            }(n);
        case "blob":
            var t = ai(n);
            return c(c({}, t), {
                origin: hi(t.pathname).origin
            });
        default:
            return ai(n)
        }
    }
    function vi(n, t) {
        return fi(n, (function(n, r) {
            var i = c({}, r);
            return i.url && (i.parsed = function(n) {
                if (n.accessible) {
                    var t = n.window.location;
                    if (t.origin)
                        return t
                }
                return hi(n.url)
            }(i),
            i.domain = new oi(i.parsed.hostname,t),
            n.push(i)),
            n
        }
        ), [])
    }
    var li, di = "none", wi = "hidden", mi = "100%", bi = "visible";
    function pi() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return er.apply(void 0, l([{}], v(n), !1))
    }
    function yi(n) {
        return "".concat(n)
    }
    function gi(n) {
        return j(n) ? n + "px" : n
    }
    function ki(n, t) {
        return Gt("translate", n, t)
    }
    function Ii() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Gt.apply(void 0, l(["scale"], v(n), !1))
    }
    function Oi(n, t) {
        return ki(gi(n), gi(t))
    }
    function ji(n) {
        return Gt("brightness", function(n) {
            return k(n) ? n : Dt(n)
        }(n))
    }
    function Si(n, t, r, i) {
        return Gt("rgba", n, t, r, i)
    }
    function xi(n, t) {
        return {
            width: n,
            height: t
        }
    }
    function Mi(n, t, r, i) {
        return pi(function(n, t) {
            return pi(zi(), Ni(n), Li(t))
        }(n, t), xi(r, i))
    }
    function Ni(n) {
        return {
            left: n
        }
    }
    function Li(n) {
        return {
            top: n
        }
    }
    function Wi(n) {
        return {
            transform: n
        }
    }
    function Ci(n) {
        return {
            position: n
        }
    }
    function zi() {
        return Ci("absolute")
    }
    function Yi(n) {
        return {
            display: n
        }
    }
    function Ti(n) {
        return {
            opacity: yi(n)
        }
    }
    function Fi(n) {
        return {
            zIndex: yi(n)
        }
    }
    function Zi(n) {
        return {
            borderRadius: gi(n)
        }
    }
    function Ai(n) {
        return Ni(gi(n))
    }
    function Ji(n) {
        return {
            right: gi(n)
        }
    }
    function Ri(n) {
        return Li(gi(n))
    }
    function Xi(n) {
        return {
            bottom: gi(n)
        }
    }
    function _i(n, t) {
        return c(c({}, Ai(n)), Ri(t))
    }
    function Ei(n, t) {
        return c(c({}, Ai(n)), Xi(t))
    }
    function Pi(n) {
        return c(c(c(c({}, Ai(n)), Ri(n)), Ji(n)), Xi(n))
    }
    function Vi(n, t) {
        return xi(gi(n), gi(t))
    }
    function Di() {
        return Mi("0", "0", mi, mi)
    }
    function Hi() {
        return xi(mi, mi)
    }
    function Gi(n) {
        return {
            visibility: k(n) ? n : n ? bi : wi
        }
    }
    function qi(n) {
        return {
            overflow: k(n) ? n : n ? bi : wi
        }
    }
    function Qi(n) {
        return {
            pointerEvents: k(n) ? n : n ? an : di
        }
    }
    function Bi(n) {
        return {
            userSelect: k(n) ? n : n ? "text" : di
        }
    }
    function Ui() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Wi(Ii.apply(void 0, l([], v(n), !1)))
    }
    function $i(n, t) {
        return Wi(function(n, t) {
            return ki("-".concat(Dt(n)), "-".concat(Dt(t)))
        }(n, t))
    }
    function Ki(n, t) {
        return Wi(Oi(n, t))
    }
    function nu(n, t) {
        return n.getElementsByTagName(t)
    }
    function tu(n) {
        var t, r;
        return null !== (t = n.body) && void 0 !== t ? t : null === (r = nu(n, "body")) || void 0 === r ? void 0 : r[0]
    }
    function ru(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Mt(n, (function(n) {
            return Wt(n, t)
        }
        ))
    }
    function iu(n) {
        var t;
        if (li)
            return c({}, li);
        var r = Mr(n, gn, {
            style: Yi(di)
        })
          , i = ((t = {})[Yr] = !1,
        t[Tr] = !1,
        t[Fr] = !1,
        t[Zr] = !1,
        t[Ar] = !1,
        t)
          , u = Mt(q(i), (function(n) {
            return Jr(r, n, (function() {
                i[n] = !0
            }
            ))
        }
        ));
        return wr(tu(n), r),
        wr(r, ""),
        $r(r),
        ru(u),
        li = er({}, i),
        i
    }
    var uu = qt(cn, jn, Pn)
      , ou = qt(cn, jn, Jn)
      , eu = qt(cn, jn, En)
      , fu = qt(cn, Fn, "before")
      , cu = qt(cn, Fn, "after")
      , su = qt(cn, Fn, "post")
      , au = qt(cn, Bn, Pn)
      , hu = qt(cn, Bn, Jn)
      , vu = qt(cn, Bn, En)
      , lu = qt(cn, Kn, Hn)
      , du = qt(sn, pn)
      , wu = qt(sn, yn)
      , mu = qt(sn, kn)
      , bu = qt(In, hn("stop", "event"))
      , pu = qt(In, "container")
      , yu = qt(In, "main")
      , gu = qt(In, "overlay")
      , ku = qt(Cn, Rn)
      , Iu = qt(Cn, Ln)
      , Ou = qt(Cn, "priority")
      , ju = qt(Cn, qn)
      , Su = qt(ln, "loc")
      , xu = qt(ln, $n)
      , Mu = qt(ln, "history")
      , Nu = qt(ln, Un)
      , Lu = qt(Xn, jn)
      , Wu = qt(Xn, qn)
      , Cu = qt(Xn, an)
      , zu = qt(Xn, mn)
      , Yu = qt(_n, "waiting")
      , Tu = qt(_n, qn)
      , Fu = qt(_n, "closings")
      , Zu = qt(_n, mn)
      , Au = qt(Qn, jn)
      , Ju = qt(Qn, hn("script", "url"))
      , Ru = qt(Qn, qn)
      , Xu = qt(Qn, Vn)
      , _u = qt(Qn, an)
      , Eu = qt(Bn, Zn)
      , Pu = qt(Bn, Wn)
      , Vu = qt(Bn, "naminit")
      , Du = qt(Kn, dn)
      , Hu = qt(Kn, Gn);
    function Gu(n, t) {
        var r = d(n, t);
        return r > -1 ? n[r] : undefined
    }
    function qu(n, t) {
        return b(n.find, n, Gu, t)
    }
    function Qu(n, t) {
        return b(n.includes, n, Bu, t)
    }
    function Bu(n, t) {
        return E(n, t) > -1
    }
    var Uu, $u = function() {
        function n() {
            this.j = []
        }
        return r(n[u], "all", (function() {
            return this.j.concat()
        }
        )),
        n[u].create = function(n) {
            return this.S(new n)
        }
        ,
        n[u].append = function(n) {
            return Qu(this.j, n) || this.S(n),
            n
        }
        ,
        n[u].S = function(n) {
            return this.j.push(n),
            n.adopted(this),
            n
        }
        ,
        n[u].get = function(n) {
            return qu(this.j, (function(t) {
                return Ut(t, n)
            }
            ))
        }
        ,
        n[u]["for"] = function(n) {
            return this.get(n) || this.create(n)
        }
        ,
        n[u].locate = function(n, t) {
            var r = this.get(n);
            return r && t(r)
        }
        ,
        n
    }();
    function Ku(n, t) {
        return b(n.filter, n, no, t)
    }
    function no(n, t) {
        var r = [];
        return Y(n, (function(i, u) {
            t(i, u, n) && r.push(i)
        }
        )),
        r
    }
    function to(n) {
        return n.getTime()
    }
    function ro() {
        return Date.now ? Date.now() : to(new Date)
    }
    function io() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        var r = n.pop();
        return Wt(r, n)
    }
    function uo(n) {
        Uu || (Uu = ut(typeof queueMicrotask) ? queueMicrotask : et() && Promise.resolve ? function(n) {
            return Promise.resolve().then(n)
        }
        : function(n) {
            return setTimeout(n, 0)
        }
        ),
        Uu(n)
    }
    function oo(n) {
        var t = !0
          , r = function() {
            t = !1
        };
        return uo((function() {
            t && (r(),
            n())
        }
        )),
        function(n) {
            return {
                revoke: n
            }
        }(r)
    }
    function eo(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return oo((function() {
            return n.apply(void 0, l([], v(t), !1))
        }
        ))
    }
    function fo(n, t) {
        return function() {
            return n.off(t)
        }
    }
    function co(n, t, r) {
        return n.on(t, r),
        fo(n, t)
    }
    function so(n, t, r) {
        return n.once(t, r),
        fo(n, t)
    }
    var ao, ho = function() {
        function n(n) {
            var t, r, i = this;
            this.M = [],
            null !== (t = (r = this.M).at) && void 0 !== t || (r.at = function(n) {
                return mt(i.M, n)
            }
            ),
            this.N = er({
                name: null,
                maxLength: Infinity
            }, n),
            this.L = {
                before: new un,
                change: new un
            }
        }
        return r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "options", (function() {
            return this.N
        }
        )),
        n[u].append = function() {
            for (var n, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            this.L.before.emit(t);
            var i = t.length;
            if (i > 0) {
                (n = this.M).push.apply(n, l([], v(t), !1));
                var u = this.M.length
                  , o = this.N.maxLength;
                u > o && this.M.splice(o, u - o),
                this.L.change.emit({
                    last: t[i - 1].value,
                    records: t
                })
            }
        }
        ,
        n[u].set = function(n) {
            this.append(vo(n, ro()))
        }
        ,
        n[u].observe = function(n) {
            var t, r = this, i = [], u = function(u) {
                i.push.apply(i, l([], v(u), !1)),
                t || (t = eo((function() {
                    t = null,
                    n(r, i.splice(0, i.length))
                }
                )))
            };
            return this.M.length > 0 && u([]),
            {
                revoke: co(this.L.change, (function(n) {
                    return u(n.records)
                }
                ))
            }
        }
        ,
        n[u].assert = function(n, t) {
            var r = this.observe((function(i, u) {
                n(i, u) && (r.revoke(),
                t(i, u))
            }
            ));
            return r
        }
        ,
        r(n[u], "current", (function() {
            return this.at(-1)
        }
        )),
        r(n[u], "previous", (function() {
            return this.at(-2)
        }
        )),
        n[u].at = function(n) {
            var t;
            return null === (t = bt(this.M, n)) || void 0 === t ? void 0 : t.value
        }
        ,
        r(n[u], "records", (function() {
            return this.M
        }
        )),
        n
    }();
    function vo(n, t) {
        return void 0 === t && (t = ro()),
        {
            value: n,
            timestamp: t
        }
    }
    function lo(n) {
        return m(Array.isArray, Array, wo, n)
    }
    function wo(n) {
        return Ut(n, Array)
    }
    function mo(n) {
        return vt(n) && !lo(n)
    }
    function bo(n, t) {
        return mo(n) && mo(t) ? function(n, t) {
            ur(t, (function(t, r) {
                var i = n[r];
                n[r] = mo(i) ? bo(i, t) : t
            }
            ))
        }(n, t) : n = t,
        n
    }
    function po(n) {
        return function(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            var i = n;
            return Y(t, (function(n) {
                i = bo(i, n)
            }
            )),
            i
        }({
            exclusive: !1,
            preserve: !1,
            id: "ad_" + ro(),
            refresh: an,
            allow_ui_tag: !0,
            allow_ui_close: !0,
            close_button_delay: 5,
            ad_tag: "Ad",
            debug: !1,
            size: {
                width: 336,
                height: 280
            },
            position: {
                x: "50%",
                y: "50%"
            },
            translate: {
                x: "-50%",
                y: "-50%"
            }
        }, n)
    }
    function yo(n) {
        n.length = 0
    }
    function go(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        yo(n),
        n.push.apply(n, l([], v(t), !1))
    }
    function ko(n, t) {
        Ct(go, n, Ku(n, t))
    }
    function Io(n, t) {
        var r = function(n, t) {
            for (var r = n.length - 1; r >= 0; r--)
                if (t(n[r], r, n))
                    return r;
            return -1
        }(n, t);
        return r > -1 ? n[r] : undefined
    }
    function Oo(n, t) {
        return b(n.findLast, n, Io, t)
    }
    function jo(n, t) {
        var r = n.length - 1;
        Y(n, (function(n, i, u) {
            t(n, r - i, u)
        }
        ))
    }
    function So(n, t, r) {
        n.splice(r, 0, n.splice(t, 1)[0])
    }
    function xo(n, t, r) {
        var i = _(n, t);
        return !!(i > -1 && V(n, r)) && (So(n, i, r),
        !0)
    }
    function Mo(n) {
        return t = n,
        ro() - t;
        var t
    }
    function No(n) {
        return Mo(n) / 1e3
    }
    function Lo(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Wt(n, t)
    }
    !function(n) {
        n.AD_UNABLE = "ad_unable"
    }(ao || (ao = {}));
    var Wo, Co = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        r(t[u], "actived", (function() {
            return this.W
        }
        )),
        t[u].active = function() {
            this.W || (this.W = !0,
            Y(this.j, (function(n) {
                return n.enabled()
            }
            )))
        }
        ,
        t[u].deactive = function() {
            this.W && (this.W = !1,
            Y(this.j, (function(n) {
                return n.disabled()
            }
            )))
        }
        ,
        t
    }($u);
    function zo(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return function() {
            for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
            return w(n, this, l(l([], v(t), !1), v(r), !1))
        }
    }
    function Yo(n, t) {
        return W(n, t)
    }
    function To(n, t) {
        return Yo(n, t) || (n[t] = 0),
        n[t]
    }
    function Fo(n, t) {
        return ++n[t]
    }
    function Zo(n, t) {
        return Yo(n, t) ? Fo(n, t) : To(n, t)
    }
    function Ao(n) {
        var t;
        return Wo || (Wo = {
            has: zo(Yo, t = {}),
            get: zo(To, t),
            next: zo(Fo, t),
            once: zo(Zo, t)
        }),
        hn(n, Wo.once(n))
    }
    var Jo = function() {
        function n() {}
        return n[u].adopted = function(n) {
            this.C = n
        }
        ,
        r(n[u], "docker", (function() {
            return this.C
        }
        )),
        n
    }()
      , Ro = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t
    }(function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].adopted = function(t) {
            n[u].adopted.call(this, t),
            t.actived && this.enabled()
        }
        ,
        t[u].enabled = function() {}
        ,
        t[u].disabled = function() {}
        ,
        t
    }(Jo))
      , Xo = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].set = function(n) {
            this.Y = n
        }
        ,
        r(t[u], "data", (function() {
            return this.Y
        }
        )),
        t
    }(Ro)
      , _o = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].set = function(t) {
            n[u].set.call(this, t);
            var r = this.data.type.replace(/_/g, "-");
            this.T = Ao(r + "-")
        }
        ,
        r(t[u], "id", (function() {
            return this.T
        }
        )),
        t
    }(Xo);
    function Eo(n) {
        return n / 1e3
    }
    var Po, Vo, Do, Ho, Go, qo = function() {
        function n(n) {
            void 0 === n && (n = function() {
                return ro()
            }
            ),
            this.F = n,
            this.l = {
                playing: !1,
                play_stamp: 0,
                position_ms: 0
            },
            this.Z = {
                id: undefined,
                value: undefined
            }
        }
        return n[u].A = function() {
            var n = this.Z;
            return n.id == undefined && (n.value = this.F(),
            n.id = setTimeout((function() {
                n.id = undefined
            }
            ), 0)),
            n.value
        }
        ,
        r(n[u], "isPlaying", (function() {
            return this.l.playing
        }
        )),
        n[u].J = function() {
            return this.l.position_ms + (this.A() - this.l.play_stamp)
        }
        ,
        r(n[u], "currentTime", (function() {
            return Eo(this.l.playing ? this.J() : this.l.position_ms)
        }
        )),
        n[u].start = function() {
            var n = this.l;
            n.playing || (n.playing = !0,
            n.play_stamp = this.A(),
            this.R(!0, !1))
        }
        ,
        n[u].stop = function() {
            var n = this.l;
            n.playing && (n.playing = !1,
            n.position_ms += this.A() - n.play_stamp,
            this.R(!1, !0))
        }
        ,
        n[u].toggle = function() {
            this.isPlaying ? this.stop() : this.start()
        }
        ,
        n[u].to = function(n) {
            var t = this.l
              , r = 1e3 * n;
            if (t.playing) {
                var i = this.J();
                i != r && (t.play_stamp = this.A(),
                t.position_ms = r,
                this.X(n, Eo(i)))
            } else {
                var u = t.position_ms;
                r != u && (t.position_ms = r,
                this.X(n, Eo(u)))
            }
        }
        ,
        n[u].R = function(n, t) {}
        ,
        n[u].X = function(n, t) {}
        ,
        n
    }(), Qo = function() {
        function n() {
            this._ = []
        }
        return n[u].cut = function() {
            this.pause();
            var n = new qo;
            this._.push(n),
            n.start()
        }
        ,
        n[u].resume = function() {
            this.length > 0 && 0 == this.isPlaying && pt(this._).start()
        }
        ,
        n[u].pause = function() {
            this.isPlaying && pt(this._).stop()
        }
        ,
        r(n[u], "length", (function() {
            return this._.length
        }
        )),
        r(n[u], "lastTime", (function() {
            return this.length > 0 ? pt(this._).currentTime : 0
        }
        )),
        n[u].calc = function(n, t) {
            return fi(this._.slice(n, t), (function(n, t) {
                return n + t.currentTime
            }
            ), 0)
        }
        ,
        r(n[u], "isPlaying", (function() {
            return this.length > 0 && pt(this._).isPlaying
        }
        )),
        n[u].clear = function() {
            this._.length = 0
        }
        ,
        n
    }(), Bo = function(n) {
        function t(t) {
            var r = n.call(this) || this;
            return t(r.v),
            r
        }
        return f(t, n),
        t
    }(tn), Uo = function() {
        function n() {
            this.P = new un,
            this.V = function() {
                var n;
                return {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        n = t
                    }
                }
            }()
        }
        return r(n[u], "hook", (function() {
            return this.P
        }
        )),
        n[u].render = function(n) {
            for (var t, r = [], i = 1; i < arguments.length; i++)
                r[i - 1] = arguments[i];
            var u = this.V.get();
            B(n, u) || (this.V.set(n),
            (t = this.P).emit.apply(t, l([n, u], v(r), !1)))
        }
        ,
        r(n[u], "getter", (function() {
            return this.V.get
        }
        )),
        n
    }(), $o = function() {
        function n() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            var r = this;
            this.D = new Uo,
            this.P = new Bo((function(n) {
                r.D.hook.on((function(t, r, i) {
                    return n(t, r, i)
                }
                ))
            }
            )),
            n.length > 0 && this.set(n[0])
        }
        return n[u].set = function(n) {
            this.D.render(n, this)
        }
        ,
        r(n[u], "value", (function() {
            return this.getter()
        }
        )),
        r(n[u], "getter", (function() {
            return this.D.getter
        }
        )),
        r(n[u], "hook", (function() {
            return this.P
        }
        )),
        n
    }(), Ko = function(n) {
        function t(t) {
            return n.call(this, t) || this
        }
        return f(t, n),
        t[u].watch = function(n) {
            var t = this;
            n(this.value, this);
            var r = function(r) {
                return n(r, t)
            };
            return this.D.hook.on(r),
            {
                revoke: function() {
                    return t.D.hook.off(r)
                }
            }
        }
        ,
        t[u].is = function(n, t) {
            return this.once((function(t) {
                return B(t, n)
            }
            ), t)
        }
        ,
        t[u].once = function(n, t) {
            var r = this
              , i = this.value;
            if (n(i))
                return t(i, this),
                null;
            var u = function() {
                return r.D.hook.off(o)
            }
              , o = function(i, o) {
                n(i, o) && (u(),
                t(i, r))
            };
            return this.D.hook.on(o),
            {
                revoke: u
            }
        }
        ,
        t
    }($o), ne = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.H = new Qo,
            t.G = new Ko(0),
            t.q = new Ko(0),
            t
        }
        return f(t, n),
        r(t[u], "stopwatch", (function() {
            return this.H
        }
        )),
        r(t[u], "duration", (function() {
            return this.q
        }
        )),
        r(t[u], "progress", (function() {
            return this.G
        }
        )),
        r(t[u], "canshow", (function() {
            return this.G.value < 1 && this.q.value > 0
        }
        )),
        t[u].reset = function() {
            this.H.clear(),
            this.G.set(0)
        }
        ,
        t
    }(Ro), te = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.B = new un,
            t.U = new un,
            t.$ = new un,
            t.K = new un,
            t.nn = new un,
            t.tn = new un,
            t.rn = new un,
            t.un = new un,
            t.en = new un,
            t
        }
        return f(t, n),
        r(t[u], "preload", (function() {
            return this.B
        }
        )),
        r(t[u], "start", (function() {
            return this.U
        }
        )),
        r(t[u], "end", (function() {
            return this.$
        }
        )),
        r(t[u], "link", (function() {
            return this.rn
        }
        )),
        r(t[u], "echo", (function() {
            return this.un
        }
        )),
        r(t[u], "warn", (function() {
            return this.tn
        }
        )),
        r(t[u], "error", (function() {
            return this.nn
        }
        )),
        r(t[u], "show", (function() {
            return this.en
        }
        )),
        r(t[u], "timeout", (function() {
            return this.K
        }
        )),
        t
    }(Ro), re = function(n) {
        function t() {
            return n.call(this, []) || this
        }
        return f(t, n),
        t[u].append = function(n) {
            this.fn.push(n)
        }
        ,
        t
    }(function() {
        function n(n) {
            this.fn = n
        }
        return r(n[u], "length", (function() {
            return this.fn.length
        }
        )),
        n[u].at = function(n) {
            return bt(this.fn, n)
        }
        ,
        n[u].search = function(n) {
            return E(this.fn, n)
        }
        ,
        r(n[u], "first", (function() {
            return this.fn[0]
        }
        )),
        r(n[u], "last", (function() {
            return pt(this.fn)
        }
        )),
        n
    }()), ie = function(n) {
        function t(t) {
            var r = n.call(this) || this;
            return r.cn = t,
            r.sn = {},
            r
        }
        return f(t, n),
        r(t[u], "cache", (function() {
            return this.sn
        }
        )),
        t[u].append = function(t) {
            var r, i;
            n[u].append.call(this, t);
            var o = t[this.cn];
            (null !== (r = (i = this.sn)[o]) && void 0 !== r ? r : i[o] = new re).append(t)
        }
        ,
        t
    }(re), ue = function(n) {
        function t() {
            return n.call(this, "type") || this
        }
        return f(t, n),
        r(t[u], "closes", (function() {
            var n, t;
            return null !== (t = null === (n = this.cache.close) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
        }
        )),
        r(t[u], "starts", (function() {
            var n, t;
            return null !== (t = null === (n = this.cache.start) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
        }
        )),
        r(t[u], "links", (function() {
            var n, t;
            return null !== (t = null === (n = this.cache.link) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
        }
        )),
        r(t[u], "ok", (function() {
            var n = this;
            return this.starts > 0 && Lo((function(t) {
                for (var r = n.search(t.last) + 1, i = n.length; r < i; r++)
                    if (n.at(r).type == Sn)
                        return !1;
                return !0
            }
            ), this.cache.start)
        }
        )),
        t
    }(ie), oe = function(n) {
        function t(t) {
            var r = n.call(this) || this;
            return r.T = t,
            r
        }
        return f(t, n),
        r(t[u], "id", (function() {
            return this.T
        }
        )),
        t
    }(ue), ee = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.fn = new re,
            t
        }
        return f(t, n),
        r(t[u], "list", (function() {
            return this.fn
        }
        )),
        t[u].cut = function(n) {
            this.fn.append(new oe(n))
        }
        ,
        t
    }(Ro);
    function fe(n) {
        return n.documentMode
    }
    function ce(n, t, r) {
        return null != r || (r = n.length),
        r > n.length && (r = n.length),
        n.substring(r - t.length, r) === t
    }
    function se(n) {
        return null != Vo ? Vo : Vo = ae(n, "fullscreenElement")
    }
    function ae(n, t) {
        if (ht(n, t))
            return "";
        var r, i = kr(t);
        for (var u in n)
            if (b((r = u).endsWith, r, ce, i, void 0))
                return u.slice(0, u.length - i.length);
        return null
    }
    function he(n, t, r) {
        if (ht(n, r))
            return r;
        var i = t + kr(r);
        return ht(n, i) ? i : null
    }
    function ve(n) {
        return null != Do ? Do : Do = he(n, se(n), "fullscreenElement") || he(n, se(n), "fullScreenElement")
    }
    function le(n) {
        return n[ve(n)]
    }
    function de(n, t) {
        return b(n.contains, n, we, t)
    }
    function we(n, t) {
        for (var r = t; r; r = r.parentNode)
            if (r === n)
                return !0;
        return !1
    }
    function me(n) {
        var t;
        return 11 === n.nodeType && (null === (t = n.host) || void 0 === t ? void 0 : t.shadowRoot) === n
    }
    function be(n, t) {
        return b(n.getRootNode, n, pe, t)
    }
    function pe(n, t) {
        for (var r = n, i = r.parentNode; i; i = i.parentNode)
            r = i;
        return (null == t ? void 0 : t.composed) && me(r) ? pe(r.host, t) : r
    }
    function ye(n) {
        return 9 === n.nodeType
    }
    function ge(n) {
        return n.offsetWidth
    }
    function ke(n) {
        return n.offsetHeight
    }
    function Ie(n) {
        return n.offsetLeft
    }
    function Oe(n) {
        return n.offsetTop
    }
    function je(n) {
        return n.offsetParent
    }
    function Se(n) {
        for (var t, r = !1, i = function(i) {
            if (!r) {
                r = !0;
                var u = be(n);
                (ye(u) || me(u)) && (t = le(u))
            }
            return !t || de(t, i)
        }, u = [], o = je(n); o && i(o); o = je(o))
            u.push(o);
        return u
    }
    function xe(n, t) {
        return fi(t, (function(n, t) {
            return n[0] += Ie(t),
            n[1] += Oe(t),
            n
        }
        ), n)
    }
    function Me(n, t) {
        return xe([Ie(n), Oe(n)], t)
    }
    function Ne(n) {
        return Me(n, Se(n))
    }
    function Le(n) {
        var t;
        return null !== (t = function(n) {
            return n.isConnected
        }(n)) && void 0 !== t ? t : ye(be(n, {
            composed: !0
        }))
    }
    function We(n) {
        return Le(n) ? function(n) {
            return be(n, {
                composed: !0
            })
        }(n) : null
    }
    function Ce(n) {
        return Go || (Go = ut(typeof cancelAnimationFrame) ? cancelAnimationFrame : clearTimeout),
        Go(n)
    }
    function ze(n) {
        return 24 * n * 3600
    }
    function Ye(n) {
        var t;
        if (j(n))
            return n;
        if (k(n))
            return function(n) {
                return Date.parse ? Date.parse(n) : to(new Date(n))
            }(n);
        var r = null === (t = null == n ? void 0 : n.getTime) || void 0 === t ? void 0 : t.call(n);
        return j(r) ? r : NaN
    }
    function Te() {
        return performance
    }
    function Fe() {
        return ut(typeof performance)
    }
    !function(n) {
        n.NO_SCALE = "noScale",
        n.SHOW_ALL = "showAll",
        n.EXACT_FIT = "exactFit",
        n.NO_BORDER = "noBorder",
        n.FIXED_NARROW = "fixedNarrow",
        n.FIXED_WIDE = "fixedWide",
        n.FIXED_WIDTH = "fixedWidth",
        n.FIXED_HEIGHT = "fixedHeight"
    }(Po || (Po = {}));
    var Ze, Ae = Fe() ? NaN : ro();
    function Je() {
        return Te().now
    }
    function Re() {
        var n, t;
        if (Fe()) {
            var r = null !== (n = Te().timeOrigin) && void 0 !== n ? n : null === (t = Te().timing) || void 0 === t ? void 0 : t.navigationStart;
            if (j(r))
                return r
        }
        return Ae
    }
    function Xe() {
        return Fe() && Je() ? L(Je(), Te()) : Mo(Re())
    }
    function _e(n) {
        return Ze || (Ze = ut(typeof requestAnimationFrame) ? requestAnimationFrame : Ee),
        Ze(n)
    }
    function Ee(n) {
        return setTimeout((function() {
            var t = Xe();
            n(t)
        }
        ), 1e3 / 60)
    }
    var Pe = function() {
        function n(n, t) {
            this.an = n,
            this.hn = t,
            this.o = [],
            this.vn = [],
            this.ln = -1
        }
        return n[u].request = function(n, t) {
            var r, i = this;
            if (void 0 === t && (t = Infinity),
            N(n),
            !j(r = t) || T(r))
                throw M("count is invalid");
            var u = {
                callback: n,
                current: 0,
                total: t
            };
            if (this.o.push(u),
            -1 === this.ln) {
                var o = function() {
                    var n, t = i.o.length;
                    if (t > 0) {
                        i.ln = i.an(o),
                        (n = i.vn).push.apply(n, l([], v(i.o), !1));
                        for (var r = 0, u = i.vn; r < t; r++) {
                            var e = u[r];
                            ++e.current >= e.total && i.dn(e),
                            e.callback(e.current)
                        }
                        i.vn.length = 0
                    }
                };
                this.ln = this.an(o)
            }
            return {
                revoke: function() {
                    return i.dn(u)
                }
            }
        }
        ,
        n[u].dn = function(n) {
            var t = _(this.o, n);
            t > -1 && (this.o.splice(t, 1),
            0 == this.o.length && this.wn())
        }
        ,
        n[u].clear = function() {
            this.o.length = 0,
            this.wn()
        }
        ,
        n[u].wn = function() {
            -1 !== this.ln && (this.hn(this.ln),
            this.ln = -1)
        }
        ,
        n
    }()
      , Ve = function(n) {
        function t() {
            return n.call(this, _e, Ce) || this
        }
        return f(t, n),
        t
    }(Pe)
      , De = function(n) {
        function t() {
            var t = this;
            return t = "undefined" != typeof requestIdleCallback ? n.call(this, (function(n) {
                return requestIdleCallback(n, {
                    timeout: 200
                })
            }
            ), (function(n) {
                return cancelIdleCallback(n)
            }
            )) || this : n.call(this, (function(n) {
                return setTimeout(n, 200)
            }
            ), (function(n) {
                return clearTimeout(n)
            }
            )) || this,
            t
        }
        return f(t, n),
        t
    }(Pe)
      , He = function(n) {
        function t() {
            var t, r = n.call(this) || this;
            return r.mn = (t = r.o,
            function() {
                Y(t, (function(n) {
                    return K(n)
                }
                )),
                t.length = 0
            }
            ),
            r
        }
        return f(t, n),
        t[u].clear = function() {
            this.mn()
        }
        ,
        t
    }(un);
    function Ge(n) {
        return n.splice(0, n.length)
    }
    var qe = function() {
        function n() {
            this.P = new He,
            this.bn = []
        }
        return n[u].observe = function(n) {
            this.pn != n && (this.pn && this.disconnect(),
            n && (this.pn = n,
            this.yn()))
        }
        ,
        r(n[u], "target", (function() {
            return this.pn
        }
        )),
        r(n[u], "hook", (function() {
            return this.P
        }
        )),
        n[u].disconnect = function() {
            ru(Ge(this.bn))
        }
        ,
        n[u].yn = function() {
            var n = this;
            this.bn.push((function() {
                n.pn = null
            }
            ))
        }
        ,
        n
    }()
      , Qe = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.gn = new De,
            t.kn = new Ve,
            t
        }
        return f(t, n),
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this),
            this.bn.push((function() {
                var n, r, i;
                null === (n = t.In) || void 0 === n || n.revoke(),
                t.In = null,
                null === (r = t.On) || void 0 === r || r.revoke(),
                t.On = null,
                null === (i = t.jn) || void 0 === i || i.revoke(),
                t.jn = null,
                t.gn.clear(),
                t.kn.clear()
            }
            ))
        }
        ,
        t[u].Sn = function(n) {
            var t = this;
            void 0 === n && (n = function() {
                return t.P.emit()
            }
            ),
            this.On || (this.On = this.kn.request((function() {
                t.On = null,
                n()
            }
            ), 1))
        }
        ,
        t[u].xn = function(n) {
            var t = this;
            void 0 === n && (n = function() {
                return t.P.emit()
            }
            ),
            this.jn ? this.Sn(n) : (this.Mn(n),
            this.jn = this.kn.request((function() {
                t.jn = null
            }
            ), 1))
        }
        ,
        t[u].Mn = function(n) {
            var t = this;
            void 0 === n && (n = function() {
                return t.P.emit()
            }
            ),
            this.In || (this.In = eo((function() {
                t.In = null,
                n()
            }
            )))
        }
        ,
        t
    }(qe)
      , Be = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        r(t[u], "offsetSize", (function() {
            return this.Nn
        }
        )),
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this),
            this.Nn = {
                width: ge(this.pn),
                height: ke(this.pn)
            };
            var r = function() {
                var n = ge(t.pn)
                  , r = ke(t.pn);
                n == t.Nn.width && r == t.Nn.height || (t.Nn.width = n,
                t.Nn.height = r,
                t.xn())
            };
            if ("undefined" != typeof ResizeObserver) {
                var i = new ResizeObserver(r);
                if (i.observe(this.pn),
                this.bn.push((function() {
                    return i.disconnect()
                }
                )),
                function(n) {
                    var t, r = null === (t = n.userAgentData) || void 0 === t ? void 0 : t.brands;
                    if (r) {
                        var i = p(r, (function(n) {
                            return "Chromium" === n.brand
                        }
                        ));
                        if (i > -1)
                            return parseInt(r[i].version)
                    }
                    var u = n.userAgent.match(/Chrome\/(\d+)/);
                    return u ? parseInt(u[1]) : NaN
                }(navigator) < 81) {
                    var o = We(this.pn);
                    o && this.bn.push(Jr(Kt(o), "resize", (function(n) {
                        n.isTrusted && r()
                    }
                    )), Jr(o, function(n) {
                        var t = se(n);
                        return null != Ho ? Ho : Ho = "ms" === t ? "MSFullscreenChange" : t + "fullscreenchange"
                    }(o), r))
                }
            } else
                this.gn.request(r)
        }
        ,
        t
    }(Qe);
    function Ue(n) {
        return hn(n, Math.random().toString().replace("0.", ""))
    }
    var $e = function() {
        function n(n) {
            this.Ln = n
        }
        return n[u].at = function(n) {
            return bt(this.Ln, n)
        }
        ,
        n[u].removeAt = function(n) {
            var t;
            null === (t = D(this.Ln, n)) || void 0 === t || t.remove()
        }
        ,
        r(n[u], "length", (function() {
            return this.Ln.length
        }
        )),
        r(n[u], "first", (function() {
            return this.at(0)
        }
        )),
        r(n[u], "last", (function() {
            return this.at(-1)
        }
        )),
        n
    }()
      , Ke = function() {
        function n(n, t, r) {
            void 0 === t && (t = 0),
            void 0 === r && (r = {
                scaleMode: Po.NO_SCALE
            });
            var i = this;
            this.Wn = n,
            this.Ln = [],
            this.Cn = new $e(this.Ln),
            this.zn = Ue("lcm-"),
            Sr(this.Wn, {
                id: this.Yn()
            });
            for (var u = 0; u < t; u++)
                this.create();
            this.render(r),
            this.Tn = new Be,
            this.Tn.hook.on((function() {
                return i.Fn()
            }
            )),
            this.Tn.observe(this.Wn)
        }
        return n[u].create = function() {
            var n = Nr(this.Wn, gn, {
                id: this.Zn(this.Ln.length),
                style: c(c(c({}, Di()), qi(!1)), {
                    transformOrigin: "0 0"
                })
            });
            return this.Ln.push(n),
            n
        }
        ,
        n[u].Zn = function(n) {
            return Bt(this.zn, "inner", n)
        }
        ,
        n[u].Yn = function() {
            return Bt(this.zn, "outer")
        }
        ,
        n[u].prefix = function(n) {
            var t = this;
            this.zn = n,
            Y(this.Ln, (function(n, r) {
                return Sr(n, {
                    id: t.Zn(r)
                })
            }
            )),
            Sr(this.Wn, {
                id: this.Yn()
            })
        }
        ,
        r(n[u], "inner", (function() {
            return this.Cn
        }
        )),
        r(n[u], "outer", (function() {
            return this.Wn
        }
        )),
        n[u].An = function(n) {
            var t, r, i;
            this.Jn = c(c({}, this.Jn), n);
            var u = this.Jn.scaleMode;
            if (u) {
                var o = ["scaleMode=".concat(u)];
                if (u != Po.NO_SCALE) {
                    var e = this.Jn.size;
                    o.push("".concat("width", "=").concat(null !== (r = null == e ? void 0 : e.width) && void 0 !== r ? r : "--"), "".concat("height", "=").concat(null !== (i = null == e ? void 0 : e.height) && void 0 !== i ? i : "--"))
                }
                ar(this.Wn, ((t = {})[Bt("logical", Hn)] = Ht(o, ", "),
                t)),
                this.Fn()
            }
        }
        ,
        n[u].render = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            var r = {};
            if (n.length > 0)
                if (I(n[0]))
                    er(r, n[0]);
                else
                    switch (n.length) {
                    case 1:
                        r.scaleMode = n[0];
                        break;
                    case 2:
                        r.size = {
                            width: n[0],
                            height: n[1]
                        };
                        break;
                    case 3:
                        r.scaleMode = n[0],
                        r.size = {
                            width: n[1],
                            height: n[2]
                        }
                    }
            this.An(r)
        }
        ,
        n[u].Fn = function() {
            var n = this;
            this.Jn.scaleMode && Y(this.Ln, (function(t) {
                var r, i, u, o, e;
                if (n.Jn.scaleMode == Po.NO_SCALE)
                    jr(t, Hi()),
                    e = "";
                else {
                    var f = ge(n.Wn)
                      , s = ke(n.Wn);
                    if (0 === f || 0 === s)
                        return;
                    var a = n.Jn.size;
                    jr(t, c(c({}, Vi(a.width, a.height)), {
                        maxWidth: gi(null !== (r = a.maxWidth) && void 0 !== r ? r : ""),
                        maxHeight: gi(null !== (i = a.maxHeight) && void 0 !== i ? i : ""),
                        minWidth: gi(null !== (u = a.minWidth) && void 0 !== u ? u : ""),
                        minHeight: gi(null !== (o = a.minHeight) && void 0 !== o ? o : "")
                    }));
                    var h = ge(t)
                      , v = ke(t)
                      , l = f / h
                      , d = s / v
                      , w = f / s
                      , m = h / v;
                    switch (n.Jn.scaleMode) {
                    case Po.FIXED_WIDTH:
                        jr(t, c({}, Vi(h, h / w))),
                        e = Ii(l);
                        break;
                    case Po.FIXED_HEIGHT:
                        jr(t, c({}, Vi(w * v, v))),
                        e = Ii(d);
                        break;
                    case Po.FIXED_WIDE:
                        w < m ? (jr(t, c({}, Vi(w * v, v))),
                        e = Ii(d)) : (jr(t, c({}, Vi(h, h / w))),
                        e = Ii(l));
                        break;
                    case Po.FIXED_NARROW:
                        w > m ? (jr(t, c({}, Vi(w * v, v))),
                        e = Ii(d)) : (jr(t, c({}, Vi(h, h / w))),
                        e = Ii(l));
                        break;
                    case Po.SHOW_ALL:
                        e = Qt(Ii(b = Math.min(l, d), b), Oi((f / b - h) / 2, (s / b - v) / 2));
                        break;
                    case Po.EXACT_FIT:
                        e = Ii(l, d);
                        break;
                    case Po.NO_BORDER:
                        var b;
                        e = Qt(Ii(b = Math.max(l, d), b), Oi((f / b - h) / 2, (s / b - v) / 2))
                    }
                }
                Or(t, "transform", e)
            }
            ))
        }
        ,
        n
    }();
    function nf(n) {
        return n.setting.data.attributes
    }
    var tf = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].set = function(t) {
            var r = this;
            n[u].set.call(this, t),
            dt(nf(this.docker), (function(n) {
                n.allow_change_basesize && lt(t.base_size, (function(n) {
                    return k(n) && n.length > 0
                }
                ), (function(n) {
                    return r.docker.size.parse(n)
                }
                )),
                n.duration > 0 && lt(t.min_duration, (function(n) {
                    return n > 0
                }
                ), (function(n) {
                    return r.docker.clock.duration.set(n)
                }
                ))
            }
            ))
        }
        ,
        t
    }(Xo)
      , rf = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        r(t[u], "window", (function() {
            var n;
            return null === (n = this.Rn) || void 0 === n ? void 0 : n[0]
        }
        )),
        r(t[u], "document", (function() {
            var n;
            return null === (n = this.Rn) || void 0 === n ? void 0 : n[1]
        }
        )),
        t[u].set = function(n) {
            this.Rn = n
        }
        ,
        t
    }(Ro)
      , uf = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].enabled = function() {
            var t = this;
            n[u].enabled.call(this);
            var r = this.docker;
            this.Xn = new Ke(Mr(r["for"](rf).document, gn, {
                style: c(c(c({}, Di()), qi(!1)), {
                    transformOrigin: "0 0"
                })
            }),1),
            r.status.enable.hook.on((function(n) {
                n && (t.Xn.prefix(r.setting.id),
                t.Xn.render({
                    scaleMode: Po.NO_SCALE
                }))
            }
            ))
        }
        ,
        r(t[u], "view", (function() {
            return this.Xn
        }
        )),
        t
    }(Ro)
      , of = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t._n = new Ko,
            t
        }
        return f(t, n),
        r(t[u], "container", (function() {
            return this._n
        }
        )),
        t[u].enabled = function() {
            var t = this;
            n[u].enabled.call(this);
            var r = this.docker;
            this.En = new Ke(Mr(r["for"](rf).document, gn, {
                style: c(c(c({}, zi()), Vi(336, 280)), {
                    transformOrigin: "0 0"
                })
            }),1),
            this.visible(!1);
            var i = r["for"](uf);
            wr(i.view.inner.first, this.En.outer),
            wr(this._n.value, i.view.outer),
            i.view.render(),
            this.En.render(r.size.logical),
            r.status.enable.hook.on((function(n) {
                n && dt(r.setting.data, (function(n) {
                    t.En.prefix(Bt(r.setting.id, "c")),
                    dt(n.attributes, (function(n) {
                        var i, u = t.En.outer, o = r["for"](tf).data;
                        if (o.allow_fullview && n.allow_fullview)
                            i = c(c(c({}, Hi()), _i(0, 0)), {
                                transformOrigin: "0 0"
                            }),
                            t.round(!1);
                        else {
                            var e = o.size
                              , f = o.position
                              , s = o.translate;
                            i = c(c(c({}, Vi(e.width, e.height)), _i(f.x, f.y)), Ki(s.x, s.y)),
                            n.allow_round && t.round(!0)
                        }
                        jr(u, i)
                    }
                    ))
                }
                ))
            }
            )),
            r.status.active.hook.on((function(n) {
                t.visible(n)
            }
            ))
        }
        ,
        r(t[u], "ec", (function() {
            return this.En
        }
        )),
        r(t[u], "adc", (function() {
            return this.En.inner.first
        }
        )),
        t[u].visible = function(n) {
            var t = this.En.outer;
            jr(t, {
                transition: ""
            }),
            ge(t),
            jr(t, {
                transition: "opacity 0.5s"
            });
            var r = c(c({}, Ti(n ? 1 : 0)), Qi(n));
            fe(vr(t)) < 11 && er(r, Gi(n)),
            jr(t, r)
        }
        ,
        t[u].round = function(n) {
            jr(this.En.inner.first, Zi(n ? 12 : ""))
        }
        ,
        t
    }(Ro)
      , ef = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.Pn = {
                scaleMode: Po.FIXED_NARROW,
                size: {
                    width: mi,
                    height: mi
                }
            },
            t
        }
        return f(t, n),
        t[u].parse = function(n) {
            var t = null == n ? void 0 : n.split("x");
            if (t) {
                var r = Mt(t, (function(n) {
                    return +n
                }
                ));
                2 == (null == r ? void 0 : r.length) && this.set({
                    width: r[0],
                    height: r[1]
                })
            }
        }
        ,
        t[u].set = function(n) {
            var t = this;
            this.Pn.size = n,
            this.docker.actived && this.docker.locate(of, (function(n) {
                var r;
                null === (r = n.ec) || void 0 === r || r.render(t.Pn)
            }
            ))
        }
        ,
        r(t[u], "logical", (function() {
            return this.Pn
        }
        )),
        r(t[u], "format", (function() {
            var n, t = null === (n = this.Pn) || void 0 === n ? void 0 : n.size;
            return "".concat(null == t ? void 0 : t.width, "x").concat(null == t ? void 0 : t.height)
        }
        )),
        t
    }(Ro);
    function ff(n, t, r, i) {
        n.addEventListener(t, r, i)
    }
    function cf(n) {
        for (var t, r = [], i = 0; i < n.max + 1; i++)
            r[i] = i >= n.min ? "\u25cc" : "-";
        switch (r[n.value] = "\u25cf",
        n.value) {
        case 0:
            t = "\u2796";
            break;
        case n.max:
            t = "\ud83c\udd97";
            break;
        default:
            t = "\u231b"
        }
        return "".concat(t, "(").concat(r.join(""), ")[").concat(n.min, "~").concat(n.max, ":").concat(n.value, "]")
    }
    !function(n) {
        function t() {
            var t, r = n.call(this) || this;
            return r.Vn = !1,
            r.Dn = new Ve,
            r.Hn = new un,
            r.Gn = ((t = {})[Qr()] = function() {
                r.Vn = !0,
                r.qn()
            }
            ,
            t[Br()] = function() {
                r.Vn = !1,
                r.qn()
            }
            ,
            t),
            r.Qn = !1,
            r
        }
        f(t, n),
        r(t[u], "dececting", (function() {
            return this.Qn
        }
        )),
        r(t[u], "active", (function() {
            return this.Hn
        }
        )),
        t[u].disobserve = function() {
            var n = this;
            this.Bn && (Y(rr(this.Gn), (function(t) {
                !function(n, t, r, i) {
                    n.removeEventListener(t, r, i)
                }(n.Bn, t[0], t[1])
            }
            )),
            this.Dn.clear(),
            this.Bn = null)
        }
        ,
        t[u].observe = function(n) {
            this.disobserve(),
            this.Bn = n,
            ur(this.Gn, (function(t, r) {
                ff(n, r, t)
            }
            ))
        }
        ,
        t[u].qn = function() {
            var n = this;
            this.Dn.clear(),
            this.Bn && this.Vn && this.Qn && this.Dn.request((function() {
                var t, r = n.Bn;
                (t = r,
                Le(t) ? be(t) : null).activeElement == r && (r.blur(),
                n.Hn.emit())
            }
            ))
        }
        ,
        t[u].detect = function(n) {
            this.Qn = n,
            this.qn()
        }
    }(Ro);
    var sf = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.l = {
                value: 0,
                min: 0,
                max: 2
            },
            t
        }
        return f(t, n),
        t[u].calc = function(n) {
            return n >= 0 ? n : n + this.l.max + 1
        }
        ,
        t[u].set = function(n) {
            this.l.value = this.calc(n)
        }
        ,
        t[u].is = function(n) {
            return this.l.value === this.calc(n)
        }
        ,
        t[u].range = function(n, t) {
            t > n && (this.l.min = n,
            this.l.max = t,
            this.l.value < n ? this.l.value = n : this.l.value > t && (this.l.value = t))
        }
        ,
        r(t[u], "ok", (function() {
            return this.is(-1)
        }
        )),
        r(t[u], "value", (function() {
            return this.l.value
        }
        )),
        r(t[u], "min", (function() {
            return this.l.min
        }
        )),
        r(t[u], "max", (function() {
            return this.l.max
        }
        )),
        t[u].Un = function() {
            return c({}, this.l)
        }
        ,
        t[u].toString = function() {
            return cf(this.l)
        }
        ,
        t
    }(Ro)
      , af = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.$n = [],
            t.L = {
                change: new un
            },
            t.Kn = [],
            t
        }
        return f(t, n),
        r(t[u], "hooks", (function() {
            return this.L
        }
        )),
        t[u]["in"] = function(n) {
            return this.Kn.length > 0 && this.since < n
        }
        ,
        r(t[u], "since", (function() {
            return No(pt(this.Kn))
        }
        )),
        t[u].heartbeat = function() {
            this.Kn.push(ro())
        }
        ,
        t[u].range = function(t, r) {
            var i = this.Un();
            n[u].range.call(this, t, r),
            this.nt(i)
        }
        ,
        t[u].set = function(t) {
            var r = this.Un();
            n[u].set.call(this, t),
            this.nt(r)
        }
        ,
        t[u].nt = function(n) {
            var t = this.Un();
            t.value == n.value && t.min == n.min && t.max == n.max || (this.clear(),
            yo(this.Kn),
            this.is(0) || this.ok || this.heartbeat(),
            this.L.change.emit(t, n))
        }
        ,
        t[u].delay = function(n, t) {
            var r = this
              , i = setTimeout((function() {
                r.cancel(i),
                t()
            }
            ), 1e3 * n);
            return this.$n.push(i),
            i
        }
        ,
        t[u].cancel = function(n) {
            P(this.$n, n)
        }
        ,
        t[u].clear = function() {
            Y(Ge(this.$n), (function(n) {
                return clearTimeout(n)
            }
            ))
        }
        ,
        t
    }(sf)
      , hf = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.tt = new Ko(!1),
            t.Hn = new Ko(!1),
            t
        }
        return f(t, n),
        r(t[u], "enable", (function() {
            return this.tt
        }
        )),
        r(t[u], "active", (function() {
            return this.Hn
        }
        )),
        t
    }(Ro);
    function vf(n) {
        for (var t, r = [], i = 1; i < arguments.length; i++)
            r[i - 1] = arguments[i];
        (t = n.hooks.echo).emit.apply(t, l([], v(r), !1))
    }
    function lf(n, t) {
        n.state.set(t)
    }
    function df(n) {
        lf(n, n.state.min)
    }
    var wf = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.hooks.start.on((function() {
                var n;
                lf(n = t, n.state.max)
            }
            )),
            t.hooks.end.on((function() {
                df(t)
            }
            )),
            t.hooks.error.on((function() {
                df(t)
            }
            )),
            t.state.hooks.change.on((function(n, r) {
                vf(t, "[state-changed]", cf(n), "<-", cf(r))
            }
            )),
            t
        }
        return f(t, n),
        t
    }(function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.l = t.create(af),
            t.Jn = t.create(_o),
            t.rt = t.create(ne),
            t.M = t.create(ee),
            t.D = t.create(hf),
            t.Nn = t.create(ef),
            t.L = t.create(te),
            t
        }
        return f(t, n),
        r(t[u], "state", (function() {
            return this.l
        }
        )),
        r(t[u], "setting", (function() {
            return this.Jn
        }
        )),
        r(t[u], "clock", (function() {
            return this.rt
        }
        )),
        r(t[u], "records", (function() {
            return this.M
        }
        )),
        r(t[u], "status", (function() {
            return this.D
        }
        )),
        r(t[u], "size", (function() {
            return this.Nn
        }
        )),
        r(t[u], "hooks", (function() {
            return this.L
        }
        )),
        t
    }(Co));
    function mf(n, t) {
        N(t);
        for (var r = 0, i = n.length; r < i; r++)
            if (W(n, r) && !t(n[r], r, n))
                return !1;
        return !0
    }
    function bf(n, t) {
        return b(n.every, n, mf, t)
    }
    function pf(n) {
        return function(t) {
            return Qu(t.attributes.allow_as, n)
        }
    }
    var yf = function() {
        function n() {
            this.it = [],
            this.ut = [function(n) {
                var t, r;
                return (null === (r = null === (t = n.enable) || void 0 === t ? void 0 : t.call(n)) || void 0 === r || r) && (!n.config || !H(n.config()))
            }
            ]
        }
        return r(n[u], "all", (function() {
            return this.it
        }
        )),
        r(n[u], "filters", (function() {
            return this.ut
        }
        )),
        n[u].check = function(n) {
            return !!this.match(pf(n))
        }
        ,
        n[u].ot = function(n) {
            var t = function(n) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                return n.concat.apply(n, l([], v(t), !1))
            }(this.ut, n);
            return function(n) {
                return bf(t, (function(t) {
                    return t(n)
                }
                ))
            }
        }
        ,
        n[u].match = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return qu(this.it, this.ot(n))
        }
        ,
        n[u].matchAll = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return Ku(this.it, this.ot(n))
        }
        ,
        n
    }()
      , gf = function() {
        function n() {
            this.et = [],
            this.L = {
                create: new un,
                ready: new un
            },
            this.Jn = new yf
        }
        return r(n[u], "setting", (function() {
            return this.Jn
        }
        )),
        r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        n[u].find = function(n) {
            return qu(this.et, (function(t) {
                return n(t)
            }
            ))
        }
        ,
        n[u].match = function(n, t) {
            return this.find((function(r) {
                if (r.setting.data == n && !r.status.enable.value) {
                    var i = !W(t, "base_size") || r.size.format == (t.base_size || "336x280")
                      , u = !W(t, "min_duration") || r.clock.duration.value == t.min_duration;
                    if (i && u)
                        return !0
                }
                return !1
            }
            ))
        }
        ,
        n[u].create = function(n) {
            if (!n)
                return console.error("unknow setting", n),
                null;
            var t = new wf;
            return t.setting.set(n),
            t.size.set(n.attributes.size),
            t.clock.duration.set(n.attributes.duration),
            this.et.push(t),
            this.L.create.emit(t),
            Y(n.coms, (function(n) {
                I(n) ? n.adopted(t["for"](n.ctor)) : t["for"](n)
            }
            )),
            this.L.ready.emit(t),
            t
        }
        ,
        n
    }()
      , kf = function() {
        function n(n, t) {
            var r = this;
            this.ft = n,
            this.ct = t,
            this.ct.hooks.move.on((function(n) {
                r.ft.reschedule(n.current)
            }
            ))
        }
        return r(n[u], "schedule", (function() {
            return this.ft
        }
        )),
        r(n[u], "timeline", (function() {
            return this.ct
        }
        )),
        n[u].clear = function() {
            this.ft.cancel(),
            this.ct.stop()
        }
        ,
        n
    }()
      , If = function(n) {
        function t() {
            var t = n.call(this, (function() {
                return ro()
            }
            )) || this;
            return t.L = {
                toggle: new un,
                move: new un
            },
            t
        }
        return f(t, n),
        r(t[u], "hooks", (function() {
            return this.L
        }
        )),
        t[u].R = function(n, t) {
            this.L.toggle.emit({
                current: n,
                previous: t
            })
        }
        ,
        t[u].X = function(n, t) {
            this.L.move.emit({
                current: n,
                previous: t
            })
        }
        ,
        t
    }(qo);
    function Of(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return n.splice.apply(n, l([t, 0], v(r), !1)),
        r
    }
    function jf(n, t) {
        for (var r = 0, i = n.length; r < i; r++)
            if (n[r].value >= t)
                return n.splice(r);
        return []
    }
    function Sf(n, t) {
        for (var r = n.length - 1; r >= 0; r--)
            if (t.value >= n[r].value)
                return void Of(n, r + 1, t);
        Of(n, 0, t)
    }
    var xf = function() {
        function n(n) {
            this.st = n,
            this.ht = [],
            this.vt = []
        }
        return n[u].allAfter = function(n) {
            return Ku(this.ht, (function(t) {
                return t.value >= n
            }
            ))
        }
        ,
        n[u].waitingsAfter = function(n) {
            return Ku(this.vt, (function(t) {
                return t.value >= n
            }
            ))
        }
        ,
        r(n[u], "numSchduleds", (function() {
            return this.ht.length
        }
        )),
        r(n[u], "numWaitingSchduleds", (function() {
            return this.vt.length
        }
        )),
        n[u].when = function(n, t) {
            var r = this
              , i = {
                value: n >= 0 ? n : 0,
                callback: t
            };
            return Sf(this.ht, i),
            Sf(this.vt, i),
            this.lt(i),
            {
                revoke: function() {
                    return r.dt(i)
                }
            }
        }
        ,
        n[u].cancel = function(n) {
            void 0 === n && (n = 0),
            jf(this.vt, n),
            this.dt.apply(this, l([], v(jf(this.ht, n)), !1))
        }
        ,
        n[u].reschedule = function(n) {
            var t;
            void 0 === n && (n = 0),
            this.vt.length = 0,
            (t = this.vt).push.apply(t, l([], v(this.allAfter(n)), !1)),
            this.wt(n)
        }
        ,
        n[u].step = function(n) {
            void 0 === n && (n = this.st()),
            this.bt(n)
        }
        ,
        n[u].bt = function(n) {
            var t = this
              , r = this.vt
              , i = r.length;
            if (i > 0 && n >= r[0].value) {
                for (var u = 1, o = 1; o < i && !(n < r[o].value); o++)
                    u++;
                var e = function(n, t) {
                    var r = []
                      , i = []
                      , u = [];
                    return Y(n, (function(n, o, e) {
                        var f = t(n, o, e)
                          , c = E(i, f);
                        c < 0 && (u.push(c = i.length),
                        i.push(f),
                        r[c] = [f, []]),
                        r[c][1].push(n)
                    }
                    )),
                    r
                }(r.splice(0, u), (function(n) {
                    return n.value
                }
                ));
                Y(e, (function(n) {
                    var r = v(n, 2)
                      , i = r[0]
                      , u = r[1];
                    t.yt(i, u),
                    Y(u, (function(n) {
                        return n.callback(i)
                    }
                    )),
                    t.gt(i, u)
                }
                ))
            }
        }
        ,
        n[u].yt = function(n, t) {}
        ,
        n[u].gt = function(n, t) {}
        ,
        n[u].lt = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t]
        }
        ,
        n[u].dt = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t]
        }
        ,
        n[u].wt = function(n) {}
        ,
        n
    }()
      , Mf = function(n) {
        function t(t) {
            var r = n.call(this, t) || this;
            return r.L = {
                mutation: new un,
                reschedule: new un,
                beforetrigger: new un,
                trigger: new un
            },
            r
        }
        return f(t, n),
        r(t[u], "hooks", (function() {
            return this.L
        }
        )),
        t[u].gt = function(n, t) {
            this.L.beforetrigger.emit(n, t)
        }
        ,
        t[u].yt = function(n, t) {
            this.L.trigger.emit(n, t)
        }
        ,
        t[u].lt = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            this.L.mutation.emit({
                addeds: n,
                removeds: []
            })
        }
        ,
        t[u].dt = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            this.L.mutation.emit({
                addeds: [],
                removeds: n
            })
        }
        ,
        t[u].wt = function(n) {
            this.L.reschedule.emit(n)
        }
        ,
        t
    }(xf)
      , Nf = function(n) {
        function t() {
            var t = this
              , r = new If
              , i = new Mf((function() {
                return r.currentTime
            }
            ));
            return (t = n.call(this, i, r) || this).kt = [],
            t.It = new He,
            t.Ot = !1,
            i.hooks.reschedule.on((function() {
                return t.An()
            }
            )),
            i.hooks.mutation.on((function() {
                return t.An()
            }
            )),
            r.hooks.toggle.on((function() {
                return t.An()
            }
            )),
            r.hooks.move.on((function(n) {
                return i.reschedule(n.current)
            }
            )),
            t
        }
        return f(t, n),
        t[u].jt = function() {
            Y(this.kt, (function(n) {
                return clearTimeout(n)
            }
            )),
            this.kt.length = 0,
            this.It.clear()
        }
        ,
        t[u].An = function() {
            var n = this;
            if (this.jt(),
            this.timeline.isPlaying && 0 !== this.schedule.numWaitingSchduleds) {
                var t = this.timeline.currentTime
                  , r = NaN;
                Y(this.schedule.waitingsAfter(0), (function(i) {
                    var u = i.value;
                    if (r !== u)
                        if (r = u,
                        u > t) {
                            var o = setTimeout((function() {
                                P(n.kt, o),
                                n.schedule.step(u)
                            }
                            ), 1e3 * (u - t));
                            n.kt.push(o)
                        } else
                            n.It.once((function() {
                                return n.schedule.step(u)
                            }
                            )),
                            n.Ot || (n.Ot = !0,
                            uo((function() {
                                n.Ot = !1,
                                n.It.emit()
                            }
                            )))
                }
                ))
            }
        }
        ,
        t
    }(kf);
    function Lf(n, t, r) {
        return fi(q(n), (function(r, i) {
            return W(n, i) ? t(r, n[i], i, n) : r
        }
        ), r)
    }
    function Wf(n, t) {
        return Lf(n, (function(r, i, u) {
            return r[u] = t(i, u, n),
            r
        }
        ), {})
    }
    function Cf(n, t, r, i) {
        try {
            var u = Wf(r, (function(t, r) {
                return [t, n.style[r]]
            }
            ));
            ur(i, (function(t, r) {
                r in u ? u[r][1] = t : u[r] = [n.style[r], t]
            }
            ));
            var o = n.animate(u, {
                duration: 1e3 * t,
                fill: "both"
            });
            o.onfinish = function() {
                if (Le(n))
                    try {
                        o.commitStyles()
                    } catch (Sn) {
                        jr(n, i)
                    }
                o.cancel()
            }
        } catch (Sn) {
            jr(n, i)
        }
    }
    function zf(n) {
        return lr(n, "")
    }
    function Yf(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return !!S(n) && (_t(w, n, t, r),
        !0)
    }
    function Tf(n) {
        Yf(n.preventDefault, n) || (n.returnValue = !1)
    }
    function Ff(n) {
        n.cancelBubble = !0
    }
    function Zf(n) {
        Yf(n.stopImmediatePropagation, n) || Ff(n)
    }
    function Af() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return zo(ru, n)
    }
    function Jf(n) {
        fe(vr(n)) < 11 && n.insertAdjacentHTML("afterbegin", '<svg style="position: absolute;" width="100%" height="100%"><rect x="0" y="0" width="100%" height="100%" fill="rgba(0, 0, 0, 0)" /></svg>')
    }
    var Rf, Xf, _f = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.St = new un,
            t.un = new un,
            t
        }
        return f(t, n),
        r(t[u], "echo", (function() {
            return this.un
        }
        )),
        r(t[u], "preserve", (function() {
            return this.St
        }
        )),
        t
    }(function() {
        function n() {
            this.xt = new un,
            this.U = new un,
            this.Mt = new un,
            this.rn = new un
        }
        return r(n[u], "init", (function() {
            return this.xt
        }
        )),
        r(n[u], "start", (function() {
            return this.U
        }
        )),
        r(n[u], "close", (function() {
            return this.Mt
        }
        )),
        r(n[u], "link", (function() {
            return this.rn
        }
        )),
        n
    }()), Ef = function() {
        function n(n) {
            this.Nt = n,
            this.Lt = new ue
        }
        return r(n[u], "item", (function() {
            return this.Nt
        }
        )),
        r(n[u], "record", (function() {
            return this.Lt
        }
        )),
        n
    }(), Pf = function() {
        function n(n) {
            this.Wt = 0,
            this.o = Mt(n, (function(n) {
                return new Ef(n)
            }
            )),
            this.Lt = new ue
        }
        return r(n[u], "length", (function() {
            return this.o.length
        }
        )),
        n[u].next = function() {
            this.Wt++
        }
        ,
        n[u].exist = function(n) {
            return n >= 0 && n < this.o.length
        }
        ,
        r(n[u], "existed", (function() {
            return this.exist(this.Wt)
        }
        )),
        r(n[u], "nextExisted", (function() {
            return this.exist(this.Wt + 1)
        }
        )),
        r(n[u], "index", (function() {
            return this.Wt
        }
        )),
        r(n[u], "current", (function() {
            return this.o[this.Wt]
        }
        )),
        r(n[u], "record", (function() {
            return this.Lt
        }
        )),
        n[u].item = function(n) {
            return this.o[n]
        }
        ,
        n[u].info = function() {
            var n = this;
            return "".concat(this.index + 1, "/").concat(this.length, ": ").concat(Ht(Mt(this.o, (function(t, r) {
                return r == n.index ? "[".concat(t.item.type, "]") : " ".concat(t.item.type, " ")
            }
            )), "-"))
        }
        ,
        n
    }();
    function Vf(n) {
        return er({
            stamp: ro()
        }, n)
    }
    function Df(n, t, r) {
        return c(c({
            isTrusted: t == Xf.USER_ACTION
        }, r), {
            ok: n,
            reason: t
        })
    }
    function Hf(n) {
        var t;
        if (n.state.ok && nf(n).duration > 0) {
            if (n.clock.progress.value < 1)
                return !1;
            var r = null === (t = n.records.list.last) || void 0 === t ? void 0 : t.last;
            if ("close" == (null == r ? void 0 : r.type) && No(r.stamp) < .5)
                return !1
        }
        return !0
    }
    function Gf(n, t) {
        return "".concat(n, "s(").concat(Dt(t, {
            fixed: 2
        }), ")")
    }
    !function(n) {
        n[n.BANNER = 1] = "BANNER",
        n[n.REWARD = 2] = "REWARD",
        n[n.ROLL = 3] = "ROLL",
        n[n.PROCESS = 4] = "PROCESS",
        n[n.INTERSTITIAL = 5] = "INTERSTITIAL",
        n[n.MOREGAMES = 6] = "MOREGAMES"
    }(Rf || (Rf = {})),
    function(n) {
        n.DEFAULT_ACTION = "default_action",
        n.USER_ACTION = "user_action",
        n.AD_UNABLE = "ad_unable",
        n.AD_ERROR = "ad_error",
        n.AD_COMPLETE = "ad_complete",
        n.AD_TIMEOUT = "ad_timeout",
        n.NO_ADS = "no_ads",
        n.AD_LINK = "ad_link"
    }(Xf || (Xf = {}));
    var qf = function() {
        function n(n, t, r) {
            this.Ct = n,
            this.Jn = r,
            this.L = new _f,
            this.D = new Pf(t),
            this.zt = new Nf
        }
        return r(n[u], "monitor", (function() {
            return this.zt
        }
        )),
        r(n[u], "setting", (function() {
            return this.Jn
        }
        )),
        r(n[u], "status", (function() {
            return this.D
        }
        )),
        r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        n[u].close = function(n) {
            var t;
            void 0 === n && (n = Xf.DEFAULT_ACTION),
            this.D.record.closes > 0 ? this.un("[ad-close-repeat]", "current ad was closed.") : this.Yt(Df(null === (t = this.D.current) || void 0 === t ? void 0 : t.record.ok, n, {
                adb: this
            }))
        }
        ,
        n[u].Tt = function() {
            var n = this;
            lt(this.Ft.status, (function(n) {
                return n.enable.value
            }
            ), (function(t) {
                if (t.active.value) {
                    var r = n.Ft.clock;
                    r.stopwatch.pause();
                    var i = function() {
                        return Gf(r.stopwatch.calc(), r.progress.value)
                    }
                      , u = function(t) {
                        if (t >= 1) {
                            r.progress.set(1);
                            var i = nf(n.Ft).duration;
                            i > 0 && r.duration.value !== i && r.duration.set(i)
                        } else
                            r.progress.set(t)
                    }
                      , o = n.Ft.clock.duration.value;
                    o > 0 ? function(t) {
                        var o = Gf(r.stopwatch.calc(0, -1), r.progress.value)
                          , e = r.stopwatch.lastTime
                          , f = e / t
                          , c = Gf(e, f);
                        u(r.progress.value + f),
                        n.un("[ad-component]", "progress: ".concat(o, " + ").concat(c, " = ").concat(i()), n.Ft)
                    }(o) : (u(1),
                    n.un("[ad-component]", "progress -> 100%", i()))
                }
                t.active.set(!1),
                t.enable.set(!1)
            }
            ))
        }
        ,
        n[u].un = function() {
            for (var n, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            (n = this.L.echo).emit.apply(n, l([], v(t), !1))
        }
        ,
        n[u].Yt = function(n) {
            var t;
            if (this.D.record.closes > 0)
                this.un("[ad-close-repeat]", "current ad was closed.");
            else {
                this.zt.clear();
                var r = Vf({
                    type: "close",
                    reason: n.reason
                });
                this.D.record.append(r),
                this.D.existed && this.D.current.record.append(r),
                this.Ft && (null === (t = this.Ft.records.list.last) || void 0 === t || t.append(r),
                this.Tt()),
                this.L.close.emit(n)
            }
        }
        ,
        n[u].Zt = function(n) {
            this.D.next(),
            this.At(n)
        }
        ,
        n[u].At = function(n) {
            var t, r, i, u = this;
            if (this.D.existed) {
                this.Ft = null,
                this.un("[ad-update]", this.D.info());
                var o = this.D.current.item.type;
                if ((null === (t = this.Jn.includes) || void 0 === t ? void 0 : t.length) > 0 && !Qu(this.Jn.includes, o))
                    return void this.Zt(n);
                if ((null === (r = this.Jn.excludes) || void 0 === r ? void 0 : r.length) > 0 && Qu(this.Jn.excludes, o))
                    return void this.Zt(n);
                var e = this.D.current.item
                  , f = null !== (i = this.Ct.match(e, this.Jn)) && void 0 !== i ? i : Lo((function() {
                    return u.Ct.create(e)
                }
                ));
                this.Jt(f)
            } else
                this.Yt(n)
        }
        ,
        n[u].Jt = function(n) {
            var t = this;
            this.Ft = n,
            n["for"](tf).set(this.Jn);
            var r = function(n, t) {
                var r = n.refresh;
                switch (typeof r) {
                case "number":
                    return Hf(t) || t.clock.stopwatch.calc() >= r;
                case "boolean":
                    return !!r || !t.state.ok;
                default:
                    return Hf(t)
                }
            }(this.Jn, n)
              , i = Vf({
                type: "init",
                nocache: r
            });
            n.records.cut(this.Jn.id),
            n.records.list.last.append(i),
            this.D.current.record.append(i),
            this.D.record.append(i);
            var u = n.status;
            u.enable.set(!0),
            Lo((function(i) {
                var o, e, f = i.warn, c = i.end, s = i.link, a = i.timeout, h = i.start, v = i.show, l = [co(i.error, (function(n) {
                    return t.Rt(n)
                }
                )), co(f, (function(n) {
                    return t.Xt(n)
                }
                )), co(c, (function(n) {
                    return t._t(n)
                }
                )), co(s, (function(n) {
                    return t.Et(n)
                }
                ))];
                if (t.Jn.ad_type !== Rf.BANNER && l.push(co(a, (function() {
                    return t.Pt()
                }
                ))),
                u.enable.once((function(n) {
                    return !1 === n
                }
                ), Wt(Af, l)),
                r) {
                    l.push(co(h, (function() {
                        return t.Vt()
                    }
                    ))),
                    n.clock.reset();
                    var d = null === (e = (o = t.D.current.item).config) || void 0 === e ? void 0 : e.call(o);
                    v.emit(d)
                } else
                    t.Vt()
            }
            ), n.hooks)
        }
        ,
        n[u].Et = function(n) {
            var t, r = Vf({
                type: "link",
                link: n
            });
            null === (t = this.Ft.records.list.last) || void 0 === t || t.append(r),
            this.D.current.record.append(r),
            this.D.record.append(r),
            this.L.link.emit(n)
        }
        ,
        n[u].Vt = function() {
            var n, t, r = this;
            if (this.D.record.closes > 0)
                this.un("[ad-start-skip]", this.Ft);
            else {
                this.un("[ad-start]", this.Ft),
                this.Ft.status.active.set(!0);
                var i = Vf({
                    type: "start"
                });
                if (null === (n = this.Ft.records.list.last) || void 0 === n || n.append(i),
                this.D.current.record.append(i),
                this.D.record.append(i),
                this.Ft.clock.duration.value > 0 && this.Ft.clock.stopwatch.cut(),
                this.Jn.allow_ui_close && nf(this.Ft).allow_ui_close && this.zt.schedule.when(null !== (t = this.Jn.close_button_delay) && void 0 !== t ? t : 0, (function() {
                    r.Ft.locate(of, (function(n) {
                        var t, i, u, o = Nr(n.ec.outer, gn, {
                            id: "close-btn",
                            style: c(c(c(c(c(c(c(c(c({}, Gi("inherit")), zi()), (i = 5,
                            u = 5,
                            c(c({}, Ji(i)), Ri(u)))), Vi(20, 20)), {
                                cursor: "pointer"
                            }), Zi(5)), {
                                border: "0.5px solid ".concat(Si(255, 255, 255, .1))
                            }), qi(!1)), {
                                transition: (t = .5,
                                j(t) ? t + "s" : t),
                                background: Si(0, 0, 0, .4),
                                filter: ji(1),
                                willChange: "filter"
                            }),
                            innerHTML: Pt('\n<svg style="pointer-events: none; width: 14px; height: 14px; position: absolute; stroke: #ffffff; stroke-width: 1.25; display: block; top: 0; left: 0; right: 0; bottom: 0; margin: auto;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15">\n    <path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path>\n</svg>'),
                            onpointerover: function() {
                                jr(o, {
                                    filter: ji(1.5)
                                })
                            },
                            onpointerout: function() {
                                jr(o, {
                                    filter: ji(1)
                                })
                            },
                            onclick: function() {
                                r.Yt(Df(!0, Xf.USER_ACTION, {
                                    adb: r
                                }))
                            }
                        });
                        Jf(o),
                        Cf(o, .5, Ti(0), Ti(1)),
                        r.Dt((function() {
                            return $r(o)
                        }
                        ))
                    }
                    ))
                }
                )),
                nf(this.Ft).allow_ui_tag && this.Jn.allow_ui_tag && this.Ft.locate(of, (function(n) {
                    var t = Nr(n.ec.outer, gn, {
                        id: "ad-sign",
                        style: c(c(c(c(c(c(c(c(c(c(c(c({}, zi()), _i(5, 5)), {
                            color: "white",
                            background: Si(0, 0, 0, .35),
                            cursor: "pointer"
                        }), Qi(!1)), {
                            padding: "4px 5px",
                            fontSize: gi(10),
                            lineHeight: gi(10),
                            fontFamily: an,
                            fontWeight: "lighter"
                        }), Zi(5)), {
                            border: "0.5px solid ".concat(Si(255, 255, 255, .1))
                        }), qi(!1)), Vi(an, an)), Ui(.79)), {
                            transformOrigin: "0 0"
                        }), Bi(!1)),
                        textContent: r.Jn.ad_tag
                    });
                    r.Dt((function() {
                        return $r(t)
                    }
                    ))
                }
                )),
                this.Jn.debug) {
                    var u = this.Ft.clock;
                    this.Ft.locate(of, (function(n) {
                        var t, i = n.ec.outer, o = Nr(i, gn, {
                            id: "debug-info",
                            style: c(c(c(c(c(c(c(c({
                                textAlign: "left"
                            }, zi()), Ei(5, 5)), {
                                color: "white",
                                background: Si(0, 0, 0, .8),
                                padding: gi(8),
                                whiteSpace: "pre"
                            }), Zi(5)), qi(!1)), Vi(an, an)), {
                                lineHeight: "1.2"
                            }), Ti(1)),
                            children: [{
                                tagName: "b",
                                textContent: null === (t = r.Ft.setting.data) || void 0 === t ? void 0 : t.type.toUpperCase(),
                                style: {
                                    color: "#00c0ff"
                                }
                            }, function() {
                                var n = Mr(vr(i), "small", {
                                    style: {
                                        color: "red"
                                    }
                                })
                                  , t = function() {
                                    var t, i = null === (t = r.Ft.records.list.last) || void 0 === t ? void 0 : t.links;
                                    n.textContent = "".concat(i > 0 ? "+".concat(i) : "")
                                };
                                return r.Ft.hooks.link.on(t),
                                r.Dt((function() {
                                    return r.Ft.hooks.link.off(t)
                                }
                                )),
                                t(),
                                n
                            }
                            , function() {
                                var n = vr(i)
                                  , t = Mr(n, "p", {
                                    style: {
                                        margin: "5px 0 0"
                                    }
                                })
                                  , o = []
                                  , e = u.duration.value;
                                wr.apply(void 0, l([t, "id: ".concat(r.Jn.id, "\n")], v(e > 0 ? ["history: ", Lo((function() {
                                    var t = zf(n);
                                    return o.push((function() {
                                        return t.data = Gf(u.stopwatch.calc(0, -1).toFixed(3), u.progress.value)
                                    }
                                    )),
                                    t
                                }
                                )), "\n", "runtime: ", Lo((function() {
                                    var t = zf(n);
                                    return o.push((function(n) {
                                        return t.data = "".concat(n)
                                    }
                                    )),
                                    t
                                }
                                )), "s(".concat(e === Infinity ? "+\u221e" : e, "s)"), "\n", "total: ", Lo((function() {
                                    var t = zf(n);
                                    return o.push((function() {
                                        return t.data = "".concat(u.stopwatch.calc().toFixed(3))
                                    }
                                    )),
                                    t
                                }
                                )), "s"] : ["runtime: ", Lo((function() {
                                    var t = zf(n);
                                    return o.push((function(n) {
                                        return t.data = "".concat(n)
                                    }
                                    )),
                                    t
                                }
                                )), "s"]), !1));
                                var f = function(n) {
                                    Y(o, (function(t) {
                                        return t(n)
                                    }
                                    )),
                                    r.zt.schedule.when(n + 1, f)
                                };
                                return f(0),
                                t
                            }
                            ]
                        }), e = function(n) {
                            return !!j(n) && (jr(o, Ti(function(n, t, r) {
                                return Math.max(Math.min(n, r), t)
                            }(.1 * -function(n) {
                                return Math.sign ? Math.sign(n) : n > 0 ? 1 : n < 0 ? -1 : 0 == n ? 1 / n == -Infinity ? -0 : 0 : NaN
                            }(n) + m(Number.parseFloat, Number, parseFloat, o.style.opacity), 0, 1))),
                            !0)
                        };
                        !function(n, t, r, i) {
                            lt(n, (function(n) {
                                return ht(n, t)
                            }
                            ), (function(n) {
                                return r(n[t], t, n)
                            }
                            ), (function(n) {
                                return null == i ? void 0 : i(t, n)
                            }
                            ))
                        }(o, "onwheel", (function(n, t, r) {
                            r[t] = function(n) {
                                e(n.deltaY) && Tf(n)
                            }
                        }
                        ), (function() {
                            o.onmousewheel = function(n) {
                                void 0 === n && (n = event),
                                e(-n.wheelDelta) && Tf(n)
                            }
                        }
                        )),
                        Lo((function(n) {
                            n();
                            var t = co(r.zt.timeline.hooks.toggle, n);
                            r.Dt((function() {
                                $r(o),
                                t()
                            }
                            ))
                        }
                        ), (function() {
                            return jr(o, {
                                filter: r.zt.timeline.isPlaying ? "" : "grayscale(1)"
                            })
                        }
                        ))
                    }
                    ))
                }
                this.zt.timeline.to(0),
                this.L.start.emit()
            }
        }
        ,
        n[u].Dt = function(n) {
            this.Ft.status.active.once((function(n) {
                return !1 === n
            }
            ), n)
        }
        ,
        n[u].Pt = function() {
            this.Ht(Vf({
                type: "timeout"
            }), Df(!0, Xf.AD_TIMEOUT, {
                adb: this
            }))
        }
        ,
        n[u]._t = function(n) {
            void 0 === n && (n = !1),
            this.Ht(Vf({
                type: "end"
            }), Df(!0, Xf.AD_COMPLETE, {
                adb: this,
                isTrusted: n
            }))
        }
        ,
        n[u].Rt = function(n) {
            this.Ht(Vf({
                type: "error",
                error: n
            }), Df(!1, Xf.AD_ERROR, {
                adb: this,
                exception: n
            }))
        }
        ,
        n[u].Xt = function(n) {
            var t, r = Vf({
                type: "warn",
                warn: n
            });
            null === (t = this.Ft.records.list.last) || void 0 === t || t.append(r),
            this.D.current.record.append(r),
            this.D.record.append(r)
        }
        ,
        n[u].Ht = function(n, t) {
            var r;
            this.Tt(),
            this.zt.clear(),
            null === (r = this.Ft.records.list.last) || void 0 === r || r.append(n),
            this.D.current.record.append(n),
            this.D.record.append(n),
            this.Gt(t)
        }
        ,
        n[u].Gt = function(n) {
            if (0 != this.D.current.record.starts) {
                if (0 == this.D.record.closes && this.Jn.preserve && this.D.nextExisted) {
                    var t = !0;
                    if (this.L.preserve.emit({
                        stopPreserve: function() {
                            t = !1
                        }
                    }),
                    t)
                        return void this.Zt(n)
                }
                this.Yt(n)
            } else
                this.Zt(n)
        }
        ,
        n[u].show = function() {
            return a(this, void 0, void 0, (function() {
                return h(this, (function(n) {
                    return this.L.init.emit(),
                    this.At(Df(!1, Xf.NO_ADS, {
                        adb: this
                    })),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        r(n[u], "adp", (function() {
            return this.Ft
        }
        )),
        n
    }();
    function Qf(n, t) {
        return {
            name: n,
            message: t
        }
    }
    function Bf(n, t) {
        return jo(t, (function(t) {
            jo(Ku(n, (function(n) {
                return n.type == t
            }
            )), (function(t) {
                !function(n, t) {
                    xo(n, t, 0)
                }(n, t)
            }
            ))
        }
        )),
        n
    }
    var Uf = function() {
        function n() {
            this.Ct = new gf,
            this.qt = [],
            this.M = [],
            this.L = {
                create: new un,
                echo: new un
            }
        }
        return r(n[u], "adpb", (function() {
            return this.Ct
        }
        )),
        r(n[u], "adbs", (function() {
            return this.qt
        }
        )),
        r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "exclusive", (function() {
            return ri(this.qt, (function(n) {
                return n.setting.exclusive
            }
            ))
        }
        )),
        r(n[u], "sponsorEnabled", (function() {
            var n = this;
            return !!this.adpb.setting.match((function(t) {
                return !n.cooldownLink(t) && !n.cooldownEnd(t)
            }
            ))
        }
        )),
        n[u].recordOf = function(n, t) {
            return Oo(this.M, (function(r) {
                return r.handle == t && function(n, t) {
                    if (n === t)
                        return !0;
                    var r = n.attributes.group
                      , i = t.attributes.group;
                    return j(r) && j(i) && r == i
                }(r.item, n)
            }
            ))
        }
        ,
        n[u].cooldown = function(n, t, r) {
            if (t > 0) {
                var i = this.recordOf(n, r);
                if (i)
                    return No(i.stamp) < t
            }
            return !1
        }
        ,
        n[u].cooldownEnd = function(n) {
            return this.cooldown(n, n.attributes.cooldown_close, "end")
        }
        ,
        n[u].cooldownLink = function(n) {
            return this.cooldown(n, n.attributes.cooldown_link, "link")
        }
        ,
        r(n[u], "fullview", (function() {
            return ri(this.qt, (function(n) {
                return n.setting.allow_fullview
            }
            ))
        }
        )),
        n[u].exist = function(n) {
            return ri(this.qt, (function(t) {
                return t.setting.id == n
            }
            ))
        }
        ,
        n[u].create = function(n) {
            return a(this, void 0, void 0, (function() {
                var t, r, i, u, o = this;
                return h(this, (function(e) {
                    if (t = function() {
                        var t = null == n ? void 0 : n.enable;
                        return S(t) ? t() : null != t ? t : "auto"
                    }(),
                    !t)
                        throw Qf(ao.AD_UNABLE, "ad is not enable.");
                    if (this.exclusive)
                        throw Qf(ao.AD_UNABLE, "exclusive ad is existed.");
                    if ((null == n ? void 0 : n.id) && this.exist(n.id))
                        throw Qf(ao.AD_UNABLE, "same id ad is existed.");
                    return r = this.adpb.setting.matchAll(pf(n.ad_type)),
                    i = po(n),
                    ko(r, (function(n) {
                        var t = n.attributes.allow_as;
                        return t && Qu(t, i.ad_type)
                    }
                    )),
                    i.allow_fullview && i.allow_ui_close && ko(r, (function(n) {
                        return n.attributes.duration >= 0
                    }
                    )),
                    jo(r.concat(), (function(n, t) {
                        if (n.attributes.cooldown_link > 0) {
                            var u = o.Ct.match(n, i);
                            if (u && u.state.ok && u.clock.canshow) {
                                var e = p(r, (function(n) {
                                    return n.attributes.duration > 0
                                }
                                ));
                                if (e > -1) {
                                    var f = r[e];
                                    f != n && (xo(r, n, e),
                                    o.L.echo.emit("[ads-priority]", "bring cache type <".concat(n.type, "> before <").concat(f.type, ">")))
                                }
                            }
                        }
                    }
                    )),
                    function(n, t, r) {
                        lt(n, (function(n) {
                            return lo(n)
                        }
                        ), t, r)
                    }(null == n ? void 0 : n.priority, (function(n) {
                        return Bf(r, n)
                    }
                    )),
                    ko(r, (function(n) {
                        return !o.cooldownLink(n) && !o.cooldownEnd(n)
                    }
                    )),
                    u = new qf(this.Ct,r,i),
                    this.qt.push(u),
                    Lo((function(t) {
                        t.push(co(u.hooks.link, (function(n) {
                            o.M.push(Vf({
                                item: u.status.current.item,
                                handle: "link"
                            }))
                        }
                        ))),
                        t.push(co(u.hooks.echo, (function() {
                            for (var n, t = [], r = 0; r < arguments.length; r++)
                                t[r] = arguments[r];
                            return (n = o.L.echo).emit.apply(n, l(["[adb]"], v(t), !1))
                        }
                        ))),
                        Lo((function(n, r) {
                            r && Y([[n.start, r.start], [n.preserve, r.preserve], [n.init, r.init], [n.link, r.link], [n.close, r.close]], (function(n) {
                                var r = v(n, 2)
                                  , i = r[1];
                                return i && t.push(co(r[0], i))
                            }
                            ))
                        }
                        ), u.hooks, null == n ? void 0 : n.on),
                        u.hooks.close.once((function(n) {
                            for (var r = 0; r < u.status.length; r++) {
                                var i = u.status.item(r)
                                  , e = i.record.cache.end;
                                if (e)
                                    for (var f = 0; f < e.length; f++) {
                                        var c = e.at(f);
                                        o.M.push({
                                            item: i.item,
                                            handle: c.type,
                                            stamp: c.stamp
                                        })
                                    }
                            }
                            P(o.qt, u),
                            Y(t, (function(n) {
                                return n()
                            }
                            ))
                        }
                        ))
                    }
                    ), []),
                    this.L.create.emit(u),
                    [2, u]
                }
                ))
            }
            ))
        }
        ,
        n
    }()
      , $f = function() {
        function n(n) {
            this.Zt = n,
            this.Qt = !1,
            this.Bt = !1
        }
        return r(n[u], "nextCalled", (function() {
            return this.Bt
        }
        )),
        r(n[u], "prevented", (function() {
            return this.Qt
        }
        )),
        n[u].prevent = function() {
            this.Qt = !0
        }
        ,
        n[u].next = function() {
            this.Qt && !this.Bt && (this.Bt = !0,
            this.Zt())
        }
        ,
        n
    }()
      , Kf = function(n) {
        function t(t, r) {
            var i = n.call(this, r) || this;
            return i.Ut = t,
            i
        }
        return f(t, n),
        r(t[u], "isTrusted", (function() {
            return this.Ut
        }
        )),
        t
    }($f)
      , nc = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.M = [],
            t.on((function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                t.M.push({
                    value: n,
                    stamp: ro()
                })
            }
            )),
            t
        }
        return f(t, n),
        r(t[u], "length", (function() {
            return this.M.length
        }
        )),
        t[u].at = function(n) {
            return bt(this.M, n)
        }
        ,
        t
    }(un)
      , tc = function() {
        function n() {
            this.T = -1,
            this.$t = 0,
            this.Kt = 0
        }
        return r(n[u], "isPlaying", (function() {
            return -1 != this.T
        }
        )),
        n[u].start = function() {
            var n = this;
            if (!this.isPlaying) {
                var t = function(r) {
                    n.T = _e(t);
                    var i = n.$t > 0 ? r - n.Kt : 0;
                    n.Kt = r,
                    n.$t++,
                    n.nr(i)
                };
                this.T = _e(t),
                this.R(!0, !1)
            }
        }
        ,
        n[u].stop = function() {
            this.isPlaying && (Ce(this.T),
            this.T = -1,
            this.$t = 0,
            this.Kt = 0,
            this.R(!1, !0))
        }
        ,
        n[u].toggle = function() {
            this.isPlaying ? this.stop() : this.start()
        }
        ,
        n[u].R = function(n, t) {}
        ,
        n[u].nr = function(n) {}
        ,
        n
    }()
      , rc = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.tr = 0,
            t
        }
        return f(t, n),
        r(t[u], "currentTime", (function() {
            return this.tr / 1e3
        }
        )),
        t[u].to = function(n) {
            var t = this.tr
              , r = 1e3 * n;
            t != r && (this.tr = r,
            this.X(r / 1e3, t / 1e3))
        }
        ,
        t[u].nr = function(t) {
            n[u].nr.call(this, t),
            this.tr += t
        }
        ,
        t[u].X = function(n, t) {}
        ,
        t
    }(tc)
      , ic = function(n) {
        function r() {
            var t = n.call(this) || this;
            return t.rr = 1,
            t
        }
        return f(r, n),
        function(n, r, i, u) {
            t(n, r, {
                get: i,
                set: u,
                configurable: !0
            })
        }(r[u], "rate", (function() {
            return this.rr
        }
        ), (function(n) {
            this.rr = n
        }
        )),
        r[u].nr = function(t) {
            n[u].nr.call(this, t * this.rr)
        }
        ,
        r
    }(rc)
      , uc = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.L = {
                move: new un,
                toggle: new un,
                step: new un
            },
            t
        }
        return f(t, n),
        r(t[u], "hooks", (function() {
            return this.L
        }
        )),
        t[u].R = function(n, t) {
            this.L.toggle.emit({
                previous: t,
                current: n
            })
        }
        ,
        t[u].X = function(n, t) {
            this.L.move.emit({
                previous: t,
                current: n
            })
        }
        ,
        t[u].nr = function(t) {
            n[u].nr.call(this, t),
            this.L.step.emit()
        }
        ,
        t
    }(ic)
      , oc = function(n) {
        function t() {
            var t = new uc;
            return n.call(this, new Mf((function() {
                return t.currentTime
            }
            )), t) || this
        }
        return f(t, n),
        t
    }(function(n) {
        function t(t, r) {
            var i = n.call(this, t, r) || this;
            return r.hooks.step.on((function() {
                return i.schedule.step()
            }
            )),
            i
        }
        return f(t, n),
        t
    }(kf))
      , ec = function() {
        function n(n) {
            var t = this;
            this.ir = n,
            this.ur = [],
            this.D = new Uo,
            this.An = function() {
                return t.D.render(t.value, t)
            }
        }
        return n[u].render = function() {
            this.An()
        }
        ,
        n[u].append = function() {
            for (var n, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            (n = this.ur).push.apply(n, l([], v(t), !1)),
            this.er(t, [])
        }
        ,
        n[u].appendAt = function(n, t) {
            this.cr(Of(this.ur, t, n))
        }
        ,
        n[u].removeAt = function(n) {
            this.sr([D(this.ur, n)])
        }
        ,
        n[u].clear = function() {
            this.sr(this.ur)
        }
        ,
        n[u].at = function(n) {
            return bt(this.ur, n)
        }
        ,
        r(n[u], "value", (function() {
            return this.ir(this.ur)
        }
        )),
        r(n[u], "length", (function() {
            return this.ur.length
        }
        )),
        r(n[u], "hook", (function() {
            return this.D.hook
        }
        )),
        n[u].h = function(n) {
            var t = this;
            Y(n, (function(n) {
                return n.hook.off(t.An)
            }
            ))
        }
        ,
        n[u].u = function(n) {
            var t = this;
            Y(n, (function(n) {
                return n.hook.on(t.An)
            }
            ))
        }
        ,
        n[u].sr = function(n) {
            this.h(n),
            this.An()
        }
        ,
        n[u].cr = function(n) {
            this.u(n),
            this.An()
        }
        ,
        n[u].er = function(n, t) {
            this.h(t),
            this.u(n),
            this.An()
        }
        ,
        n
    }()
      , fc = function(n) {
        function t() {
            return n.call(this, (function(n) {
                return fi(n, (function(n, t) {
                    return n * t.value
                }
                ), 1)
            }
            )) || this
        }
        return f(t, n),
        t
    }(ec)
      , cc = function(n) {
        function t(t) {
            var r = n.call(this, t) || this;
            return r.M = [],
            r.D.hook.on((function(n) {
                r.M.push({
                    value: n,
                    stamp: ro()
                })
            }
            )),
            r
        }
        return f(t, n),
        r(t[u], "length", (function() {
            return this.M.length
        }
        )),
        t[u].at = function(n) {
            return bt(this.M, n)
        }
        ,
        t
    }(Ko)
      , sc = "value"
      , ac = function() {
        function n(n) {
            if (this.D = new Uo,
            n) {
                if (ht(n, sc))
                    return void this.defineValue(n.value);
                if (ht(n, "get"))
                    return void this.defineGetter(n.get)
            }
            this.defineValue(undefined)
        }
        return n[u].defineValue = function(n) {
            this.ir = function() {
                return n
            }
            ,
            this.D.render(n, this)
        }
        ,
        n[u].defineGetter = function(n) {
            this.ir = n,
            this.render()
        }
        ,
        n[u].render = function() {
            this.D.render(this.ir(), this)
        }
        ,
        r(n[u], "value", (function() {
            return this.ir()
        }
        )),
        r(n[u], "getter", (function() {
            return this.ir
        }
        )),
        r(n[u], "hook", (function() {
            return this.D.hook
        }
        )),
        n
    }()
      , hc = function() {
        function n(n, t) {
            void 0 === t && (t = 0),
            this.ar = n,
            this.hr = new Ko(t),
            this.G = new Ko(0),
            this.vr = new Ko(!1),
            this.lr = new Ko("")
        }
        return r(n[u], "priority", (function() {
            return this.hr
        }
        )),
        r(n[u], "pending", (function() {
            return this.vr
        }
        )),
        r(n[u], "progress", (function() {
            return this.G
        }
        )),
        r(n[u], "label", (function() {
            return this.lr
        }
        )),
        n[u].start = function() {
            this.G.set(0),
            this.lr.set(""),
            this.vr.set(!0)
        }
        ,
        n[u].end = function() {
            this.G.set(1),
            this.vr.set(!1)
        }
        ,
        n[u].toString = function() {
            return "[".concat(this.ar, "<").concat(this.hr.value, ">(pending:").concat(this.vr.value, ", progress:").concat(Dt(this.progress.value), ")]")
        }
        ,
        n
    }()
      , vc = function() {
        function n() {
            this.dr = [],
            this.vr = new Ko(!1),
            this.G = new Ko(1),
            this.lr = new Ko("")
        }
        return n[u].create = function(n, t) {
            var r, i = new hc(n,null == t ? void 0 : t.priority);
            return (null === (r = null == t ? void 0 : t.start) || void 0 === r || r) && i.start(),
            this.add(i),
            i
        }
        ,
        n[u].add = function(n) {
            var t = this;
            this.dr.push(n),
            io((function() {
                var n = t.dr.length;
                if (n > 0) {
                    var r = t.dr.slice();
                    r.sort((function(n, t) {
                        return n.priority.value - t.priority.value
                    }
                    ));
                    for (var i = 0; i < n; i++) {
                        var u = r[i];
                        if (u.pending.value)
                            return t.vr.set(!0),
                            t.G.set(u.progress.value),
                            void t.lr.set(u.label.value)
                    }
                }
                t.G.set(1),
                t.lr.set(""),
                t.vr.set(!1)
            }
            ), (function(t) {
                n.pending.hook.on(t),
                n.progress.hook.on(t),
                n.label.hook.on(t),
                n.priority.hook.on(t),
                t()
            }
            ))
        }
        ,
        r(n[u], "length", (function() {
            return this.dr.length
        }
        )),
        r(n[u], "pending", (function() {
            return this.vr
        }
        )),
        r(n[u], "progress", (function() {
            return this.G
        }
        )),
        r(n[u], "label", (function() {
            return this.lr
        }
        )),
        n
    }()
      , lc = function() {
        function n() {
            this.tt = new ac({
                value: !0
            }),
            this.wr = new Ko(!1),
            this.q = new Ko(8),
            this.mr = new fc,
            this.br = new Ko(1),
            this.pr = new Ko(1),
            this.mr.append(this.br, this.pr)
        }
        return r(n[u], "confirm", (function() {
            return this.wr
        }
        )),
        r(n[u], "enable", (function() {
            return this.tt
        }
        )),
        r(n[u], "duration", (function() {
            return this.q
        }
        )),
        r(n[u], "rates", (function() {
            return this.mr
        }
        )),
        r(n[u], "clickRate", (function() {
            return this.br
        }
        )),
        r(n[u], "vipRate", (function() {
            return this.pr
        }
        )),
        n
    }()
      , dc = function() {
        function n() {
            var n = this;
            this.L = {
                link: new nc,
                show: new nc,
                ready: new nc,
                start: new nc,
                complete: new nc,
                confirm: new nc,
                closing: new nc,
                closeprevented: new nc,
                "finally": new nc
            },
            this.D = {
                running: new cc(!1),
                step: new cc(0)
            },
            this.Hn = new Ko(!0),
            this.Jn = new lc,
            this.yr = new oc,
            this.Jn.rates.hook.on((function(t) {
                n.yr.timeline.rate = t,
                n.echo.emit(hn("[", Bt("rate", "change"), "]"), t)
            }
            )),
            this.un = new un,
            this.Mt = new un,
            this.dr = new vc,
            this.gr = this.dr.create("time", {
                start: !1,
                priority: 1
            })
        }
        return r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "active", (function() {
            return this.Hn
        }
        )),
        r(n[u], "status", (function() {
            return this.D
        }
        )),
        r(n[u], "task", (function() {
            return this.yr
        }
        )),
        r(n[u], "echo", (function() {
            return this.un
        }
        )),
        r(n[u], "timeDealing", (function() {
            return this.gr
        }
        )),
        r(n[u], "dealings", (function() {
            return this.dr
        }
        )),
        r(n[u], "hadRun", (function() {
            return this.D.running.length > 0
        }
        )),
        r(n[u], "setting", (function() {
            return this.Jn
        }
        )),
        n[u].close = function(n) {
            this.D.running.value && this.Mt.emit(n)
        }
        ,
        n
    }()
      , wc = function() {
        function n(n) {
            void 0 === n && (n = 0),
            this.G = 0,
            this.step(n)
        }
        return r(n[u], "progress", (function() {
            return this.G
        }
        )),
        n[u].step = function(n) {
            for (var t = !1, r = (10 * this.G + 1) / 10; r <= n; r = (10 * this.G + 1) / 10)
                this.G = r,
                t = !0;
            return t
        }
        ,
        n
    }()
      , mc = function(n) {
        function t(t, r) {
            var i = n.call(this) || this;
            return i.kr = t,
            i.Ir = r,
            i.Or = {
                sloted: new un,
                preload: new un,
                process: new un,
                confirm: new un
            },
            i.jr = new un,
            Y(rr(i.hooks), (function(n) {
                var t = v(n, 2)
                  , r = t[0];
                i.jr.on(co(t[1], (function() {
                    for (var n, t = [], u = 0; u < arguments.length; u++)
                        t[u] = arguments[u];
                    return (n = i.echo).emit.apply(n, l(["".concat(r)], v(t), !1))
                }
                )))
            }
            )),
            i
        }
        return f(t, n),
        r(t[u], "aspect", (function() {
            return this.Or
        }
        )),
        t[u].Sr = function() {
            var n = this
              , t = this.task.timeline
              , r = this.timeDealing
              , i = co(t.hooks.step, (function() {
                var i = n.setting.duration.value;
                if (!(i <= 0)) {
                    var u = t.currentTime;
                    u < i ? r.progress.set(1 - Math.pow(1 - u / i, 4)) : r.end()
                }
            }
            ));
            r.start(),
            t.start(),
            r.pending.once((function(n) {
                return !n
            }
            ), (function() {
                t.stop(),
                i()
            }
            )),
            Lo((function(n) {
                var t = new wc(n.value);
                r.progress.watch((function(r) {
                    t.step(r) && n.set(t.progress)
                }
                ))
            }
            ), this.status.step)
        }
        ,
        t[u].Mr = function(n, t, r) {
            var i = so(this.Mt, (function() {
                return null == u ? void 0 : u.revoke()
            }
            ))
              , u = n.once((function(n) {
                return n == t
            }
            ), (function() {
                i(),
                r()
            }
            ))
        }
        ,
        t[u].Nr = function(n, t, r) {
            this.Lr(Df(n, t, r))
        }
        ,
        t[u].Lr = function(n) {
            this.status.running.set(!1),
            this.hooks["finally"].emit(n),
            this.jr.emit(n)
        }
        ,
        t[u].Wr = function(n, t) {
            var r = so(n, (function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                i(),
                t.apply(void 0, l([], v(n), !1))
            }
            ))
              , i = so(this.Mt, r)
        }
        ,
        t[u].en = function() {
            var n, t = this;
            this.hooks.show.emit(),
            (null === (n = this.Ir) || void 0 === n ? void 0 : n.allow_fullview) && this.Or.preload.emit((function(n) {
                t.hooks.start.once((function(t) {
                    nf(t.adp).always_show_icon || n.start()
                }
                )),
                t.jr.once((function() {
                    n.destroy()
                }
                ))
            }
            )),
            this.Mr(this.active, !0, (function() {
                return t.Cr()
            }
            ))
        }
        ,
        t[u].Cr = function() {
            var n = this;
            this.hooks.ready.emit(),
            this.kr.create(this.Ir).then((function(t) {
                n.status.running.value ? n.zr(t) : t.close()
            }
            ), (function(t) {
                n.Nr(!1, Xf.AD_ERROR, {
                    exception: t
                })
            }
            ))
        }
        ,
        t[u].zr = function(n) {
            var t = this;
            this.echo.emit("[adb-created]", n);
            var r = co(this.kr.adpb.hooks.create, (function(n) {
                t.Or.sloted.emit(n)
            }
            ))
              , i = co(this.kr.adpb.hooks.ready, (function(n) {
                n.active()
            }
            ))
              , u = so(n.hooks.start, (function() {
                o(),
                t.U(n)
            }
            ))
              , o = so(n.hooks.close, (function(n) {
                u(),
                e(),
                t.timeDealing.pending.value && t.timeDealing.end(),
                t.Lr(n)
            }
            ))
              , e = co(n.hooks.link, (function(n) {
                Lo((function(n) {
                    return n.set(2 * n.value)
                }
                ), t.setting.clickRate),
                t.hooks.link.emit(n)
            }
            ));
            this.jr.once((function(t) {
                e(),
                u(),
                o(),
                r(),
                i(),
                0 == n.status.record.closes && n.close(t.reason)
            }
            )),
            n.show()
        }
        ,
        t[u].U = function(n) {
            var t = this;
            this.hooks.start.emit(n),
            io(n.hooks.close, this.Ir, this.dealings.pending, (function(r, i, u) {
                (null == i ? void 0 : i.allow_fullview) && !(null == i ? void 0 : i.allow_ui_close) ? io((function() {
                    return t.Mr(u, !1, (function() {
                        return t.Yr(n)
                    }
                    ))
                }
                ), (function(i) {
                    nf(n.adp).duration >= 0 ? (t.Sr(),
                    t.Tr((function(n) {
                        return t.Wr(r, (function() {
                            n.center()
                        }
                        ))
                    }
                    )),
                    i()) : t.Wr(r, (function() {
                        u.value && t.Tr((function(n) {
                            n.center()
                        }
                        )),
                        i()
                    }
                    ))
                }
                )) : t.Wr(r, (function(n) {
                    return t.Lr(n)
                }
                ))
            }
            ))
        }
        ,
        t[u].Tr = function(n) {
            var t = this;
            this.Or.process.emit((function(r) {
                var i = t.dealings
                  , u = [i.label.watch((function(n) {
                    return r.label(n)
                }
                )), i.progress.watch((function(n) {
                    return r.progress(n)
                }
                ))];
                t.hooks.complete.once((function() {
                    return r.visible(!1)
                }
                )),
                t.hooks.closeprevented.once((function() {
                    r.visible(!0)
                }
                )),
                t.hooks["finally"].once((function() {
                    Y(Ge(u), (function(n) {
                        return n.revoke()
                    }
                    )),
                    r.destroy()
                }
                )),
                n(r)
            }
            ))
        }
        ,
        t[u].Yr = function(n) {
            var t = this;
            lt(this.status.step, (function(n) {
                return n.value < 1
            }
            ), (function(n) {
                return n.set(1)
            }
            )),
            this.hooks.complete.emit(),
            n.status.record.closes > 0 ? this.Nr(n.status.current.record.ok, Xf.USER_ACTION) : nf(n.adp).duration >= 0 ? this.setting.confirm.value ? Lo((function(n) {
                var r = new $f(n);
                t.Or.confirm.emit(r),
                r.prevented ? r.nextCalled || t.hooks.confirm.emit() : n()
            }
            ), (function() {
                0 === t.hooks.closing.length && t.Fr(!0)
            }
            )) : this.Fr(!1) : this.Wr(n.hooks.close, (function(n) {
                return t.Lr(n)
            }
            ))
        }
        ,
        t[u].Fr = function(n) {
            var t = this
              , r = new Kf(n,(function() {
                t.status.running.value && t.Nr(!0, Xf.DEFAULT_ACTION)
            }
            ));
            this.hooks.closing.emit(r),
            r.prevented ? this.hooks.closeprevented.emit() : this.Nr(!0, n ? Xf.USER_ACTION : Xf.DEFAULT_ACTION)
        }
        ,
        t[u].track = function() {
            var n = this;
            this.setting.enable.value ? (this.status.running.set(!0),
            this.Mt.once((function(t) {
                return n.Nr(!1, t)
            }
            )),
            this.Mr(this.active, !0, (function() {
                return n.en()
            }
            ))) : (this.echo.emit("track unabled"),
            this.Lr(Df(!1, Xf.AD_UNABLE)))
        }
        ,
        r(t[u], "options", (function() {
            return this.Ir
        }
        )),
        t
    }(dc)
      , bc = function() {
        function n() {
            this.Zr = new Uf,
            this.L = {
                create: new un
            },
            this.Ar = []
        }
        return r(n[u], "adbb", (function() {
            return this.Zr
        }
        )),
        r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "actives", (function() {
            return this.Ar
        }
        )),
        n[u].create = function(n) {
            var t = this
              , r = new mc(this.Zr,po(n));
            return this.Ar.push(r),
            r.hooks["finally"].once((function() {
                return P(t.Ar, r)
            }
            )),
            this.L.create.emit(r),
            r
        }
        ,
        n
    }();
    function pc(n) {
        return c(c({}, n), {
            allow_fullview: !0,
            allow_ui_close: !1
        })
    }
    function yc(n) {
        return c(c({}, pc(n)), {
            ad_type: Rf.PROCESS
        })
    }
    function gc(n, t) {
        Y(n.actives, (function(n) {
            kc(n, t)
        }
        )),
        n.hooks.create.on((function(n) {
            kc(n, t)
        }
        )),
        n.adbb.hooks.create.on((function(n) {
            !function(n, t) {
                n.hooks.close.once(co(n.hooks.start, (function() {
                    Lo((function(r) {
                        n.adp.status.active.once((function(n) {
                            return !1 === n
                        }
                        ), co(t.hook, r)),
                        r()
                    }
                    ), (function() {
                        Lo((function(r) {
                            t.value != r.isPlaying && (n.hooks.echo.emit("[timeline-toggle]", t.value, "<-", r.isPlaying),
                            r.toggle())
                        }
                        ), n.monitor.timeline),
                        Lo((function(r) {
                            var i = t.value
                              , u = r.isPlaying;
                            i != u && (vf(n.adp, "[stopwatch-toggle]", i, "<-", u),
                            i ? r.resume() : r.pause())
                        }
                        ), n.adp.clock.stopwatch)
                    }
                    ))
                }
                )))
            }(n, t)
        }
        ))
    }
    function kc(n, t) {
        n.hooks.show.once((function() {
            var r = new Ve;
            Lo((function(i) {
                Lo((function(u) {
                    var o = function() {
                        return ru(Ge(u))
                    };
                    u.push(r.request(i).revoke, co(t.hook, i), Af(so(n.hooks.complete, o), so(n.hooks["finally"], o)))
                }
                ), []),
                i()
            }
            ), (function() {
                t.value != n.active.value && (n.echo.emit("[can-start]", "".concat(t.value, " <- (").concat(n.active.value, ")")),
                n.active.set(t.value),
                n.timeDealing.pending.value && Lo((function(n) {
                    t.value != n.isPlaying && n.toggle()
                }
                ), n.task.timeline))
            }
            ))
        }
        ))
    }
    var Ic = function() {
        function n(n) {
            this.Jr = n,
            this.Qt = !1
        }
        return r(n[u], "value", (function() {
            return this.Jr
        }
        )),
        r(n[u], "prevented", (function() {
            return this.Qt
        }
        )),
        n[u].prevent = function() {
            this.Qt = !0
        }
        ,
        n
    }();
    function Oc(n, t, r, i) {
        var u = new Ic(r);
        t.emit(u),
        u.prevented || n.set(i ? i(u.value) : u.value)
    }
    function jc(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return n.assign.apply(n, l([], v(t), !1))
    }
    function Sc(n, t, r) {
        return n.set(t, r)
    }
    function xc(n, t) {
        return n.get(t)
    }
    function Mc(n, t) {
        return n.getAll(t)
    }
    function Nc(n, t) {
        return n["for"](t)
    }
    function Lc(n, t, r) {
        return B(xc(n, t), r)
    }
    function Wc(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return _t(Wt, xc(n, t), r)
    }
    function Cc(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        _t(Ct, ru, Mc(n, t), r)
    }
    function zc(n, t) {
        var r = n.hooks.closing;
        return {
            isTrusted: t,
            hadPrevented: r.length > 0 && r.at(-1).value[0].prevented
        }
    }
    function Yc(n, t) {
        return a(this, void 0, Promise, (function() {
            var r;
            return h(this, (function(i) {
                return r = n.dealings.create(Jn),
                [2, {
                    progress: function(n) {
                        return r.progress.set(n)
                    },
                    label: function(n) {
                        return r.label.set(n)
                    },
                    finish: function(i) {
                        return i && n.hooks.closing.once((function(n) {
                            i(n),
                            n.prevented && r.start()
                        }
                        )),
                        r.end(),
                        t
                    }
                }]
            }
            ))
        }
        ))
    }
    function Tc(n, t) {
        io((function(r, i, u) {
            var o, e, f, s = "".concat(r, "-").concat(null !== (e = null === (o = xc(t, Du)) || void 0 === o ? void 0 : o[0]) && void 0 !== e ? e : "unknow");
            switch (r) {
            case En:
                f = function(n) {
                    return c(c({}, pc(n)), {
                        ad_type: Rf.REWARD
                    })
                }(c({
                    id: s
                }, i));
                break;
            case Jn:
                f = yc(c({
                    id: s
                }, i));
                break;
            case Pn:
                f = function(n) {
                    return c(c({}, pc(n)), {
                        ad_type: Rf.ROLL
                    })
                }(c({
                    id: s
                }, i))
            }
            var a = n.create(f)
              , h = u(a, function(n, t, r) {
                var i = new Promise((function(r, i) {
                    io(n.hooks["finally"], (function(u) {
                        if (u.length > 0) {
                            var o = u.at(-1).value[0];
                            i(o.exception || o.reason)
                        } else
                            u.once((function(u) {
                                var o;
                                _t(t),
                                u.ok ? r(zc(n, u.isTrusted)) : i(null !== (o = u.exception) && void 0 !== o ? o : u.reason)
                            }
                            ))
                    }
                    ))
                }
                ));
                return Lo((function(n) {
                    i.then(n, n)
                }
                ), (function() {
                    return eo(_t, r)
                }
                )),
                i
            }(a, (function() {
                return Cc(t, cu, r)
            }
            ), (function() {
                return Cc(t, su, r)
            }
            )));
            return function(n, t) {
                _t(t),
                n.track()
            }(a, (function() {
                return Cc(t, fu, r)
            }
            )),
            h
        }
        ), (function(n) {
            var r = function(t, r) {
                return n(t, r, (function(n, t) {
                    return t
                }
                ))
            };
            Sc(t, au, (function(n) {
                return r(Pn, n)
            }
            )),
            Sc(t, vu, (function(n) {
                return r(En, n)
            }
            )),
            Sc(t, hu, (function(t) {
                return n(Jn, t, Yc)
            }
            ))
        }
        ))
    }
    function Fc(n, t, r, i) {
        var u, o;
        Oc(n, t, (o = n.current,
        c(c({}, u = r), {
            temp: i,
            repeat: o && o.name === u.name ? o.repeat + 1 : 0,
            timestamp: ro()
        })))
    }
    var Zc = function(n) {
        function t() {
            return n.call(this, (function(n) {
                return bf(n, (function(n) {
                    return n.value
                }
                ))
            }
            )) || this
        }
        return f(t, n),
        t
    }(ec)
      , Ac = function() {
        function n(n, t) {
            this.Rr = n,
            this.Xr = t
        }
        return r(n[u], "enabled", (function() {
            var n, t = this.Rr.current;
            return O(t) ? t : null !== (n = null == t ? void 0 : t()) && void 0 !== n && n
        }
        )),
        n[u].show = function(n) {
            var t = this;
            return new Promise((function(r, i) {
                t.Xr.current ? r(t.Xr.current(n)) : i(Qf("no_trigger", "no trigger of <".concat(t.Xr.options.name, ">")))
            }
            ))
        }
        ,
        n
    }()
      , Jc = function() {
        function n(n) {
            var t = this;
            this.L = {
                before: new un,
                after: new un,
                post: new un
            },
            Sc(n, fu, (function() {
                for (var n, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                return (n = t.L.before).emit.apply(n, l([], v(r), !1))
            }
            )),
            Sc(n, cu, (function() {
                for (var n, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                return (n = t.L.after).emit.apply(n, l([], v(r), !1))
            }
            )),
            Sc(n, su, (function() {
                for (var n, r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                return (n = t.L.post).emit.apply(n, l([], v(r), !1))
            }
            )),
            this._r = new Ac(Nc(n, uu),Nc(n, au)),
            this.Er = new Ac(Nc(n, ou),Nc(n, hu)),
            this.Pr = new Ac(Nc(n, eu),Nc(n, vu))
        }
        return r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "roll", (function() {
            return this._r
        }
        )),
        r(n[u], "process", (function() {
            return this.Er
        }
        )),
        r(n[u], "reward", (function() {
            return this.Pr
        }
        )),
        n
    }()
      , Rc = function() {
        function n() {
            this.Vr = {},
            this.L = {
                create: new un
            }
        }
        return n[u].forEach = function(n) {
            ur(this.Vr, (function(t, r) {
                return n(t, r)
            }
            ))
        }
        ,
        r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        n[u].get = function(n) {
            return this.Vr[n]
        }
        ,
        n[u].has = function(n) {
            return n in this.Vr
        }
        ,
        n[u].create = function(n) {
            var t = new ho({
                name: n
            });
            return this.Vr[n] = t,
            this.L.create.emit(t),
            t
        }
        ,
        n[u]["for"] = function(n) {
            return this.get(n) || this.create(n)
        }
        ,
        n[u].pick = function() {
            for (var n = this, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return fi(t, (function(t, r) {
                if (n.has(r)) {
                    var i = n.get(r);
                    i.records.length > 0 && (t[r] = i.current)
                }
                return t
            }
            ), {})
        }
        ,
        n[u].map = function(n) {
            var t = this;
            return Wf(n, (function(n, r) {
                var i = t["for"](r);
                return i.set(n),
                i
            }
            ))
        }
        ,
        n[u].assign = function() {
            for (var n = this, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            Y(t, (function(t) {
                ur(t, (function(t, r) {
                    n["for"](r).set(t)
                }
                ))
            }
            ))
        }
        ,
        n
    }()
      , Xc = function() {
        function n() {
            this.Dr = new Rc
        }
        return r(n[u], "owner", (function() {
            return this.Dr
        }
        )),
        n[u]["for"] = function(n) {
            return this.Dr["for"](n)
        }
        ,
        n[u].once = function(n, t) {
            var r = this;
            return new Promise((function(i) {
                var u = r["for"](n);
                u.records.length > 0 && t(u.current) ? i() : u.assert((function() {
                    return t(u.current)
                }
                ), (function() {
                    return i()
                }
                ))
            }
            ))
        }
        ,
        n[u].set = function(n, t) {
            this["for"](n).set(t)
        }
        ,
        n[u].has = function(n) {
            return this.Dr.has(n) && this.Dr.get(n).records.length > 0
        }
        ,
        n[u].get = function(n) {
            var t;
            return null === (t = this.Dr.get(n)) || void 0 === t ? void 0 : t.current
        }
        ,
        n[u].locate = function(n, t) {
            this.has(n) && t(this.get(n))
        }
        ,
        n[u].getAll = function(n) {
            var t = []
              , r = this.Dr.get(n);
            return r && fi(r.records, (function(n, t) {
                return n.push(t.value),
                n
            }
            ), t),
            t
        }
        ,
        n[u].scan = function(n, t) {
            if (this.has(n)) {
                var r = this.Dr.get(n);
                Y(r.records, (function(i) {
                    return t(i.value, n, r)
                }
                ))
            }
        }
        ,
        n[u].assign = function() {
            for (var n, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            (n = this.Dr).assign.apply(n, l([], v(Ku(t, (function(n) {
                return vt(n)
            }
            ))), !1))
        }
        ,
        n
    }()
      , _c = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].observe = function(n) {
            var t, r = this, i = function() {
                t || (t = eo((function() {
                    t = null,
                    n(r)
                }
                )))
            };
            return this.M.length > 0 && i(),
            this.L.change.on(i),
            {
                revoke: function() {
                    r.L.change.off(i),
                    null == t || t.revoke()
                }
            }
        }
        ,
        t
    }(function() {
        function n() {
            this.M = [],
            this.Hr = -1,
            this.L = {
                change: new un
            }
        }
        return r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "length", (function() {
            return this.Hr + 1
        }
        )),
        n[u].set = function(n) {
            this.Hr++,
            this.M.splice(this.Hr, this.M.length + 1 - this.Hr, n),
            this.Gr()
        }
        ,
        n[u].Gr = function() {
            this.L.change.emit(this.current, this)
        }
        ,
        r(n[u], "previous", (function() {
            return this.M[this.Hr - 1]
        }
        )),
        r(n[u], "current", (function() {
            return this.M[this.Hr]
        }
        )),
        n[u].at = function(n) {
            return this.M[this.Hr + n]
        }
        ,
        n
    }())
      , Ec = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].go = function(n) {
            var t = this.Hr + n;
            t > -1 && t < this.M.length && (this.Hr = t,
            this.Gr())
        }
        ,
        t[u].forward = function() {
            this.go(1)
        }
        ,
        t[u].back = function() {
            this.go(-1)
        }
        ,
        t
    }(_c)
      , Pc = function() {
        function n() {
            this.L = {
                l2m: new un,
                m2l: new un,
                merge: new un
            },
            this.qr = new _c,
            this.Qr = new Ec,
            this.Br = []
        }
        return r(n[u], "local", (function() {
            return this.Qr
        }
        )),
        r(n[u], "merged", (function() {
            return this.qr
        }
        )),
        n[u].set = function(n, t) {
            this.Qr.set({
                name: n,
                options: t
            })
        }
        ,
        r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        r(n[u], "locked", (function() {
            return this.Br.length > 0
        }
        )),
        n[u].lock = function(n) {
            Qu(this.Br, n) || (this.Br.push(n),
            Fc(this.qr, this.L.merge, {
                name: n
            }, !0))
        }
        ,
        n[u].unlock = function(n) {
            var t = this;
            lt(_(this.Br, n), (function(n) {
                return n > -1
            }
            ), (function(n) {
                D(t.Br, n),
                t.locked ? Fc(t.qr, t.L.merge, {
                    name: bt(t.Br, -1)
                }, !0) : t.Qr.length > 0 && Fc(t.qr, t.L.merge, t.Qr.current, !1)
            }
            ))
        }
        ,
        n
    }()
      , Vc = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.Ur = new Zc,
            t.$r = new Xc,
            t.Kr = new Jc(t.$r),
            t.ni = new Pc,
            io(t.$r, t.ni, t.Kr.hooks, (function(n, t, r) {
                Sc(n, Tu, 0),
                Sc(n, Wu, 0),
                Sc(n, Ru, 0),
                function(n, t) {
                    var r = function(t) {
                        n.locked || Fc(n.merged, n.hooks.merge, t, !1)
                    }
                      , i = n.local
                      , u = n.hooks;
                    pi(co(t.hooks.change, Lo((function(n) {
                        return Y(t.records, (function(t) {
                            return n(t.value)
                        }
                        )),
                        function(t) {
                            return n(t.last)
                        }
                    }
                    ), (function(n) {
                        var o = i.current;
                        if (!o || n[0] != o.name || n[1] != o.options) {
                            var e = {
                                name: n[0],
                                options: n[1],
                                from: t
                            };
                            Oc(i, u.m2l, e),
                            r(e)
                        }
                    }
                    ))), co(i.hooks.change, (function(n) {
                        if (n.from != t) {
                            var i = t.current;
                            i && n.name == i[0] && n.options == i[1] || (Oc(t, u.l2m, n, (function(n) {
                                return [n.name, n.options]
                            }
                            )),
                            r(n))
                        }
                    }
                    )))
                }(t, Nc(n, Du));
                var i = r.post;
                r.before.on((function(n) {
                    var r, u, o = qt(n, "at", null !== (u = null === (r = t.local.current) || void 0 === r ? void 0 : r.name) && void 0 !== u ? u : "unknow");
                    t.lock(o),
                    i.once((function() {
                        return t.unlock(o)
                    }
                    ))
                }
                ))
            }
            )),
            t
        }
        return f(t, n),
        r(t[u], "visible", (function() {
            return this.Ur
        }
        )),
        r(t[u], "metas", (function() {
            return this.$r
        }
        )),
        r(t[u], "midgame", (function() {
            return this.Kr
        }
        )),
        r(t[u], "pipeline", (function() {
            return this.ni
        }
        )),
        t
    }(Jo)
      , Dc = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.ti = new bc,
            t
        }
        return f(t, n),
        r(t[u], "adub", (function() {
            return this.ti
        }
        )),
        t[u].loading = function() {
            var n = function(n) {
                var t = n.create(yc({
                    id: "app-loading"
                }));
                return t.setting.confirm.set(!0),
                t.setting.duration.set(12),
                t
            }(this.ti);
            return function(n, t, r) {
                n.setting.confirm.set(!0),
                lt(Nc(t, Tu), (function(n) {
                    return 0 === n.current
                }
                ), (function(i) {
                    var u = [];
                    r((function(r) {
                        var i = Nc(t, Ou)
                          , o = n.dealings.create(r, {
                            priority: i.current,
                            start: !0
                        })
                          , e = i.observe((function(n) {
                            return o.priority.set(n.current)
                        }
                        ))
                          , f = Nc(t, Iu).observe((function(n) {
                            return o.label.set(n.current)
                        }
                        ))
                          , c = Nc(t, ku).observe((function(n) {
                            return o.progress.set(n.current)
                        }
                        ))
                          , s = function() {
                            o.end(),
                            f.revoke(),
                            c.revoke(),
                            e.revoke()
                        };
                        return u.push(s),
                        s
                    }
                    )),
                    i.assert((function(n) {
                        return n.current > 0
                    }
                    ), (function() {
                        return ru(u)
                    }
                    ))
                }
                ))
            }(n, Qs(this.docker), (function(n) {
                return n(Cn)
            }
            )),
            n
        }
        ,
        t[u].adopted = function(t) {
            n[u].adopted.call(this, t);
            var r = t.get(Vc)
              , i = this.ti
              , o = Qs(t);
            gc(i, r.visible),
            Sc(o, eu, (function() {
                return i.adbb.adpb.setting.check(Rf.REWARD)
            }
            )),
            Sc(o, Zu, (function() {
                lt(Nc(o, Wu), (function(n) {
                    return 2 !== n.current
                }
                ), (function(n) {
                    io(Bs(t).merged.hooks.change, (function(t) {
                        var r, u = co(t, (function(n) {
                            var t;
                            null == r || r.close(Xf.DEFAULT_ACTION);
                            var u = null === (t = xc(o, lu)) || void 0 === t ? void 0 : t[n.name];
                            u && ((r = i.create(c(c({}, u), {
                                allow_fullview: !1,
                                allow_ui_close: !0,
                                ad_type: Rf.BANNER
                            }))).hooks["finally"].once((function() {
                                return r = null
                            }
                            )),
                            r.track())
                        }
                        ));
                        n.assert((function(n) {
                            return 2 === n.current
                        }
                        ), (function() {
                            null == r || r.close(Xf.DEFAULT_ACTION),
                            u(),
                            Cc(o, zu)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            )),
            Tc(i, o)
        }
        ,
        t
    }(Jo);
    function Hc(n, t) {
        return Nr(n, gn, c(c({}, t), {
            style: c(c(c(c(c({
                display: "block"
            }, zi()), Vi(mi, "inherit")), _i(0, 0)), {
                background: "#fff"
            }), null == t ? void 0 : t.style)
        }))
    }
    var Gc = function() {
        function n(n) {
            this.ri = n;
            var t = Bt(Rn, "bar");
            Sr(this.ri, {
                id: t,
                style: c(c(c(c(c({}, Ci("relative")), Zi(5)), qi(!1)), Qi(!1)), Vi(mi, 10))
            }),
            this.ii = 0,
            Hc(this.ri, {
                id: Bt(t, "back"),
                style: c({}, Ti(.3))
            }),
            this.ui = Hc(this.ri, {
                id: Bt(t, "front"),
                style: {
                    width: "0%"
                }
            })
        }
        return r(n[u], "element", (function() {
            return this.ri
        }
        )),
        n[u].set = function(n, t) {
            void 0 === t && (t = !1),
            this.ii != n && (this.ii = n,
            jr(this.ui, {
                transition: t ? "width 0.5s" : di,
                width: Dt(n)
            }))
        }
        ,
        r(n[u], "value", (function() {
            return this.ii
        }
        )),
        n
    }()
      , qc = function() {
        function n(n) {
            this.ri = n,
            Sr(this.ri, {
                id: Bt(Rn, Ln, "bar"),
                style: c(c(c({}, zi()), qi(!1)), {
                    transformOrigin: "0 0"
                })
            }),
            this.G = new Gc(Nr(this.ri, gn)),
            this.lr = new Ko("");
            var t = Nr(this.ri, Ln, {
                id: Bt(Rn, Ln),
                style: c(c({
                    display: "block",
                    color: "#fff",
                    width: mi,
                    textAlign: "right",
                    fontSize: "10px"
                }, qi(!1)), {
                    textOverflow: "ellipsis",
                    fontWeight: "lighter",
                    lineHeight: "120%",
                    marginTop: "2px"
                })
            });
            this.lr.watch((function(n) {
                return function(n, t) {
                    switch (n.nodeType) {
                    case 4:
                    case 8:
                    case 7:
                    case 3:
                        n.nodeValue = t;
                    case 9:
                    case 10:
                        return
                    }
                    var r = n.childNodes
                      , i = r.length;
                    if (i > 0) {
                        var u = r[0];
                        if (function(n) {
                            return 3 === n.nodeType
                        }(u)) {
                            u.data = t;
                            for (var o = i - 1; o > 0; o--)
                                $r(r[o]);
                            return
                        }
                        !function(n) {
                            for (var t; t = n.lastChild; )
                                n.removeChild(t)
                        }(n)
                    }
                    wr(n, t)
                }(t, n)
            }
            ))
        }
        return r(n[u], "element", (function() {
            return this.ri
        }
        )),
        n[u].setBorderRadius = function(n) {
            jr(this.G.element, Zi(n))
        }
        ,
        n[u].setLength = function(n) {
            jr(this.ri, {
                width: gi(n)
            })
        }
        ,
        r(n[u], "progress", (function() {
            return this.G
        }
        )),
        r(n[u], "label", (function() {
            return this.lr
        }
        )),
        n
    }();
    function Qc(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Ct(b, n.prepend, n, Bc, t)
    }
    function Bc(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        var i = n.childNodes[0];
        Y(t, (function(t) {
            return n.insertBefore(dr(vr(n), t), i)
        }
        ))
    }
    function Uc() {
        return ut(typeof CSSKeyframesRule)
    }
    function $c(n) {
        var t;
        return null !== (t = n.cssRules) && void 0 !== t ? t : n.rules
    }
    function Kc(n, t) {
        var r = Mr(n, gn, c(c({}, t), {
            style: c(c(c(c(c({}, Vi(50, 50)), {
                maxWidth: "80%",
                maxHeight: "80%",
                margin: an
            }), zi()), Pi(0)), Qi(!1))
        }));
        if (Uc()) {
            var i = "loading-rotate"
              , u = "loading-arc";
            (function(n, t) {
                if (Uc())
                    for (var r = function(n) {
                        return n.styleSheets
                    }(n), i = 0; i < r.length; i++) {
                        var u = _t($c, r[i]);
                        if (u && ti(u, (function(n) {
                            return Ut(n, CSSKeyframesRule) && n.name === t
                        }
                        )))
                            return !0
                    }
                return !1
            }
            )(n, i) || Qc(r, Mr(n, "style", {
                innerHTML: "@keyframes ".concat(i, "\n{\n    100% {\n        transform: rotate(360deg);\n    }\n}\n@keyframes ").concat(u, "\n{\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n}")
            })),
            r.insertAdjacentHTML("beforeend", '<svg viewBox="25 25 50 50" style="animation: '.concat(i, ' 2s linear infinite; transform-origin: center center; width: 100%; height: 100%;">\n    <circle style="animation: ').concat(u, ' 1.5s ease-in-out infinite; stroke: white; stroke-linecap: round; stroke-dasharray: 100, 200; stroke-dashoffset: 0;" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />\n</svg>'))
        } else
            Qc(r, "LOADING...");
        return r
    }
    function ns(n, t, r, i, u, o) {
        Lo((function(t) {
            Y(n.actives, t),
            n.hooks.create.on(t)
        }
        ), (function(n) {
            return function(n, t, r, i, u, o) {
                var e = n.aspect;
                e.sloted.on((function(n) {
                    var t = nf(n);
                    t.always_web && (n["for"](rf).set(u),
                    t.always_use_dom && n["for"](of).container.set(t.duration >= 0 ? r : i))
                }
                )),
                e.preload.on((function(n) {
                    var r = vr(t)
                      , i = function(n, t) {
                        return Mr(n, gn, c(c({}, t), {
                            style: pi(c(c(c(c(c(c(c({}, Di()), qi(!1)), {
                                transformOrigin: "0 0"
                            }), Qi(!0)), Bi(!1)), {
                                background: Si(0, 0, 0, .8),
                                backdropFilter: "blur(1em) saturate(120%)"
                            }), Fi(-1)), null == t ? void 0 : t.style)
                        }))
                    }(r, pi(o ? {
                        style: {
                            backdropFilter: ""
                        }
                    } : {}, {
                        id: "background"
                    }))
                      , u = Kc(r, {
                        id: "loading-icon"
                    });
                    wr(t, i, u),
                    Cf(i, .3, Ti(0), Ti(1)),
                    n({
                        start: function() {
                            return $r(u)
                        },
                        destroy: function() {
                            $r(u),
                            $r(i)
                        }
                    })
                }
                )),
                e.process.on((function(n) {
                    var t = new qc(Nr(r, gn, {
                        style: c(c(c({}, Ei(20, 20)), Gi(!0)), {
                            width: "100px",
                            transition: "0.5s"
                        })
                    }));
                    n({
                        label: function(n) {
                            t.label.set(n)
                        },
                        progress: function(n) {
                            t.progress.set(n)
                        },
                        visible: function(n) {
                            jr(t.element, Yi(n ? "" : di))
                        },
                        center: function() {
                            jr(t.element, c(c({}, c(c({}, _i("50%", "50%")), $i(.5, .5))), Xi("")))
                        },
                        destroy: function() {
                            $r(t.element)
                        }
                    })
                }
                )),
                e.confirm.on((function(n) {
                    n.prevent();
                    var t = {
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }
                      , i = {
                        color: "black",
                        backgroundColor: "white"
                    }
                      , u = Nr(r, "div", {
                        id: "loading-start-button",
                        style: c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c({
                            textAlign: "center",
                            display: "block"
                        }, zi()), {
                            lineHeight: "50px"
                        }), Vi(120, 50)), {
                            cursor: "pointer"
                        }), Zi(10)), {
                            fontSize: "26px",
                            border: "0.5px solid #ffffff"
                        }), qi(!1)), Qi(!0)), Bi(!1)), {
                            transition: "0.5s"
                        }), Ai(0)), Ji(0)), {
                            margin: "0 auto"
                        }), Xi(40)), Gi(!0)), t), {
                            backdropFilter: "blur(10px)",
                            boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.1)"
                        }),
                        innerText: "\u25b6",
                        textContent: "\u25b6",
                        onclick: function() {
                            $r(u),
                            n.next()
                        },
                        onpointerover: function() {
                            jr(u, i)
                        },
                        onpointerout: function() {
                            jr(u, t)
                        }
                    });
                    Jf(u)
                }
                ))
            }(n, t, r, i, u, o)
        }
        ))
    }
    function ts(n) {
        return n.top === n
    }
    function rs(n) {
        try {
            return !!n.toString
        } catch (Sn) {
            return !1
        }
    }
    function is(n, t) {
        var r = rs(n);
        return {
            window: n,
            accessible: r,
            url: r ? n.location.href : t
        }
    }
    function us(n) {
        return function(n) {
            return n.referrer
        }(n.document)
    }
    function os(n) {
        return n.location.ancestorOrigins
    }
    function es(n, t, r) {
        var i, u, o = rs(n);
        if (0 == r) {
            if (o && (e = us(n)) && (!(f = os(n)) || hi(e).origin == f[0]))
                return e
        } else {
            var e, f, c = r - 1, s = t[c], a = s.window;
            if (s.accessible && (e = us(a)) && (!(f = os(a)) || hi(e).origin == f[0]))
                return e;
            for (var h = c; h >= 0; h--) {
                var v = t[h];
                if (v.accessible)
                    return null === (i = os(v.window)) || void 0 === i ? void 0 : i[c - h]
            }
        }
        return o ? null === (u = os(n)) || void 0 === u ? void 0 : u[r] : null
    }
    function fs(n) {
        for (var t, r, i = Mt(function(n) {
            var t = [];
            if (!ts(n))
                for (var r = n.parent; r && (t.push(r),
                !ts(r)); r = r.parent)
                    ;
            return t
        }(n), (function(n) {
            return is(n)
        }
        )), u = 0, o = i.length; u < o; u++)
            null !== (t = (r = i[u]).url) && void 0 !== t || (r.url = es(n, i, u));
        return i
    }
    var cs = function() {
        function n() {
            this.O = {}
        }
        return r(n[u], "alias", (function() {
            return this.O
        }
        )),
        n[u].create = function(n) {
            return new oi(n,this.O)
        }
        ,
        n
    }()
      , ss = function() {
        function n() {
            this.oi = new cs,
            this.it = [],
            this.ei = [],
            this.fi = [],
            this.ci = []
        }
        return n[u].refresh = function(n) {
            var t = this;
            Lo((function(r, i, u, o) {
                Ct(go, r, function(n) {
                    return l([is(n)], v(fs(n)), !1)
                }(n)),
                Ct(go, i, vi(r, t.oi.alias)),
                Ct(go, u, Ku(i, (function(n) {
                    return n.accessible
                }
                ))),
                o.length = 0;
                for (var e = 0, f = r.length; e < f && r[e].accessible; e++)
                    o[e] = i[e]
            }
            ), this.it, this.ei, this.fi, this.ci)
        }
        ,
        r(n[u], "builder", (function() {
            return this.oi
        }
        )),
        r(n[u], "all", (function() {
            return this.it
        }
        )),
        r(n[u], "valids", (function() {
            return this.ei
        }
        )),
        r(n[u], "accessibleValids", (function() {
            return this.fi
        }
        )),
        r(n[u], "continuousAccessibles", (function() {
            return this.ci
        }
        )),
        n
    }();
    function as(n) {
        return (new DOMParser).parseFromString(n, function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return Ht(n, "/")
        }("text", "html"))
    }
    function hs(n) {
        return n && ut(typeof XMLSerializer) ? (new XMLSerializer).serializeToString(n) : ""
    }
    function vs(n, t) {
        var r;
        return null === (r = n.querySelector) || void 0 === r ? void 0 : r.call(n, t)
    }
    function ls(n) {
        return _t(vs, n, "meta[http-equiv=Content-Security-Policy i]")
    }
    function ds(n, t) {
        return n.length === t.length && bf(n, (function(n, r) {
            return B(n, t[r])
        }
        ))
    }
    function ws(n, t) {
        return zt(nu(n, t))
    }
    function ms(n, t, r) {
        var i = []
          , u = function(t) {
            ru(Ge(i)),
            k(t) ? io((function() {
                return vs(n, t)
            }
            ), (function(t) {
                dt(t(), (function(n) {
                    r(n)
                }
                ), (function() {
                    var u = Xr(n, (function() {
                        var n = t();
                        n && (u.revoke(),
                        r(n))
                    }
                    ));
                    i.push((function() {
                        return u.revoke()
                    }
                    ))
                }
                ))
            }
            )) : H(t) || r(t)
        };
        co(t.hooks.change, (function(n) {
            return n.last && u(n.last)
        }
        )),
        dt(t.current, (function(n) {
            return u(n)
        }
        ))
    }
    function bs(n, t, r) {
        ms(n, r, (function(n) {
            return t.set(n)
        }
        ))
    }
    var ps = function() {
        function n(n) {
            this.ri = n
        }
        return r(n[u], "element", (function() {
            return this.ri
        }
        )),
        n
    }();
    function ys(n, t) {
        if (de(n, t))
            return !0;
        for (var r = be(t); me(r); r = be(r.host))
            if (de(n, r.host))
                return !0;
        return !1
    }
    function gs(n) {
        return !(!n.addEventListener || !n.removeEventListener)
    }
    var ks = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.si = !1,
            t
        }
        return f(t, n),
        t[u].setDocument = function(n) {
            this.ai = n
        }
        ,
        r(t[u], "isConnected", (function() {
            return this.si
        }
        )),
        t[u].yn = function() {
            var t, r = this;
            n[u].yn.call(this),
            this.si = Le(this.pn);
            var i = function() {
                var n = Le(r.pn);
                r.si != n && (r.si = n,
                r.P.emit())
            }
              , o = null !== (t = this.ai) && void 0 !== t ? t : vr(this.pn);
            if (Rr()) {
                var e = new MutationObserver((function(n) {
                    Y(n, (function(n) {
                        if (r.si) {
                            var t = n.removedNodes;
                            if (t)
                                for (var i = 0, u = t.length; i < u; i++)
                                    if (ys(t[i], r.pn)) {
                                        r.si = !1,
                                        r.P.emit();
                                        break
                                    }
                        } else {
                            var o = n.addedNodes;
                            if (o)
                                for (i = 0,
                                u = o.length; i < u; i++)
                                    if (ys(o[i], r.pn)) {
                                        r.si = !0,
                                        r.P.emit();
                                        break
                                    }
                        }
                    }
                    ))
                }
                ));
                e.observe(o, {
                    childList: !0,
                    subtree: !0
                }),
                this.bn.push((function() {
                    return e.disconnect()
                }
                ))
            } else {
                if (gs(this.pn)) {
                    var f = iu(o);
                    if (f[Yr] && f[Tr])
                        return void this.bn.push(Af(Jr(this.pn, Yr, i), Jr(this.pn, Tr, i)));
                    if (f[Fr] && f[Zr])
                        return void Lo((function(n) {
                            r.bn.push(Af(Jr(o, Fr, n, !0), Jr(o, Zr, n, !0)))
                        }
                        ), (function(n) {
                            return n.target === r.pn && i()
                        }
                        ))
                }
                var c = this.gn.request(i);
                this.bn.push((function() {
                    null == c || c.revoke()
                }
                ))
            }
        }
        ,
        t
    }(Qe)
      , Is = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.Ur = !0,
            t
        }
        return f(t, n),
        r(t[u], "visible", (function() {
            return this.Ur
        }
        )),
        t[u].hi = function() {
            var t = this;
            n[u].hi.call(this);
            var r = We(this.pn);
            Lo((function(n) {
                Lo((function(i) {
                    n(),
                    t.vi.push(Jr(r, "visibilitychange", i))
                }
                ), (function() {
                    n(),
                    t.P.emit()
                }
                ))
            }
            ), (function() {
                return t.Ur = !r.hidden
            }
            ))
        }
        ,
        t
    }(function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.vi = [],
            t
        }
        return f(t, n),
        t[u].li = function() {
            ru(Ge(this.vi))
        }
        ,
        t[u].hi = function() {}
        ,
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this);
            var r = new ks;
            Lo((function(n) {
                r.hook.on(n),
                r.observe(t.pn),
                t.bn.push((function() {
                    t.li(),
                    r.disconnect()
                }
                )),
                n()
            }
            ), (function() {
                r.isConnected ? t.hi() : t.li()
            }
            ))
        }
        ,
        t
    }(qe));
    function Os(n) {
        return n.width <= 0 && n.height < 0
    }
    function js(n) {
        return n.width * n.height
    }
    function Ss(n) {
        var t = We(n);
        if (!t)
            return null;
        var r, i, u, o = Kt(t), e = o ? {
            x: 0,
            y: 0,
            width: o.innerWidth,
            height: o.innerHeight
        } : {
            x: 0,
            y: 0,
            width: ge(t.documentElement),
            height: ke(t.documentElement)
        }, f = function(n) {
            var t = n.getBoundingClientRect();
            return t.left !== t.x && (t.x = t.left),
            t.top !== t.y && (t.y = t.top),
            t
        }(n);
        return {
            rootBounds: e,
            boundingClientRect: f,
            intersectionRect: (i = f,
            u = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            Os(r = e) || Os(i) || (u.x = Math.max(r.x, i.x),
            u.y = Math.max(r.y, i.y),
            u.width = Math.min(r.x + r.width, i.x + i.width) - u.x,
            u.height = Math.min(r.y + r.height, i.y + i.height) - u.y,
            (u.width <= 0 || u.height <= 0) && (u.x = 0,
            u.y = 0,
            u.width = 0,
            u.height = 0)),
            u)
        }
    }
    var xs = function(n) {
        function t(t) {
            void 0 === t && (t = .3);
            var r = n.call(this) || this;
            return r.di = t,
            r.wi = !0,
            r
        }
        return f(t, n),
        r(t[u], "view", (function() {
            return Ss(this.pn)
        }
        )),
        r(t[u], "crossed", (function() {
            return this.wi
        }
        )),
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this);
            var r = new ks
              , i = [];
            Lo((function(n) {
                r.hook.on(n),
                r.observe(t.pn),
                t.bn.push((function() {
                    ru(Ge(i)),
                    r.disconnect()
                }
                )),
                n()
            }
            ), (function() {
                if (r.isConnected)
                    if (ut(typeof IntersectionObserver)) {
                        t.wi = !0;
                        var n = new IntersectionObserver((function(n) {
                            var r, i = Oo(n, (function(n) {
                                return n.target == t.pn
                            }
                            ));
                            if (i) {
                                var u = null !== (r = i.isIntersecting) && void 0 !== r ? r : Lo((function(n) {
                                    return n.width > 0 && n.height > 0
                                }
                                ), i.intersectionRect);
                                t.wi != u && (t.wi = u,
                                t.P.emit())
                            }
                        }
                        ),{
                            threshold: t.di
                        });
                        n.observe(t.pn),
                        i.push((function() {
                            return n.disconnect()
                        }
                        ))
                    } else
                        io((function() {
                            var n = Ss(t.pn);
                            if (!n)
                                return !1;
                            var r = js(n.intersectionRect);
                            return r >= 0 && r / js(n.boundingClientRect) >= t.di
                        }
                        ), (function(n) {
                            t.wi = n(),
                            t.gn.request((function() {
                                var r = n();
                                r !== t.wi && (t.wi = r,
                                t.P.emit())
                            }
                            ))
                        }
                        ));
                else
                    ru(Ge(i))
            }
            ))
        }
        ,
        t
    }(Qe)
      , Ms = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.ut = [],
            t.mi = [],
            t
        }
        return f(t, n),
        r(t[u], "filters", (function() {
            return this.ut
        }
        )),
        t[u].bi = function(n, t) {
            return !bf(this.ut, (function(r) {
                return r(n, t)
            }
            ))
        }
        ,
        t[u].pi = function() {
            this.P.emit()
        }
        ,
        t[u].li = function() {
            ru(Ge(this.mi))
        }
        ,
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this);
            var r = new ks;
            Lo((function(n) {
                r.hook.on(n),
                r.observe(t.pn),
                t.bn.push((function() {
                    t.li(),
                    r.disconnect()
                }
                )),
                n()
            }
            ), (function() {
                var n;
                if (r.isConnected) {
                    var i = function() {
                        t.Mn((function() {
                            return t.pi()
                        }
                        ))
                    };
                    if (Rr()) {
                        var u = We(t.pn)
                          , o = new MutationObserver((function(n, r) {
                            (function(n, t) {
                                return t.childNodes.length > 0 && bf(n, (function(n) {
                                    return de(t, n.target)
                                }
                                ))
                            }
                            )(n, t.pn) || t.bi(n, r) || i()
                        }
                        ));
                        o.observe(u, {
                            childList: !0,
                            subtree: !0
                        });
                        var e = new MutationObserver((function(n, r) {
                            t.bi(n, r) || i()
                        }
                        ));
                        e.observe(u, {
                            attributes: !0,
                            characterData: !0,
                            attributeFilter: ["style", "class", "width", "height"],
                            subtree: !0
                        }),
                        (n = t.mi).push.apply(n, l(l([], v(Mt(["transitionend", "transitioncancel", "animationend", "animationcancel", "animationiteration", "load"], (function(n) {
                            return Jr(u, n, (function(n) {
                                de(t.pn, n.target) || i()
                            }
                            ), !0)
                        }
                        ))), !1), v(Mt(["resize", "scroll"], (function(n) {
                            return Jr(Kt(u), n, (function(n) {
                                n.isTrusted && i()
                            }
                            ))
                        }
                        ))), !1));
                        var f = new Be;
                        f.hook.on(i),
                        f.observe(t.pn),
                        t.mi.push((function() {
                            f.hook.off(i),
                            f.disconnect(),
                            o.disconnect(),
                            e.disconnect()
                        }
                        ))
                    } else
                        t.mi.push(t.gn.request(i).revoke)
                } else
                    t.li()
            }
            ))
        }
        ,
        t
    }(Qe)
      , Ns = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.yi = [],
            t.gi = {
                intersection: new xs,
                render: new Ms,
                visibility: new Is,
                size: new Be
            },
            t.Ur = !1,
            t.Lt = {
                asyncing: !1,
                visible: {
                    document: !1,
                    intersection: !1,
                    self: !1,
                    ignorelist: !1
                },
                from: {
                    current: [],
                    last: [],
                    change: []
                },
                center: {
                    x: NaN,
                    y: NaN,
                    top: null,
                    ige: null
                },
                intersection: null
            },
            ur(t.gi, (function(n, r) {
                n.hook.on((function() {
                    t.Lt.from.current.push(r),
                    t.Lt.asyncing = !0,
                    t.Mn((function() {
                        return t.ki()
                    }
                    ))
                }
                ))
            }
            )),
            t.gi.render.filters.push((function(n) {
                return !(t.yi.length > 0 && bf(n, (function(n) {
                    return bf(t.yi, (function(t) {
                        return de(t, n.target)
                    }
                    ))
                }
                )))
            }
            )),
            t
        }
        return f(t, n),
        r(t[u], "ignores", (function() {
            return this.yi
        }
        )),
        r(t[u], "visible", (function() {
            return this.Ur
        }
        )),
        r(t[u], "observers", (function() {
            return this.gi
        }
        )),
        r(t[u], "record", (function() {
            return this.Lt
        }
        )),
        t[u].ki = function() {
            this.Lt.asyncing = !1,
            this.Ur != function(n, t, r, i) {
                var u;
                n.visible.self = !1,
                n.visible.ignorelist = !1;
                var o = n.visible.document = i.visibility.visible
                  , e = n.visible.intersection = i.intersection.crossed;
                if (n.intersection = null,
                n.center.x = NaN,
                n.center.y = NaN,
                n.center.top = null,
                n.center.ige = null,
                o && e && Le(t)) {
                    var f = n.intersection = i.intersection.view.intersectionRect
                      , c = n.center.x = f.x + f.width / 2
                      , s = n.center.y = f.y + f.height / 2
                      , a = be(t)
                      , h = n.center.top = null === (u = a.elementFromPoint) || void 0 === u ? void 0 : u.call(a, c, s);
                    if (h)
                        if (de(t, h))
                            n.visible.self = !0;
                        else {
                            var v = qu(r, (function(n) {
                                return de(n, h)
                            }
                            ));
                            v && (n.center.ige = v,
                            n.visible.ignorelist = !0)
                        }
                    else
                        n.visible.self = !0,
                        n.visible.ignorelist = !0
                }
                return n.visible.self || n.visible.ignorelist
            }(this.Lt, this.pn, this.yi, this.gi) && (Ct(go, this.Lt.from.change, this.Lt.from.current),
            this.Ur = !this.Ur,
            this.P.emit()),
            Ct(go, this.Lt.from.last, this.Lt.from.current),
            yo(this.Lt.from.current)
        }
        ,
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this),
            ur(this.gi, (function(n) {
                return n.observe(t.pn)
            }
            )),
            this.bn.push((function() {
                return ur(t.gi, (function(n) {
                    return n.disconnect()
                }
                ))
            }
            )),
            this.ki()
        }
        ,
        t
    }(Qe);
    function Ls(n, t, r) {
        n[hn(An, t)] = r
    }
    var Ws = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].yn = function() {
            var t, r = this;
            n[u].yn.call(this),
            this.Ii = this.pn.parentNode;
            var i = function() {
                var n = r.pn.parentNode;
                r.Ii != n && (r.Ii = n,
                t && (t.disconnect(),
                o()),
                r.P.emit())
            }
              , o = function() {
                t = new MutationObserver(i),
                r.Ii ? t.observe(r.Ii, {
                    childList: !0
                }) : t.observe(vr(r.pn), {
                    childList: !0,
                    subtree: !0
                })
            };
            if (Rr())
                o(),
                this.bn.push((function() {
                    t.disconnect(),
                    t = null
                }
                ));
            else {
                if (gs(this.pn)) {
                    var e = iu(vr(this.pn));
                    if (e[Fr] && e[Zr])
                        return void this.bn.push(Af(Jr(this.pn, Fr, i), Jr(this.pn, Zr, i)))
                }
                this.gn.request(i)
            }
        }
        ,
        t
    }(Qe)
      , Cs = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.Hr = {
                x: 0,
                y: 0
            },
            t
        }
        return f(t, n),
        r(t[u], "position", (function() {
            return this.Hr
        }
        )),
        t[u].pi = function() {
            var t = v(Ne(this.pn), 2)
              , r = t[0]
              , i = t[1];
            r === this.Hr.x && i === this.Hr.y || (this.Hr.x = r,
            this.Hr.y = i,
            n[u].pi.call(this))
        }
        ,
        t[u].yn = function() {
            n[u].yn.call(this);
            var t = v(Ne(this.pn), 2)
              , r = t[1];
            this.Hr.x = t[0],
            this.Hr.y = r
        }
        ,
        t
    }(Ms);
    function zs(n, t) {
        return "undefined" != typeof getComputedStyle ? getComputedStyle(n, t) : n.currentStyle
    }
    var Ys = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this);
            var r = zs(this.pn).zIndex
              , i = function() {
                Lo((function(n) {
                    r != n && (r = n,
                    t.P.emit())
                }
                ), zs(t.pn).zIndex)
            };
            if (Rr()) {
                var o = new MutationObserver(i);
                o.observe(this.pn, {
                    attributes: !0
                }),
                this.bn.push((function() {
                    o.disconnect()
                }
                ))
            } else
                this.gn.request(i)
        }
        ,
        t
    }(Qe);
    function Ts(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        var i = n.parentNode
          , u = n.nextSibling;
        i && Y(t, (function(n) {
            return i.insertBefore(dr(vr(i), n), u)
        }
        ))
    }
    function Fs(n, t, r) {
        var i = new Ws
          , u = new Be
          , o = new Cs
          , e = new Ys
          , f = new Cs
          , c = function() {
            var i = io(zs(n).zIndex, (function(n) {
                return "auto" == n ? "1" : parseInt(n) + 1 + ""
            }
            ));
            i !== t.style.zIndex && (jr(t, {
                zIndex: i
            }),
            r.zindex.emit())
        };
        return io((function() {
            var n = u.offsetSize;
            jr(t, Vi(n.width, n.height)),
            r.size.emit()
        }
        ), (function() {
            n.parentNode ? n.parentNode != t.parentNode ? function(n) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                Ct(b, n.after, n, Ts, t)
            }(n, t) : c() : $r(t),
            r.domparent.emit()
        }
        ), (function() {
            if (o.position.x !== f.position.x || o.position.y !== f.position.y) {
                var i = Se(n).reverse()
                  , u = Se(t).reverse()
                  , e = function() {
                    for (var n = [], t = 0; t < arguments.length; t++)
                        n[t] = arguments[t];
                    for (var r = [], i = function(t, i) {
                        var u = n[0][t];
                        if (!bf(n, (function(n) {
                            return B(u, n[t])
                        }
                        )))
                            return "break";
                        r.push(u)
                    }, u = 0, o = Math.min.apply(Math, l([], v(Mt(n, (function(n) {
                        return n.length
                    }
                    ))), !1)); u < o && "break" !== i(u, o); u++)
                        ;
                    return r
                }(i, u)
                  , c = i.slice(e.length)
                  , s = u.slice(e.length)
                  , a = Me(n, c)
                  , h = xe([0, 0], s);
                jr(t, io({}, (function(n) {
                    return a[0] !== h[0] + Ie(t) && (n.left = gi(a[0] - h[0])),
                    a[1] !== h[1] + Oe(t) && (n.top = gi(a[1] - h[1])),
                    n
                }
                ))),
                r.position.emit()
            }
        }
        ), (function(r, s, a) {
            u.observe(n),
            u.hook.on(r),
            i.observe(n),
            i.hook.on(s),
            o.observe(n),
            o.hook.on(a),
            f.observe(t),
            f.hook.on(a),
            e.observe(n),
            e.hook.on(c),
            n && (s(),
            r(),
            a(),
            c())
        }
        )),
        function() {
            Y([i, u, o, e, f], (function(n) {
                return n.disconnect()
            }
            ))
        }
    }
    var Zs = function() {
        function n(n) {
            this.ri = n,
            this.L = {
                domparent: new un,
                position: new un,
                size: new un,
                zindex: new un
            }
        }
        return r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        n[u].dispose = function() {
            var n;
            null === (n = this.Oi) || void 0 === n || n.call(this),
            this.Oi = null
        }
        ,
        n[u].start = function(n) {
            this.dispose(),
            this.Oi = Fs(n, this.ri, this.L)
        }
        ,
        n
    }()
      , As = function(n) {
        function t() {
            return n.call(this) || this
        }
        return f(t, n),
        t[u].yn = function() {
            var t = this;
            n[u].yn.call(this);
            var r = function() {
                return t.P.emit()
            };
            if (Rr()) {
                var i = new MutationObserver(r);
                i.observe(this.pn, {
                    childList: !0
                }),
                this.bn.push((function() {
                    return i.disconnect()
                }
                ))
            } else {
                var o = zt(this.pn.childNodes)
                  , e = function() {
                    var n = zt(t.pn.childNodes);
                    ds(o, n) || (Ct(go, o, n),
                    r())
                };
                if (gs(this.pn) && iu(vr(this.pn))[Ar])
                    return void this.bn.push(Jr(this.pn, Ar, e));
                this.bn.push((function() {
                    return yo(o)
                }
                ), this.gn.request(e).revoke)
            }
        }
        ,
        t
    }(Qe)
      , Js = function() {
        function n(n) {
            this.ri = n,
            this.L = {
                zindex: new un
            }
        }
        return r(n[u], "hooks", (function() {
            return this.L
        }
        )),
        n[u].dispose = function() {
            var n;
            null === (n = this.Oi) || void 0 === n || n.call(this),
            this.Oi = null
        }
        ,
        n[u].start = function(n) {
            this.dispose(),
            this.Oi = function(n, t, r) {
                var i = new As
                  , u = new Ys
                  , o = function() {
                    var i = Lo((function(n) {
                        return "auto" == n ? "1" : parseInt(n) + 1 + ""
                    }
                    ), zs(n).zIndex);
                    i !== t.style.zIndex && (jr(t, {
                        zIndex: i
                    }),
                    r.zindex.emit())
                };
                return n && (wr(n, t),
                o()),
                i.observe(n),
                i.hook.on(o),
                u.observe(n),
                u.hook.on(o),
                function() {
                    Y([i, u], (function(n) {
                        return n.disconnect()
                    }
                    ))
                }
            }(n, this.ri, this.L)
        }
        ,
        n
    }();
    function Rs(n) {
        return _t((function() {
            return n.frameElement
        }
        ))
    }
    var Xs = function(n) {
        function t() {
            return n.call(this, (function(n) {
                return ri(n, (function(n) {
                    return n.value
                }
                ))
            }
            )) || this
        }
        return f(t, n),
        t
    }(ec)
      , _s = function(n) {
        function t(t) {
            var r = n.call(this, Mr(t, gn, {
                id: Ue("ac-container-"),
                style: c(c(c(c(c(c(c({}, zi()), qi(!1)), Qi(!1)), {
                    transformOrigin: "0 0"
                }), Bi(!0)), _i(0, 0)), Hi())
            })) || this;
            return r.ai = t,
            io(r.ri, (function() {
                return r.ji = !0
            }
            ), (function() {
                return r.ji = !1
            }
            ), (function(n, t, r) {
                r(),
                Ls(n, Qr(), t),
                Ls(n, Br(), r)
            }
            )),
            r.Si = new Zs(r.ri),
            r.xi = new Js(r.ri),
            r.Mi = new Ko(!1),
            r.Ur = new Zc,
            r.Ni = [],
            r.L = {
                change: new un,
                size: new un
            },
            r._n = new Ko,
            r.Li = new Ko,
            r.Wi = new Ko,
            r.Wi.hook.on((function(n) {
                r.Ur.clear(),
                Y(Ge(r.Ni), (function(n) {
                    n.hook.clear(),
                    n.disconnect()
                }
                )),
                r.Si.dispose(),
                r.xi.dispose(),
                io((function(n) {
                    var t = new Ns;
                    t.observe(n),
                    r.Ni.push(t)
                }
                ), (function(t) {
                    var i = n.type
                      , u = n.element;
                    switch (t(u),
                    i) {
                    case "followlayer":
                        t(r.ri),
                        r.Si.start(u);
                        break;
                    case "fullcontainer":
                        r.xi.start(u)
                    }
                }
                )),
                function(n, t, r) {
                    var i = new Xs;
                    t.append(i),
                    Y(n, (function(n) {
                        var t = new Ko(n.visible);
                        i.append(t),
                        n.hook.on((function() {
                            t.set(n.visible)
                        }
                        ))
                    }
                    ));
                    for (var u = function(r, i) {
                        var u = new Ns;
                        u.observe(i),
                        n.push(u);
                        var o = new Ko(u.visible);
                        t.append(o),
                        u.hook.on((function() {
                            o.set(u.visible)
                        }
                        ))
                    }, o = r, e = Rs(o); e; e = Rs(o = o.parent))
                        u(0, e)
                }(r.Ni, r.Ur, Kt(t)),
                r.L.change.emit()
            }
            )),
            io(r.ri, (function(n) {
                r.Mi.set(Le(n));
                var i = new ks;
                i.hook.on((function() {
                    r.Mi.set(i.isConnected),
                    i.isConnected || dt(n.id, (function(n) {
                        setTimeout((function() {
                            if (!i.isConnected) {
                                var r = function(n, t) {
                                    return n.getElementById(t)
                                }(t, n);
                                r && (i.hook.clear(),
                                i.disconnect(),
                                $r(r))
                            }
                        }
                        ), 200)
                    }
                    ))
                }
                )),
                i.observe(n);
                var u = new Be;
                u.hook.on((function() {
                    r.L.size.emit(u.offsetSize)
                }
                )),
                u.observe(n)
            }
            )),
            io((function(n) {
                !r.Wi.value && r.Wi.set(n)
            }
            ), (function(n) {
                r.Li.hook.on((function(t) {
                    n({
                        type: "followlayer",
                        element: t
                    })
                }
                )),
                r._n.hook.on((function(t) {
                    n({
                        type: "fullcontainer",
                        element: t
                    })
                }
                ))
            }
            )),
            r
        }
        return f(t, n),
        r(t[u], "hooks", (function() {
            return this.L
        }
        )),
        r(t[u], "connected", (function() {
            return this.Mi
        }
        )),
        r(t[u], "hover", (function() {
            return this.ji
        }
        )),
        r(t[u], "follow", (function() {
            return this.Si
        }
        )),
        r(t[u], "visible", (function() {
            return this.Ur
        }
        )),
        r(t[u], "toms", (function() {
            return this.Ni
        }
        )),
        r(t[u], "config", (function() {
            return this.Wi
        }
        )),
        r(t[u], "main", (function() {
            return this.Li
        }
        )),
        r(t[u], "container", (function() {
            return this._n
        }
        )),
        r(t[u], "enable", (function() {
            var n = function(n) {
                var t = le(n);
                if (t)
                    for (var r = t.shadowRoot; r; r = t.shadowRoot) {
                        var i = r[ve(n)];
                        if (!i)
                            break;
                        t = i
                    }
                return t
            }(this.ai);
            if (n) {
                var t = this.Wi.value;
                switch (t.type) {
                case "followlayer":
                    if (ys(this.ri, n) || ys(t.element, n))
                        return !1;
                    break;
                case "fullcontainer":
                    if (n !== t.element && ys(t.element, n))
                        return !1
                }
            }
            return !0
        }
        )),
        t
    }(ps)
      , Es = function(n) {
        function t(t) {
            var r = n.call(this, t) || this;
            return r.Ci = new Ke(r.element,3,{
                scaleMode: Po.FIXED_NARROW,
                size: {
                    width: 400,
                    height: 500
                }
            }),
            r
        }
        return f(t, n),
        r(t[u], "fc", (function() {
            return this.Ci
        }
        )),
        t
    }(_s)
      , Ps = i("eyIzNjAiOlsiMzYwLmNuIiwiam1mYW56aGEuY24iLCJlbTBidS5jbiJdLCI0Mzk5IjpbIjQzOTkuY29tIiwiNDM5OS5jbiIsIjQzOTkubmV0IiwiODcwLmNvbSIsIjMzODcuY29tIiwiNTA1NDM5OS5jb20iLCIzMzA0Mzk5LmNvbSIsImVkdTQzOTkuY29tIiwiNDM5OWFwaS5uZXQiLCI0Mzk5YXBpLmNvbSIsIjQzOTlrZS5jb20iLCI0Mzk5cGsuY29tIiwiNDM5OWRtdy5jb20iLCI0Mzk5ZXIuY29tIiwiNDM5OWVuLmNvbSIsIjQzOTl5b3VwYWkuY29tIiwiNDM5OXNqLmNvbSIsIml3YW40Mzk5LmNvbSIsImFpd2FuNDM5OS5jb20iLCIzMzA0Mzk5Lm5ldCIsImltZzQzOTkuY29tIiwiNDM5OXN3Zi5jb20iLCIzODM5LmNvbSIsImhhaXppLmNvbSIsIjQzOTlkb2MuY29tIiwienh3eW91eGkuY29tIl0sImRlYnVnIjpbImEuY29tIl0sImQiOlsiMTIxMjMyMS5jb20iXSwieWFuIjpbInNreWdhbWVjZW50ZXIuY29tIl0sImxvY2FsaG9zdCI6WyJsb2NhbGhvc3QiLCIxMjcuMC4wLjEiXSwieWFuZGV4IjpbInlhbmRleC5jb20iLCJ5YW5kZXgucnUiLCJ5YW5kZXgubmV0IiwieWFuZGV4LnRtIiwieWFuZGV4LmF6IiwieWFuZGV4LmJ5Il0sImdhbWVwaXgiOlsiZ2FtZXBpeC5jb20iXSwiaWRldmdhbWVzIjpbImlkZXZnYW1lcy5jby51ayIsIm15LWdhLm1lIl0sIml0Y2giOlsiaXRjaC5pbyIsIml0Y2guem9uZSJdLCJnYW1lbW9uZXRpemUiOlsiZ2FtZW1vbmV0aXplLmNvbSIsImdhbWVtb25ldGl6ZS5jbyJdLCJnYW1lZGlzdHJpYnV0aW9uIjpbImdhbWVkaXN0cmlidXRpb24uY29tIl0sImdhbWVhcnRlciI6WyJnYW1lYXJ0ZXIuY29tIl0sImNyYXp5Z2FtZXMiOlsiY3JhenlnYW1lcy5jb20iLCJjcmF6eWdhbWVzLmZyIiwiMTAwMWp1ZWdvcy5jb20iLCJvbmxpbmVnYW1lLmNvLmlkIiwic3BlZWxzcGVsbGV0amVzLm5sIiwiY3JhenlnYW1lcy5jb20uYnIiLCJjcmF6eWdhbWVzLnJ1IiwiY3JhenlnYW1lcy5jb20udWEiLCJjcmF6eWdhbWVzLm5vIiwiY3JhenlnYW1lcy5ybyIsImNyYXp5Z2FtZXMuZmkiLCJjcmF6eWdhbWVzLnNlIl0sIjdrN2siOlsiN2s3ay5jb20iLCI3azdraW1nLmNuIl19")
      , Vs = function(n) {
        function t() {
            var t = n.call(this) || this;
            return t.zi = new ss,
            er(t.zi.builder.alias, Ps),
            t
        }
        return f(t, n),
        r(t[u], "website", (function() {
            return this.zi
        }
        )),
        r(t[u], "dom", (function() {
            return this.Yi
        }
        )),
        t[u].adopted = function(t) {
            var r = this;
            n[u].adopted.call(this, t);
            var i = Ds(t)
              , o = Hs(t)
              , e = Qs(t);
            dt(xc(e, wu), (function(n) {
                r.zi.refresh(Kt(n)),
                io(new Es(n), (function(t) {
                    r.Yi = t,
                    i.visible.append(t.visible),
                    io(t.element, (function(r) {
                        io(t.fc, (function(t) {
                            io(t.inner, (function(t) {
                                ns(o.adub, t.at(0), t.at(1), t.at(2), function(n) {
                                    return nr(Kt(n))
                                }(n), !1)
                            }
                            )),
                            Nc(e, Hu).hooks.change.on((function(n) {
                                var r = n.last;
                                t.render({
                                    scaleMode: r.scaleMode,
                                    size: {
                                        width: r.width,
                                        height: r.height
                                    }
                                })
                            }
                            ))
                        }
                        )),
                        Sc(e, gu, r),
                        function(n, t) {
                            for (var r = [], i = 2; i < arguments.length; i++)
                                r[i - 2] = arguments[i];
                            var u = l([], v(r), !1);
                            io([], (function(r) {
                                io((function(n) {
                                    dt(k(n) ? Lo((function(t) {
                                        return t ? vs(t, n) : null
                                    }
                                    ), t) : n, (function(n) {
                                        n && !Qu(u, n) && r.push(io(c({}, Gi(!1)), (function(t) {
                                            var r = Wf(t, (function(t, r) {
                                                return n.style[r]
                                            }
                                            ));
                                            return jr(n, t),
                                            u.push(n),
                                            function() {
                                                jr(n, r)
                                            }
                                        }
                                        )))
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    io(Nc(n, gu), (function(n) {
                                        return Y(n, (function(n) {
                                            return t(n.value)
                                        }
                                        ))
                                    }
                                    ), (function(n, t) {
                                        t(n.records),
                                        r.push(co(n.hooks.change, (function(n) {
                                            return t(n.records)
                                        }
                                        )))
                                    }
                                    ))
                                }
                                )),
                                Nc(n, ju).assert((function(n) {
                                    return 3 == n.current
                                }
                                ), (function() {
                                    yo(u),
                                    xc(n, Tu) < 1 && ru(r)
                                }
                                ))
                            }
                            ))
                        }(e, n, r),
                        function(n, t) {
                            io((function(t) {
                                Y(t, (function(t) {
                                    ff(n, t.value, Zf)
                                }
                                ))
                            }
                            ), (function(n) {
                                n(t.records),
                                t.hooks.change.on((function(t) {
                                    n(t.records)
                                }
                                ))
                            }
                            ))
                        }(r, Nc(e, bu))
                    }
                    )),
                    bs(n, t.main, Nc(e, yu)),
                    bs(n, t.container, Nc(e, pu))
                }
                ))
            }
            ))
        }
        ,
        t
    }(Jo);
    function Ds(n) {
        return n.get(Vc)
    }
    function Hs(n) {
        return n.get(Dc)
    }
    function Gs(n) {
        return function(n) {
            return Ds(n).midgame
        }(n).reward
    }
    function qs(n) {
        return n.metas
    }
    function Qs(n) {
        return qs(Ds(n))
    }
    function Bs(n) {
        return Ds(n).pipeline
    }
    function Us(n) {
        return Bs(n).local
    }
    function $s(n) {
        return n.website
    }
    function Ks(n) {
        return n.accessibleValids
    }
    function na(n) {
        return n.valids
    }
    function ta(n) {
        var t = function(n) {
            return n.get(Vs)
        }(n);
        return t ? $s(t) : null
    }
    var ra = "4.7.0"
      , ia = function(n) {
        function t() {
            var t = n.call(this) || this;
            t.Y = [];
            var r = t.create(Vc);
            return t.create(Dc),
            function(n, t, r, i) {
                io(t.push, (function(r) {
                    t.push = function() {
                        for (var i = [], u = 0; u < arguments.length; u++)
                            i[u] = arguments[u];
                        var o = w(r, t, i);
                        return Y(i, (function(r) {
                            r.from !== n && n["for"](r.name).append(c(c({}, r), {
                                from: t
                            }))
                        }
                        )),
                        o
                    }
                }
                )),
                r && Y(t, (function(t) {
                    n["for"](t.name).append(t)
                }
                ));
                var u = function(r, i) {
                    var u = Ku(i, (function(n) {
                        return n.from !== t
                    }
                    ));
                    if (u.length > 0) {
                        var o = Mt(u, (function(t) {
                            return c(c({}, t), {
                                name: r,
                                from: n
                            })
                        }
                        ));
                        w(t.push, t, o)
                    }
                };
                io((function(n) {
                    n.hooks.change.on((function(t) {
                        return u(n.options.name, t.records)
                    }
                    ))
                }
                ), (function(t) {
                    i && n.forEach((function(n) {
                        return u(n.options.name, n.records)
                    }
                    )),
                    n.forEach((function(n) {
                        return t(n)
                    }
                    )),
                    n.hooks.create.on((function(n) {
                        return t(n)
                    }
                    ))
                }
                ))
            }(qs(r).owner, t.Y, !1, !0),
            t
        }
        return f(t, n),
        r(t[u], $n, (function() {
            return ra
        }
        )),
        r(t[u], "data", (function() {
            return this.Y
        }
        )),
        t
    }($u)
      , ua = i("eyJuIjoibmF0aXZlQXBwTWFuYWdlciIsInRhZyI6InNjcmlwdCIsImdyZSI6ImdfcmVtb3RlX2VuYWJsZSIsImlkIjoiaW5mby5kYXRlIiwiZG0iOiJkb21haW4iLCJydSI6WyJkYXRhIixbWyJ2IiwicyJdLDEwMywibyIsImQiXSxbInciLCJpIiwibiJdXSwicHJvdG8iOiJwcm90b2NvbCIsInNlY3VyZSI6Imh0dHBzOiIsImVtcyI6ImNhbnZhcyxvYmplY3QsZW1iZWQiLCJwYXRoIjoidjIvIn0=")
      , oa = ua.n
      , ea = ua.path
      , fa = ua.dm
      , ca = ua.gre
      , sa = ua.tag
      , aa = ua.secure
      , ha = ua.id
      , va = ua.ru
      , la = ua.ems;
    function da(n, t, r) {
        return function(n, t, r, i) {
            var u = x(n, r, i);
            return u.name = t,
            u
        }(Error, n, t, r)
    }
    function wa(n) {
        return ut(typeof atob) ? atob(n) : function(n) {
            var t = function() {
                for (var n = [[65, 90], [97, 122], [48, 57]], t = "", r = 0; r < n.length; r++)
                    for (var i = n[r], u = i[0]; u <= i[1]; u++)
                        t += String.fromCharCode(u);
                return t + "+/="
            }()
              , r = String(n).replace(/[=]+$/, "");
            if (r.length % 4 == 1)
                throw da("InvalidCharacterError", "'atob' failed: The string to be decoded is not correctly encoded.");
            for (var i = "", u = 0, o = void 0, e = 0, f = void 0, c = void 0; f = r.charAt(e++); ~c && (o = u % 4 ? 64 * o + c : c,
            u++ % 4) ? i += String.fromCharCode(255 & o >> (-2 * u & 6)) : 0)
                c = t.indexOf(f);
            return i
        }(n)
    }
    function ma(n, t) {
        if (ut(typeof JSON)) {
            var r = JSON
              , i = r.parse;
            if (i)
                return L(i, r, n, t)
        }
        return Lo(St(Nt(Pt(n))))
    }
    function ba(n, t) {
        return Ct(St.apply(void 0, l([], v(Lt("new c", t, "c")), !1)), n, t)
    }
    var pa, ya = 0;
    function ga(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        switch (ya || (ya = Ut(jt(Date, []), Date) ? 1 : 2),
        ya) {
        case 1:
            return jt(n, t);
        case 2:
            return ba(n, t)
        }
    }
    function ka(n) {
        var t = n.constructor;
        try {
            if (ga(t, "return true")) {
                var r = n.toString()
                  , i = r.indexOf("(")
                  , u = r.indexOf(")", i)
                  , o = r.slice(i + 1, u)
                  , e = Pt(r.slice(u + 1)).slice(1, -1);
                return ga.apply(void 0, l(l([t], v(o.split(",")), !1), [e], !1))
            }
        } catch (Sn) {
            return n
        }
    }
    function Ia(n, t, r) {
        var i;
        return er(n, ((i = {})[hn(An, Wn)] = t,
        i[hn(An, Sn)] = r,
        i)),
        n
    }
    function Oa(n, t) {
        er(n, {
            src: t,
            async: !0
        })
    }
    var ja, Sa = [];
    function xa() {
        pa || (pa = eo((function() {
            pa = null,
            at(Sa, (function(n) {
                n.shift().apply(void 0, l([], v(n), !1))
            }
            ))
        }
        )))
    }
    function Ma(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        Sa.push(l([n], v(t), !1)),
        xa()
    }
    function Na() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        var r = j(n[0]) ? n : n[0]
          , i = "".constructor;
        return w(i.fromCharCode, i, r)
    }
    function La() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Wt(hn, Mt(n, (function(n) {
            return "number" == typeof n ? Na(n) : lo(n) ? La.apply(void 0, l([], v(n), !1)) : n
        }
        )))
    }
    function Wa(n) {
        return _t((function() {
            return ma(wa(function(n, t) {
                if (n.namedItem)
                    return n.namedItem(t);
                for (var r = 0, i = n.length; r < i; r++) {
                    var u = n[r];
                    if (u.getAttribute(dn) === t)
                        return u
                }
                return null
            }(ws(n, Yn), hn(ln, ":v4")).content))
        }
        ))
    }
    function Ca(n, t, r) {
        Oa(n, t),
        function(n) {
            return !!ht(n, Mn) && (yr(n, Mn, "high"),
            !0)
        }(n) || function(n, t) {
            var r = Ia({}, ni, ni);
            Ma(ka(Ur), n, t, sa, r)
        }(r, t)
    }
    function za(n, t) {
        return new Promise((function(r, i) {
            var u = xr(n, sa);
            k(t) ? Oa(u, t) : Sr(u, t),
            Ia(u, r, i),
            hr(tu(n), u)
        }
        ))
    }
    function Ya(n, t, r) {
        return lt(n, (function(n) {
            return !!n
        }
        ), t, r)
    }
    function Ta(n) {
        var t = n.pathname;
        return t.substring(0, t.lastIndexOf("/") + 1)
    }
    function Fa(n, t) {
        io(n.loading(), (function(n) {
            Sc(t, ju, 1),
            Sc(t, Yu, !0),
            io(n.hooks, (function(r) {
                r.start.once((function() {
                    1 == xc(t, ju) && Sc(t, ju, 2)
                }
                )),
                r.closing.once((function(n) {
                    Cc(t, Fu, n)
                }
                )),
                r["finally"].once((function(r) {
                    xc(t, ju) < 3 && (Sc(t, ju, 3),
                    Sc(t, Yu, !1),
                    Za(t, c({
                        ok: r.ok
                    }, zc(n, r.isTrusted))))
                }
                ))
            }
            )),
            n.track()
        }
        ))
    }
    function Za(n, t) {
        xc(n, Yu) || 1 != xc(n, Tu) || (n.scan(Zu, (function(n) {
            n(null != t ? t : {
                ok: !1,
                isTrusted: !1,
                hadPrevented: !1
            })
        }
        )),
        Sc(n, Tu, 2))
    }
    function Aa(n) {
        ja = n
    }
    function Ja() {
        return Qs(ja)
    }
    function Ra() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return jc.apply(void 0, l([Ja()], v(n), !1))
    }
    function Xa(n, t) {
        return Sc(Ja(), n, t)
    }
    function _a(n) {
        return xc(Ja(), n)
    }
    function Ea(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return Wc.apply(void 0, l([Ja(), n], v(t), !1))
    }
    var Pa = Bt(Vn, "callback")
      , Va = Bt(bn, "security", "policy")
      , Da = Bt(Va, "report", "only");
    function Ha(n, t) {
        n.postMessage(t)
    }
    function Ga(n, t) {
        Ha(n, Qa(Vn, t))
    }
    function qa(n, t) {
        Ha(n, Qa(Pa, t))
    }
    function Qa(n, t) {
        return {
            type: n,
            data: t
        }
    }
    function Ba(n, t) {
        return new Promise((function(r, i) {
            Lo((function(i) {
                var u;
                if (xc(n, Au) && function() {
                    var n;
                    return S(null === (n = navigator.serviceWorker) || void 0 === n ? void 0 : n.register)
                }()) {
                    var o = xc(n, Ju);
                    if (o)
                        return Sc(n, Ru, 1),
                        void function(n, t, r) {
                            return new Promise((function(i, u) {
                                var o = {
                                    ok: !1,
                                    rc: !1
                                }
                                  , e = function() {
                                    i(o)
                                }
                                  , f = navigator.serviceWorker;
                                Lo((function(i) {
                                    Lo((function(n) {
                                        lt(f.controller, (function(n) {
                                            return n && n.scriptURL != t
                                        }
                                        ), (function(n) {
                                            u("skip")
                                        }
                                        ), (function() {
                                            f.register(t).then((function(t) {
                                                var r = t.active || t.installing || t.waiting;
                                                o.ok = !0,
                                                Lo((function(n) {
                                                    n() || ff(r, "statechange", n)
                                                }
                                                ), (function() {
                                                    return r.state == fn && (n(r),
                                                    !0)
                                                }
                                                ))
                                            }
                                            ), (function(n) {
                                                e()
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ), (function(t) {
                                        if (r && ls(n))
                                            return ff(f, zn, (function(n) {
                                                var r = n.data;
                                                switch (null == r ? void 0 : r.type) {
                                                case Vn:
                                                    var u = as(r.data);
                                                    $r(ls(u)),
                                                    qa(t, function(n) {
                                                        var t, r = n.documentElement;
                                                        return "".concat(hs(n.doctype)).concat(null !== (t = r.outerHTML) && void 0 !== t ? t : hs(r))
                                                    }(u));
                                                    break;
                                                case Pa:
                                                    r.data == Vn && i.reload()
                                                }
                                            }
                                            )),
                                            void Ga(t, i.href);
                                        o.rc = !0,
                                        e()
                                    }
                                    ))
                                }
                                ), n.location)
                            }
                            ))
                        }(t, o, null !== (u = xc(n, Xu)) && void 0 !== u ? u : xc(n, Lu)()).then((function(t) {
                            Sc(n, Ru, t.ok ? 2 : 0),
                            r(t)
                        }
                        ), i)
                }
                i(Qt(Qn, "unabled"))
            }
            ), (function(t) {
                Sc(n, Ru, 0),
                i(t)
            }
            ))
        }
        ))
    }
    function Ua(n) {
        console.warn(n),
        function(n) {
            return "localhost" === n || /^127(\.\d+){3}$/.test(n)
        }(location.hostname) && alert(n)
    }
    function $a(n) {
        Ua("".concat(n, " should be called in app loading."))
    }
    function Ka(n) {
        th() ? Xa(ku, n) : $a(Rn)
    }
    function nh(n) {
        th() ? Xa(Iu, n) : $a(Ln)
    }
    function th() {
        return function(n, t) {
            return Lc(Ja(), n, t)
        }(Tu, 0)
    }
    function rh() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return Lo((function(t) {
            var r;
            if (t) {
                var i = na(t);
                if (i.length > 0)
                    return (r = i[0][fa]).is.apply(r, l([], v(n), !1))
            }
            return !1
        }
        ), ta(ja))
    }
    function ih(n) {
        return _t(_a(Pu), n)
    }
    function uh() {
        Ea(Eu)
    }
    function oh() {
        return n = ju,
        t = function(n) {
            return n >= 2
        }
        ,
        function(n, t, r) {
            return n.once(t, r)
        }(Ja(), n, t);
        var n, t
    }
    function eh(n) {
        return new Promise((function(t, r) {
            if (!th()) {
                var i = "This function can only be called once.";
                return Ua(i),
                void r(i)
            }
            S(n) && Xa(Fu, n),
            Xa(Zu, t),
            Xa(Tu, 1),
            Za(Qs(ja))
        }
        ))
    }
    function fh() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        if (n.length > 0) {
            var r = n[0]
              , i = Us(ja);
            j(r) ? i.go(r) : i.set({
                name: r,
                options: n[1]
            })
        }
    }
    function ch() {
        return Gs(ja).enabled
    }
    function sh() {
        return Gs(ja).show()
    }
    function ah() {
        ja.locate(Vs, (function(n) {
            var t = pt(Ks($s(n)))
              , r = null == t ? void 0 : t.window;
            r && Et(r, "open", t.parsed.origin, tt)
        }
        ))
    }
    function hh() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return ri(n, (function(n) {
            return n()
        }
        ))
    }
    function vh(n) {
        return function() {
            return hh.apply(void 0, l([], v(n), !1))
        }
    }
    function lh(n) {
        return function(n, t) {
            var r = [];
            return n.records.length > 0 && (r.push(n.current),
            t.records.length > 0 && r.push(t.current)),
            dh.apply(void 0, l([], v(r), !1))
        }(Nc(n, ha), Nc(n, mu))
    }
    function dh() {
        for (var n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
        return bf(n, (function(n) {
            var t = Ye(n);
            return !!T(t) || No(t) > ze(10)
        }
        ))
    }
    function wh(n) {
        return function(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            return ri(n, (function(n) {
                var r;
                return (r = n[fa]).is.apply(r, l([], v(t), !1))
            }
            ))
        }(n, "debug")
    }
    function mh(n) {
        return function() {
            var n, t, r = (n = ca,
            (t = ot()) ? rt(t, n) : undefined);
            return !!O(r) && r
        }() || wh(n)
    }
    function bh(n, t) {
        return function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return vh(n)
        }(br(mh, na(t)), br(lh, n))
    }
    function ph(n, t, r) {
        0 === xc(n, Wu) && (xc(n, Lu)() ? (Sc(n, Yu, !0),
        Sc(n, Wu, 1),
        io((function() {
            return ls(t)
        }
        ), (function(i) {
            io((function() {
                if (i())
                    return Sc(n, Wu, 0),
                    void r();
                xa();
                var u = xr(t, sa);
                Ca(u, La(aa, "//", Ht([Ht(Mt(va, (function(n) {
                    return La(n)
                }
                )), "."), ea], "/")), t),
                io((function(t) {
                    $r(u),
                    Sc(n, Wu, t)
                }
                ), (function(n) {
                    Ia(u, (function() {
                        return n(2)
                    }
                    ), (function() {
                        n(0),
                        r()
                    }
                    ))
                }
                )),
                Ma(ka(hr), function(n) {
                    var t, r;
                    return null !== (t = n.head) && void 0 !== t ? t : null === (r = nu(n, "head")) || void 0 === r ? void 0 : r[0]
                }(t), u)
            }
            ), (function(t) {
                Lc(n, Ru, 1) ? Nc(n, Ru).hooks.change.once(t) : t()
            }
            ))
        }
        ))) : r())
    }
    function yh(n, t, r) {
        return m(Object.defineProperty, Object, gh, n, t, r)
    }
    function gh(n, t, r) {
        if (ht(r, sc)) {
            if (ht(r, Nn) || ht(r, Dn))
                throw M("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
            return yr(n, t, r.value),
            n
        }
        return ht(r, Nn) && kh("getter", rt(r, Nn)),
        ht(r, Dn) && kh("setter", rt(r, Dn)),
        n
    }
    function kh(n, t) {
        if (!B(t, undefined)) {
            if (!S(t))
                throw M("".concat(kr(n), " must be a function: ").concat(t));
            throw M("no shim for ".concat(n))
        }
    }
    function Ih(n, t) {
        for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i];
        return _t(Wt, n[t], r)
    }
    function Oh() {
        io({}, (function(n) {
            Xa(Nu, n);
            var t = function(t, r) {
                return function(n, t, r) {
                    S(r) ? n[t] = r : function(n, t) {
                        delete n[t]
                    }(n, t)
                }(n, t, r)
            };
            t(qt(Tn, Dn), Xa),
            t(qt(Tn, Nn), _a),
            t(Wn, ih),
            t("is", rh),
            t(Zn, uh),
            t(_n, oh),
            t(qt(Cn, Rn), Ka),
            t(qt(Cn, Ln), nh),
            t("launch", eh),
            t(En, sh),
            t(qt(En, On), ch),
            t("go", fh),
            function(n, t, r, i) {
                yh(n, t, c(c({}, i), {
                    value: r
                }))
            }(ja, wn, (function(t) {
                for (var r = [], i = 1; i < arguments.length; i++)
                    r[i - 1] = arguments[i];
                return Ct(Ih, n, t, r)
            }
            ))
        }
        ))
    }
    var jh = !1;
    function Sh(n) {
        if (!jh) {
            jh = !0;
            var t = ot();
            if (function(n) {
                void 0 === n && (n = ot()),
                et() ? Zt(Promise) : n.Promise = Rt
            }(t),
            $t())
                null == n || n(t);
            else {
                var r = La(oa);
                dt(t[r], (function(n) {
                    Aa(n),
                    _t(Et, ja, wn, qt(Tn, Dn), Mu, ra)
                }
                ), (function() {
                    Aa(new ia),
                    t[r] = ja,
                    Xa(xu, ra),
                    Xa(Eu, ah),
                    dt(tr(), (function(n) {
                        var t = v(n, 2)[1];
                        Ya(Wa(t), (function(n) {
                            return Ra(n)
                        }
                        )),
                        Xa(wu, t),
                        Xa(yu, la),
                        Xa(Pu, zo(za, t)),
                        Ya(function(n) {
                            return n.lastModified
                        }(t), (function(n) {
                            return Xa(mu, n)
                        }
                        ));
                        var r = $s(ja.create(Vs));
                        Xa(Lu, bh(Ja(), r)),
                        Xa(du, Ta(Ks(r)[0].parsed)),
                        Xa(_u, br(Ba, Ja(), t)),
                        Xa(Cu, br(ph, Ja(), t, br(Fa, Hs(ja), Ja()))),
                        Ya(function(n) {
                            var t = n.currentScript;
                            return null == t ? void 0 : t.src
                        }(t), (function(n) {
                            Xa(Su, n),
                            en && Xa(Ju, n)
                        }
                        )),
                        Xa(Vu, (function() {
                            var n, t;
                            null === (t = null === (n = Ea(_u)) || void 0 === n ? void 0 : n["catch"]) || void 0 === t || t.call(n, (function(n) {}
                            )),
                            Ea(Cu)
                        }
                        ))
                    }
                    )),
                    Ra("{{metas}}", i("eyJpbmZvLmlkIjoiQmxlYWNoVlNOYXJ1dG9fM181IiwiaW5mby5kZXZlbG9wZXIiOiJkIiwiaW5mby5uYW1lIjoiQmxlYWNoVnNOYXJ1dG8iLCJpbmZvLnZlcnNpb24iOiIzLjUiLCJlbGVtZW50LmNvbnRhaW5lciI6IiNjb250YWluZXIiLCJhcHAuc2l6ZSI6eyJtYWluLnN3ZiI6MTAxNDk4MjE3fX0=")),
                    on.emit(ja),
                    Oh(),
                    function(n) {
                        for (var t = [], r = 1; r < arguments.length; r++)
                            t[r - 1] = arguments[r];
                        Cc.apply(void 0, l([Ja(), n], v(t), !1))
                    }(Vu)
                }
                ))
            }
        }
    }
    function xh(n, t, r) {
        return a(this, void 0, void 0, (function() {
            var i;
            return h(this, (function(u) {
                switch (u.label) {
                case 0:
                    return (i = new URL(t instanceof Request ? t.url : t)).search = "",
                    [4, n.put(i, r)];
                case 1:
                    return u.sent(),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function Mh(n, t) {
        return a(this, void 0, void 0, (function() {
            var r, i = this;
            return h(this, (function(u) {
                switch (u.label) {
                case 0:
                    return [4, n.match(t, {
                        ignoreSearch: !0
                    })];
                case 1:
                    return (r = u.sent()) ? [3, 3] : [4, fetch(t).then((function(r) {
                        return a(i, void 0, void 0, (function() {
                            return h(this, (function(i) {
                                switch (i.label) {
                                case 0:
                                    return [4, xh(n, t, r.clone())];
                                case 1:
                                    return i.sent(),
                                    [2, r]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))];
                case 2:
                    r = u.sent(),
                    u.label = 3;
                case 3:
                    return [2, r]
                }
            }
            ))
        }
        ))
    }
    var Nh = {};
    function Lh(n) {
        var t, r = this, i = Ta(new URL(n.registration.scope));
        ff(n, "install", (function() {
            caches["delete"](i),
            n.skipWaiting()
        }
        ));
        var u = function() {
            return a(r, void 0, void 0, (function() {
                return h(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return null == t ? [3, 1] : [3, 3];
                    case 1:
                        return [4, caches.open(i)];
                    case 2:
                        t = n.sent(),
                        n.label = 3;
                    case 3:
                        return [2, t]
                    }
                }
                ))
            }
            ))
        };
        ff(n, zn, (function(n) {
            return a(r, void 0, void 0, (function() {
                var r, i, o, e, f, c, s, d, w, m = this;
                return h(this, (function(b) {
                    switch (b.label) {
                    case 0:
                        switch (r = n.source,
                        o = function() {
                            qa(r, Vn)
                        }
                        ,
                        null == (i = n.data) ? void 0 : i.type) {
                        case "eval":
                            return [3, 1];
                        case Vn:
                            return [3, 2];
                        case Pa:
                            return [3, 5]
                        }
                        return [3, 7];
                    case 1:
                        return _t(Lo(ga, Function, "send", i.data), zo(Ha, r)),
                        [3, 7];
                    case 2:
                        return Nh[r.id] = f = {
                            i: e = i.data,
                            hs: []
                        },
                        s = Mh,
                        [4, u()];
                    case 3:
                        return [4, s.apply(void 0, [b.sent(), e])];
                    case 4:
                        return Lo((function(n) {
                            return a(m, void 0, void 0, (function() {
                                var t;
                                return h(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return n.has(Vn) ? (o(),
                                        [3, 3]) : [3, 1];
                                    case 1:
                                        return n.forEach((function(n, t) {
                                            t != Va && t != Da && f.hs.push([t, n])
                                        }
                                        )),
                                        [4, c.clone().text()];
                                    case 2:
                                        t = i.sent(),
                                        Ga(r, t),
                                        i.label = 3;
                                    case 3:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ), (c = b.sent()).headers),
                        [3, 7];
                    case 5:
                        return d = Nh[r.id],
                        w = new Response(i.data,{
                            headers: l(l([], v(d.hs), !1), [[Vn, "true"]], !1)
                        }),
                        [4, xh(t, d.i, w)];
                    case 6:
                        return b.sent(),
                        o(),
                        [3, 7];
                    case 7:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        )),
        ff(n, xn, (function(t) {
            var i = t.request;
            new URL(i.url).origin == n.location.origin && t.respondWith(Lo((function() {
                return a(r, void 0, void 0, (function() {
                    var n, t;
                    return h(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return t = Mh,
                            [4, u()];
                        case 1:
                            return [4, t.apply(void 0, [r.sent(), i])];
                        case 2:
                            return [2, (n = r.sent()).body.locked ? n.clone() : n]
                        }
                    }
                    ))
                }
                ))
            }
            )))
        }
        ))
    }
    en = !0,
    Sh(Lh),
    typeof ja != typeof undefined && ja.call("ready").then((function() {
        var n, t = function(n, t, r) {
            return Object.defineProperty(n, t, r)
        };
        try {
            t({}, "any", {
                value: 0
            })
        } catch (Sn) {
            n = function() {
                if ("undefined" != typeof document) {
                    var n = document.documentMode;
                    if ("number" == typeof n)
                        return "ie" + n
                }
                return "unknow"
            }(),
            t = function(t, r, i) {
                console.log(n, t, r, i)
            }
        }
        var r = function() {
            return r = Object.assign || function(n) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var u in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, u) && (n[u] = t[u]);
                return n
            }
            ,
            r.apply(this, arguments)
        };
        function i(n, t) {
            var r = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (r[i] = n[i]);
            if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
                var u = 0;
                for (i = Object.getOwnPropertySymbols(n); u < i.length; u++)
                    t.indexOf(i[u]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[u]) && (r[i[u]] = n[i[u]])
            }
            return r
        }
        function u(n, t, r) {
            if (r || 2 === arguments.length)
                for (var i, u = 0, o = t.length; u < o; u++)
                    !i && u in t || (i || (i = Array.prototype.slice.call(t, 0, u)),
                    i[u] = t[u]);
            return n.concat(i || Array.prototype.slice.call(t))
        }
        var o, e = "auto", f = "hidden", c = "none", s = "100%", a = "object", h = "undefined";
        function v(n, t) {
            return function(n) {
                return typeof n
            }(n) === t
        }
        function l(n) {
            return v(n, "string")
        }
        function d(n) {
            return v(n, "number")
        }
        function w(n) {
            return v(n, "function")
        }
        function m(n) {
            return function(n, t, r) {
                return new n(t,r)
            }(TypeError, n)
        }
        function b(n) {
            if (!w(n))
                throw m(n + " is not a function")
        }
        function p(n, t, r) {
            return n.apply(t, r)
        }
        function y(n, t) {
            for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
            return p(n, t, r)
        }
        function g(n, t, r) {
            for (var i = [], u = 3; u < arguments.length; u++)
                i[u - 3] = arguments[u];
            return p(n || r, t, i)
        }
        function k(n, t, r) {
            for (var i, u = [], o = 3; o < arguments.length; o++)
                u[o - 3] = arguments[o];
            return n ? i = n : (i = r,
            u.unshift(t)),
            p(i, t, u)
        }
        function I(n, t) {
            return g(Object.hasOwn, Object, O, n, t)
        }
        function O(n, t) {
            return y(Object.prototype.hasOwnProperty, n, t)
        }
        function j(n, t) {
            b(t);
            for (var r = 0, i = n.length; r < i; r++)
                I(n, r) && t(n[r], r, n)
        }
        function S(n, t) {
            return k(n.forEach, n, j, t)
        }
        function x(n, t) {
            return n === t
        }
        function M(n) {
            return function(n) {
                return x(n, null)
            }(n) || function(n) {
                return x(n, undefined)
            }(n)
        }
        function N(n) {
            if (M(n))
                throw m("Cannot convert undefined or null to object")
        }
        function L(n, t) {
            return t < 0 && (t += n.length),
            n[t]
        }
        function W(n, t) {
            return k(n.at, n, L, t)
        }
        function C(n) {
            return !!function(n, t) {
                try {
                    return n(t)
                } catch (r) {}
                return undefined
            }(z, n)
        }
        function z(n) {
            return n.apply
        }
        function Y(n) {
            return n.constructor
        }
        function T(n, t) {
            for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
            return E(k, n.bind, n, F, u([t], r, !0))
        }
        function F(n, t) {
            for (var r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
            return function() {
                for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                return p(n, t, u(u([], r, !0), i, !0))
            }
        }
        function Z(n, t) {
            return new (T.apply(void 0, u([n, void 0], t, !1)))
        }
        function A() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return Z(Y(Z), n)
        }
        function J(n, t) {
            var r = [];
            return r.length = n.length,
            j(n, (function(i, u) {
                r[u] = t(i, u, n)
            }
            )),
            r
        }
        function R(n, t) {
            return k(n.map, n, J, t)
        }
        function X(n) {
            return "return " + n
        }
        function _(n, t) {
            switch (t.length) {
            case 0:
                return n();
            case 1:
                return n(t[0]);
            case 2:
                return n(t[0], t[1]);
            case 3:
                return n(t[0], t[1], t[2]);
            case 4:
                return n(t[0], t[1], t[2], t[3]);
            case 5:
                return n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
                return n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
                return n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            case 8:
                return n(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]);
            default:
                return C(n) ? p(n, undefined, t) : p(A.apply(void 0, function(n, t) {
                    for (var r = [], i = 2; i < arguments.length; i++)
                        r[i - 2] = arguments[i];
                    var u = R(t, (function(n, t) {
                        return "p" + t
                    }
                    ));
                    return u.push(X(n + "(" + u.join(",") + ");")),
                    u.unshift.apply(u, r),
                    u
                }("f", t)), undefined, t)
            }
        }
        function E(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            return _(n, t.length > 0 ? t.slice(0, -1).concat(W(t, -1)) : [])
        }
        function P(n) {
            return g(Object.keys, Object, V, n)
        }
        function V(n) {
            N(n);
            var t = [];
            for (var r in n)
                I(n, r) && t.push(r);
            if (!{
                toString: null
            }.propertyIsEnumerable("toString"))
                for (var i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], u = 0, o = i.length; u < o; u++)
                    I(n, i[u]) && t.push(i[u]);
            return t
        }
        function D(n) {
            return g(Object.entries, Object, H, n)
        }
        function H(n) {
            return R(P(n), (function(t) {
                return [t, n[t]]
            }
            ))
        }
        function G(n, t) {
            S(D(n), (function(r) {
                return t(r[1], r[0], n)
            }
            ))
        }
        function q(n) {
            return Object(n)
        }
        function Q() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return B(n)
        }
        function B(n) {
            return E(g, Object.assign, Object, U, n)
        }
        function U() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            var r = n[0]
              , i = n.slice(1);
            N(r);
            var u = q(r);
            return S(i, (function(n) {
                var t;
                M(n) || (G(n, (function(n, t) {
                    u[t] = n
                }
                )),
                null === (t = Object.getOwnPropertySymbols) || void 0 === t || t.call(Object, n).forEach((function(t) {
                    u[t] = n[t]
                }
                )))
            }
            )),
            u
        }
        function $() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            var r = "";
            return p(r.concat, r, n)
        }
        function K(n, t, r) {
            return null != r || (r = n.length),
            r > n.length && (r = n.length),
            n.substring(r - t.length, r) === t
        }
        function nn(n) {
            return n.toUpperCase()
        }
        function tn(n) {
            return n.length > 0 ? nn(n.charAt(0)) + n.slice(1) : n
        }
        function rn(n, t) {
            return n.join(t)
        }
        function un() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return rn(n, ".")
        }
        function on() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return rn(n, " ")
        }
        function en() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return rn(n, "-")
        }
        function fn(n) {
            return d(n) ? n + "px" : n
        }
        function cn(n, t) {
            return {
                width: n,
                height: t
            }
        }
        function sn(n) {
            return {
                left: n
            }
        }
        function an(n) {
            return {
                top: n
            }
        }
        function hn() {
            return function(n) {
                return {
                    position: n
                }
            }("absolute")
        }
        function vn(n) {
            return sn(fn(n))
        }
        function ln(n) {
            return {
                right: fn(n)
            }
        }
        function dn(n) {
            return an(fn(n))
        }
        function wn(n) {
            return {
                bottom: fn(n)
            }
        }
        function mn(n) {
            return r(r(r(r({}, vn(n)), dn(n)), ln(n)), wn(n))
        }
        function bn(n, t) {
            return cn(fn(n), fn(t))
        }
        function pn() {
            return cn(s, s)
        }
        function yn(n) {
            return {
                pointerEvents: l(n) ? n : n ? e : c
            }
        }
        function gn(n) {
            return n.ownerDocument
        }
        function kn(n, t) {
            return l(t) ? function(n, t) {
                return n.createTextNode(t)
            }(n, t) : t
        }
        function In(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            return E(k, n.prepend, n, On, t)
        }
        function On(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            var i = n.childNodes[0];
            S(t, (function(t) {
                return n.insertBefore(kn(gn(n), t), i)
            }
            ))
        }
        function jn(n, t) {
            b(t);
            for (var r = 0, i = n.length; r < i; r++)
                if (I(n, r) && t(n[r], r, n))
                    return !0;
            return !1
        }
        function xn(n, t, r) {
            try {
                return n(t, r)
            } catch (i) {}
            return undefined
        }
        function Mn(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            return xn(_, n, t)
        }
        function Nn(n) {
            return n !== h
        }
        function Ln() {
            return Nn(typeof CSSKeyframesRule)
        }
        function Wn(n, t) {
            return n instanceof t
        }
        function Cn(n) {
            var t;
            return null !== (t = n.cssRules) && void 0 !== t ? t : n.rules
        }
        function zn(n, t, r) {
            n.setAttribute(t, r)
        }
        function Yn(n, t) {
            for (var r in t)
                zn(n, r, t[r])
        }
        function Tn(n, t) {
            return n.appendChild(t)
        }
        function Fn(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            return E(k, n.append, n, Zn, t)
        }
        function Zn(n) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            S(t, (function(t) {
                return Tn(n, kn(gn(n), t))
            }
            ))
        }
        function An(n, t) {
            for (var r = 0, i = n.length; r < i; r++)
                if (t(n[r], r, n))
                    return r;
            return -1
        }
        function Jn(n, t) {
            return k(n.findIndex, n, An, t)
        }
        function Rn() {}
        function Xn(n, t) {
            return n[t]
        }
        function _n(n, t, r) {
            n[t] = r
        }
        function En(n) {
            return n.style
        }
        !function(n) {
            n.DEFAULT = "yyyy-MM-dd HH:mm:ss.SSS",
            n.yyyyMMddHHmmss = "yyyy-MM-dd HH:mm:ss",
            n.yyyyMMdd = "yyyy-MM-dd",
            n.HHmmss = "HH:mm:ss"
        }(o || (o = {})),
        function() {
            function n(n) {
                this.t = n
            }
            n.prototype.toString = function() {
                return w(this.t) ? this.t() : this.t
            }
        }();
        var Pn = {};
        function Vn(n, t, r) {
            var i = En(n)
              , u = Pn[t];
            u || (Pn[t] = u = l(Xn(i, t)) ? _n : function(n, t) {
                var r = tn(t)
                  , i = R(["ms", "Moz", "webkit"], (function(n) {
                    return $(n, r)
                }
                ))
                  , u = Jn(i, (function(t) {
                    return l(Xn(n, t))
                }
                ));
                if (u > -1) {
                    var o = i[u];
                    return function(n, t, r) {
                        return _n(n, o, r)
                    }
                }
                return Rn
            }(i, t)),
            u(i, t, r)
        }
        function Dn(n, t) {
            for (var r in t)
                Vn(n, r, t[r])
        }
        function Hn(n, t, o) {
            var e = function(n, t, r) {
                return n.createElement(t, r)
            }(n, t);
            if (o) {
                var f = o.children
                  , c = i(o, ["children"]);
                !function(n) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                        t[r - 1] = arguments[r];
                    S(t, (function(t) {
                        var r = t.attributes
                          , o = t.style
                          , e = t.children
                          , f = i(t, ["attributes", "style", "children"]);
                        r && Yn(n, r),
                        o && Dn(n, o),
                        e && Fn.apply(void 0, u([n], e, !1)),
                        Q(n, f)
                    }
                    ))
                }(e, f ? r(r({}, c), {
                    children: R(f, (function(t) {
                        if (w(t))
                            return t(e);
                        var r = t.tagName
                          , u = i(t, ["tagName"]);
                        return Hn(n, r, u)
                    }
                    ))
                }) : c)
            }
            return e
        }
        function Gn(n, t, r) {
            var i = Hn(gn(n), t, r);
            return Fn(n, i),
            i
        }
        function qn(n, t) {
            var i = Hn(n, "div", r(r({}, t), {
                style: r(r(r(r(r({}, bn(50, 50)), {
                    maxWidth: "80%",
                    maxHeight: "80%",
                    margin: e
                }), hn()), mn(0)), yn(!1))
            }));
            if (Ln()) {
                var u = "loading-rotate"
                  , o = "loading-arc";
                (function(n, t) {
                    if (Ln())
                        for (var r = function(n) {
                            return n.styleSheets
                        }(n), i = 0; i < r.length; i++) {
                            var u = Mn(Cn, r[i]);
                            if (u && jn(u, (function(n) {
                                return Wn(n, CSSKeyframesRule) && n.name === t
                            }
                            )))
                                return !0
                        }
                    return !1
                }
                )(n, u) || In(i, Hn(n, "style", {
                    innerHTML: "@keyframes ".concat(u, "\n{\n    100% {\n        transform: rotate(360deg);\n    }\n}\n@keyframes ").concat(o, "\n{\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n}")
                })),
                i.insertAdjacentHTML("beforeend", '<svg viewBox="25 25 50 50" style="animation: '.concat(u, ' 2s linear infinite; transform-origin: center center; width: 100%; height: 100%;">\n    <circle style="animation: ').concat(o, ' 1.5s ease-in-out infinite; stroke: white; stroke-linecap: round; stroke-dasharray: 100, 200; stroke-dashoffset: 0;" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />\n</svg>'))
            } else
                In(i, "LOADING...");
            return i
        }
        var Qn, Bn = "ad", Un = "app", $n = $, Kn = "n".concat("am"), nt = "".concat(Kn, "e"), tt = "callbacks", rt = "container", it = $n("cache", nt), ut = "modified", ot = "document", et = $n(ot, "last", ut), ft = "element", ct = $n("enable", "d"), st = "flash", at = "get", ht = "info", vt = "load", lt = "".concat(vt, "ing"), dt = "".concat("meta", "s"), wt = "midgame", mt = "movie", bt = "main", pt = "manager", yt = $n("module", "require"), gt = "opacity", kt = "param", It = "process", Ot = "r".concat("am"), jt = "ready", St = ($n("".concat("referrer", "Policy")),
        "reward"), xt = "roll", Mt = "script", Nt = "set", Lt = "shockwave", Wt = "size", Ct = "state", zt = "sw", Yt = "trigger", Tt = $n(Yt, "s"), Ft = $n("unity", "instance"), Zt = "version", At = "view";
        function Jt(n) {
            return Qn || (Qn = Nn(typeof cancelAnimationFrame) ? cancelAnimationFrame : clearTimeout),
            Qn(n)
        }
        function Rt() {
            return performance
        }
        function Xt() {
            return Nn(typeof performance)
        }
        function _t() {
            return Date.now ? Date.now() : function(n) {
                return n.getTime()
            }(new Date)
        }
        var Et, Pt = Xt() ? NaN : _t();
        function Vt() {
            return Rt().now
        }
        function Dt() {
            var n, t;
            if (Xt()) {
                var r = null !== (n = Rt().timeOrigin) && void 0 !== n ? n : null === (t = Rt().timing) || void 0 === t ? void 0 : t.navigationStart;
                if (d(r))
                    return r
            }
            return Pt
        }
        function Ht() {
            return Xt() && Vt() ? y(Vt(), Rt()) : function(n) {
                return function(n, t) {
                    return t - n
                }(n, _t())
            }(Dt())
        }
        function Gt(n) {
            return Et || (Et = Nn(typeof requestAnimationFrame) ? requestAnimationFrame : qt),
            Et(n)
        }
        function qt(n) {
            return setTimeout((function() {
                var t = Ht();
                n(t)
            }
            ), 1e3 / 60)
        }
        function Qt(n, t, r) {
            void 0 === t && (t = null),
            void 0 === r && (r = !1);
            var i = function() {
                return t && t()
            };
            if (r && n())
                return i(),
                null;
            var u = function(t) {
                n() ? i() : o = Gt(u)
            }
              , o = Gt(u);
            return {
                revoke: function() {
                    Jt(o)
                }
            }
        }
        function Bt(n) {
            return k(n.remove, n, Ut)
        }
        function Ut(n) {
            var t;
            null === (t = n.parentNode) || void 0 === t || t.removeChild(n)
        }
        function $t(n) {
            return g(Number.isNaN, Number, Kt, n)
        }
        function Kt(n) {
            return d(n) && isNaN(n)
        }
        function nr(n) {
            return -0 === n && function(n) {
                return 1 / n == -Infinity
            }(n)
        }
        function tr(n) {
            return 0 === n && function(n) {
                return 1 / n === Infinity
            }(n)
        }
        function rr(n, t) {
            return g(Object.is, Object, ir, n, t)
        }
        function ir(n, t) {
            return n === t ? !(tr(n) && nr(t) || nr(n) && tr(t)) : $t(n) && $t(t)
        }
        function ur(n, t) {
            return n.getElementsByTagName(t)
        }
        function or(n, t) {
            return n.getElementById(t)
        }
        var er = "value";
        function fr(n, t) {
            return t in n
        }
        function cr(n, t, r) {
            return g(Object.defineProperty, Object, sr, n, t, r)
        }
        function sr(n, t, r) {
            if (fr(r, er)) {
                if (fr(r, at) || fr(r, Nt))
                    throw m("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return _n(n, t, r.value),
                n
            }
            return fr(r, at) && ar("getter", Xn(r, at)),
            fr(r, Nt) && ar("setter", Xn(r, Nt)),
            n
        }
        function ar(n, t) {
            if (!rr(t, undefined)) {
                if (!w(t))
                    throw m("".concat(tn(n), " must be a function: ").concat(t));
                throw m("no shim for ".concat(n))
            }
        }
        function hr(n) {
            return function(n) {
                return v(n, a)
            }(n) && null !== n
        }
        function vr(n, t, i) {
            return Gn(function(n) {
                var t, r;
                return null !== (t = n.head) && void 0 !== t ? t : null === (r = ur(n, "head")) || void 0 === r ? void 0 : r[0]
            }(n), Mt, r(r({}, i), {
                src: t
            }))
        }
        un(Bn, ct, xt),
        un(Bn, ct, It),
        un(Bn, ct, St),
        un(Bn, wt, "before"),
        un(Bn, wt, "after"),
        un(Bn, wt, "post"),
        un(Bn, Yt, xt),
        un(Bn, Yt, It),
        un(Bn, Yt, St),
        un(Bn, At, "setting");
        var lr = "iaa360"
          , dr = (un(Un, lr, "shopwindow"),
        un(Un, lr, St),
        "h4399")
          , wr = (un(Un, dr, "recommend"),
        un(Un, dr, pt),
        un(Un, pt),
        un(Un, Ft),
        un(Un, yt),
        un(Un, it),
        un(Un, ot),
        un(Un, et),
        un(Un, Wt))
          , mr = (un(ft, $("stop", "event")),
        un(ft, rt),
        un(ft, bt))
          , br = un(ft, "overlay")
          , pr = (un(ht, "id"),
        un(ht, "developer"),
        un(ht, nt),
        un(ht, Zt),
        un(ht, "date"),
        un(ht, "orientation"),
        un(lt, "progress"))
          , yr = un(lt, "label")
          , gr = (un(lt, "priority"),
        un(lt, Ct),
        un(Kn, "loc"),
        un(Kn, Zt),
        un(Kn, "history"),
        un(Kn, Tt),
        un(Ot, ct),
        un(Ot, Ct),
        un(Ot, e),
        un(Ot, tt),
        un(jt, "waiting"),
        un(jt, Ct),
        un(jt, "closings"),
        un(jt, tt),
        un(zt, ct),
        un(zt, $(Mt, "url")),
        un(zt, Ct),
        un(zt, "rcsp"),
        un(zt, e),
        un(Yt, "fullscreen"),
        un(Yt, "moregames"),
        un(Yt, "menu"),
        un(Yt, vt),
        un(Yt, "naminit"),
        un(At, nt),
        un(At, Wt),
        tn(Lt))
          , kr = tn(st)
          , Ir = $(gr, kr);
        function Or() {
            return Nn(typeof RufflePlayer)
        }
        function jr() {
            return RufflePlayer
        }
        function Sr() {
            xr("".concat(nn(lt), "..."))
        }
        function xr(n) {
            Rr(yr, n)
        }
        function Mr(n) {
            Rr(pr, n)
        }
        function Nr() {
            var n = jr().newest().createPlayer();
            Dn(n, pn()),
            cr(n, "nodeName", {
                get: function() {
                    return nn("embed")
                }
            }),
            S(D({
                allowFullScreen: "true",
                allowScriptAccess: "always",
                allowNetworking: "all",
                wmode: "opaque"
            }), (function(t) {
                zn(n, t[0], t[1])
            }
            )),
            Jr(n),
            Wr((function() {
                if (Nn(typeof XMLHttpRequest)) {
                    var t = new XMLHttpRequest;
                    t.responseType = "arraybuffer",
                    t.open(nn(at), Zr, !0),
                    Sr();
                    var r = Cr(wr)
                      , i = null == r ? void 0 : r[Zr];
                    t.onprogress = function(n) {
                        var t, r = n.loaded;
                        (null !== (t = n.lengthComputable) && void 0 !== t ? t : n.total > 0) ? Mr(r / n.total) : i > 0 ? Mr(r / i) : xr("".concat(nn(lt), " (").concat(r, ")"))
                    }
                    ,
                    t.onload = function() {
                        if (t.status >= 200 && t.status < 300) {
                            var r = t.response;
                            i > 0 && i !== r.byteLength ? xr(on("data", ut)) : zr(n, {
                                data: r
                            })
                        } else
                            xr(on(t.status, t.statusText))
                    }
                    ,
                    t.onabort = t.onerror = t.ontimeout = function(n) {
                        Lr(n, Zr)
                    }
                    ,
                    t.send()
                } else
                    zr(n, {
                        url: Zr
                    })
            }
            ))
        }
        function Lr(n, t) {
            xr($(n.type, ": ", t))
        }
        function Wr(n) {
            Rr(jt).then(n)
        }
        function Cr(n) {
            return Rr(un(dt, at), n)
        }
        function zr(n, t) {
            n.ruffle(1).load(r(r({}, t), {
                allowFullscreen: !0,
                allowNetworking: "all",
                allowScriptAccess: !0,
                autoplay: "on",
                preloader: !1,
                unmuteOverlay: f,
                splashScreen: !1
            })).then((function() {}
            ), (function(n) {}
            ))
        }
        var Yr = document
          , Tr = or(Yr, rt)
          , Fr = or(Yr, lt)
          , Zr = "main.swf";
        function Ar(n, t) {
            !function() {
                for (var n = [], t = 0; t < arguments.length; t++)
                    n[t] = arguments[t];
                _(n.pop(), n)
            }(n, "PercentLoaded", "CurrentFrame", "TotalFrames", (function(t) {
                return Vn(n, gt, t + "")
            }
            ), (function() {
                return Bt(t)
            }
            ), (function(n, t, r, i, u, o) {
                u(0),
                Qt((function() {
                    return fr(n, t) && n[t]() > 0
                }
                ), (function() {
                    var e;
                    Vn(n, "transition", on(gt, "0.5s")),
                    u(1),
                    fr(n, r) && fr(n, i) && (d(n[i]) ? n[i] : n[i]()) > 1 ? (Sr(),
                    Qt((function() {
                        var i = n[t]();
                        return e !== i && Mr((e = i) / 100),
                        n[r]() > 0
                    }
                    ), o, !0)) : o()
                }
                ), !0)
            }
            ))
        }
        function Jr(n) {
            In(Tr, n),
            function(n, t) {
                Rr(un(dt, Nt), n, t)
            }(mr, n);
            var t = Cr(br);
            if (hr(t) && t.childElementCount >= 2) {
                var r = qn(Yr, {
                    id: "icon"
                });
                Fn(t.children[1], r),
                Ar(n, r),
                Bt(Fr)
            } else
                Ar(n, Fr)
        }
        var Rr = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return _(ja.call, n)
        }
          , Xr = Mn((function() {
            var n, t = null === (n = navigator.plugins) || void 0 === n ? void 0 : n.namedItem(on(gr, kr));
            return !!t && function(n, t, r) {
                return k(n.endsWith, n, K, t, r)
            }(t.filename, ".dll")
        }
        )) ? 1 : Mn((function() {
            return !!new ActiveXObject(un(Ir, Ir))
        }
        )) ? 2 : 0;
        Xr > 0 ? (Or() && Q(jr().config, {
            favorFlash: !1,
            polyfills: !1
        }),
        function() {
            var n = Hn(Yr, a, {
                attributes: {
                    id: bt,
                    type: "".concat("application", "/").concat(en("x", Lt, st)),
                    width: s,
                    height: s
                }
            });
            S(D({
                allowFullScreen: "true",
                allowScriptAccess: "always",
                allowNetworking: "all",
                wmode: "opaque"
            }), (function(t) {
                Gn(n, kt, {
                    attributes: {
                        name: t[0],
                        value: t[1]
                    }
                })
            }
            )),
            2 === Xr && function(n) {
                return n.documentMode
            }(Yr) < 11 && (n = n.cloneNode(!0)),
            Jr(n),
            Wr((function() {
                Gn(n, kt, {
                    attributes: {
                        name: mt,
                        value: Zr
                    }
                }),
                2 === Xr && (n.movie = Zr)
            }
            ))
        }()) : Or() ? Nr() : Wr((function() {
            var n = "https://unpkg.com/@ruffle-rs/ruffle";
            xr("".concat(nn(vt), " ").concat(nn("ruffle"), "...")),
            vr(Yr, n, {
                onload: Nr,
                onerror: function(t) {
                    return Lr(t, n)
                }
            })
        }
        ))
    }
    ))
}();
