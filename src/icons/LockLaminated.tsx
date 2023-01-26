/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,76H176V52a48,48,0,0,0-96,0V76H48A20.1,20.1,0,0,0,28,96V208a20.1,20.1,0,0,0,20,20H208a20.1,20.1,0,0,0,20-20V96A20.1,20.1,0,0,0,208,76ZM52,144H204v16H52Zm52-92a24,24,0,0,1,48,0V76H104Zm100,48v20H52V100ZM52,204V184H204v20Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="40" y="88" width="176" height="128" rx="8" />
    </g>
    <path d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM48,128H208v16H48Zm0,32H208v16H48ZM100,52a28,28,0,0,1,56,0V80H100ZM208,96v16H48V96Zm0,112H48V192H208v16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Zm84,140H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,82H170V52a42,42,0,0,0-84,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM46,126H210v20H46Zm0,32H210v20H46ZM98,52a30,30,0,0,1,60,0V82H98ZM48,94H208a2,2,0,0,1,2,2v18H46V96A2,2,0,0,1,48,94ZM208,210H48a2,2,0,0,1-2-2V190H210v18A2,2,0,0,1,208,210Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM48,128H208v16H48Zm0,32H208v16H48ZM100,52a28,28,0,0,1,56,0V80H100ZM208,96v16H48V96Zm0,112H48V192H208v16Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,84H168V52a40,40,0,0,0-80,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM44,124H212v24H44Zm0,32H212v24H44ZM96,52a32,32,0,0,1,64,0V84H96ZM48,92H208a4,4,0,0,1,4,4v20H44V96A4,4,0,0,1,48,92ZM208,212H48a4,4,0,0,1-4-4V188H212v20A4,4,0,0,1,208,212Z" />
  </>
);

const LockLaminated = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

LockLaminated.displayName = "LockLaminated";

export default LockLaminated;
