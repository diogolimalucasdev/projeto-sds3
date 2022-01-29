/* shift + alt + a para comentar */
import Chart from 'react-apexcharts';

const DonutChart = () => {


    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

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
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />

    );
}

export default DonutChart;