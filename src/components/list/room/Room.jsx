import React from "react"
import RoomPrices from '../roomPrices/RoomPrices'
import './Room.Styles.css'

const Room = ({ room, handlePrereserva }) => {
  const roomName = room.name
  const roomPrices = room.boards

  return (
    <div className="containerRoom">
      <div className="TituloRoom">
        {roomName}
      </div>

      {roomPrices && roomPrices.length !== 0 &&
        roomPrices.map((regPrice) =>
          <RoomPrices
            key={regPrice.name}
            id={roomName}
            prices={regPrice}
            handlePrereserva={handlePrereserva} />
        )
      }
    </div>
  )
}

export default Room