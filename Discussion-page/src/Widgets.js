import React from 'react';
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search What's Trending" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1787475017271578805"} />

        <TwitterTweetEmbed tweetId={"1807099264952152476"} />


        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="myntra"
          options={{ height: 400 }}
        />

        <TwitterShareButton
           url={"https://www.myntra.com"}
           options={{ text: "Check out the latest fashion trends on Myntra!", via: "myntra" }}
         
        />
      </div>
    </div>
  );
}

export default Widgets;
