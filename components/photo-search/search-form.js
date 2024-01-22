import Alert from "../ui/Alert";
import { useEffect, useState } from "react";

function SearchForm({
  promptInstructions,
  setPhotoURLStatus,
  setLoading,
  prompt,
}) {
  const initialState = prompt ? prompt : "";

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    setFormData(initialState);
  }, [initialState]);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("./api/photo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: formData,
          model: "dall-e-3",
        }),
      });
      const res = await response.json();
      console.log("Total response is", res);
      console.log("The URL is", res.data[0].url);
      setPhotoURLStatus(res.data[0].url, formData);
      setLoading(false);
    } catch (err) {
      console.error("The API did not load and you got", err);
      setFormError(err);
      setLoading(false);
    }
    setFormData(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="pt-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="display-5 fw-bold">Create A New Photo</h1>
              <p className="lead fw-normal mb-4">{promptInstructions}</p>

              <div className="row align-items-center">
                <div className="col-md-10">
                  <textarea
                    id="search"
                    className="form-control text-body-secondary"
                    rows="2"
                    placeholder="Enter search term"
                    value={formData}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2 px-0">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-md-12">
                  {formError ? (
                    <Alert type="danger" messages={[formError]} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default SearchForm;
