describe('getRANTr.io', () => {

  // Smoke test case
  it('has correct page title', () => {
    return browser
      .url('http://getRANTr.io:9000/')
      .getTitle()
      .then((title) => {
        expect(title).toBe('getRANTr.io');
      });
  });

});
