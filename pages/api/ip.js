import requestIp from "request-ip";
import os from "os";

export default function handler(req, res) {
  const clientIp = requestIp.getClientIp(req);
  const userInfo = os.userInfo();
  const platform = os.platform();
  const architecture = os.arch();
  res
    .status(200)
    .json({
      ip: clientIp,
      userInfo: userInfo,
      platform: platform,
      architecture: architecture,
    });
}
