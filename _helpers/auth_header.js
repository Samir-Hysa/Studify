export function authHeader() {
  //return the authorization header with jwt token

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.toke) {
    return { Authorization: "Baerer" + user.token };
  } else {
    return {};
  }
}
