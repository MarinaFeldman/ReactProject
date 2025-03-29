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
    <p>Send me email: <a href="mailto:email@marina.com">email@marina.com</a></p>
    </div>
    </div>
  );
}

export default ContactMe;