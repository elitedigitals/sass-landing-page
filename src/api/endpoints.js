// Centralized endpoint paths — change a backend route once, here, not in 10 files.

export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    ME: "/auth/me",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USER: {
    PROFILE: "/users/profile",
    UPDATE_PROFILE: "/users/profile",
  },
  PROJECT: {
    BASE: "/projects",
    BY_ID: (id) => `/projects/${id}`,
    TASKS: (projectId) => `/projects/${projectId}/tasks`,
  },
  PAYMENT: {
    INITIALIZE: "/payments/initialize",
    VERIFY: (reference) => `/payments/verify/${reference}`,
    WEBHOOK: "/payments/webhook",
  },
};
