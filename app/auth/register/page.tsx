
"use client";

import { Suspense } from "react";
import RegisterClient from "./RegisterClient";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <RegisterClient />
    </Suspense>
  );
}
