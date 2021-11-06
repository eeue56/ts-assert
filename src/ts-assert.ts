import * as assert from "assert";

/**
 * https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message
 */
export function deepStrictEqual<t>(
    actual: t,
    expected: t,
    message: string | Error
): void {
    return assert.deepStrictEqual(actual, expected, message);
}

/**
 * https://nodejs.org/api/assert.html#assertstrictequalactual-expected-message
 */
export function strictEqual<t>(
    actual: t,
    expected: t,
    message: string | Error
): void {
    return assert.strictEqual(actual, expected, message);
}

/**
 * https://nodejs.org/api/assert.html#assertnotdeepstrictequalactual-expected-message
 */
export function notDeepStrictEqual<t>(
    actual: t,
    expected: t,
    message: string | Error
): void {
    return assert.notDeepStrictEqual(actual, expected, message);
}

/**
 * https://nodejs.org/api/assert.html#assertnotstrictequalactual-expected-message
 */
export function notStrictEqual<t>(
    actual: t,
    expected: t,
    message: string | Error
): void {
    return assert.notStrictEqual(actual, expected, message);
}
