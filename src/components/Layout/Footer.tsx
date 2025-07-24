import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        mt: 'auto',
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Todo App - {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};
