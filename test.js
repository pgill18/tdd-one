import * as test from './code.js';
import { expect } from 'chai';

describe('TDD - One', function() {
    describe('Truth Table', function() {
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
    describe('Corner cases', function() {
        it('and(false, 0) should be false', function() {
            expect( test.and(false, false) ).to.be.false;
        });
        it('and(false, 1) should be false', function() {
            expect( test.and(false, true) ).to.be.false;
        });
        it('and(true, 0) should be false', function() {
            expect( test.and(true, false) ).to.be.false;
        });
        it('and(true, 1) should be true', function() {
            expect( test.and(true, true) ).to.be.true;
        });
    });
    describe('Null cases 1', function() {
        it('and(false, null) should be false', function() {
            expect( test.and(false, false) ).to.be.false;
        });
        it('and(false, undefined) should be false', function() {
            expect( test.and(false, true) ).to.be.false;
        });
        it('and(true, null) should be false', function() {
            expect( test.and(true, false) ).to.be.false;
        });
        it('and(true, undefined) should be false', function() {
            expect( test.and(true, true) ).to.be.true;
        });
    });
    describe('Null cases 2', function() {
        it('and(null, false) should be false', function() {
            expect( test.and(false, false) ).to.be.false;
        });
        it('and(undefined, false) should be false', function() {
            expect( test.and(false, true) ).to.be.false;
        });
        it('and(null, true) should be false', function() {
            expect( test.and(true, false) ).to.be.false;
        });
        it('and(undefined, true) should be false', function() {
            expect( test.and(true, true) ).to.be.true;
        });
    });
});
