import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})



export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  return resp.data.user;
}

export const registerUser = async (registerData) => {

  const resp = await api.post('/register', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  return resp.data.user;

}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}


export const allRecipes = async () => {
  const resp = await api.get(`/categories/${id}/recipes`);
  return resp.data;
};


export const getRecipe = async (id) => {
  const resp = away.api.get(`/categories/${id}/recipes/${id}`)
  return resp.data
}

export const createRecipe = async recipeData => {
  const resp = await api.post(`/categories/${id}/recipes`, recipeData);
  return resp.data;
};


export const updatePost = async (id, recipeData) => {
  const resp = await api.put(`/categories/${id}/recipes/${id}`, recipeData);
  return resp
};

