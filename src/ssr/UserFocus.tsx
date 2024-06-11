/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/UserFocus";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDBWNzZhMTIsMTIsMCwwLDEtMjQsMFY1MkgxODBhMTIsMTIsMCwwLDEsMC0yNGgzNkExMiwxMiwwLDAsMSwyMjgsNDBaTTIxNiwxNjhhMTIsMTIsMCwwLDAtMTIsMTJ2MjRIMTgwYTEyLDEyLDAsMCwwLDAsMjRoMzZhMTIsMTIsMCwwLDAsMTItMTJWMTgwQTEyLDEyLDAsMCwwLDIxNiwxNjhaTTc2LDIwNEg1MlYxODBhMTIsMTIsMCwwLDAtMjQsMHYzNmExMiwxMiwwLDAsMCwxMiwxMkg3NmExMiwxMiwwLDAsMCwwLTI0Wk00MCw4OEExMiwxMiwwLDAsMCw1Miw3NlY1Mkg3NmExMiwxMiwwLDAsMCwwLTI0SDQwQTEyLDEyLDAsMCwwLDI4LDQwVjc2QTEyLDEyLDAsMCwwLDQwLDg4Wm0xMzYsOTJhMTIsMTIsMCwwLDEtOS42LTQuNzksNDgsNDgsMCwwLDAtNzYuODIsMCwxMiwxMiwwLDAsMS0xOS4xOC0xNC40Miw3Mi4xLDcyLjEsMCwwLDEsMjMuOTItMjAuNSw0NCw0NCwwLDEsMSw2Ny4zNCwwLDcyLjEsNzIuMSwwLDAsMSwyMy45MiwyMC41QTEyLDEyLDAsMCwxLDE3NiwxODBabS00OC00OGEyMCwyMCwwLDEsMC0yMC0yMEEyMCwyMCwwLDAsMCwxMjgsMTMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTEyYTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDE2MCwxMTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDQwVjc2YTgsOCwwLDAsMS0xNiwwVjQ4SDE4MGE4LDgsMCwwLDEsMC0xNmgzNkE4LDgsMCwwLDEsMjI0LDQwWm0tOCwxMzJhOCw4LDAsMCwwLTgsOHYyOEgxODBhOCw4LDAsMCwwLDAsMTZoMzZhOCw4LDAsMCwwLDgtOFYxODBBOCw4LDAsMCwwLDIxNiwxNzJaTTc2LDIwOEg0OFYxODBhOCw4LDAsMCwwLTE2LDB2MzZhOCw4LDAsMCwwLDgsOEg3NmE4LDgsMCwwLDAsMC0xNlpNNDAsODRhOCw4LDAsMCwwLDgtOFY0OEg3NmE4LDgsMCwwLDAsMC0xNkg0MGE4LDgsMCwwLDAtOCw4Vjc2QTgsOCwwLDAsMCw0MCw4NFptMTM2LDkyYTgsOCwwLDAsMS02LjQxLTMuMTksNTIsNTIsMCwwLDAtODMuMiwwLDgsOCwwLDEsMS0xMi44LTkuNjJBNjcuOTQsNjcuOTQsMCwwLDEsMTAxLDE0MS41MWE0MCw0MCwwLDEsMSw1My45NCwwLDY3Ljk0LDY3Ljk0LDAsMCwxLDI3LjQzLDIxLjY4QTgsOCwwLDAsMSwxNzYsMTc2Wm0tNDgtNDBhMjQsMjQsMCwxLDAtMjQtMjRBMjQsMjQsMCwwLDAsMTI4LDEzNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDBWNzZhOCw4LDAsMCwxLTE2LDBWNDhIMTgwYTgsOCwwLDAsMSwwLTE2aDM2QTgsOCwwLDAsMSwyMjQsNDBabS04LDEzMmE4LDgsMCwwLDAtOCw4djI4SDE4MGE4LDgsMCwwLDAsMCwxNmgzNmE4LDgsMCwwLDAsOC04VjE4MEE4LDgsMCwwLDAsMjE2LDE3MlpNNzYsMjA4SDQ4VjE4MGE4LDgsMCwwLDAtMTYsMHYzNmE4LDgsMCwwLDAsOCw4SDc2YTgsOCwwLDAsMCwwLTE2Wk00MCw4NGE4LDgsMCwwLDAsOC04VjQ4SDc2YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMC04LDhWNzZBOCw4LDAsMCwwLDQwLDg0Wm02MSw1Ny41MUE2Ny45NCw2Ny45NCwwLDAsMCw3My42LDE2My4xOSw4LDgsMCwwLDAsODAsMTc2aDk2YTgsOCwwLDAsMCw2LjQtMTIuODFBNjcuOTQsNjcuOTQsMCwwLDAsMTU1LDE0MS41MWE0MCw0MCwwLDEsMC01My45NCwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNDBWNzZhNiw2LDAsMCwxLTEyLDBWNDZIMTgwYTYsNiwwLDAsMSwwLTEyaDM2QTYsNiwwLDAsMSwyMjIsNDBabS02LDEzNGE2LDYsMCwwLDAtNiw2djMwSDE4MGE2LDYsMCwwLDAsMCwxMmgzNmE2LDYsMCwwLDAsNi02VjE4MEE2LDYsMCwwLDAsMjE2LDE3NFpNNzYsMjEwSDQ2VjE4MGE2LDYsMCwwLDAtMTIsMHYzNmE2LDYsMCwwLDAsNiw2SDc2YTYsNiwwLDAsMCwwLTEyWk00MCw4MmE2LDYsMCwwLDAsNi02VjQ2SDc2YTYsNiwwLDAsMCwwLTEySDQwYTYsNiwwLDAsMC02LDZWNzZBNiw2LDAsMCwwLDQwLDgyWm0xMzYsOTJhNiw2LDAsMCwxLTQuOC0yLjQsNTQsNTQsMCwwLDAtODYuNCwwLDYsNiwwLDEsMS05LjYtNy4yLDY1LjY1LDY1LjY1LDAsMCwxLDI5LjY5LTIyLjI2LDM4LDM4LDAsMSwxLDQ2LjIyLDBBNjUuNjUsNjUuNjUsMCwwLDEsMTgwLjgsMTY0LjQsNiw2LDAsMCwxLDE3NiwxNzRabS00OC0zNmEyNiwyNiwwLDEsMC0yNi0yNkEyNiwyNiwwLDAsMCwxMjgsMTM4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDBWNzZhOCw4LDAsMCwxLTE2LDBWNDhIMTgwYTgsOCwwLDAsMSwwLTE2aDM2QTgsOCwwLDAsMSwyMjQsNDBabS04LDEzMmE4LDgsMCwwLDAtOCw4djI4SDE4MGE4LDgsMCwwLDAsMCwxNmgzNmE4LDgsMCwwLDAsOC04VjE4MEE4LDgsMCwwLDAsMjE2LDE3MlpNNzYsMjA4SDQ4VjE4MGE4LDgsMCwwLDAtMTYsMHYzNmE4LDgsMCwwLDAsOCw4SDc2YTgsOCwwLDAsMCwwLTE2Wk00MCw4NGE4LDgsMCwwLDAsOC04VjQ4SDc2YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMC04LDhWNzZBOCw4LDAsMCwwLDQwLDg0Wm0xMzYsOTJhOCw4LDAsMCwxLTYuNDEtMy4xOSw1Miw1MiwwLDAsMC04My4yLDAsOCw4LDAsMSwxLTEyLjgtOS42MkE2Ny45NCw2Ny45NCwwLDAsMSwxMDEsMTQxLjUxYTQwLDQwLDAsMSwxLDUzLjk0LDAsNjcuOTQsNjcuOTQsMCwwLDEsMjcuNDMsMjEuNjhBOCw4LDAsMCwxLDE3NiwxNzZabS00OC00MGEyNCwyNCwwLDEsMC0yNC0yNEEyNCwyNCwwLDAsMCwxMjgsMTM2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDBWNzZhNCw0LDAsMCwxLTgsMFY0NEgxODBhNCw0LDAsMCwxLDAtOGgzNkE0LDQsMCwwLDEsMjIwLDQwWm0tNCwxMzZhNCw0LDAsMCwwLTQsNHYzMkgxODBhNCw0LDAsMCwwLDAsOGgzNmE0LDQsMCwwLDAsNC00VjE4MEE0LDQsMCwwLDAsMjE2LDE3NlpNNzYsMjEySDQ0VjE4MGE0LDQsMCwwLDAtOCwwdjM2YTQsNCwwLDAsMCw0LDRINzZhNCw0LDAsMCwwLDAtOFpNNDAsODBhNCw0LDAsMCwwLDQtNFY0NEg3NmE0LDQsMCwwLDAsMC04SDQwYTQsNCwwLDAsMC00LDRWNzZBNCw0LDAsMCwwLDQwLDgwWm0xMzYsOTJhNCw0LDAsMCwxLTMuMi0xLjYsNTYsNTYsMCwwLDAtODkuNiwwLDQsNCwwLDEsMS02LjQtNC44LDYzLjY1LDYzLjY1LDAsMCwxLDMyLjUtMjIuODUsMzYsMzYsMCwxLDEsMzcuNCwwLDYzLjY1LDYzLjY1LDAsMCwxLDMyLjUsMjIuODVBNCw0LDAsMCwxLDE3NiwxNzJabS00OC0zMmEyOCwyOCwwLDEsMC0yOC0yOEEyOCwyOCwwLDAsMCwxMjgsMTQwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "UserFocus";
export { I as UserFocus };
