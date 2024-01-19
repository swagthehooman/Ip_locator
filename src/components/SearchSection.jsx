import "./searchSection.css";

export default function SearchSection({
  handleChange,
  ipAddress,
  handleClick,
}) {
  return (
    <div className="search-section">
      <p className="heading">IP Address Tracker</p>
      <div className="search-bar">
        <input
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <img src="../images/icon-arrow.svg" />
        </button>
      </div>
    </div>
  );
}
