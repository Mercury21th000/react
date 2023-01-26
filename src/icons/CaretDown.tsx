/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,188a12.2,12.2,0,0,1-8.5-3.5l-80-80a12,12,0,0,1,17-17L128,159l71.5-71.5a12,12,0,0,1,17,17l-80,80A12.2,12.2,0,0,1,128,188Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <polygon points="208 96 128 176 48 96 208 96" />
    </g>
    <path d="M128,184a8.5,8.5,0,0,1-5.7-2.3l-80-80a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,48,88H208a8,8,0,0,1,7.4,4.9,8.4,8.4,0,0,1-1.7,8.8l-80,80A8.5,8.5,0,0,1,128,184ZM67.3,104,128,164.7,188.7,104Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M213.7,101.7l-80,80a8.2,8.2,0,0,1-11.4,0l-80-80a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,48,88H208a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,213.7,101.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,182a5.8,5.8,0,0,1-4.2-1.8l-80-80a5.9,5.9,0,0,1,8.4-8.4L128,167.5l75.8-75.7a5.9,5.9,0,0,1,8.4,8.4l-80,80A5.8,5.8,0,0,1,128,182Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,184a8.5,8.5,0,0,1-5.7-2.3l-80-80A8.1,8.1,0,0,1,53.7,90.3L128,164.7l74.3-74.4a8.1,8.1,0,0,1,11.4,11.4l-80,80A8.5,8.5,0,0,1,128,184Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,180a3.9,3.9,0,0,1-2.8-1.2l-80-80a4,4,0,0,1,5.6-5.6L128,170.3l77.2-77.1a4,4,0,1,1,5.6,5.6l-80,80A3.9,3.9,0,0,1,128,180Z" />
  </>
);

const CaretDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CaretDown.displayName = "CaretDown";

export default CaretDown;
