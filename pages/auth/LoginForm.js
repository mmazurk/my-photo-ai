import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormItem from "./FormItem";
import Alert from "../common/Alert";

function LoginForm({ login }) {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData).then(function (status) {
      if (status === "success") {
        navigate("/");
      } else {
        // console.log("Login did not work");
        setFormError(status);
      }
    });
  };

  return (
    <div className="centered">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
        <h1 className="display-5 fw-bold">Login To Your Account</h1>
        <div className="card bg-secondary-subtle">
          <div className="card-body">
            <form>
              {Object.keys(formData).map((item) => (
                <FormItem
                  field={`${item}`}
                  value={formData[item]}
                  handleChange={handleChange}
                  key={item}
                />
              ))}
              {formError ? <Alert type="danger" messages={[formError]} /> : null}
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;