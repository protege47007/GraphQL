console.log("i'm sexy and i know it:  bulaba blu blu bu")

import "reflect-metadata"
import express, { Express } from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { Task_Resolver } from "./resolver/task"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import AppDataSource from "./data-source"


async function main(){
    AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log("typeORM error: ", error))

    const apollo_server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ Task_Resolver ],
            validate: false
        }),
        plugins: [ ApolloServerPluginLandingPageGraphQLPlayground() ]
    })

    await apollo_server.start()
    const app: Express = express()
    
    apollo_server.applyMiddleware({ app })
    


    app.get("/", (_req, res) => res.send("Hello World... we are @ typeScript!"))

    const port = process.env.PORT || 4747
    app.listen(port, () => console.log("server is listening on port: ", port))
}

main().catch( (err) => {
    console.error("server error: ", err)
})