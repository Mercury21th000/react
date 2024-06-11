/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HouseSimple";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMzEsMTA4LjY4bC04MC04MGExNiwxNiwwLDAsMC0yMi42MiwwbC04MCw4MEExNS44NywxNS44NywwLDAsMCwzMiwxMjB2OTZhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFYxMjBBMTUuODcsMTUuODcsMCwwLDAsMjE5LjMxLDEwOC42OFpNMjA4LDIwOEg0OFYxMjBsODAtODAsODAsODBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksMTExLjUxbC04MC04MGExMiwxMiwwLDAsMC0xNywwbC04MCw4MEExMiwxMiwwLDAsMCwzNiwxMjB2OTZhNCw0LDAsMCwwLDQsNEgyMTZhNCw0LDAsMCwwLDQtNFYxMjBBMTIsMTIsMCwwLDAsMjE2LjQ5LDExMS41MVpNMjEyLDIxMkg0NFYxMjBhNCw0LDAsMCwxLDEuMTctMi44M2w4MC04MGE0LDQsMCwwLDEsNS42NiwwbDgwLDgwQTQsNCwwLDAsMSwyMTIsMTIwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcuOSwxMTAuMWwtODAtODBhMTQsMTQsMCwwLDAtMTkuOCwwbC04MCw4MEExMy45MiwxMy45MiwwLDAsMCwzNCwxMjB2OTZhNiw2LDAsMCwwLDYsNkgyMTZhNiw2LDAsMCwwLDYtNlYxMjBBMTMuOTIsMTMuOTIsMCwwLDAsMjE3LjksMTEwLjFaTTIxMCwyMTBINDZWMTIwYTIsMiwwLDAsMSwuNTgtMS40Mmw4MC04MGEyLDIsMCwwLDEsMi44NCwwbDgwLDgwQTIsMiwwLDAsMSwyMTAsMTIwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMTQsMTA1Ljg1bC04MC04MGEyMCwyMCwwLDAsMC0yOC4yOCwwbC04MCw4MEExOS44NiwxOS44NiwwLDAsMCwyOCwxMjB2OTZhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjEyMEExOS44NiwxOS44NiwwLDAsMCwyMjIuMTQsMTA1Ljg1Wk0yMDQsMjA0SDUyVjEyMS42NWw3Ni03Niw3Niw3NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTIwdjk2YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFYxMjBhMTUuODcsMTUuODcsMCwwLDEsNC42OS0xMS4zMmw4MC04MGExNiwxNiwwLDAsMSwyMi42MiwwbDgwLDgwQTE1Ljg3LDE1Ljg3LDAsMCwxLDIyNCwxMjBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTIwdjk2SDQwVjEyMGE4LDgsMCwwLDEsMi4zNC01LjY2bDgwLTgwYTgsOCwwLDAsMSwxMS4zMiwwbDgwLDgwQTgsOCwwLDAsMSwyMTYsMTIwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxOS4zMSwxMDguNjhsLTgwLTgwYTE2LDE2LDAsMCwwLTIyLjYyLDBsLTgwLDgwQTE1Ljg3LDE1Ljg3LDAsMCwwLDMyLDEyMHY5NmE4LDgsMCwwLDAsOCw4SDIxNmE4LDgsMCwwLDAsOC04VjEyMEExNS44NywxNS44NywwLDAsMCwyMTkuMzEsMTA4LjY4Wk0yMDgsMjA4SDQ4VjEyMGw4MC04MCw4MCw4MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HouseSimple";
export { I as HouseSimple };
