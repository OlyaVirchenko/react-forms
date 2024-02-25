import Loader from "./Loader";
import { useFetchJson } from "../hooks/useFetchJson";

const Loading = () => {
    const [loading] = useFetchJson('http://localhost:7070/loading', {})
    return (
      <div>
        {loading && <Loader/>}
      </div>
    );
  };
  
export default Loading;