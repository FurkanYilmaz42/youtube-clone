import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../../Components/loader/spinner-loader";
import Error from "../../Components/error";
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai";

const Comments = ({ videoId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setLoading(true);

    api
      .get("/comments", { params: { id: videoId } })
      .then((res) => setComments(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [videoId]);

  if (loading) return <Spinner />;

  if (error) return null;

  console.log(comments);

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{comments.commentsCount} Yorum</h2>

      <input
        type="text"
        placeholder="Yorum ekleyiniz...."
        className="w-full bg-transparent border-b border-[#3e403f] p-2 my-3 outline-none"
      />

      <div>
        {comments.data.map((comment, key) => (
          <div key={key} className="flex gap-2 sm:gap-3 items-start px-1 py-3">
            <img
              src={comment.authorThumbnail[0]?.url}
              className="size-8 rounded-full sm:size-10"
            />

            <div>
              <h5 className="flex gap-2 items-center">
                <span className="font-bold">{comment.authorText}</span>
                <span className="text-sm text-gray-400">{comment.publishedTimeText}</span>  
              </h5>
              

              <p className="whitespace-pre-wrap">{comment.textDisplay}</p>

              <div className="flex items-center gap-5 mt-2">

                <div className="flex gap-1 items-center comments-field">
                  <AiOutlineLike />
                  <span>{comment.likesCount}</span>
                </div>

                <div className="comments-field">
                  <AiOutlineDislike />
                </div>

                <span className="comments-field font-semibold">Yanitla</span>
              
              </div>
            </div>

          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Comments;
