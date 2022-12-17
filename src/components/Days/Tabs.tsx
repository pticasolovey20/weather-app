import { ITabs } from 'types/ITabs'

import './styles.scss'

const Tabs = () => {
    const tabs:ITabs[] = [
        {
            value: 'For the week'
        },
        {
            value: 'For 10 days'
        },
        {
            value: 'For a month'
        }
    ]

    return (
        <div className='tabs'>
            <div className='tabsWrapper'>
                {tabs.map(tab => (
                    <div className='tab' key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className='cancel'>Cancel</div>
        </div>
    )
}

export {Tabs}