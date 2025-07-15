import React, { useRef, useEffect } from "react";
import {
  FaHeart,
  FaStar,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Edith Dorsey",
    role: "Accountant",
    rating: 4.9,
    reviews: 20,
    image:
      "https://storage.googleapis.com/a1aa/image/0f041768-20a2-4880-a25c-a98eb584998a.jpg",
  },
  {
    id: 2,
    name: "Joyce Pence",
    role: "Lead Designer",
    rating: 4.8,
    reviews: 157,
    image:
      "https://storage.googleapis.com/a1aa/image/1cc52e9a-5dc7-41a1-aa89-6b10faae3519.jpg",
  },
  {
    id: 3,
    name: "Edith Dorsey",
    role: "Accountant",
    rating: 4.9,
    reviews: 20,
    image:
      "https://storage.googleapis.com/a1aa/image/0f041768-20a2-4880-a25c-a98eb584998a.jpg",
  },
  {
    id: 4,
    name: "Carol Magner",
    role: "Lead Designer",
    rating: 5.0,
    reviews: 218,
    image:
      "https://storage.googleapis.com/a1aa/image/bce94dc9-6ab3-47eb-f3ba-da7ec8238de0.jpg",
  },
];

const TrendingInstructors = () => {
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
          Trending Instructors
        </span>
      </div>
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-2">
        Top Class & Professional Instructors
      </h2>
      <p className="text-center text-xs sm:text-sm text-gray-600 mb-8 max-w-xl mx-auto">
        Empowering Change: Stories from Those Who Took the Leap
      </p>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="snap-start flex-shrink-0 w-full sm:w-72 border border-gray-200 rounded-lg p-5 relative flex flex-col items-center"
          >
            <button
              aria-label="Favorite"
              className="absolute top-3 left-3 text-gray-400 hover:text-gray-600"
            >
              <FaHeart className="text-sm" />
            </button>
            <div className="relative w-28 h-28 mb-4">
              <img
                alt={instructor.name}
                className="rounded-full object-cover w-28 h-28 bg-[#E6E5F3]"
                src={instructor.image}
              />
              <img
                alt="Verified"
                className="absolute bottom-0 right-0 w-5 h-5 rounded-full border border-white bg-green-500"
                src="https://storage.googleapis.com/a1aa/image/6b72d239-f6a6-4637-d47d-54af3913456d.jpg"
              />
            </div>
            <h3 className="font-semibold text-gray-900 text-base mb-0.5">
              {instructor.name}
            </h3>
            <p className="text-gray-500 text-xs mb-2">{instructor.role}</p>
            <p className="text-gray-400 text-xs mb-2 font-semibold">
              (Reviews {instructor.reviews}) {instructor.rating}
              <span className="text-yellow-400 ml-1 text-sm">★</span>
            </p>
            <div className="flex space-x-2 text-gray-600 text-xs">
              <FaTelegramPlane />
              <FaYoutube />
              <FaTwitter />
              <FaInstagram />
              <FaFacebookF />
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

export default TrendingInstructors;
