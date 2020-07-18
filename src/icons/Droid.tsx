import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Droid = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-droid</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -868.000000)'
              >
                <g id='ph-droid' transform='translate(140.000000, 868.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M12.8708987,1.16468796 C13.03551,1.34676946 13.0412114,1.616823 12.8965792,1.80465025 L12.835312,1.87089868 L11.9486972,2.67100616 C12.8489477,3.59923352 13.4246782,4.84400491 13.493128,6.22255947 L13.5,6.5 L13.5,9.5 C13.5,12.5381424 11.0381424,15 8,15 C5.03595866,15 2.62043344,12.6567685 2.5043662,9.72124727 L2.5,9.5 L2.5,6.5 C2.5,5.01138129 3.09103559,3.66111534 4.05130277,2.67100616 L3.16468796,1.87089868 C2.95984627,1.68571096 2.94391359,1.36952964 3.12910132,1.16468796 C3.29371263,0.982606457 3.56182505,0.949786394 3.76324021,1.07480423 L3.83531204,1.12910132 L4.81545615,2.01485299 C5.71404953,1.37576447 6.81304429,1 8,1 C9.18695571,1 10.2859505,1.37576447 11.1845439,2.01485299 L12.164688,1.12910132 C12.3695296,0.943913588 12.685711,0.95984627 12.8708987,1.16468796 Z M12.5,7.99999605 L3.5,7.99999605 L3.5,9.5 C3.5,11.9148331 5.40069272,13.8845211 7.78811769,13.9951034 L8,14 C10.4148331,14 12.3845211,12.0993073 12.4951034,9.71188231 L12.5,9.5 L12.5,7.99999605 Z M8,2 C5.58516688,2 3.61547892,3.90069272 3.50489662,6.28811769 L3.5,6.5 L3.5,6.99999605 L12.5,6.99999605 L12.5,6.5 C12.5,4.08516688 10.5993073,2.11547892 8.21188231,2.00489662 L8,2 Z M6.25,4.5 C6.664,4.5 7,4.836 7,5.25 C7,5.664 6.664,6 6.25,6 C5.836,6 5.5,5.664 5.5,5.25 C5.5,4.836 5.836,4.5 6.25,4.5 Z M9.75,4.5 C10.164,4.5 10.5,4.836 10.5,5.25 C10.5,5.664 10.164,6 9.75,6 C9.336,6 9,5.664 9,5.25 C9,4.836 9.336,4.5 9.75,4.5 Z'
                    id='Combined-Shape'
                    fill={color}
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

Droid.displayName = 'Droid'

export default Droid
