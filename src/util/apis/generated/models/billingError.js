/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the BillingError class.
 * @constructor
 * Error
 *
 * @member {object} [error]
 * 
 * @member {number} [error.code] The status code return by the API. It can be
 * 400 or 403 or 500.
 * 
 * @member {string} [error.message] The reason for the request failed
 * 
 */
function BillingError() {
}

/**
 * Defines the metadata of BillingError
 *
 * @returns {object} metadata of BillingError
 *
 */
BillingError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BillingError',
    type: {
      name: 'Composite',
      className: 'BillingError',
      modelProperties: {
        error: {
          required: false,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'BillingErrorError'
          }
        }
      }
    }
  };
};

module.exports = BillingError;