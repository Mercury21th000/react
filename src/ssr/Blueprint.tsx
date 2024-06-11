/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Blueprint";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhINzZWNDBBMTIsMTIsMCwwLDAsNjQsMjhINDhBMzYsMzYsMCwwLDAsMTIsNjRWMTc2YTM2LDM2LDAsMCwwLDM2LDM2SDIzMmExMiwxMiwwLDAsMCwxMi0xMlY2MEExMiwxMiwwLDAsMCwyMzIsNDhaTTM2LDY0QTEyLDEyLDAsMCwxLDQ4LDUyaDR2ODhINDhhMzUuNTksMzUuNTksMCwwLDAtMTIsMi4wNlpNMjIwLDE4OEg0OGExMiwxMiwwLDAsMSwwLTI0SDY0YTEyLDEyLDAsMCwwLDEyLTEyVjcySDIyMFpNMTA0LDEzNmExMiwxMiwwLDAsMCwwLDI0aDEydjRhMTIsMTIsMCwwLDAsMjQsMHYtNGgxNnY0YTEyLDEyLDAsMCwwLDI0LDB2LTRoMTJhMTIsMTIsMCwwLDAsMC0yNEgxODBWMTI0aDEyYTEyLDEyLDAsMCwwLDAtMjRIMTgwVjk2YTEyLDEyLDAsMCwwLTI0LDB2NEgxNDBWOTZhMTIsMTIsMCwwLDAtMjQsMHY0SDEwNGExMiwxMiwwLDAsMCwwLDI0aDEydjEyWm0zNi0xMmgxNnYxMkgxNDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWMjAwSDQ4YTI0LDI0LDAsMCwxLDAtNDhINjRWNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDU2SDcyVjQwYTgsOCwwLDAsMC04LThINDhBMzIsMzIsMCwwLDAsMTYsNjRWMTc2YTMyLDMyLDAsMCwwLDMyLDMySDIzMmE4LDgsMCwwLDAsOC04VjY0QTgsOCwwLDAsMCwyMzIsNTZaTTMyLDY0QTE2LDE2LDAsMCwxLDQ4LDQ4aDh2OTZINDhhMzEuODIsMzEuODIsMCwwLDAtMTYsNC4yOVpNMjI0LDE5Mkg0OGExNiwxNiwwLDAsMSwwLTMySDY0YTgsOCwwLDAsMCw4LThWNzJIMjI0Wk0xMDQsMTM2YTgsOCwwLDAsMCwwLDE2aDE2djhhOCw4LDAsMCwwLDE2LDB2LThoMjR2OGE4LDgsMCwwLDAsMTYsMHYtOGgxNmE4LDgsMCwwLDAsMC0xNkgxNzZWMTIwaDE2YTgsOCwwLDAsMCwwLTE2SDE3NlY5NmE4LDgsMCwwLDAtMTYsMHY4SDEzNlY5NmE4LDgsMCwwLDAtMTYsMHY4SDEwNGE4LDgsMCwwLDAsMCwxNmgxNnYxNlptMzItMTZoMjR2MTZIMTM2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTIwaDI0djE2SDEzNlpNMjQwLDY0VjIwMGE4LDgsMCwwLDEtOCw4SDQ4YTMyLDMyLDAsMCwxLTMyLTMyVjY0QTMyLDMyLDAsMCwxLDQ4LDMySDY0YTgsOCwwLDAsMSw4LDhWNTZIMjMyQTgsOCwwLDAsMSwyNDAsNjRaTTU2LDQ4SDQ4QTE2LDE2LDAsMCwwLDMyLDY0djg0LjI5QTMxLjgyLDMxLjgyLDAsMCwxLDQ4LDE0NGg4Wm0xMjAsODhWMTIwaDE2YTgsOCwwLDAsMCwwLTE2SDE3NlY5NmE4LDgsMCwwLDAtMTYsMHY4SDEzNlY5NmE4LDgsMCwwLDAtMTYsMHY4SDEwNGE4LDgsMCwwLDAsMCwxNmgxNnYxNkgxMDRhOCw4LDAsMCwwLDAsMTZoMTZ2OGE4LDgsMCwwLDAsMTYsMHYtOGgyNHY4YTgsOCwwLDAsMCwxNiwwdi04aDE2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNThINzBWNDBhNiw2LDAsMCwwLTYtNkg0OEEzMCwzMCwwLDAsMCwxOCw2NFYxNzZhMzAsMzAsMCwwLDAsMzAsMzBIMjMyYTYsNiwwLDAsMCw2LTZWNjRBNiw2LDAsMCwwLDIzMiw1OFpNMzAsNjRBMTgsMTgsMCwwLDEsNDgsNDZINThWMTQ2SDQ4YTI5Ljg3LDI5Ljg3LDAsMCwwLTE4LDZaTTIyNiwxOTRINDhhMTgsMTgsMCwwLDEsMC0zNkg2NGE2LDYsMCwwLDAsNi02VjcwSDIyNlpNMTA0LDEzOGE2LDYsMCwwLDAsMCwxMmgxOHYxMGE2LDYsMCwwLDAsMTIsMFYxNTBoMjh2MTBhNiw2LDAsMCwwLDEyLDBWMTUwaDE4YTYsNiwwLDAsMCwwLTEySDE3NFYxMThoMThhNiw2LDAsMCwwLDAtMTJIMTc0Vjk2YTYsNiwwLDAsMC0xMiwwdjEwSDEzNFY5NmE2LDYsMCwwLDAtMTIsMHYxMEgxMDRhNiw2LDAsMCwwLDAsMTJoMTh2MjBabTMwLTIwaDI4djIwSDEzNFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZINzJWNDBhOCw4LDAsMCwwLTgtOEg0OEEzMiwzMiwwLDAsMCwxNiw2NFYxNzZhMzIsMzIsMCwwLDAsMzIsMzJIMjMyYTgsOCwwLDAsMCw4LThWNjRBOCw4LDAsMCwwLDIzMiw1NlpNMzIsNjRBMTYsMTYsMCwwLDEsNDgsNDhoOHY5Nkg0OGEzMS44MiwzMS44MiwwLDAsMC0xNiw0LjI5Wk0yMjQsMTkySDQ4YTE2LDE2LDAsMCwxLDAtMzJINjRhOCw4LDAsMCwwLDgtOFY3MkgyMjRaTTEwNCwxMzZhOCw4LDAsMCwwLDAsMTZoMTZ2OGE4LDgsMCwwLDAsMTYsMHYtOGgyNHY4YTgsOCwwLDAsMCwxNiwwdi04aDE2YTgsOCwwLDAsMCwwLTE2SDE3NlYxMjBoMTZhOCw4LDAsMCwwLDAtMTZIMTc2Vjk2YTgsOCwwLDAsMC0xNiwwdjhIMTM2Vjk2YTgsOCwwLDAsMC0xNiwwdjhIMTA0YTgsOCwwLDAsMCwwLDE2aDE2djE2Wm0zMi0xNmgyNHYxNkgxMzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjBINjhWNDBhNCw0LDAsMCwwLTQtNEg0OEEyOCwyOCwwLDAsMCwyMCw2NFYxNzZhMjgsMjgsMCwwLDAsMjgsMjhIMjMyYTQsNCwwLDAsMCw0LTRWNjRBNCw0LDAsMCwwLDIzMiw2MFpNMjgsNjRBMjAsMjAsMCwwLDEsNDgsNDRINjBWMTQ4SDQ4YTI3Ljk0LDI3Ljk0LDAsMCwwLTIwLDguNDJaTTIyOCwxOTZINDhhMjAsMjAsMCwwLDEsMC00MEg2NGE0LDQsMCwwLDAsNC00VjY4SDIyOFpNMTA0LDE0MGE0LDQsMCwwLDAsMCw4aDIwdjEyYTQsNCwwLDAsMCw4LDBWMTQ4aDMydjEyYTQsNCwwLDAsMCw4LDBWMTQ4aDIwYTQsNCwwLDAsMCwwLThIMTcyVjExNmgyMGE0LDQsMCwwLDAsMC04SDE3MlY5NmE0LDQsMCwwLDAtOCwwdjEySDEzMlY5NmE0LDQsMCwwLDAtOCwwdjEySDEwNGE0LDQsMCwwLDAsMCw4aDIwdjI0Wm0yOC0yNGgzMnYyNEgxMzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Blueprint";
export { I as Blueprint };
