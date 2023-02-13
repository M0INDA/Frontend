import ReactDOM from "react-dom/client";
import App from "./App";
import "./shared/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import axios from "axios";

//axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      <App />
      </RecoilRoot>
    </QueryClientProvider>
  </>
);
