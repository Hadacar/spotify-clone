import React from "react";
import SongItem from "./SongItem";
import Title from "./Title";

const Section = (props) => {


  return (
    <section>
      <Title title={props.title} more={props.more} />
      <div className="grid grid-cols-5 gap-x-6">
        {props.items.map((item) => (
            <SongItem item={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default Section;
