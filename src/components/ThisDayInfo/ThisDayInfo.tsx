// import cloud from 'assets/images/cloud.png'
import { IndicatorSvgSelector } from 'assets/icons/indicator/IndicatorSvgSelector'
import { prepareWindSpeed } from 'services/prepareWindSpeed'
import { prepareWindDir } from 'services/prepareWindDir'
import { IWeather } from 'types/IWeather'

import './styles.scss'

interface Params {
    current: IWeather
}

const ThisDayInfo = ({current}:Params) => {
    return (
        <div className='thisDayInfoWrapper'>
            <div className='thisDayInfoItems'>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='temp'/>
                    </div>
                    <div className='indicatorName'>Temperature:</div>
                    <div className='indicatorValue'>{current.temp_c.toFixed()}° - feels like {current.feelslike_c.toFixed()}°</div>
                </div>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='pressure'/>
                    </div>
                    <div className='indicatorName'>Pressure:</div>
                    <div className='indicatorValue'>{current.pressure_mb} mm Hg</div>
                </div>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='precipitation'/>
                    </div>
                    <div className='indicatorName'>Precipitation:</div>
                    <div className='indicatorValue'>{current.precip_mm ? current.precip_mm : 'no precipitation'}</div>
                </div>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='wind'/>
                    </div>
                    <div className='indicatorName'>Wind:</div>
                    <div className='indicatorValue'>
                        {prepareWindSpeed(current.wind_kph).toFixed() + 
                        ' m/s ' + 
                        prepareWindDir(current.wind_dir)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ThisDayInfo}