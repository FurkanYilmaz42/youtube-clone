import { useEffect, useState } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../Components/loader/skeleton-loader";
import Error from "../../Components/error";
import Shorts from "../../Components/shorts";
import Card from "../../Components/card";

const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api
      .get("/home")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  
  const shortlists = data.filter((item) => item.type === "shorts_listing");
  const video = data.filter((item) => item.type === "video");


  if (loading) return <SkeletonLoader />;
  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        <Shorts data={shortlists[0]?.data} />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
          {video.map((video, key) => (
            <Card video={video} key={key} />
          ))}
        </div>
        <Shorts data={shortlists[1]?.data} />
      </div>
    </div>
  );
};

export default Feed;
