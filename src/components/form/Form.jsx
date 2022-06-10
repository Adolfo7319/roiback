import React, { useState, useEffect } from "react"
import Input from './input/Input'
import Button from '../button/Button'
import './Form.Styles.css'

const Form = ({ subtotal, handleReserva }) => {

  const [username, setUsername] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')

  const [disabledButton, setDisabledButton] = useState(true)

  const handleClickResevar = () => {
    handleReserva(username, surname, email, country)
  }

  useEffect(() => {
    if (username !== '' &&
      surname !== '' &&
      email !== '' &&
      country !== '') {

      setDisabledButton(false)
    } else {
      setDisabledButton(true)
    }
  }, [username, surname, email, country])


  return (
    <div className="searchBar">
      <div className="searchDiv">
        <Input
          name='username'
          label='Nombre'
          data={username}
          setData={setUsername}
          tipo='text'
          placeholder='Nombre'
        />

        <Input
          name='surname'
          label='Apellido'
          data={surname}
          setData={setSurname}
          tipo='text'
          placeholder='Apellido'
        />

        <Input
          name='email'
          label='Email'
          data={email}
          setData={setEmail}
          tipo='text'
          placeholder='Email'
        />

        <Input
          name='country'
          label='País'
          data={country}
          setData={setCountry}
          tipo='text'
          placeholder='País'
        />

        <br/>
        
        <div className="literalTotal">
          TOTAL
        </div>

        <div className="subtotal">
          $ {subtotal}
        </div>

      <Button
        className="bottonDiv"
        onClick={handleClickResevar}
        disabled={disabledButton}
        >
        Reservar
      </Button>

        </div>
    </div>
  )
}

export default Form