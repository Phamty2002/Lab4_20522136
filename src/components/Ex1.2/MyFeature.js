// MyFeature.js
import React from "react";

const MyFeature = React.lazy(() =>
  Promise.all([
    import("./ActualMyFeature"),
    new Promise((resolve) => setTimeout(resolve, 3000)), // Simulates a delay
  ]).then(([moduleExports]) => moduleExports)
);

export default function MyFeatureComponent() {
  return (
    <React.Suspense fallback={<div>Loading Feature...</div>}>
      <MyFeature />
    </React.Suspense>
  );
}
