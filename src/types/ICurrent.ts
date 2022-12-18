import { ICondition } from "./ICondition"

export interface ICurrent {
    cloud: number,
    condition: ICondition,
    feelslike_c: number,
    humidity: number
    is_day: number
    precip_mm: number ,
    temp_c: number,
    uv: number,
    wind_degree: number,
    wind_dir: string,
    wind_kph: number ,
    pressure_mb: number,
}

