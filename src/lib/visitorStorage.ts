const KEYS = {
  COUNT: 'ms_visitor_count',
  SESSION: 'ms_session_count',
  LAST_VISIT: 'ms_last_visit',
  FIRST_VISIT: 'ms_first_visit',
}

export const visitorStorage = {
  getCount: () => parseInt(localStorage.getItem(KEYS.COUNT) || '0'),
  setCount: (n: number) => localStorage.setItem(KEYS.COUNT, n.toString()),
  getSession: () => parseInt(localStorage.getItem(KEYS.SESSION) || '0'),
  setSession: (n: number) => localStorage.setItem(KEYS.SESSION, n.toString()),
  getLastVisit: () => localStorage.getItem(KEYS.LAST_VISIT),
  setLastVisit: (d: string) => localStorage.setItem(KEYS.LAST_VISIT, d),
  isFirstVisit: () => !localStorage.getItem(KEYS.FIRST_VISIT),
  markFirstVisit: () => localStorage.setItem(KEYS.FIRST_VISIT, Date.now().toString()),
}
