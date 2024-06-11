/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CallBell";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCwxODBIMjMyYTEyLDEyLDAsMCwwLDAtMjRoLTQuMDlBMTAwLjE2LDEwMC4xNiwwLDAsMCwxNDAsNjAuNzJWNDRoMTJhMTIsMTIsMCwwLDAsMC0yNEgxMDRhMTIsMTIsMCwwLDAsMCwyNGgxMlY2MC43MkExMDAuMTYsMTAwLjE2LDAsMCwwLDI4LjA5LDE1NkgyNGExMiwxMiwwLDAsMCwwLDI0Wk0xMjgsODRhNzYuMDksNzYuMDksMCwwLDEsNzUuODksNzJINTIuMTFBNzYuMDksNzYuMDksMCwwLDEsMTI4LDg0Wk0yNDQsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDI0YTEyLDEyLDAsMCwxLDAtMjRIMjMyQTEyLDEyLDAsMCwxLDI0NCwyMDhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUydjI0SDQwVjE1MmE4OCw4OCwwLDAsMSwxNzYsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNCwxODRIMjMyYTgsOCwwLDAsMCwwLTE2aC04VjE1MmE5Ni4xMiw5Ni4xMiwwLDAsMC04OC05NS42NlY0MGgxNmE4LDgsMCwwLDAsMC0xNkgxMDRhOCw4LDAsMCwwLDAsMTZoMTZWNTYuMzRBOTYuMTIsOTYuMTIsMCwwLDAsMzIsMTUydjE2SDI0YTgsOCwwLDAsMCwwLDE2Wm0yNC0zMmE4MCw4MCwwLDAsMSwxNjAsMHYxNkg0OFptMTkyLDU2YTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLDAtMTZIMjMyQTgsOCwwLDAsMSwyNDAsMjA4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNiwxNzZhOCw4LDAsMCwxLDgtOGg4VjE1MmE5Ni4xMiw5Ni4xMiwwLDAsMSw4OC05NS42NlY0MEgxMDRhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDAsMTZIMTM2VjU2LjM0QTk2LjEyLDk2LjEyLDAsMCwxLDIyNCwxNTJ2MTZoOGE4LDgsMCwwLDEsMCwxNkgyNEE4LDgsMCwwLDEsMTYsMTc2Wm0yMTYsMjRIMjRhOCw4LDAsMCwwLDAsMTZIMjMyYTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCwxODJIMjMyYTYsNiwwLDAsMCwwLTEySDIyMlYxNTJhOTQuMSw5NC4xLDAsMCwwLTg4LTkzLjhWMzhoMThhNiw2LDAsMCwwLDAtMTJIMTA0YTYsNiwwLDAsMCwwLDEyaDE4VjU4LjJBOTQuMSw5NC4xLDAsMCwwLDM0LDE1MnYxOEgyNGE2LDYsMCwwLDAsMCwxMlptMjItMzBhODIsODIsMCwwLDEsMTY0LDB2MThINDZabTE5Miw1NmE2LDYsMCwwLDEtNiw2SDI0YTYsNiwwLDAsMSwwLTEySDIzMkE2LDYsMCwwLDEsMjM4LDIwOFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCwxODRIMjMyYTgsOCwwLDAsMCwwLTE2aC04VjE1MmE5Ni4xMiw5Ni4xMiwwLDAsMC04OC05NS42NlY0MGgxNmE4LDgsMCwwLDAsMC0xNkgxMDRhOCw4LDAsMCwwLDAsMTZoMTZWNTYuMzRBOTYuMTIsOTYuMTIsMCwwLDAsMzIsMTUydjE2SDI0YTgsOCwwLDAsMCwwLDE2Wm0yNC0zMmE4MCw4MCwwLDAsMSwxNjAsMHYxNkg0OFptMTkyLDU2YTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLDAtMTZIMjMyQTgsOCwwLDAsMSwyNDAsMjA4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCwxODBIMjMyYTQsNCwwLDAsMCwwLThIMjIwVjE1MmE5Mi4xMSw5Mi4xMSwwLDAsMC04OC05MS45MVYzNmgyMGE0LDQsMCwwLDAsMC04SDEwNGE0LDQsMCwwLDAsMCw4aDIwVjYwLjA5QTkyLjExLDkyLjExLDAsMCwwLDM2LDE1MnYyMEgyNGE0LDQsMCwwLDAsMCw4Wm0yMC0yOGE4NCw4NCwwLDAsMSwxNjgsMHYyMEg0NFptMTkyLDU2YTQsNCwwLDAsMS00LDRIMjRhNCw0LDAsMCwxLDAtOEgyMzJBNCw0LDAsMCwxLDIzNiwyMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CallBell";
export { I as CallBell };
