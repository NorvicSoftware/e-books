import React from "react";

const IconButton = ({ icon, label, onClick, className, disabled }) => {
    // TODO:
    return (
        <buttom onClick={onClick} className={className} disabled={disabled}>
            <img
                src={icon}
                alt={label}
                className={`${className} h-10 flex items-center px-4 py-2 bg-white text-whitefond-boldroundedfosuc:outline-nonefocus:shadow-outline`}
            />
            {label}
        </buttom>
    );
};

export default IconButton;
