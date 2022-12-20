import { Task } from "../entities/Task"
import { Arg, Mutation, Query, Resolver, Int } from "type-graphql"

@Resolver()
export class Task_Resolver {
    @Query( () => String)
    hello(): string{
        return "Hello World, we are @ GraphQl"
    }

    @Query(()=> [Task])
    tasks(): Promise<Task[]>{
        return Task.find({})
    }

    @Query(()=> Task, { nullable: true })
    task( @Arg("id", () => Int) id: number): Promise<Task | null>{
        return Task.findOneBy({ id })
    }

    @Mutation( () => Task)
    createTask(
        @Arg("title", ()=>String)
        title: string
    ): Promise<Task>{
        return Task.create({ title, isComplete: false}).save()
    }

    @Mutation(() => Boolean)
    deleteTask(
        @Arg("id", ()=> Int)
        id: number
    ): Boolean{
        try {
            Task.delete({ id })
            return true
        } catch (error) {
            return false
        }
    }

    @Mutation( ()=> Boolean, { nullable: true})
    updateTask(
        @Arg("id", ()=> Int)
        id: number,

        @Arg("isComplete", ()=> Boolean)
        isComplete: Boolean
    ): Boolean | null{
        const task = Task.findOneBy({ id })
        if(!task){
            return null
        }
        try {
            Task.update({ id }, { isComplete })
            return true
        } catch {
            return false            
        }
    }
}