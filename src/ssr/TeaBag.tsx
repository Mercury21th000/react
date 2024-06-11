/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TeaBag";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTU2YTEyLDEyLDAsMCwxLTEyLTEyVjY0QTYwLDYwLDAsMCwwLDkyLDY0djRINzYuNTNhMjAuMSwyMC4xLDAsMCwwLTE3LjE1LDkuNzFMMzguODUsMTExLjkyQTIwLjA3LDIwLjA3LDAsMCwwLDM2LDEyMi4yMlYyMTZhMjAsMjAsMCwwLDAsMjAsMjBoOTZhMjAsMjAsMCwwLDAsMjAtMjBWMTIyLjIyYTIwLDIwLDAsMCwwLTIuODUtMTAuMjlMMTQ4LjYyLDc3LjcxQTIwLjEsMjAuMSwwLDAsMCwxMzEuNDcsNjhIMTE2VjY0YTM2LDM2LDAsMCwxLDcyLDB2ODBhMzYsMzYsMCwwLDAsMzYsMzYsMTIsMTIsMCwwLDAsMC0yNFpNMTI5LjIxLDkyLDE0OCwxMjMuMzJWMjEySDYwVjEyMy4zMkw3OC43OSw5Mkg5MnY0NGExMiwxMiwwLDAsMCwyNCwwVjkyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTIyLjIyVjIxNmE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMS04LThWMTIyLjIyYTgsOCwwLDAsMSwxLjE0LTQuMTJMNjkuNjcsODMuODhBOCw4LDAsMCwxLDc2LjUzLDgwaDU0Ljk0YTgsOCwwLDAsMSw2Ljg2LDMuODhsMjAuNTMsMzQuMjJBOCw4LDAsMCwxLDE2MCwxMjIuMjJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDE2MGExNiwxNiwwLDAsMS0xNi0xNlY2NEE1Niw1NiwwLDAsMCw5Niw2NHY4SDc2LjUzYTE2LjA5LDE2LjA5LDAsMCwwLTEzLjcyLDcuNzdMNDIuMjgsMTE0QTE2LjA2LDE2LjA2LDAsMCwwLDQwLDEyMi4yMlYyMTZhMTYsMTYsMCwwLDAsMTYsMTZoOTZhMTYsMTYsMCwwLDAsMTYtMTZWMTIyLjIyYTE2LjA2LDE2LjA2LDAsMCwwLTIuMjgtOC4yNEwxNDUuMTksNzkuNzdBMTYuMDksMTYuMDksMCwwLDAsMTMxLjQ3LDcySDExMlY2NGE0MCw0MCwwLDAsMSw4MCwwdjgwYTMyLDMyLDAsMCwwLDMyLDMyLDgsOCwwLDAsMCwwLTE2Wk0xMzEuNDcsODgsMTUyLDEyMi4yMlYyMTZINTZWMTIyLjIyTDc2LjUzLDg4SDk2djQ4YTgsOCwwLDAsMCwxNiwwVjg4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTM2VjcyaDE5LjQ3YTE2LjA5LDE2LjA5LDAsMCwxLDEzLjcyLDcuNzdMMTY1LjcyLDExNGExNi4wNiwxNi4wNiwwLDAsMSwyLjI4LDguMjRWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjEyMi4yMkExNi4wNiwxNi4wNiwwLDAsMSw0Mi4yOCwxMTRMNjIuODEsNzkuNzdBMTYuMDksMTYuMDksMCwwLDEsNzYuNTMsNzJIOTZ2NjRhOCw4LDAsMCwwLDE2LDBabTExMiwyNGExNiwxNiwwLDAsMS0xNi0xNlY2NEE1Niw1NiwwLDAsMCw5Niw2NHY4aDE2VjY0YTQwLDQwLDAsMCwxLDgwLDB2ODBhMzIsMzIsMCwwLDAsMzIsMzIsOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYyYTE4LDE4LDAsMCwxLTE4LTE4VjY0QTU0LDU0LDAsMCwwLDk4LDY0Vjc0SDc2LjUzYTE0LjA3LDE0LjA3LDAsMCwwLTEyLDYuOEw0NCwxMTVhMTQsMTQsMCwwLDAtMiw3LjIxVjIxNmExNCwxNCwwLDAsMCwxNCwxNGg5NmExNCwxNCwwLDAsMCwxNC0xNFYxMjIuMjJhMTQsMTQsMCwwLDAtMi03LjIxTDE0My40OCw4MC44YTE0LjA3LDE0LjA3LDAsMCwwLTEyLTYuOEgxMTBWNjRhNDIsNDIsMCwwLDEsODQsMHY4MGEzMCwzMCwwLDAsMCwzMCwzMCw2LDYsMCwwLDAsMC0xMlpNMTMxLjQ3LDg2YTIsMiwwLDAsMSwxLjcyLDFsMjAuNTMsMzQuMjJhMiwyLDAsMCwxLC4yOCwxVjIxNmEyLDIsMCwwLDEtMiwySDU2YTIsMiwwLDAsMS0yLTJWMTIyLjIyYTIsMiwwLDAsMSwuMjktMUw3NC44MSw4N2EyLDIsMCwwLDEsMS43Mi0xSDk4djUwYTYsNiwwLDAsMCwxMiwwVjg2WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwYTE2LDE2LDAsMCwxLTE2LTE2VjY0QTU2LDU2LDAsMCwwLDk2LDY0djhINzYuNTNhMTYuMDksMTYuMDksMCwwLDAtMTMuNzIsNy43N0w0Mi4yOCwxMTRBMTYuMDYsMTYuMDYsMCwwLDAsNDAsMTIyLjIyVjIxNmExNiwxNiwwLDAsMCwxNiwxNmg5NmExNiwxNiwwLDAsMCwxNi0xNlYxMjIuMjJhMTYuMDYsMTYuMDYsMCwwLDAtMi4yOC04LjI0TDE0NS4xOSw3OS43N0ExNi4wOSwxNi4wOSwwLDAsMCwxMzEuNDcsNzJIMTEyVjY0YTQwLDQwLDAsMCwxLDgwLDB2ODBhMzIsMzIsMCwwLDAsMzIsMzIsOCw4LDAsMCwwLDAtMTZaTTEzMS40Nyw4OCwxNTIsMTIyLjIyVjIxNkg1NlYxMjIuMjJMNzYuNTMsODhIOTZ2NDhhOCw4LDAsMCwwLDE2LDBWODhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTY0YTIwLDIwLDAsMCwxLTIwLTIwVjY0YTUyLDUyLDAsMCwwLTEwNCwwVjc2SDc2LjUzYTEyLjA2LDEyLjA2LDAsMCwwLTEwLjI5LDUuODNMNDUuNzEsMTE2QTEyLDEyLDAsMCwwLDQ0LDEyMi4yMlYyMTZhMTIsMTIsMCwwLDAsMTIsMTJoOTZhMTIsMTIsMCwwLDAsMTItMTJWMTIyLjIyYTEyLDEyLDAsMCwwLTEuNzEtNi4xOEwxNDEuNzYsODEuODNBMTIuMDYsMTIuMDYsMCwwLDAsMTMxLjQ3LDc2SDEwOFY2NGE0NCw0NCwwLDAsMSw4OCwwdjgwYTI4LDI4LDAsMCwwLDI4LDI4LDQsNCwwLDAsMCwwLThaTTEzMS40Nyw4NGE0LDQsMCwwLDEsMy40MywxLjk0bDIwLjUzLDM0LjIyYTQsNCwwLDAsMSwuNTcsMi4wNlYyMTZhNCw0LDAsMCwxLTQsNEg1NmE0LDQsMCwwLDEtNC00VjEyMi4yMmE0LDQsMCwwLDEsLjU3LTIuMDZMNzMuMSw4NS45NEE0LDQsMCwwLDEsNzYuNTMsODRIMTAwdjUyYTQsNCwwLDAsMCw4LDBWODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TeaBag";
export { I as TeaBag };
