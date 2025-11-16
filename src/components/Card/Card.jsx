import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Card = ({elem}) => {
  return (
    <div className="bg-white w-[513px] h-auto rounded-sm p-4">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">{elem.title}</h2>
        <div
          className={`flex items-center gap-1.5 font-medium px-3 py-1 rounded-full ${
            elem.status == "Open"
              ? "text-[#0B5E06] bg-[#B9F8CF]"
              : "text-[#9C7700] bg-[#F8F3B9]"
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full block ${
              elem.status == "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
            }`}
          ></span>
          <span>{elem.status}</span>
        </div>
      </div>
      <p className="mt-3 mb-4 text-[#627382]">{elem.description}</p>
      <div className="flex justify-between items-center">
        <div className="font-medium text-sm flex justify-between gap-4">
          <span className="text-[#627382]">{elem.id}</span>
          <span
            className={`${
              elem.priority == "HIGH PRIORITY"
                ? "text-[#f83044]"
                : "text-[#febb0c]"
            }`}
          >
            {elem.priority}
          </span>
        </div>
        <div className="text-sm text-[#627382] flex justify-between gap-4">
          <span>{elem.customer}</span>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendar} className="text-xl" />
            <span>{elem.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
