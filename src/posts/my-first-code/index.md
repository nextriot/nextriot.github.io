---
title: My First Code
date: 2020-04-10
spoiler: So which one should I use?
---

### My First Code

```jsx
function LikeButton() {
  const [like, increaseLike] = React.useState(0)
  return (
    <>
      <p>{like}</p>
      <button onClick={() => increaseLike((c) => c + 1)}>increase</button>
    </>
  )
}
```

```jsx react-live
function LikeButton() {
  const [like, increaseLike] = React.useState(0)
  return (
    <>
      <p>{like}</p>
      <button onClick={() => increaseLike((c) => c + 1)}>increase</button>
    </>
  )
}
```
