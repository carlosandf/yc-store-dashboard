import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <main style={{ marginTop: '6rem' }}>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
