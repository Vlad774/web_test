/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Bi = u(() => {
        window.tram = function(e) {
            function t(l, T) {
                var S = new E.Bare;
                return S.init(l, T)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(l) {
                var T = parseInt(l.slice(1), 16),
                    S = T >> 16 & 255,
                    N = T >> 8 & 255,
                    b = 255 & T;
                return [S, N, b]
            }

            function o(l, T, S) {
                return "#" + (1 << 24 | l << 16 | T << 8 | S).toString(16).slice(1)
            }

            function i() {}

            function a(l, T) {
                d("Type warning: Expected: [" + l + "] Got: [" + typeof T + "] " + T)
            }

            function s(l, T, S) {
                d("Units do not match [" + l + "]: " + T + ", " + S)
            }

            function c(l, T, S) {
                if (T !== void 0 && (S = T), l === void 0) return S;
                var N = S;
                return Qe.test(l) || !We.test(l) ? N = parseInt(l, 10) : We.test(l) && (N = 1e3 * parseFloat(l)), 0 > N && (N = 0), N === N ? N : S
            }

            function d(l) {
                ae.debug && window && window.console.warn(l)
            }

            function g(l) {
                for (var T = -1, S = l ? l.length : 0, N = []; ++T < S;) {
                    var b = l[T];
                    b && N.push(b)
                }
                return N
            }
            var f = function(l, T, S) {
                    function N(se) {
                        return typeof se == "object"
                    }

                    function b(se) {
                        return typeof se == "function"
                    }

                    function P() {}

                    function te(se, me) {
                        function K() {
                            var Fe = new fe;
                            return b(Fe.init) && Fe.init.apply(Fe, arguments), Fe
                        }

                        function fe() {}
                        me === S && (me = se, se = Object), K.Bare = fe;
                        var de, we = P[l] = se[l],
                            ct = fe[l] = K[l] = new P;
                        return ct.constructor = K, K.mixin = function(Fe) {
                            return fe[l] = K[l] = te(K, Fe)[l], K
                        }, K.open = function(Fe) {
                            if (de = {}, b(Fe) ? de = Fe.call(K, ct, we, K, se) : N(Fe) && (de = Fe), N(de))
                                for (var Sr in de) T.call(de, Sr) && (ct[Sr] = de[Sr]);
                            return b(ct.init) || (ct.init = se), K
                        }, K.open(me)
                    }
                    return te
                }("prototype", {}.hasOwnProperty),
                m = {
                    ease: ["ease", function(l, T, S, N) {
                        var b = (l /= N) * l,
                            P = b * l;
                        return T + S * (-2.75 * P * b + 11 * b * b + -15.5 * P + 8 * b + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, T, S, N) {
                        var b = (l /= N) * l,
                            P = b * l;
                        return T + S * (-1 * P * b + 3 * b * b + -3 * P + 2 * b)
                    }],
                    "ease-out": ["ease-out", function(l, T, S, N) {
                        var b = (l /= N) * l,
                            P = b * l;
                        return T + S * (.3 * P * b + -1.6 * b * b + 2.2 * P + -1.8 * b + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, T, S, N) {
                        var b = (l /= N) * l,
                            P = b * l;
                        return T + S * (2 * P * b + -5 * b * b + 2 * P + 2 * b)
                    }],
                    linear: ["linear", function(l, T, S, N) {
                        return S * l / N + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, T, S, N) {
                        return S * (l /= N) * l + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, T, S, N) {
                        return -S * (l /= N) * (l - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, T, S, N) {
                        return (l /= N / 2) < 1 ? S / 2 * l * l + T : -S / 2 * (--l * (l - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, T, S, N) {
                        return S * (l /= N) * l * l + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, T, S, N) {
                        return S * ((l = l / N - 1) * l * l + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, T, S, N) {
                        return (l /= N / 2) < 1 ? S / 2 * l * l * l + T : S / 2 * ((l -= 2) * l * l + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, T, S, N) {
                        return S * (l /= N) * l * l * l + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, T, S, N) {
                        return -S * ((l = l / N - 1) * l * l * l - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, T, S, N) {
                        return (l /= N / 2) < 1 ? S / 2 * l * l * l * l + T : -S / 2 * ((l -= 2) * l * l * l - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, T, S, N) {
                        return S * (l /= N) * l * l * l * l + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, T, S, N) {
                        return S * ((l = l / N - 1) * l * l * l * l + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, T, S, N) {
                        return (l /= N / 2) < 1 ? S / 2 * l * l * l * l * l + T : S / 2 * ((l -= 2) * l * l * l * l + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, T, S, N) {
                        return -S * Math.cos(l / N * (Math.PI / 2)) + S + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, T, S, N) {
                        return S * Math.sin(l / N * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, T, S, N) {
                        return -S / 2 * (Math.cos(Math.PI * l / N) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, T, S, N) {
                        return l === 0 ? T : S * Math.pow(2, 10 * (l / N - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, T, S, N) {
                        return l === N ? T + S : S * (-Math.pow(2, -10 * l / N) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, T, S, N) {
                        return l === 0 ? T : l === N ? T + S : (l /= N / 2) < 1 ? S / 2 * Math.pow(2, 10 * (l - 1)) + T : S / 2 * (-Math.pow(2, -10 * --l) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, T, S, N) {
                        return -S * (Math.sqrt(1 - (l /= N) * l) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, T, S, N) {
                        return S * Math.sqrt(1 - (l = l / N - 1) * l) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, T, S, N) {
                        return (l /= N / 2) < 1 ? -S / 2 * (Math.sqrt(1 - l * l) - 1) + T : S / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, T, S, N, b) {
                        return b === void 0 && (b = 1.70158), S * (l /= N) * l * ((b + 1) * l - b) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, T, S, N, b) {
                        return b === void 0 && (b = 1.70158), S * ((l = l / N - 1) * l * ((b + 1) * l + b) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, T, S, N, b) {
                        return b === void 0 && (b = 1.70158), (l /= N / 2) < 1 ? S / 2 * l * l * (((b *= 1.525) + 1) * l - b) + T : S / 2 * ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) + T
                    }]
                },
                p = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                h = document,
                y = window,
                C = "bkwld-tram",
                A = /[\-\.0-9]/g,
                x = /[A-Z]/,
                w = "number",
                L = /^(rgb|#)/,
                q = /(em|cm|mm|in|pt|pc|px)$/,
                M = /(em|cm|mm|in|pt|pc|px|%)$/,
                H = /(deg|rad|turn)$/,
                Q = "unitless",
                J = /(all|none) 0s ease 0s/,
                oe = /^(width|height)$/,
                re = " ",
                U = h.createElement("a"),
                O = ["Webkit", "Moz", "O", "ms"],
                F = ["-webkit-", "-moz-", "-o-", "-ms-"],
                X = function(l) {
                    if (l in U.style) return {
                        dom: l,
                        css: l
                    };
                    var T, S, N = "",
                        b = l.split("-");
                    for (T = 0; T < b.length; T++) N += b[T].charAt(0).toUpperCase() + b[T].slice(1);
                    for (T = 0; T < O.length; T++)
                        if (S = O[T] + N, S in U.style) return {
                            dom: S,
                            css: F[T] + l
                        }
                },
                V = t.support = {
                    bind: Function.prototype.bind,
                    transform: X("transform"),
                    transition: X("transition"),
                    backface: X("backface-visibility"),
                    timing: X("transition-timing-function")
                };
            if (V.transition) {
                var ee = V.timing.dom;
                if (U.style[ee] = m["ease-in-back"][0], !U.style[ee])
                    for (var ne in p) m[ne][0] = p[ne]
            }
            var G = t.frame = function() {
                    var l = y.requestAnimationFrame || y.webkitRequestAnimationFrame || y.mozRequestAnimationFrame || y.oRequestAnimationFrame || y.msRequestAnimationFrame;
                    return l && V.bind ? l.bind(y) : function(T) {
                        y.setTimeout(T, 16)
                    }
                }(),
                B = t.now = function() {
                    var l = y.performance,
                        T = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return T && V.bind ? T.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                $ = f(function(l) {
                    function T(ie, pe) {
                        var Te = g(("" + ie).split(re)),
                            he = Te[0];
                        pe = pe || {};
                        var Ge = z[he];
                        if (!Ge) return d("Unsupported property: " + he);
                        if (!pe.weak || !this.props[he]) {
                            var Ze = Ge[0],
                                Be = this.props[he];
                            return Be || (Be = this.props[he] = new Ze.Bare), Be.init(this.$el, Te, Ge, pe), Be
                        }
                    }

                    function S(ie, pe, Te) {
                        if (ie) {
                            var he = typeof ie;
                            if (pe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), he == "number" && pe) return this.timer = new Y({
                                duration: ie,
                                context: this,
                                complete: P
                            }), void(this.active = !0);
                            if (he == "string" && pe) {
                                switch (ie) {
                                    case "hide":
                                        K.call(this);
                                        break;
                                    case "stop":
                                        te.call(this);
                                        break;
                                    case "redraw":
                                        fe.call(this);
                                        break;
                                    default:
                                        T.call(this, ie, Te && Te[1])
                                }
                                return P.call(this)
                            }
                            if (he == "function") return void ie.call(this, this);
                            if (he == "object") {
                                var Ge = 0;
                                ct.call(this, ie, function(Se, xy) {
                                    Se.span > Ge && (Ge = Se.span), Se.stop(), Se.animate(xy)
                                }, function(Se) {
                                    "wait" in Se && (Ge = c(Se.wait, 0))
                                }), we.call(this), Ge > 0 && (this.timer = new Y({
                                    duration: Ge,
                                    context: this
                                }), this.active = !0, pe && (this.timer.complete = P));
                                var Ze = this,
                                    Be = !1,
                                    fn = {};
                                G(function() {
                                    ct.call(Ze, ie, function(Se) {
                                        Se.active && (Be = !0, fn[Se.name] = Se.nextStyle)
                                    }), Be && Ze.$el.css(fn)
                                })
                            }
                        }
                    }

                    function N(ie) {
                        ie = c(ie, 0), this.active ? this.queue.push({
                            options: ie
                        }) : (this.timer = new Y({
                            duration: ie,
                            context: this,
                            complete: P
                        }), this.active = !0)
                    }

                    function b(ie) {
                        return this.active ? (this.queue.push({
                            options: ie,
                            args: arguments
                        }), void(this.timer.complete = P)) : d("No active transition timer. Use start() or wait() before then().")
                    }

                    function P() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ie = this.queue.shift();
                            S.call(this, ie.options, !0, ie.args)
                        }
                    }

                    function te(ie) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var pe;
                        typeof ie == "string" ? (pe = {}, pe[ie] = 1) : pe = typeof ie == "object" && ie != null ? ie : this.props, ct.call(this, pe, Fe), we.call(this)
                    }

                    function se(ie) {
                        te.call(this, ie), ct.call(this, ie, Sr, Ry)
                    }

                    function me(ie) {
                        typeof ie != "string" && (ie = "block"), this.el.style.display = ie
                    }

                    function K() {
                        te.call(this), this.el.style.display = "none"
                    }

                    function fe() {
                        this.el.offsetHeight
                    }

                    function de() {
                        te.call(this), e.removeData(this.el, C), this.$el = this.el = null
                    }

                    function we() {
                        var ie, pe, Te = [];
                        this.upstream && Te.push(this.upstream);
                        for (ie in this.props) pe = this.props[ie], pe.active && Te.push(pe.string);
                        Te = Te.join(","), this.style !== Te && (this.style = Te, this.el.style[V.transition.dom] = Te)
                    }

                    function ct(ie, pe, Te) {
                        var he, Ge, Ze, Be, fn = pe !== Fe,
                            Se = {};
                        for (he in ie) Ze = ie[he], he in ge ? (Se.transform || (Se.transform = {}), Se.transform[he] = Ze) : (x.test(he) && (he = r(he)), he in z ? Se[he] = Ze : (Be || (Be = {}), Be[he] = Ze));
                        for (he in Se) {
                            if (Ze = Se[he], Ge = this.props[he], !Ge) {
                                if (!fn) continue;
                                Ge = T.call(this, he)
                            }
                            pe.call(this, Ge, Ze)
                        }
                        Te && Be && Te.call(this, Be)
                    }

                    function Fe(ie) {
                        ie.stop()
                    }

                    function Sr(ie, pe) {
                        ie.set(pe)
                    }

                    function Ry(ie) {
                        this.$el.css(ie)
                    }

                    function $e(ie, pe) {
                        l[ie] = function() {
                            return this.children ? Cy.call(this, pe, arguments) : (this.el && pe.apply(this, arguments), this)
                        }
                    }

                    function Cy(ie, pe) {
                        var Te, he = this.children.length;
                        for (Te = 0; he > Te; Te++) ie.apply(this.children[Te], pe);
                        return this
                    }
                    l.init = function(ie) {
                        if (this.$el = e(ie), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ae.keepInherited && !ae.fallback) {
                            var pe = k(this.el, "transition");
                            pe && !J.test(pe) && (this.upstream = pe)
                        }
                        V.backface && ae.hideBackface && _(this.el, V.backface.css, "hidden")
                    }, $e("add", T), $e("start", S), $e("wait", N), $e("then", b), $e("next", P), $e("stop", te), $e("set", se), $e("show", me), $e("hide", K), $e("redraw", fe), $e("destroy", de)
                }),
                E = f($, function(l) {
                    function T(S, N) {
                        var b = e.data(S, C) || e.data(S, C, new $.Bare);
                        return b.el || b.init(S), N ? b.start(N) : b
                    }
                    l.init = function(S, N) {
                        var b = e(S);
                        if (!b.length) return this;
                        if (b.length === 1) return T(b[0], N);
                        var P = [];
                        return b.each(function(te, se) {
                            P.push(T(se, N))
                        }), this.children = P, this
                    }
                }),
                I = f(function(l) {
                    function T() {
                        var P = this.get();
                        this.update("auto");
                        var te = this.get();
                        return this.update(P), te
                    }

                    function S(P, te, se) {
                        return te !== void 0 && (se = te), P in m ? P : se
                    }

                    function N(P) {
                        var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
                        return (te ? o(te[1], te[2], te[3]) : P).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var b = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(P, te, se, me) {
                        this.$el = P, this.el = P[0];
                        var K = te[0];
                        se[2] && (K = se[2]), Z[K] && (K = Z[K]), this.name = K, this.type = se[1], this.duration = c(te[1], this.duration, b.duration), this.ease = S(te[2], this.ease, b.ease), this.delay = c(te[3], this.delay, b.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = oe.test(this.name), this.unit = me.unit || this.unit || ae.defaultUnit, this.angle = me.angle || this.angle || ae.defaultAngle, ae.fallback || me.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + m[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
                    }, l.set = function(P) {
                        P = this.convert(P, this.type), this.update(P), this.redraw()
                    }, l.transition = function(P) {
                        this.active = !0, P = this.convert(P, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), P == "auto" && (P = T.call(this))), this.nextStyle = P
                    }, l.fallback = function(P) {
                        var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                        P = this.convert(P, this.type), this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), P == "auto" && (P = T.call(this))), this.tween = new R({
                            from: te,
                            to: P,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return k(this.el, this.name)
                    }, l.update = function(P) {
                        _(this.el, this.name, P)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, _(this.el, this.name, this.get()));
                        var P = this.tween;
                        P && P.context && P.destroy()
                    }, l.convert = function(P, te) {
                        if (P == "auto" && this.auto) return P;
                        var se, me = typeof P == "number",
                            K = typeof P == "string";
                        switch (te) {
                            case w:
                                if (me) return P;
                                if (K && P.replace(A, "") === "") return +P;
                                se = "number(unitless)";
                                break;
                            case L:
                                if (K) {
                                    if (P === "" && this.original) return this.original;
                                    if (te.test(P)) return P.charAt(0) == "#" && P.length == 7 ? P : N(P)
                                }
                                se = "hex or rgb string";
                                break;
                            case q:
                                if (me) return P + this.unit;
                                if (K && te.test(P)) return P;
                                se = "number(px) or string(unit)";
                                break;
                            case M:
                                if (me) return P + this.unit;
                                if (K && te.test(P)) return P;
                                se = "number(px) or string(unit or %)";
                                break;
                            case H:
                                if (me) return P + this.angle;
                                if (K && te.test(P)) return P;
                                se = "number(deg) or string(angle)";
                                break;
                            case Q:
                                if (me || K && M.test(P)) return P;
                                se = "number(unitless) or string(unit or %)"
                        }
                        return a(se, P), P
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                v = f(I, function(l, T) {
                    l.init = function() {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), L))
                    }
                }),
                W = f(I, function(l, T) {
                    l.init = function() {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(S) {
                        this.$el[this.name](S)
                    }
                }),
                j = f(I, function(l, T) {
                    function S(N, b) {
                        var P, te, se, me, K;
                        for (P in N) me = ge[P], se = me[0], te = me[1] || P, K = this.convert(N[P], se), b.call(this, te, K, se)
                    }
                    l.init = function() {
                        T.init.apply(this, arguments), this.current || (this.current = {}, ge.perspective && ae.perspective && (this.current.perspective = ae.perspective, _(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(N) {
                        S.call(this, N, function(b, P) {
                            this.current[b] = P
                        }), _(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(N) {
                        var b = this.values(N);
                        this.tween = new ve({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var P, te = {};
                        for (P in this.current) te[P] = P in b ? b[P] : this.current[P];
                        this.active = !0, this.nextStyle = this.style(te)
                    }, l.fallback = function(N) {
                        var b = this.values(N);
                        this.tween = new ve({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        _(this.el, this.name, this.style(this.current))
                    }, l.style = function(N) {
                        var b, P = "";
                        for (b in N) P += b + "(" + N[b] + ") ";
                        return P
                    }, l.values = function(N) {
                        var b, P = {};
                        return S.call(this, N, function(te, se, me) {
                            P[te] = se, this.current[te] === void 0 && (b = 0, ~te.indexOf("scale") && (b = 1), this.current[te] = this.convert(b, me))
                        }), P
                    }
                }),
                R = f(function(l) {
                    function T(K) {
                        se.push(K) === 1 && G(S)
                    }

                    function S() {
                        var K, fe, de, we = se.length;
                        if (we)
                            for (G(S), fe = B(), K = we; K--;) de = se[K], de && de.render(fe)
                    }

                    function N(K) {
                        var fe, de = e.inArray(K, se);
                        de >= 0 && (fe = se.slice(de + 1), se.length = de, fe.length && (se = se.concat(fe)))
                    }

                    function b(K) {
                        return Math.round(K * me) / me
                    }

                    function P(K, fe, de) {
                        return o(K[0] + de * (fe[0] - K[0]), K[1] + de * (fe[1] - K[1]), K[2] + de * (fe[2] - K[2]))
                    }
                    var te = {
                        ease: m.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(K) {
                        this.duration = K.duration || 0, this.delay = K.delay || 0;
                        var fe = K.ease || te.ease;
                        m[fe] && (fe = m[fe][1]), typeof fe != "function" && (fe = te.ease), this.ease = fe, this.update = K.update || i, this.complete = K.complete || i, this.context = K.context || this, this.name = K.name;
                        var de = K.from,
                            we = K.to;
                        de === void 0 && (de = te.from), we === void 0 && (we = te.to), this.unit = K.unit || "", typeof de == "number" && typeof we == "number" ? (this.begin = de, this.change = we - de) : this.format(we, de), this.value = this.begin + this.unit, this.start = B(), K.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = B()), this.active = !0, T(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, N(this))
                    }, l.render = function(K) {
                        var fe, de = K - this.start;
                        if (this.delay) {
                            if (de <= this.delay) return;
                            de -= this.delay
                        }
                        if (de < this.duration) {
                            var we = this.ease(de, 0, 1, this.duration);
                            return fe = this.startRGB ? P(this.startRGB, this.endRGB, we) : b(this.begin + we * this.change), this.value = fe + this.unit, void this.update.call(this.context, this.value)
                        }
                        fe = this.endHex || this.begin + this.change, this.value = fe + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(K, fe) {
                        if (fe += "", K += "", K.charAt(0) == "#") return this.startRGB = n(fe), this.endRGB = n(K), this.endHex = K, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var de = fe.replace(A, ""),
                                we = K.replace(A, "");
                            de !== we && s("tween", fe, K), this.unit = de
                        }
                        fe = parseFloat(fe), K = parseFloat(K), this.begin = this.value = fe, this.change = K - fe
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = i
                    };
                    var se = [],
                        me = 1e3
                }),
                Y = f(R, function(l) {
                    l.init = function(T) {
                        this.duration = T.duration || 0, this.complete = T.complete || i, this.context = T.context, this.play()
                    }, l.render = function(T) {
                        var S = T - this.start;
                        S < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                ve = f(R, function(l, T) {
                    l.init = function(S) {
                        this.context = S.context, this.update = S.update, this.tweens = [], this.current = S.current;
                        var N, b;
                        for (N in S.values) b = S.values[N], this.current[N] !== b && this.tweens.push(new R({
                            name: N,
                            from: this.current[N],
                            to: b,
                            duration: S.duration,
                            delay: S.delay,
                            ease: S.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(S) {
                        var N, b, P = this.tweens.length,
                            te = !1;
                        for (N = P; N--;) b = this.tweens[N], b.context && (b.render(S), this.current[b.name] = b.value, te = !0);
                        return te ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (T.destroy.call(this), this.tweens) {
                            var S, N = this.tweens.length;
                            for (S = N; S--;) this.tweens[S].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ae = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !V.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!V.transition) return ae.fallback = !0;
                ae.agentTests.push("(" + l + ")");
                var T = new RegExp(ae.agentTests.join("|"), "i");
                ae.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new R(l)
            }, t.delay = function(l, T, S) {
                return new Y({
                    complete: T,
                    duration: l,
                    context: S
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var _ = e.style,
                k = e.css,
                Z = {
                    transform: V.transform && V.transform.css
                },
                z = {
                    color: [v, L],
                    background: [v, L, "background-color"],
                    "outline-color": [v, L],
                    "border-color": [v, L],
                    "border-top-color": [v, L],
                    "border-right-color": [v, L],
                    "border-bottom-color": [v, L],
                    "border-left-color": [v, L],
                    "border-width": [I, q],
                    "border-top-width": [I, q],
                    "border-right-width": [I, q],
                    "border-bottom-width": [I, q],
                    "border-left-width": [I, q],
                    "border-spacing": [I, q],
                    "letter-spacing": [I, q],
                    margin: [I, q],
                    "margin-top": [I, q],
                    "margin-right": [I, q],
                    "margin-bottom": [I, q],
                    "margin-left": [I, q],
                    padding: [I, q],
                    "padding-top": [I, q],
                    "padding-right": [I, q],
                    "padding-bottom": [I, q],
                    "padding-left": [I, q],
                    "outline-width": [I, q],
                    opacity: [I, w],
                    top: [I, M],
                    right: [I, M],
                    bottom: [I, M],
                    left: [I, M],
                    "font-size": [I, M],
                    "text-indent": [I, M],
                    "word-spacing": [I, M],
                    width: [I, M],
                    "min-width": [I, M],
                    "max-width": [I, M],
                    height: [I, M],
                    "min-height": [I, M],
                    "max-height": [I, M],
                    "line-height": [I, Q],
                    "scroll-top": [W, w, "scrollTop"],
                    "scroll-left": [W, w, "scrollLeft"]
                },
                ge = {};
            V.transform && (z.transform = [j], ge = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [H],
                rotateX: [H],
                rotateY: [H],
                scale: [w],
                scaleX: [w],
                scaleY: [w],
                skew: [H],
                skewX: [H],
                skewY: [H]
            }), V.transform && V.backface && (ge.z = [M, "translateZ"], ge.rotateZ = [H], ge.scaleZ = [w], ge.perspective = [q]);
            var Qe = /ms/,
                We = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ls = u((tB, Ps) => {
        var Ny = window.$,
            Py = Bi() && Ny.tram;
        Ps.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                o = Function.prototype,
                i = r.push,
                a = r.slice,
                s = r.concat,
                c = n.toString,
                d = n.hasOwnProperty,
                g = r.forEach,
                f = r.map,
                m = r.reduce,
                p = r.reduceRight,
                h = r.filter,
                y = r.every,
                C = r.some,
                A = r.indexOf,
                x = r.lastIndexOf,
                w = Array.isArray,
                L = Object.keys,
                q = o.bind,
                M = e.each = e.forEach = function(O, F, X) {
                    if (O == null) return O;
                    if (g && O.forEach === g) O.forEach(F, X);
                    else if (O.length === +O.length) {
                        for (var V = 0, ee = O.length; V < ee; V++)
                            if (F.call(X, O[V], V, O) === t) return
                    } else
                        for (var ne = e.keys(O), V = 0, ee = ne.length; V < ee; V++)
                            if (F.call(X, O[ne[V]], ne[V], O) === t) return;
                    return O
                };
            e.map = e.collect = function(O, F, X) {
                var V = [];
                return O == null ? V : f && O.map === f ? O.map(F, X) : (M(O, function(ee, ne, G) {
                    V.push(F.call(X, ee, ne, G))
                }), V)
            }, e.find = e.detect = function(O, F, X) {
                var V;
                return H(O, function(ee, ne, G) {
                    if (F.call(X, ee, ne, G)) return V = ee, !0
                }), V
            }, e.filter = e.select = function(O, F, X) {
                var V = [];
                return O == null ? V : h && O.filter === h ? O.filter(F, X) : (M(O, function(ee, ne, G) {
                    F.call(X, ee, ne, G) && V.push(ee)
                }), V)
            };
            var H = e.some = e.any = function(O, F, X) {
                F || (F = e.identity);
                var V = !1;
                return O == null ? V : C && O.some === C ? O.some(F, X) : (M(O, function(ee, ne, G) {
                    if (V || (V = F.call(X, ee, ne, G))) return t
                }), !!V)
            };
            e.contains = e.include = function(O, F) {
                return O == null ? !1 : A && O.indexOf === A ? O.indexOf(F) != -1 : H(O, function(X) {
                    return X === F
                })
            }, e.delay = function(O, F) {
                var X = a.call(arguments, 2);
                return setTimeout(function() {
                    return O.apply(null, X)
                }, F)
            }, e.defer = function(O) {
                return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(O) {
                var F, X, V;
                return function() {
                    F || (F = !0, X = arguments, V = this, Py.frame(function() {
                        F = !1, O.apply(V, X)
                    }))
                }
            }, e.debounce = function(O, F, X) {
                var V, ee, ne, G, B, $ = function() {
                    var E = e.now() - G;
                    E < F ? V = setTimeout($, F - E) : (V = null, X || (B = O.apply(ne, ee), ne = ee = null))
                };
                return function() {
                    ne = this, ee = arguments, G = e.now();
                    var E = X && !V;
                    return V || (V = setTimeout($, F)), E && (B = O.apply(ne, ee), ne = ee = null), B
                }
            }, e.defaults = function(O) {
                if (!e.isObject(O)) return O;
                for (var F = 1, X = arguments.length; F < X; F++) {
                    var V = arguments[F];
                    for (var ee in V) O[ee] === void 0 && (O[ee] = V[ee])
                }
                return O
            }, e.keys = function(O) {
                if (!e.isObject(O)) return [];
                if (L) return L(O);
                var F = [];
                for (var X in O) e.has(O, X) && F.push(X);
                return F
            }, e.has = function(O, F) {
                return d.call(O, F)
            }, e.isObject = function(O) {
                return O === Object(O)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var Q = /(.)^/,
                J = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                oe = /\\|'|\r|\n|\u2028|\u2029/g,
                re = function(O) {
                    return "\\" + J[O]
                },
                U = /^\s*(\w|\$)+\s*$/;
            return e.template = function(O, F, X) {
                !F && X && (F = X), F = e.defaults({}, F, e.templateSettings);
                var V = RegExp([(F.escape || Q).source, (F.interpolate || Q).source, (F.evaluate || Q).source].join("|") + "|$", "g"),
                    ee = 0,
                    ne = "__p+='";
                O.replace(V, function(E, I, v, W, j) {
                    return ne += O.slice(ee, j).replace(oe, re), ee = j + E.length, I ? ne += `'+
((__t=(` + I + `))==null?'':_.escape(__t))+
'` : v ? ne += `'+
((__t=(` + v + `))==null?'':__t)+
'` : W && (ne += `';
` + W + `
__p+='`), E
                }), ne += `';
`;
                var G = F.variable;
                if (G) {
                    if (!U.test(G)) throw new Error("variable is not a bare identifier: " + G)
                } else ne = `with(obj||{}){
` + ne + `}
`, G = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var B;
                try {
                    B = new Function(F.variable || "obj", "_", ne)
                } catch (E) {
                    throw E.source = ne, E
                }
                var $ = function(E) {
                    return B.call(this, E, e)
                };
                return $.source = "function(" + G + `){
` + ne + "}", $
            }, e
        }()
    });
    var He = u((rB, Vs) => {
        var Ee = {},
            Yt = {},
            Qt = [],
            ki = window.Webflow || [],
            bt = window.jQuery,
            et = bt(window),
            Ly = bt(document),
            lt = bt.isFunction,
            Je = Ee._ = Ls(),
            Ds = Ee.tram = Bi() && bt.tram,
            pn = !1,
            ji = !1;
        Ds.config.hideBackface = !1;
        Ds.config.keepInherited = !0;
        Ee.define = function(e, t, r) {
            Yt[e] && Fs(Yt[e]);
            var n = Yt[e] = t(bt, Je, r) || {};
            return Ms(n), n
        };
        Ee.require = function(e) {
            return Yt[e]
        };

        function Ms(e) {
            Ee.env() && (lt(e.design) && et.on("__wf_design", e.design), lt(e.preview) && et.on("__wf_preview", e.preview)), lt(e.destroy) && et.on("__wf_destroy", e.destroy), e.ready && lt(e.ready) && qy(e)
        }

        function qy(e) {
            if (pn) {
                e.ready();
                return
            }
            Je.contains(Qt, e.ready) || Qt.push(e.ready)
        }

        function Fs(e) {
            lt(e.design) && et.off("__wf_design", e.design), lt(e.preview) && et.off("__wf_preview", e.preview), lt(e.destroy) && et.off("__wf_destroy", e.destroy), e.ready && lt(e.ready) && Dy(e)
        }

        function Dy(e) {
            Qt = Je.filter(Qt, function(t) {
                return t !== e.ready
            })
        }
        Ee.push = function(e) {
            if (pn) {
                lt(e) && e();
                return
            }
            ki.push(e)
        };
        Ee.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var dn = navigator.userAgent.toLowerCase(),
            Gs = Ee.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            My = Ee.env.chrome = /chrome/.test(dn) && /Google/.test(navigator.vendor) && parseInt(dn.match(/chrome\/(\d+)\./)[1], 10),
            Fy = Ee.env.ios = /(ipod|iphone|ipad)/.test(dn);
        Ee.env.safari = /safari/.test(dn) && !My && !Fy;
        var Hi;
        Gs && Ly.on("touchstart mousedown", function(e) {
            Hi = e.target
        });
        Ee.validClick = Gs ? function(e) {
            return e === Hi || bt.contains(e, Hi)
        } : function() {
            return !0
        };
        var Us = "resize.webflow orientationchange.webflow load.webflow",
            Gy = "scroll.webflow " + Us;
        Ee.resize = Ki(et, Us);
        Ee.scroll = Ki(et, Gy);
        Ee.redraw = Ki();

        function Ki(e, t) {
            var r = [],
                n = {};
            return n.up = Je.throttle(function(o) {
                Je.each(r, function(i) {
                    i(o)
                })
            }), e && t && e.on(t, n.up), n.on = function(o) {
                typeof o == "function" && (Je.contains(r, o) || r.push(o))
            }, n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Je.filter(r, function(i) {
                    return i !== o
                })
            }, n
        }
        Ee.location = function(e) {
            window.location = e
        };
        Ee.env() && (Ee.location = function() {});
        Ee.ready = function() {
            pn = !0, ji ? Uy() : Je.each(Qt, qs), Je.each(ki, qs), Ee.resize.up()
        };

        function qs(e) {
            lt(e) && e()
        }

        function Uy() {
            ji = !1, Je.each(Yt, Ms)
        }
        var Dt;
        Ee.load = function(e) {
            Dt.then(e)
        };

        function Xs() {
            Dt && (Dt.reject(), et.off("load", Dt.resolve)), Dt = new bt.Deferred, et.on("load", Dt.resolve)
        }
        Ee.destroy = function(e) {
            e = e || {}, ji = !0, et.triggerHandler("__wf_destroy"), e.domready != null && (pn = e.domready), Je.each(Yt, Fs), Ee.resize.off(), Ee.scroll.off(), Ee.redraw.off(), Qt = [], ki = [], Dt.state() === "pending" && Xs()
        };
        bt(Ee.ready);
        Xs();
        Vs.exports = window.Webflow = Ee
    });
    var Hs = u((nB, Bs) => {
        var Ws = He();
        Ws.define("brand", Bs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                o = e("body"),
                i = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                d;
            t.ready = function() {
                var p = n.attr("data-wf-status"),
                    h = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(h) && a.hostname !== h && (p = !0), p && !s && (d = d || f(), m(), setTimeout(m, 500), e(r).off(c, g).on(c, g))
            };

            function g() {
                var p = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", p ? "display: none !important;" : "")
            }

            function f() {
                var p = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    h = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return p.append(h, y), p[0]
            }

            function m() {
                var p = o.children(i),
                    h = p.length && p.get(0) === d,
                    y = Ws.env("editor");
                if (h) {
                    y && p.remove();
                    return
                }
                p.length && p.remove(), y || o.append(d)
            }
            return t
        })
    });
    var js = u((iB, ks) => {
        var zi = He();
        zi.define("edit", ks.exports = function(e, t, r) {
            if (r = r || {}, (zi.env("test") || zi.env("frame")) && !r.fixture && !Xy()) return {
                exit: 1
            };
            var n = {},
                o = e(window),
                i = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                c, d = r.load || m,
                g = !1;
            try {
                g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            g ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : o.on(s, f).triggerHandler(s);

            function f() {
                c || /\?edit/.test(a.hash) && d()
            }

            function m() {
                c = !0, window.WebflowEditor = !0, o.off(s, f), x(function(L) {
                    e.ajax({
                        url: A("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: p(L)
                    })
                })
            }

            function p(L) {
                return function(q) {
                    if (!q) {
                        console.error("Could not load editor data");
                        return
                    }
                    q.thirdPartyCookiesSupported = L, h(C(q.bugReporterScriptPath), function() {
                        h(C(q.scriptPath), function() {
                            window.WebflowEditor(q)
                        })
                    })
                }
            }

            function h(L, q) {
                e.ajax({
                    type: "GET",
                    url: L,
                    dataType: "script",
                    cache: !0
                }).then(q, y)
            }

            function y(L, q, M) {
                throw console.error("Could not load editor script: " + q), M
            }

            function C(L) {
                return L.indexOf("//") >= 0 ? L : A("https://editor-api.webflow.com" + L)
            }

            function A(L) {
                return L.replace(/([^:])\/\//g, "$1/")
            }

            function x(L) {
                var q = window.document.createElement("iframe");
                q.src = "https://webflow.com/site/third-party-cookie-check.html", q.style.display = "none", q.sandbox = "allow-scripts allow-same-origin";
                var M = function(H) {
                    H.data === "WF_third_party_cookies_unsupported" ? (w(q, M), L(!1)) : H.data === "WF_third_party_cookies_supported" && (w(q, M), L(!0))
                };
                q.onerror = function() {
                    w(q, M), L(!1)
                }, window.addEventListener("message", M, !1), window.document.body.appendChild(q)
            }

            function w(L, q) {
                window.removeEventListener("message", q, !1), L.remove()
            }
            return n
        });

        function Xy() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var zs = u((oB, Ks) => {
        var Vy = He();
        Vy.define("focus-visible", Ks.exports = function() {
            function e(r) {
                var n = !0,
                    o = !1,
                    i = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(w) {
                    return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList" in w && "contains" in w.classList)
                }

                function c(w) {
                    var L = w.type,
                        q = w.tagName;
                    return !!(q === "INPUT" && a[L] && !w.readOnly || q === "TEXTAREA" && !w.readOnly || w.isContentEditable)
                }

                function d(w) {
                    w.getAttribute("data-wf-focus-visible") || w.setAttribute("data-wf-focus-visible", "true")
                }

                function g(w) {
                    w.getAttribute("data-wf-focus-visible") && w.removeAttribute("data-wf-focus-visible")
                }

                function f(w) {
                    w.metaKey || w.altKey || w.ctrlKey || (s(r.activeElement) && d(r.activeElement), n = !0)
                }

                function m() {
                    n = !1
                }

                function p(w) {
                    s(w.target) && (n || c(w.target)) && d(w.target)
                }

                function h(w) {
                    s(w.target) && w.target.hasAttribute("data-wf-focus-visible") && (o = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                        o = !1
                    }, 100), g(w.target))
                }

                function y() {
                    document.visibilityState === "hidden" && (o && (n = !0), C())
                }

                function C() {
                    document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
                }

                function A() {
                    document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
                }

                function x(w) {
                    w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (n = !1, A())
                }
                document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("visibilitychange", y, !0), C(), r.addEventListener("focus", p, !0), r.addEventListener("blur", h, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var $s = u((aB, Qs) => {
        var Ys = He();
        Ys.define("focus", Qs.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }

            function o(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ys.env.safari && (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        })
    });
    var eu = u((sB, Js) => {
        "use strict";
        var Yi = window.jQuery,
            ft = {},
            vn = [],
            Zs = ".w-ix",
            gn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Yi(t).triggerHandler(ft.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Yi(t).triggerHandler(ft.types.OUTRO))
                }
            };
        ft.triggers = {};
        ft.types = {
            INTRO: "w-ix-intro" + Zs,
            OUTRO: "w-ix-outro" + Zs
        };
        ft.init = function() {
            for (var e = vn.length, t = 0; t < e; t++) {
                var r = vn[t];
                r[0](0, r[1])
            }
            vn = [], Yi.extend(ft.triggers, gn)
        };
        ft.async = function() {
            for (var e in gn) {
                var t = gn[e];
                gn.hasOwnProperty(e) && (ft.triggers[e] = function(r, n) {
                    vn.push([t, n])
                })
            }
        };
        ft.async();
        Js.exports = ft
    });
    var En = u((uB, nu) => {
        "use strict";
        var Qi = eu();

        function tu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var Wy = window.jQuery,
            hn = {},
            ru = ".w-ix",
            By = {
                reset: function(e, t) {
                    Qi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Qi.triggers.intro(e, t), tu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Qi.triggers.outro(e, t), tu(t, "COMPONENT_INACTIVE")
                }
            };
        hn.triggers = {};
        hn.types = {
            INTRO: "w-ix-intro" + ru,
            OUTRO: "w-ix-outro" + ru
        };
        Wy.extend(hn.triggers, By);
        nu.exports = hn
    });
    var iu = u((cB, mt) => {
        function $i(e) {
            return mt.exports = $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, mt.exports.__esModule = !0, mt.exports.default = mt.exports, $i(e)
        }
        mt.exports = $i, mt.exports.__esModule = !0, mt.exports.default = mt.exports
    });
    var Mt = u((lB, Ar) => {
        var Hy = iu().default;

        function ou(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (ou = function(o) {
                return o ? r : t
            })(e)
        }

        function ky(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || Hy(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = ou(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e, r && r.set(e, n), n
        }
        Ar.exports = ky, Ar.exports.__esModule = !0, Ar.exports.default = Ar.exports
    });
    var tt = u((fB, Rr) => {
        function jy(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Rr.exports = jy, Rr.exports.__esModule = !0, Rr.exports.default = Rr.exports
    });
    var Ie = u((dB, au) => {
        var _n = function(e) {
            return e && e.Math == Math && e
        };
        au.exports = _n(typeof globalThis == "object" && globalThis) || _n(typeof window == "object" && window) || _n(typeof self == "object" && self) || _n(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var $t = u((pB, su) => {
        su.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ft = u((vB, uu) => {
        var Ky = $t();
        uu.exports = !Ky(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var mn = u((gB, cu) => {
        var Cr = Function.prototype.call;
        cu.exports = Cr.bind ? Cr.bind(Cr) : function() {
            return Cr.apply(Cr, arguments)
        }
    });
    var pu = u(du => {
        "use strict";
        var lu = {}.propertyIsEnumerable,
            fu = Object.getOwnPropertyDescriptor,
            zy = fu && !lu.call({
                1: 2
            }, 1);
        du.f = zy ? function(t) {
            var r = fu(this, t);
            return !!r && r.enumerable
        } : lu
    });
    var Zi = u((EB, vu) => {
        vu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var rt = u((_B, hu) => {
        var gu = Function.prototype,
            Ji = gu.bind,
            eo = gu.call,
            Yy = Ji && Ji.bind(eo);
        hu.exports = Ji ? function(e) {
            return e && Yy(eo, e)
        } : function(e) {
            return e && function() {
                return eo.apply(e, arguments)
            }
        }
    });
    var mu = u((mB, _u) => {
        var Eu = rt(),
            Qy = Eu({}.toString),
            $y = Eu("".slice);
        _u.exports = function(e) {
            return $y(Qy(e), 8, -1)
        }
    });
    var Iu = u((yB, yu) => {
        var Zy = Ie(),
            Jy = rt(),
            eI = $t(),
            tI = mu(),
            to = Zy.Object,
            rI = Jy("".split);
        yu.exports = eI(function() {
            return !to("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return tI(e) == "String" ? rI(e, "") : to(e)
        } : to
    });
    var ro = u((IB, Tu) => {
        var nI = Ie(),
            iI = nI.TypeError;
        Tu.exports = function(e) {
            if (e == null) throw iI("Can't call method on " + e);
            return e
        }
    });
    var xr = u((TB, Ou) => {
        var oI = Iu(),
            aI = ro();
        Ou.exports = function(e) {
            return oI(aI(e))
        }
    });
    var dt = u((OB, bu) => {
        bu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Zt = u((bB, wu) => {
        var sI = dt();
        wu.exports = function(e) {
            return typeof e == "object" ? e !== null : sI(e)
        }
    });
    var Nr = u((wB, Su) => {
        var no = Ie(),
            uI = dt(),
            cI = function(e) {
                return uI(e) ? e : void 0
            };
        Su.exports = function(e, t) {
            return arguments.length < 2 ? cI(no[e]) : no[e] && no[e][t]
        }
    });
    var Ru = u((SB, Au) => {
        var lI = rt();
        Au.exports = lI({}.isPrototypeOf)
    });
    var xu = u((AB, Cu) => {
        var fI = Nr();
        Cu.exports = fI("navigator", "userAgent") || ""
    });
    var Fu = u((RB, Mu) => {
        var Du = Ie(),
            io = xu(),
            Nu = Du.process,
            Pu = Du.Deno,
            Lu = Nu && Nu.versions || Pu && Pu.version,
            qu = Lu && Lu.v8,
            nt, yn;
        qu && (nt = qu.split("."), yn = nt[0] > 0 && nt[0] < 4 ? 1 : +(nt[0] + nt[1]));
        !yn && io && (nt = io.match(/Edge\/(\d+)/), (!nt || nt[1] >= 74) && (nt = io.match(/Chrome\/(\d+)/), nt && (yn = +nt[1])));
        Mu.exports = yn
    });
    var oo = u((CB, Uu) => {
        var Gu = Fu(),
            dI = $t();
        Uu.exports = !!Object.getOwnPropertySymbols && !dI(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Gu && Gu < 41
        })
    });
    var ao = u((xB, Xu) => {
        var pI = oo();
        Xu.exports = pI && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var so = u((NB, Vu) => {
        var vI = Ie(),
            gI = Nr(),
            hI = dt(),
            EI = Ru(),
            _I = ao(),
            mI = vI.Object;
        Vu.exports = _I ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = gI("Symbol");
            return hI(t) && EI(t.prototype, mI(e))
        }
    });
    var Bu = u((PB, Wu) => {
        var yI = Ie(),
            II = yI.String;
        Wu.exports = function(e) {
            try {
                return II(e)
            } catch {
                return "Object"
            }
        }
    });
    var ku = u((LB, Hu) => {
        var TI = Ie(),
            OI = dt(),
            bI = Bu(),
            wI = TI.TypeError;
        Hu.exports = function(e) {
            if (OI(e)) return e;
            throw wI(bI(e) + " is not a function")
        }
    });
    var Ku = u((qB, ju) => {
        var SI = ku();
        ju.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : SI(r)
        }
    });
    var Yu = u((DB, zu) => {
        var AI = Ie(),
            uo = mn(),
            co = dt(),
            lo = Zt(),
            RI = AI.TypeError;
        zu.exports = function(e, t) {
            var r, n;
            if (t === "string" && co(r = e.toString) && !lo(n = uo(r, e)) || co(r = e.valueOf) && !lo(n = uo(r, e)) || t !== "string" && co(r = e.toString) && !lo(n = uo(r, e))) return n;
            throw RI("Can't convert object to primitive value")
        }
    });
    var $u = u((MB, Qu) => {
        Qu.exports = !1
    });
    var In = u((FB, Ju) => {
        var Zu = Ie(),
            CI = Object.defineProperty;
        Ju.exports = function(e, t) {
            try {
                CI(Zu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Zu[e] = t
            }
            return t
        }
    });
    var Tn = u((GB, tc) => {
        var xI = Ie(),
            NI = In(),
            ec = "__core-js_shared__",
            PI = xI[ec] || NI(ec, {});
        tc.exports = PI
    });
    var fo = u((UB, nc) => {
        var LI = $u(),
            rc = Tn();
        (nc.exports = function(e, t) {
            return rc[e] || (rc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: LI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var oc = u((XB, ic) => {
        var qI = Ie(),
            DI = ro(),
            MI = qI.Object;
        ic.exports = function(e) {
            return MI(DI(e))
        }
    });
    var wt = u((VB, ac) => {
        var FI = rt(),
            GI = oc(),
            UI = FI({}.hasOwnProperty);
        ac.exports = Object.hasOwn || function(t, r) {
            return UI(GI(t), r)
        }
    });
    var po = u((WB, sc) => {
        var XI = rt(),
            VI = 0,
            WI = Math.random(),
            BI = XI(1.toString);
        sc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + BI(++VI + WI, 36)
        }
    });
    var vo = u((BB, dc) => {
        var HI = Ie(),
            kI = fo(),
            uc = wt(),
            jI = po(),
            cc = oo(),
            fc = ao(),
            Jt = kI("wks"),
            Gt = HI.Symbol,
            lc = Gt && Gt.for,
            KI = fc ? Gt : Gt && Gt.withoutSetter || jI;
        dc.exports = function(e) {
            if (!uc(Jt, e) || !(cc || typeof Jt[e] == "string")) {
                var t = "Symbol." + e;
                cc && uc(Gt, e) ? Jt[e] = Gt[e] : fc && lc ? Jt[e] = lc(t) : Jt[e] = KI(t)
            }
            return Jt[e]
        }
    });
    var hc = u((HB, gc) => {
        var zI = Ie(),
            YI = mn(),
            pc = Zt(),
            vc = so(),
            QI = Ku(),
            $I = Yu(),
            ZI = vo(),
            JI = zI.TypeError,
            eT = ZI("toPrimitive");
        gc.exports = function(e, t) {
            if (!pc(e) || vc(e)) return e;
            var r = QI(e, eT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = YI(r, e, t), !pc(n) || vc(n)) return n;
                throw JI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), $I(e, t)
        }
    });
    var go = u((kB, Ec) => {
        var tT = hc(),
            rT = so();
        Ec.exports = function(e) {
            var t = tT(e, "string");
            return rT(t) ? t : t + ""
        }
    });
    var Eo = u((jB, mc) => {
        var nT = Ie(),
            _c = Zt(),
            ho = nT.document,
            iT = _c(ho) && _c(ho.createElement);
        mc.exports = function(e) {
            return iT ? ho.createElement(e) : {}
        }
    });
    var _o = u((KB, yc) => {
        var oT = Ft(),
            aT = $t(),
            sT = Eo();
        yc.exports = !oT && !aT(function() {
            return Object.defineProperty(sT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var mo = u(Tc => {
        var uT = Ft(),
            cT = mn(),
            lT = pu(),
            fT = Zi(),
            dT = xr(),
            pT = go(),
            vT = wt(),
            gT = _o(),
            Ic = Object.getOwnPropertyDescriptor;
        Tc.f = uT ? Ic : function(t, r) {
            if (t = dT(t), r = pT(r), gT) try {
                return Ic(t, r)
            } catch {}
            if (vT(t, r)) return fT(!cT(lT.f, t, r), t[r])
        }
    });
    var Pr = u((YB, bc) => {
        var Oc = Ie(),
            hT = Zt(),
            ET = Oc.String,
            _T = Oc.TypeError;
        bc.exports = function(e) {
            if (hT(e)) return e;
            throw _T(ET(e) + " is not an object")
        }
    });
    var Lr = u(Ac => {
        var mT = Ie(),
            yT = Ft(),
            IT = _o(),
            wc = Pr(),
            TT = go(),
            OT = mT.TypeError,
            Sc = Object.defineProperty;
        Ac.f = yT ? Sc : function(t, r, n) {
            if (wc(t), r = TT(r), wc(n), IT) try {
                return Sc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw OT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var On = u(($B, Rc) => {
        var bT = Ft(),
            wT = Lr(),
            ST = Zi();
        Rc.exports = bT ? function(e, t, r) {
            return wT.f(e, t, ST(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var Io = u((ZB, Cc) => {
        var AT = rt(),
            RT = dt(),
            yo = Tn(),
            CT = AT(Function.toString);
        RT(yo.inspectSource) || (yo.inspectSource = function(e) {
            return CT(e)
        });
        Cc.exports = yo.inspectSource
    });
    var Pc = u((JB, Nc) => {
        var xT = Ie(),
            NT = dt(),
            PT = Io(),
            xc = xT.WeakMap;
        Nc.exports = NT(xc) && /native code/.test(PT(xc))
    });
    var To = u((eH, qc) => {
        var LT = fo(),
            qT = po(),
            Lc = LT("keys");
        qc.exports = function(e) {
            return Lc[e] || (Lc[e] = qT(e))
        }
    });
    var bn = u((tH, Dc) => {
        Dc.exports = {}
    });
    var Vc = u((rH, Xc) => {
        var DT = Pc(),
            Uc = Ie(),
            Oo = rt(),
            MT = Zt(),
            FT = On(),
            bo = wt(),
            wo = Tn(),
            GT = To(),
            UT = bn(),
            Mc = "Object already initialized",
            Ao = Uc.TypeError,
            XT = Uc.WeakMap,
            wn, qr, Sn, VT = function(e) {
                return Sn(e) ? qr(e) : wn(e, {})
            },
            WT = function(e) {
                return function(t) {
                    var r;
                    if (!MT(t) || (r = qr(t)).type !== e) throw Ao("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        DT || wo.state ? (St = wo.state || (wo.state = new XT), Fc = Oo(St.get), So = Oo(St.has), Gc = Oo(St.set), wn = function(e, t) {
            if (So(St, e)) throw new Ao(Mc);
            return t.facade = e, Gc(St, e, t), t
        }, qr = function(e) {
            return Fc(St, e) || {}
        }, Sn = function(e) {
            return So(St, e)
        }) : (Ut = GT("state"), UT[Ut] = !0, wn = function(e, t) {
            if (bo(e, Ut)) throw new Ao(Mc);
            return t.facade = e, FT(e, Ut, t), t
        }, qr = function(e) {
            return bo(e, Ut) ? e[Ut] : {}
        }, Sn = function(e) {
            return bo(e, Ut)
        });
        var St, Fc, So, Gc, Ut;
        Xc.exports = {
            set: wn,
            get: qr,
            has: Sn,
            enforce: VT,
            getterFor: WT
        }
    });
    var Hc = u((nH, Bc) => {
        var Ro = Ft(),
            BT = wt(),
            Wc = Function.prototype,
            HT = Ro && Object.getOwnPropertyDescriptor,
            Co = BT(Wc, "name"),
            kT = Co && function() {}.name === "something",
            jT = Co && (!Ro || Ro && HT(Wc, "name").configurable);
        Bc.exports = {
            EXISTS: Co,
            PROPER: kT,
            CONFIGURABLE: jT
        }
    });
    var Yc = u((iH, zc) => {
        var KT = Ie(),
            kc = dt(),
            zT = wt(),
            jc = On(),
            YT = In(),
            QT = Io(),
            Kc = Vc(),
            $T = Hc().CONFIGURABLE,
            ZT = Kc.get,
            JT = Kc.enforce,
            eO = String(String).split("String");
        (zc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1,
                i = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                c;
            if (kc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!zT(r, "name") || $T && r.name !== s) && jc(r, "name", s), c = JT(r), c.source || (c.source = eO.join(typeof s == "string" ? s : ""))), e === KT) {
                i ? e[t] = r : YT(t, r);
                return
            } else o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : jc(e, t, r)
        })(Function.prototype, "toString", function() {
            return kc(this) && ZT(this).source || QT(this)
        })
    });
    var xo = u((oH, Qc) => {
        var tO = Math.ceil,
            rO = Math.floor;
        Qc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? rO : tO)(t)
        }
    });
    var Zc = u((aH, $c) => {
        var nO = xo(),
            iO = Math.max,
            oO = Math.min;
        $c.exports = function(e, t) {
            var r = nO(e);
            return r < 0 ? iO(r + t, 0) : oO(r, t)
        }
    });
    var el = u((sH, Jc) => {
        var aO = xo(),
            sO = Math.min;
        Jc.exports = function(e) {
            return e > 0 ? sO(aO(e), 9007199254740991) : 0
        }
    });
    var rl = u((uH, tl) => {
        var uO = el();
        tl.exports = function(e) {
            return uO(e.length)
        }
    });
    var No = u((cH, il) => {
        var cO = xr(),
            lO = Zc(),
            fO = rl(),
            nl = function(e) {
                return function(t, r, n) {
                    var o = cO(t),
                        i = fO(o),
                        a = lO(n, i),
                        s;
                    if (e && r != r) {
                        for (; i > a;)
                            if (s = o[a++], s != s) return !0
                    } else
                        for (; i > a; a++)
                            if ((e || a in o) && o[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        il.exports = {
            includes: nl(!0),
            indexOf: nl(!1)
        }
    });
    var Lo = u((lH, al) => {
        var dO = rt(),
            Po = wt(),
            pO = xr(),
            vO = No().indexOf,
            gO = bn(),
            ol = dO([].push);
        al.exports = function(e, t) {
            var r = pO(e),
                n = 0,
                o = [],
                i;
            for (i in r) !Po(gO, i) && Po(r, i) && ol(o, i);
            for (; t.length > n;) Po(r, i = t[n++]) && (~vO(o, i) || ol(o, i));
            return o
        }
    });
    var An = u((fH, sl) => {
        sl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var cl = u(ul => {
        var hO = Lo(),
            EO = An(),
            _O = EO.concat("length", "prototype");
        ul.f = Object.getOwnPropertyNames || function(t) {
            return hO(t, _O)
        }
    });
    var fl = u(ll => {
        ll.f = Object.getOwnPropertySymbols
    });
    var pl = u((vH, dl) => {
        var mO = Nr(),
            yO = rt(),
            IO = cl(),
            TO = fl(),
            OO = Pr(),
            bO = yO([].concat);
        dl.exports = mO("Reflect", "ownKeys") || function(t) {
            var r = IO.f(OO(t)),
                n = TO.f;
            return n ? bO(r, n(t)) : r
        }
    });
    var gl = u((gH, vl) => {
        var wO = wt(),
            SO = pl(),
            AO = mo(),
            RO = Lr();
        vl.exports = function(e, t) {
            for (var r = SO(t), n = RO.f, o = AO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                wO(e, a) || n(e, a, o(t, a))
            }
        }
    });
    var El = u((hH, hl) => {
        var CO = $t(),
            xO = dt(),
            NO = /#|\.prototype\./,
            Dr = function(e, t) {
                var r = LO[PO(e)];
                return r == DO ? !0 : r == qO ? !1 : xO(t) ? CO(t) : !!t
            },
            PO = Dr.normalize = function(e) {
                return String(e).replace(NO, ".").toLowerCase()
            },
            LO = Dr.data = {},
            qO = Dr.NATIVE = "N",
            DO = Dr.POLYFILL = "P";
        hl.exports = Dr
    });
    var ml = u((EH, _l) => {
        var qo = Ie(),
            MO = mo().f,
            FO = On(),
            GO = Yc(),
            UO = In(),
            XO = gl(),
            VO = El();
        _l.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                o = e.stat,
                i, a, s, c, d, g;
            if (n ? a = qo : o ? a = qo[r] || UO(r, {}) : a = (qo[r] || {}).prototype, a)
                for (s in t) {
                    if (d = t[s], e.noTargetGet ? (g = MO(a, s), c = g && g.value) : c = a[s], i = VO(n ? s : r + (o ? "." : "#") + s, e.forced), !i && c !== void 0) {
                        if (typeof d == typeof c) continue;
                        XO(d, c)
                    }(e.sham || c && c.sham) && FO(d, "sham", !0), GO(a, s, d, e)
                }
        }
    });
    var Il = u((_H, yl) => {
        var WO = Lo(),
            BO = An();
        yl.exports = Object.keys || function(t) {
            return WO(t, BO)
        }
    });
    var Ol = u((mH, Tl) => {
        var HO = Ft(),
            kO = Lr(),
            jO = Pr(),
            KO = xr(),
            zO = Il();
        Tl.exports = HO ? Object.defineProperties : function(t, r) {
            jO(t);
            for (var n = KO(r), o = zO(r), i = o.length, a = 0, s; i > a;) kO.f(t, s = o[a++], n[s]);
            return t
        }
    });
    var wl = u((yH, bl) => {
        var YO = Nr();
        bl.exports = YO("document", "documentElement")
    });
    var Ll = u((IH, Pl) => {
        var QO = Pr(),
            $O = Ol(),
            Sl = An(),
            ZO = bn(),
            JO = wl(),
            eb = Eo(),
            tb = To(),
            Al = ">",
            Rl = "<",
            Mo = "prototype",
            Fo = "script",
            xl = tb("IE_PROTO"),
            Do = function() {},
            Nl = function(e) {
                return Rl + Fo + Al + e + Rl + "/" + Fo + Al
            },
            Cl = function(e) {
                e.write(Nl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            rb = function() {
                var e = eb("iframe"),
                    t = "java" + Fo + ":",
                    r;
                return e.style.display = "none", JO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Nl("document.F=Object")), r.close(), r.F
            },
            Rn, Cn = function() {
                try {
                    Rn = new ActiveXObject("htmlfile")
                } catch {}
                Cn = typeof document < "u" ? document.domain && Rn ? Cl(Rn) : rb() : Cl(Rn);
                for (var e = Sl.length; e--;) delete Cn[Mo][Sl[e]];
                return Cn()
            };
        ZO[xl] = !0;
        Pl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Do[Mo] = QO(t), n = new Do, Do[Mo] = null, n[xl] = t) : n = Cn(), r === void 0 ? n : $O(n, r)
        }
    });
    var Dl = u((TH, ql) => {
        var nb = vo(),
            ib = Ll(),
            ob = Lr(),
            Go = nb("unscopables"),
            Uo = Array.prototype;
        Uo[Go] == null && ob.f(Uo, Go, {
            configurable: !0,
            value: ib(null)
        });
        ql.exports = function(e) {
            Uo[Go][e] = !0
        }
    });
    var Ml = u(() => {
        "use strict";
        var ab = ml(),
            sb = No().includes,
            ub = Dl();
        ab({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return sb(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        ub("includes")
    });
    var Gl = u((wH, Fl) => {
        var cb = Ie(),
            lb = rt();
        Fl.exports = function(e, t) {
            return lb(cb[e].prototype[t])
        }
    });
    var Xl = u((SH, Ul) => {
        Ml();
        var fb = Gl();
        Ul.exports = fb("Array", "includes")
    });
    var Wl = u((AH, Vl) => {
        var db = Xl();
        Vl.exports = db
    });
    var Hl = u((RH, Bl) => {
        var pb = Wl();
        Bl.exports = pb
    });
    var Xo = u((CH, kl) => {
        var vb = typeof global == "object" && global && global.Object === Object && global;
        kl.exports = vb
    });
    var it = u((xH, jl) => {
        var gb = Xo(),
            hb = typeof self == "object" && self && self.Object === Object && self,
            Eb = gb || hb || Function("return this")();
        jl.exports = Eb
    });
    var er = u((NH, Kl) => {
        var _b = it(),
            mb = _b.Symbol;
        Kl.exports = mb
    });
    var $l = u((PH, Ql) => {
        var zl = er(),
            Yl = Object.prototype,
            yb = Yl.hasOwnProperty,
            Ib = Yl.toString,
            Mr = zl ? zl.toStringTag : void 0;

        function Tb(e) {
            var t = yb.call(e, Mr),
                r = e[Mr];
            try {
                e[Mr] = void 0;
                var n = !0
            } catch {}
            var o = Ib.call(e);
            return n && (t ? e[Mr] = r : delete e[Mr]), o
        }
        Ql.exports = Tb
    });
    var Jl = u((LH, Zl) => {
        var Ob = Object.prototype,
            bb = Ob.toString;

        function wb(e) {
            return bb.call(e)
        }
        Zl.exports = wb
    });
    var At = u((qH, rf) => {
        var ef = er(),
            Sb = $l(),
            Ab = Jl(),
            Rb = "[object Null]",
            Cb = "[object Undefined]",
            tf = ef ? ef.toStringTag : void 0;

        function xb(e) {
            return e == null ? e === void 0 ? Cb : Rb : tf && tf in Object(e) ? Sb(e) : Ab(e)
        }
        rf.exports = xb
    });
    var Vo = u((DH, nf) => {
        function Nb(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        nf.exports = Nb
    });
    var Wo = u((MH, of ) => {
        var Pb = Vo(),
            Lb = Pb(Object.getPrototypeOf, Object); of .exports = Lb
    });
    var yt = u((FH, af) => {
        function qb(e) {
            return e != null && typeof e == "object"
        }
        af.exports = qb
    });
    var Bo = u((GH, uf) => {
        var Db = At(),
            Mb = Wo(),
            Fb = yt(),
            Gb = "[object Object]",
            Ub = Function.prototype,
            Xb = Object.prototype,
            sf = Ub.toString,
            Vb = Xb.hasOwnProperty,
            Wb = sf.call(Object);

        function Bb(e) {
            if (!Fb(e) || Db(e) != Gb) return !1;
            var t = Mb(e);
            if (t === null) return !0;
            var r = Vb.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && sf.call(r) == Wb
        }
        uf.exports = Bb
    });
    var cf = u(Ho => {
        "use strict";
        Object.defineProperty(Ho, "__esModule", {
            value: !0
        });
        Ho.default = Hb;

        function Hb(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var lf = u((jo, ko) => {
        "use strict";
        Object.defineProperty(jo, "__esModule", {
            value: !0
        });
        var kb = cf(),
            jb = Kb(kb);

        function Kb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var tr;
        typeof self < "u" ? tr = self : typeof window < "u" ? tr = window : typeof global < "u" ? tr = global : typeof ko < "u" ? tr = ko : tr = Function("return this")();
        var zb = (0, jb.default)(tr);
        jo.default = zb
    });
    var Ko = u(Fr => {
        "use strict";
        Fr.__esModule = !0;
        Fr.ActionTypes = void 0;
        Fr.default = vf;
        var Yb = Bo(),
            Qb = pf(Yb),
            $b = lf(),
            ff = pf($b);

        function pf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var df = Fr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function vf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(vf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var o = e,
                i = t,
                a = [],
                s = a,
                c = !1;

            function d() {
                s === a && (s = a.slice())
            }

            function g() {
                return i
            }

            function f(y) {
                if (typeof y != "function") throw new Error("Expected listener to be a function.");
                var C = !0;
                return d(), s.push(y),
                    function() {
                        if (C) {
                            C = !1, d();
                            var x = s.indexOf(y);
                            s.splice(x, 1)
                        }
                    }
            }

            function m(y) {
                if (!(0, Qb.default)(y)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof y.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c) throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0, i = o(i, y)
                } finally {
                    c = !1
                }
                for (var C = a = s, A = 0; A < C.length; A++) C[A]();
                return y
            }

            function p(y) {
                if (typeof y != "function") throw new Error("Expected the nextReducer to be a function.");
                o = y, m({
                    type: df.INIT
                })
            }

            function h() {
                var y, C = f;
                return y = {
                    subscribe: function(x) {
                        if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");

                        function w() {
                            x.next && x.next(g())
                        }
                        w();
                        var L = C(w);
                        return {
                            unsubscribe: L
                        }
                    }
                }, y[ff.default] = function() {
                    return this
                }, y
            }
            return m({
                type: df.INIT
            }), n = {
                dispatch: m,
                subscribe: f,
                getState: g,
                replaceReducer: p
            }, n[ff.default] = h, n
        }
    });
    var Yo = u(zo => {
        "use strict";
        zo.__esModule = !0;
        zo.default = Zb;

        function Zb(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var Ef = u(Qo => {
        "use strict";
        Qo.__esModule = !0;
        Qo.default = nw;
        var gf = Ko(),
            Jb = Bo(),
            WH = hf(Jb),
            ew = Yo(),
            BH = hf(ew);

        function hf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function tw(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function rw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: gf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: o
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + gf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function nw(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                rw(r)
            } catch (c) {
                s = c
            }
            return function() {
                var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    g = arguments[1];
                if (s) throw s;
                if (!1) var f;
                for (var m = !1, p = {}, h = 0; h < i.length; h++) {
                    var y = i[h],
                        C = r[y],
                        A = d[y],
                        x = C(A, g);
                    if (typeof x > "u") {
                        var w = tw(y, g);
                        throw new Error(w)
                    }
                    p[y] = x, m = m || x !== A
                }
                return m ? p : d
            }
        }
    });
    var mf = u($o => {
        "use strict";
        $o.__esModule = !0;
        $o.default = iw;

        function _f(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function iw(e, t) {
            if (typeof e == "function") return _f(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o],
                    a = e[i];
                typeof a == "function" && (n[i] = _f(a, t))
            }
            return n
        }
    });
    var Jo = u(Zo => {
        "use strict";
        Zo.__esModule = !0;
        Zo.default = ow;

        function ow() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(i) {
                return i
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var yf = u(ea => {
        "use strict";
        ea.__esModule = !0;
        var aw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        ea.default = lw;
        var sw = Jo(),
            uw = cw(sw);

        function cw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function lw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a),
                        c = s.dispatch,
                        d = [],
                        g = {
                            getState: s.getState,
                            dispatch: function(m) {
                                return c(m)
                            }
                        };
                    return d = t.map(function(f) {
                        return f(g)
                    }), c = uw.default.apply(void 0, d)(s.dispatch), aw({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    });
    var ta = u(ze => {
        "use strict";
        ze.__esModule = !0;
        ze.compose = ze.applyMiddleware = ze.bindActionCreators = ze.combineReducers = ze.createStore = void 0;
        var fw = Ko(),
            dw = rr(fw),
            pw = Ef(),
            vw = rr(pw),
            gw = mf(),
            hw = rr(gw),
            Ew = yf(),
            _w = rr(Ew),
            mw = Jo(),
            yw = rr(mw),
            Iw = Yo(),
            zH = rr(Iw);

        function rr(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ze.createStore = dw.default;
        ze.combineReducers = vw.default;
        ze.bindActionCreators = hw.default;
        ze.applyMiddleware = _w.default;
        ze.compose = yw.default
    });
    var If = u(Ne => {
        "use strict";
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.QuickEffectIds = Ne.QuickEffectDirectionConsts = Ne.EventTypeConsts = Ne.EventLimitAffectedElements = Ne.EventContinuousMouseAxes = Ne.EventBasedOn = Ne.EventAppliesTo = void 0;
        var Tw = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        Ne.EventTypeConsts = Tw;
        var Ow = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        Ne.EventAppliesTo = Ow;
        var bw = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        Ne.EventBasedOn = bw;
        var ww = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        Ne.EventContinuousMouseAxes = ww;
        var Sw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        Ne.EventLimitAffectedElements = Sw;
        var Aw = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        Ne.QuickEffectIds = Aw;
        var Rw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        Ne.QuickEffectDirectionConsts = Rw
    });
    var ra = u(nr => {
        "use strict";
        Object.defineProperty(nr, "__esModule", {
            value: !0
        });
        nr.ActionTypeConsts = nr.ActionAppliesTo = void 0;
        var Cw = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        nr.ActionTypeConsts = Cw;
        var xw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        nr.ActionAppliesTo = xw
    });
    var Tf = u(xn => {
        "use strict";
        Object.defineProperty(xn, "__esModule", {
            value: !0
        });
        xn.InteractionTypeConsts = void 0;
        var Nw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        xn.InteractionTypeConsts = Nw
    });
    var Of = u(Nn => {
        "use strict";
        Object.defineProperty(Nn, "__esModule", {
            value: !0
        });
        Nn.ReducedMotionTypes = void 0;
        var Pw = ra(),
            {
                TRANSFORM_MOVE: Lw,
                TRANSFORM_SCALE: qw,
                TRANSFORM_ROTATE: Dw,
                TRANSFORM_SKEW: Mw,
                STYLE_SIZE: Fw,
                STYLE_FILTER: Gw,
                STYLE_FONT_VARIATION: Uw
            } = Pw.ActionTypeConsts,
            Xw = {
                [Lw]: !0,
                [qw]: !0,
                [Dw]: !0,
                [Mw]: !0,
                [Fw]: !0,
                [Gw]: !0,
                [Uw]: !0
            };
        Nn.ReducedMotionTypes = Xw
    });
    var bf = u(ce => {
        "use strict";
        Object.defineProperty(ce, "__esModule", {
            value: !0
        });
        ce.IX2_VIEWPORT_WIDTH_CHANGED = ce.IX2_TEST_FRAME_RENDERED = ce.IX2_STOP_REQUESTED = ce.IX2_SESSION_STOPPED = ce.IX2_SESSION_STARTED = ce.IX2_SESSION_INITIALIZED = ce.IX2_RAW_DATA_IMPORTED = ce.IX2_PREVIEW_REQUESTED = ce.IX2_PLAYBACK_REQUESTED = ce.IX2_PARAMETER_CHANGED = ce.IX2_MEDIA_QUERIES_DEFINED = ce.IX2_INSTANCE_STARTED = ce.IX2_INSTANCE_REMOVED = ce.IX2_INSTANCE_ADDED = ce.IX2_EVENT_STATE_CHANGED = ce.IX2_EVENT_LISTENER_ADDED = ce.IX2_ELEMENT_STATE_CHANGED = ce.IX2_CLEAR_REQUESTED = ce.IX2_ANIMATION_FRAME_CHANGED = ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var Vw = "IX2_RAW_DATA_IMPORTED";
        ce.IX2_RAW_DATA_IMPORTED = Vw;
        var Ww = "IX2_SESSION_INITIALIZED";
        ce.IX2_SESSION_INITIALIZED = Ww;
        var Bw = "IX2_SESSION_STARTED";
        ce.IX2_SESSION_STARTED = Bw;
        var Hw = "IX2_SESSION_STOPPED";
        ce.IX2_SESSION_STOPPED = Hw;
        var kw = "IX2_PREVIEW_REQUESTED";
        ce.IX2_PREVIEW_REQUESTED = kw;
        var jw = "IX2_PLAYBACK_REQUESTED";
        ce.IX2_PLAYBACK_REQUESTED = jw;
        var Kw = "IX2_STOP_REQUESTED";
        ce.IX2_STOP_REQUESTED = Kw;
        var zw = "IX2_CLEAR_REQUESTED";
        ce.IX2_CLEAR_REQUESTED = zw;
        var Yw = "IX2_EVENT_LISTENER_ADDED";
        ce.IX2_EVENT_LISTENER_ADDED = Yw;
        var Qw = "IX2_EVENT_STATE_CHANGED";
        ce.IX2_EVENT_STATE_CHANGED = Qw;
        var $w = "IX2_ANIMATION_FRAME_CHANGED";
        ce.IX2_ANIMATION_FRAME_CHANGED = $w;
        var Zw = "IX2_PARAMETER_CHANGED";
        ce.IX2_PARAMETER_CHANGED = Zw;
        var Jw = "IX2_INSTANCE_ADDED";
        ce.IX2_INSTANCE_ADDED = Jw;
        var e0 = "IX2_INSTANCE_STARTED";
        ce.IX2_INSTANCE_STARTED = e0;
        var t0 = "IX2_INSTANCE_REMOVED";
        ce.IX2_INSTANCE_REMOVED = t0;
        var r0 = "IX2_ELEMENT_STATE_CHANGED";
        ce.IX2_ELEMENT_STATE_CHANGED = r0;
        var n0 = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = n0;
        var i0 = "IX2_VIEWPORT_WIDTH_CHANGED";
        ce.IX2_VIEWPORT_WIDTH_CHANGED = i0;
        var o0 = "IX2_MEDIA_QUERIES_DEFINED";
        ce.IX2_MEDIA_QUERIES_DEFINED = o0;
        var a0 = "IX2_TEST_FRAME_RENDERED";
        ce.IX2_TEST_FRAME_RENDERED = a0
    });
    var wf = u(D => {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        });
        D.W_MOD_JS = D.W_MOD_IX = D.WILL_CHANGE = D.WIDTH = D.WF_PAGE = D.TRANSLATE_Z = D.TRANSLATE_Y = D.TRANSLATE_X = D.TRANSLATE_3D = D.TRANSFORM = D.SKEW_Y = D.SKEW_X = D.SKEW = D.SIBLINGS = D.SCALE_Z = D.SCALE_Y = D.SCALE_X = D.SCALE_3D = D.ROTATE_Z = D.ROTATE_Y = D.ROTATE_X = D.RENDER_TRANSFORM = D.RENDER_STYLE = D.RENDER_PLUGIN = D.RENDER_GENERAL = D.PRESERVE_3D = D.PLAIN_OBJECT = D.PARENT = D.OPACITY = D.IX2_ID_DELIMITER = D.IMMEDIATE_CHILDREN = D.HTML_ELEMENT = D.HEIGHT = D.FONT_VARIATION_SETTINGS = D.FLEX = D.FILTER = D.DISPLAY = D.CONFIG_Z_VALUE = D.CONFIG_Z_UNIT = D.CONFIG_Y_VALUE = D.CONFIG_Y_UNIT = D.CONFIG_X_VALUE = D.CONFIG_X_UNIT = D.CONFIG_VALUE = D.CONFIG_UNIT = D.COMMA_DELIMITER = D.COLOR = D.COLON_DELIMITER = D.CHILDREN = D.BOUNDARY_SELECTOR = D.BORDER_COLOR = D.BAR_DELIMITER = D.BACKGROUND_COLOR = D.BACKGROUND = D.AUTO = D.ABSTRACT_NODE = void 0;
        var s0 = "|";
        D.IX2_ID_DELIMITER = s0;
        var u0 = "data-wf-page";
        D.WF_PAGE = u0;
        var c0 = "w-mod-js";
        D.W_MOD_JS = c0;
        var l0 = "w-mod-ix";
        D.W_MOD_IX = l0;
        var f0 = ".w-dyn-item";
        D.BOUNDARY_SELECTOR = f0;
        var d0 = "xValue";
        D.CONFIG_X_VALUE = d0;
        var p0 = "yValue";
        D.CONFIG_Y_VALUE = p0;
        var v0 = "zValue";
        D.CONFIG_Z_VALUE = v0;
        var g0 = "value";
        D.CONFIG_VALUE = g0;
        var h0 = "xUnit";
        D.CONFIG_X_UNIT = h0;
        var E0 = "yUnit";
        D.CONFIG_Y_UNIT = E0;
        var _0 = "zUnit";
        D.CONFIG_Z_UNIT = _0;
        var m0 = "unit";
        D.CONFIG_UNIT = m0;
        var y0 = "transform";
        D.TRANSFORM = y0;
        var I0 = "translateX";
        D.TRANSLATE_X = I0;
        var T0 = "translateY";
        D.TRANSLATE_Y = T0;
        var O0 = "translateZ";
        D.TRANSLATE_Z = O0;
        var b0 = "translate3d";
        D.TRANSLATE_3D = b0;
        var w0 = "scaleX";
        D.SCALE_X = w0;
        var S0 = "scaleY";
        D.SCALE_Y = S0;
        var A0 = "scaleZ";
        D.SCALE_Z = A0;
        var R0 = "scale3d";
        D.SCALE_3D = R0;
        var C0 = "rotateX";
        D.ROTATE_X = C0;
        var x0 = "rotateY";
        D.ROTATE_Y = x0;
        var N0 = "rotateZ";
        D.ROTATE_Z = N0;
        var P0 = "skew";
        D.SKEW = P0;
        var L0 = "skewX";
        D.SKEW_X = L0;
        var q0 = "skewY";
        D.SKEW_Y = q0;
        var D0 = "opacity";
        D.OPACITY = D0;
        var M0 = "filter";
        D.FILTER = M0;
        var F0 = "font-variation-settings";
        D.FONT_VARIATION_SETTINGS = F0;
        var G0 = "width";
        D.WIDTH = G0;
        var U0 = "height";
        D.HEIGHT = U0;
        var X0 = "backgroundColor";
        D.BACKGROUND_COLOR = X0;
        var V0 = "background";
        D.BACKGROUND = V0;
        var W0 = "borderColor";
        D.BORDER_COLOR = W0;
        var B0 = "color";
        D.COLOR = B0;
        var H0 = "display";
        D.DISPLAY = H0;
        var k0 = "flex";
        D.FLEX = k0;
        var j0 = "willChange";
        D.WILL_CHANGE = j0;
        var K0 = "AUTO";
        D.AUTO = K0;
        var z0 = ",";
        D.COMMA_DELIMITER = z0;
        var Y0 = ":";
        D.COLON_DELIMITER = Y0;
        var Q0 = "|";
        D.BAR_DELIMITER = Q0;
        var $0 = "CHILDREN";
        D.CHILDREN = $0;
        var Z0 = "IMMEDIATE_CHILDREN";
        D.IMMEDIATE_CHILDREN = Z0;
        var J0 = "SIBLINGS";
        D.SIBLINGS = J0;
        var eS = "PARENT";
        D.PARENT = eS;
        var tS = "preserve-3d";
        D.PRESERVE_3D = tS;
        var rS = "HTML_ELEMENT";
        D.HTML_ELEMENT = rS;
        var nS = "PLAIN_OBJECT";
        D.PLAIN_OBJECT = nS;
        var iS = "ABSTRACT_NODE";
        D.ABSTRACT_NODE = iS;
        var oS = "RENDER_TRANSFORM";
        D.RENDER_TRANSFORM = oS;
        var aS = "RENDER_GENERAL";
        D.RENDER_GENERAL = aS;
        var sS = "RENDER_STYLE";
        D.RENDER_STYLE = sS;
        var uS = "RENDER_PLUGIN";
        D.RENDER_PLUGIN = uS
    });
    var ke = u(Ae => {
        "use strict";
        var Sf = Mt().default;
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        var Pn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        Ae.IX2EngineConstants = Ae.IX2EngineActionTypes = void 0;
        var na = If();
        Object.keys(na).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === na[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return na[e]
                }
            })
        });
        var ia = ra();
        Object.keys(ia).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === ia[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return ia[e]
                }
            })
        });
        var oa = Tf();
        Object.keys(oa).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === oa[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return oa[e]
                }
            })
        });
        var aa = Of();
        Object.keys(aa).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Pn, e) || e in Ae && Ae[e] === aa[e] || Object.defineProperty(Ae, e, {
                enumerable: !0,
                get: function() {
                    return aa[e]
                }
            })
        });
        var cS = Sf(bf());
        Ae.IX2EngineActionTypes = cS;
        var lS = Sf(wf());
        Ae.IX2EngineConstants = lS
    });
    var Af = u(Ln => {
        "use strict";
        Object.defineProperty(Ln, "__esModule", {
            value: !0
        });
        Ln.ixData = void 0;
        var fS = ke(),
            {
                IX2_RAW_DATA_IMPORTED: dS
            } = fS.IX2EngineActionTypes,
            pS = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case dS:
                        return t.payload.ixData || Object.freeze({});
                    default:
                        return e
                }
            };
        Ln.ixData = pS
    });
    var ir = u((ik, It) => {
        function sa() {
            return It.exports = sa = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, It.exports.__esModule = !0, It.exports.default = It.exports, sa.apply(this, arguments)
        }
        It.exports = sa, It.exports.__esModule = !0, It.exports.default = It.exports
    });
    var or = u(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        var vS = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Oe.clone = Dn;
        Oe.addLast = xf;
        Oe.addFirst = Nf;
        Oe.removeLast = Pf;
        Oe.removeFirst = Lf;
        Oe.insert = qf;
        Oe.removeAt = Df;
        Oe.replaceAt = Mf;
        Oe.getIn = Mn;
        Oe.set = Fn;
        Oe.setIn = Gn;
        Oe.update = Gf;
        Oe.updateIn = Uf;
        Oe.merge = Xf;
        Oe.mergeDeep = Vf;
        Oe.mergeIn = Wf;
        Oe.omit = Bf;
        Oe.addDefaults = Hf;
        var Rf = "INVALID_ARGS";

        function Cf(e) {
            throw new Error(e)
        }

        function ua(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var gS = {}.hasOwnProperty;

        function Dn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = ua(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }

        function je(e, t, r) {
            var n = r;
            n == null && Cf(Rf);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (d != null) {
                    var g = ua(d);
                    if (g.length)
                        for (var f = 0; f <= g.length; f++) {
                            var m = g[f];
                            if (!(e && n[m] !== void 0)) {
                                var p = d[m];
                                t && qn(n[m]) && qn(p) && (p = je(e, t, n[m], p)), !(p === void 0 || p === n[m]) && (o || (o = !0, n = Dn(n)), n[m] = p)
                            }
                        }
                }
            }
            return n
        }

        function qn(e) {
            var t = typeof e > "u" ? "undefined" : vS(e);
            return e != null && (t === "object" || t === "function")
        }

        function xf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Nf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Pf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Lf(e) {
            return e.length ? e.slice(1) : e
        }

        function qf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Df(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Mf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
            return o[t] = r, o
        }

        function Mn(e, t) {
            if (!Array.isArray(t) && Cf(Rf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r ? .[o], r === void 0) return r
                }
                return r
            }
        }

        function Fn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                o = e ? ? n;
            if (o[t] === r) return o;
            var i = Dn(o);
            return i[t] = r, i
        }

        function Ff(e, t, r, n) {
            var o = void 0,
                i = t[n];
            if (n === t.length - 1) o = r;
            else {
                var a = qn(e) && qn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Ff(a, t, r, n + 1)
            }
            return Fn(e, i, o)
        }

        function Gn(e, t, r) {
            return t.length ? Ff(e, t, r, 0) : r
        }

        function Gf(e, t, r) {
            var n = e ? .[t],
                o = r(n);
            return Fn(e, t, o)
        }

        function Uf(e, t, r) {
            var n = Mn(e, t),
                o = r(n);
            return Gn(e, t, o)
        }

        function Xf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !1, !1, e, t, r, n, o, i].concat(s)) : je(!1, !1, e, t, r, n, o, i)
        }

        function Vf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !1, !0, e, t, r, n, o, i].concat(s)) : je(!1, !0, e, t, r, n, o, i)
        }

        function Wf(e, t, r, n, o, i, a) {
            var s = Mn(e, t);
            s == null && (s = {});
            for (var c = void 0, d = arguments.length, g = Array(d > 7 ? d - 7 : 0), f = 7; f < d; f++) g[f - 7] = arguments[f];
            return g.length ? c = je.call.apply(je, [null, !1, !1, s, r, n, o, i, a].concat(g)) : c = je(!1, !1, s, r, n, o, i, a), Gn(e, t, c)
        }

        function Bf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (gS.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var i = {}, a = ua(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c])
            }
            return i
        }

        function Hf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
            return s.length ? je.call.apply(je, [null, !0, !1, e, t, r, n, o, i].concat(s)) : je(!0, !1, e, t, r, n, o, i)
        }
        var hS = {
            clone: Dn,
            addLast: xf,
            addFirst: Nf,
            removeLast: Pf,
            removeFirst: Lf,
            insert: qf,
            removeAt: Df,
            replaceAt: Mf,
            getIn: Mn,
            set: Fn,
            setIn: Gn,
            update: Gf,
            updateIn: Uf,
            merge: Xf,
            mergeDeep: Vf,
            mergeIn: Wf,
            omit: Bf,
            addDefaults: Hf
        };
        Oe.default = hS
    });
    var jf = u(Un => {
        "use strict";
        var ES = tt().default;
        Object.defineProperty(Un, "__esModule", {
            value: !0
        });
        Un.ixRequest = void 0;
        var _S = ES(ir()),
            mS = ke(),
            yS = or(),
            {
                IX2_PREVIEW_REQUESTED: IS,
                IX2_PLAYBACK_REQUESTED: TS,
                IX2_STOP_REQUESTED: OS,
                IX2_CLEAR_REQUESTED: bS
            } = mS.IX2EngineActionTypes,
            wS = {
                preview: {},
                playback: {},
                stop: {},
                clear: {}
            },
            kf = Object.create(null, {
                [IS]: {
                    value: "preview"
                },
                [TS]: {
                    value: "playback"
                },
                [OS]: {
                    value: "stop"
                },
                [bS]: {
                    value: "clear"
                }
            }),
            SS = (e = wS, t) => {
                if (t.type in kf) {
                    let r = [kf[t.type]];
                    return (0, yS.setIn)(e, [r], (0, _S.default)({}, t.payload))
                }
                return e
            };
        Un.ixRequest = SS
    });
    var zf = u(Xn => {
        "use strict";
        Object.defineProperty(Xn, "__esModule", {
            value: !0
        });
        Xn.ixSession = void 0;
        var AS = ke(),
            pt = or(),
            {
                IX2_SESSION_INITIALIZED: RS,
                IX2_SESSION_STARTED: CS,
                IX2_TEST_FRAME_RENDERED: xS,
                IX2_SESSION_STOPPED: NS,
                IX2_EVENT_LISTENER_ADDED: PS,
                IX2_EVENT_STATE_CHANGED: LS,
                IX2_ANIMATION_FRAME_CHANGED: qS,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: DS,
                IX2_VIEWPORT_WIDTH_CHANGED: MS,
                IX2_MEDIA_QUERIES_DEFINED: FS
            } = AS.IX2EngineActionTypes,
            Kf = {
                active: !1,
                tick: 0,
                eventListeners: [],
                eventState: {},
                playbackState: {},
                viewportWidth: 0,
                mediaQueryKey: null,
                hasBoundaryNodes: !1,
                hasDefinedMediaQueries: !1,
                reducedMotion: !1
            },
            GS = 20,
            US = (e = Kf, t) => {
                switch (t.type) {
                    case RS:
                        {
                            let {
                                hasBoundaryNodes: r,
                                reducedMotion: n
                            } = t.payload;
                            return (0, pt.merge)(e, {
                                hasBoundaryNodes: r,
                                reducedMotion: n
                            })
                        }
                    case CS:
                        return (0, pt.set)(e, "active", !0);
                    case xS:
                        {
                            let {
                                payload: {
                                    step: r = GS
                                }
                            } = t;
                            return (0, pt.set)(e, "tick", e.tick + r)
                        }
                    case NS:
                        return Kf;
                    case qS:
                        {
                            let {
                                payload: {
                                    now: r
                                }
                            } = t;
                            return (0, pt.set)(e, "tick", r)
                        }
                    case PS:
                        {
                            let r = (0, pt.addLast)(e.eventListeners, t.payload);
                            return (0, pt.set)(e, "eventListeners", r)
                        }
                    case LS:
                        {
                            let {
                                stateKey: r,
                                newState: n
                            } = t.payload;
                            return (0, pt.setIn)(e, ["eventState", r], n)
                        }
                    case DS:
                        {
                            let {
                                actionListId: r,
                                isPlaying: n
                            } = t.payload;
                            return (0, pt.setIn)(e, ["playbackState", r], n)
                        }
                    case MS:
                        {
                            let {
                                width: r,
                                mediaQueries: n
                            } = t.payload,
                            o = n.length,
                            i = null;
                            for (let a = 0; a < o; a++) {
                                let {
                                    key: s,
                                    min: c,
                                    max: d
                                } = n[a];
                                if (r >= c && r <= d) {
                                    i = s;
                                    break
                                }
                            }
                            return (0, pt.merge)(e, {
                                viewportWidth: r,
                                mediaQueryKey: i
                            })
                        }
                    case FS:
                        return (0, pt.set)(e, "hasDefinedMediaQueries", !0);
                    default:
                        return e
                }
            };
        Xn.ixSession = US
    });
    var Qf = u((uk, Yf) => {
        function XS() {
            this.__data__ = [], this.size = 0
        }
        Yf.exports = XS
    });
    var Vn = u((ck, $f) => {
        function VS(e, t) {
            return e === t || e !== e && t !== t
        }
        $f.exports = VS
    });
    var Gr = u((lk, Zf) => {
        var WS = Vn();

        function BS(e, t) {
            for (var r = e.length; r--;)
                if (WS(e[r][0], t)) return r;
            return -1
        }
        Zf.exports = BS
    });
    var ed = u((fk, Jf) => {
        var HS = Gr(),
            kS = Array.prototype,
            jS = kS.splice;

        function KS(e) {
            var t = this.__data__,
                r = HS(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : jS.call(t, r, 1), --this.size, !0
        }
        Jf.exports = KS
    });
    var rd = u((dk, td) => {
        var zS = Gr();

        function YS(e) {
            var t = this.__data__,
                r = zS(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        td.exports = YS
    });
    var id = u((pk, nd) => {
        var QS = Gr();

        function $S(e) {
            return QS(this.__data__, e) > -1
        }
        nd.exports = $S
    });
    var ad = u((vk, od) => {
        var ZS = Gr();

        function JS(e, t) {
            var r = this.__data__,
                n = ZS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        od.exports = JS
    });
    var Ur = u((gk, sd) => {
        var eA = Qf(),
            tA = ed(),
            rA = rd(),
            nA = id(),
            iA = ad();

        function ar(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ar.prototype.clear = eA;
        ar.prototype.delete = tA;
        ar.prototype.get = rA;
        ar.prototype.has = nA;
        ar.prototype.set = iA;
        sd.exports = ar
    });
    var cd = u((hk, ud) => {
        var oA = Ur();

        function aA() {
            this.__data__ = new oA, this.size = 0
        }
        ud.exports = aA
    });
    var fd = u((Ek, ld) => {
        function sA(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        ld.exports = sA
    });
    var pd = u((_k, dd) => {
        function uA(e) {
            return this.__data__.get(e)
        }
        dd.exports = uA
    });
    var gd = u((mk, vd) => {
        function cA(e) {
            return this.__data__.has(e)
        }
        vd.exports = cA
    });
    var vt = u((yk, hd) => {
        function lA(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        hd.exports = lA
    });
    var ca = u((Ik, Ed) => {
        var fA = At(),
            dA = vt(),
            pA = "[object AsyncFunction]",
            vA = "[object Function]",
            gA = "[object GeneratorFunction]",
            hA = "[object Proxy]";

        function EA(e) {
            if (!dA(e)) return !1;
            var t = fA(e);
            return t == vA || t == gA || t == pA || t == hA
        }
        Ed.exports = EA
    });
    var md = u((Tk, _d) => {
        var _A = it(),
            mA = _A["__core-js_shared__"];
        _d.exports = mA
    });
    var Td = u((Ok, Id) => {
        var la = md(),
            yd = function() {
                var e = /[^.]+$/.exec(la && la.keys && la.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function yA(e) {
            return !!yd && yd in e
        }
        Id.exports = yA
    });
    var fa = u((bk, Od) => {
        var IA = Function.prototype,
            TA = IA.toString;

        function OA(e) {
            if (e != null) {
                try {
                    return TA.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Od.exports = OA
    });
    var wd = u((wk, bd) => {
        var bA = ca(),
            wA = Td(),
            SA = vt(),
            AA = fa(),
            RA = /[\\^$.*+?()[\]{}|]/g,
            CA = /^\[object .+?Constructor\]$/,
            xA = Function.prototype,
            NA = Object.prototype,
            PA = xA.toString,
            LA = NA.hasOwnProperty,
            qA = RegExp("^" + PA.call(LA).replace(RA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function DA(e) {
            if (!SA(e) || wA(e)) return !1;
            var t = bA(e) ? qA : CA;
            return t.test(AA(e))
        }
        bd.exports = DA
    });
    var Ad = u((Sk, Sd) => {
        function MA(e, t) {
            return e ? .[t]
        }
        Sd.exports = MA
    });
    var Rt = u((Ak, Rd) => {
        var FA = wd(),
            GA = Ad();

        function UA(e, t) {
            var r = GA(e, t);
            return FA(r) ? r : void 0
        }
        Rd.exports = UA
    });
    var Wn = u((Rk, Cd) => {
        var XA = Rt(),
            VA = it(),
            WA = XA(VA, "Map");
        Cd.exports = WA
    });
    var Xr = u((Ck, xd) => {
        var BA = Rt(),
            HA = BA(Object, "create");
        xd.exports = HA
    });
    var Ld = u((xk, Pd) => {
        var Nd = Xr();

        function kA() {
            this.__data__ = Nd ? Nd(null) : {}, this.size = 0
        }
        Pd.exports = kA
    });
    var Dd = u((Nk, qd) => {
        function jA(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        qd.exports = jA
    });
    var Fd = u((Pk, Md) => {
        var KA = Xr(),
            zA = "__lodash_hash_undefined__",
            YA = Object.prototype,
            QA = YA.hasOwnProperty;

        function $A(e) {
            var t = this.__data__;
            if (KA) {
                var r = t[e];
                return r === zA ? void 0 : r
            }
            return QA.call(t, e) ? t[e] : void 0
        }
        Md.exports = $A
    });
    var Ud = u((Lk, Gd) => {
        var ZA = Xr(),
            JA = Object.prototype,
            eR = JA.hasOwnProperty;

        function tR(e) {
            var t = this.__data__;
            return ZA ? t[e] !== void 0 : eR.call(t, e)
        }
        Gd.exports = tR
    });
    var Vd = u((qk, Xd) => {
        var rR = Xr(),
            nR = "__lodash_hash_undefined__";

        function iR(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = rR && t === void 0 ? nR : t, this
        }
        Xd.exports = iR
    });
    var Bd = u((Dk, Wd) => {
        var oR = Ld(),
            aR = Dd(),
            sR = Fd(),
            uR = Ud(),
            cR = Vd();

        function sr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        sr.prototype.clear = oR;
        sr.prototype.delete = aR;
        sr.prototype.get = sR;
        sr.prototype.has = uR;
        sr.prototype.set = cR;
        Wd.exports = sr
    });
    var jd = u((Mk, kd) => {
        var Hd = Bd(),
            lR = Ur(),
            fR = Wn();

        function dR() {
            this.size = 0, this.__data__ = {
                hash: new Hd,
                map: new(fR || lR),
                string: new Hd
            }
        }
        kd.exports = dR
    });
    var zd = u((Fk, Kd) => {
        function pR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Kd.exports = pR
    });
    var Vr = u((Gk, Yd) => {
        var vR = zd();

        function gR(e, t) {
            var r = e.__data__;
            return vR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Yd.exports = gR
    });
    var $d = u((Uk, Qd) => {
        var hR = Vr();

        function ER(e) {
            var t = hR(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Qd.exports = ER
    });
    var Jd = u((Xk, Zd) => {
        var _R = Vr();

        function mR(e) {
            return _R(this, e).get(e)
        }
        Zd.exports = mR
    });
    var tp = u((Vk, ep) => {
        var yR = Vr();

        function IR(e) {
            return yR(this, e).has(e)
        }
        ep.exports = IR
    });
    var np = u((Wk, rp) => {
        var TR = Vr();

        function OR(e, t) {
            var r = TR(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        rp.exports = OR
    });
    var Bn = u((Bk, ip) => {
        var bR = jd(),
            wR = $d(),
            SR = Jd(),
            AR = tp(),
            RR = np();

        function ur(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ur.prototype.clear = bR;
        ur.prototype.delete = wR;
        ur.prototype.get = SR;
        ur.prototype.has = AR;
        ur.prototype.set = RR;
        ip.exports = ur
    });
    var ap = u((Hk, op) => {
        var CR = Ur(),
            xR = Wn(),
            NR = Bn(),
            PR = 200;

        function LR(e, t) {
            var r = this.__data__;
            if (r instanceof CR) {
                var n = r.__data__;
                if (!xR || n.length < PR - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new NR(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        op.exports = LR
    });
    var da = u((kk, sp) => {
        var qR = Ur(),
            DR = cd(),
            MR = fd(),
            FR = pd(),
            GR = gd(),
            UR = ap();

        function cr(e) {
            var t = this.__data__ = new qR(e);
            this.size = t.size
        }
        cr.prototype.clear = DR;
        cr.prototype.delete = MR;
        cr.prototype.get = FR;
        cr.prototype.has = GR;
        cr.prototype.set = UR;
        sp.exports = cr
    });
    var cp = u((jk, up) => {
        var XR = "__lodash_hash_undefined__";

        function VR(e) {
            return this.__data__.set(e, XR), this
        }
        up.exports = VR
    });
    var fp = u((Kk, lp) => {
        function WR(e) {
            return this.__data__.has(e)
        }
        lp.exports = WR
    });
    var pp = u((zk, dp) => {
        var BR = Bn(),
            HR = cp(),
            kR = fp();

        function Hn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new BR; ++t < r;) this.add(e[t])
        }
        Hn.prototype.add = Hn.prototype.push = HR;
        Hn.prototype.has = kR;
        dp.exports = Hn
    });
    var gp = u((Yk, vp) => {
        function jR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        vp.exports = jR
    });
    var Ep = u((Qk, hp) => {
        function KR(e, t) {
            return e.has(t)
        }
        hp.exports = KR
    });
    var pa = u(($k, _p) => {
        var zR = pp(),
            YR = gp(),
            QR = Ep(),
            $R = 1,
            ZR = 2;

        function JR(e, t, r, n, o, i) {
            var a = r & $R,
                s = e.length,
                c = t.length;
            if (s != c && !(a && c > s)) return !1;
            var d = i.get(e),
                g = i.get(t);
            if (d && g) return d == t && g == e;
            var f = -1,
                m = !0,
                p = r & ZR ? new zR : void 0;
            for (i.set(e, t), i.set(t, e); ++f < s;) {
                var h = e[f],
                    y = t[f];
                if (n) var C = a ? n(y, h, f, t, e, i) : n(h, y, f, e, t, i);
                if (C !== void 0) {
                    if (C) continue;
                    m = !1;
                    break
                }
                if (p) {
                    if (!YR(t, function(A, x) {
                            if (!QR(p, x) && (h === A || o(h, A, r, n, i))) return p.push(x)
                        })) {
                        m = !1;
                        break
                    }
                } else if (!(h === y || o(h, y, r, n, i))) {
                    m = !1;
                    break
                }
            }
            return i.delete(e), i.delete(t), m
        }
        _p.exports = JR
    });
    var yp = u((Zk, mp) => {
        var eC = it(),
            tC = eC.Uint8Array;
        mp.exports = tC
    });
    var Tp = u((Jk, Ip) => {
        function rC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }), r
        }
        Ip.exports = rC
    });
    var bp = u((ej, Op) => {
        function nC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Op.exports = nC
    });
    var Cp = u((tj, Rp) => {
        var wp = er(),
            Sp = yp(),
            iC = Vn(),
            oC = pa(),
            aC = Tp(),
            sC = bp(),
            uC = 1,
            cC = 2,
            lC = "[object Boolean]",
            fC = "[object Date]",
            dC = "[object Error]",
            pC = "[object Map]",
            vC = "[object Number]",
            gC = "[object RegExp]",
            hC = "[object Set]",
            EC = "[object String]",
            _C = "[object Symbol]",
            mC = "[object ArrayBuffer]",
            yC = "[object DataView]",
            Ap = wp ? wp.prototype : void 0,
            va = Ap ? Ap.valueOf : void 0;

        function IC(e, t, r, n, o, i, a) {
            switch (r) {
                case yC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case mC:
                    return !(e.byteLength != t.byteLength || !i(new Sp(e), new Sp(t)));
                case lC:
                case fC:
                case vC:
                    return iC(+e, +t);
                case dC:
                    return e.name == t.name && e.message == t.message;
                case gC:
                case EC:
                    return e == t + "";
                case pC:
                    var s = aC;
                case hC:
                    var c = n & uC;
                    if (s || (s = sC), e.size != t.size && !c) return !1;
                    var d = a.get(e);
                    if (d) return d == t;
                    n |= cC, a.set(e, t);
                    var g = oC(s(e), s(t), n, o, i, a);
                    return a.delete(e), g;
                case _C:
                    if (va) return va.call(e) == va.call(t)
            }
            return !1
        }
        Rp.exports = IC
    });
    var kn = u((rj, xp) => {
        function TC(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
            return e
        }
        xp.exports = TC
    });
    var Pe = u((nj, Np) => {
        var OC = Array.isArray;
        Np.exports = OC
    });
    var ga = u((ij, Pp) => {
        var bC = kn(),
            wC = Pe();

        function SC(e, t, r) {
            var n = t(e);
            return wC(e) ? n : bC(n, r(e))
        }
        Pp.exports = SC
    });
    var qp = u((oj, Lp) => {
        function AC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        Lp.exports = AC
    });
    var ha = u((aj, Dp) => {
        function RC() {
            return []
        }
        Dp.exports = RC
    });
    var Ea = u((sj, Fp) => {
        var CC = qp(),
            xC = ha(),
            NC = Object.prototype,
            PC = NC.propertyIsEnumerable,
            Mp = Object.getOwnPropertySymbols,
            LC = Mp ? function(e) {
                return e == null ? [] : (e = Object(e), CC(Mp(e), function(t) {
                    return PC.call(e, t)
                }))
            } : xC;
        Fp.exports = LC
    });
    var Up = u((uj, Gp) => {
        function qC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Gp.exports = qC
    });
    var Vp = u((cj, Xp) => {
        var DC = At(),
            MC = yt(),
            FC = "[object Arguments]";

        function GC(e) {
            return MC(e) && DC(e) == FC
        }
        Xp.exports = GC
    });
    var Wr = u((lj, Hp) => {
        var Wp = Vp(),
            UC = yt(),
            Bp = Object.prototype,
            XC = Bp.hasOwnProperty,
            VC = Bp.propertyIsEnumerable,
            WC = Wp(function() {
                return arguments
            }()) ? Wp : function(e) {
                return UC(e) && XC.call(e, "callee") && !VC.call(e, "callee")
            };
        Hp.exports = WC
    });
    var jp = u((fj, kp) => {
        function BC() {
            return !1
        }
        kp.exports = BC
    });
    var jn = u((Br, lr) => {
        var HC = it(),
            kC = jp(),
            Yp = typeof Br == "object" && Br && !Br.nodeType && Br,
            Kp = Yp && typeof lr == "object" && lr && !lr.nodeType && lr,
            jC = Kp && Kp.exports === Yp,
            zp = jC ? HC.Buffer : void 0,
            KC = zp ? zp.isBuffer : void 0,
            zC = KC || kC;
        lr.exports = zC
    });
    var Kn = u((dj, Qp) => {
        var YC = 9007199254740991,
            QC = /^(?:0|[1-9]\d*)$/;

        function $C(e, t) {
            var r = typeof e;
            return t = t ? ? YC, !!t && (r == "number" || r != "symbol" && QC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Qp.exports = $C
    });
    var zn = u((pj, $p) => {
        var ZC = 9007199254740991;

        function JC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ZC
        }
        $p.exports = JC
    });
    var Jp = u((vj, Zp) => {
        var ex = At(),
            tx = zn(),
            rx = yt(),
            nx = "[object Arguments]",
            ix = "[object Array]",
            ox = "[object Boolean]",
            ax = "[object Date]",
            sx = "[object Error]",
            ux = "[object Function]",
            cx = "[object Map]",
            lx = "[object Number]",
            fx = "[object Object]",
            dx = "[object RegExp]",
            px = "[object Set]",
            vx = "[object String]",
            gx = "[object WeakMap]",
            hx = "[object ArrayBuffer]",
            Ex = "[object DataView]",
            _x = "[object Float32Array]",
            mx = "[object Float64Array]",
            yx = "[object Int8Array]",
            Ix = "[object Int16Array]",
            Tx = "[object Int32Array]",
            Ox = "[object Uint8Array]",
            bx = "[object Uint8ClampedArray]",
            wx = "[object Uint16Array]",
            Sx = "[object Uint32Array]",
            ye = {};
        ye[_x] = ye[mx] = ye[yx] = ye[Ix] = ye[Tx] = ye[Ox] = ye[bx] = ye[wx] = ye[Sx] = !0;
        ye[nx] = ye[ix] = ye[hx] = ye[ox] = ye[Ex] = ye[ax] = ye[sx] = ye[ux] = ye[cx] = ye[lx] = ye[fx] = ye[dx] = ye[px] = ye[vx] = ye[gx] = !1;

        function Ax(e) {
            return rx(e) && tx(e.length) && !!ye[ex(e)]
        }
        Zp.exports = Ax
    });
    var tv = u((gj, ev) => {
        function Rx(e) {
            return function(t) {
                return e(t)
            }
        }
        ev.exports = Rx
    });
    var nv = u((Hr, fr) => {
        var Cx = Xo(),
            rv = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
            kr = rv && typeof fr == "object" && fr && !fr.nodeType && fr,
            xx = kr && kr.exports === rv,
            _a = xx && Cx.process,
            Nx = function() {
                try {
                    var e = kr && kr.require && kr.require("util").types;
                    return e || _a && _a.binding && _a.binding("util")
                } catch {}
            }();
        fr.exports = Nx
    });
    var Yn = u((hj, av) => {
        var Px = Jp(),
            Lx = tv(),
            iv = nv(),
            ov = iv && iv.isTypedArray,
            qx = ov ? Lx(ov) : Px;
        av.exports = qx
    });
    var ma = u((Ej, sv) => {
        var Dx = Up(),
            Mx = Wr(),
            Fx = Pe(),
            Gx = jn(),
            Ux = Kn(),
            Xx = Yn(),
            Vx = Object.prototype,
            Wx = Vx.hasOwnProperty;

        function Bx(e, t) {
            var r = Fx(e),
                n = !r && Mx(e),
                o = !r && !n && Gx(e),
                i = !r && !n && !o && Xx(e),
                a = r || n || o || i,
                s = a ? Dx(e.length, String) : [],
                c = s.length;
            for (var d in e)(t || Wx.call(e, d)) && !(a && (d == "length" || o && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || Ux(d, c))) && s.push(d);
            return s
        }
        sv.exports = Bx
    });
    var Qn = u((_j, uv) => {
        var Hx = Object.prototype;

        function kx(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || Hx;
            return e === r
        }
        uv.exports = kx
    });
    var lv = u((mj, cv) => {
        var jx = Vo(),
            Kx = jx(Object.keys, Object);
        cv.exports = Kx
    });
    var $n = u((yj, fv) => {
        var zx = Qn(),
            Yx = lv(),
            Qx = Object.prototype,
            $x = Qx.hasOwnProperty;

        function Zx(e) {
            if (!zx(e)) return Yx(e);
            var t = [];
            for (var r in Object(e)) $x.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        fv.exports = Zx
    });
    var Xt = u((Ij, dv) => {
        var Jx = ca(),
            eN = zn();

        function tN(e) {
            return e != null && eN(e.length) && !Jx(e)
        }
        dv.exports = tN
    });
    var jr = u((Tj, pv) => {
        var rN = ma(),
            nN = $n(),
            iN = Xt();

        function oN(e) {
            return iN(e) ? rN(e) : nN(e)
        }
        pv.exports = oN
    });
    var gv = u((Oj, vv) => {
        var aN = ga(),
            sN = Ea(),
            uN = jr();

        function cN(e) {
            return aN(e, uN, sN)
        }
        vv.exports = cN
    });
    var _v = u((bj, Ev) => {
        var hv = gv(),
            lN = 1,
            fN = Object.prototype,
            dN = fN.hasOwnProperty;

        function pN(e, t, r, n, o, i) {
            var a = r & lN,
                s = hv(e),
                c = s.length,
                d = hv(t),
                g = d.length;
            if (c != g && !a) return !1;
            for (var f = c; f--;) {
                var m = s[f];
                if (!(a ? m in t : dN.call(t, m))) return !1
            }
            var p = i.get(e),
                h = i.get(t);
            if (p && h) return p == t && h == e;
            var y = !0;
            i.set(e, t), i.set(t, e);
            for (var C = a; ++f < c;) {
                m = s[f];
                var A = e[m],
                    x = t[m];
                if (n) var w = a ? n(x, A, m, t, e, i) : n(A, x, m, e, t, i);
                if (!(w === void 0 ? A === x || o(A, x, r, n, i) : w)) {
                    y = !1;
                    break
                }
                C || (C = m == "constructor")
            }
            if (y && !C) {
                var L = e.constructor,
                    q = t.constructor;
                L != q && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof q == "function" && q instanceof q) && (y = !1)
            }
            return i.delete(e), i.delete(t), y
        }
        Ev.exports = pN
    });
    var yv = u((wj, mv) => {
        var vN = Rt(),
            gN = it(),
            hN = vN(gN, "DataView");
        mv.exports = hN
    });
    var Tv = u((Sj, Iv) => {
        var EN = Rt(),
            _N = it(),
            mN = EN(_N, "Promise");
        Iv.exports = mN
    });
    var bv = u((Aj, Ov) => {
        var yN = Rt(),
            IN = it(),
            TN = yN(IN, "Set");
        Ov.exports = TN
    });
    var ya = u((Rj, wv) => {
        var ON = Rt(),
            bN = it(),
            wN = ON(bN, "WeakMap");
        wv.exports = wN
    });
    var Zn = u((Cj, Pv) => {
        var Ia = yv(),
            Ta = Wn(),
            Oa = Tv(),
            ba = bv(),
            wa = ya(),
            Nv = At(),
            dr = fa(),
            Sv = "[object Map]",
            SN = "[object Object]",
            Av = "[object Promise]",
            Rv = "[object Set]",
            Cv = "[object WeakMap]",
            xv = "[object DataView]",
            AN = dr(Ia),
            RN = dr(Ta),
            CN = dr(Oa),
            xN = dr(ba),
            NN = dr(wa),
            Vt = Nv;
        (Ia && Vt(new Ia(new ArrayBuffer(1))) != xv || Ta && Vt(new Ta) != Sv || Oa && Vt(Oa.resolve()) != Av || ba && Vt(new ba) != Rv || wa && Vt(new wa) != Cv) && (Vt = function(e) {
            var t = Nv(e),
                r = t == SN ? e.constructor : void 0,
                n = r ? dr(r) : "";
            if (n) switch (n) {
                case AN:
                    return xv;
                case RN:
                    return Sv;
                case CN:
                    return Av;
                case xN:
                    return Rv;
                case NN:
                    return Cv
            }
            return t
        });
        Pv.exports = Vt
    });
    var Xv = u((xj, Uv) => {
        var Sa = da(),
            PN = pa(),
            LN = Cp(),
            qN = _v(),
            Lv = Zn(),
            qv = Pe(),
            Dv = jn(),
            DN = Yn(),
            MN = 1,
            Mv = "[object Arguments]",
            Fv = "[object Array]",
            Jn = "[object Object]",
            FN = Object.prototype,
            Gv = FN.hasOwnProperty;

        function GN(e, t, r, n, o, i) {
            var a = qv(e),
                s = qv(t),
                c = a ? Fv : Lv(e),
                d = s ? Fv : Lv(t);
            c = c == Mv ? Jn : c, d = d == Mv ? Jn : d;
            var g = c == Jn,
                f = d == Jn,
                m = c == d;
            if (m && Dv(e)) {
                if (!Dv(t)) return !1;
                a = !0, g = !1
            }
            if (m && !g) return i || (i = new Sa), a || DN(e) ? PN(e, t, r, n, o, i) : LN(e, t, c, r, n, o, i);
            if (!(r & MN)) {
                var p = g && Gv.call(e, "__wrapped__"),
                    h = f && Gv.call(t, "__wrapped__");
                if (p || h) {
                    var y = p ? e.value() : e,
                        C = h ? t.value() : t;
                    return i || (i = new Sa), o(y, C, r, n, i)
                }
            }
            return m ? (i || (i = new Sa), qN(e, t, r, n, o, i)) : !1
        }
        Uv.exports = GN
    });
    var Aa = u((Nj, Bv) => {
        var UN = Xv(),
            Vv = yt();

        function Wv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Vv(e) && !Vv(t) ? e !== e && t !== t : UN(e, t, r, n, Wv, o)
        }
        Bv.exports = Wv
    });
    var kv = u((Pj, Hv) => {
        var XN = da(),
            VN = Aa(),
            WN = 1,
            BN = 2;

        function HN(e, t, r, n) {
            var o = r.length,
                i = o,
                a = !n;
            if (e == null) return !i;
            for (e = Object(e); o--;) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++o < i;) {
                s = r[o];
                var c = s[0],
                    d = e[c],
                    g = s[1];
                if (a && s[2]) {
                    if (d === void 0 && !(c in e)) return !1
                } else {
                    var f = new XN;
                    if (n) var m = n(d, g, c, e, t, f);
                    if (!(m === void 0 ? VN(g, d, WN | BN, n, f) : m)) return !1
                }
            }
            return !0
        }
        Hv.exports = HN
    });
    var Ra = u((Lj, jv) => {
        var kN = vt();

        function jN(e) {
            return e === e && !kN(e)
        }
        jv.exports = jN
    });
    var zv = u((qj, Kv) => {
        var KN = Ra(),
            zN = jr();

        function YN(e) {
            for (var t = zN(e), r = t.length; r--;) {
                var n = t[r],
                    o = e[n];
                t[r] = [n, o, KN(o)]
            }
            return t
        }
        Kv.exports = YN
    });
    var Ca = u((Dj, Yv) => {
        function QN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Yv.exports = QN
    });
    var $v = u((Mj, Qv) => {
        var $N = kv(),
            ZN = zv(),
            JN = Ca();

        function eP(e) {
            var t = ZN(e);
            return t.length == 1 && t[0][2] ? JN(t[0][0], t[0][1]) : function(r) {
                return r === e || $N(r, e, t)
            }
        }
        Qv.exports = eP
    });
    var Kr = u((Fj, Zv) => {
        var tP = At(),
            rP = yt(),
            nP = "[object Symbol]";

        function iP(e) {
            return typeof e == "symbol" || rP(e) && tP(e) == nP
        }
        Zv.exports = iP
    });
    var ei = u((Gj, Jv) => {
        var oP = Pe(),
            aP = Kr(),
            sP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            uP = /^\w*$/;

        function cP(e, t) {
            if (oP(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || aP(e) ? !0 : uP.test(e) || !sP.test(e) || t != null && e in Object(t)
        }
        Jv.exports = cP
    });
    var rg = u((Uj, tg) => {
        var eg = Bn(),
            lP = "Expected a function";

        function xa(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(lP);
            var r = function() {
                var n = arguments,
                    o = t ? t.apply(this, n) : n[0],
                    i = r.cache;
                if (i.has(o)) return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i, a
            };
            return r.cache = new(xa.Cache || eg), r
        }
        xa.Cache = eg;
        tg.exports = xa
    });
    var ig = u((Xj, ng) => {
        var fP = rg(),
            dP = 500;

        function pP(e) {
            var t = fP(e, function(n) {
                    return r.size === dP && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        ng.exports = pP
    });
    var ag = u((Vj, og) => {
        var vP = ig(),
            gP = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            hP = /\\(\\)?/g,
            EP = vP(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(gP, function(r, n, o, i) {
                    t.push(o ? i.replace(hP, "$1") : n || r)
                }), t
            });
        og.exports = EP
    });
    var Na = u((Wj, sg) => {
        function _P(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
            return o
        }
        sg.exports = _P
    });
    var pg = u((Bj, dg) => {
        var ug = er(),
            mP = Na(),
            yP = Pe(),
            IP = Kr(),
            TP = 1 / 0,
            cg = ug ? ug.prototype : void 0,
            lg = cg ? cg.toString : void 0;

        function fg(e) {
            if (typeof e == "string") return e;
            if (yP(e)) return mP(e, fg) + "";
            if (IP(e)) return lg ? lg.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -TP ? "-0" : t
        }
        dg.exports = fg
    });
    var gg = u((Hj, vg) => {
        var OP = pg();

        function bP(e) {
            return e == null ? "" : OP(e)
        }
        vg.exports = bP
    });
    var zr = u((kj, hg) => {
        var wP = Pe(),
            SP = ei(),
            AP = ag(),
            RP = gg();

        function CP(e, t) {
            return wP(e) ? e : SP(e, t) ? [e] : AP(RP(e))
        }
        hg.exports = CP
    });
    var pr = u((jj, Eg) => {
        var xP = Kr(),
            NP = 1 / 0;

        function PP(e) {
            if (typeof e == "string" || xP(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -NP ? "-0" : t
        }
        Eg.exports = PP
    });
    var ti = u((Kj, _g) => {
        var LP = zr(),
            qP = pr();

        function DP(e, t) {
            t = LP(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[qP(t[r++])];
            return r && r == n ? e : void 0
        }
        _g.exports = DP
    });
    var ri = u((zj, mg) => {
        var MP = ti();

        function FP(e, t, r) {
            var n = e == null ? void 0 : MP(e, t);
            return n === void 0 ? r : n
        }
        mg.exports = FP
    });
    var Ig = u((Yj, yg) => {
        function GP(e, t) {
            return e != null && t in Object(e)
        }
        yg.exports = GP
    });
    var Og = u((Qj, Tg) => {
        var UP = zr(),
            XP = Wr(),
            VP = Pe(),
            WP = Kn(),
            BP = zn(),
            HP = pr();

        function kP(e, t, r) {
            t = UP(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o;) {
                var a = HP(t[n]);
                if (!(i = e != null && r(e, a))) break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && BP(o) && WP(a, o) && (VP(e) || XP(e)))
        }
        Tg.exports = kP
    });
    var wg = u(($j, bg) => {
        var jP = Ig(),
            KP = Og();

        function zP(e, t) {
            return e != null && KP(e, t, jP)
        }
        bg.exports = zP
    });
    var Ag = u((Zj, Sg) => {
        var YP = Aa(),
            QP = ri(),
            $P = wg(),
            ZP = ei(),
            JP = Ra(),
            eL = Ca(),
            tL = pr(),
            rL = 1,
            nL = 2;

        function iL(e, t) {
            return ZP(e) && JP(t) ? eL(tL(e), t) : function(r) {
                var n = QP(r, e);
                return n === void 0 && n === t ? $P(r, e) : YP(t, n, rL | nL)
            }
        }
        Sg.exports = iL
    });
    var ni = u((Jj, Rg) => {
        function oL(e) {
            return e
        }
        Rg.exports = oL
    });
    var Pa = u((e5, Cg) => {
        function aL(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Cg.exports = aL
    });
    var Ng = u((t5, xg) => {
        var sL = ti();

        function uL(e) {
            return function(t) {
                return sL(t, e)
            }
        }
        xg.exports = uL
    });
    var Lg = u((r5, Pg) => {
        var cL = Pa(),
            lL = Ng(),
            fL = ei(),
            dL = pr();

        function pL(e) {
            return fL(e) ? cL(dL(e)) : lL(e)
        }
        Pg.exports = pL
    });
    var Ct = u((n5, qg) => {
        var vL = $v(),
            gL = Ag(),
            hL = ni(),
            EL = Pe(),
            _L = Lg();

        function mL(e) {
            return typeof e == "function" ? e : e == null ? hL : typeof e == "object" ? EL(e) ? gL(e[0], e[1]) : vL(e) : _L(e)
        }
        qg.exports = mL
    });
    var La = u((i5, Dg) => {
        var yL = Ct(),
            IL = Xt(),
            TL = jr();

        function OL(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!IL(t)) {
                    var i = yL(r, 3);
                    t = TL(t), r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Dg.exports = OL
    });
    var qa = u((o5, Mg) => {
        function bL(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                if (t(e[i], i, e)) return i;
            return -1
        }
        Mg.exports = bL
    });
    var Gg = u((a5, Fg) => {
        var wL = /\s/;

        function SL(e) {
            for (var t = e.length; t-- && wL.test(e.charAt(t)););
            return t
        }
        Fg.exports = SL
    });
    var Xg = u((s5, Ug) => {
        var AL = Gg(),
            RL = /^\s+/;

        function CL(e) {
            return e && e.slice(0, AL(e) + 1).replace(RL, "")
        }
        Ug.exports = CL
    });
    var ii = u((u5, Bg) => {
        var xL = Xg(),
            Vg = vt(),
            NL = Kr(),
            Wg = 0 / 0,
            PL = /^[-+]0x[0-9a-f]+$/i,
            LL = /^0b[01]+$/i,
            qL = /^0o[0-7]+$/i,
            DL = parseInt;

        function ML(e) {
            if (typeof e == "number") return e;
            if (NL(e)) return Wg;
            if (Vg(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Vg(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = xL(e);
            var r = LL.test(e);
            return r || qL.test(e) ? DL(e.slice(2), r ? 2 : 8) : PL.test(e) ? Wg : +e
        }
        Bg.exports = ML
    });
    var jg = u((c5, kg) => {
        var FL = ii(),
            Hg = 1 / 0,
            GL = 17976931348623157e292;

        function UL(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = FL(e), e === Hg || e === -Hg) {
                var t = e < 0 ? -1 : 1;
                return t * GL
            }
            return e === e ? e : 0
        }
        kg.exports = UL
    });
    var Da = u((l5, Kg) => {
        var XL = jg();

        function VL(e) {
            var t = XL(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Kg.exports = VL
    });
    var Yg = u((f5, zg) => {
        var WL = qa(),
            BL = Ct(),
            HL = Da(),
            kL = Math.max;

        function jL(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = r == null ? 0 : HL(r);
            return o < 0 && (o = kL(n + o, 0)), WL(e, BL(t, 3), o)
        }
        zg.exports = jL
    });
    var Ma = u((d5, Qg) => {
        var KL = La(),
            zL = Yg(),
            YL = KL(zL);
        Qg.exports = YL
    });
    var ai = u(Ue => {
        "use strict";
        var QL = tt().default;
        Object.defineProperty(Ue, "__esModule", {
            value: !0
        });
        Ue.withBrowser = Ue.TRANSFORM_STYLE_PREFIXED = Ue.TRANSFORM_PREFIXED = Ue.IS_BROWSER_ENV = Ue.FLEX_PREFIXED = Ue.ELEMENT_MATCHES = void 0;
        var $L = QL(Ma()),
            Zg = typeof window < "u";
        Ue.IS_BROWSER_ENV = Zg;
        var oi = (e, t) => Zg ? e() : t;
        Ue.withBrowser = oi;
        var ZL = oi(() => (0, $L.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        Ue.ELEMENT_MATCHES = ZL;
        var JL = oi(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i, e.style.display === i) return i
                }
                return r
            } catch {
                return r
            }
        }, "flex");
        Ue.FLEX_PREFIXED = JL;
        var Jg = oi(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0) return i
                }
            }
            return "transform"
        }, "transform");
        Ue.TRANSFORM_PREFIXED = Jg;
        var $g = Jg.split("transform")[0],
            eq = $g ? $g + "TransformStyle" : "transformStyle";
        Ue.TRANSFORM_STYLE_PREFIXED = eq
    });
    var Fa = u((v5, ih) => {
        var tq = 4,
            rq = .001,
            nq = 1e-7,
            iq = 10,
            Yr = 11,
            si = 1 / (Yr - 1),
            oq = typeof Float32Array == "function";

        function eh(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function th(e, t) {
            return 3 * t - 6 * e
        }

        function rh(e) {
            return 3 * e
        }

        function ui(e, t, r) {
            return ((eh(t, r) * e + th(t, r)) * e + rh(t)) * e
        }

        function nh(e, t, r) {
            return 3 * eh(t, r) * e * e + 2 * th(t, r) * e + rh(t)
        }

        function aq(e, t, r, n, o) {
            var i, a, s = 0;
            do a = t + (r - t) / 2, i = ui(a, n, o) - e, i > 0 ? r = a : t = a; while (Math.abs(i) > nq && ++s < iq);
            return a
        }

        function sq(e, t, r, n) {
            for (var o = 0; o < tq; ++o) {
                var i = nh(t, r, n);
                if (i === 0) return t;
                var a = ui(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        ih.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var i = oq ? new Float32Array(Yr) : new Array(Yr);
            if (t !== r || n !== o)
                for (var a = 0; a < Yr; ++a) i[a] = ui(a * si, t, n);

            function s(c) {
                for (var d = 0, g = 1, f = Yr - 1; g !== f && i[g] <= c; ++g) d += si;
                --g;
                var m = (c - i[g]) / (i[g + 1] - i[g]),
                    p = d + m * si,
                    h = nh(p, t, n);
                return h >= rq ? sq(c, p, t, n) : h === 0 ? p : aq(c, d, d + si, t, n)
            }
            return function(d) {
                return t === r && n === o ? d : d === 0 ? 0 : d === 1 ? 1 : ui(s(d), r, o)
            }
        }
    });
    var Ga = u(ue => {
        "use strict";
        var uq = tt().default;
        Object.defineProperty(ue, "__esModule", {
            value: !0
        });
        ue.bounce = Hq;
        ue.bouncePast = kq;
        ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
        ue.inBack = Dq;
        ue.inCirc = Nq;
        ue.inCubic = hq;
        ue.inElastic = Gq;
        ue.inExpo = Rq;
        ue.inOutBack = Fq;
        ue.inOutCirc = Lq;
        ue.inOutCubic = _q;
        ue.inOutElastic = Xq;
        ue.inOutExpo = xq;
        ue.inOutQuad = gq;
        ue.inOutQuart = Iq;
        ue.inOutQuint = bq;
        ue.inOutSine = Aq;
        ue.inQuad = pq;
        ue.inQuart = mq;
        ue.inQuint = Tq;
        ue.inSine = wq;
        ue.outBack = Mq;
        ue.outBounce = qq;
        ue.outCirc = Pq;
        ue.outCubic = Eq;
        ue.outElastic = Uq;
        ue.outExpo = Cq;
        ue.outQuad = vq;
        ue.outQuart = yq;
        ue.outQuint = Oq;
        ue.outSine = Sq;
        ue.swingFrom = Wq;
        ue.swingFromTo = Vq;
        ue.swingTo = Bq;
        var ci = uq(Fa()),
            Tt = 1.70158,
            cq = (0, ci.default)(.25, .1, .25, 1);
        ue.ease = cq;
        var lq = (0, ci.default)(.42, 0, 1, 1);
        ue.easeIn = lq;
        var fq = (0, ci.default)(0, 0, .58, 1);
        ue.easeOut = fq;
        var dq = (0, ci.default)(.42, 0, .58, 1);
        ue.easeInOut = dq;

        function pq(e) {
            return Math.pow(e, 2)
        }

        function vq(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }

        function gq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }

        function hq(e) {
            return Math.pow(e, 3)
        }

        function Eq(e) {
            return Math.pow(e - 1, 3) + 1
        }

        function _q(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }

        function mq(e) {
            return Math.pow(e, 4)
        }

        function yq(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }

        function Iq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }

        function Tq(e) {
            return Math.pow(e, 5)
        }

        function Oq(e) {
            return Math.pow(e - 1, 5) + 1
        }

        function bq(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }

        function wq(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }

        function Sq(e) {
            return Math.sin(e * (Math.PI / 2))
        }

        function Aq(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }

        function Rq(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }

        function Cq(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }

        function xq(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }

        function Nq(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }

        function Pq(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }

        function Lq(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }

        function qq(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }

        function Dq(e) {
            let t = Tt;
            return e * e * ((t + 1) * e - t)
        }

        function Mq(e) {
            let t = Tt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }

        function Fq(e) {
            let t = Tt;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }

        function Gq(e) {
            let t = Tt,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }

        function Uq(e) {
            let t = Tt,
                r = 0,
                n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }

        function Xq(e) {
            let t = Tt,
                r = 0,
                n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }

        function Vq(e) {
            let t = Tt;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }

        function Wq(e) {
            let t = Tt;
            return e * e * ((t + 1) * e - t)
        }

        function Bq(e) {
            let t = Tt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }

        function Hq(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }

        function kq(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    });
    var Xa = u(Qr => {
        "use strict";
        var jq = tt().default,
            Kq = Mt().default;
        Object.defineProperty(Qr, "__esModule", {
            value: !0
        });
        Qr.applyEasing = Qq;
        Qr.createBezierEasing = Yq;
        Qr.optimizeFloat = Ua;
        var oh = Kq(Ga()),
            zq = jq(Fa());

        function Ua(e, t = 5, r = 10) {
            let n = Math.pow(r, t),
                o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0
        }

        function Yq(e) {
            return (0, zq.default)(...e)
        }

        function Qq(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : Ua(r ? t > 0 ? r(t) : t : t > 0 && e && oh[e] ? oh[e](t) : t)
        }
    });
    var ch = u(vr => {
        "use strict";
        Object.defineProperty(vr, "__esModule", {
            value: !0
        });
        vr.createElementState = uh;
        vr.ixElements = void 0;
        vr.mergeActionState = Va;
        var li = or(),
            sh = ke(),
            {
                HTML_ELEMENT: E5,
                PLAIN_OBJECT: $q,
                ABSTRACT_NODE: _5,
                CONFIG_X_VALUE: Zq,
                CONFIG_Y_VALUE: Jq,
                CONFIG_Z_VALUE: eD,
                CONFIG_VALUE: tD,
                CONFIG_X_UNIT: rD,
                CONFIG_Y_UNIT: nD,
                CONFIG_Z_UNIT: iD,
                CONFIG_UNIT: oD
            } = sh.IX2EngineConstants,
            {
                IX2_SESSION_STOPPED: aD,
                IX2_INSTANCE_ADDED: sD,
                IX2_ELEMENT_STATE_CHANGED: uD
            } = sh.IX2EngineActionTypes,
            ah = {},
            cD = "refState",
            lD = (e = ah, t = {}) => {
                switch (t.type) {
                    case aD:
                        return ah;
                    case sD:
                        {
                            let {
                                elementId: r,
                                element: n,
                                origin: o,
                                actionItem: i,
                                refType: a
                            } = t.payload,
                            {
                                actionTypeId: s
                            } = i,
                            c = e;
                            return (0, li.getIn)(c, [r, n]) !== n && (c = uh(c, n, a, r, i)),
                            Va(c, r, s, o, i)
                        }
                    case uD:
                        {
                            let {
                                elementId: r,
                                actionTypeId: n,
                                current: o,
                                actionItem: i
                            } = t.payload;
                            return Va(e, r, n, o, i)
                        }
                    default:
                        return e
                }
            };
        vr.ixElements = lD;

        function uh(e, t, r, n, o) {
            let i = r === $q ? (0, li.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0, li.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: i,
                refType: r
            })
        }

        function Va(e, t, r, n, o) {
            let i = dD(o),
                a = [t, cD, r];
            return (0, li.mergeIn)(e, a, n, i)
        }
        var fD = [
            [Zq, rD],
            [Jq, nD],
            [eD, iD],
            [tD, oD]
        ];

        function dD(e) {
            let {
                config: t
            } = e;
            return fD.reduce((r, n) => {
                let o = n[0],
                    i = n[1],
                    a = t[o],
                    s = t[i];
                return a != null && s != null && (r[i] = s), r
            }, {})
        }
    });
    var lh = u(Le => {
        "use strict";
        Object.defineProperty(Le, "__esModule", {
            value: !0
        });
        Le.renderPlugin = Le.getPluginOrigin = Le.getPluginDuration = Le.getPluginDestination = Le.getPluginConfig = Le.createPluginInstance = Le.clearPlugin = void 0;
        var pD = e => e.value;
        Le.getPluginConfig = pD;
        var vD = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Le.getPluginDuration = vD;
        var gD = e => e || {
            value: 0
        };
        Le.getPluginOrigin = gD;
        var hD = e => ({
            value: e.value
        });
        Le.getPluginDestination = hD;
        var ED = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Le.createPluginInstance = ED;
        var _D = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Le.renderPlugin = _D;
        var mD = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Le.clearPlugin = mD
    });
    var dh = u(qe => {
        "use strict";
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
        var yD = e => document.querySelector(`[data-w-id="${e}"]`),
            ID = () => window.Webflow.require("spline"),
            TD = (e, t) => e.filter(r => !t.includes(r)),
            OD = (e, t) => e.value[t];
        qe.getPluginConfig = OD;
        var bD = () => null;
        qe.getPluginDuration = bD;
        var fh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            wD = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let i = Object.keys(e),
                        a = TD(n, i);
                    return a.length ? a.reduce((c, d) => (c[d] = fh[d], c), e) : e
                }
                return n.reduce((i, a) => (i[a] = fh[a], i), {})
            };
        qe.getPluginOrigin = wD;
        var SD = e => e.value;
        qe.getPluginDestination = SD;
        var AD = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? yD(o) : null
        };
        qe.createPluginInstance = AD;
        var RD = (e, t, r) => {
            let n = ID().getInstance(e),
                o = r.config.target.objectId;
            if (!n || !o) return;
            let i = n.spline.findObjectById(o);
            if (!i) return;
            let {
                PLUGIN_SPLINE: a
            } = t;
            a.positionX != null && (i.position.x = a.positionX), a.positionY != null && (i.position.y = a.positionY), a.positionZ != null && (i.position.z = a.positionZ), a.rotationX != null && (i.rotation.x = a.rotationX), a.rotationY != null && (i.rotation.y = a.rotationY), a.rotationZ != null && (i.rotation.z = a.rotationZ), a.scaleX != null && (i.scale.x = a.scaleX), a.scaleY != null && (i.scale.y = a.scaleY), a.scaleZ != null && (i.scale.z = a.scaleZ)
        };
        qe.renderPlugin = RD;
        var CD = () => null;
        qe.clearPlugin = CD
    });
    var vh = u(Ce => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", {
            value: !0
        });
        Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
        Ce.normalizeColor = ph;
        Ce.renderPlugin = void 0;

        function ph(e) {
            let t, r, n, o = 1,
                i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let a = i.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16), r = parseInt(a[1] + a[1], 16), n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16), r = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16))
            } else if (i.startsWith("rgba")) {
                let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10), o = parseFloat(a[3])
            } else if (i.startsWith("rgb")) {
                let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10), r = parseInt(a[1], 10), n = parseInt(a[2], 10)
            } else if (i.startsWith("hsla")) {
                let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    c = parseFloat(a[1].replace("%", "")) / 100,
                    d = parseFloat(a[2].replace("%", "")) / 100;
                o = parseFloat(a[3]);
                let g = (1 - Math.abs(2 * d - 1)) * c,
                    f = g * (1 - Math.abs(s / 60 % 2 - 1)),
                    m = d - g / 2,
                    p, h, y;
                s >= 0 && s < 60 ? (p = g, h = f, y = 0) : s >= 60 && s < 120 ? (p = f, h = g, y = 0) : s >= 120 && s < 180 ? (p = 0, h = g, y = f) : s >= 180 && s < 240 ? (p = 0, h = f, y = g) : s >= 240 && s < 300 ? (p = f, h = 0, y = g) : (p = g, h = 0, y = f), t = Math.round((p + m) * 255), r = Math.round((h + m) * 255), n = Math.round((y + m) * 255)
            } else if (i.startsWith("hsl")) {
                let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
                    s = parseFloat(a[0]),
                    c = parseFloat(a[1].replace("%", "")) / 100,
                    d = parseFloat(a[2].replace("%", "")) / 100,
                    g = (1 - Math.abs(2 * d - 1)) * c,
                    f = g * (1 - Math.abs(s / 60 % 2 - 1)),
                    m = d - g / 2,
                    p, h, y;
                s >= 0 && s < 60 ? (p = g, h = f, y = 0) : s >= 60 && s < 120 ? (p = f, h = g, y = 0) : s >= 120 && s < 180 ? (p = 0, h = g, y = f) : s >= 180 && s < 240 ? (p = 0, h = f, y = g) : s >= 240 && s < 300 ? (p = f, h = 0, y = g) : (p = g, h = 0, y = f), t = Math.round((p + m) * 255), r = Math.round((h + m) * 255), n = Math.round((y + m) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: o
            }
        }
        var xD = (e, t) => e.value[t];
        Ce.getPluginConfig = xD;
        var ND = () => null;
        Ce.getPluginDuration = ND;
        var PD = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(o, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return ph(o)
        };
        Ce.getPluginOrigin = PD;
        var LD = e => e.value;
        Ce.getPluginDestination = LD;
        var qD = () => null;
        Ce.createPluginInstance = qD;
        var DD = (e, t, r) => {
            let n = r.config.target.objectId,
                o = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: i
                } = t,
                {
                    size: a,
                    red: s,
                    green: c,
                    blue: d,
                    alpha: g
                } = i,
                f;
            a != null && (f = a + o), s != null && d != null && c != null && g != null && (f = `rgba(${s}, ${c}, ${d}, ${g})`), f != null && document.documentElement.style.setProperty(n, f)
        };
        Ce.renderPlugin = DD;
        var MD = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Ce.clearPlugin = MD
    });
    var gh = u(fi => {
        "use strict";
        var Ha = Mt().default,
            FD = tt().default;
        Object.defineProperty(fi, "__esModule", {
            value: !0
        });
        fi.pluginMethodMap = void 0;
        var Wa = FD(ir()),
            Ba = ke(),
            GD = Ha(lh()),
            UD = Ha(dh()),
            XD = Ha(vh()),
            VD = new Map([
                [Ba.ActionTypeConsts.PLUGIN_LOTTIE, (0, Wa.default)({}, GD)],
                [Ba.ActionTypeConsts.PLUGIN_SPLINE, (0, Wa.default)({}, UD)],
                [Ba.ActionTypeConsts.PLUGIN_VARIABLE, (0, Wa.default)({}, XD)]
            ]);
        fi.pluginMethodMap = VD
    });
    var ka = u(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        xe.isPluginType = BD;
        xe.renderPlugin = void 0;
        var WD = ai(),
            hh = gh();

        function BD(e) {
            return hh.pluginMethodMap.has(e)
        }
        var Wt = e => t => {
                if (!WD.IS_BROWSER_ENV) return () => null;
                let r = hh.pluginMethodMap.get(t);
                if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
                let n = r[e];
                if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
                return n
            },
            HD = Wt("getPluginConfig");
        xe.getPluginConfig = HD;
        var kD = Wt("getPluginOrigin");
        xe.getPluginOrigin = kD;
        var jD = Wt("getPluginDuration");
        xe.getPluginDuration = jD;
        var KD = Wt("getPluginDestination");
        xe.getPluginDestination = KD;
        var zD = Wt("createPluginInstance");
        xe.createPluginInstance = zD;
        var YD = Wt("renderPlugin");
        xe.renderPlugin = YD;
        var QD = Wt("clearPlugin");
        xe.clearPlugin = QD
    });
    var _h = u((w5, Eh) => {
        function $D(e, t) {
            return e == null || e !== e ? t : e
        }
        Eh.exports = $D
    });
    var yh = u((S5, mh) => {
        function ZD(e, t, r, n) {
            var o = -1,
                i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
            return r
        }
        mh.exports = ZD
    });
    var Th = u((A5, Ih) => {
        function JD(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--;) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1) break
                }
                return t
            }
        }
        Ih.exports = JD
    });
    var bh = u((R5, Oh) => {
        var eM = Th(),
            tM = eM();
        Oh.exports = tM
    });
    var ja = u((C5, wh) => {
        var rM = bh(),
            nM = jr();

        function iM(e, t) {
            return e && rM(e, t, nM)
        }
        wh.exports = iM
    });
    var Ah = u((x5, Sh) => {
        var oM = Xt();

        function aM(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!oM(r)) return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r);
                    (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;);
                return r
            }
        }
        Sh.exports = aM
    });
    var Ka = u((N5, Rh) => {
        var sM = ja(),
            uM = Ah(),
            cM = uM(sM);
        Rh.exports = cM
    });
    var xh = u((P5, Ch) => {
        function lM(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1, i) : t(r, i, a, s)
            }), r
        }
        Ch.exports = lM
    });
    var Ph = u((L5, Nh) => {
        var fM = yh(),
            dM = Ka(),
            pM = Ct(),
            vM = xh(),
            gM = Pe();

        function hM(e, t, r) {
            var n = gM(e) ? fM : vM,
                o = arguments.length < 3;
            return n(e, pM(t, 4), r, o, dM)
        }
        Nh.exports = hM
    });
    var qh = u((q5, Lh) => {
        var EM = qa(),
            _M = Ct(),
            mM = Da(),
            yM = Math.max,
            IM = Math.min;

        function TM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = n - 1;
            return r !== void 0 && (o = mM(r), o = r < 0 ? yM(n + o, 0) : IM(o, n - 1)), EM(e, _M(t, 3), o, !0)
        }
        Lh.exports = TM
    });
    var Mh = u((D5, Dh) => {
        var OM = La(),
            bM = qh(),
            wM = OM(bM);
        Dh.exports = wM
    });
    var Gh = u(di => {
        "use strict";
        Object.defineProperty(di, "__esModule", {
            value: !0
        });
        di.default = void 0;
        var SM = Object.prototype.hasOwnProperty;

        function Fh(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }

        function AM(e, t) {
            if (Fh(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            let r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (let o = 0; o < r.length; o++)
                if (!SM.call(t, r[o]) || !Fh(e[r[o]], t[r[o]])) return !1;
            return !0
        }
        var RM = AM;
        di.default = RM
    });
    var nE = u(_e => {
        "use strict";
        var hi = tt().default;
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        _e.cleanupHTMLElement = S1;
        _e.clearAllStyles = w1;
        _e.clearObjectCache = jM;
        _e.getActionListProgress = R1;
        _e.getAffectedElements = es;
        _e.getComputedStyle = e1;
        _e.getDestinationValues = s1;
        _e.getElementId = QM;
        _e.getInstanceId = zM;
        _e.getInstanceOrigin = n1;
        _e.getItemConfigByKey = void 0;
        _e.getMaxDurationItemIndex = rE;
        _e.getNamespacedParameterId = N1;
        _e.getRenderType = Jh;
        _e.getStyleProp = u1;
        _e.mediaQueriesEqual = L1;
        _e.observeStore = JM;
        _e.reduceListToGroup = C1;
        _e.reifyState = $M;
        _e.renderHTMLElement = c1;
        Object.defineProperty(_e, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return jh.default
            }
        });
        _e.shouldAllowMediaQuery = P1;
        _e.shouldNamespaceEventParameter = x1;
        _e.stringifyTarget = q1;
        var xt = hi(_h()),
            Qa = hi(Ph()),
            Ya = hi(Mh()),
            Uh = or(),
            Bt = ke(),
            jh = hi(Gh()),
            CM = Xa(),
            Et = ka(),
            Xe = ai(),
            {
                BACKGROUND: xM,
                TRANSFORM: NM,
                TRANSLATE_3D: PM,
                SCALE_3D: LM,
                ROTATE_X: qM,
                ROTATE_Y: DM,
                ROTATE_Z: MM,
                SKEW: FM,
                PRESERVE_3D: GM,
                FLEX: UM,
                OPACITY: vi,
                FILTER: $r,
                FONT_VARIATION_SETTINGS: Zr,
                WIDTH: gt,
                HEIGHT: ht,
                BACKGROUND_COLOR: Kh,
                BORDER_COLOR: XM,
                COLOR: VM,
                CHILDREN: Xh,
                IMMEDIATE_CHILDREN: WM,
                SIBLINGS: Vh,
                PARENT: BM,
                DISPLAY: gi,
                WILL_CHANGE: gr,
                AUTO: Nt,
                COMMA_DELIMITER: Jr,
                COLON_DELIMITER: HM,
                BAR_DELIMITER: za,
                RENDER_TRANSFORM: zh,
                RENDER_GENERAL: $a,
                RENDER_STYLE: Za,
                RENDER_PLUGIN: Yh
            } = Bt.IX2EngineConstants,
            {
                TRANSFORM_MOVE: hr,
                TRANSFORM_SCALE: Er,
                TRANSFORM_ROTATE: _r,
                TRANSFORM_SKEW: en,
                STYLE_OPACITY: Qh,
                STYLE_FILTER: tn,
                STYLE_FONT_VARIATION: rn,
                STYLE_SIZE: mr,
                STYLE_BACKGROUND_COLOR: yr,
                STYLE_BORDER: Ir,
                STYLE_TEXT_COLOR: Tr,
                GENERAL_DISPLAY: Ei,
                OBJECT_VALUE: kM
            } = Bt.ActionTypeConsts,
            $h = e => e.trim(),
            Ja = Object.freeze({
                [yr]: Kh,
                [Ir]: XM,
                [Tr]: VM
            }),
            Zh = Object.freeze({
                [Xe.TRANSFORM_PREFIXED]: NM,
                [Kh]: xM,
                [vi]: vi,
                [$r]: $r,
                [gt]: gt,
                [ht]: ht,
                [Zr]: Zr
            }),
            pi = new Map;

        function jM() {
            pi.clear()
        }
        var KM = 1;

        function zM() {
            return "i" + KM++
        }
        var YM = 1;

        function QM(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t) return n.id
            }
            return "e" + YM++
        }

        function $M({
            events: e,
            actionLists: t,
            site: r
        } = {}) {
            let n = (0, Qa.default)(e, (a, s) => {
                    let {
                        eventTypeId: c
                    } = s;
                    return a[c] || (a[c] = {}), a[c][s.id] = s, a
                }, {}),
                o = r && r.mediaQueries,
                i = [];
            return o ? i = o.map(a => a.key) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i
                }
            }
        }
        var ZM = (e, t) => e === t;

        function JM({
            store: e,
            select: t,
            onChange: r,
            comparator: n = ZM
        }) {
            let {
                getState: o,
                subscribe: i
            } = e, a = i(c), s = t(o());

            function c() {
                let d = t(o());
                if (d == null) {
                    a();
                    return
                }
                n(d, s) || (s = d, r(s, e))
            }
            return a
        }

        function Wh(e) {
            let t = typeof e;
            if (t === "string") return {
                id: e
            };
            if (e != null && t === "object") {
                let {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                } = e;
                return {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }

        function es({
            config: e,
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: o
        }) {
            var i, a, s;
            if (!o) throw new Error("IX2 missing elementApi");
            let {
                targets: c
            } = e;
            if (Array.isArray(c) && c.length > 0) return c.reduce((X, V) => X.concat(es({
                config: {
                    target: V
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o
            })), []);
            let {
                getValidDocument: d,
                getQuerySelector: g,
                queryDocument: f,
                getChildElements: m,
                getSiblingElements: p,
                matchSelector: h,
                elementContains: y,
                isSiblingNode: C
            } = o, {
                target: A
            } = e;
            if (!A) return [];
            let {
                id: x,
                objectId: w,
                selector: L,
                selectorGuids: q,
                appliesTo: M,
                useEventTarget: H
            } = Wh(A);
            if (w) return [pi.has(w) ? pi.get(w) : pi.set(w, {}).get(w)];
            if (M === Bt.EventAppliesTo.PAGE) {
                let X = d(x);
                return X ? [X] : []
            }
            let J = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[x || L] || {},
                oe = !!(J.id || J.selector),
                re, U, O, F = t && g(Wh(t.target));
            if (oe ? (re = J.limitAffectedElements, U = F, O = g(J)) : U = O = g({
                    id: x,
                    selector: L,
                    selectorGuids: q
                }), t && H) {
                let X = r && (O || H === !0) ? [r] : f(F);
                if (O) {
                    if (H === BM) return f(O).filter(V => X.some(ee => y(V, ee)));
                    if (H === Xh) return f(O).filter(V => X.some(ee => y(ee, V)));
                    if (H === Vh) return f(O).filter(V => X.some(ee => C(ee, V)))
                }
                return X
            }
            return U == null || O == null ? [] : Xe.IS_BROWSER_ENV && n ? f(O).filter(X => n.contains(X)) : re === Xh ? f(U, O) : re === WM ? m(f(U)).filter(h(O)) : re === Vh ? p(f(U)).filter(h(O)) : f(O)
        }

        function e1({
            element: e,
            actionItem: t
        }) {
            if (!Xe.IS_BROWSER_ENV) return {};
            let {
                actionTypeId: r
            } = t;
            switch (r) {
                case mr:
                case yr:
                case Ir:
                case Tr:
                case Ei:
                    return window.getComputedStyle(e);
                default:
                    return {}
            }
        }
        var Bh = /px/,
            t1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = l1[n.type]), r), e || {}),
            r1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = f1[n.type] || n.defaultValue || 0), r), e || {});

        function n1(e, t = {}, r = {}, n, o) {
            let {
                getStyle: i
            } = o, {
                actionTypeId: a
            } = n;
            if ((0, Et.isPluginType)(a)) return (0, Et.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
                case hr:
                case Er:
                case _r:
                case en:
                    return t[n.actionTypeId] || ts[n.actionTypeId];
                case tn:
                    return t1(t[n.actionTypeId], n.config.filters);
                case rn:
                    return r1(t[n.actionTypeId], n.config.fontVariations);
                case Qh:
                    return {
                        value: (0, xt.default)(parseFloat(i(e, vi)), 1)
                    };
                case mr:
                    {
                        let s = i(e, gt),
                            c = i(e, ht),
                            d, g;
                        return n.config.widthUnit === Nt ? d = Bh.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0, xt.default)(parseFloat(s), parseFloat(r.width)),
                        n.config.heightUnit === Nt ? g = Bh.test(c) ? parseFloat(c) : parseFloat(r.height) : g = (0, xt.default)(parseFloat(c), parseFloat(r.height)),
                        {
                            widthValue: d,
                            heightValue: g
                        }
                    }
                case yr:
                case Ir:
                case Tr:
                    return T1({
                        element: e,
                        actionTypeId: n.actionTypeId,
                        computedStyle: r,
                        getStyle: i
                    });
                case Ei:
                    return {
                        value: (0, xt.default)(i(e, gi), r.display)
                    };
                case kM:
                    return t[n.actionTypeId] || {
                        value: 0
                    };
                default:
                    return
            }
        }
        var i1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
            o1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
            a1 = (e, t, r) => {
                if ((0, Et.isPluginType)(e)) return (0, Et.getPluginConfig)(e)(r, t);
                switch (e) {
                    case tn:
                        {
                            let n = (0, Ya.default)(r.filters, ({
                                type: o
                            }) => o === t);
                            return n ? n.value : 0
                        }
                    case rn:
                        {
                            let n = (0, Ya.default)(r.fontVariations, ({
                                type: o
                            }) => o === t);
                            return n ? n.value : 0
                        }
                    default:
                        return r[t]
                }
            };
        _e.getItemConfigByKey = a1;

        function s1({
            element: e,
            actionItem: t,
            elementApi: r
        }) {
            if ((0, Et.isPluginType)(t.actionTypeId)) return (0, Et.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
                case hr:
                case Er:
                case _r:
                case en:
                    {
                        let {
                            xValue: n,
                            yValue: o,
                            zValue: i
                        } = t.config;
                        return {
                            xValue: n,
                            yValue: o,
                            zValue: i
                        }
                    }
                case mr:
                    {
                        let {
                            getStyle: n,
                            setStyle: o,
                            getProperty: i
                        } = r,
                        {
                            widthUnit: a,
                            heightUnit: s
                        } = t.config,
                        {
                            widthValue: c,
                            heightValue: d
                        } = t.config;
                        if (!Xe.IS_BROWSER_ENV) return {
                            widthValue: c,
                            heightValue: d
                        };
                        if (a === Nt) {
                            let g = n(e, gt);
                            o(e, gt, ""), c = i(e, "offsetWidth"), o(e, gt, g)
                        }
                        if (s === Nt) {
                            let g = n(e, ht);
                            o(e, ht, ""), d = i(e, "offsetHeight"), o(e, ht, g)
                        }
                        return {
                            widthValue: c,
                            heightValue: d
                        }
                    }
                case yr:
                case Ir:
                case Tr:
                    {
                        let {
                            rValue: n,
                            gValue: o,
                            bValue: i,
                            aValue: a
                        } = t.config;
                        return {
                            rValue: n,
                            gValue: o,
                            bValue: i,
                            aValue: a
                        }
                    }
                case tn:
                    return t.config.filters.reduce(i1, {});
                case rn:
                    return t.config.fontVariations.reduce(o1, {});
                default:
                    {
                        let {
                            value: n
                        } = t.config;
                        return {
                            value: n
                        }
                    }
            }
        }

        function Jh(e) {
            if (/^TRANSFORM_/.test(e)) return zh;
            if (/^STYLE_/.test(e)) return Za;
            if (/^GENERAL_/.test(e)) return $a;
            if (/^PLUGIN_/.test(e)) return Yh
        }

        function u1(e, t) {
            return e === Za ? t.replace("STYLE_", "").toLowerCase() : null
        }

        function c1(e, t, r, n, o, i, a, s, c) {
            switch (s) {
                case zh:
                    return v1(e, t, r, o, a);
                case Za:
                    return O1(e, t, r, o, i, a);
                case $a:
                    return b1(e, o, a);
                case Yh:
                    {
                        let {
                            actionTypeId: d
                        } = o;
                        if ((0, Et.isPluginType)(d)) return (0, Et.renderPlugin)(d)(c, t, o)
                    }
            }
        }
        var ts = {
                [hr]: Object.freeze({
                    xValue: 0,
                    yValue: 0,
                    zValue: 0
                }),
                [Er]: Object.freeze({
                    xValue: 1,
                    yValue: 1,
                    zValue: 1
                }),
                [_r]: Object.freeze({
                    xValue: 0,
                    yValue: 0,
                    zValue: 0
                }),
                [en]: Object.freeze({
                    xValue: 0,
                    yValue: 0
                })
            },
            l1 = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }),
            f1 = Object.freeze({
                wght: 0,
                opsz: 0,
                wdth: 0,
                slnt: 0
            }),
            d1 = (e, t) => {
                let r = (0, Ya.default)(t.filters, ({
                    type: n
                }) => n === e);
                if (r && r.unit) return r.unit;
                switch (e) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%"
                }
            },
            p1 = Object.keys(ts);

        function v1(e, t, r, n, o) {
            let i = p1.map(s => {
                    let c = ts[s],
                        {
                            xValue: d = c.xValue,
                            yValue: g = c.yValue,
                            zValue: f = c.zValue,
                            xUnit: m = "",
                            yUnit: p = "",
                            zUnit: h = ""
                        } = t[s] || {};
                    switch (s) {
                        case hr:
                            return `${PM}(${d}${m}, ${g}${p}, ${f}${h})`;
                        case Er:
                            return `${LM}(${d}${m}, ${g}${p}, ${f}${h})`;
                        case _r:
                            return `${qM}(${d}${m}) ${DM}(${g}${p}) ${MM}(${f}${h})`;
                        case en:
                            return `${FM}(${d}${m}, ${g}${p})`;
                        default:
                            return ""
                    }
                }).join(" "),
                {
                    setStyle: a
                } = o;
            Ht(e, Xe.TRANSFORM_PREFIXED, o), a(e, Xe.TRANSFORM_PREFIXED, i), E1(n, r) && a(e, Xe.TRANSFORM_STYLE_PREFIXED, GM)
        }

        function g1(e, t, r, n) {
            let o = (0, Qa.default)(t, (a, s, c) => `${a} ${c}(${s}${d1(c,r)})`, ""),
                {
                    setStyle: i
                } = n;
            Ht(e, $r, n), i(e, $r, o)
        }

        function h1(e, t, r, n) {
            let o = (0, Qa.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
                {
                    setStyle: i
                } = n;
            Ht(e, Zr, n), i(e, Zr, o)
        }

        function E1({
            actionTypeId: e
        }, {
            xValue: t,
            yValue: r,
            zValue: n
        }) {
            return e === hr && n !== void 0 || e === Er && n !== void 0 || e === _r && (t !== void 0 || r !== void 0)
        }
        var _1 = "\\(([^)]+)\\)",
            m1 = /^rgb/,
            y1 = RegExp(`rgba?${_1}`);

        function I1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }

        function T1({
            element: e,
            actionTypeId: t,
            computedStyle: r,
            getStyle: n
        }) {
            let o = Ja[t],
                i = n(e, o),
                a = m1.test(i) ? i : r[o],
                s = I1(y1, a).split(Jr);
            return {
                rValue: (0, xt.default)(parseInt(s[0], 10), 255),
                gValue: (0, xt.default)(parseInt(s[1], 10), 255),
                bValue: (0, xt.default)(parseInt(s[2], 10), 255),
                aValue: (0, xt.default)(parseFloat(s[3]), 1)
            }
        }

        function O1(e, t, r, n, o, i) {
            let {
                setStyle: a
            } = i;
            switch (n.actionTypeId) {
                case mr:
                    {
                        let {
                            widthUnit: s = "",
                            heightUnit: c = ""
                        } = n.config,
                        {
                            widthValue: d,
                            heightValue: g
                        } = r;d !== void 0 && (s === Nt && (s = "px"), Ht(e, gt, i), a(e, gt, d + s)),
                        g !== void 0 && (c === Nt && (c = "px"), Ht(e, ht, i), a(e, ht, g + c));
                        break
                    }
                case tn:
                    {
                        g1(e, r, n.config, i);
                        break
                    }
                case rn:
                    {
                        h1(e, r, n.config, i);
                        break
                    }
                case yr:
                case Ir:
                case Tr:
                    {
                        let s = Ja[n.actionTypeId],
                            c = Math.round(r.rValue),
                            d = Math.round(r.gValue),
                            g = Math.round(r.bValue),
                            f = r.aValue;Ht(e, s, i),
                        a(e, s, f >= 1 ? `rgb(${c},${d},${g})` : `rgba(${c},${d},${g},${f})`);
                        break
                    }
                default:
                    {
                        let {
                            unit: s = ""
                        } = n.config;Ht(e, o, i),
                        a(e, o, r.value + s);
                        break
                    }
            }
        }

        function b1(e, t, r) {
            let {
                setStyle: n
            } = r;
            switch (t.actionTypeId) {
                case Ei:
                    {
                        let {
                            value: o
                        } = t.config;o === UM && Xe.IS_BROWSER_ENV ? n(e, gi, Xe.FLEX_PREFIXED) : n(e, gi, o);
                        return
                    }
            }
        }

        function Ht(e, t, r) {
            if (!Xe.IS_BROWSER_ENV) return;
            let n = Zh[t];
            if (!n) return;
            let {
                getStyle: o,
                setStyle: i
            } = r, a = o(e, gr);
            if (!a) {
                i(e, gr, n);
                return
            }
            let s = a.split(Jr).map($h);
            s.indexOf(n) === -1 && i(e, gr, s.concat(n).join(Jr))
        }

        function eE(e, t, r) {
            if (!Xe.IS_BROWSER_ENV) return;
            let n = Zh[t];
            if (!n) return;
            let {
                getStyle: o,
                setStyle: i
            } = r, a = o(e, gr);
            !a || a.indexOf(n) === -1 || i(e, gr, a.split(Jr).map($h).filter(s => s !== n).join(Jr))
        }

        function w1({
            store: e,
            elementApi: t
        }) {
            let {
                ixData: r
            } = e.getState(), {
                events: n = {},
                actionLists: o = {}
            } = r;
            Object.keys(n).forEach(i => {
                let a = n[i],
                    {
                        config: s
                    } = a.action,
                    {
                        actionListId: c
                    } = s,
                    d = o[c];
                d && Hh({
                    actionList: d,
                    event: a,
                    elementApi: t
                })
            }), Object.keys(o).forEach(i => {
                Hh({
                    actionList: o[i],
                    elementApi: t
                })
            })
        }

        function Hh({
            actionList: e = {},
            event: t,
            elementApi: r
        }) {
            let {
                actionItemGroups: n,
                continuousParameterGroups: o
            } = e;
            n && n.forEach(i => {
                kh({
                    actionGroup: i,
                    event: t,
                    elementApi: r
                })
            }), o && o.forEach(i => {
                let {
                    continuousActionGroups: a
                } = i;
                a.forEach(s => {
                    kh({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                })
            })
        }

        function kh({
            actionGroup: e,
            event: t,
            elementApi: r
        }) {
            let {
                actionItems: n
            } = e;
            n.forEach(o => {
                let {
                    actionTypeId: i,
                    config: a
                } = o, s;
                (0, Et.isPluginType)(i) ? s = c => (0, Et.clearPlugin)(i)(c, o): s = tE({
                    effect: A1,
                    actionTypeId: i,
                    elementApi: r
                }), es({
                    config: a,
                    event: t,
                    elementApi: r
                }).forEach(s)
            })
        }

        function S1(e, t, r) {
            let {
                setStyle: n,
                getStyle: o
            } = r, {
                actionTypeId: i
            } = t;
            if (i === mr) {
                let {
                    config: a
                } = t;
                a.widthUnit === Nt && n(e, gt, ""), a.heightUnit === Nt && n(e, ht, "")
            }
            o(e, gr) && tE({
                effect: eE,
                actionTypeId: i,
                elementApi: r
            })(e)
        }
        var tE = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case hr:
                case Er:
                case _r:
                case en:
                    e(n, Xe.TRANSFORM_PREFIXED, r);
                    break;
                case tn:
                    e(n, $r, r);
                    break;
                case rn:
                    e(n, Zr, r);
                    break;
                case Qh:
                    e(n, vi, r);
                    break;
                case mr:
                    e(n, gt, r), e(n, ht, r);
                    break;
                case yr:
                case Ir:
                case Tr:
                    e(n, Ja[t], r);
                    break;
                case Ei:
                    e(n, gi, r);
                    break
            }
        };

        function A1(e, t, r) {
            let {
                setStyle: n
            } = r;
            eE(e, t, r), n(e, t, ""), t === Xe.TRANSFORM_PREFIXED && n(e, Xe.TRANSFORM_STYLE_PREFIXED, "")
        }

        function rE(e) {
            let t = 0,
                r = 0;
            return e.forEach((n, o) => {
                let {
                    config: i
                } = n, a = i.delay + i.duration;
                a >= t && (t = a, r = o)
            }), r
        }

        function R1(e, t) {
            let {
                actionItemGroups: r,
                useFirstGroupAsInitialState: n
            } = e, {
                actionItem: o,
                verboseTimeElapsed: i = 0
            } = t, a = 0, s = 0;
            return r.forEach((c, d) => {
                if (n && d === 0) return;
                let {
                    actionItems: g
                } = c, f = g[rE(g)], {
                    config: m,
                    actionTypeId: p
                } = f;
                o.id === f.id && (s = a + i);
                let h = Jh(p) === $a ? 0 : m.duration;
                a += m.delay + h
            }), a > 0 ? (0, CM.optimizeFloat)(s / a) : 0
        }

        function C1({
            actionList: e,
            actionItemId: t,
            rawData: r
        }) {
            let {
                actionItemGroups: n,
                continuousParameterGroups: o
            } = e, i = [], a = s => (i.push((0, Uh.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })), s.id === t);
            return n && n.some(({
                actionItems: s
            }) => s.some(a)), o && o.some(s => {
                let {
                    continuousActionGroups: c
                } = s;
                return c.some(({
                    actionItems: d
                }) => d.some(a))
            }), (0, Uh.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: i
                    }]
                }
            })
        }

        function x1(e, {
            basedOn: t
        }) {
            return e === Bt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Bt.EventBasedOn.ELEMENT || t == null) || e === Bt.EventTypeConsts.MOUSE_MOVE && t === Bt.EventBasedOn.ELEMENT
        }

        function N1(e, t) {
            return e + HM + t
        }

        function P1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }

        function L1(e, t) {
            return (0, jh.default)(e && e.sort(), t && t.sort())
        }

        function q1(e) {
            if (typeof e == "string") return e;
            if (e.pluginElement && e.objectId) return e.pluginElement + za + e.objectId;
            if (e.objectId) return e.objectId;
            let {
                id: t = "",
                selector: r = "",
                useEventTarget: n = ""
            } = e;
            return t + za + r + za + n
        }
    });
    var kt = u(Ve => {
        "use strict";
        var Or = Mt().default;
        Object.defineProperty(Ve, "__esModule", {
            value: !0
        });
        Ve.IX2VanillaUtils = Ve.IX2VanillaPlugins = Ve.IX2ElementsReducer = Ve.IX2Easings = Ve.IX2EasingUtils = Ve.IX2BrowserSupport = void 0;
        var D1 = Or(ai());
        Ve.IX2BrowserSupport = D1;
        var M1 = Or(Ga());
        Ve.IX2Easings = M1;
        var F1 = Or(Xa());
        Ve.IX2EasingUtils = F1;
        var G1 = Or(ch());
        Ve.IX2ElementsReducer = G1;
        var U1 = Or(ka());
        Ve.IX2VanillaPlugins = U1;
        var X1 = Or(nE());
        Ve.IX2VanillaUtils = X1
    });
    var sE = u(mi => {
        "use strict";
        Object.defineProperty(mi, "__esModule", {
            value: !0
        });
        mi.ixInstances = void 0;
        var iE = ke(),
            oE = kt(),
            br = or(),
            {
                IX2_RAW_DATA_IMPORTED: V1,
                IX2_SESSION_STOPPED: W1,
                IX2_INSTANCE_ADDED: B1,
                IX2_INSTANCE_STARTED: H1,
                IX2_INSTANCE_REMOVED: k1,
                IX2_ANIMATION_FRAME_CHANGED: j1
            } = iE.IX2EngineActionTypes,
            {
                optimizeFloat: _i,
                applyEasing: aE,
                createBezierEasing: K1
            } = oE.IX2EasingUtils,
            {
                RENDER_GENERAL: z1
            } = iE.IX2EngineConstants,
            {
                getItemConfigByKey: rs,
                getRenderType: Y1,
                getStyleProp: Q1
            } = oE.IX2VanillaUtils,
            $1 = (e, t) => {
                let {
                    position: r,
                    parameterId: n,
                    actionGroups: o,
                    destinationKeys: i,
                    smoothing: a,
                    restingValue: s,
                    actionTypeId: c,
                    customEasingFn: d,
                    skipMotion: g,
                    skipToValue: f
                } = e, {
                    parameters: m
                } = t.payload, p = Math.max(1 - a, .01), h = m[n];
                h == null && (p = 1, h = s);
                let y = Math.max(h, 0) || 0,
                    C = _i(y - r),
                    A = g ? f : _i(r + C * p),
                    x = A * 100;
                if (A === r && e.current) return e;
                let w, L, q, M;
                for (let Q = 0, {
                        length: J
                    } = o; Q < J; Q++) {
                    let {
                        keyframe: oe,
                        actionItems: re
                    } = o[Q];
                    if (Q === 0 && (w = re[0]), x >= oe) {
                        w = re[0];
                        let U = o[Q + 1],
                            O = U && x !== oe;
                        L = O ? U.actionItems[0] : null, O && (q = oe / 100, M = (U.keyframe - oe) / 100)
                    }
                }
                let H = {};
                if (w && !L)
                    for (let Q = 0, {
                            length: J
                        } = i; Q < J; Q++) {
                        let oe = i[Q];
                        H[oe] = rs(c, oe, w.config)
                    } else if (w && L && q !== void 0 && M !== void 0) {
                        let Q = (A - q) / M,
                            J = w.config.easing,
                            oe = aE(J, Q, d);
                        for (let re = 0, {
                                length: U
                            } = i; re < U; re++) {
                            let O = i[re],
                                F = rs(c, O, w.config),
                                ee = (rs(c, O, L.config) - F) * oe + F;
                            H[O] = ee
                        }
                    }
                return (0, br.merge)(e, {
                    position: A,
                    current: H
                })
            },
            Z1 = (e, t) => {
                let {
                    active: r,
                    origin: n,
                    start: o,
                    immediate: i,
                    renderType: a,
                    verbose: s,
                    actionItem: c,
                    destination: d,
                    destinationKeys: g,
                    pluginDuration: f,
                    instanceDelay: m,
                    customEasingFn: p,
                    skipMotion: h
                } = e, y = c.config.easing, {
                    duration: C,
                    delay: A
                } = c.config;
                f != null && (C = f), A = m ? ? A, a === z1 ? C = 0 : (i || h) && (C = A = 0);
                let {
                    now: x
                } = t.payload;
                if (r && n) {
                    let w = x - (o + A);
                    if (s) {
                        let Q = x - o,
                            J = C + A,
                            oe = _i(Math.min(Math.max(0, Q / J), 1));
                        e = (0, br.set)(e, "verboseTimeElapsed", J * oe)
                    }
                    if (w < 0) return e;
                    let L = _i(Math.min(Math.max(0, w / C), 1)),
                        q = aE(y, L, p),
                        M = {},
                        H = null;
                    return g.length && (H = g.reduce((Q, J) => {
                        let oe = d[J],
                            re = parseFloat(n[J]) || 0,
                            O = (parseFloat(oe) - re) * q + re;
                        return Q[J] = O, Q
                    }, {})), M.current = H, M.position = L, L === 1 && (M.active = !1, M.complete = !0), (0, br.merge)(e, M)
                }
                return e
            },
            J1 = (e = Object.freeze({}), t) => {
                switch (t.type) {
                    case V1:
                        return t.payload.ixInstances || Object.freeze({});
                    case W1:
                        return Object.freeze({});
                    case B1:
                        {
                            let {
                                instanceId: r,
                                elementId: n,
                                actionItem: o,
                                eventId: i,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: d,
                                isCarrier: g,
                                origin: f,
                                destination: m,
                                immediate: p,
                                verbose: h,
                                continuous: y,
                                parameterId: C,
                                actionGroups: A,
                                smoothing: x,
                                restingValue: w,
                                pluginInstance: L,
                                pluginDuration: q,
                                instanceDelay: M,
                                skipMotion: H,
                                skipToValue: Q
                            } = t.payload,
                            {
                                actionTypeId: J
                            } = o,
                            oe = Y1(J),
                            re = Q1(oe, J),
                            U = Object.keys(m).filter(F => m[F] != null && typeof m[F] != "string"),
                            {
                                easing: O
                            } = o.config;
                            return (0, br.set)(e, r, {
                                id: r,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: f,
                                destination: m,
                                destinationKeys: U,
                                immediate: p,
                                verbose: h,
                                current: null,
                                actionItem: o,
                                actionTypeId: J,
                                eventId: i,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: c,
                                groupIndex: d,
                                renderType: oe,
                                isCarrier: g,
                                styleProp: re,
                                continuous: y,
                                parameterId: C,
                                actionGroups: A,
                                smoothing: x,
                                restingValue: w,
                                pluginInstance: L,
                                pluginDuration: q,
                                instanceDelay: M,
                                skipMotion: H,
                                skipToValue: Q,
                                customEasingFn: Array.isArray(O) && O.length === 4 ? K1(O) : void 0
                            })
                        }
                    case H1:
                        {
                            let {
                                instanceId: r,
                                time: n
                            } = t.payload;
                            return (0, br.mergeIn)(e, [r], {
                                active: !0,
                                complete: !1,
                                start: n
                            })
                        }
                    case k1:
                        {
                            let {
                                instanceId: r
                            } = t.payload;
                            if (!e[r]) return e;
                            let n = {},
                                o = Object.keys(e),
                                {
                                    length: i
                                } = o;
                            for (let a = 0; a < i; a++) {
                                let s = o[a];
                                s !== r && (n[s] = e[s])
                            }
                            return n
                        }
                    case j1:
                        {
                            let r = e,
                                n = Object.keys(e),
                                {
                                    length: o
                                } = n;
                            for (let i = 0; i < o; i++) {
                                let a = n[i],
                                    s = e[a],
                                    c = s.continuous ? $1 : Z1;
                                r = (0, br.set)(r, a, c(s, t))
                            }
                            return r
                        }
                    default:
                        return e
                }
            };
        mi.ixInstances = J1
    });
    var uE = u(yi => {
        "use strict";
        Object.defineProperty(yi, "__esModule", {
            value: !0
        });
        yi.ixParameters = void 0;
        var e2 = ke(),
            {
                IX2_RAW_DATA_IMPORTED: t2,
                IX2_SESSION_STOPPED: r2,
                IX2_PARAMETER_CHANGED: n2
            } = e2.IX2EngineActionTypes,
            i2 = (e = {}, t) => {
                switch (t.type) {
                    case t2:
                        return t.payload.ixParameters || {};
                    case r2:
                        return {};
                    case n2:
                        {
                            let {
                                key: r,
                                value: n
                            } = t.payload;
                            return e[r] = n,
                            e
                        }
                    default:
                        return e
                }
            };
        yi.ixParameters = i2
    });
    var cE = u(Ii => {
        "use strict";
        Object.defineProperty(Ii, "__esModule", {
            value: !0
        });
        Ii.default = void 0;
        var o2 = ta(),
            a2 = Af(),
            s2 = jf(),
            u2 = zf(),
            c2 = kt(),
            l2 = sE(),
            f2 = uE(),
            {
                ixElements: d2
            } = c2.IX2ElementsReducer,
            p2 = (0, o2.combineReducers)({
                ixData: a2.ixData,
                ixRequest: s2.ixRequest,
                ixSession: u2.ixSession,
                ixElements: d2,
                ixInstances: l2.ixInstances,
                ixParameters: f2.ixParameters
            });
        Ii.default = p2
    });
    var lE = u((W5, nn) => {
        function v2(e, t) {
            if (e == null) return {};
            var r = {},
                n = Object.keys(e),
                o, i;
            for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r
        }
        nn.exports = v2, nn.exports.__esModule = !0, nn.exports.default = nn.exports
    });
    var dE = u((B5, fE) => {
        var g2 = At(),
            h2 = Pe(),
            E2 = yt(),
            _2 = "[object String]";

        function m2(e) {
            return typeof e == "string" || !h2(e) && E2(e) && g2(e) == _2
        }
        fE.exports = m2
    });
    var vE = u((H5, pE) => {
        var y2 = Pa(),
            I2 = y2("length");
        pE.exports = I2
    });
    var hE = u((k5, gE) => {
        var T2 = "\\ud800-\\udfff",
            O2 = "\\u0300-\\u036f",
            b2 = "\\ufe20-\\ufe2f",
            w2 = "\\u20d0-\\u20ff",
            S2 = O2 + b2 + w2,
            A2 = "\\ufe0e\\ufe0f",
            R2 = "\\u200d",
            C2 = RegExp("[" + R2 + T2 + S2 + A2 + "]");

        function x2(e) {
            return C2.test(e)
        }
        gE.exports = x2
    });
    var wE = u((j5, bE) => {
        var _E = "\\ud800-\\udfff",
            N2 = "\\u0300-\\u036f",
            P2 = "\\ufe20-\\ufe2f",
            L2 = "\\u20d0-\\u20ff",
            q2 = N2 + P2 + L2,
            D2 = "\\ufe0e\\ufe0f",
            M2 = "[" + _E + "]",
            ns = "[" + q2 + "]",
            is = "\\ud83c[\\udffb-\\udfff]",
            F2 = "(?:" + ns + "|" + is + ")",
            mE = "[^" + _E + "]",
            yE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            IE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            G2 = "\\u200d",
            TE = F2 + "?",
            OE = "[" + D2 + "]?",
            U2 = "(?:" + G2 + "(?:" + [mE, yE, IE].join("|") + ")" + OE + TE + ")*",
            X2 = OE + TE + U2,
            V2 = "(?:" + [mE + ns + "?", ns, yE, IE, M2].join("|") + ")",
            EE = RegExp(is + "(?=" + is + ")|" + V2 + X2, "g");

        function W2(e) {
            for (var t = EE.lastIndex = 0; EE.test(e);) ++t;
            return t
        }
        bE.exports = W2
    });
    var AE = u((K5, SE) => {
        var B2 = vE(),
            H2 = hE(),
            k2 = wE();

        function j2(e) {
            return H2(e) ? k2(e) : B2(e)
        }
        SE.exports = j2
    });
    var CE = u((z5, RE) => {
        var K2 = $n(),
            z2 = Zn(),
            Y2 = Xt(),
            Q2 = dE(),
            $2 = AE(),
            Z2 = "[object Map]",
            J2 = "[object Set]";

        function eF(e) {
            if (e == null) return 0;
            if (Y2(e)) return Q2(e) ? $2(e) : e.length;
            var t = z2(e);
            return t == Z2 || t == J2 ? e.size : K2(e).length
        }
        RE.exports = eF
    });
    var NE = u((Y5, xE) => {
        var tF = "Expected a function";

        function rF(e) {
            if (typeof e != "function") throw new TypeError(tF);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        xE.exports = rF
    });
    var os = u((Q5, PE) => {
        var nF = Rt(),
            iF = function() {
                try {
                    var e = nF(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        PE.exports = iF
    });
    var as = u(($5, qE) => {
        var LE = os();

        function oF(e, t, r) {
            t == "__proto__" && LE ? LE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        qE.exports = oF
    });
    var ME = u((Z5, DE) => {
        var aF = as(),
            sF = Vn(),
            uF = Object.prototype,
            cF = uF.hasOwnProperty;

        function lF(e, t, r) {
            var n = e[t];
            (!(cF.call(e, t) && sF(n, r)) || r === void 0 && !(t in e)) && aF(e, t, r)
        }
        DE.exports = lF
    });
    var UE = u((J5, GE) => {
        var fF = ME(),
            dF = zr(),
            pF = Kn(),
            FE = vt(),
            vF = pr();

        function gF(e, t, r, n) {
            if (!FE(e)) return e;
            t = dF(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i;) {
                var c = vF(t[o]),
                    d = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
                if (o != a) {
                    var g = s[c];
                    d = n ? n(g, c, s) : void 0, d === void 0 && (d = FE(g) ? g : pF(t[o + 1]) ? [] : {})
                }
                fF(s, c, d), s = s[c]
            }
            return e
        }
        GE.exports = gF
    });
    var VE = u((eK, XE) => {
        var hF = ti(),
            EF = UE(),
            _F = zr();

        function mF(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o;) {
                var a = t[n],
                    s = hF(e, a);
                r(s, a) && EF(i, _F(a, e), s)
            }
            return i
        }
        XE.exports = mF
    });
    var BE = u((tK, WE) => {
        var yF = kn(),
            IF = Wo(),
            TF = Ea(),
            OF = ha(),
            bF = Object.getOwnPropertySymbols,
            wF = bF ? function(e) {
                for (var t = []; e;) yF(t, TF(e)), e = IF(e);
                return t
            } : OF;
        WE.exports = wF
    });
    var kE = u((rK, HE) => {
        function SF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        HE.exports = SF
    });
    var KE = u((nK, jE) => {
        var AF = vt(),
            RF = Qn(),
            CF = kE(),
            xF = Object.prototype,
            NF = xF.hasOwnProperty;

        function PF(e) {
            if (!AF(e)) return CF(e);
            var t = RF(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !NF.call(e, n)) || r.push(n);
            return r
        }
        jE.exports = PF
    });
    var YE = u((iK, zE) => {
        var LF = ma(),
            qF = KE(),
            DF = Xt();

        function MF(e) {
            return DF(e) ? LF(e, !0) : qF(e)
        }
        zE.exports = MF
    });
    var $E = u((oK, QE) => {
        var FF = ga(),
            GF = BE(),
            UF = YE();

        function XF(e) {
            return FF(e, UF, GF)
        }
        QE.exports = XF
    });
    var JE = u((aK, ZE) => {
        var VF = Na(),
            WF = Ct(),
            BF = VE(),
            HF = $E();

        function kF(e, t) {
            if (e == null) return {};
            var r = VF(HF(e), function(n) {
                return [n]
            });
            return t = WF(t), BF(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        ZE.exports = kF
    });
    var t_ = u((sK, e_) => {
        var jF = Ct(),
            KF = NE(),
            zF = JE();

        function YF(e, t) {
            return zF(e, KF(jF(t)))
        }
        e_.exports = YF
    });
    var n_ = u((uK, r_) => {
        var QF = $n(),
            $F = Zn(),
            ZF = Wr(),
            JF = Pe(),
            eG = Xt(),
            tG = jn(),
            rG = Qn(),
            nG = Yn(),
            iG = "[object Map]",
            oG = "[object Set]",
            aG = Object.prototype,
            sG = aG.hasOwnProperty;

        function uG(e) {
            if (e == null) return !0;
            if (eG(e) && (JF(e) || typeof e == "string" || typeof e.splice == "function" || tG(e) || nG(e) || ZF(e))) return !e.length;
            var t = $F(e);
            if (t == iG || t == oG) return !e.size;
            if (rG(e)) return !QF(e).length;
            for (var r in e)
                if (sG.call(e, r)) return !1;
            return !0
        }
        r_.exports = uG
    });
    var o_ = u((cK, i_) => {
        var cG = as(),
            lG = ja(),
            fG = Ct();

        function dG(e, t) {
            var r = {};
            return t = fG(t, 3), lG(e, function(n, o, i) {
                cG(r, o, t(n, o, i))
            }), r
        }
        i_.exports = dG
    });
    var s_ = u((lK, a_) => {
        function pG(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        a_.exports = pG
    });
    var c_ = u((fK, u_) => {
        var vG = ni();

        function gG(e) {
            return typeof e == "function" ? e : vG
        }
        u_.exports = gG
    });
    var f_ = u((dK, l_) => {
        var hG = s_(),
            EG = Ka(),
            _G = c_(),
            mG = Pe();

        function yG(e, t) {
            var r = mG(e) ? hG : EG;
            return r(e, _G(t))
        }
        l_.exports = yG
    });
    var p_ = u((pK, d_) => {
        var IG = it(),
            TG = function() {
                return IG.Date.now()
            };
        d_.exports = TG
    });
    var h_ = u((vK, g_) => {
        var OG = vt(),
            ss = p_(),
            v_ = ii(),
            bG = "Expected a function",
            wG = Math.max,
            SG = Math.min;

        function AG(e, t, r) {
            var n, o, i, a, s, c, d = 0,
                g = !1,
                f = !1,
                m = !0;
            if (typeof e != "function") throw new TypeError(bG);
            t = v_(t) || 0, OG(r) && (g = !!r.leading, f = "maxWait" in r, i = f ? wG(v_(r.maxWait) || 0, t) : i, m = "trailing" in r ? !!r.trailing : m);

            function p(M) {
                var H = n,
                    Q = o;
                return n = o = void 0, d = M, a = e.apply(Q, H), a
            }

            function h(M) {
                return d = M, s = setTimeout(A, t), g ? p(M) : a
            }

            function y(M) {
                var H = M - c,
                    Q = M - d,
                    J = t - H;
                return f ? SG(J, i - Q) : J
            }

            function C(M) {
                var H = M - c,
                    Q = M - d;
                return c === void 0 || H >= t || H < 0 || f && Q >= i
            }

            function A() {
                var M = ss();
                if (C(M)) return x(M);
                s = setTimeout(A, y(M))
            }

            function x(M) {
                return s = void 0, m && n ? p(M) : (n = o = void 0, a)
            }

            function w() {
                s !== void 0 && clearTimeout(s), d = 0, n = c = o = s = void 0
            }

            function L() {
                return s === void 0 ? a : x(ss())
            }

            function q() {
                var M = ss(),
                    H = C(M);
                if (n = arguments, o = this, c = M, H) {
                    if (s === void 0) return h(c);
                    if (f) return clearTimeout(s), s = setTimeout(A, t), p(c)
                }
                return s === void 0 && (s = setTimeout(A, t)), a
            }
            return q.cancel = w, q.flush = L, q
        }
        g_.exports = AG
    });
    var __ = u((gK, E_) => {
        var RG = h_(),
            CG = vt(),
            xG = "Expected a function";

        function NG(e, t, r) {
            var n = !0,
                o = !0;
            if (typeof e != "function") throw new TypeError(xG);
            return CG(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), RG(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        E_.exports = NG
    });
    var Ti = u(le => {
        "use strict";
        var PG = tt().default;
        Object.defineProperty(le, "__esModule", {
            value: !0
        });
        le.viewportWidthChanged = le.testFrameRendered = le.stopRequested = le.sessionStopped = le.sessionStarted = le.sessionInitialized = le.rawDataImported = le.previewRequested = le.playbackRequested = le.parameterChanged = le.mediaQueriesDefined = le.instanceStarted = le.instanceRemoved = le.instanceAdded = le.eventStateChanged = le.eventListenerAdded = le.elementStateChanged = le.clearRequested = le.animationFrameChanged = le.actionListPlaybackChanged = void 0;
        var m_ = PG(ir()),
            y_ = ke(),
            LG = kt(),
            {
                IX2_RAW_DATA_IMPORTED: qG,
                IX2_SESSION_INITIALIZED: DG,
                IX2_SESSION_STARTED: MG,
                IX2_SESSION_STOPPED: FG,
                IX2_PREVIEW_REQUESTED: GG,
                IX2_PLAYBACK_REQUESTED: UG,
                IX2_STOP_REQUESTED: XG,
                IX2_CLEAR_REQUESTED: VG,
                IX2_EVENT_LISTENER_ADDED: WG,
                IX2_TEST_FRAME_RENDERED: BG,
                IX2_EVENT_STATE_CHANGED: HG,
                IX2_ANIMATION_FRAME_CHANGED: kG,
                IX2_PARAMETER_CHANGED: jG,
                IX2_INSTANCE_ADDED: KG,
                IX2_INSTANCE_STARTED: zG,
                IX2_INSTANCE_REMOVED: YG,
                IX2_ELEMENT_STATE_CHANGED: QG,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: $G,
                IX2_VIEWPORT_WIDTH_CHANGED: ZG,
                IX2_MEDIA_QUERIES_DEFINED: JG
            } = y_.IX2EngineActionTypes,
            {
                reifyState: eU
            } = LG.IX2VanillaUtils,
            tU = e => ({
                type: qG,
                payload: (0, m_.default)({}, eU(e))
            });
        le.rawDataImported = tU;
        var rU = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: DG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        le.sessionInitialized = rU;
        var nU = () => ({
            type: MG
        });
        le.sessionStarted = nU;
        var iU = () => ({
            type: FG
        });
        le.sessionStopped = iU;
        var oU = ({
            rawData: e,
            defer: t
        }) => ({
            type: GG,
            payload: {
                defer: t,
                rawData: e
            }
        });
        le.previewRequested = oU;
        var aU = ({
            actionTypeId: e = y_.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: o,
            immediate: i,
            testManual: a,
            verbose: s,
            rawData: c
        }) => ({
            type: UG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: c
            }
        });
        le.playbackRequested = aU;
        var sU = e => ({
            type: XG,
            payload: {
                actionListId: e
            }
        });
        le.stopRequested = sU;
        var uU = () => ({
            type: VG
        });
        le.clearRequested = uU;
        var cU = (e, t) => ({
            type: WG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        le.eventListenerAdded = cU;
        var lU = (e = 1) => ({
            type: BG,
            payload: {
                step: e
            }
        });
        le.testFrameRendered = lU;
        var fU = (e, t) => ({
            type: HG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        le.eventStateChanged = fU;
        var dU = (e, t) => ({
            type: kG,
            payload: {
                now: e,
                parameters: t
            }
        });
        le.animationFrameChanged = dU;
        var pU = (e, t) => ({
            type: jG,
            payload: {
                key: e,
                value: t
            }
        });
        le.parameterChanged = pU;
        var vU = e => ({
            type: KG,
            payload: (0, m_.default)({}, e)
        });
        le.instanceAdded = vU;
        var gU = (e, t) => ({
            type: zG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        le.instanceStarted = gU;
        var hU = e => ({
            type: YG,
            payload: {
                instanceId: e
            }
        });
        le.instanceRemoved = hU;
        var EU = (e, t, r, n) => ({
            type: QG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        le.elementStateChanged = EU;
        var _U = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: $G,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        le.actionListPlaybackChanged = _U;
        var mU = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: ZG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        le.viewportWidthChanged = mU;
        var yU = () => ({
            type: JG
        });
        le.mediaQueriesDefined = yU
    });
    var O_ = u(De => {
        "use strict";
        Object.defineProperty(De, "__esModule", {
            value: !0
        });
        De.elementContains = PU;
        De.getChildElements = qU;
        De.getClosestElement = void 0;
        De.getProperty = AU;
        De.getQuerySelector = CU;
        De.getRefType = FU;
        De.getSiblingElements = DU;
        De.getStyle = SU;
        De.getValidDocument = xU;
        De.isSiblingNode = LU;
        De.matchSelector = RU;
        De.queryDocument = NU;
        De.setStyle = wU;
        var IU = kt(),
            TU = ke(),
            {
                ELEMENT_MATCHES: us
            } = IU.IX2BrowserSupport,
            {
                IX2_ID_DELIMITER: I_,
                HTML_ELEMENT: OU,
                PLAIN_OBJECT: bU,
                WF_PAGE: T_
            } = TU.IX2EngineConstants;

        function wU(e, t, r) {
            e.style[t] = r
        }

        function SU(e, t) {
            return e.style[t]
        }

        function AU(e, t) {
            return e[t]
        }

        function RU(e) {
            return t => t[us](e)
        }

        function CU({
            id: e,
            selector: t
        }) {
            if (e) {
                let r = e;
                if (e.indexOf(I_) !== -1) {
                    let n = e.split(I_),
                        o = n[0];
                    if (r = n[1], o !== document.documentElement.getAttribute(T_)) return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }

        function xU(e) {
            return e == null || e === document.documentElement.getAttribute(T_) ? document : null
        }

        function NU(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }

        function PU(e, t) {
            return e.contains(t)
        }

        function LU(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }

        function qU(e) {
            let t = [];
            for (let r = 0, {
                    length: n
                } = e || []; r < n; r++) {
                let {
                    children: o
                } = e[r], {
                    length: i
                } = o;
                if (i)
                    for (let a = 0; a < i; a++) t.push(o[a])
            }
            return t
        }

        function DU(e = []) {
            let t = [],
                r = [];
            for (let n = 0, {
                    length: o
                } = e; n < o; n++) {
                let {
                    parentNode: i
                } = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1) continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
            }
            return t
        }
        var MU = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[us] && r[us](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        };
        De.getClosestElement = MU;

        function FU(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? OU : bU : null
        }
    });
    var cs = u((_K, w_) => {
        var GU = vt(),
            b_ = Object.create,
            UU = function() {
                function e() {}
                return function(t) {
                    if (!GU(t)) return {};
                    if (b_) return b_(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        w_.exports = UU
    });
    var Oi = u((mK, S_) => {
        function XU() {}
        S_.exports = XU
    });
    var wi = u((yK, A_) => {
        var VU = cs(),
            WU = Oi();

        function bi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        bi.prototype = VU(WU.prototype);
        bi.prototype.constructor = bi;
        A_.exports = bi
    });
    var N_ = u((IK, x_) => {
        var R_ = er(),
            BU = Wr(),
            HU = Pe(),
            C_ = R_ ? R_.isConcatSpreadable : void 0;

        function kU(e) {
            return HU(e) || BU(e) || !!(C_ && e && e[C_])
        }
        x_.exports = kU
    });
    var q_ = u((TK, L_) => {
        var jU = kn(),
            KU = N_();

        function P_(e, t, r, n, o) {
            var i = -1,
                a = e.length;
            for (r || (r = KU), o || (o = []); ++i < a;) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? P_(s, t - 1, r, n, o) : jU(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        L_.exports = P_
    });
    var M_ = u((OK, D_) => {
        var zU = q_();

        function YU(e) {
            var t = e == null ? 0 : e.length;
            return t ? zU(e, 1) : []
        }
        D_.exports = YU
    });
    var G_ = u((bK, F_) => {
        function QU(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        F_.exports = QU
    });
    var V_ = u((wK, X_) => {
        var $U = G_(),
            U_ = Math.max;

        function ZU(e, t, r) {
            return t = U_(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, o = -1, i = U_(n.length - t, 0), a = Array(i); ++o < i;) a[o] = n[t + o];
                    o = -1;
                    for (var s = Array(t + 1); ++o < t;) s[o] = n[o];
                    return s[t] = r(a), $U(e, this, s)
                }
        }
        X_.exports = ZU
    });
    var B_ = u((SK, W_) => {
        function JU(e) {
            return function() {
                return e
            }
        }
        W_.exports = JU
    });
    var j_ = u((AK, k_) => {
        var eX = B_(),
            H_ = os(),
            tX = ni(),
            rX = H_ ? function(e, t) {
                return H_(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: eX(t),
                    writable: !0
                })
            } : tX;
        k_.exports = rX
    });
    var z_ = u((RK, K_) => {
        var nX = 800,
            iX = 16,
            oX = Date.now;

        function aX(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = oX(),
                    o = iX - (n - r);
                if (r = n, o > 0) {
                    if (++t >= nX) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        K_.exports = aX
    });
    var Q_ = u((CK, Y_) => {
        var sX = j_(),
            uX = z_(),
            cX = uX(sX);
        Y_.exports = cX
    });
    var Z_ = u((xK, $_) => {
        var lX = M_(),
            fX = V_(),
            dX = Q_();

        function pX(e) {
            return dX(fX(e, void 0, lX), e + "")
        }
        $_.exports = pX
    });
    var tm = u((NK, em) => {
        var J_ = ya(),
            vX = J_ && new J_;
        em.exports = vX
    });
    var nm = u((PK, rm) => {
        function gX() {}
        rm.exports = gX
    });
    var ls = u((LK, om) => {
        var im = tm(),
            hX = nm(),
            EX = im ? function(e) {
                return im.get(e)
            } : hX;
        om.exports = EX
    });
    var sm = u((qK, am) => {
        var _X = {};
        am.exports = _X
    });
    var fs = u((DK, cm) => {
        var um = sm(),
            mX = Object.prototype,
            yX = mX.hasOwnProperty;

        function IX(e) {
            for (var t = e.name + "", r = um[t], n = yX.call(um, t) ? r.length : 0; n--;) {
                var o = r[n],
                    i = o.func;
                if (i == null || i == e) return o.name
            }
            return t
        }
        cm.exports = IX
    });
    var Ai = u((MK, lm) => {
        var TX = cs(),
            OX = Oi(),
            bX = 4294967295;

        function Si(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = bX, this.__views__ = []
        }
        Si.prototype = TX(OX.prototype);
        Si.prototype.constructor = Si;
        lm.exports = Si
    });
    var dm = u((FK, fm) => {
        function wX(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        fm.exports = wX
    });
    var vm = u((GK, pm) => {
        var SX = Ai(),
            AX = wi(),
            RX = dm();

        function CX(e) {
            if (e instanceof SX) return e.clone();
            var t = new AX(e.__wrapped__, e.__chain__);
            return t.__actions__ = RX(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        pm.exports = CX
    });
    var Em = u((UK, hm) => {
        var xX = Ai(),
            gm = wi(),
            NX = Oi(),
            PX = Pe(),
            LX = yt(),
            qX = vm(),
            DX = Object.prototype,
            MX = DX.hasOwnProperty;

        function Ri(e) {
            if (LX(e) && !PX(e) && !(e instanceof xX)) {
                if (e instanceof gm) return e;
                if (MX.call(e, "__wrapped__")) return qX(e)
            }
            return new gm(e)
        }
        Ri.prototype = NX.prototype;
        Ri.prototype.constructor = Ri;
        hm.exports = Ri
    });
    var mm = u((XK, _m) => {
        var FX = Ai(),
            GX = ls(),
            UX = fs(),
            XX = Em();

        function VX(e) {
            var t = UX(e),
                r = XX[t];
            if (typeof r != "function" || !(t in FX.prototype)) return !1;
            if (e === r) return !0;
            var n = GX(r);
            return !!n && e === n[0]
        }
        _m.exports = VX
    });
    var Om = u((VK, Tm) => {
        var ym = wi(),
            WX = Z_(),
            BX = ls(),
            ds = fs(),
            HX = Pe(),
            Im = mm(),
            kX = "Expected a function",
            jX = 8,
            KX = 32,
            zX = 128,
            YX = 256;

        function QX(e) {
            return WX(function(t) {
                var r = t.length,
                    n = r,
                    o = ym.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var i = t[n];
                    if (typeof i != "function") throw new TypeError(kX);
                    if (o && !a && ds(i) == "wrapper") var a = new ym([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    i = t[n];
                    var s = ds(i),
                        c = s == "wrapper" ? BX(i) : void 0;
                    c && Im(c[0]) && c[1] == (zX | jX | KX | YX) && !c[4].length && c[9] == 1 ? a = a[ds(c[0])].apply(a, c[3]) : a = i.length == 1 && Im(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var d = arguments,
                        g = d[0];
                    if (a && d.length == 1 && HX(g)) return a.plant(g).value();
                    for (var f = 0, m = r ? t[f].apply(this, d) : g; ++f < r;) m = t[f].call(this, m);
                    return m
                }
            })
        }
        Tm.exports = QX
    });
    var wm = u((WK, bm) => {
        var $X = Om(),
            ZX = $X();
        bm.exports = ZX
    });
    var Am = u((BK, Sm) => {
        function JX(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Sm.exports = JX
    });
    var Cm = u((HK, Rm) => {
        var eV = Am(),
            ps = ii();

        function tV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ps(r), r = r === r ? r : 0), t !== void 0 && (t = ps(t), t = t === t ? t : 0), eV(ps(e), t, r)
        }
        Rm.exports = tV
    });
    var Km = u(Li => {
        "use strict";
        var Pi = tt().default;
        Object.defineProperty(Li, "__esModule", {
            value: !0
        });
        Li.default = void 0;
        var Ye = Pi(ir()),
            rV = Pi(wm()),
            nV = Pi(ri()),
            iV = Pi(Cm()),
            jt = ke(),
            vs = _s(),
            Ci = Ti(),
            oV = kt(),
            {
                MOUSE_CLICK: aV,
                MOUSE_SECOND_CLICK: sV,
                MOUSE_DOWN: uV,
                MOUSE_UP: cV,
                MOUSE_OVER: lV,
                MOUSE_OUT: fV,
                DROPDOWN_CLOSE: dV,
                DROPDOWN_OPEN: pV,
                SLIDER_ACTIVE: vV,
                SLIDER_INACTIVE: gV,
                TAB_ACTIVE: hV,
                TAB_INACTIVE: EV,
                NAVBAR_CLOSE: _V,
                NAVBAR_OPEN: mV,
                MOUSE_MOVE: yV,
                PAGE_SCROLL_DOWN: Gm,
                SCROLL_INTO_VIEW: Um,
                SCROLL_OUT_OF_VIEW: IV,
                PAGE_SCROLL_UP: TV,
                SCROLLING_IN_VIEW: OV,
                PAGE_FINISH: Xm,
                ECOMMERCE_CART_CLOSE: bV,
                ECOMMERCE_CART_OPEN: wV,
                PAGE_START: Vm,
                PAGE_SCROLL: SV
            } = jt.EventTypeConsts,
            gs = "COMPONENT_ACTIVE",
            Wm = "COMPONENT_INACTIVE",
            {
                COLON_DELIMITER: xm
            } = jt.IX2EngineConstants,
            {
                getNamespacedParameterId: Nm
            } = oV.IX2VanillaUtils,
            Bm = e => t => typeof t == "object" && e(t) ? !0 : t,
            an = Bm(({
                element: e,
                nativeEvent: t
            }) => e === t.target),
            AV = Bm(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)),
            _t = (0, rV.default)([an, AV]),
            Hm = (e, t) => {
                if (t) {
                    let {
                        ixData: r
                    } = e.getState(), {
                        events: n
                    } = r, o = n[t];
                    if (o && !CV[o.eventTypeId]) return o
                }
                return null
            },
            RV = ({
                store: e,
                event: t
            }) => {
                let {
                    action: r
                } = t, {
                    autoStopEventId: n
                } = r.config;
                return !!Hm(e, n)
            },
            Ke = ({
                store: e,
                event: t,
                element: r,
                eventStateKey: n
            }, o) => {
                let {
                    action: i,
                    id: a
                } = t, {
                    actionListId: s,
                    autoStopEventId: c
                } = i.config, d = Hm(e, c);
                return d && (0, vs.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: r,
                    eventStateKey: c + xm + n.split(xm)[1],
                    actionListId: (0, nV.default)(d, "action.config.actionListId")
                }), (0, vs.stopActionGroup)({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), (0, vs.startActionGroup)({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), o
            },
            ot = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
            sn = {
                handler: ot(_t, Ke)
            },
            km = (0, Ye.default)({}, sn, {
                types: [gs, Wm].join(" ")
            }),
            hs = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }],
            Pm = "mouseover mouseout",
            Es = {
                types: hs
            },
            CV = {
                PAGE_START: Vm,
                PAGE_FINISH: Xm
            },
            on = (() => {
                let e = window.pageXOffset !== void 0,
                    r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                    scrollTop: e ? window.pageYOffset : r.scrollTop,
                    stiffScrollTop: (0, iV.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                    scrollWidth: r.scrollWidth,
                    scrollHeight: r.scrollHeight,
                    clientWidth: r.clientWidth,
                    clientHeight: r.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(),
            xV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
            NV = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: r,
                    target: n,
                    relatedTarget: o
                } = t, i = e.contains(n);
                if (r === "mouseover" && i) return !0;
                let a = e.contains(o);
                return !!(r === "mouseout" && i && a)
            },
            PV = e => {
                let {
                    element: t,
                    event: {
                        config: r
                    }
                } = e, {
                    clientWidth: n,
                    clientHeight: o
                } = on(), i = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
                return xV(t.getBoundingClientRect(), {
                    left: 0,
                    top: c,
                    right: n,
                    bottom: o - c
                })
            },
            jm = e => (t, r) => {
                let {
                    type: n
                } = t.nativeEvent, o = [gs, Wm].indexOf(n) !== -1 ? n === gs : r.isActive, i = (0, Ye.default)({}, r, {
                    isActive: o
                });
                return (!r || i.isActive !== r.isActive) && e(t, i) || i
            },
            Lm = e => (t, r) => {
                let n = {
                    elementHovered: NV(t)
                };
                return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
            },
            LV = e => (t, r) => {
                let n = (0, Ye.default)({}, r, {
                    elementVisible: PV(t)
                });
                return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
            },
            qm = e => (t, r = {}) => {
                let {
                    stiffScrollTop: n,
                    scrollHeight: o,
                    innerHeight: i
                } = on(), {
                    event: {
                        config: a,
                        eventTypeId: s
                    }
                } = t, {
                    scrollOffsetValue: c,
                    scrollOffsetUnit: d
                } = a, g = d === "PX", f = o - i, m = Number((n / f).toFixed(2));
                if (r && r.percentTop === m) return r;
                let p = (g ? c : i * (c || 0) / 100) / f,
                    h, y, C = 0;
                r && (h = m > r.percentTop, y = r.scrollingDown !== h, C = y ? m : r.anchorTop);
                let A = s === Gm ? m >= C + p : m <= C - p,
                    x = (0, Ye.default)({}, r, {
                        percentTop: m,
                        inBounds: A,
                        anchorTop: C,
                        scrollingDown: h
                    });
                return r && A && (y || x.inBounds !== r.inBounds) && e(t, x) || x
            },
            qV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
            DV = e => (t, r) => {
                let n = {
                    finished: document.readyState === "complete"
                };
                return n.finished && !(r && r.finshed) && e(t), n
            },
            MV = e => (t, r) => {
                let n = {
                    started: !0
                };
                return r || e(t), n
            },
            Dm = e => (t, r = {
                clickCount: 0
            }) => {
                let n = {
                    clickCount: r.clickCount % 2 + 1
                };
                return n.clickCount !== r.clickCount && e(t, n) || n
            },
            xi = (e = !0) => (0, Ye.default)({}, km, {
                handler: ot(e ? _t : an, jm((t, r) => r.isActive ? sn.handler(t, r) : r))
            }),
            Ni = (e = !0) => (0, Ye.default)({}, km, {
                handler: ot(e ? _t : an, jm((t, r) => r.isActive ? r : sn.handler(t, r)))
            }),
            Mm = (0, Ye.default)({}, Es, {
                handler: LV((e, t) => {
                    let {
                        elementVisible: r
                    } = t, {
                        event: n,
                        store: o
                    } = e, {
                        ixData: i
                    } = o.getState(), {
                        events: a
                    } = i;
                    return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Um === r ? (Ke(e), (0, Ye.default)({}, t, {
                        triggered: !0
                    })) : t
                })
            }),
            Fm = .05,
            FV = {
                [vV]: xi(),
                [gV]: Ni(),
                [pV]: xi(),
                [dV]: Ni(),
                [mV]: xi(!1),
                [_V]: Ni(!1),
                [hV]: xi(),
                [EV]: Ni(),
                [wV]: {
                    types: "ecommerce-cart-open",
                    handler: ot(_t, Ke)
                },
                [bV]: {
                    types: "ecommerce-cart-close",
                    handler: ot(_t, Ke)
                },
                [aV]: {
                    types: "click",
                    handler: ot(_t, Dm((e, {
                        clickCount: t
                    }) => {
                        RV(e) ? t === 1 && Ke(e) : Ke(e)
                    }))
                },
                [sV]: {
                    types: "click",
                    handler: ot(_t, Dm((e, {
                        clickCount: t
                    }) => {
                        t === 2 && Ke(e)
                    }))
                },
                [uV]: (0, Ye.default)({}, sn, {
                    types: "mousedown"
                }),
                [cV]: (0, Ye.default)({}, sn, {
                    types: "mouseup"
                }),
                [lV]: {
                    types: Pm,
                    handler: ot(_t, Lm((e, t) => {
                        t.elementHovered && Ke(e)
                    }))
                },
                [fV]: {
                    types: Pm,
                    handler: ot(_t, Lm((e, t) => {
                        t.elementHovered || Ke(e)
                    }))
                },
                [yV]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: r,
                        nativeEvent: n,
                        eventStateKey: o
                    }, i = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: a,
                            selectedAxis: s,
                            continuousParameterGroupId: c,
                            reverse: d,
                            restingState: g = 0
                        } = r, {
                            clientX: f = i.clientX,
                            clientY: m = i.clientY,
                            pageX: p = i.pageX,
                            pageY: h = i.pageY
                        } = n, y = s === "X_AXIS", C = n.type === "mouseout", A = g / 100, x = c, w = !1;
                        switch (a) {
                            case jt.EventBasedOn.VIEWPORT:
                                {
                                    A = y ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                                    break
                                }
                            case jt.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: L,
                                        scrollTop: q,
                                        scrollWidth: M,
                                        scrollHeight: H
                                    } = on();A = y ? Math.min(L + p, M) / M : Math.min(q + h, H) / H;
                                    break
                                }
                            case jt.EventBasedOn.ELEMENT:
                            default:
                                {
                                    x = Nm(o, c);
                                    let L = n.type.indexOf("mouse") === 0;
                                    if (L && _t({
                                            element: t,
                                            nativeEvent: n
                                        }) !== !0) break;
                                    let q = t.getBoundingClientRect(),
                                        {
                                            left: M,
                                            top: H,
                                            width: Q,
                                            height: J
                                        } = q;
                                    if (!L && !qV({
                                            left: f,
                                            top: m
                                        }, q)) break;w = !0,
                                    A = y ? (f - M) / Q : (m - H) / J;
                                    break
                                }
                        }
                        return C && (A > 1 - Fm || A < Fm) && (A = Math.round(A)), (a !== jt.EventBasedOn.ELEMENT || w || w !== i.elementHovered) && (A = d ? 1 - A : A, e.dispatch((0, Ci.parameterChanged)(x, A))), {
                            elementHovered: w,
                            clientX: f,
                            clientY: m,
                            pageX: p,
                            pageY: h
                        }
                    }
                },
                [SV]: {
                    types: hs,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: r,
                            reverse: n
                        } = t, {
                            scrollTop: o,
                            scrollHeight: i,
                            clientHeight: a
                        } = on(), s = o / (i - a);
                        s = n ? 1 - s : s, e.dispatch((0, Ci.parameterChanged)(r, s))
                    }
                },
                [OV]: {
                    types: hs,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: r,
                        eventStateKey: n
                    }, o = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: i,
                            scrollTop: a,
                            scrollWidth: s,
                            scrollHeight: c,
                            clientHeight: d
                        } = on(), {
                            basedOn: g,
                            selectedAxis: f,
                            continuousParameterGroupId: m,
                            startsEntering: p,
                            startsExiting: h,
                            addEndOffset: y,
                            addStartOffset: C,
                            addOffsetValue: A = 0,
                            endOffsetValue: x = 0
                        } = r, w = f === "X_AXIS";
                        if (g === jt.EventBasedOn.VIEWPORT) {
                            let L = w ? i / s : a / c;
                            return L !== o.scrollPercent && t.dispatch((0, Ci.parameterChanged)(m, L)), {
                                scrollPercent: L
                            }
                        } else {
                            let L = Nm(n, m),
                                q = e.getBoundingClientRect(),
                                M = (C ? A : 0) / 100,
                                H = (y ? x : 0) / 100;
                            M = p ? M : 1 - M, H = h ? H : 1 - H;
                            let Q = q.top + Math.min(q.height * M, d),
                                oe = q.top + q.height * H - Q,
                                re = Math.min(d + oe, c),
                                O = Math.min(Math.max(0, d - Q), re) / re;
                            return O !== o.scrollPercent && t.dispatch((0, Ci.parameterChanged)(L, O)), {
                                scrollPercent: O
                            }
                        }
                    }
                },
                [Um]: Mm,
                [IV]: Mm,
                [Gm]: (0, Ye.default)({}, Es, {
                    handler: qm((e, t) => {
                        t.scrollingDown && Ke(e)
                    })
                }),
                [TV]: (0, Ye.default)({}, Es, {
                    handler: qm((e, t) => {
                        t.scrollingDown || Ke(e)
                    })
                }),
                [Xm]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: ot(an, DV(Ke))
                },
                [Vm]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: ot(an, MV(Ke))
                }
            };
        Li.default = FV
    });
    var _s = u(Lt => {
        "use strict";
        var st = tt().default,
            GV = Mt().default;
        Object.defineProperty(Lt, "__esModule", {
            value: !0
        });
        Lt.observeRequests = vW;
        Lt.startActionGroup = bs;
        Lt.startEngine = Gi;
        Lt.stopActionGroup = Os;
        Lt.stopAllActionGroups = ry;
        Lt.stopEngine = Ui;
        var UV = st(ir()),
            XV = st(lE()),
            VV = st(Ma()),
            Pt = st(ri()),
            WV = st(CE()),
            BV = st(t_()),
            HV = st(n_()),
            kV = st(o_()),
            un = st(f_()),
            jV = st(__()),
            at = ke(),
            Qm = kt(),
            be = Ti(),
            Re = GV(O_()),
            KV = st(Km()),
            zV = ["store", "computedStyle"],
            YV = Object.keys(at.QuickEffectIds),
            ms = e => YV.includes(e),
            {
                COLON_DELIMITER: ys,
                BOUNDARY_SELECTOR: qi,
                HTML_ELEMENT: $m,
                RENDER_GENERAL: QV,
                W_MOD_IX: zm
            } = at.IX2EngineConstants,
            {
                getAffectedElements: Di,
                getElementId: $V,
                getDestinationValues: Is,
                observeStore: Kt,
                getInstanceId: ZV,
                renderHTMLElement: JV,
                clearAllStyles: Zm,
                getMaxDurationItemIndex: eW,
                getComputedStyle: tW,
                getInstanceOrigin: rW,
                reduceListToGroup: nW,
                shouldNamespaceEventParameter: iW,
                getNamespacedParameterId: oW,
                shouldAllowMediaQuery: Mi,
                cleanupHTMLElement: aW,
                clearObjectCache: sW,
                stringifyTarget: uW,
                mediaQueriesEqual: cW,
                shallowEqual: lW
            } = Qm.IX2VanillaUtils,
            {
                isPluginType: Fi,
                createPluginInstance: Ts,
                getPluginDuration: fW
            } = Qm.IX2VanillaPlugins,
            Ym = navigator.userAgent,
            dW = Ym.match(/iPad/i) || Ym.match(/iPhone/),
            pW = 12;

        function vW(e) {
            Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.preview,
                onChange: EW
            }), Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.playback,
                onChange: _W
            }), Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.stop,
                onChange: mW
            }), Kt({
                store: e,
                select: ({
                    ixRequest: t
                }) => t.clear,
                onChange: yW
            })
        }

        function gW(e) {
            Kt({
                store: e,
                select: ({
                    ixSession: t
                }) => t.mediaQueryKey,
                onChange: () => {
                    Ui(e), Zm({
                        store: e,
                        elementApi: Re
                    }), Gi({
                        store: e,
                        allowEvents: !0
                    }), Jm()
                }
            })
        }

        function hW(e, t) {
            let r = Kt({
                store: e,
                select: ({
                    ixSession: n
                }) => n.tick,
                onChange: n => {
                    t(n), r()
                }
            })
        }

        function EW({
            rawData: e,
            defer: t
        }, r) {
            let n = () => {
                Gi({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }), Jm()
            };
            t ? setTimeout(n, 0) : n()
        }

        function Jm() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }

        function _W(e, t) {
            let {
                actionTypeId: r,
                actionListId: n,
                actionItemId: o,
                eventId: i,
                allowEvents: a,
                immediate: s,
                testManual: c,
                verbose: d = !0
            } = e, {
                rawData: g
            } = e;
            if (n && o && g && s) {
                let f = g.actionLists[n];
                f && (g = nW({
                    actionList: f,
                    actionItemId: o,
                    rawData: g
                }))
            }
            if (Gi({
                    store: t,
                    rawData: g,
                    allowEvents: a,
                    testManual: c
                }), n && r === at.ActionTypeConsts.GENERAL_START_ACTION || ms(r)) {
                Os({
                    store: t,
                    actionListId: n
                }), ty({
                    store: t,
                    actionListId: n,
                    eventId: i
                });
                let f = bs({
                    store: t,
                    eventId: i,
                    actionListId: n,
                    immediate: s,
                    verbose: d
                });
                d && f && t.dispatch((0, be.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }

        function mW({
            actionListId: e
        }, t) {
            e ? Os({
                store: t,
                actionListId: e
            }) : ry({
                store: t
            }), Ui(t)
        }

        function yW(e, t) {
            Ui(t), Zm({
                store: t,
                elementApi: Re
            })
        }

        function Gi({
            store: e,
            rawData: t,
            allowEvents: r,
            testManual: n
        }) {
            let {
                ixSession: o
            } = e.getState();
            t && e.dispatch((0, be.rawDataImported)(t)), o.active || (e.dispatch((0, be.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(qi),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })), r && (SW(e), IW(), e.getState().ixSession.hasDefinedMediaQueries && gW(e)), e.dispatch((0, be.sessionStarted)()), TW(e, n))
        }

        function IW() {
            let {
                documentElement: e
            } = document;
            e.className.indexOf(zm) === -1 && (e.className += ` ${zm}`)
        }

        function TW(e, t) {
            let r = n => {
                let {
                    ixSession: o,
                    ixParameters: i
                } = e.getState();
                o.active && (e.dispatch((0, be.animationFrameChanged)(n, i)), t ? hW(e, r) : requestAnimationFrame(r))
            };
            r(window.performance.now())
        }

        function Ui(e) {
            let {
                ixSession: t
            } = e.getState();
            if (t.active) {
                let {
                    eventListeners: r
                } = t;
                r.forEach(OW), sW(), e.dispatch((0, be.sessionStopped)())
            }
        }

        function OW({
            target: e,
            listenerParams: t
        }) {
            e.removeEventListener.apply(e, t)
        }

        function bW({
            store: e,
            eventStateKey: t,
            eventTarget: r,
            eventId: n,
            eventConfig: o,
            actionListId: i,
            parameterGroup: a,
            smoothing: s,
            restingValue: c
        }) {
            let {
                ixData: d,
                ixSession: g
            } = e.getState(), {
                events: f
            } = d, m = f[n], {
                eventTypeId: p
            } = m, h = {}, y = {}, C = [], {
                continuousActionGroups: A
            } = a, {
                id: x
            } = a;
            iW(p, o) && (x = oW(t, x));
            let w = g.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
            A.forEach(L => {
                let {
                    keyframe: q,
                    actionItems: M
                } = L;
                M.forEach(H => {
                    let {
                        actionTypeId: Q
                    } = H, {
                        target: J
                    } = H.config;
                    if (!J) return;
                    let oe = J.boundaryMode ? w : null,
                        re = uW(J) + ys + Q;
                    if (y[re] = wW(y[re], q, H), !h[re]) {
                        h[re] = !0;
                        let {
                            config: U
                        } = H;
                        Di({
                            config: U,
                            event: m,
                            eventTarget: r,
                            elementRoot: oe,
                            elementApi: Re
                        }).forEach(O => {
                            C.push({
                                element: O,
                                key: re
                            })
                        })
                    }
                })
            }), C.forEach(({
                element: L,
                key: q
            }) => {
                let M = y[q],
                    H = (0, Pt.default)(M, "[0].actionItems[0]", {}),
                    {
                        actionTypeId: Q
                    } = H,
                    J = Fi(Q) ? Ts(Q)(L, H) : null,
                    oe = Is({
                        element: L,
                        actionItem: H,
                        elementApi: Re
                    }, J);
                ws({
                    store: e,
                    element: L,
                    eventId: n,
                    actionListId: i,
                    actionItem: H,
                    destination: oe,
                    continuous: !0,
                    parameterId: x,
                    actionGroups: M,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: J
                })
            })
        }

        function wW(e = [], t, r) {
            let n = [...e],
                o;
            return n.some((i, a) => i.keyframe === t ? (o = a, !0) : !1), o == null && (o = n.length, n.push({
                keyframe: t,
                actionItems: []
            })), n[o].actionItems.push(r), n
        }

        function SW(e) {
            let {
                ixData: t
            } = e.getState(), {
                eventTypeMap: r
            } = t;
            ey(e), (0, un.default)(r, (o, i) => {
                let a = KV.default[i];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return
                }
                PW({
                    logic: a,
                    store: e,
                    events: o
                })
            });
            let {
                ixSession: n
            } = e.getState();
            n.eventListeners.length && RW(e)
        }
        var AW = ["resize", "orientationchange"];

        function RW(e) {
            let t = () => {
                ey(e)
            };
            AW.forEach(r => {
                window.addEventListener(r, t), e.dispatch((0, be.eventListenerAdded)(window, [r, t]))
            }), t()
        }

        function ey(e) {
            let {
                ixSession: t,
                ixData: r
            } = e.getState(), n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {
                    mediaQueries: o
                } = r;
                e.dispatch((0, be.viewportWidthChanged)({
                    width: n,
                    mediaQueries: o
                }))
            }
        }
        var CW = (e, t) => (0, BV.default)((0, kV.default)(e, t), HV.default),
            xW = (e, t) => {
                (0, un.default)(e, (r, n) => {
                    r.forEach((o, i) => {
                        let a = n + ys + i;
                        t(o, n, a)
                    })
                })
            },
            NW = e => {
                let t = {
                    target: e.target,
                    targets: e.targets
                };
                return Di({
                    config: t,
                    elementApi: Re
                })
            };

        function PW({
            logic: e,
            store: t,
            events: r
        }) {
            LW(r);
            let {
                types: n,
                handler: o
            } = e, {
                ixData: i
            } = t.getState(), {
                actionLists: a
            } = i, s = CW(r, NW);
            if (!(0, WV.default)(s)) return;
            (0, un.default)(s, (f, m) => {
                let p = r[m],
                    {
                        action: h,
                        id: y,
                        mediaQueries: C = i.mediaQueryKeys
                    } = p,
                    {
                        actionListId: A
                    } = h.config;
                cW(C, i.mediaQueryKeys) || t.dispatch((0, be.mediaQueriesDefined)()), h.actionTypeId === at.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(p.config) ? p.config : [p.config]).forEach(w => {
                    let {
                        continuousParameterGroupId: L
                    } = w, q = (0, Pt.default)(a, `${A}.continuousParameterGroups`, []), M = (0, VV.default)(q, ({
                        id: J
                    }) => J === L), H = (w.smoothing || 0) / 100, Q = (w.restingState || 0) / 100;
                    M && f.forEach((J, oe) => {
                        let re = y + ys + oe;
                        bW({
                            store: t,
                            eventStateKey: re,
                            eventTarget: J,
                            eventId: y,
                            eventConfig: w,
                            actionListId: A,
                            parameterGroup: M,
                            smoothing: H,
                            restingValue: Q
                        })
                    })
                }), (h.actionTypeId === at.ActionTypeConsts.GENERAL_START_ACTION || ms(h.actionTypeId)) && ty({
                    store: t,
                    actionListId: A,
                    eventId: y
                })
            });
            let c = f => {
                    let {
                        ixSession: m
                    } = t.getState();
                    xW(s, (p, h, y) => {
                        let C = r[h],
                            A = m.eventState[y],
                            {
                                action: x,
                                mediaQueries: w = i.mediaQueryKeys
                            } = C;
                        if (!Mi(w, m.mediaQueryKey)) return;
                        let L = (q = {}) => {
                            let M = o({
                                store: t,
                                element: p,
                                event: C,
                                eventConfig: q,
                                nativeEvent: f,
                                eventStateKey: y
                            }, A);
                            lW(M, A) || t.dispatch((0, be.eventStateChanged)(y, M))
                        };
                        x.actionTypeId === at.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(L) : L()
                    })
                },
                d = (0, jV.default)(c, pW),
                g = ({
                    target: f = document,
                    types: m,
                    throttle: p
                }) => {
                    m.split(" ").filter(Boolean).forEach(h => {
                        let y = p ? d : c;
                        f.addEventListener(h, y), t.dispatch((0, be.eventListenerAdded)(f, [h, y]))
                    })
                };
            Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e)
        }

        function LW(e) {
            if (!dW) return;
            let t = {},
                r = "";
            for (let n in e) {
                let {
                    eventTypeId: o,
                    target: i
                } = e[n], a = Re.getQuerySelector(i);
                t[a] || (o === at.EventTypeConsts.MOUSE_CLICK || o === at.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r, document.body.appendChild(n)
            }
        }

        function ty({
            store: e,
            actionListId: t,
            eventId: r
        }) {
            let {
                ixData: n,
                ixSession: o
            } = e.getState(), {
                actionLists: i,
                events: a
            } = n, s = a[r], c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let d = (0, Pt.default)(c, "actionItemGroups[0].actionItems", []),
                    g = (0, Pt.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!Mi(g, o.mediaQueryKey)) return;
                d.forEach(f => {
                    var m;
                    let {
                        config: p,
                        actionTypeId: h
                    } = f, y = (p == null || (m = p.target) === null || m === void 0 ? void 0 : m.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : p, C = Di({
                        config: y,
                        event: s,
                        elementApi: Re
                    }), A = Fi(h);
                    C.forEach(x => {
                        let w = A ? Ts(h)(x, f) : null;
                        ws({
                            destination: Is({
                                element: x,
                                actionItem: f,
                                elementApi: Re
                            }, w),
                            immediate: !0,
                            store: e,
                            element: x,
                            eventId: r,
                            actionItem: f,
                            actionListId: t,
                            pluginInstance: w
                        })
                    })
                })
            }
        }

        function ry({
            store: e
        }) {
            let {
                ixInstances: t
            } = e.getState();
            (0, un.default)(t, r => {
                if (!r.continuous) {
                    let {
                        actionListId: n,
                        verbose: o
                    } = r;
                    Ss(r, e), o && e.dispatch((0, be.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            })
        }

        function Os({
            store: e,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o
        }) {
            let {
                ixInstances: i,
                ixSession: a
            } = e.getState(), s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
            (0, un.default)(i, c => {
                let d = (0, Pt.default)(c, "actionItem.config.target.boundaryMode"),
                    g = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && g) {
                    if (s && d && !Re.elementContains(s, c.element)) return;
                    Ss(c, e), c.verbose && e.dispatch((0, be.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            })
        }

        function bs({
            store: e,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o,
            groupIndex: i = 0,
            immediate: a,
            verbose: s
        }) {
            var c;
            let {
                ixData: d,
                ixSession: g
            } = e.getState(), {
                events: f
            } = d, m = f[t] || {}, {
                mediaQueries: p = d.mediaQueryKeys
            } = m, h = (0, Pt.default)(d, `actionLists.${o}`, {}), {
                actionItemGroups: y,
                useFirstGroupAsInitialState: C
            } = h;
            if (!y || !y.length) return !1;
            i >= y.length && (0, Pt.default)(m, "config.loop") && (i = 0), i === 0 && C && i++;
            let x = (i === 0 || i === 1 && C) && ms((c = m.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? m.config.delay : void 0,
                w = (0, Pt.default)(y, [i, "actionItems"], []);
            if (!w.length || !Mi(p, g.mediaQueryKey)) return !1;
            let L = g.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null,
                q = eW(w),
                M = !1;
            return w.forEach((H, Q) => {
                let {
                    config: J,
                    actionTypeId: oe
                } = H, re = Fi(oe), {
                    target: U
                } = J;
                if (!U) return;
                let O = U.boundaryMode ? L : null;
                Di({
                    config: J,
                    event: m,
                    eventTarget: r,
                    elementRoot: O,
                    elementApi: Re
                }).forEach((X, V) => {
                    let ee = re ? Ts(oe)(X, H) : null,
                        ne = re ? fW(oe)(X, H) : null;
                    M = !0;
                    let G = q === Q && V === 0,
                        B = tW({
                            element: X,
                            actionItem: H
                        }),
                        $ = Is({
                            element: X,
                            actionItem: H,
                            elementApi: Re
                        }, ee);
                    ws({
                        store: e,
                        element: X,
                        actionItem: H,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: G,
                        computedStyle: B,
                        destination: $,
                        immediate: a,
                        verbose: s,
                        pluginInstance: ee,
                        pluginDuration: ne,
                        instanceDelay: x
                    })
                })
            }), M
        }

        function ws(e) {
            var t;
            let {
                store: r,
                computedStyle: n
            } = e, o = (0, XV.default)(e, zV), {
                element: i,
                actionItem: a,
                immediate: s,
                pluginInstance: c,
                continuous: d,
                restingValue: g,
                eventId: f
            } = o, m = !d, p = ZV(), {
                ixElements: h,
                ixSession: y,
                ixData: C
            } = r.getState(), A = $V(h, i), {
                refState: x
            } = h[A] || {}, w = Re.getRefType(i), L = y.reducedMotion && at.ReducedMotionTypes[a.actionTypeId], q;
            if (L && d) switch ((t = C.events[f]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case at.EventTypeConsts.MOUSE_MOVE:
                case at.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    q = g;
                    break;
                default:
                    q = .5;
                    break
            }
            let M = rW(i, x, n, a, Re, c);
            if (r.dispatch((0, be.instanceAdded)((0, UV.default)({
                    instanceId: p,
                    elementId: A,
                    origin: M,
                    refType: w,
                    skipMotion: L,
                    skipToValue: q
                }, o))), ny(document.body, "ix2-animation-started", p), s) {
                qW(r, p);
                return
            }
            Kt({
                store: r,
                select: ({
                    ixInstances: H
                }) => H[p],
                onChange: iy
            }), m && r.dispatch((0, be.instanceStarted)(p, y.tick))
        }

        function Ss(e, t) {
            ny(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {
                elementId: r,
                actionItem: n
            } = e, {
                ixElements: o
            } = t.getState(), {
                ref: i,
                refType: a
            } = o[r] || {};
            a === $m && aW(i, n, Re), t.dispatch((0, be.instanceRemoved)(e.id))
        }

        function ny(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
        }

        function qW(e, t) {
            let {
                ixParameters: r
            } = e.getState();
            e.dispatch((0, be.instanceStarted)(t, 0)), e.dispatch((0, be.animationFrameChanged)(performance.now(), r));
            let {
                ixInstances: n
            } = e.getState();
            iy(n[t], e)
        }

        function iy(e, t) {
            let {
                active: r,
                continuous: n,
                complete: o,
                elementId: i,
                actionItem: a,
                actionTypeId: s,
                renderType: c,
                current: d,
                groupIndex: g,
                eventId: f,
                eventTarget: m,
                eventStateKey: p,
                actionListId: h,
                isCarrier: y,
                styleProp: C,
                verbose: A,
                pluginInstance: x
            } = e, {
                ixData: w,
                ixSession: L
            } = t.getState(), {
                events: q
            } = w, M = q[f] || {}, {
                mediaQueries: H = w.mediaQueryKeys
            } = M;
            if (Mi(H, L.mediaQueryKey) && (n || r || o)) {
                if (d || c === QV && o) {
                    t.dispatch((0, be.elementStateChanged)(i, s, d, a));
                    let {
                        ixElements: Q
                    } = t.getState(), {
                        ref: J,
                        refType: oe,
                        refState: re
                    } = Q[i] || {}, U = re && re[s];
                    (oe === $m || Fi(s)) && JV(J, re, U, f, a, C, Re, c, x)
                }
                if (o) {
                    if (y) {
                        let Q = bs({
                            store: t,
                            eventId: f,
                            eventTarget: m,
                            eventStateKey: p,
                            actionListId: h,
                            groupIndex: g + 1,
                            verbose: A
                        });
                        A && !Q && t.dispatch((0, be.actionListPlaybackChanged)({
                            actionListId: h,
                            isPlaying: !1
                        }))
                    }
                    Ss(e, t)
                }
            }
        }
    });
    var ay = u(Ot => {
        "use strict";
        var DW = Mt().default,
            MW = tt().default;
        Object.defineProperty(Ot, "__esModule", {
            value: !0
        });
        Ot.actions = void 0;
        Ot.destroy = oy;
        Ot.init = VW;
        Ot.setEnv = XW;
        Ot.store = void 0;
        Hl();
        var FW = ta(),
            GW = MW(cE()),
            As = _s(),
            UW = DW(Ti());
        Ot.actions = UW;
        var Xi = (0, FW.createStore)(GW.default);
        Ot.store = Xi;

        function XW(e) {
            e() && (0, As.observeRequests)(Xi)
        }

        function VW(e) {
            oy(), (0, As.startEngine)({
                store: Xi,
                rawData: e,
                allowEvents: !0
            })
        }

        function oy() {
            (0, As.stopEngine)(Xi)
        }
    });
    var ly = u((zK, cy) => {
        var sy = He(),
            uy = ay();
        uy.setEnv(sy.env);
        sy.define("ix2", cy.exports = function() {
            return uy
        })
    });
    var dy = u((YK, fy) => {
        var wr = He();
        wr.define("links", fy.exports = function(e, t) {
            var r = {},
                n = e(window),
                o, i = wr.env(),
                a = window.location,
                s = document.createElement("a"),
                c = "w--current",
                d = /index\.(html|php)$/,
                g = /\/$/,
                f, m;
            r.ready = r.design = r.preview = p;

            function p() {
                o = i && wr.env("design"), m = wr.env("slug") || a.pathname || "", wr.scroll.off(y), f = [];
                for (var A = document.links, x = 0; x < A.length; ++x) h(A[x]);
                f.length && (wr.scroll.on(y), y())
            }

            function h(A) {
                var x = o && A.getAttribute("href-disabled") || A.getAttribute("href");
                if (s.href = x, !(x.indexOf(":") >= 0)) {
                    var w = e(A);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                        var L = e(s.hash);
                        L.length && f.push({
                            link: w,
                            sec: L,
                            active: !1
                        });
                        return
                    }
                    if (!(x === "#" || x === "")) {
                        var q = s.href === a.href || x === m || d.test(x) && g.test(m);
                        C(w, c, q)
                    }
                }
            }

            function y() {
                var A = n.scrollTop(),
                    x = n.height();
                t.each(f, function(w) {
                    var L = w.link,
                        q = w.sec,
                        M = q.offset().top,
                        H = q.outerHeight(),
                        Q = x * .5,
                        J = q.is(":visible") && M + H - Q >= A && M + Q <= A + x;
                    w.active !== J && (w.active = J, C(L, c, J))
                })
            }

            function C(A, x, w) {
                var L = A.hasClass(x);
                w && L || !w && !L || (w ? A.addClass(x) : A.removeClass(x))
            }
            return r
        })
    });
    var vy = u((QK, py) => {
        var Vi = He();
        Vi.define("scroll", py.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = h() ? null : window.history,
                o = e(window),
                i = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(U) {
                    window.setTimeout(U, 15)
                },
                c = Vi.env("editor") ? ".w-editor-body" : "body",
                d = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                g = 'a[href="#"]',
                f = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
                m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                p = document.createElement("style");
            p.appendChild(document.createTextNode(m));

            function h() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var y = /^#[a-zA-Z0-9][\w:.-]*$/;

            function C(U) {
                return y.test(U.hash) && U.host + U.pathname === r.host + r.pathname
            }
            let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function x() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
            }

            function w(U, O) {
                var F;
                switch (O) {
                    case "add":
                        F = U.attr("tabindex"), F ? U.attr("data-wf-tabindex-swap", F) : U.attr("tabindex", "-1");
                        break;
                    case "remove":
                        F = U.attr("data-wf-tabindex-swap"), F ? (U.attr("tabindex", F), U.removeAttr("data-wf-tabindex-swap")) : U.removeAttr("tabindex");
                        break
                }
                U.toggleClass("wf-force-outline-none", O === "add")
            }

            function L(U) {
                var O = U.currentTarget;
                if (!(Vi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var F = C(O) ? O.hash : "";
                    if (F !== "") {
                        var X = e(F);
                        X.length && (U && (U.preventDefault(), U.stopPropagation()), q(F, U), window.setTimeout(function() {
                            M(X, function() {
                                w(X, "add"), X.get(0).focus({
                                    preventScroll: !0
                                }), w(X, "remove")
                            })
                        }, U ? 0 : 300))
                    }
                }
            }

            function q(U) {
                if (r.hash !== U && n && n.pushState && !(Vi.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== U && n.pushState({
                        hash: U
                    }, "", U)
                }
            }

            function M(U, O) {
                var F = o.scrollTop(),
                    X = H(U);
                if (F !== X) {
                    var V = Q(U, F, X),
                        ee = Date.now(),
                        ne = function() {
                            var G = Date.now() - ee;
                            window.scroll(0, J(F, X, G, V)), G <= V ? s(ne) : typeof O == "function" && O()
                        };
                    s(ne)
                }
            }

            function H(U) {
                var O = e(d),
                    F = O.css("position") === "fixed" ? O.outerHeight() : 0,
                    X = U.offset().top - F;
                if (U.data("scroll") === "mid") {
                    var V = o.height() - F,
                        ee = U.outerHeight();
                    ee < V && (X -= Math.round((V - ee) / 2))
                }
                return X
            }

            function Q(U, O, F) {
                if (x()) return 0;
                var X = 1;
                return a.add(U).each(function(V, ee) {
                    var ne = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (X = ne)
                }), (472.143 * Math.log(Math.abs(O - F) + 125) - 2e3) * X
            }

            function J(U, O, F, X) {
                return F > X ? O : U + (O - U) * oe(F / X)
            }

            function oe(U) {
                return U < .5 ? 4 * U * U * U : (U - 1) * (2 * U - 2) * (2 * U - 2) + 1
            }

            function re() {
                var {
                    WF_CLICK_EMPTY: U,
                    WF_CLICK_SCROLL: O
                } = t;
                i.on(O, f, L), i.on(U, g, function(F) {
                    F.preventDefault()
                }), document.head.insertBefore(p, document.head.firstChild)
            }
            return {
                ready: re
            }
        })
    });
    var hy = u(($K, gy) => {
        var WW = He();
        WW.define("touch", gy.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i, i ? new n(i) : null
            };

            function n(i) {
                var a = !1,
                    s = !1,
                    c = Math.min(Math.round(window.innerWidth * .04), 40),
                    d, g;
                i.addEventListener("touchstart", f, !1), i.addEventListener("touchmove", m, !1), i.addEventListener("touchend", p, !1), i.addEventListener("touchcancel", h, !1), i.addEventListener("mousedown", f, !1), i.addEventListener("mousemove", m, !1), i.addEventListener("mouseup", p, !1), i.addEventListener("mouseout", h, !1);

                function f(C) {
                    var A = C.touches;
                    A && A.length > 1 || (a = !0, A ? (s = !0, d = A[0].clientX) : d = C.clientX, g = d)
                }

                function m(C) {
                    if (a) {
                        if (s && C.type === "mousemove") {
                            C.preventDefault(), C.stopPropagation();
                            return
                        }
                        var A = C.touches,
                            x = A ? A[0].clientX : C.clientX,
                            w = x - g;
                        g = x, Math.abs(w) > c && r && String(r()) === "" && (o("swipe", C, {
                            direction: w > 0 ? "right" : "left"
                        }), h())
                    }
                }

                function p(C) {
                    if (a && (a = !1, s && C.type === "mouseup")) {
                        C.preventDefault(), C.stopPropagation(), s = !1;
                        return
                    }
                }

                function h() {
                    a = !1
                }

                function y() {
                    i.removeEventListener("touchstart", f, !1), i.removeEventListener("touchmove", m, !1), i.removeEventListener("touchend", p, !1), i.removeEventListener("touchcancel", h, !1), i.removeEventListener("mousedown", f, !1), i.removeEventListener("mousemove", m, !1), i.removeEventListener("mouseup", p, !1), i.removeEventListener("mouseout", h, !1), i = null
                }
                this.destroy = y
            }

            function o(i, a, s) {
                var c = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var my = u((ZK, _y) => {
        var zt = He(),
            BW = En(),
            ut = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Ey = !0,
            HW = /^#[a-zA-Z0-9\-_]+$/;
        zt.define("dropdown", _y.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                o = zt.env(),
                i = !1,
                a, s = zt.env.touch,
                c = ".w-dropdown",
                d = "w--open",
                g = BW.triggers,
                f = 900,
                m = "focusout" + c,
                p = "keydown" + c,
                h = "mouseenter" + c,
                y = "mousemove" + c,
                C = "mouseleave" + c,
                A = (s ? "click" : "mouseup") + c,
                x = "w-close" + c,
                w = "setting" + c,
                L = e(document),
                q;
            n.ready = M, n.design = function() {
                i && O(), i = !1, M()
            }, n.preview = function() {
                i = !0, M()
            };

            function M() {
                a = o && zt.env("design"), q = L.find(c), q.each(H)
            }

            function H(v, W) {
                var j = e(W),
                    R = e.data(W, c);
                R || (R = e.data(W, c, {
                    open: !1,
                    el: j,
                    config: {},
                    selectedIdx: -1
                })), R.toggle = R.el.children(".w-dropdown-toggle"), R.list = R.el.children(".w-dropdown-list"), R.links = R.list.find("a:not(.w-dropdown .w-dropdown a)"), R.complete = V(R), R.mouseLeave = ne(R), R.mouseUpOutside = X(R), R.mouseMoveOutside = G(R), Q(R);
                var Y = R.toggle.attr("id"),
                    ve = R.list.attr("id");
                Y || (Y = "w-dropdown-toggle-" + v), ve || (ve = "w-dropdown-list-" + v), R.toggle.attr("id", Y), R.toggle.attr("aria-controls", ve), R.toggle.attr("aria-haspopup", "menu"), R.toggle.attr("aria-expanded", "false"), R.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), R.toggle.prop("tagName") !== "BUTTON" && (R.toggle.attr("role", "button"), R.toggle.attr("tabindex") || R.toggle.attr("tabindex", "0")), R.list.attr("id", ve), R.list.attr("aria-labelledby", Y), R.links.each(function(_, k) {
                    k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"), HW.test(k.hash) && k.addEventListener("click", U.bind(null, R))
                }), R.el.off(c), R.toggle.off(c), R.nav && R.nav.off(c);
                var ae = oe(R, Ey);
                a && R.el.on(w, J(R)), a || (o && (R.hovering = !1, U(R)), R.config.hover && R.toggle.on(h, ee(R)), R.el.on(x, ae), R.el.on(p, B(R)), R.el.on(m, I(R)), R.toggle.on(A, ae), R.toggle.on(p, E(R)), R.nav = R.el.closest(".w-nav"), R.nav.on(x, ae))
            }

            function Q(v) {
                var W = Number(v.el.css("z-index"));
                v.manageZ = W === f || W === f + 1, v.config = {
                    hover: v.el.attr("data-hover") === "true" && !s,
                    delay: v.el.attr("data-delay")
                }
            }

            function J(v) {
                return function(W, j) {
                    j = j || {}, Q(v), j.open === !0 && re(v, !0), j.open === !1 && U(v, {
                        immediate: !0
                    })
                }
            }

            function oe(v, W) {
                return r(function(j) {
                    if (v.open || j && j.type === "w-close") return U(v, {
                        forceClose: W
                    });
                    re(v)
                })
            }

            function re(v) {
                if (!v.open) {
                    F(v), v.open = !0, v.list.addClass(d), v.toggle.addClass(d), v.toggle.attr("aria-expanded", "true"), g.intro(0, v.el[0]), zt.redraw.up(), v.manageZ && v.el.css("z-index", f + 1);
                    var W = zt.env("editor");
                    a || L.on(A, v.mouseUpOutside), v.hovering && !W && v.el.on(C, v.mouseLeave), v.hovering && W && L.on(y, v.mouseMoveOutside), window.clearTimeout(v.delayId)
                }
            }

            function U(v, {
                immediate: W,
                forceClose: j
            } = {}) {
                if (v.open && !(v.config.hover && v.hovering && !j)) {
                    v.toggle.attr("aria-expanded", "false"), v.open = !1;
                    var R = v.config;
                    if (g.outro(0, v.el[0]), L.off(A, v.mouseUpOutside), L.off(y, v.mouseMoveOutside), v.el.off(C, v.mouseLeave), window.clearTimeout(v.delayId), !R.delay || W) return v.complete();
                    v.delayId = window.setTimeout(v.complete, R.delay)
                }
            }

            function O() {
                L.find(c).each(function(v, W) {
                    e(W).triggerHandler(x)
                })
            }

            function F(v) {
                var W = v.el[0];
                q.each(function(j, R) {
                    var Y = e(R);
                    Y.is(W) || Y.has(W).length || Y.triggerHandler(x)
                })
            }

            function X(v) {
                return v.mouseUpOutside && L.off(A, v.mouseUpOutside), r(function(W) {
                    if (v.open) {
                        var j = e(W.target);
                        if (!j.closest(".w-dropdown-toggle").length) {
                            var R = e.inArray(v.el[0], j.parents(c)) === -1,
                                Y = zt.env("editor");
                            if (R) {
                                if (Y) {
                                    var ve = j.parents().length === 1 && j.parents("svg").length === 1,
                                        ae = j.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (ve || ae) return
                                }
                                U(v)
                            }
                        }
                    }
                })
            }

            function V(v) {
                return function() {
                    v.list.removeClass(d), v.toggle.removeClass(d), v.manageZ && v.el.css("z-index", "")
                }
            }

            function ee(v) {
                return function() {
                    v.hovering = !0, re(v)
                }
            }

            function ne(v) {
                return function() {
                    v.hovering = !1, v.links.is(":focus") || U(v)
                }
            }

            function G(v) {
                return r(function(W) {
                    if (v.open) {
                        var j = e(W.target),
                            R = e.inArray(v.el[0], j.parents(c)) === -1;
                        if (R) {
                            var Y = j.parents(".w-editor-bem-EditorHoverControls").length,
                                ve = j.parents(".w-editor-bem-RTToolbar").length,
                                ae = e(".w-editor-bem-EditorOverlay"),
                                _ = ae.find(".w-editor-edit-outline").length || ae.find(".w-editor-bem-RTToolbar").length;
                            if (Y || ve || _) return;
                            v.hovering = !1, U(v)
                        }
                    }
                })
            }

            function B(v) {
                return function(W) {
                    if (!(a || !v.open)) switch (v.selectedIdx = v.links.index(document.activeElement), W.keyCode) {
                        case ut.HOME:
                            return v.open ? (v.selectedIdx = 0, $(v), W.preventDefault()) : void 0;
                        case ut.END:
                            return v.open ? (v.selectedIdx = v.links.length - 1, $(v), W.preventDefault()) : void 0;
                        case ut.ESCAPE:
                            return U(v), v.toggle.focus(), W.stopPropagation();
                        case ut.ARROW_RIGHT:
                        case ut.ARROW_DOWN:
                            return v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1), $(v), W.preventDefault();
                        case ut.ARROW_LEFT:
                        case ut.ARROW_UP:
                            return v.selectedIdx = Math.max(-1, v.selectedIdx - 1), $(v), W.preventDefault()
                    }
                }
            }

            function $(v) {
                v.links[v.selectedIdx] && v.links[v.selectedIdx].focus()
            }

            function E(v) {
                var W = oe(v, Ey);
                return function(j) {
                    if (!a) {
                        if (!v.open) switch (j.keyCode) {
                            case ut.ARROW_UP:
                            case ut.ARROW_DOWN:
                                return j.stopPropagation()
                        }
                        switch (j.keyCode) {
                            case ut.SPACE:
                            case ut.ENTER:
                                return W(), j.stopPropagation(), j.preventDefault()
                        }
                    }
                }
            }

            function I(v) {
                return r(function(W) {
                    var {
                        relatedTarget: j,
                        target: R
                    } = W, Y = v.el[0], ve = Y.contains(j) || Y.contains(R);
                    return ve || U(v), W.stopPropagation()
                })
            }
            return n
        })
    });
    var yy = u(Rs => {
        "use strict";
        Object.defineProperty(Rs, "__esModule", {
            value: !0
        });
        Rs.default = kW;

        function kW(e, t, r, n, o, i, a, s, c, d, g, f, m) {
            return function(p) {
                e(p);
                var h = p.form,
                    y = {
                        name: h.attr("data-name") || h.attr("name") || "Untitled Form",
                        pageId: h.attr("data-wf-page-id") || "",
                        elementId: h.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(h.html()),
                        trackingCookies: n()
                    };
                let C = h.attr("data-wf-flow");
                C && (y.wfFlow = C), o(p);
                var A = i(h, y.fields);
                if (A) return a(A);
                if (y.fileUploads = s(h), c(p), !d) {
                    g(p);
                    return
                }
                f.ajax({
                    url: m,
                    type: "POST",
                    data: y,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(x) {
                    x && x.code === 200 && (p.success = !0), g(p)
                }).fail(function() {
                    g(p)
                })
            }
        }
    });
    var Ty = u((ez, Iy) => {
        var Wi = He();
        Wi.define("forms", Iy.exports = function(e, t) {
            var r = {},
                n = e(document),
                o, i = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                c, d = /e(-)?mail/i,
                g = /^\S+@\S+$/,
                f = window.alert,
                m = Wi.env(),
                p, h, y, C = /list-manage[1-9]?.com/i,
                A = t.debounce(function() {
                    f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                x(), !m && !p && L()
            };

            function x() {
                c = e("html").attr("data-wf-site"), h = "https://webflow.com/api/v1/form/" + c, a && h.indexOf("https://webflow.com") >= 0 && (h = h.replace("https://webflow.com", "https://formdata.webflow.com")), y = `${h}/signFile`, o = e(s + " form"), o.length && o.each(w)
            }

            function w(G, B) {
                var $ = e(B),
                    E = e.data(B, s);
                E || (E = e.data(B, s, {
                    form: $
                })), q(E);
                var I = $.closest("div.w-form");
                E.done = I.find("> .w-form-done"), E.fail = I.find("> .w-form-fail"), E.fileUploads = I.find(".w-file-upload"), E.fileUploads.each(function(j) {
                    V(j, E)
                });
                var v = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
                E.done.attr("aria-label") || E.form.attr("aria-label", v), E.done.attr("tabindex", "-1"), E.done.attr("role", "region"), E.done.attr("aria-label") || E.done.attr("aria-label", v + " success"), E.fail.attr("tabindex", "-1"), E.fail.attr("role", "region"), E.fail.attr("aria-label") || E.fail.attr("aria-label", v + " failure");
                var W = E.action = $.attr("action");
                if (E.handler = null, E.redirect = $.attr("data-redirect"), C.test(W)) {
                    E.handler = O;
                    return
                }
                if (!W) {
                    if (c) {
                        E.handler = (() => {
                            let j = yy().default;
                            return j(q, i, Wi, oe, X, H, f, Q, M, c, F, e, h)
                        })();
                        return
                    }
                    A()
                }
            }

            function L() {
                p = !0, n.on("submit", s + " form", function(j) {
                    var R = e.data(this, s);
                    R.handler && (R.evt = j, R.handler(R))
                });
                let G = ".w-checkbox-input",
                    B = ".w-radio-input",
                    $ = "w--redirected-checked",
                    E = "w--redirected-focus",
                    I = "w--redirected-focus-visible",
                    v = ":focus-visible, [data-wf-focus-visible]",
                    W = [
                        ["checkbox", G],
                        ["radio", B]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + G + ")", j => {
                    e(j.target).siblings(G).toggleClass($)
                }), n.on("change", s + ' form input[type="radio"]', j => {
                    e(`input[name="${j.target.name}"]:not(${G})`).map((Y, ve) => e(ve).siblings(B).removeClass($));
                    let R = e(j.target);
                    R.hasClass("w-radio-input") || R.siblings(B).addClass($)
                }), W.forEach(([j, R]) => {
                    n.on("focus", s + ` form input[type="${j}"]:not(` + R + ")", Y => {
                        e(Y.target).siblings(R).addClass(E), e(Y.target).filter(v).siblings(R).addClass(I)
                    }), n.on("blur", s + ` form input[type="${j}"]:not(` + R + ")", Y => {
                        e(Y.target).siblings(R).removeClass(`${E} ${I}`)
                    })
                })
            }

            function q(G) {
                var B = G.btn = G.form.find(':input[type="submit"]');
                G.wait = G.btn.attr("data-wait") || null, G.success = !1, B.prop("disabled", !1), G.label && B.val(G.label)
            }

            function M(G) {
                var B = G.btn,
                    $ = G.wait;
                B.prop("disabled", !0), $ && (G.label = B.val(), B.val($))
            }

            function H(G, B) {
                var $ = null;
                return B = B || {}, G.find(':input:not([type="submit"]):not([type="file"])').each(function(E, I) {
                    var v = e(I),
                        W = v.attr("type"),
                        j = v.attr("data-name") || v.attr("name") || "Field " + (E + 1),
                        R = v.val();
                    if (W === "checkbox") R = v.is(":checked");
                    else if (W === "radio") {
                        if (B[j] === null || typeof B[j] == "string") return;
                        R = G.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof R == "string" && (R = e.trim(R)), B[j] = R, $ = $ || re(v, W, j, R)
                }), $
            }

            function Q(G) {
                var B = {};
                return G.find(':input[type="file"]').each(function($, E) {
                    var I = e(E),
                        v = I.attr("data-name") || I.attr("name") || "File " + ($ + 1),
                        W = I.attr("data-value");
                    typeof W == "string" && (W = e.trim(W)), B[v] = W
                }), B
            }
            let J = {
                _mkto_trk: "marketo"
            };

            function oe() {
                return document.cookie.split("; ").reduce(function(B, $) {
                    let E = $.split("="),
                        I = E[0];
                    if (I in J) {
                        let v = J[I],
                            W = E.slice(1).join("=");
                        B[v] = W
                    }
                    return B
                }, {})
            }

            function re(G, B, $, E) {
                var I = null;
                return B === "password" ? I = "Passwords cannot be submitted." : G.attr("required") ? E ? d.test(G.attr("type")) && (g.test(E) || (I = "Please enter a valid email address for: " + $)) : I = "Please fill out the required field: " + $ : $ === "g-recaptcha-response" && !E && (I = "Please confirm you\u2019re not a robot."), I
            }

            function U(G) {
                X(G), F(G)
            }

            function O(G) {
                q(G);
                var B = G.form,
                    $ = {};
                if (/^https/.test(i.href) && !/^https/.test(G.action)) {
                    B.attr("method", "post");
                    return
                }
                X(G);
                var E = H(B, $);
                if (E) return f(E);
                M(G);
                var I;
                t.each($, function(R, Y) {
                    d.test(Y) && ($.EMAIL = R), /^((full[ _-]?)?name)$/i.test(Y) && (I = R), /^(first[ _-]?name)$/i.test(Y) && ($.FNAME = R), /^(last[ _-]?name)$/i.test(Y) && ($.LNAME = R)
                }), I && !$.FNAME && (I = I.split(" "), $.FNAME = I[0], $.LNAME = $.LNAME || I[1]);
                var v = G.action.replace("/post?", "/post-json?") + "&c=?",
                    W = v.indexOf("u=") + 2;
                W = v.substring(W, v.indexOf("&", W));
                var j = v.indexOf("id=") + 3;
                j = v.substring(j, v.indexOf("&", j)), $["b_" + W + "_" + j] = "", e.ajax({
                    url: v,
                    data: $,
                    dataType: "jsonp"
                }).done(function(R) {
                    G.success = R.result === "success" || /already/.test(R.msg), G.success || console.info("MailChimp error: " + R.msg), F(G)
                }).fail(function() {
                    F(G)
                })
            }

            function F(G) {
                var B = G.form,
                    $ = G.redirect,
                    E = G.success;
                if (E && $) {
                    Wi.location($);
                    return
                }
                G.done.toggle(E), G.fail.toggle(!E), E ? G.done.focus() : G.fail.focus(), B.toggle(!E), q(G)
            }

            function X(G) {
                G.evt && G.evt.preventDefault(), G.evt = null
            }

            function V(G, B) {
                if (!B.fileUploads || !B.fileUploads[G]) return;
                var $, E = e(B.fileUploads[G]),
                    I = E.find("> .w-file-upload-default"),
                    v = E.find("> .w-file-upload-uploading"),
                    W = E.find("> .w-file-upload-success"),
                    j = E.find("> .w-file-upload-error"),
                    R = I.find(".w-file-upload-input"),
                    Y = I.find(".w-file-upload-label"),
                    ve = Y.children(),
                    ae = j.find(".w-file-upload-error-msg"),
                    _ = W.find(".w-file-upload-file"),
                    k = W.find(".w-file-remove-link"),
                    Z = _.find(".w-file-upload-file-name"),
                    z = ae.attr("data-w-size-error"),
                    ge = ae.attr("data-w-type-error"),
                    Qe = ae.attr("data-w-generic-error");
                if (m || Y.on("click keydown", function(b) {
                        b.type === "keydown" && b.which !== 13 && b.which !== 32 || (b.preventDefault(), R.click())
                    }), Y.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), k.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), m) R.on("click", function(b) {
                    b.preventDefault()
                }), Y.on("click", function(b) {
                    b.preventDefault()
                }), ve.on("click", function(b) {
                    b.preventDefault()
                });
                else {
                    k.on("click keydown", function(b) {
                        if (b.type === "keydown") {
                            if (b.which !== 13 && b.which !== 32) return;
                            b.preventDefault()
                        }
                        R.removeAttr("data-value"), R.val(""), Z.html(""), I.toggle(!0), W.toggle(!1), Y.focus()
                    }), R.on("change", function(b) {
                        $ = b.target && b.target.files && b.target.files[0], $ && (I.toggle(!1), j.toggle(!1), v.toggle(!0), v.focus(), Z.text($.name), N() || M(B), B.fileUploads[G].uploading = !0, ee($, T))
                    });
                    var We = Y.outerHeight();
                    R.height(We), R.width(1)
                }

                function l(b) {
                    var P = b.responseJSON && b.responseJSON.msg,
                        te = Qe;
                    typeof P == "string" && P.indexOf("InvalidFileTypeError") === 0 ? te = ge : typeof P == "string" && P.indexOf("MaxFileSizeError") === 0 && (te = z), ae.text(te), R.removeAttr("data-value"), R.val(""), v.toggle(!1), I.toggle(!0), j.toggle(!0), j.focus(), B.fileUploads[G].uploading = !1, N() || q(B)
                }

                function T(b, P) {
                    if (b) return l(b);
                    var te = P.fileName,
                        se = P.postData,
                        me = P.fileId,
                        K = P.s3Url;
                    R.attr("data-value", me), ne(K, se, $, te, S)
                }

                function S(b) {
                    if (b) return l(b);
                    v.toggle(!1), W.css("display", "inline-block"), W.focus(), B.fileUploads[G].uploading = !1, N() || q(B)
                }

                function N() {
                    var b = B.fileUploads && B.fileUploads.toArray() || [];
                    return b.some(function(P) {
                        return P.uploading
                    })
                }
            }

            function ee(G, B) {
                var $ = new URLSearchParams({
                    name: G.name,
                    size: G.size
                });
                e.ajax({
                    type: "GET",
                    url: `${y}?${$}`,
                    crossDomain: !0
                }).done(function(E) {
                    B(null, E)
                }).fail(function(E) {
                    B(E)
                })
            }

            function ne(G, B, $, E, I) {
                var v = new FormData;
                for (var W in B) v.append(W, B[W]);
                v.append("file", $, E), e.ajax({
                    type: "POST",
                    url: G,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    I(null)
                }).fail(function(j) {
                    I(j)
                })
            }
            return r
        })
    });
    var wy = u((tz, by) => {
        var Cs = He(),
            Oy = "w-condition-invisible",
            jW = "." + Oy;

        function KW(e) {
            return e.filter(function(t) {
                return !ln(t)
            })
        }

        function ln(e) {
            return !!(e.$el && e.$el.closest(jW).length)
        }

        function xs(e, t) {
            for (var r = e; r >= 0; r--)
                if (!ln(t[r])) return r;
            return -1
        }

        function Ns(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!ln(t[r])) return r;
            return -1
        }

        function zW(e, t) {
            return xs(e - 1, t) === -1
        }

        function YW(e, t) {
            return Ns(e + 1, t) === -1
        }

        function cn(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }

        function QW(e, t, r, n) {
            var o = r.tram,
                i = Array.isArray,
                a = "w-lightbox",
                s = a + "-",
                c = /(^|\s+)/g,
                d = [],
                g, f, m, p = [];

            function h(E, I) {
                return d = i(E) ? E : [E], f || h.build(), KW(d).length > 1 && (f.items = f.empty, d.forEach(function(v, W) {
                    var j = B("thumbnail"),
                        R = B("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(j);
                    cn(R, `show item ${W+1} of ${d.length}`), ln(v) && R.addClass(Oy), f.items = f.items.add(R), oe(v.thumbnailUrl || v.url, function(Y) {
                        Y.prop("width") > Y.prop("height") ? V(Y, "wide") : V(Y, "tall"), j.append(V(Y, "thumbnail-image"))
                    })
                }), f.strip.empty().append(f.items), V(f.content, "group")), o(ee(f.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), V(f.html, "noscroll"), h.show(I || 0)
            }
            h.build = function() {
                return h.destroy(), f = {
                    html: r(t.documentElement),
                    empty: r()
                }, f.arrowLeft = B("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.arrowRight = B("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.close = B("control close").attr("role", "button"), cn(f.arrowLeft, "previous image"), cn(f.arrowRight, "next image"), cn(f.close, "close lightbox"), f.spinner = B("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), f.strip = B("strip").attr("role", "tablist"), m = new O(f.spinner, F("hide")), f.content = B("content").append(f.spinner, f.arrowLeft, f.arrowRight, f.close), f.container = B("container").append(f.content, f.strip), f.lightbox = B("backdrop hide").append(f.container), f.strip.on("click", X("item"), w), f.content.on("swipe", L).on("click", X("left"), C).on("click", X("right"), A).on("click", X("close"), x).on("click", X("image, caption"), A), f.container.on("click", X("view"), x).on("dragstart", X("img"), M), f.lightbox.on("keydown", H).on("focusin", q), r(n).append(f.lightbox), h
            }, h.destroy = function() {
                f && (ee(f.html, "noscroll"), f.lightbox.remove(), f = void 0)
            }, h.show = function(E) {
                if (E !== g) {
                    var I = d[E];
                    if (!I) return h.hide();
                    if (ln(I)) {
                        if (E < g) {
                            var v = xs(E - 1, d);
                            E = v > -1 ? v : E
                        } else {
                            var W = Ns(E + 1, d);
                            E = W > -1 ? W : E
                        }
                        I = d[E]
                    }
                    var j = g;
                    g = E, f.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), m.show();
                    var R = I.html && $(I.width, I.height) || I.url;
                    return oe(R, function(Y) {
                        if (E !== g) return;
                        var ve = B("figure", "figure").append(V(Y, "image")),
                            ae = B("frame").append(ve),
                            _ = B("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ae),
                            k, Z;
                        I.html && (k = r(I.html), Z = k.is("iframe"), Z && k.on("load", z), ve.append(V(k, "embed"))), I.caption && ve.append(B("caption", "figcaption").text(I.caption)), f.spinner.before(_), Z || z();

                        function z() {
                            if (f.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), m.hide(), E !== g) {
                                _.remove();
                                return
                            }
                            let ge = zW(E, d);
                            ne(f.arrowLeft, "inactive", ge), G(f.arrowLeft, ge), ge && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                            let Qe = YW(E, d);
                            if (ne(f.arrowRight, "inactive", Qe), G(f.arrowRight, Qe), Qe && f.arrowRight.is(":focus") && f.arrowLeft.focus(), f.view ? (o(f.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(re(f.view)), o(_).add("opacity .3s").add("transform .3s").set({
                                    x: E > j ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : _.css("opacity", 1), f.view = _, f.view.prop("tabIndex", 0), f.items) {
                                ee(f.items, "active"), f.items.removeAttr("aria-selected");
                                var We = f.items.eq(E);
                                V(We, "active"), We.attr("aria-selected", !0), U(We)
                            }
                        }
                    }), f.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), p.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (p.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), f.close.focus()), h
                }
            }, h.hide = function() {
                return o(f.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(J), h
            }, h.prev = function() {
                var E = xs(g - 1, d);
                E > -1 && h.show(E)
            }, h.next = function() {
                var E = Ns(g + 1, d);
                E > -1 && h.show(E)
            };

            function y(E) {
                return function(I) {
                    this === I.target && (I.stopPropagation(), I.preventDefault(), E())
                }
            }
            var C = y(h.prev),
                A = y(h.next),
                x = y(h.hide),
                w = function(E) {
                    var I = r(this).index();
                    E.preventDefault(), h.show(I)
                },
                L = function(E, I) {
                    E.preventDefault(), I.direction === "left" ? h.next() : I.direction === "right" && h.prev()
                },
                q = function() {
                    this.focus()
                };

            function M(E) {
                E.preventDefault()
            }

            function H(E) {
                var I = E.keyCode;
                I === 27 || Q(I, "close") ? h.hide() : I === 37 || Q(I, "left") ? h.prev() : I === 39 || Q(I, "right") ? h.next() : Q(I, "item") && r(":focus").click()
            }

            function Q(E, I) {
                if (E !== 13 && E !== 32) return !1;
                var v = r(":focus").attr("class"),
                    W = F(I).trim();
                return v.includes(W)
            }

            function J() {
                f && (f.strip.scrollLeft(0).empty(), ee(f.html, "noscroll"), V(f.lightbox, "hide"), f.view && f.view.remove(), ee(f.content, "group"), V(f.arrowLeft, "inactive"), V(f.arrowRight, "inactive"), g = f.view = void 0, p.forEach(function(E) {
                    var I = E.node;
                    I && (E.hidden ? I.attr("aria-hidden", E.hidden) : I.removeAttr("aria-hidden"), E.tabIndex ? I.attr("tabIndex", E.tabIndex) : I.removeAttr("tabIndex"))
                }), p = [], r(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function oe(E, I) {
                var v = B("img", "img");
                return v.one("load", function() {
                    I(v)
                }), v.attr("src", E), v
            }

            function re(E) {
                return function() {
                    E.remove()
                }
            }

            function U(E) {
                var I = E.get(0),
                    v = f.strip.get(0),
                    W = I.offsetLeft,
                    j = I.clientWidth,
                    R = v.scrollLeft,
                    Y = v.clientWidth,
                    ve = v.scrollWidth - Y,
                    ae;
                W < R ? ae = Math.max(0, W + j - Y) : W + j > Y + R && (ae = Math.min(W, ve)), ae != null && o(f.strip).add("scroll-left 500ms").start({
                    "scroll-left": ae
                })
            }

            function O(E, I, v) {
                this.$element = E, this.className = I, this.delay = v || 200, this.hide()
            }
            O.prototype.show = function() {
                var E = this;
                E.timeoutId || (E.timeoutId = setTimeout(function() {
                    E.$element.removeClass(E.className), delete E.timeoutId
                }, E.delay))
            }, O.prototype.hide = function() {
                var E = this;
                if (E.timeoutId) {
                    clearTimeout(E.timeoutId), delete E.timeoutId;
                    return
                }
                E.$element.addClass(E.className)
            };

            function F(E, I) {
                return E.replace(c, (I ? " ." : " ") + s)
            }

            function X(E) {
                return F(E, !0)
            }

            function V(E, I) {
                return E.addClass(F(I))
            }

            function ee(E, I) {
                return E.removeClass(F(I))
            }

            function ne(E, I, v) {
                return E.toggleClass(F(I), v)
            }

            function G(E, I) {
                return E.attr("aria-hidden", I).attr("tabIndex", I ? -1 : 0)
            }

            function B(E, I) {
                return V(r(t.createElement(I || "div")), E)
            }

            function $(E, I) {
                var v = '<svg xmlns="http://www.w3.org/2000/svg" width="' + E + '" height="' + I + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(v)
            }
            return function() {
                var E = e.navigator.userAgent,
                    I = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    v = E.match(I),
                    W = E.indexOf("Android ") > -1 && E.indexOf("Chrome") === -1;
                if (!W && (!v || v[2] > 7)) return;
                var j = t.createElement("style");
                t.head.appendChild(j), e.addEventListener("resize", R, !0);

                function R() {
                    var Y = e.innerHeight,
                        ve = e.innerWidth,
                        ae = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Y + "px}.w-lightbox-view {width:" + ve + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Y + "px}.w-lightbox-image {max-width:" + ve + "px;max-height:" + Y + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Y + "px}.w-lightbox-strip {padding: 0 " + .01 * Y + "px}.w-lightbox-item {width:" + .1 * Y + "px;padding:" + .02 * Y + "px " + .01 * Y + "px}.w-lightbox-thumbnail {height:" + .1 * Y + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Y + "px}.w-lightbox-content {margin-top:" + .02 * Y + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Y + "px}.w-lightbox-image {max-width:" + .96 * ve + "px;max-height:" + .96 * Y + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * ve + "px;max-height:" + .84 * Y + "px}}";
                    j.textContent = ae
                }
                R()
            }(), h
        }
        Cs.define("lightbox", by.exports = function(e) {
            var t = {},
                r = Cs.env(),
                n = QW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
                o = e(document),
                i, a, s = ".w-lightbox",
                c;
            t.ready = t.design = t.preview = d;

            function d() {
                a = r && Cs.env("design"), n.destroy(), c = {}, i = o.find(s), i.webflowLightBox(), i.each(function() {
                    cn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var p = this;
                    e.each(p, function(h, y) {
                        var C = e.data(y, s);
                        C || (C = e.data(y, s, {
                            el: e(y),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), C.el.off(s), g(C), a ? C.el.on("setting" + s, g.bind(null, C)) : C.el.on("click" + s, f(C)).on("click" + s, function(A) {
                            A.preventDefault()
                        })
                    })
                }
            });

            function g(p) {
                var h = p.el.children(".w-json").html(),
                    y, C;
                if (!h) {
                    p.items = [];
                    return
                }
                try {
                    h = JSON.parse(h)
                } catch (A) {
                    console.error("Malformed lightbox JSON configuration.", A)
                }
                m(h), h.items.forEach(function(A) {
                    A.$el = p.el
                }), y = h.group, y ? (C = c[y], C || (C = c[y] = []), p.items = C, h.items.length && (p.index = C.length, C.push.apply(C, h.items))) : (p.items = h.items, p.index = 0)
            }

            function f(p) {
                return function() {
                    p.items.length && n(p.items, p.index || 0)
                }
            }

            function m(p) {
                p.images && (p.images.forEach(function(h) {
                    h.type = "image"
                }), p.items = p.images), p.embed && (p.embed.type = "video", p.items = [p.embed]), p.groupId && (p.group = p.groupId)
            }
            return t
        })
    });
    var Ay = u((rz, Sy) => {
        var qt = He(),
            $W = En(),
            Me = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        qt.define("navbar", Sy.exports = function(e, t) {
            var r = {},
                n = e.tram,
                o = e(window),
                i = e(document),
                a = t.debounce,
                s, c, d, g, f = qt.env(),
                m = '<div class="w-nav-overlay" data-wf-ignore />',
                p = ".w-nav",
                h = "w--open",
                y = "w--nav-dropdown-open",
                C = "w--nav-dropdown-toggle-open",
                A = "w--nav-dropdown-list-open",
                x = "w--nav-link-open",
                w = $W.triggers,
                L = e();
            r.ready = r.design = r.preview = q, r.destroy = function() {
                L = e(), M(), c && c.length && c.each(oe)
            };

            function q() {
                d = f && qt.env("design"), g = qt.env("editor"), s = e(document.body), c = i.find(p), c.length && (c.each(J), M(), H())
            }

            function M() {
                qt.resize.off(Q)
            }

            function H() {
                qt.resize.on(Q)
            }

            function Q() {
                c.each(I)
            }

            function J(_, k) {
                var Z = e(k),
                    z = e.data(k, p);
                z || (z = e.data(k, p, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })), z.menu = Z.find(".w-nav-menu"), z.links = z.menu.find(".w-nav-link"), z.dropdowns = z.menu.find(".w-dropdown"), z.dropdownToggle = z.menu.find(".w-dropdown-toggle"), z.dropdownList = z.menu.find(".w-dropdown-list"), z.button = Z.find(".w-nav-button"), z.container = Z.find(".w-container"), z.overlayContainerId = "w-nav-overlay-" + _, z.outside = $(z);
                var ge = Z.find(".w-nav-brand");
                ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"), z.button.attr("style", "-webkit-user-select: text;"), z.button.attr("aria-label") == null && z.button.attr("aria-label", "menu"), z.button.attr("role", "button"), z.button.attr("tabindex", "0"), z.button.attr("aria-controls", z.overlayContainerId), z.button.attr("aria-haspopup", "menu"), z.button.attr("aria-expanded", "false"), z.el.off(p), z.button.off(p), z.menu.off(p), O(z), d ? (re(z), z.el.on("setting" + p, F(z))) : (U(z), z.button.on("click" + p, G(z)), z.menu.on("click" + p, "a", B(z)), z.button.on("keydown" + p, X(z)), z.el.on("keydown" + p, V(z))), I(_, k)
            }

            function oe(_, k) {
                var Z = e.data(k, p);
                Z && (re(Z), e.removeData(k, p))
            }

            function re(_) {
                _.overlay && (ae(_, !0), _.overlay.remove(), _.overlay = null)
            }

            function U(_) {
                _.overlay || (_.overlay = e(m).appendTo(_.el), _.overlay.attr("id", _.overlayContainerId), _.parent = _.menu.parent(), ae(_, !0))
            }

            function O(_) {
                var k = {},
                    Z = _.config || {},
                    z = k.animation = _.el.attr("data-animation") || "default";
                k.animOver = /^over/.test(z), k.animDirect = /left$/.test(z) ? -1 : 1, Z.animation !== z && _.open && t.defer(ne, _), k.easing = _.el.attr("data-easing") || "ease", k.easing2 = _.el.attr("data-easing2") || "ease";
                var ge = _.el.attr("data-duration");
                k.duration = ge != null ? Number(ge) : 400, k.docHeight = _.el.attr("data-doc-height"), _.config = k
            }

            function F(_) {
                return function(k, Z) {
                    Z = Z || {};
                    var z = o.width();
                    O(_), Z.open === !0 && Y(_, !0), Z.open === !1 && ae(_, !0), _.open && t.defer(function() {
                        z !== o.width() && ne(_)
                    })
                }
            }

            function X(_) {
                return function(k) {
                    switch (k.keyCode) {
                        case Me.SPACE:
                        case Me.ENTER:
                            return G(_)(), k.preventDefault(), k.stopPropagation();
                        case Me.ESCAPE:
                            return ae(_), k.preventDefault(), k.stopPropagation();
                        case Me.ARROW_RIGHT:
                        case Me.ARROW_DOWN:
                        case Me.HOME:
                        case Me.END:
                            return _.open ? (k.keyCode === Me.END ? _.selectedIdx = _.links.length - 1 : _.selectedIdx = 0, ee(_), k.preventDefault(), k.stopPropagation()) : (k.preventDefault(), k.stopPropagation())
                    }
                }
            }

            function V(_) {
                return function(k) {
                    if (_.open) switch (_.selectedIdx = _.links.index(document.activeElement), k.keyCode) {
                        case Me.HOME:
                        case Me.END:
                            return k.keyCode === Me.END ? _.selectedIdx = _.links.length - 1 : _.selectedIdx = 0, ee(_), k.preventDefault(), k.stopPropagation();
                        case Me.ESCAPE:
                            return ae(_), _.button.focus(), k.preventDefault(), k.stopPropagation();
                        case Me.ARROW_LEFT:
                        case Me.ARROW_UP:
                            return _.selectedIdx = Math.max(-1, _.selectedIdx - 1), ee(_), k.preventDefault(), k.stopPropagation();
                        case Me.ARROW_RIGHT:
                        case Me.ARROW_DOWN:
                            return _.selectedIdx = Math.min(_.links.length - 1, _.selectedIdx + 1), ee(_), k.preventDefault(), k.stopPropagation()
                    }
                }
            }

            function ee(_) {
                if (_.links[_.selectedIdx]) {
                    var k = _.links[_.selectedIdx];
                    k.focus(), B(k)
                }
            }

            function ne(_) {
                _.open && (ae(_, !0), Y(_, !0))
            }

            function G(_) {
                return a(function() {
                    _.open ? ae(_) : Y(_)
                })
            }

            function B(_) {
                return function(k) {
                    var Z = e(this),
                        z = Z.attr("href");
                    if (!qt.validClick(k.currentTarget)) {
                        k.preventDefault();
                        return
                    }
                    z && z.indexOf("#") === 0 && _.open && ae(_)
                }
            }

            function $(_) {
                return _.outside && i.off("click" + p, _.outside),
                    function(k) {
                        var Z = e(k.target);
                        g && Z.closest(".w-editor-bem-EditorOverlay").length || E(_, Z)
                    }
            }
            var E = a(function(_, k) {
                if (_.open) {
                    var Z = k.closest(".w-nav-menu");
                    _.menu.is(Z) || ae(_)
                }
            });

            function I(_, k) {
                var Z = e.data(k, p),
                    z = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !z && !d && ae(Z, !0), Z.container.length) {
                    var ge = W(Z);
                    Z.links.each(ge), Z.dropdowns.each(ge)
                }
                Z.open && ve(Z)
            }
            var v = "max-width";

            function W(_) {
                var k = _.container.css(v);
                return k === "none" && (k = ""),
                    function(Z, z) {
                        z = e(z), z.css(v, ""), z.css(v) === "none" && z.css(v, k)
                    }
            }

            function j(_, k) {
                k.setAttribute("data-nav-menu-open", "")
            }

            function R(_, k) {
                k.removeAttribute("data-nav-menu-open")
            }

            function Y(_, k) {
                if (_.open) return;
                _.open = !0, _.menu.each(j), _.links.addClass(x), _.dropdowns.addClass(y), _.dropdownToggle.addClass(C), _.dropdownList.addClass(A), _.button.addClass(h);
                var Z = _.config,
                    z = Z.animation;
                (z === "none" || !n.support.transform || Z.duration <= 0) && (k = !0);
                var ge = ve(_),
                    Qe = _.menu.outerHeight(!0),
                    We = _.menu.outerWidth(!0),
                    l = _.el.height(),
                    T = _.el[0];
                if (I(0, T), w.intro(0, T), qt.redraw.up(), d || i.on("click" + p, _.outside), k) {
                    b();
                    return
                }
                var S = "transform " + Z.duration + "ms " + Z.easing;
                if (_.overlay && (L = _.menu.prev(), _.overlay.show().append(_.menu)), Z.animOver) {
                    n(_.menu).add(S).set({
                        x: Z.animDirect * We,
                        height: ge
                    }).start({
                        x: 0
                    }).then(b), _.overlay && _.overlay.width(We);
                    return
                }
                var N = l + Qe;
                n(_.menu).add(S).set({
                    y: -N
                }).start({
                    y: 0
                }).then(b);

                function b() {
                    _.button.attr("aria-expanded", "true")
                }
            }

            function ve(_) {
                var k = _.config,
                    Z = k.docHeight ? i.height() : s.height();
                return k.animOver ? _.menu.height(Z) : _.el.css("position") !== "fixed" && (Z -= _.el.outerHeight(!0)), _.overlay && _.overlay.height(Z), Z
            }

            function ae(_, k) {
                if (!_.open) return;
                _.open = !1, _.button.removeClass(h);
                var Z = _.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (k = !0), w.outro(0, _.el[0]), i.off("click" + p, _.outside), k) {
                    n(_.menu).stop(), T();
                    return
                }
                var z = "transform " + Z.duration + "ms " + Z.easing2,
                    ge = _.menu.outerHeight(!0),
                    Qe = _.menu.outerWidth(!0),
                    We = _.el.height();
                if (Z.animOver) {
                    n(_.menu).add(z).start({
                        x: Qe * Z.animDirect
                    }).then(T);
                    return
                }
                var l = We + ge;
                n(_.menu).add(z).start({
                    y: -l
                }).then(T);

                function T() {
                    _.menu.height(""), n(_.menu).set({
                        x: 0,
                        y: 0
                    }), _.menu.each(R), _.links.removeClass(x), _.dropdowns.removeClass(y), _.dropdownToggle.removeClass(C), _.dropdownList.removeClass(A), _.overlay && _.overlay.children().length && (L.length ? _.menu.insertAfter(L) : _.menu.prependTo(_.parent), _.overlay.attr("style", "").hide()), _.el.triggerHandler("w-close"), _.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    Hs();
    js();
    zs();
    $s();
    En();
    ly();
    dy();
    vy();
    hy();
    my();
    Ty();
    wy();
    Ay();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675077048352
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021a1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675077048352
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675077048352
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675077048352
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675077048352
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|1219e200-52c4-35bf-8953-7e6c2b8021b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1675077048352
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1678528645803
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678529817493
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|86c91bd5-e9ee-0b44-ce47-eba8e28aa6b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|86c91bd5-e9ee-0b44-ce47-eba8e28aa6b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678528898412
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|6de308ca-4c36-5297-9527-6b9a2a079ac7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|6de308ca-4c36-5297-9527-6b9a2a079ac7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680437001591
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|c2c4d9f9-a595-6c0c-9b90-cce609c69a00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|c2c4d9f9-a595-6c0c-9b90-cce609c69a00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680437372790
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-390"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|4ec58a3d-a5d9-5831-0ed4-dbbddc5b53cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|4ec58a3d-a5d9-5831-0ed4-dbbddc5b53cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438131506
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|85d5d996-a774-3a53-e2c1-d20698047de3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|85d5d996-a774-3a53-e2c1-d20698047de3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438378046
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|ddbfa7d5-a54c-ffe5-a24d-a1bbd914c345",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|ddbfa7d5-a54c-ffe5-a24d-a1bbd914c345",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438391065
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|10ac3773-b753-2564-a1bc-9a305f4f08ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|10ac3773-b753-2564-a1bc-9a305f4f08ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438418640
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|a20c23e9-7c7d-199a-d275-17ff73f09aac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|a20c23e9-7c7d-199a-d275-17ff73f09aac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438487644
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438588291
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438588291
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438588291
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|da603d5c-0c77-380f-79d1-03c033209bc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438588291
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|d55a735e-11ae-b1cd-d319-f9af8d40e59f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|d55a735e-11ae-b1cd-d319-f9af8d40e59f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438942055
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|e7e0db94-eccb-050b-441c-0ae40761a2a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|e7e0db94-eccb-050b-441c-0ae40761a2a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680438945097
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|35149abf-401a-d80f-7499-b37fcda0c07b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|35149abf-401a-d80f-7499-b37fcda0c07b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680439028777
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|45668a96-317d-596e-de7a-16cdc7521648",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|45668a96-317d-596e-de7a-16cdc7521648",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680439029466
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|c5daf907-8a43-14f7-fbdf-0ad72810ef08",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|c5daf907-8a43-14f7-fbdf-0ad72810ef08",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679401386525
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|af9f91a3-df66-8f1b-109d-ea4aa4dc58f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|af9f91a3-df66-8f1b-109d-ea4aa4dc58f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679478813686
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|af9f91a3-df66-8f1b-109d-ea4aa4dc58f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|af9f91a3-df66-8f1b-109d-ea4aa4dc58f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679478813686
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|bc46a9d1-32ec-a20e-ea44-b201a86f09fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|bc46a9d1-32ec-a20e-ea44-b201a86f09fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680442540961
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|0c3d69c2-e33f-199e-20e3-730706441754",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|0c3d69c2-e33f-199e-20e3-730706441754",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680442725687
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f83|3c61031f-4f7c-3fb7-4007-e5d22b10f6b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f83|3c61031f-4f7c-3fb7-4007-e5d22b10f6b5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680442735787
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf75",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680088197155
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680085145455
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680088254764
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1679834040695
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-233"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680085018576
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680088448544
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|faca0dbc-8ca0-1eea-268c-3269965baf6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680088178729
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc82",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc82",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521690768
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521690768
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc7f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc7f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521690768
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521690768
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc8c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc8c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521690768
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc8f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc8f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521690768
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e46",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e3f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e3f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e37",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e16",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e16",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e16",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e16",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e1b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e3f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e3f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "638e8a83-a803-4327-3c71-6f1e736c8e27",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680521715293
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678528898412
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1678528645803
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-307"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678529817493
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678526683570
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672046932713
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-39-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1672048008575
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac727",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac727",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678450115327
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac73a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac73a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673703361872
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac733",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac733",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672050465680
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac74a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac74a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672048960128
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-390"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac72e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672046932707
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac723",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac723",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673773242888
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|967b8881-a115-9cb7-6d39-264008500f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|967b8881-a115-9cb7-6d39-264008500f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673267669855
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|967b8881-a115-9cb7-6d39-264008500f3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|967b8881-a115-9cb7-6d39-264008500f3e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1678530194140
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|967b8881-a115-9cb7-6d39-264008500f42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|967b8881-a115-9cb7-6d39-264008500f42",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673702580329
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|62e131f2-830b-f069-9cab-3e071eded366",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|62e131f2-830b-f069-9cab-3e071eded366",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673268007549
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|62e131f2-830b-f069-9cab-3e071eded368",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|62e131f2-830b-f069-9cab-3e071eded368",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1678530253962
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|62e131f2-830b-f069-9cab-3e071eded36c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|62e131f2-830b-f069-9cab-3e071eded36c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673268048838
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|3cd0447a-c2a4-b518-9afe-94b23009b00b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|3cd0447a-c2a4-b518-9afe-94b23009b00b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673268020202
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|3cd0447a-c2a4-b518-9afe-94b23009b00d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|3cd0447a-c2a4-b518-9afe-94b23009b00d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1678530264698
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|3cd0447a-c2a4-b518-9afe-94b23009b011",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|3cd0447a-c2a4-b518-9afe-94b23009b011",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673268059956
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0c8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0c8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 90,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1680594014528
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680594014528
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0cf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0cf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680594014528
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680594014528
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680594014528
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|257ebbee-0625-2940-7e73-18a88cc6d0d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680594014528
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|48a14904-d927-05c1-4e3e-4c71e53a4242",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|48a14904-d927-05c1-4e3e-4c71e53a4242",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1673698847964
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6cf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6cf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-52-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-52-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1678628047019
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6c0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|c5bcecb6-b877-25a2-1daa-4a76ec49b6b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1678628047019
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|1bcbd0a2-5444-c1eb-1ec9-f763a4534f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|1bcbd0a2-5444-c1eb-1ec9-f763a4534f3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680597342537
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-390"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7f|2049c77f-70c9-9b07-42a4-49bd3f26ac72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7f|2049c77f-70c9-9b07-42a4-49bd3f26ac72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667404124102
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7f|70c5688d-ddf8-fce7-040f-b660997766d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7f|70c5688d-ddf8-fce7-040f-b660997766d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680085551608
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7f|e7624de3-de82-0dde-e849-005284317272",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7f|e7624de3-de82-0dde-e849-005284317272",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680085569908
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7f|e7624de3-de82-0dde-e849-005284317275",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7f|e7624de3-de82-0dde-e849-005284317275",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680085580868
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680607155146
        },
        "e-210": {
            "id": "e-210",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-209"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680607155146
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680607155146
        },
        "e-212": {
            "id": "e-212",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-211"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680607155146
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680607155146
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-213"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680607155146
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50af08",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50af08",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403439432
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aedd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aedd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672059220757
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403440576
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aee9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aee9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1679403370853
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403441119
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1679403441119
        },
        "e-249": {
            "id": "e-249",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aee2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aee2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679401386525
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aeff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aeff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403440576
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aee7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403370853
        },
        "e-255": {
            "id": "e-255",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-250"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50af02",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50af02",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403439432
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aeed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aeed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403387653
        },
        "e-258": {
            "id": "e-258",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50af04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50af04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1679403439432
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-259"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aef6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679403441119
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aefb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e68aa8a9-1352-b0fc-4978-d9c3bf50aefb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1679403440576
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef769d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef769d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000606300
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-269"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef76a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef76a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000629497
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef76a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef76a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000765756
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef76ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|47722800-c0e6-d5cc-8670-f44062ef76ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679999930878
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-284"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5c5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679999939820
        },
        "e-285": {
            "id": "e-285",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000146345
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5c8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5c8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679999953069
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-297"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000407128
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000099160
        },
        "e-292": {
            "id": "e-292",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000940392
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-288"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000126216
        },
        "e-296": {
            "id": "e-296",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000436406
        },
        "e-298": {
            "id": "e-298",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-286"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5ea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5ea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000937337
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|1e55ef52-3637-dfbd-4960-0a65fa38f5f4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680000477918
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c63d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c63d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-321"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c651",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c659",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c659",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-327"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c668",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c668",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-328": {
            "id": "e-328",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-329"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c66e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c66e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-330": {
            "id": "e-330",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-331"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c67f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c67f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-332": {
            "id": "e-332",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-333"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c685",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c685",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-334": {
            "id": "e-334",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-335"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c696",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|cc50b004-7f5b-68b5-25ff-cd16b985c696",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680678648649
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-337"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|9a3f3166-cc92-f019-c7e5-acaf841b7a89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|9a3f3166-cc92-f019-c7e5-acaf841b7a89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684071320
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-336"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|9a3f3166-cc92-f019-c7e5-acaf841b7a89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|9a3f3166-cc92-f019-c7e5-acaf841b7a89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684071320
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|f91dd687-e212-5edf-16ab-3b75247d3c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|f91dd687-e212-5edf-16ab-3b75247d3c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684072193
        },
        "e-339": {
            "id": "e-339",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-338"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|f91dd687-e212-5edf-16ab-3b75247d3c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|f91dd687-e212-5edf-16ab-3b75247d3c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684072193
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|7ca1eedb-38fa-5f5d-d6cb-c1d6f19e3b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|7ca1eedb-38fa-5f5d-d6cb-c1d6f19e3b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684073400
        },
        "e-341": {
            "id": "e-341",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-340"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|7ca1eedb-38fa-5f5d-d6cb-c1d6f19e3b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|7ca1eedb-38fa-5f5d-d6cb-c1d6f19e3b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684073400
        },
        "e-342": {
            "id": "e-342",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-343"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|97926917-d3cb-190e-862a-1347b3faa8f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|97926917-d3cb-190e-862a-1347b3faa8f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684073935
        },
        "e-343": {
            "id": "e-343",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-342"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|97926917-d3cb-190e-862a-1347b3faa8f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|97926917-d3cb-190e-862a-1347b3faa8f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680684073935
        },
        "e-344": {
            "id": "e-344",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-345"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680686442158
        },
        "e-345": {
            "id": "e-345",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-344"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680686442158
        },
        "e-346": {
            "id": "e-346",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-52-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-52-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 80,
                "restingState": 50
            }],
            "createdOn": 1680686442158
        },
        "e-347": {
            "id": "e-347",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-348"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680686442158
        },
        "e-349": {
            "id": "e-349",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-350"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680686442158
        },
        "e-350": {
            "id": "e-350",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-349"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-2625666721fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680686442158
        },
        "e-351": {
            "id": "e-351",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-352"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-262566672208",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7c|c8abc8f2-8650-06aa-eb2c-262566672208",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680686442158
        },
        "e-353": {
            "id": "e-353",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-354"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|21e9b61c-55ef-d949-d65e-18106c0d127a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|21e9b61c-55ef-d949-d65e-18106c0d127a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680001144738
        },
        "e-355": {
            "id": "e-355",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-356"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|21e9b61c-55ef-d949-d65e-18106c0d127f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|21e9b61c-55ef-d949-d65e-18106c0d127f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680001144738
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|21e9b61c-55ef-d949-d65e-18106c0d1283",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|21e9b61c-55ef-d949-d65e-18106c0d1283",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680001198052
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-360"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|2791efa0-cdf5-54b7-0ae7-a8b474b7e76c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|2791efa0-cdf5-54b7-0ae7-a8b474b7e76c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679838530938
        },
        "e-360": {
            "id": "e-360",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-359"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|2791efa0-cdf5-54b7-0ae7-a8b474b7e76c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|2791efa0-cdf5-54b7-0ae7-a8b474b7e76c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679838530938
        },
        "e-361": {
            "id": "e-361",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-362"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|2791efa0-cdf5-54b7-0ae7-a8b474b7e76c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|2791efa0-cdf5-54b7-0ae7-a8b474b7e76c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1679838530938
        },
        "e-363": {
            "id": "e-363",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-364"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|f3431487-5766-ed99-6b52-950ad79844e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|f3431487-5766-ed99-6b52-950ad79844e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680694664641
        },
        "e-364": {
            "id": "e-364",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-363"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|f3431487-5766-ed99-6b52-950ad79844e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|f3431487-5766-ed99-6b52-950ad79844e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680694664641
        },
        "e-365": {
            "id": "e-365",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-366"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|f3431487-5766-ed99-6b52-950ad79844e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|f3431487-5766-ed99-6b52-950ad79844e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680694664641
        },
        "e-367": {
            "id": "e-367",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-368"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "b4385266-eeac-b536-43f0-2e86d4b6b0aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "b4385266-eeac-b536-43f0-2e86d4b6b0aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680695334228
        },
        "e-369": {
            "id": "e-369",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-370"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|6bc6a2ed-dfe1-b37f-e69a-08e0d0115e03",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|6bc6a2ed-dfe1-b37f-e69a-08e0d0115e03",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680696935455
        },
        "e-371": {
            "id": "e-371",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-372"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|635019e0-ae8e-df59-0bb0-35bc63d3b973",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|635019e0-ae8e-df59-0bb0-35bc63d3b973",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680696951005
        },
        "e-373": {
            "id": "e-373",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-374"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7a|e61bccdf-21d2-63e4-cc49-a535fc9ea540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7a|e61bccdf-21d2-63e4-cc49-a535fc9ea540",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680696960487
        },
        "e-375": {
            "id": "e-375",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-376"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a9418d8d-96ba-ccf9-8640-cf88a0d2c2f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a9418d8d-96ba-ccf9-8640-cf88a0d2c2f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680697305318
        },
        "e-377": {
            "id": "e-377",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-378"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|2ff09a4e-5aa8-192e-a09e-c43b8b16652e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|2ff09a4e-5aa8-192e-a09e-c43b8b16652e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680697431035
        },
        "e-385": {
            "id": "e-385",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-386"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc92",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "96f524a3-8467-bda1-ad67-eaf60d73cc92",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680701692095
        },
        "e-387": {
            "id": "e-387",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-388"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|0758d1db-4aae-78e1-a36a-e8bdabe81594",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|0758d1db-4aae-78e1-a36a-e8bdabe81594",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680852530330
        },
        "e-389": {
            "id": "e-389",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-393"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a6681521e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a6681521e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219573843
        },
        "e-391": {
            "id": "e-391",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-400"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815211",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815211",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219438200
        },
        "e-394": {
            "id": "e-394",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-390"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815238",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815238",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219572038
        },
        "e-395": {
            "id": "e-395",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-392"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a6681522b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a6681522b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219573101
        },
        "e-401": {
            "id": "e-401",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-399"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815207",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815207",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672218735371
        },
        "e-402": {
            "id": "e-402",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-396"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815221",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815221",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219573101
        },
        "e-403": {
            "id": "e-403",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-398"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815214",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815214",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219573843
        },
        "e-404": {
            "id": "e-404",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-397"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a6681522e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a6681522e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1672219572038
        },
        "e-405": {
            "id": "e-405",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-406"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|d566c034-4a50-da01-0863-c947e3e57d78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|d566c034-4a50-da01-0863-c947e3e57d78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680862460581
        },
        "e-407": {
            "id": "e-407",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-408"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|d566c034-4a50-da01-0863-c947e3e57d78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|d566c034-4a50-da01-0863-c947e3e57d78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680862460581
        },
        "e-408": {
            "id": "e-408",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|d566c034-4a50-da01-0863-c947e3e57d78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|d566c034-4a50-da01-0863-c947e3e57d78",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680862460581
        },
        "e-409": {
            "id": "e-409",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-410"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815200",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a066f558-8d56-f3a9-b93e-045a66815200",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680862505516
        },
        "e-411": {
            "id": "e-411",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-412"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|1dddb222-cfea-5c3b-547b-1594b65f476e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|1dddb222-cfea-5c3b-547b-1594b65f476e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680946740468
        },
        "e-413": {
            "id": "e-413",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-414"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f80|7b8d5311-55bb-1d9d-6a99-d0507f135851",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f80|7b8d5311-55bb-1d9d-6a99-d0507f135851",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1680946755735
        },
        "e-415": {
            "id": "e-415",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-416"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "fe9077ee-4e8c-8714-6858-cc75f2cf91fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "fe9077ee-4e8c-8714-6858-cc75f2cf91fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942154273
        },
        "e-417": {
            "id": "e-417",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-418"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|2a511393-585e-b1a8-e7cc-561ff52ee43a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|2a511393-585e-b1a8-e7cc-561ff52ee43a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942173619
        },
        "e-419": {
            "id": "e-419",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-420"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|e155043b-2497-c146-a3a0-e7f85b2a4d0c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|e155043b-2497-c146-a3a0-e7f85b2a4d0c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942225671
        },
        "e-421": {
            "id": "e-421",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-422"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|a18f8fdb-5f8d-c914-2721-51d0c571b015",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|a18f8fdb-5f8d-c914-2721-51d0c571b015",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942226718
        },
        "e-423": {
            "id": "e-423",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-424"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "f3d6d8dd-1489-e269-12ca-d67e8d94efd8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f3d6d8dd-1489-e269-12ca-d67e8d94efd8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942477927
        },
        "e-425": {
            "id": "e-425",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-426"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|648ba29a-8ba6-1d97-f7ff-72e7a78ade9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|648ba29a-8ba6-1d97-f7ff-72e7a78ade9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942493385
        },
        "e-427": {
            "id": "e-427",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-428"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|48c7c643-3628-dcaf-b190-981af288c2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|48c7c643-3628-dcaf-b190-981af288c2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942495405
        },
        "e-429": {
            "id": "e-429",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-430"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|8031c7ab-2311-4387-c7cf-8c9cf2b46f70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|8031c7ab-2311-4387-c7cf-8c9cf2b46f70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942495737
        },
        "e-431": {
            "id": "e-431",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-432"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|d0914e13-bb72-c54b-9c78-4fd362a43911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|d0914e13-bb72-c54b-9c78-4fd362a43911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942496090
        },
        "e-433": {
            "id": "e-433",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-434"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|5bf20e10-78df-37b5-0083-226b40b79f9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|5bf20e10-78df-37b5-0083-226b40b79f9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942496434
        },
        "e-435": {
            "id": "e-435",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-436"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|b9743e1a-a935-d99b-2483-c7e6d8118988",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|b9743e1a-a935-d99b-2483-c7e6d8118988",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942496829
        },
        "e-437": {
            "id": "e-437",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-438"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|875dff69-9586-3f14-8db7-cc05758b405b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|875dff69-9586-3f14-8db7-cc05758b405b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942531042
        },
        "e-439": {
            "id": "e-439",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-440"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|5215a97b-6d0d-6965-2086-e1455a8b356f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|5215a97b-6d0d-6965-2086-e1455a8b356f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942531262
        },
        "e-441": {
            "id": "e-441",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-442"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|d3d04f08-1faa-1e60-00fb-3adb1422b42f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|d3d04f08-1faa-1e60-00fb-3adb1422b42f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942531494
        },
        "e-443": {
            "id": "e-443",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-444"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|36c00003-729e-d266-c41f-d8290836378d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|36c00003-729e-d266-c41f-d8290836378d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942531706
        },
        "e-445": {
            "id": "e-445",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-446"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|2b6edbe8-5439-4aed-3c4f-4fbfd3be7133",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|2b6edbe8-5439-4aed-3c4f-4fbfd3be7133",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942532002
        },
        "e-447": {
            "id": "e-447",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-448"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f77|6f244cfe-d81e-75c1-a8b7-78b9a60d8e99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f77|6f244cfe-d81e-75c1-a8b7-78b9a60d8e99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942532309
        },
        "e-449": {
            "id": "e-449",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-450"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2a511393-585e-b1a8-e7cc-561ff52ee43a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2a511393-585e-b1a8-e7cc-561ff52ee43a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942718819
        },
        "e-451": {
            "id": "e-451",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-452"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "e155043b-2497-c146-a3a0-e7f85b2a4d0c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "e155043b-2497-c146-a3a0-e7f85b2a4d0c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942729049
        },
        "e-453": {
            "id": "e-453",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-454"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "a18f8fdb-5f8d-c914-2721-51d0c571b015",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "a18f8fdb-5f8d-c914-2721-51d0c571b015",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942736185
        },
        "e-455": {
            "id": "e-455",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-456"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "648ba29a-8ba6-1d97-f7ff-72e7a78ade9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "648ba29a-8ba6-1d97-f7ff-72e7a78ade9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942755422
        },
        "e-457": {
            "id": "e-457",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-458"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "48c7c643-3628-dcaf-b190-981af288c2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "48c7c643-3628-dcaf-b190-981af288c2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942762129
        },
        "e-459": {
            "id": "e-459",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-460"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8031c7ab-2311-4387-c7cf-8c9cf2b46f70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8031c7ab-2311-4387-c7cf-8c9cf2b46f70",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942771444
        },
        "e-461": {
            "id": "e-461",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-462"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d0914e13-bb72-c54b-9c78-4fd362a43911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d0914e13-bb72-c54b-9c78-4fd362a43911",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942778341
        },
        "e-463": {
            "id": "e-463",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-464"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5bf20e10-78df-37b5-0083-226b40b79f9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5bf20e10-78df-37b5-0083-226b40b79f9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942786347
        },
        "e-465": {
            "id": "e-465",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-466"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "b9743e1a-a935-d99b-2483-c7e6d8118988",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "b9743e1a-a935-d99b-2483-c7e6d8118988",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942795122
        },
        "e-467": {
            "id": "e-467",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-468"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "875dff69-9586-3f14-8db7-cc05758b405b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "875dff69-9586-3f14-8db7-cc05758b405b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942807973
        },
        "e-469": {
            "id": "e-469",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-470"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "5215a97b-6d0d-6965-2086-e1455a8b356f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "5215a97b-6d0d-6965-2086-e1455a8b356f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942815831
        },
        "e-471": {
            "id": "e-471",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-472"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d3d04f08-1faa-1e60-00fb-3adb1422b42f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d3d04f08-1faa-1e60-00fb-3adb1422b42f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942822734
        },
        "e-473": {
            "id": "e-473",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-474"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "36c00003-729e-d266-c41f-d8290836378d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "36c00003-729e-d266-c41f-d8290836378d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942830153
        },
        "e-475": {
            "id": "e-475",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-476"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "2b6edbe8-5439-4aed-3c4f-4fbfd3be7133",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "2b6edbe8-5439-4aed-3c4f-4fbfd3be7133",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942836463
        },
        "e-477": {
            "id": "e-477",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-478"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6f244cfe-d81e-75c1-a8b7-78b9a60d8e99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6f244cfe-d81e-75c1-a8b7-78b9a60d8e99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682942843558
        },
        "e-479": {
            "id": "e-479",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-480"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|bfa25e44-72f1-5b56-5e76-bbbc16da8c6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|bfa25e44-72f1-5b56-5e76-bbbc16da8c6e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943135308
        },
        "e-481": {
            "id": "e-481",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-482"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|15a70c76-1067-b862-0aab-d811bd72d158",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|15a70c76-1067-b862-0aab-d811bd72d158",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943145592
        },
        "e-483": {
            "id": "e-483",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-484"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|dcd09eaf-ef31-1c6c-5f56-f3e629da5029",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|dcd09eaf-ef31-1c6c-5f56-f3e629da5029",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943145998
        },
        "e-485": {
            "id": "e-485",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-486"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|40da39d0-6232-8453-a57e-66544482e035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|40da39d0-6232-8453-a57e-66544482e035",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943147380
        },
        "e-487": {
            "id": "e-487",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-488"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|96988252-ab31-15e5-10bb-5c3284cd24e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|96988252-ab31-15e5-10bb-5c3284cd24e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943149323
        },
        "e-489": {
            "id": "e-489",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-490"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|cbaddcf4-8061-54a1-1759-360e8b7c70e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943213841
        },
        "e-491": {
            "id": "e-491",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-492"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|c0a948df-2f35-3d7f-6f6a-aa6a0ec0ff91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|c0a948df-2f35-3d7f-6f6a-aa6a0ec0ff91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682943223291
        },
        "e-497": {
            "id": "e-497",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-498"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "652a81c5d2f516632fee0f7e|50a4c977-0c85-e64b-b23e-d59f3863b19b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "652a81c5d2f516632fee0f7e|50a4c977-0c85-e64b-b23e-d59f3863b19b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1682945835453
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Accordion - open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-plus-icon",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c24637"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1666428767349
        },
        "a-2": {
            "id": "a-2",
            "title": "Accordion - close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-plus-icon",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c24637"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content",
                            "selectorGuids": ["abdaa3db-f545-9451-d48a-410074c2463f"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1666428767349
        },
        "a-3": {
            "id": "a-3",
            "title": "Animation Text Reveal Opacity",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".overlay-animation-text-reveal-opacity",
                                "selectorGuids": ["1702b657-6cf3-a475-f499-c0244ef31599"]
                            },
                            "widthValue": 103,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".overlay-animation-text-reveal-opacity",
                                "selectorGuids": ["1702b657-6cf3-a475-f499-c0244ef31599"]
                            },
                            "widthValue": 0,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1678528660821
        },
        "a-6": {
            "id": "a-6",
            "title": "Fade In & Move -T 0.6s - D 0.0",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-5": {
            "id": "a-5",
            "title": "Heading Animation -D  0.0",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-7": {
            "id": "a-7",
            "title": "Heading Animation -D  0.2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-8": {
            "id": "a-8",
            "title": "Heading Animation -D  0.4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-11": {
            "id": "a-11",
            "title": "Heading Animation -D  0.6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-4": {
            "id": "a-4",
            "title": "Fade In & Move -T 1s - D 0.0",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-9": {
            "id": "a-9",
            "title": "Fade In & Move -T 1s - D 0.2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-12": {
            "id": "a-12",
            "title": "Fade In & Move -T 1s - D 0.4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-13": {
            "id": "a-13",
            "title": "Fade In & Move -T 1s - D 0.6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-10": {
            "id": "a-10",
            "title": "Fade In & Move -T 0.6s - D 0.2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-14": {
            "id": "a-14",
            "title": "Fade In & Move -T 0.6s - D 0.4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-15": {
            "id": "a-15",
            "title": "Fade In & Move -T 0.6s - D 0.6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-17": {
            "id": "a-17",
            "title": "Fade In & Move -T 1s - D 1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-16": {
            "id": "a-16",
            "title": "Fade In & Move -T 1s - D 0.8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-19": {
            "id": "a-19",
            "title": "Fade In & Move -T 0.6s - D 1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-18": {
            "id": "a-18",
            "title": "Fade In & Move -T 0.6s - D 0.8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f83|4171c7cf-deaf-9826-f82b-3ba1c4f18a50"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-20": {
            "id": "a-20",
            "title": "Image Swipe Reveal -D 0.0",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-swipe-reveal-overlay",
                            "selectorGuids": ["10769bf0-a537-fa5d-570a-3c3837d553ae"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-swipe-reveal-overlay",
                            "selectorGuids": ["10769bf0-a537-fa5d-570a-3c3837d553ae"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-swipe-reveal-overlay",
                            "selectorGuids": ["10769bf0-a537-fa5d-570a-3c3837d553ae"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667385400437
        },
        "a-21": {
            "id": "a-21",
            "title": "Rotate Text - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-one",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210125"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-two",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210127"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-one",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210125"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-two",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210127"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1666090859961
        },
        "a-22": {
            "id": "a-22",
            "title": "Rotate Text - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-one",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210125"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-two",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210127"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1666090859961
        },
        "a-23": {
            "id": "a-23",
            "title": "Image Zoom",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-zoom",
                            "selectorGuids": ["0392f7bb-b48f-2d89-8fbf-98258eca59b2"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-zoom",
                            "selectorGuids": ["0392f7bb-b48f-2d89-8fbf-98258eca59b2"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1680442548358
        },
        "a-28": {
            "id": "a-28",
            "title": "Block Reveal - Delay - 0.5 Opacity and Slide from Bottom",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667401208471
        },
        "a-26": {
            "id": "a-26",
            "title": "Text Black Overlay Reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".black-overlay",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1c"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".black-overlay",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1c"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1680085022257
        },
        "a-29": {
            "id": "a-29",
            "title": "Block Reveal - Delay - 0.6 Opacity and Slide from Bottom 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667401208471
        },
        "a-24": {
            "id": "a-24",
            "title": "Home Page Hero Text on Scroll",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-scroll-text._1st",
                                "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1e", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2b"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-scroll-text._2th",
                                "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1e", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2a"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-24-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-scroll-text._2th",
                                "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1e", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2a"]
                            },
                            "xValue": 2,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-24-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-scroll-text._1st",
                                "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1e", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2b"]
                            },
                            "xValue": -2,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1667117725240
        },
        "a-25": {
            "id": "a-25",
            "title": "Header Image Zoom Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".herro-image._1st.zoom",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1f", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2b", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2c"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".herro-image._1st.zoom",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed1f", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2b", "8a18293b-78c3-14dd-0b1f-ad2655c1ed2c"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1680092565890
        },
        "a-27": {
            "id": "a-27",
            "title": "Heading Animation - 0.4 Delay",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content-2",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed26"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content-2",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed26"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-30": {
            "id": "a-30",
            "title": "Mobile Menu - Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "selector": ".mobile-menu-text-move",
                            "selectorGuids": ["a7ddd067-ae74-6159-c82c-d615847f5c4f"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu-close-button",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f6119"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "inOutCirc",
                        "duration": 1000,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f611b"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1667302888273
        },
        "a-31": {
            "id": "a-31",
            "title": "Animation Rotate Text - Hover In 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-one",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210125"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-two",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210127"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-one",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210125"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-two",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210127"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1666090859961
        },
        "a-33": {
            "id": "a-33",
            "title": "Mobile Menu - Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f611b"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f611b"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu-text-move",
                            "selectorGuids": ["a7ddd067-ae74-6159-c82c-d615847f5c4f"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu-close-button",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f6119"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 1000,
                        "target": {
                            "selector": ".mobile-menu",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f611b"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "selector": ".mobile-menu-text-move",
                            "selectorGuids": ["a7ddd067-ae74-6159-c82c-d615847f5c4f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".mobile-menu-close-button",
                            "selectorGuids": ["4a56fc0a-8864-2aaa-9ade-168ce92f6119"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667302888273
        },
        "a-32": {
            "id": "a-32",
            "title": "Animation Rotate Text - Hover Out 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-one",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210125"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-rotate-text-two",
                            "selectorGuids": ["d2d7d22d-9efb-f4f0-b63d-b88649210127"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1666090859961
        },
        "a-34": {
            "id": "a-34",
            "title": "Heading Animation - 0.0 Delay",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content-2",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed26"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content-2",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed26"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-35": {
            "id": "a-35",
            "title": "Fade In and Move On Scroll",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c4"
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f77|26cb06e7-be16-d273-5b3d-580f820ac4c4"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1678529835569
        },
        "a-38": {
            "id": "a-38",
            "title": "Project Hover - out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-background",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a4"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.one",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ae"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.four",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20af"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-animation-trigger._1th",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77a", "5783f129-797e-14da-3b9e-43d35bbf20b0"]
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-animation-trigger._2th.phone-width",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77a", "5783f129-797e-14da-3b9e-43d35bbf20aa", "5783f129-797e-14da-3b9e-43d35bbf20b2"]
                        },
                        "xValue": 0,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.five",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ab"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.two",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ac"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.six",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ad"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.three",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20b1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "xValue": 1,
                        "yValue": 1.2,
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1672046939579
        },
        "a-39": {
            "id": "a-39",
            "title": "Move Card Mouse",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-card",
                                "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                            },
                            "xValue": -20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-card",
                                "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                            },
                            "zValue": -3,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-39-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-card",
                                "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                            },
                            "xValue": 20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-card",
                                "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                            },
                            "zValue": 3,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }]
            }, {
                "id": "a-39-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1672048033288
        },
        "a-36": {
            "id": "a-36",
            "title": "Heading Animation - 0.0 Delay 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-41": {
            "id": "a-41",
            "title": "Heading Animation - 0.2 Delay",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-42": {
            "id": "a-42",
            "title": "Line Separator Reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac74a"
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": true,
                            "id": "652a81c5d2f516632fee0f77|a462faec-7278-2a54-4b8b-8343646ac74a"
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672048973498
        },
        "a-37": {
            "id": "a-37",
            "title": "Project Hover - In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-background",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a4"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "xValue": 1,
                        "yValue": 1.2,
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "yValue": 25,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.one",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ae"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.two",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ac"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.three",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20b1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.four",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20af"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.five",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ab"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.six",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ad"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-background",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a4"]
                        },
                        "widthValue": 100,
                        "heightValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-animation-trigger._1th",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77a", "5783f129-797e-14da-3b9e-43d35bbf20b0"]
                        },
                        "xValue": 4,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-animation-trigger._2th",
                            "selectorGuids": ["b102cb9f-c243-ada0-8e03-2c9fb28ae77a", "5783f129-797e-14da-3b9e-43d35bbf20aa"]
                        },
                        "xValue": -4,
                        "xUnit": "em",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-15",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-37-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-18",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-card",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf209a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.four",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20af"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-20",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.one",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ae"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-21",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.two",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ac"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-22",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.five",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ab"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-23",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.three",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20b1"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-37-n-24",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-number-span-text.six",
                            "selectorGuids": ["5783f129-797e-14da-3b9e-43d35bbf20a7", "5783f129-797e-14da-3b9e-43d35bbf20ad"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672046939579
        },
        "a-44": {
            "id": "a-44",
            "title": "Block Reveal - Delay - 0.4 Opacity and Slide from Bottom",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e446f2e4f705|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e446f2e4f705|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e446f2e4f705|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-44-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e446f2e4f705|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667401208471
        },
        "a-73": {
            "id": "a-73",
            "title": "Header Project Image Zoom Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-header-image.zoom",
                            "selectorGuids": ["7e2322ed-a075-d2b2-3b2c-189aeab77a08", "4aa9a1c9-3a2e-cf50-43ad-c5e588173951"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-73-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-header-image.zoom",
                            "selectorGuids": ["7e2322ed-a075-d2b2-3b2c-189aeab77a08", "4aa9a1c9-3a2e-cf50-43ad-c5e588173951"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1680092565890
        },
        "a-51": {
            "id": "a-51",
            "title": "Blog Article - Reveal Title",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-title",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8b7"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-arrow-container",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c9"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-title",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8b7"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-51-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-arrow-container",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c9"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667387871533
        },
        "a-52": {
            "id": "a-52",
            "title": "Blog Post",
            "continuousParameterGroups": [{
                "id": "a-52-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-52-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-read-circle",
                                "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-52-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-read-circle",
                                "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                            },
                            "xValue": 100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-52-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-52-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-read-circle",
                                "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-52-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".blog-read-circle",
                                "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1666525389702
        },
        "a-54": {
            "id": "a-54",
            "title": "Blog Post - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "874c3b56",
                        "rValue": 71,
                        "bValue": 103,
                        "gValue": 84,
                        "aValue": 1
                    }
                }, {
                    "id": "a-54-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arow-two",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-overflow-hidden",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c4"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-54-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-overlay",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8bc"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-read-circle",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1666523108268
        },
        "a-49": {
            "id": "a-49",
            "title": "Blog Post - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-overlay",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8bc"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-overlay",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8bc"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-49-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-read-circle",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-49-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-read-circle",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "f879850d",
                        "rValue": 16,
                        "bValue": 40,
                        "gValue": 24,
                        "aValue": 1
                    }
                }, {
                    "id": "a-49-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arow-two",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-overflow-hidden",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c4"]
                        },
                        "xValue": 5,
                        "yValue": -5,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image-overlay",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8bc"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-read-circle",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8ba"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1666523108268
        },
        "a-57": {
            "id": "a-57",
            "title": "Block Reveal - Delay - 0.2 Opacity and Slide from Bottom 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64185d7ee78675389d0224b3|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667401208471
        },
        "a-62": {
            "id": "a-62",
            "title": "Heading Animation - 0.2 Delay 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content-2",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed26"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-62-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-content-2",
                            "selectorGuids": ["8a18293b-78c3-14dd-0b1f-ad2655c1ed26"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667380505057
        },
        "a-65": {
            "id": "a-65",
            "title": "Numbers Flip Delay 0.2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.one",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e30270"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.two",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.three",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.four",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026c"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.five",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026f"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.six",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026e"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.one",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e30270"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.four",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.five",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.two",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026b"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.six",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".number-span-text.three",
                            "selectorGuids": ["c3475834-2f84-33a5-581f-f8dc96e30268", "c3475834-2f84-33a5-581f-f8dc96e3026a"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672046939579
        },
        "a-48": {
            "id": "a-48",
            "title": "Arrow Button - Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c7"]
                        },
                        "widthValue": 60,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1667475367916
        },
        "a-53": {
            "id": "a-53",
            "title": "Arrow Button - Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c7"]
                        },
                        "widthValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1667475367916
        },
        "a-66": {
            "id": "a-66",
            "title": "Arrow Button - Reveal 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-button-text-white",
                            "selectorGuids": ["adff9bdc-7de1-5d06-760e-86e7c3f6c37d"]
                        },
                        "yValue": 110,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c7"]
                        },
                        "yValue": 110,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".arrow-button-text-white",
                            "selectorGuids": ["adff9bdc-7de1-5d06-760e-86e7c3f6c37d"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-66-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["36f1c2ea-28b1-494c-37de-32713e26d8c7"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667478903521
        },
        "a-72": {
            "id": "a-72",
            "title": "Image Swipe Reveal - CTA -D 0.0",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-swipe-reveal-overlay-cta",
                            "selectorGuids": ["de498f79-6f0f-d0eb-fcae-b4c6ff3a3731"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-72-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-72-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-72-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "64084e43cd88e45b1be4f700|5e279807-d2c3-0018-0cc2-4490fb817509"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-72-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutCirc",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-swipe-reveal-overlay-cta",
                            "selectorGuids": ["de498f79-6f0f-d0eb-fcae-b4c6ff3a3731"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-72-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".animation-image-swipe-reveal-overlay-cta",
                            "selectorGuids": ["de498f79-6f0f-d0eb-fcae-b4c6ff3a3731"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667385400437
        },
        "a-75": {
            "id": "a-75",
            "title": "Block Reveal - Delay 0.8 - Opacity and Slide from Bottom 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-75-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "640876eb9248b721ef278051|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 15,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-75-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "640876eb9248b721ef278051|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "640876eb9248b721ef278051|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-75-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "640876eb9248b721ef278051|fa6564d8-ffc8-af86-cdd4-3f6fd9d9542e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667401208471
        },
        "a-74": {
            "id": "a-74",
            "title": "Testimonial Header Reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".testimonial-name",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee665"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._1th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66e"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._2th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._3th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66d"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._4th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee670"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._5th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66f"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-74-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".testimonial-name",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee665"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._1th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 250,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._2th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._3th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66d"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 350,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._4th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee670"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-74-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".star-rating._5th",
                            "selectorGuids": ["d28aa021-1374-f0e8-538c-5b81fdeee663", "d28aa021-1374-f0e8-538c-5b81fdeee66f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1672218742279
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});