// my-com.tsx
import React, { useState } from 'react';

interface MyTextContainerProps {
  defaultValue: string;
  onChange?: (newValue: string) => void;
}

const MyTextContainer: React.FC<MyTextContainerProps> = ({
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

export default MyTextContainer;
