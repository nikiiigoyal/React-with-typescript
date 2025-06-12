

// type definition 
type ComponentProps = { 
    name: string;
    id: number;
    children: React.ReactNode;
}
    function Props ({name,id,children}:ComponentProps ) {
    return (
<>
<div>
    <h2>2. props</h2>
    <p>Name: {name}</p>
    <p>Id: {id}</p>
    {children} {/* This displays whatever was passed as children */}
</div>
</>

// // inline types
// function Props ({name,id}: {name: string; id:number}) {
//     return (
// <>
// <div>
//     <h1>2. props</h1>
//     <h2>Name: {name}</h2>
//     <h2>Id: {id}</h2>
// </div>
// </>
 )
 }
export default Props;
