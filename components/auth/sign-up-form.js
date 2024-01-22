import { useRouter } from "next/router";
import { useState } from "react";
import FormItem from "../ui/form-item";

function SignUpForm() {
  const router = useRouter();
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
    // signUp(formData).then(() => navigate("/"));
  };

  return (
    <div className="centered">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
        <h1 className="display-5 fw-bold">Sign Up</h1>
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
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="alert alert-info mt-3" role="alert">
          <span className="fw-bold">Please Note:</span> Signups are currently
          offline; this page is for demonstration purposes only. Please press
          Submit to return to the home page!
        </div>
      </div>
    </div>
  );
}

//   function registerUser() {
//     signUp({
//       username: "test1",
//       password: "password",
//       firstName: "TestFirst",
//       lastName: "TestLast",
//       email: "test1@test.com",
//     }).then(() => navigate("/"));
//   }

//   return (
//     <div>
//       <h1 className="mb-3">This is the SignUp page.</h1>
//       <button onClick={registerUser}>Sign Up</button>
//     </div>
//   );
// }

export default SignUpForm;
