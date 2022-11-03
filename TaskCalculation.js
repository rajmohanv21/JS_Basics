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

const getTotalCost = ({ tasks: subTasks = [], totalCost }) =>
subTasks.reduce(sum, totalCost);

const calculateCost = ({ cost, tasks: subTasks = [] }) => {
  const taskWithTotalCost = {
    cost,
    tasks: subTasks.map(calculateCost),
    totalCost: cost,
  };
  taskWithTotalCost.totalCost = getTotalCost(taskWithTotalCost);
  return taskWithTotalCost;
};

const main = () => {
  const task = data;
  console.log(JSON.stringify(calculateCost(task)));
};

main();
