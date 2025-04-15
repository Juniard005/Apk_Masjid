import React from "react";
import {FaCalendar, FaHome} from "react-icons/fa"
import { IoChatbox } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({sidebarToggle}) => {
    return (
        <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-black fixed h-full`}>
            <div className="my-2 mb-4 justify-items-center">
                <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
            </div>
            <hr />
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="#" className="px-3">
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                        Home
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <Link to="/events" className="px-3">
                        <FaCalendar className='inline-block w-6 mr-2 -mt-2'></FaCalendar>
                        Event
                    </Link>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="#" className="px-3">
                        <IoChatbox className="inline-block w-6 mr-2 -mt-2"></IoChatbox>
                        Forums
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar