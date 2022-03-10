


const SkeletonVerCliente = () => {
    return (
        <div className="rounded-md max-w-sm mt-10">
            <div className="animate-pulse flex flex-col">
                <div className="flex-1 space-y-4 py-1 mb-10">
                    <div className="h-2 bg-slate-300 rounded w-56"></div>
                    <div className="h-8 bg-slate-300 rounded w-96"></div>
                </div>
                <div className="flex-1 space-y-4 py-1 mb-5">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-slate-300 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                    </div>
                </div>
                <div className="mb-4 h-3 bg-slate-300 rounded w-28"></div>
                <div className="mb-4 h-2 bg-slate-300 rounded w-52 sm:ml-7"></div>
                <div className="mb-4 h-2 bg-slate-300 rounded w-36 sm:ml-7"></div>

                <div className="mb-4 h-3 bg-slate-300 rounded w-28 mt-3"></div>
                <div className="mb-4 h-52 bg-slate-300 rounded w-full md:w-96 mt-1 sm:ml-7"></div>
            </div>
        </div>
    )
}

export default SkeletonVerCliente