import defaultRoutes from './defaultRoutes';
import authRoutes from './authRoutes';
import apiRoutes from './apiRoutes';
import postRoutes from './apiRoutes';

export default new Map<string, Function>([
    ['/', defaultRoutes],
    ['/user', authRoutes],
    ['/api', apiRoutes],
    ['/post', postRoutes],
    ['/event', eventRoutes]
]);