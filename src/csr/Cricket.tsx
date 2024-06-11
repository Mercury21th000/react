/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Cricket";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMTUsNzguNTQsMTkzLjQ2LDI1Ljg1YTIwLDIwLDAsMCwwLTI4LjI4LDBMNTcuODYsMTMzLjE3YTIwLDIwLDAsMCwwLDAsMjguMjhsMTcuODYsMTcuODYtNDQuMiw0NC4yYTEyLDEyLDAsMCwwLDE3LDE3bDQ0LjItNDQuMjEsMTcuODYsMTcuODZhMjAsMjAsMCwwLDAsMjguMjgsMEwyNDYuMTUsMTA2LjgyQTIwLDIwLDAsMCwwLDI0Ni4xNSw3OC41NFpNMTI0LjY5LDE5NC4zNGwtMTUtMTUsMjYuODMtMjYuODNhMTIsMTIsMCwwLDAtMTctMTdMOTIuNjksMTYyLjM0bC0xNS0xNUwxMDksMTE2aDQ3djQ3Wk0xODAsMTM5VjEwNGExMiwxMiwwLDAsMC0xMi0xMkgxMzNsNDYuMzQtNDYuMzQsNDcsNDdaTTYwLDkyQTMyLDMyLDAsMSwwLDI4LDYwLDMyLDMyLDAsMCwwLDYwLDkyWm0wLTQwYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDYwLDUyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTA0djY0bC0zNy42NiwzNy42NmE4LDgsMCwwLDEtMTEuMzEsMEw2Ni4zNCwxNTNhOCw4LDAsMCwxLDAtMTEuMzFMMTA0LDEwNFpNODAsNjBBMjAsMjAsMCwxLDAsNjAsODAsMjAsMjAsMCwwLDAsODAsNjBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQzLjMxLDgxLjM3LDE5MC42MywyOC42OWExNiwxNiwwLDAsMC0yMi42MywwTDYwLjY5LDEzNmExNiwxNiwwLDAsMCwwLDIyLjYzbDIwLjY4LDIwLjY4LTQ3LDQ3YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmw0Ny00NywyMC42OCwyMC42OGExNiwxNiwwLDAsMCwyMi42MywwTDI0My4zMSwxMDRhMTYsMTYsMCwwLDAsMC0yMi42M1pNMTI0LjY5LDIwMCwxMDQsMTc5LjMxbDI5LjY2LTI5LjY1YTgsOCwwLDAsMC0xMS4zMi0xMS4zMkw5Mi42OSwxNjgsNzIsMTQ3LjMxLDEwNy4zMSwxMTJIMTYwdjUyLjY5Wk0yMzIsOTIuNjlsLTU2LDU2VjEwNGE4LDgsMCwwLDAtOC04SDEyMy4zMWw1Ni01NkwyMzIsOTIuNjhaTTYwLDg4QTI4LDI4LDAsMSwwLDMyLDYwLDI4LDI4LDAsMCwwLDYwLDg4Wm0wLTQwQTEyLDEyLDAsMSwxLDQ4LDYwLDEyLDEyLDAsMCwxLDYwLDQ4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsODEuMzcsMTkwLjYzLDI4LjY5YTE2LDE2LDAsMCwwLTIyLjYzLDBMNjAuNjksMTM2YTE2LDE2LDAsMCwwLDAsMjIuNjNsMjAuNjgsMjAuNjgtNDcsNDdhOCw4LDAsMCwwLDExLjMyLDExLjMybDQ3LTQ3LDIwLjY4LDIwLjY4YTE2LDE2LDAsMCwwLDIyLjYzLDBMMjQzLjMxLDEwNGExNiwxNiwwLDAsMCwwLTIyLjYzWk0xMjQuNjksMjAwLDEwNCwxNzkuMzFsMjkuNjYtMjkuNjVhOCw4LDAsMCwwLTExLjMyLTExLjMyTDkyLjY5LDE2OCw3MiwxNDcuMzEsMTA3LjMxLDExMkgxNjB2NTIuNjlaTTMyLDYwQTI4LDI4LDAsMSwxLDYwLDg4LDI4LDI4LDAsMCwxLDMyLDYwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuOSw4Mi43OSwxODkuMjEsMzAuMWExNCwxNCwwLDAsMC0xOS43OSwwTDYyLjEsMTM3LjQyYTE0LDE0LDAsMCwwLDAsMTkuNzlsMjIuMSwyMi4xTDM1Ljc2LDIyNy43NmE2LDYsMCwxLDAsOC40OCw4LjQ4TDkyLjY5LDE4Ny44bDIyLjEsMjIuMWExNCwxNCwwLDAsMCwxOS43OSwwTDI0MS45LDEwMi41OGExNCwxNCwwLDAsMCwwLTE5Ljc5Wk0xMjYuMSwyMDEuNDJhMiwyLDAsMCwxLTIuODMsMGwtMjIuMS0yMi4xMSwzMS4wNy0zMS4wN2E2LDYsMCwwLDAtOC40OC04LjQ4TDkyLjY5LDE3MC44M2wtMjIuMTEtMjIuMWEyLDIsMCwwLDEsMC0yLjgzbDM1LjktMzUuOUgxNjJ2NTUuNTJaTTIzMy40Miw5NC4xLDE3NCwxNTMuNTJWMTA0YTYsNiwwLDAsMC02LTZIMTE4LjQ4TDE3Ny45LDM4LjU4YTIsMiwwLDAsMSwyLjgzLDBsNTIuNjksNTIuNjlBMiwyLDAsMCwxLDIzMy40Miw5NC4xWk02MCw4NkEyNiwyNiwwLDEsMCwzNCw2MCwyNiwyNiwwLDAsMCw2MCw4NlptMC00MEExNCwxNCwwLDEsMSw0Niw2MCwxNCwxNCwwLDAsMSw2MCw0NloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsODEuMzcsMTkwLjYzLDI4LjY5YTE2LDE2LDAsMCwwLTIyLjYzLDBMNjAuNjksMTM2YTE2LDE2LDAsMCwwLDAsMjIuNjNsMjAuNjgsMjAuNjgtNDcsNDdhOCw4LDAsMCwwLDExLjMyLDExLjMybDQ3LTQ3LDIwLjY4LDIwLjY4YTE2LDE2LDAsMCwwLDIyLjYzLDBMMjQzLjMxLDEwNGExNiwxNiwwLDAsMCwwLTIyLjYzWk0xMjQuNjksMjAwLDEwNCwxNzkuMzFsMjkuNjYtMjkuNjVhOCw4LDAsMCwwLTExLjMyLTExLjMyTDkyLjY5LDE2OCw3MiwxNDcuMzEsMTA3LjMxLDExMkgxNjB2NTIuNjlaTTIzMiw5Mi42OWwtNTYsNTZWMTA0YTgsOCwwLDAsMC04LThIMTIzLjMxbDU2LTU2TDIzMiw5Mi42OFpNNjAsODhBMjgsMjgsMCwxLDAsMzIsNjAsMjgsMjgsMCwwLDAsNjAsODhabTAtNDBBMTIsMTIsMCwxLDEsNDgsNjAsMTIsMTIsMCwwLDEsNjAsNDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksODQuMiwxODcuOCwzMS41MWExMiwxMiwwLDAsMC0xNywwTDYzLjUyLDEzOC44M2ExMiwxMiwwLDAsMCwwLDE3TDg3LDE3OS4zMSwzNy4xNywyMjkuMTdhNCw0LDAsMCwwLDUuNjYsNS42Nkw5Mi42OSwxODVsMjMuNTEsMjMuNTFhMTIsMTIsMCwwLDAsMTcsMEwyNDAuNDksMTAxLjE3QTEyLDEyLDAsMCwwLDI0MC40OSw4NC4yWm0tMTEzLDExOC42M2E0LDQsMCwwLDEtNS42NiwwTDk4LjM0LDE3OS4zMWwzMi40OS0zMi40OGE0LDQsMCwwLDAtNS42Ni01LjY2TDkyLjY5LDE3My42Niw2OS4xNywxNTAuMTRhNCw0LDAsMCwxLDAtNS42NkwxMDUuNjYsMTA4SDE2NHY1OC4zNFpNMjM0LjgzLDk1LjUxLDE3MiwxNTguMzRWMTA0YTQsNCwwLDAsMC00LTRIMTEzLjY2bDYyLjgzLTYyLjgzYTQsNCwwLDAsMSw1LjY2LDBsNTIuNjgsNTIuNjhBNCw0LDAsMCwxLDIzNC44Myw5NS41MVpNNjAsODRBMjQsMjQsMCwxLDAsMzYsNjAsMjQsMjQsMCwwLDAsNjAsODRabTAtNDBBMTYsMTYsMCwxLDEsNDQsNjAsMTYsMTYsMCwwLDEsNjAsNDRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Cricket";
export { I as Cricket };
