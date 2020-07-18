import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Cloud = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-cloud</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -932.000000)'
              >
                <g id='ph-cloud' transform='translate(140.000000, 932.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M10,2.5 C13.0371424,2.5 15.5,4.96285763 15.5,8 C15.5,10.9637195 13.1561307,13.3795509 10.2212006,13.4956332 L10,13.5 L4.5,13.5 C2.29085763,13.5 0.5,11.7091424 0.5,9.5 C0.5,7.29085763 2.29085763,5.5 4.5,5.5 C4.66883815,5.5 4.83666643,5.51055177 5.00258684,5.53139641 L5.078,5.543 L5.08557886,5.52817686 C5.95965102,3.79409294 7.72457505,2.5856471 9.77882237,2.50436794 L10,2.5 Z M10,3.5 C7.51514237,3.5 5.5,5.51514237 5.5,8 C5.5,8.27614237 5.27614237,8.5 5,8.5 C4.72385763,8.5 4.5,8.27614237 4.5,8 C4.5,7.55554014 4.55274413,7.12337906 4.65231354,6.70943559 L4.704,6.506 L4.5,6.5 C2.84314237,6.5 1.5,7.84314237 1.5,9.5 C1.5,11.0976841 2.74891683,12.4036611 4.32372688,12.4949073 L4.5,12.5 L10,12.5 C12.4852185,12.5 14.5,10.4854968 14.5,8 C14.5,5.51514237 12.4848576,3.5 10,3.5 Z'
                    id='Stroke-2'
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

Cloud.displayName = 'Cloud'

export default Cloud
