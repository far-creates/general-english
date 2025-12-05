/**
 * MainLayout Template
 * Main page layout with header, footer, and content area
 */

import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Navigation from "../organisms/Navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface MainLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  showBackButton?: boolean;
  onBackClick?: () => void;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  className?: string;
}

export default function MainLayout({
  children,
  breadcrumbs,
  showBackButton = false,
  onBackClick,
  maxWidth = "xl",
  className = "",
}: MainLayoutProps) {
  // Max width classes
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <Header showBackButton={showBackButton} onBackClick={onBackClick} />

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div
          className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}
        >
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-6">
              <Navigation items={breadcrumbs} />
            </div>
          )}

          {/* Page Content */}
          <div className={className}>{children}</div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
