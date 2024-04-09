import React from 'react'


//children = button text
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props

    //classes are added with backticks with {} for tailwind classes -> the ${} are for the input values and same is for textColor
    //we have taken the rest of hte properties with props and spread them FOREXAMPLE : onclick, placeholder etc
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button
