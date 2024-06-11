/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Signpost";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDguOTIsMTA0LDIxNS4zLDY2LjYyQTIwLDIwLDAsMCwwLDIwMC40NCw2MEgxNDBWMzJhMTIsMTIsMCwwLDAtMjQsMFY2MEg0MEEyMCwyMCwwLDAsMCwyMCw4MHY2NGEyMCwyMCwwLDAsMCwyMCwyMGg3NnY2MGExMiwxMiwwLDAsMCwyNCwwVjE2NGg2MC40NGEyMCwyMCwwLDAsMCwxNC44Ni02LjYyTDI0OC45MiwxMjBBMTIsMTIsMCwwLDAsMjQ4LjkyLDEwNFptLTUwLjI2LDM2SDQ0Vjg0SDE5OC42NmwyNS4yLDI4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTEybC0zMy42MiwzNy4zNWE4LDgsMCwwLDEtNS45NCwyLjY1SDQwYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDAuNDRhOCw4LDAsMCwxLDUuOTQsMi42NVoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDYsMTA2LjY1LDIxMi4zMyw2OS4zQTE2LDE2LDAsMCwwLDIwMC40NCw2NEgxMzZWMzJhOCw4LDAsMCwwLTE2LDBWNjRINDBBMTYsMTYsMCwwLDAsMjQsODB2NjRhMTYsMTYsMCwwLDAsMTYsMTZoODB2NjRhOCw4LDAsMCwwLDE2LDBWMTYwaDY0LjQ0YTE2LDE2LDAsMCwwLDExLjg5LTUuM0wyNDYsMTE3LjM1QTgsOCwwLDAsMCwyNDYsMTA2LjY1Wk0yMDAuNDQsMTQ0SDQwVjgwSDIwMC40NGwyOC44LDMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTE3LjM1LDIxMi4zMywxNTQuN2ExNiwxNiwwLDAsMS0xMS44OSw1LjNIMTM2djY0YTgsOCwwLDAsMS0xNiwwVjE2MEg0MGExNiwxNiwwLDAsMS0xNi0xNlY4MEExNiwxNiwwLDAsMSw0MCw2NGg4MFYzMmE4LDgsMCwwLDEsMTYsMFY2NGg2NC40NGExNiwxNiwwLDAsMSwxMS44OSw1LjNMMjQ2LDEwNi42NUE4LDgsMCwwLDEsMjQ2LDExNy4zNVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQuNDYsMTA4LDIxMC44NCw3MC42M0ExNCwxNCwwLDAsMCwyMDAuNDQsNjZIMTM0VjMyYTYsNiwwLDAsMC0xMiwwVjY2SDQwQTE0LDE0LDAsMCwwLDI2LDgwdjY0YTE0LDE0LDAsMCwwLDE0LDE0aDgydjY2YTYsNiwwLDAsMCwxMiwwVjE1OGg2Ni40NGExNCwxNCwwLDAsMCwxMC40LTQuNjNMMjQ0LjQ2LDExNkE2LDYsMCwwLDAsMjQ0LjQ2LDEwOFptLTQyLjU0LDM3LjM1YTIsMiwwLDAsMS0xLjQ4LjY2SDQwYTIsMiwwLDAsMS0yLTJWODBhMiwyLDAsMCwxLDItMkgyMDAuNDRhMiwyLDAsMCwxLDEuNDguNjZsMzAsMzMuMzRaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTA2LjY1LDIxMi4zMyw2OS4zQTE2LDE2LDAsMCwwLDIwMC40NCw2NEgxMzZWMzJhOCw4LDAsMCwwLTE2LDBWNjRINDBBMTYsMTYsMCwwLDAsMjQsODB2NjRhMTYsMTYsMCwwLDAsMTYsMTZoODB2NjRhOCw4LDAsMCwwLDE2LDBWMTYwaDY0LjQ0YTE2LDE2LDAsMCwwLDExLjg5LTUuM0wyNDYsMTE3LjM1QTgsOCwwLDAsMCwyNDYsMTA2LjY1Wk0yMDAuNDQsMTQ0SDQwVjgwSDIwMC40NGwyOC44LDMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMsMTA5LjMyLDIwOS4zNiw3MmExMi4wNiwxMi4wNiwwLDAsMC04LjkyLTRIMTMyVjMyYTQsNCwwLDAsMC04LDBWNjhINDBBMTIsMTIsMCwwLDAsMjgsODB2NjRhMTIsMTIsMCwwLDAsMTIsMTJoODR2NjhhNCw0LDAsMCwwLDgsMFYxNTZoNjguNDRhMTIuMDYsMTIuMDYsMCwwLDAsOC45Mi00TDI0MywxMTQuNjhBNCw0LDAsMCwwLDI0MywxMDkuMzJabS0zOS41NiwzNy4zNmE0LDQsMCwwLDEtMywxLjMySDQwYTQsNCwwLDAsMS00LTRWODBhNCw0LDAsMCwxLDQtNEgyMDAuNDRhNCw0LDAsMCwxLDMsMS4zMkwyMzQuNjIsMTEyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Signpost";
export { I as Signpost };
