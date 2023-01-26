/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M192,228H27.3a20,20,0,0,1-14.1-34.2L177.9,29.2A19.9,19.9,0,0,1,212,43.3V208A20.1,20.1,0,0,1,192,228ZM37,204H188V53Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M192,224H27.3A16,16,0,0,1,16,196.7L180.7,32A16,16,0,0,1,208,43.3V208A16,16,0,0,1,192,224ZM27.3,208H192V43.3L27.3,208Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M192,224H27.3A16,16,0,0,1,16,196.7L180.7,32A16,16,0,0,1,208,43.3V208A16,16,0,0,1,192,224ZM27.3,208H192V43.3L27.3,208Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M192,222H27.3a14,14,0,0,1-9.9-23.9L182.1,33.4A14,14,0,0,1,206,43.3V208A14,14,0,0,1,192,222Zm0-180.7a1.8,1.8,0,0,0-1.4.6L25.9,206.6a1.9,1.9,0,0,0-.4,2.2,2,2,0,0,0,1.8,1.2H192a2,2,0,0,0,2-2V43.3a1.8,1.8,0,0,0-1.2-1.8Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M192,224H27.3A16,16,0,0,1,16,196.7L180.7,32A16,16,0,0,1,208,43.3V208A16,16,0,0,1,192,224ZM27.3,208H192V43.3L27.3,208Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M192,220H27.3a12,12,0,0,1-8.5-20.5L183.5,34.8A12,12,0,0,1,204,43.3V208A12,12,0,0,1,192,220Zm-.1-180.7a3.4,3.4,0,0,0-2.7,1.2L24.5,205.2a3.8,3.8,0,0,0-.9,4.3,4,4,0,0,0,3.7,2.5H192a4,4,0,0,0,4-4V43.3a3.8,3.8,0,0,0-2.5-3.7A4,4,0,0,0,191.9,39.3Z" />
  </>
);

const CellSignalNone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CellSignalNone.displayName = "CellSignalNone";

export default CellSignalNone;
