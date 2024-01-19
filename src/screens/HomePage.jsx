import SearchSection from "../components/SearchSection";
import AddressSection from "../components/AddressSection";
export default function HomePage({
  ipAddress,
  inputHandler,
  handleGo,
  locationInfo,
}) {
  return (
    <div className="home-page">
      <SearchSection
        ipAddress={ipAddress}
        handleChange={inputHandler}
        handleClick={handleGo}
      />
      <AddressSection locationInfo={locationInfo} />
    </div>
  );
}
