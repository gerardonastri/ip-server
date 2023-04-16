import requestIp from "request-ip";

export default function handler(req, res) {
  console.log(req);
  const clientIp = requestIp.getClientIp(req);
  console.log(clientIp);
  res.status(200).json({ name: "John Doe" });
}
