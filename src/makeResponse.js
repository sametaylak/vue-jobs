const makeResponse = work => `
  self.onmessage = event => {
    const args = event.data.message.args
    if (args) {
      self.postMessage((${work}).call(null, args))
      return close()
    }
    self.postMessage((${work})())
    return close()
  }
`;

export default makeResponse;
