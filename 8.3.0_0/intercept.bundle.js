(() => {
  var e = {
      4690: (e, a) => {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.PADDLE =
            a.PADDLE_ENV_PRODUCTION =
            a.PADDLE_ENV_SANDBOX =
            a.ACTIVATION_PONG_EVENT =
            a.ACTIVATION_PING_EVENT =
            a.EXT_TO_WEB_EVENT_NAME =
            a.CROSS_SCRIPT_EVENT_NAME =
            a.EXT_SCRIPT_ID =
              void 0),
          (a.EXT_SCRIPT_ID = "__tweak_browser_extension_intercept_script__"),
          (a.CROSS_SCRIPT_EVENT_NAME = "TweakGenericForwardEvent"),
          (a.EXT_TO_WEB_EVENT_NAME = "TweakWebForwardEvent"),
          (a.ACTIVATION_PING_EVENT = "TPA"),
          (a.ACTIVATION_PONG_EVENT = "TPA_PONG"),
          (a.PADDLE_ENV_SANDBOX = "sdx"),
          (a.PADDLE_ENV_PRODUCTION = "prd"),
          (a.PADDLE = {
            [a.PADDLE_ENV_SANDBOX]: {
              vendorId: 4115,
              products: { premium: 21169, premium_annual: 39072 },
            },
            [a.PADDLE_ENV_PRODUCTION]: {
              vendorId: 138412,
              products: { premium: 765754, premium_annual: 802861 },
            },
          });
      },
      5976: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n),
                    Object.defineProperty(e, t, {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    });
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            },
          o =
            (this && this.__awaiter) ||
            function (e, a, n, t) {
              return new (n || (n = Promise))(function (r, i) {
                function o(e) {
                  try {
                    l(t.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    l(t.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function l(e) {
                  var a;
                  e.done
                    ? r(e.value)
                    : ((a = e.value),
                      a instanceof n
                        ? a
                        : new n(function (e) {
                            e(a);
                          })).then(o, s);
                }
                l((t = t.apply(e, a || [])).next());
              });
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.TweakApiHttpClient = a.ServerJSONError = void 0);
        const s = i(n(1247));
        class l extends Error {
          constructor(e) {
            super(e);
          }
        }
        a.ServerJSONError = l;
        a.TweakApiHttpClient = class {
          constructor(e) {
            this.config = e;
          }
          getStatus(e) {
            return this.doFetch(s.TweakApiBlueprints.status, e);
          }
          postAuth(e, a) {
            const n = this.parseBody(e);
            return this.doFetch(
              s.TweakApiBlueprints.auth,
              Object.assign(Object.assign({}, a), { method: "POST", body: n })
            );
          }
          postActivatePlan(e, a) {
            const n = this.parseBody(e);
            return this.doFetch(
              s.TweakApiBlueprints.activatePlan,
              Object.assign(Object.assign({}, a), { method: "POST", body: n })
            );
          }
          postCheckPlan(e, a) {
            const n = this.parseBody(e);
            return this.doFetch(
              s.TweakApiBlueprints.checkPlan,
              Object.assign(Object.assign({}, a), { method: "POST", body: n })
            );
          }
          parseBody(e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              throw e;
            }
          }
          doFetch(e, a) {
            const n = this.buildHeaders(null == a ? void 0 : a.headers),
              t = e ? `${this.config.baseUrl}${e}` : null;
            return null == t
              ? Promise.reject(new Error("invalid URL"))
              : fetch(t, Object.assign(Object.assign({}, a), { headers: n }))
                  .then((e) =>
                    o(this, void 0, void 0, function* () {
                      const a = yield e.json();
                      if (e.status >= 400 && e.status <= 599)
                        throw new l(JSON.stringify(a));
                      return a;
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
      5498: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n),
                    Object.defineProperty(e, t, {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    });
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.withResilience =
            a.BZC =
            a.Types =
            a.ServerJSONError =
            a.TweakApiHttpClient =
              void 0);
        var o = n(5976);
        Object.defineProperty(a, "TweakApiHttpClient", {
          enumerable: !0,
          get: function () {
            return o.TweakApiHttpClient;
          },
        }),
          Object.defineProperty(a, "ServerJSONError", {
            enumerable: !0,
            get: function () {
              return o.ServerJSONError;
            },
          }),
          (a.Types = i(n(1247))),
          (a.BZC = i(n(4690)));
        var s = n(4084);
        Object.defineProperty(a, "withResilience", {
          enumerable: !0,
          get: function () {
            return s.withResilience;
          },
        });
      },
      4084: function (e, a) {
        var n =
          (this && this.__awaiter) ||
          function (e, a, n, t) {
            return new (n || (n = Promise))(function (r, i) {
              function o(e) {
                try {
                  l(t.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  l(t.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function l(e) {
                var a;
                e.done
                  ? r(e.value)
                  : ((a = e.value),
                    a instanceof n
                      ? a
                      : new n(function (e) {
                          e(a);
                        })).then(o, s);
              }
              l((t = t.apply(e, a || [])).next());
            });
          };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.withResilience = void 0);
        function t(e) {
          return n(this, void 0, void 0, function* () {
            return yield new Promise((a) => {
              setTimeout(() => {
                a();
              }, e);
            });
          });
        }
        function r(e, a) {
          const n = Math.ceil(e),
            t = Math.floor(a);
          return Math.floor(Math.random() * (t - n) + n);
        }
        a.withResilience = function (e, a) {
          var i;
          return n(this, void 0, void 0, function* () {
            let n, o;
            for (let s = 0; s < a.retries; s++)
              try {
                (n = yield e()), (o = void 0);
                break;
              } catch (e) {
                o = e;
                const n =
                  null !== (i = null == a ? void 0 : a.retryInterval) &&
                  void 0 !== i
                    ? i
                    : r(1e3, 5e3);
                yield t(n);
              }
            if (o) throw o;
            return n;
          });
        };
      },
      1247: (e, a) => {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.AuthType =
            a.PlanStatus =
            a.Plan =
            a.Status =
            a.TweakApiBlueprints =
              void 0),
          (function (e) {
            (e.status = "/api/status"),
              (e.auth = "/api/auth"),
              (e.activatePlan = "/api/activate-plan"),
              (e.checkPlan = "/api/check-plan");
          })(a.TweakApiBlueprints || (a.TweakApiBlueprints = {})),
          (function (e) {
            (e.Serving = "serving"), (e.Down = "down");
          })(a.Status || (a.Status = {})),
          (function (e) {
            (e.Free = "x0"), (e.Premium = "x1"), (e.Unknown = "n/a");
          })(a.Plan || (a.Plan = {})),
          (function (e) {
            (e.Active = "y0"),
              (e.PastDue = "y1"),
              (e.Paused = "y2"),
              (e.Trialing = "y3"),
              (e.Deleted = "y4");
          })(a.PlanStatus || (a.PlanStatus = {})),
          (function (e) {
            (e.GitHub = "gh"), (e.Google = "alpha");
          })(a.AuthType || (a.AuthType = {}));
      },
      714: (e, a) => {
        var n;
        !(function () {
          var t = 9007199254740992,
            r = "0123456789",
            i = "abcdefghijklmnopqrstuvwxyz",
            o = i.toUpperCase(),
            s = r + "abcdef";
          function l(e) {
            (this.name = "UnsupportedError"),
              (this.message =
                e || "This feature is not supported on this platform");
          }
          (l.prototype = new Error()), (l.prototype.constructor = l);
          var c = Array.prototype.slice;
          function u(e) {
            if (!(this instanceof u))
              return e || (e = null), null === e ? new u() : new u(e);
            if ("function" == typeof e) return (this.random = e), this;
            arguments.length && (this.seed = 0);
            for (var a = 0; a < arguments.length; a++) {
              var n = 0;
              if (
                "[object String]" ===
                Object.prototype.toString.call(arguments[a])
              )
                for (var t = 0; t < arguments[a].length; t++) {
                  for (var r = 0, i = 0; i < arguments[a].length; i++)
                    r = arguments[a].charCodeAt(i) + (r << 6) + (r << 16) - r;
                  n += r;
                }
              else n = arguments[a];
              this.seed += (arguments.length - a) * n;
            }
            return (
              (this.mt = this.mersenne_twister(this.seed)),
              (this.bimd5 = this.blueimp_md5()),
              (this.random = function () {
                return this.mt.random(this.seed);
              }),
              this
            );
          }
          function d(e, a) {
            if (((e = e || {}), a))
              for (var n in a) void 0 === e[n] && (e[n] = a[n]);
            return e;
          }
          function m(e, a) {
            if (e) throw new RangeError(a);
          }
          u.prototype.VERSION = "1.1.11";
          var h = function () {
            throw new Error("No Base64 encoder available.");
          };
          function p(e) {
            this.c = e;
          }
          function b(e) {
            this.c = e;
          }
          function f(e) {
            this.c = e;
          }
          function g(e) {
            return function () {
              return this.natural(e);
            };
          }
          "function" == typeof btoa
            ? (h = btoa)
            : "function" == typeof Buffer &&
              (h = function (e) {
                return new Buffer(e).toString("base64");
              }),
            (u.prototype.bool = function (e) {
              return (
                m(
                  (e = d(e, { likelihood: 50 })).likelihood < 0 ||
                    e.likelihood > 100,
                  "Chance: Likelihood accepts values from 0 to 100."
                ),
                100 * this.random() < e.likelihood
              );
            }),
            (u.prototype.falsy = function (e) {
              var a = (e = d(e, { pool: [!1, null, 0, NaN, "", void 0] })).pool;
              return a[this.integer({ min: 0, max: a.length - 1 })];
            }),
            (u.prototype.animal = function (e) {
              if (void 0 !== (e = d(e)).type)
                return (
                  m(
                    !this.get("animals")[e.type.toLowerCase()],
                    "Please pick from desert, ocean, grassland, forest, zoo, pets, farm."
                  ),
                  this.pick(this.get("animals")[e.type.toLowerCase()])
                );
              return this.pick(
                this.get("animals")[
                  this.pick([
                    "desert",
                    "forest",
                    "ocean",
                    "zoo",
                    "farm",
                    "pet",
                    "grassland",
                  ])
                ]
              );
            }),
            (u.prototype.character = function (e) {
              var a,
                n,
                t = "!@#$%^&*()[]";
              return (
                (a =
                  "lower" === (e = d(e)).casing
                    ? i
                    : "upper" === e.casing
                    ? o
                    : i + o),
                e.pool
                  ? (n = e.pool)
                  : ((n = ""),
                    e.alpha && (n += a),
                    e.numeric && (n += r),
                    e.symbols && (n += t),
                    n || (n = a + r + t)),
                n.charAt(this.natural({ max: n.length - 1 }))
              );
            }),
            (u.prototype.floating = function (e) {
              m(
                (e = d(e, { fixed: 4 })).fixed && e.precision,
                "Chance: Cannot specify both fixed and precision."
              );
              var a = Math.pow(10, e.fixed),
                n = t / a,
                r = -n;
              m(
                e.min && e.fixed && e.min < r,
                "Chance: Min specified is out of range with fixed. Min should be, at least, " +
                  r
              ),
                m(
                  e.max && e.fixed && e.max > n,
                  "Chance: Max specified is out of range with fixed. Max should be, at most, " +
                    n
                ),
                (e = d(e, { min: r, max: n }));
              var i = (
                this.integer({ min: e.min * a, max: e.max * a }) / a
              ).toFixed(e.fixed);
              return parseFloat(i);
            }),
            (u.prototype.integer = function (e) {
              return (
                m(
                  (e = d(e, { min: -9007199254740992, max: t })).min > e.max,
                  "Chance: Min cannot be greater than Max."
                ),
                Math.floor(this.random() * (e.max - e.min + 1) + e.min)
              );
            }),
            (u.prototype.natural = function (e) {
              if (
                ("number" == typeof (e = d(e, { min: 0, max: t })).numerals &&
                  (m(
                    e.numerals < 1,
                    "Chance: Numerals cannot be less than one."
                  ),
                  (e.min = Math.pow(10, e.numerals - 1)),
                  (e.max = Math.pow(10, e.numerals) - 1)),
                m(e.min < 0, "Chance: Min cannot be less than zero."),
                e.exclude)
              ) {
                for (var a in (m(
                  !Array.isArray(e.exclude),
                  "Chance: exclude must be an array."
                ),
                e.exclude))
                  m(
                    !Number.isInteger(e.exclude[a]),
                    "Chance: exclude must be numbers."
                  );
                var n =
                    e.min +
                    this.natural({ max: e.max - e.min - e.exclude.length }),
                  r = e.exclude.sort();
                for (var i in r) {
                  if (n < r[i]) break;
                  n++;
                }
                return n;
              }
              return this.integer(e);
            }),
            (u.prototype.prime = function (e) {
              m(
                (e = d(e, { min: 0, max: 1e4 })).min < 0,
                "Chance: Min cannot be less than zero."
              ),
                m(e.min > e.max, "Chance: Min cannot be greater than Max.");
              var a = y.primes[y.primes.length - 1];
              if (e.max > a)
                for (var n = a + 2; n <= e.max; ++n)
                  this.is_prime(n) && y.primes.push(n);
              var t = y.primes.filter(function (a) {
                return a >= e.min && a <= e.max;
              });
              return this.pick(t);
            }),
            (u.prototype.is_prime = function (e) {
              if (e % 1 || e < 2) return !1;
              if (e % 2 == 0) return 2 === e;
              if (e % 3 == 0) return 3 === e;
              for (var a = Math.sqrt(e), n = 5; n <= a; n += 6)
                if (e % n == 0 || e % (n + 2) == 0) return !1;
              return !0;
            }),
            (u.prototype.hex = function (e) {
              m(
                (e = d(e, { min: 0, max: t, casing: "lower" })).min < 0,
                "Chance: Min cannot be less than zero."
              );
              var a = this.natural({ min: e.min, max: e.max });
              return "upper" === e.casing
                ? a.toString(16).toUpperCase()
                : a.toString(16);
            }),
            (u.prototype.letter = function (e) {
              e = d(e, { casing: "lower" });
              var a = this.character({ pool: "abcdefghijklmnopqrstuvwxyz" });
              return "upper" === e.casing && (a = a.toUpperCase()), a;
            }),
            (u.prototype.string = function (e) {
              0 === (e = d(e, { min: 5, max: 20 })).length ||
                e.length ||
                (e.length = this.natural({ min: e.min, max: e.max })),
                m(e.length < 0, "Chance: Length cannot be less than zero.");
              var a = e.length;
              return this.n(this.character, a, e).join("");
            }),
            (p.prototype = {
              substitute: function () {
                return this.c;
              },
            }),
            (b.prototype = {
              substitute: function () {
                if (!/[{}\\]/.test(this.c))
                  throw new Error(
                    'Invalid escape sequence: "\\' + this.c + '".'
                  );
                return this.c;
              },
            }),
            (f.prototype = {
              replacers: {
                "#": function (e) {
                  return e.character({ pool: r });
                },
                A: function (e) {
                  return e.character({ pool: o });
                },
                a: function (e) {
                  return e.character({ pool: i });
                },
              },
              substitute: function (e) {
                var a = this.replacers[this.c];
                if (!a)
                  throw new Error(
                    'Invalid replacement character: "' + this.c + '".'
                  );
                return a(e);
              },
            }),
            (u.prototype.template = function (e) {
              if (!e) throw new Error("Template string is required");
              var a = this;
              return (function (e) {
                for (var a = [], n = "identity", t = 0; t < e.length; t++) {
                  var r = e[t];
                  switch (n) {
                    case "escape":
                      a.push(new b(r)), (n = "identity");
                      break;
                    case "identity":
                      "{" === r
                        ? (n = "replace")
                        : "\\" === r
                        ? (n = "escape")
                        : a.push(new p(r));
                      break;
                    case "replace":
                      "}" === r ? (n = "identity") : a.push(new f(r));
                  }
                }
                return a;
              })(e)
                .map(function (e) {
                  return e.substitute(a);
                })
                .join("");
            }),
            (u.prototype.buffer = function (e) {
              if ("undefined" == typeof Buffer)
                throw new l(
                  "Sorry, the buffer() function is not supported on your platform"
                );
              m(
                (e = d(e, { length: this.natural({ min: 5, max: 20 }) }))
                  .length < 0,
                "Chance: Length cannot be less than zero."
              );
              var a = e.length,
                n = this.n(this.character, a, e);
              return Buffer.from(n);
            }),
            (u.prototype.capitalize = function (e) {
              return e.charAt(0).toUpperCase() + e.substr(1);
            }),
            (u.prototype.mixin = function (e) {
              for (var a in e) this[a] = e[a];
              return this;
            }),
            (u.prototype.unique = function (e, a, n) {
              m(
                "function" != typeof e,
                "Chance: The first argument must be a function."
              );
              var t = function (e, a) {
                return -1 !== e.indexOf(a);
              };
              n && (t = n.comparator || t);
              for (
                var r, i = [], o = 0, s = 50 * a, l = c.call(arguments, 2);
                i.length < a;

              ) {
                var u = JSON.parse(JSON.stringify(l));
                if (
                  (t(i, (r = e.apply(this, u))) || (i.push(r), (o = 0)),
                  ++o > s)
                )
                  throw new RangeError(
                    "Chance: num is likely too large for sample set"
                  );
              }
              return i;
            }),
            (u.prototype.n = function (e, a) {
              m(
                "function" != typeof e,
                "Chance: The first argument must be a function."
              ),
                void 0 === a && (a = 1);
              var n = a,
                t = [],
                r = c.call(arguments, 2);
              for (n = Math.max(0, n); n--; null) t.push(e.apply(this, r));
              return t;
            }),
            (u.prototype.pad = function (e, a, n) {
              return (
                (n = n || "0"),
                (e += "").length >= a
                  ? e
                  : new Array(a - e.length + 1).join(n) + e
              );
            }),
            (u.prototype.pick = function (e, a) {
              if (0 === e.length)
                throw new RangeError(
                  "Chance: Cannot pick() from an empty array"
                );
              return a && 1 !== a
                ? this.shuffle(e).slice(0, a)
                : e[this.natural({ max: e.length - 1 })];
            }),
            (u.prototype.pickone = function (e) {
              if (0 === e.length)
                throw new RangeError(
                  "Chance: Cannot pickone() from an empty array"
                );
              return e[this.natural({ max: e.length - 1 })];
            }),
            (u.prototype.pickset = function (e, a) {
              if (0 === a) return [];
              if (0 === e.length)
                throw new RangeError(
                  "Chance: Cannot pickset() from an empty array"
                );
              if (a < 0)
                throw new RangeError("Chance: Count must be a positive number");
              if (a && 1 !== a) {
                var n = e.slice(0),
                  t = n.length;
                return this.n(function () {
                  var e = this.natural({ max: --t }),
                    a = n[e];
                  return (n[e] = n[t]), a;
                }, Math.min(t, a));
              }
              return [this.pickone(e)];
            }),
            (u.prototype.shuffle = function (e) {
              for (
                var a,
                  n,
                  t = [],
                  r = 0,
                  i = Number(e.length),
                  o =
                    ((n = i),
                    Array.apply(null, Array(n)).map(function (e, a) {
                      return a;
                    })),
                  s = i - 1,
                  l = 0;
                l < i;
                l++
              )
                (r = o[(a = this.natural({ max: s }))]),
                  (t[l] = e[r]),
                  (o[a] = o[s]),
                  (s -= 1);
              return t;
            }),
            (u.prototype.weighted = function (e, a, n) {
              if (e.length !== a.length)
                throw new RangeError(
                  "Chance: Length of array and weights must match"
                );
              for (var t, r = 0, i = 0; i < a.length; ++i) {
                if (((t = a[i]), isNaN(t)))
                  throw new RangeError("Chance: All weights must be numbers");
                t > 0 && (r += t);
              }
              if (0 === r)
                throw new RangeError(
                  "Chance: No valid entries in array weights"
                );
              var o,
                s = this.random() * r,
                l = 0,
                c = -1;
              for (i = 0; i < a.length; ++i) {
                if (((l += t = a[i]), t > 0)) {
                  if (s <= l) {
                    o = i;
                    break;
                  }
                  c = i;
                }
                i === a.length - 1 && (o = c);
              }
              var u = e[o];
              return (
                (n = void 0 !== n && n) && (e.splice(o, 1), a.splice(o, 1)), u
              );
            }),
            (u.prototype.paragraph = function (e) {
              var a = (e = d(e)).sentences || this.natural({ min: 3, max: 7 }),
                n = this.n(this.sentence, a),
                t = !0 === e.linebreak ? "\n" : " ";
              return n.join(t);
            }),
            (u.prototype.sentence = function (e) {
              var a,
                n = (e = d(e)).words || this.natural({ min: 12, max: 18 }),
                t = e.punctuation;
              return (
                (a = this.n(this.word, n).join(" ")),
                (a = this.capitalize(a)),
                !1 === t || /^[.?;!:]$/.test(t) || (t = "."),
                t && (a += t),
                a
              );
            }),
            (u.prototype.syllable = function (e) {
              for (
                var a,
                  n = (e = d(e)).length || this.natural({ min: 2, max: 3 }),
                  t = "bcdfghjklmnprstvwz",
                  r = "aeiou",
                  i = "",
                  o = 0;
                o < n;
                o++
              )
                i += a =
                  0 === o
                    ? this.character({ pool: "bcdfghjklmnprstvwzaeiou" })
                    : -1 === t.indexOf(a)
                    ? this.character({ pool: t })
                    : this.character({ pool: r });
              return e.capitalize && (i = this.capitalize(i)), i;
            }),
            (u.prototype.word = function (e) {
              m(
                (e = d(e)).syllables && e.length,
                "Chance: Cannot specify both syllables AND length."
              );
              var a = e.syllables || this.natural({ min: 1, max: 3 }),
                n = "";
              if (e.length) {
                do {
                  n += this.syllable();
                } while (n.length < e.length);
                n = n.substring(0, e.length);
              } else for (var t = 0; t < a; t++) n += this.syllable();
              return e.capitalize && (n = this.capitalize(n)), n;
            }),
            (u.prototype.age = function (e) {
              var a;
              switch ((e = d(e)).type) {
                case "child":
                  a = { min: 0, max: 12 };
                  break;
                case "teen":
                  a = { min: 13, max: 19 };
                  break;
                case "adult":
                default:
                  a = { min: 18, max: 65 };
                  break;
                case "senior":
                  a = { min: 65, max: 100 };
                  break;
                case "all":
                  a = { min: 0, max: 100 };
              }
              return this.natural(a);
            }),
            (u.prototype.birthday = function (e) {
              var a = this.age(e),
                n = new Date(),
                t = n.getFullYear();
              if (e && e.type) {
                var r = new Date(),
                  i = new Date();
                r.setFullYear(t - a - 1),
                  i.setFullYear(t - a),
                  (e = d(e, { min: r, max: i }));
              } else if (!e || (void 0 === e.minAge && void 0 === e.maxAge))
                e = d(e, { year: t - a });
              else {
                m(e.minAge < 0, "Chance: MinAge cannot be less than zero."),
                  m(
                    e.minAge > e.maxAge,
                    "Chance: MinAge cannot be greater than MaxAge."
                  );
                var o = void 0 !== e.minAge ? e.minAge : 0,
                  s = void 0 !== e.maxAge ? e.maxAge : 100,
                  l = new Date(t - s - 1, n.getMonth(), n.getDate()),
                  c = new Date(t - o, n.getMonth(), n.getDate());
                l.setDate(l.getDate() + 1),
                  c.setDate(c.getDate() + 1),
                  c.setMilliseconds(c.getMilliseconds() - 1),
                  (e = d(e, { min: l, max: c }));
              }
              return this.date(e);
            }),
            (u.prototype.cpf = function (e) {
              e = d(e, { formatted: !0 });
              var a = this.n(this.natural, 9, { max: 9 }),
                n =
                  2 * a[8] +
                  3 * a[7] +
                  4 * a[6] +
                  5 * a[5] +
                  6 * a[4] +
                  7 * a[3] +
                  8 * a[2] +
                  9 * a[1] +
                  10 * a[0];
              (n = 11 - (n % 11)) >= 10 && (n = 0);
              var t =
                2 * n +
                3 * a[8] +
                4 * a[7] +
                5 * a[6] +
                6 * a[5] +
                7 * a[4] +
                8 * a[3] +
                9 * a[2] +
                10 * a[1] +
                11 * a[0];
              (t = 11 - (t % 11)) >= 10 && (t = 0);
              var r =
                "" +
                a[0] +
                a[1] +
                a[2] +
                "." +
                a[3] +
                a[4] +
                a[5] +
                "." +
                a[6] +
                a[7] +
                a[8] +
                "-" +
                n +
                t;
              return e.formatted ? r : r.replace(/\D/g, "");
            }),
            (u.prototype.cnpj = function (e) {
              e = d(e, { formatted: !0 });
              var a = this.n(this.natural, 12, { max: 12 }),
                n =
                  2 * a[11] +
                  3 * a[10] +
                  4 * a[9] +
                  5 * a[8] +
                  6 * a[7] +
                  7 * a[6] +
                  8 * a[5] +
                  9 * a[4] +
                  2 * a[3] +
                  3 * a[2] +
                  4 * a[1] +
                  5 * a[0];
              (n = 11 - (n % 11)) < 2 && (n = 0);
              var t =
                2 * n +
                3 * a[11] +
                4 * a[10] +
                5 * a[9] +
                6 * a[8] +
                7 * a[7] +
                8 * a[6] +
                9 * a[5] +
                2 * a[4] +
                3 * a[3] +
                4 * a[2] +
                5 * a[1] +
                6 * a[0];
              (t = 11 - (t % 11)) < 2 && (t = 0);
              var r =
                "" +
                a[0] +
                a[1] +
                "." +
                a[2] +
                a[3] +
                a[4] +
                "." +
                a[5] +
                a[6] +
                a[7] +
                "/" +
                a[8] +
                a[9] +
                a[10] +
                a[11] +
                "-" +
                n +
                t;
              return e.formatted ? r : r.replace(/\D/g, "");
            }),
            (u.prototype.first = function (e) {
              return (
                (e = d(e, { gender: this.gender(), nationality: "en" })),
                this.pick(
                  this.get("firstNames")[e.gender.toLowerCase()][
                    e.nationality.toLowerCase()
                  ]
                )
              );
            }),
            (u.prototype.profession = function (e) {
              return (e = d(e)).rank
                ? this.pick(["Apprentice ", "Junior ", "Senior ", "Lead "]) +
                    this.pick(this.get("profession"))
                : this.pick(this.get("profession"));
            }),
            (u.prototype.company = function () {
              return this.pick(this.get("company"));
            }),
            (u.prototype.gender = function (e) {
              return (
                (e = d(e, { extraGenders: [] })),
                this.pick(["Male", "Female"].concat(e.extraGenders))
              );
            }),
            (u.prototype.last = function (e) {
              if ("*" === (e = d(e, { nationality: "*" })).nationality) {
                var a = [],
                  n = this.get("lastNames");
                return (
                  Object.keys(n).forEach(function (e) {
                    a = a.concat(n[e]);
                  }),
                  this.pick(a)
                );
              }
              return this.pick(
                this.get("lastNames")[e.nationality.toLowerCase()]
              );
            }),
            (u.prototype.israelId = function () {
              for (
                var e = this.string({ pool: "0123456789", length: 8 }),
                  a = 0,
                  n = 0;
                n < e.length;
                n++
              ) {
                var t = e[n] * (n / 2 === parseInt(n / 2) ? 1 : 2);
                (t = this.pad(t, 2).toString()),
                  (a += t = parseInt(t[0]) + parseInt(t[1]));
              }
              return (e += (10 - parseInt(a.toString().slice(-1)))
                .toString()
                .slice(-1));
            }),
            (u.prototype.mrz = function (e) {
              var a,
                n,
                t,
                r,
                i = function (e) {
                  var a = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""),
                    n = [7, 3, 1],
                    t = 0;
                  return (
                    "string" != typeof e && (e = e.toString()),
                    e.split("").forEach(function (e, r) {
                      var i = a.indexOf(e);
                      (e = -1 !== i ? (0 === i ? 0 : i + 9) : parseInt(e, 10)),
                        (t += e *= n[r % n.length]);
                    }),
                    t % 10
                  );
                },
                o = this;
              return (
                (e = d(e, {
                  first: this.first(),
                  last: this.last(),
                  passportNumber: this.integer({ min: 1e8, max: 999999999 }),
                  dob:
                    ((a = o.birthday({ type: "adult" })),
                    [
                      a.getFullYear().toString().substr(2),
                      o.pad(a.getMonth() + 1, 2),
                      o.pad(a.getDate(), 2),
                    ].join("")),
                  expiry: (function () {
                    var e = new Date();
                    return [
                      (e.getFullYear() + 5).toString().substr(2),
                      o.pad(e.getMonth() + 1, 2),
                      o.pad(e.getDate(), 2),
                    ].join("");
                  })(),
                  gender: "Female" === this.gender() ? "F" : "M",
                  issuer: "GBR",
                  nationality: "GBR",
                })),
                (t = function (e) {
                  return new Array(e + 1).join("<");
                }),
                (r = [
                  "P<",
                  (n = e).issuer,
                  n.last.toUpperCase(),
                  "<<",
                  n.first.toUpperCase(),
                  t(39 - (n.last.length + n.first.length + 2)),
                  n.passportNumber,
                  i(n.passportNumber),
                  n.nationality,
                  n.dob,
                  i(n.dob),
                  n.gender,
                  n.expiry,
                  i(n.expiry),
                  t(14),
                  i(t(14)),
                ].join("")) +
                  i(r.substr(44, 10) + r.substr(57, 7) + r.substr(65, 7))
              );
            }),
            (u.prototype.name = function (e) {
              e = d(e);
              var a,
                n = this.first(e),
                t = this.last(e);
              return (
                (a = e.middle
                  ? n + " " + this.first(e) + " " + t
                  : e.middle_initial
                  ? n +
                    " " +
                    this.character({ alpha: !0, casing: "upper" }) +
                    ". " +
                    t
                  : n + " " + t),
                e.prefix && (a = this.prefix(e) + " " + a),
                e.suffix && (a = a + " " + this.suffix(e)),
                a
              );
            }),
            (u.prototype.name_prefixes = function (e) {
              var a = [{ name: "Doctor", abbreviation: "Dr." }];
              return (
                ("male" !== (e = (e = e || "all").toLowerCase()) &&
                  "all" !== e) ||
                  a.push({ name: "Mister", abbreviation: "Mr." }),
                ("female" !== e && "all" !== e) ||
                  (a.push({ name: "Miss", abbreviation: "Miss" }),
                  a.push({ name: "Misses", abbreviation: "Mrs." })),
                a
              );
            }),
            (u.prototype.prefix = function (e) {
              return this.name_prefix(e);
            }),
            (u.prototype.name_prefix = function (e) {
              return (e = d(e, { gender: "all" })).full
                ? this.pick(this.name_prefixes(e.gender)).name
                : this.pick(this.name_prefixes(e.gender)).abbreviation;
            }),
            (u.prototype.HIDN = function () {
              var e = "";
              return (
                (e += this.string({ pool: "0123456789", length: 6 })),
                (e += this.string({
                  pool: "ABCDEFGHIJKLMNOPQRSTUVWXYXZ",
                  length: 2,
                }))
              );
            }),
            (u.prototype.ssn = function (e) {
              var a = "1234567890",
                n = (e = d(e, { ssnFour: !1, dashes: !0 })).dashes ? "-" : "";
              return e.ssnFour
                ? this.string({ pool: a, length: 4 })
                : this.string({ pool: a, length: 3 }) +
                    n +
                    this.string({ pool: a, length: 2 }) +
                    n +
                    this.string({ pool: a, length: 4 });
            }),
            (u.prototype.aadhar = function (e) {
              var a = "1234567890",
                n = (e = d(e, { onlyLastFour: !1, separatedByWhiteSpace: !0 }))
                  .separatedByWhiteSpace
                  ? " "
                  : "";
              return e.onlyLastFour
                ? this.string({ pool: a, length: 4 })
                : this.string({ pool: a, length: 4 }) +
                    n +
                    this.string({ pool: a, length: 4 }) +
                    n +
                    this.string({ pool: a, length: 4 });
            }),
            (u.prototype.name_suffixes = function () {
              return [
                {
                  name: "Doctor of Osteopathic Medicine",
                  abbreviation: "D.O.",
                },
                { name: "Doctor of Philosophy", abbreviation: "Ph.D." },
                { name: "Esquire", abbreviation: "Esq." },
                { name: "Junior", abbreviation: "Jr." },
                { name: "Juris Doctor", abbreviation: "J.D." },
                { name: "Master of Arts", abbreviation: "M.A." },
                {
                  name: "Master of Business Administration",
                  abbreviation: "M.B.A.",
                },
                { name: "Master of Science", abbreviation: "M.S." },
                { name: "Medical Doctor", abbreviation: "M.D." },
                { name: "Senior", abbreviation: "Sr." },
                { name: "The Third", abbreviation: "III" },
                { name: "The Fourth", abbreviation: "IV" },
                { name: "Bachelor of Engineering", abbreviation: "B.E" },
                { name: "Bachelor of Technology", abbreviation: "B.TECH" },
              ];
            }),
            (u.prototype.suffix = function (e) {
              return this.name_suffix(e);
            }),
            (u.prototype.name_suffix = function (e) {
              return (e = d(e)).full
                ? this.pick(this.name_suffixes()).name
                : this.pick(this.name_suffixes()).abbreviation;
            }),
            (u.prototype.nationalities = function () {
              return this.get("nationalities");
            }),
            (u.prototype.nationality = function () {
              return this.pick(this.nationalities()).name;
            }),
            (u.prototype.zodiac = function () {
              return this.pickone([
                "Aries",
                "Taurus",
                "Gemini",
                "Cancer",
                "Leo",
                "Virgo",
                "Libra",
                "Scorpio",
                "Sagittarius",
                "Capricorn",
                "Aquarius",
                "Pisces",
              ]);
            }),
            (u.prototype.android_id = function () {
              return (
                "APA91" +
                this.string({
                  pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
                  length: 178,
                })
              );
            }),
            (u.prototype.apple_token = function () {
              return this.string({ pool: "abcdef1234567890", length: 64 });
            }),
            (u.prototype.wp8_anid2 = function () {
              return h(this.hash({ length: 32 }));
            }),
            (u.prototype.wp7_anid = function () {
              return (
                "A=" +
                this.guid().replace(/-/g, "").toUpperCase() +
                "&E=" +
                this.hash({ length: 3 }) +
                "&W=" +
                this.integer({ min: 0, max: 9 })
              );
            }),
            (u.prototype.bb_pin = function () {
              return this.hash({ length: 8 });
            }),
            (u.prototype.avatar = function (e) {
              var a = {
                protocol: null,
                email: null,
                fileExtension: null,
                size: null,
                fallback: null,
                rating: null,
              };
              if (e)
                if ("string" == typeof e) (a.email = e), (e = {});
                else {
                  if ("object" != typeof e) return null;
                  if ("Array" === e.constructor) return null;
                }
              else (a.email = this.email()), (e = {});
              return (
                (a = d(e, a)).email || (a.email = this.email()),
                (a.protocol = { http: "http", https: "https" }[a.protocol]
                  ? a.protocol + ":"
                  : ""),
                (a.size = parseInt(a.size, 0) ? a.size : ""),
                (a.rating = { g: "g", pg: "pg", r: "r", x: "x" }[a.rating]
                  ? a.rating
                  : ""),
                (a.fallback = {
                  404: "404",
                  mm: "mm",
                  identicon: "identicon",
                  monsterid: "monsterid",
                  wavatar: "wavatar",
                  retro: "retro",
                  blank: "blank",
                }[a.fallback]
                  ? a.fallback
                  : ""),
                (a.fileExtension = {
                  bmp: "bmp",
                  gif: "gif",
                  jpg: "jpg",
                  png: "png",
                }[a.fileExtension]
                  ? a.fileExtension
                  : ""),
                a.protocol +
                  "//www.gravatar.com/avatar/" +
                  this.bimd5.md5(a.email) +
                  (a.fileExtension ? "." + a.fileExtension : "") +
                  (a.size || a.rating || a.fallback ? "?" : "") +
                  (a.size ? "&s=" + a.size.toString() : "") +
                  (a.rating ? "&r=" + a.rating : "") +
                  (a.fallback ? "&d=" + a.fallback : "")
              );
            }),
            (u.prototype.color = function (e) {
              function a(e, a) {
                return [e, e, e].join(a || "");
              }
              function n(e) {
                var n = e ? "rgba" : "rgb",
                  t = e ? "," + this.floating({ min: b, max: f }) : "";
                return (
                  n +
                  "(" +
                  (i
                    ? a(this.natural({ min: o, max: s }), ",")
                    : this.natural({ min: u, max: m }) +
                      "," +
                      this.natural({ min: h, max: p }) +
                      "," +
                      this.natural({ max: 255 })) +
                  t +
                  ")"
                );
              }
              function t(n, t, r) {
                var d = r ? "#" : "",
                  b = "";
                return (
                  i
                    ? ((b = a(this.pad(this.hex({ min: o, max: s }), 2))),
                      "shorthex" === e.format &&
                        (b = a(this.hex({ min: 0, max: 15 }))))
                    : (b =
                        "shorthex" === e.format
                          ? this.pad(
                              this.hex({
                                min: Math.floor(l / 16),
                                max: Math.floor(c / 16),
                              }),
                              1
                            ) +
                            this.pad(
                              this.hex({
                                min: Math.floor(u / 16),
                                max: Math.floor(m / 16),
                              }),
                              1
                            ) +
                            this.pad(
                              this.hex({
                                min: Math.floor(h / 16),
                                max: Math.floor(p / 16),
                              }),
                              1
                            )
                          : void 0 !== l ||
                            void 0 !== c ||
                            void 0 !== u ||
                            void 0 !== m ||
                            void 0 !== h ||
                            void 0 !== p
                          ? this.pad(this.hex({ min: l, max: c }), 2) +
                            this.pad(this.hex({ min: u, max: m }), 2) +
                            this.pad(this.hex({ min: h, max: p }), 2)
                          : this.pad(this.hex({ min: o, max: s }), 2) +
                            this.pad(this.hex({ min: o, max: s }), 2) +
                            this.pad(this.hex({ min: o, max: s }), 2)),
                  d + b
                );
              }
              var r,
                i = (e = d(e, {
                  format: this.pick([
                    "hex",
                    "shorthex",
                    "rgb",
                    "rgba",
                    "0x",
                    "name",
                  ]),
                  grayscale: !1,
                  casing: "lower",
                  min: 0,
                  max: 255,
                  min_red: void 0,
                  max_red: void 0,
                  min_green: void 0,
                  max_green: void 0,
                  min_blue: void 0,
                  max_blue: void 0,
                  min_alpha: 0,
                  max_alpha: 1,
                })).grayscale,
                o = e.min,
                s = e.max,
                l = e.min_red,
                c = e.max_red,
                u = e.min_green,
                m = e.max_green,
                h = e.min_blue,
                p = e.max_blue,
                b = e.min_alpha,
                f = e.max_alpha;
              if (
                (void 0 === e.min_red && (l = o),
                void 0 === e.max_red && (c = s),
                void 0 === e.min_green && (u = o),
                void 0 === e.max_green && (m = s),
                void 0 === e.min_blue && (h = o),
                void 0 === e.max_blue && (p = s),
                void 0 === e.min_alpha && (b = 0),
                void 0 === e.max_alpha && (f = 1),
                i &&
                  0 === o &&
                  255 === s &&
                  void 0 !== l &&
                  void 0 !== c &&
                  ((o = (l + u + h) / 3), (s = (c + m + p) / 3)),
                "hex" === e.format)
              )
                r = t.call(this, 2, 6, !0);
              else if ("shorthex" === e.format) r = t.call(this, 1, 3, !0);
              else if ("rgb" === e.format) r = n.call(this, !1);
              else if ("rgba" === e.format) r = n.call(this, !0);
              else {
                if ("0x" !== e.format) {
                  if ("name" === e.format)
                    return this.pick(this.get("colorNames"));
                  throw new RangeError(
                    'Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".'
                  );
                }
                r = "0x" + t.call(this, 2, 6);
              }
              return "upper" === e.casing && (r = r.toUpperCase()), r;
            }),
            (u.prototype.domain = function (e) {
              return (e = d(e)), this.word() + "." + (e.tld || this.tld());
            }),
            (u.prototype.email = function (e) {
              return (
                (e = d(e)),
                this.word({ length: e.length }) +
                  "@" +
                  (e.domain || this.domain())
              );
            }),
            (u.prototype.fbid = function () {
              return "10000" + this.string({ pool: "1234567890", length: 11 });
            }),
            (u.prototype.google_analytics = function () {
              return (
                "UA-" +
                this.pad(this.natural({ max: 999999 }), 6) +
                "-" +
                this.pad(this.natural({ max: 99 }), 2)
              );
            }),
            (u.prototype.hashtag = function () {
              return "#" + this.word();
            }),
            (u.prototype.ip = function () {
              return (
                this.natural({ min: 1, max: 254 }) +
                "." +
                this.natural({ max: 255 }) +
                "." +
                this.natural({ max: 255 }) +
                "." +
                this.natural({ min: 1, max: 254 })
              );
            }),
            (u.prototype.ipv6 = function () {
              return this.n(this.hash, 8, { length: 4 }).join(":");
            }),
            (u.prototype.klout = function () {
              return this.natural({ min: 1, max: 99 });
            }),
            (u.prototype.mac = function (e) {
              return (
                (e = d(e, { delimiter: ":" })),
                this.pad(this.natural({ max: 255 }).toString(16), 2) +
                  e.delimiter +
                  this.pad(this.natural({ max: 255 }).toString(16), 2) +
                  e.delimiter +
                  this.pad(this.natural({ max: 255 }).toString(16), 2) +
                  e.delimiter +
                  this.pad(this.natural({ max: 255 }).toString(16), 2) +
                  e.delimiter +
                  this.pad(this.natural({ max: 255 }).toString(16), 2) +
                  e.delimiter +
                  this.pad(this.natural({ max: 255 }).toString(16), 2)
              );
            }),
            (u.prototype.semver = function (e) {
              e = d(e, { include_prerelease: !0 });
              var a = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
              e.range && (a = e.range);
              var n = "";
              return (
                e.include_prerelease &&
                  (n = this.weighted(
                    ["", "-dev", "-beta", "-alpha"],
                    [50, 10, 5, 1]
                  )),
                a + this.rpg("3d10").join(".") + n
              );
            }),
            (u.prototype.tlds = function () {
              return [
                "com",
                "org",
                "edu",
                "gov",
                "co.uk",
                "net",
                "io",
                "ac",
                "ad",
                "ae",
                "af",
                "ag",
                "ai",
                "al",
                "am",
                "ao",
                "aq",
                "ar",
                "as",
                "at",
                "au",
                "aw",
                "ax",
                "az",
                "ba",
                "bb",
                "bd",
                "be",
                "bf",
                "bg",
                "bh",
                "bi",
                "bj",
                "bm",
                "bn",
                "bo",
                "br",
                "bs",
                "bt",
                "bv",
                "bw",
                "by",
                "bz",
                "ca",
                "cc",
                "cd",
                "cf",
                "cg",
                "ch",
                "ci",
                "ck",
                "cl",
                "cm",
                "cn",
                "co",
                "cr",
                "cu",
                "cv",
                "cw",
                "cx",
                "cy",
                "cz",
                "de",
                "dj",
                "dk",
                "dm",
                "do",
                "dz",
                "ec",
                "ee",
                "eg",
                "eh",
                "er",
                "es",
                "et",
                "eu",
                "fi",
                "fj",
                "fk",
                "fm",
                "fo",
                "fr",
                "ga",
                "gb",
                "gd",
                "ge",
                "gf",
                "gg",
                "gh",
                "gi",
                "gl",
                "gm",
                "gn",
                "gp",
                "gq",
                "gr",
                "gs",
                "gt",
                "gu",
                "gw",
                "gy",
                "hk",
                "hm",
                "hn",
                "hr",
                "ht",
                "hu",
                "id",
                "ie",
                "il",
                "im",
                "in",
                "io",
                "iq",
                "ir",
                "is",
                "it",
                "je",
                "jm",
                "jo",
                "jp",
                "ke",
                "kg",
                "kh",
                "ki",
                "km",
                "kn",
                "kp",
                "kr",
                "kw",
                "ky",
                "kz",
                "la",
                "lb",
                "lc",
                "li",
                "lk",
                "lr",
                "ls",
                "lt",
                "lu",
                "lv",
                "ly",
                "ma",
                "mc",
                "md",
                "me",
                "mg",
                "mh",
                "mk",
                "ml",
                "mm",
                "mn",
                "mo",
                "mp",
                "mq",
                "mr",
                "ms",
                "mt",
                "mu",
                "mv",
                "mw",
                "mx",
                "my",
                "mz",
                "na",
                "nc",
                "ne",
                "nf",
                "ng",
                "ni",
                "nl",
                "no",
                "np",
                "nr",
                "nu",
                "nz",
                "om",
                "pa",
                "pe",
                "pf",
                "pg",
                "ph",
                "pk",
                "pl",
                "pm",
                "pn",
                "pr",
                "ps",
                "pt",
                "pw",
                "py",
                "qa",
                "re",
                "ro",
                "rs",
                "ru",
                "rw",
                "sa",
                "sb",
                "sc",
                "sd",
                "se",
                "sg",
                "sh",
                "si",
                "sj",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sr",
                "ss",
                "st",
                "su",
                "sv",
                "sx",
                "sy",
                "sz",
                "tc",
                "td",
                "tf",
                "tg",
                "th",
                "tj",
                "tk",
                "tl",
                "tm",
                "tn",
                "to",
                "tp",
                "tr",
                "tt",
                "tv",
                "tw",
                "tz",
                "ua",
                "ug",
                "uk",
                "us",
                "uy",
                "uz",
                "va",
                "vc",
                "ve",
                "vg",
                "vi",
                "vn",
                "vu",
                "wf",
                "ws",
                "ye",
                "yt",
                "za",
                "zm",
                "zw",
              ];
            }),
            (u.prototype.tld = function () {
              return this.pick(this.tlds());
            }),
            (u.prototype.twitter = function () {
              return "@" + this.word();
            }),
            (u.prototype.url = function (e) {
              var a =
                  (e = d(e, {
                    protocol: "http",
                    domain: this.domain(e),
                    domain_prefix: "",
                    path: this.word(),
                    extensions: [],
                  })).extensions.length > 0
                    ? "." + this.pick(e.extensions)
                    : "",
                n = e.domain_prefix
                  ? e.domain_prefix + "." + e.domain
                  : e.domain;
              return e.protocol + "://" + n + "/" + e.path + a;
            }),
            (u.prototype.port = function () {
              return this.integer({ min: 0, max: 65535 });
            }),
            (u.prototype.locale = function (e) {
              return (e = d(e)).region
                ? this.pick(this.get("locale_regions"))
                : this.pick(this.get("locale_languages"));
            }),
            (u.prototype.locales = function (e) {
              return (e = d(e)).region
                ? this.get("locale_regions")
                : this.get("locale_languages");
            }),
            (u.prototype.loremPicsum = function (e) {
              var a = (e = d(e, {
                  width: 500,
                  height: 500,
                  greyscale: !1,
                  blurred: !1,
                })).greyscale
                  ? "g/"
                  : "",
                n = e.blurred ? "/?blur" : "/?random";
              return (
                "https://picsum.photos/" + a + e.width + "/" + e.height + n
              );
            }),
            (u.prototype.address = function (e) {
              return (
                (e = d(e)),
                this.natural({ min: 5, max: 2e3 }) + " " + this.street(e)
              );
            }),
            (u.prototype.altitude = function (e) {
              return (
                (e = d(e, { fixed: 5, min: 0, max: 8848 })),
                this.floating({ min: e.min, max: e.max, fixed: e.fixed })
              );
            }),
            (u.prototype.areacode = function (e) {
              var a = (e = d(e, { parens: !0 })).exampleNumber
                ? "555"
                : this.natural({ min: 2, max: 9 }).toString() +
                  this.natural({ min: 0, max: 8 }).toString() +
                  this.natural({ min: 0, max: 9 }).toString();
              return e.parens ? "(" + a + ")" : a;
            }),
            (u.prototype.city = function () {
              return this.capitalize(this.word({ syllables: 3 }));
            }),
            (u.prototype.coordinates = function (e) {
              return this.latitude(e) + ", " + this.longitude(e);
            }),
            (u.prototype.countries = function () {
              return this.get("countries");
            }),
            (u.prototype.country = function (e) {
              e = d(e);
              var a = this.pick(this.countries());
              return e.raw ? a : e.full ? a.name : a.abbreviation;
            }),
            (u.prototype.depth = function (e) {
              return (
                (e = d(e, { fixed: 5, min: -10994, max: 0 })),
                this.floating({ min: e.min, max: e.max, fixed: e.fixed })
              );
            }),
            (u.prototype.geohash = function (e) {
              return (
                (e = d(e, { length: 7 })),
                this.string({
                  length: e.length,
                  pool: "0123456789bcdefghjkmnpqrstuvwxyz",
                })
              );
            }),
            (u.prototype.geojson = function (e) {
              return (
                this.latitude(e) +
                ", " +
                this.longitude(e) +
                ", " +
                this.altitude(e)
              );
            }),
            (u.prototype.latitude = function (e) {
              var [a, n, t] = ["ddm", "dms", "dd"],
                r = (e = d(
                  e,
                  e && e.format && [a, n].includes(e.format.toLowerCase())
                    ? { min: 0, max: 89, fixed: 4 }
                    : { fixed: 5, min: -90, max: 90, format: t }
                )).format.toLowerCase();
              switch (
                ((r !== a && r !== n) ||
                  (m(
                    e.min < 0 || e.min > 89,
                    "Chance: Min specified is out of range. Should be between 0 - 89"
                  ),
                  m(
                    e.max < 0 || e.max > 89,
                    "Chance: Max specified is out of range. Should be between 0 - 89"
                  ),
                  m(
                    e.fixed > 4,
                    "Chance: Fixed specified should be below or equal to 4"
                  )),
                r)
              ) {
                case a:
                  return (
                    this.integer({ min: e.min, max: e.max }) +
                    "°" +
                    this.floating({ min: 0, max: 59, fixed: e.fixed })
                  );
                case n:
                  return (
                    this.integer({ min: e.min, max: e.max }) +
                    "°" +
                    this.integer({ min: 0, max: 59 }) +
                    "’" +
                    this.floating({ min: 0, max: 59, fixed: e.fixed }) +
                    "”"
                  );
                default:
                  return this.floating({
                    min: e.min,
                    max: e.max,
                    fixed: e.fixed,
                  });
              }
            }),
            (u.prototype.longitude = function (e) {
              var [a, n, t] = ["ddm", "dms", "dd"],
                r = (e = d(
                  e,
                  e && e.format && [a, n].includes(e.format.toLowerCase())
                    ? { min: 0, max: 179, fixed: 4 }
                    : { fixed: 5, min: -180, max: 180, format: t }
                )).format.toLowerCase();
              switch (
                ((r !== a && r !== n) ||
                  (m(
                    e.min < 0 || e.min > 179,
                    "Chance: Min specified is out of range. Should be between 0 - 179"
                  ),
                  m(
                    e.max < 0 || e.max > 179,
                    "Chance: Max specified is out of range. Should be between 0 - 179"
                  ),
                  m(
                    e.fixed > 4,
                    "Chance: Fixed specified should be below or equal to 4"
                  )),
                r)
              ) {
                case a:
                  return (
                    this.integer({ min: e.min, max: e.max }) +
                    "°" +
                    this.floating({ min: 0, max: 59.9999, fixed: e.fixed })
                  );
                case n:
                  return (
                    this.integer({ min: e.min, max: e.max }) +
                    "°" +
                    this.integer({ min: 0, max: 59 }) +
                    "’" +
                    this.floating({ min: 0, max: 59.9999, fixed: e.fixed }) +
                    "”"
                  );
                default:
                  return this.floating({
                    min: e.min,
                    max: e.max,
                    fixed: e.fixed,
                  });
              }
            }),
            (u.prototype.phone = function (e) {
              var a,
                n,
                t = this,
                r = function (e) {
                  var a = [];
                  return (
                    e.sections.forEach(function (e) {
                      a.push(t.string({ pool: "0123456789", length: e }));
                    }),
                    e.area + a.join(" ")
                  );
                };
              switch (
                ((e = d(e, {
                  formatted: !0,
                  country: "us",
                  mobile: !1,
                  exampleNumber: !1,
                })).formatted || (e.parens = !1),
                e.country)
              ) {
                case "fr":
                  e.mobile
                    ? ((a =
                        this.pick(["06", "07"]) +
                        t.string({ pool: "0123456789", length: 8 })),
                      (n = e.formatted ? a.match(/../g).join(" ") : a))
                    : ((a = this.pick([
                        "01" +
                          this.pick([
                            "30",
                            "34",
                            "39",
                            "40",
                            "41",
                            "42",
                            "43",
                            "44",
                            "45",
                            "46",
                            "47",
                            "48",
                            "49",
                            "53",
                            "55",
                            "56",
                            "58",
                            "60",
                            "64",
                            "69",
                            "70",
                            "72",
                            "73",
                            "74",
                            "75",
                            "76",
                            "77",
                            "78",
                            "79",
                            "80",
                            "81",
                            "82",
                            "83",
                          ]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "02" +
                          this.pick([
                            "14",
                            "18",
                            "22",
                            "23",
                            "28",
                            "29",
                            "30",
                            "31",
                            "32",
                            "33",
                            "34",
                            "35",
                            "36",
                            "37",
                            "38",
                            "40",
                            "41",
                            "43",
                            "44",
                            "45",
                            "46",
                            "47",
                            "48",
                            "49",
                            "50",
                            "51",
                            "52",
                            "53",
                            "54",
                            "56",
                            "57",
                            "61",
                            "62",
                            "69",
                            "72",
                            "76",
                            "77",
                            "78",
                            "85",
                            "90",
                            "96",
                            "97",
                            "98",
                            "99",
                          ]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "03" +
                          this.pick([
                            "10",
                            "20",
                            "21",
                            "22",
                            "23",
                            "24",
                            "25",
                            "26",
                            "27",
                            "28",
                            "29",
                            "39",
                            "44",
                            "45",
                            "51",
                            "52",
                            "54",
                            "55",
                            "57",
                            "58",
                            "59",
                            "60",
                            "61",
                            "62",
                            "63",
                            "64",
                            "65",
                            "66",
                            "67",
                            "68",
                            "69",
                            "70",
                            "71",
                            "72",
                            "73",
                            "80",
                            "81",
                            "82",
                            "83",
                            "84",
                            "85",
                            "86",
                            "87",
                            "88",
                            "89",
                            "90",
                          ]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "04" +
                          this.pick([
                            "11",
                            "13",
                            "15",
                            "20",
                            "22",
                            "26",
                            "27",
                            "30",
                            "32",
                            "34",
                            "37",
                            "42",
                            "43",
                            "44",
                            "50",
                            "56",
                            "57",
                            "63",
                            "66",
                            "67",
                            "68",
                            "69",
                            "70",
                            "71",
                            "72",
                            "73",
                            "74",
                            "75",
                            "76",
                            "77",
                            "78",
                            "79",
                            "80",
                            "81",
                            "82",
                            "83",
                            "84",
                            "85",
                            "86",
                            "88",
                            "89",
                            "90",
                            "91",
                            "92",
                            "93",
                            "94",
                            "95",
                            "97",
                            "98",
                          ]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "05" +
                          this.pick([
                            "08",
                            "16",
                            "17",
                            "19",
                            "24",
                            "31",
                            "32",
                            "33",
                            "34",
                            "35",
                            "40",
                            "45",
                            "46",
                            "47",
                            "49",
                            "53",
                            "55",
                            "56",
                            "57",
                            "58",
                            "59",
                            "61",
                            "62",
                            "63",
                            "64",
                            "65",
                            "67",
                            "79",
                            "81",
                            "82",
                            "86",
                            "87",
                            "90",
                            "94",
                          ]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "09" + t.string({ pool: "0123456789", length: 8 }),
                      ])),
                      (n = e.formatted ? a.match(/../g).join(" ") : a));
                  break;
                case "uk":
                  e.mobile
                    ? ((a = this.pick([
                        {
                          area: "07" + this.pick(["4", "5", "7", "8", "9"]),
                          sections: [2, 6],
                        },
                        { area: "07624 ", sections: [6] },
                      ])),
                      (n = e.formatted ? r(a) : r(a).replace(" ", "")))
                    : ((a = this.pick([
                        {
                          area:
                            "01" + this.character({ pool: "234569" }) + "1 ",
                          sections: [3, 4],
                        },
                        {
                          area: "020 " + this.character({ pool: "378" }),
                          sections: [3, 4],
                        },
                        {
                          area: "023 " + this.character({ pool: "89" }),
                          sections: [3, 4],
                        },
                        { area: "024 7", sections: [3, 4] },
                        {
                          area:
                            "028 " +
                            this.pick([
                              "25",
                              "28",
                              "37",
                              "71",
                              "82",
                              "90",
                              "92",
                              "95",
                            ]),
                          sections: [2, 4],
                        },
                        {
                          area:
                            "012" +
                            this.pick(["04", "08", "54", "76", "97", "98"]) +
                            " ",
                          sections: [6],
                        },
                        {
                          area:
                            "013" + this.pick(["63", "64", "84", "86"]) + " ",
                          sections: [6],
                        },
                        {
                          area:
                            "014" +
                            this.pick(["04", "20", "60", "61", "80", "88"]) +
                            " ",
                          sections: [6],
                        },
                        {
                          area:
                            "015" + this.pick(["24", "27", "62", "66"]) + " ",
                          sections: [6],
                        },
                        {
                          area:
                            "016" +
                            this.pick(["06", "29", "35", "47", "59", "95"]) +
                            " ",
                          sections: [6],
                        },
                        {
                          area:
                            "017" + this.pick(["26", "44", "50", "68"]) + " ",
                          sections: [6],
                        },
                        {
                          area:
                            "018" + this.pick(["27", "37", "84", "97"]) + " ",
                          sections: [6],
                        },
                        {
                          area:
                            "019" +
                            this.pick([
                              "00",
                              "05",
                              "35",
                              "46",
                              "49",
                              "63",
                              "95",
                            ]) +
                            " ",
                          sections: [6],
                        },
                      ])),
                      (n = e.formatted ? r(a) : r(a).replace(" ", "", "g")));
                  break;
                case "za":
                  e.mobile
                    ? ((a = this.pick([
                        "060" +
                          this.pick(["3", "4", "5", "6", "7", "8", "9"]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "061" +
                          this.pick(["0", "1", "2", "3", "4", "5", "8"]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "06" + t.string({ pool: "0123456789", length: 7 }),
                        "071" +
                          this.pick([
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                          ]) +
                          t.string({ pool: "0123456789", length: 6 }),
                        "07" +
                          this.pick(["2", "3", "4", "6", "7", "8", "9"]) +
                          t.string({ pool: "0123456789", length: 7 }),
                        "08" +
                          this.pick(["0", "1", "2", "3", "4", "5"]) +
                          t.string({ pool: "0123456789", length: 7 }),
                      ])),
                      (n = e.formatted || a))
                    : ((a = this.pick([
                        "01" +
                          this.pick([
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                          ]) +
                          t.string({ pool: "0123456789", length: 7 }),
                        "02" +
                          this.pick(["1", "2", "3", "4", "7", "8"]) +
                          t.string({ pool: "0123456789", length: 7 }),
                        "03" +
                          this.pick(["1", "2", "3", "5", "6", "9"]) +
                          t.string({ pool: "0123456789", length: 7 }),
                        "04" +
                          this.pick([
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                          ]) +
                          t.string({ pool: "0123456789", length: 7 }),
                        "05" +
                          this.pick(["1", "3", "4", "6", "7", "8"]) +
                          t.string({ pool: "0123456789", length: 7 }),
                      ])),
                      (n = e.formatted || a));
                  break;
                case "us":
                  var i = this.areacode(e).toString(),
                    o =
                      this.natural({ min: 2, max: 9 }).toString() +
                      this.natural({ min: 0, max: 9 }).toString() +
                      this.natural({ min: 0, max: 9 }).toString(),
                    s = this.natural({ min: 1e3, max: 9999 }).toString();
                  n = e.formatted ? i + " " + o + "-" + s : i + o + s;
                  break;
                case "br":
                  var l,
                    c = this.pick([
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "21",
                      "22",
                      "24",
                      "27",
                      "28",
                      "31",
                      "32",
                      "33",
                      "34",
                      "35",
                      "37",
                      "38",
                      "41",
                      "42",
                      "43",
                      "44",
                      "45",
                      "46",
                      "47",
                      "48",
                      "49",
                      "51",
                      "53",
                      "54",
                      "55",
                      "61",
                      "62",
                      "63",
                      "64",
                      "65",
                      "66",
                      "67",
                      "68",
                      "69",
                      "71",
                      "73",
                      "74",
                      "75",
                      "77",
                      "79",
                      "81",
                      "82",
                      "83",
                      "84",
                      "85",
                      "86",
                      "87",
                      "88",
                      "89",
                      "91",
                      "92",
                      "93",
                      "94",
                      "95",
                      "96",
                      "97",
                      "98",
                      "99",
                    ]);
                  l = e.mobile
                    ? "9" + t.string({ pool: "0123456789", length: 4 })
                    : this.natural({ min: 2e3, max: 5999 }).toString();
                  var u = t.string({ pool: "0123456789", length: 4 });
                  n = e.formatted ? "(" + c + ") " + l + "-" + u : c + l + u;
              }
              return n;
            }),
            (u.prototype.postal = function () {
              return (
                this.character({ pool: "XVTSRPNKLMHJGECBA" }) +
                this.natural({ max: 9 }) +
                this.character({ alpha: !0, casing: "upper" }) +
                " " +
                (this.natural({ max: 9 }) +
                  this.character({ alpha: !0, casing: "upper" }) +
                  this.natural({ max: 9 }))
              );
            }),
            (u.prototype.postcode = function () {
              return (
                this.pick(this.get("postcodeAreas")).code +
                this.natural({ max: 9 }) +
                (this.bool()
                  ? this.character({ alpha: !0, casing: "upper" })
                  : "") +
                " " +
                (this.natural({ max: 9 }) +
                  (this.character({ alpha: !0, casing: "upper" }) +
                    this.character({ alpha: !0, casing: "upper" })))
              );
            }),
            (u.prototype.counties = function (e) {
              return (
                (e = d(e, { country: "uk" })),
                this.get("counties")[e.country.toLowerCase()]
              );
            }),
            (u.prototype.county = function (e) {
              return this.pick(this.counties(e)).name;
            }),
            (u.prototype.provinces = function (e) {
              return (
                (e = d(e, { country: "ca" })),
                this.get("provinces")[e.country.toLowerCase()]
              );
            }),
            (u.prototype.province = function (e) {
              return e && e.full
                ? this.pick(this.provinces(e)).name
                : this.pick(this.provinces(e)).abbreviation;
            }),
            (u.prototype.state = function (e) {
              return e && e.full
                ? this.pick(this.states(e)).name
                : this.pick(this.states(e)).abbreviation;
            }),
            (u.prototype.states = function (e) {
              var a;
              switch (
                (e = d(e, {
                  country: "us",
                  us_states_and_dc: !0,
                })).country.toLowerCase()
              ) {
                case "us":
                  var n = this.get("us_states_and_dc"),
                    t = this.get("territories"),
                    r = this.get("armed_forces");
                  (a = []),
                    e.us_states_and_dc && (a = a.concat(n)),
                    e.territories && (a = a.concat(t)),
                    e.armed_forces && (a = a.concat(r));
                  break;
                case "it":
                case "mx":
                  a = this.get("country_regions")[e.country.toLowerCase()];
                  break;
                case "uk":
                  a = this.get("counties")[e.country.toLowerCase()];
              }
              return a;
            }),
            (u.prototype.street = function (e) {
              var a;
              switch (
                (e = d(e, {
                  country: "us",
                  syllables: 2,
                })).country.toLowerCase()
              ) {
                case "us":
                  (a = this.word({ syllables: e.syllables })),
                    (a = this.capitalize(a)),
                    (a += " "),
                    (a += e.short_suffix
                      ? this.street_suffix(e).abbreviation
                      : this.street_suffix(e).name);
                  break;
                case "it":
                  (a = this.word({ syllables: e.syllables })),
                    (a = this.capitalize(a)),
                    (a =
                      (e.short_suffix
                        ? this.street_suffix(e).abbreviation
                        : this.street_suffix(e).name) +
                      " " +
                      a);
              }
              return a;
            }),
            (u.prototype.street_suffix = function (e) {
              return (
                (e = d(e, { country: "us" })),
                this.pick(this.street_suffixes(e))
              );
            }),
            (u.prototype.street_suffixes = function (e) {
              return (
                (e = d(e, { country: "us" })),
                this.get("street_suffixes")[e.country.toLowerCase()]
              );
            }),
            (u.prototype.zip = function (e) {
              var a = this.n(this.natural, 5, { max: 9 });
              return (
                e &&
                  !0 === e.plusfour &&
                  (a.push("-"),
                  (a = a.concat(this.n(this.natural, 4, { max: 9 })))),
                a.join("")
              );
            }),
            (u.prototype.ampm = function () {
              return this.bool() ? "am" : "pm";
            }),
            (u.prototype.date = function (e) {
              var a, n;
              if (e && (e.min || e.max)) {
                var t =
                    void 0 !== (e = d(e, { american: !0, string: !1 })).min
                      ? e.min.getTime()
                      : 1,
                  r = void 0 !== e.max ? e.max.getTime() : 864e13;
                n = new Date(this.integer({ min: t, max: r }));
              } else {
                var i = this.month({ raw: !0 }),
                  o = i.days;
                e &&
                  e.month &&
                  (o = this.get("months")[((e.month % 12) + 12) % 12].days),
                  (e = d(e, {
                    year: parseInt(this.year(), 10),
                    month: i.numeric - 1,
                    day: this.natural({ min: 1, max: o }),
                    hour: this.hour({ twentyfour: !0 }),
                    minute: this.minute(),
                    second: this.second(),
                    millisecond: this.millisecond(),
                    american: !0,
                    string: !1,
                  })),
                  (n = new Date(
                    e.year,
                    e.month,
                    e.day,
                    e.hour,
                    e.minute,
                    e.second,
                    e.millisecond
                  ));
              }
              return (
                (a = e.american
                  ? n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear()
                  : n.getDate() +
                    "/" +
                    (n.getMonth() + 1) +
                    "/" +
                    n.getFullYear()),
                e.string ? a : n
              );
            }),
            (u.prototype.hammertime = function (e) {
              return this.date(e).getTime();
            }),
            (u.prototype.hour = function (e) {
              return (
                m(
                  (e = d(e, {
                    min: e && e.twentyfour ? 0 : 1,
                    max: e && e.twentyfour ? 23 : 12,
                  })).min < 0,
                  "Chance: Min cannot be less than 0."
                ),
                m(
                  e.twentyfour && e.max > 23,
                  "Chance: Max cannot be greater than 23 for twentyfour option."
                ),
                m(
                  !e.twentyfour && e.max > 12,
                  "Chance: Max cannot be greater than 12."
                ),
                m(e.min > e.max, "Chance: Min cannot be greater than Max."),
                this.natural({ min: e.min, max: e.max })
              );
            }),
            (u.prototype.millisecond = function () {
              return this.natural({ max: 999 });
            }),
            (u.prototype.minute = u.prototype.second =
              function (e) {
                return (
                  m(
                    (e = d(e, { min: 0, max: 59 })).min < 0,
                    "Chance: Min cannot be less than 0."
                  ),
                  m(e.max > 59, "Chance: Max cannot be greater than 59."),
                  m(e.min > e.max, "Chance: Min cannot be greater than Max."),
                  this.natural({ min: e.min, max: e.max })
                );
              }),
            (u.prototype.month = function (e) {
              m(
                (e = d(e, { min: 1, max: 12 })).min < 1,
                "Chance: Min cannot be less than 1."
              ),
                m(e.max > 12, "Chance: Max cannot be greater than 12."),
                m(e.min > e.max, "Chance: Min cannot be greater than Max.");
              var a = this.pick(this.months().slice(e.min - 1, e.max));
              return e.raw ? a : a.name;
            }),
            (u.prototype.months = function () {
              return this.get("months");
            }),
            (u.prototype.second = function () {
              return this.natural({ max: 59 });
            }),
            (u.prototype.timestamp = function () {
              return this.natural({
                min: 1,
                max: parseInt(new Date().getTime() / 1e3, 10),
              });
            }),
            (u.prototype.weekday = function (e) {
              var a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
              return (
                (e = d(e, { weekday_only: !1 })).weekday_only ||
                  (a.push("Saturday"), a.push("Sunday")),
                this.pickone(a)
              );
            }),
            (u.prototype.year = function (e) {
              return (
                ((e = d(e, { min: new Date().getFullYear() })).max =
                  void 0 !== e.max ? e.max : e.min + 100),
                this.natural(e).toString()
              );
            }),
            (u.prototype.cc = function (e) {
              var a, n, t;
              return (
                (n = (a = (e = d(e)).type
                  ? this.cc_type({ name: e.type, raw: !0 })
                  : this.cc_type({ raw: !0 })).prefix.split("")),
                (t = a.length - a.prefix.length - 1),
                (n = n.concat(
                  this.n(this.integer, t, { min: 0, max: 9 })
                )).push(this.luhn_calculate(n.join(""))),
                n.join("")
              );
            }),
            (u.prototype.cc_types = function () {
              return this.get("cc_types");
            }),
            (u.prototype.cc_type = function (e) {
              e = d(e);
              var a = this.cc_types(),
                n = null;
              if (e.name) {
                for (var t = 0; t < a.length; t++)
                  if (a[t].name === e.name || a[t].short_name === e.name) {
                    n = a[t];
                    break;
                  }
                if (null === n)
                  throw new RangeError(
                    "Chance: Credit card type '" + e.name + "' is not supported"
                  );
              } else n = this.pick(a);
              return e.raw ? n : n.name;
            }),
            (u.prototype.currency_types = function () {
              return this.get("currency_types");
            }),
            (u.prototype.currency = function () {
              return this.pick(this.currency_types());
            }),
            (u.prototype.timezones = function () {
              return this.get("timezones");
            }),
            (u.prototype.timezone = function () {
              return this.pick(this.timezones());
            }),
            (u.prototype.currency_pair = function (e) {
              var a = this.unique(this.currency, 2, {
                comparator: function (e, a) {
                  return e.reduce(function (e, n) {
                    return e || n.code === a.code;
                  }, !1);
                },
              });
              return e ? a[0].code + "/" + a[1].code : a;
            }),
            (u.prototype.dollar = function (e) {
              e = d(e, { max: 1e4, min: 0 });
              var a = this.floating({
                  min: e.min,
                  max: e.max,
                  fixed: 2,
                }).toString(),
                n = a.split(".")[1];
              return (
                void 0 === n ? (a += ".00") : n.length < 2 && (a += "0"),
                a < 0 ? "-$" + a.replace("-", "") : "$" + a
              );
            }),
            (u.prototype.euro = function (e) {
              return (
                Number(this.dollar(e).replace("$", "")).toLocaleString() + "€"
              );
            }),
            (u.prototype.exp = function (e) {
              e = d(e);
              var a = {};
              return (
                (a.year = this.exp_year()),
                a.year === new Date().getFullYear().toString()
                  ? (a.month = this.exp_month({ future: !0 }))
                  : (a.month = this.exp_month()),
                e.raw ? a : a.month + "/" + a.year
              );
            }),
            (u.prototype.exp_month = function (e) {
              e = d(e);
              var a,
                n,
                t = new Date().getMonth() + 1;
              if (e.future && 12 !== t)
                do {
                  (a = this.month({ raw: !0 }).numeric), (n = parseInt(a, 10));
                } while (n <= t);
              else a = this.month({ raw: !0 }).numeric;
              return a;
            }),
            (u.prototype.exp_year = function () {
              var e = new Date().getMonth() + 1,
                a = new Date().getFullYear();
              return this.year({ min: 12 === e ? a + 1 : a, max: a + 10 });
            }),
            (u.prototype.vat = function (e) {
              if ("it" === (e = d(e, { country: "it" })).country.toLowerCase())
                return this.it_vat();
            }),
            (u.prototype.iban = function () {
              var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              return (
                this.string({ length: 2, pool: e }) +
                this.pad(this.integer({ min: 0, max: 99 }), 2) +
                this.string({
                  length: 4,
                  pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                }) +
                this.pad(this.natural(), this.natural({ min: 6, max: 26 }))
              );
            }),
            (u.prototype.it_vat = function () {
              var e = this.natural({ min: 1, max: 18e5 });
              return (
                (e =
                  this.pad(e, 7) +
                  this.pad(
                    this.pick(this.provinces({ country: "it" })).code,
                    3
                  )) + this.luhn_calculate(e)
              );
            }),
            (u.prototype.cf = function (e) {
              var a = (e = e || {}).gender ? e.gender : this.gender(),
                n = e.first
                  ? e.first
                  : this.first({ gender: a, nationality: "it" }),
                t = e.last ? e.last : this.last({ nationality: "it" }),
                r = e.birthday ? e.birthday : this.birthday(),
                i = e.city
                  ? e.city
                  : this.pickone([
                      "A",
                      "B",
                      "C",
                      "D",
                      "E",
                      "F",
                      "G",
                      "H",
                      "I",
                      "L",
                      "M",
                      "Z",
                    ]) + this.pad(this.natural({ max: 999 }), 3),
                o = [],
                s = function (e, a) {
                  var n,
                    t = [];
                  return (
                    e.length < 3
                      ? (t = e.split("").concat("XXX".split("")).splice(0, 3))
                      : ((n = e
                          .toUpperCase()
                          .split("")
                          .map(function (e) {
                            return -1 !== "BCDFGHJKLMNPRSTVWZ".indexOf(e)
                              ? e
                              : void 0;
                          })
                          .join("")).length > 3 &&
                          (n = a ? n.substr(0, 3) : n[0] + n.substr(2, 2)),
                        n.length < 3 &&
                          ((t = n),
                          (n = e
                            .toUpperCase()
                            .split("")
                            .map(function (e) {
                              return -1 !== "AEIOU".indexOf(e) ? e : void 0;
                            })
                            .join("")
                            .substr(0, 3 - t.length))),
                        (t += n)),
                    t
                  );
                };
              return (
                (o = o
                  .concat(
                    s(t, !0),
                    s(n),
                    (function (e, a, n) {
                      return (
                        e.getFullYear().toString().substr(2) +
                        [
                          "A",
                          "B",
                          "C",
                          "D",
                          "E",
                          "H",
                          "L",
                          "M",
                          "P",
                          "R",
                          "S",
                          "T",
                        ][e.getMonth()] +
                        n.pad(
                          e.getDate() + ("female" === a.toLowerCase() ? 40 : 0),
                          2
                        )
                      );
                    })(r, a, this),
                    i.toUpperCase().split("")
                  )
                  .join("")),
                (o += (function (e) {
                  for (
                    var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                      n = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",
                      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                      r = 0,
                      i = 0;
                    i < 15;
                    i++
                  )
                    r +=
                      i % 2 != 0
                        ? t.indexOf(n[a.indexOf(e[i])])
                        : "BAKPLCQDREVOSFTGUHMINJWZYX".indexOf(
                            n[a.indexOf(e[i])]
                          );
                  return t[r % 26];
                })(o.toUpperCase())).toUpperCase()
              );
            }),
            (u.prototype.pl_pesel = function () {
              for (
                var e = this.natural({ min: 1, max: 9999999999 }),
                  a = this.pad(e, 10).split(""),
                  n = 0;
                n < a.length;
                n++
              )
                a[n] = parseInt(a[n]);
              var t =
                (1 * a[0] +
                  3 * a[1] +
                  7 * a[2] +
                  9 * a[3] +
                  1 * a[4] +
                  3 * a[5] +
                  7 * a[6] +
                  9 * a[7] +
                  1 * a[8] +
                  3 * a[9]) %
                10;
              return 0 !== t && (t = 10 - t), a.join("") + t;
            }),
            (u.prototype.pl_nip = function () {
              for (
                var e = this.natural({ min: 1, max: 999999999 }),
                  a = this.pad(e, 9).split(""),
                  n = 0;
                n < a.length;
                n++
              )
                a[n] = parseInt(a[n]);
              var t =
                (6 * a[0] +
                  5 * a[1] +
                  7 * a[2] +
                  2 * a[3] +
                  3 * a[4] +
                  4 * a[5] +
                  5 * a[6] +
                  6 * a[7] +
                  7 * a[8]) %
                11;
              return 10 === t ? this.pl_nip() : a.join("") + t;
            }),
            (u.prototype.pl_regon = function () {
              for (
                var e = this.natural({ min: 1, max: 99999999 }),
                  a = this.pad(e, 8).split(""),
                  n = 0;
                n < a.length;
                n++
              )
                a[n] = parseInt(a[n]);
              var t =
                (8 * a[0] +
                  9 * a[1] +
                  2 * a[2] +
                  3 * a[3] +
                  4 * a[4] +
                  5 * a[5] +
                  6 * a[6] +
                  7 * a[7]) %
                11;
              return 10 === t && (t = 0), a.join("") + t;
            }),
            (u.prototype.note = function (e) {
              e = d(e, { notes: "flatKey" });
              var a = {
                naturals: ["C", "D", "E", "F", "G", "A", "B"],
                flats: ["D♭", "E♭", "G♭", "A♭", "B♭"],
                sharps: ["C♯", "D♯", "F♯", "G♯", "A♯"],
              };
              return (
                (a.all = a.naturals.concat(a.flats.concat(a.sharps))),
                (a.flatKey = a.naturals.concat(a.flats)),
                (a.sharpKey = a.naturals.concat(a.sharps)),
                this.pickone(a[e.notes])
              );
            }),
            (u.prototype.midi_note = function (e) {
              return (
                (e = d(e, { min: 0, max: 127 })),
                this.integer({ min: e.min, max: e.max })
              );
            }),
            (u.prototype.chord_quality = function (e) {
              var a = ["maj", "min", "aug", "dim"];
              return (
                (e = d(e, { jazz: !0 })).jazz &&
                  (a = ["maj7", "min7", "7", "sus", "dim", "ø"]),
                this.pickone(a)
              );
            }),
            (u.prototype.chord = function (e) {
              return (e = d(e)), this.note(e) + this.chord_quality(e);
            }),
            (u.prototype.tempo = function (e) {
              return (
                (e = d(e, { min: 40, max: 320 })),
                this.integer({ min: e.min, max: e.max })
              );
            }),
            (u.prototype.coin = function () {
              return this.bool() ? "heads" : "tails";
            }),
            (u.prototype.d4 = g({ min: 1, max: 4 })),
            (u.prototype.d6 = g({ min: 1, max: 6 })),
            (u.prototype.d8 = g({ min: 1, max: 8 })),
            (u.prototype.d10 = g({ min: 1, max: 10 })),
            (u.prototype.d12 = g({ min: 1, max: 12 })),
            (u.prototype.d20 = g({ min: 1, max: 20 })),
            (u.prototype.d30 = g({ min: 1, max: 30 })),
            (u.prototype.d100 = g({ min: 1, max: 100 })),
            (u.prototype.rpg = function (e, a) {
              if (((a = d(a)), e)) {
                var n = e.toLowerCase().split("d"),
                  t = [];
                if (
                  2 !== n.length ||
                  !parseInt(n[0], 10) ||
                  !parseInt(n[1], 10)
                )
                  throw new Error(
                    "Chance: Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die"
                  );
                for (var r = n[0]; r > 0; r--)
                  t[r - 1] = this.natural({ min: 1, max: n[1] });
                return void 0 !== a.sum && a.sum
                  ? t.reduce(function (e, a) {
                      return e + a;
                    })
                  : t;
              }
              throw new RangeError(
                "Chance: A type of die roll must be included"
              );
            }),
            (u.prototype.guid = function (e) {
              e = d(e, { version: 5 });
              var a = "abcdef1234567890";
              return (
                this.string({ pool: a, length: 8 }) +
                "-" +
                this.string({ pool: a, length: 4 }) +
                "-" +
                e.version +
                this.string({ pool: a, length: 3 }) +
                "-" +
                this.string({ pool: "ab89", length: 1 }) +
                this.string({ pool: a, length: 3 }) +
                "-" +
                this.string({ pool: a, length: 12 })
              );
            }),
            (u.prototype.hash = function (e) {
              var a =
                "upper" === (e = d(e, { length: 40, casing: "lower" })).casing
                  ? s.toUpperCase()
                  : s;
              return this.string({ pool: a, length: e.length });
            }),
            (u.prototype.luhn_check = function (e) {
              var a = e.toString();
              return (
                +a.substring(a.length - 1) ===
                this.luhn_calculate(+a.substring(0, a.length - 1))
              );
            }),
            (u.prototype.luhn_calculate = function (e) {
              for (
                var a,
                  n = e.toString().split("").reverse(),
                  t = 0,
                  r = 0,
                  i = n.length;
                i > r;
                ++r
              )
                (a = +n[r]), r % 2 == 0 && (a *= 2) > 9 && (a -= 9), (t += a);
              return (9 * t) % 10;
            }),
            (u.prototype.md5 = function (e) {
              var a = { str: "", key: null, raw: !1 };
              if (e)
                if ("string" == typeof e) (a.str = e), (e = {});
                else {
                  if ("object" != typeof e) return null;
                  if ("Array" === e.constructor) return null;
                }
              else (a.str = this.string()), (e = {});
              if (!(a = d(e, a)).str)
                throw new Error(
                  "A parameter is required to return an md5 hash."
                );
              return this.bimd5.md5(a.str, a.key, a.raw);
            }),
            (u.prototype.file = function (e) {
              var a,
                n = e || {},
                t = "fileExtension",
                r = Object.keys(this.get("fileExtension"));
              if (((a = this.word({ length: n.length })), n.extension))
                return a + "." + n.extension;
              if (n.extensions) {
                if (Array.isArray(n.extensions))
                  return a + "." + this.pickone(n.extensions);
                if (n.extensions.constructor === Object) {
                  var i = n.extensions,
                    o = Object.keys(i);
                  return a + "." + this.pickone(i[this.pickone(o)]);
                }
                throw new Error(
                  "Chance: Extensions must be an Array or Object"
                );
              }
              if (n.fileType) {
                var s = n.fileType;
                if (-1 !== r.indexOf(s))
                  return a + "." + this.pickone(this.get(t)[s]);
                throw new RangeError(
                  "Chance: Expect file type value to be 'raster', 'vector', '3d' or 'document'"
                );
              }
              return a + "." + this.pickone(this.get(t)[this.pickone(r)]);
            }),
            (u.prototype.fileWithContent = function (e) {
              var a = e || {},
                n = "fileName" in a ? a.fileName : this.file().split(".")[0];
              if (
                ((n +=
                  "." +
                  ("fileExtension" in a
                    ? a.fileExtension
                    : this.file().split(".")[1])),
                "number" != typeof a.fileSize)
              )
                throw new Error("File size must be an integer");
              return {
                fileData: this.buffer({ length: a.fileSize }),
                fileName: n,
              };
            });
          var y = {
              firstNames: {
                male: {
                  en: [
                    "James",
                    "John",
                    "Robert",
                    "Michael",
                    "William",
                    "David",
                    "Richard",
                    "Joseph",
                    "Charles",
                    "Thomas",
                    "Christopher",
                    "Daniel",
                    "Matthew",
                    "George",
                    "Donald",
                    "Anthony",
                    "Paul",
                    "Mark",
                    "Edward",
                    "Steven",
                    "Kenneth",
                    "Andrew",
                    "Brian",
                    "Joshua",
                    "Kevin",
                    "Ronald",
                    "Timothy",
                    "Jason",
                    "Jeffrey",
                    "Frank",
                    "Gary",
                    "Ryan",
                    "Nicholas",
                    "Eric",
                    "Stephen",
                    "Jacob",
                    "Larry",
                    "Jonathan",
                    "Scott",
                    "Raymond",
                    "Justin",
                    "Brandon",
                    "Gregory",
                    "Samuel",
                    "Benjamin",
                    "Patrick",
                    "Jack",
                    "Henry",
                    "Walter",
                    "Dennis",
                    "Jerry",
                    "Alexander",
                    "Peter",
                    "Tyler",
                    "Douglas",
                    "Harold",
                    "Aaron",
                    "Jose",
                    "Adam",
                    "Arthur",
                    "Zachary",
                    "Carl",
                    "Nathan",
                    "Albert",
                    "Kyle",
                    "Lawrence",
                    "Joe",
                    "Willie",
                    "Gerald",
                    "Roger",
                    "Keith",
                    "Jeremy",
                    "Terry",
                    "Harry",
                    "Ralph",
                    "Sean",
                    "Jesse",
                    "Roy",
                    "Louis",
                    "Billy",
                    "Austin",
                    "Bruce",
                    "Eugene",
                    "Christian",
                    "Bryan",
                    "Wayne",
                    "Russell",
                    "Howard",
                    "Fred",
                    "Ethan",
                    "Jordan",
                    "Philip",
                    "Alan",
                    "Juan",
                    "Randy",
                    "Vincent",
                    "Bobby",
                    "Dylan",
                    "Johnny",
                    "Phillip",
                    "Victor",
                    "Clarence",
                    "Ernest",
                    "Martin",
                    "Craig",
                    "Stanley",
                    "Shawn",
                    "Travis",
                    "Bradley",
                    "Leonard",
                    "Earl",
                    "Gabriel",
                    "Jimmy",
                    "Francis",
                    "Todd",
                    "Noah",
                    "Danny",
                    "Dale",
                    "Cody",
                    "Carlos",
                    "Allen",
                    "Frederick",
                    "Logan",
                    "Curtis",
                    "Alex",
                    "Joel",
                    "Luis",
                    "Norman",
                    "Marvin",
                    "Glenn",
                    "Tony",
                    "Nathaniel",
                    "Rodney",
                    "Melvin",
                    "Alfred",
                    "Steve",
                    "Cameron",
                    "Chad",
                    "Edwin",
                    "Caleb",
                    "Evan",
                    "Antonio",
                    "Lee",
                    "Herbert",
                    "Jeffery",
                    "Isaac",
                    "Derek",
                    "Ricky",
                    "Marcus",
                    "Theodore",
                    "Elijah",
                    "Luke",
                    "Jesus",
                    "Eddie",
                    "Troy",
                    "Mike",
                    "Dustin",
                    "Ray",
                    "Adrian",
                    "Bernard",
                    "Leroy",
                    "Angel",
                    "Randall",
                    "Wesley",
                    "Ian",
                    "Jared",
                    "Mason",
                    "Hunter",
                    "Calvin",
                    "Oscar",
                    "Clifford",
                    "Jay",
                    "Shane",
                    "Ronnie",
                    "Barry",
                    "Lucas",
                    "Corey",
                    "Manuel",
                    "Leo",
                    "Tommy",
                    "Warren",
                    "Jackson",
                    "Isaiah",
                    "Connor",
                    "Don",
                    "Dean",
                    "Jon",
                    "Julian",
                    "Miguel",
                    "Bill",
                    "Lloyd",
                    "Charlie",
                    "Mitchell",
                    "Leon",
                    "Jerome",
                    "Darrell",
                    "Jeremiah",
                    "Alvin",
                    "Brett",
                    "Seth",
                    "Floyd",
                    "Jim",
                    "Blake",
                    "Micheal",
                    "Gordon",
                    "Trevor",
                    "Lewis",
                    "Erik",
                    "Edgar",
                    "Vernon",
                    "Devin",
                    "Gavin",
                    "Jayden",
                    "Chris",
                    "Clyde",
                    "Tom",
                    "Derrick",
                    "Mario",
                    "Brent",
                    "Marc",
                    "Herman",
                    "Chase",
                    "Dominic",
                    "Ricardo",
                    "Franklin",
                    "Maurice",
                    "Max",
                    "Aiden",
                    "Owen",
                    "Lester",
                    "Gilbert",
                    "Elmer",
                    "Gene",
                    "Francisco",
                    "Glen",
                    "Cory",
                    "Garrett",
                    "Clayton",
                    "Sam",
                    "Jorge",
                    "Chester",
                    "Alejandro",
                    "Jeff",
                    "Harvey",
                    "Milton",
                    "Cole",
                    "Ivan",
                    "Andre",
                    "Duane",
                    "Landon",
                  ],
                  it: [
                    "Adolfo",
                    "Alberto",
                    "Aldo",
                    "Alessandro",
                    "Alessio",
                    "Alfredo",
                    "Alvaro",
                    "Andrea",
                    "Angelo",
                    "Angiolo",
                    "Antonino",
                    "Antonio",
                    "Attilio",
                    "Benito",
                    "Bernardo",
                    "Bruno",
                    "Carlo",
                    "Cesare",
                    "Christian",
                    "Claudio",
                    "Corrado",
                    "Cosimo",
                    "Cristian",
                    "Cristiano",
                    "Daniele",
                    "Dario",
                    "David",
                    "Davide",
                    "Diego",
                    "Dino",
                    "Domenico",
                    "Duccio",
                    "Edoardo",
                    "Elia",
                    "Elio",
                    "Emanuele",
                    "Emiliano",
                    "Emilio",
                    "Enrico",
                    "Enzo",
                    "Ettore",
                    "Fabio",
                    "Fabrizio",
                    "Federico",
                    "Ferdinando",
                    "Fernando",
                    "Filippo",
                    "Francesco",
                    "Franco",
                    "Gabriele",
                    "Giacomo",
                    "Giampaolo",
                    "Giampiero",
                    "Giancarlo",
                    "Gianfranco",
                    "Gianluca",
                    "Gianmarco",
                    "Gianni",
                    "Gino",
                    "Giorgio",
                    "Giovanni",
                    "Giuliano",
                    "Giulio",
                    "Giuseppe",
                    "Graziano",
                    "Gregorio",
                    "Guido",
                    "Iacopo",
                    "Jacopo",
                    "Lapo",
                    "Leonardo",
                    "Lorenzo",
                    "Luca",
                    "Luciano",
                    "Luigi",
                    "Manuel",
                    "Marcello",
                    "Marco",
                    "Marino",
                    "Mario",
                    "Massimiliano",
                    "Massimo",
                    "Matteo",
                    "Mattia",
                    "Maurizio",
                    "Mauro",
                    "Michele",
                    "Mirko",
                    "Mohamed",
                    "Nello",
                    "Neri",
                    "Niccolò",
                    "Nicola",
                    "Osvaldo",
                    "Otello",
                    "Paolo",
                    "Pier Luigi",
                    "Piero",
                    "Pietro",
                    "Raffaele",
                    "Remo",
                    "Renato",
                    "Renzo",
                    "Riccardo",
                    "Roberto",
                    "Rolando",
                    "Romano",
                    "Salvatore",
                    "Samuele",
                    "Sandro",
                    "Sergio",
                    "Silvano",
                    "Simone",
                    "Stefano",
                    "Thomas",
                    "Tommaso",
                    "Ubaldo",
                    "Ugo",
                    "Umberto",
                    "Valerio",
                    "Valter",
                    "Vasco",
                    "Vincenzo",
                    "Vittorio",
                  ],
                  nl: [
                    "Aaron",
                    "Abel",
                    "Adam",
                    "Adriaan",
                    "Albert",
                    "Alexander",
                    "Ali",
                    "Arjen",
                    "Arno",
                    "Bart",
                    "Bas",
                    "Bastiaan",
                    "Benjamin",
                    "Bob",
                    "Boris",
                    "Bram",
                    "Brent",
                    "Cas",
                    "Casper",
                    "Chris",
                    "Christiaan",
                    "Cornelis",
                    "Daan",
                    "Daley",
                    "Damian",
                    "Dani",
                    "Daniel",
                    "Daniël",
                    "David",
                    "Dean",
                    "Dirk",
                    "Dylan",
                    "Egbert",
                    "Elijah",
                    "Erik",
                    "Erwin",
                    "Evert",
                    "Ezra",
                    "Fabian",
                    "Fedde",
                    "Finn",
                    "Florian",
                    "Floris",
                    "Frank",
                    "Frans",
                    "Frederik",
                    "Freek",
                    "Geert",
                    "Gerard",
                    "Gerben",
                    "Gerrit",
                    "Gijs",
                    "Guus",
                    "Hans",
                    "Hendrik",
                    "Henk",
                    "Herman",
                    "Hidde",
                    "Hugo",
                    "Jaap",
                    "Jan Jaap",
                    "Jan-Willem",
                    "Jack",
                    "Jacob",
                    "Jan",
                    "Jason",
                    "Jasper",
                    "Jayden",
                    "Jelle",
                    "Jelte",
                    "Jens",
                    "Jeroen",
                    "Jesse",
                    "Jim",
                    "Job",
                    "Joep",
                    "Johannes",
                    "John",
                    "Jonathan",
                    "Joris",
                    "Joshua",
                    "Joël",
                    "Julian",
                    "Kees",
                    "Kevin",
                    "Koen",
                    "Lars",
                    "Laurens",
                    "Leendert",
                    "Lennard",
                    "Lodewijk",
                    "Luc",
                    "Luca",
                    "Lucas",
                    "Lukas",
                    "Luuk",
                    "Maarten",
                    "Marcus",
                    "Martijn",
                    "Martin",
                    "Matthijs",
                    "Maurits",
                    "Max",
                    "Mees",
                    "Melle",
                    "Mick",
                    "Mika",
                    "Milan",
                    "Mohamed",
                    "Mohammed",
                    "Morris",
                    "Muhammed",
                    "Nathan",
                    "Nick",
                    "Nico",
                    "Niek",
                    "Niels",
                    "Noah",
                    "Noud",
                    "Olivier",
                    "Oscar",
                    "Owen",
                    "Paul",
                    "Pepijn",
                    "Peter",
                    "Pieter",
                    "Pim",
                    "Quinten",
                    "Reinier",
                    "Rens",
                    "Robin",
                    "Ruben",
                    "Sam",
                    "Samuel",
                    "Sander",
                    "Sebastiaan",
                    "Sem",
                    "Sep",
                    "Sepp",
                    "Siem",
                    "Simon",
                    "Stan",
                    "Stef",
                    "Steven",
                    "Stijn",
                    "Sven",
                    "Teun",
                    "Thijmen",
                    "Thijs",
                    "Thomas",
                    "Tijn",
                    "Tim",
                    "Timo",
                    "Tobias",
                    "Tom",
                    "Victor",
                    "Vince",
                    "Willem",
                    "Wim",
                    "Wouter",
                    "Yusuf",
                  ],
                  fr: [
                    "Aaron",
                    "Abdon",
                    "Abel",
                    "Abélard",
                    "Abelin",
                    "Abondance",
                    "Abraham",
                    "Absalon",
                    "Acace",
                    "Achaire",
                    "Achille",
                    "Adalard",
                    "Adalbald",
                    "Adalbéron",
                    "Adalbert",
                    "Adalric",
                    "Adam",
                    "Adegrin",
                    "Adel",
                    "Adelin",
                    "Andelin",
                    "Adelphe",
                    "Adam",
                    "Adéodat",
                    "Adhémar",
                    "Adjutor",
                    "Adolphe",
                    "Adonis",
                    "Adon",
                    "Adrien",
                    "Agapet",
                    "Agathange",
                    "Agathon",
                    "Agilbert",
                    "Agénor",
                    "Agnan",
                    "Aignan",
                    "Agrippin",
                    "Aimable",
                    "Aimé",
                    "Alain",
                    "Alban",
                    "Albin",
                    "Aubin",
                    "Albéric",
                    "Albert",
                    "Albertet",
                    "Alcibiade",
                    "Alcide",
                    "Alcée",
                    "Alcime",
                    "Aldonce",
                    "Aldric",
                    "Aldéric",
                    "Aleaume",
                    "Alexandre",
                    "Alexis",
                    "Alix",
                    "Alliaume",
                    "Aleaume",
                    "Almine",
                    "Almire",
                    "Aloïs",
                    "Alphée",
                    "Alphonse",
                    "Alpinien",
                    "Alverède",
                    "Amalric",
                    "Amaury",
                    "Amandin",
                    "Amant",
                    "Ambroise",
                    "Amédée",
                    "Amélien",
                    "Amiel",
                    "Amour",
                    "Anaël",
                    "Anastase",
                    "Anatole",
                    "Ancelin",
                    "Andéol",
                    "Andoche",
                    "André",
                    "Andoche",
                    "Ange",
                    "Angelin",
                    "Angilbe",
                    "Anglebert",
                    "Angoustan",
                    "Anicet",
                    "Anne",
                    "Annibal",
                    "Ansbert",
                    "Anselme",
                    "Anthelme",
                    "Antheaume",
                    "Anthime",
                    "Antide",
                    "Antoine",
                    "Antonius",
                    "Antonin",
                    "Apollinaire",
                    "Apollon",
                    "Aquilin",
                    "Arcade",
                    "Archambaud",
                    "Archambeau",
                    "Archange",
                    "Archibald",
                    "Arian",
                    "Ariel",
                    "Ariste",
                    "Aristide",
                    "Armand",
                    "Armel",
                    "Armin",
                    "Arnould",
                    "Arnaud",
                    "Arolde",
                    "Arsène",
                    "Arsinoé",
                    "Arthaud",
                    "Arthème",
                    "Arthur",
                    "Ascelin",
                    "Athanase",
                    "Aubry",
                    "Audebert",
                    "Audouin",
                    "Audran",
                    "Audric",
                    "Auguste",
                    "Augustin",
                    "Aurèle",
                    "Aurélien",
                    "Aurian",
                    "Auxence",
                    "Axel",
                    "Aymard",
                    "Aymeric",
                    "Aymon",
                    "Aymond",
                    "Balthazar",
                    "Baptiste",
                    "Barnabé",
                    "Barthélemy",
                    "Bartimée",
                    "Basile",
                    "Bastien",
                    "Baudouin",
                    "Bénigne",
                    "Benjamin",
                    "Benoît",
                    "Bérenger",
                    "Bérard",
                    "Bernard",
                    "Bertrand",
                    "Blaise",
                    "Bon",
                    "Boniface",
                    "Bouchard",
                    "Brice",
                    "Brieuc",
                    "Bruno",
                    "Brunon",
                    "Calixte",
                    "Calliste",
                    "Camélien",
                    "Camille",
                    "Camillien",
                    "Candide",
                    "Caribert",
                    "Carloman",
                    "Cassandre",
                    "Cassien",
                    "Cédric",
                    "Céleste",
                    "Célestin",
                    "Célien",
                    "Césaire",
                    "César",
                    "Charles",
                    "Charlemagne",
                    "Childebert",
                    "Chilpéric",
                    "Chrétien",
                    "Christian",
                    "Christodule",
                    "Christophe",
                    "Chrysostome",
                    "Clarence",
                    "Claude",
                    "Claudien",
                    "Cléandre",
                    "Clément",
                    "Clotaire",
                    "Côme",
                    "Constance",
                    "Constant",
                    "Constantin",
                    "Corentin",
                    "Cyprien",
                    "Cyriaque",
                    "Cyrille",
                    "Cyril",
                    "Damien",
                    "Daniel",
                    "David",
                    "Delphin",
                    "Denis",
                    "Désiré",
                    "Didier",
                    "Dieudonné",
                    "Dimitri",
                    "Dominique",
                    "Dorian",
                    "Dorothée",
                    "Edgard",
                    "Edmond",
                    "Édouard",
                    "Éleuthère",
                    "Élie",
                    "Élisée",
                    "Émeric",
                    "Émile",
                    "Émilien",
                    "Emmanuel",
                    "Enguerrand",
                    "Épiphane",
                    "Éric",
                    "Esprit",
                    "Ernest",
                    "Étienne",
                    "Eubert",
                    "Eudes",
                    "Eudoxe",
                    "Eugène",
                    "Eusèbe",
                    "Eustache",
                    "Évariste",
                    "Évrard",
                    "Fabien",
                    "Fabrice",
                    "Falba",
                    "Félicité",
                    "Félix",
                    "Ferdinand",
                    "Fiacre",
                    "Fidèle",
                    "Firmin",
                    "Flavien",
                    "Flodoard",
                    "Florent",
                    "Florentin",
                    "Florestan",
                    "Florian",
                    "Fortuné",
                    "Foulques",
                    "Francisque",
                    "François",
                    "Français",
                    "Franciscus",
                    "Francs",
                    "Frédéric",
                    "Fulbert",
                    "Fulcran",
                    "Fulgence",
                    "Gabin",
                    "Gabriel",
                    "Gaël",
                    "Garnier",
                    "Gaston",
                    "Gaspard",
                    "Gatien",
                    "Gaud",
                    "Gautier",
                    "Gédéon",
                    "Geoffroy",
                    "Georges",
                    "Géraud",
                    "Gérard",
                    "Gerbert",
                    "Germain",
                    "Gervais",
                    "Ghislain",
                    "Gilbert",
                    "Gilles",
                    "Girart",
                    "Gislebert",
                    "Gondebaud",
                    "Gonthier",
                    "Gontran",
                    "Gonzague",
                    "Grégoire",
                    "Guérin",
                    "Gui",
                    "Guillaume",
                    "Gustave",
                    "Guy",
                    "Guyot",
                    "Hardouin",
                    "Hector",
                    "Hédelin",
                    "Hélier",
                    "Henri",
                    "Herbert",
                    "Herluin",
                    "Hervé",
                    "Hilaire",
                    "Hildebert",
                    "Hincmar",
                    "Hippolyte",
                    "Honoré",
                    "Hubert",
                    "Hugues",
                    "Innocent",
                    "Isabeau",
                    "Isidore",
                    "Jacques",
                    "Japhet",
                    "Jason",
                    "Jean",
                    "Jeannel",
                    "Jeannot",
                    "Jérémie",
                    "Jérôme",
                    "Joachim",
                    "Joanny",
                    "Job",
                    "Jocelyn",
                    "Joël",
                    "Johan",
                    "Jonas",
                    "Jonathan",
                    "Joseph",
                    "Josse",
                    "Josselin",
                    "Jourdain",
                    "Jude",
                    "Judicaël",
                    "Jules",
                    "Julien",
                    "Juste",
                    "Justin",
                    "Lambert",
                    "Landry",
                    "Laurent",
                    "Lazare",
                    "Léandre",
                    "Léon",
                    "Léonard",
                    "Léopold",
                    "Leu",
                    "Loup",
                    "Leufroy",
                    "Libère",
                    "Liétald",
                    "Lionel",
                    "Loïc",
                    "Longin",
                    "Lorrain",
                    "Lorraine",
                    "Lothaire",
                    "Louis",
                    "Loup",
                    "Luc",
                    "Lucas",
                    "Lucien",
                    "Ludolphe",
                    "Ludovic",
                    "Macaire",
                    "Malo",
                    "Mamert",
                    "Manassé",
                    "Marc",
                    "Marceau",
                    "Marcel",
                    "Marcelin",
                    "Marius",
                    "Marseille",
                    "Martial",
                    "Martin",
                    "Mathurin",
                    "Matthias",
                    "Mathias",
                    "Matthieu",
                    "Maugis",
                    "Maurice",
                    "Mauricet",
                    "Maxence",
                    "Maxime",
                    "Maximilien",
                    "Mayeul",
                    "Médéric",
                    "Melchior",
                    "Mence",
                    "Merlin",
                    "Mérovée",
                    "Michaël",
                    "Michel",
                    "Moïse",
                    "Morgan",
                    "Nathan",
                    "Nathanaël",
                    "Narcisse",
                    "Néhémie",
                    "Nestor",
                    "Nestor",
                    "Nicéphore",
                    "Nicolas",
                    "Noé",
                    "Noël",
                    "Norbert",
                    "Normand",
                    "Normands",
                    "Octave",
                    "Odilon",
                    "Odon",
                    "Oger",
                    "Olivier",
                    "Oury",
                    "Pacôme",
                    "Palémon",
                    "Parfait",
                    "Pascal",
                    "Paterne",
                    "Patrice",
                    "Paul",
                    "Pépin",
                    "Perceval",
                    "Philémon",
                    "Philibert",
                    "Philippe",
                    "Philothée",
                    "Pie",
                    "Pierre",
                    "Pierrick",
                    "Prosper",
                    "Quentin",
                    "Raoul",
                    "Raphaël",
                    "Raymond",
                    "Régis",
                    "Réjean",
                    "Rémi",
                    "Renaud",
                    "René",
                    "Reybaud",
                    "Richard",
                    "Robert",
                    "Roch",
                    "Rodolphe",
                    "Rodrigue",
                    "Roger",
                    "Roland",
                    "Romain",
                    "Romuald",
                    "Roméo",
                    "Rome",
                    "Ronan",
                    "Roselin",
                    "Salomon",
                    "Samuel",
                    "Savin",
                    "Savinien",
                    "Scholastique",
                    "Sébastien",
                    "Séraphin",
                    "Serge",
                    "Séverin",
                    "Sidoine",
                    "Sigebert",
                    "Sigismond",
                    "Silvère",
                    "Simon",
                    "Siméon",
                    "Sixte",
                    "Stanislas",
                    "Stéphane",
                    "Stephan",
                    "Sylvain",
                    "Sylvestre",
                    "Tancrède",
                    "Tanguy",
                    "Taurin",
                    "Théodore",
                    "Théodose",
                    "Théophile",
                    "Théophraste",
                    "Thibault",
                    "Thibert",
                    "Thierry",
                    "Thomas",
                    "Timoléon",
                    "Timothée",
                    "Titien",
                    "Tonnin",
                    "Toussaint",
                    "Trajan",
                    "Tristan",
                    "Turold",
                    "Tim",
                    "Ulysse",
                    "Urbain",
                    "Valentin",
                    "Valère",
                    "Valéry",
                    "Venance",
                    "Venant",
                    "Venceslas",
                    "Vianney",
                    "Victor",
                    "Victorien",
                    "Victorin",
                    "Vigile",
                    "Vincent",
                    "Vital",
                    "Vitalien",
                    "Vivien",
                    "Waleran",
                    "Wandrille",
                    "Xavier",
                    "Xénophon",
                    "Yves",
                    "Zacharie",
                    "Zaché",
                    "Zéphirin",
                  ],
                },
                female: {
                  en: [
                    "Mary",
                    "Emma",
                    "Elizabeth",
                    "Minnie",
                    "Margaret",
                    "Ida",
                    "Alice",
                    "Bertha",
                    "Sarah",
                    "Annie",
                    "Clara",
                    "Ella",
                    "Florence",
                    "Cora",
                    "Martha",
                    "Laura",
                    "Nellie",
                    "Grace",
                    "Carrie",
                    "Maude",
                    "Mabel",
                    "Bessie",
                    "Jennie",
                    "Gertrude",
                    "Julia",
                    "Hattie",
                    "Edith",
                    "Mattie",
                    "Rose",
                    "Catherine",
                    "Lillian",
                    "Ada",
                    "Lillie",
                    "Helen",
                    "Jessie",
                    "Louise",
                    "Ethel",
                    "Lula",
                    "Myrtle",
                    "Eva",
                    "Frances",
                    "Lena",
                    "Lucy",
                    "Edna",
                    "Maggie",
                    "Pearl",
                    "Daisy",
                    "Fannie",
                    "Josephine",
                    "Dora",
                    "Rosa",
                    "Katherine",
                    "Agnes",
                    "Marie",
                    "Nora",
                    "May",
                    "Mamie",
                    "Blanche",
                    "Stella",
                    "Ellen",
                    "Nancy",
                    "Effie",
                    "Sallie",
                    "Nettie",
                    "Della",
                    "Lizzie",
                    "Flora",
                    "Susie",
                    "Maud",
                    "Mae",
                    "Etta",
                    "Harriet",
                    "Sadie",
                    "Caroline",
                    "Katie",
                    "Lydia",
                    "Elsie",
                    "Kate",
                    "Susan",
                    "Mollie",
                    "Alma",
                    "Addie",
                    "Georgia",
                    "Eliza",
                    "Lulu",
                    "Nannie",
                    "Lottie",
                    "Amanda",
                    "Belle",
                    "Charlotte",
                    "Rebecca",
                    "Ruth",
                    "Viola",
                    "Olive",
                    "Amelia",
                    "Hannah",
                    "Jane",
                    "Virginia",
                    "Emily",
                    "Matilda",
                    "Irene",
                    "Kathryn",
                    "Esther",
                    "Willie",
                    "Henrietta",
                    "Ollie",
                    "Amy",
                    "Rachel",
                    "Sara",
                    "Estella",
                    "Theresa",
                    "Augusta",
                    "Ora",
                    "Pauline",
                    "Josie",
                    "Lola",
                    "Sophia",
                    "Leona",
                    "Anne",
                    "Mildred",
                    "Ann",
                    "Beulah",
                    "Callie",
                    "Lou",
                    "Delia",
                    "Eleanor",
                    "Barbara",
                    "Iva",
                    "Louisa",
                    "Maria",
                    "Mayme",
                    "Evelyn",
                    "Estelle",
                    "Nina",
                    "Betty",
                    "Marion",
                    "Bettie",
                    "Dorothy",
                    "Luella",
                    "Inez",
                    "Lela",
                    "Rosie",
                    "Allie",
                    "Millie",
                    "Janie",
                    "Cornelia",
                    "Victoria",
                    "Ruby",
                    "Winifred",
                    "Alta",
                    "Celia",
                    "Christine",
                    "Beatrice",
                    "Birdie",
                    "Harriett",
                    "Mable",
                    "Myra",
                    "Sophie",
                    "Tillie",
                    "Isabel",
                    "Sylvia",
                    "Carolyn",
                    "Isabelle",
                    "Leila",
                    "Sally",
                    "Ina",
                    "Essie",
                    "Bertie",
                    "Nell",
                    "Alberta",
                    "Katharine",
                    "Lora",
                    "Rena",
                    "Mina",
                    "Rhoda",
                    "Mathilda",
                    "Abbie",
                    "Eula",
                    "Dollie",
                    "Hettie",
                    "Eunice",
                    "Fanny",
                    "Ola",
                    "Lenora",
                    "Adelaide",
                    "Christina",
                    "Lelia",
                    "Nelle",
                    "Sue",
                    "Johanna",
                    "Lilly",
                    "Lucinda",
                    "Minerva",
                    "Lettie",
                    "Roxie",
                    "Cynthia",
                    "Helena",
                    "Hilda",
                    "Hulda",
                    "Bernice",
                    "Genevieve",
                    "Jean",
                    "Cordelia",
                    "Marian",
                    "Francis",
                    "Jeanette",
                    "Adeline",
                    "Gussie",
                    "Leah",
                    "Lois",
                    "Lura",
                    "Mittie",
                    "Hallie",
                    "Isabella",
                    "Olga",
                    "Phoebe",
                    "Teresa",
                    "Hester",
                    "Lida",
                    "Lina",
                    "Winnie",
                    "Claudia",
                    "Marguerite",
                    "Vera",
                    "Cecelia",
                    "Bess",
                    "Emilie",
                    "Rosetta",
                    "Verna",
                    "Myrtie",
                    "Cecilia",
                    "Elva",
                    "Olivia",
                    "Ophelia",
                    "Georgie",
                    "Elnora",
                    "Violet",
                    "Adele",
                    "Lily",
                    "Linnie",
                    "Loretta",
                    "Madge",
                    "Polly",
                    "Virgie",
                    "Eugenia",
                    "Lucile",
                    "Lucille",
                    "Mabelle",
                    "Rosalie",
                  ],
                  it: [
                    "Ada",
                    "Adriana",
                    "Alessandra",
                    "Alessia",
                    "Alice",
                    "Angela",
                    "Anna",
                    "Anna Maria",
                    "Annalisa",
                    "Annita",
                    "Annunziata",
                    "Antonella",
                    "Arianna",
                    "Asia",
                    "Assunta",
                    "Aurora",
                    "Barbara",
                    "Beatrice",
                    "Benedetta",
                    "Bianca",
                    "Bruna",
                    "Camilla",
                    "Carla",
                    "Carlotta",
                    "Carmela",
                    "Carolina",
                    "Caterina",
                    "Catia",
                    "Cecilia",
                    "Chiara",
                    "Cinzia",
                    "Clara",
                    "Claudia",
                    "Costanza",
                    "Cristina",
                    "Daniela",
                    "Debora",
                    "Diletta",
                    "Dina",
                    "Donatella",
                    "Elena",
                    "Eleonora",
                    "Elisa",
                    "Elisabetta",
                    "Emanuela",
                    "Emma",
                    "Eva",
                    "Federica",
                    "Fernanda",
                    "Fiorella",
                    "Fiorenza",
                    "Flora",
                    "Franca",
                    "Francesca",
                    "Gabriella",
                    "Gaia",
                    "Gemma",
                    "Giada",
                    "Gianna",
                    "Gina",
                    "Ginevra",
                    "Giorgia",
                    "Giovanna",
                    "Giulia",
                    "Giuliana",
                    "Giuseppa",
                    "Giuseppina",
                    "Grazia",
                    "Graziella",
                    "Greta",
                    "Ida",
                    "Ilaria",
                    "Ines",
                    "Iolanda",
                    "Irene",
                    "Irma",
                    "Isabella",
                    "Jessica",
                    "Laura",
                    "Lea",
                    "Letizia",
                    "Licia",
                    "Lidia",
                    "Liliana",
                    "Lina",
                    "Linda",
                    "Lisa",
                    "Livia",
                    "Loretta",
                    "Luana",
                    "Lucia",
                    "Luciana",
                    "Lucrezia",
                    "Luisa",
                    "Manuela",
                    "Mara",
                    "Marcella",
                    "Margherita",
                    "Maria",
                    "Maria Cristina",
                    "Maria Grazia",
                    "Maria Luisa",
                    "Maria Pia",
                    "Maria Teresa",
                    "Marina",
                    "Marisa",
                    "Marta",
                    "Martina",
                    "Marzia",
                    "Matilde",
                    "Melissa",
                    "Michela",
                    "Milena",
                    "Mirella",
                    "Monica",
                    "Natalina",
                    "Nella",
                    "Nicoletta",
                    "Noemi",
                    "Olga",
                    "Paola",
                    "Patrizia",
                    "Piera",
                    "Pierina",
                    "Raffaella",
                    "Rebecca",
                    "Renata",
                    "Rina",
                    "Rita",
                    "Roberta",
                    "Rosa",
                    "Rosanna",
                    "Rossana",
                    "Rossella",
                    "Sabrina",
                    "Sandra",
                    "Sara",
                    "Serena",
                    "Silvana",
                    "Silvia",
                    "Simona",
                    "Simonetta",
                    "Sofia",
                    "Sonia",
                    "Stefania",
                    "Susanna",
                    "Teresa",
                    "Tina",
                    "Tiziana",
                    "Tosca",
                    "Valentina",
                    "Valeria",
                    "Vanda",
                    "Vanessa",
                    "Vanna",
                    "Vera",
                    "Veronica",
                    "Vilma",
                    "Viola",
                    "Virginia",
                    "Vittoria",
                  ],
                  nl: [
                    "Ada",
                    "Arianne",
                    "Afke",
                    "Amanda",
                    "Amber",
                    "Amy",
                    "Aniek",
                    "Anita",
                    "Anja",
                    "Anna",
                    "Anne",
                    "Annelies",
                    "Annemarie",
                    "Annette",
                    "Anouk",
                    "Astrid",
                    "Aukje",
                    "Barbara",
                    "Bianca",
                    "Carla",
                    "Carlijn",
                    "Carolien",
                    "Chantal",
                    "Charlotte",
                    "Claudia",
                    "Daniëlle",
                    "Debora",
                    "Diane",
                    "Dora",
                    "Eline",
                    "Elise",
                    "Ella",
                    "Ellen",
                    "Emma",
                    "Esmee",
                    "Evelien",
                    "Esther",
                    "Erica",
                    "Eva",
                    "Femke",
                    "Fleur",
                    "Floor",
                    "Froukje",
                    "Gea",
                    "Gerda",
                    "Hanna",
                    "Hanneke",
                    "Heleen",
                    "Hilde",
                    "Ilona",
                    "Ina",
                    "Inge",
                    "Ingrid",
                    "Iris",
                    "Isabel",
                    "Isabelle",
                    "Janneke",
                    "Jasmijn",
                    "Jeanine",
                    "Jennifer",
                    "Jessica",
                    "Johanna",
                    "Joke",
                    "Julia",
                    "Julie",
                    "Karen",
                    "Karin",
                    "Katja",
                    "Kim",
                    "Lara",
                    "Laura",
                    "Lena",
                    "Lianne",
                    "Lieke",
                    "Lilian",
                    "Linda",
                    "Lisa",
                    "Lisanne",
                    "Lotte",
                    "Louise",
                    "Maaike",
                    "Manon",
                    "Marga",
                    "Maria",
                    "Marissa",
                    "Marit",
                    "Marjolein",
                    "Martine",
                    "Marleen",
                    "Melissa",
                    "Merel",
                    "Miranda",
                    "Michelle",
                    "Mirjam",
                    "Mirthe",
                    "Naomi",
                    "Natalie",
                    "Nienke",
                    "Nina",
                    "Noortje",
                    "Olivia",
                    "Patricia",
                    "Paula",
                    "Paulien",
                    "Ramona",
                    "Ria",
                    "Rianne",
                    "Roos",
                    "Rosanne",
                    "Ruth",
                    "Sabrina",
                    "Sandra",
                    "Sanne",
                    "Sara",
                    "Saskia",
                    "Silvia",
                    "Sofia",
                    "Sophie",
                    "Sonja",
                    "Suzanne",
                    "Tamara",
                    "Tess",
                    "Tessa",
                    "Tineke",
                    "Valerie",
                    "Vanessa",
                    "Veerle",
                    "Vera",
                    "Victoria",
                    "Wendy",
                    "Willeke",
                    "Yvonne",
                    "Zoë",
                  ],
                  fr: [
                    "Abdon",
                    "Abel",
                    "Abigaëlle",
                    "Abigaïl",
                    "Acacius",
                    "Acanthe",
                    "Adalbert",
                    "Adalsinde",
                    "Adegrine",
                    "Adélaïde",
                    "Adèle",
                    "Adélie",
                    "Adeline",
                    "Adeltrude",
                    "Adolphe",
                    "Adonis",
                    "Adrastée",
                    "Adrehilde",
                    "Adrienne",
                    "Agathe",
                    "Agilbert",
                    "Aglaé",
                    "Aignan",
                    "Agneflète",
                    "Agnès",
                    "Agrippine",
                    "Aimé",
                    "Alaine",
                    "Alaïs",
                    "Albane",
                    "Albérade",
                    "Alberte",
                    "Alcide",
                    "Alcine",
                    "Alcyone",
                    "Aldegonde",
                    "Aleth",
                    "Alexandrine",
                    "Alexine",
                    "Alice",
                    "Aliénor",
                    "Aliette",
                    "Aline",
                    "Alix",
                    "Alizé",
                    "Aloïse",
                    "Aloyse",
                    "Alphonsine",
                    "Althée",
                    "Amaliane",
                    "Amalthée",
                    "Amande",
                    "Amandine",
                    "Amant",
                    "Amarande",
                    "Amaranthe",
                    "Amaryllis",
                    "Ambre",
                    "Ambroisie",
                    "Amélie",
                    "Améthyste",
                    "Aminte",
                    "Anaël",
                    "Anaïs",
                    "Anastasie",
                    "Anatole",
                    "Ancelin",
                    "Andrée",
                    "Anémone",
                    "Angadrême",
                    "Angèle",
                    "Angeline",
                    "Angélique",
                    "Angilbert",
                    "Anicet",
                    "Annabelle",
                    "Anne",
                    "Annette",
                    "Annick",
                    "Annie",
                    "Annonciade",
                    "Ansbert",
                    "Anstrudie",
                    "Anthelme",
                    "Antigone",
                    "Antoinette",
                    "Antonine",
                    "Aphélie",
                    "Apolline",
                    "Apollonie",
                    "Aquiline",
                    "Arabelle",
                    "Arcadie",
                    "Archange",
                    "Argine",
                    "Ariane",
                    "Aricie",
                    "Ariel",
                    "Arielle",
                    "Arlette",
                    "Armance",
                    "Armande",
                    "Armandine",
                    "Armelle",
                    "Armide",
                    "Armelle",
                    "Armin",
                    "Arnaud",
                    "Arsène",
                    "Arsinoé",
                    "Artémis",
                    "Arthur",
                    "Ascelin",
                    "Ascension",
                    "Assomption",
                    "Astarté",
                    "Astérie",
                    "Astrée",
                    "Astrid",
                    "Athalie",
                    "Athanasie",
                    "Athina",
                    "Aube",
                    "Albert",
                    "Aude",
                    "Audrey",
                    "Augustine",
                    "Aure",
                    "Aurélie",
                    "Aurélien",
                    "Aurèle",
                    "Aurore",
                    "Auxence",
                    "Aveline",
                    "Abigaëlle",
                    "Avoye",
                    "Axelle",
                    "Aymard",
                    "Azalée",
                    "Adèle",
                    "Adeline",
                    "Barbe",
                    "Basilisse",
                    "Bathilde",
                    "Béatrice",
                    "Béatrix",
                    "Bénédicte",
                    "Bérengère",
                    "Bernadette",
                    "Berthe",
                    "Bertille",
                    "Beuve",
                    "Blanche",
                    "Blanc",
                    "Blandine",
                    "Brigitte",
                    "Brune",
                    "Brunehilde",
                    "Callista",
                    "Camille",
                    "Capucine",
                    "Carine",
                    "Caroline",
                    "Cassandre",
                    "Catherine",
                    "Cécile",
                    "Céleste",
                    "Célestine",
                    "Céline",
                    "Chantal",
                    "Charlène",
                    "Charline",
                    "Charlotte",
                    "Chloé",
                    "Christelle",
                    "Christiane",
                    "Christine",
                    "Claire",
                    "Clara",
                    "Claude",
                    "Claudine",
                    "Clarisse",
                    "Clémence",
                    "Clémentine",
                    "Cléo",
                    "Clio",
                    "Clotilde",
                    "Coline",
                    "Conception",
                    "Constance",
                    "Coralie",
                    "Coraline",
                    "Corentine",
                    "Corinne",
                    "Cyrielle",
                    "Daniel",
                    "Daniel",
                    "Daphné",
                    "Débora",
                    "Delphine",
                    "Denise",
                    "Diane",
                    "Dieudonné",
                    "Dominique",
                    "Doriane",
                    "Dorothée",
                    "Douce",
                    "Édith",
                    "Edmée",
                    "Éléonore",
                    "Éliane",
                    "Élia",
                    "Éliette",
                    "Élisabeth",
                    "Élise",
                    "Ella",
                    "Élodie",
                    "Éloïse",
                    "Elsa",
                    "Émeline",
                    "Émérance",
                    "Émérentienne",
                    "Émérencie",
                    "Émilie",
                    "Emma",
                    "Emmanuelle",
                    "Emmelie",
                    "Ernestine",
                    "Esther",
                    "Estelle",
                    "Eudoxie",
                    "Eugénie",
                    "Eulalie",
                    "Euphrasie",
                    "Eusébie",
                    "Évangéline",
                    "Eva",
                    "Ève",
                    "Évelyne",
                    "Fanny",
                    "Fantine",
                    "Faustine",
                    "Félicie",
                    "Fernande",
                    "Flavie",
                    "Fleur",
                    "Flore",
                    "Florence",
                    "Florie",
                    "Fortuné",
                    "France",
                    "Francia",
                    "Françoise",
                    "Francine",
                    "Gabrielle",
                    "Gaëlle",
                    "Garance",
                    "Geneviève",
                    "Georgette",
                    "Gerberge",
                    "Germaine",
                    "Gertrude",
                    "Gisèle",
                    "Guenièvre",
                    "Guilhemine",
                    "Guillemette",
                    "Gustave",
                    "Gwenael",
                    "Hélène",
                    "Héloïse",
                    "Henriette",
                    "Hermine",
                    "Hermione",
                    "Hippolyte",
                    "Honorine",
                    "Hortense",
                    "Huguette",
                    "Ines",
                    "Irène",
                    "Irina",
                    "Iris",
                    "Isabeau",
                    "Isabelle",
                    "Iseult",
                    "Isolde",
                    "Ismérie",
                    "Jacinthe",
                    "Jacqueline",
                    "Jade",
                    "Janine",
                    "Jeanne",
                    "Jocelyne",
                    "Joëlle",
                    "Joséphine",
                    "Judith",
                    "Julia",
                    "Julie",
                    "Jules",
                    "Juliette",
                    "Justine",
                    "Katy",
                    "Kathy",
                    "Katie",
                    "Laura",
                    "Laure",
                    "Laureline",
                    "Laurence",
                    "Laurene",
                    "Lauriane",
                    "Laurianne",
                    "Laurine",
                    "Léa",
                    "Léna",
                    "Léonie",
                    "Léon",
                    "Léontine",
                    "Lorraine",
                    "Lucie",
                    "Lucienne",
                    "Lucille",
                    "Ludivine",
                    "Lydie",
                    "Lydie",
                    "Megane",
                    "Madeleine",
                    "Magali",
                    "Maguelone",
                    "Mallaury",
                    "Manon",
                    "Marceline",
                    "Margot",
                    "Marguerite",
                    "Marianne",
                    "Marie",
                    "Myriam",
                    "Marie",
                    "Marine",
                    "Marion",
                    "Marlène",
                    "Marthe",
                    "Martine",
                    "Mathilde",
                    "Maud",
                    "Maureen",
                    "Mauricette",
                    "Maxime",
                    "Mélanie",
                    "Melissa",
                    "Mélissandre",
                    "Mélisande",
                    "Mélodie",
                    "Michel",
                    "Micheline",
                    "Mireille",
                    "Miriam",
                    "Moïse",
                    "Monique",
                    "Morgane",
                    "Muriel",
                    "Mylène",
                    "Nadège",
                    "Nadine",
                    "Nathalie",
                    "Nicole",
                    "Nicolette",
                    "Nine",
                    "Noël",
                    "Noémie",
                    "Océane",
                    "Odette",
                    "Odile",
                    "Olive",
                    "Olivia",
                    "Olympe",
                    "Ombline",
                    "Ombeline",
                    "Ophélie",
                    "Oriande",
                    "Oriane",
                    "Ozanne",
                    "Pascale",
                    "Pascaline",
                    "Paule",
                    "Paulette",
                    "Pauline",
                    "Priscille",
                    "Prisca",
                    "Prisque",
                    "Pécine",
                    "Pélagie",
                    "Pénélope",
                    "Perrine",
                    "Pétronille",
                    "Philippine",
                    "Philomène",
                    "Philothée",
                    "Primerose",
                    "Prudence",
                    "Pulchérie",
                    "Quentine",
                    "Quiéta",
                    "Quintia",
                    "Quintilla",
                    "Rachel",
                    "Raphaëlle",
                    "Raymonde",
                    "Rebecca",
                    "Régine",
                    "Réjeanne",
                    "René",
                    "Rita",
                    "Rita",
                    "Rolande",
                    "Romane",
                    "Rosalie",
                    "Rose",
                    "Roseline",
                    "Sabine",
                    "Salomé",
                    "Sandra",
                    "Sandrine",
                    "Sarah",
                    "Ségolène",
                    "Séverine",
                    "Sibylle",
                    "Simone",
                    "Sixt",
                    "Solange",
                    "Soline",
                    "Solène",
                    "Sophie",
                    "Stéphanie",
                    "Suzanne",
                    "Sylvain",
                    "Sylvie",
                    "Tatiana",
                    "Thaïs",
                    "Théodora",
                    "Thérèse",
                    "Tiphaine",
                    "Ursule",
                    "Valentine",
                    "Valérie",
                    "Véronique",
                    "Victoire",
                    "Victorine",
                    "Vinciane",
                    "Violette",
                    "Virginie",
                    "Viviane",
                    "Xavière",
                    "Yolande",
                    "Ysaline",
                    "Yvette",
                    "Yvonne",
                    "Zélie",
                    "Zita",
                    "Zoé",
                  ],
                },
              },
              lastNames: {
                en: [
                  "Smith",
                  "Johnson",
                  "Williams",
                  "Jones",
                  "Brown",
                  "Davis",
                  "Miller",
                  "Wilson",
                  "Moore",
                  "Taylor",
                  "Anderson",
                  "Thomas",
                  "Jackson",
                  "White",
                  "Harris",
                  "Martin",
                  "Thompson",
                  "Garcia",
                  "Martinez",
                  "Robinson",
                  "Clark",
                  "Rodriguez",
                  "Lewis",
                  "Lee",
                  "Walker",
                  "Hall",
                  "Allen",
                  "Young",
                  "Hernandez",
                  "King",
                  "Wright",
                  "Lopez",
                  "Hill",
                  "Scott",
                  "Green",
                  "Adams",
                  "Baker",
                  "Gonzalez",
                  "Nelson",
                  "Carter",
                  "Mitchell",
                  "Perez",
                  "Roberts",
                  "Turner",
                  "Phillips",
                  "Campbell",
                  "Parker",
                  "Evans",
                  "Edwards",
                  "Collins",
                  "Stewart",
                  "Sanchez",
                  "Morris",
                  "Rogers",
                  "Reed",
                  "Cook",
                  "Morgan",
                  "Bell",
                  "Murphy",
                  "Bailey",
                  "Rivera",
                  "Cooper",
                  "Richardson",
                  "Cox",
                  "Howard",
                  "Ward",
                  "Torres",
                  "Peterson",
                  "Gray",
                  "Ramirez",
                  "James",
                  "Watson",
                  "Brooks",
                  "Kelly",
                  "Sanders",
                  "Price",
                  "Bennett",
                  "Wood",
                  "Barnes",
                  "Ross",
                  "Henderson",
                  "Coleman",
                  "Jenkins",
                  "Perry",
                  "Powell",
                  "Long",
                  "Patterson",
                  "Hughes",
                  "Flores",
                  "Washington",
                  "Butler",
                  "Simmons",
                  "Foster",
                  "Gonzales",
                  "Bryant",
                  "Alexander",
                  "Russell",
                  "Griffin",
                  "Diaz",
                  "Hayes",
                  "Myers",
                  "Ford",
                  "Hamilton",
                  "Graham",
                  "Sullivan",
                  "Wallace",
                  "Woods",
                  "Cole",
                  "West",
                  "Jordan",
                  "Owens",
                  "Reynolds",
                  "Fisher",
                  "Ellis",
                  "Harrison",
                  "Gibson",
                  "McDonald",
                  "Cruz",
                  "Marshall",
                  "Ortiz",
                  "Gomez",
                  "Murray",
                  "Freeman",
                  "Wells",
                  "Webb",
                  "Simpson",
                  "Stevens",
                  "Tucker",
                  "Porter",
                  "Hunter",
                  "Hicks",
                  "Crawford",
                  "Henry",
                  "Boyd",
                  "Mason",
                  "Morales",
                  "Kennedy",
                  "Warren",
                  "Dixon",
                  "Ramos",
                  "Reyes",
                  "Burns",
                  "Gordon",
                  "Shaw",
                  "Holmes",
                  "Rice",
                  "Robertson",
                  "Hunt",
                  "Black",
                  "Daniels",
                  "Palmer",
                  "Mills",
                  "Nichols",
                  "Grant",
                  "Knight",
                  "Ferguson",
                  "Rose",
                  "Stone",
                  "Hawkins",
                  "Dunn",
                  "Perkins",
                  "Hudson",
                  "Spencer",
                  "Gardner",
                  "Stephens",
                  "Payne",
                  "Pierce",
                  "Berry",
                  "Matthews",
                  "Arnold",
                  "Wagner",
                  "Willis",
                  "Ray",
                  "Watkins",
                  "Olson",
                  "Carroll",
                  "Duncan",
                  "Snyder",
                  "Hart",
                  "Cunningham",
                  "Bradley",
                  "Lane",
                  "Andrews",
                  "Ruiz",
                  "Harper",
                  "Fox",
                  "Riley",
                  "Armstrong",
                  "Carpenter",
                  "Weaver",
                  "Greene",
                  "Lawrence",
                  "Elliott",
                  "Chavez",
                  "Sims",
                  "Austin",
                  "Peters",
                  "Kelley",
                  "Franklin",
                  "Lawson",
                  "Fields",
                  "Gutierrez",
                  "Ryan",
                  "Schmidt",
                  "Carr",
                  "Vasquez",
                  "Castillo",
                  "Wheeler",
                  "Chapman",
                  "Oliver",
                  "Montgomery",
                  "Richards",
                  "Williamson",
                  "Johnston",
                  "Banks",
                  "Meyer",
                  "Bishop",
                  "McCoy",
                  "Howell",
                  "Alvarez",
                  "Morrison",
                  "Hansen",
                  "Fernandez",
                  "Garza",
                  "Harvey",
                  "Little",
                  "Burton",
                  "Stanley",
                  "Nguyen",
                  "George",
                  "Jacobs",
                  "Reid",
                  "Kim",
                  "Fuller",
                  "Lynch",
                  "Dean",
                  "Gilbert",
                  "Garrett",
                  "Romero",
                  "Welch",
                  "Larson",
                  "Frazier",
                  "Burke",
                  "Hanson",
                  "Day",
                  "Mendoza",
                  "Moreno",
                  "Bowman",
                  "Medina",
                  "Fowler",
                  "Brewer",
                  "Hoffman",
                  "Carlson",
                  "Silva",
                  "Pearson",
                  "Holland",
                  "Douglas",
                  "Fleming",
                  "Jensen",
                  "Vargas",
                  "Byrd",
                  "Davidson",
                  "Hopkins",
                  "May",
                  "Terry",
                  "Herrera",
                  "Wade",
                  "Soto",
                  "Walters",
                  "Curtis",
                  "Neal",
                  "Caldwell",
                  "Lowe",
                  "Jennings",
                  "Barnett",
                  "Graves",
                  "Jimenez",
                  "Horton",
                  "Shelton",
                  "Barrett",
                  "Obrien",
                  "Castro",
                  "Sutton",
                  "Gregory",
                  "McKinney",
                  "Lucas",
                  "Miles",
                  "Craig",
                  "Rodriquez",
                  "Chambers",
                  "Holt",
                  "Lambert",
                  "Fletcher",
                  "Watts",
                  "Bates",
                  "Hale",
                  "Rhodes",
                  "Pena",
                  "Beck",
                  "Newman",
                  "Haynes",
                  "McDaniel",
                  "Mendez",
                  "Bush",
                  "Vaughn",
                  "Parks",
                  "Dawson",
                  "Santiago",
                  "Norris",
                  "Hardy",
                  "Love",
                  "Steele",
                  "Curry",
                  "Powers",
                  "Schultz",
                  "Barker",
                  "Guzman",
                  "Page",
                  "Munoz",
                  "Ball",
                  "Keller",
                  "Chandler",
                  "Weber",
                  "Leonard",
                  "Walsh",
                  "Lyons",
                  "Ramsey",
                  "Wolfe",
                  "Schneider",
                  "Mullins",
                  "Benson",
                  "Sharp",
                  "Bowen",
                  "Daniel",
                  "Barber",
                  "Cummings",
                  "Hines",
                  "Baldwin",
                  "Griffith",
                  "Valdez",
                  "Hubbard",
                  "Salazar",
                  "Reeves",
                  "Warner",
                  "Stevenson",
                  "Burgess",
                  "Santos",
                  "Tate",
                  "Cross",
                  "Garner",
                  "Mann",
                  "Mack",
                  "Moss",
                  "Thornton",
                  "Dennis",
                  "McGee",
                  "Farmer",
                  "Delgado",
                  "Aguilar",
                  "Vega",
                  "Glover",
                  "Manning",
                  "Cohen",
                  "Harmon",
                  "Rodgers",
                  "Robbins",
                  "Newton",
                  "Todd",
                  "Blair",
                  "Higgins",
                  "Ingram",
                  "Reese",
                  "Cannon",
                  "Strickland",
                  "Townsend",
                  "Potter",
                  "Goodwin",
                  "Walton",
                  "Rowe",
                  "Hampton",
                  "Ortega",
                  "Patton",
                  "Swanson",
                  "Joseph",
                  "Francis",
                  "Goodman",
                  "Maldonado",
                  "Yates",
                  "Becker",
                  "Erickson",
                  "Hodges",
                  "Rios",
                  "Conner",
                  "Adkins",
                  "Webster",
                  "Norman",
                  "Malone",
                  "Hammond",
                  "Flowers",
                  "Cobb",
                  "Moody",
                  "Quinn",
                  "Blake",
                  "Maxwell",
                  "Pope",
                  "Floyd",
                  "Osborne",
                  "Paul",
                  "McCarthy",
                  "Guerrero",
                  "Lindsey",
                  "Estrada",
                  "Sandoval",
                  "Gibbs",
                  "Tyler",
                  "Gross",
                  "Fitzgerald",
                  "Stokes",
                  "Doyle",
                  "Sherman",
                  "Saunders",
                  "Wise",
                  "Colon",
                  "Gill",
                  "Alvarado",
                  "Greer",
                  "Padilla",
                  "Simon",
                  "Waters",
                  "Nunez",
                  "Ballard",
                  "Schwartz",
                  "McBride",
                  "Houston",
                  "Christensen",
                  "Klein",
                  "Pratt",
                  "Briggs",
                  "Parsons",
                  "McLaughlin",
                  "Zimmerman",
                  "French",
                  "Buchanan",
                  "Moran",
                  "Copeland",
                  "Roy",
                  "Pittman",
                  "Brady",
                  "McCormick",
                  "Holloway",
                  "Brock",
                  "Poole",
                  "Frank",
                  "Logan",
                  "Owen",
                  "Bass",
                  "Marsh",
                  "Drake",
                  "Wong",
                  "Jefferson",
                  "Park",
                  "Morton",
                  "Abbott",
                  "Sparks",
                  "Patrick",
                  "Norton",
                  "Huff",
                  "Clayton",
                  "Massey",
                  "Lloyd",
                  "Figueroa",
                  "Carson",
                  "Bowers",
                  "Roberson",
                  "Barton",
                  "Tran",
                  "Lamb",
                  "Harrington",
                  "Casey",
                  "Boone",
                  "Cortez",
                  "Clarke",
                  "Mathis",
                  "Singleton",
                  "Wilkins",
                  "Cain",
                  "Bryan",
                  "Underwood",
                  "Hogan",
                  "McKenzie",
                  "Collier",
                  "Luna",
                  "Phelps",
                  "McGuire",
                  "Allison",
                  "Bridges",
                  "Wilkerson",
                  "Nash",
                  "Summers",
                  "Atkins",
                ],
                it: [
                  "Acciai",
                  "Aglietti",
                  "Agostini",
                  "Agresti",
                  "Ahmed",
                  "Aiazzi",
                  "Albanese",
                  "Alberti",
                  "Alessi",
                  "Alfani",
                  "Alinari",
                  "Alterini",
                  "Amato",
                  "Ammannati",
                  "Ancillotti",
                  "Andrei",
                  "Andreini",
                  "Andreoni",
                  "Angeli",
                  "Anichini",
                  "Antonelli",
                  "Antonini",
                  "Arena",
                  "Ariani",
                  "Arnetoli",
                  "Arrighi",
                  "Baccani",
                  "Baccetti",
                  "Bacci",
                  "Bacherini",
                  "Badii",
                  "Baggiani",
                  "Baglioni",
                  "Bagni",
                  "Bagnoli",
                  "Baldassini",
                  "Baldi",
                  "Baldini",
                  "Ballerini",
                  "Balli",
                  "Ballini",
                  "Balloni",
                  "Bambi",
                  "Banchi",
                  "Bandinelli",
                  "Bandini",
                  "Bani",
                  "Barbetti",
                  "Barbieri",
                  "Barchielli",
                  "Bardazzi",
                  "Bardelli",
                  "Bardi",
                  "Barducci",
                  "Bargellini",
                  "Bargiacchi",
                  "Barni",
                  "Baroncelli",
                  "Baroncini",
                  "Barone",
                  "Baroni",
                  "Baronti",
                  "Bartalesi",
                  "Bartoletti",
                  "Bartoli",
                  "Bartolini",
                  "Bartoloni",
                  "Bartolozzi",
                  "Basagni",
                  "Basile",
                  "Bassi",
                  "Batacchi",
                  "Battaglia",
                  "Battaglini",
                  "Bausi",
                  "Becagli",
                  "Becattini",
                  "Becchi",
                  "Becucci",
                  "Bellandi",
                  "Bellesi",
                  "Belli",
                  "Bellini",
                  "Bellucci",
                  "Bencini",
                  "Benedetti",
                  "Benelli",
                  "Beni",
                  "Benini",
                  "Bensi",
                  "Benucci",
                  "Benvenuti",
                  "Berlincioni",
                  "Bernacchioni",
                  "Bernardi",
                  "Bernardini",
                  "Berni",
                  "Bernini",
                  "Bertelli",
                  "Berti",
                  "Bertini",
                  "Bessi",
                  "Betti",
                  "Bettini",
                  "Biagi",
                  "Biagini",
                  "Biagioni",
                  "Biagiotti",
                  "Biancalani",
                  "Bianchi",
                  "Bianchini",
                  "Bianco",
                  "Biffoli",
                  "Bigazzi",
                  "Bigi",
                  "Biliotti",
                  "Billi",
                  "Binazzi",
                  "Bindi",
                  "Bini",
                  "Biondi",
                  "Bizzarri",
                  "Bocci",
                  "Bogani",
                  "Bolognesi",
                  "Bonaiuti",
                  "Bonanni",
                  "Bonciani",
                  "Boncinelli",
                  "Bondi",
                  "Bonechi",
                  "Bongini",
                  "Boni",
                  "Bonini",
                  "Borchi",
                  "Boretti",
                  "Borghi",
                  "Borghini",
                  "Borgioli",
                  "Borri",
                  "Borselli",
                  "Boschi",
                  "Bottai",
                  "Bracci",
                  "Braccini",
                  "Brandi",
                  "Braschi",
                  "Bravi",
                  "Brazzini",
                  "Breschi",
                  "Brilli",
                  "Brizzi",
                  "Brogelli",
                  "Brogi",
                  "Brogioni",
                  "Brunelli",
                  "Brunetti",
                  "Bruni",
                  "Bruno",
                  "Brunori",
                  "Bruschi",
                  "Bucci",
                  "Bucciarelli",
                  "Buccioni",
                  "Bucelli",
                  "Bulli",
                  "Burberi",
                  "Burchi",
                  "Burgassi",
                  "Burroni",
                  "Bussotti",
                  "Buti",
                  "Caciolli",
                  "Caiani",
                  "Calabrese",
                  "Calamai",
                  "Calamandrei",
                  "Caldini",
                  "Calo'",
                  "Calonaci",
                  "Calosi",
                  "Calvelli",
                  "Cambi",
                  "Camiciottoli",
                  "Cammelli",
                  "Cammilli",
                  "Campolmi",
                  "Cantini",
                  "Capanni",
                  "Capecchi",
                  "Caponi",
                  "Cappelletti",
                  "Cappelli",
                  "Cappellini",
                  "Cappugi",
                  "Capretti",
                  "Caputo",
                  "Carbone",
                  "Carboni",
                  "Cardini",
                  "Carlesi",
                  "Carletti",
                  "Carli",
                  "Caroti",
                  "Carotti",
                  "Carrai",
                  "Carraresi",
                  "Carta",
                  "Caruso",
                  "Casalini",
                  "Casati",
                  "Caselli",
                  "Casini",
                  "Castagnoli",
                  "Castellani",
                  "Castelli",
                  "Castellucci",
                  "Catalano",
                  "Catarzi",
                  "Catelani",
                  "Cavaciocchi",
                  "Cavallaro",
                  "Cavallini",
                  "Cavicchi",
                  "Cavini",
                  "Ceccarelli",
                  "Ceccatelli",
                  "Ceccherelli",
                  "Ceccherini",
                  "Cecchi",
                  "Cecchini",
                  "Cecconi",
                  "Cei",
                  "Cellai",
                  "Celli",
                  "Cellini",
                  "Cencetti",
                  "Ceni",
                  "Cenni",
                  "Cerbai",
                  "Cesari",
                  "Ceseri",
                  "Checcacci",
                  "Checchi",
                  "Checcucci",
                  "Cheli",
                  "Chellini",
                  "Chen",
                  "Cheng",
                  "Cherici",
                  "Cherubini",
                  "Chiaramonti",
                  "Chiarantini",
                  "Chiarelli",
                  "Chiari",
                  "Chiarini",
                  "Chiarugi",
                  "Chiavacci",
                  "Chiesi",
                  "Chimenti",
                  "Chini",
                  "Chirici",
                  "Chiti",
                  "Ciabatti",
                  "Ciampi",
                  "Cianchi",
                  "Cianfanelli",
                  "Cianferoni",
                  "Ciani",
                  "Ciapetti",
                  "Ciappi",
                  "Ciardi",
                  "Ciatti",
                  "Cicali",
                  "Ciccone",
                  "Cinelli",
                  "Cini",
                  "Ciobanu",
                  "Ciolli",
                  "Cioni",
                  "Cipriani",
                  "Cirillo",
                  "Cirri",
                  "Ciucchi",
                  "Ciuffi",
                  "Ciulli",
                  "Ciullini",
                  "Clemente",
                  "Cocchi",
                  "Cognome",
                  "Coli",
                  "Collini",
                  "Colombo",
                  "Colzi",
                  "Comparini",
                  "Conforti",
                  "Consigli",
                  "Conte",
                  "Conti",
                  "Contini",
                  "Coppini",
                  "Coppola",
                  "Corsi",
                  "Corsini",
                  "Corti",
                  "Cortini",
                  "Cosi",
                  "Costa",
                  "Costantini",
                  "Costantino",
                  "Cozzi",
                  "Cresci",
                  "Crescioli",
                  "Cresti",
                  "Crini",
                  "Curradi",
                  "D'Agostino",
                  "D'Alessandro",
                  "D'Amico",
                  "D'Angelo",
                  "Daddi",
                  "Dainelli",
                  "Dallai",
                  "Danti",
                  "Davitti",
                  "De Angelis",
                  "De Luca",
                  "De Marco",
                  "De Rosa",
                  "De Santis",
                  "De Simone",
                  "De Vita",
                  "Degl'Innocenti",
                  "Degli Innocenti",
                  "Dei",
                  "Del Lungo",
                  "Del Re",
                  "Di Marco",
                  "Di Stefano",
                  "Dini",
                  "Diop",
                  "Dobre",
                  "Dolfi",
                  "Donati",
                  "Dondoli",
                  "Dong",
                  "Donnini",
                  "Ducci",
                  "Dumitru",
                  "Ermini",
                  "Esposito",
                  "Evangelisti",
                  "Fabbri",
                  "Fabbrini",
                  "Fabbrizzi",
                  "Fabbroni",
                  "Fabbrucci",
                  "Fabiani",
                  "Facchini",
                  "Faggi",
                  "Fagioli",
                  "Failli",
                  "Faini",
                  "Falciani",
                  "Falcini",
                  "Falcone",
                  "Fallani",
                  "Falorni",
                  "Falsini",
                  "Falugiani",
                  "Fancelli",
                  "Fanelli",
                  "Fanetti",
                  "Fanfani",
                  "Fani",
                  "Fantappie'",
                  "Fantechi",
                  "Fanti",
                  "Fantini",
                  "Fantoni",
                  "Farina",
                  "Fattori",
                  "Favilli",
                  "Fedi",
                  "Fei",
                  "Ferrante",
                  "Ferrara",
                  "Ferrari",
                  "Ferraro",
                  "Ferretti",
                  "Ferri",
                  "Ferrini",
                  "Ferroni",
                  "Fiaschi",
                  "Fibbi",
                  "Fiesoli",
                  "Filippi",
                  "Filippini",
                  "Fini",
                  "Fioravanti",
                  "Fiore",
                  "Fiorentini",
                  "Fiorini",
                  "Fissi",
                  "Focardi",
                  "Foggi",
                  "Fontana",
                  "Fontanelli",
                  "Fontani",
                  "Forconi",
                  "Formigli",
                  "Forte",
                  "Forti",
                  "Fortini",
                  "Fossati",
                  "Fossi",
                  "Francalanci",
                  "Franceschi",
                  "Franceschini",
                  "Franchi",
                  "Franchini",
                  "Franci",
                  "Francini",
                  "Francioni",
                  "Franco",
                  "Frassineti",
                  "Frati",
                  "Fratini",
                  "Frilli",
                  "Frizzi",
                  "Frosali",
                  "Frosini",
                  "Frullini",
                  "Fusco",
                  "Fusi",
                  "Gabbrielli",
                  "Gabellini",
                  "Gagliardi",
                  "Galanti",
                  "Galardi",
                  "Galeotti",
                  "Galletti",
                  "Galli",
                  "Gallo",
                  "Gallori",
                  "Gambacciani",
                  "Gargani",
                  "Garofalo",
                  "Garuglieri",
                  "Gashi",
                  "Gasperini",
                  "Gatti",
                  "Gelli",
                  "Gensini",
                  "Gentile",
                  "Gentili",
                  "Geri",
                  "Gerini",
                  "Gheri",
                  "Ghini",
                  "Giachetti",
                  "Giachi",
                  "Giacomelli",
                  "Gianassi",
                  "Giani",
                  "Giannelli",
                  "Giannetti",
                  "Gianni",
                  "Giannini",
                  "Giannoni",
                  "Giannotti",
                  "Giannozzi",
                  "Gigli",
                  "Giordano",
                  "Giorgetti",
                  "Giorgi",
                  "Giovacchini",
                  "Giovannelli",
                  "Giovannetti",
                  "Giovannini",
                  "Giovannoni",
                  "Giuliani",
                  "Giunti",
                  "Giuntini",
                  "Giusti",
                  "Gonnelli",
                  "Goretti",
                  "Gori",
                  "Gradi",
                  "Gramigni",
                  "Grassi",
                  "Grasso",
                  "Graziani",
                  "Grazzini",
                  "Greco",
                  "Grifoni",
                  "Grillo",
                  "Grimaldi",
                  "Grossi",
                  "Gualtieri",
                  "Guarducci",
                  "Guarino",
                  "Guarnieri",
                  "Guasti",
                  "Guerra",
                  "Guerri",
                  "Guerrini",
                  "Guidi",
                  "Guidotti",
                  "He",
                  "Hoxha",
                  "Hu",
                  "Huang",
                  "Iandelli",
                  "Ignesti",
                  "Innocenti",
                  "Jin",
                  "La Rosa",
                  "Lai",
                  "Landi",
                  "Landini",
                  "Lanini",
                  "Lapi",
                  "Lapini",
                  "Lari",
                  "Lascialfari",
                  "Lastrucci",
                  "Latini",
                  "Lazzeri",
                  "Lazzerini",
                  "Lelli",
                  "Lenzi",
                  "Leonardi",
                  "Leoncini",
                  "Leone",
                  "Leoni",
                  "Lepri",
                  "Li",
                  "Liao",
                  "Lin",
                  "Linari",
                  "Lippi",
                  "Lisi",
                  "Livi",
                  "Lombardi",
                  "Lombardini",
                  "Lombardo",
                  "Longo",
                  "Lopez",
                  "Lorenzi",
                  "Lorenzini",
                  "Lorini",
                  "Lotti",
                  "Lu",
                  "Lucchesi",
                  "Lucherini",
                  "Lunghi",
                  "Lupi",
                  "Madiai",
                  "Maestrini",
                  "Maffei",
                  "Maggi",
                  "Maggini",
                  "Magherini",
                  "Magini",
                  "Magnani",
                  "Magnelli",
                  "Magni",
                  "Magnolfi",
                  "Magrini",
                  "Malavolti",
                  "Malevolti",
                  "Manca",
                  "Mancini",
                  "Manetti",
                  "Manfredi",
                  "Mangani",
                  "Mannelli",
                  "Manni",
                  "Mannini",
                  "Mannucci",
                  "Manuelli",
                  "Manzini",
                  "Marcelli",
                  "Marchese",
                  "Marchetti",
                  "Marchi",
                  "Marchiani",
                  "Marchionni",
                  "Marconi",
                  "Marcucci",
                  "Margheri",
                  "Mari",
                  "Mariani",
                  "Marilli",
                  "Marinai",
                  "Marinari",
                  "Marinelli",
                  "Marini",
                  "Marino",
                  "Mariotti",
                  "Marsili",
                  "Martelli",
                  "Martinelli",
                  "Martini",
                  "Martino",
                  "Marzi",
                  "Masi",
                  "Masini",
                  "Masoni",
                  "Massai",
                  "Materassi",
                  "Mattei",
                  "Matteini",
                  "Matteucci",
                  "Matteuzzi",
                  "Mattioli",
                  "Mattolini",
                  "Matucci",
                  "Mauro",
                  "Mazzanti",
                  "Mazzei",
                  "Mazzetti",
                  "Mazzi",
                  "Mazzini",
                  "Mazzocchi",
                  "Mazzoli",
                  "Mazzoni",
                  "Mazzuoli",
                  "Meacci",
                  "Mecocci",
                  "Meini",
                  "Melani",
                  "Mele",
                  "Meli",
                  "Mengoni",
                  "Menichetti",
                  "Meoni",
                  "Merlini",
                  "Messeri",
                  "Messina",
                  "Meucci",
                  "Miccinesi",
                  "Miceli",
                  "Micheli",
                  "Michelini",
                  "Michelozzi",
                  "Migliori",
                  "Migliorini",
                  "Milani",
                  "Miniati",
                  "Misuri",
                  "Monaco",
                  "Montagnani",
                  "Montagni",
                  "Montanari",
                  "Montelatici",
                  "Monti",
                  "Montigiani",
                  "Montini",
                  "Morandi",
                  "Morandini",
                  "Morelli",
                  "Moretti",
                  "Morganti",
                  "Mori",
                  "Morini",
                  "Moroni",
                  "Morozzi",
                  "Mugnai",
                  "Mugnaini",
                  "Mustafa",
                  "Naldi",
                  "Naldini",
                  "Nannelli",
                  "Nanni",
                  "Nannini",
                  "Nannucci",
                  "Nardi",
                  "Nardini",
                  "Nardoni",
                  "Natali",
                  "Ndiaye",
                  "Nencetti",
                  "Nencini",
                  "Nencioni",
                  "Neri",
                  "Nesi",
                  "Nesti",
                  "Niccolai",
                  "Niccoli",
                  "Niccolini",
                  "Nigi",
                  "Nistri",
                  "Nocentini",
                  "Noferini",
                  "Novelli",
                  "Nucci",
                  "Nuti",
                  "Nutini",
                  "Oliva",
                  "Olivieri",
                  "Olmi",
                  "Orlandi",
                  "Orlandini",
                  "Orlando",
                  "Orsini",
                  "Ortolani",
                  "Ottanelli",
                  "Pacciani",
                  "Pace",
                  "Paci",
                  "Pacini",
                  "Pagani",
                  "Pagano",
                  "Paggetti",
                  "Pagliai",
                  "Pagni",
                  "Pagnini",
                  "Paladini",
                  "Palagi",
                  "Palchetti",
                  "Palloni",
                  "Palmieri",
                  "Palumbo",
                  "Pampaloni",
                  "Pancani",
                  "Pandolfi",
                  "Pandolfini",
                  "Panerai",
                  "Panichi",
                  "Paoletti",
                  "Paoli",
                  "Paolini",
                  "Papi",
                  "Papini",
                  "Papucci",
                  "Parenti",
                  "Parigi",
                  "Parisi",
                  "Parri",
                  "Parrini",
                  "Pasquini",
                  "Passeri",
                  "Pecchioli",
                  "Pecorini",
                  "Pellegrini",
                  "Pepi",
                  "Perini",
                  "Perrone",
                  "Peruzzi",
                  "Pesci",
                  "Pestelli",
                  "Petri",
                  "Petrini",
                  "Petrucci",
                  "Pettini",
                  "Pezzati",
                  "Pezzatini",
                  "Piani",
                  "Piazza",
                  "Piazzesi",
                  "Piazzini",
                  "Piccardi",
                  "Picchi",
                  "Piccini",
                  "Piccioli",
                  "Pieraccini",
                  "Pieraccioni",
                  "Pieralli",
                  "Pierattini",
                  "Pieri",
                  "Pierini",
                  "Pieroni",
                  "Pietrini",
                  "Pini",
                  "Pinna",
                  "Pinto",
                  "Pinzani",
                  "Pinzauti",
                  "Piras",
                  "Pisani",
                  "Pistolesi",
                  "Poggesi",
                  "Poggi",
                  "Poggiali",
                  "Poggiolini",
                  "Poli",
                  "Pollastri",
                  "Porciani",
                  "Pozzi",
                  "Pratellesi",
                  "Pratesi",
                  "Prosperi",
                  "Pruneti",
                  "Pucci",
                  "Puccini",
                  "Puccioni",
                  "Pugi",
                  "Pugliese",
                  "Puliti",
                  "Querci",
                  "Quercioli",
                  "Raddi",
                  "Radu",
                  "Raffaelli",
                  "Ragazzini",
                  "Ranfagni",
                  "Ranieri",
                  "Rastrelli",
                  "Raugei",
                  "Raveggi",
                  "Renai",
                  "Renzi",
                  "Rettori",
                  "Ricci",
                  "Ricciardi",
                  "Ridi",
                  "Ridolfi",
                  "Rigacci",
                  "Righi",
                  "Righini",
                  "Rinaldi",
                  "Risaliti",
                  "Ristori",
                  "Rizzo",
                  "Rocchi",
                  "Rocchini",
                  "Rogai",
                  "Romagnoli",
                  "Romanelli",
                  "Romani",
                  "Romano",
                  "Romei",
                  "Romeo",
                  "Romiti",
                  "Romoli",
                  "Romolini",
                  "Rontini",
                  "Rosati",
                  "Roselli",
                  "Rosi",
                  "Rossetti",
                  "Rossi",
                  "Rossini",
                  "Rovai",
                  "Ruggeri",
                  "Ruggiero",
                  "Russo",
                  "Sabatini",
                  "Saccardi",
                  "Sacchetti",
                  "Sacchi",
                  "Sacco",
                  "Salerno",
                  "Salimbeni",
                  "Salucci",
                  "Salvadori",
                  "Salvestrini",
                  "Salvi",
                  "Salvini",
                  "Sanesi",
                  "Sani",
                  "Sanna",
                  "Santi",
                  "Santini",
                  "Santoni",
                  "Santoro",
                  "Santucci",
                  "Sardi",
                  "Sarri",
                  "Sarti",
                  "Sassi",
                  "Sbolci",
                  "Scali",
                  "Scarpelli",
                  "Scarselli",
                  "Scopetani",
                  "Secci",
                  "Selvi",
                  "Senatori",
                  "Senesi",
                  "Serafini",
                  "Sereni",
                  "Serra",
                  "Sestini",
                  "Sguanci",
                  "Sieni",
                  "Signorini",
                  "Silvestri",
                  "Simoncini",
                  "Simonetti",
                  "Simoni",
                  "Singh",
                  "Sodi",
                  "Soldi",
                  "Somigli",
                  "Sorbi",
                  "Sorelli",
                  "Sorrentino",
                  "Sottili",
                  "Spina",
                  "Spinelli",
                  "Staccioli",
                  "Staderini",
                  "Stefanelli",
                  "Stefani",
                  "Stefanini",
                  "Stella",
                  "Susini",
                  "Tacchi",
                  "Tacconi",
                  "Taddei",
                  "Tagliaferri",
                  "Tamburini",
                  "Tanganelli",
                  "Tani",
                  "Tanini",
                  "Tapinassi",
                  "Tarchi",
                  "Tarchiani",
                  "Targioni",
                  "Tassi",
                  "Tassini",
                  "Tempesti",
                  "Terzani",
                  "Tesi",
                  "Testa",
                  "Testi",
                  "Tilli",
                  "Tinti",
                  "Tirinnanzi",
                  "Toccafondi",
                  "Tofanari",
                  "Tofani",
                  "Tognaccini",
                  "Tonelli",
                  "Tonini",
                  "Torelli",
                  "Torrini",
                  "Tosi",
                  "Toti",
                  "Tozzi",
                  "Trambusti",
                  "Trapani",
                  "Tucci",
                  "Turchi",
                  "Ugolini",
                  "Ulivi",
                  "Valente",
                  "Valenti",
                  "Valentini",
                  "Vangelisti",
                  "Vanni",
                  "Vannini",
                  "Vannoni",
                  "Vannozzi",
                  "Vannucchi",
                  "Vannucci",
                  "Ventura",
                  "Venturi",
                  "Venturini",
                  "Vestri",
                  "Vettori",
                  "Vichi",
                  "Viciani",
                  "Vieri",
                  "Vigiani",
                  "Vignoli",
                  "Vignolini",
                  "Vignozzi",
                  "Villani",
                  "Vinci",
                  "Visani",
                  "Vitale",
                  "Vitali",
                  "Viti",
                  "Viviani",
                  "Vivoli",
                  "Volpe",
                  "Volpi",
                  "Wang",
                  "Wu",
                  "Xu",
                  "Yang",
                  "Ye",
                  "Zagli",
                  "Zani",
                  "Zanieri",
                  "Zanobini",
                  "Zecchi",
                  "Zetti",
                  "Zhang",
                  "Zheng",
                  "Zhou",
                  "Zhu",
                  "Zingoni",
                  "Zini",
                  "Zoppi",
                ],
                nl: [
                  "Albers",
                  "Alblas",
                  "Appelman",
                  "Baars",
                  "Baas",
                  "Bakker",
                  "Blank",
                  "Bleeker",
                  "Blok",
                  "Blom",
                  "Boer",
                  "Boers",
                  "Boldewijn",
                  "Boon",
                  "Boot",
                  "Bos",
                  "Bosch",
                  "Bosma",
                  "Bosman",
                  "Bouma",
                  "Bouman",
                  "Bouwman",
                  "Brands",
                  "Brouwer",
                  "Burger",
                  "Buijs",
                  "Buitenhuis",
                  "Ceder",
                  "Cohen",
                  "Dekker",
                  "Dekkers",
                  "Dijkman",
                  "Dijkstra",
                  "Driessen",
                  "Drost",
                  "Engel",
                  "Evers",
                  "Faber",
                  "Franke",
                  "Gerritsen",
                  "Goedhart",
                  "Goossens",
                  "Groen",
                  "Groenenberg",
                  "Groot",
                  "Haan",
                  "Hart",
                  "Heemskerk",
                  "Hendriks",
                  "Hermans",
                  "Hoekstra",
                  "Hofman",
                  "Hopman",
                  "Huisman",
                  "Jacobs",
                  "Jansen",
                  "Janssen",
                  "Jonker",
                  "Jaspers",
                  "Keijzer",
                  "Klaassen",
                  "Klein",
                  "Koek",
                  "Koenders",
                  "Kok",
                  "Kool",
                  "Koopman",
                  "Koopmans",
                  "Koning",
                  "Koster",
                  "Kramer",
                  "Kroon",
                  "Kuijpers",
                  "Kuiper",
                  "Kuipers",
                  "Kurt",
                  "Koster",
                  "Kwakman",
                  "Los",
                  "Lubbers",
                  "Maas",
                  "Markus",
                  "Martens",
                  "Meijer",
                  "Mol",
                  "Molenaar",
                  "Mulder",
                  "Nieuwenhuis",
                  "Peeters",
                  "Peters",
                  "Pengel",
                  "Pieters",
                  "Pool",
                  "Post",
                  "Postma",
                  "Prins",
                  "Pronk",
                  "Reijnders",
                  "Rietveld",
                  "Roest",
                  "Roos",
                  "Sanders",
                  "Schaap",
                  "Scheffer",
                  "Schenk",
                  "Schilder",
                  "Schipper",
                  "Schmidt",
                  "Scholten",
                  "Schouten",
                  "Schut",
                  "Schutte",
                  "Schuurman",
                  "Simons",
                  "Smeets",
                  "Smit",
                  "Smits",
                  "Snel",
                  "Swinkels",
                  "Tas",
                  "Terpstra",
                  "Timmermans",
                  "Tol",
                  "Tromp",
                  "Troost",
                  "Valk",
                  "Veenstra",
                  "Veldkamp",
                  "Verbeek",
                  "Verheul",
                  "Verhoeven",
                  "Vermeer",
                  "Vermeulen",
                  "Verweij",
                  "Vink",
                  "Visser",
                  "Voorn",
                  "Vos",
                  "Wagenaar",
                  "Wiersema",
                  "Willems",
                  "Willemsen",
                  "Witteveen",
                  "Wolff",
                  "Wolters",
                  "Zijlstra",
                  "Zwart",
                  "de Beer",
                  "de Boer",
                  "de Bruijn",
                  "de Bruin",
                  "de Graaf",
                  "de Groot",
                  "de Haan",
                  "de Haas",
                  "de Jager",
                  "de Jong",
                  "de Jonge",
                  "de Koning",
                  "de Lange",
                  "de Leeuw",
                  "de Ridder",
                  "de Rooij",
                  "de Ruiter",
                  "de Vos",
                  "de Vries",
                  "de Waal",
                  "de Wit",
                  "de Zwart",
                  "van Beek",
                  "van Boven",
                  "van Dam",
                  "van Dijk",
                  "van Dongen",
                  "van Doorn",
                  "van Egmond",
                  "van Eijk",
                  "van Es",
                  "van Gelder",
                  "van Gelderen",
                  "van Houten",
                  "van Hulst",
                  "van Kempen",
                  "van Kesteren",
                  "van Leeuwen",
                  "van Loon",
                  "van Mill",
                  "van Noord",
                  "van Ommen",
                  "van Ommeren",
                  "van Oosten",
                  "van Oostveen",
                  "van Rijn",
                  "van Schaik",
                  "van Veen",
                  "van Vliet",
                  "van Wijk",
                  "van Wijngaarden",
                  "van den Poel",
                  "van de Pol",
                  "van den Ploeg",
                  "van de Ven",
                  "van den Berg",
                  "van den Bosch",
                  "van den Brink",
                  "van den Broek",
                  "van den Heuvel",
                  "van der Heijden",
                  "van der Horst",
                  "van der Hulst",
                  "van der Kroon",
                  "van der Laan",
                  "van der Linden",
                  "van der Meer",
                  "van der Meij",
                  "van der Meulen",
                  "van der Molen",
                  "van der Sluis",
                  "van der Spek",
                  "van der Veen",
                  "van der Velde",
                  "van der Velden",
                  "van der Vliet",
                  "van der Wal",
                ],
                uk: [
                  "Smith",
                  "Jones",
                  "Williams",
                  "Taylor",
                  "Brown",
                  "Davies",
                  "Evans",
                  "Wilson",
                  "Thomas",
                  "Johnson",
                  "Roberts",
                  "Robinson",
                  "Thompson",
                  "Wright",
                  "Walker",
                  "White",
                  "Edwards",
                  "Hughes",
                  "Green",
                  "Hall",
                  "Lewis",
                  "Harris",
                  "Clarke",
                  "Patel",
                  "Jackson",
                  "Wood",
                  "Turner",
                  "Martin",
                  "Cooper",
                  "Hill",
                  "Ward",
                  "Morris",
                  "Moore",
                  "Clark",
                  "Lee",
                  "King",
                  "Baker",
                  "Harrison",
                  "Morgan",
                  "Allen",
                  "James",
                  "Scott",
                  "Phillips",
                  "Watson",
                  "Davis",
                  "Parker",
                  "Price",
                  "Bennett",
                  "Young",
                  "Griffiths",
                  "Mitchell",
                  "Kelly",
                  "Cook",
                  "Carter",
                  "Richardson",
                  "Bailey",
                  "Collins",
                  "Bell",
                  "Shaw",
                  "Murphy",
                  "Miller",
                  "Cox",
                  "Richards",
                  "Khan",
                  "Marshall",
                  "Anderson",
                  "Simpson",
                  "Ellis",
                  "Adams",
                  "Singh",
                  "Begum",
                  "Wilkinson",
                  "Foster",
                  "Chapman",
                  "Powell",
                  "Webb",
                  "Rogers",
                  "Gray",
                  "Mason",
                  "Ali",
                  "Hunt",
                  "Hussain",
                  "Campbell",
                  "Matthews",
                  "Owen",
                  "Palmer",
                  "Holmes",
                  "Mills",
                  "Barnes",
                  "Knight",
                  "Lloyd",
                  "Butler",
                  "Russell",
                  "Barker",
                  "Fisher",
                  "Stevens",
                  "Jenkins",
                  "Murray",
                  "Dixon",
                  "Harvey",
                  "Graham",
                  "Pearson",
                  "Ahmed",
                  "Fletcher",
                  "Walsh",
                  "Kaur",
                  "Gibson",
                  "Howard",
                  "Andrews",
                  "Stewart",
                  "Elliott",
                  "Reynolds",
                  "Saunders",
                  "Payne",
                  "Fox",
                  "Ford",
                  "Pearce",
                  "Day",
                  "Brooks",
                  "West",
                  "Lawrence",
                  "Cole",
                  "Atkinson",
                  "Bradley",
                  "Spencer",
                  "Gill",
                  "Dawson",
                  "Ball",
                  "Burton",
                  "O'brien",
                  "Watts",
                  "Rose",
                  "Booth",
                  "Perry",
                  "Ryan",
                  "Grant",
                  "Wells",
                  "Armstrong",
                  "Francis",
                  "Rees",
                  "Hayes",
                  "Hart",
                  "Hudson",
                  "Newman",
                  "Barrett",
                  "Webster",
                  "Hunter",
                  "Gregory",
                  "Carr",
                  "Lowe",
                  "Page",
                  "Marsh",
                  "Riley",
                  "Dunn",
                  "Woods",
                  "Parsons",
                  "Berry",
                  "Stone",
                  "Reid",
                  "Holland",
                  "Hawkins",
                  "Harding",
                  "Porter",
                  "Robertson",
                  "Newton",
                  "Oliver",
                  "Reed",
                  "Kennedy",
                  "Williamson",
                  "Bird",
                  "Gardner",
                  "Shah",
                  "Dean",
                  "Lane",
                  "Cooke",
                  "Bates",
                  "Henderson",
                  "Parry",
                  "Burgess",
                  "Bishop",
                  "Walton",
                  "Burns",
                  "Nicholson",
                  "Shepherd",
                  "Ross",
                  "Cross",
                  "Long",
                  "Freeman",
                  "Warren",
                  "Nicholls",
                  "Hamilton",
                  "Byrne",
                  "Sutton",
                  "Mcdonald",
                  "Yates",
                  "Hodgson",
                  "Robson",
                  "Curtis",
                  "Hopkins",
                  "O'connor",
                  "Harper",
                  "Coleman",
                  "Watkins",
                  "Moss",
                  "Mccarthy",
                  "Chambers",
                  "O'neill",
                  "Griffin",
                  "Sharp",
                  "Hardy",
                  "Wheeler",
                  "Potter",
                  "Osborne",
                  "Johnston",
                  "Gordon",
                  "Doyle",
                  "Wallace",
                  "George",
                  "Jordan",
                  "Hutchinson",
                  "Rowe",
                  "Burke",
                  "May",
                  "Pritchard",
                  "Gilbert",
                  "Willis",
                  "Higgins",
                  "Read",
                  "Miles",
                  "Stevenson",
                  "Stephenson",
                  "Hammond",
                  "Arnold",
                  "Buckley",
                  "Walters",
                  "Hewitt",
                  "Barber",
                  "Nelson",
                  "Slater",
                  "Austin",
                  "Sullivan",
                  "Whitehead",
                  "Mann",
                  "Frost",
                  "Lambert",
                  "Stephens",
                  "Blake",
                  "Akhtar",
                  "Lynch",
                  "Goodwin",
                  "Barton",
                  "Woodward",
                  "Thomson",
                  "Cunningham",
                  "Quinn",
                  "Barnett",
                  "Baxter",
                  "Bibi",
                  "Clayton",
                  "Nash",
                  "Greenwood",
                  "Jennings",
                  "Holt",
                  "Kemp",
                  "Poole",
                  "Gallagher",
                  "Bond",
                  "Stokes",
                  "Tucker",
                  "Davidson",
                  "Fowler",
                  "Heath",
                  "Norman",
                  "Middleton",
                  "Lawson",
                  "Banks",
                  "French",
                  "Stanley",
                  "Jarvis",
                  "Gibbs",
                  "Ferguson",
                  "Hayward",
                  "Carroll",
                  "Douglas",
                  "Dickinson",
                  "Todd",
                  "Barlow",
                  "Peters",
                  "Lucas",
                  "Knowles",
                  "Hartley",
                  "Miah",
                  "Simmons",
                  "Morton",
                  "Alexander",
                  "Field",
                  "Morrison",
                  "Norris",
                  "Townsend",
                  "Preston",
                  "Hancock",
                  "Thornton",
                  "Baldwin",
                  "Burrows",
                  "Briggs",
                  "Parkinson",
                  "Reeves",
                  "Macdonald",
                  "Lamb",
                  "Black",
                  "Abbott",
                  "Sanders",
                  "Thorpe",
                  "Holden",
                  "Tomlinson",
                  "Perkins",
                  "Ashton",
                  "Rhodes",
                  "Fuller",
                  "Howe",
                  "Bryant",
                  "Vaughan",
                  "Dale",
                  "Davey",
                  "Weston",
                  "Bartlett",
                  "Whittaker",
                  "Davison",
                  "Kent",
                  "Skinner",
                  "Birch",
                  "Morley",
                  "Daniels",
                  "Glover",
                  "Howell",
                  "Cartwright",
                  "Pugh",
                  "Humphreys",
                  "Goddard",
                  "Brennan",
                  "Wall",
                  "Kirby",
                  "Bowen",
                  "Savage",
                  "Bull",
                  "Wong",
                  "Dobson",
                  "Smart",
                  "Wilkins",
                  "Kirk",
                  "Fraser",
                  "Duffy",
                  "Hicks",
                  "Patterson",
                  "Bradshaw",
                  "Little",
                  "Archer",
                  "Warner",
                  "Waters",
                  "O'sullivan",
                  "Farrell",
                  "Brookes",
                  "Atkins",
                  "Kay",
                  "Dodd",
                  "Bentley",
                  "Flynn",
                  "John",
                  "Schofield",
                  "Short",
                  "Haynes",
                  "Wade",
                  "Butcher",
                  "Henry",
                  "Sanderson",
                  "Crawford",
                  "Sheppard",
                  "Bolton",
                  "Coates",
                  "Giles",
                  "Gould",
                  "Houghton",
                  "Gibbons",
                  "Pratt",
                  "Manning",
                  "Law",
                  "Hooper",
                  "Noble",
                  "Dyer",
                  "Rahman",
                  "Clements",
                  "Moran",
                  "Sykes",
                  "Chan",
                  "Doherty",
                  "Connolly",
                  "Joyce",
                  "Franklin",
                  "Hobbs",
                  "Coles",
                  "Herbert",
                  "Steele",
                  "Kerr",
                  "Leach",
                  "Winter",
                  "Owens",
                  "Duncan",
                  "Naylor",
                  "Fleming",
                  "Horton",
                  "Finch",
                  "Fitzgerald",
                  "Randall",
                  "Carpenter",
                  "Marsden",
                  "Browne",
                  "Garner",
                  "Pickering",
                  "Hale",
                  "Dennis",
                  "Vincent",
                  "Chadwick",
                  "Chandler",
                  "Sharpe",
                  "Nolan",
                  "Lyons",
                  "Hurst",
                  "Collier",
                  "Peacock",
                  "Howarth",
                  "Faulkner",
                  "Rice",
                  "Pollard",
                  "Welch",
                  "Norton",
                  "Gough",
                  "Sinclair",
                  "Blackburn",
                  "Bryan",
                  "Conway",
                  "Power",
                  "Cameron",
                  "Daly",
                  "Allan",
                  "Hanson",
                  "Gardiner",
                  "Boyle",
                  "Myers",
                  "Turnbull",
                  "Wallis",
                  "Mahmood",
                  "Sims",
                  "Swift",
                  "Iqbal",
                  "Pope",
                  "Brady",
                  "Chamberlain",
                  "Rowley",
                  "Tyler",
                  "Farmer",
                  "Metcalfe",
                  "Hilton",
                  "Godfrey",
                  "Holloway",
                  "Parkin",
                  "Bray",
                  "Talbot",
                  "Donnelly",
                  "Nixon",
                  "Charlton",
                  "Benson",
                  "Whitehouse",
                  "Barry",
                  "Hope",
                  "Lord",
                  "North",
                  "Storey",
                  "Connor",
                  "Potts",
                  "Bevan",
                  "Hargreaves",
                  "Mclean",
                  "Mistry",
                  "Bruce",
                  "Howells",
                  "Hyde",
                  "Parkes",
                  "Wyatt",
                  "Fry",
                  "Lees",
                  "O'donnell",
                  "Craig",
                  "Forster",
                  "Mckenzie",
                  "Humphries",
                  "Mellor",
                  "Carey",
                  "Ingram",
                  "Summers",
                  "Leonard",
                ],
                de: [
                  "Müller",
                  "Schmidt",
                  "Schneider",
                  "Fischer",
                  "Weber",
                  "Meyer",
                  "Wagner",
                  "Becker",
                  "Schulz",
                  "Hoffmann",
                  "Schäfer",
                  "Koch",
                  "Bauer",
                  "Richter",
                  "Klein",
                  "Wolf",
                  "Schröder",
                  "Neumann",
                  "Schwarz",
                  "Zimmermann",
                  "Braun",
                  "Krüger",
                  "Hofmann",
                  "Hartmann",
                  "Lange",
                  "Schmitt",
                  "Werner",
                  "Schmitz",
                  "Krause",
                  "Meier",
                  "Lehmann",
                  "Schmid",
                  "Schulze",
                  "Maier",
                  "Köhler",
                  "Herrmann",
                  "König",
                  "Walter",
                  "Mayer",
                  "Huber",
                  "Kaiser",
                  "Fuchs",
                  "Peters",
                  "Lang",
                  "Scholz",
                  "Möller",
                  "Weiß",
                  "Jung",
                  "Hahn",
                  "Schubert",
                  "Vogel",
                  "Friedrich",
                  "Keller",
                  "Günther",
                  "Frank",
                  "Berger",
                  "Winkler",
                  "Roth",
                  "Beck",
                  "Lorenz",
                  "Baumann",
                  "Franke",
                  "Albrecht",
                  "Schuster",
                  "Simon",
                  "Ludwig",
                  "Böhm",
                  "Winter",
                  "Kraus",
                  "Martin",
                  "Schumacher",
                  "Krämer",
                  "Vogt",
                  "Stein",
                  "Jäger",
                  "Otto",
                  "Sommer",
                  "Groß",
                  "Seidel",
                  "Heinrich",
                  "Brandt",
                  "Haas",
                  "Schreiber",
                  "Graf",
                  "Schulte",
                  "Dietrich",
                  "Ziegler",
                  "Kuhn",
                  "Kühn",
                  "Pohl",
                  "Engel",
                  "Horn",
                  "Busch",
                  "Bergmann",
                  "Thomas",
                  "Voigt",
                  "Sauer",
                  "Arnold",
                  "Wolff",
                  "Pfeiffer",
                ],
                jp: [
                  "Sato",
                  "Suzuki",
                  "Takahashi",
                  "Tanaka",
                  "Watanabe",
                  "Ito",
                  "Yamamoto",
                  "Nakamura",
                  "Kobayashi",
                  "Kato",
                  "Yoshida",
                  "Yamada",
                  "Sasaki",
                  "Yamaguchi",
                  "Saito",
                  "Matsumoto",
                  "Inoue",
                  "Kimura",
                  "Hayashi",
                  "Shimizu",
                  "Yamazaki",
                  "Mori",
                  "Abe",
                  "Ikeda",
                  "Hashimoto",
                  "Yamashita",
                  "Ishikawa",
                  "Nakajima",
                  "Maeda",
                  "Fujita",
                  "Ogawa",
                  "Goto",
                  "Okada",
                  "Hasegawa",
                  "Murakami",
                  "Kondo",
                  "Ishii",
                  "Saito",
                  "Sakamoto",
                  "Endo",
                  "Aoki",
                  "Fujii",
                  "Nishimura",
                  "Fukuda",
                  "Ota",
                  "Miura",
                  "Fujiwara",
                  "Okamoto",
                  "Matsuda",
                  "Nakagawa",
                  "Nakano",
                  "Harada",
                  "Ono",
                  "Tamura",
                  "Takeuchi",
                  "Kaneko",
                  "Wada",
                  "Nakayama",
                  "Ishida",
                  "Ueda",
                  "Morita",
                  "Hara",
                  "Shibata",
                  "Sakai",
                  "Kudo",
                  "Yokoyama",
                  "Miyazaki",
                  "Miyamoto",
                  "Uchida",
                  "Takagi",
                  "Ando",
                  "Taniguchi",
                  "Ohno",
                  "Maruyama",
                  "Imai",
                  "Takada",
                  "Fujimoto",
                  "Takeda",
                  "Murata",
                  "Ueno",
                  "Sugiyama",
                  "Masuda",
                  "Sugawara",
                  "Hirano",
                  "Kojima",
                  "Otsuka",
                  "Chiba",
                  "Kubo",
                  "Matsui",
                  "Iwasaki",
                  "Sakurai",
                  "Kinoshita",
                  "Noguchi",
                  "Matsuo",
                  "Nomura",
                  "Kikuchi",
                  "Sano",
                  "Onishi",
                  "Sugimoto",
                  "Arai",
                ],
                es: [
                  "Garcia",
                  "Fernandez",
                  "Lopez",
                  "Martinez",
                  "Gonzalez",
                  "Rodriguez",
                  "Sanchez",
                  "Perez",
                  "Martin",
                  "Gomez",
                  "Ruiz",
                  "Diaz",
                  "Hernandez",
                  "Alvarez",
                  "Jimenez",
                  "Moreno",
                  "Munoz",
                  "Alonso",
                  "Romero",
                  "Navarro",
                  "Gutierrez",
                  "Torres",
                  "Dominguez",
                  "Gil",
                  "Vazquez",
                  "Blanco",
                  "Serrano",
                  "Ramos",
                  "Castro",
                  "Suarez",
                  "Sanz",
                  "Rubio",
                  "Ortega",
                  "Molina",
                  "Delgado",
                  "Ortiz",
                  "Morales",
                  "Ramirez",
                  "Marin",
                  "Iglesias",
                  "Santos",
                  "Castillo",
                  "Garrido",
                  "Calvo",
                  "Pena",
                  "Cruz",
                  "Cano",
                  "Nunez",
                  "Prieto",
                  "Diez",
                  "Lozano",
                  "Vidal",
                  "Pascual",
                  "Ferrer",
                  "Medina",
                  "Vega",
                  "Leon",
                  "Herrero",
                  "Vicente",
                  "Mendez",
                  "Guerrero",
                  "Fuentes",
                  "Campos",
                  "Nieto",
                  "Cortes",
                  "Caballero",
                  "Ibanez",
                  "Lorenzo",
                  "Pastor",
                  "Gimenez",
                  "Saez",
                  "Soler",
                  "Marquez",
                  "Carrasco",
                  "Herrera",
                  "Montero",
                  "Arias",
                  "Crespo",
                  "Flores",
                  "Andres",
                  "Aguilar",
                  "Hidalgo",
                  "Cabrera",
                  "Mora",
                  "Duran",
                  "Velasco",
                  "Rey",
                  "Pardo",
                  "Roman",
                  "Vila",
                  "Bravo",
                  "Merino",
                  "Moya",
                  "Soto",
                  "Izquierdo",
                  "Reyes",
                  "Redondo",
                  "Marcos",
                  "Carmona",
                  "Menendez",
                ],
                fr: [
                  "Martin",
                  "Bernard",
                  "Thomas",
                  "Petit",
                  "Robert",
                  "Richard",
                  "Durand",
                  "Dubois",
                  "Moreau",
                  "Laurent",
                  "Simon",
                  "Michel",
                  "Lefèvre",
                  "Leroy",
                  "Roux",
                  "David",
                  "Bertrand",
                  "Morel",
                  "Fournier",
                  "Girard",
                  "Bonnet",
                  "Dupont",
                  "Lambert",
                  "Fontaine",
                  "Rousseau",
                  "Vincent",
                  "Müller",
                  "Lefèvre",
                  "Faure",
                  "André",
                  "Mercier",
                  "Blanc",
                  "Guérin",
                  "Boyer",
                  "Garnier",
                  "Chevalier",
                  "François",
                  "Legrand",
                  "Gauthier",
                  "Garcia",
                  "Perrin",
                  "Robin",
                  "Clément",
                  "Morin",
                  "Nicolas",
                  "Henry",
                  "Roussel",
                  "Matthieu",
                  "Gautier",
                  "Masson",
                  "Marchand",
                  "Duval",
                  "Denis",
                  "Dumont",
                  "Marie",
                  "Lemaire",
                  "Noël",
                  "Meyer",
                  "Dufour",
                  "Meunier",
                  "Brun",
                  "Blanchard",
                  "Giraud",
                  "Joly",
                  "Rivière",
                  "Lucas",
                  "Brunet",
                  "Gaillard",
                  "Barbier",
                  "Arnaud",
                  "Martínez",
                  "Gérard",
                  "Roche",
                  "Renard",
                  "Schmitt",
                  "Roy",
                  "Leroux",
                  "Colin",
                  "Vidal",
                  "Caron",
                  "Picard",
                  "Roger",
                  "Fabre",
                  "Aubert",
                  "Lemoine",
                  "Renaud",
                  "Dumas",
                  "Lacroix",
                  "Olivier",
                  "Philippe",
                  "Bourgeois",
                  "Pierre",
                  "Benoît",
                  "Rey",
                  "Leclerc",
                  "Payet",
                  "Rolland",
                  "Leclercq",
                  "Guillaume",
                  "Lecomte",
                  "López",
                  "Jean",
                  "Dupuy",
                  "Guillot",
                  "Hubert",
                  "Berger",
                  "Carpentier",
                  "Sánchez",
                  "Dupuis",
                  "Moulin",
                  "Louis",
                  "Deschamps",
                  "Huet",
                  "Vasseur",
                  "Perez",
                  "Boucher",
                  "Fleury",
                  "Royer",
                  "Klein",
                  "Jacquet",
                  "Adam",
                  "Paris",
                  "Poirier",
                  "Marty",
                  "Aubry",
                  "Guyot",
                  "Carré",
                  "Charles",
                  "Renault",
                  "Charpentier",
                  "Ménard",
                  "Maillard",
                  "Baron",
                  "Bertin",
                  "Bailly",
                  "Hervé",
                  "Schneider",
                  "Fernández",
                  "Le GallGall",
                  "Collet",
                  "Léger",
                  "Bouvier",
                  "Julien",
                  "Prévost",
                  "Millet",
                  "Perrot",
                  "Daniel",
                  "Le RouxRoux",
                  "Cousin",
                  "Germain",
                  "Breton",
                  "Besson",
                  "Langlois",
                  "Rémi",
                  "Le GoffGoff",
                  "Pelletier",
                  "Lévêque",
                  "Perrier",
                  "Leblanc",
                  "Barré",
                  "Lebrun",
                  "Marchal",
                  "Weber",
                  "Mallet",
                  "Hamon",
                  "Boulanger",
                  "Jacob",
                  "Monnier",
                  "Michaud",
                  "Rodríguez",
                  "Guichard",
                  "Gillet",
                  "Étienne",
                  "Grondin",
                  "Poulain",
                  "Tessier",
                  "Chevallier",
                  "Collin",
                  "Chauvin",
                  "Da SilvaSilva",
                  "Bouchet",
                  "Gay",
                  "Lemaître",
                  "Bénard",
                  "Maréchal",
                  "Humbert",
                  "Reynaud",
                  "Antoine",
                  "Hoarau",
                  "Perret",
                  "Barthélemy",
                  "Cordier",
                  "Pichon",
                  "Lejeune",
                  "Gilbert",
                  "Lamy",
                  "Delaunay",
                  "Pasquier",
                  "Carlier",
                  "LaporteLaporte",
                ],
              },
              postcodeAreas: [
                { code: "AB" },
                { code: "AL" },
                { code: "B" },
                { code: "BA" },
                { code: "BB" },
                { code: "BD" },
                { code: "BH" },
                { code: "BL" },
                { code: "BN" },
                { code: "BR" },
                { code: "BS" },
                { code: "BT" },
                { code: "CA" },
                { code: "CB" },
                { code: "CF" },
                { code: "CH" },
                { code: "CM" },
                { code: "CO" },
                { code: "CR" },
                { code: "CT" },
                { code: "CV" },
                { code: "CW" },
                { code: "DA" },
                { code: "DD" },
                { code: "DE" },
                { code: "DG" },
                { code: "DH" },
                { code: "DL" },
                { code: "DN" },
                { code: "DT" },
                { code: "DY" },
                { code: "E" },
                { code: "EC" },
                { code: "EH" },
                { code: "EN" },
                { code: "EX" },
                { code: "FK" },
                { code: "FY" },
                { code: "G" },
                { code: "GL" },
                { code: "GU" },
                { code: "GY" },
                { code: "HA" },
                { code: "HD" },
                { code: "HG" },
                { code: "HP" },
                { code: "HR" },
                { code: "HS" },
                { code: "HU" },
                { code: "HX" },
                { code: "IG" },
                { code: "IM" },
                { code: "IP" },
                { code: "IV" },
                { code: "JE" },
                { code: "KA" },
                { code: "KT" },
                { code: "KW" },
                { code: "KY" },
                { code: "L" },
                { code: "LA" },
                { code: "LD" },
                { code: "LE" },
                { code: "LL" },
                { code: "LN" },
                { code: "LS" },
                { code: "LU" },
                { code: "M" },
                { code: "ME" },
                { code: "MK" },
                { code: "ML" },
                { code: "N" },
                { code: "NE" },
                { code: "NG" },
                { code: "NN" },
                { code: "NP" },
                { code: "NR" },
                { code: "NW" },
                { code: "OL" },
                { code: "OX" },
                { code: "PA" },
                { code: "PE" },
                { code: "PH" },
                { code: "PL" },
                { code: "PO" },
                { code: "PR" },
                { code: "RG" },
                { code: "RH" },
                { code: "RM" },
                { code: "S" },
                { code: "SA" },
                { code: "SE" },
                { code: "SG" },
                { code: "SK" },
                { code: "SL" },
                { code: "SM" },
                { code: "SN" },
                { code: "SO" },
                { code: "SP" },
                { code: "SR" },
                { code: "SS" },
                { code: "ST" },
                { code: "SW" },
                { code: "SY" },
                { code: "TA" },
                { code: "TD" },
                { code: "TF" },
                { code: "TN" },
                { code: "TQ" },
                { code: "TR" },
                { code: "TS" },
                { code: "TW" },
                { code: "UB" },
                { code: "W" },
                { code: "WA" },
                { code: "WC" },
                { code: "WD" },
                { code: "WF" },
                { code: "WN" },
                { code: "WR" },
                { code: "WS" },
                { code: "WV" },
                { code: "YO" },
                { code: "ZE" },
              ],
              countries: [
                { name: "Afghanistan", abbreviation: "AF" },
                { name: "Åland Islands", abbreviation: "AX" },
                { name: "Albania", abbreviation: "AL" },
                { name: "Algeria", abbreviation: "DZ" },
                { name: "American Samoa", abbreviation: "AS" },
                { name: "Andorra", abbreviation: "AD" },
                { name: "Angola", abbreviation: "AO" },
                { name: "Anguilla", abbreviation: "AI" },
                { name: "Antarctica", abbreviation: "AQ" },
                { name: "Antigua & Barbuda", abbreviation: "AG" },
                { name: "Argentina", abbreviation: "AR" },
                { name: "Armenia", abbreviation: "AM" },
                { name: "Aruba", abbreviation: "AW" },
                { name: "Ascension Island", abbreviation: "AC" },
                { name: "Australia", abbreviation: "AU" },
                { name: "Austria", abbreviation: "AT" },
                { name: "Azerbaijan", abbreviation: "AZ" },
                { name: "Bahamas", abbreviation: "BS" },
                { name: "Bahrain", abbreviation: "BH" },
                { name: "Bangladesh", abbreviation: "BD" },
                { name: "Barbados", abbreviation: "BB" },
                { name: "Belarus", abbreviation: "BY" },
                { name: "Belgium", abbreviation: "BE" },
                { name: "Belize", abbreviation: "BZ" },
                { name: "Benin", abbreviation: "BJ" },
                { name: "Bermuda", abbreviation: "BM" },
                { name: "Bhutan", abbreviation: "BT" },
                { name: "Bolivia", abbreviation: "BO" },
                { name: "Bosnia & Herzegovina", abbreviation: "BA" },
                { name: "Botswana", abbreviation: "BW" },
                { name: "Brazil", abbreviation: "BR" },
                { name: "British Indian Ocean Territory", abbreviation: "IO" },
                { name: "British Virgin Islands", abbreviation: "VG" },
                { name: "Brunei", abbreviation: "BN" },
                { name: "Bulgaria", abbreviation: "BG" },
                { name: "Burkina Faso", abbreviation: "BF" },
                { name: "Burundi", abbreviation: "BI" },
                { name: "Cambodia", abbreviation: "KH" },
                { name: "Cameroon", abbreviation: "CM" },
                { name: "Canada", abbreviation: "CA" },
                { name: "Canary Islands", abbreviation: "IC" },
                { name: "Cape Verde", abbreviation: "CV" },
                { name: "Caribbean Netherlands", abbreviation: "BQ" },
                { name: "Cayman Islands", abbreviation: "KY" },
                { name: "Central African Republic", abbreviation: "CF" },
                { name: "Ceuta & Melilla", abbreviation: "EA" },
                { name: "Chad", abbreviation: "TD" },
                { name: "Chile", abbreviation: "CL" },
                { name: "China", abbreviation: "CN" },
                { name: "Christmas Island", abbreviation: "CX" },
                { name: "Cocos (Keeling) Islands", abbreviation: "CC" },
                { name: "Colombia", abbreviation: "CO" },
                { name: "Comoros", abbreviation: "KM" },
                { name: "Congo - Brazzaville", abbreviation: "CG" },
                { name: "Congo - Kinshasa", abbreviation: "CD" },
                { name: "Cook Islands", abbreviation: "CK" },
                { name: "Costa Rica", abbreviation: "CR" },
                { name: "Côte d'Ivoire", abbreviation: "CI" },
                { name: "Croatia", abbreviation: "HR" },
                { name: "Cuba", abbreviation: "CU" },
                { name: "Curaçao", abbreviation: "CW" },
                { name: "Cyprus", abbreviation: "CY" },
                { name: "Czech Republic", abbreviation: "CZ" },
                { name: "Denmark", abbreviation: "DK" },
                { name: "Diego Garcia", abbreviation: "DG" },
                { name: "Djibouti", abbreviation: "DJ" },
                { name: "Dominica", abbreviation: "DM" },
                { name: "Dominican Republic", abbreviation: "DO" },
                { name: "Ecuador", abbreviation: "EC" },
                { name: "Egypt", abbreviation: "EG" },
                { name: "El Salvador", abbreviation: "SV" },
                { name: "Equatorial Guinea", abbreviation: "GQ" },
                { name: "Eritrea", abbreviation: "ER" },
                { name: "Estonia", abbreviation: "EE" },
                { name: "Ethiopia", abbreviation: "ET" },
                { name: "Falkland Islands", abbreviation: "FK" },
                { name: "Faroe Islands", abbreviation: "FO" },
                { name: "Fiji", abbreviation: "FJ" },
                { name: "Finland", abbreviation: "FI" },
                { name: "France", abbreviation: "FR" },
                { name: "French Guiana", abbreviation: "GF" },
                { name: "French Polynesia", abbreviation: "PF" },
                { name: "French Southern Territories", abbreviation: "TF" },
                { name: "Gabon", abbreviation: "GA" },
                { name: "Gambia", abbreviation: "GM" },
                { name: "Georgia", abbreviation: "GE" },
                { name: "Germany", abbreviation: "DE" },
                { name: "Ghana", abbreviation: "GH" },
                { name: "Gibraltar", abbreviation: "GI" },
                { name: "Greece", abbreviation: "GR" },
                { name: "Greenland", abbreviation: "GL" },
                { name: "Grenada", abbreviation: "GD" },
                { name: "Guadeloupe", abbreviation: "GP" },
                { name: "Guam", abbreviation: "GU" },
                { name: "Guatemala", abbreviation: "GT" },
                { name: "Guernsey", abbreviation: "GG" },
                { name: "Guinea", abbreviation: "GN" },
                { name: "Guinea-Bissau", abbreviation: "GW" },
                { name: "Guyana", abbreviation: "GY" },
                { name: "Haiti", abbreviation: "HT" },
                { name: "Honduras", abbreviation: "HN" },
                { name: "Hong Kong SAR China", abbreviation: "HK" },
                { name: "Hungary", abbreviation: "HU" },
                { name: "Iceland", abbreviation: "IS" },
                { name: "India", abbreviation: "IN" },
                { name: "Indonesia", abbreviation: "ID" },
                { name: "Iran", abbreviation: "IR" },
                { name: "Iraq", abbreviation: "IQ" },
                { name: "Ireland", abbreviation: "IE" },
                { name: "Isle of Man", abbreviation: "IM" },
                { name: "Israel", abbreviation: "IL" },
                { name: "Italy", abbreviation: "IT" },
                { name: "Jamaica", abbreviation: "JM" },
                { name: "Japan", abbreviation: "JP" },
                { name: "Jersey", abbreviation: "JE" },
                { name: "Jordan", abbreviation: "JO" },
                { name: "Kazakhstan", abbreviation: "KZ" },
                { name: "Kenya", abbreviation: "KE" },
                { name: "Kiribati", abbreviation: "KI" },
                { name: "Kosovo", abbreviation: "XK" },
                { name: "Kuwait", abbreviation: "KW" },
                { name: "Kyrgyzstan", abbreviation: "KG" },
                { name: "Laos", abbreviation: "LA" },
                { name: "Latvia", abbreviation: "LV" },
                { name: "Lebanon", abbreviation: "LB" },
                { name: "Lesotho", abbreviation: "LS" },
                { name: "Liberia", abbreviation: "LR" },
                { name: "Libya", abbreviation: "LY" },
                { name: "Liechtenstein", abbreviation: "LI" },
                { name: "Lithuania", abbreviation: "LT" },
                { name: "Luxembourg", abbreviation: "LU" },
                { name: "Macau SAR China", abbreviation: "MO" },
                { name: "Macedonia", abbreviation: "MK" },
                { name: "Madagascar", abbreviation: "MG" },
                { name: "Malawi", abbreviation: "MW" },
                { name: "Malaysia", abbreviation: "MY" },
                { name: "Maldives", abbreviation: "MV" },
                { name: "Mali", abbreviation: "ML" },
                { name: "Malta", abbreviation: "MT" },
                { name: "Marshall Islands", abbreviation: "MH" },
                { name: "Martinique", abbreviation: "MQ" },
                { name: "Mauritania", abbreviation: "MR" },
                { name: "Mauritius", abbreviation: "MU" },
                { name: "Mayotte", abbreviation: "YT" },
                { name: "Mexico", abbreviation: "MX" },
                { name: "Micronesia", abbreviation: "FM" },
                { name: "Moldova", abbreviation: "MD" },
                { name: "Monaco", abbreviation: "MC" },
                { name: "Mongolia", abbreviation: "MN" },
                { name: "Montenegro", abbreviation: "ME" },
                { name: "Montserrat", abbreviation: "MS" },
                { name: "Morocco", abbreviation: "MA" },
                { name: "Mozambique", abbreviation: "MZ" },
                { name: "Myanmar (Burma)", abbreviation: "MM" },
                { name: "Namibia", abbreviation: "NA" },
                { name: "Nauru", abbreviation: "NR" },
                { name: "Nepal", abbreviation: "NP" },
                { name: "Netherlands", abbreviation: "NL" },
                { name: "New Caledonia", abbreviation: "NC" },
                { name: "New Zealand", abbreviation: "NZ" },
                { name: "Nicaragua", abbreviation: "NI" },
                { name: "Niger", abbreviation: "NE" },
                { name: "Nigeria", abbreviation: "NG" },
                { name: "Niue", abbreviation: "NU" },
                { name: "Norfolk Island", abbreviation: "NF" },
                { name: "North Korea", abbreviation: "KP" },
                { name: "Northern Mariana Islands", abbreviation: "MP" },
                { name: "Norway", abbreviation: "NO" },
                { name: "Oman", abbreviation: "OM" },
                { name: "Pakistan", abbreviation: "PK" },
                { name: "Palau", abbreviation: "PW" },
                { name: "Palestinian Territories", abbreviation: "PS" },
                { name: "Panama", abbreviation: "PA" },
                { name: "Papua New Guinea", abbreviation: "PG" },
                { name: "Paraguay", abbreviation: "PY" },
                { name: "Peru", abbreviation: "PE" },
                { name: "Philippines", abbreviation: "PH" },
                { name: "Pitcairn Islands", abbreviation: "PN" },
                { name: "Poland", abbreviation: "PL" },
                { name: "Portugal", abbreviation: "PT" },
                { name: "Puerto Rico", abbreviation: "PR" },
                { name: "Qatar", abbreviation: "QA" },
                { name: "Réunion", abbreviation: "RE" },
                { name: "Romania", abbreviation: "RO" },
                { name: "Russia", abbreviation: "RU" },
                { name: "Rwanda", abbreviation: "RW" },
                { name: "Samoa", abbreviation: "WS" },
                { name: "San Marino", abbreviation: "SM" },
                { name: "São Tomé and Príncipe", abbreviation: "ST" },
                { name: "Saudi Arabia", abbreviation: "SA" },
                { name: "Senegal", abbreviation: "SN" },
                { name: "Serbia", abbreviation: "RS" },
                { name: "Seychelles", abbreviation: "SC" },
                { name: "Sierra Leone", abbreviation: "SL" },
                { name: "Singapore", abbreviation: "SG" },
                { name: "Sint Maarten", abbreviation: "SX" },
                { name: "Slovakia", abbreviation: "SK" },
                { name: "Slovenia", abbreviation: "SI" },
                { name: "Solomon Islands", abbreviation: "SB" },
                { name: "Somalia", abbreviation: "SO" },
                { name: "South Africa", abbreviation: "ZA" },
                {
                  name: "South Georgia & South Sandwich Islands",
                  abbreviation: "GS",
                },
                { name: "South Korea", abbreviation: "KR" },
                { name: "South Sudan", abbreviation: "SS" },
                { name: "Spain", abbreviation: "ES" },
                { name: "Sri Lanka", abbreviation: "LK" },
                { name: "St. Barthélemy", abbreviation: "BL" },
                { name: "St. Helena", abbreviation: "SH" },
                { name: "St. Kitts & Nevis", abbreviation: "KN" },
                { name: "St. Lucia", abbreviation: "LC" },
                { name: "St. Martin", abbreviation: "MF" },
                { name: "St. Pierre & Miquelon", abbreviation: "PM" },
                { name: "St. Vincent & Grenadines", abbreviation: "VC" },
                { name: "Sudan", abbreviation: "SD" },
                { name: "Suriname", abbreviation: "SR" },
                { name: "Svalbard & Jan Mayen", abbreviation: "SJ" },
                { name: "Swaziland", abbreviation: "SZ" },
                { name: "Sweden", abbreviation: "SE" },
                { name: "Switzerland", abbreviation: "CH" },
                { name: "Syria", abbreviation: "SY" },
                { name: "Taiwan", abbreviation: "TW" },
                { name: "Tajikistan", abbreviation: "TJ" },
                { name: "Tanzania", abbreviation: "TZ" },
                { name: "Thailand", abbreviation: "TH" },
                { name: "Timor-Leste", abbreviation: "TL" },
                { name: "Togo", abbreviation: "TG" },
                { name: "Tokelau", abbreviation: "TK" },
                { name: "Tonga", abbreviation: "TO" },
                { name: "Trinidad & Tobago", abbreviation: "TT" },
                { name: "Tristan da Cunha", abbreviation: "TA" },
                { name: "Tunisia", abbreviation: "TN" },
                { name: "Turkey", abbreviation: "TR" },
                { name: "Turkmenistan", abbreviation: "TM" },
                { name: "Turks & Caicos Islands", abbreviation: "TC" },
                { name: "Tuvalu", abbreviation: "TV" },
                { name: "U.S. Outlying Islands", abbreviation: "UM" },
                { name: "U.S. Virgin Islands", abbreviation: "VI" },
                { name: "Uganda", abbreviation: "UG" },
                { name: "Ukraine", abbreviation: "UA" },
                { name: "United Arab Emirates", abbreviation: "AE" },
                { name: "United Kingdom", abbreviation: "GB" },
                { name: "United States", abbreviation: "US" },
                { name: "Uruguay", abbreviation: "UY" },
                { name: "Uzbekistan", abbreviation: "UZ" },
                { name: "Vanuatu", abbreviation: "VU" },
                { name: "Vatican City", abbreviation: "VA" },
                { name: "Venezuela", abbreviation: "VE" },
                { name: "Vietnam", abbreviation: "VN" },
                { name: "Wallis & Futuna", abbreviation: "WF" },
                { name: "Western Sahara", abbreviation: "EH" },
                { name: "Yemen", abbreviation: "YE" },
                { name: "Zambia", abbreviation: "ZM" },
                { name: "Zimbabwe", abbreviation: "ZW" },
              ],
              counties: {
                uk: [
                  { name: "Bath and North East Somerset" },
                  { name: "Aberdeenshire" },
                  { name: "Anglesey" },
                  { name: "Angus" },
                  { name: "Bedford" },
                  { name: "Blackburn with Darwen" },
                  { name: "Blackpool" },
                  { name: "Bournemouth" },
                  { name: "Bracknell Forest" },
                  { name: "Brighton & Hove" },
                  { name: "Bristol" },
                  { name: "Buckinghamshire" },
                  { name: "Cambridgeshire" },
                  { name: "Carmarthenshire" },
                  { name: "Central Bedfordshire" },
                  { name: "Ceredigion" },
                  { name: "Cheshire East" },
                  { name: "Cheshire West and Chester" },
                  { name: "Clackmannanshire" },
                  { name: "Conwy" },
                  { name: "Cornwall" },
                  { name: "County Antrim" },
                  { name: "County Armagh" },
                  { name: "County Down" },
                  { name: "County Durham" },
                  { name: "County Fermanagh" },
                  { name: "County Londonderry" },
                  { name: "County Tyrone" },
                  { name: "Cumbria" },
                  { name: "Darlington" },
                  { name: "Denbighshire" },
                  { name: "Derby" },
                  { name: "Derbyshire" },
                  { name: "Devon" },
                  { name: "Dorset" },
                  { name: "Dumfries and Galloway" },
                  { name: "Dundee" },
                  { name: "East Lothian" },
                  { name: "East Riding of Yorkshire" },
                  { name: "East Sussex" },
                  { name: "Edinburgh?" },
                  { name: "Essex" },
                  { name: "Falkirk" },
                  { name: "Fife" },
                  { name: "Flintshire" },
                  { name: "Gloucestershire" },
                  { name: "Greater London" },
                  { name: "Greater Manchester" },
                  { name: "Gwent" },
                  { name: "Gwynedd" },
                  { name: "Halton" },
                  { name: "Hampshire" },
                  { name: "Hartlepool" },
                  { name: "Herefordshire" },
                  { name: "Hertfordshire" },
                  { name: "Highlands" },
                  { name: "Hull" },
                  { name: "Isle of Wight" },
                  { name: "Isles of Scilly" },
                  { name: "Kent" },
                  { name: "Lancashire" },
                  { name: "Leicester" },
                  { name: "Leicestershire" },
                  { name: "Lincolnshire" },
                  { name: "Lothian" },
                  { name: "Luton" },
                  { name: "Medway" },
                  { name: "Merseyside" },
                  { name: "Mid Glamorgan" },
                  { name: "Middlesbrough" },
                  { name: "Milton Keynes" },
                  { name: "Monmouthshire" },
                  { name: "Moray" },
                  { name: "Norfolk" },
                  { name: "North East Lincolnshire" },
                  { name: "North Lincolnshire" },
                  { name: "North Somerset" },
                  { name: "North Yorkshire" },
                  { name: "Northamptonshire" },
                  { name: "Northumberland" },
                  { name: "Nottingham" },
                  { name: "Nottinghamshire" },
                  { name: "Oxfordshire" },
                  { name: "Pembrokeshire" },
                  { name: "Perth and Kinross" },
                  { name: "Peterborough" },
                  { name: "Plymouth" },
                  { name: "Poole" },
                  { name: "Portsmouth" },
                  { name: "Powys" },
                  { name: "Reading" },
                  { name: "Redcar and Cleveland" },
                  { name: "Rutland" },
                  { name: "Scottish Borders" },
                  { name: "Shropshire" },
                  { name: "Slough" },
                  { name: "Somerset" },
                  { name: "South Glamorgan" },
                  { name: "South Gloucestershire" },
                  { name: "South Yorkshire" },
                  { name: "Southampton" },
                  { name: "Southend-on-Sea" },
                  { name: "Staffordshire" },
                  { name: "Stirlingshire" },
                  { name: "Stockton-on-Tees" },
                  { name: "Stoke-on-Trent" },
                  { name: "Strathclyde" },
                  { name: "Suffolk" },
                  { name: "Surrey" },
                  { name: "Swindon" },
                  { name: "Telford and Wrekin" },
                  { name: "Thurrock" },
                  { name: "Torbay" },
                  { name: "Tyne and Wear" },
                  { name: "Warrington" },
                  { name: "Warwickshire" },
                  { name: "West Berkshire" },
                  { name: "West Glamorgan" },
                  { name: "West Lothian" },
                  { name: "West Midlands" },
                  { name: "West Sussex" },
                  { name: "West Yorkshire" },
                  { name: "Western Isles" },
                  { name: "Wiltshire" },
                  { name: "Windsor and Maidenhead" },
                  { name: "Wokingham" },
                  { name: "Worcestershire" },
                  { name: "Wrexham" },
                  { name: "York" },
                ],
              },
              provinces: {
                ca: [
                  { name: "Alberta", abbreviation: "AB" },
                  { name: "British Columbia", abbreviation: "BC" },
                  { name: "Manitoba", abbreviation: "MB" },
                  { name: "New Brunswick", abbreviation: "NB" },
                  { name: "Newfoundland and Labrador", abbreviation: "NL" },
                  { name: "Nova Scotia", abbreviation: "NS" },
                  { name: "Ontario", abbreviation: "ON" },
                  { name: "Prince Edward Island", abbreviation: "PE" },
                  { name: "Quebec", abbreviation: "QC" },
                  { name: "Saskatchewan", abbreviation: "SK" },
                  { name: "Northwest Territories", abbreviation: "NT" },
                  { name: "Nunavut", abbreviation: "NU" },
                  { name: "Yukon", abbreviation: "YT" },
                ],
                it: [
                  { name: "Agrigento", abbreviation: "AG", code: 84 },
                  { name: "Alessandria", abbreviation: "AL", code: 6 },
                  { name: "Ancona", abbreviation: "AN", code: 42 },
                  { name: "Aosta", abbreviation: "AO", code: 7 },
                  { name: "L'Aquila", abbreviation: "AQ", code: 66 },
                  { name: "Arezzo", abbreviation: "AR", code: 51 },
                  { name: "Ascoli-Piceno", abbreviation: "AP", code: 44 },
                  { name: "Asti", abbreviation: "AT", code: 5 },
                  { name: "Avellino", abbreviation: "AV", code: 64 },
                  { name: "Bari", abbreviation: "BA", code: 72 },
                  {
                    name: "Barletta-Andria-Trani",
                    abbreviation: "BT",
                    code: 72,
                  },
                  { name: "Belluno", abbreviation: "BL", code: 25 },
                  { name: "Benevento", abbreviation: "BN", code: 62 },
                  { name: "Bergamo", abbreviation: "BG", code: 16 },
                  { name: "Biella", abbreviation: "BI", code: 96 },
                  { name: "Bologna", abbreviation: "BO", code: 37 },
                  { name: "Bolzano", abbreviation: "BZ", code: 21 },
                  { name: "Brescia", abbreviation: "BS", code: 17 },
                  { name: "Brindisi", abbreviation: "BR", code: 74 },
                  { name: "Cagliari", abbreviation: "CA", code: 92 },
                  { name: "Caltanissetta", abbreviation: "CL", code: 85 },
                  { name: "Campobasso", abbreviation: "CB", code: 70 },
                  { name: "Carbonia Iglesias", abbreviation: "CI", code: 70 },
                  { name: "Caserta", abbreviation: "CE", code: 61 },
                  { name: "Catania", abbreviation: "CT", code: 87 },
                  { name: "Catanzaro", abbreviation: "CZ", code: 79 },
                  { name: "Chieti", abbreviation: "CH", code: 69 },
                  { name: "Como", abbreviation: "CO", code: 13 },
                  { name: "Cosenza", abbreviation: "CS", code: 78 },
                  { name: "Cremona", abbreviation: "CR", code: 19 },
                  { name: "Crotone", abbreviation: "KR", code: 101 },
                  { name: "Cuneo", abbreviation: "CN", code: 4 },
                  { name: "Enna", abbreviation: "EN", code: 86 },
                  { name: "Fermo", abbreviation: "FM", code: 86 },
                  { name: "Ferrara", abbreviation: "FE", code: 38 },
                  { name: "Firenze", abbreviation: "FI", code: 48 },
                  { name: "Foggia", abbreviation: "FG", code: 71 },
                  { name: "Forli-Cesena", abbreviation: "FC", code: 71 },
                  { name: "Frosinone", abbreviation: "FR", code: 60 },
                  { name: "Genova", abbreviation: "GE", code: 10 },
                  { name: "Gorizia", abbreviation: "GO", code: 31 },
                  { name: "Grosseto", abbreviation: "GR", code: 53 },
                  { name: "Imperia", abbreviation: "IM", code: 8 },
                  { name: "Isernia", abbreviation: "IS", code: 94 },
                  { name: "La-Spezia", abbreviation: "SP", code: 66 },
                  { name: "Latina", abbreviation: "LT", code: 59 },
                  { name: "Lecce", abbreviation: "LE", code: 75 },
                  { name: "Lecco", abbreviation: "LC", code: 97 },
                  { name: "Livorno", abbreviation: "LI", code: 49 },
                  { name: "Lodi", abbreviation: "LO", code: 98 },
                  { name: "Lucca", abbreviation: "LU", code: 46 },
                  { name: "Macerata", abbreviation: "MC", code: 43 },
                  { name: "Mantova", abbreviation: "MN", code: 20 },
                  { name: "Massa-Carrara", abbreviation: "MS", code: 45 },
                  { name: "Matera", abbreviation: "MT", code: 77 },
                  { name: "Medio Campidano", abbreviation: "VS", code: 77 },
                  { name: "Messina", abbreviation: "ME", code: 83 },
                  { name: "Milano", abbreviation: "MI", code: 15 },
                  { name: "Modena", abbreviation: "MO", code: 36 },
                  { name: "Monza-Brianza", abbreviation: "MB", code: 36 },
                  { name: "Napoli", abbreviation: "NA", code: 63 },
                  { name: "Novara", abbreviation: "NO", code: 3 },
                  { name: "Nuoro", abbreviation: "NU", code: 91 },
                  { name: "Ogliastra", abbreviation: "OG", code: 91 },
                  { name: "Olbia Tempio", abbreviation: "OT", code: 91 },
                  { name: "Oristano", abbreviation: "OR", code: 95 },
                  { name: "Padova", abbreviation: "PD", code: 28 },
                  { name: "Palermo", abbreviation: "PA", code: 82 },
                  { name: "Parma", abbreviation: "PR", code: 34 },
                  { name: "Pavia", abbreviation: "PV", code: 18 },
                  { name: "Perugia", abbreviation: "PG", code: 54 },
                  { name: "Pesaro-Urbino", abbreviation: "PU", code: 41 },
                  { name: "Pescara", abbreviation: "PE", code: 68 },
                  { name: "Piacenza", abbreviation: "PC", code: 33 },
                  { name: "Pisa", abbreviation: "PI", code: 50 },
                  { name: "Pistoia", abbreviation: "PT", code: 47 },
                  { name: "Pordenone", abbreviation: "PN", code: 93 },
                  { name: "Potenza", abbreviation: "PZ", code: 76 },
                  { name: "Prato", abbreviation: "PO", code: 100 },
                  { name: "Ragusa", abbreviation: "RG", code: 88 },
                  { name: "Ravenna", abbreviation: "RA", code: 39 },
                  { name: "Reggio-Calabria", abbreviation: "RC", code: 35 },
                  { name: "Reggio-Emilia", abbreviation: "RE", code: 35 },
                  { name: "Rieti", abbreviation: "RI", code: 57 },
                  { name: "Rimini", abbreviation: "RN", code: 99 },
                  { name: "Roma", abbreviation: "Roma", code: 58 },
                  { name: "Rovigo", abbreviation: "RO", code: 29 },
                  { name: "Salerno", abbreviation: "SA", code: 65 },
                  { name: "Sassari", abbreviation: "SS", code: 90 },
                  { name: "Savona", abbreviation: "SV", code: 9 },
                  { name: "Siena", abbreviation: "SI", code: 52 },
                  { name: "Siracusa", abbreviation: "SR", code: 89 },
                  { name: "Sondrio", abbreviation: "SO", code: 14 },
                  { name: "Taranto", abbreviation: "TA", code: 73 },
                  { name: "Teramo", abbreviation: "TE", code: 67 },
                  { name: "Terni", abbreviation: "TR", code: 55 },
                  { name: "Torino", abbreviation: "TO", code: 1 },
                  { name: "Trapani", abbreviation: "TP", code: 81 },
                  { name: "Trento", abbreviation: "TN", code: 22 },
                  { name: "Treviso", abbreviation: "TV", code: 26 },
                  { name: "Trieste", abbreviation: "TS", code: 32 },
                  { name: "Udine", abbreviation: "UD", code: 30 },
                  { name: "Varese", abbreviation: "VA", code: 12 },
                  { name: "Venezia", abbreviation: "VE", code: 27 },
                  { name: "Verbania", abbreviation: "VB", code: 27 },
                  { name: "Vercelli", abbreviation: "VC", code: 2 },
                  { name: "Verona", abbreviation: "VR", code: 23 },
                  { name: "Vibo-Valentia", abbreviation: "VV", code: 102 },
                  { name: "Vicenza", abbreviation: "VI", code: 24 },
                  { name: "Viterbo", abbreviation: "VT", code: 56 },
                ],
              },
              nationalities: [
                { name: "Afghan" },
                { name: "Albanian" },
                { name: "Algerian" },
                { name: "American" },
                { name: "Andorran" },
                { name: "Angolan" },
                { name: "Antiguans" },
                { name: "Argentinean" },
                { name: "Armenian" },
                { name: "Australian" },
                { name: "Austrian" },
                { name: "Azerbaijani" },
                { name: "Bahami" },
                { name: "Bahraini" },
                { name: "Bangladeshi" },
                { name: "Barbadian" },
                { name: "Barbudans" },
                { name: "Batswana" },
                { name: "Belarusian" },
                { name: "Belgian" },
                { name: "Belizean" },
                { name: "Beninese" },
                { name: "Bhutanese" },
                { name: "Bolivian" },
                { name: "Bosnian" },
                { name: "Brazilian" },
                { name: "British" },
                { name: "Bruneian" },
                { name: "Bulgarian" },
                { name: "Burkinabe" },
                { name: "Burmese" },
                { name: "Burundian" },
                { name: "Cambodian" },
                { name: "Cameroonian" },
                { name: "Canadian" },
                { name: "Cape Verdean" },
                { name: "Central African" },
                { name: "Chadian" },
                { name: "Chilean" },
                { name: "Chinese" },
                { name: "Colombian" },
                { name: "Comoran" },
                { name: "Congolese" },
                { name: "Costa Rican" },
                { name: "Croatian" },
                { name: "Cuban" },
                { name: "Cypriot" },
                { name: "Czech" },
                { name: "Danish" },
                { name: "Djibouti" },
                { name: "Dominican" },
                { name: "Dutch" },
                { name: "East Timorese" },
                { name: "Ecuadorean" },
                { name: "Egyptian" },
                { name: "Emirian" },
                { name: "Equatorial Guinean" },
                { name: "Eritrean" },
                { name: "Estonian" },
                { name: "Ethiopian" },
                { name: "Fijian" },
                { name: "Filipino" },
                { name: "Finnish" },
                { name: "French" },
                { name: "Gabonese" },
                { name: "Gambian" },
                { name: "Georgian" },
                { name: "German" },
                { name: "Ghanaian" },
                { name: "Greek" },
                { name: "Grenadian" },
                { name: "Guatemalan" },
                { name: "Guinea-Bissauan" },
                { name: "Guinean" },
                { name: "Guyanese" },
                { name: "Haitian" },
                { name: "Herzegovinian" },
                { name: "Honduran" },
                { name: "Hungarian" },
                { name: "I-Kiribati" },
                { name: "Icelander" },
                { name: "Indian" },
                { name: "Indonesian" },
                { name: "Iranian" },
                { name: "Iraqi" },
                { name: "Irish" },
                { name: "Israeli" },
                { name: "Italian" },
                { name: "Ivorian" },
                { name: "Jamaican" },
                { name: "Japanese" },
                { name: "Jordanian" },
                { name: "Kazakhstani" },
                { name: "Kenyan" },
                { name: "Kittian and Nevisian" },
                { name: "Kuwaiti" },
                { name: "Kyrgyz" },
                { name: "Laotian" },
                { name: "Latvian" },
                { name: "Lebanese" },
                { name: "Liberian" },
                { name: "Libyan" },
                { name: "Liechtensteiner" },
                { name: "Lithuanian" },
                { name: "Luxembourger" },
                { name: "Macedonian" },
                { name: "Malagasy" },
                { name: "Malawian" },
                { name: "Malaysian" },
                { name: "Maldivan" },
                { name: "Malian" },
                { name: "Maltese" },
                { name: "Marshallese" },
                { name: "Mauritanian" },
                { name: "Mauritian" },
                { name: "Mexican" },
                { name: "Micronesian" },
                { name: "Moldovan" },
                { name: "Monacan" },
                { name: "Mongolian" },
                { name: "Moroccan" },
                { name: "Mosotho" },
                { name: "Motswana" },
                { name: "Mozambican" },
                { name: "Namibian" },
                { name: "Nauruan" },
                { name: "Nepalese" },
                { name: "New Zealander" },
                { name: "Nicaraguan" },
                { name: "Nigerian" },
                { name: "Nigerien" },
                { name: "North Korean" },
                { name: "Northern Irish" },
                { name: "Norwegian" },
                { name: "Omani" },
                { name: "Pakistani" },
                { name: "Palauan" },
                { name: "Panamanian" },
                { name: "Papua New Guinean" },
                { name: "Paraguayan" },
                { name: "Peruvian" },
                { name: "Polish" },
                { name: "Portuguese" },
                { name: "Qatari" },
                { name: "Romani" },
                { name: "Russian" },
                { name: "Rwandan" },
                { name: "Saint Lucian" },
                { name: "Salvadoran" },
                { name: "Samoan" },
                { name: "San Marinese" },
                { name: "Sao Tomean" },
                { name: "Saudi" },
                { name: "Scottish" },
                { name: "Senegalese" },
                { name: "Serbian" },
                { name: "Seychellois" },
                { name: "Sierra Leonean" },
                { name: "Singaporean" },
                { name: "Slovakian" },
                { name: "Slovenian" },
                { name: "Solomon Islander" },
                { name: "Somali" },
                { name: "South African" },
                { name: "South Korean" },
                { name: "Spanish" },
                { name: "Sri Lankan" },
                { name: "Sudanese" },
                { name: "Surinamer" },
                { name: "Swazi" },
                { name: "Swedish" },
                { name: "Swiss" },
                { name: "Syrian" },
                { name: "Taiwanese" },
                { name: "Tajik" },
                { name: "Tanzanian" },
                { name: "Thai" },
                { name: "Togolese" },
                { name: "Tongan" },
                { name: "Trinidadian or Tobagonian" },
                { name: "Tunisian" },
                { name: "Turkish" },
                { name: "Tuvaluan" },
                { name: "Ugandan" },
                { name: "Ukrainian" },
                { name: "Uruguaya" },
                { name: "Uzbekistani" },
                { name: "Venezuela" },
                { name: "Vietnamese" },
                { name: "Wels" },
                { name: "Yemenit" },
                { name: "Zambia" },
                { name: "Zimbabwe" },
              ],
              locale_languages: [
                "aa",
                "ab",
                "ae",
                "af",
                "ak",
                "am",
                "an",
                "ar",
                "as",
                "av",
                "ay",
                "az",
                "ba",
                "be",
                "bg",
                "bh",
                "bi",
                "bm",
                "bn",
                "bo",
                "br",
                "bs",
                "ca",
                "ce",
                "ch",
                "co",
                "cr",
                "cs",
                "cu",
                "cv",
                "cy",
                "da",
                "de",
                "dv",
                "dz",
                "ee",
                "el",
                "en",
                "eo",
                "es",
                "et",
                "eu",
                "fa",
                "ff",
                "fi",
                "fj",
                "fo",
                "fr",
                "fy",
                "ga",
                "gd",
                "gl",
                "gn",
                "gu",
                "gv",
                "ha",
                "he",
                "hi",
                "ho",
                "hr",
                "ht",
                "hu",
                "hy",
                "hz",
                "ia",
                "id",
                "ie",
                "ig",
                "ii",
                "ik",
                "io",
                "is",
                "it",
                "iu",
                "ja",
                "jv",
                "ka",
                "kg",
                "ki",
                "kj",
                "kk",
                "kl",
                "km",
                "kn",
                "ko",
                "kr",
                "ks",
                "ku",
                "kv",
                "kw",
                "ky",
                "la",
                "lb",
                "lg",
                "li",
                "ln",
                "lo",
                "lt",
                "lu",
                "lv",
                "mg",
                "mh",
                "mi",
                "mk",
                "ml",
                "mn",
                "mr",
                "ms",
                "mt",
                "my",
                "na",
                "nb",
                "nd",
                "ne",
                "ng",
                "nl",
                "nn",
                "no",
                "nr",
                "nv",
                "ny",
                "oc",
                "oj",
                "om",
                "or",
                "os",
                "pa",
                "pi",
                "pl",
                "ps",
                "pt",
                "qu",
                "rm",
                "rn",
                "ro",
                "ru",
                "rw",
                "sa",
                "sc",
                "sd",
                "se",
                "sg",
                "si",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sq",
                "sr",
                "ss",
                "st",
                "su",
                "sv",
                "sw",
                "ta",
                "te",
                "tg",
                "th",
                "ti",
                "tk",
                "tl",
                "tn",
                "to",
                "tr",
                "ts",
                "tt",
                "tw",
                "ty",
                "ug",
                "uk",
                "ur",
                "uz",
                "ve",
                "vi",
                "vo",
                "wa",
                "wo",
                "xh",
                "yi",
                "yo",
                "za",
                "zh",
                "zu",
              ],
              locale_regions: [
                "agq-CM",
                "asa-TZ",
                "ast-ES",
                "bas-CM",
                "bem-ZM",
                "bez-TZ",
                "brx-IN",
                "cgg-UG",
                "chr-US",
                "dav-KE",
                "dje-NE",
                "dsb-DE",
                "dua-CM",
                "dyo-SN",
                "ebu-KE",
                "ewo-CM",
                "fil-PH",
                "fur-IT",
                "gsw-CH",
                "gsw-FR",
                "gsw-LI",
                "guz-KE",
                "haw-US",
                "hsb-DE",
                "jgo-CM",
                "jmc-TZ",
                "kab-DZ",
                "kam-KE",
                "kde-TZ",
                "kea-CV",
                "khq-ML",
                "kkj-CM",
                "kln-KE",
                "kok-IN",
                "ksb-TZ",
                "ksf-CM",
                "ksh-DE",
                "lag-TZ",
                "lkt-US",
                "luo-KE",
                "luy-KE",
                "mas-KE",
                "mas-TZ",
                "mer-KE",
                "mfe-MU",
                "mgh-MZ",
                "mgo-CM",
                "mua-CM",
                "naq-NA",
                "nmg-CM",
                "nnh-CM",
                "nus-SD",
                "nyn-UG",
                "rof-TZ",
                "rwk-TZ",
                "sah-RU",
                "saq-KE",
                "sbp-TZ",
                "seh-MZ",
                "ses-ML",
                "shi-Latn",
                "shi-Latn-MA",
                "shi-Tfng",
                "shi-Tfng-MA",
                "smn-FI",
                "teo-KE",
                "teo-UG",
                "twq-NE",
                "tzm-Latn",
                "tzm-Latn-MA",
                "vai-Latn",
                "vai-Latn-LR",
                "vai-Vaii",
                "vai-Vaii-LR",
                "vun-TZ",
                "wae-CH",
                "xog-UG",
                "yav-CM",
                "zgh-MA",
                "af-NA",
                "af-ZA",
                "ak-GH",
                "am-ET",
                "ar-001",
                "ar-AE",
                "ar-BH",
                "ar-DJ",
                "ar-DZ",
                "ar-EG",
                "ar-EH",
                "ar-ER",
                "ar-IL",
                "ar-IQ",
                "ar-JO",
                "ar-KM",
                "ar-KW",
                "ar-LB",
                "ar-LY",
                "ar-MA",
                "ar-MR",
                "ar-OM",
                "ar-PS",
                "ar-QA",
                "ar-SA",
                "ar-SD",
                "ar-SO",
                "ar-SS",
                "ar-SY",
                "ar-TD",
                "ar-TN",
                "ar-YE",
                "as-IN",
                "az-Cyrl",
                "az-Cyrl-AZ",
                "az-Latn",
                "az-Latn-AZ",
                "be-BY",
                "bg-BG",
                "bm-Latn",
                "bm-Latn-ML",
                "bn-BD",
                "bn-IN",
                "bo-CN",
                "bo-IN",
                "br-FR",
                "bs-Cyrl",
                "bs-Cyrl-BA",
                "bs-Latn",
                "bs-Latn-BA",
                "ca-AD",
                "ca-ES",
                "ca-ES-VALENCIA",
                "ca-FR",
                "ca-IT",
                "cs-CZ",
                "cy-GB",
                "da-DK",
                "da-GL",
                "de-AT",
                "de-BE",
                "de-CH",
                "de-DE",
                "de-LI",
                "de-LU",
                "dz-BT",
                "ee-GH",
                "ee-TG",
                "el-CY",
                "el-GR",
                "en-001",
                "en-150",
                "en-AG",
                "en-AI",
                "en-AS",
                "en-AU",
                "en-BB",
                "en-BE",
                "en-BM",
                "en-BS",
                "en-BW",
                "en-BZ",
                "en-CA",
                "en-CC",
                "en-CK",
                "en-CM",
                "en-CX",
                "en-DG",
                "en-DM",
                "en-ER",
                "en-FJ",
                "en-FK",
                "en-FM",
                "en-GB",
                "en-GD",
                "en-GG",
                "en-GH",
                "en-GI",
                "en-GM",
                "en-GU",
                "en-GY",
                "en-HK",
                "en-IE",
                "en-IM",
                "en-IN",
                "en-IO",
                "en-JE",
                "en-JM",
                "en-KE",
                "en-KI",
                "en-KN",
                "en-KY",
                "en-LC",
                "en-LR",
                "en-LS",
                "en-MG",
                "en-MH",
                "en-MO",
                "en-MP",
                "en-MS",
                "en-MT",
                "en-MU",
                "en-MW",
                "en-MY",
                "en-NA",
                "en-NF",
                "en-NG",
                "en-NR",
                "en-NU",
                "en-NZ",
                "en-PG",
                "en-PH",
                "en-PK",
                "en-PN",
                "en-PR",
                "en-PW",
                "en-RW",
                "en-SB",
                "en-SC",
                "en-SD",
                "en-SG",
                "en-SH",
                "en-SL",
                "en-SS",
                "en-SX",
                "en-SZ",
                "en-TC",
                "en-TK",
                "en-TO",
                "en-TT",
                "en-TV",
                "en-TZ",
                "en-UG",
                "en-UM",
                "en-US",
                "en-US-POSIX",
                "en-VC",
                "en-VG",
                "en-VI",
                "en-VU",
                "en-WS",
                "en-ZA",
                "en-ZM",
                "en-ZW",
                "eo-001",
                "es-419",
                "es-AR",
                "es-BO",
                "es-CL",
                "es-CO",
                "es-CR",
                "es-CU",
                "es-DO",
                "es-EA",
                "es-EC",
                "es-ES",
                "es-GQ",
                "es-GT",
                "es-HN",
                "es-IC",
                "es-MX",
                "es-NI",
                "es-PA",
                "es-PE",
                "es-PH",
                "es-PR",
                "es-PY",
                "es-SV",
                "es-US",
                "es-UY",
                "es-VE",
                "et-EE",
                "eu-ES",
                "fa-AF",
                "fa-IR",
                "ff-CM",
                "ff-GN",
                "ff-MR",
                "ff-SN",
                "fi-FI",
                "fo-FO",
                "fr-BE",
                "fr-BF",
                "fr-BI",
                "fr-BJ",
                "fr-BL",
                "fr-CA",
                "fr-CD",
                "fr-CF",
                "fr-CG",
                "fr-CH",
                "fr-CI",
                "fr-CM",
                "fr-DJ",
                "fr-DZ",
                "fr-FR",
                "fr-GA",
                "fr-GF",
                "fr-GN",
                "fr-GP",
                "fr-GQ",
                "fr-HT",
                "fr-KM",
                "fr-LU",
                "fr-MA",
                "fr-MC",
                "fr-MF",
                "fr-MG",
                "fr-ML",
                "fr-MQ",
                "fr-MR",
                "fr-MU",
                "fr-NC",
                "fr-NE",
                "fr-PF",
                "fr-PM",
                "fr-RE",
                "fr-RW",
                "fr-SC",
                "fr-SN",
                "fr-SY",
                "fr-TD",
                "fr-TG",
                "fr-TN",
                "fr-VU",
                "fr-WF",
                "fr-YT",
                "fy-NL",
                "ga-IE",
                "gd-GB",
                "gl-ES",
                "gu-IN",
                "gv-IM",
                "ha-Latn",
                "ha-Latn-GH",
                "ha-Latn-NE",
                "ha-Latn-NG",
                "he-IL",
                "hi-IN",
                "hr-BA",
                "hr-HR",
                "hu-HU",
                "hy-AM",
                "id-ID",
                "ig-NG",
                "ii-CN",
                "is-IS",
                "it-CH",
                "it-IT",
                "it-SM",
                "ja-JP",
                "ka-GE",
                "ki-KE",
                "kk-Cyrl",
                "kk-Cyrl-KZ",
                "kl-GL",
                "km-KH",
                "kn-IN",
                "ko-KP",
                "ko-KR",
                "ks-Arab",
                "ks-Arab-IN",
                "kw-GB",
                "ky-Cyrl",
                "ky-Cyrl-KG",
                "lb-LU",
                "lg-UG",
                "ln-AO",
                "ln-CD",
                "ln-CF",
                "ln-CG",
                "lo-LA",
                "lt-LT",
                "lu-CD",
                "lv-LV",
                "mg-MG",
                "mk-MK",
                "ml-IN",
                "mn-Cyrl",
                "mn-Cyrl-MN",
                "mr-IN",
                "ms-Latn",
                "ms-Latn-BN",
                "ms-Latn-MY",
                "ms-Latn-SG",
                "mt-MT",
                "my-MM",
                "nb-NO",
                "nb-SJ",
                "nd-ZW",
                "ne-IN",
                "ne-NP",
                "nl-AW",
                "nl-BE",
                "nl-BQ",
                "nl-CW",
                "nl-NL",
                "nl-SR",
                "nl-SX",
                "nn-NO",
                "om-ET",
                "om-KE",
                "or-IN",
                "os-GE",
                "os-RU",
                "pa-Arab",
                "pa-Arab-PK",
                "pa-Guru",
                "pa-Guru-IN",
                "pl-PL",
                "ps-AF",
                "pt-AO",
                "pt-BR",
                "pt-CV",
                "pt-GW",
                "pt-MO",
                "pt-MZ",
                "pt-PT",
                "pt-ST",
                "pt-TL",
                "qu-BO",
                "qu-EC",
                "qu-PE",
                "rm-CH",
                "rn-BI",
                "ro-MD",
                "ro-RO",
                "ru-BY",
                "ru-KG",
                "ru-KZ",
                "ru-MD",
                "ru-RU",
                "ru-UA",
                "rw-RW",
                "se-FI",
                "se-NO",
                "se-SE",
                "sg-CF",
                "si-LK",
                "sk-SK",
                "sl-SI",
                "sn-ZW",
                "so-DJ",
                "so-ET",
                "so-KE",
                "so-SO",
                "sq-AL",
                "sq-MK",
                "sq-XK",
                "sr-Cyrl",
                "sr-Cyrl-BA",
                "sr-Cyrl-ME",
                "sr-Cyrl-RS",
                "sr-Cyrl-XK",
                "sr-Latn",
                "sr-Latn-BA",
                "sr-Latn-ME",
                "sr-Latn-RS",
                "sr-Latn-XK",
                "sv-AX",
                "sv-FI",
                "sv-SE",
                "sw-CD",
                "sw-KE",
                "sw-TZ",
                "sw-UG",
                "ta-IN",
                "ta-LK",
                "ta-MY",
                "ta-SG",
                "te-IN",
                "th-TH",
                "ti-ER",
                "ti-ET",
                "to-TO",
                "tr-CY",
                "tr-TR",
                "ug-Arab",
                "ug-Arab-CN",
                "uk-UA",
                "ur-IN",
                "ur-PK",
                "uz-Arab",
                "uz-Arab-AF",
                "uz-Cyrl",
                "uz-Cyrl-UZ",
                "uz-Latn",
                "uz-Latn-UZ",
                "vi-VN",
                "yi-001",
                "yo-BJ",
                "yo-NG",
                "zh-Hans",
                "zh-Hans-CN",
                "zh-Hans-HK",
                "zh-Hans-MO",
                "zh-Hans-SG",
                "zh-Hant",
                "zh-Hant-HK",
                "zh-Hant-MO",
                "zh-Hant-TW",
                "zu-ZA",
              ],
              us_states_and_dc: [
                { name: "Alabama", abbreviation: "AL" },
                { name: "Alaska", abbreviation: "AK" },
                { name: "Arizona", abbreviation: "AZ" },
                { name: "Arkansas", abbreviation: "AR" },
                { name: "California", abbreviation: "CA" },
                { name: "Colorado", abbreviation: "CO" },
                { name: "Connecticut", abbreviation: "CT" },
                { name: "Delaware", abbreviation: "DE" },
                { name: "District of Columbia", abbreviation: "DC" },
                { name: "Florida", abbreviation: "FL" },
                { name: "Georgia", abbreviation: "GA" },
                { name: "Hawaii", abbreviation: "HI" },
                { name: "Idaho", abbreviation: "ID" },
                { name: "Illinois", abbreviation: "IL" },
                { name: "Indiana", abbreviation: "IN" },
                { name: "Iowa", abbreviation: "IA" },
                { name: "Kansas", abbreviation: "KS" },
                { name: "Kentucky", abbreviation: "KY" },
                { name: "Louisiana", abbreviation: "LA" },
                { name: "Maine", abbreviation: "ME" },
                { name: "Maryland", abbreviation: "MD" },
                { name: "Massachusetts", abbreviation: "MA" },
                { name: "Michigan", abbreviation: "MI" },
                { name: "Minnesota", abbreviation: "MN" },
                { name: "Mississippi", abbreviation: "MS" },
                { name: "Missouri", abbreviation: "MO" },
                { name: "Montana", abbreviation: "MT" },
                { name: "Nebraska", abbreviation: "NE" },
                { name: "Nevada", abbreviation: "NV" },
                { name: "New Hampshire", abbreviation: "NH" },
                { name: "New Jersey", abbreviation: "NJ" },
                { name: "New Mexico", abbreviation: "NM" },
                { name: "New York", abbreviation: "NY" },
                { name: "North Carolina", abbreviation: "NC" },
                { name: "North Dakota", abbreviation: "ND" },
                { name: "Ohio", abbreviation: "OH" },
                { name: "Oklahoma", abbreviation: "OK" },
                { name: "Oregon", abbreviation: "OR" },
                { name: "Pennsylvania", abbreviation: "PA" },
                { name: "Rhode Island", abbreviation: "RI" },
                { name: "South Carolina", abbreviation: "SC" },
                { name: "South Dakota", abbreviation: "SD" },
                { name: "Tennessee", abbreviation: "TN" },
                { name: "Texas", abbreviation: "TX" },
                { name: "Utah", abbreviation: "UT" },
                { name: "Vermont", abbreviation: "VT" },
                { name: "Virginia", abbreviation: "VA" },
                { name: "Washington", abbreviation: "WA" },
                { name: "West Virginia", abbreviation: "WV" },
                { name: "Wisconsin", abbreviation: "WI" },
                { name: "Wyoming", abbreviation: "WY" },
              ],
              territories: [
                { name: "American Samoa", abbreviation: "AS" },
                { name: "Federated States of Micronesia", abbreviation: "FM" },
                { name: "Guam", abbreviation: "GU" },
                { name: "Marshall Islands", abbreviation: "MH" },
                { name: "Northern Mariana Islands", abbreviation: "MP" },
                { name: "Puerto Rico", abbreviation: "PR" },
                { name: "Virgin Islands, U.S.", abbreviation: "VI" },
              ],
              armed_forces: [
                { name: "Armed Forces Europe", abbreviation: "AE" },
                { name: "Armed Forces Pacific", abbreviation: "AP" },
                { name: "Armed Forces the Americas", abbreviation: "AA" },
              ],
              country_regions: {
                it: [
                  { name: "Valle d'Aosta", abbreviation: "VDA" },
                  { name: "Piemonte", abbreviation: "PIE" },
                  { name: "Lombardia", abbreviation: "LOM" },
                  { name: "Veneto", abbreviation: "VEN" },
                  { name: "Trentino Alto Adige", abbreviation: "TAA" },
                  { name: "Friuli Venezia Giulia", abbreviation: "FVG" },
                  { name: "Liguria", abbreviation: "LIG" },
                  { name: "Emilia Romagna", abbreviation: "EMR" },
                  { name: "Toscana", abbreviation: "TOS" },
                  { name: "Umbria", abbreviation: "UMB" },
                  { name: "Marche", abbreviation: "MAR" },
                  { name: "Abruzzo", abbreviation: "ABR" },
                  { name: "Lazio", abbreviation: "LAZ" },
                  { name: "Campania", abbreviation: "CAM" },
                  { name: "Puglia", abbreviation: "PUG" },
                  { name: "Basilicata", abbreviation: "BAS" },
                  { name: "Molise", abbreviation: "MOL" },
                  { name: "Calabria", abbreviation: "CAL" },
                  { name: "Sicilia", abbreviation: "SIC" },
                  { name: "Sardegna", abbreviation: "SAR" },
                ],
                mx: [
                  { name: "Aguascalientes", abbreviation: "AGU" },
                  { name: "Baja California", abbreviation: "BCN" },
                  { name: "Baja California Sur", abbreviation: "BCS" },
                  { name: "Campeche", abbreviation: "CAM" },
                  { name: "Chiapas", abbreviation: "CHP" },
                  { name: "Chihuahua", abbreviation: "CHH" },
                  { name: "Ciudad de México", abbreviation: "DIF" },
                  { name: "Coahuila", abbreviation: "COA" },
                  { name: "Colima", abbreviation: "COL" },
                  { name: "Durango", abbreviation: "DUR" },
                  { name: "Guanajuato", abbreviation: "GUA" },
                  { name: "Guerrero", abbreviation: "GRO" },
                  { name: "Hidalgo", abbreviation: "HID" },
                  { name: "Jalisco", abbreviation: "JAL" },
                  { name: "México", abbreviation: "MEX" },
                  { name: "Michoacán", abbreviation: "MIC" },
                  { name: "Morelos", abbreviation: "MOR" },
                  { name: "Nayarit", abbreviation: "NAY" },
                  { name: "Nuevo León", abbreviation: "NLE" },
                  { name: "Oaxaca", abbreviation: "OAX" },
                  { name: "Puebla", abbreviation: "PUE" },
                  { name: "Querétaro", abbreviation: "QUE" },
                  { name: "Quintana Roo", abbreviation: "ROO" },
                  { name: "San Luis Potosí", abbreviation: "SLP" },
                  { name: "Sinaloa", abbreviation: "SIN" },
                  { name: "Sonora", abbreviation: "SON" },
                  { name: "Tabasco", abbreviation: "TAB" },
                  { name: "Tamaulipas", abbreviation: "TAM" },
                  { name: "Tlaxcala", abbreviation: "TLA" },
                  { name: "Veracruz", abbreviation: "VER" },
                  { name: "Yucatán", abbreviation: "YUC" },
                  { name: "Zacatecas", abbreviation: "ZAC" },
                ],
              },
              street_suffixes: {
                us: [
                  { name: "Avenue", abbreviation: "Ave" },
                  { name: "Boulevard", abbreviation: "Blvd" },
                  { name: "Center", abbreviation: "Ctr" },
                  { name: "Circle", abbreviation: "Cir" },
                  { name: "Court", abbreviation: "Ct" },
                  { name: "Drive", abbreviation: "Dr" },
                  { name: "Extension", abbreviation: "Ext" },
                  { name: "Glen", abbreviation: "Gln" },
                  { name: "Grove", abbreviation: "Grv" },
                  { name: "Heights", abbreviation: "Hts" },
                  { name: "Highway", abbreviation: "Hwy" },
                  { name: "Junction", abbreviation: "Jct" },
                  { name: "Key", abbreviation: "Key" },
                  { name: "Lane", abbreviation: "Ln" },
                  { name: "Loop", abbreviation: "Loop" },
                  { name: "Manor", abbreviation: "Mnr" },
                  { name: "Mill", abbreviation: "Mill" },
                  { name: "Park", abbreviation: "Park" },
                  { name: "Parkway", abbreviation: "Pkwy" },
                  { name: "Pass", abbreviation: "Pass" },
                  { name: "Path", abbreviation: "Path" },
                  { name: "Pike", abbreviation: "Pike" },
                  { name: "Place", abbreviation: "Pl" },
                  { name: "Plaza", abbreviation: "Plz" },
                  { name: "Point", abbreviation: "Pt" },
                  { name: "Ridge", abbreviation: "Rdg" },
                  { name: "River", abbreviation: "Riv" },
                  { name: "Road", abbreviation: "Rd" },
                  { name: "Square", abbreviation: "Sq" },
                  { name: "Street", abbreviation: "St" },
                  { name: "Terrace", abbreviation: "Ter" },
                  { name: "Trail", abbreviation: "Trl" },
                  { name: "Turnpike", abbreviation: "Tpke" },
                  { name: "View", abbreviation: "Vw" },
                  { name: "Way", abbreviation: "Way" },
                ],
                it: [
                  { name: "Accesso", abbreviation: "Acc." },
                  { name: "Alzaia", abbreviation: "Alz." },
                  { name: "Arco", abbreviation: "Arco" },
                  { name: "Archivolto", abbreviation: "Acv." },
                  { name: "Arena", abbreviation: "Arena" },
                  { name: "Argine", abbreviation: "Argine" },
                  { name: "Bacino", abbreviation: "Bacino" },
                  { name: "Banchi", abbreviation: "Banchi" },
                  { name: "Banchina", abbreviation: "Ban." },
                  { name: "Bastioni", abbreviation: "Bas." },
                  { name: "Belvedere", abbreviation: "Belv." },
                  { name: "Borgata", abbreviation: "B.ta" },
                  { name: "Borgo", abbreviation: "B.go" },
                  { name: "Calata", abbreviation: "Cal." },
                  { name: "Calle", abbreviation: "Calle" },
                  { name: "Campiello", abbreviation: "Cam." },
                  { name: "Campo", abbreviation: "Cam." },
                  { name: "Canale", abbreviation: "Can." },
                  { name: "Carraia", abbreviation: "Carr." },
                  { name: "Cascina", abbreviation: "Cascina" },
                  { name: "Case sparse", abbreviation: "c.s." },
                  { name: "Cavalcavia", abbreviation: "Cv." },
                  { name: "Circonvallazione", abbreviation: "Cv." },
                  { name: "Complanare", abbreviation: "C.re" },
                  { name: "Contrada", abbreviation: "C.da" },
                  { name: "Corso", abbreviation: "C.so" },
                  { name: "Corte", abbreviation: "C.te" },
                  { name: "Cortile", abbreviation: "C.le" },
                  { name: "Diramazione", abbreviation: "Dir." },
                  { name: "Fondaco", abbreviation: "F.co" },
                  { name: "Fondamenta", abbreviation: "F.ta" },
                  { name: "Fondo", abbreviation: "F.do" },
                  { name: "Frazione", abbreviation: "Fr." },
                  { name: "Isola", abbreviation: "Is." },
                  { name: "Largo", abbreviation: "L.go" },
                  { name: "Litoranea", abbreviation: "Lit." },
                  { name: "Lungolago", abbreviation: "L.go lago" },
                  { name: "Lungo Po", abbreviation: "l.go Po" },
                  { name: "Molo", abbreviation: "Molo" },
                  { name: "Mura", abbreviation: "Mura" },
                  { name: "Passaggio privato", abbreviation: "pass. priv." },
                  { name: "Passeggiata", abbreviation: "Pass." },
                  { name: "Piazza", abbreviation: "P.zza" },
                  { name: "Piazzale", abbreviation: "P.le" },
                  { name: "Ponte", abbreviation: "P.te" },
                  { name: "Portico", abbreviation: "P.co" },
                  { name: "Rampa", abbreviation: "Rampa" },
                  { name: "Regione", abbreviation: "Reg." },
                  { name: "Rione", abbreviation: "R.ne" },
                  { name: "Rio", abbreviation: "Rio" },
                  { name: "Ripa", abbreviation: "Ripa" },
                  { name: "Riva", abbreviation: "Riva" },
                  { name: "Rondò", abbreviation: "Rondò" },
                  { name: "Rotonda", abbreviation: "Rot." },
                  { name: "Sagrato", abbreviation: "Sagr." },
                  { name: "Salita", abbreviation: "Sal." },
                  { name: "Scalinata", abbreviation: "Scal." },
                  { name: "Scalone", abbreviation: "Scal." },
                  { name: "Slargo", abbreviation: "Sl." },
                  { name: "Sottoportico", abbreviation: "Sott." },
                  { name: "Strada", abbreviation: "Str." },
                  { name: "Stradale", abbreviation: "Str.le" },
                  { name: "Strettoia", abbreviation: "Strett." },
                  { name: "Traversa", abbreviation: "Trav." },
                  { name: "Via", abbreviation: "V." },
                  { name: "Viale", abbreviation: "V.le" },
                  { name: "Vicinale", abbreviation: "Vic.le" },
                  { name: "Vicolo", abbreviation: "Vic." },
                ],
                uk: [
                  { name: "Avenue", abbreviation: "Ave" },
                  { name: "Close", abbreviation: "Cl" },
                  { name: "Court", abbreviation: "Ct" },
                  { name: "Crescent", abbreviation: "Cr" },
                  { name: "Drive", abbreviation: "Dr" },
                  { name: "Garden", abbreviation: "Gdn" },
                  { name: "Gardens", abbreviation: "Gdns" },
                  { name: "Green", abbreviation: "Gn" },
                  { name: "Grove", abbreviation: "Gr" },
                  { name: "Lane", abbreviation: "Ln" },
                  { name: "Mount", abbreviation: "Mt" },
                  { name: "Place", abbreviation: "Pl" },
                  { name: "Park", abbreviation: "Pk" },
                  { name: "Ridge", abbreviation: "Rdg" },
                  { name: "Road", abbreviation: "Rd" },
                  { name: "Square", abbreviation: "Sq" },
                  { name: "Street", abbreviation: "St" },
                  { name: "Terrace", abbreviation: "Ter" },
                  { name: "Valley", abbreviation: "Val" },
                ],
              },
              months: [
                { name: "January", short_name: "Jan", numeric: "01", days: 31 },
                {
                  name: "February",
                  short_name: "Feb",
                  numeric: "02",
                  days: 28,
                },
                { name: "March", short_name: "Mar", numeric: "03", days: 31 },
                { name: "April", short_name: "Apr", numeric: "04", days: 30 },
                { name: "May", short_name: "May", numeric: "05", days: 31 },
                { name: "June", short_name: "Jun", numeric: "06", days: 30 },
                { name: "July", short_name: "Jul", numeric: "07", days: 31 },
                { name: "August", short_name: "Aug", numeric: "08", days: 31 },
                {
                  name: "September",
                  short_name: "Sep",
                  numeric: "09",
                  days: 30,
                },
                { name: "October", short_name: "Oct", numeric: "10", days: 31 },
                {
                  name: "November",
                  short_name: "Nov",
                  numeric: "11",
                  days: 30,
                },
                {
                  name: "December",
                  short_name: "Dec",
                  numeric: "12",
                  days: 31,
                },
              ],
              cc_types: [
                {
                  name: "American Express",
                  short_name: "amex",
                  prefix: "34",
                  length: 15,
                },
                {
                  name: "Bankcard",
                  short_name: "bankcard",
                  prefix: "5610",
                  length: 16,
                },
                {
                  name: "China UnionPay",
                  short_name: "chinaunion",
                  prefix: "62",
                  length: 16,
                },
                {
                  name: "Diners Club Carte Blanche",
                  short_name: "dccarte",
                  prefix: "300",
                  length: 14,
                },
                {
                  name: "Diners Club enRoute",
                  short_name: "dcenroute",
                  prefix: "2014",
                  length: 15,
                },
                {
                  name: "Diners Club International",
                  short_name: "dcintl",
                  prefix: "36",
                  length: 14,
                },
                {
                  name: "Diners Club United States & Canada",
                  short_name: "dcusc",
                  prefix: "54",
                  length: 16,
                },
                {
                  name: "Discover Card",
                  short_name: "discover",
                  prefix: "6011",
                  length: 16,
                },
                {
                  name: "InstaPayment",
                  short_name: "instapay",
                  prefix: "637",
                  length: 16,
                },
                { name: "JCB", short_name: "jcb", prefix: "3528", length: 16 },
                {
                  name: "Laser",
                  short_name: "laser",
                  prefix: "6304",
                  length: 16,
                },
                {
                  name: "Maestro",
                  short_name: "maestro",
                  prefix: "5018",
                  length: 16,
                },
                {
                  name: "Mastercard",
                  short_name: "mc",
                  prefix: "51",
                  length: 16,
                },
                {
                  name: "Solo",
                  short_name: "solo",
                  prefix: "6334",
                  length: 16,
                },
                {
                  name: "Switch",
                  short_name: "switch",
                  prefix: "4903",
                  length: 16,
                },
                { name: "Visa", short_name: "visa", prefix: "4", length: 16 },
                {
                  name: "Visa Electron",
                  short_name: "electron",
                  prefix: "4026",
                  length: 16,
                },
              ],
              currency_types: [
                { code: "AED", name: "United Arab Emirates Dirham" },
                { code: "AFN", name: "Afghanistan Afghani" },
                { code: "ALL", name: "Albania Lek" },
                { code: "AMD", name: "Armenia Dram" },
                { code: "ANG", name: "Netherlands Antilles Guilder" },
                { code: "AOA", name: "Angola Kwanza" },
                { code: "ARS", name: "Argentina Peso" },
                { code: "AUD", name: "Australia Dollar" },
                { code: "AWG", name: "Aruba Guilder" },
                { code: "AZN", name: "Azerbaijan New Manat" },
                {
                  code: "BAM",
                  name: "Bosnia and Herzegovina Convertible Marka",
                },
                { code: "BBD", name: "Barbados Dollar" },
                { code: "BDT", name: "Bangladesh Taka" },
                { code: "BGN", name: "Bulgaria Lev" },
                { code: "BHD", name: "Bahrain Dinar" },
                { code: "BIF", name: "Burundi Franc" },
                { code: "BMD", name: "Bermuda Dollar" },
                { code: "BND", name: "Brunei Darussalam Dollar" },
                { code: "BOB", name: "Bolivia Boliviano" },
                { code: "BRL", name: "Brazil Real" },
                { code: "BSD", name: "Bahamas Dollar" },
                { code: "BTN", name: "Bhutan Ngultrum" },
                { code: "BWP", name: "Botswana Pula" },
                { code: "BYR", name: "Belarus Ruble" },
                { code: "BZD", name: "Belize Dollar" },
                { code: "CAD", name: "Canada Dollar" },
                { code: "CDF", name: "Congo/Kinshasa Franc" },
                { code: "CHF", name: "Switzerland Franc" },
                { code: "CLP", name: "Chile Peso" },
                { code: "CNY", name: "China Yuan Renminbi" },
                { code: "COP", name: "Colombia Peso" },
                { code: "CRC", name: "Costa Rica Colon" },
                { code: "CUC", name: "Cuba Convertible Peso" },
                { code: "CUP", name: "Cuba Peso" },
                { code: "CVE", name: "Cape Verde Escudo" },
                { code: "CZK", name: "Czech Republic Koruna" },
                { code: "DJF", name: "Djibouti Franc" },
                { code: "DKK", name: "Denmark Krone" },
                { code: "DOP", name: "Dominican Republic Peso" },
                { code: "DZD", name: "Algeria Dinar" },
                { code: "EGP", name: "Egypt Pound" },
                { code: "ERN", name: "Eritrea Nakfa" },
                { code: "ETB", name: "Ethiopia Birr" },
                { code: "EUR", name: "Euro Member Countries" },
                { code: "FJD", name: "Fiji Dollar" },
                { code: "FKP", name: "Falkland Islands (Malvinas) Pound" },
                { code: "GBP", name: "United Kingdom Pound" },
                { code: "GEL", name: "Georgia Lari" },
                { code: "GGP", name: "Guernsey Pound" },
                { code: "GHS", name: "Ghana Cedi" },
                { code: "GIP", name: "Gibraltar Pound" },
                { code: "GMD", name: "Gambia Dalasi" },
                { code: "GNF", name: "Guinea Franc" },
                { code: "GTQ", name: "Guatemala Quetzal" },
                { code: "GYD", name: "Guyana Dollar" },
                { code: "HKD", name: "Hong Kong Dollar" },
                { code: "HNL", name: "Honduras Lempira" },
                { code: "HRK", name: "Croatia Kuna" },
                { code: "HTG", name: "Haiti Gourde" },
                { code: "HUF", name: "Hungary Forint" },
                { code: "IDR", name: "Indonesia Rupiah" },
                { code: "ILS", name: "Israel Shekel" },
                { code: "IMP", name: "Isle of Man Pound" },
                { code: "INR", name: "India Rupee" },
                { code: "IQD", name: "Iraq Dinar" },
                { code: "IRR", name: "Iran Rial" },
                { code: "ISK", name: "Iceland Krona" },
                { code: "JEP", name: "Jersey Pound" },
                { code: "JMD", name: "Jamaica Dollar" },
                { code: "JOD", name: "Jordan Dinar" },
                { code: "JPY", name: "Japan Yen" },
                { code: "KES", name: "Kenya Shilling" },
                { code: "KGS", name: "Kyrgyzstan Som" },
                { code: "KHR", name: "Cambodia Riel" },
                { code: "KMF", name: "Comoros Franc" },
                { code: "KPW", name: "Korea (North) Won" },
                { code: "KRW", name: "Korea (South) Won" },
                { code: "KWD", name: "Kuwait Dinar" },
                { code: "KYD", name: "Cayman Islands Dollar" },
                { code: "KZT", name: "Kazakhstan Tenge" },
                { code: "LAK", name: "Laos Kip" },
                { code: "LBP", name: "Lebanon Pound" },
                { code: "LKR", name: "Sri Lanka Rupee" },
                { code: "LRD", name: "Liberia Dollar" },
                { code: "LSL", name: "Lesotho Loti" },
                { code: "LTL", name: "Lithuania Litas" },
                { code: "LYD", name: "Libya Dinar" },
                { code: "MAD", name: "Morocco Dirham" },
                { code: "MDL", name: "Moldova Leu" },
                { code: "MGA", name: "Madagascar Ariary" },
                { code: "MKD", name: "Macedonia Denar" },
                { code: "MMK", name: "Myanmar (Burma) Kyat" },
                { code: "MNT", name: "Mongolia Tughrik" },
                { code: "MOP", name: "Macau Pataca" },
                { code: "MRO", name: "Mauritania Ouguiya" },
                { code: "MUR", name: "Mauritius Rupee" },
                { code: "MVR", name: "Maldives (Maldive Islands) Rufiyaa" },
                { code: "MWK", name: "Malawi Kwacha" },
                { code: "MXN", name: "Mexico Peso" },
                { code: "MYR", name: "Malaysia Ringgit" },
                { code: "MZN", name: "Mozambique Metical" },
                { code: "NAD", name: "Namibia Dollar" },
                { code: "NGN", name: "Nigeria Naira" },
                { code: "NIO", name: "Nicaragua Cordoba" },
                { code: "NOK", name: "Norway Krone" },
                { code: "NPR", name: "Nepal Rupee" },
                { code: "NZD", name: "New Zealand Dollar" },
                { code: "OMR", name: "Oman Rial" },
                { code: "PAB", name: "Panama Balboa" },
                { code: "PEN", name: "Peru Nuevo Sol" },
                { code: "PGK", name: "Papua New Guinea Kina" },
                { code: "PHP", name: "Philippines Peso" },
                { code: "PKR", name: "Pakistan Rupee" },
                { code: "PLN", name: "Poland Zloty" },
                { code: "PYG", name: "Paraguay Guarani" },
                { code: "QAR", name: "Qatar Riyal" },
                { code: "RON", name: "Romania New Leu" },
                { code: "RSD", name: "Serbia Dinar" },
                { code: "RUB", name: "Russia Ruble" },
                { code: "RWF", name: "Rwanda Franc" },
                { code: "SAR", name: "Saudi Arabia Riyal" },
                { code: "SBD", name: "Solomon Islands Dollar" },
                { code: "SCR", name: "Seychelles Rupee" },
                { code: "SDG", name: "Sudan Pound" },
                { code: "SEK", name: "Sweden Krona" },
                { code: "SGD", name: "Singapore Dollar" },
                { code: "SHP", name: "Saint Helena Pound" },
                { code: "SLL", name: "Sierra Leone Leone" },
                { code: "SOS", name: "Somalia Shilling" },
                { code: "SPL", name: "Seborga Luigino" },
                { code: "SRD", name: "Suriname Dollar" },
                { code: "STD", name: "São Tomé and Príncipe Dobra" },
                { code: "SVC", name: "El Salvador Colon" },
                { code: "SYP", name: "Syria Pound" },
                { code: "SZL", name: "Swaziland Lilangeni" },
                { code: "THB", name: "Thailand Baht" },
                { code: "TJS", name: "Tajikistan Somoni" },
                { code: "TMT", name: "Turkmenistan Manat" },
                { code: "TND", name: "Tunisia Dinar" },
                { code: "TOP", name: "Tonga Pa'anga" },
                { code: "TRY", name: "Turkey Lira" },
                { code: "TTD", name: "Trinidad and Tobago Dollar" },
                { code: "TVD", name: "Tuvalu Dollar" },
                { code: "TWD", name: "Taiwan New Dollar" },
                { code: "TZS", name: "Tanzania Shilling" },
                { code: "UAH", name: "Ukraine Hryvnia" },
                { code: "UGX", name: "Uganda Shilling" },
                { code: "USD", name: "United States Dollar" },
                { code: "UYU", name: "Uruguay Peso" },
                { code: "UZS", name: "Uzbekistan Som" },
                { code: "VEF", name: "Venezuela Bolivar" },
                { code: "VND", name: "Viet Nam Dong" },
                { code: "VUV", name: "Vanuatu Vatu" },
                { code: "WST", name: "Samoa Tala" },
                {
                  code: "XAF",
                  name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC",
                },
                { code: "XCD", name: "East Caribbean Dollar" },
                {
                  code: "XDR",
                  name: "International Monetary Fund (IMF) Special Drawing Rights",
                },
                {
                  code: "XOF",
                  name: "Communauté Financière Africaine (BCEAO) Franc",
                },
                {
                  code: "XPF",
                  name: "Comptoirs Français du Pacifique (CFP) Franc",
                },
                { code: "YER", name: "Yemen Rial" },
                { code: "ZAR", name: "South Africa Rand" },
                { code: "ZMW", name: "Zambia Kwacha" },
                { code: "ZWD", name: "Zimbabwe Dollar" },
              ],
              colorNames: [
                "AliceBlue",
                "Black",
                "Navy",
                "DarkBlue",
                "MediumBlue",
                "Blue",
                "DarkGreen",
                "Green",
                "Teal",
                "DarkCyan",
                "DeepSkyBlue",
                "DarkTurquoise",
                "MediumSpringGreen",
                "Lime",
                "SpringGreen",
                "Aqua",
                "Cyan",
                "MidnightBlue",
                "DodgerBlue",
                "LightSeaGreen",
                "ForestGreen",
                "SeaGreen",
                "DarkSlateGray",
                "LimeGreen",
                "MediumSeaGreen",
                "Turquoise",
                "RoyalBlue",
                "SteelBlue",
                "DarkSlateBlue",
                "MediumTurquoise",
                "Indigo",
                "DarkOliveGreen",
                "CadetBlue",
                "CornflowerBlue",
                "RebeccaPurple",
                "MediumAquaMarine",
                "DimGray",
                "SlateBlue",
                "OliveDrab",
                "SlateGray",
                "LightSlateGray",
                "MediumSlateBlue",
                "LawnGreen",
                "Chartreuse",
                "Aquamarine",
                "Maroon",
                "Purple",
                "Olive",
                "Gray",
                "SkyBlue",
                "LightSkyBlue",
                "BlueViolet",
                "DarkRed",
                "DarkMagenta",
                "SaddleBrown",
                "Ivory",
                "White",
                "DarkSeaGreen",
                "LightGreen",
                "MediumPurple",
                "DarkViolet",
                "PaleGreen",
                "DarkOrchid",
                "YellowGreen",
                "Sienna",
                "Brown",
                "DarkGray",
                "LightBlue",
                "GreenYellow",
                "PaleTurquoise",
                "LightSteelBlue",
                "PowderBlue",
                "FireBrick",
                "DarkGoldenRod",
                "MediumOrchid",
                "RosyBrown",
                "DarkKhaki",
                "Silver",
                "MediumVioletRed",
                "IndianRed",
                "Peru",
                "Chocolate",
                "Tan",
                "LightGray",
                "Thistle",
                "Orchid",
                "GoldenRod",
                "PaleVioletRed",
                "Crimson",
                "Gainsboro",
                "Plum",
                "BurlyWood",
                "LightCyan",
                "Lavender",
                "DarkSalmon",
                "Violet",
                "PaleGoldenRod",
                "LightCoral",
                "Khaki",
                "AliceBlue",
                "HoneyDew",
                "Azure",
                "SandyBrown",
                "Wheat",
                "Beige",
                "WhiteSmoke",
                "MintCream",
                "GhostWhite",
                "Salmon",
                "AntiqueWhite",
                "Linen",
                "LightGoldenRodYellow",
                "OldLace",
                "Red",
                "Fuchsia",
                "Magenta",
                "DeepPink",
                "OrangeRed",
                "Tomato",
                "HotPink",
                "Coral",
                "DarkOrange",
                "LightSalmon",
                "Orange",
                "LightPink",
                "Pink",
                "Gold",
                "PeachPuff",
                "NavajoWhite",
                "Moccasin",
                "Bisque",
                "MistyRose",
                "BlanchedAlmond",
                "PapayaWhip",
                "LavenderBlush",
                "SeaShell",
                "Cornsilk",
                "LemonChiffon",
                "FloralWhite",
                "Snow",
                "Yellow",
                "LightYellow",
              ],
              company: [
                "3Com Corp",
                "3M Company",
                "A.G. Edwards Inc.",
                "Abbott Laboratories",
                "Abercrombie & Fitch Co.",
                "ABM Industries Incorporated",
                "Ace Hardware Corporation",
                "ACT Manufacturing Inc.",
                "Acterna Corp.",
                "Adams Resources & Energy, Inc.",
                "ADC Telecommunications, Inc.",
                "Adelphia Communications Corporation",
                "Administaff, Inc.",
                "Adobe Systems Incorporated",
                "Adolph Coors Company",
                "Advance Auto Parts, Inc.",
                "Advanced Micro Devices, Inc.",
                "AdvancePCS, Inc.",
                "Advantica Restaurant Group, Inc.",
                "The AES Corporation",
                "Aetna Inc.",
                "Affiliated Computer Services, Inc.",
                "AFLAC Incorporated",
                "AGCO Corporation",
                "Agilent Technologies, Inc.",
                "Agway Inc.",
                "Apartment Investment and Management Company",
                "Air Products and Chemicals, Inc.",
                "Airborne, Inc.",
                "Airgas, Inc.",
                "AK Steel Holding Corporation",
                "Alaska Air Group, Inc.",
                "Alberto-Culver Company",
                "Albertson's, Inc.",
                "Alcoa Inc.",
                "Alleghany Corporation",
                "Allegheny Energy, Inc.",
                "Allegheny Technologies Incorporated",
                "Allergan, Inc.",
                "ALLETE, Inc.",
                "Alliant Energy Corporation",
                "Allied Waste Industries, Inc.",
                "Allmerica Financial Corporation",
                "The Allstate Corporation",
                "ALLTEL Corporation",
                "The Alpine Group, Inc.",
                "Amazon.com, Inc.",
                "AMC Entertainment Inc.",
                "American Power Conversion Corporation",
                "Amerada Hess Corporation",
                "AMERCO",
                "Ameren Corporation",
                "America West Holdings Corporation",
                "American Axle & Manufacturing Holdings, Inc.",
                "American Eagle Outfitters, Inc.",
                "American Electric Power Company, Inc.",
                "American Express Company",
                "American Financial Group, Inc.",
                "American Greetings Corporation",
                "American International Group, Inc.",
                "American Standard Companies Inc.",
                "American Water Works Company, Inc.",
                "AmerisourceBergen Corporation",
                "Ames Department Stores, Inc.",
                "Amgen Inc.",
                "Amkor Technology, Inc.",
                "AMR Corporation",
                "AmSouth Bancorp.",
                "Amtran, Inc.",
                "Anadarko Petroleum Corporation",
                "Analog Devices, Inc.",
                "Anheuser-Busch Companies, Inc.",
                "Anixter International Inc.",
                "AnnTaylor Inc.",
                "Anthem, Inc.",
                "AOL Time Warner Inc.",
                "Aon Corporation",
                "Apache Corporation",
                "Apple Computer, Inc.",
                "Applera Corporation",
                "Applied Industrial Technologies, Inc.",
                "Applied Materials, Inc.",
                "Aquila, Inc.",
                "ARAMARK Corporation",
                "Arch Coal, Inc.",
                "Archer Daniels Midland Company",
                "Arkansas Best Corporation",
                "Armstrong Holdings, Inc.",
                "Arrow Electronics, Inc.",
                "ArvinMeritor, Inc.",
                "Ashland Inc.",
                "Astoria Financial Corporation",
                "AT&T Corp.",
                "Atmel Corporation",
                "Atmos Energy Corporation",
                "Audiovox Corporation",
                "Autoliv, Inc.",
                "Automatic Data Processing, Inc.",
                "AutoNation, Inc.",
                "AutoZone, Inc.",
                "Avaya Inc.",
                "Avery Dennison Corporation",
                "Avista Corporation",
                "Avnet, Inc.",
                "Avon Products, Inc.",
                "Baker Hughes Incorporated",
                "Ball Corporation",
                "Bank of America Corporation",
                "The Bank of New York Company, Inc.",
                "Bank One Corporation",
                "Banknorth Group, Inc.",
                "Banta Corporation",
                "Barnes & Noble, Inc.",
                "Bausch & Lomb Incorporated",
                "Baxter International Inc.",
                "BB&T Corporation",
                "The Bear Stearns Companies Inc.",
                "Beazer Homes USA, Inc.",
                "Beckman Coulter, Inc.",
                "Becton, Dickinson and Company",
                "Bed Bath & Beyond Inc.",
                "Belk, Inc.",
                "Bell Microproducts Inc.",
                "BellSouth Corporation",
                "Belo Corp.",
                "Bemis Company, Inc.",
                "Benchmark Electronics, Inc.",
                "Berkshire Hathaway Inc.",
                "Best Buy Co., Inc.",
                "Bethlehem Steel Corporation",
                "Beverly Enterprises, Inc.",
                "Big Lots, Inc.",
                "BJ Services Company",
                "BJ's Wholesale Club, Inc.",
                "The Black & Decker Corporation",
                "Black Hills Corporation",
                "BMC Software, Inc.",
                "The Boeing Company",
                "Boise Cascade Corporation",
                "Borders Group, Inc.",
                "BorgWarner Inc.",
                "Boston Scientific Corporation",
                "Bowater Incorporated",
                "Briggs & Stratton Corporation",
                "Brightpoint, Inc.",
                "Brinker International, Inc.",
                "Bristol-Myers Squibb Company",
                "Broadwing, Inc.",
                "Brown Shoe Company, Inc.",
                "Brown-Forman Corporation",
                "Brunswick Corporation",
                "Budget Group, Inc.",
                "Burlington Coat Factory Warehouse Corporation",
                "Burlington Industries, Inc.",
                "Burlington Northern Santa Fe Corporation",
                "Burlington Resources Inc.",
                "C. H. Robinson Worldwide Inc.",
                "Cablevision Systems Corp",
                "Cabot Corp",
                "Cadence Design Systems, Inc.",
                "Calpine Corp.",
                "Campbell Soup Co.",
                "Capital One Financial Corp.",
                "Cardinal Health Inc.",
                "Caremark Rx Inc.",
                "Carlisle Cos. Inc.",
                "Carpenter Technology Corp.",
                "Casey's General Stores Inc.",
                "Caterpillar Inc.",
                "CBRL Group Inc.",
                "CDI Corp.",
                "CDW Computer Centers Inc.",
                "CellStar Corp.",
                "Cendant Corp",
                "Cenex Harvest States Cooperatives",
                "Centex Corp.",
                "CenturyTel Inc.",
                "Ceridian Corp.",
                "CH2M Hill Cos. Ltd.",
                "Champion Enterprises Inc.",
                "Charles Schwab Corp.",
                "Charming Shoppes Inc.",
                "Charter Communications Inc.",
                "Charter One Financial Inc.",
                "ChevronTexaco Corp.",
                "Chiquita Brands International Inc.",
                "Chubb Corp",
                "Ciena Corp.",
                "Cigna Corp",
                "Cincinnati Financial Corp.",
                "Cinergy Corp.",
                "Cintas Corp.",
                "Circuit City Stores Inc.",
                "Cisco Systems Inc.",
                "Citigroup, Inc",
                "Citizens Communications Co.",
                "CKE Restaurants Inc.",
                "Clear Channel Communications Inc.",
                "The Clorox Co.",
                "CMGI Inc.",
                "CMS Energy Corp.",
                "CNF Inc.",
                "Coca-Cola Co.",
                "Coca-Cola Enterprises Inc.",
                "Colgate-Palmolive Co.",
                "Collins & Aikman Corp.",
                "Comcast Corp.",
                "Comdisco Inc.",
                "Comerica Inc.",
                "Comfort Systems USA Inc.",
                "Commercial Metals Co.",
                "Community Health Systems Inc.",
                "Compass Bancshares Inc",
                "Computer Associates International Inc.",
                "Computer Sciences Corp.",
                "Compuware Corp.",
                "Comverse Technology Inc.",
                "ConAgra Foods Inc.",
                "Concord EFS Inc.",
                "Conectiv, Inc",
                "Conoco Inc",
                "Conseco Inc.",
                "Consolidated Freightways Corp.",
                "Consolidated Edison Inc.",
                "Constellation Brands Inc.",
                "Constellation Emergy Group Inc.",
                "Continental Airlines Inc.",
                "Convergys Corp.",
                "Cooper Cameron Corp.",
                "Cooper Industries Ltd.",
                "Cooper Tire & Rubber Co.",
                "Corn Products International Inc.",
                "Corning Inc.",
                "Costco Wholesale Corp.",
                "Countrywide Credit Industries Inc.",
                "Coventry Health Care Inc.",
                "Cox Communications Inc.",
                "Crane Co.",
                "Crompton Corp.",
                "Crown Cork & Seal Co. Inc.",
                "CSK Auto Corp.",
                "CSX Corp.",
                "Cummins Inc.",
                "CVS Corp.",
                "Cytec Industries Inc.",
                "D&K Healthcare Resources, Inc.",
                "D.R. Horton Inc.",
                "Dana Corporation",
                "Danaher Corporation",
                "Darden Restaurants Inc.",
                "DaVita Inc.",
                "Dean Foods Company",
                "Deere & Company",
                "Del Monte Foods Co",
                "Dell Computer Corporation",
                "Delphi Corp.",
                "Delta Air Lines Inc.",
                "Deluxe Corporation",
                "Devon Energy Corporation",
                "Di Giorgio Corporation",
                "Dial Corporation",
                "Diebold Incorporated",
                "Dillard's Inc.",
                "DIMON Incorporated",
                "Dole Food Company, Inc.",
                "Dollar General Corporation",
                "Dollar Tree Stores, Inc.",
                "Dominion Resources, Inc.",
                "Domino's Pizza LLC",
                "Dover Corporation, Inc.",
                "Dow Chemical Company",
                "Dow Jones & Company, Inc.",
                "DPL Inc.",
                "DQE Inc.",
                "Dreyer's Grand Ice Cream, Inc.",
                "DST Systems, Inc.",
                "DTE Energy Co.",
                "E.I. Du Pont de Nemours and Company",
                "Duke Energy Corp",
                "Dun & Bradstreet Inc.",
                "DURA Automotive Systems Inc.",
                "DynCorp",
                "Dynegy Inc.",
                "E*Trade Group, Inc.",
                "E.W. Scripps Company",
                "Earthlink, Inc.",
                "Eastman Chemical Company",
                "Eastman Kodak Company",
                "Eaton Corporation",
                "Echostar Communications Corporation",
                "Ecolab Inc.",
                "Edison International",
                "EGL Inc.",
                "El Paso Corporation",
                "Electronic Arts Inc.",
                "Electronic Data Systems Corp.",
                "Eli Lilly and Company",
                "EMC Corporation",
                "Emcor Group Inc.",
                "Emerson Electric Co.",
                "Encompass Services Corporation",
                "Energizer Holdings Inc.",
                "Energy East Corporation",
                "Engelhard Corporation",
                "Enron Corp.",
                "Entergy Corporation",
                "Enterprise Products Partners L.P.",
                "EOG Resources, Inc.",
                "Equifax Inc.",
                "Equitable Resources Inc.",
                "Equity Office Properties Trust",
                "Equity Residential Properties Trust",
                "Estee Lauder Companies Inc.",
                "Exelon Corporation",
                "Exide Technologies",
                "Expeditors International of Washington Inc.",
                "Express Scripts Inc.",
                "ExxonMobil Corporation",
                "Fairchild Semiconductor International Inc.",
                "Family Dollar Stores Inc.",
                "Farmland Industries Inc.",
                "Federal Mogul Corp.",
                "Federated Department Stores Inc.",
                "Federal Express Corp.",
                "Felcor Lodging Trust Inc.",
                "Ferro Corp.",
                "Fidelity National Financial Inc.",
                "Fifth Third Bancorp",
                "First American Financial Corp.",
                "First Data Corp.",
                "First National of Nebraska Inc.",
                "First Tennessee National Corp.",
                "FirstEnergy Corp.",
                "Fiserv Inc.",
                "Fisher Scientific International Inc.",
                "FleetBoston Financial Co.",
                "Fleetwood Enterprises Inc.",
                "Fleming Companies Inc.",
                "Flowers Foods Inc.",
                "Flowserv Corp",
                "Fluor Corp",
                "FMC Corp",
                "Foamex International Inc",
                "Foot Locker Inc",
                "Footstar Inc.",
                "Ford Motor Co",
                "Forest Laboratories Inc.",
                "Fortune Brands Inc.",
                "Foster Wheeler Ltd.",
                "FPL Group Inc.",
                "Franklin Resources Inc.",
                "Freeport McMoran Copper & Gold Inc.",
                "Frontier Oil Corp",
                "Furniture Brands International Inc.",
                "Gannett Co., Inc.",
                "Gap Inc.",
                "Gateway Inc.",
                "GATX Corporation",
                "Gemstar-TV Guide International Inc.",
                "GenCorp Inc.",
                "General Cable Corporation",
                "General Dynamics Corporation",
                "General Electric Company",
                "General Mills Inc",
                "General Motors Corporation",
                "Genesis Health Ventures Inc.",
                "Gentek Inc.",
                "Gentiva Health Services Inc.",
                "Genuine Parts Company",
                "Genuity Inc.",
                "Genzyme Corporation",
                "Georgia Gulf Corporation",
                "Georgia-Pacific Corporation",
                "Gillette Company",
                "Gold Kist Inc.",
                "Golden State Bancorp Inc.",
                "Golden West Financial Corporation",
                "Goldman Sachs Group Inc.",
                "Goodrich Corporation",
                "The Goodyear Tire & Rubber Company",
                "Granite Construction Incorporated",
                "Graybar Electric Company Inc.",
                "Great Lakes Chemical Corporation",
                "Great Plains Energy Inc.",
                "GreenPoint Financial Corp.",
                "Greif Bros. Corporation",
                "Grey Global Group Inc.",
                "Group 1 Automotive Inc.",
                "Guidant Corporation",
                "H&R Block Inc.",
                "H.B. Fuller Company",
                "H.J. Heinz Company",
                "Halliburton Co.",
                "Harley-Davidson Inc.",
                "Harman International Industries Inc.",
                "Harrah's Entertainment Inc.",
                "Harris Corp.",
                "Harsco Corp.",
                "Hartford Financial Services Group Inc.",
                "Hasbro Inc.",
                "Hawaiian Electric Industries Inc.",
                "HCA Inc.",
                "Health Management Associates Inc.",
                "Health Net Inc.",
                "Healthsouth Corp",
                "Henry Schein Inc.",
                "Hercules Inc.",
                "Herman Miller Inc.",
                "Hershey Foods Corp.",
                "Hewlett-Packard Company",
                "Hibernia Corp.",
                "Hillenbrand Industries Inc.",
                "Hilton Hotels Corp.",
                "Hollywood Entertainment Corp.",
                "Home Depot Inc.",
                "Hon Industries Inc.",
                "Honeywell International Inc.",
                "Hormel Foods Corp.",
                "Host Marriott Corp.",
                "Household International Corp.",
                "Hovnanian Enterprises Inc.",
                "Hub Group Inc.",
                "Hubbell Inc.",
                "Hughes Supply Inc.",
                "Humana Inc.",
                "Huntington Bancshares Inc.",
                "Idacorp Inc.",
                "IDT Corporation",
                "IKON Office Solutions Inc.",
                "Illinois Tool Works Inc.",
                "IMC Global Inc.",
                "Imperial Sugar Company",
                "IMS Health Inc.",
                "Ingles Market Inc",
                "Ingram Micro Inc.",
                "Insight Enterprises Inc.",
                "Integrated Electrical Services Inc.",
                "Intel Corporation",
                "International Paper Co.",
                "Interpublic Group of Companies Inc.",
                "Interstate Bakeries Corporation",
                "International Business Machines Corp.",
                "International Flavors & Fragrances Inc.",
                "International Multifoods Corporation",
                "Intuit Inc.",
                "IT Group Inc.",
                "ITT Industries Inc.",
                "Ivax Corp.",
                "J.B. Hunt Transport Services Inc.",
                "J.C. Penny Co.",
                "J.P. Morgan Chase & Co.",
                "Jabil Circuit Inc.",
                "Jack In The Box Inc.",
                "Jacobs Engineering Group Inc.",
                "JDS Uniphase Corp.",
                "Jefferson-Pilot Co.",
                "John Hancock Financial Services Inc.",
                "Johnson & Johnson",
                "Johnson Controls Inc.",
                "Jones Apparel Group Inc.",
                "KB Home",
                "Kellogg Company",
                "Kellwood Company",
                "Kelly Services Inc.",
                "Kemet Corp.",
                "Kennametal Inc.",
                "Kerr-McGee Corporation",
                "KeyCorp",
                "KeySpan Corp.",
                "Kimball International Inc.",
                "Kimberly-Clark Corporation",
                "Kindred Healthcare Inc.",
                "KLA-Tencor Corporation",
                "K-Mart Corp.",
                "Knight-Ridder Inc.",
                "Kohl's Corp.",
                "KPMG Consulting Inc.",
                "Kroger Co.",
                "L-3 Communications Holdings Inc.",
                "Laboratory Corporation of America Holdings",
                "Lam Research Corporation",
                "LandAmerica Financial Group Inc.",
                "Lands' End Inc.",
                "Landstar System Inc.",
                "La-Z-Boy Inc.",
                "Lear Corporation",
                "Legg Mason Inc.",
                "Leggett & Platt Inc.",
                "Lehman Brothers Holdings Inc.",
                "Lennar Corporation",
                "Lennox International Inc.",
                "Level 3 Communications Inc.",
                "Levi Strauss & Co.",
                "Lexmark International Inc.",
                "Limited Inc.",
                "Lincoln National Corporation",
                "Linens 'n Things Inc.",
                "Lithia Motors Inc.",
                "Liz Claiborne Inc.",
                "Lockheed Martin Corporation",
                "Loews Corporation",
                "Longs Drug Stores Corporation",
                "Louisiana-Pacific Corporation",
                "Lowe's Companies Inc.",
                "LSI Logic Corporation",
                "The LTV Corporation",
                "The Lubrizol Corporation",
                "Lucent Technologies Inc.",
                "Lyondell Chemical Company",
                "M & T Bank Corporation",
                "Magellan Health Services Inc.",
                "Mail-Well Inc.",
                "Mandalay Resort Group",
                "Manor Care Inc.",
                "Manpower Inc.",
                "Marathon Oil Corporation",
                "Mariner Health Care Inc.",
                "Markel Corporation",
                "Marriott International Inc.",
                "Marsh & McLennan Companies Inc.",
                "Marsh Supermarkets Inc.",
                "Marshall & Ilsley Corporation",
                "Martin Marietta Materials Inc.",
                "Masco Corporation",
                "Massey Energy Company",
                "MasTec Inc.",
                "Mattel Inc.",
                "Maxim Integrated Products Inc.",
                "Maxtor Corporation",
                "Maxxam Inc.",
                "The May Department Stores Company",
                "Maytag Corporation",
                "MBNA Corporation",
                "McCormick & Company Incorporated",
                "McDonald's Corporation",
                "The McGraw-Hill Companies Inc.",
                "McKesson Corporation",
                "McLeodUSA Incorporated",
                "M.D.C. Holdings Inc.",
                "MDU Resources Group Inc.",
                "MeadWestvaco Corporation",
                "Medtronic Inc.",
                "Mellon Financial Corporation",
                "The Men's Wearhouse Inc.",
                "Merck & Co., Inc.",
                "Mercury General Corporation",
                "Merrill Lynch & Co. Inc.",
                "Metaldyne Corporation",
                "Metals USA Inc.",
                "MetLife Inc.",
                "Metris Companies Inc",
                "MGIC Investment Corporation",
                "MGM Mirage",
                "Michaels Stores Inc.",
                "Micron Technology Inc.",
                "Microsoft Corporation",
                "Milacron Inc.",
                "Millennium Chemicals Inc.",
                "Mirant Corporation",
                "Mohawk Industries Inc.",
                "Molex Incorporated",
                "The MONY Group Inc.",
                "Morgan Stanley Dean Witter & Co.",
                "Motorola Inc.",
                "MPS Group Inc.",
                "Murphy Oil Corporation",
                "Nabors Industries Inc",
                "Nacco Industries Inc",
                "Nash Finch Company",
                "National City Corp.",
                "National Commerce Financial Corporation",
                "National Fuel Gas Company",
                "National Oilwell Inc",
                "National Rural Utilities Cooperative Finance Corporation",
                "National Semiconductor Corporation",
                "National Service Industries Inc",
                "Navistar International Corporation",
                "NCR Corporation",
                "The Neiman Marcus Group Inc.",
                "New Jersey Resources Corporation",
                "New York Times Company",
                "Newell Rubbermaid Inc",
                "Newmont Mining Corporation",
                "Nextel Communications Inc",
                "Nicor Inc",
                "Nike Inc",
                "NiSource Inc",
                "Noble Energy Inc",
                "Nordstrom Inc",
                "Norfolk Southern Corporation",
                "Nortek Inc",
                "North Fork Bancorporation Inc",
                "Northeast Utilities System",
                "Northern Trust Corporation",
                "Northrop Grumman Corporation",
                "NorthWestern Corporation",
                "Novellus Systems Inc",
                "NSTAR",
                "NTL Incorporated",
                "Nucor Corp",
                "Nvidia Corp",
                "NVR Inc",
                "Northwest Airlines Corp",
                "Occidental Petroleum Corp",
                "Ocean Energy Inc",
                "Office Depot Inc.",
                "OfficeMax Inc",
                "OGE Energy Corp",
                "Oglethorpe Power Corp.",
                "Ohio Casualty Corp.",
                "Old Republic International Corp.",
                "Olin Corp.",
                "OM Group Inc",
                "Omnicare Inc",
                "Omnicom Group",
                "On Semiconductor Corp",
                "ONEOK Inc",
                "Oracle Corp",
                "Oshkosh Truck Corp",
                "Outback Steakhouse Inc.",
                "Owens & Minor Inc.",
                "Owens Corning",
                "Owens-Illinois Inc",
                "Oxford Health Plans Inc",
                "Paccar Inc",
                "PacifiCare Health Systems Inc",
                "Packaging Corp. of America",
                "Pactiv Corp",
                "Pall Corp",
                "Pantry Inc",
                "Park Place Entertainment Corp",
                "Parker Hannifin Corp.",
                "Pathmark Stores Inc.",
                "Paychex Inc",
                "Payless Shoesource Inc",
                "Penn Traffic Co.",
                "Pennzoil-Quaker State Company",
                "Pentair Inc",
                "Peoples Energy Corp.",
                "PeopleSoft Inc",
                "Pep Boys Manny, Moe & Jack",
                "Potomac Electric Power Co.",
                "Pepsi Bottling Group Inc.",
                "PepsiAmericas Inc.",
                "PepsiCo Inc.",
                "Performance Food Group Co.",
                "Perini Corp",
                "PerkinElmer Inc",
                "Perot Systems Corp",
                "Petco Animal Supplies Inc.",
                "Peter Kiewit Sons', Inc.",
                "PETsMART Inc",
                "Pfizer Inc",
                "Pacific Gas & Electric Corp.",
                "Pharmacia Corp",
                "Phar Mor Inc.",
                "Phelps Dodge Corp.",
                "Philip Morris Companies Inc.",
                "Phillips Petroleum Co",
                "Phillips Van Heusen Corp.",
                "Phoenix Companies Inc",
                "Pier 1 Imports Inc.",
                "Pilgrim's Pride Corporation",
                "Pinnacle West Capital Corp",
                "Pioneer-Standard Electronics Inc.",
                "Pitney Bowes Inc.",
                "Pittston Brinks Group",
                "Plains All American Pipeline LP",
                "PNC Financial Services Group Inc.",
                "PNM Resources Inc",
                "Polaris Industries Inc.",
                "Polo Ralph Lauren Corp",
                "PolyOne Corp",
                "Popular Inc",
                "Potlatch Corp",
                "PPG Industries Inc",
                "PPL Corp",
                "Praxair Inc",
                "Precision Castparts Corp",
                "Premcor Inc.",
                "Pride International Inc",
                "Primedia Inc",
                "Principal Financial Group Inc.",
                "Procter & Gamble Co.",
                "Pro-Fac Cooperative Inc.",
                "Progress Energy Inc",
                "Progressive Corporation",
                "Protective Life Corp",
                "Provident Financial Group",
                "Providian Financial Corp.",
                "Prudential Financial Inc.",
                "PSS World Medical Inc",
                "Public Service Enterprise Group Inc.",
                "Publix Super Markets Inc.",
                "Puget Energy Inc.",
                "Pulte Homes Inc",
                "Qualcomm Inc",
                "Quanta Services Inc.",
                "Quantum Corp",
                "Quest Diagnostics Inc.",
                "Questar Corp",
                "Quintiles Transnational",
                "Qwest Communications Intl Inc",
                "R.J. Reynolds Tobacco Company",
                "R.R. Donnelley & Sons Company",
                "Radio Shack Corporation",
                "Raymond James Financial Inc.",
                "Raytheon Company",
                "Reader's Digest Association Inc.",
                "Reebok International Ltd.",
                "Regions Financial Corp.",
                "Regis Corporation",
                "Reliance Steel & Aluminum Co.",
                "Reliant Energy Inc.",
                "Rent A Center Inc",
                "Republic Services Inc",
                "Revlon Inc",
                "RGS Energy Group Inc",
                "Rite Aid Corp",
                "Riverwood Holding Inc.",
                "RoadwayCorp",
                "Robert Half International Inc.",
                "Rock-Tenn Co",
                "Rockwell Automation Inc",
                "Rockwell Collins Inc",
                "Rohm & Haas Co.",
                "Ross Stores Inc",
                "RPM Inc.",
                "Ruddick Corp",
                "Ryder System Inc",
                "Ryerson Tull Inc",
                "Ryland Group Inc.",
                "Sabre Holdings Corp",
                "Safeco Corp",
                "Safeguard Scientifics Inc.",
                "Safeway Inc",
                "Saks Inc",
                "Sanmina-SCI Inc",
                "Sara Lee Corp",
                "SBC Communications Inc",
                "Scana Corp.",
                "Schering-Plough Corp",
                "Scholastic Corp",
                "SCI Systems Onc.",
                "Science Applications Intl. Inc.",
                "Scientific-Atlanta Inc",
                "Scotts Company",
                "Seaboard Corp",
                "Sealed Air Corp",
                "Sears Roebuck & Co",
                "Sempra Energy",
                "Sequa Corp",
                "Service Corp. International",
                "ServiceMaster Co",
                "Shaw Group Inc",
                "Sherwin-Williams Company",
                "Shopko Stores Inc",
                "Siebel Systems Inc",
                "Sierra Health Services Inc",
                "Sierra Pacific Resources",
                "Silgan Holdings Inc.",
                "Silicon Graphics Inc",
                "Simon Property Group Inc",
                "SLM Corporation",
                "Smith International Inc",
                "Smithfield Foods Inc",
                "Smurfit-Stone Container Corp",
                "Snap-On Inc",
                "Solectron Corp",
                "Solutia Inc",
                "Sonic Automotive Inc.",
                "Sonoco Products Co.",
                "Southern Company",
                "Southern Union Company",
                "SouthTrust Corp.",
                "Southwest Airlines Co",
                "Southwest Gas Corp",
                "Sovereign Bancorp Inc.",
                "Spartan Stores Inc",
                "Spherion Corp",
                "Sports Authority Inc",
                "Sprint Corp.",
                "SPX Corp",
                "St. Jude Medical Inc",
                "St. Paul Cos.",
                "Staff Leasing Inc.",
                "StanCorp Financial Group Inc",
                "Standard Pacific Corp.",
                "Stanley Works",
                "Staples Inc",
                "Starbucks Corp",
                "Starwood Hotels & Resorts Worldwide Inc",
                "State Street Corp.",
                "Stater Bros. Holdings Inc.",
                "Steelcase Inc",
                "Stein Mart Inc",
                "Stewart & Stevenson Services Inc",
                "Stewart Information Services Corp",
                "Stilwell Financial Inc",
                "Storage Technology Corporation",
                "Stryker Corp",
                "Sun Healthcare Group Inc.",
                "Sun Microsystems Inc.",
                "SunGard Data Systems Inc.",
                "Sunoco Inc.",
                "SunTrust Banks Inc",
                "Supervalu Inc",
                "Swift Transportation, Co., Inc",
                "Symbol Technologies Inc",
                "Synovus Financial Corp.",
                "Sysco Corp",
                "Systemax Inc.",
                "Target Corp.",
                "Tech Data Corporation",
                "TECO Energy Inc",
                "Tecumseh Products Company",
                "Tektronix Inc",
                "Teleflex Incorporated",
                "Telephone & Data Systems Inc",
                "Tellabs Inc.",
                "Temple-Inland Inc",
                "Tenet Healthcare Corporation",
                "Tenneco Automotive Inc.",
                "Teradyne Inc",
                "Terex Corp",
                "Tesoro Petroleum Corp.",
                "Texas Industries Inc.",
                "Texas Instruments Incorporated",
                "Textron Inc",
                "Thermo Electron Corporation",
                "Thomas & Betts Corporation",
                "Tiffany & Co",
                "Timken Company",
                "TJX Companies Inc",
                "TMP Worldwide Inc",
                "Toll Brothers Inc",
                "Torchmark Corporation",
                "Toro Company",
                "Tower Automotive Inc.",
                "Toys 'R' Us Inc",
                "Trans World Entertainment Corp.",
                "TransMontaigne Inc",
                "Transocean Inc",
                "TravelCenters of America Inc.",
                "Triad Hospitals Inc",
                "Tribune Company",
                "Trigon Healthcare Inc.",
                "Trinity Industries Inc",
                "Trump Hotels & Casino Resorts Inc.",
                "TruServ Corporation",
                "TRW Inc",
                "TXU Corp",
                "Tyson Foods Inc",
                "U.S. Bancorp",
                "U.S. Industries Inc.",
                "UAL Corporation",
                "UGI Corporation",
                "Unified Western Grocers Inc",
                "Union Pacific Corporation",
                "Union Planters Corp",
                "Unisource Energy Corp",
                "Unisys Corporation",
                "United Auto Group Inc",
                "United Defense Industries Inc.",
                "United Parcel Service Inc",
                "United Rentals Inc",
                "United Stationers Inc",
                "United Technologies Corporation",
                "UnitedHealth Group Incorporated",
                "Unitrin Inc",
                "Universal Corporation",
                "Universal Forest Products Inc",
                "Universal Health Services Inc",
                "Unocal Corporation",
                "Unova Inc",
                "UnumProvident Corporation",
                "URS Corporation",
                "US Airways Group Inc",
                "US Oncology Inc",
                "USA Interactive",
                "USFreighways Corporation",
                "USG Corporation",
                "UST Inc",
                "Valero Energy Corporation",
                "Valspar Corporation",
                "Value City Department Stores Inc",
                "Varco International Inc",
                "Vectren Corporation",
                "Veritas Software Corporation",
                "Verizon Communications Inc",
                "VF Corporation",
                "Viacom Inc",
                "Viad Corp",
                "Viasystems Group Inc",
                "Vishay Intertechnology Inc",
                "Visteon Corporation",
                "Volt Information Sciences Inc",
                "Vulcan Materials Company",
                "W.R. Berkley Corporation",
                "W.R. Grace & Co",
                "W.W. Grainger Inc",
                "Wachovia Corporation",
                "Wakenhut Corporation",
                "Walgreen Co",
                "Wallace Computer Services Inc",
                "Wal-Mart Stores Inc",
                "Walt Disney Co",
                "Walter Industries Inc",
                "Washington Mutual Inc",
                "Washington Post Co.",
                "Waste Management Inc",
                "Watsco Inc",
                "Weatherford International Inc",
                "Weis Markets Inc.",
                "Wellpoint Health Networks Inc",
                "Wells Fargo & Company",
                "Wendy's International Inc",
                "Werner Enterprises Inc",
                "WESCO International Inc",
                "Western Digital Inc",
                "Western Gas Resources Inc",
                "WestPoint Stevens Inc",
                "Weyerhauser Company",
                "WGL Holdings Inc",
                "Whirlpool Corporation",
                "Whole Foods Market Inc",
                "Willamette Industries Inc.",
                "Williams Companies Inc",
                "Williams Sonoma Inc",
                "Winn Dixie Stores Inc",
                "Wisconsin Energy Corporation",
                "Wm Wrigley Jr Company",
                "World Fuel Services Corporation",
                "WorldCom Inc",
                "Worthington Industries Inc",
                "WPS Resources Corporation",
                "Wyeth",
                "Wyndham International Inc",
                "Xcel Energy Inc",
                "Xerox Corp",
                "Xilinx Inc",
                "XO Communications Inc",
                "Yellow Corporation",
                "York International Corp",
                "Yum Brands Inc.",
                "Zale Corporation",
                "Zions Bancorporation",
              ],
              fileExtension: {
                raster: [
                  "bmp",
                  "gif",
                  "gpl",
                  "ico",
                  "jpeg",
                  "psd",
                  "png",
                  "psp",
                  "raw",
                  "tiff",
                ],
                vector: [
                  "3dv",
                  "amf",
                  "awg",
                  "ai",
                  "cgm",
                  "cdr",
                  "cmx",
                  "dxf",
                  "e2d",
                  "egt",
                  "eps",
                  "fs",
                  "odg",
                  "svg",
                  "xar",
                ],
                "3d": [
                  "3dmf",
                  "3dm",
                  "3mf",
                  "3ds",
                  "an8",
                  "aoi",
                  "blend",
                  "cal3d",
                  "cob",
                  "ctm",
                  "iob",
                  "jas",
                  "max",
                  "mb",
                  "mdx",
                  "obj",
                  "x",
                  "x3d",
                ],
                document: [
                  "doc",
                  "docx",
                  "dot",
                  "html",
                  "xml",
                  "odt",
                  "odm",
                  "ott",
                  "csv",
                  "rtf",
                  "tex",
                  "xhtml",
                  "xps",
                ],
              },
              timezones: [
                {
                  name: "Dateline Standard Time",
                  abbr: "DST",
                  offset: -12,
                  isdst: !1,
                  text: "(UTC-12:00) International Date Line West",
                  utc: ["Etc/GMT+12"],
                },
                {
                  name: "UTC-11",
                  abbr: "U",
                  offset: -11,
                  isdst: !1,
                  text: "(UTC-11:00) Coordinated Universal Time-11",
                  utc: [
                    "Etc/GMT+11",
                    "Pacific/Midway",
                    "Pacific/Niue",
                    "Pacific/Pago_Pago",
                  ],
                },
                {
                  name: "Hawaiian Standard Time",
                  abbr: "HST",
                  offset: -10,
                  isdst: !1,
                  text: "(UTC-10:00) Hawaii",
                  utc: [
                    "Etc/GMT+10",
                    "Pacific/Honolulu",
                    "Pacific/Johnston",
                    "Pacific/Rarotonga",
                    "Pacific/Tahiti",
                  ],
                },
                {
                  name: "Alaskan Standard Time",
                  abbr: "AKDT",
                  offset: -8,
                  isdst: !0,
                  text: "(UTC-09:00) Alaska",
                  utc: [
                    "America/Anchorage",
                    "America/Juneau",
                    "America/Nome",
                    "America/Sitka",
                    "America/Yakutat",
                  ],
                },
                {
                  name: "Pacific Standard Time (Mexico)",
                  abbr: "PDT",
                  offset: -7,
                  isdst: !0,
                  text: "(UTC-08:00) Baja California",
                  utc: ["America/Santa_Isabel"],
                },
                {
                  name: "Pacific Daylight Time",
                  abbr: "PDT",
                  offset: -7,
                  isdst: !0,
                  text: "(UTC-07:00) Pacific Time (US & Canada)",
                  utc: [
                    "America/Dawson",
                    "America/Los_Angeles",
                    "America/Tijuana",
                    "America/Vancouver",
                    "America/Whitehorse",
                  ],
                },
                {
                  name: "Pacific Standard Time",
                  abbr: "PST",
                  offset: -8,
                  isdst: !1,
                  text: "(UTC-08:00) Pacific Time (US & Canada)",
                  utc: [
                    "America/Dawson",
                    "America/Los_Angeles",
                    "America/Tijuana",
                    "America/Vancouver",
                    "America/Whitehorse",
                    "PST8PDT",
                  ],
                },
                {
                  name: "US Mountain Standard Time",
                  abbr: "UMST",
                  offset: -7,
                  isdst: !1,
                  text: "(UTC-07:00) Arizona",
                  utc: [
                    "America/Creston",
                    "America/Dawson_Creek",
                    "America/Hermosillo",
                    "America/Phoenix",
                    "Etc/GMT+7",
                  ],
                },
                {
                  name: "Mountain Standard Time (Mexico)",
                  abbr: "MDT",
                  offset: -6,
                  isdst: !0,
                  text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                  utc: ["America/Chihuahua", "America/Mazatlan"],
                },
                {
                  name: "Mountain Standard Time",
                  abbr: "MDT",
                  offset: -6,
                  isdst: !0,
                  text: "(UTC-07:00) Mountain Time (US & Canada)",
                  utc: [
                    "America/Boise",
                    "America/Cambridge_Bay",
                    "America/Denver",
                    "America/Edmonton",
                    "America/Inuvik",
                    "America/Ojinaga",
                    "America/Yellowknife",
                    "MST7MDT",
                  ],
                },
                {
                  name: "Central America Standard Time",
                  abbr: "CAST",
                  offset: -6,
                  isdst: !1,
                  text: "(UTC-06:00) Central America",
                  utc: [
                    "America/Belize",
                    "America/Costa_Rica",
                    "America/El_Salvador",
                    "America/Guatemala",
                    "America/Managua",
                    "America/Tegucigalpa",
                    "Etc/GMT+6",
                    "Pacific/Galapagos",
                  ],
                },
                {
                  name: "Central Standard Time",
                  abbr: "CDT",
                  offset: -5,
                  isdst: !0,
                  text: "(UTC-06:00) Central Time (US & Canada)",
                  utc: [
                    "America/Chicago",
                    "America/Indiana/Knox",
                    "America/Indiana/Tell_City",
                    "America/Matamoros",
                    "America/Menominee",
                    "America/North_Dakota/Beulah",
                    "America/North_Dakota/Center",
                    "America/North_Dakota/New_Salem",
                    "America/Rainy_River",
                    "America/Rankin_Inlet",
                    "America/Resolute",
                    "America/Winnipeg",
                    "CST6CDT",
                  ],
                },
                {
                  name: "Central Standard Time (Mexico)",
                  abbr: "CDT",
                  offset: -5,
                  isdst: !0,
                  text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                  utc: [
                    "America/Bahia_Banderas",
                    "America/Cancun",
                    "America/Merida",
                    "America/Mexico_City",
                    "America/Monterrey",
                  ],
                },
                {
                  name: "Canada Central Standard Time",
                  abbr: "CCST",
                  offset: -6,
                  isdst: !1,
                  text: "(UTC-06:00) Saskatchewan",
                  utc: ["America/Regina", "America/Swift_Current"],
                },
                {
                  name: "SA Pacific Standard Time",
                  abbr: "SPST",
                  offset: -5,
                  isdst: !1,
                  text: "(UTC-05:00) Bogota, Lima, Quito",
                  utc: [
                    "America/Bogota",
                    "America/Cayman",
                    "America/Coral_Harbour",
                    "America/Eirunepe",
                    "America/Guayaquil",
                    "America/Jamaica",
                    "America/Lima",
                    "America/Panama",
                    "America/Rio_Branco",
                    "Etc/GMT+5",
                  ],
                },
                {
                  name: "Eastern Standard Time",
                  abbr: "EDT",
                  offset: -4,
                  isdst: !0,
                  text: "(UTC-05:00) Eastern Time (US & Canada)",
                  utc: [
                    "America/Detroit",
                    "America/Havana",
                    "America/Indiana/Petersburg",
                    "America/Indiana/Vincennes",
                    "America/Indiana/Winamac",
                    "America/Iqaluit",
                    "America/Kentucky/Monticello",
                    "America/Louisville",
                    "America/Montreal",
                    "America/Nassau",
                    "America/New_York",
                    "America/Nipigon",
                    "America/Pangnirtung",
                    "America/Port-au-Prince",
                    "America/Thunder_Bay",
                    "America/Toronto",
                    "EST5EDT",
                  ],
                },
                {
                  name: "US Eastern Standard Time",
                  abbr: "UEDT",
                  offset: -4,
                  isdst: !0,
                  text: "(UTC-05:00) Indiana (East)",
                  utc: [
                    "America/Indiana/Marengo",
                    "America/Indiana/Vevay",
                    "America/Indianapolis",
                  ],
                },
                {
                  name: "Venezuela Standard Time",
                  abbr: "VST",
                  offset: -4.5,
                  isdst: !1,
                  text: "(UTC-04:30) Caracas",
                  utc: ["America/Caracas"],
                },
                {
                  name: "Paraguay Standard Time",
                  abbr: "PYT",
                  offset: -4,
                  isdst: !1,
                  text: "(UTC-04:00) Asuncion",
                  utc: ["America/Asuncion"],
                },
                {
                  name: "Atlantic Standard Time",
                  abbr: "ADT",
                  offset: -3,
                  isdst: !0,
                  text: "(UTC-04:00) Atlantic Time (Canada)",
                  utc: [
                    "America/Glace_Bay",
                    "America/Goose_Bay",
                    "America/Halifax",
                    "America/Moncton",
                    "America/Thule",
                    "Atlantic/Bermuda",
                  ],
                },
                {
                  name: "Central Brazilian Standard Time",
                  abbr: "CBST",
                  offset: -4,
                  isdst: !1,
                  text: "(UTC-04:00) Cuiaba",
                  utc: ["America/Campo_Grande", "America/Cuiaba"],
                },
                {
                  name: "SA Western Standard Time",
                  abbr: "SWST",
                  offset: -4,
                  isdst: !1,
                  text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
                  utc: [
                    "America/Anguilla",
                    "America/Antigua",
                    "America/Aruba",
                    "America/Barbados",
                    "America/Blanc-Sablon",
                    "America/Boa_Vista",
                    "America/Curacao",
                    "America/Dominica",
                    "America/Grand_Turk",
                    "America/Grenada",
                    "America/Guadeloupe",
                    "America/Guyana",
                    "America/Kralendijk",
                    "America/La_Paz",
                    "America/Lower_Princes",
                    "America/Manaus",
                    "America/Marigot",
                    "America/Martinique",
                    "America/Montserrat",
                    "America/Port_of_Spain",
                    "America/Porto_Velho",
                    "America/Puerto_Rico",
                    "America/Santo_Domingo",
                    "America/St_Barthelemy",
                    "America/St_Kitts",
                    "America/St_Lucia",
                    "America/St_Thomas",
                    "America/St_Vincent",
                    "America/Tortola",
                    "Etc/GMT+4",
                  ],
                },
                {
                  name: "Pacific SA Standard Time",
                  abbr: "PSST",
                  offset: -4,
                  isdst: !1,
                  text: "(UTC-04:00) Santiago",
                  utc: ["America/Santiago", "Antarctica/Palmer"],
                },
                {
                  name: "Newfoundland Standard Time",
                  abbr: "NDT",
                  offset: -2.5,
                  isdst: !0,
                  text: "(UTC-03:30) Newfoundland",
                  utc: ["America/St_Johns"],
                },
                {
                  name: "E. South America Standard Time",
                  abbr: "ESAST",
                  offset: -3,
                  isdst: !1,
                  text: "(UTC-03:00) Brasilia",
                  utc: ["America/Sao_Paulo"],
                },
                {
                  name: "Argentina Standard Time",
                  abbr: "AST",
                  offset: -3,
                  isdst: !1,
                  text: "(UTC-03:00) Buenos Aires",
                  utc: [
                    "America/Argentina/La_Rioja",
                    "America/Argentina/Rio_Gallegos",
                    "America/Argentina/Salta",
                    "America/Argentina/San_Juan",
                    "America/Argentina/San_Luis",
                    "America/Argentina/Tucuman",
                    "America/Argentina/Ushuaia",
                    "America/Buenos_Aires",
                    "America/Catamarca",
                    "America/Cordoba",
                    "America/Jujuy",
                    "America/Mendoza",
                  ],
                },
                {
                  name: "SA Eastern Standard Time",
                  abbr: "SEST",
                  offset: -3,
                  isdst: !1,
                  text: "(UTC-03:00) Cayenne, Fortaleza",
                  utc: [
                    "America/Araguaina",
                    "America/Belem",
                    "America/Cayenne",
                    "America/Fortaleza",
                    "America/Maceio",
                    "America/Paramaribo",
                    "America/Recife",
                    "America/Santarem",
                    "Antarctica/Rothera",
                    "Atlantic/Stanley",
                    "Etc/GMT+3",
                  ],
                },
                {
                  name: "Greenland Standard Time",
                  abbr: "GDT",
                  offset: -3,
                  isdst: !0,
                  text: "(UTC-03:00) Greenland",
                  utc: ["America/Godthab"],
                },
                {
                  name: "Montevideo Standard Time",
                  abbr: "MST",
                  offset: -3,
                  isdst: !1,
                  text: "(UTC-03:00) Montevideo",
                  utc: ["America/Montevideo"],
                },
                {
                  name: "Bahia Standard Time",
                  abbr: "BST",
                  offset: -3,
                  isdst: !1,
                  text: "(UTC-03:00) Salvador",
                  utc: ["America/Bahia"],
                },
                {
                  name: "UTC-02",
                  abbr: "U",
                  offset: -2,
                  isdst: !1,
                  text: "(UTC-02:00) Coordinated Universal Time-02",
                  utc: [
                    "America/Noronha",
                    "Atlantic/South_Georgia",
                    "Etc/GMT+2",
                  ],
                },
                {
                  name: "Mid-Atlantic Standard Time",
                  abbr: "MDT",
                  offset: -1,
                  isdst: !0,
                  text: "(UTC-02:00) Mid-Atlantic - Old",
                  utc: [],
                },
                {
                  name: "Azores Standard Time",
                  abbr: "ADT",
                  offset: 0,
                  isdst: !0,
                  text: "(UTC-01:00) Azores",
                  utc: ["America/Scoresbysund", "Atlantic/Azores"],
                },
                {
                  name: "Cape Verde Standard Time",
                  abbr: "CVST",
                  offset: -1,
                  isdst: !1,
                  text: "(UTC-01:00) Cape Verde Is.",
                  utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"],
                },
                {
                  name: "Morocco Standard Time",
                  abbr: "MDT",
                  offset: 1,
                  isdst: !0,
                  text: "(UTC) Casablanca",
                  utc: ["Africa/Casablanca", "Africa/El_Aaiun"],
                },
                {
                  name: "UTC",
                  abbr: "UTC",
                  offset: 0,
                  isdst: !1,
                  text: "(UTC) Coordinated Universal Time",
                  utc: ["America/Danmarkshavn", "Etc/GMT"],
                },
                {
                  name: "GMT Standard Time",
                  abbr: "GMT",
                  offset: 0,
                  isdst: !1,
                  text: "(UTC) Edinburgh, London",
                  utc: [
                    "Europe/Isle_of_Man",
                    "Europe/Guernsey",
                    "Europe/Jersey",
                    "Europe/London",
                  ],
                },
                {
                  name: "British Summer Time",
                  abbr: "BST",
                  offset: 1,
                  isdst: !0,
                  text: "(UTC+01:00) Edinburgh, London",
                  utc: [
                    "Europe/Isle_of_Man",
                    "Europe/Guernsey",
                    "Europe/Jersey",
                    "Europe/London",
                  ],
                },
                {
                  name: "GMT Standard Time",
                  abbr: "GDT",
                  offset: 1,
                  isdst: !0,
                  text: "(UTC) Dublin, Lisbon",
                  utc: [
                    "Atlantic/Canary",
                    "Atlantic/Faeroe",
                    "Atlantic/Madeira",
                    "Europe/Dublin",
                    "Europe/Lisbon",
                  ],
                },
                {
                  name: "Greenwich Standard Time",
                  abbr: "GST",
                  offset: 0,
                  isdst: !1,
                  text: "(UTC) Monrovia, Reykjavik",
                  utc: [
                    "Africa/Abidjan",
                    "Africa/Accra",
                    "Africa/Bamako",
                    "Africa/Banjul",
                    "Africa/Bissau",
                    "Africa/Conakry",
                    "Africa/Dakar",
                    "Africa/Freetown",
                    "Africa/Lome",
                    "Africa/Monrovia",
                    "Africa/Nouakchott",
                    "Africa/Ouagadougou",
                    "Africa/Sao_Tome",
                    "Atlantic/Reykjavik",
                    "Atlantic/St_Helena",
                  ],
                },
                {
                  name: "W. Europe Standard Time",
                  abbr: "WEDT",
                  offset: 2,
                  isdst: !0,
                  text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
                  utc: [
                    "Arctic/Longyearbyen",
                    "Europe/Amsterdam",
                    "Europe/Andorra",
                    "Europe/Berlin",
                    "Europe/Busingen",
                    "Europe/Gibraltar",
                    "Europe/Luxembourg",
                    "Europe/Malta",
                    "Europe/Monaco",
                    "Europe/Oslo",
                    "Europe/Rome",
                    "Europe/San_Marino",
                    "Europe/Stockholm",
                    "Europe/Vaduz",
                    "Europe/Vatican",
                    "Europe/Vienna",
                    "Europe/Zurich",
                  ],
                },
                {
                  name: "Central Europe Standard Time",
                  abbr: "CEDT",
                  offset: 2,
                  isdst: !0,
                  text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
                  utc: [
                    "Europe/Belgrade",
                    "Europe/Bratislava",
                    "Europe/Budapest",
                    "Europe/Ljubljana",
                    "Europe/Podgorica",
                    "Europe/Prague",
                    "Europe/Tirane",
                  ],
                },
                {
                  name: "Romance Standard Time",
                  abbr: "RDT",
                  offset: 2,
                  isdst: !0,
                  text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                  utc: [
                    "Africa/Ceuta",
                    "Europe/Brussels",
                    "Europe/Copenhagen",
                    "Europe/Madrid",
                    "Europe/Paris",
                  ],
                },
                {
                  name: "Central European Standard Time",
                  abbr: "CEDT",
                  offset: 2,
                  isdst: !0,
                  text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                  utc: [
                    "Europe/Sarajevo",
                    "Europe/Skopje",
                    "Europe/Warsaw",
                    "Europe/Zagreb",
                  ],
                },
                {
                  name: "W. Central Africa Standard Time",
                  abbr: "WCAST",
                  offset: 1,
                  isdst: !1,
                  text: "(UTC+01:00) West Central Africa",
                  utc: [
                    "Africa/Algiers",
                    "Africa/Bangui",
                    "Africa/Brazzaville",
                    "Africa/Douala",
                    "Africa/Kinshasa",
                    "Africa/Lagos",
                    "Africa/Libreville",
                    "Africa/Luanda",
                    "Africa/Malabo",
                    "Africa/Ndjamena",
                    "Africa/Niamey",
                    "Africa/Porto-Novo",
                    "Africa/Tunis",
                    "Etc/GMT-1",
                  ],
                },
                {
                  name: "Namibia Standard Time",
                  abbr: "NST",
                  offset: 1,
                  isdst: !1,
                  text: "(UTC+01:00) Windhoek",
                  utc: ["Africa/Windhoek"],
                },
                {
                  name: "GTB Standard Time",
                  abbr: "GDT",
                  offset: 3,
                  isdst: !0,
                  text: "(UTC+02:00) Athens, Bucharest",
                  utc: [
                    "Asia/Nicosia",
                    "Europe/Athens",
                    "Europe/Bucharest",
                    "Europe/Chisinau",
                  ],
                },
                {
                  name: "Middle East Standard Time",
                  abbr: "MEDT",
                  offset: 3,
                  isdst: !0,
                  text: "(UTC+02:00) Beirut",
                  utc: ["Asia/Beirut"],
                },
                {
                  name: "Egypt Standard Time",
                  abbr: "EST",
                  offset: 2,
                  isdst: !1,
                  text: "(UTC+02:00) Cairo",
                  utc: ["Africa/Cairo"],
                },
                {
                  name: "Syria Standard Time",
                  abbr: "SDT",
                  offset: 3,
                  isdst: !0,
                  text: "(UTC+02:00) Damascus",
                  utc: ["Asia/Damascus"],
                },
                {
                  name: "E. Europe Standard Time",
                  abbr: "EEDT",
                  offset: 3,
                  isdst: !0,
                  text: "(UTC+02:00) E. Europe",
                  utc: [
                    "Asia/Nicosia",
                    "Europe/Athens",
                    "Europe/Bucharest",
                    "Europe/Chisinau",
                    "Europe/Helsinki",
                    "Europe/Kiev",
                    "Europe/Mariehamn",
                    "Europe/Nicosia",
                    "Europe/Riga",
                    "Europe/Sofia",
                    "Europe/Tallinn",
                    "Europe/Uzhgorod",
                    "Europe/Vilnius",
                    "Europe/Zaporozhye",
                  ],
                },
                {
                  name: "South Africa Standard Time",
                  abbr: "SAST",
                  offset: 2,
                  isdst: !1,
                  text: "(UTC+02:00) Harare, Pretoria",
                  utc: [
                    "Africa/Blantyre",
                    "Africa/Bujumbura",
                    "Africa/Gaborone",
                    "Africa/Harare",
                    "Africa/Johannesburg",
                    "Africa/Kigali",
                    "Africa/Lubumbashi",
                    "Africa/Lusaka",
                    "Africa/Maputo",
                    "Africa/Maseru",
                    "Africa/Mbabane",
                    "Etc/GMT-2",
                  ],
                },
                {
                  name: "FLE Standard Time",
                  abbr: "FDT",
                  offset: 3,
                  isdst: !0,
                  text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
                  utc: [
                    "Europe/Helsinki",
                    "Europe/Kiev",
                    "Europe/Mariehamn",
                    "Europe/Riga",
                    "Europe/Sofia",
                    "Europe/Tallinn",
                    "Europe/Uzhgorod",
                    "Europe/Vilnius",
                    "Europe/Zaporozhye",
                  ],
                },
                {
                  name: "Turkey Standard Time",
                  abbr: "TDT",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+03:00) Istanbul",
                  utc: ["Europe/Istanbul"],
                },
                {
                  name: "Israel Standard Time",
                  abbr: "JDT",
                  offset: 3,
                  isdst: !0,
                  text: "(UTC+02:00) Jerusalem",
                  utc: ["Asia/Jerusalem"],
                },
                {
                  name: "Libya Standard Time",
                  abbr: "LST",
                  offset: 2,
                  isdst: !1,
                  text: "(UTC+02:00) Tripoli",
                  utc: ["Africa/Tripoli"],
                },
                {
                  name: "Jordan Standard Time",
                  abbr: "JST",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+03:00) Amman",
                  utc: ["Asia/Amman"],
                },
                {
                  name: "Arabic Standard Time",
                  abbr: "AST",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+03:00) Baghdad",
                  utc: ["Asia/Baghdad"],
                },
                {
                  name: "Kaliningrad Standard Time",
                  abbr: "KST",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+02:00) Kaliningrad",
                  utc: ["Europe/Kaliningrad"],
                },
                {
                  name: "Arab Standard Time",
                  abbr: "AST",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+03:00) Kuwait, Riyadh",
                  utc: [
                    "Asia/Aden",
                    "Asia/Bahrain",
                    "Asia/Kuwait",
                    "Asia/Qatar",
                    "Asia/Riyadh",
                  ],
                },
                {
                  name: "E. Africa Standard Time",
                  abbr: "EAST",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+03:00) Nairobi",
                  utc: [
                    "Africa/Addis_Ababa",
                    "Africa/Asmera",
                    "Africa/Dar_es_Salaam",
                    "Africa/Djibouti",
                    "Africa/Juba",
                    "Africa/Kampala",
                    "Africa/Khartoum",
                    "Africa/Mogadishu",
                    "Africa/Nairobi",
                    "Antarctica/Syowa",
                    "Etc/GMT-3",
                    "Indian/Antananarivo",
                    "Indian/Comoro",
                    "Indian/Mayotte",
                  ],
                },
                {
                  name: "Moscow Standard Time",
                  abbr: "MSK",
                  offset: 3,
                  isdst: !1,
                  text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
                  utc: [
                    "Europe/Kirov",
                    "Europe/Moscow",
                    "Europe/Simferopol",
                    "Europe/Volgograd",
                    "Europe/Minsk",
                  ],
                },
                {
                  name: "Samara Time",
                  abbr: "SAMT",
                  offset: 4,
                  isdst: !1,
                  text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
                  utc: [
                    "Europe/Astrakhan",
                    "Europe/Samara",
                    "Europe/Ulyanovsk",
                  ],
                },
                {
                  name: "Iran Standard Time",
                  abbr: "IDT",
                  offset: 4.5,
                  isdst: !0,
                  text: "(UTC+03:30) Tehran",
                  utc: ["Asia/Tehran"],
                },
                {
                  name: "Arabian Standard Time",
                  abbr: "AST",
                  offset: 4,
                  isdst: !1,
                  text: "(UTC+04:00) Abu Dhabi, Muscat",
                  utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"],
                },
                {
                  name: "Azerbaijan Standard Time",
                  abbr: "ADT",
                  offset: 5,
                  isdst: !0,
                  text: "(UTC+04:00) Baku",
                  utc: ["Asia/Baku"],
                },
                {
                  name: "Mauritius Standard Time",
                  abbr: "MST",
                  offset: 4,
                  isdst: !1,
                  text: "(UTC+04:00) Port Louis",
                  utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"],
                },
                {
                  name: "Georgian Standard Time",
                  abbr: "GET",
                  offset: 4,
                  isdst: !1,
                  text: "(UTC+04:00) Tbilisi",
                  utc: ["Asia/Tbilisi"],
                },
                {
                  name: "Caucasus Standard Time",
                  abbr: "CST",
                  offset: 4,
                  isdst: !1,
                  text: "(UTC+04:00) Yerevan",
                  utc: ["Asia/Yerevan"],
                },
                {
                  name: "Afghanistan Standard Time",
                  abbr: "AST",
                  offset: 4.5,
                  isdst: !1,
                  text: "(UTC+04:30) Kabul",
                  utc: ["Asia/Kabul"],
                },
                {
                  name: "West Asia Standard Time",
                  abbr: "WAST",
                  offset: 5,
                  isdst: !1,
                  text: "(UTC+05:00) Ashgabat, Tashkent",
                  utc: [
                    "Antarctica/Mawson",
                    "Asia/Aqtau",
                    "Asia/Aqtobe",
                    "Asia/Ashgabat",
                    "Asia/Dushanbe",
                    "Asia/Oral",
                    "Asia/Samarkand",
                    "Asia/Tashkent",
                    "Etc/GMT-5",
                    "Indian/Kerguelen",
                    "Indian/Maldives",
                  ],
                },
                {
                  name: "Yekaterinburg Time",
                  abbr: "YEKT",
                  offset: 5,
                  isdst: !1,
                  text: "(UTC+05:00) Yekaterinburg",
                  utc: ["Asia/Yekaterinburg"],
                },
                {
                  name: "Pakistan Standard Time",
                  abbr: "PKT",
                  offset: 5,
                  isdst: !1,
                  text: "(UTC+05:00) Islamabad, Karachi",
                  utc: ["Asia/Karachi"],
                },
                {
                  name: "India Standard Time",
                  abbr: "IST",
                  offset: 5.5,
                  isdst: !1,
                  text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                  utc: ["Asia/Kolkata"],
                },
                {
                  name: "Sri Lanka Standard Time",
                  abbr: "SLST",
                  offset: 5.5,
                  isdst: !1,
                  text: "(UTC+05:30) Sri Jayawardenepura",
                  utc: ["Asia/Colombo"],
                },
                {
                  name: "Nepal Standard Time",
                  abbr: "NST",
                  offset: 5.75,
                  isdst: !1,
                  text: "(UTC+05:45) Kathmandu",
                  utc: ["Asia/Kathmandu"],
                },
                {
                  name: "Central Asia Standard Time",
                  abbr: "CAST",
                  offset: 6,
                  isdst: !1,
                  text: "(UTC+06:00) Nur-Sultan (Astana)",
                  utc: [
                    "Antarctica/Vostok",
                    "Asia/Almaty",
                    "Asia/Bishkek",
                    "Asia/Qyzylorda",
                    "Asia/Urumqi",
                    "Etc/GMT-6",
                    "Indian/Chagos",
                  ],
                },
                {
                  name: "Bangladesh Standard Time",
                  abbr: "BST",
                  offset: 6,
                  isdst: !1,
                  text: "(UTC+06:00) Dhaka",
                  utc: ["Asia/Dhaka", "Asia/Thimphu"],
                },
                {
                  name: "Myanmar Standard Time",
                  abbr: "MST",
                  offset: 6.5,
                  isdst: !1,
                  text: "(UTC+06:30) Yangon (Rangoon)",
                  utc: ["Asia/Rangoon", "Indian/Cocos"],
                },
                {
                  name: "SE Asia Standard Time",
                  abbr: "SAST",
                  offset: 7,
                  isdst: !1,
                  text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                  utc: [
                    "Antarctica/Davis",
                    "Asia/Bangkok",
                    "Asia/Hovd",
                    "Asia/Jakarta",
                    "Asia/Phnom_Penh",
                    "Asia/Pontianak",
                    "Asia/Saigon",
                    "Asia/Vientiane",
                    "Etc/GMT-7",
                    "Indian/Christmas",
                  ],
                },
                {
                  name: "N. Central Asia Standard Time",
                  abbr: "NCAST",
                  offset: 7,
                  isdst: !1,
                  text: "(UTC+07:00) Novosibirsk",
                  utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"],
                },
                {
                  name: "China Standard Time",
                  abbr: "CST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
                  utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"],
                },
                {
                  name: "North Asia Standard Time",
                  abbr: "NAST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Krasnoyarsk",
                  utc: ["Asia/Krasnoyarsk"],
                },
                {
                  name: "Singapore Standard Time",
                  abbr: "MPST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Kuala Lumpur, Singapore",
                  utc: [
                    "Asia/Brunei",
                    "Asia/Kuala_Lumpur",
                    "Asia/Kuching",
                    "Asia/Makassar",
                    "Asia/Manila",
                    "Asia/Singapore",
                    "Etc/GMT-8",
                  ],
                },
                {
                  name: "W. Australia Standard Time",
                  abbr: "WAST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Perth",
                  utc: ["Antarctica/Casey", "Australia/Perth"],
                },
                {
                  name: "Taipei Standard Time",
                  abbr: "TST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Taipei",
                  utc: ["Asia/Taipei"],
                },
                {
                  name: "Ulaanbaatar Standard Time",
                  abbr: "UST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Ulaanbaatar",
                  utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"],
                },
                {
                  name: "North Asia East Standard Time",
                  abbr: "NAEST",
                  offset: 8,
                  isdst: !1,
                  text: "(UTC+08:00) Irkutsk",
                  utc: ["Asia/Irkutsk"],
                },
                {
                  name: "Japan Standard Time",
                  abbr: "JST",
                  offset: 9,
                  isdst: !1,
                  text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
                  utc: [
                    "Asia/Dili",
                    "Asia/Jayapura",
                    "Asia/Tokyo",
                    "Etc/GMT-9",
                    "Pacific/Palau",
                  ],
                },
                {
                  name: "Korea Standard Time",
                  abbr: "KST",
                  offset: 9,
                  isdst: !1,
                  text: "(UTC+09:00) Seoul",
                  utc: ["Asia/Pyongyang", "Asia/Seoul"],
                },
                {
                  name: "Cen. Australia Standard Time",
                  abbr: "CAST",
                  offset: 9.5,
                  isdst: !1,
                  text: "(UTC+09:30) Adelaide",
                  utc: ["Australia/Adelaide", "Australia/Broken_Hill"],
                },
                {
                  name: "AUS Central Standard Time",
                  abbr: "ACST",
                  offset: 9.5,
                  isdst: !1,
                  text: "(UTC+09:30) Darwin",
                  utc: ["Australia/Darwin"],
                },
                {
                  name: "E. Australia Standard Time",
                  abbr: "EAST",
                  offset: 10,
                  isdst: !1,
                  text: "(UTC+10:00) Brisbane",
                  utc: ["Australia/Brisbane", "Australia/Lindeman"],
                },
                {
                  name: "AUS Eastern Standard Time",
                  abbr: "AEST",
                  offset: 10,
                  isdst: !1,
                  text: "(UTC+10:00) Canberra, Melbourne, Sydney",
                  utc: ["Australia/Melbourne", "Australia/Sydney"],
                },
                {
                  name: "West Pacific Standard Time",
                  abbr: "WPST",
                  offset: 10,
                  isdst: !1,
                  text: "(UTC+10:00) Guam, Port Moresby",
                  utc: [
                    "Antarctica/DumontDUrville",
                    "Etc/GMT-10",
                    "Pacific/Guam",
                    "Pacific/Port_Moresby",
                    "Pacific/Saipan",
                    "Pacific/Truk",
                  ],
                },
                {
                  name: "Tasmania Standard Time",
                  abbr: "TST",
                  offset: 10,
                  isdst: !1,
                  text: "(UTC+10:00) Hobart",
                  utc: ["Australia/Currie", "Australia/Hobart"],
                },
                {
                  name: "Yakutsk Standard Time",
                  abbr: "YST",
                  offset: 9,
                  isdst: !1,
                  text: "(UTC+09:00) Yakutsk",
                  utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"],
                },
                {
                  name: "Central Pacific Standard Time",
                  abbr: "CPST",
                  offset: 11,
                  isdst: !1,
                  text: "(UTC+11:00) Solomon Is., New Caledonia",
                  utc: [
                    "Antarctica/Macquarie",
                    "Etc/GMT-11",
                    "Pacific/Efate",
                    "Pacific/Guadalcanal",
                    "Pacific/Kosrae",
                    "Pacific/Noumea",
                    "Pacific/Ponape",
                  ],
                },
                {
                  name: "Vladivostok Standard Time",
                  abbr: "VST",
                  offset: 11,
                  isdst: !1,
                  text: "(UTC+11:00) Vladivostok",
                  utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"],
                },
                {
                  name: "New Zealand Standard Time",
                  abbr: "NZST",
                  offset: 12,
                  isdst: !1,
                  text: "(UTC+12:00) Auckland, Wellington",
                  utc: ["Antarctica/McMurdo", "Pacific/Auckland"],
                },
                {
                  name: "UTC+12",
                  abbr: "U",
                  offset: 12,
                  isdst: !1,
                  text: "(UTC+12:00) Coordinated Universal Time+12",
                  utc: [
                    "Etc/GMT-12",
                    "Pacific/Funafuti",
                    "Pacific/Kwajalein",
                    "Pacific/Majuro",
                    "Pacific/Nauru",
                    "Pacific/Tarawa",
                    "Pacific/Wake",
                    "Pacific/Wallis",
                  ],
                },
                {
                  name: "Fiji Standard Time",
                  abbr: "FST",
                  offset: 12,
                  isdst: !1,
                  text: "(UTC+12:00) Fiji",
                  utc: ["Pacific/Fiji"],
                },
                {
                  name: "Magadan Standard Time",
                  abbr: "MST",
                  offset: 12,
                  isdst: !1,
                  text: "(UTC+12:00) Magadan",
                  utc: [
                    "Asia/Anadyr",
                    "Asia/Kamchatka",
                    "Asia/Magadan",
                    "Asia/Srednekolymsk",
                  ],
                },
                {
                  name: "Kamchatka Standard Time",
                  abbr: "KDT",
                  offset: 13,
                  isdst: !0,
                  text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
                  utc: ["Asia/Kamchatka"],
                },
                {
                  name: "Tonga Standard Time",
                  abbr: "TST",
                  offset: 13,
                  isdst: !1,
                  text: "(UTC+13:00) Nuku'alofa",
                  utc: [
                    "Etc/GMT-13",
                    "Pacific/Enderbury",
                    "Pacific/Fakaofo",
                    "Pacific/Tongatapu",
                  ],
                },
                {
                  name: "Samoa Standard Time",
                  abbr: "SST",
                  offset: 13,
                  isdst: !1,
                  text: "(UTC+13:00) Samoa",
                  utc: ["Pacific/Apia"],
                },
              ],
              profession: [
                "Airline Pilot",
                "Academic Team",
                "Accountant",
                "Account Executive",
                "Actor",
                "Actuary",
                "Acquisition Analyst",
                "Administrative Asst.",
                "Administrative Analyst",
                "Administrator",
                "Advertising Director",
                "Aerospace Engineer",
                "Agent",
                "Agricultural Inspector",
                "Agricultural Scientist",
                "Air Traffic Controller",
                "Animal Trainer",
                "Anthropologist",
                "Appraiser",
                "Architect",
                "Art Director",
                "Artist",
                "Astronomer",
                "Athletic Coach",
                "Auditor",
                "Author",
                "Baker",
                "Banker",
                "Bankruptcy Attorney",
                "Benefits Manager",
                "Biologist",
                "Bio-feedback Specialist",
                "Biomedical Engineer",
                "Biotechnical Researcher",
                "Broadcaster",
                "Broker",
                "Building Manager",
                "Building Contractor",
                "Building Inspector",
                "Business Analyst",
                "Business Planner",
                "Business Manager",
                "Buyer",
                "Call Center Manager",
                "Career Counselor",
                "Cash Manager",
                "Ceramic Engineer",
                "Chief Executive Officer",
                "Chief Operation Officer",
                "Chef",
                "Chemical Engineer",
                "Chemist",
                "Child Care Manager",
                "Chief Medical Officer",
                "Chiropractor",
                "Cinematographer",
                "City Housing Manager",
                "City Manager",
                "Civil Engineer",
                "Claims Manager",
                "Clinical Research Assistant",
                "Collections Manager",
                "Compliance Manager",
                "Comptroller",
                "Computer Manager",
                "Commercial Artist",
                "Communications Affairs Director",
                "Communications Director",
                "Communications Engineer",
                "Compensation Analyst",
                "Computer Programmer",
                "Computer Ops. Manager",
                "Computer Engineer",
                "Computer Operator",
                "Computer Graphics Specialist",
                "Construction Engineer",
                "Construction Manager",
                "Consultant",
                "Consumer Relations Manager",
                "Contract Administrator",
                "Copyright Attorney",
                "Copywriter",
                "Corporate Planner",
                "Corrections Officer",
                "Cosmetologist",
                "Credit Analyst",
                "Cruise Director",
                "Chief Information Officer",
                "Chief Technology Officer",
                "Customer Service Manager",
                "Cryptologist",
                "Dancer",
                "Data Security Manager",
                "Database Manager",
                "Day Care Instructor",
                "Dentist",
                "Designer",
                "Design Engineer",
                "Desktop Publisher",
                "Developer",
                "Development Officer",
                "Diamond Merchant",
                "Dietitian",
                "Direct Marketer",
                "Director",
                "Distribution Manager",
                "Diversity Manager",
                "Economist",
                "EEO Compliance Manager",
                "Editor",
                "Education Adminator",
                "Electrical Engineer",
                "Electro Optical Engineer",
                "Electronics Engineer",
                "Embassy Management",
                "Employment Agent",
                "Engineer Technician",
                "Entrepreneur",
                "Environmental Analyst",
                "Environmental Attorney",
                "Environmental Engineer",
                "Environmental Specialist",
                "Escrow Officer",
                "Estimator",
                "Executive Assistant",
                "Executive Director",
                "Executive Recruiter",
                "Facilities Manager",
                "Family Counselor",
                "Fashion Events Manager",
                "Fashion Merchandiser",
                "Fast Food Manager",
                "Film Producer",
                "Film Production Assistant",
                "Financial Analyst",
                "Financial Planner",
                "Financier",
                "Fine Artist",
                "Wildlife Specialist",
                "Fitness Consultant",
                "Flight Attendant",
                "Flight Engineer",
                "Floral Designer",
                "Food & Beverage Director",
                "Food Service Manager",
                "Forestry Technician",
                "Franchise Management",
                "Franchise Sales",
                "Fraud Investigator",
                "Freelance Writer",
                "Fund Raiser",
                "General Manager",
                "Geologist",
                "General Counsel",
                "Geriatric Specialist",
                "Gerontologist",
                "Glamour Photographer",
                "Golf Club Manager",
                "Gourmet Chef",
                "Graphic Designer",
                "Grounds Keeper",
                "Hazardous Waste Manager",
                "Health Care Manager",
                "Health Therapist",
                "Health Service Administrator",
                "Hearing Officer",
                "Home Economist",
                "Horticulturist",
                "Hospital Administrator",
                "Hotel Manager",
                "Human Resources Manager",
                "Importer",
                "Industrial Designer",
                "Industrial Engineer",
                "Information Director",
                "Inside Sales",
                "Insurance Adjuster",
                "Interior Decorator",
                "Internal Controls Director",
                "International Acct.",
                "International Courier",
                "International Lawyer",
                "Interpreter",
                "Investigator",
                "Investment Banker",
                "Investment Manager",
                "IT Architect",
                "IT Project Manager",
                "IT Systems Analyst",
                "Jeweler",
                "Joint Venture Manager",
                "Journalist",
                "Labor Negotiator",
                "Labor Organizer",
                "Labor Relations Manager",
                "Lab Services Director",
                "Lab Technician",
                "Land Developer",
                "Landscape Architect",
                "Law Enforcement Officer",
                "Lawyer",
                "Lead Software Engineer",
                "Lead Software Test Engineer",
                "Leasing Manager",
                "Legal Secretary",
                "Library Manager",
                "Litigation Attorney",
                "Loan Officer",
                "Lobbyist",
                "Logistics Manager",
                "Maintenance Manager",
                "Management Consultant",
                "Managed Care Director",
                "Managing Partner",
                "Manufacturing Director",
                "Manpower Planner",
                "Marine Biologist",
                "Market Res. Analyst",
                "Marketing Director",
                "Materials Manager",
                "Mathematician",
                "Membership Chairman",
                "Mechanic",
                "Mechanical Engineer",
                "Media Buyer",
                "Medical Investor",
                "Medical Secretary",
                "Medical Technician",
                "Mental Health Counselor",
                "Merchandiser",
                "Metallurgical Engineering",
                "Meteorologist",
                "Microbiologist",
                "MIS Manager",
                "Motion Picture Director",
                "Multimedia Director",
                "Musician",
                "Network Administrator",
                "Network Specialist",
                "Network Operator",
                "New Product Manager",
                "Novelist",
                "Nuclear Engineer",
                "Nuclear Specialist",
                "Nutritionist",
                "Nursing Administrator",
                "Occupational Therapist",
                "Oceanographer",
                "Office Manager",
                "Operations Manager",
                "Operations Research Director",
                "Optical Technician",
                "Optometrist",
                "Organizational Development Manager",
                "Outplacement Specialist",
                "Paralegal",
                "Park Ranger",
                "Patent Attorney",
                "Payroll Specialist",
                "Personnel Specialist",
                "Petroleum Engineer",
                "Pharmacist",
                "Photographer",
                "Physical Therapist",
                "Physician",
                "Physician Assistant",
                "Physicist",
                "Planning Director",
                "Podiatrist",
                "Political Analyst",
                "Political Scientist",
                "Politician",
                "Portfolio Manager",
                "Preschool Management",
                "Preschool Teacher",
                "Principal",
                "Private Banker",
                "Private Investigator",
                "Probation Officer",
                "Process Engineer",
                "Producer",
                "Product Manager",
                "Product Engineer",
                "Production Engineer",
                "Production Planner",
                "Professional Athlete",
                "Professional Coach",
                "Professor",
                "Project Engineer",
                "Project Manager",
                "Program Manager",
                "Property Manager",
                "Public Administrator",
                "Public Safety Director",
                "PR Specialist",
                "Publisher",
                "Purchasing Agent",
                "Publishing Director",
                "Quality Assurance Specialist",
                "Quality Control Engineer",
                "Quality Control Inspector",
                "Radiology Manager",
                "Railroad Engineer",
                "Real Estate Broker",
                "Recreational Director",
                "Recruiter",
                "Redevelopment Specialist",
                "Regulatory Affairs Manager",
                "Registered Nurse",
                "Rehabilitation Counselor",
                "Relocation Manager",
                "Reporter",
                "Research Specialist",
                "Restaurant Manager",
                "Retail Store Manager",
                "Risk Analyst",
                "Safety Engineer",
                "Sales Engineer",
                "Sales Trainer",
                "Sales Promotion Manager",
                "Sales Representative",
                "Sales Manager",
                "Service Manager",
                "Sanitation Engineer",
                "Scientific Programmer",
                "Scientific Writer",
                "Securities Analyst",
                "Security Consultant",
                "Security Director",
                "Seminar Presenter",
                "Ship's Officer",
                "Singer",
                "Social Director",
                "Social Program Planner",
                "Social Research",
                "Social Scientist",
                "Social Worker",
                "Sociologist",
                "Software Developer",
                "Software Engineer",
                "Software Test Engineer",
                "Soil Scientist",
                "Special Events Manager",
                "Special Education Teacher",
                "Special Projects Director",
                "Speech Pathologist",
                "Speech Writer",
                "Sports Event Manager",
                "Statistician",
                "Store Manager",
                "Strategic Alliance Director",
                "Strategic Planning Director",
                "Stress Reduction Specialist",
                "Stockbroker",
                "Surveyor",
                "Structural Engineer",
                "Superintendent",
                "Supply Chain Director",
                "System Engineer",
                "Systems Analyst",
                "Systems Programmer",
                "System Administrator",
                "Tax Specialist",
                "Teacher",
                "Technical Support Specialist",
                "Technical Illustrator",
                "Technical Writer",
                "Technology Director",
                "Telecom Analyst",
                "Telemarketer",
                "Theatrical Director",
                "Title Examiner",
                "Tour Escort",
                "Tour Guide Director",
                "Traffic Manager",
                "Trainer Translator",
                "Transportation Manager",
                "Travel Agent",
                "Treasurer",
                "TV Programmer",
                "Underwriter",
                "Union Representative",
                "University Administrator",
                "University Dean",
                "Urban Planner",
                "Veterinarian",
                "Vendor Relations Director",
                "Viticulturist",
                "Warehouse Manager",
              ],
              animals: {
                ocean: [
                  "Acantharea",
                  "Anemone",
                  "Angelfish King",
                  "Ahi Tuna",
                  "Albacore",
                  "American Oyster",
                  "Anchovy",
                  "Armored Snail",
                  "Arctic Char",
                  "Atlantic Bluefin Tuna",
                  "Atlantic Cod",
                  "Atlantic Goliath Grouper",
                  "Atlantic Trumpetfish",
                  "Atlantic Wolffish",
                  "Baleen Whale",
                  "Banded Butterflyfish",
                  "Banded Coral Shrimp",
                  "Banded Sea Krait",
                  "Barnacle",
                  "Barndoor Skate",
                  "Barracuda",
                  "Basking Shark",
                  "Bass",
                  "Beluga Whale",
                  "Bluebanded Goby",
                  "Bluehead Wrasse",
                  "Bluefish",
                  "Bluestreak Cleaner-Wrasse",
                  "Blue Marlin",
                  "Blue Shark",
                  "Blue Spiny Lobster",
                  "Blue Tang",
                  "Blue Whale",
                  "Broadclub Cuttlefish",
                  "Bull Shark",
                  "Chambered Nautilus",
                  "Chilean Basket Star",
                  "Chilean Jack Mackerel",
                  "Chinook Salmon",
                  "Christmas Tree Worm",
                  "Clam",
                  "Clown Anemonefish",
                  "Clown Triggerfish",
                  "Cod",
                  "Coelacanth",
                  "Cockscomb Cup Coral",
                  "Common Fangtooth",
                  "Conch",
                  "Cookiecutter Shark",
                  "Copepod",
                  "Coral",
                  "Corydoras",
                  "Cownose Ray",
                  "Crab",
                  "Crown-of-Thorns Starfish",
                  "Cushion Star",
                  "Cuttlefish",
                  "California Sea Otters",
                  "Dolphin",
                  "Dolphinfish",
                  "Dory",
                  "Devil Fish",
                  "Dugong",
                  "Dumbo Octopus",
                  "Dungeness Crab",
                  "Eccentric Sand Dollar",
                  "Edible Sea Cucumber",
                  "Eel",
                  "Elephant Seal",
                  "Elkhorn Coral",
                  "Emperor Shrimp",
                  "Estuarine Crocodile",
                  "Fathead Sculpin",
                  "Fiddler Crab",
                  "Fin Whale",
                  "Flameback",
                  "Flamingo Tongue Snail",
                  "Flashlight Fish",
                  "Flatback Turtle",
                  "Flatfish",
                  "Flying Fish",
                  "Flounder",
                  "Fluke",
                  "French Angelfish",
                  "Frilled Shark",
                  "Fugu (also called Pufferfish)",
                  "Gar",
                  "Geoduck",
                  "Giant Barrel Sponge",
                  "Giant Caribbean Sea Anemone",
                  "Giant Clam",
                  "Giant Isopod",
                  "Giant Kingfish",
                  "Giant Oarfish",
                  "Giant Pacific Octopus",
                  "Giant Pyrosome",
                  "Giant Sea Star",
                  "Giant Squid",
                  "Glowing Sucker Octopus",
                  "Giant Tube Worm",
                  "Goblin Shark",
                  "Goosefish",
                  "Great White Shark",
                  "Greenland Shark",
                  "Grey Atlantic Seal",
                  "Grouper",
                  "Grunion",
                  "Guineafowl Puffer",
                  "Haddock",
                  "Hake",
                  "Halibut",
                  "Hammerhead Shark",
                  "Hapuka",
                  "Harbor Porpoise",
                  "Harbor Seal",
                  "Hatchetfish",
                  "Hawaiian Monk Seal",
                  "Hawksbill Turtle",
                  "Hector's Dolphin",
                  "Hermit Crab",
                  "Herring",
                  "Hoki",
                  "Horn Shark",
                  "Horseshoe Crab",
                  "Humpback Anglerfish",
                  "Humpback Whale",
                  "Icefish",
                  "Imperator Angelfish",
                  "Irukandji Jellyfish",
                  "Isopod",
                  "Ivory Bush Coral",
                  "Japanese Spider Crab",
                  "Jellyfish",
                  "John Dory",
                  "Juan Fernandez Fur Seal",
                  "Killer Whale",
                  "Kiwa Hirsuta",
                  "Krill",
                  "Lagoon Triggerfish",
                  "Lamprey",
                  "Leafy Seadragon",
                  "Leopard Seal",
                  "Limpet",
                  "Ling",
                  "Lionfish",
                  "Lions Mane Jellyfish",
                  "Lobe Coral",
                  "Lobster",
                  "Loggerhead Turtle",
                  "Longnose Sawshark",
                  "Longsnout Seahorse",
                  "Lophelia Coral",
                  "Marrus Orthocanna",
                  "Manatee",
                  "Manta Ray",
                  "Marlin",
                  "Megamouth Shark",
                  "Mexican Lookdown",
                  "Mimic Octopus",
                  "Moon Jelly",
                  "Mollusk",
                  "Monkfish",
                  "Moray Eel",
                  "Mullet",
                  "Mussel",
                  "Megaladon",
                  "Napoleon Wrasse",
                  "Nassau Grouper",
                  "Narwhal",
                  "Nautilus",
                  "Needlefish",
                  "Northern Seahorse",
                  "North Atlantic Right Whale",
                  "Northern Red Snapper",
                  "Norway Lobster",
                  "Nudibranch",
                  "Nurse Shark",
                  "Oarfish",
                  "Ocean Sunfish",
                  "Oceanic Whitetip Shark",
                  "Octopus",
                  "Olive Sea Snake",
                  "Orange Roughy",
                  "Ostracod",
                  "Otter",
                  "Oyster",
                  "Pacific Angelshark",
                  "Pacific Blackdragon",
                  "Pacific Halibut",
                  "Pacific Sardine",
                  "Pacific Sea Nettle Jellyfish",
                  "Pacific White Sided Dolphin",
                  "Pantropical Spotted Dolphin",
                  "Patagonian Toothfish",
                  "Peacock Mantis Shrimp",
                  "Pelagic Thresher Shark",
                  "Penguin",
                  "Peruvian Anchoveta",
                  "Pilchard",
                  "Pink Salmon",
                  "Pinniped",
                  "Plankton",
                  "Porpoise",
                  "Polar Bear",
                  "Portuguese Man o' War",
                  "Pycnogonid Sea Spider",
                  "Quahog",
                  "Queen Angelfish",
                  "Queen Conch",
                  "Queen Parrotfish",
                  "Queensland Grouper",
                  "Ragfish",
                  "Ratfish",
                  "Rattail Fish",
                  "Ray",
                  "Red Drum",
                  "Red King Crab",
                  "Ringed Seal",
                  "Risso's Dolphin",
                  "Ross Seals",
                  "Sablefish",
                  "Salmon",
                  "Sand Dollar",
                  "Sandbar Shark",
                  "Sawfish",
                  "Sarcastic Fringehead",
                  "Scalloped Hammerhead Shark",
                  "Seahorse",
                  "Sea Cucumber",
                  "Sea Lion",
                  "Sea Urchin",
                  "Seal",
                  "Shark",
                  "Shortfin Mako Shark",
                  "Shovelnose Guitarfish",
                  "Shrimp",
                  "Silverside Fish",
                  "Skipjack Tuna",
                  "Slender Snipe Eel",
                  "Smalltooth Sawfish",
                  "Smelts",
                  "Sockeye Salmon",
                  "Southern Stingray",
                  "Sponge",
                  "Spotted Porcupinefish",
                  "Spotted Dolphin",
                  "Spotted Eagle Ray",
                  "Spotted Moray",
                  "Squid",
                  "Squidworm",
                  "Starfish",
                  "Stickleback",
                  "Stonefish",
                  "Stoplight Loosejaw",
                  "Sturgeon",
                  "Swordfish",
                  "Tan Bristlemouth",
                  "Tasseled Wobbegong",
                  "Terrible Claw Lobster",
                  "Threespot Damselfish",
                  "Tiger Prawn",
                  "Tiger Shark",
                  "Tilefish",
                  "Toadfish",
                  "Tropical Two-Wing Flyfish",
                  "Tuna",
                  "Umbrella Squid",
                  "Velvet Crab",
                  "Venus Flytrap Sea Anemone",
                  "Vigtorniella Worm",
                  "Viperfish",
                  "Vampire Squid",
                  "Vaquita",
                  "Wahoo",
                  "Walrus",
                  "West Indian Manatee",
                  "Whale",
                  "Whale Shark",
                  "Whiptail Gulper",
                  "White-Beaked Dolphin",
                  "White-Ring Garden Eel",
                  "White Shrimp",
                  "Wobbegong",
                  "Wrasse",
                  "Wreckfish",
                  "Xiphosura",
                  "Yellowtail Damselfish",
                  "Yelloweye Rockfish",
                  "Yellow Cup Black Coral",
                  "Yellow Tube Sponge",
                  "Yellowfin Tuna",
                  "Zebrashark",
                  "Zooplankton",
                ],
                desert: [
                  "Aardwolf",
                  "Addax",
                  "African Wild Ass",
                  "Ant",
                  "Antelope",
                  "Armadillo",
                  "Baboon",
                  "Badger",
                  "Bat",
                  "Bearded Dragon",
                  "Beetle",
                  "Bird",
                  "Black-footed Cat",
                  "Boa",
                  "Brown Bear",
                  "Bustard",
                  "Butterfly",
                  "Camel",
                  "Caracal",
                  "Caracara",
                  "Caterpillar",
                  "Centipede",
                  "Cheetah",
                  "Chipmunk",
                  "Chuckwalla",
                  "Climbing Mouse",
                  "Coati",
                  "Cobra",
                  "Cotton Rat",
                  "Cougar",
                  "Courser",
                  "Crane Fly",
                  "Crow",
                  "Dassie Rat",
                  "Dove",
                  "Dunnart",
                  "Eagle",
                  "Echidna",
                  "Elephant",
                  "Emu",
                  "Falcon",
                  "Fly",
                  "Fox",
                  "Frogmouth",
                  "Gecko",
                  "Geoffroy's Cat",
                  "Gerbil",
                  "Grasshopper",
                  "Guanaco",
                  "Gundi",
                  "Hamster",
                  "Hawk",
                  "Hedgehog",
                  "Hyena",
                  "Hyrax",
                  "Jackal",
                  "Kangaroo",
                  "Kangaroo Rat",
                  "Kestrel",
                  "Kowari",
                  "Kultarr",
                  "Leopard",
                  "Lion",
                  "Macaw",
                  "Meerkat",
                  "Mouse",
                  "Oryx",
                  "Ostrich",
                  "Owl",
                  "Pronghorn",
                  "Python",
                  "Rabbit",
                  "Raccoon",
                  "Rattlesnake",
                  "Rhinoceros",
                  "Sand Cat",
                  "Spectacled Bear",
                  "Spiny Mouse",
                  "Starling",
                  "Stick Bug",
                  "Tarantula",
                  "Tit",
                  "Toad",
                  "Tortoise",
                  "Tyrant Flycatcher",
                  "Viper",
                  "Vulture",
                  "Waxwing",
                  "Xerus",
                  "Zebra",
                ],
                grassland: [
                  "Aardvark",
                  "Aardwolf",
                  "Accentor",
                  "African Buffalo",
                  "African Wild Dog",
                  "Alpaca",
                  "Anaconda",
                  "Ant",
                  "Anteater",
                  "Antelope",
                  "Armadillo",
                  "Baboon",
                  "Badger",
                  "Bandicoot",
                  "Barbet",
                  "Bat",
                  "Bee",
                  "Bee-eater",
                  "Beetle",
                  "Bird",
                  "Bison",
                  "Black-footed Cat",
                  "Black-footed Ferret",
                  "Bluebird",
                  "Boa",
                  "Bowerbird",
                  "Brown Bear",
                  "Bush Dog",
                  "Bushshrike",
                  "Bustard",
                  "Butterfly",
                  "Buzzard",
                  "Caracal",
                  "Caracara",
                  "Cardinal",
                  "Caterpillar",
                  "Cheetah",
                  "Chipmunk",
                  "Civet",
                  "Climbing Mouse",
                  "Clouded Leopard",
                  "Coati",
                  "Cobra",
                  "Cockatoo",
                  "Cockroach",
                  "Common Genet",
                  "Cotton Rat",
                  "Cougar",
                  "Courser",
                  "Coyote",
                  "Crane",
                  "Crane Fly",
                  "Cricket",
                  "Crow",
                  "Culpeo",
                  "Death Adder",
                  "Deer",
                  "Deer Mouse",
                  "Dingo",
                  "Dinosaur",
                  "Dove",
                  "Drongo",
                  "Duck",
                  "Duiker",
                  "Dunnart",
                  "Eagle",
                  "Echidna",
                  "Elephant",
                  "Elk",
                  "Emu",
                  "Falcon",
                  "Finch",
                  "Flea",
                  "Fly",
                  "Flying Frog",
                  "Fox",
                  "Frog",
                  "Frogmouth",
                  "Garter Snake",
                  "Gazelle",
                  "Gecko",
                  "Geoffroy's Cat",
                  "Gerbil",
                  "Giant Tortoise",
                  "Giraffe",
                  "Grasshopper",
                  "Grison",
                  "Groundhog",
                  "Grouse",
                  "Guanaco",
                  "Guinea Pig",
                  "Hamster",
                  "Harrier",
                  "Hartebeest",
                  "Hawk",
                  "Hedgehog",
                  "Helmetshrike",
                  "Hippopotamus",
                  "Hornbill",
                  "Hyena",
                  "Hyrax",
                  "Impala",
                  "Jackal",
                  "Jaguar",
                  "Jaguarundi",
                  "Kangaroo",
                  "Kangaroo Rat",
                  "Kestrel",
                  "Kultarr",
                  "Ladybug",
                  "Leopard",
                  "Lion",
                  "Macaw",
                  "Meerkat",
                  "Mouse",
                  "Newt",
                  "Oryx",
                  "Ostrich",
                  "Owl",
                  "Pangolin",
                  "Pheasant",
                  "Prairie Dog",
                  "Pronghorn",
                  "Przewalski's Horse",
                  "Python",
                  "Quoll",
                  "Rabbit",
                  "Raven",
                  "Rhinoceros",
                  "Shelduck",
                  "Sloth Bear",
                  "Spectacled Bear",
                  "Squirrel",
                  "Starling",
                  "Stick Bug",
                  "Tamandua",
                  "Tasmanian Devil",
                  "Thornbill",
                  "Thrush",
                  "Toad",
                  "Tortoise",
                ],
                forest: [
                  "Agouti",
                  "Anaconda",
                  "Anoa",
                  "Ant",
                  "Anteater",
                  "Antelope",
                  "Armadillo",
                  "Asian Black Bear",
                  "Aye-aye",
                  "Babirusa",
                  "Baboon",
                  "Badger",
                  "Bandicoot",
                  "Banteng",
                  "Barbet",
                  "Basilisk",
                  "Bat",
                  "Bearded Dragon",
                  "Bee",
                  "Bee-eater",
                  "Beetle",
                  "Bettong",
                  "Binturong",
                  "Bird-of-paradise",
                  "Bongo",
                  "Bowerbird",
                  "Bulbul",
                  "Bush Dog",
                  "Bushbaby",
                  "Bushshrike",
                  "Butterfly",
                  "Buzzard",
                  "Caecilian",
                  "Cardinal",
                  "Cassowary",
                  "Caterpillar",
                  "Centipede",
                  "Chameleon",
                  "Chimpanzee",
                  "Cicada",
                  "Civet",
                  "Clouded Leopard",
                  "Coati",
                  "Cobra",
                  "Cockatoo",
                  "Cockroach",
                  "Colugo",
                  "Cotinga",
                  "Cotton Rat",
                  "Cougar",
                  "Crane Fly",
                  "Cricket",
                  "Crocodile",
                  "Crow",
                  "Cuckoo",
                  "Cuscus",
                  "Death Adder",
                  "Deer",
                  "Dhole",
                  "Dingo",
                  "Dinosaur",
                  "Drongo",
                  "Duck",
                  "Duiker",
                  "Eagle",
                  "Echidna",
                  "Elephant",
                  "Finch",
                  "Flat-headed Cat",
                  "Flea",
                  "Flowerpecker",
                  "Fly",
                  "Flying Frog",
                  "Fossa",
                  "Frog",
                  "Frogmouth",
                  "Gaur",
                  "Gecko",
                  "Gorilla",
                  "Grison",
                  "Hawaiian Honeycreeper",
                  "Hawk",
                  "Hedgehog",
                  "Helmetshrike",
                  "Hornbill",
                  "Hyrax",
                  "Iguana",
                  "Jackal",
                  "Jaguar",
                  "Jaguarundi",
                  "Kestrel",
                  "Ladybug",
                  "Lemur",
                  "Leopard",
                  "Lion",
                  "Macaw",
                  "Mandrill",
                  "Margay",
                  "Monkey",
                  "Mouse",
                  "Mouse Deer",
                  "Newt",
                  "Okapi",
                  "Old World Flycatcher",
                  "Orangutan",
                  "Owl",
                  "Pangolin",
                  "Peafowl",
                  "Pheasant",
                  "Possum",
                  "Python",
                  "Quokka",
                  "Rabbit",
                  "Raccoon",
                  "Red Panda",
                  "Red River Hog",
                  "Rhinoceros",
                  "Sloth Bear",
                  "Spectacled Bear",
                  "Squirrel",
                  "Starling",
                  "Stick Bug",
                  "Sun Bear",
                  "Tamandua",
                  "Tamarin",
                  "Tapir",
                  "Tarantula",
                  "Thrush",
                  "Tiger",
                  "Tit",
                  "Toad",
                  "Tortoise",
                  "Toucan",
                  "Trogon",
                  "Trumpeter",
                  "Turaco",
                  "Turtle",
                  "Tyrant Flycatcher",
                  "Viper",
                  "Vulture",
                  "Wallaby",
                  "Warbler",
                  "Wasp",
                  "Waxwing",
                  "Weaver",
                  "Weaver-finch",
                  "Whistler",
                  "White-eye",
                  "Whydah",
                  "Woodswallow",
                  "Worm",
                  "Wren",
                  "Xenops",
                  "Yellowjacket",
                  "Accentor",
                  "African Buffalo",
                  "American Black Bear",
                  "Anole",
                  "Bird",
                  "Bison",
                  "Boa",
                  "Brown Bear",
                  "Chipmunk",
                  "Common Genet",
                  "Copperhead",
                  "Coyote",
                  "Deer Mouse",
                  "Dormouse",
                  "Elk",
                  "Emu",
                  "Fisher",
                  "Fox",
                  "Garter Snake",
                  "Giant Panda",
                  "Giant Tortoise",
                  "Groundhog",
                  "Grouse",
                  "Guanaco",
                  "Himalayan Tahr",
                  "Kangaroo",
                  "Koala",
                  "Numbat",
                  "Quoll",
                  "Raccoon dog",
                  "Tasmanian Devil",
                  "Thornbill",
                  "Turkey",
                  "Vole",
                  "Weasel",
                  "Wildcat",
                  "Wolf",
                  "Wombat",
                  "Woodchuck",
                  "Woodpecker",
                ],
                farm: [
                  "Alpaca",
                  "Buffalo",
                  "Banteng",
                  "Cow",
                  "Cat",
                  "Chicken",
                  "Carp",
                  "Camel",
                  "Donkey",
                  "Dog",
                  "Duck",
                  "Emu",
                  "Goat",
                  "Gayal",
                  "Guinea",
                  "Goose",
                  "Horse",
                  "Honey",
                  "Llama",
                  "Pig",
                  "Pigeon",
                  "Rhea",
                  "Rabbit",
                  "Sheep",
                  "Silkworm",
                  "Turkey",
                  "Yak",
                  "Zebu",
                ],
                pet: [
                  "Bearded Dragon",
                  "Birds",
                  "Burro",
                  "Cats",
                  "Chameleons",
                  "Chickens",
                  "Chinchillas",
                  "Chinese Water Dragon",
                  "Cows",
                  "Dogs",
                  "Donkey",
                  "Ducks",
                  "Ferrets",
                  "Fish",
                  "Geckos",
                  "Geese",
                  "Gerbils",
                  "Goats",
                  "Guinea Fowl",
                  "Guinea Pigs",
                  "Hamsters",
                  "Hedgehogs",
                  "Horses",
                  "Iguanas",
                  "Llamas",
                  "Lizards",
                  "Mice",
                  "Mule",
                  "Peafowl",
                  "Pigs and Hogs",
                  "Pigeons",
                  "Ponies",
                  "Pot Bellied Pig",
                  "Rabbits",
                  "Rats",
                  "Sheep",
                  "Skinks",
                  "Snakes",
                  "Stick Insects",
                  "Sugar Gliders",
                  "Tarantula",
                  "Turkeys",
                  "Turtles",
                ],
                zoo: [
                  "Aardvark",
                  "African Wild Dog",
                  "Aldabra Tortoise",
                  "American Alligator",
                  "American Bison",
                  "Amur Tiger",
                  "Anaconda",
                  "Andean Condor",
                  "Asian Elephant",
                  "Baby Doll Sheep",
                  "Bald Eagle",
                  "Barred Owl",
                  "Blue Iguana",
                  "Boer Goat",
                  "California Sea Lion",
                  "Caribbean Flamingo",
                  "Chinchilla",
                  "Collared Lemur",
                  "Coquerel's Sifaka",
                  "Cuban Amazon Parrot",
                  "Ebony Langur",
                  "Fennec Fox",
                  "Fossa",
                  "Gelada",
                  "Giant Anteater",
                  "Giraffe",
                  "Gorilla",
                  "Grizzly Bear",
                  "Henkel's Leaf-tailed Gecko",
                  "Indian Gharial",
                  "Indian Rhinoceros",
                  "King Cobra",
                  "King Vulture",
                  "Komodo Dragon",
                  "Linne's Two-toed Sloth",
                  "Lion",
                  "Little Penguin",
                  "Madagascar Tree Boa",
                  "Magellanic Penguin",
                  "Malayan Tapir",
                  "Malayan Tiger",
                  "Matschies Tree Kangaroo",
                  "Mini Donkey",
                  "Monarch Butterfly",
                  "Nile crocodile",
                  "North American Porcupine",
                  "Nubian Ibex",
                  "Okapi",
                  "Poison Dart Frog",
                  "Polar Bear",
                  "Pygmy Marmoset",
                  "Radiated Tortoise",
                  "Red Panda",
                  "Red Ruffed Lemur",
                  "Ring-tailed Lemur",
                  "Ring-tailed Mongoose",
                  "Rock Hyrax",
                  "Small Clawed Asian Otter",
                  "Snow Leopard",
                  "Snowy Owl",
                  "Southern White-faced Owl",
                  "Southern White Rhinocerous",
                  "Squirrel Monkey",
                  "Tufted Puffin",
                  "White Cheeked Gibbon",
                  "White-throated Bee Eater",
                  "Zebra",
                ],
              },
              primes: [
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
                61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
                131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
                197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269,
                271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
                353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431,
                433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
                509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599,
                601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673,
                677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761,
                769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857,
                859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947,
                953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031,
                1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093,
                1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171,
                1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237,
                1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303,
                1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409,
                1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471,
                1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543,
                1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607,
                1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669,
                1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753,
                1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847,
                1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913,
                1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999,
                2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081,
                2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141,
                2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239,
                2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309,
                2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381,
                2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447,
                2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549,
                2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647,
                2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699,
                2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767,
                2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843,
                2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927,
                2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019,
                3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109,
                3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203,
                3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299,
                3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359,
                3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457,
                3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529,
                3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593,
                3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673,
                3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761,
                3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847,
                3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919,
                3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007,
                4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091,
                4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159,
                4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253,
                4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339,
                4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441,
                4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517,
                4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603,
                4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679,
                4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787,
                4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877,
                4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957,
                4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021,
                5023, 5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107,
                5113, 5119, 5147, 5153, 5167, 5171, 5179, 5189, 5197, 5209,
                5227, 5231, 5233, 5237, 5261, 5273, 5279, 5281, 5297, 5303,
                5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393, 5399, 5407,
                5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471, 5477,
                5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557,
                5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651,
                5653, 5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717,
                5737, 5741, 5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813,
                5821, 5827, 5839, 5843, 5849, 5851, 5857, 5861, 5867, 5869,
                5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981, 5987,
                6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079,
                6089, 6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163,
                6173, 6197, 6199, 6203, 6211, 6217, 6221, 6229, 6247, 6257,
                6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311, 6317, 6323,
                6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379, 6389,
                6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521,
                6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599,
                6607, 6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691,
                6701, 6703, 6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781,
                6791, 6793, 6803, 6823, 6827, 6829, 6833, 6841, 6857, 6863,
                6869, 6871, 6883, 6899, 6907, 6911, 6917, 6947, 6949, 6959,
                6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013, 7019,
                7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127,
                7129, 7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219,
                7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307, 7309, 7321,
                7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433, 7451,
                7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523,
                7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583,
                7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673,
                7681, 7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753,
                7757, 7759, 7789, 7793, 7817, 7823, 7829, 7841, 7853, 7867,
                7873, 7877, 7879, 7883, 7901, 7907, 7919, 7927, 7933, 7937,
                7949, 7951, 7963, 7993, 8009, 8011, 8017, 8039, 8053, 8059,
                8069, 8081, 8087, 8089, 8093, 8101, 8111, 8117, 8123, 8147,
                8161, 8167, 8171, 8179, 8191, 8209, 8219, 8221, 8231, 8233,
                8237, 8243, 8263, 8269, 8273, 8287, 8291, 8293, 8297, 8311,
                8317, 8329, 8353, 8363, 8369, 8377, 8387, 8389, 8419, 8423,
                8429, 8431, 8443, 8447, 8461, 8467, 8501, 8513, 8521, 8527,
                8537, 8539, 8543, 8563, 8573, 8581, 8597, 8599, 8609, 8623,
                8627, 8629, 8641, 8647, 8663, 8669, 8677, 8681, 8689, 8693,
                8699, 8707, 8713, 8719, 8731, 8737, 8741, 8747, 8753, 8761,
                8779, 8783, 8803, 8807, 8819, 8821, 8831, 8837, 8839, 8849,
                8861, 8863, 8867, 8887, 8893, 8923, 8929, 8933, 8941, 8951,
                8963, 8969, 8971, 8999, 9001, 9007, 9011, 9013, 9029, 9041,
                9043, 9049, 9059, 9067, 9091, 9103, 9109, 9127, 9133, 9137,
                9151, 9157, 9161, 9173, 9181, 9187, 9199, 9203, 9209, 9221,
                9227, 9239, 9241, 9257, 9277, 9281, 9283, 9293, 9311, 9319,
                9323, 9337, 9341, 9343, 9349, 9371, 9377, 9391, 9397, 9403,
                9413, 9419, 9421, 9431, 9433, 9437, 9439, 9461, 9463, 9467,
                9473, 9479, 9491, 9497, 9511, 9521, 9533, 9539, 9547, 9551,
                9587, 9601, 9613, 9619, 9623, 9629, 9631, 9643, 9649, 9661,
                9677, 9679, 9689, 9697, 9719, 9721, 9733, 9739, 9743, 9749,
                9767, 9769, 9781, 9787, 9791, 9803, 9811, 9817, 9829, 9833,
                9839, 9851, 9857, 9859, 9871, 9883, 9887, 9901, 9907, 9923,
                9929, 9931, 9941, 9949, 9967, 9973, 10007,
              ],
              emotions: ["love", "joy", "surprise", "anger", "sadness", "fear"],
            },
            v = Object.prototype.hasOwnProperty,
            C =
              Object.keys ||
              function (e) {
                var a = [];
                for (var n in e) v.call(e, n) && a.push(n);
                return a;
              };
          function A(e, a) {
            var n = Array.isArray(e),
              t = a || (n ? new Array(e.length) : {});
            return (
              n
                ? (function (e, a) {
                    for (var n = 0, t = e.length; n < t; n++) a[n] = e[n];
                  })(e, t)
                : (function (e, a) {
                    for (var n, t = C(e), r = 0, i = t.length; r < i; r++)
                      a[(n = t[r])] = e[n] || a[n];
                  })(e, t),
              t
            );
          }
          (u.prototype.get = function (e) {
            return A(y[e]);
          }),
            (u.prototype.mac_address = function (e) {
              (e = d(e)).separator ||
                (e.separator = e.networkVersion ? "." : ":");
              var a = "ABCDEF1234567890";
              return e.networkVersion
                ? this.n(this.string, 3, { pool: a, length: 4 }).join(
                    e.separator
                  )
                : this.n(this.string, 6, { pool: a, length: 2 }).join(
                    e.separator
                  );
            }),
            (u.prototype.normal = function (e) {
              if (
                (m(
                  (e = d(e, { mean: 0, dev: 1, pool: [] })).pool.constructor !==
                    Array,
                  "Chance: The pool option must be a valid array."
                ),
                m(
                  "number" != typeof e.mean,
                  "Chance: Mean (mean) must be a number"
                ),
                m(
                  "number" != typeof e.dev,
                  "Chance: Standard deviation (dev) must be a number"
                ),
                e.pool.length > 0)
              )
                return this.normal_pool(e);
              var a,
                n,
                t,
                r = e.mean,
                i = e.dev;
              do {
                a =
                  (n = 2 * this.random() - 1) * n +
                  (t = 2 * this.random() - 1) * t;
              } while (a >= 1);
              return i * (n * Math.sqrt((-2 * Math.log(a)) / a)) + r;
            }),
            (u.prototype.normal_pool = function (e) {
              var a = 0;
              do {
                var n = Math.round(this.normal({ mean: e.mean, dev: e.dev }));
                if (n < e.pool.length && n >= 0) return e.pool[n];
                a++;
              } while (a < 100);
              throw new RangeError(
                "Chance: Your pool is too small for the given mean and standard deviation. Please adjust."
              );
            }),
            (u.prototype.radio = function (e) {
              var a = "";
              switch ((e = d(e, { side: "?" })).side.toLowerCase()) {
                case "east":
                case "e":
                  a = "W";
                  break;
                case "west":
                case "w":
                  a = "K";
                  break;
                default:
                  a = this.character({ pool: "KW" });
              }
              return (
                a +
                this.character({ alpha: !0, casing: "upper" }) +
                this.character({ alpha: !0, casing: "upper" }) +
                this.character({ alpha: !0, casing: "upper" })
              );
            }),
            (u.prototype.set = function (e, a) {
              "string" == typeof e ? (y[e] = a) : (y = A(e, y));
            }),
            (u.prototype.tv = function (e) {
              return this.radio(e);
            }),
            (u.prototype.cnpj = function () {
              var e = this.n(this.natural, 8, { max: 9 }),
                a =
                  2 +
                  6 * e[7] +
                  7 * e[6] +
                  8 * e[5] +
                  9 * e[4] +
                  2 * e[3] +
                  3 * e[2] +
                  4 * e[1] +
                  5 * e[0];
              (a = 11 - (a % 11)) >= 10 && (a = 0);
              var n =
                2 * a +
                3 +
                7 * e[7] +
                8 * e[6] +
                9 * e[5] +
                2 * e[4] +
                3 * e[3] +
                4 * e[2] +
                5 * e[1] +
                6 * e[0];
              return (
                (n = 11 - (n % 11)) >= 10 && (n = 0),
                "" +
                  e[0] +
                  e[1] +
                  "." +
                  e[2] +
                  e[3] +
                  e[4] +
                  "." +
                  e[5] +
                  e[6] +
                  e[7] +
                  "/0001-" +
                  a +
                  n
              );
            }),
            (u.prototype.emotion = function () {
              return this.pick(this.get("emotions"));
            }),
            (u.prototype.mersenne_twister = function (e) {
              return new _(e);
            }),
            (u.prototype.blueimp_md5 = function () {
              return new S();
            });
          var _ = function (e) {
            void 0 === e && (e = Math.floor(Math.random() * Math.pow(10, 13))),
              (this.N = 624),
              (this.M = 397),
              (this.MATRIX_A = 2567483615),
              (this.UPPER_MASK = 2147483648),
              (this.LOWER_MASK = 2147483647),
              (this.mt = new Array(this.N)),
              (this.mti = this.N + 1),
              this.init_genrand(e);
          };
          (_.prototype.init_genrand = function (e) {
            for (
              this.mt[0] = e >>> 0, this.mti = 1;
              this.mti < this.N;
              this.mti++
            )
              (e = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)),
                (this.mt[this.mti] =
                  ((1812433253 * ((4294901760 & e) >>> 16)) << 16) +
                  1812433253 * (65535 & e) +
                  this.mti),
                (this.mt[this.mti] >>>= 0);
          }),
            (_.prototype.init_by_array = function (e, a) {
              var n,
                t,
                r = 1,
                i = 0;
              for (
                this.init_genrand(19650218), n = this.N > a ? this.N : a;
                n;
                n--
              )
                (t = this.mt[r - 1] ^ (this.mt[r - 1] >>> 30)),
                  (this.mt[r] =
                    (this.mt[r] ^
                      (((1664525 * ((4294901760 & t) >>> 16)) << 16) +
                        1664525 * (65535 & t))) +
                    e[i] +
                    i),
                  (this.mt[r] >>>= 0),
                  i++,
                  ++r >= this.N &&
                    ((this.mt[0] = this.mt[this.N - 1]), (r = 1)),
                  i >= a && (i = 0);
              for (n = this.N - 1; n; n--)
                (t = this.mt[r - 1] ^ (this.mt[r - 1] >>> 30)),
                  (this.mt[r] =
                    (this.mt[r] ^
                      (((1566083941 * ((4294901760 & t) >>> 16)) << 16) +
                        1566083941 * (65535 & t))) -
                    r),
                  (this.mt[r] >>>= 0),
                  ++r >= this.N &&
                    ((this.mt[0] = this.mt[this.N - 1]), (r = 1));
              this.mt[0] = 2147483648;
            }),
            (_.prototype.genrand_int32 = function () {
              var e,
                a = new Array(0, this.MATRIX_A);
              if (this.mti >= this.N) {
                var n;
                for (
                  this.mti === this.N + 1 && this.init_genrand(5489), n = 0;
                  n < this.N - this.M;
                  n++
                )
                  (e =
                    (this.mt[n] & this.UPPER_MASK) |
                    (this.mt[n + 1] & this.LOWER_MASK)),
                    (this.mt[n] = this.mt[n + this.M] ^ (e >>> 1) ^ a[1 & e]);
                for (; n < this.N - 1; n++)
                  (e =
                    (this.mt[n] & this.UPPER_MASK) |
                    (this.mt[n + 1] & this.LOWER_MASK)),
                    (this.mt[n] =
                      this.mt[n + (this.M - this.N)] ^ (e >>> 1) ^ a[1 & e]);
                (e =
                  (this.mt[this.N - 1] & this.UPPER_MASK) |
                  (this.mt[0] & this.LOWER_MASK)),
                  (this.mt[this.N - 1] =
                    this.mt[this.M - 1] ^ (e >>> 1) ^ a[1 & e]),
                  (this.mti = 0);
              }
              return (
                (e = this.mt[this.mti++]),
                (e ^= e >>> 11),
                (e ^= (e << 7) & 2636928640),
                (e ^= (e << 15) & 4022730752),
                (e ^= e >>> 18) >>> 0
              );
            }),
            (_.prototype.genrand_int31 = function () {
              return this.genrand_int32() >>> 1;
            }),
            (_.prototype.genrand_real1 = function () {
              return this.genrand_int32() * (1 / 4294967295);
            }),
            (_.prototype.random = function () {
              return this.genrand_int32() * (1 / 4294967296);
            }),
            (_.prototype.genrand_real3 = function () {
              return (this.genrand_int32() + 0.5) * (1 / 4294967296);
            }),
            (_.prototype.genrand_res53 = function () {
              return (
                (67108864 * (this.genrand_int32() >>> 5) +
                  (this.genrand_int32() >>> 6)) *
                (1 / 9007199254740992)
              );
            });
          var S = function () {};
          (S.prototype.VERSION = "1.0.1"),
            (S.prototype.safe_add = function (e, a) {
              var n = (65535 & e) + (65535 & a);
              return (((e >> 16) + (a >> 16) + (n >> 16)) << 16) | (65535 & n);
            }),
            (S.prototype.bit_roll = function (e, a) {
              return (e << a) | (e >>> (32 - a));
            }),
            (S.prototype.md5_cmn = function (e, a, n, t, r, i) {
              return this.safe_add(
                this.bit_roll(
                  this.safe_add(this.safe_add(a, e), this.safe_add(t, i)),
                  r
                ),
                n
              );
            }),
            (S.prototype.md5_ff = function (e, a, n, t, r, i, o) {
              return this.md5_cmn((a & n) | (~a & t), e, a, r, i, o);
            }),
            (S.prototype.md5_gg = function (e, a, n, t, r, i, o) {
              return this.md5_cmn((a & t) | (n & ~t), e, a, r, i, o);
            }),
            (S.prototype.md5_hh = function (e, a, n, t, r, i, o) {
              return this.md5_cmn(a ^ n ^ t, e, a, r, i, o);
            }),
            (S.prototype.md5_ii = function (e, a, n, t, r, i, o) {
              return this.md5_cmn(n ^ (a | ~t), e, a, r, i, o);
            }),
            (S.prototype.binl_md5 = function (e, a) {
              (e[a >> 5] |= 128 << a % 32),
                (e[14 + (((a + 64) >>> 9) << 4)] = a);
              var n,
                t,
                r,
                i,
                o,
                s = 1732584193,
                l = -271733879,
                c = -1732584194,
                u = 271733878;
              for (n = 0; n < e.length; n += 16)
                (t = s),
                  (r = l),
                  (i = c),
                  (o = u),
                  (s = this.md5_ff(s, l, c, u, e[n], 7, -680876936)),
                  (u = this.md5_ff(u, s, l, c, e[n + 1], 12, -389564586)),
                  (c = this.md5_ff(c, u, s, l, e[n + 2], 17, 606105819)),
                  (l = this.md5_ff(l, c, u, s, e[n + 3], 22, -1044525330)),
                  (s = this.md5_ff(s, l, c, u, e[n + 4], 7, -176418897)),
                  (u = this.md5_ff(u, s, l, c, e[n + 5], 12, 1200080426)),
                  (c = this.md5_ff(c, u, s, l, e[n + 6], 17, -1473231341)),
                  (l = this.md5_ff(l, c, u, s, e[n + 7], 22, -45705983)),
                  (s = this.md5_ff(s, l, c, u, e[n + 8], 7, 1770035416)),
                  (u = this.md5_ff(u, s, l, c, e[n + 9], 12, -1958414417)),
                  (c = this.md5_ff(c, u, s, l, e[n + 10], 17, -42063)),
                  (l = this.md5_ff(l, c, u, s, e[n + 11], 22, -1990404162)),
                  (s = this.md5_ff(s, l, c, u, e[n + 12], 7, 1804603682)),
                  (u = this.md5_ff(u, s, l, c, e[n + 13], 12, -40341101)),
                  (c = this.md5_ff(c, u, s, l, e[n + 14], 17, -1502002290)),
                  (l = this.md5_ff(l, c, u, s, e[n + 15], 22, 1236535329)),
                  (s = this.md5_gg(s, l, c, u, e[n + 1], 5, -165796510)),
                  (u = this.md5_gg(u, s, l, c, e[n + 6], 9, -1069501632)),
                  (c = this.md5_gg(c, u, s, l, e[n + 11], 14, 643717713)),
                  (l = this.md5_gg(l, c, u, s, e[n], 20, -373897302)),
                  (s = this.md5_gg(s, l, c, u, e[n + 5], 5, -701558691)),
                  (u = this.md5_gg(u, s, l, c, e[n + 10], 9, 38016083)),
                  (c = this.md5_gg(c, u, s, l, e[n + 15], 14, -660478335)),
                  (l = this.md5_gg(l, c, u, s, e[n + 4], 20, -405537848)),
                  (s = this.md5_gg(s, l, c, u, e[n + 9], 5, 568446438)),
                  (u = this.md5_gg(u, s, l, c, e[n + 14], 9, -1019803690)),
                  (c = this.md5_gg(c, u, s, l, e[n + 3], 14, -187363961)),
                  (l = this.md5_gg(l, c, u, s, e[n + 8], 20, 1163531501)),
                  (s = this.md5_gg(s, l, c, u, e[n + 13], 5, -1444681467)),
                  (u = this.md5_gg(u, s, l, c, e[n + 2], 9, -51403784)),
                  (c = this.md5_gg(c, u, s, l, e[n + 7], 14, 1735328473)),
                  (l = this.md5_gg(l, c, u, s, e[n + 12], 20, -1926607734)),
                  (s = this.md5_hh(s, l, c, u, e[n + 5], 4, -378558)),
                  (u = this.md5_hh(u, s, l, c, e[n + 8], 11, -2022574463)),
                  (c = this.md5_hh(c, u, s, l, e[n + 11], 16, 1839030562)),
                  (l = this.md5_hh(l, c, u, s, e[n + 14], 23, -35309556)),
                  (s = this.md5_hh(s, l, c, u, e[n + 1], 4, -1530992060)),
                  (u = this.md5_hh(u, s, l, c, e[n + 4], 11, 1272893353)),
                  (c = this.md5_hh(c, u, s, l, e[n + 7], 16, -155497632)),
                  (l = this.md5_hh(l, c, u, s, e[n + 10], 23, -1094730640)),
                  (s = this.md5_hh(s, l, c, u, e[n + 13], 4, 681279174)),
                  (u = this.md5_hh(u, s, l, c, e[n], 11, -358537222)),
                  (c = this.md5_hh(c, u, s, l, e[n + 3], 16, -722521979)),
                  (l = this.md5_hh(l, c, u, s, e[n + 6], 23, 76029189)),
                  (s = this.md5_hh(s, l, c, u, e[n + 9], 4, -640364487)),
                  (u = this.md5_hh(u, s, l, c, e[n + 12], 11, -421815835)),
                  (c = this.md5_hh(c, u, s, l, e[n + 15], 16, 530742520)),
                  (l = this.md5_hh(l, c, u, s, e[n + 2], 23, -995338651)),
                  (s = this.md5_ii(s, l, c, u, e[n], 6, -198630844)),
                  (u = this.md5_ii(u, s, l, c, e[n + 7], 10, 1126891415)),
                  (c = this.md5_ii(c, u, s, l, e[n + 14], 15, -1416354905)),
                  (l = this.md5_ii(l, c, u, s, e[n + 5], 21, -57434055)),
                  (s = this.md5_ii(s, l, c, u, e[n + 12], 6, 1700485571)),
                  (u = this.md5_ii(u, s, l, c, e[n + 3], 10, -1894986606)),
                  (c = this.md5_ii(c, u, s, l, e[n + 10], 15, -1051523)),
                  (l = this.md5_ii(l, c, u, s, e[n + 1], 21, -2054922799)),
                  (s = this.md5_ii(s, l, c, u, e[n + 8], 6, 1873313359)),
                  (u = this.md5_ii(u, s, l, c, e[n + 15], 10, -30611744)),
                  (c = this.md5_ii(c, u, s, l, e[n + 6], 15, -1560198380)),
                  (l = this.md5_ii(l, c, u, s, e[n + 13], 21, 1309151649)),
                  (s = this.md5_ii(s, l, c, u, e[n + 4], 6, -145523070)),
                  (u = this.md5_ii(u, s, l, c, e[n + 11], 10, -1120210379)),
                  (c = this.md5_ii(c, u, s, l, e[n + 2], 15, 718787259)),
                  (l = this.md5_ii(l, c, u, s, e[n + 9], 21, -343485551)),
                  (s = this.safe_add(s, t)),
                  (l = this.safe_add(l, r)),
                  (c = this.safe_add(c, i)),
                  (u = this.safe_add(u, o));
              return [s, l, c, u];
            }),
            (S.prototype.binl2rstr = function (e) {
              var a,
                n = "";
              for (a = 0; a < 32 * e.length; a += 8)
                n += String.fromCharCode((e[a >> 5] >>> a % 32) & 255);
              return n;
            }),
            (S.prototype.rstr2binl = function (e) {
              var a,
                n = [];
              for (n[(e.length >> 2) - 1] = void 0, a = 0; a < n.length; a += 1)
                n[a] = 0;
              for (a = 0; a < 8 * e.length; a += 8)
                n[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
              return n;
            }),
            (S.prototype.rstr_md5 = function (e) {
              return this.binl2rstr(
                this.binl_md5(this.rstr2binl(e), 8 * e.length)
              );
            }),
            (S.prototype.rstr_hmac_md5 = function (e, a) {
              var n,
                t,
                r = this.rstr2binl(e),
                i = [],
                o = [];
              for (
                i[15] = o[15] = void 0,
                  r.length > 16 && (r = this.binl_md5(r, 8 * e.length)),
                  n = 0;
                n < 16;
                n += 1
              )
                (i[n] = 909522486 ^ r[n]), (o[n] = 1549556828 ^ r[n]);
              return (
                (t = this.binl_md5(
                  i.concat(this.rstr2binl(a)),
                  512 + 8 * a.length
                )),
                this.binl2rstr(this.binl_md5(o.concat(t), 640))
              );
            }),
            (S.prototype.rstr2hex = function (e) {
              var a,
                n,
                t = "0123456789abcdef",
                r = "";
              for (n = 0; n < e.length; n += 1)
                (a = e.charCodeAt(n)),
                  (r += t.charAt((a >>> 4) & 15) + t.charAt(15 & a));
              return r;
            }),
            (S.prototype.str2rstr_utf8 = function (e) {
              return unescape(encodeURIComponent(e));
            }),
            (S.prototype.raw_md5 = function (e) {
              return this.rstr_md5(this.str2rstr_utf8(e));
            }),
            (S.prototype.hex_md5 = function (e) {
              return this.rstr2hex(this.raw_md5(e));
            }),
            (S.prototype.raw_hmac_md5 = function (e, a) {
              return this.rstr_hmac_md5(
                this.str2rstr_utf8(e),
                this.str2rstr_utf8(a)
              );
            }),
            (S.prototype.hex_hmac_md5 = function (e, a) {
              return this.rstr2hex(this.raw_hmac_md5(e, a));
            }),
            (S.prototype.md5 = function (e, a, n) {
              return a
                ? n
                  ? this.raw_hmac_md5(a, e)
                  : this.hex_hmac_md5(a, e)
                : n
                ? this.raw_md5(e)
                : this.hex_md5(e);
            }),
            e.exports && (a = e.exports = u),
            (a.Chance = u),
            void 0 ===
              (n = function () {
                return u;
              }.apply(a, [])) || (e.exports = n),
            "undefined" != typeof importScripts &&
              ((chance = new u()), (self.Chance = u)),
            "object" == typeof window &&
              "object" == typeof window.document &&
              ((window.Chance = u), (window.chance = new u()));
        })();
      },
      2307: (e, a, n) => {
        e = n.nmd(e);
        var t = "__lodash_hash_undefined__",
          r = 9007199254740991,
          i = "[object Arguments]",
          o = "[object Array]",
          s = "[object Boolean]",
          l = "[object Date]",
          c = "[object Error]",
          u = "[object Function]",
          d = "[object Map]",
          m = "[object Number]",
          h = "[object Object]",
          p = "[object Promise]",
          b = "[object RegExp]",
          f = "[object Set]",
          g = "[object String]",
          y = "[object Symbol]",
          v = "[object WeakMap]",
          C = "[object ArrayBuffer]",
          A = "[object DataView]",
          _ = /^\[object .+?Constructor\]$/,
          S = /^(?:0|[1-9]\d*)$/,
          M = {};
        (M["[object Float32Array]"] =
          M["[object Float64Array]"] =
          M["[object Int8Array]"] =
          M["[object Int16Array]"] =
          M["[object Int32Array]"] =
          M["[object Uint8Array]"] =
          M["[object Uint8ClampedArray]"] =
          M["[object Uint16Array]"] =
          M["[object Uint32Array]"] =
            !0),
          (M[i] =
            M[o] =
            M[C] =
            M[s] =
            M[A] =
            M[l] =
            M[c] =
            M[u] =
            M[d] =
            M[m] =
            M[h] =
            M[b] =
            M[f] =
            M[g] =
            M[v] =
              !1);
        var T = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          P = "object" == typeof self && self && self.Object === Object && self,
          E = T || P || Function("return this")(),
          I = a && !a.nodeType && a,
          w = I && e && !e.nodeType && e,
          k = w && w.exports === I,
          B = k && T.process,
          R = (function () {
            try {
              return B && B.binding && B.binding("util");
            } catch (e) {}
          })(),
          L = R && R.isTypedArray;
        function x(e, a) {
          for (var n = -1, t = null == e ? 0 : e.length; ++n < t; )
            if (a(e[n], n, e)) return !0;
          return !1;
        }
        function O(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, t) {
              n[++a] = [t, e];
            }),
            n
          );
        }
        function G(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++a] = e;
            }),
            n
          );
        }
        var D,
          N,
          F,
          H = Array.prototype,
          j = Function.prototype,
          U = Object.prototype,
          z = E["__core-js_shared__"],
          W = j.toString,
          K = U.hasOwnProperty,
          V = (D = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + D
            : "",
          J = U.toString,
          q = RegExp(
            "^" +
              W.call(K)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Y = k ? E.Buffer : void 0,
          Z = E.Symbol,
          $ = E.Uint8Array,
          X = U.propertyIsEnumerable,
          Q = H.splice,
          ee = Z ? Z.toStringTag : void 0,
          ae = Object.getOwnPropertySymbols,
          ne = Y ? Y.isBuffer : void 0,
          te =
            ((N = Object.keys),
            (F = Object),
            function (e) {
              return N(F(e));
            }),
          re = Re(E, "DataView"),
          ie = Re(E, "Map"),
          oe = Re(E, "Promise"),
          se = Re(E, "Set"),
          le = Re(E, "WeakMap"),
          ce = Re(Object, "create"),
          ue = Ge(re),
          de = Ge(ie),
          me = Ge(oe),
          he = Ge(se),
          pe = Ge(le),
          be = Z ? Z.prototype : void 0,
          fe = be ? be.valueOf : void 0;
        function ge(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function ye(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function ve(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function Ce(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new ve(); ++a < n; ) this.add(e[a]);
        }
        function Ae(e) {
          var a = (this.__data__ = new ye(e));
          this.size = a.size;
        }
        function _e(e, a) {
          var n = Fe(e),
            t = !n && Ne(e),
            r = !n && !t && He(e),
            i = !n && !t && !r && Ke(e),
            o = n || t || r || i,
            s = o
              ? (function (e, a) {
                  for (var n = -1, t = Array(e); ++n < e; ) t[n] = a(n);
                  return t;
                })(e.length, String)
              : [],
            l = s.length;
          for (var c in e)
            (!a && !K.call(e, c)) ||
              (o &&
                ("length" == c ||
                  (r && ("offset" == c || "parent" == c)) ||
                  (i &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  Oe(c, l))) ||
              s.push(c);
          return s;
        }
        function Se(e, a) {
          for (var n = e.length; n--; ) if (De(e[n][0], a)) return n;
          return -1;
        }
        function Me(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : ee && ee in Object(e)
            ? (function (e) {
                var a = K.call(e, ee),
                  n = e[ee];
                try {
                  e[ee] = void 0;
                  var t = !0;
                } catch (e) {}
                var r = J.call(e);
                t && (a ? (e[ee] = n) : delete e[ee]);
                return r;
              })(e)
            : (function (e) {
                return J.call(e);
              })(e);
        }
        function Te(e) {
          return We(e) && Me(e) == i;
        }
        function Pe(e, a, n, t, r) {
          return (
            e === a ||
            (null == e || null == a || (!We(e) && !We(a))
              ? e != e && a != a
              : (function (e, a, n, t, r, u) {
                  var p = Fe(e),
                    v = Fe(a),
                    _ = p ? o : xe(e),
                    S = v ? o : xe(a),
                    M = (_ = _ == i ? h : _) == h,
                    T = (S = S == i ? h : S) == h,
                    P = _ == S;
                  if (P && He(e)) {
                    if (!He(a)) return !1;
                    (p = !0), (M = !1);
                  }
                  if (P && !M)
                    return (
                      u || (u = new Ae()),
                      p || Ke(e)
                        ? we(e, a, n, t, r, u)
                        : (function (e, a, n, t, r, i, o) {
                            switch (n) {
                              case A:
                                if (
                                  e.byteLength != a.byteLength ||
                                  e.byteOffset != a.byteOffset
                                )
                                  return !1;
                                (e = e.buffer), (a = a.buffer);
                              case C:
                                return !(
                                  e.byteLength != a.byteLength ||
                                  !i(new $(e), new $(a))
                                );
                              case s:
                              case l:
                              case m:
                                return De(+e, +a);
                              case c:
                                return (
                                  e.name == a.name && e.message == a.message
                                );
                              case b:
                              case g:
                                return e == a + "";
                              case d:
                                var u = O;
                              case f:
                                var h = 1 & t;
                                if ((u || (u = G), e.size != a.size && !h))
                                  return !1;
                                var p = o.get(e);
                                if (p) return p == a;
                                (t |= 2), o.set(e, a);
                                var v = we(u(e), u(a), t, r, i, o);
                                return o.delete(e), v;
                              case y:
                                if (fe) return fe.call(e) == fe.call(a);
                            }
                            return !1;
                          })(e, a, _, n, t, r, u)
                    );
                  if (!(1 & n)) {
                    var E = M && K.call(e, "__wrapped__"),
                      I = T && K.call(a, "__wrapped__");
                    if (E || I) {
                      var w = E ? e.value() : e,
                        k = I ? a.value() : a;
                      return u || (u = new Ae()), r(w, k, n, t, u);
                    }
                  }
                  if (!P) return !1;
                  return (
                    u || (u = new Ae()),
                    (function (e, a, n, t, r, i) {
                      var o = 1 & n,
                        s = ke(e),
                        l = s.length,
                        c = ke(a).length;
                      if (l != c && !o) return !1;
                      var u = l;
                      for (; u--; ) {
                        var d = s[u];
                        if (!(o ? d in a : K.call(a, d))) return !1;
                      }
                      var m = i.get(e);
                      if (m && i.get(a)) return m == a;
                      var h = !0;
                      i.set(e, a), i.set(a, e);
                      var p = o;
                      for (; ++u < l; ) {
                        var b = e[(d = s[u])],
                          f = a[d];
                        if (t)
                          var g = o ? t(f, b, d, a, e, i) : t(b, f, d, e, a, i);
                        if (!(void 0 === g ? b === f || r(b, f, n, t, i) : g)) {
                          h = !1;
                          break;
                        }
                        p || (p = "constructor" == d);
                      }
                      if (h && !p) {
                        var y = e.constructor,
                          v = a.constructor;
                        y == v ||
                          !("constructor" in e) ||
                          !("constructor" in a) ||
                          ("function" == typeof y &&
                            y instanceof y &&
                            "function" == typeof v &&
                            v instanceof v) ||
                          (h = !1);
                      }
                      return i.delete(e), i.delete(a), h;
                    })(e, a, n, t, r, u)
                  );
                })(e, a, n, t, Pe, r))
          );
        }
        function Ee(e) {
          return (
            !(
              !ze(e) ||
              (function (e) {
                return !!V && V in e;
              })(e)
            ) && (je(e) ? q : _).test(Ge(e))
          );
        }
        function Ie(e) {
          if (
            ((n = (a = e) && a.constructor),
            (t = ("function" == typeof n && n.prototype) || U),
            a !== t)
          )
            return te(e);
          var a,
            n,
            t,
            r = [];
          for (var i in Object(e))
            K.call(e, i) && "constructor" != i && r.push(i);
          return r;
        }
        function we(e, a, n, t, r, i) {
          var o = 1 & n,
            s = e.length,
            l = a.length;
          if (s != l && !(o && l > s)) return !1;
          var c = i.get(e);
          if (c && i.get(a)) return c == a;
          var u = -1,
            d = !0,
            m = 2 & n ? new Ce() : void 0;
          for (i.set(e, a), i.set(a, e); ++u < s; ) {
            var h = e[u],
              p = a[u];
            if (t) var b = o ? t(p, h, u, a, e, i) : t(h, p, u, e, a, i);
            if (void 0 !== b) {
              if (b) continue;
              d = !1;
              break;
            }
            if (m) {
              if (
                !x(a, function (e, a) {
                  if (((o = a), !m.has(o) && (h === e || r(h, e, n, t, i))))
                    return m.push(a);
                  var o;
                })
              ) {
                d = !1;
                break;
              }
            } else if (h !== p && !r(h, p, n, t, i)) {
              d = !1;
              break;
            }
          }
          return i.delete(e), i.delete(a), d;
        }
        function ke(e) {
          return (function (e, a, n) {
            var t = a(e);
            return Fe(e)
              ? t
              : (function (e, a) {
                  for (var n = -1, t = a.length, r = e.length; ++n < t; )
                    e[r + n] = a[n];
                  return e;
                })(t, n(e));
          })(e, Ve, Le);
        }
        function Be(e, a) {
          var n,
            t,
            r = e.__data__;
          return (
            "string" == (t = typeof (n = a)) ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
              ? "__proto__" !== n
              : null === n
          )
            ? r["string" == typeof a ? "string" : "hash"]
            : r.map;
        }
        function Re(e, a) {
          var n = (function (e, a) {
            return null == e ? void 0 : e[a];
          })(e, a);
          return Ee(n) ? n : void 0;
        }
        (ge.prototype.clear = function () {
          (this.__data__ = ce ? ce(null) : {}), (this.size = 0);
        }),
          (ge.prototype.delete = function (e) {
            var a = this.has(e) && delete this.__data__[e];
            return (this.size -= a ? 1 : 0), a;
          }),
          (ge.prototype.get = function (e) {
            var a = this.__data__;
            if (ce) {
              var n = a[e];
              return n === t ? void 0 : n;
            }
            return K.call(a, e) ? a[e] : void 0;
          }),
          (ge.prototype.has = function (e) {
            var a = this.__data__;
            return ce ? void 0 !== a[e] : K.call(a, e);
          }),
          (ge.prototype.set = function (e, a) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = ce && void 0 === a ? t : a),
              this
            );
          }),
          (ye.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
          (ye.prototype.delete = function (e) {
            var a = this.__data__,
              n = Se(a, e);
            return (
              !(n < 0) &&
              (n == a.length - 1 ? a.pop() : Q.call(a, n, 1), --this.size, !0)
            );
          }),
          (ye.prototype.get = function (e) {
            var a = this.__data__,
              n = Se(a, e);
            return n < 0 ? void 0 : a[n][1];
          }),
          (ye.prototype.has = function (e) {
            return Se(this.__data__, e) > -1;
          }),
          (ye.prototype.set = function (e, a) {
            var n = this.__data__,
              t = Se(n, e);
            return t < 0 ? (++this.size, n.push([e, a])) : (n[t][1] = a), this;
          }),
          (ve.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new ge(),
                map: new (ie || ye)(),
                string: new ge(),
              });
          }),
          (ve.prototype.delete = function (e) {
            var a = Be(this, e).delete(e);
            return (this.size -= a ? 1 : 0), a;
          }),
          (ve.prototype.get = function (e) {
            return Be(this, e).get(e);
          }),
          (ve.prototype.has = function (e) {
            return Be(this, e).has(e);
          }),
          (ve.prototype.set = function (e, a) {
            var n = Be(this, e),
              t = n.size;
            return n.set(e, a), (this.size += n.size == t ? 0 : 1), this;
          }),
          (Ce.prototype.add = Ce.prototype.push =
            function (e) {
              return this.__data__.set(e, t), this;
            }),
          (Ce.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (Ae.prototype.clear = function () {
            (this.__data__ = new ye()), (this.size = 0);
          }),
          (Ae.prototype.delete = function (e) {
            var a = this.__data__,
              n = a.delete(e);
            return (this.size = a.size), n;
          }),
          (Ae.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (Ae.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (Ae.prototype.set = function (e, a) {
            var n = this.__data__;
            if (n instanceof ye) {
              var t = n.__data__;
              if (!ie || t.length < 199)
                return t.push([e, a]), (this.size = ++n.size), this;
              n = this.__data__ = new ve(t);
            }
            return n.set(e, a), (this.size = n.size), this;
          });
        var Le = ae
            ? function (e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    (function (e, a) {
                      for (
                        var n = -1, t = null == e ? 0 : e.length, r = 0, i = [];
                        ++n < t;

                      ) {
                        var o = e[n];
                        a(o, n, e) && (i[r++] = o);
                      }
                      return i;
                    })(ae(e), function (a) {
                      return X.call(e, a);
                    }));
              }
            : function () {
                return [];
              },
          xe = Me;
        function Oe(e, a) {
          return (
            !!(a = null == a ? r : a) &&
            ("number" == typeof e || S.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < a
          );
        }
        function Ge(e) {
          if (null != e) {
            try {
              return W.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }
        function De(e, a) {
          return e === a || (e != e && a != a);
        }
        ((re && xe(new re(new ArrayBuffer(1))) != A) ||
          (ie && xe(new ie()) != d) ||
          (oe && xe(oe.resolve()) != p) ||
          (se && xe(new se()) != f) ||
          (le && xe(new le()) != v)) &&
          (xe = function (e) {
            var a = Me(e),
              n = a == h ? e.constructor : void 0,
              t = n ? Ge(n) : "";
            if (t)
              switch (t) {
                case ue:
                  return A;
                case de:
                  return d;
                case me:
                  return p;
                case he:
                  return f;
                case pe:
                  return v;
              }
            return a;
          });
        var Ne = Te(
            (function () {
              return arguments;
            })()
          )
            ? Te
            : function (e) {
                return We(e) && K.call(e, "callee") && !X.call(e, "callee");
              },
          Fe = Array.isArray;
        var He =
          ne ||
          function () {
            return !1;
          };
        function je(e) {
          if (!ze(e)) return !1;
          var a = Me(e);
          return (
            a == u ||
            "[object GeneratorFunction]" == a ||
            "[object AsyncFunction]" == a ||
            "[object Proxy]" == a
          );
        }
        function Ue(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
        }
        function ze(e) {
          var a = typeof e;
          return null != e && ("object" == a || "function" == a);
        }
        function We(e) {
          return null != e && "object" == typeof e;
        }
        var Ke = L
          ? (function (e) {
              return function (a) {
                return e(a);
              };
            })(L)
          : function (e) {
              return We(e) && Ue(e.length) && !!M[Me(e)];
            };
        function Ve(e) {
          return null != (a = e) && Ue(a.length) && !je(a) ? _e(e) : Ie(e);
          var a;
        }
        e.exports = function (e, a) {
          return Pe(e, a);
        };
      },
      2336: (e, a, n) => {
        e = n.nmd(e);
        var t = "__lodash_hash_undefined__",
          r = 9007199254740991,
          i = "[object Arguments]",
          o = "[object Array]",
          s = "[object Boolean]",
          l = "[object Date]",
          c = "[object Error]",
          u = "[object Function]",
          d = "[object Map]",
          m = "[object Number]",
          h = "[object Object]",
          p = "[object Promise]",
          b = "[object RegExp]",
          f = "[object Set]",
          g = "[object String]",
          y = "[object Symbol]",
          v = "[object WeakMap]",
          C = "[object ArrayBuffer]",
          A = "[object DataView]",
          _ = /^\[object .+?Constructor\]$/,
          S = /^(?:0|[1-9]\d*)$/,
          M = {};
        (M["[object Float32Array]"] =
          M["[object Float64Array]"] =
          M["[object Int8Array]"] =
          M["[object Int16Array]"] =
          M["[object Int32Array]"] =
          M["[object Uint8Array]"] =
          M["[object Uint8ClampedArray]"] =
          M["[object Uint16Array]"] =
          M["[object Uint32Array]"] =
            !0),
          (M[i] =
            M[o] =
            M[C] =
            M[s] =
            M[A] =
            M[l] =
            M[c] =
            M[u] =
            M[d] =
            M[m] =
            M[h] =
            M[b] =
            M[f] =
            M[g] =
            M[v] =
              !1);
        var T = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          P = "object" == typeof self && self && self.Object === Object && self,
          E = T || P || Function("return this")(),
          I = a && !a.nodeType && a,
          w = I && e && !e.nodeType && e,
          k = w && w.exports === I && T.process,
          B = (function () {
            try {
              return k && k.binding("util");
            } catch (e) {}
          })(),
          R = B && B.isTypedArray;
        function L(e, a) {
          for (var n = -1, t = e ? e.length : 0; ++n < t; )
            if (a(e[n], n, e)) return !0;
          return !1;
        }
        function x(e) {
          var a = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              a = !!(e + "");
            } catch (e) {}
          return a;
        }
        function O(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, t) {
              n[++a] = [t, e];
            }),
            n
          );
        }
        function G(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++a] = e;
            }),
            n
          );
        }
        var D,
          N,
          F,
          H = Array.prototype,
          j = Function.prototype,
          U = Object.prototype,
          z = E["__core-js_shared__"],
          W = (D = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + D
            : "",
          K = j.toString,
          V = U.hasOwnProperty,
          J = U.toString,
          q = RegExp(
            "^" +
              K.call(V)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Y = E.Symbol,
          Z = E.Uint8Array,
          $ = U.propertyIsEnumerable,
          X = H.splice,
          Q =
            ((N = Object.keys),
            (F = Object),
            function (e) {
              return N(F(e));
            }),
          ee = Te(E, "DataView"),
          ae = Te(E, "Map"),
          ne = Te(E, "Promise"),
          te = Te(E, "Set"),
          re = Te(E, "WeakMap"),
          ie = Te(Object, "create"),
          oe = we(ee),
          se = we(ae),
          le = we(ne),
          ce = we(te),
          ue = we(re),
          de = Y ? Y.prototype : void 0,
          me = de ? de.valueOf : void 0;
        function he(e) {
          var a = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function pe(e) {
          var a = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function be(e) {
          var a = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function fe(e) {
          var a = -1,
            n = e ? e.length : 0;
          for (this.__data__ = new be(); ++a < n; ) this.add(e[a]);
        }
        function ge(e) {
          this.__data__ = new pe(e);
        }
        function ye(e, a) {
          var n =
              Be(e) ||
              (function (e) {
                return (
                  (function (e) {
                    return Ge(e) && Re(e);
                  })(e) &&
                  V.call(e, "callee") &&
                  (!$.call(e, "callee") || J.call(e) == i)
                );
              })(e)
                ? (function (e, a) {
                    for (var n = -1, t = Array(e); ++n < e; ) t[n] = a(n);
                    return t;
                  })(e.length, String)
                : [],
            t = n.length,
            r = !!t;
          for (var o in e)
            (!a && !V.call(e, o)) ||
              (r && ("length" == o || Ee(o, t))) ||
              n.push(o);
          return n;
        }
        function ve(e, a) {
          for (var n = e.length; n--; ) if (ke(e[n][0], a)) return n;
          return -1;
        }
        function Ce(e, a, n, t, r) {
          return (
            e === a ||
            (null == e || null == a || (!Oe(e) && !Ge(a))
              ? e != e && a != a
              : (function (e, a, n, t, r, u) {
                  var p = Be(e),
                    v = Be(a),
                    _ = o,
                    S = o;
                  p || (_ = (_ = Pe(e)) == i ? h : _);
                  v || (S = (S = Pe(a)) == i ? h : S);
                  var M = _ == h && !x(e),
                    T = S == h && !x(a),
                    P = _ == S;
                  if (P && !M)
                    return (
                      u || (u = new ge()),
                      p || De(e)
                        ? Se(e, a, n, t, r, u)
                        : (function (e, a, n, t, r, i, o) {
                            switch (n) {
                              case A:
                                if (
                                  e.byteLength != a.byteLength ||
                                  e.byteOffset != a.byteOffset
                                )
                                  return !1;
                                (e = e.buffer), (a = a.buffer);
                              case C:
                                return !(
                                  e.byteLength != a.byteLength ||
                                  !t(new Z(e), new Z(a))
                                );
                              case s:
                              case l:
                              case m:
                                return ke(+e, +a);
                              case c:
                                return (
                                  e.name == a.name && e.message == a.message
                                );
                              case b:
                              case g:
                                return e == a + "";
                              case d:
                                var u = O;
                              case f:
                                var h = 2 & i;
                                if ((u || (u = G), e.size != a.size && !h))
                                  return !1;
                                var p = o.get(e);
                                if (p) return p == a;
                                (i |= 1), o.set(e, a);
                                var v = Se(u(e), u(a), t, r, i, o);
                                return o.delete(e), v;
                              case y:
                                if (me) return me.call(e) == me.call(a);
                            }
                            return !1;
                          })(e, a, _, n, t, r, u)
                    );
                  if (!(2 & r)) {
                    var E = M && V.call(e, "__wrapped__"),
                      I = T && V.call(a, "__wrapped__");
                    if (E || I) {
                      var w = E ? e.value() : e,
                        k = I ? a.value() : a;
                      return u || (u = new ge()), n(w, k, t, r, u);
                    }
                  }
                  if (!P) return !1;
                  return (
                    u || (u = new ge()),
                    (function (e, a, n, t, r, i) {
                      var o = 2 & r,
                        s = Ne(e),
                        l = s.length,
                        c = Ne(a).length;
                      if (l != c && !o) return !1;
                      var u = l;
                      for (; u--; ) {
                        var d = s[u];
                        if (!(o ? d in a : V.call(a, d))) return !1;
                      }
                      var m = i.get(e);
                      if (m && i.get(a)) return m == a;
                      var h = !0;
                      i.set(e, a), i.set(a, e);
                      var p = o;
                      for (; ++u < l; ) {
                        var b = e[(d = s[u])],
                          f = a[d];
                        if (t)
                          var g = o ? t(f, b, d, a, e, i) : t(b, f, d, e, a, i);
                        if (!(void 0 === g ? b === f || n(b, f, t, r, i) : g)) {
                          h = !1;
                          break;
                        }
                        p || (p = "constructor" == d);
                      }
                      if (h && !p) {
                        var y = e.constructor,
                          v = a.constructor;
                        y == v ||
                          !("constructor" in e) ||
                          !("constructor" in a) ||
                          ("function" == typeof y &&
                            y instanceof y &&
                            "function" == typeof v &&
                            v instanceof v) ||
                          (h = !1);
                      }
                      return i.delete(e), i.delete(a), h;
                    })(e, a, n, t, r, u)
                  );
                })(e, a, Ce, n, t, r))
          );
        }
        function Ae(e) {
          return (
            !(
              !Oe(e) ||
              (function (e) {
                return !!W && W in e;
              })(e)
            ) && (Le(e) || x(e) ? q : _).test(we(e))
          );
        }
        function _e(e) {
          if (
            ((n = (a = e) && a.constructor),
            (t = ("function" == typeof n && n.prototype) || U),
            a !== t)
          )
            return Q(e);
          var a,
            n,
            t,
            r = [];
          for (var i in Object(e))
            V.call(e, i) && "constructor" != i && r.push(i);
          return r;
        }
        function Se(e, a, n, t, r, i) {
          var o = 2 & r,
            s = e.length,
            l = a.length;
          if (s != l && !(o && l > s)) return !1;
          var c = i.get(e);
          if (c && i.get(a)) return c == a;
          var u = -1,
            d = !0,
            m = 1 & r ? new fe() : void 0;
          for (i.set(e, a), i.set(a, e); ++u < s; ) {
            var h = e[u],
              p = a[u];
            if (t) var b = o ? t(p, h, u, a, e, i) : t(h, p, u, e, a, i);
            if (void 0 !== b) {
              if (b) continue;
              d = !1;
              break;
            }
            if (m) {
              if (
                !L(a, function (e, a) {
                  if (!m.has(a) && (h === e || n(h, e, t, r, i)))
                    return m.add(a);
                })
              ) {
                d = !1;
                break;
              }
            } else if (h !== p && !n(h, p, t, r, i)) {
              d = !1;
              break;
            }
          }
          return i.delete(e), i.delete(a), d;
        }
        function Me(e, a) {
          var n,
            t,
            r = e.__data__;
          return (
            "string" == (t = typeof (n = a)) ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
              ? "__proto__" !== n
              : null === n
          )
            ? r["string" == typeof a ? "string" : "hash"]
            : r.map;
        }
        function Te(e, a) {
          var n = (function (e, a) {
            return null == e ? void 0 : e[a];
          })(e, a);
          return Ae(n) ? n : void 0;
        }
        (he.prototype.clear = function () {
          this.__data__ = ie ? ie(null) : {};
        }),
          (he.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (he.prototype.get = function (e) {
            var a = this.__data__;
            if (ie) {
              var n = a[e];
              return n === t ? void 0 : n;
            }
            return V.call(a, e) ? a[e] : void 0;
          }),
          (he.prototype.has = function (e) {
            var a = this.__data__;
            return ie ? void 0 !== a[e] : V.call(a, e);
          }),
          (he.prototype.set = function (e, a) {
            return (this.__data__[e] = ie && void 0 === a ? t : a), this;
          }),
          (pe.prototype.clear = function () {
            this.__data__ = [];
          }),
          (pe.prototype.delete = function (e) {
            var a = this.__data__,
              n = ve(a, e);
            return (
              !(n < 0) && (n == a.length - 1 ? a.pop() : X.call(a, n, 1), !0)
            );
          }),
          (pe.prototype.get = function (e) {
            var a = this.__data__,
              n = ve(a, e);
            return n < 0 ? void 0 : a[n][1];
          }),
          (pe.prototype.has = function (e) {
            return ve(this.__data__, e) > -1;
          }),
          (pe.prototype.set = function (e, a) {
            var n = this.__data__,
              t = ve(n, e);
            return t < 0 ? n.push([e, a]) : (n[t][1] = a), this;
          }),
          (be.prototype.clear = function () {
            this.__data__ = {
              hash: new he(),
              map: new (ae || pe)(),
              string: new he(),
            };
          }),
          (be.prototype.delete = function (e) {
            return Me(this, e).delete(e);
          }),
          (be.prototype.get = function (e) {
            return Me(this, e).get(e);
          }),
          (be.prototype.has = function (e) {
            return Me(this, e).has(e);
          }),
          (be.prototype.set = function (e, a) {
            return Me(this, e).set(e, a), this;
          }),
          (fe.prototype.add = fe.prototype.push =
            function (e) {
              return this.__data__.set(e, t), this;
            }),
          (fe.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (ge.prototype.clear = function () {
            this.__data__ = new pe();
          }),
          (ge.prototype.delete = function (e) {
            return this.__data__.delete(e);
          }),
          (ge.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (ge.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (ge.prototype.set = function (e, a) {
            var n = this.__data__;
            if (n instanceof pe) {
              var t = n.__data__;
              if (!ae || t.length < 199) return t.push([e, a]), this;
              n = this.__data__ = new be(t);
            }
            return n.set(e, a), this;
          });
        var Pe = function (e) {
          return J.call(e);
        };
        function Ee(e, a) {
          return (
            !!(a = null == a ? r : a) &&
            ("number" == typeof e || S.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < a
          );
        }
        function Ie(e) {
          return e == e && !Oe(e);
        }
        function we(e) {
          if (null != e) {
            try {
              return K.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }
        function ke(e, a) {
          return e === a || (e != e && a != a);
        }
        ((ee && Pe(new ee(new ArrayBuffer(1))) != A) ||
          (ae && Pe(new ae()) != d) ||
          (ne && Pe(ne.resolve()) != p) ||
          (te && Pe(new te()) != f) ||
          (re && Pe(new re()) != v)) &&
          (Pe = function (e) {
            var a = J.call(e),
              n = a == h ? e.constructor : void 0,
              t = n ? we(n) : void 0;
            if (t)
              switch (t) {
                case oe:
                  return A;
                case se:
                  return d;
                case le:
                  return p;
                case ce:
                  return f;
                case ue:
                  return v;
              }
            return a;
          });
        var Be = Array.isArray;
        function Re(e) {
          return null != e && xe(e.length) && !Le(e);
        }
        function Le(e) {
          var a = Oe(e) ? J.call(e) : "";
          return a == u || "[object GeneratorFunction]" == a;
        }
        function xe(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
        }
        function Oe(e) {
          var a = typeof e;
          return !!e && ("object" == a || "function" == a);
        }
        function Ge(e) {
          return !!e && "object" == typeof e;
        }
        var De = R
          ? (function (e) {
              return function (a) {
                return e(a);
              };
            })(R)
          : function (e) {
              return Ge(e) && xe(e.length) && !!M[J.call(e)];
            };
        function Ne(e) {
          return Re(e) ? ye(e) : _e(e);
        }
        e.exports = function (e, a) {
          return (
            e === a ||
            (function (e, a, n, t) {
              var r = n.length,
                i = r,
                o = !t;
              if (null == e) return !i;
              for (e = Object(e); r--; ) {
                var s = n[r];
                if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
              }
              for (; ++r < i; ) {
                var l = (s = n[r])[0],
                  c = e[l],
                  u = s[1];
                if (o && s[2]) {
                  if (void 0 === c && !(l in e)) return !1;
                } else {
                  var d = new ge();
                  if (t) var m = t(c, u, l, e, a, d);
                  if (!(void 0 === m ? Ce(u, c, t, 3, d) : m)) return !1;
                }
              }
              return !0;
            })(
              e,
              a,
              (function (e) {
                for (var a = Ne(e), n = a.length; n--; ) {
                  var t = a[n],
                    r = e[t];
                  a[n] = [t, r, Ie(r)];
                }
                return a;
              })(a)
            )
          );
        };
      },
      2378: (e, a, n) => {
        e = n.nmd(e);
        var t = "__lodash_hash_undefined__",
          r = 9007199254740991,
          i = "[object Arguments]",
          o = "[object Function]",
          s = "[object Object]",
          l = /^\[object .+?Constructor\]$/,
          c = /^(?:0|[1-9]\d*)$/,
          u = {};
        (u["[object Float32Array]"] =
          u["[object Float64Array]"] =
          u["[object Int8Array]"] =
          u["[object Int16Array]"] =
          u["[object Int32Array]"] =
          u["[object Uint8Array]"] =
          u["[object Uint8ClampedArray]"] =
          u["[object Uint16Array]"] =
          u["[object Uint32Array]"] =
            !0),
          (u[i] =
            u["[object Array]"] =
            u["[object ArrayBuffer]"] =
            u["[object Boolean]"] =
            u["[object DataView]"] =
            u["[object Date]"] =
            u["[object Error]"] =
            u[o] =
            u["[object Map]"] =
            u["[object Number]"] =
            u[s] =
            u["[object RegExp]"] =
            u["[object Set]"] =
            u["[object String]"] =
            u["[object WeakMap]"] =
              !1);
        var d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          m = "object" == typeof self && self && self.Object === Object && self,
          h = d || m || Function("return this")(),
          p = a && !a.nodeType && a,
          b = p && e && !e.nodeType && e,
          f = b && b.exports === p,
          g = f && d.process,
          y = (function () {
            try {
              var e = b && b.require && b.require("util").types;
              return e || (g && g.binding && g.binding("util"));
            } catch (e) {}
          })(),
          v = y && y.isTypedArray;
        function C(e, a, n) {
          switch (n.length) {
            case 0:
              return e.call(a);
            case 1:
              return e.call(a, n[0]);
            case 2:
              return e.call(a, n[0], n[1]);
            case 3:
              return e.call(a, n[0], n[1], n[2]);
          }
          return e.apply(a, n);
        }
        var A,
          _,
          S,
          M = Array.prototype,
          T = Function.prototype,
          P = Object.prototype,
          E = h["__core-js_shared__"],
          I = T.toString,
          w = P.hasOwnProperty,
          k = (A = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + A
            : "",
          B = P.toString,
          R = I.call(Object),
          L = RegExp(
            "^" +
              I.call(w)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = f ? h.Buffer : void 0,
          O = h.Symbol,
          G = h.Uint8Array,
          D = x ? x.allocUnsafe : void 0,
          N =
            ((_ = Object.getPrototypeOf),
            (S = Object),
            function (e) {
              return _(S(e));
            }),
          F = Object.create,
          H = P.propertyIsEnumerable,
          j = M.splice,
          U = O ? O.toStringTag : void 0,
          z = (function () {
            try {
              var e = be(Object, "defineProperty");
              return e({}, "", {}), e;
            } catch (e) {}
          })(),
          W = x ? x.isBuffer : void 0,
          K = Math.max,
          V = Date.now,
          J = be(h, "Map"),
          q = be(Object, "create"),
          Y = (function () {
            function e() {}
            return function (a) {
              if (!Ee(a)) return {};
              if (F) return F(a);
              e.prototype = a;
              var n = new e();
              return (e.prototype = void 0), n;
            };
          })();
        function Z(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function $(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function X(e) {
          var a = -1,
            n = null == e ? 0 : e.length;
          for (this.clear(); ++a < n; ) {
            var t = e[a];
            this.set(t[0], t[1]);
          }
        }
        function Q(e) {
          var a = (this.__data__ = new $(e));
          this.size = a.size;
        }
        function ee(e, a) {
          var n = _e(e),
            t = !n && Ae(e),
            r = !n && !t && Me(e),
            i = !n && !t && !r && we(e),
            o = n || t || r || i,
            s = o
              ? (function (e, a) {
                  for (var n = -1, t = Array(e); ++n < e; ) t[n] = a(n);
                  return t;
                })(e.length, String)
              : [],
            l = s.length;
          for (var c in e)
            (!a && !w.call(e, c)) ||
              (o &&
                ("length" == c ||
                  (r && ("offset" == c || "parent" == c)) ||
                  (i &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  fe(c, l))) ||
              s.push(c);
          return s;
        }
        function ae(e, a, n) {
          ((void 0 !== n && !Ce(e[a], n)) || (void 0 === n && !(a in e))) &&
            re(e, a, n);
        }
        function ne(e, a, n) {
          var t = e[a];
          (w.call(e, a) && Ce(t, n) && (void 0 !== n || a in e)) || re(e, a, n);
        }
        function te(e, a) {
          for (var n = e.length; n--; ) if (Ce(e[n][0], a)) return n;
          return -1;
        }
        function re(e, a, n) {
          "__proto__" == a && z
            ? z(e, a, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (e[a] = n);
        }
        (Z.prototype.clear = function () {
          (this.__data__ = q ? q(null) : {}), (this.size = 0);
        }),
          (Z.prototype.delete = function (e) {
            var a = this.has(e) && delete this.__data__[e];
            return (this.size -= a ? 1 : 0), a;
          }),
          (Z.prototype.get = function (e) {
            var a = this.__data__;
            if (q) {
              var n = a[e];
              return n === t ? void 0 : n;
            }
            return w.call(a, e) ? a[e] : void 0;
          }),
          (Z.prototype.has = function (e) {
            var a = this.__data__;
            return q ? void 0 !== a[e] : w.call(a, e);
          }),
          (Z.prototype.set = function (e, a) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = q && void 0 === a ? t : a),
              this
            );
          }),
          ($.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
          ($.prototype.delete = function (e) {
            var a = this.__data__,
              n = te(a, e);
            return (
              !(n < 0) &&
              (n == a.length - 1 ? a.pop() : j.call(a, n, 1), --this.size, !0)
            );
          }),
          ($.prototype.get = function (e) {
            var a = this.__data__,
              n = te(a, e);
            return n < 0 ? void 0 : a[n][1];
          }),
          ($.prototype.has = function (e) {
            return te(this.__data__, e) > -1;
          }),
          ($.prototype.set = function (e, a) {
            var n = this.__data__,
              t = te(n, e);
            return t < 0 ? (++this.size, n.push([e, a])) : (n[t][1] = a), this;
          }),
          (X.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new Z(),
                map: new (J || $)(),
                string: new Z(),
              });
          }),
          (X.prototype.delete = function (e) {
            var a = pe(this, e).delete(e);
            return (this.size -= a ? 1 : 0), a;
          }),
          (X.prototype.get = function (e) {
            return pe(this, e).get(e);
          }),
          (X.prototype.has = function (e) {
            return pe(this, e).has(e);
          }),
          (X.prototype.set = function (e, a) {
            var n = pe(this, e),
              t = n.size;
            return n.set(e, a), (this.size += n.size == t ? 0 : 1), this;
          }),
          (Q.prototype.clear = function () {
            (this.__data__ = new $()), (this.size = 0);
          }),
          (Q.prototype.delete = function (e) {
            var a = this.__data__,
              n = a.delete(e);
            return (this.size = a.size), n;
          }),
          (Q.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (Q.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (Q.prototype.set = function (e, a) {
            var n = this.__data__;
            if (n instanceof $) {
              var t = n.__data__;
              if (!J || t.length < 199)
                return t.push([e, a]), (this.size = ++n.size), this;
              n = this.__data__ = new X(t);
            }
            return n.set(e, a), (this.size = n.size), this;
          });
        var ie,
          oe = function (e, a, n) {
            for (var t = -1, r = Object(e), i = n(e), o = i.length; o--; ) {
              var s = i[ie ? o : ++t];
              if (!1 === a(r[s], s, r)) break;
            }
            return e;
          };
        function se(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : U && U in Object(e)
            ? (function (e) {
                var a = w.call(e, U),
                  n = e[U];
                try {
                  e[U] = void 0;
                  var t = !0;
                } catch (e) {}
                var r = B.call(e);
                t && (a ? (e[U] = n) : delete e[U]);
                return r;
              })(e)
            : (function (e) {
                return B.call(e);
              })(e);
        }
        function le(e) {
          return Ie(e) && se(e) == i;
        }
        function ce(e) {
          return (
            !(
              !Ee(e) ||
              (function (e) {
                return !!k && k in e;
              })(e)
            ) &&
            (Te(e) ? L : l).test(
              (function (e) {
                if (null != e) {
                  try {
                    return I.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              })(e)
            )
          );
        }
        function ue(e) {
          if (!Ee(e))
            return (function (e) {
              var a = [];
              if (null != e) for (var n in Object(e)) a.push(n);
              return a;
            })(e);
          var a = ge(e),
            n = [];
          for (var t in e)
            ("constructor" != t || (!a && w.call(e, t))) && n.push(t);
          return n;
        }
        function de(e, a, n, t, r) {
          e !== a &&
            oe(
              a,
              function (i, o) {
                if ((r || (r = new Q()), Ee(i)))
                  !(function (e, a, n, t, r, i, o) {
                    var l = ye(e, n),
                      c = ye(a, n),
                      u = o.get(c);
                    if (u) return void ae(e, n, u);
                    var d = i ? i(l, c, n + "", e, a, o) : void 0,
                      m = void 0 === d;
                    if (m) {
                      var h = _e(c),
                        p = !h && Me(c),
                        b = !h && !p && we(c);
                      (d = c),
                        h || p || b
                          ? _e(l)
                            ? (d = l)
                            : Ie((C = l)) && Se(C)
                            ? (d = (function (e, a) {
                                var n = -1,
                                  t = e.length;
                                a || (a = Array(t));
                                for (; ++n < t; ) a[n] = e[n];
                                return a;
                              })(l))
                            : p
                            ? ((m = !1),
                              (d = (function (e, a) {
                                if (a) return e.slice();
                                var n = e.length,
                                  t = D ? D(n) : new e.constructor(n);
                                return e.copy(t), t;
                              })(c, !0)))
                            : b
                            ? ((m = !1),
                              (f = c),
                              (g = !0
                                ? ((y = f.buffer),
                                  (v = new y.constructor(y.byteLength)),
                                  new G(v).set(new G(y)),
                                  v)
                                : f.buffer),
                              (d = new f.constructor(
                                g,
                                f.byteOffset,
                                f.length
                              )))
                            : (d = [])
                          : (function (e) {
                              if (!Ie(e) || se(e) != s) return !1;
                              var a = N(e);
                              if (null === a) return !0;
                              var n = w.call(a, "constructor") && a.constructor;
                              return (
                                "function" == typeof n &&
                                n instanceof n &&
                                I.call(n) == R
                              );
                            })(c) || Ae(c)
                          ? ((d = l),
                            Ae(l)
                              ? (d = (function (e) {
                                  return (function (e, a, n, t) {
                                    var r = !n;
                                    n || (n = {});
                                    var i = -1,
                                      o = a.length;
                                    for (; ++i < o; ) {
                                      var s = a[i],
                                        l = t ? t(n[s], e[s], s, n, e) : void 0;
                                      void 0 === l && (l = e[s]),
                                        r ? re(n, s, l) : ne(n, s, l);
                                    }
                                    return n;
                                  })(e, ke(e));
                                })(l))
                              : (Ee(l) && !Te(l)) ||
                                (d = (function (e) {
                                  return "function" != typeof e.constructor ||
                                    ge(e)
                                    ? {}
                                    : Y(N(e));
                                })(c)))
                          : (m = !1);
                    }
                    var f, g, y, v;
                    var C;
                    m && (o.set(c, d), r(d, c, t, i, o), o.delete(c));
                    ae(e, n, d);
                  })(e, a, o, n, de, t, r);
                else {
                  var l = t ? t(ye(e, o), i, o + "", e, a, r) : void 0;
                  void 0 === l && (l = i), ae(e, o, l);
                }
              },
              ke
            );
        }
        function me(e, a) {
          return ve(
            (function (e, a, n) {
              return (
                (a = K(void 0 === a ? e.length - 1 : a, 0)),
                function () {
                  for (
                    var t = arguments,
                      r = -1,
                      i = K(t.length - a, 0),
                      o = Array(i);
                    ++r < i;

                  )
                    o[r] = t[a + r];
                  r = -1;
                  for (var s = Array(a + 1); ++r < a; ) s[r] = t[r];
                  return (s[a] = n(o)), C(e, this, s);
                }
              );
            })(e, a, Le),
            e + ""
          );
        }
        var he = z
          ? function (e, a) {
              return z(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value:
                  ((n = a),
                  function () {
                    return n;
                  }),
                writable: !0,
              });
              var n;
            }
          : Le;
        function pe(e, a) {
          var n,
            t,
            r = e.__data__;
          return (
            "string" == (t = typeof (n = a)) ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
              ? "__proto__" !== n
              : null === n
          )
            ? r["string" == typeof a ? "string" : "hash"]
            : r.map;
        }
        function be(e, a) {
          var n = (function (e, a) {
            return null == e ? void 0 : e[a];
          })(e, a);
          return ce(n) ? n : void 0;
        }
        function fe(e, a) {
          var n = typeof e;
          return (
            !!(a = null == a ? r : a) &&
            ("number" == n || ("symbol" != n && c.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < a
          );
        }
        function ge(e) {
          var a = e && e.constructor;
          return e === (("function" == typeof a && a.prototype) || P);
        }
        function ye(e, a) {
          if (
            ("constructor" !== a || "function" != typeof e[a]) &&
            "__proto__" != a
          )
            return e[a];
        }
        var ve = (function (e) {
          var a = 0,
            n = 0;
          return function () {
            var t = V(),
              r = 16 - (t - n);
            if (((n = t), r > 0)) {
              if (++a >= 800) return arguments[0];
            } else a = 0;
            return e.apply(void 0, arguments);
          };
        })(he);
        function Ce(e, a) {
          return e === a || (e != e && a != a);
        }
        var Ae = le(
            (function () {
              return arguments;
            })()
          )
            ? le
            : function (e) {
                return Ie(e) && w.call(e, "callee") && !H.call(e, "callee");
              },
          _e = Array.isArray;
        function Se(e) {
          return null != e && Pe(e.length) && !Te(e);
        }
        var Me =
          W ||
          function () {
            return !1;
          };
        function Te(e) {
          if (!Ee(e)) return !1;
          var a = se(e);
          return (
            a == o ||
            "[object GeneratorFunction]" == a ||
            "[object AsyncFunction]" == a ||
            "[object Proxy]" == a
          );
        }
        function Pe(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
        }
        function Ee(e) {
          var a = typeof e;
          return null != e && ("object" == a || "function" == a);
        }
        function Ie(e) {
          return null != e && "object" == typeof e;
        }
        var we = v
          ? (function (e) {
              return function (a) {
                return e(a);
              };
            })(v)
          : function (e) {
              return Ie(e) && Pe(e.length) && !!u[se(e)];
            };
        function ke(e) {
          return Se(e) ? ee(e, !0) : ue(e);
        }
        var Be,
          Re =
            ((Be = function (e, a, n) {
              de(e, a, n);
            }),
            me(function (e, a) {
              var n = -1,
                t = a.length,
                r = t > 1 ? a[t - 1] : void 0,
                i = t > 2 ? a[2] : void 0;
              for (
                r = Be.length > 3 && "function" == typeof r ? (t--, r) : void 0,
                  i &&
                    (function (e, a, n) {
                      if (!Ee(n)) return !1;
                      var t = typeof a;
                      return (
                        !!("number" == t
                          ? Se(n) && fe(a, n.length)
                          : "string" == t && (a in n)) && Ce(n[a], e)
                      );
                    })(a[0], a[1], i) &&
                    ((r = t < 3 ? void 0 : r), (t = 1)),
                  e = Object(e);
                ++n < t;

              ) {
                var o = a[n];
                o && Be(e, o, n, r);
              }
              return e;
            }));
        function Le(e) {
          return e;
        }
        e.exports = Re;
      },
      8917: (e) => {
        var a = 1 / 0,
          n = 17976931348623157e292,
          t = NaN,
          r = "[object Symbol]",
          i = /^\s+|\s+$/g,
          o = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          c = parseInt,
          u = Object.prototype.toString;
        function d(e, d) {
          var h;
          if ("function" != typeof d)
            throw new TypeError("Expected a function");
          return (
            (e = (function (e) {
              var d = (function (e) {
                  if (!e) return 0 === e ? e : 0;
                  if (
                    (e = (function (e) {
                      if ("number" == typeof e) return e;
                      if (
                        (function (e) {
                          return (
                            "symbol" == typeof e ||
                            ((function (e) {
                              return !!e && "object" == typeof e;
                            })(e) &&
                              u.call(e) == r)
                          );
                        })(e)
                      )
                        return t;
                      if (m(e)) {
                        var a =
                          "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = m(a) ? a + "" : a;
                      }
                      if ("string" != typeof e) return 0 === e ? e : +e;
                      e = e.replace(i, "");
                      var n = s.test(e);
                      return n || l.test(e)
                        ? c(e.slice(2), n ? 2 : 8)
                        : o.test(e)
                        ? t
                        : +e;
                    })(e)) === a ||
                    e === -1 / 0
                  ) {
                    return (e < 0 ? -1 : 1) * n;
                  }
                  return e == e ? e : 0;
                })(e),
                h = d % 1;
              return d == d ? (h ? d - h : d) : 0;
            })(e)),
            function () {
              return (
                --e > 0 && (h = d.apply(this, arguments)),
                e <= 1 && (d = void 0),
                h
              );
            }
          );
        }
        function m(e) {
          var a = typeof e;
          return !!e && ("object" == a || "function" == a);
        }
        e.exports = function (e) {
          return d(2, e);
        };
      },
      5030: (e, a, n) => {
        var t = 9007199254740991,
          r = "[object Arguments]",
          i = "[object Function]",
          o = "[object GeneratorFunction]",
          s = "[object Symbol]",
          l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          u = l || c || Function("return this")();
        function d(e, a, n) {
          switch (n.length) {
            case 0:
              return e.call(a);
            case 1:
              return e.call(a, n[0]);
            case 2:
              return e.call(a, n[0], n[1]);
            case 3:
              return e.call(a, n[0], n[1], n[2]);
          }
          return e.apply(a, n);
        }
        function m(e, a) {
          for (var n = -1, t = a.length, r = e.length; ++n < t; )
            e[r + n] = a[n];
          return e;
        }
        var h = Object.prototype,
          p = h.hasOwnProperty,
          b = h.toString,
          f = u.Symbol,
          g = h.propertyIsEnumerable,
          y = f ? f.isConcatSpreadable : void 0,
          v = Math.max;
        function C(e, a, n, t, r) {
          var i = -1,
            o = e.length;
          for (n || (n = A), r || (r = []); ++i < o; ) {
            var s = e[i];
            a > 0 && n(s)
              ? a > 1
                ? C(s, a - 1, n, t, r)
                : m(r, s)
              : t || (r[r.length] = s);
          }
          return r;
        }
        function A(e) {
          return (
            S(e) ||
            (function (e) {
              return (
                (function (e) {
                  return (
                    M(e) &&
                    (function (e) {
                      return (
                        null != e &&
                        (function (e) {
                          return (
                            "number" == typeof e &&
                            e > -1 &&
                            e % 1 == 0 &&
                            e <= t
                          );
                        })(e.length) &&
                        !(function (e) {
                          var a = (function (e) {
                            var a = typeof e;
                            return !!e && ("object" == a || "function" == a);
                          })(e)
                            ? b.call(e)
                            : "";
                          return a == i || a == o;
                        })(e)
                      );
                    })(e)
                  );
                })(e) &&
                p.call(e, "callee") &&
                (!g.call(e, "callee") || b.call(e) == r)
              );
            })(e) ||
            !!(y && e && e[y])
          );
        }
        function _(e) {
          if (
            "string" == typeof e ||
            (function (e) {
              return "symbol" == typeof e || (M(e) && b.call(e) == s);
            })(e)
          )
            return e;
          var a = e + "";
          return "0" == a && 1 / e == -Infinity ? "-0" : a;
        }
        var S = Array.isArray;
        function M(e) {
          return !!e && "object" == typeof e;
        }
        var T,
          P,
          E =
            ((T = function (e, a) {
              return null == e
                ? {}
                : (function (e, a) {
                    return (function (e, a, n) {
                      for (var t = -1, r = a.length, i = {}; ++t < r; ) {
                        var o = a[t],
                          s = e[o];
                        n(s, o) && (i[o] = s);
                      }
                      return i;
                    })((e = Object(e)), a, function (a, n) {
                      return n in e;
                    });
                  })(
                    e,
                    (function (e, a) {
                      for (
                        var n = -1, t = e ? e.length : 0, r = Array(t);
                        ++n < t;

                      )
                        r[n] = a(e[n], n, e);
                      return r;
                    })(C(a, 1), _)
                  );
            }),
            (P = v(void 0 === P ? T.length - 1 : P, 0)),
            function () {
              for (
                var e = arguments, a = -1, n = v(e.length - P, 0), t = Array(n);
                ++a < n;

              )
                t[a] = e[P + a];
              a = -1;
              for (var r = Array(P + 1); ++a < P; ) r[a] = e[a];
              return (r[P] = t), d(T, this, r);
            });
        e.exports = E;
      },
      6961: (e, a, n) => {
        var t,
          r = (function () {
            var e = String.fromCharCode,
              a =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              n =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
              t = {};
            function r(e, a) {
              if (!t[e]) {
                t[e] = {};
                for (var n = 0; n < e.length; n++) t[e][e.charAt(n)] = n;
              }
              return t[e][a];
            }
            var i = {
              compressToBase64: function (e) {
                if (null == e) return "";
                var n = i._compress(e, 6, function (e) {
                  return a.charAt(e);
                });
                switch (n.length % 4) {
                  default:
                  case 0:
                    return n;
                  case 1:
                    return n + "===";
                  case 2:
                    return n + "==";
                  case 3:
                    return n + "=";
                }
              },
              decompressFromBase64: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : i._decompress(e.length, 32, function (n) {
                      return r(a, e.charAt(n));
                    });
              },
              compressToUTF16: function (a) {
                return null == a
                  ? ""
                  : i._compress(a, 15, function (a) {
                      return e(a + 32);
                    }) + " ";
              },
              decompressFromUTF16: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : i._decompress(e.length, 16384, function (a) {
                      return e.charCodeAt(a) - 32;
                    });
              },
              compressToUint8Array: function (e) {
                for (
                  var a = i.compress(e),
                    n = new Uint8Array(2 * a.length),
                    t = 0,
                    r = a.length;
                  t < r;
                  t++
                ) {
                  var o = a.charCodeAt(t);
                  (n[2 * t] = o >>> 8), (n[2 * t + 1] = o % 256);
                }
                return n;
              },
              decompressFromUint8Array: function (a) {
                if (null == a) return i.decompress(a);
                for (
                  var n = new Array(a.length / 2), t = 0, r = n.length;
                  t < r;
                  t++
                )
                  n[t] = 256 * a[2 * t] + a[2 * t + 1];
                var o = [];
                return (
                  n.forEach(function (a) {
                    o.push(e(a));
                  }),
                  i.decompress(o.join(""))
                );
              },
              compressToEncodedURIComponent: function (e) {
                return null == e
                  ? ""
                  : i._compress(e, 6, function (e) {
                      return n.charAt(e);
                    });
              },
              decompressFromEncodedURIComponent: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : ((e = e.replace(/ /g, "+")),
                    i._decompress(e.length, 32, function (a) {
                      return r(n, e.charAt(a));
                    }));
              },
              compress: function (a) {
                return i._compress(a, 16, function (a) {
                  return e(a);
                });
              },
              _compress: function (e, a, n) {
                if (null == e) return "";
                var t,
                  r,
                  i,
                  o = {},
                  s = {},
                  l = "",
                  c = "",
                  u = "",
                  d = 2,
                  m = 3,
                  h = 2,
                  p = [],
                  b = 0,
                  f = 0;
                for (i = 0; i < e.length; i += 1)
                  if (
                    ((l = e.charAt(i)),
                    Object.prototype.hasOwnProperty.call(o, l) ||
                      ((o[l] = m++), (s[l] = !0)),
                    (c = u + l),
                    Object.prototype.hasOwnProperty.call(o, c))
                  )
                    u = c;
                  else {
                    if (Object.prototype.hasOwnProperty.call(s, u)) {
                      if (u.charCodeAt(0) < 256) {
                        for (t = 0; t < h; t++)
                          (b <<= 1),
                            f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++;
                        for (r = u.charCodeAt(0), t = 0; t < 8; t++)
                          (b = (b << 1) | (1 & r)),
                            f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                            (r >>= 1);
                      } else {
                        for (r = 1, t = 0; t < h; t++)
                          (b = (b << 1) | r),
                            f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                            (r = 0);
                        for (r = u.charCodeAt(0), t = 0; t < 16; t++)
                          (b = (b << 1) | (1 & r)),
                            f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                            (r >>= 1);
                      }
                      0 == --d && ((d = Math.pow(2, h)), h++), delete s[u];
                    } else
                      for (r = o[u], t = 0; t < h; t++)
                        (b = (b << 1) | (1 & r)),
                          f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                          (r >>= 1);
                    0 == --d && ((d = Math.pow(2, h)), h++),
                      (o[c] = m++),
                      (u = String(l));
                  }
                if ("" !== u) {
                  if (Object.prototype.hasOwnProperty.call(s, u)) {
                    if (u.charCodeAt(0) < 256) {
                      for (t = 0; t < h; t++)
                        (b <<= 1),
                          f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++;
                      for (r = u.charCodeAt(0), t = 0; t < 8; t++)
                        (b = (b << 1) | (1 & r)),
                          f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                          (r >>= 1);
                    } else {
                      for (r = 1, t = 0; t < h; t++)
                        (b = (b << 1) | r),
                          f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                          (r = 0);
                      for (r = u.charCodeAt(0), t = 0; t < 16; t++)
                        (b = (b << 1) | (1 & r)),
                          f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                          (r >>= 1);
                    }
                    0 == --d && ((d = Math.pow(2, h)), h++), delete s[u];
                  } else
                    for (r = o[u], t = 0; t < h; t++)
                      (b = (b << 1) | (1 & r)),
                        f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                        (r >>= 1);
                  0 == --d && ((d = Math.pow(2, h)), h++);
                }
                for (r = 2, t = 0; t < h; t++)
                  (b = (b << 1) | (1 & r)),
                    f == a - 1 ? ((f = 0), p.push(n(b)), (b = 0)) : f++,
                    (r >>= 1);
                for (;;) {
                  if (((b <<= 1), f == a - 1)) {
                    p.push(n(b));
                    break;
                  }
                  f++;
                }
                return p.join("");
              },
              decompress: function (e) {
                return null == e
                  ? ""
                  : "" == e
                  ? null
                  : i._decompress(e.length, 32768, function (a) {
                      return e.charCodeAt(a);
                    });
              },
              _decompress: function (a, n, t) {
                var r,
                  i,
                  o,
                  s,
                  l,
                  c,
                  u,
                  d = [],
                  m = 4,
                  h = 4,
                  p = 3,
                  b = "",
                  f = [],
                  g = { val: t(0), position: n, index: 1 };
                for (r = 0; r < 3; r += 1) d[r] = r;
                for (o = 0, l = Math.pow(2, 2), c = 1; c != l; )
                  (s = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position &&
                      ((g.position = n), (g.val = t(g.index++))),
                    (o |= (s > 0 ? 1 : 0) * c),
                    (c <<= 1);
                switch (o) {
                  case 0:
                    for (o = 0, l = Math.pow(2, 8), c = 1; c != l; )
                      (s = g.val & g.position),
                        (g.position >>= 1),
                        0 == g.position &&
                          ((g.position = n), (g.val = t(g.index++))),
                        (o |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    u = e(o);
                    break;
                  case 1:
                    for (o = 0, l = Math.pow(2, 16), c = 1; c != l; )
                      (s = g.val & g.position),
                        (g.position >>= 1),
                        0 == g.position &&
                          ((g.position = n), (g.val = t(g.index++))),
                        (o |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    u = e(o);
                    break;
                  case 2:
                    return "";
                }
                for (d[3] = u, i = u, f.push(u); ; ) {
                  if (g.index > a) return "";
                  for (o = 0, l = Math.pow(2, p), c = 1; c != l; )
                    (s = g.val & g.position),
                      (g.position >>= 1),
                      0 == g.position &&
                        ((g.position = n), (g.val = t(g.index++))),
                      (o |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  switch ((u = o)) {
                    case 0:
                      for (o = 0, l = Math.pow(2, 8), c = 1; c != l; )
                        (s = g.val & g.position),
                          (g.position >>= 1),
                          0 == g.position &&
                            ((g.position = n), (g.val = t(g.index++))),
                          (o |= (s > 0 ? 1 : 0) * c),
                          (c <<= 1);
                      (d[h++] = e(o)), (u = h - 1), m--;
                      break;
                    case 1:
                      for (o = 0, l = Math.pow(2, 16), c = 1; c != l; )
                        (s = g.val & g.position),
                          (g.position >>= 1),
                          0 == g.position &&
                            ((g.position = n), (g.val = t(g.index++))),
                          (o |= (s > 0 ? 1 : 0) * c),
                          (c <<= 1);
                      (d[h++] = e(o)), (u = h - 1), m--;
                      break;
                    case 2:
                      return f.join("");
                  }
                  if ((0 == m && ((m = Math.pow(2, p)), p++), d[u])) b = d[u];
                  else {
                    if (u !== h) return null;
                    b = i + i.charAt(0);
                  }
                  f.push(b),
                    (d[h++] = i + b.charAt(0)),
                    (i = b),
                    0 == --m && ((m = Math.pow(2, p)), p++);
                }
              },
            };
            return i;
          })();
        void 0 ===
          (t = function () {
            return r;
          }.call(a, n, a, e)) || (e.exports = t);
      },
      8893: (e, a, n) => {
        n.d(a, { Z: () => t });
        const t =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      },
      3653: (e, a, n) => {
        var t;
        n.d(a, { Z: () => i });
        var r = new Uint8Array(16);
        function i() {
          if (
            !t &&
            !(t =
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
          return t(r);
        }
      },
      3958: (e, a, n) => {
        n.d(a, { Z: () => o });
        for (var t = n(7283), r = [], i = 0; i < 256; ++i)
          r.push((i + 256).toString(16).substr(1));
        const o = function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              r[e[a + 0]] +
              r[e[a + 1]] +
              r[e[a + 2]] +
              r[e[a + 3]] +
              "-" +
              r[e[a + 4]] +
              r[e[a + 5]] +
              "-" +
              r[e[a + 6]] +
              r[e[a + 7]] +
              "-" +
              r[e[a + 8]] +
              r[e[a + 9]] +
              "-" +
              r[e[a + 10]] +
              r[e[a + 11]] +
              r[e[a + 12]] +
              r[e[a + 13]] +
              r[e[a + 14]] +
              r[e[a + 15]]
            ).toLowerCase();
          if (!(0, t.Z)(n)) throw TypeError("Stringified UUID is invalid");
          return n;
        };
      },
      7314: (e, a, n) => {
        n.d(a, { Z: () => c });
        var t,
          r,
          i = n(3653),
          o = n(3958),
          s = 0,
          l = 0;
        const c = function (e, a, n) {
          var c = (a && n) || 0,
            u = a || new Array(16),
            d = (e = e || {}).node || t,
            m = void 0 !== e.clockseq ? e.clockseq : r;
          if (null == d || null == m) {
            var h = e.random || (e.rng || i.Z)();
            null == d && (d = t = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
              null == m && (m = r = 16383 & ((h[6] << 8) | h[7]));
          }
          var p = void 0 !== e.msecs ? e.msecs : Date.now(),
            b = void 0 !== e.nsecs ? e.nsecs : l + 1,
            f = p - s + (b - l) / 1e4;
          if (
            (f < 0 && void 0 === e.clockseq && (m = (m + 1) & 16383),
            (f < 0 || p > s) && void 0 === e.nsecs && (b = 0),
            b >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (s = p), (l = b), (r = m);
          var g = (1e4 * (268435455 & (p += 122192928e5)) + b) % 4294967296;
          (u[c++] = (g >>> 24) & 255),
            (u[c++] = (g >>> 16) & 255),
            (u[c++] = (g >>> 8) & 255),
            (u[c++] = 255 & g);
          var y = ((p / 4294967296) * 1e4) & 268435455;
          (u[c++] = (y >>> 8) & 255),
            (u[c++] = 255 & y),
            (u[c++] = ((y >>> 24) & 15) | 16),
            (u[c++] = (y >>> 16) & 255),
            (u[c++] = (m >>> 8) | 128),
            (u[c++] = 255 & m);
          for (var v = 0; v < 6; ++v) u[c + v] = d[v];
          return a || (0, o.Z)(u);
        };
      },
      7283: (e, a, n) => {
        n.d(a, { Z: () => r });
        var t = n(8893);
        const r = function (e) {
          return "string" == typeof e && t.Z.test(e);
        };
      },
      2254: (e, a, n) => {
        n.d(a, { E8: () => o, Kx: () => l, bg: () => c, lj: () => s });
        var t = n(7314),
          r = n(9582),
          i = n(4886);
        function o(e = 0, a, n) {
          return {
            collectionId: n,
            configName: "",
            delay: 0,
            enabled: !0,
            httpMethod: "GET",
            id: (0, t.Z)(),
            index: e,
            interceptionPolicy: i.default.INTERCEPTION_POLICIES.MOCK.KEY,
            isExpanded: !0,
            lastInterceptionTimestamp: null,
            outgoingRequestPayload: "",
            plan: a,
            requestCount: 0,
            requestHeaders: i.default.DEFAULT_HEADERS,
            requestHookFn: "",
            requestPayload: "",
            requestPayloadMatchPolicy:
              i.default.REQUEST_PAYLOAD_MATCH_POLICY.EXACT,
            responseHeaders: i.default.DEFAULT_HEADERS,
            responseHookFn: "",
            responsePayload: '{ "status": 200, "response": "OK" }',
            scrollEditorsPositions: {},
            status: 200,
            urlExpression: "",
          };
        }
        function s(e) {
          const a = (0, t.Z)(),
            n = (0, r.t)("rc_config_name_copy_duplication", {
              name: e.configName,
            }),
            { responseHeaders: i, requestHeaders: o } = e;
          return {
            ...e,
            id: a,
            configName: n,
            enabled: !1,
            requestCount: 0,
            responseHeaders: i.map((e) => ({ ...e })),
            requestHeaders: o.map((e) => ({ ...e })),
            isExpanded: !0,
          };
        }
        function l(e = []) {
          if (!e) return "";
          const a = Object.values(e).reduce((e, a) => e + a.requestCount, 0);
          return 0 === a ? "" : a > 99 ? "99+" : `${a}`;
        }
        function c(e) {
          switch (e) {
            case "SUCCESS":
              return "✅ㅤ";
            case "ERROR":
              return "❌ㅤ";
            case "WARNING":
              return "⚠️ㅤ";
            case "PARTY":
              return "🎉ㅤ";
            default:
              return "";
          }
        }
      },
      8648: (e, a, n) => {
        n.d(a, { d: () => s });
        var t = n(4886),
          r = n(4747),
          i = n(2655),
          o = n(7432);
        function s(e) {
          let a = {},
            n = null;
          try {
            n = JSON.parse(e);
          } catch (e) {
            throw new t.default.ImportInvalidJSONError();
          }
          n &&
          Object.prototype.hasOwnProperty.call(n, "length") &&
          (0, r.WR)(n[0])
            ? (a.configurations = n)
            : n.configurations
            ? (a.configurations = n.configurations)
            : (a.configurations = []),
            n.variables ? (a.variables = n.variables) : (a.variables = []),
            n.collections
              ? (a.collections = n.collections)
              : (a.collections = []);
          const s = (0, r.Gu)(a.configurations);
          if (s) throw s;
          const l = (0, i.G)(a.variables);
          if (l) throw l;
          const c = (0, o.G)(a.collections);
          if (c) throw c;
          return {
            collections: (0, o.W)(a.collections),
            configurations: (0, r.WU)(a.configurations),
            variables: (0, i.W)(a.variables),
          };
        }
      },
      7432: (e, a, n) => {
        n.d(a, { G: () => o, W: () => s });
        var t = n(4886),
          r = n(2809);
        const i = [l("id"), l("name")];
        function o(e) {
          if (!e || !e.length) return null;
          return e.every((e) => i.every((a) => a(e)))
            ? null
            : new t.default.ImportInvalidTweakCollectionsFormatError();
        }
        function s(e) {
          return e && e.length
            ? e.map(({ id: e, name: a }) => ({ id: e, name: a }))
            : [];
        }
        function l(e) {
          return (a) =>
            !Object.prototype.hasOwnProperty.call(a, e) ||
            (0, r.A)(a, e, "string");
        }
      },
      4747: (e, a, n) => {
        n.d(a, { Gu: () => m, WR: () => l, WU: () => s });
        var t = n(7314),
          r = n(4886),
          i = n(2254),
          o = n(2809);
        function s(e) {
          return e.map((e, a) => {
            const n = (0, i.E8)(1e3 + a),
              {
                collectionId: o,
                contentType: s,
                delay: l,
                interceptionPolicy: c,
                isBreakpointEnabled: u,
                isLogpointEnabled: d,
                isRgx: m,
                label: h,
                method: p,
                outgoingRequestPayload: b,
                requestHeaders: f,
                requestPayload: g,
                requestPayloadMatchPolicy: y,
                responseHeaders: v,
                responseHook: C,
                requestHook: A,
                responsePayload: _,
                status: S,
                url: M,
              } = e;
            let T = o;
            T || (T = "");
            let P = c;
            P || (P = r.default.INTERCEPTION_POLICIES.MOCK.KEY);
            let E = u;
            null == u && (E = !1);
            let I = d;
            null == d && (I = !1);
            let w = b;
            w || (w = "");
            let k = f;
            k || (k = []);
            let B = y;
            B || (B = r.default.REQUEST_PAYLOAD_MATCH_POLICY.EXACT);
            let R = [];
            s &&
              (R = [
                {
                  id: (0, t.Z)(),
                  active: !0,
                  header: "Content-Type",
                  value: s,
                },
              ]),
              v && Object.prototype.hasOwnProperty.call(v, "length") && (R = v);
            let L = C;
            C || (L = "");
            let x = A;
            return (
              A || (x = ""),
              {
                ...n,
                collectionId: T,
                configName: h,
                delay: l,
                enabled: !1,
                httpMethod: p,
                interceptionPolicy: P,
                isBreakpointEnabled: E,
                isExpanded: !1,
                isLogpointEnabled: I,
                isRegexActive: m,
                outgoingRequestPayload: w,
                requestHeaders: k,
                requestPayload: g,
                requestPayloadMatchPolicy: B,
                responseHeaders: R,
                responseHookFn: L,
                requestHookFn: x,
                responsePayload: _,
                status: S,
                urlExpression: M,
              }
            );
          });
        }
        function l(e) {
          return (0, o.A)(e, "url", "string");
        }
        function c(e) {
          return (a) =>
            !Object.prototype.hasOwnProperty.call(a, e) ||
            (0, o.A)(a, e, "boolean");
        }
        function u(e) {
          return (a) =>
            !Object.prototype.hasOwnProperty.call(a, e) ||
            (0, o.A)(a, e, "string");
        }
        const d = [
          ...[
            function (e) {
              return (0, o.A)(e, "delay", "number");
            },
            function (e) {
              return (0, o.A)(e, "isRgx", "boolean");
            },
            function (e) {
              const a =
                  (0, o.A)(e, "contentType", "string") &&
                  r.default.CONTENT_TYPES_OPTIONS.includes(e.contentType),
                n = (0, o.A)(e, "responseHeaders", "object");
              return a || n;
            },
            function (e) {
              return (
                (0, o.A)(e, "method", "string") &&
                r.default.HTTP_METHOD_OPTIONS.includes(e.method)
              );
            },
            function (e) {
              return (0, o.A)(e, "requestPayload", "string");
            },
            function (e) {
              return (0, o.A)(e, "status", "number");
            },
            l,
          ],
          ...[
            function (e) {
              return (
                !Object.prototype.hasOwnProperty.call(
                  e,
                  "interceptionPolicy"
                ) ||
                ((0, o.A)(e, "interceptionPolicy", "string") &&
                  !!r.default.INTERCEPTION_POLICIES[e.interceptionPolicy])
              );
            },
            u("outgoingRequestPayload"),
            function (e) {
              return (
                !Object.prototype.hasOwnProperty.call(e, "requestHeaders") ||
                (0, o.A)(e, "requestHeaders", "array")
              );
            },
            function (e) {
              return (
                !Object.prototype.hasOwnProperty.call(
                  e,
                  "requestPayloadMatchPolicy"
                ) ||
                ((0, o.A)(e, "requestPayloadMatchPolicy", "string") &&
                  !!r.default.REQUEST_PAYLOAD_MATCH_POLICY[
                    e.requestPayloadMatchPolicy
                  ])
              );
            },
            c("isBreakpointEnabled"),
            c("isLogpointEnabled"),
            u("responseHook"),
            u("requestHook"),
            u("collectionId"),
          ],
        ];
        function m(e) {
          return e.every((e) => d.every((a) => a(e)))
            ? null
            : new r.default.ImportInvalidTweakDataFormatError();
        }
      },
      2809: (e, a, n) => {
        function t(e, a, n) {
          return "array" === n
            ? Object.prototype.hasOwnProperty.call(e, a) &&
                Object.prototype.hasOwnProperty.call(e[a], "length")
            : Object.prototype.hasOwnProperty.call(e, a) && typeof e[a] === n;
        }
        n.d(a, { A: () => t });
      },
      2655: (e, a, n) => {
        n.d(a, { G: () => l, W: () => o });
        var t = n(7314),
          r = n(4886),
          i = n(2809);
        function o(e) {
          return e.map(({ name: e, value: a }) => ({
            id: (0, t.Z)(),
            name: e,
            value: a,
          }));
        }
        const s = [
          function (e) {
            if (!(0, i.A)(e, "name", "string")) return !1;
            try {
              const a = e.name.match(r.default.VARIABLE_NAME_RGX);
              return a[0] && a[0].length === e.name.length;
            } catch (e) {
              return !1;
            }
          },
        ];
        function l(e) {
          return e.every((e) => s.every((a) => a(e)))
            ? null
            : new r.default.ImportInvalidTweakVariablesFormatError();
        }
      },
      4772: (e, a, n) => {
        n.r(a),
          n.d(a, {
            BROWSER: () => l,
            buildEmptyRule: () => r.E8,
            client: () => c,
            duplicateRule: () => r.lj,
            getFormattedBadgeCount: () => r.Kx,
            getMessageTypeEmoticon: () => r.bg,
            importData: () => o.d,
            mapFromArray: () => i.pW,
            mapToKeysArray: () => i.v,
            mapToValuesArray: () => i.OF,
            randomDelayAndResolve: () => s,
          });
        var t = n(5498),
          r = (n(4886), n(2254)),
          i = n(6994),
          o = n(8648);
        function s(e, { min: a = 50, max: n = 1200 } = { min: 50, max: 1200 }) {
          const t = (function (e, a) {
            return (
              (e = Math.ceil(e)),
              (a = Math.floor(a)),
              Math.floor(Math.random() * (a - e)) + e
            );
          })(a, n);
          return new Promise((a) => {
            setTimeout(() => {
              try {
                a(e());
              } catch (e) {
                0, a(null);
              }
            }, t);
          });
        }
        let l = "CHROME";
        const c = new t.TweakApiHttpClient({
          apiClientSecret: "PJ8I1GRLBARNGIJ7AN80WMTPMNIZ43E4H",
          logPrefix: "TWEAK :: ",
          baseUrl: "https://tweakcloudplatform.com",
        });
      },
      6994: (e, a, n) => {
        function t(e) {
          return Array.from(e).map(([, e]) => e);
        }
        function r(e) {
          return Array.from(e).map(([e]) => e);
        }
        function i(e, a, n) {
          if (!a || !n)
            throw new Error("a valid keyProp and valuePro must be provided");
          return e.reduce((e, t) => (e.set(t[a], t[n]), e), new Map());
        }
        n.d(a, { OF: () => t, pW: () => i, v: () => r });
      },
      3692: (e, a, n) => {
        n.d(a, { m: () => t });
        const t = [
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
        ];
      },
      4886: (e, a, n) => {
        n.r(a), n.d(a, { default: () => C });
        var t = n(7314),
          r = n(5498),
          i = n(3692);
        const o = "application/json; charset=utf-8",
          s = r.BZC.EXT_SCRIPT_ID;
        class l extends Error {
          constructor(...e) {
            super(...e),
              (this.name = "ImportInvalidTweakCollectionsFormatError"),
              (this.message =
                "format detection failed due to malformed/invalid tweak collections");
          }
        }
        class c extends Error {
          constructor(...e) {
            super(...e),
              (this.name = "ImportInvalidTweakVariablesFormatError"),
              (this.message =
                "format detection failed due to malformed/invalid tweak variables");
          }
        }
        class u extends Error {
          constructor(...e) {
            super(...e),
              (this.name = "ImportInvalidTweakDataFormatError"),
              (this.message =
                "format detection failed due to malformed/invalid data");
          }
        }
        class d extends Error {
          constructor(...e) {
            super(...e), (this.name = "ImportInvalidJSONError");
          }
        }
        class m extends Error {
          constructor(...e) {
            super(...e), (this.name = "FailedToSaveInBrowserStorageError");
          }
        }
        const h = i.m,
          p = new Map(i.m.map(({ code: e, text: a }) => [e, a])),
          b = [
            { id: (0, t.Z)(), header: "Content-Type", value: o, active: !0 },
          ],
          f = new RegExp("[a-zA-Z][a-zA-Z_0-9]*", "g"),
          g = { free: r.Types.Plan.Free, premium: r.Types.Plan.Premium },
          y = [r.Types.PlanStatus.Trialing, r.Types.PlanStatus.Active];
        let v = "https://tweak-extension.com";
        const C = {
          MOUNT_ARTIFICIAL_DELAY: 100,
          START_ICON: "icon-tweak-start.png",
          STOP_ICON: "icon-tweak-stop.png",
          URL_MAX_LEN: 3e3,
          DEFAULT_RESPONSE_CONTENT_TYPE: o,
          DEFAULT_HEADERS: b,
          DEFAULT_HTTP_METHOD: "GET",
          DEFAULT_REQUEST_HOOK_FUNCTION:
            "return { method, url, body, headers };",
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
          VARIABLE_NAME_RGX: f,
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
          SCRIPT_ID: s,
          ImportInvalidTweakCollectionsFormatError: l,
          ImportInvalidTweakVariablesFormatError: c,
          ImportInvalidTweakDataFormatError: u,
          FailedToSaveInBrowserStorageError: m,
          ImportInvalidJSONError: d,
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
          STATUS_CODES_OPTIONS: h,
          STATUS_CODE_MAP: p,
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
          PLANS: g,
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
          ALL_PAID_PLANS: [g.premium],
          ALL_VALID_PLAN_STATUS: y,
          WEBSITE_BLUEPRINTS: {
            INTRO: `${v}/docs/intro`,
            CHANGELOG: `${v}/changelog`,
            PRICING: `${v}/pricing`,
            SIGN_IN: `${v}/subscription?intent=ap`,
            DEBUGGING: `${v}/docs/debug-request`,
            MOCK_MODIFY: `${v}/docs/rule/mock-vs-modify`,
            RESPONSE_PAYLOAD: `${v}/docs/rule/response-payload`,
            REQUEST_PAYLOAD: `${v}/docs/rule/request-payload`,
            HTTP_HEADERS: `${v}/docs/rule/http-headers`,
            REQUEST_HOOK: `${v}/docs/rule/request-hook`,
            RESPONSE_HOOK: `${v}/docs/rule/javascript-snippet`,
            VARIABLES: `${v}/docs/variables`,
            COLLECTIONS: `${v}/docs/collections`,
            AUTO_ENABLED_SITES: `${v}/docs/settings/auto-enabled-sites`,
          },
          MAX_COLLECTION_NAME_LENGTH: 32,
          MAX_NUMBER_OF_COLLECTIONS: 50,
        };
      },
      9973: (e, a, n) => {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.sendMessageToBackground =
            a.RulesManager =
            a.stopIntercepting =
            a.startIntercepting =
              void 0);
        const t = n(5711),
          r = n(9609);
        (a.startIntercepting = function () {
          (0, r.startXHR)(), (0, t.startFetch)();
        }),
          (a.stopIntercepting = function () {
            (0, r.stopXHR)(), (0, t.stopFetch)();
          });
        var i = n(3116);
        Object.defineProperty(a, "RulesManager", {
          enumerable: !0,
          get: function () {
            return i.RulesManager;
          },
        }),
          (a.sendMessageToBackground = function (e, a) {
            try {
              const n = new CustomEvent("TweakGenericForwardEvent", {
                detail: { data: { type: e, payload: a } },
              });
              window.dispatchEvent(n);
            } catch (e) {
              0;
            }
          });
      },
      5464: (e, a) => {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.CALL_ORIGINAL_FETCH = void 0),
          (a.CALL_ORIGINAL_FETCH = "amicabletbecof");
      },
      5711: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.stopFetch = a.startFetch = void 0);
        const s = n(9449),
          l = n(9973),
          c = i(n(8006)),
          u = o(n(4886)),
          d = n(3209),
          m = n(2379),
          h = window.fetch;
        function p(e, a) {
          return c.safeExtractBodyFromFetch(e, a).then((n) =>
            (function (e, a, n) {
              const {
                  method: t,
                  url: r,
                  headers: i,
                } = c.extractFetchResourceInfo(e, a),
                o = { body: n, method: t, url: r, headers: i },
                p = l.RulesManager.matches(r, o);
              p && c.pauseIfBreakpointEnabled(p, t, r);
              let b;
              if (
                (null == p ? void 0 : p.interceptionPolicy) ===
                s.InterceptionPolicy.PATCH
              )
                b =
                  p.plan === u.default.PLANS.premium
                    ? m.patchFetch
                    : d.mockFetch;
              else b = d.mockFetch;
              return b(p, h, { resource: e, init: a, envelope: o });
            })(e, a, n)
          );
        }
        (a.startFetch = function () {
          try {
            window.fetch = p;
          } catch (e) {
            0;
          }
        }),
          (a.stopFetch = function () {
            try {
              window.fetch = h;
            } catch (e) {
              0;
            }
          });
      },
      8006: function (e, a, n) {
        var t =
            (this && this.__awaiter) ||
            function (e, a, n, t) {
              return new (n || (n = Promise))(function (r, i) {
                function o(e) {
                  try {
                    l(t.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    l(t.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function l(e) {
                  var a;
                  e.done
                    ? r(e.value)
                    : ((a = e.value),
                      a instanceof n
                        ? a
                        : new n(function (e) {
                            e(a);
                          })).then(o, s);
                }
                l((t = t.apply(e, a || [])).next());
              });
            },
          r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.buildReadableStream =
            a.applyAllRequestHeaders =
            a.isURLType =
            a.isStringOrURLType =
            a.safeExtractBodyFromFetch =
            a.extractFetchResourceInfo =
            a.pauseIfBreakpointEnabled =
            a.applyTweakFetchHeaderToInit =
            a.delayBy =
            a.time =
            a.prettyLogRequestIntercepted =
            a.generateHeaders =
            a.stripProtocolAndHostname =
            a.stripProtocol =
            a.getFullURL =
            a.safelyParseResponsePayload =
            a.createBlob =
            a.notifyGenericMessage =
            a.notifyRequestIntercepted =
            a.DEFAULT_RESPONSE_CONTENT_TYPE =
              void 0);
        const i = n(5464),
          o = n(9449),
          s = n(2356),
          l = r(n(4886)),
          c = n(9582);
        a.DEFAULT_RESPONSE_CONTENT_TYPE = "application/json; charset: utf-8";
        function u(e) {
          const a = new CustomEvent("TweakGenericForwardEvent", {
            detail: { data: { type: "TWEAK_GENERIC_MESSAGE", payload: [e] } },
          });
          window.dispatchEvent(a);
        }
        function d(e) {
          try {
            const a = /^http[s]?:\/\/(.*)/.exec(e);
            return a && a[1] ? a[1] : e;
          } catch (a) {
            return e;
          }
        }
        function m(e, a, n) {
          const t = n || "responseHeaders";
          if (!e || !e[t]) return {};
          let r = a;
          return (
            r || (r = {}),
            e[t].reduce((e, a) => {
              const { header: n, value: t, active: r } = a;
              return n && r ? ((e[n.trim().toLowerCase()] = t), e) : e;
            }, r)
          );
        }
        (a.notifyRequestIntercepted = function (e) {
          const a = new CustomEvent("TweakGenericForwardEvent", {
            detail: {
              data: {
                type: "INCREMENT_REQUEST_COUNT",
                payload: [e, 1, Date.now()],
              },
            },
          });
          window.dispatchEvent(a);
        }),
          (a.notifyGenericMessage = u),
          (a.createBlob = function (e) {
            try {
              const a = e.responsePayload,
                n = e.responseHeaders.find(
                  ({ header: e }) => "content-type" === e.toLowerCase()
                ),
                t = n && n.value;
              return new Blob([a], { type: t });
            } catch (e) {
              return null;
            }
          }),
          (a.safelyParseResponsePayload = function (e, a = "") {
            let n = null,
              t = null,
              r = 0;
            if (
              (function (e) {
                try {
                  return (
                    null != e &&
                    null != e.responseHeaders &&
                    Boolean(
                      e.responseHeaders.find(
                        ({ header: e, value: a, active: n }) =>
                          n &&
                          e &&
                          "content-type" === e.trim().toLowerCase() &&
                          a.includes("application/json")
                      )
                    )
                  );
                } catch (e) {
                  return !1;
                }
              })(e)
            )
              try {
                (t = JSON.parse(e.responsePayload)),
                  (r = JSON.stringify(t).length);
              } catch (e) {
                (n = e), (t = null), (r = 0);
              }
            if (null === t && 0 === r)
              try {
                (t = e.responsePayload), (r = t.length);
              } catch (e) {
                n = e;
              }
            return (
              n &&
                (null === t && ((t = ""), (r = 0)),
                e &&
                  "PATCH" !== e.interceptionPolicy &&
                  u({
                    type: "WARNING",
                    text: (0, c.t)("rc_failed_to_parse_user_provided_payload", {
                      url: a,
                    }),
                  })),
              { responsePayload: t, contentLength: r }
            );
          }),
          (a.getFullURL = function (e) {
            try {
              if (!e) return e;
              const a = /^http[s]?/.exec(e),
                n = a && a.length;
              return n ? e : `${window.location.origin}${e}`;
            } catch (a) {
              return e;
            }
          }),
          (a.stripProtocol = d),
          (a.stripProtocolAndHostname = function (e) {
            try {
              const a = d(e),
                n = window.location.port,
                t = `${window.location.hostname}${n ? `:${n}` : ""}`;
              return a.replace(t, "");
            } catch (a) {
              return e;
            }
          }),
          (a.generateHeaders = m);
        const h = ["%c[twƏak]", "color:#f49805;font-weight:bolder;"];
        function p() {
          const e = new Date();
          return [e.getHours(), e.getMinutes(), e.getSeconds()]
            .map(String)
            .map((e) => e.slice(0, 2))
            .map((e) => e.padStart(2, "0"))
            .join(":");
        }
        function b(e) {
          const a = "string" == typeof e,
            n = f(e);
          return a || n;
        }
        function f(e) {
          return "object" == typeof e && "string" == typeof e.search;
        }
        (a.prettyLogRequestIntercepted = function (
          e,
          {
            url: a = "",
            method: n = "",
            type: t = "",
            body: r = "",
            modifiedResponse: i = "",
          }
        ) {
          var o, s;
          try {
            const c = [...h, `${p()} ${n} ${a}`];
            if (
              (((null == e ? void 0 : e.outgoingHttpMethodOverride) ||
                (null == e ? void 0 : e.outgoingUrlOverride)) &&
                ((null == e ? void 0 : e.outgoingHttpMethodOverride) &&
                !(null == e ? void 0 : e.outgoingUrlOverride)
                  ? c.push(
                      `⏩ ${
                        null == e ? void 0 : e.outgoingHttpMethodOverride
                      } ${a}`
                    )
                  : !(null == e ? void 0 : e.outgoingHttpMethodOverride) &&
                    (null == e ? void 0 : e.outgoingUrlOverride)
                  ? c.push(`⏩ ${n} ${e.outgoingUrlOverride}`)
                  : c.push(
                      `⏩ ${e.outgoingHttpMethodOverride} ${e.outgoingUrlOverride}`
                    )),
              e.status && c.push(` (${e.status} ${e.statusText})`),
              "x1" !== e.plan)
            )
              return void (a && n && window.console.info(...c));
            window.console.groupCollapsed(...c);
            const u = {};
            if ((window.console.info({ type: t }), e.responsePayload)) {
              let a = e.responsePayload;
              try {
                a = JSON.parse(a);
              } catch (n) {
                a = e.responsePayload;
              }
              u.response = a;
            } else if ("MOCK" === e.interceptionPolicy) u.response = "";
            else if ("PATCH" === e.interceptionPolicy)
              if (
                e.responseHookFn !== l.default.DEFAULT_RESPONSE_HOOK_FUNCTION &&
                i
              ) {
                let e;
                try {
                  e = JSON.parse(i);
                } catch (a) {
                  e = i;
                }
                u.response = e;
              } else
                u.response = "forwarded server response (see Network panel)";
            if (
              ((null === (o = e.responseHeaders) || void 0 === o
                ? void 0
                : o.length) && (u.additionalResponseHeaders = m(e, {})),
              (null === (s = e.requestHeaders) || void 0 === s
                ? void 0
                : s.length) &&
                (u.additionalRequestHeaders = m(e, {}, "requestHeaders")),
              r)
            ) {
              let e = r;
              try {
                e = JSON.parse(r);
              } catch (e) {
                0;
              }
              u.requestPayload = e;
            }
            window.console.info(u), window.console.groupEnd();
          } catch (e) {
            0;
          }
        }),
          (a.time = p),
          (a.delayBy = function (e, a) {
            return new Promise((n) =>
              setTimeout(() => e().then(n).catch(n), a)
            );
          }),
          (a.applyTweakFetchHeaderToInit = function (e) {
            try {
              let a, n;
              return (
                e
                  ? e.headers
                    ? ((a = Object.assign({}, e)), (n = "carry"))
                    : ((a = Object.assign(Object.assign({}, e), {
                        headers: {},
                      })),
                      (n = "no-headers"))
                  : ((a = { headers: {} }), (n = "no-init")),
                (a.headers[i.CALL_ORIGINAL_FETCH] = n),
                a
              );
            } catch (a) {
              return e;
            }
          }),
          (a.pauseIfBreakpointEnabled = function (e, a, n) {
            if (!0 === e.isBreakpointEnabled) {
              (0, s.show)({
                ttl: 5e3,
                msg: (0, c.t)("breakpoint_toast_message", {
                  url: n || "n/a",
                  method: a || "",
                }),
              });
              debugger;
            }
          }),
          (a.extractFetchResourceInfo = function (e, a) {
            var n, t, r;
            let i, s;
            if ("string" == typeof e)
              (s = e),
                (i =
                  (null === (n = null == a ? void 0 : a.method) || void 0 === n
                    ? void 0
                    : n.toUpperCase()) || o.HttpMethod.GET);
            else if (f(e)) {
              (s = e.toString()),
                (i =
                  (null === (t = null == a ? void 0 : a.method) || void 0 === t
                    ? void 0
                    : t.toUpperCase()) || o.HttpMethod.GET);
            } else {
              const a = e;
              (s = a.url || ""),
                (i =
                  (null === (r = null == a ? void 0 : a.method) || void 0 === r
                    ? void 0
                    : r.toUpperCase()) || o.HttpMethod.GET);
            }
            const l = (function (e, a) {
              try {
                const n =
                  (null == a ? void 0 : a.headers) ||
                  (null == e ? void 0 : e.headers);
                if (!n) return;
                const t = {};
                if ("function" == typeof n.keys) {
                  const e = n;
                  for (const a of e.keys()) {
                    const n = e.get(a);
                    null != n && (t[a] = n);
                  }
                  return t;
                }
                const r = n;
                return Object.assign({}, r);
              } catch (e) {
                0;
              }
            })(e, a);
            return { method: i, url: s, headers: l };
          }),
          (a.safeExtractBodyFromFetch = function (e, a) {
            return new Promise((n) => {
              if (b(e)) {
                const e = (a && a.body) || null;
                "function" == typeof (null == e ? void 0 : e.stream)
                  ? e
                      .text()
                      .then(n)
                      .catch(() => n(""))
                  : n(e);
              } else
                try {
                  e.clone()
                    .text()
                    .then((e) =>
                      t(this, void 0, void 0, function* () {
                        if (
                          "function" == typeof (null == e ? void 0 : e.stream)
                        ) {
                          const a = yield e.text();
                          n(a);
                        } else n(e);
                      })
                    )
                    .catch((e) => {
                      n(null);
                    });
                } catch (e) {
                  0, n(null);
                }
            });
          }),
          (a.isStringOrURLType = b),
          (a.isURLType = f);
        const g = !1;
        (a.applyAllRequestHeaders = function (e, a, n, t) {
          const r = (function (e, a) {
            try {
              const n = a.reduce(
                  (e, { header: a, value: n, active: t }) => (
                    t && (e[a.toLowerCase()] = n), e
                  ),
                  {}
                ),
                t = Object.keys(e).reduce(
                  (a, n) => ((a[n.toLowerCase()] = e[n]), a),
                  {}
                );
              return Object.assign({}, t, n);
            } catch (a) {
              return e;
            }
          })(a || {}, (null == t ? void 0 : t.requestHeaders) || []);
          if (r)
            for (const a in r)
              try {
                n.apply(e, [a, r[a]]);
              } catch (e) {
                g;
              }
        }),
          (a.buildReadableStream = function (e) {
            return new ReadableStream({
              start(a) {
                a.enqueue(e), a.close();
              },
              pull() {},
              cancel() {},
            });
          });
      },
      3209: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.mockFetch = void 0);
        const o = i(n(8006));
        a.mockFetch = function (e, a, { resource: n, init: t, envelope: r }) {
          const { url: i } = o.extractFetchResourceInfo(n, t);
          if (!e) {
            const e = o.applyTweakFetchHeaderToInit(t);
            return a.apply(this, [n, e]);
          }
          const s =
              e && e.delay
                ? o.delayBy(
                    () => new Promise((e) => e(new Response())),
                    e.delay
                  )
                : new Promise((e) => e(new Response())),
            { responsePayload: l, contentLength: c } =
              o.safelyParseResponsePayload(e, i);
          return s
            .then((a) => {
              const n = new Headers(),
                t = o.generateHeaders(e, {
                  "content-length": c,
                  "content-type": o.DEFAULT_RESPONSE_CONTENT_TYPE,
                });
              Object.keys(t).forEach((e) => n.set(e, t[e]));
              const { status: i, statusText: s } = e;
              return (
                [
                  ["headers", n],
                  ["status", i],
                  ["statusText", s],
                  ["ok", i >= 200 && i <= 299],
                  ["body", o.buildReadableStream(l)],
                ].forEach(([e, n]) => {
                  try {
                    Object.defineProperty(a, e, {
                      writable: !0,
                      configurable: !0,
                      value: n,
                    });
                  } catch (e) {
                    0;
                  }
                }),
                (a.json = () => Promise.resolve(l)),
                (a.text = () =>
                  Promise.resolve(
                    "string" == typeof l ? l : JSON.stringify(l)
                  )),
                (a.blob = () =>
                  Promise.resolve(
                    o.createBlob(
                      Object.assign(Object.assign({}, e), {
                        responsePayload:
                          "string" == typeof l ? l : JSON.stringify(l),
                      })
                    )
                  )),
                o.notifyRequestIntercepted(e),
                o.prettyLogRequestIntercepted(
                  e,
                  Object.assign(Object.assign({}, r), { type: "fetch" })
                ),
                a
              );
            })
            .catch((e) => {
              throw e;
            });
        };
      },
      5705: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.mockXHRSend = void 0);
        const s = o(n(8917)),
          l = n(9582),
          c = i(n(8006));
        function u(e, a) {
          try {
            const n = c.safelyParseResponsePayload(e, a),
              t = c.generateHeaders(e, {
                "content-length": n.contentLength || 0,
                "content-type": c.DEFAULT_RESPONSE_CONTENT_TYPE,
              }),
              r = (e) => {
                const a = e && e.toLowerCase();
                return t[a] ? t[a] : null;
              },
              i = () =>
                Object.keys(t)
                  .map((e) => {
                    const a = r(e);
                    return a && `${e}: ${a}`;
                  })
                  .filter(Boolean)
                  .join("\r\n");
            [
              ["response", n.responsePayload],
              ["responseText", e.responsePayload],
              ["readyState", XMLHttpRequest.DONE],
              ["status", e.status],
              ["statusText", e.statusText],
              ["getResponseHeader", r],
              ["getAllResponseHeaders", i],
            ].forEach(([e, a]) => {
              Object.defineProperty(this, e, {
                writable: !0,
                configurable: !0,
                value: a,
              });
            });
          } catch (e) {
            0;
          }
        }
        a.mockXHRSend = function (
          e,
          a,
          n,
          { url: t, method: r, body: i, headers: o }
        ) {
          const d = (0, s.default)(() => {
              u.apply(this, [e, t]),
                c.prettyLogRequestIntercepted(e, {
                  url: t,
                  method: r,
                  type: "xhr",
                  body: i,
                }),
                c.notifyRequestIntercepted(e);
            }),
            m = (e) =>
              (0, s.default)(() => {
                this.dispatchEvent(new CustomEvent(e));
              }),
            h = [
              ["onabort", "abort"],
              ["onerror", "error"],
              ["onload", "load"],
              ["onloadend", "loadend"],
              ["onreadystatechange", "readystatechange"],
            ].reduce((e, [a, n]) => ((e[a] = m(n)), e), {});
          let p;
          e &&
            ((p = () => {
              this.readyState < XMLHttpRequest.HEADERS_RECEIVED ||
                (d(),
                this.removeEventListener("readystatechange", p, !1),
                this.status >= 200 && this.status < 300
                  ? this.onload && this.onload()
                  : this.onerror && this.onerror(),
                setTimeout(() => {
                  this.onloadend && this.onloadend();
                }));
            }),
            this.addEventListener("readystatechange", p, !0),
            ["onreadystatechange", "onload", "loadend", "onerror"].forEach(
              (e) => {
                const a = this[e] && this[e].bind(this);
                this[e] = () => {
                  if (
                    "onreadystatechange" === e &&
                    this.readyState < XMLHttpRequest.HEADERS_RECEIVED
                  )
                    return void (a && a());
                  d(), a && a();
                  const n = h && h[e];
                  n && n();
                };
              }
            ));
          const b = () => {
            try {
              c.applyAllRequestHeaders(this, o, n, null);
            } catch (e) {
              0;
            }
            try {
              e
                ? (this.__amicabletbebypoxhrs = !0)
                : (this.__amicabletbecoxhrs = !0),
                a.apply(this, [i]);
            } catch (e) {
              0,
                c.notifyGenericMessage({
                  type: "ERROR",
                  text: (0, l.t)("xhr_interceptor_failed_to_send", { url: t }),
                });
            }
          };
          return (
            e && e.delay
              ? setTimeout(() => {
                  b();
                }, e.delay)
              : b(),
            p
              ? () => this.removeEventListener("readystatechange", p, !1)
              : void 0
          );
        };
      },
      7353: (e, a) => {
        function n(e) {
          return null == e
            ? {}
            : e
                .filter(({ active: e }) => e)
                .reduce((e, { header: a, value: n }) => ((e[a] = n), e), {});
        }
        function t(e, a) {
          if (null == a || 0 === a.length) return e;
          const n = new Headers(e);
          return (
            a
              .filter(({ active: e }) => e)
              .forEach(({ header: e, value: a }) => {
                n.set(e, a);
              }),
            n
          );
        }
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.mergeHeaders =
            a.headersToObject =
            a.patchRequestHeadersOnInit =
            a.patchRequestHeadersOnRequest =
              void 0),
          (a.patchRequestHeadersOnRequest = function (e, a) {
            try {
              return new Request(e, { headers: t(e.headers, a) });
            } catch (a) {
              return e;
            }
          }),
          (a.patchRequestHeadersOnInit = function (e, a) {
            try {
              let r = {};
              if (null == e ? void 0 : e.headers)
                e &&
                  e.headers &&
                  (r =
                    e.headers.append && e.headers.delete
                      ? Object.assign(Object.assign({}, e), {
                          headers: t(e.headers, a),
                        })
                      : Object.assign(Object.assign({}, e), {
                          headers: Object.assign(
                            Object.assign({}, e.headers),
                            n(a)
                          ),
                        }));
              else {
                const t = n(a);
                r =
                  null != e
                    ? Object.assign(Object.assign({}, e), { headers: t })
                    : { headers: t };
              }
              return r;
            } catch (a) {
              return e;
            }
          }),
          (a.headersToObject = n),
          (a.mergeHeaders = t);
      },
      2379: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            },
          o =
            (this && this.__awaiter) ||
            function (e, a, n, t) {
              return new (n || (n = Promise))(function (r, i) {
                function o(e) {
                  try {
                    l(t.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    l(t.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function l(e) {
                  var a;
                  e.done
                    ? r(e.value)
                    : ((a = e.value),
                      a instanceof n
                        ? a
                        : new n(function (e) {
                            e(a);
                          })).then(o, s);
                }
                l((t = t.apply(e, a || [])).next());
              });
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.patchFetch = void 0);
        const s = n(5464),
          l = n(7353),
          c = n(9973),
          u = i(n(8006)),
          d = i(n(7026));
        a.patchFetch = function (e, a, { resource: n, init: t, envelope: r }) {
          const { url: i, method: m } = u.extractFetchResourceInfo(n, t);
          e &&
            e.outgoingRequestPayload &&
            "GET" !== m &&
            "HEAD" !== m &&
            (t.body = e.outgoingRequestPayload),
            e.outgoingHttpMethodOverride &&
              (u.isStringOrURLType(n) ||
                (n = new Request(n, { method: e.outgoingHttpMethodOverride }))),
            e.outgoingUrlOverride &&
              (n = u.isStringOrURLType(n)
                ? e.outgoingUrlOverride
                : new Request(e.outgoingUrlOverride, {
                    method: n.method,
                    headers: n.headers,
                    body: r.body,
                    mode: n.mode,
                    credentials: n.credentials,
                    cache: n.cache,
                    redirect: n.redirect,
                    referrer: n.referrer,
                    referrerPolicy: n.referrerPolicy,
                    integrity: n.integrity,
                    keepalive: n.keepalive,
                    signal: n.signal,
                    priotity: n.priotity,
                  })),
            e &&
              e.requestHeaders &&
              e.requestHeaders.length &&
              (u.isStringOrURLType(n)
                ? (t = (0, l.patchRequestHeadersOnInit)(t, e.requestHeaders))
                : (n = (0, l.patchRequestHeadersOnRequest)(
                    n,
                    e.requestHeaders
                  )));
          let h = u.applyTweakFetchHeaderToInit(
            t,
            s.CALL_ORIGINAL_FETCH,
            "true"
          );
          h = e.outgoingHttpMethodOverride
            ? Object.assign(Object.assign({}, h), {
                method: e.outgoingHttpMethodOverride,
              })
            : h;
          const p = () => a.apply(this, [n, h]),
            b = e && e.delay ? u.delayBy(p, e.delay) : p();
          if (e) {
            const a = u.safelyParseResponsePayload(e, i);
            if (a && null != a.responsePayload && null != a.contentLength)
              return b
                .then((n) =>
                  o(this, void 0, void 0, function* () {
                    var t;
                    const { responsePayload: i, contentLength: o } = a,
                      s = {};
                    i && (s["content-length"] = o);
                    const l = u.generateHeaders(e, s),
                      m = new Headers();
                    for (const [e, a] of null ===
                      (t = null == n ? void 0 : n.headers) || void 0 === t
                      ? void 0
                      : t.entries())
                      m.set(e, a);
                    let h;
                    if (
                      (Object.keys(l).forEach((e) => {
                        const a = l[e];
                        m.set(e, a);
                      }),
                      Object.defineProperty(n, "headers", {
                        writable: !0,
                        configurable: !0,
                        value: m,
                      }),
                      "" !== i)
                    )
                      h = i;
                    else if (e.responseHookFn)
                      try {
                        const a = n.clone(),
                          t = yield a.text();
                        h = d.postRequestPayloadTransformations(
                          e,
                          t,
                          r,
                          c.RulesManager.getVariables()
                        );
                      } catch (e) {
                        0;
                      }
                    (n.json = () => Promise.resolve(h)),
                      (n.text = () =>
                        Promise.resolve(
                          "string" == typeof h ? h : JSON.stringify(h)
                        )),
                      (n.blob = () =>
                        Promise.resolve(
                          u.createBlob(
                            Object.assign(Object.assign({}, e), {
                              finalResponsePayload:
                                "string" == typeof h ? h : JSON.stringify(h),
                            })
                          )
                        ));
                    try {
                      Object.defineProperty(n, "body", {
                        writable: !0,
                        configurable: !0,
                        value: u.buildReadableStream(h),
                      });
                    } catch (e) {
                      0;
                    }
                    if ("number" == typeof e.status && e.status > 0) {
                      const a = e.status,
                        t = a >= 200 && a <= 299;
                      [
                        ["status", a],
                        ["statusText", e.statusText],
                        ["ok", t],
                      ].forEach(([e, a]) => {
                        Object.defineProperty(n, e, {
                          writable: !0,
                          configurable: !0,
                          value: a,
                        });
                      });
                    }
                    return (
                      u.notifyRequestIntercepted(e),
                      u.prettyLogRequestIntercepted(
                        e,
                        Object.assign(Object.assign({}, r), {
                          type: "fetch",
                          modifiedResponse: h,
                        })
                      ),
                      n
                    );
                  })
                )
                .catch((e) => {
                  throw e;
                });
          }
          return b;
        };
      },
      9829: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.patchXHRSend = void 0);
        const o = n(9582),
          s = i(n(8006)),
          l = n(9973),
          c = n(4435),
          u = i(n(7026));
        function d(e, a, n, t) {
          const r = s.safelyParseResponsePayload(e, a);
          if (r && null != r.responsePayload && null != r.contentLength) {
            const { responsePayload: i, contentLength: o } = r,
              d = {};
            i && (d["content-length"] = o);
            const m = s.generateHeaders(e, d),
              h = this.getResponseHeader.bind(this),
              p = this.getAllResponseHeaders.bind(this);
            let b = [
              ["readyState", XMLHttpRequest.DONE],
              [
                "getResponseHeader",
                (e) => {
                  try {
                    const a = e.toLowerCase();
                    return m[a] ? m[a] : h(e);
                  } catch (a) {
                    return h(e);
                  }
                },
              ],
              [
                "getAllResponseHeaders",
                c.getAllResponseHeadersWithOverrides.apply(this, [p, m]),
              ],
            ];
            if (null != i && "" !== i)
              b.push(["response", i], ["responseText", e.responsePayload]);
            else if ("" === i && e.responseHookFn)
              try {
                let r = "";
                switch (this.responseType) {
                  case "":
                  case "text":
                    r = this.responseText;
                    break;
                  default:
                    null != this.response &&
                      (r = JSON.stringify(this.response));
                }
                const i = { url: a, method: n, body: t },
                  o = u.postRequestPayloadTransformations(
                    e,
                    r,
                    i,
                    l.RulesManager.getVariables()
                  );
                o && b.push(["response", JSON.parse(o)], ["responseText", o]);
              } catch (e) {
                0, (b = []);
              }
            return (
              "number" == typeof e.status &&
                e.status > 0 &&
                b.push(["status", e.status], ["statusText", e.statusText]),
              b.forEach(([e, a]) => {
                Object.defineProperty(this, e, {
                  writable: !0,
                  configurable: !0,
                  value: a,
                });
              }),
              b.reduce((e, [a, n]) => ((e[a] = n), e), {})
            );
          }
          s.notifyGenericMessage({
            type: "WARNING",
            text: (0, o.t)("rc_failed_to_parse_user_provided_payload", {
              url: a,
            }),
          });
        }
        a.patchXHRSend = function (
          e,
          a,
          n,
          { url: t, method: r, body: i, headers: l }
        ) {
          const c = (() => {
            let a = !1;
            return () => {
              if (
                this.readyState === XMLHttpRequest.DONE &&
                !a &&
                "true" !== this.__amicabletbeourl
              ) {
                const n = d.apply(this, [e, t, r, i]);
                s.notifyRequestIntercepted(e),
                  (a = !0),
                  s.prettyLogRequestIntercepted(e, {
                    method: r,
                    url: t,
                    body: i,
                    type: "xhr",
                    modifiedResponse: n.responseText,
                  });
              }
            };
          })();
          let u;
          e &&
            ((u = () => {
              this.readyState < XMLHttpRequest.HEADERS_RECEIVED ||
                (c(), this.removeEventListener("readystatechange", u, !1));
            }),
            this.addEventListener("readystatechange", u, !0),
            ["onreadystatechange", "onload", "loadend"].forEach((e) => {
              const a = this[e] && this[e].bind(this);
              this[e] = () => {
                ("onreadystatechange" === e &&
                  this.readyState < XMLHttpRequest.HEADERS_RECEIVED) ||
                  c(),
                  a && a();
              };
            }));
          const m = () => {
            const c = Boolean(
              (null == e ? void 0 : e.outgoingHttpMethodOverride) ||
                (null == e ? void 0 : e.outgoingUrlOverride)
            );
            if ("true" !== this.__amicabletbeourl && c)
              try {
                const a = e.outgoingHttpMethodOverride || r,
                  n = e.outgoingUrlOverride || t;
                this.open.apply(this, [a, n]);
              } catch (e) {
                0;
              }
            try {
              this.readyState >= XMLHttpRequest.OPENED &&
                s.applyAllRequestHeaders(this, l, n, e);
              const t = (null == e ? void 0 : e.outgoingRequestPayload) || i;
              (this.__amicabletbecoxhrs = !0), a.apply(this, [t]);
            } catch (e) {
              0,
                s.notifyGenericMessage({
                  type: "ERROR",
                  text: (0, o.t)("xhr_interceptor_failed_to_send", { url: t }),
                });
            }
          };
          return (
            e && e.delay
              ? setTimeout(() => {
                  m();
                }, e.delay)
              : m(),
            u
              ? () => this.removeEventListener("readystatechange", u, !1)
              : void 0
          );
        };
      },
      4435: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.safelyParseResponsePayload = a.getAllResponseHeadersWithOverrides =
            void 0);
        const o = n(9582),
          s = i(n(8006));
        (a.getAllResponseHeadersWithOverrides = function (e, a = {}) {
          return () => {
            let n = e();
            for (const e in a) {
              const t = a[e],
                r = new RegExp(`${e}\\s*:[^\r\n]*`, "ig");
              n = n.match(r)
                ? n.replace(r, `${e}: ${t}`)
                : `${n}${e}: ${t}\r\n`;
            }
            return n;
          };
        }),
          (a.safelyParseResponsePayload = function (e, a = "", n = "", t = "") {
            let r = null,
              i = null,
              l = 0;
            if (n && "text" === n.toLowerCase())
              (i = e.responsePayload), (l = i.length);
            else if (n && "blob" === n.toLowerCase())
              try {
                (i = s.createBlob(e)), (l = i.size);
              } catch (e) {
                r = e;
              }
            else if (t && "application/json" === t)
              try {
                (i = JSON.parse(e.responsePayload)),
                  (l = JSON.stringify(i).length);
              } catch (e) {
                r = e;
              }
            else
              try {
                (i = e.responsePayload), (l = i.length);
              } catch (e) {
                r = e;
              }
            return (
              (!r && i) ||
                ((i = e.responsePayload),
                (l = e.responsePayload.length),
                s.notifyGenericMessage({
                  type: "WARNING",
                  text: (0, o.t)("rc_failed_to_parse_user_provided_payload", {
                    url: a,
                  }),
                })),
              { responsePayload: i, contentLength: l }
            );
          });
      },
      5134: function (e, a, n) {
        var t =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.applyTemplating = a.apply = void 0);
        const r = t(n(714)),
          i = n(4772),
          o = n(9449),
          s = t(n(4886)),
          l = new r.default(),
          c = /\$tweak\.(\w+)/g;
        const u = [
          {
            id: o.TemplatingTypes.VARIABLES,
            visitor: function (e, a) {
              return a
                ? (0, i.mapToKeysArray)(a).reduce(
                    (e, n) =>
                      (function (e, a, n) {
                        try {
                          const t = Array.from(e.matchAll(new RegExp(a, "g")));
                          if (null == t ? void 0 : t.length)
                            return t.reduce((a, t) => {
                              const [r, i] = t,
                                o = t.index;
                              if (null == o) return a;
                              try {
                                const t = `${r}`.replace(/[$.]/g, "\\$&");
                                let i = new RegExp(t);
                                const s = typeof n;
                                ("number" !== s && "boolean" !== s) ||
                                  ('"' === e[o - 1] &&
                                    '"' === e[o + r.length] &&
                                    (i = new RegExp(`"${t}"`)));
                                const l = n.replace(/["]/g, "\\$&");
                                a = a.replace(i, l);
                              } catch (e) {}
                              return a;
                            }, e);
                        } catch (e) {}
                        return e;
                      })(e, `\\$tweak\\.var\\.${n}`, a.get(n)),
                    e
                  )
                : e;
            },
          },
          {
            id: o.TemplatingTypes.GENERATOR,
            visitor: function (e) {
              try {
                const a = Array.from(e.matchAll(c));
                if (null == a ? void 0 : a.length) {
                  return a.reduce((a, n) => {
                    const [t, r] = n;
                    if ("var" === r) return a;
                    const i = n.index;
                    if (null == i) return a;
                    let o = null;
                    try {
                      o = l[r]();
                      const n = `${t}`.replace(/[$.]/g, "\\$&");
                      let s = new RegExp(n);
                      const c = typeof o;
                      ("number" !== c && "boolean" !== c) ||
                        ('"' === e[i - 1] &&
                          '"' === e[i + t.length] &&
                          (s = new RegExp(`"${n}"`))),
                        (a = a.replace(s, o));
                    } catch (e) {
                      0;
                    }
                    return a;
                  }, e);
                }
              } catch (a) {
                return e;
              }
              return e;
            },
          },
        ];
        function d(e, a, n) {
          return u.reduce((e, { id: t, visitor: r }) => {
            const i = r(e, n);
            return a && i !== e && (a[t] = !0), i;
          }, e);
        }
        (a.apply = d),
          (a.applyTemplating = function (e, a) {
            var n;
            if (!e || e.plan !== s.default.PLANS.premium) return e;
            try {
              const t = {
                [o.TemplatingTypes.GENERATOR]: !1,
                [o.TemplatingTypes.VARIABLES]: !1,
              };
              let r = e.responsePayload;
              r && (r = d(e.responsePayload, t, a));
              let i = e.requestPayload;
              i && (i = d(e.requestPayload, t, a));
              let s = e.outgoingRequestPayload;
              return (
                s && (s = d(e.outgoingRequestPayload, t, a)),
                (
                  null === (n = Object.values(t)) || void 0 === n
                    ? void 0
                    : n.some((e) => e)
                )
                  ? Object.assign(Object.assign({}, e), {
                      appliedTemplating: t,
                      responsePayload: r,
                      requestPayload: i,
                      outgoingRequestPayload: s,
                    })
                  : e
              );
            } catch (a) {
              return e;
            }
          });
      },
      2356: (e, a) => {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.show = void 0);
        const n = {
            "background-color": "#333",
            "border-radius": "2px",
            bottom: "30px",
            color: "#fff",
            "font-size": "12px",
            left: "50%",
            "margin-left": "-125px",
            "min-width": "220px",
            "max-width": "380px",
            padding: "14px",
            position: "fixed",
            "text-align": "center",
            visibility: "visible",
            "z-index": "2147483647",
          },
          t = "tweak-browser-extension-vanilla-snackbar";
        let r;
        a.show = function ({ ttl: e, msg: a }) {
          try {
            const i = document.getElementById(t);
            i && i.remove(), r && clearTimeout(r);
            const o = document.createElement("div");
            (o.id = t),
              Object.keys(n).forEach((e) => {
                o.style.setProperty(e, n[e]);
              }),
              (o.innerText = a),
              document.body.appendChild(o),
              (r = setTimeout(() => {
                o.remove();
              }, e));
          } catch (e) {
            0;
          }
        };
      },
      9609: function (e, a, n) {
        var t =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.stopXHR = a.startXHR = void 0);
        const r = n(9449),
          i = n(8006),
          o = n(9973),
          s = t(n(4886)),
          l = n(5705),
          c = n(9829);
        let u = new WeakMap(),
          d = new WeakMap();
        const m = [];
        let h = window.XMLHttpRequest.prototype.open,
          p = window.XMLHttpRequest.prototype.send,
          b = window.XMLHttpRequest.prototype.setRequestHeader;
        try {
          (h = window.XMLHttpRequest.prototype.open),
            (p = window.XMLHttpRequest.prototype.send),
            (b = window.XMLHttpRequest.prototype.setRequestHeader);
        } catch (e) {
          0;
        }
        function f(e, a, n, t, r) {
          u.set(this, { url: a, method: e });
          try {
            (null != n && "boolean" == typeof n) || (n = !0),
              void 0 === t && (t = null),
              void 0 === r && (r = null),
              (this.__amicabletbecoxhro = !0),
              h.apply(this, [e, a, n, t, r]);
          } catch (e) {
            0;
          }
        }
        function g(e) {
          const { method: a, url: n } = u.get(this) || {},
            t = d.get(this),
            h = {
              method: (null == a ? void 0 : a.toUpperCase)
                ? a.toUpperCase()
                : r.HttpMethod.GET,
              body: e || "",
              url: n,
              headers: t,
            },
            f = !!a && n ? o.RulesManager.matches(n, h) : null;
          let g;
          switch (f && f.interceptionPolicy) {
            case r.InterceptionPolicy.PATCH: {
              const e = f;
              g =
                (null == e ? void 0 : e.plan) === s.default.PLANS.premium
                  ? c.patchXHRSend
                  : l.mockXHRSend;
              break;
            }
            default:
              g = l.mockXHRSend;
          }
          f && (0, i.pauseIfBreakpointEnabled)(f, a, n);
          const y = g.apply(this, [f, p, b, h]);
          y && m.push(y), u.delete(this);
        }
        function y(e, a) {
          try {
            const n = d.get(this);
            if (n) (n[e] = a), d.set(this, n);
            else {
              const n = { [e]: a };
              d.set(this, n);
            }
          } catch (n) {
            0, b.apply(this, [e, a]);
          }
        }
        (a.startXHR = function () {
          (m.length = 0), (u = new WeakMap()), (d = new WeakMap());
          try {
            (window.XMLHttpRequest.prototype.open = f),
              (window.XMLHttpRequest.prototype.send = g),
              (window.XMLHttpRequest.prototype.setRequestHeader = y);
          } catch (e) {
            0;
          }
        }),
          (a.stopXHR = function () {
            try {
              (window.XMLHttpRequest.prototype.open = h),
                (window.XMLHttpRequest.prototype.send = p),
                (window.XMLHttpRequest.prototype.setRequestHeader = b),
                m.forEach((e) => {
                  try {
                    e();
                  } catch (e) {
                    0;
                  }
                }),
                (m.length = 0),
                (u = new WeakMap()),
                (d = new WeakMap());
            } catch (e) {
              0;
            }
          });
      },
      9449: (e, a) => {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.FetchMode =
            a.InterceptionPolicy =
            a.TemplatingTypes =
            a.RequestPayloadMatchPolicy =
            a.HttpMethod =
              void 0),
          (function (e) {
            (e.WILDCARD = "*"),
              (e.CONNECT = "CONNECT"),
              (e.DELETE = "DELETE"),
              (e.GET = "GET"),
              (e.HEAD = "HEAD"),
              (e.OPTIONS = "OPTIONS"),
              (e.PATCH = "PATCH"),
              (e.POST = "POST"),
              (e.PUT = "PUT"),
              (e.TRACE = "TRACE");
          })(a.HttpMethod || (a.HttpMethod = {})),
          (function (e) {
            (e.EXACT = "EXACT"), (e.PARTIAL = "PARTIAL");
          })(a.RequestPayloadMatchPolicy || (a.RequestPayloadMatchPolicy = {})),
          (function (e) {
            (e.GENERATOR = "GENERATOR"), (e.VARIABLES = "VARIABLES");
          })(a.TemplatingTypes || (a.TemplatingTypes = {})),
          (function (e) {
            (e.MOCK = "MOCK"), (e.PATCH = "PATCH");
          })(a.InterceptionPolicy || (a.InterceptionPolicy = {})),
          (function (e) {
            (e.CORS = "cors"),
              (e.NO_CORS = "no-cors"),
              (e.SAME_ORIGIN = "same-origin");
          })(a.FetchMode || (a.FetchMode = {}));
      },
      3116: function (e, a, n) {
        var t =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, a, n, t) {
                  void 0 === t && (t = n);
                  var r = Object.getOwnPropertyDescriptor(a, n);
                  (r &&
                    !("get" in r
                      ? !a.__esModule
                      : r.writable || r.configurable)) ||
                    (r = {
                      enumerable: !0,
                      get: function () {
                        return a[n];
                      },
                    }),
                    Object.defineProperty(e, t, r);
                }
              : function (e, a, n, t) {
                  void 0 === t && (t = n), (e[t] = a[n]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: a,
                  });
                }
              : function (e, a) {
                  e.default = a;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var a = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t(a, e, n);
              return r(a, e), a;
            },
          o =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.RulesManager = void 0);
        const s = n(4772),
          l = o(n(4886)),
          c = n(9582),
          u = n(9449),
          d = i(n(8006)),
          m = i(n(7026)),
          h = n(5134);
        class p {
          static init(e, a) {
            (p.rules = new Map()),
              p.addAll(e),
              a && (p.variables = (0, s.mapFromArray)(a, "name", "value"));
          }
          static clear(e) {
            try {
              e
                ? (p.rules = new Map(
                    Array.from(p.rules.entries()).filter(
                      ([, a]) => a.collectionId !== e
                    )
                  ))
                : p.rules.clear();
            } catch (e) {
              0;
            }
          }
          static add(e) {
            const a = Object.assign({}, e);
            "x1" === a.plan &&
              ((a.responseHeaders = p.transformHeadersWithVariableMetadata(
                (null == e ? void 0 : e.responseHeaders) || []
              )),
              (a.requestHeaders = p.transformHeadersWithVariableMetadata(
                (null == e ? void 0 : e.requestHeaders) || []
              ))),
              p.rules.set(a.id, a);
          }
          static addAll(e) {
            e && e.length && e.forEach(p.add);
          }
          static delete(e) {
            p.rules.delete(e);
          }
          static transformHeadersWithVariableMetadata(e) {
            return (
              (null == e
                ? void 0
                : e.map(
                    ({
                      header: e,
                      header_meta: a,
                      value: n,
                      value_meta: t,
                      active: r,
                    }) => ({
                      header: a || e,
                      header_meta: void 0,
                      value: t || n,
                      value_meta: void 0,
                      active: r,
                    })
                  )) || []
            );
          }
          static match(e, a, n) {
            if (!e.enabled) return !1;
            if (!e.urlExpression || "" === e.urlExpression.trim()) return !1;
            const t = n.method;
            if (
              e.httpMethod !== u.HttpMethod.WILDCARD &&
              t.toUpperCase() !== e.httpMethod
            )
              return !1;
            if (e.requestPayload && "" !== e.requestPayload.trim())
              switch (e.requestPayloadMatchPolicy) {
                case u.RequestPayloadMatchPolicy.EXACT:
                  if (!m.isPayloadEqual(n.body, e.requestPayload)) return !1;
                  break;
                case u.RequestPayloadMatchPolicy.PARTIAL:
                  if (!m.contains(n.body, e.requestPayload)) return !1;
              }
            const r = e.urlExpression.trim();
            if (e.isRegexActive)
              try {
                return new RegExp(r).test(a);
              } catch (a) {
                0;
                const n = {
                  type: "ERROR",
                  text: (0, c.t)("rc_invalid_regular_expression_provided", {
                    regex: r,
                    configName: e.configName,
                  }),
                };
                return d.notifyGenericMessage(n), !1;
              }
            else
              try {
                return a.includes(r);
              } catch (e) {
                return !1;
              }
          }
          static matches(e, a) {
            if (!e || !a) return null;
            const n = d.getFullURL(e);
            let t = (0, s.mapToValuesArray)(p.rules).find((e) =>
              this.match(e, n, a)
            );
            if (
              (t &&
                t.interceptionPolicy ===
                  l.default.INTERCEPTION_POLICIES.MOCK.KEY &&
                (t = Object.assign(Object.assign({}, t), {
                  responsePayload: m.safelyApplyHookFunctionToPayload(
                    t,
                    t.responseHookFn,
                    t.responsePayload,
                    a,
                    p.variables
                  ),
                })),
              t)
            ) {
              const e = m.computeRequestHookModifications(t, a, p.variables);
              if (e.overrideRequestHeaders) {
                const a = t.requestHeaders.filter(
                    (a) => !e.overrideRequestHeaders[a.header]
                  ),
                  n = Object.keys(e.overrideRequestHeaders).map((a) => ({
                    header: a,
                    value: e.overrideRequestHeaders[a],
                    active: !0,
                    value_meta: void 0,
                    header_meta: void 0,
                  }));
                t = Object.assign(Object.assign({}, t), {
                  requestHeaders: [...a, ...n],
                });
              }
              null != e.overrideHttpMethod &&
                (t = Object.assign(Object.assign({}, t), {
                  outgoingHttpMethodOverride: e.overrideHttpMethod,
                })),
                null != e.overrideUrl &&
                  (t = Object.assign(Object.assign({}, t), {
                    outgoingUrlOverride: e.overrideUrl,
                  })),
                null != e.overrideRequestBody &&
                  (t = Object.assign(Object.assign({}, t), {
                    outgoingRequestPayload: e.overrideRequestBody,
                  }));
            }
            return t ? (0, h.applyTemplating)(t, p.variables) : null;
          }
          static toggleEnabled(e, a) {
            const n = p.rules.get(e);
            if (n) {
              const t = Object.assign(Object.assign({}, n), { enabled: a });
              p.rules.set(e, t);
            }
          }
          static toggleEnableAll(e) {
            (0, s.mapToValuesArray)(p.rules).forEach(({ id: a }) =>
              p.toggleEnabled(a, e)
            );
          }
          static getVariables() {
            return p.variables;
          }
          static setVariables(e) {
            e && (p.variables = (0, s.mapFromArray)(e, "name", "value"));
          }
        }
        a.RulesManager = p;
      },
      7026: function (e, a, n) {
        var t =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.postRequestPayloadTransformations =
            a.safelyApplyHookFunctionToPayload =
            a.computeRequestHookModifications =
            a.contains =
            a.isPayloadEqual =
            a._ =
              void 0);
        const r = t(n(2307)),
          i = t(n(2336)),
          o = t(n(2378)),
          s = t(n(5030)),
          l = t(n(714)),
          c = n(5134),
          u = n(8006),
          d = n(9582),
          m = t(n(4886));
        a._ = { isEqual: r.default, merge: o.default, pick: s.default };
        const h = new l.default();
        function p(e, a) {
          if (e === a) return !0;
          if (!e || !a) return !1;
          try {
            const n = JSON.parse(e),
              t = JSON.parse(a);
            if ((0, r.default)(n, t)) return !0;
          } catch (e) {}
          try {
            const n = /\s*\r*\n*/gi,
              t = `${e}`.replace(n, "");
            if (t === `${a}`.replace(n, "")) return !0;
          } catch (e) {}
          return !1;
        }
        function b(e) {
          try {
            if (!e) return {};
            const a = {};
            for (const [n, t] of e.entries()) a[n] = t;
            return a;
          } catch (e) {
            return {};
          }
        }
        (a.isPayloadEqual = p),
          (a.contains = function (e, a) {
            if (!e || !a) return !1;
            if (p(e, a)) return !0;
            try {
              if (e.includes(a)) return !0;
            } catch (e) {}
            try {
              const n = JSON.parse(e),
                t = JSON.parse(a);
              if ((0, i.default)(n, t)) return !0;
            } catch (e) {}
            return !1;
          });
        const f = {
          overrideHttpMethod: void 0,
          overrideUrl: void 0,
          overrideRequestBody: void 0,
          overrideRequestHeaders: {},
        };
        function g(e, n, t, r, i) {
          if (e.plan !== m.default.PLANS.premium) return t;
          if (!n || n === m.default.DEFAULT_RESPONSE_HOOK_FUNCTION) return t;
          try {
            const o = new Function(
              "response",
              "url",
              "method",
              "body",
              "vars",
              "_",
              "chance",
              `\n      try {\n        ${n}\n      } catch (error) {\n        const args = [\n          '%ctweak browser extension',\n          'background-color:#ac6a00;color:#fff;font-weight:bolder;',\n          '➤ 🐛 Oops! Your response hook errored with: ',\n          error,\n        ];\n        const c = 'console';\n        const i = 'inf';\n        window[c][i+'o'](...args);\n        return error;\n      }\n    `
            );
            let s;
            try {
              s = JSON.parse(t);
            } catch (e) {
              s = t;
            }
            const l = r.method,
              c = r.url,
              m = r.body,
              p = o(s, c, l, m, b(i), a._, h);
            let f;
            if (
              (p instanceof Error
                ? ((0, u.notifyGenericMessage)({
                    type: "ERROR",
                    text: (0, d.t)("response_hook_exec_failure", {
                      name: e.configName,
                      errorDetail: p.message,
                    }),
                  }),
                  (f = t))
                : (f = "object" == typeof p ? JSON.stringify(p) : p),
              f !== t)
            )
              return f;
          } catch (a) {
            return (
              (0, u.notifyGenericMessage)({
                type: "ERROR",
                text: (0, d.t)("response_hook_exec_failure", {
                  name: e.configName,
                }),
              }),
              t
            );
          }
          return t;
        }
        (a.computeRequestHookModifications = function (e, n, t) {
          if (e.plan !== m.default.PLANS.premium) return f;
          const r = e.requestHookFn;
          if (!r || r === m.default.DEFAULT_RESPONSE_HOOK_FUNCTION) return f;
          try {
            const i = new Function(
                "url",
                "method",
                "body",
                "headers",
                "vars",
                "_",
                "chance",
                `\n      try {\n        ${r}\n      } catch (error) {\n        const args = [\n          '%ctweak browser extension',\n          'background-color:#ac6a00;color:#fff;font-weight:bolder;',\n          '➤ 🐛 Oops! Your request hook errored with: ',\n          error,\n        ];\n        const c = 'console';\n        const i = 'inf';\n        window[c][i+'o'](...args);\n        return error;\n      }\n    `
              ),
              o = n.url,
              s = n.method,
              l = n.body,
              c =
                (null == e
                  ? void 0
                  : e.requestHeaders.reduce(
                      (e, a) => ((e[a.header] = a.value), e),
                      n.headers || {}
                    )) ||
                n.headers ||
                {},
              m = i(o, s, l, c, b(t), a._, h);
            if (m instanceof Error)
              return (
                (0, u.notifyGenericMessage)({
                  type: "ERROR",
                  text: (0, d.t)("request_hook_exec_failure", {
                    name: e.configName,
                    errorDetail: m.message,
                  }),
                }),
                f
              );
            if (m && "object" == typeof m) {
              if (!m.url || !m.method)
                return (
                  (0, u.notifyGenericMessage)({
                    type: "ERROR",
                    text: (0, d.t)("request_hook_exec_failure", {
                      name: e.configName,
                      errorDetail:
                        "your hook function return value is missing required properties",
                    }),
                  }),
                  f
                );
              const a = m;
              return {
                overrideRequestBody: a.body,
                overrideRequestHeaders: a.headers,
                overrideUrl: a.url != o ? a.url : void 0,
                overrideHttpMethod: a.method != s ? a.method : void 0,
              };
            }
            return f;
          } catch (a) {
            return (
              (0, u.notifyGenericMessage)({
                type: "ERROR",
                text: (0, d.t)("request_hook_exec_failure", {
                  name: e.configName,
                }),
              }),
              f
            );
          }
          return f;
        }),
          (a.safelyApplyHookFunctionToPayload = g),
          (a.postRequestPayloadTransformations = function (e, a, n, t) {
            try {
              return e.plan !== m.default.PLANS.premium
                ? a
                : (0, c.apply)(g(e, e.responseHookFn, a, n, t), void 0, t);
            } catch (e) {
              return a;
            }
          });
      },
      9582: (e, a, n) => {
        n.r(a), n.d(a, { ellipsis: () => r, t: () => s, time: () => i });
        var t = n(7565);
        function r(e, a) {
          return e && e.length
            ? e.length > a
              ? `${e.slice(0, a)}...`
              : e
            : "...";
        }
        function i(e) {
          if (!e) return "";
          try {
            const a = new Date(e),
              n = a.toDateString(),
              t = new Date(),
              r =
                n === t.toDateString()
                  ? (function (e) {
                      const a = e.getMinutes(),
                        n = `${a > 9 ? "" : "0"}${a}`,
                        t = e.getSeconds(),
                        r = `${t > 9 ? "" : "0"}${t}`;
                      return `${e.getHours()}:${n}:${r}.${e.getMilliseconds()}`;
                    })(a)
                  : a.toLocaleString();
            return "Invalid Date" !== r ? r : "";
          } catch (e) {
            return "";
          }
        }
        const o = { ellipsis: r, time: i };
        function s(e, a = {}) {
          if (t.Z[e])
            try {
              const n = t.Z[e];
              if ("string" == typeof n) return n;
              if ("function" == typeof n) return n(a, o);
            } catch (e) {
              0;
            }
          else 0;
          return "";
        }
      },
      7565: (e, a, n) => {
        n.d(a, { Z: () => t });
        const t = {
          snack_delete_rc_confirmation: ({ name: e }, a) =>
            `Rule "${e ? a.ellipsis(e, 30) : "unknown"}" deleted`,
          snack_duplication_rc_confirmation: ({ name: e }, a) =>
            `Duplicated rule "${e ? a.ellipsis(e, 30) : "unknown"}"`,
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
          hits_limit_of_rcs_in_extension_via_import: ({ limit: e, n: a }) =>
            `Only ${a} rule${
              a > 1 ? "s" : ""
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
          rc_http_status_title:
            "Status code will fallback to 200 if left empty",
          rc_http_status_title_patch:
            "A valid status code will override the original response status code. Leave 0 to forward the original response status code.",
          rc_url_match_expression: "URL",
          rc_regex_explained: ({ on: e }) =>
            (e ? "Disable" : "Enable") + " use of regular expression",
          rc_url_match_expression_bad_regex_error:
            "Oops! That's an invalid regular expression",
          rc_tooltip_http_method_badge: ({ method: e }) =>
            "*" === e
              ? "matching all HTTP methods"
              : `matching HTTP method ${e}`,
          rc_tooltip_request_interception_counter: ({ requestCount: e }) =>
            `${e} ${1 === e ? "request" : "requests"} intercepted`,
          rc_tooltip_request_last_interception_time: ({ ts: e }, a) =>
            a.time(e),
          rc_tooltip_generic_disabled_info:
            "Click first ▶ to enable the extension",
          rc_invalid_regular_expression_provided: ({
            regex: e,
            configName: a,
          }) => `Invalid regular expression "${e}" for "${a}".`,
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
          rc_editor_tab_request_footnote_patch: ({
            isExactMatchingEnabled: e,
          }) =>
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
          rc_failed_to_parse_user_provided_payload: ({ url: e }, a) =>
            `The request to "${a.ellipsis(
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
          setting_toggle_dark_mode: ({ on: e }) =>
            "Lights " + (e ? "on" : "off"),
          extension_updated_message: ({ version: e }) =>
            `Extension updated to new version ${e}!`,
          see_changelog_button: "See changelog",
          settings_title: "Settings",
          enable_experiments: "Experiments",
          enable_experiments_description:
            "Here you manage experimental features. These are not stable yet, and might have side-effects in the website once enabled. <b>For consistent behavior please ensure:</b><ul><li>You close and reopen the browser tab where tweak was running</li><li>You reload the extension (<i>closing and reopening the popup should suffice for most cases</i>)</li></ul>",
          breakpoint_toast_message: ({ url: e, method: a }, n) =>
            `👋 tweak extension is stopping here to debug ${
              a ? a.toUpperCase() : ""
            } ${n.ellipsis(e, 50)}. Press "Step Out" to continue`,
          response_hook_exec_failure: ({ name: e, errorDetail: a }, n) =>
            `Error while executing a response hook${
              e ? ` ${n.ellipsis(e, 50)}` : ""
            }${a ? `: "${a}"` : ""}`,
          request_hook_exec_failure: ({ name: e, errorDetail: a }, n) =>
            `Error while executing a request hook${
              e ? ` ${n.ellipsis(e, 50)}` : ""
            }${a ? `: "${a}"` : ""}`,
          plan_activation_successful:
            "Your plan has been upgraded successfully!",
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
          collection_tooltip_active: ({ count: e, active: a }) =>
            a ? `${a} of ${e} rules active` : `${e} rules`,
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
      },
    },
    a = {};
  function n(t) {
    var r = a[t];
    if (void 0 !== r) return r.exports;
    var i = (a[t] = { id: t, loaded: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.n = (e) => {
    var a = e && e.__esModule ? () => e.default : () => e;
    return n.d(a, { a }), a;
  }),
    (n.d = (e, a) => {
      for (var t in a)
        n.o(a, t) &&
          !n.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = n(5498),
        a = n(9973),
        t = n(6961);
      const r = !1,
        i = [];
      const o = new Set();
      function s(e) {
        const a = (function (e) {
          switch (e.method) {
            case "POST":
            case "PUT":
            case "PATCH": {
              let a = "";
              try {
                a = e.requestPayload.slice(0, 200);
              } catch (e) {
                a = "";
              }
              return `${e.requestURL};${e.method};${a}`;
            }
            default:
              return `${e.requestURL};${e.method}`;
          }
        })(e);
        var n;
        o.has(a) ||
          (o.add(a),
          ((n = e.responsePayload),
          new Promise((e, a) => {
            try {
              e(t.compressToEncodedURIComponent(n));
            } catch (e) {
              a(e);
            }
          }))
            .catch((e) => {
              o.delete(a);
            })
            .then((n) => {
              const t = { ...e, id: a, responsePayload: n };
              i.push(t), i.length > 600 && i.splice(0, i.length - 600);
            })
            .catch((e) => {
              o.delete(a);
            }));
      }
      function l() {
        try {
          (i.length = 0), o.clear();
        } catch (e) {
          0;
        }
      }
      var c = n(4886);
      const u = {
        __TWEAK_BOOTSTRAP_FINISHED__: !0,
        TWEAK_GENERIC_MESSAGE: !0,
        INCREMENT_REQUEST_COUNT: !0,
      };
      const d = {
        INTERCEPT: (e) => {
          try {
            a.RulesManager.add(e);
          } catch (e) {
            0;
          }
        },
        INTERCEPT_MANY: (e) => {
          try {
            a.RulesManager.addAll(e);
          } catch (e) {
            0;
          }
        },
        DELETE_CONFIGURATION: (e) => {
          try {
            a.RulesManager.delete(e);
          } catch (e) {
            0;
          }
        },
        REFRESH_VARIABLES: (e) => {
          try {
            a.RulesManager.setVariables(e);
          } catch (e) {
            0;
          }
        },
        STOP_ALL_INTERCEPTIONS: () => {
          (0, a.stopIntercepting)(), window.__onttis && window.__onttis("OFF");
        },
        START_ALL_INTERCEPTIONS: () => {
          (0, a.startIntercepting)(), window.__onttis && window.__onttis("ON");
        },
        TOGGLE_TWEAK_BACKGROUND_REQUEST_STASHING: (e, a) => {
          "OFF" === e && l(), window.__onttss__ && window.__onttss__(e, a);
        },
        CLEAR_ALL_DATA: (e) => {
          try {
            a.RulesManager.clear(e),
              (0, a.stopIntercepting)(),
              window.__onttis && window.__onttis("OFF"),
              window.__onttss__ && window.__onttss__("OFF", "system"),
              l();
          } catch (e) {
            0;
          }
        },
        CLEAN_TWEAK_BACKGROUND_CACHE: () => {
          try {
            l();
          } catch (e) {
            0;
          }
        },
        STASH_REQUESTS: (e) => {
          try {
            e.forEach(s);
          } catch (e) {
            0;
          }
        },
        FETCH_BACKGROUND_REQUESTS: () => {
          try {
            const e = new CustomEvent("TweakGenericForwardEvent", {
              detail: {
                data: {
                  type: "PUSH_BACKGROUND_REQUESTS_TO_EXTENSION",
                  payload: [i],
                },
              },
            });
            window.dispatchEvent(e);
          } catch (e) {
            0;
          }
        },
        __TWEAK_BOOTSTRAP__: (e) => {
          try {
            const {
                configurations: n = [],
                isExtensionActive: t,
                variables: r,
                autoEnabledSites: i,
                plan: o,
              } = e,
              s = Object.keys(n).map((e) => n[e]);
            let l = t;
            try {
              if (o === c.default.PLANS.premium)
                for (const e of i)
                  if (window.location.href.includes(e)) {
                    l = !0;
                    break;
                  }
            } catch (e) {
              0;
            }
            const u = l ? "ON" : "OFF";
            a.RulesManager.init(s, r),
              l && (0, a.startIntercepting)(),
              window.__onttis,
              window.__onttis && window.__onttis(u);
          } catch (e) {
            0;
          }
        },
        TPA_PONG: (a) => {
          if (a)
            try {
              const a = new CustomEvent(e.BZC.EXT_TO_WEB_EVENT_NAME, {
                detail: {
                  data: { type: e.BZC.ACTIVATION_PONG_EVENT, payload: [!0] },
                },
              });
              window.dispatchEvent(a);
            } catch (e) {
              0;
            }
        },
      };
      function m(e) {
        if (!e.data || !e.data.type || !e.data.payload) return;
        const { type: a, payload: n } = e.data;
        if (u[a])
          try {
            const a = new CustomEvent("TweakGenericForwardEvent", {
              detail: { data: e.data },
            });
            window.dispatchEvent(a);
          } catch (e) {
            0;
          }
        else d[a] && d[a](...n);
      }
      window.removeEventListener("message", m),
        window.addEventListener("message", m, !1);
    })();
})();
