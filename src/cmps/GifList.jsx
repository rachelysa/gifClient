
import { GifPreview } from './GifPreview.jsx';

export function GifsList({ gifs }) {

        return (
                <div className="gifs-list">
                        {
                                gifs.map(function (item, index) {
                                        return <GifPreview url={item.images.original.webp} key={index} i={index} />
                                })
                        }
                </div>)
}
