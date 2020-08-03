
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M13.055948,0.996831934 C13.3084767,1.27616151 13.3116826,1.69351541 13.0793276,1.97579085 L13.0025681,2.05614803 L12.3039321,2.68713551 C13.2034609,3.70192734 13.7496,5.0371001 13.7496,6.4998 L13.7496,6.4998 L13.7496,9.4998 C13.7496,12.6760136 11.1758136,15.2498 7.9996,15.2498 C4.82406423,15.2498 2.2496,12.6756914 2.2496,9.4998 L2.2496,9.4998 L2.2496,6.4998 C2.2496,5.03763025 2.79559784,3.70278442 3.69479629,2.68805973 L2.99663193,2.05614803 C2.6893694,1.77836643 2.66547038,1.30409446 2.94325197,0.996831934 C3.1957807,0.717502362 3.61069816,0.672357507 3.91490157,0.875159282 L4.00256807,0.943451975 L4.83686697,1.69722403 C5.74425199,1.09839265 6.83128098,0.7498 7.9996,0.7498 C9.1685193,0.7498 10.2559161,1.09855836 11.1634492,1.69768074 L11.9966319,0.943451975 C12.3038945,0.665670383 12.7781664,0.689569405 13.055948,0.996831934 Z M12.2496,8.24979408 L3.7496,8.24979408 L3.7496,9.4998 C3.7496,11.7781762 5.54215897,13.6374986 7.79368825,13.7448996 L7.9996,13.7498 C10.3473864,13.7498 12.2496,11.8475864 12.2496,9.4998 L12.2496,9.4998 L12.2496,8.24979408 Z M7.9996,2.2498 C5.65281356,2.2498 3.7496,4.15301356 3.7496,6.4998 L3.7496,6.4998 L3.7496,6.74979408 L12.2496,6.74979408 L12.2496,6.4998 C12.2496,4.22167894 10.4572887,2.36211641 8.2055336,2.25470107 Z M6.2496,4.4998 C6.6646,4.4998 6.9996,4.8358 6.9996,5.2498 C6.9996,5.6648 6.6646,5.9998 6.2496,5.9998 C5.8356,5.9998 5.4996,5.6648 5.4996,5.2498 C5.4996,4.8358 5.8356,4.4998 6.2496,4.4998 Z M9.7496,4.4998 C10.1646,4.4998 10.4996,4.8358 10.4996,5.2498 C10.4996,5.6648 10.1646,5.9998 9.7496,5.9998 C9.3356,5.9998 8.9996,5.6648 8.9996,5.2498 C8.9996,4.8358 9.3356,4.4998 9.7496,4.4998 Z"/>
  </g>

)
    case "duotone":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M12.9996,7.4998 L2.9996,7.4998 L2.9996,9.4998 C2.9996,12.2618 5.2386,14.4998 7.9996,14.4998 C10.7616,14.4998 12.9996,12.2618 12.9996,9.4998 L12.9996,7.4998 Z" opacity=".2"/>
    <path fill={color} d="M12.8704987,1.16448796 C13.03511,1.34656946 13.0408114,1.616623 12.8961792,1.80445025 L12.834912,1.87069868 L11.948176,2.67106236 C12.9084852,3.66125024 13.4996,5.01150961 13.4996,6.4998 L13.4996,6.4998 L13.4996,9.4998 C13.4996,12.5379424 11.0377424,14.9998 7.9996,14.9998 C4.96212769,14.9998 2.4996,12.5376125 2.4996,9.4998 L2.4996,9.4998 L2.4996,6.4998 C2.4996,5.01167127 3.09087567,3.66141514 4.05127011,2.67118852 L3.16428796,1.87069868 C2.95944627,1.68551096 2.94351359,1.36932964 3.12870132,1.16448796 C3.29331263,0.982406457 3.56142505,0.949586394 3.76284021,1.07460423 L3.83491204,1.12890132 L4.81549129,2.014932 C5.71412563,1.37571711 6.81303497,0.9998 7.9996,0.9998 C9.18642683,0.9998 10.2853934,1.37566675 11.1840003,2.01483994 L12.164288,1.12890132 C12.3691296,0.943713588 12.685311,0.95964627 12.8704987,1.16448796 Z M12.4996,7.99979605 L3.4996,7.99979605 L3.4996,9.4998 C3.4996,11.9142826 5.40089586,13.884301 7.78776938,13.9949025 L7.9996,13.9998 C10.4854576,13.9998 12.4996,11.9856576 12.4996,9.4998 L12.4996,9.4998 L12.4996,7.99979605 Z M7.9996,1.9998 C5.51474237,1.9998 3.4996,4.01494237 3.4996,6.4998 L3.4996,6.4998 L3.4996,6.99979605 L12.4996,6.99979605 L12.4996,6.4998 C12.4996,4.08558776 10.5985668,2.1153144 8.21145313,2.00469814 Z M6.2496,4.4998 C6.6646,4.4998 6.9996,4.8358 6.9996,5.2498 C6.9996,5.6648 6.6646,5.9998 6.2496,5.9998 C5.8356,5.9998 5.4996,5.6648 5.4996,5.2498 C5.4996,4.8358 5.8356,4.4998 6.2496,4.4998 Z M9.7496,4.4998 C10.1646,4.4998 10.4996,4.8358 10.4996,5.2498 C10.4996,5.6648 10.1646,5.9998 9.7496,5.9998 C9.3356,5.9998 8.9996,5.6648 8.9996,5.2498 C8.9996,4.8358 9.3356,4.4998 9.7496,4.4998 Z"/>
  </g>

)
    case "fill":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M12.1646,1.1288 C12.3686,0.9438 12.6856,0.9588 12.8706,1.1648 C13.0556,1.3698 13.0396,1.6858 12.8346,1.8708 L12.8346,1.8708 L11.9436,2.6758 C12.9046,3.6668 13.4996,5.0148 13.4996,6.4998 L13.4996,6.4998 L13.4996,9.4998 C13.4996,12.5328 11.0316,14.9998 7.9996,14.9998 C4.9676,14.9998 2.4996,12.5328 2.4996,9.4998 L2.4996,9.4998 L2.4996,6.4998 C2.4996,5.0148 3.0946,3.6668 4.0556,2.6758 L4.0556,2.6758 L3.1646,1.8708 C2.9596,1.6858 2.9436,1.3698 3.1286,1.1648 C3.3136,0.9598 3.6306,0.9448 3.8346,1.1288 L3.8346,1.1288 L4.8196,2.0208 C5.7196,1.3798 6.8146,0.9998 7.9996,0.9998 C9.1846,0.9998 10.2796,1.3798 11.1796,2.0208 L11.1796,2.0208 Z M7.9996,1.9998 C5.5186,1.9998 3.4996,4.0188 3.4996,6.4998 L3.4996,6.4998 L3.4996,6.9998 L12.4996,6.9998 L12.4996,6.4998 C12.4996,4.0188 10.4806,1.9998 7.9996,1.9998 Z M6.2496,4.4998 C6.6636,4.4998 6.9996,4.8358 6.9996,5.2498 C6.9996,5.6648 6.6636,5.9998 6.2496,5.9998 C5.8356,5.9998 5.4996,5.6648 5.4996,5.2498 C5.4996,4.8358 5.8356,4.4998 6.2496,4.4998 Z M9.7496,4.4998 C10.1636,4.4998 10.4996,4.8358 10.4996,5.2498 C10.4996,5.6648 10.1636,5.9998 9.7496,5.9998 C9.3356,5.9998 8.9996,5.6648 8.9996,5.2498 C8.9996,4.8358 9.3356,4.4998 9.7496,4.4998 Z"/>
  </g>

)
    case "light":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M12.777774,1.24831597 C12.8993035,1.38274332 12.9053458,1.58110398 12.8020365,1.7216397 L12.751084,1.77797401 L11.7679035,2.66692064 C12.759631,3.64205207 13.3746,4.99912494 13.3746,6.4998 L13.3746,6.4998 L13.3746,9.4998 C13.3746,12.4689068 10.9687068,14.8748 7.9996,14.8748 C5.03115942,14.8748 2.6246,12.468573 2.6246,9.4998 L2.6246,9.4998 L2.6246,6.4998 C2.6246,4.99929369 3.23973924,3.64221895 4.23154911,2.66704441 L3.24811597,1.77797401 C3.0944847,1.63908322 3.08253519,1.40194723 3.22142599,1.24831597 C3.34295543,1.11388861 3.53970385,1.08793635 3.68991301,1.17659469 L3.75108403,1.22162599 L4.80664116,2.17578265 C5.69947698,1.51533864 6.80400768,1.1248 7.9996,1.1248 C9.19524406,1.1248 10.2996434,1.51514302 11.1923608,2.17532675 L12.248116,1.22162599 C12.4017472,1.08273519 12.6388832,1.0946847 12.777774,1.24831597 Z M12.6246,7.87479704 L3.3746,7.87479704 L3.3746,9.4998 C3.3746,11.9833769 5.33190593,14.0094007 7.78789905,14.1200413 L7.9996,14.1248 C10.5544932,14.1248 12.6246,12.0546932 12.6246,9.4998 L12.6246,9.4998 L12.6246,7.87479704 Z M7.9996,1.8748 C5.44570678,1.8748 3.3746,3.94590678 3.3746,6.4998 L3.3746,6.4998 L3.3746,7.12479704 L12.6246,7.12479704 L12.6246,6.4998 C12.6246,4.01650118 10.6675645,1.99021473 8.21132348,1.87955938 Z M6.2501,4.6878 C6.5601,4.6878 6.8121,4.9388 6.8121,5.2498 C6.8121,5.5608 6.5601,5.8118 6.2501,5.8118 C5.9391,5.8118 5.6871,5.5608 5.6871,5.2498 C5.6871,4.9388 5.9391,4.6878 6.2501,4.6878 Z M9.7501,4.6878 C10.0601,4.6878 10.3121,4.9388 10.3121,5.2498 C10.3121,5.5608 10.0601,5.8118 9.7501,5.8118 C9.4391,5.8118 9.1871,5.5608 9.1871,5.2498 C9.1871,4.9388 9.4391,4.6878 9.7501,4.6878 Z"/>
  </g>

)
    case "thin":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 15.999 16 15.999 0 0 0"/>
    <path fill={color} d="M12.6850493,1.33214398 C12.7622109,1.41749468 12.769539,1.54150498 12.710567,1.6340553 L12.667256,1.68524934 L11.5841035,2.66385635 C12.6090208,3.6220008 13.2496,4.98610862 13.2496,6.4998 L13.2496,6.4998 L13.2496,9.4998 C13.2496,12.3998712 10.8996712,14.7498 7.9996,14.7498 C5.10019114,14.7498 2.7496,12.3995336 2.7496,9.4998 L2.7496,9.4998 L2.7496,6.4998 C2.7496,4.9862267 3.39040904,3.62206439 4.41547359,2.66386661 L3.33194398,1.68524934 C3.22952313,1.59265548 3.22155679,1.43456482 3.31415066,1.33214398 C3.39131221,1.24679328 3.51395765,1.22703598 3.61196741,1.27640548 L3.66725602,1.31435066 L4.7993195,2.33792332 C5.68527024,1.65560389 6.79512652,1.2498 7.9996,1.2498 C9.20407008,1.2498 10.3137381,1.65535796 11.1995479,2.33734782 L12.331944,1.31435066 C12.4343648,1.22175679 12.5924555,1.22972313 12.6850493,1.33214398 Z M12.7496,7.74979803 L3.2496,7.74979803 L3.2496,9.4998 C3.2496,12.0504986 5.25980804,14.1312817 7.78217756,14.2449126 L7.9996,14.2498 C10.6235288,14.2498 12.7496,12.1237288 12.7496,9.4998 L12.7496,9.4998 L12.7496,7.74979803 Z M7.9996,1.7498 C5.37667119,1.7498 3.2496,3.87687119 3.2496,6.4998 L3.2496,6.4998 L3.2496,7.24979803 L12.7496,7.24979803 L12.7496,6.4998 C12.7496,3.949387 10.7396697,1.86833415 8.21704558,1.75468802 Z M6.2496,4.8748 C6.4566,4.8748 6.6246,5.0428 6.6246,5.2498 C6.6246,5.4578 6.4566,5.6248 6.2496,5.6248 C6.0426,5.6248 5.8746,5.4578 5.8746,5.2498 C5.8746,5.0428 6.0426,4.8748 6.2496,4.8748 Z M9.7496,4.8748 C9.9566,4.8748 10.1246,5.0428 10.1246,5.2498 C10.1246,5.4578 9.9566,5.6248 9.7496,5.6248 C9.5426,5.6248 9.3746,5.4578 9.3746,5.2498 C9.3746,5.0428 9.5426,4.8748 9.7496,4.8748 Z"/>
  </g>

)
    case "regular":
      return (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <polygon points="0 16 16 16 16 0 0 0"/>
    <path fill={color} d="M12.8708987,1.16468796 C13.03551,1.34676946 13.0412114,1.616823 12.8965792,1.80465025 L12.835312,1.87089868 L11.9486972,2.67100616 C12.8489477,3.59923352 13.4246782,4.84400491 13.493128,6.22255947 L13.5,6.5 L13.5,9.5 C13.5,12.5381424 11.0381424,15 8,15 C5.03595866,15 2.62043344,12.6567685 2.5043662,9.72124727 L2.5,9.5 L2.5,6.5 C2.5,5.01138129 3.09103559,3.66111534 4.05130277,2.67100616 L3.16468796,1.87089868 C2.95984627,1.68571096 2.94391359,1.36952964 3.12910132,1.16468796 C3.29371263,0.982606457 3.56182505,0.949786394 3.76324021,1.07480423 L3.83531204,1.12910132 L4.81545615,2.01485299 C5.71404953,1.37576447 6.81304429,1 8,1 C9.18695571,1 10.2859505,1.37576447 11.1845439,2.01485299 L12.164688,1.12910132 C12.3695296,0.943913588 12.685711,0.95984627 12.8708987,1.16468796 Z M12.5,7.99999605 L3.5,7.99999605 L3.5,9.5 C3.5,11.9148331 5.40069272,13.8845211 7.78811769,13.9951034 L8,14 C10.4148331,14 12.3845211,12.0993073 12.4951034,9.71188231 L12.5,9.5 L12.5,7.99999605 Z M8,2 C5.58516688,2 3.61547892,3.90069272 3.50489662,6.28811769 L3.5,6.5 L3.5,6.99999605 L12.5,6.99999605 L12.5,6.5 C12.5,4.08516688 10.5993073,2.11547892 8.21188231,2.00489662 L8,2 Z M6.25,4.5 C6.664,4.5 7,4.836 7,5.25 C7,5.664 6.664,6 6.25,6 C5.836,6 5.5,5.664 5.5,5.25 C5.5,4.836 5.836,4.5 6.25,4.5 Z M9.75,4.5 C10.164,4.5 10.5,4.836 10.5,5.25 C10.5,5.664 10.164,6 9.75,6 C9.336,6 9,5.664 9,5.25 C9,4.836 9.336,4.5 9.75,4.5 Z"/>
  </g>

)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Droid = forwardRef<SVGSVGElement, IconProps>(
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
        viewBox="0 0 16 16"
        fill="none"
        stroke={color ?? contextColor}
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

Droid.displayName = "Droid";

export default Droid;
