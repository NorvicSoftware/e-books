import React from 'react';

export default function UserSelect({
    options = [],
    className = '',
    value,
    onChange,
    children,
    ...props
}) {
    return (
        <div className={`relative mb-6 ${className}`} {...props}>
            <select
                name="user"
                value={value}
                onChange={onChange}
                className="block w-full my-2 rounded border-gray-300 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-700 focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled>
                    {children || 'Select an user'}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
