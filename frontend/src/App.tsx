/* shift + alt + a para comentar */
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";



function App() {
  return (
    /* Esse comando ( linha 9 <>  linha 18 </>) é o fragment, serve para colocar tudoem um elemento só*/
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="text-primary"> Ola mundo</h1>
        <DataTable></DataTable>
      </div>
      <Footer />
    </>
  );
}

export default App;
