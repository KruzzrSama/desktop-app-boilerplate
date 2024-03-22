import axios from "axios";

export default axios.create({
    baseURL: `${process.env.URL_PROTOCOL}://${process.env.URL_DOMAIN}:${process.env.PORT}/api/`,
});