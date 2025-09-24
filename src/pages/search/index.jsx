import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../Components/loader/spinner-loader";
import BasicLoader from "../../Components/loader/basic-loader";
import Error from "../../Components/error";
import Card from "../../Components/card";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    setLoading(true);
    const params = {
      query,
    };
    api
      .get("/search", { params })
      .then((res) => setData(res.data.data),
      ((res) => setToken(res.data.token)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  const videos = data.filter((video) => video.type === "video");

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[93vh]overflow-y-auto @container">
      {loading ? (
        <BasicLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <h2 className="text-2xl my-3">
            <span className="font-bold">{query} </span> icin sonuclar
          </h2>

          <div className="flex flex-col gap-4 ">
            {videos.map((video, key) => (
              <Card video={video} key={key} isRow />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-zinc-600 py-2 px-5 rounded-md my-10 cursor-pointer hover:bg-zinc-800 transition">Daha Fazla</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
