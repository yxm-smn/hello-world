import axios from "axios";
const instance = axios.create({
  baseURL: "url",
  timeout: 1000,
  headers: { name: "请求头值" },
});
//请求拦截器
instance.interceptors.request.use(
  function(config) {},
  function(err) {}
);
//响应拦截器
instance.interceptors.response.use(
  function(response) {},
  function(err) {}
);
export const get = (url, params, config) =>
  instance.get(url, { params }, config);

export const post = (url, data, config) => instance.post(url, data, config);

export const remove = (url, config) => instance.delete(url, config);

export const put = (url, data, config) => instance.put(url, data, config);
