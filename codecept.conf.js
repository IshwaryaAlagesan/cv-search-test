exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.cv-library.co.uk',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure:{
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      ignoreSteps: ['wait*','fill*','grab*','set*','click*','select*','amOnPage', 'accept'],//,'select*','am*'],
      screenshotsForAllureReport: true
    },
  },
  tests: './*_test.js',
  name: 'cv-library-search'
}