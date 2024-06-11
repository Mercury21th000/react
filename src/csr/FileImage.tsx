/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileImage";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTAuNjYsMTQ3LjU2YTgsOCwwLDAsMC0xMy4zMiwwTDc2LjQ5LDE3OC44NWwtOS43Ni0xNS4xOGE4LDgsMCwwLDAtMTMuNDYsMGwtMzYsNTZBOCw4LDAsMCwwLDI0LDIzMkgxNTJhOCw4LDAsMCwwLDYuNjYtMTIuNDRaTTM4LjY1LDIxNiw2MCwxODIuNzlsOS42MywxNWE4LDgsMCwwLDAsMTMuMzkuMTFsMjEtMzEuNDdMMTM3LjA1LDIxNlptMTc1LTEzMy42Ni01Ni01NkE4LDgsMCwwLDAsMTUyLDI0SDU2QTE2LDE2LDAsMCwwLDQwLDQwdjg4YTgsOCwwLDAsMCwxNiwwVjQwaDg4Vjg4YTgsOCwwLDAsMCw4LDhoNDhWMjE2aC04YTgsOCwwLDAsMCwwLDE2aDhhMTYsMTYsMCwwLDAsMTYtMTZWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDcuMzMsMTQ5Ljc4YTQsNCwwLDAsMC02LjY2LDBMNzYuNDIsMTg2LjE1LDYzLjM2LDE2NS44NGE0LDQsMCwwLDAtNi43MiwwbC0zNiw1NkE0LDQsMCwwLDAsMjQsMjI4SDE1MmE0LDQsMCwwLDAsMy4zMy02LjIyWk0zMS4zMywyMjAsNjAsMTc1LjRsMTMsMjAuMjJhNCw0LDAsMCwwLDMuMzMsMS44MywzLjkzLDMuOTMsMCwwLDAsMy4zNi0xLjc4TDEwNCwxNTkuMjEsMTQ0LjUzLDIyMFpNMjEwLjgzLDg1LjE3bC01Ni01NkE0LDQsMCwwLDAsMTUyLDI4SDU2QTEyLDEyLDAsMCwwLDQ0LDQwdjg4YTQsNCwwLDAsMCw4LDBWNDBhNCw0LDAsMCwxLDQtNGg5MlY4OGE0LDQsMCwwLDAsNCw0aDUyVjIxNmE0LDQsMCwwLDEtNCw0aC04YTQsNCwwLDAsMCwwLDhoOGExMiwxMiwwLDAsMCwxMi0xMlY4OEE0LDQsMCwwLDAsMjEwLjgzLDg1LjE3Wk0xNTYsNDEuNjUsMTk4LjM0LDg0SDE1NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDksMTQ4LjY3YTYsNiwwLDAsMC0xMCwwTDc2LjQ2LDE4Mi41LDY1LjA1LDE2NC43NmE2LDYsMCwwLDAtMTAuMSwwbC0zNiw1NkE2LDYsMCwwLDAsMjQsMjMwSDE1MmE2LDYsMCwwLDAsNS05LjMzWk0zNSwyMThsMjUtMzguOSwxMS4zMiwxNy42YTYsNiwwLDAsMCwxMCwuMDhsMjIuNjQtMzRMMTQwLjc5LDIxOFpNMjEyLjI0LDgzLjc2bC01Ni01NkE2LDYsMCwwLDAsMTUyLDI2SDU2QTE0LDE0LDAsMCwwLDQyLDQwdjg4YTYsNiwwLDAsMCwxMiwwVjQwYTIsMiwwLDAsMSwyLTJoOTBWODhhNiw2LDAsMCwwLDYsNmg1MFYyMTZhMiwyLDAsMCwxLTIsMmgtOGE2LDYsMCwwLDAsMCwxMmg4YTE0LDE0LDAsMCwwLDE0LTE0Vjg4QTYsNiwwLDAsMCwyMTIuMjQsODMuNzZaTTE1OCw0Ni40OCwxOTMuNTIsODJIMTU4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTQsMTQ1LjM0YTEyLDEyLDAsMCwwLTIwLDBMNzksMTY3LjgyLDcyLjMsMTU3LjczYTEyLDEyLDAsMCwwLTIwLjA3LjE3TDEzLjkxLDIxNy41MUExMiwxMiwwLDAsMCwyNCwyMzZIMTUyYTEyLDEyLDAsMCwwLDEwLTE4LjY2Wk00NiwyMTIsNjIuNSwxODYuM2w2LjU1LDkuODFhMTIsMTIsMCwwLDAsMjAsMGwxNS0yMi40OEwxMjkuNTgsMjEyWk0yMTYuNDksNzkuNTFsLTU2LTU2QTEyLDEyLDAsMCwwLDE1MiwyMEg1NkEyMCwyMCwwLDAsMCwzNiw0MHY4NGExMiwxMiwwLDAsMCwyNCwwVjQ0aDc2VjkyYTEyLDEyLDAsMCwwLDEyLDEyaDQ4VjIxMmExMiwxMiwwLDAsMCwwLDI0aDRhMjAsMjAsMCwwLDAsMjAtMjBWODhBMTIsMTIsMCwwLDAsMjE2LjQ5LDc5LjUxWk0xNjAsNTdsMjMsMjNIMTYwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTguNjYsMjE5LjU2QTgsOCwwLDAsMSwxNTIsMjMySDI0YTgsOCwwLDAsMS02LjczLTEyLjMzbDM2LTU2YTgsOCwwLDAsMSwxMy40NiwwbDkuNzYsMTUuMTgsMjAuODUtMzEuMjlhOCw4LDAsMCwxLDEzLjMyLDBaTTIxNiw4OFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZoLThhOCw4LDAsMCwxLDAtMTZoOFY5NkgxNTJhOCw4LDAsMCwxLTgtOFY0MEg1NnY4OGE4LDgsMCwwLDEtMTYsMFY0MEExNiwxNiwwLDAsMSw1NiwyNGg5NmE4LDgsMCwwLDEsNS42NiwyLjM0bDU2LDU2QTgsOCwwLDAsMSwyMTYsODhabS01Ni04aDI4LjY5TDE2MCw1MS4zMVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTUybDQ4LDcySDI0bDM2LTU2LDE2LjM2LDI1LjQ1Wk0xNTIsMzJWODhoNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTEwLjY2LDE0Ny41NmE4LDgsMCwwLDAtMTMuMzIsMEw3Ni40OSwxNzguODVsLTkuNzYtMTUuMThhOCw4LDAsMCwwLTEzLjQ2LDBsLTM2LDU2QTgsOCwwLDAsMCwyNCwyMzJIMTUyYTgsOCwwLDAsMCw2LjY2LTEyLjQ0Wk0zOC42NSwyMTYsNjAsMTgyLjc5bDkuNjMsMTVhOCw4LDAsMCwwLDEzLjM5LjExbDIxLTMxLjQ3TDEzNy4wNSwyMTZabTE3NS0xMzMuNjYtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MHY4OGE4LDgsMCwwLDAsMTYsMFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNmgtOGE4LDgsMCwwLDAsMCwxNmg4YTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE2MCw1MS4zMSwxODguNjksODBIMTYwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileImage";
export { I as FileImage };
