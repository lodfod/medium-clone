import Link from 'next/link'
import React from 'react'
import Pdf from '../Documents/resume-current.pdf';


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
            <h3> Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full border-green-600"> <a target="_blank" href="https://storage.cloud.google.com/archish-documents/Archish_Arun_Resume_15-06-2022-10-26-28.pdf">Resume</a> </h3>
        </div>
    </header>
  )
}

export default Header