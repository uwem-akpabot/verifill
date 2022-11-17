import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import Main from '../components/Main';
// import background from "./img/placeholder.png";
// import icon1 from '../resources/assets/img/icons/1.png';

const HomePage = (props) => {
  const pageTitle = 'Home';

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.caption} | {pageTitle}</title>
        <link rel="canonical" href="http://9jacodekids.com" />
        <meta name="description" content="9jaCodeKids website, learn coding" />
      </Helmet>

      <Header />
      <Main />
      
    </div>
  )
}

export default HomePage
