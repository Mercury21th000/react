/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Ladder";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMjcsMjExLjksMTY4Ljc3LDczbDcuNjMtMjFIMTg0YTEyLDEyLDAsMCwwLDAtMjRIODhhMTIsMTIsMCwwLDAtMS4xMSwyMy45NGwtNTguMTYsMTYwYTEyLDEyLDAsMCwwLDcuMTcsMTUuMzdBMTEuODMsMTEuODMsMCwwLDAsNDAsMjI4YTEyLDEyLDAsMCwwLDExLjI4LTcuOUw2MCwxOTZIOTguNWwtNS43OCwxNS45YTEyLDEyLDAsMCwwLDcuMTgsMTUuMzcsMTEuNzksMTEuNzksMCwwLDAsNC4xLjczLDEyLDEyLDAsMCwwLDExLjI4LTcuOUwxMzIuNzcsMTcyaDQ2LjQ2bDE3LjQ5LDQ4LjFBMTIsMTIsMCwwLDAsMjA4LDIyOGExMS44MywxMS44MywwLDAsMCw0LjEtLjczQTEyLDEyLDAsMCwwLDIxOS4yNywyMTEuOVpNMTI0LjY5LDEyNEg4Ni4yMkw5NSwxMDBoMzguNDZabTE3LjQ1LTQ4SDEwMy42OGw4LjczLTI0aDM4LjQ2Wk02OC43NywxNzJsOC43My0yNEgxMTZsLTguNzMsMjRabTcyLjczLTI0TDE1NiwxMDguMTEsMTcwLjUsMTQ4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODcuNjQsMTYwSDEyNC4zNkwxNTYsNzNaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE1LjUyLDIxMy4yNiwxNjQuNTEsNzNsOS4wOS0yNUgxODRhOCw4LDAsMCwwLDAtMTZIODhhOCw4LDAsMCwwLDAsMTZoNC41OEwzMi40OCwyMTMuMjZhOCw4LDAsMCwwLDQuNzksMTAuMjZBOC4xNCw4LjE0LDAsMCwwLDQwLDIyNGE4LDgsMCwwLDAsNy41Mi01LjI3TDU3LjI0LDE5Mmg0N2wtNy43NCwyMS4yNmE4LDgsMCwwLDAsNC43OSwxMC4yNkE4LjE0LDguMTQsMCwwLDAsMTA0LDIyNGE4LDgsMCwwLDAsNy41Mi01LjI3TDEzMCwxNjhIMTgybDE4LjQ1LDUwLjczQTgsOCwwLDAsMCwyMDgsMjI0YTguMTQsOC4xNCwwLDAsMCwyLjczLS40OEE4LDgsMCwwLDAsMjE1LjUyLDIxMy4yNlptLTg4LTg1LjI2aC00N0w5Mi4xNSw5Nmg0N1ptMjkuMDktODBMMTQ0Ljk0LDgwSDk4TDEwOS42LDQ4Wk02My4wNiwxNzYsNzQuNywxNDRoNDdMMTEwLDE3NlptNzIuNzItMjRMMTU2LDk2LjQxLDE3Ni4yMSwxNTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNTIsMjEzLjI2LDE2NC41MSw3M2w5LjA5LTI1SDE4NGE4LDgsMCwwLDAsMC0xNkg4OGE4LDgsMCwwLDAsMCwxNmg0LjU4TDMyLjQ4LDIxMy4yNmE4LDgsMCwwLDAsNC43OSwxMC4yNkE4LjE0LDguMTQsMCwwLDAsNDAsMjI0YTgsOCwwLDAsMCw3LjUyLTUuMjdMNTcuMjQsMTkyaDQ3bC03Ljc0LDIxLjI2YTgsOCwwLDAsMCw0Ljc5LDEwLjI2QTguMTQsOC4xNCwwLDAsMCwxMDQsMjI0YTgsOCwwLDAsMCw3LjUyLTUuMjdMMTMwLDE2OEgxODJsMTguNDUsNTAuNzNBOCw4LDAsMCwwLDIwOCwyMjRhOC4xNCw4LjE0LDAsMCwwLDIuNzMtLjQ4QTgsOCwwLDAsMCwyMTUuNTIsMjEzLjI2Wk0xMDkuMzksNjRoMzBhOCw4LDAsMCwxLDAsMTZIMTA5LjM5YTgsOCwwLDEsMSwwLTE2Wm0uODYsOTZIODAuM2E4LDgsMCwwLDEsMC0xNmgzMGE4LDgsMCwwLDEsMCwxNlptMTQuNTQtNDBIOTQuODRhOCw4LDAsMCwxLDAtMTZoMzBhOCw4LDAsMCwxLDAsMTZabTExLDMyTDE1Niw5Ni40MSwxNzYuMjEsMTUyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjQsMjE0LDE2Mi4zOCw3M2w5LjgyLTI3SDE4NGE2LDYsMCwwLDAsMC0xMkg4OGE2LDYsMCwwLDAsMCwxMmg3LjQzTDM0LjM2LDIxNEE2LDYsMCwwLDAsMzgsMjIxLjY0YTYuMTUsNi4xNSwwLDAsMCwyLC4zNiw2LDYsMCwwLDAsNS42NC0zLjk1TDU1Ljg0LDE5MGg1MS4yM0w5OC4zNiwyMTRhNiw2LDAsMCwwLDMuNTksNy42OSw2LjE1LDYuMTUsMCwwLDAsMiwuMzYsNiw2LDAsMCwwLDUuNjQtMy45NUwxMjguNTcsMTY2aDU0Ljg2bDE4LjkzLDUyLjA1QTYsNiwwLDAsMCwyMDgsMjIyYTYuMTUsNi4xNSwwLDAsMCwyLjA1LS4zNkE2LDYsMCwwLDAsMjEzLjY0LDIxNFpNMTI4Ljg5LDEzMEg3Ny42Nkw5MC43NSw5NEgxNDJabTMwLjU0LTg0TDE0Ni4zNCw4Mkg5NS4xMUwxMDguMiw0NlpNNjAuMiwxNzhsMTMuMDktMzZoNTEuMjNsLTEzLjA5LDM2Wm03Mi43My0yNEwxNTYsOTAuNTYsMTc5LjA3LDE1NFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNTIsMjEzLjI2LDE2NC41MSw3M2w5LjA5LTI1SDE4NGE4LDgsMCwwLDAsMC0xNkg4OGE4LDgsMCwwLDAsMCwxNmg0LjU4TDMyLjQ4LDIxMy4yNmE4LDgsMCwwLDAsNC43OSwxMC4yNkE4LjE0LDguMTQsMCwwLDAsNDAsMjI0YTgsOCwwLDAsMCw3LjUyLTUuMjdMNTcuMjQsMTkyaDQ3bC03Ljc0LDIxLjI2YTgsOCwwLDAsMCw0Ljc5LDEwLjI2QTguMTQsOC4xNCwwLDAsMCwxMDQsMjI0YTgsOCwwLDAsMCw3LjUyLTUuMjdMMTMwLDE2OEgxODJsMTguNDUsNTAuNzNBOCw4LDAsMCwwLDIwOCwyMjRhOC4xNCw4LjE0LDAsMCwwLDIuNzMtLjQ4QTgsOCwwLDAsMCwyMTUuNTIsMjEzLjI2Wm0tODgtODUuMjZoLTQ3TDkyLjE1LDk2aDQ3Wm0yOS4wOS04MEwxNDQuOTQsODBIOThMMTA5LjYsNDhaTTYzLjA2LDE3Niw3NC43LDE0NGg0N0wxMTAsMTc2Wm03Mi43Mi0yNEwxNTYsOTYuNDEsMTc2LjIxLDE1MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuNzYsMjE0LjYzLDE2MC4yNiw3MywxNzAuOCw0NEgxODRhNCw0LDAsMCwwLDAtOEg4OGE0LDQsMCwwLDAsMCw4SDk4LjI5bC02MiwxNzAuNjNhNCw0LDAsMCwwLDIuMzksNS4xM0E0LjE2LDQuMTYsMCwwLDAsNDAsMjIwYTQsNCwwLDAsMCwzLjc2LTIuNjNMNTQuNDQsMTg4aDU1LjQ5bC05LjY5LDI2LjYzYTQsNCwwLDAsMCwyLjM5LDUuMTNBNC4xMiw0LjEyLDAsMCwwLDEwNCwyMjBhNCw0LDAsMCwwLDMuNzYtMi42M0wxMjcuMTcsMTY0aDU3LjY2bDE5LjQxLDUzLjM3QTQsNCwwLDAsMCwyMDgsMjIwYTQuMTYsNC4xNiwwLDAsMCwxLjM3LS4yNEE0LDQsMCwwLDAsMjExLjc2LDIxNC42M1pNMTMwLjI5LDEzMkg3NC44TDg5LjM1LDkyaDU1LjQ4Wm0zMi04OEwxNDcuNzQsODRIOTIuMjZMMTA2LjgsNDRaTTU3LjM1LDE4MGwxNC41NC00MGg1NS40OWwtMTQuNTUsNDBabTcyLjcyLTI0TDE1Niw4NC43LDE4MS45MiwxNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Ladder";
export { I as Ladder };
