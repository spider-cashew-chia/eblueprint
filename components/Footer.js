function Footer() {
  const year = new Date();
  return (
    <footer className='py-12 mt-12 border-t border-t-gray-400'>
      <p>Copyright &copy; {year.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
