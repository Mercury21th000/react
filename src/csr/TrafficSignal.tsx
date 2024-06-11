/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TrafficSignal";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDU2Wm0wLDQ4YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxMDRabTAsMzJhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDEzNlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsMTg0Wm04OC00MEgyMDBWODBoMTZhOCw4LDAsMCwwLDAtMTZIMjAwVjQwYTE2LDE2LDAsMCwwLTE2LTE2SDcyQTE2LDE2LDAsMCwwLDU2LDQwVjY0SDQwYTgsOCwwLDAsMCwwLDE2SDU2djY0SDQwYTgsOCwwLDAsMCwwLDE2SDU2djU2YTE2LDE2LDAsMCwwLDE2LDE2SDE4NGExNiwxNiwwLDAsMCwxNi0xNlYxNjBoMTZhOCw4LDAsMCwwLDAtMTZabS0zMiw3Mkg3MlY0MEgxODRWMjE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNjBhMjgsMjgsMCwxLDAsMjgsMjhBMjgsMjgsMCwwLDAsMTI4LDYwWm0wLDQ4YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDEyOCwxMDhabTAsMzJhMjgsMjgsMCwxLDAsMjgsMjhBMjgsMjgsMCwwLDAsMTI4LDE0MFptMCw0OGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxMjgsMTg4Wm04OC00MEgxOTZWNzZoMjBhNCw0LDAsMCwwLDAtOEgxOTZWNDBhMTIsMTIsMCwwLDAtMTItMTJINzJBMTIsMTIsMCwwLDAsNjAsNDBWNjhINDBhNCw0LDAsMCwwLDAsOEg2MHY3Mkg0MGE0LDQsMCwwLDAsMCw4SDYwdjYwYTEyLDEyLDAsMCwwLDEyLDEySDE4NGExMiwxMiwwLDAsMCwxMi0xMlYxNTZoMjBhNCw0LDAsMCwwLDAtOFptLTI4LDY4YTQsNCwwLDAsMS00LDRINzJhNCw0LDAsMCwxLTQtNFY0MGE0LDQsMCwwLDEsNC00SDE4NGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNThhMzAsMzAsMCwxLDAsMzAsMzBBMzAsMzAsMCwwLDAsMTI4LDU4Wm0wLDQ4YTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDEyOCwxMDZabTAsMzJhMzAsMzAsMCwxLDAsMzAsMzBBMzAsMzAsMCwwLDAsMTI4LDEzOFptMCw0OGExOCwxOCwwLDEsMSwxOC0xOEExOCwxOCwwLDAsMSwxMjgsMTg2Wm04OC00MEgxOThWNzhoMThhNiw2LDAsMCwwLDAtMTJIMTk4VjQwYTE0LDE0LDAsMCwwLTE0LTE0SDcyQTE0LDE0LDAsMCwwLDU4LDQwVjY2SDQwYTYsNiwwLDAsMCwwLDEySDU4djY4SDQwYTYsNiwwLDAsMCwwLDEySDU4djU4YTE0LDE0LDAsMCwwLDE0LDE0SDE4NGExNCwxNCwwLDAsMCwxNC0xNFYxNThoMThhNiw2LDAsMCwwLDAtMTJabS0zMCw3MGEyLDIsMCwwLDEtMiwySDcyYTIsMiwwLDAsMS0yLTJWNDBhMiwyLDAsMCwxLDItMkgxODRhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQwSDIwNFY4NGgxMmExMiwxMiwwLDAsMCwwLTI0SDIwNFY0MGEyMCwyMCwwLDAsMC0yMC0yMEg3MkEyMCwyMCwwLDAsMCw1Miw0MFY2MEg0MGExMiwxMiwwLDAsMCwwLDI0SDUydjU2SDQwYTEyLDEyLDAsMCwwLDAsMjRINTJ2NTJhMjAsMjAsMCwwLDAsMjAsMjBIMTg0YTIwLDIwLDAsMCwwLDIwLTIwVjE2NGgxMmExMiwxMiwwLDAsMCwwLTI0Wm0tMzYsNzJINzZWNDRIMTgwWm0tNTItOTJBMzIsMzIsMCwxLDAsOTYsODgsMzIsMzIsMCwwLDAsMTI4LDEyMFptMC00MGE4LDgsMCwxLDEtOCw4QTgsOCwwLDAsMSwxMjgsODBabTAsMTIwYTMyLDMyLDAsMSwwLTMyLTMyQTMyLDMyLDAsMCwwLDEyOCwyMDBabTAtNDBhOCw4LDAsMSwxLTgsOEE4LDgsMCwwLDEsMTI4LDE2MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQ0SDIwMFY4MGgxNmE4LDgsMCwwLDAsMC0xNkgyMDBWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNjRINDBhOCw4LDAsMCwwLDAsMTZINTZ2NjRINDBhOCw4LDAsMCwwLDAsMTZINTZ2NTZhMTYsMTYsMCwwLDAsMTYsMTZIMTg0YTE2LDE2LDAsMCwwLDE2LTE2VjE2MGgxNmE4LDgsMCwwLDAsMC0xNlptLTg4LTI4YTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDEyOCwxMTZabTAsMjRhMjgsMjgsMCwxLDEtMjgsMjhBMjgsMjgsMCwwLDEsMTI4LDE0MFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzJINzJhOCw4LDAsMCwwLTgsOFYyMTZhOCw4LDAsMCwwLDgsOEgxODRhOCw4LDAsMCwwLDgtOFY0MEE4LDgsMCwwLDAsMTg0LDMyWk0xMjgsMTkyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDEyOCwxOTJabTAtODBhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTI4LDExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsNTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDU2Wm0wLDQ4YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxMDRabTAsMzJhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDEzNlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsMTg0Wm04OC00MEgyMDBWODBoMTZhOCw4LDAsMCwwLDAtMTZIMjAwVjQwYTE2LDE2LDAsMCwwLTE2LTE2SDcyQTE2LDE2LDAsMCwwLDU2LDQwVjY0SDQwYTgsOCwwLDAsMCwwLDE2SDU2djY0SDQwYTgsOCwwLDAsMCwwLDE2SDU2djU2YTE2LDE2LDAsMCwwLDE2LDE2SDE4NGExNiwxNiwwLDAsMCwxNi0xNlYxNjBoMTZhOCw4LDAsMCwwLDAtMTZabS0zMiw3Mkg3MlY0MEgxODRWMjE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TrafficSignal";
export { I as TrafficSignal };
