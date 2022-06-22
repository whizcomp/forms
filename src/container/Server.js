import axios from "axios";

const apiEndpoint = "http://localhost:4409/api/details";
const apiEndpointDiaspora = "http://localhost:4409/api/details/diaspora";

export function postDetails(data) {
  return axios
    .post(apiEndpoint, {
      data
    })
}
export function postDetailsDiaspora(data) {
  return axios
    .post(apiEndpointDiaspora, {
      data
    })
}