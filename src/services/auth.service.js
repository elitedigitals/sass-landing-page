import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

export const authService = {
  login: (credentials) => api.post(ENDPOINTS.AUTH.LOGIN, credentials),

  signup: (data) => api.post(ENDPOINTS.AUTH.SIGNUP, data),

  getProfile: () => api.get(ENDPOINTS.AUTH.ME),

  logout: () => api.post(ENDPOINTS.AUTH.LOGOUT),

  forgotPassword: (email) =>
    api.post(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),

  resetPassword: (token, newPassword) =>
    api.post(ENDPOINTS.AUTH.RESET_PASSWORD, { token, newPassword }),
};
