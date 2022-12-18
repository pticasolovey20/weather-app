import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'

import './styles.scss'

const ThisDay = () => {
    return (
        <div className='thisDayWrapper'>
            <div className='topBlock'>
                <div className='blockWrapper'>
                    <div className='thisTemp'>{20 + '°'}</div>
                    <div className='thisDay'>Today</div>
                </div>
                <GlobalSvgSelector id={'sun'}/>
            </div>  
            <div className='bottomBlock'>
                <div className='thisTime'>
                    Time: <span>15:00</span>
                </div>
                <div className='thisCity'>
                    City: <span>Poltava</span>
                </div>
            </div>
        </div>
    )
}

export {ThisDay}