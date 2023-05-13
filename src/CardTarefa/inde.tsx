import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button, colors, Card, CardContent, Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import DeleteIcon from '@mui/icons-material/Delete';

type CardTarefaProps = {
  texto?: string
}

export function CardTarefa({ texto }: CardTarefaProps) {


  return (
    <>
      <Card sx={{ width: '90%' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
          <Checkbox defaultChecked />
          <Typography m={0} variant="h6" gutterBottom>
            {texto}
          </Typography>

          <Button sx={{ textAlign: 'center' }}><DeleteIcon /></Button>
        </CardContent>
      </Card>
    </>
  )
}


