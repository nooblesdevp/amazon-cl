import axios from "axios";

const instance = axios.create({
  baseURL: "...", // THE API { Cloud Function }
});
export default instance;
