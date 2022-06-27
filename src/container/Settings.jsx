import React, { useEffect } from "react";
import { useState } from "react";
import { putSettings, getAdmin } from "./Server";

export default function Settings() {
  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    const { data } = await getAdmin();
    const { title: titled, description } = data[1];
    setState({ title: titled, desc: description });
  };

  const [state, setState] = useState({
    title: "",
    desc: "",
  });
  const onUpdateField = (e) => {
    const nextFormState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(nextFormState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer();
  };
  const sendToServer = async () => {
    const { title, desc: description } = state;
    const { data } = await putSettings({
      title,
      description,
    });
    console.log(data);
    if (data.affectedRows) {
      alert("displayed information has been updated");
    }
  };
  return (
    <div className=" d-flex align-items-center justify-content-center mt-5">
      <div className="card p-4 shadow-lg p-3 mb-1  rounded bg-purple">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              required
              type="title"
              onChange={onUpdateField}
              value={state.title}
              name="title"
              className="form-control"
              id="title"
              placeholder="e.g Joe Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Desc" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="Desc"
              rows="3"
              name="desc"
              value={state.desc}
              onChange={onUpdateField}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
