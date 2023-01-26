/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M176,52H80a76,76,0,0,0,0,152h96a76,76,0,0,0,0-152Zm0,128H80A52,52,0,0,1,80,76h96a52,52,0,0,1,0,104ZM80,92a36,36,0,1,0,36,36A36,36,0,0,0,80,92Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,80,140Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M112,128A32,32,0,1,1,80,96,32,32,0,0,1,112,128Z" opacity="0.2" />
    <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112ZM80,88a40,40,0,1,0,40,40A40,40,0,0,0,80,88Zm0,64a24,24,0,1,1,24-24A24.1,24.1,0,0,1,80,152Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144ZM80,168a40,40,0,1,1,40-40A40,40,0,0,1,80,168Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M176,58H80a70,70,0,0,0,0,140h96a70,70,0,0,0,0-140Zm0,128H80A58,58,0,0,1,80,70h96a58,58,0,0,1,0,116ZM80,90a38,38,0,1,0,38,38A38,38,0,0,0,80,90Zm0,64a26,26,0,1,1,26-26A26.1,26.1,0,0,1,80,154Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112ZM80,88a40,40,0,1,0,40,40A40,40,0,0,0,80,88Zm0,64a24,24,0,1,1,24-24A24.1,24.1,0,0,1,80,152Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M176,60H80a68,68,0,0,0,0,136h96a68,68,0,0,0,0-136Zm0,128H80A60,60,0,0,1,80,68h96a60,60,0,0,1,0,120ZM80,92a36,36,0,1,0,36,36A36,36,0,0,0,80,92Zm0,64a28,28,0,1,1,28-28A28.1,28.1,0,0,1,80,156Z" />
  </>
);

const ToggleLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ToggleLeft.displayName = "ToggleLeft";

export default ToggleLeft;
