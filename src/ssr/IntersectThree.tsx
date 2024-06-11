/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/IntersectThree";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTUuODgsOTZjLjA3LTEuMzEuMTItMi42My4xMi00QTY4LDY4LDAsMCwwLDYwLDkyYzAsMS4zMywwLDIuNjUuMTIsNEE2OCw2OCwwLDEsMCwxMjgsMjEzLjY1LDY4LDY4LDAsMSwwLDE5NS44OCw5NlpNMTI4LDE5My40N2E1MS44OSw1MS44OSwwLDAsMS0xNi0zNS4zOCw2Ny41NSw2Ny41NSwwLDAsMCwzMS45LDBBNTEuODksNTEuODksMCwwLDEsMTI4LDE5My40N1pNMTI4LDE0NGE1MS45Myw1MS45MywwLDAsMS0xNC4wOC0xLjk1QTUyLjA2LDUyLjA2LDAsMCwxLDEyOCwxMTguNTNhNTIuMDYsNTIuMDYsMCwwLDEsMTQuMDgsMjMuNTJBNTEuOTMsNTEuOTMsMCwwLDEsMTI4LDE0NFptLTI4Ljc3LTguNzFBNTIuMTksNTIuMTksMCwwLDEsNzcuOTIsMTA2YTUxLjg4LDUxLjg4LDAsMCwxLDM2Ljc5LDMuMjhBNjguMTcsNjguMTcsMCwwLDAsOTkuMjMsMTM1LjI5Wm00Mi4wNi0yNi4wNkE1MS44OCw1MS44OCwwLDAsMSwxNzguMDgsMTA2YTUyLjE5LDUyLjE5LDAsMCwxLTIxLjMxLDI5LjM0QTY4LjE3LDY4LjE3LDAsMCwwLDE0MS4yOSwxMDkuMjNaTTEyOCw0MEE1Mi4wNiw1Mi4wNiwwLDAsMSwxODAsODkuOTEsNjcuNzIsNjcuNzIsMCwwLDAsMTI4LDk4LjM1YTY3LjcyLDY3LjcyLDAsMCwwLTUxLjk1LTguNDRBNTIuMDYsNTIuMDYsMCwwLDEsMTI4LDQwWk00MCwxNTZhNTIsNTIsMCwwLDEsMjMuMjMtNDMuMjlBNjguMzYsNjguMzYsMCwwLDAsOTYuMTIsMTUyYy0uMDcsMS4zMS0uMTIsMi42My0uMTIsNGE2Ny43NCw2Ny43NCwwLDAsMCwxOC43MSw0Ni43N0E1Miw1MiwwLDAsMSw0MCwxNTZabTEyNCw1MmE1MS42NSw1MS42NSwwLDAsMS0yMi43MS01LjIzQTY3Ljc0LDY3Ljc0LDAsMCwwLDE2MCwxNTZjMC0xLjMzLS4wNS0yLjY1LS4xMi00YTY4LjM2LDY4LjM2LDAsMCwwLDMyLjg5LTM5LjMzQTUyLDUyLDAsMCwxLDE2NCwyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTEuNjksOTguM2MuMi0yLjA3LjMxLTQuMTcuMzEtNi4zQTY0LDY0LDAsMCwwLDY0LDkyYzAsMi4xMy4xMSw0LjIzLjMxLDYuM0E2NCw2NCwwLDEsMCwxMjgsMjA4Ljg4LDY0LDY0LDAsMSwwLDE5MS42OSw5OC4zWk03Miw5MmE1Niw1NiwwLDAsMSwxMTIsMGMwLDEuMDcsMCwyLjEzLS4xLDMuMThhNjMuODQsNjMuODQsMCwwLDAtNTUuOSw3Ljk0LDYzLjg0LDYzLjg0LDAsMCwwLTU1LjktNy45NEM3Miw5NC4xMyw3Miw5My4wNyw3Miw5MlptNzYsNjRhNTUuODgsNTUuODgsMCwwLDEtMjAsNDIuODVBNTUuODgsNTUuODgsMCwwLDEsMTA4LDE1NmMwLTEuMDcsMC0yLjEzLjEtMy4xOGE2My44Niw2My44NiwwLDAsMCwzOS44LDBDMTQ4LDE1My44NywxNDgsMTU0LjkzLDE0OCwxNTZabS0yMC04YTU1LjYzLDU1LjYzLDAsMCwxLTE4Ljg2LTMuMjhBNTYuMDYsNTYuMDYsMCwwLDEsMTI4LDExMy4xNWE1Ni4wNiw1Ni4wNiwwLDAsMSwxOC44NiwzMS41N0E1NS42Myw1NS42MywwLDAsMSwxMjgsMTQ4Wm0tMjYuMy02LjU4YTU2LjE4LDU2LjE4LDAsMCwxLTI4LjU2LTM4LjE0LDU1Ljg3LDU1Ljg3LDAsMCwxLDQ4LjIxLDVBNjQuMDYsNjQuMDYsMCwwLDAsMTAxLjcsMTQxLjQyWm0zMy0zMy4wOWE1NS44Nyw1NS44NywwLDAsMSw0OC4yMS01LDU2LjE4LDU2LjE4LDAsMCwxLTI4LjU2LDM4LjE0QTY0LjA2LDY0LjA2LDAsMCwwLDEzNC42NSwxMDguMzNaTTkyLDIxMkE1Niw1NiwwLDAsMSw2NS43LDEwNi41OGE2NC4yNiw2NC4yNiwwLDAsMCwzNC42MSw0My4xMmMtLjIsMi4wNy0uMzEsNC4xNy0uMzEsNi4zYTYzLjg3LDYzLjg3LDAsMCwwLDIxLjM1LDQ3LjY3QTU1LjcxLDU1LjcxLDAsMCwxLDkyLDIxMlptNzIsMGE1NS43MSw1NS43MSwwLDAsMS0yOS4zNS04LjMzQTYzLjg3LDYzLjg3LDAsMCwwLDE1NiwxNTZjMC0yLjEzLS4xMS00LjIzLS4zMS02LjNhNjQuMjYsNjQuMjYsMCwwLDAsMzQuNjEtNDMuMTJBNTYsNTYsMCwwLDEsMTY0LDIxMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTMuNzgsOTcuMTNjLjEzLTEuNjkuMjItMy40LjIyLTUuMTNBNjYsNjYsMCwwLDAsNjIsOTJjMCwxLjczLjA5LDMuNDQuMjIsNS4xM0E2Niw2NiwwLDEsMCwxMjgsMjExLjI3LDY2LDY2LDAsMSwwLDE5My43OCw5Ny4xM1pNNzQsOTJhNTQsNTQsMCwwLDEsMTA4LDBjMCwuMTcsMCwuMzQsMCwuNTFhNjUuNzUsNjUuNzUsMCwwLDAtNTQsOC4yMiw2NS43NSw2NS43NSwwLDAsMC01NC04LjIyQzc0LDkyLjM0LDc0LDkyLjE3LDc0LDkyWm03Miw2NGE1My44OCw1My44OCwwLDAsMS0xOCw0MC4yMUE1My44OCw1My44OCwwLDAsMSwxMTAsMTU2YzAtLjE3LDAtLjM0LDAtLjUxYTY1LjczLDY1LjczLDAsMCwwLDM2LDBDMTQ2LDE1NS42NiwxNDYsMTU1LjgzLDE0NiwxNTZabS0xOC0xMGE1My42MSw1My42MSwwLDAsMS0xNi41LTIuNTlBNTQuMDksNTQuMDksMCwwLDEsMTI4LDExNS43OWE1NC4wOSw1NC4wOSwwLDAsMSwxNi41LDI3LjYyQTUzLjYxLDUzLjYxLDAsMCwxLDEyOCwxNDZabS0yNy42LTcuNjFhNTQuMTQsNTQuMTQsMCwwLDEtMjQuOS0zMy44QTUzLjg1LDUzLjg1LDAsMCwxLDExOCwxMDguNzEsNjYuMDksNjYuMDksMCwwLDAsMTAwLjQsMTM4LjM5Wk0xMzgsMTA4LjcxYTUzLjg1LDUzLjg1LDAsMCwxLDQyLjUzLTQuMTIsNTQuMTQsNTQuMTQsMCwwLDEtMjQuOSwzMy44QTY2LjA5LDY2LjA5LDAsMCwwLDEzOCwxMDguNzFaTTkyLDIxMEE1NCw1NCwwLDAsMSw2NC40LDEwOS42MWE2Ni4yOSw2Ni4yOSwwLDAsMCwzMy44Miw0MS4yNmMtLjEzLDEuNjktLjIyLDMuNC0uMjIsNS4xM2E2NS44LDY1LjgsMCwwLDAsMjAsNDcuMjlBNTMuNjQsNTMuNjQsMCwwLDEsOTIsMjEwWm03MiwwYTUzLjY0LDUzLjY0LDAsMCwxLTI2LTYuNzFBNjUuOCw2NS44LDAsMCwwLDE1OCwxNTZjMC0xLjczLS4wOS0zLjQ0LS4yMi01LjEzYTY2LjI5LDY2LjI5LDAsMCwwLDMzLjgyLTQxLjI2QTU0LDU0LDAsMCwxLDE2NCwyMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsOTMuNjZjMC0uNTUsMC0xLjEsMC0xLjY2QTcyLDcyLDAsMCwwLDU2LDkyYzAsLjU2LDAsMS4xMSwwLDEuNjZhNzIsNzIsMCwxLDAsNzIsMTI0LjY1QTcyLDcyLDAsMSwwLDIwMCw5My42NlptLTQxLjI4LDM1LjIyQTcxLjczLDcxLjczLDAsMCwwLDE0OCwxMTAuNzdhNDcuNjksNDcuNjksMCwwLDEsMjUtMS45MkE0OC4yMSw0OC4yMSwwLDAsMSwxNTguNjgsMTI4Ljg4Wk0xMjgsMTg3LjdhNDcuODEsNDcuODEsMCwwLDEtMTEuNDctMjQuNjIsNzIsNzIsMCwwLDAsMjIuOTQsMEE0Ny44MSw0Ny44MSwwLDAsMSwxMjgsMTg3LjdaTTgzLjA2LDEwOC44NWE0Ny42OSw0Ny42OSwwLDAsMSwyNSwxLjkyLDcxLjczLDcxLjczLDAsMCwwLTEwLjcyLDE4LjExQTQ4LjIxLDQ4LjIxLDAsMCwxLDgzLjA2LDEwOC44NVpNMTI4LDE0MGE0Ny44OCw0Ny44OCwwLDAsMS04Ljk0LS44NUE0OCw0OCwwLDAsMSwxMjgsMTI0LjNhNDgsNDgsMCwwLDEsOC45NCwxNC44NUE0Ny44OCw0Ny44OCwwLDAsMSwxMjgsMTQwWm0wLTk2YTQ4LjA3LDQ4LjA3LDAsMCwxLDQ3LjQ3LDQwLjkyQTcxLjc3LDcxLjc3LDAsMCwwLDEyOCw5My42OWE3MS43Nyw3MS43NywwLDAsMC00Ny40Ny04Ljc3QTQ4LjA3LDQ4LjA3LDAsMCwxLDEyOCw0NFpNNDQsMTU2YTQ3Ljg5LDQ3Ljg5LDAsMCwxLDE3LjMyLTM2Ljg4QTcyLjQ1LDcyLjQ1LDAsMCwwLDkyLDE1NC4zNGMwLC41NSwwLDEuMSwwLDEuNjZhNzEuNjQsNzEuNjQsMCwwLDAsMTYsNDUuMjNBNDgsNDgsMCwwLDEsNDQsMTU2Wm0xMjAsNDhhNDcuNjcsNDcuNjcsMCwwLDEtMTYtMi43N0E3MS42NCw3MS42NCwwLDAsMCwxNjQsMTU2YzAtLjU2LDAtMS4xMSwwLTEuNjZhNzIuNDUsNzIuNDUsMCwwLDAsMzAuNzItMzUuMjJBNDgsNDgsMCwwLDEsMTY0LDIwNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTUuODgsOTZjLjA3LTEuMzEuMTItMi42My4xMi00QTY4LDY4LDAsMCwwLDYwLDkyYzAsMS4zMywwLDIuNjUuMTIsNEE2OCw2OCwwLDEsMCwxMjgsMjEzLjY1LDY4LDY4LDAsMSwwLDE5NS44OCw5NlpNMTI4LDE5My40N2E1MS44OSw1MS44OSwwLDAsMS0xNi0zNS4zOCw2Ny41NSw2Ny41NSwwLDAsMCwzMS45LDBBNTEuODksNTEuODksMCwwLDEsMTI4LDE5My40N1pNOTkuMjMsMTM1LjI5QTUyLjE5LDUyLjE5LDAsMCwxLDc3LjkyLDEwNmE1MS44OCw1MS44OCwwLDAsMSwzNi43OSwzLjI4QTY4LjE3LDY4LjE3LDAsMCwwLDk5LjIzLDEzNS4yOVptNDIuMDYtMjYuMDZBNTEuODgsNTEuODgsMCwwLDEsMTc4LjA4LDEwNmE1Mi4xOSw1Mi4xOSwwLDAsMS0yMS4zMSwyOS4zNEE2OC4xNyw2OC4xNywwLDAsMCwxNDEuMjksMTA5LjIzWk0xMjgsNDBBNTIuMDYsNTIuMDYsMCwwLDEsMTgwLDg5LjkxLDY3LjcyLDY3LjcyLDAsMCwwLDEyOCw5OC4zNWE2Ny43Miw2Ny43MiwwLDAsMC01MS45NS04LjQ0QTUyLjA2LDUyLjA2LDAsMCwxLDEyOCw0MFpNNDAsMTU2YTUyLDUyLDAsMCwxLDIzLjIzLTQzLjI5QTY4LjM2LDY4LjM2LDAsMCwwLDk2LjEyLDE1MmMtLjA3LDEuMzEtLjEyLDIuNjMtLjEyLDRhNjcuNzQsNjcuNzQsMCwwLDAsMTguNzEsNDYuNzdBNTIsNTIsMCwwLDEsNDAsMTU2Wm0xMjQsNTJhNTEuNjUsNTEuNjUsMCwwLDEtMjIuNzEtNS4yM0E2Ny43NCw2Ny43NCwwLDAsMCwxNjAsMTU2YzAtMS4zMy0uMDUtMi42NS0uMTItNGE2OC4zNiw2OC4zNiwwLDAsMCwzMi44OS0zOS4zM0E1Miw1MiwwLDAsMSwxNjQsMjA4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQuNjQsMTQ3LjI4YTYwLDYwLDAsMCwxLTM2LTQ2LjU2QTYwLjA2LDYwLjA2LDAsMCwxLDEyOCwxMDgsNTkuOTQsNTkuOTQsMCwwLDAsMTA0LjY0LDE0Ny4yOFptMCwwQTYwLDYwLDAsMCwwLDEyOCwyMDRhNjAsNjAsMCwwLDAsMjMuMzYtNTYuNzIsNjAuMTcsNjAuMTcsMCwwLDEtNDYuNzIsMFptODIuNzItNDYuNTZBNjAuMDYsNjAuMDYsMCwwLDAsMTI4LDEwOGE1OS45NCw1OS45NCwwLDAsMSwyMy4zNiwzOS4yOEE2MCw2MCwwLDAsMCwxODcuMzYsMTAwLjcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE5NS44OCw5NmMuMDctMS4zMS4xMi0yLjYzLjEyLTRBNjgsNjgsMCwwLDAsNjAsOTJjMCwxLjMzLDAsMi42NS4xMiw0QTY4LDY4LDAsMSwwLDEyOCwyMTMuNjUsNjgsNjgsMCwxLDAsMTk1Ljg4LDk2Wk0xMjgsMTkzLjQ3YTUxLjg5LDUxLjg5LDAsMCwxLTE2LTM1LjM4LDY3LjU1LDY3LjU1LDAsMCwwLDMxLjksMEE1MS44OSw1MS44OSwwLDAsMSwxMjgsMTkzLjQ3Wk0xMjgsMTQ0YTUxLjkzLDUxLjkzLDAsMCwxLTE0LjA4LTEuOTVBNTIuMDYsNTIuMDYsMCwwLDEsMTI4LDExOC41M2E1Mi4wNiw1Mi4wNiwwLDAsMSwxNC4wOCwyMy41MkE1MS45Myw1MS45MywwLDAsMSwxMjgsMTQ0Wm0tMjguNzctOC43MUE1Mi4xOSw1Mi4xOSwwLDAsMSw3Ny45MiwxMDZhNTEuODgsNTEuODgsMCwwLDEsMzYuNzksMy4yOEE2OC4xNyw2OC4xNywwLDAsMCw5OS4yMywxMzUuMjlabTQyLjA2LTI2LjA2QTUxLjg4LDUxLjg4LDAsMCwxLDE3OC4wOCwxMDZhNTIuMTksNTIuMTksMCwwLDEtMjEuMzEsMjkuMzRBNjguMTcsNjguMTcsMCwwLDAsMTQxLjI5LDEwOS4yM1pNMTI4LDQwQTUyLjA2LDUyLjA2LDAsMCwxLDE4MCw4OS45MSw2Ny43Miw2Ny43MiwwLDAsMCwxMjgsOTguMzVhNjcuNzIsNjcuNzIsMCwwLDAtNTEuOTUtOC40NEE1Mi4wNiw1Mi4wNiwwLDAsMSwxMjgsNDBaTTQwLDE1NmE1Miw1MiwwLDAsMSwyMy4yMy00My4yOUE2OC4zNiw2OC4zNiwwLDAsMCw5Ni4xMiwxNTJjLS4wNywxLjMxLS4xMiwyLjYzLS4xMiw0YTY3Ljc0LDY3Ljc0LDAsMCwwLDE4LjcxLDQ2Ljc3QTUyLDUyLDAsMCwxLDQwLDE1NlptMTI0LDUyYTUxLjY1LDUxLjY1LDAsMCwxLTIyLjcxLTUuMjNBNjcuNzQsNjcuNzQsMCwwLDAsMTYwLDE1NmMwLTEuMzMtLjA1LTIuNjUtLjEyLTRhNjguMzYsNjguMzYsMCwwLDAsMzIuODktMzkuMzNBNTIsNTIsMCwwLDEsMTY0LDIwOFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "IntersectThree";
export { I as IntersectThree };
