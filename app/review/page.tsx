import { Suspense } from "react";
import ReviewClient from "./ReviewClient";


export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="p-8 max-w-xl mx-auto">Loading...</div>}>
      <ReviewClient />
    </Suspense>
  );
}
