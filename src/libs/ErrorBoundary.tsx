import React, { useState } from "react";

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  public state: {[key: string]: any}

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

interface ErrorBoundaryProps{
  fallback: React.ReactNode
  children: React.ReactNode
}