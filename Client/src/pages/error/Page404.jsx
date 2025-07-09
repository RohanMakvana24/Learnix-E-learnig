import React from 'react'
import {Link} from 'react-router-dom'
import {FaExclamationCircle} from "react-icons/fa";
const Page404 = () => {
    return (
        <section className="py-6 md:py-12 min-h-screen flex justify-center items-center bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <span className="text-7xl font-bold">4</span>
                        <FaExclamationCircle className="text-red-600 text-4xl md:text-5xl"/>
                        <span className="text-7xl font-bold transform scale-x-[-1]">4</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Oops! You're lost.</h3>
                    <p className="text-gray-600 mb-6">The page you are looking for was not found.</p>
                    <Link to="/auth/signup" className="inline-block bg-black text-white text-sm font-medium rounded-full px-6 py-3 transition hover:bg-gray-800">
                        Back to Signup
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Page404
