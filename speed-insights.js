// Import and initialize Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights when the DOM is ready
if (typeof window !== 'undefined') {
  injectSpeedInsights({
    debug: false,
  });
}
