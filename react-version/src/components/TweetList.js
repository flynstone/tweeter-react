/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'; //optional
import Tweet from './Tweet';

  function TweetList(){
    return (
      <section className="tweets">
        <Tweet />
        <Tweet />
      </section>

    );
  }

  export default TweetList;
