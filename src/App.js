
export function App() {
  return (
    <div>

<Name />  
<Desc />
    </div>
  );
}
export default App;

function Desc(){
return (
  <div><p data-ns-test={'project-description'}>This Amazon Prime Clone</p></div>
);
}
function Name(){
  return (
    <div> <h1 data-ns-test={'project-name'}>Amazon Clone </h1> 

</div>
  )
}
