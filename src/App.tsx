import { ToastContainer } from "react-toastify";

import "./App.css";
import MainContainer from "./components/container";
import Loader from "./components/loader";
import RoutesManager from "./routes";

function App() {
  return (
    <MainContainer>
      <Loader />
      <RoutesManager />
      <ToastContainer
        closeButton={false}
        autoClose={1500}
        newestOnTop
        hideProgressBar
      />
    </MainContainer>
  );
}

export default App;
