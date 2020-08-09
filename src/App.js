import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Card from "./components/Card";
import _ from "lodash";
import Modal from "./components/Modal";
const App = () => {
  const [dataArr, setDataArr] = useState([]);
  const [cardSelected, setCardSelected] = useState([]);
  useEffect(async () => {
    let data = await queryData();
    debugger;
    computeData(data);

    debugger;
  }, []);

  function computeData(data) {
    let newData = _.map(data, (d) => {
      let sumDm = computeDamage(d.attacks);
      let newEle = {
        hp: d.hp > 100 ? 100 : 0,
        strength:
          d.attacks && d.attacks.length >= 1 ? d.attacks.length * 50 : 0,
        weakness:
          d.weaknesses && d.weaknesses.length >= 1
            ? d.weaknesses.length * 100
            : 0,
        damage: sumDm,
        // happiness: 5,
      };
      let happi = computeHappi(newEle.hp, newEle.damage, newEle.weakness);
      newEle["happiness"] = happi;
      return {
        ...d,
        newData: newEle,
      };
    });
    setDataArr(newData);
    debugger;
  }

  function computeDamage(arrAtt = []) {
    let sumAtt = 0;
    _.forEach(arrAtt, (att) => {
      let re = new RegExp(/[$-/:-?{-~!"^_`\[\]]/);
      let reS = new RegExp(/[a-z]/);
      let dm = att.damage.replace(re, "");
      dm = att.damage.replace(reS, "");

      sumAtt += parseInt(dm) || 0;
    });
    return sumAtt;
  }

  function computeHappi(hp, dm, wk) {
    let happi = ((hp / 10) + (dm / 10) + 10 - wk) / 5;
    return happi;
  }

  return (
    <div>
      <Modal dataArr={dataArr} setCardSelected={setCardSelected} cardSelected={cardSelected}/>
      <div class="row">
        {_.map(cardSelected, (data) => {
          return (
            <div class="col-6">
              <Card data={data} mode="VIEW" />
            </div>
          );
        })}
      </div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        +
      </button>
    </div>
  );
};

async function queryData() {
  let url = "http://localhost:3030/api/cards";
  try {
    let res = await axios.get(url);
    let newData = res.data;
    return newData.cards;
  } catch (error) {
    alert(error);
  }
  debugger;
}

export default App;
