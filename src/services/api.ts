import axios from "axios";
import { NEXTAUTH_URL } from "../config/consts";

export default axios.create({
  baseURL: NEXTAUTH_URL,
});
