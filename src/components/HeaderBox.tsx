import React from "react";
///If nothing is passed into the title prop, it will default set to title
const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {/*If the type is equal to greeting, then we can render a span element*/}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp; {user}</span>
        )}
      </h1>

      <p className="header-box-subtext"> {subtext} </p>
    </div>
  );
};

export default HeaderBox;
