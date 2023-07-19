import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/contact">تواصل </Link>
      <Link className="nav-link" to="/about">من انا </Link>
      <Link className="nav-link" to="/wg">هدف الموقع </Link>
      <Link className="nav-link" to="/websiteinfo">معلومات هامه عن الموقع </Link>
      <Link className="nav-link" to="/test">امتحن نفسك </Link>
      <Link className="nav-link" to="/learn">تعلم اختبار الجنسيه </Link>
      <Link className="nav-link" to="/">الرئيسيه </Link>
    </nav>
  );
}

export default Nav;
