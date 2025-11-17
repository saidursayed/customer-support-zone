import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Card = ({ ticket, handleClickedCard }) => {
  const handleClick = () => {


    handleClickedCard(ticket)
  };

  return (
    <div className="bg-white rounded-sm p-4 cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">{ticket.title}</h2>
        <div
          className={`flex items-center gap-1.5 font-medium px-3 py-1 rounded-full ${
            ticket.status == "Open"
              ? "text-[#0B5E06] bg-[#B9F8CF]"
              : "text-[#9C7700] bg-[#F8F3B9]"
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full block ${
              ticket.status == "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
            }`}
          ></span>
          <span>{ticket.status}</span>
        </div>
      </div>
      <p className="mt-3 mb-4 text-[#627382]">{ticket.description}</p>
      <div className="flex justify-between items-center">
        <div className="font-medium text-sm flex justify-between gap-4">
          <span className="text-[#627382]">{ticket.id}</span>
          <span
            className={`${
              ticket.priority == "HIGH PRIORITY"
                ? "text-[#f83044]"
                : "text-[#febb0c]"
            }`}
          >
            {ticket.priority}
          </span>
        </div>
        <div className="text-sm text-[#627382] flex justify-between gap-4">
          <span>{ticket.customer}</span>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendar} className="text-xl" />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
