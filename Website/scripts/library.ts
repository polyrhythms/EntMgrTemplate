export class SampleCodeTester {

    constructor() { }

    public testJQuery(): void {
        let version: any = jQuery.fn.jquery.toString();
        let content: any = $("#example2").html();
        $("#example2").html(content + " " + version);
    }

    public testApi(): void {
        let success = (forecasts: WeatherForecast[]) => {
            if (forecasts && forecasts.length > 0) {
                for (let forecast of forecasts) {
                    $("#example3 tr:last").after(
                        '<tr><td>' + forecast.date +
                        '</td><td>' + forecast.temperatureC +
                        '</td><td>' + forecast.temperatureF +
                        '</td><td>' + forecast.summary +
                        '</td></tr>');
                    console.log(forecast.summary);
                }
            }
        };

        $.ajax({
            url: "https://localhost:44351/weatherforecast",
            success: success,
        });
    }
};

class WeatherForecast {
    public date: string;
    public temperatureC: number;
    public temperatureF: number;
    public summary: string;
}
