const Notification = (props) => {
  //  Write your code here.
  const { className, icon, children } = props;

  const individualCont = `${className}`;
  return (
    <div className={`button ${className}`}>
      <img className="image" src={icon} />
      <p className="heading2">{children}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-cont">
    <h1 className="heading">Notifications</h1>

    <div className="notification-container">
      <Notification
        className="indi-cont1"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        children="Information Message"
      />
      <Notification
        className="indi-cont2"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        children="Success Message"
      />
      <Notification
        className="indi-cont3"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        children="Warning Message"
      />
      <Notification
        className="indi-cont4"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        children="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
