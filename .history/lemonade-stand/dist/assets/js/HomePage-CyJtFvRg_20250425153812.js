const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/js/NearbyStandsList-R61J4kNt.js",
      "assets/js/vendor-ui-Db6t6WVF.js",
      "assets/js/vendor-react-CDe1t649.js",
      "assets/js/index-D8KjxLH4.js",
      "assets/js/vendor-supabase-BUo_ywwZ.js",
      "assets/css/index-hF8EFLtu.css",
    ])
) => i.map((i) => d[i]);
import {
  j as e,
  P as s,
  C as a,
  a as l,
  B as t,
  A as n,
  L as i,
  F as r,
} from "./vendor-ui-Db6t6WVF.js";
import { r as o, L as c } from "./vendor-react-CDe1t649.js";
import {
  M as d,
  T as m,
  Z as u,
  u as x,
  L as h,
  a as p,
  P as g,
} from "./vendor-leaflet-CtNNul9z.js";
import {
  u as f,
  g as j,
  f as b,
  a as y,
  b as v,
  R as w,
  c as N,
  d as _,
} from "./index-D8KjxLH4.js";
import { _ as S } from "./vendor-supabase-BUo_ywwZ.js";
delete h.Icon.Default.prototype._getIconUrl,
  h.Icon.Default.mergeOptions({
    iconRetinaUrl: null,
    iconUrl: null,
    shadowUrl: null,
  });
