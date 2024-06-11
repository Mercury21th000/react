/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FolderStar";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIuNTYsMTk2SDQ0VjkySDIxMnYyMGExMiwxMiwwLDAsMCwyNCwwVjg4YTIwLDIwLDAsMCwwLTIwLTIwSDEzMy4zOWwtMjYtMjkuMjloMEEyMCwyMCwwLDAsMCw5Mi40MSwzMkg0MEEyMCwyMCwwLDAsMCwyMCw1MlYyMDAuNjJBMTkuNDEsMTkuNDEsMCwwLDAsMzkuMzgsMjIwaDczLjE4YTEyLDEyLDAsMCwwLDAtMjRaTTQ0LDU2SDkwLjYxbDEwLjY3LDEySDQ0Wk0yNDMuNDQsMTU4YTEyLDEyLDAsMCwwLTEwLjUyLTguMzRsLTI3LjQyLTIuMTJMMTk1LDEyMy4yNWExMiwxMiwwLDAsMC0yMiwwTDE2Mi41LDE0Ny41M2wtMjcuNDIsMi4xMmExMiwxMiwwLDAsMC02LjcyLDIxLjIybDIwLjU4LDE3LTYuMjUsMjUuMjZhMTIsMTIsMCwwLDAsMTcuNzMsMTMuMjJMMTg0LDIxMi40NmwyMy41OCwxMy44OGExMiwxMiwwLDAsMCwxNy43My0xMy4yMmwtNi4yNS0yNS4yNiwyMC41OC0xN0ExMiwxMiwwLDAsMCwyNDMuNDQsMTU4Wk0xOTgsMTc0LjE2YTEyLDEyLDAsMCwwLTQsMTIuMTNsMS4yMSw0Ljg5LTUuMDctM2ExMi4wNiwxMi4wNiwwLDAsMC0xMi4xOCwwbC01LjA3LDMsMS4yMS00Ljg5YTEyLDEyLDAsMCwwLTQtMTIuMTNsLTMuNDgtMi44Nyw1LS4zOWExMiwxMiwwLDAsMCwxMC4xLTcuMjFsMi4zMy01LjQsMi4zMyw1LjRhMTIsMTIsMCwwLDAsMTAuMDksNy4yMWw1LC4zOVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNiwxODMuNDEsMjEzLjY3LDIxNiwxODQsMTk4LjU0LDE1NC4zMywyMTZsOC4wNy0zMi41OUwxMzYsMTYxLjYxbDM0LjY1LTIuNjdMMTg0LDEyOGwxMy4zNSwzMC45NEwyMzIsMTYxLjYxWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyMC41NiwyMDBINDBWODhIMjE2djMyYTgsOCwwLDAsMCwxNiwwVjg4YTE2LDE2LDAsMCwwLTE2LTE2SDEzMS4zMUwxMDQsNDQuNjlBMTUuODYsMTUuODYsMCwwLDAsOTIuNjksNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwLjYyQTE1LjQsMTUuNCwwLDAsMCwzOS4zOCwyMTZoODEuMThhOCw4LDAsMCwwLDAtMTZaTTkyLjY5LDU2bDE2LDE2SDQwVjU2Wk0yMzkuNjMsMTU5LjJhOCw4LDAsMCwwLTctNS41NmwtMjkuODQtMi4zMS0xMS40My0yNi41YTgsOCwwLDAsMC0xNC43LDBsLTExLjQzLDI2LjUtMjkuODQsMi4zMWE4LDgsMCwwLDAtNC40NywxNC4xNGwyMi41MSwxOC41OS02Ljg1LDI3LjcxYTgsOCwwLDAsMCwxMS44Miw4LjgxTDE4NCwyMDcuODJsMjUuNjEsMTUuMDdhOCw4LDAsMCwwLDExLjgyLTguODFsLTYuODUtMjcuNzEsMjIuNTEtMTguNTlBOCw4LDAsMCwwLDIzOS42MywxNTkuMlptLTM5LjEyLDE4YTgsOCwwLDAsMC0yLjY4LDguMDlsMy41LDE0LjEyLTEzLjI3LTcuODFhOCw4LDAsMCwwLTguMTIsMGwtMTMuMjcsNy44MSwzLjUtMTQuMTJhOCw4LDAsMCwwLTIuNjgtOC4wOWwtMTEuMTEtOS4xOCwxNC44OS0xLjE1YTgsOCwwLDAsMCw2LjczLTQuOGw2LTEzLjkyLDYsMTMuOTJhOCw4LDAsMCwwLDYuNzMsNC44bDE0Ljg5LDEuMTVaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuMDksMTY3Ljc4bC0yMi41MSwxOC41OSw2Ljg1LDI3LjcxYTgsOCwwLDAsMS0xMS44Miw4LjgxTDE4NCwyMDcuODJsLTI1LjYxLDE1LjA3YTgsOCwwLDAsMS0xMS44Mi04LjgxbDYuODUtMjcuNzEtMjIuNTEtMTguNTlhOCw4LDAsMCwxLDQuNDctMTQuMTRsMjkuODQtMi4zMSwxMS40My0yNi41YTgsOCwwLDAsMSwxNC43LDBsMTEuNDMsMjYuNSwyOS44NCwyLjMxYTgsOCwwLDAsMSw0LjQ3LDE0LjE0Wk0xMjguNTYsMjA4YTgsOCwwLDAsMS04LDhIMzkuMzhBMTUuNCwxNS40LDAsMCwxLDI0LDIwMC42MlY1NkExNiwxNiwwLDAsMSw0MCw0MEg5Mi42OUExNS44NiwxNS44NiwwLDAsMSwxMDQsNDQuNjlMMTMxLjMxLDcySDIxNmExNiwxNiwwLDAsMSwxNiwxNnYzMmE4LDgsMCwwLDEtMTYsMFY4OEg0MFYyMDBoODAuNTZBOCw4LDAsMCwxLDEyOC41NiwyMDhaTTQwLDcyaDY4LjY5bC0xNi0xNkg0MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODZhMiwyLDAsMCwxLDIsMnYzMmE2LDYsMCwwLDAsMTIsMFY4OGExNCwxNCwwLDAsMC0xNC0xNEgxMzAuNDhsLTI3LjktMjcuOUExMy45LDEzLjksMCwwLDAsOTIuNjksNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwLjYxQTEzLjM5LDEzLjM5LDAsMCwwLDM5LjM4LDIxNGg4MS4xOGE2LDYsMCwwLDAsMC0xMkgzOS4zOEExLjQsMS40LDAsMCwxLDM4LDIwMC42MVY4NlpNNDAsNTRIOTIuNjlhMiwyLDAsMCwxLDEuNDEuNThMMTEzLjUyLDc0SDM4VjU2QTIsMiwwLDAsMSw0MCw1NFpNMjM3LjcyLDE1OS44YTYsNiwwLDAsMC01LjI2LTQuMTdsLTMxLTIuNC0xMS45MS0yNy42MWE2LDYsMCwwLDAtMTEsMGwtMTEuOTEsMjcuNjEtMzEsMi40YTYsNiwwLDAsMC0zLjM2LDEwLjYxbDIzLjQ5LDE5LjM5LTcuMTYsMjguOTNhNiw2LDAsMCwwLDguODcsNi42MUwxODQsMjA1LjVsMjYuNjIsMTUuNjdhNiw2LDAsMCwwLDguODctNi42MWwtNy4xNi0yOC45MywyMy40OS0xOS4zOUE2LDYsMCwwLDAsMjM3LjcyLDE1OS44Wm0tMzUuOTQsMTlhNiw2LDAsMCwwLTIsNi4wN2w0LjY0LDE4Ljc0TDE4NywxOTMuMzZhNiw2LDAsMCwwLTYuMDgsMGwtMTcuMzcsMTAuMjMsNC42My0xOC43NGE2LDYsMCwwLDAtMi02LjA3bC0xNC45NC0xMi4zMywxOS44My0xLjUzYTYsNiwwLDAsMCw1LTMuNjFMMTg0LDE0My4xNGw3Ljg0LDE4LjE3YTYsNiwwLDAsMCw1LDMuNjFsMTkuODMsMS41M1oiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAuNTYsMjAwSDQwVjg4SDIxNnYzMmE4LDgsMCwwLDAsMTYsMFY4OGExNiwxNiwwLDAsMC0xNi0xNkgxMzEuMzFMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjIwMC42MkExNS40LDE1LjQsMCwwLDAsMzkuMzgsMjE2aDgxLjE4YTgsOCwwLDAsMCwwLTE2Wk05Mi42OSw1NmwxNiwxNkg0MFY1NlpNMjM5LjYzLDE1OS4yYTgsOCwwLDAsMC03LTUuNTZsLTI5Ljg0LTIuMzEtMTEuNDMtMjYuNWE4LDgsMCwwLDAtMTQuNywwbC0xMS40MywyNi41LTI5Ljg0LDIuMzFhOCw4LDAsMCwwLTQuNDcsMTQuMTRsMjIuNTEsMTguNTktNi44NSwyNy43MWE4LDgsMCwwLDAsMTEuODIsOC44MUwxODQsMjA3LjgybDI1LjYxLDE1LjA3YTgsOCwwLDAsMCwxMS44Mi04LjgxbC02Ljg1LTI3LjcxLDIyLjUxLTE4LjU5QTgsOCwwLDAsMCwyMzkuNjMsMTU5LjJabS0zOS4xMiwxOGE4LDgsMCwwLDAtMi42OCw4LjA5bDMuNSwxNC4xMi0xMy4yNy03LjgxYTgsOCwwLDAsMC04LjEyLDBsLTEzLjI3LDcuODEsMy41LTE0LjEyYTgsOCwwLDAsMC0yLjY4LTguMDlsLTExLjExLTkuMTgsMTQuODktMS4xNWE4LDgsMCwwLDAsNi43My00LjhsNi0xMy45Miw2LDEzLjkyYTgsOCwwLDAsMCw2LjczLDQuOGwxNC44OSwxLjE1WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODRhNCw0LDAsMCwxLDQsNHYzMmE0LDQsMCwwLDAsOCwwVjg4YTEyLDEyLDAsMCwwLTEyLTEySDEyOS42NkwxMDEuMTcsNDcuNTFBMTEuOTMsMTEuOTMsMCwwLDAsOTIuNjksNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwLjYxQTExLjQsMTEuNCwwLDAsMCwzOS4zOCwyMTJoODEuMThhNCw0LDAsMCwwLDAtOEgzOS4zOEEzLjM5LDMuMzksMCwwLDEsMzYsMjAwLjYxVjg0Wk00MCw1Mkg5Mi42OWE0LDQsMCwwLDEsMi44MiwxLjE3TDExOC4zNCw3NkgzNlY1NkE0LDQsMCwwLDEsNDAsNTJaTTIzNS44MSwxNjAuNDFhNCw0LDAsMCwwLTMuNS0yLjc5bC0zMi4yNC0yLjQ5LTEyLjQtMjguNzJhNCw0LDAsMCwwLTcuMzQsMGwtMTIuNCwyOC43Mi0zMi4yNCwyLjQ5YTQsNCwwLDAsMC0yLjI0LDcuMDhsMjQuNDYsMjAuMTlMMTUwLjQ1LDIxNWE0LDQsMCwwLDAsNS45MSw0LjQxTDE4NCwyMDMuMThsMjcuNjQsMTYuMjdhNCw0LDAsMCwwLDIsLjU1LDQuMDUsNC4wNSwwLDAsMCwyLjM5LS43OSw0LDQsMCwwLDAsMS40OS00LjE3bC03LjQ2LTMwLjE1LDI0LjQ2LTIwLjE5QTQsNCwwLDAsMCwyMzUuODEsMTYwLjQxWm0tMzIuNzYsMTkuOTFhNCw0LDAsMCwwLTEuMzMsNC4wNWw1Ljc4LDIzLjM2TDE4NiwxOTUuMDlhNCw0LDAsMCwwLTQuMDYsMEwxNjAuNSwyMDcuNzNsNS43OC0yMy4zNmE0LDQsMCwwLDAtMS4zMy00LjA1bC0xOC43Ni0xNS40OEwxNzEsMTYyLjkyYTQsNCwwLDAsMCwzLjM2LTIuNEwxODQsMTM4LjFsOS42OCwyMi40MmE0LDQsMCwwLDAsMy4zNiwyLjRsMjQuNzcsMS45MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FolderStar";
export { I as FolderStar };
