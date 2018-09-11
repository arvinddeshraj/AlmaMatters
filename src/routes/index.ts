import defaultRoutes from './defaultRoutes'
import authRoutes from './authRoutes'
import apiRoutes from './apiRoutes'

export default new Map<string, Function>([
    ['/', defaultRoutes],
    ['/user', authRoutes],
    ['/api', apiRoutes]
])