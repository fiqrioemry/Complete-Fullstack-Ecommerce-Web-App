// app/user/page.jsx
import { redirect } from "next/navigation";

export default function UserPage() {
  redirect("/user/settings");
}
