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
          _ =
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
              return _(t, e), t;
            },
          i =
            (this && this.__awaiter) ||
            function (e, t, o, n) {
              return new (o || (o = Promise))(function (_, r) {
                function i(e) {
                  try {
                    a(n.next(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function c(e) {
                  try {
                    a(n.throw(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function a(e) {
                  var t;
                  e.done
                    ? _(e.value)
                    : ((t = e.value),
                      t instanceof o
                        ? t
                        : new o(function (e) {
                            e(t);
                          })).then(i, c);
                }
                a((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TweakApiHttpClient = t.ServerJSONError = void 0);
        const c = r(o(1247));
        class a extends Error {
          constructor(e) {
            super(e);
          }
        }
        t.ServerJSONError = a;
        t.TweakApiHttpClient = class {
          constructor(e) {
            this.config = e;
          }
          getStatus(e) {
            return this.doFetch(c.TweakApiBlueprints.status, e);
          }
          postAuth(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              c.TweakApiBlueprints.auth,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          postActivatePlan(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              c.TweakApiBlueprints.activatePlan,
              Object.assign(Object.assign({}, t), { method: "POST", body: o })
            );
          }
          postCheckPlan(e, t) {
            const o = this.parseBody(e);
            return this.doFetch(
              c.TweakApiBlueprints.checkPlan,
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
                        throw new a(JSON.stringify(t));
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
          _ =
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
              return _(t, e), t;
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
        var c = o(4084);
        Object.defineProperty(t, "withResilience", {
          enumerable: !0,
          get: function () {
            return c.withResilience;
          },
        });
      },
      4084: function (e, t) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, o, n) {
            return new (o || (o = Promise))(function (_, r) {
              function i(e) {
                try {
                  a(n.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function c(e) {
                try {
                  a(n.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function a(e) {
                var t;
                e.done
                  ? _(e.value)
                  : ((t = e.value),
                    t instanceof o
                      ? t
                      : new o(function (e) {
                          e(t);
                        })).then(i, c);
              }
              a((n = n.apply(e, t || [])).next());
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
        function _(e, t) {
          const o = Math.ceil(e),
            n = Math.floor(t);
          return Math.floor(Math.random() * (n - o) + o);
        }
        t.withResilience = function (e, t) {
          var r;
          return o(this, void 0, void 0, function* () {
            let o, i;
            for (let c = 0; c < t.retries; c++)
              try {
                (o = yield e()), (i = void 0);
                break;
              } catch (e) {
                i = e;
                const o =
                  null !== (r = null == t ? void 0 : t.retryInterval) &&
                  void 0 !== r
                    ? r
                    : _(1e3, 5e3);
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
    var _ = t[n];
    if (void 0 !== _) return _.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, o), r.exports;
  }
  (() => {
    const e = "chrome",
      t = "firefox",
      n = "CHROME".toLowerCase();
    function _(e = {}) {
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
        return chrome.runtime.getURL("popup.html").split("//")[1].split("/")[0];
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
    const c = { [e]: r, [t]: i }[n];
    const a = {
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
            _({ eid: o, o: t });
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
            _({ eid: o, o: t });
          });
        } catch (e) {
          0;
        }
      },
    }[n];
    function E(e) {
      chrome.runtime.onMessage.addListener((...t) => (e(...t), !0));
    }
    const s = { [e]: E, [t]: E }[n];
    var l,
      T = new Uint8Array(16);
    function u() {
      if (
        !l &&
        !(l =
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
      return l(T);
    }
    const d =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const O = function (e) {
      return "string" == typeof e && d.test(e);
    };
    for (var C = [], A = 0; A < 256; ++A)
      C.push((A + 256).toString(16).substr(1));
    const L = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = (
          C[e[t + 0]] +
          C[e[t + 1]] +
          C[e[t + 2]] +
          C[e[t + 3]] +
          "-" +
          C[e[t + 4]] +
          C[e[t + 5]] +
          "-" +
          C[e[t + 6]] +
          C[e[t + 7]] +
          "-" +
          C[e[t + 8]] +
          C[e[t + 9]] +
          "-" +
          C[e[t + 10]] +
          C[e[t + 11]] +
          C[e[t + 12]] +
          C[e[t + 13]] +
          C[e[t + 14]] +
          C[e[t + 15]]
        ).toLowerCase();
      if (!O(o)) throw TypeError("Stringified UUID is invalid");
      return o;
    };
    var p,
      I,
      R = 0,
      N = 0;
    const h = function (e, t, o) {
      var n = (t && o) || 0,
        _ = t || new Array(16),
        r = (e = e || {}).node || p,
        i = void 0 !== e.clockseq ? e.clockseq : I;
      if (null == r || null == i) {
        var c = e.random || (e.rng || u)();
        null == r && (r = p = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
          null == i && (i = I = 16383 & ((c[6] << 8) | c[7]));
      }
      var a = void 0 !== e.msecs ? e.msecs : Date.now(),
        E = void 0 !== e.nsecs ? e.nsecs : N + 1,
        s = a - R + (E - N) / 1e4;
      if (
        (s < 0 && void 0 === e.clockseq && (i = (i + 1) & 16383),
        (s < 0 || a > R) && void 0 === e.nsecs && (E = 0),
        E >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (R = a), (N = E), (I = i);
      var l = (1e4 * (268435455 & (a += 122192928e5)) + E) % 4294967296;
      (_[n++] = (l >>> 24) & 255),
        (_[n++] = (l >>> 16) & 255),
        (_[n++] = (l >>> 8) & 255),
        (_[n++] = 255 & l);
      var T = ((a / 4294967296) * 1e4) & 268435455;
      (_[n++] = (T >>> 8) & 255),
        (_[n++] = 255 & T),
        (_[n++] = ((T >>> 24) & 15) | 16),
        (_[n++] = (T >>> 16) & 255),
        (_[n++] = (i >>> 8) | 128),
        (_[n++] = 255 & i);
      for (var d = 0; d < 6; ++d) _[n + d] = r[d];
      return t || L(_);
    };
    var S = o(5498);
    const f = [
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
      v = "application/json; charset=utf-8";
    S.BZC.EXT_SCRIPT_ID;
    class P extends Error {
      constructor(...e) {
        super(...e),
          (this.name = "ImportInvalidTweakCollectionsFormatError"),
          (this.message =
            "format detection failed due to malformed/invalid tweak collections");
      }
    }
    class D extends Error {
      constructor(...e) {
        super(...e),
          (this.name = "ImportInvalidTweakVariablesFormatError"),
          (this.message =
            "format detection failed due to malformed/invalid tweak variables");
      }
    }
    class m extends Error {
      constructor(...e) {
        super(...e),
          (this.name = "ImportInvalidTweakDataFormatError"),
          (this.message =
            "format detection failed due to malformed/invalid data");
      }
    }
    class g extends Error {
      constructor(...e) {
        super(...e), (this.name = "ImportInvalidJSONError");
      }
    }
    class y extends Error {
      constructor(...e) {
        super(...e), (this.name = "FailedToSaveInBrowserStorageError");
      }
    }
    new Map(f.map(({ code: e, text: t }) => [e, t])),
      h(),
      new RegExp("[a-zA-Z][a-zA-Z_0-9]*", "g"),
      S.Types.Plan.Free,
      S.Types.Plan.Premium,
      S.Types.PlanStatus.Trialing,
      S.Types.PlanStatus.Active;
    const b = "return { method, url, body, headers };",
      w = { LACKING: 0, ACHIEVED: 1, LOGGED: 2 };
    let U, G, x, k, M, B, V, H, K, q;
    {
      (U = Object.freeze({
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
        (G = Object.freeze({
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
        (x = function (e) {
          try {
            a(void 0, {
              data: { type: "GOOGLE_ANALYTICS_EVENT", payload: [e] },
            });
          } catch (e) {
            0;
          }
        }),
        (k = function (e) {
          e &&
            x({
              hitType: U.TYPE_EVENT,
              eventCategory: U.CATEGORY_RC,
              eventAction: U.ACTION_CLICK,
              eventLabel: e,
            });
        });
      const e = {
        hitType: U.TYPE_EVENT,
        eventCategory: U.CATEGORY_GOALS,
        eventAction: U.ACTION_AUTO,
      };
      M = function (t, o = x) {
        t &&
          (t.goal100Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_100 }),
          t.goal500Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_500 }),
          t.goal1000Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_1000 }),
          t.goal10000Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_10000 }),
          t.goal20000Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_20000 }),
          t.goal50000Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_50000 }),
          t.goal100000Interceptions === w.ACHIEVED &&
            o({ ...e, eventLabel: G.GOAL_100000 }));
      };
      const t = ["operationName", "query", "variables"];
      B = function (e, o = x) {
        try {
          const { urlExpression: n, httpMethod: _, requestPayload: r } = e,
            i = {
              hitType: U.TYPE_EVENT,
              eventCategory: U.CATEGORY_RC,
              eventAction: U.ACTION_AUTO,
              eventLabel: G.REQUEST_INTERCEPTED_GRAPHQL_DETECTED,
            };
          if (
            "post" === _.toLowerCase() &&
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
      (V = function (e) {
        try {
          const { urlExpression: t } = e,
            _ = {
              hitType: U.TYPE_EVENT,
              eventCategory: U.CATEGORY_RC,
              eventAction: U.ACTION_AUTO,
            },
            r = t.toLowerCase();
          if (o.some((e) => r.includes(e))) {
            const e = G.REQUEST_INTERCEPTED_LOCALHOST_DETECTED;
            return void x({ ..._, eventLabel: e });
          }
          if (n.some((e) => r.includes(e))) {
            const e = G.REQUEST_INTERCEPTED_STAGING_DETECTED;
            return void x({ ..._, eventLabel: e });
          }
        } catch (e) {
          0;
        }
      }),
        (H = function (e, t, o = x) {
          try {
            if (!t) return;
            t.VARIABLES &&
              o({
                hitType: U.TYPE_EVENT,
                eventCategory: U.CATEGORY_RC,
                eventAction: U.ACTION_AUTO,
                eventLabel: G.REQUEST_INTERCEPTED_VARIABLES_DETECTED,
              }),
              t.GENERATOR &&
                o({
                  hitType: U.TYPE_EVENT,
                  eventCategory: U.CATEGORY_RC,
                  eventAction: U.ACTION_AUTO,
                  eventLabel: G.REQUEST_INTERCEPTED_GENERATOR_DETECTED,
                });
          } catch (e) {
            0;
          }
        }),
        (K = function (e, t = x) {
          try {
            e &&
              e.requestHookFn &&
              e.requestHookFn !== b &&
              t({
                hitType: U.TYPE_EVENT,
                eventCategory: U.CATEGORY_RC,
                eventAction: U.ACTION_AUTO,
                eventLabel: G.REQUEST_INTERCEPTED_REQUEST_HOOK_DETECTED,
              });
          } catch (e) {
            0;
          }
        }),
        (q = function (e, t = "popup", o = x) {
          o({
            hitType: U.TYPE_EVENT,
            eventCategory: U.CATEGORY_ERROR,
            eventAction: U.ACTION_UNK,
            eventLabel: G.RUNTIME_ERROR(t),
          });
        });
    }
    const F = "tweak-browser-extension-data";
    let j;
    try {
      j = c();
    } catch (e) {
      0;
    }
    function Y(e) {
      if (j) {
        const t = e && e.detail;
        t && a(j, t);
      } else 0;
    }
    "function" == typeof s &&
      s((e, t, o) => {
        window.postMessage(e, "*");
        try {
          o({ response: "ok" });
        } catch (e) {
          0;
        }
        return !0;
      }),
      window.removeEventListener("TweakGenericForwardEvent", Y),
      window.addEventListener("TweakGenericForwardEvent", Y, !1),
      (function (e = F) {
        return new Promise(function (t, o) {
          try {
            chrome.storage.local.get([e], function (o) {
              const n = chrome.runtime.lastError;
              n && n.message && n.message;
              const _ = o && o[e] ? o[e] : null;
              t(_);
            });
          } catch (e) {
            o(e);
          }
        });
      })()
        .catch((e) => {})
        .then((e) => {
          window.postMessage(
            { type: "__TWEAK_BOOTSTRAP__", payload: [e] },
            "*"
          );
        });
  })();
})();
