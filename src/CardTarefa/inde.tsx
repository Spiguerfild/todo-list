import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button, colors, Card, CardContent, Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import { exclude, getById } from '../service/api';

type CardTarefaProps = {
  texto?: string,
  idProp?: React.MouseEvent<HTMLButtonElement>
}




export function CardTarefa({ texto, idProp }: CardTarefaProps) {

  const [isCheck, setIsCheck] = useState(false);


  // const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {

  //   if (idProp === undefined) {
  //     idProp = 0;
  //     console.log('provavel erro em id do objeto...')
  //   }
  //   getById(idProp)

  //   exclude(idProp)

  // }

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    idProp = event.currentTarget.parentNode;

  }

  const handleCheck = () => {
    isCheck ? setIsCheck(false) : setIsCheck(true);
  }



  return (
    <>
      <Card sx={{ width: '90%', marginBottom: '20px', boxShadow: '0px 0px 4px 0px #52b2ec', }}>
        <CardContent sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':last-child': { padding: '15px 0px 15px 0px', } }}>
          <Checkbox checked={isCheck} onClick={handleCheck} />
          <Typography m={0} variant="h6" gutterBottom>
            {texto}
          </Typography>

          <Button variant='contained' onClick={handleDelete} sx={{ textAlign: 'center', height: '100px', border: '1px solid #52b2ec ' }}><DeleteIcon /></Button>
        </CardContent>
      </Card>
    </>
  )
}


