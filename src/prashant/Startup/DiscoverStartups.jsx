import FeaturedStartups from "./FeaturedStartups"
import "./startup.css"

function DiscoverStartups() {
  return (
    <div className="DiscoverStartups">
      <h1 className="title">Discover Startups</h1>
      <p className="subtitle">Explore high-potential startups seeking investment</p>
      <FeaturedStartups />
    </div>
  )
}

export default DiscoverStartups
