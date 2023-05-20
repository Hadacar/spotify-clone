import React from 'react'
import { NavLink } from "react-router-dom";


const Title = (props) => {
  return (
    <header className="flex items-center justify-between mb-4">
    <NavLink to={props.more && "#"}>
    <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline ">
      {props.title}
    </h3>

    </NavLink>
    {props.more && (
      <NavLink
        className={
          "text-xs font-semibold uppercase tracking-wider text-link hover:underline "
        }
        to={props.more}
      >
        See all
      </NavLink>
    )}
  </header>
)
}

export default Title