
import { GifPreview } from './GifPreview.jsx';

export function GifsList(props) {

        return (<div className="gifs-list">
                {
                        props.gifs.map(function (item, index) {
                                return <GifPreview url={item.images.original.webp} key={index} i={index} />
                        })
                }
        </div>)
}
