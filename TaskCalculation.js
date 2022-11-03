import { map } from "@laufire/utils/collection.js";


const data = {
  cost: 10,
  name: "buildHouse",
  tasks: [
    {
      cost: 5,
      name: "purchase material",
      tasks: [
        {
          cost: 10,
          name: "purchase cement",
        },
        {
          cost: 15,
          name: "purchase steel",
        },
      ],
    },
    {
      cost: 0,
      name: "invite people",
    },
  ],
};

const sum = (a, c) => a + c;

const calculateCost = ({cost , tasks = []}) => tasks
  .map(calculateCost)
  .reduce(sum, cost);

const main = () => {
  const task = data;
  console.log(calculateCost(task));
};

main();
