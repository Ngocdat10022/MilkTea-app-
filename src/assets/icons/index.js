import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
export const IConNext = ({ style, onClick }) => {
    return (
        <button className="btn-slider btn-next">
            <FontAwesomeIcon icon={faAngleRight}
                style={{ ...style, display: "block", position: 'absolute', color: '#fff', fontSize: ' 32px', cursor: 'pointer' }}
                onClick={onClick} />
        </button>
    )
}

export const IconPrev = ({ style, onClick }) => {
    return (
        <button className="btn-slider btn-prev">
            <FontAwesomeIcon icon={faAngleLeft}
                style={{ ...style, display: "block", position: 'absolute', color: '#fff', fontSize: ' 32px', cursor: 'pointer' }}
                onClick={onClick} />
        </button>
    )
}