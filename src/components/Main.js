import React from 'react'
// import WatsonList from './Watsonlist'
// import twitterLogo from '../assets/owner/twitterLogo'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import './Main.css'
const Main = () => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='watsonHighlight'>
                    <div className='watsonContainer'>
                        <img className='selectedWatson' src=
                            {'https://gateway.thirdweb.dev/ipfs/QmZap2j65rxBpJ7x1r7pJLnT7Qv8t3A4gEMnxLi9YXJbRi/0.png'} alt='' />
                    </div>
                </div>

                <div className='watsonDetails' style={{ color: '#fff' }}>
                    <div className='title'>
                        {/* {activeWatson.name} */}
                        WatsonList
                    </div>
                    <span className='itemNumber'>·#4</span>
                </div>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img
                        src=
                        {'https://gateway.thirdweb.dev/ipfs/QmZap2j65rxBpJ7x1r7pJLnT7Qv8t3A4gEMnxLi9YXJbRi/0.png'} alt='' />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div className='address'>0x2222222222222222222</div>
                        <div className='ownerHandle'>@Goodmama</div>
                        <div className='owner'></div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreLogo} alt='' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Main
