import React from "react";
import "./Flags.css";

const USAFlag = () => {
  return (
    <>
      <h1 id="usa">united state of america</h1>

      <div className="flag2">
        <div className="blu2">
          {[...Array(9)].map((_, row) => (
            <div key={row} className={row % 2 ? "lft2" : ""}>
              {[...Array(row % 2 ? 5 : 6)].map((_, i) => (
                <img src="/str.png" alt="star" className="str2" key={i} />
              ))}
            </div>
          ))}
        </div>

        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? "red2 same2" : "wht2 same2"}
          ></div>
        ))}
      </div>
    </>
  );
};

export default USAFlag;