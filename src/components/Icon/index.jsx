const Icon = ({ type, styles }) => {
  switch (type) {
    case 'close':
      return (
        <svg {...styles} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Menu / Close_LG">
            <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      )

    case 'arrow left':
      return (
        <svg {...styles} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'arrow right':
      return (
        <svg {...styles} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )

    case 'hamburger':
      return (
        <svg {...styles} fill="#ffffff" viewBox="0 0 1920.00 1920.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.019200000000000002" transform="rotate(0)">

          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#000000" strokeWidth="46.08"> <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fillRule="evenodd"/> </g>

          <g id="SVGRepo_iconCarrier"> <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fillRule="evenodd"/></g>
        </svg>
      )
    default:
      return null
  }
}

export default Icon
