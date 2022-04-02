import { forwardRef } from 'react';
import Box from '../Box';
import Text from '../Text';
import { StyledInput } from './styled';
const Input = ({ error, ...props }, ref) => {
  return (
    <Box gap="8px" flexDirection="column">
      <StyledInput {...props} ref={ref} />
      {error && (
        <Text variant="caption" color="red">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default forwardRef(Input);
