import React, { useRef, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "The Complete Business and Management Course",
    instructor: "David Benitz",
    rating: 5.0,
    reviews: 210,
    tag1: "Master-",
    tag2: "React JS",
    category: "Productivity",
    categoryColor: "indigo",
    image:
      "https://storage.googleapis.com/a1aa/image/0c6f1cd5-256e-4db5-090d-6ea652267558.jpg",
  },
  {
    id: 2,
    title: "Learn & Create ReactJS Tech Fundamentals Apps",
    instructor: "Calvin Johnsen",
    rating: 5.0,
    reviews: 154,
    tag1: "Interactive",
    tag2: "Interview",
    category: "Development",
    categoryColor: "gray",
    image:
      "https://storage.googleapis.com/a1aa/image/60339e28-857f-4f6c-d610-cdb8a8c7ac61.jpg",
  },
  {
    id: 3,
    title: "Build Creative Arts & media Course Completed",
    instructor: "Edith Dorsey",
    rating: 4.9,
    reviews: 178,
    tag1: "Life Style",
    tag2: "Mentor-",
    category: "Lifestyles",
    categoryColor: "yellow",
    image:
      "https://storage.googleapis.com/a1aa/image/0f5ce3c1-88f0-4829-8395-8442a0969c20.jpg",
  },
  {
    id: 4,
    title: "The Complete Business and Management Course",
    instructor: "David Benitz",
    rating: 5.0,
    reviews: 210,
    tag1: "Design",
    tag2: "XD",
    category: "Productivity",
    categoryColor: "indigo",
    image:
      "https://storage.googleapis.com/a1aa/image/30c1c210-6284-405a-32da-940f2bb09dbc.jpg",
  },
];

const FeaturedCourses = () => {
  const scrollRef = useRef(null);

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

  return (
    <section className="bg-white text-gray-900 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold rounded-full px-3 py-1">
          What's New
        </span>
      </div>
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-2">
        Featured Courses
      </h2>
      <p className="text-center text-xs sm:text-sm text-gray-600 mb-8 max-w-xl mx-auto">
        Discover our featured courses, specially curated to help you gain
        in-demand skills
      </p>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory sm:justify-center"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="snap-start flex-shrink-0 w-full sm:w-72 border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col mx-auto"
          >
            <div className="relative rounded-t-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 object-cover"
              />
              <div className="absolute top-3 left-3 bg-white rounded-full p-1 border border-gray-300">
                <FaHeart className="text-pink-500 text-xs" />
              </div>
              <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs font-semibold rounded-full px-3 py-1">
                {course.tag1}
              </div>
              <div
                className={`absolute top-12 right-3 bg-white text-black text-xs font-semibold rounded-full px-3 py-1`}
              >
                {course.tag2}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-600 mb-1 space-x-2">
                <img
                  src="https://storage.googleapis.com/a1aa/image/02a80392-6adc-4fca-06b2-386de975791e.jpg"
                  alt="Instructor"
                  className="rounded-full"
                  width="16"
                  height="16"
                />
                <span>{course.instructor}</span>
                <span
                  className={`ml-auto bg-${course.categoryColor}-100 text-${course.categoryColor}-700 text-[9px] font-semibold rounded-full px-2 py-0.5`}
                >
                  {course.category}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base leading-tight mb-1">
                {course.title}
              </h3>
              <div className="flex items-center text-xs text-yellow-500 mb-3 space-x-1">
                <FaStar />
                <span className="text-yellow-600 font-semibold">
                  {course.rating}
                </span>
                <span className="text-gray-400">
                  ({course.reviews} Reviews)
                </span>
              </div>
              <button
                type="button"
                className="mt-auto self-start bg-black text-white text-xs font-semibold rounded-full px-4 py-1 hover:bg-gray-900 transition"
              >
                Add to Cart &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-2 h-2 rounded-full bg-gray-300 border border-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-pink-500 border border-pink-500"></span>
      </div>
    </section>
  );
};

export default FeaturedCourses;
