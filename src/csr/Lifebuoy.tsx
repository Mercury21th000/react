/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Lifebuoy";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm00NC4yNSwxMzUuMjhhNTEuODksNTEuODksMCwwLDAsMC01NC41NmwyMy0yM2E4My44NCw4My44NCwwLDAsMSwwLDEwMC41NlpNMTAwLDEyOGEyOCwyOCwwLDEsMSwyOCwyOEEyOCwyOCwwLDAsMSwxMDAsMTI4Wm03OC4yOC02Ny4yNS0yMywyM2E1MS44OSw1MS44OSwwLDAsMC01NC41NiwwbC0yMy0yM2E4My44NCw4My44NCwwLDAsMSwxMDAuNTYsMFptLTExNy41MywxNywyMywyM2E1MS44OSw1MS44OSwwLDAsMCwwLDU0LjU2bC0yMywyM2E4My44NCw4My44NCwwLDAsMSwwLTEwMC41NlptMTcsMTE3LjUzLDIzLTIzYTUxLjg5LDUxLjg5LDAsMCwwLDU0LjU2LDBsMjMsMjNhODMuODQsODMuODQsMCwwLDEtMTAwLjU2LDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTUuODgsMTk1Ljg4bC0zOS42LTM5LjZhNDAsNDAsMCwwLDAsMC01Ni41NmwzOS42LTM5LjZBOTYsOTYsMCwwLDEsMTk1Ljg4LDE5NS44OFpNNjAuMTIsNjAuMTJhOTYsOTYsMCwwLDAsMCwxMzUuNzZsMzkuNi0zOS42YTQwLDQwLDAsMCwxLDAtNTYuNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMzkuMSwxMzEuNzlhNDcuODQsNDcuODQsMCwwLDAsMC01NS41OGwyOC41LTI4LjQ5YTg3LjgzLDg3LjgzLDAsMCwxLDAsMTEyLjU2Wk05NiwxMjhhMzIsMzIsMCwxLDEsMzIsMzJBMzIsMzIsMCwwLDEsOTYsMTI4Wm04OC4yOC02Ny42TDE1NS43OSw4OC45YTQ3Ljg0LDQ3Ljg0LDAsMCwwLTU1LjU4LDBMNzEuNzIsNjAuNGE4Ny44Myw4Ny44MywwLDAsMSwxMTIuNTYsMFpNNjAuNCw3MS43MmwyOC41LDI4LjQ5YTQ3Ljg0LDQ3Ljg0LDAsMCwwLDAsNTUuNThMNjAuNCwxODQuMjhhODcuODMsODcuODMsMCwwLDEsMC0xMTIuNTZaTTcxLjcyLDE5NS42bDI4LjQ5LTI4LjVhNDcuODQsNDcuODQsMCwwLDAsNTUuNTgsMGwyOC40OSwyOC41YTg3LjgzLDg3LjgzLDAsMCwxLTExMi41NiwwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk05NiwxMjhhMzIsMzIsMCwxLDEsMzIsMzJBMzIsMzIsMCwwLDEsOTYsMTI4Wm04OC4yOC02Ny42TDE1NS43OSw4OC45YTQ3Ljg0LDQ3Ljg0LDAsMCwwLTU1LjU4LDBMNzEuNzIsNjAuNGE4Ny44Myw4Ny44MywwLDAsMSwxMTIuNTYsMFpNNzEuNzIsMTk1LjZsMjguNDktMjguNWE0Ny44NCw0Ny44NCwwLDAsMCw1NS41OCwwbDI4LjQ5LDI4LjVhODcuODMsODcuODMsMCwwLDEtMTEyLjU2LDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0zNi40NywxMzBhNDUuODcsNDUuODcsMCwwLDAsMC01NmwzMS4yNC0zMS4yM2E4OS44MSw4OS44MSwwLDAsMSwwLDExOC40NFpNOTQsMTI4YTM0LDM0LDAsMSwxLDM0LDM0QTM0LDM0LDAsMCwxLDk0LDEyOFptOTMuMjItNjcuNzFMMTU2LDkxLjUzYTQ1Ljg3LDQ1Ljg3LDAsMCwwLTU2LDBMNjguNzgsNjAuMjlhODkuODEsODkuODEsMCwwLDEsMTE4LjQ0LDBaTTYwLjI5LDY4Ljc4LDkxLjUzLDEwMGE0NS44Nyw0NS44NywwLDAsMCwwLDU2TDYwLjI5LDE4Ny4yMmE4OS44MSw4OS44MSwwLDAsMSwwLTExOC40NFptOC40OSwxMjYuOTNMMTAwLDE2NC40N2E0NS44Nyw0NS44NywwLDAsMCw1NiwwbDMxLjIzLDMxLjI0YTg5LjgxLDg5LjgxLDAsMCwxLTExOC40NCwwWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zOS4xLDEzMS43OWE0Ny44NCw0Ny44NCwwLDAsMCwwLTU1LjU4bDI4LjUtMjguNDlhODcuODMsODcuODMsMCwwLDEsMCwxMTIuNTZaTTk2LDEyOGEzMiwzMiwwLDEsMSwzMiwzMkEzMiwzMiwwLDAsMSw5NiwxMjhabTg4LjI4LTY3LjZMMTU1Ljc5LDg4LjlhNDcuODQsNDcuODQsMCwwLDAtNTUuNTgsMEw3MS43Miw2MC40YTg3LjgzLDg3LjgzLDAsMCwxLDExMi41NiwwWk02MC40LDcxLjcybDI4LjUsMjguNDlhNDcuODQsNDcuODQsMCwwLDAsMCw1NS41OEw2MC40LDE4NC4yOGE4Ny44Myw4Ny44MywwLDAsMSwwLTExMi41NlpNNzEuNzIsMTk1LjZsMjguNDktMjguNWE0Ny44NCw0Ny44NCwwLDAsMCw1NS41OCwwbDI4LjQ5LDI4LjVhODcuODMsODcuODMsMCwwLDEtMTEyLjU2LDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm02Ny43OSwxNjIuMTMtMzQtMzRhNDMuOTIsNDMuOTIsMCwwLDAsMC01Ni4yOGwzNC0zNGE5MS44Myw5MS44MywwLDAsMSwwLDEyNC4yNlpNOTIsMTI4YTM2LDM2LDAsMSwxLDM2LDM2QTM2LDM2LDAsMCwxLDkyLDEyOFptOTguMTMtNjcuNzktMzQsMzRhNDMuOTIsNDMuOTIsMCwwLDAtNTYuMjgsMGwtMzQtMzRhOTEuODMsOTEuODMsMCwwLDEsMTI0LjI2LDBaTTYwLjIxLDY1Ljg3bDM0LDM0YTQzLjkyLDQzLjkyLDAsMCwwLDAsNTYuMjhsLTM0LDM0YTkxLjgzLDkxLjgzLDAsMCwxLDAtMTI0LjI2Wm01LjY2LDEyOS45MiwzNC0zNGE0My45Miw0My45MiwwLDAsMCw1Ni4yOCwwbDM0LDM0YTkxLjgzLDkxLjgzLDAsMCwxLTEyNC4yNiwwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Lifebuoy";
export { I as Lifebuoy };
