import './index.css'

const PasswordDisplay = props => {
  const {display, onClickCheckBox, onDeletePassword} = props
  const {id, website, username, password} = display
  const deletePassword = () => {
    console.log(id)
    onDeletePassword(id)
  }
  return (
    <li className="display-container-1">
      <h1 className="website-icon">{website[0].toUpperCase()}</h1>
      <div className="password-details-container">
        <p className="password-details">{website}</p>
        <p className="password-details">{username}</p>
        {onClickCheckBox ? (
          <p className="password-details">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button onClick={deletePassword} className="delete-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordDisplay
