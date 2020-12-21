import axios from "axios";
import { environment } from "../config/environment";

export const ElevatorsService = {
  getElevators: async () => {
    let { data } = await axios.get(`${environment.API_URL}/elevators`);
    return data;
  },
  updateLocation: async (dataUpdate, id) => {
    let { data } = await axios.put(
      `${environment.API_URL}/elevators/${id}`,
      dataUpdate
    );
    return data;
  },
};
