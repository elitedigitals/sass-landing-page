import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

export const userService = {
  getProfile: () => api.get(ENDPOINTS.USER.PROFILE),

  updateProfile: (data) => api.put(ENDPOINTS.USER.UPDATE_PROFILE, data),
};
