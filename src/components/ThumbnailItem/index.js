// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, getOnClickId} = props
  const {id, thumbnailUrl} = imageDetails

  const updateOnClickId = () => {
    getOnClickId(id)
  }

  return (
    <li className="thumbnail-container">
      <button className="button" type="button" onClick={updateOnClickId}>
        <img
          src={thumbnailUrl}
          alt="thumbnailAltText"
          className="thumbnail-img2"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
