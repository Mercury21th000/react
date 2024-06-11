/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Balloon";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTJhOTIuMSw5Mi4xLDAsMCwwLTkyLDkyYzAsMjQuNTMsOS41NSw1MC4xMywyNi4xOSw3MC4yMiwxMCwxMiwyMS41NiwyMS4wNywzNC4wNSwyNi43Nkw4NSwyMjcuMjdBMTIsMTIsMCwwLDAsOTYsMjQ0aDY0YTEyLDEyLDAsMCwwLDExLTE2LjczTDE1OS43NiwyMDFjMTIuNDktNS42OSwyNC4wOC0xNC43MywzNC4wNS0yNi43NkMyMTAuNDUsMTU0LjEzLDIyMCwxMjguNTMsMjIwLDEwNEE5Mi4xLDkyLjEsMCwwLDAsMTI4LDEyWm0xMy44LDIwOEgxMTQuMmw1LjM1LTEyLjQ5YTczLjEsNzMuMSwwLDAsMCwxNi45LDBabTMzLjUzLTYxLjA5QzE2MS45MywxNzUuMDksMTQ1LjEyLDE4NCwxMjgsMTg0cy0zMy45My04LjkxLTQ3LjMzLTI1LjA5QzY3LjczLDE0My4yOSw2MCwxMjIuNzYsNjAsMTA0YTY4LDY4LDAsMCwxLDEzNiwwQzE5NiwxMjIuNzYsMTg4LjI3LDE0My4yOSwxNzUuMzMsMTU4LjkxWm0tNi4zNC00N3EtLjYuMDYtMS4yLjA2YTEyLDEyLDAsMCwxLTExLjkzLTEwLjgxLDI4LDI4LDAsMCwwLTE5LjQ3LTIzLjkxLDEyLDEyLDAsMSwxLDcuMjItMjIuODksNTEuOTQsNTEuOTQsMCwwLDEsMzYuMTMsNDQuNDJBMTIsMTIsMCwwLDEsMTY5LDExMS45NFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzcuODksMTk5LjEzaDBMMTUyLDIzMkgxMDRsMTQuMDktMzIuODdoMEM3OC41OSwxOTIuMTgsNDgsMTQ0LjgzLDQ4LDEwNGE4MCw4MCwwLDAsMSwxNjAsMEMyMDgsMTQ0LjgzLDE3Ny40MSwxOTIuMTgsMTM3Ljg5LDE5OS4xM1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsMTZhODguMSw4OC4xLDAsMCwwLTg4LDg4YzAsMjMuNDMsOS40LDQ5LjQyLDI1LjEzLDY5LjUsMTIuMDgsMTUuNDEsMjYuNSwyNiw0MS45MSwzMS4wOUw5Ni42NSwyMjguODVBOCw4LDAsMCwwLDEwNCwyNDBoNDhhOCw4LDAsMCwwLDcuMzUtMTEuMTVMMTQ5LDIwNC41OWMxNS40LTUuMDcsMjkuODMtMTUuNjgsNDEuOTEtMzEuMDlDMjA2LjYsMTUzLjQyLDIxNiwxMjcuNDMsMjE2LDEwNEE4OC4xLDg4LjEsMCwwLDAsMTI4LDE2Wm0xMS44NywyMDhIMTE2LjEzbDYuOTQtMTYuMTljMS42NC4xMiwzLjI4LjE5LDQuOTMuMTlzMy4yOS0uMDcsNC45My0uMTlabTM4LjQtNjAuMzdDMTYzLjk0LDE4MS45MywxNDYuMDksMTkyLDEyOCwxOTJzLTM1Ljk0LTEwLjA3LTUwLjI3LTI4LjM3QzY0LjEyLDE0Ni4yNyw1NiwxMjQsNTYsMTA0YTcyLDcyLDAsMCwxLDE0NCwwQzIwMCwxMjQsMTkxLjg4LDE0Ni4yNywxNzguMjcsMTYzLjYzWm0tMS01OS43NEE4LjUyLDguNTIsMCwwLDEsMTc2LDEwNGE4LDgsMCwwLDEtNy44OC02LjY4LDQxLjI5LDQxLjI5LDAsMCwwLTMzLjQzLTMzLjQzLDgsOCwwLDEsMSwyLjY0LTE1Ljc4LDU3LjUsNTcuNSwwLDAsMSw0Ni41Nyw0Ni41N0E4LDgsMCwwLDEsMTc3LjMyLDEwMy44OVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZhODguMSw4OC4xLDAsMCwwLTg4LDg4YzAsMjMuNDMsOS40LDQ5LjQyLDI1LjEzLDY5LjUsMTIuMDgsMTUuNDEsMjYuNSwyNiw0MS45MSwzMS4wOUw5Ni42NSwyMjguODVBOCw4LDAsMCwwLDEwNCwyNDBoNDhhOCw4LDAsMCwwLDcuMzUtMTEuMTVMMTQ5LDIwNC41OWMxNS40LTUuMDcsMjkuODMtMTUuNjgsNDEuOTEtMzEuMDlDMjA2LjYsMTUzLjQyLDIxNiwxMjcuNDMsMjE2LDEwNEE4OC4xLDg4LjEsMCwwLDAsMTI4LDE2Wm00OS4zMiw4Ny44OUE4LjUyLDguNTIsMCwwLDEsMTc2LDEwNGE4LDgsMCwwLDEtNy44OC02LjY4LDQxLjI5LDQxLjI5LDAsMCwwLTMzLjQzLTMzLjQzLDgsOCwwLDEsMSwyLjY0LTE1Ljc4LDU3LjUsNTcuNSwwLDAsMSw0Ni41Nyw0Ni41N0E4LDgsMCwwLDEsMTc3LjMyLDEwMy44OVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMThhODYuMSw4Ni4xLDAsMCwwLTg2LDg2YzAsMjMsOS4yNCw0OC41MiwyNC43MSw2OC4yNywxMi4zNywxNS43OSwyNy4yMywyNi40Miw0My4wNSwzMS4wN2wtMTEuMjcsMjYuM0E2LDYsMCwwLDAsMTA0LDIzOGg0OGE2LDYsMCwwLDAsNS41MS04LjM2bC0xMS4yNy0yNi4zYzE1LjgyLTQuNjUsMzAuNjgtMTUuMjgsNDMtMzEuMDdDMjA0Ljc2LDE1Mi41MiwyMTQsMTI3LDIxNCwxMDRBODYuMSw4Ni4xLDAsMCwwLDEyOCwxOFpNMTEyLjE3LDIwNGwuNTguMTRhMi4wNSwyLjA1LDAsMCwxLS41OC0uMTRabTMwLjczLDIySDExMy4xbDguNy0yMC4zMWE2Mi4xNSw2Mi4xNSwwLDAsMCwxMi40LDBaTTEyOCwxOTRjLTMzLjUyLDAtNzQtNDAuMTUtNzQtOTBhNzQsNzQsMCwwLDEsMTQ4LDBDMjAyLDE1My44NSwxNjEuNTIsMTk0LDEyOCwxOTRabTQ5LTkyLjA4YTYuNzQsNi43NCwwLDAsMS0xLC4wOCw2LDYsMCwwLDEtNS45MS01QTQzLjI5LDQzLjI5LDAsMCwwLDEzNSw2MS45MmE2LDYsMCwxLDEsMi0xMS44NEE1NS40OCw1NS40OCwwLDAsMSwxODEuOTIsOTUsNiw2LDAsMCwxLDE3NywxMDEuOTJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZhODguMSw4OC4xLDAsMCwwLTg4LDg4YzAsMjMuNDMsOS40LDQ5LjQyLDI1LjEzLDY5LjUsMTIuMDgsMTUuNDEsMjYuNSwyNiw0MS45MSwzMS4wOUw5Ni42NSwyMjguODVBOCw4LDAsMCwwLDEwNCwyNDBoNDhhOCw4LDAsMCwwLDcuMzUtMTEuMTVMMTQ5LDIwNC41OWMxNS40LTUuMDcsMjkuODMtMTUuNjgsNDEuOTEtMzEuMDlDMjA2LjYsMTUzLjQyLDIxNiwxMjcuNDMsMjE2LDEwNEE4OC4xLDg4LjEsMCwwLDAsMTI4LDE2Wm0xMS44NywyMDhIMTE2LjEzbDYuOTQtMTYuMTljMS42NC4xMiwzLjI4LjE5LDQuOTMuMTlzMy4yOS0uMDcsNC45My0uMTlabTM4LjQtNjAuMzdDMTYzLjk0LDE4MS45MywxNDYuMDksMTkyLDEyOCwxOTJzLTM1Ljk0LTEwLjA3LTUwLjI3LTI4LjM3QzY0LjEyLDE0Ni4yNyw1NiwxMjQsNTYsMTA0YTcyLDcyLDAsMCwxLDE0NCwwQzIwMCwxMjQsMTkxLjg4LDE0Ni4yNywxNzguMjcsMTYzLjYzWm0tMS01OS43NEE4LjUyLDguNTIsMCwwLDEsMTc2LDEwNGE4LDgsMCwwLDEtNy44OC02LjY4LDQxLjI5LDQxLjI5LDAsMCwwLTMzLjQzLTMzLjQzLDgsOCwwLDEsMSwyLjY0LTE1Ljc4LDU3LjUsNTcuNSwwLDAsMSw0Ni41Nyw0Ni41N0E4LDgsMCwwLDEsMTc3LjMyLDEwMy44OVoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBhODQuMDksODQuMDksMCwwLDAtODQsODRjMCwyMi41Nyw5LjA4LDQ3LjYzLDI0LjI4LDY3LDEyLjY4LDE2LjE3LDI4LDI2LjgxLDQ0LjIyLDMxbC0xMi4xOCwyOC40QTQsNCwwLDAsMCwxMDQsMjM2aDQ4YTQsNCwwLDAsMCwzLjY4LTUuNThMMTQzLjUsMjAyYzE2LjIzLTQuMTcsMzEuNTQtMTQuODEsNDQuMjItMzEsMTUuMi0xOS40MSwyNC4yOC00NC40NywyNC4yOC02N0E4NC4wOSw4NC4wOSwwLDAsMCwxMjgsMjBabTE3LjkzLDIwOEgxMTAuMDdsMTAuNDgtMjQuNDZhNjAuNTYsNjAuNTYsMCwwLDAsMTQuOSwwWk0xMjgsMTk2Yy00Mi4xLDAtNzYtNTAuMzMtNzYtOTJhNzYsNzYsMCwwLDEsMTUyLDBDMjA0LDE0NS42NywxNzAuMSwxOTYsMTI4LDE5NlpNMTgwLDk1LjM0YTQsNCwwLDAsMS0zLjI5LDQuNjEsNSw1LDAsMCwxLS42NiwwLDQsNCwwLDAsMS0zLjk1LTMuMzRBNDUuMzEsNDUuMzEsMCwwLDAsMTM1LjM0LDYwYTQsNCwwLDAsMSwxLjMyLTcuOUE1My40Niw1My40NiwwLDAsMSwxODAsOTUuMzRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Balloon";
export { I as Balloon };
