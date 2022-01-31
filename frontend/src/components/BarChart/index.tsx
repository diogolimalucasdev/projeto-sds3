/* shift + alt + a para comentar */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];

    };
    series: SeriesData[];
}



const BarChart = () => {

    const [chartData, setCharData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });


    useEffect(() => {
        axios.get(`${BASE_URL} + '/sales/success-by-seller'`)
            .then(response => {

                const data = response.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));

                setCharData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "%sucesso",
                            data: mySeries
                        }
                    ]
                });

            });
    }, []);




    /* como é uma função java Script eu posso colocar todo meu codigo antes e depois apenas retornar o que..
    eu escolher */
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

   


    return (
        /* usamos o apexCharts, do site deles com codigos prontos relacionados a react */


        <Chart
            /* me referencio ao options criado no incio */
            /* os 3 pontos pega o objeto do jeito que esta e depois da virgula eu aiciono as categorias  */
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChart;