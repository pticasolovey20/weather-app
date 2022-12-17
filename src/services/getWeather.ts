import axios,{AxiosResponse} from "axios";

export const getWeather = async() :Promise<AxiosResponse> => {
    const requestUrl = 'http://api.weatherapi.com/v1/forecast.json?key=c94e4ab5939e427a806203538221712&q=Poltava&days=7&aqi=no&alerts=no'
    const response = await axios.get(requestUrl)
    return response
} 