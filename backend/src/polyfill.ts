import buffer from 'buffer';

// Polyfill SlowBuffer for Node.js v22+ where SlowBuffer is removed/undefined
if (!(buffer as any).SlowBuffer) {
  (buffer as any).SlowBuffer = buffer.Buffer;
}

