
function runTaskFn(onceNum, list) {
  // 前提：假设一个任务执行耗费1秒
  let time = 0,
    extraTaskNum = 0
  for (let i = 0; i < list.length; i++) {
    let curr = list[i] + extraTaskNum // 当前的任务数 = 本次任务数 + 上次还未执行完毕的任务
    extraTaskNum = curr - onceNum // 一次只能执行onceNum个，未执行的等待下一次
    if (extraTaskNum < 0) extraTaskNum = 0
    time++
  }

  if (extraTaskNum > onceNum) {
    // 剩余未执行数大于onceNum
    if (extraTaskNum % onceNum === 0) {
      time = time + extraTaskNum / onceNum
    } else {
      time = time + parseInt(extraTaskNum / onceNum) + 1
    }
  } else {
    if (extraTaskNum > 0) time++
  }

  console.log('time--', time)
}

let list = [1, 2, 3, 4, 5] //任务数组
runTaskFn(5, list)
