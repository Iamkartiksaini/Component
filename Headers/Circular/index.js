const x = [
  { label: "red", count: 0 },
  { label: "green", count: 1 },
  { label: "yellow", count: 2 },
  { label: "blue", count: 3 },
  { label: "black", count: 1 },
];

const y = [
  { label: "green", count: 13 },
  { label: "yellow", count: 22 },
  { label: "red", count: 10 },
  { label: "blue", count: 18 },
];

function compareAndUpdateValues({ maxLengthArr, resArr }) {
  let test1 = {};
  let test2 = {};
  const max = [...maxLengthArr];
  const min = [...resArr];
  max.map((val, i) => {
    return (test1[val.label] = val.count);
  });

  min.map((val, i) => {
    return (test2[val.label] = val.count);
  });

  Object.keys(test1).map(
    (val, index) => (test1[val] = test2[val] ? test2[val] : test1[val])
  );
  return test1;
}

const values = compareAndUpdateValues({
  maxLengthArr: x,
  resArr: y,
});
// console.log("Get Updated Values", values);

function updateObjectValues(oldObj, newObj) {
  for (const key in newObj) {
    if (newObj.hasOwnProperty(key) && oldObj[key] !== newObj[key]) {
      oldObj[key] = newObj[key];
    }
  }
  return oldObj;
}

const old = { name: "bappi", roll: 23 };
const newObj = { name: "bappi", roll: 1 };

const updatedObject = updateObjectValues(c, v);

console.log("Get Updated Values", updatedObject);
