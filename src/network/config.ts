const devBaseURL = "http://47.103.221.217:8009";
const proBaseURL = "http://47.103.221.217:8009";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
