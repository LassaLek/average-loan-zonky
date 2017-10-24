import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filtering empty array returns empty array', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform([], '')).toEqual([]);
  });

});
