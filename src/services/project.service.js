import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

export const projectService = {
  getAll: () => api.get(ENDPOINTS.PROJECT.BASE),

  getById: (id) => api.get(ENDPOINTS.PROJECT.BY_ID(id)),

  create: (data) => api.post(ENDPOINTS.PROJECT.BASE, data),

  update: (id, data) => api.put(ENDPOINTS.PROJECT.BY_ID(id), data),

  delete: (id) => api.delete(ENDPOINTS.PROJECT.BY_ID(id)),

  getTasks: (projectId) => api.get(ENDPOINTS.PROJECT.TASKS(projectId)),

  addTask: (projectId, taskData) =>
    api.post(ENDPOINTS.PROJECT.TASKS(projectId), taskData),
};
