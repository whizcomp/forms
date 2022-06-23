import React from "react";
import createDate from "./DateReader";
export default function ListTable({ list }) {
  console.log(list);

  return (
    <div>
      <table class="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Phone number</th>
            <th scope="col">Amount</th>
            <th scope="col">Mpesa number</th>
            <th scope="col">payment</th>
            <th scope="col">Agents</th>
            <th scope="col">Pledged Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((list) => (
            <tr key={list.id}>
              <td>{list.id}</td>
              <td>{list.Fullname}</td>
              <td>{list.phone}</td>
              <td>{list.amount}</td>
              <td>{list.mpesa}</td>
              <td>{list.payment}</td>
              <td>{list.Agent_Name}</td>
              <td>{list.pledgedate ? createDate(list.pledgedate) : "paid"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
