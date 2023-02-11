/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216,44H40A12,12,0,0,0,28,56V208a20.1,20.1,0,0,0,20,20H88a20.1,20.1,0,0,0,20-20V164h40v12a20.1,20.1,0,0,0,20,20h40a20.1,20.1,0,0,0,20-20V56A12,12,0,0,0,216,44Zm-12,64H172V68h32ZM84,68v40H52V68Zm0,136H52V132H84Zm24-64V68h40v72Zm64,32V132h32v40Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M216,56v64H160V56ZM40,208a8,8,0,0,0,8,8H88a8,8,0,0,0,8-8V120H40Z"
      opacity="0.2"
    />
    <path d="M216,48H40a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V160h48v16a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V56A8,8,0,0,0,216,48Zm-8,64H168V64h40ZM88,64v48H48V64Zm0,144H48V128H88Zm16-64V64h48v80Zm64,32V128h40v48Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M216,48H40a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V160h48v16a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V56A8,8,0,0,0,216,48ZM88,64v56H48V64Zm16,80V64h48v80Zm64,32V120h40v56Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M216,50H40a6,6,0,0,0-6,6V208a14,14,0,0,0,14,14H88a14,14,0,0,0,14-14V158h52v18a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V56A6,6,0,0,0,216,50Zm-6,64H166V62h44ZM90,62v52H46V62Zm0,146a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V126H90Zm12-62V62h52v84Zm106,32H168a2,2,0,0,1-2-2V126h44v50A2,2,0,0,1,208,178Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M216,48H40a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V160h48v16a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V56A8,8,0,0,0,216,48ZM88,208H48V128H88Zm0-96H48V64H88Zm64,32H104V64h48Zm56,32H168V128h40Zm0-64H168V64h40Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M216,52H40a4,4,0,0,0-4,4V208a12,12,0,0,0,12,12H88a12,12,0,0,0,12-12V156h56v20a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V56A4,4,0,0,0,216,52Zm-4,64H164V60h48ZM92,60v56H44V60Zm0,148a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V124H92Zm8-60V60h56v88Zm108,32H168a4,4,0,0,1-4-4V124h48v52A4,4,0,0,1,208,180Z" />
  </>
);

const Kanban = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Kanban.displayName = "Kanban";

export default Kanban;