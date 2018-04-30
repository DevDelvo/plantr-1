const {db,Vegetable} = require('./db/models')


db.sync({force: true})
.then(()=>{
    console.log('Database synced')

    return Vegetable.create({name: 'carrot', color: 'orange'})
        
})

.then(vegetable=>{
    console.log(vegetable)
})


.catch(err=>{
    console.log(`Disaster! Something went wrong!`)
    console.log(err)
})
.finally(()=>{
    db.close();
})

