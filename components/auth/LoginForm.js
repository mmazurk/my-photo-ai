import { useState, useContext } from "react";
import { useRouter } from "next/router";
import FormItem from "../ui/form-item";
import Alert from "../ui/Alert";
import UserContext from "../../store/user-context";

function LoginForm({ login }) {
  const router = useRouter();
  const initialState = {
    username: "",
    password: "",
  };

  const { setUser, setToken } = useContext(UserContext);

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
    console.log("formData is", formData);
    login(formData).then(function (status) {
      if (status === "success") {
        router.push("/");
      } else {
        console.log("Login did not work");
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
              {formError ? (
                <Alert type="danger" messages={[formError]} />
              ) : null}
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
