/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/BatteryCharging";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFptNDgtODB2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTEzOC44MSwxMjMuNzlhOCw4LDAsMCwxLC4zNSw3Ljc5bC0xNiwzMmE4LDgsMCwwLDEtMTQuMzItNy4xNkwxMTkuMDYsMTM2SDEwMGE4LDgsMCwwLDEtNy4xNi0xMS41OGwxNi0zMmE4LDgsMCwxLDEsMTQuMzIsNy4xNkwxMTIuOTQsMTIwSDEzMkE4LDgsMCwwLDEsMTM4LjgxLDEyMy43OVoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjBIMzJBMjAsMjAsMCwwLDAsMTIsODB2OTZhMjAsMjAsMCwwLDAsMjAsMjBIMjAwYTIwLDIwLDAsMCwwLDIwLTIwVjgwQTIwLDIwLDAsMCwwLDIwMCw2MFptMTIsMTE2YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjgwQTEyLDEyLDAsMCwxLDMyLDY4SDIwMGExMiwxMiwwLDAsMSwxMiwxMlptNDAtODB2NjRhNCw0LDAsMCwxLTgsMFY5NmE0LDQsMCwwLDEsOCwwWk0xMzUuNCwxMjUuOWE0LDQsMCwwLDEsLjE4LDMuODlsLTE2LDMyQTQsNCwwLDAsMSwxMTYsMTY0YTQuMTIsNC4xMiwwLDAsMS0xLjc5LS40Miw0LDQsMCwwLDEtMS43OS01LjM3TDEyNS41MywxMzJIMTAwYTQsNCwwLDAsMS0zLjU4LTUuNzlsMTYtMzJhNCw0LDAsMSwxLDcuMTYsMy41OEwxMDYuNDcsMTI0SDEzMkE0LDQsMCwwLDEsMTM1LjQsMTI1LjlaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNThIMzJBMjIsMjIsMCwwLDAsMTAsODB2OTZhMjIsMjIsMCwwLDAsMjIsMjJIMjAwYTIyLDIyLDAsMCwwLDIyLTIyVjgwQTIyLDIyLDAsMCwwLDIwMCw1OFptMTAsMTE4YTEwLDEwLDAsMCwxLTEwLDEwSDMyYTEwLDEwLDAsMCwxLTEwLTEwVjgwQTEwLDEwLDAsMCwxLDMyLDcwSDIwMGExMCwxMCwwLDAsMSwxMCwxMFptNDQtODB2NjRhNiw2LDAsMCwxLTEyLDBWOTZhNiw2LDAsMCwxLDEyLDBaTTEzNy4xLDEyNC44NWE2LDYsMCwwLDEsLjI3LDUuODNsLTE2LDMyYTYsNiwwLDEsMS0xMC43NC01LjM2TDEyMi4yOSwxMzRIMTAwYTYsNiwwLDAsMS01LjM3LTguNjhsMTYtMzJhNiw2LDAsMCwxLDEwLjc0LDUuMzZMMTA5LjcxLDEyMkgxMzJBNiw2LDAsMCwxLDEzNy4xLDEyNC44NVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNTJIMjhBMjgsMjgsMCwwLDAsMCw4MHY5NmEyOCwyOCwwLDAsMCwyOCwyOEgxOTZhMjgsMjgsMCwwLDAsMjgtMjhWODBBMjgsMjgsMCwwLDAsMTk2LDUyWm00LDEyNGE0LDQsMCwwLDEtNCw0SDI4YTQsNCwwLDAsMS00LTRWODBhNCw0LDAsMCwxLDQtNEgxOTZhNCw0LDAsMCwxLDQsNFptNTYtNzJ2NDhhMTIsMTIsMCwwLDEtMjQsMFYxMDRhMTIsMTIsMCwwLDEsMjQsMFpNMTQyLjM4LDEyMmExMiwxMiwwLDAsMSwwLDEybC0xNiwyOGExMiwxMiwwLDEsMS0yMC44NC0xMS45TDExMS4zMiwxNDBIMTAwYTEyLDEyLDAsMCwxLTEwLjQyLTE4bDE2LTI4QTEyLDEyLDAsMCwxLDEyNi40MiwxMDZsLTUuNzQsMTBIMTMyQTEyLDEyLDAsMCwxLDE0Mi4zOCwxMjJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTIyNCw4MHY5NmEyNCwyNCwwLDAsMS0yNCwyNEgzMkEyNCwyNCwwLDAsMSw4LDE3NlY4MEEyNCwyNCwwLDAsMSwzMiw1NkgyMDBBMjQsMjQsMCwwLDEsMjI0LDgwWm0tODUuMTksNDMuNzlBOCw4LDAsMCwwLDEzMiwxMjBIMTEyLjk0bDEwLjIyLTIwLjQyYTgsOCwwLDEsMC0xNC4zMi03LjE2bC0xNiwzMkE4LDgsMCwwLDAsMTAwLDEzNmgxOS4wNmwtMTAuMjIsMjAuNDJhOCw4LDAsMCwwLDE0LjMyLDcuMTZsMTYtMzJBOCw4LDAsMCwwLDEzOC44MSwxMjMuNzlaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2OTZhMTYsMTYsMCwwLDEtMTYsMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWODBBMTYsMTYsMCwwLDEsMzIsNjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFptNDgtODB2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTEzOC44MSwxMjMuNzlhOCw4LDAsMCwxLC4zNSw3Ljc5bC0xNiwzMmE4LDgsMCwwLDEtMTQuMzItNy4xNkwxMTkuMDYsMTM2SDEwMGE4LDgsMCwwLDEtNy4xNi0xMS41OGwxNi0zMmE4LDgsMCwxLDEsMTQuMzIsNy4xNkwxMTIuOTQsMTIwSDEzMkE4LDgsMCwwLDEsMTM4LjgxLDEyMy43OVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BatteryCharging";
export { I as BatteryCharging };
