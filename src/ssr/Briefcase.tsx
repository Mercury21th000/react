/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Briefcase";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZIMTc2VjQ4YTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0OHY4SDQwQTE2LDE2LDAsMCwwLDI0LDcyVjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBMTYsMTYsMCwwLDAsMjE2LDU2Wk05Niw0OGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSw4LDh2OEg5NlpNMjE2LDcydjQxLjYxQTE4NCwxODQsMCwwLDEsMTI4LDEzNmExODQuMDcsMTg0LjA3LDAsMCwxLTg4LTIyLjM4VjcyWm0wLDEyOEg0MFYxMzEuNjRBMjAwLjE5LDIwMC4xOSwwLDAsMCwxMjgsMTUyYTIwMC4yNSwyMDAuMjUsMCwwLDAsODgtMjAuMzdWMjAwWk0xMDQsMTEyYTgsOCwwLDAsMSw4LThoMzJhOCw4LDAsMCwxLDAsMTZIMTEyQTgsOCwwLDAsMSwxMDQsMTEyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsMTEyYTQsNCwwLDAsMSw0LTRoMzJhNCw0LDAsMCwxLDAsOEgxMTJBNCw0LDAsMCwxLDEwOCwxMTJaTTIyOCw3MlYyMDBhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEtMTItMTJWNzJBMTIsMTIsMCwwLDEsNDAsNjBIODRWNDhhMjAsMjAsMCwwLDEsMjAtMjBoNDhhMjAsMjAsMCwwLDEsMjAsMjBWNjBoNDRBMTIsMTIsMCwwLDEsMjI4LDcyWk05Miw2MGg3MlY0OGExMiwxMiwwLDAsMC0xMi0xMkgxMDRBMTIsMTIsMCwwLDAsOTIsNDhaTTM2LDcydjQ0YTE4OCwxODgsMCwwLDAsOTIsMjQsMTg4LDE4OCwwLDAsMCw5Mi0yNFY3MmE0LDQsMCwwLDAtNC00SDQwQTQsNCwwLDAsMCwzNiw3MlpNMjIwLDIwMFYxMjUuMUExOTYuMDYsMTk2LjA2LDAsMCwxLDEyOCwxNDhhMTk2LDE5NiwwLDAsMS05Mi0yMi45VjIwMGE0LDQsMCwwLDAsNCw0SDIxNkE0LDQsMCwwLDAsMjIwLDIwMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDYsMTEyYTYsNiwwLDAsMSw2LTZoMzJhNiw2LDAsMCwxLDAsMTJIMTEyQTYsNiwwLDAsMSwxMDYsMTEyWk0yMzAsNzJWMjAwYTE0LDE0LDAsMCwxLTE0LDE0SDQwYTE0LDE0LDAsMCwxLTE0LTE0VjcyQTE0LDE0LDAsMCwxLDQwLDU4SDgyVjQ4YTIyLDIyLDAsMCwxLDIyLTIyaDQ4YTIyLDIyLDAsMCwxLDIyLDIyVjU4aDQyQTE0LDE0LDAsMCwxLDIzMCw3MlpNOTQsNThoNjhWNDhhMTAsMTAsMCwwLDAtMTAtMTBIMTA0QTEwLDEwLDAsMCwwLDk0LDQ4Wk0zOCw3MnY0Mi43OUExODYsMTg2LDAsMCwwLDEyOCwxMzhhMTg1LjkxLDE4NS45MSwwLDAsMCw5MC0yMy4yMlY3MmEyLDIsMCwwLDAtMi0ySDQwQTIsMiwwLDAsMCwzOCw3MlpNMjE4LDIwMFYxMjguMzdBMTk4LjEyLDE5OC4xMiwwLDAsMSwxMjgsMTUwYTE5OC4wNSwxOTguMDUsMCwwLDEtOTAtMjEuNjJWMjAwYTIsMiwwLDAsMCwyLDJIMjE2QTIsMiwwLDAsMCwyMTgsMjAwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTAwYTEyLDEyLDAsMCwxLDEyLTEyaDMyYTEyLDEyLDAsMCwxLDAsMjRIMTEyQTEyLDEyLDAsMCwxLDEwMCwxMDBaTTIzNiw2OFYxOTZhMjAsMjAsMCwwLDEtMjAsMjBINDBhMjAsMjAsMCwwLDEtMjAtMjBWNjhBMjAsMjAsMCwwLDEsNDAsNDhINzZWNDBhMjgsMjgsMCwwLDEsMjgtMjhoNDhhMjgsMjgsMCwwLDEsMjgsMjh2OGgzNkEyMCwyMCwwLDAsMSwyMzYsNjhaTTEwMCw0OGg1NlY0MGE0LDQsMCwwLDAtNC00SDEwNGE0LDQsMCwwLDAtNCw0Wk00NCw3MnYzNS4yM0ExODAuMDYsMTgwLjA2LDAsMCwwLDEyOCwxMjhhMTgwLDE4MCwwLDAsMCw4NC0yMC43OFY3MlpNMjEyLDE5MlYxMzMuOTRBMjA0LjI3LDIwNC4yNywwLDAsMSwxMjgsMTUyYTIwNC4yMSwyMDQuMjEsMCwwLDEtODQtMTguMDZWMTkyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTEyYTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwxNTIsMTEyWm04MC00MFYyMDBhMTYsMTYsMCwwLDEtMTYsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWNzJBMTYsMTYsMCwwLDEsNDAsNTZIODBWNDhhMjQsMjQsMCwwLDEsMjQtMjRoNDhhMjQsMjQsMCwwLDEsMjQsMjR2OGg0MEExNiwxNiwwLDAsMSwyMzIsNzJaTTk2LDU2aDY0VjQ4YTgsOCwwLDAsMC04LThIMTA0YTgsOCwwLDAsMC04LDhabTEyMCw1Ny42MVY3Mkg0MHY0MS42MUExODQsMTg0LDAsMCwwLDEyOCwxMzYsMTg0LDE4NCwwLDAsMCwyMTYsMTEzLjYxWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTE4LjMxVjIwMGE4LDgsMCwwLDEtOCw4SDQwYTgsOCwwLDAsMS04LThWMTE4LjMxaDBBMTkxLjE0LDE5MS4xNCwwLDAsMCwxMjgsMTQ0LDE5MS4wOCwxOTEuMDgsMCwwLDAsMjI0LDExOC4zMVoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMDQsMTEyYTgsOCwwLDAsMSw4LThoMzJhOCw4LDAsMCwxLDAsMTZIMTEyQTgsOCwwLDAsMSwxMDQsMTEyWk0yMzIsNzJWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjcyQTE2LDE2LDAsMCwxLDQwLDU2SDgwVjQ4YTI0LDI0LDAsMCwxLDI0LTI0aDQ4YTI0LDI0LDAsMCwxLDI0LDI0djhoNDBBMTYsMTYsMCwwLDEsMjMyLDcyWk05Niw1Nmg2NFY0OGE4LDgsMCwwLDAtOC04SDEwNGE4LDgsMCwwLDAtOCw4Wk00MCw3MnY0MS42MkExODQuMDcsMTg0LjA3LDAsMCwwLDEyOCwxMzZhMTg0LDE4NCwwLDAsMCw4OC0yMi4zOVY3MlpNMjE2LDIwMFYxMzEuNjNBMjAwLjI1LDIwMC4yNSwwLDAsMSwxMjgsMTUyYTIwMC4xOSwyMDAuMTksMCwwLDEtODgtMjAuMzZWMjAwSDIxNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Briefcase";
export { I as Briefcase };
