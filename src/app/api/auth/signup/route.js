import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";

export async function POST(request) {
  try {
    const {
      company_name,
      industry,
      company_size,
      admin_name,
      email,
      phone,
      password,
      subscription_plan,
      billing_cycle,
      billing_address,
      tax_id,
    } = await request.json();

    const db = await connectToDatabase();

    // Check if email already exists
    const existingUser = await db.collection("tenants").findOne({ "admin.email": email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create tenant document
    const tenant = {
      company: {
        name: company_name,
        industry,
        size: company_size,
      },
      admin: {
        name: admin_name,
        email,
        phone,
        password: hashedPassword,
        role: "super_admin",
      },
      subscription: {
        plan: subscription_plan,
        billing_cycle,
        status: "active",
        start_date: new Date(),
      },
      billing: {
        address: billing_address,
        tax_id,
      },
      settings: {
        timezone: "UTC",
        currency: "USD",
        language: "en",
      },
      created_at: new Date(),
      updated_at: new Date(),
    };

    // Insert tenant into database
    const result = await db.collection("tenants").insertOne(tenant);

    // Return success response without sensitive data
    return NextResponse.json({
      success: true,
      tenant_id: result.insertedId,
      company: tenant.company,
      admin: {
        name: tenant.admin.name,
        email: tenant.admin.email,
      },
      subscription: {
        plan: tenant.subscription.plan,
        status: tenant.subscription.status,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Error creating account" },
      { status: 500 }
    );
  }
} 