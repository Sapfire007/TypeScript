enum WeatherConditions{
    Sunny,
    Cloudy, 
    Rainy
}

console.log(WeatherConditions);
console.log(WeatherConditions.Cloudy);

enum WeatherConditions2{
    Sunny = 'Sun shines bright',
    Cloudy = 'Cloud cover', 
    Rainy = 'Precipitation'
}

console.log(WeatherConditions2);
console.log(WeatherConditions2.Cloudy);

const today = WeatherConditions2.Sunny;
console.log(`Today The ${today}`);