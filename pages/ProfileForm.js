import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormItem from "../auth/FormItem";
import Alert from "../common/Alert";
import MyPhotoAPI from "../api/api";
import LoadingIconHome from "../common/LoadingIconHome";

function ProfileForm({ edit, user, updateUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  async function loadUser() {
    if (!user.username) {
      // console.log("No user value yet");
      setIsLoading(true);
      return;
    }
    try {
      const apiFields = await MyPhotoAPI.getUser(user.username);
      // console.log(apiFields);
      return   {
        username: apiFields.username,
        firstName: apiFields.firstName,
        lastName: apiFields.lastName,
        email: apiFields.email
      };
    }
    catch(err) {
      // console.log("loaduser() failed with", err)
      setFormError(err);
    }
  }

  loadUser().then((userData) => {
    setFormData(userData);
    setIsLoading(false)});
  }, [user]);


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
      let status = await edit(user.username, formData);
      if (status === "success") {
        // console.log("status", status)
        updateUser(formData);
        navigate("/library");
      }  
      setFormError("Error, one of the fields in the wrong format");
    } catch (err) {
      // console.log("handleSubmit() had an error ... ")
      }
  };
    

  if(isLoading) { 
    return <LoadingIconHome />
  } else {
  return (
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
              {formError ? <Alert type="danger" messages={[formError]} /> : null}
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
              <button onClick={() => navigate("/")} className="btn btn-tertiary">
                Return
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );}
}

export default ProfileForm;