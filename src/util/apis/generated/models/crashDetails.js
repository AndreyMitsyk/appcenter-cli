/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CrashDetails.
 */
class CrashDetails {
  /**
   * Create a CrashDetails.
   * @member {string} [carrierCountry] Carrier country code (for mobile
   * devices).
   * @member {string} [carrierName] Carrier name (for mobile devices).
   * @member {string} locale Language code (example: en_US).
   * @member {string} [osBuild] OS build code (example: LMY47X).
   * @member {boolean} rooted Whether the device where the crash occurred is
   * rooted or jailbroken
   * @member {string} screenSize Screen size of the device in pixels (example:
   * 640x480).
   * @member {date} [appStartTimestamp] Application launch timestamp (example:
   * 1985-04-12T23:20:50.52Z).
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashDetails
   *
   * @returns {object} metadata of CrashDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashDetails',
      type: {
        name: 'Composite',
        className: 'CrashDetails',
        modelProperties: {
          carrierCountry: {
            required: false,
            serializedName: 'carrier_country',
            type: {
              name: 'String'
            }
          },
          carrierName: {
            required: false,
            serializedName: 'carrier_name',
            type: {
              name: 'String'
            }
          },
          locale: {
            required: true,
            serializedName: 'locale',
            type: {
              name: 'String'
            }
          },
          osBuild: {
            required: false,
            serializedName: 'os_build',
            type: {
              name: 'String'
            }
          },
          rooted: {
            required: true,
            serializedName: 'rooted',
            type: {
              name: 'Boolean'
            }
          },
          screenSize: {
            required: true,
            serializedName: 'screen_size',
            type: {
              name: 'String'
            }
          },
          appStartTimestamp: {
            required: false,
            serializedName: 'app_start_timestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashDetails;
