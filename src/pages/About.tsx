import React from 'react';
import Wrapper from '../Sections/Wrapper';
import { FaGithub } from 'react-icons/fa';

function About() {
  return (
    <div className="profile">
      <h1 className="profile-text">Hi, I am NerfedJabolo</h1>
      <h2 className="profile-text">The creator of this project</h2>
      <h4 className="profile-text">
        This was created as a project for my portfolio.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/NerfedJabolo">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
