import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zuojie &apos;Liu</h2>
        <p><a href="mailto:zjliu98@gmail.com">zjliu98@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zuojie. I am a <a href="https://www.sauder.ubc.ca/programs/masters-degrees/mban">UBC MBAN</a> graduate, PKU Alumni.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zuojie&apos;Liu <Link to="/">aizenz.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
