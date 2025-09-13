import { useEffect, useState } from "react";

export function awaited<T> (
    fn: () => Promise<T>,
    setResult: (v: T|undefined) => void,
    setError: (err: unknown) => void,
    setLoading: (state: boolean) => void,
): void {
    setResult(undefined);
    setError(undefined);
    setLoading(true);

    fn()
        .then(r => {
            setResult(r); console.log("r", r);
        })
        .catch(err => {
            setError(err); console.log("err", err);
        })
        .finally(() => setLoading(false));
}