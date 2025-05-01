// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';

export class Read extends APIResource {
  /**
   * Read Meter
   */
  retrieve(body: ReadRetrieveParams, options?: RequestOptions): APIPromise<MeterReading> {
    return this._client.post(
      '/api/v1/meter/read/',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * 使用某个数据集配置，来获得仪表图片的读数。可以获得更高的性能
   */
  dataset(params: ReadDatasetParams, options?: RequestOptions): APIPromise<MeterReading> {
    const { dataset_id, ...body } = params;
    return this._client.post(
      '/api/v1/meter/read/dataset',
      multipartFormRequestOptions({ query: { dataset_id }, body, ...options }, this._client),
    );
  }
}

export interface MeterReading {
  data: unknown;

  error: Record<string, string> | null;

  success: boolean;
}

export interface ReadRetrieveParams {
  image: string;

  points: Array<ReadRetrieveParams.Point>;

  unit?: string | null;
}

export namespace ReadRetrieveParams {
  export interface Point {
    x: number;

    y: number;
  }
}

export interface ReadDatasetParams {
  /**
   * Query param:
   */
  dataset_id: number;

  /**
   * Body param:
   */
  image: string;
}

export declare namespace Read {
  export {
    type MeterReading as MeterReading,
    type ReadRetrieveParams as ReadRetrieveParams,
    type ReadDatasetParams as ReadDatasetParams,
  };
}
