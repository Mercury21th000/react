import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const SmileyMeh = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-smiley-meh</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-108.000000, -772.000000)'
              >
                <g id='ph-meh' transform='translate(108.000000, 772.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <g
                    id='Group-10'
                    transform='translate(1.000000, 1.000000)'
                    fill={color}
                  >
                    <path
                      d='M7,0.5 C10.5891424,0.5 13.5,3.41085763 13.5,7 C13.5,10.5891424 10.5891424,13.5 7,13.5 C3.41085763,13.5 0.5,10.5891424 0.5,7 C0.5,3.41085763 3.41085763,0.5 7,0.5 Z M7,1.5 C3.96314237,1.5 1.5,3.96314237 1.5,7 C1.5,10.0368576 3.96314237,12.5 7,12.5 C10.0368576,12.5 12.5,10.0368576 12.5,7 C12.5,3.96314237 10.0368576,1.5 7,1.5 Z M9.5,8.5 C9.77614237,8.5 10,8.72385763 10,9 C10,9.24545989 9.82312484,9.44960837 9.58987563,9.49194433 L9.5,9.5 L4.5,9.5 C4.22385763,9.5 4,9.27614237 4,9 C4,8.75454011 4.17687516,8.55039163 4.41012437,8.50805567 L4.5,8.5 L9.5,8.5 Z M4.75,5 C5.164,5 5.5,5.336 5.5,5.75 C5.5,6.164 5.164,6.5 4.75,6.5 C4.336,6.5 4,6.164 4,5.75 C4,5.336 4.336,5 4.75,5 Z M9.25,5 C9.664,5 10,5.336 10,5.75 C10,6.164 9.664,6.5 9.25,6.5 C8.836,6.5 8.5,6.164 8.5,5.75 C8.5,5.336 8.836,5 9.25,5 Z'
                      id='Combined-Shape'
                    ></path>
                  </g>
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

SmileyMeh.displayName = 'SmileyMeh'

export default SmileyMeh
