/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Globe";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRoMEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjEyLDEwNC4xMiwwLDAsMCwxMjgsMjRabTg4LDEwNGE4Ny42MSw4Ny42MSwwLDAsMS0zLjMzLDI0SDE3NC4xNmExNTcuNDQsMTU3LjQ0LDAsMCwwLDAtNDhoMzguNTFBODcuNjEsODcuNjEsMCwwLDEsMjE2LDEyOFpNMTAyLDE2OEgxNTRhMTE1LjExLDExNS4xMSwwLDAsMS0yNiw0NUExMTUuMjcsMTE1LjI3LDAsMCwxLDEwMiwxNjhabS0zLjktMTZhMTQwLjg0LDE0MC44NCwwLDAsMSwwLTQ4aDU5Ljg4YTE0MC44NCwxNDAuODQsMCwwLDEsMCw0OFpNNDAsMTI4YTg3LjYxLDg3LjYxLDAsMCwxLDMuMzMtMjRIODEuODRhMTU3LjQ0LDE1Ny40NCwwLDAsMCwwLDQ4SDQzLjMzQTg3LjYxLDg3LjYxLDAsMCwxLDQwLDEyOFpNMTU0LDg4SDEwMmExMTUuMTEsMTE1LjExLDAsMCwxLDI2LTQ1QTExNS4yNywxMTUuMjcsMCwwLDEsMTU0LDg4Wm01Mi4zMywwSDE3MC43MWExMzUuMjgsMTM1LjI4LDAsMCwwLTIyLjMtNDUuNkE4OC4yOSw4OC4yOSwwLDAsMSwyMDYuMzcsODhaTTEwNy41OSw0Mi40QTEzNS4yOCwxMzUuMjgsMCwwLDAsODUuMjksODhINDkuNjNBODguMjksODguMjksMCwwLDEsMTA3LjU5LDQyLjRaTTQ5LjYzLDE2OEg4NS4yOWExMzUuMjgsMTM1LjI4LDAsMCwwLDIyLjMsNDUuNkE4OC4yOSw4OC4yOSwwLDAsMSw0OS42MywxNjhabTk4Ljc4LDQ1LjZhMTM1LjI4LDEzNS4yOCwwLDAsMCwyMi4zLTQ1LjZoMzUuNjZBODguMjksODguMjksMCwwLDEsMTQ4LjQxLDIxMy42WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhoMEExMDAsMTAwLDAsMSwwLDIyOCwxMjgsMTAwLjExLDEwMC4xMSwwLDAsMCwxMjgsMjhabTAsMTkwLjYxYy02LjMzLTYuMDktMjMtMjQuNDEtMzEuMjctNTQuNjFoNjIuNTRDMTUxLDE5NC4yLDEzNC4zMywyMTIuNTIsMTI4LDIxOC42MVpNOTQuODIsMTU2YTE0MC40MiwxNDAuNDIsMCwwLDEsMC01Nmg2Ni4zNmExNDAuNDIsMTQwLjQyLDAsMCwxLDAsNTZaTTEyOCwzNy4zOWM2LjMzLDYuMDksMjMsMjQuNDEsMzEuMjcsNTQuNjFIOTYuNzNDMTA1LDYxLjgsMTIxLjY3LDQzLjQ4LDEyOCwzNy4zOVpNMTY5LjQxLDEwMGg0Ni4yM2E5Mi4wOSw5Mi4wOSwwLDAsMSwwLDU2SDE2OS40MWExNTIuNjUsMTUyLjY1LDAsMCwwLDAtNTZabTQzLjI1LThoLTQ1YTEyOS4zOSwxMjkuMzksMCwwLDAtMjkuMTktNTUuNEE5Mi4yNSw5Mi4yNSwwLDAsMSwyMTIuNjYsOTJaTTExNy41NCwzNi42QTEyOS4zOSwxMjkuMzksMCwwLDAsODguMzUsOTJoLTQ1QTkyLjI1LDkyLjI1LDAsMCwxLDExNy41NCwzNi42Wk00MC4zNiwxMDBIODYuNTlhMTUyLjY1LDE1Mi42NSwwLDAsMCwwLDU2SDQwLjM2YTkyLjA5LDkyLjA5LDAsMCwxLDAtNTZabTMsNjRoNDVhMTI5LjM5LDEyOS4zOSwwLDAsMCwyOS4xOSw1NS40QTkyLjI1LDkyLjI1LDAsMCwxLDQzLjM0LDE2NFptOTUuMTIsNTUuNEExMjkuMzksMTI5LjM5LDAsMCwwLDE2Ny42NSwxNjRoNDVBOTIuMjUsOTIuMjUsMCwwLDEsMTM4LjQ2LDIxOS40WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm04MS41Nyw2NEgxNjkuMTlhMTMyLjU4LDEzMi41OCwwLDAsMC0yNS43My01MC42N0E5MC4yOSw5MC4yOSwwLDAsMSwyMDkuNTcsOTBaTTIxOCwxMjhhODkuNyw4OS43LDAsMCwxLTMuODMsMjZIMTcxLjgxYTE1NS40MywxNTUuNDMsMCwwLDAsMC01Mmg0Mi4zNkE4OS43LDg5LjcsMCwwLDEsMjE4LDEyOFptLTkwLDg3LjgzYTExMCwxMTAsMCwwLDEtMTUuMTktMTkuNDVBMTI0LjI0LDEyNC4yNCwwLDAsMSw5OS4zNSwxNjZoNTcuM2ExMjQuMjQsMTI0LjI0LDAsMCwxLTEzLjQ2LDMwLjM4QTExMCwxMTAsMCwwLDEsMTI4LDIxNS44M1pNOTYuNDUsMTU0YTEzOS4xOCwxMzkuMTgsMCwwLDEsMC01Mmg2My4xYTEzOS4xOCwxMzkuMTgsMCwwLDEsMCw1MlpNMzgsMTI4YTg5LjcsODkuNywwLDAsMSwzLjgzLTI2SDg0LjE5YTE1NS40MywxNTUuNDMsMCwwLDAsMCw1Mkg0MS44M0E4OS43LDg5LjcsMCwwLDEsMzgsMTI4Wm05MC04Ny44M2ExMTAsMTEwLDAsMCwxLDE1LjE5LDE5LjQ1QTEyNC4yNCwxMjQuMjQsMCwwLDEsMTU2LjY1LDkwSDk5LjM1YTEyNC4yNCwxMjQuMjQsMCwwLDEsMTMuNDYtMzAuMzhBMTEwLDExMCwwLDAsMSwxMjgsNDAuMTdabS0xNS40Ni0uODRBMTMyLjU4LDEzMi41OCwwLDAsMCw4Ni44MSw5MEg0Ni40M0E5MC4yOSw5MC4yOSwwLDAsMSwxMTIuNTQsMzkuMzNaTTQ2LjQzLDE2Nkg4Ni44MWExMzIuNTgsMTMyLjU4LDAsMCwwLDI1LjczLDUwLjY3QTkwLjI5LDkwLjI5LDAsMCwxLDQ2LjQzLDE2NlptOTcsNTAuNjdBMTMyLjU4LDEzMi41OCwwLDAsMCwxNjkuMTksMTY2aDQwLjM4QTkwLjI5LDkwLjI5LDAsMCwxLDE0My40NiwyMTYuNjdaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE4N2ExMTMuNCwxMTMuNCwwLDAsMS0yMC4zOS0zNWg0MC44MmExMTYuOTQsMTE2Ljk0LDAsMCwxLTEwLDIwLjc3QTEwOC42MSwxMDguNjEsMCwwLDEsMTI4LDIwN1ptLTI2LjQ5LTU5YTEzNS40MiwxMzUuNDIsMCwwLDEsMC00MGg1M2ExMzUuNDIsMTM1LjQyLDAsMCwxLDAsNDBaTTQ0LDEyOGE4My40OSw4My40OSwwLDAsMSwyLjQzLTIwSDc3LjI1YTE2MC42MywxNjAuNjMsMCwwLDAsMCw0MEg0Ni40M0E4My40OSw4My40OSwwLDAsMSw0NCwxMjhabTg0LTc5YTExMy40LDExMy40LDAsMCwxLDIwLjM5LDM1SDEwNy41OWExMTYuOTQsMTE2Ljk0LDAsMCwxLDEwLTIwLjc3QTEwOC42MSwxMDguNjEsMCwwLDEsMTI4LDQ5Wm01MC43Myw1OWgzMC44MmE4My41Miw4My41MiwwLDAsMSwwLDQwSDE3OC43NWExNjAuNjMsMTYwLjYzLDAsMCwwLDAtNDBabTIwLjc3LTI0SDE3My43MWExNDAuODIsMTQwLjgyLDAsMCwwLTE1LjUtMzQuMzZBODQuNTEsODQuNTEsMCwwLDEsMTk5LjUyLDg0Wk05Ny43OSw0OS42NEExNDAuODIsMTQwLjgyLDAsMCwwLDgyLjI5LDg0SDU2LjQ4QTg0LjUxLDg0LjUxLDAsMCwxLDk3Ljc5LDQ5LjY0Wk01Ni40OCwxNzJIODIuMjlhMTQwLjgyLDE0MC44MiwwLDAsMCwxNS41LDM0LjM2QTg0LjUxLDg0LjUxLDAsMCwxLDU2LjQ4LDE3MlptMTAxLjczLDM0LjM2QTE0MC44MiwxNDAuODIsMCwwLDAsMTczLjcxLDE3MmgyNS44MUE4NC41MSw4NC41MSwwLDAsMSwxNTguMjEsMjA2LjM2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRoMEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjEyLDEwNC4xMiwwLDAsMCwxMjgsMjRabTc4LjM2LDY0SDE3MC43MWExMzUuMjgsMTM1LjI4LDAsMCwwLTIyLjMtNDUuNkE4OC4yOSw4OC4yOSwwLDAsMSwyMDYuMzcsODhaTTIxNiwxMjhhODcuNjEsODcuNjEsMCwwLDEtMy4zMywyNEgxNzQuMTZhMTU3LjQ0LDE1Ny40NCwwLDAsMCwwLTQ4aDM4LjUxQTg3LjYxLDg3LjYxLDAsMCwxLDIxNiwxMjhaTTEyOCw0M2ExMTUuMjcsMTE1LjI3LDAsMCwxLDI2LDQ1SDEwMkExMTUuMTEsMTE1LjExLDAsMCwxLDEyOCw0M1pNMTAyLDE2OEgxNTRhMTE1LjExLDExNS4xMSwwLDAsMS0yNiw0NUExMTUuMjcsMTE1LjI3LDAsMCwxLDEwMiwxNjhabS0zLjktMTZhMTQwLjg0LDE0MC44NCwwLDAsMSwwLTQ4aDU5Ljg4YTE0MC44NCwxNDAuODQsMCwwLDEsMCw0OFptNTAuMzUsNjEuNmExMzUuMjgsMTM1LjI4LDAsMCwwLDIyLjMtNDUuNmgzNS42NkE4OC4yOSw4OC4yOSwwLDAsMSwxNDguNDEsMjEzLjZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0aDBBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMiwxMDQuMTIsMCwwLDAsMTI4LDI0Wm04OCwxMDRhODcuNjEsODcuNjEsMCwwLDEtMy4zMywyNEgxNzQuMTZhMTU3LjQ0LDE1Ny40NCwwLDAsMCwwLTQ4aDM4LjUxQTg3LjYxLDg3LjYxLDAsMCwxLDIxNiwxMjhaTTEwMiwxNjhIMTU0YTExNS4xMSwxMTUuMTEsMCwwLDEtMjYsNDVBMTE1LjI3LDExNS4yNywwLDAsMSwxMDIsMTY4Wm0tMy45LTE2YTE0MC44NCwxNDAuODQsMCwwLDEsMC00OGg1OS44OGExNDAuODQsMTQwLjg0LDAsMCwxLDAsNDhaTTQwLDEyOGE4Ny42MSw4Ny42MSwwLDAsMSwzLjMzLTI0SDgxLjg0YTE1Ny40NCwxNTcuNDQsMCwwLDAsMCw0OEg0My4zM0E4Ny42MSw4Ny42MSwwLDAsMSw0MCwxMjhaTTE1NCw4OEgxMDJhMTE1LjExLDExNS4xMSwwLDAsMSwyNi00NUExMTUuMjcsMTE1LjI3LDAsMCwxLDE1NCw4OFptNTIuMzMsMEgxNzAuNzFhMTM1LjI4LDEzNS4yOCwwLDAsMC0yMi4zLTQ1LjZBODguMjksODguMjksMCwwLDEsMjA2LjM3LDg4Wk0xMDcuNTksNDIuNEExMzUuMjgsMTM1LjI4LDAsMCwwLDg1LjI5LDg4SDQ5LjYzQTg4LjI5LDg4LjI5LDAsMCwxLDEwNy41OSw0Mi40Wk00OS42MywxNjhIODUuMjlhMTM1LjI4LDEzNS4yOCwwLDAsMCwyMi4zLDQ1LjZBODguMjksODguMjksMCwwLDEsNDkuNjMsMTY4Wm05OC43OCw0NS42YTEzNS4yOCwxMzUuMjgsMCwwLDAsMjIuMy00NS42aDM1LjY2QTg4LjI5LDg4LjI5LDAsMCwxLDE0OC40MSwyMTMuNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Globe";
export { I as Globe };
