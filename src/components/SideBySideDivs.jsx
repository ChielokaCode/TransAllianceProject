import React from "react";

const SideBySideDivs = ({
  containerClassName = "",
  containerStyle = {},
  div1Props = {},
  div2Props = {},
}) => {
  return (
    <div className={`absolute ${containerClassName}`} style={containerStyle}>
      <div
        className={`absolute ${div1Props.className || ""}`}
        style={{
          ...div1Props.style,
          borderTopLeftRadius: div1Props.borderTopLeftRadius || "0",
          borderTopRightRadius: div1Props.borderTopRightRadius || "0",
          bottom: div1Props.bottom || "0%",
          left: div1Props.left || "0%",
        }}
      >
        {div1Props.children}
      </div>
      <div
        className={`absolute ${div2Props.className || ""}`}
        style={{
          ...div2Props.style,
          borderTopLeftRadius: div2Props.borderTopLeftRadius || "0",
          borderTopRightRadius: div2Props.borderTopRightRadius || "0",
          bottom: div2Props.bottom || "0%",
          right: div2Props.right || "0%",
        }}
      >
        {div2Props.children}
      </div>
    </div>
  );
};

export default SideBySideDivs;
