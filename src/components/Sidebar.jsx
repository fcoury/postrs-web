import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="icon-list">
        <li>
          <i className="far fa-bars"></i>
        </li>
        <li className="selected">
          <i className="far fa-inbox"></i>
        </li>
        <li>
          <i className="far fa-star"></i>
        </li>
        <li>
          <i className="far fa-paper-plane"></i>
        </li>
        <li>
          <i className="far fa-user-circle"></i>
        </li>
        <li>
          <i className="far fa-exclamation-square"></i>
        </li>
        <li>
          <i className="far fa-trash-alt"></i>
        </li>
      </ul>
      <ul className="icon-list bottom-icon">
        <li>
          <i className="far fa-moon"></i>
        </li>
        <li>
          <i className="far fa-cog"></i>
        </li>
        <li>
          <i className="far fa-question-circle"></i>
        </li>
      </ul>
    </div>
  );
}