const L = ({ center: e, zoom: s }) => {
  const a = x();
  return (
    o.useEffect(() => {
      e && a.setView(e, s);
    }, [e, s, a]),
    null
  );
};
L.propTypes = { center: s.arrayOf(s.number), zoom: s.number };
const C = o.memo(({ showUserLocation: s, onUserLocationFound: a }) => {
  const [l, t] = o.useState(null),
    [n, i] = o.useState(null),
    r = x(),
    c = o.useRef(null),
    { location: d, getLocation: m } = f(),
    u = o.useMemo(
      () =>
        new h.Icon({
          iconUrl: "/images/markers/user-location.svg",
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12],
        }),
      []
    );
  return (
    o.useEffect(() => {
      if (d && s) {
        const e = { lat: d.lat, lng: d.lng };
        t([e.lat, e.lng]),
          i(d.accuracy || 0),
          c.current
            ? (c.current.setLatLng(e), c.current.setRadius(d.accuracy || 100))
            : (c.current = h
                .circle(e, {
                  radius: d.accuracy || 100,
                  color: "#4285F4",
                  fillColor: "#4285F4",
                  fillOpacity: 0.1,
                  weight: 1,
                })
                .addTo(r)),
          a && a(e);
      }
    }, [d, r, s, a]),
    o.useEffect(() => {
      if (s) {
        if (!d) {
          r.locate({
            setView: !0,
            maxZoom: 16,
            enableHighAccuracy: !1,
            timeout: 1e4,
            maximumAge: 6e4,
          });
          const e = (e) => {
              t([e.latlng.lat, e.latlng.lng]),
                i(e.accuracy),
                c.current
                  ? (c.current.setLatLng(e.latlng),
                    c.current.setRadius(e.accuracy))
                  : (c.current = h
                      .circle(e.latlng, {
                        radius: e.accuracy,
                        color: "#4285F4",
                        fillColor: "#4285F4",
                        fillOpacity: 0.1,
                        weight: 1,
                      })
                      .addTo(r)),
                a && a(e.latlng);
            },
            s = (e) => {
              m();
            };
          return (
            r.on("locationfound", e),
            r.on("locationerror", s),
            () => {
              r.off("locationfound", e), r.off("locationerror", s);
            }
          );
        }
        return () => {
          c.current && (c.current.remove(), (c.current = null));
        };
      }
      c.current && (c.current.remove(), (c.current = null));
    }, [r, s, a, d, m]),
    l
      ? e.jsx(p, {
          position: l,
          icon: u,
          children: e.jsx(g, {
            children: e.jsxs("div", {
              children: [
                e.jsx("h3", {
                  className: "font-display text-base",
                  children: "Your Location",
                }),
                e.jsxs("p", {
                  className: "text-sm",
                  children: ["Accuracy: ", Math.round(n), " meters"],
                }),
              ],
            }),
          }),
        })
      : null
  );
});
C.propTypes = { showUserLocation: s.bool, onUserLocationFound: s.func };
const k = o.memo(({ stand: s, onStandClick: a }) => {
  const l = o.useMemo(
    () =>
      new h.Icon({
        iconUrl: "/public/images/markers/lemonade-marker.svg",
        iconSize: [40, 48],
        iconAnchor: [20, 48],
        popupAnchor: [0, -48],
      }),
    []
  );
  return e.jsx(
    p,
    {
      position: [s.location_lat, s.location_lng],
      icon: l,
      eventHandlers: {
        click: () => {
          a && a(s);
        },
      },
      children: e.jsx(g, {
        children: e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h3", {
              className: "font-display text-lg text-lemonade-yellow-dark",
              children: s.name,
            }),
            s.image_url &&
              e.jsx("img", {
                src: s.image_url,
                alt: s.name,
                className: "w-32 h-32 object-cover mx-auto my-2 rounded-lg",
                loading: "lazy",
              }),
            e.jsx("p", { className: "text-sm", children: s.description }),
            e.jsx("p", {
              className: "text-xs mt-2 text-gray-600",
              children: s.address,
            }),
            e.jsx("button", {
              className:
                "mt-2 px-3 py-1 bg-lemonade-yellow text-gray-800 rounded-full text-sm font-display hover:bg-lemonade-yellow-dark",
              onClick: (e) => {
                e.stopPropagation(), a && a(s);
              },
              children: "View Details",
            }),
          ],
        }),
      }),
    },
    s.id
  );
});
k.propTypes = {
  stand: s.shape({
    id: s.string.isRequired,
    name: s.string.isRequired,
    description: s.string,
    location_lat: s.number.isRequired,
    location_lng: s.number.isRequired,
    address: s.string,
    image_url: s.string,
  }).isRequired,
  onStandClick: s.func,
};
const R = ({
  stands: s = [],
  center: a = [40.7128, -74.006],
  zoom: l = 13,
  height: t = "500px",
  showUserLocation: n = !0,
  onStandClick: i,
  onUserLocationFound: r,
  className: c = "",
  ...x
}) => {
  const h = o.useMemo(() => s, [s]);
  return e.jsx("div", {
    className: `rounded-xl overflow-hidden shadow-playful ${c}`,
    style: { height: t },
    ...x,
    children: e.jsxs(d, {
      center: a,
      zoom: l,
      style: { height: "100%", width: "100%" },
      zoomControl: !1,
      preferCanvas: !0,
      attributionControl: !1,
      minZoom: 5,
      maxZoom: 18,
      updateWhenZooming: !1,
      updateWhenIdle: !0,
      children: [
        e.jsx(m, {
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        }),
        e.jsx(u, { position: "bottomright" }),
        e.jsx(L, { center: a, zoom: l }),
        e.jsx(C, { showUserLocation: n, onUserLocationFound: r }),
        h.map((s) => e.jsx(k, { stand: s, onStandClick: i }, s.id)),
      ],
    }),
  });
};
(R.propTypes = {
  stands: s.arrayOf(
    s.shape({
      id: s.string.isRequired,
      name: s.string.isRequired,
      description: s.string,
      location_lat: s.number.isRequired,
      location_lng: s.number.isRequired,
      address: s.string,
      image_url: s.string,
    })
  ),
  center: s.arrayOf(s.number),
  zoom: s.number,
  height: s.string,
  showUserLocation: s.bool,
  onStandClick: s.func,
  onUserLocationFound: s.func,
  className: s.string,
}),
  s.bool,
  s.func,
  s.func,
  s.func,
  s.string;
