import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
    return (
        <div className="flex justify-center flex-col space-y-4">
            {/* Heading Skeleton */}
            <div className="text-center">
                <Skeleton className="h-8 w-[150px] mx-auto mb-2" /> {/* Skeleton for the heading */}
                <Skeleton className="h-6 w-[250px] mx-auto" /> {/* Skeleton for the description */}
            </div>

            {/* Card Skeletons */}
            <div className="flex items-top justify-center pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Card Skeleton */}
                    <div className="w-[350px]">
                        <div className="bg-white rounded-xl p-4 shadow-md">
                            {/* Card Header */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <Skeleton className="h-6 w-[200px] mx-auto" /> {/* Card Title Skeleton */}
                                <Skeleton className="h-4 w-[250px] mx-auto" /> {/* Card Description Skeleton */}
                            </div>

                            {/* Card Content */}
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>

                            {/* Card Footer */}
                            <div className="mt-4">
                                <Skeleton className="h-10 w-full rounded-md" /> {/* Button Skeleton */}
                            </div>
                        </div>
                    </div>

                    {/* Repeat for other cards */}
                    <div className="w-[350px]">
                        <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="flex flex-col space-y-2 mb-4">
                                <Skeleton className="h-6 w-[200px] mx-auto" />
                                <Skeleton className="h-4 w-[250px] mx-auto" />
                            </div>

                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>

                            <div className="mt-4">
                                <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                        </div>
                    </div>

                    <div className="w-[350px]">
                        <div className="bg-white rounded-xl p-4 shadow-md">
                            <div className="flex flex-col space-y-2 mb-4">
                                <Skeleton className="h-6 w-[200px] mx-auto" />
                                <Skeleton className="h-4 w-[250px] mx-auto" />
                            </div>

                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>

                            <div className="mt-4">
                                <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
