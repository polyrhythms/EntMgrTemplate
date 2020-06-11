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
            headers: {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16Y3lNelExT1VVNU1rVTBSRGN3UlVFMk5FSkJRVVl6UlRJM1JqSXdNemt4UXpBeU9VSkZSZyJ9.eyJpc3MiOiJodHRwczovL3N5c3Zpcy1kZXYuYXV0aDAuY29tLyIsInN1YiI6ImV6YzNsRmxtRGxmUjRBd3hGQVFINGNmNXBPcU1nbXdrQGNsaWVudHMiLCJhdWQiOiJ3ZWJhcGkiLCJpYXQiOjE1OTE4MzQ3OTksImV4cCI6MTU5MzY0OTE5OSwiYXpwIjoiZXpjM2xGbG1EbGZSNEF3eEZBUUg0Y2Y1cE9xTWdtd2siLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.QYKR1mWOSo0-aI8pDrXL-z3JkKZN4mqGzeHhBiE_2lYHxahL1MTHCEXiestpHFXEq5zy0SkOWiDDdv16IL_TTHN1yj8tioopH66Ywa3w1gs_nPyFUog3JhTfFQA4DaUvBngZD8nkaSjSWgKZCcPsWlsRtt48M7WXk96DTJb5D8pvVT2foWU3kdGYOcjNbU3Tk5b6qs97f8skAZhBY84yuwsPrOTbhZVqDaaZDyNFGFa8ecionT_8nDTCDx-dgESd_qUGCHWXqrnrh1xPFRd8U-EcJ87azP0l4I-8-41T5pwnfCBf_9dolQzJk-25L7luI3a3N02S6lX9_tjaVi9FjQ",
            },
        });
    }
};

class WeatherForecast {
    public date: string;
    public temperatureC: number;
    public temperatureF: number;
    public summary: string;
}
