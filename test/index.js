const canTrack = require('../lib')

// Spec: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack

test('return true if doNotTrack equals "1"', () => {
  const win = {
    navigator: {
      doNotTrack: '1'
    }
  }
  expect(canTrack(win)).toBe(false)
})

test('return true if doNotTrack equals "0"', () => {
  const win = {
    navigator: {
      doNotTrack: '0'
    }
  }
  expect(canTrack(win)).toBe(true)
})

test('return true if doNotTrack is undefined', () => {
  const win = {
    navigator: {
      doNotTrack: undefined
    }
  }
  expect(canTrack(win)).toBe(true)
})

test('compatibility with IE/Edge', () => {
  const win = {
    navigator: {
      msDoNotTrack: "1"
    }
  }
  expect(canTrack(win)).toBe(false)
})

test('compatibility with Safari', () => {
  const win = {
    doNotTrack: "1"
  }
  expect(canTrack(win)).toBe(false)
})

test('compatibility with Firefox Gecko < 32', () => {
  const win = {
    navigator: {
      doNotTrack: 'yes'
    }
  }
  expect(canTrack(win)).toBe(false)
})
