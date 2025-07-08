import { FaBook, FaPen, FaInfoCircle } from "react-icons/fa";

export default function StreamCom() {
  return (
    <div className="bg-white w-full font-['Roboto',sans-serif]">
      {/* Header */}
      <header className="relative bg-[#0D6DB8] mx-2 mt-4 rounded-xl p-6 overflow-hidden shadow-lg flex items-center justify-between">
        {/* Title & Subtitle */}
        <div className="z-10">
          <h1 className="text-white text-3xl font-bold">BCA</h1>
          <p className="text-white text-sm mt-1 opacity-90">
            Advance Design to Attractive
          </p>
        </div>

        {/* Header Illustration */}
        <img
          src="https://storage.googleapis.com/a1aa/image/d3376d1c-00c1-438c-f768-bc611c313b75.jpg"
          alt="Decorative background"
          className="absolute right-6 top-4 w-[160px] h-[100px] object-contain opacity-20 pointer-events-none select-none"
        />

        {/* Customize Button */}
        <button className="absolute top-4 right-4 bg-white text-[#0D6DB8] text-sm px-4 py-1.5 rounded-full flex items-center gap-1 shadow hover:bg-gray-100 z-20">
          <FaPen />
          Customize
        </button>

        {/* Info Icon */}
        <FaInfoCircle className="text-white absolute bottom-4 right-4 text-xl z-10 cursor-pointer hover:text-gray-200 transition" />
      </header>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row gap-4 mx-2 mt-6 mb-8">
        {/* Sidebar */}
        <aside className="flex flex-col gap-4 md:w-60">
          {/* Class Code */}
          <section className="border border-gray-300 rounded-xl p-4 text-sm bg-gray-50">
            <p className="text-gray-800 font-medium">Class code</p>
            <button className="text-blue-600 font-semibold mt-1 flex items-center gap-1 hover:underline">
              krv3nj7 <i className="fas fa-expand-alt text-xs" />
            </button>
          </section>

          {/* Upcoming Section */}
          <section className="border border-gray-300 rounded-xl p-4 text-sm bg-gray-50">
            <p className="text-gray-800 font-semibold">Upcoming</p>
            <p className="text-gray-500 mt-1">No work due soon</p>
            <button className="text-blue-600 font-semibold mt-1 hover:underline">
              View all
            </button>
          </section>
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-4">
          {/* Announcement Form */}
          {/* Section Title + Filter/Search Controls */}
          <div className="flex flex-col border border-gray-300 bg-gray-50 md:flex-row md:items-center md:justify-between gap-4 px-3 py-3 rounded-xl mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Subjects</h2>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search materials..."
                  className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <i className="fas fa-search text-sm" />
                </div>
              </div>

              {/* Filter Dropdown */}
              <div>
                <select
                  className="w-full sm:w-auto text-sm border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Filter by type
                  </option>
                  <option value="all">All</option>
                  <option value="notes">Notes</option>
                  <option value="assignment">Assignment</option>
                  <option value="quiz">Quiz</option>
                  <option value="project">Project</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stream Cards */}
          <article className="space-y-4">
            {/* Card 1 */}
            <StreamCard
              icon={<FaBook className="text-white text-xl" />}
              name="Rohan Makvana"
              material="Android"
              date="5 Dec 2024"
              edited
            />
            {/* Card 2 */}
            <StreamCard
              icon={<FaBook className="text-white text-xl" />}
              name="Rohan Makvana"
              material="ASP.Net Unit 1"
              date="30 Jul 2024"
            />
            {/* Card 3 */}
            <StreamCard
              icon={<FaBook className="text-white text-xl" />}
              name="Rohan Makvana"
              material="Python Material"
              date="30 Jul 2024"
            />
          </article>
        </section>
      </main>
    </div>
  );
}

// Reusable Stream Card Component
function StreamCard({ icon, name, material, date, edited }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center shadow-md">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-gray-800 text-sm md:text-base font-medium">
          <span className="font-semibold text-pink-600">{name}</span> posted a
          new material:
          <span className="text-gray-900 font-semibold"> {material}</span>
        </p>
        <p className="text-gray-500 text-xs mt-1">
          {date}{" "}
          {edited && <span className="text-gray-400">(Edited {date})</span>}
        </p>
      </div>
      <div className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200">
        <i className="fas fa-ellipsis-v" />
      </div>
    </div>
  );
}
