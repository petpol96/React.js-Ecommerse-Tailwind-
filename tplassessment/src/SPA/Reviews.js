import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

function Reviews(props) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const ratingHandler = () => {
    if (props.rating!== undefined) {
      return (
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    props.rating.rate > rating
                      ? "text-gray-900"
                      : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{props.rating.rate} out of 5 stars</p>
            <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
              {props.rating.count} reviews
            </a>
          </div>
        </div>
      );
    }
  };
  return ratingHandler();
}

export default Reviews;
