/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="215.99609" y1="56" x2="39.99609" y2="56.00005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152Z" opacity="0.2"/>
  <line x1="215.99609" y1="56" x2="39.99609" y2="56.00005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M88,32h80a8,8,0,0,0,0-16H88a8,8,0,1,0,0,16Z"/>
  <path d="M216,48H40a8,8,0,0,0,0,16h8V208a16.01582,16.01582,0,0,0,16,16H192a16.01582,16.01582,0,0,0,16-16V64h8a8,8,0,1,0,0-16ZM112,168a8,8,0,1,1-16,0V104a8,8,0,1,1,16,0Zm48,0a8,8,0,1,1-16,0V104a8,8,0,1,1,16,0Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="215.99609" y1="56" x2="39.99609" y2="56.00005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="215.99609" y1="56" x2="39.99609" y2="56.00005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="215.99609" y1="56" x2="39.99609" y2="56.00005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="104" x2="104" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="152" y1="104" x2="152" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="24" x2="168" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M199.99609,56.00005V208a8,8,0,0,1-8,8h-128a8,8,0,0,1-8-8v-152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Trash = forwardRef<SVGSVGElement, IconProps>(
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

Trash.displayName = "Trash";

export default Trash;
