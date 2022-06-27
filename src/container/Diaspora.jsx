import React, { useEffect } from "react";
import { useState } from "react";
import { getAdmin } from "./Server";

import Content from "./Content";

export default function Diaspora() {
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
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(
          "https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp"
        )`,
        height: "150vh",
      }}
    >
      <div class="container">
        <div class="row">
          <div class=" d-flex align-items-center col-lg-6 col-md-6 col-sm-12">
            <div className="card p-4 shadow-lg p-3 mb-1  rounded bg-purple">
              <h1>{state.title}</h1>
              <p>{state.desc}</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}
