/* @ds-bundle: {"format":4,"namespace":"M2MTechDesignSystem_02d78c","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"CardBody","sourcePath":"components/layout/Card.jsx"},{"name":"CardHeader","sourcePath":"components/layout/Card.jsx"},{"name":"CardFooter","sourcePath":"components/layout/Card.jsx"},{"name":"StatCard","sourcePath":"components/layout/StatCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"121140be2950","components/core/Badge.jsx":"fc1bb432b0ee","components/core/Button.jsx":"4ed225ff4e8b","components/core/IconButton.jsx":"526a14dc3edd","components/core/StatusDot.jsx":"baeba09b0412","components/core/Tag.jsx":"24615ee1b8ae","components/feedback/Dialog.jsx":"39dcddd0c22c","components/feedback/Tabs.jsx":"7c1d60bdec1e","components/feedback/Toast.jsx":"81a07a8f1ad6","components/feedback/Tooltip.jsx":"ddcf837c0fc2","components/forms/Checkbox.jsx":"6b66e645db3a","components/forms/Input.jsx":"709017658976","components/forms/Radio.jsx":"649a11bdc5bd","components/forms/Select.jsx":"c51a5f602101","components/forms/Switch.jsx":"9eeede7ccd30","components/forms/Textarea.jsx":"5045f5325168","components/layout/Card.jsx":"bf15ab5a1681","components/layout/StatCard.jsx":"490cb2b0fe26","ui_kits/_shared/Icons.jsx":"1331c377edb5","ui_kits/console/Shell.jsx":"deebdcd2b7d9","ui_kits/console/Views.jsx":"2b1d24e72a55","ui_kits/marketing_site/Footer.jsx":"1ec4d3790f70","ui_kits/marketing_site/Header.jsx":"b4a0fb837032","ui_kits/marketing_site/Hero.jsx":"67dc6f661edd","ui_kits/marketing_site/Sections.jsx":"e2fa52380a74"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.M2MTechDesignSystem_02d78c = window.M2MTechDesignSystem_02d78c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  size = 32,
  showWord = true,
  tagline = "CODE AI",
  src = "assets/logo-mark.jpeg",
  href,
  className = ""
}) {
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, {
    className: "m2m-logo " + className,
    href: href
  }, /*#__PURE__*/React.createElement("img", {
    className: "m2m-logo__mark",
    src: src,
    width: size,
    height: size,
    alt: "M2M Tech"
  }), showWord && /*#__PURE__*/React.createElement("span", {
    className: "m2m-logo__word"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: size * 0.5
    }
  }, "M2M TECH"), tagline && /*#__PURE__*/React.createElement("small", null, tagline)));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = "neutral",
  dot = false,
  className = "",
  children
}) {
  const cls = ["m2m-badge", "m2m-badge--" + tone, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  block = false,
  leadingIcon,
  trailingIcon,
  as = "button",
  className = "",
  children,
  ...props
}) {
  const Tag = as;
  const cls = ["m2m-btn", "m2m-btn--" + variant, "m2m-btn--" + size, block ? "m2m-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, props), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  className = "",
  children,
  ...props
}) {
  const cls = ["m2m-iconbtn", "m2m-iconbtn--" + size, variant === "solid" ? "m2m-iconbtn--solid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, props), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function StatusDot({
  status = "online",
  pulse = false,
  className = "",
  children
}) {
  const cls = ["m2m-dot", "m2m-dot--" + status, pulse ? "m2m-dot--pulse" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", {
    className: "m2m-dot__led"
  }), children);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  onRemove,
  className = "",
  children
}) {
  const cls = ["m2m-tag", onRemove ? "m2m-tag--removable" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "m2m-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  footer,
  className = "",
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "m2m-dialog " + className,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "m2m-dialog__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "m2m-dialog__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "m2m-iconbtn m2m-iconbtn--sm",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "m2m-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "m2m-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = ""
}) {
  const [internal, setInternal] = useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const set = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-tabs " + className,
    role: "tablist"
  }, tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active === v,
      className: "m2m-tab" + (active === v ? " m2m-tab--active" : ""),
      onClick: () => set(v)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = "brand",
  title,
  children,
  onClose,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-toast m2m-toast--" + tone + " " + className,
    role: "status"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "m2m-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "m2m-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "m2m-iconbtn m2m-iconbtn--sm",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      color: "var(--neutral-400)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "m2m-tt " + className,
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "m2m-tt__bubble",
    role: "tooltip"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["m2m-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "m2m-check__box m2m-check__box--check"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  required,
  id,
  className = "",
  ...props
}) {
  const fid = id || (label ? "in-" + label.replace(/\\s+/g, "-").toLowerCase() : undefined);
  const inputCls = ["m2m-input", error ? "m2m-input--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "m2m-label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "m2m-label__req"
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: inputCls,
    "aria-invalid": !!error
  }, props)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "m2m-hint" + (error ? " m2m-hint--error" : "")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["m2m-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "m2m-check__box m2m-check__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m2m-check__radio-fill"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  required,
  id,
  options = [],
  placeholder,
  className = "",
  children,
  ...props
}) {
  const fid = id || (label ? "sel-" + label.replace(/\\s+/g, "-").toLowerCase() : undefined);
  const cls = ["m2m-select", error ? "m2m-select--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "m2m-label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "m2m-label__req"
  }, "*")), /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: cls,
    "aria-invalid": !!error
  }, props), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "m2m-hint" + (error ? " m2m-hint--error" : "")
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["m2m-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "m2m-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m2m-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  required,
  id,
  className = "",
  ...props
}) {
  const fid = id || (label ? "ta-" + label.replace(/\\s+/g, "-").toLowerCase() : undefined);
  const cls = ["m2m-textarea", error ? "m2m-textarea--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "m2m-label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "m2m-label__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: cls,
    "aria-invalid": !!error
  }, props)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "m2m-hint" + (error ? " m2m-hint--error" : "")
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "flat",
  interactive = false,
  className = "",
  children,
  ...props
}) {
  const cls = ["m2m-card", "m2m-card--" + variant, interactive ? "m2m-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}
function CardBody({
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-card__body " + className
  }, children);
}
function CardHeader({
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-card__header " + className
  }, children);
}
function CardFooter({
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-card__footer " + className
  }, children);
}
Object.assign(__ds_scope, { Card, CardBody, CardHeader, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  unit,
  delta,
  direction,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "m2m-stat " + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "m2m-stat__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "m2m-stat__value"
  }, value, unit && /*#__PURE__*/React.createElement("sup", null, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    className: "m2m-stat__delta m2m-stat__delta--" + (direction || "up")
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: direction === "down" ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  })), delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/Icons.jsx
try { (() => {
// M2M Tech UI kits — icon set. Paths are from Lucide (lucide.dev, ISC license),
// the icon system this design system standardizes on. Stroke 2, 24px grid.
(function () {
  const P = {
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    menu: '<path d="M4 12h16M4 6h16M4 18h16"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/><circle cx="12" cy="12" r="2"/>',
    bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    trend: '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
    map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15M9 3.236v15"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'
  };
  function Icon({
    name,
    size = 20,
    stroke = 2,
    className = "",
    style = {}
  }) {
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      style,
      dangerouslySetInnerHTML: {
        __html: P[name] || ""
      }
    });
  }
  window.M2MIcon = Icon;
  window.M2MIconNames = Object.keys(P);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Shell.jsx
try { (() => {
const {
  Logo,
  StatusDot,
  IconButton,
  Badge
} = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function Sidebar({
  active,
  onNav
}) {
  const items = [["grid", "Overview"], ["map", "Fleet"], ["bell", "Alerts"], ["layers", "Pipelines"], ["shield", "Evidence"], ["settings", "Settings"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      background: "var(--neutral-950)",
      borderRight: "1px solid var(--neutral-800)",
      display: "flex",
      flexDirection: "column",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px",
      borderBottom: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    src: "../../assets/logo-mark.jpeg"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: 12,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flex: 1
    }
  }, items.map(([ic, label]) => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onNav(label),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 12px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        textAlign: "left",
        background: on ? "var(--neutral-800)" : "transparent",
        color: on ? "#fff" : "var(--neutral-400)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      style: {
        color: on ? "var(--brand-yellow)" : "var(--neutral-500)"
      }
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "online",
    pulse: true
  }, "All systems live")));
}
function Topbar({
  title,
  onDeploy
}) {
  const {
    Button,
    Input
  } = window.M2MTechDesignSystem_02d78c;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 62,
      borderBottom: "1px solid var(--neutral-800)",
      background: "var(--neutral-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 19,
      color: "#fff"
    }
  }, title), /*#__PURE__*/React.createElement(Badge, {
    tone: "online",
    dot: true
  }, "Plant 04")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    style: {
      position: "absolute",
      left: 10,
      color: "var(--neutral-500)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search devices\u2026",
    style: {
      background: "var(--neutral-950)",
      border: "1px solid var(--neutral-700)",
      borderRadius: 6,
      color: "#fff",
      padding: "8px 12px 8px 32px",
      fontSize: 13,
      fontFamily: "var(--font-sans)",
      width: 200
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Alerts",
    style: {
      color: "var(--neutral-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onDeploy,
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 15
    })
  }, "Deploy"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--brand-yellow)",
      color: "var(--brand-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-display)",
      fontSize: 14
    }
  }, "AR")));
}
Object.assign(window, {
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Views.jsx
try { (() => {
const {
  StatCard,
  Card,
  CardBody,
  StatusDot,
  Badge,
  Tabs,
  Button,
  Tag
} = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
const DEVICES = [["edge-node-01", "Compute · Line B", "online", "12.4ms", "99.98%"], ["humanoid-arm-07", "Actuator · Weld cell", "online", "8.1ms", "99.9%"], ["drone-survey-02", "Aerial · Yard scan", "warn", "41ms", "97.2%"], ["sensor-array-19", "Telemetry · Boiler", "online", "3.2ms", "100%"], ["conveyor-ctrl-11", "PLC · Line A", "online", "6.7ms", "99.95%"], ["amr-forklift-05", "Mobile · Dock 3", "fault", "—", "0%"], ["vision-cam-22", "Inspection · QA", "online", "15.0ms", "99.7%"]];
function Overview({
  onDeploy
}) {
  const [tab, setTab] = React.useState("All devices");
  const rows = tab === "Faults" ? DEVICES.filter(d => d[2] !== "online") : DEVICES;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Nodes online",
    value: "41/42",
    delta: "1 fault",
    direction: "down"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg latency",
    value: "12.4",
    unit: "ms",
    delta: "edge",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "OEE",
    value: "87",
    unit: "%",
    delta: "+4.2% wk",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Evidence written",
    value: "1.2M",
    delta: "today",
    direction: "up"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "flat"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["All devices", "Faults", "Idle"],
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Plant 04"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "filter",
      size: 14
    })
  }, "Filter"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 8px 12px"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Device", "Class", "Status", "Latency", "Uptime", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: i > 2 && i < 5 ? "right" : "left",
      padding: "10px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--neutral-500)",
      borderBottom: "1px solid var(--neutral-800)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(d => /*#__PURE__*/React.createElement("tr", {
    key: d[0],
    style: {
      borderBottom: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "#fff"
    }
  }, d[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      fontSize: 13,
      color: "var(--neutral-400)"
    }
  }, d[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: d[2],
    pulse: d[2] === "online"
  }, d[2])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--neutral-300)"
    }
  }, d[3]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      textAlign: "right",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--neutral-300)"
    }
  }, d[4]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Inspect")))))))));
}
function Alerts() {
  const items = [["fault", "amr-forklift-05 offline", "Dock 3 · lost heartbeat 4m ago", "CRITICAL"], ["warn", "drone-survey-02 latency spike", "Yard scan · 41ms (threshold 25ms)", "WARN"], ["warn", "Line A throughput -8%", "Conveyor controller backpressure", "WARN"], ["online", "MEA v2.4 rollout complete", "41 nodes on latest ruleset", "RESOLVED"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      overflow: "auto"
    }
  }, items.map((a, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "flat"
  }, /*#__PURE__*/React.createElement(CardBody, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: a[0] === "fault" ? "var(--status-fault-wash)" : a[0] === "warn" ? "var(--status-warn-wash)" : "var(--status-online-wash)",
      color: a[0] === "fault" ? "var(--status-fault)" : a[0] === "warn" ? "var(--status-warn)" : "var(--status-online)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a[0] === "online" ? "check" : "alert",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "#fff",
      fontSize: 15
    }
  }, a[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--neutral-400)",
      marginTop: 2
    }
  }, a[2])), /*#__PURE__*/React.createElement(Badge, {
    tone: a[0] === "fault" ? "fault" : a[0] === "warn" ? "warn" : "online"
  }, a[3])))));
}
function Placeholder({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: "center",
      color: "var(--neutral-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 40,
    style: {
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, name, " \u2014 view stub"));
}
Object.assign(window, {
  Overview,
  Alerts,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Footer.jsx
try { (() => {
const {
  Logo
} = window.M2MTechDesignSystem_02d78c;
function SiteFooter() {
  const cols = {
    Platform: ["MEA Edge AI", "Rules engine", "Evidence fabric", "Chain of custody"],
    Industries: ["Manufacturing", "Energy", "Logistics", "Data centers"],
    Company: ["About", "Partners", "Careers", "Contact"]
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "m2m-dark",
    style: {
      background: "var(--neutral-950)",
      color: "var(--neutral-400)",
      borderTop: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "56px 24px 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 34,
    src: "../../assets/logo-mark.jpeg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      marginTop: 16,
      maxWidth: 240,
      lineHeight: 1.6
    }
  }, "The industrial operating layer for Physical AI. Plants, fleets, data centers, airports, energy sites.")), Object.entries(cols).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "m2m-eyebrow",
    style: {
      color: "var(--neutral-500)",
      marginBottom: 14
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: "block",
      color: "var(--neutral-300)",
      fontSize: 14,
      marginBottom: 10
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "20px 24px",
      borderTop: "1px solid var(--neutral-800)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 M2M TECH \xB7 CODE AI"), /*#__PURE__*/React.createElement("span", null, "British Columbia, Canada")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Header.jsx
try { (() => {
const {
  Button,
  Logo
} = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function SiteHeader({
  onCTA
}) {
  const [open, setOpen] = React.useState(false);
  const nav = ["Platform", "Industries", "Evidence", "Partners", "Company"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(10,11,13,0.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--neutral-800)"
    },
    className: "m2m-dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34,
    src: "../../assets/logo-mark.jpeg"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 30
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      color: "var(--neutral-300)",
      fontSize: 14,
      fontWeight: 500
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--neutral-200)",
      fontSize: 14,
      fontWeight: 600
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onCTA,
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16
    })
  }, "Book a session"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  StatusDot
} = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function Hero({
  onCTA
}) {
  const loop = ["Perceive", "Simulate", "Decide", "Act"];
  return /*#__PURE__*/React.createElement("section", {
    className: "m2m-dark",
    style: {
      background: "radial-gradient(1200px 500px at 70% -10%, rgba(255,206,0,0.14), transparent 60%), var(--neutral-950)",
      color: "var(--neutral-25)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "72px 24px 64px",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "m2m-eyebrow",
    style: {
      color: "var(--brand-yellow)"
    }
  }, "INDUSTRIAL OPERATING LAYER"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 62,
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      margin: "16px 0 20px",
      color: "#fff"
    }
  }, "Physical AI,", /*#__PURE__*/React.createElement("br", null), "under ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "chain of custody.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--neutral-300)",
      maxWidth: 520,
      margin: "0 0 28px",
      lineHeight: 1.55
    }
  }, "One rules engine, one evidence fabric, one chain of custody across every robot, humanoid, drone and sensor you deploy. Live on your line in weeks, not months."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCTA,
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    })
  }, "Run an AI opportunity assessment"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    style: {
      color: "#fff",
      borderColor: "var(--neutral-700)"
    },
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18
    })
  }, "Watch the loop")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, loop.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.12em",
      color: "var(--neutral-400)",
      textTransform: "uppercase"
    }
  }, s), i < 3 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 13,
    style: {
      color: "var(--neutral-600)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--neutral-900)",
      border: "1px solid var(--neutral-800)",
      borderRadius: 14,
      padding: 20,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: "online",
    pulse: true
  }, "Fleet \xB7 live"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "MEA v2.4")), [["edge-node-01", "Plant 04 · Line B", "online", "12.4ms"], ["humanoid-arm-07", "Weld cell", "online", "8.1ms"], ["drone-survey-02", "Yard scan", "warn", "41ms"], ["sensor-array-19", "Boiler room", "online", "3.2ms"]].map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "11px 0",
      borderTop: "1px solid var(--neutral-800)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: r[2]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "#fff"
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--neutral-500)"
    }
  }, r[1]))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--neutral-400)"
    }
  }, r[3]))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Sections.jsx
