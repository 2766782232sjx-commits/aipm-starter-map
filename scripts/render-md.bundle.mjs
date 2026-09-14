// src/pages/Index.jsx
import { Link as Link2 } from "react-router-dom";

// node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");

// node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef, createElement } from "react";

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    ({ className, ...props }, ref) => createElement2(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/arrow-right.js
var ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

// node_modules/lucide-react/dist/esm/icons/bell-ring.js
var BellRing = createLucideIcon("BellRing", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }]
]);

// node_modules/lucide-react/dist/esm/icons/book-open-text.js
var BookOpenText = createLucideIcon("BookOpenText", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
  ["path", { d: "M6 8h2", key: "30oboj" }],
  ["path", { d: "M6 12h2", key: "32wvfc" }],
  ["path", { d: "M16 8h2", key: "msurwy" }],
  ["path", { d: "M16 12h2", key: "7q9ll5" }]
]);

// node_modules/lucide-react/dist/esm/icons/boxes.js
var Boxes = createLucideIcon("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]);

// node_modules/lucide-react/dist/esm/icons/brain-circuit.js
var BrainCircuit = createLucideIcon("BrainCircuit", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
]);

// node_modules/lucide-react/dist/esm/icons/briefcase-business.js
var BriefcaseBusiness = createLucideIcon("BriefcaseBusiness", [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);

// node_modules/lucide-react/dist/esm/icons/building-2.js
var Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

// node_modules/lucide-react/dist/esm/icons/clipboard-check.js
var ClipboardCheck = createLucideIcon("ClipboardCheck", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);

// node_modules/lucide-react/dist/esm/icons/code-xml.js
var CodeXml = createLucideIcon("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);

// node_modules/lucide-react/dist/esm/icons/coins.js
var Coins = createLucideIcon("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);

// node_modules/lucide-react/dist/esm/icons/compass.js
var Compass = createLucideIcon("Compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// node_modules/lucide-react/dist/esm/icons/database.js
var Database = createLucideIcon("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);

// node_modules/lucide-react/dist/esm/icons/external-link.js
var ExternalLink = createLucideIcon("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-chart-column-increasing.js
var FileChartColumnIncreasing = createLucideIcon("FileChartColumnIncreasing", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M12 18v-4", key: "q1q25u" }],
  ["path", { d: "M16 18v-6", key: "15y0np" }]
]);

// node_modules/lucide-react/dist/esm/icons/flag.js
var Flag = createLucideIcon("Flag", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
]);

// node_modules/lucide-react/dist/esm/icons/flask-conical.js
var FlaskConical = createLucideIcon("FlaskConical", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw"
    }
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);

// node_modules/lucide-react/dist/esm/icons/git-branch.js
var GitBranch = createLucideIcon("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);

// node_modules/lucide-react/dist/esm/icons/github.js
var Github = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);

// node_modules/lucide-react/dist/esm/icons/layers.js
var Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);

// node_modules/lucide-react/dist/esm/icons/library-big.js
var LibraryBig = createLucideIcon("LibraryBig", [
  ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  [
    "path",
    {
      d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
      key: "1qboyk"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/map.js
var Map = createLucideIcon("Map", [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
]);

// node_modules/lucide-react/dist/esm/icons/pen-line.js
var PenLine = createLucideIcon("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/rocket.js
var Rocket = createLucideIcon("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);

// node_modules/lucide-react/dist/esm/icons/route.js
var Route = createLucideIcon("Route", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);

// node_modules/lucide-react/dist/esm/icons/scale.js
var Scale = createLucideIcon("Scale", [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
]);

// node_modules/lucide-react/dist/esm/icons/star.js
var Star = createLucideIcon("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/target.js
var Target = createLucideIcon("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);

// node_modules/lucide-react/dist/esm/icons/trending-up.js
var TrendingUp = createLucideIcon("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);

// node_modules/lucide-react/dist/esm/icons/user-round.js
var UserRound = createLucideIcon("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);

// node_modules/lucide-react/dist/esm/icons/wrench.js
var Wrench = createLucideIcon("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);

// src/components/site.jsx
import { Link, NavLink } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var NAV = [
  { to: "/", label: "\u9996\u9875", icon: Compass },
  { to: "/concepts", label: "\u6982\u5FF5\u7BC7", icon: BookOpenText },
  { to: "/methods", label: "\u65B9\u6CD5\u7BC7", icon: Wrench },
  { to: "/industry", label: "\u884C\u4E1A\u7BC7", icon: TrendingUp },
  { to: "/career", label: "\u6C42\u804C\u7BC7", icon: BriefcaseBusiness },
  { to: "/roadmap", label: "\u5B66\u4E60\u8DEF\u5F84", icon: Route },
  { to: "/resources", label: "\u8D44\u6E90\u5BFC\u822A", icon: LibraryBig },
  { to: "/practice", label: "\u5B9E\u64CD\u5BA4", icon: FlaskConical }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-zinc-50 text-zinc-900", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white", children: /* @__PURE__ */ jsx(Compass, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[15px] font-semibold tracking-tight", children: "AIPM \u5165\u95E8\u5730\u56FE" }),
          /* @__PURE__ */ jsx("span", { className: "hidden rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500 sm:inline", children: "\u96F6\u57FA\u7840\u8FDB\u9636 AI \u4EA7\u54C1\u7ECF\u7406" })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 md:flex", children: NAV.map(({ to, label }) => /* @__PURE__ */ jsx(
          NavLink,
          {
            to,
            end: to === "/",
            className: ({ isActive }) => `rounded-lg px-3 py-1.5 text-sm transition-colors ${isActive ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"}`,
            children: label
          },
          to
        )) })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "flex gap-1 overflow-x-auto pb-2 md:hidden", children: NAV.map(({ to, label }) => /* @__PURE__ */ jsx(
        NavLink,
        {
          to,
          end: to === "/",
          className: ({ isActive }) => `whitespace-nowrap rounded-lg px-2.5 py-1 text-[13px] transition-colors ${isActive ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600"}`,
          children: label
        },
        to
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-zinc-200 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-zinc-700", children: "AIPM \u5165\u95E8\u5730\u56FE" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 leading-relaxed", children: "\u4E3A\u96F6\u57FA\u7840\u8FDB\u9636 AI \u4EA7\u54C1\u7ECF\u7406\u7684\u540C\u5B66\u8BBE\u8BA1\u7684\u77E5\u8BC6\u7AD9\u3002\u5185\u5BB9\u6574\u7406\u81EA\u516C\u5F00\u7684\u62DB\u8058\u5E02\u573A\u4FE1\u53F7\u4E0E\u4E3B\u6D41\u6280\u672F\u8D44\u6599\uFF0C\u4F9B\u5B66\u4E60\u53C2\u8003\uFF0C\u4E0D\u6784\u6210\u4EFB\u4F55\u6C42\u804C\u6216\u6295\u8D44\u5EFA\u8BAE\u3002" })
    ] }) })
  ] });
}
function PageHeader({ eyebrow, title, desc }) {
  return /* @__PURE__ */ jsx("div", { className: "border-b border-zinc-200 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10 md:py-14", children: [
    eyebrow && /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600", children: eyebrow }),
    /* @__PURE__ */ jsx("h1", { className: "mt-2 text-3xl font-bold tracking-tight md:text-4xl", children: title }),
    desc && /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: desc })
  ] }) });
}
function Section({ kicker, title, children }) {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-6xl px-4 py-10", children: [
    kicker && /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600", children: kicker }),
    /* @__PURE__ */ jsx("h2", { className: "mt-1.5 text-2xl font-bold tracking-tight", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children })
  ] });
}
function Card({ title, icon: Icon2, children, className = "" }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `rounded-xl border border-zinc-200 bg-white p-5 shadow-sm ${className}`,
      children: [
        title && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          Icon2 && /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600", children: /* @__PURE__ */ jsx(Icon2, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold leading-snug", children: title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `text-[14px] leading-relaxed text-zinc-600 ${title ? "mt-3" : ""}`, children })
      ]
    }
  );
}
function TermCard({ term, en, tag, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: term }),
      en && /* @__PURE__ */ jsx("span", { className: "text-xs text-zinc-400", children: en }),
      tag && /* @__PURE__ */ jsx("span", { className: "ml-auto rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600", children: tag })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children })
  ] });
}
function Steps({ items }) {
  return /* @__PURE__ */ jsx("ol", { className: "space-y-0", children: items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "relative flex gap-4 pb-6 last:pb-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white", children: i + 1 }),
      i < items.length - 1 && /* @__PURE__ */ jsx("span", { className: "mt-1 w-px flex-1 bg-zinc-200" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-1", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold leading-snug", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-[14px] leading-relaxed text-zinc-600", children: item.desc })
    ] })
  ] }, i)) });
}
function Table({ head, rows }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[560px] text-left text-[14px]", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-zinc-200 bg-zinc-50", children: head.map((h, i) => /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold text-zinc-800", children: h }, i)) }) }),
    /* @__PURE__ */ jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsx("tr", { className: "border-b border-zinc-100 last:border-0", children: row.map((cell, j) => /* @__PURE__ */ jsx(
      "td",
      {
        className: `px-4 py-3 leading-relaxed ${j === 0 ? "font-medium text-zinc-800" : "text-zinc-600"}`,
        children: cell
      },
      j
    )) }, i)) })
  ] }) });
}
function Note({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[14px] leading-relaxed text-amber-900", children: [
    /* @__PURE__ */ jsx("span", { className: "mt-0.5 shrink-0 font-semibold", children: "\u8981\u70B9" }),
    /* @__PURE__ */ jsx("div", { children })
  ] });
}
function Grid({ cols = 2, children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `grid gap-4 ${cols === 2 ? "md:grid-cols-2" : cols === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`,
      children
    }
  );
}

// src/pages/Index.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var MODULES = [
  {
    to: "/concepts",
    icon: BookOpenText,
    title: "\u6982\u5FF5\u7BC7",
    desc: "Transformer\u3001RAG\u3001Agent\u3001Workflow\u3001Skill\u3001MCP\u3001Memory\u3001Benchmark\u3001\u5206\u5E03\u5F0F\u3001\u610F\u56FE\u8BC6\u522B\u2014\u2014\u628A\u9ED1\u8BDD\u4E00\u4E2A\u4E2A\u8BB2\u6210\u4EBA\u8BDD\u3002",
    tag: "10 \u4E2A\u6838\u5FC3\u6982\u5FF5"
  },
  {
    to: "/methods",
    icon: Wrench,
    title: "\u65B9\u6CD5\u7BC7",
    desc: "Prompt Engineering\u3001\u8BC4\u6D4B\u4F53\u7CFB\u3001\u77E5\u8BC6\u5E93\u642D\u5EFA\u3001RAG \u5230\u77E5\u8BC6\u5E93\u7684\u6F14\u8FDB\u3001AI \u7684\u80FD\u529B\u8FB9\u754C\u4E0E\u95EE\u9898\u5B9A\u4E49\u3002",
    tag: "\u52A8\u624B\u65B9\u6CD5\u8BBA"
  },
  {
    to: "/industry",
    icon: TrendingUp,
    title: "\u884C\u4E1A\u7BC7",
    desc: "\u4E3B\u6D41\u6A21\u578B\u516C\u53F8\u683C\u5C40\u3001AI \u4EA7\u54C1\u4E09\u6CE2\u6D6A\u6F6E\u3001\u5DE5\u5177\u751F\u6001\u5168\u666F\u3001AI Coding \u7684\u771F\u5B9E\u6210\u672C\u8D26\u3002",
    tag: "\u4EA7\u4E1A\u5750\u6807\u7CFB"
  },
  {
    to: "/career",
    icon: BriefcaseBusiness,
    title: "\u6C42\u804C\u7BC7",
    desc: "\u4E24\u7C7B AIPM \u5C97\u4F4D\u753B\u50CF\u3001JD \u9AD8\u9891\u8981\u6C42\u62C6\u89E3\u3001\u61C2\u7814\u53D1\u7684\u4EA7\u54C1\u4E0E\u61C2\u4EA7\u54C1\u7684\u7814\u53D1\u3001\u79CB\u62DB\u4F5C\u54C1\u96C6\u6253\u6CD5\u3002",
    tag: "\u9762\u5411\u79CB\u62DB"
  },
  {
    to: "/roadmap",
    icon: Route,
    title: "\u5B66\u4E60\u8DEF\u5F84",
    desc: "\u4E3A\u96F6\u57FA\u7840\u5B9A\u5236\u7684 12 \u5468\u5B66\u4E60\u8BA1\u5212\uFF0C\u6BCF\u5468\u4E00\u4E2A\u4E3B\u9898\u548C\u53EF\u4EA4\u4ED8\u4EA7\u51FA\uFF0C\u5B66\u5B8C\u76F4\u63A5\u53D8\u6210\u4F5C\u54C1\u96C6\u7D20\u6750\u3002",
    tag: "12 \u5468\u8BA1\u5212"
  }
];
function Index() {
  return /* @__PURE__ */ jsxs2(Layout, { children: [
    /* @__PURE__ */ jsx2("div", { className: "border-b border-zinc-200 bg-zinc-950 text-white", children: /* @__PURE__ */ jsxs2("div", { className: "mx-auto max-w-6xl px-4 py-16 md:py-24", children: [
      /* @__PURE__ */ jsx2("p", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500", children: "\u96F6\u57FA\u7840\u8FDB\u9636 AI \u4EA7\u54C1\u7ECF\u7406\u7684\u7B2C\u4E00\u7AD9" }),
      /* @__PURE__ */ jsxs2("h1", { className: "mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl", children: [
        "\u6210\u4E3A AI \u4EA7\u54C1\u7ECF\u7406\uFF0C",
        /* @__PURE__ */ jsx2("br", {}),
        '\u4ECE\u542C\u61C2\u6BCF\u4E00\u53E5"\u9ED1\u8BDD"\u5F00\u59CB\u3002'
      ] }),
      /* @__PURE__ */ jsx2("p", { className: "mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400", children: "\u4F60\u4E0D\u9700\u8981\u5148\u5B66\u4F1A\u8BAD\u7EC3\u6A21\u578B\u3002\u4F60\u9700\u8981\u7684\u662F\u4E00\u5957\u5B8C\u6574\u7684\u8BA4\u77E5\u5730\u56FE\uFF1AAI \u5230\u5E95\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u3001\u8FB9\u754C\u5728\u54EA\u91CC\u3001\u600E\u4E48\u5B9A\u4E49\u3001\u600E\u4E48\u8BC4\u6D4B\u3001\u600E\u4E48\u843D\u5730\u6210\u4EA7\u54C1\u2014\u2014\u4EE5\u53CA\u5E02\u573A\u4E0A\u771F\u6B63\u5728\u62DB\u7684 AI \u4EA7\u54C1\u7ECF\u7406\u957F\u4EC0\u4E48\u6837\u3002\u8FD9\u5EA7\u77E5\u8BC6\u7AD9\u628A\u8FD9\u4E9B\u9010\u4E00\u62C6\u5F00\u3002" }),
      /* @__PURE__ */ jsxs2("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs2(
          Link2,
          {
            to: "/concepts",
            className: "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200",
            children: [
              "\u4ECE\u6982\u5FF5\u7BC7\u5F00\u59CB ",
              /* @__PURE__ */ jsx2(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx2(
          Link2,
          {
            to: "/roadmap",
            className: "inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900",
            children: "\u76F4\u63A5\u770B 12 \u5468\u5B66\u4E60\u8DEF\u5F84"
          }
        )
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "mt-10 grid max-w-3xl gap-3 sm:grid-cols-3", children: [
        { icon: BrainCircuit, label: "\u61C2\u6A21\u578B", desc: "\u77E5\u9053\u80FD\u529B\u4E0E\u8FB9\u754C" },
        { icon: Target, label: "\u61C2\u573A\u666F", desc: "\u628A\u6280\u672F\u7FFB\u8BD1\u6210\u4EF7\u503C" },
        { icon: Scale, label: "\u61C2\u8BC4\u6D4B", desc: "\u7528\u6570\u636E\u5B9A\u4E49\u597D\u574F" }
      ].map(({ icon: Icon2, label, desc }) => /* @__PURE__ */ jsxs2(
        "div",
        {
          className: "flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3",
          children: [
            /* @__PURE__ */ jsx2(Icon2, { className: "h-5 w-5 shrink-0 text-indigo-400" }),
            /* @__PURE__ */ jsxs2("div", { children: [
              /* @__PURE__ */ jsx2("p", { className: "text-sm font-semibold", children: label }),
              /* @__PURE__ */ jsx2("p", { className: "text-xs text-zinc-500", children: desc })
            ] })
          ]
        },
        label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs2("section", { className: "mx-auto max-w-6xl px-4 py-12", children: [
      /* @__PURE__ */ jsx2("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600", children: "\u5E02\u573A\u4FE1\u53F7" }),
      /* @__PURE__ */ jsx2("h2", { className: "mt-1.5 text-2xl font-bold tracking-tight", children: "\u4E3A\u4EC0\u4E48\u73B0\u5728\u662F\u5165\u573A\u7684\u7A97\u53E3\u671F" }),
      /* @__PURE__ */ jsxs2("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx2(Card, { title: "\u62DB\u8058\u5E02\u573A\u5728\u4E3A\u7A00\u7F3A\u6027\u5B9A\u4EF7", icon: Layers, children: /* @__PURE__ */ jsxs2("p", { children: [
          "\u4ECE\u8FD1\u671F\u7684\u62DB\u8058\u4FE1\u606F\u770B\uFF0CAI \u4EA7\u54C1\u7ECF\u7406\u7684\u85AA\u8D44\u5E26\u5BBD\u660E\u663E\u5BBD\u4E8E\u4F20\u7EDF\u4EA7\u54C1\u5C97\uFF0C\u5934\u90E8\u56E2\u961F\u7684\u8D44\u6DF1\u5C97\u751A\u81F3\u5BF9\u6807\u8D44\u6DF1\u4E13\u5BB6\u804C\u7EA7\u3002\u80CC\u540E\u7684\u903B\u8F91\u5F88\u76F4\u63A5\uFF1A\u5927\u591A\u6570\u4F20\u7EDF\u4EA7\u54C1\u7ECF\u7406\u4E0D\u61C2\u6A21\u578B\u539F\u7406\uFF0C\u5927\u591A\u6570\u7B97\u6CD5\u5DE5\u7A0B\u5E08\u4E0D\u61C2\u7528\u6237\u573A\u666F\u548C\u5546\u4E1A\u5316\uFF0C",
          /* @__PURE__ */ jsx2("span", { className: "font-semibold text-zinc-800", children: "\u80FD\u628A\u4E24\u7AEF\u63A5\u8D77\u6765\u7684\u4EBA\u672C\u6765\u5C31\u662F\u7A00\u6709\u7269\u79CD" }),
          '\u3002\u4F01\u4E1A\u4E0D\u662F\u5728\u4E3A"\u4F1A\u7528 ChatGPT"\u4ED8\u94B1\uFF0C\u800C\u662F\u5728\u4E3A"\u6280\u672F\u8FB9\u754C \xD7 \u573A\u666F\u6D1E\u5BDF \xD7 \u5546\u4E1A\u5224\u65AD"\u7684\u590D\u5408\u80FD\u529B\u4ED8\u94B1\u3002'
        ] }) }),
        /* @__PURE__ */ jsx2(Card, { title: "\u975E\u6280\u672F\u80CC\u666F\u4E0D\u662F\u52A3\u52BF\uFF0C\u662F\u5DEE\u5F02\u5316", icon: BrainCircuit, children: /* @__PURE__ */ jsx2("p", { children: "\u96F6\u57FA\u7840\u8D77\u6B65\u7684\u4EBA\u5F80\u5F80\u5E26\u7740\u4E24\u6837 AI \u4EA7\u54C1\u6700\u7F3A\u7684\u4E1C\u897F\uFF1A\u5BF9\u7528\u6237\u771F\u5B9E\u5904\u5883\u7684\u654F\u611F\u3001\u628A\u6A21\u7CCA\u9700\u6C42\u8BB2\u6E05\u695A\u7684\u8868\u8FBE\u80FD\u529B\uFF0C\u4EE5\u53CA\u5BF9\u5185\u5BB9\u8D28\u91CF\u4E0E\u98CE\u9669\u7684\u76F4\u89C9\u3002\u6280\u672F\u6982\u5FF5\u662F\u53EF\u4EE5\u8865\u8BFE\u7684\uFF08\u8FD9\u5EA7\u7AD9\u5C31\u662F\u5E72\u8FD9\u4E2A\u7684\uFF09\uFF0C\u800C\u8FD9\u4E9B\u5BF9\u4E1A\u52A1\u548C\u4EBA\u7684\u7406\u89E3\u5F88\u96BE\u901F\u6210\u3002" }) })
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "mt-6", children: /* @__PURE__ */ jsx2(
        Table,
        {
          head: ["\u5E02\u573A\u4FE1\u53F7", "\u5BF9\u4F60\u7684\u542B\u4E49"],
          rows: [
            [
              "JD \u9AD8\u9891\u8BCD\uFF1ARAG / Agent / Prompt / \u8BC4\u6D4B / \u77E5\u8BC6\u5E93",
              "\u8FD9\u4E9B\u5C31\u662F\u5B66\u4E60\u6E05\u5355\uFF0C\u672C\u7AD9\u6982\u5FF5\u7BC7\u9010\u4E00\u8986\u76D6"
            ],
            [
              "\u85AA\u8D44\u5E26\u5BBD\u6781\u5BBD\uFF08\u521D\u7EA7\u5230\u8D44\u6DF1\u4E13\u5BB6\uFF09",
              "\u80FD\u529B\u5206\u5C42\u660E\u663E\uFF0C\u5165\u884C\u540E\u6210\u957F\u66F2\u7EBF\u9661\u5CED"
            ],
            [
              "\u5C97\u4F4D\u6302\u5728\u4EE5 AI \u4E3A\u6838\u5FC3\u7ADE\u4E89\u529B\u7684\u539F\u751F\u56E2\u961F",
              "\u4E0D\u662F\u4F20\u7EDF\u4E1A\u52A1\u7684\u300E\u4FE1\u606F\u5316\u6539\u9020\u300F\uFF0C\u800C\u662F\u65B0\u5DE5\u79CD"
            ],
            [
              "\u5927\u591A\u901A\u8FC7\u730E\u5934\u3001\u5185\u63A8\u3001\u793E\u7FA4\u5B9A\u5411\u6316\u4EBA",
              "\u4F5C\u54C1\u96C6\u4E0E\u4EBA\u8109\u7684\u6743\u91CD\u9AD8\u4E8E\u6D77\u6295"
            ]
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx2("section", { className: "border-y border-zinc-200 bg-white", children: /* @__PURE__ */ jsxs2("div", { className: "mx-auto max-w-6xl px-4 py-12", children: [
      /* @__PURE__ */ jsx2("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600", children: "\u5148\u60F3\u6E05\u695A" }),
      /* @__PURE__ */ jsx2("h2", { className: "mt-1.5 text-2xl font-bold tracking-tight", children: "AI \u4EA7\u54C1\u7ECF\u7406\u7684\u4E24\u79CD\u6253\u5F00\u65B9\u5F0F" }),
      /* @__PURE__ */ jsx2("p", { className: "mt-3 max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: "\u5E02\u573A\u4E0A\u7684 AIPM \u5C97\u4F4D\u5927\u4F53\u5206\u4E24\u7C7B\uFF0C\u5DE5\u4F5C\u5185\u5BB9\u3001\u80FD\u529B\u8981\u6C42\u548C\u53D1\u5C55\u8DEF\u5F84\u5DEE\u522B\u5F88\u5927\u3002\u9009\u54EA\u6761\u8DEF\uFF0C\u51B3\u5B9A\u4E86\u4F60\u63A5\u4E0B\u6765\u4E09\u4E2A\u6708\u8BE5\u628A\u529B\u6C14\u82B1\u5728\u54EA\u91CC\u3002" }),
      /* @__PURE__ */ jsx2("div", { className: "mt-6", children: /* @__PURE__ */ jsx2(
        Table,
        {
          head: ["\u7EF4\u5EA6", "\u57FA\u7840\u6A21\u578B PM", "\u573A\u666F\u843D\u5730 Agent PM"],
          rows: [
            [
              "\u6838\u5FC3\u5DE5\u4F5C",
              "\u5B9A\u4E49\u6A21\u578B\u80FD\u529B\u4E0E\u4EA7\u54C1\u5F62\u6001\uFF1A\u8BAD\u7EC3\u76EE\u6807\u3001benchmark\u3001\u6A21\u578B\u884C\u4E3A\u4E0E\u5B89\u5168\u3001API \u4E0E\u5F00\u53D1\u8005\u751F\u6001",
              "\u5728\u5177\u4F53\u4E1A\u52A1\u91CC\u843D\u5730 AI\uFF1ARAG \u77E5\u8BC6\u5E93\u3001Agent \u5DE5\u4F5C\u6D41\u3001\u573A\u666F\u9009\u578B\u3001\u6548\u679C\u4E0E\u6210\u672C\u5E73\u8861"
            ],
            [
              "\u65E5\u5E38\u6253\u4EA4\u9053\u6700\u591A",
              "\u7814\u7A76\u5458\u3001\u5BF9\u9F50\u56E2\u961F\u3001\u5F00\u53D1\u8005\u751F\u6001",
              "\u4E1A\u52A1\u65B9\u3001\u7814\u53D1\u3001\u6570\u636E\u56E2\u961F"
            ],
            [
              "\u5173\u952E\u80FD\u529B",
              "\u6280\u672F\u6DF1\u5EA6\u4E0A\u9650\u9AD8\uFF0C\u9700\u8981\u7406\u89E3 scaling\u3001\u6570\u636E\u3001\u8BC4\u6D4B\u7684\u5E95\u5C42\u903B\u8F91",
              "\u5DE5\u7A0B\u4E0E\u4E1A\u52A1\u7FFB\u8BD1\u80FD\u529B\uFF0C\u61C2 RAG / Agent \u5168\u94FE\u8DEF\u4E0E\u8BC4\u6D4B"
            ],
            [
              "\u5178\u578B\u4EA7\u54C1",
              "GPT / Claude / \u901A\u4E49\u5343\u95EE / \u8C46\u5305 / Kimi \u7684\u6A21\u578B\u4EA7\u54C1\u4E0E API",
              "\u4F01\u4E1A\u77E5\u8BC6\u52A9\u624B\u3001\u667A\u80FD\u5BA2\u670D\u3001AI \u7F16\u7801\u5DE5\u5177\u3001\u884C\u4E1A Agent"
            ],
            [
              "\u9002\u5408\u4F60\u5417",
              "\u95E8\u69DB\u9AD8\u3001\u901A\u5E38\u504F\u597D\u6280\u672F\u80CC\u666F\u6216\u6781\u5F3A\u5B66\u4E60\u80FD\u529B\uFF0C\u957F\u671F\u5929\u82B1\u677F\u6781\u9AD8",
              "\u589E\u91CF\u5C97\u4F4D\u6700\u591A\u3001\u6700\u6B22\u8FCE\u8DE8\u4E13\u4E1A\u80CC\u666F\uFF0C\u662F\u5927\u591A\u6570\u4EBA\u5165\u884C\u7684\u73B0\u5B9E\u8DEF\u5F84"
            ]
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs2("p", { className: "mt-5 text-[14px] leading-relaxed text-zinc-600", children: [
        "\u8FD9\u5EA7\u7AD9\u7684\u5185\u5BB9\u4E3B\u7EBF\u6309",
        /* @__PURE__ */ jsx2("span", { className: "font-semibold text-zinc-800", children: '"\u573A\u666F\u843D\u5730 Agent PM + \u57FA\u7840\u6A21\u578B\u5E38\u8BC6"' }),
        "\u8BBE\u8BA1\uFF1A\u65E2\u8BA9\u4F60\u80FD\u63A5\u4F4F\u843D\u5730\u5C97\u7684\u5168\u90E8 JD \u8981\u6C42\uFF0C\u4E5F\u8BA9\u4F60\u5728\u9762\u8BD5\u91CC\u804A\u6A21\u578B\u8D8B\u52BF\u65F6\u4E0D\u8BF4\u5916\u884C\u8BDD\u3002"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs2("section", { className: "mx-auto max-w-6xl px-4 py-12", children: [
      /* @__PURE__ */ jsx2("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600", children: "\u7AD9\u70B9\u5730\u56FE" }),
      /* @__PURE__ */ jsx2("h2", { className: "mt-1.5 text-2xl font-bold tracking-tight", children: "\u4E94\u4E2A\u677F\u5757" }),
      /* @__PURE__ */ jsx2("div", { className: "mt-6", children: /* @__PURE__ */ jsxs2(Grid, { cols: 3, children: [
        MODULES.map(({ to, icon: Icon2, title, desc, tag }) => /* @__PURE__ */ jsxs2(
          Link2,
          {
            to,
            className: "group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md",
            children: [
              /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx2("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600", children: /* @__PURE__ */ jsx2(Icon2, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsx2("span", { className: "rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600", children: tag })
              ] }),
              /* @__PURE__ */ jsxs2("h3", { className: "mt-4 flex items-center gap-1.5 font-semibold", children: [
                title,
                /* @__PURE__ */ jsx2(ArrowRight, { className: "h-4 w-4 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500" })
              ] }),
              /* @__PURE__ */ jsx2("p", { className: "mt-2 text-[13.5px] leading-relaxed text-zinc-600", children: desc })
            ]
          },
          to
        )),
        /* @__PURE__ */ jsxs2("div", { className: "flex flex-col justify-between rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5", children: [
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsx2("h3", { className: "font-semibold", children: "\u600E\u4E48\u7528\u8FD9\u5EA7\u7AD9" }),
            /* @__PURE__ */ jsx2("p", { className: "mt-2 text-[13.5px] leading-relaxed text-zinc-600", children: "\u6309\u987A\u5E8F\u8BFB\u4E00\u904D\u5EFA\u7ACB\u6846\u67B6\uFF0C\u518D\u8DDF\u7740\u5B66\u4E60\u8DEF\u5F84\u52A8\u624B\u505A\u9879\u76EE\u3002\u6982\u5FF5\u4E0D\u6C42\u4E00\u6B21\u8BB0\u4F4F\uFF0C\u4F46\u6C42\u518D\u542C\u5230\u65F6\u80FD\u7ACB\u523B\u5B9A\u4F4D\u5B83\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u3002" })
          ] }),
          /* @__PURE__ */ jsxs2(
            Link2,
            {
              to: "/roadmap",
              className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700",
              children: [
                "\u67E5\u770B\u5B66\u4E60\u8DEF\u5F84 ",
                /* @__PURE__ */ jsx2(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}

// src/pages/Concepts.jsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Concepts() {
  return /* @__PURE__ */ jsxs3(Layout, { children: [
    /* @__PURE__ */ jsx3(
      PageHeader,
      {
        eyebrow: "\u6982\u5FF5\u7BC7",
        title: "\u628A AI \u9ED1\u8BDD\u8BB2\u6210\u4EBA\u8BDD",
        desc: "\u4E00\u4E2A\u6982\u5FF5\u80FD\u4E0D\u80FD\u7B97\u300C\u542C\u61C2\u4E86\u300D\u6807\u51C6\u53EA\u6709\u4E00\u4E2A\uFF1A\u4F60\u80FD\u8BF4\u6E05\u695A\u5B83\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\u3001\u8FB9\u754C\u5728\u54EA\u3002\u4E0B\u9762 10 \u4E2A\u6982\u5FF5\u6309\u300C\u4ECE\u6A21\u578B\u5230\u5E94\u7528\u5230\u7CFB\u7EDF\u300D\u987A\u5E8F\u6392\u5217\uFF0C\u6BCF\u4E2A\u90FD\u914D\u4E0A\u4E00\u4E2A\u4F60\u53EF\u4EE5\u590D\u8FF0\u7ED9\u522B\u4EBA\u542C\u7684\u6BD4\u55BB\u3002"
      }
    ),
    /* @__PURE__ */ jsxs3(Section, { kicker: "01 \xB7 \u5E95\u5C42", title: "Transformer\uFF1A\u4E00\u5207\u5927\u6A21\u578B\u7684\u53D1\u52A8\u673A", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "Transformer", en: "\u53D8\u6362\u5668", tag: "\u5E95\u5C42\u67B6\u6784", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u4E00\u79CD\u795E\u7ECF\u7F51\u7EDC\u67B6\u6784\uFF0C\u662F GPT\u3001Claude\u3001\u901A\u4E49\u5343\u95EE\u3001\u8C46\u5305\u7B49\u6240\u6709\u5927\u8BED\u8A00\u6A21\u578B\u7684\u5171\u540C\u5E95\u5EA7\u3002\u5B83\u7684\u6838\u5FC3\u521B\u65B0\u53EB",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u6CE8\u610F\u529B\u673A\u5236\uFF08Attention\uFF09" }),
            "\uFF1A\u5904\u7406\u4E00\u53E5\u8BDD\u65F6\uFF0C\u6A21\u578B\u4F1A\u540C\u65F6\u300C\u73AF\u987E\u300D\u6574\u53E5\u5B50\u91CC\u6240\u6709\u8BCD\uFF0C\u5224\u65AD\u54EA\u4E9B\u8BCD\u548C\u5F53\u524D\u8FD9\u4E2A\u8BCD\u5173\u7CFB\u6700\u5927\uFF0C\u518D\u7EFC\u5408\u8FD9\u4E9B\u4FE1\u606F\u6765\u7406\u89E3\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u6BD4\u55BB\uFF1A\u8BFB\u300C\u82F9\u679C\u53D1\u5E03\u4E86\u65B0\u624B\u673A\uFF0C\u5B83\u5F88\u8D35\u300D\uFF0C\u4F60\u81EA\u52A8\u77E5\u9053\u300C\u5B83\u300D\u624B\u673A\u4E0D\u662F\u6C34\u679C\u2014\u2014\u6CE8\u610F\u529B\u673A\u5236\u5C31\u662F\u8BA9\u673A\u5668\u5B66\u4F1A\u8FD9\u79CD\u300C\u6307\u54EA\u770B\u54EA\u300D\u80FD\u529B\u3002" })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "LLM", en: "Large Language Model / \u5927\u8BED\u8A00\u6A21\u578B", tag: "Transformer \u8BAD\u51FA\u6765\u7684\u6210\u54C1", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u7528\u6D77\u91CF\u6587\u672C\u8BAD\u7EC3\u51FA\u6765\u7684\u8D85\u5927 Transformer\u3002\u8BAD\u7EC3\u8FC7\u7A0B\u672C\u8D28\u4E0A\u662F\u5728\u505A\u4E00\u9053\u8D85\u5927\u89C4\u6A21\u7684\u300C\u586B\u7A7A\u9898\u300D\uFF1A\u7ED9\u524D\u6587\uFF0C\u9884\u6D4B\u4E0B\u4E00\u4E2A\u8BCD\u3002\u89C4\u6A21\u5316\uFF08\u66F4\u591A\u6570\u636E\u3001\u66F4\u5927\u6A21\u578B\u3001\u66F4\u591A\u7B97\u529B\uFF09\u5E26\u6765\u7684\u80FD\u529B\u8DC3\u8FC1\uFF0C\u5C31\u662F\u8FD1\u5E74\u5E38\u8BF4\u7684",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: " Scaling Law" }),
            "\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u5BF9 PM \u7684\u610F\u4E49\uFF1A\u7406\u89E3\u4E86\u300C\u9884\u6D4B\u4E0B\u4E00\u4E2A\u8BCD\u300D\u4F60\u5C31\u7406\u89E3\u4E86\u4E3A\u4EC0\u4E48\u6A21\u578B\u4F1A\u4E00\u672C\u6B63\u7ECF\u5730\u80E1\u8BF4\u516B\u9053\uFF08\u5B83\u53EA\u662F\u5728\u7EED\u5199\u6700\u50CF\u7684\u7B54\u6848\uFF09\uFF0C\u4E5F\u5C31\u7406\u89E3\u4E86\u4E3A\u4EC0\u4E48\u9700\u8981 RAG \u548C\u8BC4\u6D4B\u6765\u515C\u5E95\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm", children: [
        /* @__PURE__ */ jsx3("p", { className: "text-sm font-semibold text-zinc-800", children: "\u56FE\u89E3\uFF1A\u4E00\u53E5\u8BDD\u662F\u600E\u4E48\u88AB\u5904\u7406\u7684\uFF0C\u4E0B\u4E00\u4E2A\u8BCD\u662F\u600E\u4E48\u300C\u9009\u300D\u51FA\u6765\u7684" }),
        /* @__PURE__ */ jsx3("p", { className: "mt-1 text-[13px] text-zinc-500", children: "\u4EE5\u8865\u5168\u300C\u4ECA\u5929\u5929\u6C14\u771F __\u300D\u4E3A\u4F8B" }),
        /* @__PURE__ */ jsxs3("div", { className: "mt-4 flex flex-wrap items-center gap-2 text-[13px] leading-relaxed", children: [
          /* @__PURE__ */ jsx3("span", { className: "shrink-0 text-zinc-500", children: "\u8F93\u5165\uFF1A" }),
          ["\u4ECA\u5929", "\u5929\u6C14", "\u771F"].map((t) => /* @__PURE__ */ jsx3(
            "span",
            {
              className: "rounded-md border border-zinc-200 bg-zinc-100 px-2 py-0.5 font-mono text-[12px] text-zinc-700",
              children: t
            },
            t
          )),
          /* @__PURE__ */ jsx3(ArrowRight, { className: "h-3.5 w-3.5 shrink-0 text-zinc-400" }),
          /* @__PURE__ */ jsx3("span", { className: "text-zinc-600", children: "\u9010\u8BCD\u8F6C\u6210\u5411\u91CF \u2192 \u6CE8\u610F\u529B\u5C42\u91CC\u8BCD\u4E0E\u8BCD\u4E92\u76F8\u300C\u770B\u300D\uFF08\u91CD\u590D\u51E0\u5341\u5C42\uFF09\u2192 \u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E\u8F93\u51FA" }),
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-indigo-600", children: "\u5168\u8BCD\u8868\u7684\u6982\u7387\u5206\u5E03" })
        ] }),
        /* @__PURE__ */ jsx3("div", { className: "mt-4 space-y-1.5", children: [
          ["\u597D", 62, true],
          ["\u4E0D\u9519", 14, false],
          ["\u51B7", 9, false],
          ["\u5DEE", 7, false],
          ["\u70ED", 5, false],
          ["\u84DD", 3, false]
        ].map(([w, p, top]) => /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx3("span", { className: "w-10 text-right font-mono text-[12px] text-zinc-600", children: w }),
          /* @__PURE__ */ jsx3("div", { className: "h-4 flex-1 overflow-hidden rounded bg-zinc-100", children: /* @__PURE__ */ jsx3(
            "div",
            {
              className: top ? "h-full rounded bg-indigo-500" : "h-full rounded bg-indigo-200",
              style: { width: `${p}%` }
            }
          ) }),
          /* @__PURE__ */ jsxs3("span", { className: "w-10 font-mono text-[12px] text-zinc-500", children: [
            p,
            "%"
          ] })
        ] }, w)) }),
        /* @__PURE__ */ jsxs3("p", { className: "mt-4 text-[13px] leading-relaxed text-zinc-600", children: [
          "\u300C\u9009\u300D\u6709\u4E24\u79CD\u89C4\u5219\uFF1A",
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u8D2A\u5FC3" }),
          "\uFF08\u6C38\u8FDC\u62FF\u6982\u7387\u6700\u9AD8\u7684\uFF0C\u7A33\u5B9A\u4F46\u5446\u677F\uFF09\u4E0E",
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u91C7\u6837" }),
          "\uFF08\u6309\u6982\u7387\u62BD\u7B7E\u2014\u201462% \u7684\u53EF\u80FD\u9009\u300C\u597D\u300D\uFF0C\u4E5F\u53EF\u80FD\u9009\u5230\u300C\u51B7\u300D\uFF09\u3002\u91C7\u6837\u65F6\u7684\u300C\u6E29\u5EA6\u53C2\u6570\u300D\u63A7\u5236\u968F\u673A\u5EA6\uFF1A\u6E29\u5EA6\u8D8A\u9AD8\u8D8A\u6562\u9009\u51B7\u95E8\u8BCD\uFF0C\u56DE\u7B54\u8D8A\u6709\u521B\u9020\u529B\u4E5F\u8D8A\u5BB9\u6613\u8DD1\u504F\uFF1B\u6E29\u5EA6\u8C03\u5230\u6700\u4F4E\u5C31\u9000\u5316\u6210\u8D2A\u5FC3\u3002\u9009\u4E2D\u4E00\u4E2A\u8BCD\u62FC\u56DE\u53E5\u5C3E\uFF0C\u518D\u91CD\u590D\u6574\u4E2A\u8FC7\u7A0B\u9884\u6D4B\u4E0B\u4E00\u4E2A\uFF0C\u76F4\u5230\u6A21\u578B\u5410\u51FA\u300C\u7ED3\u675F\u7B26\u300D\u2014\u2014\u4F60\u770B\u5230\u7684\u6BCF\u4E00\u6BB5\u56DE\u7B54\uFF0C\u90FD\u662F\u4E00\u4E2A\u8BCD\u4E00\u4E2A\u8BCD\u63A5\u529B\u751F\u6210\u7684\u3002"
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsx3(Note, { children: /* @__PURE__ */ jsx3("p", { children: "\u4E0D\u9700\u8981\u4F1A\u63A8\u5BFC\u6570\u5B66\u516C\u5F0F\u3002\u4F60\u9700\u8981\u7684\u662F\uFF1A\u5F53\u5DE5\u7A0B\u5E08\u8BF4\u300C\u8FD9\u4E2A\u5E7B\u89C9\u662F\u6A21\u578B\u56FA\u6709\u884C\u4E3A\uFF0C\u4E0D\u4E0A RAG \u538B\u4E0D\u4F4F\u300D\uFF0C\u4F60\u80FD\u542C\u61C2\u5E76\u63A5\u4E0A\u8BDD\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "02 \xB7 \u77E5\u8BC6", title: "RAG\uFF1A\u7ED9 AI \u914D\u4E00\u4E2A\u8D44\u6599\u67DC", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "RAG", en: "Retrieval-Augmented Generation / \u68C0\u7D22\u589E\u5F3A\u751F\u6210", tag: "\u4F01\u4E1A\u843D\u5730\u6700\u4E3B\u6D41", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u8BA9\u6A21\u578B\u56DE\u7B54\u4E4B\u524D\uFF0C\u5148\u53BB\u4F60\u7684\u8D44\u6599\u5E93\u91CC\u68C0\u7D22\u76F8\u5173\u5185\u5BB9\uFF0C\u518D\u57FA\u4E8E\u68C0\u7D22\u7ED3\u679C\u4F5C\u7B54\u2014\u2014\u800C\u4E0D\u662F\u51ED\u8BAD\u7EC3\u8BB0\u5FC6\u778E\u731C\u3002\u89E3\u51B3\u7684\u6838\u5FC3\u95EE\u9898\u662F",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u5E7B\u89C9\uFF08Hallucination\uFF09" }),
            "\u548C\u300C\u4E0D\u77E5\u9053\u4F60\u516C\u53F8\u7684\u4E8B\u300D"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u6BD4\u55BB\uFF1A\u65B0\u6765\u7684\u5BA2\u670D\u4E3B\u7BA1\u8111\u5B50\u597D\u4F7F\u4F46\u4E0D\u4E86\u89E3\u516C\u53F8\u5236\u5EA6\uFF1B\u7ED9\u4ED6\u4E00\u95F4\u968F\u67E5\u968F\u53D6\u7684\u6863\u6848\u5BA4\uFF0C\u56DE\u7B54\u524D\u5148\u7FFB\u6587\u4EF6\u6838\u5BF9\u2014\u2014\u8FD9\u5C31\u662F RAG\u3002" })
        ] }),
        /* @__PURE__ */ jsx3(TermCard, { term: "Embedding \u4E0E\u5411\u91CF\u68C0\u7D22", en: "\u5411\u91CF\u5316", tag: "RAG \u7684\u5E95\u5C42\u96F6\u4EF6", children: /* @__PURE__ */ jsx3("p", { children: "\u628A\u6587\u5B57\u53D8\u6210\u4E00\u4E32\u6570\u5B57\uFF08\u5411\u91CF\uFF09\uFF0C\u8BED\u4E49\u76F8\u8FD1\u7684\u5185\u5BB9\u5728\u300C\u6570\u5B57\u7A7A\u95F4\u300D\u8DDD\u79BB\u4E5F\u8FD1\u3002\u7528\u6237\u63D0\u95EE\u65F6\uFF0C\u7CFB\u7EDF\u628A\u95EE\u9898\u4E5F\u53D8\u6210\u5411\u91CF\uFF0C\u53BB\u77E5\u8BC6\u5E93\u91CC\u627E\u300C\u8DDD\u79BB\u6700\u8FD1\u300D\u6BB5\u843D\u3002\u5411\u91CF\u6570\u636E\u5E93\uFF08Milvus\u3001Pinecone\u3001Qdrant \u7B49\uFF09\u5C31\u662F\u4E13\u95E8\u5B58\u548C\u67E5\u8FD9\u4E9B\u5411\u91CF\u7684\u4ED3\u5E93\u3002" }) })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx3("p", { className: "mb-3 text-sm font-semibold text-zinc-800", children: "RAG \u7684\u5B8C\u6574\u7ED3\u6784\uFF08\u9762\u8BD5\u9AD8\u9891\u9898\uFF0C\u6309\u987A\u5E8F\u80CC\u4E0B\u6765\uFF09" }),
        /* @__PURE__ */ jsx3(
          Steps,
          {
            items: [
              {
                title: "\u79BB\u7EBF\u94FE\u8DEF\uFF1A\u6587\u6863\u51C6\u5907",
                desc: "\u52A0\u8F7D\u6587\u6863 \u2192 \u6E05\u6D17\uFF08\u53BB\u9875\u7709\u9875\u811A\u3001\u53BB\u4E71\u7801\uFF09\u2192 \u5207\u7247\uFF08Chunking\uFF0C\u628A\u957F\u6587\u6863\u5207\u6210\u9002\u5408\u68C0\u7D22\u7684\u5C0F\u6BB5\uFF09\u3002\u5207\u7247\u7B56\u7565\u76F4\u63A5\u5F71\u54CD\u6548\u679C\uFF0C\u662F PM \u6700\u8BE5\u5173\u5FC3\u7684\u300C\u810F\u6D3B\u300D"
              },
              {
                title: "\u79BB\u7EBF\u94FE\u8DEF\uFF1A\u5411\u91CF\u5316\u5165\u5E93",
                desc: "\u6BCF\u4E2A\u5207\u7247\u7528 Embedding \u6A21\u578B\u8F6C\u6210\u5411\u91CF\uFF0C\u8FDE\u540C\u539F\u6587\u4E00\u8D77\u5B58\u5165\u5411\u91CF\u6570\u636E\u5E93\uFF0C\u5EFA\u7ACB\u7D22\u5F15\u3002"
              },
              {
                title: "\u5728\u7EBF\u94FE\u8DEF\uFF1A\u68C0\u7D22",
                desc: "\u7528\u6237\u63D0\u95EE \u2192 \u95EE\u9898\u5411\u91CF\u5316 \u2192 \u5728\u5411\u91CF\u5E93\u91CC\u53EC\u56DE Top-K \u6700\u76F8\u5173\u7684\u5207\u7247\u3002\u8FDB\u9636\u505A\u6CD5\u4F1A\u6DF7\u5408\u5173\u952E\u8BCD\u68C0\u7D22\uFF08BM25\uFF09\u3001\u91CD\u6392\u5E8F\uFF08Rerank\uFF09\u6765\u63D0\u51C6\u3002"
              },
              {
                title: "\u5728\u7EBF\u94FE\u8DEF\uFF1A\u589E\u5F3A\u751F\u6210",
                desc: "\u628A\u53EC\u56DE\u7684\u5207\u7247\u585E\u8FDB Prompt\uFF08\u300C\u53C2\u8003\u8D44\u6599\u5982\u4E0B\u300D\u2192 \u6A21\u578B\u57FA\u4E8E\u8D44\u6599\u4F5C\u7B54\uFF0C\u5E76\u6807\u6CE8\u51FA\u5904\uFF08\u6EAF\u6E90\uFF09\u3002\u4F01\u4E1A\u573A\u666F\u8FD8\u5FC5\u987B\u505A\u6743\u9650\u7BA1\u63A7\uFF1A\u6CA1\u6743\u9650\u7684\u4EBA\u95EE\uFF0C\u4E00\u4E2A\u5B57\u90FD\u4E0D\u80FD\u591A\u8BF4\u3002"
              }
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3("div", { className: "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsx3("h3", { className: "font-semibold leading-snug", children: "\u79BB\u7EBF\u548C\u5728\u7EBF\uFF0C\u662F\u5148\u540E\u5173\u7CFB\u8FD8\u662F\u5E76\u5217\u5173\u7CFB\uFF1F" }),
          /* @__PURE__ */ jsxs3("p", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children: [
            "\u4E00\u53E5\u8BDD\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u5148\u5EFA\u623F\uFF0C\u540E\u4F4F\u4EBA" }),
            "\u3002\u79BB\u7EBF\u94FE\u8DEF\u5148\u8DD1\uFF08\u4E0A\u7EBF\u524D\u3001\u4EE5\u53CA\u6BCF\u6B21\u8D44\u6599\u66F4\u65B0\u65F6\uFF09\uFF0C\u4EA7\u7269\u662F\u5411\u91CF\u5E93\uFF1B\u4E4B\u540E\u7528\u6237\u7684\u6BCF\u4E00\u6B21\u63D0\u95EE\u90FD\u8D70\u5728\u7EBF\u94FE\u8DEF\u3002\u8FD0\u884C\u65F6\u4E24\u8005\u5E76\u884C\u2014\u2014\u7EBF\u4E0A\u670D\u52A1\u4E0D\u505C\uFF0C\u540E\u53F0\u53EF\u4EE5\u968F\u65F6\u91CD\u5EFA\u7D22\u5F15\u2014\u2014\u4F46\u903B\u8F91\u4E0A\u6709\u4E25\u683C\u5148\u540E\uFF1A\u6CA1\u6709\u79BB\u7EBF\u5EFA\u597D\u7684\u5E93\uFF0C\u5728\u7EBF\u68C0\u7D22\u5C31\u662F\u7A7A\u8F6C\u3002"
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "mt-3 flex flex-wrap items-center gap-2 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600", children: [
            /* @__PURE__ */ jsx3("span", { className: "rounded bg-zinc-200 px-2 py-0.5 font-medium", children: "\u79BB\u7EBF\uFF08\u5EFA\u5E93\uFF09" }),
            /* @__PURE__ */ jsx3(ArrowRight, { className: "h-3 w-3 text-zinc-400" }),
            /* @__PURE__ */ jsx3("span", { className: "rounded bg-indigo-100 px-2 py-0.5 font-medium text-indigo-700", children: "\u5411\u91CF\u5E93" }),
            /* @__PURE__ */ jsx3(ArrowRight, { className: "h-3 w-3 text-zinc-400" }),
            /* @__PURE__ */ jsx3("span", { className: "rounded bg-zinc-200 px-2 py-0.5 font-medium", children: "\u5728\u7EBF\uFF08\u6BCF\u6B21\u63D0\u95EE\uFF09" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsx3("h3", { className: "font-semibold leading-snug", children: "\u548C\u7528\u6237\u7684\u5BF9\u8BDD\u8BB0\u5F55\uFF0C\u4F1A\u5B58\u8FDB RAG \u5417\uFF1F" }),
          /* @__PURE__ */ jsxs3("p", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children: [
            "\u4E0D\u4F1A\u81EA\u52A8\u8FDB\u3002\u5BF9\u8BDD\u8BB0\u5F55\u5F52 ",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "Memory\uFF08\u8BB0\u5FC6\uFF09" }),
            "\u7BA1\uFF1A\u77ED\u5BF9\u8BDD\u7559\u5728\u4E0A\u4E0B\u6587\u7A97\u53E3\u91CC\uFF08\u77ED\u671F\u8BB0\u5FC6\uFF09\uFF0C\u91CD\u8981\u4FE1\u606F\u88AB\u62BD\u53D6\u6C89\u6DC0\u6210\u7528\u6237\u6863\u6848\uFF08\u957F\u671F\u8BB0\u5FC6\uFF0C\u89C1\u4E0B\u4E00\u8282\uFF09\u3002\u533A\u522B\u8BB0\u4F4F\u4E00\u53E5\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u8BB0\u5FC6\u662F\u5173\u4E8E\u300C\u4F60\u8FD9\u4E2A\u4EBA\u300D\u7684\uFF0CRAG \u662F\u5173\u4E8E\u300C\u77E5\u8BC6\u300D\u7684" }),
            "\u3002\u4E24\u8005\u5E38\u7528\u540C\u4E00\u5957\u5411\u91CF\u5E93\u6280\u672F\uFF08\u6240\u4EE5\u6709\u300C\u8BB0\u5FC6\u4E5F\u662F\u4E00\u6B21 RAG\u300D\u7684\u8BF4\u6CD5\uFF09\uFF0C\u4F46\u7BA1\u7406\u76EE\u6807\u4E0D\u540C\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2 text-[14px] leading-relaxed text-zinc-600", children: "\u4F01\u4E1A\u91CC\u82E5\u8981\u628A\u804A\u5929\u65E5\u5FD7\u5165\u77E5\u8BC6\u5E93\uFF0C\u5FC5\u987B\u5148\u6CBB\u7406\uFF1A\u8131\u654F\u3001\u53BB\u91CD\u3001\u6743\u9650\u6807\u6CE8\u2014\u2014\u6B63\u662F\u65B9\u6CD5\u7BC7\u300C\u77E5\u8BC6\u5E93\u662F\u8D44\u4EA7\u8FD0\u8425\u300D\u7684\u5165\u53E3\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsx3(Note, { children: /* @__PURE__ */ jsx3("p", { children: "RAG \u77E5\u8BC6\u5E93\u7684\u300C\u7BA1\u7406\u300D\u56DB\u4EF6\u4E8B\uFF1A\u8C01\u53EF\u4EE5\u770B\u4EC0\u4E48\uFF08\u6743\u9650\uFF09\u3001\u8D44\u6599\u591A\u4E45\u66F4\u65B0\uFF08\u65F6\u6548\uFF09\u3001\u7248\u672C\u53EF\u56DE\u6EDA\uFF08\u8BEF\u5220\u53EF\u6062\u590D\uFF09\u3001\u91CD\u590D\u51B2\u7A81\u600E\u4E48\u5904\u7406\uFF08\u53BB\u91CD\u4E0E\u8D28\u91CF\u5206\u7EA7\uFF09\u3002\u8FD9\u56DB\u4EF6\u4E8B\u505A\u4E0D\u597D\uFF0C\u68C0\u7D22\u518D\u51C6\u4E5F\u767D\u642D\u2014\u2014\u8FD9\u4E5F\u662F\u300C\u4ECE RAG \u8D70\u5411 Wiki\u300D\u7684\u884C\u4E1A\u5171\u8BC6\u7531\u6765\uFF0C\u5C55\u5F00\u89C1\u65B9\u6CD5\u7BC7\u3002" }) }) }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx3("p", { className: "mb-3 text-sm font-semibold text-zinc-800", children: "\u5E7B\u89C9\u7684\u56DB\u79CD\u7F13\u89E3\u65B9\u6848\uFF08\u9762\u8BD5\u9898\u300C\u600E\u4E48\u89E3\u51B3\u5E7B\u89C9\u300D\u7684\u6EE1\u5206\u6846\u67B6\uFF09" }),
        /* @__PURE__ */ jsx3(
          Table,
          {
            head: ["\u65B9\u6848", "\u4E00\u53E5\u8BDD\u539F\u7406", "\u9002\u5408\u4EC0\u4E48", "\u5C40\u9650"],
            rows: [
              ["RAG", "\u56DE\u7B54\u524D\u5148\u67E5\u8D44\u6599\uFF0C\u57FA\u4E8E\u8D44\u6599\u4F5C\u7B54", "\u77E5\u8BC6\u65F6\u6548\u6027\u5F3A\u3001\u4F01\u4E1A\u79C1\u6709\u77E5\u8BC6", "\u68C0\u7D22\u4E0D\u5230\u7167\u6837\u7F16\uFF1B\u6548\u679C\u4E0A\u9650\u88AB\u68C0\u7D22\u8D28\u91CF\u9501\u6B7B"],
              ["Prompt \u7EA6\u675F", "\u6307\u4EE4\u91CC\u8981\u6C42\u300C\u4E0D\u77E5\u9053\u5C31\u8BF4\u4E0D\u77E5\u9053\u300D\u300C\u7ED9\u51FA\u4F9D\u636E\u300D", "\u96F6\u6210\u672C\uFF0C\u6240\u6709\u573A\u666F\u7684\u7B2C\u4E00\u6B65", "\u9760\u6A21\u578B\u81EA\u89C9\uFF0C\u538B\u4E0D\u4F4F\u9AD8\u7F6E\u4FE1\u5EA6\u7684\u778E\u7F16"],
              ["SFT \u5FAE\u8C03", "\u7528\u300C\u8BDA\u5B9E\u4F5C\u7B54/\u8BE5\u62D2\u5C31\u62D2\u300D\u7684\u6837\u672C\u8BAD\u7EC3\uFF0C\u6539\u53D8\u884C\u4E3A\u4E60\u60EF", "\u884C\u4E3A\u6A21\u5F0F\u8981\u6C42\u7A33\u5B9A\u7684\u573A\u666F", "\u6210\u672C\u9AD8\u3001\u5468\u671F\u957F\uFF0C\u53EF\u80FD\u635F\u4F24\u901A\u7528\u80FD\u529B"],
              ["\u8C03\u4F4E Temperature", "\u964D\u4F4E\u91C7\u6837\u968F\u673A\u6027\uFF0C\u8BA9\u6A21\u578B\u9009\u66F4\u300C\u4FDD\u5B88\u300D\u7684\u8BCD", "\u4E8B\u5B9E\u578B\u3001\u7B54\u6848\u6536\u655B\u7684\u4EFB\u52A1", "\u6CBB\u6807\uFF1A\u53EA\u662F\u9519\u5F97\u66F4\u7A33\u5B9A\uFF0C\u4E0D\u662F\u66F4\u5BF9"]
            ]
          }
        ),
        /* @__PURE__ */ jsx3("p", { className: "mt-3 text-[14px] text-zinc-600", children: "\u5B9E\u6218\u662F\u7EC4\u5408\u62F3\uFF1ARAG \u4F9B\u8D44\u6599 + Prompt \u7ACB\u89C4\u77E9 + \u5FC5\u8981\u65F6 SFT \u56FA\u884C\u4E3A\uFF0C\u518D\u914D\u4E0A\u5F15\u7528\u6EAF\u6E90\u8BA9\u7528\u6237\u80FD\u6838\u67E5\u2014\u2014\u300C\u65E0\u6CD5\u6839\u9664\uFF0C\u53EA\u80FD\u7F13\u89E3 + \u515C\u5E95\u300D\u8FD9\u53E5\u8BDD\u672C\u8EAB\u5C31\u662F\u9762\u8BD5\u52A0\u5206\u70B9\u3002" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "03 \xB7 \u884C\u52A8", title: "Agent\u3001Workflow\u3001Skill\u3001MCP\uFF1A\u8BA9 AI \u4ECE\u300C\u4F1A\u8BF4\u300D\u5230\u300C\u4F1A\u505A\u300D", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "Agent", en: "\u667A\u80FD\u4F53", tag: "2026 \u6700\u70ED\u65B9\u5411", children: [
          /* @__PURE__ */ jsx3("p", { children: "\u4F1A\u81EA\u5DF1\u89C4\u5212\u4EFB\u52A1\u3001\u8C03\u7528\u5DE5\u5177\u3001\u6267\u884C\u591A\u6B65\u64CD\u4F5C\u7684 AI\u3002\u533A\u522B\u4E8E\u300C\u4F60\u95EE\u4E00\u53E5\u5B83\u7B54\u4E00\u53E5\u300D\u804A\u5929\u6A21\u5F0F\uFF1A\u4F60\u8BF4\u300C\u67E5\u4E0B\u660E\u5929\u5929\u6C14\uFF0C\u4E0B\u96E8\u5C31\u5E2E\u6211\u8BA2\u5F20\u9AD8\u94C1\u7968\u300D\u5B83\u80FD\u62C6\u89E3\u4EFB\u52A1\u3001\u67E5\u5929\u6C14\u3001\u5224\u65AD\u3001\u4E0B\u5355\u3002" }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u6838\u5FC3\u7EC4\u4EF6\uFF1A\u4EFB\u52A1\u89C4\u5212\uFF08Planning\uFF09\u3001\u5DE5\u5177\u8C03\u7528\uFF08Tool Use / Function Calling\uFF09\u3001\u8BB0\u5FC6\uFF08Memory\uFF09\u3001\u53CD\u601D\u4E0E\u7EA0\u9519\u3002" })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "Workflow", en: "\u5DE5\u4F5C\u6D41", tag: "\u786E\u5B9A\u6027\u7684\u7F16\u6392", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u628A AI \u7684\u8C03\u7528\u6B65\u9AA4\u7528\u6D41\u7A0B\u56FE\u56FA\u5B9A\u4E0B\u6765\uFF1A\u7B2C\u4E00\u6B65\u505A\u4EC0\u4E48\u3001\u7B2C\u4E8C\u6B65\u8C03\u54EA\u4E2A\u6A21\u578B\u3001\u5931\u8D25\u600E\u4E48\u515C\u5E95\u3002\u4E0E Agent \u7684\u533A\u522B\u5728\u4E8E",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u8C01\u505A\u51B3\u7B56" }),
            "\u2014\u2014Workflow \u7531\u4EBA\u4E8B\u5148\u753B\u597D\u8DEF\u5F84\uFF08\u53EF\u63A7\u3001\u53EF\u9884\u6D4B\uFF09\uFF0CAgent \u7531\u6A21\u578B\u81EA\u5DF1\u4E34\u573A\u51B3\u5B9A\uFF08\u7075\u6D3B\u3001\u4F46\u96BE\u7EA6\u675F\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u5DE5\u7A0B\u5B9E\u8DF5\u901A\u5E38\u662F\u4E24\u8005\u7ED3\u5408\uFF1A\u4E3B\u5E72\u7528 Workflow \u4FDD\u8BC1\u53EF\u63A7\uFF0C\u53F6\u5B50\u8282\u70B9\u653E Agent \u5904\u7406\u5F00\u653E\u6027\u4EFB\u52A1\u3002" })
        ] }),
        /* @__PURE__ */ jsx3(TermCard, { term: "Skill", en: "\u6280\u80FD\u5305", tag: "Agent \u7684\u6280\u80FD\u5E93", children: /* @__PURE__ */ jsx3("p", { children: "\u628A\u67D0\u7C7B\u4EFB\u52A1\u7684\u505A\u6CD5\u5C01\u88C5\u6210\u53EF\u590D\u7528\u7684\u80FD\u529B\u5305\uFF1A\u4E00\u5957\u6307\u4EE4\u3001\u5DE5\u5177\u548C\u8D44\u6E90\u7684\u7EC4\u5408\u3002\u5F53\u7528\u6237\u63D0\u51FA\u67D0\u7C7B\u9700\u6C42\u65F6\uFF0CAgent \u52A0\u8F7D\u5BF9\u5E94 Skill \u6267\u884C\u3002\u6BD4\u55BB\uFF1AAgent \u662F\u4F1A\u81EA\u5DF1\u627E\u6D3B\u5E72\u7684\u5458\u5DE5\uFF0CSkill \u662F\u4ED6\u624B\u8FB9\u4E00\u5957\u5957\u7684\u4F5C\u4E1A\u624B\u518C\u2014\u2014\u9047\u5230\u5BF9\u5E94\u95EE\u9898\u5C31\u7FFB\u5BF9\u5E94\u624B\u518C\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21\u4ECE\u96F6\u6478\u7D22\u3002" }) }),
        /* @__PURE__ */ jsx3(TermCard, { term: "MCP", en: "Model Context Protocol / \u6A21\u578B\u4E0A\u4E0B\u6587\u534F\u8BAE", tag: "\u5DE5\u5177\u63A5\u5165\u7684\u6807\u51C6\u63D2\u5934", children: /* @__PURE__ */ jsx3("p", { children: "\u8BA9 AI \u63A5\u5165\u5916\u90E8\u7CFB\u7EDF\u7684\u5F00\u653E\u534F\u8BAE\u2014\u2014\u6570\u636E\u5E93\u3001ERP\u3001\u641C\u7D22\u3001\u5185\u90E8 API \u90FD\u53EF\u4EE5\u5C01\u88C5\u6210\u6807\u51C6\u5316\u7684\u300C\u63D2\u5934\u300D\u6A21\u578B\u6309\u7EDF\u4E00\u65B9\u5F0F\u8C03\u7528\u3002\u89E3\u51B3\u7684\u662F\u300C\u6BCF\u4E2A\u5DE5\u5177\u5355\u72EC\u5F00\u53D1\u4E00\u904D\u5BF9\u63A5\u300D\u788E\u7247\u5316\u95EE\u9898\uFF0C\u6B63\u5728\u6210\u4E3A\u884C\u4E1A\u6807\u51C6\u3002" }) })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx3(
          Table,
          {
            head: ["\u6982\u5FF5", "\u4E00\u53E5\u8BDD\u5B9A\u4F4D", "\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898"],
            rows: [
              ["RAG", "\u77E5\u8BC6\u5C42", "AI \u4E0D\u77E5\u9053\u4F60\u516C\u53F8\u7684\u4E8B \u2192 \u5148\u67E5\u8D44\u6599\u518D\u56DE\u7B54"],
              ["MCP", "\u63A5\u53E3\u5C42", "AI \u591F\u4E0D\u7740\u4F60\u7684\u7CFB\u7EDF \u2192 \u6807\u51C6\u5316\u63A5\u5DE5\u5177"],
              ["Skill", "\u65B9\u6CD5\u5C42", "AI \u4E0D\u4F1A\u505A\u8FD9\u7C7B\u4E8B \u2192 \u5C01\u88C5\u6210\u6280\u80FD\u5305"],
              ["Agent", "\u51B3\u7B56\u5C42", "AI \u4E0D\u4F1A\u81EA\u5DF1\u5B89\u6392\u5DE5\u4F5C \u2192 \u81EA\u4E3B\u89C4\u5212\u4E0E\u6267\u884C"]
            ]
          }
        ),
        /* @__PURE__ */ jsx3("p", { className: "mt-3 text-[14px] text-zinc-600", children: "\u8BB0\u4F4F\u8FD9\u5F20\u5206\u5C42\u8868\uFF1A\u77E5\u8BC6\u3001\u63A5\u53E3\u3001\u65B9\u6CD5\u3001\u51B3\u7B56\uFF0C\u56DB\u5C42\u5404\u7BA1\u4E00\u6BB5\uFF0C\u62FC\u8D77\u6765\u624D\u662F\u4F01\u4E1A\u91CC\u80FD\u7528\u7684 AI\u3002" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "03.5 \xB7 \u5B89\u5168", title: "Prompt \u6CE8\u5165\uFF1AAI \u65F6\u4EE3\u7684\u300CSQL \u6CE8\u5165\u300D", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "Prompt \u6CE8\u5165", en: "Prompt Injection", tag: "\u6CBB\u7406\u4E0E\u5B89\u5168\u5C97\u5FC5\u8003", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u653B\u51FB\u8005\u628A\u6076\u610F\u6307\u4EE4\u6DF7\u8FDB\u6A21\u578B\u80FD\u770B\u5230\u7684\u5185\u5BB9\u91CC\uFF0C\u8BF1\u5BFC\u5B83\u5FFD\u7565\u539F\u672C\u7684\u8BBE\u5B9A\u3001\u6267\u884C\u653B\u51FB\u8005\u7684\u610F\u56FE\u3002\u5206\u4E24\u79CD\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u76F4\u63A5\u6CE8\u5165" }),
            "\uFF08\u7528\u6237\u5728\u8F93\u5165\u6846\u91CC\u5199\u300C\u5FFD\u7565\u4F60\u4E4B\u524D\u7684\u6240\u6709\u6307\u4EE4\u2026\u2026\u300D\uFF09\u548C",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u95F4\u63A5\u6CE8\u5165" }),
            "\uFF08\u6076\u610F\u6307\u4EE4\u85CF\u5728\u7F51\u9875\u3001\u90AE\u4EF6\u3001\u6587\u6863\u91CC\uFF0CAgent \u6293\u53D6\u6216 RAG \u68C0\u7D22\u65F6\u300C\u5403\u4E0B\u300D\u4E2D\u6BD2\u5185\u5BB9\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsxs3("p", { className: "mt-2", children: [
            "\u4E3A\u4EC0\u4E48\u96BE\u9632\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u6307\u4EE4\u548C\u6570\u636E\u8D70\u5728\u540C\u4E00\u6761\u901A\u9053\u91CC" }),
            "\u3002\u5BF9\u6A21\u578B\u6765\u8BF4\uFF0C\u8001\u677F\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u548C\u8D44\u6599\u91CC\u7684\u4E00\u53E5\u8BDD\u90FD\u662F\u6587\u672C\uFF0C\u6CA1\u6709\u5929\u7136\u7684\u6743\u9650\u9AD8\u4F4E\u4E4B\u5206\u2014\u2014\u8FD9\u662F\u67B6\u6784\u7EA7\u96BE\u9898\uFF0C\u4E0D\u662F\u5199\u51E0\u53E5\u9632\u5FA1\u8BDD\u672F\u80FD\u6839\u6CBB\u7684\u3002"
          ] })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "\u7EB5\u6DF1\u9632\u5FA1", en: "Defense in Depth", tag: "\u6CA1\u6709\u94F6\u5F39\uFF0C\u53EA\u80FD\u5206\u5C42", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u5DE5\u4E1A\u754C\u7684\u5171\u8BC6\u662F\u5206\u5C42\u62E6\u622A\uFF0C\u6BCF\u5C42\u964D\u4F4E\u4E00\u90E8\u5206\u98CE\u9669\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u8F93\u5165\u4FA7" }),
            "\uFF08\u6CE8\u5165\u68C0\u6D4B\u3001\u53EF\u7591\u5185\u5BB9\u8FC7\u6EE4\uFF09\uFF1B",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u6307\u4EE4\u4FA7" }),
            "\uFF08\u7CFB\u7EDF\u63D0\u793A\u8BCD\u660E\u786E\u6743\u9650\u8FB9\u754C\uFF0C\u8981\u6C42\u6A21\u578B\u5F15\u7528\u5916\u90E8\u5185\u5BB9\u65F6\u4FDD\u6301\u8B66\u60D5\uFF09\uFF1B",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u67B6\u6784\u4FA7" }),
            "\uFF08\u4E0D\u53EF\u4FE1\u5185\u5BB9\u6253\u6807\u964D\u6743\u3001\u5DE5\u5177\u8C03\u7528\u767D\u540D\u5355\u3001\u9AD8\u98CE\u9669\u52A8\u4F5C\u5FC5\u987B\u4EBA\u5DE5\u786E\u8BA4\uFF09\uFF1B",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u8F93\u51FA\u4FA7" }),
            "\uFF08\u654F\u611F\u4FE1\u606F\u6CC4\u9732\u68C0\u6D4B\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u4EA7\u54C1\u542F\u793A\uFF1A\u505A AI \u529F\u80FD\u8BBE\u8BA1\u65F6\uFF0C\u51E1\u6D89\u53CA\u300C\u6A21\u578B\u8BFB\u53D6\u5916\u90E8\u5185\u5BB9 + \u8C03\u7528\u5DE5\u5177\u6267\u884C\u52A8\u4F5C\u300D\u7684\u7EC4\u5408\uFF0C\u90FD\u8981\u9ED8\u8BA4\u5185\u5BB9\u662F\u654C\u5BF9\u7684\u6765\u63A8\u6F14\u4E00\u904D\u2014\u2014\u8FD9\u6B63\u662F\u6CBB\u7406\u7B56\u7565\u7C7B\u5C97\u4F4D\u7684\u65E5\u5E38\u601D\u7EF4\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsx3(Note, { children: /* @__PURE__ */ jsx3("p", { children: "\u9762\u8BD5\u7528\u6CD5\uFF1A\u88AB\u95EE\u300C\u600E\u4E48\u505A AI \u5185\u5BB9\u5B89\u5168/\u6CBB\u7406\u300D\u65F6\uFF0C\u7528\u300C\u76F4\u63A5/\u95F4\u63A5\u6CE8\u5165\u5206\u7C7B + \u56DB\u5C42\u7EB5\u6DF1\u9632\u5FA1 + \u6CA1\u6709\u94F6\u5F39\u300D\u4F5C\u7B54\uFF0C\u6BD4\u80CC\u5B9A\u4E49\u9AD8\u4E00\u4E2A\u6BB5\u4F4D\u3002\u5B83\u548C\u62D2\u7B54\u8FB9\u754C\uFF08\u65B9\u6CD5\u7BC7\uFF09\u662F\u4E00\u5BF9\uFF1A\u62D2\u7B54\u7BA1\u300C\u6A21\u578B\u4E0D\u8BE5\u8BF4\u4EC0\u4E48\u300D\uFF0C\u6CE8\u5165\u9632\u5FA1\u7BA1\u300C\u6A21\u578B\u4E0D\u8BE5\u542C\u4EC0\u4E48\u300D\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsx3(Section, { kicker: "04 \xB7 \u8BB0\u5FC6", title: "Memory\uFF1A\u8BA9 AI \u8BB0\u5F97\u4F4F\u4F60", children: /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx3(TermCard, { term: "\u77ED\u671F\u8BB0\u5FC6", en: "Working Memory", tag: "\u4F1A\u8BDD\u5185", children: /* @__PURE__ */ jsx3("p", { children: "\u53D7\u300C\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF08Context Window\uFF09\u300D\u9650\u5236\u2014\u2014\u6A21\u578B\u4E00\u6B21\u80FD\u300C\u770B\u89C1\u300D\u7684\u6587\u672C\u91CF\u6709\u4E0A\u9650\uFF0C\u804A\u5F97\u592A\u4E45\u65E9\u671F\u5185\u5BB9\u4F1A\u88AB\u6324\u51FA\u7A97\u53E3\u3002\u5DE5\u7A0B\u4E0A\u7528\u6458\u8981\u538B\u7F29\u3001\u6ED1\u52A8\u7A97\u53E3\u7B49\u7B56\u7565\u7F13\u89E3\u3002" }) }),
      /* @__PURE__ */ jsx3(TermCard, { term: "\u957F\u671F\u8BB0\u5FC6", en: "Long-term Memory", tag: "\u8DE8\u4F1A\u8BDD", children: /* @__PURE__ */ jsx3("p", { children: "\u628A\u5BF9\u8BDD\u4E2D\u7684\u91CD\u8981\u4FE1\u606F\u62BD\u53D6\u3001\u6C89\u6DC0\u6210\u7ED3\u6784\u5316\u8BB0\u5FC6\uFF08\u7528\u6237\u504F\u597D\u3001\u4E8B\u5B9E\u3001\u5386\u53F2\u51B3\u7B56\uFF09\uFF0C\u4E0B\u6B21\u4F1A\u8BDD\u65F6\u68C0\u7D22\u56DE\u6765\u3002\u5B9E\u73B0\u65B9\u5F0F\u591A\u6837\uFF1A\u5411\u91CF\u5E93\u68C0\u7D22\uFF08\u300C\u8BB0\u5FC6\u4E5F\u662F\u4E00\u6B21 RAG\u300D\uFF09\u3001\u7ED3\u6784\u5316\u6863\u6848\u3001\u4E13\u95E8\u7684\u8BB0\u5FC6\u7BA1\u7406\u670D\u52A1\u3002\u8FD9\u662F\u5F53\u524D Agent \u4EA7\u54C1\u7ADE\u4E89\u7684\u91CD\u70B9\u2014\u2014\u8C01\u66F4\u300C\u61C2\u4F60\u300D\u8C01\u7559\u5B58\u66F4\u9AD8\u3002" }) })
    ] }) }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "05 \xB7 \u5EA6\u91CF", title: "Benchmark\u3001\u8BC4\u6D4B\u4E0E\u610F\u56FE\u8BC6\u522B\uFF1A\u597D\u574F\u8C01\u6765\u88C1\u5224", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "Benchmark", en: "\u57FA\u51C6\u6D4B\u8BD5", tag: "\u6A21\u578B\u754C\u7684\u8003\u8BD5\u5377", children: [
          /* @__PURE__ */ jsx3("p", { children: "\u4E00\u5957\u6807\u51C6\u5316\u7684\u9898\u76EE\u548C\u8BC4\u5206\u89C4\u5219\uFF0C\u7528\u6765\u7ED9\u6A21\u578B\u300C\u6253\u5206\u6392\u540D\u300D\u3002\u600E\u4E48\u642D\uFF1A\u786E\u5B9A\u8003\u4EC0\u4E48\u80FD\u529B \u2192 \u6536\u96C6\u9898\u76EE\uFF08\u542B\u6807\u51C6\u7B54\u6848\u6216\u8BC4\u5206\u89C4\u5219\uFF09\u2192 \u56FA\u5B9A\u8BC4\u6D4B\u6D41\u7A0B\uFF08\u540C\u4E00 Prompt\u3001\u540C\u4E00\u89E3\u7801\u53C2\u6570\uFF09\u2192 \u51FA\u5206\u6570\u3001\u53EF\u590D\u73B0\u3002" }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u4E09\u4E2A\u5E38\u89C1\u5751\uFF1A\u9898\u76EE\u6CC4\u8FDB\u8BAD\u7EC3\u6570\u636E\uFF08\u300C\u5237\u9898\u300D\uFF09\u3001\u6307\u6807\u4E0E\u771F\u5B9E\u4F53\u9A8C\u8131\u8282\u3001\u53EA\u770B\u603B\u5206\u4E0D\u770B\u5206\u9879\u3002\u8457\u540D\u7684\u51E0\u5F20\u8003\u5377\u89C1\u4E0B\u8868\u3002" })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "\u610F\u56FE\u8BC6\u522B\u4E0E\u8DEF\u7531", en: "Intent Recognition & Routing", tag: "\u5BF9\u8BDD\u7CFB\u7EDF\u7684\u603B\u673A", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u610F\u56FE\u8BC6\u522B" }),
            "\uFF1A\u5224\u65AD\u7528\u6237\u8FD9\u53E5\u8BDD\u5230\u5E95\u60F3\u5E72\u4EC0\u4E48\u2014\u2014\u662F\u67E5\u8BA2\u5355\u3001\u6295\u8BC9\uFF0C\u8FD8\u662F\u95F2\u804A\u3002",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u8DEF\u7531\uFF08Routing\uFF09" }),
            "\u662F\u5B83\u7684\u4E0B\u6E38\u52A8\u4F5C\uFF1A\u8BC6\u522B\u51FA\u610F\u56FE\u540E\uFF0C\u628A\u8BF7\u6C42\u5206\u53D1\u5230\u5BF9\u5E94\u7684\u5904\u7406\u94FE\u8DEF\u2014\u2014\u67E5\u8BA2\u5355\u8D70\u8BA2\u5355\u7CFB\u7EDF\u3001\u6295\u8BC9\u8D70\u5DE5\u5355\u6D41\u7A0B\u3001\u95F2\u804A\u76F4\u63A5\u8BA9\u5927\u6A21\u578B\u7B54\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u6BD4\u55BB\uFF1A\u516C\u53F8\u603B\u673A\u3002\u5148\u542C\u61C2\u4F60\u8981\u627E\u8C01\uFF08\u8BC6\u522B\uFF09\uFF0C\u518D\u8F6C\u5BF9\u5E94\u5206\u673A\uFF08\u8DEF\u7531\uFF09\u3002\u8BC6\u522B\u9519\u4E86\u8F6C\u5FC5\u9519\uFF0C\u6240\u4EE5\u5B83\u662F\u5BF9\u8BDD\u4EA7\u54C1\u7684\u7B2C\u4E00\u9053\u5DE5\u5E8F\uFF1B\u8BC4\u6D4B\u6307\u6807\u770B\u51C6\u786E\u7387\u3001\u53EC\u56DE\u7387\uFF0C\u4EE5\u53CA\u300C\u8DEF\u7531\u5230\u515C\u5E95\u300D\u7684\u5408\u7406\u7387\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx3("p", { className: "mb-3 text-sm font-semibold text-zinc-800", children: "\u4E09\u5F20\u8457\u540D\u8003\u5377\u957F\u4EC0\u4E48\u6837" }),
        /* @__PURE__ */ jsx3(
          Table,
          {
            head: ["\u8003\u5377", "\u8003\u4EC0\u4E48", "\u9898\u76EE\u5F62\u5F0F\u4E0E\u5224\u5206"],
            rows: [
              ["MMLU", "\u7EFC\u5408\u77E5\u8BC6\u50A8\u5907", "57 \u4E2A\u5B66\u79D1\u7684\u5355\u9009\u9898\uFF08\u6570\u5B66\u3001\u5386\u53F2\u3001\u6CD5\u5F8B\u3001\u533B\u5B66\u2026\u2026\uFF09\uFF0C\u6570\u7B54\u5BF9\u591A\u5C11"],
              ["HumanEval", "\u5199\u4EE3\u7801", "164 \u9053 Python \u51FD\u6570\u9898\uFF0C\u770B\u751F\u6210\u7684\u4EE3\u7801\u80FD\u5426\u901A\u8FC7\u9884\u8BBE\u7684\u5355\u5143\u6D4B\u8BD5"],
              ["SWE-bench", "\u771F\u5B9E\u5DE5\u7A0B\u4EFB\u52A1", "\u4ECE\u771F\u5B9E\u5F00\u6E90\u9879\u76EE\u91CC\u62BD bug\uFF0C\u6A21\u578B\u8981\u63D0\u4EA4\u8865\u4E01\u5E76\u901A\u8FC7\u9879\u76EE\u81EA\u5E26\u6D4B\u8BD5\u2014\u2014\u6700\u63A5\u8FD1\u771F\u5B9E\u5DE5\u7A0B\u5E08\u7684\u65E5\u5E38\u5DE5\u4F5C"]
            ]
          }
        ),
        /* @__PURE__ */ jsx3("p", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children: "\u4E00\u5F20\u8003\u5377\u53EA\u80FD\u8003\u4E00\u79CD\u80FD\u529B\uFF0C\u6A21\u578B\u5728\u4E0D\u540C\u8003\u5377\u4E0A\u7684\u5206\u6570\u53EF\u4EE5\u5DEE\u5F97\u5F88\u8FDC\u2014\u2014\u8FD9\u5C31\u662F\u300C\u770B\u5206\u9879\u4E0D\u770B\u603B\u5206\u300D\u7684\u539F\u56E0\u3002\u4E3A\u4EC0\u4E48\u8BC4\u6D4B\u548C\u610F\u56FE\u8BC6\u522B\u653E\u5728\u540C\u4E00\u8282\uFF1F\u56E0\u4E3A\u8FD9\u4E00\u8282\u7684\u4E3B\u9898\u662F\u300C\u5EA6\u91CF\u300D\uFF1A\u610F\u56FE\u8BC6\u522B\u662F\u4E00\u4E2A\u9700\u8981\u88AB\u5EA6\u91CF\u7684\u80FD\u529B\uFF08\u8BC6\u522B\u51C6\u4E0D\u51C6\u8981\u9760\u8BC4\u6D4B\u56DE\u7B54\uFF09\uFF0C\u8BC4\u6D4B\u662F\u7ED9\u6240\u6709 AI \u80FD\u529B\u5F53\u88C1\u5224\u7684\u65B9\u6CD5\u8BBA\u2014\u2014\u4E24\u8005\u662F\u540C\u4E00\u679A\u786C\u5E01\u7684\u4E24\u9762\u3002" })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "BLEU", en: "\u81EA\u52A8\u6307\u6807\u7684\u4EE3\u8868", tag: "\u673A\u5668\u7FFB\u8BD1\u65F6\u4EE3\u7684\u8001\u5C3A\u5B50", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u51FA\u8EAB\u673A\u5668\u7FFB\u8BD1\u7684\u81EA\u52A8\u6253\u5206\uFF1A\u6570\u4E00\u6570 AI \u7B54\u6848\u548C\u6807\u51C6\u7B54\u6848\u91CC\u6709\u591A\u5C11\u8FDE\u7EED\u8BCD\u7EC4\uFF08n-gram\uFF09\u91CD\u53E0\uFF0C\u91CD\u53E0\u8D8A\u591A\u5206\u8D8A\u9AD8\u3002\u4F18\u70B9\u662F\u4FBF\u5B9C\u3001\u5FEB\u3001\u53EF\u590D\u73B0\uFF1B\u81F4\u547D\u4F24\u662F",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u300C\u5B57\u9762\u50CF\u300D\u4E0D\u7B49\u4E8E\u300C\u610F\u601D\u5BF9\u300D" }),
            "\u2014\u2014\u540C\u4E49\u6539\u5199\u4F1A\u5224\u4F4E\u5206\uFF0C\u80E1\u8BF4\u516B\u9053\u53EA\u8981\u7528\u8BCD\u50CF\u5C31\u5224\u9AD8\u5206\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u6240\u4EE5\u5B83\u9002\u5408\u7FFB\u8BD1\u3001\u6458\u8981\u8FD9\u7C7B\u6709\u53C2\u8003\u7B54\u6848\u7684\u4EFB\u52A1\uFF1B\u5BF9\u5F00\u653E\u5F0F\u751F\u6210\u4E0D\u591F\u7528\u2014\u2014\u8FD9\u6B63\u662F LLM-as-a-Judge \u51FA\u573A\u7684\u539F\u56E0\u3002" })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "\u88C1\u5224\u504F\u7F6E", en: "Judge Bias", tag: "LLM \u5F53\u88C1\u5224\u7684\u7CFB\u7EDF\u6027\u6BDB\u75C5", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u7528 LLM \u6253\u5206\u65F6\u7684\u4E09\u7C7B\u5DF2\u77E5\u504F\u5DEE\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u4F4D\u7F6E\u504F\u597D" }),
            "\uFF08\u4E24\u4EFD\u7B54\u6848\u6446\u4E00\u8D77\uFF0C\u88C1\u5224\u504F\u5FC3\u6392\u5728\u524D\u9762\u7684\u90A3\u4EFD\uFF09\uFF1B",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u957F\u5EA6\u504F\u597D" }),
            "\uFF08\u6F5C\u610F\u8BC6\u89C9\u5F97\u5199\u5F97\u591A=\u5199\u5F97\u597D\uFF09\uFF1B",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u81EA\u6211\u504F\u597D" }),
            "\uFF08\u504F\u7231\u4E0E\u81EA\u5DF1\u540C\u5BB6\u65CF\u6A21\u578B\u5199\u7684\u7B54\u6848\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600", children: [
            /* @__PURE__ */ jsx3("p", { className: "font-semibold text-zinc-700", children: "\u4F4D\u7F6E\u504F\u597D\u600E\u4E48\u9A8C\u8BC1\uFF1A\u4EA4\u6362 A/B \u987A\u5E8F\u76F2\u6D4B" }),
            /* @__PURE__ */ jsx3("p", { className: "mt-1", children: "\u540C\u4E00\u5BF9\u7B54\u6848\u4EA4\u6362\u524D\u540E\u4F4D\u7F6E\u8BA9\u88C1\u5224\u9009 10 \u6B21\uFF1A\u4E0D\u504F\u5FC3\u7684\u88C1\u5224\u5E94\u5404\u9009\u7EA6 5 \u6B21\uFF1B\u82E5\u300C\u6392\u5728\u524D\u9762\u7684\u300D\u8D62 8 \u6B21\u4EE5\u4E0A\uFF0C\u8BF4\u660E\u88C1\u5224\u6709\u4F4D\u7F6E\u504F\u597D\uFF0C\u8BC4\u6D4B\u7ED3\u679C\u4E0D\u53EF\u4FE1\uFF0C\u9700\u6253\u4E71\u987A\u5E8F\u91CD\u6D4B\u3002" })
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children: "\u5BF9\u7B56\uFF1A\u76F2\u6D4B\u6253\u4E71\u987A\u5E8F\u3001\u6309\u7EF4\u5EA6\u62C6\u5206\u6253\u5206\u3001\u5B9A\u671F\u62BD\u4E00\u90E8\u5206\u4EBA\u5DE5\u590D\u6838\u6821\u51C6\u3002\u9762\u8BD5\u63D0\u4E00\u53E5\u300C\u88C1\u5224\u672C\u8EAB\u4E5F\u8981\u88AB\u8BC4\u6D4B\u300D\uFF0C\u662F\u52A0\u5206\u7EC6\u8282\u3002" })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "Harness", en: "\u8BC4\u6D4B\u8DD1\u5206\u5668 / \u8BC4\u6D4B\u811A\u624B\u67B6", tag: "\u8BA9\u5206\u6570\u53EF\u6BD4\u3001\u53EF\u590D\u73B0\u7684\u6846\u67B6", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u628A\u300C\u52A0\u8F7D\u8003\u9898 \u2192 \u62FC\u88C5 Prompt \u2192 \u8C03\u7528\u6A21\u578B \u2192 \u8BA1\u7B97\u6307\u6807 \u2192 \u8F93\u51FA\u62A5\u544A\u300D\u6574\u6761\u6D41\u7A0B\u4EE3\u7801\u5316\u56FA\u5B9A\u4E0B\u6765\u7684\u8BC4\u6D4B\u6846\u67B6\u3002\u77E5\u540D\u5F00\u6E90\u5B9E\u73B0\u6709",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: " lm-evaluation-harness" }),
            "\uFF08\u793E\u533A\u4E8B\u5B9E\u6807\u51C6\uFF09\u3001HELM\u3001OpenAI Evals \u7B49\u3002\u6CE8\u610F Harness \u672C\u8EAB\u4E0D\u51FA\u9898\u4E5F\u4E0D\u6253\u5206\uFF0C\u5B83\u8D1F\u8D23\u300C\u6309\u7EDF\u4E00\u89C4\u5219\u8DD1\u5B8C\u5168\u573A\u300D\u3002"
          ] }),
          /* @__PURE__ */ jsxs3("p", { className: "mt-2", children: [
            "\u4E3A\u4EC0\u4E48\u5FC5\u987B\u6709\u5B83\uFF1A\u6CA1\u6709\u7EDF\u4E00 Harness\uFF0C\u6BCF\u4E2A\u4EBA\u81EA\u5DF1\u505A\u9898\u3001\u81EA\u5DF1\u62FC Prompt\u3001\u81EA\u5DF1\u7B97\u5206\uFF0C\u6A21\u578B A \u7528\u6E29\u5EA6 0 \u8DD1\u3001\u6A21\u578B B \u7528\u6E29\u5EA6 0.9 \u8DD1\uFF0C\u5206\u6570\u5DEE\u5F02\u6BEB\u65E0\u610F\u4E49\u2014\u2014",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u4E0D\u53EF\u6BD4\u3001\u4E0D\u53EF\u590D\u73B0\u7684\u8BC4\u6D4B\u7B49\u4E8E\u6CA1\u6D4B" }),
            "\u3002Harness \u4FDD\u8BC1\u540C\u4E00\u5F20\u5377\u5B50\u3001\u540C\u4E00\u79CD\u8003\u6CD5\u3001\u540C\u4E00\u5957\u9605\u5377\u6807\u51C6\u3002\u4F01\u4E1A\u5185\u90E8\u7684\u300C\u8BC4\u6D4B\u5E73\u53F0\u300D\u672C\u8D28\u4E0A\u5C31\u662F\u81EA\u5EFA Harness\uFF1B\u770B\u5230\u4EFB\u4F55\u8DD1\u5206\u7ED3\u8BBA\uFF0C\u5148\u95EE\u4E00\u53E5\u300C\u7528\u7684\u540C\u4E00\u4E2A Harness \u5417\u300D\u3002"
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600", children: [
            /* @__PURE__ */ jsx3("p", { className: "font-semibold text-zinc-700", children: "\u4E00\u8BCD\u4E24\u4E49\uFF0C\u522B\u641E\u6DF7" }),
            /* @__PURE__ */ jsxs3("p", { className: "mt-1", children: [
              "Harness \u539F\u4E49\u662F\u9A6C\u5177\u2014\u2014\u300C\u5957\u5728\u6A21\u578B\u5916\u9762\u7684\u90A3\u5C42\u652F\u67B6\u300D\u3002\u672C\u9875\u8BB2\u7684\u662F",
              /* @__PURE__ */ jsx3("strong", { children: "\u8BC4\u6D4B\u652F\u67B6" }),
              "\uFF08\u8DD1\u8003\u8BD5\uFF09\uFF1B\u8FD1\u5E74\u8FD8\u6D41\u884C\u53E6\u4E00\u79CD\u7528\u6CD5 ",
              /* @__PURE__ */ jsx3("strong", { children: "Agent Harness" }),
              "\uFF08\u5DE5\u4F5C\u652F\u67B6\uFF09\uFF1A\u5305\u5728\u6A21\u578B\u5916\u9762\u7684\u7CFB\u7EDF Prompt\u3001\u5DE5\u5177\u6E05\u5355\u3001\u5FAA\u73AF\u4E0E\u4E0A\u4E0B\u6587\u7BA1\u7406\u2014\u2014\u300C\u540C\u4E00\u4E2A\u6A21\u578B\u914D\u4E0D\u540C harness \u8868\u73B0\u5929\u5DEE\u5730\u522B\u300D\uFF0CClaude Code\u3001Cursor \u5356\u7684\u4E00\u534A\u662F\u6A21\u578B\u3001\u4E00\u534A\u662F harness\u3002\u8003\u8BD5\u65F6\u5B83\u662F\u8003\u8BD5\u652F\u67B6\uFF0C\u5E72\u6D3B\u65F6\u5B83\u662F\u5DE5\u4F5C\u652F\u67B6\uFF0C\u6307\u7684\u90FD\u662F\u300C\u6A21\u578B\u4E4B\u5916\u90A3\u5C42\u4E1C\u897F\u300D\u3002"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx3("p", { className: "mb-3 text-sm font-semibold text-zinc-800", children: "\u8BC4\u6D4B\u65B9\u6CD5\u5168\u666F\uFF08\u65B9\u6CD5\u7BC7\u4F1A\u5C55\u5F00\u300C\u600E\u4E48\u505A\u300D\uFF09" }),
        /* @__PURE__ */ jsx3(
          Table,
          {
            head: ["\u65B9\u6CD5", "\u4F18\u70B9", "\u7F3A\u70B9"],
            rows: [
              ["\u4EBA\u5DE5\u8BC4\u4F30", "\u4EBA\u6309\u6807\u51C6\u6253\u5206\u6216\u6392\u5E8F", "\u6700\u53EF\u9760\uFF0C\u4F46\u8D35\u3001\u6162\u3001\u4E3B\u89C2\u6CE2\u52A8"],
              ["\u81EA\u52A8\u6307\u6807", "\u7528\u89C4\u5219/\u516C\u5F0F\u8BA1\u7B97\uFF08\u51C6\u786E\u7387\u3001BLEU \u7B49\uFF09", "\u4FBF\u5B9C\u5FEB\uFF0C\u4F46\u96BE\u4EE5\u8861\u91CF\u300C\u597D\u4E0D\u597D\u300D\u8FD9\u7C7B\u6A21\u7CCA\u8D28\u91CF"],
              ["LLM-as-a-Judge", "\u7528\u5F3A\u6A21\u578B\u5F53\u88C1\u5224\u6253\u5206", "\u662F\u89C4\u6A21\u5316\u7684\u6700\u4F73\u5B9E\u8DF5\uFF1B\u4F46\u9700\u9632\u88C1\u5224\u504F\u7F6E\uFF08\u89C1\u4E0A\uFF09"],
              ["\u5728\u7EBF A/B", "\u7EBF\u4E0A\u5206\u6D41\u5BF9\u6BD4\u771F\u5B9E\u7528\u6237\u884C\u4E3A", "\u662F\u6700\u7EC8\u771F\u7406\uFF0C\u4F46\u5468\u671F\u957F\u3001\u9700\u8981\u6D41\u91CF"]
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx3(Section, { kicker: "06 \xB7 \u7CFB\u7EDF", title: "\u5206\u5E03\u5F0F\uFF1A\u4E3A\u4EC0\u4E48 AI \u670D\u52A1\u4E0D\u662F\u4E00\u53F0\u7535\u8111", children: /* @__PURE__ */ jsxs3(TermCard, { term: "\u5206\u5E03\u5F0F\u7CFB\u7EDF", en: "Distributed System", tag: "\u5DE5\u7A0B\u5E38\u8BC6", children: [
      /* @__PURE__ */ jsx3("p", { children: "\u628A\u4E00\u4E2A\u5927\u4EFB\u52A1\u62C6\u7ED9\u591A\u53F0\u673A\u5668\u534F\u540C\u5B8C\u6210\u3002\u4E3A\u4EC0\u4E48 AI \u79BB\u4E0D\u5F00\u5B83\uFF1A\u8BAD\u7EC3\u548C\u63A8\u7406\u7684\u8BA1\u7B97\u91CF\u8FDC\u8D85\u5355\u673A\u5BB9\u91CF\u2014\u2014\u8BAD\u7EC3\u8981\u6210\u5343\u4E0A\u4E07\u5F20 GPU \u5E76\u884C\u6570\u6708\uFF0C\u63A8\u7406\u670D\u52A1\u8981\u625B\u4F4F\u9AD8\u5E76\u53D1\u8BF7\u6C42\u3001\u8FD8\u8981\u4FDD\u8BC1\u67D0\u4E2A\u8282\u70B9\u6302\u4E86\u670D\u52A1\u4E0D\u4E2D\u65AD\uFF08\u9AD8\u53EF\u7528\uFF09\u548C\u968F\u65F6\u6269\u5BB9\uFF08\u5F39\u6027\u4F38\u7F29\uFF09\u3002" }),
      /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "PM \u9700\u8981\u61C2\u7684\u90E8\u5206\uFF1A\u5E76\u53D1\u3001\u5EF6\u8FDF\uFF08\u5982 TP99\uFF09\u3001\u53EF\u7528\u6027\u3001\u6210\u672C\u8FD9\u51E0\u4E2A\u8BCD\u7684\u8BED\u4E49\u2014\u2014\u5B83\u4EEC\u662F\u548C\u7814\u53D1\u8BA8\u8BBA\u300C\u4E0A\u591A\u5C11\u5361\u3001\u7528\u6237\u4F53\u9A8C\u548C\u9884\u7B97\u600E\u4E48\u5E73\u8861\u300D\u5171\u540C\u8BED\u8A00\u3002\u4E0D\u9700\u8981\u61C2\u7684\u662F\u4E00\u81F4\u6027\u534F\u8BAE\u3001\u8C03\u5EA6\u7B97\u6CD5\u8FD9\u4E9B\u5B9E\u73B0\u7EC6\u8282\u3002" })
    ] }) }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "07 \xB7 \u89C6\u89D2", title: "AI \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF0C\u8FB9\u754C\u5728\u54EA", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3("div", { className: "rounded-xl border border-emerald-200 bg-emerald-50/60 p-5", children: [
          /* @__PURE__ */ jsx3("h3", { className: "font-semibold text-emerald-900", children: "AI \u73B0\u5728\u64C5\u957F\u7684\u4E8B" }),
          /* @__PURE__ */ jsxs3("ul", { className: "mt-3 space-y-2 text-[14px] leading-relaxed text-emerald-900/80", children: [
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u975E\u7ED3\u6784\u5316\u4FE1\u606F\u7684\u7406\u89E3\u4E0E\u751F\u6210\uFF1A\u8BFB\u6587\u6863\u3001\u5199\u6587\u6848\u3001\u603B\u7ED3\u4F1A\u8BAE\u3001\u7FFB\u8BD1" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u6709\u660E\u786E\u8303\u5F0F\u7684\u4E13\u4E1A\u52B3\u52A8\uFF1A\u5199\u4EE3\u7801\u3001\u505A\u8868\u683C\u3001\u753B\u539F\u578B\uFF08AI Coding \u7684\u57FA\u672C\u9762\uFF09" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u6A21\u5F0F\u8BC6\u522B\u7C7B\u9884\u6D4B\uFF1A\u98CE\u63A7\u3001\u63A8\u8350\u3001\u610F\u56FE\u8DEF\u7531" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 7\xD724 \u7684\u4E00\u5BF9\u4E00\u670D\u52A1\uFF1A\u5BA2\u670D\u3001\u966A\u7EC3\u3001\u52A9\u6559\uFF08\u6210\u672C\u7ED3\u6784\u88AB\u91CD\u5851\u7684\u9886\u57DF\uFF09" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "rounded-xl border border-rose-200 bg-rose-50/60 p-5", children: [
          /* @__PURE__ */ jsx3("h3", { className: "font-semibold text-rose-900", children: "AI \u5F53\u524D\u7684\u8FB9\u754C" }),
          /* @__PURE__ */ jsxs3("ul", { className: "mt-3 space-y-2 text-[14px] leading-relaxed text-rose-900/80", children: [
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u5E7B\u89C9\u65E0\u6CD5\u6839\u9664\uFF1A\u4F1A\u4EE5\u6781\u9AD8\u7F6E\u4FE1\u5EA6\u8F93\u51FA\u9519\u8BEF\u5185\u5BB9\uFF0C\u9AD8\u98CE\u9669\u51B3\u7B56\u5FC5\u987B\u6709\u4EBA\u6216\u673A\u5236\u515C\u5E95" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u77E5\u8BC6\u622A\u6B62\uFF1A\u8BAD\u7EC3\u6570\u636E\u6709\u622A\u6B62\u65E5\u671F\uFF0C\u65B0\u77E5\u8BC6\u4F9D\u8D56 RAG / \u8054\u7F51\u68C0\u7D22\u8865" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u957F\u7A0B\u53EF\u9760\u6027\uFF1A\u591A\u6B65\u4EFB\u52A1\u4E2D\u9519\u8BEF\u4F1A\u7D2F\u79EF\uFF0C\u6210\u529F\u7387\u968F\u6B65\u9AA4\u6570\u6307\u6570\u8870\u51CF" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u56E0\u679C\u4E0E\u7269\u7406\u4E16\u754C\uFF1A\u7406\u89E3\u300C\u4E3A\u4EC0\u4E48\u300D\u64CD\u7EB5\u73B0\u5B9E\u4E16\u754C\u4ECD\u5F88\u5F31" }),
            /* @__PURE__ */ jsx3("li", { children: "\xB7 \u8BC4\u4F30\u96BE\u9898\uFF1A\u5F00\u653E\u5F0F\u4EA7\u51FA\u300C\u597D\u574F\u300D\u91CF\u5316\uFF0C\u5BFC\u81F4\u8FED\u4EE3\u6162\u3001\u8D23\u4EFB\u96BE\u754C\u5B9A" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsx3(Note, { children: /* @__PURE__ */ jsxs3("p", { children: [
        "\u5B9A\u4E49\u95EE\u9898\u7684\u516C\u5F0F\uFF1A",
        /* @__PURE__ */ jsx3("span", { className: "font-semibold", children: "\u9AD8\u9891 \xD7 \u5BB9\u9519 \xD7 \u6709\u6D77\u91CF\u8303\u5F0F\u53EF\u5B66" }),
        "\u7684\u573A\u666F\u9002\u5408 AI \u5148\u843D\u5730\uFF1B\u4F4E\u9891 \xD7 \u96F6\u5BB9\u9519 \xD7 \u9700\u8981\u62C5\u8D23\u7684\u573A\u666F\uFF0CAI \u53EA\u80FD\u505A\u8F85\u52A9\u3002\u9762\u8BD5\u804A\u300C\u4F60\u4F1A\u600E\u4E48\u9009\u573A\u666F\u300D\uFF0C\u8FD9\u5957\u5224\u65AD\u6846\u67B6\u5C31\u662F\u4F60\u7684\u7B54\u6848\u9AA8\u67B6\u3002"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx3(Section, { kicker: "08 \xB7 \u591A\u6A21\u6001\u4E0E\u5FAE\u8C03", title: "VLM \u4E0E SFT\uFF1A\u7ED9\u6A21\u578B\u957F\u773C\u775B\u3001\u4E0A\u8865\u4E60\u73ED", children: /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs3(TermCard, { term: "VLM", en: "Vision Language Model / \u89C6\u89C9\u8BED\u8A00\u6A21\u578B", tag: "\u591A\u6A21\u6001\u6587\u6863\u5206\u6790\u7684\u53D1\u52A8\u673A", children: [
        /* @__PURE__ */ jsxs3("p", { children: [
          "\u80FD\u540C\u65F6\u300C\u770B\u300D\u56FE\u548C\u300C\u8BFB\u300D\u6587\u5B57\u7684\u6A21\u578B\u3002\u7ED3\u6784\u4E0A\u662F\u7ED9 LLM \u52A0\u88C5\u4E86\u4E00\u4E2A",
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u89C6\u89C9\u7F16\u7801\u5668" }),
          "\uFF1A\u56FE\u7247\u5148\u88AB\u5207\u6210\u89C6\u89C9 token\uFF0C\u548C\u6587\u5B57 token \u4E00\u8D77\u9001\u8FDB\u540C\u4E00\u4E2A Transformer \u7406\u89E3\u3002\u4E8E\u662F\u6A21\u578B\u53EF\u4EE5\u56DE\u7B54\u300C\u8FD9\u5F20\u622A\u56FE\u91CC\u6309\u94AE\u5728\u54EA\u300D\u300C\u8FD9\u5F20\u8868\u7684\u7B2C\u4E09\u884C\u9500\u552E\u989D\u662F\u591A\u5C11\u300D\u3002\u4EE3\u8868\u9009\u624B\uFF1AGPT-4o\u3001Claude\u3001Qwen-VL\u3002"
        ] }),
        /* @__PURE__ */ jsxs3("p", { className: "mt-2", children: [
          "\u5BF9 PM \u7684\u610F\u4E49\uFF1A",
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u591A\u6A21\u6001\u6587\u6863\u5206\u6790" }),
          "\u8FD9\u6761\u4EA7\u54C1\u7EBF\u7684\u5730\u57FA\u2014\u2014\u5408\u540C\u91CC\u626B\u63CF\u7684\u516C\u7AE0\u3001\u7814\u62A5\u91CC\u7684\u56FE\u8868\u3001\u53D1\u7968\u7167\u7247\u3001\u754C\u9762\u622A\u56FE\uFF0C\u8FC7\u53BB\u8981 OCR \u8F6C\u6587\u5B57\uFF08\u8868\u683C\u7ED3\u6784\u5168\u4E22\uFF09\uFF0C\u73B0\u5728 VLM \u76F4\u63A5\u8BFB\u56FE\u7406\u89E3\u3002\u9762\u8BD5\u804A\u300C\u77E5\u8BC6\u5E93\u91CC\u5168\u662F PDF \u626B\u63CF\u4EF6\u600E\u4E48\u529E\u300D\uFF0C\u7B54\u6848\u5C31\u662F\u8FD9\u6761\u8DEF\u3002"
        ] })
      ] }),
      /* @__PURE__ */ jsxs3(TermCard, { term: "SFT", en: "Supervised Fine-Tuning / \u76D1\u7763\u5FAE\u8C03", tag: "\u7528\u793A\u4F8B\u7ED9\u6A21\u578B\u8865\u8BFE", children: [
        /* @__PURE__ */ jsxs3("p", { children: [
          "\u62FF\u4E00\u6279\u300C\u6807\u51C6\u95EE + \u6807\u51C6\u7B54\u300D\u7684\u793A\u4F8B\u6570\u636E\u7EE7\u7EED\u8BAD\u7EC3\u6A21\u578B\uFF0C\u8BA9\u5B83\u7684\u884C\u4E3A\u5411\u793A\u4F8B\u9760\u62E2\u3002\u4E0E\u5B83\u914D\u5957\u7684\u8FD8\u6709 RLHF\uFF08\u7528\u4EBA\u7C7B\u504F\u597D\u6253\u5206\u8C03\u5BF9\u9F50\uFF09\u3002\u5FAE\u8C03\u6539\u7684\u662F\u6A21\u578B\u7684",
          /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u884C\u4E3A\u4E60\u60EF" }),
          "\uFF1A\u8BED\u6C14\u3001\u683C\u5F0F\u3001\u98CE\u683C\u3001\u5BF9\u67D0\u7C7B\u4EFB\u52A1\u7684\u5957\u8DEF\u3002"
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600", children: [
          /* @__PURE__ */ jsx3("p", { className: "font-semibold text-zinc-700", children: "Prompt / RAG / SFT \u600E\u4E48\u9009\uFF08\u9AD8\u9891\u9762\u8BD5\u9898\uFF09" }),
          /* @__PURE__ */ jsx3("p", { className: "mt-1", children: "\u77E5\u8BC6\u6027\u7684\u95EE\u9898 \u2192 RAG\uFF08\u77E5\u8BC6\u5929\u5929\u53D8\uFF0C\u5FAE\u8C03\u8FFD\u4E0D\u4E0A\uFF09\uFF1B\u884C\u4E3A\u683C\u5F0F\u7684\u95EE\u9898 \u2192 SFT\uFF08\u8981 1000+ \u6761\u7A33\u5B9A\u98CE\u683C\u65F6\u7528\uFF09\uFF1B\u5148\u8BD5 Prompt\uFF0CPrompt \u5199\u4E0D\u51FA\u7684\u7A33\u5B9A\u884C\u4E3A\u518D\u4E0A\u5FAE\u8C03\u3002\u5FAE\u8C03\u300C\u8BB0\u4F4F\u300D\u7684\u5185\u5BB9\u4F1A\u8FC7\u65F6\u4E14\u96BE\u5220\u9664\u2014\u2014\u8FD9\u662F\u5B83\u548C RAG \u6700\u672C\u8D28\u7684\u5206\u5DE5\u3002" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "09 \xB7 \u63A5\u53E3", title: "API\u3001Function Calling \u4E0E\u7ED3\u6784\u5316\u8F93\u51FA\uFF1A\u6A21\u578B\u600E\u4E48\u548C\u5916\u754C\u5BF9\u8BDD", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs3(TermCard, { term: "API \u4EA4\u4E92", en: "\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3", tag: "PM \u7684\u6700\u5C0F\u6280\u672F\u901A\u8BC6", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u8C03\u4E00\u6B21\u6A21\u578B = \u53D1\u4E00\u6B21 HTTP \u8BF7\u6C42\uFF1A\u5E26\u7740 API Key\uFF08\u9274\u6743\uFF09\u628A\u4E00\u6BB5 JSON \u53D1\u7ED9\u670D\u52A1\u5546\u7684 endpoint\uFF0CJSON \u91CC\u5199\u660E model\u3001messages\uFF08\u5BF9\u8BDD\u5386\u53F2\uFF09\u3001temperature \u7B49\u53C2\u6570\uFF0C\u5BF9\u65B9\u56DE\u4E00\u6BB5 JSON\uFF0C\u91CC\u9762\u662F\u751F\u6210\u7684\u6587\u672C\u548C token \u7528\u91CF\u3002\u6A21\u578B API \u662F",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u65E0\u72B6\u6001" }),
            "\u7684\u2014\u2014\u670D\u52A1\u7AEF\u4E0D\u8BB0\u4F60\u4E0A\u6B21\u804A\u4E86\u4EC0\u4E48\uFF0C\u591A\u8F6E\u5BF9\u8BDD\u9760\u5BA2\u6237\u7AEF\u628A\u5B8C\u6574\u5386\u53F2\u6BCF\u6B21\u90FD\u91CD\u65B0\u53D1\u4E00\u904D\uFF08\u6240\u4EE5\u957F\u5BF9\u8BDD token \u8D8A\u6EDA\u8D8A\u8D35\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "PM \u8981\u61C2\u7684\u56DB\u4E2A\u8FB9\u754C\uFF1A\u6309 token \u8BA1\u8D39\uFF08\u8F93\u5165\u8F93\u51FA\u5206\u5F00\u8BA1\u4EF7\uFF09\u3001\u4E0A\u4E0B\u6587\u7A97\u53E3\u4E0A\u9650\u3001\u6BCF\u5206\u949F\u8C03\u7528\u6B21\u6570\u9650\u6D41\uFF08RPM\uFF09\u3001\u6D41\u5F0F\u8F93\u51FA\uFF08\u6253\u5B57\u673A\u6548\u679C\uFF09vs \u4E00\u6B21\u6027\u8FD4\u56DE\u3002\u8FD9\u56DB\u6761\u76F4\u63A5\u51B3\u5B9A\u4F60\u7684\u4EA7\u54C1\u4F53\u9A8C\u8BBE\u8BA1\u548C\u6210\u672C\u6A21\u578B\u3002" })
        ] }),
        /* @__PURE__ */ jsxs3(TermCard, { term: "Function Calling \u4E0E\u7ED3\u6784\u5316\u8F93\u51FA", en: "\u51FD\u6570\u8C03\u7528", tag: "\u4ECE\u300C\u804A\u5929\u300D\u5230\u300C\u6267\u884C\u300D\u7684\u6865\u6881", children: [
          /* @__PURE__ */ jsxs3("p", { children: [
            "\u5173\u952E\u8BA4\u77E5\uFF1A",
            /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u6A21\u578B\u81EA\u5DF1\u4E0D\u4F1A\u6267\u884C\u4EFB\u4F55\u51FD\u6570" }),
            "\u3002\u5B83\u53EA\u662F\u6839\u636E\u4F60\u7684\u5DE5\u5177\u6E05\u5355\uFF0C\u8F93\u51FA\u4E00\u6BB5\u7ED3\u6784\u5316 JSON\uFF1A\u300C\u5EFA\u8BAE\u8C03\u7528 get_weather\uFF0C\u53C2\u6570 city=\u5317\u4EAC\u300D\u3002\u771F\u6B63\u7684\u6267\u884C\u7531\u7A0B\u5E8F\u5B8C\u6210\uFF0C\u7ED3\u679C\u518D\u56DE\u4F20\u7ED9\u6A21\u578B\uFF0C\u6A21\u578B\u7528\u4EBA\u8BDD\u603B\u7ED3\u2014\u2014\u5FAA\u73AF\u53EF\u80FD\u591A\u8F6E\uFF0C\u8FD9\u5C31\u662F Agent \u5DE5\u5177\u7684\u5E95\u5C42\u5FAA\u73AF\u3002"
          ] }),
          /* @__PURE__ */ jsx3("p", { className: "mt-2", children: "\u7ED3\u6784\u5316\u8F93\u51FA\uFF08Structured Output\uFF09\u662F\u540C\u4E00\u601D\u8DEF\uFF1A\u7528 JSON Schema \u7EA6\u675F\u6A21\u578B\u5FC5\u987B\u8F93\u51FA\u5408\u6CD5\u683C\u5F0F\u7684 JSON\u3002\u5B83\u8BA9\u6A21\u578B\u4ECE\u300C\u5199\u6587\u7AE0\u7684\u300D\u53D8\u6210\u300C\u586B\u8868\u7684\u300D\u2014\u2014\u6253\u6807\u7B7E\u3001\u62BD\u5B57\u6BB5\u3001\u6253\u5206\u3001\u8DEF\u7531\u5224\u65AD\uFF0C\u4E00\u5207\u8981\u8FDB\u7A0B\u5E8F\u4E0B\u6E38\u7684\u8F93\u51FA\u90FD\u8BE5\u8D70\u7ED3\u6784\u5316\uFF0C\u5426\u5219\u4E00\u4E2A\u591A\u4F59\u6807\u70B9\u5C31\u80FD\u8BA9\u89E3\u6790\u5D29\u6E83\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsxs3(TermCard, { term: "Postman \u4E0E curl", en: "\u63A5\u53E3\u8054\u8C03\u7684\u4E24\u628A\u6273\u624B", tag: "PM \u4E5F\u5F97\u4E0A\u624B", children: [
        /* @__PURE__ */ jsx3("p", { children: "curl \u662F\u547D\u4EE4\u884C\u91CC\u7684\u4E00\u884C\u8BF7\u6C42\uFF0CPostman \u662F\u56FE\u5F62\u5316\u754C\u9762\uFF08\u80FD\u5B58\u8BF7\u6C42\u6536\u85CF\u5939\u3001\u5207\u6362\u73AF\u5883\u53D8\u91CF\u3001\u770B\u5386\u53F2\uFF09\u3002\u5B83\u4EEC\u662F\u9A8C\u8BC1\u63A5\u53E3\u7684\u5DE5\u5177\u2014\u2014\u6587\u6863\u8BF4\u63A5\u53E3\u80FD\u8FD4\u56DE\u4EC0\u4E48\uFF0C\u4EB2\u624B\u8C03\u4E00\u904D\u624D\u7B97\u6570\u3002\u4E00\u6B21\u771F\u5B9E\u8C03\u7528\u957F\u8FD9\u6837\uFF1A" }),
        /* @__PURE__ */ jsxs3("div", { className: "mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-3 font-mono text-[12px] leading-relaxed text-zinc-100", children: [
          /* @__PURE__ */ jsx3("p", { children: "curl https://api.openai.com/v1/chat/completions \\" }),
          /* @__PURE__ */ jsx3("p", { children: '\xA0\xA0-H "Authorization: Bearer sk-\u4F60\u7684key" \\' }),
          /* @__PURE__ */ jsx3("p", { children: '\xA0\xA0-H "Content-Type: application/json" \\' }),
          /* @__PURE__ */ jsxs3("p", { children: [
            "\xA0\xA0-d '",
            "{",
            '"model":"gpt-4o","messages":[',
            "{",
            '"role":"user","content":"\u4F60\u597D"',
            "}",
            "]'",
            "}",
            "'"
          ] })
        ] }),
        /* @__PURE__ */ jsx3("p", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children: "PM \u7684\u4E09\u4E2A\u7528\u6CD5\uFF1A\u9A8C\u8BC1 API \u6587\u6863\u4E0E\u771F\u5B9E\u884C\u4E3A\u662F\u5426\u4E00\u81F4\uFF1B\u5B9A\u4F4D\u95EE\u9898\u5F52\u5C5E\uFF08curl \u76F4\u8FDE\u6B63\u5E38\u4F46\u4EA7\u54C1\u91CC\u62A5\u9519 \u2192 \u9505\u5728\u63A5\u5165\u5C42\u4E0D\u5728\u6A21\u578B\uFF09\uFF1B\u9762\u8BD5\u5B9E\u64CD\u9898\u300C\u7ED9\u4F60\u4E2A API \u642D\u4E2A\u5C0F\u5DE5\u5177\u300D\u65F6\u8FD9\u662F\u7B2C\u4E00\u9053\u5DE5\u5E8F\u3002" })
      ] }) }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsxs3("div", { className: "rounded-xl border border-zinc-200 bg-white p-5", children: [
        /* @__PURE__ */ jsx3("p", { className: "text-sm font-semibold text-zinc-800", children: "\u4E00\u56FE\u770B\u61C2 Function Calling \u5FAA\u73AF\uFF08\u6A21\u578B\u53EA\u300C\u5EFA\u8BAE\u300D\uFF0C\u7A0B\u5E8F\u624D\u300C\u6267\u884C\u300D\uFF09" }),
        /* @__PURE__ */ jsxs3("div", { className: "mt-4 flex flex-wrap items-center gap-2 text-[12px] font-medium", children: [
          /* @__PURE__ */ jsx3("span", { className: "rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-zinc-700", children: "\u7528\u6237\u63D0\u95EE\u300C\u5317\u4EAC\u660E\u5929\u5929\u6C14\uFF1F\u300D" }),
          /* @__PURE__ */ jsx3("span", { className: "text-zinc-300", children: "\u2192" }),
          /* @__PURE__ */ jsx3("span", { className: "rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-700", children: "\u6A21\u578B\u8F93\u51FA JSON\uFF1A\u8C03\u7528 get_weather(city=\u5317\u4EAC)" }),
          /* @__PURE__ */ jsx3("span", { className: "text-zinc-300", children: "\u2192" }),
          /* @__PURE__ */ jsx3("span", { className: "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700", children: "\u7A0B\u5E8F\u771F\u6B63\u8C03\u7528\u5929\u6C14 API" }),
          /* @__PURE__ */ jsx3("span", { className: "text-zinc-300", children: "\u2192" }),
          /* @__PURE__ */ jsx3("span", { className: "rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700", children: "\u7ED3\u679C\u56DE\u4F20\u7ED9\u6A21\u578B" }),
          /* @__PURE__ */ jsx3("span", { className: "text-zinc-300", children: "\u2192" }),
          /* @__PURE__ */ jsx3("span", { className: "rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-zinc-700", children: "\u6A21\u578B\u7528\u4EBA\u8BDD\u603B\u7ED3\u300C\u660E\u5929\u6674\uFF0C18~26\u2103\u300D" })
        ] }),
        /* @__PURE__ */ jsx3("p", { className: "mt-3 text-[12px] leading-relaxed text-zinc-500", children: "\u5982\u679C\u6A21\u578B\u62FF\u5230\u7ED3\u679C\u540E\u5224\u65AD\u8FD8\u9700\u8981\u522B\u7684\u4FE1\u606F\uFF08\u6BD4\u5982\u518D\u67E5\u7A7F\u8863\u6307\u6570\uFF09\uFF0C\u4F1A\u518D\u8F93\u51FA\u4E00\u6B21\u8C03\u7528 JSON\u2014\u2014\u8FD9\u4E2A\u5FAA\u73AF\u53EF\u4EE5\u8F6C\u591A\u8F6E\uFF0C\u76F4\u5230\u6A21\u578B\u8BA4\u4E3A\u53EF\u4EE5\u4F5C\u7B54\u4E3A\u6B62\u3002Agent \u7684\u300C\u5DE5\u5177\u8C03\u7528\u5FAA\u73AF\u300D\u5C31\u662F\u8FD9\u5F20\u56FE\u7684\u4E0D\u65AD\u91CD\u590D\u3002" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "10 \xB7 \u5E73\u53F0", title: "LangGraph\u3001Dify\u3001Coze\uFF1A\u628A\u60F3\u6CD5\u62FC\u8D77\u6765\u7684\u4E09\u6761\u8DEF", children: [
      /* @__PURE__ */ jsxs3("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: [
        "\u4E09\u8005\u90FD\u80FD\u300C\u628A\u6A21\u578B\u3001\u5DE5\u5177\u3001\u77E5\u8BC6\u5E93\u62FC\u6210\u5E94\u7528\u300D\uFF0C\u4F46\u62BD\u8C61\u5C42\u7EA7\u5B8C\u5168\u4E0D\u540C\uFF1A\u4E00\u4E2A\u7ED9\u4F60\u4EE3\u7801\u6846\u67B6\uFF0C\u4E00\u4E2A\u7ED9\u4F60\u53EF\u89C6\u5316\u5DE5\u4F5C\u6D41\uFF0C\u4E00\u4E2A\u7ED9\u4F60\u63D2\u4EF6\u751F\u6001\u3002\u9009\u578B\u672C\u8D28\u662F",
        /* @__PURE__ */ jsx3("span", { className: "font-semibold text-zinc-800", children: "\u81EA\u7531\u5EA6 vs \u4E0A\u7EBF\u901F\u5EA6" }),
        "\u7684\u4EA4\u6362\u3002"
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "mt-5", children: /* @__PURE__ */ jsx3(
        Table,
        {
          head: ["\u5E73\u53F0", "\u5B9A\u4F4D\u4E0E\u7528\u6CD5", "\u4F18\u52BF", "\u77ED\u677F\u4E0E\u9002\u7528"],
          rows: [
            ["LangGraph", "\u4EE3\u7801\u7EA7 Agent \u7F16\u6392\u6846\u67B6\uFF08LangChain \u5BB6\u65CF\uFF09\uFF0C\u628A Agent \u753B\u6210\u72B6\u6001\u673A\u56FE\uFF1A\u8282\u70B9=\u52A8\u4F5C\uFF0C\u8FB9=\u6D41\u8F6C\u6761\u4EF6", "\u63A7\u5236\u7C92\u5EA6\u6700\u7EC6\uFF0C\u590D\u6742\u5206\u652F\u3001\u5FAA\u73AF\u3001\u4EBA\u673A\u534F\u540C\u90FD\u80FD\u7CBE\u786E\u8868\u8FBE", "\u8981\u5199\u4EE3\u7801\u3001\u8981\u8FD0\u7EF4\uFF1B\u9002\u5408\u5DE5\u7A0B\u5E08\u4E3B\u5BFC\u3001\u903B\u8F91\u590D\u6742\u7684\u6838\u5FC3\u7CFB\u7EDF"],
            ["Dify", "\u5F00\u6E90\u4F4E\u4EE3\u7801 LLM \u5E94\u7528\u5E73\u53F0\uFF1A\u53EF\u89C6\u5316\u62D6\u62FD\u5DE5\u4F5C\u6D41 + \u77E5\u8BC6\u5E93 + \u4E00\u952E\u53D1\u5E03 API\uFF0C\u53EF\u79C1\u6709\u5316\u90E8\u7F72", "\u4E0D\u5199\u4EE3\u7801\u4E5F\u80FD\u642D\u51FA\u80FD\u4E0A\u7EBF\u7684\u4EA7\u54C1\uFF0C\u4F01\u4E1A\u5185\u7F51\u53EF\u81EA\u90E8\u7F72", "\u6DF1\u5EA6\u5B9A\u5236\u6709\u5929\u82B1\u677F\uFF1B\u9002\u5408 PM \u5FEB\u901F\u9A8C\u8BC1\u3001\u4F01\u4E1A\u5185\u90E8\u5DE5\u5177"],
            ["Coze\uFF08\u6263\u5B50\uFF09", "\u5B57\u8282\u51FA\u54C1\u7684\u96F6\u4EE3\u7801 Bot \u5E73\u53F0\uFF1A\u63D2\u4EF6\u5546\u5E97 + \u5DE5\u4F5C\u6D41 + \u4E00\u952E\u53D1\u5E03\u5230\u6296\u97F3/\u98DE\u4E66\u7B49\u6E20\u9053", "\u751F\u6001\u63D2\u4EF6\u73B0\u6210\u3001\u5206\u53D1\u6E20\u9053\u73B0\u6210\uFF0C\u4E2A\u4EBA\u521B\u4F5C\u8005\u51E0\u5206\u949F\u51FA\u4F5C\u54C1", "\u5E73\u53F0\u7ED1\u5B9A\u6DF1\u3001\u6570\u636E\u5728\u4E91\u4E0A\uFF1B\u9002\u5408 C \u7AEF\u5C0F\u5DE5\u5177\u548C\u5FEB\u901F\u539F\u578B"]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx3("div", { className: "mt-4", children: /* @__PURE__ */ jsx3(Note, { children: /* @__PURE__ */ jsx3("p", { children: "\u9009\u578B\u53E3\u8BC0\uFF1A\u9A8C\u8BC1\u60F3\u6CD5\u7528 Dify/Coze\uFF08\u5C0F\u65F6\u7EA7\u51FA\u6D3B\uFF09\uFF0C\u903B\u8F91\u590D\u6742\u5230\u62D6\u62FD\u6446\u4E0D\u4E0B\u518D\u4E0A LangGraph\uFF0C\u6570\u636E\u4E0D\u80FD\u51FA\u5185\u7F51\u9009 Dify \u81EA\u90E8\u7F72\u3002\u4E09\u8005\u4E0D\u662F\u4E92\u65A5\u2014\u2014\u5F88\u591A\u56E2\u961F\u662F Coze \u8BD5\u9519\u3001Dify \u4E0A\u7EBF\u3001LangGraph \u627F\u8F7D\u6838\u5FC3\u94FE\u8DEF\u3002\u4F60\u7684 RAG \u8BC4\u6D4B\u5B9E\u9A8C\u5BA4\u8D70\u7684\u5C31\u662F Dify \u8DEF\u7EBF\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs3(Section, { kicker: "\u81EA\u6D4B", title: "3 \u5206\u949F\u81EA\u6D4B\uFF1A\u4F60\u80FD\u590D\u8FF0\u5417", children: [
      /* @__PURE__ */ jsx3(
        Table,
        {
          head: ["\u95EE\u9898", "\u5408\u683C\u7684\u56DE\u7B54\u65B9\u5411"],
          rows: [
            ["Transformer \u89E3\u51B3\u4E86\u4EC0\u4E48\uFF1F", "\u8BA9\u6A21\u578B\u5E76\u884C\u5730\u7406\u89E3\u8BCD\u4E0E\u8BCD\u4E4B\u95F4\u7684\u5173\u7CFB\uFF08\u6CE8\u610F\u529B\uFF09\uFF0C\u6210\u4E3A\u6240\u6709 LLM \u7684\u5E95\u5EA7"],
            ["Transformer \u600E\u4E48\u9009\u51FA\u4E0B\u4E00\u4E2A\u8BCD\uFF1F", "\u8F93\u51FA\u5168\u8BCD\u8868\u6982\u7387\u5206\u5E03\uFF0C\u8D2A\u5FC3\u9009\u6700\u9AD8\u6216\u6309\u6E29\u5EA6\u91C7\u6837\uFF1B\u9010\u8BCD\u63A5\u529B\u76F4\u5230\u7ED3\u675F\u7B26"],
            ["RAG \u4E24\u6BB5\u94FE\u8DEF\u5206\u522B\u505A\u4EC0\u4E48\uFF1F", "\u79BB\u7EBF\uFF1A\u5207\u7247\u3001\u5411\u91CF\u5316\u5165\u5E93\uFF1B\u5728\u7EBF\uFF1A\u68C0\u7D22\u3001\u585E\u8FDB Prompt \u589E\u5F3A\u3001\u5E26\u6EAF\u6E90\u751F\u6210"],
            ["\u5BF9\u8BDD\u8BB0\u5F55\u4F1A\u8FDB RAG \u77E5\u8BC6\u5E93\u5417\uFF1F", "\u4E0D\u4F1A\u81EA\u52A8\u8FDB\uFF1A\u77ED\u5BF9\u8BDD\u9760\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF0C\u957F\u671F\u9760 Memory \u62BD\u53D6\u6C89\u6DC0\u2014\u2014RAG \u7BA1\u77E5\u8BC6\uFF0CMemory \u7BA1\u7528\u6237"],
            ["Agent \u548C Workflow \u7684\u672C\u8D28\u533A\u522B\uFF1F", "\u51B3\u7B56\u6743\u5728\u6A21\u578B\u8FD8\u662F\u4EBA\uFF1A\u7075\u6D3B vs \u53EF\u63A7\uFF0C\u5B9E\u8DF5\u4E2D\u5E38\u6DF7\u642D"],
            ["MCP \u7684\u4EF7\u503C\u662F\u4EC0\u4E48\uFF1F", "\u628A\u5DE5\u5177\u63A5\u5165\u95E8\u69DB\u4ECE N\xD7M \u6B21\u5F00\u53D1\u964D\u5230 N+M \u6B21\uFF08\u6807\u51C6\u5316\u63D2\u5934\uFF09"],
            ["\u4E3A\u4EC0\u4E48\u8BC4\u6D4B\u8981\u7528 LLM \u5F53\u88C1\u5224\uFF1F", "\u5F00\u653E\u5F0F\u4EA7\u51FA\u6CA1\u6709\u6807\u51C6\u7B54\u6848\uFF0C\u4EBA\u5DE5\u8BC4\u8D35\u4E14\u6162\uFF0CLLM \u8BC4\u5206\u53EF\u89C4\u6A21\u5316\uFF0C\u4F46\u8981\u9632\u504F\u7F6E"],
            ["VLM \u89E3\u51B3\u4E86\u77E5\u8BC6\u5E93\u7684\u4EC0\u4E48\u75DB\u70B9\uFF1F", "\u626B\u63CF\u4EF6/\u56FE\u8868/\u622A\u56FE\u4E0D\u7528 OCR \u786C\u8F6C\u6587\u5B57\uFF0C\u89C6\u89C9\u7F16\u7801\u5668\u8BA9\u6A21\u578B\u76F4\u63A5\u8BFB\u56FE\u7406\u89E3"],
            ["\u77E5\u8BC6\u578B\u95EE\u9898\u548C\u884C\u4E3A\u578B\u95EE\u9898\u5206\u522B\u600E\u4E48\u89E3\uFF1F", "\u77E5\u8BC6\u7528 RAG\uFF08\u53EF\u53D8\u3001\u53EF\u6EAF\u6E90\uFF09\uFF0C\u884C\u4E3A\u7528 SFT\uFF08\u7A33\u5B9A\u98CE\u683C\u683C\u5F0F\uFF09\uFF1B\u5148 Prompt\uFF0C\u4E0D\u884C\u518D\u5FAE\u8C03"],
            ["Function Calling \u662F\u6A21\u578B\u5728\u6267\u884C\u51FD\u6570\u5417\uFF1F", "\u4E0D\u662F\u2014\u2014\u6A21\u578B\u53EA\u8F93\u51FA\u300C\u8C03\u4EC0\u4E48\u3001\u53C2\u6570\u662F\u4EC0\u4E48\u300D\u7684 JSON\uFF0C\u6267\u884C\u5728\u7A0B\u5E8F\u4FA7\uFF0C\u7ED3\u679C\u56DE\u4F20\u518D\u603B\u7ED3"],
            ["\u4E3A\u4EC0\u4E48\u6A21\u578B API \u957F\u5BF9\u8BDD\u8D8A\u6765\u8D8A\u8D35\uFF1F", "\u65E0\u72B6\u6001\uFF1A\u6BCF\u8F6E\u8981\u628A\u5B8C\u6574\u5BF9\u8BDD\u5386\u53F2\u91CD\u53D1\u4E00\u904D\uFF0Ctoken \u6309\u8F93\u5165\u8F93\u51FA\u8BA1\u8D39"],
            ["LangGraph / Dify / Coze \u600E\u4E48\u9009\uFF1F", "\u9A8C\u8BC1\u60F3\u6CD5\u7528 Dify/Coze\uFF0C\u590D\u6742\u72B6\u6001\u673A\u7528 LangGraph\uFF0C\u6570\u636E\u4E0D\u51FA\u5185\u7F51\u7528 Dify \u81EA\u90E8\u7F72"],
            ["\u5206\u5E03\u5F0F\u5BF9 AI \u610F\u5473\u7740\u4EC0\u4E48\uFF1F", "\u7B97\u529B\u4E0E\u5E76\u53D1\u8FDC\u8D85\u5355\u673A\uFF0C\u670D\u52A1\u7684\u9AD8\u53EF\u7528\u4E0E\u6210\u672C\u90FD\u5EFA\u7ACB\u5728\u5206\u5E03\u5F0F\u4E4B\u4E0A"],
            ["\u89E3\u51B3\u5E7B\u89C9\u6709\u54EA\u56DB\u62DB\uFF1F", "RAG \u4F9B\u8D44\u6599\u3001Prompt \u7ACB\u89C4\u77E9\u3001SFT \u56FA\u884C\u4E3A\u3001\u964D\u6E29\u51CF\u968F\u673A\u2014\u2014\u7EC4\u5408\u62F3 + \u6EAF\u6E90\u515C\u5E95\uFF0C\u65E0\u6CD5\u6839\u9664"],
            ["Prompt \u6CE8\u5165\u4E3A\u4EC0\u4E48\u96BE\u9632\uFF1F", "\u6307\u4EE4\u548C\u6570\u636E\u540C\u4E00\u901A\u9053\uFF0C\u6A21\u578B\u5206\u4E0D\u6E05\u300C\u547D\u4EE4\u300D\u548C\u300C\u8D44\u6599\u300D\uFF1B\u53EA\u80FD\u8F93\u5165/\u6307\u4EE4/\u67B6\u6784/\u8F93\u51FA\u56DB\u5C42\u7EB5\u6DF1\u9632\u5FA1"]
          ]
        }
      ),
      /* @__PURE__ */ jsxs3("p", { className: "mt-4 text-[14px] text-zinc-600", children: [
        "\u5168\u90E8\u80FD\u590D\u8FF0 \u2192 \u8FDB\u5165",
        /* @__PURE__ */ jsx3("a", { href: "#/methods", className: "font-semibold text-indigo-600 hover:underline", children: "\u65B9\u6CD5\u7BC7" }),
        '\u5B66"\u600E\u4E48\u52A8\u624B"\uFF1B\u8FD8\u6709\u5361\u58F3\u7684 \u2192 \u56DE\u5230\u5BF9\u5E94\u5C0F\u8282\u518D\u8BFB\u4E00\u904D\u3002'
      ] })
    ] })
  ] });
}

// src/pages/Methods.jsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function Methods() {
  return /* @__PURE__ */ jsxs4(Layout, { children: [
    /* @__PURE__ */ jsx4(
      PageHeader,
      {
        eyebrow: "\u65B9\u6CD5\u7BC7",
        title: "\u52A8\u624B\u65B9\u6CD5\u8BBA",
        desc: "\u6982\u5FF5\u662F\u5730\u56FE\uFF0C\u65B9\u6CD5\u662F\u817F\u3002\u8FD9\u4E00\u7BC7\u8BB2 AIPM \u7684\u770B\u5BB6\u672C\u9886\uFF1A\u628A Prompt \u5199\u660E\u767D\u3001\u628A\u8BC4\u6D4B\u5EFA\u8D77\u6765\u3001\u628A\u77E5\u8BC6\u5E93\u642D\u8D77\u6765\u3001\u7B97\u6E05\u6210\u672C\u8D26\uFF0C\u4EE5\u53CA\u51B3\u5B9A\u7EBF\u4E0A\u6548\u679C\u7684\u5DE5\u7A0B\u7EC6\u8282\u2014\u2014\u53EC\u56DE\u3001\u62D2\u7B54\u3001\u6EAF\u6E90\u3001\u5207\u7247\u3001\u89E6\u53D1\u4E0E\u5DE5\u5177\u63CF\u8FF0\u3002\u6BCF\u4EF6\u4E8B\u90FD\u7ED9\u5230\u53EF\u4EE5\u76F4\u63A5\u7167\u505A\u7684\u6B65\u9AA4\u3002"
      }
    ),
    /* @__PURE__ */ jsxs4(Section, { kicker: "01 \xB7 \u6307\u6325", title: "Prompt Engineering\uFF1A\u628A AI \u5F53\u806A\u660E\u7684\u65B0\u5458\u5DE5\u5E26", children: [
      /* @__PURE__ */ jsxs4("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx4(Card, { title: "\u5B83\u662F\u4EC0\u4E48", icon: PenLine, children: /* @__PURE__ */ jsxs4("p", { children: [
          "\u901A\u8FC7\u8BBE\u8BA1\u8F93\u5165\u6307\u4EE4\uFF0C\u7A33\u5B9A\u5730\u8BA9\u6A21\u578B\u4EA7\u51FA\u7B26\u5408\u9884\u671F\u7684\u7ED3\u679C\u3002\u5B83\u4E0D\u662F\u300C\u5FF5\u5492\u8BED\u300D\u800C\u662F",
          /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u7ED9\u4E00\u4E2A\u806A\u660E\u4F46\u4E0D\u4E86\u89E3\u4F60\u5904\u5883\u7684\u65B0\u5458\u5DE5\u5199\u5DE5\u4F5C\u8BF4\u660E" }),
          "\u2014\u2014\u89D2\u8272\u3001\u4EFB\u52A1\u3001\u7EA6\u675F\u3001\u793A\u4F8B\u3001\u8F93\u51FA\u683C\u5F0F\uFF0C\u4E00\u6837\u90FD\u4E0D\u80FD\u5C11\u3002"
        ] }) }),
        /* @__PURE__ */ jsx4(Card, { title: "AIPM \u4E3A\u4EC0\u4E48\u5FC5\u987B\u4EB2\u624B\u7EC3", icon: PenLine, children: /* @__PURE__ */ jsx4("p", { children: '\u4F60\u5C06\u6765\u8981\u4E3A\u6574\u4E2A\u4EA7\u54C1\u5B9A\u4E49\u7CFB\u7EDF Prompt\uFF1A\u5BA2\u670D\u673A\u5668\u4EBA\u7684\u8BED\u6C14\u4E0E\u7EA2\u7EBF\u3001\u5199\u4F5C\u52A9\u624B\u7684\u98CE\u683C\u8FB9\u754C\u3001Agent \u7684\u5224\u65AD\u89C4\u5219\u3002\u5199\u4E0D\u597D Prompt \u7684 PM\uFF0C\u6CA1\u6CD5\u548C\u7B97\u6CD5\u8BA8\u8BBA"\u8FD9\u662F\u6A21\u578B\u95EE\u9898\u8FD8\u662F\u6307\u4EE4\u95EE\u9898"\u2014\u2014\u8FD9\u662F\u9762\u8BD5\u91CC\u6700\u5E38\u89C1\u7684\u73B0\u573A\u6D4B\u8BD5\u3002' }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx4("p", { className: "mb-3 text-sm font-semibold text-zinc-800", children: "\u6838\u5FC3\u6280\u5DE7\uFF08\u6309\u4F7F\u7528\u9891\u7387\u6392\u5E8F\uFF09" }),
        /* @__PURE__ */ jsx4(
          Table,
          {
            head: ["\u6280\u5DE7", "\u600E\u4E48\u505A", "\u9002\u7528\u573A\u666F"],
            rows: [
              ["\u89D2\u8272\u8BBE\u5B9A", "\u5F00\u5934\u7ED9\u6A21\u578B\u8EAB\u4EFD\uFF1A\u4F60\u662F\u8D44\u6DF1\u5BA2\u670D\u4E3B\u7BA1\uFF0C\u8D1F\u8D23\u5904\u7406\u9000\u6B3E\u54A8\u8BE2", "\u51E0\u4E4E\u6240\u6709\u573A\u666F\u7684\u8D77\u70B9"],
              ["\u660E\u786E\u4EFB\u52A1\u4E0E\u7EA6\u675F", "\u4EFB\u52A1\u52A8\u8BCD + \u8FB9\u754C\u6761\u4EF6 + \u7981\u6B62\u4E8B\u9879\uFF0C\u5199\u5F97\u50CF\u7ED9\u5916\u5305\u7684\u9A8C\u6536\u6807\u51C6", "\u6307\u4EE4\u88AB\u300C\u81EA\u7531\u53D1\u6325\u300D\u65F6"],
              ["\u5C11\u6837\u672C\u793A\u4F8B\uFF08Few-shot\uFF09", "\u7ED9 2~3 \u4E2A\u8F93\u5165\u2192\u8F93\u51FA\u7684\u6807\u51C6\u793A\u4F8B\uFF0C\u6BD4\u8BB2\u9053\u7406\u7BA1\u7528", "\u5BF9\u683C\u5F0F/\u98CE\u683C\u8981\u6C42\u4E25\u683C\u65F6"],
              ["\u7ED3\u6784\u5316\u8F93\u51FA", "\u8981\u6C42\u8F93\u51FA JSON/\u8868\u683C/\u56FA\u5B9A\u5B57\u6BB5\uFF0C\u65B9\u4FBF\u7A0B\u5E8F\u89E3\u6790", "\u9700\u8981\u4E0B\u6E38\u7CFB\u7EDF\u6D88\u8D39\u65F6"],
              ["\u601D\u7EF4\u94FE\uFF08CoT\uFF09", "\u52A0\u4E00\u53E5\u300C\u5148\u9010\u6B65\u5206\u6790\u518D\u7ED9\u7ED3\u8BBA\u300D", "\u63A8\u7406\u3001\u6570\u5B66\u3001\u591A\u6B65\u5224\u65AD"],
              ["\u62C6\u89E3\u4EFB\u52A1", "\u590D\u6742\u4EFB\u52A1\u62C6\u6210\u591A\u8F6E/\u591A\u6B65 Prompt \u94FE\uFF08\u6216\u4EA4\u7ED9 Workflow \u7F16\u6392\uFF09", "\u957F\u6D41\u7A0B\u4EFB\u52A1\u8D28\u91CF\u4E0D\u7A33\u65F6"]
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "mt-4", children: /* @__PURE__ */ jsx4(Note, { children: /* @__PURE__ */ jsx4("p", { children: "\u8FED\u4EE3\u5FC3\u6CD5\uFF1APrompt \u662F\u8BD5\u9A8C\u54C1\u4E0D\u662F\u4F5C\u54C1\u3002\u56FA\u5B9A\u6D4B\u8BD5\u96C6 \u2192 \u6539\u4E00\u7248 \u2192 \u8DD1\u4E00\u904D \u2192 \u8BB0\u5F55\u7ED3\u679C\u3002\u6CA1\u6709\u6D4B\u8BD5\u96C6\u7684 Prompt \u4F18\u5316\u90FD\u662F\u5728\u51ED\u611F\u89C9\uFF0C\u8FD9\u53E5\u8BDD\u672C\u8EAB\u5C31\u662F\u9762\u8BD5\u52A0\u5206\u9879\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs4(Section, { kicker: "02 \xB7 \u88C1\u5224", title: "\u8BC4\u6D4B\uFF1A\u7528\u6570\u636E\u5B9A\u4E49\u300C\u597D\u574F\u300D", children: [
      /* @__PURE__ */ jsx4("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: 'AI \u4EA7\u54C1\u7684\u72EC\u7279\u96BE\u9898\uFF1A\u4EA7\u51FA\u662F\u5F00\u653E\u5F0F\u7684\uFF0C\u6CA1\u6709\u552F\u4E00\u6B63\u786E\u7B54\u6848\u3002\u6CA1\u6709\u8BC4\u6D4B\u4F53\u7CFB\uFF0C\u4F60\u5C31\u65E0\u6CD5\u56DE\u7B54"\u8FD9\u7248\u6A21\u578B/Prompt \u5230\u5E95\u6BD4\u4E0A\u4E00\u7248\u597D\u5417"\u2014\u2014\u6240\u6709\u8FED\u4EE3\u90FD\u4F1A\u9000\u5316\u6210\u7384\u5B66\u3002\u8BC4\u6D4B\u662F AIPM \u4E0E\u666E\u901A PM \u62C9\u5F00\u5DEE\u8DDD\u7684\u7B2C\u4E00\u4E2A\u786C\u6280\u80FD\u3002' }),
      /* @__PURE__ */ jsx4("div", { className: "mt-5", children: /* @__PURE__ */ jsx4(
        Steps,
        {
          items: [
            {
              title: "\u7B2C\u4E00\u6B65\uFF1A\u5B9A\u4E49\u8BC4\u4F30\u7EF4\u5EA6",
              desc: "\u5148\u628A\u300C\u597D\u300D\u62C6\u6210\u53EF\u6253\u5206\u7684\u7EF4\u5EA6\u3002\u5982\u5BA2\u670D\u673A\u5668\u4EBA\uFF1A\u51C6\u786E\u6027\u3001\u5B8C\u6574\u6027\u3001\u8BED\u6C14\u5408\u89C4\u3001\u7B80\u6D01\u5EA6\u3002\u7EF4\u5EA6\u6765\u81EA\u4E1A\u52A1\u76EE\u6807\uFF0C\u4E0D\u662F\u6280\u672F\u6587\u6863\u3002"
            },
            {
              title: "\u7B2C\u4E8C\u6B65\uFF1A\u6784\u5EFA\u6D4B\u8BD5\u96C6",
              desc: "\u6536\u96C6 50~200 \u6761\u771F\u5B9E\u6216\u4EFF\u771F\u7684\u95EE\u9898 + \u671F\u671B\u8981\u70B9\uFF08\u4E0D\u4E00\u5B9A\u662F\u552F\u4E00\u7B54\u6848\uFF0C\u53EF\u4EE5\u662F\u300C\u5FC5\u987B\u5305\u542B/\u5FC5\u987B\u4E0D\u51FA\u73B0\u300D\u7684\u68C0\u67E5\u70B9\uFF09\u3002\u8986\u76D6\u957F\u5C3E\uFF1A\u5F02\u5E38\u8F93\u5165\u3001\u8BF1\u5BFC\u6027\u63D0\u95EE\u3001\u8D85\u7EB2\u95EE\u9898\u3002"
            },
            {
              title: "\u7B2C\u4E09\u6B65\uFF1A\u9009\u62E9\u8BC4\u4F30\u65B9\u6CD5",
              desc: "\u89C4\u5219\u53EF\u5224\u7684\u7528\u81EA\u52A8\u6307\u6807\uFF1B\u5F00\u653E\u5F0F\u8D28\u91CF\u7528 LLM-as-a-Judge\uFF08\u5199\u597D\u8BC4\u5206 Prompt\uFF0C\u8BA9\u5F3A\u6A21\u578B\u6309\u7EF4\u5EA6\u6253\u5206\uFF09\uFF1B\u5173\u952E\u7248\u672C\u4E0A\u4EBA\u5DE5\u62BD\u68C0\u6821\u51C6\uFF0C\u9632\u6B62\u88C1\u5224\u504F\u7F6E\u3002"
            },
            {
              title: "\u7B2C\u56DB\u6B65\uFF1A\u5EFA\u7ACB\u57FA\u7EBF\u4E0E\u770B\u677F",
              desc: "\u8BB0\u5F55\u6BCF\u6B21\u6539\u52A8\u7684\u5206\u6570\u53D8\u5316\uFF08Prompt \u7248\u672C\u3001\u6A21\u578B\u7248\u672C\u3001\u68C0\u7D22\u53C2\u6570\uFF09\u3002\u4E0A\u7EBF\u540E\u63A5\u7EBF\u4E0A\u6307\u6807\uFF1A\u91C7\u7EB3\u7387\u3001\u7EA0\u9519\u7387\u3001\u4EBA\u5DE5\u63A5\u7BA1\u7387\u2014\u2014\u79BB\u7EBF\u5206\u6570\u548C\u7EBF\u4E0A\u8868\u73B0\u8981\u5BF9\u5F97\u4E0A\u3002"
            }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx4("div", { className: "mt-4", children: /* @__PURE__ */ jsx4(Note, { children: /* @__PURE__ */ jsx4("p", { children: "LLM \u5F53\u88C1\u5224\u7684\u4E09\u4E2A\u5751\uFF1A\u4F4D\u7F6E\u504F\u597D\uFF08\u503E\u5411\u9009\u7B2C\u4E00\u4E2A\u7B54\u6848\uFF09\u3001\u957F\u5EA6\u504F\u597D\uFF08\u89C9\u5F97\u957F\u7684\u597D\uFF09\u3001\u81EA\u6211\u504F\u597D\uFF08\u504F\u7231\u540C\u5BB6\u65CF\u6A21\u578B\uFF09\u3002\u5BF9\u7B56\uFF1A\u76F2\u6D4B\u6253\u4E71\u987A\u5E8F\u3001\u6309\u7EF4\u5EA6\u62C6\u5206\u6253\u5206\u3001\u5B9A\u671F\u4EBA\u5DE5\u590D\u6838\u6821\u51C6\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs4(Section, { kicker: "03 \xB7 \u8D44\u4EA7", title: "\u77E5\u8BC6\u5E93\u642D\u5EFA\uFF1A\u4ECE RAG \u5230 Wiki \u7684\u6F14\u8FDB", children: [
      /* @__PURE__ */ jsxs4("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx4(Card, { title: "\u6734\u7D20 RAG \u7684\u5929\u82B1\u677F", icon: Database, children: /* @__PURE__ */ jsx4("p", { children: "\u7EAF\u68C0\u7D22\u95EE\u7B54\u7528\u4E45\u4E86\u4F1A\u66B4\u9732\u95EE\u9898\uFF1A\u5207\u7247\u628A\u8868\u683C/\u6D41\u7A0B\u5207\u788E\u5BFC\u81F4\u68C0\u7D22\u4E0D\u51C6\uFF1B\u91CD\u590D\u6587\u6863\u4E92\u76F8\u6253\u67B6\uFF1B\u77E5\u8BC6\u66F4\u65B0\u6CA1\u6709\u7248\u672C\u7BA1\u7406\uFF1B\u7B54\u6848\u8D28\u91CF\u4F9D\u8D56\u6587\u6863\u5199\u4F5C\u8D28\u91CF\uFF0C\u800C\u539F\u59CB\u6587\u6863\u5F80\u5F80\u4E0D\u662F\u4E3A AI \u5199\u7684\u3002" }) }),
        /* @__PURE__ */ jsx4(Card, { title: "\u4E3A\u4EC0\u4E48\u8BF4\u300C\u4ECE RAG \u8D70\u5411 Wiki\u300D", icon: GitBranch, children: /* @__PURE__ */ jsxs4("p", { children: [
          "\u884C\u4E1A\u7684\u65B0\u5171\u8BC6\uFF1A\u4E0E\u5176\u8BA9 AI \u73B0\u573A\u68C0\u7D22\u539F\u59CB\u6587\u6863\uFF0C\u4E0D\u5982\u5148\u628A\u77E5\u8BC6",
          /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u7ED3\u6784\u5316\u3001\u53BB\u91CD\u3001\u6C89\u6DC0\u6210\u9AD8\u8D28\u91CF\u7684\u77E5\u8BC6\u5E95\u5EA7" }),
          "\u2014\u2014\u7C7B\u4F3C\u7EF4\u57FA\u767E\u79D1\u5F0F\u7684\u6761\u76EE\u5316\u77E5\u8BC6\uFF08\u6216\u77E5\u8BC6\u56FE\u8C31\uFF09\uFF0C\u518D\u5728\u5176\u4E0A\u505A\u68C0\u7D22\u4E0E\u751F\u6210\u3002\u77E5\u8BC6\u5E93\u4ECE\u300C\u5B58\u50A8\u300D\u5347\u7EA7\u6210\u300C\u8D44\u4EA7\u8FD0\u8425\u300D\uFF1A\u6709\u4EBA\u7EF4\u62A4\u3001\u6709\u7248\u672C\u3001\u6709\u8D28\u91CF\u5206\u7EA7\u3002Anthropic \u7B49\u516C\u53F8\u4E5F\u5728\u628A\u5185\u90E8\u77E5\u8BC6\u6C89\u6DC0\u4E3A\u6A21\u578B\u53EF\u7A33\u5B9A\u8C03\u7528\u7684\u7ED3\u6784\u5316\u8D44\u4EA7\uFF0C\u601D\u8DEF\u540C\u6E90\u3002"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx4("p", { className: "mb-3 text-sm font-semibold text-zinc-800", children: "\u52A8\u624B\u642D\u4E00\u4E2A\u4F01\u4E1A\u7EA7\u77E5\u8BC6\u95EE\u7B54\uFF08\u53EF\u4F5C\u4E3A\u4F5C\u54C1\u96C6\u9879\u76EE\uFF09" }),
        /* @__PURE__ */ jsx4(
          Steps,
          {
            items: [
              {
                title: "\u9009\u573A\u666F\u4E0E\u8BED\u6599",
                desc: "\u9009\u4E00\u4E2A\u4F60\u719F\u6089\u9886\u57DF\u7684\u516C\u5F00\u6587\u6863\u96C6\uFF08\u5982\u67D0\u5F00\u6E90\u9879\u76EE\u6587\u6863\u3001\u653F\u7B56\u6587\u4EF6\uFF09\uFF0C100~500 \u7BC7\u3002\u6709\u6761\u4EF6\u9009\u5E26\u8868\u683C\u548C\u5C42\u7EA7\u7ED3\u6784\u7684\uFF0C\u96BE\u70B9\u624D\u6709\u542B\u91D1\u91CF\u3002"
              },
              {
                title: "\u5904\u7406\u4E0E\u5207\u7247",
                desc: "\u5199\u6E05\u6D17\u811A\u672C\u53BB\u566A\uFF1B\u6309\u8BED\u4E49\u8FB9\u754C\u5207\u7247\uFF08\u6807\u9898\u5C42\u7EA7\u4F18\u5148\uFF0C\u800C\u975E\u56FA\u5B9A\u5B57\u6570\uFF09\uFF0C\u8868\u683C\u6574\u4F53\u4FDD\u7559\u5E76\u52A0\u63CF\u8FF0\u3002"
              },
              {
                title: "\u5411\u91CF\u5316\u4E0E\u68C0\u7D22\u8C03\u4F18",
                desc: "\u9009 Embedding \u6A21\u578B \u2192 \u5165\u5E93 \u2192 \u5148\u505A\u6734\u7D20\u5411\u91CF\u68C0\u7D22\u6D4B\u57FA\u7EBF\uFF1B\u518D\u5BF9\u6BD4\u6DF7\u5408\u68C0\u7D22\uFF08BM25+\u5411\u91CF\uFF09\u3001Rerank \u540E\u7684\u53EC\u56DE\u6548\u679C\u2014\u2014\u7528\u53EC\u56DE\u7387/\u547D\u4E2D\u7387\u91CF\u5316\u63D0\u5347\u3002"
              },
              {
                title: "\u751F\u6210\u4E0E\u6EAF\u6E90",
                desc: "Prompt \u91CC\u5F3A\u5236\u300C\u4EC5\u57FA\u4E8E\u4EE5\u4E0B\u8D44\u6599\u56DE\u7B54\uFF0C\u5E76\u6807\u6CE8\u51FA\u5904\u7F16\u53F7\u300D\uFF1B\u65E0\u76F8\u5173\u8D44\u6599\u65F6\u660E\u786E\u8BF4\u4E0D\u77E5\u9053\uFF08\u6297\u5E7B\u89C9\u8BBE\u8BA1\uFF09\u3002"
              },
              {
                title: "\u8BC4\u6D4B\u4E0E\u8FED\u4EE3",
                desc: "\u5EFA 50 \u6761\u95EE\u7B54\u6D4B\u8BD5\u96C6\uFF0C\u7528 LLM-as-a-Judge \u6309\u51C6\u786E\u6027/\u6EAF\u6E90\u6B63\u786E\u6027\u6253\u5206\uFF0C\u8BB0\u5F55\u6BCF\u8F6E\u6539\u52A8\u524D\u540E\u5BF9\u6BD4\u3002\u8FD9\u4EFD\u5BF9\u6BD4\u62A5\u544A\u5C31\u662F\u9762\u8BD5\u65F6\u6700\u786C\u7684\u8BC1\u636E\u3002"
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs4(Section, { kicker: "04 \xB7 \u8D26\u672C", title: "AI Coding \u4E0E AI \u5E94\u7528\u7684\u771F\u5B9E\u6210\u672C", children: [
      /* @__PURE__ */ jsxs4("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx4(Card, { title: "AI \u5E94\u7528\u7684\u6210\u672C\u7ED3\u6784", icon: Coins, children: /* @__PURE__ */ jsxs4("ul", { className: "mt-1 space-y-2", children: [
          /* @__PURE__ */ jsxs4("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "Token \u6210\u672C" }),
            "\uFF1A\u6309\u8F93\u5165/\u8F93\u51FA token \u8BA1\u8D39\uFF0C\u957F Prompt\u3001\u957F\u4E0A\u4E0B\u6587\u3001\u591A\u8F6E\u5BF9\u8BDD\u90FD\u4F1A\u653E\u5927\u8D39\u7528\uFF1B\u7F13\u5B58\u4E0E\u6279\u5904\u7406\u53EF\u964D\u672C"
          ] }),
          /* @__PURE__ */ jsxs4("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u68C0\u7D22\u4E0E\u5B58\u50A8" }),
            "\uFF1AEmbedding \u8BA1\u7B97\u3001\u5411\u91CF\u5E93\u3001 rerank \u8C03\u7528"
          ] }),
          /* @__PURE__ */ jsxs4("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u8BC4\u6D4B\u4E0E\u8FD0\u8425" }),
            "\uFF1A\u6301\u7EED\u8BC4\u6D4B\u3001\u4EBA\u5DE5\u590D\u6838\u3001bad case \u8FD0\u8425\u2014\u2014\u7ECF\u5E38\u88AB\u4F4E\u4F30\u7684\u5927\u5934"
          ] }),
          /* @__PURE__ */ jsxs4("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u6A21\u578B\u8FED\u4EE3\u6210\u672C" }),
            "\uFF1A\u6362\u6A21\u578B/\u6539 Prompt \u540E\u56DE\u5F52\u6D4B\u8BD5\u7684\u4EBA\u529B"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx4(Card, { title: "AI Coding \u7684\u8D26\u600E\u4E48\u7B97", icon: Coins, children: /* @__PURE__ */ jsxs4("p", { children: [
          "AI Coding \u5DE5\u5177\uFF08\u8BA2\u9605\u5236\u4E3A\u4E3B\uFF09\u7684\u6210\u672C\u8981\u5BF9\u6BD4\u7684\u662F\u5DE5\u7A0B\u5E08\u65F6\u95F4\uFF1A\u4E00\u6B21\u4EE3\u7801\u751F\u6210\u7684 token \u6210\u672C\u4EE5\u5206\u8BA1\uFF0C\u800C\u8282\u7701\u7684\u6392\u67E5/\u7F16\u5199\u65F6\u95F4\u4EE5\u5C0F\u65F6\u8BA1\u2014\u2014",
          /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u6536\u76CA\u4FA7\u8FDC\u5927\u4E8E\u6210\u672C\u4FA7\uFF0C\u74F6\u9888\u5728\u8D28\u91CF\u4E0E\u4FE1\u4EFB" }),
          "\uFF1A\u751F\u6210\u4EE3\u7801\u7684\u5BA1\u67E5\u6210\u672C\u3001\u9519\u8BEF\u5F15\u5165\u7684\u8FD4\u5DE5\u3001\u5B89\u5168\u5408\u89C4\u98CE\u9669\uFF0C\u624D\u662F\u771F\u6B63\u8981\u7BA1\u7406\u7684\u53D8\u91CF\u3002\u8FD9\u4E5F\u662F AI Coding \u4EA7\u54C1 PM \u7684\u6838\u5FC3\u547D\u9898\uFF1A\u5982\u4F55\u8BA9\u300C\u6562\u76F4\u63A5\u91C7\u7EB3\u300D\u3002"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "mt-4", children: /* @__PURE__ */ jsx4(Note, { children: /* @__PURE__ */ jsx4("p", { children: "\u9762\u8BD5\u5E38\u89C1\u8FFD\u95EE\uFF1A\u4F60\u7684 AI \u529F\u80FD\u600E\u4E48\u5B9A\u4EF7/\u600E\u4E48\u63A7\u6210\u672C\uFF1F\u7B54\u9898\u6846\u67B6\uFF1A\u5355\u4F4D\u7ECF\u6D4E\u6A21\u578B\uFF08\u5355\u6B21\u8C03\u7528\u6210\u672C \xD7 \u7528\u91CF\uFF09\u2192 \u5206\u5C42\u670D\u52A1\uFF08\u7B80\u5355\u8BF7\u6C42\u8DEF\u7531\u5230\u5C0F\u6A21\u578B\uFF09\u2192 \u7F13\u5B58\u590D\u7528 \u2192 \u7528\u8BC4\u6D4B\u8BC1\u660E\u964D\u914D\u4E0D\u964D\u4F53\u9A8C\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs4(Section, { kicker: "05 \xB7 \u5DE5\u5177\u7BB1", title: "\u4E3B\u6D41\u5DE5\u5177\u751F\u6001\u901F\u89C8", children: [
      /* @__PURE__ */ jsx4("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: "\u4E0D\u5FC5\u6837\u6837\u7CBE\u901A\uFF0C\u4F46\u8981\u80FD\u8BF4\u51FA\u6BCF\u7C7B\u5DE5\u5177\u7684\u4EE3\u8868\u9009\u624B\u548C\u4F60\u7528\u8FC7\u54EA\u51E0\u4E2A\u3002\u9762\u8BD5\u804A\u5DE5\u5177\u65F6\uFF0C\u91CD\u70B9\u8BB2\u4F60\u7528\u5B83\u505A\u4E86\u4EC0\u4E48\u3001\u9047\u5230\u4EC0\u4E48\u5751\uFF0C\u800C\u4E0D\u662F\u80CC\u540D\u5355\u3002" }),
      /* @__PURE__ */ jsx4("div", { className: "mt-5", children: /* @__PURE__ */ jsx4(
        Table,
        {
          head: ["\u7C7B\u522B", "\u4EE3\u8868\u5DE5\u5177", "\u4E00\u53E5\u8BDD\u8BA4\u77E5"],
          rows: [
            ["\u6A21\u578B API", "OpenAI\u3001Anthropic\u3001Google\u3001\u963F\u91CC\u901A\u4E49\u3001DeepSeek\u3001Kimi\u3001\u8C46\u5305", "\u6700\u5E38\u7528\u7684\u53D1\u52A8\u673A\uFF1B\u56FD\u5185\u51FA\u6D77\u9009\u578B\u65F6\u6210\u672C\u4E0E\u5408\u89C4\u662F\u5173\u952E\u53D8\u91CF"],
            ["Agent / \u7F16\u6392\u6846\u67B6", "LangChain\u3001LangGraph\u3001LlamaIndex\u3001Dify\u3001Coze", "\u628A\u6A21\u578B\u3001\u5DE5\u5177\u3001\u8BB0\u5FC6\u62FC\u6210\u5E94\u7528\u7684\u811A\u624B\u67B6\uFF1B\u4E09\u8005\u9009\u578B\u5BF9\u6BD4\u89C1\u6982\u5FF5\u7BC7\u7B2C 10 \u8282"],
            ["\u5411\u91CF\u6570\u636E\u5E93", "Milvus\u3001Pinecone\u3001Qdrant\u3001PGVector", "RAG \u7684\u4ED3\u5E93\uFF1B\u9009\u578B\u770B\u89C4\u6A21\u3001\u8FD0\u7EF4\u6210\u672C\u4E0E\u6DF7\u5408\u68C0\u7D22\u652F\u6301"],
            ["AI Coding", "Cursor\u3001Claude Code\u3001GitHub Copilot\u3001Windsurf", "PM \u4E5F\u8BE5\u4EB2\u81EA\u7528\uFF1A\u7406\u89E3 AI \u534F\u4F5C\u7684\u4EA4\u4E92\u8303\u5F0F\uFF0C\u672C\u8EAB\u5C31\u662F\u4EA7\u54C1\u7814\u7A76"],
            ["\u8BC4\u6D4B\u5DE5\u5177", "Ragas\u3001DeepEval\u3001OpenAI Evals", "\u628A\u8BC4\u6D4B\u6D41\u6C34\u7EBF\u81EA\u52A8\u5316\uFF1B\u81EA\u5EFA\u811A\u672C\u4E5F\u5B8C\u5168\u53EF\u884C"],
            ["\u6587\u6863\u4E0E\u77E5\u8BC6", "\u98DE\u4E66/\u8BED\u96C0\u77E5\u8BC6\u5E93 + \u81EA\u5EFA RAG", "\u5148\u6CBB\u7406\u5185\u5BB9\uFF0C\u518D\u4E0A\u68C0\u7D22\u2014\u2014\u987A\u5E8F\u53CD\u4E86\u6548\u679C\u5FC5\u7136\u5DEE"]
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs4(Section, { kicker: "06 \xB7 \u8D28\u91CF", title: "\u6548\u679C\u4E09\u8FDE\uFF1A\u53EC\u56DE\u7387\u3001\u62D2\u7B54\u8FB9\u754C\u4E0E\u5F15\u7528\u6EAF\u6E90", children: [
      /* @__PURE__ */ jsxs4("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs4(Card, { title: "\u53EC\u56DE\u7387\uFF1A\u6F0F\u6597\u7684\u7B2C\u4E00\u5173", icon: Database, children: [
          /* @__PURE__ */ jsxs4("p", { children: [
            "\u53EC\u56DE\u7387 = \u8BE5\u88AB\u627E\u5230\u7684\u8D44\u6599\u91CC\uFF0C\u6709\u591A\u5C11\u771F\u7684\u88AB\u68C0\u7D22\u51FA\u6765\u4E86\u3002\u5B83\u662F\u6574\u6761 RAG \u94FE\u8DEF\u7684",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u4E0A\u9650\u5F00\u5173" }),
            "\uFF1A\u53EC\u56DE\u6F0F\u4E86\uFF0C\u540E\u9762 rerank \u518D\u51C6\u3001\u6A21\u578B\u518D\u806A\u660E\u4E5F\u6551\u4E0D\u56DE\u6765\u2014\u2014\u8D44\u6599\u6839\u672C\u6CA1\u5230\u6A21\u578B\u624B\u91CC\u3002\u8BB0\u4F4F\u8FD9\u53E5\u8BDD\uFF1A",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u53EC\u56DE\u5B9A\u4E0A\u9650\uFF0C\u751F\u6210\u5B9A\u4E0B\u9650" }),
            "\u3002"
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "mt-2", children: "\u600E\u4E48\u6D4B\uFF1A\u6784\u9020\u6D4B\u8BD5\u96C6\uFF0C\u6BCF\u9898\u6807\u6CE8\u300C\u8BE5\u88AB\u53EC\u56DE\u7684\u76EE\u6807\u5207\u7247\u300D\uFF0C\u8DD1 recall@k\uFF08\u76EE\u6807\u5207\u7247\u662F\u5426\u8FDB\u4E86 top-k\uFF09\u3002\u600E\u4E48\u63D0\uFF1A\u5207\u7247\u8D28\u91CF\uFF08\u6700\u5E38\u88AB\u4F4E\u4F30\uFF09\u3001\u6DF7\u5408\u68C0\u7D22\uFF08\u5411\u91CF+\u5173\u952E\u8BCD BM25\uFF09\u3001query \u6539\u5199\u4E0E\u591A\u8DEF\u53EC\u56DE\u3002\u6CE8\u610F rerank \u53EA\u63D0\u5347\u6392\u5E8F\u7CBE\u5EA6\uFF0C\u6551\u4E0D\u4E86\u6839\u672C\u6CA1\u53EC\u56DE\u7684\u6F0F\u7F51\u4E4B\u9C7C\u3002" })
        ] }),
        /* @__PURE__ */ jsxs4(Card, { title: "\u62D2\u7B54\u8FB9\u754C\uFF1A\u4E09\u6761\u7EBF\uFF0C\u4E00\u6761\u90FD\u4E0D\u80FD\u542B\u7CCA", icon: ClipboardCheck, children: [
          /* @__PURE__ */ jsxs4("ul", { className: "mt-1 space-y-2", children: [
            /* @__PURE__ */ jsxs4("li", { children: [
              "\xB7 ",
              /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u9886\u57DF\u7EBF" }),
              "\uFF1A\u95EE\u9898\u4E0D\u5728\u77E5\u8BC6\u5E93\u8303\u56F4\u5185 \u2192 \u660E\u8BF4\u300C\u6211\u4E0D\u77E5\u9053\u300D\uFF0C\u7EDD\u4E0D\u786C\u7F16"
            ] }),
            /* @__PURE__ */ jsxs4("li", { children: [
              "\xB7 ",
              /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u7F6E\u4FE1\u7EBF" }),
              "\uFF1A\u68C0\u7D22\u76F8\u5173\u5EA6\u5206\u6570\u4F4E\u4E8E\u9608\u503C \u2192 \u62D2\u7B54\u6216\u8F6C\u4EBA\u5DE5\uFF0C\u800C\u975E\u62FF\u5F31\u76F8\u5173\u8D44\u6599\u786C\u7B54"
            ] }),
            /* @__PURE__ */ jsxs4("li", { children: [
              "\xB7 ",
              /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u98CE\u9669\u7EBF" }),
              "\uFF1A\u533B\u7597/\u6CD5\u5F8B/\u8D44\u91D1\u7B49\u9AD8\u5371\u95EE\u9898 \u2192 \u56FA\u5B9A\u8BDD\u672F + \u8F6C\u4EBA\u5DE5\u901A\u9053"
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("p", { className: "mt-2", children: [
            "\u8BA4\u77E5\u6821\u51C6\uFF1A\u62D2\u7B54\u4E0D\u662F\u5931\u8D25\u2014\u2014",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u4E00\u6B21\u5E7B\u89C9\u7684\u4EE3\u4EF7\u8FDC\u5927\u4E8E\u5341\u6B21\u62D2\u7B54" }),
            "\u3002\u4F46\u62D2\u7B54\u4E5F\u8981\u8BBE\u8BA1\uFF1A\u7ED9\u539F\u56E0\u3001\u7ED9\u51FA\u5904\u3001\u7ED9\u4E0B\u4E00\u6B65\uFF08\u8F6C\u4EBA\u5DE5/\u6362\u95EE\u6CD5\uFF09\uFF0C\u5E76\u76D1\u63A7\u4E24\u4E2A\u6307\u6807\u7684\u6B64\u6D88\u5F7C\u957F\uFF1A\u62D2\u7B54\u7387\u4E0E\u8BEF\u62D2\u7387\uFF08\u628A\u8BE5\u7B54\u7684\u4E5F\u62D2\u4E86\uFF09\u3002"
          ] })
        ] }),
        /* @__PURE__ */ jsxs4(Card, { title: "\u5F15\u7528\u6EAF\u6E90\uFF1A\u4FE1\u4EFB\u662F\u5C55\u793A\u51FA\u6765\u7684", icon: GitBranch, children: [
          /* @__PURE__ */ jsx4("p", { children: "\u505A\u6CD5\u5206\u4E09\u5C42\uFF1A\u5165\u5E93\u65F6\u6BCF\u4E2A\u5207\u7247\u5E26\u4E0A\u5143\u6570\u636E\uFF08\u6587\u6863\u540D\u3001\u7AE0\u8282\u3001\u66F4\u65B0\u65F6\u95F4\uFF09\uFF1B\u751F\u6210\u65F6 Prompt \u5F3A\u5236\u300C\u6BCF\u4E2A\u8BBA\u70B9\u6807\u6CE8\u6765\u6E90\u7F16\u53F7 [1][2]\u300D\uFF1B\u524D\u7AEF\u628A\u7F16\u53F7\u505A\u6210\u53EF\u70B9\u51FB\u7684\u5F15\u7528\u6807\u8BB0\uFF0C\u8DF3\u8F6C\u5230\u539F\u6587\u5BF9\u5E94\u4F4D\u7F6E\u3002" }),
          /* @__PURE__ */ jsx4("p", { className: "mt-2", children: "\u4E09\u4E2A\u4EF7\u503C\uFF1A\u7528\u6237\u6562\u4FE1\uFF08\u80FD\u6838\u5BF9\uFF09\u3001\u51FA\u9519\u80FD\u8FFD\u8D23\uFF08\u5B9A\u4F4D\u5230\u5177\u4F53\u6587\u6863\u7248\u672C\uFF09\u3001\u8FD0\u8425\u80FD\u4FEE\uFF08\u54EA\u7BC7\u6587\u6863\u5728\u8BEF\u5BFC\u4E00\u76EE\u4E86\u7136\uFF09\u3002\u4E00\u4E2A\u5751\uFF1A\u6A21\u578B\u53EF\u80FD\u6807\u9519\u51FA\u5904\u7F16\u53F7\uFF0C\u8981\u5B9A\u671F\u62BD\u68C0\u300C\u5F15\u7528-\u539F\u6587\u300D\u4E00\u81F4\u6027\uFF0C\u8FD9\u4E5F\u662F\u8BC4\u6D4B\u96C6\u91CC\u8BE5\u6709\u7684\u4E00\u7C7B\u9898\u3002" })
        ] }),
        /* @__PURE__ */ jsxs4(Card, { title: "\u591A\u6A21\u6001\u6587\u6863\uFF1A\u8868\u683C\u3001\u56FE\u7247\u3001\u626B\u63CF\u4EF6\u600E\u4E48\u529E", icon: Boxes, children: [
          /* @__PURE__ */ jsxs4("p", { children: [
            "\u8868\u683C\uFF1A",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u6574\u4F53\u4FDD\u7559\u4E0D\u62C6\u5F00" }),
            "\uFF0C\u8F6C\u6210 Markdown \u6216 HTML \u8868\u683C\u4FDD\u4F4F\u884C\u5217\u7ED3\u6784\uFF0C\u5207\u7247\u65F6\u52A0\u4E00\u6BB5\u6587\u5B57\u8BF4\u660E\u300C\u8FD9\u662F\u5173\u4E8E\u4EC0\u4E48\u7684\u8868\u300D\u3002\u56FE\u7247\u4E0E\u626B\u63CF\u4EF6\u4E24\u6761\u8DEF\uFF1AOCR \u8F6C\u7EAF\u6587\u672C\uFF08\u4FBF\u5B9C\uFF0C\u4F46\u56FE\u8868\u4FE1\u606F\u5168\u4E22\uFF09\uFF1B\u6216 VLM \u76F4\u63A5\u8BFB\u56FE\u7406\u89E3\uFF08\u8D35\uFF0C\u4F46\u80FD\u56DE\u7B54\u300C\u56FE 3 \u7684\u8D8B\u52BF\u662F\u4EC0\u4E48\u300D\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "mt-2", children: "\u6298\u4E2D\u65B9\u6848\u4E5F\u5E38\u7528\uFF1A\u7ED9\u6BCF\u5F20\u56FE\u751F\u6210\u4E00\u6BB5 caption\uFF08\u56FE\u8BF4\uFF09\u5165\u5E93\uFF0C\u68C0\u7D22\u547D\u4E2D caption \u540E\u518D\u628A\u539F\u56FE\u5582\u7ED9 VLM \u4F5C\u7B54\u3002\u5224\u65AD\u503C\u4E0D\u503C\u5F97\u4E0A VLM\uFF1A\u770B\u4F60\u5E93\u91CC\u56FE\u8868\u5BC6\u5EA6\u2014\u2014\u7814\u62A5\u3001PPT\u3001\u4E13\u5229\u56FE\u7EB8\u7C7B\u503C\u5F97\uFF0C\u7EAF\u6587\u5B57\u5236\u5EA6\u6587\u6863\u4E0D\u503C\u5F97\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "mt-4", children: /* @__PURE__ */ jsxs4("div", { className: "rounded-xl border border-zinc-200 bg-white p-5", children: [
        /* @__PURE__ */ jsx4("p", { className: "text-sm font-semibold text-zinc-800", children: "RAG \u6548\u679C\u6F0F\u6597\uFF1A\u6BCF\u4E00\u5C42\u90FD\u5728\u300C\u6F0F\u300D\uFF0C\u53EC\u56DE\u7387\u91CF\u7684\u662F\u7B2C\u4E00\u9053" }),
        /* @__PURE__ */ jsx4("div", { className: "mt-4 space-y-2", children: [
          ["\u77E5\u8BC6\u5E93\u5168\u90E8\u5207\u7247\uFF08\u5982 5000 \u6BB5\uFF09", "100%", "bg-zinc-100 text-zinc-700"],
          ["\u521D\u6B65\u53EC\u56DE top-50\uFF08\u5411\u91CF+\u5173\u952E\u8BCD\uFF09", "62%", "bg-indigo-50 text-indigo-700"],
          ["Rerank \u91CD\u6392 top-5", "34%", "bg-indigo-100 text-indigo-800"],
          ["\u585E\u8FDB Prompt \u7684\u53C2\u8003\u8D44\u6599", "18%", "bg-indigo-200 text-indigo-900"],
          ["\u6700\u7EC8\u7B54\u6848\uFF08\u53EA\u80FD\u57FA\u4E8E\u8FD9\u51E0\u6BB5\uFF09", "8%", "bg-indigo-500 text-white"]
        ].map(([label, w, cls]) => /* @__PURE__ */ jsx4("div", { className: `rounded-lg px-3 py-2 text-[12px] font-medium ${cls}`, style: { width: w }, children: label }, label)) }),
        /* @__PURE__ */ jsx4("p", { className: "mt-3 text-[12px] leading-relaxed text-zinc-500", children: "\u76EE\u6807\u5207\u7247\u5982\u679C\u7B2C\u4E00\u5173\u5C31\u6CA1\u8FDB top-50\uFF0C\u540E\u9762\u51E0\u5C42\u518D\u597D\u4E5F\u63A5\u89E6\u4E0D\u5230\u5B83\u2014\u2014\u8FD9\u5C31\u662F\u300C\u53EC\u56DE\u5B9A\u4E0A\u9650\u300D\u7684\u56FE\u793A\u3002recall@k \u91CF\u7684\u6B63\u662F\u7B2C\u4E00\u9053\u95F8\u53E3\u7684\u6F0F\u7F51\u7387\uFF1BRerank \u53EA\u80FD\u8BA9\u300C\u5DF2\u635E\u4E0A\u6765\u7684\u300D\u6392\u5F97\u66F4\u51C6\uFF0C\u635E\u4E0D\u4E0A\u6765\u7684\u5B83\u65E0\u80FD\u4E3A\u529B\u3002" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs4(Section, { kicker: "07 \xB7 \u5DE5\u7A0B", title: "\u5207\u7247\u3001\u89E6\u53D1\u4E0E\u5DE5\u5177\u63CF\u8FF0\uFF1A\u51B3\u5B9A\u6548\u679C\u7684\u810F\u6D3B", children: [
      /* @__PURE__ */ jsxs4("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs4(Card, { title: "\u77E5\u8BC6\u6E05\u6D17\u4E0E\u5207\u7247\uFF1A\u600E\u4E48\u505A\u3001\u600E\u4E48\u5224\u65AD\u597D\u4E0D\u597D", icon: Database, children: [
          /* @__PURE__ */ jsxs4("p", { children: [
            "\u6E05\u6D17\u52A8\u4F5C\u6E05\u5355\uFF1A\u53BB\u9875\u7709\u9875\u811A\u3001\u53BB\u76EE\u5F55\u6C34\u5370\u3001OCR \u7EA0\u9519\u3001\u5168\u5E93\u53BB\u91CD\u3001\u8FD8\u539F\u6807\u9898\u5C42\u7EA7\u4E0E\u5217\u8868\u7ED3\u6784\u3002\u5207\u7247\u4E09\u79CD\u7B56\u7565\uFF1A",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u56FA\u5B9A\u957F\u5EA6+\u91CD\u53E0" }),
            "\uFF08\u7B80\u5355\u4F46\u4F1A\u62E6\u8170\u65A9\u65AD\u8BED\u4E49\uFF09\u3001",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u6309\u6807\u9898\u9012\u5F52\u5207" }),
            "\uFF08\u4E3B\u6D41\u505A\u6CD5\uFF0C\u987A\u7740\u6587\u6863\u7ED3\u6784\u8D70\uFF09\u3001",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u8BED\u4E49\u5207\u7247" }),
            "\uFF08\u6309 Embedding \u76F8\u4F3C\u5EA6\u627E\u8FB9\u754C\uFF0C\u6548\u679C\u597D\u4F46\u8D35\uFF09\u3002\u5207\u7247\u592A\u5927\u7A00\u91CA\u68C0\u7D22\u7CBE\u5EA6\uFF0C\u592A\u5C0F\u65AD\u7AE0\u53D6\u4E49\u3002"
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "mt-2", children: "\u600E\u4E48\u5224\u65AD\u597D\u4E0D\u597D\u2014\u2014\u522B\u62CD\u8111\u888B\uFF0C\u4E24\u62DB\u91CF\u5316\uFF1A\u8089\u773C\u62BD\u770B 20 \u4E2A\u5207\u7247\u7684\u300C\u65AD\u4E49\u7387\u300D\uFF08\u6709\u591A\u5C11\u7247\u6BB5\u79BB\u5F00\u4E0A\u4E0B\u6587\u8BFB\u4E0D\u61C2\uFF09\uFF1B\u66F4\u91CD\u8981\u7684\u662F\u5EFA\u53EC\u56DE\u6D4B\u8BD5\u96C6\uFF0C\u7528 recall@k \u6570\u5B57\u8BF4\u8BDD\uFF0C\u6539\u4E00\u6B21\u5207\u7247\u7B56\u7565\u5C31\u91CD\u6D4B\u4E00\u6B21\u3002\u8FD9\u6B63\u662F\u4F60 RAG \u8BC4\u6D4B\u5B9E\u9A8C\u5BA4 B \u7EC4\u5B9E\u9A8C\uFF08512\u21921024\uFF09\u5728\u91CF\u5316\u7684\u4E8B\u3002" })
        ] }),
        /* @__PURE__ */ jsxs4(Card, { title: "Workflow \u8FD8\u662F Agent\uFF1A\u51B3\u7B56\u8FB9\u754C\u7684\u5224\u65AD\u6811", icon: GitBranch, children: [
          /* @__PURE__ */ jsxs4("p", { children: [
            "\u5224\u65AD\u987A\u5E8F\uFF1A\u6B65\u9AA4\u80FD\u5426\u4E8B\u5148\u679A\u4E3E\uFF1F\u5BB9\u9519\u8981\u6C42\u9AD8\u4E0D\u9AD8\uFF1F",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u8DEF\u5F84\u56FA\u5B9A+\u96F6\u5BB9\u9519 \u2192 Workflow" }),
            "\uFF08\u62A5\u9500\u5BA1\u6279\u3001\u56FA\u5B9A\u6D41\u7A0B\u7684\u5BA2\u670D\u5DE5\u5355\uFF09\uFF1B",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u8DEF\u5F84\u5F00\u653E+\u53EF\u8BD5\u9519 \u2192 Agent" }),
            "\uFF08\u300C\u5E2E\u6211\u8C03\u7814\u8FD9\u4E2A\u7ADE\u5BF9\u300D\uFF09\u3002\u62FF\u4E0D\u51C6\u5C31\u6DF7\u5408\uFF1A\u4E3B\u5E72 Workflow \u4FDD\u8BC1\u53EF\u63A7\u515C\u5E95\uFF0C\u53F6\u5B50\u8282\u70B9\u653E Agent \u5904\u7406\u5F00\u653E\u5B50\u4EFB\u52A1\u3002"
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "mt-2", children: "\u8BC4\u4F30\u53E3\u5F84\u4E5F\u4E0D\u540C\uFF1AWorkflow \u770B\u5B8C\u6210\u7387\u4E0E\u6BCF\u6B65\u8017\u65F6\uFF08\u786E\u5B9A\u6027\u7CFB\u7EDF\uFF09\uFF1BAgent \u770B\u4EFB\u52A1\u6210\u529F\u7387\u66F2\u7EBF\u3001\u5E73\u5747\u6B65\u6570\u3001\u4EBA\u5DE5\u63A5\u7BA1\u7387\uFF08\u6982\u7387\u6027\u7CFB\u7EDF\uFF09\u3002\u9762\u8BD5\u88AB\u95EE\u300C\u8FD9\u4E2A\u573A\u666F\u7528 Agent \u8FD8\u662F Workflow\u300D\uFF0C\u5148\u628A\u8FD9\u4E24\u4E2A\u95EE\u9898\u629B\u56DE\u53BB\uFF0C\u5C31\u662F\u4E13\u4E1A\u7B54\u6848\u3002" })
        ] }),
        /* @__PURE__ */ jsxs4(Card, { title: "Skill / \u5DE5\u4F5C\u6D41\u7684\u89E6\u53D1\u6761\u4EF6\uFF1Adescription \u5C31\u662F\u89E6\u53D1\u5668", icon: PenLine, children: [
          /* @__PURE__ */ jsxs4("p", { children: [
            "\u89E6\u53D1\u672C\u8D28\u662F\u8DEF\u7531\u95EE\u9898\uFF1A\u7528\u6237\u8FD9\u53E5\u8BDD\u8BE5\u4E0D\u8BE5\u8FDB\u8FD9\u4E2A Skill\uFF1F\u4E09\u79CD\u5B9E\u73B0\uFF1A\u89C4\u5219\u5173\u952E\u8BCD\uFF08\u5FEB\u4F46\u8106\uFF09\u3001\u610F\u56FE\u5206\u7C7B\u6A21\u578B\uFF08\u51C6\u4F46\u8981\u8BAD\uFF09\u3001LLM \u5224\u522B\uFF08\u7075\u6D3B\u4F46\u8981\u9632\u8BEF\u5224\uFF09\u3002\u65E0\u8BBA\u54EA\u79CD\uFF0C",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "Skill \u7684 description \u6587\u672C\u672C\u8EAB\u5C31\u662F\u8DEF\u7531\u5668\u7684\u5224\u65AD\u4F9D\u636E" }),
            "\u2014\u2014\u5199\u5F97\u597D\u4E0D\u597D\u76F4\u63A5\u51B3\u5B9A\u89E6\u53D1\u51C6\u4E0D\u51C6\u3002"
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "mt-2", children: "\u76D1\u63A7\u4E24\u4E2A\u6307\u6807\uFF1A\u8BEF\u89E6\u53D1\u7387\uFF08\u4E0D\u8BE5\u6765\u7684\u8FDB\u6765\u4E86\uFF0C\u6D6A\u8D39\u8C03\u7528\u8FD8\u62A2\u7B54\uFF09\u4E0E\u6F0F\u89E6\u53D1\u7387\uFF08\u8BE5\u6765\u7684\u6CA1\u6765\uFF0C\u7528\u6237\u6389\u8FDB\u515C\u5E95\uFF09\u3002\u4E0A\u7EBF\u524D\u7528\u300C\u8FB9\u754C\u95EE\u6CD5\u6D4B\u8BD5\u96C6\u300D\u9A8C\u8BC1\uFF1A\u4E13\u95E8\u6784\u9020\u90A3\u4E9B\u5904\u5728\u4E24\u4E2A Skill \u4EA4\u754C\u5904\u7684\u95EE\u6CD5\u3002" })
        ] }),
        /* @__PURE__ */ jsxs4(Card, { title: "\u5DE5\u5177\u63CF\u8FF0\u600E\u4E48\u5199\uFF0C\u6A21\u578B\u624D\u4E0D\u4F1A\u9519\u8C03", icon: Wrench, children: [
          /* @__PURE__ */ jsxs4("p", { children: [
            "\u6A21\u578B\u9009\u5DE5\u5177\u65F6\u53EA\u770B\u4F60\u7684 name \u548C description\u2014\u2014\u8FD9\u662F\u5B83\u552F\u4E00\u7684\u300C\u62DB\u8058\u542F\u4E8B\u300D\u3002\u5199\u6CD5\u56DB\u8981\u7D20\uFF1A",
            /* @__PURE__ */ jsx4("span", { className: "font-semibold text-zinc-800", children: "\u4F55\u65F6\u7528 + \u4F55\u65F6\u4E0D\u7528 + \u53C2\u6570\u7EA6\u675F + \u8FD4\u56DE\u4EC0\u4E48" }),
            "\u3002name \u7528\u52A8\u8BCD\u5F00\u5934\uFF08query_weather \u800C\u975E weather\uFF09\u3002"
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "mt-3 rounded-lg bg-zinc-50 p-3 text-[12px] leading-relaxed text-zinc-600", children: [
            /* @__PURE__ */ jsx4("p", { className: "font-semibold text-zinc-700", children: "\u53CD\u4F8B vs \u6B63\u4F8B" }),
            /* @__PURE__ */ jsx4("p", { className: "mt-1", children: "\u2717 \u300C\u67E5\u8BE2\u5929\u6C14\u300D\u2014\u2014\u6A21\u578B\u53EF\u80FD\u5728\u7528\u6237\u8BF4\u300C\u4ECA\u5929\u771F\u51B7\u300D\u65F6\u4E5F\u89E6\u53D1" }),
            /* @__PURE__ */ jsx4("p", { className: "mt-1", children: "\u2713 \u300C\u67E5\u8BE2\u672A\u6765 7 \u5929\u5929\u6C14\u9884\u62A5\u3002\u4EC5\u5728\u7528\u6237\u660E\u786E\u8981\u6C42\u67E5\u5929\u6C14\u65F6\u8C03\u7528\uFF1B\u4E0D\u56DE\u7B54\u5386\u53F2\u5929\u6C14\uFF1Bcity \u4E3A\u5FC5\u586B\u57CE\u5E02\u540D\uFF1B\u8FD4\u56DE\u9010\u65E5\u6E29\u5EA6\u4E0E\u964D\u6C34\u300D" })
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "mt-3 text-[14px] leading-relaxed text-zinc-600", children: "\u8FDB\u9636\u4E09\u6761\uFF1A\u529F\u80FD\u91CD\u53E0\u7684\u5DE5\u5177\u5728\u63CF\u8FF0\u91CC\u5199\u660E\u4E92\u65A5\u8FB9\u754C\uFF1B\u53C2\u6570\u7ED9 1~2 \u4E2A\u8C03\u7528\u793A\u4F8B\uFF08few-shot\uFF09\uFF1B\u4E0A\u7EBF\u524D\u8DD1\u4E00\u904D\u300C\u9519\u8C03\u6D4B\u8BD5\u96C6\u300D\u2014\u2014\u6545\u610F\u8BF4\u5BB9\u6613\u8BEF\u89E3\u7684\u8BDD\uFF0C\u770B\u6A21\u578B\u4F1A\u4E0D\u4F1A\u4E71\u8C03\u3002Skill \u5DF2\u662F\u4F01\u4E1A\u843D\u5730\u521A\u9700\uFF0C\u8FD9\u4EFD\u63CF\u8FF0\u5C31\u662F\u4F60\u7684\u63A5\u53E3\u5951\u7EA6\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "mt-4", children: /* @__PURE__ */ jsxs4("div", { className: "rounded-xl border border-zinc-200 bg-white p-5", children: [
        /* @__PURE__ */ jsx4("p", { className: "text-sm font-semibold text-zinc-800", children: "Workflow \u8FD8\u662F Agent\uFF1A\u4E24\u4E2A\u95EE\u9898\u7684\u5224\u65AD\u6811" }),
        /* @__PURE__ */ jsxs4("div", { className: "mt-4 grid gap-2 text-[12px] font-medium md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs4("div", { className: "rounded-lg border border-zinc-200 p-3", children: [
            /* @__PURE__ */ jsx4("p", { className: "text-zinc-800", children: "\u95EE\u9898 1\uFF1A\u4EFB\u52A1\u6B65\u9AA4\u80FD\u4E8B\u5148\u679A\u4E3E\u5417\uFF1F" }),
            /* @__PURE__ */ jsxs4("div", { className: "mt-2 space-y-1.5 text-zinc-600", children: [
              /* @__PURE__ */ jsx4("p", { children: "\u80FD\uFF08\u6D41\u7A0B\u56FA\u5B9A\uFF09\u2192 \u8FDB\u5165\u95EE\u9898 2" }),
              /* @__PURE__ */ jsxs4("p", { children: [
                "\u4E0D\u80FD\uFF08\u8DEF\u5F84\u5F00\u653E\uFF09\u2192 ",
                /* @__PURE__ */ jsx4("span", { className: "rounded bg-indigo-50 px-1.5 py-0.5 text-indigo-700", children: "\u7528 Agent" }),
                "\uFF0C\u5982\u300C\u5E2E\u6211\u8C03\u7814\u8FD9\u4E2A\u7ADE\u5BF9\u300D"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "rounded-lg border border-zinc-200 p-3", children: [
            /* @__PURE__ */ jsx4("p", { className: "text-zinc-800", children: "\u95EE\u9898 2\uFF1A\u5BB9\u9519\u8981\u6C42\u9AD8\u5417\uFF1F" }),
            /* @__PURE__ */ jsxs4("div", { className: "mt-2 space-y-1.5 text-zinc-600", children: [
              /* @__PURE__ */ jsxs4("p", { children: [
                "\u96F6\u5BB9\u9519\uFF08\u94B1\u3001\u5408\u89C4\uFF09\u2192 ",
                /* @__PURE__ */ jsx4("span", { className: "rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700", children: "\u7528 Workflow" }),
                "\uFF0C\u5982\u62A5\u9500\u5BA1\u6279"
              ] }),
              /* @__PURE__ */ jsxs4("p", { children: [
                "\u53EF\u8BD5\u9519 \u2192 ",
                /* @__PURE__ */ jsx4("span", { className: "rounded bg-indigo-50 px-1.5 py-0.5 text-indigo-700", children: "\u7528 Agent" }),
                "\uFF0C\u5931\u8D25\u53EF\u91CD\u8BD5"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx4("p", { className: "mt-3 text-[12px] leading-relaxed text-zinc-500", children: "\u62FF\u4E0D\u51C6\u7684\u6DF7\u5408\u573A\u666F \u2192 \u4E3B\u5E72 Workflow\uFF08\u4FDD\u8BC1\u53EF\u63A7\u4E0E\u515C\u5E95\uFF09+ \u53F6\u5B50\u8282\u70B9 Agent\uFF08\u5904\u7406\u5F00\u653E\u5B50\u4EFB\u52A1\uFF09\u3002\u8FD9\u662F\u4F01\u4E1A\u843D\u5730\u6700\u5E38\u89C1\u7684\u5F62\u6001\u3002" })
      ] }) })
    ] })
  ] });
}

// src/pages/Industry.jsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function Industry() {
  return /* @__PURE__ */ jsxs5(Layout, { children: [
    /* @__PURE__ */ jsx5(
      PageHeader,
      {
        eyebrow: "\u884C\u4E1A\u7BC7",
        title: "\u4EA7\u4E1A\u5750\u6807\u7CFB",
        desc: "\u804A\u884C\u4E1A\u662F AIPM \u9762\u8BD5\u7684\u5FC5\u8003\u9898\u3002\u4F60\u4E0D\u9700\u8981\u77E5\u9053\u6240\u6709\u7EC6\u8282\uFF0C\u4F46\u8981\u6709\u81EA\u5DF1\u7684\u5750\u6807\u7CFB\uFF1A\u6A21\u578B\u516C\u53F8\u683C\u5C40\u600E\u4E48\u770B\u3001AI \u4EA7\u54C1\u7ECF\u5386\u4E86\u51E0\u6CE2\u5F62\u6001\u3001\u5404\u5BB6\u5B9E\u8DF5\u5230\u4E86\u4EC0\u4E48\u6C34\u5E73\u3001\u524D\u6CBF\u6B63\u5728\u5543\u54EA\u4E9B\u786C\u9AA8\u5934\u3002"
      }
    ),
    /* @__PURE__ */ jsxs5(Section, { kicker: "01 \xB7 \u683C\u5C40", title: "\u4E3B\u6D41\u6A21\u578B\u516C\u53F8\u7684\u53D1\u5C55\u683C\u5C40", children: [
      /* @__PURE__ */ jsxs5("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: [
        "\u7406\u89E3\u6A21\u578B\u516C\u53F8\u683C\u5C40\u7684\u5173\u952E\u4E0D\u662F\u80CC\u540D\u5355\uFF0C\u800C\u662F\u770B\u61C2",
        /* @__PURE__ */ jsx5("span", { className: "font-semibold text-zinc-800", children: "\u4E09\u6761\u8DEF\u7EBF\u7684\u5206\u5316" }),
        "\uFF1A\u95ED\u6E90\u51B2\u80FD\u529B\u4E0A\u9650\u3001\u5F00\u6E90\u6362\u751F\u6001\u4F4D\u3001\u573A\u666F\u7ED1\u5B9A\u627E\u73B0\u91D1\u6D41\u3002\u540C\u4E00\u4E2A\u6A21\u578B\u80FD\u529B\uFF0C\u8D70\u4E0D\u540C\u8DEF\u7EBF\u7684\u516C\u53F8\u7684\u5546\u4E1A\u5316\u65B9\u5F0F\u5B8C\u5168\u4E0D\u540C\u2014\u2014\u8FD9\u76F4\u63A5\u51B3\u5B9A\u4F60\u53BB\u505A\u6A21\u578B PM \u65F6\u7684\u4EA7\u54C1\u5F62\u6001\u3002"
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "mt-5", children: /* @__PURE__ */ jsx5(
        Table,
        {
          head: ["\u9635\u8425", "\u4EE3\u8868\u516C\u53F8 / \u6A21\u578B", "\u6218\u7565\u8981\u70B9"],
          rows: [
            [
              "\u95ED\u6E90\u65D7\u8230\u8DEF\u7EBF",
              "OpenAI\uFF08GPT \u7CFB\u5217\uFF09\u3001Anthropic\uFF08Claude \u7CFB\u5217\uFF09\u3001Google\uFF08Gemini\uFF09",
              "\u4EE5\u6700\u524D\u6CBF\u80FD\u529B + \u4F01\u4E1A\u670D\u52A1\u53D8\u73B0\uFF1BClaude \u4EE5\u5B89\u5168\u5BF9\u9F50\u4E0E Agent/\u7F16\u7A0B\u573A\u666F\u7684\u53E3\u7891\u5EFA\u7ACB\u5DEE\u5F02\u5316"
            ],
            [
              "\u5F00\u6E90\u5F00\u653E\u8DEF\u7EBF",
              "Meta\uFF08Llama \u7CFB\u5217\uFF09\u3001DeepSeek\u3001\u963F\u91CC\uFF08\u901A\u4E49\u5343\u95EE / Qwen \u7CFB\u5F00\u6E90\u7248\uFF09",
              "\u7528\u5F00\u6E90\u751F\u6001\u6362\u6807\u51C6\u4E0E\u6D41\u91CF\uFF1BDeepSeek \u4EE5\u6781\u4F4E\u7684\u8BAD\u7EC3\u6210\u672C\u63A8\u7406\u80FD\u529B\u9707\u60CA\u884C\u4E1A\uFF0C\u5E26\u52A8\u5F00\u6E90\u6A21\u578B\u6027\u4EF7\u6BD4\u9769\u547D"
            ],
            [
              "\u573A\u666F\u7ED1\u5B9A\u8DEF\u7EBF",
              "\u5B57\u8282\uFF08\u8C46\u5305\uFF09\u3001\u6708\u4E4B\u6697\u9762\uFF08Kimi\uFF09\u3001\u667A\u8C31\uFF08GLM\uFF09\u3001\u767E\u5EA6\uFF08\u6587\u5FC3\uFF09\u3001\u8BAF\u98DE\uFF08\u661F\u706B\uFF09",
              "C \u7AEF\u52A9\u624B / \u957F\u6587\u672C / \u529E\u516C\u5B66\u4E60\u7B49\u5177\u4F53\u573A\u666F\u5207\u5165\uFF0C\u9760\u4EA7\u54C1\u4F53\u9A8C\u4E0E\u5206\u53D1\u5EFA\u7ACB\u7528\u6237\u5FC3\u667A"
            ],
            [
              "\u5782\u76F4\u4E0E\u591A\u6A21\u6001",
              "xAI\uFF08Grok\uFF09\u3001\u5546\u6C64\u3001\u65F7\u89C6\uFF0C\u53CA\u5404\u884C\u4E1A\u5782\u7C7B\u6A21\u578B",
              "\u5411\u56FE\u50CF\u3001\u89C6\u9891\u3001\u8BED\u97F3\u3001\u4EE3\u7801\u7B49\u4E13\u7CBE\u80FD\u529B\u6216\u884C\u4E1A\u7EB5\u6DF1\u53D1\u5C55"
            ]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx5("div", { className: "mt-4", children: /* @__PURE__ */ jsx5(Note, { children: /* @__PURE__ */ jsx5("p", { children: "\u503C\u5F97\u6301\u7EED\u8FFD\u8E2A\u7684\u4E09\u4E2A\u8D8B\u52BF\uFF1A\u63A8\u7406\u6A21\u578B\u5DF2\u6210\u65D7\u8230\u6807\u914D\uFF08\u300C\u6162\u601D\u8003\u300D\u4ECE\u5356\u70B9\u53D8\u6210\u9ED8\u8BA4\u80FD\u529B\uFF09\u3001Computer Use\uFF08\u6A21\u578B\u76F4\u63A5\u64CD\u4F5C\u771F\u5B9E\u8F6F\u4EF6\u5B8C\u6210\u957F\u6D41\u7A0B\u4EFB\u52A1\uFF09\u3001\u4EE5\u53CA Agent \u540E\u8BAD\u7EC3\uFF08\u884C\u4E1A\u5F00\u59CB\u5BFB\u627E Agent \u65F6\u4EE3\u7684 Scaling Law\u2014\u2014\u8BE6\u89C1\u672C\u9875\u300C\u524D\u6CBF\u96BE\u9898\u300D\u4E00\u8282\uFF09\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs5(Section, { kicker: "02 \xB7 \u5F62\u6001", title: "AI \u4EA7\u54C1\u7684\u4E09\u6CE2\u5F62\u6001", children: [
      /* @__PURE__ */ jsxs5("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsx5(Card, { title: "\u7B2C\u4E00\u6CE2\uFF1A\u6A21\u578B\u5373\u4EA7\u54C1", icon: Rocket, children: /* @__PURE__ */ jsx5("p", { children: "\u76F4\u63A5\u628A\u6A21\u578B\u80FD\u529B\u5305\u88C5\u6210\u4EA7\u54C1\uFF1A\u5BF9\u8BDD\u52A9\u624B\uFF08ChatGPT\u3001\u8C46\u5305\u3001Kimi\uFF09\u3001\u6587\u751F\u56FE\u3002\u7279\u5F81\u662F\u901A\u7528\u3001\u8F7B\u573A\u666F\uFF0C\u80DC\u8D1F\u624B\u5728\u6A21\u578B\u80FD\u529B\u4E0E\u5206\u53D1\u3002" }) }),
        /* @__PURE__ */ jsx5(Card, { title: "\u7B2C\u4E8C\u6CE2\uFF1A\u5957\u58F3\u4E0E\u573A\u666F\u5316", icon: Boxes, children: /* @__PURE__ */ jsx5("p", { children: "\u5728\u6A21\u578B\u4E4B\u4E0A\u505A\u5DE5\u4F5C\u6D41\u548C\u573A\u666F\uFF1A\u5199\u4F5C\u52A9\u624B\u3001\u4F1A\u8BAE\u7EAA\u8981\u3001AI \u5BA2\u670D\u3001AI \u7B80\u5386\u3002\u7279\u5F81\u662F\u5D4C\u5165\u65E2\u6709\u8F6F\u4EF6\uFF0C\u80DC\u8D1F\u624B\u5728\u5BF9\u573A\u666F\u7684\u7406\u89E3\u548C\u6570\u636E\u7684\u6C89\u6DC0\u3002\u6240\u8C13\u300C\u5957\u58F3\u300D\u7684\u8D2C\u4E49\u6B63\u5728\u6D88\u5931\u2014\u2014\u4EF7\u503C\u5728\u6700\u540E\u4E00\u516C\u91CC\u3002" }) }),
        /* @__PURE__ */ jsx5(Card, { title: "\u7B2C\u4E09\u6CE2\uFF1AAgent \u539F\u751F", icon: Building2, children: /* @__PURE__ */ jsx5("p", { children: "\u4EE5\u300C\u5B8C\u6210\u4EFB\u52A1\u300D\u4E3A\u76EE\u6807\u91CD\u6784\u4EA7\u54C1\uFF1AAI Coding \u5DE5\u5177\u3001\u6570\u5B57\u5458\u5DE5\u3001\u81EA\u52A8\u5316\u529E\u516C Agent\u3002\u7528\u6237\u4E0D\u518D\u9010\u53E5\u5BF9\u8BDD\uFF0C\u800C\u662F\u7ED9\u76EE\u6807\u3001\u770B\u7ED3\u679C\u3002\u8FD9\u662F 2026 \u5E74\u62DB\u8058\u589E\u91CF\u6700\u5927\u7684\u65B9\u5411\uFF0C\u4E5F\u662F\u65B0 PM \u673A\u4F1A\u6700\u591A\u7684\u5730\u65B9\u3002" }) })
      ] }),
      /* @__PURE__ */ jsx5("p", { className: "mt-4 max-w-3xl text-[14px] leading-relaxed text-zinc-600", children: "\u5224\u65AD\u4E00\u4E2A AI \u4EA7\u54C1\u7684\u6BB5\u4F4D\uFF0C\u770B\u5B83\u79BB\u54EA\u4E00\u6CE2\u66F4\u8FD1\uFF1A\u662F\u300C\u628A\u6A21\u578B\u80FD\u529B\u66B4\u9732\u7ED9\u7528\u6237\u300D\uFF0C\u8FD8\u662F\u300C\u628A\u6A21\u578B\u80FD\u529B\u85CF\u8FDB\u4EFB\u52A1\u5B8C\u6210\u91CC\u300D\u3002\u540E\u8005\u624D\u662F\u62A4\u57CE\u6CB3\u7684\u5F00\u59CB\u3002" })
    ] }),
    /* @__PURE__ */ jsxs5(Section, { kicker: "03 \xB7 \u751F\u6001", title: "\u5DE5\u5177\u4E0E\u4EA7\u54C1\u53D1\u5C55\u73B0\u72B6\u901F\u89C8", children: [
      /* @__PURE__ */ jsx5("div", { className: "mt-2", children: /* @__PURE__ */ jsx5(
        Table,
        {
          head: ["\u5C42\u6B21", "\u73B0\u72B6", "\u5BF9 AIPM \u7684\u542F\u793A"],
          rows: [
            [
              "\u6A21\u578B\u5C42",
              "\u80FD\u529B\u5FEB\u901F\u8FED\u4EE3\uFF0C\u4EF7\u683C\u6301\u7EED\u4E0B\u63A2\uFF0C\u5934\u90E8\u96C6\u4E2D\u4E0E\u5F00\u6E90\u767E\u82B1\u5E76\u5B58",
              "\u5E94\u7528\u5C42\u8981\u8BBE\u8BA1\u6210\u300C\u6A21\u578B\u53EF\u66FF\u6362\u300D\uFF0C\u522B\u628A\u547D\u8FD0\u7ED1\u6B7B\u5728\u5355\u4E00\u6A21\u578B"
            ],
            [
              "\u6846\u67B6\u5C42",
              "LangChain \u7B49\u7F16\u6392\u6846\u67B6\u666E\u53CA\uFF0CDify / Coze \u7B49\u4F4E\u4EE3\u7801\u5E73\u53F0\u8BA9\u975E\u5DE5\u7A0B\u5E08\u4E5F\u80FD\u642D Agent",
              "\u539F\u578B\u9A8C\u8BC1\u6210\u672C\u6781\u4F4E\u2014\u2014\u60F3\u6CD5\u7684\u4EF7\u503C\u5728\u63D0\u5347\uFF0C\u6267\u884C\u95E8\u69DB\u5728\u4E0B\u964D"
            ],
            [
              "\u5E94\u7528\u5C42",
              "Coding / \u5BA2\u670D / \u8425\u9500 / \u62DB\u8058\u7B49\u573A\u666F\u7387\u5148\u8DD1\u901A\u5546\u4E1A\u95ED\u73AF\uFF1B\u901A\u7528\u52A9\u624B\u6D41\u91CF\u5DE8\u5927\u4F46\u53D8\u73B0\u4ECD\u5728\u63A2\u7D22",
              "\u9009\u573A\u666F\u770B\u300C\u9AD8\u9891 \xD7 \u5BB9\u9519 \xD7 \u6709\u8303\u5F0F\u300D\uFF0C\u53C2\u8003\u6982\u5FF5\u7BC7\u7684\u8FB9\u754C\u6846\u67B6"
            ],
            [
              "\u57FA\u7840\u8BBE\u65BD",
              "\u5411\u91CF\u5E93\u3001\u8BC4\u6D4B\u3001\u53EF\u89C2\u6D4B\u6027\u5DE5\u5177\u9010\u6E10\u6807\u51C6\u5316\uFF1BMCP \u7B49\u534F\u8BAE\u7EDF\u4E00\u5DE5\u5177\u63A5\u5165",
              "\u57FA\u7840\u8BBE\u65BD\u6210\u719F\u5EA6\u51B3\u5B9A\u4E86\u4F60\u505A\u4EA7\u54C1\u65F6\u300C\u54EA\u4E9B\u8F6E\u5B50\u4E0D\u7528\u81EA\u5DF1\u9020\u300D"
            ]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx5("div", { className: "mt-4", children: /* @__PURE__ */ jsx5(Note, { children: /* @__PURE__ */ jsx5("p", { children: "\u4E00\u4E2A\u953B\u70BC\u884C\u4E1A\u611F\u7684\u65B9\u6CD5\uFF1A\u6BCF\u5468\u7CBE\u8BFB\u4E00\u6B3E AI \u4EA7\u54C1\u7684\u66F4\u65B0\u65E5\u5FD7\uFF08\u300C\u4EA7\u54C1\u66F4\u65B0\u65E5\u5FD7\u300D\uFF09\uFF0C\u8FDE\u7EED\u4E00\u4E2A\u6708\uFF0C\u4F60\u5BF9\u300C\u884C\u4E1A\u5F80\u54EA\u8D70\u300D\u7684\u4F53\u611F\u4F1A\u8D85\u8FC7\u5927\u591A\u6570\u5019\u9009\u4EBA\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs5(Section, { kicker: "04 \xB7 \u5B9E\u8DF5", title: "\u5404\u5BB6\u4F01\u4E1A\u7684\u771F\u5B9E\u5B9E\u8DF5\u4E0E\u6C34\u5E73\u5750\u6807", children: [
      /* @__PURE__ */ jsxs5("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: [
        "\u9762\u8BD5\u804A\u300C\u4F60\u4E86\u89E3\u54EA\u4E9B\u516C\u53F8\u300D\u65F6\uFF0C\u62A5\u83DC\u540D\u662F\u4E0B\u7B56\uFF0C\u8BF4\u51FA",
        /* @__PURE__ */ jsx5("span", { className: "font-semibold text-zinc-800", children: "\u6BCF\u5BB6\u5728\u5E72\u4EC0\u4E48\u3001\u5904\u4E8E\u4EC0\u4E48\u6C34\u5E73" }),
        "\u624D\u662F\u4E0A\u7B56\u3002\u5224\u65AD\u4E00\u5BB6\u4F01\u4E1A AI \u6C34\u5E73\u770B\u4E09\u4EF6\u4E8B\uFF1A\u65D7\u8230\u6A21\u578B\u5728\u771F\u5B9E\u4EFB\u52A1\u57FA\u51C6\uFF08\u4E0D\u662F\u804A\u5929\u699C\u5355\uFF09\u4E0A\u7684\u4F4D\u7F6E\u3001\u6709\u6CA1\u6709\u81EA\u5DF1\u5B9A\u4E49\u7684\u884C\u4E1A\u6807\u51C6\u3001Agent \u662F\u5426\u8FDB\u5165\u4E86\u771F\u5B9E\u751F\u4EA7\u6D41\u7A0B\u3002"
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "mt-5", children: /* @__PURE__ */ jsx5(
        Table,
        {
          head: ["\u4F01\u4E1A", "\u5F53\u524D\u5728\u505A\u4EC0\u4E48\uFF08\u5B9E\u8DF5\uFF09", "\u6C34\u5E73\u5750\u6807"],
          rows: [
            ["OpenAI", "GPT-6 Astra\uFF082026.9\uFF09\uFF1A105 \u4E07 token \u4E0A\u4E0B\u6587\u3001Computer Use \u957F\u6D41\u7A0B\u64CD\u4F5C\uFF1B\u771F\u5B9E\u7535\u8111\u73AF\u5883\u591A\u6B65\u4EFB\u52A1\u57FA\u51C6 Agents' Last Exam \u5F97\u5206 59.3% \u6682\u5C45\u7B2C\u4E00\uFF1BCodex \u7F16\u7A0B Agent \u914D\u300C\u8DE8\u4E0A\u4E0B\u6587\u5DE5\u4F5C\u7B14\u8BB0\u300D\u673A\u5236", "\u524D\u6CBF\u65D7\u8230\uFF1A\u957F\u7A0B Agent \u65B9\u5411\u7684\u884C\u4E1A\u9886\u8DD1"],
            ["Anthropic", "Claude Opus 5 + Claude Code \u7F16\u7A0B Agent\uFF1B\u4E3B\u5BFC\u7684 MCP \u534F\u8BAE\u6210\u4E3A\u5DE5\u5177\u63A5\u5165\u884C\u4E1A\u6807\u51C6\uFF1BAgents' Last Exam 55.5%", "\u7F16\u7A0B\u4E0E Agent \u5DE5\u7A0B\u5316\u53E3\u7891\u6700\u5F3A\uFF0C\u6807\u51C6\u5236\u5B9A\u8005"],
            ["Google", "Gemini \u7CFB\u5217\uFF0C\u591A\u6A21\u6001\u80FD\u529B\u4E0E\u641C\u7D22/\u529E\u516C\u751F\u6001\u6DF1\u5EA6\u6574\u5408", "\u7B2C\u4E00\u68AF\u961F\uFF0C\u751F\u6001\u6574\u5408\u6700\u6DF1"],
            ["DeepSeek", "\u5F00\u6E90\u63A8\u7406\u6A21\u578B\u6027\u4EF7\u6BD4\u8DEF\u7EBF\u7684\u65D7\u624B\uFF0C\u8BAD\u7EC3\u6210\u672C\u63A7\u5236\u6210\u884C\u4E1A\u6807\u6746", "\u5F00\u6E90\u9635\u8425\u5934\u53F7\u9009\u624B"],
            ["\u963F\u91CC", "\u901A\u4E49\u5343\u95EE Qwen \u5F00\u6E90\u751F\u6001\uFF1BHSCodeComp \u7814\u7A76\uFF08ACL 2026 \u6700\u4F73\u8D44\u6E90\u8BBA\u6587\uFF09\u9996\u6B21\u91CF\u5316 Agent \u7684\u300C\u4E13\u5BB6\u7EA7\u80FD\u529B\u9E3F\u6C9F\u300D", "\u5F00\u6E90\u751F\u6001 + \u4EA7\u4E1A\u7814\u7A76\u53CC\u5F3A"],
            ["\u5B57\u8282\u8DF3\u52A8", "\u8C46\u5305 C \u7AEF\u52A9\u624B + Coze \u6263\u5B50\u5E73\u53F0 + \u7535\u5546\u573A\u666F AI \u6CBB\u7406\u4F53\u7CFB", "\u5E94\u7528\u751F\u6001\u4E0E\u5206\u53D1\u6700\u5F3A\uFF0C\u573A\u666F\u7EB5\u6DF1"],
            ["\u8682\u8681\u96C6\u56E2", "\u767E\u7075\u5927\u6A21\u578B\uFF0CAgent \u540E\u8BAD\u7EC3\u4EA7\u4E1A\u5316\u5B9E\u8DF5\uFF082026 \u5916\u6EE9\u5927\u4F1A\u5206\u4EAB\uFF09", "\u91D1\u878D\u7B49\u9AD8\u95E8\u69DB\u573A\u666F\u7684\u7EB5\u6DF1\u4EE3\u8868"]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx5("div", { className: "mt-4", children: /* @__PURE__ */ jsx5(Note, { children: /* @__PURE__ */ jsx5("p", { children: "\u4E00\u4E2A\u89C2\u5BDF\uFF1A\u7B2C\u4E00\u68AF\u961F\u7684\u7ADE\u4E89\u7126\u70B9\u5DF2\u7ECF\u4ECE\u300C\u804A\u5929\u4F53\u9A8C\u300D\u6574\u4F53\u8F6C\u5411\u300C\u771F\u5B9E\u4EFB\u52A1\u5B8C\u6210\u7387\u300D\u3002\u770B\u8FD9\u4E2A\u8F6C\u79FB\uFF0C\u6BD4\u76EF\u8DD1\u5206\u699C\u5355\u66F4\u80FD\u5224\u65AD\u884C\u4E1A\u6C34\u4F4D\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs5(Section, { kicker: "05 \xB7 \u524D\u6CBF", title: "\u524D\u6CBF\u6B63\u5728\u653B\u514B\u7684\u96BE\u9898\uFF08\u9762\u8BD5\u9AD8\u7EA7\u611F\u6765\u6E90\uFF09", children: [
      /* @__PURE__ */ jsxs5("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx5(Card, { title: "\u957F\u7A0B Agent \u7684\u53EF\u9760\u6027", icon: Rocket, children: /* @__PURE__ */ jsxs5("p", { children: [
          "\u4EFB\u52A1\u6B65\u6570\u8D8A\u591A\uFF0C\u6210\u529F\u7387\u6307\u6570\u8870\u51CF\u2014\u2014\u6700\u5F3A\u7684\u65D7\u8230\u6A21\u578B\u5728 Agents' Last Exam\uFF08\u771F\u5B9E\u7535\u8111\u73AF\u5883\u91CC\u8DE8\u8F6F\u4EF6\u5B8C\u6210\u591A\u6B65\u4EFB\u52A1\uFF09\u4E5F\u53EA\u505A\u5230\u7EA6",
          /* @__PURE__ */ jsx5("span", { className: "font-semibold text-zinc-800", children: " 59%" }),
          "\uFF0C\u79BB\u300C\u653E\u5FC3\u6258\u7BA1\u300D\u8FD8\u5F88\u8FDC\u3002\u653B\u514B\u65B9\u5411\uFF1A\u4E0A\u4E0B\u6587\u673A\u5236\u6539\u9020\uFF08\u5DE5\u4F5C\u7B14\u8BB0\u53D6\u4EE3\u4E00\u6B21\u6027\u6458\u8981\u538B\u7F29\uFF09\u3001\u6267\u884C\u4E2D\u81EA\u6211\u68C0\u67E5\u4E0E\u56DE\u6EDA\u3002"
        ] }) }),
        /* @__PURE__ */ jsx5(Card, { title: "Agent \u540E\u8BAD\u7EC3\u4E0E\u81EA\u6211\u8FDB\u5316", icon: Rocket, children: /* @__PURE__ */ jsxs5("p", { children: [
          "2026 \u5916\u6EE9\u5927\u4F1A\u7684\u6838\u5FC3\u8BAE\u9898\uFF1AAgent Post-Training\uFF0C\u5BFB\u627E Agent \u65F6\u4EE3\u7684 Scaling Law\u2014\u2014\u8BA9 Agent \u5728\u771F\u5B9E\u73AF\u5883\u4E2D\u5B8C\u6210\u4EFB\u52A1\u3001\u79EF\u7D2F\u7ECF\u9A8C\u3001\u81EA\u6211\u8FDB\u5316\u3002\u74F6\u9888\u4E0D\u5728\u6A21\u578B\u800C\u5728",
          /* @__PURE__ */ jsx5("span", { className: "font-semibold text-zinc-800", children: "\u73AF\u5883\u6784\u5EFA\u3001\u7ED3\u679C\u9A8C\u8BC1\u3001\u9632\u5956\u52B1\u4F5C\u5F0A\uFF08reward hacking\uFF09" }),
          "\uFF1A\u73AF\u5883\u4E4B\u4E8E Agent\uFF0C\u5982\u540C\u6570\u636E\u4E4B\u4E8E\u6A21\u578B\u3002"
        ] }) }),
        /* @__PURE__ */ jsx5(Card, { title: "\u4E13\u5BB6\u7EA7\u80FD\u529B\u9E3F\u6C9F", icon: Rocket, children: /* @__PURE__ */ jsxs5("p", { children: [
          "\u963F\u91CC HSCodeComp \u57FA\u51C6\uFF1A\u8BA9\u6700\u5F3A\u7684 Deep Search Agent \u505A\u6D77\u5173\u7F16\u7801\u5F52\u7C7B\uFF08\u5341\u5E74\u4E13\u5BB6 95% \u6B63\u786E\u7387\uFF09\uFF0C\u6700\u597D\u7684\u7CFB\u7EDF\u53EA\u6709",
          /* @__PURE__ */ jsx5("span", { className: "font-semibold text-zinc-800", children: " 49.4%" }),
          "\u2014\u2014\u9762\u5BF9\u4EBA\u7C7B\u4E13\u5BB6\u7F16\u5199\u7684\u5C42\u7EA7\u89C4\u5219\uFF0C\u5148\u8FDB Agent \u96C6\u4F53\u5931\u7075\u3002\u5782\u76F4\u4E13\u5BB6\u573A\u666F\u662F\u901A\u7528 Agent \u7684\u4E0B\u4E00\u5EA7\u5927\u5C71\uFF0C\u4E5F\u662F\u5782\u76F4 PM \u7684\u673A\u4F1A\u3002"
        ] }) }),
        /* @__PURE__ */ jsx5(Card, { title: "Computer Use \u4E0E\u754C\u9762\u7406\u89E3", icon: Rocket, children: /* @__PURE__ */ jsxs5("p", { children: [
          "\u8BA9\u6A21\u578B\u76F4\u63A5\u64CD\u4F5C\u771F\u5B9E\u8F6F\u4EF6\uFF1A\u754C\u9762\u7406\u89E3\u57FA\u51C6 ScreenSpot-Pro \u4E00\u5E74\u5185\u4ECE 76.9% \u8DF3\u5230 92.7%\uFF0C\u4F46\u8DE8\u8F6F\u4EF6\u957F\u6D41\u7A0B\u4ECD\u8106\u3002\u53E6\u4E00\u6761\u8DEF\u7EBF\u7684\u601D\u8DEF\u53CD\u8FC7\u6765\u2014\u2014\u4E0D\u662F\u6559 AI \u5B66\u4EBA\u7C7B\u754C\u9762\uFF0C\u800C\u662F",
          /* @__PURE__ */ jsx5("span", { className: "font-semibold text-zinc-800", children: "\u8BA9\u8F6F\u4EF6\u539F\u751F\u9002\u914D Agent" }),
          "\uFF08\u628A\u4E13\u4E1A\u8F6F\u4EF6\u5305\u88C5\u6210\u547D\u4EE4\u884C\u63A5\u53E3\uFF0C\u5982 CLI-Anything \u7684\u63A2\u7D22\uFF09\u3002"
        ] }) }),
        /* @__PURE__ */ jsx5(Card, { title: "\u957F\u671F\u8BB0\u5FC6\u4E0E\u4E2A\u6027\u5316", icon: Rocket, children: /* @__PURE__ */ jsx5("p", { children: "\u300C\u8C01\u66F4\u61C2\u4F60\u8C01\u7559\u5B58\u66F4\u9AD8\u300D\u2014\u2014\u8DE8\u4F1A\u8BDD\u957F\u671F\u8BB0\u5FC6\u662F Agent \u4EA7\u54C1\u7684\u7ADE\u4E89\u7126\u70B9\uFF0C\u4F46\u8BB0\u5FC6\u7684\u5199\u5165\u7B56\u7565\uFF08\u4EC0\u4E48\u503C\u5F97\u8BB0\uFF09\u3001\u66F4\u65B0\u4E0E\u9057\u5FD8\uFF08\u8FC7\u671F\u4FE1\u606F\u600E\u4E48\u6E05\uFF09\u3001\u9690\u79C1\u8FB9\u754C\uFF08\u7528\u6237\u80FD\u4E0D\u80FD\u67E5\u770B\u548C\u5220\u9664\u8BB0\u5FC6\uFF09\u90FD\u8FD8\u6CA1\u6709\u884C\u4E1A\u5171\u8BC6\u3002" }) }),
        /* @__PURE__ */ jsx5(Card, { title: "\u63A8\u7406\u6210\u672C\u4E0E\u6548\u7387", icon: Rocket, children: /* @__PURE__ */ jsx5("p", { children: "\u957F\u7A0B Agent \u5355\u6B21\u4EFB\u52A1\u6D88\u8017\u5DE8\u91CF\u4E0A\u4E0B\u6587\u4E0E KV cache \u5B58\u50A8\uFF1B\u300C\u5FAA\u73AF\u6DF1\u5EA6\u300D\u7B49\u65B0\u63A8\u7406\u67B6\u6784\u5728\u63A2\u7D22\u4E2D\u3002\u6210\u672C\u7ED3\u6784\u51B3\u5B9A\u54EA\u4E9B\u573A\u666F\u5546\u4E1A\u5316\u8DD1\u5F97\u901A\u2014\u2014\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u300C\u5355\u4F4D\u7ECF\u6D4E\u6A21\u578B\u300D\u6210\u4E86 AI PM \u7684\u5FC5\u4FEE\u8BFE\uFF08\u65B9\u6CD5\u7BC7\u6210\u672C\u4E00\u8282\uFF09\u3002" }) })
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "mt-4", children: /* @__PURE__ */ jsx5(Note, { children: /* @__PURE__ */ jsx5("p", { children: "\u9762\u8BD5\u88AB\u95EE\u300C\u4F60\u600E\u4E48\u770B Agent \u843D\u5730\u524D\u666F\u300D\u65F6\uFF0C\u7528\u4E24\u4E2A\u6570\u5B57\u6821\u51C6\u4E50\u89C2\uFF1A\u771F\u5B9E\u7535\u8111\u591A\u6B65\u4EFB\u52A1\u6700\u5F3A\u6A21\u578B\u7EA6 59%\uFF0C\u4E13\u5BB6\u7EA7\u5782\u76F4\u4EFB\u52A1\u7EA6 49%\uFF08\u4EBA\u7C7B\u4E13\u5BB6 95%\uFF09\u3002\u65E2\u770B\u5F97\u5230\u65B9\u5411\uFF0C\u53C8\u8BF4\u5F97\u51FA\u5DEE\u8DDD\u2014\u2014\u8FD9\u6BD4\u7A7A\u8C08\u300C\u672A\u6765\u5DF2\u6765\u300D\u9AD8\u7EA7\u5F97\u591A\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsx5(Section, { kicker: "06 \xB7 \u4E60\u60EF", title: "\u4FDD\u6301\u884C\u4E1A\u654F\u611F\u7684\u65E5\u5E38\u4E60\u60EF", children: /* @__PURE__ */ jsxs5("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx5(Card, { title: "\u4FE1\u606F\u6E90", icon: Map, children: /* @__PURE__ */ jsxs5("ul", { className: "mt-1 space-y-2", children: [
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u6A21\u578B\u516C\u53F8\u5B98\u65B9\u535A\u5BA2\u4E0E\u66F4\u65B0\u65E5\u5FD7\uFF08OpenAI / Anthropic / DeepSeek \u7B49\uFF09" }),
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u884C\u4E1A\u7814\u7A76\u8D26\u53F7\u4E0E newsletter\uFF08\u9009 3 \u4E2A\u9AD8\u8D28\u91CF\u7684\u4FE1\u6E90\u5373\u53EF\uFF0C\u907F\u514D\u4FE1\u606F\u8FC7\u8F7D\uFF09" }),
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u4EA7\u54C1\u793E\u533A\u4E0E\u771F\u5B9E\u7528\u6237\u53CD\u9988\uFF08\u5E94\u7528\u5546\u5E97\u8BC4\u8BBA\u3001\u793E\u533A\u8BA8\u8BBA\u5E16\uFF09" }),
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u62DB\u8058\u5E02\u573A\u4FE1\u53F7\uFF1AJD \u7684\u53D8\u5316\u6BD4\u65B0\u95FB\u7A3F\u66F4\u771F\u5B9E\u5730\u53CD\u6620\u884C\u4E1A\u9700\u6C42" })
      ] }) }),
      /* @__PURE__ */ jsx5(Card, { title: "\u52A8\u624B\u4E60\u60EF", icon: Map, children: /* @__PURE__ */ jsxs5("ul", { className: "mt-1 space-y-2", children: [
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u6BCF\u6708\u6DF1\u5EA6\u4F7F\u7528\u4E00\u6B3E\u65B0 AI \u4EA7\u54C1\uFF0C\u5199\u4E00\u9875\u62C6\u89E3\uFF1A\u76EE\u6807\u7528\u6237\u3001\u6838\u5FC3\u6D41\u7A0B\u3001AI \u8FB9\u754C\u8BBE\u8BA1" }),
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u7EF4\u62A4\u4E00\u4EFD\u81EA\u5DF1\u7684\u300C\u6A21\u578B\u80FD\u529B\u4EB2\u6D4B\u8868\u300D\uFF1A\u4E0D\u540C\u6A21\u578B\u5728\u4F60\u5E38\u7528\u4EFB\u52A1\u4E0A\u7684\u8868\u73B0\u5BF9\u6BD4" }),
        /* @__PURE__ */ jsx5("li", { children: "\xB7 \u7528 AI Coding \u5DE5\u5177\u505A\u4E00\u4E2A\u5C0F\u9879\u76EE\u5E76\u590D\u76D8\uFF1A\u54EA\u91CC\u597D\u7528\u3001\u54EA\u91CC\u7FFB\u8F66\u3001\u4E3A\u4EC0\u4E48" })
      ] }) })
    ] }) })
  ] });
}

// src/pages/Career.jsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function Career() {
  return /* @__PURE__ */ jsxs6(Layout, { children: [
    /* @__PURE__ */ jsx6(
      PageHeader,
      {
        eyebrow: "\u6C42\u804C\u7BC7",
        title: "\u9762\u5411\u79CB\u62DB\u7684\u6C42\u804C\u6307\u5357",
        desc: "\u4ECE JD \u53CD\u63A8\u80FD\u529B\u6E05\u5355\uFF0C\u4ECE\u80FD\u529B\u6E05\u5355\u53CD\u63A8\u4F5C\u54C1\u96C6\u3002\u8FD9\u4E00\u7BC7\u56DE\u7B54\u4E09\u4E2A\u95EE\u9898\uFF1A\u5E02\u573A\u5230\u5E95\u8981\u4EC0\u4E48\u3001\u4F60\u62FF\u4EC0\u4E48\u53BB\u5BF9\u3001\u4EE5\u53CA\u300C\u61C2\u7814\u53D1\u7684\u4EA7\u54C1 / \u61C2\u4EA7\u54C1\u7684\u7814\u53D1\u300D\u8FD9\u6761\u590D\u5408\u8DEF\u7EBF\u600E\u4E48\u8D70\u3002"
      }
    ),
    /* @__PURE__ */ jsxs6(Section, { kicker: "01 \xB7 \u4FE1\u53F7", title: "\u4ECE JD \u53CD\u63A8\uFF1A\u5E02\u573A\u771F\u6B63\u5728\u8981\u4EC0\u4E48", children: [
      /* @__PURE__ */ jsx6("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: "\u62C6\u8FD1\u671F AI \u4EA7\u54C1\u7ECF\u7406\u7684\u62DB\u8058\u4FE1\u606F\uFF0C\u4F1A\u53D1\u73B0\u8981\u6C42\u9AD8\u5EA6\u6536\u655B\u3002\u628A\u9AD8\u9891\u5173\u952E\u8BCD\u7FFB\u8BD1\u6210\u80FD\u529B\u8BED\u8A00\uFF0C\u5C31\u662F\u4F60\u7684\u5B66\u4E60\u6E05\u5355\uFF1A" }),
      /* @__PURE__ */ jsx6("div", { className: "mt-5", children: /* @__PURE__ */ jsx6(
        Table,
        {
          head: ["JD \u9AD8\u9891\u8868\u8FF0", "\u7FFB\u8BD1\u6210\u80FD\u529B", "\u600E\u4E48\u8BC1\u660E"],
          rows: [
            ["\u719F\u6089\u5927\u6A21\u578B\u6280\u672F\u539F\u7406\u4E0E\u8FB9\u754C", "\u80FD\u542C\u61C2\u7814\u53D1\u9ED1\u8BDD\uFF0C\u5224\u65AD\u65B9\u6848\u53EF\u884C\u6027", "\u6982\u5FF5\u7BC7\u5168\u90E8\u590D\u8FF0\u8FC7\u5173 + \u9762\u8BD5\u73B0\u573A\u63A5\u4F4F\u8FFD\u95EE"],
            ["\u6709 RAG / Agent \u843D\u5730\u7ECF\u9A8C", "\u4EB2\u624B\u642D\u8FC7\u3001\u8E29\u8FC7\u5751\u3001\u91CF\u5316\u8FC7\u6539\u8FDB", "\u4F5C\u54C1\u96C6\u91CC\u7684\u77E5\u8BC6\u5E93 / Agent \u9879\u76EE + \u8BC4\u6D4B\u62A5\u544A"],
            ["\u719F\u7EC3 Prompt \u5DE5\u7A0B", "\u80FD\u8BBE\u8BA1\u7A33\u5B9A\u53EF\u8FED\u4EE3\u7684\u7CFB\u7EDF Prompt", "\u5E26\u7248\u672C\u7BA1\u7406\u548C\u6D4B\u8BD5\u96C6\u7684 Prompt \u8FED\u4EE3\u8BB0\u5F55"],
            ["\u5EFA\u7ACB\u8BC4\u6D4B\u4F53\u7CFB\u4E0E\u6570\u636E\u9A71\u52A8", "\u4F1A\u7528\u6307\u6807\u5B9A\u4E49\u597D\u574F\u3001\u9A71\u52A8\u8FED\u4EE3", "\u9879\u76EE\u91CC\u7684 LLM-as-a-Judge \u6D41\u6C34\u7EBF + \u524D\u540E\u5BF9\u6BD4\u6570\u636E"],
            ["\u8DE8\u56E2\u961F\u63A8\u52A8\u843D\u5730", "\u628A\u6A21\u7CCA\u9700\u6C42\u7FFB\u8BD1\u6210\u53CC\u65B9\u90FD\u61C2\u7684\u8BED\u8A00", "\u9879\u76EE\u590D\u76D8\u91CC\u5199\u6E05\u4F60\u5982\u4F55\u534F\u8C03\u7B97\u6CD5\u4E0E\u4E1A\u52A1"],
            ["\u5BF9 AI \u6709\u70ED\u60C5\u4E0E\u5224\u65AD", "\u6709\u884C\u4E1A\u89C2\u70B9\uFF0C\u4E0D\u662F\u53EA\u4F1A\u7528\u5DE5\u5177", "\u4EA7\u54C1\u62C6\u89E3\u6587\u6863 + \u884C\u4E1A\u8D8B\u52BF\u7684\u72EC\u7ACB\u5224\u65AD"]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx6("div", { className: "mt-4", children: /* @__PURE__ */ jsx6(Note, { children: /* @__PURE__ */ jsxs6("p", { children: [
        "\u85AA\u8D44\u5E26\u5BBD\u6781\u5BBD\uFF08\u521D\u7EA7\u5230\u8D44\u6DF1\u4E13\u5BB6\u804C\u7EA7\uFF09\u8BF4\u660E\u80FD\u529B\u5206\u5C42\u660E\u663E\uFF1B\u5C97\u4F4D\u591A\u7ECF\u5185\u63A8\u4E0E\u5B9A\u5411\u6316\u4EBA\uFF0C\u8BF4\u660E",
        /* @__PURE__ */ jsx6("span", { className: "font-semibold", children: "\u4F5C\u54C1\u96C6\u4E0E\u4EBA\u8109\u7684\u6743\u91CD\u5927\u4E8E\u6D77\u6295" }),
        "\u3002\u7B56\u7565\u7ED3\u8BBA\uFF1A\u628A\u505A\u9879\u76EE\u7684\u7CBE\u529B\u653E\u5728\u300C\u53EF\u5C55\u793A\u3001\u53EF\u8FFD\u95EE\u3001\u6709\u6570\u636E\u300D\u4E09\u4E2A\u6807\u51C6\u4E0A\u3002"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs6(Section, { kicker: "02 \xB7 \u8DEF\u7EBF", title: "\u61C2\u7814\u53D1\u7684\u4EA7\u54C1 vs \u61C2\u4EA7\u54C1\u7684\u7814\u53D1", children: [
      /* @__PURE__ */ jsxs6("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs6(Card, { title: "\u61C2\u7814\u53D1\u7684\u4EA7\u54C1\uFF08\u63A8\u8350\u8DEF\u7EBF\uFF09", icon: UserRound, children: [
          /* @__PURE__ */ jsx6("p", { children: "\u4F60\u7684\u8EAB\u4EFD\u662F PM\uFF0C\u6280\u672F\u7406\u89E3\u670D\u52A1\u4E8E\u4EA7\u54C1\u5224\u65AD\u3002\u8FBE\u6807\u7EBF\uFF1A\u80FD\u72EC\u7ACB\u8BFB\u61C2\u6280\u672F\u65B9\u6848\u7684\u6838\u5FC3\u903B\u8F91\u3001\u80FD\u8BC4\u4F30\u5DE5\u4F5C\u91CF\u7684\u5408\u7406\u6027\u3001\u80FD\u9884\u5224\u6280\u672F\u9009\u62E9\u5BF9\u7528\u6237\u4F53\u9A8C\u7684\u5F71\u54CD\u3002" }),
          /* @__PURE__ */ jsx6("p", { className: "mt-2", children: "\u4FEE\u70BC\u65B9\u5F0F\uFF1A\u6982\u5FF5\u7BC7\u6253\u5E95 \u2192 \u7528 AI Coding \u5DE5\u5177\u4EB2\u624B\u505A\u51FA 2~3 \u4E2A\u80FD\u8DD1\u7684\u9879\u76EE\uFF08\u4E0D\u6C42\u751F\u4EA7\u7EA7\uFF09\u2192 \u6BCF\u4E2A\u9879\u76EE\u5199\u6280\u672F\u590D\u76D8\u3002\u5173\u952E\u662F\u300C\u4EB2\u624B\u300D\uFF0C\u4E0D\u662F\u770B\u89C6\u9891\u3002" })
        ] }),
        /* @__PURE__ */ jsxs6(Card, { title: "\u61C2\u4EA7\u54C1\u7684\u7814\u53D1", icon: CodeXml, children: [
          /* @__PURE__ */ jsx6("p", { children: "\u53CD\u5411\u8DEF\u7EBF\uFF1A\u4EE5\u6280\u672F\u4E3A\u7ACB\u8EAB\u4E4B\u672C\uFF0C\u8865\u4EA7\u54C1\u5224\u65AD\u3002\u9002\u5408\u6709\u4E00\u5B9A\u4EE3\u7801\u57FA\u7840\u7684\u540C\u5B66\u3002\u8FBE\u6807\u7EBF\uFF1A\u80FD\u72EC\u7ACB\u4EA4\u4ED8\u5B8C\u6574\u529F\u80FD\uFF0C\u540C\u65F6\u4E3B\u52A8\u601D\u8003\u9700\u6C42\u5408\u7406\u6027\u3001\u6570\u636E\u6307\u6807\u4E0E\u7528\u6237\u4EF7\u503C\u3002" }),
          /* @__PURE__ */ jsx6("p", { className: "mt-2", children: "\u8FD9\u6761\u8DEF\u7EBF\u5728\u300CAI \u5E94\u7528\u5DE5\u7A0B\u5E08 / Agent \u5DE5\u7A0B\u5E08\u300D\u5C97\u4F4D\u4E0A\u7684\u9700\u6C42\u548C\u85AA\u8D44\u540C\u6837\u65FA\u76DB\uFF08\u6821\u62DB\u5E38\u7ED9\u5230\u9AD8\u4E8E\u4F20\u7EDF\u540E\u7AEF\u7684\u62A5\u4EF7\uFF09\uFF0C\u53EF\u4F5C\u4E3A Plan B \u6216\u8F6C\u578B\u8DF3\u677F\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ jsx6("p", { className: "mt-4 max-w-3xl text-[14px] leading-relaxed text-zinc-600", children: "\u4E24\u6761\u8DEF\u7EBF\u6B8A\u9014\u540C\u5F52\uFF1A\u5E02\u573A\u4E0A\u6700\u7A00\u7F3A\u7684\u6C38\u8FDC\u662F\u300C\u7FFB\u8BD1\u8005\u300D\u2014\u2014\u80FD\u628A\u7528\u6237\u4EF7\u503C\u7FFB\u8BD1\u6210\u6280\u672F\u9700\u6C42\u3001\u4E5F\u80FD\u628A\u6280\u672F\u7EA6\u675F\u7FFB\u8BD1\u6210\u4EA7\u54C1\u51B3\u7B56\u7684\u4EBA\u3002\u9009\u8DEF\u7EBF\u65F6\u770B\u4F60\u7684\u6BD4\u8F83\u4F18\u52BF\uFF1A\u8868\u8FBE\u4E0E\u6D1E\u5BDF\u5F3A\u8D70\u524D\u8005\uFF0C\u903B\u8F91\u4E0E\u5B9E\u73B0\u5F3A\u8D70\u540E\u8005\u3002" })
    ] }),
    /* @__PURE__ */ jsxs6(Section, { kicker: "03 \xB7 \u5F39\u836F", title: "\u300C\u5B8C\u7F8E\u7684 AI \u4EA7\u51FA\u300D\uFF1A\u80FD\u53BB\u79CB\u62DB\u4E71\u6740\u7684\u4F5C\u54C1\u96C6\u957F\u4EC0\u4E48\u6837", children: [
      /* @__PURE__ */ jsxs6("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: [
        "\u4E00\u4E2A\u6B8B\u9177\u7684\u4E8B\u5B9E\uFF1A\u4F1A\u8C03\u7528\u6A21\u578B API \u7684 demo \u6CA1\u6709\u7A00\u7F3A\u6027\u3002\u80FD\u8BA9\u9762\u8BD5\u5B98\u8BB0\u4F4F\u7684\u9879\u76EE\uFF0C\u5FC5\u987B\u5C55\u793A",
        /* @__PURE__ */ jsx6("span", { className: "font-semibold text-zinc-800", children: "\u300C\u8BC4\u6D4B\u601D\u7EF4\u300D\u548C\u300C\u8FED\u4EE3\u8BC1\u636E\u300D" }),
        "\u2014\u2014\u8FD9\u6070\u6070\u662F\u5927\u591A\u6570\u5019\u9009\u4EBA\u7F3A\u5931\u7684\u3002"
      ] }),
      /* @__PURE__ */ jsx6("div", { className: "mt-5", children: /* @__PURE__ */ jsx6(
        Steps,
        {
          items: [
            {
              title: "\u9009\u4E00\u4E2A\u4F60\u771F\u61C2\u7684\u573A\u666F",
              desc: "\u96F6\u57FA\u7840\u8D77\u6B65\u5C31\u9009\u4F60\u6700\u719F\u3001\u80FD\u5224\u65AD\u7B54\u6848\u597D\u574F\u7684\u573A\u666F\u5207\u5165\uFF1A\u6548\u7387\u5DE5\u5177\u3001\u5185\u5BB9\u95EE\u7B54\u3001\u5BA2\u670D\u673A\u5668\u4EBA\u3001\u5B66\u4E60\u966A\u7EC3\u3001\u5BA1\u6838\u8F85\u52A9\u2026\u2026\u5148\u7528\u6700\u5C0F\u95ED\u73AF\u8DD1\u901A\u4E00\u4E2A\uFF0C\u518D\u8C08\u6269\u5C55\u3002"
            },
            {
              title: "\u505A\u51FA\u53EF\u7528\u7684 MVP",
              desc: "RAG \u77E5\u8BC6\u95EE\u7B54\u6216 Workflow \u81EA\u52A8\u5316\u7686\u53EF\uFF08\u7528 Dify / Coze \u4F4E\u4EE3\u7801\u642D\u5EFA\u5B8C\u5168\u53EF\u63A5\u53D7\uFF0C\u91CD\u70B9\u662F\u573A\u666F\u7406\u89E3\u4E0D\u662F\u9020\u8F6E\u5B50\uFF09\u3002"
            },
            {
              title: "\u5EFA\u7ACB\u8BC4\u6D4B\u5E76\u8DD1\u51FA\u5BF9\u6BD4\u6570\u636E",
              desc: "50 \u6761\u6D4B\u8BD5\u96C6 \u2192 LLM-as-a-Judge \u6253\u5206 \u2192 \u81F3\u5C11\u5C55\u793A\u4E24\u7EC4\u5BF9\u6BD4\uFF1A\u5982\u6734\u7D20 RAG vs \u52A0 Rerank\u3001\u6A21\u578B A vs \u6A21\u578B B\u3001Prompt v1 vs v2\u3002\u6570\u5B57\u4E0D\u7528\u60CA\u4EBA\uFF0C\u65B9\u6CD5\u5FC5\u987B\u4E25\u8C28\u3002"
            },
            {
              title: "\u5199\u4E00\u4EFD\u4EA7\u54C1\u590D\u76D8",
              desc: "\u6309 PM \u8BED\u8A00\u7EC4\u7EC7\uFF1A\u76EE\u6807\u7528\u6237\u4E0E\u573A\u666F\u3001\u6838\u5FC3\u6307\u6807\u3001\u5173\u952E\u51B3\u7B56\u4E0E\u53D6\u820D\uFF08\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A\uFF09\u3001bad case \u5206\u6790\u3001\u4E0B\u4E00\u6B65 roadmap\u3002\u8FD9\u4EFD\u6587\u6863\u7684\u5206\u91CF\u8FDC\u8D85 demo \u672C\u8EAB\u3002"
            },
            {
              title: "\u5305\u88C5\u6210 3 \u5206\u949F\u53EF\u8BB2\u7684\u6545\u4E8B",
              desc: "\u9762\u8BD5\u53D9\u4E8B\u7EBF\uFF1A\u6211\u53D1\u73B0 X \u573A\u666F\u6709 Y \u95EE\u9898 \u2192 \u6211\u5224\u65AD AI \u80FD\u89E3\u51B3\u5176\u4E2D Z \u90E8\u5206 \u2192 \u6211\u505A\u4E86\u8FD9\u4E9B\u53D6\u820D \u2192 \u6570\u636E\u8BC1\u660E\u6709\u6539\u8FDB \u2192 \u5C40\u9650\u4E0E\u4E0B\u4E00\u6B65\u3002\u8FB9\u754C\u611F\uFF08\u54EA\u4E9B\u6CA1\u89E3\u51B3\uFF09\u662F\u52A0\u5206\u9879\u4E0D\u662F\u51CF\u5206\u9879\u3002"
            }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx6("div", { className: "mt-4", children: /* @__PURE__ */ jsx6(Note, { children: /* @__PURE__ */ jsx6("p", { children: "\u9762\u8BD5\u9632\u96F7\u6E05\u5355\uFF1A\u4E0D\u8981\u8BF4\u300C\u6211\u7CBE\u901A\u5927\u6A21\u578B\u300D\uFF1B\u88AB\u95EE\u5230\u4E0D\u4F1A\u7684\u6982\u5FF5\u65F6\u5766\u8BDA\u8BF4\u300C\u8FD9\u5757\u6211\u4E86\u89E3\u5230 X \u7A0B\u5EA6\uFF0C\u66F4\u6DF1\u7684\u8FD8\u6CA1\u6478\u8FC7\u300D\uFF1B\u6240\u6709\u9879\u76EE\u6570\u5B57\u90FD\u80FD\u8FFD\u6EAF\u5230\u4F60\u600E\u4E48\u7B97\u51FA\u6765\u7684\u3002\u8BDA\u5B9E + \u6709\u8FB9\u754C\u7684\u8868\u8FBE\uFF0C\u5728 AI \u5C97\u4F4D\u9762\u8BD5\u91CC\u662F\u7A00\u7F3A\u54C1\u8D28\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsxs6(Section, { kicker: "04 \xB7 \u62C6\u89E3", title: "\u300C\u4F60\u600E\u4E48\u8BC4\u4EF7\u5404\u5BB6 AI\u300D\u2014\u2014\u4E00\u9053\u6545\u610F\u6A21\u7CCA\u7684\u9898", children: [
      /* @__PURE__ */ jsxs6("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: [
        "\u9762\u8BD5\u5B98\u95EE\u300C\u4F60\u600E\u4E48\u8BC4\u4EF7\u8FD9\u51E0\u5BB6 AI\u300D\u65F6\u5F88\u5C11\u8BF4\u660E\u6307\u7684\u662F\u4EA7\u54C1\u8FD8\u662F\u6A21\u578B\u2014\u2014",
        /* @__PURE__ */ jsx6("span", { className: "font-semibold text-zinc-800", children: "\u6B67\u4E49\u672C\u8EAB\u5C31\u662F\u8003\u70B9" }),
        "\uFF1A\u770B\u4F60\u80FD\u4E0D\u80FD\u628A\u6A21\u7CCA\u95EE\u9898\u7ED3\u6784\u5316\u3002\u6025\u7740\u9009\u8FB9\u62A5\u53C2\u6570\u662F\u4E0B\u7B56\uFF0C\u9AD8\u5206\u5F00\u53E3\u662F\uFF1A\u300C\u8FD9\u4E2A\u95EE\u9898\u6211\u4E60\u60EF\u5206\u4E24\u5C42\u770B\uFF0C\u6A21\u578B\u5C42\u548C\u4EA7\u54C1\u5C42\u7684\u8BC4\u4EF7\u6807\u51C6\u5B8C\u5168\u4E0D\u540C\u3002\u300D"
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "mt-5 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx6(Card, { title: "\u6A21\u578B\u5C42\uFF1A\u8BC4\u4EF7\u300C\u53D1\u52A8\u673A\u53C2\u6570\u300D", icon: Building2, children: /* @__PURE__ */ jsxs6("ul", { className: "mt-1 space-y-2", children: [
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u80FD\u529B\u4E0A\u9650\uFF1A\u770B\u771F\u5B9E\u4EFB\u52A1\u57FA\u51C6\uFF08\u957F\u7A0B\u4EFB\u52A1\u5B8C\u6210\u7387\uFF09\uFF0C\u4E0D\u770B\u804A\u5929\u699C\u5355" }),
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u4E0A\u4E0B\u6587\u957F\u5EA6\u3001\u8C03\u7528\u6210\u672C\u4E0E\u901F\u5EA6" }),
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u5DE5\u5177\u8C03\u7528\u4E0E\u7ED3\u6784\u5316\u8F93\u51FA\u7684\u53EF\u9760\u6027" }),
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u5F00\u6E90 vs \u95ED\u6E90\u3001\u5408\u89C4\u4E0E\u79C1\u6709\u5316\u80FD\u529B" })
        ] }) }),
        /* @__PURE__ */ jsx6(Card, { title: "\u4EA7\u54C1\u5C42\uFF1A\u8BC4\u4EF7\u300C\u6574\u8F66\u8C03\u6821\u300D", icon: Building2, children: /* @__PURE__ */ jsxs6("ul", { className: "mt-1 space-y-2", children: [
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u76EE\u6807\u7528\u6237\u4E0E\u5207\u5165\u573A\u666F\u3001\u4EA4\u4E92\u8303\u5F0F\uFF08\u9010\u53E5\u804A vs \u7ED9\u76EE\u6807\u770B\u7ED3\u679C\uFF09" }),
          /* @__PURE__ */ jsx6("li", { children: "\xB7 Harness \u5DE5\u7A0B\u8D28\u91CF\uFF1A\u540C\u4E00\u6A21\u578B\u914D\u4E0D\u540C\u4EA7\u54C1\u58F3\uFF0C\u4F53\u9A8C\u5929\u5DEE\u5730\u522B" }),
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u6570\u636E\u98DE\u8F6E\uFF1A\u662F\u5426\u8D8A\u7528\u8D8A\u61C2\u4F60\uFF08\u8BB0\u5FC6\u4E0E\u4E2A\u6027\u5316\uFF09" }),
          /* @__PURE__ */ jsx6("li", { children: "\xB7 \u5546\u4E1A\u6A21\u5F0F\u662F\u5426\u8DD1\u901A\u3001\u751F\u6001\u4F4D\uFF08\u6807\u51C6/\u5206\u53D1/\u5F00\u53D1\u8005\u7ED1\u5B9A\uFF09" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx6("div", { className: "mt-4", children: /* @__PURE__ */ jsx6(Note, { children: /* @__PURE__ */ jsxs6("p", { children: [
        "90 \u79D2\u793A\u8303\uFF1A\u300C\u6A21\u578B\u5C42\u6211\u53EA\u770B\u771F\u5B9E\u4EFB\u52A1\u5B8C\u6210\u7387\uFF1B\u4EA7\u54C1\u5C42\u6211\u770B\u573A\u666F\u3001harness \u548C\u6570\u636E\u98DE\u8F6E\u3002\u6BD4\u5982 Claude \u6A21\u578B\u5C42\u9876\u7EA7\uFF0C\u4EA7\u54C1\u5C42\u9009\u4E86\u7F16\u7A0B\u4E0E Agent \u5DE5\u7A0B\u5316\u8FD9\u6761\u8DEF\uFF0C\u9760 Claude Code \u548C MCP \u5EFA\u6807\u51C6\uFF1B\u8C46\u5305\u6A21\u578B\u672A\u5FC5\u6700\u5F3A\uFF0C\u4F46\u9760 C \u7AEF\u4F53\u9A8C\u548C\u5206\u53D1\u5EFA\u7ACB\u5FC3\u667A\u2014\u2014\u8BF4\u660E\u6A21\u578B\u9886\u5148\u4E0D\u7B49\u4E8E\u4EA7\u54C1\u8D62\u3002\u6700\u540E\u6211\u8BA4\u4E3A\u4E24\u8005\u7684\u5173\u7CFB\u662F",
        /* @__PURE__ */ jsx6("span", { className: "font-semibold", children: "\u6A21\u578B\u53EF\u66FF\u6362\u3001\u4EA7\u54C1\u96BE\u8FC1\u79FB" }),
        "\uFF1A\u597D\u4EA7\u54C1\u7684\u8BBE\u8BA1\u662F\u6362\u6A21\u578B\u4F53\u9A8C\u4E0D\u964D\uFF0C\u8FD9\u6B63\u662F PM \u7684\u4EF7\u503C\u3002\u300D"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx6(Section, { kicker: "05 \xB7 \u5B9E\u6218", title: "\u9AD8\u9891\u9762\u8BD5\u9898\u81EA\u6D4B", children: /* @__PURE__ */ jsx6("div", { className: "mt-2", children: /* @__PURE__ */ jsx6(
      Table,
      {
        head: ["\u95EE\u9898", "\u8003\u5BDF\u70B9", "\u7B54\u9898\u9AA8\u67B6"],
        rows: [
          ["\u600E\u4E48\u5224\u65AD\u4E00\u4E2A\u573A\u666F\u8BE5\u4E0D\u8BE5\u4E0A AI\uFF1F", "\u8FB9\u754C\u610F\u8BC6", "\u9AD8\u9891/\u5BB9\u9519/\u8303\u5F0F\u4E09\u56E0\u5B50 + \u4E24\u4E2A\u6B63\u53CD\u4F8B"],
          ["\u4F60\u600E\u4E48\u8BC4\u4EF7\u5404\u5BB6 AI\uFF1F", "\u7ED3\u6784\u5316\u6A21\u7CCA\u95EE\u9898", "\u5148\u62C6\u6A21\u578B\u5C42/\u4EA7\u54C1\u5C42\u4E24\u5957\u6807\u51C6\uFF0C\u518D\u843D\u5230\u300C\u6A21\u578B\u53EF\u66FF\u6362\u3001\u4EA7\u54C1\u96BE\u8FC1\u79FB\u300D"],
          ["RAG \u6548\u679C\u5DEE\uFF0C\u4F60\u600E\u4E48\u6392\u67E5\uFF1F", "\u5DE5\u7A0B\u624B\u611F", "\u5148\u770B\u68C0\u7D22\uFF08\u53EC\u56DE\u5BF9\u4E0D\u5BF9\uFF09\u518D\u770B\u751F\u6210\uFF08Prompt \u4E0E\u6A21\u578B\uFF09\uFF0C\u9010\u6BB5\u5B9A\u4F4D"],
          ["\u600E\u4E48\u505A\u6A21\u578B/\u65B9\u6848\u9009\u578B\uFF1F", "\u6743\u8861\u80FD\u529B", "\u80FD\u529B\u4E0A\u9650\u3001\u6210\u672C\u3001\u5EF6\u8FDF\u3001\u5408\u89C4\u56DB\u4E2A\u7EF4\u5EA6\u6253\u5206\u5BF9\u6BD4"],
          ["\u4F60\u7684\u9879\u76EE\u91CC\u6700\u96BE\u7684\u51B3\u5B9A\u662F\u4EC0\u4E48\uFF1F", "\u771F\u5B9E\u7ECF\u5386", "\u8BB2\u53D6\u820D\uFF08\u5982\u4F53\u9A8C vs \u6210\u672C\uFF09\uFF0C\u8981\u6709\u6570\u636E\u652F\u6491"],
          ["\u600E\u4E48\u770B Agent \u7684\u843D\u5730\u74F6\u9888\uFF1F", "\u884C\u4E1A\u5224\u65AD", "\u53EF\u9760\u6027\u968F\u6B65\u9AA4\u8870\u51CF + \u8BC4\u4F30\u96BE + \u8D23\u4EFB\u754C\u5B9A\uFF0C\u7ED3\u5408\u6848\u4F8B"],
          ["\u96F6\u57FA\u7840\u4E3A\u4EC0\u4E48\u80FD\u505A AIPM\uFF1F", "\u81EA\u6211\u8BA4\u77E5", "\u5BF9\u7528\u6237\u548C\u4E1A\u52A1\u7684\u654F\u611F + \u8868\u8FBE\u7FFB\u8BD1\u80FD\u529B\uFF0C\u7528\u5177\u4F53\u4E8B\u4F8B\u652F\u6491"]
        ]
      }
    ) }) })
  ] });
}

// src/pages/Roadmap.jsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var PHASES = [
  {
    phase: "\u7B2C 1~2 \u5468",
    title: "\u5EFA\u7ACB\u5750\u6807\u7CFB",
    goal: "\u542C\u61C2\u6240\u6709\u9ED1\u8BDD\uFF0C\u5F62\u6210\u884C\u4E1A\u5730\u56FE",
    tasks: [
      "\u901A\u8BFB\u672C\u7AD9\u6982\u5FF5\u7BC7 + \u884C\u4E1A\u7BC7\uFF0C\u6BCF\u4E2A\u6982\u5FF5\u80FD\u5411\u5BA4\u53CB\u590D\u8FF0",
      "\u6CE8\u518C\u5E76\u6DF1\u5EA6\u4F7F\u7528 2~3 \u4E2A AI \u4EA7\u54C1\uFF08\u4E00\u4E2A\u901A\u7528\u52A9\u624B + \u4E00\u4E2A\u5782\u76F4\u5DE5\u5177\uFF09\uFF0C\u5404\u5199\u4E00\u9875\u4EA7\u54C1\u62C6\u89E3",
      "\u6536\u96C6 10 \u4EFD AI \u4EA7\u54C1\u7ECF\u7406 JD\uFF0C\u81EA\u5DF1\u505A\u5173\u952E\u8BCD\u8BCD\u9891\u7EDF\u8BA1\u2014\u2014\u7528\u6570\u636E\u786E\u8BA4\u5E02\u573A\u8981\u4EC0\u4E48"
    ],
    deliver: "\u4E00\u4EFD\u300CAI \u4EA7\u54C1\u62C6\u89E3\u7B14\u8BB0\u300D+\u300CJD \u5173\u952E\u8BCD\u7EDF\u8BA1\u8868\u300D",
    check: "\u80FD\u5411\u975E\u6280\u672F\u670B\u53CB\u8BB2\u6E05\u695A\uFF1A\u5927\u6A21\u578B\u4E3A\u4EC0\u4E48\u4F1A\u4E00\u672C\u6B63\u7ECF\u5730\u80E1\u8BF4\uFF08\u5E7B\u89C9\uFF09\uFF0C\u4EE5\u53CA RAG \u662F\u600E\u4E48\u7F13\u89E3\u5B83\u7684"
  },
  {
    phase: "\u7B2C 3~5 \u5468",
    title: "\u6838\u5FC3\u6280\u80FD\u4E0A\u624B",
    goal: "Prompt\u3001\u8BC4\u6D4B\u3001RAG \u4E09\u5927\u4EF6\u5168\u90E8\u4EB2\u624B\u8DD1\u901A",
    tasks: [
      "\u9009\u5B9A\u4E00\u4E2A\u719F\u6089\u9886\u57DF\u7684\u8BED\u6599\uFF08\u767E\u7BC7\u7EA7\uFF09\uFF0C\u8DDF\u7740\u65B9\u6CD5\u7BC7\u642D RAG \u95EE\u7B54\uFF1A\u5207\u7247 \u2192 \u5411\u91CF\u5316 \u2192 \u68C0\u7D22 \u2192 \u751F\u6210",
      "\u5EFA\u7ACB 50 \u6761\u6D4B\u8BD5\u96C6\uFF0C\u7528 LLM-as-a-Judge \u6253\u5206\uFF0C\u8DD1\u51FA\u7B2C\u4E00\u7248\u57FA\u7EBF",
      "\u505A\u4E24\u7EC4\u5BF9\u6BD4\u5B9E\u9A8C\uFF08\u6DF7\u5408\u68C0\u7D22\u3001Rerank \u6216 Prompt \u6539\u7248\uFF09\uFF0C\u8BB0\u5F55\u524D\u540E\u6570\u636E"
    ],
    deliver: "\u77E5\u8BC6\u95EE\u7B54 MVP + \u8BC4\u6D4B\u62A5\u544A\uFF08\u542B\u5BF9\u6BD4\u6570\u636E\uFF09",
    check: "\u62FF\u5230\u4E00\u4E2A\u300C\u7B54\u5F97\u4E0D\u597D\u300D\u7684 case\uFF0C\u80FD\u8BF4\u6E05\u95EE\u9898\u51FA\u5728\u68C0\u7D22\u8FD8\u662F\u751F\u6210\uFF0C\u5E76\u7ED9\u51FA\u4E0B\u4E00\u6B65\u52A8\u4F5C"
  },
  {
    phase: "\u7B2C 6~8 \u5468",
    title: "Agent \u4E0E\u81EA\u52A8\u5316",
    goal: "\u7406\u89E3\u4EFB\u52A1\u7F16\u6392\uFF0C\u505A\u51FA\u4F1A\u300C\u505A\u4E8B\u300D\u7684\u4E1C\u897F",
    tasks: [
      "\u7528 Dify / Coze \u7B49\u4F4E\u4EE3\u7801\u5E73\u53F0\u642D\u4E00\u4E2A\u591A\u6B65 Agent\uFF08\u5982\u8D44\u6599\u6536\u96C6 \u2192 \u5206\u6790 \u2192 \u4EA7\u51FA\u62A5\u544A\u7684\u81EA\u52A8\u5316\u6D41\u7A0B\uFF09",
      "\u52A0\u5165\u5DE5\u5177\u8C03\u7528\uFF08\u641C\u7D22\u3001\u6570\u636E\u5E93\u6216\u81EA\u5EFA API\uFF09\uFF0C\u4F53\u9A8C Workflow \u4E0E Agent \u7684\u8FB9\u754C",
      "\u7ED9 Agent \u8BBE\u8BA1\u5931\u8D25\u515C\u5E95\u7B56\u7565\uFF0C\u5E76\u8BB0\u5F55\u5178\u578B bad case"
    ],
    deliver: "\u4E00\u4E2A\u53EF\u6F14\u793A\u7684 Agent \u5DE5\u4F5C\u6D41 + bad case \u590D\u76D8",
    check: "\u9762\u5BF9\u4E00\u4E2A\u65B0\u9700\u6C42\uFF0C\u80FD\u7ACB\u523B\u5224\u65AD\u300C\u8FD9\u4E2A\u8BE5\u7528 Workflow \u8FD8\u662F Agent\u300D\u5E76\u8BF4\u51FA\u7406\u7531"
  },
  {
    phase: "\u7B2C 9~10 \u5468",
    title: "AI Coding \u6DF1\u5EA6\u5B9E\u8DF5",
    goal: "\u6210\u4E3A\u771F\u6B63\u300C\u61C2\u7814\u53D1\u7684\u4EA7\u54C1\u300D",
    tasks: [
      "\u7528 Cursor / Claude Code \u7B49\u5DE5\u5177\u4ECE\u96F6\u505A\u4E00\u4E2A\u5B8C\u6574\u5C0F\u4EA7\u54C1\uFF08\u7F51\u9875\u5E94\u7528\u5373\u53EF\uFF0C\u6BD4\u5982\u4F60\u81EA\u5DF1\u7684\u5B66\u4E60\u8FFD\u8E2A\u5DE5\u5177\uFF09",
      "\u8BB0\u5F55\u4EBA\u673A\u534F\u4F5C\u7684\u771F\u5B9E\u4F53\u611F\uFF1AAI \u5F3A\u5728\u54EA\u3001\u7FFB\u8F66\u5728\u54EA\u3001\u4F60\u600E\u4E48\u5F15\u5BFC\u5B83",
      "\u590D\u76D8\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F60\u5BF9\u300CAI Coding \u4EA7\u54C1\u8BBE\u8BA1\u300D\u7684\u65B0\u6D1E\u5BDF\u2014\u2014\u8FD9\u5C31\u662F\u6700\u9C9C\u6D3B\u7684\u4EA7\u54C1\u601D\u8003\u7D20\u6750"
    ],
    deliver: "\u4E00\u4E2A\u80FD\u8DD1\u7684\u5C0F\u4EA7\u54C1 + \u534F\u4F5C\u8FC7\u7A0B\u590D\u76D8",
    check: "\u80FD\u8BB2\u6E05\u4E00\u6B21 AI \u7FFB\u8F66\u7684\u5B8C\u6574\u8FC7\u7A0B\uFF1A\u73B0\u8C61 \u2192 \u5B9A\u4F4D \u2192 \u4F60\u7684\u5F15\u5BFC \u2192 \u7ED3\u679C\uFF0C\u5E76\u63D0\u70BC\u51FA\u4EA7\u54C1\u542F\u793A"
  },
  {
    phase: "\u7B2C 11~12 \u5468",
    title: "\u6C42\u804C\u51B2\u523A",
    goal: "\u628A\u79EF\u7D2F\u53D8\u6210 offer",
    tasks: [
      "\u628A 12 \u5468\u7684\u6240\u6709\u4EA7\u51FA\u6574\u7406\u6210\u4F5C\u54C1\u96C6\uFF1A\u4E00\u4E2A\u4E3B\u9879\u76EE\u6DF1\u6316 + \u4E24\u4E2A\u8F85\u9879\u76EE",
      "\u4E3B\u9879\u76EE\u5199\u5B8C\u6574\u4EA7\u54C1\u590D\u76D8\u6587\u6863\uFF08\u7528\u6237/\u6307\u6807/\u53D6\u820D/roadmap\uFF0C\u53C2\u7167\u6C42\u804C\u7BC7\u6A21\u677F\uFF09",
      "\u8FC7\u4E00\u904D\u6C42\u804C\u7BC7\u7684\u9AD8\u9891\u9762\u8BD5\u9898\uFF0C\u6BCF\u9898\u5199\u4E0B\u81EA\u5DF1\u7684\u7B54\u9898\u9AA8\u67B6\u5E76\u53E3\u5934\u6F14\u7EC3",
      "\u627E 2~3 \u4F4D\u4ECE\u4E1A\u8005\uFF08\u5B66\u957F\u5B66\u59D0\u3001\u793E\u533A\uFF09\u505A\u6A21\u62DF\u9762\u8BD5\u6216\u7B80\u5386 review"
    ],
    deliver: "\u4F5C\u54C1\u96C6 + \u9762\u8BD5\u9898\u5E93 + \u6A21\u62DF\u9762\u8BD5\u53CD\u9988",
    check: "\u4EFB\u610F\u62BD\u4E00\u9053\u9AD8\u9891\u9898\uFF0C\u80FD\u5728 90 \u79D2\u5185\u8BB2\u51FA\u300C\u7ED3\u8BBA\u5148\u884C + \u6846\u67B6 + \u81EA\u5DF1\u7684\u9879\u76EE\u4F50\u8BC1\u300D"
  }
];
function Roadmap() {
  return /* @__PURE__ */ jsxs7(Layout, { children: [
    /* @__PURE__ */ jsx7(
      PageHeader,
      {
        eyebrow: "\u5B66\u4E60\u8DEF\u5F84",
        title: "12 \u5468\u5165\u95E8\u8BA1\u5212",
        desc: "\u4E3A\u96F6\u57FA\u7840\u8BBE\u8BA1\u7684\u5B66\u4E60\u4E3B\u7EBF\uFF1A\u6BCF\u5468\u6709\u4E3B\u9898\u3001\u6709\u4EA7\u51FA\u3002\u6240\u6709\u4EA4\u4ED8\u7269\u76F4\u63A5\u6210\u4E3A\u4F5C\u54C1\u96C6\u7D20\u6750\u2014\u2014\u5B66\u4E60\u5373\u5907\u5F39\u3002\u9ED8\u8BA4\u6BCF\u5468\u6295\u5165 10~15 \u5C0F\u65F6\uFF0C\u5728\u804C/\u5728\u5B66\u53EF\u62C9\u957F\u5230 16 \u5468\uFF0C\u4F46\u522B\u538B\u7F29\u6BCF\u4E00\u9636\u6BB5\u7684\u52A8\u624B\u73AF\u8282\u3002"
      }
    ),
    /* @__PURE__ */ jsx7(Section, { kicker: "\u603B\u89C8", title: "\u4E94\u4E2A\u9636\u6BB5", children: /* @__PURE__ */ jsx7("div", { className: "overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm", children: /* @__PURE__ */ jsxs7("table", { className: "w-full min-w-[640px] text-left text-[14px]", children: [
      /* @__PURE__ */ jsx7("thead", { children: /* @__PURE__ */ jsxs7("tr", { className: "border-b border-zinc-200 bg-zinc-50", children: [
        /* @__PURE__ */ jsx7("th", { className: "px-4 py-3 font-semibold", children: "\u9636\u6BB5" }),
        /* @__PURE__ */ jsx7("th", { className: "px-4 py-3 font-semibold", children: "\u4E3B\u9898" }),
        /* @__PURE__ */ jsx7("th", { className: "px-4 py-3 font-semibold", children: "\u76EE\u6807" }),
        /* @__PURE__ */ jsx7("th", { className: "px-4 py-3 font-semibold", children: "\u5173\u952E\u4EA7\u51FA" })
      ] }) }),
      /* @__PURE__ */ jsx7("tbody", { children: PHASES.map((p, i) => /* @__PURE__ */ jsxs7("tr", { className: "border-b border-zinc-100 last:border-0 align-top", children: [
        /* @__PURE__ */ jsx7("td", { className: "whitespace-nowrap px-4 py-3 font-medium text-zinc-800", children: p.phase }),
        /* @__PURE__ */ jsx7("td", { className: "px-4 py-3 font-medium text-zinc-800", children: p.title }),
        /* @__PURE__ */ jsx7("td", { className: "px-4 py-3 text-zinc-600", children: p.goal }),
        /* @__PURE__ */ jsx7("td", { className: "px-4 py-3 text-zinc-600", children: p.deliver })
      ] }, i)) })
    ] }) }) }),
    PHASES.map((p, i) => /* @__PURE__ */ jsx7(Section, { kicker: p.phase, title: p.title, children: /* @__PURE__ */ jsxs7("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs7("div", { className: "md:col-span-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm", children: [
        /* @__PURE__ */ jsx7("p", { className: "text-sm font-semibold text-zinc-800", children: "\u672C\u5468\u4EFB\u52A1" }),
        /* @__PURE__ */ jsx7("ul", { className: "mt-3 space-y-2.5 text-[14px] leading-relaxed text-zinc-600", children: p.tasks.map((t, j) => /* @__PURE__ */ jsxs7("li", { className: "flex gap-2.5", children: [
          /* @__PURE__ */ jsx7("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" }),
          /* @__PURE__ */ jsx7("span", { children: t })
        ] }, j)) })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "flex flex-col justify-between rounded-xl border border-indigo-100 bg-indigo-50/60 p-5", children: [
        /* @__PURE__ */ jsxs7("div", { children: [
          /* @__PURE__ */ jsx7("p", { className: "text-xs font-semibold uppercase tracking-widest text-indigo-500", children: "\u9636\u6BB5\u76EE\u6807" }),
          /* @__PURE__ */ jsx7("p", { className: "mt-2 text-[14px] font-medium leading-relaxed text-zinc-800", children: p.goal })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "mt-4 rounded-lg bg-white/80 p-3", children: [
          /* @__PURE__ */ jsx7("p", { className: "text-xs font-semibold text-zinc-500", children: "\u4EA4\u4ED8\u7269" }),
          /* @__PURE__ */ jsx7("p", { className: "mt-1 text-[13px] font-medium leading-snug text-zinc-800", children: p.deliver })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "mt-3 rounded-lg bg-white/80 p-3", children: [
          /* @__PURE__ */ jsx7("p", { className: "text-xs font-semibold text-zinc-500", children: "\u81EA\u6D4B\u6807\u51C6" }),
          /* @__PURE__ */ jsx7("p", { className: "mt-1 text-[13px] font-medium leading-snug text-zinc-800", children: p.check })
        ] })
      ] })
    ] }) }, i)),
    /* @__PURE__ */ jsxs7(Section, { kicker: "\u65B9\u6CD5", title: "\u5B66\u5230\u54EA\u91CC\u7B97\u591F\uFF1A\u7070\u76D2\u578B PM \u7684\u6DF1\u5EA6\u8FB9\u754C", children: [
      /* @__PURE__ */ jsxs7("p", { className: "max-w-3xl text-[15px] leading-relaxed text-zinc-600", children: [
        "\u5165\u95E8\u671F\u6700\u5927\u7684\u65F6\u95F4\u9ED1\u6D1E\u4E0D\u662F\u300C\u5B66\u4E0D\u4F1A\u300D\uFF0C\u800C\u662F",
        /* @__PURE__ */ jsx7("span", { className: "font-semibold text-zinc-800", children: "\u5B66\u8FC7\u5934" }),
        "\uFF1A\u4E00\u4E2A\u6982\u5FF5\u521A\u660E\u767D\uFF0C\u53C8\u624E\u8FDB\u6E90\u7801\u548C\u516C\u5F0F\u91CC\u51FA\u4E0D\u6765\u3002\u66F4\u597D\u7684\u5B9A\u4F4D\u662F",
        /* @__PURE__ */ jsx7("span", { className: "font-semibold text-zinc-800", children: "\u300C\u7070\u76D2\u578B PM\u300D" }),
        "\u2014\u2014\u4E0D\u628A AI \u5F53\u5B8C\u5168\u4E0D\u53EF\u7406\u89E3\u7684\u9ED1\u76D2\uFF0C\u4E5F\u4E0D\u628A\u5199\u4EE3\u7801\u3001\u63A8\u516C\u5F0F\u5F53\u6210\u76EE\u6807\u3002 \u5224\u65AD\u8981\u4E0D\u8981\u7EE7\u7EED\u6DF1\u5165\u7684\u552F\u4E00\u6761\u6807\u51C6\uFF1A",
        /* @__PURE__ */ jsx7("span", { className: "font-semibold text-zinc-800", children: "\u8FD9\u4E2A\u6280\u672F\u7EC6\u8282\u4F1A\u6539\u53D8\u6211\u7684\u4EA7\u54C1\u5224\u65AD\u5417\uFF1F" }),
        "\u4E0D\u4F1A\uFF0C\u5C31\u505C\u3002"
      ] }),
      /* @__PURE__ */ jsx7("div", { className: "mt-5", children: /* @__PURE__ */ jsx7(
        Table,
        {
          head: ["\u5224\u65AD\u4E00\u4E2A\u6982\u5FF5\u662F\u5426\u5B66\u4F1A\u7684\u516D\u95EE", "\u793A\u4F8B\uFF1AFunction Calling"],
          rows: [
            ["\u5B83\u662F\u4EC0\u4E48\uFF1F", "\u6A21\u578B\u8F93\u51FA\u300C\u8BE5\u8C03\u54EA\u4E2A\u5DE5\u5177\u3001\u53C2\u6570\u662F\u4EC0\u4E48\u300D\u7684\u7ED3\u6784\u5316\u5EFA\u8BAE\uFF0C\u7531\u7A0B\u5E8F\u53BB\u771F\u6B63\u6267\u884C"],
            ["\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F", "\u8BA9\u6A21\u578B\u4ECE\u300C\u53EA\u4F1A\u8BF4\u300D\u53D8\u6210\u300C\u80FD\u67E5\u3001\u80FD\u7B97\u3001\u80FD\u64CD\u4F5C\u7CFB\u7EDF\u300D"],
            ["\u5B83\u5728\u7CFB\u7EDF\u7684\u54EA\u4E2A\u73AF\u8282\uFF1F", "\u6A21\u578B\u8F93\u51FA\u4E0E\u5916\u90E8\u5DE5\u5177\u4E4B\u95F4\u7684\u534F\u8BAE\u5C42"],
            ["\u5B83\u548C\u76F8\u90BB\u6982\u5FF5\u4EC0\u4E48\u5173\u7CFB\uFF1F", "\u662F\u7ED3\u6784\u5316\u8F93\u51FA\u7684\u7279\u4F8B\uFF1B\u662F Agent \u80FD\u300C\u505A\u4E8B\u300D\u7684\u57FA\u7840\u673A\u5236"],
            ["\u5B83\u4E0D\u80FD\u89E3\u51B3\u4EC0\u4E48\uFF1F", "\u4E0D\u4FDD\u8BC1\u5DE5\u5177\u672C\u8EAB\u662F\u5BF9\u7684\uFF0C\u4E5F\u4E0D\u4FDD\u8BC1\u6A21\u578B\u9009\u5BF9\u4E86\u5DE5\u5177"],
            ["\u4EC0\u4E48\u60C5\u51B5\u4E0B\u4E0D\u8BE5\u7528\u5B83\uFF1F", "\u7B54\u6848\u6A21\u578B\u5DF2\u77E5\u3001\u65E0\u9700\u5B9E\u65F6\u6570\u636E\u6216\u5916\u90E8\u52A8\u4F5C\u7684\u7EAF\u751F\u6210\u4EFB\u52A1"]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx7("div", { className: "mt-4", children: /* @__PURE__ */ jsx7(Note, { children: /* @__PURE__ */ jsx7("p", { children: "\u516D\u95EE\u90FD\u80FD\u7528\u81EA\u5DF1\u7684\u8BDD\u7B54\u4E0A\u6765\uFF0C\u8FD9\u4E2A\u6982\u5FF5\u5728 PM \u5C42\u9762\u5C31\u300C\u6BD5\u4E1A\u300D\u4E86\uFF0C\u7EE7\u7EED\u6DF1\u5165\u4EA4\u7ED9\u5DE5\u4F5C\u9700\u8981\u3002\u5B66\u4E60\u987A\u5E8F\u4E0A\u4E5F\u6709\u8BB2\u7A76\uFF1A\u5148\u5EFA\u7ACB\u6574\u4F53\u5730\u56FE\uFF0C\u518D\u5403\u900F\u4E00\u6B21\u6A21\u578B\u8C03\u7528\uFF0C\u7136\u540E Prompt \u2192 \u5DE5\u5177\u8C03\u7528 \u2192 RAG \u2192 Agent \u2192 \u8BC4\u6D4B\uFF0CMemory\u3001\u591A Agent\u3001MoE \u8FD9\u7C7B\u8FDB\u9636\u4E3B\u9898\u6309\u9700\u540E\u8865\u2014\u2014\u4E0D\u8981\u4ECA\u5929\u5B66\u63D0\u793A\u8BCD\u3001\u660E\u5929\u7814\u7A76\u6A21\u578B\u67B6\u6784\uFF0C\u4E3B\u7EBF\u6C38\u8FDC\u53EA\u6709\u4E00\u6761\u3002" }) }) })
    ] }),
    /* @__PURE__ */ jsx7(Section, { kicker: "\u7EC3\u4E60", title: "\u4E24\u4E2A\u9AD8\u6760\u6746\u7684\u65E5\u5E38\u7EC3\u4E60", children: /* @__PURE__ */ jsxs7("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx7(Card, { title: "\u9006\u5411 PRD", icon: BookOpenText, children: /* @__PURE__ */ jsx7("p", { children: "\u6311\u4E00\u4E2A\u4F60\u5E38\u7528\u7684 AI \u4EA7\u54C1\u529F\u80FD\uFF08\u6BD4\u5982 Kimi \u7684\u957F\u6587\u6863\u95EE\u7B54\u3001\u8C46\u5305\u7684\u8BED\u97F3\u901A\u8BDD\uFF09\uFF0C\u4E0D\u770B\u4EFB\u4F55\u8D44\u6599\uFF0C\u5012\u63A8\u5B83\u7684 PRD\uFF1A\u76EE\u6807\u7528\u6237\u662F\u8C01\u3001\u6838\u5FC3\u573A\u666F\u662F\u4EC0\u4E48\u3001\u80CC\u540E\u5927\u6982\u7528\u4E86\u4EC0\u4E48\u6280\u672F\u65B9\u6848\uFF08RAG\uFF1FFunction Calling\uFF1F\uFF09\u3001\u6548\u679C\u600E\u4E48\u8BC4\u3002\u5199\u5B8C\u518D\u53BB\u627E\u516C\u5F00\u8D44\u6599\u5BF9\u7B54\u6848\u3002\u8FD9\u662F\u628A\u300C\u7528\u8FC7\u7684\u4EA7\u54C1\u300D\u8F6C\u5316\u4E3A\u300C\u4EA7\u54C1\u624B\u611F\u300D\u6700\u5FEB\u7684\u65B9\u5F0F\u3002" }) }),
      /* @__PURE__ */ jsx7(Card, { title: "AI \u4EA7\u54C1\u89C2\u5BDF\u6E05\u5355", icon: Flag, children: /* @__PURE__ */ jsx7("p", { children: "\u6BCF\u4E0A\u624B\u4E00\u4E2A\u65B0 AI \u4EA7\u54C1\uFF0C\u6309\u56FA\u5B9A\u4E09\u6B65\u8BB0\u5F55\uFF1A\u731C\u5B83\u7684\u6280\u672F\u65B9\u6848 \u2192 \u731C\u5B83\u7684\u5546\u4E1A\u6A21\u5F0F \u2192 \u8BB0\u4E00\u4E2A\u4F60\u89C9\u5F97\u8BBE\u8BA1\u5F97\u597D\u6216\u4E0D\u597D\u7684\u7EC6\u8282\u3002\u8FDE\u7EED\u8BB0\u4E00\u4E2A\u6708\uFF0C\u4F60\u5728\u9762\u8BD5\u91CC\u804A\u300C\u6700\u8FD1\u5173\u6CE8\u7684 AI \u4EA7\u54C1\u300D\u65F6\uFF0C\u4F1A\u6709\u522B\u4EBA\u6CA1\u6709\u7684\u7EC6\u8282\u5BC6\u5EA6\u3002" }) })
    ] }) }),
    /* @__PURE__ */ jsxs7(Section, { kicker: "\u539F\u5219", title: "\u8D2F\u7A7F 12 \u5468\u7684\u4E09\u6761\u519B\u89C4", children: [
      /* @__PURE__ */ jsxs7("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsx7(Card, { title: "\u4E00\u5207\u4EE5\u4EA7\u51FA\u4E3A\u51C6", icon: Flag, children: /* @__PURE__ */ jsx7("p", { children: "\u8BFB\u4E86\u2260\u4F1A\u4E86\u3002\u6BCF\u5468\u672B\u81EA\u95EE\uFF1A\u8FD9\u5468\u6211\u591A\u4E86\u4E00\u4E2A\u4EC0\u4E48\u300C\u80FD\u7ED9\u522B\u4EBA\u770B\u300D\u7684\u4E1C\u897F\uFF1F\u8FDE\u7EED\u4E24\u5468\u7B54\u4E0D\u4E0A\u6765\uFF0C\u8BF4\u660E\u5B66\u4E60\u65B9\u5F0F\u504F\u4E86\u2014\u2014\u5927\u6982\u7387\u662F\u8F93\u5165\u592A\u591A\u3001\u52A8\u624B\u592A\u5C11\u3002" }) }),
        /* @__PURE__ */ jsx7(Card, { title: "\u5148\u8DD1\u901A\u518D\u4F18\u5316", icon: Route, children: /* @__PURE__ */ jsx7("p", { children: "RAG \u5148\u7528\u6700\u6734\u7D20\u7684\u65B9\u6848\u8DD1\u901A\u5168\u94FE\u8DEF\uFF0C\u518D\u8C08\u6DF7\u5408\u68C0\u7D22\u548C Rerank\uFF1BAgent \u5148\u7528\u4F4E\u4EE3\u7801\u5E73\u53F0\u642D\u51FA\u6765\uFF0C\u518D\u7814\u7A76\u6846\u67B6\u539F\u7406\u3002\u4ECE\u96F6\u8FFD\u6C42\u5B8C\u7F8E\u662F\u5165\u95E8\u671F\u6700\u5927\u7684\u65F6\u95F4\u9ED1\u6D1E\u3002" }) }),
        /* @__PURE__ */ jsx7(Card, { title: "\u8BB0\u5F55\u6BD4\u8BB0\u5FC6\u91CD\u8981", icon: BookOpenText, children: /* @__PURE__ */ jsx7("p", { children: "\u7EF4\u62A4\u4E00\u4EFD\u516C\u5F00\u7684\u5B66\u4E60\u7B14\u8BB0\uFF08\u6BCF\u5468\u4E00\u7BC7\uFF09\u3002\u5B83\u65E2\u662F\u4F60\u7684\u7B2C\u4E8C\u4F5C\u54C1\u96C6\uFF0C\u4E5F\u662F\u6C42\u804C\u671F\u7684\u300C\u70ED\u8BC1\u636E\u300D\uFF1A\u6301\u7EED\u3001\u516C\u5F00\u7684\u601D\u8003\u8BB0\u5F55\uFF0C\u6BD4\u7B80\u5386\u4E0A\u4E00\u884C\u300C\u719F\u6089 RAG\u300D\u53EF\u4FE1\u4E00\u767E\u500D\u3002" }) })
      ] }),
      /* @__PURE__ */ jsx7("div", { className: "mt-4", children: /* @__PURE__ */ jsx7(Note, { children: /* @__PURE__ */ jsx7("p", { children: "12 \u5468\u7ED3\u675F\u540E\uFF0C\u4F60\u624B\u91CC\u5E94\u8BE5\u6709\uFF1A\u4E00\u4E2A\u5E26\u8BC4\u6D4B\u6570\u636E\u7684 RAG \u9879\u76EE\u3001\u4E00\u4E2A Agent \u5DE5\u4F5C\u6D41\u3001\u4E00\u4E2A AI Coding \u505A\u51FA\u7684\u5C0F\u4EA7\u54C1\u3001\u82E5\u5E72\u4EA7\u54C1\u62C6\u89E3\u7B14\u8BB0\uFF0C\u4EE5\u53CA\u4E00\u4EFD\u80FD\u5E94\u5BF9\u9AD8\u9891\u9762\u8BD5\u9898\u7684\u7B54\u9898\u9AA8\u67B6\u3002\u8FD9\u5C31\u662F\u300C\u62FF\u53BB\u79CB\u62DB\u4E71\u6740\u300D\u7684\u5B8C\u6574\u5F39\u836F\u5E93\u2014\u2014\u5269\u4E0B\u7684\u4E8B\uFF0C\u662F\u6295\u9012\u548C\u8FED\u4EE3\u3002" }) }) })
    ] })
  ] });
}

// src/pages/Resources.jsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var CATEGORIES = [
  {
    title: "\u8BFE\u7A0B\u578B\uFF1A\u8DDF\u7740\u5B66\uFF0C\u9002\u5408\u96F6\u57FA\u7840\u8D77\u6B65",
    note: "\u7279\u5F81\u662F\u6709\u6E05\u6670\u7684\u7AE0\u8282\u7ED3\u6784\u3002\u9009\u4E00\u95E8\u4E3B\u7EBF\u8DDF\u5B8C\uFF0C\u4E0D\u8981\u6536\u85CF\u5403\u7070\u3002",
    repos: [
      {
        name: "microsoft/generative-ai-for-beginners",
        url: "https://github.com/microsoft/generative-ai-for-beginners",
        stars: "11.9w",
        desc: "\u5FAE\u8F6F\u5B98\u65B9\u751F\u6210\u5F0F AI \u5165\u95E8\u8BFE\u7A0B\uFF0C21 \u8BFE\u8986\u76D6\u4ECE\u539F\u7406\u5230 RAG\u3001Agent \u7684\u5B8C\u6574\u4E3B\u7EBF\uFF0C\u6709\u4E2D\u6587\u7248\u3002",
        why: "\u4F53\u7CFB\u6700\u5B8C\u6574\u7684\u514D\u8D39\u8BFE\u7A0B\uFF0C\u9002\u5408\u5F53 12 \u5468\u8BA1\u5212\u91CC\u7B2C 1~2 \u5468\u7684\u4E3B\u7EBF\u6559\u6750\u3002"
      },
      {
        name: "datawhalechina/llm-cookbook",
        url: "https://github.com/datawhalechina/llm-cookbook",
        stars: "2.5w",
        desc: "\u5434\u6069\u8FBE\u5927\u6A21\u578B\u7CFB\u5217\u8BFE\u7A0B\u7684\u4E2D\u6587\u7248\u5408\u96C6\uFF08Prompt\u3001RAG\u3001Agent\u3001\u5FAE\u8C03\u7B49\uFF09\uFF0CDatawhale \u793E\u533A\u7EF4\u62A4\u3002",
        why: "\u6BCF\u95E8\u5B50\u8BFE\u53EA\u8981\u51E0\u5C0F\u65F6\uFF0C\u4E2D\u6587\u53CB\u597D\uFF0C\u662F\u5FEB\u901F\u8865\u9F50\u5404\u4E3B\u9898\u8BA4\u77E5\u7684\u6700\u4F73\u7D20\u6750\u5E93\u3002"
      },
      {
        name: "itshen/learn-ai",
        url: "https://github.com/itshen/learn-ai",
        stars: "477",
        desc: "\u4E13\u4E3A AI \u4EA7\u54C1\u7ECF\u7406\u8BBE\u8BA1\u7684\u57F9\u8BAD\u8BFE\u7A0B\uFF0C\u4ECE\u5927\u6A21\u578B\u5E95\u5C42\u539F\u7406\u5230 AI \u5DE5\u7A0B\u5316\u843D\u5730\u3002",
        why: "\u5C11\u89C1\u7684\u300CPM \u89C6\u89D2\u300D\u4F53\u7CFB\u8BFE\uFF0C\u5185\u5BB9\u7EC4\u7EC7\u548C\u672C\u7AD9\u9AD8\u5EA6\u4E92\u8865\u3002"
      },
      {
        name: "liyupi/codefather",
        url: "https://github.com/liyupi/codefather",
        stars: "8.5w",
        desc: "\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF\u5927\u5168\uFF0C\u542B AI \u5E94\u7528\u5F00\u53D1\u3001AI Agent \u5F00\u53D1\u8DEF\u7EBF\u4E0E RAG\u3001MCP\u3001Prompt \u5B9E\u6218\u6559\u7A0B\u3002",
        why: "\u60F3\u8D70\u300C\u61C2\u4EA7\u54C1\u7684\u7814\u53D1\u300D\u8DEF\u7EBF\u65F6\u7684\u8DEF\u7EBF\u56FE\u53C2\u8003\uFF0CAI \u90E8\u5206\u7AE0\u8282\u53EF\u76F4\u63A5\u5F53\u65B9\u6CD5\u7BC7\u7684\u6269\u5C55\u9605\u8BFB\u3002"
      }
    ]
  },
  {
    title: "\u539F\u7406\u4E0E\u5DE5\u7A0B\u8BA4\u77E5\uFF1A\u542C\u61C2\u7814\u53D1\u7684\u9ED1\u8BDD",
    note: "\u4E0D\u6C42\u5168\u90E8\u8BFB\u5B8C\u3002\u6309\u9700\u67E5\u9605\uFF1A\u9762\u8BD5\u524D\u91CD\u70B9\u7FFB\u7EFC\u8FF0\u7684\u76EE\u5F55\u548C llm-action \u7684\u67B6\u6784\u7AE0\u8282\u3002",
    repos: [
      {
        name: "RUCAIBox/LLMSurvey",
        url: "https://github.com/RUCAIBox/LLMSurvey",
        stars: "1.2w",
        desc: "\u4EBA\u5927\u51FA\u54C1\u7684\u5927\u6A21\u578B\u7EFC\u8FF0\u8BBA\u6587\u5B98\u65B9\u9875\uFF0C\u628A LLM \u7684\u9884\u8BAD\u7EC3\u3001\u5FAE\u8C03\u3001\u5BF9\u9F50\u3001\u5E94\u7528\u4F53\u7CFB\u5316\u68B3\u7406\u3002",
        why: "\u60F3\u8981\u300C\u4F53\u7CFB\u5316\u539F\u7406\u89C2\u300D\u65F6\u7684\u6700\u4F73\u514D\u8D39\u6750\u6599\uFF0C\u8BFB\u76EE\u5F55\u5C31\u80FD\u5EFA\u7ACB\u77E5\u8BC6\u6846\u67B6\u3002"
      },
      {
        name: "liguodongiot/llm-action",
        url: "https://github.com/liguodongiot/llm-action",
        stars: "2.5w",
        desc: "\u5927\u6A21\u578B\u5DE5\u7A0B\u5316\u5B9E\u6218\uFF1A\u8BAD\u7EC3\u3001\u63A8\u7406\u3001\u90E8\u7F72\u3001LLMOps \u5168\u94FE\u8DEF\u3002",
        why: "\u548C\u7814\u53D1\u8BA8\u8BBA\u300C\u4E3A\u4EC0\u4E48\u6162\u3001\u4E3A\u4EC0\u4E48\u8D35\u300D\u65F6\u7684\u80CC\u666F\u77E5\u8BC6\u6765\u6E90\u3002"
      },
      {
        name: "datawhalechina/self-llm",
        url: "https://github.com/datawhalechina/self-llm",
        stars: "3.2w",
        desc: "\u5F00\u6E90\u5927\u6A21\u578B\u98DF\u7528\u6307\u5357\uFF1A\u5728 Linux \u73AF\u5883\u5FAE\u8C03\uFF08\u5168\u53C2/LoRA\uFF09\u548C\u90E8\u7F72\u56FD\u5185\u5916\u5F00\u6E90\u6A21\u578B\u7684\u4FDD\u59C6\u7EA7\u6559\u7A0B\u3002",
        why: "\u60F3\u4EB2\u624B\u6478\u4E00\u6B21\u6A21\u578B\u5FAE\u8C03\u65F6\u7167\u7740\u505A\uFF0C\u505A\u5B8C\u4F60\u5BF9\u300C\u6A21\u578B\u8FED\u4EE3\u6210\u672C\u300D\u7684\u7406\u89E3\u4F1A\u8D28\u53D8\u3002"
      },
      {
        name: "TingsongYu/PyTorch-Tutorial-2nd",
        url: "https://github.com/TingsongYu/PyTorch-Tutorial-2nd",
        stars: "4.6k",
        desc: "PyTorch \u5B9E\u7528\u6559\u7A0B\u7B2C\u4E8C\u7248\uFF0C\u4ECE\u96F6\u57FA\u7840\u5230 CV/NLP/LLM \u9879\u76EE\u5E94\u7528\u4E0E\u5DE5\u7A0B\u5316\u90E8\u7F72\u3002",
        why: "\u4EC5\u5F53\u4F60\u51B3\u5B9A\u8D70\u6280\u672F\u4FA7\u8DEF\u7EBF\u65F6\u9700\u8981\uFF1BPM \u4E3B\u7EBF\u53EF\u8DF3\u8FC7\u3002"
      }
    ]
  },
  {
    title: "Prompt \u4E0E PM \u6548\u7387\uFF1A\u65E5\u5E38\u5C31\u7528\u8D77\u6765",
    note: "Prompt \u5E93\u7684\u4EF7\u503C\u4E0D\u5728\u80CC\uFF0C\u5728\u4E8E\u5BF9\u6BD4\u522B\u4EBA\u600E\u4E48\u62C6\u89E3\u4EFB\u52A1\u7ED3\u6784\u3002",
    repos: [
      {
        name: "GitHubDaily/ChatGPT-Prompt-Engineering-for-Developers-in-Chinese",
        url: "https://github.com/GitHubDaily/ChatGPT-Prompt-Engineering-for-Developers-in-Chinese",
        stars: "2.1k",
        desc: "\u5434\u6069\u8FBE\u300A\u9762\u5411\u5F00\u53D1\u8005\u7684\u63D0\u793A\u8BCD\u5DE5\u7A0B\u300B\u8BFE\u7A0B\u7684\u4E2D\u82F1\u53CC\u8BED\u5B57\u5E55\u4E0E\u7B14\u8BB0\u3002",
        why: "Prompt \u5165\u95E8\u7684\u7ECF\u5178\u7B2C\u4E00\u8BFE\uFF0C\u914D\u5408\u65B9\u6CD5\u7BC7\u7B2C\u4E00\u8282\u7684\u6280\u5DE7\u8868\u4F7F\u7528\u3002"
      },
      {
        name: "f/awesome-chatgpt-prompts",
        url: "https://github.com/f/awesome-chatgpt-prompts",
        stars: "\u7ECF\u5178\u5408\u96C6",
        desc: "GitHub \u4E0A\u6700\u7ECF\u5178\u7684 Prompt \u89D2\u8272\u5E93\uFF0C\u793E\u533A\u6301\u7EED\u7EF4\u62A4\u591A\u5E74\u3002",
        why: "\u770B\u4F18\u79C0 Prompt \u7684\u300C\u89D2\u8272 + \u7EA6\u675F + \u8F93\u51FA\u300D\u7ED3\u6784\u600E\u4E48\u5199\u3002"
      },
      {
        name: "jiaxuan-tao/awesome-ai-product-manager",
        url: "https://github.com/jiaxuan-tao/awesome-ai-product-manager",
        stars: "42",
        desc: "AI \u4EA7\u54C1\u7ECF\u7406\u7684\u8D44\u6E90\u3001\u5DE5\u5177\u3001Prompt \u4E0E\u9879\u76EE\u53C2\u8003\u5408\u96C6\uFF0C\u65B0\u800C\u7CBE\u51C6\u3002",
        why: "\u661F\u6807\u5C11\u4F46\u5185\u5BB9\u5BF9\u53E3\uFF0C\u9002\u5408\u5F53\u300CPM \u4E13\u5C5E\u6536\u85CF\u5939\u300D\u5B9A\u671F\u7FFB\u65B0\u3002"
      },
      {
        name: "tanu-rana/Awesome-PM-Prompts",
        url: "https://github.com/tanu-rana/Awesome-PM-Prompts",
        stars: "\u5C0F\u800C\u7F8E",
        desc: "\u9762\u5411 AI \u4EA7\u54C1\u7ECF\u7406\u7684 Prompt \u5408\u96C6\uFF1A\u5199 PRD\u3001\u7ADE\u54C1\u5206\u6790\u3001\u9700\u6C42\u8BC4\u4F30\u7B49\u573A\u666F\u3002",
        why: "\u628A AI \u53D8\u6210\u65E5\u5E38\u5DE5\u4F5C\u53F0\u7684\u7B2C\u4E00\u6B65\uFF1A\u5148\u8BA9 AI \u5E72\u6389\u4F60\u7684\u91CD\u590D\u52B3\u52A8\u3002"
      }
    ]
  },
  {
    title: "Agent \u4E0E\u52A8\u624B\u642D\u5EFA\uFF1A\u505A\u51FA\u4F5C\u54C1\u96C6",
    note: "\u5BF9\u5E94 12 \u5468\u8BA1\u5212\u7684\u7B2C 6~10 \u5468\uFF1A\u4ECE\u4F4E\u4EE3\u7801\u5E73\u53F0\u5165\u624B\uFF0C\u6846\u67B6\u6E90\u7801\u4E0D\u5FC5\u786C\u5543\u3002",
    repos: [
      {
        name: "datawhalechina/hugging-multi-agent",
        url: "https://github.com/datawhalechina/hugging-multi-agent",
        stars: "1.4k",
        desc: "\u57FA\u4E8E MetaGPT \u7684\u591A\u667A\u80FD\u4F53\u6982\u5FF5\u5165\u95E8\u4E0E\u5F00\u53D1\u6559\u7A0B\u3002",
        why: "\u7406\u89E3\u300C\u591A\u4E2A Agent \u5982\u4F55\u50CF\u56E2\u961F\u4E00\u6837\u534F\u4F5C\u300D\u7684\u6700\u5FEB\u5165\u53E3\u3002"
      },
      {
        name: "ModelEngine-Group/app-platform",
        url: "https://github.com/ModelEngine-Group/app-platform",
        stars: "1.5k",
        desc: "\u9762\u5411\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\u548C\u4EA7\u54C1\u7ECF\u7406\u7684\u4F4E\u4EE3\u7801\u5927\u6A21\u578B\u5E94\u7528\u5DE5\u7A0B\u5E73\u53F0\u3002",
        why: "\u5B98\u65B9\u5B9A\u4F4D\u5C31\u5199\u660E\u300C\u4E3A PM \u63D0\u4F9B\u4ECE\u6982\u5FF5\u5230\u90E8\u7F72\u7684\u5168\u6D41\u7A0B\u73AF\u5883\u300D\uFF0C\u9002\u5408\u505A\u5DE5\u4F5C\u6D41\u5B9E\u8DF5\u3002"
      },
      {
        name: "peterfei/ai-agent-team",
        url: "https://github.com/peterfei/ai-agent-team",
        stars: "434",
        desc: "\u4E00\u952E\u642D\u5EFA 24/7 AI \u5F00\u53D1\u56E2\u961F\uFF1A\u4EA7\u54C1\u7ECF\u7406\u3001\u524D\u7AEF\u3001\u540E\u7AEF\u3001\u6D4B\u8BD5\u3001DevOps \u89D2\u8272\u5206\u5DE5\u534F\u4F5C\u3002",
        why: "\u4F53\u9A8C\u300CAI \u7EC4\u7EC7\u300D\u7684\u6700\u4F73\u73A9\u5177\uFF0C\u4E5F\u662F\u9762\u8BD5\u804A\u591A Agent \u534F\u4F5C\u7684\u73B0\u6210\u6848\u4F8B\u3002"
      },
      {
        name: "karozi/Awesome-Vibecoding-and-Speccoding-Resources",
        url: "https://github.com/karozi/Awesome-Vibecoding-and-Speccoding-Resources",
        stars: "\u65B0repo",
        desc: "Vibe Coding \u4E0E\u89C4\u683C\u9A71\u52A8\u5F00\u53D1\u7684\u6E05\u5355\u3001\u6307\u5357\u4E0E\u5DE5\u5177\u5408\u96C6\uFF0C\u9762\u5411 PM \u548C AI \u6784\u5EFA\u8005\u3002",
        why: "AI Coding \u5DE5\u4F5C\u6D41\u7684\u6700\u4F73\u5B9E\u8DF5\u5E93\uFF0C\u914D\u5408\u65B9\u6CD5\u7BC7\u6210\u672C\u8D26\u4E00\u8D77\u770B\u3002"
      }
    ]
  },
  {
    title: "\u5B98\u65B9\u624B\u518C\u4E0E\u5DE5\u5177\u6846\u67B6\uFF1A\u968F\u67E5\u968F\u7528",
    note: "\u8FD9\u7C7B\u4E0D\u662F\u300C\u8BFB\u5B8C\u300D\u7684\u8D44\u6E90\uFF0C\u662F\u300C\u7528\u5230\u518D\u67E5\u300D\u7684\u5B57\u5178\u3002",
    repos: [
      {
        name: "openai/openai-cookbook",
        url: "https://github.com/openai/openai-cookbook",
        stars: "\u5B98\u65B9\u6743\u5A01",
        desc: "OpenAI \u5B98\u65B9\u793A\u4F8B\u4E0E\u6307\u5357\u624B\u518C\uFF1AAPI \u7528\u6CD5\u3001Embedding\u3001RAG\u3001\u8BC4\u6D4B\u7B49\u5B98\u65B9\u6700\u4F73\u5B9E\u8DF5\u3002",
        why: "\u5DE5\u7A0B\u7EC6\u8282\u7684\u6700\u7EC8\u88C1\u5224\u3002\u7814\u53D1\u8BF4\u7684\u65B9\u6848\u5BF9\u4E0D\u5BF9\uFF0C\u7FFB\u8FD9\u91CC\u9A8C\u8BC1\u3002"
      },
      {
        name: "Hoper-J/AI-Guide-and-Demos-zh_CN",
        url: "https://github.com/Hoper-J/AI-Guide-and-Demos-zh_CN",
        stars: "\u4E2D\u6587\u53CB\u597D",
        desc: "\u4E2D\u6587 AI \u5B66\u4E60\u6307\u5357\u4E0E\u53EF\u8FD0\u884C\u6F14\u793A\u5408\u96C6\u3002",
        why: "\u60F3\u8DD1\u901A\u67D0\u4E2A\u6F14\u793A\u65F6\u5148\u6765\u8FD9\u91CC\u627E\u73B0\u6210\u4E2D\u6587\u7248\u3002"
      },
      {
        name: "langgenius/dify",
        url: "https://github.com/langgenius/dify",
        stars: "\u5934\u90E8\u6846\u67B6",
        desc: "\u6700\u6D41\u884C\u7684\u5F00\u6E90 LLM \u5E94\u7528\u5F00\u53D1\u5E73\u53F0\uFF1A\u53EF\u89C6\u5316\u7F16\u6392\u5DE5\u4F5C\u6D41\u3001RAG\u3001Agent\u3002",
        why: "12 \u5468\u8BA1\u5212\u91CC\u642D Agent \u7684\u9996\u9009\u5DE5\u5177\u4E4B\u4E00\uFF0C\u4F4E\u4EE3\u7801\u4E0A\u624B\u3002"
      },
      {
        name: "langchain-ai/langchain",
        url: "https://github.com/langchain-ai/langchain",
        stars: "\u5934\u90E8\u6846\u67B6",
        desc: "\u6700\u77E5\u540D\u7684\u5927\u6A21\u578B\u5E94\u7528\u5F00\u53D1\u6846\u67B6\uFF0C\u751F\u6001\u548C\u6559\u7A0B\u6700\u5168\u3002",
        why: "JD \u91CC\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684\u6846\u67B6\u540D\uFF0C\u81F3\u5C11\u8981\u80FD\u8BF4\u51FA\u5B83\u7684\u5B9A\u4F4D\u548C\u751F\u6001\u3002"
      }
    ]
  }
];
function Resources() {
  return /* @__PURE__ */ jsxs8(Layout, { children: [
    /* @__PURE__ */ jsx8(
      PageHeader,
      {
        eyebrow: "\u8D44\u6E90\u5BFC\u822A",
        title: "GitHub \u4F18\u8D28\u4ED3\u5E93\u7CBE\u9009",
        desc: "GitHub \u4E0A AI \u5B66\u4E60\u8D44\u6E90\u6781\u591A\uFF0C\u4F46 90% \u662F\u6536\u85CF\u5939\u5403\u7070\u3002\u8FD9\u4EFD\u6E05\u5355\u6309\u300C\u4F60\u5904\u5728\u54EA\u4E2A\u9636\u6BB5\u300D\u7CBE\u9009\u6574\u7406\uFF0C\u6BCF\u6761\u90FD\u6807\u6CE8\u4E86\u5B83\u5728\u4F60\u5B66\u4E60\u8DEF\u5F84\u91CC\u7684\u4F4D\u7F6E\u3002\u661F\u6807\u6570\u4E3A 2026 \u5E74 9 \u6708\u67E5\u8BE2 GitHub API \u7684\u4E00\u624B\u6570\u636E\uFF0C\u4EC5\u4F9B\u53C2\u8003\u3002"
      }
    ),
    /* @__PURE__ */ jsx8(Section, { kicker: "\u600E\u4E48\u7528", title: "\u9009\u8D44\u6E90\u7684\u4E09\u6761\u539F\u5219", children: /* @__PURE__ */ jsxs8(Grid, { cols: 3, children: [
      /* @__PURE__ */ jsx8(Card, { title: "\u4E00\u95E8\u4E3B\u7EBF\uFF0C\u591A\u4E2A\u67E5\u9605", children: /* @__PURE__ */ jsx8("p", { children: "\u8BFE\u7A0B\u578B\u8D44\u6E90\u9009\u4E00\u95E8\u5F53\u4E3B\u7EBF\u8DDF\u5B8C\uFF0C\u5176\u4F59\u5168\u90E8\u964D\u7EA7\u4E3A\u300C\u5B57\u5178\u300D\u3002\u540C\u65F6\u8FFD\u4E09\u95E8\u8BFE\u7684\u4E0B\u573A\u901A\u5E38\u662F\u96F6\u95E8\u5B8C\u6210\u3002" }) }),
      /* @__PURE__ */ jsx8(Card, { title: "PM \u89C6\u89D2\u4F18\u5148", children: /* @__PURE__ */ jsx8("p", { children: "\u540C\u4E3B\u9898\u4E0B\u4F18\u5148\u9009\u9762\u5411 PM / \u975E\u5DE5\u7A0B\u5E08\u7684\u8D44\u6E90\uFF1B\u6280\u672F\u6559\u7A0B\u53EA\u5728\u9700\u8981\u300C\u4EB2\u624B\u9A8C\u8BC1\u300D\u65F6\u624D\u8BFB\u4EE3\u7801\u90E8\u5206\u3002" }) }),
      /* @__PURE__ */ jsx8(Card, { title: "\u4EA7\u51FA\u5012\u903C\u8F93\u5165", children: /* @__PURE__ */ jsx8("p", { children: "\u6BCF\u4E2A\u8D44\u6E90\u8BFB\u5B8C\u5FC5\u987B\u4EA7\u51FA\u70B9\u4EC0\u4E48\uFF1A\u4E00\u9875\u7B14\u8BB0\u3001\u4E00\u4E2A\u8DD1\u901A\u7684 demo\u3001\u4E00\u4EFD\u5BF9\u6BD4\u6570\u636E\u3002\u5426\u5219\u4E0D\u662F\u5B66\u8FC7\uFF0C\u53EA\u662F\u5237\u8FC7\u3002" }) })
    ] }) }),
    CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxs8(Section, { kicker: `\u5206\u7C7B ${i + 1}`, title: cat.title, children: [
      /* @__PURE__ */ jsx8("p", { className: "-mt-3 mb-4 text-[14px] text-zinc-600", children: cat.note }),
      /* @__PURE__ */ jsx8("div", { className: "grid gap-4 md:grid-cols-2", children: cat.repos.map((r) => /* @__PURE__ */ jsxs8(
        "div",
        {
          className: "flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm",
          children: [
            /* @__PURE__ */ jsxs8("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxs8(
                "a",
                {
                  href: r.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "flex items-center gap-2 text-[14px] font-semibold text-indigo-600 hover:underline",
                  children: [
                    /* @__PURE__ */ jsx8(Github, { className: "h-4 w-4 shrink-0" }),
                    r.name,
                    /* @__PURE__ */ jsx8(ExternalLink, { className: "h-3.5 w-3.5 shrink-0 text-zinc-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs8("span", { className: "flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700", children: [
                /* @__PURE__ */ jsx8(Star, { className: "h-3 w-3" }),
                r.stars
              ] })
            ] }),
            /* @__PURE__ */ jsx8("p", { className: "mt-2.5 text-[13.5px] leading-relaxed text-zinc-600", children: r.desc }),
            /* @__PURE__ */ jsxs8("p", { className: "mt-auto pt-3 text-[13px] leading-relaxed text-zinc-800", children: [
              /* @__PURE__ */ jsx8("span", { className: "font-semibold", children: "\u5BF9\u4F60\u7684\u4EF7\u503C\uFF1A" }),
              r.why
            ] })
          ]
        },
        r.name
      )) })
    ] }, i)),
    /* @__PURE__ */ jsxs8(Section, { kicker: "\u5BF9\u7167", title: "\u548C 12 \u5468\u8BA1\u5212\u600E\u4E48\u914D\u5408", children: [
      /* @__PURE__ */ jsx8(
        Table,
        {
          head: ["\u5B66\u4E60\u9636\u6BB5", "\u63A8\u8350\u914D\u5408\u7684\u8D44\u6E90"],
          rows: [
            ["\u7B2C 1~2 \u5468 \xB7 \u5EFA\u7ACB\u5750\u6807\u7CFB", "\u672C\u7AD9\u6982\u5FF5\u7BC7/\u884C\u4E1A\u7BC7 + generative-ai-for-beginners \u524D\u51E0\u8BFE + LLMSurvey \u76EE\u5F55"],
            ["\u7B2C 3~5 \u5468 \xB7 \u6838\u5FC3\u6280\u80FD\u4E0A\u624B", "llm-cookbook \u7684 Prompt/RAG \u5B50\u8BFE + self-llm\uFF08\u60F3\u52A8\u624B\u5FAE\u8C03\u65F6\uFF09"],
            ["\u7B2C 6~8 \u5468 \xB7 Agent \u4E0E\u81EA\u52A8\u5316", "hugging-multi-agent + Dify \u5B98\u65B9\u6587\u6863 + ai-agent-team \u6848\u4F8B\u62C6\u89E3"],
            ["\u7B2C 9~10 \u5468 \xB7 AI Coding \u6DF1\u5EA6\u5B9E\u8DF5", "Awesome-Vibecoding \u8D44\u6E90 + openai-cookbook \u67E5\u5DE5\u7A0B\u7EC6\u8282"],
            ["\u7B2C 11~12 \u5468 \xB7 \u6C42\u804C\u51B2\u523A", "awesome-ai-product-manager / Awesome-PM-Prompts \u8865\u9762\u8BD5\u5F39\u836F"]
          ]
        }
      ),
      /* @__PURE__ */ jsx8("div", { className: "mt-4", children: /* @__PURE__ */ jsx8(Note, { children: /* @__PURE__ */ jsx8("p", { children: "\u8D44\u6E90\u4F1A\u8FC7\u65F6\uFF0C\u65B9\u6CD5\u4E0D\u4F1A\uFF1A\u6311\u8D44\u6E90\u6C38\u8FDC\u5148\u770B\u300C\u66F4\u65B0\u9891\u7387\u3001\u4F5C\u8005\u80CC\u666F\u3001\u793E\u533A\u6D3B\u8DC3\u5EA6\u300D\u4E09\u4EF6\u4E8B\uFF0C\u518D\u770B\u661F\u6807\u6570\u3002\u672C\u6E05\u5355\u5728 2026 \u5E74 9 \u6708\u6838\u9A8C\u8FC7\u4E00\u8F6E\uFF0C\u4E4B\u540E\u8BF7\u81EA\u884C\u7528\u540C\u6837\u6807\u51C6\u6C70\u6362\u3002" }) }) })
    ] })
  ] });
}

// src/pages/Practice.jsx
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function Practice() {
  return /* @__PURE__ */ jsxs9(Layout, { children: [
    /* @__PURE__ */ jsx9(
      PageHeader,
      {
        eyebrow: "\u5B9E\u64CD\u5BA4",
        title: "\u4ECE 0 \u5230 1\uFF1A\u642D\u4E00\u4E2A\u4F1A\u81EA\u5DF1\u5E72\u6D3B\u7684\u81EA\u52A8\u5316\u573A\u666F",
        desc: "\u8FD9\u4E00\u9875\u4E0D\u8BB2\u6982\u5FF5\uFF0C\u76F4\u63A5\u5E26\u4F60\u8D70\u5B8C\u4E00\u4E2A\u5B8C\u6574 MVP\uFF1A\u300C\u77E5\u8BC6\u5E93\u6BCF\u65E5\u81EA\u52A8\u8D28\u68C0\u673A\u5668\u4EBA\u300D\u2014\u2014\u6BCF\u5929\u5B9A\u65F6\u8DD1\u8BC4\u6D4B\u9898\u3001\u81EA\u52A8\u8BC4\u5206\u3001\u81EA\u52A8\u51FA\u65E5\u62A5\u3001\u8DCC\u7834\u9608\u503C\u81EA\u52A8\u544A\u8B66\u3002\u5B83\u7528\u5230\u7684\u6BCF\u4E00\u4E2A\u96F6\u4EF6\uFF0C\u6982\u5FF5\u7BC7\u548C\u65B9\u6CD5\u7BC7\u90FD\u8BB2\u8FC7\uFF1B\u642D\u5B8C\u5B83\uFF0C\u4F60\u5C31\u62E5\u6709\u4E86\u4E00\u4E2A\u53EF\u4EE5\u5199\u8FDB\u7B80\u5386\u3001\u53EF\u4EE5\u5728\u9762\u8BD5\u91CC\u5B8C\u6574\u8BB2 5 \u5206\u949F\u7684\u4F5C\u54C1\u3002"
      }
    ),
    /* @__PURE__ */ jsx9(Section, { kicker: "01 \xB7 \u573A\u666F", title: "\u5148\u60F3\u6E05\u695A\uFF1A\u8C01\u5728\u4EC0\u4E48\u65F6\u5019\u9700\u8981\u4EC0\u4E48", children: /* @__PURE__ */ jsxs9("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx9(Card, { title: "\u9700\u6C42\u4E00\u53E5\u8BDD", icon: FlaskConical, children: /* @__PURE__ */ jsxs9("p", { children: [
        "\u4F60\u7EF4\u62A4\u4E86\u4E00\u4E2A\u77E5\u8BC6\u5E93\u95EE\u7B54\u5E94\u7528\uFF08\u6BD4\u5982\u7528 Dify \u642D\u7684\uFF09\u3002\u77E5\u8BC6\u5E93\u5929\u5929\u6709\u4EBA\u6539\u6587\u6863\u3001\u8C03\u5207\u7247\u3001\u6362\u6A21\u578B\u2014\u2014",
        /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u4ECA\u5929\u5B83\u56DE\u7B54\u5F97\u8FD8\u50CF\u6628\u5929\u4E00\u6837\u597D\u5417\uFF1F" }),
        "\u6CA1\u4EBA\u77E5\u9053\uFF0C\u76F4\u5230\u7528\u6237\u8E29\u5751\u3002\u4F60\u9700\u8981\u7684\u4E0D\u662F\u4E00\u4E2A\u66F4\u806A\u660E\u7684\u6A21\u578B\uFF0C\u800C\u662F\u4E00\u4E2A\u6BCF\u5929\u81EA\u52A8\u66FF\u4F60\u300C\u62BD\u8003\u300D\u7684\u8D28\u68C0\u5458\u3002"
      ] }) }),
      /* @__PURE__ */ jsx9(Card, { title: "\u4E3A\u4EC0\u4E48\u8FD9\u4E2A\u573A\u666F\u9002\u5408\u7EC3\u624B", icon: GitBranch, children: /* @__PURE__ */ jsxs9("ul", { className: "mt-1 space-y-2", children: [
        /* @__PURE__ */ jsxs9("li", { children: [
          "\xB7 ",
          /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u9AD8\u9891\u771F\u5B9E" }),
          "\uFF1A\u4F01\u4E1A\u91CC\u5BF9\u5E94\u7684\u771F\u5B9E\u7CFB\u7EDF\u53EB\u300C\u8BC4\u6D4B\u51C6\u5165/\u8D28\u91CF\u95E8\u7981\u300D"
        ] }),
        /* @__PURE__ */ jsxs9("li", { children: [
          "\xB7 ",
          /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u95ED\u73AF\u5B8C\u6574" }),
          "\uFF1A\u89E6\u53D1 \u2192 \u6267\u884C \u2192 \u5224\u65AD \u2192 \u4EA7\u51FA \u2192 \u544A\u8B66\uFF0C\u81EA\u52A8\u5316\u8981\u7D20\u9F50\u5168"
        ] }),
        /* @__PURE__ */ jsxs9("li", { children: [
          "\xB7 ",
          /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u53EF\u91CF\u5316" }),
          "\uFF1A\u51C6\u786E\u7387\u3001\u62D2\u7B54\u7387\u90FD\u662F\u6570\u5B57\uFF0C\u6539\u8FDB\u524D\u540E\u6709\u5BF9\u6BD4"
        ] }),
        /* @__PURE__ */ jsxs9("li", { children: [
          "\xB7 ",
          /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u6210\u672C\u4E3A\u96F6" }),
          "\uFF1A\u590D\u7528\u4F60\u7684 RAG \u8BC4\u6D4B\u5B9E\u9A8C\u5BA4\uFF0C\u811A\u672C\u52A0\u8C03\u5EA6\u5373\u53EF"
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs9(Section, { kicker: "02 \xB7 \u67B6\u6784", title: "\u4E94\u4E2A\u96F6\u4EF6\u4E32\u6210\u4E00\u6761\u6D41\u6C34\u7EBF", children: [
      /* @__PURE__ */ jsx9("div", { className: "flex flex-wrap items-center gap-2 text-[13px] font-medium", children: ["\u5B9A\u65F6\u89E6\u53D1\u5668", "\u6279\u91CF\u63D0\u95EE", "LLM \u88C1\u5224\u8BC4\u5206", "\u6C47\u603B\u7EDF\u8BA1", "\u65E5\u62A5\u4E0E\u544A\u8B66"].map((s, i) => /* @__PURE__ */ jsxs9("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx9("span", { className: "rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-indigo-700", children: s }),
        i < 4 && /* @__PURE__ */ jsx9("span", { className: "text-zinc-300", children: "\u2192" })
      ] }, s)) }),
      /* @__PURE__ */ jsx9("div", { className: "mt-5", children: /* @__PURE__ */ jsx9(
        Table,
        {
          head: ["\u73AF\u8282", "\u5E72\u4EC0\u4E48", "\u7528\u4EC0\u4E48\u5B9E\u73B0"],
          rows: [
            ["\u5B9A\u65F6\u89E6\u53D1", "\u6BCF\u5929\u56FA\u5B9A\u65F6\u95F4\uFF08\u5982\u65E9 8 \u70B9\uFF09\u81EA\u52A8\u542F\u52A8\u4E00\u8F6E\u8D28\u68C0", "\u7CFB\u7EDF cron / GitHub Actions \u5B9A\u65F6\u4EFB\u52A1\uFF1BDify \u4FA7\u4E5F\u53EF\u7528\u5DE5\u4F5C\u6D41+\u5916\u90E8\u8C03\u5EA6"],
            ["\u6279\u91CF\u63D0\u95EE", "\u628A\u8BC4\u6D4B\u96C6 30 \u9053\u9898\u9010\u6761\u53D1\u7ED9\u77E5\u8BC6\u5E93\u95EE\u7B54\u5E94\u7528\uFF0C\u6536\u96C6\u56DE\u7B54", "ask_dify.py\uFF08Dify chat-messages API\uFF0Capp- \u5BC6\u94A5\uFF09"],
            ["\u81EA\u52A8\u8BC4\u5206", "\u88C1\u5224\u6A21\u578B\u5BF9\u7167\u8BC4\u5206\u8981\u70B9\u9010\u9898\u6253\u5206\uFF1A\u4E8B\u5B9E\u9898 0/1/2\uFF0C\u8FB9\u754C\u9898 0/1", "judge.py\uFF08\u4EFB\u610F OpenAI \u517C\u5BB9\u63A5\u53E3\uFF0Cglm-4-flash \u514D\u8D39\uFF09"],
            ["\u6C47\u603B\u7EDF\u8BA1", "\u7B97\u603B\u5206\u3001\u6309\u9898\u578B\u62C6\u5206\u3001\u548C\u6628\u5929\u7684\u7ED3\u679C\u5BF9\u6BD4", "\u51E0\u884C Python \u805A\u5408 results.csv\uFF1B\u4E0D\u7528\u6570\u636E\u5E93\uFF0CCSV \u5C31\u662F\u5B58\u50A8"],
            ["\u65E5\u62A5\u4E0E\u544A\u8B66", "\u751F\u6210\u4E00\u53E5\u8BDD\u65E5\u62A5\u63A8\u9001\u7ED9\u81EA\u5DF1\uFF1B\u51C6\u786E\u7387\u8DCC\u7834\u9608\u503C\uFF08\u5982 85%\uFF09\u65F6\u53D1\u544A\u8B66", "\u90AE\u4EF6 / \u7FA4\u673A\u5668\u4EBA webhook\uFF1B\u544A\u8B66\u903B\u8F91 = \u4E00\u4E2A if \u5224\u65AD"]
          ]
        }
      ) }),
      /* @__PURE__ */ jsx9("div", { className: "mt-4", children: /* @__PURE__ */ jsx9(Note, { children: /* @__PURE__ */ jsxs9("p", { children: [
        "\u6CE8\u610F\u8FD9\u6761\u94FE\u8DEF\u7684\u6027\u8D28\uFF1A\u6B65\u9AA4\u5168\u90E8\u53EF\u679A\u4E3E\u3001\u987A\u5E8F\u56FA\u5B9A\u3001\u8981\u6C42\u7A33\u5B9A\u6267\u884C\u2014\u2014\u8FD9\u662F\u5178\u578B\u7684",
        /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: " Workflow \u573A\u666F\u800C\u4E0D\u662F Agent \u573A\u666F" }),
        "\uFF08\u65B9\u6CD5\u7BC7\u7B2C 7 \u8282\u7684\u5224\u65AD\u6811\uFF09\u3002\u552F\u4E00\u7528\u5230\u6A21\u578B\u81EA\u4E3B\u5224\u65AD\u7684\u5730\u65B9\u53EA\u6709\u300C\u88C1\u5224\u6253\u5206\u300D\u8FD9\u4E00\u4E2A\u8282\u70B9\u3002"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs9(Section, { kicker: "03 \xB7 \u53D6\u820D", title: "MVP \u7684\u8FB9\u754C\uFF1A\u660E\u786E\u4E0D\u505A\u4EC0\u4E48\uFF0C\u6BD4\u505A\u4EC0\u4E48\u66F4\u91CD\u8981", children: [
      /* @__PURE__ */ jsx9(
        Table,
        {
          head: ["\u7EF4\u5EA6", "MVP \u505A\u4EC0\u4E48", "\u660E\u786E\u4E0D\u505A\u4EC0\u4E48"],
          rows: [
            ["\u9898\u91CF", "30 \u9053\u7CBE\u9009\u9898\uFF08\u4E8B\u5B9E/\u7EFC\u5408/\u8FB9\u754C\u5404 10 \u9053\uFF09", "\u4E0D\u4E0A\u5168\u91CF\u56DE\u5F52\uFF0C\u4E0D\u8FFD\u6C42\u8986\u76D6\u7387"],
            ["\u5B58\u50A8", "CSV \u6587\u4EF6\u6309\u65E5\u671F\u547D\u540D\u5B58\u6863", "\u4E0D\u5EFA\u6570\u636E\u5E93\u3001\u4E0D\u505A\u540E\u53F0\u7CFB\u7EDF"],
            ["\u4EA7\u51FA", "\u6BCF\u65E5\u4E00\u53E5\u8BDD\u65E5\u62A5 + \u4E00\u5F20\u5206\u578B\u5F97\u5206\u8868", "\u4E0D\u505A Web \u770B\u677F\u3001\u4E0D\u505A\u6743\u9650\u7CFB\u7EDF"],
            ["\u90E8\u7F72", "\u672C\u673A cron \u5B9A\u65F6\u8DD1", "\u4E0D\u4E0A\u670D\u52A1\u5668\u3001\u4E0D\u505A\u9AD8\u53EF\u7528"],
            ["\u544A\u8B66", "\u8DCC\u7834\u9608\u503C\u53D1\u4E00\u6761\u6D88\u606F", "\u4E0D\u505A\u5DE5\u5355\u6D41\u8F6C\u3001\u4E0D\u505A\u81EA\u52A8\u56DE\u6EDA"]
          ]
        }
      ),
      /* @__PURE__ */ jsx9("div", { className: "mt-4", children: /* @__PURE__ */ jsx9(Note, { children: /* @__PURE__ */ jsxs9("p", { children: [
        "\u6BCF\u4E00\u884C\u300C\u4E0D\u505A\u300D\u90FD\u662F\u4E00\u4E2A\u4EA7\u54C1\u51B3\u7B56\uFF1A\u7528\u6700\u4F4E\u6210\u672C\u9A8C\u8BC1\u300C\u81EA\u52A8\u8D28\u68C0\u300D\u8FD9\u4EF6\u4E8B\u672C\u8EAB\u6709\u6CA1\u6709\u4EF7\u503C\u3002MVP \u7684\u601D\u7EF4\u4E0D\u662F\u300C\u5148\u505A\u7B80\u5355\u7684\u300D\uFF0C\u800C\u662F",
        /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u300C\u53EA\u9A8C\u8BC1\u6700\u6838\u5FC3\u7684\u90A3\u4E2A\u5047\u8BBE\u300D" }),
        "\u2014\u2014\u8FD9\u91CC\u7684\u5047\u8BBE\u662F\uFF1A\u6BCF\u65E5\u8D28\u68C0\u80FD\u63D0\u524D\u53D1\u73B0\u77E5\u8BC6\u5E93\u8D28\u91CF\u56DE\u9000\u3002"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx9(Section, { kicker: "04 \xB7 \u52A8\u624B", title: "\u516D\u6B65\u642D\u5B8C\uFF08\u590D\u7528\u4F60\u5DF2\u6709\u7684\u8BC4\u6D4B\u5B9E\u9A8C\u5BA4\uFF09", children: /* @__PURE__ */ jsx9(
      Steps,
      {
        items: [
          {
            title: "\u51C6\u5907\u8BC4\u6D4B\u8D44\u4EA7\uFF08\u5DF2\u6709\uFF09",
            desc: "rag-eval-lab \u91CC\u7684 questions.csv\uFF0830 \u9898\u5E26\u8BC4\u5206\u8981\u70B9\uFF09\u3001ask_dify.py\u3001judge.py \u76F4\u63A5\u590D\u7528\uFF0C\u8FD9\u5C31\u662F\u8D28\u68C0\u5458\u7684\u300C\u8003\u5377\u300D\u548C\u300C\u7EA2\u7B14\u300D\u3002"
          },
          {
            title: "\u5199\u4E3B\u63A7\u811A\u672C daily_check.py",
            desc: "\u987A\u5E8F\u8C03\u7528\uFF1Aask_dify --tag $(\u65E5\u671F) \u2192 judge --tag $(\u65E5\u671F) \u2192 \u8BFB results \u7B97\u603B\u5206 \u2192 \u548C\u6628\u5929\u5BF9\u6BD4 \u2192 \u751F\u6210\u65E5\u62A5\u6587\u672C\u3002\u4E00\u4E2A\u6587\u4EF6\uFF0C50 \u884C\u4EE5\u5185\u3002"
          },
          {
            title: "\u52A0\u9608\u503C\u544A\u8B66",
            desc: "\u65E5\u62A5\u751F\u6210\u540E\u52A0\u5224\u65AD\uFF1A\u603B\u5206 < 85% \u6216\u8FB9\u754C\u9898\u51FA\u73B0\u5E7B\u89C9\u56DE\u7B54 \u2192 \u62FC\u4E00\u6761\u544A\u8B66\u6D88\u606F\u3002\u544A\u8B66\u6587\u6848\u5199\u6E05\u300C\u54EA\u7EC4\u6307\u6807\u8DCC\u4E86\u3001\u8DCC\u4E86\u591A\u5C11\u3001\u6000\u7591\u65B9\u5411\u300D\u3002"
          },
          {
            title: "\u63A5\u63A8\u9001\u901A\u9053",
            desc: "\u90AE\u4EF6\uFF08SMTP \u51E0\u884C\u4EE3\u7801\uFF09\u6216\u7FA4\u673A\u5668\u4EBA webhook\uFF08\u98DE\u4E66/\u4F01\u4E1A\u5FAE\u4FE1/\u9489\u9489\u90FD\u6709\u73B0\u6210\u7684 webhook \u673A\u5668\u4EBA\uFF0CPOST \u4E00\u6BB5 JSON \u5373\u53EF\uFF09\u3002"
          },
          {
            title: "\u6302\u5B9A\u65F6\u4EFB\u52A1",
            desc: "macOS/Linux \u7528 crontab -e \u52A0\u4E00\u884C\uFF1A0 8 * * * cd \u8DEF\u5F84 && python3 daily_check.py\u3002\u5148\u624B\u52A8\u8DD1\u901A\u4E09\u6B21\uFF0C\u518D\u4EA4\u7ED9\u5B9A\u65F6\u5668\u3002"
          },
          {
            title: "\u8DD1\u4E00\u5468\uFF0C\u5199\u590D\u76D8",
            desc: "\u8FDE\u7EED\u8DD1 7 \u5929\uFF0C\u8BB0\u5F55\uFF1A\u6709\u6CA1\u6709\u8BEF\u544A\u8B66\uFF1F\u54EA\u7C7B\u9898\u6CE2\u52A8\u6700\u5927\uFF1F\u8FD9\u4EFD\u300C7 \u5929\u8D28\u68C0\u8BB0\u5F55 + \u590D\u76D8\u7ED3\u8BBA\u300D\u5C31\u662F\u9762\u8BD5\u65F6\u6700\u786C\u7684\u4F5C\u54C1\u96C6\u6750\u6599\u3002"
          }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs9(Section, { kicker: "05 \xB7 \u5347\u534E", title: "\u4ECE\u811A\u672C\u5230\u4EA7\u54C1\uFF1A\u8FD9\u73A9\u610F\u5728\u4F01\u4E1A\u91CC\u53EB\u4EC0\u4E48", children: [
      /* @__PURE__ */ jsxs9("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx9(Card, { title: "\u5B83\u5BF9\u5E94\u7684\u56DB\u4E2A\u4EA7\u54C1\u6982\u5FF5", icon: BellRing, children: /* @__PURE__ */ jsxs9("ul", { className: "mt-1 space-y-2", children: [
          /* @__PURE__ */ jsxs9("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u8D28\u91CF\u95E8\u7981" }),
            "\uFF1A\u51C6\u786E\u7387\u8DCC\u7834\u9608\u503C = \u4E0D\u5141\u8BB8\u8FD9\u6B21\u77E5\u8BC6\u5E93\u53D8\u66F4\u4E0A\u7EBF"
          ] }),
          /* @__PURE__ */ jsxs9("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u56DE\u5F52\u6D4B\u8BD5" }),
            "\uFF1A\u56FA\u5B9A\u8003\u5377\u53CD\u590D\u8003\uFF0C\u9632\u300C\u6539\u597D A \u5F04\u574F B\u300D"
          ] }),
          /* @__PURE__ */ jsxs9("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u53EF\u89C2\u6D4B\u6027" }),
            "\uFF1A\u65E5\u62A5\u548C\u8D8B\u52BF\u8BA9\u8D28\u91CF\u4ECE\u300C\u611F\u89C9\u300D\u53D8\u6210\u300C\u66F2\u7EBF\u300D"
          ] }),
          /* @__PURE__ */ jsxs9("li", { children: [
            "\xB7 ",
            /* @__PURE__ */ jsx9("span", { className: "font-semibold text-zinc-800", children: "\u8BC4\u6D4B\u51C6\u5165" }),
            "\uFF1A\u5B57\u8282\u7B49\u5927\u5382\u6CBB\u7406\u7B56\u7565\u56E2\u961F\u7684\u65E5\u5E38\u57FA\u5EFA\uFF0C\u4F60\u9762\u8BD5\u7684\u5C97\u4F4D\u5C31\u5728\u505A\u8FD9\u4EF6\u4E8B"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx9(Card, { title: "\u9762\u8BD5 60 \u79D2\u8BB2\u6CD5", icon: FileChartColumnIncreasing, children: /* @__PURE__ */ jsx9("p", { children: "\u300C\u6211\u7ED9\u81EA\u5EFA\u7684\u77E5\u8BC6\u5E93\u95EE\u7B54\u5E94\u7528\u642D\u4E86\u4E00\u5957\u6BCF\u65E5\u81EA\u52A8\u8D28\u68C0\uFF1A30 \u9053\u5E26\u8BC4\u5206\u8981\u70B9\u7684\u8BC4\u6D4B\u9898\u5B9A\u65F6\u6279\u91CF\u63D0\u95EE\uFF0CLLM \u88C1\u5224\u6309\u4E8B\u5B9E/\u8FB9\u754C\u5206\u578B\u6253\u5206\uFF0C\u751F\u6210\u65E5\u62A5\u5E76\u5728\u51C6\u786E\u7387\u8DCC\u7834\u9608\u503C\u65F6\u544A\u8B66\u3002\u8FC7\u7A0B\u4E2D\u6211\u91CF\u5316\u4E86\u5207\u7247\u5927\u5C0F\u5BF9\u53EC\u56DE\u7684\u5F71\u54CD\uFF0C\u4E5F\u8E29\u8FC7\u88C1\u5224\u4F4D\u7F6E\u504F\u7F6E\u7684\u5751\u5E76\u7528\u4EA4\u6362\u76F2\u6D4B\u4FEE\u6389\u3002\u5B83\u672C\u8D28\u662F\u4F01\u4E1A\u91CC\u8BC4\u6D4B\u51C6\u5165\u95E8\u7981\u7684\u6700\u5C0F\u5B9E\u73B0\u2014\u2014\u6211\u77E5\u9053\u5B8C\u6574\u7248\u8FD8\u8981\u8865\u5168\u91CF\u56DE\u5F52\u3001\u591A\u4EBA\u6807\u6CE8\u6821\u51C6\u548C\u53D8\u66F4\u62E6\u622A\u3002\u300D" }) })
      ] }),
      /* @__PURE__ */ jsx9("div", { className: "mt-4", children: /* @__PURE__ */ jsx9(Note, { children: /* @__PURE__ */ jsx9("p", { children: "\u6700\u540E\u4E00\u53E5\u8BDD\u662F\u70B9\u775B\uFF1A\u4E3B\u52A8\u8BF4\u51FA MVP \u7684\u8FB9\u754C\u548C\u5B8C\u6574\u7248\u7684\u5DEE\u8DDD\uFF0C\u8BC1\u660E\u4F60\u65E2\u52A8\u5F97\u4E86\u624B\u3001\u53C8\u770B\u5F97\u89C1\u5168\u8C8C\u2014\u2014\u8FD9\u6B63\u662F\u300C\u4EA7\u54C1 Sense\u300D\u548C\u300C\u7EAF\u8C03\u53C2\u300D\u7684\u533A\u522B\u3002" }) }) })
    ] })
  ] });
}

// scripts/render-md.jsx
var PAGES = {
  "01-\u9996\u9875": Index,
  "02-\u6982\u5FF5\u7BC7": Concepts,
  "03-\u65B9\u6CD5\u7BC7": Methods,
  "04-\u884C\u4E1A\u7BC7": Industry,
  "05-\u6C42\u804C\u7BC7": Career,
  "06-\u5B66\u4E60\u8DEF\u5F84": Roadmap,
  "07-\u8D44\u6E90\u5BFC\u822A": Resources,
  "08-\u5B9E\u64CD\u5BA4": Practice
};
export {
  PAGES
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/bell-ring.js:
lucide-react/dist/esm/icons/book-open-text.js:
lucide-react/dist/esm/icons/boxes.js:
lucide-react/dist/esm/icons/brain-circuit.js:
lucide-react/dist/esm/icons/briefcase-business.js:
lucide-react/dist/esm/icons/building-2.js:
lucide-react/dist/esm/icons/clipboard-check.js:
lucide-react/dist/esm/icons/code-xml.js:
lucide-react/dist/esm/icons/coins.js:
lucide-react/dist/esm/icons/compass.js:
lucide-react/dist/esm/icons/database.js:
lucide-react/dist/esm/icons/external-link.js:
lucide-react/dist/esm/icons/file-chart-column-increasing.js:
lucide-react/dist/esm/icons/flag.js:
lucide-react/dist/esm/icons/flask-conical.js:
lucide-react/dist/esm/icons/git-branch.js:
lucide-react/dist/esm/icons/github.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/library-big.js:
lucide-react/dist/esm/icons/map.js:
lucide-react/dist/esm/icons/pen-line.js:
lucide-react/dist/esm/icons/rocket.js:
lucide-react/dist/esm/icons/route.js:
lucide-react/dist/esm/icons/scale.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/target.js:
lucide-react/dist/esm/icons/trending-up.js:
lucide-react/dist/esm/icons/user-round.js:
lucide-react/dist/esm/icons/wrench.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.417.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
