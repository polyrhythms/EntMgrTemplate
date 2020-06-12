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
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16Y3lNelExT1VVNU1rVTBSRGN3UlVFMk5FSkJRVVl6UlRJM1JqSXdNemt4UXpBeU9VSkZSZyJ9.eyJpc3MiOiJodHRwczovL3N5c3Zpcy1kZXYuYXV0aDAuY29tLyIsInN1YiI6ImpVWXhNUll3QUh0Y1pXb0tycDNrNnlsZFFnTTVGMGdRQGNsaWVudHMiLCJhdWQiOiJFbnRNZ3JBcGkiLCJpYXQiOjE1OTE5ODA3MjYsImV4cCI6MTU5Mzc5NTEyNiwiYXpwIjoialVZeE1SWXdBSHRjWldvS3JwM2s2eWxkUWdNNUYwZ1EiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.FbSMFX4JNvk3pxwt4fqsb8mG0u3CEKq927hxOlbERUMTf_ZoOLJK3m13q2v6lVykFoQECtbfrv4dJnNx_gqlcCl0f-RC6FmeHMnSLGqiQMDqswllQuYAuzekekfmCpkSli6kl6XPLrVQEWUXXtRaQfk8dkDPVOVe9RR_nSa8tJEwemYcoLOcyA2LPV0IdnzRx7Bpj9Mb5PAvtpGGDkY6c6YWMVnWsK-tJT8_XMlU852BqVPhXmrp63yUJl7XJcqDcKOGBrAWMoFS19nKoBn2Rw-GteaPNU7wEXeZdF0cAeWNCkt8J5ZH1UYLHmkDYJxEUwn4p1efMImdnGLRkdmkfg",
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
