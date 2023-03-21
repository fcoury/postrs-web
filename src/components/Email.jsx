import "./Email.css";

export default function Email() {
  return (
    <div class="email">
      <div class="actions">
        <div class="left">
          <i class="far fa-arrow-left"></i>
          <i class="far fa-archive"></i>
          <i class="far fa-exclamation-square"></i>
        </div>
        <div class="middle">
          <i class="far fa-chevron-left"></i>
          <div class="page">1 of 15</div>
          <i class="far fa-chevron-right"></i>
        </div>
        <div class="right">
          <i class="far fa-reply"></i>
          <i class="far fa-ellipsis-v"></i>
        </div>
      </div>
      <div class="details">
        <div class="summary">
          <div class="avatar"></div>
          <div class="sender-info">
            <div class="sender">Andrew Cano</div>
            <div class="sender-email">andrewcano@keioto.co</div>
          </div>
          <div class="received">10:30AM (15 mins ago)</div>
        </div>
        <div class="subject">Report - Chatto Project</div>
        <div class="body">
          Hello, Orlando! Please see project status in the pdf attached. The
          project is on track and we are on schedule.
        </div>
      </div>
    </div>
  );
}
