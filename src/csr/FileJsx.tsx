/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileJsx";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDcuODEsMTk2LjMxYTIwLjgyLDIwLjgyLDAsMCwxLTkuMTksMTUuMjNDMTMzLjQzLDIxNSwxMjcsMjE2LDEyMS4xMywyMTZhNjAuNjMsNjAuNjMsMCwwLDEtMTUuMTktMiw4LDgsMCwwLDEsNC4zMS0xNS40MWM0LjM4LDEuMjEsMTUsMi43MSwxOS41NS0uMzUuODgtLjYsMS44My0xLjUyLDIuMTQtMy45My4zNC0yLjY3LS43Mi00LjEtMTIuNzgtNy41OS05LjM1LTIuNy0yNS03LjIzLTIzLTIzLjExYTIwLjU4LDIwLjU4LDAsMCwxLDktMTQuOTVjMTEuODUtOCwzMC43Mi0zLjMxLDMyLjg0LTIuNzZhOCw4LDAsMCwxLTQuMDcsMTUuNDhjLTQuNDktMS4xNy0xNS4yMy0yLjU2LTE5LjgzLjU2YTQuNTQsNC41NCwwLDAsMC0yLDMuNjdjLS4xMi45LS4xNCwxLjA4LDEuMTEsMS45LDIuMzEsMS40OSw2LjQ1LDIuNjgsMTAuNDUsMy44NEMxMzMuNDksMTc0LjE3LDE1MCwxNzksMTQ3LjgxLDE5Ni4zMVpNNzIsMTQ0YTgsOCwwLDAsMC04LDh2MzhhMTAsMTAsMCwwLDEtMjAsMCw4LDgsMCwwLDAtMTYsMCwyNiwyNiwwLDAsMCw1MiwwVjE1MkE4LDgsMCwwLDAsNzIsMTQ0Wm0xNDAuNjUsMS40OWE4LDgsMCwwLDAtMTEuMTYsMS44NkwxODgsMTY2LjI0bC0xMy40OS0xOC44OWE4LDgsMCwwLDAtMTMsOS4zTDE3OC4xNywxODBsLTE2LjY4LDIzLjM1YTgsOCwwLDAsMCwxMyw5LjNMMTg4LDE5My43NmwxMy40OSwxOC44OWE4LDgsMCwwLDAsMTMtOS4zTDE5Ny44MywxODBsMTYuNjgtMjMuMzVBOCw4LDAsMCwwLDIxMi42NSwxNDUuNDlaTTIxNiw4OHYyNGE4LDgsMCwwLDEtMTYsMFY5NkgxNTJhOCw4LDAsMCwxLTgtOFY0MEg1NnY3MmE4LDgsMCwwLDEtMTYsMFY0MEExNiwxNiwwLDAsMSw1NiwyNGg5NmE4LDgsMCwwLDEsNS42NiwyLjM0bDU2LDU2QTgsOCwwLDAsMSwyMTYsODhabS0yNy4zMS04TDE2MCw1MS4zMVY4MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDMuODQsMTk1LjhhMTcsMTcsMCwwLDEtNy40MywxMi40MWMtNC4zOSwyLjkxLTEwLDMuNzctMTUuMjIsMy43N0E1Ny44OSw1Ny44OSwwLDAsMSwxMDcsMjEwLjExYTQsNCwwLDEsMSwyLjE1LTcuN2M0LjIyLDEuMTcsMTYuNTYsMy4yOSwyMi44My0uODhhOC45NCw4Ljk0LDAsMCwwLDMuOTEtNi43NWMuODMtNi40NS00LjM4LTguNjktMTUuNjQtMTEuOTQtOS42OC0yLjgtMjEuNzItNi4yOC0yMC4xNC0xOC43N2ExNi42NiwxNi42NiwwLDAsMSw3LjIyLTEyLjEzYzQuNTYtMy4wNywxMS00LjM2LDE5LjEtMy44MmE2MS4zMyw2MS4zMywwLDAsMSwxMC40OCwxLjYxLDQsNCwwLDAsMS0yLjA1LDcuNzRjLTQuMjktMS4xMy0xNi44MS0zLjEyLTIzLjA2LDEuMTFhOC41MSw4LjUxLDAsMCwwLTMuNzUsNi40OWMtLjY2LDUuMTcsMy44OSw3LDE0LjQyLDEwLjA4QzEzMi4yNiwxNzgsMTQ1LjY0LDE4MS44NCwxNDMuODQsMTk1LjhaTTcyLDE0OGE0LDQsMCwwLDAtNCw0djM4YTE0LDE0LDAsMCwxLTI4LDAsNCw0LDAsMCwwLTgsMCwyMiwyMiwwLDAsMCw0NCwwVjE1MkE0LDQsMCwwLDAsNzIsMTQ4Wm0xMzguMzIuNzVhNCw0LDAsMCwwLTUuNTguOTJMMTg4LDE3My4xMmwtMTYuNzUtMjMuNDVhNCw0LDAsMCwwLTYuNTEsNC42NkwxODMuMDgsMTgwbC0xOC4zNCwyNS42N2E0LDQsMCwwLDAsLjkzLDUuNTgsNCw0LDAsMCwwLDUuNTgtLjkyTDE4OCwxODYuODhsMTYuNzQsMjMuNDVBNCw0LDAsMCwwLDIwOCwyMTJhMy45MSwzLjkxLDAsMCwwLDIuMzItLjc1LDQsNCwwLDAsMCwuOTMtNS41OEwxOTIuOTIsMTgwbDE4LjMzLTI1LjY3QTQsNCwwLDAsMCwyMTAuMzIsMTQ4Ljc1Wk0yMTIsODh2MjRhNCw0LDAsMCwxLTgsMFY5MkgxNTJhNCw0LDAsMCwxLTQtNFYzNkg1NmE0LDQsMCwwLDAtNCw0djcyYTQsNCwwLDAsMS04LDBWNDBBMTIsMTIsMCwwLDEsNTYsMjhoOTZhNCw0LDAsMCwxLDIuODMsMS4xN2w1Niw1NkE0LDQsMCwwLDEsMjEyLDg4Wm0tMTMuNjYtNEwxNTYsNDEuNjVWODRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDUuODMsMTk2LjA1YTE4Ljg5LDE4Ljg5LDAsMCwxLTguMzEsMTMuODFjLTQuODIsMy4xOS0xMC44Nyw0LjE0LTE2LjM2LDQuMTRhNTkuNDEsNTkuNDEsMCwwLDEtMTQuNjgtMiw2LDYsMCwwLDEsMy4yMy0xMS41NmMzLjcxLDEsMTUuNTgsMy4xMSwyMS4xOS0uNjJhNi44NSw2Ljg1LDAsMCwwLDMtNS4zNGMuNTgtNC40My0yLjA4LTYuMjYtMTQuMi05Ljc2LTkuMzEtMi42OS0yMy4zNy02Ljc1LTIxLjU3LTIwLjk0YTE4LjYxLDE4LjYxLDAsMCwxLDguMDgtMTMuNTRjMTEuMTEtNy40OSwyOS4xOC0zLDMxLjIxLTIuNDhhNiw2LDAsMCwxLTMuMDYsMTEuNmMtMy43OS0xLTE1Ljg1LTIuOTUtMjEuNDUuODRhNi41OSw2LjU5LDAsMCwwLTIuODgsNS4wOGMtLjQxLDMuMjIsMi4xNCw0Ljc4LDEzLDcuOTFDMTMyLjkyLDE3Ni4wOCwxNDcuODQsMTgwLjM5LDE0NS44MywxOTYuMDVaTTcyLDE0NmE2LDYsMCwwLDAtNiw2djM4YTEyLDEyLDAsMCwxLTI0LDAsNiw2LDAsMCwwLTEyLDAsMjQsMjQsMCwwLDAsNDgsMFYxNTJBNiw2LDAsMCwwLDcyLDE0NlptMTM5LjQ5LDEuMTJhNiw2LDAsMCwwLTguMzcsMS4zOUwxODgsMTY5LjY3LDE3Mi44OCwxNDguNWE2LDYsMCwwLDAtOS43Niw3TDE4MC42MywxODAsMTYzLjEyLDIwNC41YTYsNiwwLDEsMCw5Ljc2LDdMMTg4LDE5MC4zMWwxNS4xMiwyMS4xNmE2LDYsMCwxLDAsOS43Ni03TDE5NS4zNywxODBsMTcuNTEtMjQuNTFBNiw2LDAsMCwwLDIxMS40OSwxNDcuMTFaTTIxNCw4OHYyNGE2LDYsMCwxLDEtMTIsMFY5NEgxNTJhNiw2LDAsMCwxLTYtNlYzOEg1NmEyLDIsMCwwLDAtMiwydjcyYTYsNiwwLDEsMS0xMiwwVjQwQTE0LDE0LDAsMCwxLDU2LDI2aDk2YTYsNiwwLDAsMSw0LjI1LDEuNzZsNTYsNTZBNiw2LDAsMCwxLDIxNCw4OFptLTIwLjQ5LTZMMTU4LDQ2LjQ4VjgyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTEuNzgsMTk2LjhhMjQuNzMsMjQuNzMsMCwwLDEtMTAuOTUsMThjLTYsNC0xMy4yNyw1LjE1LTE5LjczLDUuMTVhNjMuNzUsNjMuNzUsMCwwLDEtMTYuMjMtMi4yMSwxMiwxMiwwLDEsMSw2LjQ2LTIzLjExYzYuODEsMS44NSwxNSwxLjYxLDE2LjM5LjA2YTIuNDgsMi40OCwwLDAsMCwuMjEtLjcxYy0xLjk0LTEuMjMtNi44My0yLjY0LTkuODgtMy41My01LjM5LTEuNTYtMTEtMy4xNy0xNS43NS02LjI2LTcuNjMtNC45Mi0xMS4yMS0xMi40NS0xMC4xMS0yMS4xOWEyNC40NSwyNC40NSwwLDAsMSwxMC42OS0xNy43NmM2LjA2LTQuMDksMTQuMTctNS44MywyNC4xLTUuMTdBNjksNjksMCwwLDEsMTM5LDE0MmExMiwxMiwwLDAsMS02LjEsMjMuMjFjLTYuMzYtMS42My0xMy42Mi0xLjUxLTE2LjA3LS4zM2E3OS41LDc5LjUsMCwwLDAsNy45MSwyLjU5YzUuNDcsMS41OCwxMS42OCwzLjM3LDE2LjgsNi44MkMxNDkuMzMsMTc5LjUzLDE1MywxODcuNTMsMTUxLjc4LDE5Ni44Wk02OCwxNDBhMTIsMTIsMCwwLDAtMTIsMTJ2MzhhNiw2LDAsMCwxLTEyLDAsMTIsMTIsMCwwLDAtMjQsMCwzMCwzMCwwLDAsMCw2MCwwVjE1MkExMiwxMiwwLDAsMCw2OCwxNDBabTEzOC43NSw0MCwxNS0yMWExMiwxMiwwLDAsMC0xOS41My0xNEwxOTIsMTU5LjM0LDE4MS43NiwxNDVhMTIsMTIsMCwwLDAtMTkuNTMsMTRsMTUsMjEtMTUsMjFBMTIsMTIsMCwxLDAsMTgxLjc2LDIxNUwxOTIsMjAwLjYyLDIwMi4yMywyMTVBMTIsMTIsMCwwLDAsMjIxLjc2LDIwMVpNMzYsMTA4VjQwQTIwLDIwLDAsMCwxLDU2LDIwaDk2YTEyLDEyLDAsMCwxLDguNDksMy41MWw1Niw1NkExMiwxMiwwLDAsMSwyMjAsODh2MjBhMTIsMTIsMCwxLDEtMjQsMHYtNEgxNDhhMTIsMTIsMCwwLDEtMTItMTJWNDRINjB2NjRhMTIsMTIsMCwxLDEtMjQsMFpNMTYwLDgwaDIzTDE2MCw1N1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzZhNCw0LDAsMCwwLDQsNEgyMTJhNCw0LDAsMCwwLDQtNFY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNTIsODhWNDRsNDQsNDRabS00LjE5LDEwOC4zMWEyMC44MiwyMC44MiwwLDAsMS05LjE5LDE1LjIzQzEzMy40MywyMTUsMTI3LDIxNiwxMjEuMTMsMjE2YTYwLjYzLDYwLjYzLDAsMCwxLTE1LjE5LTIsOCw4LDAsMCwxLDQuMzEtMTUuNDFjNC4zOCwxLjIxLDE1LDIuNzEsMTkuNTUtLjM1Ljg4LS42LDEuODMtMS41MiwyLjE0LTMuOTMuMzQtMi42Ny0uNzItNC4xLTEyLjc4LTcuNTktOS4zNS0yLjctMjUtNy4yMy0yMy0yMy4xMmEyMC41OCwyMC41OCwwLDAsMSw5LTE0Ljk0YzExLjg1LTgsMzAuNzItMy4zMSwzMi44NC0yLjc2YTgsOCwwLDAsMS00LjA3LDE1LjQ4Yy00LjQ5LTEuMTctMTUuMjMtMi41Ni0xOS44My41NmE0LjU3LDQuNTcsMCwwLDAtMiwzLjY3Yy0uMTEuOS0uMTMsMS4wOCwxLjEyLDEuOSwyLjMxLDEuNDksNi40NSwyLjY4LDEwLjQ1LDMuODRDMTMzLjQ5LDE3NC4xNywxNTAsMTc5LDE0Ny44MSwxOTYuMzFaTTgwLDE1MnYzNy40YzAsMTQuMjMtMTEuMTgsMjYuMjctMjUuNDEsMjYuNTlBMjYsMjYsMCwwLDEsMjgsMTkwLjM3LDguMTcsOC4xNywwLDAsMSwzNS4zMSwxODIsOCw4LDAsMCwxLDQ0LDE5MC4yMmE4Ljg5LDguODksMCwwLDAsNCw4YzcuODUsNC44MiwxNi0uNzYsMTYtOC4yVjE1Mi4yN0E4LjE3LDguMTcsMCwwLDEsNzEuNDcsMTQ0LDgsOCwwLDAsMSw4MCwxNTJabTEzNC41MSw0LjY1TDE5Ny44MywxODBsMTYuNjgsMjMuMzVhOCw4LDAsMCwxLTEzLDkuM0wxODgsMTkzLjc2bC0xMy40OSwxOC44OWE4LDgsMCwxLDEtMTMtOS4zTDE3OC4xNywxODBsLTE2LjY4LTIzLjM1YTgsOCwwLDAsMSwxMy05LjNMMTg4LDE2Ni4yNGwxMy40OS0xOC44OWE4LDgsMCwwLDEsMTMsOS4zWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhIMTUyVjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE0Ny44MSwxOTYuMzFhMjAuODIsMjAuODIsMCwwLDEtOS4xOSwxNS4yM0MxMzMuNDMsMjE1LDEyNywyMTYsMTIxLjEzLDIxNkE2MC40Myw2MC40MywwLDAsMSwxMDYsMjE0YTgsOCwwLDEsMSw0LjMtMTUuNDFjNC4zOCwxLjIxLDE1LDIuNzEsMTkuNTUtLjM1Ljg4LS42LDEuODMtMS41MiwyLjE0LTMuOTMuMzQtMi42Ny0uNzItNC4xLTEyLjc4LTcuNTktOS4zNS0yLjctMjUtNy4yMy0yMy0yMy4xMmEyMC41OCwyMC41OCwwLDAsMSw5LTE0Ljk0YzExLjg1LTgsMzAuNzItMy4zMSwzMi44NC0yLjc2YTgsOCwwLDAsMS00LjA3LDE1LjQ4Yy00LjQ5LTEuMTctMTUuMjMtMi41Ni0xOS44My41NmE0LjU0LDQuNTQsMCwwLDAtMiwzLjY3Yy0uMTIuOS0uMTQsMS4wOCwxLjExLDEuOSwyLjMxLDEuNDksNi40NSwyLjY4LDEwLjQ1LDMuODRDMTMzLjQ5LDE3NC4xNywxNTAsMTc5LDE0Ny44MSwxOTYuMzFaTTcyLDE0NGE4LDgsMCwwLDAtOCw4djM4YTEwLDEwLDAsMCwxLTIwLDAsOCw4LDAsMCwwLTE2LDAsMjYsMjYsMCwwLDAsNTIsMFYxNTJBOCw4LDAsMCwwLDcyLDE0NFptMTQwLjY1LDEuNDlhOCw4LDAsMCwwLTExLjE2LDEuODZMMTg4LDE2Ni4yNGwtMTMuNDktMTguODlhOCw4LDAsMCwwLTEzLDkuM0wxNzguMTcsMTgwbC0xNi42OCwyMy4zNWE4LDgsMCwwLDAsMTMsOS4zTDE4OCwxOTMuNzZsMTMuNDksMTguODlhOCw4LDAsMCwwLDEzLTkuM0wxOTcuODMsMTgwbDE2LjY4LTIzLjM1QTgsOCwwLDAsMCwyMTIuNjUsMTQ1LjQ5Wk0yMTYsODh2MjRhOCw4LDAsMCwxLTE2LDBWOTZIMTUyYTgsOCwwLDAsMS04LThWNDBINTZ2NzJhOCw4LDAsMCwxLTE2LDBWNDBBMTYsMTYsMCwwLDEsNTYsMjRoOTZhOCw4LDAsMCwxLDUuNjYsMi4zNGw1Niw1NkE4LDgsMCwwLDEsMjE2LDg4Wm0tMjcuMzEtOEwxNjAsNTEuMzFWODBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileJsx";
export { I as FileJsx };
