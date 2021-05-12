/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-green-600 hover:text-gold-800 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-green-600 bg-gray-900">
                        WANDERING GODDESS
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-gold-800"
                        activeClassName="text-green-600 bg-gray-900">
                        Musings 
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-gold-800"
                        activeClassName="text-green-600 bg-gray-900">
                        Expressions
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-600 hover:text-gold-800"
                        activeClassName="text-green-600 bg-gray-900">
                        History 
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://m.facebook.com/Wandering-Goddess-104999661693754/?ref=bookmarks" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url="https://www.pinterest.com/jtuck1100/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}} 
                    />
                    <SocialIcon 
                        url="https://twitter.com/WanderingGodde2" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}
                    />
                </div>
            </div>
        </header>
    )
}