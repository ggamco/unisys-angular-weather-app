export class WeatherData {
    weather?: Weather;
    main?: Main;
}
export class Main {
    temp?: number;
    temp_min?: number;
    temp_max?: number;
}
export class Weather {
    description?: string;
}