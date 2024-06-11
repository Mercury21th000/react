/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/NumberCircleNine";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlpNMTQ2LDc2LjgyQTM2LDM2LDAsMSwwLDEyNy45NCwxNDRxLjk0LDAsMS44OS0uMDZsLTE2LjcsMjhhOCw4LDAsMCwwLDIuNzcsMTEsOCw4LDAsMCwwLDExLTIuNzdMMTU5LjE4LDEyNkEzNi4wNSwzNi4wNSwwLDAsMCwxNDYsNzYuODJaTTE0NS4zMywxMThsMCwwQTIwLDIwLDAsMSwxLDEzOCw5MC42OCwyMCwyMCwwLDAsMSwxNDUuMzEsMTE4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsODAuMjlhMzIsMzIsMCwxLDAtNi4yMyw1OC4xNkwxMTYuNTcsMTc0YTQsNCwwLDAsMCwxLjM4LDUuNDgsMy45MiwzLjkyLDAsMCwwLDIsLjU3LDQsNCwwLDAsMCwzLjQzLTEuOTVMMTU1LjcxLDEyNEEzMiwzMiwwLDAsMCwxNDQsODAuMjlaTTE0OC44LDEyMGwtLjA2LjA5YTIyLjYyLDIyLjYyLDAsMSwxLC4wNi0uMDlaTTEyOCwyOEExMDAsMTAwLDAsMSwwLDIyOCwxMjgsMTAwLjExLDEwMC4xMSwwLDAsMCwxMjgsMjhabTAsMTkyYTkyLDkyLDAsMSwxLDkyLTkyQTkyLjEsOTIuMSwwLDAsMSwxMjgsMjIwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDUsNzguNTVBMzQsMzQsMCwxLDAsMTI3Ljk0LDE0MmEzMy41NiwzMy41NiwwLDAsMCw1LjY3LS40OWwtMTguNzYsMzEuNDJhNiw2LDAsMCwwLDEwLjMsNi4xNkwxNTcuNDUsMTI1QTM0LDM0LDAsMCwwLDE0NSw3OC41NVpNMTQ3LjA2LDExOXYwQTIyLDIyLDAsMSwxLDEzOSw4OSwyMiwyMiwwLDAsMSwxNDcuMDUsMTE5Wk0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWk0xNDgsNzMuMzZhNDAsNDAsMCwxLDAtMjUuMDYsNzQuMzJMMTA5LjcsMTY5Ljg1YTEyLDEyLDAsMSwwLDIwLjYsMTIuM0wxNjIuNjQsMTI4QTQwLDQwLDAsMCwwLDE0OCw3My4zNlpNMTQxLjg2LDExNmwwLDBBMTYsMTYsMCwxLDEsMTM2LDk0LjE0LDE2LDE2LDAsMCwxLDE0MS44NCwxMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDUuMzMsMTE4bDAsMEEyMCwyMCwwLDEsMSwxMzgsOTAuNjgsMjAsMjAsMCwwLDEsMTQ1LjMxLDExOFpNMjMyLDEyOEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhaTTE0Niw3Ni44MkEzNiwzNiwwLDEsMCwxMjcuOTQsMTQ0cS45NCwwLDEuODktLjA2bC0xNi43LDI4YTgsOCwwLDAsMCwyLjc3LDExLDgsOCwwLDAsMCwxMS0yLjc3TDE1OS4xOCwxMjZBMzYuMDUsMzYuMDUsMCwwLDAsMTQ2LDc2LjgyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZaTTE0Niw3Ni44MkEzNiwzNiwwLDEsMCwxMjcuOTQsMTQ0cS45NCwwLDEuODktLjA2bC0xNi43LDI4YTgsOCwwLDAsMCwyLjc3LDExLDgsOCwwLDAsMCwxMS0yLjc3TDE1OS4xOCwxMjZBMzYuMDUsMzYuMDUsMCwwLDAsMTQ2LDc2LjgyWk0xNDUuMzMsMTE4bDAsMEEyMCwyMCwwLDEsMSwxMzgsOTAuNjgsMjAsMjAsMCwwLDEsMTQ1LjMxLDExOFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "NumberCircleNine";
export { I as NumberCircleNine };
