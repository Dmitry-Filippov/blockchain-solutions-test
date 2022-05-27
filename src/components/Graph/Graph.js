import "./Graph.css";

const Graph = ({ coins }) => {
  const usd = coins[0];
  const btc = coins[1];
  const eth = coins[2];
  const sum = usd + btc + eth;
  const usdPart = sum / usd;
  const btcPart = sum / btc;
  const ethPart = sum / eth;
  return (
    <div className="graph">
      <div className="graph__usd" style={{ width: `${100 / usdPart}%` }}>
        USD
      </div>
      <div className="graph__btc" style={{ width: `${100 / btcPart}%` }}>
        BTC
      </div>
      <div className="graph__eth" style={{ width: `${100 / ethPart}%` }}>
        ETH
      </div>
    </div>
  );
};

export default Graph;
