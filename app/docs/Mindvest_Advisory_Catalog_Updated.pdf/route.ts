import { NextResponse } from "next/server";
import { getOrGenerateCatalogPdf } from "@/lib/catalog-pdf";

export async function GET() {
  try {
    const pdfBuffer = getOrGenerateCatalogPdf();

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Mindvest_Executive_Advisory_Catalog_2026.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error serving catalog PDF:", error);
    return new NextResponse("PDF not found or could not be generated.", { status: 500 });
  }
}
