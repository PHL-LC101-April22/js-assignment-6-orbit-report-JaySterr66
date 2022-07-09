import { Satellite } from './satellite';

describe('Satellite', () => {
  // let satellite: Satellite;
  it('should create an instance', () => {
    expect(new Satellite).toBeTruthy();
    })
  });
  beforeEach(() => {
    Satellite = new Satellite("foo", "bar", "baz", "lur", false);
  });

  afterEach(() => {
	  Satellite = null;
  });

  it('should create an instance', () => {
    expect(Satellite).toBeTruthy();
  });

  it('should contain an isSpaceDebris method', () => {
    expect(Satellite.isSpaceDebris).toEqual(jasmine.any(Function));
  });

  it('isSpaceDebris should return false if not debris type', () => {
    expect(Satellite.isSpaceDebris()).toEqual(false);
  });

  it('isSpaceDebris should return true if debris type', () => {
    let junk = new Satellite("foo", "Space Debris", "baz", "lur", false);
    expect(junk.isSpaceDebris()).toEqual(true);
  });

 
