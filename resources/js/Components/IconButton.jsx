// import React from "react";

// const IconButton = ({ icon, label, onClick, className, disabled }) => {
//     // TODO:
//     return (
//         <buttom onClick={onClick} className={className} disabled={disabled}>
//             <img
//                 src={icon}
//                 alt={label}
//                 className={`${className} h-10 flex items-center px-4 py-2 bg-white text-whitefond-boldroundedfosuc:outline-nonefocus:shadow-outline`}
//             />
//             {label}
//         </buttom>
//     );
// };

// export default IconButton;
import React from "react";

const IconButton = ({ icon, label, onClick, className, disabled, href }) => {
    // Renderiza un enlace si se proporciona href, de lo contrario, un botón
    const Component = href ? "a" : "button";

    return (
        <Component
            onClick={!disabled ? onClick : undefined}
            href={href && !disabled ? href : undefined} // Solo agrega href si no está deshabilitado
            className={`h-10 flex items-center px-4 py-2 ${
                disabled ? "bg-gray-300 cursor-not-allowed" : "bg-white"
            } text-white font-bold rounded focus:outline-none focus:shadow-outline ${className}`}
            disabled={disabled && !href} // Solo usa disabled en botones
            aria-disabled={disabled} // Accesibilidad extra para enlaces
            role={href ? "button" : undefined} // Define el rol si es enlace
        >
            <img src={icon} alt={label} className="w-4 h-4 mr-0" />
            {label}
        </Component>
    );
};

export default IconButton;
