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

const sum = (a, c) => a + c.totalCost;

const calculateCost = ({ cost, tasks: subTasks = [] }) => {
  const subTaskWithCost = map(subTasks, calculateCost); //subTasks.map(calculateCost),
  return {
    cost,
    totalCost: subTaskWithCost.reduce(sum, cost),
    tasks: subTaskWithCost,
  };  
};


const main = () => {
  const task = data;
  console.log(JSON.stringify(calculateCost(task), null, '\t'));
};

main();
