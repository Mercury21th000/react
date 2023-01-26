/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M224,44H32A12,12,0,0,0,20,56V192a20.1,20.1,0,0,0,20,20H216a20.1,20.1,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-86.5,75h0l-9.5,8.7L62.8,68H193.2Zm-44.7,9L44,172.7V83.3Zm17.7,16.3,9.4,8.5a11.9,11.9,0,0,0,16.2,0l9.4-8.5L193.2,188H62.8ZM163.2,128,212,83.3v89.4Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M224,56l-96,88L32,56Z" opacity="0.2" />
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-83.9,74h0L128,133.1,52.6,64H203.4Zm-41.4,6L40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.9L47.4,62H208.6ZM101.7,128,38,186.4V69.6Zm8.8,8.1,13.4,12.3a6.1,6.1,0,0,0,8.2,0l13.4-12.3L208.6,194H47.4Zm43.8-8.1L218,69.6V186.4Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-83.9,74h0L128,133.1,52.6,64H203.4Zm-41.4,6L40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.6L42.3,60H213.7ZM104.6,128,36,190.9V65.1Zm5.9,5.4,14.8,13.5a3.9,3.9,0,0,0,5.4,0l14.8-13.5L213.7,196H42.3Zm40.9-5.4L220,65.1V190.9Z" />
  </>
);

const Envelope = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Envelope.displayName = "Envelope";

export default Envelope;
