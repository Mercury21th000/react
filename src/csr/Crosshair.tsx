/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Crosshair";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIwaC04LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDEzNiwzMi4zNFYyNGE4LDgsMCwwLDAtMTYsMHY4LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDMyLjM0LDEyMEgyNGE4LDgsMCwwLDAsMCwxNmg4LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDEyMCwyMjMuNjZWMjMyYTgsOCwwLDAsMCwxNiwwdi04LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDIyMy42NiwxMzZIMjMyYTgsOCwwLDAsMCwwLTE2Wm0tOTYsODcuNlYyMDBhOCw4LDAsMCwwLTE2LDB2Ny42QTgwLjE1LDgwLjE1LDAsMCwxLDQ4LjQsMTM2SDU2YTgsOCwwLDAsMCwwLTE2SDQ4LjRBODAuMTUsODAuMTUsMCwwLDEsMTIwLDQ4LjRWNTZhOCw4LDAsMCwwLDE2LDBWNDguNEE4MC4xNSw4MC4xNSwwLDAsMSwyMDcuNiwxMjBIMjAwYTgsOCwwLDAsMCwwLDE2aDcuNkE4MC4xNSw4MC4xNSwwLDAsMSwxMzYsMjA3LjZaTTEyOCw4OGE0MCw0MCwwLDEsMCw0MCw0MEE0MCw0MCwwLDAsMCwxMjgsODhabTAsNjRhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTI4LDE1MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI0SDIxOS45MUE5Mi4xMyw5Mi4xMywwLDAsMCwxMzIsMzYuMDlWMjRhNCw0LDAsMCwwLTgsMFYzNi4wOUE5Mi4xMyw5Mi4xMywwLDAsMCwzNi4wOSwxMjRIMjRhNCw0LDAsMCwwLDAsOEgzNi4wOUE5Mi4xMyw5Mi4xMywwLDAsMCwxMjQsMjE5LjkxVjIzMmE0LDQsMCwwLDAsOCwwVjIxOS45MUE5Mi4xMyw5Mi4xMywwLDAsMCwyMTkuOTEsMTMySDIzMmE0LDQsMCwwLDAsMC04Wk0xMzIsMjExLjlWMjAwYTQsNCwwLDAsMC04LDB2MTEuOUE4NC4xMSw4NC4xMSwwLDAsMSw0NC4xLDEzMkg1NmE0LDQsMCwwLDAsMC04SDQ0LjFBODQuMTEsODQuMTEsMCwwLDEsMTI0LDQ0LjFWNTZhNCw0LDAsMCwwLDgsMFY0NC4xQTg0LjExLDg0LjExLDAsMCwxLDIxMS45LDEyNEgyMDBhNCw0LDAsMCwwLDAsOGgxMS45QTg0LjExLDg0LjExLDAsMCwxLDEzMiwyMTEuOVpNMTI4LDkyYTM2LDM2LDAsMSwwLDM2LDM2QTM2LDM2LDAsMCwwLDEyOCw5MlptMCw2NGEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSwxMjgsMTU2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIySDIyMS44QTk0LjEzLDk0LjEzLDAsMCwwLDEzNCwzNC4yVjI0YTYsNiwwLDAsMC0xMiwwVjM0LjJBOTQuMTMsOTQuMTMsMCwwLDAsMzQuMiwxMjJIMjRhNiw2LDAsMCwwLDAsMTJIMzQuMkE5NC4xMyw5NC4xMywwLDAsMCwxMjIsMjIxLjhWMjMyYTYsNiwwLDAsMCwxMiwwVjIyMS44QTk0LjEzLDk0LjEzLDAsMCwwLDIyMS44LDEzNEgyMzJhNiw2LDAsMCwwLDAtMTJabS05OCw4Ny43NlYyMDBhNiw2LDAsMCwwLTEyLDB2OS43NkE4Mi4wOSw4Mi4wOSwwLDAsMSw0Ni4yNCwxMzRINTZhNiw2LDAsMCwwLDAtMTJINDYuMjRBODIuMDksODIuMDksMCwwLDEsMTIyLDQ2LjI0VjU2YTYsNiwwLDAsMCwxMiwwVjQ2LjI0QTgyLjA5LDgyLjA5LDAsMCwxLDIwOS43NiwxMjJIMjAwYTYsNiwwLDAsMCwwLDEyaDkuNzZBODIuMDksODIuMDksMCwwLDEsMTM0LDIwOS43NlpNMTI4LDkwYTM4LDM4LDAsMSwwLDM4LDM4QTM4LDM4LDAsMCwwLDEyOCw5MFptMCw2NGEyNiwyNiwwLDEsMSwyNi0yNkEyNiwyNiwwLDAsMSwxMjgsMTU0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTE2aC00LjcyQTEwMC4yMSwxMDAuMjEsMCwwLDAsMTQwLDI4LjcyVjI0YTEyLDEyLDAsMCwwLTI0LDB2NC43MkExMDAuMjEsMTAwLjIxLDAsMCwwLDI4LjcyLDExNkgyNGExMiwxMiwwLDAsMCwwLDI0aDQuNzJBMTAwLjIxLDEwMC4yMSwwLDAsMCwxMTYsMjI3LjI4VjIzMmExMiwxMiwwLDAsMCwyNCwwdi00LjcyQTEwMC4yMSwxMDAuMjEsMCwwLDAsMjI3LjI4LDE0MEgyMzJhMTIsMTIsMCwwLDAsMC0yNFptLTkyLDg3di0zYTEyLDEyLDAsMCwwLTI0LDB2M2E3Ni4xNSw3Ni4xNSwwLDAsMS02My02M2gzYTEyLDEyLDAsMCwwLDAtMjRINTNhNzYuMTUsNzYuMTUsMCwwLDEsNjMtNjN2M2ExMiwxMiwwLDAsMCwyNCwwVjUzYTc2LjE1LDc2LjE1LDAsMCwxLDYzLDYzaC0zYTEyLDEyLDAsMCwwLDAsMjRoM0E3Ni4xNSw3Ni4xNSwwLDAsMSwxNDAsMjAzWk0xMjgsODRhNDQsNDQsMCwxLDAsNDQsNDRBNDQuMDUsNDQuMDUsMCwwLDAsMTI4LDg0Wm0wLDY0YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDEyOCwxNDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIwaC04LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDEzNiwzMi4zNFYyNGE4LDgsMCwwLDAtMTYsMHY4LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDMyLjM0LDEyMEgyNGE4LDgsMCwwLDAsMCwxNmg4LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDEyMCwyMjMuNjZWMjMyYTgsOCwwLDAsMCwxNiwwdi04LjM0QTk2LjE0LDk2LjE0LDAsMCwwLDIyMy42NiwxMzZIMjMyYTgsOCwwLDAsMCwwLTE2Wm0tMzIsMTZoNy42QTgwLjE1LDgwLjE1LDAsMCwxLDEzNiwyMDcuNlYyMDBhOCw4LDAsMCwwLTE2LDB2Ny42QTgwLjE1LDgwLjE1LDAsMCwxLDQ4LjQsMTM2SDU2YTgsOCwwLDAsMCwwLTE2SDQ4LjRBODAuMTUsODAuMTUsMCwwLDEsMTIwLDQ4LjRWNTZhOCw4LDAsMCwwLDE2LDBWNDguNEE4MC4xNSw4MC4xNSwwLDAsMSwyMDcuNiwxMjBIMjAwYTgsOCwwLDAsMCwwLDE2Wm0tMzItOGE0MCw0MCwwLDEsMS00MC00MEE0MCw0MCwwLDAsMSwxNjgsMTI4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTI4YTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDE2MCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDEyMGgtOC4zNEE5Ni4xNCw5Ni4xNCwwLDAsMCwxMzYsMzIuMzRWMjRhOCw4LDAsMCwwLTE2LDB2OC4zNEE5Ni4xNCw5Ni4xNCwwLDAsMCwzMi4zNCwxMjBIMjRhOCw4LDAsMCwwLDAsMTZoOC4zNEE5Ni4xNCw5Ni4xNCwwLDAsMCwxMjAsMjIzLjY2VjIzMmE4LDgsMCwwLDAsMTYsMHYtOC4zNEE5Ni4xNCw5Ni4xNCwwLDAsMCwyMjMuNjYsMTM2SDIzMmE4LDgsMCwwLDAsMC0xNlptLTk2LDg3LjZWMjAwYTgsOCwwLDAsMC0xNiwwdjcuNkE4MC4xNSw4MC4xNSwwLDAsMSw0OC40LDEzNkg1NmE4LDgsMCwwLDAsMC0xNkg0OC40QTgwLjE1LDgwLjE1LDAsMCwxLDEyMCw0OC40VjU2YTgsOCwwLDAsMCwxNiwwVjQ4LjRBODAuMTUsODAuMTUsMCwwLDEsMjA3LjYsMTIwSDIwMGE4LDgsMCwwLDAsMCwxNmg3LjZBODAuMTUsODAuMTUsMCwwLDEsMTM2LDIwNy42Wk0xMjgsODhhNDAsNDAsMCwxLDAsNDAsNDBBNDAsNDAsMCwwLDAsMTI4LDg4Wm0wLDY0YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDEyOCwxNTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Crosshair";
export { I as Crosshair };
