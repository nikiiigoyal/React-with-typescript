import type { JSX } from "react";
// React components must return JSX, but TypeScript needs to know what you're returning Tell TypeScript what your component returns: jsx null or string.
function Component(): JSX.Element | null | string {
  return <h2>1. Hello from TypeScript<span> return type</span></h2>;
}
export default Component;