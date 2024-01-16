export interface Course{
   name: string,
}

export interface User{
   name: string,
   email: string,
   password: string
}

export type Action = {
   type: string,
   payload:{
      courses: Course[]
   }
}

export type UserActionType = {
   type: string,
   payload: {
      data: User
   }
}
