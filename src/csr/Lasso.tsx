/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Lasso";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuODMsNTYuNTNDMTg2LjMyLDQzLjI5LDE1OCwzNiwxMjgsMzZTNjkuNjgsNDMuMjksNDguMTcsNTYuNTNDMjQuODUsNzAuODksMTIsOTAuNiwxMiwxMTJzMTIuODUsNDEuMTQsMzYuMTcsNTUuNWMxOC40OCwxMS4zNyw0MiwxOC4zNCw2Ny4yOSwyMC4wOC0yLDExLjA3LTkuMDksMTcuNzUtMTUuMjIsMjEuNTQtMTMuNDgsOC4zMS0zMi43NSw5LjE4LTQ2Ljg2LDIuMUExMiwxMiwwLDEsMCw0Mi42MiwyMzIuN2E3MS43Niw3MS43NiwwLDAsMCwzMiw3LjMsNzMuMiw3My4yLDAsMCwwLDM4LjE4LTEwLjQzYzE1LjQ1LTkuNTQsMjUtMjQuNTgsMjYuODMtNDEuOSwyNS42LTEuNjQsNDkuNDctOC42NSw2OC4xNi0yMC4xNUMyMzEuMTUsMTUzLjE2LDI0NCwxMzMuNDUsMjQ0LDExMlMyMzEuMTUsNzAuODksMjA3LjgzLDU2LjUzWm0tMTM0LjQ0LDk3YTIxLDIxLDAsMCwxLDIwLjE2LTkuMzVjMTAuMzYsMS4zOSwxNi41NCw5LjQzLDE5LjcyLDE5LjEzQTEzNS4zLDEzNS4zLDAsMCwxLDczLjM5LDE1My41NlptNjQuODcsMTAuMTRhNjEuODQsNjEuODQsMCwwLDAtMTAuNzYtMjQuODIsNDYuMDgsNDYuMDgsMCwwLDAtMzAuNzUtMTguNDZjLTE4LTIuNDEtMzQuNTIsNS44OS00NC4xLDIxQzQyLjIsMTMzLDM2LDEyMi44NCwzNiwxMTJjMC0yOC4xOSw0Mi4xMy01Miw5Mi01MnM5MiwyMy44Miw5Miw1MkMyMjAsMTM4LjI2LDE4My41MSwxNjAuNzEsMTM4LjI2LDE2My43WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTEyYzAsMzUuMzUtNDYuNTYsNjQtMTA0LDY0UzI0LDE0Ny4zNSwyNCwxMTIsNzAuNTYsNDgsMTI4LDQ4LDIzMiw3Ni42NSwyMzIsMTEyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwNS43Myw1OS45M0MxODQuODUsNDcuMDgsMTU3LjI0LDQwLDEyOCw0MFM3MS4xNSw0Ny4wOCw1MC4yNyw1OS45M0MyOC4xNyw3My41MiwxNiw5MiwxNiwxMTJTMjguMTcsMTUwLjQ0LDUwLjI3LDE2NGMxOSwxMS42Nyw0My40OSwxOC41Niw2OS43MywxOS43M3YwYTM3LjM1LDM3LjM1LDAsMCwxLTE4LjU4LDMzYy0xNC42NCw4Ljg2LTM0LjYyLDkuNTItNDkuNzIsMS42NGE4LDgsMCwxLDAtNy40LDE0LjE4QTY2LjQsNjYuNCwwLDAsMCw3NSwyNDBhNjcuMzEsNjcuMzEsMCwwLDAsMzQuNzQtOS41YzE3LTEwLjI3LDI2LjI5LTI2Ljg2LDI2LjI5LTQ2Ljd2MGMyNi4yNC0xLjE3LDUwLjc2LTguMDYsNjkuNzMtMTkuNzNDMjI3LjgzLDE1MC40NCwyNDAsMTMyLDI0MCwxMTJTMjI3LjgzLDczLjUyLDIwNS43Myw1OS45M1pNNjcuNDEsMTU1LjE4YzUuMjQtOS41NSwxNS40NS0xMiwyMy41My0xMSwxMC45LDEuNDIsMjEuODYsOS4xMywyNi42MSwyMy40MkM5OS4xMSwxNjYuNDUsODEuODUsMTYyLjE2LDY3LjQxLDE1NS4xOFptMTI5Ljk0LTQuNzdjLTE2Ljk1LDEwLjQzLTM5LjE3LDE2LjUzLTYzLjEzLDE3LjQzYTU0LjM3LDU0LjM3LDAsMCwwLTExLjM5LTIzLjA3QTQ3LjE3LDQ3LjE3LDAsMCwwLDkzLDEyOC4zNWMtMTctMi4yLTMxLjcyLDUuMTEtMzkuMzgsMTguN0MzOS42NCwxMzcsMzIsMTI0LjczLDMyLDExMmMwLTE0LjIxLDkuNDctMjcuODYsMjYuNjUtMzguNDNDNzcuMDUsNjIuMjMsMTAxLjY4LDU2LDEyOCw1NlMxNzksNjIuMjMsMTk3LjM1LDczLjU1QzIxNC41Myw4NC4xMiwyMjQsOTcuNzcsMjI0LDExMlMyMTQuNTMsMTM5Ljg0LDE5Ny4zNSwxNTAuNDFaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05My40MywxMzYuMTFhMTcuMTQsMTcuMTQsMCwwLDAtMTUuMzUsNi4xYzkuMzEsNi41NiwyMi41MSwxMS4zMywzNy40MywxMy4wN0MxMTAuNDEsMTQzLjMzLDEwMS43MiwxMzcsOTMuNDMsMTM2LjExWiIvPjxwYXRoIGQ9Ik0yMjQsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDEyNy42NWE0LDQsMCwwLDEtMy4yMy02LjM0YzcuNS0xMC4yMywxMS41OC0yMy4yNCwxMS41OC0zNy44NCwwLTIuNzktLjEzLTUuNDYtLjM1LTguMDVDMTc2Ljc5LDE2OS4zMywyMDgsMTQ3LjQ3LDIwOCwxMjBjMC0yOS4xNS0zNS4xNC01Mi04MC01MlM0OCw5MC44NCw0OCwxMjBjMCwyNy4zMSwzMC44Miw0OS4wNyw3MS41OCw1MS43M2E3Nyw3NywwLDAsMSwuNDIsOC4wOWMwLDE3LjYyLTcuNjUsMzEuOTUtMjEsMzkuMzJBMzguNzcsMzguNzcsMCwwLDEsNzkuMjcsMjI0SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDQ4LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhabS0zMiw3MmMwLTE5LjUxLTI5LjMxLTM2LTY0LTM2cy02NCwxNi40OC02NCwzNmEyMS4yOSwyMS4yOSwwLDAsMCwzLDEwLjYzQTMzLjY1LDMzLjY1LDAsMCwxLDk1LjE2LDEyMC4yYzE1LDEuNjMsMzAuODQsMTMuNCwzNy41NCwzNS42OEMxNjUuMywxNTQuNDcsMTkyLDEzOC42MiwxOTIsMTIwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuNjgsNjEuNjNDMTg0LjExLDQ5LDE1Ni44OCw0MiwxMjgsNDJTNzEuODksNDksNTEuMzIsNjEuNjNDMjkuODMsNzQuODUsMTgsOTIuNzMsMTgsMTEyczExLjgzLDM3LjEzLDMzLjMyLDUwLjM1QzcwLjQ1LDE3NC4xLDk1LjM1LDE4MSwxMjIsMTgxLjg1YzAsLjY0LDAsMS4yOCwwLDEuOTQsMCwxNC43Ni02Ljk0LDI3LjEtMTkuNTQsMzQuNzMtMTUuMjIsOS4yMi0zNiw5LjktNTEuNjgsMS43MWE2LDYsMCwxLDAtNS41NiwxMC42M0E2NC40NSw2NC40NSwwLDAsMCw3NSwyMzhhNjUuMjQsNjUuMjQsMCwwLDAsMzMuNy05LjIyYzE2LjM0LTkuODksMjUuMzMtMjUuODcsMjUuMzMtNDUsMC0uNjUsMC0xLjI5LDAtMS45NCwyNi42NS0uODksNTEuNTctNy43NCw3MC43Mi0xOS41MkMyMjYuMTcsMTQ5LjExLDIzOCwxMzEuMjMsMjM4LDExMlMyMjYuMTcsNzQuODUsMjA0LjY4LDYxLjYzWm0tMTQwLDk0LjQ2YzUuMzItMTIsMTcuMi0xNS4wNywyNi40OC0xMy44NywxMi4yOCwxLjYsMjQuNjQsMTAuNjcsMjkuMDgsMjcuNTVDOTkuNzMsMTY4LjgxLDgwLjQ4LDE2NC4wOCw2NC43MiwxNTYuMDlabTEzMy42Ny00Yy0xNy42MiwxMC44NS00MC44MywxNy4xLTY1Ljc3LDE3Ljc5YTUyLjc3LDUyLjc3LDAsMCwwLTExLjMxLTIzLjg0LDQ1LjI0LDQ1LjI0LDAsMCwwLTI4LjU2LTE1LjczYy0xNi44OS0yLjItMzEuNDksNS41NC0zOC40MSwxOS42OEMzOC42MSwxMzkuMzcsMzAsMTI2LDMwLDExMmMwLTE0LjkzLDkuOC0yOS4xOCwyNy42MS00MC4xM0M3Ni4zMiw2MC4zNCwxMDEuMzIsNTQsMTI4LDU0czUxLjY4LDYuMzQsNzAuMzksMTcuODVDMjE2LjIsODIuOCwyMjYsOTcuMDUsMjI2LDExMlMyMTYuMiwxNDEuMTYsMTk4LjM5LDE1Mi4xMVoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNzMsNTkuOTNDMTg0Ljg1LDQ3LjA4LDE1Ny4yNCw0MCwxMjgsNDBTNzEuMTUsNDcuMDgsNTAuMjcsNTkuOTNDMjguMTcsNzMuNTIsMTYsOTIsMTYsMTEyUzI4LjE3LDE1MC40NCw1MC4yNywxNjRjMTksMTEuNjcsNDMuNDksMTguNTYsNjkuNzMsMTkuNzN2MGEzNy4zNSwzNy4zNSwwLDAsMS0xOC41OCwzM2MtMTQuNjQsOC44Ni0zNC42Miw5LjUyLTQ5LjcyLDEuNjRhOCw4LDAsMSwwLTcuNCwxNC4xOEE2Ni40LDY2LjQsMCwwLDAsNzUsMjQwYTY3LjMxLDY3LjMxLDAsMCwwLDM0Ljc0LTkuNWMxNy0xMC4yNywyNi4yOS0yNi44NiwyNi4yOS00Ni43djBjMjYuMjQtMS4xNyw1MC43Ni04LjA2LDY5LjczLTE5LjczQzIyNy44MywxNTAuNDQsMjQwLDEzMiwyNDAsMTEyUzIyNy44Myw3My41MiwyMDUuNzMsNTkuOTNaTTY3LjQxLDE1NS4xOGM1LjI0LTkuNTUsMTUuNDQtMTIsMjMuNTMtMTEsMTAuOSwxLjQyLDIxLjg2LDkuMTMsMjYuNjEsMjMuNDJDOTkuMTEsMTY2LjQ1LDgxLjg1LDE2Mi4xNiw2Ny40MSwxNTUuMThabTEyOS45NC00Ljc3Yy0xNi45NSwxMC40My0zOS4xNywxNi41My02My4xMywxNy40M2E1NC4zNyw1NC4zNywwLDAsMC0xMS4zOS0yMy4wN0E0Ny4xNyw0Ny4xNywwLDAsMCw5MywxMjguMzVjLTE3LTIuMi0zMS43Miw1LjExLTM5LjM4LDE4LjdDMzkuNjQsMTM3LDMyLDEyNC43MywzMiwxMTJjMC0xNC4yMSw5LjQ3LTI3Ljg2LDI2LjY1LTM4LjQzQzc3LjA1LDYyLjIzLDEwMS42OCw1NiwxMjgsNTZTMTc5LDYyLjIzLDE5Ny4zNSw3My41NUMyMTQuNTMsODQuMTIsMjI0LDk3Ljc3LDIyNCwxMTJTMjE0LjUzLDEzOS44NCwxOTcuMzUsMTUwLjQxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDMuNjQsNjMuMzRDMTgzLjM3LDUwLjg3LDE1Ni41MSw0NCwxMjgsNDRTNzIuNjMsNTAuODcsNTIuMzYsNjMuMzRDMzEuNDksNzYuMTksMjAsOTMuNDgsMjAsMTEyczExLjQ5LDM1LjgzLDMyLjM2LDQ4LjY4YzE5LjI5LDExLjg3LDQ0LjU1LDE4LjY1LDcxLjUxLDE5LjI4LjA4LDEuMjcuMTMsMi41Ni4xMywzLjksMCwxNS40OS03LjI4LDI4LjQ0LTIwLjUxLDM2LjQ2LTE1Ljc5LDkuNTctMzcuMzQsMTAuMjgtNTMuNjQsMS43N2E0LDQsMCwxLDAtMy43LDcuMDlBNjIuMzIsNjIuMzIsMCwwLDAsNzQuOTEsMjM2YTYzLjU2LDYzLjU2LDAsMCwwLDMyLjczLTguODJjMTUuNzEtOS41MiwyNC4zNi0yNC45LDI0LjM2LTQzLjMsMC0xLjMyLS4wNS0yLjYxLS4xMi0zLjksMjcuMDYtLjU5LDUyLjQxLTcuMzgsNzEuNzYtMTkuMjhDMjI0LjUxLDE0Ny44NSwyMzYsMTMwLjU2LDIzNiwxMTJTMjI0LjUxLDc2LjE5LDIwMy42NCw2My4zNFpNNjIuMTYsMTU3LjE1YzUuMy0xNC40OSwxOC44My0xOC4yMiwyOS4zLTE2Ljg1LDEzLjY0LDEuNzgsMjcuMzgsMTIuMTksMzEuMzgsMzEuNjZDOTkuNjYsMTcxLjI1LDc4LjU1LDE2NS43OCw2Mi4xNiwxNTcuMTVaTTEzMSwxNzJhNTEuMzUsNTEuMzUsMCwwLDAtMTEuMTgtMjQuNTksNDMuMjgsNDMuMjgsMCwwLDAtMjcuMy0xNS4wNmMtMTYuODItMi4xOS0zMS4yNCw2LTM3LjMzLDIwLjc0QzM4LjMzLDE0Mi4zNSwyOCwxMjcuOSwyOCwxMTJjMC0zMy4wOSw0NC44Ni02MCwxMDAtNjBzMTAwLDI2LjkzLDEwMCw2MEMyMjgsMTQ0LjUyLDE4NC43NCwxNzEuMDYsMTMxLDE3MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Lasso";
export { I as Lasso };
