/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A response containing information pertaining to a symbol status
 *
 */
class SymbolStatusResponse {
  /**
   * Create a SymbolStatusResponse.
   * @member {string} symbolId The unique id for this symbol (uuid)
   * @member {string} appId The application that this symbol belongs to
   * @member {string} status Whether the symbol is ignored. Possible values
   * include: 'available', 'ignored', 'missing'
   */
  constructor() {
  }

  /**
   * Defines the metadata of SymbolStatusResponse
   *
   * @returns {object} metadata of SymbolStatusResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SymbolStatusResponse',
      type: {
        name: 'Composite',
        className: 'SymbolStatusResponse',
        modelProperties: {
          symbolId: {
            required: true,
            serializedName: 'symbol_id',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: true,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SymbolStatusResponse;
