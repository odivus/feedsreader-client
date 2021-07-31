const rssInputChange = (that, event, rssInputCheck) => {
  const value = event.target.value.toLowerCase();

  if (rssInputCheck.test(value)) {
    that.setState({
      rssSource: value,
      value: value,
    });
  } else {
    that.setState({
      rssSource: '',
      value: value,
    });
  }

  if (value === '') that.setState({ value: '' });
}

export default rssInputChange;