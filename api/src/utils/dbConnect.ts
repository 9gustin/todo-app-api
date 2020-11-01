import mongoose from 'mongoose';
import { forEach } from 'p-iteration';

const conn:any = {
    isConnected: false,
    db: undefined
};

const dbConnect = async () => {
    if (conn.isConnected) return;

    conn.db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    conn.isConnected = conn.db.connections[0].readyState;
}

const executeTransaction = async (fn: (session:any) => void): Promise<boolean> => {
    await dbConnect();
    const session = await conn.db.startSession();

    try {
        session.startTransaction();
        await fn(session);

        await session.commitTransaction();
        session.endSession();
        return true;
    }
    catch (e) {
        await session.abortTransaction();
        return false;
    }
}

export { executeTransaction };
export default dbConnect;