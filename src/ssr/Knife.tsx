/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Knife";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuNywyOS4zYTMxLjgzLDMxLjgzLDAsMCwwLTQ1LDBMMTUuNTIsMjAzLjU2YTEyLDEyLDAsMCwwLDUuNzgsMjAuMTlBMTY0Ljg1LDE2NC44NSwwLDAsMCw1OC40MiwyMjhjMzMuNzEsMCw2Ny40MS0xMC40Miw5OS4xLTMwLjg3LDMyLjMyLTIwLjg2LDUxLjE2LTQ0LjcsNTEuOTQtNDUuN2ExMiwxMiwwLDAsMC0xLTE1Ljg5TDE5MSwxMTgsMjM0LjcsNzQuMjlBMzEuODYsMzEuODYsMCwwLDAsMjM0LjcsMjkuM1pNMTQzLjg3LDE3Ny4zNkMxMTMsMTk3LjEyLDgxLjI4LDIwNiw0OS4yOCwyMDMuNzRMMTQ2LDEwN2wxOS41LDE5LjUxLDAsMGgwbDE4LDE4QTIxNi42OSwyMTYuNjksMCwwLDEsMTQzLjg3LDE3Ny4zNlptNzMuODYtMTIwTDE3NCwxMDEsMTYzLDkwLDIwNi43LDQ2LjI4YTcuOCw3LjgsMCwwLDEsMTEsMTFaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuMiw2NS44LDE3NCwxMTgsMTQ2LDkwbDUyLjItNTIuMmExOS44LDE5LjgsMCwwLDEsMjgsMGgwQTE5LjgsMTkuOCwwLDAsMSwyMjYuMiw2NS44WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMS44NywzMi4xM2EyNy44NCwyNy44NCwwLDAsMC0zOS4zMiwwTDE4LjM0LDIwNi40YTgsOCwwLDAsMCwzLjg2LDEzLjQ1QTE2MC42NywxNjAuNjcsMCwwLDAsNTguNCwyMjRjMzIuOTUsMCw2NS45Mi0xMC4yLDk2Ljk1LTMwLjIzLDMxLjc2LTIwLjUsNTAuMTktNDMuODIsNTEtNDQuODFhOCw4LDAsMCwwLS42NC0xMC41OUwxODUuMzIsMTE4bDQ2LjU1LTQ2LjU2QTI3Ljg1LDI3Ljg1LDAsMCwwLDIzMS44NywzMi4xM1pNMTg5LjEsMTQ0LjQ0YTIyMC40MSwyMjAuNDEsMCwwLDEtNDIuODYsMzYuMTZjLTM0LjQzLDIyLjEtNjkuOTQsMzAuOTItMTA1Ljc3LDI2LjNMMTQ2LDEwMS4zM1ptMzEuNDYtODQuM0wxNzQsMTA2LjcsMTU3LjMyLDkwbDQ2LjU1LTQ2LjU2YTExLjgsMTEuOCwwLDAsMSwxNi42OSwxNi42OVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNDlhMjUsMjUsMCwwLDAtNDIuNjMtMTcuNjZMMTQzLjE2LDgxLjU0LDE4LjM0LDIwNi40YTgsOCwwLDAsMCwzLjg2LDEzLjQ1QTE2MC42NywxNjAuNjcsMCwwLDAsNTguNCwyMjRjMzIuOTUsMCw2NS45MS0xMC4yLDk2Ljk0LTMwLjIzLDMxLjc2LTIwLjUsNTAuMTktNDMuODIsNTEtNDQuOGE4LDgsMCwwLDAtLjY0LTEwLjU5TDE4MS4zMSwxMTRsNDcuMzgtNDcuMzlBMjQuODQsMjQuODQsMCwwLDAsMjM2LDQ5Wk0xNDYuMjMsMTgwLjZjLTM0LjQzLDIyLjEtNjkuOTQsMzAuOTItMTA1Ljc2LDI2LjNMMTQ2LDEwMS4zNGw0My4wOSw0My4xQTIyMC4wOSwyMjAuMDksMCwwLDEsMTQ2LjIzLDE4MC42WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNDYsMzMuNTVhMjUuODEsMjUuODEsMCwwLDAtMzYuNDksMEwxOS43NiwyMDcuODJhNiw2LDAsMCwwLDIuODksMTAuMDlBMTU4Ljg4LDE1OC44OCwwLDAsMCw1OC4zOSwyMjJjMzIuNTcsMCw2NS4xNy0xMC4xLDk1Ljg3LTI5LjkxLDMxLjQ5LTIwLjMyLDQ5LjcyLTQzLjM5LDUwLjQ4LTQ0LjM2YTYsNiwwLDAsMC0uNDktNy45NEwxODIuNDksMTE4bDQ4LTQ4QTI1Ljg2LDI1Ljg2LDAsMCwwLDIzMC40NiwzMy41NVptLTM4LjYsMTEwLjgyQTIyMSwyMjEsMCwwLDEsMTQ3Ljc1LDE4MkMxMTEuNSwyMDUuNCw3NCwyMTQuMjMsMzYuMjMsMjA4LjMyTDE0Niw5OC41Wk0yMjIsNjEuNTZsLTQ4LDQ4TDE1NC40OSw5MGw0OC00OEExMy44MSwxMy44MSwwLDAsMSwyMjIsNjEuNTZaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuODcsMzIuMTNhMjcuODQsMjcuODQsMCwwLDAtMzkuMzIsMEwxOC4zNCwyMDYuNGE4LDgsMCwwLDAsMy44NiwxMy40NUExNjAuNjcsMTYwLjY3LDAsMCwwLDU4LjQsMjI0YzMyLjk1LDAsNjUuOTItMTAuMiw5Ni45NS0zMC4yMywzMS43Ni0yMC41LDUwLjE5LTQzLjgyLDUxLTQ0LjgxYTgsOCwwLDAsMC0uNjQtMTAuNTlMMTg1LjMyLDExOGw0Ni41NS00Ni41NkEyNy44NSwyNy44NSwwLDAsMCwyMzEuODcsMzIuMTNaTTE4OS4xLDE0NC40NGEyMjAuNDEsMjIwLjQxLDAsMCwxLTQyLjg2LDM2LjE2Yy0zNC40MywyMi4xLTY5Ljk0LDMwLjkyLTEwNS43NywyNi4zTDE0NiwxMDEuMzNabTMxLjQ2LTg0LjNMMTc0LDEwNi43LDE1Ny4zMiw5MGw0Ni41NS00Ni41NmExMS44LDExLjgsMCwwLDEsMTYuNjksMTYuNjlaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjksMzVhMjMuODMsMjMuODMsMCwwLDAtMzMuNjYsMEwyMS4xNywyMDkuMjJhNCw0LDAsMCwwLDEuOTMsNi43MkExNTYuMjMsMTU2LjIzLDAsMCwwLDU4LjQsMjIwYzM5LjQxLDAsNzIuMjctMTUuMDgsOTQuNzgtMjkuNiwzMS4yMS0yMC4xNCw0OS4yMy00Myw1MC00My45MWE0LDQsMCwwLDAtLjMyLTUuMjlMMTc5LjY3LDExOCwyMjksNjguNjNBMjMuODQsMjMuODQsMCwwLDAsMjI5LDM1Wk0xOTQuNTksMTQ0LjI3YTIyMi40MywyMjIuNDMsMCwwLDEtNDYsMzkuNTVjLTM3Ljg1LDI0LjM1LTc3LDMzLTExNi41NSwyNS44MUwxNDYsOTUuNjdaTTIyMy4zOCw2MywxNzQsMTEyLjM2LDE1MS42Niw5MCwyMDEsNDAuNjJBMTUuOCwxNS44LDAsMCwxLDIyMy4zOCw2M1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Knife";
export { I as Knife };
