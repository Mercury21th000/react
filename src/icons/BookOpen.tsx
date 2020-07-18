import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const BookOpen = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-book-open</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-140.000000, -900.000000)'
              >
                <g
                  id='ph-book-open'
                  transform='translate(140.000000, 900.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M6,2.5 C6.81804803,2.5 7.54465135,2.89343467 8.00081228,3.50130633 C8.45534865,2.89343467 9.18195197,2.5 10,2.5 L10,2.5 L14.5,2.5 C14.7761424,2.5 15,2.72385763 15,3 L15,3 L15,12 C15,12.2761424 14.7761424,12.5 14.5,12.5 L14.5,12.5 L10,12.5 C9.17214237,12.5 8.5,13.1721424 8.5,14 C8.5,14.2962963 8.30246914,14.4609053 8.0829904,14.4938272 L8,14.5 C7.75,14.5 7.5,14.3333333 7.5,14 L7.5,14 L7.49312786,13.855629 C7.42038562,13.0953926 6.77916012,12.5 6,12.5 L6,12.5 L1.5,12.5 C1.22385763,12.5 1,12.2761424 1,12 L1,12 L1,3 C1,2.72385763 1.22385763,2.5 1.5,2.5 L1.5,2.5 Z M6,3.5 L2,3.5 L2,11.5 L6,11.5 C6.55205695,11.5 7.06246834,11.6791772 7.47622151,11.982519 L7.47622151,11.982519 L7.5,12.001 L7.5,5 L7.5,5 L7.49312786,4.85562901 C7.42493201,4.14290733 6.85709267,3.57506799 6.14437099,3.50687214 L6.14437099,3.50687214 L6,3.5 Z M14,3.5 L10,3.5 C9.17214237,3.5 8.5,4.17214237 8.5,5 L8.5,5 L8.5,12 L8.52377849,11.982519 C8.89615634,11.7095114 9.34682735,11.5370771 9.83568729,11.5053203 L9.83568729,11.5053203 L10,11.5 L14,11.5 L14,3.5 Z'
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

BookOpen.displayName = 'BookOpen'

export default BookOpen
