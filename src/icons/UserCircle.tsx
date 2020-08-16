/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,32A96.00088,96.00088,0,0,0,63.79883,199.375v-.001A71.99731,71.99731,0,0,1,128,160a40,40,0,1,1,40-40,40.0001,40.0001,0,0,1-40,40,71.99731,71.99731,0,0,1,64.20117,39.374A96.0002,96.0002,0,0,0,128,32Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="116" r="44"/>
  <path d="M232,128A104.00007,104.00007,0,1,0,54.00977,200.96875l-.127.25,4.5625,4.10156c.43457.39063.95215.65625,1.39258,1.03907a104.448,104.448,0,0,0,12.60938,9.40722c.9541.60449,1.9082,1.17969,2.87988,1.75195a103.42641,103.42641,0,0,0,14.37695,7.082c.85352.33789,1.71289.6289,2.5752.94433a102.79129,102.79129,0,0,0,16.08886,4.53711c.61524.11817,1.23438.17578,1.85157.2832a97.50927,97.50927,0,0,0,35.56054,0c.61719-.10742,1.23633-.165,1.85157-.2832a102.81514,102.81514,0,0,0,16.09082-4.53711c.86035-.31445,1.71972-.60547,2.57129-.94336a103.56284,103.56284,0,0,0,14.3789-7.083c.97168-.57226,1.92578-1.14746,2.87988-1.75195a104.448,104.448,0,0,0,12.60938-9.40722c.44043-.38282.958-.64844,1.39258-1.03907l4.5625-4.10156-.127-.25A103.63533,103.63533,0,0,0,232,128Zm-38.37695,58.4248a80.06972,80.06972,0,0,0-28.25586-25.01953,55.13336,55.13336,0,0,1-74.73438,0A80.06972,80.06972,0,0,0,62.377,186.4248a88.00024,88.00024,0,1,1,131.2461,0Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const UserCircle = forwardRef<SVGSVGElement, IconProps>(
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

UserCircle.displayName = "UserCircle";

export default UserCircle;
