class MarkdownEditor
  marked.setOptions({
    breaks: true
  })

  constructor: (editorId, displayId) ->
    @editor = document.getElementById(editorId)
    @display = document.getElementById(displayId)

  subscriptEditorOnKeyUp: ->
    lazyFunc = _.debounce @parseAndRenderMarkdown.bind(this), 300
    @editor.addEventListener "keyup", lazyFunc

  parseAndRenderMarkdown: () ->
    formatted = marked(@editor.value)
    @display.innerHTML = formatted


editor = new MarkdownEditor("markdownEditor", "markdownDisplay")
editor.subscriptEditorOnKeyUp()