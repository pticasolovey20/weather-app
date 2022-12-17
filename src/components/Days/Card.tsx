import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import { IDays } from 'types/IDays'
import './styles.scss'

interface Props {
    item:IDays;
}

const Card = ({item}: Props) => {
    
    const {day, day_info, icon_id, temp_day, temp_night, info} = item

    return (
        <div className='card'>
            <div className='day'>
                {day}
            </div>
            <div className='date'>
                {day_info}
            </div>
            <div className='icon'>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className='tempDay'>
                {temp_day}
            </div>
            <div className='tempNight'>
                {temp_night}
            </div>
            <div className='info'>
                {info}
            </div>
        </div>
    )
}

export {Card}