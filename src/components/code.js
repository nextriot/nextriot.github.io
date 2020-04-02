import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import styled from "styled-components"

const theme = {
  plain: {
    backgroundColor: "var(--codeBg)",
    color: "var(--codeText0)",
    fontFamily:
      "Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace",
    fontSize: "0.85rem",
    lineHeight: 1.55,
  },
  styles: [
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "var(--codeText1)",
      },
    },
  ],
}

const LineNo = styled.span`
  display: inline-flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const CodeWrapper = styled.div`
  overflow: auto;
`

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1.3125rem;
  border-radius: 10px;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
`

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta) => {
  if (!RE.test(meta)) {
    return () => false
  } else {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map((v) => v.split("-").map((v) => parseInt(v, 10)))
    return (index) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  }
}

export const Code = ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor padding={0} />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <CodeWrapper>
            <Pre className={className} style={style}>
              {tokens.map((line, i) => {
                /* Add Highlighting */
                const lineProps = getLineProps({ line, key: i })
                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }
                /* Add Line Numbers */
                let lineNumberElem
                if (
                  // Remove the last empty line:
                  line.length === 1 &&
                  line[0].empty === true &&
                  i === tokens.length - 1
                ) {
                  lineNumberElem = null
                } else {
                  lineNumberElem = <LineNo>{i + 1}</LineNo>
                }
                return (
                  <div key={i} {...lineProps}>
                    {lineNumberElem}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </Pre>
          </CodeWrapper>
        )}
      </Highlight>
    )
  }
}
