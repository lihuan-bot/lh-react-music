// const devBaseURL = "http://47.103.221.217:8009";
// http://192.168.3.10:8082/
const devBaseURL = "http://47.102.99.109:7104";
const proBaseURL = "http://47.102.99.109:7104";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
