import { Satellite } from './satellite';

describe('Satellite', () => {
  // let satellite: Satellite;
  it('should create an instance', ( ) => {
    expect(new Satellite("Star", "Twang", "bar", "lur", false)).toBeTruthy();
    });
});
  