The Select component presents users with a list of information with single-choice or multiple-choice options. Select elements can have options filled onClick, and also support filters.

### Basic usage

If the component is used with a string `value` prop, it behaves as a single select. Every time the value is changed, the options pop-up closes automatically.

```jsx
import * as React from "react"
import { Select } from "@operational/components"

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
  { label: "Option 4", value: "four" },
  { label: "Option 5", value: "five" },
  { label: "Option 6", value: "six" },
  { label: "Option 7", value: "seven" },
  { label: "Option 8", value: "eight" },
]

const MyComponent = () => {
  const [value, setValue] = React.useState("one")

  return (
    <Select
      label="Select label"
      value={value}
      options={options}
      filterable
      placeholder="Choose an option"
      onChange={setValue}
    />
  )
}

;<MyComponent />
```

### Usage as multiselect

Using an array prop in the `value` makes the component work as multiselect. The pop-up stays open so that additional values may be added.

```jsx
import * as React from "react"
import { Select } from "@operational/components"

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
  { label: "Option 4", value: "four" },
  { label: "Option 5", value: "five" },
  { label: "Option 6", value: "six" },
  { label: "Option 7", value: "seven" },
  { label: "Option 8", value: "eight" },
]

const MyOtherComponent = () => {
  const [value, setValue] = React.useState([])
  return (
    <Select
      label="Select label"
      value={value}
      options={options}
      filterable
      placeholder="Choose an option"
      onChange={setValue}
    />
  )
}

;<MyOtherComponent />
```

### With maxOptions

If you have a huge list from a backend, you can limit the number of options displayed to avoid rendering performance issues. Just add `maxOptions` and it's done. Please note that without the `filterable` option enabled, some options can't be selected.

```jsx
import * as React from "react"
import { Select } from "@operational/components"

const options = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
  { label: "Option 4", value: "four" },
  { label: "Option 5", value: "five" },
  { label: "Option 6", value: "six" },
  { label: "Option 7", value: "seven" },
  { label: "Option 8", value: "eight" },
]

const MyThirdComponent = () => {
  const [value, setValue] = React.useState("one")
  return (
    <Select
      label="Select label"
      value={value}
      options={options}
      filterable
      maxOptions={2}
      placeholder="Choose an option"
      onChange={setValue}
    />
  )
}

;<MyThirdComponent />
```

### Return Value

The value prop passed to select is is either an `Option` object, or an Array of `Option` objects. If it is an
array, the component automatically becomes a multi-select. The shape of an Option object is described below.

```ts
import { SelectProps } from "@operational/components"

const option: SelectProps["options"][-1] = {
  label: "any_string",
  value: "Any String",
}
```