const q = ({
  stand: s,
  onViewProducts: n,
  onClose: i,
  className: r = "",
  ...c
}) =>
  s
    ? e.jsxs(a, {
        className: `w-full ${r}`,
        variant: "yellow",
        hover: !1,
        ...c,
        children: [
          e.jsxs(a.Header, {
            className: "flex justify-between items-start",
            children: [
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("h3", {
                    className:
                      "text-lg md:text-xl font-display text-lemonade-yellow-dark truncate",
                    children: s.name,
                  }),
                  e.jsx("p", {
                    className: "text-xs md:text-sm text-gray-600 truncate",
                    children: s.address,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col items-end gap-1 md:gap-2 ml-2",
                children: [
                  e.jsx(l, {
                    variant: "yellow",
                    className: "text-xs md:text-sm",
                    children: "Open",
                  }),
                  null !== s.distance &&
                    void 0 !== s.distance &&
                    e.jsx(l, {
                      variant: "blue",
                      className: "text-xs md:text-sm",
                      children: j(s.distance),
                    }),
                ],
              }),
            ],
          }),
          e.jsxs(a.Body, {
            children: [
              s.image_url &&
                e.jsx("div", {
                  className: "relative w-full h-32 md:h-48 mb-4",
                  children: o.useMemo(() => {
                    const a = ((e, s = 400) =>
                        e
                          ? e.includes("cloudinary.com")
                            ? e.replace(
                                "/upload/",
                                `/upload/w_${s},q_auto,f_auto/`
                              )
                            : e.startsWith("/")
                            ? `${e}?width=${s}`
                            : e
                          : "")(
                        s.image_url,
                        window.innerWidth < 768 ? 320 : 480
                      ),
                      l = ((
                        e = "Image not available",
                        s = "F8E8A2",
                        a = "333333"
                      ) =>
                        `data:image/svg+xml;base64,${btoa(
                          `\n    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">\n      <rect width="300" height="200" fill="#${s}"/>\n      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#${a}">${e}</text>\n    </svg>\n  `
                        )}`)(s.name);
                    return e.jsx("img", {
                      src: a,
                      alt: s.name,
                      className: "w-full h-full object-cover rounded-lg",
                      loading: "lazy",
                      decoding: "async",
                      fetchpriority: "low",
                      sizes: "(max-width: 768px) 320px, 480px",
                      onError: (e) => {
                        (e.target.onerror = null), (e.target.src = l);
                      },
                    });
                  }, [s.image_url, s.name]),
                }),
              e.jsx("p", {
                className: "text-sm md:text-base text-gray-700",
                children: s.description,
              }),
              e.jsxs("div", {
                className:
                  "mt-3 md:mt-4 flex items-center text-xs md:text-sm text-gray-600",
                children: [
                  e.jsx("svg", {
                    className: "w-4 h-4 mr-1 flex-shrink-0",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: e.jsx("path", {
                      fillRule: "evenodd",
                      d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                      clipRule: "evenodd",
                    }),
                  }),
                  e.jsx("span", {
                    children:
                      null !== s.distance && void 0 !== s.distance
                        ? b(s.distance, "miles")
                        : "Distance unknown",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(a.Footer, {
            className: "flex flex-col sm:flex-row sm:justify-between gap-2",
            children: [
              e.jsx(t, {
                variant: "outline",
                onClick: i,
                size: "sm",
                className: "w-full sm:w-auto text-sm",
                children: "Back to Map",
              }),
              n &&
                e.jsx(t, {
                  variant: "primary",
                  onClick: () => n(s),
                  size: "sm",
                  className: "w-full sm:w-auto text-sm",
                  children: "View Products",
                }),
            ],
          }),
        ],
      })
    : null;
(q.propTypes = {
  stand: s.shape({
    id: s.string.isRequired,
    name: s.string.isRequired,
    description: s.string,
    address: s.string,
    image_url: s.string,
    distance: s.number,
  }),
  onViewProducts: s.func,
  onClose: s.func,
  className: s.string,
}),
  s.arrayOf(
    s.shape({
      id: s.string.isRequired,
      name: s.string.isRequired,
      description: s.string,
      location_lat: s.number.isRequired,
      location_lng: s.number.isRequired,
      address: s.string,
      image_url: s.string,
    })
  ),
  s.bool,
  s.func,
  s.func,
  s.string;
const z = o.lazy(() => S(() => Promise.resolve().then(() => T), void 0)),
  F = o.lazy(() =>
    S(
      () => import("./NearbyStandsList-R61J4kNt.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5])
    )
  ),
  A = () => {
    const { stands: s, loading: a, error: l } = y(),
      { location: r, getLocation: c, error: d } = f(),
      { nearbyStands: m } = v(),
      [u, x] = o.useState(null),
      [h, p] = o.useState([40.7128, -74.006]),
      [g, j] = o.useState(13),
      [b, N] = o.useState("all"),
      [_, S] = o.useState(null);
    o.useEffect(() => {
      S(l || (d && "nearby" === b ? d : null));
    }, [l, d, b]);
    const L = (e) => {
        x(e), p([e.location_lat, e.location_lng]), j(16);
      },
      C = o.useMemo(() => ("nearby" === b ? m : s), [b, m, s]),
      k = e.jsxs(e.Fragment, {
        children: [
          e.jsx(R, {
            stands: C,
            center: h,
            zoom: g,
            height: "calc(100vh - 200px)",
            showUserLocation: !0,
            onStandClick: L,
            onUserLocationFound: (e) => {
              e && e.lat && e.lng && p([e.lat, e.lng]);
            },
            className: a ? "opacity-60" : "",
          }),
          a &&
            e.jsx("div", {
              className: "flex justify-center mt-4",
              children: e.jsx(i, {
                size: "lg",
                variant: "yellow",
                showLabel: !0,
                label: "Loading lemonade stands...",
              }),
            }),
        ],
      }),
      q = () =>
        e.jsx("div", {
          className: "flex items-center justify-center h-full",
          children: e.jsx(i, {
            size: "md",
            variant: "yellow",
            showLabel: !0,
            label: "Loading...",
          }),
        }),
      A = o.useMemo(() => s, [s]),
      O = e.jsxs("div", {
        className: "h-[calc(100vh-200px)] flex flex-col",
        children: [
          e.jsxs("div", {
            className: "flex mb-4",
            children: [
              e.jsx(t, {
                variant: "all" === b ? "primary" : "outline",
                className: "flex-1 rounded-r-none",
                onClick: () => N("all"),
                children: "All Stands",
              }),
              e.jsx(t, {
                variant: "nearby" === b ? "primary" : "outline",
                className: "flex-1 rounded-l-none",
                onClick: () => {
                  N("nearby"), r || c();
                },
                children: "Near You",
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex-grow",
            children: e.jsx(o.Suspense, {
              fallback: e.jsx(q, {}),
              children:
                "all" === b
                  ? e.jsx(z, {
                      stands: A,
                      loading: a,
                      selectedStand: u,
                      onStandSelect: L,
                      onStandClose: () => {
                        x(null),
                          p(r ? [r.lat, r.lng] : [40.7128, -74.006]),
                          j(13);
                      },
                      userLocation: r,
                      className: "h-full",
                    })
                  : e.jsx(F, { onStandSelect: L, className: "h-full" }),
            }),
          }),
        ],
      });
    return e.jsxs("div", {
      className: "w-full",
      children: [
        e.jsx("h1", {
          className:
            "text-2xl md:text-3xl font-display text-lemonade-blue-dark mb-4",
          children: "Find Lemonade Stands",
        }),
        _ &&
          e.jsx(n, {
            variant: "error",
            className: "mb-4",
            dismissible: !0,
            onDismiss: () => S(null),
            children: _,
          }),
        e.jsx(w, { mapComponent: k, sidebarComponent: O }),
      ],
    });
  },
  O = ({ product: s, className: t = "", ...n }) =>
    s
      ? e.jsx(a, {
          className: `w-full ${t}`,
          variant: "white",
          hover: !1,
          ...n,
          children: e.jsxs("div", {
            className: "flex flex-col sm:flex-row",
            children: [
              s.image_url &&
                e.jsx("div", {
                  className: "sm:w-1/3 flex-shrink-0",
                  children: e.jsx("img", {
                    src: s.image_url,
                    alt: s.name,
                    className:
                      "w-full h-28 sm:h-32 md:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none",
                  }),
                }),
              e.jsxs("div", {
                className:
                  "p-3 sm:p-4 flex-1 " +
                  (s.image_url ? "sm:w-2/3" : "sm:w-full"),
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between items-start mb-1 sm:mb-2",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-base sm:text-lg font-display text-lemonade-blue-dark truncate max-w-[70%]",
                        children: s.name,
                      }),
                      e.jsxs(l, {
                        variant: "yellow",
                        className: "ml-2 text-xs sm:text-sm whitespace-nowrap",
                        children: ["$", parseFloat(s.price).toFixed(2)],
                      }),
                    ],
                  }),
                  s.description &&
                    e.jsx("p", {
                      className:
                        "text-gray-700 text-xs sm:text-sm line-clamp-3",
                      children: s.description,
                    }),
                  e.jsxs("div", {
                    className: "flex justify-between items-center mt-2",
                    children: [
                      !1 === s.is_available
                        ? e.jsx(l, {
                            variant: "red",
                            className: "text-xs",
                            children: "Sold Out",
                          })
                        : e.jsx(l, {
                            variant: "green",
                            className: "text-xs",
                            children: "Available",
                          }),
                      e.jsx("button", {
                        className:
                          "text-xs text-lemonade-blue hover:text-lemonade-blue-dark",
                        children: "Add to Order",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
O.propTypes = {
  product: s.shape({
    id: s.string,
    name: s.string.isRequired,
    description: s.string,
    price: s.oneOfType([s.number, s.string]).isRequired,
    image_url: s.string,
    is_available: s.bool,
  }).isRequired,
  className: s.string,
};
const U = ({
  stands: s = [],
  loading: l = !1,
  selectedStand: c = null,
  onStandSelect: d,
  onStandClose: m,
  userLocation: u = null,
  className: x = "",
  ...h
}) => {
  const [p, g] = o.useState(s),
    [f, y] = o.useState(null),
    [v, w] = o.useState(""),
    [_, S] = o.useState(!1),
    [L, C] = o.useState([]),
    [k, R] = o.useState(!1),
    [z, F] = o.useState(null);
  o.useEffect(() => {
    let e = [...s];
    if ((null !== f && u && (e = N(e, f)), v.trim())) {
      const s = v.toLowerCase();
      e = e.filter(
        (e) =>
          e.name.toLowerCase().includes(s) ||
          (e.description && e.description.toLowerCase().includes(s)) ||
          (e.address && e.address.toLowerCase().includes(s))
      );
    }
    g(e);
  }, [s, f, v, u]),
    o.useEffect(() => {
      if (c) {
        R(!0), F(null);
        const e = setTimeout(() => {
          const e = [
            {
              id: `${c.id}-1`,
              name: "Classic Lemonade",
              description:
                "Our signature lemonade made with fresh lemons and organic sugar.",
              price: 2.99,
              image_url:
                "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              is_available: !0,
            },
            {
              id: `${c.id}-2`,
              name: "Strawberry Lemonade",
              description: "Classic lemonade infused with fresh strawberries.",
              price: 3.49,
              image_url:
                "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              is_available: !0,
            },
            {
              id: `${c.id}-3`,
              name: "Blueberry Mint Lemonade",
              description:
                "A refreshing blend of lemonade with blueberries and fresh mint.",
              price: 3.99,
              image_url:
                "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              is_available: !1,
            },
          ];
          C(e), R(!1);
        }, 1e3);
        return () => clearTimeout(e);
      }
      C([]);
    }, [c]);
  const A = () => {
    y(null), w("");
  };
  return e.jsx("div", {
    className: `flex flex-col h-full ${x}`,
    ...h,
    children: c
      ? e.jsxs("div", {
          className: "flex flex-col h-full",
          children: [
            e.jsx(q, { stand: c, onClose: m, className: "mb-4" }),
            e.jsxs(a, {
              className: "flex-grow overflow-auto",
              children: [
                e.jsx(a.Header, {
                  children: e.jsx("h3", {
                    className: "text-xl font-display text-lemonade-blue-dark",
                    children: "Products",
                  }),
                }),
                e.jsx(a.Body, {
                  children: k
                    ? e.jsx("div", {
                        className: "flex justify-center py-8",
                        children: e.jsx(i, { variant: "yellow" }),
                      })
                    : z
                    ? e.jsx(n, { variant: "error", children: z })
                    : L.length > 0
                    ? e.jsx("div", {
                        className: "space-y-4",
                        children: L.map((s) => e.jsx(O, { product: s }, s.id)),
                      })
                    : e.jsx("p", {
                        className: "text-center py-4 text-gray-500",
                        children: "No products available for this stand.",
                      }),
                }),
              ],
            }),
          ],
        })
      : e.jsxs(a, {
          className: "h-full flex flex-col",
          children: [
            e.jsx(a.Header, {
              children: e.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-display text-lemonade-blue-dark",
                    children: "Lemonade Stands",
                  }),
                  e.jsx(t, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      S((e) => !e);
                    },
                    children: _ ? "Hide Filters" : "Show Filters",
                  }),
                ],
              }),
            }),
            _ &&
              e.jsxs("div", {
                className: "px-4 py-3 bg-gray-50 border-b border-gray-200",
                children: [
                  e.jsxs(r.Group, {
                    children: [
                      e.jsx(r.Label, { htmlFor: "search", children: "Search" }),
                      e.jsx(r.Input, {
                        id: "search",
                        placeholder: "Search by name or address",
                        value: v,
                        onChange: (e) => {
                          w(e.target.value);
                        },
                      }),
                    ],
                  }),
                  e.jsxs(r.Group, {
                    children: [
                      e.jsxs(r.Label, {
                        htmlFor: "distance",
                        children: [
                          "Maximum Distance (",
                          u ? "miles" : "unavailable",
                          ")",
                        ],
                      }),
                      e.jsx(r.Select, {
                        id: "distance",
                        value: f || "",
                        onChange: (e) => {
                          const s = e.target.value;
                          y("" === s ? null : parseFloat(s));
                        },
                        disabled: !u,
                        options: [
                          { value: "", label: "Any distance" },
                          { value: "1", label: "1 mile" },
                          { value: "5", label: "5 miles" },
                          { value: "10", label: "10 miles" },
                          { value: "25", label: "25 miles" },
                          { value: "50", label: "50 miles" },
                        ],
                      }),
                      !u &&
                        e.jsx("p", {
                          className: "text-xs text-gray-500 mt-1",
                          children:
                            "Enable location services to filter by distance",
                        }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex justify-end mt-2",
                    children: e.jsx(t, {
                      variant: "ghost",
                      size: "sm",
                      onClick: A,
                      children: "Reset Filters",
                    }),
                  }),
                ],
              }),
            e.jsx(a.Body, {
              className: "flex-grow overflow-auto",
              children: l
                ? e.jsx("div", {
                    className: "flex justify-center py-8",
                    children: e.jsx(i, { variant: "yellow" }),
                  })
                : p.length > 0
                ? e.jsx("div", {
                    className: "space-y-4",
                    children: p.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "p-3 bg-lemonade-yellow-light rounded-lg cursor-pointer hover:bg-lemonade-yellow-dark transition-colors",
                          onClick: () => d(s),
                          children: [
                            e.jsxs("div", {
                              className: "flex justify-between items-start",
                              children: [
                                e.jsx("h3", {
                                  className: "font-display text-lg",
                                  children: s.name,
                                }),
                                null !== s.distance &&
                                  void 0 !== s.distance &&
                                  e.jsx("span", {
                                    className:
                                      "text-xs bg-white px-2 py-1 rounded-full",
                                    children: b(s.distance, "miles"),
                                  }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-sm text-gray-700 line-clamp-2",
                              children: s.description,
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center mt-1",
                              children: [
                                e.jsx("p", {
                                  className: "text-xs text-gray-600",
                                  children: s.address,
                                }),
                                null !== s.distance &&
                                  void 0 !== s.distance &&
                                  e.jsx("span", {
                                    className:
                                      "text-xs font-medium text-lemonade-blue-dark",
                                    children: j(s.distance),
                                  }),
                              ],
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  })
                : e.jsxs("div", {
                    className: "text-center py-8",
                    children: [
                      e.jsx("p", {
                        className: "text-gray-500",
                        children: "No lemonade stands found.",
                      }),
                      (null !== f || v) &&
                        e.jsx(t, {
                          variant: "ghost",
                          size: "sm",
                          onClick: A,
                          className: "mt-2",
                          children: "Clear Filters",
                        }),
                    ],
                  }),
            }),
            e.jsx(a.Footer, {
              children: e.jsxs("p", {
                className: "text-sm text-gray-600",
                children: [
                  p.length,
                  " ",
                  1 === p.length ? "stand" : "stands",
                  " found",
                  null !== f && u && ` within ${f} miles`,
                ],
              }),
            }),
          ],
        }),
  });
};
U.propTypes = {
  stands: s.arrayOf(
    s.shape({
      id: s.string.isRequired,
      name: s.string.isRequired,
      description: s.string,
      address: s.string,
      location_lat: s.number,
      location_lng: s.number,
      image_url: s.string,
      distance: s.number,
    })
  ),
  loading: s.bool,
  selectedStand: s.object,
  onStandSelect: s.func.isRequired,
  onStandClose: s.func.isRequired,
  userLocation: s.shape({ lat: s.number.isRequired, lng: s.number.isRequired }),
  className: s.string,
};
const T = Object.freeze(
    Object.defineProperty({ __proto__: null, default: U }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  $ = () => {
    const { isAuthenticated: s } = _();
    return e.jsxs("div", {
      className: "container mx-auto px-4 py-8",
      children: [
        e.jsxs("div", {
          className:
            "mb-6 flex flex-col md:flex-row justify-between items-start md:items-center",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className:
                    "text-3xl font-display text-lemonade-blue-dark mb-2",
                  children: "Find Lemonade Stands Near You",
                }),
                e.jsx("p", {
                  className: "text-gray-600 mb-4",
                  children:
                    "Browse the map to discover refreshing lemonade stands in your area",
                }),
              ],
            }),
            !s &&
              e.jsxs("div", {
                className: "bg-white p-4 rounded-lg shadow-md",
                children: [
                  e.jsx("p", {
                    className: "text-gray-700 mb-3",
                    children: "Are you a lemonade stand owner?",
                  }),
                  e.jsxs("div", {
                    className: "flex space-x-3",
                    children: [
                      e.jsx(c, {
                        to: "/login",
                        className:
                          "px-4 py-2 bg-lemonade-blue text-white rounded-md hover:bg-lemonade-blue-dark transition",
                        children: "Log In",
                      }),
                      e.jsx(c, {
                        to: "/register",
                        className:
                          "px-4 py-2 border border-lemonade-yellow bg-white text-lemonade-blue-dark rounded-md hover:bg-lemonade-yellow-light transition",
                        children: "Register",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        e.jsx(A, {}),
      ],
    });
  };
export { $ as default };
//# sourceMappingURL=HomePage-CyJtFvRg.js.map
