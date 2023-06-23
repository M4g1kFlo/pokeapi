import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should uppercase', () => {
    expect(pipe.transform("ditto")).toBe("DITTO");
  });

});
