const { 
  isMainThread,
  Worker,
  workerData
} = require("worker_threads");


if(isMainThread){
  console.log("Worker! Process ID:", process.pid); 
  new Worker(__filename, {
    workerData: [1, 5, 7, 2, 9, 1, 0]
  });
  new Worker(__filename, {
    workerData: [77, 9, 6, 8, 3, 4, 6, 7, 88]
  });
}else{
  console.log("Worker! Process ID:", process.pid);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
