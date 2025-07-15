import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import ClassCard from "../../component/home/ClassCard";
import AddJoinClass from "../../component/modals/home/AddJoinClass";
import { Helmet } from "react-helmet";
import TopCategory from "../../component/home/TopCategory";
import FeaturedCourses from "../../component/home/FeaturedCourse";
import TrendingInstructors from "../../component/home/TrendingInstructors";

const HomePage = () => {
  const cards = [
    {
      title: "Office Management",
      description:
        "An office management app project streamlines administrative tasks by integrating tools for scheduling, communication, and task…",
      avatar:
        "https://storage.googleapis.com/a1aa/image/19dba524-2562-45e6-60ec-d655dd680819.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Anthony Lewis",
      role: "Project Leader",
      deadline: "14 Jan 2024",
      tasks: "6/10",
      team: ["+1"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    {
      title: "Clinic Management",
      description:
        "A clinic management project streamlines patient records, appointments, and billing processes to improve operational efficiency.",
      avatar:
        "https://storage.googleapis.com/a1aa/image/f0c21523-0c74-4d7d-bdf8-446f6799b6cd.jpg",
      image:
        "https://img.freepik.com/premium-vector/man-workplace-with-computer-table-phone_316839-1950.jpg?w=996",
      leader: "Sophie Headrick",
      role: "Project Leader",
      deadline: "15 Jan 2024",
      tasks: "7/10",
      team: ["+2"],
    },
    // Add more cards similarly or map them from API
  ];
  const [CreateClassModal, setCreateClassModal] = useState(false);
  const [JoinClassModal, setJoinClassModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Learnix Home – Discover, Learn, and Succeed</title>
      </Helmet>
      <div className="w-screen">
        <section className="relative bg-gradient-to-r py-16  from-[#2f2a7c] via-[#3f33d1] to-[#2f2a7c] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-0 flex flex-col md:flex-row items-center justify-between overflow-visible">
          {/* Left Content */}
          <div className="max-w-xl w-full text-white relative z-10 mt-10 sm:-ml-14">
            <span className="inline-block bg-[#2f2a7c] text-xs font-semibold rounded-full px-3 py-1 mb-4">
              The Leader in Online Learning
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Find the Best{" "}
              <span className="text-[#ff4c5b] underline decoration-[#ff4c5b] decoration-2">
                Courses
              </span>{" "}
              from
              <br />
              the Best{" "}
              <span className="text-[#ff4c5b] underline decoration-[#ff4c5b] decoration-2">
                Mentors
              </span>{" "}
              Around the World
            </h1>
            <p className="text-sm sm:text-base font-normal mb-8 max-w-md">
              Our specialized online courses are designed to bring the classroom
              experience to you, no matter where you are.
            </p>

            {/* Search bar */}
            <form className="flex items-center bg-white rounded-lg overflow-hidden max-w-md">
              <select
                aria-label="Select Category"
                className="text-xs sm:text-sm font-semibold text-gray-700 px-4 py-3 border-r border-gray-200 cursor-pointer outline-none"
              >
                <option>Select Category</option>
                <option>Design</option>
                <option>Business</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
              <input
                type="text"
                placeholder="Search for Courses, Instructors"
                className="flex-grow text-xs sm:text-sm text-gray-400 px-4 py-3 outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="bg-[#ff4c5b] text-white p-3 flex items-center justify-center"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 max-w-md justify-between text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <i className="fas fa-user-graduate text-purple-500 text-lg"></i>
                <div>
                  <span className="text-purple-400 font-bold">10K</span>
                  <br />
                  <span className="text-white font-normal">Online Courses</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-award text-cyan-400 text-lg"></i>
                <div>
                  <span className="text-cyan-400 font-bold">6K</span>
                  <br />
                  <span className="text-white font-normal">
                    Certified Courses
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-chalkboard-teacher text-green-400 text-lg"></i>
                <div>
                  <span className="text-green-400 font-bold">2K</span>
                  <br />
                  <span className="text-white font-normal">
                    Experienced Tutors
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="relative mt-12 md:mt-0 w-200ox max-w-sm md:max-w-md flex justify-center md:justify-end">
            <div
              aria-hidden="true"
              className="absolute top-8 left-8 w-full max-w-sm md:max-w-md h-[370px] rounded-lg bg-gray-300 shadow-lg"
            ></div>
            <div
              aria-hidden="true"
              className="absolute top-4 left-4 w-full max-w-sm md:max-w-md h-[390px] rounded-lg bg-gray-200 shadow-lg"
            ></div>
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm md:max-w-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/a1aa/image/3ab0c51e-9dc2-44b7-ff6b-28d4e5cf4c61.jpg"
                  alt="Course"
                  className="w-full h-[280px] object-cover"
                />
                <button
                  aria-label="Add to favorites"
                  className="absolute top-3 left-3 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 bg-white"
                >
                  <i className="far fa-heart text-sm"></i>
                </button>
                <button
                  aria-label="Course logo"
                  className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold"
                >
                  N
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/d4470520-b216-469b-2f91-786d3ed77af2.jpg"
                      alt="David Benitz"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-gray-600 text-sm">David Benitz</span>
                  </div>
                  <span className="text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1">
                    Productivity
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-1">
                  The Complete Business and Management Course
                </h3>
                <div className="flex items-center space-x-1 text-yellow-400 text-xs mb-2">
                  <i className="fas fa-star"></i>
                  <span className="font-semibold text-black text-xs">5.0</span>
                  <span className="text-gray-500">(210 Reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff4c5b] font-bold text-sm">$168</span>
                  <button
                    aria-label="Add to Cart"
                    className="bg-black text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1"
                  >
                    <span>Add to Cart</span>
                    <i className="fas fa-chevron-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Star */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 text-yellow-400"
            style={{ fontSize: "2.5rem" }}
          >
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 12 2.5Zm5.303 3.197a.75.75 0 0 1 1.06 1.06l-1.768 1.768a.75.75 0 0 1-1.06-1.06l1.768-1.768Zm-10.606 0 1.768 1.768a.75.75 0 0 1-1.06 1.06L5.637 6.757a.75.75 0 0 1 1.06-1.06ZM12 17.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm0-1.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Zm0 5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm7.25-7.25a.75.75 0 0 1 .75.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-14.5 0a.75.75 0 0 1 .75.75H3a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1-.75-.75Zm11.44 6.69a.75.75 0 0 1 1.06 1.06l-1.768 1.768a.75.75 0 0 1-1.06-1.06l1.768-1.768Zm-8.88 0 1.768 1.768a.75.75 0 0 1-1.06 1.06L5.637 19.757a.75.75 0 0 1 1.06-1.06Z" />
            </svg>
          </div>
        </section>
        {/* Category  */}
        <TopCategory />
        {/* Featured Course */}
        <FeaturedCourses />
        {/* Trending Instructor */}
        <TrendingInstructors />
      </div>
    </>
  );
};

export default HomePage;
