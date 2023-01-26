/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M244,116H190.9a64,64,0,0,0-125.7,0H12a12,12,0,0,0,0,24H65.2a64,64,0,0,0,125.7,0H244a12,12,0,0,0,0-24ZM128,168a40,40,0,1,1,40-40A40.1,40.1,0,0,1,128,168Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="52" />
    </g>
    <path d="M248,120H187.5a60,60,0,0,0-118.9,0H8a8,8,0,0,0,0,16H68.6a60,60,0,0,0,118.9,0H248a8,8,0,0,0,0-16ZM128,172a44,44,0,1,1,44-44A44.1,44.1,0,0,1,128,172Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M256,128a8,8,0,0,1-8,8H187.5a60,60,0,0,1-118.9,0H8a8,8,0,0,1,0-16H68.6a60,60,0,0,1,118.9,0H248A8,8,0,0,1,256,128Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M248,122H185.7a58,58,0,0,0-115.4,0H8a6,6,0,0,0,0,12H70.3a58,58,0,0,0,115.4,0H248a6,6,0,0,0,0-12ZM128,174a46,46,0,1,1,46-46A46,46,0,0,1,128,174Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M248,120H187.5a60,60,0,0,0-119,0H8a8,8,0,0,0,0,16H68.5a60,60,0,0,0,119,0H248a8,8,0,0,0,0-16ZM128,172a44,44,0,1,1,44-44A44,44,0,0,1,128,172Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M248,124H183.8a55.9,55.9,0,0,0-111.6,0H8a4,4,0,0,0,0,8H72.2a55.9,55.9,0,0,0,111.6,0H248a4,4,0,0,0,0-8ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Z" />
  </>
);

const GitCommit = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

GitCommit.displayName = "GitCommit";

export default GitCommit;
