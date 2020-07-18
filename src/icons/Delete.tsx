import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Delete = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = '1em', weight = 'regular', ...rest },
    ref
  ) => {
    switch (weight) {
      case 'thin':
      case 'light':
      case 'regular':
        return (
          <svg
            ref={ref}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            stroke={color}
            {...rest}
          >
            {' '}
            <title>ph-delete</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -804.000000)'
              >
                <g id='ph-delete' transform='translate(140.000000, 804.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M13.9996,3 C14.5525519,3 14.9996,3.44766643 14.9996,4 L14.9996,4 L14.9996,12 C14.9996,12.5523336 14.5525519,13 13.9996,13 L13.9996,13 L5.2246,13 C4.93866549,13 4.66658208,12.8778292 4.47690962,12.664198 L4.47690962,12.664198 L0.625909619,8.33219798 C0.457496794,8.14274995 0.457496794,7.85725005 0.625909619,7.66780202 L0.625909619,7.66780202 L4.47670261,3.33603503 C4.66658208,3.12217078 4.93866549,3 5.2246,3 L5.2246,3 Z M13.9996,4 L5.2246,4 L1.669,8 L5.22449739,12.000035 L13.9996,12.000035 L13.9996,4 Z M7.7838055,6.08859116 L7.85305339,6.14644661 L8.9996,7.293 L10.1459466,6.14644661 C10.3412088,5.95118446 10.6577912,5.95118446 10.8530534,6.14644661 C11.0266197,6.32001296 11.0459049,6.58943736 10.9109088,6.7843055 L10.8530534,6.85355339 L9.7066,8 L10.8530534,9.14644661 C11.0483155,9.34170876 11.0483155,9.65829124 10.8530534,9.85355339 C10.679487,10.0271197 10.4100626,10.0464049 10.2151945,9.91140884 L10.1459466,9.85355339 L8.9996,8.707 L7.85305339,9.85355339 C7.65779124,10.0488155 7.34120876,10.0488155 7.14594661,9.85355339 C6.97238026,9.67998704 6.95309511,9.41056264 7.08809116,9.2156945 L7.14594661,9.14644661 L8.2926,8 L7.14594661,6.85355339 C6.95068446,6.65829124 6.95068446,6.34170876 7.14594661,6.14644661 C7.31951296,5.97288026 7.58893736,5.95359511 7.7838055,6.08859116 Z'
                    id='Combined-Shape'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'bold':
      case 'fill':
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

Delete.displayName = 'Delete'

export default Delete
