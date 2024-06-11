/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SelectionBackground";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsODBINDhhMjAsMjAsMCwwLDAtMjAsMjBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE1NmEyMCwyMCwwLDAsMCwyMC0yMFYxMDBBMjAsMjAsMCwwLDAsMTU2LDgwWm0tNCwxMjRINTJWMTA0SDE1MlpNMTMyLDQwYTEyLDEyLDAsMCwxLDEyLTEyaDE2YTEyLDEyLDAsMCwxLDAsMjRIMTQ0QTEyLDEyLDAsMCwxLDEzMiw0MFptOTYsOHY4YTEyLDEyLDAsMCwxLTI0LDBWNTJoLTRhMTIsMTIsMCwwLDEsMC0yNGg4QTIwLDIwLDAsMCwxLDIyOCw0OFptMCw0OHYxNmExMiwxMiwwLDAsMS0yNCwwVjk2YTEyLDEyLDAsMCwxLDI0LDBabTAsNTZ2OGEyMCwyMCwwLDAsMS0yMCwyMGgtOGExMiwxMiwwLDAsMSwwLTI0aDR2LTRhMTIsMTIsMCwwLDEsMjQsMFpNNzYsNTZWNDhBMjAsMjAsMCwwLDEsOTYsMjhoOGExMiwxMiwwLDAsMSwwLDI0aC00djRhMTIsMTIsMCwwLDEtMjQsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMTYwYTgsOCwwLDAsMS04LDhIMTY4Vjk2YTgsOCwwLDAsMC04LThIODhWNDhhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiw0OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjAsODBINDhBMTYsMTYsMCwwLDAsMzIsOTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE2MGExNiwxNiwwLDAsMCwxNi0xNlY5NkExNiwxNiwwLDAsMCwxNjAsODBabTAsMTI4SDQ4Vjk2SDE2MFpNMTM2LDQwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTQ0QTgsOCwwLDAsMSwxMzYsNDBabTg4LDh2OGE4LDgsMCwwLDEtMTYsMFY0OGgtOGE4LDgsMCwwLDEsMC0xNmg4QTE2LDE2LDAsMCwxLDIyNCw0OFptMCw0OHYxNmE4LDgsMCwwLDEtMTYsMFY5NmE4LDgsMCwwLDEsMTYsMFptMCw1NnY4YTE2LDE2LDAsMCwxLTE2LDE2aC04YTgsOCwwLDAsMSwwLTE2aDh2LThhOCw4LDAsMCwxLDE2LDBaTTgwLDU2VjQ4QTE2LDE2LDAsMCwxLDk2LDMyaDhhOCw4LDAsMCwxLDAsMTZIOTZ2OGE4LDgsMCwwLDEtMTYsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxMTJoNzJ2NzJINzJaTTIyNCw0OFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINDhhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNOTYsNzJhOCw4LDAsMCwwLDE2LDBoMTZhOCw4LDAsMCwwLDAtMTZIMTEyQTE2LDE2LDAsMCwwLDk2LDcyWm02NCw0MGExNiwxNiwwLDAsMC0xNi0xNkg3MmExNiwxNiwwLDAsMC0xNiwxNnY3MmExNiwxNiwwLDAsMCwxNiwxNmg3MmExNiwxNiwwLDAsMCwxNi0xNlptNDAsMTZhOCw4LDAsMCwwLTE2LDB2MTZhOCw4LDAsMCwwLDAsMTYsMTYsMTYsMCwwLDAsMTYtMTZabTAtNTZhMTYsMTYsMCwwLDAtMTYtMTZIMTY4YTgsOCwwLDAsMCwwLDE2aDE2Vjg4YTgsOCwwLDAsMCwxNiwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODJINDhBMTQsMTQsMCwwLDAsMzQsOTZWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE2MGExNCwxNCwwLDAsMCwxNC0xNFY5NkExNCwxNCwwLDAsMCwxNjAsODJabTIsMTI2YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY5NmEyLDIsMCwwLDEsMi0ySDE2MGEyLDIsMCwwLDEsMiwyWk0xMzgsNDBhNiw2LDAsMCwxLDYtNmgxNmE2LDYsMCwwLDEsMCwxMkgxNDRBNiw2LDAsMCwxLDEzOCw0MFptODQsOHY4YTYsNiwwLDAsMS0xMiwwVjQ4YTIsMiwwLDAsMC0yLTJoLThhNiw2LDAsMCwxLDAtMTJoOEExNCwxNCwwLDAsMSwyMjIsNDhabTAsNDh2MTZhNiw2LDAsMCwxLTEyLDBWOTZhNiw2LDAsMCwxLDEyLDBabTAsNTZ2OGExNCwxNCwwLDAsMS0xNCwxNGgtOGE2LDYsMCwwLDEsMC0xMmg4YTIsMiwwLDAsMCwyLTJ2LThhNiw2LDAsMCwxLDEyLDBaTTgyLDU2VjQ4QTE0LDE0LDAsMCwxLDk2LDM0aDhhNiw2LDAsMCwxLDAsMTJIOTZhMiwyLDAsMCwwLTIsMnY4YTYsNiwwLDAsMS0xMiwwWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODBINDhBMTYsMTYsMCwwLDAsMzIsOTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDE2MGExNiwxNiwwLDAsMCwxNi0xNlY5NkExNiwxNiwwLDAsMCwxNjAsODBabTAsMTI4SDQ4Vjk2SDE2MFpNMTM2LDQwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTQ0QTgsOCwwLDAsMSwxMzYsNDBabTg4LDh2OGE4LDgsMCwwLDEtMTYsMFY0OGgtOGE4LDgsMCwwLDEsMC0xNmg4QTE2LDE2LDAsMCwxLDIyNCw0OFptMCw0OHYxNmE4LDgsMCwwLDEtMTYsMFY5NmE4LDgsMCwwLDEsMTYsMFptMCw1NnY4YTE2LDE2LDAsMCwxLTE2LDE2aC04YTgsOCwwLDAsMSwwLTE2aDh2LThhOCw4LDAsMCwxLDE2LDBaTTgwLDU2VjQ4QTE2LDE2LDAsMCwxLDk2LDMyaDhhOCw4LDAsMCwxLDAsMTZIOTZ2OGE4LDgsMCwwLDEtMTYsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODRINDhBMTIsMTIsMCwwLDAsMzYsOTZWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDE2MGExMiwxMiwwLDAsMCwxMi0xMlY5NkExMiwxMiwwLDAsMCwxNjAsODRabTQsMTI0YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY5NmE0LDQsMCwwLDEsNC00SDE2MGE0LDQsMCwwLDEsNCw0Wk0xNDAsNDBhNCw0LDAsMCwxLDQtNGgxNmE0LDQsMCwwLDEsMCw4SDE0NEE0LDQsMCwwLDEsMTQwLDQwWm04MCw4djhhNCw0LDAsMCwxLTgsMFY0OGE0LDQsMCwwLDAtNC00aC04YTQsNCwwLDAsMSwwLThoOEExMiwxMiwwLDAsMSwyMjAsNDhabTAsNDh2MTZhNCw0LDAsMCwxLTgsMFY5NmE0LDQsMCwwLDEsOCwwWm0wLDU2djhhMTIsMTIsMCwwLDEtMTIsMTJoLThhNCw0LDAsMCwxLDAtOGg4YTQsNCwwLDAsMCw0LTR2LThhNCw0LDAsMCwxLDgsMFpNODQsNTZWNDhBMTIsMTIsMCwwLDEsOTYsMzZoOGE0LDQsMCwwLDEsMCw4SDk2YTQsNCwwLDAsMC00LDR2OGE0LDQsMCwwLDEtOCwwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SelectionBackground";
export { I as SelectionBackground };
