import { Divider, Box, Grid } from "@mui/material";

import NavBar from "./NavBar";
function AppContainer({ children }) {
  return (
    <Grid container direction="column">
      <Grid item p={3}>
        <NavBar />
        <Divider />
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}

export default AppContainer;
