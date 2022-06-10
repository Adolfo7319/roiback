import React from "react"
import './List.Styles.css'
import Room from './room/Room'

const List = ({ roomsList, handlePrereserva }) => {

  const dateRooms = roomsList.dates
  const rooms = roomsList.rooms

  return (
    <div className="list">
      <div className="parrafoFechas">
        <div className="fechas">
          Desde {dateRooms.checkin} hasta {dateRooms.checkout}
        </div>
      </div>

      <div className="habitaciones">
        {rooms && rooms.length !== 0 &&
          rooms.map((room) =>
            <Room key={room.name} room={room} handlePrereserva={handlePrereserva} />
          )
        }
      </div>
    </div >

  )
}
export default List