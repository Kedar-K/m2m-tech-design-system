import React from "react";
export function Logo({ size = 32, showWord = true, tagline = "CODE AI", src = "assets/logo-mark.jpeg", href, className = "" }) {
  const Tag = href ? "a" : "span";
  return (
    <Tag className={"m2m-logo " + className} href={href}>
      <img className="m2m-logo__mark" src={src} width={size} height={size} alt="M2M Tech" />
      {showWord && <span className="m2m-logo__word"><b style={{ fontSize: size * 0.5 }}>M2M TECH</b>{tagline && <small>{tagline}</small>}</span>}
    </Tag>
  );
}
