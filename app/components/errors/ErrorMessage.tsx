export const ErrorMessage = ({ error }: { error: Error }) => {
    return (
        <div className="h-[80vh] flex items-center justify-center flex-col">
            <div className="border border-red-600 bg-red-400 rounded-md p-10">
                <h1 className="text-v-main-title">Error</h1>
                <pre className="text-v-small">{error.message}</pre>
            </div>
        </div>
    );
};
