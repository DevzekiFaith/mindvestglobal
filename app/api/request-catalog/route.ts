import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface CatalogRequestBody {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: CatalogRequestBody = await req.json();
    const { fullName, email, phone, company, interest } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Corporate Email is required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid corporate email address." },
        { status: 400 }
      );
    }

    const cleanFullName = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone?.trim() || "Not provided";
    const cleanCompany = company?.trim() || "Not provided";
    const cleanInterest = interest?.trim() || "Executive Keynote Speaking";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not defined in environment variables.");
    }

    const resend = new Resend(apiKey || "dummy_key");

    // Base domain for absolute assets and download link
    const host = req.headers.get("host") || "mindvestglobalresources.com.ng";
    const protocol = req.headers.get("x-forwarded-proto") || "https";
    const baseUrl = `${protocol}://${host}`;
    const catalogPdfUrl = `${baseUrl}/docs/Mindvest_Advisory_Catalog_Updated.pdf`;

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Africa/Lagos",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const fromSender = process.env.NEXT_PUBLIC_FROM_EMAIL || process.env.FROM_EMAIL || "Mindvest Advisory <support@mindvestglobalresources.com.ng>";

    if (apiKey) {
      // 1. Send automated catalog email to the client
      const clientEmailPromise = resend.emails.send({
        from: fromSender,
        to: cleanEmail,
        subject: "Executive Advisory & Architecture Catalog (2026 Edition) — Mindvest Global Resources",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Executive Advisory & Architecture Catalog</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 36px 32px; border-bottom: 1px solid #334155; text-align: left;">
                        <div style="font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f59e0b; margin-bottom: 8px;">
                          INSTITUTIONAL GOVERNANCE &amp; ARCHITECTURE
                        </div>
                        <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                          Executive Advisory &amp; Architecture Catalog
                        </h1>
                        <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">
                          2026 Edition · Service Offerings, Keynote Engagements &amp; Pricing Frameworks
                        </p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding: 36px 32px;">
                        <p style="font-size: 16px; line-height: 1.6; color: #e2e8f0; margin-top: 0;">
                          Dear <strong>${cleanFullName}</strong>,
                        </p>
                        <p style="font-size: 15px; line-height: 1.7; color: #cbd5e1;">
                          Thank you for your interest in <strong>Mindvest Global Resources</strong>. We engineer high-yield human capital, deliver transformational keynote addresses, design resilient corporate governance, and build scalable organizational architectures.
                        </p>
                        <p style="font-size: 15px; line-height: 1.7; color: #cbd5e1;">
                          Your requested copy of the <strong>Executive Advisory &amp; Architecture Catalog (2026 Edition)</strong> is ready for your strategic review.
                        </p>

                        <!-- CTA Button Box -->
                        <div style="margin: 32px 0; padding: 24px; background-color: #1e293b; border-radius: 8px; border-left: 4px solid #f59e0b; text-align: center;">
                          <p style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #f8fafc;">
                            Selected Area of Interest: <span style="color: #f59e0b;">${cleanInterest}</span>
                          </p>
                          <a href="${catalogPdfUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #0f172a; font-weight: 700; font-size: 14px; letter-spacing: 0.5px; text-decoration: none; padding: 14px 32px; border-radius: 6px; box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.3);">
                            Download Full Executive Catalog (PDF) &rarr;
                          </a>
                          <p style="margin: 12px 0 0; font-size: 12px; color: #94a3b8;">
                            Direct PDF URL: <a href="${catalogPdfUrl}" style="color: #94a3b8; text-decoration: underline;">${catalogPdfUrl}</a>
                          </p>
                        </div>

                        <!-- Scope Highlights -->
                        <div style="margin-top: 24px; border-top: 1px solid #334155; padding-top: 24px;">
                          <h3 style="margin: 0 0 14px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #f59e0b;">
                            Inside the 2026 Advisory Blueprint:
                          </h3>
                          <ul style="margin: 0; padding-left: 20px; color: #cbd5e1; font-size: 14px; line-height: 1.8;">
                            <li><strong>Executive Keynote Speaking:</strong> ₦1.0M &ndash; ₦2.5M per session (AGMs, retreats, global summits).</li>
                            <li><strong>The Becoming Coaching:</strong> 12-Week 1-on-1 executive mindset &amp; identity re-engineering (₦750k &ndash; ₦1.5M).</li>
                            <li><strong>Leadership Architecture Project:</strong> 60&ndash;90 day transformation &amp; governance alignment (₦2.5M &ndash; ₦5.0M).</li>
                            <li><strong>Organisational Architecture:</strong> Full corporate restructuring &amp; quarterly board advisory retainers (₦5.0M &ndash; ₦15.0M+).</li>
                          </ul>
                        </div>

                        <p style="margin: 32px 0 0; font-size: 14px; line-height: 1.7; color: #94a3b8;">
                          To schedule a private executive briefing or discuss tailored deployment for <strong>${cleanCompany}</strong>, you can reply directly to this email or reserve a session with our strategic advisory desk.
                        </p>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 24px 32px; background-color: #0b0f19; border-top: 1px solid #1e293b; text-align: center;">
                        <p style="margin: 0; font-size: 12px; font-weight: 600; color: #f8fafc;">
                          Mindvest Global Resources Ltd.
                        </p>
                        <p style="margin: 4px 0 0; font-size: 11px; color: #64748b;">
                          Email: support@mindvestglobalresources.com.ng &nbsp;|&nbsp; Ecosystem: <a href="https://www.origin.com.ng" style="color: #f59e0b; text-decoration: none;">origin.com.ng</a>
                        </p>
                        <p style="margin: 8px 0 0; font-size: 10px; color: #475569;">
                          Confidential Corporate Document · For Strategic Evaluation Only
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      });

      // 2. Send internal lead notification email to support desk
      const internalEmailPromise = resend.emails.send({
        from: "Mindvest Advisory System <support@mindvestglobalresources.com.ng>",
        to: "support@mindvestglobalresources.com.ng",
        replyTo: cleanEmail,
        subject: `🔥 New Corporate Lead: ${cleanCompany} (${cleanFullName})`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>New Corporate Lead Alert</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f8; padding: 24px; color: #1e293b;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <div style="background-color: #0f172a; padding: 20px 24px; color: #ffffff;">
                <span style="background-color: #b45309; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; letter-spacing: 1px;">
                  INCOMING EXECUTIVE LEAD
                </span>
                <h2 style="margin: 10px 0 0; font-size: 20px; color: #ffffff;">
                  ${cleanCompany}
                </h2>
                <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">
                  Requested Executive Advisory & Architecture Catalog (2026)
                </p>
              </div>

              <div style="padding: 24px;">
                <table width="100%" style="border-collapse: collapse; font-size: 14px;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b; width: 140px;">Full Name:</td>
                    <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">${cleanFullName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Work Email:</td>
                    <td style="padding: 10px 0; color: #2563eb;">
                      <a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none;">${cleanEmail}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Phone Number:</td>
                    <td style="padding: 10px 0; color: #0f172a;">
                      <a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none;">${cleanPhone}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Company / Entity:</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">${cleanCompany}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Primary Interest:</td>
                    <td style="padding: 10px 0; font-weight: 700; color: #b45309;">${cleanInterest}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Submission Time:</td>
                    <td style="padding: 10px 0; color: #475569;">${timestamp} (WAT)</td>
                  </tr>
                </table>

                <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0; text-align: center;">
                  <a href="mailto:${cleanEmail}?subject=Re:%20Executive%20Advisory%20Inquiry%20-%20${encodeURIComponent(cleanCompany)}" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 10px 24px; border-radius: 6px; font-weight: 600; font-size: 13px; text-decoration: none;">
                    Reply to Lead Directly &rarr;
                  </a>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      // Execute both sends in parallel
      await Promise.all([clientEmailPromise, internalEmailPromise]);
    } else {
      console.log(`[Catalog Request Demo Mode] Lead: ${cleanFullName} <${cleanEmail}> from ${cleanCompany}. Interest: ${cleanInterest}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Access Granted. The 2026 Executive Advisory Catalog has been dispatched directly to ${cleanEmail} via support@mindvestglobalresources.com.ng.`,
        downloadUrl: catalogPdfUrl,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error processing catalog request:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to process catalog request.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