try { (() => {
const {
  Card,
  CardBody,
  StatCard,
  Tag,
  Badge,
  Button
} = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function Integrations() {
  const names = ["SAP", "Oracle Fusion", "ServiceNow", "PTC", "HighByte", "AWS", "Azure", "Okta"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-surface)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "34px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "m2m-eyebrow"
  }, "100+ ENTERPRISE CONNECTORS \xB7 WE ACT ON TOP, WE DON'T REPLACE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 16
    }
  }, names.map(n => /*#__PURE__*/React.createElement(Tag, {
    key: n
  }, n)))));
}
function LoopGrid() {
  const cells = [["radio", "Perceive", "Contextualize shopfloor signals from every sensor, camera and controller in real time."], ["layers", "Simulate", "Validate against a digital twin before any model touches the real world."], ["cpu", "Decide", "One deterministic rules engine executes at the edge — no round-trip to the cloud."], ["zap", "Act", "Close the loop into ERP, MES and EAM, with full evidence and chain of custody."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "m2m-eyebrow"
  }, "THE CLOSED LOOP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: "12px 0 0"
    }
  }, "A system that sees, decides, and acts \u2014 getting smarter every cycle.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, cells.map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "flat"
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      background: "var(--brand-yellow)",
      color: "var(--brand-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-muted)",
      lineHeight: 1.55
    }
  }, d)))))));
}
function Metrics() {
  return /*#__PURE__*/React.createElement("section", {
    className: "m2m-dark",
    style: {
      background: "var(--neutral-950)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 36,
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "m2m-eyebrow",
    style: {
      color: "var(--brand-yellow)"
    }
  }, "REPRESENTATIVE OUTCOMES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: "12px 0 0",
      color: "#fff",
      maxWidth: 520
    }
  }, "Live in weeks. Measurable in 90 days.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--neutral-500)",
      fontFamily: "var(--font-mono)"
    }
  }, "300+ orgs \xB7 9 critical industries")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "OEE lift",
    value: "30",
    unit: "%",
    delta: "in 180 days",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Downtime",
    value: "50",
    unit: "%",
    delta: "unplanned failures",
    direction: "down"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Time to live",
    value: "Weeks",
    delta: "not months",
    direction: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Blended ROI",
    value: "290",
    unit: "%",
    delta: "edge + agent",
    direction: "up"
  }))));
}
function CaseStudy() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "80px 24px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "signal",
    style: {
      maxWidth: 900,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(CardBody, {
    style: {
      padding: 40
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "ENERGY \xB7 UNDER NDA"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 26,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      lineHeight: 1.3,
      margin: "18px 0 24px"
    }
  }, "\"The energy data pipeline achieved 92% accuracy, sub-2s processing, and standardized 400k+ records \u2014 accelerating our audits and upgrades.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--text-strong)"
    }
  }, "92%"), /*#__PURE__*/React.createElement("div", {
    className: "m2m-eyebrow"
  }, "ACCURACY")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--text-strong)"
    }
  }, "<2s"), /*#__PURE__*/React.createElement("div", {
    className: "m2m-eyebrow"
  }, "PROCESSING")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--text-strong)"
    }
  }, "400k+"), /*#__PURE__*/React.createElement("div", {
    className: "m2m-eyebrow"
  }, "RECORDS"))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16
    })
  }, "Read full case study"))))));
}
function CTA({
  onCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--brand-yellow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "72px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      margin: 0,
      color: "var(--brand-ink)",
      letterSpacing: "-0.03em"
    }
  }, "Model your AI savings."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--brand-ink)",
      opacity: 0.75,
      margin: "10px 0 0"
    }
  }, "Plan your deployment roadmap with our team. Up to 75% funding available.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onCTA
  }, "Book a strategy session"))));
}
Object.assign(window, {
  Integrations,
  LoopGrid,
  Metrics,
  CaseStudy,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
