import axios from "axios";

const client = axios.create({
    baseURL: "https://apitest.iqfulfillment.com/v1/test",
    headers:{
        "Accept":"application/json"
    }
});

export default client;