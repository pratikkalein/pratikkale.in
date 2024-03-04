import { Skeleton } from "./ui/skeleton";

function BlogSkeleton() {
  return (
    <div className="flex flex-col gap-2 mt-4 sm:px-20">
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}

export default BlogSkeleton;
