/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Planet";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDguNTksNTguNjdjLTYuMzEtMTAuODctMjMtMjEuMDYtNjYuMTYtOS43MUE5NS45NCw5NS45NCwwLDAsMCwzMiwxMjhxMCwzLjYuMjYsNy4xNEMuNTYsMTY2Ljg2LDEuMSwxODYuNCw3LjQ0LDE5Ny4zMywxMy40LDIwNy42MSwyNS4zLDIxMiw0MC42OCwyMTJjOS43OSwwLDIxLTEuNzgsMzIuOTUtNC45MUE5NS45NCw5NS45NCwwLDAsMCwyMjQsMTI4YzAtMi40MS0uMDktNC43OS0uMjctNy4xNiwxNC4zMS0xNC4zOCwyMy44Ni0yOC4yMSwyNy00MEMyNTMuNTUsNzAuNDIsMjUxLjEyLDYzLDI0OC41OSw1OC42N1pNMTI4LDU2YTcyLjExLDcyLjExLDAsMCwxLDcwLjE5LDU2QzE4NCwxMjQuNzMsMTY1LDEzOC41OSwxNDEuOTIsMTUxLjg2Yy0yMS43NCwxMi40OS00My41NSwyMi4zNi02My4wOSwyOC42NUE3Miw3MiwwLDAsMSwxMjgsNTZaTTI4LjE5LDE4NS4yOWMtLjYxLTEuMDctLjE3LTguMjIsMTAuNjctMjEuNzFBOTUuNzcsOTUuNzcsMCwwLDAsNTIuMzUsMTg3QzM1LjEyLDE4OS42MSwyOC44NSwxODYuNDEsMjguMTksMTg1LjI5Wk0xMjgsMjAwYTcxLjY2LDcxLjY2LDAsMCwxLTIyLjU2LTMuNjQsMzk0LjEsMzk0LjEsMCwwLDAsNDguNDItMjMuNjlBMzg4LjExLDM4OC4xMSwwLDAsMCwxOTguNDMsMTQzLDcyLjEyLDcyLjEyLDAsMCwxLDEyOCwyMDBaTTIyNy41Nyw3NC42NWMtMS4yOCw0Ljc4LTQuODEsMTAuODctMTAuMzksMTcuOEE5NS43NCw5NS43NCwwLDAsMCwyMDMuNjgsNjljMTUuODMtMi4zNywyMy4xNywwLDI0LjE1LDEuNzFDMjI4LDcxLDIyOC4yMSw3Mi4yOCwyMjcuNTcsNzQuNjVaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ1LjExLDYwLjY4Yy03LjY1LTEzLjE5LTI3Ljg0LTE2LjE2LTU4LjUtOC42NkE5NS45Myw5NS45MywwLDAsMCwzMiwxMjhhOTgsOTgsMCwwLDAsLjc4LDEyLjMxQzUuMDksMTY5LDUuNDksMTg2LDEwLjksMTk1LjMyLDE2LDIwNC4xNiwyNi42NCwyMDgsNDAuNjQsMjA4YTEyNC4xMSwxMjQuMTEsMCwwLDAsMjguNzktNEE5NS45Myw5NS45MywwLDAsMCwyMjQsMTI4YTk3LjA4LDk3LjA4LDAsMCwwLS43Ny0xMi4yNWMxMi41LTEzLDIwLjgyLTI1LjM1LDIzLjY1LTM1LjkyQzI0OC44Myw3Mi41MSwyNDguMjQsNjYuMDcsMjQ1LjExLDYwLjY4Wk0xMjgsNDhhODAuMTEsODAuMTEsMCwwLDEsNzgsNjIuMmMtMTcuMDYsMTYuMDYtNDAuMTUsMzIuNTMtNjIuMDcsNDUuMTNDMTE2LjM4LDE3MS4xNCw5Mi40OCwxODEsNzMuNDIsMTg2LjRBNzkuOTQsNzkuOTQsMCwwLDEsMTI4LDQ4Wk0yNC43NCwxODcuMjljLTEuNDYtMi41MS0uNjUtNy4yNCwyLjIyLTEzYTc5LjA1LDc5LjA1LDAsMCwxLDEwLjI5LTE1LjA1LDk2LDk2LDAsMCwwLDE4LDMxLjMyQzM4LDE5My40NiwyNy4yNCwxOTEuNjEsMjQuNzQsMTg3LjI5Wk0xMjgsMjA4YTc5LjQ1LDc5LjQ1LDAsMCwxLTM4LjU2LTkuOTQsMzcwLDM3MCwwLDAsMCw2Mi40My0yOC44NmMyMS41OC0xMi4zOSw0MC42OC0yNS44Miw1Ni4wNy0zOS4wOEE4MC4wNyw4MC4wNywwLDAsMSwxMjgsMjA4Wk0yMzEuNDIsNzUuNjljLTEuNyw2LjMxLTYuMTksMTMuNTMtMTIuNjMsMjEuMTNhOTUuNjksOTUuNjksMCwwLDAtMTgtMzEuMzVjMTQuMjEtMi4zNSwyNy4zNy0yLjE3LDMwLjUsMy4yNEMyMzIuMTksNzAuMjgsMjMyLjI0LDcyLjYzLDIzMS40Miw3NS42OVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDUuMTEsNjAuNjhjLTcuNjUtMTMuMTktMjcuODUtMTYuMTYtNTguNS04LjY2QTk2LDk2LDAsMCwwLDMyLjgxLDE0MC4zQzUuMDksMTY5LDUuNDksMTg2LDEwLjksMTk1LjMyLDE2LDIwNC4xNiwyNi42NCwyMDgsNDAuNjQsMjA4YTEyNC4xMSwxMjQuMTEsMCwwLDAsMjguNzktNCw5Niw5NiwwLDAsMCwxNTMuNzgtODguMjVjMTIuNTEtMTMsMjAuODMtMjUuMzUsMjMuNjYtMzUuOTJDMjQ4LjgzLDcyLjUxLDI0OC4yNCw2Ni4wNywyNDUuMTEsNjAuNjhabS0xMy42OSwxNWMtNi4xMSwyMi43OC00OC42NSw1Ny4zMS04Ny41Miw3OS42NC02Ny44MSwzOS0xMTMuNjIsNDEuNTItMTE5LjE2LDMyLTEuNDYtMi41MS0uNjUtNy4yNCwyLjIyLTEzYTgwLjA2LDgwLjA2LDAsMCwxLDEwLjI4LTE1LjA1LDk1LjUzLDk1LjUzLDAsMCwwLDYuMjMsMTQuMTgsNCw0LDAsMCwwLDQsMi4xMiwxMjIuMTQsMTIyLjE0LDAsMCwwLDE2Ljk1LTMuMzJjMjEuMjMtNS41NSw0Ni42My0xNi40OCw3MS41Mi0zMC43OHM0Ny0zMC42Niw2Mi40NS00Ni4xNUExMjIuNzQsMTIyLjc0LDAsMCwwLDIwOS43LDgyLjQ1YTQsNCwwLDAsMCwuMTctNC41Miw5Ni4yNiw5Ni4yNiwwLDAsMC05LjEtMTIuNDZjMTQuMjEtMi4zNSwyNy4zNy0yLjE3LDMwLjUsMy4yNEMyMzIuMTksNzAuMjgsMjMyLjI0LDcyLjYzLDIzMS40Miw3NS42OVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzksNjEuNjhjLTcuMjQtMTIuNDgtMjctMTUtNTcuMjQtNy40OUE5My45Miw5My45MiwwLDAsMCwzNC4wNSwxMjhhOTQuNSw5NC41LDAsMCwwLC45LDEzYy0yMS44NiwyMi4zOC0yOS41Niw0MC43OC0yMi4yOSw1My4zMiw0LjUsNy43NiwxNCwxMS42OSwyNy44NiwxMS42OWExMTYuMzgsMTE2LjM4LDAsMCwwLDI1LTMuMTZjMS40NS0uMzIsMi45Mi0uNjgsNC40MS0xYTkzLjk1LDkzLjk1LDAsMCwwLDE1MS4xOS04Ni44OWMxMi42NS0xMywyMS4xMS0yNS4zMiwyMy44Ni0zNS42QzI0Ni43Niw3Mi41MywyNDYuMjQsNjYuNTksMjQzLjM5LDYxLjY4Wk0xMjgsNDZhODIuMTIsODIuMTIsMCwwLDEsODAuMTksNjQuOTRjLTE2LDE1LjMtMzguMTQsMzEuNjctNjMuMyw0Ni4xMkMxMTcuNDksMTcyLjgyLDkyLjc5LDE4Myw3Mi44NSwxODguNkE4Miw4MiwwLDAsMSwxMjgsNDZaTTIzLDE4OC4zYy0zLjUyLTYuMDcsMi4zMS0xOC41NiwxNS0zM2E5NCw5NCwwLDAsMCwyMS4wNywzNi42MkMzOS40MiwxOTUuNzQsMjYuMzksMTk0LjA4LDIzLDE4OC4zWk0xMjgsMjEwYTgxLjQxLDgxLjQxLDAsMCwxLTQzLjM1LTEyLjQ1YzIwLjY4LTYuNzEsNDMuNTYtMTcuMDYsNjYuMjItMzAuMDgsMjIuODMtMTMuMTIsNDMuMTMtMjcuNjcsNTkuMDUtNDEuOTEsMCwuODEuMDYsMS42Mi4wNiwyLjQ0QTgyLjA4LDgyLjA4LDAsMCwxLDEyOCwyMTBaTTIzMy4zNSw3Ni4yMWMtMS44OCw3LTcuMjgsMTUuNDktMTUuMzYsMjQuNjFhOTMuOTIsOTMuOTIsMCwwLDAtMjEuMS0zNi43YzE1LjgyLTMuMDUsMzItMy40OSwzNi4xMiwzLjU4QzIzNC4yLDY5Ljc1LDIzNC4zMSw3Mi42MiwyMzMuMzUsNzYuMjFaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDUuMTEsNjAuNjhjLTcuNjUtMTMuMTktMjcuODQtMTYuMTYtNTguNS04LjY2QTk1LjkzLDk1LjkzLDAsMCwwLDMyLDEyOGE5OCw5OCwwLDAsMCwuNzgsMTIuMzFDNS4wOSwxNjksNS40OSwxODYsMTAuOSwxOTUuMzIsMTYsMjA0LjE2LDI2LjY0LDIwOCw0MC42NCwyMDhhMTI0LjExLDEyNC4xMSwwLDAsMCwyOC43OS00QTk1LjkzLDk1LjkzLDAsMCwwLDIyNCwxMjhhOTcuMDgsOTcuMDgsMCwwLDAtLjc3LTEyLjI1YzEyLjUtMTMsMjAuODItMjUuMzUsMjMuNjUtMzUuOTJDMjQ4LjgzLDcyLjUxLDI0OC4yNCw2Ni4wNywyNDUuMTEsNjAuNjhaTTEyOCw0OGE4MC4xMSw4MC4xMSwwLDAsMSw3OCw2Mi4yYy0xNy4wNiwxNi4wNi00MC4xNSwzMi41My02Mi4wNyw0NS4xM0MxMTYuMzgsMTcxLjE0LDkyLjQ4LDE4MSw3My40MiwxODYuNEE3OS45NCw3OS45NCwwLDAsMSwxMjgsNDhaTTI0Ljc0LDE4Ny4yOWMtMS40Ni0yLjUxLS42NS03LjI0LDIuMjItMTNhNzkuMDUsNzkuMDUsMCwwLDEsMTAuMjktMTUuMDUsOTYsOTYsMCwwLDAsMTgsMzEuMzJDMzgsMTkzLjQ2LDI3LjI0LDE5MS42MSwyNC43NCwxODcuMjlaTTEyOCwyMDhhNzkuNDUsNzkuNDUsMCwwLDEtMzguNTYtOS45NCwzNzAsMzcwLDAsMCwwLDYyLjQzLTI4Ljg2YzIxLjU4LTEyLjM5LDQwLjY4LTI1LjgyLDU2LjA3LTM5LjA4QTgwLjA3LDgwLjA3LDAsMCwxLDEyOCwyMDhaTTIzMS40Miw3NS42OWMtMS43LDYuMzEtNi4xOSwxMy41My0xMi42MywyMS4xM2E5NS42OSw5NS42OSwwLDAsMC0xOC0zMS4zNWMxNC4yMS0yLjM1LDI3LjM3LTIuMTcsMzAuNSwzLjI0QzIzMi4xOSw3MC4yOCwyMzIuMjQsNzIuNjMsMjMxLjQyLDc1LjY5WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNjYsNjIuNjhjLTYuNzMtMTEuNTgtMjYuNTgtMTMuOC01Ni02LjNBOTIsOTIsMCwwLDAsMzcsMTQxLjdjLTIxLjM4LDIxLjY5LTI5LjQ0LDQwLTIyLjY4LDUxLjYyLDQuMTMsNy4xMSwxMywxMC43MSwyNiwxMC43MUExMTUuMjUsMTE1LjI1LDAsMCwwLDY1LDIwMC45YzEuNzQtLjM5LDMuNTItLjgyLDUuMzItMS4yOEE5Miw5MiwwLDAsMCwyMjAsMTI4YTkyLjg0LDkyLjg0LDAsMCwwLTEtMTMuNzNjMTIuNzctMTMsMjEuMzEtMjUuMjgsMjQtMzUuNDdDMjQ0LjY5LDcyLjU0LDI0NC4yMyw2Ny4xMiwyNDEuNjYsNjIuNjhaTTEyOCw0NGE4NC4xMyw4NC4xMywwLDAsMSw4Mi4zOCw2Ny41NmMtMTYuMTcsMTUuNjktMzguOCwzMi40OC02NC40OSw0Ny4yNC0yNy4zMSwxNS42OS01Mi44MSwyNi4yNS03My42MSwzMkE4NCw4NCwwLDAsMSwxMjgsNDRaTTIxLjI1LDE4OS4zQzE3LDE4MiwyMy43NSwxNjcuNywzOSwxNTEuMjRBOTIsOTIsMCwwLDAsNjMsMTkzLjA5QzQwLjg2LDE5OCwyNS40NywxOTYuNTgsMjEuMjUsMTg5LjNaTTEyOCwyMTJhODMuNTgsODMuNTgsMCwwLDEtNDgtMTUuMWMyMS41OC02LjU4LDQ1LjgzLTE3LjM3LDY5Ljg1LTMxLjE2LDI0LjI1LTEzLjk0LDQ1LjYxLTI5LjQ2LDYxLjgzLTQ0LjQ0LjE4LDIuMjEuMyw0LjQ0LjMsNi43QTg0LjEsODQuMSwwLDAsMSwxMjgsMjEyWk0yMzUuMjgsNzYuNzNjLTIuMTMsOC04LjU4LDE3LjY1LTE4LjI1LDI4LjA2YTkyLjA3LDkyLjA3LDAsMCwwLTI0LjEyLTQxLjkyYzIxLjg1LTQuODIsMzcuNTktMy40Niw0MS44MywzLjgzQzIzNi4yLDY5LjIzLDIzNi4zOSw3Mi42LDIzNS4yOCw3Ni43M1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Planet";
export { I as Planet };
