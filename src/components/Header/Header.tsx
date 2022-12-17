import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'
import { useTheme } from 'hooks/useTheme'

import './styles.scss'
import { Theme } from 'context/ThemeContext'

const Header = () => {
    const theme = useTheme()

    const options = [
        { value: 'city-1', label: 'Poltava' },
        { value: 'city-2', label: 'Kyiv' },
        { value: 'city-3', label: 'Dnipro' }
    ]

    const colourStyles = {
        control: (styles:any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles:any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
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
                <div className='changeTheme' onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme'/>
                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
           </div>
        </header>
    )
}

export {Header}