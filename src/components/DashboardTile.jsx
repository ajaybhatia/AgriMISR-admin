import { BsArrowRightCircleFill } from "react-icons/bs";
import React from "react";

const DashboardTile = ({
  title,
  subtitle,
  icon: Icon,
  iconRotate = 0,
  placeholder = false,
  light = false,
  primaryBgColor = "#343a40",
  secondaryBgColor = "#3e444a",
}) => {
  return (
    <div
      className="dashboard-tile rounded"
      style={{ backgroundColor: placeholder ? "transparent" : primaryBgColor }}
    >
      {!placeholder && (
        <>
          <div className="p-3 d-flex">
            <div className="flex-fill">
              <div
                className="fs-2 fw-semibold"
                style={{ color: light ? "#000" : "#fff" }}
              >
                {title}
              </div>
              <div
                className="py-2 fw-light"
                style={{ color: light ? "#000" : "#fff" }}
              >
                {subtitle}
              </div>
            </div>
            <div>
              <Icon
                size={96}
                color="rgba(0, 0, 0, 0.15)"
                style={{
                  transform: `rotate(${iconRotate}deg)`,
                }}
              />
            </div>
          </div>
          <div
            className="p-2 text-center rounded-bottom cursor-pointer"
            style={{
              backgroundColor: placeholder ? "transparent" : secondaryBgColor,
              color: light ? "#000" : "#fff",
            }}
          >
            More info <BsArrowRightCircleFill />{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardTile;
