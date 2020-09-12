// base url of API
const API_ROOT = "http://localhost:8000/api/v1";

// generating different url with base url for different use
export const APIUrls = {
  getSearchResult: () => `${API_ROOT}/search`,
  createQuestion: () => `${API_ROOT}/question/create`,
};
