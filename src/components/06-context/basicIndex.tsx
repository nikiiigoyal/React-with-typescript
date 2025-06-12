import { ThemeProvider, useTheme } from "./basicContext";

function BasicComponent () {
    const context = useTheme();
    console.log(context); // Will log: { name: 'susan' }

  return (
    <div>
      <h2>Basic Context Example</h2>
      <p>User name from context: {context.name}</p>
    </div>
  );
}

function ParentComponent() {
  return (
    <ThemeProvider>
      <BasicComponent />
    </ThemeProvider>
  );
}

export default ParentComponent;

