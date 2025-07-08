import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ClassCard = ({ card, index }) => {
  const [dropdownIndex, setdropdownIndex] = useState(null);
  const toggleDropdown = (idx) => {
    setdropdownIndex((prev) => (prev === idx ? null : idx));
  };
  return (
    <>
      <div
        key={index}
        className="border border-gray-200 rounded-md p-4 flex flex-col justify-between min-h-[180px]"
      >
        <div>
          <div className="relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-32 object-cover rounded mb-3"
            />

            {/* Dropdown Icon Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(index);
              }}
              className="absolute top-2 right-2 z-20 hover:bg-gray-100 rounded-full p-1"
            >
              <BsThreeDotsVertical className="text-gray-600" />
            </button>

            {/* Dropdown Menu */}
            {dropdownIndex === index && (
              <div className="absolute top-10 right-2 z-30 bg-white border border-gray-200 rounded shadow-md w-32">
                <ul className="text-sm text-gray-700">
                  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                    View
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                    Edit
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2 text-red-600 cursor-pointer">
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-xs text-gray-800 leading-tight max-w-[85%]">
              {card.title}
            </h3>
          </div>
          <p className="text-[10px] text-gray-500 leading-tight mb-3">
            {card.description}
          </p>
        </div>
        <div className="flex justify-between items-center text-[10px] text-gray-500">
          <div className="flex items-center space-x-2">
            <img
              src={card.avatar}
              alt={`Avatar of ${card.leader}`}
              className="rounded-full"
              width="20"
              height="20"
            />
            <div className="leading-tight">
              <p className="text-[10px] text-gray-700 font-semibold leading-tight">
                {card.leader}
              </p>
              <p>{card.role}</p>
            </div>
          </div>
          <div className="text-right leading-tight">
            <p>Deadline</p>
            <p className="font-semibold">{card.deadline}</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-gray-500 mt-3 border-t border-gray-100 pt-2">
          <div className="flex items-center space-x-1">
            <i className="fas fa-tasks text-green-400"></i>
            <span>Tasks : {card.tasks}</span>
          </div>
          <div className="flex items-center -space-x-2">
            <span className="bg-[#f97316] text-white text-[9px] font-semibold rounded-full px-1.5 ml-1">
              {card.team[0]}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
