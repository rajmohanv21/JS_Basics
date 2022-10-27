const routeDistance = [
  { start: "chennai", end: "viluppuram", distance: 166 },
  { start: "viluppuram", end: "trichy", distance: 165 },
  { start: "trichy", end: "madurai", distance: 138 },
  { start: "madurai", end: "tirunelveli", distance: 171 },
  { start: "tirunelveli", end: "kanyakumari", distance: 85 },
  { start: "karur", end: "trichy", distance: 85 },
];

const routes = [
  {
    route: "chennai-trichy",
    stops: [
      {
        start: "chennai",
        end: "viluppuram",
      },
      {
        start: "viluppuram",
        end: "trichy",
      },
    ],
  },
  {
    route: "chennai-karur",
    stops: [
      {
        start: "chennai",
        end: "viluppuram",
      },
      {
        start: "viluppuram",
        end: "trichy",
      },
      {
        start: "trichy",
        end: "karur",
      },
    ],
  },
  {
    route: "trichy-tirunelveli",
    stops: [
      {
        start: "trichy",
        end: "madurai",
      },
      {
        start: "madurai",
        end: "tirunelveli",
      },
    ],
  },
  {
    route: "karur-viluppuram",
    stops: [
      {
        start: "karur",
        end: "trichy",
      },
      {
        start: "trichy",
        end: "viluppuram",
      },
    ],
  },
];

const getRouteDistance = (routes) =>
  routes.map((route) => ({
    ...route,
    distance: getDistance(route.stops),
  }));

const getDistance = (routeStops) =>
  routeStops.reduce(
    (acc, routeStop) => acc + getStopsDistance(routeStop).distance,
    0
  );

const getStopsDistance = (routeStop) =>
  routeDistance.find(
    (stops) =>
      (stops.start === routeStop.start && stops.end === routeStop.end) ||
      (stops.start === routeStop.end && stops.end === routeStop.start)
  );

const main = () => {
  console.table(getRouteDistance(routes), ["route", "distance"]);
};

main();
