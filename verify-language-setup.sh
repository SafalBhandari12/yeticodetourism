#!/bin/bash
# Language Implementation Verification Script
# Run this to verify all language feature files are in place

echo "🌍 Verifying Language Implementation..."
echo ""

# Check configuration files
echo "✓ Checking language configuration files..."
test -f "lib/lang/config.ts" && echo "  ✅ lib/lang/config.ts" || echo "  ❌ lib/lang/config.ts"
test -f "lib/lang/index.ts" && echo "  ✅ lib/lang/index.ts" || echo "  ❌ lib/lang/index.ts"

# Check translation files
echo ""
echo "✓ Checking translation files (10 languages)..."
for lang in en zh hi es fr ar pt ru ja de; do
  if test -f "lib/lang/${lang}.ts"; then
    echo "  ✅ lib/lang/${lang}.ts"
  else
    echo "  ❌ lib/lang/${lang}.ts"
  fi
done

# Check core modules
echo ""
echo "✓ Checking core language modules..."
test -f "lib/LanguageContext.tsx" && echo "  ✅ lib/LanguageContext.tsx" || echo "  ❌ lib/LanguageContext.tsx"
test -f "lib/useTranslation.ts" && echo "  ✅ lib/useTranslation.ts" || echo "  ❌ lib/useTranslation.ts"

# Check components
echo ""
echo "✓ Checking UI components..."
test -f "app/components/LanguageSelector.tsx" && echo "  ✅ app/components/LanguageSelector.tsx" || echo "  ❌ app/components/LanguageSelector.tsx"
test -f "app/components/LanguageExampleComponent.tsx" && echo "  ✅ app/components/LanguageExampleComponent.tsx" || echo "  ❌ app/components/LanguageExampleComponent.tsx"

# Check documentation
echo ""
echo "✓ Checking documentation..."
test -f "LANGUAGE_IMPLEMENTATION.md" && echo "  ✅ LANGUAGE_IMPLEMENTATION.md" || echo "  ❌ LANGUAGE_IMPLEMENTATION.md"
test -f "DEVELOPER_GUIDE_LANGUAGES.md" && echo "  ✅ DEVELOPER_GUIDE_LANGUAGES.md" || echo "  ❌ DEVELOPER_GUIDE_LANGUAGES.md"
test -f "LANGUAGE_SUPPORT_SUMMARY.md" && echo "  ✅ LANGUAGE_SUPPORT_SUMMARY.md" || echo "  ❌ LANGUAGE_SUPPORT_SUMMARY.md"

echo ""
echo "✓ Checking integration points..."
grep -q "LanguageProvider" "app/layout.tsx" && echo "  ✅ LanguageProvider in layout.tsx" || echo "  ❌ LanguageProvider not found in layout.tsx"
grep -q "LanguageSelector" "app/components/Navbar.tsx" && echo "  ✅ LanguageSelector in Navbar.tsx" || echo "  ❌ LanguageSelector not found in Navbar.tsx"

echo ""
echo "🎉 Language Implementation Verification Complete!"
echo ""
echo "📖 Documentation files:"
echo "   • LANGUAGE_IMPLEMENTATION.md - Main documentation"
echo "   • DEVELOPER_GUIDE_LANGUAGES.md - Developer guide with examples"
echo "   • LANGUAGE_SUPPORT_SUMMARY.md - Quick summary"
echo ""
echo "🚀 To start using translations:"
echo "   import { useTranslation } from '@/lib/useTranslation';"
echo ""
