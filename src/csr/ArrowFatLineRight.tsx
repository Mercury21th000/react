/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowFatLineRight";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTE5LjUxbC05Ni05NkExMiwxMiwwLDAsMCwxMjQsMzJWNjhIODBBMTIsMTIsMCwwLDAsNjgsODB2OTZhMTIsMTIsMCwwLDAsMTIsMTJoNDR2MzZhMTIsMTIsMCwwLDAsMjAuNDksOC40OWw5Ni05NkExMiwxMiwwLDAsMCwyNDAuNDksMTE5LjUxWk0xNDgsMTk1VjE3NmExMiwxMiwwLDAsMC0xMi0xMkg5MlY5Mmg0NGExMiwxMiwwLDAsMCwxMi0xMlY2MWw2Nyw2N1pNNTIsODB2OTZhMTIsMTIsMCwwLDEtMjQsMFY4MGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMjI0VjE3Nkg3MlY4MGg2NFYzMmw5Niw5NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTIyLjM0bC05Ni05NkE4LDgsMCwwLDAsMTI4LDMyVjcySDcyYTgsOCwwLDAsMC04LDh2OTZhOCw4LDAsMCwwLDgsOGg1NnY0MGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw5Ni05NkE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFpNMTQ0LDIwNC42OVYxNzZhOCw4LDAsMCwwLTgtOEg4MFY4OGg1NmE4LDgsMCwwLDAsOC04VjUxLjMxTDIyMC42OSwxMjhaTTQ4LDgwdjk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw4MHY5NmE4LDgsMCwwLDEtMTYsMFY4MGE4LDgsMCwwLDEsMTYsMFptMTg5LjY2LDQyLjM0LTk2LTk2QTgsOCwwLDAsMCwxMjgsMzJWNzJINzJhOCw4LDAsMCwwLTgsOHY5NmE4LDgsMCwwLDAsOCw4aDU2djQwYTgsOCwwLDAsMCwxMy42Niw1LjY2bDk2LTk2QTgsOCwwLDAsMCwyMzcuNjYsMTIyLjM0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsMTIzLjc2bC05Ni05NkE2LDYsMCwwLDAsMTMwLDMyVjc0SDcyYTYsNiwwLDAsMC02LDZ2OTZhNiw2LDAsMCwwLDYsNmg1OHY0MmE2LDYsMCwwLDAsMTAuMjQsNC4yNGw5Ni05NkE2LDYsMCwwLDAsMjM2LjI0LDEyMy43NlpNMTQyLDIwOS41MVYxNzZhNiw2LDAsMCwwLTYtNkg3OFY4Nmg1OGE2LDYsMCwwLDAsNi02VjQ2LjQ5TDIyMy41MSwxMjhaTTQ2LDgwdjk2YTYsNiwwLDAsMS0xMiwwVjgwYTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTIyLjM0bC05Ni05NkE4LDgsMCwwLDAsMTI4LDMyVjcySDcyYTgsOCwwLDAsMC04LDh2OTZhOCw4LDAsMCwwLDgsOGg1NnY0MGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw5Ni05NkE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFpNMTQ0LDIwNC42OVYxNzZhOCw4LDAsMCwwLTgtOEg4MFY4OGg1NmE4LDgsMCwwLDAsOC04VjUxLjMxTDIyMC42OSwxMjhaTTQ4LDgwdjk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsMTI1LjE3bC05Ni05NkE0LDQsMCwwLDAsMTMyLDMyVjc2SDcyYTQsNCwwLDAsMC00LDR2OTZhNCw0LDAsMCwwLDQsNGg2MHY0NGE0LDQsMCwwLDAsMi40NywzLjcsNCw0LDAsMCwwLDQuMzYtLjg3bDk2LTk2QTQsNCwwLDAsMCwyMzQuODMsMTI1LjE3Wk0xNDAsMjE0LjM0VjE3NmE0LDQsMCwwLDAtNC00SDc2Vjg0aDYwYTQsNCwwLDAsMCw0LTRWNDEuNjZMMjI2LjM0LDEyOFpNNDQsODB2OTZhNCw0LDAsMCwxLTgsMFY4MGE0LDQsMCwwLDEsOCwwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowFatLineRight";
export { I as ArrowFatLineRight };
