/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ArrowFatLineUp";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTE0LjM0bC05Ni05NmE4LDgsMCwwLDAtMTEuMzIsMGwtOTYsOTZBOCw4LDAsMCwwLDMyLDEyOEg3MnY1NmE4LDgsMCwwLDAsOCw4aDk2YTgsOCwwLDAsMCw4LThWMTI4aDQwYTgsOCwwLDAsMCw1LjY2LTEzLjY2Wk0xNzYsMTEyYTgsOCwwLDAsMC04LDh2NTZIODhWMTIwYTgsOCwwLDAsMC04LThINTEuMzFMMTI4LDM1LjMxLDIwNC42OSwxMTJabTgsMTA0YTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZoOTZBOCw4LDAsMCwxLDE4NCwyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMTE3LjE3bC05Ni05NmE0LDQsMCwwLDAtNS42NiwwbC05Niw5NkE0LDQsMCwwLDAsMzIsMTI0SDc2djYwYTQsNCwwLDAsMCw0LDRoOTZhNCw0LDAsMCwwLDQtNFYxMjRoNDRhNCw0LDAsMCwwLDIuODMtNi44M1pNMTc2LDExNmE0LDQsMCwwLDAtNCw0djYwSDg0VjEyMGE0LDQsMCwwLDAtNC00SDQxLjY2TDEyOCwyOS42NiwyMTQuMzQsMTE2Wm00LDEwMGE0LDQsMCwwLDEtNCw0SDgwYTQsNCwwLDAsMSwwLThoOTZBNCw0LDAsMCwxLDE4MCwyMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTE1Ljc2bC05Ni05NmE2LDYsMCwwLDAtOC40OCwwbC05Niw5NkE2LDYsMCwwLDAsMzIsMTI2SDc0djU4YTYsNiwwLDAsMCw2LDZoOTZhNiw2LDAsMCwwLDYtNlYxMjZoNDJhNiw2LDAsMCwwLDQuMjQtMTAuMjRaTTE3NiwxMTRhNiw2LDAsMCwwLTYsNnY1OEg4NlYxMjBhNiw2LDAsMCwwLTYtNkg0Ni40OUwxMjgsMzIuNDksMjA5LjUxLDExNFptNiwxMDJhNiw2LDAsMCwxLTYsNkg4MGE2LDYsMCwwLDEsMC0xMmg5NkE2LDYsMCwwLDEsMTgyLDIxNloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDgsMTExLjUxbC05Ni05NmExMiwxMiwwLDAsMC0xNywwbC05Niw5NkExMiwxMiwwLDAsMCwzMiwxMzJINjh2NDRhMTIsMTIsMCwwLDAsMTIsMTJoOTZhMTIsMTIsMCwwLDAsMTItMTJWMTMyaDM2YTEyLDEyLDAsMCwwLDguNDgtMjAuNDlaTTE3NiwxMDhhMTIsMTIsMCwwLDAtMTIsMTJ2NDRIOTJWMTIwYTEyLDEyLDAsMCwwLTEyLTEySDYxbDY3LTY3LDY3LDY3Wm0xMiwxMDhhMTIsMTIsMCwwLDEtMTIsMTJIODBhMTIsMTIsMCwwLDEsMC0yNGg5NkExMiwxMiwwLDAsMSwxODgsMjE2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjE2YTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZoOTZBOCw4LDAsMCwxLDE4NCwyMTZabTQ1LjY2LTEwMS42Ni05Ni05NmE4LDgsMCwwLDAtMTEuMzIsMGwtOTYsOTZBOCw4LDAsMCwwLDMyLDEyOEg3MnY1NmE4LDgsMCwwLDAsOCw4aDk2YTgsOCwwLDAsMCw4LThWMTI4aDQwYTgsOCwwLDAsMCw1LjY2LTEzLjY2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTIwSDE3NnY2NEg4MFYxMjBIMzJsOTYtOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI5LjY2LDExNC4zNGwtOTYtOTZhOCw4LDAsMCwwLTExLjMyLDBsLTk2LDk2QTgsOCwwLDAsMCwzMiwxMjhINzJ2NTZhOCw4LDAsMCwwLDgsOGg5NmE4LDgsMCwwLDAsOC04VjEyOGg0MGE4LDgsMCwwLDAsNS42Ni0xMy42NlpNMTc2LDExMmE4LDgsMCwwLDAtOCw4djU2SDg4VjEyMGE4LDgsMCwwLDAtOC04SDUxLjMxTDEyOCwzNS4zMSwyMDQuNjksMTEyWm04LDEwNGE4LDgsMCwwLDEtOCw4SDgwYTgsOCwwLDAsMSwwLTE2aDk2QTgsOCwwLDAsMSwxODQsMjE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowFatLineUp";
export { I as ArrowFatLineUp };
