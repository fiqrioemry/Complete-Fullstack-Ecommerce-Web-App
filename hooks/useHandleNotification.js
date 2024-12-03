import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function useHandleNotification(success, failed, message, reset) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (success && message !== "") {
      toast.info(message);
    } else if (failed && message !== "") {
      toast.error(message);
    }
    dispatch(reset);
  }, [dispatch, success, failed, message, reset]);
}

export default useHandleNotification;
