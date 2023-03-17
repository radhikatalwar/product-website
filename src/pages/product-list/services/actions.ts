import { AxiosResponse } from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setLoading } from "../../../redux/global.slice";

import { RootState } from "../../../redux/store";
import { deleteApiCall, getApiCall } from "../../../common/constants/api";
import { EndPoint } from "../../../common/constants/endpoints";
import { ResponseCode } from "../../../common/constants/responseCode";
import { showAlert } from "../../../common/utils/alert";
import { setProducts } from "./slices";

export const getAllProducts =
  () => (dispatch: Dispatch<any>, getState: () => RootState) => {
    const { productQueryParameters } = getState().products;
    const { search } = productQueryParameters;

    let parameters = "/";
    if (search) parameters += `search?q=${search}&`;

    // Checking Internet connection
    if (!navigator.onLine) {
      showAlert(2, "No internet connection!");
      return;
    }

    dispatch(setLoading(true));
    getApiCall(
      `${
        parameters === "/"
          ? EndPoint.product
          : `${EndPoint.product}${parameters.slice(0, -1)}`
      }`,
      "",
      (response: AxiosResponse<any>) => {
        const { status, data } = response;
        if (status === ResponseCode.OK) {
          dispatch(setProducts(data));
        }
        dispatch(setLoading(false));
      },
      (error: any) => {
        dispatch(setLoading(false));
        showAlert(2, error);
      }
    );
  };

export const deleteProduct =
  (slugId: number) => (dispatch: Dispatch<any>, getState: () => RootState) => {
    const { productList } = getState().products;
    const { products } = productList;
    dispatch(setLoading(true));
    if (!navigator.onLine) {
      showAlert(2, "No internet connection!");
      return;
    }
    deleteApiCall(
      `${EndPoint.product}/${slugId}`,
      "",
      (response: AxiosResponse<any>) => {
        const { status, data } = response;
        if (status === ResponseCode.OK) {
          showAlert(1, `${data.title} Deleted!`);
          const filteredData = products.filter((prod) => prod.id !== slugId);
          dispatch(setProducts({ ...productList, products: filteredData }));
        }
        dispatch(setLoading(false));
      },
      (error: any) => {
        dispatch(setLoading(false));
        showAlert(2, error);
      }
    );
  };
