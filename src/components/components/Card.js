import "./Card.css";

const Card = ({ desc, location, country, icon, temp, humidity, p, speed }) => {
  const img = `https://openweathermap.org/img/w/${icon}.png`;
  return (
    <div>
      <div className="Card">
        <h1>
          {location}, {country}
        </h1>
        <div className="temp">
          <strong>{Math.floor(temp - 273.15)}</strong> <span>°C</span>
        </div>
        <img src={img} alt="icon" />
        <h2>{desc}</h2>
        <h4>HUMIDITY : {humidity} %</h4>
        <h4>PRESSURE : {p} Pa</h4>
        <h4>WIND SPEED : {speed} kmph</h4>
      </div>
      <button className="btn" onClick={() => window.location.reload()}>
        BACK
      </button>
    </div>
  );
};

export default Card;
