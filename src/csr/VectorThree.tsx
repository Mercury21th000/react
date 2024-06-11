/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/VectorThree";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTQxLjY2bC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjEyLjY5LDE0NEgxMjMuMzFsLTU2LDU2SDk2YTgsOCwwLDAsMSwwLDE2SDQ4YTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSwxNiwwdjI4LjY5bDU2LTU2VjQzLjMxTDkzLjY2LDYxLjY2QTgsOCwwLDAsMSw4Mi4zNCw1MC4zNGwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMGwzMiwzMmE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDQzLjMxVjEyOGg4NC42OWwtMTguMzUtMTguMzRhOCw4LDAsMCwxLDExLjMyLTExLjMybDMyLDMyQTgsOCwwLDAsMSwyMzcuNjYsMTQxLjY2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsMTM4LjgzbC0zMiwzMmE0LDQsMCwwLDEtNS42Ni01LjY2TDIyMi4zNCwxNDBIMTIxLjY2bC02NCw2NEg5NmE0LDQsMCwwLDEsMCw4SDQ4YTQsNCwwLDAsMS00LTRWMTYwYTQsNCwwLDAsMSw4LDB2MzguMzRsNjQtNjRWMzMuNjZMOTAuODMsNTguODNhNCw0LDAsMCwxLTUuNjYtNS42NmwzMi0zMmE0LDQsMCwwLDEsNS42NiwwbDMyLDMyYTQsNCwwLDAsMS01LjY2LDUuNjZMMTI0LDMzLjY2VjEzMmg5OC4zNGwtMjUuMTctMjUuMTdhNCw0LDAsMCwxLDUuNjYtNS42NmwzMiwzMkE0LDQsMCwwLDEsMjM0LjgzLDEzOC44M1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsMTQwLjI0bC0zMiwzMmE2LDYsMCwwLDEtOC40OC04LjQ4TDIxNy41MSwxNDJoLTk1bC02MCw2MEg5NmE2LDYsMCwwLDEsMCwxMkg0OGE2LDYsMCwwLDEtNi02VjE2MGE2LDYsMCwwLDEsMTIsMHYzMy41MWw2MC02MHYtOTVMOTIuMjQsNjAuMjRhNiw2LDAsMCwxLTguNDgtOC40OGwzMi0zMmE2LDYsMCwwLDEsOC40OCwwbDMyLDMyYTYsNiwwLDEsMS04LjQ4LDguNDhMMTI2LDM4LjQ5VjEzMGg5MS41MWwtMjEuNzUtMjEuNzZhNiw2LDAsMCwxLDguNDgtOC40OGwzMiwzMkE2LDYsMCwwLDEsMjM2LjI0LDE0MC4yNFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTQ0LjQ5bC0zMiwzMmExMiwxMiwwLDAsMS0xNy0xN0wyMDMsMTQ4SDEyNUw3NywxOTZIOTZhMTIsMTIsMCwwLDEsMCwyNEg0OGExMiwxMiwwLDAsMS0xMi0xMlYxNjBhMTIsMTIsMCwwLDEsMjQsMHYxOWw0OC00OFY1M0w5Ni40OSw2NC40OWExMiwxMiwwLDEsMS0xNy0xN2wzMi0zMmExMiwxMiwwLDAsMSwxNywwbDMyLDMyYTEyLDEyLDAsMCwxLTE3LDE3TDEzMiw1M3Y3MWg3MWwtMTEuNTItMTEuNTFhMTIsMTIsMCwwLDEsMTctMTdsMzIsMzJBMTIsMTIsMCwwLDEsMjQwLjQ5LDE0NC40OVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTQxLjY2bC0zMiwzMkE4LDgsMCwwLDEsMTkyLDE2OFYxNDRIMTIzLjMxbC00MCw0MCwxOC4zNSwxOC4zNEE4LDgsMCwwLDEsOTYsMjE2SDQ4YTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSwxMy42Ni01LjY2TDcyLDE3Mi42OWw0MC00MFY2NEg4OGE4LDgsMCwwLDEtNS42Ni0xMy42NmwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMGwzMiwzMkE4LDgsMCwwLDEsMTUyLDY0SDEyOHY2NGg2NFYxMDRhOCw4LDAsMCwxLDEzLjY2LTUuNjZsMzIsMzJBOCw4LDAsMCwxLDIzNy42NiwxNDEuNjZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDB2OTZsLTY3LjMxLDY3LjMxQTE2LDE2LDAsMCwxLDE1My4zNywyMDhINDhWMTAyLjYzYTE2LDE2LDAsMCwxLDQuNjktMTEuMzJMMTIwLDI0aDk2QTE2LDE2LDAsMCwxLDIzMiw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTQxLjY2bC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjEyLjY5LDE0NEgxMjMuMzFsLTU2LDU2SDk2YTgsOCwwLDAsMSwwLDE2SDQ4YTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSwxNiwwdjI4LjY5bDU2LTU2VjQzLjMxTDkzLjY2LDYxLjY2QTgsOCwwLDAsMSw4Mi4zNCw1MC4zNGwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMGwzMiwzMmE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDQzLjMxVjEyOGg4NC42OWwtMTguMzUtMTguMzRhOCw4LDAsMCwxLDExLjMyLTExLjMybDMyLDMyQTgsOCwwLDAsMSwyMzcuNjYsMTQxLjY2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "VectorThree";
export { I as VectorThree };
