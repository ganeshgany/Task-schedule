# Task-Manager using angular

Task Manager is a simple Component which manages user's schedules or plans or things to do like Remainder,Tasks and also works as managing data like saving passwords,temporaray data etc
we can use this component in projects,this is a reusable component.
## Output Format
![screenshot](/demo-img/TaskSchedule.png)

![screenshot](/demo-img/TaskSchedule1.png)

![screenshot](/demo-img/TaskSchedule2.png)

To preview demo of task-Manager project,[click me](https://angular-hl5lfy-la8qfu.stackblitz.io)
## Getting Started
Download the task-manager folder and install the required packages and run the application.
## Installing
npm install
## Run server
ng serve
## Adding Task-Manager to your Project
Download the Task-Manager component to your angular material project and include required components from angular material.

## How it works
adding the plans or tasks or data in input field provided for the user, on clicking add data button data will be saved or appended to the lis
below it. 
then user can see the added plans and also can managed those saved tasks like editing ,deleting them on completing the task.

@Input()userlist:any;
passing this userlist will be saved as tasks to list

User will have an option to manage saved tasks accordingly can delete tasks when completed.
