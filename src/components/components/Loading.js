import "./Loading.css";

const Loading = () => {
  setTimeout(() => {
    window.location.reload();
    window.alert("404 Not Found");
  }, 5000);
  return <div className="Loading"></div>;
};

export default Loading;
