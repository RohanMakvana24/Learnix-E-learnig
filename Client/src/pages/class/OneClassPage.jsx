import React, { useState } from "react";
import {
  FaUser,
  FaTachometerAlt,
  FaCog,
  FaAddressBook,
  FaTimesCircle,
} from "react-icons/fa";
import StreamCom from "../../component/oneclass/StreamCom";
import { Helmet } from "react-helmet";

const tabs = [
  { id: "Streams", label: "Streams", icon: <FaTachometerAlt /> },
  { id: "Classwork", label: "Classwork", icon: <FaUser /> },
  { id: "People", label: "People", icon: <FaCog /> },
];

const OneClassPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Streams":
        return <StreamCom />;
      case "Classwork":
        return <p className="text-gray-700">This is your profile overview.</p>;
      case "People":
        return <p className="text-gray-700">Adjust your preferences here.</p>;
    }
  };

  return (
    <>
      <Helmet>
        <title>[Class Name] | Explore & Enroll | Learnix</title>
      </Helmet>
      <div className=" mx-auto p-4">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-[#1e293b]">
            Subject Modules
          </h1>
          <nav className="flex items-center text-sm text-gray-500 mt-1 space-x-1 select-none">
            <span>/</span>
            <span>Classrooms</span>
            <span>/</span>
            <span className="font-semibold text-gray-700"> ClassName</span>
          </nav>
        </header>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs.map((tab) => (
              <li key={tab.id} className="me-2">
                <button
                  disabled={tab.disabled}
                  onClick={() => !tab.disabled && setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group transition ${
                    tab.disabled
                      ? "text-gray-400 cursor-not-allowed dark:text-gray-500"
                      : activeTab === tab.id
                      ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                >
                  <span className="me-2">{tab.icon}</span>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="bg-white  border border-gray-200">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default OneClassPage;
