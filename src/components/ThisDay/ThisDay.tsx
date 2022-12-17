import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'
import { IWeather } from 'types/IWeather'

import './styles.scss'

interface Params {
    current: IWeather
}

const ThisDay = ({current}:Params) => {
    return (
        <div className='thisDayWrapper'>
            {current && <>
                <div className='topBlock'>
                    <div className='blockWrapper'>
                        <div className='thisTemp'>{current.temp_c.toFixed() + '°'}</div>
                        <div className='thisDay'>Today</div>
                    </div>
                    <GlobalSvgSelector id={current.condition.text}/>
                </div>  
                <div className='bottomBlock'>
                    <div className='thisTime'>
                        Time: <span>15:00</span>
                    </div>
                    <div className='thisCity'>
                        City: <span>Poltava</span>
                    </div>
                </div>
            </>}
        </div>
    )
}

export {ThisDay}