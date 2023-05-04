
import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button } from '@mui/material';



function App() {
  const theme = useTheme()
  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '@media all': {
            minHeight: 200,
          }
        }}>
          <Typography variant="h5" component="h6">
            Scr
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Grid container spacing={theme.spacing(0.5)}>
            <Grid item xl={10} xs={12}>
              <TextField name='tasks' fullWidth />
            </Grid>
            <Grid item xl={2} xs={12} >
              <Button variant='contained' name='tasks' fullWidth >wda</Button>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default App
