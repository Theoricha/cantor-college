"use client"
import Link from "next/link"
import "./Navbar.css";
import React, { useState } from "react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the state
      };
    return (
        <nav>
        <button className='burger'onClick={toggleMenu}>&#9776;</button> {/* Add this */}
  <menu className = {menuOpen ? "active" : ""}>
  <li><Link href="/">Home</Link></li>
    <li><Link href="/students">Students</Link></li>
    <li><Link href= "/courses">Courses</Link></li>
    <li><Link href = "/business">Businesses</Link></li>
    <li><Link href = "/learningResources">Learning Resources</Link></li>
  </menu>
</nav>
    )

}

export default Navbar