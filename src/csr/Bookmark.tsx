/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Bookmark";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjhINzJBMjAsMjAsMCwwLDAsNTIsNDhWMjI0YTEyLDEyLDAsMCwwLDE4LjM2LDEwLjE4bDU3LjYzLTM2LDU3LjY1LDM2QTEyLDEyLDAsMCwwLDIwNCwyMjRWNDhBMjAsMjAsMCwwLDAsMTg0LDI4Wm0tNCwyNFYxNTQuMzVsLTQ1LjY1LTI4LjUzYTEyLDEyLDAsMCwwLTEyLjcyLDBMNzYsMTU0LjM1VjUyWk0xMzQuMzUsMTczLjgyYTEyLDEyLDAsMCwwLTEyLjcyLDBMNzYsMjAyLjM1di0xOS43bDUyLTMyLjUsNTIsMzIuNXYxOS43WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTc2djQ4bC02NC00MEw2NCwyMjRWMTc2bDY0LTQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCwzMkg3MkExNiwxNiwwLDAsMCw1Niw0OFYyMjRhOCw4LDAsMCwwLDEyLjI0LDYuNzhMMTI4LDE5My40M2w1OS43NywzNy4zNUE4LDgsMCwwLDAsMjAwLDIyNFY0OEExNiwxNiwwLDAsMCwxODQsMzJabTAsMTZWMTYxLjU3bC01MS43Ny0zMi4zNWE4LDgsMCwwLDAtOC40OCwwTDcyLDE2MS41NlY0OFpNMTMyLjIzLDE3Ny4yMmE4LDgsMCwwLDAtOC40OCwwTDcyLDIwOS41N1YxODAuNDNsNTYtMzUsNTYsMzV2MjkuMTRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzJINzJBMTYsMTYsMCwwLDAsNTYsNDhWMjI0YTgsOCwwLDAsMCwxMi4yNCw2Ljc4TDEyOCwxOTMuNDNsNTkuNzcsMzcuMzVBOCw4LDAsMCwwLDIwMCwyMjRWNDhBMTYsMTYsMCwwLDAsMTg0LDMyWk0xMzIuMjMsMTc3LjIyYTgsOCwwLDAsMC04LjQ4LDBMNzIsMjA5LjU3VjE4MC40M2w1Ni0zNSw1NiwzNXYyOS4xNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzRINzJBMTQsMTQsMCwwLDAsNTgsNDhWMjI0YTYsNiwwLDAsMCw5LjE4LDUuMDlsNjAuODEtMzgsNjAuODMsMzhBNiw2LDAsMCwwLDE5OCwyMjRWNDhBMTQsMTQsMCwwLDAsMTg0LDM0Wk03Miw0NkgxODRhMiwyLDAsMCwxLDIsMlYxNjUuMThsLTU0LjgzLTM0LjI3YTYsNiwwLDAsMC02LjM2LDBMNzAsMTY1LjE3VjQ4QTIsMiwwLDAsMSw3Miw0NlptNTkuMTcsMTMyLjkxYTYsNiwwLDAsMC02LjM2LDBMNzAsMjEzLjE3VjE3OS4zM2w1OC0zNi4yNSw1OCwzNi4yNXYzMy44NFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzJINzJBMTYsMTYsMCwwLDAsNTYsNDhWMjI0YTgsOCwwLDAsMCwxMi4yNCw2Ljc4TDEyOCwxOTMuNDNsNTkuNzcsMzcuMzVBOCw4LDAsMCwwLDIwMCwyMjRWNDhBMTYsMTYsMCwwLDAsMTg0LDMyWm0wLDE2VjE2MS41N2wtNTEuNzctMzIuMzVhOCw4LDAsMCwwLTguNDgsMEw3MiwxNjEuNTZWNDhaTTEzMi4yMywxNzcuMjJhOCw4LDAsMCwwLTguNDgsMEw3MiwyMDkuNTdWMTgwLjQzbDU2LTM1LDU2LDM1djI5LjE0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzZINzJBMTIsMTIsMCwwLDAsNjAsNDhWMjI0YTQsNCwwLDAsMCw2LjEyLDMuMzlMMTI4LDE4OC43Mmw2MS44OSwzOC42N0E0LDQsMCwwLDAsMTkyLDIyOGE0LjA2LDQuMDYsMCwwLDAsMS45NC0uNUE0LDQsMCwwLDAsMTk2LDIyNFY0OEExMiwxMiwwLDAsMCwxODQsMzZaTTcyLDQ0SDE4NGE0LDQsMCwwLDEsNCw0VjE2OC43OGwtNTcuODktMzYuMTdhNCw0LDAsMCwwLTQuMjQsMEw2OCwxNjguNzhWNDhBNCw0LDAsMCwxLDcyLDQ0Wm01OC4xMSwxMzYuNjFhNCw0LDAsMCwwLTQuMjQsMEw2OCwyMTYuNzhWMTc4LjIybDYwLTM3LjUsNjAsMzcuNXYzOC41NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Bookmark";
export { I as Bookmark };
