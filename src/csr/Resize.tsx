/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Resize";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTA4SDQ4YTEyLDEyLDAsMCwwLTEyLDEydjg4YTEyLDEyLDAsMCwwLDEyLDEyaDg4YTEyLDEyLDAsMCwwLDEyLTEyVjEyMEExMiwxMiwwLDAsMCwxMzYsMTA4Wm0tMTIsODhINjBWMTMyaDY0Wm05Ni04djEyYTIwLDIwLDAsMCwxLTIwLDIwSDE4MGExMiwxMiwwLDAsMSwwLTI0aDE2di04YTEyLDEyLDAsMCwxLDI0LDBabTAtNzJ2MjRhMTIsMTIsMCwwLDEtMjQsMFYxMTZhMTIsMTIsMCwwLDEsMjQsMFptMC02MFY3MmExMiwxMiwwLDAsMS0yNCwwVjYwSDE4NGExMiwxMiwwLDAsMSwwLTI0aDE2QTIwLDIwLDAsMCwxLDIyMCw1NlptLTY4LThhMTIsMTIsMCwwLDEtMTIsMTJIMTE2YTEyLDEyLDAsMCwxLDAtMjRoMjRBMTIsMTIsMCwwLDEsMTUyLDQ4Wk0zNiw3NlY1NkEyMCwyMCwwLDAsMSw1NiwzNkg2OGExMiwxMiwwLDAsMSwwLDI0SDYwVjc2YTEyLDEyLDAsMCwxLTI0LDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTIwdjg4SDQ4VjEyMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMzYsMTEySDQ4YTgsOCwwLDAsMC04LDh2ODhhOCw4LDAsMCwwLDgsOGg4OGE4LDgsMCwwLDAsOC04VjEyMEE4LDgsMCwwLDAsMTM2LDExMlptLTgsODhINTZWMTI4aDcyWm04OC0xNnYxNmExNiwxNiwwLDAsMS0xNiwxNkgxNzZhOCw4LDAsMCwxLDAtMTZoMjRWMTg0YTgsOCwwLDAsMSwxNiwwWm0wLTcydjMyYTgsOCwwLDAsMS0xNiwwVjExMmE4LDgsMCwwLDEsMTYsMFptMC01NlY3MmE4LDgsMCwwLDEtMTYsMFY1NkgxODRhOCw4LDAsMCwxLDAtMTZoMTZBMTYsMTYsMCwwLDEsMjE2LDU2Wm0tNjQtOGE4LDgsMCwwLDEtOCw4SDExMmE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMTUyLDQ4Wk00MCw4MFY1NkExNiwxNiwwLDAsMSw1Niw0MEg3MmE4LDgsMCwwLDEsMCwxNkg1NlY4MGE4LDgsMCwwLDEtMTYsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTIwdjg4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxMjBhOCw4LDAsMCwxLDgtOGg4OEE4LDgsMCwwLDEsMTQ0LDEyMFptNjQsNTZhOCw4LDAsMCwwLTgsOHYxNkgxNzZhOCw4LDAsMCwwLDAsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWMTg0QTgsOCwwLDAsMCwyMDgsMTc2Wm0wLTcyYTgsOCwwLDAsMC04LDh2MzJhOCw4LDAsMCwwLDE2LDBWMTEyQTgsOCwwLDAsMCwyMDgsMTA0Wm0tOC02NEgxODRhOCw4LDAsMCwwLDAsMTZoMTZWNzJhOCw4LDAsMCwwLDE2LDBWNTZBMTYsMTYsMCwwLDAsMjAwLDQwWm0tNTYsMEgxMTJhOCw4LDAsMCwwLDAsMTZoMzJhOCw4LDAsMCwwLDAtMTZaTTQ4LDg4YTgsOCwwLDAsMCw4LThWNTZINzJhOCw4LDAsMCwwLDAtMTZINTZBMTYsMTYsMCwwLDAsNDAsNTZWODBBOCw4LDAsMCwwLDQ4LDg4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTE0SDQ4YTYsNiwwLDAsMC02LDZ2ODhhNiw2LDAsMCwwLDYsNmg4OGE2LDYsMCwwLDAsNi02VjEyMEE2LDYsMCwwLDAsMTM2LDExNFptLTYsODhINTRWMTI2aDc2Wm04NC0xOHYxNmExNCwxNCwwLDAsMS0xNCwxNEgxNzZhNiw2LDAsMCwxLDAtMTJoMjRhMiwyLDAsMCwwLDItMlYxODRhNiw2LDAsMCwxLDEyLDBabTAtNzJ2MzJhNiw2LDAsMCwxLTEyLDBWMTEyYTYsNiwwLDAsMSwxMiwwWm0wLTU2VjcyYTYsNiwwLDAsMS0xMiwwVjU2YTIsMiwwLDAsMC0yLTJIMTg0YTYsNiwwLDAsMSwwLTEyaDE2QTE0LDE0LDAsMCwxLDIxNCw1NlptLTY0LThhNiw2LDAsMCwxLTYsNkgxMTJhNiw2LDAsMCwxLDAtMTJoMzJBNiw2LDAsMCwxLDE1MCw0OFpNNDIsODBWNTZBMTQsMTQsMCwwLDEsNTYsNDJINzJhNiw2LDAsMCwxLDAsMTJINTZhMiwyLDAsMCwwLTIsMlY4MGE2LDYsMCwwLDEtMTIsMFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTEySDQ4YTgsOCwwLDAsMC04LDh2ODhhOCw4LDAsMCwwLDgsOGg4OGE4LDgsMCwwLDAsOC04VjEyMEE4LDgsMCwwLDAsMTM2LDExMlptLTgsODhINTZWMTI4aDcyWm04OC0xNnYxNmExNiwxNiwwLDAsMS0xNiwxNkgxNzZhOCw4LDAsMCwxLDAtMTZoMjRWMTg0YTgsOCwwLDAsMSwxNiwwWm0wLTcydjMyYTgsOCwwLDAsMS0xNiwwVjExMmE4LDgsMCwwLDEsMTYsMFptMC01NlY3MmE4LDgsMCwwLDEtMTYsMFY1NkgxODRhOCw4LDAsMCwxLDAtMTZoMTZBMTYsMTYsMCwwLDEsMjE2LDU2Wm0tNjQtOGE4LDgsMCwwLDEtOCw4SDExMmE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMTUyLDQ4Wk00MCw4MFY1NkExNiwxNiwwLDAsMSw1Niw0MEg3MmE4LDgsMCwwLDEsMCwxNkg1NlY4MGE4LDgsMCwwLDEtMTYsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTE2SDQ4YTQsNCwwLDAsMC00LDR2ODhhNCw0LDAsMCwwLDQsNGg4OGE0LDQsMCwwLDAsNC00VjEyMEE0LDQsMCwwLDAsMTM2LDExNlptLTQsODhINTJWMTI0aDgwWm04MC0yMHYxNmExMiwxMiwwLDAsMS0xMiwxMkgxNzZhNCw0LDAsMCwxLDAtOGgyNGE0LDQsMCwwLDAsNC00VjE4NGE0LDQsMCwwLDEsOCwwWm0wLTcydjMyYTQsNCwwLDAsMS04LDBWMTEyYTQsNCwwLDAsMSw4LDBabTAtNTZWNzJhNCw0LDAsMCwxLTgsMFY1NmE0LDQsMCwwLDAtNC00SDE4NGE0LDQsMCwwLDEsMC04aDE2QTEyLDEyLDAsMCwxLDIxMiw1NlptLTY0LThhNCw0LDAsMCwxLTQsNEgxMTJhNCw0LDAsMCwxLDAtOGgzMkE0LDQsMCwwLDEsMTQ4LDQ4Wk00NCw4MFY1NkExMiwxMiwwLDAsMSw1Niw0NEg3MmE0LDQsMCwwLDEsMCw4SDU2YTQsNCwwLDAsMC00LDRWODBhNCw0LDAsMCwxLTgsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Resize";
export { I as Resize };
