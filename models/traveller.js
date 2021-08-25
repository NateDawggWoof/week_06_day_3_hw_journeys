const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter((journey) => {
    return journey.transport == transport
  })
  return journeys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
  return journeys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transport = this.journeys.map((journey) => {
    return journey.transport
  })
  return uniqueTransport = [...new Set(transport)]
};


module.exports = Traveller;
