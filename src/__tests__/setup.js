import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';

afterEach(() => {
    cleanup();
})

// Silence unhandled promise rejections caused by async callbacks in tests
if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('unhandledrejection', (event) => {
        event.preventDefault();
    });
}

if (typeof process !== 'undefined' && process.on) {
    process.on('unhandledRejection', () => {
        // no-op to avoid noisy warnings in CI
    });
}
