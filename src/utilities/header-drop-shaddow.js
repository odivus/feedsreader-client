const headerDropShaddow = (that) => {
  const scrollY = window.pageYOffset;
  scrollY >= 50 ? that.setState({ shaddow: 'header_shaddow_drop' })
    : that.setState({ shaddow: '' });
}

export default headerDropShaddow;