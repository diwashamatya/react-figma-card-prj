import './Banner.css'
import Flex from './Flex'
import rec1 from '../img/Rectangle1.png'
import rec2 from '../img/Rectangle2.png'
import rec3 from '../img/Rectangle3.png'
import rec4 from '../img/Rectangle4.png'
import rec5 from '../img/Rectangle5.png'
export default function Banner() {
    return (
        <div className='Dframe'>
            <div className='highlghts'>Highlight</div>
            <div className='frame-1'>
                <Flex  img={rec1} name1='dinglang.eth' nameamt='1.82' time='2 months ago' amount='+200XP' title='Ens Linked ' link='Ens Linked'></Flex>
                <Flex isActive={true}img={rec2} name1='Best Flip' nameamt='1.82' time='2 months ago' amount='+200XP' title='Best Flip ' link='Sold'></Flex>
                <Flex img={rec3} name1='dinglang.eth' nameamt='1.82' time='2 months ago' amount='+200XP' title='Should Have ' link='Mint'></Flex>
                <Flex img={rec4} name1='dinglang.eth' nameamt='1.82' time='2 months ago' amount='+200XP' title='First Nft ' link='Bought'></Flex>
                <Flex img={rec5} name1='Moonbird' nameamt='95.6' time='10 days ago' amount='+200XP' title='Paper Handed' link='Sold'></Flex>
            </div>
        </div>
    )

}