const path = require('path');
const fs = require('fs');

exports.Home =  async (req,res)=>{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // Get IP
    const time = new Date().toLocaleString(); // Get request time
    const logDir = path.join(__dirname, '../../logs');
    const logFile = path.join(logDir, 'requests.log');
    const logEntry = `IP: ${ip} | Time: ${time}\n`;
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing log:', err);
    });
 









    res.status(200);
    
    res.sendFile(path.join(__dirname, '../../public/pages', 'index.html'));

}

exports.lib = (req,res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, '../../public/pages', 'Lib.html'));

}

exports.page_404 =  (req,res)=>{
    res.status(404);
    res.sendFile(path.join(__dirname, '../../public/pages', 'page_404.html'));
}