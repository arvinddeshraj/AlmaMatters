import defaultRoutes from './defaultRoutes';
import authRoutes from './authRoutes';
import apiRoutes from './apiRoutes';
import postRoutes from './postRoutes';

export default new Map<string, Function>([
    ['/', defaultRoutes],
    ['/auth', authRoutes],
    ['/api', apiRoutes],
    ['/post', postRoutes],
    // ['/event', eventRoutes]
]);