import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "@/store/action/AuthAction";

function useHandleAuth(user, accessToken, setPageLoading) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      // jika user sudah login
      if (!accessToken) {
        // jika user sudah login dan accessToken sudah kadarluarsa maka (fetch utk mendapatkan refreshtoken)
        dispatch(getUserInfo()); // <- dalam proses get user info akan menggunakan axios interceptor, jika accesstoken tidak ada maka akan dilakukan refresh menggunakan refresh token
        setPageLoading(false);
      } else {
        // jika sudah ada accessToken maka setPageloading = true
        setPageLoading(false);
      }
    } else {
      setPageLoading(false);
    }
  }, []);
}

export default useHandleAuth;

// import axios from "axios";
// import Cookies from "js-cookie";

// const instance = axios.create({
//   baseURL: "http://localhost:3300",
//   withCredentials: true,
// });

// instance.interceptors.request.use((config) => {
//   const token = Cookies.get("accessToken");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       try {
//         const { data } = await instance.get("/api/auth/refresh");
//         Cookies.set("accessToken", data.data, {
//           secure: true,
//           expires: 15 / 1440,
//         });

//         error.config.headers["Authorization"] = `Bearer ${data.data}`;
//         return instance.request(error.config);
//       } catch (refreshError) {
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default instance;