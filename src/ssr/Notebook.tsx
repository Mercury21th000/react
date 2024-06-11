/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Notebook";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsMTA4YTEyLDEyLDAsMCwxLDEyLTEyaDU2YTEyLDEyLDAsMCwxLDAsMjRIMTIwQTEyLDEyLDAsMCwxLDEwOCwxMDhabTY4LDI4SDEyMGExMiwxMiwwLDAsMCwwLDI0aDU2YTEyLDEyLDAsMCwwLDAtMjRabTUyLTg4VjIwOGEyMCwyMCwwLDAsMS0yMCwyMEg0OGEyMCwyMCwwLDAsMS0yMC0yMFY0OEEyMCwyMCwwLDAsMSw0OCwyOEgyMDhBMjAsMjAsMCwwLDEsMjI4LDQ4Wk01MiwyMDRINjhWNTJINTJaTTIwNCw1Mkg5MlYyMDRIMjA0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCw0MFYyMTZINDhhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCwxMTJhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE4NCwxMTJabS04LDI0SDExMmE4LDgsMCwwLDAsMCwxNmg2NGE4LDgsMCwwLDAsMC0xNlptNDgtODhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDQ4LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhaTTQ4LDIwOEg3MlY0OEg0OFptMTYwLDBWNDhIODhWMjA4SDIwOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTgwLDIwOEg0OFY0OEg4MFptOTYtNTZIMTEyYTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2Wm0wLTMySDExMmE4LDgsMCwwLDEsMC0xNmg2NGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODIsMTEyYTYsNiwwLDAsMS02LDZIMTEyYTYsNiwwLDAsMSwwLTEyaDY0QTYsNiwwLDAsMSwxODIsMTEyWm0tNiwyNkgxMTJhNiw2LDAsMCwwLDAsMTJoNjRhNiw2LDAsMCwwLDAtMTJabTQ2LTkwVjIwOGExNCwxNCwwLDAsMS0xNCwxNEg0OGExNCwxNCwwLDAsMS0xNC0xNFY0OEExNCwxNCwwLDAsMSw0OCwzNEgyMDhBMTQsMTQsMCwwLDEsMjIyLDQ4Wk00OCwyMTBINzRWNDZINDhhMiwyLDAsMCwwLTIsMlYyMDhBMiwyLDAsMCwwLDQ4LDIxMFpNMjEwLDQ4YTIsMiwwLDAsMC0yLTJIODZWMjEwSDIwOGEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTEyYTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2aDY0QTgsOCwwLDAsMSwxODQsMTEyWm0tOCwyNEgxMTJhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZabTQ4LTg4VjIwOGExNiwxNiwwLDAsMS0xNiwxNkg0OGExNiwxNiwwLDAsMS0xNi0xNlY0OEExNiwxNiwwLDAsMSw0OCwzMkgyMDhBMTYsMTYsMCwwLDEsMjI0LDQ4Wk00OCwyMDhINzJWNDhINDhabTE2MCwwVjQ4SDg4VjIwOEgyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTEyYTQsNCwwLDAsMS00LDRIMTEyYTQsNCwwLDAsMSwwLThoNjRBNCw0LDAsMCwxLDE4MCwxMTJabS00LDI4SDExMmE0LDQsMCwwLDAsMCw4aDY0YTQsNCwwLDAsMCwwLThabTQ0LTkyVjIwOGExMiwxMiwwLDAsMS0xMiwxMkg0OGExMiwxMiwwLDAsMS0xMi0xMlY0OEExMiwxMiwwLDAsMSw0OCwzNkgyMDhBMTIsMTIsMCwwLDEsMjIwLDQ4Wk00OCwyMTJINzZWNDRINDhhNCw0LDAsMCwwLTQsNFYyMDhBNCw0LDAsMCwwLDQ4LDIxMlpNMjEyLDQ4YTQsNCwwLDAsMC00LTRIODRWMjEySDIwOGE0LDQsMCwwLDAsNC00WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Notebook";
export { I as Notebook };
