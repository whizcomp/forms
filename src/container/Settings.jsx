import React from "react";
import { useState } from "react";
import { putSettings } from "./Server";

export default function Settings() {
  const [state, setState] = useState({ title: "", desc: "" });
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
    if (data.affectedRows) {
      alert("displayed information has been updated");
    }
  };
  return (
    <div class=" d-flex align-items-center justify-content-center col-lg-4 col-md-4 col-sm-12">
      <div className="card p-4 shadow-lg p-3 mb-1  rounded bg-purple">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="title" className="form-label">
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
            <label for="Desc" className="form-label">
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
