/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/AddressBook";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04My4xOSwxNzQuNGE4LDgsMCwwLDAsMTEuMjEtMS42LDUyLDUyLDAsMCwxLDgzLjIsMCw4LDgsMCwxLDAsMTIuOC05LjZBNjcuODgsNjcuODgsMCwwLDAsMTYzLDE0MS41MWE0MCw0MCwwLDEsMC01My45NCwwQTY3Ljg4LDY3Ljg4LDAsMCwwLDgxLjYsMTYzLjIsOCw4LDAsMCwwLDgzLjE5LDE3NC40Wk0xMTIsMTEyYTI0LDI0LDAsMSwxLDI0LDI0QTI0LDI0LDAsMCwxLDExMiwxMTJabTk2LTg4SDY0QTE2LDE2LDAsMCwwLDQ4LDQwVjY0SDMyYTgsOCwwLDAsMCwwLDE2SDQ4djQwSDMyYTgsOCwwLDAsMCwwLDE2SDQ4djQwSDMyYTgsOCwwLDAsMCwwLDE2SDQ4djI0YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDgsMjRabTAsMTkySDY0VjQwSDIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTQuNywxNDIuNzVhMzYsMzYsMCwxLDAtMzcuNCwwQTYzLjYxLDYzLjYxLDAsMCwwLDg0LjgsMTY1LjZhNCw0LDAsMCwwLDYuNCw0LjgsNTYsNTYsMCwwLDEsODkuNiwwLDQsNCwwLDAsMCw2LjQtNC44QTYzLjY1LDYzLjY1LDAsMCwwLDE1NC43LDE0Mi43NVpNMTA4LDExMmEyOCwyOCwwLDEsMSwyOCwyOEEyOCwyOCwwLDAsMSwxMDgsMTEyWk0yMDgsMjhINjRBMTIsMTIsMCwwLDAsNTIsNDBWNjhIMzJhNCw0LDAsMCwwLDAsOEg1MnY0OEgzMmE0LDQsMCwwLDAsMCw4SDUydjQ4SDMyYTQsNCwwLDAsMCwwLDhINTJ2MjhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjQwQTEyLDEyLDAsMCwwLDIwOCwyOFptNCwxODhhNCw0LDAsMCwxLTQsNEg2NGE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTkuMTEsMTQyLjEzYTM4LDM4LDAsMSwwLTQ2LjIyLDBBNjUuNzUsNjUuNzUsMCwwLDAsODMuMiwxNjQuNGE2LDYsMCwwLDAsOS42LDcuMiw1NCw1NCwwLDAsMSw4Ni40LDAsNiw2LDAsMCwwLDkuNi03LjJBNjUuNzUsNjUuNzUsMCwwLDAsMTU5LjExLDE0Mi4xM1pNMTEwLDExMmEyNiwyNiwwLDEsMSwyNiwyNkEyNiwyNiwwLDAsMSwxMTAsMTEyWm05OC04Nkg2NEExNCwxNCwwLDAsMCw1MCw0MFY2NkgzMmE2LDYsMCwwLDAsMCwxMkg1MHY0NEgzMmE2LDYsMCwwLDAsMCwxMkg1MHY0NEgzMmE2LDYsMCwwLDAsMCwxMkg1MHYyNmExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWNDBBMTQsMTQsMCwwLDAsMjA4LDI2Wm0yLDE5MGEyLDIsMCwwLDEtMiwySDY0YTIsMiwwLDAsMS0yLTJWNDBhMiwyLDAsMCwxLDItMkgyMDhhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjBINjRBMjAsMjAsMCwwLDAsNDQsNDBWNjBIMzJhMTIsMTIsMCwwLDAsMCwyNEg0NHYzMkgzMmExMiwxMiwwLDAsMCwwLDI0SDQ0djMySDMyYTEyLDEyLDAsMCwwLDAsMjRINDR2MjBhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjQwQTIwLDIwLDAsMCwwLDIwOCwyMFptLTQsMTkySDY4VjQ0SDIwNFpNMTAwLjgsMTcxLjM3YTQ4LDQ4LDAsMCwxLDcwLjQsMCwxMiwxMiwwLDAsMCwxNy42LTE2LjMyLDcyLDcyLDAsMCwwLTE5LjIxLTE0LjY4LDQ0LDQ0LDAsMSwwLTY3LjE5LDAsNzIuMTIsNzIuMTIsMCwwLDAtMTkuMiwxNC42OCwxMiwxMiwwLDAsMCwxNy42LDE2LjMyWk0xMTYsMTEyYTIwLDIwLDAsMSwxLDIwLDIwQTIwLDIwLDAsMCwxLDExNiwxMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTEyYTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDE2MCwxMTJabTY0LTcyVjIxNmExNiwxNiwwLDAsMS0xNiwxNkg2NGExNiwxNiwwLDAsMS0xNi0xNlYxOTJIMzJhOCw4LDAsMCwxLDAtMTZINDhWMTM2SDMyYTgsOCwwLDAsMSwwLTE2SDQ4VjgwSDMyYTgsOCwwLDAsMSwwLTE2SDQ4VjQwQTE2LDE2LDAsMCwxLDY0LDI0SDIwOEExNiwxNiwwLDAsMSwyMjQsNDBaTTE5MC40LDE2My4yQTY3Ljg4LDY3Ljg4LDAsMCwwLDE2MywxNDEuNTFhNDAsNDAsMCwxLDAtNTMuOTQsMEE2Ny44OCw2Ny44OCwwLDAsMCw4MS42LDE2My4yYTgsOCwwLDEsMCwxMi44LDkuNiw1Miw1MiwwLDAsMSw4My4yLDAsOCw4LDAsMSwwLDEyLjgtOS42WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINjRhOCw4LDAsMCwwLTgsOFYyMTZhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0MEE4LDgsMCwwLDAsMjA4LDMyWk0xMzYsMTQ0YTMyLDMyLDAsMSwxLDMyLTMyQTMyLDMyLDAsMCwxLDEzNiwxNDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNODMuMTksMTc0LjRhOCw4LDAsMCwwLDExLjIxLTEuNiw1Miw1MiwwLDAsMSw4My4yLDAsOCw4LDAsMSwwLDEyLjgtOS42QTY3Ljg4LDY3Ljg4LDAsMCwwLDE2MywxNDEuNTFhNDAsNDAsMCwxLDAtNTMuOTQsMEE2Ny44OCw2Ny44OCwwLDAsMCw4MS42LDE2My4yLDgsOCwwLDAsMCw4My4xOSwxNzQuNFpNMTEyLDExMmEyNCwyNCwwLDEsMSwyNCwyNEEyNCwyNCwwLDAsMSwxMTIsMTEyWm05Ni04OEg2NEExNiwxNiwwLDAsMCw0OCw0MFY2NEgzMmE4LDgsMCwwLDAsMCwxNkg0OHY0MEgzMmE4LDgsMCwwLDAsMCwxNkg0OHY0MEgzMmE4LDgsMCwwLDAsMCwxNkg0OHYyNGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDBBMTYsMTYsMCwwLDAsMjA4LDI0Wm0wLDE5Mkg2NFY0MEgyMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "AddressBook";
export { I as AddressBook };
