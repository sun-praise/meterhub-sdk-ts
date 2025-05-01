// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Meterhub from 'meterhub';

const client = new Meterhub({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meter', () => {
  // skipped: tests are disabled for the time being
  test.skip('analyze: only required params', async () => {
    const responsePromise = client.api.v1.meter.analyze({ image: 'image' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('analyze: required and optional params', async () => {
    const response = await client.api.v1.meter.analyze({ image: 'image', unit: 'unit' });
  });

  // skipped: tests are disabled for the time being
  test.skip('detect: only required params', async () => {
    const responsePromise = client.api.v1.meter.detect({ image: 'image' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('detect: required and optional params', async () => {
    const response = await client.api.v1.meter.detect({ image: 'image' });
  });
});
