import { Skeleton } from "./ui/skeleton";

function ImageSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
      <Skeleton className="h-60" />
    </div>
  );
}

export default ImageSkeleton;
