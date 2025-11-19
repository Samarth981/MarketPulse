import React from 'react';
import { Link } from 'react-router-dom';
function People() {
  return (
    <div className=" container">
      <div className="row p-3 mt-5">
        <h1 className="text-center" style={{ color: '#424242' }}>
          People
        </h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: '1.8', fontSize: '1rem' }}
      >
        <div className="col-6 p-3 text-center">
          <img src="media\images\mypic.jpg" alt="Img" class="rounded-image" />
          <h5 className="mt-4">Samarth Patel</h5>
          <p>Founder, CEO</p>
        </div>

        <div className="col-6 p-3">
          <p>
            In 2025, Samarth Patel, a computer science student, embarked on a
            journey to create a clone of Zerodha as a practice project for web
            development. Inspired by Zerodha's success, this project aims to
            replicate the functionalities and design of a leading broking
            platform, showcasing Samarth's skills and knowledge in web
            development.
          </p>
          <p>
            He is passionate about merging technology with finance and exploring
            innovative solutions in the broking industry. This project serves as
            a testament to his dedication and proficiency in the field.
          </p>
          <p>Playing cricket is his zen.</p>
          <p>
            Connect on{' '}
            <a href="https://github.com/Samarth981" className="px-1 textDeco">
              GitHub
            </a>
            /
            <a
              href="https://www.linkedin.com/in/samarth-patel-b6a1112a8/"
              className="px-1 textDeco"
            >
              LinkedIn
            </a>
            /
            <a href="mailto:samarth981@gmail.com" className="textDeco px-1">
              E-mail
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
