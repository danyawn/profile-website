// Not Found Page with FuzzyText
"use client";

import React from "react";
import Link from "next/link";
import FuzzyText from "../components/fuzzy-text";

const NotFoundPage: React.FC = () => {
  // hover effect state
  const [enableHover, setEnableHover] = React.useState(true);
  const [hoverIntensity, setHoverIntensity] = React.useState(0.5);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Fuzzy 404 Title */}
      <div className="mb-8">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          404
        </FuzzyText>
      </div>
      {/* Not Found Message */}

      <div className="mb-8">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
        >
          Page Not Found
        </FuzzyText>
      </div>

      <p className="text-lg text-gray-400 mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
