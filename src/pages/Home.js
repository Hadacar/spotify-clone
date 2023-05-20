import React from "react";
import Section from "components/Section";
import { songs } from "data/songs";
const Home = () => {

  return (
    <div className="flex flex-col space-y-10">
      <Section title="Recently Played" more="/a" items={songs} />
      <Section title="Shows to Try" more="/a" items={songs} />
      <Section title="Made For Alperen  " more="/a" items={songs} />

    </div>
  );
};

export default Home;
