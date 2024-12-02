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

function useHandleNavigation(user, pathname, setPageLoading) {
  const router = useRouter();
  useEffect(() => {
    if (user !== null) {
      if (NonAuthRoute.includes(pathname)) {
        router.push("/");
      } else if (ProtectedRoute.includes(pathname)) {
        router.push("/");
      }
      setPageLoading(false);
    } else {
      if (AuthRoute.includes(pathname)) {
        router.push("/");
        setPageLoading(false);
      } else if (ProtectedRoute.includes(pathname)) {
        router.push("/");
      }
      setPageLoading(false);
    }
  }, [user, pathname]);
}

export default useHandleNavigation;
