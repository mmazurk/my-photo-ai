import { useState, useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";
import MyPhotoAPI from "../helpers/api/my-photo-api";
import UserContext from "../store/user-context";
import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser, token, setToken } = useContext(UserContext);

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      let localStorageToken = localStorage.getItem("myAItoken");
      if (localStorageToken) {
        try {
          let { username } = jwtDecode(localStorageToken);
          MyPhotoAPI.token = localStorageToken;
          let currentUser = await MyPhotoAPI.getUser(username);
          setToken(localStorageToken);
          setUser(currentUser);
        } catch (err) {
          router.push("/auth");
        }
      }
      setIsLoading(false);
    }
    getCurrentUser();
  }, []);
  return { user, setUser, token, setToken, isLoading };
};

export default useAuth;
