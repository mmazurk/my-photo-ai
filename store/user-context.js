import { createContext, useState } from "react";

const UserContext = createContext({
  user: {},
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export function UserContextProvider(props) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  const context = {
    user: user,
    token: token,
    setUser: setUser,
    setToken: setToken,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
