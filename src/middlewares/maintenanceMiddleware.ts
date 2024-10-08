import { MiddlewareFactory } from "./chain";
import { buildURLWithLanguage } from "@/utils/handleURLs";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const forbiddenURLsRegex = /\/(account|login|register)/i;
const maintenanceRegex = /\/maintenance/i;
const isInMaintenance = process.env.BACKEND_MAINTENANCE === "true";

const maintenanceMiddleware: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const homeURL = buildURLWithLanguage(request, "/home");
    const maintenanceURL = buildURLWithLanguage(request, "/maintenance");

    const responseRedirect = (url: URL) => NextResponse.redirect(url);

    if (isInMaintenance && forbiddenURLsRegex.test(request.nextUrl.pathname)) {
      return responseRedirect(maintenanceURL);
    }

    if (!isInMaintenance && maintenanceRegex.test(request.nextUrl.pathname)) {
      return responseRedirect(homeURL);
    }

    return next(request, _next);
  };
};

export default maintenanceMiddleware;
