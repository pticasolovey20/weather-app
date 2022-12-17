import React from 'react'

import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'

import './styles.scss'

const Header = () => {
    const options = [
        { value: 'city-1', label: 'Poltava' },
        { value: 'city-2', label: 'Kyiv' },
        { value: 'city-3', label: 'Dnipro' }
    ]

    const colourStyles = {
        control: (styles:any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <header className='header'>
           <div className='wrapper'>
                <div className='logo'>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className='title'>React Weather</div>
            </div>
            <div className='wrapper'>
                <div className='changeTheme'>
                    <GlobalSvgSelector id='change-theme'/>
                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
           </div>
        </header>
    )
}

export {Header}