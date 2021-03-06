import Tooltip from '@mui/material/Tooltip';

import WhatsApp from '../assets/imgs/WhatsApp.png';
import gmail from '../assets/imgs/gmail.png';

export function GifPreview({ url }) {

    var linkW = "https://web.whatsapp.com/send?text=" + url;
    var linkM = 'mailto:?body=' + url + '&subject="gif".com';

    return (
        <div className='gif-preview'>


            <img className='img' src={url} alt="" />
            <div className='share-container'>

                <Tooltip title="share in gmail" arrow placement="bottom">
                    <a href={linkM} className="share-icon"><img className='share-btn' src={gmail} alt="" /></a>
                </Tooltip>
                <Tooltip title="share in WhatsApp" arrow placement="bottom">
                    <a href={linkW} className="share-icon"><img className='share-btn' src={WhatsApp} alt="" /></a>
                </Tooltip>

            </div>
        </div>)

}
