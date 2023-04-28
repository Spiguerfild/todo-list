import { ChangeEvent, useState } from 'react'

import './App.css'

function App() {
  const [player, setPlayer] = useState<any>({
    name: 'Caio',
    nickName: 'Piga',
    score: 10
  });


  const handleClick = () => {
    const newScore = player.score + 1
    setPlayer({ ...player, score: newScore })

  }

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value
    setPlayer({ ...player, name: newName })
  }

  const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    const newNickName = event.target.value
    setPlayer({ ...player, nickName: newNickName })
  }

  return (
    <>
      <h1>Imutabilidade</h1>
      <h2>Dados do Jogador</h2>
      <p>
        <h3>Score: {player.score}</h3>
        <button onClick={handleClick} style={{ width: '150px', backgroundColor: 'black', color: 'white' }}>+</button>
      </p>
      <p>
        <label >player Name: </label>
        <input value={player.name} onChange={handleChangeName} type="text" name='name' />
      </p>
      <p>
        <label >player NickName: </label>
        <input type="text" value={player.nickName} onChange={handleChangeNickName} name='nickName' />
      </p>
      <hr />
      <h3> {player.name} | {player.nickName} </h3>
    </>
  )
}

export default App
