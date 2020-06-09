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
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16Y3lNelExT1VVNU1rVTBSRGN3UlVFMk5FSkJRVVl6UlRJM1JqSXdNemt4UXpBeU9VSkZSZyJ9.eyJpc3MiOiJodHRwczovL3N5c3Zpcy1kZXYuYXV0aDAuY29tLyIsInN1YiI6ImpVWXhNUll3QUh0Y1pXb0tycDNrNnlsZFFnTTVGMGdRQGNsaWVudHMiLCJhdWQiOiJFbnRNZ3JBcGkiLCJpYXQiOjE1OTE2NDk1NTgsImV4cCI6MTU5MzQ2Mzk1OCwiYXpwIjoialVZeE1SWXdBSHRjWldvS3JwM2s2eWxkUWdNNUYwZ1EiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.BtkY-OvndPIhNP6w8I6bODcwjmSEJ5MS8e2jWbR8Bkv8Uk7OP3S_LyLFTyfKNLpPKJnHPpJxXPQZo6FsTgNySBASWTF2nZXfdmk2Nljrc2-ALLjZWw6cEGxQXy2M8q419tzdmGAOyyR2WPBcVo8DX5ZuIzFJrcmHcGMgjm6vPAcl8TmXLZJEEq5OYA8x6oFRmaG1NwWAcOdBgtJyEii-6KrQAcGb_HoCGpWnThtcMM6J3e67MvCPmQNlq8wSEzXoNBME3bDh0hX9QJ9DnuhAj6IqPYCQ7oh4FGoXnF1s45e667ViconcLPdFqBd9JcdRjD_40t9mPjRXp76qMt2sMA",
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
