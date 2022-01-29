/* shift + alt + a para comentar */
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";



function App() {
  return (
    /* Esse comando ( linha 10 <>  linha 25 </>) é o fragment, serve para colocar tudoem um elemento só*/
    <>
      <NavBar></NavBar>

      <div className="container">
        <h1 className="text-primary"> Dashboard De Vendas</h1>

        <div className="row px-3">
          
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
            <BarChart></BarChart>
          </div>

          <div className="col-sm-6">
            <h5>Todas Vendas</h5>
            <DonutChart></DonutChart>
          </div>

          <div className="py-3">
            <h2 className="text-primary">Todas Vendas</h2>
          </div>
        </div>
        <DataTable></DataTable>
      </div>

      <Footer />
    </>
  );
}

export default App;
