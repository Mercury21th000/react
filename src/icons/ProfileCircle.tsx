import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const ProfileCircle = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-profile-circle</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -900.000000)'
              >
                <g
                  id='ph-profile-round'
                  transform='translate(236.000000, 900.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M8,1.5 C11.5891424,1.5 14.5,4.41085763 14.5,8 C14.5,11.5891424 11.5891424,14.5 8,14.5 C4.41085763,14.5 1.5,11.5891424 1.5,8 C1.5,4.41085763 4.41085763,1.5 8,1.5 Z M8.01638523,10.499932 L8,10.5 C7.99465006,10.5 7.98930341,10.499986 7.98396006,10.499958 L8.0003,10.4999 C6.61397259,10.4999 5.35508008,11.2111001 4.62909187,12.3453046 C5.56004426,13.0691201 6.72984184,13.5 8,13.5 C9.27015816,13.5 10.4399557,13.0691201 11.3711539,12.3455991 C10.6483427,11.2158361 9.39587232,10.5054142 8.01638523,10.499932 Z M8,2.5 C4.96314237,2.5 2.5,4.96314237 2.5,8 C2.5,9.4021014 3.02504859,10.6819085 3.88919624,11.6534716 C4.45052628,10.8424758 5.23703833,10.2187917 6.14452966,9.85613797 C5.44731456,9.30816163 5,8.45642596 5,7.5 C5,5.84285763 6.34285763,4.5 8,4.5 C9.65714237,4.5 11,5.84285763 11,7.5 C11,8.45642596 10.5526854,9.30816163 9.85580322,9.85746013 C10.7631041,10.2189046 11.549429,10.8423898 12.1109232,11.652936 C12.9749514,10.6819085 13.5,9.4021014 13.5,8 C13.5,4.96314237 11.0368576,2.5 8,2.5 Z M8.01515412,9.49994383 C9.11303115,9.49180334 10,8.59980184 10,7.5 C10,6.39514237 9.10485763,5.5 8,5.5 C6.89514237,5.5 6,6.39514237 6,7.5 C6,8.60485763 6.89514237,9.5 8,9.5 L7.98526505,9.49992232 L7.98526505,9.49992232 Z'
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

ProfileCircle.displayName = 'ProfileCircle'

export default ProfileCircle
