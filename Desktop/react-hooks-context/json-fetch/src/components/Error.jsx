import {useFetchJson} from "../hooks/useFetchJson";

const Error = () => {
    const [error] = useFetchJson('http://localhost:7070/error', {})
    return (
      <div>
        {error && <p>{error}</p>}
      </div>
    );
  };
  
  export default Error;