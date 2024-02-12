import LoadingIcon from "@/components/loadingIcon";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <LoadingIcon />
    </div>
  );
}
