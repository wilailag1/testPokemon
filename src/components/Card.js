import React from "react";

const Card = (props) => {
  const { data = {}, selectCard, mode = "ADD" } = props;
  if (data.name === "Cubone") {
    let a = data;
    debugger;
  }

  return (
    <div class="card">
      {/* {data.imageUrl || ''} */}
      {mode === "ADD" && (
        <div
          class="card-header"
          id="addBtn"
          onClick={(e) => {
            selectCard(data);
          }}
        >
          <span style={{ color: "orange" }}>ADD</span>
        </div>
      )}

      <div class="card-body">
        {data.name}
        <div class="row">
          <div class="col-4">
            <img src={data.imageUrl || ""} class="card-img-top" />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-4">hp</div>
              <div class="col-8">
                {/* {data.newData && data.newData.hp} */}
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: data.newData && `${data.newData.hp}%` }}
                    aria-valuenow={data.newData && data.newData.hp}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">str</div>
              <div class="col-8">
                {/* {data.newData && data.newData.hp} */}
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: data.newData && data.newData.strength }}
                    aria-valuenow={data.newData && data.newData.strength}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">weak</div>
              <div class="col-8">
                {/* {data.newData && data.newData.hp} */}
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: data.newData && data.newData.weakness }}
                    aria-valuenow={data.newData && data.newData.weakness}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
