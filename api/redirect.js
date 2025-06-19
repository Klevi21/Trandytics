export default function handler(req, res) {
  const { target, id } = req.query;

  if (!target) {
    res.status(400).send("Error: Missing target URL");
    return;
  }

  try {
    const decodedTarget = decodeURIComponent(target);
    const url = new URL(decodedTarget);

    if (id) {
      url.searchParams.set('clickref', id);
    }

    res.writeHead(302, {
      Location: url.toString()
    });
    res.end();

  } catch (error) {
    res.status(400).send("Error: Invalid target URL");
  }
}
