export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

    <!-- Wrapper -->
    <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.06);">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #4f46e5, #06b6d4); padding:40px 30px; text-align:center;">
        <div style="width:60px; height:60px; background:#ffffff; border-radius:12px; margin:0 auto 15px auto; display:flex; align-items:center; justify-content:center; font-weight:bold; color:#4f46e5; font-size:20px;">
          A
        </div>
        <h1 style="color:#ffffff; margin:0; font-size:26px; font-weight:600;">
          Welcome to ai-jobfinder
        </h1>
        <p style="color:rgba(255,255,255,0.85); margin-top:8px; font-size:14px;">
          Let’s get you started 🚀
        </p>
      </div>

      <!-- Content -->
      <div style="padding:35px 30px;">

        <p style="font-size:16px; color:#111827; margin:0 0 10px;">
          Hi <strong>${name}</strong>,
        </p>

        <p style="font-size:14px; color:#4b5563; line-height:1.7; margin:0 0 20px;">
          Your account has been successfully created. You’re now ready to explore a fast, secure, and modern messaging experience designed for seamless communication.
        </p>

        <!-- Feature Box -->
        <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:20px; margin:25px 0;">
          <p style="margin:0 0 12px; font-size:14px; font-weight:600; color:#111827;">
            Get started quickly:
          </p>
          <ul style="margin:0; padding-left:18px; color:#6b7280; font-size:14px; line-height:1.6;">
            <li>Complete your profile</li>
            <li>Connect with your contacts</li>
            <li>Start real-time conversations</li>
            <li>Share media and files instantly</li>
          </ul>
        </div>

        <!-- CTA -->
        <div style="text-align:center; margin:30px 0;">
          <a href="${clientURL}"
             style="display:inline-block; background:#4f46e5; color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:8px; font-size:14px; font-weight:600;">
            Open ai-jobfinder
          </a>
        </div>

        <p style="font-size:13px; color:#6b7280; line-height:1.6; margin:0;">
          If you have any questions, just reply to this email — we’re here to help.
        </p>

        <p style="font-size:14px; color:#111827; margin-top:25px;">
          — The ai-jobfinder Team
        </p>

      </div>

      <!-- Footer -->
      <div style="padding:20px; text-align:center; background:#f9fafb; border-top:1px solid #e5e7eb;">
        <p style="margin:0; font-size:12px; color:#9ca3af;">
          © ${new Date().getFullYear()} ai-jobfinder. All rights reserved.
        </p>
        <div style="margin-top:8px;">
          <a href="#" style="font-size:12px; color:#6b7280; text-decoration:none; margin:0 8px;">Privacy</a>
          <a href="#" style="font-size:12px; color:#6b7280; text-decoration:none; margin:0 8px;">Terms</a>
          <a href="#" style="font-size:12px; color:#6b7280; text-decoration:none; margin:0 8px;">Support</a>
        </div>
      </div>

    </div>

  </body>
  </html>
  `;
}