import axios from "axios";
import { environment } from "../config/environment";

export const FloorService = {
  getFloors: async () => {
    let { data } = await axios.get(`${environment.API_URL}/floors`);
    return data;
  },
};
