const API_BASE_URL = "https://ecom-db-laravel.onrender.com";
export const API_ENDPOINTS = {
  login: `${API_BASE_URL}/auth/login`,
  add_category: `${API_BASE_URL}/webapi/add-category`,
  get_category: `${API_BASE_URL}/webapi/get-category`,
  get_subcategory: `${API_BASE_URL}/webapi/get-subcategory`,
  get_systemrole: `${API_BASE_URL}/webapi/get-systemrole`,
  add_systemrole: `${API_BASE_URL}/webapi/add-systemrole`,
  add_category: `${API_BASE_URL}/webapi/update-category`,
  add_systemrole: `${API_BASE_URL}/webapi/update-systemrole`,
};
