import axios from "axios";

const apiEndpoint = "http://localhost:4409/api/details";
const apiDiaspora = "http://localhost:4409/api/details/diaspora";
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
export function getDetails() {
  return axios.get(apiEndpoint)
}
export function getDiaspora() {
  return axios.get(apiDiaspora);
}