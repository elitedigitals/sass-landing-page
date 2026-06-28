import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

export const paymentService = {
  // Hits your backend, which talks to Paystack and returns an authorization_url
  initialize: (data) => api.post(ENDPOINTS.PAYMENT.INITIALIZE, data),

  // Called on the callback page after Paystack redirects back
  verify: (reference) => api.get(ENDPOINTS.PAYMENT.VERIFY(reference)),
};
