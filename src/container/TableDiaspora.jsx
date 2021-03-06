import React from "react";
import { Link } from "react-router-dom";

import createDate from "./DateReader";
export default function TableDiaspora({ list }) {
  console.log(list);
  return (
    <div>
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Amount</th>
            <th scope="col">Banking</th>
            <th scope="col">Agent Name</th>
            <th scope="col">Pledged Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.Fullname}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
              <td>{list.amount}</td>
              <td>{list.banking}</td>
              <td>{list.Agent_Name}</td>
              <td>{list.pledgedate ? createDate(list.pledgedate) : "paid"}</td>
              <td>
                <Link to={`diaspora/${list.id}`}>view more</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
