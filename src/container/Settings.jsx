import React from "react";

export default function Settings() {
  return (
    <div>
      <div class=" d-flex align-items-center col-lg-4 col-md-4 col-sm-12">
        <div className="card p-4 shadow-lg p-3 mb-1  rounded bg-purple">
          <form>
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
    </div>
  );
}
