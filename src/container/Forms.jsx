import React from "react";
import Content from "./LocalContent";

export default function Forms() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class=" d-flex align-items-center col-lg-6 col-md-4 col-sm-12">
            <div className="card p-4 shadow-lg p-3 mb-1  rounded bg-purple">
              <h1>Lorem ipsum dolor sit amet </h1>
              <p>
                consectetur adipisicing elit. Illo incidunt necessitatibus
                consequatur doloribus eaque consequuntur nesciunt. Numquam
                placeat totam officia voluptate ad dolorem exercitationem
                voluptatum repudiandae quas, odio cum dolores hic deleniti
                accusamus natus nihil ullam doloremque harum laboriosam cumque.
                Ducimus fuga perspiciatis molestiae doloremque.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}
