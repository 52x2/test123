function sr(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Qo(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Hs, Ge, ye, ae, kt, Fs, js, nu, uu, ui, tn, bt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Di = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Ot = 1e8,
    te = 1 / Ot,
    ys = 2 * Math.PI,
    Ta = ys / 4,
    Sa = 0,
    Jo = Math.sqrt,
    Pa = Math.cos,
    ka = Math.sin,
    Ae = function(t) {
        return "string" == typeof t
    },
    he = function(t) {
        return "function" == typeof t
    },
    fr = function(t) {
        return "number" == typeof t
    },
    Gs = function(t) {
        return typeof t > "u"
    },
    tr = function(t) {
        return "object" == typeof t
    },
    ft = function(t) {
        return !1 !== t
    },
    qs = function() {
        return typeof window < "u"
    },
    ln = function(t) {
        return he(t) || Ae(t)
    },
    eu = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
    qe = Array.isArray,
    xs = /(?:-?\.?\d|\.)+/gi,
    tu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    oi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ru = /[+-]=-?[.\d]+/,
    iu = /[^,'"\[\]\s]+/gi,
    Aa = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    wt = {},
    Yn = {},
    su = function(t) {
        return (Yn = Hr(t, wt)) && _t
    },
    Ks = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    Nn = function(t, e) {
        return !e && console.warn(t)
    },
    ou = function(t, e) {
        return t && (wt[t] = e) && Yn && (Yn[t] = e) || wt
    },
    Ji = function() {
        return 0
    },
    Oa = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Fn = {
        suppressEvents: !0,
        kill: !1
    },
    Ma = {
        suppressEvents: !0
    },
    Zs = {},
    vr = [],
    vs = {},
    yt = {},
    ss = {},
    mo = 30,
    vn = [],
    Qs = "",
    Js = function(t) {
        var e, r, n = t[0];
        if (tr(n) || he(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (r = vn.length; r-- && !vn[r].targetTest(n););
            e = vn[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Au(t[r], e))) || t.splice(r, 1);
        return t
    },
    Nr = function(t) {
        return t._gsap || Js(Mt(t))[0]._gsap
    },
    au = function(t, e, r) {
        return (r = t[e]) && he(r) ? t[e]() : Gs(r) && t.getAttribute && t.getAttribute(e) || r
    },
    ct = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    pe = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    },
    Be = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    },
    fi = function(t, e) {
        var r = e.charAt(0),
            n = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    },
    Ba = function(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
        return n < r
    },
    Xn = function() {
        var t, e, r = vr.length,
            n = vr.slice(0);
        for (vs = {}, vr.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    },
    lu = function(t, e, r, n) {
        vr.length && !Ge && Xn(), t.render(e, r, n || Ge && e < 0 && (t._initted || t._startAt)), vr.length && !Ge && Xn()
    },
    fu = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(iu).length < 2 ? e : Ae(t) ? t.trim() : t
    },
    cu = function(t) {
        return t
    },
    Lt = function(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    },
    Ra = function(t) {
        return function(e, r) {
            for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
        }
    },
    Hr = function(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    },
    Co = function t(e, r) {
        for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = tr(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e
    },
    Vn = function(t, e) {
        var r, n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n
    },
    Vi = function(t) {
        var e = t.parent || ae,
            r = t.keyframes ? Ra(qe(t.keyframes)) : Lt;
        if (ft(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    },
    La = function(t, e) {
        for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
        return r < 0
    },
    hu = function(t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var s, o = t[n];
        if (i)
            for (s = e[i]; o && o[i] > s;) o = o._prev;
        return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
    },
    Qn = function(t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
            s = e._next;
        i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
    },
    wr = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    },
    Xr = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    },
    za = function(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    },
    Es = function(t, e, r, n) {
        return t._startAt && (Ge ? t._startAt.revert(Fn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    },
    Ia = function t(e) {
        return !e || e._ts && t(e.parent)
    },
    yo = function(t) {
        return t._repeat ? pi(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    pi = function(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    },
    Un = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    Jn = function(t) {
        return t._end = Be(t._start + (t._tDur / Math.abs(t._ts || t._rts || te) || 0))
    },
    es = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = Be(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Jn(t), r._dirty || Xr(r, t)), t
    },
    _u = function(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Un(t.rawTime(), e), (!e._dur || un(0, e.totalDuration(), r) - e._tTime > te) && e.render(r, !0)), Xr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -te
        }
    },
    Zt = function(t, e, r, n) {
        return e.parent && wr(e), e._start = Be((fr(r) ? r : r || t !== ae ? Pt(t, r, e) : t._time) + e._delay), e._end = Be(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), hu(t, e, "_first", "_last", t._sort ? "_start" : 0), bs(e) || (t._recent = e), n || _u(t, e), t._ts < 0 && es(t, t._tTime), t
    },
    du = function(t, e) {
        return (wt.ScrollTrigger || Ks("scrollTrigger", e)) && wt.ScrollTrigger.create(e, t)
    },
    Du = function(t, e, r, n, i) {
        return to(t, e, i), t._initted ? !r && t._pt && !Ge && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && uu !== vt.frame ? (vr.push(t), t._lazy = [i, n], 1) : void 0 : 1
    },
    Ya = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
    },
    bs = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    },
    Na = function(t, e, r, n) {
        var i, s, o, a = t.ratio,
            u = e < 0 || !e && (!t._start && Ya(t) && (t._initted || !bs(t)) || (t._ts < 0 || t._dp._ts < 0) && !bs(t)) ? 0 : 1,
            l = t._rDelay,
            c = 0;
        if (l && t._repeat && (c = un(0, t._tDur, e), s = pi(c, l), t._yoyo && 1 & s && (u = 1 - u), s !== pi(t._tTime, l) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || Ge || n || t._zTime === te || !e && t._zTime) {
            if (!t._initted && Du(t, e, n, r, c)) return;
            for (o = t._zTime, t._zTime = e || (r ? te : 0), r || (r = e && !o), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
            e < 0 && Es(t, e, r, !0), t._onUpdate && !r && Bt(t, "onUpdate"), c && t._repeat && !r && t.parent && Bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && wr(t, 1), !r && !Ge && (Bt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
    },
    Xa = function(t, e, r) {
        var n;
        if (r > e)
            for (n = t._first; n && n._start <= r;) {
                if ("isPause" === n.data && n._start > e) return n;
                n = n._next
            } else
                for (n = t._last; n && n._start >= r;) {
                    if ("isPause" === n.data && n._start < e) return n;
                    n = n._prev
                }
    },
    gi = function(t, e, r, n) {
        var i = t._repeat,
            s = Be(e) || 0,
            o = t._tTime / t._tDur;
        return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : Be(s * (i + 1) + t._rDelay * i) : s, o > 0 && !n && es(t, t._tTime = t._tDur * o), t.parent && Jn(t), r || Xr(t.parent, t), t
    },
    xo = function(t) {
        return t instanceof lt ? Xr(t) : gi(t, t._dur)
    },
    Va = {
        _start: 0,
        endTime: Ji,
        totalDuration: Ji
    },
    Pt = function t(e, r, n) {
        var i, s, o, a = e.labels,
            u = e._recent || Va,
            l = e.duration() >= Ot ? u.endTime(!1) : e._dur;
        return Ae(r) && (isNaN(r) || r in a) ? (s = r.charAt(0), o = "%" === r.substr(-1), i = r.indexOf("="), "<" === s || ">" === s ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (o ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = l), a[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), o && n && (s = s / 100 * (qe(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s)) : null == r ? l : +r
    },
    Ui = function(t, e, r) {
        var n, i, s = fr(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
        if (s && (a.duration = e[1]), a.parent = r, t) {
            for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = ft(i.vars.inherit) && i.parent;
            a.immediateRender = ft(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
        }
        return new Fe(e[0], a, e[o + 1])
    },
    Pr = function(t, e) {
        return t || 0 === t ? e(t) : e
    },
    un = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    },
    He = function(t, e) {
        return Ae(t) && (e = Aa.exec(t)) ? e[1] : ""
    },
    Ua = function(t, e, r) {
        return Pr(r, (function(r) {
            return un(t, e, r)
        }))
    },
    ws = [].slice,
    pu = function(t, e) {
        return t && tr(t) && "length" in t && (!e && !t.length || t.length - 1 in t && tr(t[0])) && !t.nodeType && t !== kt
    },
    $a = function(t, e, r) {
        return void 0 === r && (r = []), t.forEach((function(t) {
            var n;
            return Ae(t) && !e || pu(t, 1) ? (n = r).push.apply(n, Mt(t)) : r.push(t)
        })) || r
    },
    Mt = function(t, e, r) {
        return ye && !e && ye.selector ? ye.selector(t) : !Ae(t) || r || !Fs && mi() ? qe(t) ? $a(t, r) : pu(t) ? ws.call(t, 0) : t ? [t] : [] : ws.call((e || js).querySelectorAll(t), 0)
    },
    Ts = function(t) {
        return t = Mt(t)[0] || Nn("Invalid scope") || {},
            function(e) {
                var r = t.current || t.nativeElement || t;
                return Mt(e, r.querySelectorAll ? r : r === t ? Nn("Invalid scope") || js.createElement("div") : t)
            }
    },
    gu = function(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }))
    },
    mu = function(t) {
        if (he(t)) return t;
        var e = tr(t) ? t : {
                each: t
            },
            r = Vr(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            u = e.axis,
            l = n,
            c = n;
        return Ae(n) ? l = c = {
                center: .5,
                edges: .5,
                end: 1
            }[n] || 0 : !o && a && (l = n[0], c = n[1]),
            function(t, o, f) {
                var h, D, p, d, g, m, _, v, y, C = (f || e).length,
                    x = s[C];
                if (!x) {
                    if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, Ot])[1])) {
                        for (_ = -Ot; _ < (_ = f[y++].getBoundingClientRect().left) && y < C;);
                        y--
                    }
                    for (x = s[C] = [], h = a ? Math.min(y, C) * l - .5 : n % y, D = y === Ot ? 0 : a ? C * c / y - .5 : n / y | 0, _ = 0, v = Ot, m = 0; m < C; m++) p = m % y - h, d = D - (m / y | 0), x[m] = g = u ? Math.abs("y" === u ? d : p) : Jo(p * p + d * d), g > _ && (_ = g), g < v && (v = g);
                    "random" === n && gu(x), x.max = _ - v, x.min = v, x.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (y > C ? C - 1 : u ? "y" === u ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === n ? -1 : 1), x.b = C < 0 ? i - C : i, x.u = He(e.amount || e.each) || 0, r = r && C < 0 ? Su(r) : r
                }
                return C = (x[t] - x.min) / x.max || 0, Be(x.b + (r ? r(C) : C) * x.v) + x.u
            }
    },
    Ss = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var n = Be(Math.round(parseFloat(r) / t) * t * e);
            return (n - n % 1) / e + (fr(r) ? 0 : He(r))
        }
    },
    Cu = function(t, e) {
        var r, n, i = qe(t);
        return !i && tr(t) && (r = i = t.radius || Ot, t.values ? (t = Mt(t.values), (n = !fr(t[0])) && (r *= r)) : t = Ss(t.increment)), Pr(e, i ? he(t) ? function(e) {
            return n = t(e), Math.abs(n - e) <= r ? n : e
        } : function(e) {
            for (var i, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = Ot, l = 0, c = t.length; c--;) n ? i = (i = t[c].x - o) * i + (s = t[c].y - a) * s : i = Math.abs(t[c] - o), i < u && (u = i, l = c);
            return l = !r || u <= r ? t[l] : e, n || l === e || fr(e) ? l : l + He(e)
        } : Ss(t))
    },
    yu = function(t, e, r, n) {
        return Pr(qe(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() {
            return qe(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
        }))
    },
    Wa = function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function(t) {
            return e.reduce((function(t, e) {
                return e(t)
            }), t)
        }
    },
    Ha = function(t, e) {
        return function(r) {
            return t(parseFloat(r)) + (e || He(r))
        }
    },
    Ga = function(t, e, r) {
        return Fu(t, e, 0, 1, r)
    },
    xu = function(t, e, r) {
        return Pr(r, (function(r) {
            return t[~~e(r)]
        }))
    },
    qa = function t(e, r, n) {
        var i = r - e;
        return qe(e) ? xu(e, t(0, e.length), r) : Pr(n, (function(t) {
            return (i + (t - e) % i) % i + e
        }))
    },
    ja = function t(e, r, n) {
        var i = r - e,
            s = 2 * i;
        return qe(e) ? xu(e, t(0, e.length - 1), r) : Pr(n, (function(t) {
            return e + ((t = (s + (t - e) % s) % s || 0) > i ? s - t : t)
        }))
    },
    en = function(t) {
        for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? iu : xs), o += t.substr(s, e - s) + yu(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), s = n + 1;
        return o + t.substr(s, t.length - s)
    },
    Fu = function(t, e, r, n, i) {
        var s = e - t,
            o = n - r;
        return Pr(i, (function(e) {
            return r + ((e - t) / s * o || 0)
        }))
    },
    Ka = function t(e, r, n, i) {
        var s = isNaN(e + r) ? 0 : function(t) {
            return (1 - t) * e + t * r
        };
        if (!s) {
            var o, a, u, l, c, f = Ae(e),
                h = {};
            if (!0 === n && (i = 1) && (n = null), f) e = {
                p: e
            }, r = {
                p: r
            };
            else if (qe(e) && !qe(r)) {
                for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
                l--, s = function(t) {
                    t *= l;
                    var e = Math.min(c, ~~t);
                    return u[e](t - e)
                }, n = r
            } else i || (e = Hr(qe(e) ? [] : {}, e));
            if (!u) {
                for (o in r) eo.call(h, e, o, "get", r[o]);
                s = function(t) {
                    return no(t, h) || (f ? e.p : e)
                }
            }
        }
        return Pr(n, s)
    },
    Fo = function(t, e, r) {
        var n, i, s, o = t.labels,
            a = Ot;
        for (n in o)(i = o[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (s = n, a = i);
        return s
    },
    Bt = function(t, e, r) {
        var n, i, s, o = t.vars,
            a = o[e],
            u = ye,
            l = t._ctx;
        if (a) return n = o[e + "Params"], i = o.callbackScope || t, r && vr.length && Xn(), l && (ye = l), s = n ? a.apply(i, n) : a.call(i), ye = u, s
    },
    Bi = function(t) {
        return wr(t), t.scrollTrigger && t.scrollTrigger.kill(!!Ge), t.progress() < 1 && Bt(t, "onInterrupt"), t
    },
    vu = [],
    Eu = function(t) {
        if (qs()) {
            var e = (t = !t.name && t.default || t).name,
                r = he(t),
                n = e && !r && t.init ? function() {
                    this._props = []
                } : t,
                i = {
                    init: Ji,
                    render: no,
                    add: eo,
                    kill: hl,
                    modifier: cl,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: io,
                    aliases: {},
                    register: 0
                };
            if (mi(), t !== n) {
                if (yt[e]) return;
                Lt(n, Lt(Vn(t, i), s)), Hr(n.prototype, Hr(i, Vn(t, s))), yt[n.prop = e] = n, t.targetTest && (vn.push(n), Zs[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            ou(e, n), t.register && t.register(_t, n, ht)
        } else vu.push(t)
    },
    ee = 255,
    Ri = {
        aqua: [0, ee, ee],
        lime: [0, ee, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ee],
        navy: [0, 0, 128],
        white: [ee, ee, ee],
        olive: [128, 128, 0],
        yellow: [ee, ee, 0],
        orange: [ee, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ee, 0, 0],
        pink: [ee, 192, 203],
        cyan: [0, ee, ee],
        transparent: [ee, ee, ee, 0]
    },
    os = function(t, e, r) {
        return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ee + .5 | 0
    },
    bu = function(t, e, r) {
        var n, i, s, o, a, u, l, c, f, h, D = t ? fr(t) ? [t >> 16, t >> 8 & ee, t & ee] : 0 : Ri.black;
        if (!D) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ri[t]) D = Ri[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + n + n + i + i + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(D = parseInt(t.substr(1, 6), 16)) >> 16, D >> 8 & ee, D & ee, parseInt(t.substr(7), 16) / 255];
                D = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ee, t & ee]
            } else if ("hsl" === t.substr(0, 3))
                if (D = h = t.match(xs), e) {
                    if (~t.indexOf("=")) return D = t.match(tu), r && D.length < 4 && (D[3] = 1), D
                } else o = +D[0] % 360 / 360, a = +D[1] / 100, n = 2 * (u = +D[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), D.length > 3 && (D[3] *= 1), D[0] = os(o + 1 / 3, n, i), D[1] = os(o, n, i), D[2] = os(o - 1 / 3, n, i);
            else D = t.match(xs) || Ri.transparent;
            D = D.map(Number)
        }
        return e && !h && (n = D[0] / ee, i = D[1] / ee, s = D[2] / ee, u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2, l === c ? o = a = 0 : (f = l - c, a = u > .5 ? f / (2 - l - c) : f / (l + c), o = l === n ? (i - s) / f + (i < s ? 6 : 0) : l === i ? (s - n) / f + 2 : (n - i) / f + 4, o *= 60), D[0] = ~~(o + .5), D[1] = ~~(100 * a + .5), D[2] = ~~(100 * u + .5)), r && D.length < 4 && (D[3] = 1), D
    },
    wu = function(t) {
        var e = [],
            r = [],
            n = -1;
        return t.split(Er).forEach((function(t) {
            var i = t.match(oi) || [];
            e.push.apply(e, i), r.push(n += i.length + 1)
        })), e.c = r, e
    },
    vo = function(t, e, r) {
        var n, i, s, o, a = "",
            u = (t + a).match(Er),
            l = e ? "hsla(" : "rgba(",
            c = 0;
        if (!u) return t;
        if (u = u.map((function(t) {
                return (t = bu(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), r && (s = wu(t), (n = r.c).join(a) !== s.c.join(a)))
            for (o = (i = t.replace(Er, "1").split(oi)).length - 1; c < o; c++) a += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!i)
            for (o = (i = t.split(Er)).length - 1; c < o; c++) a += i[c] + u[c];
        return a + i[o]
    },
    Er = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Ri) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi")
    }(),
    Za = /hsl[a]?\(/,
    Tu = function(t) {
        var e, r = t.join(" ");
        if (Er.lastIndex = 0, Er.test(r)) return e = Za.test(r), t[1] = vo(t[1], e), t[0] = vo(t[0], e, wu(t[1])), !0
    },
    vt = function() {
        var t, e, r, n, i, s, o = Date.now,
            a = 500,
            u = 33,
            l = o(),
            c = l,
            f = 1e3 / 240,
            h = f,
            D = [],
            p = function r(p) {
                var d, g, m, _, v = o() - c,
                    y = !0 === p;
                if (v > a && (l += v - u), ((d = (m = (c += v) - l) - h) > 0 || y) && (_ = ++n.frame, i = m - 1e3 * n.time, n.time = m /= 1e3, h += d + (d >= f ? 4 : f - d), g = 1), y || (t = e(r)), g)
                    for (s = 0; s < D.length; s++) D[s](m, i, _, p)
            };
        return n = {
            time: 0,
            frame: 0,
            tick: function() {
                p(!0)
            },
            deltaRatio: function(t) {
                return i / (1e3 / (t || 60))
            },
            wake: function() {
                nu && (!Fs && qs() && (kt = Fs = window, js = kt.document || {}, wt.gsap = _t, (kt.gsapVersions || (kt.gsapVersions = [])).push(_t.version), su(Yn || kt.GreenSockGlobals || !kt.gsap && kt || {}), r = kt.requestAnimationFrame, vu.forEach(Eu)), t && n.sleep(), e = r || function(t) {
                    return setTimeout(t, h - 1e3 * n.time + 1 | 0)
                }, tn = 1, p(2))
            },
            sleep: function() {
                (r ? kt.cancelAnimationFrame : clearTimeout)(t), tn = 0, e = Ji
            },
            lagSmoothing: function(t, e) {
                a = t || 1 / 0, u = Math.min(e || 33, a)
            },
            fps: function(t) {
                f = 1e3 / (t || 240), h = 1e3 * n.time + f
            },
            add: function(t, e, r) {
                var i = e ? function(e, r, s, o) {
                    t(e, r, s, o), n.remove(i)
                } : t;
                return n.remove(t), D[r ? "unshift" : "push"](i), mi(), i
            },
            remove: function(t, e) {
                ~(e = D.indexOf(t)) && D.splice(e, 1) && s >= e && s--
            },
            _listeners: D
        }
    }(),
    mi = function() {
        return !tn && vt.wake()
    },
    K = {},
    Qa = /^[\d.\-M][\d.\-,\s]/,
    Ja = /["']/g,
    el = function(t) {
        for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) r = s[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[o] = isNaN(n) ? n.replace(Ja, "").trim() : +n, o = r.substr(e + 1).trim();
        return i
    },
    tl = function(t) {
        var e = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            n = t.indexOf("(", e);
        return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
    },
    rl = function(t) {
        var e = (t + "").split("("),
            r = K[e[0]];
        return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [el(e[1])] : tl(t).split(",").map(fu)) : K._CE && Qa.test(t) ? K._CE("", t) : r
    },
    Su = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    },
    Pu = function t(e, r) {
        for (var n, i = e._first; i;) i instanceof lt ? t(i, r) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== r && (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
    },
    Vr = function(t, e) {
        return t && (he(t) ? t : K[t] || rl(t)) || e
    },
    Kr = function(t, e, r, n) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var i, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: n
        };
        return ct(t, (function(t) {
            for (var e in K[t] = wt[t] = s, K[i = t.toLowerCase()] = r, s) K[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = K[t + "." + e] = s[e]
        })), s
    },
    ku = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    },
    us = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
            s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
            o = s / ys * (Math.asin(1 / i) || 0),
            a = function(t) {
                return 1 === t ? 1 : i * Math.pow(2, -10 * t) * ka((t - o) * s) + 1
            },
            u = "out" === e ? a : "in" === e ? function(t) {
                return 1 - a(1 - t)
            } : ku(a);
        return s = ys / s, u.config = function(r, n) {
            return t(e, r, n)
        }, u
    },
    as = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function(t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            i = "out" === e ? n : "in" === e ? function(t) {
                return 1 - n(1 - t)
            } : ku(n);
        return i.config = function(r) {
            return t(e, r)
        }, i
    };
ct("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Kr(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, r)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }))
    })), K.Linear.easeNone = K.none = K.Linear.easeIn, Kr("Elastic", us("in"), us("out"), us()),
    function(t, e) {
        var r = 1 / e,
            n = function(n) {
                return n < r ? t * n * n : n < .7272727272727273 ? t * Math.pow(n - 1.5 / e, 2) + .75 : n < .9090909090909092 ? t * (n -= 2.25 / e) * n + .9375 : t * Math.pow(n - 2.625 / e, 2) + .984375
            };
        Kr("Bounce", (function(t) {
            return 1 - n(1 - t)
        }), n)
    }(7.5625, 2.75), Kr("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Kr("Circ", (function(t) {
        return -(Jo(1 - t * t) - 1)
    })), Kr("Sine", (function(t) {
        return 1 === t ? 1 : 1 - Pa(t * Ta)
    })), Kr("Back", as("in"), as("out"), as()), K.SteppedEase = K.steps = wt.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0,
                s = 1 - te;
            return function(t) {
                return ((n * un(0, s, t) | 0) + i) * r
            }
        }
    }, Di.ease = K["quad.out"], ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return Qs += t + "," + t + "Params,"
    }));
