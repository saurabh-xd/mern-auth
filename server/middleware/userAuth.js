import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;
    
    // Check if token is missing
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized. Please log in.' });
    }

    try {
      
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       
        if (decoded?.id) {
            req.userId = decoded.id; 
            req.user = { id: decoded.id }; 
            next(); 
        } else {
            return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
        }

    } catch (error) {
      
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expired. Please log in again.' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
        } else {
           
            console.error('Token verification error:', error.name);
            return res.status(401).json({ success: false, message: 'Token verification failed.' });
        }
    }
};

export default userAuth;