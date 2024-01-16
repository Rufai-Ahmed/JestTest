import moment from "moment";

let count = 0;

const booleanArr = [true, false];

interface iTask {
  id: number;
  taskDesc: string;
  startTime: string;
  endTime: string;
  achieved: boolean;
}

export const taskArr: Array<iTask> = Array.from({ length: 5 }, () => {
  const random = Math.floor(Math.random() * 2);
  count++;

  return {
    id: count,
    taskDesc: Math.ceil(Math.random() * 2000).toString(),
    startTime: new Date().getTime().toString(),
    endTime: new Date()
      .setTime(new Date().getTime() + Math.floor(Math.random() * 3000000000))
      .toString(),
    achieved: booleanArr[random],
  };
});

export const createTask = (val: iTask) => {
  taskArr.push(val);

  return val;
};

export const viewTasks = () => {
  return taskArr;
};

export const updateTaskAchieved = (id: number) => {
  taskArr.find((el) => el.id === id)!.achieved = true;
  return taskArr.find((el) => el.id === id);
};

export const deleteTask = (id: number) => {
  return taskArr.filter((el) => el.id !== id);
};

export const getOneTaskById = (id: number) => {
  const find = taskArr.find((el) => el.id === id);
  if (find) {
    return find;
  } else {
    return "Task does not exist";
  }
};
