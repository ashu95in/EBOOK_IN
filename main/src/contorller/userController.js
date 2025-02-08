const path = require('path');

exports.Home = (req,res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, '../../public/pages', 'index.html'));

}

exports.lib = (req,res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, '../../public/pages', 'lib.html'));

}

exports.page_404 =  (req,res)=>{
    res.status(404);
    res.sendFile(path.join(__dirname, '../../public/pages', 'page_404.html'));
}