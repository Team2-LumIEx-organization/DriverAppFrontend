import axios from 'axios'
const { REACT_APP_API } = process.env

export const getPickupParcels = async data => {
  const response = await axios.get(`${REACT_APP_API}/parcel/driver/pickup`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};


export const getOnThewayParcels = async data => {
  const response = await axios.get(`${REACT_APP_API}/parcel/driver/ontheway`,
    data)
    .then((response) => {
      return response.data
    })
  return response
};
