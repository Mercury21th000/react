/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/UserCircle";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk03NC4wOCwxOTcuNWE2NCw2NCwwLDAsMSwxMDcuODQsMCw4Ny44Myw4Ny44MywwLDAsMS0xMDcuODQsMFpNOTYsMTIwYTMyLDMyLDAsMSwxLDMyLDMyQTMyLDMyLDAsMCwxLDk2LDEyMFptOTcuNzYsNjYuNDFhNzkuNjYsNzkuNjYsMCwwLDAtMzYuMDYtMjguNzUsNDgsNDgsMCwxLDAtNTkuNCwwLDc5LjY2LDc5LjY2LDAsMCwwLTM2LjA2LDI4Ljc1LDg4LDg4LDAsMSwxLDEzMS41MiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wk02OC44NywxOTguNDJhNjgsNjgsMCwwLDEsMTE4LjI2LDAsOTEuOCw5MS44LDAsMCwxLTExOC4yNiwwWm0xMjQuMy01LjU1YTc1LjYxLDc1LjYxLDAsMCwwLTQ0LjUxLTM0LDQ0LDQ0LDAsMSwwLTQxLjMyLDAsNzUuNjEsNzUuNjEsMCwwLDAtNDQuNTEsMzQsOTIsOTIsMCwxLDEsMTMwLjM0LDBaTTEyOCwxNTZhMzYsMzYsMCwxLDEsMzYtMzZBMzYsMzYsMCwwLDEsMTI4LDE1NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wk03MS40NCwxOThhNjYsNjYsMCwwLDEsMTEzLjEyLDAsODkuOCw4OS44LDAsMCwxLTExMy4xMiwwWk05NCwxMjBhMzQsMzQsMCwxLDEsMzQsMzRBMzQsMzQsMCwwLDEsOTQsMTIwWm05OS41MSw2OS42NGE3Ny41Myw3Ny41MywwLDAsMC00MC0zMS4zOCw0Niw0NiwwLDEsMC01MSwwLDc3LjUzLDc3LjUzLDAsMCwwLTQwLDMxLjM4LDkwLDkwLDAsMSwxLDEzMSwwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWk03OS41NywxOTYuNTdhNjAsNjAsMCwwLDEsOTYuODYsMCw4My43Miw4My43MiwwLDAsMS05Ni44NiwwWk0xMDAsMTIwYTI4LDI4LDAsMSwxLDI4LDI4QTI4LDI4LDAsMCwxLDEwMCwxMjBaTTE5NCwxNzkuOTRhODMuNDgsODMuNDgsMCwwLDAtMjktMjMuNDIsNTIsNTIsMCwxLDAtNzQsMCw4My40OCw4My40OCwwLDAsMC0yOSwyMy40Miw4NCw4NCwwLDEsMSwxMzEuOSwwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTIwYTQ0LDQ0LDAsMSwxLTQ0LTQ0QTQ0LjA1LDQ0LjA1LDAsMCwxLDE3MiwxMjBabTYwLDhBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OC4wOSw4OC4wOSwwLDAsMC05MS40Ny04Ny45M0M3Ny40Myw0MS44OSwzOS44Nyw4MS4xMiw0MCwxMjguMjVhODcuNjUsODcuNjUsMCwwLDAsMjIuMjQsNTguMTZBNzkuNzEsNzkuNzEsMCwwLDEsODQsMTY1LjFhNCw0LDAsMCwxLDQuODMuMzIsNTkuODMsNTkuODMsMCwwLDAsNzguMjgsMCw0LDQsMCwwLDEsNC44My0uMzIsNzkuNzEsNzkuNzEsMCwwLDEsMjEuNzksMjEuMzFBODcuNjIsODcuNjIsMCwwLDAsMjE2LDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk1Ljc2LDk1Ljc2LDAsMCwxLTMxLjgsNzEuMzdBNzIsNzIsMCwwLDAsMTI4LDE2MGE0MCw0MCwwLDEsMC00MC00MCw0MCw0MCwwLDAsMCw0MCw0MCw3Miw3MiwwLDAsMC02NC4yLDM5LjM3aDBBOTYsOTYsMCwxLDEsMjI0LDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk03NC4wOCwxOTcuNWE2NCw2NCwwLDAsMSwxMDcuODQsMCw4Ny44Myw4Ny44MywwLDAsMS0xMDcuODQsMFpNOTYsMTIwYTMyLDMyLDAsMSwxLDMyLDMyQTMyLDMyLDAsMCwxLDk2LDEyMFptOTcuNzYsNjYuNDFhNzkuNjYsNzkuNjYsMCwwLDAtMzYuMDYtMjguNzUsNDgsNDgsMCwxLDAtNTkuNCwwLDc5LjY2LDc5LjY2LDAsMCwwLTM2LjA2LDI4Ljc1LDg4LDg4LDAsMSwxLDEzMS41MiwwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "UserCircle";
export { I as UserCircle };
