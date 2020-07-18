import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const PencilLine = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-pencil-line</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-108.000000, -804.000000)'
              >
                <g
                  id='ph-pencil-line'
                  transform='translate(108.000000, 804.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M2.5,14 C2.22385763,14 2,13.7761424 2,13.5 L2,13.5 L2,10 C2,9.99563568 2.00005706,9.99127724 2.00017076,9.98692568 C2.00059233,9.96997663 2.00193958,9.95251591 2.00419813,9.93515107 C2.00595112,9.92193444 2.00819474,9.90887067 2.01094666,9.89593876 C2.01335738,9.88427339 2.01626678,9.87260836 2.01960172,9.86104006 C2.02425494,9.84529322 2.02956224,9.82983923 2.03561029,9.81468347 C2.03975081,9.80390278 2.04469976,9.79265881 2.05008263,9.7815725 C2.05621224,9.76930144 2.06236151,9.75783684 2.06895756,9.74661533 C2.07631438,9.73384877 2.08472878,9.72091943 2.09380131,9.70831735 C2.10956289,9.68649083 2.12713316,9.66576006 2.14644661,9.64644661 L2.14644661,9.64644661 L10.1464466,1.64644661 C10.3417088,1.45118446 10.6582912,1.45118446 10.8535534,1.64644661 L10.8535534,1.64644661 L14.3535534,5.14644661 C14.5488155,5.34170876 14.5488155,5.65829124 14.3535534,5.85355339 L14.3535534,5.85355339 L7.206,13 L13.5,13 C13.7454599,13 13.9496084,13.1768752 13.9919443,13.4101244 L14,13.5 C14,13.7454599 13.8231248,13.9496084 13.5898756,13.9919443 L13.5,14 Z M3,11.207 L3,13 L4.793,13 L3,11.207 Z M8.5,4.707 L3.207,10 L6,12.793 L11.293,7.5 L8.5,4.707 Z M10.5,2.707 L9.207,4 L12,6.793 L13.293,5.5 L10.5,2.707 Z'
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

PencilLine.displayName = 'PencilLine'

export default PencilLine
