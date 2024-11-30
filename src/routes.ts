const routes = [{ path: "/", name: "Home", component: "home" }];

export default routes;

/*
const routes [];
export default routes;

is a static configuration approach

- better performance
- simplicity
- predicatble
- serialization friendly
- good for static configurations that does not rely on runtime logic
- has no function overhead
*/

/*
export default function routes() { return [...] }

is a dynamic function-based approach

- more flexibility when you need dynamically generated results
- encapsulation
- good for dynamic results that rely on runtime logic
- performance is slightly worse due to it being a function call
*/
