/*
 * @Author: lihuan
 * @Date: 2020-10-28 14:37:57
 * @LastEditTime: 2021-07-02 21:08:29
 * @Email: 17719495105@163.com
 */
const devBaseURL = "http://47.103.221.217:8009";
// http://192.168.3.10:8082/
// const devBaseURL = "http://localhost:3000/";
const proBaseURL = "http://47.102.99.109:7104";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
