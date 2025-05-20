import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <CodeBracketIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Hackaton-clerk-2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
