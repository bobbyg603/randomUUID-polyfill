import assert from 'node:assert';
import test from 'node:test';
import { randomUUID } from './index.mjs';

test('should generate v4 UUID', (t) => {
    const v4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    const uuid = randomUUID();
    assert.match(uuid, v4);
});