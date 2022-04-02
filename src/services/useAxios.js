import axios from "axios";
import { Toast } from "../utils";
import { useEffect, useState } from "react";

export const useAxios = (
  apiURL,
  method = "GET",
  postMethodData,
  encodedToken
) => {
  const [isLoaderLoading, setLoadingState] = useState(false);
  const [serverResponse, setServerResponse] = useState({});
  const [isErrorOccured, seErrorState] = useState(null);

  const getData = async () => {
    try {
      setLoadingState(true);
      let serverResponse;
      switch (method) {
        case "GET":
          serverResponse = await axios.get(apiURL, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        case "POST":
          serverResponse = await axios.post(apiURL, postMethodData, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        case "DELETE":
          serverResponse = await axios.delete(apiURL, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        default:
          break;
      }
      setServerResponse(serverResponse);
    } catch (error) {
      seErrorState(true);
      Toast({ type: "error", msg: `${error} Something went wrong.` });
    } finally {
      setLoadingState(false);
    }
  };
  useEffect(() => {
    getData();
  }, [apiURL, postMethodData, method]);
  return {
    isLoaderLoading,
    serverResponse,
    isErrorOccured,
  };
};
