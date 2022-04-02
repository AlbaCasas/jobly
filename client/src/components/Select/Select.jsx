import React from 'react';
import { StyledSelectSearch } from './styled';
import { forwardRef } from 'react';

const Select = (
  {
    className,
    name = '',
    placeholder = '',
    options = [],
    defaultValue,
    required,
    ...props
  },
  ref
) => {
  return (
    <StyledSelectSearch
      required={required}
      className={className}
      {...props}
      ref={ref}
      name={name}
    >
      <option defaultValue={!defaultValue ? true : false} value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          defaultValue={option === defaultValue ? true : false}
        >
          {option}
        </option>
      ))}
    </StyledSelectSearch>
  );
};

export default forwardRef(Select);
