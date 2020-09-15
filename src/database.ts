import { connect } from 'mongoose'; 

export async function startConnection(){
    await connect('mongodb://localhost/pics-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    
    console.log('db is connected');
}