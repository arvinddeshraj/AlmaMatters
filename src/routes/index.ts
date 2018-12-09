import defaultRoutes from './defaultRoutes';
import authRoutes from './authRoutes';
import apiRoutes from './apiRoutes';
import postRoutes from './postRoutes';
import eventRoutes from './eventRoutes';
import profileRoutes from './profileRoutes';
import searchRoutes from './searchRoutes';
import postActivityRoutes from './postActivityRoutes';
import dateRoutes from './dateRoutes'
import chatRoutes from './chatRoutes'

export default new Map<string, Function>([
    ['/api/', defaultRoutes],
    ['/api/auth', authRoutes],
    ['/api/api', apiRoutes],
    ['/api/post', postRoutes],
    ['/api/event', eventRoutes],
    ['/api/profile', profileRoutes],
    ['/api/search', searchRoutes],
    ['/api/postActivity', postActivityRoutes],
    ['/api/date', dateRoutes],
    ['/api/chats', chatRoutes]
]);