import { useEffect, useState } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../Components/loader/skeleton-loader";
import Error from "../../Components/error";
import Shorts from "../../Components/shorts";
import Card from "../../Components/card";
import { useSearchParams } from "react-router-dom";

const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  
  useEffect(() => {
    setLoading(true);

    const url = !selectedCategory ? "/home" : selectedCategory === "/trendler" ? "/trending" : `/search?query=${selectedCategory}`;

    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const shortlists = data.filter((item) => item.type === "shorts_listing");
  const video = data.filter((item) => item.type === "video");

  if (loading) return <SkeletonLoader />;
  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        {shortlists[0] && <Shorts data={shortlists[0]?.data} />}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
          {video.map((video, key) => (
            <Card video={video} key={key} />
          ))}
        </div>
        {shortlists[1] && <Shorts data={shortlists[1]?.data} />}
      </div>
    </div>
  );
};

export default Feed;
