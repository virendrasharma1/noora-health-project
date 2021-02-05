import { create } from "apisauce";
import { clearLocalStorageAndReload } from "../helpers";

let baseURL = "http://35.184.241.192/interviews";

const api = create({
  baseURL,
  // Increase timeout to 10 minutes
  timeout: 600000,
  headers: {
    "Content-Type": "application/json"
  },
});

api.addMonitor((response) => {
  if (response.status === 401) {
    clearLocalStorageAndReload();
  }
});

export default class ApiCalls {
  static post(url, payload) {
    return api.post(url, payload).then((response) => {
      return response;
    });
  }

  static get(url) {
    return api.get(url).then((response) => {
      return response;
    });
  }
}
