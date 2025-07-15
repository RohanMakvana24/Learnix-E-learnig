import React from "react";

const CoursePage = () => {
  const courses = [
    {
      id: 1,
      title: "UI/UX Design Course",
      price: "$120",
      instructor: "Miranda Milton",
      image: "https://source.unsplash.com/400x200/?uiux",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      price: "$90",
      instructor: "John Doe",
      image: "https://source.unsplash.com/400x200/?javascript",
    },
    {
      id: 3,
      title: "Python for Beginners",
      price: "$150",
      instructor: "Jane Smith",
      image: "https://source.unsplash.com/400x200/?python",
    },
    {
      id: 4,
      title: "Advanced React",
      price: "$180",
      instructor: "Alex Johnson",
      image: "https://source.unsplash.com/400x200/?react",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-inter text-gray-700">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-xl font-bold text-gray-800">Course Grid</h1>
        <nav className="text-xs text-gray-500 mt-1">
          <a href="#" className="hover:underline">
            Home
          </a>{" "}
          / <span className="text-blue-600">Course Grid</span>
        </nav>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 w-full space-y-6 bg-white p-4 rounded shadow sticky top-6 max-h-[600px] overflow-y-auto text-sm">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-gray-800 text-base">Filters</h2>
            <button className="text-red-500 text-xs">Clear</button>
          </div>

          <div>
            <h3 className="text-gray-600 font-semibold mb-2">Categories</h3>
            <div className="space-y-1">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" /> Backend
                (2)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" /> JavaScript
                (3)
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
            <p className="text-sm text-gray-500">
              Showing 1–{courses.length} of {courses.length} results
            </p>
            <div className="flex items-center gap-2">
              <button className="border px-2 py-1 rounded text-sm text-gray-500">
                Grid
              </button>
              <button className="border px-2 py-1 rounded text-sm text-gray-500">
                List
              </button>
              <select className="border px-2 py-1 rounded text-sm text-gray-600">
                <option>Newly Published</option>
                <option>Most Popular</option>
              </select>
              <input
                type="text"
                placeholder="Search"
                className="border px-2 py-1 rounded text-sm w-[150px]"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded shadow p-3 hover:shadow-md transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded mb-3 w-full h-[120px] object-cover"
                />
                <h3 className="font-semibold text-sm text-gray-800 mb-1">
                  {course.title}
                </h3>
                <div className="text-xs text-gray-500 mb-2">
                  by {course.instructor}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-500 font-semibold text-sm">
                    {course.price}
                  </span>
                  <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
              &laquo;
            </button>
            <button className="w-8 h-8 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
              &raquo;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
