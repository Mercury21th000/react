/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/PenNibStraight";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuOTIsMTIyLjExYy0uMS0uMTktLjE5LS4zNy0uMy0uNTZMMTk2LDY4Ljg1VjMyYTIwLDIwLDAsMCwwLTIwLTIwSDgwQTIwLDIwLDAsMCwwLDYwLDMyVjY4Ljg3TDMwLjM4LDEyMS41NWE1LjEyLDUuMTIsMCwwLDAtLjMuNTcsMTkuODksMTkuODksMCwwLDAsMS44MywyMC43MWMuMDkuMTMuMTguMjUuMjguMzdsODYuNDQsMTA4LjI5YTEyLDEyLDAsMCwwLDE4Ljc1LDBMMjIzLjgxLDE0My4yYy4xLS4xMi4xOS0uMjQuMjgtLjM3QTE5LjkxLDE5LjkxLDAsMCwwLDIyNS45MiwxMjIuMTFaTTE3MiwzNlY2MEg4NFYzNlpNMTI4LDE0NGExMCwxMCwwLDEsMSwxMC0xMEExMCwxMCwwLDAsMSwxMjgsMTQ0Wm0xMiw2NS43NFYxNjUuODFhMzQsMzQsMCwxLDAtMjQsMHY0My45Mkw1Mi44MywxMzAuNTksNzksODRIMTc3bDI2LjE5LDQ2LjU5WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuMTcsMTI3LjQzLDE4NCw3Mkg3Mkw0MC44MywxMjcuNDNhOCw4LDAsMCwwLC43Myw4LjI5TDEyOCwyNDhsODYuNDMtMTEyLjI4QTgsOCwwLDAsMCwyMTUuMTcsMTI3LjQzWk0xMjgsMTUyYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDEyOCwxNTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjIyLjMzLDEyMy44OWMtLjA2LS4xMy0uMTItLjI2LS4xOS0uMzhMMTkyLDY5LjlWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODBBMTYsMTYsMCwwLDAsNjQsMzJWNjkuOTJMMzMuODYsMTIzLjUxYy0uMDcuMTItLjEzLjI1LS4yLjM4YTE1Ljk0LDE1Ljk0LDAsMCwwLDEuNDYsMTYuNTdsLjExLjE0LDg2LjQ0LDExMi4yOGE4LDgsMCwwLDAsMTIuNjcsMEwyMjAuNzcsMTQwLjZsLjExLS4xNEExNS45MiwxNS45MiwwLDAsMCwyMjIuMzMsMTIzLjg5Wk0xNzYsMzJWNjRIODBWMzJaTTEyOCwxNDRhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTI4LDE0NFptOCw4MC41VjE1OC44M2EyOCwyOCwwLDEsMC0xNiwwdjY1LjY2TDQ4LDEzMSw3Ni42OSw4MEgxNzkuMzJMMjA4LDEzMVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMzMsMTIzLjg5Yy0uMDYtLjEzLS4xMi0uMjYtLjE5LS4zOEwxOTIsNjkuOTFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODBBMTYsMTYsMCwwLDAsNjQsMzJWNjkuOUwzMy44NiwxMjMuNTFjLS4wNy4xMi0uMTMuMjUtLjIuMzhhMTUuOTQsMTUuOTQsMCwwLDAsMS40NiwxNi41N2wuMTEuMTQsNzcuNjEsMTAwLjgxQTQsNCwwLDAsMCwxMjAsMjM5VjE1NC42M2EyNCwyNCwwLDEsMSwxNiwwVjIzOWE0LDQsMCwwLDAsNy4xNiwyLjQ0bDc3LjYtMTAwLjgxLjExLS4xNEExNS45MiwxNS45MiwwLDAsMCwyMjIuMzMsMTIzLjg5Wk0xNzYsNjRIODBWMzJoOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNTQsMTI0Ljc3YTEuOTEsMS45MSwwLDAsMC0uMTUtLjI4TDE5MCw3MC40MlYzMmExNCwxNCwwLDAsMC0xNC0xNEg4MEExNCwxNCwwLDAsMCw2NiwzMlY3MC40NGwtMzAuNCw1NC4wNWExLjkxLDEuOTEsMCwwLDAtLjE1LjI4LDE0LDE0LDAsMCwwLDEuMjcsMTQuNS43Ni43NiwwLDAsMSwuMDguMTFsODYuNDQsMTEyLjI4YTYsNiwwLDAsMCw5LjUxLDBsODYuNDMtMTEyLjI4YS43Ni43NiwwLDAsMSwuMDgtLjExQTE0LDE0LDAsMCwwLDIyMC41NCwxMjQuNzdaTTgwLDMwaDk2YTIsMiwwLDAsMSwyLDJWNjZINzhWMzJBMiwyLDAsMCwxLDgwLDMwWm00OCwxMTZhMTQsMTQsMCwxLDEsMTQtMTRBMTQsMTQsMCwwLDEsMTI4LDE0NlptODEuNjMtMTMuODhMMTM0LDIzMC4zOFYxNTcuMjlhMjYsMjYsMCwxLDAtMTIsMHY3My4wN0w0Ni4zNywxMzIuMTJhMiwyLDAsMCwxLS4yLTEuOTNMNzUuNTIsNzhoMTA1bDI5LjM0LDUyLjE5QTIsMiwwLDAsMSwyMDkuNjMsMTMyLjEyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMzMsMTIzLjg5Yy0uMDYtLjEzLS4xMi0uMjYtLjE5LS4zOEwxOTIsNjkuOVYzMmExNiwxNiwwLDAsMC0xNi0xNkg4MEExNiwxNiwwLDAsMCw2NCwzMlY2OS45MkwzMy44NiwxMjMuNTFjLS4wNy4xMi0uMTMuMjUtLjIuMzhhMTUuOTQsMTUuOTQsMCwwLDAsMS40NiwxNi41N2wuMTEuMTQsODYuNDQsMTEyLjI4YTgsOCwwLDAsMCwxMi42NywwTDIyMC43NywxNDAuNmwuMTEtLjE0QTE1LjkyLDE1LjkyLDAsMCwwLDIyMi4zMywxMjMuODlaTTE3NiwzMlY2NEg4MFYzMlpNMTI4LDE0NGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTQ0Wm04LDgwLjVWMTU4LjgzYTI4LDI4LDAsMSwwLTE2LDB2NjUuNjZMNDgsMTMxLDc2LjY5LDgwSDE3OS4zMkwyMDgsMTMxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguNzUsMTI1LjY2YTEuMTQsMS4xNCwwLDAsMC0uMS0uMTlMMTg4LDcwLjk0VjMyYTEyLDEyLDAsMCwwLTEyLTEySDgwQTEyLDEyLDAsMCwwLDY4LDMyVjcxTDM3LjM0LDEyNS40N2wtLjEuMTlhMTIsMTIsMCwwLDAsMS4xNSwxMi41bDg2LjQ0LDExMi4yOGE0LDQsMCwwLDAsNi4zNCwwbDg2LjQ5LTExMi4zNUExMiwxMiwwLDAsMCwyMTguNzUsMTI1LjY2Wk04MCwyOGg5NmE0LDQsMCwwLDEsNCw0VjY4SDc2VjMyQTQsNCwwLDAsMSw4MCwyOFptNDgsMTIwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxNDhabTgzLjI3LTE0LjcyTDEzMiwyMzYuMjVWMTU1LjY2YTI0LDI0LDAsMSwwLTgsMHY4MC41OEw0NC43OCwxMzMuMzRhNCw0LDAsMCwxLS40LTQuMDZMNzQuMzUsNzZIMTgxLjY2bDMwLDUzLjI4QTQsNCwwLDAsMSwyMTEuMjcsMTMzLjI4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PenNibStraight";
export { I as PenNibStraight };
