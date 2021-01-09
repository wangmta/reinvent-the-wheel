const Geo = require("geo-nearby");

const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [44, 64] },
      properties: { name: "Arkhangelskaya Oblast" }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [40.5433, 64.5401] },
      properties: { name: "Arkhangelsk" }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [39.8302, 64.5635] },
      properties: { name: "Severodvinsk" }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [40.8122, 64.4165] },
      properties: { name: "Novodvinsk" }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [46.64963, 61.25745] },
      properties: { name: "Kotlas" }
    }
  ]
};

const dataSet = Geo.createCompactSet(data, { id: "name" });
const geo = new Geo(dataSet, { sorted: true });

var result = geo.nearBy(64.54, 40.54, 5000); // 5000 - 5km

// console.log(result);

const restaurant = require("../../../Downloads/restaurants.json");
console.log(restaurant.length);
