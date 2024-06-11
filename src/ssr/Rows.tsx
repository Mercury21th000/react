/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Rows";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDQ4YTIwLDIwLDAsMCwwLTIwLDIwdjM2YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFYxNTZBMjAsMjAsMCwwLDAsMjA4LDEzNlptLTQsNTJINTJWMTYwSDIwNFptNC0xNDRINDhBMjAsMjAsMCwwLDAsMjgsNjR2MzZhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjY0QTIwLDIwLDAsMCwwLDIwOCw0NFptLTQsNTJINTJWNjhIMjA0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUydjQwYTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxNTJhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiwxNTJabS04LTk2SDQ4YTgsOCwwLDAsMC04LDh2NDBhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY2NEE4LDgsMCwwLDAsMjA4LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwxMzZINDhhMTYsMTYsMCwwLDAtMTYsMTZ2NDBhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjE1MkExNiwxNiwwLDAsMCwyMDgsMTM2Wm0wLDU2SDQ4VjE1MkgyMDh2NDBabTAtMTQ0SDQ4QTE2LDE2LDAsMCwwLDMyLDY0djQwYTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMDgsNDhabTAsNTZINDhWNjRIMjA4djQwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTUydjQwYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE1MmExNiwxNiwwLDAsMSwxNi0xNkgyMDhBMTYsMTYsMCwwLDEsMjI0LDE1MlpNMjA4LDQ4SDQ4QTE2LDE2LDAsMCwwLDMyLDY0djQwYTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMDgsNDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM4SDQ4YTE0LDE0LDAsMCwwLTE0LDE0djQwYTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFYxNTJBMTQsMTQsMCwwLDAsMjA4LDEzOFptMiw1NGEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWMTUyYTIsMiwwLDAsMSwyLTJIMjA4YTIsMiwwLDAsMSwyLDJaTTIwOCw1MEg0OEExNCwxNCwwLDAsMCwzNCw2NHY0MGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWNjRBMTQsMTQsMCwwLDAsMjA4LDUwWm0yLDU0YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY2NGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTM2SDQ4YTE2LDE2LDAsMCwwLTE2LDE2djQwYTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxNTJBMTYsMTYsMCwwLDAsMjA4LDEzNlptMCw1Nkg0OFYxNTJIMjA4djQwWm0wLTE0NEg0OEExNiwxNiwwLDAsMCwzMiw2NHY0MGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNjRBMTYsMTYsMCwwLDAsMjA4LDQ4Wm0wLDU2SDQ4VjY0SDIwOHY0MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQwSDQ4YTEyLDEyLDAsMCwwLTEyLDEydjQwYTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlYxNTJBMTIsMTIsMCwwLDAsMjA4LDE0MFptNCw1MmE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTUyYTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRaTTIwOCw1Mkg0OEExMiwxMiwwLDAsMCwzNiw2NHY0MGExMiwxMiwwLDAsMCwxMiwxMkgyMDhhMTIsMTIsMCwwLDAsMTItMTJWNjRBMTIsMTIsMCwwLDAsMjA4LDUyWm00LDUyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY2NGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Rows";
export { I as Rows };
