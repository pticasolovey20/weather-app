import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'
import { ThisDayItem } from 'components/ThisDayItem/ThisDayItem'
import { Item } from 'types/ITem'

import './styles.scss'

const Popup = () => {
    const items = [
        {
            iconId:'temp',
            name:'Temperature',
            value:'20° - feels like 17°'
        },
        {
            iconId:'pressure',
            name:'Pressure',
            value:'765 mm Hg - normal'
        },
        {
            iconId:'precipitation',
            name:'Precipitation',
            value:'No precipitation'
        },
        {
            iconId:'wind',
            name:'Wind',
            value:'3 m/s southwest - light wind'
        }
    ]

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
                    {items.map((item: Item)=> (
                        <ThisDayItem key={item.iconId} item={item}/>
                    ))}
                </div>
                <div className='close'><GlobalSvgSelector id='close'/></div>
            </div>
        </>
    )
}

export {Popup}