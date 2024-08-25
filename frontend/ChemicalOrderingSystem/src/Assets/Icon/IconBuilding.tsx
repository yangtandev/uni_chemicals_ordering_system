import * as React from "react";

// By: bx
// See: https://v0.app/icon/bx/buildings
// Example: <IconBxBuildings width="24px" height="24px" style={{color: "#000000"}} />

const IconBuilding = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2M5 12h6v8H5zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10z"
    />
    <path
      fill={fill}
      d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"
    />
  </svg>
);
export default IconBuilding;