'use client'
export function HalfStar() {
  function windowSize() {
    if (typeof window === 'undefined') return 1
    return window.innerWidth
  }
  return (
    <svg
      width={windowSize() > 640 ? '9' : '7'}
      height={windowSize() > 640 ? '17' : '14'}
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.76406 16.9793L9.1981 13.956V0.255005L6.57889 5.89491L0.40564 6.6431L4.96013 10.8769L3.76406 16.9793Z"
        fill="#FFC633"
      />
    </svg>
  )
}
