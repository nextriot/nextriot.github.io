---
title: Using TypeScript decorators in React
date: '2020-04-04'
---

```jsx
import * as React from 'react'
import { render } from 'react-dom'

function decorate<T = any>(value: string): React.ComponentClass<T> {
  return (DecoratedComponent: React.ComponentType) =>
    class extends React.Component<T> {
      render() {
        return <DecoratedComponent {...this.props} injectedProp={value} />
      }
    }
}

@decorate('Hi')
class App extends React.Component<{
  injectedProp: string,
  nonInjectedProp: string,
}> {
  render() {
    return (
      <div>
        {this.props.injectedProp} {this.props.nonInjectedProp}
      </div>
    )
  }
}

render(<App nonInjectedProp="World" />, document.getElementById('root'))
```
