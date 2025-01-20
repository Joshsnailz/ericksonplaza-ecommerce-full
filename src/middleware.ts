import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin", // Redirect to the custom sign-in page if not authenticated
  },
});

// Correct config export to ensure proper Next.js usage
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Match protected routes
};
