const BASE_URL = 'http://127.0.0.1:8081/api/'
export default {
  BASE_URL
}

import axios from "axios";
// axios.defaults.headers.common["FYP-AUTH-TOKEN"] = localStorage.getItem("accessToken");
axios.defaults.headers.common["FYP-AUTH-TOKEN"] = "adpadmin123789";