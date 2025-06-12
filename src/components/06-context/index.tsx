import { useTheme, ThemeProvider } from './advancedontext';

function AdvancedComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2>Advanced Context Example</h2>
      <p>Current theme: {theme}</p>
      <button
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}
        className='btn btn-center'
      >
        Toggle Theme (Current: {theme})
      </button>
    </div>
  );
}

function ParentComponent() {
  return (
    <ThemeProvider defaultTheme="light">
      <AdvancedComponent />
    </ThemeProvider>
  );
}

export default ParentComponent;