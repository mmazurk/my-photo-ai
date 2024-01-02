import "bootstrap/dist/css/bootstrap.css";
import { UserContextProvider } from "../store/user-context";

function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default App;
