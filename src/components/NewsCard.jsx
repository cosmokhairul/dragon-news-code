import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating } =
    news;

  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <button className="text-gray-500 hover:text-primary cursor-pointer flex gap-1">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-primary cursor-pointer ">
          {title}
        </h2>
      </div>

      {/* Image */}

      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Description */}

      <div className="px-4 text-accent text-sm font-light">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news-details/${id}`}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-5 border-t border-gray-300 p-6">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar className="text-lg" />
          <span className="font-semibold text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaRegEye className="text-base" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
