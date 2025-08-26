import axios from "axios";

async function getUsers() {
    const respose = await axios.get("http://localhost:5000/user/get");
    if (respose.data.flag == 1) {
        return respose.data
    } else {
        return null
    }
}


export { getUsers }