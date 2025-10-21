import React from "react";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";


const NewsCard = ({ ShowNews }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = ShowNews;


  // Format date nicely
  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Author Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
        <CiBookmark className="text-black font-extrabold text-[20px] cursor-pointer hover:text-primary" />
        <FaShareAlt className="text-gray-600 cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-lg font-bold hover:text-primary transition">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body p-4">
        <p className="text-sm text-gray-600">
          {details.slice(0, 300)}...
          <Link to={`/news-detailes/${id}`}  className="text-orange-500 font-bold cursor-pointer hover:underline">
          Read More
          </Link>
        </p>
        {/* Footer */}
        <div className="flex justify-between items-center pt-3  mt-3">
          <div className="flex items-center gap-2 text-orange-500">
            {Array(rating.number)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            <span className="text-gray-600 text-sm ml-1">
              {rating.number.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
