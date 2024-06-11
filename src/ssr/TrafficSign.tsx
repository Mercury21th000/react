/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TrafficSign";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTEzLjQ2LDE0Mi41NCwxMGEyMC41NywyMC41NywwLDAsMC0yOS4wOCwwTDEwLDExMy40NmEyMC41NywyMC41NywwLDAsMCwwLDI5LjA4TDExMy40NiwyNDZoMGEyMC41NywyMC41NywwLDAsMCwyOS4wOCwwTDI0NiwxNDIuNTRhMjAuNTcsMjAuNTcsMCwwLDAsMC0yOS4wOFpNMTI4LDIyNi41NywyOS40MywxMjgsMTI4LDI5LjQzLDIyNi41NywxMjhabTcuNTEtMTIyLjA4YTEyLDEyLDAsMCwxLDE3LTE3bDI0LDI0YTEyLDEyLDAsMCwxLDAsMTdsLTI0LDI0YTEyLDEyLDAsMCwxLTE3LTE3TDEzOSwxMzJIMTEyYTEyLDEyLDAsMCwwLTEyLDEydjRhMTIsMTIsMCwwLDEtMjQsMHYtNGEzNiwzNiwwLDAsMSwzNi0zNmgyN1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNDksMTM0LjA1LDEzNC4wNSwyMzcuNDlhOC41NCw4LjU0LDAsMCwxLTEyLjEsMEwxOC41MSwxMzQuMDVhOC41NCw4LjU0LDAsMCwxLDAtMTIuMUwxMjIsMTguNTFhOC41NCw4LjU0LDAsMCwxLDEyLjEsMEwyMzcuNDksMTIyQTguNTQsOC41NCwwLDAsMSwyMzcuNDksMTM0LjA1WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0My4xNSwxMTYuMjksMTM5LjcxLDEyLjg1YTE2LjU2LDE2LjU2LDAsMCwwLTIzLjQyLDBMMTIuODUsMTE2LjI5YTE2LjU2LDE2LjU2LDAsMCwwLDAsMjMuNDJMMTE2LjI5LDI0My4xNWgwYTE2LjU2LDE2LjU2LDAsMCwwLDIzLjQyLDBMMjQzLjE1LDEzOS43MWExNi41NiwxNi41NiwwLDAsMCwwLTIzLjQyWm0tMTEuMzEsMTIuMUwxMjguMzksMjMxLjg0YS41Ni41NiwwLDAsMS0uNzgsMGgwTDI0LjE2LDEyOC4zOWEuNTYuNTYsMCwwLDEsMC0uNzhMMTI3LjYxLDI0LjE2QS41Mi41MiwwLDAsMSwxMjgsMjRhLjU4LjU4LDAsMCwxLC40LjE2TDIzMS44NCwxMjcuNjFhLjU2LjU2LDAsMCwxLDAsLjc4Wm0tNTguMTgtMTRhOCw4LDAsMCwxLDAsMTEuMzJsLTI0LDI0YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxNDguNjksMTI4SDExMmExNiwxNiwwLDAsMC0xNiwxNnY4YTgsOCwwLDAsMS0xNiwwdi04YTMyLDMyLDAsMCwxLDMyLTMyaDM2LjY5bC0xMC4zNS0xMC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMTUsMTE2LjI5LDEzOS43MSwxMi44NWExNi41NiwxNi41NiwwLDAsMC0yMy40MiwwTDEyLjg1LDExNi4yOWExNi41NiwxNi41NiwwLDAsMCwwLDIzLjQyTDExNi4yOSwyNDMuMTVoMGExNi41NiwxNi41NiwwLDAsMCwyMy40MiwwTDI0My4xNSwxMzkuNzFhMTYuNTYsMTYuNTYsMCwwLDAsMC0yMy40MlptLTY5LjQ5LDkuMzctMjQsMjRhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE0OC42OSwxMjhIMTEyYTE2LDE2LDAsMCwwLTE2LDE2djhhOCw4LDAsMCwxLTE2LDB2LThhMzIsMzIsMCwwLDEsMzItMzJoMzYuNjlsLTEwLjM1LTEwLjM0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMmwyNCwyNEE4LDgsMCwwLDEsMTczLjY2LDEyNS42NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNzQsMTE3LjcxLDEzOC4yOSwxNC4yNmExNC41NiwxNC41NiwwLDAsMC0yMC41OCwwTDE0LjI2LDExNy43MWExNC41NiwxNC41NiwwLDAsMCwwLDIwLjU4TDExNy43MSwyNDEuNzRoMGExNC41NiwxNC41NiwwLDAsMCwyMC41OCwwTDI0MS43NCwxMzguMjlhMTQuNTYsMTQuNTYsMCwwLDAsMC0yMC41OFptLTguNDksMTIuMUwxMjkuODEsMjMzLjI1YTIuNTYsMi41NiwwLDAsMS0zLjYyLDBoMEwyMi43NSwxMjkuODFhMi41NiwyLjU2LDAsMCwxLDAtMy42MkwxMjYuMTksMjIuNzVhMi41NiwyLjU2LDAsMCwxLDMuNjIsMEwyMzMuMjUsMTI2LjE5YTIuNTYsMi41NiwwLDAsMSwwLDMuNjJabS02MS0xNGE2LDYsMCwwLDEsMCw4LjQ4bC0yNCwyNGE2LDYsMCwwLDEtOC40OC04LjQ4TDE1My41MSwxMjZIMTEyYTE4LDE4LDAsMCwwLTE4LDE4djhhNiw2LDAsMCwxLTEyLDB2LThhMzAsMzAsMCwwLDEsMzAtMzBoNDEuNTFsLTEzLjc1LTEzLjc2YTYsNiwwLDAsMSw4LjQ4LTguNDhaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMTUsMTE2LjI5LDEzOS43MSwxMi44NWExNi41NiwxNi41NiwwLDAsMC0yMy40MiwwTDEyLjg1LDExNi4yOWExNi41NiwxNi41NiwwLDAsMCwwLDIzLjQyTDExNi4yOSwyNDMuMTVoMGExNi41NiwxNi41NiwwLDAsMCwyMy40MiwwTDI0My4xNSwxMzkuNzFhMTYuNTYsMTYuNTYsMCwwLDAsMC0yMy40MlptLTExLjMxLDEyLjFMMTI4LjQsMjMxLjg0YS41OC41OCwwLDAsMS0uOCwwaDBMMjQuMTYsMTI4LjM5YS41Ni41NiwwLDAsMSwwLS43OEwxMjcuNiwyNC4xNmEuNTguNTgsMCwwLDEsLjgsMEwyMzEuODQsMTI3LjYxYS41Ni41NiwwLDAsMSwwLC43OFptLTU4LjE4LTE0YTgsOCwwLDAsMSwwLDExLjMybC0yNCwyNGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTQ4LjY5LDEyOEgxMTJhMTYsMTYsMCwwLDAtMTYsMTZ2OGE4LDgsMCwwLDEtMTYsMHYtOGEzMiwzMiwwLDAsMSwzMi0zMmgzNi42OWwtMTAuMzUtMTAuMzRhOCw4LDAsMCwxLDExLjMyLTExLjMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuMzIsMTE5LjEyLDEzNi44OCwxNS42OGExMi41NSwxMi41NSwwLDAsMC0xNy43NiwwTDE1LjY4LDExOS4xMmExMi41NSwxMi41NSwwLDAsMCwwLDE3Ljc2TDExOS4xMiwyNDAuMzJoMGExMi41NSwxMi41NSwwLDAsMCwxNy43NiwwTDI0MC4zMiwxMzYuODhhMTIuNTUsMTIuNTUsMCwwLDAsMC0xNy43NlptLTUuNjYsMTIuMUwxMzEuMjIsMjM0LjY3YTQuNTYsNC41NiwwLDAsMS02LjQ0LDBoMEwyMS4zMywxMzEuMjJhNC41NSw0LjU1LDAsMCwxLDAtNi40NEwxMjQuNzgsMjEuMzNhNC41Niw0LjU2LDAsMCwxLDYuNDQsMEwyMzQuNjcsMTI0Ljc4YTQuNTUsNC41NSwwLDAsMSwwLDYuNDRabS02My44My0xNGE0LDQsMCwwLDEsMCw1LjY2bC0yNCwyNGE0LDQsMCwwLDEtNS42Ni01LjY2TDE1OC4zNCwxMjRIMTEyYTIwLDIwLDAsMCwwLTIwLDIwdjhhNCw0LDAsMCwxLTgsMHYtOGEyOCwyOCwwLDAsMSwyOC0yOGg0Ni4zNEwxNDEuMTcsOTguODNhNCw0LDAsMCwxLDUuNjYtNS42NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TrafficSign";
export { I as TrafficSign };
