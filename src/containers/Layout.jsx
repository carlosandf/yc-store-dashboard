import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
