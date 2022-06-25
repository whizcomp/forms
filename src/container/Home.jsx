import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <Link to="/local">
          <button className="btn btn-primary btn-lg mt-5">Kenyan Form</button>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <Link to="/diaspora">
          <button className="btn btn-primary btn-lg mt-5">Diaspora Form</button>
        </Link>
      </div>
    </div>
  );
}
