import Link from 'next/link'

const style = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
}

const linkStyle = {
    margin: '4px 15px',
    backgroundColor: '#4CAF50',
    padding: '15px 15px',
    display: 'inline-block',
    textAlign: 'center',
    border: 'none',
}

const Header = () => (
  <div style={style}>
    <a href="/" style={linkStyle}>
      Home
    </a>
    <a href="/aaaa" style={linkStyle}>
      Cat
    </a>
    <a href="/aaaa" style={linkStyle}>
      Horse
    </a>
    <a href="/aaaa" style={linkStyle}>
      C
    </a>
  </div>
)

export default Header