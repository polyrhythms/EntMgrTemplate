using Common.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace UnitTests
{
    [TestClass]
    public class WeatherForecastTests
    {
        public static IEnumerable<object[]> DataTestInput
        {
            get
            {
                return new[]
                {
                    new object[]
                    {
                        new WeatherForecast
                        {
                            Date = DateTime.Now.AddDays(1),
                            TemperatureC = 10,
                            Summary = "Chilly!",
                        }
                    },
                    new object[]
                    {
                        new WeatherForecast
                        {
                            Date = DateTime.Now.AddDays(2),
                            TemperatureC = 20,
                            Summary = "Noice!",
                        }
                    },
                    new object[]
                    {
                        new WeatherForecast
                        {
                            Date = DateTime.Now.AddDays(3),
                            TemperatureC = 25,
                            Summary = "Warm!",
                        }
                    }
                };
            }
        }

        [DataTestMethod]
        [DynamicData(nameof(DataTestInput))]
        public void DataTest(WeatherForecast forecast)
        {
            Assert.IsTrue(forecast.Date > DateTime.Now, "Date is not in the future");
            Assert.IsNotNull(forecast.Summary, "Summary is null");
            Assert.IsTrue(forecast.TemperatureF == 32 + (int)(forecast.TemperatureC / 0.5556));
        }
    }
}
