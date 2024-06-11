/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/VideoCamera";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEuNzcsNzNhOCw4LDAsMCwwLTguMjEuMzlMMjA4LDk3LjA1VjcyYTE2LDE2LDAsMCwwLTE2LTE2SDMyQTE2LDE2LDAsMCwwLDE2LDcyVjE4NGExNiwxNiwwLDAsMCwxNiwxNkgxOTJhMTYsMTYsMCwwLDAsMTYtMTZWMTU5bDM1LjU2LDIzLjcxQTgsOCwwLDAsMCwyNDgsMTg0YTgsOCwwLDAsMCw4LThWODBBOCw4LDAsMCwwLDI1MS43Nyw3M1pNMTkyLDE4NEgzMlY3MkgxOTJWMTg0Wm00OC0yMi45NS0zMi0yMS4zM1YxMTYuMjhMMjQwLDk1WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDkuODksNzYuNDdhNCw0LDAsMCwwLTQuMTEuMkwyMDQsMTA0LjUzVjcyYTEyLDEyLDAsMCwwLTEyLTEySDMyQTEyLDEyLDAsMCwwLDIwLDcyVjE4NGExMiwxMiwwLDAsMCwxMiwxMkgxOTJhMTIsMTIsMCwwLDAsMTItMTJWMTUxLjQ3bDQxLjc4LDI3Ljg2QTQsNCwwLDAsMCwyNTIsMTc2VjgwQTQsNCwwLDAsMCwyNDkuODksNzYuNDdaTTE5NiwxODRhNCw0LDAsMCwxLTQsNEgzMmE0LDQsMCwwLDEtNC00VjcyYTQsNCwwLDAsMSw0LTRIMTkyYTQsNCwwLDAsMSw0LDRabTQ4LTE1LjQ3LTQwLTI2LjY3VjExNC4xNGw0MC0yNi42N1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTAuODMsNzQuNzFhNiw2LDAsMCwwLTYuMTYuM0wyMDYsMTAwLjc5VjcyYTE0LDE0LDAsMCwwLTE0LTE0SDMyQTE0LDE0LDAsMCwwLDE4LDcyVjE4NGExNCwxNCwwLDAsMCwxNCwxNEgxOTJhMTQsMTQsMCwwLDAsMTQtMTRWMTU1LjIxTDI0NC42NywxODFhNiw2LDAsMCwwLDkuMzMtNVY4MEE2LDYsMCwwLDAsMjUwLjgzLDc0LjcxWk0xOTQsMTg0YTIsMiwwLDAsMS0yLDJIMzJhMiwyLDAsMCwxLTItMlY3MmEyLDIsMCwwLDEsMi0ySDE5MmEyLDIsMCwwLDEsMiwyWm00OC0xOS4yMS0zNi0yNFYxMTUuMjFsMzYtMjRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDkuNDUsNjkuMzFhMTIsMTIsMCwwLDAtMTIuNTEsMUwyMTIsODguNDNWNzJhMjAsMjAsMCwwLDAtMjAtMjBIMzJBMjAsMjAsMCwwLDAsMTIsNzJWMTg0YTIwLDIwLDAsMCwwLDIwLDIwSDE5MmEyMCwyMCwwLDAsMCwyMC0yMFYxNjcuNTdsMjQuOTQsMTguMTRBMTIsMTIsMCwwLDAsMjU2LDE3NlY4MEExMiwxMiwwLDAsMCwyNDkuNDUsNjkuMzFaTTE4OCwxODBIMzZWNzZIMTg4Wm00NC0yNy41Ny0yMC0xNC41NFYxMTguMTFsMjAtMTQuNTRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNzJWMTg0YTE2LDE2LDAsMCwxLTE2LDE2SDMyYTE2LDE2LDAsMCwxLTE2LTE2VjcyQTE2LDE2LDAsMCwxLDMyLDU2SDE3NkExNiwxNiwwLDAsMSwxOTIsNzJabTU4LC4yNWE4LjIzLDguMjMsMCwwLDAtNi42MywxLjIyTDIwOS43OCw5NS44NkE0LDQsMCwwLDAsMjA4LDk5LjE5djU3LjYyYTQsNCwwLDAsMCwxLjc4LDMuMzNsMzMuNzgsMjIuNTJhOCw4LDAsMCwwLDguNTguMTksOC4zMyw4LjMzLDAsMCwwLDMuODYtNy4xN1Y4MEE4LDgsMCwwLDAsMjUwLDcyLjI1WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzJWMTg0YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04SDE5MkE4LDgsMCwwLDEsMjAwLDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI1MS43Nyw3M2E4LDgsMCwwLDAtOC4yMS4zOUwyMDgsOTcuMDVWNzJhMTYsMTYsMCwwLDAtMTYtMTZIMzJBMTYsMTYsMCwwLDAsMTYsNzJWMTg0YTE2LDE2LDAsMCwwLDE2LDE2SDE5MmExNiwxNiwwLDAsMCwxNi0xNlYxNTlsMzUuNTYsMjMuNzFBOCw4LDAsMCwwLDI0OCwxODRhOCw4LDAsMCwwLDgtOFY4MEE4LDgsMCwwLDAsMjUxLjc3LDczWk0xOTIsMTg0SDMyVjcySDE5MlYxODRabTQ4LTIyLjk1LTMyLTIxLjMzVjExNi4yOEwyNDAsOTVaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "VideoCamera";
export { I as VideoCamera };
