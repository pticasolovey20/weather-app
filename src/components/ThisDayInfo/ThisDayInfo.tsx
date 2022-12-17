import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'
// import cloud from 'assets/images/cloud.png'
import { ThisDayItem } from 'components/ThisDayItem/ThisDayItem'
import { Item } from 'types/ITem'

import './styles.scss'

const ThisDayInfo = () => {
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
        <div className='thisDayInfoWrapper'>
            <div className='thisDayInfoItems'>
                {items.map((item: Item)=> (
                    <ThisDayItem key={item.iconId} item={item}/>
                ))}
            </div>
        </div>
    )
}

export {ThisDayInfo}