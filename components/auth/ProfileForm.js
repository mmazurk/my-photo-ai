import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormItem from "../ui/form-item";
import Alert from "../ui/Alert";
import useAuth from "../../hooks/useAuth";
import LoadingIconHome from "../icons/LoadingIconHome";

function ProfileForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);
  const { user, token, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !token) {
      router.push("/auth");
    }
    if (token) {
      const { prompts, ...rest } = user;
      setFormData({
        ...rest,
      });
    }
  }, [isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormError(
        "This page is for illustration only, please select Home Page in Nav Bar"
      );
      // let status = await edit(user.username, formData);
      // if (status === "success") {
      //   updateUser(formData);
      //   navigate("/");
      // }
      // setFormError("Error, one of the fields in the wrong format");
    } catch (err) {}
  };

  if (isLoading) {
    return <LoadingIconHome />;
  } else {
    return (
      <>
        <div className="centered">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
            <h1 className="display-5 fw-bold">Make Profile Changes</h1>
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
                  <button className="btn btn-tertiary">Return</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileForm;
