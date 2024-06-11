/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/StackOverflowLogo";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTUxLjY3VjIxNkExMiwxMiwwLDAsMSwyMDgsMjI4SDQ4QTEyLDEyLDAsMCwxLDM2LDIxNlYxNTEuNjdhMTIsMTIsMCwxLDEsMjQsMFYyMDMuOUgxOTZWMTUxLjY3YTEyLDEyLDAsMSwxLDI0LDBaTTg4LDE4My44MWg4MGExMi4wNiwxMi4wNiwwLDAsMCwwLTI0LjExSDg4YTEyLjA2LDEyLjA2LDAsMCwwLDAsMjQuMTFaTTk2LjIsMTEzbDc1LjE3LDI3LjQ5YTEyLjA1LDEyLjA1LDAsMCwwLDguMjEtMjIuNjZMMTA0LjQxLDkwLjM1QTEyLDEyLDAsMCwwLDk2LjIsMTEzWk0xMjgsNDkuMjlsNjEuMjksNTEuNjRhMTIsMTIsMCwwLDAsMTYuOS0xLjQ4LDEyLjA5LDEyLjA5LDAsMCwwLTEuNDgtMTdMMTQzLjQ0LDMwLjgyYTEyLDEyLDAsMCwwLTE2LjkxLDEuNDlBMTIuMSwxMi4xLDAsMCwwLDEyOCw0OS4yOVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTUydjY0SDQ4VjE1MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsMTUyLjA5VjIxNmE4LDgsMCwwLDEtOCw4SDQ4YTgsOCwwLDAsMS04LThWMTUyLjA5YTgsOCwwLDAsMSwxNiwwVjIwOEgyMDBWMTUyLjA5YTgsOCwwLDAsMSwxNiwwWm0tMTI4LDMyaDgwYTgsOCwwLDEsMCwwLTE2SDg4YTgsOCwwLDEsMCwwLDE2Wm00Ljg4LTUzLDc3LjI3LDIwLjY4YTcuODksNy44OSwwLDAsMCwyLjA4LjI4LDgsOCwwLDAsMCwyLjA3LTE1LjcxTDk3LDExNS42MUE4LDgsMCwxLDAsOTIuODgsMTMxWm0xOC40NS00OS45Myw2OS4yOCw0MGE4LDgsMCwwLDAsMTAuOTMtMi45Myw4LDgsMCwwLDAtMi45My0xMC45MUwxMTkuMzMsNjcuMjdhOCw4LDAsMSwwLTgsMTMuODRabTg3LjMzLDEzQTgsOCwwLDEsMCwyMTAsODIuODRsLTU2LjU3LTU2LjVhOCw4LDAsMCwwLTExLjMyLDExLjNaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEzNC44Niw0Ni44NmE4LDgsMCwwLDEsMTEuMzIsMGw0NS4yNSw0NS4yNmE4LDgsMCwwLDEtMTEuMzEsMTEuMzFMMTM0Ljg2LDU4LjE4QTgsOCwwLDAsMSwxMzQuODYsNDYuODZaTTEwMC4xOCw5OC43N2E4LDgsMCwwLDEsMTAuNDUtNC4zM2w1OS4xMywyNC40OWE4LDgsMCwwLDEtMy4wNiwxNS40LDcuODksNy44OSwwLDAsMS0zLjA2LS42MmwtNTkuMTMtMjQuNDlBOCw4LDAsMCwxLDEwMC4xOCw5OC43N1pNOTYsMTUyaDY0YTgsOCwwLDAsMSwwLDE2SDk2YTgsOCwwLDAsMSwwLTE2Wm0xMDQsNDBhOCw4LDAsMCwxLTgsOEg2NGE4LDgsMCwwLDEtOC04VjE0NGE4LDgsMCwwLDEsMTYsMHY0MEgxODRWMTQ0YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMTUyLjA5VjIxNmE2LDYsMCwwLDEtNiw2SDQ4YTYsNiwwLDAsMS02LTZWMTUyLjA5YTYsNiwwLDAsMSwxMiwwVjIxMEgyMDJWMTUyLjA5YTYsNiwwLDAsMSwxMiwwWm0tMTI2LDMwaDgwYTYsNiwwLDEsMCwwLTEySDg4YTYsNiwwLDEsMCwwLDEyWm01LjQtNTIuOTMsNzcuMjcsMjAuNjdhNiw2LDAsMSwwLDMuMTEtMTEuNTdMOTYuNSwxMTcuNTRhNiw2LDAsMSwwLTMuMSwxMS41OFptMTguOTMtNDkuNzQsNjkuMjgsNDBhNi4wNSw2LjA1LDAsMCwwLDMsLjgsNiw2LDAsMCwwLDMtMTEuMThMMTE4LjMzLDY5YTYsNiwwLDEsMC02LDEwLjM4Wm04Ny43NSwxMy4zNWE2LDYsMCwwLDAsOC40OC04LjQ4TDE1MiwyNy43NmE2LDYsMCwxLDAtOC40OCw4LjQ3WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUyLjA5VjIxNmE4LDgsMCwwLDEtOCw4SDQ4YTgsOCwwLDAsMS04LThWMTUyLjA5YTgsOCwwLDAsMSwxNiwwVjIwOEgyMDBWMTUyLjA5YTgsOCwwLDAsMSwxNiwwWm0tMTI4LDMyaDgwYTgsOCwwLDEsMCwwLTE2SDg4YTgsOCwwLDEsMCwwLDE2Wm00Ljg4LTUzLDc3LjI3LDIwLjY4YTcuODksNy44OSwwLDAsMCwyLjA4LjI4LDgsOCwwLDAsMCwyLjA3LTE1LjcxTDk3LDExNS42MUE4LDgsMCwxLDAsOTIuODgsMTMxWm0xOC40NS00OS45Myw2OS4yOCw0MGE4LDgsMCwwLDAsMTAuOTMtMi45Myw4LDgsMCwwLDAtMi45My0xMC45MUwxMTkuMzMsNjcuMjdhOCw4LDAsMSwwLTgsMTMuODRabTg3LjMzLDEzQTgsOCwwLDEsMCwyMTAsODIuODRsLTU2LjU3LTU2LjVhOCw4LDAsMCwwLTExLjMyLDExLjNaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTUyLjA5VjIxNmE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTUyLjA5YTQsNCwwLDAsMSw4LDBWMjEySDIwNFYxNTIuMDlhNCw0LDAsMCwxLDgsMFptLTEyNCwyOGg4MGE0LDQsMCwxLDAsMC04SDg4YTQsNCwwLDEsMCwwLDhabTUuOTItNTIuODYsNzcuMjcsMjAuNjdhMy43MiwzLjcyLDAsMCwwLDEsLjE0LDQsNCwwLDAsMCwxLTcuODVMOTYsMTE5LjQ3YTQsNCwwLDEsMC0yLjA3LDcuNzJabTE5LjQxLTQ5LjU0LDY5LjI4LDM5Ljk1YTQsNCwwLDEsMCw0LTYuOTJMMTE3LjMzLDcwLjczYTQsNCwwLDEsMC00LDYuOTJabTg4LjE2LDEzLjY2YTQsNCwwLDAsMCw1LjY2LTUuNjRsLTU2LjU3LTU2LjVhNCw0LDAsMSwwLTUuNjYsNS42NVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "StackOverflowLogo";
export { I as StackOverflowLogo };
