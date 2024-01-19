import classes from "./user-library.module.css";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../store/user-context";
import MyPhotoAPI from "../../helpers/api/my-photo-api";
import Link from "next/link";

function UserLibrary() {
  const { user, token } = useContext(UserContext);
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function loadPrompts() {
    async function getData() {
      setLoading(true);
      if (user.username) {
        MyPhotoAPI.token = token;
        let prompts = await MyPhotoAPI.getPrompts(user.username);
        const formattedPrompts = formatPrompts(prompts);
        console.log(formattedPrompts);
        setPrompts(formattedPrompts);
      }
    }
    getData();
    setLoading(false);
  }, []);

  // helper function to format prompt dates
  function formatPrompts(list) {
    return list.map((item) => {
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      };
      const formattedDate = new Date(item.date).toLocaleDateString(
        undefined,
        options
      );
      return { ...item, date: formattedDate };
    });
  }

  async function remove(promptID) {
    const originalPrompts = [...prompts];
    const refreshedPrompts = prompts.filter(
      (item) => item.promptID !== promptID
    );
    setPrompts(refreshedPrompts);
    try {
      let status = await MyPhotoAPI.deletePrompt(promptID);
    } catch (err) {
      setPrompts(originalPrompts);
    }
  }

  if (loading) {
    return <h1>Loading ... </h1>;
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <h1 className="display-5 fw-bold">Your Prompts</h1>
            <p>
              Here are the prompts that you wrote! You can modify or delete
              them.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="img-fluid rounded"
              src="https://images.unsplash.com/photo-1633783714412-c74668a14d73?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </div>

      <div className="container mt-3 p-4 bg-secondary-subtle">
        <div className="row">
          {prompts.length === 0 ? (
            <div className="col-md-6 my-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Creation Date</h3>
                  <p className="card-text">
                    You don't have any photos yet! Once you create a photo, you
                    can save the prompts that you like and they will show up on
                    this page.
                  </p>

                  <a className="btn btn-primary" href="#" role="button">
                    Go Create a Photo!
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              {prompts.map((item) => {
                return (
                  <div key={item.promptID} className="col-md-6 my-4">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">Created on {item.date}</h3>
                        <p className="card-text">{item.promptText}</p>
                        <Link
                          href={`./photos?promptText=${item.promptText}`}
                          className="btn btn-primary"
                          role="button"
                        >
                          Create Photo Again
                        </Link>
                        <Link
                          href="#"
                          className="btn btn-secondary"
                          role="button"
                        >
                          Remove Prompt
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UserLibrary;
