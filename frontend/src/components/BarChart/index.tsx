/* shift + alt + a para comentar */
import Chart from 'react-apexcharts';

const BarChart = () => {

    /* como é uma função java Script eu posso colocar todo meu codigo antes e depois apenas retornar o que..
    eu escolher */
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };


    return (
       /* usamos o apexCharts, do site deles com codigos prontos relacionados a react */
       
       
       <Chart 
       /* me referencio ao options criado no incio */
       /* os 3 pontos pega o objeto do jeito que esta e depois da virgula eu aiciono as categorias  */
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
       />
        
    );
}

export default BarChart;