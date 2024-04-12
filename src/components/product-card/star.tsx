'use client'

export function Star() {
  function windowSize() {
    if (typeof window === 'undefined') return 1
    return window.innerWidth
  }
  return (
    <svg
      width={windowSize() > 640 ? '17' : '14'}
      height={windowSize() > 640 ? '17' : '14'}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.849.255l2.619 5.64 6.173.748-4.554 4.234 1.196 6.102-5.434-3.023-5.434 3.023 1.196-6.102L.056 6.643l6.173-.748L8.85.255z"
        fill="#FFC633"
      />
    </svg>
  )
}
