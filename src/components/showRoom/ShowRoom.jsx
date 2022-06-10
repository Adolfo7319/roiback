import React, { useState, useEffect } from "react"
import GetRooms from '../../services/GetRooms'
import List from '../list/List'
import Prereserva from '../prereserva/Prereserva'
import Reserva from '../reserva/Reserva'

const ShowRoom = () => {

  const [roomsList, setRoomsList] = useState([])
  const [prereserva, setPrereserva] = useState()
  const [reserva, setReserva] = useState()

  const [datosReserva, setDatosReserva] = useState({
    numReserva: 'Y873782',
    detalleReserva: ({
      habitacion: '',
      regimen: '',
      precio: 0,
      checkin: '',
      checkout: ''
    }),
    datosUser: ({
      nombre: '',
      apellido: '',
      email: '',
      pais: ''
    })
  })

  const [datosPrereserva, setDatosPrereserva] = useState({
    habitacion: '',
    regimen: '',
    precio: 0,
    checkin: '',
    checkout: ''
  })

  const handlePrereserva = (habitacion, regimen, precio) => {
    const checkin = roomsList.dates.checkin
    const checkout = roomsList.dates.checkout
    let auxDatosPrereserva = { habitacion, regimen, precio, checkin, checkout }

    setDatosPrereserva(auxDatosPrereserva)
    setPrereserva(true)
  }

  const handleReserva = (nombre, apellido, mail, pais) => {
    
    let auxDatosReserva = datosPrereserva
    let auxDatosUser = { nombre, apellido, mail, pais }
    
    setDatosReserva({
      ...datosReserva,
      detalleReserva: auxDatosReserva,
      datosUser: auxDatosUser
    })
    
    setPrereserva(false)
    setReserva(true)
  }


  const handleSearch = async () => {
    try {
      const dataRooms = await GetRooms()
      setRoomsList(dataRooms)

    } catch (error) {
      console.log(' Error al obtener listado de Habitaciones ', error)
      alert(' Error al obtener listado de Habitaciones ')
    }
  }

  useEffect(() => {
    handleSearch()
    setPrereserva(false)
    setReserva(false)
  }, [])

  return (
    <div>
      {roomsList && roomsList.rooms && !prereserva && !reserva &&
        <List roomsList={roomsList} handlePrereserva={handlePrereserva} />
      }

      {prereserva && !reserva &&
        <Prereserva datosPrereserva={datosPrereserva} handleReserva={handleReserva} />
      }

      {reserva && !prereserva &&
        <Reserva datosReserva={datosReserva} />
      }
    </div>
  );
}

export default ShowRoom