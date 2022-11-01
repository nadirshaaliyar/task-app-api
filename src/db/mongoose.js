const mongoose =require('mongoose')


mongoose.connect('mongodb+srv://task-app:task-app@cluster0.e7dk1su.mongodb.net/?retryWrites=true&w=majority')


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



