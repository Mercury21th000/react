/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FramerLogo";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTA0VjQwYTgsOCwwLDAsMC04LThINTZhOCw4LDAsMCwwLTUuMzEsMTRMMTA3LDk2SDU2YTgsOCwwLDAsMC04LDh2NjRhOCw4LDAsMCwwLDIuMzQsNS42Nmw3Miw3MkE4LDgsMCwwLDAsMTM2LDI0MFYxNzZoNjRhOCw4LDAsMCwwLDUuMzEtMTRMMTQ5LDExMmg1MUE4LDgsMCwwLDAsMjA4LDEwNFptLTI5LDU2SDEyOGE4LDgsMCwwLDAtOCw4djUyLjY5bC01Ni01NlYxMTJoNjFabTEzLTY0SDEzMUw3Nyw0OEgxOTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTA0VjQwYTQsNCwwLDAsMC00LTRINTZhNCw0LDAsMCwwLTIuNjYsN2w2NC4xNCw1N0g1NmE0LDQsMCwwLDAtNCw0djY0YTQsNCwwLDAsMCwxLjE3LDIuODNsNzIsNzJBNCw0LDAsMCwwLDEzMiwyNDBWMTcyaDY4YTQsNCwwLDAsMCwyLjY2LTdsLTY0LjE0LTU3SDIwMEE0LDQsMCwwLDAsMjA0LDEwNFptLTE0LjUyLDYwSDEyOGE0LDQsMCwwLDAtNCw0djYyLjM0bC02NC02NFYxMDhoNjYuNDhaTTE5NiwxMDBIMTI5LjUybC02My01NkgxOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMTA0VjQwYTYsNiwwLDAsMC02LTZINTZhNiw2LDAsMCwwLTQsMTAuNDhMMTEyLjIyLDk4SDU2YTYsNiwwLDAsMC02LDZ2NjRhNiw2LDAsMCwwLDEuNzYsNC4yNGw3Miw3MkE2LDYsMCwwLDAsMTM0LDI0MFYxNzRoNjZhNiw2LDAsMCwwLDQtMTAuNDhMMTQzLjc4LDExMEgyMDBBNiw2LDAsMCwwLDIwNiwxMDRabS0yMS43OCw1OEgxMjhhNiw2LDAsMCwwLTYsNnY1Ny41MWwtNjAtNjBWMTEwaDYzLjcyWk0xOTQsOThIMTMwLjI4TDcxLjc4LDQ2SDE5NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTA0VjQwYTEyLDEyLDAsMCwwLTEyLTEySDU2YTEyLDEyLDAsMCwwLTgsMjFMOTYuNDQsOTJINTZhMTIsMTIsMCwwLDAtMTIsMTJ2NjRhMTIsMTIsMCwwLDAsMy41Miw4LjQ5bDcyLDcyQTEyLDEyLDAsMCwwLDE0MCwyNDBWMTgwaDYwYTEyLDEyLDAsMCwwLDgtMjFsLTQ4LjQxLTQzSDIwMEExMiwxMiwwLDAsMCwyMTIsMTA0Wm0tNDMuNTYsNTJIMTI4YTEyLDEyLDAsMCwwLTEyLDEydjQzTDY4LDE2M1YxMTZoNTUuNDRaTTE4OCw5MkgxMzIuNTZsLTQ1LTQwSDE4OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTEySDE0OWw1Ni4yNyw1MEE4LDgsMCwwLDEsMjAwLDE3NkgxMzZ2NjRhOCw4LDAsMCwxLTEzLjY2LDUuNjZsLTcyLTcyQTgsOCwwLDAsMSw0OCwxNjhWMTA0YTgsOCwwLDAsMSw4LThoNTFMNTAuNjksNDZBOCw4LDAsMCwxLDU2LDMySDIwMGE4LDgsMCwwLDEsOCw4djY0QTgsOCwwLDAsMSwyMDAsMTEyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTA0SDEyOEw1Niw0MEgyMDBaTTU2LDE2OGw3Miw3MlYxNjhoNzJsLTcyLTY0SDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwxMDRWNDBhOCw4LDAsMCwwLTgtOEg1NmE4LDgsMCwwLDAtNS4zMSwxNEwxMDcsOTZINTZhOCw4LDAsMCwwLTgsOHY2NGE4LDgsMCwwLDAsMi4zNCw1LjY2bDcyLDcyQTgsOCwwLDAsMCwxMzYsMjQwVjE3Nmg2NGE4LDgsMCwwLDAsNS4zMS0xNEwxNDksMTEyaDUxQTgsOCwwLDAsMCwyMDgsMTA0Wm0tMjksNTZIMTI4YTgsOCwwLDAsMC04LDh2NTIuNjlsLTU2LTU2VjExMmg2MVptMTMtNjRIMTMxTDc3LDQ4SDE5MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FramerLogo";
export { I as FramerLogo };
