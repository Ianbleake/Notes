import Button from "./Button"

const MessageAlert = ({ message, type, onResponse }) => {
  if (message === null) {
    return null
  } else {
    if (type === 'warning') {
      return (
        <div className="message warning">
          <div className="messagebox">
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
            <p className="pmessage">{message}</p>
          </div>
          <div className="buttons">
            <Button handle={() => onResponse(true)} text={'Yes'} />
            <Button handle={() => onResponse(false)} text={'No'} />
          </div>
        </div>
      )
    } else {
      let style = ''
      if (type === 'success') {
        style = "message success"
      } else if (type === 'error') {
        style = "message error"
      }

      return (
        <div className={style}>
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
          <p className="pmessage">{message}</p>
        </div>
      )
    }
  }
}

export default MessageAlert
