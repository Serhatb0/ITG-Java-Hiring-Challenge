import axiosInstance from "@/config/axiosInstance";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
const { IntlProvider } = require("react-intl");

const useAxiosAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${session?.accessToken}`;
        }

        return config;
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
    };
  }, [session]);

  return axiosInstance;
};

export default useAxiosAuth;
