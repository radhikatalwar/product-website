import { AxiosResponse } from "axios";
import { Dispatch } from "@reduxjs/toolkit";

import { setLoading } from "../../../redux/global.slice";
import { postApiCall } from "../../../common/constants/api";
import { EndPoint } from "../../../common/constants/endpoints";
import { ResponseCode } from "../../../common/constants/responseCode";
import { showAlert } from "../../../common/utils/alert";

export const productAdd =
  (values: any, callback: () => void) => (dispatch: Dispatch<any>) => {
    if (!navigator.onLine) {
      showAlert(2, "No internet connection!");
      return;
    }
    dispatch(setLoading(true));
    postApiCall(
      EndPoint.productAdd,
      values,
      (response: AxiosResponse<any>) => {
        const { status, data } = response;
        if (status === ResponseCode.OK) {
          showAlert(1, `${data.title} Added!`);
          callback();
        }
        dispatch(setLoading(false));
      },
      (error: any) => {
        dispatch(setLoading(false));
        showAlert(2, error);
      }
    );
  };
