
import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button, colors } from '@mui/material';
import { PlusCircle, Rocket } from "@phosphor-icons/react";
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#cfcfcf',
  },

  '& .MuiOutlinedInput-root': {

    '&:hover fieldset': {
      borderColor: '#cfcfcf',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#cfcfcf',
    },
  },
});


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
            <Rocket size={60} color='#eaec52' /><p style={{ color: '#5e60ce', fontWeight: '900', fontSize: '50px' }}> <span style={{ color: '#52b2ec' }}>to</span>do</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ position: 'relative', }}>
          <Grid container spacing={2} sx={{
            position: 'absolute',
            top: '-26px'
          }}>
            <Grid item xl={10} xs={12}>
              <CssTextField name='tasks' variant='outlined' label='Task' placeholder='Adicione uma Nova tarefa' fullWidth sx={{ backgroundColor: colors.grey[900] }} />
            </Grid>
            <Grid item xl={2} xs={12} >
              <Button variant='contained' name='tasks' fullWidth sx={{
                height: '100%',
                backgroundColor: '#cfcfcf',
                '&:hover': {


                }
              }}>Criar <PlusCircle size={30} /></Button>
            </Grid>
          </Grid>
        </Container>


      </main>
      <Grid container spacing={theme.spacing(1)} sx={{ backgroundColor: 'white', paddingTop: '100px' }}>
        <Grid item>
          <Typography variant='caption'>
            Tarefas Criadas
          </Typography>
        </Grid>
      </Grid>

    </>
  )
}

export default App
