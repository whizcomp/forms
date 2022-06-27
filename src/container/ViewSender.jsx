import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ViewSender() {
  const params = useParams();
  console.log(params);
  // const getUser = async () => {
  //   const { data } = await getUser();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <div className="container">
      <table className="table table-striped">
        <tr>
          <td>FullNname</td>
          <td>name</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
