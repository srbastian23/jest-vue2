// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
}

module.exports = config

// Or async function
module.exports = async () => {
  return {
    // preset: '@vue/cli-plugin-unit-jest',
    verbose: true,
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue',
    ],
    transform: {
      '.*\\.(vue)$': 'vue-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    testURL: 'http://localhost/',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts',
    snapshotSerializers: [
      'jest-serializer-vue',
    ],
  }
}