// import cloud from 'assets/images/cloud.png'
import { IndicatorSvgSelector } from 'assets/icons/indicator/IndicatorSvgSelector'
import { prepareWindSpeed } from 'services/prepareWindSpeed'
import { prepareWindDir } from 'services/prepareWindDir'

import './styles.scss'

const ThisDayInfo = () => {
    return (
        <div className='thisDayInfoWrapper'>
            <div className='thisDayInfoItems'>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='temp'/>
                    </div>
                    <div className='indicatorName'>Temperature:</div>
                    <div className='indicatorValue'>{20}° - feels like {18}°</div>
                </div>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='pressure'/>
                    </div>
                    <div className='indicatorName'>Pressure:</div>
                    <div className='indicatorValue'>{760} mm Hg</div>
                </div>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='precipitation'/>
                    </div>
                    <div className='indicatorName'>Precipitation:</div>
                    <div className='indicatorValue'>'no precipitation'</div>
                </div>
                <div className='item'>
                    <div className='indicator'>
                        <IndicatorSvgSelector id='wind'/>
                    </div>
                    <div className='indicatorName'>Wind:</div>
                    <div className='indicatorValue'>
                        {prepareWindSpeed(25).toFixed() + 
                        ' m/s ' + 
                        prepareWindDir('WNW')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ThisDayInfo}