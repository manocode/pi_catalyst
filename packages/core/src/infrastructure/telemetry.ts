export interface ITelemetry {
  trackEvent(name: string, properties?: any): void;
  trackMetric(name: string, value: number): void;
}
