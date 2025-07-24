import React from 'react';
import { AppBar, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';

export const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          component="h1"
          sx={{
            fontWeight: 500,
            flexGrow: 1,
            textAlign: 'center',
          }}
        >
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
