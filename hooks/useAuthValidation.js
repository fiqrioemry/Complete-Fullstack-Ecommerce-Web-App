import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthRoute, NonAuthRoute, ProtectedRoute } from "@/config";

const useAuthValidation = (user, pathname, setPageLoading) => {
  const router = useRouter();

  useEffect(() => {
    if (!user && !pathname) {
      setPageLoading(true);
    }

    if (user) {
      if (NonAuthRoute.includes(pathname)) {
        router.push("/");
      } else if (
        user.userRole !== "Admin" &&
        ProtectedRoute.includes(pathname)
      ) {
        router.push("/");
      } else {
        setPageLoading(false);
      }
    } else {
      if (AuthRoute.includes(pathname) || ProtectedRoute.includes(pathname)) {
        router.push("/login");
      } else {
        setPageLoading(false);
      }
    }
  }, [user, pathname, router, setPageLoading]);
};

export default useAuthValidation;
