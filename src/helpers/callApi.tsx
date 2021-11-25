import { APIResponse } from "../interfaces/APIS";
import { ToastAndroid } from "react-native";

const callAPI = (URL: string, method: string, dataBody?: Object) : Promise<any> => {
  return new Promise((resolve, reject) => {
    const bodyData: Object = dataBody ? {body: JSON.stringify(dataBody)} : {};

    const headers: HeadersInit_ = {'Content-Type': 'application/json'};

    const options: RequestInit = {method, ...bodyData, headers};

    fetch(URL, options)
      .then(resp => resp.json()).then((response : APIResponse) => {
        if (response.status === "ok") {
          resolve(response);
        } else {
          ToastAndroid.show(response.message ?? "error occured!", ToastAndroid.SHORT);
          reject(response);
        }
      })
      .catch(function (error) {
        ToastAndroid.show(error.message ?? "error occured!", ToastAndroid.SHORT);
        reject(error);
      });
  });
};

export default callAPI;
