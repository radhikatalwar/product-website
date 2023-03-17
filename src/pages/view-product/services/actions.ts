import { AxiosResponse } from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading } from "../../../redux/global.slice";

import { RootState } from "../../../redux/store";
import { getApiCall } from "../../../common/constants/api";
import { EndPoint } from "../../../common/constants/endpoints";
import { ResponseCode } from "../../../common/constants/responseCode";
import { showAlert } from "../../../common/utils/alert";
import { setProductData } from "./slices";

export const getSpecificProduct =
  (slugId: string) => (dispatch: Dispatch<any>, getState: () => RootState) => {
    if (!navigator.onLine) {
      showAlert(2, "No internet connection!");
      return;
    }
    dispatch(setLoading(true));
    getApiCall(
      EndPoint.product,
      `/${slugId}`,
      (response: AxiosResponse<any>) => {
        const { status, data } = response;
        if (status === ResponseCode.OK) {
          dispatch(setProductData(data));
        }
        dispatch(setLoading(false));
      },
      (error: any) => {
        dispatch(setLoading(false));
        showAlert(2, error);
      }
    );
  };
