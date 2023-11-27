

const tasks = [];
const taskAmount = 10_000_000;

for(let i = 0; i < taskAmount; i++){
  tasks.push(Math.random()*taskAmount);
}

const start = Date.now();
tasks.sort();
console.log((Date.now() - start)/1000, "s");
