import './Front.css'
import a from './assets/a.png'
import b from './assets/b.png'
import c from './assets/c.png'
import d from './assets/d.png'

function Front({ percentage, img, img1, img2, lvl, title1, subtitle }) {
    return (<div className='padding'>

        <div class='frame-no-1'>
            <div className='frame1-sub'>
                <div className="group">
                    <div ><img className='rec' src={img} alt='profile'></img></div>

                </div>
                <div className='lvl-frame'>
                    <p className='text-p'>{lvl}</p>

                </div>
            </div>
            <div className='frame1-sub2'>
                <div className='first-name'>{title1}</div>
                <div className='second-name'>{subtitle}</div>

            </div>
        </div>
        <div className='frame-no-2'>
            <div className='frame2-sub'>
                <img className='twitter' src={img1} alt=''></img>
                <div className='twitter-name'>@dingalingts</div>
            </div>
            <div class='globe'><img className='globe2' src={img2} alt=''></img></div>

        </div>
        <div className='simple-text'>An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes</div>

        <div className='frame-no-4'>
            <header>Common communties (3)</header>
            <div className='images-flex'>
                <img src={a} alt='1'></img>
                <img src={b} alt='2'></img>
                <img src={c} alt='3'></img>
                <img src={d} alt='4'></img>
            </div>
        </div>

        <div className='frame-no-5'>
            <div className='sub-frame'>
                <div className="sub-frame-2">
                    <div className='sub-text'>Art</div>
                    <div className='sub-text2'>{percentage}</div>
                </div>
                <div class="sub-frame-2">
                    <div class='sub-text'>Utility</div>
                    <div className='sub-text2'>{percentage}</div>

                </div>
                <div className='sub-frame-3'>
                    <div className='subtext'>PFP</div>
                    <div className='subtext1'>{percentage}</div>

                </div>
            </div>
            <div className='sub-frame'>
                <div className='sub-frame-3'>
                    <div className='subtext'>Meta</div>
                    <div className='subtext1'>{percentage}</div>
                </div>
                <div className='sub-frame-3'>
                    <div className='subtext'>Game</div>
                    <div className='subtext1'>{percentage}</div>
                </div>
            </div>
            <div className='sub-frame'>
                <div className='sub-frame-3'>
                    <div className='subtext'>PFP</div>
                    <div className='subtext1'>{percentage}</div>
                </div>
                <div className='sub-frame-3'>
                    <div className='subtext'>ens</div>
                    <div className='subtext1'>{percentage}</div>
                </div>
            </div>

        </div>


        <div className='button'>
            <button>Subscribe</button>
        </div>

    </ div>

    )
}
export default Front;