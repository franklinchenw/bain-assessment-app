import axios from "axios";
import { getUserIP } from "@/utils/network";

const decorateAxiosForApi = ({ apiBaseUrl }: any = {}) => {
  const decoratedAxios = axios.create({ baseURL: apiBaseUrl });
  // TODO: Add interceptor config
  return decoratedAxios;
};

let apiAxios = decorateAxiosForApi({ apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL });

export const responseDataHandler = (data: any) => {
  if (data?.statusCode >= 200 || data?.status < 300) {
    return data?.data;
  } else {
    if (data?.message) throw new Error(data?.message);

    throw new Error("Unknown error!");
  }
};

export const callApi = async (
  api: string,
  { method = "GET", data, headers, params }: { method?: any; data?: any; headers?: any; params?: any } = {}
) => {
  // Get IP address
  const ipAddress = await getUserIP();
  console.log("ipAddress", ipAddress);

  return apiAxios({
    url: api,
    method,
    data,
    params,
    headers: {
      ...headers,
      "X-Request-Id": ipAddress,
    },
  });
};
