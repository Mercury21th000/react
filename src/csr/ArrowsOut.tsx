/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowsOut";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDhWOTZhMTIsMTIsMCwwLDEtMjQsMFY3N2wtMzUuNTEsMzUuNTJhMTIsMTIsMCwwLDEtMTctMTdMMTc5LDYwSDE2MGExMiwxMiwwLDAsMSwwLTI0aDQ4QTEyLDEyLDAsMCwxLDIyMCw0OFpNOTUuNTEsMTQzLjUxLDYwLDE3OVYxNjBhMTIsMTIsMCwwLDAtMjQsMHY0OGExMiwxMiwwLDAsMCwxMiwxMkg5NmExMiwxMiwwLDAsMCwwLTI0SDc3bDM1LjUyLTM1LjUxYTEyLDEyLDAsMCwwLTE3LTE3Wk0yMDgsMTQ4YTEyLDEyLDAsMCwwLTEyLDEydjE5bC0zNS41MS0zNS41MmExMiwxMiwwLDAsMC0xNywxN0wxNzksMTk2SDE2MGExMiwxMiwwLDAsMCwwLDI0aDQ4YTEyLDEyLDAsMCwwLDEyLTEyVjE2MEExMiwxMiwwLDAsMCwyMDgsMTQ4Wk03Nyw2MEg5NmExMiwxMiwwLDAsMCwwLTI0SDQ4QTEyLDEyLDAsMCwwLDM2LDQ4Vjk2YTEyLDEyLDAsMCwwLDI0LDBWNzdsMzUuNTEsMzUuNTJhMTIsMTIsMCwwLDAsMTctMTdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWMjA4SDQ4VjQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0OFY5NmE4LDgsMCwwLDEtMTYsMFY2Ny4zMWwtNDIuMzQsNDIuMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE4OC42OSw1NkgxNjBhOCw4LDAsMCwxLDAtMTZoNDhBOCw4LDAsMCwxLDIxNiw0OFpNOTguMzQsMTQ2LjM0LDU2LDE4OC42OVYxNjBhOCw4LDAsMCwwLTE2LDB2NDhhOCw4LDAsMCwwLDgsOEg5NmE4LDgsMCwwLDAsMC0xNkg2Ny4zMWw0Mi4zNS00Mi4zNGE4LDgsMCwwLDAtMTEuMzItMTEuMzJaTTIwOCwxNTJhOCw4LDAsMCwwLTgsOHYyOC42OWwtNDIuMzQtNDIuMzVhOCw4LDAsMCwwLTExLjMyLDExLjMyTDE4OC42OSwyMDBIMTYwYTgsOCwwLDAsMCwwLDE2aDQ4YTgsOCwwLDAsMCw4LThWMTYwQTgsOCwwLDAsMCwyMDgsMTUyWk02Ny4zMSw1Nkg5NmE4LDgsMCwwLDAsMC0xNkg0OGE4LDgsMCwwLDAtOCw4Vjk2YTgsOCwwLDAsMCwxNiwwVjY3LjMxbDQyLjM0LDQyLjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDkuNjYsMTQ2LjM0YTgsOCwwLDAsMSwwLDExLjMyTDgzLjMxLDE4NGwxOC4zNSwxOC4zNEE4LDgsMCwwLDEsOTYsMjE2SDQ4YTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSwxMy42Ni01LjY2TDcyLDE3Mi42OWwyNi4zNC0yNi4zNUE4LDgsMCwwLDEsMTA5LjY2LDE0Ni4zNFpNODMuMzEsNzJsMTguMzUtMTguMzRBOCw4LDAsMCwwLDk2LDQwSDQ4YTgsOCwwLDAsMC04LDhWOTZhOCw4LDAsMCwwLDEzLjY2LDUuNjZMNzIsODMuMzFsMjYuMzQsMjYuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWk0yMDgsNDBIMTYwYTgsOCwwLDAsMC01LjY2LDEzLjY2TDE3Mi42OSw3MiwxNDYuMzQsOTguMzRhOCw4LDAsMCwwLDExLjMyLDExLjMyTDE4NCw4My4zMWwxOC4zNCwxOC4zNUE4LDgsMCwwLDAsMjE2LDk2VjQ4QTgsOCwwLDAsMCwyMDgsNDBabTMuMDYsMTEyLjYxYTgsOCwwLDAsMC04LjcyLDEuNzNMMTg0LDE3Mi42OWwtMjYuMzQtMjYuMzVhOCw4LDAsMCwwLTExLjMyLDExLjMyTDE3Mi42OSwxODRsLTE4LjM1LDE4LjM0QTgsOCwwLDAsMCwxNjAsMjE2aDQ4YTgsOCwwLDAsMCw4LThWMTYwQTgsOCwwLDAsMCwyMTEuMDYsMTUyLjYxWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsNDhWOTZhNiw2LDAsMCwxLTEyLDBWNjIuNDhsLTQ1Ljc2LDQ1Ljc2YTYsNiwwLDAsMS04LjQ4LTguNDhMMTkzLjUyLDU0SDE2MGE2LDYsMCwwLDEsMC0xMmg0OEE2LDYsMCwwLDEsMjE0LDQ4Wk05OS43NiwxNDcuNzYsNTQsMTkzLjUyVjE2MGE2LDYsMCwwLDAtMTIsMHY0OGE2LDYsMCwwLDAsNiw2SDk2YTYsNiwwLDAsMCwwLTEySDYyLjQ4bDQ1Ljc2LTQ1Ljc2YTYsNiwwLDAsMC04LjQ4LTguNDhaTTIwOCwxNTRhNiw2LDAsMCwwLTYsNnYzMy41MmwtNDUuNzYtNDUuNzZhNiw2LDAsMCwwLTguNDgsOC40OEwxOTMuNTIsMjAySDE2MGE2LDYsMCwwLDAsMCwxMmg0OGE2LDYsMCwwLDAsNi02VjE2MEE2LDYsMCwwLDAsMjA4LDE1NFpNNjIuNDgsNTRIOTZhNiw2LDAsMCwwLDAtMTJINDhhNiw2LDAsMCwwLTYsNlY5NmE2LDYsMCwwLDAsMTIsMFY2Mi40OGw0NS43Niw0NS43NmE2LDYsMCwwLDAsOC40OC04LjQ4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWOTZhOCw4LDAsMCwxLTE2LDBWNjcuMzFsLTQyLjM0LDQyLjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxODguNjksNTZIMTYwYTgsOCwwLDAsMSwwLTE2aDQ4QTgsOCwwLDAsMSwyMTYsNDhaTTk4LjM0LDE0Ni4zNCw1NiwxODguNjlWMTYwYTgsOCwwLDAsMC0xNiwwdjQ4YTgsOCwwLDAsMCw4LDhIOTZhOCw4LDAsMCwwLDAtMTZINjcuMzFsNDIuMzUtNDIuMzRhOCw4LDAsMCwwLTExLjMyLTExLjMyWk0yMDgsMTUyYTgsOCwwLDAsMC04LDh2MjguNjlsLTQyLjM0LTQyLjM1YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwxODguNjksMjAwSDE2MGE4LDgsMCwwLDAsMCwxNmg0OGE4LDgsMCwwLDAsOC04VjE2MEE4LDgsMCwwLDAsMjA4LDE1MlpNNjcuMzEsNTZIOTZhOCw4LDAsMCwwLDAtMTZINDhhOCw4LDAsMCwwLTgsOFY5NmE4LDgsMCwwLDAsMTYsMFY2Ny4zMWw0Mi4zNCw0Mi4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNDhWOTZhNCw0LDAsMCwxLTgsMFY1Ny42NmwtNDkuMTcsNDkuMTdhNCw0LDAsMCwxLTUuNjYtNS42NkwxOTguMzQsNTJIMTYwYTQsNCwwLDAsMSwwLThoNDhBNCw0LDAsMCwxLDIxMiw0OFpNMTAxLjE3LDE0OS4xNyw1MiwxOTguMzRWMTYwYTQsNCwwLDAsMC04LDB2NDhhNCw0LDAsMCwwLDQsNEg5NmE0LDQsMCwwLDAsMC04SDU3LjY2bDQ5LjE3LTQ5LjE3YTQsNCwwLDAsMC01LjY2LTUuNjZaTTIwOCwxNTZhNCw0LDAsMCwwLTQsNHYzOC4zNGwtNDkuMTctNDkuMTdhNCw0LDAsMCwwLTUuNjYsNS42NkwxOTguMzQsMjA0SDE2MGE0LDQsMCwwLDAsMCw4aDQ4YTQsNCwwLDAsMCw0LTRWMTYwQTQsNCwwLDAsMCwyMDgsMTU2Wk01Ny42Niw1Mkg5NmE0LDQsMCwwLDAsMC04SDQ4YTQsNCwwLDAsMC00LDRWOTZhNCw0LDAsMCwwLDgsMFY1Ny42Nmw0OS4xNyw0OS4xN2E0LDQsMCwwLDAsNS42Ni01LjY2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowsOut";
export { I as ArrowsOut };
