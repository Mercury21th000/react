/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Plug";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsNjYuMzRhOCw4LDAsMCwwLTExLjMyLDBMMTkyLDEwMC42OSwxNTUuMzEsNjRsMzQuMzUtMzQuMzRhOCw4LDAsMSwwLTExLjMyLTExLjMyTDE0NCw1Mi42OSwxMTcuNjYsMjYuMzRhOCw4LDAsMCwwLTExLjMyLDExLjMyTDExMi42OSw0NGwtNTMsNTNhNDAsNDAsMCwwLDAsMCw1Ni41N2wxNS43MSwxNS43MUwyNi4zNCwyMTguMzRhOCw4LDAsMCwwLDExLjMyLDExLjMybDQ5LjA5LTQ5LjA5LDE1LjcxLDE1LjcxYTQwLDQwLDAsMCwwLDU2LjU3LDBsNTMtNTMsNi4zNCw2LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMkwyMDMuMzEsMTEybDM0LjM1LTM0LjM0QTgsOCwwLDAsMCwyMzcuNjYsNjYuMzRaTTE0Ny43MiwxODVhMjQsMjQsMCwwLDEtMzMuOTUsMEw3MSwxNDIuMjNhMjQsMjQsMCwwLDEsMC0zMy45NWw1My01M0wyMDAuNjksMTMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsNjkuMTdhNCw0LDAsMCwwLTUuNjYsMEwxOTIsMTA2LjM0LDE0OS42Niw2NGwzNy4xNy0zNy4xN2E0LDQsMCwxLDAtNS42Ni01LjY2TDE0NCw1OC4zNCwxMTQuODMsMjkuMTdhNCw0LDAsMCwwLTUuNjYsNS42NkwxMTguMzQsNDQsNjIuNTQsOTkuOGEzNi4wNSwzNi4wNSwwLDAsMCwwLDUwLjkxbDE4LjU1LDE4LjU0TDI5LjE3LDIyMS4xN2E0LDQsMCwwLDAsNS42Niw1LjY2bDUxLjkyLTUxLjkyLDE4LjU0LDE4LjU1YTM2LjA2LDM2LjA2LDAsMCwwLDUwLjkxLDBsNTUuOC01NS44LDkuMTcsOS4xN2E0LDQsMCwwLDAsNS42Ni01LjY2TDE5Ny42NiwxMTJsMzcuMTctMzcuMTdBNCw0LDAsMCwwLDIzNC44Myw2OS4xN1pNMTUwLjU0LDE4Ny44YTI4LDI4LDAsMCwxLTM5LjU5LDBMNjguMiwxNDUuMDVhMjgsMjgsMCwwLDEsMC0zOS41OUwxMjQsNDkuNjYsMjA2LjM0LDEzMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsNjcuNzZhNiw2LDAsMCwwLTguNDgsMEwxOTIsMTAzLjUxLDE1Mi40OSw2NGwzNS43NS0zNS43NmE2LDYsMCwwLDAtOC40OC04LjQ4TDE0NCw1NS41MSwxMTYuMjQsMjcuNzZhNiw2LDAsMSwwLTguNDgsOC40OEwxMTUuNTEsNDQsNjEuMTMsOTguMzhhMzgsMzgsMCwwLDAsMCw1My43NWwxNy4xMywxNy4xMi01MC41LDUwLjUxYTYsNiwwLDEsMCw4LjQ4LDguNDhsNTAuNTEtNTAuNSwxNy4xMywxNy4xM2EzOCwzOCwwLDAsMCw1My43NCwwTDIxMiwxNDAuNDlsNy43Niw3Ljc1YTYsNiwwLDAsMCw4LjQ4LTguNDhMMjAwLjQ5LDExMmwzNS43NS0zNS43NkE2LDYsMCwwLDAsMjM2LjI0LDY3Ljc2Wk0xNDkuMTMsMTg2LjM4YTI2LDI2LDAsMCwxLTM2Ljc3LDBMNjkuNjIsMTQzLjY0YTI2LDI2LDAsMCwxLDAtMzYuNzdMMTI0LDUyLjQ5LDIwMy41MSwxMzJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksNjMuNTFhMTIsMTIsMCwwLDAtMTcsMEwxOTIsOTUsMTYxLDY0bDMxLjUyLTMxLjUxYTEyLDEyLDAsMCwwLTE3LTE3TDE0NCw0NywxMjAuNDksMjMuNTFhMTIsMTIsMCwxLDAtMTcsMTdMMTA3LDQ0LDU2Ljg5LDk0LjE0YTQ0LDQ0LDAsMCwwLDAsNjIuMjNsMTIuODgsMTIuODhMMjMuNTEsMjE1LjUxYTEyLDEyLDAsMCwwLDE3LDE3bDQ2LjI2LTQ2LjI2LDEyLjg4LDEyLjg4YTQ0LDQ0LDAsMCwwLDYyLjIzLDBMMjEyLDE0OWwzLjUxLDMuNTJhMTIsMTIsMCwwLDAsMTctMTdMMjA5LDExMmwzMS41Mi0zMS41MUExMiwxMiwwLDAsMCwyNDAuNDksNjMuNTFabS05NS42LDExOC42M2EyMCwyMCwwLDAsMS0yOC4yOSwwTDczLjg2LDEzOS40YTIwLDIwLDAsMCwxLDAtMjguMjlMMTI0LDYxbDcxLDcxWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsNzcuNjYsMjAzLjMxLDExMmwyNi4zNSwyNi4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMjEyLDE0My4zMWwtNTMsNTNhNDAsNDAsMCwwLDEtNTYuNTcsMEw4Ni43NSwxODAuNTcsMzcuNjYsMjI5LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw0OS4wOS00OS4wOUw1OS43MiwxNTMuNTRhNDAsNDAsMCwwLDEsMC01Ni41N2w1My01My02LjM1LTYuMzRhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE0NCw1Mi42OWwzNC4zNC0zNC4zNWE4LDgsMCwxLDEsMTEuMzIsMTEuMzJMMTU1LjMxLDY0LDE5MiwxMDAuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTMybC01OC42Myw1OC42M2EzMiwzMiwwLDAsMS00NS4yNSwwTDY1LjM3LDE0Ny44OGEzMiwzMiwwLDAsMSwwLTQ1LjI1TDEyNCw0NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzcuNjYsNjYuMzRhOCw4LDAsMCwwLTExLjMyLDBMMTkyLDEwMC42OSwxNTUuMzEsNjRsMzQuMzUtMzQuMzRhOCw4LDAsMSwwLTExLjMyLTExLjMyTDE0NCw1Mi42OSwxMTcuNjYsMjYuMzRhOCw4LDAsMCwwLTExLjMyLDExLjMyTDExMi42OSw0NGwtNTMsNTNhNDAsNDAsMCwwLDAsMCw1Ni41N2wxNS43MSwxNS43MUwyNi4zNCwyMTguMzRhOCw4LDAsMCwwLDExLjMyLDExLjMybDQ5LjA5LTQ5LjA5LDE1LjcxLDE1LjcxYTQwLDQwLDAsMCwwLDU2LjU3LDBsNTMtNTMsNi4zNCw2LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMkwyMDMuMzEsMTEybDM0LjM1LTM0LjM0QTgsOCwwLDAsMCwyMzcuNjYsNjYuMzRaTTE0Ny43MiwxODVhMjQsMjQsMCwwLDEtMzMuOTUsMEw3MSwxNDIuMjNhMjQsMjQsMCwwLDEsMC0zMy45NWw1My01M0wyMDAuNjksMTMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Plug";
export { I as Plug };
