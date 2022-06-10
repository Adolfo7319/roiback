import React from "react"
import './Prereserva.Styles.css'
import Form from '../form/Form'

const Prereserva = ({ datosPrereserva, handleReserva }) => {
  const periodo = datosPrereserva.checkin + ' - ' + datosPrereserva.checkout

  console.log('Prereserva: ', datosPrereserva)
  console.log('periodo: ', periodo)

  return (
    <div className="Prereserva">
      <div>
        <br />
        <div className="TituloReserva">
          Reumen de tu reserva
        </div>
        <br />

        <div className="gridReserva">
          <div className="roomTitle">
            {datosPrereserva.habitacion}
          </div>

          <div className="reservaDetail">
            <div className="centerGrid">
              <div className="textStart">
                {periodo}
              </div>
              <div className="textStart">
                <strong>{datosPrereserva.regimen}</strong>
              </div>
            </div>

            <div className="centerGrid">
              $ {datosPrereserva.precio}
            </div>

          </div>

        </div>
      </div>

      <br />

      <div>
        <div className="TituloDatos">
          TUS DATOS
        </div>
        <Form subtotal={datosPrereserva.precio} handleReserva={handleReserva} />        
      </div>
    </div>
  )
}
export default Prereserva