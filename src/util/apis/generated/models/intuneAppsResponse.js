/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * IntuneAppsResponse
 *
 */
class IntuneAppsResponse {
  /**
   * Create a IntuneAppsResponse.
   * @member {string} [createdMonth] PartitionKey year-month
   * @member {string} [appId] App id
   * @member {string} [refreshStatus] Refresh Status
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntuneAppsResponse
   *
   * @returns {object} metadata of IntuneAppsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntuneAppsResponse',
      type: {
        name: 'Composite',
        className: 'IntuneAppsResponse',
        modelProperties: {
          createdMonth: {
            required: false,
            serializedName: 'created_month',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: false,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          refreshStatus: {
            required: false,
            serializedName: 'refreshStatus',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntuneAppsResponse;
