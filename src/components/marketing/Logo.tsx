import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="h-8 w-8 rounded-full bg-indigo-500 dark:bg-indigo-400 flex items-center justify-center">
        <span className="text-white font-bold">TS</span>
      </div>
      <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-100">
        TalentSync
      </span>
    </Link>
  );
}
