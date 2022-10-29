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

const taskCalculation = (data) => {
  const result = ((data.tasks) &&
    recursiveData(data)) || { cost: data.cost };
  return result;
};

const recursiveData = (dataObj) => {
  let sumOfCost = 0;
  let extractedArray = [];

  dataObj.tasks.map((item) => {
    let extractedObject = taskCalculation(item);
    extractedArray.push(extractedObject);
    sumOfCost += extractedObject.cost || 0;
  });

  return {
    cost: dataObj.cost + sumOfCost,
    tasks: extractedArray,
  };
};

const main = () => {
  console.log(JSON.stringify(taskCalculation(data)));
};

main();
