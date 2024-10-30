import React from "react";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const IconButton = ({ icon, label, onClick, className, disabled }) => {
    // TODO:
    return (
        <buttom
            onClick={onClick}
            className={
                "flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-800text-whitefond-boldroundedfosuc:outline-nonefocus:shadow-outline ${className}"
            }
            disabled={disabled}
        >
            <img src={icon} alt={label} className={className} />
            {label}
        </buttom>
    );
};

export default IconButton;
