<vp-checkbox>
  <label class="{ returnStyles('element-container', this.opts.type) }">{ this.opts.label }
    <input type="checkbox" name="{ this.opts.name }" checked={ (JSON.parse(this.opts.checked)) ? true : false; }>
    <span class="{ returnStyles('checkmark', this.opts.type) }"></span>
  </label>

  <script>
    returnStyles(initialClass, type) {
      if (!type)  return initialClass;
      let tmp = type.split(',')
      let str = ''
      tmp.forEach((o) => {
        str += `${o} `
      })
      return `${initialClass} ${str.trim()}`
    }
  </script>
</vp-checkbox>