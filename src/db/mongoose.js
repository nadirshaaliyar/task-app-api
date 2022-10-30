const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://task-app:task-app@cluster0.e7dk1su.mongodb.net/?retryWrites=true&w=majority')

// const User = mongoose.model('User',{
//     name: {
//         type:String

//     },
//     age:{
//         type:Number
//     }
// })
 const Task =mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
} )

const task =new Task({
    description:'Learn mongoose library',
    completed:false
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})


// const me =new User({
//     name: 'Nadir',
//     age:22
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })