# This is a To-Do api created with TypeScript, Express, GraphQl & PostgreSQL
---


### initial setup

Create the PostgreSQL database (these instructions may need to be adapted for your operating system):

```
psql
CREATE DATABASE <db name>;
\q
```
- reconfigure the
``` 
server/data-source.ts 
```
file to your db-name and password, which I imported from a file called 
```
server/keys.ts
```

In the folder, install dependencies:

```
cd TODO-API/
yarn 

- or for npm

npm install
```

### starting the application locally

- run the TypeScript watch command
```
yarn watch 
```
- start the application with
```
yarn dev
```

## Queries you can make include:

- create task, which accepts only a String argument called "title"
- you can receive back any of the following listed below 
1) mutation{
    createTask(title: "your title"){
        id
        created
        updated
        isComplete
        title
    }
}

- querying all the tasks you created
1) {
    tasks{
        title
        id
        isComplete
    }
}

- querying one task only by it's id 
1) {
    task(id: [task id]){
        title
        isComplete
    }
}

- deleting a task by its id
1) mutation{
    deleteTask(id: [task id])
}

- updating a task
1) mutation{
    task(id: [task id], isComplete: [ boolean ])
}