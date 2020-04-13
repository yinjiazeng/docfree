---
depth: 2
pageDepth: 4
---

# xxx

## xxx

### xxx

```jsx
import React, { useState } from 'react';
import { Button } from 'antd';

class Demo extends React.Component {
  render() {
    return <Button className={$style.color}>11111</Button>
  }
};

<Demo />

<style module>
.color {
  color: red;
}
</style>
```

```vue
<template>
  <div :class="$style.color" @click="toggle">{{title}}</div>
</template>

<script>
export default {
  data() {
    return {
      title: '1',
    }
  },
  methods: {
    toggle() {
      this.title = this.title === '1' ? '2' : '1';
    }
  },
}
</script>

<style module>
.color {
  color: red;
}
</style>
```
