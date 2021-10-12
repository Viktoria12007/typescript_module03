import * as utils from '../../src/task1/utils';

describe('utils', () => {
  describe('utils#getMessage()', () => {
    it('should return a message', () => {
      const message = utils.getMessage();
      expect(message).toEqual('Hello world!');
    });
  });
});
