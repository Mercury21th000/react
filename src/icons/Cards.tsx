/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M180,72H36A20.1,20.1,0,0,0,16,92V204a20.1,20.1,0,0,0,20,20H180a20.1,20.1,0,0,0,20-20V92A20.1,20.1,0,0,0,180,72Zm-4,128H40V96H176ZM240,52V176a12,12,0,0,1-24,0V56H64a12,12,0,0,1,0-24H220A20.1,20.1,0,0,1,240,52Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <g opacity="0.2">
        <rect x="32" y="80" width="160" height="128" rx="8" />
      </g>
      <path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200Z" />
      <path d="M216,40H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M200,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V88A16,16,0,0,1,40,72H184A16,16,0,0,1,200,88Zm16-48H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M184,74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V88A14,14,0,0,0,184,74Zm2,126a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2ZM230,56V176a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H64a6,6,0,0,1,0-12H216A14,14,0,0,1,230,56Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M184,76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V88A12,12,0,0,0,184,76Zm4,124a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4ZM228,56V176a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H64a4,4,0,0,1,0-8H216A12,12,0,0,1,228,56Z" />
    </>,
  ],
]);

const Cards: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Cards.displayName = "Cards";

export default Cards;
