import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})



export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  // localStorage.setItem('name', resp.data.user.name);
  // localStorage.setItem('email', resp.data.user.email);
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  // try {
  const resp = await api.post('/register', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  return resp.data.user;
  // } catch (e) {
  //   console.log(e.response);
  //   if (e.response.status === 422) {
  //     return { errorMessage: "E-mail is already taken please use a new e-mail address" }
  //   }
  // }
}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

