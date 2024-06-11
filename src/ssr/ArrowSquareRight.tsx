/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ArrowSquareRight";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1MkgyMDRaTTc2LDEyOGExMiwxMiwwLDAsMSwxMi0xMmg1MWwtMTEuNTItMTEuNTFhMTIsMTIsMCwxLDEsMTctMTdsMzIsMzJhMTIsMTIsMCwwLDEsMCwxN2wtMzIsMzJhMTIsMTIsMCwxLDEtMTctMTdMMTM5LDE0MEg4OEExMiwxMiwwLDAsMSw3NiwxMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04SDIwOEE4LDgsMCwwLDEsMjE2LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlptMCwxNzZINDhWNDhIMjA4Wk04MCwxMjhhOCw4LDAsMCwxLDgtOGg2MC42OWwtMTguMzUtMTguMzRhOCw4LDAsMCwxLDExLjMyLTExLjMybDMyLDMyYTgsOCwwLDAsMSwwLDExLjMybC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTQ4LjY5LDEzNkg4OEE4LDgsMCwwLDEsODAsMTI4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE3My42NiwxMzMuNjZsLTMyLDMyYTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxNDguNjksMTM2SDg4YTgsOCwwLDAsMSwwLTE2aDYwLjY5bC0xOC4zNS0xOC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJsMzIsMzJBOCw4LDAsMCwxLDE3My42NiwxMzMuNjZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWm0tMzcuNzYtODQuMjRhNiw2LDAsMCwxLDAsOC40OGwtMzIsMzJhNiw2LDAsMCwxLTguNDgtOC40OEwxNTMuNTEsMTM0SDg4YTYsNiwwLDAsMSwwLTEyaDY1LjUxbC0yMS43NS0yMS43NmE2LDYsMCwwLDEsOC40OC04LjQ4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDQ4VjQ4SDIwOFpNODAsMTI4YTgsOCwwLDAsMSw4LThoNjAuNjlsLTE4LjM1LTE4LjM0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMmwzMiwzMmE4LDgsMCwwLDEsMCwxMS4zMmwtMzIsMzJhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE0OC42OSwxMzZIODhBOCw4LDAsMCwxLDgwLDEyOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wm0tNDEuMTctODIuODNhNCw0LDAsMCwxLDAsNS42NmwtMzIsMzJhNCw0LDAsMCwxLTUuNjYtNS42NkwxNTguMzQsMTMySDg4YTQsNCwwLDAsMSwwLThoNzAuMzRMMTMzLjE3LDk4LjgzYTQsNCwwLDAsMSw1LjY2LTUuNjZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowSquareRight";
export { I as ArrowSquareRight };
