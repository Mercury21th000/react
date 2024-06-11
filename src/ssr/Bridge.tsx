/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Bridge";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYwSDIwMFYxMDEuMzRhNzEuODksNzEuODksMCwwLDAsMjksMjEuNDIsOCw4LDAsMCwwLDYtMTQuODNBNTUuNzgsNTUuNzgsMCwwLDEsMjAwLDU2YTgsOCwwLDAsMC0xNiwwQTU2LDU2LDAsMCwxLDcyLDU2YTgsOCwwLDAsMC0xNiwwLDU1Ljc4LDU1Ljc4LDAsMCwxLTM1LDUxLjkzLDgsOCwwLDAsMCw2LDE0LjgzLDcxLjg5LDcxLjg5LDAsMCwwLDI5LTIxLjQyVjE2MEgyNGE4LDgsMCwwLDAsMCwxNkg1NnYyNGE4LDgsMCwwLDAsMTYsMFYxNzZIMTg0djI0YTgsOCwwLDAsMCwxNiwwVjE3NmgzMmE4LDgsMCwwLDAsMC0xNlptLTg4LTMzLjhWMTYwSDExMlYxMjYuMmE3Miw3MiwwLDAsMCwzMiwwWm0tNzItMjVhNzIuNDcsNzIuNDcsMCwwLDAsMjQsMTkuMjdWMTYwSDcyWk0xNjAsMTYwVjEyMC40OGE3Mi40Nyw3Mi40NywwLDAsMCwyNC0xOS4yN1YxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTY0SDE5NlY4OC4wOWE2Ny44MSw2Ny44MSwwLDAsMCwzNC41LDMxLDQsNCwwLDEsMCwzLTcuNDJBNTkuNzcsNTkuNzcsMCwwLDEsMTk2LDU2YTQsNCwwLDAsMC04LDBBNjAsNjAsMCwwLDEsNjgsNTZhNCw0LDAsMCwwLTgsMCw1OS43Nyw1OS43NywwLDAsMS0zNy41LDU1LjY0LDQsNCwwLDAsMCwzLDcuNDIsNjcuODEsNjcuODEsMCwwLDAsMzQuNS0zMVYxNjRIMjRhNCw0LDAsMCwwLDAsOEg2MHYyOGE0LDQsMCwwLDAsOCwwVjE3MkgxODh2MjhhNCw0LDAsMCwwLDgsMFYxNzJoMzZhNCw0LDAsMCwwLDAtOFptLTg0LTQzdjQzSDEwOFYxMjFhNjgsNjgsMCwwLDAsNDAsMFpNNjgsODhhNjguNDMsNjguNDMsMCwwLDAsMzIsMzB2NDZINjhabTg4LDc2VjExOGE2OC40Myw2OC40MywwLDAsMCwzMi0zMHY3NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYySDE5OFY5NS4yOGE2OS44MSw2OS44MSwwLDAsMCwzMS43NSwyNS42Myw2LDYsMCwxLDAsNC41LTExLjEyQTU3LjgsNTcuOCwwLDAsMSwxOTgsNTZhNiw2LDAsMCwwLTEyLDBBNTgsNTgsMCwwLDEsNzAsNTZhNiw2LDAsMCwwLTEyLDAsNTcuOCw1Ny44LDAsMCwxLTM2LjI1LDUzLjc5LDYsNiwwLDEsMCw0LjUsMTEuMTJBNjkuODEsNjkuODEsMCwwLDAsNTgsOTUuMjhWMTYySDI0YTYsNiwwLDAsMCwwLDEySDU4djI2YTYsNiwwLDAsMCwxMiwwVjE3NEgxODZ2MjZhNiw2LDAsMCwwLDEyLDBWMTc0aDM0YTYsNiwwLDAsMCwwLTEyWm0tODYtMzguMzVWMTYySDExMFYxMjMuNjVhNzAuMTEsNzAuMTEsMCwwLDAsMzYsMFpNNzAsOTUuMTVhNzAuNDksNzAuNDksMCwwLDAsMjgsMjQuMDlWMTYySDcwWk0xNTgsMTYyVjExOS4yNGE3MC40OSw3MC40OSwwLDAsMCwyOC0yNC4wOVYxNjJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTU2SDIwNFYxMTEuNDlhNzYuMzksNzYuMzksMCwwLDAsMjMuNDksMTUsMTIsMTIsMCwwLDAsOS0yMi4yNUE1MS44MSw1MS44MSwwLDAsMSwyMDQsNTZhMTIsMTIsMCwwLDAtMjQsMEE1Miw1MiwwLDAsMSw3Niw1NmExMiwxMiwwLDAsMC0yNCwwLDUxLjgxLDUxLjgxLDAsMCwxLTMyLjUsNDguMjIsMTIsMTIsMCwxLDAsOSwyMi4yNSw3Ni4zOSw3Ni4zOSwwLDAsMCwyMy40OS0xNVYxNTZIMjRhMTIsMTIsMCwwLDAsMCwyNEg1MnYyMGExMiwxMiwwLDAsMCwyNCwwVjE4MEgxODB2MjBhMTIsMTIsMCwwLDAsMjQsMFYxODBoMjhhMTIsMTIsMCwwLDAsMC0yNFptLTkyLTI0Ljk1VjE1NkgxMTZWMTMxLjA1YTc2LjI2LDc2LjI2LDAsMCwwLDI0LDBaTTc2LDExMS4zOGE3Ni40NCw3Ni40NCwwLDAsMCwxNiwxMS41M1YxNTZINzZaTTE2NCwxNTZWMTIyLjkxYTc2LjQ0LDc2LjQ0LDAsMCwwLDE2LTExLjUzVjE1NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYwaC04VjEyMC41YzEuNjMuODEsMy4yOSwxLjU3LDUsMi4yNmE4LDgsMCwwLDAsNi0xNC44M0E1NS43OCw1NS43OCwwLDAsMSwyMDAsNTZhOCw4LDAsMCwwLTE2LDBBNTYsNTYsMCwwLDEsNzIsNTZhOCw4LDAsMCwwLTE2LDAsNTUuNzgsNTUuNzgsMCwwLDEtMzUsNTEuOTMsOCw4LDAsMCwwLDYsMTQuODNjMS43MS0uNjksMy4zNy0xLjQ1LDUtMi4yNlYxNjBIMjQuNmMtNi4zMSwwLTguNiw0Ljc4LTguNiw4YTgsOCwwLDAsMCw4LDhINTZ2MjRhOCw4LDAsMCwwLDE2LDBWMTc2SDE4NHYyNGE4LDgsMCwwLDAsMTYsMFYxNzZoMzJhOCw4LDAsMCwwLDAtMTZaTTcyLDE1MmE4LDgsMCwwLDEtMTYsMFYxMDQuMTJhOCw4LDAsMCwxLDE2LDBabTQwLDBhOCw4LDAsMCwxLTE2LDBWMTMyLjMyYTgsOCwwLDAsMSwxNiwwWm00OCwwYTgsOCwwLDAsMS0xNiwwVjEzMi4zMmE4LDgsMCwwLDEsMTYsMFptNDAsMGE4LDgsMCwwLDEtMTYsMFYxMDQuMTJhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTY4SDI0VjExNS4zNUE2NCw2NCwwLDAsMCw2NCw1NmE2NCw2NCwwLDAsMCwxMjgsMCw2NCw2NCwwLDAsMCw0MCw1OS4zNVoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsMTYwSDIwMFYxMDEuMzRhNzEuODksNzEuODksMCwwLDAsMjksMjEuNDIsOCw4LDAsMCwwLDYtMTQuODNBNTUuNzgsNTUuNzgsMCwwLDEsMjAwLDU2YTgsOCwwLDAsMC0xNiwwQTU2LDU2LDAsMCwxLDcyLDU2YTgsOCwwLDAsMC0xNiwwLDU1Ljc4LDU1Ljc4LDAsMCwxLTM1LDUxLjkzLDgsOCwwLDAsMCw2LDE0LjgzLDcxLjg5LDcxLjg5LDAsMCwwLDI5LTIxLjQyVjE2MEgyNGE4LDgsMCwwLDAsMCwxNkg1NnYyNGE4LDgsMCwwLDAsMTYsMFYxNzZIMTg0djI0YTgsOCwwLDAsMCwxNiwwVjE3NmgzMmE4LDgsMCwwLDAsMC0xNlptLTg4LTMzLjhWMTYwSDExMlYxMjYuMmE3Miw3MiwwLDAsMCwzMiwwWm0tNzItMjVhNzIuNDcsNzIuNDcsMCwwLDAsMjQsMTkuMjdWMTYwSDcyWk0xNjAsMTYwVjEyMC40OGE3Mi40Nyw3Mi40NywwLDAsMCwyNC0xOS4yN1YxNjBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Bridge";
export { I as Bridge };
