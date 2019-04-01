const assert = require('chai').assert;
const object = require('../objects/object');
const page = require('../pages/page')

describe('Calculator Test', function () {
    it('[CA-01] Verify the operation precedence of calculator is from left to right', function () {
        // Verify: Tap 3+4-5 and verify the result displays 7 and then 2
        object.Calculator.tapButton(3);
        object.Calculator.tapButton('+');
        object.Calculator.tapButton(4);
        object.Calculator.tapButton('-');
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),7);
        object.Calculator.tapButton(5);
        object.Calculator.tapButton('=');
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),2);
        // Verify: Tap 5x4/2 and verify the result displays 20 and then 10
        object.Calculator.tapButton(5);
        object.Calculator.tapButton('x');
        object.Calculator.tapButton(4);
        object.Calculator.tapButton('/');
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),20);
        object.Calculator.tapButton(2);
        object.Calculator.tapButton('=');
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),10);
    });
    it('[CA-02] Verify the Multiplication and division have higher precedence than addition and subtraction', function () {
        // Tap 2+5*3 
        object.Calculator.tapButton(2);
        object.Calculator.tapButton('+');
        object.Calculator.tapButton(5);
        object.Calculator.tapButton('x');
        // Verify: The result of addition will not return here
        assert.notEqual($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),7);
        object.Calculator.tapButton(3);
        object.Calculator.tapButton('=');
        // Verify: The final result is calculated with multiplication first
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),17);

        // Clear test
        object.Calculator.tapButton('c');
        object.Calculator.tapButton('ac');

        // Tap 6-4/2
        object.Calculator.tapButton(6);
        object.Calculator.tapButton('-');
        object.Calculator.tapButton(4);
        object.Calculator.tapButton('/');
        // Verify: The result of subtraction will not return here
        assert.notEqual($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),2);
        object.Calculator.tapButton(2);
        object.Calculator.tapButton('=');
        // Verify: The final result is calculated with division first
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),4);
    });
    it('[CA-03] Verify the Clear button will clear the displays', function () {
        // Tap 5+3 and click C button
        object.Calculator.tapButton(5);
        object.Calculator.tapButton('+');
        object.Calculator.tapButton(3);
        object.Calculator.tapButton('c');
        // Verify: The result text will display 0
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),0);
        object.Calculator.tapButton('ac');
        // Verify: The result text will display 0
        assert.equal($(page.Calculator.RESULT_BOX_LOCATOR).getValue(),0);
    });
});