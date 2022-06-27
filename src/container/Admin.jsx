import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <div>
            {diasporaState ? (
              <button
                className="btn btn-primary ms-auto"
                onClick={() => setdiasporaState(false)}
              >
                view Local
              </button>
            ) : (
              <button
                className="btn btn-primary ms-auto"
                onClick={() => setdiasporaState(true)}
              >
                View Diaspora
              </button>
            )}
            <Link to="/settings">
              <h1 className="d-inline float-end">
                <i className="bi bi-gear" width="100" height="100"></i>
              </h1>
            </Link>
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
