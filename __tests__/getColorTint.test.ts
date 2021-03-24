import ColorProcessingModule from '../src';

describe('getColorTint Correctly generates shades', () => {

  test('Correctly works with black color', () => {
      expect(ColorProcessingModule.getColorTint({ red: 0, green: 0, blue: 0 }, 90))
        .toStrictEqual({ red: 230, green: 230, blue: 230 });
    }
  );

  test('Correclty work without percent provided', () => {
    expect(ColorProcessingModule.getColorTint({ red: 0, green: 0, blue: 0 }))
      .toStrictEqual({ red: 0, green: 0, blue: 0 });
  });
});