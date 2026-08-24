/* @ds-bundle: {"format":4,"namespace":"FraqvestDesignSystem_019e01","components":[],"sourceHashes":{"ui_kits/_shared/Logo.jsx":"39f76b2a2dab","ui_kits/_shared/icons.js":"745fa445537f","ui_kits/mobile-app/app.jsx":"292a9729e966","ui_kits/mobile-app/components.jsx":"62a314cb2677","ui_kits/mobile-app/screens.jsx":"df919673bfe7","ui_kits/web-app/app.jsx":"434e6c8ef54b","ui_kits/web-app/components.jsx":"527491ad90f1","ui_kits/web-app/screens.jsx":"6117f76311a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FraqvestDesignSystem_019e01 = window.FraqvestDesignSystem_019e01 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/_shared/Logo.jsx
try { (() => {
/*
  Fraqshares logo — official brand asset (PNG, transparent).
  Variants: 'white' (for dark surfaces), 'color' (full colour on light),
  'black' (mono on light), 'alternate' (olive accent for dark surfaces).
  Renders height = `size`; width scales with the logo's aspect (~5.86:1).
  Path is relative to a kit's index.html at ui_kits/<kit>/.
*/
function FraqvestLogo({
  size = 26,
  variant = 'white',
  style = {}
}) {
  const file = {
    white: 'logo-white.png',
    color: 'logo-full-color.png',
    black: 'logo-black.png',
    alternate: 'logo-alternate.png'
  }[variant] || 'logo-white.png';
  return /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${file}`,
    alt: "Fraqshares",
    style: {
      height: size,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
window.FraqvestLogo = FraqvestLogo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/Logo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/icons.js
try { (() => {
/* Fraqvest icon set — clean linear SVG icons.
   SUBSTITUTE (flagged): the brand uses vuesax / Iconsax twotone; these are
   open Lucide-derived linear paths, the closest reliably-renderable match.
   Usage (plain HTML):  <span data-ic="house"></span>  then fqMountIcons();
   Usage (JS):          el.innerHTML = fqIconSVG('house', {size:20});       */
(function () {
  const P = {
    house: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
    pie: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
    trade: '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 5 12 8c0-3 3-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    funnel: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    upright: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    medal: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    dots: '<circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    hourglass: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.17a2 2 0 0 0-.59-1.41L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22"/><path d="M7 2v4.17a2 2 0 0 0 .59 1.41L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    check: '<path d="M21.8 10A10 10 0 1 1 17 3.34"/><path d="m9 11 3 3L22 4"/>',
    xcircle: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    arrowleft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrowdown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    chevdown: '<path d="m6 9 6 6 6-6"/>',
    chevright: '<path d="m9 18 6-6-6-6"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    money: '<rect width="20" height="14" x="2" y="5" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
    doc: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><path d="M8 13h8M8 17h6"/>'
  };
  function fqIconSVG(name, opts) {
    opts = opts || {};
    const size = opts.size || 24,
      sw = opts.stroke || 1.7;
    const fill = opts.fill ? 'currentColor' : 'none';
    const body = P[name] || '';
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + fill + '" stroke="currentColor" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round" style="display:block;flex:none">' + body + '</svg>';
  }
  function fqMountIcons(root) {
    (root || document).querySelectorAll('[data-ic]').forEach(function (el) {
      const size = el.getAttribute('data-size');
      const sw = el.getAttribute('data-sw');
      el.innerHTML = fqIconSVG(el.getAttribute('data-ic'), {
        size: size ? +size : 20,
        stroke: sw ? +sw : 1.7,
        fill: el.hasAttribute('data-fill')
      });
      el.style.display = el.style.display || 'inline-flex';
    });
  }
  window.fqIconSVG = fqIconSVG;
  window.fqMountIcons = fqMountIcons;
  window.FQ_ICON_NAMES = Object.keys(P);
  if (document.readyState !== 'loading') fqMountIcons();else document.addEventListener('DOMContentLoaded', function () {
    fqMountIcons();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/app.jsx
try { (() => {
/* Fraqvest Mobile App — shell */
const W = 390,
  H = 844;
function Phone() {
  const [view, setView] = React.useState('onboarding'); // 'onboarding' | tabId | 'detail'
  const [tab, setTab] = React.useState('portfolio');
  const [detail, setDetail] = React.useState(null);
  const [saved, setSaved] = React.useState({});
  const onSave = id => setSaved(s => ({
    ...s,
    [id]: !s[id]
  }));
  const openDetail = p => {
    setDetail(p);
    setView('detail');
  };
  const isOnb = view === 'onboarding';
  const isDetail = view === 'detail';
  const showTabs = !isOnb && !isDetail;
  let screen;
  if (isOnb) screen = /*#__PURE__*/React.createElement(Onboarding, {
    onDone: () => setView('tab')
  });else if (isDetail) screen = /*#__PURE__*/React.createElement(DetailScreen, {
    p: detail,
    saved: saved[detail.id],
    onSave: onSave,
    onBack: () => setView('tab')
  });else if (tab === 'listings') screen = /*#__PURE__*/React.createElement(ListingsScreen, {
    saved: saved,
    onSave: onSave,
    openDetail: openDetail
  });else if (tab === 'portfolio') screen = /*#__PURE__*/React.createElement(PortfolioScreen, {
    openDetail: openDetail
  });else screen = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#828282',
      textAlign: 'center',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#ABB06D',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: (MA_TABS.find(t => t.id === tab) || {}).ic,
    size: 46,
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      color: '#034C3C',
      fontWeight: 700,
      fontSize: 22
    }
  }, (MA_TABS.find(t => t.id === tab) || {}).label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 14
    }
  }, "Not part of the UI-kit sample."));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      background: isOnb ? '#061E18' : '#fff',
      borderRadius: 46,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 30px 80px rgba(6,30,24,.35)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: isOnb
  }), screen, showTabs && /*#__PURE__*/React.createElement(BottomTabs, {
    active: tab,
    onTab: t => {
      setTab(t);
      setView('tab');
    }
  }));
}
function Stage() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      const s = Math.min((window.innerWidth - 40) / W, (window.innerHeight - 40) / H, 1.1);
      if (ref.current) ref.current.style.transform = `scale(${s})`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: '#E8EAE4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      transformOrigin: 'center center'
    }
  }, /*#__PURE__*/React.createElement(Phone, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Stage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/components.jsx
try { (() => {
/* Fraqvest Mobile App — shared components */

function Icon({
  name,
  size = 22,
  stroke = 1.7,
  fill = false,
  color,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: window.fqIconSVG(name, {
        size,
        stroke,
        fill
      })
    }
  });
}
function StatusBar({
  dark = false
}) {
  const c = dark ? '#EFF9F0' : '#061E18';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '.02em'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11",
    fill: c
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "5",
    width: "3",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2.5",
    width: "3",
    height: "8.5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "11",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11",
    fill: "none",
    stroke: c,
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 3.5C5 0 11 0 15 3.5M3.4 6C6 4 10 4 12.6 6M5.8 8.4C7.1 7.3 8.9 7.3 10.2 8.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "10",
    r: ".6",
    fill: c,
    stroke: "none"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "25",
    height: "12",
    viewBox: "0 0 25 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "21",
    height: "10",
    rx: "2.5",
    stroke: c,
    strokeWidth: "1",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "2.5",
    width: "16",
    height: "7",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "23",
    y: "4",
    width: "1.5",
    height: "4",
    rx: ".75",
    fill: c,
    opacity: "0.5"
  }))));
}
const MA_TABS = [{
  id: 'overview',
  ic: 'grid',
  label: 'Overview'
}, {
  id: 'listings',
  ic: 'house',
  label: 'Listings'
}, {
  id: 'portfolio',
  ic: 'pie',
  label: 'Portfolio'
}, {
  id: 'trade',
  ic: 'trade',
  label: 'Trade'
}, {
  id: 'profile',
  ic: 'user',
  label: 'Profile'
}];
function BottomTabs({
  active,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: '#061E18',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '12px 14px 26px'
    }
  }, MA_TABS.map(t => {
    const on = active === t.id;
    return on ? /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onTab(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: '#ABB06D',
        color: '#061E18',
        border: 'none',
        cursor: 'pointer',
        padding: '11px 18px',
        borderRadius: 100,
        fontFamily: 'inherit',
        fontWeight: 700,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.ic,
      size: 18
    }), " ", t.label) : /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onTab(t.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#EFF9F0',
        opacity: .62,
        padding: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.ic,
      size: 22
    }));
  }));
}
function PageHeader({
  title,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '6px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 28,
      color: dark ? '#EFF9F0' : '#000'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 46,
      height: 46,
      borderRadius: 100,
      background: '#F2F2F2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#061E18'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })));
}
Object.assign(window, {
  Icon,
  StatusBar,
  BottomTabs,
  PageHeader,
  MA_TABS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/screens.jsx
try { (() => {
/* Fraqvest Mobile App — screens */

const MA_PROPS = [{
  id: 'duplex',
  name: '2 Bedroom Terrace Duplex',
  loc: 'Abidjan, Cairo',
  img: 'property-duplex.jpg',
  min: '12,250',
  roi: 15,
  units: '10,000/10,000',
  owned: 50,
  value: '$15,000',
  badge: {
    ic: 'clock',
    label: 'Listing Ends in 32 days'
  },
  status: 'onsale',
  statusLabel: 'On Sale'
}, {
  id: 'bungalow',
  name: 'Porche Bungalow Crib',
  loc: 'Himalayas, USA',
  img: 'property-bungalow.jpg',
  min: '12,250',
  roi: 15,
  units: '8,420/10,000',
  owned: 50,
  value: '$15,000',
  badge: {
    ic: 'hourglass',
    label: 'Matures in 32 days'
  },
  status: 'active',
  statusLabel: 'Active'
}, {
  id: 'porch',
  name: 'Lakeside Porch Estate',
  loc: 'Lagos, Nigeria',
  img: 'property-porch.jpg',
  min: '15,000',
  roi: 18,
  units: '6,100/10,000',
  owned: 50,
  value: '$136,100',
  badge: {
    ic: 'hourglass',
    label: 'Matures in 90 days'
  },
  status: 'active',
  statusLabel: 'Active'
}];
function MiniChart() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "150",
    height: "92",
    viewBox: "0 0 150 92",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "mc",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#034C3C",
    stopOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#034C3C",
    stopOpacity: "0.15"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 70 L20 58 L40 64 L60 40 L80 48 L100 22 L120 30 L150 10 L150 92 L0 92 Z",
    fill: "url(#mc)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 70 L20 58 L40 64 L60 40 L80 48 L100 22 L120 30 L150 10",
    fill: "none",
    stroke: "#034C3C",
    strokeWidth: "2.4"
  }));
}
const ONB = [{
  t: 'Inclusive Real Estate Investing',
  b: 'Unlock the potential of real estate investment, regardless of your budget.'
}, {
  t: 'Easy Management',
  b: 'Monitor your portfolio, earn rental income, and receive asset reports, all from your phone.'
}, {
  t: 'Diversification',
  b: 'Reduce risk by owning parts of multiple properties instead of just one.'
}];
function Onboarding({
  onDone
}) {
  const [i, setI] = React.useState(0);
  const last = i === ONB.length - 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#061E18',
      color: '#EFF9F0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 7,
      padding: '8px 0 0'
    }
  }, ONB.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: k === i ? 22 : 7,
      height: 7,
      borderRadius: 100,
      background: k === i ? '#ABB06D' : 'rgba(239,249,240,.3)',
      transition: 'all .2s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 34px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 232,
      height: 232,
      borderRadius: 100,
      background: '#ABB06D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 48,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      height: 196,
      background: '#FDFFE5',
      borderRadius: 18,
      transform: 'rotate(8deg)',
      boxShadow: '0 12px 30px rgba(0,0,0,.25)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96,
      background: `url(../../assets/${MA_PROPS[i % 3].img}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#034C3C'
    }
  }, "+128.5")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(MiniChart, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 16px',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.2,
      textWrap: 'balance'
    }
  }, ONB[i].t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.5,
      color: '#EFF9F0',
      opacity: .85,
      textWrap: 'pretty'
    }
  }, ONB[i].b))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => last ? onDone() : setI(i + 1),
    style: {
      height: 56,
      border: 'none',
      cursor: 'pointer',
      background: '#ABB06D',
      color: '#061E18',
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: 16
    }
  }, last ? 'Get Started' : 'Next'), !last && /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      height: 28,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: '#EFF9F0',
      opacity: .6,
      fontFamily: 'inherit',
      fontWeight: 500,
      fontSize: 14
    }
  }, "Skip")));
}
function MAPropertyCard({
  p,
  saved,
  onSave,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: '#fff',
      border: '1px solid #E0E0E0',
      marginBottom: 18,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 168,
      background: `url(../../assets/${p.img}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onSave(p.id);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 500,
      background: saved ? '#061E18' : '#fff',
      color: saved ? '#fff' : '#000',
      boxShadow: '0 2px 8px rgba(0,0,0,.15)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 15,
    fill: saved,
    color: saved ? '#fff' : '#034C3C'
  }), saved ? 'Saved' : 'Save'), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 500,
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,.15)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 15,
    color: "#034C3C"
  }), " Gift"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 16,
      color: '#034C3C',
      lineHeight: 1.25
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      color: '#828282',
      fontWeight: 300,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 12
  }), " ", p.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      padding: '12px 16px',
      borderTop: '1px solid #E9E9E9'
    }
  }, [['₦' + p.min, 'Min. Invest.'], [p.roi + '%', 'ROI'], [p.units, 'Units Left']].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#828282',
      fontWeight: 300
    }
  }, s[1])))));
}
function ListingsScreen({
  saved,
  onSave,
  openDetail
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Listings"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 14px',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 46,
      border: '1px solid #E0E0E0',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      color: '#bdbdbd',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "#828282"
  }), " Search properties"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      background: '#F2F2F2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "funnel",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 16px',
      fontWeight: 700,
      fontSize: 18,
      color: '#034C3C'
    }
  }, "Available Listings"), MA_PROPS.map(p => /*#__PURE__*/React.createElement(MAPropertyCard, {
    key: p.id,
    p: p,
    saved: saved[p.id],
    onSave: onSave,
    onClick: () => openDetail(p)
  }))));
}
function PortfolioScreen({
  openDetail
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Portfolio"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto',
      padding: '0 22px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 250,
      border: '1px solid #E0E0E0',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#828282',
      fontWeight: 300,
      fontSize: 13,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pie",
    size: 15,
    color: "#034C3C"
  }), " Total Invested"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 32,
      color: '#034C3C',
      marginBottom: 14
    }
  }, "\u20A61,256,358"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#828282',
      fontWeight: 300
    }
  }, "Last Investment ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#034C3C'
    }
  }, "\u20A65,000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 250,
      border: '1px solid #E0E0E0',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#828282',
      fontWeight: 300,
      fontSize: 13,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pie",
    size: 15,
    color: "#034C3C"
  }), " Estimated Dividends"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 32,
      color: '#034C3C',
      marginBottom: 14
    }
  }, "\u20A6304,200"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#ABB06D',
      fontWeight: 700
    }
  }, "View My Dividends"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontWeight: 700,
      fontSize: 18,
      color: '#034C3C'
    }
  }, "My Assets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#828282',
      fontSize: 14
    }
  }, "Total - 5"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: '#FA7921',
      color: '#fff',
      padding: '9px 16px',
      fontWeight: 700,
      fontSize: 13
    }
  }, "All ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevdown",
    size: 14
  }))), MA_PROPS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => openDetail(p),
    style: {
      background: '#fff',
      border: '1px solid #E0E0E0',
      marginBottom: 18,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: `url(../../assets/${p.img}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: '#fff',
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 600,
      boxShadow: '0 2px 8px rgba(0,0,0,.15)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.badge.ic,
    size: 14,
    color: "#061E18"
  }), " ", p.badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 16,
      color: '#034C3C',
      lineHeight: 1.25
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      color: '#828282',
      fontWeight: 300,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 12
  }), " ", p.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      borderTop: '1px solid #E9E9E9'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", null, "Units Owned ", /*#__PURE__*/React.createElement("b", null, p.owned)), /*#__PURE__*/React.createElement("div", null, "Units Value ", /*#__PURE__*/React.createElement("b", null, p.value))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      padding: '6px 14px',
      borderRadius: 100,
      fontWeight: 500,
      fontSize: 12,
      background: p.status === 'active' ? '#E7F5EC' : '#F2F2F2',
      color: p.status === 'active' ? '#219653' : '#7B7B7B'
    }
  }, p.statusLabel))))));
}
function DetailScreen({
  p,
  saved,
  onSave,
  onBack
}) {
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      background: `url(../../assets/${p.img}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      width: 42,
      height: 42,
      borderRadius: 100,
      background: 'rgba(255,255,255,.92)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#061E18'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowleft",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSave(p.id),
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 42,
      height: 42,
      borderRadius: 100,
      background: saved ? '#061E18' : 'rgba(255,255,255,.92)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: saved ? '#fff' : '#061E18'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    fill: saved
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 24,
      color: '#034C3C',
      lineHeight: 1.2
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 13,
      color: '#828282',
      fontWeight: 300,
      whiteSpace: 'nowrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 14
  }), " ", p.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginTop: 24,
      border: '1px solid #E0E0E0'
    }
  }, [['₦' + p.min, 'Min. Investment'], [p.roi + '%', 'Annual ROI'], [p.units, 'Units Left']].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      padding: '18px 14px',
      borderLeft: i ? '1px solid #E9E9E9' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: '#061E18'
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#828282',
      fontWeight: 300,
      marginTop: 4
    }
  }, s[1])))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: '#111',
      marginTop: 22
    }
  }, "Own a fractional share of this prime property and earn rental income plus capital appreciation. Buy as little as one unit \u2014 completely yours, fully managed by Fraqshares.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 26px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    },
    style: {
      width: '100%',
      height: 56,
      border: 'none',
      cursor: 'pointer',
      background: '#ABB06D',
      color: '#061E18',
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Invest Now")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      left: 22,
      right: 22,
      background: '#061E18',
      color: '#EFF9F0',
      padding: '14px 20px',
      fontWeight: 500,
      fontSize: 14,
      textAlign: 'center'
    }
  }, "Buy\u2011order flow would open here."));
}
Object.assign(window, {
  Onboarding,
  ListingsScreen,
  PortfolioScreen,
  DetailScreen,
  MAPropertyCard,
  MA_PROPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/app.jsx
try { (() => {
/* Fraqvest Web App — shell */
const TITLES = {
  overview: 'Dashboard',
  portfolio: 'Portfolio',
  trade: 'Trade',
  listings: 'Listings',
  wallets: 'Wallets',
  refer: 'Refer & Earn',
  profile: 'Profile'
};
function Placeholder({
  id
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 40px',
      textAlign: 'center',
      color: '#828282'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      marginBottom: 18,
      color: '#ABB06D'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: (WA_NAV.find(n => n.id === id) || {}).ic || 'house',
    size: 48,
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      color: '#034C3C',
      fontWeight: 700,
      fontSize: 24
    }
  }, TITLES[id]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 300,
      fontSize: 15
    }
  }, "This surface isn't part of the UI-kit sample."));
}
function App() {
  const [route, setRoute] = React.useState('overview');
  const [saved, setSaved] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const onSave = id => setSaved(s => ({
    ...s,
    [id]: !s[id]
  }));
  const go = r => setRoute(r);
  const onInvest = () => {
    if (route !== 'listings') {
      setRoute('listings');
      return;
    }
    setToast('Investment flow would open here.');
    clearTimeout(window.__t);
    window.__t = setTimeout(() => setToast(null), 2200);
  };
  let screen;
  if (route === 'overview') screen = /*#__PURE__*/React.createElement(OverviewScreen, {
    saved: saved,
    onSave: onSave,
    onInvest: onInvest,
    go: go
  });else if (route === 'listings') screen = /*#__PURE__*/React.createElement(ListingsScreen, {
    saved: saved,
    onSave: onSave,
    onInvest: onInvest
  });else if (route === 'portfolio') screen = /*#__PURE__*/React.createElement(PortfolioScreen, {
    saved: saved,
    onSave: onSave
  });else screen = /*#__PURE__*/React.createElement(Placeholder, {
    id: route
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: route,
    onNav: setRoute
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: TITLES[route],
    onInvest: onInvest
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, screen)), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 28,
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#061E18',
      color: '#EFF9F0',
      padding: '14px 26px',
      fontWeight: 500,
      fontSize: 14,
      boxShadow: '0 8px 30px rgba(0,0,0,.25)'
    }
  }, toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/components.jsx
try { (() => {
/* Fraqvest Web App — shared UI components */

function Icon({
  name,
  size = 20,
  stroke = 1.7,
  fill = false,
  color,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: window.fqIconSVG(name, {
        size,
        stroke,
        fill
      })
    }
  });
}
function Pill({
  tone = 'active',
  children
}) {
  const map = {
    active: {
      bg: '#E7F5EC',
      fg: '#219653'
    },
    onsale: {
      bg: '#F2F2F2',
      fg: '#7B7B7B'
    },
    matured: {
      bg: '#FDFFE5',
      fg: '#061E18'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 15px',
      borderRadius: 100,
      fontWeight: 500,
      fontSize: 13,
      background: map.bg,
      color: map.fg
    }
  }, children);
}

/* ---- Sidebar -------------------------------------------------- */
const WA_NAV = [{
  id: 'overview',
  label: 'Overview',
  ic: 'grid'
}, {
  id: 'portfolio',
  label: 'Portfolio',
  ic: 'pie'
}, {
  id: 'trade',
  label: 'Trade',
  ic: 'trade'
}, {
  id: 'listings',
  label: 'Listings',
  ic: 'house'
}, {
  id: 'wallets',
  label: 'Wallets',
  ic: 'wallet'
}, {
  id: 'refer',
  label: 'Refer & Earn',
  ic: 'medal'
}, {
  id: 'profile',
  label: 'Profile',
  ic: 'user'
}];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flex: 'none',
      background: '#061E18',
      color: '#EFF9F0',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 0',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 30px 44px'
    }
  }, /*#__PURE__*/React.createElement(FraqvestLogo, {
    size: 26,
    variant: "white"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 24px',
      gap: 4
    }
  }, WA_NAV.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '14px 18px',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 0,
        background: on ? '#FFFFFF' : 'transparent',
        color: on ? '#061E18' : '#EFF9F0',
        fontFamily: 'inherit',
        fontWeight: on ? 700 : 500,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.ic,
      size: 20
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '0 36px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/avatar-ciroma.jpg",
    alt: "",
    style: {
      width: 52,
      height: 52,
      borderRadius: 100,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: '#fff'
    }
  }, "Ciroma A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: '#7B7B7B',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Logout ", /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    size: 14
  })))));
}

/* ---- Top bar -------------------------------------------------- */
function TopBar({
  title,
  onInvest
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 70,
      flex: 'none',
      background: '#FDFFE5',
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 18,
      color: '#000'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onInvest,
    style: {
      marginLeft: 'auto',
      height: 38,
      padding: '0 26px',
      border: 'none',
      cursor: 'pointer',
      background: '#ABB06D',
      color: '#061E18',
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: 14
    }
  }, "Invest Now"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 100,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#061E18'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  })));
}

/* ---- Property card ------------------------------------------- */
function PropertyCard({
  p,
  saved,
  onSave,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: '#fff',
      border: '1px solid #E0E0E0',
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: `url(../../assets/${p.img}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onSave && onSave(p.id);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 11px',
      fontSize: 12,
      fontWeight: 500,
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(0,0,0,.15)',
      background: saved ? '#061E18' : '#fff',
      color: saved ? '#fff' : '#000'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 15,
    fill: saved,
    color: saved ? '#fff' : '#034C3C'
  }), saved ? 'Saved' : 'Save'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 11px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,.15)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 15,
    color: "#034C3C"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 11px',
      fontSize: 12,
      fontWeight: 500,
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,.15)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 15,
    color: "#034C3C"
  }), " Gift"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 17,
      color: '#034C3C',
      lineHeight: 1.25
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: '#828282',
      fontWeight: 300,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 13
  }), " ", p.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      padding: '14px 18px',
      borderTop: '1px solid #E9E9E9'
    }
  }, [['₦' + p.min, 'Min. Investment'], [p.roi + '%', 'ROI'], [p.units, 'Units Left']].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#828282',
      fontWeight: 300
    }
  }, s[1])))));
}
Object.assign(window, {
  Icon,
  Pill,
  Sidebar,
  TopBar,
  PropertyCard,
  WA_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/screens.jsx
try { (() => {
/* Fraqvest Web App — screens */

const WA_PROPS = [{
  id: 'duplex',
  name: '2 Bedroom Terrace Duplex',
  loc: 'Abidjan, Cairo',
  img: 'property-duplex.jpg',
  min: '12,250',
  roi: 15,
  units: '10,000/10,000'
}, {
  id: 'bungalow',
  name: 'Porche Bungalow Crib',
  loc: 'Himalayas, USA',
  img: 'property-bungalow.jpg',
  min: '12,250',
  roi: 15,
  units: '8,420/10,000'
}, {
  id: 'porch',
  name: 'Lakeside Porch Estate',
  loc: 'Lagos, Nigeria',
  img: 'property-porch.jpg',
  min: '15,000',
  roi: 18,
  units: '6,100/10,000'
}];
const WA_TXNS = [{
  ic: 'house',
  name: '2 Bedroom Terrace Duplex',
  meta: 'Wallet Payment · 26th February · 12:30pm',
  amt: '+ ₦162,900',
  status: 'Successful',
  ok: true
}, {
  ic: 'arrowdown',
  name: 'Wallet Top Up',
  meta: 'Card Payment · 26th February · 12:30pm',
  amt: '+ ₦162,900',
  status: 'Successful',
  ok: true
}, {
  ic: 'arrowdown',
  name: 'Wallet Top Up',
  meta: 'Card Payment · 25th February · 09:14am',
  amt: '+ ₦162,900',
  status: 'Failed',
  ok: false
}];
function SectionHead({
  children,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 22,
      color: '#034C3C'
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    onClick: onAction,
    style: {
      marginLeft: 'auto',
      color: '#ABB06D',
      fontWeight: 600,
      fontSize: 15,
      cursor: 'pointer'
    }
  }, action));
}
function StatCard({
  ic,
  label,
  value,
  flex = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex,
      border: '1px solid #E0E0E0',
      padding: '26px 28px',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      color: '#828282',
      fontWeight: 300,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "#034C3C"
  }), " ", label, /*#__PURE__*/React.createElement(Icon, {
    name: "upright",
    size: 13,
    style: {
      marginLeft: 'auto',
      color: '#828282'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 38,
      color: '#034C3C',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
function OverviewScreen({
  saved,
  onSave,
  onInvest,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 40px 60px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontWeight: 700,
      fontSize: 32
    }
  }, "Welcome, Ciroma \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 48,
      height: 150
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    ic: "pie",
    label: "Portfolio Balance",
    value: "\u20A625,560"
  }), /*#__PURE__*/React.createElement(StatCard, {
    ic: "wallet",
    label: "Wallet Balance",
    value: "\u20A65,360"
  }), /*#__PURE__*/React.createElement(StatCard, {
    ic: "house",
    label: "Portfolio",
    value: "3",
    flex: 0.62
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1.15,
      background: '#034C3C',
      color: '#EFF9F0',
      padding: '24px 26px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      color: '#ABB06D',
      marginBottom: 10
    }
  }, "Refer & Earn"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.45,
      maxWidth: 170
    }
  }, "Invite friends to use Fraqshares & earn amazing rewards."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -8,
      bottom: -10,
      color: '#FF9500'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "medal",
    size: 80,
    stroke: 1.3
  })))), /*#__PURE__*/React.createElement(SectionHead, {
    action: "View All",
    onAction: () => go('listings')
  }, "Active Listings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginBottom: 52
    }
  }, WA_PROPS.map(p => /*#__PURE__*/React.createElement(PropertyCard, {
    key: p.id,
    p: p,
    saved: saved[p.id],
    onSave: onSave,
    onClick: () => go('listings')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid #E0E0E0',
      padding: '28px 30px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    action: "View All"
  }, "Transactions"), WA_TXNS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 0',
      borderBottom: i < WA_TXNS.length - 1 ? '1px solid #E9E9E9' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 100,
      background: '#F2F2F2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#061E18',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.ic,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 15,
      marginBottom: 3
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#828282',
      fontWeight: 300
    }
  }, t.meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 15
    }
  }, t.amt), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: t.ok ? '#00A51A' : '#EB5757'
    }
  }, t.status)), /*#__PURE__*/React.createElement(Icon, {
    name: "dots",
    size: 18,
    color: "#BDBDBD",
    style: {
      marginLeft: 10
    }
  })))));
}
function ListingsScreen({
  saved,
  onSave,
  onInvest
}) {
  const [tab, setTab] = React.useState('fixed');
  const grid = [...WA_PROPS, ...WA_PROPS];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 40px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 22,
      color: '#034C3C'
    }
  }, "Available Listings"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: '#F2F2F2',
      padding: '11px 16px',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "funnel",
    size: 16
  }), " Filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: '#F2F2F2'
    }
  }, [['fixed', 'Fixed Investment'], ['own', 'Ownership']].map(([k, l]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setTab(k),
    style: {
      padding: '11px 18px',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      background: tab === k ? '#034C3C' : 'transparent',
      color: tab === k ? '#fff' : '#061E18'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, grid.map((p, i) => /*#__PURE__*/React.createElement(PropertyCard, {
    key: i,
    p: p,
    saved: saved[p.id],
    onSave: onSave,
    onClick: onInvest
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#828282',
      fontWeight: 300,
      fontSize: 14
    }
  }, "Showing ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#000',
      fontWeight: 700
    }
  }, "6 items"), " out of 100"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, ['1', '2', '3', '4', '…', '24'].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontWeight: i === 0 ? 700 : 400,
      fontSize: 15,
      color: '#061E18',
      background: i === 0 ? '#F2F2F2' : 'transparent',
      padding: i === 0 ? '8px 16px' : '8px 4px',
      cursor: 'pointer'
    }
  }, n)), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#061E18',
      color: '#fff',
      padding: '11px 26px',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "Next"))));
}
function PortfolioScreen({
  saved,
  onSave
}) {
  const owned = [{
    ...WA_PROPS[0],
    badge: {
      label: 'Listing Ends in 32 days',
      ic: 'clock'
    },
    status: 'onsale',
    statusLabel: 'On Sale',
    ownedUnits: 50,
    value: '$15,000'
  }, {
    ...WA_PROPS[1],
    badge: {
      label: 'Matures in 32 days',
      ic: 'hourglass'
    },
    status: 'active',
    statusLabel: 'Active',
    ownedUnits: 50,
    value: '$15,000'
  }, {
    ...WA_PROPS[2],
    badge: {
      label: 'Matures in 90 days',
      ic: 'hourglass'
    },
    status: 'active',
    statusLabel: 'Active',
    ownedUnits: 50,
    value: '$136,100'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 40px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 44,
      height: 150
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    ic: "pie",
    label: "Total Invested",
    value: "\u20A61,256,358"
  }), /*#__PURE__*/React.createElement(StatCard, {
    ic: "pie",
    label: "Estimated Dividends",
    value: "\u20A6304,200"
  }), /*#__PURE__*/React.createElement(StatCard, {
    ic: "house",
    label: "Properties Owned",
    value: "5",
    flex: 0.62
  })), /*#__PURE__*/React.createElement(SectionHead, null, "My Assets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, owned.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid #E0E0E0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: `url(../../assets/${p.img}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: '#fff',
      padding: '7px 12px',
      fontSize: 12,
      fontWeight: 600,
      boxShadow: '0 2px 8px rgba(0,0,0,.15)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.badge.ic,
    size: 14,
    color: "#061E18"
  }), " ", p.badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 17,
      color: '#034C3C',
      lineHeight: 1.25
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: '#828282',
      fontWeight: 300,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 13
  }), " ", p.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 18px',
      borderTop: '1px solid #E9E9E9'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#061E18',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", null, "Units Owned ", /*#__PURE__*/React.createElement("b", null, p.ownedUnits)), /*#__PURE__*/React.createElement("div", null, "Units Value ", /*#__PURE__*/React.createElement("b", null, p.value))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: p.status
  }, p.statusLabel)))))));
}
Object.assign(window, {
  OverviewScreen,
  ListingsScreen,
  PortfolioScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/screens.jsx", error: String((e && e.message) || e) }); }

})();
