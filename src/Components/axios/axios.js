import axios from "axios";

const instance = axios.create({
  // baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api", // THE API { Cloud Function }
  baseURL: "http://localhost:5001/onlineshop-app-v1/us-central1/api", // THE API { Cloud Function }
});
export default instance;