var Au = function(t, e) {
        this.id = Sa++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : au, this.set = e ? e.getSetter : io
    },
    Ci = function() {
        function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, gi(this, +t.duration, 1, 1), this.data = t.data, ye && (this._ctx = ye, ye.data.push(this)), tn || vt.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, gi(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(t, e) {
            if (mi(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (es(this, t), !r._dp || r.parent || _u(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Zt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === te || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), lu(this, t, e)), this
        }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + yo(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + yo(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? pi(this._tTime, r) + 1 : 1
        }, e.timeScale = function(t) {
            if (!arguments.length) return this._rts === -te ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Un(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -te ? 0 : this._rts, this.totalTime(un(-Math.abs(this._delay), this._tDur, e), !0), Jn(this), za(this)
        }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (mi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== te && (this._tTime -= te)))), this) : this._ps
        }, e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Zt(e, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function(t) {
            return this._start + (ft(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Un(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.revert = function(t) {
            void 0 === t && (t = Ma);
            var e = Ge;
            return Ge = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), Ge = e, this
        }, e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
        }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, xo(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, xo(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function(t, e) {
            return this.totalTime(Pt(this, t), ft(e))
        }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, ft(e))
        }, e.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, e.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -te : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -te, this
        }, e.isActive = function() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - te))
        }, e.eventCallback = function(t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, e.then = function(t) {
            var e = this;
            return new Promise((function(r) {
                var n = he(t) ? t : cu,
                    i = function() {
                        var t = e.then;
                        e.then = null, he(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                    };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
            }))
        }, e.kill = function() {
            Bi(this)
        }, t
    }();
Lt(Ci.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -te,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var lt = function(t) {
    function e(e, r) {
        var n;
        return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ft(e.sortChildren), ae && Zt(e.parent || ae, sr(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && du(sr(n), e.scrollTrigger), n
    }
    Qo(e, t);
    var r = e.prototype;
    return r.to = function(t, e, r) {
        return Ui(0, arguments, this), this
    }, r.from = function(t, e, r) {
        return Ui(1, arguments, this), this
    }, r.fromTo = function(t, e, r, n) {
        return Ui(2, arguments, this), this
    }, r.set = function(t, e, r) {
        return e.duration = 0, e.parent = this, Vi(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Fe(t, e, Pt(this, r), 1), this
    }, r.call = function(t, e, r) {
        return Zt(this, Fe.delayedCall(0, t, e), r)
    }, r.staggerTo = function(t, e, r, n, i, s, o) {
        return r.duration = e, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = o, r.parent = this, new Fe(t, r, Pt(this, i)), this
    }, r.staggerFrom = function(t, e, r, n, i, s, o) {
        return r.runBackwards = 1, Vi(r).immediateRender = ft(r.immediateRender), this.staggerTo(t, e, r, n, i, s, o)
    }, r.staggerFromTo = function(t, e, r, n, i, s, o, a) {
        return n.startAt = r, Vi(n).immediateRender = ft(n.immediateRender), this.staggerTo(t, e, n, i, s, o, a)
    }, r.render = function(t, e, r) {
        var n, i, s, o, a, u, l, c, f, h, D, p, d = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            m = this._dur,
            _ = t <= 0 ? 0 : Be(t),
            v = this._zTime < 0 != t < 0 && (this._initted || !m);
        if (this !== ae && _ > g && t >= 0 && (_ = g), _ !== this._tTime || r || v) {
            if (d !== this._time && m && (_ += this._time - d, t += this._time - d), n = _, f = this._start, u = !(c = this._ts), v && (m || (d = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                if (D = this._yoyo, a = m + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                if (n = Be(_ % a), _ === g ? (o = this._repeat, n = m) : ((o = ~~(_ / a)) && o === _ / a && (n = m, o--), n > m && (n = m)), h = pi(this._tTime, a), !d && this._tTime && h !== o && this._tTime - h * a - this._dur <= 0 && (h = o), D && 1 & o && (n = m - n, p = 1), o !== h && !this._lock) {
                    var y = D && 1 & h,
                        C = y === (D && 1 & o);
                    if (o < h && (y = !y), d = y ? 0 : m, this._lock = 1, this.render(d || (p ? 0 : Be(o * a)), e, !m)._lock = 0, this._tTime = _, !e && this.parent && Bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), d && d !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (m = this._dur, g = this._tDur, C && (this._lock = 2, d = y ? m : -1e-4, this.render(d, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    Pu(this, p)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && ((l = Xa(this, Be(d), Be(n))) && (_ -= n - (n = l._start))), this._tTime = _, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, d = 0), !d && n && !e && !o && (Bt(this, "onStart"), this._tTime !== _)) return this;
            if (n >= d && t >= 0)
                for (i = this._first; i;) {
                    if (s = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
                        if (i.parent !== this) return this.render(t, e, r);
                        if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                            l = 0, s && (_ += this._zTime = -te);
                            break
                        }
                    }
                    i = s
                } else {
                    i = this._last;
                    for (var x = t < 0 ? t : n; i;) {
                        if (s = i._prev, (i._act || x <= i._end) && i._ts && l !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (x - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (x - i._start) * i._ts, e, r || Ge && (i._initted || i._startAt)), n !== this._time || !this._ts && !u) {
                                l = 0, s && (_ += this._zTime = x ? -te : te);
                                break
                            }
                        }
                        i = s
                    }
                }
            if (l && !e && (this.pause(), l.render(n >= d ? 0 : -te)._zTime = n >= d ? 1 : -1, this._ts)) return this._start = f, Jn(this), this.render(t, e, r);
            this._onUpdate && !e && Bt(this, "onUpdate", !0), (_ === g && this._tTime >= this.totalDuration() || !_ && d) && (f === this._start || Math.abs(c) !== Math.abs(this._ts)) && (this._lock || ((t || !m) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && wr(this, 1), !e && (!(t < 0) || d) && (_ || d || !g) && (Bt(this, _ === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < g && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function(t, e) {
        var r = this;
        if (fr(e) || (e = Pt(this, e, t)), !(t instanceof Ci)) {
            if (qe(t)) return t.forEach((function(t) {
                return r.add(t, e)
            })), this;
            if (Ae(t)) return this.addLabel(t, e);
            if (!he(t)) return this;
            t = Fe.delayedCall(0, t)
        }
        return this !== t ? Zt(this, t, e) : this
    }, r.getChildren = function(t, e, r, n) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -Ot);
        for (var i = [], s = this._first; s;) s._start >= n && (s instanceof Fe ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))), s = s._next;
        return i
    }, r.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
    }, r.remove = function(t) {
        return Ae(t) ? this.removeLabel(t) : he(t) ? this.killTweensOf(t) : (Qn(this, t), t === this._recent && (this._recent = this._last), Xr(this))
    }, r.totalTime = function(e, r) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Be(vt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function(t, e) {
        return this.labels[t] = Pt(this, e), this
    }, r.removeLabel = function(t) {
        return delete this.labels[t], this
    }, r.addPause = function(t, e, r) {
        var n = Fe.delayedCall(0, e || Ji, r);
        return n.data = "isPause", this._hasPause = 1, Zt(this, n, Pt(this, t))
    }, r.removePause = function(t) {
        var e = this._first;
        for (t = Pt(this, t); e;) e._start === t && "isPause" === e.data && wr(e), e = e._next
    }, r.killTweensOf = function(t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--;) gr !== n[i] && n[i].kill(t, e);
        return this
    }, r.getTweensOf = function(t, e) {
        for (var r, n = [], i = Mt(t), s = this._first, o = fr(e); s;) s instanceof Fe ? Ba(s._targets, i) && (o ? (!gr || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r), s = s._next;
        return n
    }, r.tweenTo = function(t, e) {
        e = e || {};
        var r, n = this,
            i = Pt(n, t),
            s = e,
            o = s.startAt,
            a = s.onStart,
            u = s.onStartParams,
            l = s.immediateRender,
            c = Fe.to(n, Lt({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || te,
                onStart: function() {
                    if (n.pause(), !r) {
                        var t = e.duration || Math.abs((i - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                        c._dur !== t && gi(c, t, 0, 1).render(c._time, !0, !0), r = 1
                    }
                    a && a.apply(c, u || [])
                }
            }, e));
        return l ? c.render(0) : c
    }, r.tweenFromTo = function(t, e, r) {
        return this.tweenTo(e, Lt({
            startAt: {
                time: Pt(this, t)
            }
        }, r))
    }, r.recent = function() {
        return this._recent
    }, r.nextLabel = function(t) {
        return void 0 === t && (t = this._time), Fo(this, Pt(this, t))
    }, r.previousLabel = function(t) {
        return void 0 === t && (t = this._time), Fo(this, Pt(this, t), 1)
    }, r.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + te)
    }, r.shiftChildren = function(t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, s = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
        if (e)
            for (n in s) s[n] >= r && (s[n] += t);
        return Xr(this)
    }, r.invalidate = function(e) {
        var r = this._first;
        for (this._lock = 0; r;) r.invalidate(e), r = r._next;
        return t.prototype.invalidate.call(this, e)
    }, r.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Xr(this)
    }, r.totalDuration = function(t) {
        var e, r, n, i = 0,
            s = this,
            o = s._last,
            a = Ot;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
            for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Zt(s, o, r - o._delay, 1)._lock = 0) : a = r, r < 0 && o._ts && (i -= r, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -1 / 0), a = 0), o._end > i && o._ts && (i = o._end), o = e;
            gi(s, s === ae && s._time > i ? s._time : i, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(t) {
        if (ae._ts && (lu(ae, Un(t, ae)), uu = vt.frame), vt.frame >= mo) {
            mo += bt.autoSleep || 120;
            var e = ae._first;
            if ((!e || !e._ts) && bt.autoSleep && vt._listeners.length < 2) {
                for (; e && !e._ts;) e = e._next;
                e || vt.sleep()
            }
        }
    }, e
}(Ci);
Lt(lt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var gr, Ps, il = function(t, e, r, n, i, s, o) {
        var a, u, l, c, f, h, D, p, d = new ht(this._pt, t, e, 0, 1, zu, null, i),
            g = 0,
            m = 0;
        for (d.b = r, d.e = n, r += "", (D = ~(n += "").indexOf("random(")) && (n = en(n)), s && (s(p = [r, n], t, e), r = p[0], n = p[1]), u = r.match(ns) || []; a = ns.exec(n);) c = a[0], f = n.substring(g, a.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (h = parseFloat(u[m - 1]) || 0, d._pt = {
            _next: d._pt,
            p: f || 1 === m ? f : ",",
            s: h,
            c: "=" === c.charAt(1) ? fi(h, c) - h : parseFloat(c) - h,
            m: l && l < 4 ? Math.round : 0
        }, g = ns.lastIndex);
        return d.c = g < n.length ? n.substring(g, n.length) : "", d.fp = o, (ru.test(n) || D) && (d.e = 0), this._pt = d, d
    },
    eo = function(t, e, r, n, i, s, o, a, u, l) {
        he(n) && (n = n(i || 0, t, s));
        var c, f = t[e],
            h = "get" !== r ? r : he(f) ? u ? t[e.indexOf("set") || !he(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
            D = he(f) ? u ? al : Ru : ro;
        if (Ae(n) && (~n.indexOf("random(") && (n = en(n)), "=" === n.charAt(1) && (((c = fi(h, n) + (He(h) || 0)) || 0 === c) && (n = c))), !l || h !== n || Ps) return isNaN(h * n) || "" === n ? (!f && !(e in t) && Ks(e, n), il.call(this, t, e, h, n, D, a || bt.stringFilter, u)) : (c = new ht(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof f ? fl : Lu, 0, D), u && (c.fp = u), o && c.modifier(o, this, t), this._pt = c)
    },
    nl = function(t, e, r, n, i) {
        if (he(t) && (t = $i(t, i, e, r, n)), !tr(t) || t.style && t.nodeType || qe(t) || eu(t)) return Ae(t) ? $i(t, i, e, r, n) : t;
        var s, o = {};
        for (s in t) o[s] = $i(t[s], i, e, r, n);
        return o
    },
    Ou = function(t, e, r, n, i, s) {
        var o, a, u, l;
        if (yt[t] && !1 !== (o = new yt[t]).init(i, o.rawVars ? e[t] : nl(e[t], n, i, s, r), r, n, s) && (r._pt = a = new ht(r._pt, i, t, 0, 1, o.render, o, 0, o.priority), r !== ui))
            for (u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length; l--;) u[o._props[l]] = a;
        return o
    },
    to = function t(e, r, n) {
        var i, s, o, a, u, l, c, f, h, D, p, d, g, m = e.vars,
            _ = m.ease,
            v = m.startAt,
            y = m.immediateRender,
            C = m.lazy,
            x = m.onUpdate,
            F = m.onUpdateParams,
            E = m.callbackScope,
            b = m.runBackwards,
            w = m.yoyoEase,
            A = m.keyframes,
            T = m.autoRevert,
            k = e._dur,
            B = e._startAt,
            M = e._targets,
            S = e.parent,
            P = S && "nested" === S.data ? S.vars.targets : M,
            O = "auto" === e._overwrite && !Hs,
            R = e.timeline;
        if (R && (!A || !_) && (_ = "none"), e._ease = Vr(_, Di.ease), e._yEase = w ? Su(Vr(!0 === w ? _ : w, Di.ease)) : 0, w && e._yoyo && !e._repeat && (w = e._yEase, e._yEase = e._ease, e._ease = w), e._from = !R && !!m.runBackwards, !R || A && !m.stagger) {
            if (d = (f = M[0] ? Nr(M[0]).harness : 0) && m[f.prop], i = Vn(m, Zs), B && (B._zTime < 0 && B.progress(1), r < 0 && b && y && !T ? B.render(-1, !0) : B.revert(b && k ? Fn : Oa), B._lazy = 0), v) {
                if (wr(e._startAt = Fe.set(M, Lt({
                        data: "isStart",
                        overwrite: !1,
                        parent: S,
                        immediateRender: !0,
                        lazy: !B && ft(C),
                        startAt: null,
                        delay: 0,
                        onUpdate: x,
                        onUpdateParams: F,
                        callbackScope: E,
                        stagger: 0
                    }, v))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Ge || !y && !T) && e._startAt.revert(Fn), y && k && r <= 0 && n <= 0) return void(r && (e._zTime = r))
            } else if (b && k && !B)
                if (r && (y = !1), o = Lt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && !B && ft(C),
                        immediateRender: y,
                        stagger: 0,
                        parent: S
                    }, i), d && (o[f.prop] = d), wr(e._startAt = Fe.set(M, o)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Ge ? e._startAt.revert(Fn) : e._startAt.render(-1, !0)), e._zTime = r, y) {
                    if (!r) return
                } else t(e._startAt, te, te);
            for (e._pt = e._ptCache = 0, C = k && ft(C) || C && !k, s = 0; s < M.length; s++) {
                if (c = (u = M[s])._gsap || Js(M)[s]._gsap, e._ptLookup[s] = D = {}, vs[c.id] && vr.length && Xn(), p = P === M ? s : P.indexOf(u), f && !1 !== (h = new f).init(u, d || i, e, p, P) && (e._pt = a = new ht(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority), h._props.forEach((function(t) {
                        D[t] = a
                    })), h.priority && (l = 1)), !f || d)
                    for (o in i) yt[o] && (h = Ou(o, i, e, p, u, P)) ? h.priority && (l = 1) : D[o] = a = eo.call(e, u, o, "get", i[o], p, P, 0, m.stringFilter);
                e._op && e._op[s] && e.kill(u, e._op[s]), O && e._pt && (gr = e, ae.killTweensOf(u, D, e.globalTime(r)), g = !e.parent, gr = 0), e._pt && C && (vs[c.id] = 1)
            }
            l && Iu(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = x, e._initted = (!e._op || e._pt) && !g, A && r <= 0 && R.render(Ot, !0, !0)
    },
    sl = function(t, e, r, n, i, s, o) {
        var a, u, l, c, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!f)
            for (f = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length; c--;) {
                if ((a = l[c][e]) && a.d && a.d._pt)
                    for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                if (!a) return Ps = 1, t.vars[e] = "+=0", to(t, o), Ps = 0, 1;
                f.push(a)
            }
        for (c = f.length; c--;)(a = (u = f[c])._pt || u).s = !n && 0 !== n || i ? a.s + (n || 0) + s * a.c : n, a.c = r - a.s, u.e && (u.e = pe(r) + He(u.e)), u.b && (u.b = a.s + He(u.b))
    },
    ol = function(t, e) {
        var r, n, i, s, o = t[0] ? Nr(t[0]).harness : 0,
            a = o && o.aliases;
        if (!a) return e;
        for (n in r = Hr({}, e), a)
            if (n in r)
                for (i = (s = a[n].split(",")).length; i--;) r[s[i]] = r[n];
        return r
    },
    ul = function(t, e, r, n) {
        var i, s, o = e.ease || n || "power1.inOut";
        if (qe(e)) s = r[t] || (r[t] = []), e.forEach((function(t, r) {
            return s.push({
                t: r / (e.length - 1) * 100,
                v: t,
                e: o
            })
        }));
        else
            for (i in e) s = r[i] || (r[i] = []), "ease" === i || s.push({
                t: parseFloat(t),
                v: e[i],
                e: o
            })
    },
    $i = function(t, e, r, n, i) {
        return he(t) ? t.call(e, r, n, i) : Ae(t) && ~t.indexOf("random(") ? en(t) : t
    },
    Mu = Qs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Bu = {};
ct(Mu + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
    return Bu[t] = 1
}));
var Fe = function(t) {
    function e(e, r, n, i) {
        var s;
        "number" == typeof r && (n.duration = r, r = n, n = null);
        var o, a, u, l, c, f, h, D, p = (s = t.call(this, i ? r : Vi(r)) || this).vars,
            d = p.duration,
            g = p.delay,
            m = p.immediateRender,
            _ = p.stagger,
            v = p.overwrite,
            y = p.keyframes,
            C = p.defaults,
            x = p.scrollTrigger,
            F = p.yoyoEase,
            E = r.parent || ae,
            b = (qe(e) || eu(e) ? fr(e[0]) : "length" in r) ? [e] : Mt(e);
        if (s._targets = b.length ? Js(b) : Nn("GSAP target " + e + " not found. https://greensock.com", !bt.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = v, y || _ || ln(d) || ln(g)) {
            if (r = s.vars, (o = s.timeline = new lt({
                    data: "nested",
                    defaults: C || {},
                    targets: E && "nested" === E.data ? E.vars.targets : b
                })).kill(), o.parent = o._dp = sr(s), o._start = 0, _ || ln(d) || ln(g)) {
                if (l = b.length, h = _ && mu(_), tr(_))
                    for (c in _) ~Mu.indexOf(c) && (D || (D = {}), D[c] = _[c]);
                for (a = 0; a < l; a++)(u = Vn(r, Bu)).stagger = 0, F && (u.yoyoEase = F), D && Hr(u, D), f = b[a], u.duration = +$i(d, sr(s), a, f, b), u.delay = (+$i(g, sr(s), a, f, b) || 0) - s._delay, !_ && 1 === l && u.delay && (s._delay = g = u.delay, s._start += g, u.delay = 0), o.to(f, u, h ? h(a, f, b) : 0), o._ease = K.none;
                o.duration() ? d = g = 0 : s.timeline = 0
            } else if (y) {
                Vi(Lt(o.vars.defaults, {
                    ease: "none"
                })), o._ease = Vr(y.ease || r.ease || "none");
                var w, A, T, k = 0;
                if (qe(y)) y.forEach((function(t) {
                    return o.to(b, t, ">")
                })), o.duration();
                else {
                    for (c in u = {}, y) "ease" === c || "easeEach" === c || ul(c, y[c], u, y.easeEach);
                    for (c in u)
                        for (w = u[c].sort((function(t, e) {
                                return t.t - e.t
                            })), k = 0, a = 0; a < w.length; a++)(T = {
                            ease: (A = w[a]).e,
                            duration: (A.t - (a ? w[a - 1].t : 0)) / 100 * d
                        })[c] = A.v, o.to(b, T, k), k += T.duration;
                    o.duration() < d && o.to({}, {
                        duration: d - o.duration()
                    })
                }
            }
            d || s.duration(d = o.duration())
        } else s.timeline = 0;
        return !0 === v && !Hs && (gr = sr(s), ae.killTweensOf(b), gr = 0), Zt(E, sr(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), (m || !d && !y && s._start === Be(E._time) && ft(m) && Ia(sr(s)) && "nested" !== E.data) && (s._tTime = -te, s.render(Math.max(0, -g) || 0)), x && du(sr(s), x), s
    }
    Qo(e, t);
    var r = e.prototype;
    return r.render = function(t, e, r) {
        var n, i, s, o, a, u, l, c, f, h = this._time,
            D = this._tDur,
            p = this._dur,
            d = t < 0,
            g = t > D - te && !d ? D : t < te ? 0 : t;
        if (p) {
            if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
                if (n = g, c = this.timeline, this._repeat) {
                    if (o = p + this._rDelay, this._repeat < -1 && d) return this.totalTime(100 * o + t, e, r);
                    if (n = Be(g % o), g === D ? (s = this._repeat, n = p) : ((s = ~~(g / o)) && s === g / o && (n = p, s--), n > p && (n = p)), (u = this._yoyo && 1 & s) && (f = this._yEase, n = p - n), a = pi(this._tTime, o), n === h && !r && this._initted) return this._tTime = g, this;
                    s !== a && (c && this._yEase && Pu(c, u), this.vars.repeatRefresh && !u && !this._lock && (this._lock = r = 1, this.render(Be(o * s), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (Du(this, d ? t : n, r, e, g)) return this._tTime = 0, this;
                    if (h !== this._time) return this;
                    if (p !== this._dur) return this.render(t, e, r)
                }
                if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(n / p), this._from && (this.ratio = l = 1 - l), n && !h && !e && !s && (Bt(this, "onStart"), this._tTime !== g)) return this;
                for (i = this._pt; i;) i.r(l, i.d), i = i._next;
                c && c.render(t < 0 ? t : !n && u ? -te : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (d && Es(this, t, e, r), Bt(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Bt(this, "onRepeat"), (g === this._tDur || !g) && this._tTime === g && (d && !this._onUpdate && Es(this, t, !0, !0), (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && wr(this, 1), !e && (!d || h) && (g || h || u) && (Bt(this, g === D ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < D && this.timeScale() > 0) && this._prom()))
            }
        } else Na(this, t, e, r);
        return this
    }, r.targets = function() {
        return this._targets
    }, r.invalidate = function(e) {
        return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
    }, r.resetTo = function(t, e, r, n) {
        tn || vt.wake(), this._ts || this.play();
        var i, s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || to(this, s), i = this._ease(s / this._dur), sl(this, t, e, r, n, i, s) ? this.resetTo(t, e, r, n) : (es(this, 0), this.parent || hu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function(t, e) {
        if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Bi(this) : this;
        if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, gr && !0 !== gr.vars.overwrite)._first || Bi(this), this.parent && r !== this.timeline.totalDuration() && gi(this, this._dur * this.timeline._tDur / r, 0, 1), this
        }
        var n, i, s, o, a, u, l, c = this._targets,
            f = t ? Mt(t) : c,
            h = this._ptLookup,
            D = this._pt;
        if ((!e || "all" === e) && La(c, f)) return "all" === e && (this._pt = 0), Bi(this);
        for (n = this._op = this._op || [], "all" !== e && (Ae(e) && (a = {}, ct(e, (function(t) {
                return a[t] = 1
            })), e = a), e = ol(c, e)), l = c.length; l--;)
            if (~f.indexOf(c[l]))
                for (a in i = h[l], "all" === e ? (n[l] = e, o = i, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(u = i && i[a]) && ((!("kill" in u.d) || !0 === u.d.kill(a)) && Qn(this, u, "_pt"), delete i[a]), "all" !== s && (s[a] = 1);
        return this._initted && !this._pt && D && Bi(this), this
    }, e.to = function(t, r) {
        return new e(t, r, arguments[2])
    }, e.from = function(t, e) {
        return Ui(1, arguments)
    }, e.delayedCall = function(t, r, n, i) {
        return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: i
        })
    }, e.fromTo = function(t, e, r) {
        return Ui(2, arguments)
    }, e.set = function(t, r) {
        return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
    }, e.killTweensOf = function(t, e, r) {
        return ae.killTweensOf(t, e, r)
    }, e
}(Ci);
Lt(Fe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}), ct("staggerTo,staggerFrom,staggerFromTo", (function(t) {
    Fe[t] = function() {
        var e = new lt,
            r = ws.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
    }
}));
var ro = function(t, e, r) {
        return t[e] = r
    },
    Ru = function(t, e, r) {
        return t[e](r)
    },
    al = function(t, e, r, n) {
        return t[e](n.fp, r)
    },
    ll = function(t, e, r) {
        return t.setAttribute(e, r)
    },
    io = function(t, e) {
        return he(t[e]) ? Ru : Gs(t[e]) && t.setAttribute ? ll : ro
    },
    Lu = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    },
    fl = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    zu = function(t, e) {
        var r = e._pt,
            n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
            for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    },
    no = function(t, e) {
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    cl = function(t, e, r, n) {
        for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(t, e, r), s = i
    },
    hl = function(t) {
        for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Qn(this, n, "_pt") : n.dep || (e = 1), n = r;
        return !e
    },
    _l = function(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    },
    Iu = function(t) {
        for (var e, r, n, i, s = t._pt; s;) {
            for (e = s._next, r = n; r && r.pr > s.pr;) r = r._next;
            (s._prev = r ? r._prev : i) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : i = s, s = e
        }
        t._pt = n
    },
    ht = function() {
        function t(t, e, r, n, i, s, o, a, u) {
            this.t = e, this.s = n, this.c = i, this.p = r, this.r = s || Lu, this.d = o || this, this.set = a || ro, this.pr = u || 0, this._next = t, t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = _l, this.m = t, this.mt = r, this.tween = e
        }, t
    }();
ct(Qs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
    return Zs[t] = 1
})), wt.TweenMax = wt.TweenLite = Fe, wt.TimelineLite = wt.TimelineMax = lt, ae = new lt({
    sortChildren: !1,
    defaults: Di,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
}), bt.stringFilter = Tu;
var yi = [],
    En = {},
    dl = [],
    Eo = 0,
    ls = function(t) {
        return (En[t] || dl).map((function(t) {
            return t()
        }))
    },
    ks = function() {
        var t = Date.now(),
            e = [];
        t - Eo > 2 && (ls("matchMediaInit"), yi.forEach((function(t) {
            var r, n, i, s, o = t.queries,
                a = t.conditions;
            for (n in o)(r = kt.matchMedia(o[n]).matches) && (i = 1), r !== a[n] && (a[n] = r, s = 1);
            s && (t.revert(), i && e.push(t))
        })), ls("matchMediaRevert"), e.forEach((function(t) {
            return t.onMatch(t)
        })), Eo = t, ls("matchMedia"))
    },
    Yu = function() {
        function t(t, e) {
            this.selector = e && Ts(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            he(t) && (r = e, e = t, t = he);
            var n = this,
                i = function() {
                    var t, i = ye,
                        s = n.selector;
                    return i && i !== n && i.data.push(n), r && (n.selector = Ts(r)), ye = n, t = e.apply(n, arguments), he(t) && n._r.push(t), ye = i, n.selector = s, n.isReverted = !1, t
                };
            return n.last = i, t === he ? i(n) : t ? n[t] = i : i
        }, e.ignore = function(t) {
            var e = ye;
            ye = null, t(this), ye = e
        }, e.getTweens = function() {
            var e = [];
            return this.data.forEach((function(r) {
                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Fe && !(r.parent && "nested" === r.parent.data) && e.push(r)
            })), e
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(t, e) {
            var r = this;
            if (t) {
                var n = this.getTweens();
                this.data.forEach((function(t) {
                    "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function(t) {
                        return n.splice(n.indexOf(t), 1)
                    })))
                })), n.map((function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                })).sort((function(t, e) {
                    return e.g - t.g || -1
                })).forEach((function(e) {
                    return e.t.revert(t)
                })), this.data.forEach((function(e) {
                    return !(e instanceof Ci) && e.revert && e.revert(t)
                })), this._r.forEach((function(e) {
                    return e(t, r)
                })), this.isReverted = !0
            } else this.data.forEach((function(t) {
                return t.kill && t.kill()
            }));
            if (this.clear(), e) {
                var i = yi.indexOf(this);
                ~i && yi.splice(i, 1)
            }
        }, e.revert = function(t) {
            this.kill(t || {})
        }, t
    }(),
    Dl = function() {
        function t(t) {
            this.contexts = [], this.scope = t
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            tr(t) || (t = {
                matches: t
            });
            var n, i, s, o = new Yu(0, r || this.scope),
                a = o.conditions = {};
            for (i in this.contexts.push(o), e = o.add("onMatch", e), o.queries = t, t) "all" === i ? s = 1 : (n = kt.matchMedia(t[i])) && (yi.indexOf(o) < 0 && yi.push(o), (a[i] = n.matches) && (s = 1), n.addListener ? n.addListener(ks) : n.addEventListener("change", ks));
            return s && e(o), this
        }, e.revert = function(t) {
            this.kill(t || {})
        }, e.kill = function(t) {
            this.contexts.forEach((function(e) {
                return e.kill(t, !0)
            }))
        }, t
    }(),
    $n = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach((function(t) {
                return Eu(t)
            }))
        },
        timeline: function(t) {
            return new lt(t)
        },
        getTweensOf: function(t, e) {
            return ae.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, n) {
            Ae(t) && (t = Mt(t)[0]);
            var i = Nr(t || {}).get,
                s = r ? cu : fu;
            return "native" === r && (r = ""), t && (e ? s((yt[e] && yt[e].get || i)(t, e, r, n)) : function(e, r, n) {
                return s((yt[e] && yt[e].get || i)(t, e, r, n))
            })
        },
        quickSetter: function(t, e, r) {
            if ((t = Mt(t)).length > 1) {
                var n = t.map((function(t) {
                        return _t.quickSetter(t, e, r)
                    })),
                    i = n.length;
                return function(t) {
                    for (var e = i; e--;) n[e](t)
                }
            }
            t = t[0] || {};
            var s = yt[e],
                o = Nr(t),
                a = o.harness && (o.harness.aliases || {})[e] || e,
                u = s ? function(e) {
                    var n = new s;
                    ui._pt = 0, n.init(t, r ? e + r : e, ui, 0, [t]), n.render(1, n), ui._pt && no(1, ui)
                } : o.set(t, a);
            return s ? u : function(e) {
                return u(t, a, r ? e + r : e, o, 1)
            }
        },
        quickTo: function(t, e, r) {
            var n, i = _t.to(t, Hr(((n = {})[e] = "+=0.1", n.paused = !0, n), r || {})),
                s = function(t, r, n) {
                    return i.resetTo(e, t, r, n)
                };
            return s.tween = i, s
        },
        isTweening: function(t) {
            return ae.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Vr(t.ease, Di.ease)), Co(Di, t || {})
        },
        config: function(t) {
            return Co(bt, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                r = t.effect,
                n = t.plugins,
                i = t.defaults,
                s = t.extendTimeline;
            (n || "").split(",").forEach((function(t) {
                return t && !yt[t] && !wt[t] && Nn(e + " effect requires " + t + " plugin.")
            })), ss[e] = function(t, e, n) {
                return r(Mt(t), Lt(e || {}, i), n)
            }, s && (lt.prototype[e] = function(t, r, n) {
                return this.add(ss[e](t, tr(r) ? r : (n = r) && {}, this), n)
            })
        },
        registerEase: function(t, e) {
            K[t] = Vr(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Vr(t, e) : K
        },
        getById: function(t) {
            return ae.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, n, i = new lt(t);
            for (i.smoothChildTiming = ft(t.smoothChildTiming), ae.remove(i), i._dp = 0, i._time = i._tTime = ae._time, r = ae._first; r;) n = r._next, (e || !(!r._dur && r instanceof Fe && r.vars.onComplete === r._targets[0])) && Zt(i, r, r._start - r._delay), r = n;
            return Zt(ae, i, 0), i
        },
        context: function(t, e) {
            return t ? new Yu(t, e) : ye
        },
        matchMedia: function(t) {
            return new Dl(t)
        },
        matchMediaRefresh: function() {
            return yi.forEach((function(t) {
                var e, r, n = t.conditions;
                for (r in n) n[r] && (n[r] = !1, e = 1);
                e && t.revert()
            })) || ks()
        },
        addEventListener: function(t, e) {
            var r = En[t] || (En[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function(t, e) {
            var r = En[t],
                n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1)
        },
        utils: {
            wrap: qa,
            wrapYoyo: ja,
            distribute: mu,
            random: yu,
            snap: Cu,
            normalize: Ga,
            getUnit: He,
            clamp: Ua,
            splitColor: bu,
            toArray: Mt,
            selector: Ts,
            mapRange: Fu,
            pipe: Wa,
            unitize: Ha,
            interpolate: Ka,
            shuffle: gu
        },
        install: su,
        effects: ss,
        ticker: vt,
        updateRoot: lt.updateRoot,
        plugins: yt,
        globalTimeline: ae,
        core: {
            PropTween: ht,
            globals: ou,
            Tween: Fe,
            Timeline: lt,
            Animation: Ci,
            getCache: Nr,
            _removeLinkedListItem: Qn,
            reverting: function() {
                return Ge
            },
            context: function(t) {
                return t && ye && (ye.data.push(t), t._ctx = ye), ye
            },
            suppressOverwrites: function(t) {
                return Hs = t
            }
        }
    };
ct("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
    return $n[t] = Fe[t]
})), vt.add(lt.updateRoot), ui = $n.to({}, {
    duration: 0
});
var pl = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    },
    gl = function(t, e) {
        var r, n, i, s = t._targets;
        for (r in e)
            for (n = s.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = pl(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r))
    },
    fs = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, r, n) {
                n._onInit = function(t) {
                    var n, i;
                    if (Ae(r) && (n = {}, ct(r, (function(t) {
                            return n[t] = 1
                        })), r = n), e) {
                        for (i in n = {}, r) n[i] = e(r[i]);
                        r = n
                    }
                    gl(t, r)
                }
            }
        }
    },
    _t = $n.registerPlugin({
        name: "attr",
        init: function(t, e, r, n, i) {
            var s, o, a;
            for (s in this.tween = r, e) a = t.getAttribute(s) || "", (o = this.add(t, "setAttribute", (a || 0) + "", e[s], n, i, 0, 0, s)).op = s, o.b = a, this._props.push(s)
        },
        render: function(t, e) {
            for (var r = e._pt; r;) Ge ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, fs("roundProps", Ss), fs("modifiers"), fs("snap", Cu)) || $n;
Fe.version = lt.version = _t.version = "3.11.5", nu = 1, qs() && mi(), K.Power0, K.Power1, K.Power2, K.Power3, K.Power4, K.Linear, K.Quad, K.Cubic, K.Quart, K.Quint, K.Strong, K.Elastic, K.Back, K.SteppedEase, K.Bounce, K.Sine, K.Expo, K.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var bo, mr, ci, so, Ir, wo, oo, $u, ml = function() {
        return typeof window < "u"
    },
    cr = {},
    Lr = 180 / Math.PI,
    hi = Math.PI / 180,
    ti = Math.atan2,
    To = 1e8,
    uo = /([A-Z])/g,
    Cl = /(left|right|width|margin|padding|x)/i,
    yl = /[\s,\(]\S/,
    Qt = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    As = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    xl = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    Fl = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    },
    vl = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    },
    Nu = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    Xu = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    },
    El = function(t, e, r) {
        return t.style[e] = r
    },
    bl = function(t, e, r) {
        return t.style.setProperty(e, r)
    },
    wl = function(t, e, r) {
        return t._gsap[e] = r
    },
    Tl = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    },
    Sl = function(t, e, r, n, i) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r, s.renderTransform(i, s)
    },
    Pl = function(t, e, r, n, i) {
        var s = t._gsap;
        s[e] = r, s.renderTransform(i, s)
    },
    le = "transform",
    Wt = le + "Origin",
    kl = function t(e, r) {
        var n = this,
            i = this.target,
            s = i.style;
        if (e in cr) {
            if (this.tfm = this.tfm || {}, "transform" === e) return Qt.transform.split(",").forEach((function(e) {
                return t.call(n, e, r)
            }));
            if (~(e = Qt[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                    return n.tfm[t] = or(i, t)
                })) : this.tfm[e] = i._gsap.x ? i._gsap[e] : or(i, e), this.props.indexOf(le) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Wt, r, "")), e = le
        }(s || r) && this.props.push(e, r, s[e])
    },
    Vu = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    Al = function() {
        var t, e, r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(uo, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (!(t = oo()) || !t.isStart) && !i[le] && (Vu(i), s.uncache = 1)
        }
    },
    Uu = function(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Al,
            save: kl
        };
        return t._gsap || _t.core.getCache(t), e && e.split(",").forEach((function(t) {
            return r.save(t)
        })), r
    },
    Os = function(t, e) {
        var r = mr.createElementNS ? mr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : mr.createElement(t);
        return r.style ? r : mr.createElement(t)
    },
    Jt = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(uo, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, xi(r) || r, 1) || ""
    },
    So = "O,Moz,ms,Ms,Webkit".split(","),
    xi = function(t, e, r) {
        var n = (e || Ir).style,
            i = 5;
        if (t in n && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(So[i] + t in n););
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? So[i] : "") + t
    },
    Ms = function() {
        ml() && window.document && (bo = window, mr = bo.document, ci = mr.documentElement, Ir = Os("div") || {
            style: {}
        }, Os("div"), le = xi(le), Wt = le + "Origin", Ir.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", $u = !!xi("perspective"), oo = _t.core.reverting, so = 1)
    },
    cs = function t(e) {
        var r, n = Os("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
        if (ci.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
            r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
        } catch {} else this._gsapBBox && (r = this._gsapBBox());
        return i && (s ? i.insertBefore(this, s) : i.appendChild(this)), ci.removeChild(n), this.style.cssText = o, r
    },
    Po = function(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    },
    Wu = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch {
            e = cs.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === cs || (e = cs.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Po(t, ["x", "cx", "x1"]) || 0,
            y: +Po(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    },
    Hu = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Wu(t))
    },
    rn = function(t, e) {
        if (e) {
            var r = t.style;
            e in cr && e !== Wt && (e = le), r.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), r.removeProperty(e.replace(uo, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    },
    Cr = function(t, e, r, n, i, s) {
        var o = new ht(t._pt, e, r, 0, 1, s ? Xu : Nu);
        return t._pt = o, o.b = n, o.e = i, t._props.push(r), o
    },
    ko = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Ol = {
        grid: 1,
        flex: 1
    },
    Tr = function t(e, r, n, i) {
        var s, o, a, u, l = parseFloat(n) || 0,
            c = (n + "").trim().substr((l + "").length) || "px",
            f = Ir.style,
            h = Cl.test(r),
            D = "svg" === e.tagName.toLowerCase(),
            p = (D ? "client" : "offset") + (h ? "Width" : "Height"),
            d = 100,
            g = "px" === i,
            m = "%" === i;
        return i === c || !l || ko[i] || ko[c] ? l : ("px" !== c && !g && (l = t(e, r, n, "px")), u = e.getCTM && Hu(e), !m && "%" !== c || !cr[r] && !~r.indexOf("adius") ? (f[h ? "width" : "height"] = d + (g ? c : i), o = ~r.indexOf("adius") || "em" === i && e.appendChild && !D ? e : e.parentNode, u && (o = (e.ownerSVGElement || {}).parentNode), (!o || o === mr || !o.appendChild) && (o = mr.body), (a = o._gsap) && m && a.width && h && a.time === vt.time && !a.uncache ? pe(l / a.width * d) : ((m || "%" === c) && !Ol[Jt(o, "display")] && (f.position = Jt(e, "position")), o === e && (f.position = "static"), o.appendChild(Ir), s = Ir[p], o.removeChild(Ir), f.position = "absolute", h && m && ((a = Nr(o)).time = vt.time, a.width = o[p]), pe(g ? s * l / d : s && l ? d / s * l : 0))) : (s = u ? e.getBBox()[h ? "width" : "height"] : e[p], pe(m ? l / s * d : l / 100 * s)))
    },
    or = function(t, e, r, n) {
        var i;
        return so || Ms(), e in Qt && "transform" !== e && (~(e = Qt[e]).indexOf(",") && (e = e.split(",")[0])), cr[e] && "transform" !== e ? (i = sn(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Hn(Jt(t, Wt)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Wn[e] && Wn[e](t, e, r) || Jt(t, e) || au(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? Tr(t, e, i, r) + r : i
    },
    Ml = function(t, e, r, n) {
        if (!r || "none" === r) {
            var i = xi(e, t, 1),
                s = i && Jt(t, i, 1);
            s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = Jt(t, "borderTopColor"))
        }
        var o, a, u, l, c, f, h, D, p, d, g, m = new ht(this._pt, t.style, e, 0, 1, zu),
            _ = 0,
            v = 0;
        if (m.b = r, m.e = n, r += "", "auto" === (n += "") && (t.style[e] = n, n = Jt(t, e) || n, t.style[e] = r), Tu(o = [r, n]), n = o[1], u = (r = o[0]).match(oi) || [], (n.match(oi) || []).length) {
            for (; a = oi.exec(n);) h = a[0], p = n.substring(_, a.index), c ? c = (c + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (c = 1), h !== (f = u[v++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), "=" === h.charAt(1) && (h = fi(l, h) + g), D = parseFloat(h), d = h.substr((D + "").length), _ = oi.lastIndex - d.length, d || (d = d || bt.units[e] || g, _ === n.length && (n += d, m.e += d)), g !== d && (l = Tr(t, e, f, d) || 0), m._pt = {
                _next: m._pt,
                p: p || 1 === v ? p : ",",
                s: l,
                c: D - l,
                m: c && c < 4 || "zIndex" === e ? Math.round : 0
            });
            m.c = _ < n.length ? n.substring(_, n.length) : ""
        } else m.r = "display" === e && "none" === n ? Xu : Nu;
        return ru.test(n) && (m.e = 0), this._pt = m, m
    },
    Ao = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Bl = function(t) {
        var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
        return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (t = r, r = n, n = t), e[0] = Ao[r] || r, e[1] = Ao[n] || n, e.join(" ")
    },
    Rl = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, n, i, s = e.t,
                o = s.style,
                a = e.u,
                u = s._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1;
            else
                for (i = (a = a.split(",")).length; --i > -1;) r = a[i], cr[r] && (n = 1, r = "transformOrigin" === r ? Wt : le), rn(s, r);
            n && (rn(s, le), u && (u.svg && s.removeAttribute("transform"), sn(s, 1), u.uncache = 1, Vu(o)))
        }
    },
    Wn = {
        clearProps: function(t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
                var s = t._pt = new ht(t._pt, e, r, 0, 0, Rl);
                return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1
            }
        }
    },
    nn = [1, 0, 0, 1, 0, 0],
    Gu = {},
    qu = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    },
    Oo = function(t) {
        var e = Jt(t, le);
        return qu(e) ? nn : e.substr(7).match(tu).map(pe)
    },
    ao = function(t, e) {
        var r, n, i, s, o = t._gsap || Nr(t),
            a = t.style,
            u = Oo(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? nn : u : (u === nn && !t.offsetParent && t !== ci && !o.svg && (i = a.display, a.display = "block", (!(r = t.parentNode) || !t.offsetParent) && (s = 1, n = t.nextElementSibling, ci.appendChild(t)), u = Oo(t), i ? a.display = i : rn(t, "display"), s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : ci.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    },
    Bs = function(t, e, r, n, i, s) {
        var o, a, u, l = t._gsap,
            c = i || ao(t, !0),
            f = l.xOrigin || 0,
            h = l.yOrigin || 0,
            D = l.xOffset || 0,
            p = l.yOffset || 0,
            d = c[0],
            g = c[1],
            m = c[2],
            _ = c[3],
            v = c[4],
            y = c[5],
            C = e.split(" "),
            x = parseFloat(C[0]) || 0,
            F = parseFloat(C[1]) || 0;
        r ? c !== nn && (a = d * _ - g * m) && (u = x * (-g / a) + F * (d / a) - (d * y - g * v) / a, x = x * (_ / a) + F * (-m / a) + (m * y - _ * v) / a, F = u) : (x = (o = Wu(t)).x + (~C[0].indexOf("%") ? x / 100 * o.width : x), F = o.y + (~(C[1] || C[0]).indexOf("%") ? F / 100 * o.height : F)), n || !1 !== n && l.smooth ? (v = x - f, y = F - h, l.xOffset = D + (v * d + y * m) - v, l.yOffset = p + (v * g + y * _) - y) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = F, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[Wt] = "0px 0px", s && (Cr(s, l, "xOrigin", f, x), Cr(s, l, "yOrigin", h, F), Cr(s, l, "xOffset", D, l.xOffset), Cr(s, l, "yOffset", p, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + F)
    },
    sn = function(t, e) {
        var r = t._gsap || new Au(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n, i, s, o, a, u, l, c, f, h, D, p, d, g, m, _, v, y, C, x, F, E, b, w, A, T, k, B, M, S, P, O, R = t.style,
            z = r.scaleX < 0,
            X = "px",
            U = "deg",
            L = getComputedStyle(t),
            Y = Jt(t, Wt) || "0";
        return n = i = s = u = l = c = f = h = D = 0, o = a = 1, r.svg = !(!t.getCTM || !Hu(t)), L.translate && (("none" !== L.translate || "none" !== L.scale || "none" !== L.rotate) && (R[le] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[le] ? L[le] : "")), R.scale = R.rotate = R.translate = "none"), g = ao(t, r.svg), r.svg && (r.uncache ? (A = t.getBBox(), Y = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", w = "") : w = !e && t.getAttribute("data-svg-origin"), Bs(t, w || Y, !!w || r.originIsAbsolute, !1 !== r.smooth, g)), p = r.xOrigin || 0, d = r.yOrigin || 0, g !== nn && (y = g[0], C = g[1], x = g[2], F = g[3], n = E = g[4], i = b = g[5], 6 === g.length ? (o = Math.sqrt(y * y + C * C), a = Math.sqrt(F * F + x * x), u = y || C ? ti(C, y) * Lr : 0, (f = x || F ? ti(x, F) * Lr + u : 0) && (a *= Math.abs(Math.cos(f * hi))), r.svg && (n -= p - (p * y + d * x), i -= d - (p * C + d * F))) : (O = g[6], S = g[7], k = g[8], B = g[9], M = g[10], P = g[11], n = g[12], i = g[13], s = g[14], l = (m = ti(O, M)) * Lr, m && (w = E * (_ = Math.cos(-m)) + k * (v = Math.sin(-m)), A = b * _ + B * v, T = O * _ + M * v, k = E * -v + k * _, B = b * -v + B * _, M = O * -v + M * _, P = S * -v + P * _, E = w, b = A, O = T), c = (m = ti(-x, M)) * Lr, m && (_ = Math.cos(-m), P = F * (v = Math.sin(-m)) + P * _, y = w = y * _ - k * v, C = A = C * _ - B * v, x = T = x * _ - M * v), u = (m = ti(C, y)) * Lr, m && (w = y * (_ = Math.cos(m)) + C * (v = Math.sin(m)), A = E * _ + b * v, C = C * _ - y * v, b = b * _ - E * v, y = w, E = A), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), o = pe(Math.sqrt(y * y + C * C + x * x)), a = pe(Math.sqrt(b * b + O * O)), m = ti(E, b), f = Math.abs(m) > 2e-4 ? m * Lr : 0, D = P ? 1 / (P < 0 ? -P : P) : 0), r.svg && (w = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !qu(Jt(t, le)), w && t.setAttribute("transform", w))), Math.abs(f) > 90 && Math.abs(f) < 270 && (z ? (o *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + X, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + X, r.z = s + X, r.scaleX = pe(o), r.scaleY = pe(a), r.rotation = pe(u) + U, r.rotationX = pe(l) + U, r.rotationY = pe(c) + U, r.skewX = f + U, r.skewY = h + U, r.transformPerspective = D + X, (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (R[Wt] = Hn(Y)), r.xOffset = r.yOffset = 0, r.force3D = bt.force3D, r.renderTransform = r.svg ? zl : $u ? ju : Ll, r.uncache = 0, r
    },
    Hn = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    hs = function(t, e, r) {
        var n = He(e);
        return pe(parseFloat(e) + parseFloat(Tr(t, "x", r + "px", n))) + n
    },
    Ll = function(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ju(t, e)
    },
    Br = "0deg",
    ki = "0px",
    Rr = ") ",
    ju = function(t, e) {
        var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            u = r.rotation,
            l = r.rotationY,
            c = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            D = r.scaleX,
            p = r.scaleY,
            d = r.transformPerspective,
            g = r.force3D,
            m = r.target,
            _ = r.zOrigin,
            v = "",
            y = "auto" === g && t && 1 !== t || !0 === g;
        if (_ && (c !== Br || l !== Br)) {
            var C, x = parseFloat(l) * hi,
                F = Math.sin(x),
                E = Math.cos(x);
            x = parseFloat(c) * hi, C = Math.cos(x), s = hs(m, s, F * C * -_), o = hs(m, o, -Math.sin(x) * -_), a = hs(m, a, E * C * -_ + _)
        }
        d !== ki && (v += "perspective(" + d + Rr), (n || i) && (v += "translate(" + n + "%, " + i + "%) "), (y || s !== ki || o !== ki || a !== ki) && (v += a !== ki || y ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Rr), u !== Br && (v += "rotate(" + u + Rr), l !== Br && (v += "rotateY(" + l + Rr), c !== Br && (v += "rotateX(" + c + Rr), (f !== Br || h !== Br) && (v += "skew(" + f + ", " + h + Rr), (1 !== D || 1 !== p) && (v += "scale(" + D + ", " + p + Rr), m.style[le] = v || "translate(0, 0)"
    },
    zl = function(t, e) {
        var r, n, i, s, o, a = e || this,
            u = a.xPercent,
            l = a.yPercent,
            c = a.x,
            f = a.y,
            h = a.rotation,
            D = a.skewX,
            p = a.skewY,
            d = a.scaleX,
            g = a.scaleY,
            m = a.target,
            _ = a.xOrigin,
            v = a.yOrigin,
            y = a.xOffset,
            C = a.yOffset,
            x = a.forceCSS,
            F = parseFloat(c),
            E = parseFloat(f);
        h = parseFloat(h), D = parseFloat(D), (p = parseFloat(p)) && (D += p = parseFloat(p), h += p), h || D ? (h *= hi, D *= hi, r = Math.cos(h) * d, n = Math.sin(h) * d, i = Math.sin(h - D) * -g, s = Math.cos(h - D) * g, D && (p *= hi, o = Math.tan(D - p), i *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), r *= o = Math.sqrt(1 + o * o), n *= o)), r = pe(r), n = pe(n), i = pe(i), s = pe(s)) : (r = d, s = g, n = i = 0), (F && !~(c + "").indexOf("px") || E && !~(f + "").indexOf("px")) && (F = Tr(m, "x", c, "px"), E = Tr(m, "y", f, "px")), (_ || v || y || C) && (F = pe(F + _ - (_ * r + v * i) + y), E = pe(E + v - (_ * n + v * s) + C)), (u || l) && (o = m.getBBox(), F = pe(F + u / 100 * o.width), E = pe(E + l / 100 * o.height)), o = "matrix(" + r + "," + n + "," + i + "," + s + "," + F + "," + E + ")", m.setAttribute("transform", o), x && (m.style[le] = o)
    },
    Il = function(t, e, r, n, i) {
        var s, o, a = 360,
            u = Ae(i),
            l = parseFloat(i) * (u && ~i.indexOf("rad") ? Lr : 1) - n,
            c = n + l + "deg";
        return u && ("short" === (s = i.split("_")[1]) && ((l %= a) !== l % 180 && (l += l < 0 ? a : -a)), "cw" === s && l < 0 ? l = (l + a * To) % a - ~~(l / a) * a : "ccw" === s && l > 0 && (l = (l - a * To) % a - ~~(l / a) * a)), t._pt = o = new ht(t._pt, e, r, n, l, xl), o.e = c, o.u = "deg", t._props.push(r), o
    },
    Mo = function(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    },
    Yl = function(t, e, r) {
        var n, i, s, o, a, u, l, c = Mo({}, r._gsap),
            f = r.style;
        for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[le] = e, n = sn(r, 1), rn(r, le), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[le], f[le] = e, n = sn(r, 1), f[le] = s), cr)(s = c[i]) !== (o = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = He(s) !== (l = He(o)) ? Tr(r, i, s, l) : parseFloat(s), u = parseFloat(o), t._pt = new ht(t._pt, n, i, a, u - a, As), t._pt.u = l || 0, t._props.push(i));
        Mo(n, c)
    };
ct("padding,margin,Width,Radius", (function(t, e) {
    var r = "Top",
        n = "Right",
        i = "Bottom",
        s = "Left",
        o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map((function(r) {
            return e < 2 ? t + r : "border" + r + t
        }));
    Wn[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
        var s, a;
        if (arguments.length < 4) return s = o.map((function(e) {
            return or(t, e, r)
        })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
        s = (n + "").split(" "), a = {}, o.forEach((function(t, e) {
            return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
        })), t.init(e, a, i)
    }
}));
var Ku = {
    name: "css",
    register: Ms,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, r, n, i) {
        var s, o, a, u, l, c, f, h, D, p, d, g, m, _, v, y, C = this._props,
            x = t.style,
            F = r.vars.startAt;
        for (f in so || Ms(), this.styles = this.styles || Uu(t), y = this.styles.props, this.tween = r, e)
            if ("autoRound" !== f && (o = e[f], !yt[f] || !Ou(f, e, r, n, t, i)))
                if (l = typeof o, c = Wn[f], "function" === l && (l = typeof(o = o.call(r, n, t, i))), "string" === l && ~o.indexOf("random(") && (o = en(o)), c) c(this, t, f, o, r) && (v = 1);
                else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), o += "", Er.lastIndex = 0, Er.test(s) || (h = He(s), D = He(o)), D ? h !== D && (s = Tr(t, f, s, D) + D) : h && (o += h), this.add(x, "setProperty", s, o, n, i, 0, 0, f), C.push(f), y.push(f, 0, x[f]);
        else if ("undefined" !== l) {
            if (F && f in F ? (s = "function" == typeof F[f] ? F[f].call(r, n, t, i) : F[f], Ae(s) && ~s.indexOf("random(") && (s = en(s)), He(s + "") || (s += bt.units[f] || He(or(t, f)) || ""), "=" === (s + "").charAt(1) && (s = or(t, f))) : s = or(t, f), u = parseFloat(s), (p = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), f in Qt && ("autoAlpha" === f && (1 === u && "hidden" === or(t, "visibility") && a && (u = 0), y.push("visibility", 0, x.visibility), Cr(this, x, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && (~(f = Qt[f]).indexOf(",") && (f = f.split(",")[0]))), d = f in cr)
                if (this.styles.save(f), g || ((m = t._gsap).renderTransform && !e.parseTransform || sn(t, e.parseTransform), _ = !1 !== e.smoothOrigin && m.smooth, (g = this._pt = new ht(this._pt, x, le, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === f) this._pt = new ht(this._pt, m, "scaleY", m.scaleY, (p ? fi(m.scaleY, p + a) : a) - m.scaleY || 0, As), this._pt.u = 0, C.push("scaleY", f), f += "X";
                else {
                    if ("transformOrigin" === f) {
                        y.push(Wt, 0, x[Wt]), o = Bl(o), m.svg ? Bs(t, o, 0, _, 0, this) : ((D = parseFloat(o.split(" ")[2]) || 0) !== m.zOrigin && Cr(this, m, "zOrigin", m.zOrigin, D), Cr(this, x, f, Hn(s), Hn(o)));
                        continue
                    }
                    if ("svgOrigin" === f) {
                        Bs(t, o, 1, _, 0, this);
                        continue
                    }
                    if (f in Gu) {
                        Il(this, m, f, u, p ? fi(u, p + o) : o);
                        continue
                    }
                    if ("smoothOrigin" === f) {
                        Cr(this, m, "smooth", m.smooth, o);
                        continue
                    }
                    if ("force3D" === f) {
                        m[f] = o;
                        continue
                    }
                    if ("transform" === f) {
                        Yl(this, o, t);
                        continue
                    }
                }
            else f in x || (f = xi(f) || f);
            if (d || (a || 0 === a) && (u || 0 === u) && !yl.test(o) && f in x) a || (a = 0), (h = (s + "").substr((u + "").length)) !== (D = He(o) || (f in bt.units ? bt.units[f] : h)) && (u = Tr(t, f, s, D)), this._pt = new ht(this._pt, d ? m : x, f, u, (p ? fi(u, p + a) : a) - u, d || "px" !== D && "zIndex" !== f || !1 === e.autoRound ? As : vl), this._pt.u = D || 0, h !== D && "%" !== D && (this._pt.b = s, this._pt.r = Fl);
            else if (f in x) Ml.call(this, t, f, s, p ? p + o : o);
            else if (f in t) this.add(t, f, s || t[f], p ? p + o : o, n, i);
            else if ("parseTransform" !== f) {
                Ks(f, o);
                continue
            }
            d || (f in x ? y.push(f, 0, x[f]) : y.push(f, 1, s || t[f])), C.push(f)
        }
        v && Iu(this)
    },
    render: function(t, e) {
        if (e.tween._time || !oo())
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
        else e.styles.revert()
    },
    get: or,
    aliases: Qt,
    getSetter: function(t, e, r) {
        var n = Qt[e];
        return n && n.indexOf(",") < 0 && (e = n), e in cr && e !== Wt && (t._gsap.x || or(t, "x")) ? r && wo === r ? "scale" === e ? Tl : wl : (wo = r || {}) && ("scale" === e ? Sl : Pl) : t.style && !Gs(t.style[e]) ? El : ~e.indexOf("-") ? bl : io(t, e)
    },
    core: {
        _removeProperty: rn,
        _getMatrix: ao
    }
};
_t.utils.checkPrefix = xi, _t.core.getStyleSaver = Uu,
    function(t, e, r, n) {
        var i = ct(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            cr[t] = 1
        }));
        ct(e, (function(t) {
            bt.units[t] = "deg", Gu[t] = 1
        })), Qt[i[13]] = t + "," + e, ct("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            Qt[e[1]] = i[e[0]]
        }))
    }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        bt.units[t] = "px"
    })), _t.registerPlugin(Ku);
var ge = _t.registerPlugin(Ku) || _t;

function Bo(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function Nl(t, e, r) {
    return e && Bo(t.prototype, e), r && Bo(t, r), t
}
/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
ge.core.Tween;
var Re, Rs, Et, yr, xr, _i, Zu, zr, Wi, Qu, ar, Xt, Ju, ea = function() {
        return Re || typeof window < "u" && (Re = window.gsap) && Re.registerPlugin && Re
    },
    ta = 1,
    ai = [],
    W = [],
    er = [],
    Hi = Date.now,
    Ls = function(t, e) {
        return e
    },
    Xl = function() {
        var t = Wi.core,
            e = t.bridge || {},
            r = t._scrollers,
            n = t._proxies;
        r.push.apply(r, W), n.push.apply(n, er), W = r, er = n, Ls = function(t, r) {
            return e[t](r)
        }
    },
    br = function(t, e) {
        return ~er.indexOf(t) && er[er.indexOf(t) + 1][e]
    },
    Gi = function(t) {
        return !!~Qu.indexOf(t)
    },
    ut = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    },
    rt = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    },
    fn = "scrollLeft",
    cn = "scrollTop",
    zs = function() {
        return ar && ar.isPressed || W.cache++
    },
    Gn = function(t, e) {
        var r = function r(n) {
            if (n || 0 === n) {
                ta && (Et.history.scrollRestoration = "manual");
                var i = ar && ar.isPressed;
                n = r.v = Math.round(n) || (ar && ar.iOS ? 1 : 0), t(n), r.cacheID = W.cache, i && Ls("ss", n)
            } else(e || W.cache !== r.cacheID || Ls("ref")) && (r.cacheID = W.cache, r.v = t());
            return r.v + r.offset
        };
        return r.offset = 0, t && r
    },
    st = {
        s: fn,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Gn((function(t) {
            return arguments.length ? Et.scrollTo(t, ve.sc()) : Et.pageXOffset || yr[fn] || xr[fn] || _i[fn] || 0
        }))
    },
    ve = {
        s: cn,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: st,
        sc: Gn((function(t) {
            return arguments.length ? Et.scrollTo(st.sc(), t) : Et.pageYOffset || yr[cn] || xr[cn] || _i[cn] || 0
        }))
    },
    at = function(t) {
        return Re.utils.toArray(t)[0] || ("string" == typeof t && !1 !== Re.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    },
    Sr = function(t, e) {
        var r = e.s,
            n = e.sc;
        Gi(t) && (t = yr.scrollingElement || xr);
        var i = W.indexOf(t),
            s = n === ve.sc ? 1 : 2;
        !~i && (i = W.push(t) - 1), W[i + s] || t.addEventListener("scroll", zs);
        var o = W[i + s],
            a = o || (W[i + s] = Gn(br(t, r), !0) || (Gi(t) ? n : Gn((function(e) {
                return arguments.length ? t[r] = e : t[r]
            }))));
        return a.target = t, o || (a.smooth = "smooth" === Re.getProperty(t, "scrollBehavior")), a
    },
    Is = function(t, e, r) {
        var n = t,
            i = t,
            s = Hi(),
            o = s,
            a = e || 50,
            u = Math.max(500, 3 * a),
            l = function(t, e) {
                var u = Hi();
                e || u - s > a ? (i = n, n = t, o = s, s = u) : r ? n += t : n = i + (t - i) / (u - o) * (s - o)
            };
        return {
            update: l,
            reset: function() {
                i = n = r ? 0 : n, o = s = 0
            },
            getVelocity: function(t) {
                var e = o,
                    a = i,
                    c = Hi();
                return (t || 0 === t) && t !== n && l(t), s === o || c - o > u ? 0 : (n + (r ? a : -a)) / ((r ? c : s) - e) * 1e3
            }
        }
    },
    Ai = function(t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    },
    Ro = function(t) {
        var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r
    },
    ra = function() {
        (Wi = Re.core.globals().ScrollTrigger) && Wi.core && Xl()
    },
    ia = function(t) {
        return (Re = t || ea()) && typeof document < "u" && document.body && (Et = window, yr = document, xr = yr.documentElement, _i = yr.body, Qu = [Et, yr, xr, _i], Re.utils.clamp, Ju = Re.core.context || function() {}, zr = "onpointerenter" in _i ? "pointer" : "mouse", Zu = xe.isTouch = Et.matchMedia && Et.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Et || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Xt = xe.eventTypes = ("ontouchstart" in xr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in xr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
            return ta = 0
        }), 500), ra(), Rs = 1), Rs
    };
st.op = ve, W.cache = 0;
var xe = function() {
    function t(t) {
        this.init(t)
    }
    return t.prototype.init = function(t) {
        Rs || ia(Re) || console.warn("Please gsap.registerPlugin(Observer)"), Wi || ra();
        var e = t.tolerance,
            r = t.dragMinimum,
            n = t.type,
            i = t.target,
            s = t.lineHeight,
            o = t.debounce,
            a = t.preventDefault,
            u = t.onStop,
            l = t.onStopDelay,
            c = t.ignore,
            f = t.wheelSpeed,
            h = t.event,
            D = t.onDragStart,
            p = t.onDragEnd,
            d = t.onDrag,
            g = t.onPress,
            m = t.onRelease,
            _ = t.onRight,
            v = t.onLeft,
            y = t.onUp,
            C = t.onDown,
            x = t.onChangeX,
            F = t.onChangeY,
            E = t.onChange,
            b = t.onToggleX,
            w = t.onToggleY,
            A = t.onHover,
            T = t.onHoverEnd,
            k = t.onMove,
            B = t.ignoreCheck,
            M = t.isNormalizer,
            S = t.onGestureStart,
            P = t.onGestureEnd,
            O = t.onWheel,
            R = t.onEnable,
            z = t.onDisable,
            X = t.onClick,
            U = t.scrollSpeed,
            L = t.capture,
            Y = t.allowClicks,
            V = t.lockAxis,
            W = t.onLockAxis;
        this.target = i = at(i) || xr, this.vars = t, c && (c = Re.utils.toArray(c)), e = e || 1e-9, r = r || 0, f = f || 1, U = U || 1, n = n || "wheel,touch,pointer", o = !1 !== o, s || (s = parseFloat(Et.getComputedStyle(_i).lineHeight) || 22);
        var I, N, G, q, H, K, $, j = this,
            Q = 0,
            Z = 0,
            J = Sr(i, st),
            tt = Sr(i, ve),
            et = J(),
            nt = tt(),
            it = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === Xt[0],
            ot = Gi(i),
            lt = i.ownerDocument || yr,
            ct = [0, 0, 0],
            ft = [0, 0, 0],
            ht = 0,
            Dt = function() {
                return ht = Hi()
            },
            pt = function(t, e) {
                return (j.event = t) && c && ~c.indexOf(t.target) || e && it && "touch" !== t.pointerType || B && B(t, e)
            },
            dt = function() {
                var t = j.deltaX = Ro(ct),
                    r = j.deltaY = Ro(ft),
                    n = Math.abs(t) >= e,
                    i = Math.abs(r) >= e;
                E && (n || i) && E(j, t, r, ct, ft), n && (_ && j.deltaX > 0 && _(j), v && j.deltaX < 0 && v(j), x && x(j), b && j.deltaX < 0 != Q < 0 && b(j), Q = j.deltaX, ct[0] = ct[1] = ct[2] = 0), i && (C && j.deltaY > 0 && C(j), y && j.deltaY < 0 && y(j), F && F(j), w && j.deltaY < 0 != Z < 0 && w(j), Z = j.deltaY, ft[0] = ft[1] = ft[2] = 0), (q || G) && (k && k(j), G && (d(j), G = !1), q = !1), K && !(K = !1) && W && W(j), H && (O(j), H = !1), I = 0
            },
            gt = function(t, e, r) {
                ct[r] += t, ft[r] += e, j._vx.update(t), j._vy.update(e), o ? I || (I = requestAnimationFrame(dt)) : dt()
            },
            mt = function(t, e) {
                V && !$ && (j.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y", K = !0), "y" !== $ && (ct[2] += t, j._vx.update(t, !0)), "x" !== $ && (ft[2] += e, j._vy.update(e, !0)), o ? I || (I = requestAnimationFrame(dt)) : dt()
            },
            _t = function(t) {
                if (!pt(t, 1)) {
                    var e = (t = Ai(t, a)).clientX,
                        n = t.clientY,
                        i = e - j.x,
                        s = n - j.y,
                        o = j.isDragging;
                    j.x = e, j.y = n, (o || Math.abs(j.startX - e) >= r || Math.abs(j.startY - n) >= r) && (d && (G = !0), o || (j.isDragging = !0), mt(i, s), o || D && D(j))
                }
            },
            vt = j.onPress = function(t) {
                pt(t, 1) || t && t.button || (j.axis = $ = null, N.pause(), j.isPressed = !0, t = Ai(t), Q = Z = 0, j.startX = j.x = t.clientX, j.startY = j.y = t.clientY, j._vx.reset(), j._vy.reset(), ut(M ? i : lt, Xt[1], _t, a, !0), j.deltaX = j.deltaY = 0, g && g(j))
            },
            yt = j.onRelease = function(t) {
                if (!pt(t, 1)) {
                    rt(M ? i : lt, Xt[1], _t, !0);
                    var e = !isNaN(j.y - j.startY),
                        r = j.isDragging && (Math.abs(j.x - j.startX) > 3 || Math.abs(j.y - j.startY) > 3),
                        n = Ai(t);
                    !r && e && (j._vx.reset(), j._vy.reset(), a && Y && Re.delayedCall(.08, (function() {
                        if (Hi() - ht > 300 && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (lt.createEvent) {
                            var e = lt.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Et, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    }))), j.isDragging = j.isGesturing = j.isPressed = !1, u && !M && N.restart(!0), p && r && p(j), m && m(j, r)
                }
            },
            Ct = function(t) {
                return t.touches && t.touches.length > 1 && (j.isGesturing = !0) && S(t, j.isDragging)
            },
            xt = function() {
                return (j.isGesturing = !1) || P(j)
            },
            Ft = function(t) {
                if (!pt(t)) {
                    var e = J(),
                        r = tt();
                    gt((e - et) * U, (r - nt) * U, 1), et = e, nt = r, u && N.restart(!0)
                }
            },
            bt = function(t) {
                if (!pt(t)) {
                    t = Ai(t, a), O && (H = !0);
                    var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? Et.innerHeight : 1) * f;
                    gt(t.deltaX * e, t.deltaY * e, 0), u && !M && N.restart(!0)
                }
            },
            wt = function(t) {
                if (!pt(t)) {
                    var e = t.clientX,
                        r = t.clientY,
                        n = e - j.x,
                        i = r - j.y;
                    j.x = e, j.y = r, q = !0, (n || i) && mt(n, i)
                }
            },
            At = function(t) {
                j.event = t, A(j)
            },
            Tt = function(t) {
                j.event = t, T(j)
            },
            kt = function(t) {
                return pt(t) || Ai(t, a) && X(j)
            };
        N = j._dc = Re.delayedCall(l || .25, (function() {
            j._vx.reset(), j._vy.reset(), N.pause(), u && u(j)
        })).pause(), j.deltaX = j.deltaY = 0, j._vx = Is(0, 50, !0), j._vy = Is(0, 50, !0), j.scrollX = J, j.scrollY = tt, j.isDragging = j.isGesturing = j.isPressed = !1, Ju(this), j.enable = function(t) {
            return j.isEnabled || (ut(ot ? lt : i, "scroll", zs), n.indexOf("scroll") >= 0 && ut(ot ? lt : i, "scroll", Ft, a, L), n.indexOf("wheel") >= 0 && ut(i, "wheel", bt, a, L), (n.indexOf("touch") >= 0 && Zu || n.indexOf("pointer") >= 0) && (ut(i, Xt[0], vt, a, L), ut(lt, Xt[2], yt), ut(lt, Xt[3], yt), Y && ut(i, "click", Dt, !1, !0), X && ut(i, "click", kt), S && ut(lt, "gesturestart", Ct), P && ut(lt, "gestureend", xt), A && ut(i, zr + "enter", At), T && ut(i, zr + "leave", Tt), k && ut(i, zr + "move", wt)), j.isEnabled = !0, t && t.type && vt(t), R && R(j)), j
        }, j.disable = function() {
            j.isEnabled && (ai.filter((function(t) {
                return t !== j && Gi(t.target)
            })).length || rt(ot ? lt : i, "scroll", zs), j.isPressed && (j._vx.reset(), j._vy.reset(), rt(M ? i : lt, Xt[1], _t, !0)), rt(ot ? lt : i, "scroll", Ft, L), rt(i, "wheel", bt, L), rt(i, Xt[0], vt, L), rt(lt, Xt[2], yt), rt(lt, Xt[3], yt), rt(i, "click", Dt, !0), rt(i, "click", kt), rt(lt, "gesturestart", Ct), rt(lt, "gestureend", xt), rt(i, zr + "enter", At), rt(i, zr + "leave", Tt), rt(i, zr + "move", wt), j.isEnabled = j.isPressed = j.isDragging = !1, z && z(j))
        }, j.kill = j.revert = function() {
            j.disable();
            var t = ai.indexOf(j);
            t >= 0 && ai.splice(t, 1), ar === j && (ar = 0)
        }, ai.push(j), M && Gi(i) && (ar = j), j.enable(h)
    }, Nl(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), t
}();
xe.version = "3.11.5", xe.create = function(t) {
    return new xe(t)
}, xe.register = ia, xe.getAll = function() {
    return ai.slice()
}, xe.getById = function(t) {
    return ai.filter((function(e) {
        return e.vars.id === t
    }))[0]
}, ea() && Re.registerPlugin(xe);
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var A, ni, G, se, Ut, ce, na, qn, jn, li, bn, hn, Ye, ts, Ys, it, Lo, zo, si, sa, _s, oa, mt, ua, aa, la, pr, Ns, lo, ds, on, xt, Uo, Qi, _n = 1,
    nt = Date.now,
    Ds = nt(),
    Rt = 0,
    Li = 0,
    Vl = function t() {
        return Li && requestAnimationFrame(t)
    },
    Io = function() {
        return ts = 1
    },
    Yo = function() {
        return ts = 0
    },
    Kt = function(t) {
        return t
    },
    zi = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    },
    fa = function() {
        return typeof window < "u"
    },
    ca = function() {
        return A || fa() && (A = window.gsap) && A.registerPlugin && A
    },
    Gr = function(t) {
        return !!~na.indexOf(t)
    },
    ha = function(t) {
        return br(t, "getBoundingClientRect") || (Gr(t) ? function() {
            return An.width = G.innerWidth, An.height = G.innerHeight, An
        } : function() {
            return ur(t)
        })
    },
    Ul = function(t, e, r) {
        var n = r.d,
            i = r.d2,
            s = r.a;
        return (s = br(t, "getBoundingClientRect")) ? function() {
            return s()[n]
        } : function() {
            return (e ? G["inner" + i] : t["client" + i]) || 0
        }
    },
    $l = function(t, e) {
        return !e || ~er.indexOf(t) ? ha(t) : function() {
            return An
        }
    },
    Fr = function(t, e) {
        var r = e.s,
            n = e.d2,
            i = e.d,
            s = e.a;
        return Math.max(0, (r = "scroll" + n) && (s = br(t, r)) ? s() - ha(t)()[i] : Gr(t) ? (Ut[r] || ce[r]) - (G["inner" + n] || Ut["client" + n] || ce["client" + n]) : t[r] - t["offset" + n])
    },
    dn = function(t, e) {
        for (var r = 0; r < si.length; r += 3)(!e || ~e.indexOf(si[r + 1])) && t(si[r], si[r + 1], si[r + 2])
    },
    Vt = function(t) {
        return "string" == typeof t
    },
    ot = function(t) {
        return "function" == typeof t
    },
    Ii = function(t) {
        return "number" == typeof t
    },
    wn = function(t) {
        return "object" == typeof t
    },
    Oi = function(t, e, r) {
        return t && t.progress(e ? 0 : 1) && r && t.pause()
    },
    ps = function(t, e) {
        if (t.enabled) {
            var r = e(t);
            r && r.totalTime && (t.callbackAnimation = r)
        }
    },
    ri = Math.abs,
    _a = "left",
    da = "top",
    fo = "right",
    co = "bottom",
    Ur = "width",
    $r = "height",
    qi = "Right",
    ji = "Left",
    Ki = "Top",
    Zi = "Bottom",
    De = "padding",
    At = "margin",
    Fi = "Width",
    ho = "Height",
    Me = "px",
    $t = function(t) {
        return G.getComputedStyle(t)
    },
    Wl = function(t) {
        var e = $t(t).position;
        t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
    },
    No = function(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    },
    ur = function(t, e) {
        var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== $t(t)[Ys] && A.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            n = t.getBoundingClientRect();
        return r && r.progress(0).kill(), n
    },
    Xs = function(t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0
    },
    Da = function(t) {
        var e, r = [],
            n = t.labels,
            i = t.duration();
        for (e in n) r.push(n[e] / i);
        return r
    },
    Hl = function(t) {
        return function(e) {
            return A.utils.snap(Da(t), e)
        }
    },
    _o = function(t) {
        var e = A.utils.snap(t),
            r = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                return t - e
            }));
        return r ? function(t, n, i) {
            var s;
            if (void 0 === i && (i = .001), !n) return e(t);
            if (n > 0) {
                for (t -= i, s = 0; s < r.length; s++)
                    if (r[s] >= t) return r[s];
                return r[s - 1]
            }
            for (s = r.length, t += i; s--;)
                if (r[s] <= t) return r[s];
            return r[0]
        } : function(r, n, i) {
            void 0 === i && (i = .001);
            var s = e(r);
            return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
        }
    },
    Gl = function(t) {
        return function(e, r) {
            return _o(Da(t))(e, r.direction)
        }
    },
    Dn = function(t, e, r, n) {
        return r.split(",").forEach((function(r) {
            return t(e, r, n)
        }))
    },
    ke = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    },
    Pe = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    },
    pn = function(t, e, r) {
        (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
    },
    Xo = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    gn = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Kn = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    Tn = function(t, e) {
        if (Vt(t)) {
            var r = t.indexOf("="),
                n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in Kn ? Kn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    },
    mn = function(t, e, r, n, i, s, o, a) {
        var u = i.startColor,
            l = i.endColor,
            c = i.fontSize,
            f = i.indent,
            h = i.fontWeight,
            D = se.createElement("div"),
            p = Gr(r) || "fixed" === br(r, "pinType"),
            d = -1 !== t.indexOf("scroller"),
            g = p ? ce : r,
            m = -1 !== t.indexOf("start"),
            _ = m ? u : l,
            v = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return v += "position:" + ((d || a) && p ? "fixed;" : "absolute;"), (d || a || !p) && (v += (n === ve ? fo : co) + ":" + (s + parseFloat(f)) + "px;"), o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), D._isStart = m, D.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), D.style.cssText = v, D.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(D, g.children[0]) : g.appendChild(D), D._offset = D["offset" + n.op.d2], Sn(D, 0, n, m), D
    },
    Sn = function(t, e, r, n) {
        var i = {
                display: "block"
            },
            s = r[n ? "os2" : "p2"],
            o = r[n ? "p2" : "os2"];
        t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + Fi] = 1, i["border" + o + Fi] = 0, i[r.p] = e + "px", A.set(t, i)
    },
    V = [],
    Vs = {},
    Vo = function() {
        return nt() - Rt > 34 && (on || (on = requestAnimationFrame(lr)))
    },
    ii = function() {
        (!mt || !mt.isPressed || mt.startX > ce.clientWidth) && (W.cache++, mt ? on || (on = requestAnimationFrame(lr)) : lr(), Rt || jr("scrollStart"), Rt = nt())
    },
    gs = function() {
        la = G.innerWidth, aa = G.innerHeight
    },
    Yi = function() {
        W.cache++, !Ye && !oa && !se.fullscreenElement && !se.webkitFullscreenElement && (!ua || la !== G.innerWidth || Math.abs(G.innerHeight - aa) > .25 * G.innerHeight) && qn.restart(!0)
    },
    qr = {},
    ql = [],
    pa = function t() {
        return Pe(z, "scrollEnd", t) || Yr(!0)
    },
    jr = function(t) {
        return qr[t] && qr[t].map((function(t) {
            return t()
        })) || ql
    },
    Ct = [],
    ga = function(t) {
        for (var e = 0; e < Ct.length; e += 5)(!t || Ct[e + 4] && Ct[e + 4].query === t) && (Ct[e].style.cssText = Ct[e + 1], Ct[e].getBBox && Ct[e].setAttribute("transform", Ct[e + 2] || ""), Ct[e + 3].uncache = 1)
    },
    Do = function(t, e) {
        var r;
        for (it = 0; it < V.length; it++)(r = V[it]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
        e && ga(e), e || jr("revert")
    },
    ma = function(t, e) {
        W.cache++, (e || !xt) && W.forEach((function(t) {
            return ot(t) && t.cacheID++ && (t.rec = 0)
        })), Vt(t) && (G.history.scrollRestoration = lo = t)
    },
    Wr = 0,
    jl = function() {
        if (Uo !== Wr) {
            var t = Uo = Wr;
            requestAnimationFrame((function() {
                return t === Wr && Yr(!0)
            }))
        }
    },
    Yr = function(t, e) {
        if (!Rt || t) {
            xt = z.isRefreshing = !0, W.forEach((function(t) {
                return ot(t) && t.cacheID++ && (t.rec = t())
            }));
            var r = jr("refreshInit");
            sa && z.sort(), e || Do(), W.forEach((function(t) {
                ot(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
            })), V.slice(0).forEach((function(t) {
                return t.refresh()
            })), V.forEach((function(t, e) {
                if (t._subPinOffset && t.pin) {
                    var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        n = t.pin[r];
                    t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - n), t.refresh()
                }
            })), V.forEach((function(t) {
                return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, Fr(t.scroller, t._dir)))
            })), r.forEach((function(t) {
                return t && t.render && t.render(-1)
            })), W.forEach((function(t) {
                ot(t) && (t.smooth && requestAnimationFrame((function() {
                    return t.target.style.scrollBehavior = "smooth"
                })), t.rec && t(t.rec))
            })), ma(lo, 1), qn.pause(), Wr++, xt = 2, lr(2), V.forEach((function(t) {
                return ot(t.vars.onRefresh) && t.vars.onRefresh(t)
            })), xt = z.isRefreshing = !1, jr("refresh")
        } else ke(z, "scrollEnd", pa)
    },
    Us = 0,
    Pn = 1,
    lr = function(t) {
        if (!xt || 2 === t) {
            z.isUpdating = !0, Qi && Qi.update(0);
            var e = V.length,
                r = nt(),
                n = r - Ds >= 50,
                i = e && V[0].scroll();
            if (Pn = Us > i ? -1 : 1, xt || (Us = i), n && (Rt && !ts && r - Rt > 200 && (Rt = 0, jr("scrollEnd")), bn = Ds, Ds = r), Pn < 0) {
                for (it = e; it-- > 0;) V[it] && V[it].update(0, n);
                Pn = 1
            } else
                for (it = 0; it < e; it++) V[it] && V[it].update(0, n);
            z.isUpdating = !1
        }
        on = 0
    },
    $s = [_a, da, co, fo, At + Zi, At + qi, At + Ki, At + ji, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    kn = $s.concat([Ur, $r, "boxSizing", "max" + Fi, "max" + ho, "position", At, De, De + Ki, De + qi, De + Zi, De + ji]),
    Kl = function(t, e, r) {
        di(r);
        var n = t._gsap;
        if (n.spacerIsNative) di(n.spacerState);
        else if (t._gsap.swappedIn) {
            var i = e.parentNode;
            i && (i.insertBefore(t, e), i.removeChild(e))
        }
        t._gsap.swappedIn = !1
    },
    ms = function(t, e, r, n) {
        if (!t._gsap.swappedIn) {
            for (var i, s = $s.length, o = e.style, a = t.style; s--;) o[i = $s[s]] = r[i];
            o.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (o.display = "inline-block"), a[co] = a[fo] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Ur] = Xs(t, st) + Me, o[$r] = Xs(t, ve) + Me, o[De] = a[At] = a[da] = a[_a] = "0", di(n), a[Ur] = a["max" + Fi] = r[Ur], a[$r] = a["max" + ho] = r[$r], a[De] = r[De], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
        }
    },
    Zl = /([A-Z])/g,
    di = function(t) {
        if (t) {
            var e, r, n = t.t.style,
                i = t.length,
                s = 0;
            for ((t.t._gsap || A.core.getCache(t.t)).uncache = 1; s < i; s += 2) r = t[s + 1], e = t[s], r ? n[e] = r : n[e] && n.removeProperty(e.replace(Zl, "-$1").toLowerCase())
        }
    },
    Cn = function(t) {
        for (var e = kn.length, r = t.style, n = [], i = 0; i < e; i++) n.push(kn[i], r[kn[i]]);
        return n.t = t, n
    },
    Ql = function(t, e, r) {
        for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2) n = t[o], i.push(n, n in e ? e[n] : t[o + 1]);
        return i.t = t.t, i
    },
    An = {
        left: 0,
        top: 0
    },
    $o = function(t, e, r, n, i, s, o, a, u, l, c, f, h) {
        ot(t) && (t = t(a)), Vt(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Tn("0" + t.substr(3), r) : 0));
        var D, p, d, g = h ? h.time() : 0;
        if (h && h.seek(0), Ii(t)) h && (t = A.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)), o && Sn(o, r, n, !0);
        else {
            ot(e) && (e = e(a));
            var m, _, v, y, C = (t || "0").split(" ");
            d = at(e) || ce, (!(m = ur(d) || {}) || !m.left && !m.top) && "none" === $t(d).display && (y = d.style.display, d.style.display = "block", m = ur(d), y ? d.style.display = y : d.style.removeProperty("display")), _ = Tn(C[0], m[n.d]), v = Tn(C[1] || "0", r), t = m[n.p] - u[n.p] - l + _ + i - v, o && Sn(o, v, n, r - v < 20 || o._isStart && v > 20), r -= r - v
        }
        if (s) {
            var x = t + r,
                F = s._isStart;
            D = "scroll" + n.d2, Sn(s, x, n, F && x > 20 || !F && (c ? Math.max(ce[D], Ut[D]) : s.parentNode[D]) <= x + 1), c && (u = ur(o), c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + Me))
        }
        return h && d && (D = ur(d), h.seek(f), p = ur(d), h._caScrollDist = D[n.p] - p[n.p], t = t / h._caScrollDist * f), h && h.seek(g), h ? t : Math.round(t)
    },
    Jl = /(webkit|moz|length|cssText|inset)/i,
    Wo = function(t, e, r, n) {
        if (t.parentNode !== e) {
            var i, s, o = t.style;
            if (e === ce) {
                for (i in t._stOrig = o.cssText, s = $t(t)) !+i && !Jl.test(i) && s[i] && "string" == typeof o[i] && "0" !== i && (o[i] = s[i]);
                o.top = r, o.left = n
            } else o.cssText = t._stOrig;
            A.core.getCache(t).uncache = 1, e.appendChild(t)
        }
    },
    Ca = function(t, e, r) {
        var n = e,
            i = n;
        return function(e) {
            var s = Math.round(t());
            return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (e = s, r && r()), i = n, n = e, e
        }
    },
    Ho = function(t, e) {
        var r = Sr(t, e),
            n = "_scroll" + e.p2,
            i = function e(i, s, o, a, u) {
                var l = e.tween,
                    c = s.onComplete,
                    f = {};
                o = o || r();
                var h = Ca(r, o, (function() {
                    l.kill(), e.tween = 0
                }));
                return u = a && u || 0, a = a || i - o, l && l.kill(), s[n] = i, s.modifiers = f, f[n] = function() {
                    return h(o + a * l.ratio + u * l.ratio * l.ratio)
                }, s.onUpdate = function() {
                    W.cache++, lr()
                }, s.onComplete = function() {
                    e.tween = 0, c && c.call(l)
                }, l = e.tween = A.to(t, s)
            };
        return t[n] = r, r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
        }, ke(t, "wheel", r.wheelHandler), z.isTouch && ke(t, "touchmove", r.wheelHandler), i
    },
    z = function() {
        function t(e, r) {
            ni || t.register(A) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, r)
        }
        return t.prototype.init = function(e, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Li) {
                var n, i, s, o, a, u, l, c, f, h, D, p, d, g, m, _, v, y, C, x, F, E, b, w, T, k, B, M, S, P, O, R, z, X, U, L, Y, I, N, q = e = No(Vt(e) || Ii(e) || e.nodeType ? {
                        trigger: e
                    } : e, gn),
                    H = q.onUpdate,
                    K = q.toggleClass,
                    $ = q.id,
                    j = q.onToggle,
                    Q = q.onRefresh,
                    Z = q.scrub,
                    J = q.trigger,
                    tt = q.pin,
                    et = q.pinSpacing,
                    rt = q.invalidateOnRefresh,
                    ut = q.anticipatePin,
                    lt = q.onScrubComplete,
                    ct = q.onSnapComplete,
                    ft = q.once,
                    ht = q.snap,
                    Dt = q.pinReparent,
                    pt = q.pinSpacer,
                    dt = q.containerAnimation,
                    gt = q.fastScrollEnd,
                    mt = q.preventOverlaps,
                    _t = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? st : ve,
                    vt = !Z && 0 !== Z,
                    yt = at(e.scroller || G),
                    Ct = A.core.getCache(yt),
                    Ft = Gr(yt),
                    Et = "fixed" === ("pinType" in e ? e.pinType : br(yt, "pinType") || Ft && "fixed"),
                    bt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    wt = vt && e.toggleActions.split(" "),
                    Tt = "markers" in e ? e.markers : gn.markers,
                    kt = Ft ? 0 : parseFloat($t(yt)["border" + _t.p2 + Fi]) || 0,
                    Bt = this,
                    Mt = e.onRefreshInit && function() {
                        return e.onRefreshInit(Bt)
                    },
                    St = Ul(yt, Ft, _t),
                    Pt = $l(yt, Ft),
                    Ot = 0,
                    zt = 0,
                    Xt = Sr(yt, _t);
                if (Ns(Bt), Bt._dir = _t, ut *= 45, Bt.scroller = yt, Bt.scroll = dt ? dt.time.bind(dt) : Xt, o = Xt(), Bt.vars = e, r = r || e.animation, "refreshPriority" in e && (sa = 1, -9999 === e.refreshPriority && (Qi = Bt)), Ct.tweenScroll = Ct.tweenScroll || {
                        top: Ho(yt, ve),
                        left: Ho(yt, st)
                    }, Bt.tweenTo = n = Ct.tweenScroll[_t.p], Bt.scrubDuration = function(t) {
                        (R = Ii(t) && t) ? O ? O.duration(t) : O = A.to(r, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: R,
                            paused: !0,
                            onComplete: function() {
                                return lt && lt(Bt)
                            }
                        }): (O && O.progress(1).kill(), O = 0)
                    }, r && (r.vars.lazy = !1, r._initted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), Bt.animation = r.pause(), r.scrollTrigger = Bt, Bt.scrubDuration(Z), O && O.resetTo && O.resetTo("totalProgress", 0), S = 0, $ || ($ = r.vars.id)), V.push(Bt), ht && ((!wn(ht) || ht.push) && (ht = {
                        snapTo: ht
                    }), "scrollBehavior" in ce.style && A.set(Ft ? [ce, Ut] : yt, {
                        scrollBehavior: "auto"
                    }), W.forEach((function(t) {
                        return ot(t) && t.target === (Ft ? se.scrollingElement || Ut : yt) && (t.smooth = !1)
                    })), s = ot(ht.snapTo) ? ht.snapTo : "labels" === ht.snapTo ? Hl(r) : "labelsDirectional" === ht.snapTo ? Gl(r) : !1 !== ht.directional ? function(t, e) {
                        return _o(ht.snapTo)(t, nt() - zt < 500 ? 0 : e.direction)
                    } : A.utils.snap(ht.snapTo), z = ht.duration || {
                        min: .1,
                        max: 2
                    }, z = wn(z) ? li(z.min, z.max) : li(z, z), X = A.delayedCall(ht.delay || R / 2 || .1, (function() {
                        var t = Xt(),
                            e = nt() - zt < 500,
                            i = n.tween;
                        if (!(e || Math.abs(Bt.getVelocity()) < 10) || i || ts || Ot === t) Bt.isActive && Ot !== t && X.restart(!0);
                        else {
                            var o = (t - u) / d,
                                a = r && !vt ? r.totalProgress() : o,
                                c = e ? 0 : (a - P) / (nt() - bn) * 1e3 || 0,
                                f = A.utils.clamp(-o, 1 - o, ri(c / 2) * c / .185),
                                h = o + (!1 === ht.inertia ? 0 : f),
                                D = li(0, 1, s(h, Bt)),
                                p = Math.round(u + D * d),
                                g = ht,
                                m = g.onStart,
                                _ = g.onInterrupt,
                                v = g.onComplete;
                            if (t <= l && t >= u && p !== t) {
                                if (i && !i._initted && i.data <= ri(p - t)) return;
                                !1 === ht.inertia && (f = D - o), n(p, {
                                    duration: z(ri(.185 * Math.max(ri(h - a), ri(D - a)) / c / .05 || 0)),
                                    ease: ht.ease || "power3",
                                    data: ri(p - t),
                                    onInterrupt: function() {
                                        return X.restart(!0) && _ && _(Bt)
                                    },
                                    onComplete: function() {
                                        Bt.update(), Ot = Xt(), S = P = r && !vt ? r.totalProgress() : Bt.progress, ct && ct(Bt), v && v(Bt)
                                    }
                                }, t, f * d, p - t - f * d), m && m(Bt, n.tween)
                            }
                        }
                    })).pause()), $ && (Vs[$] = Bt), (N = (J = Bt.trigger = at(J || tt)) && J._gsap && J._gsap.stRevert) && (N = N(Bt)), tt = !0 === tt ? J : at(tt), Vt(K) && (K = {
                        targets: J,
                        className: K
                    }), tt && (!1 === et || et === At || (et = !(!et && tt.parentNode && tt.parentNode.style && "flex" === $t(tt.parentNode).display) && De), Bt.pin = tt, (i = A.core.getCache(tt)).spacer ? g = i.pinState : (pt && ((pt = at(pt)) && !pt.nodeType && (pt = pt.current || pt.nativeElement), i.spacerIsNative = !!pt, pt && (i.spacerState = Cn(pt))), i.spacer = v = pt || se.createElement("div"), v.classList.add("pin-spacer"), $ && v.classList.add("pin-spacer-" + $), i.pinState = g = Cn(tt)), !1 !== e.force3D && A.set(tt, {
                        force3D: !0
                    }), Bt.spacer = v = i.spacer, M = $t(tt), b = M[et + _t.os2], C = A.getProperty(tt), x = A.quickSetter(tt, _t.a, Me), ms(tt, v, M), _ = Cn(tt)), Tt) {
                    p = wn(Tt) ? No(Tt, Xo) : Xo, h = mn("scroller-start", $, yt, _t, p, 0), D = mn("scroller-end", $, yt, _t, p, 0, h), y = h["offset" + _t.op.d2];
                    var Lt = at(br(yt, "content") || yt);
                    c = this.markerStart = mn("start", $, Lt, _t, p, y, 0, dt), f = this.markerEnd = mn("end", $, Lt, _t, p, y, 0, dt), dt && (I = A.quickSetter([c, f], _t.a, Me)), !Et && (!er.length || !0 !== br(yt, "fixedMarkers")) && (Wl(Ft ? ce : yt), A.set([h, D], {
                        force3D: !0
                    }), T = A.quickSetter(h, _t.a, Me), B = A.quickSetter(D, _t.a, Me))
                }
                if (dt) {
                    var Yt = dt.vars.onUpdate,
                        Wt = dt.vars.onUpdateParams;
                    dt.eventCallback("onUpdate", (function() {
                        Bt.update(0, 0, 1), Yt && Yt.apply(dt, Wt || [])
                    }))
                }
                Bt.previous = function() {
                    return V[V.indexOf(Bt) - 1]
                }, Bt.next = function() {
                    return V[V.indexOf(Bt) + 1]
                }, Bt.revert = function(t, e) {
                    if (!e) return Bt.kill(!0);
                    var n = !1 !== t || !Bt.enabled,
                        i = Ye;
                    n !== Bt.isReverted && (n && (L = Math.max(Xt(), Bt.scroll.rec || 0), U = Bt.progress, Y = r && r.progress()), c && [c, f, h, D].forEach((function(t) {
                        return t.style.display = n ? "none" : "block"
                    })), n && (Ye = Bt, Bt.update(n)), tt && (!Dt || !Bt.isActive) && (n ? Kl(tt, v, g) : ms(tt, v, $t(tt), w)), n || Bt.update(n), Ye = i, Bt.isReverted = n)
                }, Bt.refresh = function(i, s) {
                    if (!Ye && Bt.enabled || s) {
                        if (tt && i && Rt) return void ke(t, "scrollEnd", pa);
                        !xt && Mt && Mt(Bt), Ye = Bt, zt = nt(), n.tween && (n.tween.kill(), n.tween = 0), O && O.pause(), rt && r && r.revert({
                            kill: !1
                        }).invalidate(), Bt.isReverted || Bt.revert(!0, !0), Bt._subPinOffset = !1;
                        for (var p, y, x, b, T, B, M, S, P, R, z, W = St(), I = Pt(), N = dt ? dt.duration() : Fr(yt, _t), G = d <= .01, q = 0, H = 0, K = e.end, $ = e.endTrigger || J, j = e.start || (0 !== e.start && J ? tt ? "0 0" : "0 100%" : 0), Z = Bt.pinnedContainer = e.pinnedContainer && at(e.pinnedContainer), it = J && Math.max(0, V.indexOf(Bt)) || 0, ut = it; ut--;)(B = V[ut]).end || B.refresh(0, 1) || (Ye = Bt), (M = B.pin) && (M === J || M === tt || M === Z) && !B.isReverted && (R || (R = []), R.unshift(B), B.revert(!0, !0)), B !== V[ut] && (it--, ut--);
                        for (ot(j) && (j = j(Bt)), u = $o(j, J, W, _t, Xt(), c, h, Bt, I, kt, Et, N, dt) || (tt ? -.001 : 0), ot(K) && (K = K(Bt)), Vt(K) && !K.indexOf("+=") && (~K.indexOf(" ") ? K = (Vt(j) ? j.split(" ")[0] : "") + K : (q = Tn(K.substr(2), W), K = Vt(j) ? j : (dt ? A.utils.mapRange(0, dt.duration(), dt.scrollTrigger.start, dt.scrollTrigger.end, u) : u) + q, $ = J)), l = Math.max(u, $o(K || ($ ? "100% 0" : N), $, W, _t, Xt() + q, f, D, Bt, I, kt, Et, N, dt)) || -.001, d = l - u || (u -= .01) && .001, q = 0, ut = it; ut--;)(M = (B = V[ut]).pin) && B.start - B._pinPush <= u && !dt && B.end > 0 && (p = B.end - B.start, (M === J && B.start - B._pinPush < u || M === Z) && !Ii(j) && (q += p * (1 - B.progress)), M === tt && (H += p));
                        if (u += q, l += q, G && (U = A.utils.clamp(0, 1, A.utils.normalize(u, l, L))), Bt._pinPush = H, c && q && ((p = {})[_t.a] = "+=" + q, Z && (p[_t.p] = "-=" + Xt()), A.set([c, f], p)), tt) p = $t(tt), b = _t === ve, x = Xt(), F = parseFloat(C(_t.a)) + H, !N && l > 1 && ((z = {
                            style: z = (Ft ? se.scrollingElement || Ut : yt).style,
                            value: z["overflow" + _t.a.toUpperCase()]
                        }).style["overflow" + _t.a.toUpperCase()] = "scroll"), ms(tt, v, p), _ = Cn(tt), y = ur(tt, !0), S = Et && Sr(yt, b ? st : ve)(), et && ((w = [et + _t.os2, d + H + Me]).t = v, (ut = et === De ? Xs(tt, _t) + d + H : 0) && w.push(_t.d, ut + Me), di(w), Z && V.forEach((function(t) {
                            t.pin === Z && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                        })), Et && Xt(L)), Et && ((T = {
                            top: y.top + (b ? x - u : S) + Me,
                            left: y.left + (b ? S : x - u) + Me,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[Ur] = T["max" + Fi] = Math.ceil(y.width) + Me, T[$r] = T["max" + ho] = Math.ceil(y.height) + Me, T[At] = T[At + Ki] = T[At + qi] = T[At + Zi] = T[At + ji] = "0", T[De] = p[De], T[De + Ki] = p[De + Ki], T[De + qi] = p[De + qi], T[De + Zi] = p[De + Zi], T[De + ji] = p[De + ji], m = Ql(g, T, Dt), xt && Xt(0)), r ? (P = r._initted, _s(1), r.render(r.duration(), !0, !0), E = C(_t.a) - F + d + H, k = Math.abs(d - E) > 1, Et && k && m.splice(m.length - 2, 2), r.render(0, !0, !0), P || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), _s(0)) : E = d, z && (z.value ? z.style["overflow" + _t.a.toUpperCase()] = z.value : z.style.removeProperty("overflow-" + _t.a));
                        else if (J && Xt() && !dt)
                            for (y = J.parentNode; y && y !== ce;) y._pinOffset && (u -= y._pinOffset, l -= y._pinOffset), y = y.parentNode;
                        R && R.forEach((function(t) {
                            return t.revert(!1, !0)
                        })), Bt.start = u, Bt.end = l, o = a = xt ? L : Xt(), !dt && !xt && (o < L && Xt(L), Bt.scroll.rec = 0), Bt.revert(!1, !0), X && (Ot = -1, Bt.isActive && Xt(u + d * U), X.restart(!0)), Ye = 0, r && vt && (r._initted || Y) && r.progress() !== Y && r.progress(Y, !0).render(r.time(), !0, !0), (G || U !== Bt.progress || dt) && (r && !vt && r.totalProgress(dt && u < -.001 && !U ? A.utils.normalize(u, l, 0) : U, !0), Bt.progress = (o - u) / d === U ? 0 : U), tt && et && (v._pinOffset = Math.round(Bt.progress * E)), O && O.invalidate(), Q && !xt && Q(Bt)
                    }
                }, Bt.getVelocity = function() {
                    return (Xt() - a) / (nt() - bn) * 1e3 || 0
                }, Bt.endAnimation = function() {
                    Oi(Bt.callbackAnimation), r && (O ? O.progress(1) : r.paused() ? vt || Oi(r, Bt.direction < 0, 1) : Oi(r, r.reversed()))
                }, Bt.labelToScroll = function(t) {
                    return r && r.labels && (u || Bt.refresh() || u) + r.labels[t] / r.duration() * d || 0
                }, Bt.getTrailing = function(t) {
                    var e = V.indexOf(Bt),
                        r = Bt.direction > 0 ? V.slice(0, e).reverse() : V.slice(e + 1);
                    return (Vt(t) ? r.filter((function(e) {
                        return e.vars.preventOverlaps === t
                    })) : r).filter((function(t) {
                        return Bt.direction > 0 ? t.end <= u : t.start >= l
                    }))
                }, Bt.update = function(t, e, i) {
                    if (!dt || i || t) {
                        var s, c, f, D, p, g, y, C = !0 === xt ? L : Bt.scroll(),
                            w = t ? 0 : (C - u) / d,
                            A = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                            M = Bt.progress;
                        if (e && (a = o, o = dt ? Xt() : C, ht && (P = S, S = r && !vt ? r.totalProgress() : A)), ut && !A && tt && !Ye && !_n && Rt && u < C + (C - a) / (nt() - bn) * ut && (A = 1e-4), A !== M && Bt.enabled) {
                            if (D = (p = (s = Bt.isActive = !!A && A < 1) !== (!!M && M < 1)) || !!A != !!M, Bt.direction = A > M ? 1 : -1, Bt.progress = A, D && !Ye && (c = A && !M ? 0 : 1 === A ? 1 : 1 === M ? 2 : 3, vt && (f = !p && "none" !== wt[c + 1] && wt[c + 1] || wt[c], y = r && ("complete" === f || "reset" === f || f in r))), mt && (p || y) && (y || Z || !r) && (ot(mt) ? mt(Bt) : Bt.getTrailing(mt).forEach((function(t) {
                                    return t.endAnimation()
                                }))), vt || (!O || Ye || _n ? r && r.totalProgress(A, !!Ye) : (O._dp._time - O._start !== O._time && O.render(O._dp._time - O._start), O.resetTo ? O.resetTo("totalProgress", A, r._tTime / r._tDur) : (O.vars.totalProgress = A, O.invalidate().restart()))), tt)
                                if (t && et && (v.style[et + _t.os2] = b), Et) {
                                    if (D) {
                                        if (g = !t && A > M && l + 1 > C && C + 1 >= Fr(yt, _t), Dt)
                                            if (t || !s && !g) Wo(tt, v);
                                            else {
                                                var R = ur(tt, !0),
                                                    z = C - u;
                                                Wo(tt, ce, R.top + (_t === ve ? z : 0) + Me, R.left + (_t === ve ? 0 : z) + Me)
                                            }
                                        di(s || g ? m : _), k && A < 1 && s || x(F + (1 !== A || g ? 0 : E))
                                    }
                                } else x(zi(F + E * A));
                            ht && !n.tween && !Ye && !_n && X.restart(!0), K && (p || ft && A && (A < 1 || !ds)) && jn(K.targets).forEach((function(t) {
                                return t.classList[s || ft ? "add" : "remove"](K.className)
                            })), H && !vt && !t && H(Bt), D && !Ye ? (vt && (y && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), H && H(Bt)), (p || !ds) && (j && p && ps(Bt, j), bt[c] && ps(Bt, bt[c]), ft && (1 === A ? Bt.kill(!1, 1) : bt[c] = 0), p || bt[c = 1 === A ? 1 : 3] && ps(Bt, bt[c])), gt && !s && Math.abs(Bt.getVelocity()) > (Ii(gt) ? gt : 2500) && (Oi(Bt.callbackAnimation), O ? O.progress(1) : Oi(r, "reverse" === f ? 1 : !A, 1))) : vt && H && !Ye && H(Bt)
                        }
                        if (B) {
                            var U = dt ? C / dt.duration() * (dt._caScrollDist || 0) : C;
                            T(U + (h._isFlipped ? 1 : 0)), B(U)
                        }
                        I && I(-C / dt.duration() * (dt._caScrollDist || 0))
                    }
                }, Bt.enable = function(e, r) {
                    Bt.enabled || (Bt.enabled = !0, ke(yt, "resize", Yi), ke(Ft ? se : yt, "scroll", ii), Mt && ke(t, "refreshInit", Mt), !1 !== e && (Bt.progress = U = 0, o = a = Ot = Xt()), !1 !== r && Bt.refresh())
                }, Bt.getTween = function(t) {
                    return t && n ? n.tween : O
                }, Bt.setPositions = function(t, e) {
                    tt && (F += t - u, E += e - t - d, et === De && Bt.adjustPinSpacing(e - t - d)), Bt.start = u = t, Bt.end = l = e, d = e - t, Bt.update()
                }, Bt.adjustPinSpacing = function(t) {
                    if (w && t) {
                        var e = w.indexOf(_t.d) + 1;
                        w[e] = parseFloat(w[e]) + t + Me, w[1] = parseFloat(w[1]) + t + Me, di(w)
                    }
                }, Bt.disable = function(e, r) {
                    if (Bt.enabled && (!1 !== e && Bt.revert(!0, !0), Bt.enabled = Bt.isActive = !1, r || O && O.pause(), L = 0, i && (i.uncache = 1), Mt && Pe(t, "refreshInit", Mt), X && (X.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Ft)) {
                        for (var s = V.length; s--;)
                            if (V[s].scroller === yt && V[s] !== Bt) return;
                        Pe(yt, "resize", Yi), Pe(yt, "scroll", ii)
                    }
                }, Bt.kill = function(t, n) {
                    Bt.disable(t, n), O && !n && O.kill(), $ && delete Vs[$];
                    var s = V.indexOf(Bt);
                    s >= 0 && V.splice(s, 1), s === it && Pn > 0 && it--, s = 0, V.forEach((function(t) {
                        return t.scroller === Bt.scroller && (s = 1)
                    })), s || xt || (Bt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                        kill: !1
                    }), n || r.kill()), c && [c, f, h, D].forEach((function(t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    })), Qi === Bt && (Qi = 0), tt && (i && (i.uncache = 1), s = 0, V.forEach((function(t) {
                        return t.pin === tt && s++
                    })), s || (i.spacer = 0)), e.onKill && e.onKill(Bt)
                }, Bt.enable(!1, !1), N && N(Bt), r && r.add && !d ? A.delayedCall(.01, (function() {
                    return u || l || Bt.refresh()
                })) && (d = .01) && (u = l = 0) : Bt.refresh(), tt && jl()
            } else this.update = this.refresh = this.kill = Kt
        }, t.register = function(e) {
            return ni || (A = e || ca(), fa() && window.document && t.enable(), ni = Li), ni
        }, t.defaults = function(t) {
            if (t)
                for (var e in t) gn[e] = t[e];
            return gn
        }, t.disable = function(t, e) {
            Li = 0, V.forEach((function(r) {
                return r[e ? "kill" : "disable"](t)
            })), Pe(G, "wheel", ii), Pe(se, "scroll", ii), clearInterval(hn), Pe(se, "touchcancel", Kt), Pe(ce, "touchstart", Kt), Dn(Pe, se, "pointerdown,touchstart,mousedown", Io), Dn(Pe, se, "pointerup,touchend,mouseup", Yo), qn.kill(), dn(Pe);
            for (var r = 0; r < W.length; r += 3) pn(Pe, W[r], W[r + 1]), pn(Pe, W[r], W[r + 2])
        }, t.enable = function() {
            if (G = window, se = document, Ut = se.documentElement, ce = se.body, A && (jn = A.utils.toArray, li = A.utils.clamp, Ns = A.core.context || Kt, _s = A.core.suppressOverwrites || Kt, lo = G.history.scrollRestoration || "auto", Us = G.pageYOffset, A.core.globals("ScrollTrigger", t), ce)) {
                Li = 1, Vl(), xe.register(A), t.isTouch = xe.isTouch, pr = xe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ke(G, "wheel", ii), na = [G, se, Ut, ce], A.matchMedia ? (t.matchMedia = function(t) {
                    var e, r = A.matchMedia();
                    for (e in t) r.add(e, t[e]);
                    return r
                }, A.addEventListener("matchMediaInit", (function() {
                    return Do()
                })), A.addEventListener("matchMediaRevert", (function() {
                    return ga()
                })), A.addEventListener("matchMedia", (function() {
                    Yr(0, 1), jr("matchMedia")
                })), A.matchMedia("(orientation: portrait)", (function() {
                    return gs(), gs
                }))) : console.warn("Requires GSAP 3.11.0 or later"), gs(), ke(se, "scroll", ii);
                var e, r, n = ce.style,
                    i = n.borderTopStyle,
                    s = A.core.Animation.prototype;
                for (s.revert || Object.defineProperty(s, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), n.borderTopStyle = "solid", e = ur(ce), ve.m = Math.round(e.top + ve.sc()) || 0, st.m = Math.round(e.left + st.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), hn = setInterval(Vo, 250), A.delayedCall(.5, (function() {
                        return _n = 0
                    })), ke(se, "touchcancel", Kt), ke(ce, "touchstart", Kt), Dn(ke, se, "pointerdown,touchstart,mousedown", Io), Dn(ke, se, "pointerup,touchend,mouseup", Yo), Ys = A.utils.checkPrefix("transform"), kn.push(Ys), ni = nt(), qn = A.delayedCall(.2, Yr).pause(), si = [se, "visibilitychange", function() {
                        var t = G.innerWidth,
                            e = G.innerHeight;
                        se.hidden ? (Lo = t, zo = e) : (Lo !== t || zo !== e) && Yi()
                    }, se, "DOMContentLoaded", Yr, G, "load", Yr, G, "resize", Yi], dn(ke), V.forEach((function(t) {
                        return t.enable(0, 1)
                    })), r = 0; r < W.length; r += 3) pn(Pe, W[r], W[r + 1]), pn(Pe, W[r], W[r + 2])
            }
        }, t.config = function(e) {
            "limitCallbacks" in e && (ds = !!e.limitCallbacks);
            var r = e.syncInterval;
            r && clearInterval(hn) || (hn = r) && setInterval(Vo, r), "ignoreMobileResize" in e && (ua = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (dn(Pe) || dn(ke, e.autoRefreshEvents || "none"), oa = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, t.scrollerProxy = function(t, e) {
            var r = at(t),
                n = W.indexOf(r),
                i = Gr(r);
            ~n && W.splice(n, i ? 6 : 2), e && (i ? er.unshift(G, e, ce, e, Ut, e) : er.unshift(r, e))
        }, t.clearMatchMedia = function(t) {
            V.forEach((function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            }))
        }, t.isInViewport = function(t, e, r) {
            var n = (Vt(t) ? at(t) : t).getBoundingClientRect(),
                i = n[r ? Ur : $r] * e || 0;
            return r ? n.right - i > 0 && n.left + i < G.innerWidth : n.bottom - i > 0 && n.top + i < G.innerHeight
        }, t.positionInViewport = function(t, e, r) {
            Vt(t) && (t = at(t));
            var n = t.getBoundingClientRect(),
                i = n[r ? Ur : $r],
                s = null == e ? i / 2 : e in Kn ? Kn[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
            return r ? (n.left + s) / G.innerWidth : (n.top + s) / G.innerHeight
        }, t.killAll = function(t) {
            if (V.slice(0).forEach((function(t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill()
                })), !0 !== t) {
                var e = qr.killAll || [];
                qr = {}, e.forEach((function(t) {
                    return t()
                }))
            }
        }, t
    }();
z.version = "3.11.5", z.saveStyles = function(t) {
    return t ? jn(t).forEach((function(t) {
        if (t && t.style) {
            var e = Ct.indexOf(t);
            e >= 0 && Ct.splice(e, 5), Ct.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), A.core.getCache(t), Ns())
        }
    })) : Ct
}, z.revert = function(t, e) {
    return Do(!t, e)
}, z.create = function(t, e) {
    return new z(t, e)
}, z.refresh = function(t) {
    return t ? Yi() : (ni || z.register()) && Yr(!0)
}, z.update = function(t) {
    return ++W.cache && lr(!0 === t ? 2 : 0)
}, z.clearScrollMemory = ma, z.maxScroll = function(t, e) {
    return Fr(t, e ? st : ve)
}, z.getScrollFunc = function(t, e) {
    return Sr(at(t), e ? st : ve)
}, z.getById = function(t) {
    return Vs[t]
}, z.getAll = function() {
    return V.filter((function(t) {
        return "ScrollSmoother" !== t.vars.id
    }))
}, z.isScrolling = function() {
    return !!Rt
}, z.snapDirectional = _o, z.addEventListener = function(t, e) {
    var r = qr[t] || (qr[t] = []);
    ~r.indexOf(e) || r.push(e)
}, z.removeEventListener = function(t, e) {
    var r = qr[t],
        n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1)
}, z.batch = function(t, e) {
    var r, n = [],
        i = {},
        s = e.interval || .016,
        o = e.batchMax || 1e9,
        a = function(t, e) {
            var r = [],
                n = [],
                i = A.delayedCall(s, (function() {
                    e(r, n), r = [], n = []
                })).pause();
            return function(t) {
                r.length || i.restart(!0), r.push(t.trigger), n.push(t), o <= r.length && i.progress(1)
            }
        };
    for (r in e) i[r] = "on" === r.substr(0, 2) && ot(e[r]) && "onRefreshInit" !== r ? a(0, e[r]) : e[r];
    return ot(o) && (o = o(), ke(z, "refresh", (function() {
        return o = e.batchMax()
    }))), jn(t).forEach((function(t) {
        var e = {};
        for (r in i) e[r] = i[r];
        e.trigger = t, n.push(z.create(e))
    })), n
};
var qo, Go = function(t, e, r, n) {
        return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    },
    Cs = function t(e, r) {
        !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (xe.isTouch ? " pinch-zoom" : "") : "none", e === Ut && t(ce, r)
    },
    yn = {
        auto: 1,
        scroll: 1
    },
    ef = function(t) {
        var e, r = t.event,
            n = t.target,
            i = t.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            o = s._gsap || A.core.getCache(s),
            a = nt();
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (; s && s !== ce && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !yn[(e = $t(s)).overflowY] && !yn[e.overflowX]);) s = s.parentNode;
            o._isScroll = s && s !== n && !Gr(s) && (yn[(e = $t(s)).overflowY] || yn[e.overflowX]), o._isScrollT = a
        }(o._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
    },
    ya = function(t, e, r, n) {
        return xe.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: n = n && ef,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
                return r && ke(se, xe.eventTypes[0], jo, !1, !0)
            },
            onDisable: function() {
                return Pe(se, xe.eventTypes[0], jo, !0)
            }
        })
    },
    tf = /(input|label|select|textarea)/i,
    jo = function(t) {
        var e = tf.test(t.target.tagName);
        (e || qo) && (t._gsapAllow = !0, qo = e)
    },
    rf = function(t) {
        wn(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
        var e, r, n, i, s, o, a, u, l = t,
            c = l.normalizeScrollX,
            f = l.momentum,
            h = l.allowNestedScroll,
            D = l.onRelease,
            p = at(t.target) || Ut,
            d = A.core.globals().ScrollSmoother,
            g = d && d.get(),
            m = pr && (t.content && at(t.content) || g && !1 !== t.content && !g.smooth() && g.content()),
            _ = Sr(p, ve),
            v = Sr(p, st),
            y = 1,
            C = (xe.isTouch && G.visualViewport ? G.visualViewport.scale * G.visualViewport.width : G.outerWidth) / G.innerWidth,
            x = 0,
            F = ot(f) ? function() {
                return f(e)
            } : function() {
                return f || 2.8
            },
            E = ya(p, t.type, !0, h),
            b = function() {
                return i = !1
            },
            w = Kt,
            T = Kt,
            k = function() {
                r = Fr(p, ve), T = li(pr ? 1 : 0, r), c && (w = li(0, Fr(p, st))), n = Wr
            },
            B = function() {
                m._gsap.y = zi(parseFloat(m._gsap.y) + _.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0
            },
            M = function() {
                k(), s.isActive() && s.vars.scrollY > r && (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r))
            };
        return m && A.set(m, {
            y: "+=0"
        }), t.ignoreCheck = function(t) {
            return pr && "touchmove" === t.type && function() {
                if (i) {
                    requestAnimationFrame(b);
                    var t = zi(e.deltaY / 2),
                        r = T(_.v - t);
                    if (m && r !== _.v + _.offset) {
                        _.offset = r - _.v;
                        var n = zi((parseFloat(m && m._gsap.y) || 0) - _.offset);
                        m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", _.cacheID = W.cache, lr()
                    }
                    return !0
                }
                _.offset && B(), i = !0
            }() || y > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
        }, t.onPress = function() {
            i = !1;
            var t = y;
            y = zi((G.visualViewport && G.visualViewport.scale || 1) / C), s.pause(), t !== y && Cs(p, y > 1.01 || !c && "x"), o = v(), a = _(), k(), n = Wr
        }, t.onRelease = t.onGestureStart = function(t, e) {
            if (_.offset && B(), e) {
                W.cache++;
                var n, i, o = F();
                c && (i = (n = v()) + .05 * o * -t.velocityX / .227, o *= Go(v, n, i, Fr(p, st)), s.vars.scrollX = w(i)), i = (n = _()) + .05 * o * -t.velocityY / .227, o *= Go(_, n, i, Fr(p, ve)), s.vars.scrollY = T(i), s.invalidate().duration(o).play(.01), (pr && s.vars.scrollY >= r || n >= r - 1) && A.to({}, {
                    onUpdate: M,
                    duration: o
                })
            } else u.restart(!0);
            D && D(t)
        }, t.onWheel = function() {
            s._ts && s.pause(), nt() - x > 1e3 && (n = 0, x = nt())
        }, t.onChange = function(t, e, r, i, s) {
            if (Wr !== n && k(), e && c && v(w(i[2] === e ? o + (t.startX - t.x) : v() + e - i[1])), r) {
                _.offset && B();
                var u = s[2] === r,
                    l = u ? a + t.startY - t.y : _() + r - s[1],
                    f = T(l);
                u && l !== f && (a += f - l), _(f)
            }(r || e) && lr()
        }, t.onEnable = function() {
            Cs(p, !c && "x"), z.addEventListener("refresh", M), ke(G, "resize", M), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = v.smooth = !1), E.enable()
        }, t.onDisable = function() {
            Cs(p, !0), Pe(G, "resize", M), z.removeEventListener("refresh", M), E.kill()
        }, t.lockAxis = !1 !== t.lockAxis, (e = new xe(t)).iOS = pr, pr && !_() && _(1), pr && A.ticker.add(Kt), u = e._dc, s = A.to(e, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Ca(_, _(), (function() {
                    return s.pause()
                }))
            },
            onUpdate: lr,
            onComplete: u.vars.onComplete
        }), e
    };
