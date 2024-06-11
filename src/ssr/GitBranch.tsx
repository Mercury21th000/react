/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/GitBranch";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNjRhMzYsMzYsMCwxLDAtNDgsMzMuOTRWMTEyYTQsNCwwLDAsMS00LDRIOTZhMjcuOCwyNy44LDAsMCwwLTQsLjI5Vjk3Ljk0YTM2LDM2LDAsMSwwLTI0LDB2NjAuMTJhMzYsMzYsMCwxLDAsMjQsMFYxNDRhNCw0LDAsMCwxLDQtNGg4OGEyOCwyOCwwLDAsMCwyOC0yOFY5Ny45NEEzNi4wNywzNi4wNywwLDAsMCwyMzYsNjRaTTgwLDUyQTEyLDEyLDAsMSwxLDY4LDY0LDEyLDEyLDAsMCwxLDgwLDUyWm0wLDE1MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw4MCwyMDRaTTIwMCw3NmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwyMDAsNzZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRhMjQsMjQsMCwxLDEtMjQtMjRBMjQsMjQsMCwwLDEsMjI0LDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiw2NGEzMiwzMiwwLDEsMC00MCwzMXYxN2E4LDgsMCwwLDEtOCw4SDk2YTIzLjg0LDIzLjg0LDAsMCwwLTgsMS4zOFY5NWEzMiwzMiwwLDEsMC0xNiwwdjY2YTMyLDMyLDAsMSwwLDE2LDBWMTQ0YTgsOCwwLDAsMSw4LThoODhhMjQsMjQsMCwwLDAsMjQtMjRWOTVBMzIuMDYsMzIuMDYsMCwwLDAsMjMyLDY0Wk02NCw2NEExNiwxNiwwLDEsMSw4MCw4MCwxNiwxNiwwLDAsMSw2NCw2NFpNOTYsMTkyYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDk2LDE5MlpNMjAwLDgwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDIwMCw4MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRhMzIsMzIsMCwxLDAtNDAsMzF2MTdhOCw4LDAsMCwxLTgsOEg5NmEyMy44NCwyMy44NCwwLDAsMC04LDEuMzhWOTVhMzIsMzIsMCwxLDAtMTYsMHY2NmEzMiwzMiwwLDEsMCwxNiwwVjE0NGE4LDgsMCwwLDEsOC04aDg4YTI0LDI0LDAsMCwwLDI0LTI0Vjk1QTMyLjA2LDMyLjA2LDAsMCwwLDIzMiw2NFpNNjQsNjRBMTYsMTYsMCwxLDEsODAsODAsMTYsMTYsMCwwLDEsNjQsNjRaTTk2LDE5MmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw5NiwxOTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsNjRhMzAsMzAsMCwxLDAtMzYsMjkuNFYxMTJhMTAsMTAsMCwwLDEtMTAsMTBIOTZhMjEuODQsMjEuODQsMCwwLDAtMTAsMi40MnYtMzFhMzAsMzAsMCwxLDAtMTIsMHY2OS4yYTMwLDMwLDAsMSwwLDEyLDBWMTQ0YTEwLDEwLDAsMCwxLDEwLTEwaDg4YTIyLDIyLDAsMCwwLDIyLTIyVjkzLjRBMzAuMDUsMzAuMDUsMCwwLDAsMjMwLDY0Wk02Miw2NEExOCwxOCwwLDEsMSw4MCw4MiwxOCwxOCwwLDAsMSw2Miw2NFpNOTgsMTkyYTE4LDE4LDAsMSwxLTE4LTE4QTE4LDE4LDAsMCwxLDk4LDE5MlpNMjAwLDgyYTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDIwMCw4MloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRhMzIsMzIsMCwxLDAtNDAsMzF2MTdhOCw4LDAsMCwxLTgsOEg5NmEyMy44NCwyMy44NCwwLDAsMC04LDEuMzhWOTVhMzIsMzIsMCwxLDAtMTYsMHY2NmEzMiwzMiwwLDEsMCwxNiwwVjE0NGE4LDgsMCwwLDEsOC04aDg4YTI0LDI0LDAsMCwwLDI0LTI0Vjk1QTMyLjA2LDMyLjA2LDAsMCwwLDIzMiw2NFpNNjQsNjRBMTYsMTYsMCwxLDEsODAsODAsMTYsMTYsMCwwLDEsNjQsNjRaTTk2LDE5MmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw5NiwxOTJaTTIwMCw4MGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwyMDAsODBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNjRhMjgsMjgsMCwxLDAtMzIsMjcuNzFWMTEyYTEyLDEyLDAsMCwxLTEyLDEySDk2YTE5LjkxLDE5LjkxLDAsMCwwLTEyLDRWOTEuNzFhMjgsMjgsMCwxLDAtOCwwdjcyLjU4YTI4LDI4LDAsMSwwLDgsMFYxNDRhMTIsMTIsMCwwLDEsMTItMTJoODhhMjAsMjAsMCwwLDAsMjAtMjBWOTEuNzFBMjgsMjgsMCwwLDAsMjI4LDY0Wk02MCw2NEEyMCwyMCwwLDEsMSw4MCw4NCwyMCwyMCwwLDAsMSw2MCw2NFptNDAsMTI4YTIwLDIwLDAsMSwxLTIwLTIwQTIwLDIwLDAsMCwxLDEwMCwxOTJaTTIwMCw4NGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwyMDAsODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "GitBranch";
export { I as GitBranch };
