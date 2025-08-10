import assert from 'assert';
import { languageMatcher } from './../../src/js/languageMatcher';
import locales from '../../src/_data/locales.json';

const langs = locales.map((v) => v.path);
const base = langs[0];

describe('languageMatcher', () => {
  describe('match to supported langs', () => {
    it('unknown -> /en', () => {
      const result = languageMatcher(langs, base, null);

      assert.equal(result, '/en');
    });
  });

  describe('preferred language', () => {
    it('unknown -> /en', () => {
      const result = languageMatcher(langs, base, null);

      assert.equal(result, '/en');
    });
  });
});
