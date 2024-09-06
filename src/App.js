import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./app/signup";
import SignIn from "./app/login";
import WeatherApp from "./app/weather";
function PrivateRoute({ element: Component, ...rest }) {
  return localStorage.getItem("token") ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/weather"
            element={<PrivateRoute element={WeatherApp} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
