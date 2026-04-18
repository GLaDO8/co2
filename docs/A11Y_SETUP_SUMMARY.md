# Biome Accessibility Linting - Setup Complete

## What Was Installed

1. **@biomejs/biome** (v2.4.12) - The Biome toolchain with linter, formatter, and more
2. **Pre-commit hook** at `.githooks/pre-commit`
3. **Setup script** at `scripts/setup-a11y-linting.sh`

## Configuration

The configuration is in `biome.json` with:

### 35+ Accessibility Rules Enabled
All a11y rules are enabled as either `error` (blocks commit) or `warn` (will block with `--error-on-warnings`):

**Critical a11y rules (error):**
- `noAriaHiddenOnFocusable` - Prevents hiding focusable elements
- `noLabelWithoutControl` - Ensures labels have associated inputs
- `useAltText` - Requires alt text on images
- `useValidAriaProps` - Validates ARIA attribute names
- `useValidAriaRole` - Validates ARIA role values
- `useButtonType` - Requires type on buttons
- `useKeyWithClickEvents` - Requires keyboard handlers
- And 20+ more...

**Currently Found Issues:**
```
components/co2/RebreathedAirGraph.tsx:115:13 - aria-label not supported on <pre>
components/co2/RebreathedAirGraph.tsx:132:11 - aria-label not supported on <pre>
```

## NPM Scripts Added

```bash
npm run lint          # Check for issues
npm run lint:fix      # Fix safe issues
npm run lint:fix:unsafe  # Fix all issues
npm run format        # Format code
npm run check         # Run all Biome checks
```

## Activate Pre-Commit Hook

```bash
# Run the setup script
./scripts/setup-a11y-linting.sh

# Or manually:
git config core.hooksPath .githooks
```

Once activated, every commit will run accessibility checks and block if errors are found.

## Next Steps

1. **Fix the 2 accessibility errors** in `RebreathedAirGraph.tsx`:
   - The `<pre>` elements have `aria-label` which is not a supported attribute
   - Options: Add a `role` that supports aria-label, or use a different element

2. **Review the 5 warnings** and decide which to fix

3. **Run auto-fix** to clean up the easy issues:
   ```bash
   npm run lint:fix
   ```

## Comparison with eslint-plugin-jsx-a11y

Biome covers most of the popular eslint-plugin-jsx-a11y rules:

| ESLint Rule | Biome Equivalent |
|------------|------------------|
| `jsx-a11y/alt-text` | `useAltText` |
| `jsx-a11y/anchor-has-content` | `useAnchorContent` |
| `jsx-a11y/aria-props` | `useValidAriaProps` |
| `jsx-a11y/aria-proptypes` | `useValidAriaValues` |
| `jsx-a11y/click-events-have-key-events` | `useKeyWithClickEvents` |
| `jsx-a11y/label-has-associated-control` | `noLabelWithoutControl` |
| `jsx-a11y/no-autofocus` | `noAutofocus` |
| `jsx-a11y/no-static-element-interactions` | `noStaticElementInteractions` |
| `jsx-a11y/tabindex-no-positive` | `noPositiveTabindex` |

See full mapping in `docs/ACCESSIBILITY_LINTING.md`

## Future

Biome is actively expanding accessibility support (see [GitHub discussion #7128](https://github.com/biomejs/biome/discussions/7128)). Future improvements include:
- ARIA in HTML spec support
- HTML-AAM 1.0 for better role calculation  
- Accessible Name Computation 1.2
- Web Platform Tests integration

## Resources

- Full documentation: `docs/ACCESSIBILITY_LINTING.md`
- Biome docs: https://biomejs.dev/linter/rules/#accessibility
- ARIA practices: https://www.w3.org/WAI/ARIA/apg/
