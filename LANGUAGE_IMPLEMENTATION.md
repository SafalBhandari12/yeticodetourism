# Language Support Implementation

This project now supports the **top 10 most spoken languages** in the world with a complete multilingual infrastructure.

## Supported Languages

1. 🇺🇸 **English** (en)
2. 🇨🇳 **Chinese - Simplified** (zh)
3. 🇮🇳 **Hindi** (hi)
4. 🇪🇸 **Spanish** (es)
5. 🇫🇷 **French** (fr)
6. 🇸🇦 **Arabic** (ar)
7. 🇵🇹 **Portuguese** (pt)
8. 🇷🇺 **Russian** (ru)
9. 🇯🇵 **Japanese** (ja)
10. 🇩🇪 **German** (de)

## File Structure

```
lib/
├── lang/
│   ├── config.ts         # Language configuration and constants
│   ├── index.ts          # Translation index and utilities
│   ├── en.ts             # English translations
│   ├── zh.ts             # Chinese translations
│   ├── hi.ts             # Hindi translations
│   ├── es.ts             # Spanish translations
│   ├── fr.ts             # French translations
│   ├── ar.ts             # Arabic translations
│   ├── pt.ts             # Portuguese translations
│   ├── ru.ts             # Russian translations
│   ├── ja.ts             # Japanese translations
│   └── de.ts             # German translations
├── LanguageContext.tsx   # Language state management context
└── useTranslation.ts     # Hook for using translations in components
app/
└── components/
    └── LanguageSelector.tsx  # Language selector UI component
```

## Core Components

### 1. LanguageContext (`lib/LanguageContext.tsx`)

Provides language state management using React Context.

**Features:**

- Automatic language persistence to localStorage
- HTML lang attribute updates
- Validation of language codes
- Hydration-safe implementation

**Usage:**

```tsx
import { useLanguage } from "@/lib/LanguageContext";

export default function MyComponent() {
  const { language, setLanguage, availableLanguages } = useLanguage();

  // Change language
  setLanguage("es"); // Set to Spanish

  // Access current language
  console.log(language); // 'es'

  // Get all available languages
  availableLanguages.forEach((lang) => {
    console.log(lang.code, lang.name, lang.flag);
  });
}
```

### 2. LanguageSelector (`app/components/LanguageSelector.tsx`)

Responsive language selector component.

**Features:**

- Desktop: Dropdown with flag icons and native language names
- Mobile: Select dropdown for space efficiency
- Click-outside detection
- Current language indicator
- Smooth animations

**Usage:**

```tsx
import LanguageSelector from "@/app/components/LanguageSelector";

export default function Navbar() {
  return (
    <nav>
      <LanguageSelector />
    </nav>
  );
}
```

### 3. useTranslation Hook (`lib/useTranslation.ts`)

Hook for accessing translations in any component.

**Usage:**

```tsx
"use client";
import { useTranslation } from "@/lib/useTranslation";

export default function Hero() {
  const t = useTranslation();

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
      <button>{t.hero.cta}</button>
    </div>
  );
}
```

## How to Add Translations

### Step 1: Add content to language files

Edit `lib/lang/en.ts` and add your new content:

```tsx
export const en = {
  // ... existing content
  myNewSection: {
    title: "My Title",
    description: "My Description",
  },
};
```

### Step 2: Add same structure to all other language files

Update `lib/lang/zh.ts`, `lib/lang/es.ts`, etc.:

```tsx
export const zh = {
  // ... existing content
  myNewSection: {
    title: "我的标题",
    description: "我的描述",
  },
};
```

### Step 3: Use in components

```tsx
"use client";
import { useTranslation } from "@/lib/useTranslation";

export default function MyComponent() {
  const t = useTranslation();

  return (
    <div>
      <h2>{t.myNewSection.title}</h2>
      <p>{t.myNewSection.description}</p>
    </div>
  );
}
```

## Configuration

### Available Languages (in `lib/lang/config.ts`)

```tsx
export const TOP_10_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  {
    code: "zh",
    name: "Chinese (Simplified)",
    nativeName: "简体中文",
    flag: "🇨🇳",
  },
  // ... more languages
];

export const DEFAULT_LANGUAGE = "en";
```

### To add/remove languages:

1. Update `TOP_10_LANGUAGES` array in `lib/lang/config.ts`
2. Create/remove corresponding translation files in `lib/lang/`
3. Update `translations` object in `lib/lang/index.ts`

## Features

✅ **Persistent Language Selection** - Language preference saved to localStorage  
✅ **Automatic Hydration Handling** - SSR-safe implementation  
✅ **SEO Friendly** - HTML lang attribute automatically updated  
✅ **Type Safe** - Full TypeScript support for translations  
✅ **Responsive Design** - Dropdown on desktop, select on mobile  
✅ **Performance** - Lazy loading of translations  
✅ **Accessibility** - Proper ARIA labels and semantic HTML

## Implementation Details

### Language Persistence

Language choice is saved to browser localStorage and automatically restored on page load.

### HTML Lang Attribute

The document's `lang` attribute is automatically set to the current language for better accessibility and SEO.

### Error Handling

If an invalid language code is provided, the hook silently ignores it and keeps the current language.

### Hydration Safety

The LanguageProvider doesn't render content until after hydration to prevent hydration mismatches.

## Example: Complete Component

```tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function ExampleComponent() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <section>
      <h2>{t.common.welcome}</h2>

      <p>Current Language: {language}</p>

      <div className='flex gap-4'>
        <button onClick={() => setLanguage("en")}>
          {t.nav.language}: English
        </button>
        <button onClick={() => setLanguage("es")}>
          {t.nav.language}: Spanish
        </button>
      </div>
    </section>
  );
}
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support with responsive UI

## Future Enhancements

- Add more languages beyond top 10
- Implement RTL (right-to-left) language support for Arabic
- Add language auto-detection based on browser settings
- Implement server-side language routing
- Add language-specific date/time formatting
- Create admin panel for managing translations

---

**Created:** 2025-12-15  
**Last Updated:** 2025-12-15
