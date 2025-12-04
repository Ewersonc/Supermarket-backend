import jwt from 'jsonwebtoken';

const mid = (req, res, next) => {
    const noAuthRoutes = [
        { path: '/login', method: 'POST' },
        { path: '/register', method: 'POST' }
    ];

    const isFree = noAuthRoutes.some(
        route => req.path === route.path && req.method === route.method
    );

    if (isFree) return next();

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido" });
        }

        req.userId = decoded.id; 
        next();
    });
};

export default mid;
