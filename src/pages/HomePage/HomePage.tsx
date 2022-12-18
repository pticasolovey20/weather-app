import React, { useEffect, useState } from 'react'
import { ThisDay } from 'components/ThisDay/ThisDay'
import { ThisDayInfo } from 'components/ThisDayInfo/ThisDayInfo'
import { Days } from 'components/Days/Days'
import { IWeather } from 'types/IWeather'
import { getWeather } from 'services/getWeather'

import './styles.scss'

const HomePage = () => {
    const [weather, setWeather] = useState<IWeather | null>(null)

    useEffect(() => {
        getWeather().then(response => {
            setWeather(response.data.current)
        })
    },[])

    return (
        <div className='homeWrapper'>
            <div className='wrapper'>
                {weather && <>
                    <ThisDay current={weather}/>
                    <ThisDayInfo current={weather}/>
                </> }
            </div>
            <Days/>
        </div>
    )
}

export {HomePage}
