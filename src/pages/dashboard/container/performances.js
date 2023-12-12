import actions from "./actions";
import {
  getPickupParcels,
  getOnThewayParcels
} from "./api";

const dashboardformances = dispatch => {
  const getPickupParcelsContext = async data => {
    try {
      const result = await getPickupParcels(data);
      if (result) {
        dispatch(actions.setPickupParcels(result))
      }
    } catch (e) {
      console.error(e);
    }
  }
  const getOnThewayParcelsContext = async data => {
    try {
      const result = await getOnThewayParcels(data);
      if (result) {
        dispatch(actions.setOnThewayParcels(result))
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    getPickupParcelsContext,
    getOnThewayParcelsContext
  };
};

export default dashboardformances;
