// DynamicIconComponent.js
import React from 'react';
import { IconContext } from 'react-icons';

const DynamicIconComponent = ({ iconName }) => {
    let ImportedIcon = null;

    try {
        // Convert icon name to PascalCase (e.g., "Beer" becomes "FaBeer")
        const pascalCaseIconName = `Fa${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}`;

        // Try importing from react-icons/fa
        ImportedIcon = require(`react-icons/fa/${pascalCaseIconName}`).default;
    } catch (faError) {
        try {
            // Try importing from react-icons/si if not found in fa
            ImportedIcon = require(`react-icons/si/${iconName}`).default;
        } catch (siError) {
            console.error(`Error importing icon ${iconName}:`, faError, siError);
        }
    }

    if (!ImportedIcon) {
        console.error(`Icon with name ${iconName} not found in both Font Awesome and Simple Icons.`);
        return null;
    }

    return (
        <IconContext.Provider value={{ size: '2em' }}>
            <ImportedIcon />
        </IconContext.Provider>
    );
};

export default DynamicIconComponent;
