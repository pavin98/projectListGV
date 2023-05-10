import './index.css'

const TabItem = props => {
  const {tabDetails, btnFunc, activeState} = props
  const {displayText, tabId} = tabDetails
  const idFunc = () => {
    btnFunc(tabId)
  }
  const classAdd = tabId === activeState ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${classAdd}`} onClick={idFunc}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
