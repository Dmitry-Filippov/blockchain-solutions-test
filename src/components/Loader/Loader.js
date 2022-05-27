import "./Loader.css";

const Loader = ({ isLoaderActive }) => {
  return (
    <div className={`loader ${isLoaderActive ? "" : "loader_hidden"}`}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
