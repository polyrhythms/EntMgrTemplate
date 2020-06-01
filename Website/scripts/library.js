export class SampleCodeTester {
    constructor() { }
    testJQuery() {
        let version = jQuery.fn.jquery.toString();
        let content = $("#ts-example-2")[0].innerHTML;
        $("#ts-example-2")[0].innerHTML = content + " " + version;
    }
    testApi() {
        let success = (forecasts) => {
            if (forecasts && forecasts.length > 0) {
                for (let forecast of forecasts) {
                    $("#ts-example-3 tr:last").after('<tr><td>' + forecast.date +
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
}
;
class WeatherForecast {
}
//# sourceMappingURL=library.js.map