import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
    <Helmet>
       <title> Welcome to Learnix </title>
       <meta name="description" content="At Learnix, we make learning fun and accessible for everyone, anytime" /> 
    </Helmet>
      <main className="relative w-full min-h-screen bg-gradient-to-br from-[#f9faff] via-[#e9f0f9] to-[#f3f7fa] px-6 md:px-12 py-12 flex flex-wrap gap-10 items-center justify-between overflow-hidden">
      {/* Decorative Background Shapes */}
      <img
        className="absolute top-0 left-0 w-20 h-20 opacity-30 rounded-full select-none pointer-events-none"
        src="https://storage.googleapis.com/a1aa/image/e2ecde30-1ca6-49bb-394a-f759c744928e.jpg"
        alt="Decorative"
      />
      <img
        className="absolute top-10 left-10 w-14 h-14 opacity-20 rounded-full select-none pointer-events-none"
        src="https://storage.googleapis.com/a1aa/image/96cd0c28-52dd-4c3c-1eb9-6d052f05275c.jpg"
        alt="Decorative"
      />
      <img
        className="absolute bottom-6 left-6 w-16 h-16 opacity-20 rounded-full select-none pointer-events-none"
        src="https://storage.googleapis.com/a1aa/image/6fa8dd3d-736f-4c92-389d-5bda9f0430f1.jpg"
        alt="Decorative"
      />
      <img
        className="absolute top-20 right-20 w-28 h-28 opacity-20 rounded-full select-none pointer-events-none"
        src="https://storage.googleapis.com/a1aa/image/7c7418fc-1813-411a-40f7-79e14e6d51f7.jpg"
        alt="Decorative"
      />
      <img
        className="absolute bottom-6 right-6 w-20 h-20 opacity-20 rounded-full select-none pointer-events-none"
        src="https://storage.googleapis.com/a1aa/image/4913139d-b282-4ce2-864b-3999f5100e35.jpg"
        alt="Decorative"
      />

      {/* Left Section */}
      <section className="max-w-xl flex flex-col justify-between gap-6 flex-1">
        {/* Logo */}
        <div>
          <img
            src="/assets/img/logo/learnix.png"
            alt="Learnix Logo"
            className="w-41 mb-4"
          />
        </div>

        {/* Headings */}
        <div>
          <p className="text-base text-gray-700 font-medium">Let's</p>
          <h1 className="text-4xl font-extrabold text-[#6c70e2]">E-learning</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            at your home
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Explore high-quality online learning resources to master new skills
            at your own pace — anytime, anywhere. Whether you're a student or a
            lifelong learner, our platform makes learning easier and more
            accessible.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <NavLink
            to="/auth/login"
            className="bg-[#6c70e2] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-black transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/signup"
            className="border border-[#6c70e2] text-[#6c70e2] font-semibold py-2 px-6 rounded-full hover:bg-[#e9f0f9] transition"
          >
            Register
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-[#6c70e2] text-lg">
          <a href="#" aria-label="Instagram" className="hover:text-[#5a5ed1]">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#5a5ed1]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#5a5ed1]">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </section>

      {/* Right Section */}
      <section className="relative flex-1 flex justify-center items-center min-w-[280px]">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-[60%_60%_40%_40%/60%_60%_40%_40%] overflow-hidden shadow-xl">
          <img
            src="https://storage.googleapis.com/a1aa/image/32f82733-d0d9-47d8-9d3b-23da3df1415a.jpg"
            alt="Learning Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vertical Dots */}
        <div className="hidden md:flex flex-col gap-2 absolute top-1/2 right-0 transform -translate-y-1/2 select-none">
          <span className="w-2 h-2 bg-[#6c70e2] rounded"></span>
          <span className="w-2 h-2 bg-[#6c70e2] rounded"></span>
          <span className="w-2 h-2 bg-[#6c70e2] rounded"></span>
        </div>

        {/* Chat Bubble */}
        <div className="hidden md:flex absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#6c70e2] text-white text-xl items-center justify-center shadow-lg cursor-pointer">
          <i className="fas fa-comment-alt"></i>
        </div>
      </section>
    </main>
    </>
  
  );
};

export default LandingPage;
