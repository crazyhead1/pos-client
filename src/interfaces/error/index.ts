export default interface Error {
    message: string;
    stack?: string;
    errorCode?: string;
    name?: string;
    errorDetails?: string;
}