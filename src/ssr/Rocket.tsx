/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Rocket";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsMjI4YTEyLDEyLDAsMCwxLTEyLDEySDExMmExMiwxMiwwLDAsMSwwLTI0aDMyQTEyLDEyLDAsMCwxLDE1NiwyMjhaTTEyOCwxMTZhMTYsMTYsMCwxLDAtMTYtMTZBMTYsMTYsMCwwLDAsMTI4LDExNlptOTkuNTMsNDAuNy0xMi4zNiw1NS42M2ExOS45LDE5LjksMCwwLDEtMTIuODgsMTQuNTNBMjAuMTYsMjAuMTYsMCwwLDEsMTk1LjYsMjI4YTE5Ljg3LDE5Ljg3LDAsMCwxLTEyLjI5LTQuMjdMMTU3LjE3LDIwNEg5OC44M0w3Mi42OSwyMjMuNzRBMTkuODcsMTkuODcsMCwwLDEsNjAuNCwyMjhhMjAuMTYsMjAuMTYsMCwwLDEtNi42OS0xLjE1LDE5LjksMTkuOSwwLDAsMS0xMi44OC0xNC41M0wyOC40NywxNTYuN2EyMC4xLDIwLjEsMCwwLDEsNC4xNi0xNy4xNGwyNy44My0zMy40QTEyNywxMjcsMCwwLDEsNjkuMTEsNjkuN2MxMy4yNy0zMy4yNSwzNy01NC4xLDQ2LjY0LTYxLjUyYTIwLDIwLDAsMCwxLDI0LjUsMGM5LjYsNy40MiwzMy4zNywyOC4yNyw0Ni42NCw2MS41MmExMjcsMTI3LDAsMCwxLDguNjUsMzYuNDZsMjcuODMsMzMuNEEyMC4xLDIwLjEsMCwwLDEsMjI3LjUzLDE1Ni43Wk0xMDEuNzksMTgwaDUyLjQyYzE5LjUxLTM1LjcsMjMtNjkuNzgsMTAuMzktMTAxLjRDMTU0LjQsNTMsMTM2LjIsMzUuOSwxMjgsMjkuMTIsMTE5LjgsMzUuOSwxMDEuNiw1Myw5MS40LDc4LjYsNzguNzgsMTEwLjIyLDgyLjI4LDE0NC4zLDEwMS43OSwxODBabS0yMi41NSw4LjcyYTE2OCwxNjgsMCwwLDEtMTYuOTItNDcuM2wtMTAsMTIsMTAuNTgsNDcuNjRabTEyNC40My0zNS4zMS0xMC0xMmExNjgsMTY4LDAsMCwxLTE2LjkyLDQ3LjNsMTYuMzMsMTIuMzNaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NC44MSwxOTIsNjUuMzYsMjE0LjI0YTgsOCwwLDAsMS0xMi44MS00LjUxTDQwLjE5LDE1NC4xYTgsOCwwLDAsMSwxLjY2LTYuODZsMzAuMzEtMzYuMzNDNzEsMTM0LjI1LDc2LjcsMTYxLjQzLDk0LjgxLDE5MlptMTE5LjM0LTQ0Ljc2LTMwLjMxLTM2LjMzYzEuMjEsMjMuMzQtNC41NCw1MC41Mi0yMi42NSw4MS4wOWwyOS40NSwyMi4yNGE4LDgsMCwwLDAsMTIuODEtNC41MWwxMi4zNi01NS42M0E4LDgsMCwwLDAsMjE0LjE1LDE0Ny4yNFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNTIsMjI0YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwxNTIsMjI0Wk0xMjgsMTEyYTEyLDEyLDAsMSwwLTEyLTEyQTEyLDEyLDAsMCwwLDEyOCwxMTJabTk1LjYyLDQzLjgzLTEyLjM2LDU1LjYzYTE2LDE2LDAsMCwxLTI1LjUxLDkuMTFMMTU4LjUxLDIwMGgtNjFMNzAuMjUsMjIwLjU3YTE2LDE2LDAsMCwxLTI1LjUxLTkuMTFMMzIuMzgsMTU1LjgzYTE2LjA5LDE2LjA5LDAsMCwxLDMuMzItMTMuNzFsMjguNTYtMzQuMjZhMTIzLjA3LDEyMy4wNywwLDAsMSw4LjU3LTM2LjY3YzEyLjktMzIuMzQsMzYtNTIuNjMsNDUuMzctNTkuODVhMTYsMTYsMCwwLDEsMTkuNiwwYzkuMzQsNy4yMiwzMi40NywyNy41MSw0NS4zNyw1OS44NWExMjMuMDcsMTIzLjA3LDAsMCwxLDguNTcsMzYuNjdsMjguNTYsMzQuMjZBMTYuMDksMTYuMDksMCwwLDEsMjIzLjYyLDE1NS44M1pNOTkuNDMsMTg0aDU3LjE0YzIxLjEyLTM3LjU0LDI1LjA3LTczLjQ4LDExLjc0LTEwNi44OEMxNTYuNTUsNDcuNjQsMTM0LjQ5LDI5LDEyOCwyNGMtNi41MSw1LTI4LjU3LDIzLjY0LTQwLjMzLDUzLjEyQzc0LjM2LDExMC41Miw3OC4zMSwxNDYuNDYsOTkuNDMsMTg0Wm0tMTUsNS44NVE2OC4yOCwxNjAuNSw2NC44MywxMzIuMTZMNDgsMTUyLjM2LDYwLjM2LDIwOGwuMTgtLjEzWk0yMDgsMTUyLjM2bC0xNi44My0yMC4ycS0zLjQyLDI4LjI4LTE5LjU2LDU3LjY5bDIzLjg1LDE4LC4xOC4xM1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMjI0YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwxNTIsMjI0Wm03MS42Mi02OC4xNy0xMi4zNiw1NS42M2ExNiwxNiwwLDAsMS0yNS41MSw5LjExTDE1OC41MSwyMDBoLTYxTDcwLjI1LDIyMC41N2ExNiwxNiwwLDAsMS0yNS41MS05LjExTDMyLjM4LDE1NS44M2ExNi4wOSwxNi4wOSwwLDAsMSwzLjMyLTEzLjcxbDI4LjU2LTM0LjI2YTEyMy4wNywxMjMuMDcsMCwwLDEsOC41Ny0zNi42N2MxMi45LTMyLjM0LDM2LTUyLjYzLDQ1LjM3LTU5Ljg1YTE2LDE2LDAsMCwxLDE5LjYsMGM5LjM0LDcuMjIsMzIuNDcsMjcuNTEsNDUuMzcsNTkuODVhMTIzLjA3LDEyMy4wNywwLDAsMSw4LjU3LDM2LjY3bDI4LjU2LDM0LjI2QTE2LjA5LDE2LjA5LDAsMCwxLDIyMy42MiwxNTUuODNabS0xMzkuMjMsMzRRNjguMjgsMTYwLjUsNjQuODMsMTMyLjE2TDQ4LDE1Mi4zNiw2MC4zNiwyMDhsLjE4LS4xM1pNMTQwLDEwMGExMiwxMiwwLDEsMC0xMiwxMkExMiwxMiwwLDAsMCwxNDAsMTAwWm02OCw1Mi4zNi0xNi44My0yMC4ycS0zLjQyLDI4LjI4LTE5LjU2LDU3LjY5bDIzLjg1LDE4LC4xOC4xM1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTAsMjI0YTYsNiwwLDAsMS02LDZIMTEyYTYsNiwwLDAsMSwwLTEyaDMyQTYsNiwwLDAsMSwxNTAsMjI0Wk0xMjgsMTEwYTEwLDEwLDAsMSwwLTEwLTEwQTEwLDEwLDAsMCwwLDEyOCwxMTBabTkzLjY3LDQ1LjRMMjA5LjMxLDIxMUExNCwxNCwwLDAsMSwxODcsMjE5bC0yNy43OS0yMUg5Ni44Mkw2OSwyMTlhMTQsMTQsMCwwLDEtMjIuMzQtOEwzNC4zMywxNTUuNGExNC4wNiwxNC4wNiwwLDAsMSwyLjkxLTEybDI5LTM0Ljc2YTEyMS4yOCwxMjEuMjgsMCwwLDEsOC40OC0zNi43MWMxMi43Mi0zMS44OCwzNS41Mi01MS44OCw0NC43My01OWExNCwxNCwwLDAsMSwxNy4xNiwwYzkuMjEsNy4xMiwzMiwyNy4xMiw0NC43Myw1OWExMjEuMjgsMTIxLjI4LDAsMCwxLDguNDgsMzYuNzFsMjksMzQuNzZBMTQuMDYsMTQuMDYsMCwwLDEsMjIxLjY3LDE1NS40Wk05OC4yNiwxODZoNTkuNDhjMjEuOTMtMzguNDYsMjYuMTItNzUuMzMsMTIuNDMtMTA5LjYyLTExLjk1LTMwLTM0LjM1LTQ4Ljg3LTQwLjkzLTU0YTIsMiwwLDAsMC0yLjQ4LDBjLTYuNTgsNS4wOS0yOSwyNC00MC45Myw1NEM3Mi4xNCwxMTAuNjcsNzYuMzMsMTQ3LjU0LDk4LjI2LDE4NlpNODcsMTkwLjRjLTEyLTIxLjQ5LTE4LjktNDIuNi0yMC42Mi02My4xOUw0Ni40NiwxNTEuMDhhMiwyLDAsMCwwLS40MiwxLjcxbDEyLjM3LDU1LjY0YTIsMiwwLDAsMCwzLjIsMS4xM2wuMTMtLjExWm0xMjIuNTctMzkuMzItMTkuODktMjMuODdjLTEuNzIsMjAuNTktOC42LDQxLjctMjAuNjIsNjMuMTlsMjUuMjMsMTksLjEzLjExYTIsMiwwLDAsMCwzLjItMS4xM0wyMTAsMTUyLjc5QTIsMiwwLDAsMCwyMDkuNTQsMTUxLjA4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMjI0YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwxNTIsMjI0Wk0xMjgsMTEyYTEyLDEyLDAsMSwwLTEyLTEyQTEyLDEyLDAsMCwwLDEyOCwxMTJabTk1LjYyLDQzLjgzLTEyLjM2LDU1LjYzYTE2LDE2LDAsMCwxLTI1LjUxLDkuMTFMMTU4LjUxLDIwMGgtNjFMNzAuMjUsMjIwLjU3YTE2LDE2LDAsMCwxLTI1LjUxLTkuMTFMMzIuMzgsMTU1LjgzYTE2LjA5LDE2LjA5LDAsMCwxLDMuMzItMTMuNzFsMjguNTYtMzQuMjZhMTIzLjA3LDEyMy4wNywwLDAsMSw4LjU3LTM2LjY3YzEyLjktMzIuMzQsMzYtNTIuNjMsNDUuMzctNTkuODVhMTYsMTYsMCwwLDEsMTkuNiwwYzkuMzQsNy4yMiwzMi40NywyNy41MSw0NS4zNyw1OS44NWExMjMuMDcsMTIzLjA3LDAsMCwxLDguNTcsMzYuNjdsMjguNTYsMzQuMjZBMTYuMDksMTYuMDksMCwwLDEsMjIzLjYyLDE1NS44M1pNOTkuNDMsMTg0aDU3LjE0YzIxLjEyLTM3LjU0LDI1LjA3LTczLjQ4LDExLjc0LTEwNi44OEMxNTYuNTUsNDcuNjQsMTM0LjQ5LDI5LDEyOCwyNGMtNi41MSw1LTI4LjU3LDIzLjY0LTQwLjMzLDUzLjEyQzc0LjM2LDExMC41Miw3OC4zMSwxNDYuNDYsOTkuNDMsMTg0Wm0tMTUsNS44NVE2OC4yOCwxNjAuNSw2NC44MywxMzIuMTZMNDgsMTUyLjM2LDYwLjM2LDIwOGwuMTgtLjEzWk0yMDgsMTUyLjM2bC0xNi44My0yMC4ycS0zLjQyLDI4LjI4LTE5LjU2LDU3LjY5bDIzLjg1LDE4LC4xOC4xM1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMjI0YTQsNCwwLDAsMS00LDRIMTEyYTQsNCwwLDAsMSwwLThoMzJBNCw0LDAsMCwxLDE0OCwyMjRaTTEyOCwxMDhhOCw4LDAsMSwwLTgtOEE4LDgsMCwwLDAsMTI4LDEwOFptOTEuNzIsNDdMMjA3LjM1LDIxMC42YTExLjksMTEuOSwwLDAsMS03LjcyLDguNzEsMTIuMTcsMTIuMTcsMCwwLDEtNCwuNjksMTEuOTQsMTEuOTQsMCwwLDEtNy40My0yLjZMMTU5Ljg1LDE5Nkg5Ni4xNUw2Ny44MSwyMTcuNGExMS45NCwxMS45NCwwLDAsMS03LjQzLDIuNiwxMi4xNywxMi4xNywwLDAsMS00LS42OSwxMS45LDExLjksMCwwLDEtNy43Mi04LjcxTDM2LjI4LDE1NWExMiwxMiwwLDAsMSwyLjUtMTAuMjhsMjkuMzUtMzUuMjNjMy4zLTUzLjMzLDQxLjgzLTg2LjY4LDUyLjUyLTk0Ljk0YTEyLDEyLDAsMCwxLDE0LjcsMGMxMC42OSw4LjI2LDQ5LjIyLDQxLjYxLDUyLjUyLDk0Ljk0bDI5LjM1LDM1LjIzQTEyLDEyLDAsMCwxLDIxOS43MiwxNTVaTTk3LjExLDE4OGg2MS43OEMyMTQuMDcsOTIuNDksMTQ1LDMyLjA1LDEzMC40NiwyMC44NGE0LDQsMCwwLDAtNC45MiwwQzExMSwzMi4wNSw0MS45Myw5Mi40OSw5Ny4xMSwxODhabS03LjUyLDIuOTNDNzUuMTIsMTY1LjU2LDY4LjkzLDE0Mi41Miw2OCwxMjIuMDZMNDQuOTIsMTQ5LjhhNCw0LDAsMCwwLS44MywzLjQzbDEyLjM2LDU1LjYzYTQsNCwwLDAsMCw2LjQxLDIuMjZsLjA5LS4wN1pNMjExLjA4LDE0OS44LDE4OCwxMjIuMDZjLS44OSwyMC40Ni03LjA4LDQzLjUtMjEuNTUsNjguODdsMjYuNjQsMjAuMTIuMDkuMDdhNCw0LDAsMCwwLDYuNDEtMi4yNmwxMi4zNi01NS42M0E0LDQsMCwwLDAsMjExLjA4LDE0OS44WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Rocket";
export { I as Rocket };
