export default async function handler(req, res) {
  const configured = Boolean(
    process.env.MSG91_AUTH_KEY &&
    process.env.MSG91_TEMPLATE_ID &&
    process.env.MSG91_SENDER_ID
  );

  if (!configured) {
    return res.status(503).json({
      ok: false,
      provider: "Not configured"
    });
  }

  return res.status(200).json({
    ok: true,
    provider: "MSG91"
  });
}
