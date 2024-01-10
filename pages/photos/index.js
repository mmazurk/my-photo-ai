import SearchForm from "../../components/photo-search/search-form";
import SearchExamples from "../../components/photo-search/search-examples";
import SearchPhotoResult from "../../components/photo-search/search-photo-result";
import LoadingIcon from "../../components/icons/LoadingIcon";
import { useState } from "react";

function SearchPage() {
  const [photoURL, setPhotoURL] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

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
            promptInstructions="Here is the photo you generated."
            setPhotoURLStatus={setPhotoURLStatus}
            setLoading={setLoading}
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
