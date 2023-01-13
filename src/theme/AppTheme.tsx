import { ThemeProvider } from 'styled-components';

function AppTheme({ children }: any ) {
  const theme = {
    
  };
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
export default AppTheme;
