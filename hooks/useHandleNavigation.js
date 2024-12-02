import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NonAuthRoute = ["/register", "/login"];
const AuthRoute = [
  "/cart",
  "/cart/shipment",
  "/user",
  "/user/setting",
  "/user/address",
  "/user/transaction",
];

const ProtectedRoute = ["/admin"];

function useHandleNavigation(user, pathname) {
  const router = useRouter();
  useEffect(() => {
    if (user) {
      if (NonAuthRoute.includes(pathname)) {
        router.push("/"); // user in login status trying to access login / register page
      } else if (ProtectedRoute.includes(pathname)) {
        router.push("/"); // user in login status trying to access admin page
      }
    } else if (!user) {
      if (AuthRoute.includes(pathname)) {
        router.push("/"); // user not in login status trying to access /cart, /shipment, '/dashboard'
      } else if (ProtectedRoute.includes(pathname)) {
        router.push("/"); // user not in login status trying to access admin page
      }
    }
  }, [user, pathname]);
}

export default useHandleNavigation;
