import { y as u, D as y } from "./preact.module.f1575aff.js";
const S = "modulepreload",
  p = function (t) {
    return "/" + t;
  },
  g = {},
  E = function (o, n, c) {
    if (!n || n.length === 0) return o();
    const f = document.getElementsByTagName("link");
    return Promise.all(
      n.map((s) => {
        if (((s = p(s)), s in g)) return;
        g[s] = !0;
        const l = s.endsWith(".css"),
          m = l ? '[rel="stylesheet"]' : "";
        if (!!c)
          for (let r = f.length - 1; r >= 0; r--) {
            const a = f[r];
            if (a.href === s && (!l || a.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${s}"]${m}`)) return;
        const e = document.createElement("link");
        if (
          ((e.rel = l ? "stylesheet" : S),
          l || ((e.as = "script"), (e.crossOrigin = "")),
          (e.href = s),
          document.head.appendChild(e),
          l)
        )
          return new Promise((r, a) => {
            e.addEventListener("load", r),
              e.addEventListener("error", () =>
                a(new Error(`Unable to preload CSS for ${s}`))
              );
          });
      })
    ).then(() => o());
  },
  _ = ({ value: t, name: o, hydrate: n = !0 }) =>
    t
      ? u(n ? "astro-slot" : "astro-static-slot", {
          name: o,
          dangerouslySetInnerHTML: { __html: t },
        })
      : null;
_.shouldComponentUpdate = () => !1;
var h = _;
const d = new Map();
var N =
  (t) =>
  async (o, n, { default: c, ...f }) => {
    if (!t.hasAttribute("ssr")) return;
    for (const [i, e] of Object.entries(f)) n[i] = u(h, { value: e, name: i });
    if (t.dataset.preactSignals) {
      const { signal: i } = await E(
        () => import("./signals.module.71af6876.js"),
        [
          "astro/signals.module.71af6876.js",
          "astro/preact.module.f1575aff.js",
          "astro/hooks.module.a845df0c.js",
        ]
      );
      let e = JSON.parse(t.dataset.preactSignals);
      for (const [r, a] of Object.entries(e)) {
        if (!d.has(a)) {
          const v = i(n[r]);
          d.set(a, v);
        }
        n[r] = d.get(a);
      }
    }
    function l({ children: i }) {
      let e = Object.fromEntries(
        Array.from(t.attributes).map((r) => [r.name, r.value])
      );
      return u(t.localName, e, i);
    }
    let m = t.parentNode;
    y(u(l, null, u(o, n, c != null ? u(h, { value: c }) : c)), m, t);
  };
export { N as default };
