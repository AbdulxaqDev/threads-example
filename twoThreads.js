const { 
  isMainThread,
  Worker,
  workerData
} = require("worker_threads");

if(isMainThread){
  const tasks1 = [];
  const tasks2 = []
  const taskAmount = 5_000_000;
  
  for(let i = 0; i < taskAmount; i++){
    tasks1.push(Math.random()*taskAmount);  
    tasks2.push(Math.random()*taskAmount);  
  }

  console.log("Worker! Process ID:", process.pid); 
  new Worker(__filename, {
    workerData: {
      task: tasks1,
      name: "Thread 1"
    }
  });
  new Worker(__filename, {
    workerData: {
      task: tasks2,
      name: "Thread 2"
    }
  });
}else{
  console.log("Worker! Process ID:", process.pid);
  const start = Date.now();
  workerData.task.sort();
  console.log(workerData.name, "-", (Date.now() - start)/1000, "s");
}




