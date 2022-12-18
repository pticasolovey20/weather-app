import { ThisDayInfo } from 'components/ThisDayInfo/ThisDayInfo'
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'

import './styles.scss'

const Popup = () => {
    return (
        <>
            <div className='blur'></div>
            <div className='popup'>
                <div className='dayPart'>
                    <div className='dayTemp'>12°</div>
                    <div className='dayName'>Wednesday</div>
                    <div className='dayImage'>
                        <GlobalSvgSelector id='sun'/>
                    </div>
                    <div className='dayTime'>
                        Time: <span>15:00</span>
                    </div>
                    <div className='city'>
                        City: <span>Poltava</span>
                    </div>
                </div>
                <div className='thisDayInfoItems'>
                    {/* <ThisDayInfo/> */}
                </div>
                <div className='close'><GlobalSvgSelector id='close'/></div>
            </div>
        </>
    )
}

export {Popup}