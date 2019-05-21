/* eslint-disable no-unused-expressions */
import {
  html,
  fixture,
  expect,
} from '../../node_modules/@open-wc/testing';

import '../../src/components/button.js';

describe('Button / Anchor Tag Tests', () => {
  it('is button tag', async () => {
    const el = await fixture('<vp-button>Im a Button</vp-button>');
    expect(document.querySelector('button.btn-flat')).to.exist;
  });
  it('is anchor tag', async () => {
    const el = await fixture('<vp-button href="foo">Im a anchor tag</vp-button>');
    expect(document.querySelector('a.btn-flat')).to.exist;
  });
  it('has primary class name', async () => {
    const el = await fixture('<vp-button type="primary">Im a anchor tag</vp-button>');
    expect(document.querySelector('button.btn-primary')).to.exist;
  });
});