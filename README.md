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
```
mutation{
    createTask(title: "your title"){
        id
        created
        updated
        isComplete
        title
    }
}
```
- querying all the tasks you created
```
{
    tasks{
        title
        id
        isComplete
    }
}
```
- querying one task only by it's id 
```
{
    task(id: [task id]){
        title
        isComplete
    }
}
```

- deleting a task by its id
```
 mutation{
    deleteTask(id: [task id])
}
```

- updating a task
```
mutation{
    task(id: [task id], isComplete: [ boolean ])
}
```