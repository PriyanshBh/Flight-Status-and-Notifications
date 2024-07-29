// Appbar.jsx
export const Appbar = () => {
    return (
        <div className="shadow h-14 flex justify-between items-center px-4 bg-white">
            <div className="flex flex-col justify-center h-full">
                Flight Status & Notifications App
            </div>
            <div className="flex items-center">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center">
                    <div className="text-xl">U</div>
                </div>
            </div>
        </div>
    );
}
