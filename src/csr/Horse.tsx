/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Horse";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTA0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxMDRabTkyLDI1LjUzQTEwOC4zLDEwOC4zLDAsMCwxLDEzMC4xOCwyMzZsLTIuMjUsMEExMDcuMzEsMTA3LjMxLDAsMCwxLDU2LDIwOC45NGExMiwxMiwwLDEsMSwxNi0xNy44OCw4MS40Miw4MS40MiwwLDAsMCwxNi4yLDExLjI2bDIxLjU0LTI5LjYyYy0yMC40LTctNDEuOTEtMy4zMy01NC40My0xLjIxYTM1Ljc5LDM1Ljc5LDAsMCwxLTM1LjI1LTE0LjQzYy0uMTYtLjIxLS4zMS0uNDMtLjQ1LS42NWwtMTMuNzgtMjJBMTIsMTIsMCwwLDEsOS40MywxMThMMTA4LDUzLjUxVjMyYTEyLDEyLDAsMCwxLDEyLTEyaDhBMTA4LDEwOCwwLDAsMSwyMzYsMTI5LjUzWm0tMjQtLjMzYTg0LDg0LDAsMCwwLTgwLTg1LjExVjYwYTEyLDEyLDAsMCwxLTUuNDMsMTBMMzIuNDEsMTMxLjYxbDcuMzEsMTEuNjhhMTIsMTIsMCwwLDAsMTEuNTgsNC41NGMxNi4yMy0yLjc1LDQ5LjQtOC4zNiw3OS42NCw4QTM2LDM2LDAsMCwwLDE2NCwxMjBhMTIsMTIsMCwwLDEsMjQsMCw2MC4wOSw2MC4wOSwwLDAsMS01My42NCw1OS42NmwtMjIuNDUsMzAuODdhODcuNTcsODcuNTcsMCwwLDAsMTcuOCwxLjQ1QTg0LjI5LDg0LjI5LDAsMCwwLDIxMiwxMjkuMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI5LjM3Yy0uNzIsNTEuNDgtNDIuNTcsOTMuNTktOTQuMDUsOTQuNjFhOTguMDgsOTguMDgsMCwwLDEtMzcuODEtNi42NkwxMjgsMTY4aDBjLTI2LjY0LTE2LTU3LjIzLTExLjMtNzQuNy04LjM0QTI0LDI0LDAsMCwxLDI5Ljc5LDE1MEwxNiwxMjgsMTIwLDY0VjMyaDhBOTYsOTYsMCwwLDEsMjI0LDEyOS4zN1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMzYsMTAwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDEzNiwxMDBabTk2LDI5LjQ4QTEwNC4yOSwxMDQuMjksMCwwLDEsMTMwLjEsMjMybC0yLjE3LDBhMTAzLjMyLDEwMy4zMiwwLDAsMS02OS4yNi0yNkE4LDgsMCwxLDEsNjkuMzQsMTk0YTg0LjcxLDg0LjcxLDAsMCwwLDIwLjEsMTMuMzdMMTE2LDE3MC44NGMtMjIuNzgtOS44My00Ny40Ny01LjY1LTYxLjQtMy4yOUEzMS44NCwzMS44NCwwLDAsMSwyMy4zLDE1NC43MmwtLjMtLjQzLTEzLjc4LTIyYTgsOCwwLDAsMSwyLjU5LTExLjA1TDExMiw1OS41M1YzMmE4LDgsMCwwLDEsOC04aDhBMTA0LDEwNCwwLDAsMSwyMzIsMTI5LjQ4Wm0tMTYtLjIyQTg4LDg4LDAsMCwwLDEyOCw0MFY2NGE4LDgsMCwwLDEtMy44MSw2LjgxTDI3LjA2LDEzMC41OWw5LjM2LDE1QTE1LjkyLDE1LjkyLDAsMCwwLDUyLDE1MS43N2MxNi0yLjcsNDguNzctOC4yNCw3OC4wNyw4LjE4QTQwLjA2LDQwLjA2LDAsMCwwLDE2OCwxMjBhOCw4LDAsMCwxLDE2LDAsNTYuMDcsNTYuMDcsMCwwLDEtNTEuOCw1NS44M2wtMjcuMTEsMzcuMjhBOTAuODksOTAuODksMCwwLDAsMTI5Ljc4LDIxNiw4OC4yOSw4OC4yOSwwLDAsMCwyMTYsMTI5LjI2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuMDUsNTVBMTAzLjI0LDEwMy4yNCwwLDAsMCwxMjgsMjRoLThhOCw4LDAsMCwwLTgsOFY1OS41M0wxMS44MSwxMjEuMTlhOCw4LDAsMCwwLTIuNTksMTEuMDVsMTMuNzgsMjIsLjMuNDNhMzEuODQsMzEuODQsMCwwLDAsMzEuMzQsMTIuODNjMTMuOTMtMi4zNiwzOC42Mi02LjU0LDYxLjQsMy4yOWwtMjYuNiwzNi41N0E4NC43MSw4NC43MSwwLDAsMSw2OS4zNCwxOTQsOCw4LDAsMSwwLDU4LjY3LDIwNmExMDMuMzIsMTAzLjMyLDAsMCwwLDY5LjI2LDI2bDIuMTcsMGExMDQsMTA0LDAsMCwwLDcyLTE3N1pNMTI0LDExMmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjQsMTEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsMTAwYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzNCwxMDBabTk2LDI5LjQ1QTEwMi4yOSwxMDIuMjksMCwwLDEsMTMwLjA2LDIzMGwtMi4xMywwQTEwMS4zMywxMDEuMzMsMCwwLDEsNjAsMjA0LjQ3YTYsNiwwLDEsMSw4LTguOTQsODcuMTIsODcuMTIsMCwwLDAsMjIuMDksMTQuMzlsMjktMzkuODljLTIzLjkzLTExLjM3LTUwLjE4LTYuOTMtNjQuOC00LjQ1YTI5Ljg0LDI5Ljg0LDAsMCwxLTI5LjM4LTEyLDMuNjIsMy42MiwwLDAsMS0uMjItLjMybC0xMy43OS0yMmE2LDYsMCwwLDEsMS45NS04LjI5TDExNCw2MC42NVYzMmE2LDYsMCwwLDEsNi02aDhBMTAyLDEwMiwwLDAsMSwyMzAsMTI5LjQ1Wm0tMTItLjE3QTkwLDkwLDAsMCwwLDEyOCwzOGgtMlY2NGE2LDYsMCwwLDEtMi44Niw1LjExTDI0LjI5LDEyOS45NGwxMC40NywxNi43NGExNy45MSwxNy45MSwwLDAsMCwxNy41NCw3LjA2YzE1LjgyLTIuNjcsNDguNDItOC4xOCw3Ny4yMyw4LjIyQTQyLDQyLDAsMCwwLDE3MCwxMjBhNiw2LDAsMCwxLDEyLDAsNTQuMDYsNTQuMDYsMCwwLDEtNTAuODcsNTMuOWwtMjkuMzYsNDAuMzdBOTIuODMsOTIuODMsMCwwLDAsMTI5LjgyLDIxOCw5MC4yOCw5MC4yOCwwLDAsMCwyMTgsMTI5LjI4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTAwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDEzNiwxMDBabTk2LDI5LjQ4QTEwNC4yOSwxMDQuMjksMCwwLDEsMTMwLjEsMjMybC0yLjE3LDBhMTAzLjMyLDEwMy4zMiwwLDAsMS02OS4yNi0yNkE4LDgsMCwxLDEsNjkuMzQsMTk0YTg0LjcxLDg0LjcxLDAsMCwwLDIwLjEsMTMuMzdMMTE2LDE3MC44NGMtMjIuNzgtOS44My00Ny40Ny01LjY1LTYxLjQtMy4yOUEzMS44NCwzMS44NCwwLDAsMSwyMy4zLDE1NC43MmwtLjMtLjQzLTEzLjc4LTIyYTgsOCwwLDAsMSwyLjU5LTExLjA1TDExMiw1OS41M1YzMmE4LDgsMCwwLDEsOC04aDhBMTA0LDEwNCwwLDAsMSwyMzIsMTI5LjQ4Wm0tMTYtLjIyQTg4LDg4LDAsMCwwLDEyOCw0MFY2NGE4LDgsMCwwLDEtMy44MSw2LjgxTDI3LjA2LDEzMC41OWw5LjM2LDE1QTE1LjkyLDE1LjkyLDAsMCwwLDUyLDE1MS43N2MxNi0yLjcsNDguNzctOC4yNCw3OC4wNyw4LjE4QTQwLjA2LDQwLjA2LDAsMCwwLDE2OCwxMjBhOCw4LDAsMCwxLDE2LDAsNTYuMDcsNTYuMDcsMCwwLDEtNTEuOCw1NS44M2wtMjcuMTEsMzcuMjhBOTAuODksOTAuODksMCwwLDAsMTI5Ljc4LDIxNiw4OC4yOSw4OC4yOSwwLDAsMCwyMTYsMTI5LjI2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIsMTAwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEzMiwxMDBabTk2LDI5LjQyQTEwMC4yOSwxMDAuMjksMCwwLDEsMTMwLDIyOGwtMi4wOSwwYTk5LjM3LDk5LjM3LDAsMCwxLTY2LjYtMjUsNCw0LDAsMSwxLDUuMzQtNiw4OS4wOCw4OS4wOCwwLDAsMCwyNC4wOSwxNS4zOWwzMS4zNS00My4xMWMtMjUuMTYtMTMtNTMuOTUtOC4xLTY4LjE0LTUuN2EyNy44NSwyNy44NSwwLDAsMS0yNy40My0xMS4yMmMtLjA1LS4wNy0uMS0uMTQtLjE0LS4yMWwtMTMuNzktMjJhMy45NCwzLjk0LDAsMCwxLS41LTMsNCw0LDAsMCwxLDEuNzktMi41TDExNiw2MS43NlYzMmE0LDQsMCwwLDEsNC00aDhBMTAwLDEwMCwwLDAsMSwyMjgsMTI5LjQyWm0tMzQuNDgtNjZBOTEuMzUsOTEuMzUsMCwwLDAsMTI4LDM2aC00VjY0YTQsNCwwLDAsMS0xLjksMy40MUwyMS41MywxMjkuMjlsMTEuNTgsMTguNTJhMTkuODksMTkuODksMCwwLDAsMTkuNTIsNy45MWMxNS42OC0yLjY2LDQ4LjA4LTguMTMsNzYuMzksOC4yNWE0NCw0NCwwLDAsMCw0My00NCw0LDQsMCwwLDEsOCwwQTUyLjA2LDUyLjA2LDAsMCwxLDEzMC4wNywxNzJsLTMxLjU2LDQzLjRBOTQuNTQsOTQuNTQsMCwwLDAsMTI5Ljg2LDIyMCw5Miw5MiwwLDAsMCwxOTMuNTEsNjMuNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Horse";
export { I as Horse };
