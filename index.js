const canvas = document.getElementById('canvas');
const handler = canvas.getContext('2d');

//main bread

handler.arc(250, 250, 250, 0, 2 * Math.PI);
handler.fillStyle = '#fffa8a';
handler.fill();

//pizza edge

handler.beginPath();
handler.arc(250, 250, 235, 0, 2 * Math.PI);
handler.lineWidth = 33;
handler.strokeStyle = '#dba24a';
handler.stroke();

//tomatoes

handler.beginPath();
handler.arc(100, 180, 40, 0, 2 * Math.PI);
handler.fillStyle = '#e12301';
handler.fill();

handler.beginPath();
handler.arc(250, 100, 40, 0, 2 * Math.PI);
handler.fillStyle = '#e12301';
handler.fill();

handler.beginPath();
handler.arc(390, 180, 40, 0, 2 * Math.PI);
handler.fillStyle = '#e12301';
handler.fill();

handler.beginPath();
handler.arc(100, 320, 40, 0, 2 * Math.PI);
handler.fillStyle = '#e12301';
handler.fill();

handler.beginPath();
handler.arc(250, 400, 40, 0, 2 * Math.PI);
handler.fillStyle = '#e12301';
handler.fill();

handler.beginPath();
handler.arc(390, 320, 40, 0, 2 * Math.PI);
handler.fillStyle = '#e12301';
handler.fill();

//slices

handler.beginPath();
handler.moveTo(95, 95);
handler.lineTo(250, 250);
handler.lineWidth = 12;
handler.strokeStyle = 'black';
handler.stroke();

handler.beginPath();
handler.moveTo(392, 85);
handler.lineTo(250, 250);
handler.lineWidth = 12;
handler.strokeStyle = 'black';
handler.stroke();

handler.beginPath();
handler.moveTo(95, 405);
handler.lineTo(250, 250);
handler.lineWidth = 12;
handler.strokeStyle = 'black';
handler.stroke();

handler.beginPath();
handler.moveTo(400, 408);
handler.lineTo(250, 250);
handler.lineWidth = 12;
handler.strokeStyle = 'black';
handler.stroke();

handler.beginPath();
handler.moveTo(33, 250);
handler.lineTo(467, 250);
handler.lineWidth = 12;
handler.strokeStyle = 'black';
handler.stroke();
