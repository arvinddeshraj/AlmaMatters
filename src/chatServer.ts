import { verify as verifyToken } from 'jsonwebtoken';
import knexConnection from './models/connection';

const startSocket = io => {
    io.on('connection', socket => {
        console.log(`connected to ${socket.id} !!!`);

        socket.on('room', (data) => {
            console.log(`joined ${data.user}`);
            const decoded = verifyToken(data.user, 'secretkey');
            console.log(decoded.roll_no);
            socket.join(decoded.roll_no);
            // console.log(cb)
            // cb(true)
        });

        socket.on('chat', async ({ sender, receiver, msg }) => {
            // console.log("waiting room chat:", payload.msg)
            // io.to("waiting room").emit('waiting room', payload.msg)
            // socket.broadcast.to("waiting room").emit('waiting room', payload.msg)

            // also add the database stuff here....
            console.log({
                sender,
                receiver,
                msg
            });
            await knexConnection('CHATS').insert({
                sender,
                receiver,
                msg,
                time: '' + +new Date()
            });
            io.to(receiver).emit('received', { receiver, sender, msg, date: +new Date() });
            io.to(sender).emit('received', { receiver, sender, msg, date: +new Date() });
        });

    });
};

export default startSocket;