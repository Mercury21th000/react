/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M212,96a84,84,0,1,0-96,83.1V196H88a12,12,0,0,0,0,24h28v20a12,12,0,0,0,24,0V220h28a12,12,0,0,0,0-24H140V179.1A84,84,0,0,0,212,96ZM68,96a60,60,0,1,1,60,60A60,60,0,0,1,68,96Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M200,96a72,72,0,1,1-72-72A72,72,0,0,1,200,96Z" opacity="0.2" />
    <path d="M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.1,80.1,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.1,64.1,0,0,1,64,96Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.1,80.1,0,0,0,208,96Zm-80,64a64,64,0,1,1,64-64A64.1,64.1,0,0,1,128,160Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M206,96a78,78,0,1,0-84,77.7V202H88a6,6,0,0,0,0,12h34v26a6,6,0,0,0,12,0V214h34a6,6,0,0,0,0-12H134V173.7A78,78,0,0,0,206,96ZM62,96a66,66,0,1,1,66,66A66.1,66.1,0,0,1,62,96Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.1,80.1,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.1,64.1,0,0,1,64,96Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M204,96a76,76,0,1,0-80,75.9V204H88a4,4,0,0,0,0,8h36v28a4,4,0,0,0,8,0V212h36a4,4,0,0,0,0-8H132V171.9A76.1,76.1,0,0,0,204,96ZM60,96a68,68,0,1,1,68,68A68.1,68.1,0,0,1,60,96Z" />
  </>
);

const GenderFemale = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

GenderFemale.displayName = "GenderFemale";

export default GenderFemale;
