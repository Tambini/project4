import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})



export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('id', resp.data.user.id);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  return resp.data.user;
}

export const registerUser = async (registerData) => {

  const resp = await api.post('/register', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  localStorage.setItem('id', resp.data.user.id);
  return resp.data.user;

}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

export const createRecipeCall = async (categoryId, postData) => {
  const resp = await api.post(`/categories/${categoryId}/recipes`, postData);
  return resp.data;
}


export const allRecipes = async () => {
  const resp = await api.get(`/recipes`);
  return resp.data;
};

export const getUserRecipes = async () => {
  const resp = await api.get('/user/recipes');
  return resp.data
}

export const getRecipe = async (categoryId, recipeId) => {
  const resp = await api.get(`/categories/${categoryId}/recipes/${recipeId}`)
  return resp.data
}


export const updateRecipe = async (categoryId, recipeId, postData) => {
  const resp = await api.put(`/categories/${categoryId}/recipes/${recipeId}`, postData);
  return resp
};

