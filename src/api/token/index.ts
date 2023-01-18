import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant'

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key)
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token)
  }

  public clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  }
}

export default new Token()

// export const token = (token = "") => {
//   return {
//     key: "login",
//     setToken() {
//       localStorage.setItem(this.key, token);
//     },
//     getToken() {
//      return localStorage.getItem(this.key);
//     },
//     removeToken() {
//       localStorage.removeItem(this.key);
//     },
//   };
// };
