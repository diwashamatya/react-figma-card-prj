import './Flex.css'

export default function Flex({ isActive, img, title, link, name1, nameamt, time, amount }) {

    return (
        <div className='firstframe'>
            <div className='secondframe'>
                <img src={img} alt='rec' />
                <div className='titleandlink'>
                    <div class='link-title'>{title}</div>
                    <div className='link-div'><div className={isActive ? 'title-link2' : 'title-link'}>{link}</div></div>

                </div>

            </div>
            <div className='second-frame'>
                <div className="first-nameholder">

                    <div className='Name'>{name1}</div>
                    <div className='floor-holder'>
                        <div className='name-amount' >{nameamt}</div>
                    </div>

                </div>

                <div className='second-nameholder'>
                    <div classname='time'>{time}</div>
                    <div className='floor-holder'>
                        <div className='time-amount'>{amount}</div>
                    </div>

                </div>

            </div>

        </div>

    )
}