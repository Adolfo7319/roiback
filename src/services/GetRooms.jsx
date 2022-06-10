import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/rooms'

const GetRooms = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

export default GetRooms