/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Vault";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDUydjEyYTEyLDEyLDAsMCwwLDI0LDBWMjEySDE4MHYxMmExMiwxMiwwLDAsMCwyNCwwVjIxMmgxMmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZaTTQ0LDE4OFY2MEgyMTJ2NTJIMTkwLjMyYTQ0LDQ0LDAsMSwwLDAsMjRIMjEydjUyWm0xMjQtNjRhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMTY4LDEyNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFY1NkE4LDgsMCwwLDAsMjE2LDQ4Wk0xNTIsMTY4YTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDE1MiwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE5MmExNiwxNiwwLDAsMCwxNiwxNkg1NnYxNmE4LDgsMCwwLDAsMTYsMFYyMDhIMTg0djE2YTgsOCwwLDAsMCwxNiwwVjIwOGgxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTUySDQwVjU2SDIxNnY2NEgxOTkuMzJhNDgsNDgsMCwxLDAsMCwxNkgyMTZ2NTZabS01MC4xNi03MmExNiwxNiwwLDEsMCwwLDE2SDE4M2EzMiwzMiwwLDEsMSwwLTE2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDU2djE2YTgsOCwwLDAsMCwxNiwwVjIwOEgxODR2MTZhOCw4LDAsMCwwLDE2LDBWMjA4aDE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptLTgsOTZIMTc5LjA5YTM2LDM2LDAsMSwxLDAtMTZIMjA4YTgsOCwwLDAsMSwwLDE2Wm0tNDQtOGEyMCwyMCwwLDEsMS0yMC0yMEEyMCwyMCwwLDAsMSwxNjQsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDU4djE4YTYsNiwwLDAsMCwxMiwwVjIwNkgxODZ2MThhNiw2LDAsMCwwLDEyLDBWMjA2aDE4YTE0LDE0LDAsMCwwLDE0LTE0VjU2QTE0LDE0LDAsMCwwLDIxNiw0MlptMCwxNTJINDBhMiwyLDAsMCwxLTItMlY1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwydjY2SDE5Ny42YTQ2LDQ2LDAsMSwwLDAsMTJIMjE4djU4QTIsMiwwLDAsMSwyMTYsMTk0Wm0tNTEuMzctNzJhMTQsMTQsMCwxLDAsMCwxMmgyMC44M2EzNCwzNCwwLDEsMSwwLTEyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDU2djE2YTgsOCwwLDAsMCwxNiwwVjIwOEgxODR2MTZhOCw4LDAsMCwwLDE2LDBWMjA4aDE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCwxNTJINDBWNTZIMjE2djY0SDE5OS4zMmE0OCw0OCwwLDEsMCwwLDE2SDIxNnY1NlptLTUwLjE2LTcyYTE2LDE2LDAsMSwwLDAsMTZIMTgzYTMyLDMyLDAsMSwxLDAtMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDYwdjIwYTQsNCwwLDAsMCw4LDBWMjA0SDE4OHYyMGE0LDQsMCwwLDAsOCwwVjIwNGgyMGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTAsMTUySDQwYTQsNCwwLDAsMS00LTRWNTZhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNHY2OEgxOTUuODFhNDQsNDQsMCwxLDAsMCw4SDIyMHY2MEE0LDQsMCwwLDEsMjE2LDE5NlptLTUyLjctNzJhMTIsMTIsMCwxLDAsMCw4aDI0LjQ3YTM2LDM2LDAsMSwxLDAtOFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Vault";
export { I as Vault };
