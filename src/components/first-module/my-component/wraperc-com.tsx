import React, { ReactNode } from 'react';

interface FieldContainerProps {
    attrName: string;
    label?: string;
    description?: string;
    children: ReactNode;
}

const myFieldContainer = ({ attrName, label, description, children }: FieldContainerProps) => {
    return (
        <div className="d5-field-container" data-attr-name={attrName}>
            {label && <label>{label}</label>}
            {description && <p className="d5-description">{description}</p>}
            <div className="d5-field-content">
                {children}
            </div>
        </div>
    );
};

export default myFieldContainer;
