Top bars are used as lower-level navigation elements for widgets inside applications. They have their own sub-elements such as buttons or select boxes, which it lays out on the left and right with automatically inserted separators.

### Usage

```jsx
import * as React from "react"
import { Topbar, TopbarSelect, TopbarButton } from "@operational/components"
;<Topbar
  left={
    <>
      <TopbarSelect label="Fruit" selected={"apples"} items={["apples", "oranges"].map(name => ({ label: name }))} />
      <TopbarButton icon="No">Clear</TopbarButton>
      <TopbarButton icon="Undo">Undo</TopbarButton>
      <TopbarButton icon="Redo" disabled>
        Redo
      </TopbarButton>
    </>
  }
  right={
    <>
      <TopbarButton icon="Share">Share</TopbarButton>
    </>
  }
/>
```
