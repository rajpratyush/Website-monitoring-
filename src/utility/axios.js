import axios from "axios";
const baseURL = "http://localhost:8000";
// const baseURL = "https://downtime-monitoring1.herokuapp.com/";
const instance = axios.create({ baseURL });

export default instance;
