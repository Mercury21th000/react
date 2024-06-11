/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Bicycle";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTEyYTQ3LjgxLDQ3LjgxLDAsMCwwLTE2LjkzLDMuMDlMMTY1LjkzLDcySDE5MmE4LDgsMCwwLDEsOCw4LDgsOCwwLDAsMCwxNiwwLDI0LDI0LDAsMCwwLTI0LTI0SDE1MmE4LDgsMCwwLDAtNi45MSwxMmwxMS42NSwyMEg5OS4yNkw4Mi45MSw2MEE4LDgsMCwwLDAsNzYsNTZINDhhOCw4LDAsMCwwLDAsMTZINzEuNDFMODUuMTIsOTUuNTEsNjkuNDEsMTE3LjA2YTQ4LjEzLDQ4LjEzLDAsMSwwLDEyLjkyLDkuNDRsMTEuNTktMTUuOUwxMjUuMDksMTY0QTgsOCwwLDEsMCwxMzguOTEsMTU2bC0zMC4zMi01Mmg1Ny40OGwxMS4xOSwxOS4xN0E0OCw0OCwwLDEsMCwyMDgsMTEyWk04MCwxNjBhMzIsMzIsMCwxLDEtMjAuMjEtMjkuNzRsLTE4LjI1LDI1YTgsOCwwLDEsMCwxMi45Miw5LjQybDE4LjI1LTI1QTMxLjg4LDMxLjg4LDAsMCwxLDgwLDE2MFptMTI4LDMyYTMyLDMyLDAsMCwxLTIyLjUxLTU0LjcyTDIwMS4wOSwxNjRBOCw4LDAsMSwwLDIxNC45MSwxNTZMMTk5LjMsMTI5LjIxQTMyLDMyLDAsMSwxLDIwOCwxOTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTE2YTQzLjY2LDQzLjY2LDAsMCwwLTE4LjYyLDQuMTVMMTU5LDY4aDMzYTEyLDEyLDAsMCwxLDEyLDEyLDQsNCwwLDAsMCw4LDAsMjAsMjAsMCwwLDAtMjAtMjBIMTUyYTQsNCwwLDAsMC0zLjQ2LDZMMTYzLjcsOTJIOTdMNzkuNDYsNjJBNCw0LDAsMCwwLDc2LDYwSDQ4YTQsNCwwLDAsMCwwLDhINzMuN0w4OS44OSw5NS43Niw3MC41NywxMjIuMjVBNDQuMjEsNDQuMjEsMCwxLDAsNzcsMTI3TDk0LjI5LDEwMy4zLDEyOC41NCwxNjJhNCw0LDAsMCwwLDMuNDYsMiw0LjExLDQuMTEsMCwwLDAsMi0uNTQsNCw0LDAsMCwwLDEuNDQtNS40OGwtMzMuODMtNThoNjYuNzRsMTQuMTEsMjQuMTlBNDQsNDQsMCwxLDAsMjA4LDExNlpNODQsMTYwYTM2LDM2LDAsMSwxLTE4LjE2LTMxLjI1TDQ0Ljc3LDE1Ny42NGE0LDQsMCwwLDAsNi40Niw0LjcybDIxLjA3LTI4LjlBMzUuOTIsMzUuOTIsMCwwLDEsODQsMTYwWm0xMjQsMzZhMzYsMzYsMCwwLDEtMjEuNDctNjQuODhsMTgsMzAuOWE0LDQsMCwwLDAsMy40NiwyLDQuMTEsNC4xMSwwLDAsMCwyLS41NCw0LDQsMCwwLDAsMS40NC01LjQ4bC0xOC0zMC44OUEzNiwzNiwwLDEsMSwyMDgsMTk2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTE0YTQ1Ljg4LDQ1Ljg4LDAsMCwwLTE3LjgsMy41OEwxNjIuNDUsNzBIMTkyYTEwLDEwLDAsMCwxLDEwLDEwLDYsNiwwLDAsMCwxMiwwLDIyLDIyLDAsMCwwLTIyLTIySDE1MmE2LDYsMCwwLDAtNS4xOCw5bDEzLjQsMjNIOTguMTFMODEuMTgsNjFBNiw2LDAsMCwwLDc2LDU4SDQ4YTYsNiwwLDAsMCwwLDEySDcyLjU1bDE1LDI1LjY0TDcwLDExOS42MmE0Ni4yMiw0Ni4yMiwwLDEsMCw5LjY4LDcuMDlMOTQuMTEsMTA3LDEyNi44MiwxNjNhNiw2LDAsMCwwLDUuMTksMyw1LjkxLDUuOTEsMCwwLDAsMy0uODIsNiw2LDAsMCwwLDIuMTYtOC4ybC0zMi4wNy01NWg2Mi4xMWwxMi42MywyMS42NkE0Niw0NiwwLDEsMCwyMDgsMTE0Wk04MiwxNjBhMzQsMzQsMCwxLDEtMTkuMTMtMzAuNTdsLTE5LjcyLDI3YTYsNiwwLDAsMCw5LjcsNy4wOGwxOS43LTI3QTMzLjg4LDMzLjg4LDAsMCwxLDgyLDE2MFptMTI2LDM0YTM0LDM0LDAsMCwxLTIyLTU5Ljg2TDIwMi44MiwxNjNhNiw2LDAsMCwwLDUuMTksMyw1LjkxLDUuOTEsMCwwLDAsMy0uODIsNiw2LDAsMCwwLDIuMTYtOC4ybC0xNi44Ni0yOC45MUEzNCwzNCwwLDEsMSwyMDgsMTk0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTA4YTUxLjgyLDUxLjgyLDAsMCwwLTE1LjEzLDIuMjVMMTY4Ljg5LDc2SDE5MmE0LDQsMCwwLDEsNCw0LDEyLDEyLDAsMCwwLDI0LDAsMjgsMjgsMCwwLDAtMjgtMjhIMTQ4YTEyLDEyLDAsMCwwLTEwLjM3LDE4bDguMTQsMTRIMTA5LjU2TDk0LjM3LDU4QTEyLDEyLDAsMCwwLDg0LDUySDUyYTEyLDEyLDAsMCwwLDAsMjRINzcuMTFMODguMTgsOTUsNzQsMTEyLjg5YTUyLjE3LDUyLjE3LDAsMSwwLDE4LjgsMTQuOTJsOC4zNy0xMC41N0wxMTgsMTQ2LjA1QTEyLDEyLDAsMSwwLDEzOC43LDEzNEwxMjMuNTYsMTA4aDM2LjIxbDguMzksMTQuMzhBNTIsNTIsMCwxLDAsMjA0LDEwOFpNODAsMTYwYTI4LDI4LDAsMSwxLTIxLjcxLTI3LjI4bC0xNS43LDE5LjgzYTEyLDEyLDAsMCwwLDE4LjgyLDE0LjlsMTUuNy0xOS44M0EyNy44NCwyNy44NCwwLDAsMSw4MCwxNjBabTEyNCwyOGEyOCwyOCwwLDAsMS0yMy4xMS00My43OWwxMi43NCwyMS44NEExMiwxMiwwLDAsMCwyMTQuMzcsMTU0bC0xMi43NS0yMS44NGMuNzktLjA3LDEuNTgtLjExLDIuMzgtLjExYTI4LDI4LDAsMCwxLDAsNTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01NC40NiwxNjQuNzEsODIuMzMsMTI2LjVhNDgsNDgsMCwxLDEtMTIuOTItOS40NEw0MS41NCwxNTUuMjlhOCw4LDAsMSwwLDEyLjkyLDkuNDJaTTIwOCwxMTJhNDcuODEsNDcuODEsMCwwLDAtMTYuOTMsMy4wOUwyMTQuOTEsMTU2QTgsOCwwLDEsMSwyMDEuMDksMTY0bC0yMy44My00MC44NkE0OCw0OCwwLDEsMCwyMDgsMTEyWk0xNjUuOTMsNzJIMTkyYTgsOCwwLDAsMSw4LDgsOCw4LDAsMCwwLDE2LDAsMjQsMjQsMCwwLDAtMjQtMjRIMTUyYTgsOCwwLDAsMC02LjkxLDEybDExLjY1LDIwSDk5LjI2TDgyLjkxLDYwQTgsOCwwLDAsMCw3Niw1Nkg0OGE4LDgsMCwwLDAsMCwxNkg3MS40MUw4NS4xMiw5NS41MSw2OS40MSwxMTcuMDZhNDcuODcsNDcuODcsMCwwLDEsMTIuOTIsOS40NGwxMS41OS0xNS45TDEyNS4wOSwxNjRBOCw4LDAsMSwwLDEzOC45MSwxNTZsLTMwLjMyLTUyaDU3LjQ4bDExLjE5LDE5LjE3YTQ4LjExLDQ4LjExLDAsMCwxLDEzLjgxLTguMDhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTYwYTQwLDQwLDAsMSwxLTQwLTQwQTQwLDQwLDAsMCwxLDI0OCwxNjBaTTQ4LDEyMGE0MCw0MCwwLDEsMCw0MCw0MEE0MCw0MCwwLDAsMCw0OCwxMjBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDExMmE0Ny44MSw0Ny44MSwwLDAsMC0xNi45MywzLjA5TDE2NS45Myw3MkgxOTJhOCw4LDAsMCwxLDgsOCw4LDgsMCwwLDAsMTYsMCwyNCwyNCwwLDAsMC0yNC0yNEgxNTJhOCw4LDAsMCwwLTYuOTEsMTJsMTEuNjUsMjBIOTkuMjZMODIuOTEsNjBBOCw4LDAsMCwwLDc2LDU2SDQ4YTgsOCwwLDAsMCwwLDE2SDcxLjQxTDg1LjEyLDk1LjUxLDY5LjQxLDExNy4wNmE0OC4xMyw0OC4xMywwLDEsMCwxMi45Miw5LjQ0bDExLjU5LTE1LjlMMTI1LjA5LDE2NEE4LDgsMCwxLDAsMTM4LjkxLDE1NmwtMzAuMzItNTJoNTcuNDhsMTEuMTksMTkuMTdBNDgsNDgsMCwxLDAsMjA4LDExMlpNODAsMTYwYTMyLDMyLDAsMSwxLTIwLjIxLTI5Ljc0bC0xOC4yNSwyNWE4LDgsMCwxLDAsMTIuOTIsOS40MmwxOC4yNS0yNUEzMS44OCwzMS44OCwwLDAsMSw4MCwxNjBabTEyOCwzMmEzMiwzMiwwLDAsMS0yMi41MS01NC43MkwyMDEuMDksMTY0QTgsOCwwLDEsMCwyMTQuOTEsMTU2TDE5OS4zLDEyOS4yMUEzMiwzMiwwLDEsMSwyMDgsMTkyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Bicycle";
export { I as Bicycle };
