/**
 * Poor man's encryption to prevent robots from reading sensitive data
 * encrypt fn:
 * btoa(`c3${btoa('<value>')}p0`)
 */
export const decrypt = (value: string | null): string | null => {
    if (typeof value !== 'string') {
        return null;
    }

    const firstIteration = atob(value);
    return atob(firstIteration.slice(2, -2));
};