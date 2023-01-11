import * as React from "react";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

function SnackBar() {
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackBar = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };
  console.log("hello");
  handleSnackBar("success");
  //   return (
  //     <React.Fragment>
  //       <Button onClick={handleSnackBar("success")}>Submit</Button>
  //     </React.Fragment>
  //   );
}
export default SnackBar;
