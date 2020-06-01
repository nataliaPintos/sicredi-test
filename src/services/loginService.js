
const user = process.env.REACT_APP_USER;
const pass = process.env.REACT_APP_PASS;

export const loginService = {
    login,
    logout,
};

function login(username, password) {
  // dumb login, just check if username and password are the same as in env, and save in localstorage
  if (username === user && password === pass) {
    const user = {
      username: username,
    }
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  return 'Login inválido!';
        
}

function logout() {
  //remove user from localhost
  localStorage.removeItem('user');
}
