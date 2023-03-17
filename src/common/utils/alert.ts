import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonErr = "OOPS! something went wrong!";

const toastList = new Set();

const MAXIMUM_TOAST = 1;

export const showAlert = (type: number, message: string = commonErr) => {
  if (toast.error === undefined) {
    toast(message, {
      position: "top-left",
      autoClose: 3000,
      draggable: false,
      closeOnClick: true,
    });
  }

  switch (type) {
    case 1: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id: any = toast.success(message, {
          onClose: () => toastList.delete(id),
          icon: false,
          className:
            ".Toastify__toast--success toast-info-container toast-info-container-after",
          position: toast.POSITION.TOP_RIGHT,
        });
        toastList.add(id);
      }
      break;
    }
    case 2: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id: any = toast.error(message, {
          onClose: () => toastList.delete(id),
          position: toast.POSITION.TOP_RIGHT,
          className:
            ".Toastify__toast--error toast-info-container toast-info-container-after",
          icon: false,
        });
        toastList.add(id);
      }
      break;
    }
    case 3: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id: any = toast.info(message, {
          onClose: () => toastList.delete(id),
        });
        toastList.add(id);
      }
      break;
    }
    default:
  }
};
