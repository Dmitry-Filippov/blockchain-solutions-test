import "./Profile.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from "react";
import { getAllCourses } from "../../utils/Api";
import Graph from "../Graph/Graph";

const Profile = ({ setLoaderActive }) => {
  const [usd, setUsd] = React.useState(50);
  const [btc, setBtc] = React.useState(25);
  const [eth, setEth] = React.useState(20);
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    setLoaderActive(true);
    getAllCourses()
      .then((res) => {
        setSum(res.BTC.USD * btc + res.ETH.USD * eth + usd);
      })
      .then(() => {
        setLoaderActive(false);
      })
      .catch((err) => {
        console.log(err);
      }); // eslint-disable-next-line
  }, [usd, btc, eth]);

  function handleUsdInc() {
    setUsd(usd + 1);
  }

  function handleUsdDec() {
    setUsd(usd - 1);
  }

  function handleBtcInc() {
    setBtc(btc + 1);
  }

  function handleBtcDec() {
    setBtc(btc - 1);
  }

  function handleEthInc() {
    setEth(eth + 1);
  }

  function handleEthDec() {
    setEth(eth - 1);
  }

  return (
    <div className="wrapper">
      <div>
        <Header />
        <main className="profile">
          <h1 className="profile__title">Мой портфель</h1>
          <div className="profile__coins-wrapper">
            <div className="profile__coin-card">
              <button
                className="profile__button"
                disabled={usd <= 0}
                onClick={handleUsdDec}
              >
                -
              </button>
              <p className="profile__coin-count">{usd} USD</p>
              <button className="profile__button" onClick={handleUsdInc}>
                +
              </button>
            </div>
            <div className="profile__coin-card">
              <button
                className="profile__button"
                disabled={btc <= 0}
                onClick={handleBtcDec}
              >
                -
              </button>
              <p className="profile__coin-count">{btc} BTC</p>
              <button className="profile__button" onClick={handleBtcInc}>
                +
              </button>
            </div>
            <div className="profile__coin-card">
              <button
                className="profile__button"
                disabled={eth <= 0}
                onClick={handleEthDec}
              >
                -
              </button>
              <p className="profile__coin-count">{eth} ETH</p>
              <button className="profile__button" onClick={handleEthInc}>
                +
              </button>
            </div>
          </div>
          <Graph coins={[usd, btc, eth]} />
          <p className="profile__sum">
            Сейчас в моём портфеле &nbsp; {usd} USD,&nbsp; {btc} BTC&nbsp;
            и&nbsp; {eth} ETH&nbsp; на&nbsp; сумму&nbsp; {sum} &nbsp;долларов.
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
