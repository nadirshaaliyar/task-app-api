const mongoose =require('mongoose')
const validator =require('validator')
mongoose.connect('mongodb+srv://task-app:task-app@cluster0.e7dk1su.mongodb.net/?retryWrites=true&w=majority')

// const User = mongoose.model('User',{
//     name: {
//         type:String,
//         required:true,
//         trim:true

//     },
//     password:{
//         type: String,
//         reqired:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             if (value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password" ')
//             }
//         }


//     },
//     email: {
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is Invalid!')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a postive number')
//             }
//         }
//     }
// })

// const me =new User({
//     name: '   Nadir  ', 
//     password:'Pass132',
//     email:'    Nadir@gmail.com  '
    
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })




 const Task =mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true

    },
    completed:{
        type:Boolean,
        default:false
    }
} )

const task =new Task({
    description:'     Learn man library'
    
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})


