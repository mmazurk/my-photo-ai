import { useContext, useState } from "react";
import UserContext from "../../store/user-context";
import MyPhotoAPI from "../../helpers/api/my-photo-api";

function SearchPhotoResult({ prompt, url }) {
  const { user } = useContext(UserContext);
  const [isSaving, setisSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  async function saveUserPrompt() {
    let data = {
      username: user.username,
      title: "placeholder",
      date: new Date().toLocaleDateString("en-US"),
      prompt_text: prompt,
      comments: "placeholder",
    };
    console.log("Data is", data);

    try {
      setisSaving(true);
      const res = await MyPhotoAPI.savePrompt(data);
      if (res) {
        setisSaving(false);
        setIsSaved(true);
        console.log("Prompt saved successfully");
      }
    } catch (err) {
      console.log("saveUserPrompt() failed with", err);
    }
  }

  return (
    <div>
      <section className="album py-0">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="card shadow-sm">
                <div className="row">
                  <img src={url} className="img-fluid" />
                </div>
                <div className="card-body">
                  <p className="card-text">{prompt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      {isSaving ? (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          disabled
                        >
                          Saving ...
                        </button>
                      ) : isSaved ? (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          disabled
                        >
                          Saved!
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => saveUserPrompt()}
                        >
                          Save This Prompt
                        </button>
                      )}

                      <a
                        href={url}
                        download="desired-filename.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-secondary"
                        role="button"
                      >
                        Download Image
                      </a>
                    </div>
                    <small className="text-body-secondary">more text</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPhotoResult;
