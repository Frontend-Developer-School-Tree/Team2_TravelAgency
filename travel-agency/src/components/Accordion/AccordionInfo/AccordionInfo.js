import React from "react";
import "./AccordionInfoStyles.css"

const AccordionInfo = ({ children, title, isExpand = false }) => {

  const [expand, setExpand] = React.useState(isExpand);
  
  return (
    <div className="box">
      <div className="title-box" onClick={() => setExpand(expand => !expand)}>
        <span className="title">{title}</span>
        <span className="icon"><i className={`fas fa-angle-down${!expand ? ' down' : ''}`}></i></span>
        <div className="clearfix"></div>
      </div>
      {expand && <div className="content">{children}</div>}
    </div>
  ) 
};

export default AccordionInfo;
