import Success from "./components/Success";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="container pt-5">
      <div className="alert alert-primary text-center" role="alert">
        <Success/>
      </div>
      <div className="alert alert-danger text-center" role="alert">
        <Error />
      </div>
      <div className="alert alert-info text-center" role="alert">
        <Loading/>
      </div>
    </div>
  );
}

export default App;