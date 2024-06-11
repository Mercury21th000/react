/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Book";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjBINzJBMzYsMzYsMCwwLDAsMzYsNTZWMjI0YTEyLDEyLDAsMCwwLDEyLDEySDE5MmExMiwxMiwwLDAsMCwwLTI0SDYwdi00YTEyLDEyLDAsMCwxLDEyLTEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlYzMkExMiwxMiwwLDAsMCwyMDgsMjBaTTE5NiwxNzJINzJhMzUuNTksMzUuNTksMCwwLDAtMTIsMi4wNlY1NkExMiwxMiwwLDAsMSw3Miw0NEgxOTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJWMTkySDcyYTI0LDI0LDAsMCwwLTI0LDI0VjU2QTI0LDI0LDAsMCwxLDcyLDMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwyNEg3MkEzMiwzMiwwLDAsMCw0MCw1NlYyMjRhOCw4LDAsMCwwLDgsOEgxOTJhOCw4LDAsMCwwLDAtMTZINTZhMTYsMTYsMCwwLDEsMTYtMTZIMjA4YTgsOCwwLDAsMCw4LThWMzJBOCw4LDAsMCwwLDIwOCwyNFptLTgsMTYwSDcyYTMxLjgyLDMxLjgyLDAsMCwwLTE2LDQuMjlWNTZBMTYsMTYsMCwwLDEsNzIsNDBIMjAwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzJWMTkyYTgsOCwwLDAsMS04LDhINzJhMTYsMTYsMCwwLDAtMTYsMTZIMTkyYTgsOCwwLDAsMSwwLDE2SDQ4YTgsOCwwLDAsMS04LThWNTZBMzIsMzIsMCwwLDEsNzIsMjRIMjA4QTgsOCwwLDAsMSwyMTYsMzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjZINzJBMzAsMzAsMCwwLDAsNDIsNTZWMjI0YTYsNiwwLDAsMCw2LDZIMTkyYTYsNiwwLDAsMCwwLTEySDU0di0yYTE4LDE4LDAsMCwxLDE4LTE4SDIwOGE2LDYsMCwwLDAsNi02VjMyQTYsNiwwLDAsMCwyMDgsMjZabS02LDE2MEg3MmEyOS44NywyOS44NywwLDAsMC0xOCw2VjU2QTE4LDE4LDAsMCwxLDcyLDM4SDIwMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjRINzJBMzIsMzIsMCwwLDAsNDAsNTZWMjI0YTgsOCwwLDAsMCw4LDhIMTkyYTgsOCwwLDAsMCwwLTE2SDU2YTE2LDE2LDAsMCwxLDE2LTE2SDIwOGE4LDgsMCwwLDAsOC04VjMyQTgsOCwwLDAsMCwyMDgsMjRabS04LDE2MEg3MmEzMS44MiwzMS44MiwwLDAsMC0xNiw0LjI5VjU2QTE2LDE2LDAsMCwxLDcyLDQwSDIwMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINzJBMjgsMjgsMCwwLDAsNDQsNTZWMjI0YTQsNCwwLDAsMCw0LDRIMTkyYTQsNCwwLDAsMCwwLThINTJ2LTRhMjAsMjAsMCwwLDEsMjAtMjBIMjA4YTQsNCwwLDAsMCw0LTRWMzJBNCw0LDAsMCwwLDIwOCwyOFptLTQsMTYwSDcyYTI3Ljk0LDI3Ljk0LDAsMCwwLTIwLDguNDJWNTZBMjAsMjAsMCwwLDEsNzIsMzZIMjA0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Book";
export { I as Book };
