/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h80A12,12,0,0,1,180,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    <path d="M168,120H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,128Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h80A4,4,0,0,1,172,128Z" />
  </>
);

const MinusCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

MinusCircle.displayName = "MinusCircle";

export default MinusCircle;
