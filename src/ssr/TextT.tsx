/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TextT";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNTZWODhhMTIsMTIsMCwwLDEtMjQsMFY2OEgxNDBWMTg4aDIwYTEyLDEyLDAsMCwxLDAsMjRIOTZhMTIsMTIsMCwwLDEsMC0yNGgyMFY2OEg2OFY4OGExMiwxMiwwLDAsMS0yNCwwVjU2QTEyLDEyLDAsMCwxLDU2LDQ0SDIwMEExMiwxMiwwLDAsMSwyMTIsNTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZWMTg0YTE2LDE2LDAsMCwxLTE2LDE2SDcyYTE2LDE2LDAsMCwxLTE2LTE2VjU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw1NlY4OGE4LDgsMCwwLDEtMTYsMFY2NEgxMzZWMTkyaDI0YTgsOCwwLDAsMSwwLDE2SDk2YTgsOCwwLDAsMSwwLTE2aDI0VjY0SDY0Vjg4YTgsOCwwLDAsMS0xNiwwVjU2YTgsOCwwLDAsMSw4LThIMjAwQTgsOCwwLDAsMSwyMDgsNTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE4NCw5NmE4LDgsMCwwLDEtMTYsMFY4OEgxMzZ2ODhoMTJhOCw4LDAsMCwxLDAsMTZIMTA4YTgsOCwwLDAsMSwwLTE2aDEyVjg4SDg4djhhOCw4LDAsMCwxLTE2LDBWODBhOCw4LDAsMCwxLDgtOGg5NmE4LDgsMCwwLDEsOCw4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsNTZWODhhNiw2LDAsMCwxLTEyLDBWNjJIMTM0VjE5NGgyNmE2LDYsMCwwLDEsMCwxMkg5NmE2LDYsMCwwLDEsMC0xMmgyNlY2Mkg2MlY4OGE2LDYsMCwwLDEtMTIsMFY1NmE2LDYsMCwwLDEsNi02SDIwMEE2LDYsMCwwLDEsMjA2LDU2WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZWODhhOCw4LDAsMCwxLTE2LDBWNjRIMTM2VjE5MmgyNGE4LDgsMCwwLDEsMCwxNkg5NmE4LDgsMCwwLDEsMC0xNmgyNFY2NEg2NFY4OGE4LDgsMCwwLDEtMTYsMFY1NmE4LDgsMCwwLDEsOC04SDIwMEE4LDgsMCwwLDEsMjA4LDU2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNTZWODhhNCw0LDAsMCwxLTgsMFY2MEgxMzJWMTk2aDI4YTQsNCwwLDAsMSwwLDhIOTZhNCw0LDAsMCwxLDAtOGgyOFY2MEg2MFY4OGE0LDQsMCwwLDEtOCwwVjU2YTQsNCwwLDAsMSw0LTRIMjAwQTQsNCwwLDAsMSwyMDQsNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TextT";
export { I as TextT };
