import React, { useState } from 'react';
import MyFieldContainer from './wraperc-com';
import MyTextContainer from './my-com';

import { __ } from '@wordpress/i18n';

const MyToggleFieldComponent = () => {
    const [textValue, setTextValue] = useState<string>(''); // Manage the text value state

    console.log(textValue, '--------------------------')

    const handleTextChange = (newValue: string) => {
        setTextValue(newValue);  // Update the state when the input changes
    };

    

    return (
        <MyFieldContainer 
            attrName="toggle.innerContent" 
            label={__('Toggle', 'd5-extension-example-modules')} 
            description={__('Input the main text content for your module here.', 'd5-extension-example-modules')}
        >
            <MyTextContainer defaultValue={textValue} onChange={handleTextChange} />
            
        </MyFieldContainer>
    );
};

export default MyToggleFieldComponent;

