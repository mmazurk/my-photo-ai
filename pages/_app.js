import "bootstrap/dist/css/bootstrap.css";
import { UserContextProvider } from "../store/user-context";
import Navbar from "../components/layout/navbar";

function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default App;
