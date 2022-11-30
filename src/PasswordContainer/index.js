import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordDisplay from '../PasswordDisplay'

const passwordsList = []

class PassWordContainer extends Component {
  state = {
    currentPasswordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    onClickCheckBox: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAddObject = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      const addObject = {id: uuidv4(), website, username, password}
      passwordsList.push(addObject)
      this.setState(prevState => ({
        currentPasswordsList: [...prevState.currentPasswordsList, addObject],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({onClickCheckBox: !prevState.onClickCheckBox}))
  }

  onDeletePassword = id => {
    const {currentPasswordsList} = this.state
    const filter = currentPasswordsList.filter(i => i.id !== id)
    this.setState({currentPasswordsList: [...filter]})
  }

  render() {
    const {
      currentPasswordsList,
      website,
      username,
      password,
      searchInput,
      onClickCheckBox,
    } = this.state
    const filteredPasswordList = currentPasswordsList.filter(i =>
      i.website.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-logo"
          />
          <div className="add-password-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="add-password-sm-image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="add-password-lg-image"
            />
            <form onSubmit={this.onAddObject} className="form-container">
              <h1 className="form-title">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-element-logo"
                />
                <hr />
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-element-logo"
                />
                <hr />
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-element-logo"
                />
                <hr />
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <button testid="delete" className="submit-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="view-password-container">
            <div className="view-password-container-1">
              <div className="view-password-header">
                <h1 className="view-password-title">Your Passwords</h1>
                <p className="password-count">{filteredPasswordList.length}</p>
              </div>
              <div className="password-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <hr className="thematic-break" />
                <input
                  placeholder="Search"
                  className="search-bar"
                  type="search"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr className="thematic-break-1" />
            <div className="show-password-container">
              <input
                id="check"
                className="checkbox-element"
                type="checkbox"
                onChange={this.onChangeCheckBox}
              />
              <label className="label-element" htmlFor="check">
                Show Passwords
              </label>
            </div>
            {filteredPasswordList.length === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-image"
                />
                <p className="no-password-desc">No Passwords</p>
              </div>
            ) : (
              <ul className="password-display-container">
                {filteredPasswordList.map(i => (
                  <PasswordDisplay
                    onClickCheckBox={onClickCheckBox}
                    onDeletePassword={this.onDeletePassword}
                    key={i.id}
                    display={i}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PassWordContainer
