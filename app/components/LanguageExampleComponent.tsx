"use client";

import { useTranslation } from "@/lib/useTranslation";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Example component demonstrating how to use the multilingual feature
 * This shows best practices for implementing translations throughout the app
 */
export default function LanguageExampleComponent() {
  const t = useTranslation(); // Get translations for current language
  const { language, availableLanguages } = useLanguage(); // Get language info

  return (
    <div className='p-8 bg-gray-50 rounded-lg'>
      <h3 className='text-lg font-semibold mb-4'>Language Feature Demo</h3>

      {/* Display current language */}
      <div className='mb-6'>
        <p className='text-sm text-gray-600'>Current Language</p>
        <p className='text-lg font-medium'>
          {availableLanguages.find((l) => l.code === language)?.flag}{" "}
          {availableLanguages.find((l) => l.code === language)?.name}
        </p>
      </div>

      {/* Show example translations */}
      <div className='mb-6 space-y-3'>
        <div>
          <p className='text-sm text-gray-600'>Welcome Message:</p>
          <p className='font-medium'>{t.common.welcome}</p>
        </div>
        <div>
          <p className='text-sm text-gray-600'>Hero Title:</p>
          <p className='font-medium'>{t.hero.title}</p>
        </div>
        <div>
          <p className='text-sm text-gray-600'>Navigation - Destinations:</p>
          <p className='font-medium'>{t.nav.destinations}</p>
        </div>
      </div>

      {/* Info box */}
      <div className='bg-blue-50 border border-blue-200 rounded p-4 text-sm text-blue-800'>
        <p className='font-semibold mb-2'>✨ How it Works:</p>
        <ul className='list-disc list-inside space-y-1'>
          <li>Language selection is saved to localStorage</li>
          <li>Use the language selector in the navbar to change language</li>
          <li>All content automatically updates when language changes</li>
          <li>Supports 10 most spoken languages worldwide</li>
        </ul>
      </div>
    </div>
  );
}
