import "./Email.css";

export default function Email() {
  return (
    <div className="email">
      <div className="actions">
        <div className="left">
          <i className="far fa-arrow-left"></i>
          <i className="far fa-archive"></i>
          <i className="far fa-exclamation-square"></i>
        </div>
        <div className="middle">
          <i className="far fa-chevron-left"></i>
          <div className="page">1 of 15</div>
          <i className="far fa-chevron-right"></i>
        </div>
        <div className="right">
          <i className="far fa-reply"></i>
          <i className="far fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="details">
        <div className="summary">
          <div className="avatar"></div>
          <div className="sender-info">
            <div className="sender">Andrew Cano</div>
            <div className="sender-email">andrewcano@keioto.co</div>
          </div>
          <div className="received">10:30AM (15 mins ago)</div>
        </div>
        <div className="subject">Report - Chatto Project</div>
        <div className="body">
          Hello, Orlando! Please see project status in the pdf attached. The
          project is on track and we are on schedule.
        </div>
      </div>
    </div>
  );
}
