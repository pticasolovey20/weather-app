import { IDays } from 'types/IDays'
import { Card } from './Card'
import { Tabs } from './Tabs'
import './styles.scss'

const Days = () => {
    const days: IDays[] =[
        {
            day: 'Today',
            day_info: 'Aug 28th',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Tomorrow',
            day_info: 'Aug 28th',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Drizzling',
        },
        {
            day: 'Wed',
            day_info: 'Aug 28th',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Drizzling',
        },
        {
            day: 'Thu',
            day_info: 'Aug 28th',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Fri',
            day_info: 'Aug 28th',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Sat',
            day_info: 'Aug 28th',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
        {
            day: 'Sun',
            day_info: 'Aug 28th',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Cloudy',
        },
    ]

    return (
        <>
            <Tabs/>
            <div className='days'>
                {days.map((day: IDays) => (
                    <Card item={day} key={day.day}/>
                ))}
            </div>
        </>
    )
}

export {Days}