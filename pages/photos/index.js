import SearchForm from "../../components/photo-search/search-form";
import SearchExamples from "../../components/photo-search/search-examples";
import SearchPhotoResult from "../../components/photo-search/search-photo-result";
import LoadingIcon from "../../components/icons/LoadingIcon";
import { useState } from "react";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

function SearchPage() {
  const [photoURL, setPhotoURL] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const urlParam = router.query.promptText;
  const { user, token, isLoading } = useAuth();

  // console.log("Current state of user is", user);
  // console.log("Current state of token in", token);

  function setPhotoURLStatus(url, prompt) {
    setPhotoURL(url);
    setPrompt(prompt);
  }

  return (
    <div>
      {loading ? (
        <>
          <LoadingIcon />
          <SearchExamples />
        </>
      ) : photoURL ? (
        <>
          <SearchForm
            promptInstructions="Nice work! Here is the photo you generated. If you want to generate another photo you can type another prompt in this box. You can also save your prompt to you user library or download the image."
            setPhotoURLStatus={setPhotoURLStatus}
            setLoading={setLoading}
            prompt={null}
          />
          <SearchPhotoResult prompt={prompt} url={photoURL} />
        </>
      ) : (
        <>
          <SearchForm
            promptInstructions="Type a prompt in the search box below to create images like the sample
              images below! Make sure and use a descriptive prompt."
            setPhotoURLStatus={setPhotoURLStatus}
            setLoading={setLoading}
            prompt={urlParam}
          />
          <SearchExamples />
        </>
      )}

      <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="/searches">Back to top</a>
          </p>
          <p className="mb-1">Thank you for using © AI Photo Library!!</p>
        </div>
      </footer>
    </div>
  );
}

export default SearchPage;
