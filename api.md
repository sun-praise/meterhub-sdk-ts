# API

## V1

### Meter

Types:

- <code><a href="./src/resources/api/v1/meter/meter.ts">MeterAnalyzeResponse</a></code>
- <code><a href="./src/resources/api/v1/meter/meter.ts">MeterDetectResponse</a></code>

Methods:

- <code title="post /api/v1/meter/analyze/">client.api.v1.meter.<a href="./src/resources/api/v1/meter/meter.ts">analyze</a>({ ...params }) -> MeterAnalyzeResponse</code>
- <code title="post /api/v1/meter/detect/">client.api.v1.meter.<a href="./src/resources/api/v1/meter/meter.ts">detect</a>({ ...params }) -> MeterDetectResponse</code>

#### Read

Types:

- <code><a href="./src/resources/api/v1/meter/read.ts">MeterReading</a></code>

Methods:

- <code title="post /api/v1/meter/read/">client.api.v1.meter.read.<a href="./src/resources/api/v1/meter/read.ts">retrieve</a>({ ...params }) -> MeterReading</code>
- <code title="post /api/v1/meter/read/dataset">client.api.v1.meter.read.<a href="./src/resources/api/v1/meter/read.ts">dataset</a>({ ...params }) -> MeterReading</code>
