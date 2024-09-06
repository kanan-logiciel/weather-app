import PropTypes from "prop-types";

const WeatherCard = ({ city, weather }) => {
  if (!city || !weather) {
    return (
      <p className="fw-medium fs-6 pt-3">Weather data is not available yet.</p>
    );
  }

  return (
    <div
      className="p-3 border rounded w-50 bg-light position-relative"
      style={{
        backgroundImage: "url('/weather.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="fw-semibold h6">{`${city.name}, ${city.region}, ${city.country}`}</h3>
      <>
        <p className="mb-2">{weather.condition.text}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-bold fs-4 mt-2">
              {`${weather.temp_c}°C`} &nbsp;&nbsp;&nbsp; {`${weather.temp_f}°F`}
            </p>
            <p className="fs-6">Temperature</p>
          </div>
          <div>
            <img
              src={weather.condition.icon}
              alt="weather icon"
              width={70}
              height={70}
            />
          </div>
        </div>
      </>
      <p className="fw-medium fs-6 pt-3">
        Last updated: {weather.last_updated}
      </p>
    </div>
  );
};

WeatherCard.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  weather: PropTypes.shape({
    temp_c: PropTypes.number.isRequired,
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
    last_updated: PropTypes.string.isRequired,
  }),
};

export default WeatherCard;
