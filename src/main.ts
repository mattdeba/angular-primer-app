import { Name, WeatherLocation } from "./modules/NameAndWeather" ;
let name = new Name("Matthieu", "Debarge") ;
let loc = new WeatherLocation("sunny", "Paris") ;
console.log(name.nameMessage) ;
console.log(loc.weatherMessage) ;
