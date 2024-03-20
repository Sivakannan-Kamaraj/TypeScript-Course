enum StatusesEnum = {
  notStarted,
  inProgress,
  done,
};

console.log(statuses.inProgress);

enum StatusEnum {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Done = "Done",
}

interface ITask {
  id: string;
  status: StatusEnum;
}

let notStrartedStatus: Status = Status.NotStarted;

notStrartedStatus = Status.Done;

console.log(Status.InProgress);
