import { ThisDay } from 'components/ThisDay/ThisDay'
import { ThisDayInfo } from 'components/ThisDayInfo/ThisDayInfo'
import { Days } from 'components/Days/Days'
import './styles.scss'

const HomePage = () => {
    return (
        <div className='homeWrapper'>
            <div className='wrapper'>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    )
}

export {HomePage}
