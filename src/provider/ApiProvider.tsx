import * as React from "react";
import {
  QueryClient,
  QueryClientProvider,
  onlineManager,
} from "@tanstack/react-query";

interface ApiClientContextValue {
  baseURL: string;
}

const ApiClientContext = React.createContext<ApiClientContextValue>({
  baseURL: "",
});

type ApiClientProviderProps = {
  baseURL: string;
  queryClient?: QueryClient;
  onlineEventListener?: Parameters<typeof onlineManager.setEventListener>[0];
  children?: React.ReactNode;
};

const ApiClientProvider = ({
  baseURL,
  queryClient = new QueryClient(),
  onlineEventListener = undefined,
  children,
}: ApiClientProviderProps): JSX.Element => {
  React.useEffect(() => {
    if (onlineEventListener) {
      onlineManager.setEventListener(onlineEventListener);
    }
  }, []);

  return (
    <ApiClientContext.Provider value={{ baseURL }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};

function useBaseURL(): string {
  const client = React.useContext(ApiClientContext);
  return client.baseURL;
}

export { ApiClientProvider, useBaseURL };
