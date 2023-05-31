import React from 'react';

function Footer() {
  const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 I need to grow. All the reservered</p>
      <p>Do you have a problem or would you like to report a bug?</p>
      <p>you can write to us at ineedgrow@gmail.com</p>
    </footer>
  );
}

export default Footer;





