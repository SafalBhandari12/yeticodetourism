# 🚀 Quick Reference - Language Feature

## One-Minute Setup

You now have a **production-ready multilingual system** supporting 10 languages!

## Usage

### Use Translations in Your Component

```tsx
"use client";
import { useTranslation } from "@/lib/useTranslation";

export default function Home() {
  const t = useTranslation();
  return <h1>{t.hero.title}</h1>;
}
```

### Change Language

```tsx
import { useLanguage } from "@/lib/LanguageContext";

export default function Controls() {
  const { setLanguage } = useLanguage();
  return (
    <>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("es")}>Spanish</button>
      <button onClick={() => setLanguage("zh")}>Chinese</button>
    </>
  );
}
```

## Supported Languages

| Language   | Code | How to Use         |
| ---------- | ---- | ------------------ |
| English    | `en` | Default            |
| Chinese    | `zh` | Simplified Chinese |
| Hindi      | `hi` | Indian             |
| Spanish    | `es` | España             |
| French     | `fr` | France             |
| Arabic     | `ar` | Saudi Arabia       |
| Portuguese | `pt` | Portugal           |
| Russian    | `ru` | Russia             |
| Japanese   | `ja` | Japan              |
| German     | `de` | Germany            |

## Translation Structure

All translations have this structure:

```tsx
export const en = {
  nav: {
    /* Navigation items */
  },
  common: {
    /* Common phrases */
  },
  hero: {
    /* Hero section */
  },
  destinations: {
    /* Destination names */
  },
  footer: {
    /* Footer content */
  },
};
```

## Add New Content

### 1. Edit English file (`lib/lang/en.ts`)

```tsx
export const en = {
  // ... existing
  myFeature: {
    title: "Feature Title",
    description: "Feature Description",
  },
};
```

### 2. Update all 9 other language files

Copy the structure and translate (zh.ts, hi.ts, es.ts, fr.ts, ar.ts, pt.ts, ru.ts, ja.ts, de.ts)

### 3. Use in component

```tsx
const t = useTranslation();
const title = t.myFeature.title; // Works!
```

## Key Hooks

### `useTranslation()`

Get current language translations

```tsx
const t = useTranslation();
t.nav.destinations; // "Destinations"
```

### `useLanguage()`

Manage language state

```tsx
const { language, setLanguage, availableLanguages } = useLanguage();
```

## Translation Keys

Navigate easily with autocomplete:

```tsx
t.nav.destinations; // Navigation
t.nav.experiences;
t.nav.accommodation;

t.common.welcome; // Common phrases
t.common.learnMore;

t.hero.title; // Hero section
t.hero.subtitle;
t.hero.cta;

t.destinations.title; // Destinations
t.destinations.kathmandu;

t.footer.about; // Footer
t.footer.contact;
```

## TypeScript Support

Full type safety - TypeScript will warn about invalid keys:

```tsx
import type { Translation } from "@/lib/lang";

const t: Translation = useTranslation();
t.hero.title; // ✅ OK
t.hero.invalid; // ❌ Type error
```

## Features

✅ Persists to localStorage  
✅ Updates HTML lang attribute  
✅ Responsive UI (desktop/mobile)  
✅ Smooth animations  
✅ No network calls  
✅ SSR compatible  
✅ TypeScript safe

## File Locations

```
lib/lang/           ← Translation files (10 languages)
lib/LanguageContext.tsx     ← State management
lib/useTranslation.ts       ← Hook for translations
app/components/LanguageSelector.tsx  ← Language picker UI
```

## Common Tasks

### Get current language

```tsx
const { language } = useLanguage();
console.log(language); // 'en'
```

### Get all available languages

```tsx
const { availableLanguages } = useLanguage();
availableLanguages.forEach((lang) => {
  console.log(lang.name, lang.flag);
});
```

### Get language name

```tsx
const { getLanguageName } = useLanguage();
getLanguageName("es"); // "Spanish"
```

### Conditional rendering by language

```tsx
const { language } = useLanguage();
if (language === "ar") {
  // RTL content for Arabic
}
```

## Documentation

📖 **LANGUAGE_IMPLEMENTATION.md** - Full documentation  
📖 **DEVELOPER_GUIDE_LANGUAGES.md** - Examples and best practices  
📖 **LANGUAGE_SUPPORT_SUMMARY.md** - Complete overview  
📖 **IMPLEMENTATION_CHECKLIST.md** - What was implemented

## Need Help?

**In components:**

- Always add `"use client"` directive
- Use `useTranslation()` for translations
- Use `useLanguage()` for language control

**Adding content:**

- Update all 10 language files
- Keep key names consistent
- Use kebab-case for keys

**Troubleshooting:**

- Clear cache if language doesn't persist
- Check localStorage is enabled
- Ensure component has "use client"
- Verify translation keys exist in all files

---

**Everything is set up and ready to use!** 🎉

Start using translations with:

```tsx
import { useTranslation } from "@/lib/useTranslation";
```
