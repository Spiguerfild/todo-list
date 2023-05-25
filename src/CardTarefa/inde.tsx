import { Typography, Button, Card, CardContent, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Task } from '../types';


// type CardTarefaProps = {
//   texto?: string,
//   idProp?: number,
//   checked: boolean,
//   onDelete: (id: number) => void;
//   onUpdate: (task: Task) => void;
// }

type CardTarefaProps = {
  task: Task,
  onDelete: (id: number) => void;
  onUpdate: (task: Task) => void;
  teste: (id: number) => void;
}




export function CardTarefa({ task, onDelete, onUpdate, teste }: CardTarefaProps) {

  if (!task.id) return null;

  const [isCheck, setIsCheck] = useState(task.done);

  const handleCheck = () => {
    isCheck ? setIsCheck(false) : setIsCheck(true);

    onUpdate({ ...task, done: isCheck ? false : true })

  }



  return (
    <>
      <Card sx={{ maxHeight: '70px', width: '90%', marginBottom: '20px', boxShadow: '0px 0px 4px 0px #52b2ec', }}>
        <CardContent sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':last-child': { padding: '15px 0px 15px 0px', } }}>
          <Checkbox checked={isCheck} onClick={handleCheck} />
          <Typography m={0} variant="h6" gutterBottom>
            {task.description}
          </Typography>

          <Button variant='contained' onClick={() => onDelete(Number(task.id))} sx={{ textAlign: 'center', height: '100px', border: '1px solid #52b2ec ' }}><DeleteIcon sx={{ fontSize: '30px' }} /></Button>
        </CardContent>
      </Card>
    </>
  )
}


