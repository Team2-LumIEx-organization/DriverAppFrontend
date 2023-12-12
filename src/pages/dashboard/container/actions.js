export const types = {
  SET_PICKUP_PARCELS: 'SET_PICKUP_PARCELS',
  SET_ON_THE_WAY_PARCELS: 'SET_ON_THE_WAY_PARCELS',
};

const actions = {
  setPickupParcels: payload => ({
    type: types.SET_PICKUP_PARCELS,
    payload
  }),
  setOnThewayParcels: payload => ({
    type: types.SET_ON_THE_WAY_PARCELS,
    payload
  })
};

export default actions;
