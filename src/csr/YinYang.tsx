/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/YinYang";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk00MCwxMjhhODguMSw4OC4xLDAsMCwxLDg4LTg4LDQwLDQwLDAsMCwxLDAsODBBNTYsNTYsMCwwLDAsNzcuMzksMjAwLDg4LDg4LDAsMCwxLDQwLDEyOFptODgsODhhNDAsNDAsMCwwLDEsMC04MCw1Niw1NiwwLDAsMCw1MC42MS03OS45NUE4OCw4OCwwLDAsMSwxMjgsMjE2Wm0xMi00MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTc2Wk0xMTYsODBhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTE2LDgwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wk0zNiwxMjhhOTIuMSw5Mi4xLDAsMCwxLDkyLTkyLDQ0LDQ0LDAsMCwxLDAsODgsNTIsNTIsMCwwLDAtMzcuNDQsODhBOTIuMTQsOTIuMTQsMCwwLDEsMzYsMTI4Wm05Miw5MmE0NCw0NCwwLDAsMSwwLTg4LDUyLDUyLDAsMCwwLDM3LjQ0LTg4QTkyLDkyLDAsMCwxLDEyOCwyMjBabTgtNDRhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTM2LDE3NlpNMTIwLDgwYTgsOCwwLDEsMSw4LDhBOCw4LDAsMCwxLDEyMCw4MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wk0zOCwxMjhhOTAuMSw5MC4xLDAsMCwxLDkwLTkwLDQyLDQyLDAsMCwxLDAsODQsNTQsNTQsMCwwLDAtNDQuODgsODRBOTAuMDYsOTAuMDYsMCwwLDEsMzgsMTI4Wm05MCw5MGE0Miw0MiwwLDAsMSwwLTg0LDU0LDU0LDAsMCwwLDQ0Ljg4LTg0QTkwLDkwLDAsMCwxLDEyOCwyMThabTEwLTQyYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwxNzZaTTExOCw4MGExMCwxMCwwLDEsMSwxMCwxMEExMCwxMCwwLDAsMSwxMTgsODBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWk00NCwxMjhhODQuMDksODQuMDksMCwwLDEsODQtODQsMzYsMzYsMCwwLDEsMCw3Miw2MCw2MCwwLDAsMC01OC44MSw3MS45QTgzLjczLDgzLjczLDAsMCwxLDQ0LDEyOFptODQsODRhMzYsMzYsMCwwLDEsMC03Miw2MCw2MCwwLDAsMCw1OC44MS03MS45QTgzLjk0LDgzLjk0LDAsMCwxLDEyOCwyMTJabTE2LTM2YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxNzZaTTExMiw4MGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSwxMTIsODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsODBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDgwWm05Miw0OEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS05Miw0OGExMiwxMiwwLDEsMC0xMiwxMkExMiwxMiwwLDAsMCwxNDAsMTc2Wm0zMi05MmE0NC4wNSw0NC4wNSwwLDAsMC00NC00NEE4OCw4OCwwLDAsMCw4MS4wOSwyMDIuNDIsNTIsNTIsMCwwLDEsMTI4LDEyOCw0NC4wNSw0NC4wNSwwLDAsMCwxNzIsODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMCwxLTk2LDk2LDQ4LDQ4LDAsMCwxLDAtOTYsNDgsNDgsMCwwLDAsMC05NkE5Niw5NiwwLDAsMSwyMjQsMTI4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRaTTQwLDEyOGE4OC4xLDg4LjEsMCwwLDEsODgtODgsNDAsNDAsMCwwLDEsMCw4MEE1Niw1NiwwLDAsMCw3Ny4zOSwyMDAsODgsODgsMCwwLDEsNDAsMTI4Wm04OCw4OGE0MCw0MCwwLDAsMSwwLTgwLDU2LDU2LDAsMCwwLDUwLjYxLTc5Ljk1QTg4LDg4LDAsMCwxLDEyOCwyMTZabTEyLTQwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxNzZaTTExNiw4MGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxMTYsODBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "YinYang";
export { I as YinYang };
