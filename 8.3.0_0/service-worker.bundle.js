console.log("Tweak Mod Loaded!");
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
          a =
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
          r =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var o in e)
                  "default" !== o &&
                    Object.prototype.hasOwnProperty.call(e, o) &&
                    n(t, e, o);
              return a(t, e), t;
            },
          i =
            (this && this.__awaiter) ||
            function (e, t, o, n) {
              return new (o || (o = Promise))(function (a, r) {
                function i(e) {
                  try {
                    s(n.next(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function _(e) {
                  try {
                    s(n.throw(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function s(e) {
                  var t;
                  e.done
                    ? a(e.value)
                    : ((t = e.value),
                      t instanceof o
                        ? t
                        : new o(function (e) {
                            e(t);
                          })).then(i, _);
                }
                s((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TweakApiHttpClient = t.ServerJSONError = void 0);
        const _ = r(o(1247));
        class s extends Error {
          constructor(e) {
            super(e);
          }
        }
        t.ServerJSONError = s;
        t.TweakApiHttpClient = class {
          constructor(e) {
            this.config = e;
          }
          getStatus(e) {
            return this.doFetch(_.TweakApiBlueprints.status, e);
          }
          postAuth(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              _.TweakApiBlueprints.auth,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          postActivatePlan(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              _.TweakApiBlueprints.activatePlan,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          postCheckPlan(e, t) {
            const o = this.parseBody(e);
            var checkplanresponse = this.doFetch(
              _.TweakApiBlueprints.checkPlan,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );

            console.log(checkplanresponse);
            return checkplanresponse;
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
                        throw new s(JSON.stringify(t));
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
          a =
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
          r =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var o in e)
                  "default" !== o &&
                    Object.prototype.hasOwnProperty.call(e, o) &&
                    n(t, e, o);
              return a(t, e), t;
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
          (t.Types = r(o(1247))),
          (t.BZC = r(o(4690)));
        var _ = o(4084);
        Object.defineProperty(t, "withResilience", {
          enumerable: !0,
          get: function () {
            return _.withResilience;
          },
        });
      },
      4084: function (e, t) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, o, n) {
            return new (o || (o = Promise))(function (a, r) {
              function i(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function _(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof o
                      ? t
                      : new o(function (e) {
                          e(t);
                        })).then(i, _);
              }
              s((n = n.apply(e, t || [])).next());
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
        function a(e, t) {
          const o = Math.ceil(e),
            n = Math.floor(t);
          return Math.floor(Math.random() * (n - o) + o);
        }
        t.withResilience = function (e, t) {
          var r;
          return o(this, void 0, void 0, function* () {
            let o, i;
            for (let _ = 0; _ < t.retries; _++)
              try {
                (o = yield e()), (i = void 0);
                break;
              } catch (e) {
                i = e;
                const o =
                  null !== (r = null == t ? void 0 : t.retryInterval) &&
                  void 0 !== r
                    ? r
                    : a(1e3, 5e3);
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
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e);
    })(),
    (() => {
      o.p, o.p, o.p, o.p, o.p, o.p;
      const e = "chrome",
        t = "firefox",
        n = "CHROME".toLowerCase();
      function a(e = {}) {
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
      function r() {
        try {
          return chrome.runtime
            .getURL("popup.html")
            .split("//")[1]
            .split("/")[0];
        } catch (e) {
          return null;
        }
      }
      function i() {
        try {
          return browser.runtime.id;
        } catch (e) {
          return null;
        }
      }
      const _ = {
        [e]: function (e, t) {
          let o = e;
          if (!o)
            try {
              o = r();
            } catch (e) {
              0;
            }
          try {
            chrome.runtime.sendMessage(o, t, void 0, () => {
              a({ eid: o, o: t });
            });
          } catch (e) {
            0;
          }
        },
        [t]: function (e, t) {
          let o = e;
          if (!o)
            try {
              o = i();
            } catch (e) {
              0;
            }
          try {
            chrome.runtime.sendMessage(o, t, void 0, () => {
              a({ eid: o, o: t });
            });
          } catch (e) {
            0;
          }
        },
      }[n];
      function s(e) {
        chrome.runtime.onMessage.addListener((...t) => (e(...t), !0));
      }
      const c = { [e]: s, [t]: s }[n];
      function l(e, t, o, n) {
        const r = { type: e, payload: t };
        chrome.tabs.query({ currentWindow: !0, active: !0 }, (e) => {
          const t = e[0];
          try {
            chrome.tabs.sendMessage(t.id, r, o, () => {
              a({ activeTab: t, msg: r, options: o }), n && n();
            });
          } catch (e) {
            0;
          }
        });
      }
      const u = { [e]: l, [t]: l }[n];
      const d = {
        [e]: function (e, t) {
          chrome.action.setIcon(e, t);
        },
        [t]: function (e, t) {
          0;
        },
      }[n];
      const E = {
        [e]: function (e, t = () => {}) {
          chrome.action.setBadgeText(e, t);
        },
        [t]: function (e, t = () => {}) {
          0;
        },
      }[n];
      function p(e = () => {}) {
        chrome.tabs.onActivated.addListener(e);
      }
      const T = { [e]: p, [t]: p }[n];
      const h = {
        [e]: function (e = () => {}) {
          try {
            chrome.tabs.onUpdated.addListener(e);
          } catch (e) {
            0;
          }
        },
        [t]: function (e = () => {}) {
          try {
            browser.tabs.onUpdated.addListener(e);
          } catch (e) {
            0;
          }
        },
      }[n];
      function m(e = () => {}) {
        chrome.tabs.onRemoved.addListener(e);
      }
      const O = { [e]: m, [t]: m }[n];
      function A(e = { currentWindow: !0, active: !0 }, t = () => {}) {
        chrome.tabs.query(e, t);
      }
      const g = { [e]: A, [t]: A }[n];
      function f({ url: e = "" }) {
        if (e)
          try {
            chrome.tabs.create({ url: e });
          } catch (e) {
            0;
          }
      }
      const C = { [e]: f, [t]: f }[n];
      function L(e, t = () => {}) {
        if (e)
          try {
            chrome.runtime.setUninstallURL(e, t);
          } catch (e) {
            0;
          }
      }
      const b = { [e]: L, [t]: L }[n];
      const S = {
        [e]: function (e) {
          if (e && "function" == typeof e)
            try {
              chrome.runtime.onInstalled.addListener(e);
            } catch (e) {
              0;
            }
        },
        [t]: () => {},
      }[n];
      function N(e) {
        if (e && "function" == typeof e)
          try {
            chrome.commands.onCommand.addListener(e);
          } catch (e) {
            0;
          }
      }
      const I = { [e]: N, [t]: N }[n];
      const y = {
        [e]: function (e) {
          try {
            if (!e) return;
            return chrome.tabs.get(e);
          } catch (e) {
            0;
          }
        },
        [t]: function (e) {
          try {
            if (!e) return;
            return browser.tabs.get(e);
          } catch (e) {
            0;
          }
        },
      }[n];
      function v() {
        return new Promise((e) => {
          g({ currentWindow: !0, active: !0 }, (t) => {
            const o = t && t[0] && t[0].id;
            e(o || null);
          });
        });
      }
      var R,
        P = new Uint8Array(16);
      function w() {
        if (
          !R &&
          !(R =
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
        return R(P);
      }
      const D =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const x = function (e) {
        return "string" == typeof e && D.test(e);
      };
      for (var U = [], k = 0; k < 256; ++k)
        U.push((k + 256).toString(16).substr(1));
      const G = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          o = (
            U[e[t + 0]] +
            U[e[t + 1]] +
            U[e[t + 2]] +
            U[e[t + 3]] +
            "-" +
            U[e[t + 4]] +
            U[e[t + 5]] +
            "-" +
            U[e[t + 6]] +
            U[e[t + 7]] +
            "-" +
            U[e[t + 8]] +
            U[e[t + 9]] +
            "-" +
            U[e[t + 10]] +
            U[e[t + 11]] +
            U[e[t + 12]] +
            U[e[t + 13]] +
            U[e[t + 14]] +
            U[e[t + 15]]
          ).toLowerCase();
        if (!x(o)) throw TypeError("Stringified UUID is invalid");
        return o;
      };
      var M,
        H,
        B = 0,
        q = 0;
      const $ = function (e, t, o) {
        var n = (t && o) || 0,
          a = t || new Array(16),
          r = (e = e || {}).node || M,
          i = void 0 !== e.clockseq ? e.clockseq : H;
        if (null == r || null == i) {
          var _ = e.random || (e.rng || w)();
          null == r && (r = M = [1 | _[0], _[1], _[2], _[3], _[4], _[5]]),
            null == i && (i = H = 16383 & ((_[6] << 8) | _[7]));
        }
        var s = void 0 !== e.msecs ? e.msecs : Date.now(),
          c = void 0 !== e.nsecs ? e.nsecs : q + 1,
          l = s - B + (c - q) / 1e4;
        if (
          (l < 0 && void 0 === e.clockseq && (i = (i + 1) & 16383),
          (l < 0 || s > B) && void 0 === e.nsecs && (c = 0),
          c >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (B = s), (q = c), (H = i);
        var u = (1e4 * (268435455 & (s += 122192928e5)) + c) % 4294967296;
        (a[n++] = (u >>> 24) & 255),
          (a[n++] = (u >>> 16) & 255),
          (a[n++] = (u >>> 8) & 255),
          (a[n++] = 255 & u);
        var d = ((s / 4294967296) * 1e4) & 268435455;
        (a[n++] = (d >>> 8) & 255),
          (a[n++] = 255 & d),
          (a[n++] = ((d >>> 24) & 15) | 16),
          (a[n++] = (d >>> 16) & 255),
          (a[n++] = (i >>> 8) | 128),
          (a[n++] = 255 & i);
        for (var E = 0; E < 6; ++E) a[n + E] = r[E];
        return t || G(a);
      };
      var F = o(5498);
      const V = [
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
        Y = "application/json; charset=utf-8",
        K = F.BZC.EXT_SCRIPT_ID;
      class j extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "ImportInvalidTweakCollectionsFormatError"),
            (this.message =
              "format detection failed due to malformed/invalid tweak collections");
        }
      }
      class W extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "ImportInvalidTweakVariablesFormatError"),
            (this.message =
              "format detection failed due to malformed/invalid tweak variables");
        }
      }
      class X extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "ImportInvalidTweakDataFormatError"),
            (this.message =
              "format detection failed due to malformed/invalid data");
        }
      }
      class Q extends Error {
        constructor(...e) {
          super(...e), (this.name = "ImportInvalidJSONError");
        }
      }
      class J extends Error {
        constructor(...e) {
          super(...e), (this.name = "FailedToSaveInBrowserStorageError");
        }
      }
      const z = V,
        Z = new Map(V.map(({ code: e, text: t }) => [e, t])),
        ee = [{ id: $(), header: "Content-Type", value: Y, active: !0 }],
        te = new RegExp("[a-zA-Z][a-zA-Z_0-9]*", "g"),
        oe = { free: F.Types.Plan.Premium, premium: F.Types.Plan.Premium }, // free = x0 | premium = x1
        ne = [F.Types.PlanStatus.Trialing, F.Types.PlanStatus.Active];
      let ae = "https://tweak-extension.com";
      const re = {
        MOUNT_ARTIFICIAL_DELAY: 100,
        START_ICON: "icon-tweak-start.png",
        STOP_ICON: "icon-tweak-stop.png",
        URL_MAX_LEN: 3e3,
        DEFAULT_RESPONSE_CONTENT_TYPE: Y,
        DEFAULT_HEADERS: ee,
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
        VARIABLE_NAME_RGX: te,
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
        SCRIPT_ID: K,
        ImportInvalidTweakCollectionsFormatError: j,
        ImportInvalidTweakVariablesFormatError: W,
        ImportInvalidTweakDataFormatError: X,
        FailedToSaveInBrowserStorageError: J,
        ImportInvalidJSONError: Q,
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
        STATUS_CODES_OPTIONS: z,
        STATUS_CODE_MAP: Z,
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
        PLANS: oe,
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
        ALL_PAID_PLANS: [oe.premium],
        ALL_VALID_PLAN_STATUS: ne,
        WEBSITE_BLUEPRINTS: {
          INTRO: `${ae}/docs/intro`,
          CHANGELOG: `${ae}/changelog`,
          PRICING: `${ae}/pricing`,
          SIGN_IN: `${ae}/subscription?intent=ap`,
          DEBUGGING: `${ae}/docs/debug-request`,
          MOCK_MODIFY: `${ae}/docs/rule/mock-vs-modify`,
          RESPONSE_PAYLOAD: `${ae}/docs/rule/response-payload`,
          REQUEST_PAYLOAD: `${ae}/docs/rule/request-payload`,
          HTTP_HEADERS: `${ae}/docs/rule/http-headers`,
          REQUEST_HOOK: `${ae}/docs/rule/request-hook`,
          RESPONSE_HOOK: `${ae}/docs/rule/javascript-snippet`,
          VARIABLES: `${ae}/docs/variables`,
          COLLECTIONS: `${ae}/docs/collections`,
          AUTO_ENABLED_SITES: `${ae}/docs/settings/auto-enabled-sites`,
        },
        MAX_COLLECTION_NAME_LENGTH: 32,
        MAX_NUMBER_OF_COLLECTIONS: 50,
      };
      let ie, _e, se, ce, le, ue, de, Ee, pe, Te;
      {
        (ie = Object.freeze({
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
          (_e = Object.freeze({
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
            REQUEST_INTERCEPTED_VARIABLES_DETECTED:
              "req_suc_int_with_variables",
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
            REQUEST_AUTOCOMPLETE_CLICK_VIDEO_LINK:
              "click_video_req_autocomplete",
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
            COLLECTIONS_LOCAL_ENABLE_ALL_RULES:
              "col_click_enable_all_col_rules",
            COLLECTIONS_LOCAL_DISABLE_ALL_RULES:
              "col_click_disable_all_col_rules",
            COLLECTIONS_LOCAL_DOUBLE_CLICK: "col_double_click_col_name",
            COLLECTIONS_DRAG_AND_DROP: "col_reorder_with_drag_and_drop",
            AES_ADD_SITE: "aes_add_site",
            AES_REMOVE_SITE: "aes_remove_site",
          })),
          (se = function (e) {
            try {
              _(void 0, {
                data: { type: "GOOGLE_ANALYTICS_EVENT", payload: [e] },
              });
            } catch (e) {
              0;
            }
          }),
          (ce = function (e) {
            e &&
              se({
                hitType: ie.TYPE_EVENT,
                eventCategory: ie.CATEGORY_RC,
                eventAction: ie.ACTION_CLICK,
                eventLabel: e,
              });
          });
        const e = {
          hitType: ie.TYPE_EVENT,
          eventCategory: ie.CATEGORY_GOALS,
          eventAction: ie.ACTION_AUTO,
        };
        le = function (t, o = se) {
          t &&
            (t.goal100Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_100 }),
            t.goal500Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_500 }),
            t.goal1000Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_1000 }),
            t.goal10000Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_10000 }),
            t.goal20000Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_20000 }),
            t.goal50000Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_50000 }),
            t.goal100000Interceptions === re.GOALS_STATUS.ACHIEVED &&
              o({ ...e, eventLabel: _e.GOAL_100000 }));
        };
        const t = ["operationName", "query", "variables"];
        ue = function (e, o = se) {
          try {
            const { urlExpression: n, httpMethod: a, requestPayload: r } = e,
              i = {
                hitType: ie.TYPE_EVENT,
                eventCategory: ie.CATEGORY_RC,
                eventAction: ie.ACTION_AUTO,
                eventLabel: _e.REQUEST_INTERCEPTED_GRAPHQL_DETECTED,
              };
            if (
              "post" === a.toLowerCase() &&
              n &&
              n.toLowerCase().includes("graphql")
            )
              return void o(i);
            if (t.every((e) => Boolean(r.includes(e)))) return void o(i);
          } catch (e) {
            0;
          }
        };
        const o = ["127.0.0.1", "0.0.0.0", "localhost"],
          n = ["staging", "stg"];
        (de = function (e) {
          try {
            const { urlExpression: t } = e,
              a = {
                hitType: ie.TYPE_EVENT,
                eventCategory: ie.CATEGORY_RC,
                eventAction: ie.ACTION_AUTO,
              },
              r = t.toLowerCase();
            if (o.some((e) => r.includes(e))) {
              const e = _e.REQUEST_INTERCEPTED_LOCALHOST_DETECTED;
              return void se({ ...a, eventLabel: e });
            }
            if (n.some((e) => r.includes(e))) {
              const e = _e.REQUEST_INTERCEPTED_STAGING_DETECTED;
              return void se({ ...a, eventLabel: e });
            }
          } catch (e) {
            0;
          }
        }),
          (Ee = function (e, t, o = se) {
            try {
              if (!t) return;
              t.VARIABLES &&
                o({
                  hitType: ie.TYPE_EVENT,
                  eventCategory: ie.CATEGORY_RC,
                  eventAction: ie.ACTION_AUTO,
                  eventLabel: _e.REQUEST_INTERCEPTED_VARIABLES_DETECTED,
                }),
                t.GENERATOR &&
                  o({
                    hitType: ie.TYPE_EVENT,
                    eventCategory: ie.CATEGORY_RC,
                    eventAction: ie.ACTION_AUTO,
                    eventLabel: _e.REQUEST_INTERCEPTED_GENERATOR_DETECTED,
                  });
            } catch (e) {
              0;
            }
          }),
          (pe = function (e, t = se) {
            try {
              e &&
                e.requestHookFn &&
                e.requestHookFn !== re.DEFAULT_REQUEST_HOOK_FUNCTION &&
                t({
                  hitType: ie.TYPE_EVENT,
                  eventCategory: ie.CATEGORY_RC,
                  eventAction: ie.ACTION_AUTO,
                  eventLabel: _e.REQUEST_INTERCEPTED_REQUEST_HOOK_DETECTED,
                });
            } catch (e) {
              0;
            }
          }),
          (Te = function (e, t = "popup", o = se) {
            o({
              hitType: ie.TYPE_EVENT,
              eventCategory: ie.CATEGORY_ERROR,
              eventAction: ie.ACTION_UNK,
              eventLabel: _e.RUNTIME_ERROR(t),
            });
          });
      }
      const he = "tweak-browser-extension-data";
      function me(e, t = he) {
        return new Promise(function (o, n) {
          try {
            const a = { [t]: e };
            chrome.storage.local.set(a, function () {
              const e = chrome.runtime.lastError;
              if (e && e.message)
                return (
                  "QUOTA_BYTES quota exceeded" === e.message &&
                    se({
                      hitType: ie.TYPE_EVENT,
                      eventCategory: ie.CATEGORY_GLOBAL,
                      eventAction: ie.ACTION_AUTO,
                      eventLabel: _e.QUOTA_BYTES_EXCEEDED,
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
      function Oe(e = he) {
        return new Promise(function (t, o) {
          try {
            chrome.storage.local.get([e], function (o) {
              const n = chrome.runtime.lastError;
              n && n.message && n.message;
              const a = o && o[e] ? o[e] : null;
              t(a);
            });
          } catch (e) {
            o(e);
          }
        });
      }
      const Ae = !1,
        ge = "111111111.1111111111";
      let fe;
      function Ce(e) {
        try {
          fe
            ? Le(fe, e)
            : Oe()
                .catch(() => {})
                .then((t) => {
                  if (t) {
                    const { analyticsClientId: e } = t;
                    fe = e;
                  }
                  Le(fe, e);
                });
        } catch (e) {
          0;
        }
      }
      function Le(
        e,
        { hitType: t, eventCategory: o, eventAction: n, eventLabel: a }
      ) {
        try {
          if (!n || !o) return void 0;
          const t = JSON.stringify({
            client_id: e || ge,
            user_id: e || ge,
            events: [{ name: be(a) }],
          });
          return fetch(
            "https://www.google-analytics.com/mp/collect?measurement_id=G-8F9KN94WBH&api_secret=vfUDAj6gTfCv4XvKNwRRUg",
            { method: "POST", body: t }
          )
            .catch((e) => {
              false;
            })
            .then((e) => {
              if (e)
                return e.ok
                  ? void 0
                  : e
                      .text()
                      .then((e) => {
                        false;
                      })
                      .catch(() => {});
            });
        } catch (e) {
          Ae;
        }
      }
      function be(e) {
        try {
          return e
            .replace(/[^a-zA-Z0-9_\s]/g, "")
            .toLowerCase()
            .replace(/\s/g, "_");
        } catch (e) {
          return "";
        }
      }
      const Se = {
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
        plan_activation_successful: "Your plan has been upgraded successfully! (Cracked by Zebratic)",
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
      const Ne = {
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
              a =
                o === n.toDateString()
                  ? (function (e) {
                      const t = e.getMinutes(),
                        o = `${t > 9 ? "" : "0"}${t}`,
                        n = e.getSeconds(),
                        a = `${n > 9 ? "" : "0"}${n}`;
                      return `${e.getHours()}:${o}:${a}.${e.getMilliseconds()}`;
                    })(t)
                  : t.toLocaleString();
            return "Invalid Date" !== a ? a : "";
          } catch (e) {
            return "";
          }
        },
      };
      function Ie(e, t = {}) {
        if (Se[e])
          try {
            const o = Se[e];
            if ("string" == typeof o) return o;
            if ("function" == typeof o) return o(t, Ne);
          } catch (e) {
            0;
          }
        else 0;
        return "";
      }
      function ye(e, t, o) {
        return "array" === o
          ? Object.prototype.hasOwnProperty.call(e, t) &&
              Object.prototype.hasOwnProperty.call(e[t], "length")
          : Object.prototype.hasOwnProperty.call(e, t) && typeof e[t] === o;
      }
      function ve(e) {
        return (t) =>
          !Object.prototype.hasOwnProperty.call(t, e) || ye(t, e, "boolean");
      }
      function Re(e) {
        return (t) =>
          !Object.prototype.hasOwnProperty.call(t, e) || ye(t, e, "string");
      }
      Re("outgoingRequestPayload"),
        ve("isBreakpointEnabled"),
        ve("isLogpointEnabled"),
        Re("responseHook"),
        Re("requestHook"),
        Re("collectionId");
      Pe("id"), Pe("name");
      function Pe(e) {
        return (t) =>
          !Object.prototype.hasOwnProperty.call(t, e) || ye(t, e, "string");
      }
      function we(e, { min: t = 50, max: o = 1200 } = { min: 50, max: 1200 }) {
        const n = (function (e, t) {
          return (
            (e = Math.ceil(e)),
            (t = Math.floor(t)),
            Math.floor(Math.random() * (t - e)) + e
          );
        })(t, o);
        return new Promise((t) => {
          setTimeout(() => {
            try {
              t(e());
            } catch (e) {
              0, t(null);
            }
          }, n);
        });
      }
      const De = new F.TweakApiHttpClient({
          apiClientSecret: "PJ8I1GRLBARNGIJ7AN80WMTPMNIZ43E4H",
          logPrefix: "TWEAK :: ",
          baseUrl: "https://tweakcloudplatform.com",
        }),
        xe = !1,
        Ue = !1,
        ke = !1;
      function Ge(e) {
        e &&
          e.type &&
          e.text &&
          Oe()
            .catch((e) => {
              xe;
            })
            .then((t) => {
              try {
                const { messagesQueue: o } = t;
                if (!!!o.find((t) => t.text === e.text)) {
                  return me({ ...t, messagesQueue: [...o, e] }).catch((e) => {
                    xe;
                  });
                }
              } catch (e) {
                0;
              }
            })
            .catch((e) => {
              Te(e, "background", Ce);
            });
      }
      function Me() {
        Ge({ type: "ERROR", text: Ie("plan_activation_error") }),
          E({ text: "*" }),
          Ce({
            hitType: ie.TYPE_EVENT,
            eventCategory: ie.CATEGORY_GLOBAL,
            eventAction: ie.ACTION_UNK,
            eventLabel: _e.SUBSCRIPTION_ACTIVATION_FAILED,
          });
      }
      let He = {
        __TWEAK_BOOTSTRAP_FINISHED__: async function () {
          try {
            const e = await v();
            try {
              const t = await Oe();
              if (!t) return;
              const { requestAutocompleteTabId: o } = t;
              let n = o === e ? "ON" : "OFF";
              ke, u("TOGGLE_TWEAK_BACKGROUND_REQUEST_STASHING", [n, "system"]);
            } catch (e) {
              Te(e, "background", Ce);
            }
          } catch (e) {
            Te(e, "background", Ce);
          }
        },
        INCREMENT_REQUEST_COUNT: function (e, t = 1, o) {
          const { id: n, appliedTemplating: a } = e;
          return we(() =>
            Oe().then((e) => {
              if (!e) return;
              const { configurations: r, numberOfInterceptions: i } = e,
                _ = r[n];
              if (!_) return void 0;
              const s = _.requestCount + t,
                c = {
                  ...r,
                  [n]: { ..._, requestCount: s, lastInterceptionTimestamp: o },
                },
                l = i > 999999999999 ? 0 : i + t;
              Ce({
                hitType: ie.TYPE_EVENT,
                eventCategory: ie.CATEGORY_RC,
                eventAction: ie.ACTION_AUTO,
                eventLabel: _e.REQUEST_INTERCEPTED_EXTENSION_CLOSED,
              });
              try {
                ue(_, Ce),
                  de(_, Ce),
                  pe(_, Ce),
                  _ && _.plan === re.PLANS.premium && Ee(_, a, Ce),
                  _ &&
                    _.plan === re.PLANS.premium &&
                    _.responseHookFn !== re.DEFAULT_RESPONSE_HOOK_FUNCTION &&
                    Ce({
                      hitType: ie.TYPE_EVENT,
                      eventCategory: ie.CATEGORY_RC,
                      eventAction: ie.ACTION_AUTO,
                      eventLabel: _e.REQUEST_INTERCEPTED_RESPONSE_HOOK_DETECTED,
                    }),
                  _ &&
                    _.plan === re.PLANS.premium &&
                    _.interceptionPolicy ===
                      re.INTERCEPTION_POLICIES.PATCH.KEY &&
                    Ce({
                      hitType: ie.TYPE_EVENT,
                      eventCategory: ie.CATEGORY_RC,
                      eventAction: ie.ACTION_AUTO,
                      eventLabel: _e.REQUEST_INTERCEPTED_POLICY_MODIFY,
                    });
              } catch (e) {}
              return me({
                ...e,
                configurations: c,
                numberOfInterceptions: l,
              }).then((e) => {
                if (!e) return;
                const t = (function (e = []) {
                  if (!e) return "";
                  const t = Object.values(e).reduce(
                    (e, t) => e + t.requestCount,
                    0
                  );
                  return 0 === t ? "" : t > 99 ? "99+" : `${t}`;
                })(c);
                E({ text: t });
              });
            })
          );
        },
        TWEAK_GENERIC_MESSAGE: Ge,
        PUSH_BACKGROUND_REQUESTS_TO_EXTENSION: function (e) {
          return (
            !e ||
            !e.length ||
            (_(void 0, {
              data: { type: "LOAD_BACKGROUND_REQUESTS", payload: [e] },
            }),
            !0)
          );
        },
        TPA: async function (e, t, o, n) {
          if (!navigator.onLine) return;
          let a, r, i, _, s, c;
          try {
            (a = atob(t)), (r = atob(n)), new Date(Number(atob(o)));
          } catch (e) {
            return void Te(e, "bad activation attempt", Ce);
          }
          if (a && r && re.ALL_PAID_PLANS.includes(r)) {
            try {
              const t = ke ? { "x-application-tpi": "active" } : {};
              Ue;
              const o = await (0, F.withResilience)(
                () =>
                  De.postCheckPlan(
                    { plan: r, token: e, sid: a },
                    { headers: t }
                  ),
                { retries: 3 }
              );
              if (
                !o?.data?.nextPaymentDate ||
                !re.ALL_VALID_PLAN_STATUS.includes(o?.data?.status)
              )
                return;
              (i = o.data.nextPaymentDate),
                (_ = o.data.status),
                (s = o.data?.updateSubscriptionUrl || null),
                (c = o.data?.cancelSubscriptionUrl || null);
            } catch (e) {
              return Te(e, "background activation", Ce), void Me();
            }
            try {
              const t = await Oe(),
                o = {
                  token: e,
                  sid: a,
                  lastUpdatedTimestamp: Date.now(),
                  nextPaymentDate: i,
                  planStatus: _,
                  updateSubUrl: s,
                  cancelSubUrl: c,
                };
              await me({ ...t, plan: r, user: o }),
                u(F.BZC.ACTIVATION_PONG_EVENT, [!0]),
                Ge({ type: "PARTY", text: Ie("plan_activation_successful") }),
                E({ text: "*" }),
                Ce({
                  hitType: ie.TYPE_EVENT,
                  eventCategory: ie.CATEGORY_GLOBAL,
                  eventAction: ie.ACTION_UNK,
                  eventLabel: _e.SUBSCRIPTION_ACTIVATION_SUCCESS,
                });
            } catch (e) {
              Te(e, "background activation", Ce), Me();
            }
          }
        },
        PLAN_CHECK: async function (e) {
          if (navigator.onLine)
            try {
              const { plan: t, token: o, sid: n } = e,
                a = ke ? { "x-application-tpi": "active" } : {};
              Ue;
              const r = (0, F.withResilience)(
                  () =>
                    De.postCheckPlan(
                      { plan: t, token: o, sid: n },
                      { headers: a }
                    ),
                  { retries: 3 }
                ),
                i = Oe(),
                [_, s] = await Promise.all([r, i]),
                c = _?.data?.nextPaymentDate,
                l = _?.data?.status || s?.user?.planStatus,
                u = _?.data?.updateSubscriptionUrl || s?.user?.updateSubUrl,
                d = _?.data?.cancelSubscriptionUrl || s?.user?.cancelSubUrl;
              let E = null;
              re.ALL_VALID_PLAN_STATUS.includes(l) ||
                ((E = re.PLAN_DOWNGRADED),
                Ce({
                  hitType: ie.TYPE_EVENT,
                  eventCategory: ie.CATEGORY_GLOBAL,
                  eventAction: ie.ACTION_UNK,
                  eventLabel: _e.BACKGROUND_PLAN_DOWNGRADE,
                }));
              const p = {
                ...s.user,
                lastUpdatedTimestamp: Date.now(),
                nextPaymentDate: c,
                planStatus: l,
                updateSubUrl: u,
                cancelSubUrl: d,
                planDowngraded: E,
              };
              console.log(p);
              await me({ ...s, user: p });
            } catch (e) {
              return void Te(e, "background plan check", Ce);
            }
        },
      };
      He.GOOGLE_ANALYTICS_EVENT = Ce;
      try {
        c(async function (e, t, o) {
          if (!e.data || !e.data.type || !e.data.payload) return;
          const { type: n, payload: a } = e.data;
          if (He[n]) {
            He[n](...a);
            try {
              o({ response: "ok" });
            } catch (e) {}
            return !0;
          }
        });
      } catch (e) {
        xe;
      }
      function Be(e) {
        if (!e || !e.tabId) return;
        const { tabId: t } = e;
        return t
          ? Oe()
              .then(async (e) => {
                if (!e) return;
                const {
                  activeTabId: o,
                  isExtensionActive: n,
                  wasExtensionActiveBeforeLeaveTab: a,
                  autoEnabledSites: r,
                  plan: i,
                } = e;
                let _ = n,
                  s = !1;
                if (t && i === re.PLANS.premium)
                  try {
                    const e = (await y(t))?.url;
                    if (e)
                      for (const t of r)
                        if (e.includes(t)) {
                          (_ = !0), (s = !0);
                          try {
                            d({ path: re.STOP_ICON });
                          } catch (e) {
                            Te(e, "background", Ce);
                          }
                          break;
                        }
                  } catch (e) {
                    xe;
                  }
                if (!s)
                  if (o === t) {
                    const e = a ? re.STOP_ICON : re.START_ICON;
                    _ = a;
                    try {
                      d({ path: e });
                    } catch (e) {
                      Te(e, "background", Ce);
                    }
                  } else {
                    _ = !1;
                    try {
                      d({ path: re.START_ICON });
                    } catch (e) {
                      Te(e, "background", Ce);
                    }
                  }
                me({ ...e, isExtensionActive: _ })
                  .catch((e) => {
                    xe;
                  })
                  .then(() => {
                    try {
                      _ && s && u("START_ALL_INTERCEPTIONS", []);
                    } catch (e) {
                      xe;
                    }
                  });
              })
              .catch((e) => {
                Te(e, "background", Ce);
              })
          : void 0;
      }
      T(Be),
        h((e) => {
          Be({ tabId: e });
        });
      {
        try {
          O(function (e) {
            Oe().then((t) => {
              if (!t) return;
              let {
                isExtensionActive: o,
                wasExtensionActiveBeforeLeaveTab: n,
                activeTabId: a,
                requestAutocompleteTabId: r,
              } = t;
              a === e && ((o = !1), (n = !1), (a = -1)),
                r === e && (r = null),
                me({
                  ...t,
                  isExtensionActive: o,
                  wasExtensionActiveBeforeLeaveTab: n,
                  activeTabId: a,
                  requestAutocompleteTabId: r,
                }).catch(() => {});
            });
          });
        } catch (e) {
          xe;
        }
        const e = "https://tweak-extension.com/uninstalltschussy07vv9cd6c4",
          t = "https://tweak-extension.com/docs/intro";
        try {
          b(e);
        } catch (e) {
          xe;
        }
        try {
          S((e) => {
            const o = e && e.reason,
              n = e && e.previousVersion;
            let a = () => {};
            switch (o) {
              case "update":
                if (n && "8.3.0" !== n) {
                  try {
                    Ge({
                      type: "PARTY",
                      text: Ie("extension_updated_message", {
                        version: "8.3.0",
                      }),
                    });
                  } catch (e) {
                    Te(e, "background", Ce);
                  }
                  a = _e.EXTERNAL_TWEAK_UPDATE;
                }
                break;
              case "install":
                try {
                  C({ url: t });
                } catch (e) {
                  Te(e, "background", Ce);
                }
                a = _e.EXTERNAL_TWEAK_INSTALL;
            }
            n && "8.3.0" === n
              ? Ce({
                  hitType: ie.TYPE_EVENT,
                  eventCategory: ie.CATEGORY_EXTERNAL,
                  eventAction: ie.ACTION_CHROME_EXT,
                  eventLabel: _e.EXTERNAL_TWEAK_REFRESH("8.3.0"),
                })
              : a &&
                "function" == typeof a &&
                Ce({
                  hitType: ie.TYPE_EVENT,
                  eventCategory: ie.CATEGORY_EXTERNAL,
                  eventAction: ie.ACTION_CHROME_EXT,
                  eventLabel: a("8.3.0"),
                });
          });
        } catch (e) {
          xe;
        }
      }
      try {
        I(async (e) => {
          if ("toggle-tweak-enabled-state" === e)
            return (async function () {
              try {
                const e = await Oe(),
                  { isExtensionActive: t } = e,
                  o = !t,
                  [n, a] = o
                    ? ["START_ALL_INTERCEPTIONS", re.STOP_ICON]
                    : ["STOP_ALL_INTERCEPTIONS", re.START_ICON];
                let r = -1;
                if (o)
                  try {
                    r = await v();
                  } catch (e) {
                    Te(e, "background", Ce), (r = -1);
                  }
                return me({
                  ...e,
                  wasExtensionActiveBeforeLeaveTab: o,
                  isExtensionActive: o,
                  activeTabId: r,
                })
                  .then(() => {
                    d({ path: a }), u(n, []);
                    const e = `${_e.RUN_STOP_BUTTON_CLICKED(t)} (shortcut)`;
                    Ce({
                      hitType: ie.TYPE_EVENT,
                      eventCategory: ie.CATEGORY_GLOBAL,
                      eventAction: ie.ACTION_CLICK,
                      eventLabel: e,
                    });
                  })
                  .catch((e) => {
                    Te(e, "background", Ce);
                  });
              } catch (e) {
                Te(e, "background", Ce);
              }
            })();
        });
      } catch (e) {
        Te(e, "background", Ce);
      }
      const qe = [
        "http://*/*.csv",
        "http://*/*.json",
        "http://*/*.xml",
        "https://*/*.csv",
        "https://*/*.json",
        "https://*/*.xml",
      ];
      try {
        chrome.scripting
          .registerContentScripts([
            {
              id: "tweak-ext-inpage-1",
              matches: ["http://*/*", "https://*/*"],
              js: ["tsp.bundle.js"],
              runAt: "document_start",
              world: "MAIN",
              allFrames: !0,
              excludeMatches: qe,
            },
          ])
          .catch((e) => {
            0;
          }),
          chrome.scripting
            .registerContentScripts([
              {
                id: "tweak-ext-inpage-2",
                matches: ["http://*/*", "https://*/*"],
                js: ["intercept.bundle.js"],
                runAt: "document_start",
                world: "MAIN",
                allFrames: !0,
                excludeMatches: qe,
              },
            ])
            .catch((e) => {
              0;
            }),
          chrome.scripting
            .registerContentScripts([
              {
                id: "proxy",
                matches: ["http://*/*", "https://*/*"],
                js: ["content-script.bundle.js"],
                runAt: "document_start",
                world: "ISOLATED",
                allFrames: !0,
                excludeMatches: qe,
              },
            ])
            .catch((e) => {
              0;
            });
      } catch (e) {
        0;
      }


      // PREMIUM PATCH
      console.log("Activating Premium...");
      Ge({ type: "PARTY", text: Ie("plan_activation_successful") });


  })();
})();
