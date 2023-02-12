import { useEffect, useState } from "react";
import React from 'react';
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ApiConversão from "./Data";
import PieChart from "./components/PieChart";

function App() {
  const [userReset, setReset] = useState(false)
  const [userData, setUserData] = useState([]);

  const result = async () => {
    const resul = await ApiConversão();
    setUserData({
      labels: Object.values(resul)
        .filter(({ codein }) => codein !== 'BRLT')
        .map(({ code }) => code),
      datasets: [
        {
          label: "Cotação de algumas moedas ao Real",
          data: Object.values(resul)
        .filter(({ codein }) => codein !== 'BRLT')
        .map(({ low }) => low),
          backgroundColor: ['red', 'blue'],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });
    setReset(true);
    /* setUserData(Object.values(resul)
    .filter(({ codein }) => codein !== 'BRLT')
    .map(({ low }) => low)); */

  }
  useEffect(() => {
    result();
  },[])

  return (
    <div className="App">
      {userReset ? <div><div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
        <div style={{ width: 700 }}>
          <LineChart chartData={userData} />
        </div>
        <div style={{ width: 700 }}>
          <PieChart chartData={userData} />
        </div></div> : <h1>Carregando!</h1>}
    </div>
  );
}

export default App;