import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getResfreshToken } from "@/store/action/AuthAction";

function useHandleAuth(user, accessToken, setPageLoading) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      if (!accessToken) {
        dispatch(getResfreshToken());
        setPageLoading(false);
      }
    } else {
      setPageLoading(false);
    }
  }, []);
}

export default useHandleAuth;
