import * as React from "react";

// By: mdi
// See: https://v0.app/icon/mdi/flask-empty-plus-outline
// Example: <IconMdiFlaskEmptyPlusOutline width="24px" height="24px" style={{color: "#000000"}} />

export const IconChemicalFlaskPlus = ({
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
      d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM5 19c0 .55.45 1 1 1h7.34c.27.75.66 1.42 1.19 2H6c-1.66 0-3-1.34-3-3c0-.6.18-1.16.5-1.64L9 7.81V6c-.55 0-1-.45-1-1V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1c0 .55-.45 1-1 1v1.81l2.5 4.37c-.64.17-1.26.45-1.81.82L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57"
    />
  </svg>
);

export default IconChemicalFlaskPlus;   