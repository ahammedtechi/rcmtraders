import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      phone,
      email,
      service,
      postcode,
      description,
      preferredContact
    } = data;

    // Strict input validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { error: "Please provide a valid contact telephone number." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { error: "Please select the service you are interested in." },
        { status: 400 }
      );
    }

    if (!postcode || postcode.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide your project postcode in or around Worcester." },
        { status: 400 }
      );
    }

    // Generate reference code
    const referenceNumber = `RCM-${Date.now().toString().slice(-6)}`;

    // In production, send email to company inbox (e.g. via Resend, SendGrid, or nodemailer)
    console.log("=== NEW QUOTATION REQUEST RECEIVED ===");
    console.log({
      referenceNumber,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      service,
      postcode: postcode.trim().toUpperCase(),
      description: description?.trim() || "No additional notes provided.",
      preferredContact: preferredContact || "Phone",
      receivedAt: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        message:
          "Thank you for contacting RCM Traders Limited. Your quotation request has been received. Our senior project coordinator will review your project details and contact you shortly."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please call us directly at 07711 960238." },
      { status: 500 }
    );
  }
}

