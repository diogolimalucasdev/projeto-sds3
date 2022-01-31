/* shift + alt + a para comentar */
import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';
type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    
    // forma errada
    let chartData : ChartData = {labels: [], series: []};

    axios.get(`${BASE_URL} + '/sales/amount-by-seller'`)
        .then(response => {

            const data =  response.data as SaleSum[];
            const myLabels = data.map(x => x.selleName);
            const mySeries = data.map(x => x.sum);

            chartData = {labels: myLabels, series: mySeries};
            console.log(chartData)
        });

   /*  const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    } 
    */

    const options = {
        legend: {
            show: true
        }
    }

    return (
        /* usamos o apexCharts, do site deles com codigos prontos relacionados a react */


        <Chart
            /* me referencio ao options criado no incio */
            /* os 3 pontos pega o objeto do jeito que esta e depois da virgula eu aiciono as categorias  */
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />

    );
}

export default DonutChart;