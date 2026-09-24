export function MenuIcon({ open = false, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M4 9h16M4 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  )
}