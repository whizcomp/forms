import React, { useState, useEffect } from "react";
import ListTable from "./ListTable";
import { getDetails, getDiaspora } from "./Server";
import TableDiaspora from "./TableDiaspora";
export default function Admin() {
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const { data } = await getDetails();
    const { data: dia } = await getDiaspora();
    setList(data);
    setDiaspora(dia);
  };
  const [list, setList] = useState([]);
  const [diaspora, setDiaspora] = useState([]);
  const [diasporaState, setdiasporaState] = useState(true);
  const [state, setState] = useState({
    title: "Title here",
    desc: "Description here",
  });
  const onUpdateField = (e) => {
    const nextFormState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(nextFormState);
  };
  return (
    <div
      className="bg-image pt-5"
      style={{
        backgroundImage: `url(
            "https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp"
          )`,
        height: "150vh",
      }}
    >
      <div class="container">
        <div class="row">
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
          <div class="col-lg-8 col-md-4 col-sm-12">
            {diasporaState ? (
              <button
                className="btn btn-primary"
                onClick={() => setdiasporaState(false)}
              >
                view Local
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setdiasporaState(true)}
              >
                View Diaspora
              </button>
            )}
            {!diasporaState ? (
              <ListTable list={list} />
            ) : (
              <TableDiaspora list={diaspora} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
