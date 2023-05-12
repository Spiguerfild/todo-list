import { useTheme, TextField, Grid, AppBar, Toolbar, Typography, Container, Button, colors, Card, CardContent, Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type CardTarefaProps = {
  texto?: string
}

export function CardTarefa({ texto }: CardTarefaProps) {


  return (
    <>
      <Card>
        <CardContent>
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
          <Typography variant="h6" gutterBottom>
            {texto}
          </Typography>

          <Button></Button>
        </CardContent>
      </Card>
    </>
  )
}


