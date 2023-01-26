/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M120,137,48,201a12.1,12.1,0,0,1-17-1,12.1,12.1,0,0,1,1-17l61.9-55L32,73A12,12,0,1,1,48,55l72,64a12.1,12.1,0,0,1,0,18Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M117.3,134l-72,64a8.1,8.1,0,0,1-5.3,2,8,8,0,0,1-5.3-14L100,128,34.7,70A8,8,0,1,1,45.3,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M117.3,134l-72,64a8.1,8.1,0,0,1-5.3,2,8,8,0,0,1-5.3-14L100,128,34.7,70A8,8,0,1,1,45.3,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M116,132.5l-72,64a6.1,6.1,0,0,1-8.5-.5,6,6,0,0,1,.5-8.5L103,128,36,68.5a6,6,0,1,1,8-9l72,64a6.1,6.1,0,0,1,0,9ZM216,186H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M117.3,134l-72,64a8.1,8.1,0,0,1-5.3,2,8,8,0,0,1-5.3-14L100,128,34.7,70A8,8,0,1,1,45.3,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M116,128a4.3,4.3,0,0,1-1.3,3l-72,64a3.9,3.9,0,0,1-2.7,1,4.3,4.3,0,0,1-3-1.3,4.1,4.1,0,0,1,.3-5.7L106,128,37.3,67a4,4,0,1,1,5.4-6l72,64A4.3,4.3,0,0,1,116,128Zm100,60H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Z" />
  </>
);

const Terminal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Terminal.displayName = "Terminal";

export default Terminal;