z.sort = function(t) {
    return V.sort(t || function(t, e) {
        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
    })
}, z.observe = function(t) {
    return new xe(t)
}, z.normalizeScroll = function(t) {
    if (typeof t > "u") return mt;
    if (!0 === t && mt) return mt.enable();
    if (!1 === t) return mt && mt.kill();
    var e = t instanceof xe ? t : rf(t);
    return mt && mt.target === e.target && mt.kill(), Gr(e.target) && (mt = e), e
}, z.core = {
    _getVelocityProp: Is,
    _inputObserver: ya,
    _scrollers: W,
    _proxies: er,
    bridge: {
        ss: function() {
            Rt || jr("scrollStart"), Rt = nt()
        },
        ref: function() {
            return Ye
        }
    }
}, ca() && A.registerPlugin(z);
/*!
 * strings: 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var nf = /(?:^\s+|\s+$)/g,
    sf = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function xa(t) {
    var e = t.nodeType,
        r = "";
    if (1 === e || 9 === e || 11 === e) {
        if ("string" == typeof t.textContent) return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling) r += xa(t)
    } else if (3 === e || 4 === e) return t.nodeValue;
    return r
}

function Ws(t, e, r, n) {
    for (var i, s = t.firstChild, o = []; s;) 3 === s.nodeType ? (i = (s.nodeValue + "").replace(/^\n+/g, ""), n || (i = i.replace(/\s+/g, " ")), o.push.apply(o, Fa(i, e, r, n))) : "br" === (s.nodeName + "").toLowerCase() ? o[o.length - 1] += "<br>" : o.push(s.outerHTML), s = s.nextSibling;
    for (i = o.length; i--;) "&" === o[i] && o.splice(i, 1, "&amp;");
    return o
}

function Fa(t, e, r, n) {
    if (t += "", r && (t = t.trim ? t.trim() : t.replace(nf, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var i, s, o = [], a = t.length, u = 0; u < a; u++)((s = t.charAt(u)).charCodeAt(0) >= 55296 && s.charCodeAt(0) <= 56319 || t.charCodeAt(u + 1) >= 65024 && t.charCodeAt(u + 1) <= 65039) && (i = ((t.substr(u, 12).split(sf) || [])[1] || "").length || 2, s = t.substr(u, i), o.emoji = 1, u += i - 1), o.push(">" === s ? "&gt;" : "<" === s ? "&lt;" : !n || " " !== s || " " !== t.charAt(u - 1) && " " !== t.charAt(u + 1) ? s : "&nbsp;");
    return o
}
/*!
 * TextPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ni, xn, of = function() {
        return Ni || typeof window < "u" && (Ni = window.gsap) && Ni.registerPlugin && Ni
    },
    an = {
        version: "3.11.5",
        name: "text",
        init: function(t, e, r) {
            "object" != typeof e && (e = {
                value: e
            });
            var n, i, s, o, a, u, l, c, f = t.nodeName.toUpperCase(),
                h = this,
                D = e,
                p = D.newClass,
                d = D.oldClass,
                g = D.preserveSpaces,
                m = D.rtl,
                _ = h.delimiter = e.delimiter || "",
                v = h.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : "");
            if (h.svg = t.getBBox && ("TEXT" === f || "TSPAN" === f), !("innerHTML" in t) && !h.svg) return !1;
            if (h.target = t, "value" in e) {
                for (s = Ws(t, _, !1, g), xn || (xn = document.createElement("div")), xn.innerHTML = e.value, i = Ws(xn, _, !1, g), h.from = r._from, (h.from || m) && !(m && h.from) && (f = s, s = i, i = f), h.hasClass = !(!p && !d), h.newClass = m ? d : p, h.oldClass = m ? p : d, n = (f = s.length - i.length) < 0 ? s : i, f < 0 && (f = -f); --f > -1;) n.push(v);
                if ("diff" === e.type) {
                    for (o = 0, a = [], u = [], l = "", f = 0; f < i.length; f++)(c = i[f]) === s[f] ? l += c : (a[o] = l + c, u[o++] = l + s[f], l = "");
                    i = a, s = u, l && (i.push(l), s.push(l))
                }
                e.speed && r.duration(Math.min(.05 / e.speed * n.length, e.maxDuration || 9999)), h.rtl = m, h.original = s, h.text = i, h._props.push("text")
            } else h.text = h.original = [""]
        },
        render: function(t, e) {
            t > 1 ? t = 1 : t < 0 && (t = 0), e.from && (t = 1 - t);
            var r, n, i, s = e.text,
                o = e.hasClass,
                a = e.newClass,
                u = e.oldClass,
                l = e.delimiter,
                c = e.target,
                f = e.fillChar,
                h = e.original,
                D = e.rtl,
                p = s.length,
                d = (D ? 1 - t : t) * p + .5 | 0;
            o && t ? (n = u && d !== p, i = ((r = a && d) ? "<span class='" + a + "'>" : "") + s.slice(0, d).join(l) + (r ? "</span>" : "") + (n ? "<span class='" + u + "'>" : "") + l + h.slice(d).join(l) + (n ? "</span>" : "")) : i = s.slice(0, d).join(l) + l + h.slice(d).join(l), e.svg ? c.textContent = i : c.innerHTML = "&nbsp;" === f && ~i.indexOf("  ") ? i.split("  ").join("&nbsp;&nbsp;") : i
        }
    };
let Ne, Xe, Ve, Ue, $e, We, va;

function Ft(t, e, r, n, i, s, o) {
    return void 0 !== t ? t : void 0 !== e ? e : void 0 !== r ? r : void 0 !== n ? n : void 0 !== i ? i : void 0 !== s ? s : void 0 !== o ? o : void 0
}
an.splitInnerHTML = Ws, an.emojiSafeSplit = Fa, an.getText = xa, of () && Ni.registerPlugin(an), ge.registerPlugin(z), ge.registerPlugin(an), z.defaults({
    markers: !1
});
let U = ge.matchMedia();
U.add({
        isxs: "(min-width: 0px)",
        issm: "(min-width: 640px)",
        ismd: "(min-width: 768px)",
        islg: "(min-width: 1024px)",
        isxl: "(min-width: 1280px)",
        is2xl: "(min-width: 1536px)"
    }, (t => {
        let {
            isxs: e,
            issm: r,
            ismd: n,
            islg: i,
            isxl: s,
            is2xl: o
        } = t.conditions;
        return {
            isxs: e,
            issm: r,
            ismd: n,
            islg: i,
            isxl: s,
            is2xl: o
        }
    })), //! For debugging
    U.contexts[0].conditions.is2xl ? console.log("is2xl") : U.contexts[0].conditions.isxl ? console.log("isxl") : U.contexts[0].conditions.islg ? console.log("islg") : U.contexts[0].conditions.ismd ? console.log("ismd") : U.contexts[0].conditions.issm ? console.log("issm") : U.contexts[0].conditions.isxs && console.log("isxs");
const On = ge.timeline({
        defaults: {
            ease: "power3.inOut"
        }
    }),
    Ea = ge.timeline({
        defaults: {
            duration: 1,
            ease: "none"
        }
    });
Ea.set("#introTextColor", {
    text: {
        value: "new king"
    }
}).to("#introTextColor", {
    text: {
        value: "champion"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "trailblazer"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "titan"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "crown jewel"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "marvel"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "powerhouse"
    }
}, "+=0.5").to("#introTextColor", {
    text: {
        value: "endgame"
    }
}, "+=0.5"), On.to("#introText", {
    scale: .5,
    opacity: 0,
    duration: 50,
    ease: "power3.inOut"
}, 18).to("#gradientSection", {
    "--gradient-color-progress": "150%",
    duration: 50
}, "+=0.5").to("#introTextGradient", {
    scale: 1.5,
    ease: "power3.inOut",
    duration: 50
}, "<"), z.create({
    trigger: "#gradientSection",
    start: "top center",
    end: "bottom center",
    animation: On,
    onLeave: () => {
        On.pause()
    },
    onEnterBack: () => {
        On.play()
    },
    scrub: .3,
    pin: !0
}), z.create({
    trigger: "#gradientSection",
    start: "top center",
    end: "bottom center",
    animation: Ea
});
const ba = ge.timeline({
    defaults: {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut"
    }
});
ba.to("#DetectionEngineImg", {
    transform: "translate(50%, -100%)"
}).to("#ModDetectionImg", {
    transform: "translate(50%, 50%)"
}, 0).to("#MusicImg", {
    transform: "translate(-40%, -70%)"
}, 0).to("#ServerImg", {
    transform: "translate(0%, -20%)"
}, 0).to("#SmartBarImg", {
    transform: "translate(-50%, 400%)"
}, 0), (U.contexts[0].conditions.is2xl || U.contexts[0].conditions.isxl || U.contexts[0].conditions.islg) && z.create({
    id: "interface",
    trigger: "#interfaceSection",
    start: "top top",
    end: "bottom center",
    animation: ba,
    scrub: .3,
    pin: !0
}), U.contexts[0].conditions.is2xl || U.contexts[0].conditions.isxl ? ge.set("#scriptSearchSectionContainer", {
    scaleX: 2,
    skewY: 0,
    skewX: 0,
    scaleY: 2,
    translateX: 0,
    translateY: 0
}) : U.contexts[0].conditions.islg ? ge.set("#scriptSearchSectionContainer", {
    scaleX: 2.5,
    skewY: 0,
    skewX: 0,
    scaleY: 2.5,
    translateX: 0,
    translateY: 0
}) : U.contexts[0].conditions.ismd || U.contexts[0].conditions.issm ? ge.set("#scriptSearchSectionContainer", {
    scaleX: 3,
    skewY: 0,
    skewX: 0,
    scaleY: 3,
    translateX: 0,
    translateY: 0
}) : U.contexts[0].conditions.isxs && ge.set("#scriptSearchSectionContainer", {
    scaleX: 7,
    skewY: 0,
    skewX: 0,
    scaleY: 7,
    translateX: 0,
    translateY: 0
}), ge.set("#scriptSearchSectionTextBehind", {
    scaleX: 1,
    skewY: 0,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 100,
    opacity: 0
});
let rs = ge.timeline({
    defaults: {
        duration: 1,
        ease: "none"
    }
});
Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 0, va = 1), rs.to("#scriptSearchSectionTextBehind", {
    scaleX: Ne,
    skewY: Xe,
    skewX: Ve,
    scaleY: Ue,
    translateX: $e,
    translateY: We,
    opacity: va
}, 0), U.contexts[0].conditions.is2xl ? Ft(Ne = .5, Xe = 0, Ve = 0, Ue = .5, $e = 0, We = 200) : U.contexts[0].conditions.isxl ? Ft(Ne = .8, Xe = 0, Ve = 0, Ue = .8, $e = 0, We = 250) : U.contexts[0].conditions.islg ? Ft(Ne = .9, Xe = 0, Ve = 0, Ue = .9, $e = 0, We = 250) : U.contexts[0].conditions.ismd ? Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 300) : U.contexts[0].conditions.issm ? Ft(Ne = .8, Xe = 0, Ve = 0, Ue = .8, $e = 0, We = 200) : U.contexts[0].conditions.isxs && Ft(Ne = .7, Xe = 0, Ve = 0, Ue = .7, $e = 0, We = 200), rs.to("#scriptSearchSectionContainer", {
    scaleX: Ne,
    skewY: Xe,
    skewX: Ve,
    scaleY: Ue,
    translateX: $e,
    translateY: We
}, 0), U.contexts[0].conditions.is2xl ? Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 489) : U.contexts[0].conditions.isxl ? Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 400) : U.contexts[0].conditions.islg ? Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 300) : U.contexts[0].conditions.ismd ? Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 250) : U.contexts[0].conditions.issm ? Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 200) : U.contexts[0].conditions.isxs && Ft(Ne = 1, Xe = 0, Ve = 0, Ue = 1, $e = 0, We = 150), rs.to("#scriptSearchSectionTextFront", {
    scaleX: Ne,
    skewY: Xe,
    skewX: Ve,
    scaleY: Ue,
    translateX: $e,
    translateY: We,
    opacity: 0,
    duration: .5
}, 0);
let Zn = document.querySelector("#scriptSearchSectionContainer video"),
    uf = new IntersectionObserver((t => {
        t.forEach((t => {
            t.isIntersecting ? Zn.play() : Zn.pause()
        }))
    }), {
        threshold: .1
    });
if (uf.observe(Zn), z.create({
        trigger: "#scriptSearchSection",
        start: "top top",
        end: "bottom top",
        animation: rs,
        scrub: .3,
        pin: !0,
        onEnter: () => {
            Zn.play()
        },
        anticipatePin: 1
    }), U.contexts[0].conditions.is2xl || U.contexts[0].conditions.isxl || U.contexts[0].conditions.islg || U.contexts[0].conditions.ismd) {
    const t = ge.timeline({
        defaults: {
            ease: "none"
        },
        autoRemoveChildren: !0
    });
    let e = document.querySelectorAll(".undeniablyProCards").length,
        r = 750;
    t.set(".undeniablyProCards", {
        x: t => t * r,
        left: -711.11,
        ease: "none"
    }), t.to(".undeniablyProCards", {
        duration: 100,
        x: t => "+=" + e * r,
        modifiers: {
            x: ge.utils.unitize((t => parseFloat(t) % (e * r)))
        },
        ease: "none",
        repeat: -1
    }), z.create({
        trigger: "#cardsSection",
        start: "top bottom",
        end: "bottom top",
        animation: t,
        onLeave: () => {
            t.pause()
        },
        onEnterBack: () => {
            t.play()
        }
    })
}
const wa = ge.timeline({
    defaults: {
        duration: .9,
        ease: "expo.out",
        opacity: 0
    }
});
let Mn, Bn, Rn, Ln, zn, In;
U.contexts[0].conditions.is2xl ? (ge.set(".notificationBanner", {
    xPercent: 50,
    yPercent: 50,
    left: "50%",
    opacity: 0
}), Mn = -110, Bn = -50, Rn = 10, Ln = 0, zn = -25, In = 0) : U.contexts[0].conditions.isxl ? (ge.set(".notificationBanner", {
    xPercent: 50,
    bottom: 80,
    left: "50%",
    opacity: 0
}), Mn = -110, Bn = -50, Rn = 10, Ln = 0, zn = -25, In = 0) : U.contexts[0].conditions.islg && (ge.set(".notificationBanner", {
    xPercent: 50,
    yPercent: 50,
    left: "50%",
    opacity: 0
}), Mn = -110, Bn = -50, Rn = 10, Ln = 0, zn = -25, In = 0), wa.set("#soundNotif", {
    yPercent: Mn
}).set("#spamNotif", {
    yPercent: Bn
}).set("#modNotif", {
    yPercent: Rn
}).to("#soundNotif", {
    xPercent: Ln,
    opacity: 1
}).to("#spamNotif", {
    xPercent: zn,
    opacity: 1
}, "+=0.15").to("#modNotif", {
    xPercent: In,
    opacity: 1
}, "+=0.15"), (U.contexts[0].conditions.is2xl || U.contexts[0].conditions.isxl || U.contexts[0].conditions.islg) && z.create({
    id: "smartDesign",
    trigger: "#notificationSection",
    start: () => `+=${document.querySelector("#navBar").clientHeight} center`,
    end: () => "bottom center",
    animation: wa
});
let af = window.innerWidth;
window.addEventListener("resize", (() => {
    window.innerWidth !== af && window.location.reload()
})), document.addEventListener("DOMContentLoaded", (function() {
    let t = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
        let e = new IntersectionObserver((function(t, r) {
            t.forEach((function(t) {
                if (t.isIntersecting) {
                    for (let e in t.target.children) {
                        let r = t.target.children[e];
                        "string" == typeof r.tagName && "SOURCE" === r.tagName && (r.src = r.dataset.src)
                    }
                    t.target.load(), t.target.classList.remove("lazy"), e.unobserve(t.target)
                }
            }))
        }));
        t.forEach((function(t) {
            e.observe(t)
        }))
    }
}));
const lf = document.querySelectorAll("[class*='text-[']");
lf.forEach((t => {
    const e = t.className.match(/text-\[(.*?)\]/)[1];
    parseInt(e) <= 25.333333333333332 ? t.classList.add("font-sftext") : parseInt(e) >= 26.666666666666664 && t.classList.add("font-sfdisplay")
}));
const po = document.getElementById("navBar"),
    Ko = po.querySelectorAll(".opacity-0:not(#banner)");
let Mi;
po.classList.remove("-translate-y-full", "opacity-0"), Ko.forEach(((t, e) => {
    setTimeout((() => {
        t.classList.remove("opacity-0")
    }), 250 * e), e === Ko.length - 1 && setTimeout((() => {
        Xi.classList.remove("opacity-0")
    }), 250 * e + 250)
})), document.getElementById("navBarBuyButton").addEventListener("click", (() => {
    document.getElementById("featureList").scrollIntoView({
        behavior: "smooth"
    })
}));
const Xi = document.getElementById("navBarbanner"),
    Zo = document.getElementById("bannerText");
async function ff() {
    await fetch("https://raw.githubusercontent.com/shlexware/SiriusDependencies/main/banner.json").then((t => t.json())).then((t => {
        Mi = t
    })), Zo.innerHTML = Mi.text, Zo.style.color = Mi.txtcolor, Xi.style.backgroundColor = Mi.bgcolor, !0 === Mi.show && (Xi.classList.remove("hidden"), Xi.addEventListener("click", (() => {
        po.classList.add("-translate-y-full", "opacity-0"), setTimeout((() => {
            Xi.classList.add("hidden")
        }), 500)
    })))
}
ff(), window.addEventListener("DOMContentLoaded", (() => {
    const t = document.getElementById("hero").querySelectorAll(".opacity-0"),
        e = document.getElementById("heroTitleP"),
        r = document.querySelectorAll(".heroBlobs");
    t.forEach((t => {
        t.classList.remove("opacity-0", "scale-150")
    })), e.classList.add("opacity-70", "scale-150"), r.forEach((t => {
        t.classList.remove("opacity-0", "scale-150")
    })), setTimeout((() => {
        r[0].classList.add("animate-pulse-subtle"), r[1].classList.add("animate-pulse-subtle-delayed")
    }), 1e3)
}));