import Link from 'next/link'
import React from 'react'
import Pdf from '../Documents/resume-current.pdf';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@heroicons/react/solid";


const Header = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-5 h-5 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <MoonIcon className="w-5 h-5 text-green-600 " role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Archish Arun</h1> 
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-green-600">
                <h3> Sign In</h3>
                <>{renderThemeChanger()}</>
                
                <h3 className="border px-4 py-1 rounded-full border-green-600"> <a target="_blank" href="https://storage.cloud.google.com/archish-documents/Archish_Arun_Resume_15-06-2022-10-26-28.pdf">Resume</a> </h3>
            </div>
        </header>
    )
}

export default Header;