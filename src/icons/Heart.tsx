import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Heart = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-heart</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-204.000000, -868.000000)'
                fill={color}
                fillRule='nonzero'
              >
                <g id='ph-heart' transform='translate(204.000000, 868.000000)'>
                  <path
                    d='M2.09830739,3.59778589 C0.634207667,5.06303935 0.634207667,7.43751445 2.09844661,8.90175339 L7.64644661,14.4497534 C7.84170876,14.6450155 8.15829124,14.6450155 8.35355339,14.4497534 L13.9015534,8.90175339 C15.3657923,7.43751445 15.3657923,5.06303935 13.9016926,3.59778589 L13.7470307,3.45151986 C12.2746094,2.13512556 10.012217,2.18387626 8.59844661,3.59764661 L7.999,4.196 L7.40173893,3.59783225 C5.98778944,2.18388266 3.72539086,2.13512578 2.25309464,3.45139451 L2.09830739,3.59778589 Z M13.3230742,4.44245628 C14.2663435,5.52332841 14.2234676,7.1656256 13.1944466,8.19464661 L8,13.389 L2.80555339,8.19464661 C1.73179233,7.12088555 1.73179233,5.37936065 2.80555339,4.30475339 C3.87929124,3.23101554 5.62070876,3.23101554 6.69444661,4.30475339 L7.64626107,5.25756775 C7.84156558,5.45307742 8.15843442,5.45307742 8.35373893,5.25756775 L9.30573893,4.30456775 C10.3792912,3.23101554 12.1207088,3.23101554 13.1944466,4.30475339 L13.3230742,4.44245628 Z'
                    id='Stroke-2'
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

Heart.displayName = 'Heart'

export default Heart
