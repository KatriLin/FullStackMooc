const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message.category}>
        {message.message}
      </div>
    )
  }

  export default Notification