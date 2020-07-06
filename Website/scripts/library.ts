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
                }
            }
        };

        $.ajax({
            url: "https://localhost:44351/weatherforecast",
            success: success,
            headers: {
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16Y3lNelExT1VVNU1rVTBSRGN3UlVFMk5FSkJRVVl6UlRJM1JqSXdNemt4UXpBeU9VSkZSZyJ9.eyJpc3MiOiJodHRwczovL3N5c3Zpcy1kZXYuYXV0aDAuY29tLyIsInN1YiI6ImpVWXhNUll3QUh0Y1pXb0tycDNrNnlsZFFnTTVGMGdRQGNsaWVudHMiLCJhdWQiOiJFbnRNZ3JBcGkiLCJpYXQiOjE1OTM2NDg4MjYsImV4cCI6MTU5NTQ2MzIyNiwiYXpwIjoialVZeE1SWXdBSHRjWldvS3JwM2s2eWxkUWdNNUYwZ1EiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.M5Iz6RrBnPsT0sH0ZPArbQRKdG7ZxzvHRd3ldvs0ys8CImklDunBNLnRsA4O6ZRlZXIC3r3GJPtFDA2kYtiwmlcQEcJnmfLWo4K9ZLNiiZQJ05kAlJIH7ccX7x6lvcgMCoRA92abbycHoQyZF42zcRdYPHCRuv4thWLnF_HR_BZK0tpZ4sivu_gEa9nhZNNKau_N8fj8v8wTPQPj_t52KtHpvzOfHbWLNGCXw98mYdOWG8EtOw3Kbc__qfKIQwCbDvNk07d1SabrYdROEVzpk5_ZVYXqMktdOKoqs2JkcOdW2VoCXvoGRzOb-MzhHreyYffW80Sr831iUm6w3GUUZA",
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
