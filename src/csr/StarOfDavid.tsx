/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/StarOfDavid";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuMjEsMTI4LDIzMSw3NkE4LDgsMCwwLDAsMjI0LDY0SDE2NC42NUwxMzUsMTJhOCw4LDAsMCwwLTEzLjksMEw5MS4zMyw2NEgzMmE4LDgsMCwwLDAtNi45NSwxMmwyOS43Miw1MkwyNS4wNSwxODBhOCw4LDAsMCwwLDcsMTJIOTEuMzNsMjkuNzIsNTJhOCw4LDAsMCwwLDEzLjksMGwyOS43LTUySDIyNEE4LDgsMCwwLDAsMjMxLDE4MFptOS00OEwxOTIsMTExLjg4LDE3My43OSw4MFptLTI3LjQyLDQ4LTI3LjQyLDQ4LTU0Ljc1LDBMNzMuMiwxMjhsMjcuNDItNDgsNTQuNzUsMFpNMTI4LDMyLjEyLDE0Ni4yMiw2NEgxMDkuNzdaTTQ1Ljc4LDgwSDgyLjE5TDY0LDExMS44OFptMCw5NS45Mkw2NCwxNDQuMTIsODIuMTksMTc2Wk0xMjgsMjIzLjg4LDEwOS43NywxOTJoMzYuNDVaTTE3My43OSwxNzYsMTkyLDE0NC4xMiwyMTAuMjEsMTc2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYuNjEsMTI4bDMwLjg2LTU0QTQsNCwwLDAsMCwyMjQsNjhIMTYyLjMzTDEzMS40NywxNGE0LDQsMCwwLDAtNi45NCwwTDkzLjY2LDY4SDMyYTQsNCwwLDAsMC0zLjQ3LDZsMzAuODUsNTRMMjguNTMsMTgyQTQsNCwwLDAsMCwzMiwxODhIOTMuNjZsMzAuODcsNTRhNCw0LDAsMCwwLDYuOTQsMGwzMC44Ni01NEgyMjRhNCw0LDAsMCwwLDMuNDctNlptMjAuNS01MkwxOTIsMTE5Ljk0LDE2Ni45LDc2Wm0tMjkuNzIsNTItMjkuNyw1Mkw5OC4zLDE4MCw2OC41OSwxMjgsOTguMyw3Nmw1OS4zOSwwWk0xMjgsMjQuMDZsMjUuMTIsNDRIMTAyLjg3Wk0zOC44OSw3Nkg4OS4wOEw2NCwxMTkuOTRabTAsMTAzLjkyTDY0LDEzNi4wNiw4OS4wOCwxODBabTg5LjExLDUyLTI1LjEzLTQ0aDUwLjI1Wk0xNjYuOSwxODAsMTkyLDEzNi4wNiwyMTcuMTEsMTgwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguOTEsMTI4bDMwLjMtNTNBNiw2LDAsMCwwLDIyNCw2NkgxNjMuNDlMMTMzLjIxLDEzYTYsNiwwLDAsMC0xMC40MiwwTDkyLjUsNjZIMzJhNiw2LDAsMCwwLTUuMjEsOWwzMC4yOCw1M0wyNi43OSwxODFBNiw2LDAsMCwwLDMyLDE5MEg5Mi41bDMwLjI5LDUzYTYsNiwwLDAsMCwxMC40MiwwbDMwLjI4LTUzSDIyNGE2LDYsMCwwLDAsNS4yMS05Wm0xNC43NS01MEwxOTIsMTE1LjkxLDE3MC4zNCw3OFptLTI4LjU3LDUwLTI4LjU2LDUwLTU3LjA3LDBMNzAuOSwxMjgsOTkuNDYsNzhsNTcuMDcsMFpNMTI4LDI4LjA5LDE0OS42Nyw2NkgxMDYuMzJaTTQyLjM0LDc4aDQzLjNMNjQsMTE1LjkxWm0wLDk5LjkyTDY0LDE0MC4wOSw4NS42NCwxNzhaTTEyOCwyMjcuOTEsMTA2LjMyLDE5MGg0My4zNVpNMTcwLjM0LDE3OCwxOTIsMTQwLjA5LDIxMy42NiwxNzhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuODIsMTI4bDI4LjYtNTBBMTIsMTIsMCwwLDAsMjI0LDYwSDE2N2wtMjguNTUtNTBBMTIsMTIsMCwwLDAsMTI4LDRoMGExMiwxMiwwLDAsMC0xMC40Miw2LjA1TDg5LDYwSDMyQTEyLDEyLDAsMCwwLDIxLjU4LDc4bDI4LjU4LDUwTDIxLjU4LDE3OEExMiwxMiwwLDAsMCwzMiwxOTZIODlsMjguNTcsNTBhMTIsMTIsMCwwLDAsMjAuODQsMEwxNjcsMTk2aDU3YTEyLDEyLDAsMCwwLDEwLjQyLTE3Ljk1Wm0tMi41LTQ0TDE5MiwxMDMuODEsMTgwLjY4LDg0Wm0tMjUuMTQsNDRMMTUzLDE3MmgtNTAuMUw3Ny44MSwxMjhsMjUuMTMtNDRIMTUzWk0xMjgsNDAuMTgsMTM5LjMzLDYwSDExNi42NlpNNTIuNjgsODRINzUuMjlMNjQsMTAzLjgyWm0wLDg3LjkyTDY0LDE1Mi4xOCw3NS4yOSwxNzJaTTEyOCwyMTUuODIsMTE2LjY2LDE5NmgyMi42N1pNMTgwLjY4LDE3MiwxOTIsMTUyLjE5LDIwMy4zMiwxNzJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuMjEsMTI4LDIzMSw3NkE4LDgsMCwwLDAsMjI0LDY0SDE2NC42NUwxMzUsMTJhOCw4LDAsMCwwLTEzLjksMEw5MS4zMyw2NEgzMmE4LDgsMCwwLDAtNi45NSwxMmwyOS43Miw1MkwyNS4wNSwxODBhOCw4LDAsMCwwLDcsMTJIOTEuMzNsMjkuNzIsNTJhOCw4LDAsMCwwLDEzLjksMGwyOS43LTUySDIyNEE4LDgsMCwwLDAsMjMxLDE4MFptLTE4LjQyLDAtMjcuNDIsNDgtNTQuNzUsMEw3My4yLDEyOGwyNy40Mi00OCw1NC43NSwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTI4bDMyLDU2SDE2MGwtMzIsNTZMOTYsMTg0SDMybDMyLTU2TDMyLDcySDk2bDMyLTU2LDMyLDU2aDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMS4yMSwxMjgsMjMxLDc2QTgsOCwwLDAsMCwyMjQsNjRIMTY0LjY1TDEzNSwxMmE4LDgsMCwwLDAtMTMuOSwwTDkxLjMzLDY0SDMyYTgsOCwwLDAsMC02Ljk1LDEybDI5LjcyLDUyTDI1LjA1LDE4MGE4LDgsMCwwLDAsNywxMkg5MS4zM2wyOS43Miw1MmE4LDgsMCwwLDAsMTMuOSwwbDI5LjctNTJIMjI0QTgsOCwwLDAsMCwyMzEsMTgwWm05LTQ4TDE5MiwxMTEuODgsMTczLjc5LDgwWm0tMjcuNDIsNDgtMjcuNDIsNDgtNTQuNzUsMEw3My4yLDEyOGwyNy40Mi00OCw1NC43NSwwWk0xMjgsMzIuMTIsMTQ2LjIyLDY0SDEwOS43N1pNNDUuNzgsODBIODIuMTlMNjQsMTExLjg4Wm0wLDk1LjkyTDY0LDE0NC4xMiw4Mi4xOSwxNzZaTTEyOCwyMjMuODgsMTA5Ljc3LDE5MmgzNi40NVpNMTczLjc5LDE3NiwxOTIsMTQ0LjEyLDIxMC4yMSwxNzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "StarOfDavid";
export { I as StarOfDavid };
