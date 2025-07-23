import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;
   
    

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized. Please log in.' });
    }

    try {
        console.log(token);
        console.log(process.env.JWT_SECRET);
        
        
        // Verify token using JWT_SECRET
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        
        // If token is valid, attach userId to request body
        if (decoded?.id) {
            req.body.userId = decoded.id;
            next(); // Go to next middleware or route
        } else {
            return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
        }

    } catch (error) {
        // Token expired, tampered, or invalid
        return res.status(401).json({ success: false, message: 'Token verification failed.' });
    }
};

export default userAuth;
