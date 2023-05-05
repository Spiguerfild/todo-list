
import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button, colors } from '@mui/material';
import { PlusCircle, Rocket } from "@phosphor-icons/react";


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

          <Typography variant="h5" component="h6" sx={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2)
          }}>
            <Rocket size={60} color='#52b2ec' /><p style={{ color: '#5e60ce', fontWeight: '900', fontSize: '50px' }}> <span style={{ color: '#52b2ec' }}>to</span>do</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ position: 'relative' }}>
          <Grid container spacing={theme.spacing(0.5)} sx={{
            position: 'absolute',
            top: '-26px'
          }}>
            <Grid item xl={10} xs={12}>
              <TextField name='tasks' fullWidth sx={{ backgroundColor: colors.grey[900] }} />
            </Grid>
            <Grid item xl={2} xs={12} >
              <Button variant='contained' name='tasks' fullWidth sx={{
                height: '100%'

              }}><PlusCircle size={32} /></Button>
            </Grid>

            <Grid container spacing={theme.spacing(1)}>
              <Grid item>
                <Typography variant='caption'>
                  Tarefas Criadas
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default App
