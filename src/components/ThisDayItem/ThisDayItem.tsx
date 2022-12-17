import { IndicatorSvgSelector } from 'assets/icons/indicator/IndicatorSvgSelector'
import { Item } from 'types/ITem'

import './styles.scss'

interface Props {
    item: Item
}

const ThisDayItem = ({item}:Props) => {
    const {iconId, name, value} = item

    return (
        <div className='item'>
            <div className='indicator'>
                <IndicatorSvgSelector id={iconId}/>
            </div>
            <div className='indicatorName'>{name}</div>
            <div className='indicatorValue'>{value}</div>
        </div>
    )
}

export {ThisDayItem}