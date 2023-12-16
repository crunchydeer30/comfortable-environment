import axios from "axios";
import { HOST_NAME } from "../../../config";
import { Submission } from "../../../types";

const BASE_URL = `${HOST_NAME}/api/submissions`;

const getAll = async () : Promise<Submission[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
}

const getById = async (id: string): Promise<Submission> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

export default {
  getAll,
  getById
}