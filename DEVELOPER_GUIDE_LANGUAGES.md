# Language Implementation Guide for Developers

## Quick Start

### 1. Using Translations in Components

```tsx
"use client";
import { useTranslation } from "@/lib/useTranslation";

export default function MyComponent() {
  const t = useTranslation();

  return <h1>{t.hero.title}</h1>;
}
```

### 2. Changing Language Programmatically

```tsx
"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function MyComponent() {
  const { setLanguage } = useLanguage();

  return <button onClick={() => setLanguage("es")}>Switch to Spanish</button>;
}
```

### 3. Getting Current Language Info

```tsx
"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function MyComponent() {
  const { language, availableLanguages, getLanguageName } = useLanguage();

  return (
    <div>
      <p>Current: {getLanguageName(language)}</p>
      <p>All available:</p>
      {availableLanguages.map((lang) => (
        <p key={lang.code}>
          {lang.flag} {lang.name}
        </p>
      ))}
    </div>
  );
}
```

## Adding New Content

### Step 1: Update English translations

Edit `lib/lang/en.ts`:

```tsx
export const en = {
  nav: {
    // ... existing
  },
  myFeature: {
    // ← NEW SECTION
    title: "Feature Title",
    description: "Feature Description",
    button: "Learn More",
  },
};
```

### Step 2: Update all other languages

For each language file (zh.ts, hi.ts, es.ts, etc.):

```tsx
export const zh = {
  nav: {
    // ... existing
  },
  myFeature: {
    // ← NEW SECTION - TRANSLATED
    title: "功能标题",
    description: "功能描述",
    button: "了解更多",
  },
};
```

### Step 3: Use in your component

```tsx
"use client";
import { useTranslation } from "@/lib/useTranslation";

export default function MyFeature() {
  const t = useTranslation();

  return (
    <div>
      <h2>{t.myFeature.title}</h2>
      <p>{t.myFeature.description}</p>
      <button>{t.myFeature.button}</button>
    </div>
  );
}
```

## Advanced Usage

### Accessing Nested Translations

```tsx
const t = useTranslation();

// All are valid:
t.nav.destinations; // "Destinations"
t.destinations.title; // "Top Destinations"
t.footer.about; // "About Nepal Tourism"
```

### Creating Language-Specific Layouts

```tsx
"use client";
import { useLanguage } from "@/lib/LanguageContext";

export default function MyComponent() {
  const { language } = useLanguage();

  // Different rendering for RTL languages
  const isRTL = language === "ar"; // Arabic

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr" }}>{/* Content */}</div>
  );
}
```

### Conditional Language-Specific Content

```tsx
"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

export default function MyComponent() {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <div>
      {language === "en" && <p>English only content</p>}
      {language === "es" && <p>Contenido solo en español</p>}

      {/* Or use translations */}
      <p>{t.common.welcome}</p>
    </div>
  );
}
```

## Best Practices

### ✅ DO:

- Always use "use client" directive in components that call hooks
- Keep translations organized in logical sections
- Use semantic HTML with lang attributes
- Test with all 10 languages during development
- Keep translation keys consistent across files

### ❌ DON'T:

- Mix languages in a single translation object
- Hardcode strings instead of using translations
- Forget to update all language files when adding new content
- Use useLanguage() or useTranslation() in Server Components
- Change language context outside of a LanguageProvider

## Supported Languages

| Code | Language             | Flag | Native Name |
| ---- | -------------------- | ---- | ----------- |
| en   | English              | 🇺🇸   | English     |
| zh   | Chinese (Simplified) | 🇨🇳   | 简体中文    |
| hi   | Hindi                | 🇮🇳   | हिन्दी      |
| es   | Spanish              | 🇪🇸   | Español     |
| fr   | French               | 🇫🇷   | Français    |
| ar   | Arabic               | 🇸🇦   | العربية     |
| pt   | Portuguese           | 🇵🇹   | Português   |
| ru   | Russian              | 🇷🇺   | Русский     |
| ja   | Japanese             | 🇯🇵   | 日本語      |
| de   | German               | 🇩🇪   | Deutsch     |

## TypeScript Support

The translation system is fully typed:

```tsx
import { useTranslation } from "@/lib/useTranslation";
import type { Translation } from "@/lib/lang";

export default function MyComponent() {
  const t: Translation = useTranslation();

  // TypeScript will autocomplete and validate:
  // t.nav.destinations ✅
  // t.nav.invalid ❌ (error)
}
```

## Performance Tips

1. **Lazy Loading** - Translations are only loaded for the current language
2. **Context Memoization** - Language context is memoized to prevent unnecessary renders
3. **Local Storage** - Language preference is cached locally
4. **No Network Calls** - All translations are bundled with the app

## Troubleshooting

### Language not persisting after refresh

- Clear browser cache/cookies
- Check if localStorage is enabled
- Verify "use client" directive is in component

### useLanguage hook not working

- Ensure component is wrapped in LanguageProvider (in layout.tsx)
- Check component has "use client" directive
- Don't use in Server Components

### Translations not updating when language changes

- Make sure using useTranslation() hook
- Component must re-render (check for React.memo)
- Verify translation keys exist in language file

### Missing translations in some languages

- Check all language files have the same keys
- Look for typos in key names
- Ensure section structure matches English file

## Testing Multi-Language Features

```tsx
// Example test
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "@/lib/LanguageContext";

it("should display translated text", () => {
  render(
    <LanguageProvider>
      <MyComponent />
    </LanguageProvider>
  );

  expect(screen.getByText("Expected Translated Text")).toBeInTheDocument();
});
```

## Adding More Languages

If you need to support additional languages beyond the top 10:

1. Add to `TOP_10_LANGUAGES` in `lib/lang/config.ts`:

```tsx
export const TOP_10_LANGUAGES = [
  // ... existing
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
];
```

2. Create new translation file `lib/lang/ko.ts`

3. Update `lib/lang/index.ts`:

```tsx
import { ko } from "./ko";

export const translations = {
  // ... existing
  ko,
};
```

---

**For more information, see:** `LANGUAGE_IMPLEMENTATION.md`
