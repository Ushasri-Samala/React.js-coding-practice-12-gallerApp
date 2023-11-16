// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickingThumbnailItem = () => {
    updateThumbnail(id)
  }

  const activeImageClassName = isActive ? `active-img` : `thumbnail-img`

  return (
    <li className="item-container">
      <button
        type="button"
        onClick={onClickingThumbnailItem}
        className="button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImageClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
