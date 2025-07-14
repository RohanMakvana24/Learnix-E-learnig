import React, { useRef, useEffect } from "react";
import {
  FaLock,
  FaClone,
  FaCube,
  FaVectorSquare,
  FaChartLine,
  FaPaintBrush,
  FaLaptopCode,
  FaGlobe,
  FaBook,
  FaBrain,
  FaCamera,
  FaMusic,
  FaAppleAlt,
  FaUserTie,
  FaBriefcase,
  FaBullhorn,
  FaRobot,
  FaLanguage,
  FaMicrochip,
  FaRunning,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  { icon: <FaLock />, title: "Marketing", courses: 174 },
  { icon: <FaClone />, title: "Productivity", courses: 126 },
  { icon: <FaCube />, title: "Lifestyles", courses: 214 },
  { icon: <FaVectorSquare />, title: "Design", courses: 161 },
  { icon: <FaChartLine />, title: "Business", courses: 180 },
  { icon: <FaPaintBrush />, title: "Art & Creativity", courses: 102 },
  { icon: <FaLaptopCode />, title: "Programming", courses: 310 },
  { icon: <FaGlobe />, title: "Geography", courses: 85 },
  { icon: <FaBook />, title: "Education", courses: 232 },
  { icon: <FaBrain />, title: "Psychology", courses: 97 },
  { icon: <FaCamera />, title: "Photography", courses: 112 },
  { icon: <FaMusic />, title: "Music", courses: 198 },
  { icon: <FaAppleAlt />, title: "Health & Fitness", courses: 133 },
  { icon: <FaUserTie />, title: "Leadership", courses: 87 },
  { icon: <FaBriefcase />, title: "Career", courses: 150 },
  { icon: <FaBullhorn />, title: "Public Speaking", courses: 73 },
  { icon: <FaRobot />, title: "AI & Robotics", courses: 66 },
  { icon: <FaLanguage />, title: "Languages", courses: 215 },
  { icon: <FaMicrochip />, title: "Hardware", courses: 94 },
  { icon: <FaRunning />, title: "Sports", courses: 142 },
];

const TopCategory = () => {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  // Scroll left/right with buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  // Mouse wheel scroll (horizontal)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // Click to scroll a category into view
  const handleClick = (index) => {
    const element = itemRefs.current[index];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 pt-10 pb-16 bg-[#fafafa] font-sans">
      <div className="flex justify-center">
        <span className="text-pink-500 text-xs font-medium bg-pink-100 rounded-full px-4 py-1 select-none">
          Favourite Course
        </span>
      </div>
      <h2 className="mt-3 text-center font-extrabold text-2xl sm:text-3xl text-[#111111]">
        Top Category
      </h2>
      <p className="mt-2 text-center text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
        The right course, guided by an expert mentor, can provide invaluable
        insights and practical skills.
      </p>

      {/* Scroll Buttons */}
      <div className="flex justify-between items-center mt-6 relative">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="mt-8 flex space-x-4 overflow-x-auto no-scrollbar px-2 sm:px-0 max-w-full mx-auto scroll-smooth snap-x snap-mandatory"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleClick(index)}
              className="cursor-pointer flex-shrink-0 w-40 sm:w-44 bg-white rounded-lg p-5 text-center snap-start shadow hover:shadow-lg transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f0f0fa] mx-auto mb-3 text-[#3a2e7f] text-xl">
                {cat.icon}
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#111111]">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {cat.courses} Courses
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TopCategory;
