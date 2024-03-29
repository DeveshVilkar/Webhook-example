import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = async () => {
    try {
        await connect(process.env.MONGODB_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions);
        console.log("Connection successful");
    } catch (error) {
        console.error("Connection failed:", error);
    }
};
