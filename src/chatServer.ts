const startSocket = io => {
    io.on('connection', socket => {
        console.log(`connected to ${socket.id} !!!`);

        socket.on('room', data => {
            socket.join(data);
        });

        socket.on('chat', ({ sender, receiver, msg }) => {
            // console.log("waiting room chat:", payload.msg)
            // io.to("waiting room").emit('waiting room', payload.msg)
            // socket.broadcast.to("waiting room").emit('waiting room', payload.msg)

            // also add the database stuff here....
            io.to(receiver).emit('received', { sender, msg })
        });

    });
};

export default startSocket;