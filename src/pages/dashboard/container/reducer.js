import { types } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_PICKUP_PARCELS:
      return { ...state, pickupParcels: action.payload }

    case types.SET_ON_THE_WAY_PARCELS:
      return { ...state, onThewayParcels: action.payload }

    default:
      return state;
  }
};

export const key = "dashboard";
export default reducer;
