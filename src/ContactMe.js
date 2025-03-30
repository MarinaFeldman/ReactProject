import React from 'react';
import { Likeus } from './Likeus';
import "./App.css";


function ContactMe() {
  return (
    <div>
    <div className='likeUs'>
      <Likeus />
    </div>
    <div>
    <p>
    Send me email:&nbsp;

    <a href="mailto:marina.marinafeldman@gamil.com">emailTo@Marina.com</a>
    </p>
    </div>
    </div>
  );
}

export default ContactMe;