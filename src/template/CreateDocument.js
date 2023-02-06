import Grid from "@mui/material/Grid"
import Toolbar from "@mui/material/Toolbar"
import Paper from "@mui/material/Paper"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
function CreateDocument() {
  return (
    <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <h3>Test</h3>
            </Grid>
            <Grid item>
              <h3>Test</h3>
            </Grid>
            <Grid item>
              <h3>Test</h3>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ my: 10 }}
      >
        <TextField
          label={"Text Value"} //optional
          variant="standard"
        />
        <TextField
          label={"Text Value"} //optional
          variant="standard"
        />
      </Grid>
    </Paper>
  )
}

export default CreateDocument
