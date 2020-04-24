import { TypographyOptions } from 'typography'
import { css, FlattenSimpleInterpolation } from 'styled-components'

interface TypographyStyles {
  [key: string]: FlattenSimpleInterpolation
}

interface TransformedStyles {
  [key: string]: { [key: string]: string }
}

/** Grab the type for `overrideStyles` */
const propName = 'overrideStyles'
type overrideStyles = TypographyOptions[typeof propName]

/**
 * See below `transformSCArrToObj` function.
 * for how we're using CSS syntax here.
 */
const theme: overrideStyles = ({ rhythm, scale: _scale }) => {
  const scale = (ratio: number) => (_scale(ratio) as unknown) as string

  /**
   * Scale
   * -1 / 1.35  = 10px
   * -1 / 1.7   = 11px
   * -1 / 4.2   = 16px
   * -1 / 9     = 18px
   * 0.52       = 32px;
   */

  /**
   * Rhythm
   * 0.15       = 4px
   * 0.3        = 8px
   * 0.44       = 12px
   * 0.58       = 16px
   * 0.86       = 24px
   * 1.45       = 40px
   * 1.72       = 48px
   */

  const result: TypographyStyles = {
    h1: css`
      ${scale(0.52)};
      line-height: 1.125;
      margin-bottom: ${rhythm(0.3)};
    `,
    'h2, h3, h4, h5, h6': css`
      display: flex;
      align-items: center;
    `,
    'h4, h5': css`
      line-height: 1.4;
      font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    h2: css`
      ${scale(0.76)};
      font-weight: 400;
      line-height: 1.1;
      margin: ${rhythm(0.86)} 0;
    `,
    h3: css`
      ${scale(0.52)};
      line-height: 1.2;
      font-weight: 700;
      margin: ${rhythm(0.86)} 0 ${rhythm(0.15)};
    `,
    h4: css`
      ${scale(-1 / 4.2)};
      margin: ${rhythm(0.86)} 0 ${rhythm(0.15)};
    `,
    h5: css`
      ${scale(-1 / 2.8)}
      margin: ${rhythm(0.86)} 0 ${rhythm(0.3)};
    `,
    p: css`
      margin-bottom: ${rhythm(0.58)};
    `,
    'p > a': css`
      text-decoration: underline;
    `,
    'p.spoiler': css`
      line-height: ${rhythm(0.8)};
      margin-bottom: ${rhythm(0.7)};
    `,
    small: css`
      font-size: inherit;
      margin-bottom: ${rhythm(0.3)};
    `,
    'small > a': css`
      ${scale(0.1)};
      color: var(--primaryColor);
      font-family: 'Oranienbaum', 'Bodoni', 'Georgia', serif;
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: all 0.1s ease-in;
      will-change: transform;
    `,
    'small > a:hover': css`
      filter: brightness(0.7);
    `,
    'b, time, figcaption': css`
      font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
      line-height: ${rhythm(0.5)};
      text-transform: uppercase;
    `,
    'b, time': css`
      ${scale(-1 / 1.7)};
      line-height: 1;
      font-weight: 600;
      letter-spacing: 1px;
    `,
    b: css`
      color: var(--secondaryColor);
      margin-right: ${rhythm(0.3)};
    `,
    '.article-container': css`
      margin: 0 auto ${rhythm(1.72)};
      max-width: 1024px;
      width: 100%;
    `,
    '.article-wrapper': css`
      display: flex;
    `,
    '.article-header': css`
      padding: ${rhythm(0.87)} ${rhythm(0.6)} ${rhythm(0.44)};
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    `,
    '.article-body': css`
      max-width: 640px;
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-shrink: 1;
      flex-grow: 1;
    `,
    '.article-footer': css`
      margin: 0 ${rhythm(0.6)};
      /* padding-top: ${rhythm(0.58)}; */
    `,
    '.article-footer:before': css`
      content: '';
      width: 96px;
      height: 1px;
      background-color: var(--black);
      margin: ${rhythm(0.86)} auto;
      display: block;
    `,
    '.article-footer .author': css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: ${rhythm(0.58)};
      line-height: 1.25;
    `,
    '.article-footer figure': css`
      margin: 0;
      flex-basis: 72px;
      max-width: 72px;
      flex-shrink: 0;
      margin-right: ${rhythm(0.58)};
      border-radius: 36px;
    `,
    '.article-footer .bio': css`
      ${scale(-1 / 9)};
      line-height: 1.25;
      font-style: italic;
      margin-top: -2px;
    `,
    '.article-footer .bio a': css`
      font-size: ${rhythm(0.5)};
      font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
      font-weight: 600;
      font-style: normal;
      text-transform: uppercase;
      letter-spacing: 1px;
    `,
    '.article-footer .bio em': css`
      font-style: normal;
      margin-left: ${rhythm(0.15)};
    `,
    '.article-footer .bio em a': css`
      font-style: italic;
      text-decoration: underline;
      font-family: inherit;
      text-transform: none;
      font-weight: inherit;
      font-size: inherit;
      letter-spacing: normal;
      margin-left: ${rhythm(-0.2)};
    `,
    '.article-footer .social': css`
      ${scale(-1 / 4.2)};
      font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
      margin-top: ${rhythm(0.3)};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-style: normal;
      font-weight: 300;
    `,
    '.article-footer .social > span': css`
      margin-right: ${rhythm(0.58)};
    `,
    '.article-footer .social a': css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      opacity: 1;
      margin-right: ${rhythm(0.58)};
    `,
    '.article-footer .social a:hover': css`
      will-change: transform;
      transition: opacity 0.3s ease-in;
      opacity: 0.5;
    `,
    '.article-footer .social a img': css`
      width: 16px;
    `,
    '.article-footer .social a span': css`
      display: none;
    `,
    '.article-footer nav': css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--primaryColor);
      margin-top: ${rhythm(1.45)};
    `,
    '.article-footer nav a': css`
      font-family: 'Oranienbaum', 'Bodoni', 'Georgia', serif;
      display: flex;
      align-items: center;
      max-width: 50%;
    `,
    '.article-footer nav a em': css`
      ${scale(-1 / 4.2)};
      margin: 0 ${rhythm(0.44)};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    `,
    '.article-footer nav a span': css`
      ${scale(-1 / 4.2)};
      display: block;
      font-weight: 300;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: ${rhythm(0.3)} ${rhythm(0.44)};
      background-color: var(--primaryColor);
      color: var(--white);
      transition: background-color 0.3s ease-in;
      will-change: transform;
    `,
    '.article-footer nav a:hover span': css`
      background-color: var(--primaryDark);
    `,
    '.article-footer nav a.prev span': css`
      border-radius: 0 0 16px 0;
    `,
    '.article-footer nav a.next span': css`
      border-radius: 0 0 0 16px;
    `,
    '.article-sidebar h2': css`
      ${scale(0.52)};
      line-height: 1.1;
      margin: 0;
      padding-bottom: ${rhythm(0.58)};
      text-transform: uppercase;
      font-family: 'Oranienbaum', 'Bodoni', 'Georgia', serif;
      letter-spacing: 2px;
      border-bottom: 1px solid var(--black);
    `,
    '.article-sidebar ul': css`
      margin: 0;
    `,
    '.article-sidebar li': css`
      display: flex;
      flex-direction: row-reverse;
      padding: ${rhythm(0.58)} 0;
      margin: 0;
      border-bottom: 1px solid var(--lightGrey);
    `,
    '.article-sidebar li figure': css`
      margin: 0;
      flex-basis: 80px;
      flex-shrink: 0;
      margin-left: ${rhythm(0.58)};
    `,
    '.article-sidebar li div': css`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    `,
    '.article-sidebar li h3': css`
      ${scale(-1 / 9)};
      line-height: 1.2;
      font-weight: 400;
      margin: 0;
      margin-bottom: ${rhythm(0.58)};
    `,
    '.article-sidebar li a': css`
      margin: 0;
    `,
    '.article-meta': css`
      line-height: 0;
      padding-bottom: ${rhythm(0.45)};
    `,
    '.article-body section': css`
      margin-left: ${rhythm(0.58)};
      margin-right: ${rhythm(0.58)};
      letter-spacing: 0.2px;
    `,
    img: css`
      margin-bottom: 0;
    `,
    figure: css`
      margin-bottom: ${rhythm(0.6)};
    `,
    figcaption: css`
      ${scale(-1 / 1.35)};
      padding: ${rhythm(0.44)} ${rhythm(0.6)};
      border-bottom: 1px solid var(--lightGrey);
      font-weight: 400;
      color: var(--lightGreyText);
    `,
    blockquote: css`
      ${scale(0.2)};
      line-height: ${rhythm(1.2)};
      font-weight: 700;
      margin: ${rhythm(1.45)} 0;
      font-style: italic;
    `,
  }

  return transformSCArrToObj(result)
}

/**
 * Use styled components syntax in the typography.js override.
 * Transforms the style array returned by styled components
 * into an object for use with typography.js
 * */
const transformSCArrToObj = (rules: TypographyStyles): TransformedStyles => {
  const transformedRules: TransformedStyles = {}
  const results = Object.entries(rules)
  /* SC sends back tuples of key (dom element) / value (css rules applied) */
  results.forEach(([tag, rulesArr]) => {
    /**
     * Using utility functions from typography.js
     * breaks the SC return of a single string for all rules and instead
     * sends back multiple strings.
     * We concatenate all strings to turn it back into
     * a single string here as a result
     * */
    const ruleStr = rulesArr.join('')
    /** Split each individual rule & remove any empty strings from the array */
    const splitRules = ruleStr.split(';').filter(Boolean)
    transformedRules[tag] = {}
    splitRules.forEach((rule) => {
      /** For each rule append to the associated tag / key object created above. */
      const [key, val] = rule.split(':')
      transformedRules[tag][key] = val
    })
  })
  return transformedRules
}

export default theme
