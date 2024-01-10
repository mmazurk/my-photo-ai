import Alert from "../ui/Alert";
import { useState } from "react";

function SearchForm({ promptInstructions, setPhotoURLStatus, setLoading }) {
  const initialState = "";

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);

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
      const data = await response.json();
      console.log(data);
      setPhotoURLStatus(data[0].url, formData);
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
              <h1 className="display-5 fw-bold">Search for Photo</h1>
              <p className="lead fw-light">{promptInstructions}</p>

              <div className="row">
                <div className="col-md-10">
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Enter search term"
                    value={formData}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary w-100">
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
