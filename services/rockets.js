import { API_BASE_URL } from "../helpers/const";

async function getAllRockets() {
  try {
    const response = await fetch(`${API_BASE_URL}/v4/rockets`);
    const res = await response.json();

    return res;
  } catch(error) {
    alert(error)
  }
}

export {
  getAllRockets,
}
