import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/onlineshop-app-v1/us-central1/api", // THE API { Cloud Function }
});
export default instance;
