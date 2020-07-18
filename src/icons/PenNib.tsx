import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const PenNib = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-pen-nib</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-204.000000, -1028.000000)'
              >
                <g
                  id='ph-pen-nib'
                  transform='translate(204.000000, 1028.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M11.4997,0.9999 C11.7758424,0.9999 11.9997,1.22375763 11.9997,1.4999 C11.9997,3.17485529 12.634949,4.74778333 13.7582869,5.94473575 L13.7723674,5.96018176 C13.7825167,5.97193803 13.7920599,5.98410854 13.8009855,5.99664426 L13.7582869,5.94473575 C13.7835909,5.97169792 13.8053266,6.00072326 13.8235124,6.03122951 C13.8305002,6.04297762 13.8372135,6.055442 13.8433777,6.06814388 C13.850704,6.08301643 13.8572586,6.09841376 13.8630042,6.11403387 C13.867586,6.1268007 13.8717781,6.13981598 13.8754332,6.15297615 C13.8796055,6.16768054 13.8829646,6.18239837 13.8856506,6.1972097 C13.8876956,6.20869285 13.8894175,6.22042714 13.8907228,6.23221722 C13.8926116,6.24939272 13.8936045,6.26679222 13.8936948,6.28419022 C13.8938288,6.29613367 13.8934878,6.30784183 13.8927321,6.31954845 C13.8916739,6.33439536 13.890015,6.34945529 13.8876763,6.36442519 C13.8856328,6.3781777 13.8828949,6.39189181 13.8795626,6.40552799 C13.8756625,6.42126099 13.8710129,6.43700717 13.8655779,6.45253284 C13.8635696,6.45824282 13.8614813,6.46384745 13.859286,6.46942825 L13.8534791,6.48369782 C13.8463206,6.50044661 13.8382098,6.5168762 13.8291495,6.53290274 L13.8188274,6.55008571 L8.42482737,15.2630857 L8.41202369,15.2833423 C8.40061761,15.299897 8.38823963,15.3157302 8.37497215,15.3307596 L8.42482737,15.2630857 C8.40086854,15.3017867 8.37294486,15.335745 8.34202825,15.3649601 C8.33161649,15.3745007 8.32046545,15.3840958 8.30890335,15.393192 C8.29676792,15.4031477 8.28441497,15.4119754 8.2717556,15.4201713 C8.26044612,15.427124 8.24839129,15.4342629 8.23602506,15.4408968 C8.22117648,15.4491132 8.20648859,15.4560102 8.19155022,15.4621566 C8.17990381,15.4668447 8.16750224,15.4714413 8.15488018,15.4755494 C8.1402987,15.4802857 8.12555011,15.4843009 8.11067213,15.4876359 C8.09445427,15.4913698 8.07806594,15.494226 8.06142486,15.4962645 C8.04914363,15.4976386 8.03702607,15.4986748 8.02488982,15.4992762 L8,15.5 L8,15.5 L7.96792754,15.4989079 C7.95722479,15.4982386 7.94654033,15.4972308 7.93589267,15.4958843 L8,15.5 C7.96101519,15.5 7.92307246,15.4955383 7.88665458,15.4870978 C7.8704882,15.4834859 7.85411937,15.4788791 7.83798533,15.4734314 C7.82851123,15.4699262 7.81908056,15.4663735 7.80979041,15.4625491 C7.79072915,15.4552103 7.77193272,15.4461733 7.7536733,15.4358992 C7.74793941,15.4319567 7.74250687,15.4287333 7.73714185,15.4254113 C7.71900437,15.4150196 7.70124054,15.402431 7.68422056,15.3885433 C7.66739027,15.3739739 7.65128299,15.358993 7.63621612,15.3430199 C7.63395584,15.3413076 7.63146026,15.3385901 7.62898875,15.3358379 C7.61091152,15.3148483 7.59710843,15.2970159 7.58453828,15.2782867 L7.57488293,15.2635863 L2.17288293,6.56058629 L2.16297695,6.54418268 C2.15456129,6.52939951 2.14695593,6.51427098 2.14016284,6.49886314 L2.17288293,6.56058629 C2.15213305,6.52715678 2.13580426,6.49223239 2.12373662,6.45649653 C2.11978344,6.44468999 2.11623174,6.43262391 2.11314254,6.42046134 C2.10900095,6.4045754 2.10568398,6.38818483 2.10320293,6.37173797 C2.10128267,6.35824684 2.09981817,6.34486085 2.09889217,6.3314416 C2.09778521,6.31665726 2.0974367,6.30192886 2.09773427,6.28724014 C2.09808524,6.27158368 2.09911979,6.25586687 2.10089362,6.24021352 C2.10203934,6.23024396 2.10354435,6.21991245 2.10536837,6.20964091 C2.10810508,6.19387031 2.1115744,6.17850134 2.1157785,6.16328736 C2.1200528,6.148195 2.12502656,6.13304242 2.13071733,6.11814283 C2.13443776,6.10810875 2.13866877,6.09803424 2.14324595,6.08807622 C2.15216761,6.06884083 2.16208839,6.05036417 2.17318751,6.03251278 C2.1768243,6.026705 2.18079561,6.02063097 2.18491342,6.01462517 C2.19647493,5.99759601 2.20926144,5.98115676 2.22314396,5.96547989 C2.22666193,5.96170006 2.23014709,5.95788415 2.23370236,5.95410893 C3.36161888,4.75641453 3.9997,3.17969273 3.9997,1.4999 C3.9997,1.25444011 4.17657516,1.05029163 4.40982437,1.00795567 L4.4997,0.9999 L11.4997,0.9999 Z M11.017,1.999 L4.981,1.999 L4.97264031,2.14086904 C4.83997632,3.70625512 4.22383608,5.16933209 3.21988739,6.35108849 L7.49963281,13.2479 L7.49956465,8.93681592 C6.68386526,8.72648694 6.06934918,8.01412744 6.00548826,7.14920928 L6,7 C6,5.89585763 6.89585763,5 8,5 C9.10414237,5 10,5.89585763 10,7 C10,7.93119136 9.36281328,8.71423834 8.5008794,8.93670137 L8.49963281,13.2389 L12.7711466,6.33970504 C11.7718361,5.1592477 11.1586866,3.69986964 11.0266408,2.13911871 L11.017,1.999 Z M8,6 C7.44814237,6 7,6.44814237 7,7 C7,7.55185763 7.44814237,8 8,8 C8.55185763,8 9,7.55185763 9,7 C9,6.44814237 8.55185763,6 8,6 Z'
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

PenNib.displayName = 'PenNib'

export default PenNib
