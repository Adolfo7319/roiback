import React from "react"
import './RoomPrices.Styles.css'

const RoomPrices = ({ prices, id, handlePrereserva }) => {

  const handleSelectRoom = (prices, id) => {
    handlePrereserva(id, prices.name, prices.price)
  }

  return (
    <div className="regimen">
      {prices && prices.price !== 0 &&
        <div key={prices.name} className="regimenDetail">
          <div className="left">{prices.name}</div>
          <div>{prices.price}</div>
          <div>
            <button className="button" onClick={(e) => handleSelectRoom(prices, id)}>
              <span>
                Reservar
              </span>
            </button>
          </div>
        </div>
      }
    </div>
  )
}
export default RoomPrices