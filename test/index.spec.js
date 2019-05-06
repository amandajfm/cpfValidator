/* eslint-disable no-undef */

const chai = require('chai');
const expect = chai.expect;
const cpfValidator = require('../lib/index');

describe('cpf lib', () => {

  it('Should return true to valid CPF with 2 or higher numbers as verifying digits', () => {

    expect(cpfValidator.cpfValidator('46998292015')).to.equal(true);
  
  });

  it('Should return true to valid CPF with 0/1 as verifying digits', () => {

    expect(cpfValidator.cpfValidator('95311414600')).to.equal(true);
  
  });

  it('Should return true to valid CPF with special characters', () => {

    expect(cpfValidator.cpfValidator('469.982.920-15')).to.equal(true);
  
  });

  it('Should return true to valid CPF with spaces between the numbers', () => {

    expect(cpfValidator.cpfValidator('469 982 920 15')).to.equal(true);
  
  });

  it('Should return false to invalid CPF 46998292016', () => {

    expect(cpfValidator.cpfValidator('46998292016')).to.equal(false);
  
  });

  it('Should return false to invalid CPF 1111111111', () => {

    expect(cpfValidator.cpfValidator('11111111111')).to.equal(false);
  
  });

  it('Should return false to invalid CPF 12076592301', () => {

    expect(cpfValidator.cpfValidator('12076592301')).to.equal(false);
  
  });

  it('Should return false to letters', () => {

    expect(cpfValidator.cpfValidator('Amanda')).to.equal(false);
  
  });

  it('Should return false to an empty string', () => {

    expect(cpfValidator.cpfValidator('')).to.equal(false);
  
  });

  it('Should return false to CPF lesser than 11 digits', () => {

    expect(cpfValidator.cpfValidator('123456789')).to.equal(false);
  
  });

});


