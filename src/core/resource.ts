// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Meterhub } from '../client';

export abstract class APIResource {
  protected _client: Meterhub;

  constructor(client: Meterhub) {
    this._client = client;
  }
}
