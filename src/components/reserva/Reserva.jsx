import React from "react"
import './Reserva.Styles.css'
import LogoOk from '../../assets/logoOk.jpg'

const Reserva = ({ datosReserva }) => {

  console.log('datosReserva: ', datosReserva)
  const periodo = datosReserva.detalleReserva.checkin + ' - ' + datosReserva.detalleReserva.checkout
  const user = datosReserva.datosUser
  const room = datosReserva.detalleReserva
  const reserva = datosReserva.numReserva

  return (
    <div className="divReserva">
      <div>
        <div className="logoReserva">
          <img src={LogoOk} className="logoOk" alt='' />
        </div>
        <div className="numReserva">
          RESERVA {reserva}
        </div>
      </div>
      <div className="resumeRoom">
        {room.habitacion}
      </div>

      <div className="divDetail">
        <div className="center">
          <div className="textLeft">
            {periodo}
          </div>
          <div className="textLeft">
            <strong>{room.regimen}</strong>
          </div>
        </div>
      </div>

      <div className="textRight">
        TOTAL: $ {room.precio}
      </div>

      <div className="resumeRoom">
        {user.nombre} {user.apellido}
      </div>

      <div className="divDetail">
        <div className="center">
          <div className="textLeft">
            {user.mail}
          </div>
          <div className="textLeft">
            <strong>{user.pais}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Reserva