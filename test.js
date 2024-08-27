import * as test from './code.js';
import { expect } from 'chai';

describe('TDD', function() {
    describe('One', function() {
        it('and(false, false) should be false', function() {
            expect( test.and(false, false) ).to.be.false;
        });
        it('and(false, true) should be false', function() {
            expect( test.and(false, true) ).to.be.false;
        });
        it('and(true, false) should be false', function() {
            expect( test.and(true, false) ).to.be.false;
        });
        it('and(true, true) should be true', function() {
            expect( test.and(true, true) ).to.be.true;
        });
    });
});
