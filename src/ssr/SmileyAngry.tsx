/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SmileyAngry";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxNTJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsOTIsMTUyWm03Mi0yNGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxNjQsMTI4Wm02OCwwQTEwNCwxMDQsMCwxLDEsMTI4LDI0LDEwNC4xMSwxMDQuMTEsMCwwLDEsMjMyLDEyOFptLTE2LDBhODgsODgsMCwxLDAtODgsODhBODguMSw4OC4xLDAsMCwwLDIxNiwxMjhaTTE3MS41Niw4MS4zNCwxMjgsMTEwLjM5bC00My41Ni0yOWE4LDgsMCwxLDAtOC44OCwxMy4zMmw0OCwzMmE4LDgsMCwwLDAsOC44OCwwbDQ4LTMyYTgsOCwwLDAsMC04Ljg4LTEzLjMyWm0tMTUuMTMsOTZDMTQ4LDE3MS43MywxMzkuOTQsMTY4LDEyOCwxNjhzLTIwLDMuNzMtMjguNDMsOS4zNGE4LDgsMCwwLDAsOC44NiwxMy4zMkMxMTQuOTMsMTg2LjM0LDEyMCwxODQsMTI4LDE4NHMxMy4wNywyLjM0LDE5LjU3LDYuNjZhOCw4LDAsMSwwLDguODYtMTMuMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTQwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEwMCwxNDBabTY0LThhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsMTY0LDEzMlptNjQtNEExMDAsMTAwLDAsMSwxLDEyOCwyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDIyOCwxMjhabS04LDBhOTIsOTIsMCwxLDAtOTIsOTJBOTIuMSw5Mi4xLDAsMCwwLDIyMCwxMjhaTTE3My43OCw4NC42NywxMjgsMTE1LjE5LDgyLjIyLDg0LjY3YTQsNCwwLDEsMC00LjQ0LDYuNjZsNDgsMzJhNCw0LDAsMCwwLDQuNDQsMGw0OC0zMmE0LDQsMCwxLDAtNC40NC02LjY2Wm0tMTkuNTcsOTZjLTcuODItNS4yLTE1LjI3LTguNjctMjYuMjEtOC42N3MtMTguMzksMy40Ny0yNi4yMSw4LjY3YTQsNCwwLDEsMCw0LjQyLDYuNjZDMTEzLjIsMTgyLjY5LDExOSwxODAsMTI4LDE4MHMxNC44LDIuNjksMjEuNzksNy4zM2E0LDQsMCwxLDAsNC40Mi02LjY2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxNTBhMTAsMTAsMCwxLDEsMTAtMTBBMTAsMTAsMCwwLDEsOTIsMTUwWm03Mi0yMGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCwxNjQsMTMwWm02Ni0yQTEwMiwxMDIsMCwxLDEsMTI4LDI2LDEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDEyOFptLTEyLDBhOTAsOTAsMCwxLDAtOTAsOTBBOTAuMSw5MC4xLDAsMCwwLDIxOCwxMjhaTTE3Mi42Nyw4MywxMjgsMTEyLjc5LDgzLjMzLDgzYTYsNiwwLDAsMC02LjY2LDEwbDQ4LDMyYTYsNiwwLDAsMCw2LjY2LDBsNDgtMzJhNiw2LDAsMSwwLTYuNjYtMTBabS0xNy4zNSw5NmMtOC4xMy01LjQtMTUuODgtOS0yNy4zMi05cy0xOS4xOSwzLjYtMjcuMzIsOWE2LDYsMCwwLDAsNi42NCwxMGM2LjY3LTQuNDMsMTIuMTktNywyMC42OC03czE0LDIuNTcsMjAuNjgsN2E1Ljk0LDUuOTQsMCwwLDAsMy4zMSwxLDYsNiwwLDAsMCwzLjMzLTExWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxNTZhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsOTIsMTU2Wm03Mi0zMmExNiwxNiwwLDEsMCwxNiwxNkExNiwxNiwwLDAsMCwxNjQsMTI0Wm03Miw0QTEwOCwxMDgsMCwxLDEsMTI4LDIwLDEwOC4xMiwxMDguMTIsMCwwLDEsMjM2LDEyOFptLTI0LDBhODQsODQsMCwxLDAtODQsODRBODQuMDksODQuMDksMCwwLDAsMjEyLDEyOFpNODUuMzQsMTAybDM2LDI0YTEyLDEyLDAsMCwwLDEzLjMyLDBsMzYtMjRhMTIsMTIsMCwwLDAtMTMuMzItMjBMMTI4LDEwMS41OCw5OC42Niw4MmExMiwxMiwwLDAsMC0xMy4zMiwyMFpNMTU0LDE2Ny4xMmE1MS4xLDUxLjEsMCwwLDAtNTIsMCwxMiwxMiwwLDEsMCwxMiwyMC43NiwyNy4xMywyNy4xMywwLDAsMSwyOCwwLDEyLDEyLDAsMSwwLDEyLTIwLjc2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk04MCwxNDBhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsODAsMTQwWm03OC42Niw0OC40M2E4LDgsMCwwLDEtMTEuMDksMi4yM0MxNDEuMDcsMTg2LjM0LDEzNiwxODQsMTI4LDE4NHMtMTMuMDcsMi4zNC0xOS41Nyw2LjY2YTgsOCwwLDAsMS04Ljg2LTEzLjMyQzEwOCwxNzEuNzMsMTE2LjA2LDE2OCwxMjgsMTY4czIwLDMuNzMsMjguNDMsOS4zNEE4LDgsMCwwLDEsMTU4LjY2LDE4OC40M1pNMTY0LDE1MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNjQsMTUyWm0xNi40NC01Ny4zNC00OCwzMmE4LDgsMCwwLDEtOC44OCwwbC00OC0zMmE4LDgsMCwxLDEsOC44OC0xMy4zMkwxMjgsMTEwLjM5bDQzLjU2LTI5YTgsOCwwLDAsMSw4Ljg4LDEzLjMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNOTIsMTUyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDkyLDE1MlptNzItMjRhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTY0LDEyOFptNjgsMEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS0xNiwwYTg4LDg4LDAsMSwwLTg4LDg4QTg4LjEsODguMSwwLDAsMCwyMTYsMTI4Wk0xNzEuNTYsODEuMzQsMTI4LDExMC4zOWwtNDMuNTYtMjlhOCw4LDAsMSwwLTguODgsMTMuMzJsNDgsMzJhOCw4LDAsMCwwLDguODgsMGw0OC0zMmE4LDgsMCwwLDAtOC44OC0xMy4zMlptLTE1LjEzLDk2QzE0OCwxNzEuNzMsMTM5Ljk0LDE2OCwxMjgsMTY4cy0yMCwzLjczLTI4LjQzLDkuMzRhOCw4LDAsMCwwLDguODYsMTMuMzJDMTE0LjkzLDE4Ni4zNCwxMjAsMTg0LDEyOCwxODRzMTMuMDcsMi4zNCwxOS41Nyw2LjY2YTgsOCwwLDEsMCw4Ljg2LTEzLjMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SmileyAngry";
export { I as SmileyAngry };
