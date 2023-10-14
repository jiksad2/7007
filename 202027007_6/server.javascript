server/server.js
const express = require('express');
const app = express();
const port = 3000; 포트 번호는 필요에 따라 수정 가능

app.get('/api/hi', (req, res) => {
    res.json({ message: '안녕하세요! 이것은 서버에서 온 메시지입니다.' });
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
