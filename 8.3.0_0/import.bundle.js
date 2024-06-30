(() => {
  var e = {
      4690: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PADDLE =
            t.PADDLE_ENV_PRODUCTION =
            t.PADDLE_ENV_SANDBOX =
            t.ACTIVATION_PONG_EVENT =
            t.ACTIVATION_PING_EVENT =
            t.EXT_TO_WEB_EVENT_NAME =
            t.CROSS_SCRIPT_EVENT_NAME =
            t.EXT_SCRIPT_ID =
              void 0),
          (t.EXT_SCRIPT_ID = "__tweak_browser_extension_intercept_script__"),
          (t.CROSS_SCRIPT_EVENT_NAME = "TweakGenericForwardEvent"),
          (t.EXT_TO_WEB_EVENT_NAME = "TweakWebForwardEvent"),
          (t.ACTIVATION_PING_EVENT = "TPA"),
          (t.ACTIVATION_PONG_EVENT = "TPA_PONG"),
          (t.PADDLE_ENV_SANDBOX = "sdx"),
          (t.PADDLE_ENV_PRODUCTION = "prd"),
          (t.PADDLE = {
            [t.PADDLE_ENV_SANDBOX]: {
              vendorId: 4115,
              products: { premium: 21169, premium_annual: 39072 },
            },
            [t.PADDLE_ENV_PRODUCTION]: {
              vendorId: 138412,
              products: { premium: 765754, premium_annual: 802861 },
            },
          });
      },
      5976: function (e, t, o) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, o, n) {
                  void 0 === n && (n = o),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[o];
                      },
                    });
                }
              : function (e, t, o, n) {
                  void 0 === n && (n = o), (e[n] = t[o]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var o in e)
                  "default" !== o &&
                    Object.prototype.hasOwnProperty.call(e, o) &&
                    n(t, e, o);
              return r(t, e), t;
            },
          i =
            (this && this.__awaiter) ||
            function (e, t, o, n) {
              return new (o || (o = Promise))(function (r, a) {
                function i(e) {
                  try {
                    l(n.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(n.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof o
                        ? t
                        : new o(function (e) {
                            e(t);
                          })).then(i, s);
                }
                l((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TweakApiHttpClient = t.ServerJSONError = void 0);
        const s = a(o(1247));
        class l extends Error {
          constructor(e) {
            super(e);
          }
        }
        t.ServerJSONError = l;
        t.TweakApiHttpClient = class {
          constructor(e) {
            this.config = e;
          }
          getStatus(e) {
            return this.doFetch(s.TweakApiBlueprints.status, e);
          }
          postAuth(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              s.TweakApiBlueprints.auth,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          postActivatePlan(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              s.TweakApiBlueprints.activatePlan,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          postCheckPlan(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              s.TweakApiBlueprints.checkPlan,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          parseBody(e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              throw e;
            }
          }
          doFetch(e, t) {
            const o = this.buildHeaders(null == t ? void 0 : t.headers),
              n = e ? `${this.config.baseUrl}${e}` : null;
            return null == n
              ? Promise.reject(new Error("invalid URL"))
              : fetch(n, Object.assign(Object.assign({}, t), { headers: o }))
                  .then((e) =>
                    i(this, void 0, void 0, function* () {
                      const t = yield e.json();
                      if (e.status >= 400 && e.status <= 599)
                        throw new l(JSON.stringify(t));
                      return t;
                    })
                  )
                  .catch((e) => {
                    throw e;
                  });
          }
          buildHeaders(e) {
            return Object.assign(Object.assign({}, e), {
              "content-type": "application/json",
              "x-doge": this.buildNonce(),
              "x-nonce": `${Date.now()}`,
            });
          }
          buildNonce() {
            try {
              return btoa(`${this.config.apiClientSecret}:${Date.now()}`);
            } catch (e) {
              return "";
            }
          }
        };
      },
      5498: function (e, t, o) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, o, n) {
                  void 0 === n && (n = o),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[o];
                      },
                    });
                }
              : function (e, t, o, n) {
                  void 0 === n && (n = o), (e[n] = t[o]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var o in e)
                  "default" !== o &&
                    Object.prototype.hasOwnProperty.call(e, o) &&
                    n(t, e, o);
              return r(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.withResilience =
            t.BZC =
            t.Types =
            t.ServerJSONError =
            t.TweakApiHttpClient =
              void 0);
        var i = o(5976);
        Object.defineProperty(t, "TweakApiHttpClient", {
          enumerable: !0,
          get: function () {
            return i.TweakApiHttpClient;
          },
        }),
          Object.defineProperty(t, "ServerJSONError", {
            enumerable: !0,
            get: function () {
              return i.ServerJSONError;
            },
          }),
          (t.Types = a(o(1247))),
          (t.BZC = a(o(4690)));
        var s = o(4084);
        Object.defineProperty(t, "withResilience", {
          enumerable: !0,
          get: function () {
            return s.withResilience;
          },
        });
      },
      4084: function (e, t) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, o, n) {
            return new (o || (o = Promise))(function (r, a) {
              function i(e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof o
                      ? t
                      : new o(function (e) {
                          e(t);
                        })).then(i, s);
              }
              l((n = n.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.withResilience = void 0);
        function n(e) {
          return o(this, void 0, void 0, function* () {
            return yield new Promise((t) => {
              setTimeout(() => {
                t();
              }, e);
            });
          });
        }
        function r(e, t) {
          const o = Math.ceil(e),
            n = Math.floor(t);
          return Math.floor(Math.random() * (n - o) + o);
        }
        t.withResilience = function (e, t) {
          var a;
          return o(this, void 0, void 0, function* () {
            let o, i;
            for (let s = 0; s < t.retries; s++)
              try {
                (o = yield e()), (i = void 0);
                break;
              } catch (e) {
                i = e;
                const o =
                  null !== (a = null == t ? void 0 : t.retryInterval) &&
                  void 0 !== a
                    ? a
                    : r(1e3, 5e3);
                yield n(o);
              }
            if (i) throw i;
            return o;
          });
        };
      },
      1247: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AuthType =
            t.PlanStatus =
            t.Plan =
            t.Status =
            t.TweakApiBlueprints =
              void 0),
          (function (e) {
            (e.status = "/api/status"),
              (e.auth = "/api/auth"),
              (e.activatePlan = "/api/activate-plan"),
              (e.checkPlan = "/api/check-plan");
          })(t.TweakApiBlueprints || (t.TweakApiBlueprints = {})),
          (function (e) {
            (e.Serving = "serving"), (e.Down = "down");
          })(t.Status || (t.Status = {})),
          (function (e) {
            (e.Free = "x0"), (e.Premium = "x1"), (e.Unknown = "n/a");
          })(t.Plan || (t.Plan = {})),
          (function (e) {
            (e.Active = "y0"),
              (e.PastDue = "y1"),
              (e.Paused = "y2"),
              (e.Trialing = "y3"),
              (e.Deleted = "y4");
          })(t.PlanStatus || (t.PlanStatus = {})),
          (function (e) {
            (e.GitHub = "gh"), (e.Google = "alpha");
          })(t.AuthType || (t.AuthType = {}));
      },
    },
    t = {};
  function o(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, o), a.exports;
  }
  (() => {
    function e() {}
    function t(e) {
      return e();
    }
    function n() {
      return Object.create(null);
    }
    function r(e) {
      e.forEach(t);
    }
    function a(e) {
      return "function" == typeof e;
    }
    function i(e, t) {
      return e != e
        ? t == t
        : e !== t || (e && "object" == typeof e) || "function" == typeof e;
    }
    function s(e) {
      return 0 === Object.keys(e).length;
    }
    new Set();
    let l = !1;
    function _(e, t) {
      e.appendChild(t);
    }
    function c(e) {
      if (!e) return document;
      const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
      return t && t.host ? t : e.ownerDocument;
    }
    function d(e, t) {
      return _(e.head || e, t), t.sheet;
    }
    function u(e, t, o) {
      e.insertBefore(t, o || null);
    }
    function p(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function E(e) {
      return document.createElement(e);
    }
    function m(e) {
      return document.createTextNode(e);
    }
    function T() {
      return m(" ");
    }
    function h(e, t, o, n) {
      return e.addEventListener(t, o, n), () => e.removeEventListener(t, o, n);
    }
    function f(e, t, o) {
      null == o
        ? e.removeAttribute(t)
        : e.getAttribute(t) !== o && e.setAttribute(t, o);
    }
    new Map();
    let g;
    function O(e) {
      g = e;
    }
    function A() {
      if (!g)
        throw new Error("Function called outside component initialization");
      return g;
    }
    const b = [],
      C = [],
      y = [],
      L = [],
      v = Promise.resolve();
    let I = !1;
    function S() {
      I || ((I = !0), v.then(w));
    }
    function R(e) {
      y.push(e);
    }
    const N = new Set();
    let P = 0;
    function w() {
      const e = g;
      do {
        for (; P < b.length; ) {
          const e = b[P];
          P++, O(e), x(e.$$);
        }
        for (O(null), b.length = 0, P = 0; C.length; ) C.pop()();
        for (let e = 0; e < y.length; e += 1) {
          const t = y[e];
          N.has(t) || (N.add(t), t());
        }
        y.length = 0;
      } while (b.length);
      for (; L.length; ) L.pop()();
      (I = !1), N.clear(), O(e);
    }
    function x(e) {
      if (null !== e.fragment) {
        e.update(), r(e.before_update);
        const t = e.dirty;
        (e.dirty = [-1]),
          e.fragment && e.fragment.p(e.ctx, t),
          e.after_update.forEach(R);
      }
    }
    const D = new Set();
    function k(e, t) {
      e && e.i && (D.delete(e), e.i(t));
    }
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;
    new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "itemscope",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ]);
    let U;
    function $(e, t) {
      const o = e.$$;
      null !== o.fragment &&
        (r(o.on_destroy),
        o.fragment && o.fragment.d(t),
        (o.on_destroy = o.fragment = null),
        (o.ctx = []));
    }
    function M(o, i, s, _, c, d, u, E = [-1]) {
      const m = g;
      O(o);
      const T = (o.$$ = {
        fragment: null,
        ctx: [],
        props: d,
        update: e,
        not_equal: c,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(i.context || (m ? m.$$.context : [])),
        callbacks: n(),
        dirty: E,
        skip_bound: !1,
        root: i.target || m.$$.root,
      });
      u && u(T.root);
      let h = !1;
      if (
        ((T.ctx = s
          ? s(o, i.props || {}, (e, t, ...n) => {
              const r = n.length ? n[0] : t;
              return (
                T.ctx &&
                  c(T.ctx[e], (T.ctx[e] = r)) &&
                  (!T.skip_bound && T.bound[e] && T.bound[e](r),
                  h &&
                    (function (e, t) {
                      -1 === e.$$.dirty[0] &&
                        (b.push(e), S(), e.$$.dirty.fill(0)),
                        (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                    })(o, e)),
                t
              );
            })
          : []),
        T.update(),
        (h = !0),
        r(T.before_update),
        (T.fragment = !!_ && _(T.ctx)),
        i.target)
      ) {
        if (i.hydrate) {
          l = !0;
          const e = ((f = i.target), Array.from(f.childNodes));
          T.fragment && T.fragment.l(e), e.forEach(p);
        } else T.fragment && T.fragment.c();
        i.intro && k(o.$$.fragment),
          (function (e, o, n, i) {
            const { fragment: s, after_update: l } = e.$$;
            s && s.m(o, n),
              i ||
                R(() => {
                  const o = e.$$.on_mount.map(t).filter(a);
                  e.$$.on_destroy ? e.$$.on_destroy.push(...o) : r(o),
                    (e.$$.on_mount = []);
                }),
              l.forEach(R);
          })(o, i.target, i.anchor, i.customElement),
          (l = !1),
          w();
      }
      var f;
      O(m);
    }
    "function" == typeof HTMLElement &&
      (U = class extends HTMLElement {
        constructor() {
          super(), this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          const { on_mount: e } = this.$$;
          this.$$.on_disconnect = e.map(t).filter(a);
          for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
        }
        attributeChangedCallback(e, t, o) {
          this[e] = o;
        }
        disconnectedCallback() {
          r(this.$$.on_disconnect);
        }
        $destroy() {
          $(this, 1), (this.$destroy = e);
        }
        $on(t, o) {
          if (!a(o)) return e;
          const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
          return (
            n.push(o),
            () => {
              const e = n.indexOf(o);
              -1 !== e && n.splice(e, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            !s(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      });
    class G {
      $destroy() {
        $(this, 1), (this.$destroy = e);
      }
      $on(t, o) {
        if (!a(o)) return e;
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(o),
          () => {
            const e = n.indexOf(o);
            -1 !== e && n.splice(e, 1);
          }
        );
      }
      $set(e) {
        this.$$set &&
          !s(e) &&
          ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
      }
    }
    var H,
      q = new Uint8Array(16);
    function B() {
      if (
        !H &&
        !(H =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return H(q);
    }
    const F =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const j = function (e) {
      return "string" == typeof e && F.test(e);
    };
    for (var V = [], Y = 0; Y < 256; ++Y)
      V.push((Y + 256).toString(16).substr(1));
    const K = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = (
          V[e[t + 0]] +
          V[e[t + 1]] +
          V[e[t + 2]] +
          V[e[t + 3]] +
          "-" +
          V[e[t + 4]] +
          V[e[t + 5]] +
          "-" +
          V[e[t + 6]] +
          V[e[t + 7]] +
          "-" +
          V[e[t + 8]] +
          V[e[t + 9]] +
          "-" +
          V[e[t + 10]] +
          V[e[t + 11]] +
          V[e[t + 12]] +
          V[e[t + 13]] +
          V[e[t + 14]] +
          V[e[t + 15]]
        ).toLowerCase();
      if (!j(o)) throw TypeError("Stringified UUID is invalid");
      return o;
    };
    var X,
      W,
      Q = 0,
      J = 0;
    const z = function (e, t, o) {
      var n = (t && o) || 0,
        r = t || new Array(16),
        a = (e = e || {}).node || X,
        i = void 0 !== e.clockseq ? e.clockseq : W;
      if (null == a || null == i) {
        var s = e.random || (e.rng || B)();
        null == a && (a = X = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]),
          null == i && (i = W = 16383 & ((s[6] << 8) | s[7]));
      }
      var l = void 0 !== e.msecs ? e.msecs : Date.now(),
        _ = void 0 !== e.nsecs ? e.nsecs : J + 1,
        c = l - Q + (_ - J) / 1e4;
      if (
        (c < 0 && void 0 === e.clockseq && (i = (i + 1) & 16383),
        (c < 0 || l > Q) && void 0 === e.nsecs && (_ = 0),
        _ >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (Q = l), (J = _), (W = i);
      var d = (1e4 * (268435455 & (l += 122192928e5)) + _) % 4294967296;
      (r[n++] = (d >>> 24) & 255),
        (r[n++] = (d >>> 16) & 255),
        (r[n++] = (d >>> 8) & 255),
        (r[n++] = 255 & d);
      var u = ((l / 4294967296) * 1e4) & 268435455;
      (r[n++] = (u >>> 8) & 255),
        (r[n++] = 255 & u),
        (r[n++] = ((u >>> 24) & 15) | 16),
        (r[n++] = (u >>> 16) & 255),
        (r[n++] = (i >>> 8) | 128),
        (r[n++] = 255 & i);
      for (var p = 0; p < 6; ++p) r[n + p] = a[p];
      return t || K(r);
    };
    var Z = o(5498);
    const ee = [
        { code: 100, text: "Continue" },
        { code: 101, text: "Switching Protocols" },
        { code: 103, text: "Early Hints" },
        { code: 200, text: "OK" },
        { code: 201, text: "Created" },
        { code: 202, text: "Accepted" },
        { code: 203, text: "Non-Authoritative Information" },
        { code: 204, text: "No Content" },
        { code: 205, text: "Reset Content" },
        { code: 206, text: "Partial Content" },
        { code: 300, text: "Multiple Choices" },
        { code: 301, text: "Moved Permanently" },
        { code: 302, text: "Found" },
        { code: 303, text: "See Other" },
        { code: 304, text: "Not Modified" },
        { code: 307, text: "Temporary Redirect" },
        { code: 308, text: "Permanent Redirect" },
        { code: 400, text: "Bad Request" },
        { code: 401, text: "Unauthorized" },
        { code: 402, text: "Payment Required" },
        { code: 403, text: "Forbidden" },
        { code: 404, text: "Not Found" },
        { code: 405, text: "Method Not Allowed" },
        { code: 406, text: "Not Acceptable" },
        { code: 407, text: "Proxy Authentication Required" },
        { code: 408, text: "Request Timeout" },
        { code: 409, text: "Conflict" },
        { code: 410, text: "Gone" },
        { code: 411, text: "Length Required" },
        { code: 412, text: "Precondition Failed" },
        { code: 413, text: "Payload Too Large" },
        { code: 414, text: "URI Too Long" },
        { code: 415, text: "Unsupported Media Type" },
        { code: 416, text: "Range Not Satisfiable" },
        { code: 417, text: "Expectation Failed" },
        { code: 418, text: "I'm a teapot" },
        { code: 422, text: "Unprocessable Entity" },
        { code: 425, text: "Too Early" },
        { code: 426, text: "Upgrade Required" },
        { code: 428, text: "Precondition Required" },
        { code: 429, text: "Too Many Requests" },
        { code: 431, text: "Request Header Fields Too Large" },
        { code: 451, text: "Unavailable For Legal Reasons" },
        { code: 500, text: "Internal Server Error" },
        { code: 501, text: "Not Implemented" },
        { code: 502, text: "Bad Gateway" },
        { code: 503, text: "Service Unavailable" },
        { code: 504, text: "Gateway Timeout" },
        { code: 505, text: "HTTP Version Not Supported" },
        { code: 506, text: "Variant Also Negotiates" },
        { code: 507, text: "Insufficient Storage" },
        { code: 508, text: "Loop Detected" },
        { code: 510, text: "Not Extended" },
        { code: 511, text: "Network Authentication Required" },
      ],
      te = "application/json; charset=utf-8",
      oe = Z.BZC.EXT_SCRIPT_ID;
    class ne extends Error {
      constructor(...e) {
        super(...e),
          (this.name = "ImportInvalidTweakCollectionsFormatError"),
          (this.message =
            "format detection failed due to malformed/invalid tweak collections");
      }
    }
    class re extends Error {
      constructor(...e) {
        super(...e),
          (this.name = "ImportInvalidTweakVariablesFormatError"),
          (this.message =
            "format detection failed due to malformed/invalid tweak variables");
      }
    }
    class ae extends Error {
      constructor(...e) {
        super(...e),
          (this.name = "ImportInvalidTweakDataFormatError"),
          (this.message =
            "format detection failed due to malformed/invalid data");
      }
    }
    class ie extends Error {
      constructor(...e) {
        super(...e), (this.name = "ImportInvalidJSONError");
      }
    }
    class se extends Error {
      constructor(...e) {
        super(...e), (this.name = "FailedToSaveInBrowserStorageError");
      }
    }
    const le = ee,
      _e = new Map(ee.map(({ code: e, text: t }) => [e, t])),
      ce = [{ id: z(), header: "Content-Type", value: te, active: !0 }],
      de = new RegExp("[a-zA-Z][a-zA-Z_0-9]*", "g"),
      ue = { free: Z.Types.Plan.Free, premium: Z.Types.Plan.Premium },
      pe = [Z.Types.PlanStatus.Trialing, Z.Types.PlanStatus.Active];
    let Ee = "https://tweak-extension.com";
    const me = {
        MOUNT_ARTIFICIAL_DELAY: 100,
        START_ICON: "icon-tweak-start.png",
        STOP_ICON: "icon-tweak-stop.png",
        URL_MAX_LEN: 3e3,
        DEFAULT_RESPONSE_CONTENT_TYPE: te,
        DEFAULT_HEADERS: ce,
        DEFAULT_HTTP_METHOD: "GET",
        DEFAULT_REQUEST_HOOK_FUNCTION: "return { method, url, body, headers };",
        DEFAULT_RESPONSE_HOOK_FUNCTION: "return response;",
        AVAILABLE_LODASH_FUNCTIONS: ["isEqual", "merge", "pick"],
        AVAILABLE_LODASH_FUNCTIONS_COMPLETION: {
          isEqual: "_.isEqual(value, other)",
          merge: "_.merge(target, source)",
          pick: "_.pick(object, [paths])",
        },
        RESPONSE_HOOK_CONTEXT_VARIABLES: [
          "response",
          "url",
          "method",
          "body",
          "vars",
          "chance",
        ],
        VARIABLE_NAME_RGX: de,
        INTERCEPTION_POLICIES: {
          MOCK: {
            NAME: "Mock server",
            KEY: "MOCK",
            DESCRIPTION:
              "It will bypass the original request, and tweak will simply act as a mock.",
            LABEL: "Mock",
          },
          PATCH: {
            NAME: "Patch original request",
            KEY: "PATCH",
            DESCRIPTION:
              'Once this policy is active, tweak will keep its original logic, it will call the server and then apply the configuration changes on top of the server"s response.',
            LABEL: "Modify",
          },
        },
        REQUEST_PAYLOAD_MATCH_POLICY: { EXACT: "EXACT", PARTIAL: "PARTIAL" },
        RC_MORE_OPTIONS_ACTIONS: {
          DELETE: "delete",
          DUPLICATE: "duplicate",
          MOVE_TO_TOP: "move_to_top",
          MOVE_TO_BOTTOM: "move_to_bottom",
          MOVE_TO_COLLECTION: "move_to_collection",
        },
        WAIT_TIME_TO_CLEAR_SNACK_MSG: 1e4,
        WAIT_TIME_TO_CLEAR_SNACK_MSG_SHORT: 5e3,
        MAX_ERROR_MESSAGES_QUEUE_SIZE: 3,
        SCRIPT_ID: oe,
        ImportInvalidTweakCollectionsFormatError: ne,
        ImportInvalidTweakVariablesFormatError: re,
        ImportInvalidTweakDataFormatError: ae,
        FailedToSaveInBrowserStorageError: se,
        ImportInvalidJSONError: ie,
        HTTP_METHOD_OPTIONS: [
          "*",
          "POST",
          "GET",
          "PUT",
          "CONNECT",
          "OPTIONS",
          "PATCH",
          "DELETE",
          "HEAD",
          "TRACE",
        ],
        STATUS_CODES_OPTIONS: le,
        STATUS_CODE_MAP: _e,
        DEFAULT_STATUS: "200",
        DEFAULT_STATUS_TEXT: "OK",
        CONTENT_TYPES_OPTIONS: [
          "application/javascript",
          "application/json",
          "application/xhtml+xml",
          "text/css",
          "text/csv",
          "text/html",
          "text/javascript",
          "text/plain",
          "audio/aac",
          "application/x-abiword",
          "application/x-freearc",
          "video/x-msvideo",
          "application/vnd.amazon.ebook",
          "application/octet-stream",
          "image/bmp",
          "application/x-bzip",
          "application/x-bzip2",
          "application/x-csh",
          "application/msword",
          "application/vnd.ms-fontobject",
          "application/epub+zip",
          "application/gzip",
          "image/gif",
          "image/vnd.microsoft.icon",
          "text/calendar",
          "application/java-archive",
          "image/jpeg",
          "application/ld+json",
          "audio/midi",
          "audio/mpeg",
          "video/mpeg",
          "application/vnd.apple.installer+xml",
          "application/vnd.oasis.opendocument.presentation",
          "application/vnd.oasis.opendocument.spreadsheet",
          "application/vnd.oasis.opendocument.text",
          "audio/ogg",
          "video/ogg",
          "application/ogg",
          "audio/opus",
          "font/otf",
          "image/png",
          "application/pdf",
          "application/x-httpd-php",
          "application/vnd.rar",
          "application/rtf",
          "application/x-sh",
          "image/svg+xml",
          "application/x-shockwave-flash",
          "application/x-tar",
          "image/tiff",
          "video/mp2t",
          "font/ttf",
          "application/vnd.visio",
          "audio/wav",
          "audio/webm",
          "video/webm",
          "image/webp",
          "font/woff",
          "font/woff2",
          "application/vnd.ms-excel",
          "text/xml",
          "application/vnd.mozilla.xul+xml",
          "application/zip",
          "audio/3gpp",
          "audio/3gpp2",
          "application/x-7z-compressed",
        ],
        TWEAK_INPUT_ACCEPT_ATTRIBUTE: ".json",
        TOOLBAR_MORE_ACTIONS: {
          EXPORT: "export",
          IMPORT: "import",
          CLEAR_CACHE: "clear_cache",
          OPEN_AUTO_ENABLED_SITES_PANEL: "open_auto_enabled_sites_panel",
        },
        BROWSERS: { CHROME: "CHROME", FIREFOX: "FIREFOX" },
        BROWSER_NAMES: { CHROME: "Chrome", FIREFOX: "Firefox" },
        STORE_LINKS: {
          CHROME:
            "https://chrome.google.com/webstore/detail/tweak/feahianecghpnipmhphmfgmpdodhcapi",
          FIREFOX:
            "https://addons.mozilla.org/en-US/firefox/addon/tweak-extension/",
        },
        GOALS_STATUS: { LACKING: 0, ACHIEVED: 1, LOGGED: 2 },
        THEME_LINK_ID: "tweak-css-theme-id",
        THEME_COMMON_FILE_PREFIX: "tweak-smui",
        LAST_THEME_LINK_TAG_HREF: "tweak-smui-dark.css",
        THEMES: { light: "light", dark: "dark" },
        PLANS: ue,
        RULE_LIMITS: { free: 999999999, premium: 999999999 },
        PAGES: {
          autoEnabledSites: "auto_enabled_sites",
          main: "main",
          variables: "variables",
        },
        AUTOCOMPLETE_MAGIC_STATUS_FILTER_LABEL: "status:",
        AUTOCOMPLETE_MAGIC_METHOD_FILTER_LABEL: "method:",
        AUTOCOMPLETE_MAGIC_REQ_PAYLOAD_FILTER_LABEL: "rp:",
        EXPERIMENTS: {},
        PLAN_DOWNGRADED: "downgrade",
        ALL_PAID_PLANS: [ue.premium],
        ALL_VALID_PLAN_STATUS: pe,
        WEBSITE_BLUEPRINTS: {
          INTRO: `${Ee}/docs/intro`,
          CHANGELOG: `${Ee}/changelog`,
          PRICING: `${Ee}/pricing`,
          SIGN_IN: `${Ee}/subscription?intent=ap`,
          DEBUGGING: `${Ee}/docs/debug-request`,
          MOCK_MODIFY: `${Ee}/docs/rule/mock-vs-modify`,
          RESPONSE_PAYLOAD: `${Ee}/docs/rule/response-payload`,
          REQUEST_PAYLOAD: `${Ee}/docs/rule/request-payload`,
          HTTP_HEADERS: `${Ee}/docs/rule/http-headers`,
          REQUEST_HOOK: `${Ee}/docs/rule/request-hook`,
          RESPONSE_HOOK: `${Ee}/docs/rule/javascript-snippet`,
          VARIABLES: `${Ee}/docs/variables`,
          COLLECTIONS: `${Ee}/docs/collections`,
          AUTO_ENABLED_SITES: `${Ee}/docs/settings/auto-enabled-sites`,
        },
        MAX_COLLECTION_NAME_LENGTH: 32,
        MAX_NUMBER_OF_COLLECTIONS: 50,
      },
      Te = {
        snack_delete_rc_confirmation: ({ name: e }, t) =>
          `Rule "${e ? t.ellipsis(e, 30) : "unknown"}" deleted`,
        snack_duplication_rc_confirmation: ({ name: e }, t) =>
          `Duplicated rule "${e ? t.ellipsis(e, 30) : "unknown"}"`,
        snack_btn_video: "video",
        snack_title: "Dismiss",
        empty_state_message_first_line: "Ohhh... nothing here, but me!",
        empty_state_message_second_line_piece_1:
          "Create a rule by clicking the",
        empty_state_message_second_line_piece_2: "button",
        empty_state_message_third_line_piece_1: "or click",
        empty_state_message_third_line_piece_2: "to import existing ones",
        empty_state_message_third_line_cta: "here",
        empty_state_img_alt: "empty state image",
        empty_state_img_loading_alt: "loading state image",
        hits_limit_of_rcs_in_extension: ({ limit: e }) =>
          `You've reached the maximum of ${e} rules. Upgrade to add more rules.`,
        storage_generic_error:
          "Something went wrong while saving your changes.",
        storage_limit_error:
          "You cannot store more than 5MB of data in the extension. Recent rules might not have been saved.",
        hits_limit_of_rcs_in_extension_via_import: ({ limit: e, n: t }) =>
          `Only ${t} rule${
            t > 1 ? "s" : ""
          } imported. ${e} rules limit reached. Upgrade to import more rules.`,
        plus_btn_title: "Create a new rule",
        extension_toggle_running_title: ({ on: e }) =>
          (e ? "Disable" : "Enable") + " extension",
        collapse_all_rows: "Collapse all rows",
        variables_title: "Variables",
        variables_name_title: "Name",
        variables_value_title: "Value",
        variables_placeholder_name: "name",
        variables_placeholder_value: "value",
        variables_footer_note:
          "You can define variables to reference across all your rules.",
        smart_autocomplete_title: ({ active: e }) =>
          (e ? "Disable" : "Enable") + " request autocompletion",
        smart_autocomplete_activate_msg:
          "From now on, requests triggered on this browser tab are searchable in the URL field",
        smart_autocomplete_deactivate_msg:
          "You can no longer search for requests in the URL field",
        smart_autocomplete_fallback_msg:
          '{ "response": "We ran into issues parsing this response" }',
        delete_all_data: "Delete all",
        generic_delete_data_modal_title: "⚠️ Clear data",
        delete_all_modal_content:
          "Are you sure you want to delete all the rules? All the background cache will be cleared. To search requests in the URL field please re-trigger them in this browser tab.",
        delete_all_modal_content_all_collections:
          "Are you sure you want to <b>delete all the collections and rules in the extension</b>? All the background cache will be cleared. To search requests in the URL field please re-trigger them in this browser tab.",
        delete_all_modal_content_single_collection: ({ name: e }) =>
          `Are you sure you want to delete the collection <b>"${e}"</b> and all its rules? All the background cache will be cleared. To search requests in the URL field please re-trigger them in this browser tab.`,
        delete_all_data_success: "All clear!",
        delete_all_data_failure:
          "Oops! Something went wrong, please try again later.",
        modal_action_no: "No",
        modal_action_yes: "Yes",
        more_options_title: "More options",
        more_options_import_success: "Import successful",
        more_options_import: "Import",
        more_options_import_error: ({ fileName: e }) =>
          `Oops, an error occurred while uploading your file <b>${e}</b>. Please try again.`,
        more_options_import_generic_error: () =>
          "Oops, something went wrong while processing your file. Please try again.",
        more_options_import_error_invalid_data: ({ fileName: e }) =>
          `Oops, looks like your file <b>${e}</b> has invalid or missing data. Please amend your file and try again.`,
        more_options_import_error_invalid_json: ({ fileName: e }) =>
          `Oops, looks like your file <b>${e}</b> contains invalid JSON. Please amend your file and try again.`,
        more_options_export: "Export",
        more_options_export_error:
          "Something went wrong. Please try to export again later.",
        more_options_export_success: ({ fileName: e }) =>
          `${e} exported successfully!`,
        more_options_clear_cache: "Clear cache",
        more_options_clear_cache_success: "Extension cache cleared.",
        more_options_auto_enabled_sites: "Enabled sites",
        import_box_description_html: () =>
          "You can import a <b>.json</b> file with tweak rules. They will appear in the extension once the upload is successful.",
        import_box_title: () => "tweak extension import",
        import_box_choose_btn_text: () => "Choose a file",
        lsm_upgrade: "Upgrade",
        lsm_sign_in: "Sign in",
        lsm_update_sub: "Manage subscription",
        lsm_cancel_sub: "Cancel subscription",
        lsm_sign_out: "Sign out",
        lsm_ext_link_text_docs: "Docs",
        lsm_ext_link_review: "Rate extension",
        lsm_ext_link_tweak_version: ({ version: e }) => `v${e}`,
        lsm_theme: "Theme",
        lsm_tweak_logo_alt: "official tweak logo",
        lsm_footer: () => "Made with ❤️ by Tweak Technologies",
        lsm_feedback_cta: "Give feedback",
        lsm_feedback_info:
          "Hey! We want to hear from you. Help us improve tweak 📣",
        lsm_discount_cta: "Upgrade now",
        lsm_discount_info:
          "Do you think tweak can't get better than this? <br>Use the coupon <b>TWEAKPOWERUSER</b> at checkout for a lifetime 50% off on your subscription.<br><small><i>(Limited to the first 50 subscribers)</i></small>",
        rc_field_label: "Label",
        rc_field_delay: "Delay by (ms)",
        rc_debugging: "Debugging",
        rc_mode: "Rule",
        rc_more_options_delete: "Delete",
        rc_more_options_move_to_top: "Move to top",
        rc_more_options_move_to_bottom: "Move to bottom",
        rc_more_options_duplicate: "Duplicate",
        rc_move_to_collection: "Move to collection",
        rc_http_method: "HTTP Method",
        rc_http_method_opened: "scroll for more",
        rc_http_method_wildcard: "* (any)",
        rc_http_status: "Status code",
        rc_http_status_forward: "Forward status",
        rc_http_status_title: "Status code will fallback to 200 if left empty",
        rc_http_status_title_patch:
          "A valid status code will override the original response status code. Leave 0 to forward the original response status code.",
        rc_url_match_expression: "URL",
        rc_regex_explained: ({ on: e }) =>
          (e ? "Disable" : "Enable") + " use of regular expression",
        rc_url_match_expression_bad_regex_error:
          "Oops! That's an invalid regular expression",
        rc_tooltip_http_method_badge: ({ method: e }) =>
          "*" === e ? "matching all HTTP methods" : `matching HTTP method ${e}`,
        rc_tooltip_request_interception_counter: ({ requestCount: e }) =>
          `${e} ${1 === e ? "request" : "requests"} intercepted`,
        rc_tooltip_request_last_interception_time: ({ ts: e }, t) => t.time(e),
        rc_tooltip_generic_disabled_info:
          "Click first ▶ to enable the extension",
        rc_invalid_regular_expression_provided: ({ regex: e, configName: t }) =>
          `Invalid regular expression "${e}" for "${t}".`,
        rc_config_name_copy_duplication: ({ name: e }) => `${e} (copy)`,
        rc_bad_input_in_editor: ({ configName: e }) =>
          "It seems we could not parse your payload " +
          (e ? `for rule ${e}` : ""),
        rc_bad_json_upon_interception: ({ configName: e }) =>
          `Something went wrong, the response payload for rule "${
            e || "unknown"
          }" is invalid.`,
        rc_logpoint: ({ on: e }) =>
          (e ? "Disable" : "Enable") + " enhanced logpoint",
        rc_logpoint_footer: "to get rich logs in the devtools console",
        rc_breakpoint: ({ on: e }) =>
          (e ? "Disable" : "Enable") + " breakpoint",
        rc_breakpoint_footer: "needs devtools opened",
        rc_editor_menu_response: "Response",
        rc_editor_tab_response_title: "Response payload",
        rc_editor_tab_response_title_forward: "Forward response",
        rc_editor_tab_request_hook_title: "Request hook",
        rc_editor_tab_response_hook_title: "Response hook",
        rc_editor_tab_request_title: "Request payload",
        rc_editor_tab_response_headers_title: "Response headers",
        rc_editor_tab_request_headers_title: "Request headers",
        rc_editor_tab_response_footnote: "Write here your response mock.",
        rc_editor_tab_response_footnote_patch:
          "Write here your response mock. Leave empty to forward original HTTP response.",
        rc_editor_tab_request_footnote: ({ isExactMatchingEnabled: e }) =>
          `Ensure payload matches <b>${
            e ? "exactly" : "partially"
          }</b> the request payload.`,
        rc_editor_tab_request_footnote_patch: ({ isExactMatchingEnabled: e }) =>
          `Ensure <i>"Filter by"</i> matches <b>${
            e ? "exactly" : "partially"
          }</b> the request payload. In <i>"Replace by"</i> optionally specify payload to send in request.`,
        rc_request_hook_footnote:
          "Here you can modify outgoing data of your request (e.g. request body or URL) with custom JavaScript.",
        rc_response_hook_footnote:
          "Here you can complement or generate from scratch your response payload with custom JavaScript.",
        rc_response_hook_footnote_patch:
          "Here you can modify the original response with custom JavaScript.",
        rc_subheading_filter_by: "Filter by",
        rc_subheading_replace_by: "Replace by",
        rc_headers_col_key: "Key",
        rc_headers_col_value: "Value",
        editable_table_add_title: "Add new header",
        editable_table_delete_all_title: "Delete all",
        rc_response_headers_footer:
          "Configure the <b>response headers</b> in this table.",
        rc_request_headers_footer:
          "Configure the <b>request headers</b> in this table.",
        rc_failed_to_parse_user_provided_payload: ({ url: e }, t) =>
          `The request to "${t.ellipsis(
            e,
            50
          )}" was intercepted, but we detected a malformed payload. If it was intended, please ignore this warning.`,
        rc_forbidden_header_name:
          "This is a forbidden header name. A forbidden header name is the name of any HTTP header that cannot be modified programmatically.",
        rc_editor_format_code: "Format",
        rc_editor_copy_to_clipboard_title: "Copy content to the clipboard",
        rc_editor_disable_exact_matching:
          "Disable request payload exact matching",
        rc_editor_enable_exact_matching:
          "Enable request payload exact matching",
        rc_copy_to_clipboard_success: "Copied to clipboard",
        rc_copy_to_clipboard_error: "Copy to clipboard failed",
        rc_hint_cta: "Discover more",
        xhr_interceptor_failed_to_send: ({ url: e }) =>
          `Something went wrong with a XMLHttpRequest to the url: ${
            e || "n/a"
          }.`,
        request_rating_modal_title: () => "Enjoying tweak?",
        request_rating_modal_message: ({ browser: e }) =>
          `Share some ❤️ with the team by adding a review in the ${e} Store`,
        request_rating_modal_cta: () => "Write a review",
        request_rating_modal_dismiss: () => "Skip",
        setting_toggle_dark_mode: ({ on: e }) => "Lights " + (e ? "on" : "off"),
        extension_updated_message: ({ version: e }) =>
          `Extension updated to new version ${e}!`,
        see_changelog_button: "See changelog",
        settings_title: "Settings",
        enable_experiments: "Experiments",
        enable_experiments_description:
          "Here you manage experimental features. These are not stable yet, and might have side-effects in the website once enabled. <b>For consistent behavior please ensure:</b><ul><li>You close and reopen the browser tab where tweak was running</li><li>You reload the extension (<i>closing and reopening the popup should suffice for most cases</i>)</li></ul>",
        breakpoint_toast_message: ({ url: e, method: t }, o) =>
          `👋 tweak extension is stopping here to debug ${
            t ? t.toUpperCase() : ""
          } ${o.ellipsis(e, 50)}. Press "Step Out" to continue`,
        response_hook_exec_failure: ({ name: e, errorDetail: t }, o) =>
          `Error while executing a response hook${
            e ? ` ${o.ellipsis(e, 50)}` : ""
          }${t ? `: "${t}"` : ""}`,
        request_hook_exec_failure: ({ name: e, errorDetail: t }, o) =>
          `Error while executing a request hook${
            e ? ` ${o.ellipsis(e, 50)}` : ""
          }${t ? `: "${t}"` : ""}`,
        plan_activation_successful: "Your plan has been upgraded successfully!",
        plan_activation_error:
          "It seems something went wrong while activating you plan. Please reach out to support@tweak-extension.com",
        sign_out_modal_title: "Are you sure you want to sign out?",
        sign_out_modal_message_1:
          "You might loose some rules that use exclusive features of this plan. To save a copy of your rules",
        click_here_cta: "click here",
        plan_premium: "Premium",
        plan_trial_ends_in_x_days: ({ n: e }) =>
          0 === e
            ? "Your trial ends today"
            : `Your free trial ends in ${e} days`,
        plan_downgrade_title: "Howdy! You are being signed out",
        plan_downgrade_message:
          "You can keep a security copy of your rules so you can upload them later once you sign in again, to do so please",
        plan_downgrade_message_1:
          "Why is this happening? Your session might have expired or your plan downgraded. If you are not able to sign in again, please contact support@tweak-extension.com",
        monaco_lodash_detail_merge:
          "_.merge(target, source) - merges source object into target object | lodash",
        monaco_lodash_detail_isequal:
          "_.isEqual(value, other) - deep compares the two values | lodash",
        monaco_lodash_detail_pick:
          "_.pick(object, [paths]) - creates an object with picked object properties | lodash",
        monaco_context_detail_response:
          "response data for the intercepted request",
        monaco_context_detail_url: "URL of intercepted request",
        monaco_context_detail_method: "HTTP method of intercepted request",
        monaco_context_detail_body: "body of intercepted request",
        monaco_context_detail_vars: "user defined tweak variables",
        monaco_context_detail_chance:
          "chance.js instance to generate random data",
        collection_tooltip_active: ({ count: e, active: t }) =>
          t ? `${t} of ${e} rules active` : `${e} rules`,
        collections_title: "Collections",
        collections_global_import: "Import all",
        collections_global_export: "Export all",
        collections_global_open: "Open all",
        collections_global_close: "Close all",
        collections_global_delete: "Delete all",
        collections_single_open: "Open",
        collections_single_rename: "Rename",
        collections_single_export: "Export",
        collections_single_delete: "Delete",
        collections_single_rules_enable_all: "Enable all rules",
        collections_single_rules_disable_all: "Disable all rules",
        collection_moved_success: ({ name: e }) =>
          `Rule moved to collection "${e ?? "n/a"}"`,
        collection_move_modal_title: "Where to?",
        collections_new_name: ({ n: e }) =>
          e ? `New collection (${e})` : "New collection",
        collections_tab_close_others: "Close all others",
        aes_new_site_matching_active_tab:
          "We've enabled the extension because your current web page matches a site on your list.",
        aes_deleted_site_matching_active_tab:
          "We've disabled the extension because your current web page matches a site removed from your list.",
        aes_description:
          "Specify sites where tweak runs the extension automatically by default.",
        aes_input_field_label: "🌐 Web site",
        aes_empty_state_message:
          "No sites to display. Add your first auto-enabled site above. Want to learn more?",
      };
    const he = {
      ellipsis: function (e, t) {
        return e && e.length
          ? e.length > t
            ? `${e.slice(0, t)}...`
            : e
          : "...";
      },
      time: function (e) {
        if (!e) return "";
        try {
          const t = new Date(e),
            o = t.toDateString(),
            n = new Date(),
            r =
              o === n.toDateString()
                ? (function (e) {
                    const t = e.getMinutes(),
                      o = `${t > 9 ? "" : "0"}${t}`,
                      n = e.getSeconds(),
                      r = `${n > 9 ? "" : "0"}${n}`;
                    return `${e.getHours()}:${o}:${r}.${e.getMilliseconds()}`;
                  })(t)
                : t.toLocaleString();
          return "Invalid Date" !== r ? r : "";
        } catch (e) {
          return "";
        }
      },
    };
    function fe(e, t = {}) {
      if (Te[e])
        try {
          const o = Te[e];
          if ("string" == typeof o) return o;
          if ("function" == typeof o) return o(t, he);
        } catch (e) {
          0;
        }
      else 0;
      return "";
    }
    function ge(e, t, o) {
      return "array" === o
        ? Object.prototype.hasOwnProperty.call(e, t) &&
            Object.prototype.hasOwnProperty.call(e[t], "length")
        : Object.prototype.hasOwnProperty.call(e, t) && typeof e[t] === o;
    }
    function Oe(e) {
      return e.map((e, t) => {
        const o = (function (e = 0, t, o) {
            return {
              collectionId: o,
              configName: "",
              delay: 0,
              enabled: !0,
              httpMethod: "GET",
              id: z(),
              index: e,
              interceptionPolicy: me.INTERCEPTION_POLICIES.MOCK.KEY,
              isExpanded: !0,
              lastInterceptionTimestamp: null,
              outgoingRequestPayload: "",
              plan: t,
              requestCount: 0,
              requestHeaders: me.DEFAULT_HEADERS,
              requestHookFn: "",
              requestPayload: "",
              requestPayloadMatchPolicy: me.REQUEST_PAYLOAD_MATCH_POLICY.EXACT,
              responseHeaders: me.DEFAULT_HEADERS,
              responseHookFn: "",
              responsePayload: '{ "status": 200, "response": "OK" }',
              scrollEditorsPositions: {},
              status: 200,
              urlExpression: "",
            };
          })(1e3 + t),
          {
            collectionId: n,
            contentType: r,
            delay: a,
            interceptionPolicy: i,
            isBreakpointEnabled: s,
            isLogpointEnabled: l,
            isRgx: _,
            label: c,
            method: d,
            outgoingRequestPayload: u,
            requestHeaders: p,
            requestPayload: E,
            requestPayloadMatchPolicy: m,
            responseHeaders: T,
            responseHook: h,
            requestHook: f,
            responsePayload: g,
            status: O,
            url: A,
          } = e;
        let b = n;
        b || (b = "");
        let C = i;
        C || (C = me.INTERCEPTION_POLICIES.MOCK.KEY);
        let y = s;
        null == s && (y = !1);
        let L = l;
        null == l && (L = !1);
        let v = u;
        v || (v = "");
        let I = p;
        I || (I = []);
        let S = m;
        S || (S = me.REQUEST_PAYLOAD_MATCH_POLICY.EXACT);
        let R = [];
        r && (R = [{ id: z(), active: !0, header: "Content-Type", value: r }]),
          T && Object.prototype.hasOwnProperty.call(T, "length") && (R = T);
        let N = h;
        h || (N = "");
        let P = f;
        return (
          f || (P = ""),
          {
            ...o,
            collectionId: b,
            configName: c,
            delay: a,
            enabled: !1,
            httpMethod: d,
            interceptionPolicy: C,
            isBreakpointEnabled: y,
            isExpanded: !1,
            isLogpointEnabled: L,
            isRegexActive: _,
            outgoingRequestPayload: v,
            requestHeaders: I,
            requestPayload: E,
            requestPayloadMatchPolicy: S,
            responseHeaders: R,
            responseHookFn: N,
            requestHookFn: P,
            responsePayload: g,
            status: O,
            urlExpression: A,
          }
        );
      });
    }
    function Ae(e) {
      return ge(e, "url", "string");
    }
    function be(e) {
      return (t) =>
        !Object.prototype.hasOwnProperty.call(t, e) || ge(t, e, "boolean");
    }
    function Ce(e) {
      return (t) =>
        !Object.prototype.hasOwnProperty.call(t, e) || ge(t, e, "string");
    }
    const ye = [
      ...[
        function (e) {
          return ge(e, "delay", "number");
        },
        function (e) {
          return ge(e, "isRgx", "boolean");
        },
        function (e) {
          const t =
              ge(e, "contentType", "string") &&
              me.CONTENT_TYPES_OPTIONS.includes(e.contentType),
            o = ge(e, "responseHeaders", "object");
          return t || o;
        },
        function (e) {
          return (
            ge(e, "method", "string") &&
            me.HTTP_METHOD_OPTIONS.includes(e.method)
          );
        },
        function (e) {
          return ge(e, "requestPayload", "string");
        },
        function (e) {
          return ge(e, "status", "number");
        },
        Ae,
      ],
      ...[
        function (e) {
          return (
            !Object.prototype.hasOwnProperty.call(e, "interceptionPolicy") ||
            (ge(e, "interceptionPolicy", "string") &&
              !!me.INTERCEPTION_POLICIES[e.interceptionPolicy])
          );
        },
        Ce("outgoingRequestPayload"),
        function (e) {
          return (
            !Object.prototype.hasOwnProperty.call(e, "requestHeaders") ||
            ge(e, "requestHeaders", "array")
          );
        },
        function (e) {
          return (
            !Object.prototype.hasOwnProperty.call(
              e,
              "requestPayloadMatchPolicy"
            ) ||
            (ge(e, "requestPayloadMatchPolicy", "string") &&
              !!me.REQUEST_PAYLOAD_MATCH_POLICY[e.requestPayloadMatchPolicy])
          );
        },
        be("isBreakpointEnabled"),
        be("isLogpointEnabled"),
        Ce("responseHook"),
        Ce("requestHook"),
        Ce("collectionId"),
      ],
    ];
    function Le(e) {
      return e.map(({ name: e, value: t }) => ({ id: z(), name: e, value: t }));
    }
    const ve = [
      function (e) {
        if (!ge(e, "name", "string")) return !1;
        try {
          const t = e.name.match(me.VARIABLE_NAME_RGX);
          return t[0] && t[0].length === e.name.length;
        } catch (e) {
          return !1;
        }
      },
    ];
    const Ie = [Re("id"), Re("name")];
    function Se(e) {
      return e && e.length
        ? e.map(({ id: e, name: t }) => ({ id: e, name: t }))
        : [];
    }
    function Re(e) {
      return (t) =>
        !Object.prototype.hasOwnProperty.call(t, e) || ge(t, e, "string");
    }
    function Ne(e) {
      let t = {},
        o = null;
      try {
        o = JSON.parse(e);
      } catch (e) {
        throw new me.ImportInvalidJSONError();
      }
      o && Object.prototype.hasOwnProperty.call(o, "length") && Ae(o[0])
        ? (t.configurations = o)
        : o.configurations
        ? (t.configurations = o.configurations)
        : (t.configurations = []),
        o.variables ? (t.variables = o.variables) : (t.variables = []),
        o.collections ? (t.collections = o.collections) : (t.collections = []);
      const n = t.configurations.every((e) => ye.every((t) => t(e)))
        ? null
        : new me.ImportInvalidTweakDataFormatError();
      if (n) throw n;
      const r = t.variables.every((e) => ve.every((t) => t(e)))
        ? null
        : new me.ImportInvalidTweakVariablesFormatError();
      if (r) throw r;
      const a =
        (i = t.collections) && i.length
          ? i.every((e) => Ie.every((t) => t(e)))
            ? null
            : new me.ImportInvalidTweakCollectionsFormatError()
          : null;
      var i;
      if (a) throw a;
      return {
        collections: Se(t.collections),
        configurations: Oe(t.configurations),
        variables: Le(t.variables),
      };
    }
    new Z.TweakApiHttpClient({
      apiClientSecret: "PJ8I1GRLBARNGIJ7AN80WMTPMNIZ43E4H",
      logPrefix: "TWEAK :: ",
      baseUrl: "https://tweakcloudplatform.com",
    });
    const Pe = "chrome",
      we = "firefox",
      xe = "CHROME".toLowerCase();
    function De(e = {}) {
      if (chrome.runtime.lastError) {
        let t;
        if (chrome.runtime.lastError && chrome.runtime.lastError.message) {
          t = chrome.runtime.lastError.message;
          let o = t;
          if (
            o.includes(
              "Could not establish connection. Receiving end does not exist"
            )
          )
            return void 0;
          e && e.msg && e.msg.type && (o = `${o}: ${e.msg.type}`);
        }
        0;
      }
    }
    function ke() {
      try {
        return chrome.runtime.getURL("popup.html").split("//")[1].split("/")[0];
      } catch (e) {
        return null;
      }
    }
    function Ue() {
      try {
        return browser.runtime.id;
      } catch (e) {
        return null;
      }
    }
    const $e = {
      [Pe]: function (e, t) {
        let o = e;
        if (!o)
          try {
            o = ke();
          } catch (e) {
            0;
          }
        try {
          chrome.runtime.sendMessage(o, t, void 0, () => {
            De({ eid: o, o: t });
          });
        } catch (e) {
          0;
        }
      },
      [we]: function (e, t) {
        let o = e;
        if (!o)
          try {
            o = Ue();
          } catch (e) {
            0;
          }
        try {
          chrome.runtime.sendMessage(o, t, void 0, () => {
            De({ eid: o, o: t });
          });
        } catch (e) {
          0;
        }
      },
    }[xe];
    const Me = {
      [Pe]: function (e, t = () => {}) {
        chrome.action.setBadgeText(e, t);
      },
      [we]: function (e, t = () => {}) {
        0;
      },
    }[xe];
    let Ge, He, qe, Be, Fe, je, Ve, Ye, Ke, Xe;
    {
      (Ge = Object.freeze({
        ACTION_AUTO: "UI update",
        ACTION_CHROME_EXT: "chrome extensions",
        ACTION_CLICK: "click",
        ACTION_UNK: "unk",
        CATEGORY_COLLECTIONS: "collections",
        CATEGORY_COLLECTION_TAB: "collections tab",
        CATEGORY_ERROR: "error",
        CATEGORY_EXTERNAL: "external",
        CATEGORY_GLOBAL: "global interactions",
        CATEGORY_GOALS: "goals",
        CATEGORY_RC: "request configuration",
        TYPE_EVENT: "event",
      })),
        (He = Object.freeze({
          OPEN_EXTENSION_POPUP: "opened_extension_popup",
          HAMBURGER_MENU_CLICKED: "click_hamburger_menu",
          PLUS_BUTTON_CLICKED: "click_plus_button",
          PLUS_BUTTON_LIMIT_OF_RCS_IN_EXTENSION: "click_plus_reached_limit",
          CLICK_TOGGLE_VARS_PANEL: "click_toggle_variables_panel",
          CLICK_ADD_NEW_VARIABLE: "add_new_variable",
          CLICK_DELETE_VARIABLE: "delete_variable",
          CLICK_DELETE_ALL_VARIABLES: "delete_all_variables",
          IMPORT_CLICKED: "click_import",
          CLEAR_CACHE_CLICKED: "click_clear_cache",
          AUTO_ENABLED_SITES_ENTRYPOINT_CLICKED: "click_auto_enabled_sites",
          TWEAK_IMPORT_LIMIT_OF_RCS_IN_EXTENSION: "import_succ_w_overflow",
          TWEAK_IMPORT_SUCCESSFUL: "import_succ",
          TWEAK_IMPORT_ERROR: "import_failed_runtime_error",
          TWEAK_EXPORT_SUCCESSFUL: "export_successful",
          DELETE_CONFIGURATION: "delete_configuration",
          DUPLICATE_CONFIGURATION: "duplicate_configuration",
          MOVE_CONFIGURATION_TO_TOP: "move_configuration_to_top",
          MOVE_CONFIGURATION_TO_BOTTOM: "move_configuration_to_bottom",
          MOVE_RULE_TO_COLLECTION: "move_to_collection",
          REQUEST_INTERCEPTED_EXTENSION_OPENED:
            "req_suc_int_w_extension_opened",
          REQUEST_INTERCEPTED_EXTENSION_CLOSED:
            "req_suc_int_w_extension_closed",
          REQUEST_INTERCEPTED_GRAPHQL_DETECTED: "req_suc_int_graphql",
          REQUEST_INTERCEPTED_STAGING_DETECTED: "req_suc_int_staging",
          REQUEST_INTERCEPTED_GENERATOR_DETECTED:
            "req_suc_int_with_mock_generators",
          REQUEST_INTERCEPTED_VARIABLES_DETECTED: "req_suc_int_with_variables",
          REQUEST_INTERCEPTED_LOCALHOST_DETECTED: "req_suc_int_localhost",
          REQUEST_INTERCEPTED_RESPONSE_HOOK_DETECTED: "req_suc_int_res_hook",
          REQUEST_INTERCEPTED_REQUEST_HOOK_DETECTED: "req_suc_int_req_hook",
          REQUEST_INTERCEPTED_POLICY_MODIFY: "req_suc_int_modify_policy",
          REQUEST_TOGGLE_SWITCH: (e) => `switch_${e ? "on" : "off"}_req_int`,
          RUN_STOP_BUTTON_CLICKED: (e) =>
            `click_${e ? "stop" : "run"}_ext_button`,
          RGX_TOGGLED_ON: "toggled_regular_expression",
          TOGGLE_LOGPOINT: (e) => `switch_${e ? "on" : "off"}_logpoint`,
          TOGGLE_BREAKPOINT: "toggle_breakpoint",
          DELAY_VALUE_UPDATED: "delay_value updated",
          LABEL_VALUE_UPDATED: "label_updated",
          HOOK_TAB: (e) => `click_${e}_hook_tab`,
          REQUEST_PAYLOAD_TAB: "click_request_payload_tab",
          HEADERS_TAB: (e) => `click_${e}_headers_tab`,
          FORMAT_JSON: "format_json",
          COPY_TO_CLIPBOARD: "copy_json_to_clipboard",
          SELECT_HTTP_METHOD: (e) => `selected_http_method_${e}`,
          SELECT_RESPONSE_STATUS: (e) => `selected_status_${e}`,
          TOGGLE_REQ_P_EXACT_MATCH: (e) =>
            `switch_${e ? "on" : "off"}_req_p_exact_match`,
          COLLAPSE_ALL_ICON_CLICKED: "click_collapse_all",
          DELETE_ALL_YES_CLICKED: "deleted_all_configurations",
          CLICK_SETTINGS: "click_settings",
          CHANGE_TWEAK_PLAN: (e) => `changed_plan_to_${e}`,
          CHANGE_INTERCEPTION_MODE: (e) => `change_int_mode_to_${e}`,
          REQUEST_RATING_MODAL_IMPRESSION: "request_rating_impression",
          CLICK_WRITE_A_REVIEW: "click_write_a_review",
          GOAL_100: "u_reached_100_int",
          GOAL_500: "u_reached_500_int",
          GOAL_1000: "u_reached_1000_in",
          GOAL_10000: "u_reached_10000_int",
          GOAL_20000: "u_reached_20000_int",
          GOAL_50000: "u_reached_50000_int",
          GOAL_100000: "u_reached_100000_int",
          REQUEST_AUTOCOMPLETE_TOGGLE: (e) =>
            `switch_${e ? "on" : "off"}_request_autocomplete`,
          REQUEST_AUTOCOMPLETE_SUCCESSFUL: "request_autocompleted_succ",
          REQUEST_AUTOCOMPLETE_SUCCESSFUL_WITH_SMART_FILTERS: (e) =>
            "req_autocomple_suc_" +
            (e > 1 ? "multiple_smart_filters" : "single_smart_filter"),
          REQUEST_AUTOCOMPLETE_IMPRESSION: "req_autocompletion_impression",
          REQUEST_AUTOCOMPLETE_CLICK_VIDEO_LINK: "click_video_req_autocomplete",
          CHANGELOG_SNACKBAR_LINK: "click_changelog_link_toast",
          ADD_HEADER: (e) => `add_new_${e}_header`,
          DELETE_ALL_HEADERS: (e) => `delete_all_${e}_headers`,
          DELETE_SINGLE_HEADER: (e) => `delete_${e}_header`,
          UPDATE_CONTENT_TYPE_HEADER: (e) => `selected_content_type_${e}`,
          EXTERNAL_TWEAK_INSTALL: (e) => `install_tweak_version_${e}`,
          EXTERNAL_TWEAK_UPDATE: (e) => `update_tweak_to_version_${e}`,
          EXTERNAL_TWEAK_REFRESH: (e) => `refresh_tweak_version_${e}`,
          NUMBER_OF_CONFIGURATIONS: (e) => `user_has_${e}_configurations`,
          TOGGLE_DARK_MODE: (e) => `switch_to_${e ? "dark" : "light"}_theme`,
          QUOTA_BYTES_EXCEEDED: "quota_bytes_quota_exceeded",
          RUNTIME_ERROR: (e) => `runtime_error_${e}`,
          SUBSCRIPTION_ACTIVATION_SUCCESS: "sub_activation_success",
          SUBSCRIPTION_ACTIVATION_FAILED: "sub_activation_failed",
          USER_SIGN_OUT: "user_sign_out",
          BACKGROUND_PLAN_DOWNGRADE: "background_plan_downgrade",
          PLAN_DOWNGRADE_MODAL_IMPRESSION: "downgrade_modal_impression",
          FEEDBACK_CARD_IMPRESSION: "power_user_feedback_card",
          PROMO_CARD_IMPRESSION: "power_user_discount_card",
          COLLECTIONS_PLUS_CLICK: "col_add_plus_click",
          COLLECTIONS_DOUBLE_CLICK_TAB: "col_double_click_col_tab",
          COLLECTIONS_GLOBAL_IMPORT: "col_click_global_import",
          COLLECTIONS_GLOBAL_EXPORT: "col_click_global_export",
          COLLECTIONS_GLOBAL_OPEN_ALL: "col_click_global_open_all",
          COLLECTIONS_GLOBAL_CLOSE_ALL: "col_click_global_close_all",
          COLLECTIONS_GLOBAL_DELETE_ALL: "col_click_global_delete_all",
          COLLECTIONS_LOCAL_OPEN_COLLECTION: "col_click_open_col",
          COLLECTIONS_LOCAL_RENAME_COLLECTION: "col_rename_col",
          COLLECTIONS_LOCAL_EXPORT: "col_click_export_col",
          COLLECTIONS_LOCAL_DELETE: "col_click_delete_col",
          COLLECTIONS_LOCAL_ENABLE_ALL_RULES: "col_click_enable_all_col_rules",
          COLLECTIONS_LOCAL_DISABLE_ALL_RULES:
            "col_click_disable_all_col_rules",
          COLLECTIONS_LOCAL_DOUBLE_CLICK: "col_double_click_col_name",
          COLLECTIONS_DRAG_AND_DROP: "col_reorder_with_drag_and_drop",
          AES_ADD_SITE: "aes_add_site",
          AES_REMOVE_SITE: "aes_remove_site",
        })),
        (qe = function (e) {
          try {
            $e(void 0, {
              data: { type: "GOOGLE_ANALYTICS_EVENT", payload: [e] },
            });
          } catch (e) {
            0;
          }
        }),
        (Be = function (e) {
          e &&
            qe({
              hitType: Ge.TYPE_EVENT,
              eventCategory: Ge.CATEGORY_RC,
              eventAction: Ge.ACTION_CLICK,
              eventLabel: e,
            });
        });
      const e = {
        hitType: Ge.TYPE_EVENT,
        eventCategory: Ge.CATEGORY_GOALS,
        eventAction: Ge.ACTION_AUTO,
      };
      Fe = function (t, o = qe) {
        t &&
          (t.goal100Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_100 }),
          t.goal500Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_500 }),
          t.goal1000Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_1000 }),
          t.goal10000Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_10000 }),
          t.goal20000Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_20000 }),
          t.goal50000Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_50000 }),
          t.goal100000Interceptions === me.GOALS_STATUS.ACHIEVED &&
            o({ ...e, eventLabel: He.GOAL_100000 }));
      };
      const t = ["operationName", "query", "variables"];
      je = function (e, o = qe) {
        try {
          const { urlExpression: n, httpMethod: r, requestPayload: a } = e,
            i = {
              hitType: Ge.TYPE_EVENT,
              eventCategory: Ge.CATEGORY_RC,
              eventAction: Ge.ACTION_AUTO,
              eventLabel: He.REQUEST_INTERCEPTED_GRAPHQL_DETECTED,
            };
          if (
            "post" === r.toLowerCase() &&
            n &&
            n.toLowerCase().includes("graphql")
          )
            return void o(i);
          if (t.every((e) => Boolean(a.includes(e)))) return void o(i);
        } catch (e) {
          0;
        }
      };
      const o = ["127.0.0.1", "0.0.0.0", "localhost"],
        n = ["staging", "stg"];
      (Ve = function (e) {
        try {
          const { urlExpression: t } = e,
            r = {
              hitType: Ge.TYPE_EVENT,
              eventCategory: Ge.CATEGORY_RC,
              eventAction: Ge.ACTION_AUTO,
            },
            a = t.toLowerCase();
          if (o.some((e) => a.includes(e))) {
            const e = He.REQUEST_INTERCEPTED_LOCALHOST_DETECTED;
            return void qe({ ...r, eventLabel: e });
          }
          if (n.some((e) => a.includes(e))) {
            const e = He.REQUEST_INTERCEPTED_STAGING_DETECTED;
            return void qe({ ...r, eventLabel: e });
          }
        } catch (e) {
          0;
        }
      }),
        (Ye = function (e, t, o = qe) {
          try {
            if (!t) return;
            t.VARIABLES &&
              o({
                hitType: Ge.TYPE_EVENT,
                eventCategory: Ge.CATEGORY_RC,
                eventAction: Ge.ACTION_AUTO,
                eventLabel: He.REQUEST_INTERCEPTED_VARIABLES_DETECTED,
              }),
              t.GENERATOR &&
                o({
                  hitType: Ge.TYPE_EVENT,
                  eventCategory: Ge.CATEGORY_RC,
                  eventAction: Ge.ACTION_AUTO,
                  eventLabel: He.REQUEST_INTERCEPTED_GENERATOR_DETECTED,
                });
          } catch (e) {
            0;
          }
        }),
        (Ke = function (e, t = qe) {
          try {
            e &&
              e.requestHookFn &&
              e.requestHookFn !== me.DEFAULT_REQUEST_HOOK_FUNCTION &&
              t({
                hitType: Ge.TYPE_EVENT,
                eventCategory: Ge.CATEGORY_RC,
                eventAction: Ge.ACTION_AUTO,
                eventLabel: He.REQUEST_INTERCEPTED_REQUEST_HOOK_DETECTED,
              });
          } catch (e) {
            0;
          }
        }),
        (Xe = function (e, t = "popup", o = qe) {
          o({
            hitType: Ge.TYPE_EVENT,
            eventCategory: Ge.CATEGORY_ERROR,
            eventAction: Ge.ACTION_UNK,
            eventLabel: He.RUNTIME_ERROR(t),
          });
        });
    }
    const We = "tweak-browser-extension-data";
    function Qe(e, t = We) {
      return new Promise(function (o, n) {
        try {
          const r = { [t]: e };
          chrome.storage.local.set(r, function () {
            const e = chrome.runtime.lastError;
            if (e && e.message)
              return (
                "QUOTA_BYTES quota exceeded" === e.message &&
                  qe({
                    hitType: Ge.TYPE_EVENT,
                    eventCategory: Ge.CATEGORY_GLOBAL,
                    eventAction: Ge.ACTION_AUTO,
                    eventLabel: He.QUOTA_BYTES_EXCEEDED,
                  }),
                void n(new Error(e.message))
              );
            o(!0);
          });
        } catch (e) {
          n(e);
        }
      });
    }
    function Je(e = We) {
      return new Promise(function (t, o) {
        try {
          chrome.storage.local.get([e], function (o) {
            const n = chrome.runtime.lastError;
            n && n.message && n.message;
            const r = o && o[e] ? o[e] : null;
            t(r);
          });
        } catch (e) {
          o(e);
        }
      });
    }
    function ze(e) {
      !(function (e, t, o) {
        const n = c(e);
        if (!n.getElementById(t)) {
          const e = E("style");
          (e.id = t), (e.textContent = o), d(n, e);
        }
      })(
        e,
        "svelte-rkpmuj",
        ".dialog.svelte-rkpmuj.svelte-rkpmuj{background-color:#fff;padding:4%;margin:16%;font-size:1rem}.alert.svelte-rkpmuj.svelte-rkpmuj{border-bottom-color:transparent;border-left-color:transparent;border-radius:0.25rem;border-right-color:transparent;border-top-color:transparent;border:1px solid transparent;font-size:16px;font-weight:400;margin-bottom:1rem;padding:0.75rem 1.25rem}.alert-danger.svelte-rkpmuj.svelte-rkpmuj{background-color:#f8d7da;border-color:#f5c6cb;color:#721c24;font-family:system-ui, sans-serif;user-select:all}.upload-btn-label.svelte-rkpmuj.svelte-rkpmuj{border-radius:8px;border:1px solid #d3d3d3;cursor:pointer;flex:1 1 0;font-size:14px;font-weight:600;margin-left:34%;margin-right:34%;outline:none;padding:6px;text-align:center}.upload-btn-label.svelte-rkpmuj.svelte-rkpmuj:hover{color:#f49805;border:1px solid #f49805}.file-input-container.svelte-rkpmuj.svelte-rkpmuj{align-content:center;align-items:center;display:flex;margin-top:2em}.file-input-container.svelte-rkpmuj input.svelte-rkpmuj{clip-path:inset(50%);clip:rect(0 0 0 0);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}"
      );
    }
    function Ze(e) {
      let t;
      return {
        c() {
          (t = E("div")),
            f(t, "data-test-id", "file-upload-error-msg"),
            f(t, "class", "alert alert-danger svelte-rkpmuj");
        },
        m(o, n) {
          u(o, t, n), (t.innerHTML = e[1]);
        },
        p(e, o) {
          2 & o && (t.innerHTML = e[1]);
        },
        d(e) {
          e && p(t);
        },
      };
    }
    function et(t) {
      let o,
        n,
        a,
        i,
        s,
        l,
        c,
        d,
        m,
        g,
        O,
        A,
        b,
        C = fe("import_box_description_html") + "",
        y = t[1] && Ze(t);
      return {
        c() {
          (o = E("div")),
            (n = E("h2")),
            (n.textContent = `${fe("import_box_title")}`),
            (a = T()),
            (i = E("p")),
            (s = T()),
            y && y.c(),
            (l = T()),
            (c = E("div")),
            (d = E("label")),
            (d.textContent = `${fe("import_box_choose_btn_text")}`),
            (m = T()),
            (g = E("input")),
            f(n, "id", "fileupload-title"),
            f(d, "for", "__tfileup__"),
            f(d, "class", "upload-btn-label svelte-rkpmuj"),
            f(d, "tabindex", "0"),
            f(d, "data-test-id", "file-upload-box-btn"),
            f(g, "id", "__tfileup__"),
            f(g, "name", "__tfileup__"),
            f(g, "type", "file"),
            f(g, "accept", (O = me.TWEAK_INPUT_ACCEPT_ATTRIBUTE)),
            f(g, "class", "svelte-rkpmuj"),
            f(c, "class", "file-input-container svelte-rkpmuj"),
            f(o, "data-test-id", "file-upload-box"),
            f(o, "class", "dialog svelte-rkpmuj");
        },
        m(e, r) {
          u(e, o, r),
            _(o, n),
            _(o, a),
            _(o, i),
            (i.innerHTML = C),
            _(o, s),
            y && y.m(o, null),
            _(o, l),
            _(o, c),
            _(c, d),
            _(c, m),
            _(c, g),
            t[3](g),
            A ||
              ((b = [
                h(g, "change", t[2]),
                h(g, "click", t[4]),
                h(o, "click", tt),
              ]),
              (A = !0));
        },
        p(e, [t]) {
          e[1]
            ? y
              ? y.p(e, t)
              : ((y = Ze(e)), y.c(), y.m(o, l))
            : y && (y.d(1), (y = null));
        },
        i: e,
        o: e,
        d(e) {
          e && p(o), y && y.d(), t[3](null), (A = !1), r(b);
        },
      };
    }
    const tt = (e) => e.stopPropagation();
    function ot(e, t, o) {
      let n,
        r = "",
        a = !1;
      var i;
      function s(e) {
        e &&
          e.type &&
          e.text &&
          Je()
            .catch((e) => {
              0;
            })
            .then((t) => {
              const { messagesQueue: o } = t;
              return Qe({ ...t, messagesQueue: [...o, e] }).catch((e) => {
                0;
              });
            })
            .catch((e) => {
              0;
            });
      }
      function l(e, t) {
        s(t),
          qe({
            hitType: Ge.TYPE_EVENT,
            eventCategory: Ge.CATEGORY_GLOBAL,
            eventAction: Ge.ACTION_AUTO,
            eventLabel: He.TWEAK_IMPORT_ERROR,
          });
      }
      function _(e, t) {
        const i = t.name || "...";
        try {
          const t = Ne(e.target.result);
          !(async function (e) {
            const t = {
              type: "ERROR",
              text: fe("more_options_import_generic_error"),
            };
            let o = He.TWEAK_IMPORT_SUCCESSFUL;
            try {
              let { content: n, message: r } = e;
              const { configurations: i, variables: _, collections: c } = n,
                d = await Je(),
                {
                  configurations: u,
                  variables: p,
                  rulesLimit: E,
                  collections: m,
                  openedCollectionIds: T,
                  activeCollectionId: h,
                  plan: f,
                } = d,
                g = E - Object.keys(u).length,
                O = i.slice(0, g >= 0 ? g : 0);
              let A = h,
                b = m,
                C = T;
              if (!1 === a) {
                if (h) A = h;
                else if (f !== me.PLANS.free) {
                  const e = z(),
                    t = "New collection (imported)";
                  (b = [...m, { id: e, name: t }]), (C = [...T, e]), (A = e);
                }
              } else if (!0 === a && f !== me.PLANS.free && c?.length) {
                const e = new Set(b.map((e) => e.id));
                (b = [...b, ...c.filter((t) => !e.has(t.id))]),
                  (A = b?.[0]?.id || ""),
                  (C = Array.from(new Set([...C, A])));
              }
              O.length !== i.length &&
                ((o = He.TWEAK_IMPORT_LIMIT_OF_RCS_IN_EXTENSION),
                (r = {
                  type: "WARNING",
                  text: fe("hits_limit_of_rcs_in_extension_via_import", {
                    limit: E,
                    n: g,
                  }),
                }));
              const y = {
                  ...u,
                  ...O.reduce(
                    (e, t) => (
                      (e[t.id] =
                        !0 === a ? { ...t } : { ...t, collectionId: A }),
                      e
                    ),
                    {}
                  ),
                },
                L = [...p, ..._],
                v = {
                  ...d,
                  activeCollectionId: A,
                  collections: b,
                  configurations: y,
                  openedCollectionIds: C,
                  variables: L,
                };
              try {
                (await Qe(v))
                  ? (s(r),
                    Me({ text: "ok!" }),
                    qe({
                      hitType: Ge.TYPE_EVENT,
                      eventCategory: Ge.CATEGORY_GLOBAL,
                      eventAction: Ge.ACTION_CLICK,
                      eventLabel: o,
                    }),
                    window.close())
                  : (new me.FailedToSaveInBrowserStorageError(
                      "failed to store uploaded data"
                    ),
                    l(0, t));
              } catch (e) {
                const o = new me.FailedToSaveInBrowserStorageError(
                  o.toString()
                );
                l(0, t);
              }
            } catch (e) {
              l(0, t);
            }
          })({
            content: t,
            message: {
              type: "SUCCESS",
              text: fe("more_options_import_success"),
            },
          });
        } catch (e) {
          0;
          let t = "more_options_import_error";
          e instanceof me.ImportInvalidTweakDataFormatError
            ? (t = "more_options_import_error_invalid_data")
            : e instanceof me.ImportInvalidJSONError &&
              (t = "more_options_import_error_invalid_json"),
            o(1, (r = fe(t, { fileName: i })));
        }
        try {
          o(0, (n.value = ""), n);
        } catch (e) {
          0;
        }
      }
      function c(e) {
        const t = e.name || "...";
        o(1, (r = fe("more_options_import_error", { fileName: t })));
      }
      (i = () => {
        try {
          const e = new URLSearchParams(window.location.search);
          a = e.has("global");
        } catch (e) {
          a = !1;
        }
      }),
        A().$$.on_mount.push(i);
      return [
        n,
        r,
        function (e) {
          const t = e.target.files;
          if (!t.length) return;
          const o = t[0],
            n = new FileReader();
          (n.onload = (e) => _(e, o)),
            (n.onerror = () => c(o)),
            (n.onabort = () => c(o)),
            n.readAsText(o);
        },
        function (e) {
          C[e ? "unshift" : "push"](() => {
            (n = e), o(0, n);
          });
        },
        () => {
          o(1, (r = ""));
        },
      ];
    }
    new (class extends G {
      constructor(e) {
        super(), M(this, e, ot, et, i, {}, ze);
      }
    })({ target: document.body });
  })();
})();
