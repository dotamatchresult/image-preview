module.exports = (req, res) => {
  const { id } = req.query;

  if (!id) {
    res.status(400).setHeader('Content-Type', 'text/html; charset=utf-8').end('<p>Missing id</p>');
    return;
  }

  const imageUrl = `https://dotamatchresult.s3.ap-southeast-3.amazonaws.com/mvp-radars/${id}_whatsapp.png`;
  const pageUrl = `https://dotamatchresult.vercel.app/api/preview?id=${id}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta property="og:title" content="Dota Match MVP Result" />
  <meta property="og:description" content="MVP performance summary" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${pageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
<body>
  <img src="${imageUrl}" alt="Dota Match MVP Result" style="width:100%;height:auto;max-width:600px;" />
</body>
</html>`;

  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').end(html);
};
