'use client';

export default function Education() {
return (
    <div className="flex flex-col p-4 border border-gray-300 rounded shadow-md">
        <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Education</h2>
        <button>
            <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
        </div>
        - List education here
    </div>
    );
}
