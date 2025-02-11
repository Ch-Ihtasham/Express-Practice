import mongoose from "mongoose";
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.URI).then((res) => {
            console.log('mongodb connected succesfully')
        })
    }
    catch (error) {
        console.log('error in db connection')
    }
}
export default connectToDb