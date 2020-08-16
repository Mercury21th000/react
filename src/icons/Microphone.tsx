/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z" opacity="0.2"/>
  <path d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <g>
    <rect width="256" height="256" fill="none"/>
    <g>
      <path d="M127.99414,175.99613a48.05083,48.05083,0,0,0,48-47.99219V63.99613a48,48,0,1,0-96,0v64A48.05249,48.05249,0,0,0,127.99414,175.99613Z"/>
      <path d="M207.50977,136.87894a8.00111,8.00111,0,1,0-15.90625-1.75,64.00856,64.00856,0,0,1-127.21875-.00781,8.09865,8.09865,0,0,0-8.82813-7.07032,8.01057,8.01057,0,0,0-7.07812,8.83594A79.60051,79.60051,0,0,0,119.99414,207.251v24.74512a8,8,0,1,0,16,0V207.252A79.577,79.577,0,0,0,207.50977,136.87894Z"/>
    </g>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M127.99991,24H128a40,40,0,0,1,40,40v64a40,40,0,0,1-40,40h-.00008A39.99991,39.99991,0,0,1,88,128.00009V63.99991A39.99991,39.99991,0,0,1,127.99991,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M199.56055,136.00017a72.00715,72.00715,0,0,1-143.12111-.00011" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Microphone = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        fill={color ?? contextColor}
        viewBox="0 0 256 256"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

Microphone.displayName = "Microphone";

export default Microphone;
