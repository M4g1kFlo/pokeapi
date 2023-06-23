import { Type, TypeData } from '../interfaces/PokemonResponse';
import { PokemonTypesPipe } from './pokemon-types.pipe';

describe('PokemonTypesPipe', () => {
  const pipe = new PokemonTypesPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  const feu: TypeData = {
    slot: 1,
    type: {
      name: "feu",
      url: "nope",
    },
  }
  const eau: TypeData = {
    slot: 2,
    type: {
      name: "eau",
      url: "nope",
    },
  }
  const separator = "-"

  it('should merge both types', () => {
    const arr: TypeData[] = [feu,eau];
    expect(pipe.transform(arr,separator)).toBe(arr[0].type.name+" "+ separator +" "+arr[1].type.name)
  });

  it('should display type when only one', () => {
    const arr: TypeData[] = [feu];
    expect(pipe.transform(arr,separator)).toBe(arr[0].type.name)
  });

});
