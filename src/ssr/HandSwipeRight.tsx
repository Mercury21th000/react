/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HandSwipeRight";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQwdjM2YzAsMjUuNTktOC40OSw0Mi44NS04Ljg1LDQzLjU4QTgsOCwwLDAsMSwyMDAsMjI0YTcuOSw3LjksMCwwLDEtMy41Ny0uODUsOCw4LDAsMCwxLTMuNTgtMTAuNzNjLjA2LS4xMiw3LjE2LTE0LjgxLDcuMTYtMzYuNDJWMTQwYTEyLDEyLDAsMCwwLTI0LDB2NGE4LDgsMCwwLDEtMTYsMFYxMjRhMTIsMTIsMCwwLDAtMjQsMHYxMmE4LDgsMCwwLDEtMTYsMFY2OGExMiwxMiwwLDAsMC0yNCwwVjE3NmE4LDgsMCwwLDEtMTQuNzksNC4yM2wtMTguNjgtMzAtLjE0LS4yM0ExMiwxMiwwLDEsMCw0MS42LDE2Mkw3MC44OSwyMTJBOCw4LDAsMSwxLDU3LjA4LDIyMGwtMjkuMzItNTBhMjgsMjgsMCwwLDEsNDguNDEtMjguMTdMODAsMTQ4VjY4YTI4LDI4LDAsMCwxLDU2LDBWOTguN2EyOCwyOCwwLDAsMSwzOC42NSwxNi42OUEyOCwyOCwwLDAsMSwyMTYsMTQwWm0zNy42Ni04OS42Ni0zMi0zMmE4LDgsMCwwLDAtMTEuMzEsMTEuMzJMMjI4LjY4LDQ4SDE3NmE4LDgsMCwwLDAsMCwxNmg1Mi42OUwyMTAuMzQsODIuMzRhOCw4LDAsMCwwLDExLjMxLDExLjMybDMyLTMyQTgsOCwwLDAsMCwyNTMuNjYsNTAuMzRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTQwdjM2YzAsMjQuNjYtOC4wOCw0MS4xLTguNDIsNDEuNzlhNCw0LDAsMSwxLTcuMTYtMy41OGMuMDctLjE1LDcuNTgtMTUuNTUsNy41OC0zOC4yMVYxNDBhMTYsMTYsMCwwLDAtMzIsMHY0YTQsNCwwLDAsMS04LDBWMTI0YTE2LDE2LDAsMCwwLTMyLDB2MTJhNCw0LDAsMCwxLTgsMFY2OGExNiwxNiwwLDAsMC0zMiwwVjE3NmE0LDQsMCwwLDEtNy4zOSwyLjExbC0xOC42OC0zMGEuNzUuNzUsMCwwLDEtLjA3LS4xMiwxNiwxNiwwLDAsMC0yNy43MiwxNmwyOS4zMSw1MGE0LDQsMCwwLDEtNi45LDRMMzEuMjIsMTY4YTI0LDI0LDAsMCwxLDQxLjUyLTI0LjA5TDg0LDE2MlY2OGEyNCwyNCwwLDAsMSw0OCwwdjM4LjEzYTI0LDI0LDAsMCwxLDM5Ljk0LDE2LjA2QTI0LDI0LDAsMCwxLDIxMiwxNDBabTM4LjgzLTg2LjgzLTMyLTMyYTQsNCwwLDAsMC01LjY2LDUuNjZMMjM4LjM0LDUySDE3NmE0LDQsMCwwLDAsMCw4aDYyLjM0TDIxMy4xNyw4NS4xN2E0LDQsMCwwLDAsNS42Niw1LjY2bDMyLTMyQTQsNCwwLDAsMCwyNTAuODMsNTMuMTdaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMTQwdjM2YzAsMjUuMTMtOC4yOCw0Mi04LjY0LDQyLjY4QTYsNiwwLDAsMSwyMDAsMjIyYTUuODcsNS44NywwLDAsMS0yLjY4LS42NCw2LDYsMCwwLDEtMi42OC04Yy4wNy0uMTQsNy4zNy0xNS4xOSw3LjM3LTM3LjMyVjE0MGExNCwxNCwwLDAsMC0yOCwwdjRhNiw2LDAsMCwxLTEyLDBWMTI0YTE0LDE0LDAsMCwwLTI4LDB2MTJhNiw2LDAsMCwxLTEyLDBWNjhhMTQsMTQsMCwwLDAtMjgsMFYxNzZhNiw2LDAsMCwxLTExLjA5LDMuMTdsLTE4LjY4LTMwYTEsMSwwLDAsMS0uMS0uMTcsMTQsMTQsMCwwLDAtMjQuMjUsMTRsMjkuMjksNTBBNiw2LDAsMCwxLDU4LjgxLDIxOUwyOS40OSwxNjlhMjYsMjYsMCwwLDEsNDUtMjYuMTNMODIsMTU1VjY4YTI2LDI2LDAsMCwxLDUyLDB2MzQuMWEyNiwyNiwwLDAsMSwzOS40MiwxNi4zOUEyNiwyNiwwLDAsMSwyMTQsMTQwWm0zOC4yNC04OC4yNC0zMi0zMmE2LDYsMCwwLDAtOC40OCw4LjQ4TDIzMy41MSw1MEgxNzZhNiw2LDAsMSwwLDAsMTJoNTcuNTFMMjExLjc2LDgzLjc2YTYsNiwwLDEsMCw4LjQ4LDguNDhsMzItMzJBNiw2LDAsMCwwLDI1Mi4yNCw1MS43NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTQ4djM2YzAsMTMuODUtMS42MywyNi41Mi00LjU4LDM1LjY4YTEyLDEyLDAsMCwxLTIyLjg0LTcuMzZjMi4xNC02LjY1LDMuNDItMTcuMjQsMy40Mi0yOC4zMlYxNDhhOCw4LDAsMCwwLTE2LDB2NGExMiwxMiwwLDAsMS0yNCwwVjEzMmE4LDgsMCwwLDAtMTYsMHYxMmExMiwxMiwwLDAsMS0yNCwwVjc2YTgsOCwwLDAsMC0xNiwwVjE4NGExMiwxMiwwLDAsMS0yMi4xOCw2LjM0bC0xOC42OC0zMC0uMjEtLjM0QTgsOCwwLDAsMCw0NSwxNjcuOTJMNzAuMjcsMjA5LjhhMTIsMTIsMCwwLDEtMjAuNTYsMTIuMzlsLTI1LjMxLTQyLS4xMi0uMkEzMiwzMiwwLDAsMSw3NiwxNDIuODNWNzZhMzIsMzIsMCwwLDEsNjQsMHYyNWEzMiwzMiwwLDAsMSwzNi43OCwxN0EzMiwzMiwwLDAsMSwyMjAsMTQ4Wk0yNTIuNDgsNDcuNTFsLTMyLTMyYTEyLDEyLDAsMCwwLTE3LDE3TDIxNSw0NEgxNzJhMTIsMTIsMCwwLDAsMCwyNGg0M0wyMDMuNTEsNzkuNTFhMTIsMTIsMCwxLDAsMTcsMTdsMzItMzJBMTIsMTIsMCwwLDAsMjUyLjQ4LDQ3LjUxWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4djUwLjkzYzAsMjUuNTktOC40OCwzOS45My04Ljg0LDQwLjY1QTgsOCwwLDAsMSwyMDAsMjI0SDY0YTgsOCwwLDAsMS02LjktMy45NUwyNi4xNSwxNjBhMTYsMTYsMCwwLDEsNi41My0yMi4yM2M3LjY2LTQsMTcuMS0uODQsMjEuNCw2LjYybDIxLDM2LjQ0YTYuMDksNi4wOSwwLDAsMCw2LDMuMDlsLjEyLDBBOC4xOSw4LjE5LDAsMCwwLDg4LDE3NS43NFY1NmExNiwxNiwwLDAsMSwxNi43Ny0xNmM4LjYxLjQsMTUuMjMsNy44MiwxNS4yMywxNi40M1YxMjhhOCw4LDAsMCwwLDguNTMsOCw4LjE3LDguMTcsMCwwLDAsNy40Ny04LjI1VjExMmExNiwxNiwwLDAsMSwxNi43Ny0xNmM4LjYxLjQsMTUuMjMsNy44MiwxNS4yMywxNi40M1YxMzZhOCw4LDAsMCwwLDguNTMsOCw4LjE4LDguMTgsMCwwLDAsNy40Ny04LjI1di03LjI4YzAtOC42MSw2LjYyLTE2LDE1LjIzLTE2LjQzQTE2LDE2LDAsMCwxLDIxNiwxMjhabTM3LjY2LTc3LjY2LTMyLTMyYTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwyMjguNjksNDhIMTc2YTgsOCwwLDAsMCwwLDE2aDUyLjY5TDIxMC4zNCw4Mi4zNGE4LDgsMCwwLDAsMTEuMzIsMTEuMzJsMzItMzJBOCw4LDAsMCwwLDI1My42Niw1MC4zNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQwdjM2YzAsMjQtOCw0MC04LDQwSDY0TDM0LjY4LDE2NmEyMCwyMCwwLDAsMSwzNC42NC0yMEw4OCwxNzZWNjhhMjAsMjAsMCwwLDEsNDAsMHY1NmEyMCwyMCwwLDAsMSw0MCwwdjE2YTIwLDIwLDAsMCwxLDQwLDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDE0MHYzNmMwLDI1LjU5LTguNDksNDIuODUtOC44NSw0My41OEE4LDgsMCwwLDEsMjAwLDIyNGE3LjksNy45LDAsMCwxLTMuNTctLjg1LDgsOCwwLDAsMS0zLjU4LTEwLjczYy4wNi0uMTIsNy4xNi0xNC44MSw3LjE2LTM2LjQyVjE0MGExMiwxMiwwLDAsMC0yNCwwdjRhOCw4LDAsMCwxLTE2LDBWMTI0YTEyLDEyLDAsMCwwLTI0LDB2MTJhOCw4LDAsMCwxLTE2LDBWNjhhMTIsMTIsMCwwLDAtMjQsMFYxNzZhOCw4LDAsMCwxLTE0Ljc5LDQuMjNsLTE4LjY4LTMwLS4xNC0uMjNBMTIsMTIsMCwxLDAsNDEuNiwxNjJMNzAuODksMjEyQTgsOCwwLDEsMSw1Ny4wOCwyMjBsLTI5LjMyLTUwYTI4LDI4LDAsMCwxLDQ4LjQxLTI4LjE3TDgwLDE0OFY2OGEyOCwyOCwwLDAsMSw1NiwwVjk4LjdhMjgsMjgsMCwwLDEsMzguNjUsMTYuNjlBMjgsMjgsMCwwLDEsMjE2LDE0MFptMzcuNjYtODkuNjYtMzItMzJhOCw4LDAsMCwwLTExLjMxLDExLjMyTDIyOC42OCw0OEgxNzZhOCw4LDAsMCwwLDAsMTZoNTIuNjlMMjEwLjM0LDgyLjM0YTgsOCwwLDAsMCwxMS4zMSwxMS4zMmwzMi0zMkE4LDgsMCwwLDAsMjUzLjY2LDUwLjM0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HandSwipeRight";
export { I as HandSwipeRight };
