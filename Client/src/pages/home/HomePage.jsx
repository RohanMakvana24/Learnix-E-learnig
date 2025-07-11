import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import ClassCard from "../../component/home/ClassCard";
import AddJoinClass from "../../component/modals/home/AddJoinClass";
import { Helmet } from "react-helmet";

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
      <div className="w-full">
        <section className="relative bg-gradient-to-r py-16  from-[#2f2a7c] via-[#3f33d1] to-[#2f2a7c] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-0 flex flex-col md:flex-row items-center justify-between overflow-visible">
          {/* Left Content */}
          <div className="max-w-xl w-full text-white relative z-10 mt-10">
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
          <div className="relative mt-12 md:mt-0 w-full max-w-sm md:max-w-md flex justify-center md:justify-end">
            <div
              aria-hidden="true"
              className="absolute top-8 left-8 w-full max-w-sm md:max-w-md h-[260px] rounded-lg bg-gray-300 shadow-lg"
            ></div>
            <div
              aria-hidden="true"
              className="absolute top-4 left-4 w-full max-w-sm md:max-w-md h-[260px] rounded-lg bg-gray-200 shadow-lg"
            ></div>
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm md:max-w-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/a1aa/image/3ab0c51e-9dc2-44b7-ff6b-28d4e5cf4c61.jpg"
                  alt="Course"
                  className="w-full h-[180px] object-cover"
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
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-[#1e293b]">
            Learning Units
          </h1>
          <nav className="flex items-center text-sm text-gray-500 mt-1 space-x-1 select-none">
            <span>/</span>
            <span>Classrooms</span>
            <span>/</span>
            <span className="font-semibold text-gray-700"> Class</span>
          </nav>
        </header>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setJoinClassModal(true)}
              class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg text-sm font-semibold px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
            >
              <MdAddTask className="text-black text-xl font-semibold mr-2" />
              Join Now
            </button>
            <AddJoinClass
              isOpen={JoinClassModal}
              onClose={() => setJoinClassModal(false)}
              title="Join a Class"
              description="Enter the code to connect with your instructor"
            >
              <form className="max-w-md mx-auto mb-5">
                <div className="max-w-md mx-auto space-y-6">
                  <section className="border border-gray-300 rounded-lg p-5">
                    <p className="text-sm mb-3">
                      You already have a QR code? Simply upload the image or
                      scan it using your device.
                    </p>
                    <div className="flex justify-center">
                      <button className="mr-7 relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          Upload QR
                        </span>
                      </button>
                      <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          Scan QR
                        </span>
                      </button>
                    </div>
                  </section>
                  <section className="border border-gray-300 rounded-lg p-5 space-y-2">
                    <label
                      htmlFor="class-code"
                      className="text-sm block font-normal text-gray-700"
                    >
                      Class code
                    </label>
                    <p className="text-xs text-gray-600 mb-2">
                      Ask your teacher for the class code, then enter it here.
                    </p>
                    <input
                      id="class-code"
                      type="text"
                      placeholder="Class code"
                      className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600"
                    />
                  </section>
                  <section className="text-xs text-gray-700 space-y-2 max-w-md">
                    <p>To sign in with a class code</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Use an authorized account</li>
                      <li>
                        Use a class code with 5-8 letters or numbers, and no
                        spaces or symbols
                      </li>
                    </ul>
                    <p>
                      If you have trouble joining the class, go to the
                      <a href="#" className="text-blue-600 underline">
                        Help Center article
                      </a>
                    </p>
                  </section>
                </div>
              </form>
            </AddJoinClass>
            <button
              type="button"
              onClick={() => setCreateClassModal(true)}
              className="flex items-center gap-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <MdAdd className="text-white text-xl font-semibold" />
              Create Now
            </button>
            <AddJoinClass
              isOpen={CreateClassModal}
              onClose={() => setCreateClassModal(false)}
              title="Launch New Class"
              description="Define the space where learning begins"
            >
              <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="false"
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Class Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="false"
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Section
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="false"
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="false"
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Room
                  </label>
                </div>
              </form>
            </AddJoinClass>
          </div>
        </div>

        {/* Grid Header */}
        <div className="border border-gray-200 rounded-md p-3 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-gray-800 text-sm mb-2 sm:mb-0">
            Classroom Class
          </h2>
          <div className="flex space-x-2 text-sm text-gray-700">
            <div>
              <div className="max-w-sm w-full relative">
                <label htmlFor="filter" className="sr-only">
                  Filter
                </label>
                <div className="relative">
                  {/* Filter Icon */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                      />
                    </svg>
                  </div>
                  {/* Select Dropdown */}
                  <select
                    id="filter"
                    name="filter"
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-10 pr-10 text-sm text-gray-700 shadow-sm focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
                  >
                    <option value>Filter By</option>
                    <option value="name">Full Name</option>
                    <option value="email">Email Address</option>
                    <option value="description">Project Description</option>
                    <option value="user_id">User ID</option>
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm w-full relative">
                <label htmlFor="filter" className="sr-only">
                  Filter
                </label>
                <div className="relative">
                  {/* Filter Icon */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                      />
                    </svg>
                  </div>
                  {/* Select Dropdown */}
                  <select
                    id="filter"
                    name="filter"
                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-10 pr-10 text-sm text-gray-700 shadow-sm focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
                  >
                    <option value>Filter By</option>
                    <option value="name">Full Name</option>
                    <option value="email">Email Address</option>
                    <option value="description">Project Description</option>
                    <option value="user_id">User ID</option>
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <ClassCard card={card} index={index} />
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <div className="flex space-x-1">
            <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Prev
            </button>
            <button className="min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              1
            </button>
            <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              2
            </button>
            <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              3
            </button>
            <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
