/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Stethoscope";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTYwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDIyMCwxNjBabS00LjU1LDM5LjI5QTQ4LjA4LDQ4LjA4LDAsMCwxLDE2OCwyNDBIMTQ0YTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LTQ4VjE1MS40OUE2NCw2NCwwLDAsMSw0MCw4OFY0MGE4LDgsMCwwLDEsOC04SDcyYTgsOCwwLDAsMSwwLDE2SDU2Vjg4YTQ4LDQ4LDAsMCwwLDQ4LjY0LDQ4YzI2LjExLS4zNCw0Ny4zNi0yMi4yNSw0Ny4zNi00OC44M1Y0OEgxMzZhOCw4LDAsMCwxLDAtMTZoMjRhOCw4LDAsMCwxLDgsOFY4Ny4xN2MwLDMyLjg0LTI0LjUzLDYwLjI5LTU2LDY0LjMxVjE5MmEzMiwzMiwwLDAsMCwzMiwzMmgyNGEzMi4wNiwzMi4wNiwwLDAsMCwzMS4yMi0yNSw0MCw0MCwwLDEsMSwxNi4yMy4yN1pNMjMyLDE2MGEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCwyMzIsMTYwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTYwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDIxNiwxNjBabS00LjE3LDM1Ljc5QTQ0LjA2LDQ0LjA2LDAsMCwxLDE2OCwyMzZIMTQ0YTQ0LjA1LDQ0LjA1LDAsMCwxLTQ0LTQ0VjE0Ny44NUE2MCw2MCwwLDAsMSw0NCw4OFY0MGE0LDQsMCwwLDEsNC00SDcyYTQsNCwwLDAsMSwwLDhINTJWODhhNTIsNTIsMCwwLDAsNTIuNjksNTJDMTMzLDEzOS42MywxNTYsMTE1LjkzLDE1Niw4Ny4xN1Y0NEgxMzZhNCw0LDAsMCwxLDAtOGgyNGE0LDQsMCwwLDEsNCw0Vjg3LjE3YzAsMzItMjQuODQsNTguNTktNTYsNjAuNjlWMTkyYTM2LDM2LDAsMCwwLDM2LDM2aDI0YTM2LjA1LDM2LjA1LDAsMCwwLDM1LjgtMzIuMjUsMzYsMzYsMCwxLDEsOCwwWk0yMzYsMTYwYTI4LDI4LDAsMSwwLTI4LDI4QTI4LDI4LDAsMCwwLDIzNiwxNjBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTgsMTYwYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDIxOCwxNjBabS00LjM1LDM3LjU4QTQ2LjA1LDQ2LjA1LDAsMCwxLDE2OCwyMzhIMTQ0YTQ2LjA2LDQ2LjA2LDAsMCwxLTQ2LTQ2VjE0OS43MUE2Miw2MiwwLDAsMSw0Miw4OFY0MGE2LDYsMCwwLDEsNi02SDcyYTYsNiwwLDAsMSwwLDEySDU0Vjg4YTUwLDUwLDAsMCwwLDUwLDUwaC42N2MyNy4yLS4zNiw0OS4zMy0yMy4xNiw0OS4zMy01MC44M1Y0NkgxMzZhNiw2LDAsMCwxLDAtMTJoMjRhNiw2LDAsMCwxLDYsNlY4Ny4xN2MwLDMyLjQzLTI0LjY4LDU5LjQ0LTU2LDYyLjUyVjE5MmEzNCwzNCwwLDAsMCwzNCwzNGgyNGEzNC4wNSwzNC4wNSwwLDAsMCwzMy41Ni0yOC41NiwzOCwzOCwwLDEsMSwxMi4wOS4xNFpNMjM0LDE2MGEyNiwyNiwwLDEsMC0yNiwyNkEyNiwyNiwwLDAsMCwyMzQsMTYwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTYwYTQwLDQwLDAsMSwwLTUyLjY0LDM3Ljk0QTI4LDI4LDAsMCwxLDE2OCwyMjBIMTQ0YTI4LDI4LDAsMCwxLTI4LTI4VjE1NC45YzMxLjczLTUuNzgsNTYtMzQuMDksNTYtNjcuNzNWNDBhMTIsMTIsMCwwLDAtMTItMTJIMTM2YTEyLDEyLDAsMCwwLDAsMjRoMTJWODcuMTdjMCwyNC40LTE5LjQ3LDQ0LjUyLTQzLjQxLDQ0LjgzQTQ0LDQ0LDAsMCwxLDYwLDg4VjUySDcyYTEyLDEyLDAsMCwwLDAtMjRINDhBMTIsMTIsMCwwLDAsMzYsNDBWODhhNjgsNjgsMCwwLDAsNTYsNjYuOTNWMTkyYTUyLjA2LDUyLjA2LDAsMCwwLDUyLDUyaDI0YTUyLjA2LDUyLjA2LDAsMCwwLDUxLjYxLTQ1LjcyQTQwLjA4LDQwLjA4LDAsMCwwLDI0OCwxNjBabS00MCwxNmExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwyMDgsMTc2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTYwYTMyLDMyLDAsMSwwLTM5LjkzLDMxLDgsOCwwLDAsMC0uMDcsMSwzMiwzMiwwLDAsMS0zMiwzMkgxNDRhMzIsMzIsMCwwLDEtMzItMzJWMTUxLjQ4YzMxLjQ3LTQsNTYtMzEuNDcsNTYtNjQuMzFWNDBhOCw4LDAsMCwwLTgtOEgxMzZhOCw4LDAsMCwwLDAsMTZoMTZWODcuMTdjMCwyNi41OC0yMS4yNSw0OC40OS00Ny4zNiw0OC44M0E0OCw0OCwwLDAsMSw1Niw4OFY0OEg3MmE4LDgsMCwwLDAsMC0xNkg0OGE4LDgsMCwwLDAtOCw4Vjg4YTY0LDY0LDAsMCwwLDU2LDYzLjQ5VjE5MmE0OC4wNSw0OC4wNSwwLDAsMCw0OCw0OGgyNGE0OC4wNSw0OC4wNSwwLDAsMCw0OC00OCw4LDgsMCwwLDAtLjA3LTFBMzIsMzIsMCwwLDAsMjQwLDE2MFptLTMyLDhhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsMjA4LDE2OFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTYwYTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDI0MCwxNjBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjIwLDE2MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwyMjAsMTYwWm0tNC41NSwzOS4yOUE0OC4wOCw0OC4wOCwwLDAsMSwxNjgsMjQwSDE0NGE0OC4wNSw0OC4wNSwwLDAsMS00OC00OFYxNTEuNDlBNjQsNjQsMCwwLDEsNDAsODhWNDBhOCw4LDAsMCwxLDgtOEg3MmE4LDgsMCwwLDEsMCwxNkg1NlY4OGE0OCw0OCwwLDAsMCw0OC42NCw0OGMyNi4xMS0uMzQsNDcuMzYtMjIuMjUsNDcuMzYtNDguODNWNDhIMTM2YTgsOCwwLDAsMSwwLTE2aDI0YTgsOCwwLDAsMSw4LDhWODcuMTdjMCwzMi44NC0yNC41Myw2MC4yOS01Niw2NC4zMVYxOTJhMzIsMzIsMCwwLDAsMzIsMzJoMjRhMzIuMDYsMzIuMDYsMCwwLDAsMzEuMjItMjUsNDAsNDAsMCwxLDEsMTYuMjMuMjdaTTIzMiwxNjBhMjQsMjQsMCwxLDAtMjQsMjRBMjQsMjQsMCwwLDAsMjMyLDE2MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Stethoscope";
export { I as Stethoscope };
