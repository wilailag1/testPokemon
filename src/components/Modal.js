import React from "react";
import Card from "./Card";
import _ from "lodash";
const Modal = (props) => {
  const { dataArr = [], setCardSelected, cardSelected } = props;
  function selectCard(card) {
    let newData = [...cardSelected, card];
    setCardSelected(newData)
  }
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              {_.map(dataArr, (data) => {
                return (
                  <div class="col-6">
                    <Card data={data} selectCard={selectCard}/>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
