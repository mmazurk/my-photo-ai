import { useState, useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";
import MyPhotoAPI from "../helpers/api/my-photo-api";
import UserContext from "../store/user-context";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser, token, setToken } = useContext(UserContext);

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      setIsLoading(true);
      let localStorageToken = localStorage.getItem("myAItoken");
      if (localStorageToken) {
        try {
          let { username } = jwtDecode(localStorageToken);
          MyPhotoAPI.token = localStorageToken;
          let currentUser = await MyPhotoAPI.getUser(username);
          setToken(localStorageToken);
          setUser(currentUser);
        } catch (err) {}
      }
      setIsLoading(false);
    }
    getCurrentUser();
  }, []);
  return { user, setUser, token, setToken, isLoading };
};

export default useAuth;
