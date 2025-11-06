import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getUsers = async function Users(){
    const user = await db.select().from(users);
    return user;

}

export const addUser = async function AddUser(id:number ,name: string, email: string){
    const newUser = await db.insert(users).values({
        id:id,
        name:name,
        email:email,
    })
    return newUser;
}
