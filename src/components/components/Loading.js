import "./Loading.css";

const Loading = () => {
  return (
    <div className="App">
      <div className="Loading"></div>
      <button className="btn" onClick={() => window.location.reload()}>
        CANCEL
      </button>
    </div>
  );
};

export default Loading;
