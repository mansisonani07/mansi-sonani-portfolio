export const analytics = {
  trackPageView: (page: string) => {
    console.log(`[Analytics] Page View: ${page}`)
  },
  trackEvent: (event: string, data?: Record<string, unknown>) => {
    console.log(`[Analytics] Event: ${event}`, data)
  },
  trackProjectView: (projectName: string) => {
    console.log(`[Analytics] Project View: ${projectName}`)
  },
}
