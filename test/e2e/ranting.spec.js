describe('getRANTr', () => {

  // Smoke test case
  it('has correct page title', () => {
    return browser
      .url('http://www.getRANTr.com:9000/')
      .getTitle()
      .then((title) => {
        expect(title).toBe('getRANTr');
      });
  });

});
