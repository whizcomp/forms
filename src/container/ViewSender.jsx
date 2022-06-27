import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "./Server";
export default function ViewSender() {
  const { place, id } = useParams();
  const [state, setState] = useState({});
  const getInfo = async () => {
    const { data } = await getUser(place, id);
    setState(data[0]);
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="container">
      <h5 className="text-center p-5">Comments</h5>

      <table className="table table-striped table-bordered p-5">
        <tr className="p-5">
          <td className="pe-5">FullName</td>
          <td className="pe-5">{state && state.name}</td>
        </tr>
        <tr className="p-5">
          <td className="pe-5">Contact</td>
          <td className="pe-5">
            {state && state.email ? state.email : state.phone}
          </td>
        </tr>
        <tr className="p-5">
          <td className="pe-5">Comments</td>
          <td className="pe-5">{state && state.comments}</td>
        </tr>
      </table>
    </div>
  );
}
