export const info = (req, res) => {
  const now = new Date();

  const message = {
    timestamp: now.getTime(),
    localeString: now.toLocaleString(),
    getTimezoneOffset: now.getTimezoneOffset(),
    tz: process.env.TZ,
    name: 'Todo server v0.1.0',
  };

  res.status(200).json(message);
};
