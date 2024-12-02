import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

function useHandleNotification(success, failed, message, reset) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      toast.info(message);
    } else if (failed) {
      toast.error(message);
    }
    dispatch(reset());
  }, [success, failed, message]);
}

export default useHandleNotification;
