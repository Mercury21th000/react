/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/DotsThreeOutline";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDk2Wm0wLDQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwxMzZabTgwLTQwYTMyLDMyLDAsMSwwLDMyLDMyQTMyLDMyLDAsMCwwLDIwOCw5NlptMCw0MGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwyMDgsMTM2Wk00OCw5NmEzMiwzMiwwLDEsMCwzMiwzMkEzMiwzMiwwLDAsMCw0OCw5NlptMCw0MGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSw0OCwxMzZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTI4YTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDE1MiwxMjhaTTQ4LDEwNGEyNCwyNCwwLDEsMCwyNCwyNEEyNCwyNCwwLDAsMCw0OCwxMDRabTE2MCwwYTI0LDI0LDAsMSwwLDI0LDI0QTI0LDI0LDAsMCwwLDIwOCwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDk2YTMyLDMyLDAsMSwwLDMyLDMyQTMyLDMyLDAsMCwwLDEyOCw5NlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsMTQ0Wk00OCw5NmEzMiwzMiwwLDEsMCwzMiwzMkEzMiwzMiwwLDAsMCw0OCw5NlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw0OCwxNDRaTTIwOCw5NmEzMiwzMiwwLDEsMCwzMiwzMkEzMiwzMiwwLDAsMCwyMDgsOTZabTAsNDhhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMjA4LDE0NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsMTI4YTI4LDI4LDAsMSwxLTI4LTI4QTI4LDI4LDAsMCwxLDE1NiwxMjhaTTQ4LDEwMGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCw0OCwxMDBabTE2MCwwYTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDIwOCwxMDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOThhMzAsMzAsMCwxLDAsMzAsMzBBMzAsMzAsMCwwLDAsMTI4LDk4Wm0wLDQ4YTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDEyOCwxNDZaTTQ4LDk4YTMwLDMwLDAsMSwwLDMwLDMwQTMwLDMwLDAsMCwwLDQ4LDk4Wm0wLDQ4YTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDQ4LDE0NlpNMjA4LDk4YTMwLDMwLDAsMSwwLDMwLDMwQTMwLDMwLDAsMCwwLDIwOCw5OFptMCw0OGExOCwxOCwwLDEsMSwxOC0xOEExOCwxOCwwLDAsMSwyMDgsMTQ2WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDk2Wm0wLDQ4YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxNDRaTTQ4LDk2YTMyLDMyLDAsMSwwLDMyLDMyQTMyLDMyLDAsMCwwLDQ4LDk2Wm0wLDQ4YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDQ4LDE0NFpNMjA4LDk2YTMyLDMyLDAsMSwwLDMyLDMyQTMyLDMyLDAsMCwwLDIwOCw5NlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwyMDgsMTQ0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTAwYTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDEyOCwxMDBabTAsNDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTI4LDE0OFpNNDgsMTAwYTI4LDI4LDAsMSwwLDI4LDI4QTI4LDI4LDAsMCwwLDQ4LDEwMFptMCw0OGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSw0OCwxNDhabTE2MC00OGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCwyMDgsMTAwWm0wLDQ4YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDIwOCwxNDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "DotsThreeOutline";
export { I as DotsThreeOutline };
