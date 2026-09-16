import { Suspense } from "react";
import AdminLoginForm from "../../../components/admin/AdminLoginForm";

export const metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1>ASB Tubes Admin</h1>
        <p>Sign in to manage blog posts and SEO meta.</p>
        <Suspense fallback={<p>Loading...</p>}>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
