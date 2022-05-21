
export function App() {
  return (
    <>
      <Name />
      <Desc />
    </>
  );
}
export default App;

function Desc() {
  return (
    <p data-ns-test='project-description'>This Amazon Prime Clone</p>
  );
}
function Name() {
  return (
      <h1 data-ns-test='project-name'>Amazon Clone </h1>
  )
}
