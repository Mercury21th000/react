/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SplitHorizontal";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDhWMjA4YTgsOCwwLDAsMS0xNiwwVjEzNkg0My4zMWwxOC4zNSwxOC4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJsLTMyLTMyYTgsOCwwLDAsMSwwLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwxMS4zMkw0My4zMSwxMjBIOTZWNDhhOCw4LDAsMCwxLDE2LDBabTEyNS42Niw3NC4zNC0zMi0zMmE4LDgsMCwwLDAtMTEuMzIsMTEuMzJMMjEyLjY5LDEyMEgxNjBWNDhhOCw4LDAsMCwwLTE2LDBWMjA4YTgsOCwwLDAsMCwxNiwwVjEzNmg1Mi42OWwtMTguMzUsMTguMzRhOCw4LDAsMCwwLDExLjMyLDExLjMybDMyLTMyQTgsOCwwLDAsMCwyMzcuNjYsMTIyLjM0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsNDhWMjA4YTQsNCwwLDAsMS04LDBWMTMySDMzLjY2bDI1LjE3LDI1LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZsLTMyLTMyYTQsNCwwLDAsMSwwLTUuNjZsMzItMzJhNCw0LDAsMCwxLDUuNjYsNS42NkwzMy42NiwxMjRIMTAwVjQ4YTQsNCwwLDAsMSw4LDBabTEyNi44Myw3Ny4xNy0zMi0zMmE0LDQsMCwwLDAtNS42Niw1LjY2TDIyMi4zNCwxMjRIMTU2VjQ4YTQsNCwwLDAsMC04LDBWMjA4YTQsNCwwLDAsMCw4LDBWMTMyaDY2LjM0bC0yNS4xNywyNS4xN2E0LDQsMCwwLDAsNS42Niw1LjY2bDMyLTMyQTQsNCwwLDAsMCwyMzQuODMsMTI1LjE3WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTAsNDhWMjA4YTYsNiwwLDAsMS0xMiwwVjEzNEgzOC40OWwyMS43NSwyMS43NmE2LDYsMCwxLDEtOC40OCw4LjQ4bC0zMi0zMmE2LDYsMCwwLDEsMC04LjQ4bDMyLTMyYTYsNiwwLDAsMSw4LjQ4LDguNDhMMzguNDksMTIySDk4VjQ4YTYsNiwwLDAsMSwxMiwwWm0xMjYuMjQsNzUuNzYtMzItMzJhNiw2LDAsMCwwLTguNDgsOC40OEwyMTcuNTEsMTIySDE1OFY0OGE2LDYsMCwwLDAtMTIsMFYyMDhhNiw2LDAsMCwwLDEyLDBWMTM0aDU5LjUxbC0yMS43NSwyMS43NmE2LDYsMCwxLDAsOC40OCw4LjQ4bDMyLTMyQTYsNiwwLDAsMCwyMzYuMjQsMTIzLjc2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsNDhWMjA4YTEyLDEyLDAsMCwxLTI0LDBWMTQwSDUzbDExLjUyLDExLjUxYTEyLDEyLDAsMCwxLTE3LDE3bC0zMi0zMmExMiwxMiwwLDAsMSwwLTE3bDMyLTMyYTEyLDEyLDAsMSwxLDE3LDE3TDUzLDExNkg5MlY0OGExMiwxMiwwLDAsMSwyNCwwWm0xMjQuNDksNzEuNTEtMzItMzJhMTIsMTIsMCwwLDAtMTcsMTdMMjAzLDExNkgxNjRWNDhhMTIsMTIsMCwwLDAtMjQsMFYyMDhhMTIsMTIsMCwwLDAsMjQsMFYxNDBoMzlsLTExLjUyLDExLjUxYTEyLDEyLDAsMCwwLDE3LDE3bDMyLTMyQTEyLDEyLDAsMCwwLDI0MC40OSwxMTkuNTFaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDhWMjA4YTgsOCwwLDAsMS0xNiwwVjEzNkg2NHYyNGE4LDgsMCwwLDEtMTMuNjYsNS42NmwtMzItMzJhOCw4LDAsMCwxLDAtMTEuMzJsMzItMzJBOCw4LDAsMCwxLDY0LDk2djI0SDk2VjQ4YTgsOCwwLDAsMSwxNiwwWm0xMjUuNjYsNzQuMzQtMzItMzJBOCw4LDAsMCwwLDE5Miw5NnYyNEgxNjBWNDhhOCw4LDAsMCwwLTE2LDBWMjA4YTgsOCwwLDAsMCwxNiwwVjEzNmgzMnYyNGE4LDgsMCwwLDAsMTMuNjYsNS42NmwzMi0zMkE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI4bC0zMiwzMlY5NlpNNTYsMTYwVjk2TDI0LDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMDQsNDBhOCw4LDAsMCwwLTgsOHY3Mkg2NFY5NmE4LDgsMCwwLDAtMTMuNjYtNS42NmwtMzIsMzJhOCw4LDAsMCwwLDAsMTEuMzJsMzIsMzJBOCw4LDAsMCwwLDY0LDE2MFYxMzZIOTZ2NzJhOCw4LDAsMCwwLDE2LDBWNDhBOCw4LDAsMCwwLDEwNCw0MFpNNDgsMTQwLjY5LDM1LjMxLDEyOCw0OCwxMTUuMzFabTE4OS42Ni0xOC4zNS0zMi0zMkE4LDgsMCwwLDAsMTkyLDk2djI0SDE2MFY0OGE4LDgsMCwwLDAtMTYsMFYyMDhhOCw4LDAsMCwwLDE2LDBWMTM2aDMydjI0YTgsOCwwLDAsMCwxMy42Niw1LjY2bDMyLTMyQTgsOCwwLDAsMCwyMzcuNjYsMTIyLjM0Wk0yMDgsMTQwLjY5VjExNS4zMUwyMjAuNjksMTI4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SplitHorizontal";
export { I as SplitHorizontal };
