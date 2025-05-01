// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MeterAPI from './meter/meter';
import {
  Meter,
  MeterAnalyzeParams,
  MeterAnalyzeResponse,
  MeterDetectParams,
  MeterDetectResponse,
} from './meter/meter';

export class V1 extends APIResource {
  meter: MeterAPI.Meter = new MeterAPI.Meter(this._client);
}

V1.Meter = Meter;

export declare namespace V1 {
  export {
    Meter as Meter,
    type MeterAnalyzeResponse as MeterAnalyzeResponse,
    type MeterDetectResponse as MeterDetectResponse,
    type MeterAnalyzeParams as MeterAnalyzeParams,
    type MeterDetectParams as MeterDetectParams,
  };
}
