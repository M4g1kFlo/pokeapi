import { Type } from '../interfaces/PokemonResponse';
import { PokemonTypesPipe } from './pokemon-types.pipe';

describe('PokemonTypesPipe', () => {
  const pipe = new PokemonTypesPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should merge both types', () => {
    const feu: Type = {
      slot: 1,
      type: {
        name: "feu",
        url: "nope",
      },
    }
    const eau: Type = {
      slot: 2,
      type: {
        name: "eau",
        url: "nope",
      },
    }
    const arr: Type[] = [feu,eau];
    const separator = "-"
    expect(pipe.transform(arr,separator)).toBe(arr[0].type.name+" "+ separator +" "+arr[1].type.name)
  });

});
