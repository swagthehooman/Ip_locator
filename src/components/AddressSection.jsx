import "./addressSection.css";

export default function AddressSection({ locationInfo }) {
  return (
    <div className="address-section">
      <div className="address-item">
        <label>IP ADDRESS</label>
        <p>{locationInfo.ipAddress}</p>
      </div>
      <div className="address-item">
        <label>Location</label>
        <p>{locationInfo.location}</p>
      </div>
      <div className="division"></div>
      <div className="address-item">
        <label>TIMEZONE</label>
        <p>{locationInfo.timezone}</p>
      </div>
      <div className="address-item">
        <label>ISP</label>
        <p>{locationInfo.isp}</p>
      </div>
    </div>
  );
}
