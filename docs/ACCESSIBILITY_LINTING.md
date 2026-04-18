# Biome Accessibility Linting

This project uses [Biome](https://biomejs.dev/) with a comprehensive accessibility (a11y) configuration to ensure all code meets high accessibility standards.

## Overview

Biome provides 35+ accessibility lint rules that catch common accessibility issues in JSX/React code. This configuration enables all of them as errors to ensure accessibility is treated as a first-class concern.

## Enabled Accessibility Rules

### ARIA & Roles
- **noAriaHiddenOnFocusable** - Prevents `aria-hidden` on focusable elements
- **noAriaUnsupportedElements** - Ensures ARIA attributes are only used on supported elements
- **noInteractiveElementToNoninteractiveRole** - Prevents wrong role assignments
- **noNoninteractiveElementToInteractiveRole** - Prevents wrong role assignments
- **noRedundantRoles** - Avoids redundant role declarations
- **useAriaPropsForRole** - Ensures required ARIA props for each role
- **useAriaPropsSupportedByRole** - Validates ARIA props match the role
- **useValidAriaProps** - Validates ARIA property names
- **useValidAriaRole** - Validates ARIA role values
- **useValidAriaValues** - Validates ARIA state/property values

### Interactive Elements
- **noAccessKey** - Discourages accesskey attributes (can conflict with screen readers)
- **noAutofocus** - Warns on autofocus (can disorient screen reader users)
- **noNoninteractiveElementInteractions** - Prevents click handlers on non-interactive elements
- **noNoninteractiveTabindex** - Prevents tabindex on non-interactive elements
- **noPositiveTabindex** - Prevents positive tabindex values (breaks tab order)
- **noStaticElementInteractions** - Requires proper roles on elements with click handlers
- **useButtonType** - Requires explicit type on buttons
- **useFocusableInteractive** - Ensures interactive elements are focusable
- **useKeyWithClickEvents** - Requires keyboard handlers with click events
- **useKeyWithMouseEvents** - Requires focus/blur handlers with mouse events

### Content & Labels
- **noDistractingElements** - Blocks distracting elements like marquee/blink
- **noLabelWithoutControl** - Ensures labels have associated controls
- **noRedundantAlt** - Prevents redundant alt text ("image of...")
- **noSvgWithoutTitle** - Requires title on SVG elements
- **useAltText** - Requires meaningful alt text on images
- **useAnchorContent** - Ensures links have accessible content
- **useHeadingContent** - Ensures headings have visible content
- **useHtmlLang** - Requires lang attribute on html element
- **useIframeTitle** - Requires title on iframes
- **useMediaCaption** - Requires captions on audio/video
- **useSemanticElements** - Encourages semantic HTML over roles
- **useValidAnchor** - Validates anchor tags are properly formed
- **useValidAutocomplete** - Validates autocomplete attribute values
- **useValidLang** - Validates lang attribute values

### Tables
- **noHeaderScope** - Ensures scope is only used on th elements

## Usage

### Available Scripts

```bash
# Run linter (shows all issues)
npm run lint

# Fix safe issues automatically
npm run lint:fix

# Fix all issues (including unsafe)
npm run lint:fix:unsafe

# Format code
npm run format

# Run all Biome checks
npm run check
```

### Pre-Commit Hook

The pre-commit hook automatically runs accessibility checks before each commit. To set it up:

```bash
# Run the setup script
./scripts/setup-a11y-linting.sh

# Or manually configure git
# git config core.hooksPath .githooks
```

Once configured, commits will be blocked if any accessibility errors are found.

## Configuration

The accessibility configuration is in `biome.json` under the `linter.rules.a11y` section. Rules are set to:

- `"error"` - Must be fixed, blocks commit
- `"warn"` - Should be fixed, blocks commit (with `--error-on-warnings`)
- `"off"` - Disabled

## Migration from eslint-plugin-jsx-a11y

Biome's a11y rules cover most of the popular `eslint-plugin-jsx-a11y` rules. Key mappings:

| eslint-plugin-jsx-a11y | Biome Equivalent |
|------------------------|------------------|
| `accesskey` | `noAccessKey` |
| `alt-text` | `useAltText` |
| `anchor-has-content` | `useAnchorContent` |
| `anchor-is-valid` | `useValidAnchor` |
| `aria-activedescendant-has-tabindex` | `useAriaActivedescendantWithTabindex` |
| `aria-props` | `useValidAriaProps` |
| `aria-proptypes` | `useValidAriaValues` |
| `aria-role` | `useValidAriaRole` |
| `aria-unsupported-elements` | `noAriaUnsupportedElements` |
| `click-events-have-key-events` | `useKeyWithClickEvents` |
| `heading-has-content` | `useHeadingContent` |
| `html-has-lang` | `useHtmlLang` |
| `iframe-has-title` | `useIframeTitle` |
| `img-redundant-alt` | `noRedundantAlt` |
| `interactive-supports-focus` | `useFocusableInteractive` |
| `label-has-associated-control` | `noLabelWithoutControl` |
| `lang` | `useValidLang` |
| `media-has-caption` | `useMediaCaption` |
| `mouse-events-have-key-events` | `useKeyWithMouseEvents` |
| `no-autofocus` | `noAutofocus` |
| `no-distracting-elements` | `noDistractingElements` |
| `no-interactive-element-to-noninteractive-role` | `noInteractiveElementToNoninteractiveRole` |
| `no-noninteractive-element-interactions` | `noNoninteractiveElementInteractions` |
| `no-noninteractive-tabindex` | `noNoninteractiveTabindex` |
| `no-redundant-roles` | `noRedundantRoles` |
| `no-static-element-interactions` | `noStaticElementInteractions` |
| `scope` | `noHeaderScope` |
| `tabindex-no-positive` | `noPositiveTabindex` |

## Future Improvements

Biome is actively working on expanding accessibility support (see [discussion #7128](https://github.com/biomejs/biome/discussions/7128)). Planned improvements include:

- Full ARIA in HTML spec support
- HTML-AAM 1.0 support for better role calculation
- Accessible Name and Description Computation 1.2 support
- Web Platform Tests integration for higher accuracy

## Resources

- [Biome Accessibility Rules](https://biomejs.dev/linter/rules/#accessibility)
- [Biome Configuration Reference](https://biomejs.dev/reference/configuration/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Accessibility Resources](https://webaim.org/)
