import React, { useState } from "react";
import PropTypes from "prop-types";
import "./starRating.css";

function StarRating({
    readOnly,
    disabled,
    value,
    numOfStars,
    size,
    showNumaric,
}) {
    const [mouseSection, setmouseSection] = useState({
        current: value,
        newValue: value,
    });
    const filledStar = "\u2605";
    const outlinedStar = "\u2606";
    const itarator = "*".repeat(numOfStars).split("");

    function setHoverAction(num) {
        if (!readOnly && !disabled && num !== -1) {
            console.log("top");
            setmouseSection((prev) => {
                return { ...prev, current: num };
            });
        } else {
            console.log("bottom");
            setmouseSection((prev) => {
                return { current: prev.newValue, newValue: prev.newValue };
            });
        }
    }

    function updateValue(num) {
        if (!readOnly && !disabled) {
            setmouseSection({ current: num, newValue: num });
        }
    }

    return (
        <div
            class={"star-rating" + (disabled ? " star-rating-disabled" : "")}
            style={{ fontSize: size }}
        >
            {showNumaric ? (
                <span style={{ fontWeight: "bolder", marginRight: "8px" }}>
                    {mouseSection.current.toFixed(1)}
                </span>
            ) : (
                <></>
            )}
            {itarator.map((item, index) => {
                return (
                    <span
                        key={item + index}
                        onClick={() => updateValue(index + 1)}
                        onMouseLeave={() => setHoverAction(-1)}
                        onMouseOver={() => setHoverAction(index + 1)}
                    >
                        {mouseSection.current > index
                            ? filledStar
                            : outlinedStar}
                    </span>
                );
            })}
        </div>
    );
}

StarRating.propTypes = {
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.number,
    numOfStars: PropTypes.number,
    size: PropTypes.string,
    showNumaric: PropTypes.bool,
};
StarRating.defaultProps = {
    readOnly: false,
    disabled: false,
    value: 0,
    numOfStars: 5,
    size: "24pt",
    showNumaric: true,
};
export default StarRating;
