/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Usb";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEuMiwxMTguNGwtNDgtMzZBMTIsMTIsMCwwLDAsMTg0LDkydjI0SDc2Vjc2SDk4LjA2YTM2LDM2LDAsMSwwLDAtMjRINzJBMjAsMjAsMCwwLDAsNTIsNzJ2NDRIMTJhMTIsMTIsMCwwLDAsMCwyNEg1MnY0NGEyMCwyMCwwLDAsMCwyMCwyMEg5NnY0YTIwLDIwLDAsMCwwLDIwLDIwaDMyYTIwLDIwLDAsMCwwLDIwLTIwVjE3NmEyMCwyMCwwLDAsMC0yMC0yMEgxMTZhMjAsMjAsMCwwLDAtMjAsMjB2NEg3NlYxNDBIMTg0djI0YTEyLDEyLDAsMCwwLDE5LjIsOS42bDQ4LTM2YTEyLDEyLDAsMCwwLDAtMTkuMlpNMTMyLDUyYTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDEzMiw1MlpNMTIwLDE4MGgyNHYyNEgxMjBabTg4LTQwVjExNmwxNiwxMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNjRhMjQsMjQsMCwxLDEtMjQtMjRBMjQsMjQsMCwwLDEsMTYwLDY0Wm00MCwzMnY2NGw0OC0zMlptLTQ4LDcySDEyMGE4LDgsMCwwLDAtOCw4djMyYTgsOCwwLDAsMCw4LDhoMzJhOCw4LDAsMCwwLDgtOFYxNzZBOCw4LDAsMCwwLDE1MiwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjUyLjQ0LDEyMS4zNGwtNDgtMzJBOCw4LDAsMCwwLDE5Miw5NnYyNEg3MlY3MmgzM2EzMiwzMiwwLDEsMCwwLTE2SDcyQTE2LDE2LDAsMCwwLDU2LDcydjQ4SDhhOCw4LDAsMCwwLDAsMTZINTZ2NDhhMTYsMTYsMCwwLDAsMTYsMTZoMzJ2OGExNiwxNiwwLDAsMCwxNiwxNmgzMmExNiwxNiwwLDAsMCwxNi0xNlYxNzZhMTYsMTYsMCwwLDAtMTYtMTZIMTIwYTE2LDE2LDAsMCwwLTE2LDE2djhINzJWMTM2SDE5MnYyNGE4LDgsMCwwLDAsMTIuNDQsNi42Nmw0OC0zMmE4LDgsMCwwLDAsMC0xMy4zMlpNMTM2LDQ4YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDEzNiw0OFpNMTIwLDE3NmgzMnYzMkgxMjBabTg4LTMwLjk1VjExMWwyNS41OCwxN1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsMTI4YTQsNCwwLDAsMS0xLjc4LDMuMzNsLTQ4LDMyQTQsNCwwLDAsMSwxOTYsMTYwVjEzNkg3MnY0OGgzNnYtOGExMiwxMiwwLDAsMSwxMi0xMmgzMmExMiwxMiwwLDAsMSwxMiwxMnYzMmExMiwxMiwwLDAsMS0xMiwxMkgxMjBhMTIsMTIsMCwwLDEtMTItMTJ2LThINzJhMTYsMTYsMCwwLDEtMTYtMTZWMTM2SDhhOCw4LDAsMCwxLDAtMTZINTZWNzJBMTYsMTYsMCwwLDEsNzIsNTZoMzcuMTdhMjgsMjgsMCwxLDEsMCwxNkg3MnY0OEgxOTZWOTZhNCw0LDAsMCwxLDYuMjItMy4zM2w0OCwzMkE0LDQsMCwwLDEsMjUyLDEyOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEuMzMsMTIzbC00OC0zMkE2LDYsMCwwLDAsMTk0LDk2djI2SDcwVjcyYTIsMiwwLDAsMSwyLTJoMzQuNmEzMCwzMCwwLDEsMCwwLTEySDcyQTE0LDE0LDAsMCwwLDU4LDcydjUwSDhhNiw2LDAsMCwwLDAsMTJINTh2NTBhMTQsMTQsMCwwLDAsMTQsMTRoMzR2MTBhMTQsMTQsMCwwLDAsMTQsMTRoMzJhMTQsMTQsMCwwLDAsMTQtMTRWMTc2YTE0LDE0LDAsMCwwLTE0LTE0SDEyMGExNCwxNCwwLDAsMC0xNCwxNHYxMEg3MmEyLDIsMCwwLDEtMi0yVjEzNEgxOTR2MjZhNiw2LDAsMCwwLDkuMzMsNWw0OC0zMmE2LDYsMCwwLDAsMC0xMFpNMTM2LDQ2YTE4LDE4LDAsMSwxLTE4LDE4QTE4LDE4LDAsMCwxLDEzNiw0NlpNMTE4LDE3NmEyLDIsMCwwLDEsMi0yaDMyYTIsMiwwLDAsMSwyLDJ2MzJhMiwyLDAsMCwxLTIsMkgxMjBhMiwyLDAsMCwxLTItMlptODgtMjcuMjFWMTA3LjIxTDIzNy4xOCwxMjhaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuNDQsMTIxLjM0bC00OC0zMkE4LDgsMCwwLDAsMTkyLDk2djI0SDcyVjcyaDMzYTMyLDMyLDAsMSwwLDAtMTZINzJBMTYsMTYsMCwwLDAsNTYsNzJ2NDhIOGE4LDgsMCwwLDAsMCwxNkg1NnY0OGExNiwxNiwwLDAsMCwxNiwxNmgzMnY4YTE2LDE2LDAsMCwwLDE2LDE2aDMyYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNkgxMjBhMTYsMTYsMCwwLDAtMTYsMTZ2OEg3MlYxMzZIMTkydjI0YTgsOCwwLDAsMCwxMi40NCw2LjY2bDQ4LTMyYTgsOCwwLDAsMCwwLTEzLjMyWk0xMzYsNDhhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsMTM2LDQ4Wk0xMjAsMTc2aDMydjMySDEyMFptODgtMzAuOTVWMTExbDI1LjU4LDE3WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTAuMjIsMTI0LjY3bC00OC0zMkE0LDQsMCwwLDAsMTk2LDk2djI4SDY4VjcyYTQsNCwwLDAsMSw0LTRoMzYuMjlhMjgsMjgsMCwxLDAsMC04SDcyQTEyLDEyLDAsMCwwLDYwLDcydjUySDhhNCw0LDAsMCwwLDAsOEg2MHY1MmExMiwxMiwwLDAsMCwxMiwxMmgzNnYxMmExMiwxMiwwLDAsMCwxMiwxMmgzMmExMiwxMiwwLDAsMCwxMi0xMlYxNzZhMTIsMTIsMCwwLDAtMTItMTJIMTIwYTEyLDEyLDAsMCwwLTEyLDEydjEySDcyYTQsNCwwLDAsMS00LTRWMTMySDE5NnYyOGE0LDQsMCwwLDAsMi4xMSwzLjUzLDQsNCwwLDAsMCw0LjExLS4ybDQ4LTMyYTQsNCwwLDAsMCwwLTYuNjZaTTEzNiw0NGEyMCwyMCwwLDEsMS0yMCwyMEEyMCwyMCwwLDAsMSwxMzYsNDRaTTExNiwxNzZhNCw0LDAsMCwxLDQtNGgzMmE0LDQsMCwwLDEsNCw0djMyYTQsNCwwLDAsMS00LDRIMTIwYTQsNCwwLDAsMS00LTRabTg4LTIzLjQ3VjEwMy40N0wyNDAuNzksMTI4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Usb";
export { I as Usb };
