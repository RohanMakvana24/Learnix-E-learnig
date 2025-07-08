import React from "react";
import { IoClose } from "react-icons/io5";

const AddJoinClass = ({ isOpen, onClose, children, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-sm shadow-xl border border-gray-200 p-4  relative animate-slideIn">
        {/* Close Button */}
        <div className="flex items-start justify-between border-b pb-3 mb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/150/150360.png" // Replace with actual icon path
              alt="con"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
              <p className="text-xs text-gray-500">
               {description}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 -mt-2 -mr-1"
          >
            <IoClose className="text-3xl mt-3" />
          </button>
        </div>
        <div>{children}</div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-700 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700">
            Send Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJoinClass;
