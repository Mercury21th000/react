/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Snowflake";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuNzcsMTUwLjA5YTgsOCwwLDAsMS01Ljg2LDkuNjhsLTI0LjY0LDYsNi40NiwyNC4xMWE4LDgsMCwwLDEtNS42Niw5LjhBOC4yNSw4LjI1LDAsMCwxLDE5MiwyMDBhOCw4LDAsMCwxLTcuNzItNS45M2wtNy43Mi0yOC44TDEzNiwxNDEuODZ2NDYuODNsMjEuNjYsMjEuNjVhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyOCwyMDMuMzFsLTE4LjM0LDE4LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMjAsMTg4LjY5VjE0MS44Nkw3OS40NSwxNjUuMjdsLTcuNzIsMjguOEE4LDgsMCwwLDEsNjQsMjAwYTguMjUsOC4yNSwwLDAsMS0yLjA4LS4yNyw4LDgsMCwwLDEtNS42Ni05LjhsNi40Ni0yNC4xMS0yNC42NC02YTgsOCwwLDAsMSwzLjgyLTE1LjU0bDI5LjQ1LDcuMjNMMTEyLDEyOCw3MS4zNiwxMDQuNTRsLTI5LjQ1LDcuMjNBNy44NSw3Ljg1LDAsMCwxLDQwLDExMmE4LDgsMCwwLDEtMS45MS0xNS43N2wyNC42NC02TDU2LjI3LDY2LjA3YTgsOCwwLDAsMSwxNS40Ni00LjE0bDcuNzIsMjguOEwxMjAsMTE0LjE0VjY3LjMxTDk4LjM0LDQ1LjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjgsNTIuNjlsMTguMzQtMTguMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyTDEzNiw2Ny4zMXY0Ni44M2w0MC41NS0yMy40MSw3LjcyLTI4LjhhOCw4LDAsMCwxLDE1LjQ2LDQuMTRsLTYuNDYsMjQuMTEsMjQuNjQsNkE4LDgsMCwwLDEsMjE2LDExMmE3Ljg1LDcuODUsMCwwLDEtMS45MS0uMjNsLTI5LjQ1LTcuMjNMMTQ0LDEyOGw0MC42NCwyMy40NiwyOS40NS03LjIzQTgsOCwwLDAsMSwyMjMuNzcsMTUwLjA5WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuODgsMTUxLjA1YTQsNCwwLDAsMS0yLjkzLDQuODNsLTI4LjYsN0wxOTUuODYsMTkxYTQsNCwwLDAsMS0yLjgzLDQuOSwzLjY1LDMuNjUsMCwwLDEtMSwuMTQsNCw0LDAsMCwxLTMuODYtM0wxODAsMTYyLjY0bC00OC0yNy43MXY1NS40MWwyMi44MywyMi44M2E0LDQsMCwwLDEtNS42Niw1LjY2TDEyOCwxOTcuNjZsLTIxLjE3LDIxLjE3YTQsNCwwLDAsMS01LjY2LTUuNjZMMTI0LDE5MC4zNFYxMzQuOTNMNzYsMTYyLjY0LDY3Ljg2LDE5M0E0LDQsMCwwLDEsNjQsMTk2YTMuNjUsMy42NSwwLDAsMS0xLS4xNCw0LDQsMCwwLDEtMi44My00LjlsNy41MS0yOC4wNS0yOC42LTdBNCw0LDAsMSwxLDQxLDE0OC4xMmwzMSw3LjYxTDEyMCwxMjgsNzIsMTAwLjI3bC0zMSw3LjYxYTQuMDcsNC4wNywwLDAsMS0xLC4xMiw0LDQsMCwwLDEtMS03Ljg4bDI4LjYtN0w2MC4xNCw2NUE0LDQsMCwwLDEsNjcuODYsNjNMNzYsOTMuMzZsNDgsMjcuNzFWNjUuNjZMMTAxLjE3LDQyLjgzYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI4LDU4LjM0bDIxLjE3LTIxLjE3YTQsNCwwLDEsMSw1LjY2LDUuNjZMMTMyLDY1LjY2djU1LjQxbDQ4LTI3LjcxTDE4OC4xNCw2M0E0LDQsMCwwLDEsMTk1Ljg2LDY1bC03LjUxLDI4LjA1LDI4LjYsN0E0LDQsMCwwLDEsMjE2LDEwOGE0LjA3LDQuMDcsMCwwLDEtMS0uMTJsLTMxLTcuNjFMMTM2LDEyOGw0OCwyNy43MywzMS03LjYxQTQsNCwwLDAsMSwyMTkuODgsMTUxLjA1WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuODMsMTUwLjU3YTYsNiwwLDAsMS00LjQsNy4yNmwtMjYuNjIsNi41NCw3LDI2LjA4YTYsNiwwLDAsMS00LjI0LDcuMzUsNi40LDYuNCwwLDAsMS0xLjU1LjIsNiw2LDAsMCwxLTUuOC00LjQ1TDE3OC4yNywxNjQsMTM0LDEzOC4zOXY1MS4xM2wyMi4yNCwyMi4yNGE2LDYsMCwxLDEtOC40OCw4LjQ4TDEyOCwyMDAuNDlsLTE5Ljc2LDE5Ljc1YTYsNiwwLDAsMS04LjQ4LTguNDhMMTIyLDE4OS41MlYxMzguMzlMNzcuNzMsMTY0bC03LjkzLDI5LjZBNiw2LDAsMCwxLDY0LDE5OGE2LjQsNi40LDAsMCwxLTEuNTUtLjIsNiw2LDAsMCwxLTQuMjQtNy4zNWw3LTI2LjA4LTI2LjYyLTYuNTRhNiw2LDAsMCwxLDIuODYtMTEuNjZsMzAuMjMsNy40M0wxMTYsMTI4LDcxLjY2LDEwMi40bC0zMC4yMyw3LjQzQTUuODgsNS44OCwwLDAsMSw0MCwxMTBhNiw2LDAsMCwxLTEuNDMtMTEuODNsMjYuNjItNi41NC03LTI2LjA4YTYsNiwwLDEsMSwxMS41OS0zLjFsNy45MywyOS42TDEyMiwxMTcuNjFWNjYuNDhMOTkuNzYsNDQuMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxMjgsNTUuNTFsMTkuNzYtMTkuNzVhNiw2LDAsMCwxLDguNDgsOC40OEwxMzQsNjYuNDh2NTEuMTNsNDQuMjctMjUuNTYsNy45My0yOS42YTYsNiwwLDEsMSwxMS41OSwzLjFsLTcsMjYuMDgsMjYuNjIsNi41NEE2LDYsMCwwLDEsMjE2LDExMGE1Ljg4LDUuODgsMCwwLDEtMS40My0uMTdsLTMwLjIzLTcuNDNMMTQwLDEyOGw0NC4zNCwyNS42LDMwLjIzLTcuNDNBNiw2LDAsMCwxLDIyMS44MywxNTAuNTdaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNjUsMTQ5LjE0YTEyLDEyLDAsMCwxLTguNzksMTQuNTFsLTIwLjY3LDUuMDgsNS40LDIwLjE2YTEyLDEyLDAsMCwxLTIzLjE4LDYuMjJsLTcuMjktMjcuMkwxNDAsMTQ4Ljc4VjE4N2wyMC40OCwyMC40OGExMiwxMiwwLDAsMS0xNywxN0wxMjgsMjA5bC0xNS41MSwxNS41MmExMiwxMiwwLDAsMS0xNy0xN0wxMTYsMTg3VjE0OC43OEw4Mi44OCwxNjcuOTFsLTcuMjksMjcuMmExMiwxMiwwLDAsMS0yMy4xOC02LjIybDUuNC0yMC4xNi0yMC42Ny01LjA4YTEyLDEyLDAsMSwxLDUuNzItMjMuM2wyNy44OSw2Ljg1TDEwNCwxMjgsNzAuNzUsMTA4LjhsLTI3Ljg5LDYuODVBMTEuOCwxMS44LDAsMCwxLDQwLDExNmExMiwxMiwwLDAsMS0yLjg1LTIzLjY1bDIwLjY3LTUuMDgtNS40LTIwLjE2YTEyLDEyLDAsMCwxLDIzLjE4LTYuMjJsNy4yOSwyNy4yTDExNiwxMDcuMjFWNjlMOTUuNTIsNDguNDhhMTIsMTIsMCwwLDEsMTctMTdMMTI4LDQ3bDE1LjUxLTE1LjUyYTEyLDEyLDAsMSwxLDE3LDE3TDE0MCw2OXYzOC4yNGwzMy4xMi0xOS4xMiw3LjI5LTI3LjJhMTIsMTIsMCwwLDEsMjMuMTgsNi4yMmwtNS40LDIwLjE2LDIwLjY3LDUuMDhBMTIsMTIsMCwwLDEsMjE2LDExNmExMS44LDExLjgsMCwwLDEtMi44Ny0uMzVsLTI3Ljg5LTYuODVMMTUyLDEyOGwzMy4yNSwxOS4yLDI3Ljg5LTYuODVBMTIsMTIsMCwwLDEsMjI3LjY1LDE0OS4xNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm00Mi4zNywxMTkuMjIsMTguOTQtNi43NmE4LDgsMCwxLDEsNS4zOCwxNS4wOGwtMTUuNDgsNS41Miw0LjUyLDE2Ljg3YTgsOCwwLDAsMS01LjY2LDkuOEE4LjIzLDguMjMsMCwwLDEsMTc2LDE4NGE4LDgsMCwwLDEtNy43My01LjkzbC01LjU3LTIwLjhMMTM2LDE0MS44NnYzMC44M2wxMy42NiwxMy42NWE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDE4Ny4zMWwtMTAuMzQsMTAuMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDEyMCwxNzIuNjlWMTQxLjg2TDkzLjMsMTU3LjI3bC01LjU3LDIwLjhBOCw4LDAsMCwxLDgwLDE4NGE4LjIzLDguMjMsMCwwLDEtMi4wNy0uMjcsOCw4LDAsMCwxLTUuNjYtOS44bDQuNTItMTYuODctMTUuNDgtNS41MmE4LDgsMCwwLDEsNS4zOC0xNS4wOGwxOC45NCw2Ljc2TDExMiwxMjgsODUuNjMsMTEyLjc4bC0xOC45NCw2Ljc2QTguMTgsOC4xOCwwLDAsMSw2NCwxMjBhOCw4LDAsMCwxLTIuNjktMTUuNTRsMTUuNDgtNS41Mkw3Mi4yNyw4Mi4wN2E4LDgsMCwwLDEsMTUuNDYtNC4xNGw1LjU3LDIwLjhMMTIwLDExNC4xNFY4My4zMUwxMDYuMzQsNjkuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyOCw2OC42OWwxMC4zNC0xMC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM2LDgzLjMxdjMwLjgzbDI2LjctMTUuNDEsNS41Ny0yMC44YTgsOCwwLDAsMSwxNS40Niw0LjE0bC00LjUyLDE2Ljg3LDE1LjQ4LDUuNTJBOCw4LDAsMCwxLDE5MiwxMjBhOC4xOCw4LjE4LDAsMCwxLTIuNjktLjQ2bC0xOC45NC02Ljc2TDE0NCwxMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTI4YTkyLDkyLDAsMSwxLTkyLTkyQTkyLjEsOTIuMSwwLDAsMSwyMjAsMTI4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyMy43NywxNTAuMDlhOCw4LDAsMCwxLTUuODYsOS42OGwtMjQuNjQsNiw2LjQ2LDI0LjExYTgsOCwwLDAsMS01LjY2LDkuOEE4LjI1LDguMjUsMCwwLDEsMTkyLDIwMGE4LDgsMCwwLDEtNy43Mi01LjkzbC03LjcyLTI4LjhMMTM2LDE0MS44NnY0Ni44M2wyMS42NiwyMS42NWE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDIwMy4zMWwtMTguMzQsMTguMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDEyMCwxODguNjlWMTQxLjg2TDc5LjQ1LDE2NS4yN2wtNy43MiwyOC44QTgsOCwwLDAsMSw2NCwyMDBhOC4yNSw4LjI1LDAsMCwxLTIuMDgtLjI3LDgsOCwwLDAsMS01LjY2LTkuOGw2LjQ2LTI0LjExLTI0LjY0LTZhOCw4LDAsMCwxLDMuODItMTUuNTRsMjkuNDUsNy4yM0wxMTIsMTI4LDcxLjM2LDEwNC41NGwtMjkuNDUsNy4yM0E3Ljg1LDcuODUsMCwwLDEsNDAsMTEyYTgsOCwwLDAsMS0xLjkxLTE1Ljc3bDI0LjY0LTZMNTYuMjcsNjYuMDdhOCw4LDAsMCwxLDE1LjQ2LTQuMTRsNy43MiwyOC44TDEyMCwxMTQuMTRWNjcuMzFMOTguMzQsNDUuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyOCw1Mi42OWwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM2LDY3LjMxdjQ2LjgzbDQwLjU1LTIzLjQxLDcuNzItMjguOGE4LDgsMCwwLDEsMTUuNDYsNC4xNGwtNi40NiwyNC4xMSwyNC42NCw2QTgsOCwwLDAsMSwyMTYsMTEyYTcuODUsNy44NSwwLDAsMS0xLjkxLS4yM2wtMjkuNDUtNy4yM0wxNDQsMTI4bDQwLjY0LDIzLjQ2LDI5LjQ1LTcuMjNBOCw4LDAsMCwxLDIyMy43NywxNTAuMDlaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Snowflake";
export { I as Snowflake };
