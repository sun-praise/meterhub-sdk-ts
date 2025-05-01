// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReadAPI from './read';
import { MeterReading, Read, ReadDatasetParams, ReadRetrieveParams } from './read';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';

export class Meter extends APIResource {
  read: ReadAPI.Read = new ReadAPI.Read(this._client);

  /**
   * 分析仪表图片，返回仪表的读数和类型
   */
  analyze(body: MeterAnalyzeParams, options?: RequestOptions): APIPromise<MeterAnalyzeResponse> {
    return this._client.post(
      '/api/v1/meter/analyze/',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Detect Meter
   */
  detect(body: MeterDetectParams, options?: RequestOptions): APIPromise<MeterDetectResponse> {
    return this._client.post(
      '/api/v1/meter/detect/',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface MeterAnalyzeResponse {
  data: unknown;

  error: Record<string, string> | null;

  success: boolean;
}

export interface MeterDetectResponse {
  data: unknown;

  error: Record<string, string> | null;

  success: boolean;
}

export interface MeterAnalyzeParams {
  image: string;

  unit?: string | null;
}

export interface MeterDetectParams {
  image: string;
}

Meter.Read = Read;

export declare namespace Meter {
  export {
    type MeterAnalyzeResponse as MeterAnalyzeResponse,
    type MeterDetectResponse as MeterDetectResponse,
    type MeterAnalyzeParams as MeterAnalyzeParams,
    type MeterDetectParams as MeterDetectParams,
  };

  export {
    Read as Read,
    type MeterReading as MeterReading,
    type ReadRetrieveParams as ReadRetrieveParams,
    type ReadDatasetParams as ReadDatasetParams,
  };
}
