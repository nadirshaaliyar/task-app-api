const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://task-app:task-app@cluster0.e7dk1su.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User',{
    name: {
        type:String

    },
    age:{
        type:Number
    }
})

const me =new User({
    name: 'Nadir',
    age:22
})

me.save().then(() =>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!',error)
})