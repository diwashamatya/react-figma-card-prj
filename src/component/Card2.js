
import './Card2.css'


export default function Card({ img, title, bought, floor, amount }) {
    return (
        <>
            <div className='frame'>
                <img className='img' src={img} alt='1'></img>
                <div className='nameholder'>
                    <div className='nftname'>{title}</div>
                    <div className='nftnameholder'>
                        <div className='bought'>
                            Bought
                        </div>
                        <div className='amount'>
                            {bought}'&'

                        </div>
                    </div>
                    <div className='nftnameholder'>
                        <div className='floor'>
                            Floor
                        </div>
                        <div className='amount'>
                            {floor}
                        </div>
                        <div className='amount1'>'&'{amount}</div>
                    </div>
                </div>

            </div>


        </>


    )
}