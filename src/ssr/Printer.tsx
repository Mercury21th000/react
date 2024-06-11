/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Printer";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjcsNjhIMjA0VjQwYTEyLDEyLDAsMCwwLTEyLTEySDY0QTEyLDEyLDAsMCwwLDUyLDQwVjY4SDQxLjMzQzI1LjE2LDY4LDEyLDgwLjU2LDEyLDk2djgwYTEyLDEyLDAsMCwwLDEyLDEySDUydjI4YTEyLDEyLDAsMCwwLDEyLDEySDE5MmExMiwxMiwwLDAsMCwxMi0xMlYxODhoMjhhMTIsMTIsMCwwLDAsMTItMTJWOTZDMjQ0LDgwLjU2LDIzMC44NCw2OCwyMTQuNjcsNjhaTTc2LDUySDE4MFY2OEg3NlpNMTgwLDIwNEg3NlYxNzJIMTgwWm00MC00MEgyMDR2LTRhMTIsMTIsMCwwLDAtMTItMTJINjRhMTIsMTIsMCwwLDAtMTIsMTJ2NEgzNlY5NmMwLTIuMTcsMi40NC00LDUuMzMtNEgyMTQuNjdjMi44OSwwLDUuMzMsMS44Myw1LjMzLDRabS0xNi00NGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwyMDQsMTIwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTZ2ODBIMTkyVjE1Mkg2NHYyNEgyNFY5NmMwLTguODQsNy43Ni0xNiwxNy4zMy0xNkgyMTQuNjdDMjI0LjI0LDgwLDIzMiw4Ny4xNiwyMzIsOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE0LjY3LDcySDIwMFY0MGE4LDgsMCwwLDAtOC04SDY0YTgsOCwwLDAsMC04LDhWNzJINDEuMzNDMjcuMzYsNzIsMTYsODIuNzcsMTYsOTZ2ODBhOCw4LDAsMCwwLDgsOEg1NnYzMmE4LDgsMCwwLDAsOCw4SDE5MmE4LDgsMCwwLDAsOC04VjE4NGgzMmE4LDgsMCwwLDAsOC04Vjk2QzI0MCw4Mi43NywyMjguNjQsNzIsMjE0LjY3LDcyWk03Miw0OEgxODRWNzJINzJaTTE4NCwyMDhINzJWMTYwSDE4NFptNDAtNDBIMjAwVjE1MmE4LDgsMCwwLDAtOC04SDY0YTgsOCwwLDAsMC04LDh2MTZIMzJWOTZjMC00LjQxLDQuMTktOCw5LjMzLThIMjE0LjY3YzUuMTQsMCw5LjMzLDMuNTksOS4zMyw4Wm0tMjQtNTJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMjAwLDExNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsOTZ2ODBhOCw4LDAsMCwxLTgsOEgyMDB2MzJhOCw4LDAsMCwxLTgsOEg2NGE4LDgsMCwwLDEtOC04VjE4NEgyNGE4LDgsMCwwLDEtOC04Vjk2YzAtMTMuMjMsMTEuMzYtMjQsMjUuMzMtMjRINTZWNDBhOCw4LDAsMCwxLDgtOEgxOTJhOCw4LDAsMCwxLDgsOFY3MmgxNC42N0MyMjguNjQsNzIsMjQwLDgyLjc3LDI0MCw5NlpNNzIsNzJIMTg0VjQ4SDcyWm0xMTIsODhINzJ2NDhIMTg0Wm0xNi00NGExMiwxMiwwLDEsMC0xMiwxMkExMiwxMiwwLDAsMCwyMDAsMTE2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjcsNzRIMTk4VjQwYTYsNiwwLDAsMC02LTZINjRhNiw2LDAsMCwwLTYsNlY3NEg0MS4zM0MyOC40Nyw3NCwxOCw4My44NywxOCw5NnY4MGE2LDYsMCwwLDAsNiw2SDU4djM0YTYsNiwwLDAsMCw2LDZIMTkyYTYsNiwwLDAsMCw2LTZWMTgyaDM0YTYsNiwwLDAsMCw2LTZWOTZDMjM4LDgzLjg3LDIyNy41Myw3NCwyMTQuNjcsNzRaTTcwLDQ2SDE4NlY3NEg3MFpNMTg2LDIxMEg3MFYxNThIMTg2Wm00MC00MEgxOThWMTUyYTYsNiwwLDAsMC02LTZINjRhNiw2LDAsMCwwLTYsNnYxOEgzMFY5NmMwLTUuNTEsNS4wOC0xMCwxMS4zMy0xMEgyMTQuNjdDMjIwLjkyLDg2LDIyNiw5MC40OSwyMjYsOTZabS0yOC01NGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxOTgsMTE2WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjcsNzJIMjAwVjQwYTgsOCwwLDAsMC04LThINjRhOCw4LDAsMCwwLTgsOFY3Mkg0MS4zM0MyNy4zNiw3MiwxNiw4Mi43NywxNiw5NnY4MGE4LDgsMCwwLDAsOCw4SDU2djMyYTgsOCwwLDAsMCw4LDhIMTkyYTgsOCwwLDAsMCw4LThWMTg0aDMyYTgsOCwwLDAsMCw4LThWOTZDMjQwLDgyLjc3LDIyOC42NCw3MiwyMTQuNjcsNzJaTTcyLDQ4SDE4NFY3Mkg3MlpNMTg0LDIwOEg3MlYxNjBIMTg0Wm00MC00MEgyMDBWMTUyYTgsOCwwLDAsMC04LThINjRhOCw4LDAsMCwwLTgsOHYxNkgzMlY5NmMwLTQuNDEsNC4xOS04LDkuMzMtOEgyMTQuNjdjNS4xNCwwLDkuMzMsMy41OSw5LjMzLDhabS0yNC01MmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwyMDAsMTE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjcsNzZIMTk2VjQwYTQsNCwwLDAsMC00LTRINjRhNCw0LDAsMCwwLTQsNFY3Nkg0MS4zM0MyOS41Nyw3NiwyMCw4NSwyMCw5NnY4MGE0LDQsMCwwLDAsNCw0SDYwdjM2YTQsNCwwLDAsMCw0LDRIMTkyYTQsNCwwLDAsMCw0LTRWMTgwaDM2YTQsNCwwLDAsMCw0LTRWOTZDMjM2LDg1LDIyNi40Myw3NiwyMTQuNjcsNzZaTTY4LDQ0SDE4OFY3Nkg2OFpNMTg4LDIxMkg2OFYxNTZIMTg4Wm00MC00MEgxOTZWMTUyYTQsNCwwLDAsMC00LTRINjRhNCw0LDAsMCwwLTQsNHYyMEgyOFY5NmMwLTYuNjIsNi0xMiwxMy4zMy0xMkgyMTQuNjdDMjIyLDg0LDIyOCw4OS4zOCwyMjgsOTZabS0zMi01NmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxOTYsMTE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Printer";
export { I as Printer };
