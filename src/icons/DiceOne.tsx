/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M192,28H64A36,36,0,0,0,28,64V192a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V64A36,36,0,0,0,192,28Zm12,164a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H192a12,12,0,0,1,12,12Zm-60-64a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="40" y="40" width="176" height="176" rx="24" />
    </g>
    <path d="M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-68-64a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M192,34H64A30.1,30.1,0,0,0,34,64V192a30.1,30.1,0,0,0,30,30H192a30.1,30.1,0,0,0,30-30V64A30.1,30.1,0,0,0,192,34Zm18,158a18.1,18.1,0,0,1-18,18H64a18.1,18.1,0,0,1-18-18V64A18.1,18.1,0,0,1,64,46H192a18.1,18.1,0,0,1,18,18Zm-72-64a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-68-64a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M192,36H64A28.1,28.1,0,0,0,36,64V192a28.1,28.1,0,0,0,28,28H192a28.1,28.1,0,0,0,28-28V64A28.1,28.1,0,0,0,192,36Zm20,156a20.1,20.1,0,0,1-20,20H64a20.1,20.1,0,0,1-20-20V64A20.1,20.1,0,0,1,64,44H192a20.1,20.1,0,0,1,20,20Zm-76-64a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z" />
  </>
);

const DiceOne = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

DiceOne.displayName = "DiceOne";

export default DiceOne;
