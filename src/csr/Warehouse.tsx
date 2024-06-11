/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Warehouse";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTgwaC00VjYxLjEzbDYuNTEtMS4zOWExMiwxMiwwLDEsMC01LTIzLjQ3bC0yMjQsNDhBMTIsMTIsMCwwLDAsMTYsMTA4YTEyLjIxLDEyLjIxLDAsMCwwLDIuNTMtLjI2bDEuNDgtLjMyVjE4MEgxNmExMiwxMiwwLDAsMCwwLDI0SDI0MGExMiwxMiwwLDAsMCwwLTI0Wk00NCwxMDIuMjdsMTY4LTM2VjE4MEgxOTJWMTIwYTEyLDEyLDAsMCwwLTEyLTEySDc2YTEyLDEyLDAsMCwwLTEyLDEydjYwSDQ0Wk0xNjgsMTQ0SDg4VjEzMmg4MFpNODgsMTY4aDgwdjEySDg4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTI4djY0SDcyVjEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDAsMTg0aC04VjU3LjlsOS42Ny0yLjA4YTgsOCwwLDEsMC0zLjM1LTE1LjY0bC0yMjQsNDhBOCw4LDAsMCwwLDE2LDEwNGE4LjE2LDguMTYsMCwwLDAsMS42OS0uMThMMjQsMTAyLjQ3VjE4NEgxNmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTQwLDk5LDIxNiw2MS4zM1YxODRIMTkyVjEyOGE4LDgsMCwwLDAtOC04SDcyYTgsOCwwLDAsMC04LDh2NTZINDBabTEzNiw1M0g4MFYxMzZoOTZaTTgwLDE2OGg5NnYxNkg4MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg0aC04VjU3LjlsOS42Ny0yLjA4YTgsOCwwLDEsMC0zLjM1LTE1LjY0bC0yMjQsNDhBOCw4LDAsMCwwLDE2LDEwNGE4LjE2LDguMTYsMCwwLDAsMS42OS0uMThMMjQsMTAyLjQ3VjE4NEgxNmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZabS01NiwwSDcyVjE2OEgxODRabTAtMzJINzJWMTM2SDE4NFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg2SDIzMFY1Ni4yOGwxMS4yNi0yLjQxYTYsNiwwLDEsMC0yLjUyLTExLjc0bC0yMjQsNDhhNiw2LDAsMCwwLDIuNTIsMTEuNzRMMjYsMTAwdjg2SDE2YTYsNiwwLDAsMCwwLDEySDI0MGE2LDYsMCwwLDAsMC0xMlpNMzgsOTcuNDIsMjE4LDU4Ljg1VjE4NkgxOTBWMTI4YTYsNiwwLDAsMC02LTZINzJhNiw2LDAsMCwwLTYsNnY1OEgzOFpNMTc4LDE1NEg3OFYxMzRIMTc4Wk03OCwxNjZIMTc4djIwSDc4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg0aC04VjU3LjlsOS42Ny0yLjA4YTgsOCwwLDEsMC0zLjM1LTE1LjY0bC0yMjQsNDhBOCw4LDAsMCwwLDE2LDEwNGE4LjE2LDguMTYsMCwwLDAsMS42OS0uMThMMjQsMTAyLjQ3VjE4NEgxNmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTQwLDk5LDIxNiw2MS4zM1YxODRIMTkyVjEyOGE4LDgsMCwwLDAtOC04SDcyYTgsOCwwLDAsMC04LDh2NTZINDBabTEzNiw1M0g4MFYxMzZoOTZaTTgwLDE2OGg5NnYxNkg4MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg4SDIyOFY1NC42NmwxMi44NC0yLjc1YTQsNCwwLDEsMC0xLjY4LTcuODJsLTIyNCw0OEE0LDQsMCwwLDAsMTYsMTAwYTQuMDcsNC4wNywwLDAsMCwuODQtLjA5TDI4LDk3LjUyVjE4OEgxNmE0LDQsMCwwLDAsMCw4SDI0MGE0LDQsMCwwLDAsMC04Wk0zNiw5NS44MSwyMjAsNTYuMzhWMTg4SDE4OFYxMjhhNCw0LDAsMCwwLTQtNEg3MmE0LDQsMCwwLDAtNCw0djYwSDM2Wk0xODAsMTU2SDc2VjEzMkgxODBaTTc2LDE2NEgxODB2MjRINzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Warehouse";
export { I as Warehouse };
