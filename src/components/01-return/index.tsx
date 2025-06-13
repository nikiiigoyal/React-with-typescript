import type { JSX } from "react";
// React components must return JSX, but TypeScript needs to know what you're returning Tell TypeScript what your component returns: jsx null or string.
function Component(): JSX.Element | null | string {
  return <h1>Task Mangement</h1>;
}
export default Component;