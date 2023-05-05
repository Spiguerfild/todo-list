
import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button, colors, Card, CardContent } from '@mui/material';
import { ClipboardText, PlusCircle, Rocket } from "@phosphor-icons/react";
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#ffffff38'
  },
  '& label.Mui-focused': {
    color: '#cfcfcf',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#cfcfcf',
      transition: '.4s',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#cfcfcf',
    },
  },
});


function App() {

  const [cardLogica, setCardLogica] = useState(false)

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
            <Rocket size={60} color='#5e60ce' /><p style={{ color: '#5e60ce', fontWeight: '900', fontSize: '50px' }}> <span style={{ color: '#52b2ec' }}>to</span>do</p>
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
              <CssTextField name='tasks' variant='outlined' label='Task' placeholder='Adicione uma Nova tarefa' fullWidth sx={{
                backgroundColor: colors.grey[900],

              }} />
            </Grid>
            <Grid item xl={2} xs={12} >
              <Button variant='contained' name='tasks' fullWidth sx={{
                height: '100%',
                backgroundColor: '#52b2ec',
                '&:hover': {
                  backgroundColor: '#2b7aab',
                  transition: '.4s',
                }
              }}>Create <PlusCircle size={30} /></Button>
            </Grid>
          </Grid>
        </Container>


      </main>
      <Container sx={{ paddingTop: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
          <div><span style={{ color: '#52b2ec', fontSize: '20px', fontWeight: '600' }} >Tarefas criadas</span> 0</div>
          <div><span style={{ color: '#5e60ce', fontSize: '20px', fontWeight: '600' }}>Concluidas</span> 0</div>
        </div>
        <Grid container spacing={theme.spacing(1)} >
          <Grid item xl={12} xs={12}>
            <Card sx={{
              minWidth: 275,
              width: '100%',
              height: '55vh',
              borderRadius: '10px',

            }}>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                backgroundColor: '#121212'
              }}>
                <ClipboardText size={80} color={colors.grey[600]} />
                <Typography variant='h6' color={colors.grey[600]}>Você ainda não tem tarefas cadastradas</Typography>
                <Typography variant='h6' color={colors.grey[600]}>Crie tarefas e organize seus itens a fazer</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container >
    </>
  )
}

export default App
