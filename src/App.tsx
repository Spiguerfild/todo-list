
import {
  useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container,
  Button, colors, Card, CardContent, Badge, LinearProgress, Stack, CircularProgress, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions,
} from '@mui/material';
import { ClipboardText, PlusCircle, Rocket } from "@phosphor-icons/react";
import { styled } from '@mui/material/styles';
import { FormEvent, useEffect, useState } from 'react';
import { CardTarefa } from './CardTarefa/inde.tsx';
import { Task } from './types/index.ts';
import { exclude, getAll, save, update } from './service/api';




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
  const theme = useTheme();

  const [tasks, setTasks] = useState<Task[]>([]);/*numero de tasks concluidas*/
  const [tasksConclueds, setTasksConclueds] = useState<number>(0) /*numero de tasks concluidas*/
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [numbTask, setNumbTask] = useState(0)
  const [clearTxt, setClearTxt] = useState('')

  useEffect(() => {

    listDados() /*puxa os dados do banco uma unica vez*/

  }, []);

  // useEffect(() => {
  //   isDelete ?

  //     teste(numbTask)
  //     :
  //     console.log(teste)
  // }, [isDelete])

  const teste = async (number: number) => {
    await exclude(number);
    console.log('deletou')
    listDados()
    setIsDelete(false)
  }

  if (isDelete === true) {
    teste(numbTask)
  }

  const listDados = async () => {

    const listTaks = await getAll();

    setTasksConclueds(() => {
      return 0;
    })

    listTaks.map((task: Task) => {

      if (task.done) {

        setTasksConclueds((prev) => {
          return prev + 1;
        })

      }
    })

    setTasks(listTaks);
  }


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newTask: Task = {
      description: clearTxt,
      done: false,
    }
    setIsLoading(true)
    try {

      const task = await save(newTask)
      setTasks([...tasks, task]);
      setClearTxt('')
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }

  }

  const handleDelete = async (id: number) => {

    if (undefined || null) return;
    setOpen(true);

    await setNumbTask(id)



  }

  const handleUpdate = async (task: Task) => {
    await update(task);
    listDados()
  }


  const handleClose = () => {
    setOpen(false);
  };

  const closeAndVerify = () => {
    handleClose();

    setIsDelete(true)
  }
  const closeAndVerifyCancel = () => {
    handleClose();

    setIsDelete(false)
  }

  return (
    <>
      <div>
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
          <form onSubmit={handleSubmit}>
            <Container sx={{ position: 'relative' }}>
              <Grid container spacing={2} sx={{
                position: 'relative',
                top: '-26px',
                padding: '0 50px'
              }}>

                <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>

                  <CssTextField name="taskDescription"
                    onChange={(event) => setClearTxt(event.currentTarget.value)}
                    value={clearTxt}
                    variant='outlined'
                    label='Task'
                    placeholder='Adicione uma Nova tarefa'
                    fullWidth sx={{
                      backgroundColor: colors.grey[900],
                    }} />

                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                  <Button variant='contained' name='tasks' type='submit' fullWidth sx={{
                    height: '100%',
                    border: '2px solid black',
                    padding: ' 0 5px 0 5px',
                    backgroundColor: '#52b2ec',
                    justifyContent: 'space-evenly',
                    fontWeight: '600',
                    fontSize: '15px',
                    '&:hover': {
                      backgroundColor: '#5e60ce',
                      transition: '.5s',
                    }
                  }}>Create </Button>
                </Grid>

              </Grid>
            </Container>
          </form>

        </main>
        <Container sx={{ paddingTop: '100px', marginBottom: '50px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '98%'
          }}>
            <Grid container spacing={2} sx={{ paddingBottom: '10px' }}>

              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                    <span style={{ color: '#52b2ec', fontSize: '20px', fontWeight: '600' }} >
                      Tarefas criadas
                    </span>
                    <Badge sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#383838', // Aqui você pode definir a cor de fundo desejada para o span interno
                        textAlign: 'center',
                        padding: '10px'
                      },

                    }} > {tasks.length} </Badge>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                    <span style={{ color: '#5e60ce', fontSize: '20px', fontWeight: '600' }}>
                      Concluidas
                    </span>
                    <Badge sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#383838', // Aqui você pode definir a cor de fundo desejada para o span interno
                        textAlign: 'center',
                        padding: '10px'
                      }
                    }} > {tasksConclueds} </Badge>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          {
            tasks.length === 0 ?
              <Container >
                <Grid container spacing={theme.spacing(1)} >
                  <Grid item xl={12} xs={12}>
                    <Card sx={{
                      minWidth: 275,
                      width: '100%',
                      height: '55vh',
                      borderRadius: '10px',
                      boxShadow: '0px 2px 10px 0px #343434'
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
              :
              <Grid container spacing={theme.spacing(1)} >
                <Grid item xl={12} xs={12}>
                  <Card sx={{
                    minWidth: 275,
                    width: '100%',
                    height: '55vh',
                    borderRadius: '10px',
                    boxShadow: '0px 2px 10px 0px #343434',

                  }}>
                    <CardContent sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      backgroundColor: '#121212',

                    }}>

                      {/*====================================================== caixa de dialog==========================================*/}

                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title" sx={{ fontSize: '50px', }}>
                          {"Deletar"}
                        </DialogTitle>
                        <DialogContent >
                          <DialogContentText id="alert-dialog-description" sx={{ color: 'white', maxWidth: '100%', width: '100vw', fontSize: '30px', textAlign: 'center', }}>
                            Tem certeza que deseja deletar a Task : {'\n'}

                            <Typography sx={{
                              textAlign: 'center',
                              fontWeight: '500',
                              fontSize: '25px',
                              color: '#FFD700',
                              textShadow: '0px 0px 7px #ff7600;',
                              letterSpacing: '1px'
                            }}>{tasks[numbTask - 1]?.description}</Typography>

                          </DialogContentText>
                        </DialogContent>

                        <DialogActions sx={{ marginTop: '20px' }}>
                          <Button variant='contained' autoFocus onClick={closeAndVerifyCancel} sx={{
                            fontWeight: '600',
                            fontSize: '15px',
                            padding: '5px 10px',
                            textAlign: 'center',
                            height: '40px',
                            color: '#fff',
                            backgroundColor: '#222222',
                            '&:hover': {
                              background: '#000'
                            }
                          }}>Cancelar</Button>
                          <Button variant='contained' autoFocus onClick={closeAndVerify} sx={{
                            fontWeight: '600',
                            fontSize: '15px',
                            textAlign: 'center',
                            height: '40px',
                            color: '#fff',
                            backgroundColor: '#ff0014',
                            '&:hover': {
                              background: '#b30808'
                            }
                          }}>DELETAR !</Button>
                        </DialogActions>
                      </Dialog>



                      {/*====================================================== caixa de dialog==========================================*/}
                      {isLoading ?
                        <Stack sx={{
                          width: '100%',
                          height: '100%',
                          color: '#52abd3',
                          display: 'flex',
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 5,
                          filter: 'blur(.5px)'
                        }} spacing={2}>
                          <Typography textAlign={'center'} pt={2} variant='h2' sx={{ fontSize: '30px', color: '#52abd3' }}>Carregando aguarde...</Typography>
                          <CircularProgress sx={{ color: '#52abd3' }} size={40} />
                        </Stack> :
                        tasks.map(dados => {
                          return (
                            <CardTarefa
                              key={dados.id}
                              task={dados}
                              onDelete={handleDelete}
                              onUpdate={handleUpdate}

                            />
                          )
                        })}

                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
          }
        </Container >
      </div>

    </>
  )
}

export default App
